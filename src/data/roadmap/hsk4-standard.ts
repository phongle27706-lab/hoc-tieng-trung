import type { StudySession } from "@/types";
import { HSK4_PART1_SESSIONS } from "./hsk4-part1";
import { HSK4_PART2_SESSIONS } from "./hsk4-part2";

export const HSK4_STANDARD_SESSIONS: StudySession[] = [
  ...HSK4_PART1_SESSIONS,
  ...HSK4_PART2_SESSIONS,
];
