"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Languages,
  RotateCcw,
  Square,
  Volume2,
  XCircle,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import {
  READING_PASSAGES,
  type ReadingPassage,
} from "@/data/reading-passages";
import {
  READING_EXTRA_MANIFEST,
  loadReadingExtraByLevel,
} from "@/data/skills/reading";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import { addXP, recordMistake } from "@/lib/storage";
import type { HSKLevel, SubDifficulty } from "@/types";

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

function getSubDifficulty(
  item: ReadingPassage,
  idx: number,
  total: number
): SubDifficulty {
  if (item.subDifficulty === "basic" || item.subDifficulty === "advanced") {
    return item.subDifficulty;
  }
  return idx < Math.ceil(total / 2) ? "basic" : "advanced";
}

export default function ReadingPage() {
  const [levelFilter, setLevelFilter] = useState<HSKLevel | "ALL" | "HSK7-9">("ALL");
  const [subFilter, setSubFilter] = useState<SubFilter>("all");
  const [extraPassages, setExtraPassages] = useState<ReadingPassage[]>([]);
  const [isLoadingExtra, setIsLoadingExtra] = useState<boolean>(false);
  const [selectedPassageId, setSelectedPassageId] = useState<string>(
    READING_PASSAGES[0]?.id ?? ""
  );
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [showTranslationVi, setShowTranslationVi] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingExtra(true);
    loadReadingExtraByLevel(levelFilter)
      .then((loaded) => {
        if (!cancelled) setExtraPassages(loaded);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingExtra(false);
      });
    return () => {
      cancelled = true;
    };
  }, [levelFilter]);

  const levelPassages = useMemo(() => {
    const baseByLevel =
      levelFilter === "ALL"
        ? READING_PASSAGES
        : levelFilter === "HSK7-9"
          ? READING_PASSAGES.filter((p) =>
              ["HSK7", "HSK8", "HSK9"].includes(p.level)
            )
          : READING_PASSAGES.filter((p) => p.level === levelFilter);
    const seen = new Set(baseByLevel.map((p) => p.id));
    return [
      ...baseByLevel,
      ...extraPassages.filter((p) => !seen.has(p.id)),
    ].sort((a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]);
  }, [levelFilter, extraPassages]);

  const filteredPassages = useMemo(() => {
    if (subFilter === "all") return levelPassages;
    return levelPassages.filter(
      (p, idx) => getSubDifficulty(p, idx, levelPassages.length) === subFilter
    );
  }, [levelPassages, subFilter]);

  const activePassage = useMemo<ReadingPassage | undefined>(
    () =>
      filteredPassages.find((p) => p.id === selectedPassageId) ??
      filteredPassages[0],
    [filteredPassages, selectedPassageId]
  );

  const questions = activePassage?.questions ?? [];
  const safeQuestionIndex = Math.min(
    questionIndex,
    Math.max(0, questions.length - 1)
  );
  const currentQuestion = questions[safeQuestionIndex];

  const completedQuestionIndices = useMemo(() => {
    const set = new Set<number>();
    if (!activePassage) return set;
    activePassage.questions.forEach((q, idx) => {
      if (answers[`${activePassage.id}-${q.id}`] === q.correctAnswer) {
        set.add(idx);
      }
    });
    return set;
  }, [activePassage, answers]);

  const totalQuestions = useMemo(
    () => filteredPassages.reduce((sum, p) => sum + p.questions.length, 0),
    [filteredPassages]
  );

  const handleSelectPassage = (id: string) => {
    stopSpeaking();
    setIsSpeaking(false);
    setSelectedPassageId(id);
    setQuestionIndex(0);
    setShowTranslationVi(false);
  };

  const handleToggleSpeakPassage = (contentZh: string) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    speakChinese(contentZh, 0.95, () => {
      setIsSpeaking(false);
    });
  };

  const handleAnswer = (
    passage: ReadingPassage,
    qId: string,
    questionVi: string,
    opt: string,
    correct: string,
    explanationVi: string
  ) => {
    const qKey = `${passage.id}-${qId}`;
    if (answers[qKey]) return;
    setAnswers((prev) => ({ ...prev, [qKey]: opt }));
    if (opt === correct) {
      addXP(10);
    } else {
      recordMistake({
        source: "reading",
        prompt: `[${passage.title}] ${questionVi}`,
        userAnswer: opt,
        correctAnswer: correct,
        explanationVi,
      });
    }
  };

  const sidebarLessons: SkillFocusLessonItem[] = useMemo(
    () =>
      filteredPassages.map((p) => {
        const allDone =
          p.questions.length > 0 &&
          p.questions.every((q) => answers[`${p.id}-${q.id}`] === q.correctAnswer);
        return {
          id: p.id,
          title: p.title,
          badge: p.level,
          subtitle: p.titleVi,
          meta: `${p.questions.length} câu`,
          completed: allDone,
        };
      }),
    [filteredPassages, answers]
  );

  const qKey =
    activePassage && currentQuestion
      ? `${activePassage.id}-${currentQuestion.id}`
      : "";
  const chosen = qKey ? answers[qKey] : undefined;
  const isCorrect = currentQuestion ? chosen === currentQuestion.correctAnswer : false;

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={levelFilter}
      onHskLevelChange={(lvl) => {
        stopSpeaking();
        setIsSpeaking(false);
        const nextLvl = lvl as "ALL" | HSKLevel | "HSK7-9";
        setLevelFilter(nextLvl);
        setQuestionIndex(0);
        setShowTranslationVi(false);
      }}
      allowAllLevel
      currentTitle={
        activePassage ? `${activePassage.title} — ${activePassage.titleVi}` : "Đọc hiểu chữ Hán"
      }
      settingsBadge={showPinyin ? "Pinyin" : undefined}
      settingsAriaLabel="Cài đặt đọc hiểu"
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
                    stopSpeaking();
                    setIsSpeaking(false);
                    setSubFilter(sub.id);
                    setQuestionIndex(0);
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

          <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" /> Hiện bản dịch tiếng Việt
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={showTranslationVi}
              onClick={() => setShowTranslationVi((prev) => !prev)}
              className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
                showTranslationVi ? "bg-brand" : "bg-[#D6D3CD]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                  showTranslationVi ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>
        </>
      }
      sidebarTitle="Bài đọc hiểu"
      sidebarSummary={`${formatUnifiedHSKLabel(levelFilter)} · ${filteredPassages.length} bài${
        isLoadingExtra
          ? ` (+${
              levelFilter === "ALL"
                ? Object.values(READING_EXTRA_MANIFEST).reduce((a, b) => a + b, 0)
                : levelFilter === "HSK7-9"
                  ? READING_EXTRA_MANIFEST.HSK7 +
                    READING_EXTRA_MANIFEST.HSK8 +
                    READING_EXTRA_MANIFEST.HSK9
                  : READING_EXTRA_MANIFEST[levelFilter] ?? 0
            } đang tải...)`
          : ""
      } · ${totalQuestions} câu`}
      lessons={sidebarLessons}
      activeLessonId={activePassage?.id ?? ""}
      onSelectLesson={handleSelectPassage}
      audioSlot={
        activePassage ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => handleToggleSpeakPassage(activePassage.contentZh)}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isSpeaking
                    ? "bg-[#292524] text-white"
                    : "bg-brand text-white hover:bg-brand-hover"
                }`}
              >
                {isSpeaking ? (
                  <>
                    <Square className="h-3.5 w-3.5" />
                    Dừng đọc
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" />
                    Nghe bài đọc (zh-CN)
                  </>
                )}
              </motion.button>
              <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#57534E] ring-1 ring-[#E5E5E0]">
                {activePassage.level} · {activePassage.genre}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPinyin((prev) => !prev)}
                className={`inline-flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  showPinyin
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-white text-[#57534E] hover:border-brand"
                }`}
              >
                <Languages className="h-3.5 w-3.5" />
                Pinyin
              </button>
              <button
                type="button"
                onClick={() => setShowTranslationVi((prev) => !prev)}
                className={`inline-flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  showTranslationVi
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-white text-[#57534E] hover:border-brand"
                }`}
              >
                {showTranslationVi ? (
                  <EyeOff className="h-3.5 w-3.5" />
                ) : (
                  <Eye className="h-3.5 w-3.5" />
                )}
                Dịch Việt
              </button>
            </div>
          </div>
        ) : undefined
      }
      shortcutHint="Nhấp vào bất kỳ từ chữ Hán nào trong bài đọc để tra Pinyin, Bộ thủ & lưu sổ từ"
      pagination={
        activePassage
          ? {
              currentIndex: safeQuestionIndex,
              total: questions.length,
              onPrev: () => setQuestionIndex((i) => Math.max(0, i - 1)),
              onNext: () =>
                setQuestionIndex((i) => Math.min(questions.length - 1, i + 1)),
              onJump: (idx) => setQuestionIndex(idx),
              itemLabel: "Câu",
              completedIndices: completedQuestionIndices,
            }
          : undefined
      }
    >
      {activePassage ? (
        <div className="space-y-6">
          {/* Reading Passage */}
          <article className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
            <div>
              <h2 className="text-lg font-bold text-[#262626] sm:text-xl">
                <InteractiveChineseText
                  text={activePassage.title}
                  pinyin={activePassage.titlePinyin}
                />
              </h2>
              {showPinyin && activePassage.titlePinyin && (
                <p className="mt-0.5 font-mono text-xs text-[#6B655E]">
                  {activePassage.titlePinyin}
                </p>
              )}
              <p className="text-xs font-medium text-[#737373]">
                {activePassage.titleVi}
              </p>
            </div>

            <div className="max-h-64 overflow-y-auto whitespace-pre-line border-t border-[#E5E5E0] pt-3 text-base leading-loose text-[#262626] sm:text-lg">
              <InteractiveChineseText
                text={activePassage.contentZh}
                pinyin={activePassage.contentPinyin}
                showPinyin={showPinyin}
              />
            </div>

            {showPinyin && activePassage.contentPinyin && (
              <div className="border-t border-[#E5E5E0] pt-2.5 font-mono text-xs leading-relaxed text-[#6B655E] whitespace-pre-line">
                {activePassage.contentPinyin}
              </div>
            )}

            {showTranslationVi && activePassage.contentVi && (
              <div className="rounded-xl border border-[#E5E5E0] bg-white p-3.5 text-xs leading-relaxed text-[#4A4540] whitespace-pre-line">
                <span className="mb-1 block font-semibold text-[#262626]">
                  Bản dịch tiếng Việt:
                </span>
                {activePassage.contentVi}
              </div>
            )}
          </article>

          {/* Single Comprehension Question */}
          {currentQuestion && (
            <section className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#262626] sm:text-base">
                  Câu {safeQuestionIndex + 1}. {currentQuestion.questionVi}
                </h3>
                <span className="shrink-0 text-xs font-semibold text-[#6B655E]">
                  Đúng {completedQuestionIndices.size}/{questions.length}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {currentQuestion.options.map((opt) => {
                  const isPicked = chosen === opt;
                  const isRight = opt === currentQuestion.correctAnswer;
                  let cls =
                    "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand";
                  if (chosen) {
                    if (isRight)
                      cls =
                        "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                    else if (isPicked)
                      cls = "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
                    else
                      cls =
                        "border-[#E5E5E0] bg-white text-[#737373] opacity-65";
                  }
                  return (
                    <motion.button
                      key={opt}
                      type="button"
                      whileTap={!chosen ? { scale: 0.98 } : undefined}
                      onClick={() =>
                        handleAnswer(
                          activePassage,
                          currentQuestion.id,
                          currentQuestion.questionVi,
                          opt,
                          currentQuestion.correctAnswer,
                          currentQuestion.explanationVi
                        )
                      }
                      className={`cursor-pointer rounded-xl border px-4 py-3 text-left text-xs transition-colors sm:text-sm ${cls}`}
                    >
                      {opt}
                    </motion.button>
                  );
                })}
              </div>

              {chosen && (
                <div
                  className={`flex items-start justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs ${
                    isCorrect
                      ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                      : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    )}
                    <span>{currentQuestion.explanationVi}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => {
                        const copy = { ...prev };
                        delete copy[qKey];
                        return copy;
                      })
                    }
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-medium underline"
                  >
                    <RotateCcw className="h-3 w-3" /> Làm lại
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-[#737373]">
          Chưa có bài đọc cho cấp độ này.
        </p>
      )}
    </SkillFocusLayout>
  );
}
