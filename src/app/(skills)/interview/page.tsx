"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Award,
  Briefcase,
  CheckCircle2,
  Eye,
  EyeOff,
  FileCheck2,
  GraduationCap,
  Languages,
  Lightbulb,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  Volume2,
  Wand2,
} from "lucide-react";
import * as interviewModule from "@/data/interview";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  speakChinese,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import {
  evaluateChinesePronunciation,
  type PronunciationEvaluation,
} from "@/lib/voice-call";
import { addXP } from "@/lib/storage";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import type { HSKLevel } from "@/types";

interface NormalizedInterviewQA {
  id: string;
  level: HSKLevel;
  questionZh: string;
  questionPinyin: string;
  questionVi: string;
  answerZh: string;
  answerPinyin: string;
  answerVi: string;
  keyVocab: string[];
  tipsVi: string;
}

interface NormalizedInterviewTrack {
  id: string;
  titleVi: string;
  titleZh: string;
  subtitleVi: string;
  badgeText: string;
  questions: NormalizedInterviewQA[];
}

interface PracticeResult {
  transcript: string;
  evaluation: PronunciationEvaluation;
}

function getTrackIcon(trackId: string): React.ReactNode {
  if (trackId.includes("csc") || trackId.includes("hoc-bong")) {
    return <GraduationCap className="h-4 w-4" />;
  }
  if (trackId.includes("doanh-nghiep") || trackId.includes("job")) {
    return <Briefcase className="h-4 w-4" />;
  }
  if (trackId.includes("visa")) {
    return <FileCheck2 className="h-4 w-4" />;
  }
  return <Award className="h-4 w-4" />;
}

