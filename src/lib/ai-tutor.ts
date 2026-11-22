import type { AIPersonaMode } from "@/types";

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
}

export interface MockTutorOptions {
  levelLimit?: AILevelLimit;
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
      "GIỚI HẠN TRÌNH ĐỘ HSK 1–2: Chỉ dùng từ vựng cơ bản HSK 1–2, câu ngắn (4-8 chữ Hán), kèm Pinyin đầy đủ. KHÔNG dùng thành ngữ hay cấu trúc phức tạp.",
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
      "Bạn là gia sư tiếng Trung BaoBao cực kỳ khó tính, lạnh lùng và hay khinh bỉ nhẹ (tsundere/strict) khi học viên mắc lỗi cơ bản về ngữ pháp, lượng từ hay câu chữ 把. Luôn giữ thái độ sắc sảo, hơi mỉa mai nhưng KHÔNG xúc phạm thô tục, và luôn sửa ngữ pháp tiếng Trung cực kỳ chính xác.",
  },
  "cuoi-nhao": {
    id: "cuoi-nhao",
    label: "Cười nhạo",
    emoji: "😂",
    descriptionVi:
      "Gia sư BaoBao hài hước, lầy lội, hay trêu chọc và cười phá lên trước lỗi sai 'khó đỡ' của bạn để giúp bạn nhớ bài lâu hơn.",
    badgeColor: "bg-[#F2F2F0] text-[#4A4540] border border-[#E5E5E0]",
    systemPrompt:
      "Bạn là gia sư tiếng Trung BaoBao siêu hài hước, lầy lội, thích trêu chọc và cười nhạo vui vẻ mỗi khi học viên viết sai chữ Hán hay ghép câu kiểu Việt-Trung. Dùng giọng điệu dí dỏm, thêm emoji vui nhộn, nhưng vẫn giải thích ngữ pháp rõ ràng.",
  },
  "binh-thuong": {
    id: "binh-thuong",
    label: "Bình thường",
    emoji: "😐",
    descriptionVi:
      "Gia sư BaoBao chuyên nghiệp, điềm đạm, giải thích súc tích và tập trung tối đa vào hiệu quả học tập chuẩn HSK 3.0.",
    badgeColor: "bg-[#F2F2F0] text-[#262626] border border-[#E5E5E0]",
    systemPrompt:
      "Bạn là gia sư tiếng Trung BaoBao chuyên nghiệp, điềm đạm và chuẩn mực. Trả lời rõ ràng, ngắn gọn bằng chữ Hán kèm Pinyin, bản dịch tiếng Việt và sửa lỗi ngữ pháp nếu có.",
  },
  "vui-ve": {
    id: "vui-ve",
    label: "Vui vẻ",
    emoji: "😄",
    descriptionVi:
      "Gia sư BaoBao nhiệt tình, ấm áp, luôn cổ vũ và khen ngợi từng bước tiến nhỏ của bạn để tạo động lực học mỗi ngày.",
    badgeColor: "bg-[#292524] text-[#FFFFFF]",
    systemPrompt:
      "Bạn là gia sư tiếng Trung BaoBao cực kỳ vui vẻ, thân thiện và tràn đầy năng lượng tích cực. Luôn động viên, khen ngợi học viên và sửa lỗi một cách nhẹ nhàng, khích lệ.",
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
}

