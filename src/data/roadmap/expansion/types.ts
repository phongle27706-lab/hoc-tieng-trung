/**
 * Compact tuple for expanded lesson vocabulary:
 * [hanzi, pinyin, partOfSpeech, meaningVi, exampleZh, examplePinyin, exampleVi]
 *
 * Rules:
 * - 100% real Simplified Chinese (HSK 3.0), NO Traditional characters.
 * - Tone-marked Pinyin (e.g. "nǐ hǎo", never numeric).
 * - Natural Vietnamese meaning & example translation.
 * - Every Hanzi character must exist in node_modules/hanzi-writer-data/<char>.json.
 */
export type CompactVocabTuple = readonly [
  hanzi: string,
  pinyin: string,
  partOfSpeech: string,
  meaningVi: string,
  exampleZh: string,
  examplePinyin: string,
  exampleVi: string,
];

/**
 * Compact sentence-ordering exercise tuple:
 * [promptVi, wordTiles, correctAnswer, promptPinyin, explanationVi]
 */
export type CompactOrderTuple = readonly [
  promptVi: string,
  wordTiles: readonly string[],
  correctAnswer: string,
  promptPinyin: string,
  explanationVi: string,
];

export interface LessonExpansion {
  vocab: readonly CompactVocabTuple[];
  orderExercises?: readonly CompactOrderTuple[];
}

export type HskExpansionMap = Record<string, LessonExpansion>;
