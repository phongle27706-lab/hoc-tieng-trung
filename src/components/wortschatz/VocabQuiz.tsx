"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { speakChinese } from "@/lib/speech";
import { addXP } from "@/lib/storage";
import type { VocabItem } from "@/types";

export interface VocabQuizProps {
  items: VocabItem[];
}

type QuizMode = "meaning" | "pinyin" | "radical";

interface QuizQuestion {
  item: VocabItem;
  prompt: string;
  subPrompt?: string;
  options: string[];
  correctAnswer: string;
  type: QuizMode;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestions(items: VocabItem[], mode: QuizMode): QuizQuestion[] {
  const pool = shuffle(items).slice(0, 10);

  if (mode === "pinyin") {
    return pool.map((item) => {
      const distractors = shuffle(
        Array.from(
          new Set(
            items
              .filter((other) => other.id !== item.id && other.pinyin !== item.pinyin)
              .map((other) => other.pinyin)
          )
        )
      ).slice(0, 3);
      while (distractors.length < 3) {
        distractors.push(`hàn zì ${distractors.length + 1}`);
      }
      const options = shuffle([item.pinyin, ...distractors]);
      return {
        item,
        prompt: item.hanzi,
        subPrompt: `Nghĩa: ${item.meaningVi}`,
        options,
        correctAnswer: item.pinyin,
        type: "pinyin",
      };
    });
  }

  if (mode === "radical") {
    const fallbackRadicals = [
      "亻 (Nhân đứng)",
      "口 (Khẩu)",
      "氵 (Chấm thủy)",
      "讠 (Ngôn)",
      "心 (Tâm)",
      "女 (Nữ)",
      "木 (Mộc)",
      "日 (Nhật)",
    ];
    return pool.map((item) => {
      const candidatePool = Array.from(
        new Set([
          ...items
            .filter((other) => other.id !== item.id && other.radical !== item.radical)
            .map((other) => other.radical),
          ...fallbackRadicals.filter((r) => r !== item.radical),
        ])
      );
      const distractors = shuffle(candidatePool).slice(0, 3);
      const options = shuffle([item.radical, ...distractors]);
      return {
        item,
        prompt: item.hanzi,
        subPrompt: `[${item.pinyin}] · ${item.meaningVi} (${item.strokeCount} nét)`,
        options,
        correctAnswer: item.radical,
        type: "radical",
      };
    });
  }

  return pool.map((item) => {
    const distractors = shuffle(
      Array.from(
        new Set(
          items
            .filter(
              (other) =>
                other.id !== item.id && other.meaningVi !== item.meaningVi
            )
            .map((other) => other.meaningVi)
        )
      )
    ).slice(0, 3);
    const options = shuffle([item.meaningVi, ...distractors]);
    return {
      item,
      prompt: item.hanzi,
      subPrompt: `[${item.pinyin}] · Bộ thủ: ${item.radical}`,
      options,
      correctAnswer: item.meaningVi,
      type: "meaning",
    };
  });
}

export function VocabQuiz({ items }: VocabQuizProps) {
  const [mode, setMode] = useState<QuizMode>("meaning");
  const [seed, setSeed] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = useMemo(
    () => buildQuestions(items, mode),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, mode, seed]
  );

  const resetQuiz = (nextMode: QuizMode = mode) => {
    setMode(nextMode);
    setSeed((s) => s + 1);
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setEarnedXP(0);
    setFinished(false);
  };

