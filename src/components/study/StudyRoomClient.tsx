"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  BookText,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  ExternalLink,
  Eye,
  EyeOff,
  FolderOpen,
  Languages,
  PenTool,
  PlaySquare,
  Sparkles,
  Volume2,
  Youtube,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { VideoLecturePanel } from "@/components/study/VideoLecturePanel";
import { ExerciseEngine } from "@/components/study/ExerciseEngine";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DRIVE_RESOURCES } from "@/data/resources";
import { speakChinese } from "@/lib/speech";
import { getCompletedSessionIds } from "@/lib/storage";
import type {
  ExerciseQuestion,
  LessonVocabItem,
  SkillType,
  StudySession,
  YouTubeChannel,
} from "@/types";

export interface StudyRoomClientProps {
  session: StudySession;
  overrideChannel?: YouTubeChannel;
}

type StudyTab = "video" | "vocab" | "textbook" | "exercises";

const SKILL_LABELS: Record<SkillType, string> = {
  listening: "听力 · Luyện Nghe",
  speaking: "口语 · Luyện Nói",
  reading: "阅读 · Luyện Đọc",
  writing: "写作 · Luyện Viết",
};

const DIFFICULTY_LABELS: Record<
  StudySession["difficulty"],
  { label: string; variant: "success" | "warning" | "accent" }
> = {
  easy: { label: "Cơ bản", variant: "success" },
  medium: { label: "Trung bình", variant: "warning" },
  hard: { label: "Nâng cao", variant: "accent" },
};

function extractValidHanziChars(text: string): string[] {
  return text.match(/[\u4e00-\u9fff]/g) ?? [];
}

function buildVocabExercises(
  sessionId: string,
  newWords: LessonVocabItem[]
): ExerciseQuestion[] {
  if (newWords.length === 0) return [];

  const fallbackMeanings = [
    "Xin chào / Chào hỏi",
    "Cảm ơn nhiều",
    "Làm việc / Công tác",
    "Học tập / Nghiên cứu",
  ];
  const fallbackHanzi = ["你好", "谢谢", "工作", "学习"];

  const pickDistractors = (
    pool: string[],
    correct: string,
    fallbacks: string[]
  ): string[] => {
    const unique = Array.from(new Set(pool.filter((x) => x !== correct)));
    for (const fb of fallbacks) {
      if (unique.length >= 3) break;
      if (fb !== correct && !unique.includes(fb)) unique.push(fb);
    }
    return [correct, ...unique.slice(0, 3)].sort((a, b) => a.localeCompare(b));
  };

  const allMeanings = newWords.map((w) => w.meaningVi);
  const allHanzi = newWords.map((w) => w.hanzi);
  const generated: ExerciseQuestion[] = [];

  for (let i = 0; i < 5; i++) {
    const word = newWords[i % newWords.length];
    if (i % 3 === 0) {
      generated.push({
        id: `${sessionId}-vocab-listen-${i}`,
        type: "listening-mcq",
        skill: "listening",
        promptVi: `Nghe phát âm từ mới và chọn nghĩa tiếng Việt đúng:`,
        audioTextZh: word.hanzi,
        options: pickDistractors(allMeanings, word.meaningVi, fallbackMeanings),
        correctAnswer: word.meaningVi,
        explanationVi: `"${word.hanzi}" (${word.pinyin}) có nghĩa là: ${word.meaningVi}.`,
      });
    } else if (i % 3 === 1) {
      generated.push({
        id: `${sessionId}-vocab-hanzi-${i}`,
        type: "reading-comprehension",
        skill: "reading",
        promptVi: `Chọn chữ Hán đúng cho phiên âm "${word.pinyin}" (${word.meaningVi}):`,
        options: pickDistractors(allHanzi, word.hanzi, fallbackHanzi),
        correctAnswer: word.hanzi,
        explanationVi: `Chữ Hán của "${word.pinyin}" (${word.meaningVi}) là ${word.hanzi}.`,
      });
    } else {
      generated.push({
        id: `${sessionId}-vocab-sentence-${i}`,
        type: "writing-two-sentences",
        skill: "writing",
        promptVi: `Thực hành đặt câu với từ mới "${word.hanzi}" (${word.pinyin} — ${word.meaningVi}):`,
        targetHanzi: word.hanzi,
        targetWordMeaningVi: word.meaningVi,
        correctAnswer: word.hanzi,
        explanationVi: `Hãy dùng từ "${word.hanzi}" (${word.meaningVi}) trong ngữ cảnh giao tiếp thực tế.`,
      });
    }
  }

  return generated;
}

