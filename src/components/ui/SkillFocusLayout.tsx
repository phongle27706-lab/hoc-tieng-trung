"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  List,
  Settings,
  X,
} from "lucide-react";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";

export interface SkillFocusLessonItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  meta?: string;
  completed?: boolean;
}

export interface SkillFocusPagination {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump?: (index: number) => void;
  itemLabel?: string;
  prevLabel?: string;
  nextLabel?: string;
  completedIndices?: Set<number>;
}

export interface SkillFocusLayoutProps {
  /** Top bar back link */
  backHref?: string;
  backLabel?: string;

  /** Grouped HSK 0–9 dropdown */
  hskLevel: string;
  onHskLevelChange: (value: string) => void;
  allowAllLevel?: boolean;
  allLevelLabel?: string;
  levelCounts?: Partial<Record<string, number>>;

  /** Current lesson title shown in top bar breadcrumb */
  currentTitle: string;

  /** Optional compact mode switcher on the right of top bar */
  modeSlot?: React.ReactNode;

  /** Settings ⚙️ popover */
  settingsContent?: React.ReactNode;
  settingsBadge?: string;
  settingsAriaLabel?: string;

  /** Left sidebar lesson list */
  sidebarTitle?: string;
  sidebarSummary?: string;
  sidebarTopSlot?: React.ReactNode;
  lessons: SkillFocusLessonItem[];
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  emptySidebarText?: string;

  /** Center Focus Stage */
  audioSlot?: React.ReactNode;
  children: React.ReactNode;
  shortcutHint?: React.ReactNode;

  /** Footer inside focus stage */
  footerOptionsSlot?: React.ReactNode;
  feedbackSlot?: React.ReactNode;
  pagination?: SkillFocusPagination;
}

interface HSKGroup {
  label: string;
  options: { value: string; label: string; sub?: string }[];
}

const HSK_GROUPS: HSKGroup[] = [
  {
    label: "Nhập môn (HSK 0)",
    options: [{ value: "HSK0", label: "HSK 0", sub: "Pinyin · Nền tảng" }],
  },
  {
    label: "Sơ cấp (HSK 1–2)",
    options: [
      { value: "HSK1", label: "HSK 1" },
      { value: "HSK2", label: "HSK 2" },
    ],
  },
  {
    label: "Trung cấp (HSK 3–4)",
    options: [
      { value: "HSK3", label: "HSK 3" },
      { value: "HSK4", label: "HSK 4" },
    ],
  },
  {
    label: "Cao cấp (HSK 5–6)",
    options: [
      { value: "HSK5", label: "HSK 5" },
      { value: "HSK6", label: "HSK 6" },
    ],
  },
  {
    label: "Chuyên sâu (HSK 7–9)",
    options: [{ value: "HSK7-9", label: "HSK 7–9", sub: "HSK 3.0 Cao cấp" }],
  },
];

