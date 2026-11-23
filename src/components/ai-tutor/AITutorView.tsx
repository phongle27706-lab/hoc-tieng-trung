"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  GraduationCap,
  KeyRound,
  MessageSquare,
  Mic,
  MicOff,
  PhoneCall,
  Send,
  Settings,
  ShoppingBag,
  Sparkles,
  Trash2,
  UserCheck,
  Users,
  X,
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
  clampTTSRate,
  getAvailableVoices,
  getPreferredVoiceName,
  setPreferredVoiceName,
  subscribeVoicesChanged,
  TTS_MAX_RATE,
  TTS_MIN_RATE,
  getFriendlyVoiceLabel,
} from "@/lib/tts-voice";
import {
  clearAIChatHistory,
  DEFAULT_AI_TUTOR_SETTINGS,
  getAIChatHistory,
  getAITutorSettings,
  saveAIChatHistory,
  saveAITutorSettings,
} from "@/lib/storage";
import type { AIPersonaMode, AITutorSettings, ChatMessage } from "@/types";

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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [zhVoices, setZhVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoice, setSelectedZhVoice] = useState<string>("");
  const [viVoices, setViVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedViVoice, setSelectedViVoice] = useState<string>("");
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
    setSelectedZhVoice(getPreferredVoiceName("zh") ?? "");
    setSelectedViVoice(getPreferredVoiceName("vi") ?? "");
    setZhVoices(getAvailableVoices("zh"));
    setViVoices(getAvailableVoices("vi"));
    const unsubscribeVoices = subscribeVoicesChanged(() => {
      setZhVoices(getAvailableVoices("zh"));
      setViVoices(getAvailableVoices("vi"));
    });
    setHydrated(true);

    return () => {
      unsubscribeVoices();
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
          {/* Left: Title + Status Pill */}
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#E5E5E0] bg-[#FFFFFF] text-xl">
              <span>{activePersona.emoji}</span>
              <span
                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#FFFFFF] bg-[#6B655E]"
                title="Đang sẵn sàng"
              />
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <h1 className="whitespace-nowrap text-base font-bold text-[#262626] sm:text-lg">
                Gia sư AI BaoBao
              </h1>
              <span className="inline-flex items-center rounded-full border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                {activeLevelCfg.shortLabel} · {activePersona.label}
              </span>
            </div>
          </div>

          {/* Center: Mode Switch (Chat | Gọi trực tiếp) */}
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
                  ? "bg-white text-brand-active ring-1 ring-brand shadow-xs"
                  : "text-[#737373] hover:text-[#262626]"
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Chat</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tutorMode === "call"}
              onClick={() => {
                stopSpeaking();
                recognizerRef.current?.abort();
                setIsRecording(false);
                setIsSettingsOpen(false);
                setTutorMode("call");
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                tutorMode === "call"
                  ? "bg-brand-active text-white ring-2 ring-brand-ring shadow-xs"
                  : "bg-brand text-white hover:bg-brand-hover shadow-xs"
              }`}
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Gọi trực tiếp</span>
            </button>
          </div>

          {/* Right: ⚙️ Cài đặt + API Key + Clear */}
          <div className="flex items-center gap-1.5">
            {tutorMode === "chat" && (
              <button
                type="button"
                onClick={() => setIsSettingsOpen((prev) => !prev)}
                aria-expanded={isSettingsOpen}
                aria-label="Cài đặt gia sư & giọng đọc"
                title="Cài đặt: tốc độ, giọng đọc, Pinyin, thái độ"
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  isSettingsOpen
                    ? "border-brand bg-brand-soft text-brand-active"
                    : "border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                }`}
              >
                <Settings className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Cài đặt</span>
              </button>
            )}

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
                  className="h-2 w-2 rounded-full bg-brand"
                  title="Đã cấu hình API Key"
                />
              )}
            </button>

            {messages.length > 0 && tutorMode === "chat" && (
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
      </header>

      {/* Collapsible Settings Drawer/Panel */}
      <AnimatePresence initial={false}>
        {tutorMode === "chat" && isSettingsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="shrink-0 overflow-hidden border-b border-[#E5E5E0] bg-[#FAFAF8]"
          >
            <div className="space-y-4 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  Cấu hình Gia sư & Giọng đọc
                </span>
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="rounded-lg p-1 text-[#737373] hover:bg-[#E5E5E0]/50 hover:text-[#262626] cursor-pointer"
                  aria-label="Đóng bảng tùy chỉnh"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Trình độ */}
                <div className="space-y-1.5">
                  <span className="block text-xs font-semibold text-[#4A4540]">
                    Trình độ
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {AI_LEVEL_LIMIT_LIST.map((lvl) => {
                      const active = levelLimit === lvl.id;
                      return (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setLevelLimit(lvl.id)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                            active
                              ? "bg-white text-brand-active ring-1 ring-brand shadow-xs"
                              : "border border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                          }`}
                        >
                          {lvl.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vai diễn */}
                <div className="space-y-1.5">
                  <span className="block text-xs font-semibold text-[#4A4540]">
                    Vai diễn
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {AI_ROLEPLAY_ROLE_LIST.map((role) => {
                      const active = roleplayRole === role.id;
                      const Icon = ROLE_ICONS[role.id];
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setRoleplayRole(role.id)}
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                            active
                              ? "bg-white text-brand-active ring-1 ring-brand shadow-xs"
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

              {/* 4 Thái độ */}
              <div className="space-y-1.5">
                <span className="block text-xs font-semibold text-[#4A4540]">
                  Thái độ BaoBao
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {AI_PERSONA_LIST.map((p) => {
                    const isSelected = p.id === settings.persona;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectPersona(p.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-white text-brand-active ring-1 ring-brand shadow-xs"
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

              {/* Giọng đọc + Tốc độ + Toggles */}
              <div className="grid grid-cols-1 gap-4 border-t border-[#E5E5E0] pt-3 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="tts-rate-slider"
                      className="text-xs font-semibold text-[#4A4540]"
                    >
                      Tốc độ giọng nói
                    </label>
                    <span className="rounded-md bg-[#FFFFFF] px-2 py-0.5 text-xs font-semibold text-[#262626] border border-[#E5E5E0]">
                      {ttsRate.toFixed(2).replace(/\.00$/, ".0")}x
                    </span>
                  </div>
                  <input
                    id="tts-rate-slider"
                    type="range"
                    min={TTS_MIN_RATE}
                    max={TTS_MAX_RATE}
                    step={0.05}
                    value={ttsRate}
                    onChange={(e) => setTtsRate(clampTTSRate(Number(e.target.value)))}
                    className="w-full accent-brand cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#737373]">
                    <span>0.7x (Chậm)</span>
                    <span>1.0x (Chuẩn)</span>
                    <span>1.3x (Nhanh)</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="space-y-1">
                    <label
                      htmlFor="zh-voice-select"
                      className="block text-xs font-semibold text-[#4A4540]"
                    >
                      Giọng đọc tiếng Trung (zh-CN)
                    </label>
                    <select
                      id="zh-voice-select"
                      value={selectedZhVoice}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedZhVoice(val);
                        setPreferredVoiceName("zh", val || undefined);
                      }}
                      className="w-full rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-1.5 text-xs text-[#262626] focus:border-brand focus:outline-none"
                    >
                      <option value="">Tự động chọn giọng tự nhiên nhất</option>
                      {zhVoices.map((v) => (
                        <option key={v.name} value={v.name}>
                          {getFriendlyVoiceLabel(v)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="vi-voice-select"
                      className="block text-xs font-semibold text-[#4A4540]"
                    >
                      Giọng đọc tiếng Việt (vi-VN)
                    </label>
                    <select
                      id="vi-voice-select"
                      value={selectedViVoice}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedViVoice(val);
                        setPreferredVoiceName("vi", val || undefined);
                      }}
                      className="w-full rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-1.5 text-xs text-[#262626] focus:border-brand focus:outline-none"
                    >
                      <option value="">Tự động chọn giọng Việt chuẩn</option>
                      {viVoices.map((v) => (
                        <option key={v.name} value={v.name}>
                          {getFriendlyVoiceLabel(v)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={autoRead}
                      onClick={() => {
                        setAutoRead((prev) => {
                          if (prev) stopSpeaking();
                          return !prev;
                        });
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        autoRead
                          ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                          : "border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${autoRead ? "bg-emerald-500" : "bg-[#D6D3CD]"}`} />
                      Tự động đọc: {autoRead ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={defaultShowPinyin}
                      onClick={() => setDefaultShowPinyin((prev) => !prev)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        defaultShowPinyin
                          ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                          : "border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${defaultShowPinyin ? "bg-emerald-500" : "bg-[#D6D3CD]"}`} />
                      Hiện Pinyin: {defaultShowPinyin ? "Bật" : "Tắt"}
                    </button>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={defaultShowVi}
                      onClick={() => setDefaultShowVi((prev) => !prev)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        defaultShowVi
                          ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                          : "border-[#E5E5E0] bg-[#FFFFFF] text-[#4A4540] hover:bg-[#F2F2F0]"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${defaultShowVi ? "bg-emerald-500" : "bg-[#D6D3CD]"}`} />
                      Hiện dịch Việt: {defaultShowVi ? "Bật" : "Tắt"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#4A4540] transition-colors group-hover:bg-brand group-hover:text-[#FFFFFF]">
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
                className="h-11 w-11 shrink-0 rounded-xl bg-brand p-0 text-white hover:bg-brand-hover"
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
