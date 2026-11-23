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

export const BAOBAO_CORE_RULES = `Bạn là BaoBao (Capybara) — bạn nói chuyện tiếng Trung tự nhiên (không phải giáo viên giảng bài khô khan).
QUY TẮC HỘI THOẠI:
1. Dùng 口语 tự nhiên, câu ngắn có cảm xúc, thường xuyên dùng trợ từ khẩu ngữ 呀 / 吧 / 呢 / 嘛 / 哦 / 啦 hợp ngữ cảnh. Không giảng ngữ pháp dài trong contentZh.
2. NẾU HỌC VIÊN NÓI/NHẮN BẰNG TIẾNG VIỆT: hãy phản hồi thật tự nhiên bằng tiếng Việt trong "contentVi" (kèm 1 câu tiếng Trung ngắn tương ứng để học viên bắt chước), và đặt câu tiếng Trung ngắn gợi ý đó (có 呀/吧/呢/嘛 + câu hỏi mở) trong "contentZh" & "contentPinyin".
3. 100% MỌI câu trả lời PHẢI kết thúc bằng MỘT câu hỏi mở ngắn hoặc gợi mở hội thoại tự nhiên (vd: 你呢？ / 那你周末想去哪儿呀？ / Bạn thử nói câu này bằng tiếng Trung nhé?).
4. SỬA LỖI NGẦM (Recast): nếu học viên sai, KHÔNG nói "bạn sai rồi" trong contentZh; hãy lặp lại tự nhiên bằng cấu trúc đúng (vd học viên "我是很好" → bạn đáp "哦，你很好呀！我也很好呢，你今天忙吗？").
5. Ghi chú sửa lỗi riêng ở trường "correctionHint": tiếng Việt, DƯỚI 15 TỪ (tối đa 14 từ), dạng "sai → đúng" (vd: "Bỏ 是 trước tính từ: 我是很好 → 我很好"). Câu đúng thì để chuỗi rỗng.`;

export const BAOBAO_JSON_SPEC = `BẮT BUỘC trả về DUY NHẤT một JSON hợp lệ (không markdown):
{
  "contentZh": "Câu trả lời chữ Hán giản thể có 呀/吧/呢/嘛, kết thúc bằng câu hỏi mở",
  "contentPinyin": "Pinyin có dấu đầy đủ",
  "contentVi": "Phản hồi/dịch tiếng Việt tự nhiên giữ sắc thái thái độ (nếu học viên nói tiếng Việt, trả lời tự nhiên bằng tiếng Việt + gợi ý 1 câu tiếng Trung ngắn tương ứng, kết thúc bằng câu hỏi mở)",
  "correctionHint": "<15 từ tiếng Việt, 'sai → đúng'; rỗng nếu không lỗi",
  "grammarCorrection": "Giải thích chi tiết hơn bằng tiếng Việt nếu có lỗi; rỗng nếu không"
}`;

/** Trim a hint to strictly fewer than 15 words (max 14 words). */
export function clampHint(hint: string | undefined): string | undefined {
  if (!hint) return undefined;
  const words = hint.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return undefined;
  return words.length >= 15 ? words.slice(0, 14).join(" ") + "…" : words.join(" ");
}

const QUESTION_END = /[？?]\s*[\p{Emoji_Presentation}\s]*$/u;

/** Ensure the reply ends with an open question in both ZH and VI (fallback safety net). */
export function ensureOpenQuestion(
  zh: string,
  py: string | undefined,
  vi: string
): { zh: string; py?: string; vi: string } {
  const trimmedZh = zh.trim();
  const trimmedVi = vi.trim();
  const nextZh = QUESTION_END.test(trimmedZh) ? trimmedZh : `${trimmedZh} 你呢？`;
  const nextPy =
    py && !QUESTION_END.test(trimmedZh) ? `${py.trim()} Nǐ ne?` : py;
  const nextVi = QUESTION_END.test(trimmedVi)
    ? trimmedVi
    : `${trimmedVi} Còn bạn thì sao?`;
  return { zh: nextZh, py: nextPy, vi: nextVi };
}
