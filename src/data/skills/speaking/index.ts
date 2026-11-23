import type { HSKLevel } from "@/types";
import type { SpeakingShadowingLesson } from "./types";

export type { SpeakingShadowingLesson } from "./types";

export const SPEAKING_EXTRA_MANIFEST: Record<HSKLevel, number> = {
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

export const SPEAKING_EXTRA_TOTAL = 45;

const ORDERED_LEVELS: HSKLevel[] = [
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

const levelCache = new Map<HSKLevel, SpeakingShadowingLesson[]>();

async function loadSingleLevel(
  level: HSKLevel
): Promise<SpeakingShadowingLesson[]> {
  const cached = levelCache.get(level);
  if (cached) return cached;

  let data: SpeakingShadowingLesson[];
  switch (level) {
    case "HSK0": {
      const mod = await import("./hsk0");
      data = mod.SPEAKING_EXTRA_HSK0;
      break;
    }
    case "HSK1": {
      const mod = await import("./hsk1");
      data = mod.SPEAKING_EXTRA_HSK1;
      break;
    }
    case "HSK2": {
      const mod = await import("./hsk2");
      data = mod.SPEAKING_EXTRA_HSK2;
      break;
    }
    case "HSK3": {
      const mod = await import("./hsk3");
      data = mod.SPEAKING_EXTRA_HSK3;
      break;
    }
    case "HSK4": {
      const mod = await import("./hsk4");
      data = mod.SPEAKING_EXTRA_HSK4;
      break;
    }
    case "HSK5": {
      const mod = await import("./hsk5");
      data = mod.SPEAKING_EXTRA_HSK5;
      break;
    }
    case "HSK6": {
      const mod = await import("./hsk6");
      data = mod.SPEAKING_EXTRA_HSK6;
      break;
    }
    case "HSK7": {
      const mod = await import("./hsk7");
      data = mod.SPEAKING_EXTRA_HSK7;
      break;
    }
    case "HSK8": {
      const mod = await import("./hsk8");
      data = mod.SPEAKING_EXTRA_HSK8;
      break;
    }
    case "HSK9": {
      const mod = await import("./hsk9");
      data = mod.SPEAKING_EXTRA_HSK9;
      break;
    }
  }

  levelCache.set(level, data);
  return data;
}

export async function loadSpeakingExtraByLevel(
  level: HSKLevel | "ALL" | "HSK7-9"
): Promise<SpeakingShadowingLesson[]> {
  if (level === "ALL") {
    const chunks = await Promise.all(ORDERED_LEVELS.map(loadSingleLevel));
    return chunks.flat();
  }
  if (level === "HSK7-9") {
    const chunks = await Promise.all(
      (["HSK7", "HSK8", "HSK9"] as HSKLevel[]).map(loadSingleLevel)
    );
    return chunks.flat();
  }
  return loadSingleLevel(level);
}
