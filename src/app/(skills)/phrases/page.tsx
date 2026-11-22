"use client";

import React, { useMemo, useState } from "react";
import {
  Languages,
  MessageSquareText,
  Search,
  Volume2,
  X,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import * as phrasesModule from "@/data/phrases";
import { getResourcesByCategory } from "@/data/resources";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import type { HSKLevel } from "@/types";

type PlaybackRate = 0.85 | 1.0;

interface NormalizedPhrase {
  id: string;
  zh: string;
  pinyin: string;
  vi: string;
  contextVi: string;
  level: HSKLevel;
  themeId: string;
  themeTitleVi: string;
  themeTitleZh: string;
}

interface NormalizedPhraseTheme {
  id: string;
  titleVi: string;
  titleZh: string;
  descriptionVi: string;
  phrases: NormalizedPhrase[];
}

const HSK_LEVELS: Array<"ALL" | HSKLevel> = [
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

function getLevelBadgeClass(level: HSKLevel): string {
  switch (level) {
    case "HSK0":
    case "HSK1":
      return "bg-[#F2F2F0] text-[#4A4540] border-[#E5E5E0]";
    case "HSK2":
    case "HSK3":
      return "bg-[#EAEAE6] text-[#292524] border-[#DCDCD6]";
    case "HSK4":
    case "HSK5":
      return "bg-[#6B655E] text-white border-[#6B655E]";
    default:
      return "bg-[#292524] text-white border-[#292524]";
  }
}

export default function PhrasesPage() {
  const [selectedThemeId, setSelectedThemeId] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<HSKLevel | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [playbackRate, setPlaybackRate] = useState<PlaybackRate>(1.0);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  const normalizedThemes = useMemo<NormalizedPhraseTheme[]>(() => {
    const rawThemes =
      (
        phrasesModule as unknown as {
          PHRASE_THEMES?: Array<Record<string, unknown>>;
        }
      ).PHRASE_THEMES ?? [];

    return rawThemes.map((t, tIdx) => {
      const themeId = String(t.id ?? `theme-${tIdx}`);
      const titleVi = String(t.titleVi ?? t.title ?? "Tình huống giao tiếp");
      const titleZh = String(t.titleZh ?? t.titleDe ?? "");
      const descriptionVi = String(t.descriptionVi ?? "");
      const rawPhrases = (t.phrases as Array<Record<string, unknown>>) ?? [];

      const phrases: NormalizedPhrase[] = rawPhrases.map((p, pIdx) => ({
        id: String(p.id ?? `${themeId}-p-${pIdx}`),
        zh: String(p.zh ?? p.hanzi ?? p.de ?? ""),
        pinyin: String(p.pinyin ?? ""),
        vi: String(p.vi ?? p.meaningVi ?? ""),
        contextVi: String(p.contextVi ?? ""),
        level: (p.level as HSKLevel) ?? "HSK1",
        themeId,
        themeTitleVi: titleVi,
        themeTitleZh: titleZh,
      }));

      return {
        id: themeId,
        titleVi,
        titleZh,
        descriptionVi,
        phrases,
      };
    });
  }, []);

  const allPhrases = useMemo(
    () => normalizedThemes.flatMap((t) => t.phrases),
    [normalizedThemes]
  );

  const activeTheme = useMemo(
    () => normalizedThemes.find((t) => t.id === selectedThemeId) ?? null,
    [normalizedThemes, selectedThemeId]
  );

  const filteredPhrases = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allPhrases.filter((item) => {
      if (selectedThemeId !== "all" && item.themeId !== selectedThemeId) {
        return false;
      }
      if (selectedLevel !== "ALL" && item.level !== selectedLevel) {
        return false;
      }
      if (!q) return true;
      return (
        item.zh.toLowerCase().includes(q) ||
        item.pinyin.toLowerCase().includes(q) ||
        item.vi.toLowerCase().includes(q) ||
        item.contextVi.toLowerCase().includes(q) ||
        item.themeTitleVi.toLowerCase().includes(q) ||
        item.themeTitleZh.toLowerCase().includes(q)
      );
    });
  }, [allPhrases, selectedThemeId, selectedLevel, searchQuery]);

  const handleSpeak = (phrase: NormalizedPhrase, rate: PlaybackRate) => {
    const key = `${phrase.id}-${rate}`;
    if (speakingKey === key) {
      stopSpeaking();
      setSpeakingKey(null);
      return;
    }
    setSpeakingKey(key);
    speakChinese(phrase.zh, rate, () => {
      setSpeakingKey((prev) => (prev === key ? null : prev));
    });
  };

  const resetFilters = () => {
    setSelectedThemeId("all");
    setSelectedLevel("ALL");
    setSearchQuery("");
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-14">
      {/* Header */}
      <header className="rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-semibold text-[#6B655E]">
              <MessageSquareText className="h-3.5 w-3.5" />
              <span>常用句型 · Giao tiếp &amp; Thương mại Trung Quốc (Mức 0 – HSK 9)</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
              Kho Mẫu Câu Giao Tiếp &amp; Đàm Phán Thực Chiến
            </h1>
            <p className="max-w-2xl text-sm text-[#737373]">
              {allPhrases.length} mẫu câu chuẩn Phổ thông theo{" "}
              {normalizedThemes.length} tình huống đời sống, du lịch, đàm phán giá xưởng 1688/Quảng Châu và xuất nhập khẩu. Nhấp vào chữ Hán bất kỳ để tra từ điển &amp; lưu vào sổ từ.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Pinyin Toggle */}
            <button
              type="button"
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                showPinyin
                  ? "border-[#6B655E] bg-[#6B655E] text-white"
                  : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]"
              }`}
            >
              <Languages className="h-3.5 w-3.5" />
              {showPinyin ? "Pinyin: BẬT" : "Pinyin: TẮT"}
            </button>

            {/* Default Audio Speed Toggle */}
            <div className="flex items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] p-1">
              <span className="px-2 text-xs font-medium text-[#737373]">
                Tốc độ:
              </span>
              {([0.85, 1.0] as PlaybackRate[]).map((rate) => {
                const active = playbackRate === rate;
                return (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setPlaybackRate(rate)}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-[#292524] text-white"
                        : "text-[#737373] hover:text-[#262626]"
                    }`}
                  >
                    {rate === 0.85 ? "0.85x" : "1.0x"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search + Level Filter */}
        <div className="mt-5 space-y-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm mẫu câu chữ Hán, Pinyin hoặc nghĩa tiếng Việt (vd: 奶茶, 报价, 海关, trà sữa, giá xưởng, hợp đồng...)"
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] py-2.5 pl-10 pr-9 text-sm text-[#262626] placeholder:text-[#737373] focus:border-[#6B655E] focus:bg-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Xóa tìm kiếm"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-1 text-[#737373] hover:bg-[#F2F2F0] hover:text-[#262626]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Cấp độ HSK:
            </span>
            {HSK_LEVELS.map((lvl) => {
              const active = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`cursor-pointer rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? "border-[#292524] bg-[#292524] text-white"
                      : "border-[#E5E5E0] bg-white text-[#737373] hover:border-[#6B655E] hover:text-[#262626]"
                  }`}
                >
                  {lvl === "ALL"
                    ? "Mọi trình độ"
                    : lvl === "HSK0"
                      ? "Mức 0 (HSK0)"
                      : lvl}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Theme Pills */}
      <section aria-label="12 Chủ đề giao tiếp" className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedThemeId("all")}
            className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              selectedThemeId === "all"
                ? "border-[#292524] bg-[#292524] text-white"
                : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
            }`}
          >
            Tất cả ({allPhrases.length})
          </button>

          {normalizedThemes.map((theme) => {
            const active = selectedThemeId === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => setSelectedThemeId(theme.id)}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "border-[#292524] bg-[#292524] text-white"
                    : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                {theme.titleVi}
                <span
                  className={`ml-1.5 text-[11px] ${
                    active ? "text-[#E5E5E0]" : "text-[#737373]"
                  }`}
                >
                  {theme.phrases.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Theme Summary */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#737373]">
          <div>
            {activeTheme ? (
              <span>
                <strong className="font-semibold text-[#262626]">
                  {activeTheme.titleVi}
                </strong>{" "}
                {activeTheme.titleZh ? `(${activeTheme.titleZh})` : ""}{" "}
                {activeTheme.descriptionVi
                  ? `— ${activeTheme.descriptionVi}`
                  : ""}
              </span>
            ) : (
              <span>
                Hiển thị tất cả{" "}
                <strong className="text-[#262626]">
                  {normalizedThemes.length} chủ đề
                </strong>{" "}
                giao tiếp &amp; thương mại Trung Quốc.
              </span>
            )}
          </div>
          <span className="font-medium text-[#6B655E]">
            {filteredPhrases.length} mẫu câu phù hợp
          </span>
        </div>
      </section>

      {/* Phrase Cards Grid */}
      {filteredPhrases.length === 0 ? (
        <div className="rounded-2xl border border-[#E5E5E0] bg-white p-10 text-center">
          <p className="text-sm font-semibold text-[#262626]">
            Không tìm thấy mẫu câu phù hợp
          </p>
          <p className="mt-1 text-xs text-[#737373]">
            Thử đổi từ khóa chữ Hán/Pinyin/Tiếng Việt hoặc đặt lại bộ lọc trình độ HSK.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 cursor-pointer rounded-xl bg-[#292524] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6B655E]"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {filteredPhrases.map((phrase) => {
            const isSpeakingNormal = speakingKey === `${phrase.id}-1`;
            const isSpeakingSlow = speakingKey === `${phrase.id}-0.85`;
            const isSpeakingCurrent =
              speakingKey === `${phrase.id}-${playbackRate}`;

            return (
              <article
                key={phrase.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#6B655E]/60"
              >
                <div className="space-y-2.5">
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span
                        className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold ${getLevelBadgeClass(
                          phrase.level
                        )}`}
                      >
                        {phrase.level}
                      </span>
                      {selectedThemeId === "all" && (
                        <span className="inline-flex items-center rounded-md bg-[#F2F2F0] px-2 py-0.5 text-[11px] font-medium text-[#6B655E]">
                          {phrase.themeTitleVi}
                        </span>
                      )}
                    </div>

                    {/* Audio Controls (0.85x / 1.0x) */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpeak(phrase, playbackRate)}
                        aria-label={`Nghe mẫu câu tốc độ ${playbackRate}x`}
                        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                          isSpeakingCurrent
                            ? "border-[#292524] bg-[#292524] text-white"
                            : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                        }`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>
                          Nghe {playbackRate === 0.85 ? "0.85x" : "1.0x"}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleSpeak(
                            phrase,
                            playbackRate === 0.85 ? 1.0 : 0.85
                          )
                        }
                        title={
                          playbackRate === 0.85
                            ? "Nghe tốc độ chuẩn 1.0x"
                            : "Nghe chậm 0.85x"
                        }
                        className={`cursor-pointer rounded-lg border px-2 py-1 text-[11px] font-medium transition-colors ${
                          (playbackRate === 0.85 && isSpeakingNormal) ||
                          (playbackRate === 1.0 && isSpeakingSlow)
                            ? "border-[#6B655E] bg-[#6B655E] text-white"
                            : "border-[#E5E5E0] bg-white text-[#737373] hover:border-[#6B655E] hover:text-[#262626]"
                        }`}
                      >
                        {playbackRate === 0.85 ? "1.0x" : "0.85x"}
                      </button>
                    </div>
                  </div>

                  {/* Chinese Phrase wrapped in InteractiveChineseText */}
                  <div className="text-lg font-bold leading-snug text-[#262626]">
                    <InteractiveChineseText
                      text={phrase.zh}
                      pinyin={phrase.pinyin}
                    />
                  </div>

                  {/* Pinyin */}
                  {showPinyin && phrase.pinyin && (
                    <p className="font-mono text-xs text-[#6B655E]">
                      {phrase.pinyin}
                    </p>
                  )}

                  {/* Vietnamese Meaning */}
                  <p className="text-sm font-medium text-[#262626]">
                    {phrase.vi}
                  </p>
                </div>

                {/* Usage Context */}
                <p className="mt-3.5 border-t border-[#F2F2F0] pt-2.5 text-xs leading-relaxed text-[#737373]">
                  {phrase.contextVi}
                </p>
              </article>
            );
          })}
        </div>
      )}

      <ResourceBanner
        resources={getResourcesByCategory(["slides"])}
        heading="40 Slide bài giảng 301 Câu Đàm Thoại Tiếng Hoa (Google Drive)"
      />
    </div>
  );
}
