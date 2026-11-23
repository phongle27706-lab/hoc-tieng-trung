"use client";

import React from "react";
import {
  Award,
  Briefcase,
  Compass,
  Equal,
  Headphones,
  BookOpen,
  Mic,
  PenTool,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import type {
  GoalType,
  HSKLevel,
  SkillType,
  SkillWeights,
  StudyDurationMonths,
  UserGoalProfile,
} from "@/types";

export interface PersonalizationPanelProps {
  profile: UserGoalProfile;
  onChange: (next: UserGoalProfile) => void;
}

export interface StartingLevelOption {
  level: HSKLevel;
  label: string;
  shortTag: string;
  descVi: string;
  recommendedWeights?: SkillWeights;
}

export const STARTING_LEVEL_OPTIONS: StartingLevelOption[] = [
  {
    level: "HSK0",
    label: "Mức 0 — Chưa biết gì (HSK0)",
    shortTag: "Pinyin · 4 Thanh điệu · 50 Bộ thủ",
    descVi:
      "Làm chủ Pinyin, 4 thanh điệu + thanh nhẹ, biến điệu thanh 3/一/不 và 50 bộ thủ cốt lõi (Tỷ trọng chuẩn Mức 0: 50% Nghe – 30% Nói – 15% Đọc – 5% Viết).",
    recommendedWeights: { listening: 50, speaking: 30, reading: 15, writing: 5 },
  },
  {
    level: "HSK1",
    label: "Mức 1 — HSK 1 (Sơ cấp 1)",
    shortTag: "150–300 từ · Giao tiếp cơ bản",
    descVi: "Chào hỏi, giới thiệu bản thân, con số, thời gian, mua sắm đơn giản.",
  },
  {
    level: "HSK2",
    label: "Mức 2 — HSK 2 (Sơ cấp 2)",
    shortTag: "300–600 từ · Sinh hoạt hàng ngày",
    descVi: "Hỏi đường, đặt món, thời tiết, công việc, câu so sánh & trợ từ 了/过.",
  },
  {
    level: "HSK3",
    label: "Mức 3 — HSK 3 (Trung cấp 1)",
    shortTag: "600–1000 từ · Giao tiếp độc lập",
    descVi: "Câu chữ 把, câu bị động 被, bổ ngữ kết quả/xu hướng, du lịch & văn phòng.",
  },
  {
    level: "HSK4",
    label: "Mức 4 — HSK 4 (Trung cấp 2)",
    shortTag: "1200–1800 từ · Du học & Thương mại",
    descVi: "Đàm phán công việc, viết email thương mại, thảo luận văn hóa – xã hội.",
  },
  {
    level: "HSK5",
    label: "Mức 5 — HSK 5 (Cao cấp 1)",
    shortTag: "2500 từ · Báo chí & Doanh nghiệp",
    descVi: "Đọc hiểu báo chí kinh tế, hợp đồng xuất nhập khẩu, thuyết trình chuyên sâu.",
  },
  {
    level: "HSK6",
    label: "Mức 6 — HSK 6 (Cao cấp 2)",
    shortTag: "5000 từ · Thành thạo",
    descVi: "Thành ngữ 4 chữ (成语), nghị luận học thuật, giao tiếp thương mại cao cấp.",
  },
  {
    level: "HSK7",
    label: "Mức 7 — HSK 7 (Chuyên gia 1)",
    shortTag: "HSK 3.0 Cao đẳng · Học thuật",
    descVi: "Ngôn ngữ chuyên ngành, phân tích tài chính, thương mại quốc tế chuyên sâu.",
  },
  {
    level: "HSK8",
    label: "Mức 8 — HSK 8 (Chuyên gia 2)",
    shortTag: "HSK 3.0 Cao đẳng · Biên phiên dịch",
    descVi: "Biên phiên dịch song ngữ Việt ↔ Trung chính xác, văn bản pháp lý & ngoại giao.",
  },
  {
    level: "HSK9",
    label: "Mức 9 — HSK 9 (Bản xứ / Thượng thừa)",
    shortTag: "HSK 3.0 Đỉnh cao · 11.000+ từ",
    descVi: "Làm chủ tiếng Trung ở cấp độ bản xứ học thuật, cổ văn ứng dụng & diễn thuyết.",
  },
];

interface GoalOption {
  id: GoalType;
  label: string;
  shortDesc: string;
  weightsBadge: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultWeights: SkillWeights;
}

export const GOAL_OPTIONS: GoalOption[] = [
  {
    id: "giao-tiep-du-lich",
    label: "Giao tiếp / Du lịch Trung Quốc",
    shortDesc: "Ưu tiên phản xạ Nghe – Nói thực tế, gọi món, sân bay, thanh toán WeChat/Alipay",
    weightsBadge: "35% Nghe – 35% Nói – 20% Đọc – 10% Viết",
    icon: Compass,
    defaultWeights: { listening: 35, speaking: 35, reading: 20, writing: 10 },
  },
  {
    id: "kinh-doanh-xnk",
    label: "Làm việc / Kinh doanh / Xuất nhập khẩu",
    shortDesc: "Đàm phán nguồn hàng 1688/Quảng Châu, đọc hợp đồng, logistics & viết email",
    weightsBadge: "30% Nghe – 30% Nói – 25% Đọc – 15% Viết",
    icon: Briefcase,
    defaultWeights: { listening: 30, speaking: 30, reading: 25, writing: 15 },
  },
  {
    id: "thi-hsk-du-hoc",
    label: "Thi HSK 1–9 / Du học Trung Quốc",
    shortDesc: "Cân bằng toàn diện 4 kỹ năng chuẩn đề thi HSK + HSKK & viết chữ Hán học thuật",
    weightsBadge: "30% Nghe – 30% Nói – 20% Đọc – 20% Viết",
    icon: Award,
    defaultWeights: { listening: 30, speaking: 30, reading: 20, writing: 20 },
  },
];

const DURATION_OPTIONS: {
  months: StudyDurationMonths;
  label: string;
  sessionsPerWeek: number;
  paceLabel: string;
}[] = [
  { months: 6, label: "6 tháng", sessionsPerWeek: 6, paceLabel: "Tăng tốc" },
  { months: 9, label: "9 tháng", sessionsPerWeek: 5, paceLabel: "Tiêu chuẩn" },
  { months: 12, label: "12 tháng", sessionsPerWeek: 3, paceLabel: "Bền vững" },
];

export const SKILL_META: {
  key: SkillType;
  label: string;
  labelZh: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
}[] = [
  {
    key: "listening",
    label: "Nghe",
    labelZh: "听力",
    icon: Headphones,
    accentClass: "accent-[#6B655E]",
  },
  {
    key: "speaking",
    label: "Nói",
    labelZh: "口语",
    icon: Mic,
    accentClass: "accent-[#6B655E]",
  },
  {
    key: "reading",
    label: "Đọc",
    labelZh: "阅读",
    icon: BookOpen,
    accentClass: "accent-[#6B655E]",
  },
  {
    key: "writing",
    label: "Viết",
    labelZh: "写作",
    icon: PenTool,
    accentClass: "accent-[#6B655E]",
  },
];

export function getRecommendedSessionsPerWeek(
  duration: StudyDurationMonths
): number {
  const found = DURATION_OPTIONS.find((d) => d.months === duration);
  return found ? found.sessionsPerWeek : 5;
}

export function getDefaultWeightsForGoal(goal: GoalType): SkillWeights {
  const found = GOAL_OPTIONS.find((g) => g.id === goal);
  return found
    ? { ...found.defaultWeights }
    : { listening: 30, speaking: 30, reading: 20, writing: 20 };
}

function rebalanceWeights(
  current: SkillWeights,
  changedKey: SkillType,
  rawValue: number
): SkillWeights {
  const clamped = Math.max(0, Math.min(100, Math.round(rawValue)));
  const otherKeys = (
    ["listening", "speaking", "reading", "writing"] as SkillType[]
  ).filter((k) => k !== changedKey);
  const remaining = 100 - clamped;
  const otherSum = otherKeys.reduce((acc, k) => acc + current[k], 0);

  const next: SkillWeights = { ...current, [changedKey]: clamped };

  if (otherSum === 0) {
    const base = Math.floor(remaining / otherKeys.length);
    let rem = remaining - base * otherKeys.length;
    for (const k of otherKeys) {
      next[k] = base + (rem > 0 ? 1 : 0);
      if (rem > 0) rem -= 1;
    }
  } else {
    let allocated = 0;
    otherKeys.forEach((k, idx) => {
      if (idx === otherKeys.length - 1) {
        next[k] = Math.max(0, remaining - allocated);
      } else {
        const share = Math.round((current[k] / otherSum) * remaining);
        next[k] = Math.max(0, Math.min(remaining - allocated, share));
        allocated += next[k];
      }
    });
  }

  return next;
}

export function PersonalizationPanel({
  profile,
  onChange,
}: PersonalizationPanelProps) {
  const totalWeight =
    profile.skillWeights.listening +
    profile.skillWeights.speaking +
    profile.skillWeights.reading +
    profile.skillWeights.writing;

  const selectedStartingOption =
    STARTING_LEVEL_OPTIONS.find((o) => o.level === profile.startingLevel) ??
    STARTING_LEVEL_OPTIONS[0];

  const handleStartingLevelSelect = (startingLevel: HSKLevel) => {
    const opt = STARTING_LEVEL_OPTIONS.find((o) => o.level === startingLevel);
    onChange({
      ...profile,
      startingLevel,
      skillWeights: opt?.recommendedWeights
        ? { ...opt.recommendedWeights }
        : getDefaultWeightsForGoal(profile.goal),
    });
  };

  const handleGoalSelect = (goal: GoalType) => {
    onChange({
      ...profile,
      goal,
      skillWeights: getDefaultWeightsForGoal(goal),
    });
  };

  const handleDurationSelect = (durationMonths: StudyDurationMonths) => {
    onChange({
      ...profile,
      durationMonths,
      weeklySessionsTarget: getRecommendedSessionsPerWeek(durationMonths),
    });
  };

  const handleSliderChange = (skill: SkillType, value: number) => {
    const nextWeights = rebalanceWeights(profile.skillWeights, skill, value);
    onChange({
      ...profile,
      skillWeights: nextWeights,
    });
  };

  const handleApplyGoalDefault = () => {
    onChange({
      ...profile,
      skillWeights: getDefaultWeightsForGoal(profile.goal),
    });
  };

  const handleApplyHSK0Weights = () => {
    onChange({
      ...profile,
      startingLevel: "HSK0",
      skillWeights: { listening: 50, speaking: 30, reading: 15, writing: 5 },
    });
  };

  const handleEqualize = () => {
    onChange({
      ...profile,
      skillWeights: { listening: 25, speaking: 25, reading: 25, writing: 25 },
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. Starting Level Selection (HSK0 -> HSK9) */}
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
            1. Chọn cấp độ xuất phát của bạn (Mức 0 → HSK 9)
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-semibold text-[#292524]">
            <Sparkles className="h-3 w-3 text-[#6B655E]" />
            Đang chọn: {selectedStartingOption.label}
          </span>
        </div>

        {/* Highlight Card for Mức 0 (HSK0 - Chưa biết gì) */}
        <div className="mb-3">
          {(() => {
            const hsk0 = STARTING_LEVEL_OPTIONS[0];
            const isSelected = profile.startingLevel === "HSK0";
            return (
              <button
                type="button"
                onClick={() => handleStartingLevelSelect("HSK0")}
                aria-pressed={isSelected}
                className={`w-full rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-brand bg-brand-soft text-brand-active shadow-xs"
                    : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold">
                    {hsk0.label}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      isSelected
                        ? "bg-white text-brand-active ring-1 ring-brand-ring"
                        : "bg-[#E5E5E0] text-[#4A4540]"
                    }`}
                  >
                    50% Nghe – 30% Nói – 15% Đọc – 5% Viết
                  </span>
                </div>
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isSelected ? "text-[#4A4540]" : "text-[#6B655E]"
                  }`}
                >
                  {hsk0.descVi}
                </p>
              </button>
            );
          })()}
        </div>

        {/* Grid of HSK 1 -> HSK 9 Starting Levels */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
          {STARTING_LEVEL_OPTIONS.slice(1).map((opt) => {
            const isSelected = profile.startingLevel === opt.level;
            return (
              <button
                key={opt.level}
                type="button"
                onClick={() => handleStartingLevelSelect(opt.level)}
                aria-pressed={isSelected}
                className={`flex flex-col justify-between rounded-xl border p-2.5 text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "border-brand bg-brand-soft"
                    : "border-[#E5E5E0] bg-white hover:border-[#6B655E]"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-[#262626]">
                    {opt.level}
                  </span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-[#292524]" />
                  )}
                </div>
                <p className="mt-1 line-clamp-1 text-[11px] text-[#6B655E]">
                  {opt.shortTag}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Goal Selection (3 specific Chinese goals) */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#737373]">
          2. Mục tiêu học tiếng Trung &amp; Tỷ trọng 4 kỹ năng
        </p>
        <div className="grid grid-cols-1 gap-2.5">
          {GOAL_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = profile.goal === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleGoalSelect(option.id)}
                aria-pressed={isSelected}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "border-brand bg-brand-soft"
                    : "border-[#E5E5E0] bg-white hover:border-[#6B655E]"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isSelected
                      ? "bg-brand text-white"
                      : "bg-[#F2F2F0] text-[#6B655E]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#262626]">
                      {option.label}
                    </p>
                    <span className="rounded-full border border-[#E5E5E0] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                      {option.weightsBadge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#737373]">
                    {option.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Duration */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
            3. Thời gian hoàn thành lộ trình
          </p>
          <span className="text-xs text-[#737373]">
            Đề xuất:{" "}
            <strong className="text-[#262626]">
              {profile.weeklySessionsTarget} buổi / tuần
            </strong>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {DURATION_OPTIONS.map((opt) => {
            const isSelected = profile.durationMonths === opt.months;
            return (
              <button
                key={opt.months}
                type="button"
                onClick={() => handleDurationSelect(opt.months)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center justify-center rounded-xl border px-3 py-2.5 text-center transition-colors cursor-pointer ${
                  isSelected
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E]"
                }`}
              >
                <span className="text-sm font-semibold">{opt.label}</span>
                <span
                  className={`mt-0.5 text-[11px] ${
                    isSelected ? "text-white/75" : "text-[#737373]"
                  }`}
                >
                  {opt.paceLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. 4-Skill Weight Sliders */}
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              4. Tinh chỉnh tỷ trọng 4 kỹ năng
            </p>
            <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 text-xs font-medium text-[#262626]">
              Tổng {totalWeight}%
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={handleApplyHSK0Weights}
              className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#262626] transition-colors hover:bg-[#F2F2F0] cursor-pointer"
            >
              Chuẩn Mức 0 (50/30/15/5)
            </button>
            <button
              type="button"
              onClick={handleApplyGoalDefault}
              className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#262626] transition-colors hover:bg-[#F2F2F0] cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              Theo mục tiêu
            </button>
            <button
              type="button"
              onClick={handleEqualize}
              className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#262626] transition-colors hover:bg-[#F2F2F0] cursor-pointer"
            >
              <Equal className="h-3 w-3" />
              25% đều
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SKILL_META.map((skill) => {
            const Icon = skill.icon;
            const weight = profile.skillWeights[skill.key];
            return (
              <div
                key={skill.key}
                className="rounded-xl border border-[#E5E5E0] bg-white p-3.5"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#6B655E]" />
                    <span className="text-sm font-medium text-[#262626]">
                      {skill.label}
                    </span>
                    <span className="text-xs text-[#737373]">
                      {skill.labelZh}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[#262626]">
                    {weight}%
                  </span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={weight}
                  aria-label={`Tỷ trọng kỹ năng ${skill.label}`}
                  onChange={(e) =>
                    handleSliderChange(skill.key, Number(e.target.value))
                  }
                  className={`h-1.5 w-full cursor-pointer rounded-lg bg-[#E5E5E0] ${skill.accentClass}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