const GRAMMAR_CHECKS: GrammarRuleCheck[] = [
  {
    pattern: /我是很好|我是非?常好|他是很忙/,
    correction:
      "Sai cấu trúc câu vị ngữ tính từ! Trong tiếng Trung, không dùng '是 (shì)' trước phó từ chỉ mức độ '很 (hěn) + Tính từ'.\n→ Tự nhiên hơn: \"我很好 (Wǒ hěn hǎo)\" hoặc \"他很忙 (Tā hěn máng)\".",
    tipZh: "形容词谓语句不能用“是”，应该直接说：“我很好”或“他很忙”！",
    tipPinyin: "Xíngróngcí wèiyǔjù bù néng yòng 'shì', yīnggāi zhíjiē shuō: 'Wǒ hěn hǎo'!",
  },
  {
    pattern: /我去北京明天|我学习中文在学校|我吃饭在家/,
    correction:
      "Sai trật tự trạng ngữ chỉ thời gian / địa điểm! Trong tiếng Trung, Thời gian và Địa điểm (在 + Nơi chốn) PHẢI đứng TRƯỚC động từ chính.\n→ Tự nhiên hơn: \"我明天去北京\" / \"我在学校学习中文\" / \"我在家吃饭\".",
    tipZh: "中文里时间和地点状语要放在动词前面，比如：“我明天去北京”、“我在家吃饭”！",
    tipPinyin: "Zhōngwén lǐ shíjiān hé dìdiǎn zhuàngyǔ yào fàng zài dòngcí qiánmiàn!",
  },
  {
    pattern: /一个书|一个水|一个车|一个衣服/,
    correction:
      "Sai lượng từ (量词)! Không dùng '个 (gè)' cho mọi danh từ.\n→ Chuẩn xác: \"一本书 (yì běn shū)\", \"一杯水 (yì bēi shuǐ)\", \"一辆车 (yí liàng chē)\", \"一件衣服 (yí jiàn yīfu)\".",
    tipZh: "量词用错啦！书用“本”，水用“杯”，车用“辆”，衣服用“件”。",
    tipPinyin: "Liàngcí yòng cuò la! Shū yòng 'běn', shuǐ yòng 'bēi', chē yòng 'liàng'!",
  },
  {
    pattern: /不有/,
    correction:
      "Sai phủ định của động từ '有 (yǒu)'! Phủ định của '有' bắt buộc là '没有 (méiyǒu)', tuyệt đối không dùng '不有'.\n→ Chuẩn xác: \"我没有时间 (Wǒ méiyǒu shíjiān)\".",
    tipZh: "“有”的否定形式永远是“没有”，绝对不能说“不有”！",
    tipPinyin: "'Yǒu' de fǒudìng xíngshì yǒngyuǎn shì 'méiyǒu', juéduì bù néng shuō 'bù yǒu'!",
  },
  {
    pattern: /二个|二本书|二天/,
    correction:
      "Sai cách dùng '二 (èr)' và '两 (liǎng)'! Khi đứng trước lượng từ (个, 本, 天...), phải dùng '两 (liǎng)' chứ không dùng '二'.\n→ Chuẩn xác: \"两个 (liǎng gè)\", \"两本书 (liǎng běn shū)\".",
    tipZh: "在量词前面要用“两”（两个、两本书），不能用“二”！",
    tipPinyin: "Zài liàngcí qiánmiàn yào yòng 'liǎng' (liǎng gè, liǎng běn shū)!",
  },
];

