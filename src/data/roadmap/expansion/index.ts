import type { HSKLevel } from "@/types";
import type { HskExpansionMap } from "./types";
import { HSK0_EXPANSION } from "./hsk0";
import { HSK1_EXPANSION } from "./hsk1";
import { HSK2_EXPANSION } from "./hsk2";
import { HSK3_EXPANSION } from "./hsk3";
import { HSK4_EXPANSION } from "./hsk4";
import { HSK5_EXPANSION } from "./hsk5";
import { HSK6_EXPANSION } from "./hsk6";
import { HSK7_EXPANSION } from "./hsk7";
import { HSK8_EXPANSION } from "./hsk8";
import { HSK9_EXPANSION } from "./hsk9";

export type {
  CompactOrderTuple,
  CompactVocabTuple,
  HskExpansionMap,
  LessonExpansion,
} from "./types";

export const HSK_EXPANSION_BY_LEVEL: Record<HSKLevel, HskExpansionMap> = {
  HSK0: HSK0_EXPANSION,
  HSK1: HSK1_EXPANSION,
  HSK2: HSK2_EXPANSION,
  HSK3: HSK3_EXPANSION,
  HSK4: HSK4_EXPANSION,
  HSK5: HSK5_EXPANSION,
  HSK6: HSK6_EXPANSION,
  HSK7: HSK7_EXPANSION,
  HSK8: HSK8_EXPANSION,
  HSK9: HSK9_EXPANSION,
};

const lazyCache = new Map<HSKLevel, HskExpansionMap>();

/**
 * Dynamic per-HSK stage loader for lazy consumers.
 */
export async function loadHskExpansion(
  level: HSKLevel
): Promise<HskExpansionMap> {
  const cached = lazyCache.get(level);
  if (cached) return cached;

  let mod: HskExpansionMap;
  switch (level) {
    case "HSK0":
      mod = (await import("./hsk0")).HSK0_EXPANSION;
      break;
    case "HSK1":
      mod = (await import("./hsk1")).HSK1_EXPANSION;
      break;
    case "HSK2":
      mod = (await import("./hsk2")).HSK2_EXPANSION;
      break;
    case "HSK3":
      mod = (await import("./hsk3")).HSK3_EXPANSION;
      break;
    case "HSK4":
      mod = (await import("./hsk4")).HSK4_EXPANSION;
      break;
    case "HSK5":
      mod = (await import("./hsk5")).HSK5_EXPANSION;
      break;
    case "HSK6":
      mod = (await import("./hsk6")).HSK6_EXPANSION;
      break;
    case "HSK7":
      mod = (await import("./hsk7")).HSK7_EXPANSION;
      break;
    case "HSK8":
      mod = (await import("./hsk8")).HSK8_EXPANSION;
      break;
    case "HSK9":
      mod = (await import("./hsk9")).HSK9_EXPANSION;
      break;
  }
  lazyCache.set(level, mod);
  return mod;
}
