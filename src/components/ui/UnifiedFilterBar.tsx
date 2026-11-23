"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Filter,
  GraduationCap,
  Search,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";

export type UnifiedHSKValue =
  | "ALL"
  | "HSK0"
  | "HSK1"
  | "HSK2"
  | "HSK3"
  | "HSK4"
  | "HSK5"
  | "HSK6"
  | "HSK7-9";

export interface UnifiedOption<T extends string = string> {
  value: T;
  label: string;
  shortLabel?: string;
}

interface HSKGroup {
  label: string;
  options: { value: Exclude<UnifiedHSKValue, "ALL">; label: string; sub?: string }[];
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

const DEFAULT_DIFFICULTY_OPTIONS: UnifiedOption[] = [
  { value: "all", label: "Tất cả mức", shortLabel: "Độ khó" },
  { value: "basic", label: "Cơ bản", shortLabel: "Cơ bản" },
  { value: "advanced", label: "Nâng cao", shortLabel: "Nâng cao" },
];

export function formatUnifiedHSKLabel(value: string): string {
  if (value === "ALL") return "Tất cả HSK";
  if (value === "HSK0") return "HSK 0";
  if (value === "HSK7-9") return "HSK 7–9";
  if (value.startsWith("HSK")) return `HSK ${value.slice(3)}`;
  return value;
}

export interface UnifiedFilterBarProps {
  /** Optional search input on the left */
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;

  /** Grouped HSK level dropdown */
  hskLevel?: string;
  onHskLevelChange?: (value: string) => void;
  allowAllLevel?: boolean;
  allLevelLabel?: string;
  levelCounts?: Partial<Record<string, number>>;

  /** Optional Difficulty dropdown (e.g. Tất cả mức / Cơ bản / Nâng cao) */
  difficulty?: string;
  onDifficultyChange?: (value: string) => void;
  difficultyOptions?: UnifiedOption[];

  /** Optional Status dropdown (e.g. Tất cả / Chưa học / Đã xong) */
  status?: string;
  onStatusChange?: (value: string) => void;
  statusOptions?: UnifiedOption[];

  /** Optional Settings ⚙️ popover content */
  settingsContent?: React.ReactNode;
  settingsBadge?: string;
  settingsAriaLabel?: string;

  /** Optional compact right-side slot (e.g. item counter) */
  rightSlot?: React.ReactNode;

