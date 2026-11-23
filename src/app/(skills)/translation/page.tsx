"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Eye,
  EyeOff,
  Languages,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from "lucide-react";
import {
  TRANSLATION_EXERCISES,
  evaluateTranslation,
  type TranslationExercise,
} from "@/data/translation";
import { loadTranslationExtraByFilter } from "@/data/skills/translation";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import { speakChinese } from "@/lib/speech";
import { addXP, markLessonCompleted, recordMistake } from "@/lib/storage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import type { HSKLevel, SubDifficulty } from "@/types";

type TranslationDirection = "vi-to-zh" | "zh-to-vi";
type SubFilter = "all" | SubDifficulty;

const HSK_ORDER: Record<HSKLevel, number> = {
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

interface NormalizedEvaluationResult {
  scorePercent: number;
  passed: boolean;
  matchedKeywords: { word: string; pinyin?: string; meaningVi: string }[];
  missingKeywords: { word: string; pinyin?: string; meaningVi: string }[];
  grammarFeedbackVi: string;
  naturalSuggestion: string;
}

function runSmartEvaluation(
  exercise: TranslationExercise,
  userInput: string
): NormalizedEvaluationResult {
  const cleaned = userInput.trim();
  const rawEval =
    typeof evaluateTranslation === "function"
      ? (evaluateTranslation(exercise, cleaned) as unknown as Record<
          string,
          unknown
        >)
      : null;

  const requiredKws = exercise.requiredKeywords ?? [];
  const lowerInput = cleaned.toLowerCase();

  const defaultMatched = requiredKws.filter((kw) =>
    lowerInput.includes(kw.word.trim().toLowerCase())
  );
  const defaultMissing = requiredKws.filter(
    (kw) => !lowerInput.includes(kw.word.trim().toLowerCase())
  );

  const normalizeKwList = (
    rawList: unknown,
    fallback: { word: string; pinyin?: string; meaningVi: string }[]
  ): { word: string; pinyin?: string; meaningVi: string }[] => {
    if (!Array.isArray(rawList)) return fallback;
    return rawList.map((item) => {
      if (typeof item === "string") {
        const found = requiredKws.find((k) => k.word === item);
        return found ?? { word: item, meaningVi: "" };
      }
      const obj = item as {
        word?: string;
        pinyin?: string;
        meaningVi?: string;
      };
      return {
        word: obj.word ?? "",
        pinyin: obj.pinyin,
        meaningVi: obj.meaningVi ?? "",
      };
    });
  };

  const scorePercent =
    typeof rawEval?.score === "number"
      ? Math.round(rawEval.score)
      : typeof rawEval?.accuracy === "number"
        ? Math.round(rawEval.accuracy)
        : typeof rawEval?.scorePercent === "number"
          ? Math.round(rawEval.scorePercent)
          : requiredKws.length > 0
            ? Math.round((defaultMatched.length / requiredKws.length) * 100)
            : cleaned
              ? 80
              : 0;

  const matchedKeywords = normalizeKwList(
    rawEval?.matchedKeywords ?? rawEval?.usedKeywords,
    defaultMatched
  );
  const missingKeywords = normalizeKwList(
    rawEval?.missingKeywords ?? rawEval?.missedKeywords,
    defaultMissing
  );

  const grammarFeedbackVi =
    typeof rawEval?.grammarFeedbackVi === "string"
      ? rawEval.grammarFeedbackVi
      : typeof rawEval?.feedbackVi === "string"
        ? rawEval.feedbackVi
        : Array.isArray(rawEval?.grammarErrors) &&
            rawEval.grammarErrors.length > 0
          ? (rawEval.grammarErrors as string[]).join(" ")
          : Array.isArray(rawEval?.structuralIssuesVi) &&
              rawEval.structuralIssuesVi.length > 0
            ? (rawEval.structuralIssuesVi as string[]).join(" ")
            : exercise.grammarStructureVi;

  const naturalSuggestion =
    typeof rawEval?.naturalSuggestion === "string"
      ? rawEval.naturalSuggestion
      : typeof rawEval?.suggestion === "string"
        ? rawEval.suggestion
        : exercise.referenceTarget;

  return {
    scorePercent: Math.max(0, Math.min(100, scorePercent)),
    passed: scorePercent >= 70,
    matchedKeywords,
    missingKeywords,
    grammarFeedbackVi,
    naturalSuggestion,
  };
}

export default function TranslationPage() {
  const [direction, setDirection] =
    useState<TranslationDirection>("vi-to-zh");
  const [selectedLevel, setSelectedLevel] = useState<
    "ALL" | HSKLevel | "HSK7-9"
  >("ALL");
  const [subFilter, setSubFilter] = useState<SubFilter>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [showPinyin, setShowPinyin] = useState<boolean>(false);
  const [showKeywordHints, setShowKeywordHints] = useState<boolean>(true);
  const [showReference, setShowReference] = useState<boolean>(false);
  const [evalResult, setEvalResult] =
    useState<NormalizedEvaluationResult | null>(null);
  const [awardedIds, setAwardedIds] = useState<Record<string, boolean>>({});
  const [extraExercises, setExtraExercises] = useState<TranslationExercise[]>(
    []
  );

  useEffect(() => {
    let cancelled = false;
    loadTranslationExtraByFilter(selectedLevel)
      .then((loaded) => {
        if (!cancelled) {
          setExtraExercises(loaded);
        }
      })
      .catch(() => {
        // Keep base exercises if dynamic module load fails
      });
    return () => {
      cancelled = true;
    };
  }, [selectedLevel]);

  const allExercises = useMemo(() => {
    const mergedMap = new Map<string, TranslationExercise>();
    for (const ex of TRANSLATION_EXERCISES ?? []) {
      mergedMap.set(ex.id, ex);
    }
    for (const ex of extraExercises) {
      if (!mergedMap.has(ex.id)) {
        mergedMap.set(ex.id, ex);
      }
    }
    return Array.from(mergedMap.values()).sort(
      (a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]
    );
  }, [extraExercises]);

  const directionExercises = useMemo(
    () => allExercises.filter((ex) => ex.direction === direction),
    [allExercises, direction]
  );

  const levelExercises = useMemo(
    () =>
      selectedLevel === "ALL"
        ? directionExercises
        : selectedLevel === "HSK7-9"
          ? directionExercises.filter((ex) =>
              ["HSK7", "HSK8", "HSK9"].includes(ex.level)
            )
          : directionExercises.filter((ex) => ex.level === selectedLevel),
    [directionExercises, selectedLevel]
  );

  const filteredExercises = useMemo(() => {
    if (subFilter === "all") return levelExercises;
    return levelExercises.filter((ex) => ex.subDifficulty === subFilter);
  }, [levelExercises, subFilter]);

  const safeIndex = Math.min(
    currentIndex,
    Math.max(0, filteredExercises.length - 1)
  );
  const currentExercise =
    filteredExercises[safeIndex] ?? TRANSLATION_EXERCISES[0];

  const completedIndices = useMemo(() => {
    const set = new Set<number>();
    filteredExercises.forEach((ex, idx) => {
      if (awardedIds[ex.id]) set.add(idx);
    });
    return set;
  }, [filteredExercises, awardedIds]);

  const resetCurrentState = () => {
    setUserInput("");
    setEvalResult(null);
    setShowReference(false);
  };

  const handleEvaluate = () => {
    if (!currentExercise || !userInput.trim()) return;
    const result = runSmartEvaluation(currentExercise, userInput);
    setEvalResult(result);
    setShowReference(true);

    if (result.passed) {
      if (!awardedIds[currentExercise.id]) {
        const xp = result.scorePercent >= 90 ? 20 : 12;
        markLessonCompleted(currentExercise.id, "writing", 8, xp);
        addXP(5);
        setAwardedIds((prev) => ({ ...prev, [currentExercise.id]: true }));
      }
    } else {
      recordMistake({
        source: "translation",
        prompt: `[${
          currentExercise.direction === "vi-to-zh"
            ? "Việt → Trung"
            : "Trung → Việt"
        }] ${currentExercise.sourceText}`,
        userAnswer: userInput.trim(),
        correctAnswer: currentExercise.referenceTarget,
        explanationVi: `${currentExercise.grammarStructureVi} — Lưu ý: ${currentExercise.commonMistakeVi}`,
      });
    }
  };

  const chineseTextForAudio =
    currentExercise?.direction === "vi-to-zh"
      ? currentExercise.referenceTarget
      : currentExercise?.sourceText ?? "";

  const chinesePinyinForDisplay =
    currentExercise?.direction === "vi-to-zh"
      ? currentExercise.referencePinyin
      : currentExercise?.sourcePinyin;

  const sidebarLessons: SkillFocusLessonItem[] = useMemo(
    () =>
      filteredExercises.map((ex) => ({
        id: ex.id,
        title: ex.sourceText,
        badge: ex.level,
        subtitle: ex.topic,
        completed: Boolean(awardedIds[ex.id]),
      })),
    [filteredExercises, awardedIds]
  );

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={selectedLevel}
      onHskLevelChange={(lvl) => {
        setSelectedLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
        setCurrentIndex(0);
        resetCurrentState();
      }}
      allowAllLevel
      currentTitle={
        currentExercise
          ? `${direction === "vi-to-zh" ? "Việt → Trung" : "Trung → Việt"} · ${currentExercise.topic}`
          : "Luyện Dịch Song Ngữ"
      }
      modeSlot={
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
          <button
            type="button"
            onClick={() => {
              setDirection("vi-to-zh");
              setCurrentIndex(0);
              resetCurrentState();
            }}
            className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
              direction === "vi-to-zh"
                ? "bg-white text-brand-active shadow-2xs ring-1 ring-brand/60"
                : "text-[#737373] hover:text-[#262626]"
            }`}
          >
            Việt → Trung
          </button>
          <button
            type="button"
            onClick={() => {
              setDirection("zh-to-vi");
              setCurrentIndex(0);
              resetCurrentState();
            }}
            className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
              direction === "zh-to-vi"
                ? "bg-white text-brand-active shadow-2xs ring-1 ring-brand/60"
                : "text-[#737373] hover:text-[#262626]"
            }`}
          >
            Trung → Việt
          </button>
        </div>
      }
      settingsBadge={showPinyin ? "Pinyin" : undefined}
      settingsAriaLabel="Cài đặt luyện dịch"
      settingsContent={
        <>
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
              ).map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => {
                    setSubFilter(sub.id);
                    setCurrentIndex(0);
                    resetCurrentState();
                  }}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                    subFilter === sub.id
                      ? "bg-white text-brand-active ring-1 ring-brand"
                      : "text-[#737373] hover:text-[#262626]"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <label className="flex cursor-pointer items-center justify-between border-t border-[#F2F2F0] pt-2.5 text-xs font-semibold text-[#4A4540]">
            <span className="inline-flex items-center gap-1.5">
              <Languages className="h-3.5 w-3.5" /> Hiện phiên âm Pinyin
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={showPinyin}
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
                showPinyin ? "bg-brand" : "bg-[#D6D3CD]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                  showPinyin ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>
        </>
      }
      sidebarTitle="Danh sách câu dịch"
      sidebarSummary={`${formatUnifiedHSKLabel(selectedLevel)} · ${filteredExercises.length} câu`}
      lessons={sidebarLessons}
      activeLessonId={currentExercise?.id ?? ""}
      onSelectLesson={(id) => {
        const idx = filteredExercises.findIndex((ex) => ex.id === id);
        if (idx !== -1) {
          setCurrentIndex(idx);
          resetCurrentState();
        }
      }}
      audioSlot={
        currentExercise ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="accent">{currentExercise.level}</Badge>
              <Badge variant="default">
                {currentExercise.subDifficulty === "advanced"
                  ? "Nâng cao"
                  : "Cơ bản"}
              </Badge>
              <Badge variant="outline">{currentExercise.topic}</Badge>
            </div>

            {currentExercise.direction === "zh-to-vi" && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => speakChinese(currentExercise.sourceText, 0.95)}
              >
                <Volume2 className="h-4 w-4 text-brand" />
                Nghe câu gốc (zh-CN)
              </Button>
            )}
          </div>
        ) : undefined
      }
      pagination={{
        currentIndex: safeIndex,
        total: filteredExercises.length,
        onPrev: () => {
          setCurrentIndex((i) => Math.max(0, i - 1));
          resetCurrentState();
        },
        onNext: () => {
          setCurrentIndex((i) =>
            Math.min(filteredExercises.length - 1, i + 1)
          );
          resetCurrentState();
        },
        onJump: (idx) => {
          setCurrentIndex(idx);
          resetCurrentState();
        },
        itemLabel: "Câu",
        completedIndices,
      }}
    >
      {currentExercise ? (
        <div className="space-y-5">
          {/* Source Sentence */}
          <div className="space-y-2 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
              {currentExercise.direction === "vi-to-zh"
                ? "Câu gốc Tiếng Việt cần dịch sang chữ Hán"
                : "Câu gốc Chữ Hán cần dịch sang Tiếng Việt (nhấp từ để tra nghĩa)"}
            </div>

            {currentExercise.direction === "vi-to-zh" ? (
              <p className="text-lg font-bold leading-relaxed text-[#262626] sm:text-xl">
                {currentExercise.sourceText}
              </p>
            ) : (
              <div className="space-y-1.5">
                <div className="text-xl font-bold leading-relaxed text-[#262626] sm:text-2xl">
                  <InteractiveChineseText
                    text={currentExercise.sourceText}
                    pinyin={currentExercise.sourcePinyin}
                  />
                </div>
                {showPinyin && currentExercise.sourcePinyin && (
                  <p className="font-mono text-xs text-[#6B655E]">
                    {currentExercise.sourcePinyin}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Required Keywords Hints */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setShowKeywordHints((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#6B655E] hover:text-[#262626]"
              >
                <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                {showKeywordHints ? "Ẩn từ khóa gợi ý" : "Hiện từ khóa gợi ý"}
              </button>
              <span className="text-[11px] text-[#737373]">
                Nhấn từ khóa để chèn nhanh
              </span>
            </div>

            {showKeywordHints &&
              currentExercise.requiredKeywords &&
              currentExercise.requiredKeywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {currentExercise.requiredKeywords.map((kw, i) => {
                    const insertToken =
                      currentExercise.direction === "vi-to-zh"
                        ? kw.word
                        : kw.meaningVi || kw.word;
                    return (
                      <button
                        key={`${kw.word}-${i}`}
                        type="button"
                        onClick={() =>
                          setUserInput((prev) =>
                            currentExercise.direction === "vi-to-zh"
                              ? `${prev}${insertToken}`
                              : prev
                                ? `${prev.trimEnd()} ${insertToken} `
                                : `${insertToken} `
                          )
                        }
                        className="cursor-pointer rounded-xl border border-[#E5E5E0] bg-white px-3 py-1.5 text-left text-xs transition-colors hover:border-brand hover:bg-brand-soft/40"
                      >
                        <span className="font-bold text-[#262626]">
                          {kw.word}
                        </span>
                        {showPinyin && kw.pinyin && (
                          <span className="ml-1 font-mono text-[11px] text-[#6B655E]">
                            ({kw.pinyin})
                          </span>
                        )}
                        {kw.meaningVi && (
                          <span className="ml-1 text-[#737373]">
                            — {kw.meaningVi}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
          </div>

          {/* Translation Input */}
          <div className="space-y-3">
            <textarea
              rows={3}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={
                currentExercise.direction === "vi-to-zh"
                  ? "Nhập câu dịch tiếng Trung (chữ Hán) của bạn tại đây..."
                  : "Nhập bản dịch tiếng Việt tự nhiên của bạn tại đây..."
              }
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-base leading-relaxed text-[#262626] placeholder:text-[#737373]/70 focus:border-brand focus:bg-white focus:outline-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={resetCurrentState}>
                  <RotateCcw className="h-3.5 w-3.5" />
                  Làm lại
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowReference((prev) => !prev)}
                >
                  {showReference ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5" /> Ẩn đáp án mẫu
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5" /> Xem đáp án mẫu
                    </>
                  )}
                </Button>
              </div>

              <Button
                variant="primary"
                size="sm"
                disabled={!userInput.trim()}
                onClick={handleEvaluate}
              >
                <Sparkles className="h-4 w-4" />
                Chấm điểm bản dịch
              </Button>
            </div>
          </div>

          {/* Evaluation Result */}
          {evalResult && (
            <div className="space-y-3.5 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl font-bold text-[#262626]">
                    {evalResult.scorePercent}%
                  </span>
                  <Badge variant={evalResult.passed ? "success" : "warning"}>
                    {evalResult.passed ? "Đạt chuẩn (≥ 70%)" : "Cần bổ sung"}
                  </Badge>
                </div>
                {evalResult.passed && (
                  <Badge variant="success" className="gap-1">
                    <Sparkles className="h-3.5 w-3.5" />+
                    {evalResult.scorePercent >= 90 ? 25 : 17} XP
                  </Badge>
                )}
              </div>

              <Progress value={evalResult.scorePercent} size="sm" />

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="space-y-1.5 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-[#15803D]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Từ khóa đúng ({evalResult.matchedKeywords.length})
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {evalResult.matchedKeywords.length === 0 ? (
                      <span className="text-xs text-[#737373]">Chưa khớp</span>
                    ) : (
                      evalResult.matchedKeywords.map((kw, i) => (
                        <span
                          key={`${kw.word}-${i}`}
                          className="rounded-md border border-[#BBF7D0] bg-white px-2 py-0.5 text-xs font-semibold text-[#15803D]"
                        >
                          {kw.word}
                        </span>
                      ))
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-[#B91C1C]">
                    <XCircle className="h-3.5 w-3.5" />
                    Từ khóa thiếu ({evalResult.missingKeywords.length})
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {evalResult.missingKeywords.length === 0 ? (
                      <span className="text-xs font-medium text-[#15803D]">
                        Đủ toàn bộ từ khóa!
                      </span>
                    ) : (
                      evalResult.missingKeywords.map((kw, i) => (
                        <span
                          key={`${kw.word}-${i}`}
                          className="rounded-md border border-[#FECACA] bg-white px-2 py-0.5 text-xs font-semibold text-[#B91C1C]"
                        >
                          {kw.word}
                          {kw.meaningVi ? ` · ${kw.meaningVi}` : ""}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 rounded-xl border border-[#E5E5E0] bg-white p-3.5 text-xs">
                <div className="flex items-start gap-2 text-[#262626]">
                  <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6B655E]" />
                  <span>
                    <strong>Cấu trúc: </strong>
                    {currentExercise.grammarStructureVi}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#92400E]">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B45309]" />
                  <span>
                    <strong>Lỗi thường gặp: </strong>
                    {currentExercise.commonMistakeVi}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Reference Answer */}
          {showReference && (
            <div className="space-y-2.5 rounded-2xl border border-[#E5E5E0] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B655E]">
                  Bản dịch chuẩn tham khảo
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => speakChinese(chineseTextForAudio, 0.95)}
                >
                  <Volume2 className="h-3.5 w-3.5 text-brand" />
                  Nghe tiếng Trung
                </Button>
              </div>

              {currentExercise.direction === "vi-to-zh" ? (
                <div className="space-y-1">
                  <div className="text-lg font-bold text-[#262626]">
                    <InteractiveChineseText
                      text={currentExercise.referenceTarget}
                      pinyin={currentExercise.referencePinyin}
                    />
                  </div>
                  {showPinyin && chinesePinyinForDisplay && (
                    <p className="font-mono text-xs text-[#6B655E]">
                      {chinesePinyinForDisplay}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-base font-bold text-[#262626]">
                  {currentExercise.referenceTarget}
                </p>
              )}

              {currentExercise.acceptedVariants &&
                currentExercise.acceptedVariants.length > 0 && (
                  <p className="border-t border-[#F2F2F0] pt-2 text-xs text-[#737373]">
                    <strong className="text-[#4A4540]">Cách diễn đạt khác: </strong>
                    {currentExercise.acceptedVariants.join(" | ")}
                  </p>
                )}
            </div>
          )}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-[#737373]">
          Chưa có bài dịch cho cấp độ này.
        </p>
      )}
    </SkillFocusLayout>
  );
}
