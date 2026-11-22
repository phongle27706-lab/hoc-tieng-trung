"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Eye,
  EyeOff,
  GraduationCap,
  KeyRound,
  MessageSquare,
  Mic,
  MicOff,
  PhoneCall,
  Send,
  ShoppingBag,
  Sparkles,
  Trash2,
  UserCheck,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import { ApiKeyModal } from "@/components/ai-tutor/ApiKeyModal";
import { ChatMessageBubble } from "@/components/ai-tutor/ChatMessageBubble";
import { LiveVoiceCall } from "@/components/ai-tutor/LiveVoiceCall";
import { Button } from "@/components/ui/Button";
import {
  AI_LEVEL_LIMIT_LIST,
  AI_LEVEL_LIMITS,
  AI_PERSONA_LIST,
  AI_PERSONAS,
  AI_ROLEPLAY_ROLE_LIST,
  AI_ROLEPLAY_ROLES,
  type AILevelLimit,
  type AIRoleplayRole,
} from "@/lib/ai-tutor";
import {
  createChineseRecognizer,
  isSpeechRecognitionSupported,
  speakChinese,
  stopSpeaking,
  type SpeechRecognitionInstance,
} from "@/lib/speech";
import {
  clearAIChatHistory,
  DEFAULT_AI_TUTOR_SETTINGS,
  getAIChatHistory,
  getAITutorSettings,
  saveAIChatHistory,
  saveAITutorSettings,
} from "@/lib/storage";
import type { AIPersonaMode, AITutorSettings, ChatMessage } from "@/types";

const TTS_SPEEDS: number[] = [0.8, 1.0, 1.15];

const ROLE_ICONS: Record<
  AIRoleplayRole,
  React.ComponentType<{ className?: string }>
> = {
  teacher: GraduationCap,
  friend: Users,
  staff: ShoppingBag,
  examiner: UserCheck,
};

