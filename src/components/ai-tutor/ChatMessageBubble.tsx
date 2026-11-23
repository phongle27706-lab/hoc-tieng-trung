"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Languages,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { AI_PERSONAS } from "@/lib/ai-tutor";
import { speakChinese, stopSpeaking } from "@/lib/speech";
import type { AIPersonaMode, ChatMessage } from "@/types";

export interface ChatMessageBubbleProps {
  message: ChatMessage;
  defaultShowTranslation: boolean;
  defaultShowPinyin?: boolean;
  fallbackPersona: AIPersonaMode;
  ttsRate?: number;
  onAnalyzeSentence?: (text: string) => void;
  disabled?: boolean;
}

function formatTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export function ChatMessageBubble({
  message,
  defaultShowTranslation,
  defaultShowPinyin = true,
  fallbackPersona,
  ttsRate = 1.0,
  onAnalyzeSentence,
  disabled = false,
}: ChatMessageBubbleProps) {
  const [showVi, setShowVi] = useState(defaultShowTranslation);
  const [showPinyin, setShowPinyin] = useState(defaultShowPinyin);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setShowVi(defaultShowTranslation);
  }, [defaultShowTranslation]);

  useEffect(() => {
    setShowPinyin(defaultShowPinyin);
  }, [defaultShowPinyin]);

  const handleToggleSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    // Strictly speak Chinese (contentZh) only — NEVER contentVi
    speakChinese(message.contentZh, ttsRate, () => {
      setIsSpeaking(false);
    });
  };

  if (message.role === "user") {
    const userText = message.contentZh || message.contentVi;
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] sm:max-w-[75%]">
          <div className="rounded-2xl rounded-br-md bg-brand px-4 py-3 text-sm leading-relaxed text-[#FFFFFF]">
            <p className="whitespace-pre-wrap break-words font-medium">
              {userText}
            </p>
          </div>
          <div className="mt-1.5 flex items-center justify-end gap-2 pr-1">
            {onAnalyzeSentence && (
              <button
                type="button"
                disabled={disabled}
                onClick={() => onAnalyzeSentence(userText)}
                className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] px-2.5 py-0.5 text-[11px] font-medium text-[#6B655E] transition-colors hover:border-[#6B655E] hover:text-[#262626] disabled:opacity-50 cursor-pointer"
                title="Yêu cầu gia sư BaoBao phân tích ngữ pháp tiếng Trung và gợi ý cách diễn đạt tự nhiên hơn"
              >
                <Sparkles className="h-3 w-3" />
                <span>Phân tích câu này</span>
              </button>
            )}
            <span className="text-[11px] text-[#737373]">
              {formatTime(message.timestamp)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  const personaCfg =
    AI_PERSONAS[message.persona ?? fallbackPersona] ??
    AI_PERSONAS["binh-thuong"];

  return (
    <div className="flex items-start gap-2.5 sm:gap-3">
      {/* Expressive Persona Avatar */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#E5E5E0] bg-[#F2F2F0] text-lg"
        title={`Gia sư BaoBao (${personaCfg.label})`}
      >
        {personaCfg.emoji}
      </div>

      <div className="min-w-0 max-w-[88%] flex-1 sm:max-w-[80%]">
        {/* Persona Name + Time */}
        <div className="mb-1 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${personaCfg.badgeColor}`}
          >
            BaoBao · {personaCfg.label}
          </span>
          <span className="text-[11px] text-[#737373]">
            {formatTime(message.timestamp)}
          </span>
        </div>

        {/* BaoBao Bilingual Learning Card */}
        <div className="overflow-hidden rounded-2xl rounded-tl-md border border-[#E5E5E0] bg-[#FFFFFF]">
          {/* Section 1: Chinese Content (Interactive + Pinyin Toggle + Shadowing Audio) */}
          <div className="p-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#6B655E]">
                <span>中文 (ZH)</span>
                <span className="font-normal normal-case tracking-normal text-[#737373]">
                  · Nhấp vào chữ Hán để tra nghĩa &amp; bộ thủ
                </span>
              </span>

              <div className="flex items-center gap-1.5">
                {message.contentPinyin && (
                  <button
                    type="button"
                    onClick={() => setShowPinyin((prev) => !prev)}
                    className={`rounded-lg border px-2 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                      showPinyin
                        ? "border-brand bg-brand-soft text-brand-active"
                        : "border-[#E5E5E0] bg-[#F2F2F0] text-[#4A4540] hover:bg-[#E5E5E0]"
                    }`}
                    title="Bật/Tắt hiển thị Pinyin cho tin nhắn này"
                  >
                    {showPinyin ? "Pinyin: Bật" : "Pinyin: Tắt"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleToggleSpeak}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    isSpeaking
                      ? "bg-brand-soft text-brand-active ring-1 ring-brand"
                      : "border border-[#E5E5E0] bg-[#F2F2F0] text-[#4A4540] hover:bg-[#E5E5E0]"
                  }`}
                  title={
                    isSpeaking
                      ? "Dừng đọc"
                      : `Nghe lại / Shadowing tiếng Trung (${ttsRate}x)`
                  }
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="h-3.5 w-3.5" />
                      <span>Dừng</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Nghe / Shadowing</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-[16px] leading-relaxed text-[#262626]">
              <InteractiveChineseText
                text={message.contentZh}
                pinyin={message.contentPinyin}
                showPinyin={showPinyin}
              />
            </div>

            {showPinyin && message.contentPinyin && (
              <p className="mt-1.5 font-mono text-xs leading-relaxed text-[#6B655E]">
                {message.contentPinyin}
              </p>
            )}
          </div>

          {/* Section 2: Collapsible Vietnamese Translation (Text-only, never spoken) */}
          <div className="border-t border-[#E5E5E0] bg-[#F2F2F0]/70 px-4 py-2.5">
            <button
              type="button"
              onClick={() => setShowVi((prev) => !prev)}
              className="flex w-full items-center justify-between gap-2 text-xs font-medium text-[#4A4540] hover:text-[#262626] cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <Languages className="h-3.5 w-3.5 text-[#6B655E]" />
                {showVi
                  ? "Ẩn bản dịch tiếng Việt"
                  : "Hiện bản dịch tiếng Việt"}
              </span>
              {showVi ? (
                <ChevronUp className="h-3.5 w-3.5 text-[#737373]" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-[#737373]" />
              )}
            </button>

            {showVi && (
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#4A4540]">
                {message.contentVi}
              </p>
            )}
          </div>

          {/* Section 3: Grammar Analysis & Correction Card (always visible when present) */}
          {message.grammarCorrection && (
            <div className="border-t border-[#E5E5E0] bg-[#F2F2F0] px-4 py-3">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#292524] text-[#FFFFFF]">
                  <Sparkles className="h-3 w-3" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-[#262626]">
                    Phân tích ngữ pháp &amp; Sửa lỗi tiếng Trung
                  </div>
                  <p className="mt-1 whitespace-pre-wrap text-xs leading-relaxed text-[#4A4540]">
                    {message.grammarCorrection}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
