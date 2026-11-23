"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  Lightbulb,
  Play,
  RotateCcw,
  Volume2,
  Wand2,
} from "lucide-react";
import * as writingModule from "@/data/chinese/writing";
import { lookupChineseSync } from "@/data/chinese/dictionary";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";
import { speakChinese } from "@/lib/speech";
import { addXP } from "@/lib/storage";
import type { HSKLevel, SubDifficulty } from "@/types";

export interface StrokeDescriptor {
  nameVi: string;
  ruleVi: string;
  points: [number, number][]; // Normalized 0..100 x 0..100
}

export interface HanziStrokeTemplateFallback {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  radical: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  strokes: StrokeDescriptor[];
}

export interface HanziStrokeCanvasProps {
  hanzi: string;
  meaningVi?: string;
  pinyin?: string;
  onComplete?: (accuracy: number) => void;
}

interface StrokeErrorFeedback {
  strokeIndex: number; // 0-based
  strokeNumber: number; // 1-based
  strokeName: string;
  reasonVi: string;
  ruleVi: string;
  userPoints: [number, number][];
}

const CANVAS_SIZE = 300;

interface HanziWriterCharData {
  strokes: string[];
  medians: number[][][];
}

const hanziDataCache = new Map<string, HanziWriterCharData>();

function clampNorm(v: number, min = 6, max = 94): number {
  return Math.max(min, Math.min(max, v));
}

function normalizeMedianPoints(median: number[][]): [number, number][] {
  return median.map(([x, y]) => [
    clampNorm((x / 1024) * 100),
    clampNorm(((900 - y) / 1024) * 100),
  ]);
}

function classifyStrokeFromPoints(points: [number, number][]): {
  nameVi: string;
  ruleVi: string;
} {
  if (points.length < 2) {
    return {
      nameVi: "Nét Chấm (点 - Diǎn)",
      ruleVi: "Chấm gọn, nhấn nhẹ ở cuối nét.",
    };
  }

  const start = points[0];
  const end = points[points.length - 1];
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const directDist = Math.hypot(dx, dy);

  let totalLen = 0;
  for (let i = 1; i < points.length; i++) {
    totalLen += Math.hypot(
      points[i][0] - points[i - 1][0],
      points[i][1] - points[i - 1][1]
    );
  }

  // Detect hooks (Móc) or turns (Gập) when path has >= 3 points
  if (points.length >= 3) {
    const mid = points[Math.floor(points.length / 2)];
    const v1x = mid[0] - start[0];
    const v1y = mid[1] - start[1];
    const v2x = end[0] - mid[0];
    const v2y = end[1] - mid[1];
    const len1 = Math.hypot(v1x, v1y);
    const len2 = Math.hypot(v2x, v2y);

    if (len1 > 6 && len2 > 4) {
      const cosAngle = (v1x * v2x + v1y * v2y) / (len1 * len2);
      // Sharp turn (> ~60 degrees)
      if (cosAngle < 0.5) {
        const lastPrev = points[points.length - 2];
        const lastDx = end[0] - lastPrev[0];
        const lastDy = end[1] - lastPrev[1];
        const lastLen = Math.hypot(lastDx, lastDy);
        if (lastLen < 16 && lastDy < -2) {
          return {
            nameVi: "Nét Móc (钩 - Gōu)",
            ruleVi: "Kéo nét chính rồi bật móc gọn ở cuối nét.",
          };
        }
        return {
          nameVi: "Nét Gập (折 - Zhé)",
          ruleVi: "Viết liền mạch qua điểm gập, không nhấc bút.",
        };
      }
    }
  }

  if (totalLen < 16 || directDist < 14) {
    return {
      nameVi: "Nét Chấm (点 - Diǎn)",
      ruleVi: "Chấm gọn, nhấn nhẹ ở cuối nét.",
    };
  }

  if (Math.abs(dx) >= Math.abs(dy) * 1.8) {
    if (dx > 0 && dy < -4) {
      return {
        nameVi: "Nét Hất (提 - Tí)",
        ruleVi: "Hất nhanh từ dưới trái lên trên phải.",
      };
    }
    return {
      nameVi: "Nét Ngang (横 - Héng)",
      ruleVi: "Viết từ trái sang phải, hơi chếch nhẹ lên trên.",
    };
  }

  if (Math.abs(dy) >= Math.abs(dx) * 1.8 && dy > 0) {
    return {
      nameVi: "Nét Sổ (竖 - Shù)",
      ruleVi: "Kéo thẳng từ trên xuống dưới.",
    };
  }

  if (dx < -4 && dy > 4) {
    return {
      nameVi: "Nét Phẩy (撇 - Piě)",
      ruleVi: "Đặt bút rồi kéo vuốt nhẹ xuống góc trái dưới.",
    };
  }

  if (dx > 4 && dy > 4) {
    return {
      nameVi: "Nét Mác (捺 - Nà)",
      ruleVi: "Kéo từ trên trái xuống dưới phải, nhấn nhẹ ở chân nét.",
    };
  }

  return {
    nameVi: "Nét Ngang (横 - Héng)",
    ruleVi: "Viết liền mạch theo thứ tự từ trên xuống dưới, trái sang phải.",
  };
}

const COMMON_CHAR_META: Record<
  string,
  {
    pinyin: string;
    meaningVi: string;
    radical: string;
    level: HSKLevel;
    subDifficulty: SubDifficulty;
  }