  if (items.length < 4) {
    return (
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-8 text-center">
        <p className="text-sm text-[#737373]">
          Cần ít nhất 4 từ vựng chữ Hán trong bộ lọc hiện tại để bắt đầu bài trắc nghiệm.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  const handleSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === currentQ.correctAnswer) {
      setScore((s) => s + 1);
      setEarnedXP((x) => x + 10);
      addXP(10);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-[#E5E5E0] bg-white p-8 text-center shadow-xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2F2F0] text-[#6B655E]">
          <Award className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#262626]">
          Kết quả Trắc nghiệm Chữ Hán
        </h3>
        <p className="mt-1 text-3xl font-extrabold text-[#292524]">
          {score} / {questions.length} ({accuracy}%)
        </p>
        <p className="mt-2 text-sm text-[#737373]">
          Bạn đã nhận được{" "}
          <span className="font-semibold text-[#15803D]">+{earnedXP} XP</span>!
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button onClick={() => resetQuiz(mode)}>
            <RotateCcw className="h-4 w-4" />
            Làm lại bộ câu hỏi mới
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              resetQuiz(
                mode === "meaning"
                  ? "pinyin"
                  : mode === "pinyin"
                  ? "radical"
                  : "meaning"
              )
            }
          >
            Đổi chế độ trắc nghiệm
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {/* Mode switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-white p-1">
          {(
            [
              { id: "meaning", label: "Chữ Hán → Nghĩa Việt" },
              { id: "pinyin", label: "Chữ Hán → Pinyin & Thanh điệu" },
              { id: "radical", label: "Chữ Hán → Bộ thủ (部首)" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => resetQuiz(tab.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                mode === tab.id
                  ? "bg-[#6B655E] text-white"
                  : "text-[#737373] hover:bg-[#F2F2F0] hover:text-[#262626]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B655E]">
          <Sparkles className="h-4 w-4" />
          Điểm: {score} · +{earnedXP} XP
        </div>
      </div>

      <Progress
        value={currentIdx + 1}
        max={questions.length}
        label={`Câu ${currentIdx + 1} / ${questions.length}`}
        showPercent
      />

      {/* Question Card */}
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="default">
              {mode === "meaning"
                ? "Chọn nghĩa tiếng Việt đúng"
                : mode === "pinyin"
                ? "Chọn phiên âm Pinyin & thanh điệu chuẩn"
                : "Chọn bộ thủ cấu tạo nên chữ Hán"}
            </Badge>
            <Badge variant="outline">{currentQ.item.level}</Badge>
          </div>
          <button
            type="button"
            onClick={() => speakChinese(currentQ.item.hanzi, 0.92)}
            aria-label="Nghe phát âm tiếng Trung"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#6B655E] transition-colors hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>

        <div className="my-6 text-center">
          <h3 className="text-4xl font-bold tracking-tight text-[#262626]">
            {currentQ.prompt}
          </h3>
          {currentQ.subPrompt && (
            <p className="mt-2 text-sm text-[#737373]">{currentQ.subPrompt}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {currentQ.options.map((opt) => {
            const isSelected = selected === opt;
            const isCorrect = opt === currentQ.correctAnswer;
            let stateClass =
              "border-[#E5E5E0] bg-[#F2F2F0]/50 text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]";

            if (selected !== null) {
              if (isCorrect) {
                stateClass = "border-[#15803D] bg-[#F0FDF4] text-[#15803D]";
              } else if (isSelected) {
                stateClass = "border-[#B91C1C] bg-[#FEF2F2] text-[#B91C1C]";
              } else {
                stateClass =
                  "border-[#E5E5E0] bg-[#F2F2F0]/40 text-[#A8A29E] opacity-60";
              }
            }

            return (
              <button
                key={opt}
                type="button"
                disabled={selected !== null}
                onClick={() => handleSelect(opt)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all cursor-pointer ${stateClass}`}
              >
                <span>{opt}</span>
                {selected !== null && isCorrect && (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803D]" />
                )}
                {selected !== null && isSelected && !isCorrect && (
                  <XCircle className="h-4 w-4 shrink-0 text-[#B91C1C]" />
                )}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-5 flex items-center justify-between border-t border-[#E5E5E0] pt-4">
            <p className="text-sm font-medium">
              {selected === currentQ.correctAnswer ? (
                <span className="text-[#15803D]">Chính xác! +10 XP</span>
              ) : (
                <span className="text-[#B91C1C]">
                  Đáp án đúng: <strong>{currentQ.correctAnswer}</strong>
                </span>
              )}
            </p>
            <Button size="sm" onClick={handleNext}>
              {currentIdx + 1 < questions.length ? "Câu tiếp theo" : "Xem kết quả"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
