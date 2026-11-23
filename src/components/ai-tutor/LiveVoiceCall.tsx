"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Camera,
  CameraOff,
  Captions,
  ChevronDown,
  ChevronUp,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  RotateCcw,
  Settings,
  SkipForward,
  Sparkles,
  Volume2,
  VolumeX,
  Wand2,
  X,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import {
  Avatar3D,
  type AvatarGender,
  type AvatarState,
} from "@/components/ai-tutor/Avatar3D";
import { useLiveCall } from "@/hooks/useLiveCall";
import { AI_PERSONA_LIST, AI_PERSONAS } from "@/lib/ai-tutor";
import { speakBilingualTurn } from "@/lib/speech";
import {
  getAvailableVoices,
  resolveVoiceConfig,
  setPreferredVoiceName,
  subscribeVoicesChanged,
} from "@/lib/tts-voice";
import { VOICE_CALL_SPEEDS } from "@/lib/voice-call";
import type { AIPersonaMode } from "@/types";

export type CallLevel = "HSK1" | "HSK3" | "HSK5";

const CALL_LEVELS: { id: CallLevel; label: string }[] = [
  { id: "HSK1", label: "Sơ cấp (HSK 0–2)" },
  { id: "HSK3", label: "Trung cấp (HSK 3–4)" },
  { id: "HSK5", label: "Cao cấp (HSK 5–6+)" },
];

export interface LiveVoiceCallProps {
  persona: AIPersonaMode;
  onChangePersona: (persona: AIPersonaMode) => void;
  initialLevel?: CallLevel;
}

interface ChinesePhonemeGuideItem {
  id: string;
  symbol: string;
  labelVi: string;
  tipVi: string;
  examples: string;
  pattern: RegExp;
}

const CHINESE_PHONEME_GUIDES: ChinesePhonemeGuideItem[] = [
  {
    id: "zh_ch_sh_r",
    symbol: "zh / ch / sh / r",
    labelVi: "Âm cuốn lưỡi (翘舌音)",
    tipVi:
      "Cong đầu lưỡi chạm nhẹ lên vòm cứng phía sau chân răng cửa trên. Với 'ch' nhớ bật luồng hơi mạnh ra ngoài.",
    examples: "知道 (zhīdào), 吃饭 (chīfàn), 是 (shì), 认识 (rènshi)",
    pattern: /(zh|ch|sh|r)/i,
  },
  {
    id: "j_q_x",
    symbol: "j / q / x",
    labelVi: "Âm mặt lưỡi (舌面音)",
    tipVi:
      "Đặt đầu lưỡi chạm mặt sau răng cửa dưới, nâng mặt lưỡi sát vòm miệng. 'q' bật hơi mạnh, 'j' không bật hơi.",
    examples: "今天 (jīntiān), 请问 (qǐngwèn), 谢谢 (xièxie)",
    pattern: /(j|q|x)/i,
  },
  {
    id: "z_c_s",
    symbol: "z / c / s",
    labelVi: "Âm đầu lưỡi thẳng (平舌音)",
    tipVi:
      "Giữ lưỡi thẳng chạm nhẹ mặt sau răng cửa trên, không cong lưỡi. Với 'c' bật hơi rõ.",
    examples: "再见 (zàijiàn), 菜 (cài), 三 (sān)",
    pattern: /\b(z|c|s)(?!h)/i,
  },
  {
    id: "tone3",
    symbol: "Biến điệu thanh 3 (3+3 → 2+3)",
    labelVi: "Quy tắc biến điệu Thanh 3 & 一 / 不",
    tipVi:
      "Hai thanh 3 đi liền nhau thì chữ đầu tự động đọc thành thanh 2 (你好 → ní hǎo). '不' đứng trước thanh 4 đọc thành bú (不是 → bú shì).",
    examples: "你好 (ní hǎo), 很好 (hén hǎo), 不是 (bú shì)",
    pattern: /[ǎěǐǒǔ]/i,
  },
];

function extractHanziChars(text: string): string[] {
  return Array.from(text).filter((ch) => /\p{Script=Han}/u.test(ch));
}

