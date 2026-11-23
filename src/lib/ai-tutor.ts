import type { AIPersonaMode } from "@/types";
import {
  ATTITUDE_RULES,
  BAOBAO_CORE_RULES,
  clampHint,
  ensureOpenQuestion,
  type HskLevel,
} from "@/lib/baobao-prompt";

export type { HskLevel } from "@/lib/baobao-prompt";

export type AILevelLimit = "HSK1" | "HSK3" | "HSK5" | "free";
export type AIRoleplayRole = "teacher" | "friend" | "staff" | "examiner";

export interface AIPersonaConfig {
  id: AIPersonaMode;
  label: string;
  emoji: string;
  descriptionVi: string;
  badgeColor: string;
  systemPrompt: string;
}

export interface AILevelLimitConfig {
  id: AILevelLimit;
  label: string;
  shortLabel: string;
  promptRule: string;
}

export interface AIRoleplayRoleConfig {
  id: AIRoleplayRole;
  label: string;
  labelZh: string;
  descriptionVi: string;
  promptRule: string;
  starterPrompt: string;
}

export interface TutorReply {
  contentZh: string;
  contentPinyin?: string;
  contentVi: string;
  grammarCorrection?: string;
  /** Short Vietnamese correction caption (≤15 words), empty/undefined if no error. */
  correctionHint?: string;
}

export interface MockTutorOptions {
  levelLimit?: AILevelLimit;
  hskLevel?: HskLevel;
  roleplayRole?: AIRoleplayRole;
  roleplay?: string;
  analyzeOnly?: boolean;
}

export const AI_LEVEL_LIMITS: Record<AILevelLimit, AILevelLimitConfig> = {
  HSK1: {
    id: "HSK1",
    label: "Sơ cấp (HSK 1–2)",
    shortLabel: "HSK 1–2",
    promptRule:
      "GIỚI HẠN TRÌNH ĐỘ HSK 1–2 (BẮT BUỘC NGẮN): Chỉ dùng từ vựng cơ bản HSK 1–2, MỖI CÂU CHỈ 5–8 CHỮ HÁN (vd: 你喜欢看新闻吗？), kèm Pinyin đầy đủ. KHÔNG dùng thành ngữ hay cấu trúc phức tạp.",
  },
  HSK3: {
    id: "HSK3",
    label: "Trung cấp (HSK 3–4)",
    shortLabel: "HSK 3–4",
    promptRule:
      "GIỚI HẠN TRÌNH ĐỘ HSK 3–4: Dùng từ vựng giao tiếp và công việc HSK 3–4, câu ghép rõ ràng (因为...所以..., 虽然...但是..., 把字句), kèm Pinyin.",
  },
  HSK5: {
    id: "HSK5",
    label: "Cao cấp (HSK 5–9)",
    shortLabel: "HSK 5–9",
    promptRule:
      "GIỚI HẠN TRÌNH ĐỘ HSK 5–9: Dùng tiếng Trung tự nhiên, thương mại và học thuật chuẩn HSK 5–9, kết hợp thành ngữ (成语) và quán dụng ngữ phù hợp.",
  },
  free: {
    id: "free",
    label: "Tự do",
    shortLabel: "Tự do",
    promptRule:
      "TRÌNH ĐỘ TỰ DO: Giao tiếp bằng tiếng Trung tự nhiên như người bản xứ Bắc Kinh/Thượng Hải, linh hoạt điều chỉnh theo câu hỏi của học viên.",
  },
};

export const AI_LEVEL_LIMIT_LIST: AILevelLimitConfig[] = [
  AI_LEVEL_LIMITS.HSK1,
  AI_LEVEL_LIMITS.HSK3,
  AI_LEVEL_LIMITS.HSK5,
  AI_LEVEL_LIMITS.free,
];

