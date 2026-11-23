"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Languages,
  Mic,
  MicOff,
  Sparkles,
  Volume2,
  Wand2,
} from "lucide-react";
import {
  SPEAKING_SENTENCES,
  type SpeakingSentence,
} from "@/data/chinese/speaking";
import {
  SPEAKING_EXTRA_MANIFEST,
  SPEAKING_EXTRA_TOTAL,
  loadSpeakingExtraByLevel,
  type SpeakingShadowingLesson,
} from "@/data/skills/speaking";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  SkillFocusLayout,
  type SkillFocusLessonItem,
} from "@/components/ui/SkillFocusLayout";
import { formatUnifiedHSKLabel } from "@/components/ui/UnifiedFilterBar";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  speakChinese,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import { addXP, markLessonCompleted } from "@/lib/storage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import type { HSKLevel, SubDifficulty } from "@/types";

type SubFilter = "all" | SubDifficulty;
type SpeakingMode = "practice" | "shadowing" | "guide";

const PHONEME_CORRECTION_GUIDES = [
  {
    id: "jqx",
    code: "j / q / x",
    titleVi: "Nhóm âm mặt lưỡi (舌面音)",
    ruleVi:
      "Đặt đầu lưỡi hạ xuống chạm nhẹ mặt sau răng cửa dưới, nâng phần mặt lưỡi lên sát vòm cứng.",
    detailVi:
      "• j: Không bật hơi (như 'ch' nhẹ trong tiếng Việt, ví dụ 家 jiā, 进 jìn).\n• q: Bật hơi mạnh từ khe mặt lưỡi (ví dụ 请 qǐng, 钱 qián, 去 qù).\n• x: Xát nhẹ luồng hơi qua mặt lưỡi (ví dụ 谢 xiè, 学 xué). Khi đi với ü (ju, qu, xu), bỏ hai dấu chấm nhưng vẫn phải đọc tròn môi ü!",
  },
  {
    id: "zhchshr",
    code: "zh / ch / sh / r",
    titleVi: "Nhóm âm cuốn lưỡi / cong lưỡi (翘舌音)",
    ruleVi:
      "Uốn cong đầu lưỡi chạm hoặc tiến sát lên vòm cứng phía sau lợi răng cửa trên.",
    detailVi:
      "• zh: Cong lưỡi, không bật hơi (ví dụ 中 zhōng, 知 zhī).\n• ch: Cong lưỡi + BẬT HƠI MẠNH (ví dụ 吃 chī, 茶 chá, 出 chū).\n• sh: Cong lưỡi xát hơi (ví dụ 是 shì, 商 shāng).\n• r: Cong lưỡi rung dây thanh nhẹ (ví dụ 人 rén, 日 rì).",
  },
  {
    id: "zcs",
    code: "z / c / s",
    titleVi: "Nhóm âm đầu lưỡi thẳng (平舌音)",
    ruleVi:
      "Duỗi thẳng đầu lưỡi chạm mặt sau răng cửa trên, TUYỆT ĐỐI KHÔNG cong lưỡi.",
    detailVi:
      "• z: Lưỡi thẳng, không bật hơi (ví dụ 在 zài, 早 zǎo).\n• c: Lưỡi thẳng + BẬT HƠI SẮC (ví dụ 菜 cài, 次 cì, 错 cuò).\n• s: Lưỡi thẳng xát hơi nhẹ (ví dụ 三 sān, 四 sì).",
  },
  {
    id: "tone3",
    code: "Biến điệu Thanh 3 & 一 / 不",
    titleVi: "Quy tắc biến điệu cốt lõi (变调规则)",
    ruleVi:
      "Đọc đúng biến điệu giúp câu tiếng Trung tự nhiên, liền mạch như người bản xứ.",
    detailVi:
      "• Hai thanh 3 đi liền (3 + 3 → 2 + 3): Âm đầu đọc lên giọng như thanh 2 (ví dụ 你好 nǐ hǎo → ní hǎo, 可以 kěyǐ → kéyǐ).\n• Biến điệu chữ 不 (bù): Đứng trước thanh 4 đọc thành thanh 2 (bú), ví dụ 不是 (bú shì), 不客气 (bú kèqi).\n• Biến điệu chữ 一 (yī): Trước thanh 4 đọc thành thanh 2 (yí 个 yí gè); trước thanh 1, 2, 3 đọc thành thanh 4 (yì 天 yì tiān, 一起 yìqǐ).",
  },
];

