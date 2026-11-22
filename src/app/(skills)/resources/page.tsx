"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FolderOpen,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  DRIVE_RESOURCES,
  type ResourceCategory,
} from "@/data/resources";

const CATEGORY_TABS: { id: "all" | ResourceCategory; label: string }[] = [
  { id: "all", label: "Tất cả (9 bộ)" },
  { id: "textbooks", label: "Giáo trình HSK" },
  { id: "vocab", label: "Từ vựng & Chuyên ngành" },
  { id: "grammar", label: "Ngữ pháp" },
  { id: "slides", label: "Slide 301 câu" },
  { id: "listening", label: "Luyện nghe" },
  { id: "pronunciation", label: "Video phát âm" },
  { id: "exercises", label: "Bài tập & Đề thi" },
  { id: "visual", label: "Học qua hình ảnh" },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ResourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DRIVE_RESOURCES.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.descriptionVi.toLowerCase().includes(q) ||
        item.categoryLabelVi.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-14">
      {/* Dark Hero Header */}
      <section className="rounded-3xl bg-[#262626] p-6 sm:p-8 text-[#F2F2F0] shadow-[0_8px_24px_-12px_rgba(38,38,38,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#E5E5E0]">
              <Sparkles className="h-3.5 w-3.5 text-[#D6D3CD]" />
              <span>Kho Tài Nguyên HSK 0 – HSK 9 · Google Drive</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Thư viện Giáo trình, PDF &amp; Audio Tiếng Trung
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#D6D3CD]">
              Trọn bộ 9 thư mục tài nguyên chọn lọc gồm Giáo trình chuẩn HSK 1–6 (PDF + Audio), 40 Slide 301 câu đàm thoại, 5.000 từ vựng HSK, từ vựng công xưởng/giày da, ngữ pháp Hán ngữ 1–4, video phát âm và giáo trình luyện nghe cấp tốc.
            </p>
          </div>

          <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center">
            <div className="text-2xl font-bold text-white">{DRIVE_RESOURCES.length}</div>
            <div className="text-[11px] text-[#D6D3CD]">Thư mục đầy đủ</div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm giáo trình HSK, 301 câu, từ vựng giày da, luyện nghe cấp tốc, ngữ pháp..."
            className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] py-2.5 pl-9 pr-9 text-sm text-[#262626] placeholder:text-[#737373] focus:border-[#6B655E] focus:bg-white focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Xóa từ khóa"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#737373] hover:text-[#262626] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CATEGORY_TABS.map((tab) => {
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-[#292524] text-white"
                    : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-[#6B655E] hover:bg-[#F2F2F0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredResources.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-5 transition-all hover:border-[#6B655E] hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#292524] text-[11px] font-bold text-white">
                    {item.index}
                  </span>
                  <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                    {item.categoryLabelVi}
                  </span>
                  <span className="rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5 text-[11px] font-medium text-[#6B655E]">
                    {item.levelRange}
                  </span>
                </div>
                <span className="shrink-0 rounded-full bg-[#FAF9F7] px-2.5 py-0.5 text-[10px] font-semibold text-[#737373] border border-[#E5E5E0]">
                  {item.formatBadge}
                </span>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#262626] leading-snug">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-[#737373]">
                  {item.descriptionVi}
                </p>
              </div>

              <ul className="space-y-1.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3">
                {item.highlights.map((hl, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[#4A4540]"
                  >
                    <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6B655E]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#E5E5E0] pt-3.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {item.linkedRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1.5 text-xs font-medium text-[#4A4540] transition-colors hover:border-[#6B655E] hover:text-[#262626]"
                  >
                    <span>{route.label}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540]"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                <span>Mở Google Drive</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
