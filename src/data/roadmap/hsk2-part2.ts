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

export const HSK2_PART2_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 9: 题太多，我没做完 (Tí tài duō, wǒ méi zuòwán — Đề nhiều quá, tôi làm chưa xong)
  // ==========================================
  {
    id: "hsk2-l9-meizuowan",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 9,
    title: "Bài 9: Đề nhiều quá, tôi làm chưa xong",
    titleZh: "第九课：题太多，我没做完",
    titlePinyin: "Dì jiǔ kè: Tí tài duō, wǒ méi zuòwán",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=1LMC1Iy99Jo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 9 题太多，我没做完",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ kết quả (V + 完/懂/见/到/好/对/错) biểu thị kết quả của động tác. Thể phủ định luôn dùng 没(有) + V + Bổ ngữ kết quả (không dùng 不 và không thêm 了 ở cuối).",
      "Giới từ 从 (cóng — từ) biểu thị điểm khởi đầu về thời gian hoặc không gian: 从 + Điểm bắt đầu + (到 + Điểm kết thúc) + Động từ.",
      "Số thứ tự được tạo bằng cách thêm 第 (dì) trước số từ: 第一 (thứ nhất), 第二 (thứ hai).",
    ],
    newWords: [
      {
        hanzi: "错",
        pinyin: "cuò",
        partOfSpeech: "Tính từ",
        meaningVi: "sai, nhầm lẫn",
        radical: "钅 (Kim)",
        strokeCount: 13,
      },
      {
        hanzi: "从",
        pinyin: "cóng",
        partOfSpeech: "Giới từ",
        meaningVi: "từ (thời gian, địa điểm)",
        radical: "人 (Nhân)",
        strokeCount: 4,
      },
      {
        hanzi: "跳舞",
        pinyin: "tiàowǔ",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "khiêu vũ, nhảy múa",
        radical: "足 (Túc)",
        strokeCount: 27,
      },
      {
        hanzi: "第一",
        pinyin: "dì-yī",
        partOfSpeech: "Số từ",
        meaningVi: "thứ nhất, đầu tiên",
        radical: "竹 (Trúc)",
        strokeCount: 12,
      },
      {
        hanzi: "希望",
        pinyin: "xīwàng",
        partOfSpeech: "Động từ",
        meaningVi: "hy vọng, mong muốn",
        radical: "巾 (Cân)",
        strokeCount: 18,
      },
      {
        hanzi: "问题",
        pinyin: "wèntí",
        partOfSpeech: "Danh từ",
        meaningVi: "vấn đề, câu hỏi",
        radical: "口 (Khẩu)",
        strokeCount: 26,
      },
      {
        hanzi: "欢迎",
        pinyin: "huānyíng",
        partOfSpeech: "Động từ",
        meaningVi: "hoan nghênh, chào đón",
        radical: "又 (Hựu)",
        strokeCount: 13,
      },
      {
        hanzi: "上班",
        pinyin: "shàngbān",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "đi làm, vào ca",
        radical: "一 (Nhất)",
        strokeCount: 13,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trong phòng học — Hỏi thăm về bài kiểm tra",
        lines: [
          {
            speaker: "A",
            zh: "你昨天的考试怎么样？",
            pinyin: "Nǐ zuótiān de kǎoshì zěnmeyàng?",
            vi: "Bài thi hôm qua của bạn thế nào?",
          },
          {
            speaker: "B",
            zh: "题太多，我没做完。",
            pinyin: "Tí tài duō, wǒ méi zuòwán.",
            vi: "Đề nhiều quá, tôi làm chưa xong.",
          },
          {
            speaker: "A",
            zh: "你都做对了吗？",
            pinyin: "Nǐ dōu zuòduì le ma?",
            vi: "Bạn có làm đúng hết không?",
          },
          {
            speaker: "B",
            zh: "有两道题做错了，希望下次能考好。",
            pinyin: "Yǒu liǎng dào tí zuòcuò le, xīwàng xià cì néng kǎohǎo.",
            vi: "Có hai câu làm sai rồi, hy vọng lần sau có thể thi tốt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở công ty — Chào đón đồng nghiệp mới",
        lines: [
          {
            speaker: "A",
            zh: "欢迎你来我们公司上班！",
            pinyin: "Huānyíng nǐ lái wǒmen gōngsī shàngbān!",
            vi: "Chào mừng bạn đến công ty chúng tôi làm việc!",
          },
          {
            speaker: "B",
            zh: "谢谢！这是我第一天上班，有很多问题想问您。",
            pinyin: "Xièxie! Zhè shì wǒ dì-yī tiān shàngbān, yǒu hěn duō wèntí xiǎng wèn nín.",
            vi: "Cảm ơn! Đây là ngày đầu tiên tôi đi làm, có rất nhiều vấn đề muốn hỏi anh/chị.",
          },
          {
            speaker: "A",
            zh: "没关系，我们从上午九点上班到下午五点。",
            pinyin: "Méi guānxi, wǒmen cóng shàngwǔ jiǔ diǎn shàngbān dào xiàwǔ wǔ diǎn.",
            vi: "Không sao đâu, chúng ta làm việc từ 9 giờ sáng đến 5 giờ chiều.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ kết quả (结果补语)",
        formula: "Khẳng định: V + 完/懂/见/到/对/错 (+ 了) | Phủ định: 没(有) + V + Bổ ngữ kết quả",
        explanationVi:
          "Một số động từ hoặc tính từ đứng ngay sau động từ chính để diễn đạt kết quả của hành động. Lưu ý: Thể phủ định bắt buộc dùng 没 (không dùng 不) và lược bỏ 了.",
        examples: [
          {
            zh: "我看见王老师了。",
            pinyin: "Wǒ kànjiàn Wáng lǎoshī le.",
            vi: "Tôi đã nhìn thấy thầy Vương rồi.",
          },
          {
            zh: "今天的作业我还没写完。",
            pinyin: "Jīntiān de zuòyè wǒ hái méi xiěwán.",
            vi: "Bài tập hôm nay tôi vẫn chưa viết xong.",
          },
        ],
      },
      {
        titleVi: "Giới từ 从 (cóng) và số thứ tự 第 (dì)",
        formula: "从 + Thời gian/Địa điểm A (+ 到 + B) + V | 第 + Số từ + Lượng từ + Danh từ",
        explanationVi:
          "从 dùng để chỉ điểm bắt đầu của khoảng thời gian hoặc quãng đường. 第 đặt trước số từ để tạo số thứ tự (第一 — thứ nhất, 第二个 — cái thứ hai).",
        examples: [
          {
            zh: "她从七岁开始学习跳舞。",
            pinyin: "Tā cóng qī suì kāishǐ xuéxí tiàowǔ.",
            vi: "Cô ấy bắt đầu học nhảy từ năm 7 tuổi.",
          },
          {
            zh: "这是我第一次来北京。",
            pinyin: "Zhè shì wǒ dì-yī cì lái Běijīng.",
            vi: "Đây là lần đầu tiên tôi đến Bắc Kinh.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk2-l9-q1",
        "昨天的汉语考试题太多，我没做完。",
        "Zuótiān de Hànyǔ kǎoshì tí tài duō, wǒ méi zuòwán.",
        "Nghe và chọn lý do người nói chưa làm xong bài thi:",
        [
          "Đề thi nhiều quá",
          "Đề thi khó quá",
          "Quên mang bút",
          "Đến phòng thi muộn",
        ],
        "Đề thi nhiều quá",
        "Câu nghe được: 题太多，我没做完 (Đề nhiều quá, tôi làm chưa xong)."
      ),
      listeningFill(
        "hsk2-l9-q2",
        "你听懂老师的话了吗？",
        "你听___老师的话了吗？",
        "Nǐ tīng___ lǎoshī de huà le ma?",
        "Nghe và điền bổ ngữ kết quả còn thiếu (1 chữ Hán):",
        "懂",
        "听懂 (tīngdǒng) nghĩa là nghe hiểu."
      ),
      listeningMcq(
        "hsk2-l9-q3",
        "我们公司从上午九点上班到下午五点。",
        "Wǒmen gōngsī cóng shàngwǔ jiǔ diǎn shàngbān dào xiàwǔ wǔ diǎn.",
        "Nghe và chọn khung giờ làm việc của công ty:",
        [
          "Từ 9 giờ sáng đến 5 giờ chiều",
          "Từ 8 giờ sáng đến 5 giờ chiều",
          "Từ 9 giờ sáng đến 6 giờ chiều",
          "Từ 8 giờ sáng đến 4 giờ chiều",
        ],
        "Từ 9 giờ sáng đến 5 giờ chiều",
        "从上午九点到下午五点 = từ 9 giờ sáng đến 5 giờ chiều."
      ),
      listeningDialogue(
        "hsk2-l9-q4",
        "男：你从小就喜欢跳舞吗？女：对，我从六岁开始学跳舞。",
        "Nán: Nǐ cóngxiǎo jiù xǐhuan tiàowǔ ma? Nǚ: Duì, wǒ cóng liù suì kāishǐ xué tiàowǔ.",
        "Nghe đoạn hội thoại: Cô gái bắt đầu học nhảy từ năm mấy tuổi?",
        ["6 tuổi", "7 tuổi", "8 tuổi", "10 tuổi"],
        "6 tuổi",
        "Cô gái trả lời: 我从六岁开始学跳舞 (Tôi bắt đầu học nhảy từ năm 6 tuổi)."
      ),
      listeningFill(
        "hsk2-l9-q5",
        "这是我第一天来公司上班。",
        "这是我___天来公司上班。",
        "Zhè shì wǒ ___ tiān lái gōngsī shàngbān.",
        "Nghe và điền số thứ tự còn thiếu (2 chữ Hán):",
        "第一",
        "第一 (dì-yī) nghĩa là thứ nhất, đầu tiên."
      ),
    ],
  },

  // ==========================================
  // BÀI 10: 别找了，手机在桌子上呢 (Bié zhǎo le, shǒujī zài zhuōzi shàng ne — Đừng tìm nữa, điện thoại ở trên bàn kìa)
  // ==========================================
  {
    id: "hsk2-l10-biezhaole",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 10,
    title: "Bài 10: Đừng tìm nữa, điện thoại ở trên bàn kìa",
    titleZh: "第十课：别找了，手机在桌子上呢",
    titlePinyin: "Dì shí kè: Bié zhǎo le, shǒujī zài zhuōzi shàng ne",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=soSL3BT5KdQ",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 10 别找了，手机在桌子上呢",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu cầu khiến phủ định 别 + V + (了) hoặc 不要 + V + (了) dùng để khuyên ngăn ai đó đừng làm gì nữa.",
      "Giới từ 对 (duì — đối với) dùng trong cấu trúc A + 对 + B + Tính từ/Động từ (ví dụ: 跑步对身体很好 — Chạy bộ rất tốt cho sức khỏe).",
      "Phó từ 正在 (zhèngzài) đặt trước động từ biểu thị hành động đang diễn ra tại thời điểm nói.",
    ],
    newWords: [
      {
        hanzi: "课",
        pinyin: "kè",
        partOfSpeech: "Danh từ",
        meaningVi: "bài học, tiết học",
        radical: "讠 (Ngôn)",
        strokeCount: 10,
      },
      {
        hanzi: "帮助",
        pinyin: "bāngzhù",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "giúp đỡ, sự giúp đỡ",
        radical: "巾 (Cân)",
        strokeCount: 16,
      },
      {
        hanzi: "别",
        pinyin: "bié",
        partOfSpeech: "Phó từ",
        meaningVi: "đừng, chớ",
        radical: "刂 (Đao)",
        strokeCount: 7,
      },
      {
        hanzi: "哥哥",
        pinyin: "gēge",
        partOfSpeech: "Danh từ",
        meaningVi: "anh trai",
        radical: "口 (Khẩu)",
        strokeCount: 20,
      },
      {
        hanzi: "鸡蛋",
        pinyin: "jīdàn",
        partOfSpeech: "Danh từ",
        meaningVi: "trứng gà",
        radical: "鸟 (Điểu)",
        strokeCount: 18,
      },
      {
        hanzi: "西瓜",
        pinyin: "xīguā",
        partOfSpeech: "Danh từ",
        meaningVi: "dưa hấu",
        radical: "西 (Tây)",
        strokeCount: 11,
      },
      {
        hanzi: "正在",
        pinyin: "zhèngzài",
        partOfSpeech: "Phó từ",
        meaningVi: "đang (diễn ra)",
        radical: "止 (Chỉ)",
        strokeCount: 11,
      },
      {
        hanzi: "手机",
        pinyin: "shǒujī",
        partOfSpeech: "Danh từ",
        meaningVi: "điện thoại di động",
        radical: "手 (Thủ)",
        strokeCount: 10,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở nhà — Tìm điện thoại di động",
        lines: [
          {
            speaker: "A",
            zh: "别找了，手机在桌子上呢，电脑旁边。",
            pinyin: "Bié zhǎo le, shǒujī zài zhuōzi shàng ne, diànnǎo pángbiān.",
            vi: "Đừng tìm nữa, điện thoại ở trên bàn kìa, ngay cạnh máy tính ấy.",
          },
          {
            speaker: "B",
            zh: "你看见我的衣服了吗？红色的那件。",
            pinyin: "Nǐ kànjiàn wǒ de yīfu le ma? Hóngsè de nà jiàn.",
            vi: "Anh có thấy cái áo của em không? Cái màu đỏ ấy.",
          },
          {
            speaker: "A",
            zh: "那件衣服我帮你洗了，别穿了，穿白色的吧。",
            pinyin: "Nà jiàn yīfu wǒ bāng nǐ xǐ le, bié chuān le, chuān báisè de ba.",
            vi: "Cái áo đó anh giặt giúp em rồi, đừng mặc nữa, mặc cái màu trắng đi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở nhà — Khuyên anh trai giữ gìn sức khỏe",
        lines: [
          {
            speaker: "A",
            zh: "哥哥，不要看电视了，明天上午还有汉语课呢。",
            pinyin: "Gēge, búyào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.",
            vi: "Anh trai ơi, đừng xem tivi nữa, sáng mai vẫn còn tiết tiếng Trung đấy.",
          },
          {
            speaker: "B",
            zh: "看电视对学汉语有帮助，我再看十分钟。",
            pinyin: "Kàn diànshì duì xué Hànyǔ yǒu bāngzhù, wǒ zài kàn shí fēnzhōng.",
            vi: "Xem tivi có ích cho việc học tiếng Trung mà, anh xem thêm 10 phút nữa.",
          },
          {
            speaker: "A",
            zh: "好吧，吃点儿西瓜和鸡蛋再休息吧。",
            pinyin: "Hǎo ba, chī diǎnr xīguā hé jīdàn zài xiūxi ba.",
            vi: "Được rồi, ăn chút dưa hấu và trứng gà rồi nghỉ ngơi nhé.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu cầu khiến phủ định: 别……了 / 不要……了",
        formula: "别 / 不要 + Động từ / Cụm động từ + (了)",
        explanationVi:
          "Dùng để khuyên ngăn hoặc yêu cầu ai đó dừng hành động đang làm hoặc không làm một việc gì đó. Trong khẩu ngữ, 别……了 ngắn gọn và thân mật hơn 不要……了.",
        examples: [
          {
            zh: "别玩儿手机了，快睡觉吧！",
            pinyin: "Bié wánr shǒujī le, kuài shuìjiào ba!",
            vi: "Đừng chơi điện thoại nữa, mau đi ngủ đi!",
          },
          {
            zh: "不要说话了，老师正在讲课呢。",
            pinyin: "Búyào shuōhuà le, lǎoshī zhèngzài jiǎngkè ne.",
            vi: "Đừng nói chuyện nữa, thầy giáo đang giảng bài kìa.",
          },
        ],
      },
      {
        titleVi: "Giới từ 对 (duì — đối với)",
        formula: "Chủ ngữ + 对 + Tân ngữ + Tính từ / Cụm động từ",
        explanationVi:
          "Giới từ 对 biểu thị mối quan hệ giữa người/sự vật với đối tượng chịu tác động, thường dịch là 'đối với', 'cho'.",
        examples: [
          {
            zh: "跑步对身体很好。",
            pinyin: "Pǎobù duì shēntǐ hěn hǎo.",
            vi: "Chạy bộ rất tốt cho sức khỏe.",
          },
          {
            zh: "老师对我们非常好。",
            pinyin: "Lǎoshī duì wǒmen fēicháng hǎo.",
            vi: "Thầy cô đối xử với chúng tôi vô cùng tốt.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk2-l10-q1",
        "别找了，手机在桌子上呢。",
        "Bié zhǎo le, shǒujī zài zhuōzi shàng ne.",
        "Đọc nhại câu khuyên ngăn và chỉ vị trí:",
        ["bié (thanh 2)", "zhǎo (thanh 3)", "shǒujī (3-1)"],
        "Chú ý ngắt nhịp nhẹ sau 别找了, giữ thanh nhẹ ở 了 và 呢."
      ),
      speakingShadowing(
        "hsk2-l10-q2",
        "不要看电视了，明天上午还有汉语课呢。",
        "Búyào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.",
        "Đọc nhại câu nhắc nhở với 不要……了:",
        ["búyào (biến điệu 不 thành thanh 2)", "diànshì (4-4)", "Hànyǔ kè"],
        "不 đứng trước thanh 4 (yào) phải biến điệu đọc thành búyào."
      ),
      speakingShadowing(
        "hsk2-l10-q3",
        "看电视对学汉语很有帮助。",
        "Kàn diànshì duì xué Hànyǔ hěn yǒu bāngzhù.",
        "Đọc nhại câu dùng giới từ 对:",
        ["duì (thanh 4)", "bāngzhù (1-4)"],
        "Nhấn giọng nhẹ ở 很有帮助 để làm nổi bật ý nghĩa tích cực."
      ),
      speakingShadowing(
        "hsk2-l10-q4",
        "哥哥正在厨房做鸡蛋呢。",
        "Gēge zhèngzài chúfáng zuò jīdàn ne.",
        "Đọc nhại câu dùng phó từ 正在:",
        ["gēge (thanh 1 + thanh nhẹ)", "zhèngzài (4-4)", "jīdàn (1-4)"],
        "Âm tiết thứ hai của 哥哥 đọc thanh nhẹ, tránh đọc nặng thành gēgē."
      ),
      speakingShadowing(
        "hsk2-l10-q5",
        "别买了，家里还有很多西瓜呢。",
        "Bié mǎi le, jiālǐ hái yǒu hěn duō xīguā ne.",
        "Đọc nhại câu khuyên ngăn khi mua sắm:",
        ["bié mǎi (2-3)", "xīguā (1-1)"],
        "Giữ cao độ đều cho cả hai âm tiết thanh 1 của 西瓜 (xīguā)."
      ),
    ],
  },

  // ==========================================
  // BÀI 11: 他比我大三岁 (Tā bǐ wǒ dà sān suì — Anh ấy lớn hơn tôi 3 tuổi)
  // ==========================================
  {
    id: "hsk2-l11-biwoda",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Anh ấy lớn hơn tôi 3 tuổi",
    titleZh: "第十一课：他比我大三岁",
    titlePinyin: "Dì shíyī kè: Tā bǐ wǒ dà sān suì",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Cin Chinese",
    youtubeUrl: "https://www.youtube.com/watch?v=6oyHFGWn0-U",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 11 他比我大三岁",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu chữ 比 (so sánh hơn): A + 比 + B + Tính từ (+ Số lượng cụ thể / 一点儿 / 得多). Tuyệt đối KHÔNG dùng 很, 非常 trước tính từ trong câu chữ 比.",
      "Phủ định của câu chữ 比 là A + 没有 + B + (那么/这么) + Tính từ (A không ... bằng B).",
      "Trợ động từ 可能 (kěnéng — có lẽ, có thể) đứng trước động từ hoặc chủ ngữ để biểu thị sự phỏng đoán.",
    ],
    newWords: [
      {
        hanzi: "唱歌",
        pinyin: "chànggē",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "hát, ca hát",
        radical: "口 (Khẩu)",
        strokeCount: 25,
      },
      {
        hanzi: "男",
        pinyin: "nán",
        partOfSpeech: "Tính từ",
        meaningVi: "nam, con trai",
        radical: "田 (Điền)",
        strokeCount: 7,
      },
      {
        hanzi: "女",
        pinyin: "nǚ",
        partOfSpeech: "Tính từ",
        meaningVi: "nữ, con gái",
        radical: "女 (Nữ)",
        strokeCount: 3,
      },
      {
        hanzi: "孩子",
        pinyin: "háizi",
        partOfSpeech: "Danh từ",
        meaningVi: "trẻ em, con cái",
        radical: "子 (Tử)",
        strokeCount: 12,
      },
      {
        hanzi: "右边",
        pinyin: "yòubian",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "bên phải",
        radical: "口 (Khẩu)",
        strokeCount: 10,
      },
      {
        hanzi: "比",
        pinyin: "bǐ",
        partOfSpeech: "Giới từ",
        meaningVi: "so với (so sánh hơn)",
        radical: "比 (Tỷ)",
        strokeCount: 4,
      },
      {
        hanzi: "便宜",
        pinyin: "piányi",
        partOfSpeech: "Tính từ",
        meaningVi: "rẻ (giá cả)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 17,
      },
      {
        hanzi: "说话",
        pinyin: "shuōhuà",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "nói chuyện, phát biểu",
        radical: "讠 (Ngôn)",
        strokeCount: 17,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở trường — Giới thiệu về anh trai",
        lines: [
          {
            speaker: "A",
            zh: "右边那个说话的男孩子是谁？",
            pinyin: "Yòubian nàge shuōhuà de nánháizi shì shéi?",
            vi: "Cậu con trai đang nói chuyện ở bên phải là ai vậy?",
          },
          {
            speaker: "B",
            zh: "那是我哥哥，他比我大三岁。",
            pinyin: "Nà shì wǒ gēge, tā bǐ wǒ dà sān suì.",
            vi: "Đó là anh trai tôi, anh ấy lớn hơn tôi 3 tuổi.",
          },
          {
            speaker: "A",
            zh: "他喜欢唱歌吗？",
            pinyin: "Tā xǐhuan chànggē ma?",
            vi: "Anh ấy có thích hát không?",
          },
          {
            speaker: "B",
            zh: "喜欢，他唱得比我好得多。",
            pinyin: "Xǐhuan, tā chàng de bǐ wǒ hǎo de duō.",
            vi: "Thích chứ, anh ấy hát hay hơn tôi nhiều.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở cửa hàng — So sánh giá cả và thời tiết",
        lines: [
          {
            speaker: "A",
            zh: "今天的天气比昨天冷一点儿。",
            pinyin: "Jīntiān de tiānqì bǐ zuótiān lěng yìdiǎnr.",
            vi: "Thời tiết hôm nay lạnh hơn hôm qua một chút.",
          },
          {
            speaker: "B",
            zh: "是啊，我想买一件新衣服。这件比那件便宜五十块钱。",
            pinyin: "Shì a, wǒ xiǎng mǎi yí jiàn xīn yīfu. Zhè jiàn bǐ nà jiàn piányi wǔshí kuài qián.",
            vi: "Đúng vậy, tôi muốn mua một chiếc áo mới. Chiếc này rẻ hơn chiếc kia 50 tệ.",
          },
          {
            speaker: "A",
            zh: "那件白色的也不错，可能更适合女孩子穿。",
            pinyin: "Nà jiàn báisè de yě búcuò, kěnéng gèng shìhé nǚháizi chuān.",
            vi: "Chiếc màu trắng kia cũng đẹp đấy, có lẽ hợp với con gái mặc hơn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu so sánh hơn với 比 (bǐ)",
        formula: "A + 比 + B + Tính từ (+ Số lượng cụ thể / 一点儿 / 得多)",
        explanationVi:
          "Dùng để so sánh sự khác biệt giữa A và B. Khi muốn nêu rõ mức độ chênh lệch, đặt số lượng cụ thể (三岁, 五十块) hoặc 一点儿 (một chút), 得多 (nhiều) ngay sau tính từ.",
        examples: [
          {
            zh: "西瓜比苹果贵两块钱。",
            pinyin: "Xīguā bǐ píngguǒ guì liǎng kuài qián.",
            vi: "Dưa hấu đắt hơn táo 2 tệ.",
          },
          {
            zh: "姐姐比我高一点儿。",
            pinyin: "Jiějie bǐ wǒ gāo yìdiǎnr.",
            vi: "Chị gái cao hơn tôi một chút.",
          },
        ],
      },
      {
        titleVi: "Phủ định câu so sánh với 没有 (méiyǒu)",
        formula: "A + 没有 + B + (这么/那么) + Tính từ",
        explanationVi:
          "Để diễn đạt 'A không ... bằng B', ta dùng 没有 thay cho 不比 trong phần lớn tình huống giao tiếp hàng ngày.",
        examples: [
          {
            zh: "我唱歌没有哥哥好。",
            pinyin: "Wǒ chànggē méiyǒu gēge hǎo.",
            vi: "Tôi hát không hay bằng anh trai.",
          },
          {
            zh: "今天没有昨天那么热。",
            pinyin: "Jīntiān méiyǒu zuótiān nàme rè.",
            vi: "Hôm nay không nóng bằng hôm qua.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk2-l11-q1",
        "我今年二十岁，我哥哥比我大三岁。他很喜欢唱歌，唱得比我好得多。",
        "Wǒ jīnnián èrshí suì, wǒ gēge bǐ wǒ dà sān suì. Tā hěn xǐhuan chànggē, chàng de bǐ wǒ hǎo de duō.",
        "Năm nay tôi 20 tuổi, anh trai lớn hơn tôi 3 tuổi. Anh ấy rất thích hát, hát hay hơn tôi nhiều.",
        "Đọc đoạn văn và cho biết anh trai năm nay bao nhiêu tuổi?",
        ["23 tuổi", "17 tuổi", "20 tuổi", "25 tuổi"],
        "23 tuổi",
        "Tôi 20 tuổi, anh trai lớn hơn 3 tuổi (比我大三岁) → 23 tuổi."
      ),
      readingComp(
        "hsk2-l11-q2",
        "这件红衣服二百块，那件白衣服一百五十块。白衣服比红衣服便宜五十块。",
        "Zhè jiàn hóng yīfu èrbǎi kuài, nà jiàn bái yīfu yìbǎi wǔshí kuài. Bái yīfu bǐ hóng yīfu piányi wǔshí kuài.",
        "Chiếc áo đỏ này 200 tệ, chiếc áo trắng kia 150 tệ. Áo trắng rẻ hơn áo đỏ 50 tệ.",
        "Nhận định nào sau đây là ĐÚNG theo đoạn văn?",
        [
          "Áo trắng rẻ hơn áo đỏ 50 tệ",
          "Áo đỏ rẻ hơn áo trắng 50 tệ",
          "Hai chiếc áo bằng giá nhau",
          "Áo trắng giá 200 tệ",
        ],
        "Áo trắng rẻ hơn áo đỏ 50 tệ",
        "Đoạn văn nêu rõ: 白衣服比红衣服便宜五十块."
      ),
      readingComp(
        "hsk2-l11-q3",
        "右边那个正在说话的女孩子是我的同学，她叫大卫的妹妹。",
        "Yòubian nàge zhèngzài shuōhuà de nǚháizi shì wǒ de tóngxué, tā shì Dàwèi de mèimei.",
        "Cô gái đang nói chuyện ở bên phải là bạn học của tôi, cô ấy là em gái của David.",
        "Cô gái đang nói chuyện đứng ở vị trí nào?",
        ["Bên phải", "Bên trái", "Phía trước", "Phía sau"],
        "Bên phải",
        "右边 (yòubian) nghĩa là bên phải."
      ),
      readingComp(
        "hsk2-l11-q4",
        "昨天三十度，今天二十八度。今天没有昨天那么热，不过还是很暖和。",
        "Zuótiān sānshí dù, jīntiān èrshíbā dù. Jīntiān méiyǒu zuótiān nàme rè, búguò háishì hěn nuǎnhuo.",
        "Hôm qua 30 độ, hôm nay 28 độ. Hôm nay không nóng bằng hôm qua, nhưng vẫn rất ấm áp.",
        "Thời tiết hôm nay so với hôm qua thế nào?",
        [
          "Không nóng bằng hôm qua",
          "Nóng hơn hôm qua nhiều",
          "Lạnh hơn hôm qua 10 độ",
          "Nóng bằng hôm qua",
        ],
        "Không nóng bằng hôm qua",
        "今天没有昨天那么热 = Hôm nay không nóng bằng hôm qua."
      ),
      readingComp(
        "hsk2-l11-q5",
        "王老师比李老师早来学校十分钟，他每天七点半就到教室了。",
        "Wáng lǎoshī bǐ Lǐ lǎoshī zǎo lái xuéxiào shí fēnzhōng, tā měitiān qī diǎn bàn jiù dào jiàoshì le.",
        "Thầy Vương đến trường sớm hơn cô Lý 10 phút, mỗi ngày 7 giờ rưỡi thầy đã tới lớp rồi.",
        "Cô Lý thường đến trường lúc mấy giờ?",
        ["7 giờ 40 phút", "7 giờ 20 phút", "7 giờ 30 phút", "8 giờ 00 phút"],
        "7 giờ 40 phút",
        "Thầy Vương đến lúc 7:30 và sớm hơn cô Lý 10 phút → cô Lý đến lúc 7:40."
      ),
    ],
  },

  // ==========================================
  // BÀI 12: 你穿得太少了 (Nǐ chuān de tài shǎo le — Bạn mặc ít quá)
  // ==========================================
  {
    id: "hsk2-l12-chuande",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Bạn mặc ít quá",
    titleZh: "第十二课：你穿得太少了",
    titlePinyin: "Dì shí'èr kè: Nǐ chuān de tài shǎo le",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=MF8J-hTh5yg",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 12 你穿得太少了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ trạng thái (情态补语) với trợ từ kết cấu 得 (de): Động từ + 得 + Phó từ mức độ (很/太/真) + Tính từ. Dùng để miêu tả hoặc đánh giá mức độ/trạng thái của hành động.",
      "Khi động từ mang tân ngữ, phải lặp lại động từ trước 得: V + O + V + 得 + Adj (ví dụ: 她说汉语说得很好 — Cô ấy nói tiếng Trung rất giỏi).",
      "Phủ định của bổ ngữ trạng thái đặt 不 ngay sau 得: V + 得 + 不 + Tính từ (ví dụ: 他写得不好).",
    ],
    newWords: [
      {
        hanzi: "得",
        pinyin: "de",
        partOfSpeech: "Trợ từ kết cấu",
        meaningVi: "được, đến mức (nối động từ và bổ ngữ trạng thái)",
        radical: "彳 (Xích)",
        strokeCount: 11,
      },
      {
        hanzi: "妻子",
        pinyin: "qīzi",
        partOfSpeech: "Danh từ",
        meaningVi: "vợ",
        radical: "女 (Nữ)",
        strokeCount: 11,
      },
      {
        hanzi: "雪",
        pinyin: "xuě",
        partOfSpeech: "Danh từ",
        meaningVi: "tuyết",
        radical: "雨 (Vũ)",
        strokeCount: 11,
      },
      {
        hanzi: "零",
        pinyin: "líng",
        partOfSpeech: "Số từ",
        meaningVi: "số không (0)",
        radical: "雨 (Vũ)",
        strokeCount: 13,
      },
      {
        hanzi: "度",
        pinyin: "dù",
        partOfSpeech: "Lượng từ",
        meaningVi: "độ (nhiệt độ)",
        radical: "广 (Nghiễm)",
        strokeCount: 9,
      },
      {
        hanzi: "穿",
        pinyin: "chuān",
        partOfSpeech: "Động từ",
        meaningVi: "mặc (quần áo), đi (giày)",
        radical: "穴 (Huyệt)",
        strokeCount: 9,
      },
      {
        hanzi: "进",
        pinyin: "jìn",
        partOfSpeech: "Động từ",
        meaningVi: "vào, tiến vào",
        radical: "辶 (Xước)",
        strokeCount: 7,
      },
      {
        hanzi: "弟弟",
        pinyin: "dìdi",
        partOfSpeech: "Danh từ",
        meaningVi: "em trai",
        radical: "弓 (Cung)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ngoài trời tuyết rơi — Nhắc mặc thêm áo",
        lines: [
          {
            speaker: "A",
            zh: "今天下雪了，零下五度，你穿得太少了！",
            pinyin: "Jīntiān xiàxuě le, língxià wǔ dù, nǐ chuān de tài shǎo le!",
            vi: "Hôm nay có tuyết rơi rồi, âm 5 độ đấy, em mặc ít quá!",
          },
          {
            speaker: "B",
            zh: "快进房间吧，房间里很暖和。",
            pinyin: "Kuài jìn fángjiān ba, fángjiān lǐ hěn nuǎnhuo.",
            vi: "Mau vào phòng đi anh, trong phòng ấm lắm.",
          },
          {
            speaker: "A",
            zh: "好，我妻子也让我多穿点儿衣服。",
            pinyin: "Hǎo, wǒ qīzi yě ràng wǒ duō chuān diǎnr yīfu.",
            vi: "Ừ, vợ tôi cũng bảo tôi mặc thêm chút quần áo.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở nhà — Khen ngợi kỹ năng của em trai",
        lines: [
          {
            speaker: "A",
            zh: "你弟弟每天起床起得早吗？",
            pinyin: "Nǐ dìdi měitiān qǐchuáng qǐ de zǎo ma?",
            vi: "Em trai bạn mỗi ngày thức dậy có sớm không?",
          },
          {
            speaker: "B",
            zh: "他起得很早，而且他写汉字写得非常漂亮。",
            pinyin: "Tā qǐ de hěn zǎo, érqiě tā xiě Hànzì xiě de fēicháng piàoliang.",
            vi: "Nó dậy rất sớm, hơn nữa nó viết chữ Hán cực kỳ đẹp.",
          },
          {
            speaker: "A",
            zh: "真棒！我写得不好，以后要多练习。",
            pinyin: "Zhēn bàng! Wǒ xiě de bù hǎo, yǐhòu yào duō liànxí.",
            vi: "Giỏi thật đấy! Tôi viết không đẹp, sau này phải luyện tập nhiều hơn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ trạng thái với 得 (de)",
        formula: "Chủ ngữ + (V + O) + V + 得 + 很/太/不 + Tính từ",
        explanationVi:
          "Trợ từ 得 nối động từ với phần miêu tả trạng thái/mức độ. Nếu không có tân ngữ, dùng trực tiếp V + 得 + Adj. Nếu có tân ngữ, lặp lại động từ hoặc đưa tân ngữ lên đầu câu.",
        examples: [
          {
            zh: "你穿得太少了，快多穿一件衣服。",
            pinyin: "Nǐ chuān de tài shǎo le, kuài duō chuān yí jiàn yīfu.",
            vi: "Bạn mặc ít quá rồi, mau mặc thêm một chiếc áo đi.",
          },
          {
            zh: "他做饭做得很好吃。",
            pinyin: "Tā zuòfàn zuò de hěn hǎochī.",
            vi: "Anh ấy nấu ăn rất ngon.",
          },
        ],
      },
      {
        titleVi: "Cách diễn đạt nhiệt độ với 零 (líng) và 度 (dù)",
        formula: "Số từ + 度 | 零下 + Số từ + 度 (âm ... độ)",
        explanationVi:
          "度 là lượng từ chỉ nhiệt độ. Nhiệt độ dưới 0 độ C dùng 零下 (língxià — dưới 0) đứng trước con số.",
        examples: [
          {
            zh: "今天零下十度，非常冷。",
            pinyin: "Jīntiān língxià shí dù, fēicháng lěng.",
            vi: "Hôm nay âm 10 độ, vô cùng lạnh.",
          },
          {
            zh: "明天的天气是零上五度。",
            pinyin: "Míngtiān de tiānqì shì língshàng wǔ dù.",
            vi: "Thời tiết ngày mai là dương 5 độ.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk2-l12-q1",
        "穿",
        "chuān",
        "mặc (quần áo)",
        "Chữ 穿 gồm bộ Huyệt (穴) ở trên và chữ Nha (牙) ở dưới, tổng cộng 9 nét."
      ),
      writingStroke(
        "hsk2-l12-q2",
        "雪",
        "xuě",
        "tuyết",
        "Chữ 雪 gồm bộ Vũ (雨 - mưa) ở trên và bộ Kệ (彐) ở dưới, tổng cộng 11 nét."
      ),
      writingOrder(
        "hsk2-l12-q3",
        "Sắp xếp các từ thành câu hoàn chỉnh: 'Bạn mặc ít quá rồi.'",
        ["穿得", "你", "太少了", "。"],
        "你穿得太少了。",
        "Nǐ chuān de tài shǎo le.",
        "Cấu trúc bổ ngữ trạng thái: Chủ ngữ (你) + Động từ + 得 (穿得) + 太少了."
      ),
      writingOrder(
        "hsk2-l12-q4",
        "Sắp xếp các từ thành câu hoàn chỉnh: 'Em trai tôi nói tiếng Trung rất giỏi.'",
        ["说得", "我弟弟", "很好", "说汉语", "。"],
        "我弟弟说汉语说得很好。",
        "Wǒ dìdi shuō Hànyǔ shuō de hěn hǎo.",
        "Động từ có tân ngữ (说汉语) phải lặp lại động từ trước 得: 说汉语说得很好."
      ),
      writingTwoSentences(
        "hsk2-l12-q5",
        "得",
        "de",
        "trợ từ kết cấu (bổ ngữ trạng thái)",
        "Sử dụng cấu trúc V + 得 + 很/太/不 + Tính từ để đặt 2 câu hoàn chỉnh (ví dụ: 说得很好, 跑得很快)."
      ),
    ],
  },

  // ==========================================
  // BÀI 13: 门开着呢 (Mén kāizhe ne — Cửa đang mở kìa)
  // ==========================================
  {
    id: "hsk2-l13-kaizhene",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 13,
    title: "Bài 13: Cửa đang mở kìa",
    titleZh: "第十三课：门开着呢",
    titlePinyin: "Dì shísān kè: Mén kāizhe ne",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=OOswDC6ZWIA",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 13 门开着呢",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Trợ từ động thái 着 (zhe) đứng ngay sau động từ (V + 着) biểu thị sự duy trì của một trạng thái (cửa đang mở, tay đang cầm, đang mặc áo...).",
      "Thể phủ định của V + 着 là 没(有) + V + 着 (không dùng 不); thể nghi vấn thêm 吗 hoặc 没有 ở cuối câu.",
      "Giới từ 往 (wǎng — hướng về, đi về phía) dùng để chỉ phương hướng: 往 + Phương hướng (前/左/右) + Động từ (走/开).",
    ],
    newWords: [
      {
        hanzi: "着",
        pinyin: "zhe",
        partOfSpeech: "Trợ từ động thái",
        meaningVi: "đang (biểu thị trạng thái duy trì)",
        radical: "目 (Mục)",
        strokeCount: 11,
      },
      {
        hanzi: "手",
        pinyin: "shǒu",
        partOfSpeech: "Danh từ",
        meaningVi: "tay, bàn tay",
        radical: "手 (Thủ)",
        strokeCount: 4,
      },
      {
        hanzi: "拿",
        pinyin: "ná",
        partOfSpeech: "Động từ",
        meaningVi: "cầm, nắm, lấy",
        radical: "手 (Thủ)",
        strokeCount: 10,
      },
      {
        hanzi: "铅笔",
        pinyin: "qiānbǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "bút chì",
        radical: "钅 (Kim)",
        strokeCount: 20,
      },
      {
        hanzi: "班",
        pinyin: "bān",
        partOfSpeech: "Danh từ",
        meaningVi: "lớp học, ca làm việc",
        radical: "王 (Vương)",
        strokeCount: 10,
      },
      {
        hanzi: "长",
        pinyin: "cháng",
        partOfSpeech: "Tính từ",
        meaningVi: "dài",
        radical: "长 (Trường)",
        strokeCount: 4,
      },
      {
        hanzi: "笑",
        pinyin: "xiào",
        partOfSpeech: "Động từ",
        meaningVi: "cười",
        radical: "竹 (Trúc)",
        strokeCount: 10,
      },
      {
        hanzi: "宾馆",
        pinyin: "bīnguǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "khách sạn, nhà khách",
        radical: "宀 (Miên)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở văn phòng — Miêu tả trạng thái với 着",
        lines: [
          {
            speaker: "A",
            zh: "门开着呢，请进吧！",
            pinyin: "Mén kāizhe ne, qǐng jìn ba!",
            vi: "Cửa đang mở kìa, mời vào đi!",
          },
          {
            speaker: "B",
            zh: "请问，张先生在吗？",
            pinyin: "Qǐngwèn, Zhāng xiānsheng zài ma?",
            vi: "Xin hỏi, anh Trương có ở đây không?",
          },
          {
            speaker: "A",
            zh: "在，那个手里拿着铅笔、笑着说话的人就是他。",
            pinyin: "Zài, nàge shǒulǐ názhe qiānbǐ, xiàozhe shuōhuà de rén jiùshì tā.",
            vi: "Có, người tay đang cầm bút chì và đang cười nói chuyện kia chính là anh ấy.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trên đường — Hỏi đường đến khách sạn",
        lines: [
          {
            speaker: "A",
            zh: "请问，去北京宾馆怎么走？",
            pinyin: "Qǐngwèn, qù Běijīng bīnguǎn zěnme zǒu?",
            vi: "Xin hỏi, đi đến khách sạn Bắc Kinh đi thế nào ạ?",
          },
          {
            speaker: "B",
            zh: "一直往前走，过了路口往右走两百米就到了。",
            pinyin: "Yìzhí wǎng qián zǒu, guòle lùkǒu wǎng yòu zǒu liǎngbǎi mǐ jiù dào le.",
            vi: "Cứ đi thẳng về phía trước, qua ngã tư rẽ phải đi 200 mét là tới.",
          },
          {
            speaker: "A",
            zh: "离这儿远吗？需要走很长时间吗？",
            pinyin: "Lí zhèr yuǎn ma? Xūyào zǒu hěn cháng shíjiān ma?",
            vi: "Có xa đây không? Có cần đi mất nhiều thời gian không ạ?",
          },
          {
            speaker: "B",
            zh: "不远，走五分钟就到了。",
            pinyin: "Bù yuǎn, zǒu wǔ fēnzhōng jiù dào le.",
            vi: "Không xa đâu, đi bộ 5 phút là tới rồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Trợ từ động thái 着 (zhe)",
        formula: "Khẳng định: V + 着 (+ Tân ngữ / 呢) | Phủ định: 没(有) + V + 着",
        explanationVi:
          "着 đặt ngay sau động từ biểu thị trạng thái của hành động đang duy trì liên tục. Khi có 2 hành động xảy ra đồng thời, V1 + 着 + V2 biểu thị làm V2 trong trạng thái V1 (ví dụ: 笑着说话 — vừa cười vừa nói).",
        examples: [
          {
            zh: "桌子上放着一杯咖啡。",
            pinyin: "Zhuōzi shàng fàngzhe yì bēi kāfēi.",
            vi: "Trên bàn đang đặt một cốc cà phê.",
          },
          {
            zh: "他穿着一件白色的衬衫。",
            pinyin: "Tā chuānzhe yí jiàn báisè de chènshān.",
            vi: "Anh ấy đang mặc một chiếc áo sơ mi trắng.",
          },
        ],
      },
      {
        titleVi: "Giới từ chỉ phương hướng 往 (wǎng)",
        formula: "往 + Phương hướng (前/后/左/右/东/西) + Động từ (走/看/开)",
        explanationVi:
          "往 biểu thị hướng di chuyển hoặc hướng nhìn của hành động, thường dùng khi chỉ đường trong giao tiếp hàng ngày.",
        examples: [
          {
            zh: "一直往前走，宾馆在右边。",
            pinyin: "Yìzhí wǎng qián zǒu, bīnguǎn zài yòubian.",
            vi: "Cứ đi thẳng về phía trước, khách sạn ở bên phải.",
          },
          {
            zh: "前面那个路口往左走。",
            pinyin: "Qiánmian nàge lùkǒu wǎng zuǒ zǒu.",
            vi: "Đến ngã tư phía trước thì rẽ trái.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk2-l13-q1",
        "门开着呢，你直接进来吧。",
        "Mén kāizhe ne, nǐ zhíjiē jìnlái ba.",
        "Nghe và chọn trạng thái hiện tại của cánh cửa:",
        ["Cửa đang mở", "Cửa đang khóa", "Cửa bị hỏng", "Cửa mới đóng"],
        "Cửa đang mở",
        "门开着呢 = Cửa đang mở kìa."
      ),
      listeningFill(
        "hsk2-l13-q2",
        "她手里拿着一支铅笔。",
        "她手里拿___一支铅笔。",
        "Tā shǒulǐ ná___ yì zhī qiānbǐ.",
        "Nghe và điền trợ từ động thái còn thiếu (1 chữ Hán):",
        "着",
        "拿着 (názhe) biểu thị trạng thái tay đang cầm."
      ),
      listeningMcq(
        "hsk2-l13-q3",
        "一直往前走，到路口往右走，宾馆就在前面。",
        "Yìzhí wǎng qián zǒu, dào lùkǒu wǎng yòu zǒu, bīnguǎn jiù zài qiánmian.",
        "Nghe và chọn hướng dẫn đường đi đúng đến khách sạn:",
        [
          "Đi thẳng rồi rẽ phải ở ngã tư",
          "Đi thẳng rồi rẽ trái ở ngã tư",
          "Quay lại đi thẳng 200 mét",
          "Rẽ trái ngay lập tức",
        ],
        "Đi thẳng rồi rẽ phải ở ngã tư",
        "一直往前走 (đi thẳng), 到路口往右走 (đến ngã tư rẽ phải)."
      ),
      listeningDialogue(
        "hsk2-l13-q4",
        "男：我们班哪个同学笑得最好看？女：穿着红衣服的那个女孩子。",
        "Nán: Wǒmen bān nǎge tóngxué xiào de zuì hǎokàn? Nǚ: Chuānzhe hóng yīfu de nàge nǚháizi.",
        "Nghe đoạn hội thoại: Bạn học nào cười đẹp nhất lớp?",
        [
          "Cô gái đang mặc áo màu đỏ",
          "Cậu trai đang cầm bút chì",
          "Cô gái đang mặc áo trắng",
          "Lớp trưởng của lớp",
        ],
        "Cô gái đang mặc áo màu đỏ",
        "穿着红衣服的那个女孩子 = Cô gái đang mặc áo màu đỏ."
      ),
      listeningFill(
        "hsk2-l13-q5",
        "去火车站需要走很长时间吗？",
        "去火车站需要走很___时间吗？",
        "Qù huǒchēzhàn xūyào zǒu hěn ___ shíjiān ma?",
        "Nghe và điền tính từ còn thiếu (1 chữ Hán):",
        "长",
        "很长时间 (hěn cháng shíjiān) nghĩa là thời gian rất dài."
      ),
    ],
  },

  // ==========================================
  // BÀI 14: 你看过那个电影吗 (Nǐ kànguo nàge diànyǐng ma — Bạn đã xem bộ phim đó chưa?)
  // ==========================================
  {
    id: "hsk2-l14-kanguo",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 14,
    title: "Bài 14: Bạn đã xem bộ phim đó chưa?",
    titleZh: "第十四课：你看过那个电影吗",
    titlePinyin: "Dì shísì kè: Nǐ kànguo nàge diànyǐng ma",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=ErlmuB8kITY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 14 你看过那个电影吗",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Trợ từ động thái 过 (guo) đặt sau động từ (V + 过) biểu thị trải nghiệm đã từng xảy ra trong quá khứ và đã kết thúc. Phủ định: 没(有) + V + 过.",
      "Cặp liên từ 虽然……，但是…… (suīrán..., dànshì... — tuy/mặc dù... nhưng...) nối hai vế câu mang nghĩa chuyển ngoặt. Lưu ý trong tiếng Trung luôn dùng cả 虽然 và 但是 cùng lúc.",
      "Bổ ngữ động lượng 次 (cì — lần) đặt sau động từ để chỉ số lần thực hiện hành động: 去过两次 (đã từng đi 2 lần).",
    ],
    newWords: [
      {
        hanzi: "有意思",
        pinyin: "yǒuyìsi",
        partOfSpeech: "Tính từ",
        meaningVi: "thú vị, hay, có ý nghĩa",
        radical: "月 (Nguyệt)",
        strokeCount: 28,
      },
      {
        hanzi: "但是",
        pinyin: "dànshì",
        partOfSpeech: "Liên từ",
        meaningVi: "nhưng, nhưng mà",
        radical: "亻 (Nhân đứng)",
        strokeCount: 16,
      },
      {
        hanzi: "虽然",
        pinyin: "suīrán",
        partOfSpeech: "Liên từ",
        meaningVi: "tuy, mặc dù",
        radical: "口 (Khẩu)",
        strokeCount: 21,
      },
      {
        hanzi: "次",
        pinyin: "cì",
        partOfSpeech: "Lượng từ",
        meaningVi: "lần, lượt (động lượng từ)",
        radical: "欠 (Khiếm)",
        strokeCount: 6,
      },
      {
        hanzi: "玩儿",
        pinyin: "wánr",
        partOfSpeech: "Động từ",
        meaningVi: "chơi, đi chơi",
        radical: "王 (Vương)",
        strokeCount: 10,
      },
      {
        hanzi: "晴",
        pinyin: "qíng",
        partOfSpeech: "Tính từ",
        meaningVi: "nắng, quang đãng (thời tiết)",
        radical: "日 (Nhật)",
        strokeCount: 12,
      },
      {
        hanzi: "百",
        pinyin: "bǎi",
        partOfSpeech: "Số từ",
        meaningVi: "trăm (100)",
        radical: "白 (Bạch)",
        strokeCount: 6,
      },
      {
        hanzi: "过",
        pinyin: "guo",
        partOfSpeech: "Trợ từ động thái",
        meaningVi: "đã từng (trải nghiệm quá khứ)",
        radical: "辶 (Xước)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở rạp chiếu phim — Hỏi về trải nghiệm xem phim",
        lines: [
          {
            speaker: "A",
            zh: "你看过那个电影吗？",
            pinyin: "Nǐ kànguo nàge diànyǐng ma?",
            vi: "Bạn đã từng xem bộ phim đó chưa?",
          },
          {
            speaker: "B",
            zh: "没看过，听说非常有意思。",
            pinyin: "Méi kànguo, tīngshuō fēicháng yǒuyìsi.",
            vi: "Chưa từng xem, nghe nói cực kỳ thú vị.",
          },
          {
            speaker: "A",
            zh: "那我们下星期一起去看吧，虽然我看过一次，但是还想再看。",
            pinyin: "Nà wǒmen xià xīngqī yìqǐ qù kàn ba, suīrán wǒ kànguo yí cì, dànshì hái xiǎng zài kàn.",
            vi: "Vậy tuần sau chúng ta cùng đi xem nhé, tuy tôi đã xem một lần rồi nhưng vẫn muốn xem lại.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trò chuyện về chuyến du lịch",
        lines: [
          {
            speaker: "A",
            zh: "你去过北京玩儿吗？",
            pinyin: "Nǐ qùguo Běijīng wánr ma?",
            vi: "Bạn đã từng đi Bắc Kinh chơi chưa?",
          },
          {
            speaker: "B",
            zh: "去过两次，那儿有很多好玩儿的地方。",
            pinyin: "Qùguo liǎng cì, nàr yǒu hěn duō hǎowánr de dìfang.",
            vi: "Đi 2 lần rồi, ở đó có rất nhiều chỗ vui chơi.",
          },
          {
            speaker: "A",
            zh: "今天是晴天，天气很好，我们去公园走走吧。",
            pinyin: "Jīntiān shì qíngtiān, tiānqì hěn hǎo, wǒmen qù gōngyuán zǒuzou ba.",
            vi: "Hôm nay trời nắng đẹp, chúng ta ra công viên đi dạo đi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Trợ từ động thái 过 (guo) chỉ trải nghiệm",
        formula: "Khẳng định: V + 过 (+ Tân ngữ) | Phủ định: 没(有) + V + 过 | Nghi vấn: V + 过 + ... + 吗/没有？",
        explanationVi:
          "过 đọc thanh nhẹ, đặt ngay sau động từ để nhấn mạnh ai đó đã từng có trải nghiệm gì trong quá khứ (hành động hiện không còn tiếp diễn).",
        examples: [
          {
            zh: "我吃过北京烤鸭。",
            pinyin: "Wǒ chīguo Běijīng kǎoyā.",
            vi: "Tôi đã từng ăn vịt quay Bắc Kinh.",
          },
          {
            zh: "他没学过汉语，但是会说几句。",
            pinyin: "Tā méi xuéguo Hànyǔ, dànshì huì shuō jǐ jù.",
            vi: "Anh ấy chưa từng học tiếng Trung, nhưng biết nói vài câu.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc chuyển ngoặt 虽然……，但是……",
        formula: "虽然 + Vế 1，但是 + Vế 2",
        explanationVi:
          "Diễn đạt mối quan hệ tương phản 'Mặc dù... nhưng...'. Trong tiếng Việt có thể lược bỏ 'nhưng', nhưng trong tiếng Trung nên giữ cả cặp 虽然……但是…… để câu tự nhiên và chuẩn ngữ pháp.",
        examples: [
          {
            zh: "虽然今天是晴天，但是风很大。",
            pinyin: "Suīrán jīntiān shì qíngtiān, dànshì fēng hěn dà.",
            vi: "Tuy hôm nay trời nắng nhưng gió rất to.",
          },
          {
            zh: "这本书虽然有点儿贵，但是很有意思。",
            pinyin: "Zhè běn shū suīrán yǒudiǎnr guì, dànshì hěn yǒuyìsi.",
            vi: "Quyển sách này tuy hơi đắt nhưng rất thú vị.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk2-l14-q1",
        "你看过那个电影吗？",
        "Nǐ kànguo nàge diànyǐng ma?",
        "Đọc nhại câu hỏi trải nghiệm với 过:",
        ["kànguo (thanh 4 + thanh nhẹ)", "diànyǐng (4-3)"],
        "过 trong cấu trúc V + 过 luôn đọc thanh nhẹ, lướt nhanh nối sang 那个."
      ),
      speakingShadowing(
        "hsk2-l14-q2",
        "没看过，听说非常有意思。",
        "Méi kànguo, tīngshuō fēicháng yǒuyìsi.",
        "Đọc nhại câu phủ định trải nghiệm:",
        ["méi kànguo", "yǒuyìsi (3-4-nhẹ)"],
        "Chú ý âm tiết cuối 思 của 有意思 đọc thanh nhẹ."
      ),
      speakingShadowing(
        "hsk2-l14-q3",
        "虽然我去过两次，但是还想再去玩儿。",
        "Suīrán wǒ qùguo liǎng cì, dànshì hái xiǎng zài qù wánr.",
        "Đọc nhại câu dùng 虽然……但是…… và động lượng từ 次:",
        ["suīrán (1-2)", "liǎng cì (3-4)", "wánr (âm uốn lưỡi)"],
        "Chú ý âm cuốn lưỡi 儿 hóa ở 玩儿 (wánr)."
      ),
      speakingShadowing(
        "hsk2-l14-q4",
        "今天是晴天，我们去公园走走吧。",
        "Jīntiān shì qíngtiān, wǒmen qù gōngyuán zǒuzou ba.",
        "Đọc nhại câu rủ đi dạo ngày nắng:",
        ["qíngtiān (2-1)", "zǒuzou (3-nhẹ)"],
        "Động từ lặp lại 走走 đọc âm tiết thứ hai thanh nhẹ."
      ),
      speakingShadowing(
        "hsk2-l14-q5",
        "这本书一百块钱，但是非常有意思。",
        "Zhè běn shū yìbǎi kuài qián, dànshì fēicháng yǒuyìsi.",
        "Đọc nhại câu nêu giá tiền với 百 và liên từ 但是:",
        ["yìbǎi (biến điệu 一 thành thanh 4)", "dànshì (4-4)"],
        "一 đứng trước thanh 3 (bǎi) đọc biến điệu thành thanh 4 (yìbǎi)."
      ),
    ],
  },

  // ==========================================
  // BÀI 15: 新年就要到了 (Xīnnián jiùyào dào le — Năm mới sắp đến rồi)
  // ==========================================
  {
    id: "hsk2-l15-xinnian",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    lessonNumber: 15,
    title: "Bài 15: Năm mới sắp đến rồi",
    titleZh: "第十五课：新年就要到了",
    titlePinyin: "Dì shíwǔ kè: Xīnnián jiùyào dào le",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=aRZN0eWMZMA",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 15 新年就要到了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc biểu thị hành động sắp xảy ra: 要 / 就要 / 快要 + Động từ + 了. Lưu ý: Nếu trong câu có từ chỉ thời gian cụ thể (như 下个月, 明天), chỉ dùng 就要……了, không dùng 快要……了.",
      "Cấu trúc 都……了 (dōu... le) biểu thị sự nhấn mạnh thời gian đã muộn hoặc sự việc đã đến mức nào đó (ví dụ: 都八点了，快起床吧 — Đã 8 giờ rồi, mau dậy đi).",
      "Phó từ 更 (gèng — càng, hơn nữa) đặt trước tính từ để chỉ mức độ tăng tiến.",
    ],
    newWords: [
      {
        hanzi: "日",
        pinyin: "rì",
        partOfSpeech: "Danh từ",
        meaningVi: "ngày (văn viết), mặt trời",
        radical: "日 (Nhật)",
        strokeCount: 4,
      },
      {
        hanzi: "新年",
        pinyin: "xīnnián",
        partOfSpeech: "Danh từ",
        meaningVi: "năm mới, Tết dương lịch",
        radical: "斤 (Cân)",
        strokeCount: 19,
      },
      {
        hanzi: "票",
        pinyin: "piào",
        partOfSpeech: "Danh từ",
        meaningVi: "vé (tàu, xe, phim)",
        radical: "示 (Thị)",
        strokeCount: 11,
      },
      {
        hanzi: "火车站",
        pinyin: "huǒchēzhàn",
        partOfSpeech: "Danh từ",
        meaningVi: "ga tàu hỏa",
        radical: "火 (Hỏa)",
        strokeCount: 18,
      },
      {
        hanzi: "大家",
        pinyin: "dàjiā",
        partOfSpeech: "Đại từ",
        meaningVi: "mọi người, cả nhà",
        radical: "大 (Đại)",
        strokeCount: 13,
      },
      {
        hanzi: "更",
        pinyin: "gèng",
        partOfSpeech: "Phó từ",
        meaningVi: "càng, hơn nữa",
        radical: "曰 (Viết)",
        strokeCount: 7,
      },
      {
        hanzi: "妹妹",
        pinyin: "mèimei",
        partOfSpeech: "Danh từ",
        meaningVi: "em gái",
        radical: "女 (Nữ)",
        strokeCount: 16,
      },
      {
        hanzi: "阴",
        pinyin: "yīn",
        partOfSpeech: "Tính từ",
        meaningVi: "âm u, nhiều mây (thời tiết)",
        radical: "阝 (Phụ)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở trường — Chuẩn bị đón năm mới",
        lines: [
          {
            speaker: "A",
            zh: "今天是十二月二十日，新年就要到了。",
            pinyin: "Jīntiān shì shí'èr yuè èrshí rì, xīnnián jiùyào dào le.",
            vi: "Hôm nay là ngày 20 tháng 12, năm mới sắp đến rồi.",
          },
          {
            speaker: "B",
            zh: "是啊，新的一年，大家有什么打算？",
            pinyin: "Shì a, xīn de yì nián, dàjiā yǒu shénme dǎsuàn?",
            vi: "Đúng vậy, năm mới mọi người có dự định gì không?",
          },
          {
            speaker: "A",
            zh: "我希望明年汉语说得更好，还想去中国旅游。",
            pinyin: "Wǒ xīwàng míngnián Hànyǔ shuō de gèng hǎo, hái xiǎng qù Zhōngguó lǚyóu.",
            vi: "Tôi hy vọng năm sau nói tiếng Trung tốt hơn nữa, còn muốn đi Trung Quốc du lịch.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở ga tàu hỏa — Đón em gái",
        lines: [
          {
            speaker: "A",
            zh: "都八点半了，怎么还没到火车站？",
            pinyin: "Dōu bā diǎn bàn le, zěnme hái méi dào huǒchēzhàn?",
            vi: "Đã 8 giờ rưỡi rồi, sao vẫn chưa tới ga tàu hỏa thế?",
          },
          {
            speaker: "B",
            zh: "别着急，前面就是。你买好回家的票了吗？",
            pinyin: "Bié zháojí, qiánmian jiùshì. Nǐ mǎihǎo huíjiā de piào le ma?",
            vi: "Đừng lo lắng, ngay phía trước thôi. Bạn đã mua xong vé về nhà chưa?",
          },
          {
            speaker: "A",
            zh: "买好了！今天天气有点儿阴，我妹妹快要下火车了。",
            pinyin: "Mǎihǎo le! Jīntiān tiānqì yǒudiǎnr yīn, wǒ mèimei kuàiyào xià huǒchē le.",
            vi: "Mua xong rồi! Hôm nay trời hơi âm u, em gái tôi sắp xuống tàu rồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Biểu thị hành động sắp xảy ra: 要 / 就要 / 快要……了",
        formula: "(Thời gian cụ thể) + 就要 + V + 了 | 快要 / 要 + V + 了",
        explanationVi:
          "Diễn đạt một sự việc sắp sửa xảy ra trong thời gian rất gần. Khi có mốc thời gian cụ thể phía trước (ví dụ: 下星期, 明天), bắt buộc dùng 就要……了.",
        examples: [
          {
            zh: "下星期我们就要考试了。",
            pinyin: "Xià xīngqī wǒmen jiùyào kǎoshì le.",
            vi: "Tuần sau chúng tôi sắp thi rồi.",
          },
          {
            zh: "天阴了，快要下雨了。",
            pinyin: "Tiān yīn le, kuàiyào xiàyǔ le.",
            vi: "Trời âm u rồi, sắp mưa rồi.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc nhấn mạnh 都……了 (dōu... le)",
        formula: "都 + Thời gian / Số lượng + 了",
        explanationVi:
          "Dùng để nhấn mạnh rằng thời gian đã muộn hoặc mức độ đã cao, thường đi kèm ngữ khí nhắc nhở hoặc ngạc nhiên.",
        examples: [
          {
            zh: "都十一点了，你还不睡觉吗？",
            pinyin: "Dōu shíyī diǎn le, nǐ hái bú shuìjiào ma?",
            vi: "Đã 11 giờ rồi, bạn vẫn chưa đi ngủ sao?",
          },
          {
            zh: "他都学了三年汉语了。",
            pinyin: "Tā dōu xuéle sān nián Hànyǔ le.",
            vi: "Anh ấy đã học tiếng Trung được 3 năm rồi đấy.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk2-l15-q1",
        "今天是十二月二十八日，新年就要到了。大家都很高兴，准备买礼物送给家人。",
        "Jīntiān shì shí'èr yuè èrshíbā rì, xīnnián jiùyào dào le. Dàjiā dōu hěn gāoxìng, zhǔnbèi mǎi lǐwù sònggěi jiārén.",
        "Hôm nay là ngày 28 tháng 12, năm mới sắp đến rồi. Mọi người đều rất vui, chuẩn bị mua quà tặng người nhà.",
        "Đọc đoạn văn và cho biết mọi người đang chuẩn bị làm gì?",
        [
          "Mua quà tặng người nhà",
          "Đi ga tàu hỏa đón bạn",
          "Thi cuối kỳ tiếng Trung",
          "Đi du lịch nước ngoài",
        ],
        "Mua quà tặng người nhà",
        "Đoạn văn viết: 准备买礼物送给家人 (chuẩn bị mua quà tặng người nhà)."
      ),
      readingComp(
        "hsk2-l15-q2",
        "都八点半了，火车九点就要开了，我们快点儿去火车站吧！",
        "Dōu bā diǎn bàn le, huǒchē jiǔ diǎn jiùyào kāi le, wǒmen kuài diǎnr qù huǒchēzhàn ba!",
        "Đã 8 giờ rưỡi rồi, tàu hỏa 9 giờ sắp chạy rồi, chúng ta mau ra ga tàu hỏa đi!",
        "Chuyến tàu hỏa sẽ khởi hành lúc mấy giờ?",
        ["9 giờ 00 phút", "8 giờ 30 phút", "9 giờ 30 phút", "8 giờ 00 phút"],
        "9 giờ 00 phút",
        "火车九点就要开了 = Tàu hỏa 9 giờ sắp chạy rồi."
      ),
      readingComp(
        "hsk2-l15-q3",
        "今天天气很阴，快要下雨了。妹妹出门的时候别忘了带雨伞。",
        "Jīntiān tiānqì hěn yīn, kuàiyào xiàyǔ le. Mèimei chūmén de shíhou bié wàngle dài yǔsǎn.",
        "Hôm nay trời rất âm u, sắp mưa rồi. Lúc em gái ra ngoài đừng quên mang ô.",
        "Tại sao người nói nhắc em gái mang ô?",
        [
          "Vì trời âm u, sắp mưa rồi",
          "Vì trời nắng gắt quá",
          "Vì ngoài trời có tuyết rơi",
          "Vì gió thổi rất mạnh",
        ],
        "Vì trời âm u, sắp mưa rồi",
        "今天天气很阴，快要下雨了 = Hôm nay trời rất âm u, sắp mưa rồi."
      ),
      readingComp(
        "hsk2-l15-q4",
        "姐姐的汉语说得很好，妹妹说得更好。她们明年都要去北京学习。",
        "Jiějie de Hànyǔ shuō de hěn hǎo, mèimei shuō de gèng hǎo. Tāmen míngnián dōu yào qù Běijīng xuéxí.",
        "Chị gái nói tiếng Trung rất giỏi, em gái nói còn giỏi hơn. Năm sau cả hai đều sẽ đi Bắc Kinh học tập.",
        "Ai nói tiếng Trung giỏi hơn?",
        ["Em gái", "Chị gái", "Hai người nói kém như nhau", "Không rõ"],
        "Em gái",
        "妹妹说得更好 (Em gái nói còn giỏi hơn)."
      ),
      readingComp(
        "hsk2-l15-q5",
        "我已经买好去上海的火车票了，明天上午十点出发。",
        "Wǒ yǐjīng mǎihǎo qù Shànghǎi de huǒchēpiào le, míngtiān shàngwǔ shí diǎn chūfā.",
        "Tôi đã mua xong vé tàu đi Thượng Hải rồi, 10 giờ sáng mai xuất phát.",
        "Người nói đã chuẩn bị xong việc gì?",
        [
          "Mua xong vé tàu đi Thượng Hải",
          "Mua xong vé máy bay đi Bắc Kinh",
          "Đặt xong phòng khách sạn",
          "Thu dọn xong hành lý",
        ],
        "Mua xong vé tàu đi Thượng Hải",
        "我已经买好去上海的火车票了 = Tôi đã mua xong vé tàu đi Thượng Hải rồi."
      ),
    ],
  },
];
