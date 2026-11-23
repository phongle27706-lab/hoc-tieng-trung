import type { ExerciseQuestion, LessonVocabItem, StudySession } from "@/types";
import type { CompactVocabTuple, LessonExpansion } from "./expansion/types";

export function listeningMcq(
  id: string,
  audioTextZh: string,
  promptPinyin: string,
  promptVi: string,
  options: string[],
  correctAnswer: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "listening-mcq",
    skill: "listening",
    audioTextZh,
    promptZh: audioTextZh,
    promptPinyin,
    promptVi,
    options,
    correctAnswer,
    explanationVi,
  };
}

export function listeningFill(
  id: string,
  audioTextZh: string,
  promptZh: string,
  promptPinyin: string,
  promptVi: string,
  correctAnswer: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "listening-fill",
    skill: "listening",
    audioTextZh,
    promptZh,
    promptPinyin,
    promptVi,
    correctAnswer,
    explanationVi,
  };
}

export function listeningDialogue(
  id: string,
  audioTextZh: string,
  promptPinyin: string,
  promptVi: string,
  options: string[],
  correctAnswer: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "listening-dialogue",
    skill: "listening",
    audioTextZh,
    promptZh: audioTextZh,
    promptPinyin,
    promptVi,
    options,
    correctAnswer,
    explanationVi,
  };
}

export function speakingShadowing(
  id: string,
  promptZh: string,
  promptPinyin: string,
  promptVi: string,
  focusTonesOrPhonemes: string[],
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "speaking-shadowing",
    skill: "speaking",
    promptZh,
    promptPinyin,
    promptVi,
    focusTonesOrPhonemes,
    correctAnswer: promptZh,
    explanationVi,
  };
}

export function readingComp(
  id: string,
  passageZh: string,
  passagePinyin: string,
  passageVi: string,
  promptVi: string,
  options: string[],
  correctAnswer: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "reading-comprehension",
    skill: "reading",
    passageZh,
    passagePinyin,
    passageVi,
    promptVi,
    options,
    correctAnswer,
    explanationVi,
  };
}

export function writingStroke(
  id: string,
  targetHanzi: string,
  promptPinyin: string,
  targetWordMeaningVi: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "writing-stroke",
    skill: "writing",
    promptVi: `Luyện viết chữ Hán "${targetHanzi}" (${promptPinyin} — ${targetWordMeaningVi}) đúng thứ tự nét trên ô Mễ tự cách.`,
    promptZh: targetHanzi,
    promptPinyin,
    targetHanzi,
    targetWordMeaningVi,
    correctAnswer: targetHanzi,
    explanationVi,
  };
}

export function writingOrder(
  id: string,
  promptVi: string,
  wordTiles: string[],
  correctAnswer: string,
  promptPinyin: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "writing-order",
    skill: "writing",
    promptVi,
    promptPinyin,
    wordTiles,
    correctAnswer,
    explanationVi,
  };
}

export function writingTwoSentences(
  id: string,
  targetHanzi: string,
  promptPinyin: string,
  targetWordMeaningVi: string,
  explanationVi: string
): ExerciseQuestion {
  return {
    id,
    type: "writing-two-sentences",
    skill: "writing",
    promptVi: `Bắt buộc đặt 2 câu hoàn chỉnh (Câu 1: Giao tiếp đời sống, Câu 2: Công việc/Mở rộng) có chứa từ "${targetHanzi}" (${promptPinyin} — ${targetWordMeaningVi}).`,
    promptZh: targetHanzi,
    promptPinyin,
    targetHanzi,
    targetWordMeaningVi,
    correctAnswer: targetHanzi,
    explanationVi,
  };
}

