"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  Layers,
  Lightbulb,
  PenTool,
  Puzzle,
  RotateCcw,
  Sparkles,
  Volume2,
  Wand2,
  XCircle,
} from "lucide-react";
import {
  HANZI_STROKE_BANK,
  SENTENCE_ORDER_EXERCISES,
  WRITING_PROMPTS,
  type HanziStrokeTemplate,
} from "@/data/chinese/writing";
import {
  loadWritingExtraByFilter,
  type ThemedWritingSet,
} from "@/data/skills/writing";
import { getOfflineDictionaryEntries } from "@/data/chinese/dictionary";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import { speakChinese } from "@/lib/speech";
import { addXP, markLessonCompleted, recordMistake } from "@/lib/storage";
import type { DictionaryEntry, HSKLevel, SubDifficulty } from "@/types";

type WritingTab = "stroke" | "themed" | "two-sentences" | "sentence-order" | "essay";
type SubFilter = "all" | SubDifficulty;

const HSK_ORDER_MAP: Record<HSKLevel, number> = {
  HSK0: 0,
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6,
  HSK7: 7,
  HSK8: 8,
  HSK9: 9,
};

interface SentenceOrderItemNormalized {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  grammarTopic: string;
  promptVi: string;
  scrambledTokens: string[];
  correctAnswer: string;
  pinyin?: string;
  explanationVi: string;
}

interface WritingPromptNormalized {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  title: string;
  examType: string;
  scenarioVi: string;
  minChars: number;
  targetChars: number;
  keywords: string[];
  checklistVi: string[];
  sampleZh: string;
  samplePinyin?: string;
  sampleVi: string;
}

type GrammarSeverity = "error" | "warning" | "style";

interface ChineseGrammarIssue {
  id: string;
  category: string;
  severity: GrammarSeverity;
  original?: string;
  replacement?: string;
  explanationVi: string;
}

function countHanziChars(text: string): number {
  const matches = text.match(/[\u4e00-\u9fff]/g);
  return matches ? matches.length : 0;
}

function analyzeChineseWriting(
  text: string,
  minChars: number,
  targetChars: number,
  requiredKeywords: string[]
): ChineseGrammarIssue[] {
  const issues: ChineseGrammarIssue[] = [];
  const trimmed = text.trim();
  if (!trimmed) return issues;

  const shiHenMatch = trimmed.match(/是(很|非常|太|真)([\u4e00-\u9fff]{1,2})/);
  if (shiHenMatch) {
    const [full, adv, adj] = shiHenMatch;
    issues.push({
      id: "shi-hen-adj",
      category: "Cấu trúc câu vị ngữ tính từ (是...很...)",
      severity: "error",
      original: full,
      replacement: `${adv}${adj}`,
      explanationVi: `Trong tiếng Trung, câu vị ngữ tính từ dùng trực tiếp "${adv}${adj}", KHÔNG thêm động từ "是" đứng trước "${adv}" (trừ cấu trúc nhấn mạnh 是……的).`,
    });
  }

  if (trimmed.includes("不有")) {
    issues.push({
      id: "bu-you",
      category: "Phó từ phủ định (不有 → 没有)",
      severity: "error",
      original: "不有",
      replacement: "没有",
      explanationVi:
        'Động từ "有" (có) luôn phải phủ định bằng "没有", tuyệt đối không dùng "不有".',
    });
  }

  const erMeasureMatch = trimmed.match(
    /二(个|本|件|家|位|杯|条|张|份|次|天|年|批|箱|台)/
  );
  if (erMeasureMatch) {
    const [full, mw] = erMeasureMatch;
    issues.push({
      id: "er-measure",
      category: "Số từ & Lượng từ (二 → 两)",
      severity: "error",
      original: full,
      replacement: `两${mw}`,
      explanationVi: `Khi chỉ số lượng "2" đứng trước lượng từ "${mw}", bắt buộc dùng "两${mw}", không dùng "${full}".`,
    });
  }

  const meiLeMatch = trimmed.match(/没(有)?([\u4e00-\u9fff]{1,3})了/);
  if (meiLeMatch) {
    const [full, youPart, verbPart] = meiLeMatch;
    issues.push({
      id: "mei-verb-le",
      category: "Xung đột phủ định quá khứ (没……了)",
      severity: "warning",
      original: full,
      replacement: `没${youPart ?? ""}${verbPart}`,
      explanationVi:
        'Khi phủ định hành động chưa xảy ra bằng "没 / 没有", không dùng trợ từ động thái "了" ở cuối động từ.',
    });
  }

  if (!/[。！？!?]$/.test(trimmed)) {
    const lastPeriodMatch = trimmed.match(/\.$/);
    issues.push({
      id: "missing-chinese-punct",
      category: "Dấu câu chữ Hán (。！？)",
      severity: "warning",
      original: lastPeriodMatch ? "." : undefined,
      replacement: lastPeriodMatch ? "。" : undefined,
      explanationVi:
        'Văn bản tiếng Trung chuẩn cần kết thúc câu bằng dấu chấm tròn "。", dấu hỏi "？" hoặc dấu chấm than "！".',
    });
  }

  const missingKws = requiredKeywords.filter(
    (kw) => kw.trim() && !trimmed.includes(kw.trim())
  );
  if (missingKws.length > 0) {
    issues.push({
      id: "missing-keywords",
      category: "Từ khóa bắt buộc của đề",
      severity: "style",
      explanationVi: `Bài viết còn thiếu ${missingKws.length} từ khóa gợi ý: ${missingKws
        .map((k) => `“${k}”`)
        .join(", ")}.`,
    });
  }

  const hanziCount = countHanziChars(trimmed);
  if (hanziCount < minChars) {
    issues.push({
      id: "hanzi-count",
      category: "Số lượng chữ Hán (字数)",
      severity: "style",
      explanationVi: `Bài viết hiện có ${hanziCount} chữ Hán, chưa đạt mức tối thiểu ${minChars} chữ Hán (mục tiêu ${targetChars} chữ).`,
    });
  }

  return issues;
}

