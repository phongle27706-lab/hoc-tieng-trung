"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Flame,
  GraduationCap,
  Headphones,
  Layers,
  Mic,
  Network,
  PenTool,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";
import { ALL_STUDY_SESSIONS } from "@/data/roadmap";
import {
  DEFAULT_USER_PROGRESS,
  getCompletedSessionIds,
  getCustomVocab,
  getUserProgress,
  subscribeStorageUpdates,
} from "@/lib/storage";
import type { StudySession, UserProgress } from "@/types";

const WEEK_DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"] as const;
const TOTAL_TICKS = 28;

type RoadmapRange = "week" | "month";
type ActivityFilter = "all" | "lesson" | "vocab";

interface ActivityItem {
  id: string;
  type: "lesson" | "vocab";
  title: string;
  meta: string;
  href: string;
}

const FALLBACK_SESSION: StudySession = {
  id: "s0-pinyin-tones",
  stageId: 0,
  hskLevel: "HSK0",
  subDifficulty: "basic",
  title: "Buổi 01: Làm chủ Pinyin, 4 Thanh điệu & Biến điệu thanh 3",
  titleZh: "第一课：拼音与声调入门",
  titlePinyin: "Dì yī kè: Pīnyīn yǔ shēngdiào rùmén",
  skillFocus: "listening",
  difficulty: "easy",
  estimatedMinutes: 25,
  recommendedChannelId: "yt-duong-chau",
  recommendedChannelName: "Tiếng Trung Dương Châu",
  youtubeUrl: "https://www.youtube.com/watch?v=c3v9b1fT5pA",
  defaultSearchQuery: "Học phát âm Pinyin 4 thanh điệu tiếng Trung Dương Châu",
  grammarNotesVi: ["Quy tắc 4 thanh điệu + thanh nhẹ", "Biến điệu hai thanh 3 đi liền (你好 → ní hǎo)"],
  exercises: [],
};

const SPRING_TRANSITION = { type: "spring" as const, stiffness: 360, damping: 28 };

