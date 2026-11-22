import type { AIPersonaMode, HSKLevel } from "@/types";

export const VOICE_CALL_SPEEDS = [0.75, 0.95, 1.1] as const;
export type VoiceCallSpeed = (typeof VOICE_CALL_SPEEDS)[number];

export interface VoiceCallPrompt {
  id: string;
  level: HSKLevel;
  topic: string;
  introVi: string;
  targetZh: string;
  targetPinyin: string;
  meaningVi: string;
  focusPhonemes: string[];
  tipVi: string;
}

export interface PronunciationPhonemeTip {
  phoneme: string;
  labelVi: string;
  tipVi: string;
}

export interface PronunciationEvaluation {
  accuracy: number; // 0 - 100
  passed: boolean;
  matchedWords: string[];
  missedWords: string[];
  detectedPhonemes: PronunciationPhonemeTip[];
  feedbackVi: string;
  encouragementZh: string;
  persona: AIPersonaMode;
}

export const VOICE_CALL_PROMPTS: VoiceCallPrompt[] = [
  // HSK0 & HSK1
  {
    id: "vc-hsk0-1",
    level: "HSK0",
    topic: "Biến điệu thanh 3 & Chào hỏi",
    introVi: "Bắt đầu với quy tắc biến điệu hai thanh 3 đi liền nhau (你好 đọc thành ní hǎo):",
    targetZh: "你好！很高兴认识你。",
    targetPinyin: "Nǐ hǎo! Hěn gāoxìng rènshi nǐ.",
    meaningVi: "Xin chào! Rất vui được làm quen với bạn.",
    focusPhonemes: [" thanh 3", "zh/sh/r", "x"],
    tipVi: "Hai thanh 3 đi liền (你好) thì âm đầu đọc lên giọng như thanh 2 (ní hǎo). Chữ '识 (shi)' trong '认识' đọc thanh nhẹ.",
  },
  {
    id: "vc-hsk1-1",
    level: "HSK1",
    topic: "Giới thiệu bản thân & Quốc tịch",
    introVi: "Hãy đọc câu giới thiệu tên và quốc tịch Việt Nam chuẩn thanh điệu:",
    targetZh: "我叫明安，我是越南人，目前在河内工作。",
    targetPinyin: "Wǒ jiào Míng'ān, wǒ shì Yuènánrén, mùqián zài Hénèi gōngzuò.",
    meaningVi: "Tôi tên là Minh An, tôi là người Việt Nam, hiện đang làm việc tại Hà Nội.",
    focusPhonemes: ["q", "sh", "ü"],
    tipVi: "'是 (shì)' cong lưỡi thanh 4 dứt khoát. '越 (Yuè)' tròn môi từ âm ü sang e.",
  },
  {
    id: "vc-hsk1-2",
    level: "HSK1",
    topic: "Gọi đồ uống & Thanh toán",
    introVi: "Luyện âm bật hơi 'k' và âm mặt lưỡi 'x', 'q' khi gọi cà phê:",
    targetZh: "请问，一杯冰美式咖啡多少钱？可以用微信支付吗？",
    targetPinyin: "Qǐngwèn, yì bēi bīng měishì kāfēi duōshao qián? Kěyǐ yòng Wēixìn zhīfù ma?",
    meaningVi: "Xin hỏi, một ly Americano đá bao nhiêu tiền? Có thể thanh toán bằng WeChat Pay không?",
    focusPhonemes: ["q", "k", "zh"],
    tipVi: "'请 (qǐng)' và '钱 (qián)' là âm mặt lưỡi bật hơi mạnh. '支付 (zhīfù)' cong lưỡi ở 'zh'.",
  },
  {
    id: "vc-hsk2-1",
    level: "HSK2",
    topic: "Lịch trình & Thời gian",
    introVi: "Chú ý đặt trạng ngữ chỉ thời gian đứng trước động từ trong câu này:",
    targetZh: "我明天上午九点去公司开会，下午三点见客户。",
    targetPinyin: "Wǒ míngtiān shàngwǔ jiǔ diǎn qù gōngsī kāihuì, xiàwǔ sān diǎn jiàn kèhù.",
    meaningVi: "9 giờ sáng mai tôi đến công ty họp, 3 giờ chiều gặp khách hàng.",
    focusPhonemes: ["q", "x", "k"],
    tipVi: "Nhấn rõ thanh 4 ở '上午 (shàngwǔ)', '下午 (xiàwǔ)', '开会 (kāihuì)' và '客户 (kèhù)'.",
  },
  {
    id: "vc-hsk3-1",
    level: "HSK3",
    topic: "Câu chữ 把 (Bǎ) trong công việc",
    introVi: "Luyện cấu trúc câu chữ 把 cực kỳ quan trọng ở trình độ HSK 3:",
    targetZh: "请把那份合同发到我的邮箱，我马上检查一下。",
    targetPinyin: "Qǐng bǎ nà fèn hétóng fā dào wǒ de yóuxiāng, wǒ mǎshàng jiǎnchá yíxià.",
    meaningVi: "Làm ơn gửi bản hợp đồng đó vào email của tôi, tôi sẽ kiểm tra ngay.",
    focusPhonemes: ["q", "x", "ch"],
    tipVi: "'检查 (jiǎnchá)' có âm 'ch' vừa cong lưỡi vừa bật hơi.",
  },
  {
    id: "vc-hsk4-1",
    level: "HSK4",
    topic: "Đàm phán thương mại & Xuất nhập khẩu",
    introVi: "Thử thách HSK 4! Đàm phán giá xuất xưởng và thời gian giao hàng:",
    targetZh: "如果你们能保证产品质量并按时交货，我们可以长期合作。",
    targetPinyin: "Rúguǒ nǐmen néng bǎozhèng chǎnpǐn zhìliàng bìng ànshí jiāohuò, wǒmen kěyǐ chángqī hézuò.",
    meaningVi: "Nếu các bạn có thể đảm bảo chất lượng sản phẩm và giao hàng đúng hạn, chúng ta có thể hợp tác lâu dài.",
    focusPhonemes: ["zh", "ch", "sh", "r"],
    tipVi: "Câu có chuỗi âm cuốn lưỡi '保证 (bǎozhèng) - 产品 (chǎnpǐn) - 质量 (zhìliàng)', hãy giữ đầu lưỡi cong đều.",
  },
  {
    id: "vc-hsk5-1",
    level: "HSK5",
    topic: "Thuyết trình kinh tế & Thành ngữ",
    introVi: "Thử thách HSK 5–6 với phong thái chuyên gia thương mại:",
    targetZh: "随着跨境电商的快速发展，中越两国之间的贸易往来日益密切。",
    targetPinyin: "Suízhe kuàjìng diànshāng de kuàisù fāzhǎn, Zhōng-Yuè liǎng guó zhījiān de màoyì wǎnglái rìyì mìqiè.",
    meaningVi: "Cùng với sự phát triển nhanh chóng của thương mại điện tử xuyên biên giới, giao thương giữa hai nước Trung – Việt ngày càng mật thiết.",
    focusPhonemes: ["z", "zh", "sh", "q"],
    tipVi: "Phân biệt âm đầu lưỡi thẳng '随着 (suízhe)' và âm cuốn lưỡi '发展 (fāzhǎn)'.",
  },
];

