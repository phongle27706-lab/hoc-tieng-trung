import fs from "node:fs";
import path from "node:path";
import type { HSKLevel } from "../src/types";
import { ALL_STUDY_SESSIONS } from "../src/data/roadmap";
import { loadListeningExtraByLevel } from "../src/data/skills/listening";
import { loadSpeakingExtraByLevel } from "../src/data/skills/speaking";
import { loadReadingExtraByLevel } from "../src/data/skills/reading";
import { loadWritingExtraByLevel } from "../src/data/skills/writing";
import { loadTranslationExtraByLevel } from "../src/data/skills/translation";
import { loadGrammarExtraByLevel } from "../src/data/skills/grammar";

const HSK_LEVELS: HSKLevel[] = [
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

const HSK_ORDER: Record<HSKLevel, number> = {
  HSK0: 0,
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6,
  HSK7: 7,
  HSK8: 8,
  HSK9: 9,
};

const HANZI_DATA_DIR = path.resolve(
  process.cwd(),
  "node_modules",
  "hanzi-writer-data"
);

const SINGLE_HANZI_RE = /^[\u4e00-\u9fff]$/;
const EXTRACT_HANZI_RE = /[\u4e00-\u9fff]/g;

interface StrokeFileData {
  strokes?: unknown[];
  medians?: unknown[];
}

const strokeCache = new Map<string, StrokeFileData | null>();

function loadHanziStrokeFile(ch: string): StrokeFileData | null {
  if (strokeCache.has(ch)) {
    return strokeCache.get(ch) ?? null;
  }
  const filePath = path.join(HANZI_DATA_DIR, `${ch}.json`);
  if (!fs.existsSync(filePath)) {
    strokeCache.set(ch, null);
    return null;
  }
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as StrokeFileData;
    strokeCache.set(ch, parsed);
    return parsed;
  } catch {
    strokeCache.set(ch, null);
    return null;
  }
}

function getVocabTargetBand(level: HSKLevel): [number, number] {
  if (level === "HSK0") return [15, 20];
  if (level === "HSK1" || level === "HSK2") return [20, 25];
  return [25, 30];
}

