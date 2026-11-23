export type TTSGender = "male" | "female";
export type TTSLang = "zh" | "vi";

export interface ResolvedVoiceConfig {
  voice: SpeechSynthesisVoice | null;
  pitch: number;
  rateMultiplier: number;
  matchedGender: boolean;
  isFallbackPitch: boolean;
}

const isBrowser = (): boolean => typeof window !== "undefined";

const MALE_ZH_HINTS = [
  "yunxi",
  "kangkang",
  "yunjian",
  "yunyang",
  "yunze",
  "zhiwei",
  "male",
  "man",
];

const FEMALE_ZH_HINTS = [
  "xiaoxiao",
  "huihui",
  "yaoyao",
  "xiaoyi",
  "xiaohan",
  "xiaomo",
  "ting-ting",
  "tingting",
  "meijia",
  "sin-ji",
  "female",
  "woman",
];

const MALE_VI_HINTS = ["namminh", "nam minh", "male", "man"];
const FEMALE_VI_HINTS = ["hoaimy", "hoai my", "linh", "female", "woman"];

const preferredVoices: Partial<Record<TTSLang, string>> = {};

export function setPreferredVoiceName(
  lang: TTSLang,
  voiceName?: string
): void {
  if (voiceName && voiceName.trim()) {
    preferredVoices[lang] = voiceName.trim();
  } else {
    delete preferredVoices[lang];
  }
}

export function getPreferredVoiceName(lang: TTSLang): string | undefined {
  return preferredVoices[lang];
}

function matchesGenderHint(
  voiceName: string,
  lang: TTSLang,
  gender: TTSGender
): boolean {
  const lower = voiceName.toLowerCase();
  if (lang === "zh") {
    const hints = gender === "male" ? MALE_ZH_HINTS : FEMALE_ZH_HINTS;
    return hints.some((h) => lower.includes(h));
  }

  if (gender === "male") {
    if (MALE_VI_HINTS.some((h) => lower.includes(h))) return true;
    return /\ban\b/i.test(voiceName);
  }

  return FEMALE_VI_HINTS.some((h) => lower.includes(h));
}

export const TTS_MIN_RATE = 0.7;
export const TTS_MAX_RATE = 1.3;

export function clampTTSRate(rate: number): number {
  if (!Number.isFinite(rate)) return 1.0;
  return Math.round(Math.min(TTS_MAX_RATE, Math.max(TTS_MIN_RATE, rate)) * 100) / 100;
}

const NATURAL_ZH_PRIORITY = [
  "microsoft xiaoxiao online (natural)",
  "microsoft yunxi online (natural)",
  "microsoft xiaoyi online (natural)",
  "google 普通话",
  "ting-ting",
  "meijia",
];

function getVoiceQualityScore(voice: SpeechSynthesisVoice, lang: TTSLang): number {
  const name = voice.name.toLowerCase();
  const targetLang = lang === "zh" ? "zh-cn" : "vi-vn";
  let score = 0;

  if (lang === "zh") {
    const idx = NATURAL_ZH_PRIORITY.findIndex((p) => name.includes(p));
    if (idx !== -1) {
      score += 1000 - idx * 50;
    }
  }

  if (name.includes("natural")) score += 300;
  if (name.includes("neural")) score += 250;
  if (name.includes("online")) score += 200;
  if (!voice.localService) score += 100;
  if (voice.lang.toLowerCase() === targetLang) score += 50;

  return score;
}

export function getAvailableVoices(lang: TTSLang): SpeechSynthesisVoice[] {
  if (!isBrowser() || !("speechSynthesis" in window)) return [];
  const prefix = lang === "zh" ? "zh" : "vi";
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(prefix))
    .sort((a, b) => getVoiceQualityScore(b, lang) - getVoiceQualityScore(a, lang));
}

export function subscribeVoicesChanged(cb: () => void): () => void {
  if (!isBrowser() || !("speechSynthesis" in window)) {
    return () => {};
  }

  const synth = window.speechSynthesis;
  synth.getVoices();

  if (typeof synth.addEventListener === "function") {
    synth.addEventListener("voiceschanged", cb);
    return () => {
      synth.removeEventListener("voiceschanged", cb);
    };
  }

  const prev = synth.onvoiceschanged;
  const handler = (ev: Event) => {
    if (typeof prev === "function") {
      prev.call(synth, ev);
    }
    cb();
  };
  synth.onvoiceschanged = handler;
  return () => {
    if (synth.onvoiceschanged === handler) {
      synth.onvoiceschanged = prev ?? null;
    }
  };
}

