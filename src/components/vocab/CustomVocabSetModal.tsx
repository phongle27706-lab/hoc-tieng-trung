"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Check,
  Coffee,
  Factory,
  Flag,
  Heart,
  Laptop,
  PenLine,
  Plane,
  Rocket,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import type { HSKLevel, VocabItem } from "@/types";
import {
  addCustomVocabSet,
  createDefaultSRSData,
  type CustomVocabSet,
} from "@/lib/storage";

export const CUSTOM_SET_ICONS = [
  { key: "book", label: "Sách", Icon: BookOpen },
  { key: "factory", label: "Xưởng", Icon: Factory },
  { key: "coffee", label: "Đời sống", Icon: Coffee },
  { key: "plane", label: "Du lịch", Icon: Plane },
  { key: "briefcase", label: "Công việc", Icon: Briefcase },
  { key: "star", label: "Quan trọng", Icon: Star },
  { key: "rocket", label: "Tăng tốc", Icon: Rocket },
  { key: "laptop", label: "Công nghệ", Icon: Laptop },
  { key: "bag", label: "Mua sắm", Icon: ShoppingBag },
  { key: "heart", label: "Yêu thích", Icon: Heart },
  { key: "pen", label: "Ghi chú", Icon: PenLine },
  { key: "flag", label: "Mục tiêu", Icon: Flag },
] as const;

export function getCustomSetIconComponent(iconKey: string) {
  const found = CUSTOM_SET_ICONS.find((item) => item.key === iconKey);
  return found ? found.Icon : BookOpen;
}

const HSK_OPTIONS: { value: HSKLevel; label: string }[] = [
  { value: "HSK0", label: "HSK 0" },
  { value: "HSK1", label: "HSK 1" },
  { value: "HSK2", label: "HSK 2" },
  { value: "HSK3", label: "HSK 3" },
  { value: "HSK4", label: "HSK 4" },
  { value: "HSK5", label: "HSK 5" },
  { value: "HSK6", label: "HSK 6" },
  { value: "HSK7", label: "HSK 7–9" },
];

interface ParsedRow {
  hanzi: string;
  pinyin: string;
  partOfSpeech: string;
  meaningVi: string;
}

function parseBulkLines(raw: string): ParsedRow[] {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const results: ParsedRow[] = [];

  for (const line of lines) {
    let parts: string[];
    if (line.includes("\t")) {
      parts = line.split("\t");
    } else if (line.includes("|")) {
      parts = line.split("|");
    } else if (line.includes(",")) {
      parts = line.split(",");
    } else {
      continue;
    }

    const cleaned = parts.map((p) => p.trim()).filter((p) => p.length > 0);
    if (cleaned.length < 2) continue;

    if (cleaned.length === 2) {
      results.push({
        hanzi: cleaned[0],
        pinyin: "",
        partOfSpeech: "Từ vựng",
        meaningVi: cleaned[1],
      });
    } else if (cleaned.length === 3) {
      results.push({
        hanzi: cleaned[0],
        pinyin: cleaned[1],
        partOfSpeech: "Từ vựng",
        meaningVi: cleaned[2],
      });
    } else {
      results.push({
        hanzi: cleaned[0],
        pinyin: cleaned[1],
        partOfSpeech: cleaned[2],
        meaningVi: cleaned.slice(3).join(", "),
      });
    }
  }

  return results;
}

interface CustomVocabSetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (created: CustomVocabSet) => void;
}

