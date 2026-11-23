"use client";

import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Eye,
  EyeOff,
  FileText,
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
import { getOfflineDictionaryEntries } from "@/data/chinese/dictionary";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { UnifiedFilterBar } from "@/components/ui/UnifiedFilterBar";
import { speakChinese } from "@/lib/speech";
import { addXP, markLessonCompleted, recordMistake } from "@/lib/storage";
import type { DictionaryEntry, HSKLevel, SubDifficulty } from "@/types";

type WritingTab = "stroke" | "two-sentences" | "sentence-order" | "essay";
type SubFilter = "all" | SubDifficulty;

const HSK_LEVELS: Array<HSKLevel | "HSK7-9"> = [
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7-9",
];

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

  // 1. Detect "是...很..." before adjectives (classic Vietnamese learner error: "是很好", "是很忙", "是很大", "是很重要")
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

  // 2. Detect "不有" instead of "没有"
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

  // 3. Detect "二 + lượng từ" instead of "两 + lượng từ" (e.g. 二个, 二本, 二件, 二家, 二位, 二杯, 二条, 二张)
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

  // 4. Detect double "了" redundancy or "没...了" conflict (e.g. "没去了", "没有买了")
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

  // 5. Missing Chinese ending punctuation (。！？)
  if (!/[。！？!?]$/.test(trimmed)) {
    const lastPeriodMatch = trimmed.match(/\.$/);
    issues.push({
      id: "missing-chinese-punct",
      category: "Dấu câu chữ Hán (。！？)",
      severity: "warning",
      original: lastPeriodMatch ? "." : undefined,
      replacement: lastPeriodMatch ? "。" : undefined,
      explanationVi:
        'Văn bản tiếng Trung chuẩn cần kết thúc câu bằng dấu chấm tròn "。", dấu hỏi "？" hoặc dấu chấm than "！" (không dùng dấu chấm Latinh "." hoặc bỏ trống).',
    });
  }

  // 6. Required keywords check
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
        .join(", ")}. Hãy đưa các từ này vào bài để đạt điểm tối đa.`,
    });
  }

  // 7. Hanzi character count check
  const hanziCount = countHanziChars(trimmed);
  if (hanziCount < minChars) {
    issues.push({
      id: "hanzi-count",
      category: "Số lượng chữ Hán (字数)",
      severity: "style",
      explanationVi: `Bài viết hiện có ${hanziCount} chữ Hán, chưa đạt mức tối thiểu ${minChars} chữ Hán (mục tiêu ${targetChars} chữ). Hãy triển khai thêm 1–2 câu để đủ độ dài chuẩn HSK.`,
    });
  }

  return issues;
}

export default function WritingPage() {
  const [activeTab, setActiveTab] = useState<WritingTab>("stroke");

  // ==========================================
  // TAB 1: STROKE ORDER CANVAS (米字格)
  // ==========================================
  const [strokeLevel, setStrokeLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK0");
  const [strokeSubFilter, setStrokeSubFilter] = useState<SubFilter>("all");
  const [selectedCharHanzi, setSelectedCharHanzi] = useState<string>("永");
  const [customHanziInput, setCustomHanziInput] = useState<string>("");

  const strokeBankList = useMemo<HanziStrokeTemplate[]>(() => {
    if (Array.isArray(HANZI_STROKE_BANK) && HANZI_STROKE_BANK.length > 0) {
      return HANZI_STROKE_BANK;
    }
    return [];
  }, []);

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

  const activeStrokeItem = useMemo(() => {
    return (
      matchedStrokeItem ??
      filteredStrokeBank[0] ?? {
        hanzi: selectedCharHanzi || "永",
        pinyin: "yǒng",
        meaningVi: "Vĩnh cửu (Chữ Vĩnh 8 nét chuẩn thư pháp)",
        radical: "水 (Thủy)",
        level: "HSK0" as HSKLevel,
        subDifficulty: "basic" as SubDifficulty,
        strokes: [],
      }
    );
  }, [matchedStrokeItem, filteredStrokeBank, selectedCharHanzi]);

  // ==========================================
  // TAB 2: TWO-SENTENCE BUILDER (ĐẶT 2 CÂU)
  // ==========================================
  const [twoSentLevel, setTwoSentLevel] = useState<HSKLevel | "HSK7-9">("HSK1");
  const allDictEntries = useMemo<DictionaryEntry[]>(
    () => getOfflineDictionaryEntries(),
    []
  );
  const levelVocabEntries = useMemo(
    () =>
      twoSentLevel === "HSK7-9"
        ? allDictEntries.filter(
            (e) => Boolean(e.level && ["HSK7", "HSK8", "HSK9"].includes(e.level))
          )
        : allDictEntries.filter((e) => e.level === twoSentLevel),
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

  // ==========================================
  // TAB 3: SENTENCE ORDERING (连词成句)
  // ==========================================
  const [soLevel, setSoLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK1");
  const [soSubFilter, setSoSubFilter] = useState<SubFilter>("all");
  const [soIndex, setSoIndex] = useState<number>(0);
  const [selectedTileIndices, setSelectedTileIndices] = useState<number[]>([]);
  const [soChecked, setSoChecked] = useState<boolean>(false);
  const [soCorrect, setSoCorrect] = useState<boolean>(false);

  const normalizedOrderExercises = useMemo<
    SentenceOrderItemNormalized[]
  >(() => {
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

  const currentOrderEx =
    filteredOrderExercises[soIndex] ??
    filteredOrderExercises[0] ??
    normalizedOrderExercises[0];

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
    const builtStr = builtOrderTokens
      .join("")
      .replace(/[，。！？、\s]/g, "");
    const targetStr = currentOrderEx.correctAnswer.replace(
      /[，。！？、\s]/g,
      ""
    );
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

  // ==========================================
  // TAB 4: ESSAY / BUSINESS EMAIL / HSK WRITING
  // ==========================================
  const normalizedPrompts = useMemo<WritingPromptNormalized[]>(() => {
    const rawList = (WRITING_PROMPTS ?? []) as unknown as Array<
      Record<string, unknown>
    >;
    return rawList.map((p, idx) => ({
      id: String(p.id ?? `wp-${idx}`),
      level: (p.level as HSKLevel) ?? "HSK3",
      subDifficulty: (p.subDifficulty as SubDifficulty) ?? "basic",
      title: String(p.title ?? p.titleVi ?? "Đề luyện viết tiếng Trung"),
      examType: String(p.examType ?? p.category ?? "HSK Viết luận & Thương mại"),
      scenarioVi: String(p.scenarioVi ?? p.promptVi ?? ""),
      minChars: Number(p.minChars ?? p.minWords ?? 60),
      targetChars: Number(p.targetChars ?? p.targetWords ?? 120),
      keywords: (p.keywords as string[]) ?? [],
      checklistVi: (p.checklistVi as string[]) ?? [
        "Sử dụng đúng các từ khóa gợi ý trong bài viết.",
        "Đúng cấu trúc ngữ pháp câu tiếng Trung (Thời gian/Địa điểm đứng trước động từ).",
        "Kết thúc câu bằng dấu chấm tròn chữ Hán (。).",
      ],
      sampleZh: String(p.sampleZh ?? p.sampleDe ?? ""),
      samplePinyin: p.samplePinyin ? String(p.samplePinyin) : undefined,
      sampleVi: String(p.sampleVi ?? ""),
    }));
  }, []);

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
    normalizedPrompts.find((p) => p.id === promptId) ?? normalizedPrompts[0];

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

  return (
    <div className="mx-auto max-w-5xl space-y-4 pb-12">
      {/* Compact Header & 4 Tabs */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2">
          <PenTool className="h-4 w-4 text-brand" />
          <h1 className="text-lg font-bold tracking-tight text-[#262626] sm:text-xl">
            Luyện Viết Chữ Hán &amp; Đặt Câu
          </h1>
          <span className="hidden text-xs font-medium text-[#737373] sm:inline">
            写作与汉字 · Mức 0 – HSK 9
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[#E5E5E0] bg-white p-1 sm:flex sm:flex-wrap">
          {(
            [
              {
                id: "stroke" as const,
                label: "1. Vẽ chữ Hán (米字格)",
                icon: PenTool,
              },
              {
                id: "two-sentences" as const,
                label: "2. Đặt 2 câu từ mới",
                icon: Sparkles,
              },
              {
                id: "sentence-order" as const,
                label: "3. Sắp xếp câu",
                icon: Puzzle,
              },
              {
                id: "essay" as const,
                label: "4. Viết đoạn & Email",
                icon: FileText,
              },
            ]
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                    : "text-[#737373] hover:bg-[#FAF9F7] hover:text-[#262626]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: STROKE ORDER CANVAS (VẼ CHỮ HÁN CHẤM NÉT - 米字格) */}
      {/* ========================================================= */}
      {activeTab === "stroke" && (
        <div className="space-y-4">
          {/* Unified Single-Row Filter + Custom Hanzi Input */}
          <UnifiedFilterBar
            searchQuery={customHanziInput}
            onSearchChange={setCustomHanziInput}
            searchPlaceholder="Nhập chữ Hán muốn luyện (VD: 永, 爱, 贸易)..."
            hskLevel={strokeLevel}
            onHskLevelChange={(lvl) => {
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
            }}
            allowAllLevel
            difficulty={strokeSubFilter}
            onDifficultyChange={(val) =>
              setStrokeSubFilter(val as "all" | SubDifficulty)
            }
            rightSlot={
              <button
                type="button"
                onClick={() => {
                  const cleaned = customHanziInput.trim();
                  if (cleaned) setSelectedCharHanzi(cleaned);
                }}
                disabled={!customHanziInput.trim()}
                className="h-8 shrink-0 cursor-pointer rounded-xl bg-brand px-3 text-xs font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-45"
              >
                Luyện
              </button>
            }
          />

          {/* Compact Character Bank Strip */}
          <div className="rounded-2xl border border-[#E5E5E0] bg-white p-3">
            <div className="flex flex-wrap gap-1.5">
              {filteredStrokeBank.map((item) => {
                const active = selectedCharHanzi === item.hanzi;
                return (
                  <button
                    key={item.hanzi}
                    type="button"
                    onClick={() => setSelectedCharHanzi(item.hanzi)}
                    className={`flex cursor-pointer flex-col items-center rounded-xl border px-3 py-1.5 transition-all ${
                      active
                        ? "border-brand bg-brand-soft text-brand-active shadow-xs"
                        : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand hover:bg-white"
                    }`}
                  >
                    <span className="text-lg font-bold">{item.hanzi}</span>
                    <span
                      className={`text-[10px] ${
                        active ? "text-brand-active/80" : "text-[#737373]"
                      }`}
                    >
                      {item.pinyin}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Stroke Canvas Component */}
          <HanziStrokeCanvas
            hanzi={selectedCharHanzi}
            pinyin={matchedStrokeItem?.pinyin ?? (selectedCharHanzi === "永" ? "yǒng" : undefined)}
            meaningVi={
              matchedStrokeItem?.meaningVi ??
              (selectedCharHanzi === "永" ? "vĩnh cửu, mãi mãi" : undefined)
            }
          />
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: ĐẶT 2 CÂU HOÀN CHỈNH VỚI TỪ VỰNG MỚI */}
      {/* ========================================================= */}
      {activeTab === "two-sentences" && (
        <div className="space-y-4">
          <UnifiedFilterBar
            hskLevel={twoSentLevel}
            onHskLevelChange={(lvl) => {
              const nextLvl = lvl as HSKLevel | "HSK7-9";
              setTwoSentLevel(nextLvl);
              const first = allDictEntries.find((e) => e.level === nextLvl);
              if (first) setSelectedVocabWord(first.hanzi);
            }}
            allowAllLevel={false}
            rightSlot={
              <span className="whitespace-nowrap text-[11px] font-medium text-[#737373]">
                {levelVocabEntries.length} từ vựng
              </span>
            }
          />

          <div className="rounded-2xl border border-[#E5E5E0] bg-white p-3">
            <div className="flex flex-wrap gap-2">
              {levelVocabEntries.slice(0, 24).map((entry) => {
                const active = activeVocabEntry.hanzi === entry.hanzi;
                return (
                  <button
                    key={entry.hanzi}
                    type="button"
                    onClick={() => setSelectedVocabWord(entry.hanzi)}
                    className={`cursor-pointer rounded-xl border px-3 py-1.5 text-left transition-colors ${
                      active
                        ? "border-brand bg-brand-soft text-brand-active"
                        : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand"
                    }`}
                  >
                    <div className="text-sm font-bold">{entry.hanzi}</div>
                    <div
                      className={`text-[10px] ${
                        active ? "text-[#4A4540]" : "text-[#737373]"
                      }`}
                    >
                      {entry.pinyin} · {entry.meaningVi.split(";")[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <TwoSentenceBuilder
            targetWord={activeVocabEntry.hanzi}
            pinyin={activeVocabEntry.pinyin}
            meaningVi={activeVocabEntry.meaningVi}
          />
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: SẮP XẾP TỪ THÀNH CÂU (SENTENCE_ORDER_EXERCISES) */}
      {/* ========================================================= */}
      {activeTab === "sentence-order" && (
        <div className="space-y-4">
          <UnifiedFilterBar
            hskLevel={soLevel}
            onHskLevelChange={(lvl) => {
              setSoLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
              setSoIndex(0);
              handleResetOrder();
            }}
            allowAllLevel
            difficulty={soSubFilter}
            onDifficultyChange={(val) => {
              setSoSubFilter(val as "all" | SubDifficulty);
              setSoIndex(0);
              handleResetOrder();
            }}
            rightSlot={
              <span className="whitespace-nowrap text-[11px] font-medium text-[#737373]">
                {filteredOrderExercises.length} câu
              </span>
            }
          />

          {currentOrderEx && (
            <div className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#737373]">
                <span>
                  Câu {soIndex + 1} / {filteredOrderExercises.length}
                </span>
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
                  Sắp xếp các thẻ từ chữ Hán thành câu đúng trật tự ngữ pháp tiếng Trung
                </p>
                <p className="mt-2 text-lg font-semibold text-[#262626]">
                  &ldquo;{currentOrderEx.promptVi}&rdquo;
                </p>
              </div>

              {/* Drop Zone */}
              <div className="min-h-22 rounded-xl border-2 border-dashed border-[#E5E5E0] bg-[#F2F2F0]/50 p-4">
                {builtOrderTokens.length === 0 ? (
                  <p className="py-3 text-center text-sm text-[#737373]">
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

              {/* Available Word Tiles */}
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
                          : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]/50"
                      }`}
                    >
                      {token}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {soChecked && (
                <div
                  className={`rounded-xl border p-4 ${
                    soCorrect
                      ? "border-[#15803D]/30 bg-[#F0FDF4]"
                      : "border-[#B91C1C]/30 bg-[#FEF2F2]"
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
                            : "Chưa đúng trật tự từ tiếng Trung. Đáp án chuẩn:"}
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
                      className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs font-semibold text-[#262626] hover:border-[#6B655E]"
                    >
                      <Volume2 className="h-3.5 w-3.5 text-[#6B655E]" />
                      Nghe câu
                    </button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleResetOrder}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2 text-xs font-medium text-[#262626] transition-colors hover:bg-[#F2F2F0]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Xếp lại
                </button>

                {!soChecked ? (
                  <button
                    type="button"
                    onClick={handleCheckOrder}
                    disabled={
                      selectedTileIndices.length !==
                      currentOrderEx.scrambledTokens.length
                    }
                    className="cursor-pointer rounded-xl bg-[#6B655E] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4A4540] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Kiểm tra trật tự câu
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSoIndex(
                        (prev) => (prev + 1) % filteredOrderExercises.length
                      );
                      handleResetOrder();
                    }}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-[#292524] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4A4540]"
                  >
                    Câu tiếp theo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: VIẾT ĐOẠN VĂN / EMAIL THƯƠNG MẠI / LUẬN HSK */}
      {/* ========================================================= */}
      {activeTab === "essay" && activePrompt && (
        <div className="space-y-6">
          {/* Prompt Selector */}
          <div className="flex flex-wrap gap-2">
            {normalizedPrompts.map((p) => {
              const isActive = p.id === activePrompt.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPrompt(p.id)}
                  className={`cursor-pointer rounded-xl border px-3.5 py-2 text-left text-xs font-semibold transition-colors ${
                    isActive
                      ? "border-[#292524] bg-[#292524] text-white"
                      : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                  }`}
                >
                  {p.level} · {p.title}
                </button>
              );
            })}
          </div>

          <div className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-8">
            <div className="border-b border-[#E5E5E0] pb-5">
              <p className="text-xs font-semibold text-[#6B655E]">
                {activePrompt.level} · {activePrompt.examType}
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#262626]">
                {activePrompt.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#737373]">
                {activePrompt.scenarioVi}
              </p>
            </div>

            {/* Keyword Hints */}
            <div>
              <button
                type="button"
                onClick={() => setShowHints((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-[#F2F2F0]/60 px-3 py-1.5 text-xs font-semibold text-[#262626] transition-colors hover:bg-[#F2F2F0]"
              >
                <Lightbulb className="h-3.5 w-3.5 text-[#6B655E]" />
                {showHints
                  ? "Ẩn từ khóa chữ Hán bắt buộc"
                  : "Hiện từ khóa chữ Hán bắt buộc"}
              </button>

              {showHints && activePrompt.keywords.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {activePrompt.keywords.map((kw) => {
                    const used = essayText.includes(kw);
                    return (
                      <button
                        key={kw}
                        type="button"
                        onClick={() =>
                          setEssayText((prev) => `${prev}${kw}`)
                        }
                        className={`cursor-pointer rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                          used
                            ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                            : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
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

            {/* Writing Textarea + Grammar Checker */}
            <div>
              <textarea
                rows={8}
                value={essayText}
                onChange={(e) => {
                  setEssayText(e.target.value);
                  setSavedBanner(false);
                }}
                placeholder="Nhập đoạn văn / email thương mại bằng chữ Hán của bạn tại đây (ví dụ: 您好！关于我们公司的订单，希望能与贵公司长期合作。)"
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/30 p-5 text-base leading-relaxed text-[#262626] placeholder:text-[#737373]/70 focus:border-[#6B655E] focus:bg-white focus:outline-none"
              />
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={handleRunGrammarCheck}
                  disabled={!essayText.trim()}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>
                    Kiểm tra lỗi ngữ pháp tiếng Trung (是...很..., 不有, 二+lượng từ, dấu 。)
                  </span>
                </button>
                <span
                  className={
                    currentHanziCount >= activePrompt.minChars
                      ? "font-semibold text-[#15803D]"
                      : "text-[#737373]"
                  }
                >
                  {currentHanziCount} / {activePrompt.targetChars} chữ Hán (tối thiểu{" "}
                  {activePrompt.minChars} chữ)
                </span>
              </div>

              {/* Grammar Feedback Panel */}
              {grammarIssues !== null && (
                <div className="mt-4 space-y-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#262626]">
                        Bộ Kiểm Tra Ngữ Pháp Tiếng Trung (Hanzi Grammarly)
                      </span>
                      {grammarXpAwarded[activePrompt.id] && (
                        <span className="rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
                          +10 XP
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#737373]">
                      {grammarIssues.length === 0
                        ? "Không phát hiện lỗi ngữ pháp"
                        : `${grammarIssues.length} điểm cần lưu ý`}
                    </span>
                  </div>

                  {grammarIssues.length === 0 ? (
                    <div className="flex items-center gap-2 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-2.5 text-xs font-medium text-[#15803D]">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>
                        Tuyệt vời! Bài viết đúng chuẩn dấu câu tiếng Trung, đủ từ khóa và không mắc các lỗi ngữ pháp thường gặp.
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {grammarIssues.map((issue) => {
                        const cardStyle =
                          issue.severity === "error"
                            ? "border-[#FECACA] bg-[#FEF2F2]"
                            : issue.severity === "warning"
                              ? "border-[#FDE68A] bg-[#FFFBEB]"
                              : "border-[#E5E5E0] bg-white";
                        const badgeStyle =
                          issue.severity === "error"
                            ? "bg-[#B91C1C]/10 text-[#B91C1C]"
                            : issue.severity === "warning"
                              ? "bg-[#B45309]/10 text-[#B45309]"
                              : "bg-[#F2F2F0] text-[#4A4540]";

                        return (
                          <div
                            key={issue.id}
                            className={`rounded-xl border p-3 text-xs ${cardStyle}`}
                          >
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <AlertTriangle
                                    className={`h-3.5 w-3.5 shrink-0 ${
                                      issue.severity === "error"
                                        ? "text-[#B91C1C]"
                                        : issue.severity === "warning"
                                          ? "text-[#B45309]"
                                          : "text-[#6B655E]"
                                    }`}
                                  />
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${badgeStyle}`}
                                  >
                                    {issue.category}
                                  </span>
                                  {issue.original && issue.replacement && (
                                    <span className="font-mono text-[11px]">
                                      <span className="text-[#B91C1C] line-through">
                                        {issue.original}
                                      </span>
                                      <span className="mx-1 text-[#737373]">
                                        →
                                      </span>
                                      <span className="font-semibold text-[#15803D]">
                                        {issue.replacement}
                                      </span>
                                    </span>
                                  )}
                                </div>
                                <p className="leading-relaxed text-[#262626]">
                                  {issue.explanationVi}
                                </p>
                              </div>

                              {(issue.replacement ||
                                issue.id === "missing-chinese-punct") && (
                                <button
                                  type="button"
                                  onClick={() => handleApplyFix(issue)}
                                  className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-[#292524] px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#4A4540]"
                                >
                                  <Wand2 className="h-3 w-3" />
                                  <span>Áp dụng sửa</span>
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Self-Check Checklist */}
            <div className="rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/40 p-4">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Checklist tiêu chí chấm bài viết HSK
              </p>
              <div className="space-y-2">
                {activePrompt.checklistVi.map((item, idx) => (
                  <label
                    key={idx}
                    className="flex cursor-pointer items-start gap-2.5 text-sm text-[#262626]"
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
                      className="mt-1 h-4 w-4 rounded border-[#E5E5E0] accent-[#6B655E]"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {savedBanner && (
              <div className="rounded-xl border border-[#15803D]/30 bg-[#F0FDF4] px-4 py-3 text-xs font-semibold text-[#15803D]">
                Đã lưu bài viết hoàn thành vào tiến độ (+45 XP).
              </div>
            )}

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowSample((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#262626] transition-colors hover:bg-[#F2F2F0]"
              >
                {showSample ? (
                  <>
                    <EyeOff className="h-3.5 w-3.5" />
                    Ẩn bài viết mẫu
                  </>
                ) : (
                  <>
                    <Eye className="h-3.5 w-3.5" />
                    Xem bài viết mẫu (范文)
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCompleteEssay}
                disabled={currentHanziCount < activePrompt.minChars}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#6B655E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4A4540] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CheckCircle2 className="h-4 w-4" />
                Hoàn thành bài viết
              </button>
            </div>

            {/* Sample Essay */}
            {showSample && (
              <div className="space-y-3 rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    Bài viết mẫu chuẩn HSK (参考范文)
                  </p>
                  <button
                    type="button"
                    onClick={() => speakChinese(activePrompt.sampleZh, 0.95)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-semibold text-[#262626] hover:border-[#6B655E]"
                  >
                    <Volume2 className="h-3.5 w-3.5 text-[#6B655E]" />
                    Nghe bài mẫu
                  </button>
                </div>
                <div className="whitespace-pre-line text-base leading-loose text-[#262626]">
                  <InteractiveChineseText
                    text={activePrompt.sampleZh}
                    pinyin={activePrompt.samplePinyin}
                  />
                </div>
                {activePrompt.samplePinyin && (
                  <p className="font-mono text-xs leading-relaxed text-[#6B655E]">
                    {activePrompt.samplePinyin}
                  </p>
                )}
                <p className="whitespace-pre-line border-t border-[#E5E5E0] pt-3 text-xs leading-relaxed text-[#57534E]">
                  {activePrompt.sampleVi}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