> = {
  永: {
    pinyin: "yǒng",
    meaningVi: "vĩnh cửu, mãi mãi",
    radical: "水 (Thủy)",
    level: "HSK0",
    subDifficulty: "basic",
  },
  爱: {
    pinyin: "ài",
    meaningVi: "yêu, tình yêu",
    radical: "爫 (Trảo)",
    level: "HSK1",
    subDifficulty: "basic",
  },
  情: {
    pinyin: "qíng",
    meaningVi: "tình cảm, cảm xúc",
    radical: "忄 (Tâm)",
    level: "HSK3",
    subDifficulty: "basic",
  },
};

function extractValidSingleHanziChars(raw: string): string[] {
  return raw.match(/[\u4e00-\u9fff]/g) ?? [];
}

function cleanPinyin(val?: string): string {
  const t = val?.trim() ?? "";
  if (!t || t === "hàn zì" || t === "[]" || t === "—") return "";
  return t;
}

function cleanMeaning(val?: string): string {
  const t = val?.trim() ?? "";
  if (
    !t ||
    t.startsWith("Tra cứu") ||
    t === "Chữ Hán luyện viết" ||
    t === "Chữ Hán"
  ) {
    return "";
  }
  return t;
}

function resolveCharMetadata(
  char: string,
  pinyinHint?: string,
  meaningHint?: string
): {
  pinyin: string;
  meaningVi: string;
  radical: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
} {
  const bankMatch = Array.isArray(writingModule.HANZI_STROKE_BANK)
    ? writingModule.HANZI_STROKE_BANK.find((item) => item.hanzi === char)
    : undefined;
  const builtin = BUILTIN_TEMPLATES[char];
  const common = COMMON_CHAR_META[char];
  const dictEntry = lookupChineseSync(char);

  const dictPinyin = cleanPinyin(dictEntry.pinyin);
  const dictMeaning = cleanMeaning(dictEntry.meaningVi);

  return {
    pinyin:
      cleanPinyin(pinyinHint) ||
      cleanPinyin(bankMatch?.pinyin) ||
      cleanPinyin(builtin?.pinyin) ||
      cleanPinyin(common?.pinyin) ||
      dictPinyin,
    meaningVi:
      cleanMeaning(meaningHint) ||
      cleanMeaning(bankMatch?.meaningVi) ||
      cleanMeaning(builtin?.meaningVi) ||
      cleanMeaning(common?.meaningVi) ||
      dictMeaning ||
      `Chữ Hán "${char}"`,
    radical:
      bankMatch?.radical ||
      builtin?.radical ||
      common?.radical ||
      (dictEntry.radical && dictEntry.radical !== "Bộ thủ cơ bản"
        ? dictEntry.radical
        : `Chữ ${char}`),
    level:
      bankMatch?.level ||
      builtin?.level ||
      common?.level ||
      dictEntry.level ||
      "HSK1",
    subDifficulty:
      bankMatch?.subDifficulty ||
      builtin?.subDifficulty ||
      common?.subDifficulty ||
      "basic",
  };
}

function buildTemplateFromHanziData(
  char: string,
  data: HanziWriterCharData,
  pinyinHint?: string,
  meaningHint?: string
): HanziStrokeTemplateFallback {
  const meta = resolveCharMetadata(char, pinyinHint, meaningHint);
  const strokes: StrokeDescriptor[] = data.medians.map((median, idx) => {
    const points = normalizeMedianPoints(median);
    const { nameVi, ruleVi } = classifyStrokeFromPoints(points);
    return {
      nameVi: `Nét ${idx + 1}: ${nameVi}`,
      ruleVi,
      points,
    };
  });

  return {
    hanzi: char,
    ...meta,
    strokes,
  };
}

