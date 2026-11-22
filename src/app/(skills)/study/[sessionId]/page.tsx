import React from "react";
import Link from "next/link";
import { ArrowLeft, Youtube } from "lucide-react";
import { ALL_STUDY_SESSIONS, getSessionById } from "@/data/roadmap";
import { YOUTUBE_CHANNELS } from "@/data/youtube-channels";
import { StudyRoomClient } from "@/components/study/StudyRoomClient";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { StudySession, YouTubeChannel } from "@/types";

interface StudySessionPageProps {
  params: Promise<{ sessionId: string }>;
  searchParams: Promise<{ channel?: string }>;
}

export default async function StudySessionPage({
  params,
  searchParams,
}: StudySessionPageProps) {
  const { sessionId } = await params;
  const { channel } = await searchParams;

  const sessionsList: StudySession[] = Array.isArray(ALL_STUDY_SESSIONS)
    ? (ALL_STUDY_SESSIONS as StudySession[])
    : [];
  const channelsList: YouTubeChannel[] = Array.isArray(YOUTUBE_CHANNELS)
    ? (YOUTUBE_CHANNELS as YouTubeChannel[])
    : [];

  const session: StudySession | undefined =
    (typeof getSessionById === "function"
      ? (getSessionById(sessionId) as StudySession | undefined)
      : undefined) ?? sessionsList.find((s: StudySession) => s.id === sessionId);

  if (!session) {
    return (
      <div className="mx-auto max-w-xl py-16">
        <Card className="p-8 text-center space-y-4">
          <h1 className="text-xl font-bold text-[#262626]">
            Không tìm thấy buổi học
          </h1>
          <p className="text-sm text-[#737373]">
            Mã buổi học{" "}
            <span className="font-mono text-[#262626]">{sessionId}</span> không
            tồn tại hoặc đã được cập nhật.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/roadmap">
              <Button variant="primary">
                <ArrowLeft className="h-4 w-4" />
                Quay lại Lộ trình Mức 0–9
              </Button>
            </Link>
            <Link href="/youtube-hub">
              <Button variant="outline">
                <Youtube className="h-4 w-4" />
                Kho 20 Kênh YouTube
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const overrideChannel = channel
    ? channelsList.find((c: YouTubeChannel) => c.id === channel)
    : undefined;

  return (
    <StudyRoomClient session={session} overrideChannel={overrideChannel} />
  );
}
