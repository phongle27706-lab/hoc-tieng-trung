import type { HSKLevel, SubDifficulty } from "@/types";
import type { SpeakingSentence } from "@/data/chinese/speaking";

export interface SpeakingShadowingLesson {
  id: string;
  title: string;
  titleZh: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  topic: string;
  descriptionVi: string;
  sentences: SpeakingSentence[];
}
