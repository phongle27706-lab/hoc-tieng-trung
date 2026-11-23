import type { GrammarTopic } from "@/data/grammar";
import type { HSKLevel } from "@/types";

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

const EXTRA_LEVELS: HSKLevel[] = [
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

const levelCache = new Map<HSKLevel, GrammarTopic[]>();

export async function loadGrammarExtraByLevel(
  level: HSKLevel
): Promise<GrammarTopic[]> {
  if (level === "HSK0") {
    return [];
  }

  const cached = levelCache.get(level);
  if (cached) {
    return cached;
  }

  let topics: GrammarTopic[] = [];

  switch (level) {
    case "HSK1": {
      const mod = await import("./hsk1");
      topics = mod.GRAMMAR_HSK1_EXTRA;
      break;
    }
    case "HSK2": {
      const mod = await import("./hsk2");
      topics = mod.GRAMMAR_HSK2_EXTRA;
      break;
    }
    case "HSK3": {
      const mod = await import("./hsk3");
      topics = mod.GRAMMAR_HSK3_EXTRA;
      break;
    }
    case "HSK4": {
      const mod = await import("./hsk4");
      topics = mod.GRAMMAR_HSK4_EXTRA;
      break;
    }
    case "HSK5": {
      const mod = await import("./hsk5");
      topics = mod.GRAMMAR_HSK5_EXTRA;
      break;
    }
    case "HSK6": {
      const mod = await import("./hsk6");
      topics = mod.GRAMMAR_HSK6_EXTRA;
      break;
    }
    case "HSK7": {
      const mod = await import("./hsk7");
      topics = mod.GRAMMAR_HSK7_EXTRA;
      break;
    }
    case "HSK8": {
      const mod = await import("./hsk8");
      topics = mod.GRAMMAR_HSK8_EXTRA;
      break;
    }
    case "HSK9": {
      const mod = await import("./hsk9");
      topics = mod.GRAMMAR_HSK9_EXTRA;
      break;
    }
    default: {
      topics = [];
      break;
    }
  }

  levelCache.set(level, topics);
  return topics;
}

export async function loadGrammarExtraByFilter(
  level: "ALL" | HSKLevel | "HSK7-9"
): Promise<GrammarTopic[]> {
  const targetLevels: HSKLevel[] =
    level === "ALL"
      ? EXTRA_LEVELS
      : level === "HSK7-9"
        ? ["HSK7", "HSK8", "HSK9"]
        : [level];

  const batches = await Promise.all(
    targetLevels.map((lvl) => loadGrammarExtraByLevel(lvl))
  );

  return batches.flat().sort((a, b) => {
    const orderDiff = HSK_ORDER.indexOf(a.level) - HSK_ORDER.indexOf(b.level);
    if (orderDiff !== 0) return orderDiff;
    return a.id.localeCompare(b.id);
  });
}
