import type { StudySession } from "@/types";
import { HSK3_PART1_SESSIONS } from "./hsk3-part1";
import { HSK3_PART2_SESSIONS } from "./hsk3-part2";

export const HSK3_STANDARD_SESSIONS: StudySession[] = [
  ...HSK3_PART1_SESSIONS,
  ...HSK3_PART2_SESSIONS,
];