interface CharComparison {
  char: string;
  isHanzi: boolean;
  matched: boolean;
}

function compareHanziTranscript(
  targetZh: string,
  spokenZh: string
): {
  chars: CharComparison[];
  hanziTotal: number;
  hanziMatched: number;
  accuracy: number;
} {
  const spokenHanziSet = new Set(
    Array.from(spokenZh).filter((ch) => /\p{Script=Han}/u.test(ch))
  );

  const chars: CharComparison[] = Array.from(targetZh).map((ch) => {
    const isHanzi = /\p{Script=Han}/u.test(ch);
    return {
      char: ch,
      isHanzi,
      matched: isHanzi ? spokenHanziSet.has(ch) : true,
    };
  });

  const hanziTokens = chars.filter((c) => c.isHanzi);
  const hanziMatched = hanziTokens.filter((c) => c.matched).length;
  const accuracy =
    hanziTokens.length > 0
      ? Math.round((hanziMatched / hanziTokens.length) * 100)
      : 0;

  return {
    chars,
    hanziTotal: hanziTokens.length,
    hanziMatched,
    accuracy,
  };
}

function getSubDifficulty(
  item: { subDifficulty?: SubDifficulty },
  idx: number,
  total: number
): SubDifficulty {
  if (item.subDifficulty === "basic" || item.subDifficulty === "advanced") {
    return item.subDifficulty;
  }
  return idx < Math.ceil(total / 2) ? "basic" : "advanced";
}

