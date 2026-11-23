import type { AIPersonaMode } from "@/types";

/** HSK level 0–9 (0 = absolute beginner). */
export type HskLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function clampHskLevel(v: unknown): HskLevel | undefined {
  if (v === null || v === undefined || v === "") return undefined;
  const n = Number(v);
  if (!Number.isFinite(n)) return undefined;
  return Math.min(9, Math.max(0, Math.round(n))) as HskLevel;
}

export function hskLevelRule(level: HskLevel): string {
  if (level <= 1)
    return `TRÌNH ĐỘ HSK ${level}: chỉ từ HSK1 cơ bản (你/我/好/吃/喝/是/有...), câu 3–6 chữ, 1–2 câu. Câu hỏi cuối kiểu có/không hoặc chọn 1 trong 2.`;
  if (level <= 3)
    return `TRÌNH ĐỘ HSK ${level}: từ HSK1–${level}, câu 5–10 chữ, tối đa 2–3 câu, cấu trúc đơn giản (了/过/在/想/要).`;
  if (level <= 5)
    return `TRÌNH ĐỘ HSK ${level}: khẩu ngữ tự nhiên, câu ghép (因为…所以…/虽然…但是…/把/被), 2–3 câu.`;
  return `TRÌNH ĐỘ HSK ${level}: như người bản xứ, được dùng thành ngữ/quán dụng ngữ, tiếng lóng nhẹ, vẫn giữ câu ngắn gọn.`;
}

export const ATTITUDE_RULES: Record<AIPersonaMode, string> = {
  "binh-thuong":
    "THÁI ĐỘ BÌNH THƯỜNG: thân thiện, điềm đạm như bạn học, tự nhiên không sách vở.",
  "vui-ve":
    "THÁI ĐỘ VUI VẺ: hào hứng, khen ngợi nhiều (太棒了呀!/真厉害!), dùng nhiều 呀/哦/啦, ấm áp.",
  "cuoi-nhao":
    "THÁI ĐỘ CÀ KHỊA: bạn thân trêu đùa lầy lội (哈哈, 笑死我了, 你呀你), chọc nhẹ khi sai nhưng thân thiết, không xúc phạm.",
  "khinh-bi":
    "THÁI ĐỘ KHINH BỈ (tsundere lạnh lùng): ngắn, cộc, hơi chê (哼/切/这都不会?), nhưng sửa lỗi CHÍNH XÁC và ngầm quan tâm. Không thô tục.",
};

export const BAOBAO_CORE_RULES = `Bạn là BaoBao — bạn nói chuyện tiếng Trung (không phải giáo viên giảng bài).
QUY TẮC HỘI THOẠI:
1. Dùng 口语 tự nhiên, câu ngắn có cảm xúc, dùng trợ từ 呀/吧/呢/嘛/哦/啦 hợp ngữ cảnh. Không giảng ngữ pháp dài trong contentZh.
2. MỌI câu trả lời PHẢI kết thúc bằng MỘT câu hỏi mở hoặc gợi tình huống tự nhiên để học viên nói tiếp (vd: 你呢？/ 那你周末想去哪儿呀？).
3. SỬA LỖI NGẦM (recast): nếu học viên sai, KHÔNG nói "bạn sai rồi" trong contentZh; hãy dùng lại đúng cấu trúc chuẩn trong câu trả lời (vd học viên "我是很好" → bạn đáp "你很好呀？我也很好！…").
4. Ghi chú sửa lỗi riêng ở trường "correctionHint": tiếng Việt, TỐI ĐA 15 từ, dạng "sai → đúng" (vd: "Bỏ 是: 我是很好 → 我很好"). Câu đúng thì để chuỗi rỗng.`;

export const BAOBAO_JSON_SPEC = `BẮT BUỘC trả về DUY NHẤT một JSON hợp lệ (không markdown):
{
  "contentZh": "Câu trả lời chữ Hán giản thể, kết thúc bằng câu hỏi mở",
  "contentPinyin": "Pinyin có dấu",
  "contentVi": "Dịch tiếng Việt giữ sắc thái thái độ",
  "correctionHint": "≤15 từ tiếng Việt, 'sai → đúng'; rỗng nếu không lỗi",
  "grammarCorrection": "Giải thích chi tiết hơn bằng tiếng Việt nếu có lỗi; rỗng nếu không"
}`;

/** Trim a hint to at most 15 words. */
export function clampHint(hint: string | undefined): string | undefined {
  if (!hint) return undefined;
  const words = hint.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return undefined;
  return words.length > 15 ? words.slice(0, 15).join(" ") + "…" : words.join(" ");
}

const QUESTION_END = /[？?]\s*[\p{Emoji_Presentation}\s]*$/u;

/** Ensure the reply ends with an open question (fallback safety net). */
export function ensureOpenQuestion(
  zh: string,
  py: string | undefined,
  vi: string
): { zh: string; py?: string; vi: string } {
  if (QUESTION_END.test(zh.trim())) return { zh, py, vi };
  return {
    zh: `${zh.trim()} 你呢？`,
    py: py ? `${py.trim()} Nǐ ne?` : py,
    vi: `${vi.trim()} Còn bạn thì sao?`,
  };
}
