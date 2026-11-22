import type { ExerciseQuestion } from "@/types";

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