export function LiveVoiceCall({
  persona,
  onChangePersona,
  initialLevel = "HSK1",
}: LiveVoiceCallProps) {
  const [level, setLevel] = useState<CallLevel>(initialLevel);
  const [avatarGender] = useState<AvatarGender>("female");
  const [playViVoice, setPlayViVoice] = useState(true);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [autoNext, setAutoNext] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [showCallPinyin, setShowCallPinyin] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showPhonemeCoaching, setShowPhonemeCoaching] = useState(false);

  const [zhVoices, setZhVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoice, setSelectedZhVoice] = useState<string>("");
  const [isTestingVoice, setIsTestingVoice] = useState(false);
  const [activeVoiceLabel, setActiveVoiceLabel] = useState<string>("");

  // PiP Webcam state
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const camStreamRef = useRef<MediaStream | null>(null);

  const {
    callState,
    isCallActive,
    isMuted,
    currentPrompt,
    promptIndex,
    totalPromptsInLevel,
    liveTranscript,
    evaluation,
    errorMsg,
    noSpeechHint,
    speechSupported,
    practicedCount,
    avgAccuracy,
    startCall,
    endCall,
    toggleMute,
    retryListening,
    replayModel,
    nextPrompt,
    selectLevel,
    simulateAttempt,
    bargeInEnabled,
    setBargeInEnabled,
  } = useLiveCall({
    persona,
    level,
    avatarGender,
    playViVoice,
    speechRate,
    autoNext,
  });

  // Stop webcam stream helper
  const stopCamera = useCallback(() => {
    if (camStreamRef.current) {
      camStreamRef.current.getTracks().forEach((t) => t.stop());
      camStreamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  }, []);

  const toggleCamera = useCallback(async () => {
    if (isCameraOn) {
      stopCamera();
      return;
    }
    setCameraError(null);
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setCameraError("Trình duyệt không hỗ trợ Camera.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 480 }, height: { ideal: 360 } },
        audio: false,
      });
      camStreamRef.current = stream;
      setIsCameraOn(true);
    } catch {
      setCameraError("Chưa được cấp quyền Camera.");
      setIsCameraOn(false);
    }
  }, [isCameraOn, stopCamera]);

  // Attach MediaStream once video element mounts
  useEffect(() => {
    if (isCameraOn && videoRef.current && camStreamRef.current) {
      videoRef.current.srcObject = camStreamRef.current;
    }
  }, [isCameraOn]);

  // Cleanup camera on unmount
  useEffect(() => () => stopCamera(), [stopCamera]);

  useEffect(() => {
    setPreferredVoiceName("zh", selectedZhVoice || undefined);
    return () => {
      setPreferredVoiceName("zh", undefined);
    };
  }, [selectedZhVoice]);

  useEffect(() => {
    const syncVoices = () => {
      setZhVoices(getAvailableVoices("zh"));
      const zh = resolveVoiceConfig("zh", avatarGender, selectedZhVoice || undefined);
      const vi = resolveVoiceConfig("vi", avatarGender);
      const zhLabel = zh.voice
        ? zh.isFallbackPitch
          ? `${zh.voice.name} (pitch ${zh.pitch})`
          : zh.voice.name
        : "BaoBao (zh-CN)";
      const viLabel = vi.voice ? vi.voice.name : "Tiếng Việt";
      setActiveVoiceLabel(`ZH: ${zhLabel} · VI: ${viLabel}`);
    };

    syncVoices();
    return subscribeVoicesChanged(syncVoices);
  }, [avatarGender, selectedZhVoice]);

  const handleSelectCallLevel = (newLvl: CallLevel) => {
    setLevel(newLvl);
    selectLevel(newLvl);
  };

  const handleTestVoice = () => {
    setIsTestingVoice(true);
    const sampleVi =
      "Chào bạn, mình là Capybara BaoBao! Hôm nay mình cùng luyện phát âm 4 thanh điệu tiếng Trung nhé!";
    const sampleZh = "你好呀！我是宝宝老师。今天我们一起练习标准的中文发音吧！";

    speakBilingualTurn(sampleVi, sampleZh, {
      playVi: playViVoice,
      rate: speechRate,
      gender: avatarGender,
      zhVoiceName: selectedZhVoice || undefined,
      onPhaseChange: (phase) => {
        if (phase === "done") {
          setIsTestingVoice(false);
        }
      },
    });
  };

  const handleEndCall = () => {
    endCall();
    stopCamera();
  };

  const activePersona = AI_PERSONAS[persona] ?? AI_PERSONAS["binh-thuong"];
  const avatarState: AvatarState = callState === "thinking" ? "analyzing" : callState;

  const statusMeta = useMemo(() => {
    switch (callState) {
      case "speaking":
        return {
          label: bargeInEnabled
            ? "BaoBao đang nói · Nói để ngắt lời"
            : "BaoBao đang đọc mẫu...",
          dotClass: "bg-[#F26B5B] animate-pulse",
        };
      case "listening":
        return {
          label: "BaoBao đang lắng nghe bạn...",
          dotClass: "bg-emerald-400 animate-ping",
        };
      case "thinking":
        return {
          label: "Đang chấm thanh điệu & âm bật hơi...",
          dotClass: "bg-amber-400 animate-pulse",
        };
      default:
        return {
          label: isCallActive ? "Đang chờ lượt nói" : "Sẵn sàng gọi BaoBao 3D",
          dotClass: "bg-stone-400",
        };
    }
  }, [callState, isCallActive, bargeInEnabled]);

  const charHeatmap = useMemo(() => {
    if (!evaluation || !currentPrompt) return null;
    const matchedSet = new Set(evaluation.matchedWords);
    const targetChars = extractHanziChars(currentPrompt.targetZh);
    return targetChars.map((ch, idx) => ({
      ch,
      hit: matchedSet.has(ch),
      key: `${idx}-${ch}`,
    }));
  }, [evaluation, currentPrompt]);

  const sentencePhonemes = useMemo(() => {
    if (!currentPrompt) return [];
    const py = currentPrompt.targetPinyin || "";
    return CHINESE_PHONEME_GUIDES.map((guide) => ({
      ...guide,
      inSentence: guide.pattern.test(py),
    }));
  }, [currentPrompt]);

  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-[#F2F2F0]/40 px-3 py-4 sm:px-5">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {/* ─── Immersive Live Call Stage ─── */}
        <div className="relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-3xl border border-stone-800/80 bg-gradient-to-b from-[#231D1A] via-[#1B1614] to-[#13100E] text-white shadow-2xl sm:min-h-[660px]">
          {/* Subtle ambient coral glow behind BaoBao */}
          <div
            className={`pointer-events-none absolute left-1/2 top-[34%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-500 ${
              callState === "speaking"
                ? "bg-[#F26B5B]/25 opacity-100"
                : callState === "listening"
                  ? "bg-emerald-500/20 opacity-90"
                  : "bg-[#E59A5C]/15 opacity-60"
            }`}
          />

          {/* ── Top Floating HUD ── */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 px-4 pt-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className={`h-2 w-2 rounded-full ${statusMeta.dotClass}`} />
                <span className="text-xs font-semibold text-white">
                  BaoBao 3D · {activePersona.emoji} {activePersona.label}
                </span>
              </div>
              <span className="rounded-full border border-[#F26B5B]/40 bg-[#F26B5B]/15 px-2.5 py-1 text-[11px] font-semibold text-[#FF9B8E]">
                {level}
              </span>
              <span className="hidden text-xs text-stone-300 sm:inline">
                {statusMeta.label}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-stone-200 backdrop-blur-md">
                {practicedCount} câu · TB {avgAccuracy}%
              </span>
              <button
                type="button"
                onClick={replayModel}
                title="Nghe lại câu mẫu"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-stone-200 backdrop-blur-md transition-colors hover:bg-white/20 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={nextPrompt}
                title="Chuyển câu tiếp theo"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-stone-200 backdrop-blur-md transition-colors hover:bg-white/20 cursor-pointer"
              >
                <SkipForward className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* ── PiP Webcam (top-right, mirrored, rounded) ── */}
          {isCameraOn && (
            <div className="absolute right-4 top-16 z-30 h-28 w-36 overflow-hidden rounded-2xl border-2 border-white/25 bg-black/70 shadow-2xl sm:h-36 sm:w-48">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="h-full w-full -scale-x-100 object-cover"
              />
              <span className="absolute bottom-1.5 left-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                Bạn
              </span>
            </div>
          )}

          {/* ── Center 3D Capybara BaoBao Stage (unobstructed) ── */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-2">
            <div className="h-[260px] w-full max-w-[340px] sm:h-[310px] sm:max-w-[400px]">
              <Avatar3D
                gender={avatarGender}
                state={avatarState}
                persona={persona}
                isHappyResult={Boolean(evaluation?.passed)}
                fill
              />
            </div>

            {/* Subtle inline hints (error / no-speech / camera) */}
            {(noSpeechHint || errorMsg || cameraError) && (
              <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                {noSpeechHint && (
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1 text-[11px] text-amber-200 backdrop-blur-sm">
                    {noSpeechHint}
                  </span>
                )}
                {errorMsg && (
                  <span className="rounded-full border border-red-400/30 bg-red-500/20 px-3 py-1 text-[11px] text-red-200 backdrop-blur-sm">
                    {errorMsg}
                  </span>
                )}
                {cameraError && (
                  <span className="rounded-full border border-red-400/30 bg-red-500/20 px-3 py-1 text-[11px] text-red-200 backdrop-blur-sm">
                    {cameraError}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* ── Floating Live Captions (below avatar, never covering BaoBao) ── */}
          <div className="relative z-20 flex flex-col items-center gap-3 px-4 pb-5 sm:px-6">
            {showCaptions && currentPrompt && (
              <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-center backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between text-[11px] text-stone-300">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 font-medium">
                    {currentPrompt.topic} · {currentPrompt.level}
                  </span>
                  <span>
                    Câu {(promptIndex % Math.max(1, totalPromptsInLevel)) + 1}/
                    {totalPromptsInLevel}
                  </span>
                </div>

                {/* Target Hanzi */}
                <div className="font-display text-lg font-bold leading-snug text-white sm:text-xl [&_span]:text-white">
                  <InteractiveChineseText
                    text={currentPrompt.targetZh}
                    pinyin={currentPrompt.targetPinyin}
                    showPinyin={false}
                  />
                </div>

                {/* Optional Pinyin */}
                {showCallPinyin && (
                  <p className="mt-0.5 font-mono text-xs text-[#FF9B8E]">
                    {currentPrompt.targetPinyin}
                  </p>
                )}

                <p className="mt-1 text-xs text-stone-300">
                  {currentPrompt.meaningVi}
                </p>

                {/* Live user speech transcript */}
                {liveTranscript && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">
                    <span className="opacity-75">Bạn nói:</span>
                    <span className="font-semibold text-white">{liveTranscript}</span>
                  </div>
                )}

                {/* Compact short correction & score */}
                {evaluation && (
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-2 border-t border-white/10 pt-2 text-xs">
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-bold ${
                        evaluation.accuracy >= 85
                          ? "bg-emerald-500/20 text-emerald-300"
                          : evaluation.accuracy >= 55
                            ? "bg-amber-500/20 text-amber-200"
                            : "bg-red-500/20 text-red-200"
                      }`}
                    >
                      {evaluation.accuracy}%{evaluation.passed ? " · +10 XP" : ""}
                    </span>
                    <span className="max-w-lg text-left text-stone-200 line-clamp-2">
                      {evaluation.feedbackVi}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* ── Floating Settings Popover (anchored above control bar) ── */}
            {showSettings && (
              <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-[#1D1816]/95 p-4 text-left text-xs text-stone-200 shadow-2xl backdrop-blur-2xl">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-display text-sm font-bold text-white">
                    Cài đặt cuộc gọi BaoBao
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="rounded-full p-1 text-stone-400 hover:bg-white/10 hover:text-white cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Level */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-stone-300">Cấp độ</span>
                    <div className="flex flex-wrap gap-1">
                      {CALL_LEVELS.map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => handleSelectCallLevel(lvl.id)}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                            level === lvl.id
                              ? "bg-[#F26B5B] text-white"
                              : "bg-white/10 text-stone-300 hover:bg-white/20"
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Persona mood */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-stone-300">Thái độ BaoBao</span>
                    <div className="flex flex-wrap gap-1">
                      {AI_PERSONA_LIST.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => onChangePersona(p.id)}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                            p.id === persona
                              ? "bg-[#F26B5B] text-white"
                              : "bg-white/10 text-stone-300 hover:bg-white/20"
                          }`}
                        >
                          <span>{p.emoji}</span>
                          <span>{p.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Speed */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-stone-300">Tốc độ nói</span>
                    <div className="inline-flex rounded-full bg-white/10 p-0.5">
                      {VOICE_CALL_SPEEDS.map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => setSpeechRate(spd)}
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold cursor-pointer ${
                            speechRate === spd
                              ? "bg-[#F26B5B] text-white"
                              : "text-stone-300 hover:text-white"
                          }`}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick toggles */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowCallPinyin((v) => !v)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        showCallPinyin
                          ? "bg-[#F26B5B] text-white"
                          : "bg-white/10 text-stone-300"
                      }`}
                    >
                      Pinyin: {showCallPinyin ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlayViVoice((v) => !v)}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        playViVoice
                          ? "bg-[#F26B5B] text-white"
                          : "bg-white/10 text-stone-300"
                      }`}
                    >
                      {playViVoice ? (
                        <Volume2 className="h-3 w-3" />
                      ) : (
                        <VolumeX className="h-3 w-3" />
                      )}
                      Giọng Việt: {playViVoice ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAutoNext((v) => !v)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        autoNext
                          ? "bg-[#F26B5B] text-white"
                          : "bg-white/10 text-stone-300"
                      }`}
                    >
                      Tự chuyển câu: {autoNext ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBargeInEnabled((v) => !v)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        bargeInEnabled
                          ? "bg-[#F26B5B] text-white"
                          : "bg-white/10 text-stone-300"
                      }`}
                    >
                      Ngắt lời (Barge-in): {bargeInEnabled ? "Bật" : "Tắt"}
                    </button>
                  </div>

                  {/* zh-CN Voice selector + test */}
                  <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-2.5">
                    <select
                      aria-label="Chọn giọng đọc tiếng Trung (zh-CN)"
                      value={selectedZhVoice}
                      onChange={(e) => setSelectedZhVoice(e.target.value)}
                      className="max-w-[220px] flex-1 truncate rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white outline-none cursor-pointer"
                    >
                      <option value="" className="bg-stone-900">
                        Tự động (BaoBao zh-CN)
                      </option>
                      {zhVoices.map((voice) => (
                        <option
                          key={`${voice.name}-${voice.lang}`}
                          value={voice.name}
                          className="bg-stone-900"
                        >
                          {voice.name} ({voice.lang})
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={handleTestVoice}
                      className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white hover:bg-white/20 cursor-pointer"
                    >
                      <Volume2 className="h-3 w-3" />
                      {isTestingVoice ? "Đang phát..." : "Nghe thử"}
                    </button>
                  </div>
                  {activeVoiceLabel && (
                    <p className="truncate text-[10px] text-stone-400">
                      {activeVoiceLabel}
                    </p>
                  )}

                  {/* No-mic simulation */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-stone-400">
                      <Wand2 className="h-3 w-3" />
                      {speechSupported ? "Kiểm thử nhanh:" : "Không có micro — giả lập:"}
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => simulateAttempt("good")}
                        className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-white/25 cursor-pointer"
                      >
                        Đọc chuẩn (100%)
                      </button>
                      <button
                        type="button"
                        onClick={() => simulateAttempt("partial")}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-stone-300 hover:bg-white/20 cursor-pointer"
                      >
                        Thiếu chữ (~60%)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Floating Glassmorphism Control Bar (Mic, Camera, CC, Settings, Red End) ── */}
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-2 shadow-2xl backdrop-blur-2xl sm:gap-2.5 sm:px-4">
              {/* Mic button (toggle mute during call, or speak immediately if idle) */}
              <button
                type="button"
                onClick={() => {
                  if (!isCallActive) {
                    retryListening();
                  } else if (callState === "idle" && !isMuted) {
                    retryListening();
                  } else {
                    toggleMute();
                  }
                }}
                title={isMuted ? "Bật Mic" : "Tắt Mic / Thu âm"}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  isMuted
                    ? "bg-white/10 text-red-300 ring-1 ring-red-400/40 hover:bg-white/20"
                    : callState === "listening"
                      ? "bg-[#F26B5B] text-white shadow-[0_0_20px_rgba(242,107,91,0.55)]"
                      : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>

              {/* Camera PiP toggle */}
              <button
                type="button"
                onClick={toggleCamera}
                title={isCameraOn ? "Tắt Camera" : "Bật Camera (PiP)"}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  isCameraOn
                    ? "bg-[#F26B5B] text-white shadow-[0_0_16px_rgba(242,107,91,0.45)]"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                {isCameraOn ? (
                  <Camera className="h-5 w-5" />
                ) : (
                  <CameraOff className="h-5 w-5" />
                )}
              </button>

              {/* CC (Live Captions) toggle */}
              <button
                type="button"
                onClick={() => setShowCaptions((v) => !v)}
                title={showCaptions ? "Ẩn phụ đề trực tiếp (CC)" : "Hiện phụ đề trực tiếp (CC)"}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  showCaptions
                    ? "bg-[#F26B5B] text-white shadow-[0_0_16px_rgba(242,107,91,0.45)]"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Captions className="h-5 w-5" />
              </button>

              {/* Settings toggle */}
              <button
                type="button"
                onClick={() => setShowSettings((v) => !v)}
                title="Cài đặt cuộc gọi"
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  showSettings
                    ? "bg-[#F26B5B] text-white"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Settings className="h-5 w-5" />
              </button>

              <div className="mx-0.5 h-6 w-px bg-white/15" />

              {/* Start Call (brand coral) / Red End Call */}
              {isCallActive ? (
                <button
                  type="button"
                  onClick={handleEndCall}
                  title="Kết thúc cuộc gọi"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700 cursor-pointer"
                >
                  <PhoneOff className="h-4 w-4" />
                  <span className="hidden sm:inline">Kết thúc</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startCall}
                  title="Bắt đầu gọi BaoBao"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F26B5B] px-5 text-sm font-semibold text-white shadow-lg shadow-[#F26B5B]/35 transition-colors hover:bg-[#E05646] cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>Gọi BaoBao</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ─── Below-stage: Tip & Detailed Pronunciation Heatmap + Phoneme Coaching ─── */}
        {currentPrompt && (
          <div className="flex items-start gap-2 rounded-2xl border border-[#E5E5E0] bg-white px-4 py-3 text-xs text-[#57534E]">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#F26B5B]" />
            <div>
              <span className="font-semibold text-[#262626]">Mẹo phát âm: </span>
              {currentPrompt.tipVi}
            </div>
          </div>
        )}

        {evaluation && charHeatmap && (
          <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Bản đồ phát âm từng chữ Hán (Heatmap)
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#262626]">
                  {evaluation.encouragementZh}
                </p>
              </div>
              <span
                className={`rounded-xl border px-3 py-1 font-display text-sm font-bold ${
                  evaluation.accuracy >= 85
                    ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                    : evaluation.accuracy >= 55
                      ? "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]"
                      : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                }`}
              >
                {evaluation.accuracy}%
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {charHeatmap.map((item) => (
                <span
                  key={item.key}
                  className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-sm font-bold ${
                    item.hit
                      ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                      : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                  }`}
                >
                  <span>{item.ch}</span>
                  <span className="text-[10px] opacity-75">{item.hit ? "✓" : "✕"}</span>
                </span>
              ))}
            </div>

            {/* Expandable Chinese Phoneme Coaching */}
            <div className="border-t border-[#E5E5E0] pt-3">
              <button
                type="button"
                onClick={() => setShowPhonemeCoaching((prev) => !prev)}
                className="flex w-full items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2 text-left text-xs font-semibold text-[#262626] transition-colors hover:border-[#F26B5B]/50 cursor-pointer"
              >
                <span>
                  Huấn luyện phát âm tiếng Trung (zh/ch/sh/r, j/q/x, z/c/s, biến điệu thanh 3)
                </span>
                {showPhonemeCoaching ? (
                  <ChevronUp className="h-4 w-4 shrink-0 text-[#6B655E]" />
                ) : (
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#6B655E]" />
                )}
              </button>

              {showPhonemeCoaching && (
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {sentencePhonemes.map((guide) => (
                    <div
                      key={guide.id}
                      className={`rounded-xl border p-3 text-xs ${
                        guide.inSentence
                          ? "border-[#F26B5B]/40 bg-white"
                          : "border-[#E5E5E0] bg-[#FAF9F7]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-bold text-[#292524]">
                          <span className="rounded-md bg-[#292524] px-1.5 py-0.5 font-mono text-[11px] text-white">
                            {guide.symbol}
                          </span>
                          <span>{guide.labelVi}</span>
                        </span>
                        {guide.inSentence && (
                          <span className="shrink-0 rounded-full bg-[#F26B5B]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#E05646]">
                            Có trong câu
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 leading-relaxed text-[#57534E]">
                        {guide.tipVi}
                      </p>
                      <p className="mt-1 text-[11px] text-[#737373]">
                        Ví dụ:{" "}
                        <span className="font-medium text-[#262626]">
                          {guide.examples}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
