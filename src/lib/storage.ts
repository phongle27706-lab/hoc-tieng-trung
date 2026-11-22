import type {
  AITutorSettings,
  ChatMessage,
  HSKLevel,
  SkillType,
  SRSData,
  ThemeMode,
  UserGoalProfile,
  UserProgress,
  VocabItem,
} from "@/types";
import { getActiveUserId } from "@/lib/auth";

export const STORAGE_UPDATE_EVENT = "hanzi-storage-update";

const KEY_SUFFIXES = {
  PROGRESS: "user_progress",
  CUSTOM_VOCAB: "custom_vocab",
  SRS_OVERRIDES: "srs_overrides",
  THEME: "theme",
  GOAL_PROFILE: "goal_profile",
  COMPLETED_SESSIONS: "completed_sessions",
  SESSION_NOTES: "session_notes",
  SESSION_CUSTOM_VIDEOS: "session_custom_videos",
  AI_CHAT_HISTORY: "ai_chat_history",
  AI_TUTOR_SETTINGS: "ai_tutor_settings",
  MISTAKES: "mistakes",
  VOCAB_SENTENCES: "vocab_sentences",
  CUSTOM_VOCAB_SETS: "custom_vocab_sets",
} as const;

type StorageKeyName = keyof typeof KEY_SUFFIXES;

function getUserKey(name: StorageKeyName): string {
  const userId = getActiveUserId();
  return `hanzi_u_${userId}_${KEY_SUFFIXES[name]}`;
}

const isBrowser = (): boolean => typeof window !== "undefined";

function getTodayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export const DEFAULT_USER_PROGRESS: UserProgress = {
  streakDays: 0,
  lastActiveDate: getTodayISO(),
  xp: 0,
  dailyXp: 0,
  dailyXpDate: getTodayISO(),
  dailyXpTarget: 50,
  level: "HSK0",
  masteredVocabIds: [],
  savedVocabIds: [],
  completedLessonIds: [],
  skillScores: {
    listening: 0,
    speaking: 0,
    reading: 0,
    writing: 0,
  },
};

export function createDefaultSRSData(): SRSData {
  return {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewDate: new Date().toISOString(),
  };
}

function dispatchStorageUpdate(key: string): void {
  if (!isBrowser()) return;
  window.dispatchEvent(
    new CustomEvent(STORAGE_UPDATE_EVENT, { detail: { key } })
  );
}

function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    dispatchStorageUpdate(key);
  } catch {
    // Ignore quota or private-mode errors
  }
}

// --- User Progress ---

export function getUserProgress(): UserProgress {
  const stored = readJSON<Partial<UserProgress>>(getUserKey("PROGRESS"), {});
  const today = getTodayISO();
  const isSameDay = stored.dailyXpDate === today;
  return {
    ...DEFAULT_USER_PROGRESS,
    ...stored,
    dailyXp: isSameDay ? Math.max(0, stored.dailyXp ?? 0) : 0,
    dailyXpDate: today,
    dailyXpTarget: stored.dailyXpTarget ?? DEFAULT_USER_PROGRESS.dailyXpTarget,
    skillScores: {
      ...DEFAULT_USER_PROGRESS.skillScores,
      ...(stored.skillScores ?? {}),
    },
  };
}

export function saveUserProgress(progress: UserProgress): void {
  writeJSON(getUserKey("PROGRESS"), progress);
}

export function updateUserProgress(
  updater: (prev: UserProgress) => UserProgress
): UserProgress {
  const current = getUserProgress();
  const next = updater(current);
  saveUserProgress(next);
  return next;
}