export function resolveVoiceConfig(
  lang: TTSLang,
  gender: TTSGender = "female",
  manualVoiceName?: string
): ResolvedVoiceConfig {
  const candidates = getAvailableVoices(lang);
  const targetLang = lang === "zh" ? "zh-CN" : "vi-VN";
  const effectiveManual = manualVoiceName || preferredVoices[lang];

  if (effectiveManual && candidates.length > 0) {
    const exact = candidates.find((v) => v.name === effectiveManual);
    if (exact) {
      return {
        voice: exact,
        pitch: 1.0,
        rateMultiplier: 1.0,
        matchedGender: true,
        isFallbackPitch: false,
      };
    }
  }

  if (candidates.length > 0) {
    const matched = candidates.find((v) =>
      matchesGenderHint(v.name, lang, gender)
    );
    if (matched) {
      return {
        voice: matched,
        pitch: 1.0,
        rateMultiplier: 1.0,
        matchedGender: true,
        isFallbackPitch: false,
      };
    }
  }

  const fallback =
    candidates.find((v) => v.lang.toLowerCase() === targetLang.toLowerCase()) ||
    candidates[0] ||
    null;

  if (gender === "male") {
    return {
      voice: fallback,
      pitch: 0.78,
      rateMultiplier: 0.98,
      matchedGender: false,
      isFallbackPitch: true,
    };
  }

  return {
    voice: fallback,
    pitch: 1.15,
    rateMultiplier: 1.0,
    matchedGender: false,
    isFallbackPitch: true,
  };
}

/** Friendly Vietnamese label for a raw SpeechSynthesisVoice (hide "Microsoft 晓晓 Online (Natural)"). */
const FRIENDLY_VOICE_MAP: Array<[RegExp, string]> = [
  [/xiaoxiao|晓晓/i, "Giọng nữ chuẩn Bắc Kinh"],
  [/xiaoyi|晓伊/i, "Giọng nữ trẻ trung"],
  [/yunxi|云希/i, "Giọng nam trẻ"],
  [/yunjian|云健/i, "Giọng nam trầm ấm"],
  [/yunyang|云扬/i, "Giọng nam phát thanh viên"],
  [/yunxia|云夏/i, "Giọng bé trai"],
  [/xiaobei|晓北/i, "Giọng nữ Đông Bắc"],
  [/xiaoni|晓妮/i, "Giọng nữ Thiểm Tây"],
  [/huihui|慧慧/i, "Giọng nữ tiêu chuẩn"],
  [/kangkang|康康/i, "Giọng nam tiêu chuẩn"],
  [/yaoyao|瑶瑶/i, "Giọng nữ nhẹ nhàng"],
  [/hsiaochen|hsiaoyu|yating|hanhan|zhiwei|tw/i, "Giọng Đài Loan"],
  [/hiugaai|hiumaan|wanlung|tracy|danny|hk|cantonese|粤/i, "Giọng Quảng Đông (HK)"],
  [/tingting|ting-ting|meijia|sin-ji/i, "Giọng nữ (Apple)"],
  [/google/i, "Giọng Google"],
  [/hoaimy|hoai my/i, "Giọng nữ miền Nam (Hoài My)"],
  [/namminh|nam minh/i, "Giọng nam miền Bắc (Nam Minh)"],
  [/linh/i, "Giọng nữ Việt (Linh)"],
];

export function getFriendlyVoiceLabel(
  voice: Pick<SpeechSynthesisVoice, "name" | "lang">
): string {
  const hit = FRIENDLY_VOICE_MAP.find(([re]) => re.test(voice.name));
  const lang = (voice.lang || "").toLowerCase();
  const region = lang.includes("tw")
    ? " · Đài Loan"
    : lang.includes("hk")
      ? " · Hồng Kông"
      : "";
  const natural = /natural|neural|online/i.test(voice.name) ? " ✨" : "";
  if (hit) return `${hit[1]}${hit[1].includes("Đài Loan") || hit[1].includes("HK") ? "" : region}${natural}`;
  return lang.startsWith("vi") ? `Giọng tiếng Việt${natural}` : `Giọng tiếng Trung${region}${natural}`;
}
