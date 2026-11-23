"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, Sparkles, X } from "lucide-react";
import {
  EDITORIAL_EASE,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionPrimitives";
import {
  UnifiedFilterBar,
  type UnifiedOption,
} from "@/components/ui/UnifiedFilterBar";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import { getResourcesByCategory } from "@/data/resources";
import { ALL_STUDY_SESSIONS, ROADMAP_STAGES } from "@/data/roadmap";
import {
  DEFAULT_GOAL_PROFILE,
  getCompletedSessionIds,
  getUserGoalProfile,
  saveUserGoalProfile,
  setHSKLevel,
  subscribeStorageUpdates,
} from "@/lib/storage";
import type { HSKLevel, RoadmapStage, StudySession, UserGoalProfile } from "@/types";
import {
  GOAL_OPTIONS,
  PersonalizationPanel,
  STARTING_LEVEL_OPTIONS,
} from "./PersonalizationPanel";
import {
  StageTimeline,
  type CompletionFilter,
  type SubDifficultyFilter,
} from "./StageTimeline";

const SUB_DIFFICULTY_OPTIONS: UnifiedOption<SubDifficultyFilter>[] = [
  { value: "all", label: "Tất cả mức", shortLabel: "Độ khó" },
  { value: "basic", label: "Cơ bản", shortLabel: "Cơ bản" },
  { value: "advanced", label: "Nâng cao", shortLabel: "Nâng cao" },
];

const COMPLETION_OPTIONS: UnifiedOption<CompletionFilter>[] = [
  { value: "all", label: "Tất cả trạng thái", shortLabel: "Lọc" },
  { value: "todo", label: "Chưa học", shortLabel: "Chưa học" },
  { value: "done", label: "Đã xong", shortLabel: "Đã xong" },
];

export function RoadmapClient() {
  const [profile, setProfile] = useState<UserGoalProfile>(DEFAULT_GOAL_PROFILE);
  const [completedSessionIds, setCompletedSessionIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [levelFilter, setLevelFilter] = useState<string>("ALL");
  const [subDifficultyFilter, setSubDifficultyFilter] =
    useState<SubDifficultyFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [completionFilter, setCompletionFilter] =
    useState<CompletionFilter>("all");

  useEffect(() => {
    const syncFromStorage = () => {
      setProfile(getUserGoalProfile());
      setCompletedSessionIds(getCompletedSessionIds());
    };
    syncFromStorage();
    return subscribeStorageUpdates(syncFromStorage);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const handleProfileChange = (next: UserGoalProfile) => {
    setProfile(next);
    saveUserGoalProfile(next);
    setHSKLevel(next.startingLevel);
  };

  const handleQuickStartingLevelChange = (startingLevel: HSKLevel) => {
    const startOpt = STARTING_LEVEL_OPTIONS.find(
      (o) => o.level === startingLevel
    );
    const next: UserGoalProfile = {
      ...profile,
      startingLevel,
      skillWeights: startOpt?.recommendedWeights
        ? { ...startOpt.recommendedWeights }
        : profile.skillWeights,
    };
    handleProfileChange(next);
    setLevelFilter(
      ["HSK7", "HSK8", "HSK9"].includes(startingLevel)
        ? "HSK7-9"
        : startingLevel
    );
  };

  const sessionsList: StudySession[] = Array.isArray(ALL_STUDY_SESSIONS)
    ? (ALL_STUDY_SESSIONS as StudySession[])
    : [];
  const stagesList: RoadmapStage[] = Array.isArray(ROADMAP_STAGES)
    ? (ROADMAP_STAGES as RoadmapStage[])
    : [];
  const totalSessions = sessionsList.length;
  const completedCount = sessionsList.filter((s: StudySession) =>
    completedSessionIds.includes(s.id)
  ).length;
  const progressPercent =
    totalSessions > 0 ? Math.round((completedCount / totalSessions) * 100) : 0;

  const activeGoalMeta =
    GOAL_OPTIONS.find((g) => g.id === profile.goal) ?? GOAL_OPTIONS[0];
  const activeStartMeta =
    STARTING_LEVEL_OPTIONS.find((s) => s.level === profile.startingLevel) ??
    STARTING_LEVEL_OPTIONS[0];

  return (
    <StaggerContainer className="mx-auto w-full max-w-4xl min-w-0 space-y-5 overflow-x-clip px-4 py-8 sm:px-6">
      {/* Minimalist Page Header */}
      <StaggerItem className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
            Lộ trình 10 Chặng · Mức 0 (HSK0) → HSK 9
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#262626] sm:text-3xl">
            Lộ trình học tiếng Trung cá nhân hóa
          </h1>
          <p className="mt-1 text-sm text-[#737373]">
            {completedCount}/{totalSessions} buổi đã hoàn thành ({progressPercent}%) · Xuất phát:{" "}
            <strong className="text-[#262626]">{activeStartMeta.label}</strong> ·{" "}
            {profile.weeklySessionsTarget} buổi/tuần
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 self-start rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 text-sm font-medium text-[#262626] transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer sm:self-auto"
        >
          <SlidersHorizontal className="h-4 w-4 text-[#6B655E]" />
          Cá nhân hóa mục tiêu &amp; Xuất phát
        </button>
      </StaggerItem>

      {/* Subtle Progress Bar */}
      <StaggerItem className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E5E0]">
        <div
          className="h-full rounded-full bg-[#6B655E] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </StaggerItem>

      {/* Personalization Summary Banner (Starting Level + Goal Weights) */}
      <StaggerItem className="rounded-2xl border border-[#E5E5E0] bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B655E]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hồ sơ lộ trình hiện tại: {activeGoalMeta.label}</span>
            </div>
            <p className="text-xs text-[#737373]">
              Tỷ trọng 4 kỹ năng:{" "}
              <strong className="text-[#262626]">
                {profile.skillWeights.listening}% Nghe (听力) ·{" "}
                {profile.skillWeights.speaking}% Nói (口语) ·{" "}
                {profile.skillWeights.reading}% Đọc (阅读) ·{" "}
                {profile.skillWeights.writing}% Viết (写作)
              </strong>
            </p>
          </div>

          {/* Quick Starting Level Switcher */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="quick-starting-level"
              className="text-xs font-medium text-[#737373] shrink-0"
            >
              Xuất phát từ:
            </label>
            <select
              id="quick-starting-level"
              value={profile.startingLevel}
              onChange={(e) =>
                handleQuickStartingLevelChange(e.target.value as HSKLevel)
              }
              className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1.5 text-xs font-semibold text-[#262626] focus:border-[#6B655E] focus:outline-none cursor-pointer"
            >
              {STARTING_LEVEL_OPTIONS.map((opt) => (
                <option key={opt.level} value={opt.level}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </StaggerItem>

      {/* Unified Single-Row Filter Bar: Search + Grouped HSK + Difficulty + Status */}
      <StaggerItem>
        <UnifiedFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Tìm bài học, chữ Hán, Pinyin..."
          hskLevel={levelFilter}
          onHskLevelChange={setLevelFilter}
          allowAllLevel
          difficulty={subDifficultyFilter}
          onDifficultyChange={(v) =>
            setSubDifficultyFilter(v as SubDifficultyFilter)
          }
          difficultyOptions={SUB_DIFFICULTY_OPTIONS}
          status={completionFilter}
          onStatusChange={(v) => setCompletionFilter(v as CompletionFilter)}
          statusOptions={COMPLETION_OPTIONS}
        />
      </StaggerItem>

      {/* Accordion Timeline */}
      <FadeInUp delay={0.08}>
        <StageTimeline
          stages={stagesList}
          sessions={sessionsList}
          completedSessionIds={completedSessionIds}
          skillWeights={profile.skillWeights}
          startingLevel={profile.startingLevel}
          levelFilter={levelFilter}
          subDifficultyFilter={subDifficultyFilter}
          searchQuery={searchQuery}
          completionFilter={completionFilter}
          onClearFilters={() => {
            setLevelFilter("ALL");
            setSubDifficultyFilter("all");
            setSearchQuery("");
            setCompletionFilter("all");
          }}
        />
      </FadeInUp>

      <FadeInUp>
        <ResourceBanner
          resources={getResourcesByCategory(["textbooks", "slides"])}
          heading="Giáo trình chuẩn HSK 1–6 & 40 Slide 301 Câu Đàm Thoại (Google Drive)"
        />
      </FadeInUp>

      {/* Personalization Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="personalize-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E5E5E0] bg-white shadow-xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E5E5E0] bg-white px-6 py-4">
                <div>
                  <h2
                    id="personalize-modal-title"
                    className="text-base font-semibold text-[#262626]"
                  >
                    Cá nhân hóa cấp độ xuất phát &amp; Tỷ trọng 4 kỹ năng
                  </h2>
                  <p className="text-xs text-[#737373]">
                    Chọn bắt đầu từ Mức 0 (Chưa biết gì) hoặc bất kỳ cấp HSK 1–9 nào. Thay đổi được lưu tự động.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Đóng"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#737373] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <PersonalizationPanel
                  profile={profile}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="flex justify-end border-t border-[#E5E5E0] bg-[#F2F2F0]/50 px-6 py-3.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl bg-brand px-5 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-hover cursor-pointer"
                >
                  Xong
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StaggerContainer>
  );
}