async function main() {
  const errors: string[] = [];
  const allUniqueHanzi = new Set<string>();
  const roadmapHanzi = new Set<string>();
  const writingHanzi = new Set<string>();

  // 1. Audit 118 Roadmap Lessons
  if (ALL_STUDY_SESSIONS.length !== 118) {
    errors.push(
      `Expected 118 roadmap sessions, found ${ALL_STUDY_SESSIONS.length}`
    );
  }

  const sessionIds = new Set<string>();
  let totalRoadmapVocab = 0;
  let totalRoadmapExercises = 0;

  for (const session of ALL_STUDY_SESSIONS) {
    if (sessionIds.has(session.id)) {
      errors.push(`Duplicate roadmap session ID: ${session.id}`);
    }
    sessionIds.add(session.id);

    const [minVocab, maxVocab] = getVocabTargetBand(session.hskLevel);
    const vocabCount = (session.newWords ?? []).length;
    totalRoadmapVocab += vocabCount;
    if (vocabCount < minVocab || vocabCount > maxVocab) {
      errors.push(
        `Roadmap ${session.id} (${session.hskLevel}) vocab count ${vocabCount} outside [${minVocab}..${maxVocab}]`
      );
    }

    const exCount = session.exercises.length;
    totalRoadmapExercises += exCount;
    if (exCount < 15 || exCount > 25) {
      errors.push(
        `Roadmap ${session.id} (${session.hskLevel}) exercise count ${exCount} outside [15..25]`
      );
    }

    const wordHanziSet = new Set<string>();
    for (const w of session.newWords ?? []) {
      if (!w.hanzi?.trim() || !w.pinyin?.trim() || !w.meaningVi?.trim()) {
        errors.push(
          `Roadmap ${session.id} has empty hanzi/pinyin/meaningVi in word ${JSON.stringify(w)}`
        );
      }
      if (wordHanziSet.has(w.hanzi)) {
        errors.push(`Roadmap ${session.id} duplicate vocab hanzi: ${w.hanzi}`);
      }
      wordHanziSet.add(w.hanzi);

      const chars = w.hanzi.match(EXTRACT_HANZI_RE) ?? [];
      if (chars.length === 0) {
        errors.push(`Roadmap ${session.id} word "${w.hanzi}" has 0 Hanzi chars`);
      }
      for (const ch of chars) {
        roadmapHanzi.add(ch);
        allUniqueHanzi.add(ch);
      }
    }

    const exIds = new Set<string>();
    for (const ex of session.exercises) {
      if (exIds.has(ex.id)) {
        errors.push(`Roadmap ${session.id} duplicate exercise ID: ${ex.id}`);
      }
      exIds.add(ex.id);
    }
  }

  // 2. Audit 6 Skill Extra Modules
  // 2A. Listening (+45 lessons, 450 sentences)
  const listeningLessons = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadListeningExtraByLevel(lvl);
    listeningLessons.push(...items.filter((x) => x.level === lvl));
  }
  // Deduplicate if loader returns cumulative when passed HSKLevel
  const uniqueListening = Array.from(
    new Map(listeningLessons.map((x) => [x.id, x])).values()
  );
  if (uniqueListening.length !== 45) {
    errors.push(`Listening extra expected 45 lessons, got ${uniqueListening.length}`);
  }
  let listeningSentences = 0;
  let prevListeningOrder = -1;
  for (const l of uniqueListening) {
    const ord = HSK_ORDER[l.level];
    if (ord < prevListeningOrder) {
      errors.push(`Listening extra order violation at ${l.id} (${l.level})`);
    }
    prevListeningOrder = ord;
    listeningSentences += l.sentences.length;
    for (const s of l.sentences) {
      if (!s.textZh?.trim() || !s.pinyin?.trim() || !s.translationVi?.trim()) {
        errors.push(`Listening ${l.id} sentence ${s.id} missing textZh/pinyin/translationVi`);
      }
    }
  }

  // 2B. Speaking (+45 lessons, 360 sentences)
  const speakingLessons = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadSpeakingExtraByLevel(lvl);
    speakingLessons.push(...items.filter((x) => x.level === lvl));
  }
  const uniqueSpeaking = Array.from(
    new Map(speakingLessons.map((x) => [x.id, x])).values()
  );
  if (uniqueSpeaking.length !== 45) {
    errors.push(`Speaking extra expected 45 lessons, got ${uniqueSpeaking.length}`);
  }
  let speakingSentences = 0;
  let prevSpeakingOrder = -1;
  for (const l of uniqueSpeaking) {
    const ord = HSK_ORDER[l.level];
    if (ord < prevSpeakingOrder) {
      errors.push(`Speaking extra order violation at ${l.id} (${l.level})`);
    }
    prevSpeakingOrder = ord;
    speakingSentences += l.sentences.length;
    for (const s of l.sentences) {
      if (!s.hanzi?.trim() || !s.pinyin?.trim() || !s.meaningVi?.trim()) {
        errors.push(`Speaking ${l.id} sentence ${s.id} missing hanzi/pinyin/meaningVi`);
      }
    }
  }

  // 2C. Reading (+45 passages, 225 questions)
  const readingPassages = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadReadingExtraByLevel(lvl);
    readingPassages.push(...items.filter((x) => x.level === lvl));
  }
  const uniqueReading = Array.from(
    new Map(readingPassages.map((x) => [x.id, x])).values()
  );
  if (uniqueReading.length !== 45) {
    errors.push(`Reading extra expected 45 passages, got ${uniqueReading.length}`);
  }
  let readingQuestions = 0;
  let prevReadingOrder = -1;
  for (const p of uniqueReading) {
    const ord = HSK_ORDER[p.level];
    if (ord < prevReadingOrder) {
      errors.push(`Reading extra order violation at ${p.id} (${p.level})`);
    }
    prevReadingOrder = ord;
    readingQuestions += p.questions.length;
    if (!p.titleVi?.trim() || !p.title?.trim() || !p.contentZh?.trim()) {
      errors.push(`Reading ${p.id} missing titleVi/title/contentZh`);
    }
  }

  // 2D. Writing (+45 sets, 360 characters)
  const writingSets = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadWritingExtraByLevel(lvl);
    writingSets.push(...items.filter((x) => x.level === lvl));
  }
  const uniqueWriting = Array.from(
    new Map(writingSets.map((x) => [x.id, x])).values()
  );
  if (uniqueWriting.length !== 45) {
    errors.push(`Writing extra expected 45 sets, got ${uniqueWriting.length}`);
  }
  let writingCharTotal = 0;
  let prevWritingOrder = -1;
  for (const ws of uniqueWriting) {
    const ord = HSK_ORDER[ws.level];
    if (ord < prevWritingOrder) {
      errors.push(`Writing extra order violation at ${ws.id} (${ws.level})`);
    }
    prevWritingOrder = ord;
    writingCharTotal += ws.characters.length;
    for (const c of ws.characters) {
      if (!SINGLE_HANZI_RE.test(c.hanzi)) {
        errors.push(`Writing ${ws.id} character "${c.hanzi}" is not a single Simplified Hanzi`);
      }
      if (!c.pinyin?.trim() || !c.meaningVi?.trim() || !c.radical?.trim()) {
        errors.push(`Writing ${ws.id} character "${c.hanzi}" has empty pinyin/meaningVi/radical`);
      }
      const strokeData = loadHanziStrokeFile(c.hanzi);
      if (!strokeData || !Array.isArray(strokeData.strokes) || strokeData.strokes.length === 0) {
        errors.push(`Writing ${ws.id} character "${c.hanzi}" missing in hanzi-writer-data`);
      } else if (c.strokeCount !== strokeData.strokes.length) {
        errors.push(
          `Writing ${ws.id} character "${c.hanzi}" strokeCount=${c.strokeCount} != hanzi-writer-data=${strokeData.strokes.length}`
        );
      }
      writingHanzi.add(c.hanzi);
      allUniqueHanzi.add(c.hanzi);
    }
  }

  // 2E. Translation (+45 exercises)
  const translationItems = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadTranslationExtraByLevel(lvl);
    translationItems.push(...items.filter((x) => x.level === lvl));
  }
  const uniqueTranslation = Array.from(
    new Map(translationItems.map((x) => [x.id, x])).values()
  );
  if (uniqueTranslation.length !== 45) {
    errors.push(
      `Translation extra expected 45 exercises, got ${uniqueTranslation.length}`
    );
  }
  let prevTransOrder = -1;
  for (const t of uniqueTranslation) {
    const ord = HSK_ORDER[t.level];
    if (ord < prevTransOrder) {
      errors.push(`Translation extra order violation at ${t.id} (${t.level})`);
    }
    prevTransOrder = ord;
    if (!t.sourceText?.trim() || !t.referenceTarget?.trim() || !(t.referencePinyin?.trim() || t.sourcePinyin?.trim())) {
      errors.push(`Translation ${t.id} missing sourceText/referenceTarget/pinyin`);
    }
  }

  // 2F. Grammar (+40 topics, 240 exercises)
  const grammarTopics = [];
  for (const lvl of HSK_LEVELS) {
    const items = await loadGrammarExtraByLevel(lvl);
    grammarTopics.push(...items.filter((x) => x.level === lvl));
  }
  const uniqueGrammar = Array.from(
    new Map(grammarTopics.map((x) => [x.id, x])).values()
  );
  if (uniqueGrammar.length !== 40) {
    errors.push(`Grammar extra expected 40 topics, got ${uniqueGrammar.length}`);
  }
  let grammarExercises = 0;
  let prevGrammarOrder = -1;
  for (const g of uniqueGrammar) {
    const ord = HSK_ORDER[g.level];
    if (ord < prevGrammarOrder) {
      errors.push(`Grammar extra order violation at ${g.id} (${g.level})`);
    }
    prevGrammarOrder = ord;
    grammarExercises += g.exercises?.length ?? 0;
    if (!g.titleVi?.trim() || !g.formula?.trim() || !g.explanationVi?.trim()) {
      errors.push(`Grammar ${g.id} missing titleVi/formula/explanationVi`);
    }
  }

  // 3. 100% Hanzi & Stroke Data Audit across all unique Hanzi
  let verifiedHanziCount = 0;
  for (const ch of allUniqueHanzi) {
    if (!SINGLE_HANZI_RE.test(ch)) {
      errors.push(`Invalid non-Hanzi char in unique set: "${ch}"`);
      continue;
    }
    const data = loadHanziStrokeFile(ch);
    if (
      !data ||
      !Array.isArray(data.strokes) ||
      data.strokes.length === 0 ||
      !Array.isArray(data.medians) ||
      data.medians.length !== data.strokes.length
    ) {
      errors.push(`Missing or invalid hanzi-writer-data for character: "${ch}"`);
      continue;
    }
    verifiedHanziCount++;
  }

  console.log("=== HANZISTUDIO CONTENT & STROKE AUDIT SUMMARY ===");
  console.log(
    `1. Roadmap: ${ALL_STUDY_SESSIONS.length} lessons | ${totalRoadmapVocab} vocab words | ${totalRoadmapExercises} exercises`
  );
  console.log(
    `2. Listening Extra: +${uniqueListening.length} lessons | ${listeningSentences} sentences`
  );
  console.log(
    `3. Speaking Extra:  +${uniqueSpeaking.length} lessons | ${speakingSentences} sentences`
  );
  console.log(
    `4. Reading Extra:   +${uniqueReading.length} passages | ${readingQuestions} questions`
  );
  console.log(
    `5. Writing Extra:   +${uniqueWriting.length} sets | ${writingCharTotal} character entries`
  );
  console.log(
    `6. Translation Extra: +45 sets | ${uniqueTranslation.length} translation items`
  );
  console.log(
    `7. Grammar Extra:   +${uniqueGrammar.length} topics | ${grammarExercises} exercises`
  );
  console.log(
    `8. Hanzi Stroke Data: ${verifiedHanziCount}/${allUniqueHanzi.size} unique characters verified in node_modules/hanzi-writer-data (Roadmap: ${roadmapHanzi.size}, Writing: ${writingHanzi.size})`
  );

  if (errors.length > 0) {
    console.error(`\nFAILED with ${errors.length} error(s):`);
    for (const err of errors.slice(0, 30)) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log("\nRESULT: 100% PASS (0 errors)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