const PHONEME_GUIDE: Record<string, PronunciationPhonemeTip> = {
  zh: {
    phoneme: "zh / ch / sh / r",
    labelVi: "Âm cuốn lưỡi (翘舌音)",
    tipVi: "Cong đầu lưỡi chạm nhẹ lên vòm cứng phía sau chân răng trên. Với 'ch' nhớ bật hơi mạnh ra ngoài.",
  },
  jqx: {
    phoneme: "j / q / x",
    labelVi: "Âm mặt lưỡi (舌面音)",
    tipVi: "Đặt đầu lưỡi chạm mặt sau răng cửa dưới, nâng mặt lưỡi sát vòm miệng. 'q' phải bật hơi mạnh, 'j' không bật hơi.",
  },
  zcs: {
    phoneme: "z / c / s",
    labelVi: "Âm đầu lưỡi thẳng (平舌音)",
    tipVi: "Giữ lưỡi thẳng chạm nhẹ mặt sau răng cửa trên, tuyệt đối không cong lưỡi. Với 'c' nhớ bật hơi sắc.",
  },
  u_umlaut: {
    phoneme: "ü (yu / ju / qu / xu)",
    labelVi: "Nguyên âm tròn môi ü",
    tipVi: "Chu tròn môi như đang huýt sáo rồi phát âm chữ 'i' từ đầu đến cuối, không để môi bè ra.",
  },
  tone3: {
    phoneme: "Biến điệu thanh 3 (上声变调)",
    labelVi: "Quy tắc biến điệu thanh 3",
    tipVi: "Khi hai thanh 3 đứng liền nhau (3 + 3), âm tiết đầu tiên tự động đọc thành thanh 2 (2 + 3), ví dụ 你好 → ní hǎo.",
  },
  tone4: {
    phoneme: "Thanh 4 (去声 - 51)",
    labelVi: "Thanh 4 rơi dứt khoát",
    tipVi: "Đọc từ cao độ cao nhất (5) rơi nhanh và dứt khoát xuống thấp nhất (1), giống như tiếng ra lệnh ngắn gọn.",
  },
};