export default function InterviewPage() {
  const normalizedTracks = useMemo<NormalizedInterviewTrack[]>(() => {
    const rawTracks =
      (
        interviewModule as unknown as {
          INTERVIEW_TRACKS?: Array<Record<string, unknown>>;
        }
      ).INTERVIEW_TRACKS ?? [];

    return rawTracks.map((t, idx) => {
      const id = String(t.id ?? `track-${idx}`);
      const titleVi = String(t.titleVi ?? t.title ?? "Lộ trình phỏng vấn");
      const titleZh = String(t.titleZh ?? t.titleDe ?? "");
      const subtitleVi = String(t.subtitleVi ?? t.descriptionVi ?? "");
      const badgeText = String(t.badgeText ?? t.levelRange ?? "HSK 3 – HSK 9");
      const rawQuestions =
        (t.questions as Array<Record<string, unknown>>) ?? [];

      const questions: NormalizedInterviewQA[] = rawQuestions.map(
        (q, qIdx) => {
          const kvRaw = q.keyVocab;
          const keyVocab: string[] = Array.isArray(kvRaw)
            ? kvRaw.map((item) => {
                if (typeof item === "string") return item;
                const obj = item as {
                  hanzi?: string;
                  word?: string;
                  pinyin?: string;
                  meaningVi?: string;
                };
                const h = obj.hanzi ?? obj.word ?? "";
                const m = obj.meaningVi ? ` (${obj.meaningVi})` : "";
                return `${h}${m}`;
              })
            : [];

          const tipsRaw = q.tipsVi ?? q.tipVi;
          const tipsVi = Array.isArray(tipsRaw)
            ? (tipsRaw as string[]).join(" · ")
            : String(tipsRaw ?? "");

          return {
            id: String(q.id ?? `${id}-q-${qIdx}`),
            level: (q.level as HSKLevel) ?? "HSK4",
            questionZh: String(q.questionZh ?? q.questionDe ?? ""),
            questionPinyin: String(q.questionPinyin ?? ""),
            questionVi: String(q.questionVi ?? ""),
            answerZh: String(
              q.answerZh ?? q.modelAnswerZh ?? q.modelAnswerDe ?? ""
            ),
            answerPinyin: String(q.answerPinyin ?? q.modelAnswerPinyin ?? ""),
            answerVi: String(q.answerVi ?? q.modelAnswerVi ?? ""),
            keyVocab,
            tipsVi,
          };
        }
      );

      return {
        id,
        titleVi,
        titleZh,
        subtitleVi,
        badgeText,
        questions,
      };
    });
  }, []);

  const [activeTrackId, setActiveTrackId] = useState<string>(
    normalizedTracks[0]?.id ?? "hoc-bong-csc"
  );
  const [hiddenAnswers, setHiddenAnswers] = useState<Record<string, boolean>>(
    {}
  );
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  // Microphone practice state
  const [supported, setSupported] = useState(true);
  const [practiceQaId, setPracticeQaId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [micError, setMicError] = useState<string | null>(null);
  const [resultsByQa, setResultsByQa] = useState<
    Record<string, PracticeResult>
  >({});
  const [awardedQaIds, setAwardedQaIds] = useState<Record<string, boolean>>({});
  const [lastXpToast, setLastXpToast] = useState<string | null>(null);

  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);
  const latestTranscriptRef = useRef("");

  useEffect(() => {
    setSupported(isSpeechRecognitionSupported());
    return () => {
      recognizerRef.current?.abort();
      stopSpeaking();
    };
  }, []);

  const activeTrack = useMemo(
    () =>
      normalizedTracks.find((t) => t.id === activeTrackId) ??
      normalizedTracks[0],
    [normalizedTracks, activeTrackId]
  );

  const passedCountInTrack = useMemo(() => {
    if (!activeTrack) return 0;
    return activeTrack.questions.filter(
      (q) => resultsByQa[q.id]?.evaluation.passed
    ).length;
  }, [activeTrack, resultsByQa]);

  const totalPassedCount = useMemo(() => {
    return Object.values(resultsByQa).filter((r) => r.evaluation.passed).length;
  }, [resultsByQa]);

  const totalQuestionsCount = useMemo(() => {
    return normalizedTracks.reduce((sum, t) => sum + t.questions.length, 0);
  }, [normalizedTracks]);

  const stopMic = () => {
    recognizerRef.current?.abort();
    recognizerRef.current = null;
    setIsListening(false);
  };

  const handleTrackChange = (trackId: string) => {
    stopMic();
    stopSpeaking();
    setSpeakingKey(null);
    setPracticeQaId(null);
    setLiveTranscript("");
    setMicError(null);
    setActiveTrackId(trackId);
  };

  const handleSpeak = (key: string, textZh: string, rate = 0.95) => {
    if (speakingKey === key) {
      stopSpeaking();
      setSpeakingKey(null);
      return;
    }
    stopMic();
    setSpeakingKey(key);
    speakChinese(textZh, rate, () => {
      setSpeakingKey((prev) => (prev === key ? null : prev));
    });
  };

  const toggleAnswerVisibility = (qaId: string) => {
    setHiddenAnswers((prev) => ({ ...prev, [qaId]: !prev[qaId] }));
  };

  const openMicPractice = (qaId: string) => {
    if (practiceQaId === qaId) {
      stopMic();
      setPracticeQaId(null);
      setLiveTranscript("");
      setMicError(null);
      return;
    }
    stopMic();
    stopSpeaking();
    setSpeakingKey(null);
    setPracticeQaId(qaId);
    setLiveTranscript(resultsByQa[qaId]?.transcript ?? "");
    setMicError(null);
  };

  const finalizeEvaluation = (
    qa: NormalizedInterviewQA,
    transcript: string
  ) => {
    const cleaned = transcript.trim();
    if (!cleaned) return;
    const evaluation = evaluateChinesePronunciation(
      qa.answerZh,
      cleaned,
      "binh-thuong",
      qa.answerPinyin
    );
    setResultsByQa((prev) => ({
      ...prev,
      [qa.id]: { transcript: cleaned, evaluation },
    }));

    if (evaluation.passed && !awardedQaIds[qa.id]) {
      addXP(15);
      setAwardedQaIds((prev) => ({ ...prev, [qa.id]: true }));
      setLastXpToast(
        `+15 XP · Đạt ${evaluation.accuracy}% câu trả lời phỏng vấn tiếng Trung!`
      );
      setTimeout(() => setLastXpToast(null), 3500);
    }
  };

  const startListeningForQa = (qa: NormalizedInterviewQA) => {
    if (!supported) return;
    stopSpeaking();
    setSpeakingKey(null);
    setMicError(null);
    setLiveTranscript("");
    latestTranscriptRef.current = "";

    const recognizer = createChineseRecognizer(
      {
        onResult: (transcript, isFinal) => {
          latestTranscriptRef.current = transcript;
          setLiveTranscript(transcript);
          if (isFinal) {
            finalizeEvaluation(qa, transcript);
          }
        },
        onError: (err) => {
          setIsListening(false);
          if (err === "not-allowed") {
            setMicError(
              "Trình duyệt chưa cấp quyền Micro. Hãy bật quyền Micro hoặc bấm 'Mô phỏng trả lời chuẩn'."
            );
          } else if (err === "no-speech") {
            setMicError(
              "Chưa nghe thấy giọng nói. Hãy thử lại và nói gần Micro hơn."
            );
          } else {
            setMicError(`Lỗi nhận diện giọng nói: ${err}`);
          }
        },
        onEnd: () => {
          setIsListening(false);
          if (latestTranscriptRef.current.trim()) {
            finalizeEvaluation(qa, latestTranscriptRef.current);
          }
        },
      },
      { continuous: true, interimResults: true, lang: "zh-CN" }
    );

    if (!recognizer) {
      setSupported(false);
      return;
    }

    recognizerRef.current = recognizer;
    try {
      setIsListening(true);
      recognizer.start();
    } catch {
      setIsListening(false);
      setMicError("Không thể khởi động Micro. Vui lòng thử lại.");
    }
  };

  const stopListeningNow = (qa: NormalizedInterviewQA) => {
    if (recognizerRef.current) {
      recognizerRef.current.stop();
      recognizerRef.current = null;
    }
    setIsListening(false);
    if (latestTranscriptRef.current.trim()) {
      finalizeEvaluation(qa, latestTranscriptRef.current);
    }
  };

  const handleSimulateAnswer = (qa: NormalizedInterviewQA) => {
    stopMic();
    setMicError(null);
    setLiveTranscript(qa.answerZh);
    finalizeEvaluation(qa, qa.answerZh);
  };

  const resetQaResult = (qaId: string) => {
    stopMic();
    setLiveTranscript("");
    latestTranscriptRef.current = "";
    setMicError(null);
    setResultsByQa((prev) => {
      const next = { ...prev };
      delete next[qaId];
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge variant="default">面试与口试 · Interview &amp; HSKK</Badge>
            <Badge variant="outline">
              {totalQuestionsCount} câu hỏi phỏng vấn thực chiến
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
            Luyện Phỏng Vấn CSC · Doanh Nghiệp TQ · Visa · HSKK
          </h1>
          <p className="mt-1 text-sm text-[#737373]">
            Chạm vào bất kỳ từ chữ Hán nào để tra từ điển, nghe phát âm chuẩn và luyện trả lời trực tiếp bằng Micro chấm điểm phát âm.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPinyin((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
              showPinyin
                ? "border-[#6B655E] bg-[#6B655E] text-white"
                : "border-[#E5E5E0] bg-white text-[#4A4540]"
            }`}
          >
            <Languages className="h-3.5 w-3.5" />
            {showPinyin ? "Pinyin: BẬT" : "Pinyin: TẮT"}
          </button>

          <div className="rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 shadow-xs">
            <div className="flex items-center justify-between gap-4 text-xs text-[#737373]">
              <span>Đã đạt (≥ 75%)</span>
              <span className="font-semibold text-[#262626]">
                {totalPassedCount}/{totalQuestionsCount}
              </span>
            </div>
            <Progress
              value={(totalPassedCount / Math.max(1, totalQuestionsCount)) * 100}
              className="mt-1.5 h-1.5 w-32"
            />
          </div>
        </div>
      </div>

      {/* XP Toast */}
      {lastXpToast && (
        <div className="flex items-center gap-2 rounded-xl border border-[#D4D4CE] bg-[#F5F5F3] px-4 py-2.5 text-sm font-medium text-[#292524]">
          <Sparkles className="h-4 w-4 text-[#6B655E]" />
          <span>{lastXpToast}</span>
        </div>
      )}

      {/* 4 Track Tabs */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {normalizedTracks.map((track) => {
          const isActive = track.id === activeTrack?.id;
          const trackPassed = track.questions.filter(
            (q) => resultsByQa[q.id]?.evaluation.passed
          ).length;

          return (
            <button
              key={track.id}
              type="button"
              onClick={() => handleTrackChange(track.id)}
              className={`group flex cursor-pointer flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-150 ${
                isActive
                  ? "border-[#292524] bg-[#292524] text-white shadow-xs"
                  : "border-[#E5E5E0] bg-white text-[#262626] hover:border-[#D4D4CE] hover:bg-[#FAF9F6]"
              }`}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-[#EFEFEA] text-[#4A4540] group-hover:bg-[#E5E5E0]"
                  }`}
                >
                  {getTrackIcon(track.id)}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                    isActive
                      ? "bg-white/15 text-[#F5F5F3]"
                      : "bg-[#F5F5F3] text-[#737373]"
                  }`}
                >
                  {trackPassed}/{track.questions.length}
                </span>
              </div>
              <p className="mt-2.5 text-sm font-semibold leading-snug">
                {track.titleVi}
              </p>
              <p
                className={`mt-0.5 text-xs ${
                  isActive ? "text-[#D4D4CE]" : "text-[#737373]"
                }`}
              >
                {track.badgeText}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Track Banner */}
      {activeTrack && (
        <>
          <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F6] px-5 py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                  {activeTrack.titleZh}
                </p>
                <h2 className="mt-0.5 text-lg font-semibold text-[#262626]">
                  {activeTrack.titleVi}
                </h2>
                <p className="mt-1 text-sm text-[#525252]">
                  {activeTrack.subtitleVi}
                </p>
              </div>
              <div className="shrink-0 text-xs font-medium text-[#6B655E]">
                Hoàn thành: {passedCountInTrack}/{activeTrack.questions.length} câu
              </div>
            </div>
          </div>

          {/* Q&A Cards */}
          <div className="space-y-4">
            {activeTrack.questions.map((qa, idx) => {
              const isAnswerHidden = !!hiddenAnswers[qa.id];
              const isPracticeOpen = practiceQaId === qa.id;
              const result = resultsByQa[qa.id];
              const qAudioKey = `q-${qa.id}`;
              const aAudioKey = `a-${qa.id}`;
              const aSlowAudioKey = `aslow-${qa.id}`;

              return (
                <Card key={qa.id} className="overflow-hidden">
                  <CardHeader className="border-b border-[#EFEFEA] bg-[#FAF9F6]/70 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#292524] text-xs font-semibold text-white">
                          {idx + 1}
                        </span>
                        <Badge variant="default">{qa.level}</Badge>
                        {result?.evaluation.passed && (
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Đạt {result.evaluation.accuracy}%
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleSpeak(qAudioKey, qa.questionZh, 0.95)
                          }
                          aria-label="Nghe câu hỏi phỏng vấn"
                        >
                          <Volume2
                            className={`h-3.5 w-3.5 ${
                              speakingKey === qAudioKey
                                ? "animate-pulse text-[#292524]"
                                : ""
                            }`}
                          />
                          <span>
                            {speakingKey === qAudioKey
                              ? "Đang đọc..."
                              : "Nghe câu hỏi"}
                          </span>
                        </Button>
                      </div>
                    </div>

                    {/* Question ZH + Pinyin + VI */}
                    <div className="mt-3 space-y-1">
                      <div className="text-lg font-bold leading-relaxed text-[#262626]">
                        <InteractiveChineseText
                          text={qa.questionZh}
                          pinyin={qa.questionPinyin}
                        />
                      </div>
                      {showPinyin && qa.questionPinyin && (
                        <p className="font-mono text-xs text-[#6B655E]">
                          {qa.questionPinyin}
                        </p>
                      )}
                      <p className="text-sm text-[#737373]">{qa.questionVi}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-4">
                    {/* Model Answer Section */}
                    <div className="rounded-xl border border-[#E5E5E0] bg-white p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
                          Câu trả lời mẫu chuẩn (示范回答)
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleAnswerVisibility(qa.id)}
                          >
                            {isAnswerHidden ? (
                              <>
                                <Eye className="h-3.5 w-3.5" />
                                <span>Hiện mẫu</span>
                              </>
                            ) : (
                              <>
                                <EyeOff className="h-3.5 w-3.5" />
                                <span>Ẩn mẫu</span>
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleSpeak(aAudioKey, qa.answerZh, 0.95)
                            }
                          >
                            <Volume2
                              className={`h-3.5 w-3.5 ${
                                speakingKey === aAudioKey
                                  ? "animate-pulse text-[#292524]"
                                  : ""
                              }`}
                            />
                            <span>Nghe mẫu</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleSpeak(aSlowAudioKey, qa.answerZh, 0.75)
                            }
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            <span>0.75x</span>
                          </Button>
                        </div>
                      </div>

                      {isAnswerHidden ? (
                        <p className="mt-3 text-sm italic text-[#737373]">
                          Đã ẩn câu trả lời mẫu để bạn tự luyện phản xạ. Bấm &ldquo;Hiện mẫu&rdquo; để xem lại.
                        </p>
                      ) : (
                        <div className="mt-3 space-y-2">
                          <div className="text-base font-medium leading-loose text-[#262626]">
                            <InteractiveChineseText
                              text={qa.answerZh}
                              pinyin={qa.answerPinyin}
                            />
                          </div>
                          {showPinyin && qa.answerPinyin && (
                            <p className="font-mono text-xs leading-relaxed text-[#6B655E]">
                              {qa.answerPinyin}
                            </p>
                          )}
                          <p className="text-sm leading-relaxed text-[#737373]">
                            {qa.answerVi}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Key Vocab Tags */}
                    {qa.keyVocab.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#6B655E]">
                          Từ vựng ăn điểm:
                        </span>
                        {qa.keyVocab.map((kw, kIdx) => (
                          <span
                            key={`${kw}-${kIdx}`}
                            className="rounded-lg border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-0.5 text-xs font-medium text-[#262626]"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tip Box */}
                    {qa.tipsVi && (
                      <div className="flex items-start gap-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F6] px-3.5 py-3 text-sm text-[#525252]">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
                        <div>
                          <span className="font-semibold text-[#262626]">
                            Bí quyết ghi điểm phỏng vấn:{" "}
                          </span>
                          <span>{qa.tipsVi}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Bar: Toggle Mic Practice */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <Button
                        variant={isPracticeOpen ? "primary" : "secondary"}
                        size="sm"
                        onClick={() => openMicPractice(qa.id)}
                      >
                        <Mic className="h-4 w-4" />
                        <span>
                          {isPracticeOpen
                            ? "Đóng chế độ Micro"
                            : "Tập trả lời bằng Micro (zh-CN)"}
                        </span>
                      </Button>

                      {result && !isPracticeOpen && (
                        <span className="text-xs font-medium text-[#6B655E]">
                          Lần gần nhất: {result.evaluation.accuracy}% chuẩn xác
                        </span>
                      )}
                    </div>

                    {/* Mic Practice Panel */}
                    {isPracticeOpen && (
                      <div className="space-y-3 rounded-xl border border-[#D4D4CE] bg-[#FAF9F6] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-[#262626]">
                              Tập trả lời phỏng vấn bằng Micro (zh-CN)
                            </p>
                            <p className="text-xs text-[#737373]">
                              Bấm nút thu âm và đọc câu trả lời mẫu bằng tiếng Trung để chấm điểm phát âm trực tiếp.
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            {isListening ? (
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => stopListeningNow(qa)}
                              >
                                <MicOff className="h-4 w-4" />
                                <span>Dừng &amp; Chấm điểm</span>
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                size="sm"
                                disabled={!supported}
                                onClick={() => startListeningForQa(qa)}
                              >
                                <Mic className="h-4 w-4" />
                                <span>{result ? "Nói lại" : "Bắt đầu nói"}</span>
                              </Button>
                            )}

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSimulateAnswer(qa)}
                            >
                              <Wand2 className="h-3.5 w-3.5" />
                              <span>Mô phỏng trả lời chuẩn</span>
                            </Button>

                            {result && !isListening && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => resetQaResult(qa.id)}
                                aria-label="Xóa kết quả"
                              >
                                <RotateCcw className="h-3.5 w-3.5" />
                              </Button>
                            )}
                          </div>
                        </div>

                        {!supported && (
                          <div className="flex items-start gap-2 rounded-lg border border-[#E5E5E0] bg-white p-3 text-xs text-[#525252]">
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#A16207]" />
                            <span>
                              Trình duyệt hiện tại chưa hỗ trợ Web Speech API (zh-CN). Hãy dùng Chrome / Edge hoặc bấm &ldquo;Mô phỏng trả lời chuẩn&rdquo; để xem chấm điểm.
                            </span>
                          </div>
                        )}

                        {micError && (
                          <div className="flex items-start gap-2 rounded-lg border border-[#E5E5E0] bg-white p-3 text-xs text-[#B91C1C]">
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{micError}</span>
                          </div>
                        )}

                        {/* Live Transcript */}
                        {(isListening || liveTranscript) && (
                          <div className="rounded-lg border border-[#E5E5E0] bg-white p-3">
                            <div className="flex items-center justify-between text-xs text-[#737373]">
                              <span>
                                {isListening
                                  ? "Đang nghe tiếng Trung (zh-CN)..."
                                  : "Bản ghi giọng nói của bạn:"}
                              </span>
                              {isListening && (
                                <span className="inline-flex items-center gap-1.5 font-medium text-[#B91C1C]">
                                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#B91C1C]" />
                                  REC
                                </span>
                              )}
                            </div>
                            <p className="mt-1.5 text-sm text-[#262626]">
                              {liveTranscript || "..."}
                            </p>
                          </div>
                        )}

                        {/* Evaluation Result */}
                        {result && !isListening && (
                          <div className="space-y-3 rounded-lg border border-[#E5E5E0] bg-white p-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-[#262626]">
                                  {result.evaluation.accuracy}%
                                </span>
                                <Badge
                                  variant={
                                    result.evaluation.passed
                                      ? "success"
                                      : "warning"
                                  }
                                >
                                  {result.evaluation.passed
                                    ? "Đạt yêu cầu (≥ 75%)"
                                    : "Cần luyện thêm"}
                                </Badge>
                              </div>
                              <span className="text-xs font-medium italic text-[#6B655E]">
                                {result.evaluation.encouragementZh}
                              </span>
                            </div>

                            <Progress
                              value={result.evaluation.accuracy}
                              className="h-2"
                            />

                            <p className="text-sm text-[#525252]">
                              {result.evaluation.feedbackVi}
                            </p>

                            {result.evaluation.missedWords.length > 0 && (
                              <div className="space-y-1.5">
                                <p className="text-xs font-semibold text-[#525252]">
                                  Chữ Hán cần phát âm rõ thanh điệu hơn:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {result.evaluation.missedWords
                                    .slice(0, 12)
                                    .map((w, i) => (
                                      <span
                                        key={`${w}-${i}`}
                                        className="rounded-md border border-[#FECACA] bg-[#FEF2F2] px-2 py-0.5 text-xs font-bold text-[#B91C1C]"
                                      >
                                        {w}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            )}

                            {result.evaluation.detectedPhonemes.length > 0 && (
                              <div className="space-y-1.5 border-t border-[#EFEFEA] pt-2.5">
                                <p className="text-xs font-semibold text-[#525252]">
                                  Gợi ý chỉnh âm tiếng Trung:
                                </p>
                                <ul className="space-y-1 text-xs text-[#737373]">
                                  {result.evaluation.detectedPhonemes.map(
                                    (p) => (
                                      <li key={p.phoneme}>
                                        <span className="font-semibold text-[#262626]">
                                          [{p.phoneme}] {p.labelVi}:
                                        </span>{" "}
                                        {p.tipVi}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
