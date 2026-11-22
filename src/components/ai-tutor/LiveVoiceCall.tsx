"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  RotateCcw,
  SkipForward,
  Sparkles,
  Volume2,
  VolumeX,
  Wand2,
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
  const [avatarGender, setAvatarGender] = useState<AvatarGender>("female");
  const [playViVoice, setPlayViVoice] = useState(true);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [autoNext, setAutoNext] = useState(false);
  const [showCallPinyin, setShowCallPinyin] = useState(true);
  const [zhVoices, setZhVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoice, setSelectedZhVoice] = useState<string>("");
  const [isTestingVoice, setIsTestingVoice] = useState(false);
  const [activeVoiceLabel, setActiveVoiceLabel] = useState<string>("");
  const [showPhonemeCoaching, setShowPhonemeCoaching] = useState(false);

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
  } = useLiveCall({
    persona,
    level,
    avatarGender,
    playViVoice,
    speechRate,
    autoNext,
  });

  useEffect(() => {
    setPreferredVoiceName("zh", selectedZhVoice || undefined);
    return () => {
      setPreferredVoiceName("zh", undefined);
    };
  }, [selectedZhVoice]);

  useEffect(() => {
    const syncVoices = () => {
      setZhVoices(getAvailableVoices("zh"));
      const zh = resolveVoiceConfig(
        "zh",
        avatarGender,
        selectedZhVoice || undefined
      );
      const vi = resolveVoiceConfig("vi", avatarGender);
      const zhLabel = zh.voice
        ? zh.isFallbackPitch
          ? `${zh.voice.name} (pitch ${zh.pitch})`
          : zh.voice.name
        : avatarGender === "male"
          ? "Minh Long (Trầm 0.78)"
          : "Bảo Linh (Sáng 1.15)";
      const viLabel = vi.voice
        ? vi.isFallbackPitch
          ? `${vi.voice.name} (pitch ${vi.pitch})`
          : vi.voice.name
        : avatarGender === "male"
          ? "Nam (0.78)"
          : "Nữ (1.15)";
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
    const isMale = avatarGender === "male";
    const sampleVi = isMale
      ? "Chào bạn, mình là Minh Long. Hôm nay mình cùng luyện phát âm 4 thanh điệu tiếng Trung nhé!"
      : "Chào bạn, mình là Bảo Linh. Hôm nay mình cùng luyện phát âm 4 thanh điệu tiếng Trung nhé!";
    const sampleZh = isMale
      ? "你好！我是明龙老师。今天我们一起练习标准的中文发音吧！"
      : "你好！我是宝玲老师。今天我们一起练习标准的中文发音吧！";

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

  const activePersona = AI_PERSONAS[persona] ?? AI_PERSONAS["binh-thuong"];

  const avatarState: AvatarState =
    callState === "thinking" ? "analyzing" : callState;

  const statusMeta = useMemo(() => {
    switch (callState) {
      case "speaking":
        return {
          label: "Gia sư BaoBao đang đọc mẫu...",
          dotClass: "bg-[#292524] animate-pulse",
        };
      case "listening":
        return {
          label: "Đang nghe bạn nói tiếng Trung...",
          dotClass: "bg-[#15803D] animate-ping",
        };
      case "thinking":
        return {
          label: "Đang chấm thanh điệu & âm bật hơi...",
          dotClass: "bg-[#6B655E] animate-pulse",
        };
      default:
        return {
          label: isCallActive ? "Đang chờ lượt nói" : "Sẵn sàng kết nối",
          dotClass: "bg-[#A8A29E]",
        };
    }
  }, [callState, isCallActive]);

  const handleToggleCall = () => {
    if (isCallActive) {
      endCall();
    } else {
      startCall();
    }
  };

  // Character-level pronunciation heatmap
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
    <div className="flex flex-1 flex-col overflow-y-auto bg-[#F2F2F0]/40 px-4 py-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
        {/* Top Controls: Level, Speed, Dual-Voice, Pinyin Toggle, Auto-Next, Persona */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-[#E5E5E0] bg-white p-3.5">
          {/* Level Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
              Cấp độ:
            </span>
            <div className="flex items-center gap-1">
              {CALL_LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => handleSelectCallLevel(lvl.id)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                    level === lvl.id
                      ? "bg-[#292524] text-white"
                      : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Speed Toggle */}
          <div
            className="inline-flex items-center rounded-full border border-[#E5E5E0] bg-[#FAF9F7] p-0.5"
            role="group"
            aria-label="Tốc độ đọc"
          >
            {VOICE_CALL_SPEEDS.map((spd) => (
              <button
                key={spd}
                type="button"
                onClick={() => setSpeechRate(spd)}
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                  speechRate === spd
                    ? "bg-[#292524] text-white"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* Pinyin Toggle */}
          <button
            type="button"
            onClick={() => setShowCallPinyin((prev) => !prev)}
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
              showCallPinyin
                ? "border-[#292524] bg-[#292524] text-white"
                : "border-[#E5E5E0] bg-white text-[#737373] hover:text-[#262626]"
            }`}
          >
            <span>{showCallPinyin ? "Pinyin: Bật" : "Pinyin: Tắt"}</span>
          </button>

          {/* Dual-Voice Toggle */}
          <button
            type="button"
            onClick={() => setPlayViVoice((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
              playViVoice
                ? "border-[#292524] bg-[#292524] text-white"
                : "border-[#E5E5E0] bg-white text-[#737373] hover:text-[#262626]"
            }`}
            title="Bật hoặc tắt giọng hướng dẫn tiếng Việt"
          >
            {playViVoice ? (
              <Volume2 className="h-3.5 w-3.5" />
            ) : (
              <VolumeX className="h-3.5 w-3.5" />
            )}
            <span>{playViVoice ? "Giọng Việt: Bật" : "Giọng Việt: Tắt"}</span>
          </button>

          {/* Auto-Next Toggle */}
          <button
            type="button"
            onClick={() => setAutoNext((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
              autoNext
                ? "border-[#6B655E] bg-[#6B655E] text-white"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#737373] hover:text-[#262626]"
            }`}
            title="Tự động chuyển sang câu tiếp theo khi phát âm đạt >= 75%"
          >
            <span>Tự chuyển câu: {autoNext ? "Bật" : "Tắt"}</span>
          </button>

          {/* Persona Selector */}
          <div className="flex w-full items-center justify-between gap-2 overflow-x-auto border-t border-[#E5E5E0] pt-2.5">
            <div className="flex items-center gap-1.5">
              <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                Thái độ:
              </span>
              <div className="flex items-center gap-1.5">
                {AI_PERSONA_LIST.map((p) => {
                  const active = p.id === persona;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onChangePersona(p.id)}
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        active
                          ? "bg-[#6B655E] text-white"
                          : "border border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <span>{p.emoji}</span>
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Call Session Stats */}
            <span className="shrink-0 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-1 text-[11px] font-semibold text-[#4A4540]">
              Đã luyện {practicedCount} câu · TB {avgAccuracy}%
            </span>
          </div>
        </div>

        {/* Centered 3D Tutor Avatar Stage (Bảo Linh 宝玲 / Minh Long 明龙) */}
        <div className="flex flex-col items-center justify-center rounded-3xl border border-[#E5E5E0] bg-white px-6 py-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          {/* Bảo Linh (Nữ) / Minh Long (Nam) Switcher */}
          <div className="mb-2.5 inline-flex items-center rounded-full border border-[#E5E5E0] bg-[#FAF9F7] p-1">
            {(
              [
                { id: "female", label: "Bảo Linh · 宝玲 (Nữ)" },
                { id: "male", label: "Minh Long · 明龙 (Nam)" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setAvatarGender(opt.id)}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  avatarGender === opt.id
                    ? "bg-[#292524] text-white shadow-xs"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Direct zh-CN Voice Selector + Compact Voice Test Button */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <select
              aria-label="Chọn giọng đọc tiếng Trung (zh-CN)"
              value={selectedZhVoice}
              onChange={(e) => setSelectedZhVoice(e.target.value)}
              className="max-w-[230px] truncate rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1 text-xs font-medium text-[#4A4540] outline-none transition-colors hover:border-[#6B655E] focus:border-[#292524] cursor-pointer"
            >
              <option value="">
                Tự động ({avatarGender === "male" ? "Minh Long" : "Bảo Linh"})
              </option>
              {zhVoices.map((voice) => (
                <option key={`${voice.name}-${voice.lang}`} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleTestVoice}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                isTestingVoice
                  ? "border-[#292524] bg-[#292524] text-white"
                  : "border-[#E5E5E0] bg-white text-[#4A4540] hover:border-[#6B655E] hover:bg-[#FAF9F7]"
              }`}
              title="Nghe thử giọng đọc song ngữ của gia sư đang chọn"
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span>{isTestingVoice ? "Đang phát..." : "Nghe thử giọng"}</span>
            </button>
          </div>

          {/* Avatar3D */}
          <div className="rounded-full">
            <Avatar3D
              gender={avatarGender}
              state={avatarState}
              persona={persona}
              isHappyResult={Boolean(evaluation?.passed)}
              size={196}
            />
          </div>

          <h2 className="mt-4 font-display text-lg font-bold text-[#262626]">
            {avatarGender === "female"
              ? "Bảo Linh (宝玲)"
              : "Minh Long (明龙)"}{" "}
            · {activePersona.label} ({level})
          </h2>
          {activeVoiceLabel && (
            <p
              className="mt-1 max-w-md truncate text-[11px] text-[#737373]"
              title={activeVoiceLabel}
            >
              Giọng đọc: {activeVoiceLabel}
            </p>
          )}

          {/* Live Status Pill */}
          <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-1 text-xs font-semibold text-[#4A4540]">
            <span className={`h-2 w-2 rounded-full ${statusMeta.dotClass}`} />
            <span>{statusMeta.label}</span>
          </div>

          {noSpeechHint && (
            <p className="mt-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3 py-1.5 text-xs font-medium text-[#6B655E]">
              {noSpeechHint}
            </p>
          )}
          {!speechSupported && (
            <p className="mt-2.5 text-xs text-[#737373]">
              Trình duyệt chưa hỗ trợ micro — bạn có thể bấm{" "}
              <strong className="text-[#262626]">
                Giả lập đọc chuẩn / đọc 60%
              </strong>{" "}
              bên dưới để trải nghiệm chấm điểm thanh điệu.
            </p>
          )}
          {errorMsg && (
            <p className="mt-2 text-xs font-medium text-[#B91C1C]">{errorMsg}</p>
          )}
        </div>

        {/* Live Bilingual Subtitle Card */}
        {currentPrompt && (
          <div className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                Chủ đề: {currentPrompt.topic} ({currentPrompt.level})
              </span>
              <span className="text-xs font-medium text-[#737373]">
                Câu {(promptIndex % Math.max(1, totalPromptsInLevel)) + 1} /{" "}
                {totalPromptsInLevel}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-[#737373]">
              {currentPrompt.introVi}
            </p>

            {/* Target Chinese Sentence */}
            <div className="rounded-2xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
              <div className="font-display text-lg font-bold leading-relaxed text-[#262626] sm:text-xl">
                <InteractiveChineseText
                  text={currentPrompt.targetZh}
                  pinyin={currentPrompt.targetPinyin}
                  showPinyin={showCallPinyin}
                />
              </div>
              {showCallPinyin && (
                <p className="mt-1 font-mono text-xs text-[#6B655E]">
                  {currentPrompt.targetPinyin}
                </p>
              )}
              <p className="mt-1.5 text-sm text-[#57534E]">
                {currentPrompt.meaningVi}
              </p>
              <div className="mt-2.5 flex items-start gap-1.5 border-t border-[#E5E5E0] pt-2.5 text-xs text-[#6B655E]">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{currentPrompt.tipVi}</span>
              </div>
            </div>

            {/* Live transcript from user */}
            {liveTranscript && (
              <div className="rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs">
                <span className="font-semibold text-[#737373]">
                  Bạn vừa đọc:{" "}
                </span>
                <span className="font-medium text-[#262626]">
                  {liveTranscript}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Pronunciation Feedback Card — cleanly BELOW Subtitle */}
        {evaluation && (
          <div className="space-y-3.5 rounded-2xl border border-[#E5E5E0] bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    Kết quả phát âm &amp; thanh điệu
                  </p>
                  {evaluation.passed && (
                    <span className="rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
                      +10 XP
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-medium text-[#262626]">
                  {evaluation.encouragementZh}
                </p>
              </div>
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border font-display text-lg font-bold ${
                  evaluation.accuracy >= 85
                    ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D]"
                    : evaluation.accuracy >= 55
                      ? "border-[#E5E5E0] bg-[#FAF9F7] text-[#4A4540]"
                      : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                }`}
              >
                {evaluation.accuracy}%
              </div>
            </div>

            {/* Word-Level Pronunciation Heatmap */}
            {charHeatmap && (
              <div className="space-y-2.5 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Bản đồ phát âm từng chữ Hán (Heatmap)
                  </span>
                  <div className="flex items-center gap-3 text-[11px] font-medium">
                    <span className="inline-flex items-center gap-1 text-[#15803D]">
                      <span className="h-2 w-2 rounded-full bg-[#15803D]" />
                      Chuẩn thanh điệu
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#B91C1C]">
                      <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />
                      Cần luyện lại
                    </span>
                  </div>
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
                      <span className="text-[10px] font-semibold opacity-75">
                        {item.hit ? "✓" : "✕"}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Persona Feedback */}
            <p className="text-sm leading-relaxed text-[#262626]">
              {evaluation.feedbackVi}
            </p>

            {/* Expandable Chinese Phoneme Coaching */}
            <div className="border-t border-[#E5E5E0] pt-3">
              <button
                type="button"
                onClick={() => setShowPhonemeCoaching((prev) => !prev)}
                className="flex w-full items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2.5 text-left transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#262626]">
                    Huấn luyện phát âm tiếng Trung (zh/ch/sh/r, j/q/x, z/c/s, biến điệu thanh 3)
                  </span>
                  {evaluation.detectedPhonemes.length > 0 && (
                    <span className="rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-2 py-0.5 text-[10px] font-semibold text-[#B45309]">
                      {evaluation.detectedPhonemes.length} âm cần chú ý
                    </span>
                  )}
                </div>
                {showPhonemeCoaching ? (
                  <ChevronUp className="h-4 w-4 shrink-0 text-[#6B655E]" />
                ) : (
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#6B655E]" />
                )}
              </button>

              {showPhonemeCoaching && (
                <div className="mt-2.5 space-y-2.5">
                  {evaluation.detectedPhonemes.length > 0 && (
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B45309]">
                        Ưu tiên chỉnh trong câu này
                      </p>
                      {evaluation.detectedPhonemes.map((tip) => (
                        <div
                          key={tip.phoneme}
                          className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] px-3 py-2 text-xs"
                        >
                          <span className="font-bold text-[#92400E]">
                            [{tip.phoneme}] {tip.labelVi}:{" "}
                          </span>
                          <span className="text-[#4A4540]">{tip.tipVi}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {sentencePhonemes.map((guide) => (
                      <div
                        key={guide.id}
                        className={`rounded-xl border p-3 text-xs ${
                          guide.inSentence
                            ? "border-[#6B655E]/40 bg-white"
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
                            <span className="shrink-0 rounded-full bg-[#F0FDF4] px-1.5 py-0.5 text-[10px] font-semibold text-[#15803D]">
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
                </div>
              )}
            </div>
          </div>
        )}

        {/* Call Controls Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-[#E5E5E0] bg-white p-4">
          {/* Start / End Call */}
          <button
            type="button"
            onClick={handleToggleCall}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              isCallActive
                ? "bg-[#B91C1C] text-white hover:bg-[#991B1B]"
                : "bg-[#292524] text-white hover:bg-[#4A4540]"
            }`}
          >
            {isCallActive ? (
              <>
                <PhoneOff className="h-4 w-4" />
                <span>Ngắt cuộc gọi</span>
              </>
            ) : (
              <>
                <Phone className="h-4 w-4" />
                <span>Bắt đầu cuộc gọi</span>
              </>
            )}
          </button>

          {/* Prominent Manual Fallback: Thu âm lại (retryListening) */}
          <button
            type="button"
            onClick={retryListening}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#6B655E] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540] cursor-pointer"
          >
            <Mic className="h-4 w-4" />
            <span>Thu âm lại / Nói ngay</span>
          </button>

          {/* Mute / Unmute Mic */}
          <button
            type="button"
            onClick={toggleMute}
            disabled={!isCallActive}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-45 ${
              isMuted
                ? "border-[#292524] bg-[#292524] text-white"
                : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]"
            }`}
          >
            {isMuted ? (
              <>
                <MicOff className="h-4 w-4" />
                <span>Bật Mic</span>
              </>
            ) : (
              <>
                <Mic className="h-4 w-4" />
                <span>Tắt Mic</span>
              </>
            )}
          </button>

          {/* Replay current model sentence */}
          <button
            type="button"
            onClick={replayModel}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#262626] transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 text-[#6B655E]" />
            <span>Nghe lại mẫu</span>
          </button>

          {/* Next sentence */}
          <button
            type="button"
            onClick={nextPrompt}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#262626] transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
          >
            <span>Câu tiếp</span>
            <SkipForward className="h-4 w-4 text-[#6B655E]" />
          </button>
        </div>

        {/* Simulation Controls for devices without Microphone */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-[#E5E5E0] bg-white p-4">
          <div className="flex items-center gap-2 text-xs text-[#6B655E]">
            <Wand2 className="h-4 w-4 shrink-0" />
            <span>
              Chế độ giả lập cho thiết bị không có Micro (kiểm thử phản hồi của
              Minh Long / Bảo Linh):
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => simulateAttempt("good")}
              className="rounded-xl bg-[#292524] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4A4540] cursor-pointer"
            >
              Giả lập câu đọc chuẩn (100%)
            </button>
            <button
              type="button"
              onClick={() => simulateAttempt("partial")}
              className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-3.5 py-2 text-xs font-semibold text-[#4A4540] transition-colors hover:border-[#6B655E] hover:bg-[#F2F2F0] cursor-pointer"
            >
              Giả lập đọc thiếu chữ (~60%)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
