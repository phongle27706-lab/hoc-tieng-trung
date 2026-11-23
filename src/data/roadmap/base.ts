import type { StudySession } from "@/types";
import { HSK0_STANDARD_SESSIONS } from "./hsk0-standard";
import { HSK1_STANDARD_SESSIONS } from "./hsk1-standard";
import { HSK2_STANDARD_SESSIONS } from "./hsk2-standard";
import { HSK3_STANDARD_SESSIONS } from "./hsk3-standard";
import { HSK4_STANDARD_SESSIONS } from "./hsk4-standard";
import { HSK5_STANDARD_SESSIONS } from "./hsk5-standard";
import { HSK6_STANDARD_SESSIONS } from "./hsk6-standard";
import { HSK7_STANDARD_SESSIONS } from "./hsk7-standard";
import { HSK8_STANDARD_SESSIONS } from "./hsk8-standard";
import { HSK9_STANDARD_SESSIONS } from "./hsk9-standard";

/**
 * Lightweight 118-lesson session metadata list for Dashboard / YouTube Hub / Admin
 * without pulling in the 2,959-word / 2,715-exercise per-HSK expansion packs into `/` First Load JS.
 */
export const BASE_STUDY_SESSIONS: StudySession[] = [
  ...HSK0_STANDARD_SESSIONS,
  ...HSK1_STANDARD_SESSIONS,
  ...HSK2_STANDARD_SESSIONS,
  ...HSK3_STANDARD_SESSIONS,
  ...HSK4_STANDARD_SESSIONS,
  ...HSK5_STANDARD_SESSIONS,
  ...HSK6_STANDARD_SESSIONS,
  ...HSK7_STANDARD_SESSIONS,
  ...HSK8_STANDARD_SESSIONS,
  ...HSK9_STANDARD_SESSIONS,
];
