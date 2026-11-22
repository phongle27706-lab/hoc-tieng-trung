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

export const HSK3_PART2_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 11: 别忘了把空调关了
  // ==========================================
  {
    id: "hsk3-l11-kongtiao",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Đừng quên tắt điều hòa",
    titleZh: "第十一课：别忘了把空调关了",
    titlePinyin: "Dì shíyī kè: Bié wàng le bǎ kōngtiáo guān le",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=V8QvvmLjjKk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 11 别忘了把空调关了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu chữ 把 (1): A + 把 + B + Động từ + Thành phần khác (了, bổ ngữ kết quả...). Nhấn mạnh sự xử lý và kết quả tác động lên tân ngữ B.",
      "Cách dùng 左右 (zuǒyòu) đặt sau số từ để biểu thị số lượng ước chừng (khoảng, tầm).",
    ],
    newWords: [
      { hanzi: "图书馆", pinyin: "túshūguǎn", partOfSpeech: "Danh từ", meaningVi: "thư viện", radical: "囗 (Vi)", strokeCount: 23 },
      { hanzi: "借", pinyin: "jiè", partOfSpeech: "Động từ", meaningVi: "mượn, cho mượn", radical: "亻 (Nhân đứng)", strokeCount: 10 },
      { hanzi: "词典", pinyin: "cídiǎn", partOfSpeech: "Danh từ", meaningVi: "từ điển", radical: "讠 (Ngôn)", strokeCount: 15 },
      { hanzi: "还", pinyin: "huán", partOfSpeech: "Động từ", meaningVi: "trả lại", radical: "辶 (Sước)", strokeCount: 7 },
      { hanzi: "灯", pinyin: "dēng", partOfSpeech: "Danh từ", meaningVi: "đèn", radical: "火 (Hỏa)", strokeCount: 6 },
      { hanzi: "会议", pinyin: "huìyì", partOfSpeech: "Danh từ", meaningVi: "cuộc họp, hội nghị", radical: "人 (Nhân)", strokeCount: 11 },
      { hanzi: "结束", pinyin: "jiéshù", partOfSpeech: "Động từ", meaningVi: "kết thúc", radical: "纟 (Mịch)", strokeCount: 16 },
      { hanzi: "忘记", pinyin: "wàngjì", partOfSpeech: "Động từ", meaningVi: "quên", radical: "心 (Tâm)", strokeCount: 12 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trong phòng học",
        lines: [
          { speaker: "A", zh: "我先走了，你一会儿把空调关了。", pinyin: "Wǒ xiān zǒu le, nǐ yíhuìr bǎ kōngtiáo guān le.", vi: "Tôi đi trước đây, lát nữa bạn nhớ tắt điều hòa nhé." },
          { speaker: "B", zh: "好的，别忘了把图书馆借的词典还了。", pinyin: "Hǎo de, bié wàng le bǎ túshūguǎn jiè de cídiǎn huán le.", vi: "Được rồi, bạn cũng đừng quên trả cuốn từ điển mượn ở thư viện đấy." },
          { speaker: "A", zh: "谢谢提醒，我差点儿忘了。", pinyin: "Xièxie tíxǐng, wǒ chàdiǎnr wàng le.", vi: "Cảm ơn đã nhắc, tôi suýt nữa thì quên." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Sau cuộc họp",
        lines: [
          { speaker: "A", zh: "会议大概五点左右结束。", pinyin: "Huìyì dàgài wǔ diǎn zuǒyòu jiéshù.", vi: "Cuộc họp kết thúc vào khoảng 5 giờ." },
          { speaker: "B", zh: "结束以后，请把会议室的灯和空调都关了。", pinyin: "Jiéshù yǐhòu, qǐng bǎ huìyìshì de dēng hé kōngtiáo dōu guān le.", vi: "Sau khi kết thúc, xin hãy tắt hết đèn và điều hòa trong phòng họp." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu chữ 把 (Cấu trúc cơ bản)",
        formula: "Chủ ngữ + 把 + Tân ngữ + Động từ + 了 / Bổ ngữ",
        explanationVi: "Dùng để nhấn mạnh hành động làm thay đổi trạng thái hoặc vị trí của tân ngữ xác định. Sau động từ bắt buộc phải có thành phần khác (như 了, bổ ngữ kết quả), không được để động từ trần.",
        examples: [
          { zh: "别忘了把空调关了。", pinyin: "Bié wàng le bǎ kōngtiáo guān le.", vi: "Đừng quên tắt điều hòa." },
          { zh: "请把这本词典还给图书馆。", pinyin: "Qǐng bǎ zhè běn cídiǎn huán gěi túshūguǎn.", vi: "Xin hãy trả cuốn từ điển này cho thư viện." },
        ],
      },
      {
        titleVi: "Số ước lượng với 左右 (zuǒyòu)",
        formula: "Số từ + Lượng từ + (Danh từ) + 左右",
        explanationVi: "左右 đặt sau cụm số lượng để chỉ mức độ xấp xỉ, tương đương 'khoảng, chừng' trong tiếng Việt.",
        examples: [
          { zh: "会议五点左右结束。", pinyin: "Huìyì wǔ diǎn zuǒyòu jiéshù.", vi: "Cuộc họp kết thúc vào khoảng 5 giờ." },
          { zh: "他每天学习两个小时左右。", pinyin: "Tā měitiān xuéxí liǎng ge xiǎoshí zuǒyòu.", vi: "Anh ấy mỗi ngày học khoảng hai tiếng." },
        ],
      },
    ],
    exercises: [
      readingComp("hsk3-l11-q1", "小王去图书馆借了一本汉语词典，今天下午他把词典还了。", "Xiǎo Wáng qù túshūguǎn jiè le yì běn Hànyǔ cídiǎn, jīntiān xiàwǔ tā bǎ cídiǎn huán le.", "Tiểu Vương đến thư viện mượn một cuốn từ điển tiếng Hán, chiều nay anh ấy đã trả từ điển rồi.", "Tiểu Vương đã làm gì vào chiều nay?", ["Mượn từ điển mới", "Trả từ điển cho thư viện", "Mua một cuốn từ điển", "Làm mất từ điển"], "Trả từ điển cho thư viện", "Câu có cụm '把词典还了' (đã trả từ điển rồi)."),
      readingComp("hsk3-l11-q2", "会议四点半左右结束，离开会议室的时候别忘了把灯和空调关了。", "Huìyì sì diǎn bàn zuǒyòu jiéshù, líkāi huìyìshì de shíhou bié wàng le bǎ dēng hé kōngtiáo guān le.", "Cuộc họp kết thúc khoảng 4 rưỡi, lúc rời phòng họp đừng quên tắt đèn và điều hòa.", "Khi rời phòng họp cần chú ý điều gì?", ["Khóa cửa sổ", "Tắt đèn và điều hòa", "Bật máy chiếu", "Dọn dẹp bàn ghế"], "Tắt đèn và điều hòa", "Câu nhắc rõ: '把灯和空调关了'."),
      readingComp("hsk3-l11-q3", "我每天早上七点左右起床，然后把房间打扫干净再去上班。", "Wǒ měitiān zǎoshang qī diǎn zuǒyòu qǐchuáng, ránhòu bǎ fángjiān dǎsǎo gānjìng zài qù shàngbān.", "Mỗi sáng tôi thức dậy khoảng 7 giờ, sau đó dọn phòng sạch sẽ rồi mới đi làm.", "Người nói làm gì trước khi đi làm?", ["Đi tập thể dục", "Dọn dẹp phòng", "Đọc báo", "Đi thư viện"], "Dọn dẹp phòng", "'把房间打扫干净再去上班' nghĩa là dọn phòng sạch rồi mới đi làm."),
      readingComp("hsk3-l11-q4", "这件衣服太脏了，你明天有空的时候把它洗了吧。", "Zhè jiàn yīfu tài zāng le, nǐ míngtiān yǒukòng de shíhou bǎ tā xǐ le ba.", "Chiếc áo này bẩn quá rồi, ngày mai lúc rảnh bạn giặt nó đi nhé.", "Tại sao cần giặt chiếc áo?", ["Vì áo quá bẩn", "Vì áo mới mua", "Vì trời sắp mưa", "Vì áo quá rộng"], "Vì áo quá bẩn", "'太脏了' nghĩa là bẩn quá rồi."),
      readingComp("hsk3-l11-q5", "为了不影响别人，进图书馆以后请把手机关了。", "Wèile bù yǐngxiǎng biérén, jìn túshūguǎn yǐhòu qǐng bǎ shǒujī guān le.", "Để không ảnh hưởng người khác, sau khi vào thư viện xin hãy tắt điện thoại.", "Vào thư viện cần làm gì?", ["Nói chuyện nhỏ", "Tắt điện thoại", "Mượn sách ngay", "Tắt điều hòa"], "Tắt điện thoại", "'把手机关了' nghĩa là tắt điện thoại."),
    ],
  },

  // ==========================================
  // BÀI 12: 把重要的东西放在我这儿吧
  // ==========================================
  {
    id: "hsk3-l12-zhongyao",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Để đồ quan trọng ở chỗ tôi đi",
    titleZh: "第十二课：把重要的东西放在我这儿吧",
    titlePinyin: "Dì shí'èr kè: Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Mimi",
    youtubeUrl: "https://www.youtube.com/watch?v=aduFRguXxbs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 12 把重要的东西放在我这儿吧",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu chữ 把 (2): A + 把 + B + Động từ + 在 / 到 / 给 + Nơi chốn / Người nhận. Biểu thị hành động làm thay đổi vị trí hoặc người sở hữu của B.",
      "Cấu trúc 才 (cái) biểu thị hành động xảy ra muộn hoặc khó khăn mới đạt được.",
    ],
    newWords: [
      { hanzi: "太阳", pinyin: "tàiyáng", partOfSpeech: "Danh từ", meaningVi: "mặt trời", radical: "大 (Đại)", strokeCount: 10 },
      { hanzi: "西", pinyin: "xī", partOfSpeech: "Danh từ", meaningVi: "phía tây", radical: "西 (Tây)", strokeCount: 6 },
      { hanzi: "生气", pinyin: "shēngqì", partOfSpeech: "Động từ", meaningVi: "tức giận", radical: "生 (Sinh)", strokeCount: 9 },
      { hanzi: "行李箱", pinyin: "xínglixiāng", partOfSpeech: "Danh từ", meaningVi: "va-li hành lý", radical: "行 (Hành)", strokeCount: 28 },
      { hanzi: "自己", pinyin: "zìjǐ", partOfSpeech: "Đại từ", meaningVi: "bản thân, tự mình", radical: "自 (Tự)", strokeCount: 9 },
      { hanzi: "包", pinyin: "bāo", partOfSpeech: "Danh từ", meaningVi: "túi xách, cặp", radical: "勹 (Bao)", strokeCount: 5 },
      { hanzi: "发现", pinyin: "fāxiàn", partOfSpeech: "Động từ", meaningVi: "phát hiện", radical: "又 (Hựu)", strokeCount: 13 },
      { hanzi: "护照", pinyin: "hùzhào", partOfSpeech: "Danh từ", meaningVi: "hộ chiếu", radical: "扌 (Tài gẩy)", strokeCount: 20 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trước khi đi công tác",
        lines: [
          { speaker: "A", zh: "你怎么这么生气？", pinyin: "Nǐ zěnme zhème shēngqì?", vi: "Sao bạn lại tức giận thế?" },
          { speaker: "B", zh: "我把护照放在行李箱里了，刚才才发现忘带钥匙了。", pinyin: "Wǒ bǎ hùzhào fàng zài xínglixiāng lǐ le, gāngcái cái fāxiàn wàng dài yàoshi le.", vi: "Tôi để hộ chiếu trong va-li rồi, vừa nãy mới phát hiện quên mang chìa khóa." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Gửi đồ quan trọng",
        lines: [
          { speaker: "A", zh: "把重要的东西放在我这儿吧，我帮你看着。", pinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba, wǒ bāng nǐ kān zhe.", vi: "Để đồ quan trọng ở chỗ tôi đi, tôi trông giúp bạn." },
          { speaker: "B", zh: "好，我把包和护照都交给你了。", pinyin: "Hǎo, wǒ bǎ bāo hé hùzhào dōu jiāo gěi nǐ le.", vi: "Được, tôi giao cả túi và hộ chiếu cho bạn đấy." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu chữ 把 với 在 / 到 / 给",
        formula: "A + 把 + B + Động từ + 在/到/给 + Địa điểm/Đối tượng",
        explanationVi: "Dùng khi hành động di chuyển vật B đến một vị trí mới (放在, 送到) hoặc chuyển giao cho ai đó (交给, 借给).",
        examples: [
          { zh: "把重要的东西放在我这儿吧。", pinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", vi: "Hãy để đồ quan trọng ở chỗ tôi đi." },
          { zh: "我已经把文件发给你了。", pinyin: "Wǒ yǐjīng bǎ wénjiàn fā gěi nǐ le.", vi: "Tôi đã gửi tài liệu cho bạn rồi." },
        ],
      },
      {
        titleVi: "Phó từ 才 (cái) chỉ sự việc xảy ra muộn",
        formula: "Chủ ngữ + Thời gian + 才 + Động từ",
        explanationVi: "才 đứng trước động từ biểu thị hành động xảy ra muộn hơn dự kiến; câu dùng 才 thường không có 了 ở cuối câu.",
        examples: [
          { zh: "他昨天晚上十二点才回家。", pinyin: "Tā zuótiān wǎnshang shí'èr diǎn cái huíjiā.", vi: "Tối qua 12 giờ anh ấy mới về nhà." },
          { zh: "我刚才才发现护照在包里。", pinyin: "Wǒ gāngcái cái fāxiàn hùzhào zài bāo lǐ.", vi: "Vừa nãy tôi mới phát hiện hộ chiếu ở trong túi." },
        ],
      },
    ],
    exercises: [
      writingStroke("hsk3-l12-q1", "包", "bāo", "túi xách, bao bọc", "Viết bộ Bao (勹) bên ngoài trước, sau đó viết nét chữ 巳 bên trong."),
      writingStroke("hsk3-l12-q2", "西", "xī", "phía tây", "Nét ngang trên cùng viết trước, sau đó viết khung vuông và hai nét bên trong."),
      writingOrder("hsk3-l12-q3", "Sắp xếp thành câu chữ 把 đúng: 'Hãy để hộ chiếu vào trong túi.'", ["把", "护照", "放在", "包里", "吧"], "把护照放在包里吧", "Bǎ hùzhào fàng zài bāo lǐ ba", "Cấu trúc: 把 + Tân ngữ (护照) + 放在 + Vị trí (包里) + 吧."),
      writingOrder("hsk3-l12-q4", "Sắp xếp thành câu đúng: 'Tôi đã gửi đồ đến nhà anh ấy rồi.'", ["我", "把东西", "送到", "他家", "了"], "我把东西送到他家了", "Wǒ bǎ dōngxi sòng dào tā jiā le", "Cấu trúc: Chủ ngữ + 把 + Tân ngữ + 送到 + Địa điểm + 了."),
      writingTwoSentences("hsk3-l12-q5", "发现", "fāxiàn", "phát hiện", "Đặt 2 câu sử dụng động từ 发现 (ví dụ: phát hiện quên đồ, phát hiện vấn đề trong công việc)."),
    ],
  },

  // ==========================================
  // BÀI 13: 我是走回来的
  // ==========================================
  {
    id: "hsk3-l13-zouhuilai",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 13,
    title: "Bài 13: Tôi đi bộ về đấy",
    titleZh: "第十三课：我是走回来的",
    titlePinyin: "Dì shísān kè: Wǒ shì zǒu huílai de",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=p1CpQjw6S3k",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 13 我是走回来的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Bổ ngữ xu hướng kép: Động từ + 上/下/进/出/回/过/起 + 来/去. Biểu thị phương hướng cụ thể của hành động so với người nói (来: hướng về người nói, 去: xa người nói).",
      "Cấu trúc 一边……一边…… (yìbiān... yìbiān...): vừa làm việc này vừa làm việc kia cùng lúc.",
    ],
    newWords: [
      { hanzi: "终于", pinyin: "zhōngyú", partOfSpeech: "Phó từ", meaningVi: "cuối cùng thì", radical: "纟 (Mịch)", strokeCount: 11 },
      { hanzi: "爷爷", pinyin: "yéye", partOfSpeech: "Danh từ", meaningVi: "ông nội", radical: "父 (Phụ)", strokeCount: 12 },
      { hanzi: "礼物", pinyin: "lǐwù", partOfSpeech: "Danh từ", meaningVi: "quà tặng", radical: "礻 (Thị)", strokeCount: 13 },
      { hanzi: "奶奶", pinyin: "nǎinai", partOfSpeech: "Danh từ", meaningVi: "bà nội", radical: "女 (Nữ)", strokeCount: 10 },
      { hanzi: "遇到", pinyin: "yùdào", partOfSpeech: "Động từ", meaningVi: "gặp phải, tình cờ gặp", radical: "辶 (Sước)", strokeCount: 20 },
      { hanzi: "一边", pinyin: "yìbiān", partOfSpeech: "Phó từ", meaningVi: "vừa... vừa...", radical: "一 (Nhất)", strokeCount: 6 },
      { hanzi: "过去", pinyin: "guòqù", partOfSpeech: "Danh từ/Động từ", meaningVi: "quá khứ; đi qua", radical: "辶 (Sước)", strokeCount: 11 },
      { hanzi: "一般", pinyin: "yìbān", partOfSpeech: "Tính từ/Phó từ", meaningVi: "thông thường, bình thường", radical: "一 (Nhất)", strokeCount: 11 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đi bộ về nhà",
        lines: [
          { speaker: "A", zh: "你终于回来了！怎么这么晚？", pinyin: "Nǐ zhōngyú huílai le! Zěnme zhème wǎn?", vi: "Bạn cuối cùng cũng về rồi! Sao muộn thế?" },
          { speaker: "B", zh: "我是走回来的，路上还遇到了老同学。", pinyin: "Wǒ shì zǒu huílai de, lùshang hái yùdào le lǎo tóngxué.", vi: "Tôi đi bộ về đấy, trên đường còn tình cờ gặp bạn học cũ." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Tặng quà ông bà",
        lines: [
          { speaker: "A", zh: "我给爷爷奶奶买了一些礼物，你帮我拿进去吧。", pinyin: "Wǒ gěi yéye nǎinai mǎi le yìxiē lǐwù, nǐ bāng wǒ ná jìnqu ba.", vi: "Tôi mua ít quà cho ông bà nội, bạn giúp tôi mang vào trong nhé." },
          { speaker: "B", zh: "好，我们一边喝茶一边聊天吧。", pinyin: "Hǎo, wǒmen yìbiān hē chá yìbiān liáotiān ba.", vi: "Được, chúng ta vừa uống trà vừa nói chuyện đi." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ xu hướng kép (复合趋向补语)",
        formula: "Động từ + 上/下/进/出/回/过/起 + 来/去",
        explanationVi: "Kết hợp động từ chính với hướng di chuyển (vào, ra, lên, xuống, về...) và chiều hướng về phía người nói (来) hay ra xa người nói (去). Ví dụ: 走回来 (đi bộ về đây), 拿进去 (mang vào trong kia).",
        examples: [
          { zh: "我是走回来的。", pinyin: "Wǒ shì zǒu huílai de.", vi: "Tôi đi bộ về đấy." },
          { zh: "老师走进教室来了。", pinyin: "Lǎoshī zǒu jìn jiàoshì lái le.", vi: "Thầy giáo bước vào lớp học rồi." },
        ],
      },
      {
        titleVi: "Cấu trúc 一边……一边……",
        formula: "Chủ ngữ + 一边 + Động từ 1 + 一边 + Động từ 2",
        explanationVi: "Diễn tả hai hành động diễn ra song song cùng một thời điểm.",
        examples: [
          { zh: "他喜欢一边听音乐一边做作业。", pinyin: "Tā xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.", vi: "Anh ấy thích vừa nghe nhạc vừa làm bài tập." },
          { zh: "我们一边吃饭一边聊工作吧。", pinyin: "Wǒmen yìbiān chīfàn yìbiān liáo gōngzuò ba.", vi: "Chúng ta vừa ăn cơm vừa bàn công việc đi." },
        ],
      },
    ],
    exercises: [
      listeningMcq("hsk3-l13-q1", "今天天气很好，我是走回来的。", "Jīntiān tiānqì hěn hǎo, wǒ shì zǒu huílai de.", "Người nói về nhà bằng cách nào?", ["Đi xe buýt", "Đi bộ", "Đi taxi", "Đi tàu điện ngầm"], "Đi bộ", "'走回来的' nghĩa là đi bộ về."),
      listeningMcq("hsk3-l13-q2", "他喜欢一边喝咖啡一边看报纸。", "Tā xǐhuan yìbiān hē kāfēi yìbiān kàn bàozhǐ.", "Anh ấy thích làm hai việc gì cùng lúc?", ["Uống trà và xem TV", "Uống cà phê và đọc báo", "Nghe nhạc và nấu ăn", "Ăn cơm và gọi điện"], "Uống cà phê và đọc báo", "'一边喝咖啡一边看报纸' nghĩa là vừa uống cà phê vừa đọc báo."),
      listeningFill("hsk3-l13-q3", "等了半个小时，公共汽车终于来了。", "等了半个小时，公共汽车____来了。", "Děng le bàn ge xiǎoshí, gōnggòng qìchē ____ lái le.", "Nghe và điền từ còn thiếu (2 chữ Hán):", "终于", "Từ cần điền là 终于 (zhōngyú — cuối cùng thì)."),
      listeningDialogue("hsk3-l13-q4", "A：你手里拿的是什么？ B：是给爷爷奶奶买的礼物。", "A: Nǐ shǒulǐ ná de shì shénme? B: Shì gěi yéye nǎinai mǎi de lǐwù.", "Người B mua quà cho ai?", ["Cho bố mẹ", "Cho ông bà nội", "Cho thầy giáo", "Cho bạn học"], "Cho ông bà nội", "B nói: '给爷爷奶奶买的礼物'."),
      listeningDialogue("hsk3-l13-q5", "A：你一般周末做什么？ B：我一般在家休息，或者去公园散步。", "A: Nǐ yìbān zhōumò zuò shénme? B: Wǒ yìbān zài jiā xiūxi, huòzhě qù gōngyuán sànbù.", "Cuối tuần người B thường làm gì?", ["Đi làm thêm", "Nghỉ ở nhà hoặc đi dạo công viên", "Đi du lịch xa", "Đi thư viện học"], "Nghỉ ở nhà hoặc đi dạo công viên", "B trả lời: '一般在家休息，或者去公园散步'."),
    ],
  },

  // ==========================================
  // BÀI 14: 你把水果拿过来
  // ==========================================
  {
    id: "hsk3-l14-shuiguo",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 14,
    title: "Bài 14: Bạn mang hoa quả qua đây",
    titleZh: "第十四课：你把水果拿过来",
    titlePinyin: "Dì shísì kè: Nǐ bǎ shuǐguǒ ná guòlai",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=8UafW2Wp6Og",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 14 你把水果拿过来",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu chữ 把 kết hợp bổ ngữ xu hướng: A + 把 + B + Động từ + Bổ ngữ xu hướng (拿过来, 搬进去, 带回来...).",
      "Cấu trúc 先……，再……，然后…… (xiān..., zài..., ránhòu...): biểu thị trình tự thực hiện liên tiếp các hành động.",
    ],
    newWords: [
      { hanzi: "打扫", pinyin: "dǎsǎo", partOfSpeech: "Động từ", meaningVi: "quét dọn", radical: "扌 (Tài gẩy)", strokeCount: 11 },
      { hanzi: "干净", pinyin: "gānjìng", partOfSpeech: "Tính từ", meaningVi: "sạch sẽ", radical: "干 (Can)", strokeCount: 11 },
      { hanzi: "然后", pinyin: "ránhòu", partOfSpeech: "Liên từ", meaningVi: "sau đó", radical: "灬 (Hỏa)", strokeCount: 18 },
      { hanzi: "冰箱", pinyin: "bīngxiāng", partOfSpeech: "Danh từ", meaningVi: "tủ lạnh", radical: "冫 (Băng)", strokeCount: 21 },
      { hanzi: "洗澡", pinyin: "xǐzǎo", partOfSpeech: "Động từ", meaningVi: "tắm rửa", radical: "氵 (Thủy)", strokeCount: 25 },
      { hanzi: "节目", pinyin: "jiémù", partOfSpeech: "Danh từ", meaningVi: "chương trình (TV, biểu diễn)", radical: "艹 (Thảo)", strokeCount: 10 },
      { hanzi: "月亮", pinyin: "yuèliang", partOfSpeech: "Danh từ", meaningVi: "mặt trăng", radical: "月 (Nguyệt)", strokeCount: 13 },
      { hanzi: "像", pinyin: "xiàng", partOfSpeech: "Động từ", meaningVi: "giống như", radical: "亻 (Nhân đứng)", strokeCount: 13 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Dọn dẹp nhà cửa",
        lines: [
          { speaker: "A", zh: "客人快来了，你先把客厅打扫干净，再把水果拿过来。", pinyin: "Kèrén kuài lái le, nǐ xiān bǎ kètīng dǎsǎo gānjìng, zài bǎ shuǐguǒ ná guòlai.", vi: "Khách sắp đến rồi, bạn dọn sạch phòng khách trước, rồi mang hoa quả qua đây nhé." },
          { speaker: "B", zh: "没问题，西瓜还在冰箱里，我现在就去拿。", pinyin: "Méi wèntí, xīguā hái zài bīngxiāng lǐ, wǒ xiànzài jiù qù ná.", vi: "Không vấn đề gì, dưa hấu vẫn ở trong tủ lạnh, tôi đi lấy ngay đây." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Buổi tối ở nhà",
        lines: [
          { speaker: "A", zh: "今晚的月亮真圆，像一个大盘子。", pinyin: "Jīnwǎn de yuèliang zhēn yuán, xiàng yí ge dà pánzi.", vi: "Trăng tối nay tròn thật đấy, giống như một cái đĩa lớn." },
          { speaker: "B", zh: "我先去洗澡，然后和你一起看电视节目。", pinyin: "Wǒ xiān qù xǐzǎo, ránhòu hé nǐ yìqǐ kàn diànshì jiémù.", vi: "Tôi đi tắm trước, sau đó xem chương trình TV cùng bạn." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu chữ 把 kết hợp Bổ ngữ xu hướng",
        formula: "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ xu hướng (过来/过去/进去/出来...)",
        explanationVi: "Diễn tả việc di chuyển đối tượng B theo một hướng cụ thể.",
        examples: [
          { zh: "你把水果拿过来。", pinyin: "Nǐ bǎ shuǐguǒ ná guòlai.", vi: "Bạn mang hoa quả qua đây." },
          { zh: "请把这些书搬进去。", pinyin: "Qǐng bǎ zhèxiē shū bān jìnqu.", vi: "Xin hãy bê những cuốn sách này vào trong." },
        ],
      },
      {
        titleVi: "Chuỗi hành động 先……，再……，然后……",
        formula: "先 + V1，再 + V2，然后 + V3",
        explanationVi: "Dùng để sắp xếp thứ tự trước sau của nhiều hành động nối tiếp nhau.",
        examples: [
          { zh: "我先洗澡，再吃饭，然后看节目。", pinyin: "Wǒ xiān xǐzǎo, zài chīfàn, ránhòu kàn jiémù.", vi: "Tôi tắm trước, rồi ăn cơm, sau đó xem chương trình." },
        ],
      },
    ],
    exercises: [
      speakingShadowing("hsk3-l14-q1", "你把水果拿过来。", "Nǐ bǎ shuǐguǒ ná guòlai.", "Đọc nhại câu mệnh lệnh lịch sự dùng 把 + 拿过来.", ["Biến điệu 3+3: Nǐ bǎ → Ní bǎ", "Thanh nhẹ: guòlai"], "Chú ý nối âm tự nhiên cụm 'nǐ bǎ' và đọc nhẹ âm 'lai'."),
      speakingShadowing("hsk3-l14-q2", "请把房间打扫干净。", "Qǐng bǎ fángjiān dǎsǎo gānjìng.", "Luyện phát âm cụm từ 打扫干净.", ["Biến điệu: Qǐng bǎ → Qíng bǎ, dǎsǎo → dásǎo", "Thanh nhẹ: gānjìng"], "Chú ý hai cặp biến điệu thanh 3 liên tiếp trong câu."),
      speakingShadowing("hsk3-l14-q3", "我先洗澡，然后看电视节目。", "Wǒ xiān xǐzǎo, ránhòu kàn diànshì jiémù.", "Luyện nói chuỗi hành động với 先... 然后....", ["Biến điệu: xǐzǎo → xízǎo", "Thanh 4: ránhòu, diànshì, jiémù"], "Ngắt nhịp nhẹ ở dấu phẩy sau 洗澡."),
      speakingShadowing("hsk3-l14-q4", "今晚的月亮像一个大盘子。", "Jīnwǎn de yuèliang xiàng yí ge dà pánzi.", "Luyện nói câu so sánh với 像.", ["Thanh nhẹ: yuèliang, pánzi", "Biến điệu 一: yí ge"], "Đọc rõ thanh 4 của 像 (xiàng) để nhấn mạnh phép so sánh."),
      speakingShadowing("hsk3-l14-q5", "把西瓜放进冰箱里吧。", "Bǎ xīguā fàng jìn bīngxiāng lǐ ba.", "Luyện nói câu chữ 把 với 放进.", ["Thanh 1: xīguā, bīngxiāng", "Thanh 4: fàng jìn"], "Giữ cao độ ổn định cho các âm tiết thanh 1."),
    ],
  },

  // ==========================================
  // BÀI 15: 其他都没什么问题
  // ==========================================
  {
    id: "hsk3-l15-qita",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 15,
    title: "Bài 15: Những việc khác đều không có vấn đề gì",
    titleZh: "第十五课：其他都没什么问题",
    titlePinyin: "Dì shíwǔ kè: Qítā dōu méi shénme wèntí",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=q50LhptmD64",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 15 其他都没什么问题",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc 除了……以外，都/还/也……: Dùng 都 để loại trừ (ngoài A ra thì tất cả đều...); dùng 还/也 để bổ sung (ngoài A ra còn có...).",
      "Cấu trúc 极了 (jíle) đặt sau tính từ để biểu thị mức độ cực cao (vô cùng, cực kỳ).",
    ],
    newWords: [
      { hanzi: "留学", pinyin: "liúxué", partOfSpeech: "Động từ", meaningVi: "du học", radical: "田 (Điền)", strokeCount: 18 },
      { hanzi: "水平", pinyin: "shuǐpíng", partOfSpeech: "Danh từ", meaningVi: "trình độ", radical: "水 (Thủy)", strokeCount: 9 },
      { hanzi: "提高", pinyin: "tígāo", partOfSpeech: "Động từ", meaningVi: "nâng cao", radical: "扌 (Tài gẩy)", strokeCount: 22 },
      { hanzi: "练习", pinyin: "liànxí", partOfSpeech: "Động từ/Danh từ", meaningVi: "luyện tập, bài tập", radical: "纟 (Mịch)", strokeCount: 11 },
      { hanzi: "完成", pinyin: "wánchéng", partOfSpeech: "Động từ", meaningVi: "hoàn thành", radical: "宀 (Miên)", strokeCount: 13 },
      { hanzi: "句子", pinyin: "jùzi", partOfSpeech: "Danh từ", meaningVi: "câu (ngữ pháp)", radical: "口 (Khẩu)", strokeCount: 8 },
      { hanzi: "其他", pinyin: "qítā", partOfSpeech: "Đại từ", meaningVi: "cái khác, người khác", radical: "八 (Bát)", strokeCount: 13 },
      { hanzi: "发", pinyin: "fā", partOfSpeech: "Động từ", meaningVi: "gửi, phát", radical: "又 (Hựu)", strokeCount: 5 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trao đổi về việc học tiếng Hán",
        lines: [
          { speaker: "A", zh: "你来中国留学一年了，汉语水平提高得真快！", pinyin: "Nǐ lái Zhōngguó liúxué yì nián le, Hànyǔ shuǐpíng tígāo de zhēn kuài!", vi: "Bạn sang Trung Quốc du học một năm rồi, trình độ tiếng Hán tiến bộ nhanh thật!" },
          { speaker: "B", zh: "除了听力有点儿难以外，其他都没什么问题。", pinyin: "Chúle tīnglì yǒudiǎnr nán yǐwài, qítā dōu méi shénme wèntí.", vi: "Ngoài phần nghe hơi khó ra, những phần khác đều không có vấn đề gì." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Nộp bài tập",
        lines: [
          { speaker: "A", zh: "今天的练习你完成了吗？", pinyin: "Jīntiān de liànxí nǐ wánchéng le ma?", vi: "Bài tập hôm nay bạn làm xong chưa?" },
          { speaker: "B", zh: "完成了，除了写句子以外，我还发了一封邮件给老师。", pinyin: "Wánchéng le, chúle xiě jùzi yǐwài, wǒ hái fā le yì fēng yóujiàn gěi lǎoshī.", vi: "Xong rồi, ngoài viết câu ra, tôi còn gửi một bức email cho thầy giáo nữa." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 除了……以外，都 / 还 / 也……",
        formula: "除了 + A + (以外)，B + 都 / 还 / 也 + ...",
        explanationVi: "Khi vế sau dùng 都: loại trừ A khỏi phạm vi B. Khi vế sau dùng 还 hoặc 也: bổ sung thêm B bên cạnh A.",
        examples: [
          { zh: "除了周末以外，我每天都上班。", pinyin: "Chúle zhōumò yǐwài, wǒ měitiān dōu shàngbān.", vi: "Ngoài cuối tuần ra, ngày nào tôi cũng đi làm." },
          { zh: "除了英语以外，她还会说汉语。", pinyin: "Chúle Yīngyǔ yǐwài, tā hái huì shuō Hànyǔ.", vi: "Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Hán." },
        ],
      },
      {
        titleVi: "Bổ ngữ mức độ 极了 (jíle)",
        formula: "Tính từ / Động từ tâm lý + 极了",
        explanationVi: "Đặt sau tính từ để nhấn mạnh mức độ cao nhất, tương đương 'cực kỳ, vô cùng'.",
        examples: [
          { zh: "听到这个好消息，我高兴极了。", pinyin: "Tīngdào zhège hǎo xiāoxi, wǒ gāoxìng jíle.", vi: "Nghe thấy tin vui này, tôi vui cực kỳ." },
        ],
      },
    ],
    exercises: [
      readingComp("hsk3-l15-q1", "大卫来中国留学两年了，除了写汉字有点儿慢以外，他的汉语水平提高得很快。", "Dàwèi lái Zhōngguó liúxué liǎng nián le, chúle xiě Hànzì yǒudiǎnr màn yǐwài, tā de Hànyǔ shuǐpíng tígāo de hěn kuài.", "David sang Trung Quốc du học 2 năm rồi, ngoài viết chữ Hán hơi chậm ra, trình độ tiếng Hán của anh ấy tiến bộ rất nhanh.", "Điểm nào của David còn hơi chậm?", ["Nói tiếng Hán", "Nghe tiếng Hán", "Viết chữ Hán", "Đọc báo"], "Viết chữ Hán", "Câu nêu rõ: '除了写汉字有点儿慢以外'."),
      readingComp("hsk3-l15-q2", "除了每天上网练习听力以外，我还喜欢看中文电影来提高水平。", "Chúle měitiān shàngwǎng liànxí tīnglì yǐwài, wǒ hái xǐhuan kàn Zhōngwén diànyǐng lái tígāo shuǐpíng.", "Ngoài mỗi ngày lên mạng luyện nghe ra, tôi còn thích xem phim tiếng Trung để nâng cao trình độ.", "Người nói dùng những cách nào để nâng cao trình độ?", ["Chỉ luyện nghe trên mạng", "Chỉ xem phim tiếng Trung", "Luyện nghe trên mạng và xem phim tiếng Trung", "Đọc sách ngữ pháp"], "Luyện nghe trên mạng và xem phim tiếng Trung", "Cấu trúc '除了...以外，还...' biểu thị cả hai việc đều làm."),
      readingComp("hsk3-l15-q3", "今天的作业我已经全部完成了，并且把文件发给老师了。", "Jīntiān de zuòyè wǒ yǐjīng quánbù wánchéng le, bìngqiě bǎ wénjiàn fā gěi lǎoshī le.", "Bài tập hôm nay tôi đã hoàn thành toàn bộ, đồng thời đã gửi tệp cho thầy giáo rồi.", "Người nói đã làm gì với bài tập hôm nay?", ["Chưa làm xong", "Đã làm xong và gửi cho thầy giáo", "Quên mang đến lớp", "Nhờ bạn làm giúp"], "Đã làm xong và gửi cho thầy giáo", "'全部完成了，并且把文件发给老师了'."),
      readingComp("hsk3-l15-q4", "这个周末的天气好极了，我们去公园拍照吧。", "Zhège zhōumò de tiānqì hǎo jíle, wǒmen qù gōngyuán pāizhào ba.", "Thời tiết cuối tuần này đẹp cực kỳ, chúng ta ra công viên chụp ảnh đi.", "Thời tiết cuối tuần này thế nào?", ["Rất lạnh", "Đẹp cực kỳ", "Có mưa to", "Hơi nóng"], "Đẹp cực kỳ", "'好极了' nghĩa là tốt/đẹp cực kỳ."),
      readingComp("hsk3-l15-q5", "这个句子里除了最后一个词以外，其他词我都认识。", "Zhège jùzi lǐ chúle zuìhòu yí ge cí yǐwài, qítā cí wǒ dōu rènshi.", "Trong câu này ngoài từ cuối cùng ra, các từ khác tôi đều biết.", "Người nói không biết từ nào?", ["Từ đầu tiên", "Tất cả các từ", "Từ cuối cùng", "Hai từ giữa"], "Từ cuối cùng", "'除了最后一个词以外，其他词我都认识'."),
    ],
  },

  // ==========================================
  // BÀI 16: 我现在累得下了班就想睡觉
  // ==========================================
  {
    id: "hsk3-l16-leile",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 16,
    title: "Bài 16: Bây giờ tôi mệt đến mức tan làm là muốn ngủ ngay",
    titleZh: "第十六课：我现在累得下了班就想睡觉",
    titlePinyin: "Dì shíliù kè: Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Hoa Ngữ Ôn Ngọc BeU",
    youtubeUrl: "https://www.youtube.com/watch?v=xClihuMorsE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 16 我现在累得下了班就想睡觉",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc 如果……就…… (rúguǒ... jiù...): Nếu... thì... (câu điều kiện giả thiết).",
      "Tính từ lặp lại (AA / AABB): Ví dụ 慢慢儿 (chầm chậm), 高高兴兴 (vui vui vẻ vẻ) để tăng sắc thái miêu tả.",
    ],
    newWords: [
      { hanzi: "城市", pinyin: "chéngshì", partOfSpeech: "Danh từ", meaningVi: "thành phố", radical: "土 (Thổ)", strokeCount: 14 },
      { hanzi: "如果", pinyin: "rúguǒ", partOfSpeech: "Liên từ", meaningVi: "nếu như", radical: "女 (Nữ)", strokeCount: 14 },
      { hanzi: "认为", pinyin: "rènwéi", partOfSpeech: "Động từ", meaningVi: "cho rằng, nghĩ rằng", radical: "讠 (Ngôn)", strokeCount: 8 },
      { hanzi: "皮鞋", pinyin: "píxié", partOfSpeech: "Danh từ", meaningVi: "giày da", radical: "皮 (Bì)", strokeCount: 20 },
      { hanzi: "帽子", pinyin: "màozi", partOfSpeech: "Danh từ", meaningVi: "mũ, nón", radical: "巾 (Cân)", strokeCount: 15 },
      { hanzi: "长", pinyin: "zhǎng", partOfSpeech: "Động từ", meaningVi: "lớn lên, mọc, trông (dáng vẻ)", radical: "长 (Trường)", strokeCount: 4 },
      { hanzi: "可爱", pinyin: "kě'ài", partOfSpeech: "Tính từ", meaningVi: "đáng yêu", radical: "口 (Khẩu)", strokeCount: 15 },
      { hanzi: "米", pinyin: "mǐ", partOfSpeech: "Lượng từ/Danh từ", meaningVi: "mét; gạo", radical: "米 (Mễ)", strokeCount: 6 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Áp lực công việc",
        lines: [
          { speaker: "A", zh: "你最近怎么看起来这么累？", pinyin: "Nǐ zuìjìn zěnme kàn qǐlái zhème lèi?", vi: "Gần đây sao bạn trông mệt thế?" },
          { speaker: "B", zh: "工作太多了，我现在累得下了班就想睡觉。", pinyin: "Gōngzuò tài duō le, wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào.", vi: "Công việc nhiều quá, bây giờ tôi mệt đến mức tan làm là muốn đi ngủ ngay." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Nếu có thời gian",
        lines: [
          { speaker: "A", zh: "如果你认为这个城市不错，就留在这儿工作吧。", pinyin: "Rúguǒ nǐ rènwéi zhège chéngshì búcuò, jiù liú zài zhèr gōngzuò ba.", vi: "Nếu bạn cho rằng thành phố này ổn thì hãy ở lại đây làm việc đi." },
          { speaker: "B", zh: "好，我再仔细考虑考虑。", pinyin: "Hǎo, wǒ zài zǐxì kǎolǜ kǎolǜ.", vi: "Được, tôi sẽ cân nhắc kỹ thêm." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu điều kiện 如果……就……",
        formula: "如果 + (Giả thiết)，Chủ ngữ + 就 + (Kết quả)",
        explanationVi: "Dùng để nêu giả thiết ở vế đầu và kết quả tất yếu hoặc dự kiến ở vế sau.",
        examples: [
          { zh: "如果明天下雨，我们就不去爬山了。", pinyin: "Rúguǒ míngtiān xiàyǔ, wǒmen jiù bú qù páshān le.", vi: "Nếu ngày mai trời mưa, chúng tôi sẽ không đi leo núi nữa." },
        ],
      },
      {
        titleVi: "Bổ ngữ trạng thái với 得 (mức độ hệ quả)",
        formula: "Tính từ / Động từ + 得 + Cụm từ chỉ kết quả",
        explanationVi: "Diễn tả mức độ cao đến nỗi dẫn đến một kết quả cụ thể.",
        examples: [
          { zh: "我现在累得下了班就想睡觉。", pinyin: "Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào.", vi: "Bây giờ tôi mệt đến mức tan làm là muốn ngủ ngay." },
        ],
      },
    ],
    exercises: [
      writingStroke("hsk3-l16-q1", "米", "mǐ", "mét; gạo", "Viết hai nét chấm phẩy trên trước, sau đó viết nét ngang, sổ thẳng, phẩy và mác."),
      writingStroke("hsk3-l16-q2", "长", "zhǎng", "lớn lên, mọc", "Nét phẩy trên, ngang giữa, sổ hất, cuối cùng là nét mác."),
      writingOrder("hsk3-l16-q3", "Sắp xếp thành câu điều kiện đúng: 'Nếu bạn mệt rồi thì nghỉ ngơi đi.'", ["如果", "你", "累了", "就", "休息吧"], "如果你累了就休息吧", "Rúguǒ nǐ lèi le jiù xiūxi ba", "Cấu trúc: 如果 + Giả thiết + 就 + Kết quả."),
      writingOrder("hsk3-l16-q4", "Sắp xếp thành câu đúng: 'Đứa bé này trông thật đáng yêu.'", ["这个", "孩子", "长得", "真", "可爱"], "这个孩子长得很可爱", "Zhège háizi zhǎng de zhēn kě'ài", "Động từ 长 + 得 + Tính từ miêu tả ngoại hình."),
      writingTwoSentences("hsk3-l16-q5", "认为", "rènwéi", "cho rằng, nghĩ rằng", "Đặt 2 câu nêu quan điểm cá nhân có sử dụng động từ 认为."),
    ],
  },

  // ==========================================
  // BÀI 17: 谁都有办法看好你的“病”
  // ==========================================
  {
    id: "hsk3-l17-zhihao",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 17,
    title: "Bài 17: Ai cũng có cách chữa khỏi \"bệnh\" của bạn",
    titleZh: "第十七课：谁都有办法看好你的“病”",
    titlePinyin: "Dì shíqī kè: Shéi dōu yǒu bànfǎ kànhǎo nǐ de 'bìng'",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=ffm1oX-oc4Y",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 17 谁都有办法看好你的“病”",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn dùng phiếm chỉ kết hợp với 都 (dōu): 谁都 (ai cũng), 什么都 (cái gì cũng), 哪儿都 (đâu cũng).",
      "Động từ lặp lại biểu thị thời gian ngắn hoặc thử làm: 看看, 休息休息, 问问.",
    ],
    newWords: [
      { hanzi: "请假", pinyin: "qǐngjià", partOfSpeech: "Động từ", meaningVi: "xin nghỉ phép", radical: "讠 (Ngôn)", strokeCount: 21 },
      { hanzi: "一共", pinyin: "yígòng", partOfSpeech: "Phó từ", meaningVi: "tổng cộng", radical: "一 (Nhất)", strokeCount: 7 },
      { hanzi: "邻居", pinyin: "línjū", partOfSpeech: "Danh từ", meaningVi: "hàng xóm", radical: "阝 (Ấp)", strokeCount: 15 },
      { hanzi: "后来", pinyin: "hòulái", partOfSpeech: "Danh từ", meaningVi: "sau này, về sau", radical: "口 (Khẩu)", strokeCount: 13 },
      { hanzi: "爱好", pinyin: "àihào", partOfSpeech: "Danh từ", meaningVi: "sở thích", radical: "爫 (Trảo)", strokeCount: 16 },
      { hanzi: "办法", pinyin: "bànfǎ", partOfSpeech: "Danh từ", meaningVi: "cách, biện pháp", radical: "力 (Lực)", strokeCount: 12 },
      { hanzi: "饱", pinyin: "bǎo", partOfSpeech: "Tính từ", meaningVi: "no", radical: "饣 (Thực)", strokeCount: 8 },
      { hanzi: "为了", pinyin: "wèile", partOfSpeech: "Giới từ", meaningVi: "để, vì (mục đích)", radical: "丶 (Chủ)", strokeCount: 6 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Xin nghỉ phép",
        lines: [
          { speaker: "A", zh: "经理，我这周想请假两天，家里有点儿事。", pinyin: "Jīnglǐ, wǒ zhè zhōu xiǎng qǐngjià liǎng tiān, jiālǐ yǒudiǎnr shì.", vi: "Giám đốc, tuần này tôi muốn xin nghỉ phép hai ngày, nhà có chút việc." },
          { speaker: "B", zh: "好的，你一共请几天？把工作安排好就行。", pinyin: "Hǎo de, nǐ yígòng qǐng jǐ tiān? Bǎ gōngzuò ānpái hǎo jiù xíng.", vi: "Được, bạn nghỉ tổng cộng mấy ngày? Sắp xếp ổn thỏa công việc là được." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chữa \"bệnh\"",
        lines: [
          { speaker: "A", zh: "我最近什么都不想吃，也没什么爱好。", pinyin: "Wǒ zuìjìn shénme dōu bù xiǎng chī, yě méi shénme àihào.", vi: "Gần đây tôi chẳng muốn ăn gì cả, cũng chẳng có sở thích gì." },
          { speaker: "B", zh: "你只是太累了，多运动、多休息，谁都有办法看好你的“病”。", pinyin: "Nǐ zhǐshì tài lèi le, duō yùndòng, duō xiūxi, shéi dōu yǒu bànfǎ kànhǎo nǐ de 'bìng'.", vi: "Bạn chỉ là quá mệt thôi, vận động nhiều, nghỉ ngơi nhiều, ai cũng có cách chữa khỏi \"bệnh\" của bạn." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Đại từ nghi vấn + 都 (Phiếm chỉ)",
        formula: "谁 / 什么 / 哪儿 / 什么时候 + 都 + Vị ngữ",
        explanationVi: "Đại từ nghi vấn không dùng để hỏi mà chỉ toàn bộ đối tượng trong phạm vi nói tới.",
        examples: [
          { zh: "谁都有办法解决这个问题。", pinyin: "Shéi dōu yǒu bànfǎ jiějué zhège wèntí.", vi: "Ai cũng có cách giải quyết vấn đề này." },
          { zh: "我太累了，哪儿都不想去。", pinyin: "Wǒ tài lèi le, nǎr dōu bù xiǎng qù.", vi: "Tôi mệt quá, chẳng muốn đi đâu cả." },
        ],
      },
      {
        titleVi: "Giới từ 为了 (wèile) chỉ mục đích",
        formula: "为了 + Mục đích，Chủ ngữ + Hành động",
        explanationVi: "Thường đặt ở đầu câu để nêu rõ mục đích của hành động ở vế sau.",
        examples: [
          { zh: "为了身体健康，他每天都跑步。", pinyin: "Wèile shēntǐ jiànkāng, tā měitiān dōu pǎobù.", vi: "Vì sức khỏe, ngày nào anh ấy cũng chạy bộ." },
        ],
      },
    ],
    exercises: [
      listeningMcq("hsk3-l17-q1", "为了身体健康，他每天早上都去公园跑步。", "Wèile shēntǐ jiànkāng, tā měitiān zǎoshang dōu qù gōngyuán pǎobù.", "Anh ấy chạy bộ mỗi sáng nhằm mục đích gì?", ["Để gặp bạn", "Để cơ thể khỏe mạnh", "Để đi làm sớm", "Để giảm chi phí"], "Để cơ thể khỏe mạnh", "'为了身体健康' nghĩa là vì sức khỏe."),
      listeningMcq("hsk3-l17-q2", "这家饭馆的菜很好吃，我已经吃饱了。", "Zhè jiā fànguǎn de cài hěn hǎochī, wǒ yǐjīng chībǎo le.", "Người nói hiện tại cảm thấy thế nào?", ["Vẫn còn đói", "Đã ăn no rồi", "Không thích món ăn", "Muốn gọi thêm món"], "Đã ăn no rồi", "'吃饱了' nghĩa là đã ăn no rồi."),
      listeningFill("hsk3-l17-q3", "这个月我一共请了三天假。", "这个月我____请了三天假。", "Zhège yuè wǒ ____ qǐng le sān tiān jià.", "Nghe và điền phó từ còn thiếu (2 chữ Hán):", "一共", "Từ cần điền là 一共 (yígòng — tổng cộng)."),
      listeningDialogue("hsk3-l17-q4", "A：你和你的新邻居熟悉吗？ B：很熟悉，我们有相同的爱好。", "A: Nǐ hé nǐ de xīn línjū shúxi ma? B: Hěn shúxi, wǒmen yǒu xiāngtóng de àihào.", "Người B và hàng xóm mới có quan hệ thế nào?", ["Không quen biết", "Rất thân quen và có chung sở thích", "Hay cãi nhau", "Chưa từng gặp mặt"], "Rất thân quen và có chung sở thích", "B nói: '很熟悉，我们有相同的爱好'."),
      listeningDialogue("hsk3-l17-q5", "A：这个问题太难了，我没办法解决。 B：别着急，我们一起想办法。", "A: Zhège wèntí tài nán le, wǒ méi bànfǎ jiějué. B: Bié zháojí, wǒmen yìqǐ xiǎng bànfǎ.", "Người B khuyên người A điều gì?", ["Bỏ cuộc đi", "Đừng lo, cùng nhau nghĩ cách", "Hỏi thầy giáo", "Để ngày mai làm"], "Đừng lo, cùng nhau nghĩ cách", "B nói: '别着急，我们一起想办法'."),
    ],
  },

  // ==========================================
  // BÀI 18: 我相信他们会同意的
  // ==========================================
  {
    id: "hsk3-l18-xiangxin",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 18,
    title: "Bài 18: Tôi tin họ sẽ đồng ý",
    titleZh: "第十八课：我相信他们会同意的",
    titlePinyin: "Dì shíbā kè: Wǒ xiāngxìn tāmen huì tóngyì de",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=m-mw_BjO2Tk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 18 我相信他们会同意的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc 只要……就…… (zhǐyào... jiù...): Chỉ cần... thì... (điều kiện đủ).",
      "Phân biệt 关于 (guānyú — về, liên quan đến) thường đứng trước chủ ngữ hoặc làm định ngữ.",
    ],
    newWords: [
      { hanzi: "向", pinyin: "xiàng", partOfSpeech: "Giới từ", meaningVi: "hướng về, đối với", radical: "口 (Khẩu)", strokeCount: 6 },
      { hanzi: "万", pinyin: "wàn", partOfSpeech: "Số từ", meaningVi: "vạn (mười nghìn)", radical: "一 (Nhất)", strokeCount: 3 },
      { hanzi: "只", pinyin: "zhī", partOfSpeech: "Lượng từ", meaningVi: "con (động vật), chiếc", radical: "口 (Khẩu)", strokeCount: 5 },
      { hanzi: "同意", pinyin: "tóngyì", partOfSpeech: "Động từ", meaningVi: "đồng ý", radical: "口 (Khẩu)", strokeCount: 19 },
      { hanzi: "相信", pinyin: "xiāngxìn", partOfSpeech: "Động từ", meaningVi: "tin tưởng", radical: "目 (Mục)", strokeCount: 18 },
      { hanzi: "关于", pinyin: "guānyú", partOfSpeech: "Giới từ", meaningVi: "về, liên quan đến", radical: "八 (Bát)", strokeCount: 9 },
      { hanzi: "机会", pinyin: "jīhuì", partOfSpeech: "Danh từ", meaningVi: "cơ hội", radical: "木 (Mộc)", strokeCount: 12 },
      { hanzi: "国家", pinyin: "guójiā", partOfSpeech: "Danh từ", meaningVi: "đất nước, quốc gia", radical: "囗 (Vi)", strokeCount: 18 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bàn về kế hoạch mới",
        lines: [
          { speaker: "A", zh: "关于这个新计划，你觉得大家会同意吗？", pinyin: "Guānyú zhège xīn jìhuà, nǐ juéde dàjiā huì tóngyì ma?", vi: "Về kế hoạch mới này, bạn thấy mọi người sẽ đồng ý không?" },
          { speaker: "B", zh: "我相信他们会同意的，只要我们把理由说清楚就行。", pinyin: "Wǒ xiāngxìn tāmen huì tóngyì de, zhǐyào wǒmen bǎ lǐyóu shuō qīngchu jiù xíng.", vi: "Tôi tin họ sẽ đồng ý, chỉ cần chúng ta nói rõ lý do là được." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Cơ hội du lịch",
        lines: [
          { speaker: "A", zh: "这次去别的国家学习是一次很难得的机会。", pinyin: "Zhè cì qù biéde guójiā xuéxí shì yí cì hěn nándé de jīhuì.", vi: "Lần này đi nước khác học tập là một cơ hội rất hiếm có." },
          { speaker: "B", zh: "是的，我一定会好好珍惜。", pinyin: "Shì de, wǒ yídìng huì hǎohāo zhēnxī.", vi: "Đúng vậy, tôi nhất định sẽ trân trọng thật tốt." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 只要……就…… (Điều kiện đủ)",
        formula: "只要 + Điều kiện，Chủ ngữ + 就 + Kết quả",
        explanationVi: "Biểu thị chỉ cần đáp ứng điều kiện nêu ra thì kết quả sẽ đạt được.",
        examples: [
          { zh: "只要努力学习，就一定能考好。", pinyin: "Zhǐyào nǔlì xuéxí, jiù yídìng néng kǎohǎo.", vi: "Chỉ cần chăm chỉ học tập, nhất định sẽ thi tốt." },
        ],
      },
      {
        titleVi: "Giới từ 关于 (guānyú)",
        formula: "关于 + Chủ đề，Chủ ngữ + Vị ngữ",
        explanationVi: "Dùng để dẫn ra phạm vi hoặc chủ đề được nhắc tới trong câu.",
        examples: [
          { zh: "关于这个问题，我们明天再讨论。", pinyin: "Guānyú zhège wèntí, wǒmen míngtiān zài tǎolùn.", vi: "Về vấn đề này, ngày mai chúng ta thảo luận tiếp." },
        ],
      },
    ],
    exercises: [
      speakingShadowing("hsk3-l18-q1", "我相信他们会同意的。", "Wǒ xiāngxìn tāmen huì tóngyì de.", "Luyện phát âm câu khẳng định thể hiện niềm tin.", ["Thanh 1 + Thanh 4: xiāngxìn", "Thanh 2 + Thanh 4: tóngyì"], "Nhấn giọng nhẹ ở 相信 (xiāngxìn) để biểu đạt sự tin tưởng."),
      speakingShadowing("hsk3-l18-q2", "只要努力，就一定有机会。", "Zhǐyào nǔlì, jiù yídìng yǒu jīhuì.", "Luyện nói cấu trúc 只要……就…….", ["Thanh 3 + Thanh 4: zhǐyào, nǔlì", "Biến điệu 一: yídìng"], "Ngắt nhịp rõ ở dấu phẩy sau 努力."),
      speakingShadowing("hsk3-l18-q3", "关于这个问题，我同意你的看法。", "Guānyú zhège wèntí, wǒ tóngyì nǐ de kànfǎ.", "Luyện phát âm giới từ 关于 ở đầu câu.", ["Thanh 1 + Thanh 2: guānyú", "Thanh 4 + Thanh 3: kànfǎ"], "Đọc liền mạch cụm '关于这个问题'."),
      speakingShadowing("hsk3-l18-q4", "我向东走了两百米。", "Wǒ xiàng dōng zǒu le liǎng bǎi mǐ.", "Luyện phát âm giới từ chỉ phương hướng 向.", ["Thanh 4: xiàng", "Biến điệu 3+3: liǎng bǎi → liáng bǎi"], "Chú ý phát âm bật hơi nhẹ và rõ thanh 4 ở 向."),
      speakingShadowing("hsk3-l18-q5", "这个国家有很多有名的城市。", "Zhège guójiā yǒu hěn duō yǒumíng de chéngshì.", "Luyện nói câu miêu tả về quốc gia và thành phố.", ["Thanh 2 + Thanh 1: guójiā", "Biến điệu: yǒu hěn → yóu hěn"], "Giữ nhịp điệu đều và rõ âm uốn lưỡi ở 城市 (chéngshì)."),
    ],
  },

  // ==========================================
  // BÀI 19: 你没看出来吗
  // ==========================================
  {
    id: "hsk3-l19-kanbujian",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 19,
    title: "Bài 19: Bạn không nhìn ra sao?",
    titleZh: "第十九课：你没看出来吗",
    titlePinyin: "Dì shíjiǔ kè: Nǐ méi kàn chūlai ma",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Mimi",
    youtubeUrl: "https://www.youtube.com/watch?v=_k7RCL01q1Y",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 19 你没看出来吗",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Nghĩa mở rộng của bổ ngữ xu hướng: 出来 (nhận ra, phân biệt ra — 看出来, 听出来), 起来 (bắt đầu — 笑起来), 下去 (tiếp tục — 说下去).",
      "Cấu trúc 使 (shǐ — khiến cho, làm cho) thường dùng trong văn viết hoặc diễn đạt trang trọng.",
    ],
    newWords: [
      { hanzi: "耳朵", pinyin: "ěrduo", partOfSpeech: "Danh từ", meaningVi: "tai", radical: "耳 (Nhĩ)", strokeCount: 12 },
      { hanzi: "脸", pinyin: "liǎn", partOfSpeech: "Danh từ", meaningVi: "khuôn mặt", radical: "月 (Nhục)", strokeCount: 11 },
      { hanzi: "短", pinyin: "duǎn", partOfSpeech: "Tính từ", meaningVi: "ngắn", radical: "矢 (Thỉ)", strokeCount: 12 },
      { hanzi: "马", pinyin: "mǎ", partOfSpeech: "Danh từ", meaningVi: "con ngựa", radical: "马 (Mã)", strokeCount: 3 },
      { hanzi: "张", pinyin: "zhāng", partOfSpeech: "Lượng từ", meaningVi: "tờ, tấm, bức (ảnh, giấy)", radical: "弓 (Cung)", strokeCount: 7 },
      { hanzi: "位", pinyin: "wèi", partOfSpeech: "Lượng từ", meaningVi: "vị (lượng từ kính trọng cho người)", radical: "亻 (Nhân đứng)", strokeCount: 7 },
      { hanzi: "蓝", pinyin: "lán", partOfSpeech: "Tính từ", meaningVi: "màu xanh lam", radical: "艹 (Thảo)", strokeCount: 13 },
      { hanzi: "秋", pinyin: "qiū", partOfSpeech: "Danh từ", meaningVi: "mùa thu", radical: "禾 (Hòa)", strokeCount: 9 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Xem ảnh cũ",
        lines: [
          { speaker: "A", zh: "这张照片里的人是谁？我真没看出来。", pinyin: "Zhè zhāng zhàopiàn lǐ de rén shì shéi? Wǒ zhēn méi kàn chūlai.", vi: "Người trong bức ảnh này là ai thế? Tôi thật sự không nhận ra." },
          { speaker: "B", zh: "你没看出来吗？这是十年前的我，那时候我头发很短。", pinyin: "Nǐ méi kàn chūlai ma? Zhè shì shí nián qián de wǒ, nà shíhou wǒ tóufa hěn duǎn.", vi: "Bạn không nhìn ra sao? Đây là tôi của 10 năm trước, hồi đó tóc tôi ngắn lắm." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Mùa thu",
        lines: [
          { speaker: "A", zh: "秋天到了，天蓝极了。", pinyin: "Qiūtiān dào le, tiān lán jíle.", vi: "Mùa thu đến rồi, bầu trời xanh cực kỳ." },
          { speaker: "B", zh: "天气也凉快起来了，最适合出去旅游。", pinyin: "Tiānqì yě liángkuai qǐlai le, zuì shìhé chūqù lǚyóu.", vi: "Thời tiết cũng bắt đầu mát mẻ lên rồi, thích hợp nhất để đi du lịch." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Nghĩa mở rộng của 出来 (chūlai)",
        formula: "Động từ (看 / 听 / 想 / 写) + 出来",
        explanationVi: "Biểu thị thông qua hành động mà nhận diện, phân biệt hoặc tạo ra một kết quả từ chưa rõ sang rõ ràng.",
        examples: [
          { zh: "我听出来这是你的声音了。", pinyin: "Wǒ tīng chūlai zhè shì nǐ de shēngyīn le.", vi: "Tôi nghe ra đây là giọng của bạn rồi." },
          { zh: "你没看出来吗？", pinyin: "Nǐ méi kàn chūlai ma?", vi: "Bạn không nhìn ra sao?" },
        ],
      },
      {
        titleVi: "Nghĩa mở rộng của 起来 (qǐlai)",
        formula: "Động từ / Tính từ + 起来",
        explanationVi: "Biểu thị hành động bắt đầu diễn ra và tiếp diễn, hoặc trạng thái bắt đầu chuyển biến.",
        examples: [
          { zh: "听到这个笑话，大家都笑起来了。", pinyin: "Tīngdào zhège xiàohua, dàjiā dōu xiào qǐlai le.", vi: "Nghe chuyện cười này, mọi người đều bật cười." },
        ],
      },
    ],
    exercises: [
      readingComp("hsk3-l19-q1", "好久不见，他瘦了很多，我刚才差点儿没认出来。", "Hǎojiǔ bújiàn, tā shòu le hěn duō, wǒ gāngcái chàdiǎnr méi rèn chūlai.", "Lâu rồi không gặp, anh ấy gầy đi rất nhiều, vừa nãy tôi suýt nữa không nhận ra.", "Tại sao người nói suýt không nhận ra anh ấy?", ["Vì anh ấy đeo kính", "Vì anh ấy gầy đi nhiều", "Vì trời quá tối", "Vì anh ấy cắt tóc ngắn"], "Vì anh ấy gầy đi nhiều", "'他瘦了很多' nghĩa là anh ấy gầy đi rất nhiều."),
      readingComp("hsk3-l19-q2", "秋天来了，天气慢慢凉快起来，天也变得特别蓝。", "Qiūtiān lái le, tiānqì mànmàn liángkuai qǐlai, tiān yě biànde tèbié lán.", "Mùa thu đến rồi, thời tiết dần mát mẻ lên, bầu trời cũng trở nên đặc biệt xanh.", "Mùa thu có đặc điểm gì trong đoạn văn?", ["Trời nóng và nhiều mây", "Thời tiết mát mẻ và trời xanh", "Trời có tuyết rơi", "Trời mưa liên tục"], "Thời tiết mát mẻ và trời xanh", "'凉快起来，天也变得特别蓝'."),
      readingComp("hsk3-l19-q3", "这位老师讲课很有意思，大家都认真地听了起来。", "Zhè wèi lǎoshī jiǎngkè hěn yǒuyìsi, dàjiā dōu rènzhēn de tīng le qǐlai.", "Vị thầy giáo này giảng bài rất thú vị, mọi người đều bắt đầu chăm chú lắng nghe.", "Thái độ của mọi người khi nghe giảng thế nào?", ["Rất buồn ngủ", "Bắt đầu chăm chú lắng nghe", "Nói chuyện riêng", "Muốn tan học sớm"], "Bắt đầu chăm chú lắng nghe", "'认真地听了起来' nghĩa là bắt đầu chăm chú nghe."),
      readingComp("hsk3-l19-q4", "桌子上放着三张风景照片，都是我去年秋天拍的。", "Zhuōzi shàng fàng zhe sān zhāng fēngjǐng zhàopiàn, dōu shì wǒ qùnián qiūtiān pāi de.", "Trên bàn đặt ba bức ảnh phong cảnh, đều là tôi chụp mùa thu năm ngoái.", "Ba bức ảnh trên bàn được chụp khi nào?", ["Mùa xuân năm nay", "Mùa thu năm ngoái", "Mùa hè năm ngoái", "Mùa đông năm nay"], "Mùa thu năm ngoái", "'去年秋天拍的' nghĩa là chụp vào mùa thu năm ngoái."),
      readingComp("hsk3-l19-q5", "我一接电话就听出来是妈妈的声音了。", "Wǒ yì jiē diànhuà jiù tīng chūlai shì māma de shēngyīn le.", "Tôi vừa nghe máy là nhận ra ngay giọng của mẹ.", "Người nói nhận ra giọng mẹ bằng cách nào?", ["Nhìn thấy tên trên màn hình", "Vừa nghe máy là nhận ra giọng", "Mẹ tự giới thiệu", "Bố nói cho biết"], "Vừa nghe máy là nhận ra giọng", "'一接电话就听出来' nghĩa là vừa nghe máy là nhận ra ngay."),
    ],
  },

  // ==========================================
  // BÀI 20: 我被他影响了
  // ==========================================
  {
    id: "hsk3-l20-yingxiang",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    lessonNumber: 20,
    title: "Bài 20: Tôi bị anh ấy ảnh hưởng rồi",
    titleZh: "第二十课：我被他影响了",
    titlePinyin: "Dì èrshí kè: Wǒ bèi tā yǐngxiǎng le",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Ka2YJgVKWZk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 3 Bài 20 我被他影响了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu bị động chữ 被 (bèi): Chủ ngữ (người/vật chịu tác động) + 被 + (Tác nhân) + Động từ + Thành phần khác. Tác nhân có thể lược bỏ.",
      "Cấu trúc 只有……才…… (zhǐyǒu... cái...): Chỉ có... mới... (điều kiện duy nhất/cần thiết).",
    ],
    newWords: [
      { hanzi: "照相机", pinyin: "zhàoxiàngjī", partOfSpeech: "Danh từ", meaningVi: "máy ảnh", radical: "灬 (Hỏa)", strokeCount: 32 },
      { hanzi: "被", pinyin: "bèi", partOfSpeech: "Giới từ", meaningVi: "bị, được (câu bị động)", radical: "衤 (Y)", strokeCount: 10 },
      { hanzi: "难过", pinyin: "nánguò", partOfSpeech: "Tính từ", meaningVi: "buồn bã, khó chịu", radical: "又 (Hựu)", strokeCount: 16 },
      { hanzi: "东", pinyin: "dōng", partOfSpeech: "Danh từ", meaningVi: "phía đông", radical: "一 (Nhất)", strokeCount: 5 },
      { hanzi: "信用卡", pinyin: "xìnyòngkǎ", partOfSpeech: "Danh từ", meaningVi: "thẻ tín dụng", radical: "亻 (Nhân đứng)", strokeCount: 19 },
      { hanzi: "关心", pinyin: "guānxīn", partOfSpeech: "Động từ", meaningVi: "quan tâm", radical: "八 (Bát)", strokeCount: 10 },
      { hanzi: "只有", pinyin: "zhǐyǒu", partOfSpeech: "Liên từ", meaningVi: "chỉ có", radical: "口 (Khẩu)", strokeCount: 11 },
      { hanzi: "成绩", pinyin: "chéngjì", partOfSpeech: "Danh từ", meaningVi: "thành tích, điểm số", radical: "戈 (Qua)", strokeCount: 17 },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bị ảnh hưởng thói quen",
        lines: [
          { speaker: "A", zh: "你以前不喝咖啡，现在怎么每天都喝？", pinyin: "Nǐ yǐqián bù hē kāfēi, xiànzài zěnme měitiān dōu hē?", vi: "Trước đây bạn không uống cà phê, sao giờ ngày nào cũng uống thế?" },
          { speaker: "B", zh: "我被他影响了，他每天早上都泡咖啡。", pinyin: "Wǒ bèi tā yǐngxiǎng le, tā měitiān zǎoshang dōu pào kāfēi.", vi: "Tôi bị anh ấy ảnh hưởng rồi, sáng nào anh ấy cũng pha cà phê." },
        ],
      },
      {
        titleVi: "Bài khóa 2: Quan tâm đến thành tích",
        lines: [
          { speaker: "A", zh: "这次考试成绩不太好，我有点儿难过。", pinyin: "Zhè cì kǎoshì chéngjì bú tài hǎo, wǒ yǒudiǎnr nánguò.", vi: "Điểm thi lần này không tốt lắm, tôi hơi buồn." },
          { speaker: "B", zh: "别难过，只有平时多努力，考试才能取得好成绩。", pinyin: "Bié nánguò, zhǐyǒu píngshí duō nǔlì, kǎoshì cái néng qǔdé hǎo chéngjì.", vi: "Đừng buồn, chỉ có ngày thường nỗ lực nhiều thì đi thi mới đạt thành tích tốt được." },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu bị động chữ 被 (bèi)",
        formula: "Đối tượng chịu tác động + 被 + (Tác nhân) + Động từ + 了 / Bổ ngữ",
        explanationVi: "Dùng để nhấn mạnh chủ ngữ chịu tác động từ hành động nào đó. Trong khẩu ngữ có thể thay 被 bằng 叫 hoặc 让 (nhưng phải có tác nhân đi kèm).",
        examples: [
          { zh: "我被他影响了。", pinyin: "Wǒ bèi tā yǐngxiǎng le.", vi: "Tôi bị anh ấy ảnh hưởng rồi." },
          { zh: "我的照相机被弟弟借走了。", pinyin: "Wǒ de zhàoxiàngjī bèi dìdi jiè zǒu le.", vi: "Máy ảnh của tôi bị em trai mượn đi rồi." },
        ],
      },
      {
        titleVi: "Cấu trúc 只有……才…… (Điều kiện duy nhất)",
        formula: "只有 + Điều kiện duy nhất，Chủ ngữ + 才 + Kết quả",
        explanationVi: "Biểu thị điều kiện bắt buộc duy nhất để đạt được kết quả ở vế sau.",
        examples: [
          { zh: "只有多练习，才能提高汉语水平。", pinyin: "Zhǐyǒu duō liànxí, cái néng tígāo Hànyǔ shuǐpíng.", vi: "Chỉ có luyện tập nhiều mới có thể nâng cao trình độ tiếng Hán." },
        ],
      },
    ],
    exercises: [
      writingStroke("hsk3-l20-q1", "东", "dōng", "phía đông", "Viết nét ngang, phẩy gập, sổ móc ở giữa, cuối cùng là hai nét chấm hai bên."),
      writingStroke("hsk3-l20-q2", "被", "bèi", "bị, được", "Viết bộ Y (衤) bên trái trước, sau đó viết chữ 皮 bên phải."),
      writingOrder("hsk3-l20-q3", "Sắp xếp thành câu bị động đúng: 'Máy ảnh bị anh ấy làm hỏng rồi.'", ["照相机", "被", "他", "弄坏", "了"], "照相机被他弄坏了", "Zhàoxiàngjī bèi tā nònghuài le", "Cấu trúc: Đối tượng (照相机) + 被 + Tác nhân (他) + Động từ kết quả (弄坏) + 了."),
      writingOrder("hsk3-l20-q4", "Sắp xếp thành câu đúng: 'Chỉ có chăm chỉ mới có thành tích tốt.'", ["只有", "努力", "才", "有", "好成绩"], "只有努力才有好成绩", "Zhǐyǒu nǔlì cái yǒu hǎo chéngjì", "Cấu trúc: 只有 + Điều kiện + 才 + Kết quả."),
      writingTwoSentences("hsk3-l20-q5", "关心", "guānxīn", "quan tâm", "Đặt 2 câu sử dụng động từ 关心 (ví dụ: quan tâm gia đình, quan tâm đồng nghiệp/sức khỏe)."),
    ],
  },
];
