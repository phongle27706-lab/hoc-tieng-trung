import {
  getAvailableVoices,
  resolveVoiceConfig,
  type TTSGender,
} from "@/lib/tts-voice";

const isBrowser = (): boolean => typeof window !== "undefined";

/** Monotonic session counter to prevent cancelled utterances from advancing sequences. */
let speechSessionId = 0;

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
  options?: { gender?: VoiceGender; voiceName?: string; _sessionId?: number }
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

  const session = options?._sessionId ?? ++speechSessionId;
  if (options?._sessionId === undefined) {
    window.speechSynthesis.cancel();
  }

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
      if (session !== speechSessionId) return;
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
  options?: { gender?: VoiceGender; voiceName?: string; _sessionId?: number }
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

  const session = options?._sessionId ?? ++speechSessionId;
  if (options?._sessionId === undefined) {
    window.speechSynthesis.cancel();
  }

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
      if (session !== speechSessionId) return;
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

const HAN_CHAR_RE = /\p{Script=Han}/u;
const ZH_PUNCT_RE = /[，。！？、；：“”‘’（）《》【】—…]/;
const LATIN_OR_DIGIT_RE = /[\p{Script=Latin}0-9]/u;
const EMOJI_STRIP_RE = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

/**
 * Detect whether a text string is predominantly Vietnamese (contains Latin/Vietnamese letters and no Hanzi).
 */
export function isVietnameseText(text: string): boolean {
  const cleaned = text.trim();
  if (!cleaned) return false;
  if (HAN_CHAR_RE.test(cleaned)) return false;
  return LATIN_OR_DIGIT_RE.test(cleaned);
}

/**
 * Smart bilingual text segmenter: splits mixed Vietnamese and Chinese (Hanzi) text
 * into sequential language-tagged segments so TTS switches smoothly between vi-VN and zh-CN.
 */
export function segmentBilingualText(text: string): Array<{ text: string; lang: "vi" | "zh" }> {
  const cleaned = text.replace(EMOJI_STRIP_RE, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return [];

  const rawSegments: Array<{ text: string; lang: "vi" | "zh" }> = [];
  let currentLang: "vi" | "zh" | null = null;
  let buffer = "";

  const flush = () => {
    const trimmed = buffer.trim();
    if (trimmed && currentLang) {
      const prev = rawSegments[rawSegments.length - 1];
      if (prev && prev.lang === currentLang) {
        prev.text = `${prev.text} ${trimmed}`.replace(/\s+([,.!?;:，。！？])/g, "$1");
      } else {
        rawSegments.push({ text: trimmed, lang: currentLang });
      }
    }
    buffer = "";
  };

  for (const ch of Array.from(cleaned)) {
    let charLang: "vi" | "zh" | null = null;
    if (HAN_CHAR_RE.test(ch) || ZH_PUNCT_RE.test(ch)) {
      charLang = "zh";
    } else if (LATIN_OR_DIGIT_RE.test(ch)) {
      charLang = "vi";
    }

    if (charLang === null) {
      // Neutral punctuation / whitespace stays with current segment
      buffer += ch;
      continue;
    }

    if (currentLang === null) {
      currentLang = charLang;
      buffer += ch;
    } else if (currentLang === charLang) {
      buffer += ch;
    } else {
      flush();
      currentLang = charLang;
      buffer = ch;
    }
  }
  flush();

  // Filter out segments that have neither Hanzi nor Latin/digits (pure punctuation)
  return rawSegments.filter(
    (seg) => HAN_CHAR_RE.test(seg.text) || LATIN_OR_DIGIT_RE.test(seg.text)
  );
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

  const session = ++speechSessionId;
  if (isBrowser() && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const playAt = (idx: number) => {
    if (session !== speechSessionId) return;
    if (idx >= valid.length) {
      onComplete?.();
      return;
    }
    const seg = valid[idx];
    onSegmentStart?.(idx, seg);
    const next = () => {
      if (session !== speechSessionId) return;
      playAt(idx + 1);
    };
    if (seg.lang === "vi") {
      speakVietnamese(seg.text, seg.rate ?? 1.0, next, {
        gender: seg.gender,
        voiceName: seg.voiceName,
        _sessionId: session,
      });
    } else {
      speakChinese(seg.text, seg.rate ?? 0.95, next, {
        gender: seg.gender,
        voiceName: seg.voiceName,
        _sessionId: session,
      });
    }
  };

  playAt(0);
}

/**
 * Speak arbitrary mixed Vietnamese + Chinese text smoothly by auto-segmenting
 * each Hanzi run (zh-CN) vs Vietnamese run (vi-VN). Never silent on VI or mixed text.
 */
export function speakBilingualText(
  text: string,
  options?: {
    rate?: number;
    gender?: VoiceGender;
    zhVoiceName?: string;
    viVoiceName?: string;
    onPhaseChange?: (p: "vi" | "zh" | "done") => void;
  }
): void {
  const rate = options?.rate ?? 0.95;
  const parts = segmentBilingualText(text);
  if (parts.length === 0) {
    options?.onPhaseChange?.("done");
    return;
  }

  const segments: SpeechSegment[] = parts.map((p) => ({
    text: p.text,
    lang: p.lang,
    rate: p.lang === "vi" ? Math.min(1.15, rate + 0.05) : rate,
    gender: options?.gender,
    voiceName: p.lang === "vi" ? options?.viVoiceName : options?.zhVoiceName,
  }));

  speakSequence(
    segments,
    (_idx, seg) => options?.onPhaseChange?.(seg.lang),
    () => options?.onPhaseChange?.("done")
  );
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
    for (const part of segmentBilingualText(viText)) {
      segments.push({
        text: part.text,
        lang: part.lang,
        rate: part.lang === "vi" ? Math.min(1.15, rate + 0.05) : rate,
        gender,
        voiceName: part.lang === "vi" ? viVoiceName : zhVoiceName,
      });
    }
  }
  if (zhText.trim()) {
    for (const part of segmentBilingualText(zhText)) {
      segments.push({
        text: part.text,
        lang: part.lang,
        rate: part.lang === "vi" ? Math.min(1.15, rate + 0.05) : rate,
        gender,
        voiceName: part.lang === "vi" ? viVoiceName : zhVoiceName,
      });
    }
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
  speechSessionId += 1;
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