export default function WritingPage() {
  const [activeTab, setActiveTab] = useState<WritingTab>("stroke");

  // TAB 1: STROKE ORDER CANVAS (米字格)
  const [strokeLevel, setStrokeLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK0");
  const [strokeSubFilter, setStrokeSubFilter] = useState<SubFilter>("all");
  const [selectedCharHanzi, setSelectedCharHanzi] = useState<string>("永");
  const [customHanziInput, setCustomHanziInput] = useState<string>("");

  // MODULAR THEMED WRITING SETS (DYNAMIC IMPORT PER HSK)
  const [themedLevel, setThemedLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK1");
  const [selectedSetId, setSelectedSetId] = useState<string>("");
  const [selectedThemedChar, setSelectedThemedChar] = useState<string>("");
  const [extraWritingSets, setExtraWritingSets] = useState<ThemedWritingSet[]>([]);
  const [essayLevel, setEssayLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("ALL");

  const activeExtraLevelFilter: "ALL" | HSKLevel | "HSK7-9" =
    activeTab === "themed"
      ? themedLevel
      : activeTab === "essay"
        ? essayLevel
        : strokeLevel;

  useEffect(() => {
    let cancelled = false;
    loadWritingExtraByFilter(activeExtraLevelFilter).then((loaded) => {
      if (!cancelled) {
        setExtraWritingSets(loaded);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [activeExtraLevelFilter]);

  const activeThemedSet = useMemo<ThemedWritingSet | undefined>(() => {
    if (extraWritingSets.length === 0) return undefined;
    return (
      extraWritingSets.find((s) => s.id === selectedSetId) ??
      extraWritingSets[0]
    );
  }, [extraWritingSets, selectedSetId]);

  const activeThemedSetIndex = useMemo(() => {
    if (!activeThemedSet) return 0;
    const idx = extraWritingSets.findIndex((s) => s.id === activeThemedSet.id);
    return idx >= 0 ? idx : 0;
  }, [extraWritingSets, activeThemedSet]);

  const activeThemedCharObj = useMemo(() => {
    const chars = activeThemedSet?.characters ?? [];
    return (
      chars.find((c) => c.hanzi === selectedThemedChar) ?? chars[0]
    );
  }, [activeThemedSet, selectedThemedChar]);

  const strokeBankList = useMemo<HanziStrokeTemplate[]>(() => {
    const base =
      Array.isArray(HANZI_STROKE_BANK) && HANZI_STROKE_BANK.length > 0
        ? HANZI_STROKE_BANK
        : [];
    const seen = new Set(base.map((item) => item.hanzi));
    const merged: HanziStrokeTemplate[] = [...base];
    for (const set of extraWritingSets) {
      for (const ch of set.characters) {
        if (!seen.has(ch.hanzi)) {
          seen.add(ch.hanzi);
          merged.push({
            hanzi: ch.hanzi,
            pinyin: ch.pinyin,
            meaningVi: ch.meaningVi,
            radical: ch.radical,
            level: set.level,
            subDifficulty: set.subDifficulty,
            strokes: [],
          });
        }
      }
    }
    return merged.sort(
      (a, b) => HSK_ORDER_MAP[a.level] - HSK_ORDER_MAP[b.level]
    );
  }, [extraWritingSets]);

  const filteredStrokeBank = useMemo(() => {
    const byLevel =
      strokeLevel === "ALL"
        ? strokeBankList
        : strokeLevel === "HSK7-9"
          ? strokeBankList.filter((item) =>
              ["HSK7", "HSK8", "HSK9"].includes(item.level)
            )
          : strokeBankList.filter((item) => item.level === strokeLevel);
    if (strokeSubFilter === "all") return byLevel;
    return byLevel.filter((item) => item.subDifficulty === strokeSubFilter);
  }, [strokeBankList, strokeLevel, strokeSubFilter]);

  const matchedStrokeItem = useMemo(
    () => strokeBankList.find((item) => item.hanzi === selectedCharHanzi),
    [strokeBankList, selectedCharHanzi]
  );

  const currentStrokeIndex = useMemo(() => {
    const idx = filteredStrokeBank.findIndex((i) => i.hanzi === selectedCharHanzi);
    return idx >= 0 ? idx : 0;
  }, [filteredStrokeBank, selectedCharHanzi]);

  // TAB 2: TWO-SENTENCE BUILDER
  const [twoSentLevel, setTwoSentLevel] = useState<HSKLevel | "HSK7-9">("HSK1");
  const allDictEntries = useMemo<DictionaryEntry[]>(
    () => getOfflineDictionaryEntries(),
    []
  );
  const levelVocabEntries = useMemo(
    () =>
      (twoSentLevel === "HSK7-9"
        ? allDictEntries.filter(
            (e) => Boolean(e.level && ["HSK7", "HSK8", "HSK9"].includes(e.level))
          )
        : allDictEntries.filter((e) => e.level === twoSentLevel)
      ).slice(0, 40),
    [allDictEntries, twoSentLevel]
  );
  const [selectedVocabWord, setSelectedVocabWord] = useState<string>("");

  const activeVocabEntry = useMemo<DictionaryEntry>(() => {
    return (
      levelVocabEntries.find((e) => e.hanzi === selectedVocabWord) ??
      levelVocabEntries[0] ?? {
        hanzi: "学习",
        pinyin: "xuéxí",
        radical: "子 (Tử)",
        strokeCount: 11,
        partOfSpeech: "Động từ",
        meaningVi: "Học tập",
        level: "HSK1",
      }
    );
  }, [levelVocabEntries, selectedVocabWord]);

  const currentVocabIndex = useMemo(() => {
    const idx = levelVocabEntries.findIndex(
      (e) => e.hanzi === activeVocabEntry.hanzi
    );
    return idx >= 0 ? idx : 0;
  }, [levelVocabEntries, activeVocabEntry.hanzi]);

  // TAB 3: SENTENCE ORDERING
  const [soLevel, setSoLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK1");
  const [soSubFilter, setSoSubFilter] = useState<SubFilter>("all");
  const [soIndex, setSoIndex] = useState<number>(0);
  const [selectedTileIndices, setSelectedTileIndices] = useState<number[]>([]);
  const [soChecked, setSoChecked] = useState<boolean>(false);
  const [soCorrect, setSoCorrect] = useState<boolean>(false);

  const normalizedOrderExercises = useMemo<SentenceOrderItemNormalized[]>(() => {
    const rawList = (SENTENCE_ORDER_EXERCISES ?? []) as unknown as Array<
      Record<string, unknown>
    >;
    return rawList.map((item, idx) => {
      const scrambled =
        (item.scrambledTokens as string[] | undefined) ??
        (item.wordTiles as string[] | undefined) ??
        (item.tiles as string[] | undefined) ??
        [];
      const correctTokens = item.correctTokens as string[] | undefined;
      const correctStr =
        (item.correctAnswer as string | undefined) ??
        (item.targetZh as string | undefined) ??
        (correctTokens ? correctTokens.join("") : scrambled.join(""));
      return {
        id: String(item.id ?? `so-${idx}`),
        level: (item.level as HSKLevel) ?? "HSK1",
        subDifficulty:
          (item.subDifficulty as SubDifficulty) ??
          (idx % 2 === 0 ? "basic" : "advanced"),
        grammarTopic: String(
          item.grammarTopic ?? item.topic ?? "Trật tự câu tiếng Trung"
        ),
        promptVi: String(item.promptVi ?? item.meaningVi ?? ""),
        scrambledTokens: scrambled,
        correctAnswer: correctStr,
        pinyin: item.pinyin ? String(item.pinyin) : undefined,
        explanationVi: String(item.explanationVi ?? ""),
      };
    });
  }, []);

  const filteredOrderExercises = useMemo(() => {
    const byLevel =
      soLevel === "ALL"
        ? normalizedOrderExercises
        : soLevel === "HSK7-9"
          ? normalizedOrderExercises.filter((ex) =>
              ["HSK7", "HSK8", "HSK9"].includes(ex.level)
            )
          : normalizedOrderExercises.filter((ex) => ex.level === soLevel);
    if (soSubFilter === "all") return byLevel;
    return byLevel.filter((ex) => ex.subDifficulty === soSubFilter);
  }, [normalizedOrderExercises, soLevel, soSubFilter]);

  const safeSoIndex = Math.min(
    soIndex,
    Math.max(0, filteredOrderExercises.length - 1)
  );
  const currentOrderEx =
    filteredOrderExercises[safeSoIndex] ?? normalizedOrderExercises[0];

  const builtOrderTokens = currentOrderEx
    ? selectedTileIndices.map((i) => currentOrderEx.scrambledTokens[i])
    : [];

  const handleResetOrder = () => {
    setSelectedTileIndices([]);
    setSoChecked(false);
    setSoCorrect(false);
  };

  const handleCheckOrder = () => {
    if (!currentOrderEx) return;
    const builtStr = builtOrderTokens.join("").replace(/[，。！？、\s]/g, "");
    const targetStr = currentOrderEx.correctAnswer.replace(/[，。！？、\s]/g, "");
    const isRight = builtStr === targetStr;
    setSoChecked(true);
    setSoCorrect(isRight);
    if (isRight) {
      markLessonCompleted(currentOrderEx.id, "writing", 6, 15);
    } else {
      recordMistake({
        source: "writing",
        prompt: `Sắp xếp câu: ${currentOrderEx.promptVi}`,
        userAnswer: builtOrderTokens.join(""),
        correctAnswer: currentOrderEx.correctAnswer,
        explanationVi: currentOrderEx.explanationVi,
      });
    }
  };

  // TAB 4: ESSAY / BUSINESS EMAIL
  const normalizedPrompts = useMemo<WritingPromptNormalized[]>(() => {
    const rawList = [
      ...((WRITING_PROMPTS ?? []) as unknown as Array<Record<string, unknown>>),
      ...(extraWritingSets.map((s) => s.prompt) as unknown as Array<
        Record<string, unknown>
      >),
    ];
    const seenIds = new Set<string>();
    const deduped: WritingPromptNormalized[] = [];
    rawList.forEach((p, idx) => {
      const id = String(p.id ?? `wp-${idx}`);
      if (seenIds.has(id)) return;
      seenIds.add(id);
      deduped.push({
        id,
        level: (p.level as HSKLevel) ?? "HSK3",
        subDifficulty: (p.subDifficulty as SubDifficulty) ?? "basic",
        title: String(p.title ?? p.titleVi ?? "Đề luyện viết tiếng Trung"),
        examType: String(
          p.examType ?? p.category ?? "HSK Viết luận & Thương mại"
        ),
        scenarioVi: String(p.scenarioVi ?? p.promptVi ?? ""),
        minChars: Number(p.minChars ?? p.minWords ?? 60),
        targetChars: Number(p.targetChars ?? p.targetWords ?? 120),
        keywords: (p.keywords as string[]) ?? [],
        checklistVi: (p.checklistVi as string[]) ?? [
          "Sử dụng đúng các từ khóa gợi ý trong bài viết.",
          "Đúng cấu trúc ngữ pháp câu tiếng Trung.",
          "Kết thúc câu bằng dấu chấm tròn chữ Hán (。).",
        ],
        sampleZh: String(p.sampleZh ?? p.sampleDe ?? ""),
        samplePinyin: p.samplePinyin ? String(p.samplePinyin) : undefined,
        sampleVi: String(p.sampleVi ?? ""),
      });
    });
    return deduped.sort(
      (a, b) => HSK_ORDER_MAP[a.level] - HSK_ORDER_MAP[b.level]
    );
  }, [extraWritingSets]);

  const filteredPrompts = useMemo(() => {
    if (essayLevel === "ALL") return normalizedPrompts;
    if (essayLevel === "HSK7-9") {
      return normalizedPrompts.filter((p) =>
        ["HSK7", "HSK8", "HSK9"].includes(p.level)
      );
    }
    return normalizedPrompts.filter((p) => p.level === essayLevel);
  }, [normalizedPrompts, essayLevel]);

  const [promptId, setPromptId] = useState<string>(
    normalizedPrompts[0]?.id ?? ""
  );
  const [essayText, setEssayText] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [showHints, setShowHints] = useState<boolean>(true);
  const [showSample, setShowSample] = useState<boolean>(false);
  const [savedBanner, setSavedBanner] = useState<boolean>(false);
  const [grammarIssues, setGrammarIssues] = useState<
    ChineseGrammarIssue[] | null
  >(null);
  const [grammarXpAwarded, setGrammarXpAwarded] = useState<
    Record<string, boolean>
  >({});

  const activePrompt =
    filteredPrompts.find((p) => p.id === promptId) ?? filteredPrompts[0];
  const currentPromptIndex = Math.max(
    0,
    filteredPrompts.findIndex((p) => p.id === activePrompt?.id)
  );
  const currentHanziCount = countHanziChars(essayText);

  const handleSelectPrompt = (id: string) => {
    setPromptId(id);
    setEssayText("");
    setCheckedItems({});
    setShowSample(false);
    setSavedBanner(false);
    setGrammarIssues(null);
  };

  const handleRunGrammarCheck = () => {
    if (!activePrompt) return;
    const found = analyzeChineseWriting(
      essayText,
      activePrompt.minChars,
      activePrompt.targetChars,
      activePrompt.keywords
    );
    setGrammarIssues(found);
    if (essayText.trim().length > 0 && !grammarXpAwarded[activePrompt.id]) {
      addXP(10);
      setGrammarXpAwarded((prev) => ({ ...prev, [activePrompt.id]: true }));
    }
  };

  const handleApplyFix = (issue: ChineseGrammarIssue) => {
    if (!activePrompt) return;
    let updated = essayText;
    if (issue.id === "missing-chinese-punct") {
      updated = `${updated.trimEnd().replace(/\.$/, "")}。`;
    } else if (issue.original && issue.replacement) {
      updated = updated.replace(issue.original, issue.replacement);
    }
    setEssayText(updated);
    setSavedBanner(false);
    setGrammarIssues(
      analyzeChineseWriting(
        updated,
        activePrompt.minChars,
        activePrompt.targetChars,
        activePrompt.keywords
      )
    );
  };

  const handleCompleteEssay = () => {
    if (!activePrompt) return;
    markLessonCompleted(activePrompt.id, "writing", 15, 35);
    addXP(10);
    setSavedBanner(true);
  };

  // Compute layout props per tab
  const currentHskLevel =
    activeTab === "stroke"
      ? strokeLevel
      : activeTab === "themed"
        ? themedLevel
        : activeTab === "two-sentences"
          ? twoSentLevel
          : activeTab === "sentence-order"
            ? soLevel
            : essayLevel;

  const sidebarLessons: SkillFocusLessonItem[] = useMemo(() => {
    if (activeTab === "stroke") {
      return filteredStrokeBank.map((item) => ({
        id: item.hanzi,
        title: `${item.hanzi} · ${item.pinyin}`,
        badge: item.level,
        subtitle: item.meaningVi,
      }));
    }
    if (activeTab === "themed") {
      return extraWritingSets.map((set) => ({
        id: set.id,
        title: set.titleVi,
        badge: set.level,
        subtitle: `${set.topic} · ${set.characters.length} chữ`,
      }));
    }
    if (activeTab === "two-sentences") {
      return levelVocabEntries.map((entry) => ({
        id: entry.hanzi,
        title: `${entry.hanzi} · ${entry.pinyin}`,
        subtitle: entry.meaningVi.split(";")[0],
      }));
    }
    if (activeTab === "sentence-order") {
      return filteredOrderExercises.map((ex, idx) => ({
        id: ex.id,
        title: ex.promptVi || `Câu ${idx + 1}`,
        badge: ex.level,
        subtitle: ex.grammarTopic,
      }));
    }
    return filteredPrompts.map((p) => ({
      id: p.id,
      title: p.title,
      badge: p.level,
      subtitle: p.examType,
    }));
  }, [
    activeTab,
    filteredStrokeBank,
    extraWritingSets,
    levelVocabEntries,
    filteredOrderExercises,
    filteredPrompts,
  ]);

  const activeLessonId =
    activeTab === "stroke"
      ? selectedCharHanzi
      : activeTab === "themed"
        ? activeThemedSet?.id ?? ""
        : activeTab === "two-sentences"
          ? activeVocabEntry.hanzi
          : activeTab === "sentence-order"
            ? currentOrderEx?.id ?? ""
            : activePrompt?.id ?? "";

  const currentTitle =
    activeTab === "stroke"
      ? `Vẽ chữ Hán (米字格) · ${selectedCharHanzi}`
      : activeTab === "themed"
        ? activeThemedSet
          ? `${activeThemedSet.titleVi} · ${activeThemedSet.titleZh}`
          : "Bộ chữ luyện viết theo chủ đề"
        : activeTab === "two-sentences"
          ? `Đặt 2 câu · ${activeVocabEntry.hanzi}`
          : activeTab === "sentence-order"
            ? `Sắp xếp câu · ${currentOrderEx?.grammarTopic ?? ""}`
            : activePrompt?.title ?? "Viết đoạn & Email";

  const sidebarTitle =
    activeTab === "stroke"
      ? "Chữ Hán luyện nét"
      : activeTab === "themed"
        ? "Bộ chữ theo chủ đề"
        : activeTab === "two-sentences"
          ? "Từ vựng đặt câu"
          : activeTab === "sentence-order"
            ? "Bài sắp xếp câu"
            : "Đề viết luận";

  const sidebarSummary = `${formatUnifiedHSKLabel(currentHskLevel)} · ${sidebarLessons.length} mục`;

  const pagination =
    activeTab === "stroke"
      ? {
          currentIndex: currentStrokeIndex,
          total: filteredStrokeBank.length,
          onPrev: () => {
            const prev = filteredStrokeBank[currentStrokeIndex - 1];
            if (prev) setSelectedCharHanzi(prev.hanzi);
          },
          onNext: () => {
            const next = filteredStrokeBank[currentStrokeIndex + 1];
            if (next) setSelectedCharHanzi(next.hanzi);
          },
          onJump: (idx: number) => {
            const target = filteredStrokeBank[idx];
            if (target) setSelectedCharHanzi(target.hanzi);
          },
          itemLabel: "Chữ",
          nextLabel: "Chữ tiếp",
        }
      : activeTab === "themed"
        ? {
            currentIndex: activeThemedSetIndex,
            total: extraWritingSets.length,
            onPrev: () => {
              const prev = extraWritingSets[activeThemedSetIndex - 1];
              if (prev) {
                setSelectedSetId(prev.id);
                setSelectedThemedChar(prev.characters[0]?.hanzi ?? "");
              }
            },
            onNext: () => {
              const next = extraWritingSets[activeThemedSetIndex + 1];
              if (next) {
                setSelectedSetId(next.id);
                setSelectedThemedChar(next.characters[0]?.hanzi ?? "");
              }
            },
            onJump: (idx: number) => {
              const target = extraWritingSets[idx];
              if (target) {
                setSelectedSetId(target.id);
                setSelectedThemedChar(target.characters[0]?.hanzi ?? "");
              }
            },
            itemLabel: "Bộ",
            nextLabel: "Bộ tiếp",
          }
      : activeTab === "two-sentences"
        ? {
            currentIndex: currentVocabIndex,
            total: levelVocabEntries.length,
            onPrev: () => {
              const prev = levelVocabEntries[currentVocabIndex - 1];
              if (prev) setSelectedVocabWord(prev.hanzi);
            },
            onNext: () => {
              const next = levelVocabEntries[currentVocabIndex + 1];
              if (next) setSelectedVocabWord(next.hanzi);
            },
            onJump: (idx: number) => {
              const target = levelVocabEntries[idx];
              if (target) setSelectedVocabWord(target.hanzi);
            },
            itemLabel: "Từ",
            nextLabel: "Từ tiếp",
          }
        : activeTab === "sentence-order"
          ? {
              currentIndex: safeSoIndex,
              total: filteredOrderExercises.length,
              onPrev: () => {
                setSoIndex((i) => Math.max(0, i - 1));
                handleResetOrder();
              },
              onNext: () => {
                setSoIndex((i) =>
                  Math.min(filteredOrderExercises.length - 1, i + 1)
                );
                handleResetOrder();
              },
              onJump: (idx: number) => {
                setSoIndex(idx);
                handleResetOrder();
              },
              itemLabel: "Câu",
            }
          : {
              currentIndex: currentPromptIndex,
              total: filteredPrompts.length,
              onPrev: () => {
                const prev = filteredPrompts[currentPromptIndex - 1];
                if (prev) handleSelectPrompt(prev.id);
              },
              onNext: () => {
                const next = filteredPrompts[currentPromptIndex + 1];
                if (next) handleSelectPrompt(next.id);
              },
              onJump: (idx: number) => {
                const target = filteredPrompts[idx];
                if (target) handleSelectPrompt(target.id);
              },
              itemLabel: "Đề",
              nextLabel: "Đề tiếp",
            };

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={currentHskLevel}
      onHskLevelChange={(lvl) => {
        if (activeTab === "stroke") {
          const nextLvl = lvl as "ALL" | HSKLevel | "HSK7-9";
          setStrokeLevel(nextLvl);
          const first =
            nextLvl === "ALL"
              ? strokeBankList[0]
              : nextLvl === "HSK7-9"
                ? strokeBankList.find((c) =>
                    ["HSK7", "HSK8", "HSK9"].includes(c.level)
                  )
                : strokeBankList.find((c) => c.level === nextLvl);
          if (first) setSelectedCharHanzi(first.hanzi);
        } else if (activeTab === "themed") {
          setThemedLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
          setSelectedSetId("");
          setSelectedThemedChar("");
        } else if (activeTab === "two-sentences") {
          const nextLvl = (lvl === "ALL" ? "HSK1" : lvl) as HSKLevel | "HSK7-9";
          setTwoSentLevel(nextLvl);
          const first = allDictEntries.find((e) => e.level === nextLvl);
          if (first) setSelectedVocabWord(first.hanzi);
        } else if (activeTab === "sentence-order") {
          setSoLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
          setSoIndex(0);
          handleResetOrder();
        } else {
          setEssayLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
        }
      }}
      allowAllLevel={activeTab !== "two-sentences"}
      currentTitle={currentTitle}
      modeSlot={
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
          {(
            [
              { id: "stroke" as const, label: "米字格", icon: PenTool },
              { id: "themed" as const, label: "Bộ chủ đề", icon: Layers },
              { id: "two-sentences" as const, label: "Đặt 2 câu", icon: Sparkles },
              { id: "sentence-order" as const, label: "Sắp xếp", icon: Puzzle },
              { id: "essay" as const, label: "Viết đoạn", icon: FileText },
            ]
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-semibold transition-colors sm:px-2.5 sm:text-xs ${
                  active
                    ? "bg-white text-brand-active shadow-2xs ring-1 ring-brand/60"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      }
      settingsContent={
        activeTab === "stroke" || activeTab === "sentence-order" ? (
          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-[#4A4540]">
              Độ khó con
            </span>
            <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
              {(
                [
                  { id: "all" as const, label: "Tất cả" },
                  { id: "basic" as const, label: "Cơ bản" },
                  { id: "advanced" as const, label: "Nâng cao" },
                ]
              ).map((sub) => {
                const current =
                  activeTab === "stroke" ? strokeSubFilter : soSubFilter;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      if (activeTab === "stroke") {
                        setStrokeSubFilter(sub.id);
                      } else {
                        setSoSubFilter(sub.id);
                        setSoIndex(0);
                        handleResetOrder();
                      }
                    }}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                      current === sub.id
                        ? "bg-white text-brand-active ring-1 ring-brand"
                        : "text-[#737373] hover:text-[#262626]"
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : undefined
      }
      sidebarTitle={sidebarTitle}
      sidebarSummary={sidebarSummary}
      sidebarTopSlot={
        activeTab === "stroke" ? (
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={customHanziInput}
              onChange={(e) => setCustomHanziInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && customHanziInput.trim()) {
                  setSelectedCharHanzi(customHanziInput.trim());
                }
              }}
              placeholder="Nhập chữ (VD: 永, 爱)..."
              className="h-8 min-w-0 flex-1 rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 text-xs text-[#262626] placeholder:text-[#737373] focus:border-brand focus:bg-white focus:outline-none"
            />
            <button
              type="button"
              disabled={!customHanziInput.trim()}
              onClick={() => {
                const cleaned = customHanziInput.trim();
                if (cleaned) setSelectedCharHanzi(cleaned);
              }}
              className="h-8 shrink-0 cursor-pointer rounded-lg bg-brand px-2.5 text-xs font-semibold text-white hover:bg-brand-hover disabled:opacity-45"
            >
              Luyện
            </button>
          </div>
        ) : undefined
      }
      lessons={sidebarLessons}
      activeLessonId={activeLessonId}
      onSelectLesson={(id) => {
        if (activeTab === "stroke") {
          setSelectedCharHanzi(id);
        } else if (activeTab === "themed") {
          setSelectedSetId(id);
          const found = extraWritingSets.find((s) => s.id === id);
          setSelectedThemedChar(found?.characters[0]?.hanzi ?? "");
        } else if (activeTab === "two-sentences") {
          setSelectedVocabWord(id);
        } else if (activeTab === "sentence-order") {
          const idx = filteredOrderExercises.findIndex((ex) => ex.id === id);
          if (idx !== -1) {
            setSoIndex(idx);
            handleResetOrder();
          }
        } else {
          handleSelectPrompt(id);
        }
      }}
      pagination={pagination}
    >
      {/* TAB 1: 100% FOCUS ON 米字格 HANZI STROKE CANVAS */}
      {activeTab === "stroke" && (
        <HanziStrokeCanvas
          hanzi={selectedCharHanzi}
          pinyin={
            matchedStrokeItem?.pinyin ??
            (selectedCharHanzi === "永" ? "yǒng" : undefined)
          }
          meaningVi={
            matchedStrokeItem?.meaningVi ??
            (selectedCharHanzi === "永" ? "vĩnh cửu, mãi mãi" : undefined)
          }
        />
      )}

      {/* TAB 1B: THEMED WRITING SETS (10-15 HANZI + PROMPT) */}
      {activeTab === "themed" &&
        (activeThemedSet ? (
          <div className="space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#6B655E]">
                  <span className="rounded-md bg-brand-soft px-2 py-0.5 text-brand-active">
                    {activeThemedSet.level}
                  </span>
                  <span>{activeThemedSet.topic}</span>
                  <span>·</span>
                  <span>{activeThemedSet.titleZh}</span>
                </div>
                <h2 className="text-lg font-bold text-[#262626]">
                  {activeThemedSet.titleVi}
                </h2>
                <p className="text-xs text-[#57534E]">
                  Chọn một chữ Hán trong bộ ({activeThemedSet.characters.length} chữ) để luyện thứ tự nét trên khung 米字格, sau đó chuyển sang viết đoạn ứng dụng.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEssayLevel(activeThemedSet.level);
                  handleSelectPrompt(activeThemedSet.prompt.id);
                  setActiveTab("essay");
                }}
                className="shrink-0 cursor-pointer rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-hover"
              >
                Viết đoạn theo bộ này →
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {activeThemedSet.characters.map((ch) => {
                const isSelected = activeThemedCharObj?.hanzi === ch.hanzi;
                return (
                  <button
                    key={ch.hanzi}
                    type="button"
                    onClick={() => setSelectedThemedChar(ch.hanzi)}
                    className={`cursor-pointer rounded-xl border p-2.5 text-center transition-colors ${
                      isSelected
                        ? "border-brand bg-brand-soft/40 ring-1 ring-brand"
                        : "border-[#E5E5E0] bg-white hover:border-brand/60"
                    }`}
                  >
                    <div className="text-2xl font-bold text-[#262626]">
                      {ch.hanzi}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] font-medium text-[#6B655E]">
                      {ch.pinyin}
                    </div>
                    <div className="truncate text-[10px] text-[#737373]">
                      {ch.meaningVi}
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#A8A29E]">
                      {ch.strokeCount} nét
                    </div>
                  </button>
                );
              })}
            </div>

            {activeThemedCharObj && (
              <HanziStrokeCanvas
                hanzi={activeThemedCharObj.hanzi}
                pinyin={activeThemedCharObj.pinyin}
                meaningVi={`${activeThemedCharObj.meaningVi} · Bộ: ${activeThemedCharObj.radical} (${activeThemedCharObj.strokeCount} nét)`}
              />
            )}

            <div className="space-y-2 rounded-2xl border border-[#E5E5E0] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B655E]">
                  Đề viết ứng dụng đi kèm ({activeThemedSet.prompt.examType})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEssayLevel(activeThemedSet.level);
                    handleSelectPrompt(activeThemedSet.prompt.id);
                    setActiveTab("essay");
                  }}
                  className="cursor-pointer text-xs font-semibold text-brand-active hover:underline"
                >
                  Mở khung viết & chấm ngữ pháp →
                </button>
              </div>
              <p className="text-sm font-semibold text-[#262626]">
                {activeThemedSet.prompt.title}
              </p>
              <p className="text-xs leading-relaxed text-[#57534E]">
                {activeThemedSet.prompt.scenarioVi}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeThemedSet.prompt.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1 text-xs font-semibold text-[#262626]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Đang tải bộ chữ luyện viết theo chủ đề...
          </p>
        ))}

      {/* TAB 2: TWO-SENTENCE BUILDER */}
      {activeTab === "two-sentences" && (
        <TwoSentenceBuilder
          targetWord={activeVocabEntry.hanzi}
          pinyin={activeVocabEntry.pinyin}
          meaningVi={activeVocabEntry.meaningVi}
        />
      )}

      {/* TAB 3: SENTENCE ORDERING */}
      {activeTab === "sentence-order" &&
        (currentOrderEx ? (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#737373]">
              <span className="font-semibold text-[#6B655E]">
                {currentOrderEx.level} ·{" "}
                {currentOrderEx.subDifficulty === "advanced"
                  ? "Nâng cao"
                  : "Cơ bản"}{" "}
                · {currentOrderEx.grammarTopic}
              </span>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
                Sắp xếp thẻ chữ Hán thành câu đúng trật tự ngữ pháp
              </p>
              <p className="mt-1.5 text-lg font-bold text-[#262626]">
                &ldquo;{currentOrderEx.promptVi}&rdquo;
              </p>
            </div>

            <div className="min-h-20 rounded-xl border-2 border-dashed border-[#E5E5E0] bg-[#FAF9F7] p-4">
              {builtOrderTokens.length === 0 ? (
                <p className="py-2 text-center text-sm text-[#737373]">
                  Nhấn vào các thẻ chữ Hán bên dưới để ghép câu...
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {builtOrderTokens.map((token, posIdx) => (
                    <button
                      key={`${token}-${posIdx}`}
                      type="button"
                      disabled={soChecked}
                      onClick={() => {
                        if (soChecked) return;
                        setSelectedTileIndices((prev) =>
                          prev.filter((_, i) => i !== posIdx)
                        );
                      }}
                      className="cursor-pointer rounded-xl bg-[#292524] px-3.5 py-2 text-base font-semibold text-white transition-colors hover:bg-[#4A4540] disabled:cursor-default"
                    >
                      {token}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {currentOrderEx.scrambledTokens.map((token, idx) => {
                const used = selectedTileIndices.includes(idx);
                return (
                  <button
                    key={`${token}-${idx}`}
                    type="button"
                    disabled={used || soChecked}
                    onClick={() => {
                      if (soChecked || used) return;
                      setSelectedTileIndices((prev) => [...prev, idx]);
                    }}
                    className={`cursor-pointer rounded-xl border px-3.5 py-2 text-base font-semibold transition-colors ${
                      used
                        ? "cursor-default border-[#E5E5E0] bg-[#F2F2F0] text-[#D4D4CE]"
                        : "border-[#E5E5E0] bg-white text-[#262626] hover:border-brand hover:bg-brand-soft/40"
                    }`}
                  >
                    {token}
                  </button>
                );
              })}
            </div>

            {soChecked && (
              <div
                className={`rounded-xl border p-4 ${
                  soCorrect
                    ? "border-[#BBF7D0] bg-[#F0FDF4]"
                    : "border-[#FECACA] bg-[#FEF2F2]"
                }`}
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex items-start gap-2.5">
                    {soCorrect ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#15803D]" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#B91C1C]" />
                    )}
                    <div className="space-y-1">
                      <p
                        className={`text-sm font-semibold ${
                          soCorrect ? "text-[#15803D]" : "text-[#B91C1C]"
                        }`}
                      >
                        {soCorrect
                          ? "Chính xác! +15 XP"
                          : "Chưa đúng trật tự từ. Đáp án chuẩn:"}
                      </p>
                      <div className="text-base font-bold text-[#262626]">
                        <InteractiveChineseText
                          text={currentOrderEx.correctAnswer}
                          pinyin={currentOrderEx.pinyin}
                        />
                      </div>
                      {currentOrderEx.pinyin && (
                        <p className="font-mono text-xs text-[#6B655E]">
                          {currentOrderEx.pinyin}
                        </p>
                      )}
                      <p className="text-xs leading-relaxed text-[#57534E]">
                        {currentOrderEx.explanationVi}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      speakChinese(currentOrderEx.correctAnswer, 0.95)
                    }
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs font-semibold text-[#262626] hover:border-brand"
                  >
                    <Volume2 className="h-3.5 w-3.5 text-brand" />
                    Nghe câu
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handleResetOrder}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2 text-xs font-medium text-[#262626] hover:bg-[#FAF9F7]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Xếp lại
              </button>
              <button
                type="button"
                onClick={handleCheckOrder}
                disabled={
                  soChecked ||
                  selectedTileIndices.length !==
                    currentOrderEx.scrambledTokens.length
                }
                className="cursor-pointer rounded-xl bg-[#292524] px-5 py-2 text-xs font-semibold text-white hover:bg-[#4A4540] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra trật tự câu
              </button>
            </div>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chưa có bài sắp xếp câu cho cấp độ này.
          </p>
        ))}

      {/* TAB 4: ESSAY / BUSINESS EMAIL */}
      {activeTab === "essay" &&
        (activePrompt ? (
          <div className="space-y-5">
            <div className="border-b border-[#E5E5E0] pb-4">
              <p className="text-xs font-semibold text-[#6B655E]">
                {activePrompt.level} · {activePrompt.examType}
              </p>
              <h2 className="mt-1 text-lg font-bold text-[#262626]">
                {activePrompt.title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-[#737373] sm:text-sm">
                {activePrompt.scenarioVi}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowHints((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1.5 text-xs font-semibold text-[#262626] hover:border-brand"
              >
                <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                {showHints
                  ? "Ẩn từ khóa chữ Hán bắt buộc"
                  : "Hiện từ khóa chữ Hán bắt buộc"}
              </button>

              {showHints && activePrompt.keywords.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {activePrompt.keywords.map((kw) => {
                    const used = essayText.includes(kw);
                    return (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setEssayText((prev) => `${prev}${kw}`)}
                        className={`cursor-pointer rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                          used
                            ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                            : "border-[#E5E5E0] bg-white text-[#262626] hover:border-brand"
                        }`}
                      >
                        {used ? "✓ " : "+ "}
                        {kw}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <textarea
                rows={7}
                value={essayText}
                onChange={(e) => {
                  setEssayText(e.target.value);
                  setSavedBanner(false);
                }}
                placeholder="Nhập đoạn văn / email bằng chữ Hán của bạn tại đây..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-base leading-relaxed text-[#262626] placeholder:text-[#737373]/70 focus:border-brand focus:bg-white focus:outline-none"
              />
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={handleRunGrammarCheck}
                  disabled={!essayText.trim()}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#4A4540] disabled:opacity-40"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Kiểm tra lỗi ngữ pháp
                </button>
                <span
                  className={
                    currentHanziCount >= activePrompt.minChars
                      ? "font-semibold text-[#15803D]"
                      : "text-[#737373]"
                  }
                >
                  {currentHanziCount} / {activePrompt.targetChars} chữ Hán (tối thiểu{" "}
                  {activePrompt.minChars})
                </span>
              </div>

              {grammarIssues !== null && (
                <div className="mt-3 space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
                  {grammarIssues.length === 0 ? (
                    <div className="flex items-center gap-2 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-3 py-2 text-xs font-medium text-[#15803D]">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>
                        Tuyệt vời! Không phát hiện lỗi ngữ pháp hay dấu câu.
                      </span>
                    </div>
                  ) : (
                    grammarIssues.map((issue) => (
                      <div
                        key={issue.id}
                        className="flex flex-wrap items-start justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-white p-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-1.5 font-semibold">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                            <span>{issue.category}</span>
                            {issue.original && issue.replacement && (
                              <span className="font-mono text-[11px]">
                                <span className="text-[#B91C1C] line-through">
                                  {issue.original}
                                </span>
                                {" → "}
                                <span className="text-[#15803D]">
                                  {issue.replacement}
                                </span>
                              </span>
                            )}
                          </div>
                          <p className="text-[#4A4540]">{issue.explanationVi}</p>
                        </div>
                        {(issue.replacement ||
                          issue.id === "missing-chinese-punct") && (
                          <button
                            type="button"
                            onClick={() => handleApplyFix(issue)}
                            className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-[#292524] px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-[#4A4540]"
                          >
                            <Wand2 className="h-3 w-3" />
                            Sửa
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                Checklist chấm bài viết
              </p>
              <div className="space-y-1.5">
                {activePrompt.checklistVi.map((item, idx) => (
                  <label
                    key={idx}
                    className="flex cursor-pointer items-start gap-2 text-xs text-[#262626]"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedItems[idx]}
                      onChange={(e) =>
                        setCheckedItems((prev) => ({
                          ...prev,
                          [idx]: e.target.checked,
                        }))
                      }
                      className="mt-0.5 h-3.5 w-3.5 rounded accent-brand"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {savedBanner && (
              <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-2.5 text-xs font-semibold text-[#15803D]">
                Đã lưu bài viết hoàn thành vào tiến độ (+45 XP).
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setShowSample((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2 text-xs font-semibold text-[#262626] hover:border-brand"
              >
                {showSample ? (
                  <>
                    <EyeOff className="h-3.5 w-3.5" /> Ẩn bài mẫu
                  </>
                ) : (
                  <>
                    <Eye className="h-3.5 w-3.5" /> Xem bài mẫu
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCompleteEssay}
                disabled={currentHanziCount < activePrompt.minChars}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-hover disabled:opacity-40"
              >
                <CheckCircle2 className="h-4 w-4" />
                Hoàn thành bài viết
              </button>
            </div>

            {showSample && (
              <div className="space-y-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Bài viết mẫu chuẩn HSK
                  </span>
                  <button
                    type="button"
                    onClick={() => speakChinese(activePrompt.sampleZh, 0.95)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-semibold text-[#262626] hover:border-brand"
                  >
                    <Volume2 className="h-3.5 w-3.5 text-brand" />
                    Nghe mẫu
                  </button>
                </div>
                <div className="whitespace-pre-line text-base leading-loose text-[#262626]">
                  <InteractiveChineseText
                    text={activePrompt.sampleZh}
                    pinyin={activePrompt.samplePinyin}
                  />
                </div>
                {activePrompt.samplePinyin && (
                  <p className="font-mono text-xs text-[#6B655E]">
                    {activePrompt.samplePinyin}
                  </p>
                )}
                <p className="whitespace-pre-line border-t border-[#E5E5E0] pt-2 text-xs text-[#57534E]">
                  {activePrompt.sampleVi}
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chưa có đề viết cho cấp độ này.
          </p>
        ))}
    </SkillFocusLayout>
  );
}
