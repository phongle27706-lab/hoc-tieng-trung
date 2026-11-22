"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  FileCheck2,
  Headphones,
  Languages,
  Play,
  RotateCcw,
  Square,
  Volume2,
  XCircle,
  Zap,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import * as mockExamsModule from "@/data/mock-exams";
import { getResourcesByCategory } from "@/data/resources";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import { addXP, recordMistake } from "@/lib/storage";
import type { HSKLevel } from "@/types";

type ExamSectionName = "Nghe" | "Từ vựng" | "Ngữ pháp" | "Đọc hiểu";

const HSK_EXAM_LEVELS: HSKLevel[] = [
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7",
  "HSK8",
  "HSK9",
];

const SECTIONS: ExamSectionName[] = [
  "Nghe",
  "Từ vựng",
  "Ngữ pháp",
  "Đọc hiểu",
];

type ExamPhase = "select" | "active" | "submitted";

interface NormalizedExamQuestion {
  id: string;
  section: ExamSectionName;
  promptVi: string;
  promptZh?: string;
  promptPinyin?: string;
  audioZh?: string;
  passageZh?: string;
  passagePinyin?: string;
  options: string[];
  correctAnswer: string;
  explanationVi: string;
}

interface NormalizedMockExam {
  id: string;
  level: HSKLevel;
  title: string;
  examStandard: string;
  descriptionVi: string;
  durationMinutes: number;
  passThresholdPercent: number;
  questions: NormalizedExamQuestion[];
}

function normalizeSectionName(raw: unknown): ExamSectionName {
  const s = String(raw ?? "").toLowerCase();
  if (s.includes("nghe") || s.includes("listen") || s.includes("听力"))
    return "Nghe";
  if (s.includes("từ") || s.includes("vocab") || s.includes("词汇"))
    return "Từ vựng";
  if (s.includes("ngữ") || s.includes("grammar") || s.includes("语法"))
    return "Ngữ pháp";
  return "Đọc hiểu";
}