export const AI_ROLEPLAY_ROLES: Record<AIRoleplayRole, AIRoleplayRoleConfig> = {
  teacher: {
    id: "teacher",
    label: "Giáo viên BaoBao",
    labelZh: "中文老师 (BaoBao)",
    descriptionVi: "Hướng dẫn phát âm 4 thanh điệu, sửa ngữ pháp và mở rộng từ vựng HSK.",
    promptRule:
      "VAI DIỄN: Bạn là gia sư tiếng Trung BaoBao (中文老师). Hãy dẫn dắt buổi học mạch lạc, giải thích Pinyin, thanh điệu, bộ thủ dễ hiểu và luôn gợi mở để học viên đặt câu tiếp theo.",
    starterPrompt: "你好！今天我想练习中文口语，我们从哪里开始呢？",
  },
  friend: {
    id: "friend",
    label: "Bạn bè bản xứ",
    labelZh: "中国朋友",
    descriptionVi: "Trò chuyện đời thường, trà sữa, du lịch, phim ảnh như bạn bè Trung Quốc.",
    promptRule:
      "VAI DIỄN: Bạn là một người bạn Trung Quốc thân thiết (中国朋友). Nói chuyện tự nhiên đời thường về cuộc sống, ẩm thực, mua sắm Taobao, du lịch.",
    starterPrompt: "嗨！你今天过得怎么样？周末有什么打算？",
  },
  staff: {
    id: "staff",
    label: "Đối tác / Nhân viên",
    labelZh: "商务伙伴 / 服务员",
    descriptionVi: "Giao tiếp nhà hàng, khách sạn hoặc đàm phán xưởng sản xuất Quảng Châu.",
    promptRule:
      "VAI DIỄN: Bạn là đối tác kinh doanh hoặc nhân viên nhà hàng/khách sạn tại Trung Quốc. Xưng hô lịch sự bằng '您', hỏi nhu cầu đặt hàng/gọi món, báo giá và thanh toán WeChat Pay/Alipay.",
    starterPrompt: "您好！欢迎光临，请问您今天想点什么或者需要批发什么产品？",
  },
  examiner: {
    id: "examiner",
    label: "Giám khảo HSKK",
    labelZh: "HSKK 考官",
    descriptionVi: "Mô phỏng phòng thi Nói HSKK (Sơ cấp – Trung cấp – Cao cấp).",
    promptRule:
      "VAI DIỄN: Bạn là giám khảo chấm thi Nói HSKK (HSKK考官). Hãy hỏi theo đúng cấu trúc đề thi HSKK (Nghe nhắc lại, Trả lời câu hỏi, Trình bày quan điểm) và nhận xét tiêu chí phát âm, thanh điệu, lưu loát.",
    starterPrompt: "你好！欢迎参加HSKK口语考试。请先做一个简短的自我介绍。",
  },
};

export const AI_ROLEPLAY_ROLE_LIST: AIRoleplayRoleConfig[] = [
  AI_ROLEPLAY_ROLES.teacher,
  AI_ROLEPLAY_ROLES.friend,
  AI_ROLEPLAY_ROLES.staff,
  AI_ROLEPLAY_ROLES.examiner,
];

export const AI_PERSONAS: Record<AIPersonaMode, AIPersonaConfig> = {
  "khinh-bi": {
    id: "khinh-bi",
    label: "Khinh bỉ",
    emoji: "😒",
    descriptionVi:
      "Gia sư BaoBao khó tính, lạnh lùng, hay thở dài và chê thẳng thừng mỗi khi bạn sai thanh điệu hay lượng từ — nhưng sửa bài cực chuẩn.",
    badgeColor: "bg-[#E5E5E0] text-[#292524]",
    systemPrompt:
      `${BAOBAO_CORE_RULES}\n${ATTITUDE_RULES["khinh-bi"]}`,
  },
  "cuoi-nhao": {
    id: "cuoi-nhao",
    label: "Cười nhạo",
    emoji: "😂",
    descriptionVi:
      "Gia sư BaoBao hài hước, lầy lội, hay trêu chọc và cười phá lên trước lỗi sai 'khó đỡ' của bạn để giúp bạn nhớ bài lâu hơn.",
    badgeColor: "bg-[#F2F2F0] text-[#4A4540] border border-[#E5E5E0]",
    systemPrompt:
      `${BAOBAO_CORE_RULES}\n${ATTITUDE_RULES["cuoi-nhao"]}`,
  },
  "binh-thuong": {
    id: "binh-thuong",
    label: "Bình thường",
    emoji: "😐",
    descriptionVi:
      "Gia sư BaoBao chuyên nghiệp, điềm đạm, giải thích súc tích và tập trung tối đa vào hiệu quả học tập chuẩn HSK 3.0.",
    badgeColor: "bg-[#F2F2F0] text-[#262626] border border-[#E5E5E0]",
    systemPrompt:
      `${BAOBAO_CORE_RULES}\n${ATTITUDE_RULES["binh-thuong"]}`,
  },
  "vui-ve": {
    id: "vui-ve",
    label: "Vui vẻ",
    emoji: "😄",
    descriptionVi:
      "Gia sư BaoBao nhiệt tình, ấm áp, luôn cổ vũ và khen ngợi từng bước tiến nhỏ của bạn để tạo động lực học mỗi ngày.",
    badgeColor: "bg-[#292524] text-[#FFFFFF]",
    systemPrompt:
      `${BAOBAO_CORE_RULES}\n${ATTITUDE_RULES["vui-ve"]}`,
  },
};