export function DashboardView() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);
  const [completedSessions, setCompletedSessions] = useState<string[]>([]);
  const [savedVocabCount, setSavedVocabCount] = useState(0);

  const [roadmapRange, setRoadmapRange] = useState<RoadmapRange>("week");
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("all");
  const [weekOffset, setWeekOffset] = useState(0);

  const sync = useCallback(() => {
    const p = getUserProgress();
    setProgress(p);
    setCompletedSessions(getCompletedSessionIds());
    const customCount = getCustomVocab().length;
    setSavedVocabCount(
      new Set([
        ...p.savedVocabIds,
        ...Array.from({ length: customCount }, (_, i) => `c-${i}`),
      ]).size
    );
  }, []);

  useEffect(() => {
    sync();
    return subscribeStorageUpdates(sync);
  }, [sync]);

  const sessionsList = useMemo<StudySession[]>(
    () =>
      Array.isArray(ALL_STUDY_SESSIONS) && ALL_STUDY_SESSIONS.length > 0
        ? (ALL_STUDY_SESSIONS as StudySession[])
        : [FALLBACK_SESSION],
    []
  );

  const totalSessions = sessionsList.length || 40;
  const completedCount = completedSessions.length;
  const remainingCount = Math.max(0, totalSessions - completedCount);

  const nextSession = useMemo(
    () =>
      sessionsList.find((s) => !completedSessions.includes(s.id)) ??
      sessionsList[0] ??
      FALLBACK_SESSION,
    [completedSessions, sessionsList]
  );

  const greetingName = user?.username || "bạn";
  const dailyXp = progress.dailyXp ?? 0;
  const dailyTarget = progress.dailyXpTarget ?? 50;
  const dailyPercent = Math.min(100, Math.round((dailyXp / Math.max(dailyTarget, 1)) * 100));

  // Weekly 7-day bar chart data (minimal stone & taupe bars)
  const todayIdx = useMemo(() => {
    const jsDay = new Date().getDay();
    return jsDay === 0 ? 6 : jsDay - 1;
  }, []);

  const weeklyBars = useMemo(() => {
    const baseHeights = [34, 52, 46, 68, 58, 76, 42];
    const streak = Math.max(0, progress.streakDays);
    return WEEK_DAYS.map((day, idx) => {
      const isToday = idx === todayIdx;
      const daysAgo = todayIdx - idx;
      const isActive =
        isToday || (daysAgo > 0 && daysAgo < Math.max(streak, 1));
      const height = isToday
        ? Math.max(36, Math.min(100, dailyPercent || 64))
        : baseHeights[idx];
      return { day, idx, isToday, isActive, height };
    });
  }, [todayIdx, progress.streakDays, dailyPercent]);

  // Segmented vertical tick progress bar (28 ticks)
  const filledTicks = useMemo(() => {
    const ratio =
      roadmapRange === "week"
        ? Math.min(1, (completedCount + (dailyXp > 0 ? 1 : 0)) / Math.max(totalSessions, 1))
        : Math.min(1, completedCount / Math.max(totalSessions, 1));
    return Math.round(ratio * TOTAL_TICKS);
  }, [completedCount, totalSessions, roadmapRange, dailyXp]);

  // Weekly Calendar Strip dates based on weekOffset
  const calendarWeek = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay(); // 0=Sun..6=Sat
    const mondayDiff = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(now);
    monday.setHours(0, 0, 0, 0);
    monday.setDate(now.getDate() + mondayDiff + weekOffset * 7);

    const days = WEEK_DAYS.map((label, idx) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + idx);
      const isToday =
        d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate();
      return {
        label,
        dateNum: d.getDate(),
        isToday,
        key: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
      };
    });

    const headerDate = new Date(monday);
    headerDate.setDate(monday.getDate() + 3);
    const monthLabel = `Tháng ${headerDate.getMonth() + 1}, ${headerDate.getFullYear()}`;

    return { monthLabel, days };
  }, [weekOffset]);

  // 4 Skills
  const skills = [
    {
      label: "听力 Nghe",
      score: progress.skillScores.listening,
      href: "/listening",
      icon: Headphones,
    },
    {
      label: "口语 Nói",
      score: progress.skillScores.speaking,
      href: "/speaking",
      icon: Mic,
    },
    {
      label: "阅读 Đọc",
      score: progress.skillScores.reading,
      href: "/reading",
      icon: BookOpen,
    },
    {
      label: "写作 Viết",
      score: progress.skillScores.writing,
      href: "/writing",
      icon: PenTool,
    },
  ];

  // 3 Compact Horizontal Shortcuts
  const compactShortcuts = [
    {
      href: "/listening",
      title: "Nghe Dictation",
      subtitle: "Chép chính tả chữ Hán · 听力",
      icon: Headphones,
    },
    {
      href: "/vocab",
      title: "Mind Map Từ vựng & Viết chữ",
      subtitle: `${savedVocabCount} từ đã lưu · Ô Mễ tự cách 米字格`,
      icon: Network,
    },
    {
      href: "/exams",
      title: "Luyện đề HSK 1–9",
      subtitle: "Thi thử chuẩn HSK 3.0 & chấm điểm",
      icon: GraduationCap,
    },
  ];

  // Recent Activity Feed
  const activityItems: ActivityItem[] = useMemo(() => {
    const recentCompleted = sessionsList
      .filter((s) => completedSessions.includes(s.id))
      .slice(-2)
      .reverse()
      .map((s) => ({
        id: `session-${s.id}`,
        type: "lesson" as const,
        title: s.title,
        meta: "Bài học · Đã hoàn thành",
        href: `/study/${s.id}`,
      }));

    const fallbackLessons: ActivityItem[] =
      recentCompleted.length > 0
        ? recentCompleted
        : [
            {
              id: `next-${nextSession.id}`,
              type: "lesson",
              title: nextSession.title,
              meta: "Bài học · Đang mở hôm nay",
              href: `/study/${nextSession.id}`,
            },
          ];

    const vocabItems: ActivityItem[] = [
      {
        id: "vocab-srs",
        type: "vocab",
        title: "Ôn tập thẻ SRS & Viết chữ Hán",
        meta: `Từ vựng · ${savedVocabCount} từ trong sổ`,
        href: "/vocab",
      },
      {
        id: "vocab-mindmap",
        type: "vocab",
        title: "Mở rộng 15 chủ đề Mind Map HSK",
        meta: "Từ vựng · Chấm nét & Đặt 2 câu",
        href: "/vocab",
      },
    ];

    return [...fallbackLessons, ...vocabItems];
  }, [completedSessions, nextSession, savedVocabCount, sessionsList]);

  const filteredActivities = useMemo(() => {
    if (activityFilter === "all") return activityItems;
    return activityItems.filter((item) => item.type === activityFilter);
  }, [activityItems, activityFilter]);

  const srsDueCount = savedVocabCount > 0 ? Math.min(savedVocabCount, 12) : 0;

  return (
    <div className="mx-auto max-w-6xl pb-10">
      {/* Asymmetric 2-Column Bento Layout: Desktop ~68% / ~32%, Mobile stack */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,68fr)_minmax(0,32fr)] gap-5 items-start">
        {/* ================= LEFT COLUMN (~68%) ================= */}
        <div className="space-y-5 min-w-0">
          {/* 1. Dark Hero Banner */}
          <motion.section
            whileHover={{ y: -3 }}
            transition={SPRING_TRANSITION}
            className="rounded-3xl bg-[#262626] text-[#F2F2F0] p-6 sm:p-7 shadow-[0_8px_24px_-12px_rgba(38,38,38,0.35)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-2 min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-[#E5E5E0]">
                  <Sparkles className="h-3.5 w-3.5 text-[#D6D3CD]" />
                  <span>Lộ trình tiếng Trung HSK 0 → HSK 7–9</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                  你好, {greetingName}
                </h1>
                <p className="text-sm text-[#D6D3CD] leading-relaxed">
                  Bạn đã hoàn thành{" "}
                  <span className="font-semibold text-white">
                    {completedCount}/{totalSessions} buổi
                  </span>
                  . Tiếp tục giữ nhịp với{" "}
                  <span className="font-medium text-[#F2F2F0]">{nextSession.title}</span>.
                </p>
              </div>

              <div className="shrink-0">
                <Link href={`/study/${nextSession.id}`}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING_TRANSITION}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F2F2F0] text-[#262626] px-5 py-3 text-sm font-semibold hover:bg-white transition-colors w-full sm:w-auto"
                  >
                    <span>Học tiếp bài hôm nay</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* 2. Middle Row (3 equal Bento cards) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Gia sư AI BaoBao & Minh/Linh 3D Live Call */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_TRANSITION}
              className="rounded-3xl border border-[#E5E5E0] bg-white p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                    Gia sư AI BaoBao (包包)
                  </span>
                  <PhoneCall className="h-4 w-4 text-[#6B655E]" />
                </div>

                {/* Mini Minh Long & Bảo Linh badges */}
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-2.5 py-1">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#262626] text-[10px] font-bold text-[#F2F2F0]">
                      明
                    </span>
                    <span className="text-xs font-semibold text-[#262626]">Minh Long</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-2.5 py-1">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6B655E] text-[10px] font-bold text-white">
                      宝
                    </span>
                    <span className="text-xs font-semibold text-[#262626]">Bảo Linh</span>
                  </div>
                </div>

                <p className="text-xs text-[#6B655E] leading-relaxed">
                  Luyện phản xạ nói tiếng Trung &amp; chấm 4 thanh điệu trực tiếp cùng gia sư AI 3D.
                </p>
              </div>

              <Link href="/ai-tutor" className="block">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-between rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-4 py-2 text-xs font-semibold text-[#262626] hover:border-[#6B655E] hover:bg-[#262626] hover:text-[#F2F2F0] transition-colors"
                >
                  <span>Live Call ngay</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Card 2: Chỉ số XP & Từ vựng */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_TRANSITION}
              className="rounded-3xl border border-[#E5E5E0] bg-white p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                    Chỉ số XP &amp; Từ vựng
                  </span>
                  <Flame className="h-4 w-4 text-[#6B655E]" />
                </div>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight text-[#262626]">
                    {progress.xp.toLocaleString("vi-VN")}
                  </span>
                  <span className="text-xs font-semibold text-[#6B655E]">XP</span>
                </div>

                {/* Thin progress bar */}
                <div className="mt-3 space-y-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F0]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(dailyPercent, 8)}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[#262626]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#6B655E]">
                    <span>Hôm nay {dailyXp} XP</span>
                    <span>Mục tiêu {dailyTarget}</span>
                  </div>
                </div>
              </div>

              {/* 3 small sub-metrics */}
              <div className="grid grid-cols-3 gap-1.5 border-t border-[#E5E5E0] pt-3 text-center">
                <div>
                  <div className="text-xs font-bold text-[#262626]">{progress.streakDays}d</div>
                  <div className="text-[10px] text-[#6B655E]">Streak</div>
                </div>
                <div className="border-x border-[#E5E5E0]">
                  <div className="text-xs font-bold text-[#262626]">{progress.level}</div>
                  <div className="text-[10px] text-[#6B655E]">Level</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#262626]">{savedVocabCount}</div>
                  <div className="text-[10px] text-[#6B655E]">Saved</div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Tăng trưởng tuần */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_TRANSITION}
              className="rounded-3xl border border-[#E5E5E0] bg-white p-5 flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                  Tăng trưởng tuần
                </span>
                <span className="rounded-full bg-[#F2F2F0] px-2 py-0.5 text-[10px] font-semibold text-[#262626]">
                  7 ngày
                </span>
              </div>

              {/* Minimal rounded vertical bar chart */}
              <div className="flex items-end justify-between gap-2 h-24 pt-2">
                {weeklyBars.map((bar) => (
                  <div key={bar.day} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full flex items-end justify-center h-full">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.height}%` }}
                        transition={{ duration: 0.5, delay: bar.idx * 0.04 }}
                        className={`w-full max-w-[14px] rounded-full ${
                          bar.isToday
                            ? "bg-[#262626]"
                            : bar.isActive
                            ? "bg-[#6B655E]"
                            : "bg-[#E5E5E0]"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-medium ${
                        bar.isToday ? "font-bold text-[#262626]" : "text-[#6B655E]"
                      }`}
                    >
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 3. Bottom Row (2 sub-columns) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left: Tiến độ Lộ trình */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_TRANSITION}
              className="md:col-span-7 rounded-3xl border border-[#E5E5E0] bg-white p-5 flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold text-[#262626]">
                    Tiến độ Lộ trình (Mức 0 → HSK 9)
                  </h2>

                  {/* Tuần / Tháng pill toggle with layoutId */}
                  <div className="inline-flex rounded-full border border-[#E5E5E0] bg-[#F2F2F0] p-0.5">
                    {(
                      [
                        { id: "week", label: "Tuần" },
                        { id: "month", label: "Tháng" },
                      ] as const
                    ).map((tab) => {
                      const active = roadmapRange === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setRoadmapRange(tab.id)}
                          className={`relative rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                            active ? "text-[#F2F2F0]" : "text-[#6B655E] hover:text-[#262626]"
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="roadmapRangePill"
                              transition={SPRING_TRANSITION}
                              className="absolute inset-0 rounded-full bg-[#262626]"
                            />
                          )}
                          <span className="relative z-10">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Big count */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-[#262626]">
                    {completedCount} / {totalSessions}
                  </span>
                  <span className="text-sm font-medium text-[#6B655E]">buổi</span>
                </div>

                {/* Segmented vertical tick progress bar (28 ticks) */}
                <div className="flex items-center justify-between gap-1 py-1">
                  {Array.from({ length: TOTAL_TICKS }).map((_, idx) => {
                    const isFilled = idx < filledTicks;
                    return (
                      <span
                        key={idx}
                        className={`h-7 flex-1 rounded-full transition-colors ${
                          isFilled ? "bg-[#262626]" : "bg-[#E5E5E0]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* 2 mini stat boxes: Đã xong / Còn lại */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0] p-3.5">
                  <div className="text-[11px] font-medium text-[#6B655E]">Đã xong</div>
                  <div className="mt-1 text-lg font-bold text-[#262626]">
                    {completedCount} buổi
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0] p-3.5">
                  <div className="text-[11px] font-medium text-[#6B655E]">Còn lại</div>
                  <div className="mt-1 text-lg font-bold text-[#262626]">
                    {remainingCount} buổi
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: 2 stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Top dark #262626 card: Từ vựng cần ôn SRS hôm nay */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={SPRING_TRANSITION}
                className="rounded-3xl bg-[#262626] text-[#F2F2F0] p-5 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D6D3CD]">
                      SRS Hôm nay
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-white">
                      Chữ Hán cần ôn SRS hôm nay
                    </h3>
                  </div>
                  <BookMarked className="h-4 w-4 text-[#D6D3CD] shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-white">{srsDueCount}</span>
                    <span className="text-xs text-[#D6D3CD]">thẻ đến hạn</span>
                  </div>
                  <Link href="/vocab">
                    <motion.span
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#F2F2F0] px-4 py-1.5 text-xs font-semibold text-[#262626] hover:bg-white transition-colors"
                    >
                      Ôn ngay
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>

              {/* Bottom white card: Tiến độ 4 kỹ năng */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={SPRING_TRANSITION}
                className="rounded-3xl border border-[#E5E5E0] bg-white p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#262626]">
                    Tiến độ 4 kỹ năng
                  </h3>
                  <Layers className="h-4 w-4 text-[#6B655E]" />
                </div>

                <div className="space-y-2.5">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    const pct = Math.min(100, Math.max(0, skill.score));
                    return (
                      <Link key={skill.href} href={skill.href} className="block group">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="inline-flex items-center gap-1.5 font-medium text-[#262626] group-hover:text-[#6B655E] transition-colors">
                            <Icon className="h-3.5 w-3.5 text-[#6B655E]" />
                            {skill.label}
                          </span>
                          <span className="font-semibold text-[#6B655E]">{pct}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F0]">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(pct, 4)}%` }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-[#6B655E] group-hover:bg-[#262626] transition-colors"
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* ================= RIGHT COLUMN (~32%) ================= */}
        <div className="space-y-5 min-w-0">
          {/* 1. Weekly Calendar Strip */}
          <section className="rounded-3xl border border-[#E5E5E0] bg-white p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#262626]">
                {calendarWeek.monthLabel}
              </h2>
              <div className="flex items-center gap-1">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setWeekOffset((w) => w - 1)}
                  aria-label="Tuần trước"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E5E0] bg-[#F2F2F0] text-[#262626] hover:border-[#6B655E] cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setWeekOffset((w) => w + 1)}
                  aria-label="Tuần sau"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E5E0] bg-[#F2F2F0] text-[#262626] hover:border-[#6B655E] cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {calendarWeek.days.map((d) => (
                <div
                  key={d.key}
                  className={`flex flex-col items-center justify-center py-2.5 transition-colors ${
                    d.isToday
                      ? "bg-[#262626] text-white rounded-2xl shadow-sm"
                      : "rounded-2xl bg-[#F2F2F0]/60 text-[#262626]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-medium ${
                      d.isToday ? "text-[#D6D3CD]" : "text-[#6B655E]"
                    }`}
                  >
                    {d.label}
                  </span>
                  <span className="mt-1 text-xs font-bold">{d.dateNum}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. 3 Compact Horizontal Shortcuts */}
          <section className="space-y-2.5">
            {compactShortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="block">
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING_TRANSITION}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#E5E5E0] bg-white p-3.5 hover:border-[#6B655E] transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#262626]">
                      <Icon className="h-4 w-4 text-[#6B655E]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-[#262626] truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6B655E] truncate">{item.subtitle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#6B655E]" />
                  </motion.div>
                </Link>
              );
            })}
          </section>

          {/* 3. Hoạt động gần đây (Activity Feed) */}
          <section className="rounded-3xl border border-[#E5E5E0] bg-white p-5 space-y-4">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-[#262626]">
                Hoạt động gần đây
              </h2>

              {/* Filter tabs with layoutId */}
              <div className="inline-flex w-full rounded-full border border-[#E5E5E0] bg-[#F2F2F0] p-0.5">
                {(
                  [
                    { id: "all", label: "Tất cả" },
                    { id: "lesson", label: "Bài học" },
                    { id: "vocab", label: "Từ vựng" },
                  ] as const
                ).map((tab) => {
                  const active = activityFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActivityFilter(tab.id)}
                      className={`relative flex-1 rounded-full py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        active ? "text-[#F2F2F0]" : "text-[#6B655E] hover:text-[#262626]"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activityFilterPill"
                          transition={SPRING_TRANSITION}
                          className="absolute inset-0 rounded-full bg-[#262626]"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#E5E5E0]">
              {filteredActivities.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 py-3 first:pt-1 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#262626] truncate">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#6B655E] truncate">
                      {item.meta}
                    </p>
                  </div>
                  <Link href={item.href} className="shrink-0">
                    <motion.span
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-3 py-1 text-[11px] font-semibold text-[#262626] hover:bg-[#262626] hover:text-[#F2F2F0] hover:border-[#262626] transition-colors"
                    >
                      Mở lại
                    </motion.span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
