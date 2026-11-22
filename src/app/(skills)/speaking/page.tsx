"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { ResourceBanner } from "@/components/resources/ResourceBanner";
import { getResourcesByCategory } from "@/data/resources";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import type { HSKLevel, SubDifficulty } from "@/types";

type SubFilter = "all" | SubDifficulty;

const HSK_LEVELS: Array<"ALL" | HSKLevel | "HSK7-9"> = [
  "ALL",
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7-9",
];

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
  item: SpeakingSentence,
  idx: number,
  total: number
): SubDifficulty {
  if (item.subDifficulty === "basic" || item.subDifficulty === "advanced") {
    return item.subDifficulty;
  }
  return idx < Math.ceil(total / 2) ? "basic" : "advanced";
}

export default function SpeakingPage() {
  const [selectedLevel, setSelectedLevel] = useState<"ALL" | HSKLevel | "HSK7-9">("ALL");
  const [selectedSubFilter, setSelectedSubFilter] = useState<SubFilter>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [supported, setSupported] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingModel, setIsSpeakingModel] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [xpAwarded, setXpAwarded] = useState<number | null>(null);

  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);

  useEffect(() => {
    setSupported(isSpeechRecognitionSupported());
    return () => {
      recognizerRef.current?.abort();
      stopSpeaking();
    };
  }, []);

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

  const basicCount = useMemo(
    () =>
      levelSentences.filter(
        (s, idx) => getSubDifficulty(s, idx, levelSentences.length) === "basic"
      ).length,
    [levelSentences]
  );

  const advancedCount = useMemo(
    () =>
      levelSentences.filter(
        (s, idx) =>
          getSubDifficulty(s, idx, levelSentences.length) === "advanced"
      ).length,
    [levelSentences]
  );

  const filteredSentences = useMemo<SpeakingSentence[]>(() => {
    if (selectedSubFilter === "all") return levelSentences;
    return levelSentences.filter(
      (s, idx) =>
        getSubDifficulty(s, idx, levelSentences.length) === selectedSubFilter
    );
  }, [levelSentences, selectedSubFilter]);

  const currentSentence =
    filteredSentences[currentIndex] ??
    filteredSentences[0] ??
    SPEAKING_SENTENCES[0];

  const resetPractice = () => {
    recognizerRef.current?.abort();
    setIsListening(false);
    setSpokenText("");
    setErrorMsg(null);
    setXpAwarded(null);
  };

  const handleSubFilterChange = (sub: SubFilter) => {
    setSelectedSubFilter(sub);
    setCurrentIndex(0);
    resetPractice();
  };

  const handleLevelChange = (lvl: "ALL" | HSKLevel | "HSK7-9") => {
    setSelectedLevel(lvl);
    setCurrentIndex(0);
    resetPractice();
  };

  const handlePlayModel = (rate: number) => {
    if (!currentSentence) return;
    stopSpeaking();
    setIsSpeakingModel(true);
    speakChinese(currentSentence.hanzi, rate, () => {
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
    // Simulate ~85% matched characters so user can see both green (#15803D) and red (#B91C1C) heatmap
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

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[#6B655E]">
            <Mic className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              口语 · Luyện Nói &amp; Phát âm Shadowing (Mức 0 → HSK 9)
            </span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
            Luyện Phát Âm Thanh Điệu &amp; Shadowing
          </h1>
          <p className="mt-1 text-sm text-[#737373]">
            Nghe mẫu tiếng Phổ thông chuẩn (1.0x / 0.75x), thu âm Micro chấm điểm từng chữ Hán và sửa lỗi âm bật hơi, âm cuốn lưỡi.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowPinyin((prev) => !prev)}
          className={`inline-flex cursor-pointer items-center gap-1.5 self-start rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors sm:self-auto ${
            showPinyin
              ? "border-[#292524] bg-[#292524] text-white"
              : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-[#6B655E]"
          }`}
        >
          <Languages className="h-4 w-4" />
          {showPinyin ? "Đang hiện Pinyin" : "Hiện Pinyin"}
        </button>
      </div>

      {/* HSK0 -> HSK9 Level Filter */}
      <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#737373]">
            Cấp độ:
          </span>
          {HSK_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => handleLevelChange(lvl)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedLevel === lvl
                  ? "bg-[#292524] text-white"
                  : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:border-[#6B655E]"
              }`}
            >
              {lvl === "ALL"
                ? "Tất cả"
                : lvl === "HSK0"
                  ? "Mức 0"
                  : lvl === "HSK7-9"
                    ? "HSK 7–9"
                    : lvl.replace("HSK", "HSK ")}
            </button>
          ))}
        </div>

        {/* Sub-Level Filter: Tất cả | Cơ bản | Nâng cao */}
        <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-3">
          {(
            [
              {
                id: "all" as const,
                label:
                  selectedLevel === "ALL"
                    ? "Tất cả trình độ"
                    : `${selectedLevel} · Tất cả`,
                count: levelSentences.length,
              },
              {
                id: "basic" as const,
                label:
                  selectedLevel === "ALL"
                    ? "Cơ bản (Basic)"
                    : `${selectedLevel} · Cơ bản`,
                count: basicCount,
              },
              {
                id: "advanced" as const,
                label:
                  selectedLevel === "ALL"
                    ? "Nâng cao (Advanced)"
                    : `${selectedLevel} · Nâng cao`,
                count: advancedCount,
              },
            ]
          ).map((sub) => {
            const active = selectedSubFilter === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleSubFilterChange(sub.id)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-left transition-all ${
                  active
                    ? "bg-[#6B655E] text-white shadow-xs"
                    : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#57534E] hover:bg-[#F2F2F0] hover:text-[#262626]"
                }`}
              >
                <span className="text-xs font-semibold sm:text-sm">
                  {sub.label}
                </span>
                <span
                  className={`rounded-lg px-2 py-0.5 text-[11px] font-medium ${
                    active
                      ? "bg-white/15 text-[#F5F5F4]"
                      : "bg-white text-[#737373]"
                  }`}
                >
                  {sub.count} câu
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Unsupported Browser Notice */}
      {!supported && (
        <div className="flex flex-col gap-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-sm text-[#262626] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#6B655E]" />
            <div>
              <p className="font-semibold">
                Trình duyệt hiện tại chưa hỗ trợ Web Speech Recognition (zh-CN).
              </p>
              <p className="text-xs text-[#737373]">
                Hãy dùng Google Chrome / Microsoft Edge để thu âm trực tiếp, hoặc bấm &ldquo;Thử mô phỏng phát âm&rdquo; để xem chấm điểm Heatmap từng chữ Hán.
              </p>
            </div>
          </div>
          <Button size="sm" variant="secondary" onClick={handleDemoSimulation}>
            <Wand2 className="h-4 w-4" />
            Thử mô phỏng phát âm
          </Button>
        </div>
      )}

      {/* Progress & Prev/Next Navigation */}
      {currentSentence && (
        <>
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <Progress
                value={
                  ((currentIndex + 1) / Math.max(1, filteredSentences.length)) *
                  100
                }
                label={`Câu ${currentIndex + 1} / ${filteredSentences.length}`}
                showPercent
                size="sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex((i) => Math.max(0, i - 1));
                  resetPractice();
                }}
              >
                <ChevronLeft className="h-4 w-4" />
                Trước
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={currentIndex >= filteredSentences.length - 1}
                onClick={() => {
                  setCurrentIndex((i) =>
                    Math.min(filteredSentences.length - 1, i + 1)
                  );
                  resetPractice();
                }}
              >
                Tiếp
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Main Practice Card */}
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-[#E5E5E0] bg-[#FAF9F7]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{currentSentence.level}</Badge>
                  <Badge variant="default">
                    {currentSentence.subDifficulty === "advanced"
                      ? "Nâng cao"
                      : "Cơ bản"}
                  </Badge>
                  <Badge variant="outline">{currentSentence.topic}</Badge>
                  {currentSentence.focusTones?.map((tone) => (
                    <span
                      key={tone}
                      className="rounded-full bg-[#EFEFEA] px-2.5 py-0.5 text-[11px] font-semibold text-[#6B655E]"
                    >
                      Trọng tâm: {tone}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePlayModel(0.75)}
                    disabled={isSpeakingModel}
                  >
                    <Volume2 className="h-4 w-4 text-[#6B655E]" />
                    0.75x (Chậm)
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handlePlayModel(1.0)}
                    disabled={isSpeakingModel}
                  >
                    <Volume2 className="h-4 w-4" />
                    Nghe mẫu (1.0x)
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              {/* Target Chinese Sentence */}
              <div className="space-y-2.5 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
                  Câu chữ Hán cần đọc (nhấp vào chữ bất kỳ để tra Pinyin, Bộ thủ &amp; Số nét)
                </p>

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
                  <p className="mx-auto max-w-2xl rounded-xl border border-[#E5E5E0] bg-[#F2F2F0]/70 px-4 py-2.5 text-xs leading-relaxed text-[#57534E]">
                    <span className="font-semibold text-[#262626]">
                      Hướng dẫn phát âm &amp; thanh điệu:{" "}
                    </span>
                    {currentSentence.tipVi}
                  </p>
                )}
              </div>

              {/* Microphone Recording Button */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleToggleMic}
                  disabled={!supported}
                  className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-full shadow-sm transition-all disabled:opacity-50 ${
                    isListening
                      ? "animate-pulse bg-[#B91C1C] text-white ring-8 ring-[#B91C1C]/20"
                      : "bg-[#292524] text-white hover:scale-105 hover:bg-[#4A4540] active:scale-95"
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
                    : "Nhấn vào Micro và đọc to câu tiếng Trung ở trên"}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDemoSimulation}
                >
                  <Wand2 className="h-3.5 w-3.5" />
                  Thử mô phỏng phát âm
                </Button>
              </div>

              {errorMsg && (
                <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3 text-center text-xs font-medium text-[#B91C1C]">
                  {errorMsg}
                </div>
              )}

              {/* Word-Level Pronunciation Heatmap */}
              {comparison && (
                <div className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Word-Level Pronunciation Heatmap
                      </p>
                      <p className="mt-0.5 text-2xl font-bold text-[#262626]">
                        {comparison.accuracy}%{" "}
                        <span className="text-sm font-normal text-[#737373]">
                          ({comparison.hanziMatched}/{comparison.hanziTotal} chữ Hán chuẩn xác)
                        </span>
                      </p>
                    </div>
                    {xpAwarded !== null && (
                      <Badge
                        variant="success"
                        className="gap-1 px-3 py-1 text-xs"
                      >
                        <Sparkles className="h-3.5 w-3.5" />+{xpAwarded} XP
                      </Badge>
                    )}
                  </div>

                  <Progress value={comparison.accuracy} size="md" />

                  <div>
                    <p className="mb-2.5 text-xs font-medium text-[#737373]">
                      Bản đồ nhiệt từng chữ Hán (Màu xanh{" "}
                      <span className="font-semibold text-[#15803D]">
                        #15803D = Phát âm khớp
                      </span>
                      , màu đỏ{" "}
                      <span className="font-semibold text-[#B91C1C]">
                        #B91C1C = Phát âm sai / thiếu thanh điệu
                      </span>
                      ):
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {comparison.chars.map((item, idx) => {
                        if (!item.isHanzi) {
                          return (
                            <span
                              key={idx}
                              className="px-1 text-lg font-medium text-[#737373]"
                            >
                              {item.char}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={idx}
                            style={{
                              color: item.matched ? "#15803D" : "#B91C1C",
                            }}
                            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-2.5 text-lg font-bold transition-all ${
                              item.matched
                                ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                                : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                            }`}
                          >
                            {item.char}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E5E5E0] bg-white p-3 text-xs text-[#737373]">
                    <span className="font-semibold text-[#262626]">
                      Hệ thống nhận diện (zh-CN):{" "}
                    </span>
                    &ldquo;{spokenText}&rdquo;
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Detailed Tone & Aspiration Phoneme Correction Guide */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#6B655E]" />
            <CardTitle className="text-base">
              Cẩm nang sửa thanh điệu &amp; âm bật hơi tiếng Trung cho người Việt
            </CardTitle>
          </div>
          <CardDescription>
            Khắc phục triệt để 4 nhóm âm khó nhất khi nói tiếng Trung Phổ thông: j/q/x, zh/ch/sh/r, z/c/s và biến điệu thanh 3.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
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
        </CardContent>
      </Card>

      {/* Quick Sentence Picker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Danh sách câu luyện nói ({filteredSentences.length} câu)
          </CardTitle>
          <CardDescription>
            Chọn bất kỳ câu nào từ Mức 0 đến HSK 9 để luyện phát âm trực tiếp.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {filteredSentences.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                resetPractice();
              }}
              className={`flex cursor-pointer items-start justify-between gap-2 rounded-xl border p-3 text-left transition-all ${
                idx === currentIndex
                  ? "border-[#6B655E] bg-[#F2F2F0]"
                  : "border-[#E5E5E0] bg-white hover:border-[#A8A29E]"
              }`}
            >
              <div className="min-w-0 space-y-0.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="outline">{s.level}</Badge>
                  <span className="text-[11px] font-medium text-[#6B655E]">
                    {s.subDifficulty === "advanced" ? "Nâng cao" : "Cơ bản"}
                  </span>
                  <span className="text-xs text-[#737373]">· {s.topic}</span>
                </div>
                <p className="truncate text-sm font-semibold text-[#262626]">
                  {s.hanzi}
                </p>
                {showPinyin && (
                  <p className="truncate font-mono text-[11px] text-[#6B655E]">
                    {s.pinyin}
                  </p>
                )}
              </div>
              {idx === currentIndex && (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
              )}
            </button>
          ))}
        </CardContent>
      </Card>

      <ResourceBanner
        resources={getResourcesByCategory(["pronunciation"])}
        heading="Video tự học phát âm tiếng Trung chuẩn bản xứ (Google Drive)"
      />
    </div>
  );
}
