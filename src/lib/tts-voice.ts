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

export function getAvailableVoices(lang: TTSLang): SpeechSynthesisVoice[] {
  if (!isBrowser() || !("speechSynthesis" in window)) return [];
  const prefix = lang === "zh" ? "zh" : "vi";
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(prefix));
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
    candidates.find((v) => v.lang === targetLang && v.localService) ||
    candidates.find((v) => v.lang === targetLang) ||
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
