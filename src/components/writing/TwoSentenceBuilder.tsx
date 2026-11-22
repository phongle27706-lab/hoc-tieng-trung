"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  PenTool,
  RotateCcw,
  Sparkles,
  Volume2,
} from "lucide-react";
import { InteractiveChineseText } from "@/components/dictionary/InteractiveChineseText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EDITORIAL_EASE } from "@/components/ui/MotionPrimitives";
import { speakChinese } from "@/lib/speech";
import { getVocabSentencesMap, saveVocabSentences } from "@/lib/storage";

export interface TwoSentenceBuilderProps {
  targetWord: string;
  vocabId?: string;
  pinyin?: string;
  meaningVi?: string;
  onSuccess?: (sentences: [string, string]) => void;
}

interface SentenceEvaluation {
  valid: boolean;
  score: number;
  hanziCount: number;
  errorsVi: string[];
  grammarWarningsVi: string[];
  naturalSuggestionZh: string;
  naturalSuggestionPinyin: string;
  naturalSuggestionVi: string;
}

const HANZI_CHAR_REGEX = /[\u4e00-\u9fff]/g;

function countHanzi(str: string): number {
  const matches = str.match(HANZI_CHAR_REGEX);
  return matches ? matches.length : 0;
}

function normalizeSentenceForCompare(str: string): string {
  return str
    .trim()
    .replace(/[，。！？、；：“”‘’.,!?;:\s]/g, "")
    .toLowerCase();
}

function buildSuggestionsForWord(
  targetWord: string,
  meaningVi?: string
): {
  s1Zh: string;
  s1Pinyin: string;
  s1Vi: string;
  s2Zh: string;
  s2Pinyin: string;
  s2Vi: string;
} {
  const w = targetWord.trim() || "学习";
  const m = meaningVi ? ` (${meaningVi})` : "";
  return {
    s1Zh: `我每天都在生活中认真使用“${w}”这个词。`,
    s1Pinyin: `Wǒ měitiān dōu zài shēnghuó zhōng rènzhēn shǐyòng "${w}" zhège cí.`,
    s1Vi: `Mỗi ngày trong đời sống tôi đều nghiêm túc sử dụng từ "${w}"${m}.`,
    s2Zh: `在跟中国客户谈业务时，“${w}”非常重要。`,
    s2Pinyin: `Zài gēn Zhōngguó kèhù tán yèwù shí, "${w}" fēicháng zhòngyào.`,
    s2Vi: `Khi đàm phán công việc với khách hàng Trung Quốc, "${w}"${m} vô cùng quan trọng.`,
  };
}

