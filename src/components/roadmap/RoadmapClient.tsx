"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import {
  EDITORIAL_EASE,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionPrimitives";
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

const LEVEL_PILLS: { id: string; label: string }[] = [
  { id: "ALL", label: "Tất cả" },
  { id: "HSK0", label: "HSK 0" },
  { id: "HSK1", label: "HSK 1" },
  { id: "HSK2", label: "HSK 2" },
  { id: "HSK3", label: "HSK 3" },
  { id: "HSK4", label: "HSK 4" },
  { id: "HSK5", label: "HSK 5" },
  { id: "HSK6", label: "HSK 6" },
  { id: "HSK7-9", label: "HSK 7–9" },
];

const SUB_DIFFICULTY_OPTIONS: { id: SubDifficultyFilter; label: string }[] = [
  { id: "all", label: "Tất cả mức" },
  { id: "basic", label: "Cơ bản" },
  { id: "advanced", label: "Nâng cao" },
];

const COMPLETION_OPTIONS: { id: CompletionFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "todo", label: "Chưa học" },
  { id: "done", label: "Đã xong" },
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
    <StaggerContainer className="mx-auto w-full max-w-4xl min-w-0 space-y-6 overflow-x-hidden px-4 py-8 sm:px-6">
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

      {/* Level Filter Pills + SubDifficulty + Search + Completion Filter */}
      <StaggerItem className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4">
        {/* Level Pills (Tất cả, Mức 0, HSK 1..9) */}
        <div className="flex flex-wrap items-center gap-1.5">
          {LEVEL_PILLS.map((pill) => {
            const active = levelFilter === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => setLevelFilter(pill.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-[#292524] text-white"
                    : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-[#6B655E] hover:bg-[#F2F2F0]"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Search Input + SubDifficulty + Completion Filter */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm bài học, chữ Hán, Pinyin, bộ thủ, ngữ pháp..."
              className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] py-2 pl-9 pr-8 text-sm text-[#262626] placeholder:text-[#737373] transition-colors focus:border-[#6B655E] focus:bg-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Xóa tìm kiếm"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-[#737373] hover:text-[#262626] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Cơ bản / Nâng cao filter */}
            <div
              className="inline-flex shrink-0 items-center rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-1"
              role="group"
              aria-label="Lọc theo độ khó Cơ bản / Nâng cao"
            >
              {SUB_DIFFICULTY_OPTIONS.map((opt) => {
                const active = subDifficultyFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSubDifficultyFilter(opt.id)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-[#6B655E] text-white"
                        : "text-[#737373] hover:text-[#262626]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Completion status filter */}
            <div
              className="inline-flex shrink-0 items-center rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-1"
              role="group"
              aria-label="Lọc theo trạng thái hoàn thành"
            >
              {COMPLETION_OPTIONS.map((opt) => {
                const active = completionFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCompletionFilter(opt.id)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-[#292524] text-white"
                        : "text-[#737373] hover:text-[#262626]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </StaggerItem>

      {/* Accordion Timeline */}
      <FadeInUp delay={0.08}>
        <StageTimeline
          stages={stagesList}
          sessions={sessionsList}
          completedSessionIds={completedSessionIds}
          skillWeights={profile.skillWeights}
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
                  className="rounded-xl bg-[#292524] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4A4540] cursor-pointer"
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
