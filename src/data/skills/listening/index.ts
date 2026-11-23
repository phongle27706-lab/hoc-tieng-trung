import type { DictationLesson } from "@/data/listening-dictation";
import type { HSKLevel } from "@/types";

export const LISTENING_EXTRA_MANIFEST: Record<HSKLevel, number> = {
  HSK0: 5,
  HSK1: 5,
  HSK2: 5,
  HSK3: 5,
  HSK4: 5,
  HSK5: 4,
  HSK6: 4,
  HSK7: 4,
  HSK8: 4,
  HSK9: 4,
};

export const LISTENING_EXTRA_TOTAL = 45;

const HSK_ORDER: HSKLevel[] = [
  "HSK0",
  "HSK1",
  "HSK2",
  "HSK3",
  "HSK4",
  "HSK5",
  "HSK6",
  "HSK7",
  "HSK8",
  "HSK9",
];

const HSK7_9_LEVELS: HSKLevel[] = ["HSK7", "HSK8", "HSK9"];

const levelCache = new Map<HSKLevel, DictationLesson[]>();

async function loadSingleLevel(level: HSKLevel): Promise<DictationLesson[]> {
  const cached = levelCache.get(level);
  if (cached) {
    return cached;
  }

  let lessons: DictationLesson[];
  switch (level) {
    case "HSK0":
      lessons = (await import("./hsk0")).LISTENING_EXTRA_HSK0;
      break;
    case "HSK1":
      lessons = (await import("./hsk1")).LISTENING_EXTRA_HSK1;
      break;
    case "HSK2":
      lessons = (await import("./hsk2")).LISTENING_EXTRA_HSK2;
      break;
    case "HSK3":
      lessons = (await import("./hsk3")).LISTENING_EXTRA_HSK3;
      break;
    case "HSK4":
      lessons = (await import("./hsk4")).LISTENING_EXTRA_HSK4;
      break;
    case "HSK5":
      lessons = (await import("./hsk5")).LISTENING_EXTRA_HSK5;
      break;
    case "HSK6":
      lessons = (await import("./hsk6")).LISTENING_EXTRA_HSK6;
      break;
    case "HSK7":
      lessons = (await import("./hsk7")).LISTENING_EXTRA_HSK7;
      break;
    case "HSK8":
      lessons = (await import("./hsk8")).LISTENING_EXTRA_HSK8;
      break;
    case "HSK9":
      lessons = (await import("./hsk9")).LISTENING_EXTRA_HSK9;
      break;
  }

  levelCache.set(level, lessons);
  return lessons;
}

export async function loadListeningExtraByLevel(
  level: HSKLevel | "ALL" | "HSK7-9"
): Promise<DictationLesson[]> {
  if (level === "ALL") {
    const chunks = await Promise.all(HSK_ORDER.map((lv) => loadSingleLevel(lv)));
    return chunks.flat();
  }

  if (level === "HSK7-9") {
    const chunks = await Promise.all(
      HSK7_9_LEVELS.map((lv) => loadSingleLevel(lv))
    );
    return chunks.flat();
  }

  return loadSingleLevel(level);
}