// Built-in fallback templates for common characters + deterministic stroke generator
const BUILTIN_TEMPLATES: Record<string, HanziStrokeTemplateFallback> = {
  一: {
    hanzi: "一",
    pinyin: "yī",
    meaningVi: "Số một",
    radical: "一 (Nhất)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Ngang (横 - Héng)",
        ruleVi: "Viết từ trái sang phải, hơi chếch nhẹ lên trên ở cuối nét.",
        points: [[15, 50], [50, 49], [85, 48]],
      },
    ],
  },
  二: {
    hanzi: "二",
    pinyin: "èr",
    meaningVi: "Số hai",
    radical: "二 (Nhị)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Ngang ngắn trên (短横)",
        ruleVi: "Trên trước dưới sau: viết nét ngang ngắn phía trên từ trái sang phải.",
        points: [[26, 33], [50, 32], [74, 31]],
      },
      {
        nameVi: "Nét Ngang dài dưới (长横)",
        ruleVi: "Trên trước dưới sau: viết nét ngang dài phía dưới từ trái sang phải.",
        points: [[14, 70], [50, 69], [86, 68]],
      },
    ],
  },
  三: {
    hanzi: "三",
    pinyin: "sān",
    meaningVi: "Số ba",
    radical: "一 (Nhất)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Ngang trên (上横)",
        ruleVi: "Trên trước dưới sau: viết nét ngang trên từ trái sang phải.",
        points: [[24, 25], [50, 24], [76, 23]],
      },
      {
        nameVi: "Nét Ngang giữa (中横)",
        ruleVi: "Viết nét ngang ngắn hơn ở chính giữa.",
        points: [[30, 50], [50, 49], [70, 48]],
      },
      {
        nameVi: "Nét Ngang đáy (底长横)",
        ruleVi: "Viết nét ngang dài dưới cùng vững chãi từ trái sang phải.",
        points: [[14, 76], [50, 75], [86, 74]],
      },
    ],
  },
  十: {
    hanzi: "十",
    pinyin: "shí",
    meaningVi: "Số mười",
    radical: "十 (Thập)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Ngang (横 - Héng)",
        ruleVi: "Ngang trước Sổ sau: viết nét ngang từ trái sang phải.",
        points: [[16, 48], [50, 47], [84, 46]],
      },
      {
        nameVi: "Nét Sổ (竖 - Shù)",
        ruleVi: "Ngang trước Sổ sau: viết nét sổ thẳng từ trên xuống dưới qua tâm.",
        points: [[50, 15], [50, 50], [50, 86]],
      },
    ],
  },
  人: {
    hanzi: "人",
    pinyin: "rén",
    meaningVi: "Con người",
    radical: "人 (Nhân)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Phẩy (撇 - Piě)",
        ruleVi: "Phẩy trước Mác sau: kéo từ đỉnh giữa xuống góc dưới bên trái.",
        points: [[52, 18], [38, 52], [16, 82]],
      },
      {
        nameVi: "Nét Mác (捺 - Nà)",
        ruleVi: "Phẩy trước Mác sau: từ giữa nét phẩy kéo xuống góc dưới bên phải.",
        points: [[44, 44], [64, 66], [85, 82]],
      },
    ],
  },
  大: {
    hanzi: "大",
    pinyin: "dà",
    meaningVi: "To lớn",
    radical: "大 (Đại)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Ngang (横 - Héng)",
        ruleVi: "Ngang trước Phẩy Mác sau: viết nét ngang từ trái sang phải.",
        points: [[18, 42], [50, 41], [82, 40]],
      },
      {
        nameVi: "Nét Phẩy (撇 - Piě)",
        ruleVi: "Từ đỉnh trên kéo xuyên qua nét ngang xuống góc trái dưới.",
        points: [[50, 15], [42, 52], [16, 84]],
      },
      {
        nameVi: "Nét Mác (捺 - Nà)",
        ruleVi: "Từ giao điểm kéo xuống góc phải dưới.",
        points: [[50, 45], [68, 68], [86, 84]],
      },
    ],
  },
  口: {
    hanzi: "口",
    pinyin: "kǒu",
    meaningVi: "Cái miệng / Khẩu",
    radical: "口 (Khẩu)",
    level: "HSK0",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Sổ trái (左竖)",
        ruleVi: "Ngoài trước trong sau: viết nét sổ bên trái từ trên xuống dưới.",
        points: [[25, 26], [26, 52], [27, 78]],
      },
      {
        nameVi: "Nét Ngang Gập (横折 - Héngzhé)",
        ruleVi: "Viết nét ngang trên từ trái sang phải rồi gập vuông góc xuống dưới.",
        points: [[25, 26], [74, 26], [72, 76]],
      },
      {
        nameVi: "Nét Ngang đóng (底横)",
        ruleVi: "Vào nhà trước đóng cửa sau: viết nét ngang đáy từ trái sang phải.",
        points: [[27, 76], [50, 76], [73, 76]],
      },
    ],
  },
  中: {
    hanzi: "中",
    pinyin: "zhōng",
    meaningVi: "Ở giữa / Trung tâm",
    radical: "丨 (Cổn)",
    level: "HSK1",
    subDifficulty: "basic",
    strokes: [
      {
        nameVi: "Nét Sổ trái (左竖)",
        ruleVi: "Viết nét sổ ngắn bên trái khung chữ Khẩu.",
        points: [[24, 32], [25, 46], [26, 60]],
      },
      {
        nameVi: "Nét Ngang Gập (横折)",
        ruleVi: "Từ đầu nét sổ trái kéo ngang sang phải rồi gập xuống.",
        points: [[24, 32], [76, 32], [74, 58]],
      },
      {
        nameVi: "Nét Ngang đáy (底横)",
        ruleVi: "Đóng đáy khung chữ Khẩu từ trái sang phải.",
        points: [[26, 58], [50, 58], [74, 58]],
      },
      {
        nameVi: "Nét Sổ xuyên tâm (中竖)",
        ruleVi: "Nét sổ chính giữa xuyên từ đỉnh xuống đáy cuối cùng.",
        points: [[50, 12], [50, 50], [50, 88]],
      },
    ],
  },
};

function getExactLocalTemplate(
  char: string,
  pinyinHint?: string,
  meaningHint?: string
): HanziStrokeTemplateFallback | null {
  const bankMatch = Array.isArray(writingModule.HANZI_STROKE_BANK)
    ? writingModule.HANZI_STROKE_BANK.find((item) => item.hanzi === char)
    : undefined;
  if (bankMatch && Array.isArray(bankMatch.strokes) && bankMatch.strokes.length > 0) {
    const meta = resolveCharMetadata(char, pinyinHint, meaningHint);
    return {
      ...bankMatch,
      ...meta,
    };
  }

  const builtin = BUILTIN_TEMPLATES[char];
  if (builtin && builtin.strokes.length > 0) {
    const meta = resolveCharMetadata(char, pinyinHint, meaningHint);
    return {
      ...builtin,
      ...meta,
    };
  }

  return null;
}

function dist(a: [number, number], b: [number, number]): number {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

function pathLength(pts: [number, number][]): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    len += dist(pts[i - 1], pts[i]);
  }
  return len;
}

