"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  Headphones,
  Mic,
  PenTool,
  PlayCircle,
  Search,
  Sparkles,
  Youtube,
} from "lucide-react";
import { YOUTUBE_CHANNELS } from "@/data/youtube-channels";
import { ALL_STUDY_SESSIONS } from "@/data/roadmap";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { SkillType, StudySession, YouTubeChannel } from "@/types";

interface SkillTab {
  id: SkillType;
  label: string;
  shortLabel: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SKILL_TABS: SkillTab[] = [
  {
    id: "listening",
    label: "Nghe - 听力 (Listening)",
    shortLabel: "听力 · Nghe",
    subtitle: "5 kênh luyện nghe Pinyin, hội thoại thực tế & đề thi HSK",
    icon: Headphones,
  },
  {
    id: "speaking",
    label: "Nói - 口语 (Speaking)",
    shortLabel: "口语 · Nói",
    subtitle: "5 kênh chuẩn hóa 4 thanh điệu, âm bật hơi & phản xạ giao tiếp",
    icon: Mic,
  },
  {
    id: "reading",
    label: "Đọc - 阅读 (Reading)",
    shortLabel: "阅读 · Đọc",
    subtitle: "5 kênh đọc hiểu chữ Hán song ngữ, bộ thủ & ngữ pháp HSK 1–9",
    icon: BookOpen,
  },
  {
    id: "writing",
    label: "Viết & Chữ Hán - 写作 (Writing)",
    shortLabel: "写作 · Viết",
    subtitle: "5 kênh quy tắc bút thuận chữ Hán, đặt câu & viết luận HSK",
    icon: PenTool,
  },
];

function findMatchingSessionId(channel: YouTubeChannel): string {
  const sessions: StudySession[] = Array.isArray(ALL_STUDY_SESSIONS)
    ? (ALL_STUDY_SESSIONS as StudySession[])
    : [];
  const exactMatch = sessions.find(
    (session: StudySession) => session.recommendedChannelId === channel.id
  );
  if (exactMatch) return exactMatch.id;

  const skillMatch = sessions.find(
    (session: StudySession) => session.skillFocus === channel.skill
  );
  if (skillMatch) return skillMatch.id;

  return sessions[0]?.id ?? "s0-pinyin-tones";
}

export function YouTubeHubClient() {
  const [activeSkill, setActiveSkill] = useState<SkillType>("listening");
  const [searchQuery, setSearchQuery] = useState("");

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const channelsList = useMemo<YouTubeChannel[]>(
    () =>
      Array.isArray(YOUTUBE_CHANNELS)
        ? (YOUTUBE_CHANNELS as YouTubeChannel[])
        : [],
    []
  );

  const filteredChannels = useMemo(() => {
    return channelsList.filter((channel) => {
      if (trimmedQuery) {
        const haystack =
          `${channel.name} ${channel.descriptionVi} ${channel.levelTag} ${channel.sampleVideoTitle}`.toLowerCase();
        return haystack.includes(trimmedQuery);
      }
      return channel.skill === activeSkill;
    });
  }, [activeSkill, trimmedQuery, channelsList]);

  const activeTabInfo = SKILL_TABS.find((t) => t.id === activeSkill)!;

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12">
      {/* Minimalist Header */}
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-3 py-1 text-xs font-semibold text-[#4A4540]">
              <Youtube className="h-3.5 w-3.5 text-[#6B655E]" />
              <span>Kho 20 Kênh YouTube Tiếng Trung Cho Người Việt</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
              YouTube Chinese Learning Hub
            </h1>
            <p className="text-sm leading-relaxed text-[#737373] sm:text-base">
              Tuyển chọn 20 kênh YouTube dạy tiếng Trung uy tín nhất tại Việt Nam
              chia theo 4 kỹ năng{" "}
              <strong className="text-[#262626]">
                听力 (Nghe) · 口语 (Nói) · 阅读 (Đọc) · 写作 (Viết)
              </strong>
              . Chọn kênh yêu thích, mở video bài giảng đã kiểm chứng và vào ngay
              Phòng tự học để làm bài tập khớp 100% kỹ năng.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0]/60 px-4 py-3 text-center">
              <div className="text-2xl font-bold text-[#262626]">
                {channelsList.length || 20}
              </div>
              <div className="text-xs text-[#737373]">Kênh tuyển chọn</div>
            </div>
            <div className="rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0]/60 px-4 py-3 text-center">
              <div className="text-2xl font-bold text-[#262626]">4</div>
              <div className="text-xs text-[#737373]">Kỹ năng HSK 0–9</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Skill Tabs */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm trong 20 kênh theo tên (Dương Châu, Cầm Xu, 518, SOFL...), trình độ (HSK0–HSK9)..."
            className="w-full rounded-2xl border border-[#E5E5E0] bg-white py-3 pl-10 pr-16 text-sm text-[#262626] transition-colors placeholder:text-[#737373] focus:border-[#4A4540] focus:outline-none focus:ring-2 focus:ring-[#6B655E]/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-medium text-[#737373] hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
            >
              Xóa
            </button>
          )}
        </div>

        {/* 4 Skill Tabs */}
        <div
          role="tablist"
          aria-label="Phân loại kênh theo 4 kỹ năng"
          className="grid grid-cols-2 gap-2.5 lg:grid-cols-4"
        >
          {SKILL_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = !trimmedQuery && activeSkill === tab.id;
            const count = channelsList.filter((c) => c.skill === tab.id).length;

            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  setActiveSkill(tab.id);
                  if (trimmedQuery) setSearchQuery("");
                }}
                className={`flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                  isActive
                    ? "border-[#292524] bg-[#292524] text-white shadow-sm"
                    : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]/60"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-[#F2F2F0] text-[#4A4540]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-bold">{tab.label}</div>
                  <div
                    className={`text-xs ${
                      isActive ? "text-[#E5E5E0]" : "text-[#737373]"
                    }`}
                  >
                    {count} kênh YouTube
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-[#262626]">
            {trimmedQuery
              ? `Kết quả tìm kiếm cho "${searchQuery.trim()}" (${filteredChannels.length})`
              : activeTabInfo.label}
          </h2>
          {!trimmedQuery && (
            <p className="text-sm text-[#737373]">{activeTabInfo.subtitle}</p>
          )}
        </div>
        <Badge variant="accent" className="gap-1">
          <Sparkles className="h-3.5 w-3.5" />
          Học kèm bài tập chuyên biệt theo kỹ năng
        </Badge>
      </div>

      {/* Channels Grid */}
      {filteredChannels.length === 0 ? (
        <Card className="border-[#E5E5E0] bg-white p-10 text-center">
          <p className="text-base font-semibold text-[#262626]">
            Không tìm thấy kênh YouTube phù hợp.
          </p>
          <p className="mt-1 text-sm text-[#737373]">
            Thử từ khóa khác như &quot;HSK&quot;, &quot;Dương Châu&quot;, &quot;Cầm Xu&quot; hoặc xóa bộ lọc tìm kiếm.
          </p>
          <div className="mt-4">
            <Button variant="secondary" onClick={() => setSearchQuery("")}>
              Xem lại tất cả kênh
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredChannels.map((channel) => {
            const matchingSessionId = findMatchingSessionId(channel);
            const skillMeta = SKILL_TABS.find((t) => t.id === channel.skill);
            const SkillIcon = skillMeta?.icon ?? Youtube;

            return (
              <Card
                key={channel.id}
                hoverable
                className="flex flex-col justify-between overflow-hidden border-[#E5E5E0] bg-white"
              >
                <div>
                  <CardHeader className="pb-2">
                    <div className="mb-2.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#4A4540]">
                          <SkillIcon className="h-4.5 w-4.5" />
                        </span>
                        <Badge variant="outline">
                          {skillMeta?.shortLabel ?? channel.skill}
                        </Badge>
                      </div>
                      <Badge variant="default">{channel.levelTag}</Badge>
                    </div>
                    <CardTitle className="text-base leading-snug text-[#262626]">
                      {channel.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-2 pt-1">
                    <p className="text-sm leading-relaxed text-[#737373]">
                      {channel.descriptionVi}
                    </p>
                    {channel.sampleVideoTitle && (
                      <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-2 text-xs text-[#4A4540]">
                        <span className="font-semibold text-[#6B655E]">
                          Bài giảng tiêu biểu:{" "}
                        </span>
                        <span>{channel.sampleVideoTitle}</span>
                      </div>
                    )}
                  </CardContent>
                </div>

                <CardFooter className="flex flex-col gap-2 border-t border-[#E5E5E0] bg-[#F2F2F0]/40">
                  <Link
                    href={`/study/${matchingSessionId}?channel=${encodeURIComponent(
                      channel.id
                    )}`}
                    className="w-full"
                  >
                    <Button variant="primary" size="sm" fullWidth>
                      <PlayCircle className="h-4 w-4" />
                      Học ngay với video từ kênh này
                    </Button>
                  </Link>

                  <a
                    href={channel.youtubeSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      <ExternalLink className="h-3.5 w-3.5" />
                      Mở kênh YouTube
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