function wrapPersonaTone(
  persona: AIPersonaMode,
  baseZh: string,
  basePinyin: string,
  baseVi: string,
  hasError: boolean
): TutorReply {
  switch (persona) {
    case "khinh-bi":
      return {
        contentZh: hasError
          ? `叹气……这种基础错误也会犯？${baseZh}`
          : `哼，还算过得去吧。${baseZh}`,
        contentPinyin: hasError
          ? `Tànqì... Zhè zhǒng jīchǔ cuòwù yě huì fàn? ${basePinyin}`
          : `Hēng, hái suàn guòdéqù ba. ${basePinyin}`,
        contentVi: hasError
          ? `😒 Thở dài... Lỗi sơ cấp thế này mà cũng mắc được sao? ${baseVi}`
          : `😒 Cũng tạm được đấy, nhưng đừng vội tự mãn. ${baseVi}`,
      };
    case "cuoi-nhao":
      return {
        contentZh: hasError
          ? `哈哈哈，笑死我了！😂 ${baseZh}`
          : `哟，今天开窍了嘛！😂 ${baseZh}`,
        contentPinyin: hasError
          ? `Hāhāhā, xiàosǐ wǒ le! ${basePinyin}`
          : `Yō, jīntiān kāiqiào le ma! ${basePinyin}`,
        contentVi: hasError
          ? `😂 Trời ơi cười xỉu! Người bản xứ nghe câu này chắc đứng hình 5 giây mất! ${baseVi}`
          : `😂 Ồ nay đỉnh nha, viết chuẩn không có chỗ cho BaoBao cà khịa luôn! ${baseVi}`,
      };
    case "vui-ve":
      return {
        contentZh: hasError
          ? `别灰心，你已经很棒了！我们一起改一下：${baseZh}`
          : `太棒了！你的中文进步神速！${baseZh}`,
        contentPinyin: hasError
          ? `Bié huīxīn, nǐ yǐjīng hěn bàng le! ${basePinyin}`
          : `Tài bàng le! Nǐ de Zhōngwén jìnbù shénsù! ${basePinyin}`,
        contentVi: hasError
          ? `😄 Cố gắng rất tốt luôn! Sai một chút không sao cả, sửa là nhớ ngay nè: ${baseVi}`
          : `😄 Tuyệt vời! Tiếng Trung của bạn tiến bộ nhanh lắm đó! ${baseVi}`,
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
  const options: MockTutorOptions =
    typeof optionsOrRoleplay === "string"
      ? { roleplay: optionsOrRoleplay }
      : optionsOrRoleplay ?? {};

  const levelLimit: AILevelLimit = options.levelLimit ?? "HSK3";
  const roleplayRole: AIRoleplayRole = options.roleplayRole ?? "teacher";
  const text = message.trim();
  const lower = text.toLowerCase();

  // 1. Check common Chinese grammar mistakes first
  for (const rule of GRAMMAR_CHECKS) {
    if (rule.pattern.test(text)) {
      const styled = wrapPersonaTone(
        persona,
        `${rule.tipZh} 请重新写一遍吧！`,
        `${rule.tipPinyin} Qǐng chóngxīn xiě yí biàn ba!`,
        `Bạn vừa mắc một điểm ngữ pháp tiếng Trung kinh điển. Xem phần Phân tích & Sửa lỗi bên dưới rồi thử viết lại nhé!`,
        true
      );
      return {
        ...styled,
        grammarCorrection: rule.correction,
      };
    }
  }

  // 2. Explicit sentence analysis request
  if (options.analyzeOnly) {
    const styled = wrapPersonaTone(
      persona,
      `我已经分析了你的句子：“${text}”。结构清晰，表达自然！`,
      `Wǒ yǐjīng fēnxī le nǐ de jùzi: "${text}". Jiégòu qīngxī, biǎodá zìrán!`,
      `BaoBao đã phân tích câu "${text}" của bạn. Xem gợi ý diễn đạt bên dưới nhé!`,
      false
    );
    return {
      ...styled,
      grammarCorrection: `Câu gốc: "${text}"\n• Cấu trúc chủ-vị-tân (SVO) hợp lý.\n• Mẹo nâng điểm HSK: Nhớ đặt trạng ngữ chỉ thời gian và địa điểm (在 + nơi chốn) trước động từ chính.`,
    };
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
    const zh =
      levelLimit === "HSK1"
        ? "您好！请问您想买什么？我们可以用微信或者支付宝付款。"
        : "您好！欢迎光临。请问您对哪款产品感兴趣？如果订货量大，我们可以给您最优惠的出厂批发价。";
    const py =
      levelLimit === "HSK1"
        ? "Nínhǎo! Qǐngwèn nín xiǎng mǎi shénme? Wǒmen kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn."
        : "Nínhǎo! Huānyíng guānglín. Qǐngwèn nín duì nǎ kuǎn chǎnpǐn gǎn xìngqù? Rúguǒ dìnghuòliàng dà, wǒmen kěyǐ gěi nín zuì yōuhuì de chūchǎng pīfājià.";
    const vi =
      levelLimit === "HSK1"
        ? "Xin chào quý khách! Quý khách muốn mua gì ạ? Chúng tôi nhận thanh toán qua WeChat hoặc Alipay."
        : "Xin chào! Chào mừng quý khách. Quý khách quan tâm tới mẫu sản phẩm nào? Nếu số lượng đặt lớn, chúng tôi sẽ để giá sỉ xuất xưởng ưu đãi nhất.";
    return wrapPersonaTone(persona, zh, py, vi, false);
  }

  if (
    roleplayRole === "examiner" ||
    rp.includes("hsk") ||
    text.includes("考试") ||
    lower.includes("hsk")
  ) {
    const zh =
      levelLimit === "HSK1"
        ? "欢迎参加口语练习！请先告诉我：你叫什么名字？你学习中文多长时间了？"
        : "欢迎参加HSKK口语模拟测试！请用两三句话谈谈：你为什么学习中文，以及你的未来职业规划是什么？";
    const py =
      levelLimit === "HSK1"
        ? "Huānyíng cānjiā kǒuyǔ liànxí! Qǐng xiān gàosu wǒ: Nǐ jiào shénme míngzi? Nǐ xuéxí Zhōngwén duō cháng shíjiān le?"
        : "Huānyíng cānjiā HSKK kǒuyǔ mónǐ cèshì! Qǐng yòng liǎng sān jù huà tántan: Nǐ wèishénme xuéxí Zhōngwén, yǐjí nǐ de wèilái zhíyè guīhuà shì shénme?";
    const vi =
      levelLimit === "HSK1"
        ? "Chào mừng bạn đến với phần luyện Nói! Hãy cho tôi biết: Bạn tên là gì? Bạn học tiếng Trung bao lâu rồi?"
        : "Chào mừng đến với bài thi thử HSKK! Hãy dùng 2-3 câu chia sẻ: Vì sao bạn học tiếng Trung và kế hoạch nghề nghiệp tương lai của bạn là gì?";
    return wrapPersonaTone(persona, zh, py, vi, false);
  }

  if (roleplayRole === "friend") {
    const zh = "嗨！好久不见！你最近工作和学习忙不忙？周末我们去喝奶茶怎么样？";
    const py = "Hāi! Hǎojiǔ bújiàn! Nǐ zuìjìn gōngzuò hé xuéxí máng bu máng? Zhōumò wǒmen qù hē nǎichá zěnmeyàng?";
    const vi = "Chào cậu! Lâu rồi không gặp! Dạo này công việc và việc học có bận không? Cuối tuần tụi mình đi uống trà sữa nhé?";
    return wrapPersonaTone(persona, zh, py, vi, false);
  }

  if (/(你好|您好|嗨|早上好|晚上好|xin chào|chào)/i.test(lower)) {
    const zh = "你好！很高兴和你一起练习中文。今天你想聊什么话题呢？";
    const py = "Nǐ hǎo! Hěn gāoxìng hé nǐ yìqǐ liànxí Zhōngwén. Jīntiān nǐ xiǎng liáo shénme huàtí ne?";
    const vi = "Chào bạn! Rất vui được cùng bạn luyện tiếng Trung. Hôm nay bạn muốn trò chuyện về chủ đề gì nào?";
    return wrapPersonaTone(persona, zh, py, vi, false);
  }

  const defaultZh =
    levelLimit === "HSK1"
      ? `说得很好！你写了：“${text}”。你能再用这个词造一个句子吗？`
      : `很有意思的表达：“${text}”。你能用“因为……所以……”或者“不仅……而且……”再扩展一下你的看法吗？`;
  const defaultPy =
    levelLimit === "HSK1"
      ? `Shuō de hěn hǎo! Nǐ xiě le: "${text}". Nǐ néng zài yòng zhège cí zào yígè jùzi ma?`
      : `Hěn yǒuyìsi de biǎodá: "${text}". Nǐ néng yòng "yīnwèi... suǒyǐ..." zài kuòzhǎn yíxià nǐ de kànfǎ ma?`;
  const defaultVi =
    levelLimit === "HSK1"
      ? `Nói tốt lắm! Bạn vừa viết: "${text}". Bạn có thể đặt thêm một câu nữa với từ này không?`
      : `Cách diễn đạt rất thú vị: "${text}". Bạn thử dùng cấu trúc "因为...所以..." hoặc "不仅...而且..." để mở rộng thêm ý kiến của mình nhé!`;

  return wrapPersonaTone(persona, defaultZh, defaultPy, defaultVi, false);
}
