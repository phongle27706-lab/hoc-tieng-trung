"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookMarked,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Link2,
  NotebookPen,
  RotateCcw,
  Youtube,
} from "lucide-react";
import { extractYouTubeId } from "@/lib/youtube";
import {
  getSessionCustomVideo,
  getSessionNote,
  saveSessionCustomVideo,
  saveSessionNote,
} from "@/lib/storage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { SkillType, StudySession, YouTubeChannel } from "@/types";

export interface VideoLecturePanelProps {
  session: StudySession;
  overrideChannel?: YouTubeChannel;
  onProceedToExercises?: () => void;
}

const DEFAULT_VIDEO_IDS_BY_SKILL: Record<SkillType, readonly string[]> = {
  listening: ["c3v9b1fT5pA", "2X9eJF1n7zM", "b1H2K8yM9vQ"],
  speaking: ["2X9eJF1n7zM", "c3v9b1fT5pA", "b1H2K8yM9vQ"],
  reading: ["b1H2K8yM9vQ", "c3v9b1fT5pA", "2X9eJF1n7zM"],
  writing: ["c3v9b1fT5pA", "b1H2K8yM9vQ", "2X9eJF1n7zM"],
};

export function VideoLecturePanel({
  session,
  overrideChannel,
  onProceedToExercises,
}: VideoLecturePanelProps) {
  const [savedCustomUrl, setSavedCustomUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [urlError, setUrlError] = useState<string | null>(null);
  const [urlUpdated, setUrlUpdated] = useState(false);
  const [note, setNote] = useState("");
  const [noteSavedStatus, setNoteSavedStatus] = useState<
    "idle" | "saving" | "saved"
  >("idle");
  const [grammarOpen, setGrammarOpen] = useState(true);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const storedUrl = getSessionCustomVideo(session.id);
    setSavedCustomUrl(storedUrl);
    setInputUrl(storedUrl);
    setUrlError(null);
    setUrlUpdated(false);
    setNote(getSessionNote(session.id));
    setNoteSavedStatus("idle");
  }, [session.id, session.skillFocus]);

  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  const skillVideoIds =
    DEFAULT_VIDEO_IDS_BY_SKILL[session.skillFocus] ??
    DEFAULT_VIDEO_IDS_BY_SKILL.listening;

  const customVideoId = useMemo(
    () => extractYouTubeId(savedCustomUrl),
    [savedCustomUrl]
  );
  const isUsingCustomVideo = Boolean(customVideoId);

  const overrideVideoId = useMemo(
    () =>
      overrideChannel?.sampleVideoUrl
        ? extractYouTubeId(overrideChannel.sampleVideoUrl)
        : null,
    [overrideChannel]
  );

  const sessionVideoId = useMemo(
    () => extractYouTubeId(session.youtubeUrl),
    [session.youtubeUrl]
  );

  const activeVideoId =
    customVideoId ?? overrideVideoId ?? sessionVideoId ?? skillVideoIds[0];

  const embedSrc = `https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0`;

  const channelName = overrideChannel?.name ?? session.recommendedChannelName;
  const cleanSessionTitle = session.title
    .replace(/^Buổi\s+\d+\s*:\s*/i, "")
    .trim();
  const topicQuery = overrideChannel
    ? `${overrideChannel.name} ${cleanSessionTitle}`
    : session.defaultSearchQuery;

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    session.defaultSearchQuery || topicQuery
  )}`;

  const handleApplyVideoUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputUrl.trim();

    if (!trimmed) {
      setSavedCustomUrl("");
      saveSessionCustomVideo(session.id, "");
      setUrlError(null);
      setUrlUpdated(false);
      return;
    }

    const parsedId = extractYouTubeId(trimmed);
    if (!parsedId) {
      setUrlError(
        "Link chưa đúng định dạng YouTube (hỗ trợ watch?v=..., youtu.be/..., shorts/...)."
      );
      setUrlUpdated(false);
      return;
    }

    setSavedCustomUrl(trimmed);
    saveSessionCustomVideo(session.id, trimmed);
    setUrlError(null);
    setUrlUpdated(true);
  };

  const handleResetDefaultVideo = () => {
    setSavedCustomUrl("");
    setInputUrl("");
    saveSessionCustomVideo(session.id, "");
    setUrlError(null);
    setUrlUpdated(false);
  };

  const handleNoteChange = (value: string) => {
    setNote(value);
    setNoteSavedStatus("saving");
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveSessionNote(session.id, value);
      setNoteSavedStatus("saved");
    }, 350);
  };

  return (
    <div className="space-y-5">
      {/* Direct 16:9 Embedded YouTube Player */}
      <Card className="overflow-hidden border-[#E5E5E0] bg-white">
        <div className="relative aspect-video w-full bg-[#292524]">
          <iframe
            key={activeVideoId}
            src={embedSrc}
            title={session.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>

        {/* Clean Horizontal Source & Video Switcher Bar */}
        <CardContent className="space-y-3 border-t border-[#E5E5E0] bg-[#F2F2F0]/40 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2 text-sm text-[#262626]">
              <Youtube className="h-4 w-4 shrink-0 text-[#6B655E]" />
              <span className="truncate">
                <span className="text-[#6B655E]">Nguồn bài giảng:</span>{" "}
                <strong className="font-semibold text-[#262626]">
                  {channelName}
                </strong>
              </span>
            </div>

            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[#6B655E] transition-colors hover:text-[#262626]"
            >
              <span>Tìm thêm bài giảng tiếng Việt cho đúng Bài này</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <form
            onSubmit={handleApplyVideoUrl}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <div className="relative flex-1">
              <Link2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B655E]" />
              <input
                id={`custom-video-${session.id}`}
                type="text"
                value={inputUrl}
                onChange={(e) => {
                  setInputUrl(e.target.value);
                  if (urlError) setUrlError(null);
                  if (urlUpdated) setUrlUpdated(false);
                }}
                placeholder="Dán link YouTube tiếng Trung khác (watch?v=..., youtu.be/..., shorts/...)"
                className="w-full rounded-xl border border-[#E5E5E0] bg-white py-2 pl-9 pr-3 text-sm text-[#262626] transition-colors placeholder:text-[#6B655E]/70 focus:border-[#6B655E] focus:outline-none focus:ring-2 focus:ring-[#6B655E]/15"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-[#292524] px-4 text-sm font-medium text-white transition-colors hover:bg-[#44403C] cursor-pointer sm:flex-none"
              >
                Đổi video
              </button>

              {isUsingCustomVideo && (
                <button
                  type="button"
                  onClick={handleResetDefaultVideo}
                  title="Khôi phục video mặc định"
                  aria-label="Khôi phục video mặc định"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3 text-xs font-medium text-[#6B655E] transition-colors hover:border-[#6B655E] hover:text-[#262626] cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Mặc định</span>
                </button>
              )}
            </div>
          </form>

          {urlError && (
            <p className="text-xs font-medium text-amber-700">{urlError}</p>
          )}
          {urlUpdated && !urlError && (
            <p className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
              <Check className="h-3.5 w-3.5" />
              Đã cập nhật và lưu video bài giảng.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Collapsible Key Knowledge Summary */}
      <Card className="border-[#E5E5E0] bg-white">
        <button
          type="button"
          onClick={() => setGrammarOpen((prev) => !prev)}
          aria-expanded={grammarOpen}
          className="flex w-full items-center justify-between rounded-2xl p-4 text-left transition-colors hover:bg-[#F2F2F0]/60 cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#6B655E]">
              <BookMarked className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#262626]">
                Tóm tắt kiến thức &amp; ngữ pháp trọng tâm
              </h3>
              <p className="text-xs text-[#6B655E]">
                {session.grammarNotesVi.length} điểm cần nhớ trong buổi học
              </p>
            </div>
          </div>
          {grammarOpen ? (
            <ChevronUp className="h-4 w-4 text-[#6B655E]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#6B655E]" />
          )}
        </button>

        {grammarOpen && (
          <CardContent className="border-t border-[#E5E5E0] pt-3">
            <ul className="space-y-2.5">
              {session.grammarNotesVi.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[#262626]"
                >
                  <Badge variant="default" className="mt-0.5 shrink-0">
                    {idx + 1}
                  </Badge>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>

      {/* Auto-saving Personal Session Notes */}
      <Card className="border-[#E5E5E0] bg-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <NotebookPen className="h-4 w-4 text-[#6B655E]" />
            <CardTitle className="text-sm text-[#262626]">
              Ghi chú chữ Hán &amp; cấu trúc buổi học (Notes)
            </CardTitle>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-[#6B655E]">
            {noteSavedStatus === "saving" && "Đang lưu..."}
            {noteSavedStatus === "saved" && (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-700" />
                Đã tự động lưu
              </>
            )}
          </span>
        </CardHeader>
        <CardContent className="pt-1">
          <textarea
            value={note}
            onChange={(e) => handleNoteChange(e.target.value)}
            rows={4}
            placeholder="Ghi lại chữ Hán mới, Pinyin, bộ thủ, cấu trúc ngữ pháp hay hoặc mốc thời gian quan trọng trong video..."
            className="w-full resize-y rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/40 p-3 text-sm leading-relaxed text-[#262626] placeholder:text-[#6B655E]/70 focus:border-[#6B655E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B655E]/15"
          />
        </CardContent>
      </Card>

      {/* Proceed to Step 2 CTA */}
      {onProceedToExercises && (
        <div className="flex justify-end pt-1">
          <Button
            variant="primary"
            size="lg"
            onClick={onProceedToExercises}
            className="w-full sm:w-auto"
          >
            Chuyển sang Bước 2: Làm bài tập chuyên biệt
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