function getVisibleDotIndices(current: number, total: number): number[] {
  const maxDots = 7;
  if (total <= maxDots) {
    return Array.from({ length: total }, (_, i) => i);
  }
  const half = Math.floor(maxDots / 2);
  let start = Math.max(0, current - half);
  let end = start + maxDots - 1;
  if (end >= total) {
    end = total - 1;
    start = Math.max(0, end - maxDots + 1);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function SkillFocusLayout({
  backHref = "/roadmap",
  backLabel = "Quay lại",
  hskLevel,
  onHskLevelChange,
  allowAllLevel = true,
  allLevelLabel = "Tất cả HSK",
  levelCounts,
  currentTitle,
  modeSlot,
  settingsContent,
  settingsBadge,
  settingsAriaLabel = "Cài đặt luyện tập",
  sidebarTitle,
  sidebarSummary,
  sidebarTopSlot,
  lessons,
  activeLessonId,
  onSelectLesson,
  emptySidebarText = "Chưa có bài học ở cấp độ này.",
  audioSlot,
  children,
  shortcutHint,
  footerOptionsSlot,
  feedbackSlot,
  pagination,
}: SkillFocusLayoutProps) {
  const [openMenu, setOpenMenu] = useState<"hsk" | "settings" | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (topBarRef.current && !topBarRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!mobileDrawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileDrawerOpen]);

  const toggleMenu = (menu: "hsk" | "settings") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const renderLessonList = (onAfterSelect?: () => void) => (
    <div className="flex h-full flex-col">
      <div className="border-b border-[#E5E5E0] px-3.5 py-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#262626]">
            {sidebarTitle ??
              (hskLevel === "ALL"
                ? allLevelLabel
                : formatUnifiedHSKLabel(hskLevel))}
          </span>
          <span className="rounded-md bg-[#F2F2F0] px-1.5 py-0.5 text-[10px] font-semibold text-[#57534E]">
            {lessons.length}
          </span>
        </div>
        {sidebarSummary && (
          <p className="mt-0.5 text-[11px] font-medium text-[#737373]">
            {sidebarSummary}
          </p>
        )}
        {sidebarTopSlot && <div className="mt-2.5">{sidebarTopSlot}</div>}
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto p-2">
        {lessons.length === 0 ? (
          <p className="px-2 py-6 text-center text-xs text-[#737373]">
            {emptySidebarText}
          </p>
        ) : (
          lessons.map((lesson, idx) => {
            const isActive = lesson.id === activeLessonId;
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => {
                  onSelectLesson(lesson.id);
                  onAfterSelect?.();
                }}
                className={`group flex w-full cursor-pointer items-start gap-2 rounded-xl border px-2.5 py-2 text-left transition-colors ${
                  isActive
                    ? "border-brand bg-brand-soft text-[#262626]"
                    : "border-transparent bg-transparent text-[#262626] hover:border-[#E5E5E0] hover:bg-[#FAF9F7]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${
                    isActive
                      ? "bg-brand text-white"
                      : "bg-[#F2F2F0] text-[#737373] group-hover:bg-[#E5E5E0]"
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span
                      className={`truncate text-xs font-semibold ${
                        isActive ? "text-brand-active" : "text-[#262626]"
                      }`}
                    >
                      {lesson.title}
                    </span>
                    {lesson.completed && (
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#15803D]" />
                    )}
                  </div>
                  {(lesson.subtitle || lesson.badge || lesson.meta) && (
                    <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-[#737373]">
                      {lesson.badge && (
                        <span className="shrink-0 rounded bg-[#F2F2F0] px-1 py-0.2 font-semibold text-[#57534E]">
                          {lesson.badge}
                        </span>
                      )}
                      {lesson.subtitle && (
                        <span className="truncate">{lesson.subtitle}</span>
                      )}
                      {lesson.meta && (
                        <span className="ml-auto shrink-0 font-medium">
                          {lesson.meta}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );

  const visibleDots = pagination
    ? getVisibleDotIndices(pagination.currentIndex, pagination.total)
    : [];

  return (
    <div className="mx-auto max-w-6xl space-y-3 pb-10">
      {/* ==================== MINIMAL TOP BAR (~48px) ==================== */}
      <div
        ref={topBarRef}
        className="relative flex min-h-12 flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#E5E5E0] bg-white px-2.5 py-1.5 shadow-2xs sm:flex-nowrap sm:px-3"
      >
        {/* Left: Mobile Drawer Toggle + Back + Grouped HSK Dropdown + Current Title */}
        <div className="flex items-center gap-1.5 sm:min-w-0 sm:flex-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Mở danh sách bài học"
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] transition-colors hover:border-brand hover:text-brand-active lg:hidden"
          >
            <List className="h-4 w-4" />
          </button>

          <Link
            href={backHref}
            className="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl px-2 text-xs font-semibold text-[#57534E] transition-colors hover:bg-[#FAF9F7] hover:text-[#262626]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{backLabel}</span>
          </Link>

          <span className="hidden text-[#D6D3CD] sm:inline">/</span>

          {/* Grouped HSK 0-9 Dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleMenu("hsk")}
              aria-expanded={openMenu === "hsk"}
              aria-haspopup="listbox"
              className={`inline-flex h-8 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl border px-2.5 text-xs font-semibold transition-colors ${
                openMenu === "hsk"
                  ? "border-brand bg-brand-soft text-brand-active"
                  : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand hover:bg-brand-soft/40"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5 shrink-0 text-brand" />
              <span>
                {hskLevel === "ALL"
                  ? allLevelLabel
                  : formatUnifiedHSKLabel(hskLevel)}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 text-[#737373] transition-transform ${
                  openMenu === "hsk" ? "rotate-180 text-brand-active" : ""
                }`}
              />
            </button>

            {openMenu === "hsk" && (
              <div
                role="listbox"
                aria-label="Chọn cấp độ HSK"
                className="absolute left-0 z-50 mt-2 w-[min(17.5rem,calc(100vw-2rem))] rounded-2xl border border-[#E5E5E0] bg-white p-2.5 shadow-lg"
              >
                {allowAllLevel && (
                  <button
                    type="button"
                    role="option"
                    aria-selected={hskLevel === "ALL"}
                    onClick={() => {
                      onHskLevelChange("ALL");
                      setOpenMenu(null);
                    }}
                    className={`mb-2 flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                      hskLevel === "ALL"
                        ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                        : "bg-[#FAF9F7] text-[#262626] hover:bg-brand-soft/50"
                    }`}
                  >
                    <span>{allLevelLabel}</span>
                    <span className="flex items-center gap-1.5">
                      {levelCounts?.ALL !== undefined && (
                        <span className="text-[11px] font-medium text-[#737373]">
                          {levelCounts.ALL}
                        </span>
                      )}
                      {hskLevel === "ALL" && (
                        <Check className="h-3.5 w-3.5 text-brand-active" />
                      )}
                    </span>
                  </button>
                )}

                <div className="space-y-2">
                  {HSK_GROUPS.map((group) => (
                    <div key={group.label}>
                      <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373]">
                        {group.label}
                      </p>
                      <div
                        className={
                          group.options.length > 1
                            ? "grid grid-cols-2 gap-1.5"
                            : "grid grid-cols-1 gap-1.5"
                        }
                      >
                        {group.options.map((opt) => {
                          const active = hskLevel === opt.value;
                          const count = levelCounts?.[opt.value];
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              role="option"
                              aria-selected={active}
                              onClick={() => {
                                onHskLevelChange(opt.value);
                                setOpenMenu(null);
                              }}
                              className={`flex cursor-pointer items-center justify-between rounded-xl border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                                active
                                  ? "border-brand bg-brand-soft text-brand-active"
                                  : "border-[#E5E5E0] bg-white text-[#262626] hover:border-brand hover:bg-brand-soft/40"
                              }`}
                            >
                              <span className="truncate">
                                {opt.label}
                                {opt.sub && (
                                  <span className="ml-1.5 text-[10px] font-normal text-[#737373]">
                                    {opt.sub}
                                  </span>
                                )}
                              </span>
                              <span className="ml-1 flex shrink-0 items-center gap-1">
                                {count !== undefined && (
                                  <span className="text-[10px] font-medium text-[#737373]">
                                    {count}
                                  </span>
                                )}
                                {active && (
                                  <Check className="h-3 w-3 text-brand-active" />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="hidden text-[#D6D3CD] md:inline">/</span>

          <h1 className="hidden min-w-0 truncate text-xs font-bold text-[#262626] md:block md:text-sm">
            {currentTitle}
          </h1>
        </div>

        {/* Right: Mode Switcher + Settings ⚙️ */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {modeSlot && <div className="flex items-center">{modeSlot}</div>}

          {settingsContent && (
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => toggleMenu("settings")}
                aria-expanded={openMenu === "settings"}
                aria-label={settingsAriaLabel}
                title={settingsAriaLabel}
                className={`inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border px-2.5 text-xs font-semibold transition-colors ${
                  openMenu === "settings"
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand hover:bg-brand-soft/40 hover:text-brand-active"
                }`}
              >
                <Settings className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden sm:inline">
                  {settingsBadge ?? "Cài đặt"}
                </span>
              </button>

              {openMenu === "settings" && (
                <div className="absolute right-0 z-50 mt-2 w-[min(21rem,calc(100vw-2rem))] space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4 shadow-lg">
                  {settingsContent}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ==================== 2-COLUMN FOCUS ROOM BODY ==================== */}
      <div className="flex items-start gap-4">
        {/* Desktop Left Sidebar (~240px) */}
        <aside className="sticky top-4 hidden max-h-[calc(100vh-6rem)] w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#E5E5E0] bg-white shadow-2xs lg:flex">
          {renderLessonList()}
        </aside>

        {/* Mobile Slide-Over Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-[1px]"
              onClick={() => setMobileDrawerOpen(false)}
            />
            <div className="relative z-10 flex h-full w-[min(18rem,85vw)] flex-col bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] px-3.5 py-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#57534E]">
                  Danh sách bài học
                </span>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  aria-label="Đóng danh sách"
                  className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#737373] hover:bg-[#FAF9F7] hover:text-[#262626]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-hidden">
                {renderLessonList(() => setMobileDrawerOpen(false))}
              </div>
            </div>
          </div>
        )}

        {/* Center: Single-Question Focus Stage */}
        <main className="min-w-0 flex-1 space-y-3">
          {/* Mobile Current Title Pill */}
          <div className="flex items-center justify-between gap-2 px-0.5 md:hidden">
            <h2 className="truncate text-sm font-bold text-[#262626]">
              {currentTitle}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E5E5E0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            {/* Optional Audio Player Slot */}
            {audioSlot && (
              <div className="border-b border-[#E5E5E0] bg-[#FAF9F7] px-4 py-3 sm:px-6">
                {audioSlot}
              </div>
            )}

            {/* Main Single-Question Focus Content */}
            <div className="p-4 sm:p-6">{children}</div>

            {/* Subtle Shortcut Hint Line */}
            {shortcutHint && (
              <div className="border-t border-[#F2F2F0] bg-[#FAF9F7]/70 px-4 py-2 text-center text-[11px] text-[#737373] sm:px-6">
                {shortcutHint}
              </div>
            )}

            {/* Footer: Options, Feedback & Pagination */}
            {(footerOptionsSlot || feedbackSlot || pagination) && (
              <div className="space-y-3 border-t border-[#E5E5E0] bg-[#FAF9F7] px-4 py-3 sm:px-6">
                {feedbackSlot && <div>{feedbackSlot}</div>}

                {footerOptionsSlot && (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {footerOptionsSlot}
                  </div>
                )}

                {pagination && pagination.total > 0 && (
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      disabled={pagination.currentIndex <= 0}
                      onClick={pagination.onPrev}
                      className="inline-flex h-9 cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-white px-3 text-xs font-semibold text-[#262626] transition-colors hover:border-brand hover:text-brand-active disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>{pagination.prevLabel ?? "Trước"}</span>
                    </button>

                    <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2.5">
                      <div className="flex items-center gap-1">
                        {visibleDots.map((dotIdx) => {
                          const isCurrent = dotIdx === pagination.currentIndex;
                          const isDone =
                            pagination.completedIndices?.has(dotIdx) ?? false;
                          return (
                            <button
                              key={dotIdx}
                              type="button"
                              disabled={!pagination.onJump}
                              onClick={() => pagination.onJump?.(dotIdx)}
                              aria-label={`${pagination.itemLabel ?? "Câu"} ${dotIdx + 1}`}
                              className={`h-2 rounded-full transition-all ${
                                pagination.onJump ? "cursor-pointer" : ""
                              } ${
                                isCurrent
                                  ? "w-5 bg-brand"
                                  : isDone
                                    ? "w-2 bg-[#15803D]"
                                    : "w-2 bg-[#D6D3CD] hover:bg-[#A8A29E]"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-xs font-semibold text-[#57534E]">
                        {pagination.itemLabel ?? "Câu"}{" "}
                        {pagination.currentIndex + 1}/{pagination.total}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={pagination.currentIndex >= pagination.total - 1}
                      onClick={pagination.onNext}
                      className="inline-flex h-9 cursor-pointer items-center gap-1 rounded-xl bg-brand px-3.5 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>{pagination.nextLabel ?? "Câu tiếp"}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
