"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff, KeyRound, Sparkles, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { AITutorSettings } from "@/types";

export interface ApiKeyModalProps {
  isOpen: boolean;
  settings: AITutorSettings;
  onClose: () => void;
  onSave: (next: AITutorSettings) => void;
}

export function ApiKeyModal({
  isOpen,
  settings,
  onClose,
  onSave,
}: ApiKeyModalProps) {
  const [provider, setProvider] = useState<"gemini" | "openai">(settings.provider);
  const [apiKey, setApiKey] = useState(settings.apiKey);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProvider(settings.provider);
      setApiKey(settings.apiKey);
      setShowKey(false);
    }
  }, [isOpen, settings]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...settings,
      provider,
      apiKey: apiKey.trim(),
    });
    onClose();
  };

  const handleClearKey = () => {
    setApiKey("");
    onSave({
      ...settings,
      provider,
      apiKey: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292524]/40 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="api-key-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-[#E5E5E0] bg-[#FFFFFF] p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F2F0] text-[#4A4540]">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <h2
                id="api-key-modal-title"
                className="text-base font-bold text-[#262626]"
              >
                Cài đặt API Key cho Gia sư BaoBao (Tùy chọn)
              </h2>
              <p className="text-xs text-[#737373]">
                Lưu cục bộ trên trình duyệt của bạn
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#737373] hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer"
            aria-label="Đóng"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] p-3 text-xs leading-relaxed text-[#4A4540]">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
          <p>
            <strong>Gia sư AI BaoBao (包包) tích hợp sẵn</strong> hoạt động ngay lập
            tức mà <strong>không cần API key</strong>. Bạn chỉ cần dán Gemini hoặc
            OpenAI API key nếu muốn mở rộng hội thoại sâu với mô hình LLM trực tiếp.
          </p>
        </div>

        <form onSubmit={handleSave} className="mt-4 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]">
              Nhà cung cấp AI
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setProvider("gemini")}
                className={`rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all cursor-pointer ${
                  provider === "gemini"
                    ? "border-[#292524] bg-[#292524] text-[#FFFFFF]"
                    : "border-[#E5E5E0] bg-[#FFFFFF] text-[#262626] hover:bg-[#F2F2F0]"
                }`}
              >
                <div className="font-semibold">Google Gemini</div>
                <div className="text-[11px] opacity-75">gemini-2.0-flash</div>
              </button>
              <button
                type="button"
                onClick={() => setProvider("openai")}
                className={`rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all cursor-pointer ${
                  provider === "openai"
                    ? "border-[#292524] bg-[#292524] text-[#FFFFFF]"
                    : "border-[#E5E5E0] bg-[#FFFFFF] text-[#262626] hover:bg-[#F2F2F0]"
                }`}
              >
                <div className="font-semibold">OpenAI</div>
                <div className="text-[11px] opacity-75">gpt-4o-mini</div>
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="ai-tutor-api-key"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]"
            >
              API Key ({provider === "gemini" ? "Gemini" : "OpenAI"})
            </label>
            <div className="relative">
              <input
                id="ai-tutor-api-key"
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={provider === "gemini" ? "AIzaSy..." : "sk-..."}
                autoComplete="off"
                className="w-full rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] py-2.5 pl-3.5 pr-10 text-sm text-[#262626] placeholder:text-[#737373] focus:border-[#4A4540] focus:bg-[#FFFFFF] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowKey((prev) => !prev)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#737373] hover:text-[#262626] cursor-pointer"
                aria-label={showKey ? "Ẩn API key" : "Hiện API key"}
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2">
            {settings.apiKey ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClearKey}
                className="text-[#4A4540] hover:bg-[#F2F2F0]"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Xóa key
              </Button>
            ) : (
              <span />
            )}
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" size="sm" onClick={onClose}>
                Hủy
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Lưu cài đặt
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
