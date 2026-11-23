"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Captions,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  RotateCcw,
  Settings,
  Sparkles,
  Volume2,
  VolumeX,
  Wand2,
  X,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { Avatar3D, type AvatarState } from "@/components/ai-tutor/Avatar3D";
import { useLiveCall, type SttLanguageMode } from "@/hooks/useLiveCall";
import {
  AI_LEVEL_LIMIT_LIST,
  AI_LEVEL_LIMITS,
  AI_PERSONA_LIST,
  AI_PERSONAS,
  type AILevelLimit,
} from "@/lib/ai-tutor";
import { speakBilingualText } from "@/lib/speech";
import {
  getAvailableVoices,
  getFriendlyVoiceLabel,
  getPreferredVoiceName,
  setPreferredVoiceName,
  subscribeVoicesChanged,
} from "@/lib/tts-voice";
import { VOICE_CALL_SPEEDS } from "@/lib/voice-call";
import type { AIPersonaMode } from "@/types";

export type CallLevel = AILevelLimit;

const STT_MODES: { id: SttLanguageMode; label: string }[] = [
  { id: "auto", label: "Tự động (VI ↔ ZH)" },
  { id: "zh-CN", label: "Tiếng Trung (ZH)" },
  { id: "vi-VN", label: "Tiếng Việt (VI)" },
];

export interface LiveVoiceCallProps {
  persona: AIPersonaMode;
  onChangePersona: (persona: AIPersonaMode) => void;
  hskLevel?: AILevelLimit;
  onHskLevelChange?: (level: AILevelLimit) => void;
  onOpenApiKeyModal?: () => void;
  initialLevel?: CallLevel;
}

