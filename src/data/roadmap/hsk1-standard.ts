import type { StudySession } from "@/types";
import { HSK1_PART1_SESSIONS } from "./hsk1-part1";
import { HSK1_PART2_SESSIONS } from "./hsk1-part2";

export const HSK1_STANDARD_SESSIONS: StudySession[] = [
  ...HSK1_PART1_SESSIONS,
  ...HSK1_PART2_SESSIONS,
];
