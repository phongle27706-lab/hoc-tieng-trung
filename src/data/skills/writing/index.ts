import type { HSKLevel } from "@/types";
import type { ThemedWritingSet } from "./types";

export type { ThemedWritingChar, ThemedWritingSet } from "./types";

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

const cache = new Map<HSKLevel, ThemedWritingSet[]>();

export async function loadWritingExtraByLevel(
  level: HSKLevel
): Promise<ThemedWritingSet[]> {
  const cached = cache.get(level);
  if (cached) return cached;

  let sets: ThemedWritingSet[] = [];
  switch (level) {
    case "HSK0":
      sets = (await import("./hsk0")).WRITING_SETS_HSK0;
      break;
    case "HSK1":
      sets = (await import("./hsk1")).WRITING_SETS_HSK1;
      break;
    case "HSK2":
      sets = (await import("./hsk2")).WRITING_SETS_HSK2;
      break;
    case "HSK3":
      sets = (await import("./hsk3")).WRITING_SETS_HSK3;
      break;
    case "HSK4":
      sets = (await import("./hsk4")).WRITING_SETS_HSK4;
      break;
    case "HSK5":
      sets = (await import("./hsk5")).WRITING_SETS_HSK5;
      break;
    case "HSK6":
      sets = (await import("./hsk6")).WRITING_SETS_HSK6;
      break;
    case "HSK7":
      sets = (await import("./hsk7")).WRITING_SETS_HSK7;
      break;
    case "HSK8":
      sets = (await import("./hsk8")).WRITING_SETS_HSK8;
      break;
    case "HSK9":
      sets = (await import("./hsk9")).WRITING_SETS_HSK9;
      break;
  }

  cache.set(level, sets);
  return sets;
}

export async function loadWritingExtraByFilter(
  filter: "ALL" | HSKLevel | "HSK7-9"
): Promise<ThemedWritingSet[]> {
  const levels: HSKLevel[] =
    filter === "ALL"
      ? HSK_ORDER
      : filter === "HSK7-9"
        ? ["HSK7", "HSK8", "HSK9"]
        : [filter];

  const chunks = await Promise.all(levels.map((lvl) => loadWritingExtraByLevel(lvl)));
  return chunks.flat();
}
