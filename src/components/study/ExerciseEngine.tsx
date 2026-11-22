"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  EyeOff,
  Headphones,
  HelpCircle,
  Mic,
  MicOff,
  BookOpen,
  PenTool,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  Wand2,
  XCircle,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { HanziStrokeCanvas } from "@/components/writing/HanziStrokeCanvas";
import { TwoSentenceBuilder } from "@/components/writing/TwoSentenceBuilder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { EDITORIAL_EASE } from "@/components/ui/MotionPrimitives";
import { Progress } from "@/components/ui/Progress";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  speakChinese,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import { markSessionCompleted, recordMistake } from "@/lib/storage";
import { evaluateChinesePronunciation } from "@/lib/voice-call";
import type { ExerciseQuestion, ExerciseType, SkillType } from "@/types";

export interface ExerciseEngineProps {
  sessionId: string;
  skillFocus?: SkillType;
  exercises: ExerciseQuestion[];
  onSessionCompleted?: (scorePercent: number) => void;
}

const SKILL_VI_LABELS: Record<SkillType, string> = {
  listening: "Nghe (听力)",
  speaking: "Nói (口语)",
  reading: "Đọc (阅读)",
  writing: "Viết (写作)",
};

const SKILL_ICON_MAP: Record<
  SkillType,
  React.ComponentType<{ className?: string }>
> = {
  listening: Headphones,
  speaking: Mic,
  reading: BookOpen,
  writing: PenTool,
};

const TYPE_LABELS: Record<ExerciseType, string> = {
  "listening-mcq": "Nghe chọn đáp án (听力选择)",
  "listening-fill": "Nghe điền từ chữ Hán (听写填空)",
  "listening-dialogue": "Nghe hội thoại HSK (对话理解)",
  "speaking-shadowing": "Thu âm phát âm & Thanh điệu (跟读发音)",
  "reading-comprehension": "Đọc hiểu chữ Hán (阅读理解)",
  "writing-stroke": "Vẽ chữ Hán chấm nét (米字格笔顺)",
  "writing-order": "Sắp xếp từ thành câu (连词成句)",
  "writing-two-sentences": "Đặt 2 câu hoàn chỉnh (双句造句)",
};

function normalizeAnswer(value: string): string {
  return value
    .trim()
    .replace(/[，。！？、；：“”‘’.,!?;:\s]/g, "")
    .toLowerCase();
}

function extractHanziChars(text: string): string[] {
  return Array.from(text).filter((ch) => /\p{Script=Han}/u.test(ch));
}