export default function SpeakingPage() {
  const [mode, setMode] = useState<SpeakingMode>("practice");
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | HSKLevel | "HSK7-9">("ALL");
  const [selectedSubFilter, setSelectedSubFilter] = useState<SubFilter>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shadowLessons, setShadowLessons] = useState<SpeakingShadowingLesson[]>([]);
  const [isLoadingShadow, setIsLoadingShadow] = useState(false);
  const [selectedShadowLessonId, setSelectedShadowLessonId] = useState("");
  const [shadowSentenceIndex, setShadowSentenceIndex] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [supported, setSupported] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingModel, setIsSpeakingModel] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [xpAwarded, setXpAwarded] = useState<number | null>(null);
  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>({});

  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);

  useEffect(() => {
    setSupported(isSpeechRecognitionSupported());
    return () => {
      recognizerRef.current?.abort();
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    if (mode !== "shadowing") return;
    let cancelled = false;
    setIsLoadingShadow(true);
    loadSpeakingExtraByLevel(selectedLevel)
      .then((loaded) => {
        if (!cancelled) setShadowLessons(loaded);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingShadow(false);
      });
    return () => {
      cancelled = true;
    };
  }, [mode, selectedLevel]);

  const filteredShadowLessons = useMemo<SpeakingShadowingLesson[]>(() => {
    if (selectedSubFilter === "all") return shadowLessons;
    return shadowLessons.filter(
      (l, idx) =>
        getSubDifficulty(l, idx, shadowLessons.length) === selectedSubFilter
    );
  }, [shadowLessons, selectedSubFilter]);

  const activeShadowLesson = useMemo<SpeakingShadowingLesson | undefined>(
    () =>
      filteredShadowLessons.find((l) => l.id === selectedShadowLessonId) ??
      filteredShadowLessons[0],
    [filteredShadowLessons, selectedShadowLessonId]
  );

  const levelSentences = useMemo<SpeakingSentence[]>(
    () =>
      selectedLevel === "ALL"
        ? SPEAKING_SENTENCES
        : selectedLevel === "HSK7-9"
          ? SPEAKING_SENTENCES.filter((s) =>
              ["HSK7", "HSK8", "HSK9"].includes(s.level)
            )
          : SPEAKING_SENTENCES.filter((s) => s.level === selectedLevel),
    [selectedLevel]
  );

  const filteredSentences = useMemo<SpeakingSentence[]>(() => {
    if (selectedSubFilter === "all") return levelSentences;
    return levelSentences.filter(
      (s, idx) =>
        getSubDifficulty(s, idx, levelSentences.length) === selectedSubFilter
    );
  }, [levelSentences, selectedSubFilter]);

  const activeSentences =
    mode === "shadowing"
      ? activeShadowLesson?.sentences ?? []
      : filteredSentences;

  const activeIndex = mode === "shadowing" ? shadowSentenceIndex : currentIndex;
  const safeIndex = Math.min(
    activeIndex,
    Math.max(0, activeSentences.length - 1)
  );
  const currentSentence =
    mode === "shadowing"
      ? activeSentences[safeIndex]
      : activeSentences[safeIndex] ?? SPEAKING_SENTENCES[0];

  const completedIndices = useMemo(() => {
    const set = new Set<number>();
    activeSentences.forEach((s, idx) => {
      if (completedIds[s.id]) set.add(idx);
    });
    return set;
  }, [activeSentences, completedIds]);

  const resetPractice = () => {
    recognizerRef.current?.abort();
    stopSpeaking();
    setIsListening(false);
    setIsSpeakingModel(false);
    setSpokenText("");
    setErrorMsg(null);
    setXpAwarded(null);
  };

  const handlePlayModel = (rate: number) => {
    if (!currentSentence) return;
    stopSpeaking();
    setIsSpeakingModel(true);
    speakChinese(currentSentence.hanzi, rate, () => {
      setIsSpeakingModel(false);
    });
  };

  const handlePlayWholeShadowLesson = () => {
    if (!activeShadowLesson) return;
    stopSpeaking();
    setIsSpeakingModel(true);
    const fullText = activeShadowLesson.sentences.map((s) => s.hanzi).join(" ");
    speakChinese(fullText, 0.95, () => {
      setIsSpeakingModel(false);
    });
  };

  const awardResultXP = (transcript: string) => {
    if (!currentSentence) return;
    const { accuracy } = compareHanziTranscript(
      currentSentence.hanzi,
      transcript
    );
    if (accuracy >= 60) {
      const reward = accuracy >= 85 ? 20 : 10;
      markLessonCompleted(currentSentence.id, "speaking", 8, reward);
      if (accuracy === 100) addXP(5);
      setXpAwarded(accuracy === 100 ? reward + 5 : reward);
      setCompletedIds((prev) => ({ ...prev, [currentSentence.id]: true }));
    }
  };

  const handleToggleMic = () => {
    if (isListening) {
      recognizerRef.current?.stop();
      setIsListening(false);
      return;
    }

    stopSpeaking();
    setErrorMsg(null);
    setSpokenText("");
    setXpAwarded(null);

    const recognizer = createChineseRecognizer(
      {
        onResult: (transcript, isFinal) => {
          setSpokenText(transcript);
          if (isFinal && transcript) {
            awardResultXP(transcript);
          }
        },
        onError: (err) => {
          setIsListening(false);
          if (err === "not-allowed") {
            setErrorMsg(
              "Trình duyệt chưa được cấp quyền Microphone. Vui lòng cho phép micro hoặc bấm 'Thử mô phỏng phát âm'."
            );
          } else {
            setErrorMsg(
              `Không thể nhận diện giọng nói (${err}). Hãy thử lại hoặc dùng nút mô phỏng.`
            );
          }
        },
        onEnd: () => {
          setIsListening(false);
        },
      },
      { continuous: false, interimResults: true, lang: "zh-CN" }
    );

    if (!recognizer) {
      setSupported(false);
      return;
    }

    recognizerRef.current = recognizer;
    setIsListening(true);
    try {
      recognizer.start();
    } catch {
      setIsListening(false);
      setErrorMsg("Không thể khởi động micro. Vui lòng thử lại.");
    }
  };

  const handleDemoSimulation = () => {
    if (!currentSentence) return;
    const hanziChars = Array.from(String(currentSentence.hanzi)).filter((ch) =>
      /\p{Script=Han}/u.test(ch)
    );
    const skipIndex =
      hanziChars.length > 3 ? Math.floor(hanziChars.length / 2) : -1;
    const simulated = hanziChars
      .filter((_, idx) => idx !== skipIndex)
      .join("");
    setSpokenText(simulated);
    setErrorMsg(null);
    awardResultXP(simulated);
  };

  const comparison =
    spokenText && currentSentence
      ? compareHanziTranscript(currentSentence.hanzi, spokenText)
      : null;

  const sidebarLessons: SkillFocusLessonItem[] = useMemo(() => {
    if (mode === "shadowing") {
      return filteredShadowLessons.map((lesson) => {
        const allDone =
          lesson.sentences.length > 0 &&
          lesson.sentences.every((s) => Boolean(completedIds[s.id]));
        return {
          id: lesson.id,
          title: lesson.titleZh
            ? `${lesson.titleZh} · ${lesson.title}`
            : lesson.title,
          badge: lesson.level,
          subtitle: lesson.topic,
          meta: `${lesson.sentences.length} câu`,
          completed: allDone,
        };
      });
    }
    return filteredSentences.map((s) => ({
      id: s.id,
      title: s.hanzi,
      badge: s.level,
      subtitle: s.topic,
      completed: Boolean(completedIds[s.id]),
    }));
  }, [mode, filteredShadowLessons, filteredSentences, completedIds]);

  const shadowManifestPending = useMemo(() => {
    if (!isLoadingShadow) return "";
    const count =
      selectedLevel === "ALL"
        ? SPEAKING_EXTRA_TOTAL
        : selectedLevel === "HSK7-9"
          ? SPEAKING_EXTRA_MANIFEST.HSK7 +
            SPEAKING_EXTRA_MANIFEST.HSK8 +
            SPEAKING_EXTRA_MANIFEST.HSK9
          : SPEAKING_EXTRA_MANIFEST[selectedLevel] ?? 0;
    return count > 0 ? ` (+${count} đang tải...)` : "";
  }, [isLoadingShadow, selectedLevel]);

  return (
    <SkillFocusLayout
      backHref="/roadmap"
      hskLevel={selectedLevel}
      onHskLevelChange={(lvl) => {
        setSelectedLevel(lvl as "ALL" | HSKLevel | "HSK7-9");
        setCurrentIndex(0);
        setShadowSentenceIndex(0);
        resetPractice();
      }}
      allowAllLevel
      currentTitle={
        mode === "shadowing"
          ? activeShadowLesson
            ? `${activeShadowLesson.titleZh} — ${activeShadowLesson.title}`
            : "Shadowing theo bài"
          : mode === "practice"
            ? currentSentence
              ? `Luyện Nói · ${currentSentence.topic}`
              : "Luyện Nói & Shadowing"
            : "Cẩm nang sửa thanh điệu & âm bật hơi"
      }
      modeSlot={
        <div className="inline-flex rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-0.5">
          {(
            [
              { id: "practice" as const, label: "Câu lẻ" },
              { id: "shadowing" as const, label: `Shadowing (+${SPEAKING_EXTRA_TOTAL})` },
              { id: "guide" as const, label: "Cẩm nang âm" },
            ]
          ).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setMode(m.id);
                resetPractice();
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
      settingsBadge={showPinyin ? "Pinyin" : undefined}
      settingsAriaLabel="Cài đặt luyện nói"
      settingsContent={
        <>
          <div className="space-y-1.5">
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
                    setSelectedSubFilter(sub.id);
                    setCurrentIndex(0);
                    setShadowSentenceIndex(0);
                    resetPractice();
                  }}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                    selectedSubFilter === sub.id
                      ? "bg-white text-brand-active ring-1 ring-brand"
                      : "text-[#737373] hover:text-[#262626]"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <label className="flex cursor-pointer items-center justify-between border-t border-[#F2F2F0] pt-2.5 text-xs font-semibold text-[#4A4540]">
            <span className="inline-flex items-center gap-1.5">
              <Languages className="h-3.5 w-3.5" /> Hiện phiên âm Pinyin
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={showPinyin}
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${
                showPinyin ? "bg-brand" : "bg-[#D6D3CD]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                  showPinyin ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>
        </>
      }
      sidebarTitle={mode === "shadowing" ? "Bài Shadowing" : "Danh sách câu nói"}
      sidebarSummary={
        mode === "shadowing"
          ? `${formatUnifiedHSKLabel(selectedLevel)} · ${filteredShadowLessons.length} bài${shadowManifestPending}`
          : `${formatUnifiedHSKLabel(selectedLevel)} · ${filteredSentences.length} câu`
      }
      lessons={sidebarLessons}
      activeLessonId={
        mode === "shadowing"
          ? activeShadowLesson?.id ?? ""
          : currentSentence?.id ?? ""
      }
      onSelectLesson={(id) => {
        if (mode === "shadowing") {
          setSelectedShadowLessonId(id);
          setShadowSentenceIndex(0);
          resetPractice();
          return;
        }
        const idx = filteredSentences.findIndex((s) => s.id === id);
        if (idx !== -1) {
          setCurrentIndex(idx);
          setMode("practice");
          resetPractice();
        }
      }}
      audioSlot={
        (mode === "practice" || mode === "shadowing") && currentSentence ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handlePlayModel(1.0)}
                disabled={isSpeakingModel}
              >
                <Volume2 className="h-4 w-4" />
                Nghe mẫu (1.0x)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePlayModel(0.75)}
                disabled={isSpeakingModel}
              >
                <Volume2 className="h-4 w-4 text-[#6B655E]" />
                0.75x Chậm
              </Button>
              {mode === "shadowing" && activeShadowLesson && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayWholeShadowLesson}
                  disabled={isSpeakingModel}
                >
                  <Volume2 className="h-4 w-4 text-[#6B655E]" />
                  Nghe cả bài
                </Button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="accent">{currentSentence.level}</Badge>
              <Badge variant="outline">{currentSentence.topic}</Badge>
              {currentSentence.focusTones?.map((tone) => (
                <span
                  key={tone}
                  className="rounded-full bg-[#EFEFEA] px-2.5 py-0.5 text-[11px] font-semibold text-[#6B655E]"
                >
                  {tone}
                </span>
              ))}
            </div>
          </div>
        ) : undefined
      }
      shortcutHint={
        mode === "practice" || mode === "shadowing"
          ? "Nghe mẫu 1.0x hoặc 0.75x rồi nhấn Micro để thu âm & chấm điểm từng chữ Hán"
          : undefined
      }
      pagination={
        mode === "practice" || mode === "shadowing"
          ? {
              currentIndex: safeIndex,
              total: activeSentences.length,
              onPrev: () => {
                if (mode === "shadowing") {
                  setShadowSentenceIndex((i) => Math.max(0, i - 1));
                } else {
                  setCurrentIndex((i) => Math.max(0, i - 1));
                }
                resetPractice();
              },
              onNext: () => {
                if (mode === "shadowing") {
                  setShadowSentenceIndex((i) =>
                    Math.min(activeSentences.length - 1, i + 1)
                  );
                } else {
                  setCurrentIndex((i) =>
                    Math.min(activeSentences.length - 1, i + 1)
                  );
                }
                resetPractice();
              },
              onJump: (idx) => {
                if (mode === "shadowing") {
                  setShadowSentenceIndex(idx);
                } else {
                  setCurrentIndex(idx);
                }
                resetPractice();
              },
              itemLabel: "Câu",
              completedIndices,
            }
          : undefined
      }
    >
      {(mode === "practice" || mode === "shadowing") && currentSentence ? (
        <div className="space-y-6">
          {mode === "shadowing" && activeShadowLesson && (
            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-4 py-2.5 text-xs text-[#57534E]">
              <span className="font-semibold text-[#262626]">
                {activeShadowLesson.titleZh} — {activeShadowLesson.title}:{" "}
              </span>
              {activeShadowLesson.descriptionVi}
            </div>
          )}
          {!supported && (
            <div className="flex flex-col gap-3 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5 text-xs text-[#262626] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
                <span>
                  Trình duyệt chưa hỗ trợ Web Speech Recognition (zh-CN). Dùng
                  Chrome/Edge hoặc bấm &ldquo;Thử mô phỏng phát âm&rdquo;.
                </span>
              </div>
              <Button size="sm" variant="secondary" onClick={handleDemoSimulation}>
                <Wand2 className="h-3.5 w-3.5" />
                Mô phỏng
              </Button>
            </div>
          )}

          {/* Target Sentence */}
          <div className="space-y-2.5 py-2 text-center">
            {showPinyin && currentSentence.pinyin && (
              <p className="font-mono text-base font-medium text-[#6B655E] sm:text-lg">
                {currentSentence.pinyin}
              </p>
            )}

            <div className="text-2xl font-bold leading-relaxed text-[#262626] sm:text-3xl">
              <InteractiveChineseText
                text={currentSentence.hanzi}
                pinyin={currentSentence.pinyin}
              />
            </div>

            <p className="text-sm font-medium text-[#737373]">
              {currentSentence.meaningVi}
            </p>

            {currentSentence.tipVi && (
              <p className="mx-auto max-w-xl rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-4 py-2 text-xs leading-relaxed text-[#57534E]">
                <span className="font-semibold text-[#262626]">Mẹo phát âm: </span>
                {currentSentence.tipVi}
              </p>
            )}
          </div>

          {/* Microphone Controls */}
          <div className="flex flex-col items-center gap-2.5">
            <button
              type="button"
              onClick={handleToggleMic}
              disabled={!supported}
              className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-full shadow-sm transition-all disabled:opacity-50 ${
                isListening
                  ? "animate-pulse bg-[#B91C1C] text-white ring-8 ring-[#B91C1C]/20"
                  : "bg-brand text-white hover:scale-105 hover:bg-brand-hover active:scale-95"
              }`}
              aria-label={isListening ? "Dừng ghi âm" : "Bắt đầu ghi âm"}
            >
              {isListening ? (
                <MicOff className="h-8 w-8" />
              ) : (
                <Mic className="h-8 w-8" />
              )}
            </button>
            <p className="text-xs font-medium text-[#737373]">
              {isListening
                ? "Đang lắng nghe tiếng Trung (zh-CN)... Nhấn để dừng"
                : "Nhấn Micro và đọc to câu trên"}
            </p>
            <Button variant="ghost" size="sm" onClick={handleDemoSimulation}>
              <Wand2 className="h-3.5 w-3.5" />
              Thử mô phỏng phát âm
            </Button>
          </div>

          {errorMsg && (
            <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3 text-center text-xs font-medium text-[#B91C1C]">
              {errorMsg}
            </div>
          )}

          {/* Pronunciation Heatmap */}
          {comparison && (
            <div className="space-y-3.5 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Độ chính xác từng chữ Hán
                  </p>
                  <p className="text-xl font-bold text-[#262626]">
                    {comparison.accuracy}%{" "}
                    <span className="text-xs font-normal text-[#737373]">
                      ({comparison.hanziMatched}/{comparison.hanziTotal} chữ khớp)
                    </span>
                  </p>
                </div>
                {xpAwarded !== null && (
                  <Badge variant="success" className="gap-1 px-2.5 py-1 text-xs">
                    <Sparkles className="h-3.5 w-3.5" />+{xpAwarded} XP
                  </Badge>
                )}
              </div>

              <Progress value={comparison.accuracy} size="sm" />

              <div className="flex flex-wrap items-center gap-1.5">
                {comparison.chars.map((item, idx) =>
                  !item.isHanzi ? (
                    <span
                      key={idx}
                      className="px-1 text-lg font-medium text-[#737373]"
                    >
                      {item.char}
                    </span>
                  ) : (
                    <span
                      key={idx}
                      style={{ color: item.matched ? "#15803D" : "#B91C1C" }}
                      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-2.5 text-lg font-bold ${
                        item.matched
                          ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                          : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                      }`}
                    >
                      {item.char}
                    </span>
                  )
                )}
              </div>

              <div className="rounded-xl border border-[#E5E5E0] bg-white px-3 py-2 text-xs text-[#737373]">
                <span className="font-semibold text-[#262626]">Nhận diện: </span>
                &ldquo;{spokenText}&rdquo;
              </div>
            </div>
          )}
        </div>
      ) : mode === "guide" ? (
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {PHONEME_CORRECTION_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="space-y-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#292524] px-2.5 py-1 font-mono text-xs font-bold text-white">
                  {guide.code}
                </span>
                <span className="text-xs font-semibold text-[#6B655E]">
                  {guide.titleVi}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#262626]">
                Khẩu hình chuẩn: {guide.ruleVi}
              </p>
              <p className="whitespace-pre-line text-xs leading-relaxed text-[#57534E]">
                {guide.detailVi}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-[#737373]">
          {isLoadingShadow
            ? "Đang tải bài Shadowing cho cấp độ này..."
            : "Chưa có bài luyện nói phù hợp với bộ lọc hiện tại."}
        </p>
      )}
    </SkillFocusLayout>
  );
}