export function StudyRoomClient({
  session,
  overrideChannel,
}: StudyRoomClientProps) {
  const [activeTab, setActiveTab] = useState<StudyTab>("video");
  const [isCompleted, setIsCompleted] = useState(false);

  // Tab 2: Selected word for HanziStrokeCanvas
  const newWords = useMemo(() => session.newWords ?? [], [session.newWords]);
  const [selectedWord, setSelectedWord] = useState<LessonVocabItem | null>(
    () => newWords[0] ?? null
  );

  // Tab 3: Textbook toggles
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  useEffect(() => {
    setIsCompleted(getCompletedSessionIds().includes(session.id));
  }, [session.id]);

  useEffect(() => {
    setSelectedWord(newWords[0] ?? null);
  }, [session.id, newWords]);

  // Tab 1: Attached Google Drive resources (explicit IDs or fallback by HSK level)
  const attachedResources = useMemo(() => {
    if (session.attachedResourceIds && session.attachedResourceIds.length > 0) {
      const idSet = new Set(session.attachedResourceIds);
      const matched = DRIVE_RESOURCES.filter((r) => idSet.has(r.id));
      if (matched.length > 0) return matched;
    }
    return DRIVE_RESOURCES.filter((r) =>
      r.hskLevels.includes(session.hskLevel)
    );
  }, [session.attachedResourceIds, session.hskLevel]);

  const dialogues = session.dialogues ?? [];
  const grammarPoints = session.grammarPoints ?? [];
  const grammarNotesVi = session.grammarNotesVi ?? [];
  const diffMeta = DIFFICULTY_LABELS[session.difficulty];
  const combinedExercises = useMemo(
    () =>
      session.exercises.length >= 15
        ? session.exercises
        : [...session.exercises, ...buildVocabExercises(session.id, newWords)],
    [session.id, session.exercises, newWords]
  );

  const tabs: {
    id: StudyTab;
    label: string;
    shortMeta?: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "video",
      label: "1. Video & Tài liệu",
      shortMeta:
        attachedResources.length > 0
          ? `${attachedResources.length} tài liệu`
          : undefined,
      icon: PlaySquare,
    },
    {
      id: "vocab",
      label: "2. Từ mới (生词)",
      shortMeta: newWords.length > 0 ? `${newWords.length} từ` : undefined,
      icon: BookOpen,
    },
    {
      id: "textbook",
      label: "3. Bài khóa (课文)",
      shortMeta:
        dialogues.length > 0
          ? `${dialogues.length} đoạn`
          : grammarPoints.length > 0
            ? `${grammarPoints.length} ngữ pháp`
            : undefined,
      icon: BookText,
    },
    {
      id: "exercises",
      label: "4. Bài tập",
      shortMeta: `${combinedExercises.length} câu`,
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-5 pb-12">
      {/* Top Navigation & Session Header */}
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/roadmap">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Lộ trình Mức 0–9
              </Button>
            </Link>
            <Link href="/youtube-hub">
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4 text-[#6B655E]" />
                Kho 20 Kênh YouTube
              </Button>
            </Link>
          </div>

          {isCompleted && (
            <Badge variant="success" className="gap-1 px-3 py-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Đã hoàn thành
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {session.lessonNumber !== undefined && (
              <span className="inline-flex items-center rounded-full bg-[#292524] px-2.5 py-0.5 text-xs font-bold text-white">
                Bài {session.lessonNumber}
              </span>
            )}
            <Badge variant="default">
              {session.hskLevel === "HSK0"
                ? "Chặng 0 · Mức 0 (HSK0)"
                : `Chặng ${session.stageId} · ${session.hskLevel}`}
            </Badge>
            <Badge variant="accent">{SKILL_LABELS[session.skillFocus]}</Badge>
            <Badge variant={diffMeta.variant}>{diffMeta.label}</Badge>
            <Badge variant="outline">
              {session.subDifficulty === "basic" ? "Cơ bản" : "Nâng cao"}
            </Badge>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#737373]">
              <Clock className="h-3.5 w-3.5" />~{session.estimatedMinutes} phút
            </span>
          </div>

          <h1 className="text-xl font-bold tracking-tight text-[#262626] sm:text-2xl">
            {session.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#6B655E]">
            <InteractiveChineseText
              text={session.titleZh}
              pinyin={session.titlePinyin}
            />
            <span className="text-xs text-[#737373]">
              ({session.titlePinyin})
            </span>
            <button
              type="button"
              onClick={() => speakChinese(session.titleZh, 0.95)}
              title="Nghe phát âm tiêu đề bài học (zh-CN)"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
            >
              <Volume2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Tab Standard Textbook Navigation Bar */}
      <div
        role="tablist"
        aria-label="4 bước học chuẩn sách giáo trình"
        className="grid grid-cols-2 gap-1.5 rounded-2xl border border-[#E5E5E0] bg-white p-1.5 lg:grid-cols-4"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-2.5 text-center transition-all cursor-pointer sm:flex-row sm:gap-2 ${
                isActive
                  ? "bg-[#292524] text-white shadow-sm"
                  : "text-[#4A4540] hover:bg-[#F2F2F0] hover:text-[#262626]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-xs font-semibold sm:text-sm">
                  {tab.label}
                </span>
              </div>
              {tab.shortMeta && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    isActive
                      ? "bg-white/15 text-white/90"
                      : "bg-[#F2F2F0] text-[#6B655E]"
                  }`}
                >
                  {tab.shortMeta}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: Video & Attached Drive Resources */}
      {activeTab === "video" && (
        <div className="space-y-5">
          <VideoLecturePanel
            session={session}
            overrideChannel={overrideChannel}
            onProceedToExercises={() => setActiveTab("exercises")}
          />

          {attachedResources.length > 0 && (
            <section className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#6B655E]">
                    <FolderOpen className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-[#262626]">
                      Tài liệu đính kèm của cấp độ này ({session.hskLevel})
                    </h2>
                    <p className="text-xs text-[#737373]">
                      Mở trực tiếp giáo trình PDF, slide bài giảng &amp; file
                      nghe trên Google Drive
                    </p>
                  </div>
                </div>
                <Link href="/resources">
                  <Button variant="ghost" size="sm">
                    Xem toàn bộ Kho Tài Liệu
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {attachedResources.map((res) => (
                  <a
                    key={res.id}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between gap-3 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 transition-all hover:border-[#6B655E] hover:bg-white"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-[#6B655E] border border-[#E5E5E0]">
                          {res.categoryLabelVi}
                        </span>
                        <span className="rounded-full bg-[#F2F2F0] px-2 py-0.5 text-[10px] font-medium text-[#4A4540]">
                          {res.formatBadge}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-[#262626] group-hover:text-[#6B655E]">
                        {res.title}
                      </h3>
                      <p className="text-xs text-[#737373] line-clamp-2">
                        {res.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#E5E5E0]/70 pt-2.5 text-xs font-semibold text-[#6B655E]">
                      <span>Mở Google Drive</span>
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* TAB 2: Từ mới (生词) & Viết chữ (HanziStrokeCanvas) */}
      {activeTab === "vocab" && (
        <div className="space-y-4">
          {newWords.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E5E0] bg-white px-6 py-12 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F2F0] text-[#6B655E]">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-base font-semibold text-[#262626]">
                Buổi học này chưa tách danh sách Từ mới (生词) riêng
              </h2>
              <p className="mx-auto mt-1.5 max-w-md text-sm text-[#737373]">
                Bạn có thể xem ghi chú ngữ pháp ở Tab Bài khóa hoặc chuyển thẳng
                sang làm Bài tập thực hành và tra từ bằng cách nhấp đúp vào bất
                kỳ chữ Hán nào.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTab("textbook")}
                >
                  <BookText className="h-4 w-4" />
                  Sang Tab Bài khóa &amp; Ngữ pháp
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveTab("exercises")}
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Làm Bài tập thực hành
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
              {/* Left: New Words List */}
              <div className="space-y-3 lg:col-span-6">
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-white px-4 py-3">
                  <div>
                    <h2 className="text-sm font-semibold text-[#262626]">
                      Danh sách Từ mới · 生词 ({newWords.length} từ)
                    </h2>
                    <p className="text-xs text-[#737373]">
                      Bấm vào thẻ từ để xem chi tiết &amp; mở khung luyện viết (米字格)
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setShowPinyin((v) => !v)}
                      className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        showPinyin
                          ? "border-[#292524] bg-[#292524] text-white"
                          : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <Languages className="h-3 w-3" />
                      Pinyin
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowTranslation((v) => !v)}
                      className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        showTranslation
                          ? "border-[#6B655E] bg-[#6B655E] text-white"
                          : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      {showTranslation ? (
                        <Eye className="h-3 w-3" />
                      ) : (
                        <EyeOff className="h-3 w-3" />
                      )}
                      Nghĩa Việt
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {newWords.map((word, idx) => {
                    const isSelected = selectedWord?.hanzi === word.hanzi;
                    return (
                      <div
                        key={`${word.hanzi}-${idx}`}
                        onClick={() => setSelectedWord(word)}
                        className={`rounded-2xl border p-4 transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#292524] bg-[#FAF9F7] shadow-xs"
                            : "border-[#E5E5E0] bg-white hover:border-[#6B655E]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 space-y-1.5">
                            <div className="flex flex-wrap items-end gap-2.5">
                              <ruby className="text-[26px] font-bold leading-snug text-[#262626]">
                                {word.hanzi}
                                {showPinyin && (
                                  <rt className="text-xs font-semibold text-[#6B655E]">
                                    {word.pinyin}
                                  </rt>
                                )}
                              </ruby>
                              <span className="rounded-full bg-[#F2F2F0] px-2 py-0.5 text-[11px] font-medium text-[#4A4540]">
                                {word.partOfSpeech}
                              </span>
                            </div>

                            {showTranslation && (
                              <p className="text-sm font-medium text-[#262626]">
                                {word.meaningVi}
                              </p>
                            )}

                            {isSelected &&
                              (word.radical ||
                                (word.strokeCount !== undefined &&
                                  extractValidHanziChars(word.hanzi).length === 1)) && (
                                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#737373]">
                                  {word.radical && (
                                    <span className="rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5">
                                      Bộ thủ: {word.radical}
                                    </span>
                                  )}
                                  {word.strokeCount !== undefined &&
                                    extractValidHanziChars(word.hanzi).length === 1 && (
                                      <span className="rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5">
                                        {word.strokeCount} nét
                                      </span>
                                    )}
                                </div>
                              )}
                          </div>

                          <div className="flex shrink-0 flex-col items-end gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakChinese(word.hanzi, 0.9);
                              }}
                              title={`Nghe phát âm "${word.hanzi}" (zh-CN)`}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#4A4540] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>

                            {isSelected && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedWord(word);
                                }}
                                className="inline-flex items-center gap-1 rounded-lg bg-[#292524] px-2.5 py-1.5 text-xs font-semibold text-white transition-colors cursor-pointer"
                              >
                                <PenTool className="h-3.5 w-3.5" />
                                Luyện viết nét (米字格)
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Sticky HanziStrokeCanvas */}
              <div className="lg:sticky lg:top-6 lg:col-span-6">
                {selectedWord && (() => {
                  const cleanHanziChars = extractValidHanziChars(selectedWord.hanzi);
                  const cleanHanzi = cleanHanziChars.join("");
                  const isSingleChar =
                    cleanHanziChars.length === 1 &&
                    selectedWord.hanzi.trim() === cleanHanzi;

                  if (cleanHanzi.length === 0) {
                    return (
                      <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-6 text-center text-xs text-[#737373]">
                        Mục &ldquo;{selectedWord.hanzi}&rdquo; không chứa chữ Hán hợp lệ để luyện viết trên ô Mễ tự cách.
                      </div>
                    );
                  }

                  return (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-4 py-2.5">
                        <span className="text-xs font-semibold text-[#4A4540]">
                          Đang luyện viết:{" "}
                          <strong className="text-[#262626]">
                            {selectedWord.hanzi}
                          </strong>{" "}
                          ({selectedWord.pinyin}) — {selectedWord.meaningVi}
                        </span>
                      </div>
                      <HanziStrokeCanvas
                        key={cleanHanzi}
                        hanzi={cleanHanzi}
                        pinyin={isSingleChar ? selectedWord.pinyin : undefined}
                        meaningVi={isSingleChar ? selectedWord.meaningVi : undefined}
                      />
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Bài khóa (课文) & Ngữ pháp */}
      {activeTab === "textbook" && (
        <div className="space-y-5">
          {/* Dialogues Section */}
          {dialogues.length > 0 && (
            <section className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E0] pb-4">
                <div>
                  <h2 className="text-base font-semibold text-[#262626]">
                    Bài khóa hội thoại · 课文 ({dialogues.length} đoạn)
                  </h2>
                  <p className="text-xs text-[#737373]">
                    Nhấp đúp vào bất kỳ chữ Hán nào để tra từ điển tức thì · Bấm
                    loa để nghe giọng bản xứ
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPinyin((v) => !v)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      showPinyin
                        ? "border-[#292524] bg-[#292524] text-white"
                        : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                    }`}
                  >
                    <Languages className="h-3.5 w-3.5" />
                    {showPinyin ? "Đang bật Pinyin" : "Đã tắt Pinyin"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowTranslation((v) => !v)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      showTranslation
                        ? "border-[#6B655E] bg-[#6B655E] text-white"
                        : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                    }`}
                  >
                    {showTranslation ? (
                      <Eye className="h-3.5 w-3.5" />
                    ) : (
                      <EyeOff className="h-3.5 w-3.5" />
                    )}
                    {showTranslation ? "Hiện dịch Việt" : "Ẩn dịch Việt"}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {dialogues.map((block, blockIdx) => (
                  <div
                    key={`${block.titleVi}-${blockIdx}`}
                    className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#262626]">
                        {block.titleVi}
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          speakChinese(
                            block.lines.map((l) => l.zh).join("。 "),
                            0.9
                          )
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-semibold text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
                      >
                        <Volume2 className="h-3.5 w-3.5 text-[#6B655E]" />
                        Nghe cả đoạn
                      </button>
                    </div>

                    <div className="divide-y divide-[#E5E5E0]/80">
                      {block.lines.map((line, lineIdx) => (
                        <div
                          key={`${line.speaker}-${lineIdx}`}
                          className="flex items-start gap-3 py-3 first:pt-1 last:pb-0"
                        >
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#292524] text-xs font-bold text-white">
                            {line.speaker}
                          </span>

                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex flex-col">
                              {showPinyin && (
                                <p className="text-xs font-medium text-[#6B655E]">
                                  {line.pinyin}
                                </p>
                              )}
                              <div className="text-xl sm:text-[22px] font-semibold leading-relaxed text-[#262626]">
                                <InteractiveChineseText
                                  text={line.zh}
                                  pinyin={line.pinyin}
                                />
                              </div>
                            </div>
                            {showTranslation && (
                              <p className="text-xs text-[#737373]">
                                {line.vi}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => speakChinese(line.zh, 0.9)}
                            title="Nghe câu này (zh-CN)"
                            className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#4A4540] transition-colors hover:bg-[#F2F2F0] cursor-pointer"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Structured Grammar Points */}
          {grammarPoints.length > 0 && (
            <section className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#6B655E]" />
                <h2 className="text-base font-semibold text-[#262626]">
                  Điểm Ngữ pháp trọng tâm · 语法 ({grammarPoints.length})
                </h2>
              </div>

              <div className="space-y-4">
                {grammarPoints.map((gp, idx) => (
                  <div
                    key={`${gp.titleVi}-${idx}`}
                    className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#262626]">
                        {idx + 1}. {gp.titleVi}
                      </h3>
                      {gp.formula && (
                        <code className="rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-semibold text-[#262626]">
                          {gp.formula}
                        </code>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed text-[#4A4540]">
                      {gp.explanationVi}
                    </p>

                    {gp.examples.length > 0 && (
                      <div className="space-y-2 border-t border-[#E5E5E0]/80 pt-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#737373]">
                          Ví dụ minh họa
                        </p>
                        {gp.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="flex items-start justify-between gap-3 rounded-lg border border-[#E5E5E0] bg-white px-3.5 py-2.5"
                          >
                            <div className="space-y-0.5">
                              <div className="text-sm font-semibold text-[#262626]">
                                <InteractiveChineseText
                                  text={ex.zh}
                                  pinyin={ex.pinyin}
                                />
                              </div>
                              {showPinyin && (
                                <p className="text-xs text-[#6B655E]">
                                  {ex.pinyin}
                                </p>
                              )}
                              <p className="text-xs text-[#737373]">{ex.vi}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => speakChinese(ex.zh, 0.9)}
                              title="Nghe ví dụ (zh-CN)"
                              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Grammar Notes (backward-compatible for all sessions) */}
          {grammarNotesVi.length > 0 && (
            <section className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 space-y-3">
              <h2 className="text-base font-semibold text-[#262626]">
                Ghi chú Ngữ pháp &amp; Trọng tâm buổi học
              </h2>
              <ul className="space-y-2">
                {grammarNotesVi.map((note, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2.5 text-sm text-[#4A4540]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#292524] text-[10px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {dialogues.length === 0 &&
            grammarPoints.length === 0 &&
            grammarNotesVi.length === 0 && (
              <div className="rounded-2xl border border-[#E5E5E0] bg-white px-6 py-12 text-center">
                <p className="text-sm font-medium text-[#262626]">
                  Buổi học này chưa có đoạn Bài khóa riêng.
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setActiveTab("exercises")}
                  >
                    Chuyển sang Tab 4: Bài tập thực hành
                  </Button>
                </div>
              </div>
            )}
        </div>
      )}

      {/* TAB 4: Bài tập thực hành */}
      {activeTab === "exercises" && (
        <div className="mx-auto max-w-3xl space-y-4">
          <ExerciseEngine
            sessionId={session.id}
            skillFocus={session.skillFocus}
            exercises={combinedExercises}
            onSessionCompleted={() => setIsCompleted(true)}
          />
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab("video")}
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại Tab 1: Video &amp; Tài liệu
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
