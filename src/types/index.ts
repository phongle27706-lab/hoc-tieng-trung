// ==========================================
// HanziStudio — Commercial Chinese Learning Platform (HSK 0 -> HSK 9)
// Minimalist Stone & Taupe V15 Architecture
// ==========================================

export type HSKLevel =
  | "HSK0"
  | "HSK1"
  | "HSK2"
  | "HSK3"
  | "HSK4"
  | "HSK5"
  | "HSK6"
  | "HSK7"
  | "HSK8"
  | "HSK9";

export type SubDifficulty = "basic" | "advanced";

export type SRSRating = "again" | "hard" | "good" | "easy";

export interface SRSData {
  easeFactor: number;
  interval: number; // in days
  repetitions: number;
  nextReviewDate: string; // ISO date string
  lastRating?: SRSRating;
}

export interface VocabItem {
  id: string;
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  radical: string; // Bộ thủ, e.g., "亻 (Nhân đứng)"
  strokeCount: number;
  partOfSpeech: string; // Danh từ, Động từ, Tính từ, Thành ngữ...
  level: HSKLevel;
  subDifficulty?: SubDifficulty;
  topic: string;
  exampleZh: string;
  examplePinyin: string;
  exampleVi: string;
  isCustom: boolean;
  srsData: SRSData;
}

export interface DictionaryEntry {
  hanzi: string;
  pinyin: string;
  radical: string;
  strokeCount: number;
  partOfSpeech: string;
  meaningVi: string;
  level?: HSKLevel;
  exampleZh?: string;
  examplePinyin?: string;
  exampleVi?: string;
}

export type SkillType = "listening" | "speaking" | "reading" | "writing";

export interface SkillScores {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
}

export interface UserProgress {
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  xp: number;
  dailyXp?: number;
  dailyXpDate?: string; // YYYY-MM-DD
  dailyXpTarget?: number; // 30 | 50 | 100
  level: HSKLevel;
  masteredVocabIds: string[];
  savedVocabIds: string[];
  completedLessonIds: string[];
  skillScores: SkillScores;
}

export type ThemeMode = "light" | "dark";

// ==========================================
// Personalization, Roadmap & Study Room
// ==========================================

export type GoalType =
  | "giao-tiep-du-lich"
  | "kinh-doanh-xnk"
  | "thi-hsk-du-hoc";

export type StudyDurationMonths = 6 | 9 | 12;

export interface SkillWeights {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
}

export interface UserGoalProfile {
  goal: GoalType;
  startingLevel: HSKLevel;
  durationMonths: StudyDurationMonths;
  skillWeights: SkillWeights;
  weeklySessionsTarget: number;
}

// Skill-specific Exercise types in Study Room (/study/[sessionId])
export type ExerciseType =
  // Listening exercises (always with Audio zh-CN)
  | "listening-mcq"
  | "listening-fill"
  | "listening-dialogue"
  // Speaking exercises (Mic recording + tone/pronunciation grading)
  | "speaking-shadowing"
  // Reading exercises (Chinese passage with Pinyin toggle + InteractiveChineseText)
  | "reading-comprehension"
  // Writing exercises (Stroke Order Canvas + Sentence Order + Make 2 Sentences)
  | "writing-stroke"
  | "writing-order"
  | "writing-two-sentences";

export interface ExerciseQuestion {
  id: string;
  type: ExerciseType;
  skill: SkillType;
  promptVi: string;
  promptZh?: string;
  promptPinyin?: string;
  // For listening exercises
  audioTextZh?: string;
  // For reading exercises
  passageZh?: string;
  passagePinyin?: string;
  passageVi?: string;
  // For MCQ / Dialogue / Reading comprehension
  options?: string[];
  // For sentence ordering
  wordTiles?: string[];
  // For stroke order & 2-sentence creation
  targetHanzi?: string;
  targetWordMeaningVi?: string;
  focusTonesOrPhonemes?: string[];
  correctAnswer: string;
  explanationVi: string;
}

export interface LessonVocabItem {
  hanzi: string;
  pinyin: string;
  partOfSpeech: string;
  meaningVi: string;
  radical?: string;
  strokeCount?: number;
}

export interface LessonDialogueLine {
  speaker: string;
  zh: string;
  pinyin: string;
  vi: string;
}

export interface LessonDialogueBlock {
  titleVi: string;
  lines: LessonDialogueLine[];
}

export interface LessonGrammarItem {
  titleVi: string;
  formula?: string;
  explanationVi: string;
  examples: {
    zh: string;
    pinyin: string;
    vi: string;
  }[];
}

export interface StudySession {
  id: string;
  stageId: number;
  hskLevel: HSKLevel;
  subDifficulty: SubDifficulty;
  lessonNumber?: number;
  title: string;
  titleZh: string;
  titlePinyin: string;
  skillFocus: SkillType;
  difficulty: "easy" | "medium" | "hard";
  estimatedMinutes: number;
  recommendedChannelId: string;
  recommendedChannelName: string;
  youtubeUrl: string;
  defaultSearchQuery: string;
  attachedResourceIds?: string[];
  grammarNotesVi: string[];
  newWords?: LessonVocabItem[];
  dialogues?: LessonDialogueBlock[];
  grammarPoints?: LessonGrammarItem[];
  exercises: ExerciseQuestion[];
}

export interface RoadmapStage {
  id: number;
  hskLevel: HSKLevel;
  monthsLabel: string;
  title: string;
  subtitle: string;
  vocabTarget: string;
  levelRange: string;
  defaultWeights: SkillWeights;
  highlights: {
    listening: string;
    speaking: string;
    reading: string;
    writing: string;
  };
  sessionIds: string[];
}

export interface YouTubeChannel {
  id: string;
  name: string;
  skill: SkillType;
  descriptionVi: string;
  levelTag: string;
  youtubeSearchUrl: string;
  sampleVideoUrl: string;
  sampleVideoTitle: string;
}

export type AIPersonaMode =
  | "khinh-bi"
  | "cuoi-nhao"
  | "binh-thuong"
  | "vui-ve";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  contentZh: string;
  contentPinyin?: string;
  contentVi: string;
  grammarCorrection?: string;
  persona?: AIPersonaMode;
  timestamp: string;
}

export interface AITutorSettings {
  persona: AIPersonaMode;
  apiKey: string;
  provider: "gemini" | "openai";
}
