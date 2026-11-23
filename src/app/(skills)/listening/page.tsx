"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Headphones,
  Languages,
  Lightbulb,
  Play,
  RotateCcw,
  Settings,
  Volume2,
  XCircle,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";
import { getResourcesByCategory } from "@/data/resources";
import {
  DICTATION_LESSONS,
  type DictationLesson,
} from "@/data/listening-dictation";
import {
  LISTENING_TASK_TABS,
  LISTENING_TASKS,
  type ListeningTaskItem,
  type ListeningTaskType,
} from "@/data/listening-tasks";
import {
  checkDictationWord,
  getHintForWord,
  tokenizeAndBlank,
  type BlankRatio,
} from "@/lib/dictation-engine";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import {
  getAvailableVoices,
  getFriendlyVoiceLabel,
  getPreferredVoiceName,
  setPreferredVoiceName,
  subscribeVoicesChanged,
} from "@/lib/tts-voice";
import { addXP, recordMistake } from "@/lib/storage";
import type { HSKLevel, SubDifficulty } from "@/types";

type ListeningMode = "dictation" | "tasks";
type SubFilter = "all" | SubDifficulty;

const HSK_LEVELS: Array<HSKLevel | "HSK7-9"> = [
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7-9",
];

const SPEEDS = [0.75, 0.95, 1.0, 1.25] as const;

const BLANK_RATIOS: { value: BlankRatio; label: string }[] = [
  { value: 20, label: "Mới bắt đầu (15–20%)" },
  { value: 35, label: "Cơ bản (35%)" },
  { value: 60, label: "Thử thách (55–60%)" },
];

const DEFAULT_TASK_TABS: {
  id: ListeningTaskType;
  label: string;
  desc: string;
}[] = [
  {
    id: "task1-single",
    label: "Task 1 · Nghe câu đơn",
    desc: "Phản xạ câu ngắn & thanh điệu",
  },
  {
    id: "task2-qa",
    label: "Task 2 · Nghe hỏi – đáp",
    desc: "Chọn câu phản hồi phù hợp",
  },
  {
    id: "task3-dialogue",
    label: "Task 3 · Nghe hội thoại",
    desc: "Đàm thoại đời sống & thương mại",
  },
  {
    id: "task4-monologue",
    label: "Task 4 · Nghe đoạn văn",
    desc: "Thông báo, bản tin & thuyết trình",
  },
];

function getLevelDisplayLabel(level: HSKLevel | "ALL" | "HSK7-9"): string {
  if (level === "ALL") return "Tất cả";
  if (level === "HSK0") return "Mức 0";
  if (level === "HSK7-9") return "HSK 7–9";
  return level.replace("HSK", "HSK ");
}

function getSubDifficulty(
  item: { id: string; subDifficulty?: SubDifficulty },
  index: number,
  total: number
): SubDifficulty {
  if (item.subDifficulty === "basic" || item.subDifficulty === "advanced") {
    return item.subDifficulty;
  }
  return index < Math.ceil(total / 2) ? "basic" : "advanced";
}