function formatTimer(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default function MockExamPage() {
  const normalizedExams = useMemo<NormalizedMockExam[]>(() => {
    const rawList =
      (
        mockExamsModule as unknown as {
          MOCK_EXAMS?: Array<Record<string, unknown>>;
        }
      ).MOCK_EXAMS ?? [];

    return rawList.map((e, idx) => {
      const level = (e.level as HSKLevel) ?? "HSK1";
      const rawQuestions =
        (e.questions as Array<Record<string, unknown>>) ?? [];

      return {
        id: String(e.id ?? `exam-${level}-${idx}`),
        level,
        title: String(e.title ?? `Đề thi thử ${level} chuẩn Hanban`),
        examStandard: String(
          e.examStandard ?? `HSK 3.0 Official Format · ${level}`
        ),
        descriptionVi: String(
          e.descriptionVi ??
            `Đề thi thử ${level} bấm giờ gồm đủ 4 phần: Nghe hiểu, Từ vựng, Ngữ pháp và Đọc hiểu chữ Hán.`
        ),
        durationMinutes: Number(e.durationMinutes ?? 25),
        passThresholdPercent: Number(e.passThresholdPercent ?? 60),
        questions: rawQuestions.map((q, qIdx) => ({
          id: String(q.id ?? `${level}-q-${qIdx}`),
          section: normalizeSectionName(q.section),
          promptVi: String(q.promptVi ?? q.questionVi ?? q.prompt ?? ""),
          promptZh: q.promptZh
            ? String(q.promptZh)
            : q.promptDe
              ? String(q.promptDe)
              : undefined,
          promptPinyin: q.promptPinyin ? String(q.promptPinyin) : undefined,
          audioZh: q.audioZh
            ? String(q.audioZh)
            : q.audioDe
              ? String(q.audioDe)
              : undefined,
          passageZh: q.passageZh ? String(q.passageZh) : undefined,
          passagePinyin: q.passagePinyin ? String(q.passagePinyin) : undefined,
          options: (q.options as string[]) ?? [],
          correctAnswer: String(q.correctAnswer ?? ""),
          explanationVi: String(q.explanationVi ?? ""),
        })),
      };
    });
  }, []);

  const [selectedLevel, setSelectedLevel] = useState<HSKLevel>("HSK1");
  const [phase, setPhase] = useState<ExamPhase>("select");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState<number>(25 * 60);
  const [xpAwarded, setXpAwarded] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [showTranscript, setShowTranscript] = useState<Record<string, boolean>>(
    {}
  );

  const activeExam: NormalizedMockExam = useMemo(
    () =>
      normalizedExams.find((e) => e.level === selectedLevel) ??
      normalizedExams[0] ?? {
        id: "fallback-hsk1",
        level: selectedLevel,
        title: `Đề thi thử ${selectedLevel}`,
        examStandard: "HSK 3.0",
        descriptionVi: "Đề thi thử HSK bấm giờ 4 kỹ năng.",
        durationMinutes: 25,
        passThresholdPercent: 60,
        questions: [],
      },
    [normalizedExams, selectedLevel]
  );

  const currentQuestion = activeExam.questions[currentIndex];

  const handleSubmitExam = useCallback(() => {
    stopSpeaking();
    setIsPlayingAudio(false);
    setPhase("submitted");
    setXpAwarded((alreadyAwarded) => {
      if (!alreadyAwarded) {
        addXP(35);
      }
      return true;
    });

    for (const q of activeExam.questions) {
      const userAns = answers[q.id];
      if (userAns && userAns !== q.correctAnswer) {
        recordMistake({
          source: "study",
          prompt: `[Thi thử ${activeExam.level} · ${q.section}] ${q.promptVi}`,
          userAnswer: userAns,
          correctAnswer: q.correctAnswer,
          explanationVi: q.explanationVi,
        });
      }
    }
  }, [activeExam, answers]);

  useEffect(() => {
    if (phase !== "active") return;

    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [phase, handleSubmitExam]);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleStartExam = (level: HSKLevel) => {
    stopSpeaking();
    setIsPlayingAudio(false);
    const exam =
      normalizedExams.find((e) => e.level === level) ?? normalizedExams[0];
    if (!exam) return;
    setSelectedLevel(exam.level);
    setAnswers({});
    setCurrentIndex(0);
    setSecondsLeft(exam.durationMinutes * 60);
    setXpAwarded(false);
    setShowTranscript({});
    setPhase("active");
  };

  const handleSelectOption = (questionId: string, option: string) => {
    if (phase !== "active") return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handlePlayAudio = (textZh: string, rate = 1.0) => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    speakChinese(textZh, rate, () => {
      setIsPlayingAudio(false);
    });
  };

  const handleGoToQuestion = (idx: number) => {
    stopSpeaking();
    setIsPlayingAudio(false);
    setCurrentIndex(idx);
  };

  const answeredCount = useMemo(
    () => activeExam.questions.filter((q) => Boolean(answers[q.id])).length,
    [activeExam, answers]
  );

  const results = useMemo(() => {
    const total = activeExam.questions.length;
    let correct = 0;
    const bySection: Record<
      ExamSectionName,
      { correct: number; total: number }
    > = {
      Nghe: { correct: 0, total: 0 },
      "Từ vựng": { correct: 0, total: 0 },
      "Ngữ pháp": { correct: 0, total: 0 },
      "Đọc hiểu": { correct: 0, total: 0 },
    };

    for (const q of activeExam.questions) {
      bySection[q.section].total += 1;
      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
        bySection[q.section].correct += 1;
      }
    }

    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = percent >= activeExam.passThresholdPercent;

    return { total, correct, percent, passed, bySection };
  }, [activeExam, answers]);

  // ==========================================
  // VIEW 1: LEVEL SELECTOR & OVERVIEW
  // ==========================================
  if (phase === "select") {
    return (
      <div className="mx-auto max-w-4xl space-y-6 pb-10">
        {/* Header Card */}
        <section className="rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1 text-xs font-medium text-[#6B655E]">
                <FileCheck2 className="h-3.5 w-3.5" />
                <span>模拟考试 · Phòng Thi Thử HSK 3.0 Bấm Giờ (HSK 1 – HSK 9)</span>
              </div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
                Phòng Thi Thử HSK Tính Giờ
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-[#6B655E]">
                Mỗi đề thi thử HSK gồm đầy đủ 4 phần:{" "}
                <strong>Nghe hiểu (听力), Từ vựng (词汇), Ngữ pháp (语法) và Đọc hiểu (阅读)</strong>. Đạt từ{" "}
                {activeExam.passThresholdPercent}% trở lên để vượt qua bài thi và nhận{" "}
                <span className="font-semibold text-[#292524]">+35 XP</span>.
              </p>
            </div>
          </div>

          {/* HSK1 -> HSK9 Selector Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {HSK_EXAM_LEVELS.map((lvl) => {
              const active = lvl === selectedLevel;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    active
                      ? "bg-[#292524] text-white shadow-sm"
                      : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F1ED] hover:text-[#262626]"
                  }`}
                >
                  Đề thi {lvl}
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Exam Detail Card */}
        <section className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-block rounded-md bg-[#F2F1ED] px-2.5 py-0.5 text-xs font-semibold text-[#4A4540]">
                {activeExam.examStandard}
              </span>
              <h2 className="text-xl font-bold text-[#262626]">
                {activeExam.title}
              </h2>
              <p className="text-sm text-[#6B655E]">
                {activeExam.descriptionVi}
              </p>
            </div>
            <span className="inline-flex h-11 min-w-14 shrink-0 items-center justify-center rounded-xl bg-[#292524] px-3 text-sm font-bold text-white">
              {activeExam.level}
            </span>
          </div>

          {/* Exam Specs */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#737373]">
                Số câu hỏi
              </p>
              <p className="mt-1 text-lg font-bold text-[#262626]">
                {activeExam.questions.length} câu
              </p>
            </div>
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#737373]">
                Thời gian làm bài
              </p>
              <p className="mt-1 text-lg font-bold text-[#262626]">
                {activeExam.durationMinutes} phút
              </p>
            </div>
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#737373]">
                Điểm đạt chuẩn
              </p>
              <p className="mt-1 text-lg font-bold text-[#262626]">
                ≥ {activeExam.passThresholdPercent}%
              </p>
            </div>
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#737373]">
                Phần thưởng
              </p>
              <p className="mt-1 flex items-center gap-1 text-lg font-bold text-[#262626]">
                <Zap className="h-4 w-4 text-[#6B655E]" />
                +35 XP
              </p>
            </div>
          </div>

          {/* 4 Sections Breakdown */}
          <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Cấu trúc 4 phần của đề thi {activeExam.level}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {SECTIONS.map((sec) => {
                const count = activeExam.questions.filter(
                  (q) => q.section === sec
                ).length;
                return (
                  <div
                    key={sec}
                    className="flex items-center justify-between rounded-lg border border-[#E5E5E0] bg-white px-3 py-2 text-xs"
                  >
                    <span className="font-medium text-[#4A4540]">{sec}</span>
                    <span className="font-bold text-[#292524]">
                      {count} câu
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-xs text-[#737373]">
              Mẹo: Nhấp vào từ chữ Hán trong đề để tra từ điển Pinyin &amp; Bộ thủ nhanh.
            </p>
            <button
              type="button"
              onClick={() => handleStartExam(activeExam.level)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#292524] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3F3A36]"
            >
              <Play className="h-4 w-4" />
              Bắt đầu thi thử ({activeExam.level})
            </button>
          </div>
        </section>

        <ResourceBanner
          resources={getResourcesByCategory(["exercises", "textbooks"])}
          heading="Bài tập trắc nghiệm, Đề thi THPT & Giáo trình chuẩn HSK (Google Drive)"
        />
      </div>
    );
  }

  // ==========================================
  // VIEW 2: ACTIVE TIMED EXAM
  // ==========================================
  if (phase === "active" && currentQuestion) {
    const isLowTime = secondsLeft <= 120;
    const selectedOption = answers[currentQuestion.id];

    return (
      <div className="mx-auto max-w-4xl space-y-5 pb-10">
        {/* Sticky Top Exam Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E5E5E0] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 items-center rounded-lg bg-[#292524] px-2.5 text-xs font-bold text-white">
              {activeExam.level}
            </span>
            <div>
              <p className="text-sm font-bold text-[#262626]">
                Câu {currentIndex + 1} / {activeExam.questions.length}
              </p>
              <p className="text-[11px] text-[#737373]">
                Đã trả lời {answeredCount}/{activeExam.questions.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`inline-flex cursor-pointer items-center gap-1 rounded-xl border px-2.5 py-1.5 text-xs font-semibold ${
                showPinyin
                  ? "border-[#6B655E] bg-[#6B655E] text-white"
                  : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]"
              }`}
            >
              <Languages className="h-3.5 w-3.5" />
              Pinyin
            </button>

            <div
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm font-bold tabular-nums ${
                isLowTime
                  ? "border-[#B91C1C] bg-[#FEF2F2] text-[#B91C1C]"
                  : "border-[#E5E5E0] bg-[#FAF9F7] text-[#292524]"
              }`}
              title="Thời gian còn lại"
            >
              <Clock className="h-4 w-4" />
              <span>{formatTimer(secondsLeft)}</span>
            </div>

            <button
              type="button"
              onClick={handleSubmitExam}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3F3A36]"
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              Nộp bài
            </button>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="rounded-2xl border border-[#E5E5E0] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <div className="flex flex-wrap items-center gap-1.5">
            {activeExam.questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = Boolean(answers[q.id]);
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleGoToQuestion(idx)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                    isCurrent
                      ? "bg-[#292524] text-white ring-2 ring-[#292524]/20"
                      : isAnswered
                        ? "border border-[#6B655E] bg-[#F2F1ED] text-[#292524]"
                        : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#737373] hover:bg-[#F2F1ED] hover:text-[#262626]"
                  }`}
                  title={`Câu ${idx + 1} · ${q.section}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Question Card */}
        <section className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1 text-xs font-semibold text-[#4A4540]">
              {currentQuestion.section === "Nghe" && (
                <Headphones className="h-3.5 w-3.5 text-[#6B655E]" />
              )}
              <span>Phần thi: {currentQuestion.section}</span>
            </span>
            <span className="text-xs text-[#737373]">
              Chọn 1 đáp án đúng nhất
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[#262626] sm:text-lg">
              {currentQuestion.promptVi}
            </h3>

            {/* Reading Passage if present */}
            {currentQuestion.passageZh && (
              <div className="space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
                <div className="text-lg leading-loose text-[#262626]">
                  <InteractiveChineseText
                    text={currentQuestion.passageZh}
                    pinyin={currentQuestion.passagePinyin}
                  />
                </div>
                {showPinyin && currentQuestion.passagePinyin && (
                  <p className="font-mono text-xs text-[#6B655E]">
                    {currentQuestion.passagePinyin}
                  </p>
                )}
              </div>
            )}

            {/* Chinese Prompt with InteractiveChineseText */}
            {currentQuestion.promptZh && (
              <div className="space-y-1.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
                <div className="text-lg font-medium leading-relaxed text-[#262626]">
                  <InteractiveChineseText
                    text={currentQuestion.promptZh}
                    pinyin={currentQuestion.promptPinyin}
                  />
                </div>
                {showPinyin && currentQuestion.promptPinyin && (
                  <p className="font-mono text-xs text-[#6B655E]">
                    {currentQuestion.promptPinyin}
                  </p>
                )}
              </div>
            )}

            {/* Listening Audio Controls */}
            {currentQuestion.audioZh && (
              <div className="space-y-3 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#292524] text-white">
                      <Volume2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#262626]">
                        Đoạn băng Nghe hiểu HSK (zh-CN)
                      </p>
                      <p className="text-xs text-[#737373]">
                        Nghe kỹ đoạn hội thoại/câu tiếng Trung và chọn đáp án đúng
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handlePlayAudio(currentQuestion.audioZh ?? "", 1.0)
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3F3A36]"
                    >
                      {isPlayingAudio ? (
                        <>
                          <Square className="h-3.5 w-3.5" />
                          Dừng
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5" />
                          Nghe (1.0x)
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handlePlayAudio(currentQuestion.audioZh ?? "", 0.8)
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-xs font-semibold text-[#4A4540] transition-colors hover:bg-[#F2F1ED]"
                    >
                      Chậm (0.8x)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              const isSelected = selectedOption === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelectOption(currentQuestion.id, opt)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all ${
                    isSelected
                      ? "border-[#292524] bg-[#F2F1ED] font-semibold text-[#292524]"
                      : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#A3A3A3] hover:bg-[#FAF9F7]"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isSelected
                        ? "bg-[#292524] text-white"
                        : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#6B655E]"
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Prev / Next */}
          <div className="flex items-center justify-between border-t border-[#E5E5E0] pt-4">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => handleGoToQuestion(currentIndex - 1)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#4A4540] transition-colors hover:bg-[#FAF9F7] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Câu trước
            </button>

            {currentIndex < activeExam.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => handleGoToQuestion(currentIndex + 1)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3F3A36]"
              >
                Câu tiếp theo
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitExam}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3F3A36]"
              >
                <FileCheck2 className="h-4 w-4" />
                Hoàn thành &amp; Chấm điểm
              </button>
            )}
          </div>
        </section>
      </div>
    );
  }

  // ==========================================
  // VIEW 3: RESULTS & FULL REVIEW
  // ==========================================
  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12">
      {/* Score Summary Card */}
      <section className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#292524] px-2.5 py-0.5 text-xs font-bold text-white">
                {activeExam.level}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold ${
                  results.passed
                    ? "bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]"
                    : "border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                }`}
              >
                <Award className="h-3.5 w-3.5" />
                {results.passed
                  ? `Đạt chuẩn ${activeExam.level} (≥ ${activeExam.passThresholdPercent}%)`
                  : `Chưa đạt (< ${activeExam.passThresholdPercent}%)`}
              </span>
              {xpAwarded && (
                <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-0.5 text-xs font-semibold text-[#292524]">
                  <Zap className="h-3 w-3 text-[#6B655E]" />
                  +35 XP
                </span>
              )}
            </div>
            <h2 className="font-display text-2xl font-bold text-[#262626]">
              Kết quả: {results.correct}/{results.total} câu đúng ({results.percent}%)
            </h2>
            <p className="text-sm text-[#6B655E]">
              {results.passed
                ? `Chúc mừng! Bạn đã vượt qua đề thi thử ${activeExam.level}.`
                : "Các câu làm sai đã được lưu vào Sổ Lỗi Cần Ôn. Hãy xem kỹ giải thích bên dưới và thử lại."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleStartExam(activeExam.level)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#292524] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3F3A36]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Thi lại {activeExam.level}
            </button>
            <button
              type="button"
              onClick={() => {
                stopSpeaking();
                setPhase("select");
              }}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#4A4540] transition-colors hover:bg-[#FAF9F7]"
            >
              Chọn cấp độ HSK khác
            </button>
          </div>
        </div>

        {/* Per-Section Breakdown */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SECTIONS.map((sec) => {
            const stat = results.bySection[sec];
            const secPct =
              stat.total > 0
                ? Math.round((stat.correct / stat.total) * 100)
                : 0;
            return (
              <div
                key={sec}
                className="space-y-1.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5"
              >
                <p className="text-xs font-semibold text-[#6B655E]">{sec}</p>
                <p className="text-lg font-bold text-[#262626]">
                  {stat.correct}/{stat.total}
                </p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E5E0]">
                  <div
                    className="h-full rounded-full bg-[#292524]"
                    style={{ width: `${secPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Answer Review */}
      <section className="space-y-4">
        <h3 className="text-base font-bold text-[#262626]">
          Chi tiết đáp án &amp; Giải thích ({activeExam.questions.length} câu)
        </h3>

        {activeExam.questions.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          const transcriptOpen = Boolean(showTranscript[q.id]);

          return (
            <article
              key={q.id}
              className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-[#F2F1ED] px-2 text-xs font-bold text-[#292524]">
                    Câu {idx + 1}
                  </span>
                  <span className="rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-0.5 text-[11px] font-medium text-[#6B655E]">
                    {q.section}
                  </span>
                </div>

                {isCorrect ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#15803D]">
                    <CheckCircle2 className="h-4 w-4 text-[#15803D]" />
                    Chính xác
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B91C1C]">
                    <XCircle className="h-4 w-4 text-[#B91C1C]" />
                    {userAnswer ? "Chưa đúng" : "Chưa trả lời"}
                  </span>
                )}
              </div>

              <p className="text-sm font-semibold text-[#262626]">
                {q.promptVi}
              </p>

              {q.passageZh && (
                <div className="space-y-1.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-base leading-relaxed text-[#262626]">
                  <InteractiveChineseText
                    text={q.passageZh}
                    pinyin={q.passagePinyin}
                  />
                  {showPinyin && q.passagePinyin && (
                    <p className="font-mono text-xs text-[#6B655E]">
                      {q.passagePinyin}
                    </p>
                  )}
                </div>
              )}

              {q.promptZh && (
                <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-base leading-relaxed text-[#262626]">
                  <InteractiveChineseText
                    text={q.promptZh}
                    pinyin={q.promptPinyin}
                  />
                </div>
              )}

              {q.audioZh && (
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(q.audioZh ?? "", 1.0)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1.5 text-xs font-semibold text-[#292524] hover:bg-[#F2F1ED]"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Nghe lại audio
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setShowTranscript((prev) => ({
                          ...prev,
                          [q.id]: !prev[q.id],
                        }))
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs font-medium text-[#6B655E] hover:bg-[#FAF9F7]"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {transcriptOpen
                        ? "Ẩn lời thoại chữ Hán"
                        : "Xem lời thoại chữ Hán"}
                    </button>
                  </div>
                  {transcriptOpen && (
                    <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-base leading-relaxed text-[#262626]">
                      <InteractiveChineseText text={q.audioZh} />
                    </div>
                  )}
                </div>
              )}

              <div className="grid gap-2 text-xs sm:grid-cols-2">
                <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3">
                  <span className="block text-[11px] font-medium text-[#737373]">
                    Đáp án của bạn
                  </span>
                  <span className="mt-0.5 block font-semibold text-[#262626]">
                    {userAnswer ?? "— (Chưa chọn)"}
                  </span>
                </div>
                <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3">
                  <span className="block text-[11px] font-medium text-[#15803D]">
                    Đáp án đúng
                  </span>
                  <span className="mt-0.5 block font-semibold text-[#15803D]">
                    {q.correctAnswer}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-xs leading-relaxed text-[#4A4540]">
                <span className="font-semibold text-[#292524]">
                  Giải thích:{" "}
                </span>
                {q.explanationVi}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
