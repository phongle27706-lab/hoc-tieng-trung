"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  Check,
  ChevronDown,
  ChevronRight,
  PenTool,
  Volume2,
  X,
} from "lucide-react";
import { speakChinese } from "@/lib/speech";
import {
  addCustomVocab,
  createDefaultSRSData,
  toggleSavedVocabId,
} from "@/lib/storage";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";
import type { HSKLevel, VocabItem } from "@/types";

export interface MindMapWordItem {
  id: string;
  hanzi: string;
  pinyin: string;
  radical: string;
  strokeCount: number;
  partOfSpeech: string;
  meaningVi: string;
  level: HSKLevel;
  exampleZh: string;
  examplePinyin?: string;
  exampleVi: string;
}

export interface MindMapBranchItem {
  id: string;
  label?: string;
  labelVi?: string;
  labelZh?: string;
  words: MindMapWordItem[];
}

export interface MindMapThemeItem {
  id: string;
  titleVi: string;
  titleZh?: string;
  titlePinyin?: string;
  levelRange?: string;
  descriptionVi?: string;
  branches: MindMapBranchItem[];
}

export interface VocabMindMapProps {
  theme: MindMapThemeItem;
  savedIds: string[];
  onSavedChange: () => void;
  onPracticeWord?: (item: VocabItem) => void;
}

