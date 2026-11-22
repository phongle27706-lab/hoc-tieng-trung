"use client";

import React, { useEffect, useState } from "react";
import { Check, Plus, Save, Settings2, Trash2, Video } from "lucide-react";
import { ALL_STUDY_SESSIONS } from "@/data/roadmap";
import {
  addCustomVocab,
  createDefaultSRSData,
  getCustomVocab,
  getSessionCustomVideo,
  removeCustomVocab,
  saveSessionCustomVideo,
} from "@/lib/storage";
import type { HSKLevel, SubDifficulty, VocabItem } from "@/types";

const HSK_LEVELS: HSKLevel[] = [
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

const COMMON_RADICALS = [
  "亻 (Nhân đứng)",
  "口 (Khẩu)",
  "氵 (Chấm thủy)",
  "扌 (Tài gảy)",
  "心 / 忄 (Tâm)",
  "言 / 讠 (Ngôn)",
  "木 (Mộc)",
  "日 (Nhật)",
  "月 (Nguyệt)",
  "女 (Nữ)",
  "宀 (Miên)",
  "辶 (Sước)",
  "钅 (Kim)",
  "贝 (Bối)",
  "火 / 灬 (Hỏa)",
];

const PARTS_OF_SPEECH = [
  "Danh từ",
  "Động từ",
  "Tính từ",
  "Đại từ",
  "Phó từ",
  "Lượng từ",
  "Liên từ",
  "Giới từ",
  "Thành ngữ (成语)",
];

export default function AdminPage() {
  const firstSessionId = ALL_STUDY_SESSIONS[0]?.id ?? "s1";
  const [selectedSessionId, setSelectedSessionId] = useState(firstSessionId);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoSaved, setVideoSaved] = useState(false);

  // Quick Add Chinese Vocab Form
  const [hanzi, setHanzi] = useState("");
  const [pinyin, setPinyin] = useState("");
  const [radical, setRadical] = useState(COMMON_RADICALS[0]);
  const [strokeCount, setStrokeCount] = useState<number>(6);
  const [partOfSpeech, setPartOfSpeech] = useState("Danh từ");
  const [meaningVi, setMeaningVi] = useState("");
  const [level, setLevel] = useState<HSKLevel>("HSK1");
  const [subDifficulty, setSubDifficulty] = useState<SubDifficulty>("basic");
  const [topic, setTopic] = useState("Quản trị bổ sung");
  const [exampleZh, setExampleZh] = useState("");
  const [examplePinyin, setExamplePinyin] = useState("");
  const [exampleVi, setExampleVi] = useState("");
  const [vocabSaved, setVocabSaved] = useState(false);
  const [customList, setCustomList] = useState<VocabItem[]>([]);

  useEffect(() => {
    setVideoUrl(getSessionCustomVideo(selectedSessionId));
    setVideoSaved(false);
  }, [selectedSessionId]);

  useEffect(() => {
    setCustomList(getCustomVocab());
  }, []);

  const selectedSession = ALL_STUDY_SESSIONS.find(
    (s) => s.id === selectedSessionId
  );

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    saveSessionCustomVideo(selectedSessionId, videoUrl.trim());
    setVideoSaved(true);
    setTimeout(() => setVideoSaved(false), 2000);
  };

  const handleAddVocab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hanzi.trim() || !meaningVi.trim()) return;
    const nextList = addCustomVocab({
      id: `admin-zh-${Date.now()}`,
      hanzi: hanzi.trim(),
      pinyin: pinyin.trim() || "—",
      meaningVi: meaningVi.trim(),
      radical: radical.trim() || "一 (Nhất)",
      strokeCount: Math.max(1, Number(strokeCount) || 5),
      partOfSpeech,
      level,
      subDifficulty,
      topic: topic.trim() || "Quản trị bổ sung",
      exampleZh: exampleZh.trim() || `${hanzi.trim()}在日常交流中很常用。`,
      examplePinyin: examplePinyin.trim(),
      exampleVi: exampleVi.trim() || `Ví dụ sử dụng từ "${hanzi.trim()}" (${meaningVi.trim()}).`,
      isCustom: true,
      srsData: createDefaultSRSData(),
    });
    setCustomList(nextList);
    setHanzi("");
    setPinyin("");
    setMeaningVi("");
    setExampleZh("");
    setExamplePinyin("");
    setExampleVi("");
    setVocabSaved(true);
    setTimeout(() => setVocabSaved(false), 2000);
  };

  const handleDeleteVocab = (id: string) => {
    const nextList = removeCustomVocab(id);
    setCustomList(nextList);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
          内容管理 · Quản trị bài giảng YouTube (40 buổi) &amp; Kho từ vựng chữ Hán HSK 0 – HSK 9
        </p>
        <h1 className="mt-1 flex items-center gap-2 text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
          <Settings2 className="h-6 w-6 text-[#6B655E]" />
          Quản Trị Nội Dung HanziStudio
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 1. Attach YouTube Video per Session */}
        <form
          onSubmit={handleSaveVideo}
          className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-2 text-base font-bold text-[#262626]">
            <Video className="h-4 w-4 text-[#6B655E]" />
            Gắn link YouTube cho 40 buổi học
          </div>
          <p className="text-xs leading-relaxed text-[#737373]">
            Tùy chỉnh link bài giảng YouTube tiếng Trung cho từng buổi học trong 10 chặng (Mức 0 → HSK 9). Để trống nếu muốn dùng lại video mặc định đã kiểm chứng.
          </p>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#4A4540]">
              Chọn buổi học ({ALL_STUDY_SESSIONS.length} buổi)
            </label>
            <select
              value={selectedSessionId}
              onChange={(e) => setSelectedSessionId(e.target.value)}
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2.5 text-sm text-[#262626] focus:border-[#6B655E] focus:outline-none"
            >
              {ALL_STUDY_SESSIONS.map((s, idx) => (
                <option key={s.id} value={s.id}>
                  {String(idx + 1).padStart(2, "0")}. [{s.hskLevel} · {s.skillFocus.toUpperCase()}] {s.title}
                </option>
              ))}
            </select>
          </div>

          {selectedSession && (
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-xs text-[#57534E] space-y-1">
              <div className="font-semibold text-[#262626]">
                {selectedSession.titleZh} ({selectedSession.titlePinyin})
              </div>
              <div>
                Kênh đề xuất:{" "}
                <strong className="text-[#262626]">
                  {selectedSession.recommendedChannelName}
                </strong>
              </div>
              <div className="truncate text-[#737373]">
                Link mặc định: {selectedSession.youtubeUrl}
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#4A4540]">
              Link YouTube tùy chỉnh (Ghi đè)
            </label>
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2.5 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#292524] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540]"
          >
            {videoSaved ? (
              <Check className="h-4 w-4" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {videoSaved ? "Đã lưu link video buổi học!" : "Lưu link YouTube"}
          </button>
        </form>

        {/* 2. Quick Add Chinese Vocabulary */}
        <form
          onSubmit={handleAddVocab}
          className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-2 text-base font-bold text-[#262626]">
            <Plus className="h-4 w-4 text-[#6B655E]" />
            Thêm nhanh từ vựng chữ Hán (Hanzi)
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Chữ Hán (汉字) *
              </label>
              <input
                type="text"
                required
                value={hanzi}
                onChange={(e) => setHanzi(e.target.value)}
                placeholder="VD: 商务 / 提单 / 举一反三"
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Phiên âm Pinyin (拼音)
              </label>
              <input
                type="text"
                value={pinyin}
                onChange={(e) => setPinyin(e.target.value)}
                placeholder="VD: shāngwù / tídān"
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-[#4A4540]">
                Bộ thủ (部首)
              </label>
              <input
                type="text"
                list="common-radicals-list"
                value={radical}
                onChange={(e) => setRadical(e.target.value)}
                placeholder="VD: 亻 (Nhân đứng)"
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
              />
              <datalist id="common-radicals-list">
                {COMMON_RADICALS.map((r) => (
                  <option key={r} value={r} />
                ))}
              </datalist>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Số nét (笔画)
              </label>
              <input
                type="number"
                min={1}
                max={40}
                value={strokeCount}
                onChange={(e) => setStrokeCount(Number(e.target.value))}
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#4A4540]">
              Nghĩa tiếng Việt *
            </label>
            <input
              type="text"
              required
              value={meaningVi}
              onChange={(e) => setMeaningVi(e.target.value)}
              placeholder="VD: Thương mại, kinh doanh / Vận đơn đường biển"
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626] focus:border-[#6B655E] focus:bg-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Cấp độ HSK
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as HSKLevel)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626]"
              >
                {HSK_LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl === "HSK0" ? "Mức 0 (HSK0)" : lvl}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Độ khó con
              </label>
              <select
                value={subDifficulty}
                onChange={(e) =>
                  setSubDifficulty(e.target.value as SubDifficulty)
                }
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626]"
              >
                <option value="basic">Cơ bản (Basic)</option>
                <option value="advanced">Nâng cao (Advanced)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#4A4540]">
                Từ loại
              </label>
              <select
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(e.target.value)}
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-sm text-[#262626]"
              >
                {PARTS_OF_SPEECH.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Chủ đề (VD: Thương mại & XNK)"
              className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-xs text-[#262626]"
            />
            <input
              type="text"
              value={exampleZh}
              onChange={(e) => setExampleZh(e.target.value)}
              placeholder="Câu ví dụ chữ Hán (Tùy chọn)"
              className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-xs text-[#262626]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#292524] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540]"
          >
            {vocabSaved ? (
              <Check className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {vocabSaved ? "Đã thêm vào sổ từ vựng!" : "Thêm từ vựng chữ Hán"}
          </button>
        </form>
      </div>

      {/* Custom Vocab List */}
      {customList.length > 0 && (
        <section className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-6">
          <h2 className="text-sm font-bold text-[#262626]">
            Từ vựng chữ Hán đã thêm ({customList.length} từ)
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customList.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-[#262626]">
                      {item.hanzi}
                    </span>
                    <span className="text-xs font-medium text-[#6B655E]">
                      {item.pinyin}
                    </span>
                    <span className="rounded bg-[#292524] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#4A4540]">
                    {item.meaningVi}
                  </p>
                  <p className="text-[11px] text-[#737373]">
                    Bộ: {item.radical} · {item.strokeCount} nét · {item.partOfSpeech}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteVocab(item.id)}
                  className="cursor-pointer rounded-lg p-1.5 text-[#737373] hover:bg-[#FEF2F2] hover:text-[#B91C1C]"
                  title="Xóa từ này"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
