import type { ReadingPassage } from "@/data/reading-passages";
import type { HSKLevel } from "@/types";

export const READING_EXTRA_MANIFEST: Record<HSKLevel, number> = {
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

export const READING_EXTRA_TOTAL = 45;

const HSK_LEVELS_ASC: HSKLevel[] = [
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

const HSK_ORDER: Record<HSKLevel, number> = {
  HSK0: 0,
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6,
  HSK7: 7,
  HSK8: 8,
  HSK9: 9,
};

const levelCache = new Map<HSKLevel, ReadingPassage[]>();

async function loadSingleLevel(level: HSKLevel): Promise<ReadingPassage[]> {
  const cached = levelCache.get(level);
  if (cached) {
    return cached;
  }

  let passages: ReadingPassage[];
  switch (level) {
    case "HSK0": {
      const mod = await import("./hsk0");
      passages = mod.READING_EXTRA_HSK0;
      break;
    }
    case "HSK1": {
      const mod = await import("./hsk1");
      passages = mod.READING_EXTRA_HSK1;
      break;
    }
    case "HSK2": {
      const mod = await import("./hsk2");
      passages = mod.READING_EXTRA_HSK2;
      break;
    }
    case "HSK3": {
      const mod = await import("./hsk3");
      passages = mod.READING_EXTRA_HSK3;
      break;
    }
    case "HSK4": {
      const mod = await import("./hsk4");
      passages = mod.READING_EXTRA_HSK4;
      break;
    }
    case "HSK5": {
      const mod = await import("./hsk5");
      passages = mod.READING_EXTRA_HSK5;
      break;
    }
    case "HSK6": {
      const mod = await import("./hsk6");
      passages = mod.READING_EXTRA_HSK6;
      break;
    }
    case "HSK7": {
      const mod = await import("./hsk7");
      passages = mod.READING_EXTRA_HSK7;
      break;
    }
    case "HSK8": {
      const mod = await import("./hsk8");
      passages = mod.READING_EXTRA_HSK8;
      break;
    }
    case "HSK9": {
      const mod = await import("./hsk9");
      passages = mod.READING_EXTRA_HSK9;
      break;
    }
  }

  levelCache.set(level, passages);
  return passages;
}

export async function loadReadingExtraByLevel(
  level: HSKLevel | "ALL" | "HSK7-9"
): Promise<ReadingPassage[]> {
  if (level === "ALL") {
    const chunks = await Promise.all(
      HSK_LEVELS_ASC.map((lv) => loadSingleLevel(lv))
    );
    return chunks
      .flat()
      .sort((a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]);
  }

  if (level === "HSK7-9") {
    const chunks = await Promise.all(
      (["HSK7", "HSK8", "HSK9"] as HSKLevel[]).map((lv) => loadSingleLevel(lv))
    );
    return chunks
      .flat()
      .sort((a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]);
  }

  const single = await loadSingleLevel(level);
  return [...single].sort((a, b) => HSK_ORDER[a.level] - HSK_ORDER[b.level]);
}
