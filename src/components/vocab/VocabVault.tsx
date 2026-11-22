"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  Check,
  PenTool,
  Plus,
  Search,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import type { HSKLevel, VocabItem } from "@/types";
import { speakChinese } from "@/lib/speech";
import { getVocabSentencesMap, toggleSavedVocabId } from "@/lib/storage";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";

export interface VocabVaultProps {
  allItems: VocabItem[];
  savedIds: string[];
  onSavedChange: () => void;
  onOpenAddModal: () => void;
  onReviewSaved: (items: VocabItem[]) => void;
  onPracticeWord?: (item: VocabItem) => void;
}

function normalizeQuery(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

const HSK_LEVELS: (HSKLevel | "ALL")[] = [
  "ALL",
  "HSK0",
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

export function VocabVault({
  allItems,
  savedIds,
  onSavedChange,
  onOpenAddModal,
  onReviewSaved,
  onPracticeWord,
}: VocabVaultProps) {
  const [scope, setScope] = useState<"all" | "saved">("all");
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<HSKLevel | "ALL">("ALL");
  const [posFilter, setPosFilter] = useState<string>("ALL");
  const [activePracticeItem, setActivePracticeItem] =
    useState<VocabItem | null>(null);
  const [practiceTab, setPracticeTab] = useState<"stroke" | "sentences">(
    "stroke"
  );

  const savedItems = useMemo(
    () => allItems.filter((item) => item.isCustom || savedIds.includes(item.id)),
    [allItems, savedIds]
  );

  const posOptions = useMemo(() => {
    const set = new Set<string>();
    allItems.forEach((item) => {
      if (item.partOfSpeech) set.add(item.partOfSpeech);
    });
    return ["ALL", ...Array.from(set)];
  }, [allItems]);

  const filtered = useMemo(() => {
    const base = scope === "saved" ? savedItems : allItems;
    const q = normalizeQuery(query);
    return base.filter((item) => {
      if (levelFilter !== "ALL" && item.level !== levelFilter) return false;
      if (posFilter !== "ALL" && item.partOfSpeech !== posFilter) return false;
      if (!q) return true;
      return (
        item.hanzi.toLowerCase().includes(q) ||
        normalizeQuery(item.pinyin).includes(q) ||
        normalizeQuery(item.meaningVi).includes(q) ||
        normalizeQuery(item.radical).includes(q) ||
        normalizeQuery(item.topic).includes(q)
      );
    });
  }, [allItems, savedItems, scope, query, levelFilter, posFilter]);

  const sentencesMap = getVocabSentencesMap();

  const handleTriggerPractice = (item: VocabItem) => {
    if (onPracticeWord) {
      onPracticeWord(item);
    } else {
      setActivePracticeItem((prev) => (prev?.id === item.id ? null : item));
    }
  };

  return (
    <div className="space-y-5">
      {/* Scope Switcher + Actions */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="inline-flex self-start rounded-xl border border-[#E5E5E0] bg-white p-1">
          {(
            [
              { id: "all", label: "Tất cả từ điển chữ Hán", count: allItems.length },
              {
                id: "saved",
                label: "Từ tôi đã lưu khi làm bài",
                count: savedItems.length,
              },
            ] as const
          ).map((tab) => {
            const active = scope === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setScope(tab.id)}
                className={`relative rounded-lg px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm cursor-pointer ${
                  active ? "text-white" : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="vault-scope-pill"
                    transition={TACTILE_SPRING}
                    className="absolute inset-0 rounded-lg bg-[#292524]"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {tab.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-[#F2F2F0] text-[#57534E]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {savedItems.length > 0 && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={TACTILE_SPRING}
              onClick={() => onReviewSaved(savedItems)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#6B655E] bg-[#FAF9F7] px-3.5 py-2 text-xs font-medium text-[#262626] hover:bg-[#F2F2F0] sm:text-sm cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-[#6B655E]" />
              Ôn tập ngay ({savedItems.length})
            </motion.button>
          )}
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={TACTILE_SPRING}
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-medium text-white hover:bg-[#4A4540] sm:text-sm cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Tự thêm từ mới
          </motion.button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#E5E5E0] bg-white p-3.5 md:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm chữ Hán, Pinyin (gõ không dấu vẫn ra), Bộ thủ hoặc nghĩa tiếng Việt..."
            className="w-full rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] py-2 pl-9 pr-3 text-sm text-[#262626] placeholder:text-[#737373] focus:border-[#6B655E] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={levelFilter}
            onChange={(e) =>
              setLevelFilter(e.target.value as HSKLevel | "ALL")
            }
            className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-2 text-xs font-medium text-[#262626] focus:border-[#6B655E] focus:outline-none"
          >
            {HSK_LEVELS.map((lv) => (
              <option key={lv} value={lv}>
                {lv === "ALL"
                  ? "Mọi cấp độ (HSK 0–9)"
                  : lv === "HSK0"
                  ? "Mức 0 (Nhập môn)"
                  : lv}
              </option>
            ))}
          </select>

          <select
            value={posFilter}
            onChange={(e) => setPosFilter(e.target.value)}
            className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-2 text-xs font-medium text-[#262626] focus:border-[#6B655E] focus:outline-none"
          >
            {posOptions.map((pos) => (
              <option key={pos} value={pos}>
                {pos === "ALL" ? "Mọi từ loại" : pos}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inline Practice Panel when a word is chosen */}
      <AnimatePresence>
        {activePracticeItem && (
          <motion.div
            key={activePracticeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="space-y-4 rounded-2xl border border-[#292524] bg-[#FAF9F7] p-4 sm:p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-[#262626]">
                  Đang luyện: {activePracticeItem.hanzi} [{activePracticeItem.pinyin}]
                </span>
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
              </div>

              <button
                type="button"
                onClick={() => setActivePracticeItem(null)}
                className="inline-flex items-center gap-1 rounded-lg p-1.5 text-xs text-[#737373] hover:bg-[#E5E5E0] hover:text-[#262626] cursor-pointer"
              >
                <X className="h-4 w-4" />
                Đóng bảng luyện
              </button>
            </div>

            {practiceTab === "stroke" ? (
              <HanziStrokeCanvas
                hanzi={activePracticeItem.hanzi}
                pinyin={activePracticeItem.pinyin}
                meaningVi={activePracticeItem.meaningVi}
              />
            ) : (
              <TwoSentenceBuilder
                targetWord={activePracticeItem.hanzi}
                vocabId={activePracticeItem.id}
                pinyin={activePracticeItem.pinyin}
                meaningVi={activePracticeItem.meaningVi}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results List */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#D6D3CE] bg-white p-10 text-center">
          <p className="text-sm font-medium text-[#262626]">
            {scope === "saved"
              ? "Bạn chưa lưu từ chữ Hán nào. Hãy bấm vào chữ Hán khi đọc bài hoặc lưu từ Sơ đồ tư duy Mind Map!"
              : "Không tìm thấy từ vựng chữ Hán phù hợp bộ lọc."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filtered.map((item) => {
            const isSaved = item.isCustom || savedIds.includes(item.id);
            const hasSentences = Boolean(
              sentencesMap[item.id] || sentencesMap[`word_${item.hanzi}`]
            );
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                transition={TACTILE_SPRING}
                className="rounded-xl border border-[#E5E5E0] bg-white p-4 transition-shadow hover:border-[#D6D3CE] hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-xl font-bold text-[#262626]">
                        {item.hanzi}
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#6B655E]">
                        [{item.pinyin}]
                      </span>
                      <span className="rounded-md bg-[#292524] px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.level}
                      </span>
                      {hasSentences && (
                        <span className="rounded-md border border-[#BBF7D0] bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
                          Đã đặt 2 câu
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-[#4A4540]">
                      {item.meaningVi}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#737373]">
                      {item.partOfSpeech} · Bộ thủ: {item.radical} ·{" "}
                      {item.strokeCount} nét · {item.topic}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.92 }}
                      onClick={() => handleTriggerPractice(item)}
                      title="Luyện viết chấm nét (米字格) & Đặt 2 câu hoàn chỉnh"
                      className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1.5 text-xs font-semibold text-[#4A4540] hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
                    >
                      <PenTool className="h-3.5 w-3.5 text-[#6B655E]" />
                      Viết chữ
                    </motion.button>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.92 }}
                      onClick={() => speakChinese(item.hanzi, 0.92)}
                      className="rounded-lg border border-[#E5E5E0] p-1.5 text-[#6B655E] hover:bg-[#FAF9F7] cursor-pointer"
                      aria-label="Phát âm"
                    >
                      <Volume2 className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.92 }}
                      onClick={() => {
                        toggleSavedVocabId(item.id);
                        onSavedChange();
                      }}
                      className={`rounded-lg border p-1.5 transition-colors cursor-pointer ${
                        isSaved
                          ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                          : "border-[#E5E5E0] text-[#737373] hover:text-[#262626]"
                      }`}
                      aria-label={isSaved ? "Đã lưu" : "Lưu từ"}
                    >
                      {isSaved ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {item.exampleZh && (
                  <div className="mt-3 rounded-lg border border-[#E5E5E0]/70 bg-[#FAF9F7] px-3 py-2 text-xs">
                    <div className="font-medium text-[#262626]">
                      <InteractiveChineseText
                        text={item.exampleZh}
                        pinyin={item.examplePinyin}
                        showPinyin={Boolean(item.examplePinyin)}
                      />
                    </div>
                    {item.exampleVi && (
                      <p className="mt-0.5 text-[#737373]">{item.exampleVi}</p>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
