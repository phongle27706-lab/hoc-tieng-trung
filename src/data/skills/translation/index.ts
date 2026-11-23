import type { TranslationExercise } from "@/data/translation";
import type { HSKLevel } from "@/types";

export const HSK_LEVEL_ORDER: readonly HSKLevel[] = [
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
] as const;

const HSK_ORDER_MAP: Record<HSKLevel, number> = {
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

const levelCache = new Map<HSKLevel, TranslationExercise[]>();

export async function loadTranslationExtraByLevel(
  level: HSKLevel
): Promise<TranslationExercise[]> {
  const cached = levelCache.get(level);
  if (cached) return cached;

  let items: TranslationExercise[];
  switch (level) {
    case "HSK0": {
      const mod = await import("./hsk0");
      items = mod.TRANSLATION_HSK0;
      break;
    }
    case "HSK1": {
      const mod = await import("./hsk1");
      items = mod.TRANSLATION_HSK1;
      break;
    }
    case "HSK2": {
      const mod = await import("./hsk2");
      items = mod.TRANSLATION_HSK2;
      break;
    }
    case "HSK3": {
      const mod = await import("./hsk3");
      items = mod.TRANSLATION_HSK3;
      break;
    }
    case "HSK4": {
      const mod = await import("./hsk4");
      items = mod.TRANSLATION_HSK4;
      break;
    }
    case "HSK5": {
      const mod = await import("./hsk5");
      items = mod.TRANSLATION_HSK5;
      break;
    }
    case "HSK6": {
      const mod = await import("./hsk6");
      items = mod.TRANSLATION_HSK6;
      break;
    }
    case "HSK7": {
      const mod = await import("./hsk7");
      items = mod.TRANSLATION_HSK7;
      break;
    }
    case "HSK8": {
      const mod = await import("./hsk8");
      items = mod.TRANSLATION_HSK8;
      break;
    }
    case "HSK9": {
      const mod = await import("./hsk9");
      items = mod.TRANSLATION_HSK9;
      break;
    }
    default: {
      items = [];
      break;
    }
  }

  levelCache.set(level, items);
  return items;
}

export async function loadTranslationExtraByFilter(
  level: "ALL" | HSKLevel | "HSK7-9"
): Promise<TranslationExercise[]> {
  const targetLevels: readonly HSKLevel[] =
    level === "ALL"
      ? HSK_LEVEL_ORDER
      : level === "HSK7-9"
        ? (["HSK7", "HSK8", "HSK9"] as const)
        : [level];

  const batches = await Promise.all(
    targetLevels.map((lvl) => loadTranslationExtraByLevel(lvl))
  );

  return batches
    .flat()
    .sort((a, b) => HSK_ORDER_MAP[a.level] - HSK_ORDER_MAP[b.level]);
}
