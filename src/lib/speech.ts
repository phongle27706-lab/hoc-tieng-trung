import {
  getAvailableVoices,
  resolveVoiceConfig,
  type TTSGender,
} from "@/lib/tts-voice";

const isBrowser = (): boolean => typeof window !== "undefined";

export type VoiceGender = TTSGender;

export function getVoicesByLang(lang: "zh" | "vi"): SpeechSynthesisVoice[] {
  return getAvailableVoices(lang);
}

export function pickVoiceForGender(
  lang: "zh" | "vi",
  gender?: VoiceGender,
  preferredName?: string
): { voice: SpeechSynthesisVoice | null; matchedGender: boolean } {
  const resolved = resolveVoiceConfig(lang, gender ?? "female", preferredName);
  return {
    voice: resolved.voice,
    matchedGender: resolved.matchedGender,
  };
}

/**
 * Speak Chinese text using the browser's Web Speech API (zh-CN).
 */
export function speakChinese(
  text: string,
  rate = 1.0,
  onEnd?: () => void,
  options?: { gender?: VoiceGender; voiceName?: string }
): void {
  if (!isBrowser() || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }

  const trimmed = text.trim();
  if (!trimmed) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(trimmed);
  utterance.lang = "zh-CN";

  const config = resolveVoiceConfig(
    "zh",
    options?.gender ?? "female",
    options?.voiceName
  );
  if (config.voice) {
    utterance.voice = config.voice;
  }

  const effectiveRateMultiplier = options?.gender ? config.rateMultiplier : 1.0;
  utterance.rate = Math.min(2.0, Math.max(0.5, rate * effectiveRateMultiplier));
  utterance.pitch = options?.gender ? config.pitch : 1.0;

  if (onEnd) {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      onEnd();
    };
    utterance.onend = finish;
    utterance.onerror = finish;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Speak Vietnamese text using the browser's Web Speech API (vi-VN).
 */
export function speakVietnamese(
  text: string,
  rate = 1.0,
  onEnd?: () => void,
  options?: { gender?: VoiceGender; voiceName?: string }
): void {
  if (!isBrowser() || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }

  const trimmed = text.trim();
  if (!trimmed) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(trimmed);
  utterance.lang = "vi-VN";

  const config = resolveVoiceConfig(
    "vi",
    options?.gender ?? "female",
    options?.voiceName
  );
  if (config.voice) {
    utterance.voice = config.voice;
  }

  const effectiveRateMultiplier = options?.gender ? config.rateMultiplier : 1.0;
  utterance.rate = Math.min(2.0, Math.max(0.5, rate * effectiveRateMultiplier));
  utterance.pitch = options?.gender ? config.pitch : 1.0;

  if (onEnd) {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      onEnd();
    };
    utterance.onend = finish;
    utterance.onerror = finish;
  }

  window.speechSynthesis.speak(utterance);
}

export interface SpeechSegment {
  text: string;
  lang: "vi" | "zh";
  rate?: number;
  gender?: VoiceGender;
  voiceName?: string;
}

export function speakSequence(
  segments: SpeechSegment[],
  onSegmentStart?: (index: number, segment: SpeechSegment) => void,
  onComplete?: () => void
): void {
  const valid = segments.filter((s) => s.text.trim().length > 0);
  if (valid.length === 0) {
    onComplete?.();
    return;
  }

  const playAt = (idx: number) => {
    if (idx >= valid.length) {
      onComplete?.();
      return;
    }
    const seg = valid[idx];
    onSegmentStart?.(idx, seg);
    const next = () => playAt(idx + 1);
    if (seg.lang === "vi") {
      speakVietnamese(seg.text, seg.rate ?? 1.0, next, {
        gender: seg.gender,
        voiceName: seg.voiceName,
      });
    } else {
      speakChinese(seg.text, seg.rate ?? 0.95, next, {
        gender: seg.gender,
        voiceName: seg.voiceName,
      });
    }
  };

  playAt(0);
}

export function speakBilingualTurn(
  viText: string,
  zhText: string,
  options: {
    playVi: boolean;
    rate?: number;
    gender?: VoiceGender;
    zhVoiceName?: string;
    viVoiceName?: string;
    onPhaseChange?: (p: "vi" | "zh" | "done") => void;
  }
): void {
  const { playVi, rate = 0.95, gender, zhVoiceName, viVoiceName, onPhaseChange } = options;
  const segments: SpeechSegment[] = [];

  if (playVi && viText.trim()) {
    segments.push({
      text: viText,
      lang: "vi",
      rate: Math.min(1.15, rate + 0.05),
      gender,
      voiceName: viVoiceName,
    });
  }
  if (zhText.trim()) {
    segments.push({
      text: zhText,
      lang: "zh",
      rate,
      gender,
      voiceName: zhVoiceName,
    });
  }

  if (segments.length === 0) {
    onPhaseChange?.("done");
    return;
  }

  speakSequence(
    segments,
    (_idx, seg) => onPhaseChange?.(seg.lang),
    () => onPhaseChange?.("done")
  );
}

export function stopSpeaking(): void {
  if (!isBrowser() || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}

// --- Speech Recognition (zh-CN) ---

export interface SpeechRecognitionResultEvent {
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      0: {
        transcript: string;
        confidence: number;
      };
    };
  };
}

export interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

function getSpeechRecognitionCtor(): SpeechRecognitionConstructor | null {
  if (!isBrowser()) return null;
  const win = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return win.SpeechRecognition || win.webkitSpeechRecognition || null;
}

export function isSpeechRecognitionSupported(): boolean {
  return getSpeechRecognitionCtor() !== null;
}

export interface ChineseRecognizerCallbacks {
  onResult: (transcript: string, isFinal: boolean, confidence: number) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

export function createChineseRecognizer(
  callbacks: ChineseRecognizerCallbacks,
  options?: { continuous?: boolean; interimResults?: boolean; lang?: "zh-CN" | "vi-VN" }
): SpeechRecognitionInstance | null {
  const Ctor = getSpeechRecognitionCtor();
  if (!Ctor) return null;

  const recognition = new Ctor();
  recognition.lang = options?.lang ?? "zh-CN";
  recognition.continuous = options?.continuous ?? false;
  recognition.interimResults = options?.interimResults ?? true;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: SpeechRecognitionResultEvent) => {
    let transcript = "";
    let isFinal = false;
    let confidence = 0;

    for (let i = 0; i < event.results.length; i++) {
      const result = event.results[i];
      transcript += result[0].transcript;
      if (result.isFinal) {
        isFinal = true;
        confidence = result[0].confidence;
      }
    }
    callbacks.onResult(transcript.trim(), isFinal, confidence);
  };

  recognition.onerror = (event: { error: string }) => {
    callbacks.onError?.(event.error);
  };

  recognition.onend = () => {
    callbacks.onEnd?.();
  };

  return recognition;
}