export function ExerciseEngine({
  sessionId,
  skillFocus,
  exercises,
  onSessionCompleted,
}: ExerciseEngineProps) {
  const [activeQuestions, setActiveQuestions] =
    useState<ExerciseQuestion[]>(exercises);
  const [isRetryWrongMode, setIsRetryWrongMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Per-question input state
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [fillInput, setFillInput] = useState<string>("");
  const [selectedTileIndices, setSelectedTileIndices] = useState<number[]>([]);

  // Listening state
  const [showListeningHintPinyin, setShowListeningHintPinyin] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Speaking state
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState("");
  const [speakingAccuracy, setSpeakingAccuracy] = useState<number | null>(null);
  const [speakingFeedbackVi, setSpeakingFeedbackVi] = useState<string>("");
  const [speakingMatchedChars, setSpeakingMatchedChars] = useState<string[]>([]);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);

  // Reading state
  const [showReadingPinyin, setShowReadingPinyin] = useState(true);

  // Writing stroke & 2-sentences state
  const [strokeAccuracy, setStrokeAccuracy] = useState<number | null>(null);
  const [twoSentencesSubmitted, setTwoSentencesSubmitted] = useState<
    [string, string] | null
  >(null);

  // Grading state
  const [submitted, setSubmitted] = useState(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);
  const completionRecordedRef = useRef(false);

  const resetQuestionInputs = () => {
    stopSpeaking();
    recognizerRef.current?.abort();
    setSelectedOption("");
    setFillInput("");
    setSelectedTileIndices([]);
    setShowListeningHintPinyin(false);
    setIsPlayingAudio(false);
    setIsRecording(false);
    setSpokenTranscript("");
    setSpeakingAccuracy(null);
    setSpeakingFeedbackVi("");
    setSpeakingMatchedChars([]);
    setSpeechError(null);
    setStrokeAccuracy(null);
    setTwoSentencesSubmitted(null);
    setSubmitted(false);
    setIsCurrentCorrect(false);
  };

  // Reset when sessionId changes
  useEffect(() => {
    setActiveQuestions(exercises);
    setIsRetryWrongMode(false);
    setCurrentIndex(0);
    setResults({});
    setFinished(false);
    completionRecordedRef.current = false;
    resetQuestionInputs();
    return () => {
      stopSpeaking();
      recognizerRef.current?.abort();
    };
  }, [sessionId, exercises]);

  const currentQuestion = activeQuestions[currentIndex];
  const totalQuestions = activeQuestions.length;

  const effectiveSkill: SkillType =
    skillFocus ?? currentQuestion?.skill ?? "listening";
  const SkillBadgeIcon = SKILL_ICON_MAP[effectiveSkill];

  const wrongQuestions = useMemo(
    () => activeQuestions.filter((q) => results[q.id] === false),
    [activeQuestions, results]
  );

  const correctCount = useMemo(
    () => activeQuestions.filter((q) => results[q.id] === true).length,
    [activeQuestions, results]
  );

  const scorePercent =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Mark session completed when finished with >= 70%
  useEffect(() => {
    if (finished && scorePercent >= 70 && !completionRecordedRef.current) {
      completionRecordedRef.current = true;
      markSessionCompleted(sessionId, scorePercent);
      onSessionCompleted?.(scorePercent);
    }
  }, [finished, scorePercent, sessionId, onSessionCompleted]);

  const handlePlayAudio = (textZh: string, rate = 1.0) => {
    if (!textZh) return;
    setIsPlayingAudio(true);
    speakChinese(textZh, rate, () => {
      setIsPlayingAudio(false);
    });
  };

  // Speaking grading helper (>= 70% passes!)
  const gradeSpeakingTranscript = (transcript: string) => {
    if (!currentQuestion) return;
    const targetZh =
      currentQuestion.promptZh ||
      currentQuestion.audioTextZh ||
      currentQuestion.correctAnswer;
    const evalResult = evaluateChinesePronunciation(
      targetZh,
      transcript,
      "binh-thuong",
      currentQuestion.promptPinyin
    );
    const passed = evalResult.accuracy >= 70;
    setSpokenTranscript(transcript);
    setSpeakingAccuracy(evalResult.accuracy);
    setSpeakingFeedbackVi(evalResult.feedbackVi);
    setSpeakingMatchedChars(evalResult.matchedWords);
    setIsCurrentCorrect(passed);
    setSubmitted(true);
    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: passed,
    }));
  };

  const handleToggleMicRecording = () => {
    if (!currentQuestion) return;
    setSpeechError(null);

    if (isRecording) {
      recognizerRef.current?.stop();
      setIsRecording(false);
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setSpeechError(
        "Trình duyệt chưa hỗ trợ thu âm trực tiếp. Hãy bấm nút 'Thử mô phỏng phát âm chuẩn' bên cạnh!"
      );
      return;
    }

    stopSpeaking();
    let captured = "";

    const recognizer = createChineseRecognizer(
      {
        onResult: (transcript, isFinal) => {
          captured = transcript;
          setSpokenTranscript(transcript);
          if (isFinal && transcript.trim()) {
            setIsRecording(false);
            gradeSpeakingTranscript(transcript.trim());
          }
        },
        onError: (err) => {
          setIsRecording(false);
          if (err === "not-allowed") {
            setSpeechError(
              "Chưa cấp quyền Micro. Hãy cấp quyền hoặc bấm 'Thử mô phỏng phát âm chuẩn'."
            );
          } else if (err !== "aborted") {
            setSpeechError(
              `Không nhận diện được giọng nói (${err}). Hãy thử lại hoặc bấm 'Thử mô phỏng phát âm chuẩn'.`
            );
          }
        },
        onEnd: () => {
          setIsRecording(false);
          if (captured.trim() && !submitted) {
            gradeSpeakingTranscript(captured.trim());
          }
        },
      },
      { continuous: false, interimResults: true, lang: "zh-CN" }
    );

    if (!recognizer) {
      setSpeechError("Không thể khởi tạo bộ nhận diện giọng nói.");
      return;
    }

    recognizerRef.current = recognizer;
    try {
      recognizer.start();
      setIsRecording(true);
    } catch {
      setIsRecording(false);
      setSpeechError("Micro đang bận, vui lòng thử lại.");
    }
  };

  const handleSimulateStandardPronunciation = () => {
    if (!currentQuestion) return;
    const targetZh =
      currentQuestion.promptZh ||
      currentQuestion.audioTextZh ||
      currentQuestion.correctAnswer;
    gradeSpeakingTranscript(targetZh);
  };

  const getUserAnswer = (): string => {
    if (!currentQuestion) return "";
    if (
      currentQuestion.type === "listening-mcq" ||
      currentQuestion.type === "listening-dialogue" ||
      currentQuestion.type === "reading-comprehension"
    ) {
      return selectedOption;
    }
    if (currentQuestion.type === "listening-fill") {
      return fillInput;
    }
    if (currentQuestion.type === "writing-order") {
      const tiles = currentQuestion.wordTiles ?? [];
      return selectedTileIndices.map((idx) => tiles[idx]).join("");
    }
    if (currentQuestion.type === "speaking-shadowing") {
      return spokenTranscript;
    }
    if (currentQuestion.type === "writing-stroke") {
      return currentQuestion.targetHanzi || currentQuestion.correctAnswer;
    }
    if (currentQuestion.type === "writing-two-sentences") {
      return twoSentencesSubmitted ? twoSentencesSubmitted.join(" / ") : "";
    }
    return "";
  };

  const canSubmit = (): boolean => {
    if (!currentQuestion || submitted) return false;
    if (
      currentQuestion.type === "listening-mcq" ||
      currentQuestion.type === "listening-dialogue" ||
      currentQuestion.type === "reading-comprehension"
    ) {
      return selectedOption.length > 0;
    }
    if (currentQuestion.type === "listening-fill") {
      return fillInput.trim().length > 0;
    }
    if (currentQuestion.type === "writing-order") {
      return selectedTileIndices.length > 0;
    }
    if (currentQuestion.type === "speaking-shadowing") {
      return spokenTranscript.trim().length > 0;
    }
    return false;
  };

  const handleCheckAnswer = () => {
    if (!currentQuestion || !canSubmit()) return;

    if (currentQuestion.type === "speaking-shadowing") {
      gradeSpeakingTranscript(spokenTranscript);
      return;
    }

    const userAnswer = getUserAnswer();
    const correct =
      normalizeAnswer(userAnswer) ===
      normalizeAnswer(currentQuestion.correctAnswer);

    setIsCurrentCorrect(correct);
    setSubmitted(true);
    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: correct,
    }));

    if (!correct) {
      recordMistake({
        source: "study",
        prompt: currentQuestion.promptVi,
        userAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        explanationVi: currentQuestion.explanationVi,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionInputs();
    } else {
      setFinished(true);
    }
  };

  const handleRetryWrong = () => {
    if (wrongQuestions.length === 0) return;
    setActiveQuestions(wrongQuestions);
    setIsRetryWrongMode(true);
    setCurrentIndex(0);
    setResults({});
    setFinished(false);
    resetQuestionInputs();
  };

  const handleRestartAll = () => {
    setActiveQuestions(exercises);
    setIsRetryWrongMode(false);
    setCurrentIndex(0);
    setResults({});
    setFinished(false);
    completionRecordedRef.current = false;
    resetQuestionInputs();
  };

  const handleToggleTile = (tileIndex: number) => {
    if (submitted) return;
    setSelectedTileIndices((prev) =>
      prev.includes(tileIndex)
        ? prev.filter((i) => i !== tileIndex)
        : [...prev, tileIndex]
    );
  };

  if (totalQuestions === 0) {
    return (
      <Card className="border-[#E5E5E0] bg-white p-8 text-center">
        <p className="text-sm text-[#737373]">
          Buổi học này chưa có câu hỏi bài tập.
        </p>
      </Card>
    );
  }

  // Final Summary Screen
  if (finished) {
    const passed = scorePercent >= 70;
    return (
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
      >
        <Card className="overflow-hidden border-[#E5E5E0] bg-white">
          <div
            className={`p-6 text-center text-white ${
              passed ? "bg-[#292524]" : "bg-[#4A4540]"
            }`}
          >
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              {passed ? (
                <Trophy className="h-7 w-7 text-amber-200" />
              ) : (
                <Award className="h-7 w-7 text-[#E5E5E0]" />
              )}
            </div>
            <h3 className="text-2xl font-bold">
              {passed
                ? "太棒了! Đã hoàn thành buổi học"
                : "加油! Hãy ôn lại câu sai"}
            </h3>
            <p className="mt-1 text-sm text-[#E5E5E0]">
              {passed
                ? "Bạn đạt từ 70% trở lên — buổi học đã được đánh dấu hoàn thành (+XP & Streak)!"
                : "Bạn cần đạt tối thiểu 70% để hoàn thành buổi học này."}
            </p>
          </div>

          <CardContent className="space-y-5 p-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0]/60 p-3">
                <div className="text-2xl font-bold text-[#262626]">
                  {scorePercent}%
                </div>
                <div className="text-xs text-[#737373]">Điểm số</div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3">
                <div className="text-2xl font-bold text-emerald-800">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="text-xs text-[#737373]">Câu đúng</div>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-3">
                <div className="text-2xl font-bold text-rose-700">
                  {wrongQuestions.length}
                </div>
                <div className="text-xs text-[#737373]">Câu sai</div>
              </div>
            </div>

            <Progress
              value={scorePercent}
              label="Mục tiêu hoàn thành: 70%"
              showPercent
              size="md"
            />

            <div className="flex flex-wrap gap-2.5 pt-1">
              {wrongQuestions.length > 0 && (
                <Button
                  variant="primary"
                  onClick={handleRetryWrong}
                  className="flex-1"
                >
                  <RotateCcw className="h-4 w-4" />
                  Làm lại câu sai ({wrongQuestions.length})
                </Button>
              )}
              <Button
                variant={wrongQuestions.length > 0 ? "outline" : "primary"}
                onClick={handleRestartAll}
                className="flex-1"
              >
                <Sparkles className="h-4 w-4" />
                Làm lại toàn bộ
              </Button>
            </div>

            <div className="border-t border-[#E5E5E0] pt-4 text-center">
              <Link href="/roadmap">
                <Button variant="ghost" size="sm">
                  Quay lại Lộ trình Mức 0–9
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const progressValue =
    ((currentIndex + (submitted ? 1 : 0)) / totalQuestions) * 100;

  const isListeningExercise =
    currentQuestion.type === "listening-mcq" ||
    currentQuestion.type === "listening-fill" ||
    currentQuestion.type === "listening-dialogue";

  const listeningAudioZh =
    currentQuestion.audioTextZh ||
    currentQuestion.promptZh ||
    currentQuestion.correctAnswer;

  const speakingTargetZh =
    currentQuestion.promptZh ||
    currentQuestion.audioTextZh ||
    currentQuestion.correctAnswer;

  const speakingTargetChars = extractHanziChars(speakingTargetZh);
  const matchedCharSet = new Set(speakingMatchedChars);

  return (
    <Card className="flex flex-col border-[#E5E5E0] bg-white">
      <CardHeader className="space-y-3 border-b border-[#E5E5E0] pb-4">
        {/* Mandatory 100% Skill-Matched Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#292524]">
            <SkillBadgeIcon className="h-4 w-4 text-[#6B655E]" />
            <span>
              Bài tập chuyên biệt khớp 100% kỹ năng buổi học:{" "}
              <span className="underline decoration-[#6B655E] underline-offset-4">
                {SKILL_VI_LABELS[effectiveSkill]}
              </span>
            </span>
          </div>
          <Badge variant="accent">
            {TYPE_LABELS[currentQuestion.type] ?? currentQuestion.type}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-base text-[#262626]">
            {isRetryWrongMode ? "Ôn lại câu sai" : "Thực hành tương tác"}
          </CardTitle>
          <span className="text-xs font-semibold text-[#6B655E]">
            Câu {currentIndex + 1} / {totalQuestions}
          </span>
        </div>

        <Progress value={progressValue} size="sm" />
      </CardHeader>

      <CardContent className="overflow-hidden p-5 sm:p-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${currentQuestion.id}-${currentIndex}`}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
            className="space-y-5"
          >
            {/* Question Prompt */}
            <div className="space-y-3">
              <p className="text-base font-semibold leading-relaxed text-[#262626]">
                {currentQuestion.promptVi}
              </p>

              {/* ================= 1. LISTENING EXERCISES ================= */}
              {isListeningExercise && (
                <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#292524]">
                      <Headphones className="h-4 w-4 text-[#6B655E]" />
                      <span>Trình phát Audio Tiếng Trung (zh-CN)</span>
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setShowListeningHintPinyin((prev) => !prev)
                      }
                      className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
                    >
                      {showListeningHintPinyin ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                      <span>
                        {showListeningHintPinyin
                          ? "Ẩn gợi ý Pinyin"
                          : "Hiện gợi ý Pinyin"}
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handlePlayAudio(listeningAudioZh, 1.0)}
                    >
                      <Volume2 className="h-4 w-4" />
                      {isPlayingAudio ? "Đang phát..." : "Nghe tốc độ 1.0x (Chuẩn)"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePlayAudio(listeningAudioZh, 0.75)}
                    >
                      <Volume2 className="h-4 w-4 text-[#6B655E]" />
                      Nghe chậm 0.75x
                    </Button>
                  </div>

                  {/* Hide Hanzi before submission to test real listening skill; show Pinyin hint if toggled, and reveal full Hanzi after submitting */}
                  {!submitted ? (
                    <div className="rounded-xl border border-dashed border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs text-[#6B655E]">
                      {showListeningHintPinyin && currentQuestion.promptPinyin ? (
                        <div>
                          <span className="font-semibold text-[#292524]">
                            Gợi ý Pinyin:{" "}
                          </span>
                          <span className="font-mono text-sm text-[#4A4540]">
                            {currentQuestion.promptPinyin}
                          </span>
                        </div>
                      ) : (
                        <span>
                          Chữ Hán đang được ẩn để kiểm tra đúng kỹ năng Nghe. Bấm
                          nghe Audio phía trên rồi chọn/điền đáp án!
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-[#E5E5E0] bg-white p-3.5">
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#6B655E]">
                        Transcript Chữ Hán (Nhấp vào từ để tra nghĩa):
                      </div>
                      <div className="text-base font-medium text-[#262626]">
                        <InteractiveChineseText
                          text={listeningAudioZh}
                          pinyin={currentQuestion.promptPinyin}
                          showPinyin
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ================= 2. SPEAKING SHADOWING EXERCISE ================= */}
              {currentQuestion.type === "speaking-shadowing" && (
                <div className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                      <Mic className="h-4 w-4" />
                      Câu mẫu luyện phát âm &amp; thanh điệu
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePlayAudio(speakingTargetZh, 1.0)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        Nghe mẫu 1.0x
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePlayAudio(speakingTargetZh, 0.75)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        Chậm 0.75x
                      </Button>
                    </div>
                  </div>

                  {/* Target Sentence Display */}
                  <div className="rounded-xl border border-[#E5E5E0] bg-white p-4">
                    <div className="text-xl font-bold leading-relaxed text-[#262626]">
                      <InteractiveChineseText text={speakingTargetZh} />
                    </div>
                    {currentQuestion.promptPinyin && (
                      <p className="mt-1 font-mono text-sm text-[#6B655E]">
                        {currentQuestion.promptPinyin}
                      </p>
                    )}
                    {currentQuestion.focusTonesOrPhonemes &&
                      currentQuestion.focusTonesOrPhonemes.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-medium text-[#737373]">
                            Trọng tâm âm/thanh điệu:
                          </span>
                          {currentQuestion.focusTonesOrPhonemes.map((t, idx) => (
                            <Badge key={idx} variant="default">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Mic Recording & Simulation Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button
                      variant={isRecording ? "danger" : "primary"}
                      size="md"
                      onClick={handleToggleMicRecording}
                    >
                      {isRecording ? (
                        <>
                          <MicOff className="h-4 w-4" />
                          Dừng thu âm
                        </>
                      ) : (
                        <>
                          <Mic className="h-4 w-4" />
                          Thu âm Micro (zh-CN)
                        </>
                      )}
                    </Button>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleSimulateStandardPronunciation}
                    >
                      <Wand2 className="h-4 w-4 text-[#6B655E]" />
                      Thử mô phỏng phát âm chuẩn
                    </Button>
                  </div>

                  {speechError && (
                    <p className="text-xs font-medium text-[#B91C1C]">
                      {speechError}
                    </p>
                  )}

                  {/* Manual fallback input for speaking */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={spokenTranscript}
                      disabled={submitted}
                      onChange={(e) => setSpokenTranscript(e.target.value)}
                      placeholder="Hoặc gõ/dán câu chữ Hán vừa đọc để chấm điểm thanh điệu..."
                      className="flex-1 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2 text-sm text-[#262626] placeholder:text-[#737373] focus:border-[#6B655E] focus:outline-none"
                    />
                  </div>

                  {/* Word-Level Pronunciation Heatmap */}
                  {speakingAccuracy !== null && (
                    <div className="space-y-3 rounded-xl border border-[#E5E5E0] bg-white p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#6B655E]">
                          Word-Level Pronunciation Heatmap
                        </span>
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                            speakingAccuracy >= 70
                              ? "bg-[#F0FDF4] text-[#15803D]"
                              : "bg-[#FEF2F2] text-[#B91C1C]"
                          }`}
                        >
                          Độ chính xác: {speakingAccuracy}% (Yêu cầu &ge; 70%)
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {speakingTargetChars.map((ch, idx) => {
                          const isHit = matchedCharSet.has(ch);
                          return (
                            <span
                              key={`${ch}-${idx}`}
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-base font-bold ${
                                isHit
                                  ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                                  : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                              }`}
                              title={isHit ? "Phát âm chuẩn" : "Cần luyện lại"}
                            >
                              {ch}
                            </span>
                          );
                        })}
                      </div>

                      <p className="text-xs leading-relaxed text-[#4A4540]">
                        {speakingFeedbackVi}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ================= 3. READING COMPREHENSION EXERCISE ================= */}
              {currentQuestion.type === "reading-comprehension" && (
                <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B655E]">
                      <HelpCircle className="h-3.5 w-3.5" />
                      Nhấp đúp hoặc chạm vào từ chữ Hán để tra từ điển &amp; bộ thủ
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowReadingPinyin((prev) => !prev)}
                        className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                          showReadingPinyin
                            ? "border-[#292524] bg-[#292524] text-white"
                            : "border-[#E5E5E0] bg-white text-[#4A4540] hover:bg-[#F2F2F0]"
                        }`}
                      >
                        <span>
                          {showReadingPinyin ? "Pinyin: Bật" : "Pinyin: Tắt"}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handlePlayAudio(
                            currentQuestion.passageZh ||
                              currentQuestion.promptZh ||
                              "",
                            0.95
                          )
                        }
                        className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>Nghe đoạn văn</span>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E5E5E0] bg-white p-4">
                    <div className="text-base leading-loose text-[#262626]">
                      <InteractiveChineseText
                        text={
                          currentQuestion.passageZh ||
                          currentQuestion.promptZh ||
                          ""
                        }
                        pinyin={
                          currentQuestion.passagePinyin ||
                          currentQuestion.promptPinyin
                        }
                        showPinyin={showReadingPinyin}
                      />
                    </div>
                    {showReadingPinyin &&
                      (currentQuestion.passagePinyin ||
                        currentQuestion.promptPinyin) && (
                        <p className="mt-2 border-t border-[#E5E5E0] pt-2 font-mono text-xs leading-relaxed text-[#6B655E]">
                          {currentQuestion.passagePinyin ||
                            currentQuestion.promptPinyin}
                        </p>
                      )}
                  </div>
                </div>
              )}

              {/* ================= 4A. WRITING STROKE ORDER CANVAS ================= */}
              {currentQuestion.type === "writing-stroke" && (
                <div className="space-y-3">
                  <HanziStrokeCanvas
                    hanzi={
                      currentQuestion.targetHanzi ||
                      currentQuestion.promptZh ||
                      currentQuestion.correctAnswer
                    }
                    pinyin={currentQuestion.promptPinyin}
                    meaningVi={currentQuestion.targetWordMeaningVi}
                    onComplete={(acc) => {
                      setStrokeAccuracy(acc);
                      setIsCurrentCorrect(true);
                      setSubmitted(true);
                      setResults((prev) => ({
                        ...prev,
                        [currentQuestion.id]: true,
                      }));
                    }}
                  />
                  {strokeAccuracy !== null && (
                    <p className="text-center text-xs font-semibold text-[#15803D]">
                      Đã hoàn thành viết chữ Hán chuẩn thứ tự nét (Độ chính xác:{" "}
                      {strokeAccuracy}%)!
                    </p>
                  )}
                </div>
              )}

              {/* ================= 4B. WRITING TWO SENTENCES BUILDER ================= */}
              {currentQuestion.type === "writing-two-sentences" && (
                <div className="space-y-3">
                  <TwoSentenceBuilder
                    targetWord={
                      currentQuestion.targetHanzi ||
                      currentQuestion.promptZh ||
                      currentQuestion.correctAnswer
                    }
                    pinyin={currentQuestion.promptPinyin}
                    meaningVi={currentQuestion.targetWordMeaningVi}
                    onSuccess={(sentences) => {
                      setTwoSentencesSubmitted(sentences);
                      setIsCurrentCorrect(true);
                      setSubmitted(true);
                      setResults((prev) => ({
                        ...prev,
                        [currentQuestion.id]: true,
                      }));
                    }}
                  />
                </div>
              )}
            </div>

            {/* MCQ Options (for listening-mcq, listening-dialogue, reading-comprehension) */}
            {(currentQuestion.type === "listening-mcq" ||
              currentQuestion.type === "listening-dialogue" ||
              currentQuestion.type === "reading-comprehension") &&
              currentQuestion.options && (
                <div className="space-y-2.5">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === option;
                    const isCorrectOption =
                      normalizeAnswer(option) ===
                      normalizeAnswer(currentQuestion.correctAnswer);

                    let styleClass =
                      "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]/60";

                    if (submitted) {
                      if (isCorrectOption) {
                        styleClass =
                          "border-emerald-500 bg-emerald-50 text-emerald-900";
                      } else if (isSelected && !isCorrectOption) {
                        styleClass =
                          "border-rose-400 bg-rose-50 text-rose-900";
                      } else {
                        styleClass =
                          "border-[#E5E5E0]/70 bg-[#F2F2F0]/40 text-[#737373]";
                      }
                    } else if (isSelected) {
                      styleClass =
                        "border-[#292524] bg-[#F2F2F0] text-[#262626] ring-2 ring-[#6B655E]/20";
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        disabled={submitted}
                        onClick={() => setSelectedOption(option)}
                        className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left text-sm font-medium transition-all cursor-pointer disabled:cursor-default ${styleClass}`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                            isSelected && !submitted
                              ? "bg-[#292524] text-white"
                              : "bg-[#F2F2F0] text-[#4A4540]"
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{option}</span>
                      </button>
                    );
                  })}
                </div>
              )}

            {/* Listening Fill in the Blank */}
            {currentQuestion.type === "listening-fill" && (
              <div className="space-y-2">
                <input
                  type="text"
                  value={fillInput}
                  disabled={submitted}
                  onChange={(e) => setFillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && canSubmit()) {
                      e.preventDefault();
                      handleCheckAnswer();
                    }
                  }}
                  placeholder="Nhập từ chữ Hán hoặc Pinyin bạn nghe được..."
                  className="w-full rounded-xl border border-[#E5E5E0] bg-white px-4 py-3 text-sm font-medium text-[#262626] placeholder:text-[#737373] focus:border-[#4A4540] focus:outline-none focus:ring-2 focus:ring-[#6B655E]/15 disabled:opacity-75"
                />
                <p className="text-xs text-[#737373]">
                  Mẹo: Bạn có thể bấm &quot;Hiện gợi ý Pinyin&quot; ở khung Audio phía trên
                  hoặc nhấn Enter để kiểm tra đáp án.
                </p>
              </div>
            )}

            {/* Writing Sentence Order */}
            {currentQuestion.type === "writing-order" &&
              currentQuestion.wordTiles && (
                <div className="space-y-4">
                  {currentQuestion.promptPinyin && (
                    <p className="text-xs font-mono text-[#6B655E]">
                      Gợi ý Pinyin: {currentQuestion.promptPinyin}
                    </p>
                  )}

                  {/* Answer drop zone */}
                  <div className="min-h-[3.5rem] rounded-2xl border-2 border-dashed border-[#E5E5E0] bg-[#F2F2F0]/50 p-3">
                    {selectedTileIndices.length === 0 ? (
                      <p className="py-1.5 text-center text-xs text-[#737373]">
                        Bấm vào các thẻ chữ Hán bên dưới để ghép thành câu đúng
                        trật tự ngữ pháp tiếng Trung...
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedTileIndices.map((tileIdx) => (
                          <button
                            key={`selected-${tileIdx}`}
                            type="button"
                            disabled={submitted}
                            onClick={() => handleToggleTile(tileIdx)}
                            className="rounded-xl border border-[#292524] bg-[#292524] px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] cursor-pointer disabled:cursor-default"
                          >
                            {currentQuestion.wordTiles![tileIdx]}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Word bank */}
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.wordTiles.map((tile, idx) => {
                      const isUsed = selectedTileIndices.includes(idx);
                      return (
                        <button
                          key={`bank-${idx}`}
                          type="button"
                          disabled={submitted || isUsed}
                          onClick={() => handleToggleTile(idx)}
                          className={`rounded-xl border px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
                            isUsed
                              ? "border-[#E5E5E0] bg-[#F2F2F0] text-[#737373]/50"
                              : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]"
                          }`}
                        >
                          {tile}
                        </button>
                      );
                    })}
                  </div>

                  {!submitted && selectedTileIndices.length > 0 && (
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTileIndices([])}
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Xếp lại từ đầu
                      </Button>
                    </div>
                  )}
                </div>
              )}

            {/* Instant Feedback & Vietnamese Explanation */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  key={`feedback-${currentQuestion.id}-${
                    isCurrentCorrect ? "ok" : "err"
                  }`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isCurrentCorrect
                      ? { opacity: 1, y: 0, scale: [0.985, 1.015, 1] }
                      : { opacity: 1, y: 0, x: [0, -6, 6, -4, 4, 0] }
                  }
                  exit={{ opacity: 0, y: -4 }}
                  transition={
                    isCurrentCorrect
                      ? { duration: 0.35, ease: EDITORIAL_EASE }
                      : { duration: 0.38, ease: "easeInOut" }
                  }
                  className={`rounded-2xl border p-4 ${
                    isCurrentCorrect
                      ? "border-emerald-200 bg-emerald-50/80 text-emerald-900"
                      : "border-rose-200 bg-rose-50/80 text-rose-900"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {isCurrentCorrect ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" />
                    )}
                    <div className="space-y-1 text-sm">
                      <div className="font-bold">
                        {isCurrentCorrect
                          ? "Chính xác! (正确)"
                          : "Chưa chính xác — Hãy xem giải thích bên dưới"}
                      </div>
                      {!isCurrentCorrect && (
                        <div className="text-xs font-semibold">
                          Đáp án đúng:{" "}
                          <span className="rounded bg-white/80 px-1.5 py-0.5 text-[#262626]">
                            {currentQuestion.correctAnswer}
                          </span>
                        </div>
                      )}
                      <p className="leading-relaxed opacity-95">
                        {currentQuestion.explanationVi}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Button */}
            <div className="pt-1">
              {!submitted ? (
                currentQuestion.type === "writing-stroke" ||
                currentQuestion.type === "writing-two-sentences" ? null : (
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={!canSubmit()}
                    onClick={handleCheckAnswer}
                  >
                    Kiểm tra đáp án
                  </Button>
                )
              ) : (
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleNext}
                >
                  {currentIndex + 1 < totalQuestions
                    ? "Câu tiếp theo"
                    : "Xem kết quả buổi học"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