function extractHanziTokens(text: string): string[] {
  const chars = Array.from(text).filter((ch) => /\p{Script=Han}/u.test(ch));
  return chars;
}

function detectPhonemesForChinese(targetZh: string, targetPinyin = ""): PronunciationPhonemeTip[] {
  const py = targetPinyin.toLowerCase();
  const tips: PronunciationPhonemeTip[] = [];
  if (/(zh|ch|sh|r)/.test(py)) tips.push(PHONEME_GUIDE.zh);
  if (/(j|q|x)/.test(py)) tips.push(PHONEME_GUIDE.jqx);
  if (/\b(z|c|s)(?!h)/.test(py)) tips.push(PHONEME_GUIDE.zcs);
  if (/(ü|yu|ju|qu|xu)/.test(py)) tips.push(PHONEME_GUIDE.u_umlaut);
  tips.push(PHONEME_GUIDE.tone3);
  tips.push(PHONEME_GUIDE.tone4);
  return tips.slice(0, 3);
}

function buildPersonaFeedback(
  persona: AIPersonaMode,
  accuracy: number,
  missedChars: string[],
  tips: PronunciationPhonemeTip[]
): { feedbackVi: string; encouragementZh: string } {
  const missedStr = missedChars.slice(0, 4).map((w) => `"${w}"`).join(", ");
  const tipStr = tips[0] ? ` Mẹo chỉnh âm (${tips[0].phoneme}): ${tips[0].tipVi}` : "";

  if (accuracy >= 85) {
    switch (persona) {
      case "khinh-bi":
        return {
          feedbackVi: `Ồ, ${accuracy}% luôn à? Tạm chấp nhận được đấy, thanh điệu đỡ ngang hơn tôi tưởng.${missedStr ? ` Nhưng vẫn hơi lướt chữ ${missedStr}.` : ""}`,
          encouragementZh: "还不错，继续保持吧。",
        };
      case "cuoi-nhao":
        return {
          feedbackVi: `Haha ${accuracy}%! Nay uống trà sữa Bắc Kinh hay sao mà bắn tiếng Trung chuẩn thế?${missedStr ? ` Chỉnh nhẹ chữ ${missedStr} nữa là chuẩn bản xứ.` : ""}`,
          encouragementZh: "哇，发音挺地道嘛！",
        };
      case "vui-ve":
        return {
          feedbackVi: `Tuyệt vời! Bạn đạt ${accuracy}% chuẩn xác! Phát âm rõ thanh điệu và âm bật hơi rất tự nhiên.${missedStr ? ` Lần sau nhấn rõ thêm chữ ${missedStr} nhé!` : ""}`,
          encouragementZh: "太棒了！你的发音非常标准！",
        };
      default:
        return {
          feedbackVi: `Rất tốt! Độ chính xác đạt ${accuracy}%. Phát âm rõ chữ Hán và đúng nhịp thanh điệu.${missedStr ? ` Lưu ý phát âm rõ hơn chữ ${missedStr}.` : ""}`,
          encouragementZh: "说得很好，继续加油！",
        };
    }
  }

  if (accuracy >= 55) {
    switch (persona) {
      case "khinh-bi":
        return {
          feedbackVi: `Mới được ${accuracy}% thôi à? Bạn đọc sai thanh điệu hoặc nuốt mất chữ ${missedStr || "quan trọng"} rồi.${tipStr}`,
          encouragementZh: "声调还不够准，再试一次。",
        };
      case "cuoi-nhao":
        return {
          feedbackVi: `Úi giời ${accuracy}%! Nghe đoạn ${missedStr || "giữa câu"} cứ như đang hát rap lệch tông vậy haha.${tipStr}`,
          encouragementZh: "哈哈，差一点点！再来一遍！",
        };
      case "vui-ve":
        return {
          feedbackVi: `Khá lắm, bạn đã đạt ${accuracy}% rồi! Chỉ cần chỉnh nhẹ thanh điệu các chữ ${missedStr || "chưa rõ"} là hoàn hảo ngay.${tipStr}`,
          encouragementZh: "已经很好了！我们再试一次！",
        };
      default:
        return {
          feedbackVi: `Độ chính xác ${accuracy}%. Bạn cần đọc chậm và giữ đúng thanh điệu ở các chữ: ${missedStr || "một số chữ bị lướt"}.${tipStr}`,
          encouragementZh: "不错，请放慢语速再读一遍。",
        };
    }
  }

  switch (persona) {
    case "khinh-bi":
      return {
        feedbackVi: `Có ${accuracy}% thôi sao? Tai BaoBao suýt không nhận ra đây là tiếng Phổ thông luôn. Bạn bỏ sót ${missedStr || "hầu hết câu"}.${tipStr}`,
        encouragementZh: "仔细听示范发音，跟着我读。",
      };
    case "cuoi-nhao":
      return {
        feedbackVi: `Ôi trời ơi ${accuracy}%! Bạn đang niệm thần chú Thiếu Lâm Tự à? Mất tiêu ${missedStr || "cả cụm"} rồi kìa haha!${tipStr}`,
        encouragementZh: "哎呀！再听一遍示范吧！",
      };
    case "vui-ve":
      return {
        feedbackVi: `Đừng lo nhé, mới ${accuracy}% thôi nhưng ai mới luyện thanh điệu cũng vậy! Mình cùng tập lại từng chữ ${missedStr || "nhỏ"} thật chậm nào.${tipStr}`,
        encouragementZh: "没关系！我们一起慢慢练！",
      };
    default:
      return {
        feedbackVi: `Độ chính xác ${accuracy}%. Hãy nghe lại câu mẫu ở tốc độ chậm (0.75x) và chú ý các chữ: ${missedStr || "toàn bộ câu"}.${tipStr}`,
        encouragementZh: "请先听一遍慢速示范。",
      };
  }
}