  className?: string;
}

type OpenMenu = "hsk" | "difficulty" | "status" | "settings" | null;

export function UnifiedFilterBar({
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Tìm bài học, chữ Hán, Pinyin...",
  hskLevel,
  onHskLevelChange,
  allowAllLevel = true,
  allLevelLabel = "Tất cả HSK",
  levelCounts,
  difficulty,
  onDifficultyChange,
  difficultyOptions = DEFAULT_DIFFICULTY_OPTIONS,
  status,
  onStatusChange,
  statusOptions,
  settingsContent,
  settingsBadge,
  settingsAriaLabel = "Cài đặt luyện tập",
  rightSlot,
  className = "",
}: UnifiedFilterBarProps) {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
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

  const toggleMenu = (menu: Exclude<OpenMenu, null>) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const hasSearch = typeof onSearchChange === "function";
  const hasHsk = typeof onHskLevelChange === "function" && hskLevel !== undefined;
  const hasDifficulty =
    typeof onDifficultyChange === "function" && difficulty !== undefined;
  const hasStatus =
    typeof onStatusChange === "function" &&
    status !== undefined &&
    Array.isArray(statusOptions) &&
    statusOptions.length > 0;
  const hasSettings = Boolean(settingsContent);

  const activeDifficultyOpt = difficultyOptions.find(
    (o) => o.value === difficulty
  );
  const isDifficultyFiltered =
    hasDifficulty && difficulty !== difficultyOptions[0]?.value;

  const activeStatusOpt = statusOptions?.find((o) => o.value === status);
  const isStatusFiltered =
    hasStatus && status !== statusOptions?.[0]?.value;

  const isHskFiltered = hasHsk && allowAllLevel && hskLevel !== "ALL";

  return (
    <div
      ref={barRef}
      className={`relative flex h-12 min-w-0 flex-nowrap items-center gap-1.5 rounded-2xl border border-[#E5E5E0] bg-white px-2.5 shadow-2xs sm:gap-2 sm:px-3 ${className}`}
    >
      {/* 1. Optional Search Input */}
      {hasSearch && (
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#737373]" />
          <input
            type="text"
            value={searchQuery ?? ""}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-8 w-full min-w-0 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] pl-8 pr-7 text-xs text-[#262626] placeholder:text-[#737373] transition-colors focus:border-brand focus:bg-white focus:outline-none sm:text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Xóa tìm kiếm"
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-0.5 text-[#737373] hover:text-[#262626]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      )}

      {/* 2. Grouped HSK Level Dropdown */}
      {hasHsk && (
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => toggleMenu("hsk")}
            aria-expanded={openMenu === "hsk"}
            aria-haspopup="listbox"
            className={`inline-flex h-8 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl border px-2.5 text-xs font-semibold transition-colors sm:px-3 ${
              openMenu === "hsk" || isHskFiltered
                ? "border-brand bg-brand-soft text-brand-active"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand hover:bg-brand-soft/40"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-brand" />
            <span className="hidden font-normal text-[#737373] md:inline">
              Cấp độ:
            </span>
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
              className="absolute left-0 z-40 mt-2 w-[min(17.5rem,calc(100vw-2rem))] rounded-2xl border border-[#E5E5E0] bg-white p-2.5 shadow-lg"
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
      )}

      {/* 3. Optional Difficulty Dropdown */}
      {hasDifficulty && (
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => toggleMenu("difficulty")}
            aria-expanded={openMenu === "difficulty"}
            aria-haspopup="listbox"
            className={`inline-flex h-8 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-2 text-xs font-semibold transition-colors sm:gap-1.5 sm:px-3 ${
              openMenu === "difficulty" || isDifficultyFiltered
                ? "border-brand bg-brand-soft text-brand-active"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand hover:bg-brand-soft/40"
            }`}
          >
            <SlidersHorizontal className="hidden h-3.5 w-3.5 shrink-0 text-[#737373] sm:inline" />
            <span className="sm:hidden">
              {activeDifficultyOpt?.shortLabel ??
                activeDifficultyOpt?.label ??
                "Độ khó"}
            </span>
            <span className="hidden sm:inline">
              {activeDifficultyOpt?.label ?? "Độ khó"}
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 shrink-0 text-[#737373] transition-transform ${
                openMenu === "difficulty" ? "rotate-180 text-brand-active" : ""
              }`}
            />
          </button>

          {openMenu === "difficulty" && (
            <div
              role="listbox"
              aria-label="Chọn độ khó"
              className="absolute right-0 z-40 mt-2 w-44 rounded-2xl border border-[#E5E5E0] bg-white p-1.5 shadow-lg"
            >
              {difficultyOptions.map((opt) => {
                const active = difficulty === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onDifficultyChange(opt.value);
                      setOpenMenu(null);
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-brand-soft text-brand-active"
                        : "text-[#262626] hover:bg-[#FAF9F7]"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {active && <Check className="h-3.5 w-3.5 text-brand-active" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 4. Optional Status Dropdown */}
      {hasStatus && statusOptions && (
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => toggleMenu("status")}
            aria-expanded={openMenu === "status"}
            aria-haspopup="listbox"
            className={`inline-flex h-8 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-2 text-xs font-semibold transition-colors sm:gap-1.5 sm:px-3 ${
              openMenu === "status" || isStatusFiltered
                ? "border-brand bg-brand-soft text-brand-active"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand hover:bg-brand-soft/40"
            }`}
          >
            <Filter className="h-3.5 w-3.5 shrink-0 text-[#737373]" />
            <span className="sm:hidden">
              {activeStatusOpt?.shortLabel ?? activeStatusOpt?.label ?? "Lọc"}
            </span>
            <span className="hidden sm:inline">
              {activeStatusOpt?.label ?? "Trạng thái"}
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 shrink-0 text-[#737373] transition-transform ${
                openMenu === "status" ? "rotate-180 text-brand-active" : ""
              }`}
            />
          </button>

          {openMenu === "status" && (
            <div
              role="listbox"
              aria-label="Lọc trạng thái"
              className="absolute right-0 z-40 mt-2 w-40 rounded-2xl border border-[#E5E5E0] bg-white p-1.5 shadow-lg"
            >
              {statusOptions.map((opt) => {
                const active = status === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onStatusChange(opt.value);
                      setOpenMenu(null);
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-brand-soft text-brand-active"
                        : "text-[#262626] hover:bg-[#FAF9F7]"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {active && <Check className="h-3.5 w-3.5 text-brand-active" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Spacer when there's no search input so rightSlot & settings push right */}
      {!hasSearch && (rightSlot || hasSettings) && (
        <div className="min-w-0 flex-1" />
      )}

      {/* 5. Optional compact rightSlot */}
      {rightSlot && (
        <div className="flex shrink-0 items-center gap-1.5">{rightSlot}</div>
      )}

      {/* 6. Optional Settings ⚙️ Popover */}
      {hasSettings && (
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => toggleMenu("settings")}
            aria-expanded={openMenu === "settings"}
            aria-label={settingsAriaLabel}
            title={settingsAriaLabel}
            className={`inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border px-2 text-xs font-semibold transition-colors sm:px-2.5 ${
              openMenu === "settings"
                ? "border-brand bg-brand-soft text-brand-active"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand hover:bg-brand-soft/40 hover:text-brand-active"
            }`}
          >
            <Settings className="h-3.5 w-3.5 shrink-0" />
            {settingsBadge && (
              <span className="text-[11px] font-semibold">{settingsBadge}</span>
            )}
          </button>

          {openMenu === "settings" && (
            <div className="absolute right-0 z-40 mt-2 w-[min(21rem,calc(100vw-2rem))] space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4 shadow-lg">
              {settingsContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
