import type { StudySession } from "@/types";
import {
  listeningDialogue,
  listeningFill,
  listeningMcq,
  readingComp,
  speakingShadowing,
  writingOrder,
  writingStroke,
  writingTwoSentences,
} from "./helpers";

export const HSK4_PART1_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 简单的爱情 (Jiǎndān de àiqíng — Tình yêu giản dị)
  // ==========================================
  {
    id: "hsk4-l1-aiqing",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Tình yêu giản dị",
    titleZh: "第一课：简单的爱情",
    titlePinyin: "Dì yī kè: Jiǎndān de àiqíng",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=jvLujCBTIf8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 1 简单的爱情",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "不仅……，也/还/而且…… (bùjǐn..., yě/hái/érqiě...): Không những... mà còn... Khi cùng chủ ngữ, 不仅 đứng sau chủ ngữ; khác chủ ngữ thì 不仅 đứng trước chủ ngữ 1.",
      "从来 (cónglái): Từ trước đến nay, thường dùng trong câu phủ định (从来不/从来没) để nhấn mạnh tính chất không thay đổi.",
      "刚 (gāng — phó từ, vừa mới) khác với 刚才 (gāngcái — danh từ chỉ thời gian, lúc nãy).",
    ],
    newWords: [
      {
        hanzi: "法律",
        pinyin: "fǎlǜ",
        partOfSpeech: "Danh từ",
        meaningVi: "pháp luật",
        radical: "氵 (Chấm thủy)",
        strokeCount: 17,
      },
      {
        hanzi: "俩",
        pinyin: "liǎ",
        partOfSpeech: "Số từ",
        meaningVi: "hai (người/vật), cả hai (không dùng với lượng từ)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 9,
      },
      {
        hanzi: "印象",
        pinyin: "yìnxiàng",
        partOfSpeech: "Danh từ",
        meaningVi: "ấn tượng",
        radical: "卩 (Tiết)",
        strokeCount: 16,
      },
      {
        hanzi: "深",
        pinyin: "shēn",
        partOfSpeech: "Tính từ",
        meaningVi: "sâu, sâu sắc",
        radical: "氵 (Chấm thủy)",
        strokeCount: 11,
      },
      {
        hanzi: "熟悉",
        pinyin: "shúxī",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "quen thuộc, hiểu rõ",
        radical: "灬 (Hỏa)",
        strokeCount: 26,
      },
      {
        hanzi: "不仅",
        pinyin: "bùjǐn",
        partOfSpeech: "Liên từ",
        meaningVi: "không những, chẳng những",
        radical: "一 (Nhất)",
        strokeCount: 8,
      },
      {
        hanzi: "性格",
        pinyin: "xìnggé",
        partOfSpeech: "Danh từ",
        meaningVi: "tính cách",
        radical: "忄 (Tâm đứng)",
        strokeCount: 18,
      },
      {
        hanzi: "幸福",
        pinyin: "xìngfú",
        partOfSpeech: "Tính từ / Danh từ",
        meaningVi: "hạnh phúc",
        radical: "干 (Can)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Hai người quen nhau thế nào?",
        lines: [
          {
            speaker: "孙月",
            zh: "听说你男朋友李进跟你是一个学校的，是你同学吗？",
            pinyin: "Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de, shì nǐ tóngxué ma?",
            vi: "Nghe nói bạn trai cậu Lý Tiến học cùng trường với cậu, là bạn cùng lớp à?",
          },
          {
            speaker: "王静",
            zh: "是的，他学的是新闻，我学的是法律，我和他不是一个班。",
            pinyin: "Shì de, tā xué de shì xīnwén, wǒ xué de shì fǎlǜ, wǒ hé tā bú shì yí ge bān.",
            vi: "Đúng vậy, anh ấy học báo chí, mình học luật, hai đứa không học cùng lớp.",
          },
          {
            speaker: "孙月",
            zh: "那你们俩是怎么认识的？",
            pinyin: "Nà nǐmen liǎ shì zěnme rènshi de?",
            vi: "Thế hai người quen nhau như thế nào?",
          },
          {
            speaker: "王静",
            zh: "我们是在一次足球比赛中认识的。他不仅足球踢得好，性格也不错。",
            pinyin: "Wǒmen shì zài yí cì zúqiú bǐsài zhōng rènshi de. Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
            vi: "Bọn mình quen nhau trong một trận bóng đá. Anh ấy không những đá bóng giỏi mà tính cách cũng rất tốt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chuyện kết hôn của Lý Tiến và Vương Tĩnh",
        lines: [
          {
            speaker: "王静",
            zh: "我跟李进下个月就要结婚了，到时候欢迎你来参加我们的婚礼。",
            pinyin: "Wǒ gēn Lǐ Jìn xià ge yuè jiù yào jiéhūn le, dào shíhou huānyíng nǐ lái cānjiā wǒmen de hūnlǐ.",
            vi: "Tháng sau mình và Lý Tiến sẽ kết hôn, đến lúc đó hoan nghênh cậu tới dự đám cưới nhé.",
          },
          {
            speaker: "孙月",
            zh: "真的吗？祝贺你们！你们从认识到现在，差不多有五年了吧？",
            pinyin: "Zhēn de ma? Zhùhè nǐmen! Nǐmen cóng rènshi dào xiànzài, chàbuduō yǒu wǔ nián le ba?",
            vi: "Thật sao? Chúc mừng hai cậu! Từ lúc quen nhau đến giờ cũng gần 5 năm rồi nhỉ?",
          },
          {
            speaker: "王静",
            zh: "对，我们俩对彼此都很熟悉，在一起觉得很幸福。",
            pinyin: "Duì, wǒmen liǎ duì bǐcǐ dōu hěn shúxī, zài yìqǐ juéde hěn xìngfú.",
            vi: "Đúng vậy, hai đứa mình rất hiểu nhau, ở bên nhau cảm thấy vô cùng hạnh phúc.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc liên từ 不仅……，也/还/而且……",
        formula: "Chủ ngữ + 不仅 + Vế 1，也/还/而且 + Vế 2",
        explanationVi:
          "Biểu thị quan hệ tăng tiến (không những... mà còn...). Nếu hai vế cùng một chủ ngữ, 不仅 đặt sau chủ ngữ; nếu khác chủ ngữ, 不仅 đặt trước chủ ngữ thứ nhất.",
        examples: [
          {
            zh: "他不仅足球踢得好，性格也不错。",
            pinyin: "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
            vi: "Anh ấy không những đá bóng giỏi mà tính cách cũng rất tốt.",
          },
          {
            zh: "不仅我喜欢看这本书，我妹妹也很喜欢。",
            pinyin: "Bùjǐn wǒ xǐhuan kàn zhè běn shū, wǒ mèimei yě hěn xǐhuan.",
            vi: "Không chỉ tôi thích đọc cuốn sách này mà em gái tôi cũng rất thích.",
          },
        ],
      },
      {
        titleVi: "Phó từ 从来 (từ trước đến nay)",
        formula: "Chủ ngữ + 从来 + 不 / 没(有) + Động từ / Tính từ",
        explanationVi:
          "Dùng để nhấn mạnh một trạng thái hoặc thói quen không hề thay đổi từ quá khứ đến hiện tại, chủ yếu xuất hiện trong câu phủ định.",
        examples: [
          {
            zh: "他从来不迟到。",
            pinyin: "Tā cónglái bù chídào.",
            vi: "Anh ấy từ trước đến nay chưa bao giờ đi muộn.",
          },
          {
            zh: "我从来没去过北京。",
            pinyin: "Wǒ cónglái méi qùguo Běijīng.",
            vi: "Tôi từ trước đến nay chưa từng đi Bắc Kinh.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk4-l1-q1",
        "他不仅足球踢得好，性格也不错。",
        "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
        "Nghe câu và chọn nhận xét đúng về nhân vật 'anh ấy':",
        [
          "Đá bóng giỏi và tính cách tốt",
          "Chỉ giỏi đá bóng nhưng nóng tính",
          "Học chuyên ngành luật",
          "Không thích chơi thể thao",
        ],
        "Đá bóng giỏi và tính cách tốt",
        "不仅……也…… nhấn mạnh cả hai ưu điểm: đá bóng giỏi (足球踢得好) và tính cách tốt (性格也不错)."
      ),
      listeningFill(
        "hsk4-l1-q2",
        "他对我的印象很深。",
        "他对我的___很深。",
        "Tā duì wǒ de yìnxiàng hěn shēn.",
        "Nghe và điền từ còn thiếu (chữ Hán) vào chỗ trống:",
        "印象",
        "印象 (yìnxiàng) nghĩa là ấn tượng; 印象很深 = ấn tượng rất sâu sắc."
      ),
      listeningDialogue(
        "hsk4-l1-q3",
        "女：你学的是法律，李进也是吗？男：不是，他学的是新闻。",
        "Nǚ: Nǐ xué de shì fǎlǜ, Lǐ Jìn yě shì ma? Nán: Bú shì, tā xué de shì xīnwén.",
        "Nghe hội thoại: Lý Tiến học chuyên ngành gì?",
        ["Báo chí (新闻)", "Pháp luật (法律)", "Kinh tế", "Tiếng Trung"],
        "Báo chí (新闻)",
        "Người nam trả lời rõ: 他学的是新闻 (Anh ấy học báo chí)."
      ),
      listeningMcq(
        "hsk4-l1-q4",
        "我们俩从认识到现在差不多五年了，下个月就要结婚了。",
        "Wǒmen liǎ cóng rènshi dào xiànzài chàbuduō wǔ nián le, xià ge yuè jiù yào jiéhūn le.",
        "Nghe câu và cho biết hai người quen nhau được bao lâu?",
        ["Khoảng 5 năm", "Khoảng 1 tháng", "Vừa mới quen", "Hơn 10 năm"],
        "Khoảng 5 năm",
        "差不多五年了 = khoảng gần 5 năm rồi."
      ),
      listeningFill(
        "hsk4-l1-q5",
        "我从来没去过那个地方，不太熟悉。",
        "我从来没去过那个地方，不太___。",
        "Wǒ cónglái méi qùguo nàge dìfang, bú tài shúxī.",
        "Nghe và điền từ HSK 4 còn thiếu:",
        "熟悉",
        "熟悉 (shúxī) nghĩa là quen thuộc, hiểu rõ."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 真正的朋友 (Zhēnzhèng de péngyou — Người bạn thực sự)
  // ==========================================
  {
    id: "hsk4-l2-pengyou",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Người bạn thực sự",
    titleZh: "第二课：真正的朋友",
    titlePinyin: "Dì èr kè: Zhēnzhèng de péngyou",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=mHcpmfB_7Po",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 2 真正的朋友",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "即使……也…… (jíshǐ... yě...): Cho dù... cũng... Dùng để nêu giả thiết nhượng bộ (sự việc có thể chưa xảy ra hoặc đã xảy ra).",
      "挺……的 (tǐng... de): Khá là..., rất... Thường dùng trong khẩu ngữ để khen ngợi hoặc nhận xét mức độ.",
      "本来 (běnlái): Vốn dĩ, ban đầu (chỉ tình huống trước đây khác với hiện tại hoặc điều đương nhiên).",
    ],
    newWords: [
      {
        hanzi: "适应",
        pinyin: "shìyìng",
        partOfSpeech: "Động từ",
        meaningVi: "thích nghi, thích ứng",
        radical: "辶 (Quai xước)",
        strokeCount: 16,
      },
      {
        hanzi: "交",
        pinyin: "jiāo",
        partOfSpeech: "Động từ",
        meaningVi: "kết (bạn), giao, nộp",
        radical: "亠 (Đầu)",
        strokeCount: 6,
      },
      {
        hanzi: "平时",
        pinyin: "píngshí",
        partOfSpeech: "Danh từ",
        meaningVi: "ngày thường, bình thường",
        radical: "干 (Can)",
        strokeCount: 12,
      },
      {
        hanzi: "逛",
        pinyin: "guàng",
        partOfSpeech: "Động từ",
        meaningVi: "đi dạo, dạo phố",
        radical: "辶 (Quai xước)",
        strokeCount: 10,
      },
      {
        hanzi: "短信",
        pinyin: "duǎnxìn",
        partOfSpeech: "Danh từ",
        meaningVi: "tin nhắn (điện thoại)",
        radical: "矢 (Thỉ)",
        strokeCount: 21,
      },
      {
        hanzi: "正好",
        pinyin: "zhènghǎo",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "vừa hay, đúng lúc, vừa vặn",
        radical: "止 (Chỉ)",
        strokeCount: 11,
      },
      {
        hanzi: "聚会",
        pinyin: "jùhuì",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "tụ tập, buổi họp mặt",
        radical: "耳 (Nhĩ)",
        strokeCount: 20,
      },
      {
        hanzi: "联系",
        pinyin: "liánxì",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "liên hệ, liên lạc",
        radical: "耳 (Nhĩ)",
        strokeCount: 19,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Cuộc sống ở Bắc Kinh của Tiểu Hạ",
        lines: [
          {
            speaker: "马克",
            zh: "你来北京已经快一年了，适应这里的生活了吗？",
            pinyin: "Nǐ lái Běijīng yǐjīng kuài yì nián le, shìyìng zhèlǐ de shēnghuó le ma?",
            vi: "Cậu đến Bắc Kinh sắp được một năm rồi, đã thích nghi với cuộc sống ở đây chưa?",
          },
          {
            speaker: "小夏",
            zh: "挺适应的，我还交了不少中国朋友呢。",
            pinyin: "Tǐng shìyìng de, wǒ hái jiāo le bùshǎo Zhōngguó péngyou ne.",
            vi: "Khá thích nghi rồi, mình còn kết giao được không ít bạn Trung Quốc nữa.",
          },
          {
            speaker: "马克",
            zh: "平时你们都一起做什么？",
            pinyin: "Píngshí nǐmen dōu yìqǐ zuò shénme?",
            vi: "Ngày thường các cậu hay cùng nhau làm gì?",
          },
          {
            speaker: "小夏",
            zh: "周末我们常一起逛街、看电影，或者去公园散步。",
            pinyin: "Zhōumò wǒmen cháng yìqǐ guàngjiē, kàn diànyǐng, huòzhě qù gōngyuán sànbù.",
            vi: "Cuối tuần bọn mình hay cùng nhau đi dạo phố, xem phim hoặc ra công viên đi dạo.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Bạn bè lâu ngày không gặp",
        lines: [
          {
            speaker: "小夏",
            zh: "我刚才收到一条短信，大学同学这个星期六要聚会。",
            pinyin: "Wǒ gāngcái shōudào yì tiáo duǎnxìn, dàxué tóngxué zhège xīngqīliù yào jùhuì.",
            vi: "Lúc nãy mình vừa nhận được một tin nhắn, bạn đại học thứ Bảy này sẽ họp mặt.",
          },
          {
            speaker: "马克",
            zh: "那正好，你们平时工作那么忙，很少联系吧？",
            pinyin: "Nà zhènghǎo, nǐmen píngshí gōngzuò nàme máng, hěn shǎo liánxì ba?",
            vi: "Thế thì vừa hay, ngày thường các cậu bận công việc như vậy chắc ít liên lạc nhỉ?",
          },
          {
            speaker: "小夏",
            zh: "真正的朋友，即使很久不联系，见面时也会觉得很亲切。",
            pinyin: "Zhēnzhèng de péngyou, jíshǐ hěn jiǔ bù liánxì, jiànmiàn shí yě huì juéde hěn qīnqiè.",
            vi: "Người bạn thực sự thì cho dù rất lâu không liên lạc, lúc gặp lại vẫn cảm thấy vô cùng thân thiết.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc giả thiết nhượng bộ 即使……也……",
        formula: "即使 + Giả thiết / Điều kiện，(Chủ ngữ) + 也 + Kết quả",
        explanationVi:
          "Biểu thị 'cho dù... cũng...', nhấn mạnh kết quả không hề thay đổi bất chấp điều kiện bất lợi ở vế trước.",
        examples: [
          {
            zh: "即使很忙，我们也要经常联系。",
            pinyin: "Jíshǐ hěn máng, wǒmen yě yào jīngcháng liánxì.",
            vi: "Cho dù rất bận, chúng ta cũng phải thường xuyên liên lạc.",
          },
          {
            zh: "即使遇到困难，他也不放弃。",
            pinyin: "Jíshǐ yùdào kùnnan, tā yě bú fàngqì.",
            vi: "Cho dù gặp khó khăn, anh ấy cũng không bỏ cuộc.",
          },
        ],
      },
      {
        titleVi: "Phó từ chỉ mức độ 挺……的",
        formula: "Chủ ngữ + 挺 + Tính từ / Động từ tâm lý + 的",
        explanationVi:
          "Dùng nhiều trong khẩu ngữ mang nghĩa 'khá là...', 'rất...', sắc thái tự nhiên và thân mật hơn 很.",
        examples: [
          {
            zh: "我对这里的生活挺适应的。",
            pinyin: "Wǒ duì zhèlǐ de shēnghuó tǐng shìyìng de.",
            vi: "Tôi khá thích nghi với cuộc sống ở đây.",
          },
          {
            zh: "这家饭馆的菜挺好吃的。",
            pinyin: "Zhè jiā fànguǎn de cài tǐng hǎochī de.",
            vi: "Món ăn của nhà hàng này khá là ngon.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk4-l2-q1",
        "我挺适应这里的生活的，还交了不少新朋友。",
        "Wǒ tǐng shìyìng zhèlǐ de shēnghuó de, hái jiāo le bùshǎo xīn péngyou.",
        "Đọc nhại câu giới thiệu khả năng thích nghi với môi trường mới.",
        ["shìyìng (thanh 4-4)", "tǐng... de", "jiāo péngyou"],
        "Chú ý ngắt nhịp sau dấu phẩy và nhấn nhẹ vào 挺适应 và 不少."
      ),
      speakingShadowing(
        "hsk4-l2-q2",
        "真正的朋友，即使很久不联系，感情也不会变。",
        "Zhēnzhèng de péngyou, jíshǐ hěn jiǔ bù liánxì, gǎnqíng yě bú huì biàn.",
        "Đọc diễn cảm câu nói về tình bạn thực sự với cấu trúc 即使……也…….",
        ["zhēnzhèng", "jíshǐ... yě...", "bú huì (biến điệu 不)"],
        "不 trước thanh 4 (会 huì) đọc biến điệu thành thanh 2 (bú huì)."
      ),
      speakingShadowing(
        "hsk4-l2-q3",
        "平时大家工作都很忙，周末正好可以聚会聊聊天。",
        "Píngshí dàjiā gōngzuò dōu hěn máng, zhōumò zhènghǎo kěyǐ jùhuì liáoliao tiān.",
        "Luyện nói tự nhiên với từ 正好 và 聚会.",
        ["píngshí", "zhènghǎo", "jùhuì"],
        "Đọc liền mạch cụm 聚会聊聊天, 聊 thứ hai đọc thanh nhẹ."
      ),
      speakingShadowing(
        "hsk4-l2-q4",
        "你收到我的短信了吗？我下午有空陪你逛街。",
        "Nǐ shōudào wǒ de duǎnxìn le ma? Wǒ xiàwǔ yǒukòng péi nǐ guàngjiē.",
        "Luyện ngữ điệu câu hỏi xác nhận và lời rủ đi dạo phố.",
        ["duǎnxìn", "guàngjiē", "ngữ điệu câu hỏi 吗"],
        "Lên giọng nhẹ ở cuối câu hỏi 吗 và phát âm rõ phụ âm g/j trong 逛街."
      ),
      speakingShadowing(
        "hsk4-l2-q5",
        "在别人遇到困难的时候，应该主动去帮助他们。",
        "Zài biérén yùdào kùnnan de shíhou, yīnggāi zhǔdòng qù bāngzhù tāmen.",
        "Luyện nói câu phức bày tỏ quan điểm về sự giúp đỡ bạn bè.",
        ["kùnnan (thanh 4-nhẹ)", "zhǔdòng", "bāngzhù"],
        "Giữ tốc độ ổn định, nhấn mạnh cụm 主动去帮助."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 经理对我印象不错 (Jīnglǐ duì wǒ yìnxiàng búcuò — Giám đốc có ấn tượng tốt với tôi)
  // ==========================================
  {
    id: "hsk4-l3-yinxiang",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Giám đốc có ấn tượng tốt với tôi",
    titleZh: "第三课：经理对我印象不错",
    titlePinyin: "Dì sān kè: Jīnglǐ duì wǒ yìnxiàng búcuò",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=YTLbUIgAGzU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 3 经理对我印象不错",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "另外 (lìngwài): Ngoài ra, khác. Có thể làm đại từ (另外一个人), phó từ (另外买一杯), hoặc liên từ nối câu.",
      "首先……，其次…… (shǒuxiān..., qícì...): Trước tiên..., tiếp theo là... Dùng để trình bày luận điểm mạch lạc trong văn viết và phỏng vấn.",
      "不管……都/也…… (bùguǎn... dōu/yě...): Bất kể... đều/cũng...",
    ],
    newWords: [
      {
        hanzi: "挺",
        pinyin: "tǐng",
        partOfSpeech: "Phó từ",
        meaningVi: "rất, khá",
        radical: "扌 (Tài gẩy)",
        strokeCount: 9,
      },
      {
        hanzi: "紧张",
        pinyin: "jǐnzhāng",
        partOfSpeech: "Tính từ",
        meaningVi: "căng thẳng, hồi hộp",
        radical: "糸 (Mịch)",
        strokeCount: 17,
      },
      {
        hanzi: "信心",
        pinyin: "xìnxīn",
        partOfSpeech: "Danh từ",
        meaningVi: "niềm tin, sự tự tin",
        radical: "亻 (Nhân đứng)",
        strokeCount: 13,
      },
      {
        hanzi: "能力",
        pinyin: "nénglì",
        partOfSpeech: "Danh từ",
        meaningVi: "năng lực, khả năng",
        radical: "月 (Nguyệt)",
        strokeCount: 12,
      },
      {
        hanzi: "招聘",
        pinyin: "zhāopìn",
        partOfSpeech: "Động từ",
        meaningVi: "tuyển dụng",
        radical: "扌 (Tài gẩy)",
        strokeCount: 21,
      },
      {
        hanzi: "提供",
        pinyin: "tígōng",
        partOfSpeech: "Động từ",
        meaningVi: "cung cấp",
        radical: "扌 (Tài gẩy)",
        strokeCount: 20,
      },
      {
        hanzi: "负责",
        pinyin: "fùzé",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "phụ trách, có trách nhiệm",
        radical: "贝 (Bối)",
        strokeCount: 14,
      },
      {
        hanzi: "本来",
        pinyin: "běnlái",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "vốn dĩ, ban đầu",
        radical: "木 (Mộc)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Sau buổi phỏng vấn xin việc",
        lines: [
          {
            speaker: "小夏",
            zh: "上午的面试怎么样？经理对你印象不错吧？",
            pinyin: "Shàngwǔ de miànshì zěnmeyàng? Jīnglǐ duì nǐ yìnxiàng búcuò ba?",
            vi: "Buổi phỏng vấn sáng nay thế nào? Giám đốc có ấn tượng tốt với cậu chứ?",
          },
          {
            speaker: "马可",
            zh: "刚开始我有点儿紧张，后来慢慢就好了。经理问了我很多关于工作能力的问题。",
            pinyin: "Gāng kāishǐ wǒ yǒudiǎnr jǐnzhāng, hòulái mànmàn jiù hǎo le. Jīnglǐ wèn le wǒ hěn duō guānyú gōngzuò nénglì de wèntí.",
            vi: "Lúc đầu mình hơi hồi hộp, sau đó dần dần ổn hơn. Giám đốc hỏi mình rất nhiều câu về năng lực làm việc.",
          },
          {
            speaker: "小夏",
            zh: "那你对这次面试有信心吗？",
            pinyin: "Nà nǐ duì zhè cì miànshì yǒu xìnxīn ma?",
            vi: "Thế cậu có tự tin với buổi phỏng vấn lần này không?",
          },
          {
            speaker: "马可",
            zh: "我觉得挺有信心的，经理说下星期一通知我结果。",
            pinyin: "Wǒ juéde tǐng yǒu xìnxīn de, jīnglǐ shuō xià xīngqīyī tōngzhī wǒ jiéguǒ.",
            vi: "Mình thấy khá tự tin, giám đốc bảo thứ Hai tuần sau sẽ báo kết quả.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Bí quyết tạo ấn tượng đầu tiên khi phỏng vấn",
        lines: [
          {
            speaker: "旁白",
            zh: "面试时，第一印象非常重要。首先，穿衣服要整洁大方；其次，回答问题要诚实、有信心。",
            pinyin: "Miànshì shí, dì-yī yìnxiàng fēicháng zhòngyào. Shǒuxiān, chuān yīfu yào zhěngjié dàfāng; qícì, huídá wèntí yào chéngshí, yǒu xìnxīn.",
            vi: "Khi phỏng vấn, ấn tượng đầu tiên vô cùng quan trọng. Trước tiên, ăn mặc phải gọn gàng lịch sự; tiếp theo, trả lời câu hỏi phải trung thực và tự tin.",
          },
          {
            speaker: "旁白",
            zh: "另外，要提前了解公司招聘的要求，这样才能让面试官觉得你是一个负责的人。",
            pinyin: "Lìngwài, yào tíqián liǎojiě gōngsī zhāopìn de yāoqiú, zhèyàng cái néng ràng miànshìguān juéde nǐ shì yí ge fùzé de rén.",
            vi: "Ngoài ra, cần tìm hiểu trước yêu cầu tuyển dụng của công ty, như vậy mới khiến người phỏng vấn thấy bạn là người có trách nhiệm.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc liệt kê 首先……，其次……",
        formula: "首先 + Luận điểm 1，其次 + Luận điểm 2（，另外 + Luận điểm 3）",
        explanationVi:
          "Dùng để sắp xếp các ý theo thứ tự logic (trước tiên..., tiếp theo là..., ngoài ra...), rất phổ biến trong bài đọc hiểu HSK 4.",
        examples: [
          {
            zh: "找工作时，首先要有信心，其次要有能力。",
            pinyin: "Zhǎo gōngzuò shí, shǒuxiān yào yǒu xìnxīn, qícì yào yǒu nénglì.",
            vi: "Khi tìm việc, trước tiên phải có sự tự tin, tiếp theo phải có năng lực.",
          },
        ],
      },
      {
        titleVi: "Cách dùng 另外 (ngoài ra / khác)",
        formula: "另外 + (Số từ) + Lượng từ + Danh từ  |  Vế 1，另外，Vế 2",
        explanationVi:
          "Vừa có thể làm định ngữ chỉ đối tượng khác ngoài phạm vi đã nêu, vừa có thể làm liên từ bổ sung thêm một ý mới.",
        examples: [
          {
            zh: "这家公司不仅工资高，另外还提供很多学习机会。",
            pinyin: "Zhè jiā gōngsī bùjǐn gōngzī gāo, lìngwài hái tígōng hěn duō xuéxí jīhuì.",
            vi: "Công ty này không chỉ lương cao, ngoài ra còn cung cấp nhiều cơ hội học tập.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk4-l3-q1",
        "上午的面试刚开始我有点儿紧张，后来慢慢就好了。经理问了我很多关于专业和工作能力的问题，我觉得他对我印象不错。",
        "Shàngwǔ de miànshì gāng kāishǐ wǒ yǒudiǎnr jǐnzhāng, hòulái mànmàn jiù hǎo le. Jīnglǐ wèn le wǒ hěn duō guānyú zhuānyè hé gōngzuò nénglì de wèntí, wǒ juéde tā duì wǒ yìnxiàng búcuò.",
        "Buổi phỏng vấn sáng nay lúc đầu tôi hơi hồi hộp, sau đó dần ổn hơn. Giám đốc hỏi tôi nhiều câu về chuyên môn và năng lực làm việc, tôi thấy ông ấy có ấn tượng tốt với tôi.",
        "Người nói cảm thấy thế nào về buổi phỏng vấn sáng nay?",
        [
          "Lúc đầu hồi hộp nhưng sau đó thuận lợi",
          "Suốt buổi phỏng vấn đều rất căng thẳng",
          "Giám đốc không hỏi về năng lực làm việc",
          "Người nói đã bị từ chối ngay lập tức",
        ],
        "Lúc đầu hồi hộp nhưng sau đó thuận lợi",
        "Đoạn văn nêu rõ: 刚开始有点儿紧张，后来慢慢就好了 và 经理对我印象不错."
      ),
      readingComp(
        "hsk4-l3-q2",
        "面试时，首先要注意穿着，穿得整洁大方能给人留下好印象；其次，回答问题要诚实，不要紧张。",
        "Miànshì shí, shǒuxiān yào zhùyì chuānzhuó, chuān de zhěngjié dàfāng néng gěi rén liúxià hǎo yìnxiàng; qícì, huídá wèntí yào chéngshí, búyào jǐnzhāng.",
        "Khi phỏng vấn, trước tiên cần chú ý trang phục, mặc gọn gàng lịch sự sẽ để lại ấn tượng tốt; tiếp theo, trả lời câu hỏi phải trung thực, đừng căng thẳng.",
        "Theo đoạn văn, điều nào KHÔNG được nhắc đến là lưu ý khi phỏng vấn?",
        [
          "Phải có bằng thạc sĩ",
          "Ăn mặc gọn gàng lịch sự",
          "Trả lời câu hỏi trung thực",
          "Không nên quá căng thẳng",
        ],
        "Phải có bằng thạc sĩ",
        "Đoạn văn chỉ nhắc đến trang phục (穿着), sự trung thực (诚实) và giữ bình tĩnh (不要紧张)."
      ),
      readingComp(
        "hsk4-l3-q3",
        "我们公司正在招聘一名负责市场工作的经理，除了要有三年以上的工作经验，另外还需要会说流利的英语。",
        "Wǒmen gōngsī zhèngzài zhāopìn yì míng fùzé shìchǎng gōngzuò de jīnglǐ, chúle yào yǒu sān nián yǐshàng de gōngzuò jīngyàn, lìngwài hái xūyào huì shuō liúlì de Yīngyǔ.",
        "Công ty chúng tôi đang tuyển một giám đốc phụ trách thị trường, ngoài yêu cầu có trên 3 năm kinh nghiệm, còn cần nói tiếng Anh lưu loát.",
        "Vị trí đang tuyển dụng yêu cầu thêm điều kiện gì ngoài kinh nghiệm?",
        [
          "Nói tiếng Anh lưu loát",
          "Biết lái xe tải",
          "Tốt nghiệp ngành luật",
          "Làm việc vào ban đêm",
        ],
        "Nói tiếng Anh lưu loát",
        "Cụm 另外还需要会说流利的英语 chỉ rõ yêu cầu bổ sung là nói tiếng Anh lưu loát."
      ),
      readingComp(
        "hsk4-l3-q4",
        "本来我以为这次考试很难，没想到题目都在复习的范围里，所以我挺有信心的。",
        "Běnlái wǒ yǐwéi zhè cì kǎoshì hěn nán, méi xiǎngdào tímù dōu zài fùxí de fànwéi lǐ, suǒyǐ wǒ tǐng yǒu xìnxīn de.",
        "Vốn dĩ tôi tưởng kỳ thi lần này rất khó, không ngờ đề bài đều nằm trong phạm vi ôn tập nên tôi khá tự tin.",
        "Tại sao người nói lại cảm thấy tự tin?",
        [
          "Vì đề thi đều nằm trong phần đã ôn tập",
          "Vì được mang tài liệu vào phòng thi",
          "Vì kỳ thi đã bị hoãn lại",
          "Vì có bạn ngồi bên cạnh giúp đỡ",
        ],
        "Vì đề thi đều nằm trong phần đã ôn tập",
        "Câu 没想到题目都在复习的范围里 là nguyên nhân dẫn đến sự tự tin."
      ),
      readingComp(
        "hsk4-l3-q5",
        "这家公司不仅给员工提供良好的工作环境，还经常组织培训，帮助大家提高工作能力。",
        "Zhè jiā gōngsī bùjǐn gěi yuángōng tígōng liánghǎo de gōngzuò huánjìng, hái jīngcháng zǔzhī péixùn, bāngzhù dàjiā tígāo gōngzuò nénglì.",
        "Công ty này không chỉ cung cấp môi trường làm việc tốt cho nhân viên mà còn thường xuyên tổ chức đào tạo để giúp mọi người nâng cao năng lực.",
        "Công ty tổ chức đào tạo nhằm mục đích gì?",
        [
          "Giúp nhân viên nâng cao năng lực làm việc",
          "Giảm bớt số lượng nhân viên",
          "Tuyển thêm thực tập sinh mới",
          "Thay đổi địa điểm văn phòng",
        ],
        "Giúp nhân viên nâng cao năng lực làm việc",
        "Cụm 帮助大家提高工作能力 nêu rõ mục đích của việc tổ chức đào tạo (组织培训)."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 不要太着急赚钱 (Búyào tài zháojí zhuànqián — Đừng quá vội kiếm tiền)
  // ==========================================
  {
    id: "hsk4-l4-zhuanqian",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Đừng quá vội kiếm tiền",
    titleZh: "第四课：不要太着急赚钱",
    titlePinyin: "Dì sì kè: Búyào tài zháojí zhuànqián",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=5_cQxEoB8Pg",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 4 不要太着急赚钱",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "以为 (yǐwéi): Tưởng rằng, cho rằng (thường dùng khi suy nghĩ ban đầu khác với sự thật thực tế).",
      "原来 (yuánlái): Hóa ra (phó từ biểu thị phát hiện sự thật mới) / ban đầu, vốn dĩ (tính từ).",
      "并 (bìng): Dùng trước phủ định 不/没/非 để nhấn mạnh ngữ khí phủ định, bác bỏ suy đoán (并不/并没有).",
    ],
    newWords: [
      {
        hanzi: "提醒",
        pinyin: "tíxǐng",
        partOfSpeech: "Động từ",
        meaningVi: "nhắc nhở",
        radical: "扌 (Tài gẩy)",
        strokeCount: 28,
      },
      {
        hanzi: "完全",
        pinyin: "wánquán",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "hoàn toàn",
        radical: "宀 (Miên)",
        strokeCount: 13,
      },
      {
        hanzi: "赚",
        pinyin: "zhuàn",
        partOfSpeech: "Động từ",
        meaningVi: "kiếm (tiền), lời",
        radical: "贝 (Bối)",
        strokeCount: 14,
      },
      {
        hanzi: "调查",
        pinyin: "diàochá",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "điều tra, khảo sát",
        radical: "讠 (Ngôn)",
        strokeCount: 19,
      },
      {
        hanzi: "原来",
        pinyin: "yuánlái",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "hóa ra; ban đầu, vốn có",
        radical: "厂 (Hán)",
        strokeCount: 17,
      },
      {
        hanzi: "计划",
        pinyin: "jìhuà",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "kế hoạch, lập kế hoạch",
        radical: "讠 (Ngôn)",
        strokeCount: 10,
      },
      {
        hanzi: "经验",
        pinyin: "jīngyàn",
        partOfSpeech: "Danh từ",
        meaningVi: "kinh nghiệm",
        radical: "纟 (Mịch)",
        strokeCount: 18,
      },
      {
        hanzi: "积累",
        pinyin: "jīlěi",
        partOfSpeech: "Động từ",
        meaningVi: "tích lũy",
        radical: "禾 (Hòa)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Sắp xếp kế hoạch công việc",
        lines: [
          {
            speaker: "王静",
            zh: "经理，今天的会议我准备好了，另外您让我做的市场调查也完成了。",
            pinyin: "Jīnglǐ, jīntiān de huìyì wǒ zhǔnbèi hǎo le, lìngwài nín ràng wǒ zuò de shìchǎng diàochá yě wánchéng le.",
            vi: "Thưa giám đốc, cuộc họp hôm nay em đã chuẩn bị xong, ngoài ra khảo sát thị trường anh giao cũng hoàn thành rồi ạ.",
          },
          {
            speaker: "经理",
            zh: "效率真高！不过别忘了提醒大家，下午三点讨论下个月的工作计划。",
            pinyin: "Xiàolǜ zhēn gāo! Búguò bié wàng le tíxǐng dàjiā, xiàwǔ sān diǎn tǎolùn xià ge yuè de gōngzuò jìhuà.",
            vi: "Hiệu suất cao thật! Nhưng đừng quên nhắc mọi người 3 giờ chiều thảo luận kế hoạch tháng sau nhé.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Đừng quá vội kiếm tiền khi mới ra trường",
        lines: [
          {
            speaker: "旁白",
            zh: "很多年轻人刚参加工作时，总想着马上赚大钱，其实这并不完全正确。",
            pinyin: "Hěn duō niánqīngrén gāng cānjiā gōngzuò shí, zǒng xiǎngzhe mǎshàng zhuàn dàqián, qíshí zhè bìng bù wánquán zhèngquè.",
            vi: "Nhiều bạn trẻ mới đi làm luôn nghĩ đến việc kiếm thật nhiều tiền ngay, kỳ thực điều này không hoàn toàn đúng.",
          },
          {
            speaker: "旁白",
            zh: "刚开始工作，最重要的是积累工作经验，学习解决问题的能力。",
            pinyin: "Gāng kāishǐ gōngzuò, zuì zhòngyào de shì jīlěi gōngzuò jīngyàn, xuéxí jiějué wèntí de nénglì.",
            vi: "Khi mới bắt đầu đi làm, điều quan trọng nhất là tích lũy kinh nghiệm và học năng lực giải quyết vấn đề.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Động từ 以为 (tưởng rằng)",
        formula: "Chủ ngữ + 以为 + Sự việc (thực tế không phải vậy)",
        explanationVi:
          "Diễn tả phán đoán ban đầu của người nói khác với sự thật sau khi kiểm chứng.",
        examples: [
          {
            zh: "我以为他已经回家了，原来他还在办公室加班。",
            pinyin: "Wǒ yǐwéi tā yǐjīng huíjiā le, yuánlái tā hái zài bàngōngshì jiābān.",
            vi: "Tôi tưởng anh ấy về nhà rồi, hóa ra anh ấy vẫn đang tăng ca ở văn phòng.",
          },
        ],
      },
      {
        titleVi: "Phó từ 并 (nhấn mạnh phủ định)",
        formula: "Chủ ngữ + 并 + 不 / 没(有) + Động từ / Tính từ",
        explanationVi:
          "Đặt trước 不 hoặc 没(有) để nhấn mạnh rằng sự việc không giống như người khác nghĩ, tạo ngữ khí phản bác nhẹ nhàng nhưng dứt khoát.",
        examples: [
          {
            zh: "赚钱并不是工作的唯一目的。",
            pinyin: "Zhuànqián bìng bú shì gōngzuò de wéiyī mùdì.",
            vi: "Kiếm tiền hoàn toàn không phải là mục đích duy nhất của công việc.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk4-l4-q1",
        "赚",
        "zhuàn",
        "kiếm (tiền)",
        "Bộ 贝 (bối — liên quan đến tiền bạc) bên trái + 兼 bên phải."
      ),
      writingStroke(
        "hsk4-l4-q2",
        "计",
        "jì",
        "kế (kế hoạch, tính toán)",
        "Bộ 讠 (ngôn) bên trái + 十 bên phải, tổng cộng 4 nét."
      ),
      writingOrder(
        "hsk4-l4-q3",
        "Sắp xếp thành câu hoàn chỉnh: Đừng quên nhắc anh ấy mang theo kế hoạch công việc.",
        ["别忘了", "提醒他", "带上", "工作计划", "。"],
        "别忘了提醒他带上工作计划。",
        "Bié wàng le tíxǐng tā dàishàng gōngzuò jìhuà.",
        "Cấu trúc kiêm ngữ: 提醒 + Tân ngữ (他) + Động từ (带上工作计划)."
      ),
      writingOrder(
        "hsk4-l4-q4",
        "Sắp xếp thành câu hoàn chỉnh: Khi mới đi làm, tích lũy kinh nghiệm rất quan trọng.",
        ["刚开始工作时，", "积累经验", "非常", "重要", "。"],
        "刚开始工作时，积累经验非常重要。",
        "Gāng kāishǐ gōngzuò shí, jīlěi jīngyàn fēicháng zhòngyào.",
        "Trạng ngữ chỉ thời gian đặt đầu câu, cụm động-tân 积累经验 làm chủ ngữ."
      ),
      writingTwoSentences(
        "hsk4-l4-q5",
        "原来",
        "yuánlái",
        "hóa ra / vốn dĩ",
        "Câu 1 dùng 原来 nghĩa 'hóa ra' (phát hiện mới); Câu 2 dùng 原来 nghĩa 'ban đầu/vốn dĩ' trong công việc."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 只买对的，不买贵的 (Zhǐ mǎi duì de, bù mǎi guì de — Chỉ mua đúng, không mua đắt)
  // ==========================================
  {
    id: "hsk4-l5-maidui",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 5,
    title: "Bài 5: Chỉ mua đúng, không mua đắt",
    titleZh: "第五课：只买对的，不买贵的",
    titlePinyin: "Dì wǔ kè: Zhǐ mǎi duì de, bù mǎi guì de",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=KROtGyg-RqE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 5 只买对的，不买贵的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "难道 (nándào): Lẽ nào... sao? Dùng trong câu hỏi tu từ để nhấn mạnh sự ngạc nhiên hoặc khẳng định ngược lại.",
      "通过 (tōngguò): Thông qua (giới từ chỉ phương thức/công cụ) hoặc đi qua, vượt qua (động từ).",
      "可是 (kěshì): Nhưng, tuy nhiên — nối hai vế câu có quan hệ chuyển ngoặt.",
    ],
    newWords: [
      {
        hanzi: "家具",
        pinyin: "jiājù",
        partOfSpeech: "Danh từ",
        meaningVi: "đồ nội thất, đồ gia dụng",
        radical: "宀 (Miên)",
        strokeCount: 18,
      },
      {
        hanzi: "沙发",
        pinyin: "shāfā",
        partOfSpeech: "Danh từ",
        meaningVi: "ghế sô-pha",
        radical: "氵 (Chấm thủy)",
        strokeCount: 12,
      },
      {
        hanzi: "打折",
        pinyin: "dǎzhé",
        partOfSpeech: "Động từ",
        meaningVi: "giảm giá, chiết khấu",
        radical: "扌 (Tài gẩy)",
        strokeCount: 12,
      },
      {
        hanzi: "质量",
        pinyin: "zhìliàng",
        partOfSpeech: "Danh từ",
        meaningVi: "chất lượng",
        radical: "斤 (Cân)",
        strokeCount: 20,
      },
      {
        hanzi: "肯定",
        pinyin: "kěndìng",
        partOfSpeech: "Phó từ / Động từ",
        meaningVi: "chắc chắn, khẳng định",
        radical: "止 (Chỉ)",
        strokeCount: 16,
      },
      {
        hanzi: "流行",
        pinyin: "liúxíng",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "thịnh hành, phổ biến, hợp mốt",
        radical: "氵 (Chấm thủy)",
        strokeCount: 16,
      },
      {
        hanzi: "适合",
        pinyin: "shìhé",
        partOfSpeech: "Động từ",
        meaningVi: "phù hợp, thích hợp",
        radical: "辶 (Quai xước)",
        strokeCount: 15,
      },
      {
        hanzi: "光",
        pinyin: "guāng",
        partOfSpeech: "Phó từ / Danh từ",
        meaningVi: "chỉ, đơn thuần; ánh sáng",
        radical: "儿 (Nhi)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đi mua đồ nội thất giảm giá",
        lines: [
          {
            speaker: "李老师",
            zh: "你家新买的沙发真舒服，是在哪儿买的？",
            pinyin: "Nǐ jiā xīn mǎi de shāfā zhēn shūfu, shì zài nǎr mǎi de?",
            vi: "Ghế sô-pha nhà cậu mới mua êm thật đấy, mua ở đâu vậy?",
          },
          {
            speaker: "王静",
            zh: "是在家具城买的，正好赶上打折，价格比平时便宜了不少。",
            pinyin: "Shì zài jiājùchéng mǎi de, zhènghǎo gǎnshàng dǎzhé, jiàgé bǐ píngshí piányi le bùshǎo.",
            vi: "Mua ở trung tâm nội thất đó, vừa hay đúng đợt giảm giá nên rẻ hơn ngày thường khá nhiều.",
          },
          {
            speaker: "李老师",
            zh: "打折的东西质量肯定不好吧？",
            pinyin: "Dǎzhé de dōngxi zhìliàng kěndìng bù hǎo ba?",
            vi: "Đồ giảm giá thì chất lượng chắc chắn không tốt đâu nhỉ?",
          },
          {
            speaker: "王静",
            zh: "不一定，买东西要只买对的，不买贵的，适合自己才是最重要的。",
            pinyin: "Bù yídìng, mǎi dōngxi yào zhǐ mǎi duì de, bù mǎi guì de, shìhé zìjǐ cái shì zuì zhòngyào de.",
            vi: "Chưa chắc đâu, mua đồ là chỉ mua thứ đúng chứ không mua thứ đắt, phù hợp với mình mới là quan trọng nhất.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Xu hướng mua sắm qua mạng",
        lines: [
          {
            speaker: "小夏",
            zh: "现在通过网上买东西越来越流行了，你平时也网购吗？",
            pinyin: "Xiànzài tōngguò wǎngshàng mǎi dōngxi yuèláiyuè liúxíng le, nǐ píngshí yě wǎnggòu ma?",
            vi: "Bây giờ mua đồ qua mạng ngày càng thịnh hành, ngày thường cậu cũng mua online à?",
          },
          {
            speaker: "孙月",
            zh: "当然啦，网上不仅选择多，而且经常打折。不过光看价格不行，还要看大家的评价。",
            pinyin: "Dāngrán la, wǎngshàng bùjǐn xuǎnzé duō, érqiě jīngcháng dǎzhé. Búguò guāng kàn jiàgé bù xíng, hái yào kàn dàjiā de píngjià.",
            vi: "Tất nhiên rồi, trên mạng không những nhiều lựa chọn mà còn hay giảm giá. Nhưng chỉ nhìn giá thôi không được, còn phải xem đánh giá của mọi người nữa.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ phản vấn 难道 (lẽ nào... sao?)",
        formula: "难道 + Chủ ngữ + Động từ / Tính từ + 吗？",
        explanationVi:
          "Dùng để đặt câu hỏi tu từ, nhấn mạnh điều ngược lại với nội dung câu hỏi (nếu câu hỏi khẳng định thì ý là phủ định và ngược lại).",
        examples: [
          {
            zh: "难道贵的东西质量就一定好吗？",
            pinyin: "Nándào guì de dōngxi zhìliàng jiù yídìng hǎo ma?",
            vi: "Lẽ nào đồ đắt thì chất lượng cứ nhất định là tốt sao? (Ý: Không hẳn)",
          },
        ],
      },
      {
        titleVi: "Giới từ 通过 (thông qua)",
        formula: "通过 + Phương tiện / Cách thức / Quá trình + Động từ",
        explanationVi:
          "Biểu thị đạt được kết quả nào đó nhờ vào một phương tiện, con người hoặc quá trình nhất định.",
        examples: [
          {
            zh: "我通过朋友介绍认识了他。",
            pinyin: "Wǒ tōngguò péngyou jièshào rènshi le tā.",
            vi: "Tôi quen anh ấy thông qua sự giới thiệu của bạn bè.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk4-l5-q1",
        "这个沙发是在家具城买的，正好赶上打折，所以很便宜。",
        "Zhège shāfā shì zài jiājùchéng mǎi de, zhènghǎo gǎnshàng dǎzhé, suǒyǐ hěn piányi.",
        "Nghe câu và cho biết tại sao chiếc sô-pha này lại rẻ?",
        [
          "Vì đúng dịp giảm giá",
          "Vì là đồ cũ mua lại",
          "Vì chất lượng bị lỗi",
          "Vì bạn tặng miễn phí",
        ],
        "Vì đúng dịp giảm giá",
        "正好赶上打折 = vừa hay gặp đúng đợt giảm giá."
      ),
      listeningFill(
        "hsk4-l5-q2",
        "买东西不能光看价格，还要看质量。",
        "买东西不能光看价格，还要看___。",
        "Mǎi dōngxi bù néng guāng kàn jiàgé, hái yào kàn zhìliàng.",
        "Nghe và điền từ còn thiếu (chữ Hán):",
        "质量",
        "质量 (zhìliàng) nghĩa là chất lượng."
      ),
      listeningDialogue(
        "hsk4-l5-q3",
        "男：这件衣服很流行，你买吧。女：虽然流行，可是不太适合我。",
        "Nán: Zhè jiàn yīfu hěn liúxíng, nǐ mǎi ba. Nǚ: Suīrán liúxíng, kěshì bú tài shìhé wǒ.",
        "Nghe hội thoại: Tại sao người nữ không muốn mua chiếc áo đó?",
        [
          "Vì không hợp với cô ấy",
          "Vì áo đó quá lỗi mốt",
          "Vì áo đó quá đắt",
          "Vì cô ấy quên mang tiền",
        ],
        "Vì không hợp với cô ấy",
        "Người nữ nói rõ: 可是不太适合我 (nhưng không hợp với tôi lắm)."
      ),
      listeningMcq(
        "hsk4-l5-q4",
        "难道你忘了今天下午三点要开会吗？",
        "Nándào nǐ wàng le jīntiān xiàwǔ sān diǎn yào kāihuì ma?",
        "Nghe câu hỏi tu từ với 难道 và chọn ý đúng của người nói:",
        [
          "Nhắc nhở đối phương rằng 3 giờ chiều có cuộc họp",
          "Hỏi xem cuộc họp có bị hủy không",
          "Xin phép nghỉ họp buổi chiều",
          "Khen đối phương nhớ rất rõ lịch họp",
        ],
        "Nhắc nhở đối phương rằng 3 giờ chiều có cuộc họp",
        "难道……吗？ diễn tả sự ngạc nhiên khi thấy đối phương dường như quên lịch họp."
      ),
      listeningFill(
        "hsk4-l5-q5",
        "现在通过网络买东西越来越流行了。",
        "现在通过网络买东西越来越___了。",
        "Xiànzài tōngguò wǎngluò mǎi dōngxi yuèláiyuè liúxíng le.",
        "Nghe và điền từ HSK 4 còn thiếu:",
        "流行",
        "流行 (liúxíng) nghĩa là thịnh hành, phổ biến."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 一分钱一分货 (Yì fēn qián yì fēn huò — Tiền nào của nấy)
  // ==========================================
  {
    id: "hsk4-l6-yifenqian",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 6,
    title: "Bài 6: Tiền nào của nấy",
    titleZh: "第六课：一分钱一分货",
    titlePinyin: "Dì liù kè: Yì fēn qián yì fēn huò",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Yk2TadMVmb8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 6 一分钱一分货",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "竟然 (jìngrán): Vậy mà, không ngờ lại... Dùng để biểu thị kết quả vượt ngoài dự đoán, gây bất ngờ.",
      "倍 (bèi): Lần (gấp bội). Dùng trong so sánh số lượng: A 是 B 的三倍 (A gấp 3 lần B).",
      "值得 (zhídé): Đáng, xứng đáng (值得 + Động từ / Cụm động từ).",
    ],
    newWords: [
      {
        hanzi: "竟然",
        pinyin: "jìngrán",
        partOfSpeech: "Phó từ",
        meaningVi: "vậy mà, không ngờ lại",
        radical: "立 (Lập)",
        strokeCount: 23,
      },
      {
        hanzi: "倍",
        pinyin: "bèi",
        partOfSpeech: "Lượng từ",
        meaningVi: "lần (gấp bội)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 10,
      },
      {
        hanzi: "皮肤",
        pinyin: "pífū",
        partOfSpeech: "Danh từ",
        meaningVi: "da, làn da",
        radical: "皮 (Bì)",
        strokeCount: 13,
      },
      {
        hanzi: "好处",
        pinyin: "hǎochù",
        partOfSpeech: "Danh từ",
        meaningVi: "lợi ích, chỗ tốt",
        radical: "女 (Nữ)",
        strokeCount: 11,
      },
      {
        hanzi: "值得",
        pinyin: "zhídé",
        partOfSpeech: "Động từ",
        meaningVi: "đáng, xứng đáng",
        radical: "亻 (Nhân đứng)",
        strokeCount: 21,
      },
      {
        hanzi: "活动",
        pinyin: "huódòng",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "hoạt động, chương trình khuyến mãi",
        radical: "氵 (Chấm thủy)",
        strokeCount: 15,
      },
      {
        hanzi: "免费",
        pinyin: "miǎnfèi",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "miễn phí",
        radical: "儿 (Nhi)",
        strokeCount: 16,
      },
      {
        hanzi: "修理",
        pinyin: "xiūlǐ",
        partOfSpeech: "Động từ",
        meaningVi: "sửa chữa",
        radical: "亻 (Nhân đứng)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nước ép trái cây tươi và giá cả",
        lines: [
          {
            speaker: "小夏",
            zh: "这家店的果汁竟然卖三十块钱一杯，比超市贵了两倍！",
            pinyin: "Zhè jiā diàn de guǒzhī jìngrán mài sānshí kuài qián yì bēi, bǐ chāoshì guì le liǎng bèi!",
            vi: "Nước ép của tiệm này vậy mà bán 30 tệ một cốc, đắt hơn siêu thị gấp hai lần!",
          },
          {
            speaker: "王静",
            zh: "一分钱一分货嘛，这是纯天然的新鲜果汁，对皮肤很有好处。",
            pinyin: "Yì fēn qián yì fēn huò ma, zhè shì chúntiānrán de xīnxiān guǒzhī, duì pífū hěn yǒu hǎochù.",
            vi: "Tiền nào của nấy mà, đây là nước ép tươi nguyên chất hoàn toàn tự nhiên, rất tốt cho da.",
          },
          {
            speaker: "小夏",
            zh: "如果味道真的这么好，那三十块钱也值得。",
            pinyin: "Rúguǒ wèidào zhēn de zhème hǎo, nà sānshí kuài qián yě zhídé.",
            vi: "Nếu hương vị thực sự ngon như vậy thì 30 tệ cũng đáng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Dịch vụ bảo hành và sửa chữa",
        lines: [
          {
            speaker: "顾客",
            zh: "请问，这款电脑现在有什么优惠活动吗？",
            pinyin: "Qǐngwèn, zhè kuǎn diànnǎo xiànzài yǒu shénme yōuhuì huódòng ma?",
            vi: "Xin hỏi, mẫu máy tính này hiện có chương trình ưu đãi nào không?",
          },
          {
            speaker: "售货员",
            zh: "这个月搞活动，不仅送包，而且一年之内可以免费修理。",
            pinyin: "Zhège yuè gǎo huódòng, bùjǐn sòng bāo, érqiě yì nián zhīnèi kěyǐ miǎnfèi xiūlǐ.",
            vi: "Tháng này đang có khuyến mãi, không chỉ tặng túi mà trong vòng một năm còn được sửa chữa miễn phí.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 竟然 (vậy mà, không ngờ lại)",
        formula: "Chủ ngữ + 竟然 + Động từ / Tính từ",
        explanationVi:
          "Đứng trước vị ngữ để biểu thị sự kinh ngạc khi một sự việc xảy ra trái ngược với suy đoán thông thường.",
        examples: [
          {
            zh: "这么简单的问题，他竟然不会回答。",
            pinyin: "Zhème jiǎndān de wèntí, tā jìngrán bú huì huídá.",
            vi: "Câu hỏi đơn giản thế này mà anh ấy vậy mà không trả lời được.",
          },
        ],
      },
      {
        titleVi: "Động từ 值得 (đáng, xứng đáng)",
        formula: "Chủ ngữ + 值得 + Động từ / Cụm động từ",
        explanationVi:
          "Biểu thị làm việc gì đó có giá trị, mang lại kết quả xứng đáng với công sức hoặc chi phí bỏ ra.",
        examples: [
          {
            zh: "这本书内容很丰富，非常值得一看。",
            pinyin: "Zhè běn shū nèiróng hěn fēngfù, fēicháng zhídé yí kàn.",
            vi: "Cuốn sách này nội dung rất phong phú, vô cùng đáng đọc.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk4-l6-q1",
        "一分钱一分货，质量好的东西价格自然贵一点儿。",
        "Yì fēn qián yì fēn huò, zhìliàng hǎo de dōngxi jiàgé zìrán guì yìdiǎnr.",
        "Luyện nói thành ngữ 一分钱一分货 với ngữ điệu tự nhiên.",
        ["yì fēn qián (biến điệu 一)", "zhìliàng", "zìrán"],
        "Chú ý 一 trước thanh 1 (分 fēn) đọc biến điệu thành thanh 4 (yì)."
      ),
      speakingShadowing(
        "hsk4-l6-q2",
        "没想到这家店的价格竟然比网上贵了一倍。",
        "Méi xiǎngdào zhè jiā diàn de jiàgé jìngrán bǐ wǎngshàng guì le yí bèi.",
        "Đọc diễn cảm sự ngạc nhiên với phó từ 竟然 và lượng từ 倍.",
        ["jìngrán", "yí bèi (biến điệu 一)", "jiàgé"],
        "Nhấn mạnh từ 竟然 để thể hiện sắc thái bất ngờ."
      ),
      speakingShadowing(
        "hsk4-l6-q3",
        "多吃新鲜水果不仅对身体好，对皮肤也有很大好处。",
        "Duō chī xīnxiān shuǐguǒ bùjǐn duì shēntǐ hǎo, duì pífū yě yǒu hěn dà hǎochù.",
        "Luyện nói câu khuyên bảo về lợi ích của trái cây tươi.",
        ["xīnxiān", "pífū", "hǎochù"],
        "Phát âm rõ pífū (p bật hơi) và giữ nhịp đều ở hai vế 不仅……也……."
      ),
      speakingShadowing(
        "hsk4-l6-q4",
        "商场周末搞活动，所有会员都可以免费参加。",
        "Shāngchǎng zhōumò gǎo huódòng, suǒyǒu huìyuán dōu kěyǐ miǎnfèi cānjiā.",
        "Luyện đọc câu thông báo chương trình khuyến mãi miễn phí.",
        ["huódòng", "miǎnfèi", "suǒyǒu (biến điệu thanh 3)"],
        "所有 (suǒyǒu) có hai thanh 3 liền nhau nên đọc thành suóyǒu."
      ),
      speakingShadowing(
        "hsk4-l6-q5",
        "这台手机用了三年还没坏，真是太值得买了。",
        "Zhè tái shǒujī yòng le sān nián hái méi huài, zhēn shì tài zhídé mǎi le.",
        "Luyện nói câu đánh giá sản phẩm đáng tiền với 值得.",
        ["zhídé", "tài... le", "méi huài"],
        "Nhấn mạnh cụm 太值得买了 để thể hiện sự hài lòng."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 最好的医生是自己 (Zuì hǎo de yīshēng shì zìjǐ — Bác sĩ tốt nhất là chính mình)
  // ==========================================
  {
    id: "hsk4-l7-yisheng",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 7,
    title: "Bài 7: Bác sĩ tốt nhất là chính mình",
    titleZh: "第七课：最好的医生是自己",
    titlePinyin: "Dì qī kè: Zuì hǎo de yīshēng shì zìjǐ",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=7i9t5H7kUeo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 7 最好的医生是自己",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "既然……，就…… (jìrán..., jiù...): Đã... thì... Dùng để suy luận hoặc đưa ra kết luận dựa trên một sự thật đã rõ ràng.",
      "要是……，就…… (yàoshi..., jiù...): Nếu như... thì... Dùng trong khẩu ngữ để nêu giả thiết.",
      "于是 (yúshì): Thế là, do đó — nối hai hành động xảy ra liên tiếp có quan hệ nhân quả.",
    ],
    newWords: [
      {
        hanzi: "散步",
        pinyin: "sànbù",
        partOfSpeech: "Động từ",
        meaningVi: "đi dạo, tản bộ",
        radical: "攵 (Phộc)",
        strokeCount: 19,
      },
      {
        hanzi: "抽烟",
        pinyin: "chōuyān",
        partOfSpeech: "Động từ",
        meaningVi: "hút thuốc lá",
        radical: "扌 (Tài gẩy)",
        strokeCount: 18,
      },
      {
        hanzi: "原谅",
        pinyin: "yuánliàng",
        partOfSpeech: "Động từ",
        meaningVi: "tha thứ, bỏ qua",
        radical: "厂 (Hán)",
        strokeCount: 20,
      },
      {
        hanzi: "压力",
        pinyin: "yālì",
        partOfSpeech: "Danh từ",
        meaningVi: "áp lực",
        radical: "厂 (Hán)",
        strokeCount: 8,
      },
      {
        hanzi: "减肥",
        pinyin: "jiǎnféi",
        partOfSpeech: "Động từ",
        meaningVi: "giảm cân",
        radical: "冫 (Băng)",
        strokeCount: 19,
      },
      {
        hanzi: "熬夜",
        pinyin: "áoyè",
        partOfSpeech: "Động từ",
        meaningVi: "thức khuya",
        radical: "灬 (Hỏa)",
        strokeCount: 22,
      },
      {
        hanzi: "健康",
        pinyin: "jiànkāng",
        partOfSpeech: "Tính từ / Danh từ",
        meaningVi: "khỏe mạnh, sức khỏe",
        radical: "亻 (Nhân đứng)",
        strokeCount: 21,
      },
      {
        hanzi: "养成",
        pinyin: "yǎngchéng",
        partOfSpeech: "Động từ",
        meaningVi: "hình thành, rèn luyện (thói quen)",
        radical: "丷 (Bát)",
        strokeCount: 15,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Khuyên bạn bỏ thuốc và giữ gìn sức khỏe",
        lines: [
          {
            speaker: "小夏",
            zh: "你最近怎么老是咳嗽？是不是抽烟抽得太多了？",
            pinyin: "Nǐ zuìjìn zěnme lǎoshi késou? Shì bú shì chōuyān chōu de tài duō le?",
            vi: "Dạo này sao cậu cứ ho mãi thế? Có phải hút thuốc nhiều quá không?",
          },
          {
            speaker: "马可",
            zh: "工作压力太大了，有时候晚上还得熬夜加班。",
            pinyin: "Gōngzuò yālì tài dà le, yǒu shíhou wǎnshang hái děi áoyè jiābān.",
            vi: "Áp lực công việc lớn quá, thỉnh thoảng buổi tối còn phải thức khuya tăng ca.",
          },
          {
            speaker: "小夏",
            zh: "既然知道抽烟和熬夜对身体不好，就应该早点儿改掉这些坏习惯。",
            pinyin: "Jìrán zhīdào chōuyān hé áoyè duì shēntǐ bù hǎo, jiù yīnggāi zǎodiǎnr gǎidiào zhèxiē huài xíguàn.",
            vi: "Đã biết hút thuốc và thức khuya có hại cho sức khỏe thì nên sớm bỏ những thói quen xấu đó đi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Bác sĩ tốt nhất chính là bản thân mình",
        lines: [
          {
            speaker: "旁白",
            zh: "很多人觉得生病了只要去医院看医生就行了，其实最好的医生是自己。",
            pinyin: "Hěn duō rén juéde shēngbìng le zhǐyào qù yīyuàn kàn yīshēng jiù xíng le, qíshí zuì hǎo de yīshēng shì zìjǐ.",
            vi: "Nhiều người nghĩ bị bệnh chỉ cần đến bệnh viện gặp bác sĩ là được, thực ra bác sĩ tốt nhất chính là bản thân mình.",
          },
          {
            speaker: "旁白",
            zh: "平时养成早睡早起、饭后散步的好习惯，保持心情愉快，身体自然就会健康。",
            pinyin: "Píngshí yǎngchéng zǎoshuì zǎoqǐ, fànhòu sànbù de hǎo xíguàn, bǎochí xīnqíng yúkuài, shēntǐ zìrán jiù huì jiànkāng.",
            vi: "Ngày thường rèn luyện thói quen ngủ sớm dậy sớm, đi dạo sau bữa ăn, giữ tâm trạng vui vẻ thì cơ thể tự nhiên sẽ khỏe mạnh.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc suy luận 既然……，就……",
        formula: "既然 + Sự thật đã biết，(Chủ ngữ) + 就 + Kết luận / Đề nghị",
        explanationVi:
          "Dùng để đưa ra lời khuyên, kết luận hoặc quyết định dựa trên một tiền đề có thật ở vế trước.",
        examples: [
          {
            zh: "既然你想减肥，就应该少吃甜食，多运动。",
            pinyin: "Jìrán nǐ xiǎng jiǎnféi, jiù yīnggāi shǎo chī tiánshí, duō yùndòng.",
            vi: "Đã muốn giảm cân thì cậu nên ăn ít đồ ngọt và vận động nhiều hơn.",
          },
        ],
      },
      {
        titleVi: "Liên từ 于是 (thế là, do đó)",
        formula: "Sự việc 1（Nguyên nhân），于是 + Sự việc 2（Hành động tiếp theo）",
        explanationVi:
          "Nối hai vế câu trong đó vế sau là hành động nảy sinh trực tiếp từ tình huống ở vế trước.",
        examples: [
          {
            zh: "天气突然变冷了，于是我多穿了一件外套。",
            pinyin: "Tiānqì tūrán biàn lěng le, yúshì wǒ duō chuān le yí jiàn wàitào.",
            vi: "Thời tiết đột nhiên trở lạnh, thế là tôi mặc thêm một chiếc áo khoác.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk4-l7-q1",
        "很多年轻人因为工作压力大，经常熬夜加班，也不按时吃饭，结果身体越来越差。其实，最好的医生是自己，平时一定要养成良好的生活习惯。",
        "Hěn duō niánqīngrén yīnwèi gōngzuò yālì dà, jīngcháng áoyè jiābān, yě bú ànshí chīfàn, jiéguǒ shēntǐ yuèláiyuè chà. Qíshí, zuì hǎo de yīshēng shì zìjǐ, píngshí yídìng yào yǎngchéng liánghǎo de shēnghuó xíguàn.",
        "Nhiều người trẻ vì áp lực công việc lớn nên thường xuyên thức khuya tăng ca, ăn uống không đúng giờ, kết quả sức khỏe ngày càng kém. Thực ra bác sĩ tốt nhất là chính mình, ngày thường nhất định phải rèn thói quen sống lành mạnh.",
        "Đoạn văn khuyên các bạn trẻ điều gì?",
        [
          "Rèn luyện thói quen sinh hoạt lành mạnh",
          "Uống thật nhiều thuốc bổ mỗi ngày",
          "Nghỉ việc ngay lập tức",
          "Chỉ ăn một bữa mỗi ngày",
        ],
        "Rèn luyện thói quen sinh hoạt lành mạnh",
        "Câu cuối nhấn mạnh: 平时一定要养成良好的生活习惯."
      ),
      readingComp(
        "hsk4-l7-q2",
        "我以前为了减肥，每天晚上都不吃晚饭，结果不仅没瘦下来，胃还疼了起来。后来听医生的话，每天坚持散步一小时，现在身体健康多了。",
        "Wǒ yǐqián wèile jiǎnféi, měitiān wǎnshang dōu bù chī wǎnfàn, jiéguǒ bùjǐn méi shòu xiàlái, wèi hái téng le qǐlái. Hòulái tīng yīshēng de huà, měitiān jiānchí sànbù yì xiǎoshí, xiànzài shēntǐ jiànkāng duō le.",
        "Trước đây để giảm cân, tối nào tôi cũng nhịn ăn tối, kết quả không những không gầy đi mà còn bị đau dạ dày. Sau đó nghe lời bác sĩ, mỗi ngày kiên trì đi bộ 1 tiếng, giờ sức khỏe tốt hơn nhiều.",
        "Cách nào đã giúp người nói khỏe mạnh hơn?",
        [
          "Kiên trì đi dạo một tiếng mỗi ngày",
          "Nhịn ăn tối hoàn toàn",
          "Uống thuốc giảm cân cấp tốc",
          "Ngủ nướng đến trưa",
        ],
        "Kiên trì đi dạo một tiếng mỗi ngày",
        "Câu 每天坚持散步一小时，现在身体健康多了 nêu rõ phương pháp hiệu quả."
      ),
      readingComp(
        "hsk4-l7-q3",
        "既然你知道抽烟对肺不好，而且家人也不喜欢烟味，那就趁早把烟戒了吧。",
        "Jìrán nǐ zhīdào chōuyān duì fèi bù hǎo, érqiě jiārén yě bù xǐhuan yānwèi, nà jiù chènzǎo bǎ yān jiè le ba.",
        "Đã biết hút thuốc hại phổi mà người nhà cũng không thích mùi khói thuốc, thế thì hãy sớm bỏ thuốc đi.",
        "Người nói đang khuyên đối phương làm gì?",
        [
          "Sớm bỏ thuốc lá",
          "Ra ngoài ban công hút thuốc",
          "Mua loại thuốc lá đắt tiền hơn",
          "Đi khám phổi mỗi tuần",
        ],
        "Sớm bỏ thuốc lá",
        "把烟戒了吧 = hãy cai/bỏ thuốc lá đi."
      ),
      readingComp(
        "hsk4-l7-q4",
        "昨天我和好朋友吵架了，后来我发现是自己太着急误会了他，于是主动发短信向他道歉，他很快就原谅了我。",
        "Zuótiān wǒ hé hǎo péngyou chǎojià le, hòulái wǒ fāxiàn shì zìjǐ tài zháojí wùhuì le tā, yúshì zhǔdòng fā duǎnxìn xiàng tā dàoqiàn, tā hěn kuài jiù yuánliàng le wǒ.",
        "Hôm qua tôi và bạn thân cãi nhau, sau đó tôi phát hiện do mình quá nóng vội nên hiểu lầm cậu ấy, thế là tôi chủ động nhắn tin xin lỗi, cậu ấy nhanh chóng tha thứ cho tôi.",
        "Kết quả của sự việc là gì?",
        [
          "Bạn thân đã tha thứ cho người nói",
          "Hai người không bao giờ nói chuyện nữa",
          "Bạn thân không trả lời tin nhắn",
          "Người nói từ chối xin lỗi",
        ],
        "Bạn thân đã tha thứ cho người nói",
        "Cụm 他很快就原谅了我 cho biết người bạn đã nhanh chóng tha thứ."
      ),
      readingComp(
        "hsk4-l7-q5",
        "研究表明，每天保持愉快的心情，学会放松自己，能有效减少工作和生活带来的压力。",
        "Yánjiū biǎomíng, měitiān bǎochí yúkuài de xīnqíng, xuéhuì fàngsōng zìjǐ, néng yǒuxiào jiǎnshǎo gōngzuò hé shēnghuó dàilái de yālì.",
        "Nghiên cứu chỉ ra rằng mỗi ngày giữ tâm trạng vui vẻ, học cách thư giãn bản thân có thể giảm hiệu quả áp lực từ công việc và cuộc sống.",
        "Theo đoạn văn, làm thế nào để giảm áp lực hiệu quả?",
        [
          "Giữ tâm trạng vui vẻ và học cách thư giãn",
          "Làm việc liên tục không nghỉ ngơi",
          "Tránh giao tiếp với mọi người",
          "Thay đổi công việc mỗi tháng",
        ],
        "Giữ tâm trạng vui vẻ và học cách thư giãn",
        "Đoạn văn nêu rõ: 保持愉快的心情，学会放松自己."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 生活中不缺少美 (Shēnghuó zhōng bù quēshǎo měi — Cuộc sống không thiếu cái đẹp)
  // ==========================================
  {
    id: "hsk4-l8-shenghuo",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 8,
    title: "Bài 8: Cuộc sống không thiếu cái đẹp",
    titleZh: "第八课：生活中不缺少美",
    titlePinyin: "Dì bā kè: Shēnghuó zhōng bù quēshǎo měi",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Jc7VvzaKz_k",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 8 生活中不缺少美",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "只要……，就…… (zhǐyào..., jiù...): Chỉ cần... thì... Biểu thị điều kiện cần/đủ để dẫn đến kết quả.",
      "关于 (guānyú): Về, liên quan đến (giới từ thường đứng đầu câu hoặc trước danh từ để giới thiệu chủ đề).",
      "使 (shǐ): Khiến cho, làm cho (dùng nhiều trong văn viết trang trọng, tương đương 让).",
    ],
    newWords: [
      {
        hanzi: "缺少",
        pinyin: "quēshǎo",
        partOfSpeech: "Động từ",
        meaningVi: "thiếu, thiếu hụt",
        radical: "缶 (Phẫu)",
        strokeCount: 14,
      },
      {
        hanzi: "发现",
        pinyin: "fāxiàn",
        partOfSpeech: "Động từ",
        meaningVi: "phát hiện, nhận ra",
        radical: "又 (Hựu)",
        strokeCount: 13,
      },
      {
        hanzi: "鼓励",
        pinyin: "gǔlì",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "khích lệ, động viên",
        radical: "鼓 (Cổ)",
        strokeCount: 20,
      },
      {
        hanzi: "幽默",
        pinyin: "yōumò",
        partOfSpeech: "Tính từ",
        meaningVi: "hài hước",
        radical: "幺 (Yêu)",
        strokeCount: 25,
      },
      {
        hanzi: "态度",
        pinyin: "tàidù",
        partOfSpeech: "Danh từ",
        meaningVi: "thái độ",
        radical: "心 (Tâm)",
        strokeCount: 17,
      },
      {
        hanzi: "积极",
        pinyin: "jījí",
        partOfSpeech: "Tính từ",
        meaningVi: "tích cực",
        radical: "禾 (Hòa)",
        strokeCount: 17,
      },
      {
        hanzi: "风景",
        pinyin: "fēngjǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "phong cảnh",
        radical: "风 (Phong)",
        strokeCount: 16,
      },
      {
        hanzi: "仔细",
        pinyin: "zǐxì",
        partOfSpeech: "Tính từ",
        meaningVi: "tỉ mỉ, cẩn thận",
        radical: "亻 (Nhân đứng)",
        strokeCount: 13,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Thái độ tích cực trong cuộc sống",
        lines: [
          {
            speaker: "王静",
            zh: "我发现你总是那么开心，好像从来没有烦恼一样。",
            pinyin: "Wǒ fāxiàn nǐ zǒngshì nàme kāixīn, hǎoxiàng cónglái méiyǒu fánnǎo yíyàng.",
            vi: "Mình phát hiện cậu lúc nào cũng vui vẻ như vậy, cứ như chưa bao giờ có phiền muộn ấy.",
          },
          {
            speaker: "孙月",
            zh: "其实每个人都会遇到困难，只要保持积极的态度，很多问题都能解决。",
            pinyin: "Qíshí měi ge rén dōu huì yùdào kùnnan, zhǐyào bǎochí jījí de tàidù, hěn duō wèntí dōu néng jiějué.",
            vi: "Thực ra ai cũng sẽ gặp khó khăn, chỉ cần giữ thái độ tích cực thì nhiều vấn đề đều có thể giải quyết.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Cuộc sống không thiếu cái đẹp",
        lines: [
          {
            speaker: "旁白",
            zh: "生活中并不缺少美，缺少的是发现美的眼睛。",
            pinyin: "Shēnghuó zhōng bìng bù quēshǎo měi, quēshǎo de shì fāxiàn měi de yǎnjing.",
            vi: "Trong cuộc sống vốn không hề thiếu cái đẹp, cái thiếu là đôi mắt biết phát hiện cái đẹp.",
          },
          {
            speaker: "旁白",
            zh: "只要我们放慢脚步，仔细观察身边的风景，就能感受到生活的快乐。",
            pinyin: "Zhǐyào wǒmen fàngmàn jiǎobù, zǐxì guānchá shēnbiān de fēngjǐng, jiù néng gǎnshòudào shēnghuó de kuàilè.",
            vi: "Chỉ cần chúng ta chậm lại bước chân, quan sát tỉ mỉ phong cảnh xung quanh thì sẽ cảm nhận được niềm vui của cuộc sống.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc điều kiện 只要……，就……",
        formula: "只要 + Điều kiện，(Chủ ngữ) + 就 + Kết quả",
        explanationVi:
          "Biểu thị 'chỉ cần... thì...', nhấn mạnh điều kiện nêu ra là đủ để đạt được kết quả ở vế sau.",
        examples: [
          {
            zh: "只要仔细观察，就能发现生活中的美。",
            pinyin: "Zhǐyào zǐxì guānchá, jiù néng fāxiàn shēnghuó zhōng de měi.",
            vi: "Chỉ cần quan sát tỉ mỉ là có thể phát hiện ra cái đẹp trong cuộc sống.",
          },
        ],
      },
      {
        titleVi: "Giới từ 关于 (về, liên quan đến)",
        formula: "关于 + Danh từ / Cụm danh từ，Chủ ngữ + Vị ngữ",
        explanationVi:
          "Dùng để dẫn ra đối tượng hoặc phạm vi đề cập đến, thường đặt ở đầu câu làm trạng ngữ hoặc dùng làm định ngữ (关于……的 + Danh từ).",
        examples: [
          {
            zh: "关于这个问题，大家有不同的看法。",
            pinyin: "Guānyú zhège wèntí, dàjiā yǒu bùtóng de kànfǎ.",
            vi: "Về vấn đề này, mọi người có những cách nhìn khác nhau.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk4-l8-q1",
        "缺",
        "quē",
        "thiếu",
        "Bộ 缶 (phẫu) bên trái + 夬 bên phải, tổng cộng 10 nét."
      ),
      writingStroke(
        "hsk4-l8-q2",
        "态",
        "tài",
        "thái (thái độ)",
        "Trên là 太 (thái), dưới là bộ 心 (tâm), tổng cộng 8 nét."
      ),
      writingOrder(
        "hsk4-l8-q3",
        "Sắp xếp thành câu hoàn chỉnh: Chỉ cần giữ thái độ tích cực, bạn nhất định sẽ thành công.",
        ["只要", "保持积极的态度，", "你", "一定会成功", "。"],
        "只要保持积极的态度，你一定会成功。",
        "Zhǐyào bǎochí jījí de tàidù, nǐ yídìng huì chénggōng.",
        "Cấu trúc 只要……（就）…… diễn tả điều kiện cần và đủ."
      ),
      writingOrder(
        "hsk4-l8-q4",
        "Sắp xếp thành câu hoàn chỉnh: Sự khích lệ của thầy giáo khiến tôi có thêm tự tin.",
        ["老师的鼓励", "使我", "更加", "有信心了", "。"],
        "老师的鼓励使我更加有信心了。",
        "Lǎoshī de gǔlì shǐ wǒ gèngjiā yǒu xìnxīn le.",
        "Động từ sai khiến 使 (khiến cho) nối chủ ngữ 老师的鼓励 và tân ngữ 我."
      ),
      writingTwoSentences(
        "hsk4-l8-q5",
        "仔细",
        "zǐxì",
        "tỉ mỉ, cẩn thận",
        "Câu 1 nói về việc quan sát cuộc sống/phong cảnh; Câu 2 nói về việc kiểm tra tài liệu trong công việc."
      ),
    ],
  },

  // ==========================================
  // BÀI 9: 阳光总在风雨后 (Yángguāng zǒng zài fēngyǔ hòu — Ánh nắng luôn đến sau cơn mưa)
  // ==========================================
  {
    id: "hsk4-l9-yangguang",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 9,
    title: "Bài 9: Ánh nắng luôn đến sau cơn mưa",
    titleZh: "第九课：阳光总在风雨后",
    titlePinyin: "Dì jiǔ kè: Yángguāng zǒng zài fēngyǔ hòu",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=OLOQsjKhKyM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 9 阳光总在风雨后",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "却 (què): Lại, nhưng lại (phó từ chuyển ngoặt, luôn đứng sau chủ ngữ và trước động từ/tính từ).",
      "无论……都/也…… (wúlùn... dōu/yě...): Bất luận... đều/cũng... (tương đồng với 不管, dùng nhiều trong văn viết).",
      "否则 (fǒuzé): Nếu không thì (liên từ chỉ kết quả ngược lại nếu không làm theo vế trước).",
    ],
    newWords: [
      {
        hanzi: "阳光",
        pinyin: "yángguāng",
        partOfSpeech: "Danh từ",
        meaningVi: "ánh nắng mặt trời",
        radical: "阝 (Phụ)",
        strokeCount: 12,
      },
      {
        hanzi: "成功",
        pinyin: "chénggōng",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "thành công",
        radical: "戈 (Qua)",
        strokeCount: 11,
      },
      {
        hanzi: "失败",
        pinyin: "shībài",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "thất bại",
        radical: "大 (Đại)",
        strokeCount: 13,
      },
      {
        hanzi: "坚持",
        pinyin: "jiānchí",
        partOfSpeech: "Động từ",
        meaningVi: "kiên trì",
        radical: "土 (Thổ)",
        strokeCount: 16,
      },
      {
        hanzi: "放弃",
        pinyin: "fàngqì",
        partOfSpeech: "Động từ",
        meaningVi: "từ bỏ, bỏ cuộc",
        radical: "攵 (Phộc)",
        strokeCount: 15,
      },
      {
        hanzi: "勇敢",
        pinyin: "yǒnggǎn",
        partOfSpeech: "Tính từ",
        meaningVi: "dũng cảm",
        radical: "力 (Lực)",
        strokeCount: 20,
      },
      {
        hanzi: "结果",
        pinyin: "jiéguǒ",
        partOfSpeech: "Danh từ / Liên từ",
        meaningVi: "kết quả; kết quả là",
        radical: "纟 (Mịch)",
        strokeCount: 17,
      },
      {
        hanzi: "顺利",
        pinyin: "shùnlì",
        partOfSpeech: "Tính từ",
        meaningVi: "thuận lợi, suôn sẻ",
        radical: "页 (Hiệt)",
        strokeCount: 16,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Động viên bạn sau khi thi trượt",
        lines: [
          {
            speaker: "李进",
            zh: "别难过了，这次考试虽然没通过，但你已经很努力了。",
            pinyin: "Bié nánguò le, zhè cì kǎoshì suīrán méi tōngguò, dàn nǐ yǐjīng hěn nǔlì le.",
            vi: "Đừng buồn nữa, kỳ thi lần này tuy chưa đỗ nhưng cậu đã rất cố gắng rồi.",
          },
          {
            speaker: "小夏",
            zh: "我复习了那么久，结果却失败了，真有点儿想放弃。",
            pinyin: "Wǒ fùxí le nàme jiǔ, jiéguǒ què shībài le, zhēn yǒudiǎnr xiǎng fàngqì.",
            vi: "Mình ôn tập lâu như vậy, kết quả lại thất bại, thật sự hơi muốn bỏ cuộc.",
          },
          {
            speaker: "李进",
            zh: "阳光总在风雨后，无论遇到什么困难，只要坚持下去，就一定能成功。",
            pinyin: "Yángguāng zǒng zài fēngyǔ hòu, wúlùn yùdào shénme kùnnan, zhǐyào jiānchí xiàqù, jiù yídìng néng chénggōng.",
            vi: "Ánh nắng luôn đến sau cơn mưa, bất luận gặp khó khăn gì, chỉ cần kiên trì thì nhất định sẽ thành công.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Bài học từ thất bại",
        lines: [
          {
            speaker: "旁白",
            zh: "没有人的生活是一帆风顺的。面对失败时，我们要勇敢地总结经验，找出问题所在。",
            pinyin: "Méiyǒu rén de shēnghuó shì yìfān-fēngshùn de. Miànduì shībài shí, wǒmen yào yǒnggǎn de zǒngjié jīngyàn, zhǎochū wèntí suǒzài.",
            vi: "Không có cuộc đời ai là thuận buồm xuôi gió mãi. Khi đối mặt với thất bại, ta phải dũng cảm đúc kết kinh nghiệm và tìm ra nguyên nhân.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ chuyển ngoặt 却 (lại, nhưng lại)",
        formula: "Vế 1，Chủ ngữ + 却 + Động từ / Tính từ",
        explanationVi:
          "Biểu thị sự tương phản hoặc trái ngược với vế trước. Khác với 但是/可是, 却 là phó từ nên bắt buộc đứng sau chủ ngữ.",
        examples: [
          {
            zh: "他虽然年纪不大，经验却非常丰富。",
            pinyin: "Tā suīrán niánjì bú dà, jīngyàn què fēicháng fēngfù.",
            vi: "Anh ấy tuy tuổi không lớn nhưng kinh nghiệm lại vô cùng phong phú.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 无论……都/也…… (bất luận... đều...)",
        formula: "无论 + Đại từ nghi vấn / Cụm lựa chọn，Chủ ngữ + 都/也 + Vị ngữ",
        explanationVi:
          "Nhấn mạnh kết quả không đổi trong mọi điều kiện hoặc hoàn cảnh.",
        examples: [
          {
            zh: "无论多难，我们都不能放弃。",
            pinyin: "Wúlùn duō nán, wǒmen dōu bù néng fàngqì.",
            vi: "Bất luận khó khăn đến đâu, chúng ta đều không thể bỏ cuộc.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk4-l9-q1",
        "无论遇到什么困难，只要坚持下去，就一定能成功。",
        "Wúlùn yùdào shénme kùnnan, zhǐyào jiānchí xiàqù, jiù yídìng néng chénggōng.",
        "Nghe câu và chọn thông điệp chính:",
        [
          "Kiên trì vượt qua khó khăn sẽ dẫn đến thành công",
          "Gặp khó khăn thì nên đổi việc ngay",
          "Thành công chỉ phụ thuộc vào may mắn",
          "Không nên đặt mục tiêu quá cao",
        ],
        "Kiên trì vượt qua khó khăn sẽ dẫn đến thành công",
        "只要坚持下去，就一定能成功 = chỉ cần kiên trì tiếp tục thì nhất định sẽ thành công."
      ),
      listeningFill(
        "hsk4-l9-q2",
        "他虽然失败了好几次，却从来没有放弃。",
        "他虽然失败了好几次，却从来没有___。",
        "Tā suīrán shībài le hǎo jǐ cì, què cónglái méiyǒu fàngqì.",
        "Nghe và điền từ còn thiếu (chữ Hán):",
        "放弃",
        "放弃 (fàngqì) nghĩa là từ bỏ, bỏ cuộc."
      ),
      listeningDialogue(
        "hsk4-l9-q3",
        "女：你这次出差顺利吗？男：刚开始不太顺利，结果后来问题都解决了。",
        "Nǚ: Nǐ zhè cì chūchāi shùnlì ma? Nán: Gāng kāishǐ bú tài shùnlì, jiéguǒ hòulái wèntí dōu jiějué le.",
        "Nghe hội thoại: Chuyến công tác của người nam diễn ra thế nào?",
        [
          "Lúc đầu hơi trắc trở nhưng sau đó đã giải quyết xong",
          "Suôn sẻ từ đầu đến cuối",
          "Bị hủy bỏ vì thời tiết xấu",
          "Vẫn chưa giải quyết được vấn đề",
        ],
        "Lúc đầu hơi trắc trở nhưng sau đó đã giải quyết xong",
        "Người nam nói rõ: 刚开始不太顺利，结果后来问题都解决了."
      ),
      listeningMcq(
        "hsk4-l9-q4",
        "我们必须勇敢地面对失败，从中总结经验。",
        "Wǒmen bìxū yǒnggǎn de miànduì shībài, cóngzhōng zǒngjié jīngyàn.",
        "Nghe câu và cho biết chúng ta nên làm gì khi đối mặt với thất bại?",
        [
          "Dũng cảm đối mặt và đúc kết kinh nghiệm",
          "Quên ngay đi và không nghĩ tới nữa",
          "Đổ lỗi cho người khác",
          "Tránh tham gia các thử thách mới",
        ],
        "Dũng cảm đối mặt và đúc kết kinh nghiệm",
        "勇敢地面对失败，从中总结经验 = dũng cảm đối mặt thất bại, từ đó đúc kết kinh nghiệm."
      ),
      listeningFill(
        "hsk4-l9-q5",
        "雨停了，外面露出了温暖的阳光。",
        "雨停了，外面露出了温暖的___。",
        "Yǔ tíng le, wàimiàn lùchū le wēnnuǎn de yángguāng.",
        "Nghe và điền từ HSK 4 còn thiếu:",
        "阳光",
        "阳光 (yángguāng) nghĩa là ánh nắng mặt trời."
      ),
    ],
  },

  // ==========================================
  // BÀI 10: 幸福的标准 (Xìngfú de biāozhǔn — Tiêu chuẩn của hạnh phúc)
  // ==========================================
  {
    id: "hsk4-l10-xingfu",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    lessonNumber: 10,
    title: "Bài 10: Tiêu chuẩn của hạnh phúc",
    titleZh: "第十课：幸福的标准",
    titlePinyin: "Dì shí kè: Xìngfú de biāozhǔn",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=IAi3mgs4Q6c",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 10 幸福的标准",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "不过 (búguò): Nhưng mà, có điều (liên từ chuyển ngoặt nhẹ hơn 但是, dùng nhiều trong khẩu ngữ).",
      "确实 (quèshí): Quả thực, đúng là (phó từ khẳng định sự thật khách quan).",
      "在……看来 (zài... kànlái): Theo cách nhìn của... (dùng để dẫn ra quan điểm cá nhân).",
    ],
    newWords: [
      {
        hanzi: "标准",
        pinyin: "biāozhǔn",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "tiêu chuẩn, chuẩn mực",
        radical: "木 (Mộc)",
        strokeCount: 19,
      },
      {
        hanzi: "羡慕",
        pinyin: "xiànmù",
        partOfSpeech: "Động từ",
        meaningVi: "ngưỡng mộ, ghen tị (tích cực)",
        radical: "羊 (Dương)",
        strokeCount: 26,
      },
      {
        hanzi: "丰富",
        pinyin: "fēngfù",
        partOfSpeech: "Tính từ / Động từ",
        meaningVi: "phong phú, làm phong phú",
        radical: "丨 (Cổn)",
        strokeCount: 16,
      },
      {
        hanzi: "无聊",
        pinyin: "wúliáo",
        partOfSpeech: "Tính từ",
        meaningVi: "nhàm chán, buồn tẻ",
        radical: "一 (Nhất)",
        strokeCount: 15,
      },
      {
        hanzi: "讨厌",
        pinyin: "tǎoyàn",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "ghét, đáng ghét",
        radical: "讠 (Ngôn)",
        strokeCount: 11,
      },
      {
        hanzi: "确实",
        pinyin: "quèshí",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "quả thực, đích thực",
        radical: "石 (Thạch)",
        strokeCount: 20,
      },
      {
        hanzi: "满足",
        pinyin: "mǎnzú",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "thỏa mãn, hài lòng, đáp ứng",
        radical: "氵 (Chấm thủy)",
        strokeCount: 20,
      },
      {
        hanzi: "珍惜",
        pinyin: "zhēnxī",
        partOfSpeech: "Động từ",
        meaningVi: "trân trọng, quý trọng",
        radical: "王 (Ngọc)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ngưỡng mộ cuộc sống của người khác",
        lines: [
          {
            speaker: "王静",
            zh: "真羡慕你，工作轻松，工资又高，业余生活还那么丰富。",
            pinyin: "Zhēn xiànmù nǐ, gōngzuò qīngsōng, gōngzī yòu gāo, yèyú shēnghuó hái nàme fēngfù.",
            vi: "Thật ngưỡng mộ cậu, công việc nhẹ nhàng, lương lại cao, cuộc sống ngoài giờ còn phong phú như vậy.",
          },
          {
            speaker: "孙月",
            zh: "其实我也羡慕你呀！你有一个温暖的家，每天下班都能和家人一起吃饭，多幸福啊。",
            pinyin: "Qíshí wǒ yě xiànmù nǐ ya! Nǐ yǒu yí ge wēnnuǎn de jiā, měitiān xiàbān dōu néng hé jiārén yìqǐ chīfàn, duō xìngfú a.",
            vi: "Thực ra mình cũng ngưỡng mộ cậu đấy! Cậu có một gia đình ấm áp, ngày nào tan làm cũng được ăn cơm cùng người nhà, hạnh phúc biết bao.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Tiêu chuẩn hạnh phúc của mỗi người",
        lines: [
          {
            speaker: "旁白",
            zh: "每个人对幸福的标准都不一样。在我看来，幸福并不是拥有多少钱，而是懂得满足和珍惜。",
            pinyin: "Měi ge rén duì xìngfú de biāozhǔn dōu bù yíyàng. Zài wǒ kànlái, xìngfú bìng bú shì yōngyǒu duōshao qián, ér shì dǒngde mǎnzú hé zhēnxī.",
            vi: "Tiêu chuẩn hạnh phúc của mỗi người đều khác nhau. Theo tôi, hạnh phúc không phải là có bao nhiêu tiền mà là biết hài lòng và trân trọng.",
          },
          {
            speaker: "旁白",
            zh: "珍惜眼前的人和事，我们的生活确实会变得越来越美好。",
            pinyin: "Zhēnxī yǎnqián de rén hé shì, wǒmen de shēnghuó quèshí huì biàn de yuèláiyuè měihǎo.",
            vi: "Trân trọng con người và sự việc trước mắt, cuộc sống của chúng ta quả thực sẽ trở nên ngày càng tươi đẹp.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nêu quan điểm 在……看来",
        formula: "在 + Người / Góc độ + 看来，+ Quan điểm",
        explanationVi:
          "Dùng để trình bày ý kiến, đánh giá từ góc nhìn của một cá nhân hoặc tập thể ('theo tôi thấy...', 'theo cách nhìn của...').",
        examples: [
          {
            zh: "在我看来，健康比金钱更重要。",
            pinyin: "Zài wǒ kànlái, jiànkāng bǐ jīnqián gèng zhòngyào.",
            vi: "Theo tôi thấy, sức khỏe quan trọng hơn tiền bạc.",
          },
        ],
      },
      {
        titleVi: "Phó từ 确实 (quả thực, đúng là)",
        formula: "Chủ ngữ + 确实 + Động từ / Tính từ",
        explanationVi:
          "Dùng để xác nhận một sự việc là đúng sự thật, thường dùng khi đồng tình với nhận xét của người khác.",
        examples: [
          {
            zh: "你的汉语水平确实提高了不少。",
            pinyin: "Nǐ de Hànyǔ shuǐpíng quèshí tígāo le bùshǎo.",
            vi: "Trình độ tiếng Trung của cậu quả thực đã tiến bộ không ít.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk4-l10-q1",
        "每个人对幸福的标准都不一样，没有固定的答案。",
        "Měi ge rén duì xìngfú de biāozhǔn dōu bù yíyàng, méiyǒu gùdìng de dá'àn.",
        "Luyện nói câu chủ đề của Bài 10 về tiêu chuẩn hạnh phúc.",
        ["biāozhǔn", "bù yíyàng", "dá'àn"],
        "Phát âm rõ biāozhǔn (thanh 1 - thanh 3) và ngắt nghỉ tự nhiên ở dấu phẩy."
      ),
      speakingShadowing(
        "hsk4-l10-q2",
        "在我看来，幸福就是懂得满足，并且珍惜眼前的一切。",
        "Zài wǒ kànlái, xìngfú jiùshì dǒngde mǎnzú, bìngqiě zhēnxī yǎnqián de yíqiè.",
        "Luyện trình bày quan điểm cá nhân với cấu trúc 在我看来.",
        ["zài wǒ kànlái", "mǎnzú", "zhēnxī"],
        "Nhấn nhẹ vào 满足 và 珍惜 để truyền tải cảm xúc chân thành."
      ),
      speakingShadowing(
        "hsk4-l10-q3",
        "我真羡慕你的业余生活这么丰富，从来不会觉得无聊。",
        "Wǒ zhēn xiànmù nǐ de yèyú shēnghuó zhème fēngfù, cónglái bú huì juéde wúliáo.",
        "Luyện nói câu bày tỏ sự ngưỡng mộ với 羡慕, 丰富 và 无聊.",
        ["xiànmù", "fēngfù", "wúliáo"],
        "Chú ý thanh 4 liên tiếp trong 羡慕 (xiànmù) và 丰富 (fēngfù)."
      ),
      speakingShadowing(
        "hsk4-l10-q4",
        "这部电影确实很感人，不过结尾有点儿太短了。",
        "Zhè bù diànyǐng quèshí hěn gǎnrén, búguò jiéwěi yǒudiǎnr tài duǎn le.",
        "Luyện nói câu nhận xét kết hợp 确实 và 不过.",
        ["quèshí", "búguò", "yǒudiǎnr"],
        "Đọc liền mạch 有点儿 (yǒudiǎnr) với âm cuốn lưỡi nhẹ."
      ),
      speakingShadowing(
        "hsk4-l10-q5",
        "不要总是羡慕别人，其实你已经拥有很多值得珍惜的东西了。",
        "Búyào zǒngshì xiànmù biérén, qíshí nǐ yǐjīng yōngyǒu hěn duō zhídé zhēnxī de dōngxi le.",
        "Luyện nói câu khuyên nhủ sâu sắc về sự trân trọng hiện tại.",
        ["zǒngshì", "yōngyǒu", "zhídé zhēnxī"],
        "Giữ ngữ điệu ấm áp, nhấn mạnh cụm 值得珍惜."
      ),
    ],
  },
];