function evaluateSingleChineseSentence(
  raw: string,
  targetWord: string,
  contextIndex: 1 | 2,
  meaningVi?: string
): SentenceEvaluation {
  const trimmed = raw.trim();
  const errorsVi: string[] = [];
  const grammarWarningsVi: string[] = [];
  const hanziCount = countHanzi(trimmed);
  const suggestions = buildSuggestionsForWord(targetWord, meaningVi);

  // 1. Check targetWord inclusion
  if (!trimmed.includes(targetWord.trim())) {
    errorsVi.push(`Câu ${contextIndex} bắt buộc phải chứa từ vựng mục tiêu "${targetWord}".`);
  }

  // 2. Check minimum length (>= 5 Hanzi characters)
  if (hanziCount < 5) {
    errorsVi.push(
      `Câu ${contextIndex} quá ngắn (hiện có ${hanziCount} chữ Hán, yêu cầu tối thiểu >= 5 chữ Hán có cấu trúc Chủ - Vị hoàn chỉnh).`
    );
  }

  // 3. Classic Chinese grammar error checks for Vietnamese learners:
  // Error A: 不有 -> 没有
  if (trimmed.includes("不有")) {
    errorsVi.push(
      "Lỗi ngữ pháp kinh điển: Tiếng Trung KHÔNG dùng “不有”, phải đổi thành “没有” (méiyǒu)."
    );
  }

  // Error B: 是 + 很 + Adj (e.g. 我是很忙 / 他是很好)
  if (/是(很|非常|太|真|特别)[\u4e00-\u9fff]/.test(trimmed) && !trimmed.includes("的是")) {
    grammarWarningsVi.push(
      "Lưu ý ngữ pháp: Trong câu vị ngữ tính từ tiếng Trung, KHÔNG dùng “是” trước “很 / 非常 + Tính từ” (VD: nói “我很忙” thay vì “我是很忙”)."
    );
  }

  // Error C: 二个 / 二本 / 二件 -> 两个
  if (/二(个|本|件|家|位|只|条|张|杯|碗|岁|天|年)/.test(trimmed)) {
    grammarWarningsVi.push(
      "Lưu ý lượng từ: Khi đi trước lượng từ (个, 本, 件...), phải dùng “两” (liǎng) chứ không dùng “二” (èr)."
    );
  }

  // Error D: Vietnamese word order for time/place at the end after verb (e.g., "...工作在河内" or "...学习在今天")
  if (/(工作|学习|吃饭|见面|开会|买东西)在[\u4e00-\u9fff]{2,}/.test(trimmed)) {
    grammarWarningsVi.push(
      "Lưu ý trật tự câu: Trạng ngữ chỉ địa điểm “在 + Nơi chốn” trong tiếng Trung thường đứng TRƯỚC động từ (Chủ ngữ + 在 + Địa điểm + Động từ)."
    );
  }

  // Error E: Punctuation check
  if (trimmed.length > 0 && !/[。！？!?]$/.test(trimmed)) {
    grammarWarningsVi.push(
      "Gợi ý hình thức: Hãy kết thúc câu tiếng Trung bằng dấu chấm câu chuẩn “。” hoặc “！” / “？”."
    );
  }

  let score = 100;
  score -= errorsVi.length * 40;
  score -= grammarWarningsVi.length * 10;
  score = Math.max(0, Math.min(100, score));

  return {
    valid: errorsVi.length === 0,
    score,
    hanziCount,
    errorsVi,
    grammarWarningsVi,
    naturalSuggestionZh: contextIndex === 1 ? suggestions.s1Zh : suggestions.s2Zh,
    naturalSuggestionPinyin:
      contextIndex === 1 ? suggestions.s1Pinyin : suggestions.s2Pinyin,
    naturalSuggestionVi: contextIndex === 1 ? suggestions.s1Vi : suggestions.s2Vi,
  };
}