function deterministicShuffle<T>(items: readonly T[], seed: number): T[] {
  const arr = [...items];
  let s = seed + 1;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function pickUniqueOptions(
  pool: readonly string[],
  correct: string,
  seed: number
): string[] {
  const distractors: string[] = [];
  const seen = new Set<string>([correct]);
  const rotated = deterministicShuffle(pool, seed);
  for (const item of rotated) {
    if (!seen.has(item)) {
      seen.add(item);
      distractors.push(item);
      if (distractors.length === 3) break;
    }
  }
  return deterministicShuffle([correct, ...distractors], seed + 7);
}

function buildExpansionExercises(
  sessionId: string,
  allWords: readonly LessonVocabItem[],
  expansion: LessonExpansion,
  baseCount: number
): ExerciseQuestion[] {
  const tuples = expansion.vocab;
  if (tuples.length === 0) return [];

  const meaningPool = Array.from(
    new Set([
      ...tuples.map((t) => t[3]),
      ...allWords.map((w) => w.meaningVi),
    ])
  );
  const pinyinPool = Array.from(
    new Set([
      ...tuples.map((t) => t[1]),
      ...allWords.map((w) => w.pinyin),
    ])
  );
  const viSentencePool = Array.from(new Set(tuples.map((t) => t[6])));

  const generated: ExerciseQuestion[] = [];

  // 1. Add curated sentence-ordering exercises if provided
  if (expansion.orderExercises && expansion.orderExercises.length > 0) {
    expansion.orderExercises.forEach((ord, idx) => {
      generated.push(
        writingOrder(
          `${sessionId}-exp-ord-${idx + 1}`,
          ord[0],
          [...ord[1]],
          ord[2],
          ord[3],
          ord[4]
        )
      );
    });
  }

  // 2. Cap total exercises to <= 25 while ensuring every new vocab tuple is exercised.
  //    Target 18-24 total exercises (baseCount is 5, so 13-19 generated).
  const maxGenerated = Math.max(12, 24 - baseCount);
  const perTupleCount = Math.min(tuples.length, maxGenerated - generated.length);

  for (let i = 0; i < perTupleCount; i++) {
    const t: CompactVocabTuple = tuples[i];
    const [hanzi, pinyin, pos, meaningVi, exZh, exPinyin, exVi] = t;
    const mod = i % 5;

    if (mod === 0) {
      // Listening recognition MCQ
      generated.push(
        listeningMcq(
          `${sessionId}-exp-lmcq-${i + 1}`,
          hanzi,
          pinyin,
          `Nghe phát âm từ mới (${pos}) và chọn nghĩa tiếng Việt đúng:`,
          pickUniqueOptions(meaningPool, meaningVi, i * 13 + 1),
          meaningVi,
          `"${hanzi}" (${pinyin}, ${pos}) nghĩa là: ${meaningVi}. Ví dụ: ${exZh} (${exVi})`
        )
      );
    } else if (mod === 1) {
      // Fill-in-blank in real context
      const blankedZh = exZh.includes(hanzi)
        ? exZh.replace(hanzi, "____")
        : `____ (${exZh})`;
      generated.push(
        listeningFill(
          `${sessionId}-exp-lfill-${i + 1}`,
          exZh,
          blankedZh,
          exPinyin,
          `Nghe câu ví dụ và điền từ tiếng Trung thích hợp vào chỗ trống (${meaningVi}):`,
          hanzi,
          `Câu đầy đủ: ${exZh} (${exPinyin}) — ${exVi}`
        )
      );
    } else if (mod === 2) {
      // MCQ Pinyin recognition
      generated.push(
        readingComp(
          `${sessionId}-exp-pinyin-${i + 1}`,
          exZh,
          "",
          exVi,
          `Chọn phiên âm Pinyin chuẩn cho từ "${hanzi}" (${meaningVi}):`,
          pickUniqueOptions(pinyinPool, pinyin, i * 17 + 3),
          pinyin,
          `"${hanzi}" đọc là "${pinyin}" (${meaningVi}).`
        )
      );
    } else if (mod === 3) {
      // Short translation MCQ in context
      generated.push(
        readingComp(
          `${sessionId}-exp-trans-${i + 1}`,
          exZh,
          exPinyin,
          "",
          `Chọn bản dịch tiếng Việt tự nhiên nhất cho câu có chứa từ "${hanzi}":`,
          pickUniqueOptions(viSentencePool, exVi, i * 19 + 5),
          exVi,
          `"${exZh}" (${exPinyin}) dịch là: "${exVi}".`
        )
      );
    } else {
      // Contextual meaning MCQ
      generated.push(
        readingComp(
          `${sessionId}-exp-mean-${i + 1}`,
          exZh,
          exPinyin,
          "",
          `Trong câu trên, từ "${hanzi}" (${pinyin}) có nghĩa là gì?`,
          pickUniqueOptions(meaningPool, meaningVi, i * 23 + 7),
          meaningVi,
          `"${hanzi}" (${pinyin}) là ${pos}, nghĩa là: ${meaningVi}. Câu ví dụ: ${exVi}`
        )
      );
    }
  }

  // Ensure at least 15 total exercises even for shorter HSK0 lessons
  if (baseCount + generated.length < 16 && tuples.length > 0) {
    const needed = 16 - (baseCount + generated.length);
    for (let k = 0; k < needed; k++) {
      const t = tuples[k % tuples.length];
      const [hanzi, pinyin, , meaningVi, exZh, exPinyin, exVi] = t;
      generated.push(
        speakingShadowing(
          `${sessionId}-exp-shad-${k + 1}`,
          exZh,
          exPinyin,
          `Nghe và đọc nhại theo câu ví dụ chứa từ "${hanzi}" (${meaningVi}):`,
          [pinyin],
          `Dịch nghĩa: ${exVi}`
        )
      );
    }
  }

  return generated.slice(0, Math.max(0, 25 - baseCount));
}

export function applyLessonExpansion(
  session: StudySession,
  expansion?: LessonExpansion
): StudySession {
  if (!expansion || expansion.vocab.length === 0) return session;

  const existingWords = session.newWords ?? [];
  const seenHanzi = new Set(existingWords.map((w) => w.hanzi));
  const addedWords: LessonVocabItem[] = [];

  for (const [hanzi, pinyin, partOfSpeech, meaningVi] of expansion.vocab) {
    if (!hanzi || seenHanzi.has(hanzi)) continue;
    seenHanzi.add(hanzi);
    addedWords.push({
      hanzi,
      pinyin,
      partOfSpeech,
      meaningVi,
    });
  }

  const mergedWords = [...existingWords, ...addedWords];
  const extraExercises = buildExpansionExercises(
    session.id,
    mergedWords,
    expansion,
    session.exercises.length
  );

  return {
    ...session,
    newWords: mergedWords,
    exercises: [...session.exercises, ...extraExercises],
  };
}