export default function ListeningPage() {
  const [mode, setMode] = useState<ListeningMode>("dictation");
  const [speed, setSpeed] = useState<number>(1.0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(false);
  const [zhVoices, setZhVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoice, setSelectedZhVoice] = useState<string>("");

  useEffect(() => {
    const sync = () => {
      setZhVoices(getAvailableVoices("zh"));
      setSelectedZhVoice(getPreferredVoiceName("zh") ?? "");
    };
    sync();
    return subscribeVoicesChanged(sync);
  }, []);

  // ---- Dictation Mode State ----
  const [dictLevel, setDictLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK0");
  const [dictSubFilter, setDictSubFilter] = useState<SubFilter>("all");
  const [blankRatio, setBlankRatio] = useState<BlankRatio>(20);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    DICTATION_LESSONS[0]?.id ?? ""
  );
  const [globalShowPinyin, setGlobalShowPinyin] = useState<boolean>(false);
  // Keyed by `${sentenceId}:${tokenIndex}`
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [tabRevealed, setTabRevealed] = useState<Record<string, boolean>>({});
  const [checkedSentences, setCheckedSentences] = useState<
    Record<string, boolean>
  >({});
  const [revealedSentences, setRevealedSentences] = useState<
    Record<string, boolean>
  >({});
  const [xpAwardedSentences, setXpAwardedSentences] = useState<
    Record<string, boolean>
  >({});
  const [showTranslations, setShowTranslations] = useState<
    Record<string, boolean>
  >({});
  const [showSentencePinyin, setShowSentencePinyin] = useState<
    Record<string, boolean>
  >({});
  const [focusedKey, setFocusedKey] = useState<string | null>(null);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // ---- 4 Task Quiz Mode State ----
  const [taskLevel, setTaskLevel] = useState<"ALL" | HSKLevel | "HSK7-9">("ALL");
  const [taskSubFilter, setTaskSubFilter] = useState<SubFilter>("all");
  const [activeTab, setActiveTab] =
    useState<ListeningTaskType>("task1-single");
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [shownTranscripts, setShownTranscripts] = useState<
    Record<string, boolean>
  >({});
  const [taskShowPinyin, setTaskShowPinyin] = useState<boolean>(false);

  const taskTabs = useMemo(() => {
    if (Array.isArray(LISTENING_TASK_TABS) && LISTENING_TASK_TABS.length > 0) {
      return LISTENING_TASK_TABS.map((t, idx) => ({
        id: t.id,
        label:
          (t as { label?: string; title?: string }).label ??
          (t as { title?: string }).title ??
          DEFAULT_TASK_TABS[idx]?.label ??
          t.id,
        desc:
          (t as { desc?: string; description?: string; subtitle?: string })
            .desc ??
          (t as { description?: string }).description ??
          (t as { subtitle?: string }).subtitle ??
          DEFAULT_TASK_TABS[idx]?.desc ??
          "",
      }));
    }
    return DEFAULT_TASK_TABS;
  }, []);

  // ---- Dictation Filtering ----
  const levelLessons = useMemo<DictationLesson[]>(() => {
    const byLevel =
      dictLevel === "ALL"
        ? DICTATION_LESSONS
        : dictLevel === "HSK7-9"
          ? DICTATION_LESSONS.filter((l) =>
              ["HSK7", "HSK8", "HSK9"].includes(l.level)
            )
          : DICTATION_LESSONS.filter((l) => l.level === dictLevel);
    if (dictSubFilter === "all") return byLevel;
    return byLevel.filter(
      (l, idx) =>
        getSubDifficulty(l, idx, byLevel.length) === dictSubFilter
    );
  }, [dictLevel, dictSubFilter]);

  const activeLesson = useMemo<DictationLesson | undefined>(
    () =>
      levelLessons.find((l) => l.id === selectedLessonId) ?? levelLessons[0],
    [levelLessons, selectedLessonId]
  );

  const tokenizedSentences = useMemo(() => {
    if (!activeLesson) return [];
    return activeLesson.sentences.map((sentence) => ({
      sentence,
      tokens: tokenizeAndBlank(
        sentence.textZh,
        blankRatio,
        sentence.priorityKeywords
      ),
    }));
  }, [activeLesson, blankRatio]);

  // Flat ordered list of all blank keys in the active lesson for Tab/Enter navigation
  const orderedBlankKeys = useMemo(() => {
    const keys: string[] = [];
    for (const item of tokenizedSentences) {
      for (const tok of item.tokens) {
        if (tok.isBlank) {
          keys.push(`${item.sentence.id}:${tok.index}`);
        }
      }
    }
    return keys;
  }, [tokenizedSentences]);

  const resetLessonProgress = () => {
    setInputs({});
    setTabRevealed({});
    setCheckedSentences({});
    setRevealedSentences({});
    setFocusedKey(null);
  };

  const handleChangeDictLevel = (lvl: HSKLevel | "ALL" | "HSK7-9") => {
    stopSpeaking();
    setPlayingId(null);
    setDictLevel(lvl);
    const matches =
      lvl === "ALL"
        ? DICTATION_LESSONS
        : DICTATION_LESSONS.filter((l) => l.level === lvl);
    if (matches[0]) setSelectedLessonId(matches[0].id);
    resetLessonProgress();
  };

  const handleSelectLesson = (lessonId: string) => {
    stopSpeaking();
    setPlayingId(null);
    setSelectedLessonId(lessonId);
    resetLessonProgress();
  };

  const handleChangeRatio = (ratio: BlankRatio) => {
    setBlankRatio(ratio);
    resetLessonProgress();
  };

  const playSentence = (id: string, textZh: string) => {
    stopSpeaking();
    setPlayingId(id);
    speakChinese(textZh, speed, () => setPlayingId(null));
  };

  const playWholeLesson = () => {
    if (!activeLesson) return;
    stopSpeaking();
    const fullText = activeLesson.sentences.map((s) => s.textZh).join(" ");
    setPlayingId(activeLesson.id);
    speakChinese(fullText, speed, () => setPlayingId(null));
  };

  const focusNextBlank = (currentKey: string, backwards = false) => {
    const idx = orderedBlankKeys.indexOf(currentKey);
    if (idx === -1) return;
    const nextIdx = backwards ? idx - 1 : idx + 1;
    if (nextIdx >= 0 && nextIdx < orderedBlankKeys.length) {
      const nextKey = orderedBlankKeys[nextIdx];
      inputRefs.current[nextKey]?.focus();
    }
  };

  const handleHintSentence = (sentenceId: string) => {
    const entry = tokenizedSentences.find((s) => s.sentence.id === sentenceId);
    if (!entry) return;

    const blankTokens = entry.tokens.filter((t) => t.isBlank);
    if (blankTokens.length === 0) return;

    let targetToken = blankTokens.find(
      (t) =>
        `${sentenceId}:${t.index}` === focusedKey &&
        !checkDictationWord(
          inputs[`${sentenceId}:${t.index}`] ?? "",
          t.cleanWord
        )
    );

    if (!targetToken) {
      targetToken = blankTokens.find(
        (t) =>
          !checkDictationWord(
            inputs[`${sentenceId}:${t.index}`] ?? "",
            t.cleanWord
          )
      );
    }

    if (!targetToken) return;

    const key = `${sentenceId}:${targetToken.index}`;
    const nextVal = getHintForWord(inputs[key] ?? "", targetToken.cleanWord);
    setInputs((prev) => ({ ...prev, [key]: nextVal }));
    inputRefs.current[key]?.focus();
  };

  const handleCheckSentence = (sentenceId: string) => {
    setCheckedSentences((prev) => ({ ...prev, [sentenceId]: true }));
    const entry = tokenizedSentences.find((s) => s.sentence.id === sentenceId);
    if (!entry) return;

    const blanks = entry.tokens.filter((t) => t.isBlank);
    const allCorrect =
      blanks.length > 0 &&
      blanks.every((t) =>
        checkDictationWord(
          inputs[`${sentenceId}:${t.index}`] ?? "",
          t.cleanWord
        )
      );

    if (allCorrect && !xpAwardedSentences[sentenceId]) {
      setXpAwardedSentences((prev) => ({ ...prev, [sentenceId]: true }));
      addXP(15);
    }

    if (allCorrect && autoAdvance) {
      const idx = tokenizedSentences.findIndex((s) => s.sentence.id === sentenceId);
      const next = tokenizedSentences[idx + 1];
      const nextBlank = next?.tokens.find((t) => t.isBlank);
      if (next && nextBlank) {
        const nextKey = `${next.sentence.id}:${nextBlank.index}`;
        setTimeout(() => {
          inputRefs.current[nextKey]?.focus();
          playSentence(next.sentence.id, next.sentence.textZh);
        }, 350);
      }
    }
  };

  const handleResetSentence = (sentenceId: string) => {
    setInputs((prev) => {
      const copy = { ...prev };
      for (const k of Object.keys(copy)) {
        if (k.startsWith(`${sentenceId}:`)) delete copy[k];
      }
      return copy;
    });
    setTabRevealed((prev) => {
      const copy = { ...prev };
      for (const k of Object.keys(copy)) {
        if (k.startsWith(`${sentenceId}:`)) delete copy[k];
      }
      return copy;
    });
    setCheckedSentences((prev) => {
      const copy = { ...prev };
      delete copy[sentenceId];
      return copy;
    });
    setRevealedSentences((prev) => {
      const copy = { ...prev };
      delete copy[sentenceId];
      return copy;
    });
  };

  // ---- 4 Task Quiz Mode Helpers ----
  const levelFilteredTasks = useMemo(
    () =>
      taskLevel === "ALL"
        ? LISTENING_TASKS
        : taskLevel === "HSK7-9"
          ? LISTENING_TASKS.filter((t) =>
              ["HSK7", "HSK8", "HSK9"].includes(t.level)
            )
          : LISTENING_TASKS.filter((t) => t.level === taskLevel),
    [taskLevel]
  );

  const basicTaskCount = useMemo(
    () =>
      levelFilteredTasks.filter(
        (t, idx) =>
          getSubDifficulty(t, idx, levelFilteredTasks.length) === "basic"
      ).length,
    [levelFilteredTasks]
  );

  const advancedTaskCount = useMemo(
    () =>
      levelFilteredTasks.filter(
        (t, idx) =>
          getSubDifficulty(t, idx, levelFilteredTasks.length) === "advanced"
      ).length,
    [levelFilteredTasks]
  );

  const tasks = useMemo(
    () =>
      levelFilteredTasks.filter((t, idx) => {
        if (t.taskType !== activeTab) return false;
        if (taskSubFilter === "all") return true;
        return (
          getSubDifficulty(t, idx, levelFilteredTasks.length) === taskSubFilter
        );
      }),
    [levelFilteredTasks, activeTab, taskSubFilter]
  );

  const playTaskAudio = (task: ListeningTaskItem) => {
    stopSpeaking();
    setPlayingId(task.id);
    speakChinese(task.audioZh, speed, () => setPlayingId(null));
  };

  const handleSelectOption = (task: ListeningTaskItem, option: string) => {
    if (selectedAnswers[task.id]) return;
    setSelectedAnswers((prev) => ({ ...prev, [task.id]: option }));
    setShownTranscripts((prev) => ({ ...prev, [task.id]: true }));
    if (option === task.correctAnswer) {
      addXP(10);
    } else {
      recordMistake({
        source: "listening",
        prompt: `${task.questionVi} (Audio: ${task.audioZh})`,
        userAnswer: option,
        correctAnswer: task.correctAnswer,
        explanationVi: task.explanationVi,
      });
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-3 pb-12">
      {/* Compact Header: title + mode toggle + ⚙️ settings popover */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-bold tracking-tight text-[#262626] sm:text-xl">
          {mode === "dictation" ? "Nghe điền từ" : "Nghe hiểu HSK"}
          <span className="ml-2 hidden text-xs font-medium text-[#737373] sm:inline">
            听力 · zh-CN
          </span>
        </h1>

        <div className="flex items-center gap-1.5">
          <div
            role="tablist"
            className="inline-flex rounded-xl border border-[#E5E5E0] bg-white p-0.5"
          >
            {(
              [
                { id: "dictation" as const, label: "Điền từ" },
                { id: "tasks" as const, label: "4 Task HSK" },
              ]
            ).map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={mode === m.id}
                onClick={() => {
                  stopSpeaking();
                  setPlayingId(null);
                  setMode(m.id);
                }}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  mode === m.id
                    ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <span className="hidden rounded-lg border border-[#E5E5E0] bg-white px-2 py-1.5 text-xs font-semibold text-[#4A4540] sm:inline">
            {speed}x
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen((o) => !o)}
              aria-expanded={settingsOpen}
              aria-label="Cài đặt nghe"
              title="Cài đặt: tốc độ, giọng đọc, Pinyin, độ khó"
              className={`inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-colors ${
                settingsOpen
                  ? "border-brand bg-brand-soft text-brand-active"
                  : "border-[#E5E5E0] bg-white text-[#4A4540] hover:bg-[#F2F2F0]"
              }`}
            >
              <Settings className="h-4 w-4" />
            </button>

            {settingsOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setSettingsOpen(false)}
                  aria-hidden
                />
                <div className="absolute right-0 z-40 mt-2 w-[min(21rem,calc(100vw-2rem))] space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4 shadow-lg">
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#4A4540]">
                      <Headphones className="h-3.5 w-3.5" /> Tốc độ đọc
                    </span>
                    <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
                      {SPEEDS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSpeed(s)}
                          className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                            speed === s
                              ? "bg-white text-brand-active ring-1 ring-brand"
                              : "text-[#737373] hover:text-[#262626]"
                          }`}
                        >
                          {s}x
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="listening-zh-voice"
                      className="block text-xs font-semibold text-[#4A4540]"
                    >
                      Giọng đọc tiếng Trung
                    </label>
                    <select
                      id="listening-zh-voice"
                      value={selectedZhVoice}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedZhVoice(val);
                        setPreferredVoiceName("zh", val || undefined);
                      }}
                      className="w-full rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1.5 text-xs text-[#262626] focus:border-brand focus:outline-none"
                    >
                      <option value="">Tự động chọn giọng chuẩn nhất</option>
                      {zhVoices.map((v) => (
                        <option key={v.name} value={v.name}>
                          {getFriendlyVoiceLabel(v)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
                    <span className="inline-flex items-center gap-1.5">
                      <Languages className="h-3.5 w-3.5" /> Hiện Pinyin
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={
                        mode === "dictation" ? globalShowPinyin : taskShowPinyin
                      }
                      onClick={() =>
                        mode === "dictation"
                          ? setGlobalShowPinyin((p) => !p)
                          : setTaskShowPinyin((p) => !p)
                      }
                      className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
                        (mode === "dictation"
                          ? globalShowPinyin
                          : taskShowPinyin)
                          ? "bg-emerald-500"
                          : "bg-[#D6D3CD]"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                          (mode === "dictation"
                            ? globalShowPinyin
                            : taskShowPinyin)
                            ? "left-[18px]"
                            : "left-0.5"
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
                    <span>Tự động chuyển câu tiếp</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={autoAdvance}
                      onClick={() => setAutoAdvance((v) => !v)}
                      className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
                        autoAdvance ? "bg-emerald-500" : "bg-[#D6D3CD]"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                          autoAdvance ? "left-[18px]" : "left-0.5"
                        }`}
                      />
                    </button>
                  </label>

                  {mode === "dictation" && (
                    <>
                      <div className="space-y-1.5 border-t border-[#F2F2F0] pt-3">
                        <span className="block text-xs font-semibold text-[#4A4540]">
                          Độ khó con
                        </span>
                        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
                          {(
                            [
                              { id: "all" as const, label: "Tất cả" },
                              { id: "basic" as const, label: "Cơ bản" },
                              { id: "advanced" as const, label: "Nâng cao" },
                            ]
                          ).map((sub) => (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => {
                                stopSpeaking();
                                setPlayingId(null);
                                setDictSubFilter(sub.id);
                                resetLessonProgress();
                              }}
                              className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                                dictSubFilter === sub.id
                                  ? "bg-white text-brand-active ring-1 ring-brand"
                                  : "text-[#737373] hover:text-[#262626]"
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <span className="block text-xs font-semibold text-[#4A4540]">
                          Mức ẩn từ
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {BLANK_RATIOS.map((r) => (
                            <button
                              key={r.value}
                              type="button"
                              onClick={() => handleChangeRatio(r.value)}
                              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                blankRatio === r.value
                                  ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                                  : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand"
                              }`}
                            >
                              {r.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <p className="border-t border-[#F2F2F0] pt-2.5 text-[11px] leading-relaxed text-[#737373]">
                        <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1 font-mono text-[10px] text-[#262626]">
                          Tab
                        </kbd>{" "}
                        tự điền ô trống ·{" "}
                        <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1 font-mono text-[10px] text-[#262626]">
                          Enter
                        </kbd>{" "}
                        kiểm tra ·{" "}
                        <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1 font-mono text-[10px] text-[#262626]">
                          Alt+R
                        </kbd>{" "}
                        nghe lại.
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ==================== MODE 1: DICTATION ==================== */}
      {mode === "dictation" && (
        <div className="space-y-3">
          {/* Level Filter (HSK0 -> HSK9) — single scrollable row */}
          <div className="no-scrollbar -mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-0.5">
            {(["ALL", ...HSK_LEVELS] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => handleChangeDictLevel(lvl)}
                className={`shrink-0 cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  dictLevel === lvl
                    ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                    : "border border-[#E5E5E0] bg-white text-[#4A4540] hover:border-brand"
                }`}
              >
                {getLevelDisplayLabel(lvl)}
              </button>
            ))}
            <span className="ml-auto shrink-0 pl-2 text-[11px] text-[#737373]">
              {levelLessons.length} bài
            </span>
          </div>

          {/* Lesson Selector — compact horizontal scroll so Câu 1 fits in first viewport */}
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-0.5">
            {levelLessons.map((lesson, idx) => {
              const isSelected = activeLesson?.id === lesson.id;
              return (
                <motion.button
                  key={lesson.id}
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  transition={TACTILE_SPRING}
                  onClick={() => handleSelectLesson(lesson.id)}
                  className={`w-48 shrink-0 cursor-pointer rounded-xl border px-3 py-2 text-left transition-colors ${
                    isSelected
                      ? "border-brand bg-brand-soft text-[#262626]"
                      : "border-[#E5E5E0] bg-white text-[#262626] hover:border-brand"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-semibold ${
                        isSelected ? "text-brand-active" : "text-[#737373]"
                      }`}
                    >
                      Bài {idx + 1} · {lesson.level}
                    </span>
                    <span className="rounded-md bg-[#F2F2F0] px-1.5 py-0.5 text-[10px] font-semibold text-[#4A4540]">
                      {lesson.sentences.length} câu
                    </span>
                  </div>
                  <div className="mt-0.5 line-clamp-1 text-xs font-semibold">
                    {lesson.titleZh ? `${lesson.titleZh} · ` : ""}
                    {lesson.title}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Lesson Workspace */}
          {activeLesson && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#E5E5E0] bg-white px-4 py-2.5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="rounded-md bg-brand-soft px-1.5 py-0.5 text-[10px] font-semibold text-brand-active">
                      {activeLesson.level} ·{" "}
                      {activeLesson.subDifficulty === "advanced"
                        ? "Nâng cao"
                        : "Cơ bản"}
                    </span>
                    <h2 className="truncate text-sm font-bold text-[#262626]">
                      {activeLesson.titleZh} — {activeLesson.title}
                    </h2>
                  </div>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TACTILE_SPRING}
                  onClick={playWholeLesson}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#D6D3CD] bg-[#FAF9F7] px-3 py-1.5 text-xs font-semibold text-[#262626] hover:border-brand hover:text-brand-active"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  {playingId === activeLesson.id
                    ? "Đang phát..."
                    : "Nghe cả bài"}
                </motion.button>
              </div>

              {/* Sentence Cards */}
              {tokenizedSentences.map(({ sentence, tokens }, sIdx) => {
                const blanks = tokens.filter((t) => t.isBlank);
                const correctCount = blanks.filter((t) =>
                  checkDictationWord(
                    inputs[`${sentence.id}:${t.index}`] ?? "",
                    t.cleanWord
                  )
                ).length;
                const isChecked = checkedSentences[sentence.id] ?? false;
                const isRevealed = revealedSentences[sentence.id] ?? false;
                const allCorrect =
                  blanks.length > 0 && correctCount === blanks.length;
                const showTrans = showTranslations[sentence.id] ?? false;
                const showPy =
                  showSentencePinyin[sentence.id] ?? globalShowPinyin;

                return (
                  <div
                    key={sentence.id}
                    className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    {/* Top Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-semibold text-[#4A4540]">
                          Câu {sIdx + 1}
                        </span>
                        <span className="text-xs font-medium text-[#737373]">
                          Đúng {correctCount}/{blanks.length} ô
                        </span>
                        {allCorrect && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-semibold text-[#15803D]">
                            <CheckCircle2 className="h-3 w-3" /> Hoàn thành (+15 XP)
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.95 }}
                          transition={TACTILE_SPRING}
                          onClick={() =>
                            playSentence(sentence.id, sentence.textZh)
                          }
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#D6D3CD] bg-[#FAF9F7] px-3 py-1.5 text-xs font-semibold text-[#262626] hover:border-brand hover:text-brand-active"
                        >
                          <Play className="h-3.5 w-3.5" />
                          {playingId === sentence.id
                            ? "Đang phát..."
                            : "Nghe câu"}
                        </motion.button>

                        <button
                          type="button"
                          onClick={() => handleHintSentence(sentence.id)}
                          disabled={allCorrect}
                          className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1.5 text-xs font-medium text-[#4A4540] hover:border-brand disabled:opacity-45"
                        >
                          <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                          Gợi ý
                        </button>

                        <button
                          type="button"
                          onClick={() => handleCheckSentence(sentence.id)}
                          className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-brand px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-brand-hover"
                        >
                          Kiểm tra
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setRevealedSentences((prev) => ({
                              ...prev,
                              [sentence.id]: !isRevealed,
                            }))
                          }
                          className={`inline-flex cursor-pointer items-center gap-1 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ${
                            isRevealed
                              ? "border-brand bg-brand-soft text-brand-active"
                              : "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand"
                          }`}
                        >
                          {isRevealed ? (
                            <EyeOff className="h-3.5 w-3.5" />
                          ) : (
                            <Eye className="h-3.5 w-3.5" />
                          )}
                          {isRevealed ? "Ẩn đáp án" : "Hiện đáp án"}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleResetSentence(sentence.id)}
                          className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-white px-2.5 py-1.5 text-xs font-medium text-[#737373] hover:text-[#262626]"
                          title="Làm lại câu này"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Optional Pinyin Line */}
                    {showPy && sentence.pinyin && (
                      <div className="rounded-lg bg-[#F2F2F0]/70 px-3 py-1.5 font-mono text-xs text-[#6B655E]">
                        Pinyin: {sentence.pinyin}
                      </div>
                    )}

                    {/* Inline Dictation Sentence with Auto-Sizing Inputs */}
                    <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-lg leading-loose text-[#262626]">
                      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-2.5">
                        {tokens.map((tok) => {
                          if (!tok.isBlank) {
                            return (
                              <span
                                key={tok.index}
                                className="inline-flex items-baseline"
                              >
                                {tok.cleanWord ? (
                                  <>
                                    {tok.punctuationBefore && (
                                      <span>{tok.punctuationBefore}</span>
                                    )}
                                    <InteractiveChineseText
                                      text={tok.cleanWord}
                                    />
                                    {tok.punctuationAfter && (
                                      <span>{tok.punctuationAfter}</span>
                                    )}
                                  </>
                                ) : (
                                  <span>{tok.raw}</span>
                                )}
                              </span>
                            );
                          }

                          const key = `${sentence.id}:${tok.index}`;
                          const val = inputs[key] ?? "";
                          const isTabRevealed = tabRevealed[key] ?? false;
                          const isWordCorrect = checkDictationWord(
                            val,
                            tok.cleanWord
                          );
                          const isWordWrong =
                            (isChecked ||
                              val.trim().length >= tok.cleanWord.length) &&
                            val.trim().length > 0 &&
                            !isWordCorrect;

                          if (isWordCorrect && isChecked) {
                            return (
                              <span
                                key={tok.index}
                                className="inline-flex items-baseline"
                              >
                                {tok.punctuationBefore && (
                                  <span>{tok.punctuationBefore}</span>
                                )}
                                <span
                                  className={`rounded-lg border px-2 py-0.5 font-semibold ${
                                    isTabRevealed
                                      ? "border-[#FDE68A] bg-[#FFFBEB] text-[#92400E]"
                                      : "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                                  }`}
                                >
                                  <InteractiveChineseText
                                    text={tok.cleanWord}
                                  />
                                </span>
                                {tok.punctuationAfter && (
                                  <span>{tok.punctuationAfter}</span>
                                )}
                              </span>
                            );
                          }

                          const widthCh = Math.max(
                            tok.cleanWord.length * 2 + 3,
                            val.length * 2 + 3,
                            6
                          );

                          let inputStyle =
                            "border-[#D6D3CD] bg-white text-[#262626] focus:border-[#292524]";
                          if (isTabRevealed) {
                            inputStyle =
                              "bg-[#FFFBEB] border-[#FDE68A] text-[#92400E] font-semibold";
                          } else if (isWordCorrect) {
                            inputStyle =
                              "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                          } else if (
                            isWordWrong ||
                            (isChecked && !isWordCorrect)
                          ) {
                            inputStyle =
                              "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
                          }

                          return (
                            <span
                              key={tok.index}
                              className="inline-flex items-baseline"
                            >
                              {tok.punctuationBefore && (
                                <span>{tok.punctuationBefore}</span>
                              )}
                              <input
                                ref={(el) => {
                                  inputRefs.current[key] = el;
                                }}
                                type="text"
                                value={val}
                                onFocus={() => setFocusedKey(key)}
                                placeholder="___"
                                onChange={(e) => {
                                  const next = e.target.value;
                                  setInputs((prev) => ({
                                    ...prev,
                                    [key]: next,
                                  }));
                                  if (isTabRevealed) {
                                    setTabRevealed((prev) => {
                                      const copy = { ...prev };
                                      delete copy[key];
                                      return copy;
                                    });
                                  }
                                  if (
                                    checkDictationWord(next, tok.cleanWord)
                                  ) {
                                    const allSolved = blanks.every((b) =>
                                      b.index === tok.index
                                        ? true
                                        : checkDictationWord(
                                            inputs[
                                              `${sentence.id}:${b.index}`
                                            ] ?? "",
                                            b.cleanWord
                                          )
                                    );
                                    if (
                                      allSolved &&
                                      !xpAwardedSentences[sentence.id]
                                    ) {
                                      setXpAwardedSentences((prev) => ({
                                        ...prev,
                                        [sentence.id]: true,
                                      }));
                                      addXP(15);
                                    }
                                  }
                                }}
                                onKeyDown={(e) => {
                                  if (
                                    (e.altKey &&
                                      e.key.toLowerCase() === "r") ||
                                    (e.ctrlKey && e.code === "Space")
                                  ) {
                                    e.preventDefault();
                                    playSentence(
                                      sentence.id,
                                      sentence.textZh
                                    );
                                    return;
                                  }
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    focusNextBlank(key, false);
                                  } else if (e.key === "Tab") {
                                    e.preventDefault();
                                    if (e.shiftKey) {
                                      focusNextBlank(key, true);
                                    } else {
                                      setInputs((prev) => ({
                                        ...prev,
                                        [key]: tok.cleanWord,
                                      }));
                                      setTabRevealed((prev) => ({
                                        ...prev,
                                        [key]: true,
                                      }));
                                      focusNextBlank(key, false);
                                    }
                                  }
                                }}
                                style={{ width: `${widthCh}ch` }}
                                autoComplete="off"
                                autoCorrect="off"
                                spellCheck={false}
                                aria-label={`Ô trống chữ Hán số ${tok.index + 1}`}
                                className={`rounded-lg border px-2 py-0.5 text-center text-base transition-colors focus:outline-none ${inputStyle}`}
                              />
                              {tok.punctuationAfter && (
                                <span>{tok.punctuationAfter}</span>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Footer: Pinyin & Translation toggles */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-[#737373]">
                        <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
                          Tab
                        </kbd>{" "}
                        tự động điền &amp; hiện đáp án ô trống ·{" "}
                        <kbd className="rounded border border-[#E5E5E0] bg-[#FAF9F7] px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
                          Enter
                        </kbd>{" "}
                        nhảy sang ô tiếp
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setShowSentencePinyin((prev) => ({
                              ...prev,
                              [sentence.id]: !showPy,
                            }))
                          }
                          className="inline-flex cursor-pointer items-center gap-1 font-medium text-[#6B655E] hover:text-[#262626]"
                        >
                          <Languages className="h-3.5 w-3.5" />
                          {showPy ? "Ẩn Pinyin" : "Hiện Pinyin"}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setShowTranslations((prev) => ({
                              ...prev,
                              [sentence.id]: !showTrans,
                            }))
                          }
                          className="inline-flex cursor-pointer items-center gap-1 font-medium text-[#6B655E] hover:text-[#262626]"
                        >
                          {showTrans ? (
                            <EyeOff className="h-3.5 w-3.5" />
                          ) : (
                            <Eye className="h-3.5 w-3.5" />
                          )}
                          {showTrans
                            ? "Ẩn dịch tiếng Việt"
                            : "Dịch tiếng Việt"}
                        </button>
                      </div>
                    </div>

                    {isRevealed && (
                      <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2.5 text-sm text-[#262626]">
                        <span className="mr-2 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                          Đáp án chữ Hán chuẩn:
                        </span>
                        <InteractiveChineseText
                          text={sentence.textZh}
                          pinyin={sentence.pinyin}
                          showPinyin={showPy}
                        />
                      </div>
                    )}

                    {showTrans && (
                      <div className="rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs text-[#4A4540]">
                        <span className="font-semibold text-[#737373]">
                          Nghĩa tiếng Việt:{" "}
                        </span>
                        {sentence.translationVi}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ==================== MODE 2: 4 TASK NGHE HIỂU CHUẨN HSK ==================== */}
      {mode === "tasks" && (
        <div className="space-y-5">
          {/* Independent HSK0..HSK9 + Sub-Difficulty Filter */}
          <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Cấp độ:
              </span>
              {(["ALL", ...HSK_LEVELS] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    stopSpeaking();
                    setPlayingId(null);
                    setTaskLevel(lvl);
                  }}
                  className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                    taskLevel === lvl
                      ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                      : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-brand"
                  }`}
                >
                  {getLevelDisplayLabel(lvl)}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#F2F2F0] pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Phân tầng câu hỏi:
              </span>
              <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-1">
                {(
                  [
                    {
                      id: "all" as const,
                      label: "Tất cả",
                      count: levelFilteredTasks.length,
                    },
                    {
                      id: "basic" as const,
                      label: "Cơ bản",
                      count: basicTaskCount,
                    },
                    {
                      id: "advanced" as const,
                      label: "Nâng cao",
                      count: advancedTaskCount,
                    },
                  ]
                ).map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      stopSpeaking();
                      setPlayingId(null);
                      setTaskSubFilter(sub.id);
                    }}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      taskSubFilter === sub.id
                        ? "bg-white text-brand-active ring-1 ring-brand"
                        : "text-[#4A4540] hover:text-[#262626]"
                    }`}
                  >
                    <span>{sub.label}</span>
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                        taskSubFilter === sub.id
                          ? "bg-brand-soft text-brand-active"
                          : "bg-[#F2F2F0] text-[#737373]"
                      }`}
                    >
                      {sub.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Task Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {taskTabs.map((tab) => {
              const active = activeTab === tab.id;
              const tabCount = levelFilteredTasks.filter((t, idx) => {
                if (t.taskType !== tab.id) return false;
                if (taskSubFilter === "all") return true;
                return (
                  getSubDifficulty(t, idx, levelFilteredTasks.length) ===
                  taskSubFilter
                );
              }).length;

              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  transition={TACTILE_SPRING}
                  onClick={() => {
                    stopSpeaking();
                    setActiveTab(tab.id);
                  }}
                  className={`cursor-pointer rounded-xl border px-3 py-2.5 text-left transition-colors ${
                    active
                      ? "border-brand bg-brand-soft text-[#262626]"
                      : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-brand"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <div className={`text-xs font-semibold ${active ? "text-brand-active" : ""}`}>{tab.label}</div>
                    <span
                      className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                        active
                          ? "bg-white text-brand-active"
                          : "bg-[#F2F2F0] text-[#737373]"
                      }`}
                    >
                      {tabCount} câu
                    </span>
                  </div>
                  <div
                    className={`mt-0.5 line-clamp-1 text-[11px] ${
                      active ? "text-[#4A4540]" : "text-[#737373]"
                    }`}
                  >
                    {tab.desc}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Task Cards */}
          <div className="space-y-4">
            {tasks.map((task, idx) => {
              const chosen = selectedAnswers[task.id];
              const isCorrect = chosen === task.correctAnswer;
              const showTranscript = shownTranscripts[task.id] ?? false;

              return (
                <div
                  key={task.id}
                  className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand-active">
                        Câu {idx + 1} · {task.level}
                      </span>
                      <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 text-[11px] font-medium text-[#4A4540]">
                        {task.subDifficulty === "advanced"
                          ? "Nâng cao"
                          : "Cơ bản"}
                      </span>
                      <h2 className="text-sm font-semibold text-[#262626]">
                        {task.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={TACTILE_SPRING}
                        onClick={() => playTaskAudio(task)}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-brand-hover"
                      >
                        <Play className="h-3.5 w-3.5" />
                        {playingId === task.id
                          ? "Đang phát..."
                          : "Nghe audio (zh-CN)"}
                      </motion.button>
                      <button
                        type="button"
                        onClick={() =>
                          setShownTranscripts((prev) => ({
                            ...prev,
                            [task.id]: !showTranscript,
                          }))
                        }
                        className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1.5 text-xs font-medium text-[#57534E] hover:border-[#6B655E]"
                      >
                        {showTranscript ? (
                          <EyeOff className="h-3.5 w-3.5" />
                        ) : (
                          <Eye className="h-3.5 w-3.5" />
                        )}
                        Transcript
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#262626]">
                    {task.questionVi}
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {task.options.map((opt) => {
                      const isPicked = chosen === opt;
                      const isRightOpt = opt === task.correctAnswer;
                      let style =
                        "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]";
                      if (chosen) {
                        if (isRightOpt)
                          style =
                            "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                        else if (isPicked)
                          style =
                            "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
                        else
                          style =
                            "border-[#E5E5E0] bg-white text-[#737373] opacity-65";
                      }
                      return (
                        <motion.button
                          key={opt}
                          type="button"
                          whileTap={!chosen ? { scale: 0.98 } : undefined}
                          onClick={() => handleSelectOption(task, opt)}
                          className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-left text-xs transition-colors sm:text-sm ${style}`}
                        >
                          {opt}
                        </motion.button>
                      );
                    })}
                  </div>

                  {chosen && (
                    <div
                      className={`flex items-start justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs ${
                        isCorrect
                          ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                          : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        )}
                        <span>{task.explanationVi}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedAnswers((prev) => {
                            const copy = { ...prev };
                            delete copy[task.id];
                            return copy;
                          })
                        }
                        className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-medium underline"
                      >
                        <RotateCcw className="h-3 w-3" /> Làm lại
                      </button>
                    </div>
                  )}

                  {showTranscript && (
                    <div className="space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                        Transcript chữ Hán · Nhấp vào bất kỳ từ nào để tra nghĩa &amp; Bộ thủ
                      </div>
                      <div className="text-base leading-relaxed text-[#262626]">
                        <InteractiveChineseText
                          text={task.audioZh}
                          pinyin={task.pinyin}
                          showPinyin={taskShowPinyin}
                        />
                      </div>
                      {taskShowPinyin && task.pinyin && (
                        <p className="font-mono text-xs text-[#6B655E]">
                          {task.pinyin}
                        </p>
                      )}
                      {task.transcriptVi && (
                        <p className="border-t border-[#E5E5E0] pt-2 text-xs text-[#4A4540]">
                          <strong className="text-[#737373]">Dịch nghĩa: </strong>
                          {task.transcriptVi}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <ResourceBanner
        resources={getResourcesByCategory(["listening"])}
        heading="Giáo trình Luyện Nghe Cấp Tốc 1–3 + File nghe MP3 (Google Drive)"
      />
    </div>
  );
}
