import type { StudySession } from "@/types";
import { HSK2_PART1_SESSIONS } from "./hsk2-part1";
import { HSK2_PART2_SESSIONS } from "./hsk2-part2";

export const HSK2_STANDARD_SESSIONS: StudySession[] = [
  ...HSK2_PART1_SESSIONS,
  ...HSK2_PART2_SESSIONS,
];