export function evaluateChinesePronunciation(
  targetZh: string,
  spokenZh: string,
  persona: AIPersonaMode = "binh-thuong",
  targetPinyin = ""
): PronunciationEvaluation {
  const targetChars = extractHanziTokens(targetZh);
  const spokenChars = extractHanziTokens(spokenZh);

  if (targetChars.length === 0) {
    return {
      accuracy: 100,
      passed: true,
      matchedWords: [],
      missedWords: [],
      detectedPhonemes: [],
      feedbackVi: "Không có câu mẫu để đánh giá.",
      encouragementZh: "好的！",
      persona,
    };
  }

  const tips = detectPhonemesForChinese(targetZh, targetPinyin);

  if (spokenChars.length === 0 && !spokenZh.trim()) {
    const { feedbackVi, encouragementZh } = buildPersonaFeedback(persona, 0, targetChars, tips);
    return {
      accuracy: 0,
      passed: false,
      matchedWords: [],
      missedWords: targetChars,
      detectedPhonemes: tips,
      feedbackVi,
      encouragementZh,
      persona,
    };
  }

  const spokenSet = new Set(spokenChars);
  const matchedWords: string[] = [];
  const missedWords: string[] = [];

  for (const ch of targetChars) {
    if (spokenSet.has(ch)) {
      matchedWords.push(ch);
    } else {
      missedWords.push(ch);
    }
  }

  const accuracy = Math.round((matchedWords.length / targetChars.length) * 100);
  const { feedbackVi, encouragementZh } = buildPersonaFeedback(
    persona,
    accuracy,
    missedWords,
    tips
  );

  return {
    accuracy,
    passed: accuracy >= 75,
    matchedWords,
    missedWords,
    detectedPhonemes: tips,
    feedbackVi,
    encouragementZh,
    persona,
  };
}
