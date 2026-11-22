"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  addCustomVocab,
  createDefaultSRSData,
  getUserProgress,
  toggleSavedVocabId,
} from "@/lib/storage";
import type { HSKLevel, VocabItem } from "@/types";

export interface AddVocabModalProps {
  open: boolean;
  onClose: () => void;
  onAdded: () => void;
}

const LEVELS: HSKLevel[] = [
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

const PART_OF_SPEECH_OPTIONS = [
  "Danh từ",
  "Động từ",
  "Tính từ",
  "Phó từ",
  "Đại từ",
  "Lượng từ",
  "Liên từ",
  "Thành ngữ (成语)",
  "Cụm từ thương mại",
];

const TOPIC_OPTIONS = [
  "Chào hỏi & Giao tiếp",
  "Gia đình & Tình cảm",
  "Ẩm thực & Trà sữa",
  "Mua sắm & Taobao/1688",
  "Du lịch & Sân bay",
  "Công sở & Văn phòng",
  "Thương mại & Xuất nhập khẩu",
  "Ngân hàng & Thanh toán WeChat/Alipay",
  "Y tế & Sức khỏe",
  "Công nghệ & AI",
  "Văn hóa & Lễ hội",
  "Giáo dục & Du học Trung Quốc",
  "Bất động sản & Đời sống",
  "Logistics & Hải quan",
  "Thành ngữ & Học thuật HSK 7-9",
  "Sổ tay tra cứu",
];

const COMMON_RADICALS = [
  "亻 (Nhân đứng)",
  "口 (Khẩu)",
  "氵 (Chấm thủy)",
  "女 (Nữ)",
  "心 / 忄 (Tâm)",
  "扌 (Tài gãy / Thủ)",
  "木 (Mộc)",
  "日 (Nhật)",
  "月 (Nguyệt)",
  "讠 (Ngôn)",
  "贝 (Bối)",
  "辶 (Sước)",
  "钅 (Kim)",
  "艹 (Thảo đầu)",
  "宀 (Miên)",
  "一 (Nhất)",
];

export function AddVocabModal({ open, onClose, onAdded }: AddVocabModalProps) {
  const [hanzi, setHanzi] = useState("");
  const [pinyin, setPinyin] = useState("");
  const [radical, setRadical] = useState(COMMON_RADICALS[0]);
  const [strokeCount, setStrokeCount] = useState<number>(6);
  const [partOfSpeech, setPartOfSpeech] = useState(PART_OF_SPEECH_OPTIONS[0]);
  const [meaningVi, setMeaningVi] = useState("");
  const [level, setLevel] = useState<HSKLevel>("HSK1");
  const [topic, setTopic] = useState<string>(TOPIC_OPTIONS[0]);
  const [exampleZh, setExampleZh] = useState("");
  const [examplePinyin, setExamplePinyin] = useState("");
  const [exampleVi, setExampleVi] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedHanzi = hanzi.trim();
    const trimmedMeaning = meaningVi.trim();
    if (!trimmedHanzi || !trimmedMeaning) return;

    const id = `custom-${trimmedHanzi}-${Date.now()}`;
    const newItem: VocabItem = {
      id,
      hanzi: trimmedHanzi,
      pinyin: pinyin.trim() || "hàn zì",
      meaningVi: trimmedMeaning,
      radical: radical.trim() || "一 (Nhất)",
      strokeCount: Math.max(1, Number(strokeCount) || trimmedHanzi.length * 6),
      partOfSpeech,
      level,
      topic,
      exampleZh: exampleZh.trim(),
      examplePinyin: examplePinyin.trim(),
      exampleVi: exampleVi.trim(),
      isCustom: true,
      srsData: createDefaultSRSData(),
    };

    addCustomVocab(newItem);
    const progress = getUserProgress();
    if (!progress.savedVocabIds.includes(id)) {
      toggleSavedVocabId(id);
    }

    setHanzi("");
    setPinyin("");
    setMeaningVi("");
    setExampleZh("");
    setExamplePinyin("");
    setExampleVi("");

    onAdded();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292524]/40 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
          <h3 className="text-lg font-bold text-[#262626]">
            Thêm từ vựng chữ Hán mới vào Sổ tay
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="rounded-lg p-1.5 text-[#737373] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Chữ Hán (汉字) *
              </label>
              <input
                type="text"
                required
                value={hanzi}
                onChange={(e) => setHanzi(e.target.value)}
                placeholder="VD: 合作, 订单, 学习..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm font-bold text-[#262626] placeholder:font-normal placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Phiên âm Pinyin *
              </label>
              <input
                type="text"
                required
                value={pinyin}
                onChange={(e) => setPinyin(e.target.value)}
                placeholder="VD: hé zuò, dìng dān..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 font-mono text-sm text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Nghĩa tiếng Việt *
              </label>
              <input
                type="text"
                required
                value={meaningVi}
                onChange={(e) => setMeaningVi(e.target.value)}
                placeholder="VD: hợp tác, đơn đặt hàng..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Từ loại
              </label>
              <select
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(e.target.value)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
              >
                {PART_OF_SPEECH_OPTIONS.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Bộ thủ (部首)
              </label>
              <input
                type="text"
                list="common-radicals-list"
                value={radical}
                onChange={(e) => setRadical(e.target.value)}
                placeholder="VD: 亻 (Nhân đứng)"
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
              />
              <datalist id="common-radicals-list">
                {COMMON_RADICALS.map((r) => (
                  <option key={r} value={r} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Tổng số nét (笔画)
              </label>
              <input
                type="number"
                min={1}
                max={64}
                value={strokeCount}
                onChange={(e) => setStrokeCount(Number(e.target.value) || 1)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Cấp độ HSK
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as HSKLevel)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
              >
                {LEVELS.map((lv) => (
                  <option key={lv} value={lv}>
                    {lv === "HSK0" ? "Mức 0 (Nhập môn)" : lv}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Chủ đề
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
              >
                {TOPIC_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#737373]">
              Câu ví dụ chữ Hán
            </label>
            <input
              type="text"
              value={exampleZh}
              onChange={(e) => setExampleZh(e.target.value)}
              placeholder="VD: 我们希望能与贵公司长期合作。"
              className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Pinyin câu ví dụ
              </label>
              <input
                type="text"
                value={examplePinyin}
                onChange={(e) => setExamplePinyin(e.target.value)}
                placeholder="VD: Wǒmen xīwàng..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 font-mono text-sm text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#737373]">
                Dịch câu ví dụ (tiếng Việt)
              </label>
              <input
                type="text"
                value={exampleVi}
                onChange={(e) => setExampleVi(e.target.value)}
                placeholder="VD: Chúng tôi hy vọng hợp tác lâu dài..."
                className="w-full rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-sm text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={onClose}>
              Hủy
            </Button>
            <Button type="submit">
              <Plus className="h-4 w-4" />
              Lưu từ vựng chữ Hán
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