export function LiveVoiceCall({
  persona,
  onChangePersona,
  hskLevel,
  onHskLevelChange,
  onOpenApiKeyModal,
  initialLevel = "HSK1",
}: LiveVoiceCallProps) {
  const [localLevel, setLocalLevel] = useState<AILevelLimit>(hskLevel ?? initialLevel);
  const level: AILevelLimit = hskLevel ?? localLevel;
  const setLevel = (next: AILevelLimit) => {
    setLocalLevel(next);
    onHskLevelChange?.(next);
  };
  const [playViVoice, setPlayViVoice] = useState(true);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [showCaptions, setShowCaptions] = useState(true);
  const [showCallPinyin, setShowCallPinyin] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const [zhVoices, setZhVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [viVoices, setViVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoice, setSelectedZhVoice] = useState<string>("");
  const [selectedViVoice, setSelectedViVoice] = useState<string>("");
  const [isTestingVoice, setIsTestingVoice] = useState(false);

  const {
    callState,
    isCallActive,
    isMuted,
    sttMode,
    setSttMode,
    listenLang,
    liveTranscript,
    turns,
    lastAssistantTurn,
    lastUserTurn,
    errorMsg,
    errorCode,
    demoMode,
    setDemoMode,
    noSpeechHint,
    speechSupported,
    startCall,
    endCall,
    toggleMute,
    retryListening,
    replayLastReply,
    sendSampleUtterance,
    bargeInEnabled,
    setBargeInEnabled,
  } = useLiveCall({
    persona,
    level,
    playViVoice,
    speechRate,
    zhVoiceName: selectedZhVoice || undefined,
    viVoiceName: selectedViVoice || undefined,
  });

  useEffect(() => {
    setSelectedZhVoice(getPreferredVoiceName("zh") ?? "");
    setSelectedViVoice(getPreferredVoiceName("vi") ?? "");
    const syncVoices = () => {
      setZhVoices(getAvailableVoices("zh"));
      setViVoices(getAvailableVoices("vi"));
    };
    syncVoices();
    return subscribeVoicesChanged(syncVoices);
  }, []);

  const handleSelectZhVoice = (name: string) => {
    setSelectedZhVoice(name);
    setPreferredVoiceName("zh", name || undefined);
  };

  const handleSelectViVoice = (name: string) => {
    setSelectedViVoice(name);
    setPreferredVoiceName("vi", name || undefined);
  };

  const handleTestVoice = () => {
    setIsTestingVoice(true);
    speakBilingualText(
      "Chào bạn nha! Mình là Capybara BaoBao. 你好呀！今天我们一起用中文聊天吧！",
      {
        rate: speechRate,
        zhVoiceName: selectedZhVoice || undefined,
        viVoiceName: selectedViVoice || undefined,
        onPhaseChange: (phase) => {
          if (phase === "done") setIsTestingVoice(false);
        },
      }
    );
  };

  const activePersona = AI_PERSONAS[persona] ?? AI_PERSONAS["binh-thuong"];
  const activeLevelCfg = AI_LEVEL_LIMITS[level] ?? AI_LEVEL_LIMITS.HSK1;
  const avatarState: AvatarState = callState === "thinking" ? "analyzing" : callState;
  const turnCount = turns.filter((t) => t.role === "user").length;

  const statusMeta = useMemo(() => {
    switch (callState) {
      case "speaking":
        return {
          label: bargeInEnabled
            ? "BaoBao đang nói · Nói để ngắt lời"
            : "BaoBao đang trả lời...",
          dotClass: "bg-[#F26B5B] animate-pulse",
        };
      case "listening":
        return {
          label:
            sttMode === "auto"
              ? `Đang nghe song ngữ (${listenLang === "vi-VN" ? "VI" : "ZH"})...`
              : listenLang === "vi-VN"
                ? "Đang nghe tiếng Việt..."
                : "Đang nghe tiếng Trung...",
          dotClass: "bg-emerald-500 animate-ping",
        };
      case "thinking":
        return {
          label: "BaoBao đang nghĩ câu trả lời...",
          dotClass: "bg-amber-500 animate-pulse",
        };
      default:
        return {
          label: isCallActive
            ? "Sẵn sàng nghe bạn nói"
            : "Nhấn Gọi BaoBao để trò chuyện tự do",
          dotClass: "bg-[#A88B73]",
        };
    }
  }, [callState, isCallActive, bargeInEnabled, listenLang, sttMode]);

  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-[#F7F3ED] px-3 py-4 sm:px-5">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {/* ─── Warm Modern Studio Live Call Stage (NO pitch-black background) ─── */}
        <div className="relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-3xl border border-[#E6D5C3] bg-[radial-gradient(ellipse_at_50%_36%,#FFFDF9_0%,#F6E8D6_54%,#E9D2B8_100%)] text-[#2D221C] shadow-[0_20px_50px_-24px_rgba(124,75,52,0.28)] sm:min-h-[650px]">
          {/* Soft studio spotlight halo behind BaoBao */}
          <div
            className={`pointer-events-none absolute left-1/2 top-[38%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500 ${
              callState === "speaking"
                ? "bg-[#F26B5B]/25 opacity-100 scale-105"
                : callState === "listening"
                  ? "bg-emerald-400/20 opacity-95 scale-100"
                  : "bg-[#F59A23]/15 opacity-75 scale-95"
            }`}
          />

          {/* ── Top Floating Studio HUD ── */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 px-4 pt-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DEC8B2] bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
                <span className={`h-2 w-2 rounded-full ${statusMeta.dotClass}`} />
                <span className="text-xs font-bold text-[#2D221C]">
                  BaoBao 3D · {activePersona.label}
                </span>
              </div>
              <span className="rounded-full border border-[#F26B5B]/30 bg-[#F26B5B]/12 px-2.5 py-1 text-[11px] font-semibold text-[#C84A3B]">
                {activeLevelCfg.shortLabel}
              </span>
              {demoMode && (
                <span className="rounded-full border border-amber-400/40 bg-amber-50/90 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                  Demo
                </span>
              )}
              <span className="hidden text-xs font-medium text-[#6F5848] sm:inline">
                {statusMeta.label}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Auto-detect Bilingual STT indicator (override available in Settings) */}
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                title="Nhấn để tùy chỉnh ngôn ngữ nhận diện giọng nói trong Cài đặt"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#DEC8B2] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#4A382D] shadow-xs backdrop-blur-md transition-colors hover:bg-white cursor-pointer"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  {sttMode === "auto"
                    ? "Song ngữ tự động"
                    : sttMode === "zh-CN"
                      ? "Mic: ZH"
                      : "Mic: VI"}
                </span>
              </button>

              {turnCount > 0 && (
                <span className="hidden rounded-full border border-[#DEC8B2] bg-white/75 px-3 py-1 text-[11px] font-medium text-[#6F5848] backdrop-blur-md sm:inline">
                  {turnCount} lượt nói
                </span>
              )}

              {lastAssistantTurn && (
                <button
                  type="button"
                  onClick={replayLastReply}
                  title="Nghe lại câu BaoBao vừa nói"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#DEC8B2] bg-white/80 text-[#4A382D] shadow-xs backdrop-blur-md transition-colors hover:bg-white cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* ── Center 3D Capybara BaoBao Stage ── */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-1">
            <div className="h-[280px] w-full max-w-[360px] sm:h-[330px] sm:max-w-[420px]">
              <Avatar3D
                state={avatarState}
                persona={persona}
                fill
              />
            </div>

            {/* Subtle inline hints & clear API/LLM error banner */}
            {(noSpeechHint || errorMsg) && (
              <div className="mt-1 flex max-w-xl flex-wrap items-center justify-center gap-2">
                {noSpeechHint && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-50/90 px-3 py-1 text-[11px] font-medium text-amber-900 shadow-xs backdrop-blur-sm">
                    {noSpeechHint}
                  </span>
                )}
                {errorMsg && (
                  <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-red-400/50 bg-red-50/95 px-3.5 py-2 text-center text-xs font-medium text-red-700 shadow-sm backdrop-blur-sm">
                    <span>{errorMsg}</span>
                    {errorCode === "MISSING_API_KEY" && onOpenApiKeyModal && (
                      <button
                        type="button"
                        onClick={onOpenApiKeyModal}
                        className="rounded-full bg-[#2D221C] px-2.5 py-0.5 text-[11px] font-semibold text-white hover:bg-[#4A382D] cursor-pointer"
                      >
                        Nhập API Key
                      </button>
                    )}
                    {!demoMode && (errorCode === "MISSING_API_KEY" || errorCode === "LLM_ERROR") && (
                      <button
                        type="button"
                        onClick={() => setDemoMode(true)}
                        className="rounded-full border border-[#F26B5B]/40 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#C84A3B] hover:bg-[#FFF3F0] cursor-pointer"
                      >
                        Bật chế độ Demo
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Bottom Live Captions & Minimal Voice Control Bar ── */}
          <div className="relative z-20 flex flex-col items-center gap-3 px-4 pb-5 sm:px-6">
            {showCaptions && (
              <div className="w-full max-w-2xl rounded-2xl border border-white/80 bg-white/78 px-4 py-3 text-center shadow-[0_8px_30px_-14px_rgba(124,75,52,0.22)] backdrop-blur-xl">
                {lastAssistantTurn ? (
                  <>
                    <div className="font-display text-lg font-bold leading-snug text-[#2D221C] sm:text-xl">
                      <InteractiveChineseText
                        text={lastAssistantTurn.contentZh}
                        pinyin={lastAssistantTurn.contentPinyin}
                        showPinyin={false}
                      />
                    </div>
                    {showCallPinyin && lastAssistantTurn.contentPinyin && (
                      <p className="mt-0.5 font-mono text-xs font-medium text-[#C84A3B]">
                        {lastAssistantTurn.contentPinyin}
                      </p>
                    )}
                    <p className="mt-1 text-xs leading-relaxed text-[#5C473A]">
                      {lastAssistantTurn.contentVi}
                    </p>
                    {lastAssistantTurn.correctionHint && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#F26B5B]/30 bg-[#FFF3F0] px-3 py-1 text-[11px] font-medium text-[#B93D2F]">
                        <Sparkles className="h-3 w-3 shrink-0" />
                        <span>{lastAssistantTurn.correctionHint}</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-1">
                    <p className="text-sm font-semibold text-[#2D221C]">
                      Trò chuyện trực tiếp song ngữ Việt ↔ Trung cùng BaoBao
                    </p>
                    <p className="mt-0.5 text-xs text-[#6F5848]">
                      Nhấn <strong>Gọi BaoBao</strong> rồi nói tự do bằng tiếng Việt hoặc tiếng Trung — BaoBao sẽ phản hồi tự nhiên và gợi ý câu tiếng Trung ngay!
                    </p>
                  </div>
                )}

                {/* Live user transcript */}
                {(liveTranscript || (callState === "thinking" && lastUserTurn)) && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-3 py-1 text-xs text-emerald-900">
                    <span className="font-medium opacity-75">Bạn nói:</span>
                    <span className="font-semibold">
                      {liveTranscript || lastUserTurn?.contentZh}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* ── Floating Settings Popover ── */}
            {showSettings && (
              <div className="w-full max-w-xl rounded-2xl border border-[#E2CBB5] bg-white/95 p-4 text-left text-xs text-[#4A382D] shadow-2xl backdrop-blur-2xl">
                <div className="mb-3 flex items-center justify-between border-b border-[#EFE3D6] pb-2">
                  <span className="font-display text-sm font-bold text-[#2D221C]">
                    Cài đặt cuộc gọi BaoBao
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="rounded-full p-1 text-[#7A6353] hover:bg-[#F5EBE0] hover:text-[#2D221C] cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Level (100% synced with AITutorView header) */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-[#5C473A]">Cấp độ</span>
                    <div className="flex flex-wrap gap-1">
                      {AI_LEVEL_LIMIT_LIST.map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setLevel(lvl.id)}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                            level === lvl.id
                              ? "bg-[#F26B5B] text-white"
                              : "bg-[#F5EBE0] text-[#5C473A] hover:bg-[#EAD8C6]"
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional STT Language Override */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-[#5C473A]">Ngôn ngữ Micro</span>
                    <div className="flex flex-wrap gap-1">
                      {STT_MODES.map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setSttMode(m.id)}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                            sttMode === m.id
                              ? "bg-[#2D221C] text-white"
                              : "bg-[#F5EBE0] text-[#5C473A] hover:bg-[#EAD8C6]"
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Persona mood */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-[#5C473A]">Thái độ BaoBao</span>
                    <div className="flex flex-wrap gap-1">
                      {AI_PERSONA_LIST.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => onChangePersona(p.id)}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                            p.id === persona
                              ? "bg-[#F26B5B] text-white"
                              : "bg-[#F5EBE0] text-[#5C473A] hover:bg-[#EAD8C6]"
                          }`}
                        >
                          <span>{p.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Speed */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-[#5C473A]">Tốc độ nói</span>
                    <div className="inline-flex rounded-full bg-[#F5EBE0] p-0.5">
                      {VOICE_CALL_SPEEDS.map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => setSpeechRate(spd)}
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold cursor-pointer ${
                            speechRate === spd
                              ? "bg-[#F26B5B] text-white"
                              : "text-[#5C473A] hover:text-[#2D221C]"
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
                          : "bg-[#F5EBE0] text-[#5C473A]"
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
                          : "bg-[#F5EBE0] text-[#5C473A]"
                      }`}
                    >
                      {playViVoice ? (
                        <Volume2 className="h-3 w-3" />
                      ) : (
                        <VolumeX className="h-3 w-3" />
                      )}
                      Đọc gợi ý Việt: {playViVoice ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBargeInEnabled((v) => !v)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        bargeInEnabled
                          ? "bg-[#F26B5B] text-white"
                          : "bg-[#F5EBE0] text-[#5C473A]"
                      }`}
                    >
                      Ngắt lời (Barge-in): {bargeInEnabled ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDemoMode(!demoMode)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold cursor-pointer ${
                        demoMode
                          ? "bg-amber-600 text-white"
                          : "bg-[#F5EBE0] text-[#5C473A]"
                      }`}
                    >
                      Chế độ Demo: {demoMode ? "Bật" : "Tắt"}
                    </button>
                  </div>

                  {/* ZH + VI Voice selectors + bilingual test */}
                  <div className="grid grid-cols-1 gap-2 border-t border-[#EFE3D6] pt-2.5 sm:grid-cols-2">
                    <select
                      aria-label="Chọn giọng đọc tiếng Trung (zh-CN)"
                      value={selectedZhVoice}
                      onChange={(e) => handleSelectZhVoice(e.target.value)}
                      className="w-full truncate rounded-xl border border-[#E2CBB5] bg-[#FFFBF6] px-2.5 py-1.5 text-[11px] text-[#2D221C] outline-none cursor-pointer"
                    >
                      <option value="">Giọng Trung: Tự động</option>
                      {zhVoices.map((voice) => (
                        <option key={`${voice.name}-${voice.lang}`} value={voice.name}>
                          {getFriendlyVoiceLabel(voice)}
                        </option>
                      ))}
                    </select>
                    <select
                      aria-label="Chọn giọng đọc tiếng Việt (vi-VN)"
                      value={selectedViVoice}
                      onChange={(e) => handleSelectViVoice(e.target.value)}
                      className="w-full truncate rounded-xl border border-[#E2CBB5] bg-[#FFFBF6] px-2.5 py-1.5 text-[11px] text-[#2D221C] outline-none cursor-pointer"
                    >
                      <option value="">Giọng Việt: Tự động</option>
                      {viVoices.map((voice) => (
                        <option key={`${voice.name}-${voice.lang}`} value={voice.name}>
                          {getFriendlyVoiceLabel(voice)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EFE3D6] pt-2.5">
                    <button
                      type="button"
                      onClick={handleTestVoice}
                      className="inline-flex items-center gap-1 rounded-full border border-[#E2CBB5] bg-[#FFFBF6] px-3 py-1 text-[11px] font-semibold text-[#2D221C] hover:bg-[#F5EBE0] cursor-pointer"
                    >
                      <Volume2 className="h-3 w-3" />
                      {isTestingVoice ? "Đang phát..." : "Nghe thử song ngữ"}
                    </button>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#7A6353]">
                        <Wand2 className="h-3 w-3" />
                        {speechSupported ? "Thử nhanh:" : "Giả lập:"}
                      </span>
                      <button
                        type="button"
                        onClick={() => sendSampleUtterance("Hôm nay mình muốn uống trà sữa")}
                        className="rounded-full bg-[#F5EBE0] px-2.5 py-1 text-[11px] font-semibold text-[#2D221C] hover:bg-[#EAD8C6] cursor-pointer"
                      >
                        Nói VI
                      </button>
                      <button
                        type="button"
                        onClick={() => sendSampleUtterance("你好，我今天很开心")}
                        className="rounded-full bg-[#F5EBE0] px-2.5 py-1 text-[11px] font-semibold text-[#2D221C] hover:bg-[#EAD8C6] cursor-pointer"
                      >
                        Nói ZH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Minimal Voice Control Bar (Mic, CC, Settings, Call/End — NO Camera) ── */}
            <div className="flex items-center gap-2 rounded-full border border-white/85 bg-white/85 px-3 py-2 shadow-[0_12px_32px_-12px_rgba(124,75,52,0.3)] backdrop-blur-2xl sm:gap-2.5 sm:px-4">
              {/* Mic button */}
              <button
                type="button"
                onClick={() => {
                  if (!isCallActive || (callState === "idle" && !isMuted)) {
                    retryListening();
                  } else {
                    toggleMute();
                  }
                }}
                title={isMuted ? "Bật Mic" : "Tắt Mic / Thu âm"}
                aria-label={isMuted ? "Bật Mic" : "Tắt Mic"}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  isMuted
                    ? "bg-red-50 text-red-600 ring-1 ring-red-300 hover:bg-red-100"
                    : callState === "listening"
                      ? "bg-[#F26B5B] text-white shadow-[0_0_20px_rgba(242,107,91,0.5)]"
                      : "bg-[#F5EBE0] text-[#2D221C] hover:bg-[#EAD8C6]"
                }`}
              >
                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>

              {/* Phụ đề (CC) toggle */}
              <button
                type="button"
                onClick={() => setShowCaptions((v) => !v)}
                title={showCaptions ? "Ẩn phụ đề (CC)" : "Hiện phụ đề (CC)"}
                aria-label="Phụ đề (CC)"
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  showCaptions
                    ? "bg-[#F26B5B] text-white shadow-[0_0_16px_rgba(242,107,91,0.4)]"
                    : "bg-[#F5EBE0] text-[#2D221C] hover:bg-[#EAD8C6]"
                }`}
              >
                <Captions className="h-5 w-5" />
              </button>

              {/* Cài đặt (Settings) toggle */}
              <button
                type="button"
                onClick={() => setShowSettings((v) => !v)}
                title="Cài đặt cuộc gọi"
                aria-label="Cài đặt cuộc gọi"
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all cursor-pointer ${
                  showSettings
                    ? "bg-[#2D221C] text-white"
                    : "bg-[#F5EBE0] text-[#2D221C] hover:bg-[#EAD8C6]"
                }`}
              >
                <Settings className="h-5 w-5" />
              </button>

              <div className="mx-0.5 h-6 w-px bg-[#E2CBB5]" />

              {/* Gọi BaoBao / Kết thúc */}
              {isCallActive ? (
                <button
                  type="button"
                  onClick={endCall}
                  title="Kết thúc cuộc gọi"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-colors hover:bg-red-700 cursor-pointer"
                >
                  <PhoneOff className="h-4 w-4" />
                  <span className="hidden sm:inline">Kết thúc</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startCall}
                  title="Gọi BaoBao"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F26B5B] px-5 text-sm font-semibold text-white shadow-lg shadow-[#F26B5B]/35 transition-colors hover:bg-[#E05646] cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>Gọi BaoBao</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
