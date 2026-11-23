"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  Volume2,
  XCircle,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import {
  DICTATION_LESSONS,
  type DictationLesson,
} from "@/data/listening-dictation";
import {
  LISTENING_EXTRA_MANIFEST,
  loadListeningExtraByLevel,
} from "@/data/skills/listening";
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

const SPEEDS = [0.75, 0.95, 1.0, 1.25] as const;

const BLANK_RATIOS: { value: BlankRatio; shortLabel: string; label: string }[] = [
  { value: 20, shortLabel: "20%", label: "Mới bắt đầu (20%)" },
  { value: 35, shortLabel: "35%", label: "Cơ bản (35%)" },
  { value: 60, shortLabel: "60%", label: "Thử thách (60%)" },
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

const HSK_ORDER: Record<HSKLevel, number> = {
  HSK0: 0,
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6,
  HSK7: 7,
  HSK8: 8,
  HSK9: 9,
};

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

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // ---- Dictation Mode State ----
  const [dictLevel, setDictLevel] = useState<HSKLevel | "ALL" | "HSK7-9">("HSK0");
  const [dictSubFilter, setDictSubFilter] = useState<SubFilter>("all");
  const [extraDictLessons, setExtraDictLessons] = useState<DictationLesson[]>([]);
  const [isLoadingExtraDict, setIsLoadingExtraDict] = useState<boolean>(false);
  const [blankRatio, setBlankRatio] = useState<BlankRatio>(20);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    DICTATION_LESSONS[0]?.id ?? ""
  );
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [globalShowPinyin, setGlobalShowPinyin] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [tabRevealed, setTabRevealed] = useState<Record<string, boolean>>({});
  const [checkedSentences, setCheckedSentences] = useState<Record<string, boolean>>({});
  const [revealedSentences, setRevealedSentences] = useState<Record<string, boolean>>({});
  const [xpAwardedSentences, setXpAwardedSentences] = useState<Record<string, boolean>>({});
  const [showTranslations, setShowTranslations] = useState<Record<string, boolean>>({});
  const [showSentencePinyin, setShowSentencePinyin] = useState<Record<string, boolean>>({});
  const [focusedKey, setFocusedKey] = useState<string | null>(null);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // ---- 4 Task Quiz Mode State ----
  const [taskLevel, setTaskLevel] = useState<"ALL" | HSKLevel | "HSK7-9">("ALL");
  const [taskSubFilter, setTaskSubFilter] = useState<SubFilter>("all");
  const [activeTab, setActiveTab] = useState<ListeningTaskType>("task1-single");
  const [taskIndex, setTaskIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [shownTranscripts, setShownTranscripts] = useState<Record<string, boolean>>({});
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

  useEffect(() => {
    let cancelled = false;
    setIsLoadingExtraDict(true);
    loadListeningExtraByLevel(dictLevel)
      .then((loaded) => {
        if (!cancelled) setExtraDictLessons(loaded);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingExtraDict(false);
      });
    return () => {
      cancelled = true;
    };
  }, [dictLevel]);

  // ---- Dictation Filtering ----
  const levelLessons = useMemo<DictationLesson[]>(() => {
    const baseByLevel =
      dictLevel === "ALL"
        ? DICTATION_LESSONS
        : dictLevel === "HSK7-9"
          ? DICTATION_LESSONS.filter((l) =>
              ["HSK7", "HSK8", "HSK9"].includes(l.level)
            )
          : DICTATION_LESSONS.filter((l) => l.level === dictLevel);
    const seen = new Set(baseByLevel.map((l) => l.id));
    const merged = [
      ...baseByLevel,
      ...extraDictLessons.filter((l) => !seen.has(l.id)),
    ].sort((a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]);
    if (dictSubFilter === "all") return merged;
    return merged.filter(
      (l, idx) => getSubDifficulty(l, idx, merged.length) === dictSubFilter
    );
  }, [dictLevel, dictSubFilter, extraDictLessons]);

  const activeLesson = useMemo<DictationLesson | undefined>(
    () => levelLessons.find((l) => l.id === selectedLessonId) ?? levelLessons[0],
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

  const safeSentenceIndex = Math.min(
    sentenceIndex,
    Math.max(0, tokenizedSentences.length - 1)
  );
  const currentEntry = tokenizedSentences[safeSentenceIndex];

  const currentBlankKeys = useMemo(() => {
    if (!currentEntry) return [];
    return currentEntry.tokens
      .filter((tok) => tok.isBlank)
      .map((tok) => `${currentEntry.sentence.id}:${tok.index}`);
  }, [currentEntry]);

  const completedSentenceIndices = useMemo(() => {
    const set = new Set<number>();
    tokenizedSentences.forEach((entry, idx) => {
      const blanks = entry.tokens.filter((t) => t.isBlank);
      if (
        blanks.length > 0 &&
        blanks.every((t) =>
          checkDictationWord(
            inputs[`${entry.sentence.id}:${t.index}`] ?? "",
            t.cleanWord
          )
        )
      ) {
        set.add(idx);
      }
    });
    return set;
  }, [tokenizedSentences, inputs]);

  const resetLessonProgress = () => {
    setInputs({});
    setTabRevealed({});
    setCheckedSentences({});
    setRevealedSentences({});
    setFocusedKey(null);
    setSentenceIndex(0);
  };

  const handleChangeDictLevel = (lvl: HSKLevel | "ALL" | "HSK7-9") => {
    stopSpeaking();
    setPlayingId(null);
    setDictLevel(lvl);
    const matches =
      lvl === "ALL"
        ? DICTATION_LESSONS
        : lvl === "HSK7-9"
          ? DICTATION_LESSONS.filter((l) =>
              ["HSK7", "HSK8", "HSK9"].includes(l.level)
            )
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

  const playSentence = useCallback(
    (id: string, textZh: string) => {
      stopSpeaking();
      setPlayingId(id);
      speakChinese(textZh, speed, () => setPlayingId(null));
    },
    [speed]
  );

  const playWholeLesson = () => {
    if (!activeLesson) return;
    stopSpeaking();
    const fullText = activeLesson.sentences.map((s) => s.textZh).join(" ");
    setPlayingId(activeLesson.id);
    speakChinese(fullText, speed, () => setPlayingId(null));
  };

  const goToSentence = useCallback(
    (nextIdx: number) => {
      if (nextIdx < 0 || nextIdx >= tokenizedSentences.length) return;
      stopSpeaking();
      setPlayingId(null);
      setSentenceIndex(nextIdx);
      setFocusedKey(null);
    },
    [tokenizedSentences.length]
  );

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

    if (allCorrect && autoAdvance && safeSentenceIndex < tokenizedSentences.length - 1) {
      const nextIdx = safeSentenceIndex + 1;
      const next = tokenizedSentences[nextIdx];
      setTimeout(() => {
        setSentenceIndex(nextIdx);
        if (next) playSentence(next.sentence.id, next.sentence.textZh);
      }, 400);
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

  const safeTaskIndex = Math.min(taskIndex, Math.max(0, tasks.length - 1));
  const currentTask = tasks[safeTaskIndex];

  const completedTaskIndices = useMemo(() => {
    const set = new Set<number>();
    tasks.forEach((t, idx) => {
      if (selectedAnswers[t.id] === t.correctAnswer) set.add(idx);
    });
    return set;
  }, [tasks, selectedAnswers]);

  const playTaskAudio = useCallback(
    (task: ListeningTaskItem) => {
      stopSpeaking();
      setPlayingId(task.id);
      speakChinese(task.audioZh, speed, () => setPlayingId(null));
    },
    [speed]
  );

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

  // Global Space & Alt+R shortcut for replaying audio
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT");

      if ((e.altKey && e.key.toLowerCase() === "r") || (!isInput && e.code === "Space")) {
        e.preventDefault();
        if (mode === "dictation" && currentEntry) {
          playSentence(currentEntry.sentence.id, currentEntry.sentence.textZh);
        } else if (mode === "tasks" && currentTask) {
          playTaskAudio(currentTask);
        }
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [mode, currentEntry, currentTask, playSentence, playTaskAudio]);

  // Sidebar items for each mode
  const sidebarLessons: SkillFocusLessonItem[] = useMemo(() => {
    if (mode === "dictation") {
      return levelLessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.titleZh ? `${lesson.titleZh} · ${lesson.title}` : lesson.title,
        badge: lesson.level,
        subtitle: lesson.subDifficulty === "advanced" ? "Nâng cao" : "Cơ bản",
        meta: `${lesson.sentences.length} câu`,
      }));
    }
    return taskTabs.map((tab) => {
      const tabCount = levelFilteredTasks.filter((t, idx) => {
        if (t.taskType !== tab.id) return false;
        if (taskSubFilter === "all") return true;
        return (
          getSubDifficulty(t, idx, levelFilteredTasks.length) === taskSubFilter
        );
      }).length;
      return {
        id: tab.id,
        title: tab.label,
        subtitle: tab.desc,
        meta: `${tabCount} câu`,
      };
    });
  }, [mode, levelLessons, taskTabs, levelFilteredTasks, taskSubFilter]);

  const totalDictSentences = useMemo(
    () => levelLessons.reduce((sum, l) => sum + l.sentences.length, 0),
    [levelLessons]
  );

  const extraManifestHint = useMemo(() => {
    if (!isLoadingExtraDict) return "";
    const pendingCount =
      dictLevel === "ALL"
        ? Object.values(LISTENING_EXTRA_MANIFEST).reduce((a, b) => a + b, 0)
        : dictLevel === "HSK7-9"
          ? LISTENING_EXTRA_MANIFEST.HSK7 +
            LISTENING_EXTRA_MANIFEST.HSK8 +
            LISTENING_EXTRA_MANIFEST.HSK9
          : LISTENING_EXTRA_MANIFEST[dictLevel] ?? 0;
    return pendingCount > 0 ? ` (+${pendingCount} đang tải...)` : "";
  }, [isLoadingExtraDict, dictLevel]);

  const currentLevelValue = mode === "dictation" ? dictLevel : taskLevel;
  const sidebarSummary =
    mode === "dictation"
      ? `${formatUnifiedHSKLabel(dictLevel)} · ${levelLessons.length} bài${extraManifestHint} · ${totalDictSentences} câu`
      : `${formatUnifiedHSKLabel(taskLevel)} · 4 Task · ${levelFilteredTasks.length} câu`;

  const currentTitle =
    mode === "dictation"
      ? activeLesson
        ? `${activeLesson.titleZh ? `${activeLesson.titleZh} — ` : ""}${activeLesson.title}`
        : "Nghe điền từ"
      : taskTabs.find((t) => t.id === activeTab)?.label ?? "Nghe hiểu HSK";

  // Dictation derived states for current sentence
  const sentence = currentEntry?.sentence;
  const tokens = currentEntry?.tokens ?? [];
  const blanks = tokens.filter((t) => t.isBlank);
  const correctCount = sentence
    ? blanks.filter((t) =>
        checkDictationWord(inputs[`${sentence.id}:${t.index}`] ?? "", t.cleanWord)
      ).length
    : 0;
  const isChecked = sentence ? checkedSentences[sentence.id] ?? false : false;
  const isRevealed = sentence ? revealedSentences[sentence.id] ?? false : false;
  const allCorrect = blanks.length > 0 && correctCount === blanks.length;
  const showTrans = sentence ? showTranslations[sentence.id] ?? false : false;
  const showPy = sentence
    ? showSentencePinyin[sentence.id] ?? globalShowPinyin
    : globalShowPinyin;

  const settingsContent = (
    <>
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

      <div className="space-y-1.5 border-t border-[#F2F2F0] pt-2.5">
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
          ).map((sub) => {
            const active =
              (mode === "dictation" ? dictSubFilter : taskSubFilter) === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => {
                  stopSpeaking();
                  setPlayingId(null);
                  if (mode === "dictation") {
                    setDictSubFilter(sub.id);
                    resetLessonProgress();
                  } else {
                    setTaskSubFilter(sub.id);
                    setTaskIndex(0);
                  }
                }}
                className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-white text-brand-active ring-1 ring-brand"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>

      <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
        <span className="inline-flex items-center gap-1.5">
          <Languages className="h-3.5 w-3.5" /> Hiện Pinyin
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={mode === "dictation" ? globalShowPinyin : taskShowPinyin}
          onClick={() =>
            mode === "dictation"
              ? setGlobalShowPinyin((p) => !p)
              : setTaskShowPinyin((p) => !p)
          }
          className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
            (mode === "dictation" ? globalShowPinyin : taskShowPinyin)
              ? "bg-brand"
              : "bg-[#D6D3CD]"
          }`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
              (mode === "dictation" ? globalShowPinyin : taskShowPinyin)
                ? "left-[18px]"
                : "left-0.5"
            }`}
          />
        </button>
      </label>

      {mode === "dictation" && (
        <label className="flex cursor-pointer items-center justify-between text-xs font-semibold text-[#4A4540]">
          <span>Tự động chuyển câu tiếp</span>
          <button
            type="button"
            role="switch"
            aria-checked={autoAdvance}
            onClick={() => setAutoAdvance((v) => !v)}
            className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
              autoAdvance ? "bg-brand" : "bg-[#D6D3CD]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                autoAdvance ? "left-[18px]" : "left-0.5"
              }`}
            />
          </button>
        </label>
      )}
    </>
  );

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={currentLevelValue}
      onHskLevelChange={(lvl) => {
        if (mode === "dictation") {
          handleChangeDictLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
        } else {
          stopSpeaking();
          setPlayingId(null);
          setTaskLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
          setTaskIndex(0);
        }
      }}
      allowAllLevel
      currentTitle={currentTitle}
      modeSlot={
        <div
          role="tablist"
          className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5"
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
              className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                mode === m.id
                  ? "bg-white text-brand-active shadow-2xs ring-1 ring-brand/60"
                  : "text-[#737373] hover:text-[#262626]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      }
      settingsBadge={`${speed}x`}
      settingsAriaLabel="Cài đặt nghe: tốc độ, giọng đọc, Pinyin, độ khó"
      settingsContent={settingsContent}
      sidebarTitle={mode === "dictation" ? "Bài nghe điền từ" : "4 Task Nghe HSK"}
      sidebarSummary={sidebarSummary}
      lessons={sidebarLessons}
      activeLessonId={
        mode === "dictation" ? activeLesson?.id ?? "" : activeTab
      }
      onSelectLesson={(id) => {
        if (mode === "dictation") {
          handleSelectLesson(id);
        } else {
          stopSpeaking();
          setPlayingId(null);
          setActiveTab(id as ListeningTaskType);
          setTaskIndex(0);
        }
      }}
      audioSlot={
        mode === "dictation" && sentence ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                transition={TACTILE_SPRING}
                onClick={() => playSentence(sentence.id, sentence.textZh)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-brand-hover"
              >
                <Play className="h-3.5 w-3.5" />
                {playingId === sentence.id ? "Đang phát..." : "Nghe câu này"}
              </motion.button>

              <button
                type="button"
                onClick={playWholeLesson}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-xs font-semibold text-[#4A4540] transition-colors hover:border-brand hover:text-brand-active"
              >
                <Volume2 className="h-3.5 w-3.5" />
                {playingId === activeLesson?.id ? "Đang phát bài..." : "Nghe cả bài"}
              </button>

              <span className="rounded-lg bg-white px-2 py-1 text-[11px] font-semibold text-[#737373] ring-1 ring-[#E5E5E0]">
                {speed}x · Đúng {correctCount}/{blanks.length} ô
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() =>
                  setShowSentencePinyin((prev) => ({
                    ...prev,
                    [sentence.id]: !showPy,
                  }))
                }
                className={`inline-flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  showPy
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-white text-[#57534E] hover:border-brand"
                }`}
              >
                <Languages className="h-3.5 w-3.5" />
                Pinyin
              </button>
              <button
                type="button"
                onClick={() =>
                  setShowTranslations((prev) => ({
                    ...prev,
                    [sentence.id]: !showTrans,
                  }))
                }
                className={`inline-flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  showTrans
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-white text-[#57534E] hover:border-brand"
                }`}
              >
                {showTrans ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                Dịch
              </button>
            </div>
          </div>
        ) : mode === "tasks" && currentTask ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                transition={TACTILE_SPRING}
                onClick={() => playTaskAudio(currentTask)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-brand-hover"
              >
                <Play className="h-3.5 w-3.5" />
                {playingId === currentTask.id ? "Đang phát..." : "Nghe audio (zh-CN)"}
              </motion.button>
              <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#57534E] ring-1 ring-[#E5E5E0]">
                {currentTask.level} ·{" "}
                {currentTask.subDifficulty === "advanced" ? "Nâng cao" : "Cơ bản"}
              </span>
            </div>
            <button
              type="button"
              onClick={() =>
                setShownTranscripts((prev) => ({
                  ...prev,
                  [currentTask.id]: !(prev[currentTask.id] ?? false),
                }))
              }
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1.5 text-xs font-medium text-[#57534E] hover:border-brand"
            >
              {shownTranscripts[currentTask.id] ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
              Transcript
            </button>
          </div>
        ) : null
      }
      shortcutHint={
        mode === "dictation" ? (
          <span>
            <kbd className="rounded border border-[#E5E5E0] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
              Space
            </kbd>{" "}
            /{" "}
            <kbd className="rounded border border-[#E5E5E0] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
              Alt+R
            </kbd>{" "}
            nghe lại ·{" "}
            <kbd className="rounded border border-[#E5E5E0] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
              Tab
            </kbd>{" "}
            gợi ý ·{" "}
            <kbd className="rounded border border-[#E5E5E0] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
              Enter
            </kbd>{" "}
            kiểm tra / câu tiếp
          </span>
        ) : (
          <span>
            <kbd className="rounded border border-[#E5E5E0] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#262626]">
              Space
            </kbd>{" "}
            nghe lại audio · chọn đáp án trực tiếp
          </span>
        )
      }
      footerOptionsSlot={
        mode === "dictation" && sentence ? (
          <>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-semibold text-[#737373]">
                Ẩn từ:
              </span>
              {BLANK_RATIOS.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => handleChangeRatio(r.value)}
                  className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                    blankRatio === r.value
                      ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                      : "border border-[#E5E5E0] bg-white text-[#57534E] hover:border-brand"
                  }`}
                >
                  {r.shortLabel}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleHintSentence(sentence.id)}
                disabled={allCorrect}
                className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs font-medium text-[#4A4540] hover:border-brand disabled:opacity-45"
              >
                <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                Gợi ý
              </button>
              <button
                type="button"
                onClick={() => handleCheckSentence(sentence.id)}
                className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-[#292524] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#4A4540]"
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
                    : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-brand"
                }`}
              >
                {isRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                Đáp án
              </button>
              <button
                type="button"
                onClick={() => handleResetSentence(sentence.id)}
                title="Làm lại câu này"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[#E5E5E0] bg-white p-1.5 text-[#737373] hover:text-[#262626]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>
          </>
        ) : undefined
      }
      feedbackSlot={
        mode === "dictation" && sentence && allCorrect ? (
          <div className="flex items-center gap-2 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-2 text-xs font-semibold text-[#15803D]">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>Chính xác toàn bộ ô trống! (+15 XP)</span>
          </div>
        ) : undefined
      }
      pagination={
        mode === "dictation"
          ? {
              currentIndex: safeSentenceIndex,
              total: tokenizedSentences.length,
              onPrev: () => goToSentence(safeSentenceIndex - 1),
              onNext: () => goToSentence(safeSentenceIndex + 1),
              onJump: (idx) => goToSentence(idx),
              itemLabel: "Câu",
              completedIndices: completedSentenceIndices,
            }
          : {
              currentIndex: safeTaskIndex,
              total: tasks.length,
              onPrev: () => {
                stopSpeaking();
                setPlayingId(null);
                setTaskIndex((i) => Math.max(0, i - 1));
              },
              onNext: () => {
                stopSpeaking();
                setPlayingId(null);
                setTaskIndex((i) => Math.min(tasks.length - 1, i + 1));
              },
              onJump: (idx) => {
                stopSpeaking();
                setPlayingId(null);
                setTaskIndex(idx);
              },
              itemLabel: "Câu",
              completedIndices: completedTaskIndices,
            }
      }
    >
      {/* ==================== MODE 1: SINGLE-SENTENCE DICTATION ==================== */}
      {mode === "dictation" &&
        (sentence ? (
          <div className="space-y-4">
            {showPy && sentence.pinyin && (
              <div className="rounded-xl bg-[#F2F2F0]/70 px-3.5 py-2 font-mono text-xs text-[#6B655E]">
                Pinyin: {sentence.pinyin}
              </div>
            )}

            <div className="min-h-[120px] rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5 text-xl leading-loose text-[#262626] sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-3">
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
                            <InteractiveChineseText text={tok.cleanWord} />
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
                  const isWordCorrect = checkDictationWord(val, tok.cleanWord);
                  const isWordWrong =
                    (isChecked || val.trim().length >= tok.cleanWord.length) &&
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
                          <InteractiveChineseText text={tok.cleanWord} />
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
                    "border-[#D6D3CD] bg-white text-[#262626] focus:border-brand";
                  if (isTabRevealed) {
                    inputStyle =
                      "bg-[#FFFBEB] border-[#FDE68A] text-[#92400E] font-semibold";
                  } else if (isWordCorrect) {
                    inputStyle =
                      "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                  } else if (isWordWrong || (isChecked && !isWordCorrect)) {
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
                          setInputs((prev) => ({ ...prev, [key]: next }));
                          if (isTabRevealed) {
                            setTabRevealed((prev) => {
                              const copy = { ...prev };
                              delete copy[key];
                              return copy;
                            });
                          }
                          if (checkDictationWord(next, tok.cleanWord)) {
                            const allSolved = blanks.every((b) =>
                              b.index === tok.index
                                ? true
                                : checkDictationWord(
                                    inputs[`${sentence.id}:${b.index}`] ?? "",
                                    b.cleanWord
                                  )
                            );
                            if (allSolved && !xpAwardedSentences[sentence.id]) {
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
                            (e.altKey && e.key.toLowerCase() === "r") ||
                            (e.ctrlKey && e.code === "Space")
                          ) {
                            e.preventDefault();
                            playSentence(sentence.id, sentence.textZh);
                            return;
                          }
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const idxInSentence = currentBlankKeys.indexOf(key);
                            if (
                              idxInSentence !== -1 &&
                              idxInSentence < currentBlankKeys.length - 1
                            ) {
                              const nextKey = currentBlankKeys[idxInSentence + 1];
                              inputRefs.current[nextKey]?.focus();
                            } else if (allCorrect && isChecked) {
                              if (safeSentenceIndex < tokenizedSentences.length - 1) {
                                goToSentence(safeSentenceIndex + 1);
                              }
                            } else {
                              handleCheckSentence(sentence.id);
                            }
                          } else if (e.key === "Tab") {
                            e.preventDefault();
                            const idxInSentence = currentBlankKeys.indexOf(key);
                            if (e.shiftKey) {
                              if (idxInSentence > 0) {
                                inputRefs.current[
                                  currentBlankKeys[idxInSentence - 1]
                                ]?.focus();
                              }
                            } else {
                              setInputs((prev) => ({
                                ...prev,
                                [key]: tok.cleanWord,
                              }));
                              setTabRevealed((prev) => ({
                                ...prev,
                                [key]: true,
                              }));
                              if (
                                idxInSentence !== -1 &&
                                idxInSentence < currentBlankKeys.length - 1
                              ) {
                                inputRefs.current[
                                  currentBlankKeys[idxInSentence + 1]
                                ]?.focus();
                              }
                            }
                          }
                        }}
                        style={{ width: `${widthCh}ch` }}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck={false}
                        aria-label={`Ô trống chữ Hán số ${tok.index + 1}`}
                        className={`rounded-lg border px-2 py-0.5 text-center text-lg transition-colors focus:outline-none ${inputStyle}`}
                      />
                      {tok.punctuationAfter && (
                        <span>{tok.punctuationAfter}</span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            {isRevealed && (
              <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-4 py-3 text-base text-[#262626]">
                <span className="mr-2 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Đáp án chuẩn:
                </span>
                <InteractiveChineseText
                  text={sentence.textZh}
                  pinyin={sentence.pinyin}
                  showPinyin={showPy}
                />
              </div>
            )}

            {showTrans && (
              <div className="rounded-xl border border-[#E5E5E0] bg-white px-4 py-3 text-sm text-[#4A4540]">
                <span className="font-semibold text-[#737373]">
                  Nghĩa tiếng Việt:{" "}
                </span>
                {sentence.translationVi}
              </div>
            )}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chưa có bài nghe điền từ cho cấp độ này.
          </p>
        ))}

      {/* ==================== MODE 2: SINGLE-QUESTION 4 TASK HSK ==================== */}
      {mode === "tasks" &&
        (currentTask ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#737373]">
                {currentTask.title}
              </p>
              <h2 className="mt-1 text-base font-bold text-[#262626] sm:text-lg">
                {currentTask.questionVi}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {currentTask.options.map((opt) => {
                const chosen = selectedAnswers[currentTask.id];
                const isPicked = chosen === opt;
                const isRightOpt = opt === currentTask.correctAnswer;
                let style =
                  "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand";
                if (chosen) {
                  if (isRightOpt)
                    style =
                      "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] font-semibold";
                  else if (isPicked)
                    style = "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]";
                  else
                    style =
                      "border-[#E5E5E0] bg-white text-[#737373] opacity-65";
                }
                return (
                  <motion.button
                    key={opt}
                    type="button"
                    whileTap={!chosen ? { scale: 0.98 } : undefined}
                    onClick={() => handleSelectOption(currentTask, opt)}
                    className={`cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition-colors ${style}`}
                  >
                    {opt}
                  </motion.button>
                );
              })}
            </div>

            {selectedAnswers[currentTask.id] && (
              <div
                className={`flex items-start justify-between gap-2 rounded-xl border px-4 py-3 text-xs ${
                  selectedAnswers[currentTask.id] === currentTask.correctAnswer
                    ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                    : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                }`}
              >
                <div className="flex items-start gap-2">
                  {selectedAnswers[currentTask.id] ===
                  currentTask.correctAnswer ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{currentTask.explanationVi}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedAnswers((prev) => {
                      const copy = { ...prev };
                      delete copy[currentTask.id];
                      return copy;
                    })
                  }
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-medium underline"
                >
                  <RotateCcw className="h-3 w-3" /> Làm lại
                </button>
              </div>
            )}

            {shownTranscripts[currentTask.id] && (
              <div className="space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Transcript chữ Hán · Nhấp vào từ để tra nghĩa
                </div>
                <div className="text-base leading-relaxed text-[#262626]">
                  <InteractiveChineseText
                    text={currentTask.audioZh}
                    pinyin={currentTask.pinyin}
                    showPinyin={taskShowPinyin}
                  />
                </div>
                {taskShowPinyin && currentTask.pinyin && (
                  <p className="font-mono text-xs text-[#6B655E]">
                    {currentTask.pinyin}
                  </p>
                )}
                {currentTask.transcriptVi && (
                  <p className="border-t border-[#E5E5E0] pt-2 text-xs text-[#4A4540]">
                    <strong className="text-[#737373]">Dịch nghĩa: </strong>
                    {currentTask.transcriptVi}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-[#737373]">
            Chưa có câu hỏi cho Task &amp; cấp độ này.
          </p>
        ))}
    </SkillFocusLayout>
  );
}