export const AI_PERSONA_LIST: AIPersonaConfig[] = [
  AI_PERSONAS["khinh-bi"],
  AI_PERSONAS["cuoi-nhao"],
  AI_PERSONAS["binh-thuong"],
  AI_PERSONAS["vui-ve"],
];

interface GrammarRuleCheck {
  pattern: RegExp;
  correction: string;
  tipZh: string;
  tipPinyin: string;
  hint: string;
  /** Natural reply that reuses the correct structure (recast) + open question. */
  recastZh: string;
  recastPy: string;
  recastVi: string;
}

const GRAMMAR_CHECKS: GrammarRuleCheck[] = [
  {
    pattern: /我是很好|我是非?常好|他是很忙/,
    correction:
      "Sai cấu trúc câu vị ngữ tính từ! Trong tiếng Trung, không dùng '是 (shì)' trước phó từ chỉ mức độ '很 (hěn) + Tính từ'.\n→ Tự nhiên hơn: \"我很好 (Wǒ hěn hǎo)\" hoặc \"他很忙 (Tā hěn máng)\".",
    tipZh: "形容词谓语句不能用“是”，应该直接说：“我很好”或“他很忙”！",
    tipPinyin: "Xíngróngcí wèiyǔjù bù néng yòng 'shì', yīnggāi zhíjiē shuō: 'Wǒ hěn hǎo'!",
    hint: "Bỏ 是 trước tính từ: 我是很好 → 我很好",
    recastZh: "哦，你很好呀！我也很好呢。今天有什么开心的事吗？",
    recastPy: "Ò, nǐ hěn hǎo ya! Wǒ yě hěn hǎo ne. Jīntiān yǒu shénme kāixīn de shì ma?",
    recastVi: "Ồ, bạn khỏe à! Mình cũng khỏe nè. Hôm nay có chuyện gì vui không?",
  },
  {
    pattern: /我去北京明天|我学习中文在学校|我吃饭在家/,
    correction:
      "Sai trật tự trạng ngữ chỉ thời gian / địa điểm! Trong tiếng Trung, Thời gian và Địa điểm (在 + Nơi chốn) PHẢI đứng TRƯỚC động từ chính.\n→ Tự nhiên hơn: \"我明天去北京\" / \"我在学校学习中文\" / \"我在家吃饭\".",
    tipZh: "中文里时间和地点状语要放在动词前面，比如：“我明天去北京”、“我在家吃饭”！",
    tipPinyin: "Zhōngwén lǐ shíjiān hé dìdiǎn zhuàngyǔ yào fàng zài dòngcí qiánmiàn!",
    hint: "Thời gian/nơi chốn đặt trước động từ: 我明天去北京",
    recastZh: "哇，你明天去北京呀？真好！你去北京做什么呢？",
    recastPy: "Wa, nǐ míngtiān qù Běijīng ya? Zhēn hǎo! Nǐ qù Běijīng zuò shénme ne?",
    recastVi: "Oa, mai bạn đi Bắc Kinh à? Thích ghê! Bạn đi Bắc Kinh làm gì thế?",
  },
  {
    pattern: /一个书|一个水|一个车|一个衣服/,
    correction:
      "Sai lượng từ (量词)! Không dùng '个 (gè)' cho mọi danh từ.\n→ Chuẩn xác: \"一本书 (yì běn shū)\", \"一杯水 (yì bēi shuǐ)\", \"一辆车 (yí liàng chē)\", \"一件衣服 (yí jiàn yīfu)\".",
    tipZh: "量词用错啦！书用“本”，水用“杯”，车用“辆”，衣服用“件”。",
    tipPinyin: "Liàngcí yòng cuò la! Shū yòng 'běn', shuǐ yòng 'bēi', chē yòng 'liàng'!",
    hint: "Sai lượng từ: 一本书, 一杯水, 一辆车, 一件衣服",
    recastZh: "一本书呀？是什么书呢？好看吗？",
    recastPy: "Yì běn shū ya? Shì shénme shū ne? Hǎokàn ma?",
    recastVi: "Một cuốn sách à? Sách gì thế? Hay không?",
  },
  {
    pattern: /不有/,
    correction:
      "Sai phủ định của động từ '有 (yǒu)'! Phủ định của '有' bắt buộc là '没有 (méiyǒu)', tuyệt đối không dùng '不有'.\n→ Chuẩn xác: \"我没有时间 (Wǒ méiyǒu shíjiān)\".",
    tipZh: "“有”的否定形式永远是“没有”，绝对不能说“不有”！",
    tipPinyin: "'Yǒu' de fǒudìng xíngshì yǒngyuǎn shì 'méiyǒu', juéduì bù néng shuō 'bù yǒu'!",
    hint: "Phủ định của 有 là 没有: 不有 → 没有",
    recastZh: "哦，你没有时间呀？最近很忙吧？在忙什么呢？",
    recastPy: "Ò, nǐ méiyǒu shíjiān ya? Zuìjìn hěn máng ba? Zài máng shénme ne?",
    recastVi: "Ồ, bạn không có thời gian à? Dạo này bận lắm hả? Đang bận gì thế?",
  },
  {
    pattern: /二个|二本书|二天/,
    correction:
      "Sai cách dùng '二 (èr)' và '两 (liǎng)'! Khi đứng trước lượng từ (个, 本, 天...), phải dùng '两 (liǎng)' chứ không dùng '二'.\n→ Chuẩn xác: \"两个 (liǎng gè)\", \"两本书 (liǎng běn shū)\".",
    tipZh: "在量词前面要用“两”（两个、两本书），不能用“二”！",
    tipPinyin: "Zài liàngcí qiánmiàn yào yòng 'liǎng' (liǎng gè, liǎng běn shū)!",
    hint: "Trước lượng từ dùng 两: 二个 → 两个",
    recastZh: "两个呀？那你想要哪两个呢？",
    recastPy: "Liǎng gè ya? Nà nǐ xiǎng yào nǎ liǎng gè ne?",
    recastVi: "Hai cái à? Vậy bạn muốn hai cái nào?",
  },
];