export function TwoSentenceBuilder({
  targetWord,
  vocabId,
  pinyin,
  meaningVi,
  onSuccess,
}: TwoSentenceBuilderProps) {
  const storageKey = vocabId || `word_${targetWord.trim()}`;

  const [sentence1, setSentence1] = useState("");
  const [sentence2, setSentence2] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  // Load previously saved 2 sentences for this word if available
  useEffect(() => {
    const map = getVocabSentencesMap();
    const existing = map[storageKey] || map[targetWord.trim()];
    if (existing && Array.isArray(existing) && existing.length === 2) {
      setSentence1(existing[0]);
      setSentence2(existing[1]);
      setSubmitted(false);
      setSavedSuccess(false);
    } else {
      setSentence1("");
      setSentence2("");
      setSubmitted(false);
      setSavedSuccess(false);
    }
    setDuplicateError(null);
  }, [storageKey, targetWord]);

  const eval1 = useMemo(
    () => evaluateSingleChineseSentence(sentence1, targetWord, 1, meaningVi),
    [sentence1, targetWord, meaningVi]
  );

  const eval2 = useMemo(
    () => evaluateSingleChineseSentence(sentence2, targetWord, 2, meaningVi),
    [sentence2, targetWord, meaningVi]
  );

  const suggestions = useMemo(
    () => buildSuggestionsForWord(targetWord, meaningVi),
    [targetWord, meaningVi]
  );

  const handleCheckAndSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setDuplicateError(null);

    const norm1 = normalizeSentenceForCompare(sentence1);
    const norm2 = normalizeSentenceForCompare(sentence2);

    if (norm1 && norm2 && norm1 === norm2) {
      setDuplicateError(
        "Hai câu không được trùng lặp nhau! Hãy đặt Câu 1 trong ngữ cảnh đời sống và Câu 2 trong ngữ cảnh công việc/mở rộng."
      );
      setSavedSuccess(false);
      return;
    }

    if (eval1.valid && eval2.valid) {
      const pair: [string, string] = [
        /[。！？!?]$/.test(sentence1.trim())
          ? sentence1.trim()
          : `${sentence1.trim()}。`,
        /[。！？!?]$/.test(sentence2.trim())
          ? sentence2.trim()
          : `${sentence2.trim()}。`,
      ];
      saveVocabSentences(storageKey, pair);
      setSavedSuccess(true);
      onSuccess?.(pair);
    } else {
      setSavedSuccess(false);
    }
  };

  const handleFillSample = () => {
    setSentence1(suggestions.s1Zh);
    setSentence2(suggestions.s2Zh);
    setSubmitted(false);
    setSavedSuccess(false);
    setDuplicateError(null);
  };

  return (
    <div className="rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E5E5E0] pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">Thực hành bắt buộc · Đặt 2 câu hoàn chỉnh</Badge>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#15803D]">
              <Sparkles className="h-3.5 w-3.5" />
              +15 XP khi hoàn thành
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-baseline gap-2.5">
            <h3 className="text-2xl font-bold text-[#262626]">{targetWord}</h3>
            {pinyin && (
              <span className="font-mono text-sm font-semibold text-[#6B655E]">
                [{pinyin}]
              </span>
            )}
            {meaningVi && (
              <span className="text-sm font-medium text-[#4A4540]">
                — {meaningVi}
              </span>
            )}
            <button
              type="button"
              onClick={() => speakChinese(targetWord, 0.9)}
              className="inline-flex items-center gap-1 rounded-lg bg-[#F2F2F0] px-2.5 py-1 text-xs font-semibold text-[#4A4540] transition-colors hover:bg-[#E5E5E0] cursor-pointer"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe từ
            </button>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleFillSample}
          className="gap-1.5"
        >
          <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" />
          Điền gợi ý mẫu để tham khảo
        </Button>
      </div>

      {/* Form: 2 Sentences */}
      <form onSubmit={handleCheckAndSave} className="mt-4 space-y-4">
        {/* Sentence 1 */}
        <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#262626]">
              Câu 1 · Ngữ cảnh Đời sống / Giao tiếp hằng ngày *
            </label>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium ${
                  eval1.hanziCount >= 5 ? "text-[#15803D]" : "text-[#737373]"
                }`}
              >
                {eval1.hanziCount} / 5+ chữ Hán
              </span>
              {sentence1.trim().length > 0 && (
                <button
                  type="button"
                  onClick={() => speakChinese(sentence1, 0.92)}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2 py-0.5 text-xs font-semibold text-[#6B655E] hover:text-[#262626] cursor-pointer"
                >
                  <Volume2 className="h-3 w-3" />
                  Nghe câu 1
                </button>
              )}
            </div>
          </div>

          <input
            type="text"
            value={sentence1}
            onChange={(e) => {
              setSentence1(e.target.value);
              setSavedSuccess(false);
            }}
            placeholder={`Nhập câu tiếng Trung thứ nhất có chứa "${targetWord}" (tối thiểu 5 chữ Hán)...`}
            className="mt-2 w-full rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-sm font-medium text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
          />

          {/* Feedback for Sentence 1 */}
          {submitted && (
            <div className="mt-2.5 space-y-1.5 text-xs">
              {eval1.errorsVi.map((err, i) => (
                <p key={i} className="flex items-start gap-1.5 font-medium text-[#B91C1C]">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{err}</span>
                </p>
              ))}
              {eval1.grammarWarningsVi.map((warn, i) => (
                <p key={i} className="flex items-start gap-1.5 text-[#A16207]">
                  <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{warn}</span>
                </p>
              ))}
              {eval1.valid && (
                <div className="rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] p-2.5 text-[#15803D]">
                  <p className="font-semibold">
                    ✓ Câu 1 hợp lệ ({eval1.score}/100 điểm ngữ pháp):{" "}
                    <InteractiveChineseText text={sentence1} />
                  </p>
                </div>
              )}
              <div className="rounded-lg border border-[#E5E5E0] bg-white px-3 py-2 text-[#57534E]">
                <span className="font-semibold text-[#262626]">Gợi ý câu mẫu tự nhiên 1: </span>
                <InteractiveChineseText text={eval1.naturalSuggestionZh} />{" "}
                <span className="font-mono text-[11px] text-[#6B655E]">
                  ({eval1.naturalSuggestionPinyin})
                </span>{" "}
                — <span>{eval1.naturalSuggestionVi}</span>
              </div>
            </div>
          )}
        </div>

        {/* Sentence 2 */}
        <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#262626]">
              Câu 2 · Ngữ cảnh Công việc / Thương mại / Mở rộng *
            </label>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium ${
                  eval2.hanziCount >= 5 ? "text-[#15803D]" : "text-[#737373]"
                }`}
              >
                {eval2.hanziCount} / 5+ chữ Hán
              </span>
              {sentence2.trim().length > 0 && (
                <button
                  type="button"
                  onClick={() => speakChinese(sentence2, 0.92)}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2 py-0.5 text-xs font-semibold text-[#6B655E] hover:text-[#262626] cursor-pointer"
                >
                  <Volume2 className="h-3 w-3" />
                  Nghe câu 2
                </button>
              )}
            </div>
          </div>

          <input
            type="text"
            value={sentence2}
            onChange={(e) => {
              setSentence2(e.target.value);
              setSavedSuccess(false);
            }}
            placeholder={`Nhập câu tiếng Trung thứ hai (khác Câu 1) có chứa "${targetWord}"...`}
            className="mt-2 w-full rounded-xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-sm font-medium text-[#262626] placeholder:text-[#A8A29E] focus:border-[#6B655E] focus:outline-none"
          />

          {/* Feedback for Sentence 2 */}
          {submitted && (
            <div className="mt-2.5 space-y-1.5 text-xs">
              {eval2.errorsVi.map((err, i) => (
                <p key={i} className="flex items-start gap-1.5 font-medium text-[#B91C1C]">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{err}</span>
                </p>
              ))}
              {eval2.grammarWarningsVi.map((warn, i) => (
                <p key={i} className="flex items-start gap-1.5 text-[#A16207]">
                  <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{warn}</span>
                </p>
              ))}
              {eval2.valid && (
                <div className="rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] p-2.5 text-[#15803D]">
                  <p className="font-semibold">
                    ✓ Câu 2 hợp lệ ({eval2.score}/100 điểm ngữ pháp):{" "}
                    <InteractiveChineseText text={sentence2} />
                  </p>
                </div>
              )}
              <div className="rounded-lg border border-[#E5E5E0] bg-white px-3 py-2 text-[#57534E]">
                <span className="font-semibold text-[#262626]">Gợi ý câu mẫu tự nhiên 2: </span>
                <InteractiveChineseText text={eval2.naturalSuggestionZh} />{" "}
                <span className="font-mono text-[11px] text-[#6B655E]">
                  ({eval2.naturalSuggestionPinyin})
                </span>{" "}
                — <span>{eval2.naturalSuggestionVi}</span>
              </div>
            </div>
          )}
        </div>

        {/* Duplicate or Global Success Banner */}
        <AnimatePresence mode="wait">
          {duplicateError && (
            <motion.div
              key="dup-err"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
              className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3.5 text-xs font-semibold text-[#B91C1C]"
            >
              {duplicateError}
            </motion.div>
          )}

          {savedSuccess && (
            <motion.div
              key="saved-ok"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
              className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-[#15803D]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">
                    Đã lưu 2 câu thực hành với từ &ldquo;{targetWord}&rdquo; vào Sổ tay (+15 XP)!
                  </p>
                  <p className="mt-0.5 opacity-90">
                    Điểm ngữ pháp trung bình:{" "}
                    <strong>{Math.round((eval1.score + eval2.score) / 2)}/100</strong>. Bạn có thể
                    bấm vào từng chữ Hán trong câu vừa đặt để tra từ điển.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setSentence1("");
              setSentence2("");
              setSubmitted(false);
              setSavedSuccess(false);
              setDuplicateError(null);
            }}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Xóa viết lại
          </Button>

          <Button type="submit" variant="primary" size="md">
            <PenTool className="h-4 w-4" />
            Chấm ngữ pháp & Lưu 2 câu (+15 XP)
          </Button>
        </div>
      </form>
    </div>
  );
}
