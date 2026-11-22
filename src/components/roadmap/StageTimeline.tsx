"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Award, Check, ChevronDown, Headphones, Mic, BookOpen, PenTool } from "lucide-react";
import type {
  RoadmapStage,
  SkillType,
  SkillWeights,
  StudySession,
  SubDifficulty,
} from "@/types";

export type CompletionFilter = "all" | "todo" | "done";
export type SubDifficultyFilter = "all" | SubDifficulty;

export interface StageTimelineProps {
  stages: RoadmapStage[];
  sessions: StudySession[];
  completedSessionIds: string[];
  skillWeights: SkillWeights;
  levelFilter?: string;
  subDifficultyFilter?: SubDifficultyFilter;
  searchQuery?: string;
  completionFilter?: CompletionFilter;
  onClearFilters?: () => void;
}

const SKILL_BADGE_META: Record<
  SkillType,
  { label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  listening: { label: "听力 · Nghe", icon: Headphones },
  speaking: { label: "口语 · Nói", icon: Mic },
  reading: { label: "阅读 · Đọc", icon: BookOpen },
  writing: { label: "写作 · Viết", icon: PenTool },
};

function isCheckpointSession(session: StudySession): boolean {
  const lowerId = session.id.toLowerCase();
  const lowerTitle = session.title.toLowerCase();
  return (
    lowerId.includes("checkpoint") ||
    lowerId.includes("exam") ||
    lowerTitle.includes("kiểm tra") ||
    lowerTitle.includes("checkpoint") ||
    lowerTitle.includes("đánh giá năng lực")
  );
}