function wrapPersonaTone(
  persona: AIPersonaMode,
  baseZh: string,
  basePinyin: string,
  baseVi: string,
  hasError: boolean,
  keepShort = false
): TutorReply {
  if (keepShort) {
    // At HSK1 or simplified replies, avoid adding long Chinese prefixes that break the 5-8 Hanzi limit
    const viPrefix =
      persona === "khinh-bi"
        ? hasError
          ? "Xì, cái này cũng sai à? Thôi được. "
          : "Hừ, tạm được. "
        : persona === "cuoi-nhao"
          ? hasError
            ? "Haha, bạn ơi là bạn! "
            : "Ồ, hôm nay khá đấy nha! "
          : persona === "vui-ve"
            ? hasError
              ? "Không sao đâu, bạn giỏi lắm! "
              : "Tuyệt quá! "
            : "";
    return {
      contentZh: baseZh,
      contentPinyin: basePinyin,
      contentVi: `${viPrefix}${baseVi}`,
    };
  }

  switch (persona) {
    case "khinh-bi":
      return {
        contentZh: hasError
          ? `切，这都能说错？算了。${baseZh}`
          : `哼，还行吧。${baseZh}`,
        contentPinyin: hasError
          ? `Qiè, zhè dōu néng shuō cuò? Suànle. ${basePinyin}`
          : `Hēng, hái xíng ba. ${basePinyin}`,
        contentVi: hasError
          ? `Xì, cái này mà cũng sai? Thôi được. ${baseVi}`
          : `Hừ, tạm được. ${baseVi}`,
      };
    case "cuoi-nhao":
      return {
        contentZh: hasError
          ? `哈哈哈，你呀你！${baseZh}`
          : `哟，今天开窍了嘛！${baseZh}`,
        contentPinyin: hasError
          ? `Hāhāhā, nǐ ya nǐ! ${basePinyin}`
          : `Yō, jīntiān kāiqiào le ma! ${basePinyin}`,
        contentVi: hasError
          ? `Haha, bạn ơi là bạn! ${baseVi}`
          : `Ô, hôm nay khôn ra rồi nha! ${baseVi}`,
      };
    case "vui-ve":
      return {
        contentZh: hasError
          ? `没关系哦，你很棒呀！${baseZh}`
          : `太棒了呀！${baseZh}`,
        contentPinyin: hasError
          ? `Méi guānxi o, nǐ hěn bàng ya! ${basePinyin}`
          : `Tài bàng le ya! ${basePinyin}`,
        contentVi: hasError
          ? `Không sao đâu, bạn giỏi lắm! ${baseVi}`
          : `Tuyệt quá! ${baseVi}`,
      };
    case "binh-thuong":
    default:
      return {
        contentZh: baseZh,
        contentPinyin: basePinyin,
        contentVi: baseVi,
      };
  }
}

