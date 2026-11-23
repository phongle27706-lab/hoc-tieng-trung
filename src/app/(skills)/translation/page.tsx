"use client";

import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeftRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { speakChinese } from "@/lib/speech";
import { addXP, markLessonCompleted, recordMistake } from "@/lib/storage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { UnifiedFilterBar } from "@/components/ui/UnifiedFilterBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import type { HSKLevel, SubDifficulty } from "@/types";

type TranslationDirection = "vi-to-zh" | "zh-to-vi";
type SubFilter = "all" | SubDifficulty;

const HSK_LEVELS: Array<"ALL" | HSKLevel | "HSK7-9"> = [
  "ALL",
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7-9",
];

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

  // Fallback / normalization so any shape returned by evaluateTranslation works seamlessly
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
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | HSKLevel | "HSK7-9">("ALL");
  const [subFilter, setSubFilter] = useState<SubFilter>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [showPinyin, setShowPinyin] = useState<boolean>(false);
  const [showKeywordHints, setShowKeywordHints] = useState<boolean>(true);
  const [showReference, setShowReference] = useState<boolean>(false);
  const [evalResult, setEvalResult] =
    useState<NormalizedEvaluationResult | null>(null);
  const [awardedIds, setAwardedIds] = useState<Record<string, boolean>>({});

  const directionExercises = useMemo(
    () =>
      (TRANSLATION_EXERCISES ?? []).filter(
        (ex) => ex.direction === direction
      ),
    [direction]
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

  const basicCount = useMemo(
    () =>
      levelExercises.filter((ex) => ex.subDifficulty === "basic").length,
    [levelExercises]
  );
  const advancedCount = useMemo(
    () =>
      levelExercises.filter((ex) => ex.subDifficulty === "advanced").length,
    [levelExercises]
  );

  const filteredExercises = useMemo(() => {
    if (subFilter === "all") return levelExercises;
    return levelExercises.filter((ex) => ex.subDifficulty === subFilter);
  }, [levelExercises, subFilter]);

  const currentExercise =
    filteredExercises[currentIndex] ??
    filteredExercises[0] ??
    TRANSLATION_EXERCISES[0];

  const resetCurrentState = () => {
    setUserInput("");
    setEvalResult(null);
    setShowReference(false);
  };

  const handleDirectionChange = (dir: TranslationDirection) => {
    setDirection(dir);
    setCurrentIndex(0);
    resetCurrentState();
  };

  const handleLevelChange = (lvl: "ALL" | HSKLevel | "HSK7-9") => {
    setSelectedLevel(lvl);
    setCurrentIndex(0);
    resetCurrentState();
  };

  const handleSubFilterChange = (sub: SubFilter) => {
    setSubFilter(sub);
    setCurrentIndex(0);
    resetCurrentState();
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

  return (
    <div className="mx-auto max-w-5xl space-y-4 pb-12">
      {/* Compact Header & Direction Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="h-4 w-4 text-brand" />
          <h1 className="text-lg font-bold tracking-tight text-[#262626] sm:text-xl">
            {direction === "vi-to-zh"
              ? "Dịch Việt → Trung"
              : "Dịch Trung → Việt"}
          </h1>
          <span className="hidden text-xs font-medium text-[#737373] sm:inline">
            双语翻译 · Mức 0 → HSK 9
          </span>
        </div>

        {/* Direction Toggle Pills */}
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-white p-0.5">
          <button
            type="button"
            onClick={() => handleDirectionChange("vi-to-zh")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              direction === "vi-to-zh"
                ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                : "text-[#737373] hover:text-[#262626]"
            }`}
          >
            Việt → Trung
          </button>
          <button
            type="button"
            onClick={() => handleDirectionChange("zh-to-vi")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              direction === "zh-to-vi"
                ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                : "text-[#737373] hover:text-[#262626]"
            }`}
          >
            Trung → Việt
          </button>
        </div>
      </div>

      {/* Unified Single-Row Filter & Settings Bar */}
      <UnifiedFilterBar
        hskLevel={selectedLevel}
        onHskLevelChange={(lvl) =>
          handleLevelChange(lvl as "ALL" | HSKLevel | "HSK7-9")
        }
        allowAllLevel
        difficulty={subFilter}
        onDifficultyChange={(val) =>
          handleSubFilterChange(val as "all" | SubDifficulty)
        }
        difficultyOptions={[
          {
            value: "all",
            label: `Tất cả mức (${levelExercises.length})`,
            shortLabel: "Độ khó",
          },
          {
            value: "basic",
            label: `Cơ bản (${basicCount})`,
            shortLabel: "Cơ bản",
          },
          {
            value: "advanced",
            label: `Nâng cao (${advancedCount})`,
            shortLabel: "Nâng cao",
          },
        ]}
        rightSlot={
          <span className="whitespace-nowrap text-[11px] font-medium text-[#737373]">
            {filteredExercises.length} bài dịch
          </span>
        }
        settingsBadge={showPinyin ? "Pinyin" : undefined}
        settingsAriaLabel="Cài đặt luyện dịch"
        settingsContent={
          <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
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
        }
      />

      {currentExercise && (
        <>
          {/* Progress Bar & Prev/Next */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <Progress
                value={
                  ((currentIndex + 1) / Math.max(1, filteredExercises.length)) *
                  100
                }
                label={`Bài dịch ${currentIndex + 1} / ${filteredExercises.length}`}
                showPercent
                size="sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex((i) => Math.max(0, i - 1));
                  resetCurrentState();
                }}
              >
                <ChevronLeft className="h-4 w-4" />
                Bài trước
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={currentIndex >= filteredExercises.length - 1}
                onClick={() => {
                  setCurrentIndex((i) =>
                    Math.min(filteredExercises.length - 1, i + 1)
                  );
                  resetCurrentState();
                }}
              >
                Bài tiếp
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Main Translation Workspace Card */}
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-[#E5E5E0] bg-[#FAF9F7]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
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
                    onClick={() =>
                      speakChinese(currentExercise.sourceText, 0.95)
                    }
                  >
                    <Volume2 className="h-4 w-4 text-[#6B655E]" />
                    Nghe câu gốc (zh-CN)
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              {/* Source Sentence Box */}
              <div className="space-y-2 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  {currentExercise.direction === "vi-to-zh"
                    ? "Câu gốc Tiếng Việt cần dịch sang chữ Hán:"
                    : "Câu gốc Chữ Hán cần dịch sang Tiếng Việt (nhấp từ để tra từ điển):"}
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

              {/* Required Keywords Hint Box */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowKeywordHints((prev) => !prev)}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#6B655E] hover:text-[#262626]"
                  >
                    <Lightbulb className="h-3.5 w-3.5" />
                    {showKeywordHints
                      ? "Ẩn từ khóa gợi ý"
                      : "Hiện từ khóa gợi ý"}
                  </button>
                  <span className="text-[11px] text-[#737373]">
                    Bấm vào từ khóa để chèn nhanh vào ô dịch
                  </span>
                </div>

                {showKeywordHints &&
                  currentExercise.requiredKeywords &&
                  currentExercise.requiredKeywords.length > 0 && (
                    <div className="flex flex-wrap gap-2">
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
                            className="cursor-pointer rounded-xl border border-[#E5E5E0] bg-white px-3 py-1.5 text-left text-xs transition-colors hover:border-[#6B655E] hover:bg-[#FAF9F7]"
                          >
                            <span className="font-bold text-[#262626]">
                              {kw.word}
                            </span>
                            {showPinyin && kw.pinyin && (
                              <span className="ml-1.5 font-mono text-[11px] text-[#6B655E]">
                                ({kw.pinyin})
                              </span>
                            )}
                            {kw.meaningVi && (
                              <span className="ml-1.5 text-[#737373]">
                                — {kw.meaningVi}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
              </div>

              {/* User Translation Textarea */}
              <div className="space-y-3">
                <textarea
                  rows={4}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={
                    currentExercise.direction === "vi-to-zh"
                      ? "Nhập câu dịch tiếng Trung (chữ Hán) của bạn tại đây..."
                      : "Nhập bản dịch tiếng Việt chính xác và tự nhiên của bạn tại đây..."
                  }
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-base leading-relaxed text-[#262626] placeholder:text-[#737373]/70 focus:border-[#6B655E] focus:bg-white focus:outline-none"
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetCurrentState}
                    >
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
                          <EyeOff className="h-3.5 w-3.5" />
                          Ẩn đáp án mẫu
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5" />
                          Xem đáp án mẫu
                        </>
                      )}
                    </Button>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    disabled={!userInput.trim()}
                    onClick={handleEvaluate}
                  >
                    <Sparkles className="h-4 w-4" />
                    Chấm điểm bản dịch
                  </Button>
                </div>
              </div>

              {/* Detailed Evaluation Result */}
              {evalResult && (
                <div className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-[#262626]">
                        Độ chính xác: {evalResult.scorePercent}%
                      </span>
                      <Badge
                        variant={evalResult.passed ? "success" : "warning"}
                      >
                        {evalResult.passed
                          ? "Đạt chuẩn (≥ 70%)"
                          : "Cần bổ sung từ khóa / cấu trúc"}
                      </Badge>
                    </div>
                    {evalResult.passed && (
                      <Badge variant="success" className="gap-1">
                        <Sparkles className="h-3.5 w-3.5" />+
                        {evalResult.scorePercent >= 90 ? 25 : 17} XP
                      </Badge>
                    )}
                  </div>

                  <Progress value={evalResult.scorePercent} size="md" />

                  {/* Keywords Used vs Missing */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3.5">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-[#15803D]">
                        <CheckCircle2 className="h-4 w-4" />
                        Từ khóa đã dùng đúng ({evalResult.matchedKeywords.length})
                      </p>
                      {evalResult.matchedKeywords.length === 0 ? (
                        <p className="text-xs text-[#737373]">
                          Chưa khớp từ khóa mục tiêu nào.
                        </p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {evalResult.matchedKeywords.map((kw, i) => (
                            <span
                              key={`${kw.word}-${i}`}
                              className="rounded-lg border border-[#BBF7D0] bg-white px-2.5 py-0.5 text-xs font-semibold text-[#15803D]"
                            >
                              {kw.word}
                              {kw.meaningVi ? ` (${kw.meaningVi})` : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3.5">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-[#B91C1C]">
                        <XCircle className="h-4 w-4" />
                        Từ khóa còn thiếu ({evalResult.missingKeywords.length})
                      </p>
                      {evalResult.missingKeywords.length === 0 ? (
                        <p className="text-xs font-medium text-[#15803D]">
                          Bạn đã sử dụng đầy đủ mọi từ khóa bắt buộc!
                        </p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {evalResult.missingKeywords.map((kw, i) => (
                            <span
                              key={`${kw.word}-${i}`}
                              className="rounded-lg border border-[#FECACA] bg-white px-2.5 py-0.5 text-xs font-semibold text-[#B91C1C]"
                            >
                              {kw.word}
                              {kw.pinyin ? ` [${kw.pinyin}]` : ""}
                              {kw.meaningVi ? ` · ${kw.meaningVi}` : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Grammar Structure & Common Mistake Analysis */}
                  <div className="space-y-2 rounded-xl border border-[#E5E5E0] bg-white p-4 text-xs">
                    <div className="flex items-start gap-2 text-[#262626]">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
                      <div>
                        <span className="font-semibold">
                          Phân tích cấu trúc ngữ pháp:{" "}
                        </span>
                        <span>{currentExercise.grammarStructureVi}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-[#92400E]">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                      <div>
                        <span className="font-semibold">
                          Lỗi sai người Việt thường gặp:{" "}
                        </span>
                        <span>{currentExercise.commonMistakeVi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reference Target Answer + Audio */}
              {showReference && (
                <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                      Bản dịch chuẩn tham khảo (标准参考译文)
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => speakChinese(chineseTextForAudio, 0.95)}
                    >
                      <Volume2 className="h-3.5 w-3.5 text-[#6B655E]" />
                      Phát âm câu tiếng Trung (zh-CN)
                    </Button>
                  </div>

                  {currentExercise.direction === "vi-to-zh" ? (
                    <div className="space-y-1.5">
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
                      <div className="border-t border-[#F2F2F0] pt-2.5 text-xs text-[#737373]">
                        <span className="font-semibold text-[#4A4540]">
                          Các cách diễn đạt tương đương được chấp nhận:{" "}
                        </span>
                        {currentExercise.acceptedVariants.join("  |  ")}
                      </div>
                    )}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Quick Exercise Picker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Danh sách bài dịch ({filteredExercises.length} bài)
          </CardTitle>
          <CardDescription>
            Chọn nhanh tình huống dịch giao tiếp, du lịch, hợp đồng ngoại thương, logistics và học thuật.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {filteredExercises.map((ex, idx) => (
            <button
              key={ex.id}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                resetCurrentState();
              }}
              className={`flex cursor-pointer items-start justify-between gap-2 rounded-xl border p-3 text-left transition-all ${
                idx === currentIndex
                  ? "border-[#6B655E] bg-[#F2F2F0]"
                  : "border-[#E5E5E0] bg-white hover:border-[#A8A29E]"
              }`}
            >
              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <Badge variant="outline">{ex.level}</Badge>
                  <span className="text-[11px] font-medium text-[#6B655E]">
                    {ex.subDifficulty === "advanced" ? "Nâng cao" : "Cơ bản"}
                  </span>
                  <span className="truncate text-xs text-[#737373]">
                    · {ex.topic}
                  </span>
                </div>
                <p className="truncate text-sm font-semibold text-[#262626]">
                  {ex.sourceText}
                </p>
              </div>
              {awardedIds[ex.id] && (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15803D]" />
              )}
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
