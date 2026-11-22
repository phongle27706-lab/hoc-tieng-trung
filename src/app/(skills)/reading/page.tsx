"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
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
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import {
  HoverLiftCard,
  TACTILE_SPRING,
} from "@/components/ui/MotionPrimitives";
import {
  READING_PASSAGES,
  type ReadingPassage,
} from "@/data/reading-passages";
import { getResourcesByCategory } from "@/data/resources";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import { addXP, recordMistake } from "@/lib/storage";
import type { HSKLevel, SubDifficulty } from "@/types";

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
  const [activePassage, setActivePassage] = useState<ReadingPassage | null>(
    null
  );
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [showTranslationVi, setShowTranslationVi] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const levelPassages = useMemo(
    () =>
      levelFilter === "ALL"
        ? READING_PASSAGES
        : levelFilter === "HSK7-9"
          ? READING_PASSAGES.filter((p) =>
              ["HSK7", "HSK8", "HSK9"].includes(p.level)
            )
          : READING_PASSAGES.filter((p) => p.level === levelFilter),
    [levelFilter]
  );

  const stats = useMemo(() => {
    const basicPassages = levelPassages.filter(
      (p, idx) => getSubDifficulty(p, idx, levelPassages.length) === "basic"
    );
    const advancedPassages = levelPassages.filter(
      (p, idx) => getSubDifficulty(p, idx, levelPassages.length) === "advanced"
    );
    const countQ = (list: ReadingPassage[]) =>
      list.reduce((sum, p) => sum + p.questions.length, 0);
    return {
      totalAll: {
        passages: READING_PASSAGES.length,
        questions: countQ(READING_PASSAGES),
      },
      all: {
        passages: levelPassages.length,
        questions: countQ(levelPassages),
      },
      basic: {
        passages: basicPassages.length,
        questions: countQ(basicPassages),
      },
      advanced: {
        passages: advancedPassages.length,
        questions: countQ(advancedPassages),
      },
    };
  }, [levelPassages]);

  const filtered = useMemo(() => {
    if (subFilter === "all") return levelPassages;
    return levelPassages.filter(
      (p, idx) => getSubDifficulty(p, idx, levelPassages.length) === subFilter
    );
  }, [levelPassages, subFilter]);

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

  if (activePassage) {
    const passageCorrectCount = activePassage.questions.filter(
      (q) => answers[`${activePassage.id}-${q.id}`] === q.correctAnswer
    ).length;

    return (
      <div className="mx-auto max-w-3xl space-y-6 pb-12">
        <button
          type="button"
          onClick={() => {
            stopSpeaking();
            setIsSpeaking(false);
            setActivePassage(null);
          }}
          className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#262626]"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại kho {stats.totalAll.passages} bài đọc chữ Hán
        </button>

        <article className="space-y-5 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#737373]">
                <span className="rounded-md bg-[#292524] px-2 py-0.5 font-semibold text-white">
                  {activePassage.level}
                </span>
                <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 font-medium text-[#4A4540]">
                  {activePassage.subDifficulty === "advanced"
                    ? "Nâng cao"
                    : "Cơ bản"}
                </span>
                <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 font-medium text-[#6B655E]">
                  {activePassage.genre}
                </span>
              </div>
              <h1 className="mt-2 text-xl font-bold text-[#262626] sm:text-2xl">
                <InteractiveChineseText
                  text={activePassage.title}
                  pinyin={activePassage.titlePinyin}
                />
              </h1>
              {showPinyin && activePassage.titlePinyin && (
                <p className="mt-0.5 font-mono text-xs text-[#6B655E]">
                  {activePassage.titlePinyin}
                </p>
              )}
              <p className="mt-1 text-xs font-medium text-[#737373]">
                {activePassage.titleVi}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPinyin((prev) => !prev)}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                  showPinyin
                    ? "border-[#6B655E] bg-[#6B655E] text-white"
                    : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                <Languages className="h-4 w-4" />
                {showPinyin ? "Tắt Pinyin" : "Bật Pinyin"}
              </button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleToggleSpeakPassage(activePassage.contentZh)
                }
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isSpeaking
                    ? "border-[#292524] bg-[#292524] text-white"
                    : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                {isSpeaking ? (
                  <>
                    <Square className="h-3.5 w-3.5" />
                    Dừng đọc
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4 text-[#6B655E]" />
                    Nghe toàn bộ bài đọc (zh-CN)
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Chinese Passage Content wrapped in InteractiveChineseText */}
          <div className="space-y-4 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
            <div className="whitespace-pre-line text-lg leading-loose text-[#262626]">
              <InteractiveChineseText
                text={activePassage.contentZh}
                pinyin={activePassage.contentPinyin}
                showPinyin={showPinyin}
              />
            </div>

            {showPinyin && activePassage.contentPinyin && (
              <div className="border-t border-[#E5E5E0] pt-3 font-mono text-xs leading-relaxed text-[#6B655E] whitespace-pre-line">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#737373]">
                  Phiên âm Pinyin song song:
                </span>
                {activePassage.contentPinyin}
              </div>
            )}
          </div>

          {/* Toggle Vietnamese Translation */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-[#737373]">
              Mẹo: Nhấp hoặc chạm đúp vào bất kỳ từ chữ Hán nào để tra Pinyin, Bộ thủ, Số nét &amp; lưu vào sổ từ.
            </p>
            <button
              type="button"
              onClick={() => setShowTranslationVi((prev) => !prev)}
              className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#6B655E] hover:text-[#262626]"
            >
              {showTranslationVi ? (
                <>
                  <EyeOff className="h-3.5 w-3.5" /> Ẩn bản dịch tiếng Việt
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5" /> Xem bản dịch tiếng Việt
                </>
              )}
            </button>
          </div>

          {showTranslationVi && activePassage.contentVi && (
            <div className="rounded-xl border border-[#E5E5E0] bg-white p-4 text-xs leading-relaxed text-[#4A4540] whitespace-pre-line">
              <span className="mb-1 block font-semibold text-[#262626]">
                Bản dịch tiếng Việt:
              </span>
              {activePassage.contentVi}
            </div>
          )}
        </article>

        {/* Comprehension Questions */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#737373]">
              Câu hỏi đọc hiểu ({activePassage.questions.length} câu)
            </h2>
            <span className="text-xs font-semibold text-[#6B655E]">
              Đúng {passageCorrectCount}/{activePassage.questions.length} câu
            </span>
          </div>

          {activePassage.questions.map((q, idx) => {
            const qKey = `${activePassage.id}-${q.id}`;
            const chosen = answers[qKey];
            const isCorrect = chosen === q.correctAnswer;
            return (
              <div
                key={q.id}
                className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#262626]">
                  {idx + 1}. {q.questionVi}
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const isPicked = chosen === opt;
                    const isRight = opt === q.correctAnswer;
                    let cls =
                      "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]";
                    if (chosen) {
                      if (isRight)
                        cls =
                          "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                      else if (isPicked)
                        cls =
                          "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
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
                            q.id,
                            q.questionVi,
                            opt,
                            q.correctAnswer,
                            q.explanationVi
                          )
                        }
                        className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-left text-xs sm:text-sm ${cls}`}
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
                      <span>{q.explanationVi}</span>
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
              </div>
            );
          })}
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12">
      <div className="space-y-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
              阅读 · {stats.totalAll.passages} bài đọc chữ Hán ·{" "}
              {stats.totalAll.questions} câu hỏi (Mức 0 – HSK 9)
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
              Thư Viện Luyện Đọc Hiểu Chữ Hán
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowPinyin((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center gap-1.5 self-start rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors sm:self-auto ${
              showPinyin
                ? "border-[#292524] bg-[#292524] text-white"
                : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-[#6B655E]"
            }`}
          >
            <Languages className="h-4 w-4" />
            {showPinyin ? "Hiển thị Pinyin: BẬT" : "Hiển thị Pinyin: TẮT"}
          </button>
        </div>

        {/* HSK0 -> HSK9 Level Pills */}
        <div className="flex flex-wrap gap-1.5 rounded-2xl border border-[#E5E5E0] bg-white p-3.5">
          {HSK_LEVELS.map((lvl) => (
            <motion.button
              key={lvl}
              type="button"
              whileTap={{ scale: 0.96 }}
              transition={TACTILE_SPRING}
              onClick={() => setLevelFilter(lvl)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold ${
                levelFilter === lvl
                  ? "bg-[#292524] text-white"
                  : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#57534E] hover:border-[#6B655E]"
              }`}
            >
              {lvl === "ALL"
                ? `Tất cả (${stats.totalAll.passages})`
                : lvl === "HSK0"
                  ? "Mức 0"
                  : lvl === "HSK7-9"
                    ? "HSK 7–9"
                    : lvl.replace("HSK", "HSK ")}
            </motion.button>
          ))}
        </div>

        {/* Independent Sub-Level Toggle: Tất cả | Cơ bản | Nâng cao */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {(
            [
              {
                key: "all" as const,
                label:
                  levelFilter === "ALL"
                    ? "Tất cả bài đọc"
                    : `${levelFilter} · Tất cả`,
                sub: `${stats.all.passages} bài đọc · ${stats.all.questions} câu hỏi`,
              },
              {
                key: "basic" as const,
                label:
                  levelFilter === "ALL"
                    ? "Cơ bản (Basic)"
                    : `${levelFilter} · Cơ bản`,
                sub: `${stats.basic.passages} bài đọc · ${stats.basic.questions} câu hỏi`,
              },
              {
                key: "advanced" as const,
                label:
                  levelFilter === "ALL"
                    ? "Nâng cao (Advanced)"
                    : `${levelFilter} · Nâng cao`,
                sub: `${stats.advanced.passages} bài đọc · ${stats.advanced.questions} câu hỏi`,
              },
            ]
          ).map((sub) => {
            const active = subFilter === sub.key;
            return (
              <motion.button
                key={sub.key}
                type="button"
                whileTap={{ scale: 0.98 }}
                transition={TACTILE_SPRING}
                onClick={() => setSubFilter(sub.key)}
                className={`cursor-pointer rounded-2xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-[#6B655E] bg-[#6B655E] text-white"
                    : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                <div className="text-sm font-semibold">{sub.label}</div>
                <div
                  className={`mt-0.5 text-xs ${
                    active ? "text-[#F5F5F4]" : "text-[#737373]"
                  }`}
                >
                  {sub.sub}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Passage Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <HoverLiftCard
            key={p.id}
            onClick={() => {
              setActivePassage(p);
              setShowTranslationVi(false);
            }}
            className="flex cursor-pointer flex-col justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-white p-5 transition-colors hover:border-[#6B655E]"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-md bg-[#292524] px-2 py-0.5 font-semibold text-white">
                    {p.level}
                  </span>
                  <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 font-medium text-[#4A4540]">
                    {p.subDifficulty === "advanced" ? "Nâng cao" : "Cơ bản"}
                  </span>
                </div>
                <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 font-medium text-[#6B655E]">
                  {p.genre}
                </span>
              </div>
              <h2 className="mt-3 text-base font-bold text-[#262626]">
                {p.title}
              </h2>
              {showPinyin && p.titlePinyin && (
                <p className="mt-0.5 font-mono text-[11px] text-[#6B655E]">
                  {p.titlePinyin}
                </p>
              )}
              <p className="mt-1 text-xs text-[#737373]">{p.titleVi}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A4540]">
              <BookOpen className="h-3.5 w-3.5 text-[#6B655E]" />
              Đọc ngay ({p.questions.length} câu hỏi)
            </div>
          </HoverLiftCard>
        ))}
      </div>

      <ResourceBanner
        resources={getResourcesByCategory(["textbooks"])}
        heading="Giáo trình chuẩn HSK 1–6 PDF + Audio (Google Drive)"
      />
    </div>
  );
}