export function addXP(amount: number): UserProgress {
  return updateUserProgress((prev) => {
    const today = getTodayISO();
    let streakDays = prev.streakDays;
    if (prev.streakDays === 0 && amount > 0) {
      streakDays = 1;
    } else if (prev.lastActiveDate !== today) {
      const prevDate = new Date(prev.lastActiveDate);
      const currDate = new Date(today);
      const diffDays = Math.round(
        (currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      streakDays = diffDays === 1 ? prev.streakDays + 1 : 1;
    }
    const baseDailyXp = prev.dailyXpDate === today ? (prev.dailyXp ?? 0) : 0;
    return {
      ...prev,
      xp: Math.max(0, prev.xp + amount),
      dailyXp: Math.max(0, baseDailyXp + amount),
      dailyXpDate: today,
      streakDays,
      lastActiveDate: today,
    };
  });
}

export function setDailyXpTarget(target: number): UserProgress {
  const sanitized = Math.max(10, Math.round(target));
  return updateUserProgress((prev) => ({
    ...prev,
    dailyXpTarget: sanitized,
  }));
}

export function recordVoiceCallPractice(accuracy: number): UserProgress {
  if (accuracy < 75) {
    return getUserProgress();
  }
  const today = getTodayISO();
  return updateUserProgress((prev) => {
    const baseDailyXp = prev.dailyXpDate === today ? (prev.dailyXp ?? 0) : 0;
    const currentSpeaking = prev.skillScores.speaking ?? 0;
    return {
      ...prev,
      xp: prev.xp + 10,
      dailyXp: baseDailyXp + 10,
      dailyXpDate: today,
      lastActiveDate: today,
      skillScores: {
        ...prev.skillScores,
        speaking: Math.min(100, currentSpeaking + 3),
      },
    };
  });
}

export function setHSKLevel(level: HSKLevel): UserProgress {
  return updateUserProgress((prev) => ({ ...prev, level }));
}

export function markLessonCompleted(
  lessonId: string,
  skill?: SkillType,
  scoreDelta = 10,
  xpReward = 25
): UserProgress {
  return updateUserProgress((prev) => {
    const alreadyDone = prev.completedLessonIds.includes(lessonId);
    const completedLessonIds = alreadyDone
      ? prev.completedLessonIds
      : [...prev.completedLessonIds, lessonId];

    const skillScores = { ...prev.skillScores };
    if (skill) {
      skillScores[skill] = Math.min(100, (skillScores[skill] ?? 0) + scoreDelta);
    }

    return {
      ...prev,
      completedLessonIds,
      skillScores,
      xp: prev.xp + (alreadyDone ? Math.round(xpReward / 2) : xpReward),
      lastActiveDate: getTodayISO(),
    };
  });
}

export function toggleSavedVocabId(vocabId: string): UserProgress {
  return updateUserProgress((prev) => {
    const exists = prev.savedVocabIds.includes(vocabId);
    const savedVocabIds = exists
      ? prev.savedVocabIds.filter((id) => id !== vocabId)
      : [...prev.savedVocabIds, vocabId];
    return { ...prev, savedVocabIds };
  });
}

// --- Custom Vocabulary ---

export function getCustomVocab(): VocabItem[] {
  return readJSON<VocabItem[]>(getUserKey("CUSTOM_VOCAB"), []);
}

export function saveCustomVocab(items: VocabItem[]): void {
  writeJSON(getUserKey("CUSTOM_VOCAB"), items);
}

export function addCustomVocab(item: VocabItem): VocabItem[] {
  const current = getCustomVocab();
  const exists = current.some(
    (v) => v.hanzi.trim() === item.hanzi.trim()
  );
  if (exists) return current;
  const next = [item, ...current];
  saveCustomVocab(next);
  return next;
}

export function removeCustomVocab(id: string): VocabItem[] {
  const next = getCustomVocab().filter((v) => v.id !== id);
  saveCustomVocab(next);
  return next;
}

// --- Custom Vocabulary Sets ---

export interface CustomVocabSet {
  id: string;
  name: string;
  icon: string;
  level: HSKLevel;
  createdAt: string;
  items: VocabItem[];
}

export function getCustomVocabSets(): CustomVocabSet[] {
  return readJSON<CustomVocabSet[]>(getUserKey("CUSTOM_VOCAB_SETS"), []);
}

export function saveCustomVocabSets(sets: CustomVocabSet[]): void {
  writeJSON(getUserKey("CUSTOM_VOCAB_SETS"), sets);
}

export function addCustomVocabSet(set: CustomVocabSet): CustomVocabSet[] {
  const current = getCustomVocabSets();
  const next = [set, ...current];
  saveCustomVocabSets(next);
  return next;
}

export function deleteCustomVocabSet(setId: string): CustomVocabSet[] {
  const next = getCustomVocabSets().filter((s) => s.id !== setId);
  saveCustomVocabSets(next);
  return next;
}

// --- Vocab 2-Sentence Practice Records ---

export function getVocabSentencesMap(): Record<string, [string, string]> {
  return readJSON<Record<string, [string, string]>>(
    getUserKey("VOCAB_SENTENCES"),
    {}
  );
}

export function saveVocabSentences(
  vocabId: string,
  sentences: [string, string]
): void {
  const map = getVocabSentencesMap();
  map[vocabId] = sentences;
  writeJSON(getUserKey("VOCAB_SENTENCES"), map);
  addXP(15);
}

// --- SRS Overrides ---

export function getSRSOverrides(): Record<string, SRSData> {
  return readJSON<Record<string, SRSData>>(getUserKey("SRS_OVERRIDES"), {});
}

export function saveSRSOverride(vocabId: string, srsData: SRSData): void {
  const overrides = getSRSOverrides();
  overrides[vocabId] = srsData;
  writeJSON(getUserKey("SRS_OVERRIDES"), overrides);

  if (srsData.repetitions >= 3 && srsData.interval >= 6) {
    updateUserProgress((prev) => {
      if (prev.masteredVocabIds.includes(vocabId)) return prev;
      return {
        ...prev,
        masteredVocabIds: [...prev.masteredVocabIds, vocabId],
      };
    });
  }
}

// --- Theme Preference ---

export function getThemePreference(): ThemeMode {
  if (!isBrowser()) return "light";
  const stored = window.localStorage.getItem(getUserKey("THEME"));
  if (stored === "dark" || stored === "light") return stored;
  return "light";
}

export function setThemePreference(theme: ThemeMode): void {
  if (!isBrowser()) return;
  const key = getUserKey("THEME");
  try {
    window.localStorage.setItem(key, theme);
  } catch {
    // Ignore storage errors
  }
  dispatchStorageUpdate(key);
}

export function subscribeStorageUpdates(callback: () => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = () => callback();
  window.addEventListener(STORAGE_UPDATE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(STORAGE_UPDATE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

// ==========================================
// Goal Profile, Sessions & AI Tutor
// ==========================================

export const DEFAULT_GOAL_PROFILE: UserGoalProfile = {
  goal: "thi-hsk-du-hoc",
  startingLevel: "HSK0",
  durationMonths: 9,
  skillWeights: {
    listening: 30,
    speaking: 30,
    reading: 20,
    writing: 20,
  },
  weeklySessionsTarget: 5,
};

export function getUserGoalProfile(): UserGoalProfile {
  const stored = readJSON<Partial<UserGoalProfile>>(
    getUserKey("GOAL_PROFILE"),
    {}
  );
  return {
    ...DEFAULT_GOAL_PROFILE,
    ...stored,
    skillWeights: {
      ...DEFAULT_GOAL_PROFILE.skillWeights,
      ...(stored.skillWeights ?? {}),
    },
  };
}

export function saveUserGoalProfile(profile: UserGoalProfile): void {
  writeJSON(getUserKey("GOAL_PROFILE"), profile);
}

// --- Completed Roadmap Sessions ---

export function getCompletedSessionIds(): string[] {
  return readJSON<string[]>(getUserKey("COMPLETED_SESSIONS"), []);
}

export function markSessionCompleted(
  sessionId: string,
  scorePercent: number
): string[] {
  const current = getCompletedSessionIds();
  const alreadyDone = current.includes(sessionId);
  const next = alreadyDone ? current : [...current, sessionId];
  writeJSON(getUserKey("COMPLETED_SESSIONS"), next);

  const clampedScore = Math.max(0, Math.min(100, Math.round(scorePercent)));
  const baseXp = alreadyDone ? 15 : 40;
  const bonusXp = Math.round((clampedScore / 100) * 20);
  addXP(baseXp + bonusXp);

  return next;
}

// --- Session Notes ---

export function getSessionNote(sessionId: string): string {
  const notes = readJSON<Record<string, string>>(
    getUserKey("SESSION_NOTES"),
    {}
  );
  return notes[sessionId] ?? "";
}

export function saveSessionNote(sessionId: string, note: string): void {
  const notes = readJSON<Record<string, string>>(
    getUserKey("SESSION_NOTES"),
    {}
  );
  notes[sessionId] = note;
  writeJSON(getUserKey("SESSION_NOTES"), notes);
}

// --- Session Custom YouTube Video ---

export function getSessionCustomVideo(sessionId: string): string {
  const videos = readJSON<Record<string, string>>(
    getUserKey("SESSION_CUSTOM_VIDEOS"),
    {}
  );
  return videos[sessionId] ?? "";
}

export function saveSessionCustomVideo(sessionId: string, url: string): void {
  const videos = readJSON<Record<string, string>>(
    getUserKey("SESSION_CUSTOM_VIDEOS"),
    {}
  );
  if (!url.trim()) {
    delete videos[sessionId];
  } else {
    videos[sessionId] = url.trim();
  }
  writeJSON(getUserKey("SESSION_CUSTOM_VIDEOS"), videos);
}

// --- AI Tutor Chat History & Settings ---

export const DEFAULT_AI_TUTOR_SETTINGS: AITutorSettings = {
  persona: "binh-thuong",
  apiKey: "",
  provider: "gemini",
};

export function getAIChatHistory(): ChatMessage[] {
  return readJSON<ChatMessage[]>(getUserKey("AI_CHAT_HISTORY"), []);
}

export function saveAIChatHistory(messages: ChatMessage[]): void {
  writeJSON(getUserKey("AI_CHAT_HISTORY"), messages);
}

export function clearAIChatHistory(): void {
  writeJSON(getUserKey("AI_CHAT_HISTORY"), []);
}

export function getAITutorSettings(): AITutorSettings {
  const stored = readJSON<Partial<AITutorSettings>>(
    getUserKey("AI_TUTOR_SETTINGS"),
    {}
  );
  return {
    ...DEFAULT_AI_TUTOR_SETTINGS,
    ...stored,
  };
}

export function saveAITutorSettings(settings: AITutorSettings): void {
  writeJSON(getUserKey("AI_TUTOR_SETTINGS"), settings);
}

// ==========================================
// Mistake Bank & JSON Backup/Restore
// ==========================================

export type MistakeSource =
  | "listening"
  | "reading"
  | "grammar"
  | "writing"
  | "translation"
  | "study";

export interface MistakeItem {
  id: string;
  source: MistakeSource;
  prompt: string;
  userAnswer: string;
  correctAnswer: string;
  explanationVi: string;
  createdAt: string;
}

export function getMistakes(): MistakeItem[] {
  return readJSON<MistakeItem[]>(getUserKey("MISTAKES"), []);
}

export function recordMistake(
  item: Omit<MistakeItem, "id" | "createdAt"> &
    Partial<Pick<MistakeItem, "id" | "createdAt">>
): MistakeItem[] {
  const current = getMistakes();
  const entry: MistakeItem = {
    id:
      item.id ??
      `mistake_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    source: item.source,
    prompt: item.prompt,
    userAnswer: item.userAnswer,
    correctAnswer: item.correctAnswer,
    explanationVi: item.explanationVi,
    createdAt: item.createdAt ?? new Date().toISOString(),
  };

  const filtered = current.filter(
    (m) => !(m.source === entry.source && m.prompt === entry.prompt)
  );
  const next = [entry, ...filtered].slice(0, 200);
  writeJSON(getUserKey("MISTAKES"), next);
  return next;
}

export function resolveMistake(id: string): MistakeItem[] {
  const next = getMistakes().filter((m) => m.id !== id);
  writeJSON(getUserKey("MISTAKES"), next);
  return next;
}

interface UserDataBackupPayload {
  version: number;
  exportedAt: string;
  userId: string;
  data: Partial<Record<StorageKeyName, unknown>>;
}

export function exportUserDataJson(): string {
  const userId = getActiveUserId();
  const data: Partial<Record<StorageKeyName, unknown>> = {};

  if (isBrowser()) {
    const keyNames = Object.keys(KEY_SUFFIXES) as StorageKeyName[];
    for (const name of keyNames) {
      const raw = window.localStorage.getItem(getUserKey(name));
      if (raw === null) continue;
      if (name === "THEME") {
        data[name] = raw;
      } else {
        try {
          data[name] = JSON.parse(raw);
        } catch {
          data[name] = raw;
        }
      }
    }
  }

  const payload: UserDataBackupPayload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    userId,
    data,
  };

  return JSON.stringify(payload, null, 2);
}

const MAX_IMPORT_JSON_BYTES = 2 * 1024 * 1024; // 2MB
const MAX_SANITIZE_DEPTH = 20;
const DANGEROUS_OBJECT_KEYS = new Set([
  "__proto__",
  "constructor",
  "prototype",
]);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

export function stripDangerousKeys(value: unknown, depth = 0): unknown {
  if (depth > MAX_SANITIZE_DEPTH) return null;
  if (Array.isArray(value)) {
    return value.map((item) => stripDangerousKeys(item, depth + 1));
  }
  if (isPlainObject(value)) {
    const clean: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      if (DANGEROUS_OBJECT_KEYS.has(k)) continue;
      clean[k] = stripDangerousKeys(v, depth + 1);
    }
    return clean;
  }
  return value;
}

const ARRAY_STORAGE_KEYS = new Set<StorageKeyName>([
  "CUSTOM_VOCAB",
  "COMPLETED_SESSIONS",
  "AI_CHAT_HISTORY",
  "MISTAKES",
]);

const OBJECT_STORAGE_KEYS = new Set<StorageKeyName>([
  "PROGRESS",
  "SRS_OVERRIDES",
  "GOAL_PROFILE",
  "SESSION_NOTES",
  "SESSION_CUSTOM_VIDEOS",
  "AI_TUTOR_SETTINGS",
  "VOCAB_SENTENCES",
]);

export function importUserDataJson(jsonStr: string): boolean {
  if (!isBrowser()) return false;
  if (typeof jsonStr !== "string" || jsonStr.length === 0) return false;
  if (jsonStr.length > MAX_IMPORT_JSON_BYTES) return false;

  try {
    const rawParsed = JSON.parse(jsonStr) as unknown;
    const sanitizedRoot = stripDangerousKeys(rawParsed) as Partial<UserDataBackupPayload>;
    if (
      !isPlainObject(sanitizedRoot) ||
      !isPlainObject(sanitizedRoot.data)
    ) {
      return false;
    }

    const validKeys = new Set(Object.keys(KEY_SUFFIXES) as StorageKeyName[]);
    let importedCount = 0;

    for (const [key, value] of Object.entries(sanitizedRoot.data)) {
      if (!validKeys.has(key as StorageKeyName)) continue;
      const keyName = key as StorageKeyName;
      const storageKey = getUserKey(keyName);

      if (keyName === "THEME") {
        if (value === "light" || value === "dark") {
          window.localStorage.setItem(storageKey, value);
          importedCount++;
        }
        continue;
      }

      if (ARRAY_STORAGE_KEYS.has(keyName) && !Array.isArray(value)) {
        continue;
      }
      if (OBJECT_STORAGE_KEYS.has(keyName) && !isPlainObject(value)) {
        continue;
      }

      if (value !== undefined) {
        window.localStorage.setItem(storageKey, JSON.stringify(value));
        importedCount++;
      }
    }

    if (importedCount === 0) return false;
    dispatchStorageUpdate("import_all");
    return true;
  } catch {
    return false;
  }
}
