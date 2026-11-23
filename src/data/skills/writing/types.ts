import type { HSKLevel, SubDifficulty } from "@/types";
import type { WritingPrompt } from "@/data/chinese/writing";

export interface ThemedWritingChar {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  strokeCount: number;
  radical: string;
}

export interface ThemedWritingSet {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  topic: string;
  titleVi: string;
  titleZh: string;
  characters: ThemedWritingChar[];
  prompt: WritingPrompt;
}