/**
 * Evaluate user's drawn stroke against target stroke template (0..100 normalized space)
 */
function evaluateStroke(
  userPts: [number, number][],
  targetStroke: StrokeDescriptor,
  allStrokes: StrokeDescriptor[],
  currentIdx: number
): { ok: boolean; reasonVi: string } {
  if (userPts.length < 2) {
    return {
      ok: false,
      reasonVi: "Nét vẽ quá ngắn (bạn mới chấm 1 điểm). Hãy kéo bút theo hết chiều dài nét.",
    };
  }

  const len = pathLength(userPts);
  if (len < 10) {
    return {
      ok: false,
      reasonVi: "Nét vẽ quá ngắn. Hãy kéo bút dài hơn theo đường nét mờ trên ô Mễ tự cách.",
    };
  }

  const uStart = userPts[0];
  const uEnd = userPts[userPts.length - 1];
  const tPts = targetStroke.points;
  const tStart = tPts[0];
  const tEnd = tPts[tPts.length - 1];

  const startError = dist(uStart, tStart);
  const endError = dist(uEnd, tEnd);
  const reverseStartError = dist(uStart, tEnd);
  const reverseEndError = dist(uEnd, tStart);

  // 1. Check if user drew the stroke in REVERSE direction (ngược hướng bút)
  if (
    reverseStartError + reverseEndError < startError + endError - 14 &&
    reverseStartError < 28 &&
    reverseEndError < 28
  ) {
    return {
      ok: false,
      reasonVi:
        "Bạn vẽ NGƯỢC HƯỚNG BÚT (bắt đầu từ điểm kết thúc của nét). Trong thư pháp Hán tự, tuyệt đối không kéo ngược từ phải sang trái hoặc từ dưới lên trên (trừ nét Hất 提).",
    };
  }

  // 2. Check if user drew a DIFFERENT stroke out of order (sai thứ tự nét)
  for (let i = 0; i < allStrokes.length; i++) {
    if (i === currentIdx) continue;
    const other = allStrokes[i];
    const oStart = other.points[0];
    const oEnd = other.points[other.points.length - 1];
    const otherDist = dist(uStart, oStart) + dist(uEnd, oEnd);
    if (otherDist < 32 && startError + endError > 45) {
      return {
        ok: false,
        reasonVi: `Bạn viết SAI THỨ TỰ NÉT (bạn vừa viết sang Nét thứ ${i + 1}: ${other.nameVi}). Phải viết lần lượt Nét thứ ${currentIdx + 1} trước!`,
      };
    }
  }

  // 3. Check vector angle similarity
  const uDx = uEnd[0] - uStart[0];
  const uDy = uEnd[1] - uStart[1];
  const tDx = tEnd[0] - tStart[0];
  const tDy = tEnd[1] - tStart[1];

  const uAngle = Math.atan2(uDy, uDx);
  const tAngle = Math.atan2(tDy, tDx);
  let angleDiffDeg = Math.abs((uAngle - tAngle) * (180 / Math.PI));
  if (angleDiffDeg > 180) angleDiffDeg = 360 - angleDiffDeg;

  if (angleDiffDeg > 58) {
    return {
      ok: false,
      reasonVi: `Bạn vẽ LỆCH HƯỚNG NÉT (${Math.round(angleDiffDeg)}° so với hướng chuẩn). Hãy nhìn mũi tên gợi ý của ${targetStroke.nameVi}.`,
    };
  }

  // 4. Check start & end position tolerance
  if (startError > 34 || endError > 36) {
    return {
      ok: false,
      reasonVi:
        "Bạn đặt bút hoặc nhấc bút LỆCH VỊ TRÍ khá xa trên khung Mễ tự cách. Hãy đặt bút tại chấm tròn màu vàng và kéo tới cuối nét mẫu.",
    };
  }

  return { ok: true, reasonVi: "" };
}

