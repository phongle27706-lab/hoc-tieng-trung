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

export const HSK9_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 越中笔译高级技巧 (Kỹ thuật Biên dịch Việt ↔ Trung nâng cao)
  // ==========================================
  {
    id: "hsk9-l1-translation",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Kỹ thuật Biên dịch Việt ↔ Trung nâng cao",
    titleZh: "第一课：越中笔译高级技巧",
    titlePinyin: "Dì yī kè: Yuè-Zhōng bǐyì gāojí jìqiǎo",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 55,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Yun Xuexi (云学习)",
    youtubeUrl: "https://www.youtube.com/watch?v=LQjyo3QZw8s",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 1 越中笔译高级技巧",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Tiêu chuẩn dịch thuật kinh điển 信、达、雅 (Tín — Đạt — Nhã): trung thành nguyên tác, thông suốt tự nhiên và đạt độ tao nhã về văn phong.",
      "Kỹ thuật chuyển đổi từ loại (词类转换) và tách/ghép câu (拆句与合句) giúp bản dịch Việt ↔ Trung thoát khỏi lối dịch word-by-word (死译).",
      "Trong văn bản pháp lý và ngoại giao, cần ưu tiên thuật ngữ chuẩn hóa (规范术语) và cấu trúc câu trang trọng (书面语).",
    ],
    newWords: [
      {
        hanzi: "信达雅",
        pinyin: "xìn dá yǎ",
        partOfSpeech: "Danh từ",
        meaningVi: "Tín - Đạt - Nhã (3 tiêu chuẩn vàng trong dịch thuật của Nghiêm Phục)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 27,
      },
      {
        hanzi: "语境",
        pinyin: "yǔjìng",
        partOfSpeech: "Danh từ",
        meaningVi: "ngữ cảnh, bối cảnh ngôn ngữ",
        radical: "讠 (Ngôn)",
        strokeCount: 23,
      },
      {
        hanzi: "意译",
        pinyin: "yìyì",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "dịch ý, phóng dịch sát nghĩa",
        radical: "心 (Tâm)",
        strokeCount: 20,
      },
      {
        hanzi: "直译",
        pinyin: "zhíyì",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "dịch trực tiếp, dịch sát mặt chữ",
        radical: "目 (Mục)",
        strokeCount: 15,
      },
      {
        hanzi: "措辞",
        pinyin: "cuòcí",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "cách dùng từ, ngôn từ, hành văn",
        radical: "扌 (Tài gảy)",
        strokeCount: 24,
      },
      {
        hanzi: "润色",
        pinyin: "rùnsè",
        partOfSpeech: "Động từ",
        meaningVi: "trau chuốt, hiệu đính văn phong",
        radical: "氵 (Chấm thủy)",
        strokeCount: 16,
      },
      {
        hanzi: "对等",
        pinyin: "duìděng",
        partOfSpeech: "Tính từ",
        meaningVi: "tương đương, ngang bằng (về ngữ nghĩa/chức năng)",
        radical: "寸 (Thốn)",
        strokeCount: 17,
      },
      {
        hanzi: "晦涩",
        pinyin: "huìsè",
        partOfSpeech: "Tính từ",
        meaningVi: "tối nghĩa, khó hiểu, trúc trắc",
        radical: "日 (Nhật)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Thẩm định bản dịch hợp đồng và văn bản ngoại giao",
        lines: [
          {
            speaker: "Tổng biên tập",
            zh: "这份越中合作备忘录的初稿虽然忠实于原文，但部分长句直译痕迹过重，读起来略显晦涩。",
            pinyin: "Zhè fèn Yuè-Zhōng hézuò bèiwànglù de chūgǎo suīrán zhōngshí yú yuánwén, dàn bùfen chángjù zhíyì hénjì guòzhòng, dú qǐlái lüèxiǎn huìsè.",
            vi: "Bản thảo đầu của biên bản ghi nhớ hợp tác Việt-Trung này tuy trung thành với nguyên tác, nhưng một số câu dài mang nặng dấu vết dịch sát chữ, đọc lên hơi tối nghĩa.",
          },
          {
            speaker: "Biên dịch viên",
            zh: "明白。我将结合具体语境进行拆句重组，并采用意译与词类转换来润色措辞，力求做到信达雅。",
            pinyin: "Míngbai. Wǒ jiāng jiéhé jùtǐ yǔjìng jìnxíng chāijù chóngzǔ, bìng cǎiyòng yìyì yǔ cílèi zhuǎnhuàn lái rùnsè cuòcí, lìqiú zuòdào xìn dá yǎ.",
            vi: "Tôi hiểu rồi. Tôi sẽ kết hợp ngữ cảnh cụ thể để tách và tái cấu trúc câu, đồng thời áp dụng dịch ý và chuyển đổi từ loại để trau chuốt ngôn từ, phấn đấu đạt chuẩn Tín - Đạt - Nhã.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Xử lý từ ngữ mang đậm bản sắc văn hóa",
        lines: [
          {
            speaker: "Học viên",
            zh: "老师，遇到越南特有的文化词汇，在中文里找不到完全对等的表达时，该如何处理？",
            pinyin: "Lǎoshī, yùdào Yuènán tèyǒu de wénhuà cíhuì, zài Zhōngwén lǐ zhǎobudào wánquán duìděng de biǎodá shí, gāi rúhé chǔlǐ?",
            vi: "Thưa thầy, khi gặp các từ vựng văn hóa đặc thù của Việt Nam mà trong tiếng Trung không tìm thấy cách diễn đạt tương đương hoàn toàn, ta nên xử lý thế nào ạ?",
          },
          {
            speaker: "Giảng viên",
            zh: "可以采取音译加注或功能对等的策略，既保留原汁原味的文化意象，又不造成目标语读者的理解障碍。",
            pinyin: "Kěyǐ cǎiqǔ yīnyì jiāzhù huò gōngnéng duìděng de cèlüè, jì bǎoliú yuánzhī-yuánwèi de wénhuà yìxiàng, yòu bù zàochéng mùbiāoyǔ dúzhě de lǐjiě zhàng'ài.",
            vi: "Có thể áp dụng chiến lược phiên âm kèm chú thích hoặc tương đương chức năng, vừa giữ được hình tượng văn hóa nguyên bản, vừa không gây trở ngại cho người đọc ngôn ngữ đích.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nhấn mạnh mục tiêu chuẩn mực: 力求 + Động từ / Cụm động từ",
        formula: "Chủ ngữ + 力求 + 做到 / 实现 / 保持 + Tân ngữ",
        explanationVi:
          "力求 (lìqiú) mang nghĩa 'ra sức phấn đấu, cố gắng hết mức để đạt được', dùng rất phổ biến trong văn viết học thuật, dịch thuật và báo cáo chính thức.",
        examples: [
          {
            zh: "译文力求准确流畅，避免生搬硬套。",
            pinyin: "Yìwén lìqiú zhǔnquè liúchàng, bìmiǎn shēngbān-yìngtào.",
            vi: "Bản dịch cố gắng đạt độ chính xác và trôi chảy, tránh áp dụng rập khuôn máy móc.",
          },
          {
            zh: "我们在措辞上力求严谨规范。",
            pinyin: "Wǒmen zài cuòcí shàng lìqiú yánjǐn guīfàn.",
            vi: "Chúng tôi nỗ lực đảm bảo sự chặt chẽ và chuẩn mực trong cách dùng từ.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc song song cân đối trong văn viết: 既……，又不 / 也……",
        formula: "既 + Vế tích cực 1，又 + 不/避免 + Vế tiêu cực (hoặc Vế tích cực 2)",
        explanationVi:
          "Trong biên dịch cao cấp, cấu trúc 既……，又…… giúp câu văn cân đối, súc tích và thể hiện rõ hai yêu cầu song hành trong cùng một mệnh đề.",
        examples: [
          {
            zh: "好的翻译既要忠实原意，又要符合目的语的表达习惯。",
            pinyin: "Hǎo de fānyì jì yào zhōngshí yuányì, yòu yào fúhé mùdìyǔ de biǎodá xíguàn.",
            vi: "Bản dịch tốt vừa phải trung thành với nguyên ý, vừa phải phù hợp với thói quen diễn đạt của ngôn ngữ đích.",
          },
          {
            zh: "这种译法既保留了修辞色彩，又不失严谨。",
            pinyin: "Zhè zhǒng yìfǎ jì bǎoliú le xiūcí sècǎi, yòu bùshī yánjǐn.",
            vi: "Cách dịch này vừa giữ được sắc thái tu từ, vừa không mất đi tính chặt chẽ.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk9-l1-q1",
        "Sắp xếp thành câu hoàn chỉnh: 'Bản dịch này đã kết hợp ngữ cảnh để trau chuốt ngôn từ.'",
        ["这份译文", "结合语境", "进行了", "措辞润色", "。"],
        "这份译文结合语境进行了措辞润色。",
        "Zhè fèn yìwén jiéhé yǔjìng jìnxíng le cuòcí rùnsè.",
        "Trật tự chuẩn: Chủ ngữ (这份译文) + Trạng ngữ phương thức (结合语境) + Động từ (进行了) + Tân ngữ (措辞润色)."
      ),
      writingOrder(
        "hsk9-l1-q2",
        "Sắp xếp thành câu hoàn chỉnh: 'Biên dịch cao cấp vừa phải trung thành nguyên tác, vừa không thể tối nghĩa.'",
        ["高级笔译", "既要忠实原文，", "又不能", "过于晦涩", "。"],
        "高级笔译既要忠实原文，又不能过于晦涩。",
        "Gāojí bǐyì jì yào zhōngshí yuánwén, yòu bùnéng guòyú huìsè.",
        "Dùng cấu trúc song hành 既要……，又不能…… để diễn đạt hai tiêu chuẩn đồng thời."
      ),
      writingStroke(
        "hsk9-l1-q3",
        "润色",
        "rùnsè",
        "trau chuốt, hiệu đính văn phong",
        "Chữ 润 gồm bộ 氵 (Chấm thủy) và 闰; chữ 色 gồm bộ ⺈ và 巴."
      ),
      writingTwoSentences(
        "hsk9-l1-q4",
        "语境",
        "yǔjìng",
        "ngữ cảnh",
        "Đặt 2 câu có chứa 语境 (Câu 1: giao tiếp/học tập, Câu 2: biên dịch/học thuật)."
      ),
      writingTwoSentences(
        "hsk9-l1-q5",
        "信达雅",
        "xìn dá yǎ",
        "Tín - Đạt - Nhã",
        "Đặt 2 câu có chứa 信达雅 thể hiện hiểu biết về tiêu chuẩn dịch thuật cao cấp."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 会议口译与陪同翻译 (Phiên dịch hội nghị & Tháp tùng lãnh đạo)
  // ==========================================
  {
    id: "hsk9-l2-interpreting",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Phiên dịch hội nghị & Tháp tùng lãnh đạo",
    titleZh: "第二课：会议口译与陪同翻译",
    titlePinyin: "Dì èr kè: Huìyì kǒuyì yǔ péitóng fānyì",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 55,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Tiếu Tiếu",
    youtubeUrl: "https://www.youtube.com/watch?v=3FirAz64xAU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 2 会议口译与陪同翻译",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Phân biệt 交替传译 (phiên dịch nối tiếp / dịch đuổi) và 同声传译 (phiên dịch song song / dịch cabin).",
      "Trong phiên dịch hội nghị, tốc ký (速记) dựa trên trục logic (nguyên nhân, kết quả, tương phản, số liệu) quan trọng hơn ghi chép từng từ.",
      "Nguyên tắc chuyển đổi đại từ ngôi thứ nhất (第一人称转述): phiên dịch viên luôn dịch theo ngôi 'tôi / chúng tôi' của diễn giả, trừ khi cần làm rõ.",
    ],
    newWords: [
      {
        hanzi: "同声传译",
        pinyin: "tóngshēng chuányì",
        partOfSpeech: "Danh từ",
        meaningVi: "phiên dịch song song, dịch cabin",
        radical: "口 (Khẩu)",
        strokeCount: 26,
      },
      {
        hanzi: "交替传译",
        pinyin: "jiāotì chuányì",
        partOfSpeech: "Danh từ",
        meaningVi: "phiên dịch nối tiếp, dịch đuổi",
        radical: "亠 (Đầu)",
        strokeCount: 31,
      },
      {
        hanzi: "速记",
        pinyin: "sùjì",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "tốc ký, ghi chép nhanh",
        radical: "辶 (Sước)",
        strokeCount: 15,
      },
      {
        hanzi: "临场应变",
        pinyin: "línchǎng yìngbiàn",
        partOfSpeech: "Thành ngữ / Cụm ĐT",
        meaningVi: "ứng biến tại chỗ, xử lý tình huống tức thời",
        radical: "丨 (Cổn)",
        strokeCount: 30,
      },
      {
        hanzi: "主旨",
        pinyin: "zhǔzhǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "ý chính, tôn chỉ, tinh thần cốt lõi",
        radical: "丶 (Chủ)",
        strokeCount: 11,
      },
      {
        hanzi: "致辞",
        pinyin: "zhìcí",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "phát biểu (khai mạc/chào mừng), bài diễn văn",
        radical: "至 (Chí)",
        strokeCount: 23,
      },
      {
        hanzi: "礼宾",
        pinyin: "lǐbīn",
        partOfSpeech: "Danh từ",
        meaningVi: "lễ tân ngoại giao, nghi thức đón tiếp",
        radical: "礻 (Thị)",
        strokeCount: 15,
      },
      {
        hanzi: "衔接",
        pinyin: "xiánjiē",
        partOfSpeech: "Động từ",
        meaningVi: "kết nối, tiếp nối mạch lạc",
        radical: "行 (Hành)",
        strokeCount: 22,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chuẩn bị trước phiên dịch hội nghị thượng đỉnh",
        lines: [
          {
            speaker: "Trưởng nhóm phiên dịch",
            zh: "明天上午的部长级论坛采用同声传译，请大家务必提前通读各位嘉宾的致辞稿，梳理核心术语与数据。",
            pinyin: "Míngtiān shàngwǔ de bùzhǎngjí lùntán cǎiyòng tóngshēng chuányì, qǐng dàjiā wùbì tíqián tōngdú gèwèi jiābīn de zhìcígǎo, shūlǐ héxīn shùyǔ yǔ shùjù.",
            vi: "Diễn đàn cấp bộ trưởng sáng mai áp dụng phiên dịch cabin, đề nghị mọi người nhất định phải đọc kỹ bài phát biểu của các vị khách mời trước, hệ thống lại thuật ngữ cốt lõi và số liệu.",
          },
          {
            speaker: "Phiên dịch viên",
            zh: "收到。万一发言人脱稿即兴发挥，我们也会做好速记，紧扣主旨，确保两地会场衔接顺畅。",
            pinyin: "Shōudào. Wànyī fāyánrén tuōgǎo jíxìng fāhuī, wǒmen yě huì zuòhǎo sùjì, jǐnkòu zhǔzhǐ, quèbǎo liǎngdì huìchǎng xiánjiē shùnchàng.",
            vi: "Đã rõ. Trong trường hợp diễn giả nói ngoài kịch bản và ứng khẩu, chúng tôi cũng sẽ tốc ký tốt, bám sát ý chính để đảm bảo hai đầu cầu hội nghị kết nối trôi chảy.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Kỹ năng ứng biến khi tháp tùng lãnh đạo",
        lines: [
          {
            speaker: "Trợ lý lễ tân",
            zh: "陪同领导会见外宾时，除了语言准确，礼宾站位和临场应变能力同样关键。",
            pinyin: "Péitóng lǐngdǎo huìjiàn wàibīn shí, chúle yǔyán zhǔnquè, lǐbīn zhànwèi hé línchǎng yìngbiàn nénglì tóngyàng guānjiàn.",
            vi: "Khi tháp tùng lãnh đạo tiếp đón khách quốc tế, ngoài ngôn ngữ chính xác, vị trí đứng theo lễ tân và khả năng ứng biến tại chỗ cũng quan trọng không kém.",
          },
          {
            speaker: "Phiên dịch tháp tùng",
            zh: "确实如此。在交替传译过程中，译员既要保持沉稳得体的仪态，也要敏锐捕捉言外之意。",
            pinyin: "Quèshí rúcǐ. Zài jiāotì chuányì guòchéng zhōng, yìyuán jì yào bǎochí chénwěn détǐ de yítài, yě yào mǐnruì bǔzhuō yánwài-zhīyì.",
            vi: "Quả đúng như vậy. Trong quá trình dịch nối tiếp, phiên dịch viên vừa phải giữ phong thái điềm tĩnh chuẩn mực, vừa phải nhạy bén nắm bắt hàm ý ẩn sau lời nói.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc yêu cầu bắt buộc trang trọng: 务必 + Động từ",
        formula: "请 + Đối tượng + 务必 + Động từ / Cụm động từ",
        explanationVi:
          "务必 (wùbì — nhất thiết phải, bằng mọi giá phải) mạnh và trang trọng hơn 一定, thường dùng trong chỉ thị công vụ, thông báo hội nghị và điều phối phiên dịch.",
        examples: [
          {
            zh: "请各位译员务必在开会前三十分钟到场调试设备。",
            pinyin: "Qǐng gèwèi yìyuán wùbì zài kāihuì qián sānshí fēnzhōng dàochǎng tiáoshì shèbèi.",
            vi: "Đề nghị các phiên dịch viên nhất thiết có mặt trước giờ họp 30 phút để kiểm tra thiết bị.",
          },
          {
            zh: "涉及关键数据时，务必核对无误后再译出。",
            pinyin: "Shèjí guānjiàn shùjù shí, wùbì héduì wúwù hòu zài yìchū.",
            vi: "Khi liên quan đến số liệu then chốt, nhất định phải đối chiếu không sai sót rồi mới dịch ra.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc giả định tình huống bất ngờ: 万一……，(也/就)……",
        formula: "万一 + Tình huống ngoài dự kiến，Chủ ngữ + 也会 / 就要 + Biện pháp xử lý",
        explanationVi:
          "万一 (wànyī — lỡ như, trong trường hợp bất ngờ) dùng để xây dựng phương án dự phòng trong điều phối hội nghị và phiên dịch.",
        examples: [
          {
            zh: "万一现场音响出现故障，请立即切换为交替传译。",
            pinyin: "Wànyī xiànchǎng yīnxiǎng chūxiàn gùzhàng, qǐng lìjí qiēhuàn wéi jiāotì chuányì.",
            vi: "Lỡ như âm thanh tại hội trường gặp sự cố, xin lập tức chuyển sang phiên dịch nối tiếp.",
          },
          {
            zh: "万一没听清某个专有名词，应礼貌请发言人复述。",
            pinyin: "Wànyī méi tīngqīng mǒu gè zhuānyǒu míngcí, yīng lǐmào qǐng fāyánrén fùshù.",
            vi: "Trong trường hợp chưa nghe rõ một danh từ riêng nào đó, nên lịch sự đề nghị diễn giả nhắc lại.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk9-l2-q1",
        "各位来宾，女士们、先生们，欢迎出席本次越中经贸合作高峰论坛。",
        "Gèwèi láibīn, nǚshìmen, xiānshengmen, huānyíng chūxí běncì Yuè-Zhōng jīngmào hézuò gāofēng lùntán.",
        "Thu âm câu mở đầu phiên dịch lễ khai mạc với giọng trang trọng, ngắt nhịp rõ ràng:",
        ["Ngắt nhịp sau 各位来宾 và 先生们", "Âm vực trang trọng, đều đặn"],
        "Lời chào khai mạc hội nghị cần phát âm tròn vành rõ chữ, giữ nhịp vừa phải để tạo uy tín."
      ),
      speakingShadowing(
        "hsk9-l2-q2",
        "同声传译不仅考验语言功底，更考验译员的心理素质与临场应变能力。",
        "Tóngshēng chuányì bùjǐn kǎoyàn yǔyán gōngdǐ, gèng kǎoyàn yìyuán de xīnlǐ sùzhì yǔ línchǎng yìngbiàn nénglì.",
        "Thu âm câu nhận định về yêu cầu của phiên dịch cabin:",
        ["Nhấn mạnh 不仅……更……", "Thanh điệu cụm 临场应变"],
        "Cần nhấn trọng âm vào 不仅 và 更 để làm nổi bật tầng ý tăng tiến."
      ),
      speakingShadowing(
        "hsk9-l2-q3",
        "在交替传译中，科学有效的速记能够帮助译员准确还原发言人的核心主旨。",
        "Zài jiāotì chuányì zhōng, kēxué yǒuxiào de sùjì nénggòu bāngzhù yìyuán zhǔnquè huányuán fāyánrén de héxīn zhǔzhǐ.",
        "Thu âm câu giải thích vai trò của tốc ký trong dịch nối tiếp:",
        ["Phân biệt z/c/s và zh/ch/sh trong 速记, 准确, 主旨", "Nhịp đọc mạch lạc"],
        "Chú ý phát âm chuẩn âm đầu lưỡi thẳng (sùjì) và đầu lưỡi cong (zhǔnquè, zhǔzhǐ)."
      ),
      speakingShadowing(
        "hsk9-l2-q4",
        "请各位译员务必提前熟悉致辞稿，确保明天论坛各环节衔接顺畅。",
        "Qǐng gèwèi yìyuán wùbì tíqián shúxī zhìcígǎo, quèbǎo míngtiān lùntán gè huánjié xiánjiē shùnchàng.",
        "Thu âm câu chỉ thị điều phối trước hội nghị:",
        ["Nhấn mạnh 务必 và 确保", "Thanh 2 liền nhau ở 提前, 环节, 衔接"],
        "Giữ hơi ổn định khi đọc các âm tiết mang thanh 2 liên tiếp."
      ),
      speakingShadowing(
        "hsk9-l2-q5",
        "陪同领导出访时，译员须严守外事纪律，举止得体，不卑不亢。",
        "Péitóng lǐngdǎo chūfǎng shí, yìyuán xū yánshǒu wàishì jìlǜ, jǔzhǐ détǐ, bùbēi-bùkàng.",
        "Thu âm câu quy tắc đạo đức nghề nghiệp của phiên dịch tháp tùng:",
        ["Nhấn mạnh thành ngữ 不卑不亢 (bùbēi-bùkàng)", "Biến điệu của 不 trước thanh 4"],
        "Trong 不卑不亢, chữ 不 thứ hai đứng trước 亢 (thanh 4) nên biến điệu thành thanh 2 (búkàng)."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 文言典故与政论文体 (Văn ngôn, Thành ngữ điển cố & Văn phong chính luận)
  // ==========================================
  {
    id: "hsk9-l3-classical",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Văn ngôn, Thành ngữ điển cố & Văn phong chính luận",
    titleZh: "第三课：文言典故与政论文体",
    titlePinyin: "Dì sān kè: Wényán diǎngù yǔ zhènglùn wéntǐ",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 60,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Trung Tâm Ngoại Ngữ Hà Nội",
    youtubeUrl: "https://www.youtube.com/watch?v=450olKfS6yQ",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 3 文言典故与政论文体",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Văn phong chính luận (政论文体) thường kết hợp chặt chẽ giữa lập luận logic hiện đại và các điển cố/câu trích văn ngôn (文言引语) để tăng sức thuyết phục.",
      "Hư từ văn ngôn thường gặp trong báo chí và xã luận: 之 (của/ấy), 其 (của nó/đó), 乃 (chính là), 然 (nhưng), 故 (cho nên), 亦 (cũng).",
      "Thành ngữ 4 chữ (四字格) giúp câu văn chính luận cô đọng, giàu nhịp điệu và nâng tầm sắc thái trang trọng.",
    ],
    newWords: [
      {
        hanzi: "典故",
        pinyin: "diǎngù",
        partOfSpeech: "Danh từ",
        meaningVi: "điển cố, điển tích lịch sử - văn học",
        radical: "八 (Bát)",
        strokeCount: 17,
      },
      {
        hanzi: "政论",
        pinyin: "zhènglùn",
        partOfSpeech: "Danh từ",
        meaningVi: "chính luận, bình luận chính trị - xã hội",
        radical: "攵 (Phộc)",
        strokeCount: 15,
      },
      {
        hanzi: "居安思危",
        pinyin: "jū ān sī wēi",
        partOfSpeech: "Thành ngữ",
        meaningVi: "ở yên nghĩ đến lúc nguy (luôn cảnh giác khi thuận lợi)",
        radical: "尸 (Thi)",
        strokeCount: 29,
      },
      {
        hanzi: "革故鼎新",
        pinyin: "gé gù dǐng xīn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "bỏ cũ lập mới, cải cách đổi mới toàn diện",
        radical: "革 (Cách)",
        strokeCount: 43,
      },
      {
        hanzi: "鉴古知今",
        pinyin: "jiàn gǔ zhī jīn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "soi gương quá khứ để hiểu hiện tại",
        radical: "金 (Kim)",
        strokeCount: 30,
      },
      {
        hanzi: "立意",
        pinyin: "lìyì",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "chủ ý, tư tưởng chủ đạo của bài viết",
        radical: "立 (Lập)",
        strokeCount: 18,
      },
      {
        hanzi: "鞭辟入里",
        pinyin: "biānpì-rùlǐ",
        partOfSpeech: "Thành ngữ",
        meaningVi: "phân tích sắc bén, thấu đáo tận gốc rễ",
        radical: "革 (Cách)",
        strokeCount: 40,
      },
      {
        hanzi: "循序渐进",
        pinyin: "xúnxù-jiànjìn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "tuần tự từng bước, tiến lên có trật tự",
        radical: "彳 (Xích)",
        strokeCount: 37,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Phân tích cách dùng điển cố trong xã luận",
        lines: [
          {
            speaker: "Nhà nghiên cứu A",
            zh: "这篇社论开篇即引“居安思危，思则有备，有备无患”，既点明了立意，又赋予文章厚重的历史纵深感。",
            pinyin: "Zhè piān shèlùn kāipiān jí yǐn 'jū ān sī wēi, sī zé yǒubèi, yǒubèi wúhuàn', jì diǎnmíng le lìyì, yòu fùyǔ wénzhāng hòuzhòng de lìshǐ zòngshēngǎn.",
            vi: "Bài xã luận này vừa mở đầu đã dẫn câu 'Ở yên nghĩ lúc nguy, nghĩ thì có phòng bị, có phòng bị thì không lo họa', vừa nêu bật chủ ý, vừa tạo chiều sâu lịch sử cho bài viết.",
          },
          {
            speaker: "Nhà nghiên cứu B",
            zh: "的确，文中对改革阻力的剖析更是鞭辟入里，主张在革故鼎新的同时坚持循序渐进。",
            pinyin: "Díquè, wénzhōng duì gǎigé zǔlì de pōuxī gèng shì biānpì-rùlǐ, zhǔzhāng zài gégù-dǐngxīn de tóngshí jiānchí xúnxù-jiànjìn.",
            vi: "Quả thật, phần phân tích các lực cản cải cách trong bài lại càng sắc bén thấu đáo, chủ trương vừa đổi mới toàn diện vừa kiên trì tiến bước tuần tự.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Giá trị của văn ngôn trong đọc hiểu HSK 9",
        lines: [
          {
            speaker: "Giáo sư",
            zh: "阅读高阶政论文时，不可忽视文言虚词与典故的修辞作用，所谓“鉴古知今”，正体现于此。",
            pinyin: "Yuèdú gāojiē zhènglùnwén shí, bùkě hūshì wényán xūcí yǔ diǎngù de xiūcí zuòyòng, suǒwèi 'jiàn gǔ zhī jīn', zhèng tǐxiàn yú cǐ.",
            vi: "Khi đọc các bài chính luận bậc cao, không thể xem nhẹ tác dụng tu từ của hư từ văn ngôn và điển cố; cái gọi là 'soi cổ biết kim' chính là thể hiện ở đây.",
          },
          {
            speaker: "Nghiên cứu sinh",
            zh: "明白了，只有准确把握这些凝练的表达，才能真正读懂作者字里行间的立场与深意。",
            pinyin: "Míngbai le, zhǐyǒu zhǔnquè bǎwò zhèxiē níngliàn de biǎodá, cáinéng zhēnzhèng dúdǒng zuòzhě zìlǐ-hángjiān de lìchǎng yǔ shēnyì.",
            vi: "Em hiểu rồi, chỉ khi nắm chắc những cách diễn đạt cô đọng này mới có thể thực sự hiểu thấu lập trường và hàm ý sâu xa của tác giả giữa các dòng chữ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc văn ngôn bán hiện đại: 乃 (chính là) và 亦 (cũng)",
        formula: "A 乃 B (A chính là B) / A 亦 B (A cũng B)",
        explanationVi:
          "Trong văn chính luận và xã luận cao cấp, 乃 thay cho 就是/乃是 và 亦 thay cho 也 để tăng tính cô đọng, trang trọng và nhịp điệu cổ điển.",
        examples: [
          {
            zh: "民心向背，乃国家兴衰之根本。",
            pinyin: "Mínxīn xiàngbèi, nǎi guójiā xīngshuāi zhī gēnběn.",
            vi: "Lòng dân hướng về hay quay lưng, chính là gốc rễ hưng suy của quốc gia.",
          },
          {
            zh: "机遇在前，挑战亦随之而来。",
            pinyin: "Jīyù zài qián, tiǎozhàn yì suízhī érlái.",
            vi: "Cơ hội ở phía trước, thách thức cũng theo đó mà đến.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc dẫn giải khái niệm: 所谓“……”，正体现于此 / 即指……",
        formula: "所谓“Điển cố / Khái niệm”，正体现于此 / 即指 + Giải thích",
        explanationVi:
          "Dùng để trích dẫn một điển cố hoặc mệnh đề kinh điển rồi quy chiếu trực tiếp về luận điểm đang bàn luận.",
        examples: [
          {
            zh: "所谓“居安思危”，即指在顺境中仍须保持风险意识。",
            pinyin: "Suǒwèi 'jū ān sī wēi', jí zhǐ zài shùnjìng zhōng réng xū bǎochí fēngxiǎn yìshí.",
            vi: "Cái gọi là 'cư an tư nguy' tức là chỉ việc vẫn phải giữ ý thức phòng ngừa rủi ro khi đang ở hoàn cảnh thuận lợi.",
          },
          {
            zh: "所谓“革故鼎新”，正体现于制度的持续完善之中。",
            pinyin: "Suǒwèi 'gé gù dǐng xīn', zhèng tǐxiàn yú zhìdù de chíxù wánshàn zhīzhōng.",
            vi: "Cái gọi là 'cách cố đỉnh tân' chính là thể hiện trong quá trình không ngừng hoàn thiện thể chế.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk9-l3-q1",
        "古人云：“居安思危，思则有备，有备无患。”在全球经济波动加剧的背景下，任何企业若只沉溺于眼前的增长红利而忽视风险预警，终将陷入被动。",
        "Gǔrén yún: 'Jū ān sī wēi, sī zé yǒubèi, yǒubèi wúhuàn.' Zài quánqiú jīngjì bōdòng jiājù de bèijǐng xià, rènhé qǐyè ruò zhǐ chénnì yú yǎnqián de zēngzhǎng hónglì ér hūshì fēngxiǎn yùjǐng, zhōngjiāng xiànrù bèidòng.",
        "Người xưa nói: 'Ở yên nghĩ lúc nguy, nghĩ thì có phòng bị, có phòng bị thì không lo họa.' Trong bối cảnh kinh tế toàn cầu biến động mạnh, bất kỳ doanh nghiệp nào chỉ đắm chìm trong lợi tức tăng trưởng trước mắt mà xem nhẹ cảnh báo rủi ro thì cuối cùng sẽ rơi vào thế bị động.",
        "Đoạn văn trên nhấn mạnh thông điệp cốt lõi nào?",
        [
          "Doanh nghiệp cần chủ động phòng ngừa rủi ro ngay cả khi đang tăng trưởng thuận lợi",
          "Kinh tế toàn cầu không còn cơ hội tăng trưởng",
          "Doanh nghiệp nên ngừng mở rộng để tránh mọi rủi ro",
          "Chỉ cần dựa vào kinh nghiệm cổ nhân là đủ giải quyết khủng hoảng",
        ],
        "Doanh nghiệp cần chủ động phòng ngừa rủi ro ngay cả khi đang tăng trưởng thuận lợi",
        "Điển cố 居安思危 được dùng để nhắc nhở doanh nghiệp phải cảnh giác và xây dựng cơ chế cảnh báo rủi ro khi đang thuận lợi."
      ),
      readingComp(
        "hsk9-l3-q2",
        "制度改革贵在革故鼎新，然亦不可操之过急。唯有立足国情、循序渐进，方能行稳致远。",
        "Zhìdù gǎigé guì zài gégù-dǐngxīn, rán yì bùkě cāozhī-guòjí. Wéiyǒu lìzú guóqíng, xúnxù-jiànjìn, fāngnéng xíngwěn-zhìyuǎn.",
        "Cải cách thể chế quý ở chỗ bỏ cũ lập mới, nhưng cũng không thể nóng vội. Chỉ có đứng vững trên thực tiễn quốc gia và tiến hành tuần tự mới có thể đi vững và đi xa.",
        "Chữ 然 (rán) trong câu trên mang ý nghĩa gì?",
        ["Nhưng, tuy nhiên", "Cho nên", "Đương nhiên", "Nếu như"],
        "Nhưng, tuy nhiên",
        "Trong văn ngôn và chính luận, 然 là liên từ chuyển ngoặt tương đương với 但是/然而 (nhưng, tuy nhiên)."
      ),
      readingComp(
        "hsk9-l3-q3",
        "该评论员文章立意高远，对社会转型期的深层矛盾剖析得鞭辟入里，引发了学界与公众的广泛共鸣。",
        "Gāi pínglùnyuán wénzhāng lìyì gāoyuǎn, duì shèhuì zhuǎnxíngqī de shēncéng máodùn pōuxī de biānpì-rùlǐ, yǐnfā le xuéjiè yǔ gōngzhòng de guǎngfàn gòngmíng.",
        "Bài bình luận này có tư tưởng chủ đạo sâu rộng, phân tích các mâu thuẫn tầng sâu trong thời kỳ chuyển đổi xã hội vô cùng sắc bén thấu đáo, tạo nên sự đồng cảm rộng rãi trong giới học thuật và công chúng.",
        "Thành ngữ 鞭辟入里 trong đoạn văn dùng để khen ngợi điều gì?",
        [
          "Sự phân tích sâu sắc, trúng trọng tâm và thấu đáo",
          "Văn phong dài dòng nhưng giàu cảm xúc",
          "Cách trình bày đơn giản dành cho thiếu nhi",
          "Tốc độ xuất bản bài viết rất nhanh",
        ],
        "Sự phân tích sâu sắc, trúng trọng tâm và thấu đáo",
        "鞭辟入里 (biānpì-rùlǐ) chuyên dùng để ca ngợi lập luận sắc bén, phân tích thấu đáo đến tận bản chất vấn đề."
      ),
      readingComp(
        "hsk9-l3-q4",
        "历史是最好的教科书。鉴古知今，并非机械照搬过往经验，而是从中汲取应对当代变局的智慧。",
        "Lìshǐ shì zuìhǎo de jiàokēshū. Jiàn gǔ zhī jīn, bìngfēi jīxiè zhàobān guòwǎng jīngyàn, érshì cóngzhōng jíqǔ yìngduì dāngdài biànjú de zhìhuì.",
        "Lịch sử là cuốn sách giáo khoa tốt nhất. Soi cổ biết kim không phải là sao chép máy móc kinh nghiệm quá khứ, mà là rút ra từ đó trí tuệ để ứng phó với biến cục đương đại.",
        "Theo tác giả, thái độ đúng đắn với '鉴古知今' là gì?",
        [
          "Rút ra trí tuệ từ lịch sử để ứng phó biến động hiện tại",
          "Sao chép nguyên xi các chính sách trong quá khứ",
          "Chỉ nghiên cứu lịch sử cổ đại, bỏ qua hiện tại",
          "Xem lịch sử chỉ là tài liệu giải trí",
        ],
        "Rút ra trí tuệ từ lịch sử để ứng phó biến động hiện tại",
        "Cấu trúc 并非……，而是…… bác bỏ việc sao chép máy móc và khẳng định việc rút ra trí tuệ ứng phó biến cục."
      ),
      readingComp(
        "hsk9-l3-q5",
        "高阶政论文常借文言典故以言志。恰当的典故犹如画龙点睛，若堆砌滥用，则反成累赘。",
        "Gāojiē zhènglùnwén cháng jiè wényán diǎngù yǐ yánzhì. Qiàdàng de diǎngù yóurú huàlóng-diǎnjīng, ruò duīqì lànyòng, zé fǎn chéng léizhui.",
        "Bài chính luận bậc cao thường mượn điển cố văn ngôn để bày tỏ chí hướng. Điển cố dùng đúng chỗ ví như vẽ rồng điểm mắt, còn nếu chất đống lạm dụng thì ngược lại trở thành rườm rà.",
        "Tác giả khuyên điều gì về việc sử dụng điển cố trong văn chính luận?",
        [
          "Dùng đúng chỗ, tiết chế, tránh lạm dụng gây rườm rà",
          "Càng dùng nhiều điển cố trong một câu càng tốt",
          "Tuyệt đối không nên dùng điển cố trong bài viết hiện đại",
          "Chỉ dùng điển cố ở phần kết bài",
        ],
        "Dùng đúng chỗ, tiết chế, tránh lạm dụng gây rườm rà",
        "Tác giả đối lập 恰当的典故 (hiệu quả như 画龙点睛) với 堆砌滥用 (trở thành 累赘 — gánh nặng, rườm rà)."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 高层谈判与危机公关 (Đàm phán cấp cao & Xử lý khủng hoảng truyền thông)
  // ==========================================
  {
    id: "hsk9-l4-pr",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    lessonNumber: 4,
    title: "Bài 4: Đàm phán cấp cao & Xử lý khủng hoảng truyền thông",
    titleZh: "第四课：高层谈判与危机公关",
    titlePinyin: "Dì sì kè: Gāocéng tánpàn yǔ wēijī gōngguān",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 60,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Hương Quỳnh Laoshi",
    youtubeUrl: "https://www.youtube.com/watch?v=3f2fb6bSoJs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 4 高层谈判与危机公关",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Trong đàm phán cấp cao, ngôn ngữ ngoại giao (外交辞令) thường dùng lối nói uyển chuyển để giữ thể diện nhưng vẫn kiên định lằn ranh đỏ (底线).",
      "Nguyên tắc vàng xử lý khủng hoảng truyền thông: phản hồi nhanh (快速响应), minh bạch thông tin (信息透明), nhận trách nhiệm kịp thời và đưa giải pháp cụ thể.",
      "Chú ý các cấu trúc điều kiện/nhượng bộ trong đàm phán: 在……前提下 (trên tiền đề...), 兼顾双方关切 (tính đến quan ngại của cả hai bên).",
    ],
    newWords: [
      {
        hanzi: "底线",
        pinyin: "dǐxiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "lằn ranh đỏ, giới hạn cuối cùng không thể nhượng bộ",
        radical: "广 (Nghiễm)",
        strokeCount: 16,
      },
      {
        hanzi: "妥协",
        pinyin: "tuǒxié",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "thỏa hiệp, nhượng bộ",
        radical: "女 (Nữ)",
        strokeCount: 13,
      },
      {
        hanzi: "关切",
        pinyin: "guānqiè",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "mối quan ngại, sự quan tâm sâu sắc",
        radical: "丷 (Bát ngửa)",
        strokeCount: 10,
      },
      {
        hanzi: "舆情",
        pinyin: "yúqíng",
        partOfSpeech: "Danh từ",
        meaningVi: "dư luận xã hội, tình hình truyền thông",
        radical: "车 (Xa)",
        strokeCount: 20,
      },
      {
        hanzi: "澄清",
        pinyin: "chéngqīng",
        partOfSpeech: "Động từ",
        meaningVi: "đính chính, làm sáng tỏ sự thật",
        radical: "氵 (Chấm thủy)",
        strokeCount: 26,
      },
      {
        hanzi: "僵局",
        pinyin: "jiāngjú",
        partOfSpeech: "Danh từ",
        meaningVi: "thế bế tắc, cục diện đình trệ",
        radical: "亻 (Nhân đứng)",
        strokeCount: 22,
      },
      {
        hanzi: "诚意",
        pinyin: "chéngyì",
        partOfSpeech: "Danh từ",
        meaningVi: "thành ý, thiện chí chân thành",
        radical: "讠 (Ngôn)",
        strokeCount: 21,
      },
      {
        hanzi: "双赢",
        pinyin: "shuāngyíng",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "đôi bên cùng thắng, cùng có lợi",
        radical: "又 (Hựu)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Phá vỡ thế bế tắc trong đàm phán thương mại cấp cao",
        lines: [
          {
            speaker: "Trưởng đoàn A",
            zh: "为了打破目前的谈判僵局，我方愿意在关税过渡期上做出适度让步，但这并不意味着我们在核心技术标准上妥协。",
            pinyin: "Wèile dǎpò mùqián de tánpàn jiāngjú, wǒfāng yuànyì zài guānshuì guòdùqī shàng zuòchū shìdù ràngbù, dàn zhè bìng bù yìwèizhe wǒmen zài héxīn jìshù biāozhǔn shàng tuǒxié.",
            vi: "Để phá vỡ thế bế tắc đàm phán hiện nay, phía chúng tôi sẵn sàng nhượng bộ ở mức độ phù hợp về giai đoạn chuyển tiếp thuế quan, nhưng điều đó không có nghĩa là chúng tôi thỏa hiệp về tiêu chuẩn công nghệ cốt lõi.",
          },
          {
            speaker: "Trưởng đoàn B",
            zh: "我们赞赏贵方展现出的诚意。只要双方兼顾彼此核心关切，就一定能找到互利双赢的方案。",
            pinyin: "Wǒmen zànshǎng guìfāng zhǎnxiàn chū de chéngyì. Zhǐyào shuāngfāng jiāngù bǐcǐ héxīn guānqiè, jiù yīdìng néng zhǎodào hùlì shuāngyíng de fāng'àn.",
            vi: "Chúng tôi đánh giá cao thiện chí mà quý vị thể hiện. Chỉ cần hai bên tính đến mối quan ngại cốt lõi của nhau thì nhất định sẽ tìm được phương án đôi bên cùng có lợi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Họp khẩn xử lý khủng hoảng truyền thông",
        lines: [
          {
            speaker: "Giám đốc PR",
            zh: "目前网络舆情持续发酵，若不及时澄清事实，品牌声誉将遭受难以挽回的损失。",
            pinyin: "Mùqián wǎngluò yúqíng chíxù fājiào, ruò bù jíshí chéngqīng shìshí, pǐnpái shēngyù jiāng zāoshòu nányǐ wǎnhuí de sǔnshī.",
            vi: "Hiện dư luận mạng đang tiếp tục lan rộng, nếu không kịp thời đính chính sự thật thì uy tín thương hiệu sẽ chịu tổn thất khó cứu vãn.",
          },
          {
            speaker: "Tổng giám đốc",
            zh: "立即发布官方声明，公布第三方检测报告，同时开通客户专线，以公开透明的态度直面质疑。",
            pinyin: "Lìjí fābù guānfāng shēngmíng, gōngbù dìsānfāng jiǎncè bàogào, tóngshí kāitōng kèhù zhuānxiàn, yǐ gōngkāi tòumíng de tàidù zhímiàn zhìyí.",
            vi: "Lập tức phát đi thông cáo chính thức, công bố báo cáo kiểm định của bên thứ ba, đồng thời mở đường dây nóng cho khách hàng, đối diện thẳng thắn với mọi nghi vấn bằng thái độ công khai minh bạch.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc khẳng định ranh giới trong đàm phán: 这并不意味着……",
        formula: "Mệnh đề nhượng bộ，但这并不意味着 + Lằn ranh đỏ / Điều không thay đổi",
        explanationVi:
          "Cấu trúc này giúp người nói thể hiện thiện chí linh hoạt nhưng đồng thời vạch rõ giới hạn nguyên tắc, tránh bị đối phương hiểu lầm là yếu thế.",
        examples: [
          {
            zh: "我们同意推迟签约，但这并不意味着放弃原有条款。",
            pinyin: "Wǒmen tóngyì tuīchí qiānyuē, dàn zhè bìng bù yìwèizhe fàngqì yuányǒu tiáokuǎn.",
            vi: "Chúng tôi đồng ý lùi thời gian ký kết, nhưng điều này không có nghĩa là từ bỏ các điều khoản ban đầu.",
          },
          {
            zh: "保持克制并不意味着没有底线。",
            pinyin: "Bǎochí kèzhì bìng bù yìwèizhe méiyǒu dǐxiàn.",
            vi: "Giữ thái độ kiềm chế không có nghĩa là không có lằn ranh đỏ.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc giả định cảnh báo hậu quả: 若不……，将遭受 / 必将……",
        formula: "若不 + Hành động kịp thời，Chủ ngữ + 将遭受 / 必将 + Hậu quả nghiêm trọng",
        explanationVi:
          "Dùng trong họp khẩn, báo cáo rủi ro và khủng hoảng truyền thông để nhấn mạnh tính cấp bách của quyết định.",
        examples: [
          {
            zh: "若不迅速回应公众关切，负面舆情必将进一步扩散。",
            pinyin: "Ruò bù xùnsù huíyìng gōngzhòng guānqiè, fùmiàn yúqíng bìjiāng jìnyībù kuòsàn.",
            vi: "Nếu không nhanh chóng phản hồi mối quan ngại của công chúng, dư luận tiêu cực chắc chắn sẽ lan rộng hơn nữa.",
          },
          {
            zh: "若不坚持质量底线，企业将遭受严重信任危机。",
            pinyin: "Ruò bù jiānchí zhìliàng dǐxiàn, qǐyè jiāng zāoshòu yánzhòng xìnrèn wēijī.",
            vi: "Nếu không giữ vững giới hạn chất lượng, doanh nghiệp sẽ đối mặt với khủng hoảng niềm tin nghiêm trọng.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk9-l4-q1",
        "我方愿意在交付周期上做出调整，但这并不意味着我们在产品安全底线上有所妥协。",
        "Wǒfāng yuànyì zài jiāofù zhōuqī shàng zuòchū tiáozhěng, dàn zhè bìng bù yìwèizhe wǒmen zài chǎnpǐn ānquán dǐxiàn shàng yǒusuǒ tuǒxié.",
        "Nghe và chọn ý đúng về lập trường của người nói:",
        [
          "Có thể linh hoạt thời gian giao hàng nhưng kiên quyết không nhượng bộ về an toàn sản phẩm",
          "Từ chối mọi điều chỉnh trong hợp đồng",
          "Sẵn sàng hạ tiêu chuẩn an toàn để giao hàng nhanh hơn",
          "Hủy bỏ hoàn toàn cuộc đàm phán",
        ],
        "Có thể linh hoạt thời gian giao hàng nhưng kiên quyết không nhượng bộ về an toàn sản phẩm",
        "Người nói dùng 这并不意味着…… để tách bạch giữa phần có thể linh hoạt (交付周期) và lằn ranh đỏ (安全底线)."
      ),
      listeningFill(
        "hsk9-l4-q2",
        "面对突发负面舆情，企业应在黄金四小时内发布声明澄清事实。",
        "面对突发负面舆情，企业应在黄金四小时内发布声明____事实。",
        "Miànduì tūfā fùmiàn yúqíng, qǐyè yīng zài huángjīn sì xiǎoshí nèi fābù shēngmíng chéngqīng shìshí.",
        "Nghe và điền động từ (2 chữ Hán) còn thiếu vào chỗ trống:",
        "澄清",
        "澄清事实 (chéngqīng shìshí) có nghĩa là đính chính, làm sáng tỏ sự thật."
      ),
      listeningDialogue(
        "hsk9-l4-q3",
        "男：经过三轮磋商，双方在核心条款上依然僵持不下。女：不如引入第三方评估机制，或许能打破僵局。",
        "Nán: Jīngguò sānlún cuōshāng, shuāngfāng zài héxīn tiáokuǎn shàng yīrán jiāngchí-bùxià. Nǚ: Bùrú yǐnrù dìsānfāng pínggū jīzhì, huòxǔ néng dǎpò jiāngjú.",
        "Nghe đoạn đối thoại và cho biết người nữ đề xuất giải pháp gì?",
        [
          "Đưa cơ chế đánh giá của bên thứ ba vào để phá vỡ thế bế tắc",
          "Tạm dừng đàm phán vô thời hạn",
          "Nhượng bộ toàn bộ điều khoản cốt lõi",
          "Thay đổi toàn bộ trưởng đoàn đàm phán",
        ],
        "Đưa cơ chế đánh giá của bên thứ ba vào để phá vỡ thế bế tắc",
        "Người nữ nói: 引入第三方评估机制，或许能打破僵局."
      ),
      listeningMcq(
        "hsk9-l4-q4",
        "只有充分尊重并兼顾彼此的核心关切，这场高层会谈才能取得互利双赢的成果。",
        "Zhǐyǒu chōngfèn zūnzhòng bìng jiāngù bǐcǐ de héxīn guānqiè, zhè chǎng gāocéng huìtán cáinéng qǔdé hùlì shuāngyíng de chéngguǒ.",
        "Nghe và xác định điều kiện để cuộc hội đàm cấp cao đạt kết quả đôi bên cùng thắng:",
        [
          "Tôn trọng và tính đến đầy đủ mối quan ngại cốt lõi của cả hai bên",
          "Một bên phải chấp nhận mọi yêu cầu của bên kia",
          "Giữ bí mật toàn bộ nội dung với truyền thông",
          "Kết thúc hội đàm trong vòng một giờ",
        ],
        "Tôn trọng và tính đến đầy đủ mối quan ngại cốt lõi của cả hai bên",
        "Cấu trúc 只有……才能…… nêu rõ điều kiện cần: 充分尊重并兼顾彼此的核心关切."
      ),
      listeningFill(
        "hsk9-l4-q5",
        "我们高度赞赏贵方在本次谈判中所展现出的合作诚意。",
        "我们高度赞赏贵方在本次谈判中所展现出的合作____。",
        "Wǒmen gāodù zànshǎng guìfāng zài běncì tánpàn zhōng suǒ zhǎnxiàn chū de hézuò chéngyì.",
        "Nghe và điền danh từ (2 chữ Hán) còn thiếu vào chỗ trống:",
        "诚意",
        "合作诚意 (hézuò chéngyì) mang nghĩa thiện chí, thành ý hợp tác."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 学术研究与论文写作 (Nghiên cứu học thuật & Viết luận văn thạc sĩ/tiến sĩ)
  // ==========================================
  {
    id: "hsk9-l5-thesis",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    lessonNumber: 5,
    title: "Bài 5: Nghiên cứu học thuật & Viết luận văn thạc sĩ/tiến sĩ",
    titleZh: "第五课：学术研究与论文写作",
    titlePinyin: "Dì wǔ kè: Xuéshù yánjiū yǔ lùnwén xiězuò",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 60,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Anh Yeo",
    youtubeUrl: "https://www.youtube.com/watch?v=745xXuL06YY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 5 学术研究与论文写作",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Cấu trúc chuẩn của một bài báo/luận văn học thuật tiếng Trung: 摘要 (Tóm tắt) → 引言 (Dẫn nhập) → 文献综述 (Tổng quan tài liệu) → 研究方法 (Phương pháp) → 实证分析 (Phân tích thực chứng) → 结论与展望 (Kết luận & Triển vọng).",
      "Ngôn ngữ học thuật yêu cầu tính khách quan (客观性): hạn chế dùng 我认为, thay bằng 本文认为 (Bài viết này cho rằng), 研究表明 (Nghiên cứu cho thấy), 鉴于此 (Xét thấy điều này).",
      "Trích dẫn chuẩn mực (规范引证) và tránh đạo văn (学术不端) là nguyên tắc sống còn của nghiên cứu sinh.",
    ],
    newWords: [
      {
        hanzi: "文献综述",
        pinyin: "wénxiàn zōngshù",
        partOfSpeech: "Danh từ",
        meaningVi: "tổng quan tài liệu nghiên cứu",
        radical: "文 (Văn)",
        strokeCount: 37,
      },
      {
        hanzi: "实证",
        pinyin: "shízhèng",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "thực chứng, dựa trên dữ liệu thực nghiệm",
        radical: "宀 (Miên)",
        strokeCount: 15,
      },
      {
        hanzi: "论据",
        pinyin: "lùnjù",
        partOfSpeech: "Danh từ",
        meaningVi: "luận cứ, bằng chứng lập luận",
        radical: "讠 (Ngôn)",
        strokeCount: 17,
      },
      {
        hanzi: "假设",
        pinyin: "jiǎshè",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "giả thuyết nghiên cứu; giả sử",
        radical: "亻 (Nhân đứng)",
        strokeCount: 17,
      },
      {
        hanzi: "变量",
        pinyin: "biànliàng",
        partOfSpeech: "Danh từ",
        meaningVi: "biến số (độc lập/phụ thuộc)",
        radical: "又 (Hựu)",
        strokeCount: 20,
      },
      {
        hanzi: "摘要",
        pinyin: "zhāiyào",
        partOfSpeech: "Danh từ",
        meaningVi: "tóm tắt luận văn (abstract)",
        radical: "扌 (Tài gảy)",
        strokeCount: 23,
      },
      {
        hanzi: "局限性",
        pinyin: "júxiànxìng",
        partOfSpeech: "Danh từ",
        meaningVi: "tính hạn chế, điểm giới hạn của nghiên cứu",
        radical: "尸 (Thi)",
        strokeCount: 23,
      },
      {
        hanzi: "严谨",
        pinyin: "yánjǐn",
        partOfSpeech: "Tính từ",
        meaningVi: "chặt chẽ, nghiêm cẩn, chuẩn xác",
        radical: "一 (Nhất)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trao đổi với giảng viên hướng dẫn về đề cương luận văn",
        lines: [
          {
            speaker: "Nghiên cứu sinh",
            zh: "导师，我已经完成了文献综述部分，并基于现有研究空白提出了三项核心假设。",
            pinyin: "Dǎoshī, wǒ yǐjīng wánchéng le wénxiàn zōngshù bùfen, bìng jīyú xiànyǒu yánjiū kòngbái tíchū le sān xiàng héxīn jiǎshè.",
            vi: "Thưa thầy hướng dẫn, em đã hoàn thành phần tổng quan tài liệu và dựa trên khoảng trống nghiên cứu hiện có để đề xuất ba giả thuyết cốt lõi.",
          },
          {
            speaker: "Giảng viên hướng dẫn",
            zh: "思路很清晰。接下来在实证分析中，务必严格控制干扰变量，确保论据充分、逻辑严谨。",
            pinyin: "Sīlù hěn qīngxī. Jiēxiàlái zài shízhèng fēnxī zhōng, wùbì yángé kòngzhì gānrǎo biànliàng, quèbǎo lùnjù chōngfèn, luóji yánjǐn.",
            vi: "Hướng tư duy rất rõ ràng. Tiếp theo trong phần phân tích thực chứng, em nhất định phải kiểm soát chặt các biến nhiễu, đảm bảo luận cứ đầy đủ và logic chặt chẽ.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hoàn thiện phần tóm tắt và hạn chế nghiên cứu",
        lines: [
          {
            speaker: "Nghiên cứu sinh",
            zh: "摘要部分我控制在三百字以内，概括了研究背景、方法与主要发现，这样合适吗？",
            pinyin: "Zhāiyào bùfen wǒ kòngzhì zài sānbǎi zì yǐnèi, gàikuò le yánjiū bèijǐng, fāngfǎ yǔ zhǔyào fāxiàn, zhèyàng héshì ma?",
            vi: "Phần tóm tắt em khống chế trong 300 chữ, khái quát bối cảnh, phương pháp và phát hiện chính của nghiên cứu, như vậy có phù hợp không ạ?",
          },
          {
            speaker: "Giảng viên hướng dẫn",
            zh: "结构很规范。另外，在结论末尾应客观指出本研究的局限性，并为后续学者提出研究展望。",
            pinyin: "Jiégòu hěn guīfàn. Lìngwài, zài jiélùn mòwěi yīng kèguān zhǐchū běn yánjiū de júxiànxìng, bìng wèi hòuxù xuézhě tíchū yánjiū zhǎnwàng.",
            vi: "Cấu trúc rất chuẩn mực. Ngoài ra, ở cuối phần kết luận nên chỉ ra một cách khách quan tính hạn chế của nghiên cứu này và nêu triển vọng cho các học giả kế tiếp.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nền tảng lập luận học thuật: 基于……，本文提出……",
        formula: "基于 + Lý thuyết / Dữ liệu / Khoảng trống nghiên cứu，本文 + 提出 / 构建 / 探讨 + Đối tượng",
        explanationVi:
          "基于 (jīyú — dựa trên cơ sở) là từ nối mở đầu kinh điển trong luận văn tiếng Trung để liên kết cơ sở lý luận với đóng góp mới của tác giả.",
        examples: [
          {
            zh: "基于跨文化交际理论，本文探讨了越中商务谈判中的语用策略。",
            pinyin: "Jīyú kuàwénhuà jiāojì lǐlùn, běnwén tàntǎo le Yuè-Zhōng shāngwù tánpàn zhōng de yǔyòng cèlüè.",
            vi: "Dựa trên lý thuyết giao tiếp liên văn hóa, bài viết này tìm hiểu chiến lược dụng học trong đàm phán thương mại Việt-Trung.",
          },
          {
            zh: "基于近五年的面板数据，本研究验证了上述假设。",
            pinyin: "Jīyú jìn wǔnián de miànbǎn shùjù, běn yánjiū yànzhèng le shàngshù jiǎshè.",
            vi: "Dựa trên dữ liệu bảng của 5 năm gần đây, nghiên cứu này đã kiểm chứng giả thuyết nêu trên.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc chuyển ý khách quan: 鉴于此，…… / 综上所述，……",
        formula: "鉴于此 (Xét thấy điều này)，…… / 综上所述 (Tóm lại từ những phân tích trên)，……",
        explanationVi:
          "Dùng để chuyển từ phần trình bày vấn đề sang đề xuất giải pháp (鉴于此) hoặc tổng kết toàn bộ lập luận ở đoạn kết (综上所述).",
        examples: [
          {
            zh: "鉴于此，后续研究有必要进一步扩大样本规模。",
            pinyin: "Jiànyú cǐ, hòuxù yánjiū yǒu bìyào jìnyībù kuòdà yàngběn guīmó.",
            vi: "Xét thấy điều này, các nghiên cứu tiếp theo cần mở rộng thêm quy mô mẫu.",
          },
          {
            zh: "综上所述，数字化转型显著提升了企业的创新绩效。",
            pinyin: "Zōngshàng-suǒshù, shùzìhuà zhuǎnxíng xiǎnzhù tíshēng le qǐyè de chuàngxīn jìxiào.",
            vi: "Tóm lại từ những phân tích trên, chuyển đổi số đã nâng cao rõ rệt hiệu quả đổi mới sáng tạo của doanh nghiệp.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk9-l5-q1",
        "Sắp xếp thành câu học thuật chuẩn: 'Dựa trên dữ liệu thực chứng, bài viết này đã kiểm chứng hai giả thuyết.'",
        ["基于实证数据，", "本文", "验证了", "两项核心假设", "。"],
        "基于实证数据，本文验证了两项核心假设。",
        "Jīyú shízhèng shùjù, běnwén yànzhèng le liǎng xiàng héxīn jiǎshè.",
        "Trật tự chuẩn: Trạng ngữ cơ sở (基于实证数据，) + Chủ ngữ học thuật (本文) + Động từ (验证了) + Tân ngữ (两项核心假设)."
      ),
      writingOrder(
        "hsk9-l5-q2",
        "Sắp xếp thành câu kết luận chuẩn: 'Tóm lại, nghiên cứu này vẫn tồn tại một số hạn chế nhất định.'",
        ["综上所述，", "本研究", "仍存在", "一定的局限性", "。"],
        "综上所述，本研究仍存在一定的局限性。",
        "Zōngshàng-suǒshù, běn yánjiū réng cúnzài yīdìng de júxiànxìng.",
        "Dùng 综上所述 để mở đầu câu kết luận, theo sau là 本研究仍存在……"
      ),
      writingStroke(
        "hsk9-l5-q3",
        "严谨",
        "yánjǐn",
        "chặt chẽ, nghiêm cẩn",
        "Chữ 严 gồm 7 nét; chữ 谨 gồm bộ 讠 (Ngôn) và 堇."
      ),
      writingTwoSentences(
        "hsk9-l5-q4",
        "文献综述",
        "wénxiàn zōngshù",
        "tổng quan tài liệu",
        "Đặt 2 câu có chứa 文献综述 liên quan đến quá trình nghiên cứu và viết luận văn."
      ),
      writingTwoSentences(
        "hsk9-l5-q5",
        "实证",
        "shízhèng",
        "thực chứng",
        "Đặt 2 câu có chứa 实证 thể hiện tư duy nghiên cứu khoa học."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: HSK 9 终极冲刺与综合评估 (Tổng duyệt HSK 9 — Chinh phục đỉnh cao tiếng Trung)
  // ==========================================
  {
    id: "hsk9-l6-capstone",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    lessonNumber: 6,
    title: "Bài 6: Tổng duyệt HSK 9 — Chinh phục đỉnh cao tiếng Trung",
    titleZh: "第六课：HSK 9 终极冲刺与综合评估",
    titlePinyin: "Dì liù kè: HSK 9 zhōngjí chōngcì yǔ zōnghé pínggū",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 65,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Có Gì Vui",
    youtubeUrl: "https://www.youtube.com/watch?v=XVIDq6dSZD8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 9 Bài 6 HSK 9 终极冲刺与综合评估",
    attachedResourceIds: ["res-1-grammar", "res-6-exercises"],
    grammarNotesVi: [
      "Kỳ thi HSK 7–9 (HSK Cao cấp) đánh giá toàn diện 5 kỹ năng: Nghe, Nói, Đọc, Viết và Dịch (听、说、读、写、译) trên kho hơn 11.000 từ vựng.",
      "Đạt chuẩn HSK 9 đồng nghĩa năng lực ngôn ngữ tiệm cận trình độ học thuật và chuyên gia bản ngữ: đọc hiểu văn bản chuyên sâu, tranh biện đa chiều và biên phiên dịch chuẩn xác.",
      "Chiến lược làm bài tổng duyệt: phân bổ thời gian khoa học, đọc lướt nắm cấu trúc luận điểm trước khi xử lý chi tiết, và giữ tâm lý vững vàng.",
    ],
    newWords: [
      {
        hanzi: "融会贯通",
        pinyin: "rónghuì-guàntōng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "dung hợp thông suốt, hiểu sâu và vận dụng linh hoạt mọi kiến thức",
        radical: "虫 (Trùng)",
        strokeCount: 42,
      },
      {
        hanzi: "游刃有余",
        pinyin: "yóurèn-yǒuyú",
        partOfSpeech: "Thành ngữ",
        meaningVi: "thành thạo điêu luyện, xử lý nhẹ nhàng dư sức",
        radical: "氵 (Chấm thủy)",
        strokeCount: 28,
      },
      {
        hanzi: "综合评估",
        pinyin: "zōnghé pínggū",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "đánh giá tổng hợp, thẩm định toàn diện",
        radical: "纟 (Mịch)",
        strokeCount: 32,
      },
      {
        hanzi: "瓶颈",
        pinyin: "píngjǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "nút thắt cổ chai, ngưỡng chững lại",
        radical: "瓦 (Ngõa)",
        strokeCount: 21,
      },
      {
        hanzi: "思辨",
        pinyin: "sībiàn",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "tư duy phản biện, suy luận sắc sảo",
        radical: "心 (Tâm)",
        strokeCount: 25,
      },
      {
        hanzi: "积淀",
        pinyin: "jīdiàn",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "sự tích lũy lắng đọng qua thời gian dài",
        radical: "禾 (Hòa)",
        strokeCount: 21,
      },
      {
        hanzi: "契合",
        pinyin: "qìhé",
        partOfSpeech: "Động từ",
        meaningVi: "khớp nhau, phù hợp sâu sắc",
        radical: "大 (Đại)",
        strokeCount: 15,
      },
      {
        hanzi: "登峰造极",
        pinyin: "dēngfēng-zàojí",
        partOfSpeech: "Thành ngữ",
        meaningVi: "đạt đến đỉnh cao tột bậc",
        radical: "癶 (Bát)",
        strokeCount: 39,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đánh giá năng lực trước kỳ thi HSK 9",
        lines: [
          {
            speaker: "Cố vấn học thuật",
            zh: "从本次综合评估来看，你在听读与翻译板块已相当稳健，若能在写作中进一步强化思辨深度，冲击HSK九级便胜券在握。",
            pinyin: "Cóng běncì zōnghé pínggū lái kàn, nǐ zài tīngdú yǔ fānyì bǎnkuài yǐ xiāngdāng wěnjiàn, ruò néng zài xiězuò zhōng jìnyībù qiánghuà sībiàn shēndù, chōngjī HSK jiǔjí biàn shèngquàn-zàiwò.",
            vi: "Nhìn từ đợt đánh giá tổng hợp lần này, bạn đã khá vững ở mảng nghe đọc và dịch thuật; nếu có thể tăng cường thêm chiều sâu tư duy phản biện trong phần viết thì chinh phục HSK 9 sẽ nắm chắc phần thắng.",
          },
          {
            speaker: "Học viên",
            zh: "感谢老师点拨！前段时间我一度遇到词汇运用的瓶颈，后来通过大量精读政论与学术文献，终于慢慢融会贯通了。",
            pinyin: "Gǎnxiè lǎoshī diǎnbō! Qiánduàn shíjiān wǒ yīdù yùdào cíhuì yùnyòng de píngjǐng, hòulái tōngguò dàliàng jīngdú zhènglùn yǔ xuéshù wénxiàn, zhōngyú mànmàn rónghuì-guàntōng le.",
            vi: "Cảm ơn thầy đã chỉ dẫn! Thời gian trước em từng gặp nút thắt trong việc vận dụng từ vựng, sau đó nhờ đọc sâu nhiều bài chính luận và tài liệu học thuật nên cuối cùng cũng dần thông suốt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chạm đỉnh HSK 9 và hành trình học tập suốt đời",
        lines: [
          {
            speaker: "Giảng viên",
            zh: "语言学习没有终点。即便拿到HSK九级证书，也不代表登峰造极，而是迈向专业跨文化交流的新起点。",
            pinyin: "Yǔyán xuéxí méiyǒu zhōngdiǎn. Jíbiàn nádào HSK jiǔjí zhèngshū, yě bù dàibiǎo dēngfēng-zàojí, érshì màixiàng zhuānyè kuàwénhuà jiāoliú de xīn qǐdiǎn.",
            vi: "Học ngôn ngữ không có điểm dừng. Ngay cả khi cầm chứng chỉ HSK 9 cũng không có nghĩa là đã chạm đỉnh tuyệt đối, mà là điểm khởi đầu mới hướng tới giao tiếp liên văn hóa chuyên nghiệp.",
          },
          {
            speaker: "Học viên",
            zh: "我深以为然。唯有持续积淀文化底蕴，才能在未来的国际舞台上游刃有余。",
            pinyin: "Wǒ shēnyǐwéirán. Wéiyǒu chíxù jīdiàn wénhuà dǐyùn, cáinéng zài wèilái de guójì wǔtái shàng yóurèn-yǒuyú.",
            vi: "Em hoàn toàn đồng tình. Chỉ có không ngừng tích lũy chiều sâu văn hóa mới có thể xử lý điêu luyện trên sân khấu quốc tế tương lai.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nhượng bộ nâng cao: 即便……，也……，而是……",
        formula: "即便 + Thành tựu/Giả định cực đại，也不代表 + Nhận định tuyệt đối，而是 + Bản chất thực sự",
        explanationVi:
          "Kết hợp 即便……也…… (ngay cả khi... cũng...) với 而是…… (mà là...) tạo nên lập luận sắc bén, giàu tính phản biện — rất được đánh giá cao trong bài thi viết và đọc hiểu HSK 9.",
        examples: [
          {
            zh: "即便掌握了上万词汇，也不代表能做好翻译，而是需要长期的语境训练。",
            pinyin: "Jíbiàn zhǎngwò le shàngwàn cíhuì, yě bù dàibiǎo néng zuòhǎo fānyì, érshì xūyào chángqī de yǔjìng xùnliàn.",
            vi: "Ngay cả khi nắm vững hàng vạn từ vựng cũng không đồng nghĩa có thể dịch tốt, mà cần quá trình rèn luyện ngữ cảnh lâu dài.",
          },
          {
            zh: "即便面临重重挑战，我们也不应退缩，而是要化危为机。",
            pinyin: "Jíbiàn miànlín chóngchóng tiǎozhàn, wǒmen yě bùyīng tuìsuō, érshì yào huàwēi-wéijī.",
            vi: "Ngay cả khi đối mặt muôn vàn thách thức, chúng ta cũng không nên chùn bước mà phải biến nguy thành cơ.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc điều kiện duy nhất trang trọng: 唯有……，方能 / 才能……",
        formula: "唯有 + Điều kiện cốt lõi，方能 / 才能 + Kết quả lý tưởng",
        explanationVi:
          "唯有 (wéiyǒu — chỉ duy nhất có) trang trọng hơn 只有, thường đi kèm 方能 hoặc 才能 trong văn nghị luận, diễn văn và kết luận bài thi HSK 9.",
        examples: [
          {
            zh: "唯有厚积薄发，方能在高阶考试中游刃有余。",
            pinyin: "Wéiyǒu hòujī-bófā, fāngnéng zài gāojiē kǎoshì zhōng yóurèn-yǒuyú.",
            vi: "Chỉ có tích lũy dày dặn mới có thể xử lý nhẹ nhàng điêu luyện trong kỳ thi bậc cao.",
          },
          {
            zh: "唯有将知识融会贯通，才能真正突破学习瓶颈。",
            pinyin: "Wéiyǒu jiāng zhīshi rónghuì-guàntōng, cáinéng zhēnzhèng tūpò xuéxí píngjǐng.",
            vi: "Chỉ khi dung hợp thông suốt kiến thức mới có thể thực sự vượt qua nút thắt học tập.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk9-l6-q1",
        "HSK九级不仅考查学习者对上万词汇的记忆，更看重其在真实学术与职场场景中听、说、读、写、译的综合运用与思辨能力。",
        "HSK jiǔjí bùjǐn kǎochá xuéxízhě duì shàngwàn cíhuì de jìyì, gèng kànzhòng qí zài zhēnshí xuéshù yǔ zhíchǎng chǎngjǐng zhōng tīng, shuō, dú, xiě, yì de zōnghé yùnyòng yǔ sībiàn nénglì.",
        "HSK 9 không chỉ kiểm tra khả năng ghi nhớ hàng vạn từ vựng của người học, mà còn coi trọng năng lực vận dụng tổng hợp Nghe, Nói, Đọc, Viết, Dịch và tư duy phản biện trong bối cảnh học thuật và công sở thực tế.",
        "Trọng tâm đánh giá cao nhất của HSK 9 theo đoạn văn là gì?",
        [
          "Năng lực vận dụng tổng hợp 5 kỹ năng và tư duy phản biện trong bối cảnh thực tế",
          "Chỉ cần học thuộc lòng bảng từ vựng là đủ",
          "Chỉ kiểm tra kỹ năng đọc hiểu văn học cổ đại",
          "Không yêu cầu kỹ năng dịch thuật",
        ],
        "Năng lực vận dụng tổng hợp 5 kỹ năng và tư duy phản biện trong bối cảnh thực tế",
        "Cấu trúc 不仅……更看重…… nhấn mạnh trọng tâm nằm ở 综合运用与思辨能力."
      ),
      readingComp(
        "hsk9-l6-q2",
        "许多高阶学习者在备考后期容易遭遇瓶颈：单词背了不少，却依然难以写出地道流畅的政论或学术文章。突破之道在于精读范文并刻意模仿其语篇结构。",
        "Xǔduō gāojiē xuéxízhě zài bèikǎo hòuqī róngyì zāoyù píngjǐng: dāncí bèi le bùshǎo, què yīrán nányǐ xiěchū dìdao liúchàng de zhènglùn huò xuéshù wénzhāng. Tūpò zhīdào zàiyú jīngdú fànwén bìng kèyì mófǎng qí yǔpiān jiégòu.",
        "Nhiều người học bậc cao dễ gặp nút thắt ở giai đoạn cuối ôn thi: học thuộc không ít từ đơn nhưng vẫn khó viết ra bài chính luận hay học thuật tự nhiên trôi chảy. Cách đột phá nằm ở việc đọc kỹ bài mẫu và chủ động mô phỏng cấu trúc diễn ngôn của chúng.",
        "Theo đoạn văn, cách vượt qua 'nút thắt' viết luận bậc cao là gì?",
        [
          "Đọc sâu bài mẫu và luyện tập mô phỏng cấu trúc diễn ngôn",
          "Tiếp tục học thuộc thêm nhiều từ đơn rời rạc",
          "Bỏ qua phần viết để tập trung vào phần nghe",
          "Chỉ dịch trực tiếp từ tiếng mẹ đẻ sang tiếng Trung",
        ],
        "Đọc sâu bài mẫu và luyện tập mô phỏng cấu trúc diễn ngôn",
        "Câu cuối nêu rõ: 突破之道在于精读范文并刻意模仿其语篇结构."
      ),
      readingComp(
        "hsk9-l6-q3",
        "真正优秀的跨文化人才，不仅语言功底扎实，更能将不同文明的思维方式融会贯通，从而在国际协作中游刃有余。",
        "Zhēnzhèng yōuxiù de kuàwénhuà réncái, bùjǐn yǔyán gōngdǐ zhāshi, gèng néng jiāng bùtóng wénmíng de sīwéi fāngshì rónghuì-guàntōng, cóng'ér zài guójì xiézuò zhōng yóurèn-yǒuyú.",
        "Nhân tài liên văn hóa thực sự xuất sắc không chỉ có nền tảng ngôn ngữ vững chắc mà còn biết dung hợp thông suốt lối tư duy của các nền văn minh khác nhau, từ đó xử lý điêu luyện trong hợp tác quốc tế.",
        "Thành ngữ 游刃有余 trong đoạn văn diễn tả trạng thái nào?",
        [
          "Xử lý công việc thành thạo, nhẹ nhàng và đầy bản lĩnh",
          "Gặp nhiều khó khăn, lúng túng khi hợp tác",
          "Thiếu kinh nghiệm thực tế",
          "Chỉ giỏi lý thuyết sách vở",
        ],
        "Xử lý công việc thành thạo, nhẹ nhàng và đầy bản lĩnh",
        "游刃有余 (yóurèn-yǒuyú) chỉ trình độ cực kỳ thành thạo, giải quyết vấn đề phức tạp một cách nhẹ nhàng."
      ),
      readingComp(
        "hsk9-l6-q4",
        "语言能力的跃升离不开长期的文化积淀。若只追求短期应试技巧而忽视阅读广度，即便勉强过关，日后在实际应用中也难免捉襟见肘。",
        "Yǔyán nénglì de yuèshēng líbukāi chángqī de wénhuà jīdiàn. Ruò zhǐ zhuīqiú duǎnqī yìngshì jìqiǎo ér hūshì yuèdú guǎngdù, jíbiàn miǎnqiǎng guòguān, rìhòu zài shíjì yìngyòng zhōng yě nánmiǎn zhuōjīn-jiànzhǒu.",
        "Bước nhảy vọt về năng lực ngôn ngữ không thể tách rời sự tích lũy văn hóa lâu dài. Nếu chỉ chạy theo mẹo thi ngắn hạn mà bỏ qua độ rộng đọc hiểu, ngay cả khi miễn cưỡng đỗ thì sau này ứng dụng thực tế cũng khó tránh khỏi lúng túng thiếu hụt.",
        "Tác giả phê phán xu hướng học tập nào?",
        [
          "Chỉ chạy theo mẹo thi ngắn hạn mà xem nhẹ tích lũy văn hóa và đọc rộng",
          "Đọc quá nhiều sách báo và tài liệu văn hóa",
          "Tham gia kỳ thi HSK 9 quá sớm",
          "Luyện tập giao tiếp thực tế quá nhiều",
        ],
        "Chỉ chạy theo mẹo thi ngắn hạn mà xem nhẹ tích lũy văn hóa và đọc rộng",
        "Đoạn văn chỉ rõ hệ quả của việc 只追求短期应试技巧而忽视阅读广度."
      ),
      readingComp(
        "hsk9-l6-q5",
        "取得HSK九级证书并非语言探索的终点，而是新征程的起点。唯有保持谦逊与好奇心，持续深耕，方能与时代发展同频契合。",
        "Qǔdé HSK jiǔjí zhèngshū bìngfēi yǔyán tànsuǒ de zhōngdiǎn, érshì xīn zhēngchéng de qǐdiǎn. Wéiyǒu bǎochí qiānxùn yǔ hàoqíxīn, chíxù shēngēng, fāngnéng yǔ shídài fāzhǎn tóngpín qìhé.",
        "Đạt được chứng chỉ HSK 9 không phải là điểm kết thúc của hành trình khám phá ngôn ngữ, mà là điểm khởi đầu của chặng đường mới. Chỉ khi giữ lòng khiêm tốn và sự tò mò, không ngừng đào sâu, mới có thể đồng điệu cùng sự phát triển của thời đại.",
        "Thông điệp khép lại toàn bộ lộ trình HSK 9 là gì?",
        [
          "HSK 9 là khởi đầu mới, cần tiếp tục học hỏi khiêm tốn và đào sâu suốt đời",
          "Đạt HSK 9 là đã hoàn toàn ngừng việc học tiếng Trung",
          "Chứng chỉ HSK 9 không có giá trị trong thời đại mới",
          "Chỉ cần học ngôn ngữ trong thời gian ngắn là đủ dùng cả đời",
        ],
        "HSK 9 là khởi đầu mới, cần tiếp tục học hỏi khiêm tốn và đào sâu suốt đời",
        "Cấu trúc 并非……而是…… và 唯有……方能…… khẳng định tinh thần học tập suốt đời sau khi chinh phục HSK 9."
      ),
    ],
  },
];