function createMessageId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function AITutorView() {
  const [settings, setSettings] = useState<AITutorSettings>(
    DEFAULT_AI_TUTOR_SETTINGS
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [levelLimit, setLevelLimit] = useState<AILevelLimit>("HSK3");
  const [roleplayRole, setRoleplayRole] = useState<AIRoleplayRole>("teacher");
  const [autoRead, setAutoRead] = useState(true);
  const [ttsRate, setTtsRate] = useState<number>(1.0);
  const [defaultShowVi, setDefaultShowVi] = useState(true);
  const [defaultShowPinyin, setDefaultShowPinyin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [tutorMode, setTutorMode] = useState<"chat" | "call">("chat");

  // Voice input state
  const [voiceLang, setVoiceLang] = useState<"zh-CN" | "vi-VN">("zh-CN");
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const recognizerRef = useRef<SpeechRecognitionInstance | null>(null);
  const latestTranscriptRef = useRef<string>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Load persisted state on mount
  useEffect(() => {
    setSettings(getAITutorSettings());
    setMessages(getAIChatHistory());
    setSpeechSupported(isSpeechRecognitionSupported());
    setHydrated(true);

    return () => {
      stopSpeaking();
      recognizerRef.current?.abort();
    };
  }, []);

  // Persist chat history whenever messages change after hydration
  useEffect(() => {
    if (!hydrated) return;
    saveAIChatHistory(messages);
  }, [messages, hydrated]);

  // Smooth scroll to bottom on new messages or typing indicator
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSelectPersona = (persona: AIPersonaMode) => {
    const next: AITutorSettings = { ...settings, persona };
    setSettings(next);
    saveAITutorSettings(next);
  };

  const handleSaveSettings = (next: AITutorSettings) => {
    setSettings(next);
    saveAITutorSettings(next);
  };

  const handleClearChat = () => {
    stopSpeaking();
    setMessages([]);
    clearAIChatHistory();
  };

  const sendMessage = useCallback(
    async (
      rawText: string,
      opts?: {
        overrideRole?: AIRoleplayRole;
        analyzeOnly?: boolean;
        skipUserBubble?: boolean;
      }
    ) => {
      const text = rawText.trim();
      if (!text || isLoading) return;

      const effectiveRole = opts?.overrideRole ?? roleplayRole;
      const analyzeOnly = Boolean(opts?.analyzeOnly);

      let nextHistory = messages;
      if (!opts?.skipUserBubble) {
        const userMsg: ChatMessage = {
          id: createMessageId(),
          role: "user",
          contentZh: text,
          contentVi: text,
          timestamp: new Date().toISOString(),
        };
        nextHistory = [...messages, userMsg];
        setMessages(nextHistory);
      }

      setInput("");
      setVoiceError(null);
      setIsLoading(true);

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      try {
        const res = await fetch("/api/ai-tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: nextHistory.slice(-8).map((m) => ({
              role: m.role,
              contentZh: m.contentZh,
              contentVi: m.contentVi,
            })),
            persona: settings.persona,
            levelLimit,
            roleplayRole: effectiveRole,
            analyzeOnly,
            apiKey: settings.apiKey || undefined,
            provider: settings.provider,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to get tutor reply");
        }

        const data = (await res.json()) as {
          contentZh?: string;
          contentPinyin?: string;
          contentVi?: string;
          grammarCorrection?: string;
          persona?: AIPersonaMode;
        };

        const contentZh =
          data.contentZh || "抱歉，我刚才没有听清楚，请再说一遍好吗？";
        const contentPinyin =
          data.contentPinyin ||
          "Bàoqiàn, wǒ gāngcái méiyǒu tīng qīngchu, qǐng zài shuō yí biàn hǎo ma?";
        const contentVi =
          data.contentVi ||
          "Xin lỗi, hiện tại BaoBao chưa thể tạo câu trả lời. Bạn thử gửi lại nhé!";

        const aiMsg: ChatMessage = {
          id: createMessageId(),
          role: "assistant",
          contentZh,
          contentPinyin,
          contentVi,
          grammarCorrection: data.grammarCorrection || undefined,
          persona: data.persona ?? settings.persona,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, aiMsg]);

        // Auto-TTS Chinese (zh-CN) ONLY — never speak contentVi
        if (autoRead && contentZh) {
          speakChinese(contentZh, ttsRate);
        }
      } catch {
        const fallbackMsg: ChatMessage = {
          id: createMessageId(),
          role: "assistant",
          contentZh: "抱歉，网络连接有点问题，请再试一次！",
          contentPinyin: "Bàoqiàn, wǎngluò liánjiē yǒudiǎn wèntí, qǐng zài shì yí cì!",
          contentVi:
            "Xin lỗi, đã xảy ra lỗi kết nối. Bạn vui lòng thử gửi lại tin nhắn nhé!",
          persona: settings.persona,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [autoRead, isLoading, levelLimit, messages, roleplayRole, settings, ttsRate]
  );

  const sendMessageRef = useRef(sendMessage);
  useEffect(() => {
    sendMessageRef.current = sendMessage;
  }, [sendMessage]);

  const handleAnalyzeSentence = useCallback(
    (sentence: string) => {
      void sendMessage(sentence, { analyzeOnly: true, skipUserBubble: true });
    },
    [sendMessage]
  );

  const handleStartRoleplay = (role: AIRoleplayRole) => {
    setRoleplayRole(role);
    const cfg = AI_ROLEPLAY_ROLES[role];
    if (messages.length === 0 && !isLoading) {
      void sendMessage(cfg.starterPrompt, { overrideRole: role });
    }
  };

  const handleToggleVoice = () => {
    setVoiceError(null);

    if (isRecording) {
      recognizerRef.current?.stop();
      setIsRecording(false);
      return;
    }

    stopSpeaking();
    latestTranscriptRef.current = "";

    const recognizer = createChineseRecognizer(
      {
        onResult: (transcript) => {
          latestTranscriptRef.current = transcript;
          setInput(transcript);
        },
        onError: (err) => {
          setIsRecording(false);
          if (err === "not-allowed") {
            setVoiceError("Vui lòng cấp quyền micro cho trình duyệt.");
          } else if (err !== "no-speech" && err !== "aborted") {
            setVoiceError(`Không nhận diện được giọng nói (${err}).`);
          }
        },
        onEnd: () => {
          setIsRecording(false);
          const finalTranscript = latestTranscriptRef.current.trim();
          latestTranscriptRef.current = "";
          if (finalTranscript) {
            void sendMessageRef.current(finalTranscript);
          }
        },
      },
      { continuous: false, interimResults: true, lang: voiceLang }
    );

    if (!recognizer) {
      setVoiceError("Trình duyệt không hỗ trợ nhận diện giọng nói.");
      return;
    }

    recognizerRef.current = recognizer;

    try {
      recognizer.start();
      setIsRecording(true);
    } catch {
      setIsRecording(false);
      setVoiceError("Không thể khởi động micro. Vui lòng thử lại.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  };

  const activePersona =
    AI_PERSONAS[settings.persona] ?? AI_PERSONAS["binh-thuong"];
  const activeRoleCfg = AI_ROLEPLAY_ROLES[roleplayRole];
  const activeLevelCfg = AI_LEVEL_LIMITS[levelLimit];

  return (
    <div className="mx-auto flex h-[calc(100vh-7.5rem)] max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#E5E5E0] bg-[#FFFFFF]">
      {/* Top Chat Header */}
      <header className="shrink-0 border-b border-[#E5E5E0] bg-[#F2F2F0]/60 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Active Persona Avatar + Status */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E5E5E0] bg-[#FFFFFF] text-2xl">
              <span>{activePersona.emoji}</span>
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#FFFFFF] bg-[#6B655E]"
                title="Đang sẵn sàng"
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base font-bold text-[#262626] sm:text-lg">
                  Gia sư AI BaoBao (包包)
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                  {activeRoleCfg.label} · {activeLevelCfg.shortLabel}
                </span>
              </div>
              <p className="mt-0.5 line-clamp-1 text-xs text-[#737373]">
                {activePersona.descriptionVi}
              </p>
            </div>
          </div>

          {/* Header Audio & Utility Actions */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Prominent Mode Toggle: Chat vs Live Voice Call */}
            <div
              className="inline-flex items-center rounded-xl border border-[#E5E5E0] bg-[#FFFFFF] p-0.5"
              role="tablist"
              aria-label="Chế độ Gia sư AI BaoBao"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tutorMode === "chat"}
                onClick={() => {
                  stopSpeaking();
                  recognizerRef.current?.abort();
                  setIsRecording(false);
                  setTutorMode("chat");
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  tutorMode === "chat"
                    ? "bg-[#292524] text-[#FFFFFF]"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chat Song ngữ</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tutorMode === "call"}
                onClick={() => {
                  stopSpeaking();
                  recognizerRef.current?.abort();
                  setIsRecording(false);
                  setTutorMode("call");
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  tutorMode === "call"
                    ? "bg-[#6B655E] text-[#FFFFFF]"
                    : "text-[#4A4540] hover:bg-[#F2F2F0] hover:text-[#262626]"
                }`}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Live Call 3D (Minh Long / Bảo Linh)</span>
              </button>
            </div>

            {/* Auto-Read Chinese Toggle */}
            <button
              type="button"
              onClick={() => {
                setAutoRead((prev) => {
                  if (prev) stopSpeaking();
                  return !prev;
                });
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                autoRead
                  ? "border-[#292524] bg-[#292524] text-[#FFFFFF]"
                  : "border-[#E5E5E0] bg-[#FFFFFF] text-[#737373] hover:text-[#262626]"
              }`}
              title="Tự động đọc phát âm tiếng Trung (zh-CN) khi BaoBao trả lời"
            >
              {autoRead ? (
                <Volume2 className="h-3.5 w-3.5" />
              ) : (
                <VolumeX className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">
                {autoRead ? "Đọc ZH: Bật" : "Đọc ZH: Tắt"}
              </span>
            </button>

            {/* TTS Speed Selector (0.8x / 1.0x / 1.15x) */}
            <div
              className="inline-flex items-center rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-0.5"
              role="group"
              aria-label="Tốc độ đọc tiếng Trung"
            >
              {TTS_SPEEDS.map((speed) => (
                <button
                  key={speed}
                  type="button"
                  onClick={() => setTtsRate(speed)}
                  className={`rounded-md px-2 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                    ttsRate === speed
                      ? "bg-[#292524] text-[#FFFFFF]"
                      : "text-[#737373] hover:text-[#262626]"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

            {/* Toggle Default Pinyin in Chat */}
            <button
              type="button"
              onClick={() => setDefaultShowPinyin((prev) => !prev)}
              className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                defaultShowPinyin
                  ? "border-[#292524] bg-[#292524] text-white"
                  : "border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
              }`}
              title="Bật/tắt hiển thị phiên âm Pinyin trong khung chat"
            >
              <span>{defaultShowPinyin ? "Pinyin: Bật" : "Pinyin: Tắt"}</span>
            </button>

            {/* Toggle Default Vietnamese Translation */}
            <button
              type="button"
              onClick={() => setDefaultShowVi((prev) => !prev)}
              className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-1.5 text-xs font-medium text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
              title="Bật/tắt hiển thị bản dịch tiếng Việt mặc định"
            >
              {defaultShowVi ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <EyeOff className="h-3.5 w-3.5 text-[#737373]" />
              )}
              <span className="hidden md:inline">
                {defaultShowVi ? "Dịch VI" : "Ẩn VI"}
              </span>
            </button>

            {/* Compact API Key Settings Button */}
            <button
              type="button"
              onClick={() => setIsApiModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-1.5 text-xs font-medium text-[#4A4540] hover:bg-[#F2F2F0] cursor-pointer"
              title="Cài đặt API Key (Gemini / OpenAI)"
            >
              <KeyRound className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">API Key</span>
              {settings.apiKey && (
                <span
                  className="h-2 w-2 rounded-full bg-[#292524]"
                  title="Đã cấu hình API Key"
                />
              )}
            </button>

            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleClearChat}
                className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] px-2 py-1.5 text-xs font-medium text-[#737373] hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
                title="Xóa hội thoại"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Compact Controls Bar: Level Limit + Roleplay Role + 4 Attitude Personas */}
        {tutorMode === "chat" && (
          <div className="mt-3 flex flex-col gap-2 border-t border-[#E5E5E0] pt-2.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {/* Level Limit Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Trình độ:
                </span>
                <div className="flex items-center gap-1">
                  {AI_LEVEL_LIMIT_LIST.map((lvl) => {
                    const active = levelLimit === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setLevelLimit(lvl.id)}
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          active
                            ? "bg-[#292524] text-[#FFFFFF]"
                            : "border border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Roleplay Role Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Vai diễn:
                </span>
                <div className="flex items-center gap-1">
                  {AI_ROLEPLAY_ROLE_LIST.map((role) => {
                    const active = roleplayRole === role.id;
                    const Icon = ROLE_ICONS[role.id];
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setRoleplayRole(role.id)}
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          active
                            ? "bg-[#4A4540] text-[#FFFFFF]"
                            : "border border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                        }`}
                      >
                        <Icon className="h-3 w-3" />
                        <span>{role.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4 Attitude Personas */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                Thái độ BaoBao:
              </span>
              <div className="flex items-center gap-1.5">
                {AI_PERSONA_LIST.map((p) => {
                  const isSelected = p.id === settings.persona;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectPersona(p.id)}
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#292524] text-[#FFFFFF]"
                          : "border border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <span>{p.emoji}</span>
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {tutorMode === "call" ? (
        <LiveVoiceCall
          persona={settings.persona}
          onChangePersona={handleSelectPersona}
          initialLevel={
            levelLimit === "HSK1" ||
            levelLimit === "HSK3" ||
            levelLimit === "HSK5"
              ? levelLimit
              : "HSK1"
          }
        />
      ) : (
        <>
          {/* Main Chat Feed */}
          <div className="flex-1 overflow-y-auto bg-[#F2F2F0]/40 px-4 py-5 sm:px-6">
            {messages.length === 0 ? (
              <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center py-4 text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-3xl border border-[#E5E5E0] bg-[#FFFFFF] text-3xl">
                  {activePersona.emoji}
                </div>
                <h2 className="text-xl font-bold text-[#262626] sm:text-2xl">
                  你好！Bắt đầu luyện hội thoại tiếng Trung cùng BaoBao (包包)
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#737373]">
                  Gia sư AI BaoBao tự động đọc <strong>tiếng Trung chuẩn (zh-CN)</strong>,
                  hỗ trợ <strong>Bật/Tắt Pinyin</strong>,{" "}
                  <strong>nhấp từ chữ Hán để tra bộ thủ</strong> và{" "}
                  <strong>Phân tích &amp; Sửa lỗi ngữ pháp</strong> ngay trong khung chat.
                </p>

                {/* Roleplay Quick-Start Cards */}
                <div className="mt-6 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {AI_ROLEPLAY_ROLE_LIST.map((role) => {
                    const Icon = ROLE_ICONS[role.id];
                    const isSelected = roleplayRole === role.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => handleStartRoleplay(role.id)}
                        className={`group flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#292524] bg-[#FFFFFF]"
                            : "border-[#E5E5E0] bg-[#FFFFFF] hover:border-[#6B655E]"
                        }`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#4A4540] transition-colors group-hover:bg-[#292524] group-hover:text-[#FFFFFF]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-[#262626]">
                            {role.label}
                          </div>
                          <div className="text-xs font-medium text-[#6B655E]">
                            {role.labelZh}
                          </div>
                          <p className="mt-0.5 line-clamp-1 text-xs text-[#737373]">
                            {role.descriptionVi}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] px-3.5 py-1.5 text-xs text-[#737373]">
                  <Sparkles className="h-3.5 w-3.5 text-[#6B655E]" />
                  <span>
                    Mẹo: Thử gõ &ldquo;我是很好&rdquo; hoặc &ldquo;我学习中文在学校&rdquo; để xem
                    BaoBao <strong className="text-[#262626]">{activePersona.label}</strong>{" "}
                    bắt lỗi ngữ pháp!
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {messages.map((msg) => (
                  <ChatMessageBubble
                    key={msg.id}
                    message={msg}
                    defaultShowTranslation={defaultShowVi}
                    defaultShowPinyin={defaultShowPinyin}
                    fallbackPersona={settings.persona}
                    ttsRate={ttsRate}
                    onAnalyzeSentence={handleAnalyzeSentence}
                    disabled={isLoading}
                  />
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#E5E5E0] bg-[#FFFFFF] text-lg">
                      {activePersona.emoji}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-2xl rounded-tl-md border border-[#E5E5E0] bg-[#FFFFFF] px-4 py-3">
                      <span className="text-xs font-medium text-[#737373]">
                        BaoBao đang trả lời
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#6B655E] [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#6B655E] [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#6B655E]" />
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Bottom Composer Area with Large Responsive Voice Input */}
          <div className="shrink-0 border-t border-[#E5E5E0] bg-[#FFFFFF] px-4 pb-4 pt-3 sm:px-6">
            {voiceError && (
              <div className="mb-2 text-xs font-medium text-[#4A4540]">
                {voiceError}
              </div>
            )}

            <div className="flex items-end gap-2.5 rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0]/60 p-2 transition-colors focus-within:border-[#4A4540] focus-within:bg-[#FFFFFF]">
              {/* Large Responsive Voice Input (ZH / VI switch + Prominent Mic Button) */}
              {speechSupported && (
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setVoiceLang((prev) =>
                        prev === "zh-CN" ? "vi-VN" : "zh-CN"
                      )
                    }
                    disabled={isRecording}
                    className="h-11 rounded-xl border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 text-xs font-bold text-[#4A4540] hover:bg-[#F2F2F0] disabled:opacity-50 cursor-pointer"
                    title="Đổi ngôn ngữ nhận diện giọng nói (ZH / VI)"
                  >
                    {voiceLang === "zh-CN" ? "ZH" : "VI"}
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleVoice}
                    className={`flex h-11 items-center justify-center gap-1.5 rounded-xl px-3.5 text-xs font-semibold transition-all cursor-pointer ${
                      isRecording
                        ? "animate-pulse bg-[#292524] text-[#FFFFFF] ring-2 ring-[#6B655E]/40"
                        : "border border-[#E5E5E0] bg-[#FFFFFF] text-[#262626] hover:border-[#6B655E] hover:bg-[#F2F2F0]"
                    }`}
                    title={
                      isRecording
                        ? "Nhấn để dừng và gửi"
                        : `Nói bằng ${
                            voiceLang === "zh-CN" ? "tiếng Trung" : "tiếng Việt"
                          } (tự động gửi)`
                    }
                    aria-label={
                      isRecording ? "Dừng ghi âm" : "Nhập bằng giọng nói"
                    }
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="h-4 w-4" />
                        <span className="hidden sm:inline">Đang nghe...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="h-4 w-4" />
                        <span className="hidden sm:inline">Nói</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={
                  isRecording
                    ? `Đang nghe (${
                        voiceLang === "zh-CN" ? "Tiếng Trung" : "Tiếng Việt"
                      })...`
                    : "Nhập chữ Hán, Pinyin hoặc tiếng Việt... (Enter để gửi)"
                }
                className="max-h-36 min-h-[44px] flex-1 resize-none bg-transparent py-2.5 text-sm text-[#262626] placeholder:text-[#737373] focus:outline-none"
              />

              {/* Send Button */}
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => void sendMessage(input)}
                disabled={!input.trim() || isLoading}
                className="h-11 w-11 shrink-0 rounded-xl bg-[#292524] p-0 text-[#FFFFFF] hover:bg-[#4A4540]"
                aria-label="Gửi tin nhắn"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}

      {/* API Key Settings Modal */}
      <ApiKeyModal
        isOpen={isApiModalOpen}
        settings={settings}
        onClose={() => setIsApiModalOpen(false)}
        onSave={handleSaveSettings}
      />
    </div>
  );
}
