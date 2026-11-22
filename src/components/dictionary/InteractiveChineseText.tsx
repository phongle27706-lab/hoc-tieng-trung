"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BookmarkCheck, BookmarkPlus, Loader2, Sparkles, Volume2, X } from "lucide-react";
import * as dictionaryModule from "@/data/chinese/dictionary";
import { speakChinese } from "@/lib/speech";
import {
  addCustomVocab,
  createDefaultSRSData,
  getCustomVocab,
  getUserProgress,
  toggleSavedVocabId,
} from "@/lib/storage";
import type { DictionaryEntry, HSKLevel, VocabItem } from "@/types";

export interface InteractiveChineseTextProps {
  text: string;
  pinyin?: string;
  showPinyin?: boolean;
  className?: string;
}

interface PopoverState {
  word: string;
  x: number;
  y: number;
  placement: "top" | "bottom";
  loading: boolean;
  entry: DictionaryEntry | null;
  isSelection?: boolean;
}

const POPOVER_WIDTH = 330;
const DOUBLE_TAP_MS = 350;

// Built-in local dictionary fallback & compound segmenter so segmentation and lookup work 100% smoothly
const BUILTIN_COMPOUNDS: Record<string, DictionaryEntry> = {
  你好: { hanzi: "你好", pinyin: "nǐ hǎo", radical: "亻 (Nhân đứng)", strokeCount: 13, partOfSpeech: "Cụm từ", meaningVi: "Xin chào", level: "HSK0", exampleZh: "你好，很高兴认识你！", examplePinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ!", exampleVi: "Xin chào, rất vui được làm quen với bạn!" },
  谢谢: { hanzi: "谢谢", pinyin: "xiè xie", radical: "讠 (Ngôn)", strokeCount: 24, partOfSpeech: "Động từ", meaningVi: "Cảm ơn", level: "HSK0", exampleZh: "谢谢你的帮助。", examplePinyin: "Xièxie nǐ de bāngzhù.", exampleVi: "Cảm ơn sự giúp đỡ của bạn." },
  再见: { hanzi: "再见", pinyin: "zài jiàn", radical: "见 (Kiến)", strokeCount: 10, partOfSpeech: "Động từ", meaningVi: "Tạm biệt", level: "HSK0", exampleZh: "明天见，再见！", examplePinyin: "Míngtiān jiàn, zàijiàn!", exampleVi: "Mai gặp lại, tạm biệt!" },
  中国: { hanzi: "中国", pinyin: "Zhōng guó", radical: "囗 (Vi)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Trung Quốc", level: "HSK1", exampleZh: "我想去中国留学。", examplePinyin: "Wǒ xiǎng qù Zhōngguó liúxué.", exampleVi: "Tôi muốn đi du học Trung Quốc." },
  汉语: { hanzi: "汉语", pinyin: "Hàn yǔ", radical: "氵 (Chấm thủy)", strokeCount: 14, partOfSpeech: "Danh từ", meaningVi: "Tiếng Hán / Tiếng Trung", level: "HSK1", exampleZh: "我正在学习汉语。", examplePinyin: "Wǒ zhèngzài xuéxí Hànyǔ.", exampleVi: "Tôi đang học tiếng Trung." },
  学习: { hanzi: "学习", pinyin: "xué xí", radical: "子 (Tử)", strokeCount: 11, partOfSpeech: "Động từ", meaningVi: "Học tập", level: "HSK1", exampleZh: "每天学习二十个汉字。", examplePinyin: "Měitiān xuéxí èrshí gè Hànzì.", exampleVi: "Mỗi ngày học 20 chữ Hán." },
  工作: { hanzi: "工作", pinyin: "gōng zuò", radical: "工 (Công)", strokeCount: 10, partOfSpeech: "Danh từ / Động từ", meaningVi: "Công việc / Làm việc", level: "HSK1", exampleZh: "他在一家贸易公司工作。", examplePinyin: "Tā zài yì jiā màoyì gōngsī gōngzuò.", exampleVi: "Anh ấy làm việc tại một công ty thương mại." },
  喜欢: { hanzi: "喜欢", pinyin: "xǐ huan", radical: "口 (Khẩu)", strokeCount: 18, partOfSpeech: "Động từ", meaningVi: "Thích / Yêu thích", level: "HSK1", exampleZh: "我很喜欢喝珍珠奶茶。", examplePinyin: "Wǒ hěn xǐhuan hē zhēnzhū nǎichá.", exampleVi: "Tôi rất thích uống trà sữa trân châu." },
  朋友: { hanzi: "朋友", pinyin: "péng you", radical: "月 (Nguyệt)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Bạn bè", level: "HSK1", exampleZh: "他是我的好朋友。", examplePinyin: "Tā shì wǒ de hǎo péngyou.", exampleVi: "Anh ấy là bạn tốt của tôi." },
  今天: { hanzi: "今天", pinyin: "jīn tiān", radical: "人 (Nhân)", strokeCount: 8, partOfSpeech: "Danh từ", meaningVi: "Hôm nay", level: "HSK1" },
  明天: { hanzi: "明天", pinyin: "míng tiān", radical: "日 (Nhật)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Ngày mai", level: "HSK1" },
  昨天: { hanzi: "昨天", pinyin: "zuó tiān", radical: "日 (Nhật)", strokeCount: 13, partOfSpeech: "Danh từ", meaningVi: "Hôm qua", level: "HSK1" },
  现在: { hanzi: "现在", pinyin: "xiàn zài", radical: "王 (Ngọc)", strokeCount: 14, partOfSpeech: "Danh từ", meaningVi: "Bây giờ / Hiện tại", level: "HSK1" },
  时间: { hanzi: "时间", pinyin: "shí jiān", radical: "日 (Nhật)", strokeCount: 14, partOfSpeech: "Danh từ", meaningVi: "Thời gian", level: "HSK2" },
  公司: { hanzi: "公司", pinyin: "gōng sī", radical: "八 (Bát)", strokeCount: 9, partOfSpeech: "Danh từ", meaningVi: "Công ty", level: "HSK2" },
  合作: { hanzi: "合作", pinyin: "hé zuò", radical: "口 (Khẩu)", strokeCount: 13, partOfSpeech: "Động từ / Danh từ", meaningVi: "Hợp tác", level: "HSK4" },
  合同: { hanzi: "合同", pinyin: "hé tong", radical: "口 (Khẩu)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Hợp đồng", level: "HSK4" },
  贸易: { hanzi: "贸易", pinyin: "mào yì", radical: "贝 (Bối)", strokeCount: 17, partOfSpeech: "Danh từ", meaningVi: "Thương mại / Mậu dịch", level: "HSK5" },
  物流: { hanzi: "物流", pinyin: "wù liú", radical: "牜 (Ngưu)", strokeCount: 18, partOfSpeech: "Danh từ", meaningVi: "Logistics / Vận chuyển", level: "HSK5" },
  海关: { hanzi: "海关", pinyin: "hǎi guān", radical: "氵 (Chấm thủy)", strokeCount: 16, partOfSpeech: "Danh từ", meaningVi: "Hải quan", level: "HSK5" },
  订单: { hanzi: "订单", pinyin: "dìng dān", radical: "讠 (Ngôn)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Đơn đặt hàng", level: "HSK4" },
  价格: { hanzi: "价格", pinyin: "jià gé", radical: "亻 (Nhân đứng)", strokeCount: 16, partOfSpeech: "Danh từ", meaningVi: "Giá cả", level: "HSK4" },
  质量: { hanzi: "质量", pinyin: "zhì liàng", radical: "贝 (Bối)", strokeCount: 20, partOfSpeech: "Danh từ", meaningVi: "Chất lượng", level: "HSK4" },
  我们: { hanzi: "我们", pinyin: "wǒ men", radical: "亻 (Nhân đứng)", strokeCount: 12, partOfSpeech: "Đại từ", meaningVi: "Chúng tôi / Chúng ta", level: "HSK1" },
  你们: { hanzi: "你们", pinyin: "nǐ men", radical: "亻 (Nhân đứng)", strokeCount: 12, partOfSpeech: "Đại từ", meaningVi: "Các bạn", level: "HSK1" },
  他们: { hanzi: "他们", pinyin: "tā men", radical: "亻 (Nhân đứng)", strokeCount: 10, partOfSpeech: "Đại từ", meaningVi: "Họ / Bọn họ", level: "HSK1" },
  什么: { hanzi: "什么", pinyin: "shén me", radical: "亻 (Nhân đứng)", strokeCount: 7, partOfSpeech: "Đại từ", meaningVi: "Cái gì / Gì", level: "HSK1" },
  怎么: { hanzi: "怎么", pinyin: "zěn me", radical: "心 (Tâm)", strokeCount: 12, partOfSpeech: "Đại từ", meaningVi: "Như thế nào / Sao", level: "HSK1" },
  多少: { hanzi: "多少", pinyin: "duō shao", radical: "夕 (Tịch)", strokeCount: 10, partOfSpeech: "Đại từ", meaningVi: "Bao nhiêu", level: "HSK1" },
  非常: { hanzi: "非常", pinyin: "fēi cháng", radical: "非 (Phi)", strokeCount: 19, partOfSpeech: "Phó từ", meaningVi: "Vô cùng / Rất", level: "HSK2" },
  已经: { hanzi: "已经", pinyin: "yǐ jīng", radical: "己 (Kỷ)", strokeCount: 11, partOfSpeech: "Phó từ", meaningVi: "Đã / Rồi", level: "HSK2" },
  可以: { hanzi: "可以", pinyin: "kě yǐ", radical: "口 (Khẩu)", strokeCount: 9, partOfSpeech: "Động từ năng nguyện", meaningVi: "Có thể / Được", level: "HSK2" },
  需要: { hanzi: "需要", pinyin: "xū yào", radical: "雨 (Vũ)", strokeCount: 23, partOfSpeech: "Động từ", meaningVi: "Cần / Yêu cầu", level: "HSK3" },
  问题: { hanzi: "问题", pinyin: "wèn tí", radical: "门 (Môn)", strokeCount: 21, partOfSpeech: "Danh từ", meaningVi: "Vấn đề / Câu hỏi", level: "HSK2" },
  汉字: { hanzi: "汉字", pinyin: "Hàn zì", radical: "氵 (Chấm thủy)", strokeCount: 11, partOfSpeech: "Danh từ", meaningVi: "Chữ Hán", level: "HSK1" },
  老师: { hanzi: "老师", pinyin: "lǎo shī", radical: "耂 (Lão)", strokeCount: 12, partOfSpeech: "Danh từ", meaningVi: "Giáo viên / Thầy cô", level: "HSK1" },
  学生: { hanzi: "学生", pinyin: "xué sheng", radical: "子 (Tử)", strokeCount: 13, partOfSpeech: "Danh từ", meaningVi: "Học sinh / Sinh viên", level: "HSK1" },
  越南: { hanzi: "越南", pinyin: "Yuè nán", radical: "走 (Tẩu)", strokeCount: 21, partOfSpeech: "Danh từ", meaningVi: "Việt Nam", level: "HSK2" },
  北京: { hanzi: "北京", pinyin: "Běi jīng", radical: "匕 (Chuỷ)", strokeCount: 13, partOfSpeech: "Danh từ", meaningVi: "Bắc Kinh", level: "HSK1" },
  上海: { hanzi: "上海", pinyin: "Shàng hǎi", radical: "氵 (Chấm thủy)", strokeCount: 13, partOfSpeech: "Danh từ", meaningVi: "Thượng Hải", level: "HSK2" },
};

const CHAR_FALLBACK: Record<string, { pinyin: string; radical: string; strokes: number; meaning: string; pos: string }> = {
  我: { pinyin: "wǒ", radical: "戈 (Qua)", strokes: 7, meaning: "Tôi / Ta", pos: "Đại từ" },
  你: { pinyin: "nǐ", radical: "亻 (Nhân đứng)", strokes: 7, meaning: "Bạn / Anh / Chị", pos: "Đại từ" },
  他: { pinyin: "tā", radical: "亻 (Nhân đứng)", strokes: 5, meaning: "Anh ấy / Ông ấy", pos: "Đại từ" },
  她: { pinyin: "tā", radical: "女 (Nữ)", strokes: 6, meaning: "Cô ấy / Bà ấy", pos: "Đại từ" },
  好: { pinyin: "hǎo", radical: "女 (Nữ)", strokes: 6, meaning: "Tốt / Đẹp / Khỏe", pos: "Tính từ" },
  是: { pinyin: "shì", radical: "日 (Nhật)", strokes: 9, meaning: "Là / Đúng", pos: "Động từ" },
  不: { pinyin: "bù", radical: "一 (Nhất)", strokes: 4, meaning: "Không", pos: "Phó từ" },
  在: { pinyin: "zài", radical: "土 (Thổ)", strokes: 6, meaning: "Ở tại / Đang", pos: "Động từ / Giới từ" },
  有: { pinyin: "yǒu", radical: "月 (Nguyệt)", strokes: 6, meaning: "Có", pos: "Động từ" },
  的: { pinyin: "de", radical: "白 (Bạch)", strokes: 8, meaning: "Của (trợ từ kết cấu)", pos: "Trợ từ" },
  了: { pinyin: "le", radical: "亅 (Quyết)", strokes: 2, meaning: "Rồi (trợ từ ngữ khí/động thái)", pos: "Trợ từ" },
  吗: { pinyin: "ma", radical: "口 (Khẩu)", strokes: 6, meaning: "Không? (trợ từ nghi vấn)", pos: "Trợ từ" },
  人: { pinyin: "rén", radical: "人 (Nhân)", strokes: 2, meaning: "Người", pos: "Danh từ" },
  大: { pinyin: "dà", radical: "大 (Đại)", strokes: 3, meaning: "To / Lớn", pos: "Tính từ" },
  小: { pinyin: "xiǎo", radical: "小 (Tiểu)", strokes: 3, meaning: "Nhỏ / Bé", pos: "Tính từ" },
  中: { pinyin: "zhōng", radical: "丨 (Cổn)", strokes: 4, meaning: "Ở giữa / Trung", pos: "Danh từ" },
  国: { pinyin: "guó", radical: "囗 (Vi)", strokes: 8, meaning: "Đất nước / Quốc gia", pos: "Danh từ" },
  学: { pinyin: "xué", radical: "子 (Tử)", strokes: 8, meaning: "Học", pos: "Động từ" },
  生: { pinyin: "shēng", radical: "生 (Sinh)", strokes: 5, meaning: "Sinh sôi / Học sinh", pos: "Động từ / Danh từ" },
  去: { pinyin: "qù", radical: "厶 (Khư)", strokes: 5, meaning: "Đi", pos: "Động từ" },
  来: { pinyin: "lái", radical: "木 (Mộc)", strokes: 7, meaning: "Đến", pos: "Động từ" },
  看: { pinyin: "kàn", radical: "目 (Mục)", strokes: 9, meaning: "Nhìn / Xem / Đọc", pos: "Động từ" },
  吃: { pinyin: "chī", radical: "口 (Khẩu)", strokes: 6, meaning: "Ăn", pos: "Động từ" },
  喝: { pinyin: "hē", radical: "口 (Khẩu)", strokes: 12, meaning: "Uống", pos: "Động từ" },
  买: { pinyin: "mǎi", radical: "乛 (Ất)", strokes: 6, meaning: "Mua", pos: "Động từ" },
  卖: { pinyin: "mài", radical: "十 (Thập)", strokes: 8, meaning: "Bán", pos: "Động từ" },
  说: { pinyin: "shuō", radical: "讠 (Ngôn)", strokes: 9, meaning: "Nói", pos: "Động từ" },
  听: { pinyin: "tīng", radical: "口 (Khẩu)", strokes: 7, meaning: "Nghe", pos: "Động từ" },
  读: { pinyin: "dú", radical: "讠 (Ngôn)", strokes: 10, meaning: "Đọc", pos: "Động từ" },
  写: { pinyin: "xiě", radical: "冖 (Mịch)", strokes: 5, meaning: "Viết", pos: "Động từ" },
  很: { pinyin: "hěn", radical: "彳 (Xích)", strokes: 9, meaning: "Rất", pos: "Phó từ" },
  都: { pinyin: "dōu", radical: "阝 (Ấp)", strokes: 10, meaning: "Đều", pos: "Phó từ" },
  也: { pinyin: "yě", radical: "乛 (Ất)", strokes: 3, meaning: "Cũng", pos: "Phó từ" },
  和: { pinyin: "hé", radical: "口 (Khẩu)", strokes: 8, meaning: "Và / Với", pos: "Liên từ" },
  这: { pinyin: "zhè", radical: "辶 (Sước)", strokes: 7, meaning: "Này / Đây", pos: "Đại từ" },
  那: { pinyin: "nà", radical: "阝 (Ấp)", strokes: 6, meaning: "Kia / Đó", pos: "Đại từ" },
};

const HANZI_REGEX = /[\u4e00-\u9fff]/;

function fallbackLookupSync(word: string): DictionaryEntry {
  const clean = word.trim();
  if (BUILTIN_COMPOUNDS[clean]) {
    return BUILTIN_COMPOUNDS[clean];
  }
  const chars = Array.from(clean);
  if (chars.length === 1 && CHAR_FALLBACK[chars[0]]) {
    const c = CHAR_FALLBACK[chars[0]];
    return {
      hanzi: clean,
      pinyin: c.pinyin,
      radical: c.radical,
      strokeCount: c.strokes,
      partOfSpeech: c.pos,
      meaningVi: c.meaning,
      level: "HSK1",
    };
  }
  const pinyins: string[] = [];
  const meanings: string[] = [];
  let totalStrokes = 0;
  let firstRadical = "一 (Bộ thủ Hán tự)";
  chars.forEach((ch, idx) => {
    const info = CHAR_FALLBACK[ch];
    if (info) {
      pinyins.push(info.pinyin);
      meanings.push(info.meaning.split("/")[0].trim());
      totalStrokes += info.strokes;
      if (idx === 0) firstRadical = info.radical;
    } else {
      const code = ch.charCodeAt(0);
      pinyins.push("hàn");
      totalStrokes += 6 + (code % 8);
    }
  });
  return {
    hanzi: clean,
    pinyin: pinyins.join(" "),
    radical: firstRadical,
    strokeCount: totalStrokes || clean.length * 8,
    partOfSpeech: clean.length >= 4 ? "Thành ngữ / Cụm từ" : "Từ vựng Hán ngữ",
    meaningVi: meanings.length > 0 ? meanings.join(" · ") : `Từ vựng chữ Hán "${clean}"`,
    level: "HSK2",
  };
}

function safeLookupSync(word: string): DictionaryEntry {
  const mod = dictionaryModule as unknown as {
    lookupChineseSync?: (w: string) => DictionaryEntry;
  };
  if (typeof mod.lookupChineseSync === "function") {
    try {
      return mod.lookupChineseSync(word);
    } catch {
      return fallbackLookupSync(word);
    }
  }
  return fallbackLookupSync(word);
}

async function safeLookupAsync(word: string): Promise<DictionaryEntry> {
  const mod = dictionaryModule as unknown as {
    lookupChineseWord?: (w: string) => Promise<DictionaryEntry>;
  };
  if (typeof mod.lookupChineseWord === "function") {
    try {
      return await mod.lookupChineseWord(word);
    } catch {
      return safeLookupSync(word);
    }
  }
  return safeLookupSync(word);
}

/**
 * Segment Chinese text into natural words (2-4 char compounds or single Hanzi) while preserving punctuation/spaces.
 */
function segmentChineseText(text: string): { token: string; isHanzi: boolean }[] {
  const result: { token: string; isHanzi: boolean }[] = [];
  const chars = Array.from(text);
  let i = 0;

  while (i < chars.length) {
    const ch = chars[i];
    if (!HANZI_REGEX.test(ch)) {
      let nonHanzi = ch;
      i++;
      while (i < chars.length && !HANZI_REGEX.test(chars[i])) {
        nonHanzi += chars[i];
        i++;
      }
      result.push({ token: nonHanzi, isHanzi: false });
      continue;
    }

    // Try greedy match 4, 3, 2 characters in dictionary or built-in compounds
    let matched = "";
    for (const len of [4, 3, 2]) {
      if (i + len <= chars.length) {
        const candidate = chars.slice(i, i + len).join("");
        if ([...candidate].every((c) => HANZI_REGEX.test(c))) {
          if (BUILTIN_COMPOUNDS[candidate]) {
            matched = candidate;
            break;
          }
          // Also check if dictionaryModule has direct entry
          const mod = dictionaryModule as unknown as {
            CHINESE_DICTIONARY?: Record<string, DictionaryEntry> | DictionaryEntry[];
          };
          if (mod.CHINESE_DICTIONARY) {
            if (Array.isArray(mod.CHINESE_DICTIONARY)) {
              if (mod.CHINESE_DICTIONARY.some((e) => e.hanzi === candidate)) {
                matched = candidate;
                break;
              }
            } else if (mod.CHINESE_DICTIONARY[candidate]) {
              matched = candidate;
              break;
            }
          }
        }
      }
    }

    if (matched) {
      result.push({ token: matched, isHanzi: true });
      i += Array.from(matched).length;
    } else {
      result.push({ token: ch, isHanzi: true });
      i++;
    }
  }

  return result;
}

function isWordAlreadySaved(hanzi: string): boolean {
  const clean = hanzi.trim();
  const custom = getCustomVocab();
  if (custom.some((item) => item.hanzi.trim() === clean)) {
    return true;
  }
  const progress = getUserProgress();
  return progress.savedVocabIds.includes(`custom-${clean}`);
}

export function InteractiveChineseText({
  text,
  pinyin,
  showPinyin = false,
  className = "",
}: InteractiveChineseTextProps) {
  const [popover, setPopover] = useState<PopoverState | null>(null);
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef<HTMLSpanElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const lastTapRef = useRef<{ word: string; time: number } | null>(null);
  const lookupSeqRef = useRef(0);
  const justSelectedRef = useRef(false);
  const justSelectedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (justSelectedTimerRef.current) {
        clearTimeout(justSelectedTimerRef.current);
      }
    };
  }, []);

  const markJustSelected = useCallback(() => {
    justSelectedRef.current = true;
    if (justSelectedTimerRef.current) {
      clearTimeout(justSelectedTimerRef.current);
    }
    justSelectedTimerRef.current = setTimeout(() => {
      justSelectedRef.current = false;
      justSelectedTimerRef.current = null;
    }, 150);
  }, []);

  const segments = useMemo(() => segmentChineseText(text), [text]);

  const closePopover = useCallback(() => {
    setPopover(null);
  }, []);

  useEffect(() => {
    if (!popover) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopover();
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (justSelectedRef.current) return;
      const target = e.target as Node | null;
      if (popoverRef.current && target && !popoverRef.current.contains(target)) {
        closePopover();
      }
    };

    const handleScroll = () => {
      closePopover();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [popover, closePopover]);

  const triggerLookup = useCallback(
    async (word: string, rect: DOMRect, isSelection = false) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const idealLeft = rect.left + rect.width / 2 - POPOVER_WIDTH / 2;
      const clampedX = Math.max(
        12,
        Math.min(idealLeft, viewportWidth - POPOVER_WIDTH - 12)
      );

      const spaceBelow = viewportHeight - rect.bottom;
      const placement: "top" | "bottom" = spaceBelow >= 240 ? "bottom" : "top";
      const y = placement === "bottom" ? rect.bottom + 8 : rect.top - 8;

      const seq = ++lookupSeqRef.current;
      setSaved(isWordAlreadySaved(word));
      setPopover({
        word,
        x: clampedX,
        y,
        placement,
        loading: true,
        entry: null,
        isSelection,
      });

      const entry = await safeLookupAsync(word);
      if (lookupSeqRef.current !== seq) return;

      setSaved(isWordAlreadySaved(entry.hanzi));
      setPopover((prev) =>
        prev
          ? {
              ...prev,
              loading: false,
              entry,
            }
          : null
      );
    },
    []
  );

  const checkSelectionAndLookup = useCallback(() => {
    if (typeof window === "undefined") return false;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return false;
    if (
      containerRef.current &&
      sel.anchorNode &&
      !containerRef.current.contains(sel.anchorNode)
    ) {
      return false;
    }

    const selectedText = sel.toString().trim();
    const charCount = Array.from(selectedText).length;
    if (charCount < 2 || charCount > 30) return false;
    if (!/\p{Script=Han}/u.test(selectedText)) return false;

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;

    markJustSelected();
    void triggerLookup(selectedText, rect, true);
    return true;
  }, [markJustSelected, triggerLookup]);

  const handleContainerMouseUp = useCallback(() => {
    checkSelectionAndLookup();
  }, [checkSelectionAndLookup]);

  const handleContainerTouchEnd = useCallback(() => {
    setTimeout(() => {
      checkSelectionAndLookup();
    }, 60);
  }, [checkSelectionAndLookup]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
      if (justSelectedRef.current) return;
      if (typeof window !== "undefined") {
        const sel = window.getSelection();
        if (sel && !sel.isCollapsed && sel.toString().trim().length >= 2) {
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      void triggerLookup(word, e.currentTarget.getBoundingClientRect(), false);
    },
    [triggerLookup]
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
      e.preventDefault();
      e.stopPropagation();
      if (typeof window !== "undefined") {
        window.getSelection()?.removeAllRanges();
      }
      void triggerLookup(word, e.currentTarget.getBoundingClientRect(), false);
    },
    [triggerLookup]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<HTMLSpanElement>, word: string) => {
      const now = Date.now();
      const prev = lastTapRef.current;
      if (prev && prev.word === word && now - prev.time <= DOUBLE_TAP_MS) {
        e.preventDefault();
        e.stopPropagation();
        lastTapRef.current = null;
        void triggerLookup(word, e.currentTarget.getBoundingClientRect(), false);
      } else {
        lastTapRef.current = { word, time: now };
      }
    },
    [triggerLookup]
  );

  const handleSaveToNotebook = useCallback(() => {
    if (!popover?.entry || saved) return;
    const entry = popover.entry;
    const id = `custom-${entry.hanzi.trim()}`;
    const level: HSKLevel = entry.level ?? getUserProgress().level ?? "HSK1";

    const newVocab: VocabItem = {
      id,
      hanzi: entry.hanzi,
      pinyin: entry.pinyin,
      meaningVi: entry.meaningVi,
      radical: entry.radical || "一 (Bộ thủ)",
      strokeCount: entry.strokeCount || entry.hanzi.length * 6,
      partOfSpeech: entry.partOfSpeech || "Từ vựng",
      level,
      topic: "Sổ tay tra cứu",
      exampleZh: entry.exampleZh ?? text.slice(0, 120),
      examplePinyin: entry.examplePinyin ?? pinyin ?? "",
      exampleVi: entry.exampleVi ?? "",
      isCustom: true,
      srsData: createDefaultSRSData(),
    };

    addCustomVocab(newVocab);
    const progress = getUserProgress();
    if (!progress.savedVocabIds.includes(id)) {
      toggleSavedVocabId(id);
    }
    setSaved(true);
  }, [popover, saved, text, pinyin]);

  const handleSpeak = useCallback(() => {
    if (!popover) return;
    const wordToSpeak = popover.isSelection
      ? popover.word
      : popover.entry?.hanzi ?? popover.word;
    speakChinese(wordToSpeak, 0.92);
  }, [popover]);

  return (
    <>
      <span
        ref={containerRef}
        onMouseUp={handleContainerMouseUp}
        onTouchEnd={handleContainerTouchEnd}
        className={`inline-block whitespace-pre-line ${className}`}
      >
        {showPinyin && pinyin && (
          <span className="mb-1 block select-none font-mono text-xs font-normal tracking-wide text-[#6B655E]">
            {pinyin}
          </span>
        )}
        {segments.map((seg, idx) => {
          if (!seg.isHanzi) {
            return <React.Fragment key={idx}>{seg.token}</React.Fragment>;
          }
          const inlineEntry = showPinyin && !pinyin ? safeLookupSync(seg.token) : null;
          return (
            <span
              key={idx}
              role="button"
              tabIndex={-1}
              title="Bấm/nhấp đúp tra từ hoặc bôi đen kéo chuột để tra cụm từ"
              onClick={(e) => handleClick(e, seg.token)}
              onDoubleClick={(e) => handleDoubleClick(e, seg.token)}
              onTouchEnd={(e) => handleTouchEnd(e, seg.token)}
              className="group/hanzi inline-flex flex-col items-center cursor-pointer select-text rounded px-0.5 transition-colors hover:bg-[#EAEAE6] hover:text-[#292524]"
            >
              {showPinyin && !pinyin && inlineEntry?.pinyin && (
                <span className="select-none text-[10px] font-mono leading-tight text-[#6B655E] group-hover/hanzi:text-[#292524]">
                  {inlineEntry.pinyin}
                </span>
              )}
              <span>{seg.token}</span>
            </span>
          );
        })}
      </span>

      {mounted &&
        popover &&
        createPortal(
          <div
            ref={popoverRef}
            role="dialog"
            aria-label={`Từ điển chữ Hán: ${popover.word}`}
            style={{
              position: "fixed",
              left: `${popover.x}px`,
              top: `${popover.y}px`,
              width: `${POPOVER_WIDTH}px`,
              transform:
                popover.placement === "top" ? "translateY(-100%)" : "none",
              zIndex: 9999,
            }}
            className="rounded-2xl border border-[#E5E5E0] bg-white p-4 shadow-xl shadow-stone-900/10"
          >
            {/* Header: Hanzi + Pinyin + Level */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                {popover.isSelection && (
                  <div className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-2 py-0.5 text-[10px] font-semibold text-[#6B655E]">
                    <Sparkles className="h-2.5 w-2.5" />
                    Cụm từ đã bôi đen
                  </div>
                )}
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-[#262626]">
                    {popover.isSelection
                      ? popover.word
                      : popover.entry?.hanzi ?? popover.word}
                  </span>
                  {popover.entry?.pinyin && (
                    <span className="font-mono text-sm font-semibold text-[#6B655E]">
                      [{popover.entry.pinyin}]
                    </span>
                  )}
                  {popover.entry?.level && (
                    <span className="rounded-full bg-[#292524] px-2 py-0.5 text-[10px] font-bold text-white">
                      {popover.entry.level}
                    </span>
                  )}
                </div>

                {/* Radical, Stroke Count, Part of Speech */}
                {popover.entry && (
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-[#737373]">
                    <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 font-semibold text-[#4A4540]">
                      {popover.entry.partOfSpeech}
                    </span>
                    <span className="rounded-md border border-[#E5E5E0] bg-[#FAF9F7] px-2 py-0.5 font-medium text-[#262626]">
                      Bộ thủ: {popover.entry.radical}
                    </span>
                    <span className="rounded-md border border-[#E5E5E0] bg-[#FAF9F7] px-2 py-0.5 font-medium text-[#262626]">
                      {popover.entry.strokeCount} nét
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={closePopover}
                aria-label="Đóng từ điển"
                className="rounded-lg p-1 text-[#737373] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Vietnamese Meaning & Example */}
            <div className="mt-3 min-h-[2.25rem] text-sm leading-relaxed text-[#262626]">
              {popover.loading ? (
                <div className="flex items-center gap-2 text-[#6B655E]">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Đang phân tích chữ Hán & bộ thủ...</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="font-semibold text-[#262626]">
                    {popover.entry?.meaningVi}
                  </p>
                  {popover.entry?.exampleZh && (
                    <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-xs">
                      <p className="font-medium text-[#262626]">
                        {popover.entry.exampleZh}
                      </p>
                      {popover.entry.examplePinyin && (
                        <p className="mt-0.5 font-mono text-[11px] text-[#6B655E]">
                          {popover.entry.examplePinyin}
                        </p>
                      )}
                      {popover.entry.exampleVi && (
                        <p className="mt-0.5 text-[#737373]">
                          {popover.entry.exampleVi}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Individual word/character breakdown if compound word or selected phrase */}
            {!popover.loading &&
              popover.entry &&
              Array.from(popover.entry.hanzi).length > 1 && (
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5 border-t border-dashed border-[#E5E5E0] pt-2 text-[11px] text-[#737373]">
                  <Sparkles className="h-3 w-3 text-[#6B655E]" />
                  <span>{popover.isSelection ? "Phân tích cụm từ:" : "Chiết tự:"}</span>
                  {popover.isSelection
                    ? (() => {
                        const hanziTokens = segmentChineseText(popover.entry.hanzi).filter(
                          (s) => s.isHanzi
                        );
                        const items =
                          hanziTokens.length > 1
                            ? hanziTokens.map((s) => s.token)
                            : Array.from(popover.entry.hanzi);
                        return items.map((part, idx) => {
                          const partEntry = safeLookupSync(part);
                          const shortMeaning = partEntry.meaningVi
                            .split(/[;/+]/)[0]
                            .trim();
                          return (
                            <span
                              key={idx}
                              className="rounded bg-[#F2F2F0] px-1.5 py-0.5 text-[#262626]"
                            >
                              <strong>{part}</strong> ({partEntry.pinyin} · {shortMeaning})
                            </span>
                          );
                        });
                      })()
                    : Array.from(popover.entry.hanzi).map((ch, idx) => {
                        const chEntry = safeLookupSync(ch);
                        return (
                          <span
                            key={idx}
                            className="rounded bg-[#F2F2F0] px-1.5 py-0.5 text-[#262626]"
                          >
                            <strong>{ch}</strong> ({chEntry.pinyin} · {chEntry.strokeCount} nét)
                          </span>
                        );
                      })}
                </div>
              )}

            {/* Actions */}
            <div className="mt-3.5 flex items-center gap-2 border-t border-[#E5E5E0] pt-3">
              <button
                type="button"
                onClick={handleSpeak}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#F2F2F0] px-3 text-xs font-semibold text-[#4A4540] transition-colors hover:bg-[#E5E5E0] cursor-pointer"
              >
                <Volume2 className="h-3.5 w-3.5" />
                {popover.isSelection ? "Đọc cả cụm" : "Nghe (zh-CN)"}
              </button>

              <button
                type="button"
                disabled={popover.loading || saved}
                onClick={handleSaveToNotebook}
                className={`inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                  saved
                    ? "border border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                    : "bg-[#6B655E] text-white hover:bg-[#4A4540]"
                } disabled:opacity-75`}
              >
                {saved ? (
                  <>
                    <BookmarkCheck className="h-3.5 w-3.5" />
                    Đã lưu sổ từ
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="h-3.5 w-3.5" />
                    {popover.isSelection
                      ? "+ Lưu cụm từ vào sổ tay"
                      : "+ Lưu vào sổ từ vựng"}
                  </>
                )}
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
