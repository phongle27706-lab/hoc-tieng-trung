"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PenTool,
  RotateCcw,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EDITORIAL_EASE } from "@/components/ui/MotionPrimitives";
import { Progress } from "@/components/ui/Progress";
import { speakChinese } from "@/lib/speech";
import { addXP, saveSRSOverride } from "@/lib/storage";
import type { SRSData, SRSRating, VocabItem } from "@/types";

export interface FlashcardDeckProps {
  items: VocabItem[];
  onRated?: () => void;
  onPracticeWord?: (item: VocabItem) => void;
}

function calculateNextSRS(current: SRSData, rating: SRSRating): SRSData {
  let { easeFactor, interval, repetitions } = current;

  if (rating === "again") {
    repetitions = 0;
    interval = 1;
    easeFactor = Math.max(1.3, easeFactor - 0.2);
  } else if (rating === "hard") {
    repetitions = Math.max(1, repetitions + 1);
    interval = interval <= 1 ? 2 : Math.round(interval * 1.2);
    easeFactor = Math.max(1.3, easeFactor - 0.15);
  } else if (rating === "good") {
    repetitions += 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.round(interval * easeFactor);
  } else {
    repetitions += 1;
    if (repetitions === 1) interval = 4;
    else if (repetitions === 2) interval = 10;
    else interval = Math.round(interval * easeFactor * 1.3);
    easeFactor = Math.min(3.0, easeFactor + 0.15);
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    easeFactor: Number(easeFactor.toFixed(2)),
    interval,
    repetitions,
    nextReviewDate: nextDate.toISOString(),
    lastRating: rating,
  };
}

const RATING_BUTTONS: {
  rating: SRSRating;
  hotkey: string;
  label: string;
  hint: string;
  xp: number;
  className: string;
}[] = [
  {
    rating: "again",
    hotkey: "1",
    label: "Quên",
    hint: "1 ngày",
    xp: 2,
    className:
      "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] hover:bg-[#FEE2E2]",
  },
  {
    rating: "hard",
    hotkey: "2",
    label: "Khó",
    hint: "2 ngày",
    xp: 5,
    className:
      "border-[#E5E5E0] bg-[#F2F2F0] text-[#57534E] hover:bg-[#E5E5E0]",
  },
  {
    rating: "good",
    hotkey: "3",
    label: "Tốt",
    hint: "6 ngày",
    xp: 8,
    className:
      "border-[#6B655E]/30 bg-white text-[#262626] hover:bg-[#F2F2F0]",
  },
  {
    rating: "easy",
    hotkey: "4",
    label: "Dễ",
    hint: "10+ ngày",
    xp: 10,
    className:
      "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] hover:bg-[#DCFCE7]",
  },
];