export function CustomVocabSetModal({
  isOpen,
  onClose,
  onCreated,
}: CustomVocabSetModalProps) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState<string>("book");
  const [level, setLevel] = useState<HSKLevel>("HSK1");
  const [bulkText, setBulkText] = useState("");

  const parsedRows = useMemo(() => parseBulkLines(bulkText), [bulkText]);

  const canSubmit = name.trim().length > 0 && parsedRows.length > 0;

  const handleCreate = () => {
    if (!canSubmit) return;
    const now = Date.now();
    const setId = `cset-${now}`;

    const items: VocabItem[] = parsedRows.map((row, idx) => ({
      id: `${setId}-w${idx + 1}`,
      hanzi: row.hanzi,
      pinyin: row.pinyin || "—",
      meaningVi: row.meaningVi,
      partOfSpeech: row.partOfSpeech || "Từ vựng",
      level,
      radical: "—",
      strokeCount: 0,
      topic: name.trim(),
      isCustom: true,
      exampleZh: `${row.hanzi}。`,
      examplePinyin: row.pinyin || row.hanzi,
      exampleVi: row.meaningVi,
      srsData: createDefaultSRSData(),
    }));

    const newSet: CustomVocabSet = {
      id: setId,
      name: name.trim(),
      icon,
      level,
      createdAt: new Date(now).toISOString(),
      items,
    };

    addCustomVocabSet(newSet);
    onCreated?.(newSet);

    setName("");
    setIcon("book");
    setLevel("HSK1");
    setBulkText("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#E5E5E0] bg-[#FFFFFF] text-[#262626] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E5E5E0] bg-[#F2F2F0] px-5 py-4">
              <div>
                <h2 className="text-base font-bold text-[#262626]">
                  Tạo bộ từ cá nhân &amp; Dán hàng loạt
                </h2>
                <p className="text-xs text-[#6B655E]">
                  Tạo bộ từ vựng riêng để học Flashcard 3D SRS, luyện viết và đặt câu
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-1.5 text-[#6B655E] transition hover:text-[#262626]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {/* Name */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#6B655E]">
                  Tên bộ từ
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Ví dụ: "Từ vựng xưởng giày tuần 1"'
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/50 px-3.5 py-2.5 text-sm text-[#262626] placeholder:text-[#6B655E]/60 focus:border-[#262626] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              {/* Icon & HSK Level */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#6B655E]">
                    Chọn biểu tượng
                  </label>
                  <div className="grid grid-cols-6 gap-1.5">
                    {CUSTOM_SET_ICONS.map(({ key, label, Icon }) => {
                      const active = icon === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          title={label}
                          onClick={() => setIcon(key)}
                          className={`flex h-9 items-center justify-center rounded-lg border transition ${
                            active
                              ? "border-[#262626] bg-[#262626] text-[#FFFFFF]"
                              : "border-[#E5E5E0] bg-[#F2F2F0]/60 text-[#6B655E] hover:border-[#6B655E] hover:text-[#262626]"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#6B655E]">
                    Cấp độ HSK
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {HSK_OPTIONS.map((opt) => {
                      const active = level === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setLevel(opt.value)}
                          className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition ${
                            active
                              ? "border-[#262626] bg-[#262626] text-[#FFFFFF]"
                              : "border-[#E5E5E0] bg-[#F2F2F0]/60 text-[#6B655E] hover:border-[#6B655E] hover:text-[#262626]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bulk Paste Textarea */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B655E]">
                  Dán danh sách từ vựng hàng loạt
                </label>
                <p className="mb-2 text-xs leading-relaxed text-[#6B655E]">
                  Mỗi dòng một từ, các cột cách nhau bằng{" "}
                  <code className="rounded bg-[#F2F2F0] px-1 py-0.5 text-[#262626]">|</code>,{" "}
                  <code className="rounded bg-[#F2F2F0] px-1 py-0.5 text-[#262626]">Tab</code>{" "}
                  (copy từ Excel) hoặc dấu{" "}
                  <code className="rounded bg-[#F2F2F0] px-1 py-0.5 text-[#262626]">,</code>:{" "}
                  <span className="font-medium text-[#262626]">
                    chữ Hán | nghĩa · chữ Hán | pinyin | nghĩa · chữ Hán | pinyin | từ loại | nghĩa
                  </span>
                </p>
                <textarea
                  rows={5}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder={`鞋底 | xiédǐ | Danh từ | Đế giày\n胶水 | jiāoshuǐ | Keo dán\n质检 | Kiểm tra chất lượng`}
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/50 p-3 font-mono text-xs text-[#262626] placeholder:text-[#6B655E]/60 focus:border-[#262626] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              {/* Live Preview */}
              <div className="rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/40 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#262626]">
                    Xem trước (Live Preview)
                  </span>
                  <span className="rounded-full border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-0.5 text-xs font-medium text-[#6B655E]">
                    {parsedRows.length} từ hợp lệ
                  </span>
                </div>

                {parsedRows.length === 0 ? (
                  <p className="py-3 text-center text-xs text-[#6B655E]">
                    Chưa có dòng hợp lệ. Hãy dán ít nhất 1 dòng có 2 cột trở lên.
                  </p>
                ) : (
                  <div className="max-h-40 overflow-y-auto rounded-lg border border-[#E5E5E0] bg-[#FFFFFF]">
                    <table className="w-full text-left text-xs">
                      <thead className="sticky top-0 border-b border-[#E5E5E0] bg-[#F2F2F0] text-[#6B655E]">
                        <tr>
                          <th className="px-2.5 py-1.5 font-medium">Chữ Hán</th>
                          <th className="px-2.5 py-1.5 font-medium">Pinyin</th>
                          <th className="px-2.5 py-1.5 font-medium">Từ loại</th>
                          <th className="px-2.5 py-1.5 font-medium">Nghĩa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E5E0]">
                        {parsedRows.map((row, idx) => (
                          <tr key={idx} className="text-[#262626]">
                            <td className="px-2.5 py-1.5 font-medium">{row.hanzi}</td>
                            <td className="px-2.5 py-1.5 text-[#6B655E]">
                              {row.pinyin || "—"}
                            </td>
                            <td className="px-2.5 py-1.5 text-[#6B655E]">
                              {row.partOfSpeech}
                            </td>
                            <td className="px-2.5 py-1.5">{row.meaningVi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2.5 border-t border-[#E5E5E0] bg-[#F2F2F0] px-5 py-3.5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-[#E5E5E0] bg-[#FFFFFF] px-4 py-2 text-xs font-medium text-[#6B655E] transition hover:text-[#262626]"
              >
                Hủy
              </button>
              <button
                type="button"
                disabled={!canSubmit}
                onClick={handleCreate}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#262626] px-4 py-2 text-xs font-semibold text-[#FFFFFF] transition hover:bg-[#3a3a3a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Check className="h-3.5 w-3.5" />
                Tạo bộ từ ngay ({parsedRows.length})
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