export function HanziStrokeCanvas({
  hanzi,
  meaningVi,
  pinyin,
  onComplete,
}: HanziStrokeCanvasProps) {
  const chars = useMemo(
    () => extractValidSingleHanziChars(hanzi),
    [hanzi]
  );

  const [selectedCharIdx, setSelectedCharIdx] = useState(0);

  useEffect(() => {
    setSelectedCharIdx(0);
  }, [hanzi]);

  const activeChar =
    chars.length > 0
      ? chars[Math.min(selectedCharIdx, chars.length - 1)]
      : "";

  const [hanziData, setHanziData] = useState<HanziWriterCharData | null>(() =>
    activeChar ? (hanziDataCache.get(activeChar) ?? null) : null
  );
  const [isLoadingData, setIsLoadingData] = useState<boolean>(() =>
    activeChar ? !hanziDataCache.has(activeChar) : false
  );
  const [retryNonce, setRetryNonce] = useState(0);

  useEffect(() => {
    if (!activeChar) {
      setHanziData(null);
      setIsLoadingData(false);
      return;
    }

    const cached = hanziDataCache.get(activeChar);
    if (cached) {
      setHanziData(cached);
      setIsLoadingData(false);
      return;
    }

    let cancelled = false;
    setIsLoadingData(true);
    setHanziData(null);

    const isValidStrokeData = (
      data: unknown
    ): data is HanziWriterCharData =>
      Boolean(
        data &&
          typeof data === "object" &&
          Array.isArray((data as HanziWriterCharData).medians) &&
          (data as HanziWriterCharData).medians.length > 0
      );

    const loadStrokeData = async () => {
      const encoded = encodeURIComponent(activeChar);
      const endpoints = [
        `/api/hanzi-stroke?char=${encoded}`,
        `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${encoded}.json`,
      ];

      for (const url of endpoints) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const data: unknown = await res.json();
          if (isValidStrokeData(data)) {
            if (!cancelled) {
              hanziDataCache.set(activeChar, data);
              setHanziData(data);
            }
            return;
          }
        } catch {
          // Try next endpoint
        }
      }
    };

    loadStrokeData().finally(() => {
      if (!cancelled) {
        setIsLoadingData(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [activeChar, retryNonce]);

  const isExactSingleChar =
    chars.length === 1 && hanzi.trim() === chars[0];
  const charPinyinHint = isExactSingleChar ? pinyin : undefined;
  const charMeaningHint = isExactSingleChar ? meaningVi : undefined;

  const charMeta = useMemo(
    () =>
      activeChar
        ? resolveCharMetadata(activeChar, charPinyinHint, charMeaningHint)
        : {
            pinyin: "",
            meaningVi: "",
            radical: "",
            level: "HSK1" as HSKLevel,
            subDifficulty: "basic" as SubDifficulty,
          },
    [activeChar, charPinyinHint, charMeaningHint]
  );

  const template = useMemo<HanziStrokeTemplateFallback | null>(() => {
    if (!activeChar) return null;
    if (hanziData) {
      return buildTemplateFromHanziData(
        activeChar,
        hanziData,
        charPinyinHint,
        charMeaningHint
      );
    }
    if (isLoadingData) {
      return null;
    }
    return getExactLocalTemplate(activeChar, charPinyinHint, charMeaningHint);
  }, [activeChar, hanziData, isLoadingData, charPinyinHint, charMeaningHint]);

  const strokes = useMemo(() => template?.strokes ?? [], [template]);
  const isDataUnavailable = !isLoadingData && strokes.length === 0;

  const [currentStrokeIdx, setCurrentStrokeIdx] = useState(0);
  const [completedUserStrokes, setCompletedUserStrokes] = useState<
    [number, number][][]
  >([]);
  const [activeDragPoints, setActiveDragPoints] = useState<[number, number][]>(
    []
  );
  const [isDrawing, setIsDrawing] = useState(false);
  const [errorFeedback, setErrorFeedback] =
    useState<StrokeErrorFeedback | null>(null);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [showHintPulse, setShowHintPulse] = useState(true);
  const [animatingStrokeIdx, setAnimatingStrokeIdx] = useState<number | null>(
    null
  );
  const [charCompleted, setCharCompleted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animTimerRef = useRef<number | null>(null);

  const totalStrokes = strokes.length;

  // Reset state when activeChar changes
  useEffect(() => {
    setCurrentStrokeIdx(0);
    setCompletedUserStrokes([]);
    setActiveDragPoints([]);
    setIsDrawing(false);
    setErrorFeedback(null);
    setMistakeCount(0);
    setShowHintPulse(true);
    setAnimatingStrokeIdx(null);
    setCharCompleted(false);
    if (animTimerRef.current) {
      window.clearInterval(animTimerRef.current);
      animTimerRef.current = null;
    }
  }, [activeChar]);

  const accuracy = useMemo(() => {
    if (totalStrokes === 0) return 100;
    const penalty = mistakeCount * Math.round(65 / Math.max(1, totalStrokes));
    return Math.max(45, Math.min(100, 100 - penalty));
  }, [mistakeCount, totalStrokes]);

  // Draw Mễ tự cách (米字格) + watermark + completed strokes + hint + active drag
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    canvas.width = CANVAS_SIZE * dpr;
    canvas.height = CANVAS_SIZE * dpr;
    ctx.scale(dpr, dpr);

    // 1. Background (#FAF9F7 Stone paper)
    ctx.fillStyle = "#FAF9F7";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // 2. Outer border
    ctx.strokeStyle = "#D6D3CE";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, CANVAS_SIZE - 2, CANVAS_SIZE - 2);

    // 3. Mễ tự cách (米字格) guidelines
    ctx.save();
    ctx.strokeStyle = "#E5E5E0";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Horizontal & Vertical midlines
    ctx.beginPath();
    ctx.moveTo(0, CANVAS_SIZE / 2);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE / 2);
    ctx.moveTo(CANVAS_SIZE / 2, 0);
    ctx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE);
    // Diagonals
    ctx.moveTo(0, 0);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE);
    ctx.moveTo(CANVAS_SIZE, 0);
    ctx.lineTo(0, CANVAS_SIZE);
    ctx.stroke();
    ctx.restore();

    const toPx = (pt: [number, number]): [number, number] => [
      (pt[0] / 100) * CANVAS_SIZE,
      (pt[1] / 100) * CANVAS_SIZE,
    ];

    const drawPolyline = (
      pts: [number, number][],
      color: string,
      width: number,
      dashed = false
    ) => {
      if (pts.length < 2) return;
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (dashed) ctx.setLineDash([6, 6]);
      ctx.beginPath();
      const [sx, sy] = toPx(pts[0]);
      ctx.moveTo(sx, sy);
      for (let i = 1; i < pts.length; i++) {
        const [px, py] = toPx(pts[i]);
        ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawSvgStroke = (svgPath: string, fillColor: string) => {
      if (typeof Path2D === "undefined") return false;
      try {
        ctx.save();
        const scale = CANVAS_SIZE / 1024;
        ctx.translate(0, 900 * scale);
        ctx.scale(scale, -scale);
        ctx.fillStyle = fillColor;
        ctx.fill(new Path2D(svgPath));
        ctx.restore();
        return true;
      } catch {
        return false;
      }
    };

    const svgStrokes = hanziData?.strokes;

    // 4. Subtle background guide of all template strokes
    if (svgStrokes && svgStrokes.length > 0) {
      svgStrokes.forEach((svgPath, idx) => {
        if (!drawSvgStroke(svgPath, "rgba(107, 101, 94, 0.16)")) {
          const fallbackPts = strokes[idx]?.points;
          if (fallbackPts) drawPolyline(fallbackPts, "rgba(107, 101, 94, 0.16)", 14);
        }
      });
    } else {
      strokes.forEach((s) => {
        drawPolyline(s.points, "rgba(107, 101, 94, 0.16)", 14);
      });
    }

    // 5. Completed strokes in rich sumi ink
    completedUserStrokes.forEach((pts, idx) => {
      const svgPath = svgStrokes?.[idx];
      if (!svgPath || !drawSvgStroke(svgPath, "#262626")) {
        const templatePts = strokes[idx]?.points ?? pts;
        drawPolyline(templatePts, "#262626", 13);
      }
    });

    // 6. Demo animation stroke highlight
    if (animatingStrokeIdx !== null && strokes[animatingStrokeIdx]) {
      for (let i = 0; i <= animatingStrokeIdx; i++) {
        const s = strokes[i];
        if (!s) continue;
        const color = i === animatingStrokeIdx ? "#15803D" : "#262626";
        const svgPath = svgStrokes?.[i];
        if (!svgPath || !drawSvgStroke(svgPath, color)) {
          drawPolyline(s.points, color, 13);
        }
      }
    }

    // 7. Current target stroke guide (if hint or error active)
    const targetStroke = strokes[currentStrokeIdx];
    if (targetStroke && !charCompleted && (showHintPulse || errorFeedback)) {
      drawPolyline(targetStroke.points, "#D97706", 5, true);

      // Draw start dot (yellow/emerald) and direction arrow at end
      const [startX, startY] = toPx(targetStroke.points[0]);
      ctx.save();
      ctx.fillStyle = "#D97706";
      ctx.beginPath();
      ctx.arc(startX, startY, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 9px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(currentStrokeIdx + 1), startX, startY);
      ctx.restore();

      const lastPt = targetStroke.points[targetStroke.points.length - 1];
      const prevPt =
        targetStroke.points[Math.max(0, targetStroke.points.length - 2)];
      const [ex, ey] = toPx(lastPt);
      const [px, py] = toPx(prevPt);
      const angle = Math.atan2(ey - py, ex - px);
      ctx.save();
      ctx.translate(ex, ey);
      ctx.rotate(angle);
      ctx.fillStyle = "#D97706";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-10, -5);
      ctx.lineTo(-10, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // 8. If user made an error, draw their wrong stroke in crimson red (#B91C1C)
    if (errorFeedback && errorFeedback.userPoints.length >= 2) {
      drawPolyline(errorFeedback.userPoints, "#B91C1C", 8);
    }

    // 9. Active user drag path
    if (activeDragPoints.length >= 2) {
      drawPolyline(activeDragPoints, "#15803D", 10);
    }
  }, [
    hanziData,
    strokes,
    completedUserStrokes,
    currentStrokeIdx,
    activeDragPoints,
    showHintPulse,
    errorFeedback,
    animatingStrokeIdx,
    charCompleted,
  ]);

  const getNormalizedPoint = (
    e: React.PointerEvent<HTMLCanvasElement>
  ): [number, number] => {
    const canvas = canvasRef.current;
    if (!canvas) return [50, 50];
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    return [
      Math.max(0, Math.min(100, Number(x.toFixed(1)))),
      Math.max(0, Math.min(100, Number(y.toFixed(1)))),
    ];
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (charCompleted || currentStrokeIdx >= totalStrokes) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setErrorFeedback(null);
    setAnimatingStrokeIdx(null);
    const pt = getNormalizedPoint(e);
    setIsDrawing(true);
    setActiveDragPoints([pt]);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const pt = getNormalizedPoint(e);
    setActiveDragPoints((prev) => {
      if (prev.length === 0) return [pt];
      const last = prev[prev.length - 1];
      if (dist(last, pt) < 2) return prev;
      return [...prev, pt];
    });
  };

  const finishChar = useCallback(
    (finalAccuracy: number) => {
      setCharCompleted(true);
      setErrorFeedback(null);
      speakChinese(activeChar, 0.9);
      addXP(10);
      onComplete?.(finalAccuracy);
    },
    [activeChar, onComplete]
  );

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const targetStroke = strokes[currentStrokeIdx];
    if (!targetStroke) {
      setActiveDragPoints([]);
      return;
    }

    const evaluation = evaluateStroke(
      activeDragPoints,
      targetStroke,
      strokes,
      currentStrokeIdx
    );

    if (evaluation.ok) {
      const nextCompleted = [...completedUserStrokes, activeDragPoints];
      setCompletedUserStrokes(nextCompleted);
      setActiveDragPoints([]);
      setErrorFeedback(null);

      if (currentStrokeIdx + 1 >= totalStrokes) {
        setCurrentStrokeIdx(totalStrokes);
        finishChar(accuracy);
      } else {
        setCurrentStrokeIdx((idx) => idx + 1);
      }
    } else {
      setMistakeCount((m) => m + 1);
      setShowHintPulse(true);
      setErrorFeedback({
        strokeIndex: currentStrokeIdx,
        strokeNumber: currentStrokeIdx + 1,
        strokeName: targetStroke.nameVi,
        reasonVi: evaluation.reasonVi,
        ruleVi: targetStroke.ruleVi,
        userPoints: activeDragPoints,
      });
      setActiveDragPoints([]);
    }
  };

  const handlePlayAnimation = () => {
    if (totalStrokes === 0) return;
    if (animTimerRef.current) {
      window.clearInterval(animTimerRef.current);
      animTimerRef.current = null;
    }
    setErrorFeedback(null);
    let step = 0;
    setAnimatingStrokeIdx(0);
    animTimerRef.current = window.setInterval(() => {
      step += 1;
      if (step >= totalStrokes) {
        if (animTimerRef.current) {
          window.clearInterval(animTimerRef.current);
          animTimerRef.current = null;
        }
        window.setTimeout(() => setAnimatingStrokeIdx(null), 700);
      } else {
        setAnimatingStrokeIdx(step);
      }
    }, 550);
  };

  const handleAutoCompleteDemo = () => {
    if (totalStrokes === 0) return;
    if (animTimerRef.current) {
      window.clearInterval(animTimerRef.current);
      animTimerRef.current = null;
    }
    setCompletedUserStrokes(strokes.map((s) => s.points));
    setCurrentStrokeIdx(totalStrokes);
    finishChar(100);
  };

  const handleReset = () => {
    setCurrentStrokeIdx(0);
    setCompletedUserStrokes([]);
    setActiveDragPoints([]);
    setErrorFeedback(null);
    setMistakeCount(0);
    setCharCompleted(false);
    setAnimatingStrokeIdx(null);
  };

  const currentStroke = strokes[currentStrokeIdx];
  const displayMeta = template ?? charMeta;
  const displayPinyin = cleanPinyin(displayMeta.pinyin);
  const displayMeaning = cleanMeaning(displayMeta.meaningVi);

  if (chars.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 text-center shadow-xs">
        <AlertTriangle className="mx-auto mb-2 h-6 w-6 text-[#D97706]" />
        <p className="text-sm font-semibold text-[#262626]">
          Không có chữ Hán đơn hợp lệ để luyện viết
        </p>
        <p className="mt-1 text-xs text-[#737373]">
          Khung Mễ tự cách (米字格) chỉ nhận ký tự chữ Hán giản thể hợp lệ và tự động loại bỏ dấu câu, chữ cái Latin hoặc chữ số.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 shadow-xs">
      {/* Multi-character selector if compound word */}
      {chars.length > 1 && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2.5">
          <span className="text-xs font-semibold text-[#6B655E]">
            Từ ghép &ldquo;{hanzi}&rdquo; ({chars.length} chữ Hán) — Chọn từng chữ để luyện nét:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {chars.map((ch, idx) => {
              const active = idx === selectedCharIdx;
              return (
                <button
                  key={`${ch}-${idx}`}
                  type="button"
                  onClick={() => setSelectedCharIdx(idx)}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-base font-bold transition-colors cursor-pointer ${
                    active
                      ? "border-[#292524] bg-[#292524] text-white"
                      : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                  }`}
                >
                  {ch}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Mễ tự cách Canvas */}
        <div className="flex flex-col items-center lg:col-span-5">
          <div className="relative">
            <canvas
              ref={canvasRef}
              style={{
                width: `${CANVAS_SIZE}px`,
                height: `${CANVAS_SIZE}px`,
                touchAction: "none",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="cursor-crosshair rounded-2xl shadow-inner select-none"
            />

            {/* Floating badge on top-left of canvas */}
            <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#4A4540] shadow-xs backdrop-blur-xs">
              <span>米字格 · Mễ tự cách</span>
            </div>

            {isLoadingData && (
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-[1px]">
                <div className="rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2 text-xs font-medium text-[#4A4540] shadow-sm">
                  Đang tải dữ liệu nét chữ...
                </div>
              </div>
            )}

            {isDataUnavailable && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/90 px-6 text-center backdrop-blur-[1px]">
                <AlertTriangle className="h-6 w-6 text-[#D97706]" />
                <p className="text-xs font-semibold text-[#262626]">
                  Chưa có dữ liệu nét chữ cho &ldquo;{activeChar}&rdquo;
                </p>
                <p className="text-[11px] text-[#737373]">
                  Hệ thống không tạo nét giả. Bạn có thể thử tải lại hoặc chọn chữ Hán khác.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRetryNonce((n) => n + 1)}
                  className="mt-1 gap-1.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Thử tải lại
                </Button>
              </div>
            )}

            {/* Audio speaker button on top-right of canvas */}
            <button
              type="button"
              onClick={() => speakChinese(activeChar, 0.9)}
              title="Nghe phát âm chữ Hán"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E5E0] bg-white/95 text-[#6B655E] shadow-xs transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2.5 text-center text-xs text-[#737373]">
            {isDataUnavailable ? (
              "Chữ Hán này hiện chưa có dữ liệu thứ tự nét."
            ) : isLoadingData ? (
              "Đang chuẩn bị dữ liệu nét bút thuận..."
            ) : (
              <>
                Dùng chuột hoặc ngón tay kéo theo thứ tự nét từ chấm tròn số{" "}
                <strong className="text-[#D97706]">
                  {Math.min(currentStrokeIdx + 1, totalStrokes)}
                </strong>
              </>
            )}
          </p>
        </div>

        {/* Right: Metadata, Current Stroke Rule, Error Feedback & Controls */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-7">
          {/* Character Info Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl font-bold text-[#262626]">
                  {activeChar}
                </span>
                {displayPinyin && (
                  <span className="font-mono text-base font-semibold text-[#6B655E]">
                    [{displayPinyin}]
                  </span>
                )}
                <Badge variant="accent">{displayMeta.level}</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1 font-medium text-[#262626]">
                  Bộ thủ: <strong>{displayMeta.radical}</strong>
                </span>
                <span className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1 font-medium text-[#262626]">
                  Tổng số nét:{" "}
                  <strong>
                    {isLoadingData
                      ? "..."
                      : totalStrokes > 0
                        ? `${totalStrokes} nét`
                        : "Chưa có dữ liệu"}
                  </strong>
                </span>
              </div>
            </div>

            {displayMeaning && (
              <p className="text-sm font-medium text-[#4A4540]">
                Nghĩa: <strong className="text-[#262626]">{displayMeaning}</strong>
              </p>
            )}

            {/* Current Stroke Instruction Banner */}
            {!charCompleted && currentStroke && (
              <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B655E]">
                    Nét hiện tại: Nét {currentStrokeIdx + 1} / {totalStrokes}
                  </span>
                  <span className="text-xs font-semibold text-[#15803D]">
                    Độ chính xác: {accuracy}%
                  </span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#262626]">
                  {currentStroke.nameVi}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#57534E]">
                  Quy tắc bút thuận: {currentStroke.ruleVi}
                </p>
              </div>
            )}

            {/* Instant Error Feedback Alert */}
            <AnimatePresence mode="wait">
              {errorFeedback && (
                <motion.div
                  key={`err-${errorFeedback.strokeIndex}-${mistakeCount}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0, x: [0, -5, 5, -3, 3, 0] }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.32 }}
                  className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3.5 text-[#B91C1C]"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#B91C1C]" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p className="font-bold">
                        Sai ở nét thứ {errorFeedback.strokeNumber} ({errorFeedback.strokeName})!
                      </p>
                      <p className="leading-relaxed">{errorFeedback.reasonVi}</p>
                      <p className="font-semibold text-[#991B1B]">
                        Quy tắc đúng: {errorFeedback.ruleVi}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {charCompleted && (
                <motion.div
                  key="completed-banner"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={TACTILE_SPRING}
                  className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-[#15803D]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-6 w-6 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">
                          Hoàn thành chữ &ldquo;{activeChar}&rdquo; chuẩn quy tắc bút thuận!
                        </p>
                        <p className="text-xs opacity-90">
                          Độ chính xác: <strong>{accuracy}%</strong> · Số lần lệch nét:{" "}
                          {mistakeCount} · <strong>+10 XP</strong>
                        </p>
                      </div>
                    </div>
                    {chars.length > 1 && selectedCharIdx + 1 < chars.length && (
                      <Button
                        size="sm"
                        onClick={() => setSelectedCharIdx((i) => i + 1)}
                      >
                        Viết chữ tiếp ({chars[selectedCharIdx + 1]})
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* All Strokes Progress Pills */}
            {totalStrokes > 0 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Thứ tự toàn bộ {totalStrokes} nét bút thuận:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {strokes.map((st, idx) => {
                    const isDone = idx < currentStrokeIdx;
                    const isCurrent = idx === currentStrokeIdx && !charCompleted;
                    const isErr = errorFeedback?.strokeIndex === idx;
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-medium ${
                          isErr
                            ? "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] font-bold"
                            : isDone
                            ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                            : isCurrent
                            ? "border-[#292524] bg-[#292524] text-white font-semibold"
                            : "border-[#E5E5E0] bg-white text-[#737373]"
                        }`}
                      >
                        <span>#{idx + 1}</span>
                        <span>{st.nameVi.split("(")[0].trim()}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap items-center gap-2 border-t border-[#E5E5E0] pt-4">
            <Button
              variant="outline"
              size="sm"
              disabled={totalStrokes === 0}
              onClick={handlePlayAnimation}
              className="gap-1.5"
            >
              <Play className="h-3.5 w-3.5 text-[#6B655E]" />
              Xem nét mẫu (Animation)
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={totalStrokes === 0}
              onClick={() => setShowHintPulse((v) => !v)}
              className="gap-1.5"
            >
              {showHintPulse ? (
                <>
                  <Eye className="h-3.5 w-3.5 text-[#6B655E]" />
                  Ẩn đường dẫn gợi ý
                </>
              ) : (
                <>
                  <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" />
                  Gợi ý nét tiếp theo
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={totalStrokes === 0}
              onClick={handleReset}
              className="gap-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Viết lại chữ này
            </Button>

            <Button
              variant="secondary"
              size="sm"
              disabled={totalStrokes === 0}
              onClick={handleAutoCompleteDemo}
              className="gap-1.5 ml-auto"
            >
              <Wand2 className="h-3.5 w-3.5 text-[#6B655E]" />
              Hoàn thành mẫu (Không cảm ứng)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