export function FlashcardDeck({
  items,
  onRated,
  onPracticeWord,
}: FlashcardDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showPracticeDrawer, setShowPracticeDrawer] = useState(false);
  const [practiceTab, setPracticeTab] = useState<"stroke" | "sentences">(
    "stroke"
  );

  const safeIndex = useMemo(
    () => (items.length > 0 ? Math.min(index, items.length - 1) : 0),
    [index, items.length]
  );

  const currentCard = items[safeIndex];

  const handleRate = useCallback(
    (rating: SRSRating, xp: number) => {
      if (!currentCard) return;
      const nextSRS = calculateNextSRS(currentCard.srsData, rating);
      saveSRSOverride(currentCard.id, nextSRS);
      addXP(xp);
      setSessionXP((prev) => prev + xp);
      setReviewedCount((prev) => prev + 1);
      onRated?.();

      setFlipped(false);
      setShowPracticeDrawer(false);
      if (safeIndex + 1 < items.length) {
        setTimeout(() => setIndex((i) => i + 1), 160);
      } else {
        setCompleted(true);
      }
    },
    [currentCard, items.length, onRated, safeIndex]
  );

  // Global keyboard hotkeys: Space to flip, 1-4 for SRS rating when flipped
  useEffect(() => {
    if (completed || items.length === 0 || showPracticeDrawer) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
        return;
      }

      if (flipped && ["1", "2", "3", "4"].includes(e.key)) {
        e.preventDefault();
        const btn = RATING_BUTTONS[Number(e.key) - 1];
        if (btn) {
          handleRate(btn.rating, btn.xp);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [completed, flipped, handleRate, items.length, showPracticeDrawer]);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-10 text-center">
        <p className="text-[#737373]">
          Không có từ vựng nào phù hợp bộ lọc hiện tại để ôn tập Flashcard.
        </p>
      </div>
    );
  }

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="mx-auto max-w-lg rounded-2xl border border-[#E5E5E0] bg-white p-8 text-center shadow-xs"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#15803D]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#262626]">
          Hoàn thành phiên ôn tập Flashcard Chữ Hán!
        </h3>
        <p className="mt-1.5 text-sm text-[#737373]">
          Bạn đã ôn tập {reviewedCount} thẻ từ vựng và nhận được{" "}
          <span className="font-semibold text-[#15803D]">+{sessionXP} XP</span>.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            onClick={() => {
              setIndex(0);
              setFlipped(false);
              setReviewedCount(0);
              setSessionXP(0);
              setCompleted(false);
            }}
          >
            <RotateCcw className="h-4 w-4" />
            Ôn lại từ đầu
          </Button>
        </div>
      </motion.div>
    );
  }

  const handleSpeakWord = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakChinese(currentCard.hanzi, 0.92);
  };

  const handleSpeakExample = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCard.exampleZh) {
      speakChinese(currentCard.exampleZh, 0.92);
    }
  };

  const handleOpenPractice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPracticeWord) {
      onPracticeWord(currentCard);
    } else {
      setShowPracticeDrawer((v) => !v);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      {/* Progress bar */}
      <div className="flex items-center justify-between gap-4">
        <Progress
          value={safeIndex + 1}
          max={items.length}
          label={`Thẻ ${safeIndex + 1} / ${items.length}`}
          showPercent
        />
        <div className="shrink-0 rounded-full border border-[#E5E5E0] bg-white px-3 py-1 text-xs font-semibold text-[#6B655E]">
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" />+{sessionXP} XP
          </span>
        </div>
      </div>

      {/* 3D Flip Card */}
      <div style={{ perspective: "1200px" }} className="w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
          >
            <motion.div
              onClick={() => setFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setFlipped((f) => !f);
                }
              }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.48, ease: EDITORIAL_EASE }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative min-h-[340px] w-full cursor-pointer"
            >
              {/* FRONT */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{currentCard.level}</Badge>
                    <Badge variant="outline">{currentCard.topic}</Badge>
                    <Badge variant="default">{currentCard.partOfSpeech}</Badge>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleOpenPractice}
                      title="Luyện viết chấm nét & Đặt 2 câu"
                      className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 text-xs font-semibold text-[#4A4540] transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
                    >
                      <PenTool className="h-3.5 w-3.5 text-[#6B655E]" />
                      Viết chữ & Đặt 2 câu
                    </button>
                    <button
                      type="button"
                      onClick={handleSpeakWord}
                      aria-label="Nghe phát âm tiếng Trung"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] text-[#6B655E] transition-colors hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="my-auto py-6 text-center">
                  <h2 className="text-5xl font-bold tracking-tight text-[#262626] sm:text-6xl">
                    {currentCard.hanzi}
                  </h2>
                  <p className="mt-3 font-mono text-lg font-semibold text-[#6B655E]">
                    [{currentCard.pinyin}]
                  </p>
                  <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2 text-xs text-[#737373]">
                    <span className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1">
                      Bộ thủ: <strong className="text-[#262626]">{currentCard.radical}</strong>
                    </span>
                    <span className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1">
                      Số nét: <strong className="text-[#262626]">{currentCard.strokeCount} nét</strong>
                    </span>
                  </div>
                </div>

                <p className="text-center text-xs font-medium text-[#737373]">
                  Nhấn vào thẻ hoặc phím{" "}
                  <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1.5 py-0.5 font-mono text-[11px] text-[#4A4540]">
                    Space
                  </kbd>{" "}
                  để lật xem nghĩa tiếng Việt & câu ví dụ
                </p>
              </div>

              {/* BACK */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl font-bold text-[#262626]">
                      {currentCard.hanzi}
                    </span>
                    <span className="font-mono text-sm font-semibold text-[#6B655E]">
                      [{currentCard.pinyin}]
                    </span>
                    <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 text-xs text-[#4A4540]">
                      Bộ thủ: {currentCard.radical} · {currentCard.strokeCount} nét
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleOpenPractice}
                      className="inline-flex h-8 items-center gap-1 rounded-xl border border-[#292524] bg-[#292524] px-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540] cursor-pointer"
                    >
                      <PenTool className="h-3.5 w-3.5" />
                      Luyện viết & Đặt 2 câu
                    </button>
                    <button
                      type="button"
                      onClick={handleSpeakWord}
                      aria-label="Nghe phát âm"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#E5E5E0] bg-white text-[#6B655E] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="my-auto space-y-4 py-3">
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                      Nghĩa tiếng Việt ({currentCard.partOfSpeech})
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#262626]">
                      {currentCard.meaningVi}
                    </p>
                  </div>

                  {currentCard.exampleZh && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-medium text-[#262626]">
                          <InteractiveChineseText
                            text={currentCard.exampleZh}
                            pinyin={currentCard.examplePinyin}
                            showPinyin={Boolean(currentCard.examplePinyin)}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleSpeakExample}
                          aria-label="Nghe câu ví dụ"
                          className="shrink-0 rounded-lg p-1.5 text-[#6B655E] transition-colors hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                      </div>
                      {currentCard.exampleVi && (
                        <p className="mt-1 text-xs text-[#737373]">
                          {currentCard.exampleVi}
                        </p>
                      )}
                      <p className="mt-1.5 text-[11px] text-[#6B655E]">
                        Mẹo: Bấm vào bất kỳ chữ Hán nào trong câu để tra từ điển & bộ thủ.
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-center text-xs text-[#737373]">
                  Chọn mức độ ghi nhớ bên dưới hoặc nhấn phím{" "}
                  <kbd className="rounded border border-[#E5E5E0] bg-white px-1 py-0.5 font-mono text-[11px] text-[#4A4540]">
                    1
                  </kbd>
                  –
                  <kbd className="rounded border border-[#E5E5E0] bg-white px-1 py-0.5 font-mono text-[11px] text-[#4A4540]">
                    4
                  </kbd>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SRS Rating Buttons or Navigation */}
      <AnimatePresence mode="wait" initial={false}>
        {flipped ? (
          <motion.div
            key="srs-ratings"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
          >
            {RATING_BUTTONS.map((btn) => (
              <motion.button
                key={btn.rating}
                type="button"
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: EDITORIAL_EASE }}
                onClick={() => handleRate(btn.rating, btn.xp)}
                className={`relative flex flex-col items-center rounded-xl border px-3 py-2.5 transition-colors cursor-pointer ${btn.className}`}
              >
                <span className="absolute right-2 top-1.5 font-mono text-[10px] opacity-60">
                  {btn.hotkey}
                </span>
                <span className="text-sm font-bold">{btn.label}</span>
                <span className="text-[11px] opacity-80">
                  {btn.hint} · +{btn.xp} XP
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="srs-nav"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
            className="flex flex-wrap items-center justify-between gap-2"
          >
            <Button
              variant="outline"
              size="sm"
              disabled={safeIndex === 0}
              onClick={() => {
                setFlipped(false);
                setIndex((i) => Math.max(0, i - 1));
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              Thẻ trước
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleOpenPractice}
              >
                <PenTool className="h-4 w-4 text-[#6B655E]" />
                Luyện viết chấm nét & Đặt 2 câu
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setFlipped(true)}
              >
                Lật thẻ xem đáp án
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={safeIndex >= items.length - 1}
              onClick={() => {
                setFlipped(false);
                setIndex((i) => Math.min(items.length - 1, i + 1));
              }}
            >
              Thẻ sau
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline Practice Panel if onPracticeWord not passed */}
      <AnimatePresence>
        {showPracticeDrawer && currentCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="space-y-4 rounded-2xl border border-[#D6D3CE] bg-[#FAF9F7] p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-white p-1">
                <button
                  type="button"
                  onClick={() => setPracticeTab("stroke")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    practiceTab === "stroke"
                      ? "bg-[#292524] text-white"
                      : "text-[#737373] hover:text-[#262626]"
                  }`}
                >
                  1. Vẽ chữ chấm nét (米字格)
                </button>
                <button
                  type="button"
                  onClick={() => setPracticeTab("sentences")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    practiceTab === "sentences"
                      ? "bg-[#292524] text-white"
                      : "text-[#737373] hover:text-[#262626]"
                  }`}
                >
                  2. Đặt 2 câu hoàn chỉnh
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowPracticeDrawer(false)}
                className="inline-flex items-center gap-1 rounded-lg p-1.5 text-xs text-[#737373] hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
              >
                <X className="h-4 w-4" />
                Thu gọn
              </button>
            </div>

            {practiceTab === "stroke" ? (
              <HanziStrokeCanvas
                hanzi={currentCard.hanzi}
                pinyin={currentCard.pinyin}
                meaningVi={currentCard.meaningVi}
              />
            ) : (
              <TwoSentenceBuilder
                targetWord={currentCard.hanzi}
                vocabId={currentCard.id}
                pinyin={currentCard.pinyin}
                meaningVi={currentCard.meaningVi}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