export function VocabMindMap({
  theme,
  savedIds,
  onSavedChange,
  onPracticeWord,
}: VocabMindMapProps) {
  const [openBranches, setOpenBranches] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(theme.branches.map((b) => [b.id, true]))
  );
  const [selectedWord, setSelectedWord] = useState<MindMapWordItem | null>(
    theme.branches[0]?.words[0] ?? null
  );
  const [showInlinePractice, setShowInlinePractice] = useState(false);
  const [practiceTab, setPracticeTab] = useState<"stroke" | "sentences">(
    "stroke"
  );

  const toggleBranch = (branchId: string) => {
    setOpenBranches((prev) => ({ ...prev, [branchId]: !prev[branchId] }));
  };

  const toVocabItem = (w: MindMapWordItem): VocabItem => ({
    id: w.id,
    hanzi: w.hanzi,
    pinyin: w.pinyin,
    meaningVi: w.meaningVi,
    radical: w.radical || "一 (Bộ thủ)",
    strokeCount: w.strokeCount || w.hanzi.length * 6,
    partOfSpeech: w.partOfSpeech || "Từ vựng",
    level: w.level,
    topic: theme.titleVi,
    exampleZh: w.exampleZh,
    examplePinyin: w.examplePinyin ?? "",
    exampleVi: w.exampleVi,
    isCustom: true,
    srsData: createDefaultSRSData(),
  });

  const handleSaveWord = (w: MindMapWordItem) => {
    const isSaved = savedIds.includes(w.id);
    toggleSavedVocabId(w.id);
    if (!isSaved) {
      addCustomVocab(toVocabItem(w));
    }
    onSavedChange();
  };

  const handlePracticeClick = (w: MindMapWordItem) => {
    if (onPracticeWord) {
      onPracticeWord(toVocabItem(w));
    } else {
      setShowInlinePractice((v) => !v);
    }
  };

  return (
    <div className="relative rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      {/* Mind Map Tree Layout */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* Root Theme Node */}
        <div className="shrink-0 lg:w-60">
          <div className="rounded-xl border border-[#292524] bg-[#292524] px-5 py-4 text-white shadow-sm">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-300">
              Chủ đề · {theme.levelRange ?? "HSK 0 – HSK 9"}
            </span>
            {theme.titleZh && (
              <h3 className="mt-1 text-xl font-bold leading-snug">
                {theme.titleZh}
              </h3>
            )}
            {theme.titlePinyin && (
              <p className="font-mono text-xs text-stone-300">
                [{theme.titlePinyin}]
              </p>
            )}
            <p className="mt-1 text-sm font-semibold text-stone-100">
              {theme.titleVi}
            </p>
          </div>
          <p className="mt-2.5 text-xs leading-relaxed text-[#737373]">
            {theme.descriptionVi ||
              "Bấm vào từng nhánh để đóng/mở. Bấm vào từ vựng để nghe phát âm, tra bộ thủ, vẽ chữ chấm nét (米字格) và đặt 2 câu hoàn chỉnh."}
          </p>
        </div>

        {/* Curved Connector + Branches */}
        <div className="relative flex-1 space-y-4">
          {theme.branches.map((branch) => {
            const isOpen = openBranches[branch.id] ?? true;
            const branchTitle =
              branch.labelVi ?? branch.label ?? "Nhánh từ vựng";
            return (
              <div key={branch.id} className="relative pl-6 sm:pl-8">
                {/* Delicate SVG Curved Branch Connector */}
                <svg
                  className="pointer-events-none absolute left-0 top-0 h-full w-6 overflow-visible text-[#D6D3CE] sm:w-8"
                  aria-hidden="true"
                >
                  <path
                    d="M 2 0 L 2 22 Q 2 28 10 28 L 24 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Branch Header Pill */}
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={TACTILE_SPRING}
                  onClick={() => toggleBranch(branch.id)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2 text-sm font-medium text-[#262626] transition-colors hover:border-[#6B655E] cursor-pointer"
                >
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-[#6B655E]" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-[#6B655E]" />
                  )}
                  <span>{branchTitle}</span>
                  {branch.labelZh && (
                    <span className="text-xs font-semibold text-[#6B655E]">
                      ({branch.labelZh})
                    </span>
                  )}
                  <span className="ml-1 rounded-full bg-[#E5E5E0]/80 px-2 py-0.5 text-[11px] text-[#57534E]">
                    {branch.words.length}
                  </span>
                </motion.button>

                {/* Expandable Word Leaves */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-3 flex flex-wrap gap-2.5 border-l border-dashed border-[#E5E5E0] pl-4">
                        {branch.words.map((w) => {
                          const isSaved = savedIds.includes(w.id);
                          const isSelected = selectedWord?.id === w.id;
                          return (
                            <motion.button
                              key={w.id}
                              type="button"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              transition={TACTILE_SPRING}
                              onClick={() => {
                                setSelectedWord(w);
                                speakChinese(w.hanzi, 0.92);
                              }}
                              className={`group inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "border-[#292524] bg-[#FAF9F7] shadow-sm ring-1 ring-[#292524]/15"
                                  : "border-[#E5E5E0] bg-white hover:border-[#6B655E] hover:shadow-xs"
                              }`}
                            >
                              <span className="text-base font-bold text-[#262626]">
                                {w.hanzi}
                              </span>
                              <span className="font-mono text-xs text-[#6B655E]">
                                [{w.pinyin}]
                              </span>
                              <span className="text-xs text-[#737373]">
                                · {w.meaningVi}
                              </span>
                              {isSaved && (
                                <Bookmark className="h-3.5 w-3.5 fill-[#6B655E] text-[#6B655E]" />
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Word Detail Card + Writing & 2-Sentence Practice */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div
            key={selectedWord.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={TACTILE_SPRING}
            className="mt-6 rounded-xl border border-[#D6D3CE] bg-[#FAF9F7] p-4 sm:p-5 space-y-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h4 className="text-2xl font-bold text-[#262626]">
                    {selectedWord.hanzi}
                  </h4>
                  <span className="font-mono text-sm font-semibold text-[#6B655E]">
                    [{selectedWord.pinyin}]
                  </span>
                  <span className="rounded-md bg-[#292524] px-2 py-0.5 text-[11px] font-bold text-white">
                    {selectedWord.level}
                  </span>
                  <span className="rounded-md bg-[#E5E5E0]/70 px-2 py-0.5 text-[11px] font-medium text-[#57534E]">
                    {selectedWord.partOfSpeech}
                  </span>
                  <span className="rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5 text-[11px] font-medium text-[#262626]">
                    Bộ thủ: {selectedWord.radical} · {selectedWord.strokeCount} nét
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-[#4A4540]">
                  Nghĩa: {selectedWord.meaningVi}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TACTILE_SPRING}
                  onClick={() => speakChinese(selectedWord.hanzi, 0.92)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs font-medium text-[#262626] hover:border-[#6B655E] cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5 text-[#6B655E]" />
                  Nghe
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TACTILE_SPRING}
                  onClick={() => handlePracticeClick(selectedWord)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#6B655E] bg-white px-3 py-1.5 text-xs font-semibold text-[#262626] hover:bg-[#F2F2F0] cursor-pointer"
                >
                  <PenTool className="h-3.5 w-3.5 text-[#6B655E]" />
                  Luyện viết chấm nét & Đặt 2 câu
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TACTILE_SPRING}
                  onClick={() => handleSaveWord(selectedWord)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    savedIds.includes(selectedWord.id)
                      ? "border border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                      : "bg-[#292524] text-white hover:bg-[#4A4540]"
                  }`}
                >
                  {savedIds.includes(selectedWord.id) ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Đã lưu
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-3.5 w-3.5" /> + Lưu sổ từ
                    </>
                  )}
                </motion.button>

                <button
                  type="button"
                  onClick={() => setSelectedWord(null)}
                  className="rounded-lg p-1.5 text-[#737373] hover:bg-[#E5E5E0]/60 hover:text-[#262626] cursor-pointer"
                  aria-label="Đóng"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {selectedWord.exampleZh && (
              <div className="rounded-lg border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-medium text-[#262626]">
                    <InteractiveChineseText
                      text={selectedWord.exampleZh}
                      pinyin={selectedWord.examplePinyin}
                      showPinyin={Boolean(selectedWord.examplePinyin)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => speakChinese(selectedWord.exampleZh, 0.92)}
                    className="shrink-0 rounded-lg p-1 text-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-0.5 text-xs text-[#737373]">
                  {selectedWord.exampleVi}
                </p>
              </div>
            )}

            {/* Inline Stroke Canvas & 2-Sentence Builder inside MindMap if toggled */}
            {showInlinePractice && (
              <div className="space-y-3 border-t border-[#E5E5E0] pt-4">
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
                    onClick={() => setShowInlinePractice(false)}
                    className="text-xs font-medium text-[#737373] hover:text-[#262626] cursor-pointer"
                  >
                    Ẩn khung luyện viết
                  </button>
                </div>

                {practiceTab === "stroke" ? (
                  <HanziStrokeCanvas
                    hanzi={selectedWord.hanzi}
                    pinyin={selectedWord.pinyin}
                    meaningVi={selectedWord.meaningVi}
                  />
                ) : (
                  <TwoSentenceBuilder
                    targetWord={selectedWord.hanzi}
                    vocabId={selectedWord.id}
                    pinyin={selectedWord.pinyin}
                    meaningVi={selectedWord.meaningVi}
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
