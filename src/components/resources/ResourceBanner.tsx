"use client";

import React from "react";
import { ExternalLink, FolderOpen, Sparkles } from "lucide-react";
import type { DriveResourceItem } from "@/data/resources";

interface ResourceBannerProps {
  resources: DriveResourceItem[];
  heading?: string;
  compact?: boolean;
}

export function ResourceBanner({
  resources,
  heading = "Tài liệu Google Drive bổ trợ cho chuyên mục này",
  compact = false,
}: ResourceBannerProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <section className="rounded-2xl border border-[#E5E5E0] bg-white p-4 sm:p-5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#292524] text-white">
            <FolderOpen className="h-3.5 w-3.5" />
          </span>
          <div>
            <h2 className="text-sm font-bold text-[#262626]">{heading}</h2>
            {!compact && (
              <p className="text-xs text-[#737373]">
                Mở trực tiếp bộ PDF giáo trình, slide, audio và bài tập Google Drive đi kèm.
              </p>
            )}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#F2F2F0] px-2.5 py-1 text-[11px] font-semibold text-[#6B655E]">
          <Sparkles className="h-3 w-3" />
          Miễn phí · Google Drive
        </span>
      </div>

      <div
        className={`grid grid-cols-1 gap-2.5 ${
          resources.length >= 2 ? "md:grid-cols-2" : ""
        }`}
      >
        {resources.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 transition-all hover:border-[#6B655E] hover:bg-white"
          >
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-md bg-[#292524] px-2 py-0.5 text-[10px] font-semibold text-white">
                  {item.levelRange}
                </span>
                <span className="rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5 text-[10px] font-medium text-[#6B655E]">
                  {item.formatBadge}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#262626] group-hover:text-[#6B655E] transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-[#737373] line-clamp-2">
                {item.descriptionVi}
              </p>
            </div>
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E5E5E0] bg-white text-[#6B655E] transition-colors group-hover:border-[#292524] group-hover:bg-[#292524] group-hover:text-white">
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