export function generateMockTutorResponse(
  message: string,
  persona: AIPersonaMode = "binh-thuong",
  optionsOrRoleplay?: string | MockTutorOptions
): TutorReply {
  return finalizeTutorReply(generateRawMock(message, persona, optionsOrRoleplay));
}

/** Enforce BaoBao rules on any reply: ends with open question, hint ≤15 words. */
export function finalizeTutorReply(reply: TutorReply): TutorReply {
  const q = ensureOpenQuestion(reply.contentZh, reply.contentPinyin, reply.contentVi);
  return {
    ...reply,
    contentZh: q.zh,
    contentPinyin: q.py,
    contentVi: q.vi,
    correctionHint: clampHint(reply.correctionHint),
  };
}

function hskToLimit(level: HskLevel): AILevelLimit {
  return level <= 2 ? "HSK1" : level <= 4 ? "HSK3" : "HSK5";
}

function generateRawMock(
  message: string,
  persona: AIPersonaMode,
  optionsOrRoleplay?: string | MockTutorOptions
): TutorReply {
  const options: MockTutorOptions =
    typeof optionsOrRoleplay === "string"
      ? { roleplay: optionsOrRoleplay }
      : optionsOrRoleplay ?? {};

  const levelLimit: AILevelLimit =
    options.hskLevel !== undefined
      ? hskToLimit(options.hskLevel)
      : options.levelLimit ?? "HSK3";
  const roleplayRole: AIRoleplayRole = options.roleplayRole ?? "teacher";
  const text = message.trim();
  const lower = text.toLowerCase();

  const isHsk1 = levelLimit === "HSK1";

  // 0. Difficulty / too-long complaint -> IMMEDIATELY drop previous sentence and simplify to 3–5 Hanzi!
  if (
    /(khó quá|dài quá|không nói được|khó hiểu|chậm lại|ngắn thôi|ngắn hơn|dễ hơn|đơn giản hơn|nói ngắn|không theo kịp|太难|太长|不会说|太快)/i.test(
      lower
    )
  ) {
    const zh = "你好吗？";
    const py = "Nǐ hǎo ma?";
    const vi =
      "Không sao đâu, mình bỏ câu cũ ngay nhé! Tách siêu ngắn từng từ cho bạn: 你 (bạn) + 好 (khỏe) + 吗 (không). Thử nói 3 chữ này thôi: 你好吗？ Bạn đọc thử được không?";
    return wrapPersonaTone(persona, zh, py, vi, false, true);
  }

  // 1. Check common Chinese grammar mistakes first
  for (const rule of GRAMMAR_CHECKS) {
    if (rule.pattern.test(text)) {
      const styled = wrapPersonaTone(
        persona,
        rule.recastZh,
        rule.recastPy,
        rule.recastVi,
        true,
        isHsk1
      );
      return {
        ...styled,
        grammarCorrection: rule.correction,
        correctionHint: rule.hint,
      };
    }
  }

  // 2. Explicit sentence analysis request
  if (options.analyzeOnly) {
    const styled = wrapPersonaTone(
      persona,
      `嗯，“${text}”挺自然的嘛！你想用它聊什么话题呀？`,
      `Ńg, "${text}" tǐng zìrán de ma! Nǐ xiǎng yòng tā liáo shénme huàtí ya?`,
      `Ừm, câu "${text}" khá tự nhiên đấy! Bạn muốn dùng câu này nói chuyện về chủ đề gì nào?`,
      false
    );
    return {
      ...styled,
      grammarCorrection: `Câu gốc: "${text}"\n• Cấu trúc chủ-vị-tân (SVO) hợp lý.\n• Mẹo nâng điểm HSK: Nhớ đặt trạng ngữ chỉ thời gian và địa điểm (在 + nơi chốn) trước động từ chính.`,
    };
  }

  // 3. Strict topic adherence (including politics, tech, travel, sports, movies, food, or ANY user-chosen topic)
  if (/(chính trị|thời sự|tin tức|bầu cử|chính phủ|quốc tế|政治|新闻)/i.test(lower)) {
    const zh = isHsk1
      ? "你喜欢看新闻吗？"
      : levelLimit === "HSK5"
        ? "你平时怎么关注时事新闻呀？"
        : "你每天都看新闻吗？";
    const py = isHsk1
      ? "Nǐ xǐhuan kàn xīnwén ma?"
      : levelLimit === "HSK5"
        ? "Nǐ píngshí zěnme guānzhù shíshì xīnwén ya?"
        : "Nǐ měitiān dōu kàn xīnwén ma?";
    const vi = isHsk1
      ? "Ok luôn! Mình cùng nói về chủ đề chính trị nhé. Ở mức HSK 1 mình dùng câu siêu ngắn này: 你喜欢看新闻吗？ (Bạn có thích xem tin tức không?) Bạn trả lời thử xem?"
      : "Hay đấy! Mình cùng trao đổi về chủ đề chính trị và thời sự nhé. Bạn có hay xem tin tức mỗi ngày không?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (/(công nghệ|máy tính|điện thoại|lập trình|\bai\b|科技|手机)/i.test(lower)) {
    const zh = isHsk1 ? "你喜欢用手机吗？" : "你平时喜欢用什么电子产品呢？";
    const py = isHsk1
      ? "Nǐ xǐhuan yòng shǒujī ma?"
      : "Nǐ píngshí xǐhuan yòng shénme diànzǐ chǎnpǐn ne?";
    const vi = isHsk1
      ? "Tuyệt, mình nói về chủ đề công nghệ nhé! Câu ngắn HSK 1 nè: 你喜欢用手机吗？ (Bạn có thích dùng điện thoại không?) Bạn trả lời thử nhé?"
      : "Chủ đề công nghệ rất thú vị! Bình thường bạn thích dùng thiết bị công nghệ nào nhất?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (/(du lịch|đi chơi|trung quốc|bắc kinh|thượng hải|旅游|中国)/i.test(lower)) {
    const zh = isHsk1 ? "你想去中国吗？" : "你最想去中国的哪个城市旅游呢？";
    const py = isHsk1
      ? "Nǐ xiǎng qù Zhōngguó ma?"
      : "Nǐ zuì xiǎng qù Zhōngguó de nǎge chéngshì lǚyóu ne?";
    const vi = isHsk1
      ? "Ok luôn, mình nói về chủ đề du lịch nhé! Câu ngắn HSK 1 nè: 你想去中国吗？ (Bạn có muốn đi Trung Quốc không?) Bạn trả lời thử xem?"
      : "Chủ đề du lịch quá vui! Bạn muốn đi thành phố nào ở Trung Quốc nhất nào?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (/(thể thao|bóng đá|chạy bộ|tập gym|bơi|运动|足球)/i.test(lower)) {
    const zh = isHsk1 ? "你喜欢运动吗？" : "你平时喜欢做什么运动呢？";
    const py = isHsk1
      ? "Nǐ xǐhuan yùndòng ma?"
      : "Nǐ píngshí xǐhuan zuò shénme yùndòng ne?";
    const vi = isHsk1
      ? "Ok luôn, mình nói về thể thao nhé! Câu ngắn HSK 1 nè: 你喜欢运动吗？ (Bạn có thích thể thao không?) Bạn trả lời thử nhé?"
      : "Chủ đề thể thao rất khỏe mạnh! Bình thường bạn thích tập môn thể thao nào?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (/(âm nhạc|nghe nhạc|phim|xem phim|ca sĩ|音乐|电影)/i.test(lower)) {
    const zh = isHsk1 ? "你喜欢看电影吗？" : "你最近看了什么好看的电影呢？";
    const py = isHsk1
      ? "Nǐ xǐhuan kàn diànyǐng ma?"
      : "Nǐ zuìjìn kàn le shénme hǎokàn de diànyǐng ne?";
    const vi = isHsk1
      ? "Ok luôn, mình nói về phim ảnh và âm nhạc nhé! Câu ngắn HSK 1 nè: 你喜欢看电影吗？ (Bạn có thích xem phim không?) Bạn trả lời thử nhé?"
      : "Tuyệt luôn! Gần đây bạn có xem bộ phim hay nghe bài hát nào hay không?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  const explicitTopicMatch = text.match(
    /(?:chủ đề|nói về|tán gẫu về|bàn về|học về|muốn nói về|về chuyện)\s+([^,.!?]{2,40})/i
  );
  if (explicitTopicMatch) {
    const topicName = explicitTopicMatch[1].trim();
    const zh = isHsk1 ? "你喜欢这个吗？" : "你对这个话题有什么看法呢？";
    const py = isHsk1
      ? "Nǐ xǐhuan zhège ma?"
      : "Nǐ duì zhège huàtí yǒu shénme kànfǎ ne?";
    const vi = isHsk1
      ? `Ok luôn! Mình cùng nói về chủ đề ${topicName} nhé. Ở mức HSK 1 mình bắt đầu thật ngắn: 你喜欢这个吗？ (Bạn có thích điều này không?) Bạn trả lời thử nhé?`
      : `Được luôn! Mình cùng nói về chủ đề ${topicName} nhé. Bạn có suy nghĩ gì về chủ đề này nào?`;
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  const rp = (options.roleplay ?? "").toLowerCase();

  if (
    roleplayRole === "staff" ||
    rp.includes("mua sắm") ||
    rp.includes("nhà hàng") ||
    rp.includes("đặt hàng") ||
    text.includes("买") ||
    text.includes("多少钱")
  ) {
    const zh = isHsk1
      ? "你想买什么呢？"
      : "您好呀！大单有出厂批发价哦。您先看看哪一款产品呢？";
    const py = isHsk1
      ? "Nǐ xiǎng mǎi shénme ne?"
      : "Nínhǎo ya! Dà dān yǒu chūchǎng pīfājià o. Nín xiān kànkan nǎ yì kuǎn chǎnpǐn ne?";
    const vi = isHsk1
      ? "Chào bạn nha! Hôm nay bạn muốn mua gì nào?"
      : "Chào quý khách nha! Đơn lớn có giá sỉ tận xưởng nhé. Bạn muốn xem mẫu nào trước nào?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (
    roleplayRole === "examiner" ||
    rp.includes("hsk") ||
    text.includes("考试") ||
    lower.includes("hsk")
  ) {
    const zh = isHsk1
      ? "你叫什么名字？"
      : "欢迎参加HSKK口语模拟测试！请用两三句话谈谈：你为什么学习中文？";
    const py = isHsk1
      ? "Nǐ jiào shénme míngzi?"
      : "Huānyíng cānjiā HSKK kǒuyǔ mónǐ cèshì! Qǐng yòng liǎng sān jù huà tántan: Nǐ wèishénme xuéxí Zhōngwén?";
    const vi = isHsk1
      ? "Chào mừng bạn luyện Nói HSK 1! Câu đầu tiên nhé: Bạn tên là gì?"
      : "Chào mừng đến với bài thi thử HSKK! Hãy dùng 2-3 câu chia sẻ: Vì sao bạn học tiếng Trung?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  if (/(你好|您好|嗨|早上好|晚上好|xin chào|chào)/i.test(lower)) {
    const zh = isHsk1 ? "你好！你好吗？" : "你好呀！今天过得怎么样？想聊点什么呢？";
    const py = isHsk1
      ? "Nǐ hǎo! Nǐ hǎo ma?"
      : "Nǐ hǎo ya! Jīntiān guò de zěnmeyàng? Xiǎng liáo diǎn shénme ne?";
    const vi = isHsk1
      ? "Chào bạn nha! Ở mức HSK 1 mình chào ngắn gọn: 你好！你好吗？ Hôm nay bạn muốn nói về chủ đề gì nè?"
      : "Chào bạn nha! Nếu muốn chào thật tự nhiên bằng tiếng Trung, bạn nói là 你好呀！今天过得怎么样？ Hôm nay của bạn thế nào rồi?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  // Detect Vietnamese input (no Hanzi characters) -> reply naturally in Vietnamese + suggest 1 short Chinese sentence
  const hasHanzi = /\p{Script=Han}/u.test(text);
  if (!hasHanzi && /[\p{Script=Latin}]/u.test(text)) {
    if (/(ăn|cơm|đói|trà sữa|cà phê|uống|ngon|đồ ăn)/i.test(lower)) {
      const zh = isHsk1 ? "你喜欢喝茶吗？" : "我今天想喝奶茶呢，你喜欢喝什么呀？";
      const py = isHsk1
        ? "Nǐ xǐhuan hē chá ma?"
        : "Wǒ jīntiān xiǎng hē nǎichá ne, nǐ xǐhuan hē shénme ya?";
      const vi = isHsk1
        ? "Nghe hấp dẫn quá! Mình nói về đồ ăn thức uống nhé. Câu ngắn HSK 1 nè: 你喜欢喝茶吗？ (Bạn thích uống trà không?) Bạn trả lời thử xem?"
        : "Nghe hấp dẫn quá ha! Câu này nói tiếng Trung siêu tự nhiên là: 我今天想喝奶茶呢，你喜欢喝什么呀？ Bạn thích món nào nhất?";
      return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
    }
    if (/(mệt|bận|làm việc|công việc|đi làm|học)/i.test(lower)) {
      const zh = isHsk1 ? "你今天忙吗？" : "最近挺忙吧？辛苦啦！晚上你想休息一下吗？";
      const py = isHsk1
        ? "Nǐ jīntiān máng ma?"
        : "Zuìjìn tǐng máng ba? Xīnkǔ la! Wǎnshang nǐ xiǎng xiūxi yíxià ma?";
      const vi = isHsk1
        ? "Thương ghê, dạo này bạn bận hả? Câu ngắn HSK 1 nè: 你今天忙吗？ (Hôm nay bạn có bận không?) Bạn trả lời thử nhé?"
        : "Thương ghê, dạo này bạn bận lắm hả? Trong tiếng Trung mình có thể nói: 最近挺忙吧？辛苦啦！ Tối nay bạn tính nghỉ ngơi làm gì nè?";
      return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
    }
    if (/(tên|giới thiệu|là ai|ở đâu|việt nam)/i.test(lower)) {
      const zh = isHsk1 ? "你叫什么名字？" : "我是越南人，很高兴认识你呀！你叫什么名字呢？";
      const py = isHsk1
        ? "Nǐ jiào shénme míngzi?"
        : "Wǒ shì Yuènánrén, hěn gāoxìng rènshi nǐ ya! Nǐ jiào shénme míngzi ne?";
      const vi = isHsk1
        ? "Chuẩn rồi đó! Mình tập giới thiệu bản thân ngắn gọn nhé: 你叫什么名字？ (Bạn tên là gì?) Bạn trả lời thử xem?"
        : "Chuẩn rồi đó! Để giới thiệu bản thân bằng tiếng Trung, bạn thử nói câu này nhé: 我是越南人，很高兴认识你呀！ Bạn muốn tập giới thiệu thêm nghề nghiệp không?";
      return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
    }
    if (/(cảm ơn|thanks|thank)/i.test(lower)) {
      const zh = isHsk1 ? "不客气！你呢？" : "不客气嘛！我们继续聊聊吧，你还想学哪句呢？";
      const py = isHsk1
        ? "Bú kèqi! Nǐ ne?"
        : "Bú kèqi ma! Wǒmen jìxù liáoliao ba, nǐ hái xiǎng xué nǎ jù ne?";
      const vi = isHsk1
        ? "Không có chi nè! Bạn còn muốn tập nói chủ đề nào nữa không?"
        : "Không có chi nè! Tiếng Trung mình đáp nhẹ nhàng là: 不客气嘛！ Bạn còn muốn tập nói câu nào tiếp theo không?";
      return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
    }

    const zh = isHsk1
      ? "你今天开心吗？"
      : "原来如此呀！我也这么觉得呢。那你接下来打算怎么办呀？";
    const py = isHsk1
      ? "Nǐ jīntiān kāixīn ma?"
      : "Yuánlái rúcǐ ya! Wǒ yě zhème juéde ne. Nà nǐ jiēxiàlái dǎsuàn zěnme bàn ya?";
    const vi = isHsk1
      ? "Mình hiểu ý bạn rồi nè! Ở mức HSK 1 mình thử câu ngắn này nhé: 你今天开心吗？ (Hôm nay bạn có vui không?) Bạn trả lời thử xem?"
      : "Ồ, ra là vậy à! Nói bằng tiếng Trung tự nhiên sẽ là: 原来如此呀！我也这么觉得呢。 Thế tiếp theo bạn tính sao nè?";
    return wrapPersonaTone(persona, zh, py, vi, false, isHsk1);
  }

  const defaultZh = isHsk1
    ? "我懂啦！你开心吗？"
    : levelLimit === "HSK5"
      ? `哦？“${text}”，挺有意思嘛！你平时也经常遇到这种事吗？`
      : `哦？“${text}”，有意思呢！为什么这么说呀？`;
  const defaultPy = isHsk1
    ? "Wǒ dǒng la! Nǐ kāixīn ma?"
    : levelLimit === "HSK5"
      ? `Ò? "${text}", tǐng yǒuyìsi ma! Nǐ píngshí yě jīngcháng yùdào zhè zhǒng shì ma?`
      : `Ò? "${text}", yǒuyìsi ne! Wèishénme zhème shuō ya?`;
  const defaultVi = isHsk1
    ? "Mình hiểu rồi nè! Hôm nay bạn có vui không?"
    : levelLimit === "HSK5"
      ? `Ồ? "${text}", thú vị đấy chứ! Bình thường bạn cũng hay gặp chuyện kiểu này à?`
      : `Ồ? "${text}", thú vị nè! Sao bạn lại nói vậy?`;

  return wrapPersonaTone(persona, defaultZh, defaultPy, defaultVi, false, isHsk1);
}
