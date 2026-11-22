export type BlankRatio = 20 | 35 | 60;

export interface DictationToken {
  index: number;
  raw: string;
  cleanWord: string;
  punctuationBefore: string;
  punctuationAfter: string;
  isBlank: boolean;
}

const HANZI_OR_WORD_RE = /[\p{Script=Han}a-zA-Z0-9]/u;
const PUNCT_RE = /[，。！？、；：“”‘’（）《》,.!?;:"'()]/u;

function deterministicScore(word: string, index: number, seed: number): number {
  let hash = (seed * 31 + index * 17) >>> 0;
  for (let i = 0; i < word.length; i++) {
    hash = ((hash * 33) ^ word.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Segment Chinese sentence into word tokens (if space-separated, uses spaces;
 * otherwise segments into 1-2 character word chunks while keeping punctuation separate)
 * and deterministically blanks 20%, 35%, or 60% of tokens.
 */
export function segmentChineseWords(
  textZh: string,
  priorityKeywords?: string[]
): string[] {
  const trimmed = textZh.trim();
  if (!trimmed) return [];

  if (trimmed.includes(" ")) {
    return trimmed.split(/\s+/).filter(Boolean);
  }

  const kwList = [...(priorityKeywords ?? [])]
    .map((k) => k.trim())
    .filter((k) => k.length > 0)
    .sort((a, b) => b.length - a.length);

  const tokens: string[] = [];
  let i = 0;
  while (i < trimmed.length) {
    const ch = trimmed[i];
    if (PUNCT_RE.test(ch)) {
      if (tokens.length > 0) {
        tokens[tokens.length - 1] += ch;
      } else {
        tokens.push(ch);
      }
      i += 1;
      continue;
    }

    let matchedKw = "";
    for (const kw of kwList) {
      if (trimmed.startsWith(kw, i)) {
        matchedKw = kw;
        break;
      }
    }

    if (matchedKw) {
      tokens.push(matchedKw);
      i += matchedKw.length;
      continue;
    }

    // Group 2 consecutive Hanzi if next is also Hanzi and not punctuation
    const nextCh = trimmed[i + 1];
    if (
      nextCh &&
      !PUNCT_RE.test(nextCh) &&
      !kwList.some((kw) => trimmed.startsWith(kw, i + 1))
    ) {
      tokens.push(ch + nextCh);
      i += 2;
    } else {
      tokens.push(ch);
      i += 1;
    }
  }

  return tokens;
}

export function tokenizeAndBlank(
  textZh: string,
  ratio: BlankRatio,
  priorityKeywords?: string[]
): DictationToken[] {
  const rawTokens = segmentChineseWords(textZh, priorityKeywords);
  if (rawTokens.length === 0) return [];

  const tokens: DictationToken[] = rawTokens.map((raw, index) => {
    let start = 0;
    let end = raw.length;
    while (start < end && PUNCT_RE.test(raw[start])) start++;
    while (end > start && PUNCT_RE.test(raw[end - 1])) end--;

    const punctuationBefore = raw.slice(0, start);
    const cleanWord = raw.slice(start, end);
    const punctuationAfter = raw.slice(end);

    return {
      index,
      raw,
      cleanWord,
      punctuationBefore,
      punctuationAfter,
      isBlank: false,
    };
  });

  const realWordIndices = tokens
    .filter((t) => t.cleanWord.length > 0 && HANZI_OR_WORD_RE.test(t.cleanWord))
    .map((t) => t.index);

  if (realWordIndices.length === 0) return tokens;

  const rawTargetCount = Math.max(
    1,
    Math.round((realWordIndices.length * ratio) / 100)
  );
  const targetBlankCount =
    ratio === 20
      ? Math.min(realWordIndices.length, 2, rawTargetCount)
      : Math.min(realWordIndices.length, rawTargetCount);

  const prioritySet = new Set(
    (priorityKeywords ?? []).map((k) => k.trim()).filter(Boolean)
  );

  const priorityIndices: number[] = [];
  const remainingIndices: number[] = [];

  for (const idx of realWordIndices) {
    if (prioritySet.has(tokens[idx].cleanWord)) {
      priorityIndices.push(idx);
    } else {
      remainingIndices.push(idx);
    }
  }

  const seed = textZh.length + ratio;
  const sortDeterministically = (indices: number[]): number[] =>
    [...indices].sort((a, b) => {
      const scoreA = deterministicScore(tokens[a].cleanWord, a, seed);
      const scoreB = deterministicScore(tokens[b].cleanWord, b, seed);
      if (scoreA !== scoreB) return scoreA - scoreB;
      return a - b;
    });

  const selected = new Set<number>();

  for (const idx of sortDeterministically(priorityIndices)) {
    if (selected.size >= targetBlankCount) break;
    selected.add(idx);
  }

  for (const idx of sortDeterministically(remainingIndices)) {
    if (selected.size >= targetBlankCount) break;
    selected.add(idx);
  }

  return tokens.map((token) => ({
    ...token,
    isBlank: selected.has(token.index),
  }));
}

export function checkDictationWord(input: string, target: string): boolean {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedTarget = target.trim().toLowerCase();
  if (!normalizedTarget) return false;
  return normalizedInput === normalizedTarget;
}

export function getHintForWord(currentInput: string, target: string): string {
  const cleanTarget = target.trim();
  if (!cleanTarget) return "";
  const cleanInput = currentInput.trim();
  let matchedLen = 0;
  const maxCheck = Math.min(cleanInput.length, cleanTarget.length);
  while (matchedLen < maxCheck && cleanInput[matchedLen] === cleanTarget[matchedLen]) {
    matchedLen += 1;
  }
  if (matchedLen >= cleanTarget.length) {
    return cleanTarget;
  }
  return cleanTarget.slice(0, matchedLen + 1);
}
