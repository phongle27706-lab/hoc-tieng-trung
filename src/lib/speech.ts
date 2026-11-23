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

  const trimmed = sanitizeTextForTTS(text);
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

  const trimmed = sanitizeTextForTTS(text);
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
const HAN_CHAR_GLOBAL_RE = /\p{Script=Han}/gu;
const LATIN_OR_DIGIT_RE = /[\p{Script=Latin}0-9]/u;
const LATIN_LETTER_RE = /\p{Script=Latin}/u;
const VI_DIACRITIC_RE =
  /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
const VI_COMMON_WORD_RE =
  /\b(mình|bạn|tôi|không|muốn|nói|chủ đề|câu này|khó quá|dài quá|hôm nay|trà sữa|chính trị|cảm ơn|xin chào|được|rồi|nhé|nha|về|thích|ăn|uống|học|làm)\b/i;

/** Strip 100% of emojis, pictographs, variation selectors, ZWJ, and markdown syntax before TTS. */
const FULL_EMOJI_STRIP_RE =
  /[\p{Extended_Pictographic}\p{Emoji_Presentation}\u{1F1E6}-\u{1F1FF}\u2600-\u27BF\uFE0E\uFE0F\u200D\u20E3]/gu;

export function sanitizeTextForTTS(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[*_#`~>]/g, "")
    .replace(FULL_EMOJI_STRIP_RE, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Auto-detect spoken language from a transcript by inspecting CJK Hanzi vs Vietnamese diacritics/words.
 */
export function detectSpokenLanguage(text: string): "zh-CN" | "vi-VN" {
  const cleaned = text.trim();
  if (!cleaned) return "vi-VN";
  const hanMatches = cleaned.match(HAN_CHAR_GLOBAL_RE);
  const hanCount = hanMatches ? hanMatches.length : 0;
  const hasViMarkers = VI_DIACRITIC_RE.test(cleaned) || VI_COMMON_WORD_RE.test(cleaned);

  if (hanCount > 0 && !hasViMarkers) return "zh-CN";
  if (hasViMarkers && hanCount === 0) return "vi-VN";
  if (hanCount > 0 && hasViMarkers) {
    // Mixed sentence: compare Hanzi characters vs Latin letters
    const latinCount = (cleaned.match(/\p{Script=Latin}/gu) ?? []).length;
    return hanCount >= latinCount ? "zh-CN" : "vi-VN";
  }
  return LATIN_LETTER_RE.test(cleaned) ? "vi-VN" : "zh-CN";
}

/**
 * Detect whether a text string is predominantly Vietnamese (contains Latin/Vietnamese letters and no Hanzi).
 */
export function isVietnameseText(text: string): boolean {
  return detectSpokenLanguage(text) === "vi-VN";
}

/**
 * Smooth bilingual text segmenter: splits sanitized Vietnamese + Chinese text
 * into whole Vietnamese sentences/clauses (vi) and whole Chinese sentences/clauses (zh)
 * without chopping into tiny fragments.
 */
export function segmentBilingualText(text: string): Array<{ text: string; lang: "vi" | "zh" }> {
  const cleaned = sanitizeTextForTTS(text);
  if (!cleaned) return [];

  // Match contiguous Hanzi runs (including Chinese punctuation & spaces between Hanzi) vs non-Hanzi runs
  const tokenRe =
    /([\p{Script=Han}]+(?:[\s，。！？、；：“”‘’（）《》【】—…?!.,]*[\p{Script=Han}]+)*[，。！？、；：“”‘’（）《》【】—…?!.]*)/gu;

  const rawSegments: Array<{ text: string; lang: "vi" | "zh" }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const pushMerged = (lang: "vi" | "zh", chunk: string) => {
    const trimmed = chunk.replace(/^[\s:：\-–—"'“”‘’()（）]+/, "").trim();
    if (!trimmed) return;
    const hasSpeakable =
      lang === "zh" ? HAN_CHAR_RE.test(trimmed) : LATIN_OR_DIGIT_RE.test(trimmed);
    if (!hasSpeakable) return;

    const prev = rawSegments[rawSegments.length - 1];
    if (prev && prev.lang === lang) {
      prev.text = `${prev.text} ${trimmed}`.replace(/\s+([,.!?;:，。！？])/g, "$1");
    } else {
      rawSegments.push({ text: trimmed, lang });
    }
  };

  while ((match = tokenRe.exec(cleaned)) !== null) {
    if (match.index > lastIndex) {
      pushMerged("vi", cleaned.slice(lastIndex, match.index));
    }
    pushMerged("zh", match[0]);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < cleaned.length) {
    pushMerged("vi", cleaned.slice(lastIndex));
  }

  return rawSegments;
}

/**
 * Clean AudioQueue that plays whole Vietnamese (vi-VN) and whole Chinese (zh-CN)
 * sentences sequentially without awkward gaps or stale utterance leaks.
 */
export class AudioQueue {
  private queue: SpeechSegment[] = [];
  private activeSession = 0;
  private playing = false;

  get isPlaying(): boolean {
    return this.playing;
  }

  clear(): void {
    this.queue = [];
  }

  stop(): void {
    this.queue = [];
    this.playing = false;
    this.activeSession = ++speechSessionId;
    if (isBrowser() && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  enqueue(segments: SpeechSegment[]): void {
    for (const seg of segments) {
      const clean = sanitizeTextForTTS(seg.text);
      if (!clean) continue;
      this.queue.push({ ...seg, text: clean });
    }
  }

  play(
    onSegmentStart?: (index: number, segment: SpeechSegment) => void,
    onComplete?: () => void
  ): void {
    const items = [...this.queue];
    this.queue = [];

    if (items.length === 0 || !isBrowser() || !("speechSynthesis" in window)) {
      this.playing = false;
      onComplete?.();
      return;
    }

    const session = ++speechSessionId;
    this.activeSession = session;
    this.playing = true;
    window.speechSynthesis.cancel();

    // Pre-resolve voices once for the entire queue to eliminate transition lag
    const voiceCache = new Map<string, ReturnType<typeof resolveVoiceConfig>>();
    const getConfig = (seg: SpeechSegment) => {
      const key = `${seg.lang}|${seg.gender ?? "female"}|${seg.voiceName ?? ""}`;
      let cfg = voiceCache.get(key);
      if (!cfg) {
        cfg = resolveVoiceConfig(seg.lang, seg.gender ?? "female", seg.voiceName);
        voiceCache.set(key, cfg);
      }
      return cfg;
    };

    const playAt = (idx: number) => {
      if (session !== speechSessionId || session !== this.activeSession) return;
      if (idx >= items.length) {
        this.playing = false;
        onComplete?.();
        return;
      }

      const seg = items[idx];
      onSegmentStart?.(idx, seg);

      const utterance = new SpeechSynthesisUtterance(seg.text);
      utterance.lang = seg.lang === "vi" ? "vi-VN" : "zh-CN";
      const cfg = getConfig(seg);
      if (cfg.voice) {
        utterance.voice = cfg.voice;
      }
      const baseRate = seg.rate ?? (seg.lang === "vi" ? 1.0 : 0.95);
      const rateMult = seg.gender ? cfg.rateMultiplier : 1.0;
      utterance.rate = Math.min(2.0, Math.max(0.5, baseRate * rateMult));
      utterance.pitch = seg.gender ? cfg.pitch : 1.0;

      let settled = false;
      const advance = () => {
        if (settled) return;
        settled = true;
        if (session !== speechSessionId || session !== this.activeSession) return;
        playAt(idx + 1);
      };

      utterance.onend = advance;
      utterance.onerror = advance;
      window.speechSynthesis.speak(utterance);
    };

    playAt(0);
  }
}

const sharedAudioQueue = new AudioQueue();

export function speakSequence(
  segments: SpeechSegment[],
  onSegmentStart?: (index: number, segment: SpeechSegment) => void,
  onComplete?: () => void
): void {
  sharedAudioQueue.clear();
  sharedAudioQueue.enqueue(segments);
  sharedAudioQueue.play(onSegmentStart, onComplete);
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
  sharedAudioQueue.stop();
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
