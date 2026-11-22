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

export const HSK3_PART1_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 周末你有什么打算 (Zhōumò nǐ yǒu shénme dǎsuàn?)
  // ==========================================
  {
    id: "hsk3-l1-dasuan",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Cuối tuần bạn có dự định gì?",
    titleZh: "第一课：周末你有什么打算",
    titlePinyin: "Dì yī kè: Zhōumò nǐ yǒu shénme dǎsuàn",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-tieng-trung-thu-gian",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=s5RHYByUirY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 1 周末你有什么打算",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ kết quả 好 (hǎo) đứng sau động từ biểu thị hành động đã hoàn thành và đạt kết quả tốt, hài lòng. Ví dụ: 做好了 (làm xong rồi), 买好了 (mua xong rồi).",
      "Cấu trúc phủ định nhấn mạnh 一...也/都 + 不/没 + V (một chút cũng không...). Ví dụ: 我一点儿也不累 (Tôi một chút cũng không mệt).",
      "Liên từ 那 (nà — vậy thì) đứng đầu câu để đưa ra kết luận hoặc đề nghị dựa trên thông tin trước đó.",
    ],
    newWords: [
      {
        hanzi: "周末",
        pinyin: "zhōumò",
        partOfSpeech: "Danh từ",
        meaningVi: "cuối tuần",
        radical: "口 (Khẩu)",
        strokeCount: 8,
      },
      {
        hanzi: "打算",
        pinyin: "dǎsuàn",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "dự định, kế hoạch",
        radical: "扌 (Tài gẩy)",
        strokeCount: 5,
      },
      {
        hanzi: "啊",
        pinyin: "a",
        partOfSpeech: "Trợ từ",
        meaningVi: "à, nhé, đấy (trợ từ ngữ khí)",
        radical: "口 (Khẩu)",
        strokeCount: 10,
      },
      {
        hanzi: "跟",
        pinyin: "gēn",
        partOfSpeech: "Giới từ",
        meaningVi: "cùng với, theo",
        radical: "足 (Túc)",
        strokeCount: 13,
      },
      {
        hanzi: "一直",
        pinyin: "yìzhí",
        partOfSpeech: "Phó từ",
        meaningVi: "luôn luôn, suốt, đi thẳng",
        radical: "一 (Nhất)",
        strokeCount: 1,
      },
      {
        hanzi: "游戏",
        pinyin: "yóuxì",
        partOfSpeech: "Danh từ",
        meaningVi: "trò chơi, game",
        radical: "氵 (Chấm thủy)",
        strokeCount: 12,
      },
      {
        hanzi: "作业",
        pinyin: "zuòyè",
        partOfSpeech: "Danh từ",
        meaningVi: "bài tập về nhà",
        radical: "亻 (Nhân đứng)",
        strokeCount: 7,
      },
      {
        hanzi: "着急",
        pinyin: "zháojí",
        partOfSpeech: "Tính từ",
        meaningVi: "lo lắng, sốt ruột, vội vàng",
        radical: "目 (Mục)",
        strokeCount: 11,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nói về dự định cuối tuần (谈周末的打算)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "周末你有什么打算？",
            pinyin: "Zhōumò nǐ yǒu shénme dǎsuàn?",
            vi: "Cuối tuần cậu có dự định gì không?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "我早就想好了，请你吃饭、看电影、喝咖啡。",
            pinyin: "Wǒ zǎo jiù xiǎnghǎo le, qǐng nǐ chīfàn, kàn diànyǐng, hē kāfēi.",
            vi: "Tớ đã nghĩ xong từ lâu rồi, mời cậu đi ăn cơm, xem phim và uống cà phê.",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "请我？",
            pinyin: "Qǐng wǒ?",
            vi: "Mời tớ sao?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "是啊，我已经找好饭馆了，电影票也买好了。",
            pinyin: "Shì a, wǒ yǐjīng zhǎohǎo fànguǎn le, diànyǐngpiào yě mǎihǎo le.",
            vi: "Đúng vậy, tớ đã tìm xong nhà hàng rồi, vé xem phim cũng mua xong rồi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ở nhà nhắc con làm bài tập (在家)",
        lines: [
          {
            speaker: "妈妈 (Māma)",
            zh: "你一直玩儿电脑游戏，作业写完了吗？",
            pinyin: "Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?",
            vi: "Con cứ chơi game máy tính suốt, bài tập về nhà làm xong chưa?",
          },
          {
            speaker: "儿子 (Érzi)",
            zh: "都写完了。",
            pinyin: "Dōu xiěwán le.",
            vi: "Làm xong hết rồi ạ.",
          },
          {
            speaker: "妈妈 (Māma)",
            zh: "明天不是有考试吗？你怎么一点儿也不着急？",
            pinyin: "Míngtiān búshì yǒu kǎoshì ma? Nǐ zěnme yìdiǎnr yě bù zháojí?",
            vi: "Ngày mai chẳng phải có bài kiểm tra sao? Sao con một chút cũng không lo lắng thế?",
          },
          {
            speaker: "儿子 (Érzi)",
            zh: "我早就复习好了。",
            pinyin: "Wǒ zǎo jiù fùxíhǎo le.",
            vi: "Con đã ôn tập xong từ sớm rồi ạ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ kết quả 好 (hǎo)",
        formula: "Động từ + 好 (+ 了)",
        explanationVi:
          "Đặt 好 sau động từ để biểu thị hành động đã hoàn thành và đạt trạng thái sẵn sàng, hài lòng (gần nghĩa với 完 nhưng nhấn mạnh kết quả tốt đẹp).",
        examples: [
          {
            zh: "我已经找好饭馆了。",
            pinyin: "Wǒ yǐjīng zhǎohǎo fànguǎn le.",
            vi: "Tôi đã tìm xong nhà hàng rồi.",
          },
          {
            zh: "晚饭做好了，快吃吧。",
            pinyin: "Wǎnfàn zuòhǎo le, kuài chī ba.",
            vi: "Cơm tối làm xong rồi, mau ăn đi.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc phủ định nhấn mạnh 一...也/都 + 不/没...",
        formula: "Chủ ngữ + 一 + Lượng từ + (Danh từ) + 也/都 + 不/没 + Động từ/Tính từ",
        explanationVi:
          "Dùng để nhấn mạnh sự phủ định hoàn toàn (một chút cũng không, một cái cũng không). Với tính từ thường dùng 一点儿也/都不 + Tính từ.",
        examples: [
          {
            zh: "你怎么一点儿也不着急？",
            pinyin: "Nǐ zěnme yìdiǎnr yě bù zháojí?",
            vi: "Sao bạn một chút cũng không lo lắng thế?",
          },
          {
            zh: "我一个苹果也没吃。",
            pinyin: "Wǒ yí ge píngguǒ yě méi chī.",
            vi: "Tôi một quả táo cũng chưa ăn.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk3-l1-ex1",
        "周末你有什么打算？",
        "Zhōumò nǐ yǒu shénme dǎsuàn?",
        "Nghe câu hỏi và chọn nghĩa tiếng Việt chính xác:",
        [
          "Cuối tuần bạn có dự định gì?",
          "Cuối tuần bạn đi đâu chơi?",
          "Bạn có thích cuối tuần không?",
          "Cuối tuần bạn phải làm bài tập à?",
        ],
        "Cuối tuần bạn có dự định gì?",
        "周末 (cuối tuần) + 你有什么打算 (bạn có dự định gì)."
      ),
      listeningFill(
        "hsk3-l1-ex2",
        "我已经找好饭馆了，电影票也买好了。",
        "我已经找好饭馆了，电影票也___了。",
        "Wǒ yǐjīng zhǎohǎo fànguǎn le, diànyǐngpiào yě ___ le.",
        "Nghe và điền động từ kèm bổ ngữ kết quả còn thiếu:",
        "买好",
        "买好 (mǎihǎo) nghĩa là đã mua xong (sẵn sàng rồi)."
      ),
      listeningDialogue(
        "hsk3-l1-ex3",
        "女：明天不是有考试吗？你怎么一点儿也不着急？ 男：我早就复习好了。",
        "Nǚ: Míngtiān búshì yǒu kǎoshì ma? Nǐ zěnme yìdiǎnr yě bù zháojí? Nán: Wǒ zǎo jiù fùxíhǎo le.",
        "Tại sao người nam không hề lo lắng về kỳ thi ngày mai?",
        [
          "Vì anh ấy đã ôn tập xong từ sớm rồi",
          "Vì ngày mai không có kỳ thi",
          "Vì anh ấy không muốn thi",
          "Vì anh ấy đang chơi game",
        ],
        "Vì anh ấy đã ôn tập xong từ sớm rồi",
        "Người nam nói: 我早就复习好了 (Tôi đã ôn tập xong từ sớm rồi)."
      ),
      listeningMcq(
        "hsk3-l1-ex4",
        "我最近一直很忙，一点儿时间也没有。",
        "Wǒ zuìjìn yìzhí hěn máng, yìdiǎnr shíjiān yě méiyǒu.",
        "Nghe câu và chọn thông tin đúng về người nói:",
        [
          "Dạo này rất bận, không có chút thời gian nào",
          "Dạo này rất rảnh rỗi",
          "Chỉ bận vào cuối tuần",
          "Có một chút thời gian để đi xem phim",
        ],
        "Dạo này rất bận, không có chút thời gian nào",
        "一直很忙 (luôn rất bận), 一点儿时间也没有 (một chút thời gian cũng không có)."
      ),
      listeningDialogue(
        "hsk3-l1-ex5",
        "男：这个周末我想去买新电脑，你跟我一起去吧。 女：好啊，那我们星期六上午去。",
        "Nán: Zhège zhōumò wǒ xiǎng qù mǎi xīn diànnǎo, nǐ gēn wǒ yìqǐ qù ba. Nǚ: Hǎo a, nà wǒmen xīngqīliù shàngwǔ qù.",
        "Họ dự định làm gì vào sáng thứ Bảy?",
        [
          "Cùng nhau đi mua máy tính mới",
          "Cùng nhau đi xem phim",
          "Ở nhà làm bài tập",
          "Đi ăn ở nhà hàng",
        ],
        "Cùng nhau đi mua máy tính mới",
        "Người nam rủ 去买新电脑 (đi mua máy tính mới) và người nữ đồng ý đi vào sáng thứ Bảy."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 他什么时候回来 (Tā shénme shíhou huílái?)
  // ==========================================
  {
    id: "hsk3-l2-shenmeshihou",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Khi nào anh ấy quay về?",
    titleZh: "第二课：他什么时候回来",
    titlePinyin: "Dì èr kè: Tā shénme shíhou huílái",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Mimi",
    youtubeUrl: "https://www.youtube.com/watch?v=s8o_LYU9Gpg",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 2 他什么时候回来",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ xu hướng đơn giản: Động từ + 来 (hướng về phía người nói) / 去 (ra xa phía người nói). Ví dụ: 上来 (lên đây), 下去 (xuống kia), 进来 (vào đây), 出去 (ra ngoài kia).",
      "Khi có tân ngữ chỉ địa điểm, tân ngữ phải đặt TRƯỚC 来/去: 进教室来 (vào lớp học), 回北京去 (về Bắc Kinh).",
      "Cấu trúc liên tiếp hành động: V1 了... 就 V2... (Làm xong V1 liền làm V2). Ví dụ: 我下了课就吃饭 (Tôi tan học xong liền đi ăn cơm).",
    ],
    newWords: [
      {
        hanzi: "腿",
        pinyin: "tuǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "chân, đùi",
        radical: "月 (Nhục/Nguyệt)",
        strokeCount: 13,
      },
      {
        hanzi: "疼",
        pinyin: "téng",
        partOfSpeech: "Tính từ",
        meaningVi: "đau, nhức",
        radical: "疒 (Nạch)",
        strokeCount: 10,
      },
      {
        hanzi: "脚",
        pinyin: "jiǎo",
        partOfSpeech: "Danh từ",
        meaningVi: "bàn chân",
        radical: "月 (Nhục/Nguyệt)",
        strokeCount: 11,
      },
      {
        hanzi: "树",
        pinyin: "shù",
        partOfSpeech: "Danh từ",
        meaningVi: "cây",
        radical: "木 (Mộc)",
        strokeCount: 9,
      },
      {
        hanzi: "容易",
        pinyin: "róngyì",
        partOfSpeech: "Tính từ",
        meaningVi: "dễ dàng",
        radical: "宀 (Miên)",
        strokeCount: 10,
      },
      {
        hanzi: "难",
        pinyin: "nán",
        partOfSpeech: "Tính từ",
        meaningVi: "khó",
        radical: "又 (Hựu)",
        strokeCount: 10,
      },
      {
        hanzi: "太太",
        pinyin: "tàitai",
        partOfSpeech: "Danh từ",
        meaningVi: "bà xã, phu nhân, vợ",
        radical: "大 (Đại)",
        strokeCount: 4,
      },
      {
        hanzi: "秘书",
        pinyin: "mìshū",
        partOfSpeech: "Danh từ",
        meaningVi: "thư ký",
        radical: "禾 (Hòa)",
        strokeCount: 10,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Leo núi và xuống núi (下山)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "休息一下吧。",
            pinyin: "Xiūxi yíxià ba.",
            vi: "Nghỉ ngơi một lát đi.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "怎么了？",
            pinyin: "Zěnme le?",
            vi: "Sao thế?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "我现在腿也疼，脚也疼。",
            pinyin: "Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.",
            vi: "Bây giờ chân tớ cũng đau, bàn chân cũng đau.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "好，那边树多，我们过去坐一下吧。上来的时候我怎么没觉得这么累？",
            pinyin: "Hǎo, nàbiān shù duō, wǒmen guòqù zuò yíxià ba. Shànglái de shíhou wǒ zěnme méi juéde zhème lèi?",
            vi: "Được, bên kia nhiều cây, chúng ta qua đó ngồi chút đi. Lúc lên sao tớ không thấy mệt thế nhỉ?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "上山容易下山难，你不知道吗？",
            pinyin: "Shàngshān róngyì xiàshān nán, nǐ bù zhīdào ma?",
            vi: "Lên núi dễ xuống núi khó, cậu không biết sao?",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Gọi điện hỏi lịch trình của chồng (打电话)",
        lines: [
          {
            speaker: "太太 (Tàitai)",
            zh: "喂，你好，请问周明在吗？",
            pinyin: "Wèi, nǐ hǎo, qǐngwèn Zhōu Míng zài ma?",
            vi: "Alô, xin chào, xin hỏi Chu Minh có ở đó không?",
          },
          {
            speaker: "秘书 (Mìshū)",
            zh: "周经理出去了，不在办公室。",
            pinyin: "Zhōu jīnglǐ chūqù le, bú zài bàngōngshì.",
            vi: "Giám đốc Chu ra ngoài rồi, không có ở văn phòng ạ.",
          },
          {
            speaker: "太太 (Tàitai)",
            zh: "他去哪儿了？什么时候回来？",
            pinyin: "Tā qù nǎr le? Shénme shíhou huílái?",
            vi: "Anh ấy đi đâu rồi? Khi nào quay về?",
          },
          {
            speaker: "秘书 (Mìshū)",
            zh: "他出去办事了，下午回来。",
            pinyin: "Tā chūqù bànshì le, xiàwǔ huílái.",
            vi: "Anh ấy ra ngoài có việc rồi, buổi chiều sẽ quay về ạ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ xu hướng đơn giản (Động từ + 来 / 去)",
        formula: "Động từ (上/下/进/出/回/过/起) + 来 / 去",
        explanationVi:
          "Dùng 来 khi hướng chuyển động tiến về phía người nói; dùng 去 khi hướng chuyển động đi xa khỏi người nói. Tân ngữ chỉ nơi chốn phải đứng trước 来/去.",
        examples: [
          {
            zh: "周经理出去了，下午回来。",
            pinyin: "Zhōu jīnglǐ chūqù le, xiàwǔ huílái.",
            vi: "Giám đốc Chu ra ngoài rồi, buổi chiều quay về.",
          },
          {
            zh: "你快进房间来吧。",
            pinyin: "Nǐ kuài jìn fángjiān lái ba.",
            vi: "Bạn mau vào phòng đây đi.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc hai hành động nối tiếp (V1 了... 就 V2)",
        formula: "Chủ ngữ + V1 + 了 + (Tân ngữ) + 就 + V2",
        explanationVi:
          "Diễn tả hành động thứ hai xảy ra ngay lập tức sau khi hành động thứ nhất kết thúc.",
        examples: [
          {
            zh: "我下了课就去吃饭。",
            pinyin: "Wǒ xià le kè jiù qù chīfàn.",
            vi: "Tôi tan học xong liền đi ăn cơm.",
          },
          {
            zh: "他吃了早饭就去公司了。",
            pinyin: "Tā chī le zǎofàn jiù qù gōngsī le.",
            vi: "Anh ấy ăn sáng xong liền đến công ty rồi.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk3-l2-ex1",
        "我现在腿也疼，脚也疼。",
        "Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.",
        "Luyện đọc nhại câu than mệt khi đi bộ đường dài:",
        ["Biến điệu thanh 3: 腿也 (tuí yě), 脚也 (jiáo yě)", "Âm bật hơi: 疼 (téng)"],
        "Chú ý biến điệu thanh 3 ở 腿也 và 脚也, đọc tự nhiên với ngữ điệu mệt mỏi."
      ),
      speakingShadowing(
        "hsk3-l2-ex2",
        "上山容易下山难，你不知道吗？",
        "Shàngshān róngyì xiàshān nán, nǐ bù zhīdào ma?",
        "Luyện đọc câu tục ngữ ngắn về việc leo núi:",
        ["Âm uốn lưỡi: 上 (shàng), 山 (shān), 容 (róng), 知 (zhī)", "Ngữ điệu hỏi ở cuối câu"],
        "Đọc rõ thanh 4 ở 上, 下, 易 và lên giọng nhẹ ở cuối câu hỏi."
      ),
      speakingShadowing(
        "hsk3-l2-ex3",
        "周经理出去了，不在办公室。",
        "Zhōu jīnglǐ chūqù le, bú zài bàngōngshì.",
        "Luyện nói câu trả lời điện thoại lịch sự nơi công sở:",
        ["Biến điệu 不: 不在 (bú zài)", "Âm bật hơi: 出 (chū)"],
        "不 đứng trước thanh 4 在 phải đọc thành thanh 2 (bú zài)."
      ),
      speakingShadowing(
        "hsk3-l2-ex4",
        "他去哪儿了？什么时候回来？",
        "Tā qù nǎr le? Shénme shíhou huílái?",
        "Luyện đọc câu hỏi thăm lịch trình:",
        ["Âm cuốn lưỡi: 哪儿 (nǎr)", "Thanh nhẹ: 时候 (shíhou)"],
        "Phát âm chuẩn âm 哪儿 (nǎr) và đọc nhẹ âm tiết 候 trong 时候."
      ),
      speakingShadowing(
        "hsk3-l2-ex5",
        "我下了课就给你打电话。",
        "Wǒ xià le kè jiù gěi nǐ dǎ diànhuà.",
        "Luyện nói câu dùng cấu trúc V1 了... 就 V2:",
        ["Biến điệu thanh 3: 给你打 (géi ní dǎ)", "Nhấn mạnh phó từ 就 (jiù)"],
        "Nối mạch trôi chảy giữa hai vế hành động liên tiếp."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 桌子上放着很多饮料 (Zhuōzi shàng fàngzhe hěn duō yǐnliào)
  // ==========================================
  {
    id: "hsk3-l3-zhuozishang",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Trên bàn đặt rất nhiều đồ uống",
    titleZh: "第三课：桌子上放着很多饮料",
    titlePinyin: "Dì sān kè: Zhuōzi shàng fàngzhe hěn duō yǐnliào",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-hsk-standard",
    recommendedChannelName: "Cin Chinese",
    youtubeUrl: "https://www.youtube.com/watch?v=r_Wl96AKlXk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 3 桌子上放着很多饮料",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Phân biệt 还是 (háishi — hay là, dùng trong câu hỏi lựa chọn) và 或者 (huòzhě — hoặc là, dùng trong câu trần thuật).",
      "Câu tồn hiện với 着 (zhe): Từ chỉ nơi chốn + Động từ + 着 + Số lượng + Danh từ. Diễn tả ở đâu đó có vật gì đang tồn tại ở trạng thái nào. Ví dụ: 桌子上放着很多饮料.",
      "Động từ năng nguyện 会 (huì) còn biểu thị khả năng sẽ xảy ra trong tương lai. Ví dụ: 明天会下雨吗？(Ngày mai sẽ mưa chứ?).",
    ],
    newWords: [
      {
        hanzi: "还是",
        pinyin: "háishi",
        partOfSpeech: "Liên từ",
        meaningVi: "hay là (dùng trong câu hỏi lựa chọn)",
        radical: "辶 (Sước)",
        strokeCount: 7,
      },
      {
        hanzi: "爬山",
        pinyin: "páshān",
        partOfSpeech: "Động từ",
        meaningVi: "leo núi",
        radical: "爪 (Trảo)",
        strokeCount: 8,
      },
      {
        hanzi: "小心",
        pinyin: "xiǎoxīn",
        partOfSpeech: "Tính từ / Động từ",
        meaningVi: "cẩn thận",
        radical: "小 (Tiểu)",
        strokeCount: 3,
      },
      {
        hanzi: "条",
        pinyin: "tiáo",
        partOfSpeech: "Lượng từ",
        meaningVi: "chiếc, cái, con (dùng cho vật dài: quần, váy, đường, cá)",
        radical: "木 (Mộc)",
        strokeCount: 7,
      },
      {
        hanzi: "裤子",
        pinyin: "kùzi",
        partOfSpeech: "Danh từ",
        meaningVi: "cái quần",
        radical: "衤 (Y)",
        strokeCount: 12,
      },
      {
        hanzi: "记得",
        pinyin: "jìde",
        partOfSpeech: "Động từ",
        meaningVi: "nhớ",
        radical: "讠 (Ngôn)",
        strokeCount: 5,
      },
      {
        hanzi: "衬衫",
        pinyin: "chènshān",
        partOfSpeech: "Danh từ",
        meaningVi: "áo sơ mi",
        radical: "衤 (Y)",
        strokeCount: 8,
      },
      {
        hanzi: "饮料",
        pinyin: "yǐnliào",
        partOfSpeech: "Danh từ",
        meaningVi: "đồ uống, thức uống",
        radical: "饣 (Thực)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chọn đồ uống (在小丽家)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "明天是晴天还是阴天？",
            pinyin: "Míngtiān shì qíngtiān háishi yīntiān?",
            vi: "Ngày mai trời nắng hay trời râm?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "阴天，电视上说多云。怎么了？有事？",
            pinyin: "Yīntiān, diànshì shàng shuō duōyún. Zěnme le? Yǒu shì?",
            vi: "Trời râm, trên tivi nói nhiều mây. Sao thế? Có chuyện gì à?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "没事，我们明天要去爬山。",
            pinyin: "Méi shì, wǒmen míngtiān yào qù páshān.",
            vi: "Không có gì, ngày mai chúng tớ định đi leo núi.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "爬山的时候要小心点儿！",
            pinyin: "Páshān de shíhou yào xiǎoxīn diǎnr!",
            vi: "Lúc leo núi phải cẩn thận một chút nhé!",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chuẩn bị tiệc tại nhà (在家里)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "桌子上放着很多饮料，你喝什么？",
            pinyin: "Zhuōzi shàng fàngzhe hěn duō yǐnliào, nǐ hē shénme?",
            vi: "Trên bàn đặt rất nhiều đồ uống, cậu uống gì?",
          },
          {
            speaker: "朋友 (Péngyou)",
            zh: "茶或者咖啡都可以。你呢？你喝什么？",
            pinyin: "Chá huòzhě kāfēi dōu kěyǐ. Nǐ ne? Nǐ hē shénme?",
            vi: "Trà hoặc cà phê đều được. Còn cậu? Cậu uống gì?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "我喝茶，茶是花茶，很好喝。",
            pinyin: "Wǒ hē chá, chá shì huāchá, hěn hǎohē.",
            vi: "Tớ uống trà, đây là trà hoa, rất ngon.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phân biệt 还是 (háishi) và 或者 (huòzhě)",
        formula: "Câu hỏi: A + 还是 + B？ | Câu trần thuật: A + 或者 + B",
        explanationVi:
          "Cả hai đều có nghĩa là 'hoặc / hay là'. 还是 dùng trong câu hỏi lựa chọn; 或者 dùng trong câu kể (trần thuật) khi đưa ra các khả năng đều được.",
        examples: [
          {
            zh: "你喝茶还是喝咖啡？",
            pinyin: "Nǐ hē chá háishi hē kāfēi?",
            vi: "Bạn uống trà hay uống cà phê?",
          },
          {
            zh: "茶或者咖啡都可以。",
            pinyin: "Chá huòzhě kāfēi dōu kěyǐ.",
            vi: "Trà hoặc cà phê đều được.",
          },
        ],
      },
      {
        titleVi: "Câu tồn hiện với trợ từ động thái 着 (zhe)",
        formula: "Từ chỉ nơi chốn + Động từ + 着 + Cụm danh từ (không xác định)",
        explanationVi:
          "Diễn tả sự tồn tại của người hoặc vật ở một vị trí nào đó trong trạng thái duy trì. Phủ định dùng 没 + Động từ + 着.",
        examples: [
          {
            zh: "桌子上放着很多饮料。",
            pinyin: "Zhuōzi shàng fàngzhe hěn duō yǐnliào.",
            vi: "Trên bàn đặt rất nhiều đồ uống.",
          },
          {
            zh: "房间里坐着三个人。",
            pinyin: "Fángjiān lǐ zuòzhe sān ge rén.",
            vi: "Trong phòng đang có ba người ngồi.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk3-l3-ex1",
        "明天是阴天，电视上说多云。小丽和朋友明天要去爬山，小刚让她爬山的时候小心点儿。",
        "Míngtiān shì yīntiān, diànshì shàng shuō duōyún. Xiǎolì hé péngyou míngtiān yào qù páshān, Xiǎogāng ràng tā páshān de shíhou xiǎoxīn diǎnr.",
        "Ngày mai trời râm, trên tivi nói nhiều mây. Tiểu Lệ và bạn ngày mai định đi leo núi, Tiểu Cương bảo cô ấy lúc leo núi phải cẩn thận một chút.",
        "Ngày mai Tiểu Lệ dự định làm gì?",
        ["Đi leo núi", "Ở nhà xem tivi", "Đi mua quần áo", "Uống cà phê với Tiểu Cương"],
        "Đi leo núi",
        "Đoạn văn nêu rõ: 小丽和朋友明天要去爬山."
      ),
      readingComp(
        "hsk3-l3-ex2",
        "桌子上放着很多饮料，有茶、咖啡、果汁。朋友说茶或者咖啡都可以，小丽喜欢喝花茶。",
        "Zhuōzi shàng fàngzhe hěn duō yǐnliào, yǒu chá, kāfēi, guǒzhī. Péngyou shuō chá huòzhě kāfēi dōu kěyǐ, Xiǎolì xǐhuan hē huāchá.",
        "Trên bàn đặt rất nhiều đồ uống, có trà, cà phê, nước ép. Bạn nói trà hoặc cà phê đều được, Tiểu Lệ thích uống trà hoa.",
        "Tiểu Lệ thích uống loại đồ uống nào?",
        ["Trà hoa", "Cà phê", "Nước ép trái cây", "Nước lọc"],
        "Trà hoa",
        "Câu cuối ghi: 小丽喜欢喝花茶 (Tiểu Lệ thích uống trà hoa)."
      ),
      readingComp(
        "hsk3-l3-ex3",
        "我记得你有很多条裤子，为什么还要买新的？因为这条裤子太旧了，我想买一条黑色的。",
        "Wǒ jìde nǐ yǒu hěn duō tiáo kùzi, wèishénme hái yào mǎi xīn de? Yīnwèi zhè tiáo kùzi tài jiù le, wǒ xiǎng mǎi yì tiáo hēisè de.",
        "Tớ nhớ cậu có rất nhiều chiếc quần, tại sao còn muốn mua cái mới? Vì chiếc quần này cũ quá rồi, tớ muốn mua một chiếc màu đen.",
        "Người trả lời muốn mua gì?",
        [
          "Một chiếc quần màu đen",
          "Một chiếc áo sơ mi trắng",
          "Nhiều chiếc quần cũ",
          "Một đôi giày mới",
        ],
        "Một chiếc quần màu đen",
        "Người đó nói: 我想买一条黑色的 (Tôi muốn mua một chiếc màu đen)."
      ),
      readingComp(
        "hsk3-l3-ex4",
        "房间里放着一张大床，床上放着两件衬衫和一条裤子，都是昨天刚洗好的。",
        "Fángjiān lǐ fàngzhe yì zhāng dà chuáng, chuáng shàng fàngzhe liǎng jiàn chènshān hé yì tiáo kùzi, dōu shì zuótiān gāng xǐhǎo de.",
        "Trong phòng đặt một chiếc giường lớn, trên giường đặt hai chiếc áo sơ mi và một chiếc quần, đều là mới giặt xong hôm qua.",
        "Trên giường đang đặt những gì?",
        [
          "Hai chiếc áo sơ mi và một chiếc quần",
          "Một chiếc bàn và nhiều đồ uống",
          "Hai chiếc quần và một chiếc áo sơ mi",
          "Sách vở và máy tính",
        ],
        "Hai chiếc áo sơ mi và một chiếc quần",
        "Đoạn văn viết: 床上放着两件衬衫和一条裤子."
      ),
      readingComp(
        "hsk3-l3-ex5",
        "周末我喜欢在家看书或者听音乐，但是这周天气很好，我想出去走走。",
        "Zhōumò wǒ xǐhuan zài jiā kànshū huòzhě tīng yīnyuè, dànshì zhè zhōu tiānqì hěn hǎo, wǒ xiǎng chūqù zǒuzou.",
        "Cuối tuần tôi thích ở nhà đọc sách hoặc nghe nhạc, nhưng tuần này thời tiết rất đẹp, tôi muốn ra ngoài đi dạo.",
        "Tại sao cuối tuần này người nói muốn ra ngoài đi dạo?",
        [
          "Vì thời tiết tuần này rất đẹp",
          "Vì ở nhà không có sách",
          "Vì phải đi mua đồ uống",
          "Vì bạn rủ đi leo núi",
        ],
        "Vì thời tiết tuần này rất đẹp",
        "Câu văn nêu rõ: 但是这周天气很好，我想出去走走."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 她总是笑着跟客人说话 (Tā zǒngshì xiàozhe gēn kèrén shuōhuà)
  // ==========================================
  {
    id: "hsk3-l4-xiaozhe",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Cô ấy luôn mỉm cười nói chuyện với khách",
    titleZh: "第四课：她总是笑着跟客人说话",
    titlePinyin: "Dì sì kè: Tā zǒngshì xiàozhe gēn kèrén shuōhuà",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-hanzi-master",
    recommendedChannelName: "Tiếng Trung Mimi",
    youtubeUrl: "https://www.youtube.com/watch?v=iWTOCsJrLQA",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 4 她总是笑着跟客人说话",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc biểu thị hai hành động xảy ra đồng thời: V1 + 着 + (O1) + V2 + (O2), trong đó V1 là trạng thái/phương thức đi kèm của V2. Ví dụ: 她总是笑着跟客人说话 (Cô ấy luôn mỉm cười nói chuyện với khách).",
      "Phó từ 总是 (zǒngshì — luôn luôn) đứng trước động từ/tính từ để diễn tả sự việc lặp đi lặp lại thường xuyên.",
      "Cấu trúc 又 + Tính từ 1 + 又 + Tính từ 2 (vừa... vừa...) diễn tả hai đặc điểm cùng tồn tại ở một sự vật.",
    ],
    newWords: [
      {
        hanzi: "比赛",
        pinyin: "bǐsài",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "cuộc thi, trận đấu; thi đấu",
        radical: "比 (Tỷ)",
        strokeCount: 4,
      },
      {
        hanzi: "照片",
        pinyin: "zhàopiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "bức ảnh, tấm hình",
        radical: "灬 (Hỏa)",
        strokeCount: 13,
      },
      {
        hanzi: "年级",
        pinyin: "niánjí",
        partOfSpeech: "Danh từ",
        meaningVi: "khối lớp, năm học",
        radical: "干 (Can)",
        strokeCount: 6,
      },
      {
        hanzi: "又",
        pinyin: "yòu",
        partOfSpeech: "Phó từ",
        meaningVi: "lại, vừa... vừa...",
        radical: "又 (Hựu)",
        strokeCount: 2,
      },
      {
        hanzi: "聪明",
        pinyin: "cōngming",
        partOfSpeech: "Tính từ",
        meaningVi: "thông minh",
        radical: "耳 (Nhĩ)",
        strokeCount: 15,
      },
      {
        hanzi: "热情",
        pinyin: "rèqíng",
        partOfSpeech: "Tính từ",
        meaningVi: "nhiệt tình",
        radical: "灬 (Hỏa)",
        strokeCount: 10,
      },
      {
        hanzi: "总是",
        pinyin: "zǒngshì",
        partOfSpeech: "Phó từ",
        meaningVi: "luôn luôn",
        radical: "心 (Tâm)",
        strokeCount: 9,
      },
      {
        hanzi: "客人",
        pinyin: "kèrén",
        partOfSpeech: "Danh từ",
        meaningVi: "khách, khách hàng",
        radical: "宀 (Miên)",
        strokeCount: 9,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Xem ảnh trận đấu bóng đá (看照片)",
        lines: [
          {
            speaker: "小明 (Xiǎomíng)",
            zh: "这是你们比赛的照片吗？",
            pinyin: "Zhè shì nǐmen bǐsài de zhàopiàn ma?",
            vi: "Đây là ảnh trận đấu của các cậu à?",
          },
          {
            speaker: "马可 (Mǎkě)",
            zh: "是，这是我们比赛后照的。",
            pinyin: "Shì, zhè shì wǒmen bǐsài hòu zhào de.",
            vi: "Đúng, đây là chụp sau trận đấu của chúng tớ.",
          },
          {
            speaker: "小明 (Xiǎomíng)",
            zh: "照得不错，你们都是一个年级的吗？",
            pinyin: "Zhào de búcuò, nǐmen dōu shì yí ge niánjí de ma?",
            vi: "Chụp đẹp đấy, các cậu đều học cùng một khối à?",
          },
          {
            speaker: "马可 (Mǎkě)",
            zh: "不是，那个又高又帅的男孩儿是二年级的。",
            pinyin: "Búshì, nàge yòu gāo yòu shuài de nánháir shì èr niánjí de.",
            vi: "Không phải, cậu bạn vừa cao vừa đẹp trai kia là sinh viên năm hai.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Nói về đồng nghiệp ở siêu thị (在超市)",
        lines: [
          {
            speaker: "A",
            zh: "你觉得小红怎么样？",
            pinyin: "Nǐ juéde Xiǎohóng zěnmeyàng?",
            vi: "Cậu thấy Tiểu Hồng thế nào?",
          },
          {
            speaker: "B",
            zh: "她又聪明又热情，也很努力。",
            pinyin: "Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.",
            vi: "Cô ấy vừa thông minh vừa nhiệt tình, lại rất chăm chỉ.",
          },
          {
            speaker: "A",
            zh: "我看她总是笑着跟客人说话。",
            pinyin: "Wǒ kàn tā zǒngshì xiàozhe gēn kèrén shuōhuà.",
            vi: "Tớ thấy cô ấy luôn mỉm cười nói chuyện với khách hàng.",
          },
          {
            speaker: "B",
            zh: "所以客人们都很喜欢她。",
            pinyin: "Suǒyǐ kèrénmen dōu hěn xǐhuan tā.",
            vi: "Vì vậy khách hàng ai cũng rất quý cô ấy.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 又... 又... (Vừa... vừa...)",
        formula: "Chủ ngữ + 又 + Tính từ 1 + 又 + Tính từ 2",
        explanationVi:
          "Diễn tả hai tính chất hoặc trạng thái cùng lúc tồn tại ở một người hay sự vật. Hai tính từ thường cùng sắc thái (cùng tích cực hoặc cùng tiêu cực).",
        examples: [
          {
            zh: "她又聪明又热情。",
            pinyin: "Tā yòu cōngming yòu rèqíng.",
            vi: "Cô ấy vừa thông minh vừa nhiệt tình.",
          },
          {
            zh: "这个西瓜又大又甜。",
            pinyin: "Zhège xīguā yòu dà yòu tián.",
            vi: "Quả dưa hấu này vừa to vừa ngọt.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc V1 + 着 + V2 (Làm V2 trong trạng thái V1)",
        formula: "Chủ ngữ + V1 + 着 + (Tân ngữ 1) + V2 + (Tân ngữ 2)",
        explanationVi:
          "Biểu thị hai động tác diễn ra đồng thời, trong đó V1 + 着 bổ sung cách thức hoặc trạng thái kèm theo cho hành động chính V2.",
        examples: [
          {
            zh: "她总是笑着跟客人说话。",
            pinyin: "Tā zǒngshì xiàozhe gēn kèrén shuōhuà.",
            vi: "Cô ấy luôn mỉm cười nói chuyện với khách.",
          },
          {
            zh: "弟弟喜欢听着音乐写作业。",
            pinyin: "Dìdi xǐhuan tīngzhe yīnyuè xiě zuòyè.",
            vi: "Em trai thích vừa nghe nhạc vừa làm bài tập.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk3-l4-ex1",
        "笑",
        "xiào",
        "cười, mỉm cười",
        "Chữ 笑 gồm bộ Trúc (竹) ở trên và chữ 夭 (yāo) ở dưới, tổng cộng 10 nét."
      ),
      writingStroke(
        "hsk3-l4-ex2",
        "客",
        "kè",
        "khách",
        "Chữ 客 gồm bộ Miên (宀) ở trên và chữ 各 (gè) ở dưới, tổng cộng 9 nét."
      ),
      writingOrder(
        "hsk3-l4-ex3",
        "Sắp xếp các từ thành câu hoàn chỉnh: Cô ấy luôn mỉm cười nói chuyện với khách.",
        ["她", "总是", "笑着", "跟", "客人", "说话"],
        "她总是笑着跟客人说话",
        "Tā zǒngshì xiàozhe gēn kèrén shuōhuà",
        "Cấu trúc: Chủ ngữ (她) + Phó từ (总是) + V1着 (笑着) + Giới từ + Tân ngữ (跟客人) + V2 (说话)."
      ),
      writingOrder(
        "hsk3-l4-ex4",
        "Sắp xếp thành câu: Cô ấy vừa thông minh vừa nhiệt tình.",
        ["她", "又", "聪明", "又", "热情"],
        "她又聪明又热情",
        "Tā yòu cōngming yòu rèqíng",
        "Dùng cấu trúc 又 + Tính từ 1 + 又 + Tính từ 2."
      ),
      writingTwoSentences(
        "hsk3-l4-ex5",
        "总是",
        "zǒngshì",
        "luôn luôn",
        "Đặt 2 câu hoàn chỉnh với phó từ 总是 (đứng trước động từ/tính từ)."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 我最近越来越胖了 (Wǒ zuìjìn yuèláiyuè pàng le)
  // ==========================================
  {
    id: "hsk3-l5-yuelaiyue",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 5,
    title: "Bài 5: Dạo này tôi ngày càng béo lên",
    titleZh: "第五课：我最近越来越胖了",
    titlePinyin: "Dì wǔ kè: Wǒ zuìjìn yuèláiyuè pàng le",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-tieng-trung-thu-gian",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=JgfMRQy_jhI",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 5 我最近越来越胖了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Trợ từ ngữ khí 了 (le) ở cuối câu biểu thị sự thay đổi trạng thái hoặc xuất hiện tình huống mới. Ví dụ: 天气冷了 (Trời lạnh rồi).",
      "Cấu trúc 越来越 + Tính từ / Động từ tâm lý (ngày càng...): biểu thị mức độ thay đổi tăng dần theo thời gian. Lưu ý: không dùng 很 trước tính từ sau 越来越.",
      "Phó từ 当然 (dāngrán — đương nhiên, tất nhiên) dùng để khẳng định điều hiển nhiên.",
    ],
    newWords: [
      {
        hanzi: "发烧",
        pinyin: "fāshāo",
        partOfSpeech: "Động từ",
        meaningVi: "bị sốt",
        radical: "又 (Hựu)",
        strokeCount: 5,
      },
      {
        hanzi: "照顾",
        pinyin: "zhàogù",
        partOfSpeech: "Động từ",
        meaningVi: "chăm sóc",
        radical: "灬 (Hỏa)",
        strokeCount: 13,
      },
      {
        hanzi: "感冒",
        pinyin: "gǎnmào",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "bị cảm cúm",
        radical: "心 (Tâm)",
        strokeCount: 13,
      },
      {
        hanzi: "季节",
        pinyin: "jìjié",
        partOfSpeech: "Danh từ",
        meaningVi: "mùa",
        radical: "子 (Tử)",
        strokeCount: 8,
      },
      {
        hanzi: "当然",
        pinyin: "dāngrán",
        partOfSpeech: "Phó từ",
        meaningVi: "đương nhiên, tất nhiên",
        radical: "彐 (Ký)",
        strokeCount: 6,
      },
      {
        hanzi: "春天",
        pinyin: "chūntiān",
        partOfSpeech: "Danh từ",
        meaningVi: "mùa xuân",
        radical: "日 (Nhật)",
        strokeCount: 9,
      },
      {
        hanzi: "最近",
        pinyin: "zuìjìn",
        partOfSpeech: "Danh từ",
        meaningVi: "dạo này, gần đây",
        radical: "日 (Nhật)",
        strokeCount: 12,
      },
      {
        hanzi: "胖",
        pinyin: "pàng",
        partOfSpeech: "Tính từ",
        meaningVi: "béo, mập",
        radical: "月 (Nhục/Nguyệt)",
        strokeCount: 9,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Hỏi thăm sức khỏe bạn bè (在朋友家)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "我听说你身体不舒服，怎么了？",
            pinyin: "Wǒ tīngshuō nǐ shēntǐ bù shūfu, zěnme le?",
            vi: "Tớ nghe nói cậu không khỏe, sao thế?",
          },
          {
            speaker: "朋友 (Péngyou)",
            zh: "前几天有点儿发烧，现在好多了。",
            pinyin: "Qián jǐ tiān yǒudiǎnr fāshāo, xiànzài hǎo duō le.",
            vi: "Mấy hôm trước hơi bị sốt, giờ đỡ nhiều rồi.",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "喝杯茶吧，这是我为你买的绿茶，很不错。",
            pinyin: "Hē bēi chá ba, zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.",
            vi: "Uống cốc trà đi, đây là trà xanh tớ mua cho cậu, ngon lắm.",
          },
          {
            speaker: "朋友 (Péngyou)",
            zh: "谢谢，我要吃药，不喝茶了。",
            pinyin: "Xièxie, wǒ yào chīyào, bù hē chá le.",
            vi: "Cảm ơn, tớ phải uống thuốc, không uống trà nữa đâu.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Dạo này ngày càng béo lên (在家里)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "我最近越来越胖了。",
            pinyin: "Wǒ zuìjìn yuèláiyuè pàng le.",
            vi: "Dạo này tớ ngày càng béo lên rồi.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "谁说的？我觉得你越来越漂亮了。",
            pinyin: "Shéi shuō de? Wǒ juéde nǐ yuèláiyuè piàoliang le.",
            vi: "Ai nói thế? Tớ thấy cậu ngày càng xinh ra đấy.",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "你看，这条裙子是去年买的，今年就不能穿了。",
            pinyin: "Nǐ kàn, zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.",
            vi: "Cậu xem, chiếc váy này mua năm ngoái, năm nay đã không mặc vừa nữa rồi.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "那是因为你吃得太多了，少吃点儿吧。",
            pinyin: "Nà shì yīnwèi nǐ chī de tài duō le, shǎo chī diǎnr ba.",
            vi: "Đó là vì cậu ăn nhiều quá đấy, ăn ít lại chút đi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 越来越 + Tính từ / Động từ tâm lý",
        formula: "Chủ ngữ + 越来越 + Tính từ / Động từ tâm lý + 了",
        explanationVi:
          "Biểu thị mức độ thay đổi tăng dần theo thời gian (ngày càng...). Không thêm phó từ chỉ mức độ như 很, 非常 trước tính từ.",
        examples: [
          {
            zh: "我最近越来越胖了。",
            pinyin: "Wǒ zuìjìn yuèláiyuè pàng le.",
            vi: "Dạo này tôi ngày càng béo lên rồi.",
          },
          {
            zh: "她越来越喜欢学汉语了。",
            pinyin: "Tā yuèláiyuè xǐhuan xué Hànyǔ le.",
            vi: "Cô ấy ngày càng thích học tiếng Trung rồi.",
          },
        ],
      },
      {
        titleVi: "Trợ từ ngữ khí 了 (le) biểu thị sự thay đổi",
        formula: "Chủ ngữ + Vị ngữ + 了",
        explanationVi:
          "Đặt ở cuối câu để diễn tả tình huống đã thay đổi so với trước đây hoặc một trạng thái mới xuất hiện.",
        examples: [
          {
            zh: "今年就不能穿了。",
            pinyin: "Jīnnián jiù bù néng chuān le.",
            vi: "Năm nay đã không mặc được nữa rồi.",
          },
          {
            zh: "天气越来越冷了。",
            pinyin: "Tiānqì yuèláiyuè lěng le.",
            vi: "Thời tiết ngày càng lạnh rồi.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk3-l5-ex1",
        "我最近越来越胖了。",
        "Wǒ zuìjìn yuèláiyuè pàng le.",
        "Nghe câu và chọn nghĩa đúng:",
        [
          "Dạo này tôi ngày càng béo lên",
          "Dạo này tôi ngày càng gầy đi",
          "Dạo này tôi ngày càng bận rộn",
          "Dạo này tôi ngày càng khỏe mạnh",
        ],
        "Dạo này tôi ngày càng béo lên",
        "最近 (dạo này) + 越来越胖 (ngày càng béo)."
      ),
      listeningFill(
        "hsk3-l5-ex2",
        "前几天有点儿发烧，现在好多了。",
        "前几天有点儿___，现在好多了。",
        "Qián jǐ tiān yǒudiǎnr ___, xiànzài hǎo duō le.",
        "Nghe và điền triệu chứng bệnh vào chỗ trống:",
        "发烧",
        "发烧 (fāshāo) nghĩa là bị sốt."
      ),
      listeningDialogue(
        "hsk3-l5-ex3",
        "女：喝杯茶吧，这是我为你买的绿茶。 男：谢谢，我要吃药，不喝茶了。",
        "Nǚ: Hē bēi chá ba, zhè shì wǒ wèi nǐ mǎi de lǜchá. Nán: Xièxie, wǒ yào chīyào, bù hē chá le.",
        "Tại sao người nam không uống trà?",
        [
          "Vì anh ấy phải uống thuốc",
          "Vì anh ấy không thích trà xanh",
          "Vì anh ấy đã uống cà phê rồi",
          "Vì trà quá nóng",
        ],
        "Vì anh ấy phải uống thuốc",
        "Người nam nói: 我要吃药，不喝茶了 (Tôi phải uống thuốc, không uống trà nữa)."
      ),
      listeningMcq(
        "hsk3-l5-ex4",
        "春天来了，天气越来越暖和了。",
        "Chūntiān lái le, tiānqì yuèláiyuè nuǎnhuo le.",
        "Nghe câu và chọn thông tin chính xác:",
        [
          "Mùa xuân đến rồi, thời tiết ngày càng ấm áp",
          "Mùa đông đến rồi, thời tiết ngày càng lạnh",
          "Mùa hè đến rồi, thời tiết ngày càng nóng",
          "Mùa thu đến rồi, thời tiết rất mát mẻ",
        ],
        "Mùa xuân đến rồi, thời tiết ngày càng ấm áp",
        "春天 (mùa xuân), 越来越暖和 (ngày càng ấm áp)."
      ),
      listeningDialogue(
        "hsk3-l5-ex5",
        "女：你最喜欢哪个季节？ 男：我当然最喜欢春天，因为春天不冷也不热。",
        "Nǚ: Nǐ zuì xǐhuan nǎge jìjié? Nán: Wǒ dāngrán zuì xǐhuan chūntiān, yīnwèi chūntiān bù lěng yě bú rè.",
        "Tại sao người nam thích mùa xuân nhất?",
        [
          "Vì mùa xuân không lạnh cũng không nóng",
          "Vì mùa xuân có nhiều hoa",
          "Vì mùa xuân được nghỉ học",
          "Vì mùa xuân ít mưa",
        ],
        "Vì mùa xuân không lạnh cũng không nóng",
        "Người nam giải thích: 因为春天不冷也不热."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 怎么突然找不到了 (Zěnme tūrán zhǎo bú dào le?)
  // ==========================================
  {
    id: "hsk3-l6-zenme",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 6,
    title: "Bài 6: Sao đột nhiên lại không tìm thấy nữa?",
    titleZh: "第六课：怎么突然找不到了",
    titlePinyin: "Dì liù kè: Zěnme tūrán zhǎo bú dào le",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=A-CUGFeUdcA",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 6 怎么突然找不到了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ khả năng (可能补语): Động từ + 得 / 不 + Bổ ngữ kết quả hoặc xu hướng. Biểu thị có thể hay không thể đạt được kết quả nào đó. Ví dụ: 找得到 (tìm thấy được), 找不到 (không tìm thấy được), 听得懂 (nghe hiểu được), 看不清楚 (nhìn không rõ).",
      "Phó từ 刚 (gāng — vừa mới) đứng trước động từ, chỉ hành động vừa mới xảy ra không lâu.",
      "Cấu trúc 怎么 + Động từ/Tính từ (sao lại...) dùng để hỏi nguyên nhân mang sắc thái ngạc nhiên.",
    ],
    newWords: [
      {
        hanzi: "眼镜",
        pinyin: "yǎnjìng",
        partOfSpeech: "Danh từ",
        meaningVi: "kính mắt",
        radical: "目 (Mục)",
        strokeCount: 11,
      },
      {
        hanzi: "突然",
        pinyin: "tūrán",
        partOfSpeech: "Tính từ / Phó từ",
        meaningVi: "đột nhiên, bất ngờ",
        radical: "穴 (Huyệt)",
        strokeCount: 9,
      },
      {
        hanzi: "离开",
        pinyin: "líkāi",
        partOfSpeech: "Động từ",
        meaningVi: "rời khỏi, tách rời",
        radical: "亠 (Đầu)",
        strokeCount: 10,
      },
      {
        hanzi: "清楚",
        pinyin: "qīngchu",
        partOfSpeech: "Tính từ",
        meaningVi: "rõ ràng",
        radical: "氵 (Chấm thủy)",
        strokeCount: 11,
      },
      {
        hanzi: "刚才",
        pinyin: "gāngcái",
        partOfSpeech: "Danh từ",
        meaningVi: "vừa nãy, lúc nãy",
        radical: "刂 (Đao)",
        strokeCount: 6,
      },
      {
        hanzi: "帮忙",
        pinyin: "bāngmáng",
        partOfSpeech: "Động từ",
        meaningVi: "giúp đỡ",
        radical: "巾 (Cân)",
        strokeCount: 9,
      },
      {
        hanzi: "特别",
        pinyin: "tèbié",
        partOfSpeech: "Phó từ / Tính từ",
        meaningVi: "đặc biệt, vô cùng",
        radical: "牜 (Ngưu)",
        strokeCount: 10,
      },
      {
        hanzi: "讲",
        pinyin: "jiǎng",
        partOfSpeech: "Động từ",
        meaningVi: "giảng, nói, kể",
        radical: "讠 (Ngôn)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Tìm kính mắt trong phòng khách (在客厅)",
        lines: [
          {
            speaker: "周明 (Zhōu Míng)",
            zh: "我的眼镜呢？怎么突然找不到了？你看见了吗？",
            pinyin: "Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bú dào le? Nǐ kànjiàn le ma?",
            vi: "Kính của anh đâu rồi? Sao đột nhiên lại không tìm thấy nữa? Em có thấy không?",
          },
          {
            speaker: "周太太 (Zhōu tàitai)",
            zh: "我没看见啊。",
            pinyin: "Wǒ méi kànjiàn a.",
            vi: "Em không thấy ạ.",
          },
          {
            speaker: "周明 (Zhōu Míng)",
            zh: "我离不开眼镜，没有眼镜，我一个字也看不清楚。",
            pinyin: "Wǒ lí bù kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bù qīngchu.",
            vi: "Anh không thể rời kính được, không có kính, anh một chữ cũng nhìn không rõ.",
          },
          {
            speaker: "周太太 (Zhōu tàitai)",
            zh: "你去房间找找，是不是刚才放在桌子上了？",
            pinyin: "Nǐ qù fángjiān zhǎozhao, shì bú shì gāngcái fàng zài zhuōzi shàng le?",
            vi: "Anh vào phòng tìm thử xem, có phải vừa nãy để trên bàn không?",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Nhờ giúp đỡ làm bài tập (在教室)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "今天的作业你做得完吗？",
            pinyin: "Jīntiān de zuòyè nǐ zuò de wán ma?",
            vi: "Bài tập hôm nay cậu có làm xong nổi không?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "今天的作业特别多，我一个人做不完，你能帮帮忙吗？",
            pinyin: "Jīntiān de zuòyè tèbié duō, wǒ yí ge rén zuò bù wán, nǐ néng bāngbang máng ma?",
            vi: "Bài tập hôm nay nhiều quá, một mình tớ làm không xuể, cậu giúp một tay được không?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "好吧，哪个题你听不懂，我给你讲讲。",
            pinyin: "Hǎo ba, nǎge tí nǐ tīng bù dǒng, wǒ gěi nǐ jiǎngjiang.",
            vi: "Được thôi, câu nào cậu nghe không hiểu, tớ giảng cho cậu.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ khả năng (V + 得 / 不 + Bổ ngữ)",
        formula: "Khẳng định: V + 得 + Bổ ngữ | Phủ định: V + 不 + Bổ ngữ",
        explanationVi:
          "Biểu thị điều kiện chủ quan hoặc khách quan có cho phép đạt được kết quả hay không. Hình thức phủ định dùng phổ biến hơn khẳng định.",
        examples: [
          {
            zh: "怎么突然找不到了？",
            pinyin: "Zěnme tūrán zhǎo bú dào le?",
            vi: "Sao đột nhiên lại không tìm thấy nữa?",
          },
          {
            zh: "没有眼镜，我看不清楚。",
            pinyin: "Méiyǒu yǎnjìng, wǒ kàn bù qīngchu.",
            vi: "Không có kính, tôi nhìn không rõ.",
          },
        ],
      },
      {
        titleVi: "Phân biệt 刚才 (gāngcái) và 刚 (gāng)",
        formula: "刚才 (Danh từ thời gian, đứng trước/sau S) | 刚 (Phó từ, đứng trước V)",
        explanationVi:
          "刚才 là danh từ chỉ thời gian (vừa nãy), có thể đứng đầu câu hoặc trước động từ. 刚 là phó từ (vừa mới), chỉ đứng trực tiếp trước động từ.",
        examples: [
          {
            zh: "是不是刚才放在桌子上了？",
            pinyin: "Shì bú shì gāngcái fàng zài zhuōzi shàng le?",
            vi: "Có phải vừa nãy để trên bàn rồi không?",
          },
          {
            zh: "他刚离开办公室。",
            pinyin: "Tā gāng líkāi bàngōngshì.",
            vi: "Anh ấy vừa mới rời khỏi văn phòng.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk3-l6-ex1",
        "我的眼镜呢？怎么突然找不到了？",
        "Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bú dào le?",
        "Luyện nói câu hỏi mang sắc thái ngạc nhiên:",
        ["Biến điệu 不: 不到 (bú dào)", "Âm uốn lưỡi: 找 (zhǎo), 然 (rán)"],
        "Đọc nhanh, tự nhiên, nhấn mạnh vào 突然 và 找不到."
      ),
      speakingShadowing(
        "hsk3-l6-ex2",
        "没有眼镜，我一个字也看不清楚。",
        "Méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bù qīngchu.",
        "Luyện đọc câu kết hợp 一...也... và bổ ngữ khả năng:",
        ["Biến điệu 一: 一个 (yí ge)", "Thanh nhẹ: 清楚 (qīngchu)"],
        "Nhấn mạnh cụm 一个字也 và đọc rõ bổ ngữ khả năng 看不清楚."
      ),
      speakingShadowing(
        "hsk3-l6-ex3",
        "今天的作业特别多，我一个人做不完。",
        "Jīntiān de zuòyè tèbié duō, wǒ yí ge rén zuò bù wán.",
        "Luyện nói câu phàn nàn về khối lượng bài tập:",
        ["Thanh 4 liên tiếp: 作业特别 (zuòyè tèbié)", "Bổ ngữ khả năng: 做不完 (zuò bù wán)"],
        "Phát âm dứt khoát các thanh 4 và nhấn mạnh 做不完."
      ),
      speakingShadowing(
        "hsk3-l6-ex4",
        "哪个题你听不懂，我给你讲讲。",
        "Nǎge tí nǐ tīng bù dǒng, wǒ gěi nǐ jiǎngjiang.",
        "Luyện đọc câu đề nghị giúp đỡ bạn học:",
        ["Động từ lặp lại: 讲讲 (jiǎngjiang)", "Biến điệu thanh 3: 给你 (géi nǐ)"],
        "Âm tiết thứ hai của động từ lặp lại 讲讲 đọc thanh nhẹ."
      ),
      speakingShadowing(
        "hsk3-l6-ex5",
        "你刚才放在哪儿了？再好好找找吧。",
        "Nǐ gāngcái fàng zài nǎr le? Zài hǎohāo zhǎozhao ba.",
        "Luyện nói câu gợi ý tìm đồ:",
        ["Âm cuốn lưỡi: 哪儿 (nǎr)", "Từ láy: 好好 (hǎohāo), 找找 (zhǎozhao)"],
        "Giữ ngữ điệu nhẹ nhàng, khuyên nhủ."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 我跟她都认识五年了 (Wǒ gēn tā dōu rènshi wǔ nián le)
  // ==========================================
  {
    id: "hsk3-l7-renshi",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 7,
    title: "Bài 7: Tôi và cô ấy đã quen nhau 5 năm rồi",
    titleZh: "第七课：我跟她都认识五年了",
    titlePinyin: "Dì qī kè: Wǒ gēn tā dōu rènshi wǔ nián le",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-hsk-standard",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Y6KYAm7wHqs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 7 我跟她都认识五年了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ thời lượng (时量补语): Động từ + 了 + Khoảng thời gian (+ Tân ngữ). Diễn tả hành động kéo dài bao lâu. Ví dụ: 我学习了两年汉语 (Tôi đã học 2 năm tiếng Trung).",
      "Nếu có 了 ở cả sau động từ và cuối câu (V + 了 + Thời lượng + 了), biểu thị hành động đã kéo dài từng đó thời gian và HIỆN VẪN ĐANG TIẾP DIỄN.",
      "Cách biểu đạt giờ kém: 差 + số phút + 分 + giờ (ví dụ: 差一刻八点 — 8 giờ kém 15).",
    ],
    newWords: [
      {
        hanzi: "同事",
        pinyin: "tóngshì",
        partOfSpeech: "Danh từ",
        meaningVi: "đồng nghiệp",
        radical: "口 (Khẩu)",
        strokeCount: 6,
      },
      {
        hanzi: "以前",
        pinyin: "yǐqián",
        partOfSpeech: "Danh từ",
        meaningVi: "trước đây, trước kia",
        radical: "人 (Nhân)",
        strokeCount: 4,
      },
      {
        hanzi: "银行",
        pinyin: "yínháng",
        partOfSpeech: "Danh từ",
        meaningVi: "ngân hàng",
        radical: "钅 (Kim)",
        strokeCount: 11,
      },
      {
        hanzi: "久",
        pinyin: "jiǔ",
        partOfSpeech: "Tính từ",
        meaningVi: "lâu",
        radical: "丿 (Phiệt)",
        strokeCount: 3,
      },
      {
        hanzi: "感兴趣",
        pinyin: "gǎn xìngqù",
        partOfSpeech: "Cụm động từ",
        meaningVi: "có hứng thú, quan tâm",
        radical: "心 (Tâm)",
        strokeCount: 13,
      },
      {
        hanzi: "结婚",
        pinyin: "jiéhūn",
        partOfSpeech: "Động từ",
        meaningVi: "kết hôn, cưới",
        radical: "纟 (Mịch)",
        strokeCount: 9,
      },
      {
        hanzi: "欢迎",
        pinyin: "huānyíng",
        partOfSpeech: "Động từ",
        meaningVi: "hoan nghênh, chào đón",
        radical: "又 (Hựu)",
        strokeCount: 6,
      },
      {
        hanzi: "迟到",
        pinyin: "chídào",
        partOfSpeech: "Động từ",
        meaningVi: "đến muộn, trễ",
        radical: "辶 (Sước)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nói chuyện với đồng nghiệp ở công ty (在公司)",
        lines: [
          {
            speaker: "同事 (Tóngshì)",
            zh: "那个漂亮的新同事是谁？",
            pinyin: "Nàge piàoliang de xīn tóngshì shì shéi?",
            vi: "Cô đồng nghiệp mới xinh đẹp kia là ai thế?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "那是小丽。",
            pinyin: "Nà shì Xiǎolì.",
            vi: "Đó là Tiểu Lệ.",
          },
          {
            speaker: "同事 (Tóngshì)",
            zh: "她刚来北京吗？",
            pinyin: "Tā gāng lái Běijīng ma?",
            vi: "Cô ấy mới đến Bắc Kinh à?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "不，她在北京工作三年了。以前她在一家银行工作。",
            pinyin: "Bù, tā zài Běijīng gōngzuò sān nián le. Yǐqián tā zài yì jiā yínháng gōngzuò.",
            vi: "Không, cô ấy làm việc ở Bắc Kinh 3 năm rồi. Trước đây cô ấy làm ở một ngân hàng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Quen nhau 5 năm rồi (在咖啡馆)",
        lines: [
          {
            speaker: "朋友 (Péngyou)",
            zh: "你跟女朋友认识多长时间了？",
            pinyin: "Nǐ gēn nǚpéngyou rènshi duō cháng shíjiān le?",
            vi: "Cậu với bạn gái quen nhau bao lâu rồi?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "我跟她都认识五年了。",
            pinyin: "Wǒ gēn tā dōu rènshi wǔ nián le.",
            vi: "Tớ với cô ấy đã quen nhau 5 năm rồi.",
          },
          {
            speaker: "朋友 (Péngyou)",
            zh: "你们打算什么时候结婚？",
            pinyin: "Nǐmen dǎsuàn shénme shíhou jiéhūn?",
            vi: "Hai cậu dự định khi nào kết hôn?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "明年春天，到时候欢迎你来参加！",
            pinyin: "Míngnián chūntiān, dào shíhou huānyíng nǐ lái cānjiā!",
            vi: "Mùa xuân năm sau, đến lúc đó hoan nghênh cậu tới tham dự nhé!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ thời lượng (V + 了 + Thời lượng + 了)",
        formula: "Chủ ngữ + Động từ + (了) + Khoảng thời gian + 了",
        explanationVi:
          "Diễn tả hành động hoặc trạng thái đã kéo dài một khoảng thời gian và đến nay vẫn tiếp tục. Với động từ không kéo dài như 结婚, 认识, dùng trực tiếp sau động từ.",
        examples: [
          {
            zh: "我跟她都认识五年了。",
            pinyin: "Wǒ gēn tā dōu rènshi wǔ nián le.",
            vi: "Tôi và cô ấy đã quen nhau 5 năm rồi.",
          },
          {
            zh: "他在北京工作三年了。",
            pinyin: "Tā zài Běijīng gōngzuò sān nián le.",
            vi: "Anh ấy làm việc ở Bắc Kinh 3 năm rồi.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 对...感兴趣 (Có hứng thú với...)",
        formula: "Chủ ngữ + 对 + Đối tượng + (很/非常/不) + 感兴趣",
        explanationVi:
          "Diễn tả sự quan tâm, hứng thú của ai đó đối với một lĩnh vực, sự vật hay hoạt động nào đó.",
        examples: [
          {
            zh: "我对中国音乐很感兴趣。",
            pinyin: "Wǒ duì Zhōngguó yīnyuè hěn gǎn xìngqù.",
            vi: "Tôi rất có hứng thú với âm nhạc Trung Quốc.",
          },
          {
            zh: "他对历史不感兴趣。",
            pinyin: "Tā duì lìshǐ bù gǎn xìngqù.",
            vi: "Anh ấy không có hứng thú với lịch sử.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk3-l7-ex1",
        "小丽不是刚来北京的，她在北京工作三年了。以前她在一家银行工作，现在在我们的公司工作。",
        "Xiǎolì búshì gāng lái Běijīng de, tā zài Běijīng gōngzuò sān nián le. Yǐqián tā zài yì jiā yínháng gōngzuò, xiànzài zài wǒmen de gōngsī gōngzuò.",
        "Tiểu Lệ không phải mới đến Bắc Kinh, cô ấy đã làm việc ở Bắc Kinh 3 năm rồi. Trước đây cô ấy làm ở một ngân hàng, hiện tại làm ở công ty chúng tôi.",
        "Trước đây Tiểu Lệ làm việc ở đâu?",
        ["Ở một ngân hàng", "Ở một trường học", "Ở một bệnh viện", "Ở một siêu thị"],
        "Ở một ngân hàng",
        "Đoạn văn nêu rõ: 以前她在一家银行工作."
      ),
      readingComp(
        "hsk3-l7-ex2",
        "我跟女朋友都认识五年了，我们打算明年春天结婚。到时候欢迎大家来参加我们的婚礼！",
        "Wǒ gēn nǚpéngyou dōu rènshi wǔ nián le, wǒmen dǎsuàn míngnián chūntiān jiéhūn. Dào shíhou huānyíng dàjiā lái cānjiā wǒmen de hūnlǐ!",
        "Tôi và bạn gái đã quen nhau 5 năm rồi, chúng tôi dự định mùa xuân năm sau kết hôn. Đến lúc đó hoan nghênh mọi người đến dự đám cưới của chúng tôi!",
        "Họ dự định khi nào kết hôn?",
        ["Mùa xuân năm sau", "Cuối tuần này", "Mùa thu năm nay", "5 năm sau"],
        "Mùa xuân năm sau",
        "Câu văn ghi: 我们打算明年春天结婚."
      ),
      readingComp(
        "hsk3-l7-ex3",
        "今天早上差一刻八点我就到了公司，但是我的同事八点半才来，他今天迟到了半个小时。",
        "Jīntiān zǎoshang chà yí kè bā diǎn wǒ jiù dào le gōngsī, dànshì wǒ de tóngshì bā diǎn bàn cái lái, tā jīntiān chídào le bàn ge xiǎoshí.",
        "Sáng nay 8 giờ kém 15 tôi đã đến công ty, nhưng đồng nghiệp của tôi 8 giờ rưỡi mới tới, hôm nay anh ấy đến muộn nửa tiếng.",
        "Người nói đến công ty lúc mấy giờ?",
        ["7 giờ 45 phút", "8 giờ 15 phút", "8 giờ 30 phút", "8 giờ đúng"],
        "7 giờ 45 phút",
        "差一刻八点 (8 giờ kém một khắc = 7 giờ 45 phút)."
      ),
      readingComp(
        "hsk3-l7-ex4",
        "小明对中国文化非常感兴趣，他已经学习了两年汉语了，现在能看懂很多中文书。",
        "Xiǎomíng duì Zhōngguó wénhuà fēicháng gǎn xìngqù, tā yǐjīng xuéxí le liǎng nián Hànyǔ le, xiànzài néng kàndǒng hěn duō Zhōngwén shū.",
        "Tiểu Minh vô cùng có hứng thú với văn hóa Trung Quốc, cậu ấy đã học tiếng Trung được 2 năm rồi, hiện tại có thể đọc hiểu rất nhiều sách tiếng Trung.",
        "Tiểu Minh đã học tiếng Trung được bao lâu?",
        ["2 năm", "5 năm", "3 năm", "Nửa năm"],
        "2 năm",
        "Đoạn văn viết: 他已经学习了两年汉语了."
      ),
      readingComp(
        "hsk3-l7-ex5",
        "我们好久没见面了！上次见面还是去年夏天，这次你来北京，我一定要请你吃烤鸭。",
        "Wǒmen hǎojiǔ méi jiànmiàn le! Shàngcì jiànmiàn hái shì qùnián xiàtiān, zhècì nǐ lái Běijīng, wǒ yídìng yào qǐng nǐ chī kǎoyā.",
        "Chúng ta lâu lắm rồi không gặp nhau! Lần trước gặp mặt vẫn là mùa hè năm ngoái, lần này cậu đến Bắc Kinh, tớ nhất định phải mời cậu ăn vịt quay.",
        "Lần trước họ gặp nhau vào lúc nào?",
        ["Mùa hè năm ngoái", "Mùa xuân năm ngoái", "Tháng trước", "Tuần trước"],
        "Mùa hè năm ngoái",
        "Câu văn nêu rõ: 上次见面还是去年夏天."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 你去哪儿我就去哪儿 (Nǐ qù nǎr wǒ jiù qù nǎr)
  // ==========================================
  {
    id: "hsk3-l8-niqunar",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 8,
    title: "Bài 8: Bạn đi đâu tôi đi đó",
    titleZh: "第八课：你去哪儿我就去哪儿",
    titlePinyin: "Dì bā kè: Nǐ qù nǎr wǒ jiù qù nǎr",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-hanzi-master",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=lZDbCdwanJw",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 8 你去哪儿我就去哪儿",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Phân biệt 又 (yòu — lại, dùng cho hành động ĐÃ xảy ra) và 再 (zài — lại, nữa, dùng cho hành động CHƯA xảy ra).",
      "Cách dùng phiếm chỉ của đại từ nghi vấn (谁, 什么, 哪儿, 怎么) với 就: lặp lại cùng một đại từ nghi vấn ở 2 vế câu. Ví dụ: 你去哪儿我就去哪儿 (Bạn đi đâu tôi đi đó).",
      "Phó từ 刚才 / 马上 (mǎshàng — lập tức, ngay) đứng trước động từ.",
    ],
    newWords: [
      {
        hanzi: "又",
        pinyin: "yòu",
        partOfSpeech: "Phó từ",
        meaningVi: "lại (biểu thị hành động lặp lại đã xảy ra)",
        radical: "又 (Hựu)",
        strokeCount: 2,
      },
      {
        hanzi: "满意",
        pinyin: "mǎnyì",
        partOfSpeech: "Tính từ",
        meaningVi: "hài lòng",
        radical: "氵 (Chấm thủy)",
        strokeCount: 13,
      },
      {
        hanzi: "电梯",
        pinyin: "diàntī",
        partOfSpeech: "Danh từ",
        meaningVi: "thang máy",
        radical: "田 (Điền)",
        strokeCount: 5,
      },
      {
        hanzi: "层",
        pinyin: "céng",
        partOfSpeech: "Lượng từ",
        meaningVi: "tầng (nhà)",
        radical: "尸 (Thi)",
        strokeCount: 7,
      },
      {
        hanzi: "害怕",
        pinyin: "hàipà",
        partOfSpeech: "Động từ",
        meaningVi: "sợ hãi, e sợ",
        radical: "宀 (Miên)",
        strokeCount: 10,
      },
      {
        hanzi: "熊猫",
        pinyin: "xióngmāo",
        partOfSpeech: "Danh từ",
        meaningVi: "gấu trúc",
        radical: "灬 (Hỏa)",
        strokeCount: 14,
      },
      {
        hanzi: "见面",
        pinyin: "jiànmiàn",
        partOfSpeech: "Động từ",
        meaningVi: "gặp mặt",
        radical: "见 (Kiến)",
        strokeCount: 4,
      },
      {
        hanzi: "安静",
        pinyin: "ānjìng",
        partOfSpeech: "Tính từ",
        meaningVi: "yên tĩnh",
        radical: "宀 (Miên)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nghỉ ngơi ở văn phòng (在休息室)",
        lines: [
          {
            speaker: "同事 (Tóngshì)",
            zh: "听说你最近打算买房子？",
            pinyin: "Tīngshuō nǐ zuìjìn dǎsuàn mǎi fángzi?",
            vi: "Nghe nói dạo này cậu định mua nhà à?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "是，昨天去看了看，今天又去看了看，明天还要再去看看。",
            pinyin: "Shì, zuótiān qù kàn le kàn, jīntiān yòu qù kàn le kàn, míngtiān hái yào zài qù kànkan.",
            vi: "Đúng, hôm qua đi xem rồi, hôm nay lại đi xem tiếp, ngày mai vẫn phải đi xem lại nữa.",
          },
          {
            speaker: "同事 (Tóngshì)",
            zh: "都不满意吗？",
            pinyin: "Dōu bù mǎnyì ma?",
            vi: "Đều không hài lòng sao?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "一个没有电梯，不方便；一个有电梯，但是在二十层，我有点儿害怕。",
            pinyin: "Yí ge méiyǒu diàntī, bù fāngbiàn; yí ge yǒu diàntī, dànshì zài èrshí céng, wǒ yǒudiǎnr hàipà.",
            vi: "Một căn không có thang máy, bất tiện; một căn có thang máy nhưng ở tầng 20, tớ hơi sợ.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Rủ nhau đi công viên (在家里)",
        lines: [
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "明天周末，你想去哪儿玩儿？",
            pinyin: "Míngtiān zhōumò, nǐ xiǎng qù nǎr wánr?",
            vi: "Ngày mai cuối tuần, em muốn đi đâu chơi?",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "你去哪儿我就去哪儿。",
            pinyin: "Nǐ qù nǎr wǒ jiù qù nǎr.",
            vi: "Anh đi đâu em đi đó.",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "那我们去动物园看熊猫吧，听说那儿很安静，空气也很好。",
            pinyin: "Nà wǒmen qù dòngwùyuán kàn xióngmāo ba, tīngshuō nàr hěn ānjìng, kōngqì yě hěn hǎo.",
            vi: "Vậy chúng ta đi sở thú xem gấu trúc đi, nghe nói ở đó rất yên tĩnh, không khí cũng rất tốt.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phân biệt 又 (yòu) và 再 (zài)",
        formula: "又 + V (đã xảy ra) | 再 + V (chưa xảy ra / tương lai)",
        explanationVi:
          "Cả hai đều chỉ sự lặp lại của động tác. 又 dùng cho hành động đã lặp lại trong quá khứ hoặc hiện tại; 再 dùng cho hành động sẽ lặp lại trong tương lai hoặc câu cầu khiến.",
        examples: [
          {
            zh: "昨天去看了，今天又去了。",
            pinyin: "Zuótiān qù kàn le, jīntiān yòu qù le.",
            vi: "Hôm qua đi xem rồi, hôm nay lại đi nữa.",
          },
          {
            zh: "明天还要再去看看。",
            pinyin: "Míngtiān hái yào zài qù kànkan.",
            vi: "Ngày mai vẫn phải đi xem lại nữa.",
          },
        ],
      },
      {
        titleVi: "Đại từ nghi vấn dùng linh hoạt (phiếm chỉ) với 就",
        formula: "...Đại từ nghi vấn (谁/什么/哪儿)... 就 ...Đại từ nghi vấn đó...",
        explanationVi:
          "Hai đại từ nghi vấn giống nhau đứng ở hai vế câu nối bằng 就, chỉ cùng một đối tượng không xác định cụ thể (ai... thì người đó, đâu... thì đó).",
        examples: [
          {
            zh: "你去哪儿我就去哪儿。",
            pinyin: "Nǐ qù nǎr wǒ jiù qù nǎr.",
            vi: "Bạn đi đâu tôi đi đó.",
          },
          {
            zh: "你想吃什么我们就吃什么。",
            pinyin: "Nǐ xiǎng chī shénme wǒmen jiù chī shénme.",
            vi: "Bạn muốn ăn gì chúng ta ăn thứ đó.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk3-l8-ex1",
        "层",
        "céng",
        "tầng (nhà)",
        "Chữ 层 gồm bộ Thi (尸) ở ngoài và chữ 云 (yún) ở trong, tổng cộng 7 nét."
      ),
      writingStroke(
        "hsk3-l8-ex2",
        "安",
        "ān",
        "yên, an toàn (trong 安静)",
        "Chữ 安 gồm bộ Miên (宀) ở trên và bộ Nữ (女) ở dưới, tổng cộng 6 nét."
      ),
      writingOrder(
        "hsk3-l8-ex3",
        "Sắp xếp thành câu hoàn chỉnh: Bạn đi đâu tôi đi đó.",
        ["你", "去", "哪儿", "我", "就", "去", "哪儿"],
        "你去哪儿我就去哪儿",
        "Nǐ qù nǎr wǒ jiù qù nǎr",
        "Cấu trúc phiếm chỉ: Vế 1 (你去哪儿) + 我就 + Vế 2 (去哪儿)."
      ),
      writingOrder(
        "hsk3-l8-ex4",
        "Sắp xếp thành câu: Ngày mai vẫn phải đi xem lại nữa.",
        ["明天", "还", "要", "再", "去", "看看"],
        "明天还要再去看看",
        "Míngtiān hái yào zài qù kànkan",
        "Hành động chưa xảy ra (明天) dùng phó từ 再 trước động từ."
      ),
      writingTwoSentences(
        "hsk3-l8-ex5",
        "满意",
        "mǎnyì",
        "hài lòng",
        "Đặt 2 câu hoàn chỉnh có chứa tính từ 满意 (ví dụ: 对...很满意)."
      ),
    ],
  },

  // ==========================================
  // BÀI 9: 她的汉语说得跟中国人一样好 (Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo)
  // ==========================================
  {
    id: "hsk3-l9-shuode",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 9,
    title: "Bài 9: Tiếng Trung của cô ấy nói hay như người Trung Quốc",
    titleZh: "第九课：她的汉语说得跟中国人一样好",
    titlePinyin: "Dì jiǔ kè: Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-tieng-trung-thu-gian",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=IKDdrpXgrlk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 9 她的汉语说得跟中国人一样好",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc 越 A 越 B (càng A càng B): biểu thị B thay đổi tương ứng theo mức độ của A. Ví dụ: 雨越下越大 (Mưa càng lúc càng to).",
      "Câu so sánh ngang bằng: A + 跟 + B + 一样 + (Tính từ). Phủ định: A + 跟 + B + 不一样. Ví dụ: 她的汉语说得跟中国人一样好.",
      "Phó từ 一直 / 差不多 (chàbuduō — xấp xỉ, gần như) dùng trước tính từ hoặc số lượng.",
    ],
    newWords: [
      {
        hanzi: "中文",
        pinyin: "Zhōngwén",
        partOfSpeech: "Danh từ",
        meaningVi: "tiếng Trung, chữ Hán",
        radical: "丨 (Cổn)",
        strokeCount: 4,
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
        hanzi: "一样",
        pinyin: "yíyàng",
        partOfSpeech: "Tính từ",
        meaningVi: "giống nhau, như nhau",
        radical: "一 (Nhất)",
        strokeCount: 1,
      },
      {
        hanzi: "最后",
        pinyin: "zuìhòu",
        partOfSpeech: "Danh từ",
        meaningVi: "cuối cùng",
        radical: "日 (Nhật)",
        strokeCount: 12,
      },
      {
        hanzi: "放心",
        pinyin: "fàngxīn",
        partOfSpeech: "Động từ",
        meaningVi: "yên tâm",
        radical: "攵 (Phộc)",
        strokeCount: 8,
      },
      {
        hanzi: "一定",
        pinyin: "yídìng",
        partOfSpeech: "Phó từ",
        meaningVi: "nhất định, chắc chắn",
        radical: "一 (Nhất)",
        strokeCount: 1,
      },
      {
        hanzi: "担心",
        pinyin: "dānxīn",
        partOfSpeech: "Động từ",
        meaningVi: "lo lắng",
        radical: "扌 (Tài gẩy)",
        strokeCount: 8,
      },
      {
        hanzi: "比较",
        pinyin: "bǐjiào",
        partOfSpeech: "Phó từ",
        meaningVi: "tương đối, khá",
        radical: "比 (Tỷ)",
        strokeCount: 4,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Khen bạn học nói tiếng Trung giỏi (在教室)",
        lines: [
          {
            speaker: "马可 (Mǎkě)",
            zh: "大山的中文说得真好，他是你们班的学生吗？",
            pinyin: "Dàshān de Zhōngwén shuō de zhēn hǎo, tā shì nǐmen bān de xuésheng ma?",
            vi: "Tiếng Trung của Đại Sơn nói hay thật đấy, cậu ấy là học sinh lớp các cậu à?",
          },
          {
            speaker: "小明 (Xiǎomíng)",
            zh: "不是，我们班的玛丽说得更好，她的汉语说得跟中国人一样好。",
            pinyin: "Búshì, wǒmen bān de Mǎlì shuō de gèng hǎo, tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.",
            vi: "Không phải, Mary lớp tớ nói còn hay hơn, tiếng Trung của cô ấy nói hay như người Trung Quốc vậy.",
          },
          {
            speaker: "马可 (Mǎkě)",
            zh: "真的吗？她学了多长时间汉语了？",
            pinyin: "Zhēn de ma? Tā xué le duō cháng shíjiān Hànyǔ le?",
            vi: "Thật sao? Cô ấy học tiếng Trung bao lâu rồi?",
          },
          {
            speaker: "小明 (Xiǎomíng)",
            zh: "她在中国学习了三年了，而且她越学越喜欢。",
            pinyin: "Tā zài Zhōngguó xuéxí le sān nián le, érqiě tā yuè xué yuè xǐhuan.",
            vi: "Cô ấy học ở Trung Quốc 3 năm rồi, hơn nữa cô ấy càng học càng thích.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Động viên trước kỳ thi (在学校)",
        lines: [
          {
            speaker: "小红 (Xiǎohóng)",
            zh: "下周就要考试了，我有点儿担心。",
            pinyin: "Xià zhōu jiù yào kǎoshì le, wǒ yǒudiǎnr dānxīn.",
            vi: "Tuần sau là thi rồi, tớ hơi lo lắng.",
          },
          {
            speaker: "老师 (Lǎoshī)",
            zh: "别担心，你平时学习比较努力，一定能考好。",
            pinyin: "Bié dānxīn, nǐ píngshí xuéxí bǐjiào nǔlì, yídìng néng kǎohǎo.",
            vi: "Đừng lo, bình thường em học khá chăm chỉ, nhất định sẽ thi tốt.",
          },
          {
            speaker: "小红 (Xiǎohóng)",
            zh: "谢谢老师，那我放心多了。最后几天我再好好复习复习。",
            pinyin: "Xièxie lǎoshī, nà wǒ fàngxīn duō le. Zuìhòu jǐ tiān wǒ zài hǎohāo fùxí fùxí.",
            vi: "Cảm ơn cô, vậy em yên tâm hơn nhiều rồi. Mấy ngày cuối em sẽ ôn tập lại thật kỹ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu so sánh ngang bằng A 跟 B 一样 (+ Tính từ)",
        formula: "A + 跟 + B + (不) 一样 + (Tính từ)",
        explanationVi:
          "Dùng để so sánh hai đối tượng A và B giống nhau ở một đặc điểm nào đó. Nếu muốn nói không giống nhau, dùng 不一样.",
        examples: [
          {
            zh: "她的汉语说得跟中国人一样好。",
            pinyin: "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.",
            vi: "Tiếng Trung của cô ấy nói hay như người Trung Quốc.",
          },
          {
            zh: "这件衣服跟那件一样贵。",
            pinyin: "Zhè jiàn yīfu gēn nà jiàn yíyàng guì.",
            vi: "Chiếc áo này đắt ngang chiếc kia.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 越 A 越 B (Càng A càng B)",
        formula: "Chủ ngữ + 越 + Động từ/Tính từ 1 + 越 + Động từ/Tính từ 2",
        explanationVi:
          "Diễn tả sự biến đổi của vế B tăng lên theo mức độ của vế A.",
        examples: [
          {
            zh: "她越学越喜欢。",
            pinyin: "Tā yuè xué yuè xǐhuan.",
            vi: "Cô ấy càng học càng thích.",
          },
          {
            zh: "雨越下越大了。",
            pinyin: "Yǔ yuè xià yuè dà le.",
            vi: "Mưa càng lúc càng to rồi.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk3-l9-ex1",
        "她的汉语说得跟中国人一样好。",
        "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.",
        "Nghe câu và chọn nghĩa tiếng Việt đúng:",
        [
          "Tiếng Trung của cô ấy nói hay như người Trung Quốc",
          "Cô ấy là người Trung Quốc",
          "Tiếng Trung của cô ấy nói chưa tốt lắm",
          "Cô ấy dạy tiếng Trung cho người Trung Quốc",
        ],
        "Tiếng Trung của cô ấy nói hay như người Trung Quốc",
        "Cấu trúc 跟...一样好 (tốt/hay như...)."
      ),
      listeningFill(
        "hsk3-l9-ex2",
        "别担心，你一定能考好。",
        "别___，你一定能考好。",
        "Bié ___, nǐ yídìng néng kǎohǎo.",
        "Nghe và điền động từ còn thiếu:",
        "担心",
        "别担心 (bié dānxīn) nghĩa là 'đừng lo lắng'."
      ),
      listeningDialogue(
        "hsk3-l9-ex3",
        "男：玛丽学了多长时间汉语了？ 女：她在中国学习了三年了，而且越学越喜欢。",
        "Nán: Mǎlì xué le duō cháng shíjiān Hànyǔ le? Nǚ: Tā zài Zhōngguó xuéxí le sān nián le, érqiě yuè xué yuè xǐhuan.",
        "Mary cảm thấy thế nào về việc học tiếng Trung?",
        [
          "Càng học càng thích",
          "Càng học càng thấy khó",
          "Không muốn học nữa",
          "Chỉ thích học viết",
        ],
        "Càng học càng thích",
        "Người nữ nói: 而且越学越喜欢 (hơn nữa càng học càng thích)."
      ),
      listeningMcq(
        "hsk3-l9-ex4",
        "我觉得今天的考试比较容易，大家别担心。",
        "Wǒ juéde jīntiān de kǎoshì bǐjiào róngyì, dàjiā bié dānxīn.",
        "Người nói đánh giá bài thi hôm nay thế nào?",
        [
          "Khá dễ",
          "Rất khó",
          "Quá dài",
          "Giống hệt hôm qua",
        ],
        "Khá dễ",
        "比较容易 (bǐjiào róngyì) nghĩa là 'khá dễ / tương đối dễ'."
      ),
      listeningDialogue(
        "hsk3-l9-ex5",
        "女：你听说了吗？最后一天我们可以去爬山。 男：太好了，我一定参加！",
        "Nǚ: Nǐ tīngshuō le ma? Zuìhòu yì tiān wǒmen kěyǐ qù páshān. Nán: Tài hǎo le, wǒ yídìng cānjiā!",
        "Người nam có tham gia hoạt động ngày cuối cùng không?",
        [
          "Nhất định sẽ tham gia",
          "Không thể tham gia",
          "Còn đang suy nghĩ",
          "Sợ mệt nên không đi",
        ],
        "Nhất định sẽ tham gia",
        "Người nam đáp: 太好了，我一定参加！(Tuyệt quá, tôi nhất định tham gia!)."
      ),
    ],
  },

  // ==========================================
  // BÀI 10: 数学比历史难多了 (Shùxué bǐ lìshǐ nán duō le)
  // ==========================================
  {
    id: "hsk3-l10-shuxue",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    lessonNumber: 10,
    title: "Bài 10: Toán khó hơn Lịch sử nhiều",
    titleZh: "第十课：数学比历史难多了",
    titlePinyin: "Dì shí kè: Shùxué bǐ lìshǐ nán duō le",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=6xmvPKpnxyM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 10 数学比历史难多了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu so sánh hơn với 比 (bǐ) kèm mức độ chênh lệch: A + 比 + B + Tính từ + 一点儿 / 一些 (hơn một chút) hoặc 多了 / 得多 (hơn nhiều). Ví dụ: 数学比历史难多了.",
      "Phủ định của câu so sánh với 比 dùng 没有 (méiyǒu): A + 没有 + B + (那么) + Tính từ (A không... bằng B).",
      "Biểu đạt số ước lượng: dùng hai số liền nhau (như 三四个 — 3, 4 cái) hoặc 左右 (zuǒyòu — khoảng chừng).",
    ],
    newWords: [
      {
        hanzi: "个子",
        pinyin: "gèzi",
        partOfSpeech: "Danh từ",
        meaningVi: "vóc dáng, chiều cao",
        radical: "人 (Nhân)",
        strokeCount: 3,
      },
      {
        hanzi: "矮",
        pinyin: "ǎi",
        partOfSpeech: "Tính từ",
        meaningVi: "thấp, lùn",
        radical: "矢 (Thỉ)",
        strokeCount: 13,
      },
      {
        hanzi: "历史",
        pinyin: "lìshǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "lịch sử",
        radical: "厂 (Hán)",
        strokeCount: 4,
      },
      {
        hanzi: "体育",
        pinyin: "tǐyù",
        partOfSpeech: "Danh từ",
        meaningVi: "thể dục, thể thao",
        radical: "亻 (Nhân đứng)",
        strokeCount: 7,
      },
      {
        hanzi: "数学",
        pinyin: "shùxué",
        partOfSpeech: "Danh từ",
        meaningVi: "toán học",
        radical: "攵 (Phộc)",
        strokeCount: 13,
      },
      {
        hanzi: "方便",
        pinyin: "fāngbiàn",
        partOfSpeech: "Tính từ",
        meaningVi: "thuận tiện, tiện lợi",
        radical: "方 (Phương)",
        strokeCount: 4,
      },
      {
        hanzi: "自行车",
        pinyin: "zìxíngchē",
        partOfSpeech: "Danh từ",
        meaningVi: "xe đạp",
        radical: "自 (Tự)",
        strokeCount: 6,
      },
      {
        hanzi: "骑",
        pinyin: "qí",
        partOfSpeech: "Động từ",
        meaningVi: "cưỡi, đạp (xe đạp), đi (xe máy)",
        radical: "马 (Mã)",
        strokeCount: 11,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nói về môn học ở trường (在学校)",
        lines: [
          {
            speaker: "大山 (Dàshān)",
            zh: "你最喜欢上什么课？",
            pinyin: "Nǐ zuì xǐhuan shàng shénme kè?",
            vi: "Cậu thích học môn nào nhất?",
          },
          {
            speaker: "大卫 (Dàwèi)",
            zh: "我最喜欢上历史课和体育课，不太喜欢数学课。",
            pinyin: "Wǒ zuì xǐhuan shàng lìshǐkè hé tǐyùkè, bú tài xǐhuan shùxuékè.",
            vi: "Tớ thích học môn Lịch sử và Thể dục nhất, không thích môn Toán lắm.",
          },
          {
            speaker: "大山 (Dàshān)",
            zh: "为什么？",
            pinyin: "Wèishénme?",
            vi: "Tại sao thế?",
          },
          {
            speaker: "大卫 (Dàwèi)",
            zh: "因为数学比历史难多了，我常常听不懂。",
            pinyin: "Yīnwèi shùxué bǐ lìshǐ nán duō le, wǒ chángcháng tīng bù dǒng.",
            vi: "Vì môn Toán khó hơn Lịch sử nhiều, tớ thường xuyên nghe không hiểu.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: So sánh phương tiện đi lại (在路上)",
        lines: [
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "你每天怎么来公司？",
            pinyin: "Nǐ měitiān zěnme lái gōngsī?",
            vi: "Hằng ngày cậu đến công ty bằng gì?",
          },
          {
            speaker: "小刚 (Xiǎogāng)",
            zh: "我骑自行车来，我家离公司很近，骑车只要十分钟左右。",
            pinyin: "Wǒ qí zìxíngchē lái, wǒ jiā lí gōngsī hěn jìn, qíchē zhǐ yào shí fēnzhōng zuǒyòu.",
            vi: "Tớ đạp xe đến, nhà tớ rất gần công ty, đạp xe chỉ mất khoảng 10 phút.",
          },
          {
            speaker: "小丽 (Xiǎolì)",
            zh: "骑自行车比坐公共汽车方便多了，还能锻炼身体！",
            pinyin: "Qí zìxíngchē bǐ zuò gōnggòng qìchē fāngbiàn duō le, hái néng duànliàn shēntǐ!",
            vi: "Đạp xe tiện hơn đi xe buýt nhiều, lại còn rèn luyện sức khỏe được nữa!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu so sánh với 比 kèm mức độ chênh lệch",
        formula: "A + 比 + B + Tính từ + 一点儿 / 多了 / 得多 / Số lượng cụ thể",
        explanationVi:
          "Trong câu so sánh 比 không được dùng 很, 非常 trước tính từ. Để nhấn mạnh mức độ hơn kém, đặt 一点儿 (một chút), 多了 / 得多 (nhiều) ở SAU tính từ.",
        examples: [
          {
            zh: "数学比历史难多了。",
            pinyin: "Shùxué bǐ lìshǐ nán duō le.",
            vi: "Toán khó hơn Lịch sử nhiều.",
          },
          {
            zh: "弟弟比我矮一点儿。",
            pinyin: "Dìdi bǐ wǒ ǎi yìdiǎnr.",
            vi: "Em trai thấp hơn tôi một chút.",
          },
        ],
      },
      {
        titleVi: "Phủ định so sánh với 没有 (méiyǒu)",
        formula: "A + 没有 + B + (这么/那么) + Tính từ",
        explanationVi:
          "Biểu thị A không đạt đến mức độ như B (A không... bằng B).",
        examples: [
          {
            zh: "历史没有数学那么难。",
            pinyin: "Lìshǐ méiyǒu shùxué nàme nán.",
            vi: "Lịch sử không khó bằng Toán.",
          },
          {
            zh: "今天没有昨天冷。",
            pinyin: "Jīntiān méiyǒu zuótiān lěng.",
            vi: "Hôm nay không lạnh bằng hôm qua.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk3-l10-ex1",
        "数学比历史难多了，我常常听不懂。",
        "Shùxué bǐ lìshǐ nán duō le, wǒ chángcháng tīng bù dǒng.",
        "Luyện đọc câu so sánh hơn kèm mức độ 多了:",
        ["Âm uốn lưỡi: 数 (shù), 史 (shǐ), 常 (cháng)", "Nhấn mạnh cụm 难多了 (nán duō le)"],
        "Phát âm rõ 数学 (shùxué) và 历史 (lìshǐ), nhấn mạnh 难多了."
      ),
      speakingShadowing(
        "hsk3-l10-ex2",
        "我最喜欢上历史课和体育课。",
        "Wǒ zuì xǐhuan shàng lìshǐkè hé tǐyùkè.",
        "Luyện nói câu giới thiệu môn học yêu thích:",
        ["Âm tròn môi ü: 育 (yù)", "Thanh nhẹ: 喜欢 (xǐhuan)"],
        "Đọc chuẩn nguyên âm ü trong 体育 (tǐyù)."
      ),
      speakingShadowing(
        "hsk3-l10-ex3",
        "骑自行车比坐公共汽车方便多了。",
        "Qí zìxíngchē bǐ zuò gōnggòng qìchē fāngbiàn duō le.",
        "Luyện đọc câu so sánh phương tiện giao thông:",
        ["Âm bật hơi: 骑 (qí), 车 (chē), 汽 (qì)", "Nhấn mạnh 方便多了"],
        "Đọc liền mạch cụm 公共汽车 (gōnggòng qìchē) không bị vấp."
      ),
      speakingShadowing(
        "hsk3-l10-ex4",
        "我家离公司很近，骑车只要十分钟左右。",
        "Wǒ jiā lí gōngsī hěn jìn, qíchē zhǐ yào shí fēnzhōng zuǒyòu.",
        "Luyện nói câu mô tả khoảng cách và thời gian ước lượng:",
        ["Âm đầu lưỡi: 离 (lí), 左 (zuǒ)", "Cụm ước lượng: 十分钟左右"],
        "Ngắt nhịp nhẹ sau dấu phẩy và đọc rõ 左右 (zuǒyòu)."
      ),
      speakingShadowing(
        "hsk3-l10-ex5",
        "他的个子比我高一点儿，但是没有我哥哥高。",
        "Tā de gèzi bǐ wǒ gāo yìdiǎnr, dànshì méiyǒu wǒ gēge gāo.",
        "Luyện đọc câu kết hợp cả 比 và 没有:",
        ["Thanh nhẹ: 个子 (gèzi), 哥哥 (gēge)", "Âm cuốn lưỡi: 一点儿 (yìdiǎnr)"],
        "Thể hiện rõ sự tương phản giữa hai vế so sánh."
      ),
    ],
  },
];