export function StageTimeline({
  stages,
  sessions,
  completedSessionIds,
  levelFilter = "ALL",
  subDifficultyFilter = "all",
  searchQuery = "",
  completionFilter = "all",
  onClearFilters,
}: StageTimelineProps) {
  const sessionMap = useMemo(
    () => new Map<string, StudySession>(sessions.map((s) => [s.id, s])),
    [sessions]
  );

  // Preserve global 01..40 numbering across all sessions
  const globalIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    let idx = 0;
    for (const stage of stages) {
      for (const id of stage.sessionIds) {
        if (sessionMap.has(id) && !map.has(id)) {
          idx += 1;
          map.set(id, idx);
        }
      }
    }
    return map;
  }, [stages, sessionMap]);

  const completedSet = useMemo(
    () => new Set(completedSessionIds),
    [completedSessionIds]
  );

  const [openStages, setOpenStages] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(stages.map((s) => [s.id, true]))
  );

  const toggleStage = (id: number) => {
    setOpenStages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredStages = useMemo(() => {
    return stages
      .filter((stage) => {
        if (levelFilter === "ALL") return true;
        if (levelFilter === "HSK7-9") {
          return (
            stage.hskLevel === "HSK7" ||
            stage.hskLevel === "HSK8" ||
            stage.hskLevel === "HSK9"
          );
        }
        return stage.hskLevel.toUpperCase() === levelFilter.toUpperCase();
      })
      .map((stage) => {
        const allStageSessions = stage.sessionIds
          .map((id) => sessionMap.get(id))
          .filter((s): s is StudySession => Boolean(s));

        const visibleSessions = allStageSessions.filter((session) => {
          const isCompleted = completedSet.has(session.id);
          if (completionFilter === "done" && !isCompleted) return false;
          if (completionFilter === "todo" && isCompleted) return false;

          if (
            subDifficultyFilter !== "all" &&
            session.subDifficulty !== subDifficultyFilter
          ) {
            return false;
          }

          if (normalizedQuery) {
            const haystack = [
              session.title,
              session.titleZh,
              session.titlePinyin,
              ...(session.grammarNotesVi ?? []),
            ]
              .join(" ")
              .toLowerCase();
            if (!haystack.includes(normalizedQuery)) return false;
          }
          return true;
        });

        const completedCount = allStageSessions.filter((s) =>
          completedSet.has(s.id)
        ).length;
        const checkpointSession = allStageSessions.find((s) =>
          isCheckpointSession(s)
        );
        const isCheckpointPassed = checkpointSession
          ? completedSet.has(checkpointSession.id)
          : false;

        return {
          stage,
          allCount: allStageSessions.length,
          completedCount,
          isCheckpointPassed,
          visibleSessions,
        };
      })
      .filter((item) => item.visibleSessions.length > 0);
  }, [
    stages,
    levelFilter,
    subDifficultyFilter,
    sessionMap,
    completedSet,
    completionFilter,
    normalizedQuery,
  ]);

  if (filteredStages.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E5E5E0] bg-white px-6 py-12 text-center">
        <p className="text-sm font-medium text-[#262626]">
          Không tìm thấy buổi học nào phù hợp với bộ lọc hiện tại.
        </p>
        <p className="mt-1 text-xs text-[#737373]">
          Hãy thử đổi cấp độ HSK, mức Cơ bản/Nâng cao, từ khóa tìm kiếm hoặc trạng thái hoàn thành.
        </p>
        {onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-4 inline-flex items-center rounded-xl bg-[#292524] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540] cursor-pointer"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredStages.map(
        ({ stage, allCount, completedCount, isCheckpointPassed, visibleSessions }) => {
          const isStageDone = allCount > 0 && completedCount === allCount;
          const stagePercent =
            allCount > 0 ? Math.round((completedCount / allCount) * 100) : 0;
          const isOpen = openStages[stage.id] ?? true;

          return (
            <section
              key={stage.id}
              className="overflow-hidden rounded-2xl border border-[#E5E5E0] bg-white"
            >
              {/* Stage Accordion Header */}
              <button
                type="button"
                onClick={() => toggleStage(stage.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F2F2F0]/50 cursor-pointer sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isStageDone
                        ? "bg-[#F0FDF4] text-[#15803D] border border-[#15803D]/25"
                        : "bg-[#292524] text-white"
                    }`}
                  >
                    {isStageDone ? (
                      <Check className="h-4 w-4" />
                    ) : stage.hskLevel === "HSK0" ? (
                      "M0"
                    ) : (
                      stage.hskLevel.replace("HSK", "H")
                    )}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-base font-semibold text-[#262626]">
                        {stage.title}
                      </h2>
                      <span className="rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                        {stage.vocabTarget}
                      </span>
                      {isCheckpointPassed && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
                          <Award className="h-3 w-3" />
                          Đạt Checkpoint
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-[#737373]">
                      {["HSK7", "HSK8", "HSK9"].includes(stage.hskLevel)
                        ? `HSK 7–9 · Cao cấp · ${stage.monthsLabel} · ${stage.subtitle}`
                        : `${stage.levelRange} · ${stage.monthsLabel} · ${stage.subtitle}`}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <div className="hidden items-center gap-2 sm:flex">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#E5E5E0]">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isStageDone ? "bg-[#15803D]" : "bg-[#6B655E]"
                        }`}
                        style={{ width: `${stagePercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[#737373]">
                      {completedCount}/{allCount}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#737373] sm:hidden">
                    {completedCount}/{allCount}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#737373] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Clean Session Rows */}
              {isOpen && (
                <div className="divide-y divide-[#E5E5E0] border-t border-[#E5E5E0]">
                  {visibleSessions.map((session) => {
                    const globalIdx = globalIndexMap.get(session.id) ?? 0;
                    const numLabel = String(globalIdx).padStart(2, "0");
                    const isCompleted = completedSet.has(session.id);
                    const isCheckpoint = isCheckpointSession(session);
                    const skillMeta = SKILL_BADGE_META[session.skillFocus];
                    const SkillIcon = skillMeta.icon;

                    return (
                      <div
                        key={session.id}
                        className={`flex min-w-0 max-w-full items-center justify-between gap-2.5 px-3.5 py-3.5 transition-colors sm:gap-4 sm:px-6 ${
                          isCheckpoint
                            ? "bg-[#FAF9F7] hover:bg-[#F2F2F0]/80"
                            : "hover:bg-[#F2F2F0]/40"
                        }`}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3.5">
                          {/* Number */}
                          <span className="hidden w-6 shrink-0 font-mono text-xs text-[#737373] sm:inline-block">
                            {numLabel}
                          </span>

                          {/* Completion status / Checkpoint icon */}
                          {isCompleted ? (
                            <span
                              title="Đã hoàn thành"
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4] text-[#15803D]"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </span>
                          ) : isCheckpoint ? (
                            <span
                              title="Kiểm tra năng lực chặng"
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#292524] text-white"
                            >
                              <Award className="h-3 w-3" />
                            </span>
                          ) : (
                            <span
                              title="Chưa học"
                              className="flex h-5 w-5 shrink-0 items-center justify-center"
                            >
                              <span className="h-2 w-2 rounded-full bg-[#E5E5E0]" />
                            </span>
                          )}

                          {/* Title & Chinese / Pinyin */}
                          <div className="min-w-0 flex-1">
                            <div className="flex min-w-0 flex-wrap items-center gap-1.5 sm:gap-2">
                              {session.lessonNumber !== undefined && (
                                <span className="inline-flex shrink-0 items-center rounded-full bg-[#292524] px-2 py-0.5 text-[10px] font-bold text-white">
                                  Bài {session.lessonNumber}
                                </span>
                              )}
                              <p className="min-w-0 truncate text-sm font-medium text-[#262626]">
                                {session.title}
                              </p>
                              <span className="hidden items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-2 py-0.5 text-[10px] font-semibold text-[#4A4540] sm:inline-flex">
                                <SkillIcon className="h-3 w-3 text-[#6B655E]" />
                                {skillMeta.label}
                              </span>
                              <span className="hidden rounded-full bg-[#F2F2F0] px-2 py-0.5 text-[10px] font-medium text-[#6B655E] sm:inline-block">
                                {session.subDifficulty === "basic"
                                  ? "Cơ bản"
                                  : "Nâng cao"}
                              </span>
                              {session.newWords && session.newWords.length > 0 && (
                                <span className="hidden items-center rounded-full border border-[#E5E5E0] bg-white px-2 py-0.5 text-[10px] font-medium text-[#6B655E] sm:inline-flex">
                                  {session.newWords.length} từ mới
                                </span>
                              )}
                              {session.dialogues && session.dialogues.length > 0 && (
                                <span className="hidden items-center rounded-full border border-[#E5E5E0] bg-white px-2 py-0.5 text-[10px] font-medium text-[#6B655E] sm:inline-flex">
                                  {session.dialogues.length} bài khóa
                                </span>
                              )}
                            </div>
                            <p className="truncate text-xs text-[#737373]">
                              <span className="font-medium text-[#4A4540]">
                                {session.titleZh}
                              </span>{" "}
                              · <span>{session.titlePinyin}</span>
                            </p>
                          </div>
                        </div>

                        {/* Single Action Button */}
                        <Link
                          href={`/study/${session.id}`}
                          className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:px-3.5 ${
                            isCompleted
                              ? "border border-[#E5E5E0] bg-white text-[#262626] hover:bg-[#F2F2F0]"
                              : isCheckpoint
                              ? "bg-[#292524] text-white hover:bg-[#4A4540]"
                              : "bg-[#6B655E] text-white hover:bg-[#4A4540]"
                          }`}
                        >
                          Vào học
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        }
      )}
    </div>
  );
}
