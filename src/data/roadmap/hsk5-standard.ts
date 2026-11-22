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

export const HSK5_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 爱的细节 (Những chi tiết của tình yêu)
  // ==========================================
  {
    id: "hsk5-l1-ai",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Những chi tiết của tình yêu",
    titleZh: "第一课：爱的细节",
    titlePinyin: "Dì yī kè: Ài de xìjié",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=qrhkN_a6L44",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 1 爱的细节",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Động từ 临 (lín) kết hợp với động từ khác biểu thị 'sắp sửa, ngay trước lúc' (ví dụ: 临走 trước khi đi, 临睡前 trước khi ngủ).",
      "Phó từ 竟然 (jìngrán — vậy mà lại, không ngờ lại) nhấn mạnh sự ngạc nhiên trước kết quả trái với dự đoán.",
      "Thành ngữ 微不足道 (wēi bù zú dào — nhỏ bé không đáng kể) thường dùng làm định ngữ hoặc vị ngữ trong văn viết HSK 5.",
    ],
    newWords: [
      {
        hanzi: "细节",
        pinyin: "xìjié",
        partOfSpeech: "Danh từ",
        meaningVi: "chi tiết, tiểu tiết",
        radical: "纟 (Mịch)",
        strokeCount: 13,
      },
      {
        hanzi: "珍惜",
        pinyin: "zhēnxī",
        partOfSpeech: "Động từ",
        meaningVi: "trân trọng, quý trọng",
        radical: "王 (Ngọc)",
        strokeCount: 20,
      },
      {
        hanzi: "竟然",
        pinyin: "jìngrán",
        partOfSpeech: "Phó từ",
        meaningVi: "vậy mà lại, không ngờ lại",
        radical: "立 (Lập)",
        strokeCount: 23,
      },
      {
        hanzi: "体贴",
        pinyin: "tǐtiē",
        partOfSpeech: "Tính từ",
        meaningVi: "chu đáo, ân cần, thấu hiểu",
        radical: "亻 (Nhân đứng)",
        strokeCount: 16,
      },
      {
        hanzi: "忽略",
        pinyin: "hūlüè",
        partOfSpeech: "Động từ",
        meaningVi: "bỏ qua, lơ là, xem nhẹ",
        radical: "心 (Tâm)",
        strokeCount: 19,
      },
      {
        hanzi: "微不足道",
        pinyin: "wēi bù zú dào",
        partOfSpeech: "Thành ngữ",
        meaningVi: "nhỏ bé không đáng kể",
        radical: "彳 (Xích)",
        strokeCount: 36,
      },
      {
        hanzi: "陪伴",
        pinyin: "péibàn",
        partOfSpeech: "Động từ",
        meaningVi: "ở bên cạnh, đồng hành",
        radical: "阝 (Phụ)",
        strokeCount: 17,
      },
      {
        hanzi: "感动",
        pinyin: "gǎndòng",
        partOfSpeech: "Động từ/Tính từ",
        meaningVi: "cảm động, làm cảm động",
        radical: "心 (Tâm)",
        strokeCount: 19,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Sự quan tâm từ những điều nhỏ bé",
        lines: [
          {
            speaker: "林娜",
            zh: "听说你和丈夫结婚十年了，感情还像刚认识时一样好，有什么秘诀吗？",
            pinyin: "Tīngshuō nǐ hé zhàngfu jiéhūn shí nián le, gǎnqíng hái xiàng gāng rènshi shí yīyàng hǎo, yǒu shénme mìjué ma?",
            vi: "Nghe nói chị và chồng kết hôn mười năm rồi mà tình cảm vẫn tốt như lúc mới quen, có bí quyết gì không?",
          },
          {
            speaker: "王芳",
            zh: "其实没什么特别的，就是彼此都很在意生活中的细节，从不忽略对方的感受。",
            pinyin: "Qíshí méi shénme tèbié de, jiùshì bǐcǐ dōu hěn zàiyì shēnghuó zhōng de xìjié, cóng bù hūlüè duìfāng de gǎnshòu.",
            vi: "Thật ra chẳng có gì đặc biệt, chỉ là cả hai đều rất để tâm đến những chi tiết trong cuộc sống, chưa bao giờ bỏ qua cảm xúc của đối phương.",
          },
          {
            speaker: "林娜",
            zh: "比如呢？能给我举个例子吗？",
            pinyin: "Bǐrú ne? Néng gěi wǒ jǔ ge lìzi ma?",
            vi: "Ví dụ như gì ạ? Chị có thể cho em một ví dụ không?",
          },
          {
            speaker: "王芳",
            zh: "上周我加班到深夜，回到家时他竟然还亮着灯等我，桌子上放着一杯温牛奶。这些微不足道的小事最让我感动。",
            pinyin: "Shàng zhōu wǒ jiābān dào shēnyè, huídào jiā shí tā jìngrán hái liàngzhe dēng děng wǒ, zhuōzi shàng fàngzhe yī bēi wēn niúnǎi. Zhèxiē wēi bù zú dào de xiǎoshì zuì ràng wǒ gǎndòng.",
            vi: "Tuần trước chị tăng ca đến đêm khuya, lúc về nhà anh ấy vậy mà vẫn bật đèn chờ chị, trên bàn đặt một ly sữa ấm. Những việc nhỏ không đáng kể này lại khiến chị cảm động nhất.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trân trọng sự đồng hành của cha mẹ",
        lines: [
          {
            speaker: "张明",
            zh: "爸爸，您临走前给我包的饺子我已经放进冰箱了。",
            pinyin: "Bàba, nín lín zǒu qián gěi wǒ bāo de jiǎozi wǒ yǐjīng fàng jìn bīngxiāng le.",
            vi: "Bố ơi, sủi cảo bố gói cho con trước khi đi con đã cất vào tủ lạnh rồi ạ.",
          },
          {
            speaker: "父亲",
            zh: "好，工作再忙也要按时吃饭。平时我们不在身边，你要学会照顾自己。",
            pinyin: "Hǎo, gōngzuò zài máng yě yào ànshí chīfàn. Píngshí wǒmen bù zài shēnbiān, nǐ yào xuéhuì zhàogù zìjǐ.",
            vi: "Ừ, công việc có bận mấy cũng phải ăn cơm đúng giờ. Bình thường bố mẹ không ở bên cạnh, con phải học cách tự chăm sóc bản thân.",
          },
          {
            speaker: "张明",
            zh: "以前我总觉得父母的唠叨很烦，现在才明白，那是最体贴的爱。以后我一定多抽出时间陪伴你们。",
            pinyin: "Yǐqián wǒ zǒng juéde fùmǔ de láodao hěn fán, xiànzài cái míngbai, nà shì zuì tǐtiē de ài. Yǐhòu wǒ yīdìng duō chōuchū shíjiān péibàn nǐmen.",
            vi: "Trước đây con cứ thấy lời cằn nhằn của bố mẹ thật phiền, giờ mới hiểu đó là tình yêu chu đáo nhất. Sau này con nhất định sẽ dành nhiều thời gian ở bên bố mẹ hơn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 竟然 (jìngrán) biểu thị sự bất ngờ",
        formula: "Chủ ngữ + 竟然 + Động từ / Tính từ",
        explanationVi:
          "竟然 dùng trong văn viết và khẩu ngữ trang trọng để diễn tả một sự việc xảy ra hoàn toàn ngoài dự đoán, tương đương 'vậy mà lại, không ngờ lại'.",
        examples: [
          {
            zh: "这么难的问题，他竟然十分钟就解决了。",
            pinyin: "Zhème nán de wèntí, tā jìngrán shí fēnzhōng jiù jiějué le.",
            vi: "Vấn đề khó như vậy mà anh ấy không ngờ chỉ mất mười phút đã giải quyết xong.",
          },
          {
            zh: "分别十年后，我们竟然在机场偶遇了。",
            pinyin: "Fēnbié shí nián hòu, wǒmen jìngrán zài jīchǎng ǒuyù le.",
            vi: "Sau mười năm xa cách, chúng tôi vậy mà lại tình cờ gặp nhau ở sân bay.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 临 + Động từ (+ 前/时) — Ngay trước lúc...",
        formula: "临 + Động từ đơn âm tiết (+ 前 / 时)",
        explanationVi:
          "临 đứng trước động từ đơn âm tiết (走, 睡, 考, 毕业...) để chỉ thời điểm sát ngay trước khi hành động đó diễn ra.",
        examples: [
          {
            zh: "临走前，她反复叮嘱我要注意安全。",
            pinyin: "Lín zǒu qián, tā fǎnfù dīngzhǔ wǒ yào zhùyì ānquán.",
            vi: "Trước lúc đi, cô ấy dặn đi dặn lại tôi phải chú ý an toàn.",
          },
          {
            zh: "临睡前喝一杯热牛奶有助于提高睡眠质量。",
            pinyin: "Lín shuì qián hē yī bēi rè niúnǎi yǒuzhùyú tígāo shuìmián zhìliàng.",
            vi: "Uống một ly sữa nóng trước khi ngủ giúp nâng cao chất lượng giấc ngủ.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk5-l1-q1",
        "真正的爱往往藏在微不足道的细节里，需要我们用心去感受。",
        "Zhēnzhèng de ài wǎngwǎng cáng zài wēi bù zú dào de xìjié lǐ, xūyào wǒmen yòngxīn qù gǎnshòu.",
        "Nghe câu sau và chọn ý đúng nhất:",
        [
          "Tình yêu đích thực thường ẩn giấu trong những chi tiết nhỏ bé.",
          "Tình yêu chỉ thể hiện qua những món quà đắt tiền.",
          "Chi tiết nhỏ không ảnh hưởng gì đến tình cảm.",
          "Chúng ta nên bỏ qua những việc nhỏ trong cuộc sống.",
        ],
        "Tình yêu đích thực thường ẩn giấu trong những chi tiết nhỏ bé.",
        "微不足道的细节 nghĩa là 'những chi tiết nhỏ bé không đáng kể'."
      ),
      listeningFill(
        "hsk5-l1-q2",
        "这么多年过去了，他竟然还记得我最喜欢吃的水果。",
        "这么多年过去了，他____还记得我最喜欢吃的水果。",
        "Zhème duō nián guòqù le, tā ____ hái jìde wǒ zuì xǐhuan chī de shuǐguǒ.",
        "Nghe và điền phó từ biểu thị sự bất ngờ vào chỗ trống:",
        "竟然",
        "竟然 (jìngrán) nhấn mạnh sự ngạc nhiên khi nhiều năm trôi qua mà anh ấy vẫn nhớ."
      ),
      listeningDialogue(
        "hsk5-l1-q3",
        "女：你丈夫真体贴，每天早上都提前给你准备好早餐。男：是啊，所以我特别珍惜现在的幸福生活。",
        "Nǚ: Nǐ zhàngfu zhēn tǐtiē, měitiān zǎoshang dōu tíqián gěi nǐ zhǔnbèi hǎo zǎocān. Nán: Shì a, suǒyǐ wǒ tèbié zhēnxī xiànzài de xìngfú shēnghuó.",
        "Nghe đoạn hội thoại và cho biết người chồng là người như thế nào:",
        [
          "Rất chu đáo, ân cần",
          "Thường xuyên quên ăn sáng",
          "Quá bận rộn với công việc",
          "Hay phàn nàn về cuộc sống",
        ],
        "Rất chu đáo, ân cần",
        "Người nữ khen 你丈夫真体贴 (chồng bạn thật chu đáo) vì sáng nào cũng chuẩn bị bữa sáng."
      ),
      listeningFill(
        "hsk5-l1-q4",
        "工作再忙，我们也不要忽略对家人的陪伴。",
        "工作再忙，我们也不要____对家人的陪伴。",
        "Gōngzuò zài máng, wǒmen yě bùyào ____ duì jiārén de péibàn.",
        "Nghe và điền động từ mang nghĩa 'bỏ qua, lơ là':",
        "忽略",
        "忽略 (hūlüè) nghĩa là bỏ qua, lơ là; 陪伴 (péibàn) là sự đồng hành."
      ),
      listeningMcq(
        "hsk5-l1-q5",
        "临走前，妈妈偷偷往我的行李箱里塞了两件厚毛衣。",
        "Lín zǒu qián, māma tōutōu wǎng wǒ de xínglixiāng lǐ sāi le liǎng jiàn hòu máoyī.",
        "Nghe câu sau và cho biết người mẹ đã làm gì trước khi con đi:",
        [
          "Lén nhét hai chiếc áo len dày vào vali của con.",
          "Mua cho con một chiếc vali mới.",
          "Quên chuẩn bị quần áo ấm cho con.",
          "Đưa con ra sân bay từ sáng sớm.",
        ],
        "Lén nhét hai chiếc áo len dày vào vali của con.",
        "临走前 là 'trước khi đi'; 偷偷...塞了两件厚毛衣 là 'lén nhét hai chiếc áo len dày'."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 成语故事与表达 (Câu chuyện thành ngữ & diễn đạt)
  // ==========================================
  {
    id: "hsk5-l2-chengyu",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Câu chuyện thành ngữ & diễn đạt",
    titleZh: "第二课：成语故事与表达",
    titlePinyin: "Dì èr kè: Chéngyǔ gùshi yǔ biǎodá",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=QcVEkVe4ehk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 2 成语故事与表达",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Thành ngữ 4 chữ (成语) giúp lời nói súc tích và nâng điểm diễn đạt HSK 5; cần nắm rõ sắc thái biểu cảm (khen ngợi hay phê phán).",
      "半途而废 (bàn tú ér fèi — bỏ dở giữa chừng) mang sắc thái phê phán; 坚持不懈 (jiānchí bù xiè — kiên trì không ngừng nghỉ) mang sắc thái khen ngợi.",
      "画蛇添足 (huà shé tiān zú — vẽ rắn thêm chân) dùng để chê việc làm thừa thãi, phản tác dụng.",
    ],
    newWords: [
      {
        hanzi: "成语",
        pinyin: "chéngyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "thành ngữ",
        radical: "戈 (Qua)",
        strokeCount: 15,
      },
      {
        hanzi: "画蛇添足",
        pinyin: "huà shé tiān zú",
        partOfSpeech: "Thành ngữ",
        meaningVi: "vẽ rắn thêm chân (làm việc thừa thãi, hỏng việc)",
        radical: "田 (Điền)",
        strokeCount: 37,
      },
      {
        hanzi: "半途而废",
        pinyin: "bàn tú ér fèi",
        partOfSpeech: "Thành ngữ",
        meaningVi: "bỏ dở giữa chừng",
        radical: "十 (Thập)",
        strokeCount: 29,
      },
      {
        hanzi: "实事求是",
        pinyin: "shí shì qiú shì",
        partOfSpeech: "Thành ngữ",
        meaningVi: "thực sự cầu thị, tôn trọng sự thật khách quan",
        radical: "宀 (Miên)",
        strokeCount: 32,
      },
      {
        hanzi: "一举两得",
        pinyin: "yī jǔ liǎng dé",
        partOfSpeech: "Thành ngữ",
        meaningVi: "một công đôi việc",
        radical: "一 (Nhất)",
        strokeCount: 28,
      },
      {
        hanzi: "急于求成",
        pinyin: "jí yú qiú chéng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "nóng vội muốn thành công ngay",
        radical: "心 (Tâm)",
        strokeCount: 25,
      },
      {
        hanzi: "启发",
        pinyin: "qǐfā",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "gợi mở, truyền cảm hứng, bài học rút ra",
        radical: "口 (Khẩu)",
        strokeCount: 12,
      },
      {
        hanzi: "寓意",
        pinyin: "yùyì",
        partOfSpeech: "Danh từ",
        meaningVi: "hàm ý, ý nghĩa sâu xa",
        radical: "宀 (Miên)",
        strokeCount: 25,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ý nghĩa của thành ngữ 画蛇添足",
        lines: [
          {
            speaker: "大卫",
            zh: "老师，我发现中国人说话特别喜欢用成语，比如“画蛇添足”具体该怎么用呢？",
            pinyin: "Lǎoshī, wǒ fāxiàn Zhōngguórén shuōhuà tèbié xǐhuan yòng chéngyǔ, bǐrú 'huà shé tiān zú' jùtǐ gāi zěnme yòng ne?",
            vi: "Thưa cô, em thấy người Trung Quốc nói chuyện rất thích dùng thành ngữ, ví dụ 'họa xà thiêm túc' cụ thể nên dùng thế nào ạ?",
          },
          {
            speaker: "李老师",
            zh: "这个成语的寓意是：做了多余的事，反而把原本很好的事情弄糟了。",
            pinyin: "Zhège chéngyǔ de yùyì shì: zuò le duōyú de shì, fǎn'ér bǎ yuánběn hěn hǎo de shìqing nòng zāo le.",
            vi: "Hàm ý của thành ngữ này là: làm việc thừa thãi, ngược lại còn làm hỏng chuyện vốn dĩ đang rất tốt.",
          },
          {
            speaker: "大卫",
            zh: "哦，就像这篇报告已经很完整了，如果再硬加上无关的数据，那就是画蛇添足，对吗？",
            pinyin: "Ò, jiù xiàng zhè piān bàogào yǐjīng hěn wánzhěng le, rúguǒ zài yìng jiāshàng wúguān de shùjù, nà jiùshì huà shé tiān zú, duì ma?",
            vi: "Ồ, giống như bản báo cáo này đã rất hoàn chỉnh rồi, nếu cứ cố thêm số liệu không liên quan vào thì chính là vẽ rắn thêm chân, đúng không ạ?",
          },
          {
            speaker: "李老师",
            zh: "完全正确！你举的例子非常贴切。",
            pinyin: "Wánquán zhèngquè! Nǐ jǔ de lìzi fēicháng tiēqiè.",
            vi: "Hoàn toàn chính xác! Ví dụ em đưa ra vô cùng sát nghĩa.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Kiên trì học ngoại ngữ, không bỏ dở giữa chừng",
        lines: [
          {
            speaker: "小陈",
            zh: "学汉语到了HSK 5级，词汇量突然增大，我有点想放弃了。",
            pinyin: "Xué Hànyǔ dào le HSK wǔ jí, cíhuìliàng tūrán zēngdà, wǒ yǒudiǎn xiǎng fàngqì le.",
            vi: "Học tiếng Trung đến HSK 5, lượng từ vựng đột ngột tăng mạnh, mình hơi muốn bỏ cuộc rồi.",
          },
          {
            speaker: "安娜",
            zh: "千万别半途而废！学语言不能急于求成，每天积累一点，慢慢就能看到进步。",
            pinyin: "Qiānwàn bié bàn tú ér fèi! Xué yǔyán bù néng jí yú qiú chéng, měitiān jīlěi yīdiǎn, mànmàn jiù néng kàndào jìnbù.",
            vi: "Tuyệt đối đừng bỏ dở giữa chừng! Học ngôn ngữ không thể nóng vội muốn thành công ngay, mỗi ngày tích lũy một chút, dần dần sẽ thấy tiến bộ.",
          },
          {
            speaker: "小陈",
            zh: "你说得对，我打算每天骑车上班时顺便听汉语播客，既锻炼身体又练听力。",
            pinyin: "Nǐ shuō de duì, wǒ dǎsuàn měitiān qíchē shàngbān shí shùnbiàn tīng Hànyǔ bōkè, jì duànliàn shēntǐ yòu liàn tīnglì.",
            vi: "Cậu nói đúng, mình định mỗi ngày đạp xe đi làm tiện thể nghe podcast tiếng Trung, vừa rèn luyện sức khỏe vừa luyện nghe.",
          },
          {
            speaker: "安娜",
            zh: "这个办法真是一举两得！",
            pinyin: "Zhège bànfǎ zhēn shì yī jǔ liǎng dé!",
            vi: "Cách này đúng là một công đôi việc!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 反而 (fǎn'ér — trái lại, ngược lại)",
        formula: "Vế 1 (nguyên nhân / giả thiết), 反而 + Vế 2 (kết quả trái ngược)",
        explanationVi:
          "反而 là phó từ nhấn mạnh kết quả thực tế đi ngược lại hoàn toàn với kỳ vọng hoặc lẽ thường ở vế trước.",
        examples: [
          {
            zh: "他想省时间，结果急于求成，反而多花了一倍的时间。",
            pinyin: "Tā xiǎng shěng shíjiān, jiéguǒ jí yú qiú chéng, fǎn'ér duō huā le yī bèi de shíjiān.",
            vi: "Anh ấy muốn tiết kiệm thời gian, kết quả nóng vội muốn xong ngay, ngược lại tốn gấp đôi thời gian.",
          },
          {
            zh: "吃了药以后，他的头不但没好，反而更疼了。",
            pinyin: "Chī le yào yǐhòu, tā de tóu bùdàn méi hǎo, fǎn'ér gèng téng le.",
            vi: "Sau khi uống thuốc, đầu anh ấy chẳng những không đỡ mà ngược lại còn đau hơn.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 既……又…… (jì... yòu... — vừa... vừa...)",
        formula: "Chủ ngữ + 既 + A + 又 + B",
        explanationVi:
          "Biểu thị hai đặc điểm, hành động hoặc lợi ích cùng tồn tại song song; thường đi kèm với thành ngữ 一举两得.",
        examples: [
          {
            zh: "用成语讲故事，既生动又富有启发性。",
            pinyin: "Yòng chéngyǔ jiǎng gùshi, jì shēngdòng yòu fùyǒu qǐfāxìng.",
            vi: "Dùng thành ngữ để kể chuyện vừa sinh động vừa giàu tính gợi mở.",
          },
          {
            zh: "做研究必须实事求是，既要尊重数据，又要深入调查。",
            pinyin: "Zuò yánjiū bìxū shí shì qiú shì, jì yào zūnzhòng shùjù, yòu yào shēnrù diàochá.",
            vi: "Làm nghiên cứu phải thực sự cầu thị, vừa phải tôn trọng số liệu vừa phải điều tra sâu sát.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk5-l2-q1",
        "这个方案已经很完美了，再修改就是画蛇添足。",
        "Zhège fāng'àn yǐjīng hěn wánměi le, zài xiūgǎi jiùshì huà shé tiān zú.",
        "Luyện đọc thành ngữ 画蛇添足 (vẽ rắn thêm chân) với ngữ điệu tự nhiên:",
        ["huà shé tiān zú (4-2-1-2)", "zhège fāng'àn"],
        "Chú ý thanh điệu rõ ràng của 4 chữ thành ngữ: huà (4) - shé (2) - tiān (1) - zú (2)."
      ),
      speakingShadowing(
        "hsk5-l2-q2",
        "无论遇到什么困难，我们都不能半途而废。",
        "Wúlùn yùdào shénme kùnnan, wǒmen dōu bù néng bàn tú ér fèi.",
        "Luyện nói câu khích lệ với thành ngữ 半途而废:",
        ["bàn tú ér fèi (4-2-2-4)", "wúlùn... dōu..."],
        "Nhấn giọng vào 不能半途而废 để thể hiện quyết tâm."
      ),
      speakingShadowing(
        "hsk5-l2-q3",
        "每天骑车上班既环保又健身，真是一举两得。",
        "Měitiān qíchē shàngbān jì huánbǎo yòu jiànshēn, zhēn shì yī jǔ liǎng dé.",
        "Luyện đọc câu kết hợp cấu trúc 既……又…… và thành ngữ 一举两得:",
        ["yī jǔ liǎng dé (biến điệu yì jǔ)", "jì... yòu..."],
        "Chú ý biến điệu của 一 trước thanh 3 đọc thành thanh 4 (yì jǔ)."
      ),
      speakingShadowing(
        "hsk5-l2-q4",
        "做任何事情都要实事求是，千万不能急于求成。",
        "Zuò rènhé shìqing dōu yào shí shì qiú shì, qiānwàn bù néng jí yú qiú chéng.",
        "Luyện phát âm hai thành ngữ đối lập 实事求是 và 急于求成:",
        ["shí shì qiú shì (âm uốn lưỡi sh)", "jí yú qiú chéng"],
        "Phân biệt rõ âm uốn lưỡi sh trong 实事求是 và âm mặt lưỡi j/q trong 急于求成."
      ),
      speakingShadowing(
        "hsk5-l2-q5",
        "这个古老的成语故事给了我很大的启发。",
        "Zhège gǔlǎo de chéngyǔ gùshi gěi le wǒ hěn dà de qǐfā.",
        "Luyện nói câu chia sẻ cảm nhận về bài học từ thành ngữ:",
        ["chéngyǔ gùshi", "qǐfā (3-1)"],
        "Ngắt nhịp tự nhiên sau 故事 và nhấn nhẹ vào 很大的启发."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 近义词辨析 (Phân biệt từ đồng nghĩa HSK 5)
  // ==========================================
  {
    id: "hsk5-l3-tongyici",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Phân biệt từ đồng nghĩa HSK 5",
    titleZh: "第三课：近义词辨析",
    titlePinyin: "Dì sān kè: Jìnyìcí biànxī",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=WD1B-UWh3Sw",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 3 近义词辨析",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Phân biệt 改善 (cải thiện mức sống, quan hệ, điều kiện) và 改变 (thay đổi hoàn toàn bản chất, kế hoạch, thái độ).",
      "Phân biệt 避免 (tránh để điều xấu xảy ra, thường đi với động từ) và 防止 (phòng ngừa, ngăn chặn chủ động).",
      "Phân biệt 强烈 (mạnh mẽ về cảm xúc, phản ứng, ánh sáng) và 激烈 (kịch liệt về cạnh tranh, tranh luận, thi đấu).",
    ],
    newWords: [
      {
        hanzi: "近义词",
        pinyin: "jìnyìcí",
        partOfSpeech: "Danh từ",
        meaningVi: "từ gần nghĩa, từ đồng nghĩa",
        radical: "辶 (Xước)",
        strokeCount: 17,
      },
      {
        hanzi: "改善",
        pinyin: "gǎishàn",
        partOfSpeech: "Động từ",
        meaningVi: "cải thiện (làm cho tốt hơn)",
        radical: "攵 (Phộc)",
        strokeCount: 19,
      },
      {
        hanzi: "改变",
        pinyin: "gǎibiàn",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "thay đổi, biến đổi",
        radical: "攵 (Phộc)",
        strokeCount: 15,
      },
      {
        hanzi: "避免",
        pinyin: "bìmiǎn",
        partOfSpeech: "Động từ",
        meaningVi: "tránh, né tránh (tình huống xấu)",
        radical: "辶 (Xước)",
        strokeCount: 23,
      },
      {
        hanzi: "防止",
        pinyin: "fángzhǐ",
        partOfSpeech: "Động từ",
        meaningVi: "phòng ngừa, ngăn chặn",
        radical: "阝 (Phụ)",
        strokeCount: 10,
      },
      {
        hanzi: "强烈",
        pinyin: "qiángliè",
        partOfSpeech: "Tính từ",
        meaningVi: "mạnh mẽ, mãnh liệt (cảm xúc, ánh sáng)",
        radical: "弓 (Cung)",
        strokeCount: 22,
      },
      {
        hanzi: "激烈",
        pinyin: "jīliè",
        partOfSpeech: "Tính từ",
        meaningVi: "kịch liệt, gay gắt (tranh luận, cạnh tranh)",
        radical: "氵 (Chấm thủy)",
        strokeCount: 26,
      },
      {
        hanzi: "语境",
        pinyin: "yǔjìng",
        partOfSpeech: "Danh từ",
        meaningVi: "ngữ cảnh, bối cảnh ngôn ngữ",
        radical: "讠 (Ngôn)",
        strokeCount: 23,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Cách phân biệt 改善 và 改变 trong đề thi HSK 5",
        lines: [
          {
            speaker: "明月",
            zh: "做HSK 5阅读第一部分选词填空时，我总是分不清“改善”和“改变”。",
            pinyin: "Zuò HSK wǔ yuèdú dì yī bùfen xuǎncí tiánkòng shí, wǒ zǒngshì fēn bù qīng 'gǎishàn' hé 'gǎibiàn'.",
            vi: "Khi làm phần 1 đọc hiểu điền từ HSK 5, mình cứ hay nhầm lẫn giữa 'cải thiện' (改善) và 'thay đổi' (改变).",
          },
          {
            speaker: "周老师",
            zh: "其实看搭配对象就清楚了。“改善”强调变得更好，常搭配生活条件、关系、环境；而“改变”只强调变成不一样，常搭配计划、看法、习惯。",
            pinyin: "Qíshí kàn dāpèi duìxiàng jiù qīngchu le. 'Gǎishàn' qiángdiào biànde gèng hǎo, cháng dāpèi shēnghuó tiáojiàn, guānxi, huánjìng; ér 'gǎibiàn' zhǐ qiángdiào biànchéng bù yīyàng, cháng dāpèi jìhuà, kànfǎ, xíguàn.",
            vi: "Thật ra nhìn đối tượng kết hợp là rõ ngay. 改善 nhấn mạnh trở nên tốt hơn, thường đi với điều kiện sống, quan hệ, môi trường; còn 改变 chỉ nhấn mạnh trở nên khác đi, thường đi với kế hoạch, quan điểm, thói quen.",
          },
          {
            speaker: "明月",
            zh: "明白了！所以应该说“改善睡眠质量”和“改变原来的计划”。",
            pinyin: "Míngbai le! Suǒyǐ yīnggāi shuō 'gǎishàn shuìmián zhìliàng' hé 'gǎibiàn yuánlái de jìhuà'.",
            vi: "Em hiểu rồi! Vậy nên phải nói '改善睡眠质量' (cải thiện chất lượng giấc ngủ) và '改变原来的计划' (thay đổi kế hoạch ban đầu).",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Phân biệt 强烈 và 激烈 theo ngữ cảnh",
        lines: [
          {
            speaker: "明月",
            zh: "那“强烈”和“激烈”又有什么区别呢？",
            pinyin: "Nà 'qiángliè' hé 'jīliè' yòu yǒu shénme qūbié ne?",
            vi: "Vậy còn '强烈' và '激烈' có gì khác nhau ạ?",
          },
          {
            speaker: "周老师",
            zh: "要结合语境来看。“激烈”多用于竞争、讨论、比赛等双方对抗的场面；“强烈”多用于情感、愿望、光线或反差。",
            pinyin: "Yào jiéhé yǔjìng lái kàn. 'Jīliè' duō yòngyú jìngzhēng, tǎolùn, bǐsài děng shuāngfāng duìkàng de chǎngmiàn; 'qiángliè' duō yòngyú qínggǎn, yuànwàng, guāngxiàn huò fǎnchā.",
            vi: "Phải kết hợp với ngữ cảnh. 激烈 thường dùng cho cảnh đối kháng hai bên như cạnh tranh, thảo luận, thi đấu; 强烈 thường dùng cho tình cảm, nguyện vọng, ánh sáng hoặc sự tương phản.",
          },
          {
            speaker: "明月",
            zh: "也就是说，市场竞争非常激烈，但我依然有强烈的创业愿望。",
            pinyin: "Yě jiùshì shuō, shìchǎng jìngzhēng fēicháng jīliè, dàn wǒ yīrán yǒu qiángliè de chuàngyè yuànwàng.",
            vi: "Tức là, cạnh tranh thị trường vô cùng kịch liệt (激烈), nhưng em vẫn có nguyện vọng khởi nghiệp mạnh mẽ (强烈).",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phân biệt 改善 (cải thiện) vs 改变 (thay đổi)",
        formula: "改善 + 条件/环境/关系/质量 | 改变 + 计划/主意/态度/命运",
        explanationVi:
          "改善 luôn mang hướng tích cực (từ chưa tốt thành tốt hơn). 改变 mang tính trung tính (có thể thay đổi tốt lên hoặc xấu đi, hoặc đơn giản là khác trước).",
        examples: [
          {
            zh: "修建地铁后，这里的交通状况得到了极大改善。",
            pinyin: "Xiūjiàn dìtiě hòu, zhèlǐ de jiāotōng zhuàngkuàng dédào le jídà gǎishàn.",
            vi: "Sau khi xây tàu điện ngầm, tình hình giao thông ở đây đã được cải thiện rất lớn.",
          },
          {
            zh: "一场突如其来的大雨改变了我们的旅行计划。",
            pinyin: "Yī chǎng tūrúqílái de dàyǔ gǎibiàn le wǒmen de lǚxíng jìhuà.",
            vi: "Một trận mưa lớn bất ngờ đã làm thay đổi kế hoạch du lịch của chúng tôi.",
          },
        ],
      },
      {
        titleVi: "Phân biệt 避免 (tránh) vs 防止 (phòng ngừa)",
        formula: "避免 + 发生/出现/误会/浪费 | 防止 + 事故/感冒/火灾/流失",
        explanationVi:
          "避免 nhấn mạnh việc tránh né để không rơi vào tình huống xấu (thường dùng kèm động từ). 防止 nhấn mạnh áp dụng biện pháp ngăn chặn từ trước.",
        examples: [
          {
            zh: "为了避免引起误会，我决定当面向他解释清楚。",
            pinyin: "Wèile bìmiǎn yǐnqǐ wùhuì, wǒ juédìng dāngmiàn xiàng tā jiěshì qīngchu.",
            vi: "Để tránh gây hiểu lầm, tôi quyết định giải thích rõ ràng trực tiếp với anh ấy.",
          },
          {
            zh: "森林公园禁止吸烟，以防止发生火灾。",
            pinyin: "Sēnlín gōngyuán jìnzhǐ xīyān, yǐ fángzhǐ fāshēng huǒzāi.",
            vi: "Công viên rừng cấm hút thuốc để phòng ngừa xảy ra hỏa hoạn.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk5-l3-q1",
        "近年来，随着环保措施的落实，这座城市的空气质量得到了明显改善，市民的幸福感也大大提升。",
        "Jìnniánlái, suízhe huánbǎo cuòshī de luòshí, zhè zuò chéngshì de kōngqì zhìliàng dédào le míngxiǎn gǎishàn, shìmín de xìngfúgǎn yě dàdà tíshēng.",
        "Những năm gần đây, cùng với việc thực hiện các biện pháp bảo vệ môi trường, chất lượng không khí của thành phố này đã được cải thiện rõ rệt, cảm giác hạnh phúc của người dân cũng tăng lên đáng kể.",
        "Tại sao câu trên dùng 改善 chứ không dùng 改变?",
        [
          "Vì 改善 đi với 空气质量 để nhấn mạnh chất lượng trở nên tốt hơn.",
          "Vì 改变 không thể đứng sau 明显.",
          "Vì 改善 dùng để chỉ sự thay đổi theo hướng xấu đi.",
          "Vì 空气质量 chỉ đi được với tính từ.",
        ],
        "Vì 改善 đi với 空气质量 để nhấn mạnh chất lượng trở nên tốt hơn.",
        "改善 kết hợp với 质量/条件/环境 để nhấn mạnh sự cải thiện theo chiều hướng tích cực."
      ),
      readingComp(
        "hsk5-l3-q2",
        "在昨天的项目评审会上，双方就预算分配问题展开了激烈的讨论，最终达成了一致意见。",
        "Zài zuótiān de xiàngmù píngshěnhuì shàng, shuāngfāng jiù yùsuàn fēnpèi wèntí zhǎnkāi le jīliè de tǎolùn, zuìzhōng dáchéng le yīzhì yìjiàn.",
        "Tại buổi thẩm định dự án hôm qua, hai bên đã có cuộc thảo luận kịch liệt về vấn đề phân bổ ngân sách, cuối cùng đã đạt được ý kiến thống nhất.",
        "Theo đoạn văn, kết quả của cuộc thảo luận là gì?",
        [
          "Hai bên cuối cùng đã đạt được sự thống nhất.",
          "Cuộc họp bị hủy bỏ do bất đồng quan điểm.",
          "Ngân sách dự án bị cắt giảm một nửa.",
          "Không ai tham gia buổi thẩm định dự án.",
        ],
        "Hai bên cuối cùng đã đạt được sự thống nhất.",
        "最终达成了一致意见 nghĩa là 'cuối cùng đã đạt được ý kiến thống nhất'."
      ),
      readingComp(
        "hsk5-l3-q3",
        "为了避免在高峰期堵车，公司允许员工弹性上下班，这一政策受到了大家的强烈欢迎。",
        "Wèile bìmiǎn zài gāofēngqī dǔchē, gōngsī yǔnxǔ yuángōng tánxìng shàngxiàbān, zhè yī zhèngcè shòudào le dàjiā de qiángliè huānyíng.",
        "Để tránh tắc đường vào giờ cao điểm, công ty cho phép nhân viên đi làm theo giờ linh hoạt, chính sách này nhận được sự hoan nghênh nồng nhiệt của mọi người.",
        "Chính sách giờ làm linh hoạt của công ty nhằm mục đích gì?",
        [
          "Tránh tắc đường vào giờ cao điểm.",
          "Giảm bớt số ngày làm việc trong tuần.",
          "Tiết kiệm chi phí điện nước cho văn phòng.",
          "Khuyến khích nhân viên làm việc tại nhà hoàn toàn.",
        ],
        "Tránh tắc đường vào giờ cao điểm.",
        "为了避免在高峰期堵车 chỉ rõ mục đích là tránh tắc đường giờ cao điểm."
      ),
      readingComp(
        "hsk5-l3-q4",
        "阅读理解中遇到近义词时，不能只看中文翻译，而应该重点分析它在语境中的固定搭配。",
        "Yuèdú lǐjiě zhōng yùdào jìnyìcí shí, bù néng zhǐ kàn Zhōngwén fānyì, ér yīnggāi zhòngdiǎn fēnxī tā zài yǔjìng zhōng de gùdìng dāpèi.",
        "Khi gặp từ đồng nghĩa trong đọc hiểu, không thể chỉ nhìn bản dịch mà nên tập trung phân tích cách kết hợp cố định của nó trong ngữ cảnh.",
        "Đoạn văn khuyên người học nên phân biệt từ đồng nghĩa bằng cách nào?",
        [
          "Phân tích cách kết hợp cố định trong ngữ cảnh.",
          "Chỉ cần học thuộc nghĩa tiếng Việt của từ.",
          "Bỏ qua các câu hỏi điền từ đồng nghĩa.",
          "Dùng tất cả từ đồng nghĩa thay thế cho nhau.",
        ],
        "Phân tích cách kết hợp cố định trong ngữ cảnh.",
        "重点分析它在语境中的固定搭配 = tập trung phân tích kết hợp cố định trong ngữ cảnh."
      ),
      readingComp(
        "hsk5-l3-q5",
        "冬季天气干燥，有关部门采取了多项措施，以防止森林火灾的发生。",
        "Dōngjì tiānqì gānzào, yǒuguān bùmén cǎiqǔ le duō xiàng cuòshī, yǐ fángzhǐ sēnlín huǒzāi de fāshēng.",
        "Mùa đông thời tiết khô hanh, cơ quan chức năng đã áp dụng nhiều biện pháp để phòng ngừa cháy rừng xảy ra.",
        "Từ 防止 trong câu mang ý nghĩa nào?",
        [
          "Chủ động phòng ngừa, ngăn chặn sự cố xảy ra.",
          "Chữa cháy sau khi lửa đã lan rộng.",
          "Thay đổi thời tiết mùa đông.",
          "Cải thiện cảnh quan rừng.",
        ],
        "Chủ động phòng ngừa, ngăn chặn sự cố xảy ra.",
        "防止 (fángzhǐ) dùng với biện pháp chủ động ngăn ngừa tai họa, sự cố."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 商务谈判与合同 (Đàm phán thương mại & Hợp đồng)
  // ==========================================
  {
    id: "hsk5-l4-shangwu",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Đàm phán thương mại & Hợp đồng",
    titleZh: "第四课：商务谈判与合同",
    titlePinyin: "Dì sì kè: Shāngwù tánpàn yǔ hétong",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=MIsbo3OyNZc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 4 商务谈判与合同",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc 既然……就…… (đã... thì...) dùng để suy luận logic dựa trên một sự thật đã xác định trong đàm phán.",
      "Cụm từ 互利共赢 (hù lì gòng yíng — đôi bên cùng có lợi) là khẩu hiệu kinh điển trong hợp tác thương mại Trung Quốc.",
      "Khi viết câu thương mại, chú ý dùng các động từ trang trọng: 签署 (ký kết), 履行 (thực hiện hợp đồng), 妥协 (nhượng bộ).",
    ],
    newWords: [
      {
        hanzi: "谈判",
        pinyin: "tánpàn",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "đàm phán, thương lượng",
        radical: "讠 (Ngôn)",
        strokeCount: 17,
      },
      {
        hanzi: "合同",
        pinyin: "hétong",
        partOfSpeech: "Danh từ",
        meaningVi: "hợp đồng",
        radical: "口 (Khẩu)",
        strokeCount: 12,
      },
      {
        hanzi: "条款",
        pinyin: "tiáokuǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "điều khoản",
        radical: "木 (Mộc)",
        strokeCount: 19,
      },
      {
        hanzi: "签署",
        pinyin: "qiānshǔ",
        partOfSpeech: "Động từ",
        meaningVi: "ký kết (hợp đồng, hiệp định)",
        radical: "竹 (Trúc)",
        strokeCount: 26,
      },
      {
        hanzi: "报价",
        pinyin: "bàojià",
        partOfSpeech: "Danh từ/Động từ",
        meaningVi: "báo giá, mức giá chào",
        radical: "扌 (Tài gẩy)",
        strokeCount: 13,
      },
      {
        hanzi: "妥协",
        pinyin: "tuǒxié",
        partOfSpeech: "Động từ",
        meaningVi: "nhượng bộ, thỏa hiệp",
        radical: "女 (Nữ)",
        strokeCount: 13,
      },
      {
        hanzi: "履行",
        pinyin: "lǚxíng",
        partOfSpeech: "Động từ",
        meaningVi: "thực hiện, thi hành (nghĩa vụ, hợp đồng)",
        radical: "尸 (Thi)",
        strokeCount: 21,
      },
      {
        hanzi: "互利共赢",
        pinyin: "hù lì gòng yíng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "đôi bên cùng có lợi, cùng thắng",
        radical: "二 (Nhị)",
        strokeCount: 34,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Thương lượng báo giá và số lượng đặt hàng",
        lines: [
          {
            speaker: "陈总",
            zh: "贵公司发来的报价单我们已经仔细看过了，价格比市场平均水平高出百分之十。",
            pinyin: "Guì gōngsī fālái de bàojiàdān wǒmen yǐjīng zǐxì kànguò le, jiàgé bǐ shìchǎng píngjūn shuǐpíng gāochū bǎifēnzhī shí.",
            vi: "Bảng báo giá quý công ty gửi sang chúng tôi đã xem kỹ rồi, mức giá cao hơn mặt bằng chung thị trường 10%.",
          },
          {
            speaker: "林经理",
            zh: "陈总，我们的原材料全部采用进口环保标准，成本确实较高。但如果贵方能增加订货量，我们可以做出适当妥协。",
            pinyin: "Chén zǒng, wǒmen de yuáncáiliào quánbù cǎiyòng jìnkǒu huánbǎo biāozhǔn, chéngběn quèshí jiào gāo. Dàn rúguǒ guìfāng néng zēngjiā dìnghuòliàng, wǒmen kěyǐ zuòchū shìdàng tuǒxié.",
            vi: "Tổng giám đốc Trần, nguyên vật liệu của chúng tôi toàn bộ đạt chuẩn thân thiện môi trường nhập khẩu, chi phí quả thực khá cao. Nhưng nếu quý công ty tăng lượng đặt hàng, chúng tôi có thể nhượng bộ thích đáng.",
          },
          {
            speaker: "陈总",
            zh: "既然双方都有长期合作的意愿，我们愿意把首批订单提高到五千件，希望最终能实现互利共赢。",
            pinyin: "Jìrán shuāngfāng dōu yǒu chángqī hézuò de yìyuàn, wǒmen yuànyì bǎ shǒupī dìngdān tígāo dào wǔqiān jiàn, xīwàng zuìzhōng néng shíxiàn hù lì gòng yíng.",
            vi: "Đã là hai bên đều có thiện chí hợp tác lâu dài, chúng tôi sẵn sàng nâng đơn hàng đợt đầu lên 5.000 sản phẩm, hy vọng cuối cùng đạt được đôi bên cùng có lợi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Rà soát điều khoản trước khi ký hợp đồng",
        lines: [
          {
            speaker: "法务",
            zh: "合同草案已经修改完毕，请重点核对交货期和违约责任这两项条款。",
            pinyin: "Hétong cǎo'àn yǐjīng xiūgǎi wánbì, qǐng zhòngdiǎn héduì jiāohuòqī hé wéiyuē zérèn zhè liǎng xiàng tiáokuǎn.",
            vi: "Bản dự thảo hợp đồng đã sửa xong, mời anh kiểm tra kỹ hai điều khoản về thời hạn giao hàng và trách nhiệm vi phạm hợp đồng.",
          },
          {
            speaker: "陈总",
            zh: "没问题，所有细节都很明确。明天上午十点正式签署合同，之后双方必须严格履行。",
            pinyin: "Méi wèntí, suǒyǒu xìjié dōu hěn míngquè. Míngtiān shàngwǔ shí diǎn zhèngshì qiānshǔ hétong, zhīhòu shuāngfāng bìxū yángé lǚxíng.",
            vi: "Không vấn đề gì, mọi chi tiết đều rất rõ ràng. 10 giờ sáng mai chính thức ký kết hợp đồng, sau đó hai bên phải nghiêm túc thực hiện.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 既然……就…… (Đã... thì...)",
        formula: "既然 + Tiền đề đã xác thực, (Chủ ngữ) + 就 + Kết luận / Đề xuất",
        explanationVi:
          "Dùng để đưa ra quyết định hoặc suy luận hợp lý dựa trên một sự việc đã rõ ràng, rất phổ biến trong đàm phán thương mại.",
        examples: [
          {
            zh: "既然合同条款已经确认无误，我们就安排签署吧。",
            pinyin: "Jìrán hétong tiáokuǎn yǐjīng quèrèn wúwù, wǒmen jiù ānpái qiānshǔ ba.",
            vi: "Đã xác nhận các điều khoản hợp đồng không có sai sót thì chúng ta sắp xếp ký kết thôi.",
          },
          {
            zh: "既然双方存在分歧，就更需要通过谈判来解决。",
            pinyin: "Jìrán shuāngfāng cúnzài fēnqí, jiù gèng xūyào tōngguò tánpàn lái jiějué.",
            vi: "Đã có bất đồng giữa hai bên thì càng cần giải quyết thông qua đàm phán.",
          },
        ],
      },
      {
        titleVi: "Phó từ 适当 (shìdàng — thích đáng, vừa phải)",
        formula: "适当 + Động từ / 做出适当的 + Danh từ",
        explanationVi:
          "Dùng để diễn đạt sự điều chỉnh linh hoạt, hợp lý trong công việc và thương lượng.",
        examples: [
          {
            zh: "为了促成合作，双方都需要做出适当的妥协。",
            pinyin: "Wèile cùchéng hézuò, shuāngfāng dōu xūyào zuòchū shìdàng de tuǒxié.",
            vi: "Để thúc đẩy hợp tác, cả hai bên đều cần có sự nhượng bộ thích đáng.",
          },
          {
            zh: "如果订货量达到标准，我们可以适当降低报价。",
            pinyin: "Rúguǒ dìnghuòliàng dádào biāozhǔn, wǒmen kěyǐ shìdàng jiàngdī bàojià.",
            vi: "Nếu lượng đặt hàng đạt tiêu chuẩn, chúng tôi có thể giảm báo giá một cách thích đáng.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk5-l4-q1",
        "谈",
        "tán",
        "đàm luận, nói chuyện (trong 谈判)",
        "Chữ 谈 gồm bộ Ngôn (讠) bên trái và chữ 炎 (viêm) bên phải, tổng 10 nét."
      ),
      writingStroke(
        "hsk5-l4-q2",
        "签",
        "qiān",
        "ký tên (trong 签署)",
        "Chữ 签 gồm bộ Trúc (竹) ở trên và chữ 佥 ở dưới, tổng 13 nét."
      ),
      writingOrder(
        "hsk5-l4-q3",
        "Sắp xếp các từ sau thành câu thương mại hoàn chỉnh:",
        ["正式签署了", "经过三天的", "双方", "合作合同。", "商务谈判，"],
        "经过三天的商务谈判，双方正式签署了合作合同。",
        "Jīngguò sān tiān de shāngwù tánpàn, shuāngfāng zhèngshì qiānshǔ le hézuò hétong.",
        "Trạng ngữ thời gian/quá trình 经过三天的商务谈判 đặt đầu câu, sau đó là Chủ ngữ 双方 + Vị ngữ 正式签署了合作合同."
      ),
      writingOrder(
        "hsk5-l4-q4",
        "Sắp xếp thành câu nhấn mạnh nghĩa vụ thực hiện hợp đồng:",
        ["合同条款。", "严格履行", "双方必须", "签署之后，"],
        "签署之后，双方必须严格履行合同条款。",
        "Qiānshǔ zhīhòu, shuāngfāng bìxū yángé lǚxíng hétong tiáokuǎn.",
        "Cụm 严格履行合同条款 nghĩa là 'nghiêm túc thực hiện các điều khoản hợp đồng'."
      ),
      writingTwoSentences(
        "hsk5-l4-q5",
        "互利共赢",
        "hù lì gòng yíng",
        "đôi bên cùng có lợi",
        "Gợi ý: Câu 1 dùng trong quan hệ bạn bè/học tập nhóm; Câu 2 dùng trong đàm phán hợp tác kinh doanh."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 跨境电商与直播带货 (Thương mại điện tử xuyên biên giới & Livestream)
  // ==========================================
  {
    id: "hsk5-l5-dianshang",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 5,
    title: "Bài 5: Thương mại điện tử xuyên biên giới & Livestream",
    titleZh: "第五课：跨境电商与直播带货",
    titlePinyin: "Dì wǔ kè: Kuàjìng diànshāng yǔ zhíbō dàihuò",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=RkBHt8MHlu8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 5 跨境电商与直播带货",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc 随着…… (cùng với sự...) thường mở đầu đoạn văn phân tích xu hướng kinh tế, công nghệ.",
      "Động từ 带动 (dàidòng — kéo theo, thúc đẩy) dùng khi một ngành mới giúp các ngành liên quan (như 物流 logistics) cùng phát triển.",
      "Cụm từ 性价比 (xìngjiàbǐ — tỷ lệ hiệu năng/giá thành, mức độ đáng tiền) là từ khóa cực phổ biến trong mua sắm online.",
    ],
    newWords: [
      {
        hanzi: "跨境",
        pinyin: "kuàjìng",
        partOfSpeech: "Tính từ",
        meaningVi: "xuyên biên giới",
        radical: "足 (Túc)",
        strokeCount: 27,
      },
      {
        hanzi: "直播",
        pinyin: "zhíbō",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "phát trực tiếp, livestream",
        radical: "目 (Mục)",
        strokeCount: 23,
      },
      {
        hanzi: "物流",
        pinyin: "wùliú",
        partOfSpeech: "Danh từ",
        meaningVi: "logistics, vận chuyển hàng hóa",
        radical: "牜 (Ngưu)",
        strokeCount: 18,
      },
      {
        hanzi: "销量",
        pinyin: "xiāoliàng",
        partOfSpeech: "Danh từ",
        meaningVi: "doanh số bán hàng, sản lượng bán ra",
        radical: "钅 (Kim)",
        strokeCount: 24,
      },
      {
        hanzi: "性价比",
        pinyin: "xìngjiàbǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "tỷ lệ chất lượng trên giá thành (độ đáng tiền)",
        radical: "忄 (Tâm đứng)",
        strokeCount: 18,
      },
      {
        hanzi: "退换货",
        pinyin: "tuìhuànhuò",
        partOfSpeech: "Danh từ/Động từ",
        meaningVi: "đổi trả hàng",
        radical: "辶 (Xước)",
        strokeCount: 27,
      },
      {
        hanzi: "带动",
        pinyin: "dàidòng",
        partOfSpeech: "Động từ",
        meaningVi: "thúc đẩy, kéo theo sự phát triển",
        radical: "巾 (Cân)",
        strokeCount: 15,
      },
      {
        hanzi: "消费者",
        pinyin: "xiāofèizhě",
        partOfSpeech: "Danh từ",
        meaningVi: "người tiêu dùng",
        radical: "氵 (Chấm thủy)",
        strokeCount: 27,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bùng nổ livestream bán hàng",
        lines: [
          {
            speaker: "小赵",
            zh: "你昨晚在直播间抢到那款智能手表了吗？听说五分钟销量就突破一万台了。",
            pinyin: "Nǐ zuówǎn zài zhíbōjiān qiǎngdào nà kuǎn zhìnéng shǒubiǎo le ma? Tīngshuō wǔ fēnzhōng xiāoliàng jiù tūpò yīwàn tái le.",
            vi: "Tối qua cậu có săn được mẫu đồng hồ thông minh đó trên phòng livestream không? Nghe nói 5 phút doanh số đã vượt 10.000 chiếc.",
          },
          {
            speaker: "小美",
            zh: "抢到了！主播不仅现场演示了功能，还给了很大的优惠，性价比确实很高。",
            pinyin: "Qiǎngdào le! Zhǔbō bùjǐn xiànchǎng yǎnshì le gōngnéng, hái gěi le hěn dà de yōuhuì, xìngjiàbǐ quèshí hěn gāo.",
            vi: "Săn được rồi! Người livestream không chỉ trình diễn tính năng trực tiếp mà còn giảm giá rất sâu, độ đáng tiền quả thực rất cao.",
          },
          {
            speaker: "小赵",
            zh: "不过网购时也要注意看清售后规则，确认支持七天无理由退换货再下单。",
            pinyin: "Bùguò wǎnggòu shí yě yào zhùyì kànqīng shòuhòu guīzé, quèrèn zhīchí qī tiān wú lǐyóu tuìhuànhuò zài xiàdān.",
            vi: "Nhưng mua hàng online cũng phải chú ý xem kỹ quy định hậu mãi, xác nhận có hỗ trợ đổi trả không cần lý do trong 7 ngày rồi hãy đặt đơn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Thương mại điện tử xuyên biên giới và logistics",
        lines: [
          {
            speaker: "记者",
            zh: "王总，您认为近年来跨境电商快速发展的主要原因是什么？",
            pinyin: "Wáng zǒng, nín rènwéi jìnniánlái kuàjìng diànshāng kuàisù fāzhǎn de zhǔyào yuányīn shì shénme?",
            vi: "Thưa tổng giám đốc Vương, ông cho rằng nguyên nhân chính khiến thương mại điện tử xuyên biên giới phát triển nhanh những năm gần đây là gì?",
          },
          {
            speaker: "王总",
            zh: "一方面是国际物流体系越来越完善，送货速度大幅提高；另一方面，跨境平台让消费者足不出户就能买到全球优质商品，这也带动了许多中小企业走向海外市场。",
            pinyin: "Yī fāngmiàn shì guójì wùliú tǐxì yuèláiyuè wánshàn, sònghuò sùdù dàfú tígāo; lìng yī fāngmiàn, kuàjìng píngtái ràng xiāofèizhě zú bù chū hù jiù néng mǎidào quánqiú yōuzhì shāngpǐn, zhè yě dàidòng le xǔduō zhōngxiǎo qǐyè zǒuxiàng hǎiwài shìchǎng.",
            vi: "Một mặt là hệ thống logistics quốc tế ngày càng hoàn thiện, tốc độ giao hàng tăng mạnh; mặt khác, nền tảng xuyên biên giới giúp người tiêu dùng ngồi ở nhà cũng mua được hàng chất lượng toàn cầu, điều này cũng thúc đẩy nhiều doanh nghiệp vừa và nhỏ vươn ra thị trường nước ngoài.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 一方面……另一方面…… (Một mặt... mặt khác...)",
        formula: "一方面 + Vế 1，另一方面 + Vế 2",
        explanationVi:
          "Dùng để trình bày hai khía cạnh, hai nguyên nhân hoặc hai tác động song song của một vấn đề, giúp bài nói/viết HSK 5 mạch lạc hơn.",
        examples: [
          {
            zh: "直播带货一方面提高了产品销量，另一方面也拉近了品牌与消费者的距离。",
            pinyin: "Zhíbō dàihuò yī fāngmiàn tígāo le chǎnpǐn xiāoliàng, lìng yī fāngmiàn yě lājìn le pǐnpái yǔ xiāofèizhě de jùlí.",
            vi: "Livestream bán hàng một mặt nâng cao doanh số sản phẩm, mặt khác cũng kéo gần khoảng cách giữa thương hiệu và người tiêu dùng.",
          },
          {
            zh: "我们一方面要追求高性价比，另一方面也要重视产品质量。",
            pinyin: "Wǒmen yī fāngmiàn yào zhuīqiú gāo xìngjiàbǐ, lìng yī fāngmiàn yě yào zhòngshì chǎnpǐn zhìliàng.",
            vi: "Chúng ta một mặt theo đuổi mức giá đáng tiền, mặt khác cũng phải coi trọng chất lượng sản phẩm.",
          },
        ],
      },
      {
        titleVi: "Thành ngữ 足不出户 (zú bù chū hù — không cần bước chân ra khỏi cửa)",
        formula: "Chủ ngữ + 足不出户 + 就 + Động từ",
        explanationVi:
          "Thường dùng khi nói về sự tiện lợi của internet, thương mại điện tử và dịch vụ giao hàng hiện đại.",
        examples: [
          {
            zh: "有了跨境电商，大家足不出户就能买到世界各地的特产。",
            pinyin: "Yǒu le kuàjìng diànshāng, dàjiā zú bù chū hù jiù néng mǎidào shìjiè gèdì de tèchǎn.",
            vi: "Có thương mại điện tử xuyên biên giới, mọi người không cần ra khỏi nhà cũng mua được đặc sản khắp thế giới.",
          },
          {
            zh: "现代人足不出户就能完成点餐、购物和办公。",
            pinyin: "Xiàndàirén zú bù chū hù jiù néng wánchéng diǎncān, gòuwù hé bàngōng.",
            vi: "Người hiện đại không cần ra khỏi cửa cũng có thể đặt đồ ăn, mua sắm và làm việc.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk5-l5-q1",
        "随着跨境电商的兴起，国际物流行业也迎来了新的发展机遇。",
        "Suízhe kuàjìng diànshāng de xīngqǐ, guójì wùliú hángyè yě yínglái le xīn de fāzhǎn jīyù.",
        "Nghe câu sau và chọn ngành nghề được hưởng lợi trực tiếp:",
        [
          "Ngành logistics quốc tế",
          "Ngành du lịch truyền thống",
          "Ngành bất động sản",
          "Ngành giáo dục tiểu học",
        ],
        "Ngành logistics quốc tế",
        "国际物流行业 = ngành logistics quốc tế."
      ),
      listeningFill(
        "hsk5-l5-q2",
        "这款国产手机外观漂亮，功能齐全，性价比非常高。",
        "这款国产手机外观漂亮，功能齐全，____非常高。",
        "Zhè kuǎn guóchǎn shǒujī wàiguān piàoliang, gōngnéng qíquán, ____ fēicháng gāo.",
        "Nghe và điền từ mang nghĩa 'tỷ lệ chất lượng/giá thành':",
        "性价比",
        "性价比 (xìngjiàbǐ) chỉ mức độ đáng tiền của sản phẩm."
      ),
      listeningDialogue(
        "hsk5-l5-q3",
        "男：我在网上买的衣服尺码不合适，能退吗？女：只要没拆吊牌，七天内都可以免费退换货。",
        "Nán: Wǒ zài wǎngshàng mǎi de yīfu chǐmǎ bù héshì, néng tuì ma? Nǚ: Zhǐyào méi chāi diàopái, qī tiān nèi dōu kěyǐ miǎnfèi tuìhuànhuò.",
        "Nghe hội thoại và cho biết điều kiện để được đổi trả miễn phí:",
        [
          "Chưa cắt mác và trong vòng 7 ngày",
          "Phải đến trực tiếp cửa hàng trong 3 ngày",
          "Phải trả thêm phí vận chuyển gấp đôi",
          "Chỉ được đổi màu, không được đổi cỡ",
        ],
        "Chưa cắt mác và trong vòng 7 ngày",
        "只要没拆吊牌，七天内都可以免费退换货 = chỉ cần chưa tháo mác, trong 7 ngày đều được đổi trả miễn phí."
      ),
      listeningFill(
        "hsk5-l5-q4",
        "乡村直播不仅提高了农产品的销量，还带动了当地旅游业的发展。",
        "乡村直播不仅提高了农产品的销量，还____了当地旅游业的发展。",
        "Xiāngcūn zhíbō bùjǐn tígāo le nóngchǎnpǐn de xiāoliàng, hái ____ le dāngdì lǚyóuyè de fāzhǎn.",
        "Nghe và điền động từ mang nghĩa 'thúc đẩy, kéo theo':",
        "带动",
        "带动 (dàidòng) nghĩa là kéo theo, thúc đẩy sự phát triển."
      ),
      listeningMcq(
        "hsk5-l5-q5",
        "消费者在直播间购物时，应该保持理性，不要因为限时折扣而冲动消费。",
        "Xiāofèizhě zài zhíbōjiān gòuwù shí, yīnggāi bǎochí lǐxìng, bùyào yīnwèi xiànshí zhékòu ér chōngdòng xiāofèi.",
        "Nghe câu sau và chọn lời khuyên dành cho người tiêu dùng:",
        [
          "Giữ lý trí, không mua sắm bốc đồng vì giảm giá giới hạn giờ.",
          "Nên mua thật nhiều khi thấy giảm giá.",
          "Không bao giờ nên mua hàng trên livestream.",
          "Chỉ nên mua đồ điện tử trên mạng.",
        ],
        "Giữ lý trí, không mua sắm bốc đồng vì giảm giá giới hạn giờ.",
        "保持理性 = giữ lý trí; 冲动消费 = tiêu dùng bốc đồng."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 职场沟通与晋升 (Giao tiếp công sở & Thăng tiến)
  // ==========================================
  {
    id: "hsk5-l6-zhichang",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    lessonNumber: 6,
    title: "Bài 6: Giao tiếp công sở & Thăng tiến",
    titleZh: "第六课：职场沟通与晋升",
    titlePinyin: "Dì liù kè: Zhíchǎng gōutōng yǔ jìnshēng",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=O0MRHmLG9ig",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 6 职场沟通与晋升",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Trong môi trường công sở Trung Quốc, cách nói 汇报工作 (báo cáo công việc lên cấp trên) khác với 沟通协调 (trao đổi phối hợp giữa các phòng ban).",
      "Cấu trúc 只有……才…… (chỉ có... mới...) nhấn mạnh điều kiện tiên quyết để đạt được mục tiêu thăng tiến.",
      "Thành ngữ 脚踏实地 (jiǎo tà shí dì — làm việc thực tế, chắc chắn) là phẩm chất được lãnh đạo đánh giá rất cao.",
    ],
    newWords: [
      {
        hanzi: "职场",
        pinyin: "zhíchǎng",
        partOfSpeech: "Danh từ",
        meaningVi: "nơi làm việc, môi trường công sở",
        radical: "耳 (Nhĩ)",
        strokeCount: 17,
      },
      {
        hanzi: "晋升",
        pinyin: "jìnshēng",
        partOfSpeech: "Động từ",
        meaningVi: "thăng tiến, thăng chức",
        radical: "日 (Nhật)",
        strokeCount: 14,
      },
      {
        hanzi: "效率",
        pinyin: "xiàolǜ",
        partOfSpeech: "Danh từ",
        meaningVi: "hiệu suất, hiệu quả công việc",
        radical: "攵 (Phộc)",
        strokeCount: 21,
      },
      {
        hanzi: "协调",
        pinyin: "xiétiáo",
        partOfSpeech: "Động từ",
        meaningVi: "phối hợp, điều phối",
        radical: "十 (Thập)",
        strokeCount: 16,
      },
      {
        hanzi: "汇报",
        pinyin: "huìbào",
        partOfSpeech: "Động từ",
        meaningVi: "báo cáo (với cấp trên)",
        radical: "氵 (Chấm thủy)",
        strokeCount: 12,
      },
      {
        hanzi: "胜任",
        pinyin: "shèngrèn",
        partOfSpeech: "Động từ",
        meaningVi: "đảm đương được, đủ năng lực làm",
        radical: "月 (Nguyệt)",
        strokeCount: 15,
      },
      {
        hanzi: "脚踏实地",
        pinyin: "jiǎo tà shí dì",
        partOfSpeech: "Thành ngữ",
        meaningVi: "chân đạp đất thực (làm việc thực tế, nghiêm túc)",
        radical: "月 (Nguyệt)",
        strokeCount: 40,
      },
      {
        hanzi: "瓶颈",
        pinyin: "píngjǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "nút thắt cổ chai, giai đoạn chững lại",
        radical: "瓦 (Ngõa)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Báo cáo tiến độ dự án với cấp trên",
        lines: [
          {
            speaker: "小刘",
            zh: "经理，向您汇报一下新项目的进度。目前技术部和市场部已经协调好了，下周一可以按时上线。",
            pinyin: "Jīnglǐ, xiàng nín huìbào yīxià xīn xiàngmù de jìndù. Mùqián jìshùbù hé shìchǎngbù yǐjīng xiétiáo hǎo le, xià zhōuyī kěyǐ ànshí shàngxiàn.",
            vi: "Thưa quản lý, em xin báo cáo tiến độ dự án mới. Hiện phòng kỹ thuật và phòng marketing đã phối hợp xong, thứ Hai tuần sau có thể ra mắt đúng hạn.",
          },
          {
            speaker: "赵经理",
            zh: "很好，你们团队这次的工作效率非常高。遇到跨部门沟通难题时，你处理得很得体。",
            pinyin: "Hěn hǎo, nǐmen tuánduì zhè cì de gōngzuò xiàolǜ fēicháng gāo. Yùdào kuà bùmén gōutōng nántí shí, nǐ chǔlǐ de hěn détǐ.",
            vi: "Rất tốt, hiệu suất làm việc lần này của nhóm em rất cao. Khi gặp khó khăn giao tiếp liên phòng ban, em xử lý rất khéo léo.",
          },
          {
            speaker: "小刘",
            zh: "谢谢经理的肯定，这离不开大家的支持。我会继续脚踏实地做好后续跟进。",
            pinyin: "Xièxie jīnglǐ de kěndìng, zhè lí bù kāi dàjiā de zhīchí. Wǒ huì jìxù jiǎo tà shí dì zuòhǎo hòuxù gēnjìn.",
            vi: "Cảm ơn sự ghi nhận của quản lý, điều này không thể thiếu sự hỗ trợ của mọi người. Em sẽ tiếp tục làm việc nghiêm túc, theo sát các bước tiếp theo.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Vượt qua giai đoạn chững lại để thăng tiến",
        lines: [
          {
            speaker: "小周",
            zh: "我在这家公司干了三年，感觉最近遇到了职业瓶颈，不知道怎么才能获得晋升机会。",
            pinyin: "Wǒ zài zhè jiā gōngsī gàn le sān nián, gǎnjué zuìjìn yùdào le zhíyè píngjǐng, bù zhīdào zěnme cáinéng huòdé jìnshēng jīhuì.",
            vi: "Mình làm ở công ty này 3 năm rồi, cảm thấy dạo này gặp nút thắt sự nghiệp, không biết làm sao mới có cơ hội thăng tiến.",
          },
          {
            speaker: "陈姐",
            zh: "在职场中，只有不断提升核心竞争力，主动承担更复杂的任务，领导才会相信你能胜任管理岗位。",
            pinyin: "Zài zhíchǎng zhōng, zhǐyǒu bùduàn tíshēng héxīn jìngzhēnglì, zhǔdòng chéngdān gèng fùzá de rènwu, lǐngdǎo cái huì xiāngxìn nǐ néng shèngrèn guǎnlǐ gǎngwèi.",
            vi: "Ở chốn công sở, chỉ có không ngừng nâng cao năng lực cạnh tranh cốt lõi, chủ động đảm nhận nhiệm vụ phức tạp hơn thì lãnh đạo mới tin cậu đủ sức đảm đương vị trí quản lý.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 离不开 (lí bù kāi — không thể tách rời / không thể thiếu)",
        formula: "A + 离不开 + B",
        explanationVi:
          "Dùng rất nhiều trong phát biểu công sở khi muốn thể hiện sự khiêm tốn, cảm ơn tập thể hoặc nhấn mạnh yếu tố then chốt.",
        examples: [
          {
            zh: "项目的成功离不开团队每一位成员的共同努力。",
            pinyin: "Xiàngmù de chénggōng lí bù kāi tuánduì měi yī wèi chéngyuán de gòngtóng nǔlì.",
            vi: "Thành công của dự án không thể thiếu sự nỗ lực chung của từng thành viên trong nhóm.",
          },
          {
            zh: "高效的职场沟通离不开倾听和换位思考。",
            pinyin: "Gāoxiào de zhíchǎng gōutōng lí bù kāi qīngtīng hé huànwèi sīkǎo.",
            vi: "Giao tiếp công sở hiệu quả không thể thiếu sự lắng nghe và đặt mình vào vị trí người khác.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 只有……才…… (Chỉ có... mới...)",
        formula: "只有 + Điều kiện duy nhất, Chủ ngữ + 才 + Kết quả",
        explanationVi:
          "Biểu thị điều kiện cần và đủ; vế sau bắt buộc dùng phó từ 才 (không dùng 就).",
        examples: [
          {
            zh: "只有脚踏实地积累经验，才能突破职业瓶颈。",
            pinyin: "Zhǐyǒu jiǎo tà shí dì jīlěi jīngyàn, cáinéng tūpò zhíyè píngjǐng.",
            vi: "Chỉ có tích lũy kinh nghiệm một cách thực tế chắc chắn mới có thể vượt qua nút thắt sự nghiệp.",
          },
          {
            zh: "只有做好跨部门协调，才能大幅提高工作效率。",
            pinyin: "Zhǐyǒu zuòhǎo kuà bùmén xiétiáo, cáinéng dàfú tígāo gōngzuò xiàolǜ.",
            vi: "Chỉ có làm tốt việc điều phối liên phòng ban mới có thể nâng cao mạnh mẽ hiệu suất công việc.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk5-l6-q1",
        "经理，我来向您汇报一下本季度的销售数据。",
        "Jīnglǐ, wǒ lái xiàng nín huìbào yīxià běn jìdù de xiāoshòu shùjù.",
        "Luyện câu mở đầu báo cáo công việc với cấp trên:",
        ["xiàng nín huìbào", "xiāoshòu shùjù (âm sh)"],
        "Dùng giọng điệu chuyên nghiệp, lịch sự với kính ngữ 您."
      ),
      speakingShadowing(
        "hsk5-l6-q2",
        "只有不断提高工作效率，才能获得更多的晋升机会。",
        "Zhǐyǒu bùduàn tígāo gōngzuò xiàolǜ, cáinéng huòdé gèng duō de jìnshēng jīhuì.",
        "Luyện nói câu điều kiện 只有……才…… trong chủ đề thăng tiến:",
        ["xiàolǜ (chú ý âm ü)", "jìnshēng jīhuì"],
        "Phát âm tròn môi âm lǜ trong 效率."
      ),
      speakingShadowing(
        "hsk5-l6-q3",
        "我相信凭借自己的专业能力，完全能够胜任这个岗位。",
        "Wǒ xiāngxìn píngjiè zìjǐ de zhuānyè nénglì, wánquán nénggòu shèngrèn zhège gǎngwèi.",
        "Luyện câu tự tin khẳng định năng lực khi phỏng vấn/ứng cử:",
        ["shèngrèn (4-4)", "zhuānyè nénglì"],
        "Nhấn giọng vào 完全能够胜任 để thể hiện sự tự tin."
      ),
      speakingShadowing(
        "hsk5-l6-q4",
        "这次项目的顺利完成，离不开各部门的积极协调。",
        "Zhè cì xiàngmù de shùnlì wánchéng, lí bù kāi gè bùmén de jījí xiétiáo.",
        "Luyện câu cảm ơn tập thể với cấu trúc 离不开:",
        ["lí bù kāi", "jījí xiétiáo"],
        "Ngắt nhịp nhẹ sau 完成, đọc mượt cụm 离不开."
      ),
      speakingShadowing(
        "hsk5-l6-q5",
        "在职场中，我们要脚踏实地，勇于突破职业瓶颈。",
        "Zài zhíchǎng zhōng, wǒmen yào jiǎo tà shí dì, yǒngyú tūpò zhíyè píngjǐng.",
        "Luyện đọc thành ngữ 脚踏实地 và từ chuyên ngành 瓶颈:",
        ["jiǎo tà shí dì (3-4-2-4)", "píngjǐng (2-3)"],
        "Phân biệt rõ thanh 2 và thanh 3 trong 瓶颈 (píngjǐng)."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 经济发展与消费趋势 (Phát triển kinh tế & Xu hướng tiêu dùng)
  // ==========================================
  {
    id: "hsk5-l7-jingji",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 7,
    title: "Bài 7: Phát triển kinh tế & Xu hướng tiêu dùng",
    titleZh: "第七课：经济发展与消费趋势",
    titlePinyin: "Dì qī kè: Jīngjì fāzhǎn yǔ xiāofèi qūshì",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=tEsNIpHiCzI",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 7 经济发展与消费趋势",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc 从……转向…… (chuyển từ... sang...) rất phổ biến trong các bài đọc hiểu phân tích kinh tế và xã hội HSK 5.",
      "Động từ 推动 (tuīdòng — thúc đẩy) thường đi với tân ngữ trừu tượng như 经济增长 (tăng trưởng kinh tế), 消费升级 (nâng cấp tiêu dùng).",
      "Phó từ 日益 (rìyì — ngày càng, trang trọng hơn 越来越) thường xuất hiện trong văn báo chí và đề thi đọc hiểu HSK 5.",
    ],
    newWords: [
      {
        hanzi: "趋势",
        pinyin: "qūshì",
        partOfSpeech: "Danh từ",
        meaningVi: "xu hướng, xu thế",
        radical: "走 (Tẩu)",
        strokeCount: 20,
      },
      {
        hanzi: "转型",
        pinyin: "zhuǎnxíng",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "chuyển đổi mô hình",
        radical: "车 (Xa)",
        strokeCount: 17,
      },
      {
        hanzi: "升级",
        pinyin: "shēngjí",
        partOfSpeech: "Động từ",
        meaningVi: "nâng cấp, lên đời",
        radical: "十 (Thập)",
        strokeCount: 10,
      },
      {
        hanzi: "潜力",
        pinyin: "qiánlì",
        partOfSpeech: "Danh từ",
        meaningVi: "tiềm năng, tiềm lực",
        radical: "氵 (Chấm thủy)",
        strokeCount: 17,
      },
      {
        hanzi: "日益",
        pinyin: "rìyì",
        partOfSpeech: "Phó từ",
        meaningVi: "ngày càng (văn viết)",
        radical: "日 (Nhật)",
        strokeCount: 14,
      },
      {
        hanzi: "推动",
        pinyin: "tuīdòng",
        partOfSpeech: "Động từ",
        meaningVi: "thúc đẩy, đẩy mạnh",
        radical: "扌 (Tài gẩy)",
        strokeCount: 17,
      },
      {
        hanzi: "理性",
        pinyin: "lǐxìng",
        partOfSpeech: "Tính từ/Danh từ",
        meaningVi: "lý trí, có lý tính",
        radical: "王 (Ngọc)",
        strokeCount: 19,
      },
      {
        hanzi: "个性化",
        pinyin: "gèxìnghuà",
        partOfSpeech: "Tính từ/Danh từ",
        meaningVi: "cá nhân hóa",
        radical: "人 (Nhân)",
        strokeCount: 15,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Sự chuyển dịch sang tiêu dùng chất lượng và cá nhân hóa",
        lines: [
          {
            speaker: "主持人",
            zh: "教授您好，请问当前年轻人的消费趋势发生了哪些显著变化？",
            pinyin: "Jiàoshòu nín hǎo, qǐngwèn dāngqián niánqīngrén de xiāofèi qūshì fāshēng le nǎxiē xiǎnzhù biànhuà?",
            vi: "Chào giáo sư, xin hỏi xu hướng tiêu dùng của giới trẻ hiện nay đã có những thay đổi rõ rệt nào?",
          },
          {
            speaker: "经济学家",
            zh: "最明显的变化是从单纯追求低价转向重视品质和体验。人们对健康、文旅和个性化服务的需求日益增长。",
            pinyin: "Zuì míngxiǎn de biànhuà shì cóng dānchún zhuīqiú dījià zhuǎnxiàng zhòngshì pǐnzhì hé tǐyàn. Rénmen duì jiànkāng, wénlǚ hé gèxìnghuà fúwù de xūqiú rìyì zēngzhǎng.",
            vi: "Thay đổi rõ nhất là chuyển từ việc chỉ chạy theo giá rẻ sang coi trọng chất lượng và trải nghiệm. Nhu cầu của mọi người đối với sức khỏe, du lịch văn hóa và dịch vụ cá nhân hóa ngày càng tăng.",
          },
          {
            speaker: "主持人",
            zh: "这种消费升级对实体企业提出了怎样的要求？",
            pinyin: "Zhè zhǒng xiāofèi shēngjí duì shítǐ qǐyè tíchū le zěnyàng de yāoqiú?",
            vi: "Sự nâng cấp tiêu dùng này đặt ra yêu cầu như thế nào đối với các doanh nghiệp thực thể?",
          },
          {
            speaker: "经济学家",
            zh: "企业必须加快数字化转型，深入挖掘市场潜力，才能在激烈竞争中保持优势。",
            pinyin: "Qǐyè bìxū jiākuài shùzìhuà zhuǎnxíng, shēnrù wājué shìchǎng qiánlì, cáinéng zài jīliè jìngzhēng zhōng bǎochí yōushì.",
            vi: "Doanh nghiệp bắt buộc phải đẩy nhanh chuyển đổi số, khai thác sâu tiềm năng thị trường thì mới giữ được lợi thế trong cạnh tranh kịch liệt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Tiêu dùng lý trí và xu hướng thương hiệu nội địa",
        lines: [
          {
            speaker: "小吴",
            zh: "我发现现在身边的朋友越来越理性了，买东西不再盲目崇拜国外大牌。",
            pinyin: "Wǒ fāxiàn xiànzài shēnbiān de péngyou yuèláiyuè lǐxìng le, mǎi dōngxi bù zài mángmù chóngbài guówài dàpái.",
            vi: "Mình thấy bạn bè xung quanh giờ ngày càng lý trí, mua đồ không còn mù quáng sùng bái hàng hiệu nước ngoài nữa.",
          },
          {
            speaker: "小郑",
            zh: "没错，许多国产品牌在设计和科技上不断创新，这不仅赢得了年轻消费者的信任，也推动了整个产业链的升级。",
            pinyin: "Méicuò, xǔduō guóchǎn pǐnpái zài shèjì hé kējì shàng bùduàn chuàngxīn, zhè bùjǐn yíngdé le niánqīng xiāofèizhě de xìnrèn, yě tuīdòng le zhěnggè chǎnyèliàn de shēngjí.",
            vi: "Đúng vậy, nhiều thương hiệu nội địa không ngừng đổi mới về thiết kế và công nghệ, điều này không chỉ giành được niềm tin của người tiêu dùng trẻ mà còn thúc đẩy sự nâng cấp của toàn bộ chuỗi ngành hàng.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 从……转向…… (Chuyển từ... sang...)",
        formula: "Chủ ngữ + 从 + A + 转向 + B",
        explanationVi:
          "Diễn tả sự chuyển dịch xu hướng, trọng tâm chiến lược hoặc thói quen từ trạng thái A sang trạng thái B.",
        examples: [
          {
            zh: "中国经济正从高速增长阶段转向高质量发展阶段。",
            pinyin: "Zhōngguó jīngjì zhèng cóng gāosù zēngzhǎng jiēduàn zhuǎnxiàng gāo zhìliàng fāzhǎn jiēduàn.",
            vi: "Kinh tế Trung Quốc đang chuyển từ giai đoạn tăng trưởng tốc độ cao sang giai đoạn phát triển chất lượng cao.",
          },
          {
            zh: "越来越多消费者的关注点从价格转向了环保与健康。",
            pinyin: "Yuèláiyuè duō xiāofèizhě de guānzhùdiǎn cóng jiàgé zhuǎnxiàng le huánbǎo yǔ jiànkāng.",
            vi: "Điểm quan tâm của ngày càng nhiều người tiêu dùng chuyển từ giá cả sang bảo vệ môi trường và sức khỏe.",
          },
        ],
      },
      {
        titleVi: "Phó từ 日益 (rìyì — ngày càng)",
        formula: "日益 + Động từ / Tính từ song âm tiết (增长 / 完善 / 激烈 / 明显)",
        explanationVi:
          "Tương đương 越来越 nhưng mang sắc thái văn viết trang trọng, chỉ kết hợp với tính từ hoặc động từ song âm tiết.",
        examples: [
          {
            zh: "人工智能在金融领域的应用日益广泛。",
            pinyin: "Réngōng zhìnéng zài jīnróng lǐngyù de yìngyòng rìyì guǎngfàn.",
            vi: "Ứng dụng của trí tuệ nhân tạo trong lĩnh vực tài chính ngày càng rộng rãi.",
          },
          {
            zh: "随着收入水平提高，人们的文化消费需求日益增强。",
            pinyin: "Suízhe shōurù shuǐpíng tígāo, rénmen de wénhuà xiāofèi xūqiú rìyì zēngqiáng.",
            vi: "Cùng với mức thu nhập tăng lên, nhu cầu tiêu dùng văn hóa của người dân ngày càng mạnh mẽ.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk5-l7-q1",
        "近年来，随着居民收入的提高，消费者的购物观念正在发生深刻变化，从单纯追求低价转向更加注重产品品质与环保属性。",
        "Jìnniánlái, suízhe jūmín shōurù de tígāo, xiāofèizhě de gòuwù guānniàn zhèngzài fāshēng shēnkè biànhuà, cóng dānchún zhuīqiú dījià zhuǎnxiàng gèngjiā zhùzhòng chǎnpǐn pǐnzhì yǔ huánbǎo shǔxìng.",
        "Những năm gần đây, cùng với sự gia tăng thu nhập của người dân, quan niệm mua sắm của người tiêu dùng đang có sự thay đổi sâu sắc, chuyển từ chỉ chạy theo giá rẻ sang chú trọng hơn đến chất lượng sản phẩm và tính thân thiện môi trường.",
        "Xu hướng tiêu dùng hiện nay đang chuyển sang chú trọng điều gì?",
        [
          "Chất lượng sản phẩm và tính thân thiện môi trường.",
          "Chỉ mua những sản phẩm có giá rẻ nhất.",
          "Giảm hoàn toàn nhu cầu mua sắm hàng ngày.",
          "Chỉ mua hàng qua các cửa hàng truyền thống.",
        ],
        "Chất lượng sản phẩm và tính thân thiện môi trường.",
        "转向更加注重产品品质与环保属性 nêu rõ trọng tâm mới."
      ),
      readingComp(
        "hsk5-l7-q2",
        "面对日益激烈的市场竞争，传统制造业必须加快数字化转型，通过技术创新来推动产业升级。",
        "Miànduì rìyì jīliè de shìchǎng jìngzhēng, chuántǒng zhìzàoyè bìxū jiākuài shùzìhuà zhuǎnxíng, tōngguò jìshù chuàngxīn lái tuīdòng chǎnyè shēngjí.",
        "Đối mặt với sự cạnh tranh thị trường ngày càng gay gắt, ngành sản xuất truyền thống bắt buộc phải đẩy nhanh chuyển đổi số, thúc đẩy nâng cấp ngành thông qua đổi mới công nghệ.",
        "Theo đoạn văn, ngành sản xuất truyền thống cần làm gì để nâng cấp?",
        [
          "Đẩy nhanh chuyển đổi số và đổi mới công nghệ.",
          "Cắt giảm toàn bộ nhân sự kỹ thuật.",
          "Ngừng sản xuất và chuyển sang bán lẻ.",
          "Tăng giá bán sản phẩm lên gấp đôi.",
        ],
        "Đẩy nhanh chuyển đổi số và đổi mới công nghệ.",
        "加快数字化转型，通过技术创新来推动产业升级 là giải pháp cốt lõi."
      ),
      readingComp(
        "hsk5-l7-q3",
        "调查显示，三四线城市的消费潜力巨大，越来越多知名品牌开始将目光投向这些新兴市场。",
        "Diàochá xiǎnshì, sānsìxiàn chéngshì de xiāofèi qiánlì jùdà, yuèláiyuè duō zhīmíng pǐnpái kāishǐ jiāng mùguāng tóuxiàng zhèxiē xīnxīng shìchǎng.",
        "Khảo sát cho thấy tiềm năng tiêu dùng của các thành phố cấp 3, cấp 4 rất lớn, ngày càng nhiều thương hiệu nổi tiếng bắt đầu hướng ánh nhìn về các thị trường mới nổi này.",
        "Tại sao nhiều thương hiệu nổi tiếng hướng về các thành phố cấp 3, cấp 4?",
        [
          "Vì tiềm năng tiêu dùng ở đó rất lớn.",
          "Vì các thành phố lớn đã cấm kinh doanh.",
          "Vì người dân ở đó không thích thương hiệu nổi tiếng.",
          "Vì chi phí vận chuyển ở đó bằng 0.",
        ],
        "Vì tiềm năng tiêu dùng ở đó rất lớn.",
        "三四线城市的消费潜力巨大 = tiềm năng tiêu dùng ở thành phố cấp 3, 4 rất lớn."
      ),
      readingComp(
        "hsk5-l7-q4",
        "如今的年轻人在消费时更加理性，他们既关注产品的实用价值，也愿意为符合自己审美的个性化设计买单。",
        "Rújīn de niánqīngrén zài xiāofèi shí gèngjiā lǐxìng, tāmen jì guānzhù chǎnpǐn de shíyòng jiàzhí, yě yuànyì wèi fúhé zìjǐ shěnměi de gèxìnghuà shèjì mǎidān.",
        "Giới trẻ ngày nay lý trí hơn khi tiêu dùng, họ vừa quan tâm giá trị sử dụng thực tế của sản phẩm, vừa sẵn sàng chi tiền cho những thiết kế cá nhân hóa hợp gu thẩm mỹ.",
        "Đặc điểm tiêu dùng của giới trẻ được nhắc đến trong đoạn văn là gì?",
        [
          "Lý trí, coi trọng cả tính thực dụng lẫn thiết kế cá nhân hóa.",
          "Chỉ quan tâm đến giá trị thực dụng, không quan tâm thiết kế.",
          "Mua sắm theo phong trào mà không suy nghĩ.",
          "Không bao giờ chi tiền cho sản phẩm có thiết kế riêng.",
        ],
        "Lý trí, coi trọng cả tính thực dụng lẫn thiết kế cá nhân hóa.",
        "既关注产品的实用价值，也愿意为...个性化设计买单."
      ),
      readingComp(
        "hsk5-l7-q5",
        "绿色消费和银发经济正成为推动未来经济增长的两大新引擎。",
        "Lǜsè xiāofèi hé yínfà jīngjì zhèng chéngwéi tuīdòng wèilái jīngjì zēngzhǎng de liǎng dà xīn yǐnqíng.",
        "Tiêu dùng xanh và kinh tế bạc (dành cho người cao tuổi) đang trở thành hai động cơ mới thúc đẩy tăng trưởng kinh tế tương lai.",
        "Hai động lực tăng trưởng kinh tế mới được đề cập là gì?",
        [
          "Tiêu dùng xanh và kinh tế dành cho người cao tuổi.",
          "Khai thác than đá và công nghiệp nặng.",
          "Nông nghiệp thủ công và đánh bắt cá.",
          "Xuất khẩu nguyên liệu thô giá rẻ.",
        ],
        "Tiêu dùng xanh và kinh tế dành cho người cao tuổi.",
        "绿色消费 (tiêu dùng xanh) và 银发经济 (kinh tế tóc bạc/người cao tuổi)."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 看图写作与关键词成段 (Viết đoạn văn từ từ khóa & tranh HSK 5)
  // ==========================================
  {
    id: "hsk5-l8-xiezuo",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 8,
    title: "Bài 8: Viết đoạn văn từ từ khóa & tranh HSK 5",
    titleZh: "第八课：看图写作与关键词成段",
    titlePinyin: "Dì bā kè: Kàntú xiězuò yǔ guānjiàncí chéngduàn",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=DGNDilwSuU4",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 8 看图写作与关键词成段",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Đề thi viết HSK 5 phần 2 gồm 2 bài đoạn văn ~80 chữ: Câu 99 (dùng 5 từ cho sẵn viết đoạn văn) và Câu 100 (nhìn tranh viết đoạn văn).",
      "Công thức viết đoạn 80 chữ đạt điểm cao: Mở bài (Bối cảnh/Nhân vật) → Thân bài (Sự việc/Xung đột) → Kết bài (Cảm xúc/Bài học rút ra).",
      "Ưu tiên sử dụng liên từ nối mạch lạc (起初 ban đầu, 于是 thế là, 没想到 không ngờ, 终于 cuối cùng) và dùng đúng từ loại của cả 5 từ khóa.",
    ],
    newWords: [
      {
        hanzi: "关键词",
        pinyin: "guānjiàncí",
        partOfSpeech: "Danh từ",
        meaningVi: "từ khóa",
        radical: "丷 (Bát)",
        strokeCount: 26,
      },
      {
        hanzi: "构思",
        pinyin: "gòusī",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "lên ý tưởng, dàn ý bài viết",
        radical: "木 (Mộc)",
        strokeCount: 17,
      },
      {
        hanzi: "连贯",
        pinyin: "liánguàn",
        partOfSpeech: "Tính từ",
        meaningVi: "mạch lạc, liên kết chặt chẽ",
        radical: "辶 (Xước)",
        strokeCount: 15,
      },
      {
        hanzi: "起初",
        pinyin: "qǐchū",
        partOfSpeech: "Danh từ thời gian",
        meaningVi: "ban đầu, lúc đầu",
        radical: "走 (Tẩu)",
        strokeCount: 17,
      },
      {
        hanzi: "于是",
        pinyin: "yúshì",
        partOfSpeech: "Liên từ",
        meaningVi: "thế là, do đó",
        radical: "二 (Nhị)",
        strokeCount: 12,
      },
      {
        hanzi: "描写",
        pinyin: "miáoxiě",
        partOfSpeech: "Động từ",
        meaningVi: "miêu tả",
        radical: "扌 (Tài gẩy)",
        strokeCount: 16,
      },
      {
        hanzi: "感悟",
        pinyin: "gǎnwù",
        partOfSpeech: "Danh từ/Động từ",
        meaningVi: "cảm ngộ, bài học tâm đắc",
        radical: "心 (Tâm)",
        strokeCount: 23,
      },
      {
        hanzi: "扣题",
        pinyin: "kòutí",
        partOfSpeech: "Động từ",
        meaningVi: "bám sát đề bài",
        radical: "扌 (Tài gẩy)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chiến thuật làm Câu 99 — 5 từ khóa viết đoạn văn 80 chữ",
        lines: [
          {
            speaker: "小黎",
            zh: "老师，HSK 5写作第99题给五个词写80字短文，我总是写得很散，不够连贯。",
            pinyin: "Lǎoshī, HSK wǔ xiězuò dì jiǔshíjiǔ tí gěi wǔ ge cí xiě bāshí zì duǎnwén, wǒ zǒngshì xiě de hěn sǎn, bùgòu liánguàn.",
            vi: "Thưa thầy, câu 99 phần viết HSK 5 cho 5 từ viết đoạn văn 80 chữ, em cứ viết bị rời rạc, chưa đủ mạch lạc ạ.",
          },
          {
            speaker: "王老师",
            zh: "动笔前先花一分钟构思一个小故事。先把五个关键词按词性分类，然后用“起初、后来、于是、终于”把情节串联起来，最后加一句简短的感悟。",
            pinyin: "Dòngbǐ qián xiān huā yī fēnzhōng gòusī yī ge xiǎo gùshi. Xiān bǎ wǔ ge guānjiàncí àn cíxìng fēnlèi, ránhòu yòng 'qǐchū, hòulái, yúshì, zhōngyú' bǎ qíngjié chuànlián qǐlái, zuìhòu jiā yī jù jiǎnduǎn de gǎnwù.",
            vi: "Trước khi đặt bút hãy dành 1 phút lên ý tưởng một câu chuyện nhỏ. Phân loại 5 từ khóa theo từ loại trước, sau đó dùng '起初, 后来, 于是, 终于' nối các tình tiết lại, cuối cùng thêm một câu cảm ngộ ngắn gọn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Mẹo làm Câu 100 — Nhìn tranh viết đoạn văn",
        lines: [
          {
            speaker: "小黎",
            zh: "那第100题看图写作呢？有时候图画内容很简单，我不知道怎么凑够80字。",
            pinyin: "Nà dì yībǎi tí kàntú xiězuò ne? Yǒushíhou túhuà nèiróng hěn jiǎndān, wǒ bù zhīdào zěnme còugòu bāshí zì.",
            vi: "Thế còn câu 100 nhìn tranh viết văn ạ? Đôi khi nội dung bức tranh rất đơn giản, em không biết làm sao viết đủ 80 chữ.",
          },
          {
            speaker: "王老师",
            zh: "要做到“描写加想象”。第一句交代人物和环境，中间描写人物的动作和心理活动，最后升华主题。这样既紧扣图片内容，又轻松超过80字。",
            pinyin: "Yào zuòdào 'miáoxiě jiā xiǎngxiàng'. Dì yī jù jiāodài rénwù hé huánjìng, zhōngjiān miáoxiě rénwù de dòngzuò hé xīnlǐ huódòng, zuìhòu shēnghuá zhǔtí. Zhèyàng jì jǐnkòu túpiàn nèiróng, yòu qīngsōng chāoguò bāshí zì.",
            vi: "Phải làm được 'miêu tả kết hợp tưởng tượng'. Câu đầu giới thiệu nhân vật và bối cảnh, phần giữa miêu tả hành động và diễn biến tâm lý, phần cuối nâng tầm chủ đề. Như vậy vừa bám sát tranh vừa dễ dàng vượt 80 chữ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Liên từ 于是 (yúshì — thế là, liền)",
        formula: "Vế 1 (tình huống/nguyên nhân)，于是 + Vế 2 (hành động nối tiếp)",
        explanationVi:
          "于是 nối hai hành động có quan hệ nhân quả và tiếp nối về thời gian, cực kỳ hữu ích khi kể chuyện trong bài viết 80 chữ.",
        examples: [
          {
            zh: "起初他很害羞，不敢上台发言；于是老师微笑着鼓励了他。",
            pinyin: "Qǐchū tā hěn hàixiū, bù gǎn shàngtái fāyán; yúshì lǎoshī wēixiàozhe gǔlì le tā.",
            vi: "Ban đầu cậu ấy rất ngại, không dám lên bục phát biểu; thế là cô giáo mỉm cười khích lệ cậu ấy.",
          },
          {
            zh: "外面突然下起了大雨，于是我们决定改天再去爬山。",
            pinyin: "Wàimiàn tūrán xiàqǐ le dàyǔ, yúshì wǒmen juédìng gǎitiān zài qù páshān.",
            vi: "Bên ngoài đột nhiên đổ mưa lớn, thế là chúng tôi quyết định hôm khác mới đi leo núi.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 起初……后来……终于…… (Ban đầu... sau đó... cuối cùng...)",
        formula: "起初 + Trạng thái 1，后来 + Quá trình thay đổi，终于 + Kết quả",
        explanationVi:
          "Khung sườn thời gian 3 bước giúp đoạn văn 80 chữ có mở-thân-kết rõ ràng, tránh viết lan man.",
        examples: [
          {
            zh: "起初我对写作毫无信心，后来坚持每天练习，终于在考试中拿了高分。",
            pinyin: "Qǐchū wǒ duì xiězuò háowú xìnxīn, hòulái jiānchí měitiān liànxí, zhōngyú zài kǎoshì zhōng ná le gāofēn.",
            vi: "Ban đầu tôi chẳng có chút tự tin nào với kỹ năng viết, sau đó kiên trì luyện tập mỗi ngày, cuối cùng đã đạt điểm cao trong kỳ thi.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk5-l8-q1",
        "构",
        "gòu",
        "cấu tạo, lên dàn ý (trong 构思)",
        "Chữ 构 gồm bộ Mộc (木) bên trái và chữ 勾 bên phải, tổng 8 nét."
      ),
      writingStroke(
        "hsk5-l8-q2",
        "悟",
        "wù",
        "giác ngộ, hiểu ra (trong 感悟)",
        "Chữ 悟 gồm bộ Tâm đứng (忄) bên trái và chữ 吾 bên phải, tổng 10 nét."
      ),
      writingOrder(
        "hsk5-l8-q3",
        "Sắp xếp các từ thành câu mở đầu bài viết HSK 5 mạch lạc:",
        ["构思一个", "动笔之前，", "连贯的故事。", "我们应该先"],
        "动笔之前，我们应该先构思一个连贯的故事。",
        "Dòngbǐ zhīqián, wǒmen yīnggāi xiān gòusī yī ge liánguàn de gùshi.",
        "Trạng ngữ 动笔之前 đứng đầu câu, theo sau là Chủ ngữ 我们 + 应该先构思一个连贯的故事."
      ),
      writingOrder(
        "hsk5-l8-q4",
        "Sắp xếp thành câu kể chuyện dùng 起初 và 于是:",
        ["于是他决定", "起初他觉得", "汉字很难写，", "每天练习半小时。"],
        "起初他觉得汉字很难写，于是他决定每天练习半小时。",
        "Qǐchū tā juéde Hànzì hěn nán xiě, yúshì tā juédìng měitiān liànxí bàn xiǎoshí.",
        "Vế 1 nêu khó khăn ban đầu (起初...), vế 2 nêu quyết định nối tiếp (于是...)."
      ),
      writingTwoSentences(
        "hsk5-l8-q5",
        "感悟",
        "gǎnwù",
        "cảm ngộ, bài học rút ra",
        "Gợi ý: Câu 1 viết về bài học sau một chuyến đi; Câu 2 dùng làm câu kết cho đoạn văn 80 chữ HSK 5."
      ),
    ],
  },

  // ==========================================
  // BÀI 9: 传统文化与现代生活 (Văn hóa truyền thống & Đời sống hiện đại)
  // ==========================================
  {
    id: "hsk5-l9-wenhua",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 9,
    title: "Bài 9: Văn hóa truyền thống & Đời sống hiện đại",
    titleZh: "第九课：传统文化与现代生活",
    titlePinyin: "Dì jiǔ kè: Chuántǒng wénhuà yǔ xiàndài shēnghuó",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=M1bvAROPVxE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 9 传统文化与现代生活",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Động từ 传承 (chuánchéng — kế thừa và phát huy) thường đi với 传统文化 (văn hóa truyền thống), 非物质文化遗产 (di sản văn hóa phi vật thể).",
      "Cấu trúc 不仅……而且…… kết hợp với 融合 (rónghé — dung hợp, hòa quyện) diễn tả sự kết hợp giữa truyền thống và hiện đại.",
      "Thành ngữ 源远流长 (yuán yuǎn liú cháng — nguồn xa dòng dài, lịch sử lâu đời) là từ vựng đắt giá trong chủ đề văn hóa.",
    ],
    newWords: [
      {
        hanzi: "传承",
        pinyin: "chuánchéng",
        partOfSpeech: "Động từ",
        meaningVi: "kế thừa, lưu truyền",
        radical: "亻 (Nhân đứng)",
        strokeCount: 14,
      },
      {
        hanzi: "融合",
        pinyin: "rónghé",
        partOfSpeech: "Động từ",
        meaningVi: "hòa quyện, dung hợp",
        radical: "虫 (Trùng)",
        strokeCount: 22,
      },
      {
        hanzi: "风俗",
        pinyin: "fēngsú",
        partOfSpeech: "Danh từ",
        meaningVi: "phong tục tập quán",
        radical: "风 (Phong)",
        strokeCount: 13,
      },
      {
        hanzi: "国潮",
        pinyin: "guócháo",
        partOfSpeech: "Danh từ",
        meaningVi: "xu hướng văn hóa/thời trang bản địa hiện đại",
        radical: "囗 (Vi)",
        strokeCount: 23,
      },
      {
        hanzi: "魅力",
        pinyin: "mèilì",
        partOfSpeech: "Danh từ",
        meaningVi: "sức hút, vẻ đẹp cuốn hút",
        radical: "鬼 (Quỷ)",
        strokeCount: 16,
      },
      {
        hanzi: "创新",
        pinyin: "chuàngxīn",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "đổi mới, sáng tạo",
        radical: "刂 (Đao đứng)",
        strokeCount: 19,
      },
      {
        hanzi: "源远流长",
        pinyin: "yuán yuǎn liú cháng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "lịch sử lâu đời, sâu dày (nguồn xa dòng dài)",
        radical: "氵 (Chấm thủy)",
        strokeCount: 34,
      },
      {
        hanzi: "博物馆",
        pinyin: "bówùguǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "viện bảo tàng",
        radical: "十 (Thập)",
        strokeCount: 31,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Làn sóng 国潮 (Quốc triều) trong giới trẻ",
        lines: [
          {
            speaker: "苏珊",
            zh: "周末我去逛了故宫文创店，发现很多年轻人穿着改良汉服打卡，特别热闹。",
            pinyin: "Zhōumò wǒ qù guàng le Gùgōng wénchuàngdiàn, fāxiàn hěn duō niánqīngrén chuānzhe gǎiliáng Hànfú dǎkǎ, tèbié rènao.",
            vi: "Cuối tuần mình đi dạo cửa hàng sáng tạo văn hóa Cố Cung, thấy rất nhiều bạn trẻ mặc Hán phục cách tân check-in, náo nhiệt lắm.",
          },
          {
            speaker: "林峰",
            zh: "这就是现在很火的“国潮”。把传统文化元素和现代审美融合起来，既保留了历史魅力，又符合年轻人的生活方式。",
            pinyin: "Zhè jiùshì xiànzài hěn huǒ de 'guócháo'. Bǎ chuántǒng wénhuà yuánsù hé xiàndài shěnměi rónghé qǐlái, jì bǎoliú le lìshǐ mèilì, yòu fúhé niánqīngrén de shēnghuó fāngshì.",
            vi: "Đó chính là xu hướng 'Quốc triều' đang rất hot hiện nay. Kết hợp yếu tố văn hóa truyền thống với thẩm mỹ hiện đại, vừa giữ được sức hút lịch sử vừa hợp lối sống giới trẻ.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Kế thừa và đổi mới văn hóa trà đạo",
        lines: [
          {
            speaker: "记者",
            zh: "作为一名非遗传承人，您如何看待传统茶文化在现代社会的发展？",
            pinyin: "Zuòwéi yī míng fēiyí chuánchéngrén, nín rúhé kàndài chuántǒng chá wénhuà zài xiàndài shèhuì de fāzhǎn?",
            vi: "Là một nghệ nhân kế thừa di sản phi vật thể, ông nhìn nhận thế nào về sự phát triển của văn hóa trà truyền thống trong xã hội hiện đại?",
          },
          {
            speaker: "茶艺师",
            zh: "中国茶文化源远流长，但传承不等于一成不变。现在的新式茶饮通过形式创新，让更多年轻人重新爱上了喝茶。",
            pinyin: "Zhōngguó chá wénhuà yuán yuǎn liú cháng, dàn chuánchéng bù děngyú yī chéng bù biàn. Xiànzài de xīnshì cháyǐn tōngguò xíngshì chuàngxīn, ràng gèng duō niánqīngrén chóngxīn àishàng le hēchá.",
            vi: "Văn hóa trà Trung Quốc có lịch sử lâu đời, nhưng kế thừa không đồng nghĩa với giữ nguyên bất biến. Các loại trà hiện đại ngày nay thông qua đổi mới hình thức đã khiến nhiều bạn trẻ yêu lại việc uống trà.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc A 不等于 B (A không đồng nghĩa với B)",
        formula: "Danh từ/Động từ A + 不等于 + B",
        explanationVi:
          "Dùng để bác bỏ một quan niệm phiến diện và làm rõ bản chất vấn đề trong nghị luận HSK 5.",
        examples: [
          {
            zh: "传承传统文化不等于拒绝现代科技。",
            pinyin: "Chuánchéng chuántǒng wénhuà bù děngyú jùjué xiàndài kējì.",
            vi: "Kế thừa văn hóa truyền thống không đồng nghĩa với việc từ chối công nghệ hiện đại.",
          },
          {
            zh: "保护古老风俗不等于墨守成规。",
            pinyin: "Bǎohù gǔlǎo fēngsú bù děngyú mòshǒu chéngguī.",
            vi: "Bảo vệ phong tục cổ xưa không đồng nghĩa với việc bảo thủ cứng nhắc.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 把 A 和 B 融合起来 (Kết hợp/dung hợp A và B)",
        formula: "把 + A + 和/与 + B + 融合起来",
        explanationVi:
          "Diễn tả việc hòa quyện hai yếu tố khác nhau thành một tổng thể hài hòa.",
        examples: [
          {
            zh: "这部动画电影把传统水墨画和三维技术完美地融合了起来。",
            pinyin: "Zhè bù dònghuà diànyǐng bǎ chuántǒng shuǐmòhuà hé sānwéi jìshù wánměi de rónghé le qǐlái.",
            vi: "Bộ phim hoạt hình này đã kết hợp hoàn hảo giữa tranh thủy mặc truyền thống và công nghệ 3D.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk5-l9-q1",
        "博物馆推出的数字展览，让观众足不出户就能领略传统文化的独特魅力。",
        "Bówùguǎn tuīchū de shùzì zhǎnlǎn, ràng guānzhòng zú bù chū hù jiù néng lǐnglüè chuántǒng wénhuà de dútè mèilì.",
        "Nghe câu sau và chọn lợi ích của triển lãm số tại bảo tàng:",
        [
          "Khán giả không cần ra khỏi nhà vẫn cảm nhận được sức hút của văn hóa truyền thống.",
          "Bảo tàng sẽ đóng cửa hoàn toàn không đón khách trực tiếp.",
          "Khán giả phải mua vé đắt hơn gấp ba lần.",
          "Chỉ dành cho các nhà nghiên cứu lịch sử.",
        ],
        "Khán giả không cần ra khỏi nhà vẫn cảm nhận được sức hút của văn hóa truyền thống.",
        "足不出户就能领略传统文化的独特魅力."
      ),
      listeningFill(
        "hsk5-l9-q2",
        "中国剪纸艺术源远流长，至今已有上千年的历史。",
        "中国剪纸艺术____，至今已有上千年的历史。",
        "Zhōngguó jiǎnzhǐ yìshù ____, zhìjīn yǐ yǒu shàng qiān nián de lìshǐ.",
        "Nghe và điền thành ngữ 4 chữ mang nghĩa 'lịch sử lâu đời':",
        "源远流长",
        "源远流长 (yuán yuǎn liú cháng) dùng để ca ngợi văn hóa, nghệ thuật có bề dày lịch sử."
      ),
      listeningDialogue(
        "hsk5-l9-q3",
        "女：你觉得传统文化应该怎么吸引年轻人？男：关键是要把传统元素和现代生活融合起来，不断创新。",
        "Nǚ: Nǐ juéde chuántǒng wénhuà yīnggāi zěnme xīyǐn niánqīngrén? Nán: Guānjiàn shì yào bǎ chuántǒng yuánsù hé xiàndài shēnghuó rónghé qǐlái, bùduàn chuàngxīn.",
        "Nghe hội thoại và cho biết người nam đề xuất giải pháp gì:",
        [
          "Kết hợp yếu tố truyền thống với đời sống hiện đại và không ngừng đổi mới.",
          "Bắt buộc giới trẻ phải học thuộc lòng sách cổ.",
          "Giữ nguyên mọi thứ không thay đổi chút nào.",
          "Bỏ qua văn hóa truyền thống để chạy theo hiện đại.",
        ],
        "Kết hợp yếu tố truyền thống với đời sống hiện đại và không ngừng đổi mới.",
        "把传统元素和现代生活融合起来，不断创新."
      ),
      listeningFill(
        "hsk5-l9-q4",
        "每一代人都有责任保护并传承优秀的民族文化。",
        "每一代人都有责任保护并____优秀的民族文化。",
        "Měi yī dài rén dōu yǒu zérèn bǎohù bìng ____ yōuxiù de mínzú wénhuà.",
        "Nghe và điền động từ mang nghĩa 'kế thừa, lưu truyền':",
        "传承",
        "传承 (chuánchéng) thường đi cặp với 保护 (bảo vệ)."
      ),
      listeningMcq(
        "hsk5-l9-q5",
        "不同地区有着各具特色的春节风俗，但团圆的主题始终不变。",
        "Bùtóng dìqū yǒuzhe gè jù tèsè de Chūnjié fēngsú, dàn tuányuán de zhǔtí shǐzhōng bù biàn.",
        "Nghe câu sau và chọn ý đúng nhất:",
        [
          "Phong tục Tết mỗi vùng có nét riêng, nhưng chủ đề đoàn viên luôn không đổi.",
          "Tất cả các vùng đều có phong tục đón Tết giống hệt nhau.",
          "Ngày nay người ta không còn coi trọng việc đoàn viên dịp Tết.",
          "Tết Nguyên Đán chỉ được tổ chức ở miền Bắc.",
        ],
        "Phong tục Tết mỗi vùng có nét riêng, nhưng chủ đề đoàn viên luôn không đổi.",
        "各具特色的春节风俗 = phong tục Tết mang nét đặc sắc riêng; 团圆的主题始终不变 = chủ đề đoàn viên luôn bất biến."
      ),
    ],
  },

  // ==========================================
  // BÀI 10: 绿色能源与可持续发展 (Năng lượng xanh & Phát triển bền vững)
  // ==========================================
  {
    id: "hsk5-l10-huanbao",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 10,
    title: "Bài 10: Năng lượng xanh & Phát triển bền vững",
    titleZh: "第十课：绿色能源与可持续发展",
    titlePinyin: "Dì shí kè: Lǜsè néngyuán yǔ kě chíxù fāzhǎn",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=GCESR1-wsE8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 10 绿色能源与可持续发展",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cụm từ 可持续发展 (kě chíxù fāzhǎn — phát triển bền vững) và 节能减排 (jiénéng jiǎnpái — tiết kiệm năng lượng, giảm phát thải) là từ khóa trọng tâm chủ đề môi trường HSK 5.",
      "Cấu trúc 与其……不如…… (thay vì... chi bằng...) dùng để đưa ra đề xuất tích cực hơn về lối sống xanh.",
      "Động từ 倡导 (chàngdǎo — khởi xướng, cổ vũ) thường đi với 低碳生活 (lối sống ít carbon).",
    ],
    newWords: [
      {
        hanzi: "能源",
        pinyin: "néngyuán",
        partOfSpeech: "Danh từ",
        meaningVi: "năng lượng, nguồn năng lượng",
        radical: "月 (Nguyệt)",
        strokeCount: 23,
      },
      {
        hanzi: "可持续",
        pinyin: "kě chíxù",
        partOfSpeech: "Tính từ",
        meaningVi: "bền vững, có thể duy trì lâu dài",
        radical: "口 (Khẩu)",
        strokeCount: 25,
      },
      {
        hanzi: "低碳",
        pinyin: "dītàn",
        partOfSpeech: "Tính từ",
        meaningVi: "ít carbon, thân thiện khí hậu",
        radical: "亻 (Nhân đứng)",
        strokeCount: 21,
      },
      {
        hanzi: "排放",
        pinyin: "páifàng",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "phát thải, thải ra",
        radical: "扌 (Tài gẩy)",
        strokeCount: 19,
      },
      {
        hanzi: "循环",
        pinyin: "xúnhuán",
        partOfSpeech: "Động từ/Danh từ",
        meaningVi: "tuần hoàn, tái chế",
        radical: "彳 (Xích)",
        strokeCount: 20,
      },
      {
        hanzi: "倡导",
        pinyin: "chàngdǎo",
        partOfSpeech: "Động từ",
        meaningVi: "khởi xướng, kêu gọi, cổ vũ",
        radical: "亻 (Nhân đứng)",
        strokeCount: 16,
      },
      {
        hanzi: "生态",
        pinyin: "shēngtài",
        partOfSpeech: "Danh từ",
        meaningVi: "sinh thái",
        radical: "生 (Sinh)",
        strokeCount: 13,
      },
      {
        hanzi: "新能源汽车",
        pinyin: "xīn néngyuán qìchē",
        partOfSpeech: "Cụm danh từ",
        meaningVi: "xe năng lượng mới (xe điện, hybrid)",
        radical: "斤 (Cân)",
        strokeCount: 47,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chuyển sang dùng xe năng lượng mới",
        lines: [
          {
            speaker: "老李",
            zh: "听说你最近换了一辆新能源汽车，开起来感觉怎么样？",
            pinyin: "Tīngshuō nǐ zuìjìn huàn le yī liàng xīn néngyuán qìchē, kāi qǐlái gǎnjué zěnmeyàng?",
            vi: "Nghe nói dạo này cậu mới đổi sang một chiếc xe năng lượng mới, lái thử thấy thế nào?",
          },
          {
            speaker: "小周",
            zh: "非常安静，而且充电成本比加油便宜得多。更重要的是，它能大大减少尾气排放，为保护生态环境出一份力。",
            pinyin: "Fēicháng ānjìng, érqiě chōngdiàn chéngběn bǐ jiāyóu piányi de duō. Gèng zhòngyào de shì, tā néng dàdà jiǎnshǎo wěiqì páifàng, wèi bǎohù shēngtài huánjìng chū yī fèn lì.",
            vi: "Rất êm, hơn nữa chi phí sạc điện rẻ hơn đổ xăng nhiều. Quan trọng hơn là nó có thể giảm mạnh khí thải, góp một phần sức bảo vệ môi trường sinh thái.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Thực hành lối sống ít carbon từ việc nhỏ",
        lines: [
          {
            speaker: "环保志愿者",
            zh: "现在全球都在倡导低碳生活，实现可持续发展其实离我们并不遥远。",
            pinyin: "Xiànzài quánqiú dōu zài chàngdǎo dītàn shēnghuó, shíxiàn kě chíxù fāzhǎn qíshí lí wǒmen bìng bù yáoyuǎn.",
            vi: "Hiện nay toàn cầu đều đang cổ vũ lối sống ít carbon, thực hiện phát triển bền vững thật ra không hề xa vời với chúng ta.",
          },
          {
            speaker: "市民",
            zh: "确实如此。与其抱怨空气污染，不如从自己做起：坚持垃圾分类、循环利用旧物、短途尽量步行或骑车。",
            pinyin: "Quèshí rúcǐ. Yǔqí bàoyuàn kōngqì wūrǎn, bùrú cóng zìjǐ zuòqǐ: jiānchí lājī fēnlèi, xúnhuán lìyòng jiùwù, duǎntú jǐnliàng bùxíng huò qíchē.",
            vi: "Quả thực như vậy. Thay vì phàn nàn ô nhiễm không khí, chi bằng bắt đầu từ chính mình: kiên trì phân loại rác, tái sử dụng đồ cũ, chặng ngắn cố gắng đi bộ hoặc đạp xe.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 与其……不如…… (Thay vì... chi bằng...)",
        formula: "与其 + Phương án A (không tốt bằng), 不如 + Phương án B (tốt hơn)",
        explanationVi:
          "Dùng để so sánh hai lựa chọn và khẳng định phương án B hợp lý, tích cực hơn phương án A.",
        examples: [
          {
            zh: "与其每天开车堵在路上，不如坐地铁绿色出行。",
            pinyin: "Yǔqí měitiān kāichē dǔ zài lùshang, bùrú zuò dìtiě lǜsè chūxíng.",
            vi: "Thay vì ngày nào cũng lái xe tắc trên đường, chi bằng đi tàu điện ngầm di chuyển xanh.",
          },
          {
            zh: "与其事后花巨资治理污染，不如提前推广绿色能源。",
            pinyin: "Yǔqí shìhòu huā jùzī zhìlǐ wūrǎn, bùrú tíqián tuīguǎng lǜsè néngyuán.",
            vi: "Thay vì sau này tốn khoản tiền khổng lồ xử lý ô nhiễm, chi bằng phổ biến năng lượng xanh từ sớm.",
          },
        ],
      },
      {
        titleVi: "Cụm từ 为……出一份力 (Góp một phần sức cho...)",
        formula: "为 + Mục tiêu/Sự nghiệp + 出一份力",
        explanationVi:
          "Cách diễn đạt tự nhiên, giàu tính kêu gọi trong các bài phát biểu về môi trường, cộng đồng.",
        examples: [
          {
            zh: "每个人都应该为保护地球生态出一份力。",
            pinyin: "Měi ge rén dōu yīnggāi wèi bǎohù dìqiú shēngtài chū yī fèn lì.",
            vi: "Mỗi người đều nên góp một phần sức để bảo vệ hệ sinh thái Trái Đất.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk5-l10-q1",
        "推广绿色能源是实现可持续发展的必由之路。",
        "Tuīguǎng lǜsè néngyuán shì shíxiàn kě chíxù fāzhǎn de bìyóuzhīlù.",
        "Luyện đọc câu nghị luận về năng lượng xanh và phát triển bền vững:",
        ["lǜsè néngyuán (âm ü)", "kě chíxù fāzhǎn"],
        "Chú ý tròn môi ở âm lǜ (绿) và đọc rõ cụm 可持续发展."
      ),
      speakingShadowing(
        "hsk5-l10-q2",
        "新能源汽车的普及大大减少了城市尾气排放。",
        "Xīn néngyuán qìchē de pǔjí dàdà jiǎnshǎo le chéngshì wěiqì páifàng.",
        "Luyện nói về tác dụng của xe năng lượng mới:",
        ["xīn néngyuán qìchē", "wěiqì páifàng"],
        "Ngắt nhịp tự nhiên sau 普及, nhấn giọng vào 大大减少了."
      ),
      speakingShadowing(
        "hsk5-l10-q3",
        "与其空谈环保理念，不如从日常低碳生活做起。",
        "Yǔqí kōngtán huánbǎo lǐniàn, bùrú cóng rìcháng dītàn shēnghuó zuòqǐ.",
        "Luyện cấu trúc 与其……不如…… với ngữ điệu thuyết phục:",
        ["yǔqí... bùrú...", "dītàn shēnghuó"],
        "Nhấn giọng vào 不如 để làm nổi bật lời khuyên hành động."
      ),
      speakingShadowing(
        "hsk5-l10-q4",
        "我们应该积极倡导资源的循环利用，减少浪费。",
        "Wǒmen yīnggāi jījí chàngdǎo zīyuán de xúnhuán lìyòng, jiǎnshǎo làngfèi.",
        "Luyện phát âm các từ học thuật 倡导 và 循环利用:",
        ["chàngdǎo (4-3)", "xúnhuán lìyòng"],
        "Phân biệt âm uốn lưỡi ch (倡) và âm đầu lưỡi z (资)."
      ),
      speakingShadowing(
        "hsk5-l10-q5",
        "保护生态环境，人人有责，让我们共同出一份力。",
        "Bǎohù shēngtài huánjìng, rénrén yǒuzé, ràng wǒmen gòngtóng chū yī fèn lì.",
        "Luyện câu kết bài thuyết trình chủ đề môi trường:",
        ["shēngtài huánjìng", "chū yī fèn lì"],
        "Đọc dứt khoát, truyền cảm hứng ở vế cuối."
      ),
    ],
  },

  // ==========================================
  // BÀI 11: 心理学与情绪管理 (Tâm lý học & Quản lý cảm xúc)
  // ==========================================
  {
    id: "hsk5-l11-xinli",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Tâm lý học & Quản lý cảm xúc",
    titleZh: "第十一课：心理学与情绪管理",
    titlePinyin: "Dì shíyī kè: Xīnlǐxué yǔ qíngxù guǎnlǐ",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=3CgJHn3369A",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 11 心理学与情绪管理",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Động từ 缓解 (huǎnjiě — xoa dịu, làm dịu bớt) thường đi với 压力 (áp lực), 焦虑 (lo âu), 紧张情绪 (cảm xúc căng thẳng).",
      "Cấu trúc 之所以……是因为…… (sở dĩ... là bởi vì...) đặt kết quả lên trước để nhấn mạnh nguyên nhân sâu xa trong các bài đọc tâm lý.",
      "Cụm từ 换位思考 (huànwèi sīkǎo — đặt mình vào vị trí người khác) là kỹ năng quan trọng trong quản lý cảm xúc và giao tiếp.",
    ],
    newWords: [
      {
        hanzi: "情绪",
        pinyin: "qíngxù",
        partOfSpeech: "Danh từ",
        meaningVi: "cảm xúc, tâm trạng",
        radical: "忄 (Tâm đứng)",
        strokeCount: 22,
      },
      {
        hanzi: "焦虑",
        pinyin: "jiāolǜ",
        partOfSpeech: "Tính từ/Danh từ",
        meaningVi: "lo âu, bồn chồn",
        radical: "灬 (Hỏa)",
        strokeCount: 22,
      },
      {
        hanzi: "缓解",
        pinyin: "huǎnjiě",
        partOfSpeech: "Động từ",
        meaningVi: "làm dịu bớt, giải tỏa (áp lực, cơn đau)",
        radical: "纟 (Mịch)",
        strokeCount: 25,
      },
      {
        hanzi: "心态",
        pinyin: "xīntài",
        partOfSpeech: "Danh từ",
        meaningVi: "tâm thế, thái độ tinh thần",
        radical: "心 (Tâm)",
        strokeCount: 12,
      },
      {
        hanzi: "倾诉",
        pinyin: "qīngsù",
        partOfSpeech: "Động từ",
        meaningVi: "tâm sự, giãi bày nỗi lòng",
        radical: "亻 (Nhân đứng)",
        strokeCount: 17,
      },
      {
        hanzi: "调节",
        pinyin: "tiáojié",
        partOfSpeech: "Động từ",
        meaningVi: "điều tiết, điều chỉnh",
        radical: "讠 (Ngôn)",
        strokeCount: 15,
      },
      {
        hanzi: "换位思考",
        pinyin: "huànwèi sīkǎo",
        partOfSpeech: "Cụm từ",
        meaningVi: "đặt mình vào vị trí người khác để suy nghĩ",
        radical: "扌 (Tài gẩy)",
        strokeCount: 32,
      },
      {
        hanzi: "乐观",
        pinyin: "lèguān",
        partOfSpeech: "Tính từ",
        meaningVi: "lạc quan",
        radical: "丿 (Phiệt)",
        strokeCount: 11,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nhận diện và giải tỏa lo âu",
        lines: [
          {
            speaker: "咨询师",
            zh: "现代人之所以容易感到焦虑，往往是因为对自己要求过高，或者总是拿自己和别人比较。",
            pinyin: "Xiàndàirén zhī suǒyǐ róngyì gǎndào jiāolǜ, wǎngwǎng shì yīnwèi duì zìjǐ yāoqiú guò gāo, huòzhě zǒngshì ná zìjǐ hé biérén bǐjiào.",
            vi: "Người hiện đại sở dĩ dễ cảm thấy lo âu thường là vì đặt yêu cầu quá cao cho bản thân, hoặc luôn đem mình ra so sánh với người khác.",
          },
          {
            speaker: "小何",
            zh: "那当我们产生负面情绪时，应该怎么调节呢？",
            pinyin: "Nà dāng wǒmen chǎnshēng fùmiàn qíngxù shí, yīnggāi zěnme tiáojié ne?",
            vi: "Vậy khi chúng ta nảy sinh cảm xúc tiêu cực thì nên điều tiết thế nào ạ?",
          },
          {
            speaker: "咨询师",
            zh: "首先要接纳自己的情绪，不要刻意压抑。其次可以通过运动、写日记或者向信任的朋友倾诉来缓解压力。",
            pinyin: "Shǒuxiān yào jiēnà zìjǐ de qíngxù, bùyào kèyì yāyì. Qícì kěyǐ tōngguò yùndòng, xiě rìjì huòzhě xiàng xìnrèn de péngyou qīngsù lái huǎnjiě yālì.",
            vi: "Trước tiên phải chấp nhận cảm xúc của mình, đừng cố tình kìm nén. Thứ hai có thể thông qua vận động, viết nhật ký hoặc tâm sự với người bạn tin cậy để giải tỏa áp lực.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Giữ tâm thế lạc quan và thấu hiểu",
        lines: [
          {
            speaker: "小何",
            zh: "有时候和同事意见不合，我会忍不住发脾气，事后又很后悔。",
            pinyin: "Yǒushíhou hé tóngshì yìjiàn bùhé, wǒ huì rěn bù zhù fā píqi, shìhòu yòu hěn hòuhuǐ.",
            vi: "Đôi lúc bất đồng ý kiến với đồng nghiệp, tôi không kìm được mà nổi nóng, sau đó lại rất hối hận.",
          },
          {
            speaker: "咨询师",
            zh: "下次冲动之前先深呼吸十秒钟，试着换位思考。保持平和乐观的心态，不仅对心理健康有益，也能让你在人际关系中更受欢迎。",
            pinyin: "Xià cì chōngdòng zhīqián xiān shēnhūxī shí miǎozhōng, shìzhe huànwèi sīkǎo. Bǎochí pínghé lèguān de xīntài, bùjǐn duì xīnlǐ jiànkāng yǒuyì, yě néng ràng nǐ zài rénjì guānxi zhōng gèng shòu huānyíng.",
            vi: "Lần sau trước khi bốc đồng hãy hít thở sâu 10 giây, thử đặt mình vào vị trí đối phương. Giữ tâm thế bình hòa lạc quan không chỉ có lợi cho sức khỏe tâm lý mà còn giúp bạn được yêu mến hơn trong các mối quan hệ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 之所以……是因为…… (Sở dĩ... là bởi vì...)",
        formula: "Chủ ngữ + 之所以 + Kết quả，是因为 + Nguyên nhân",
        explanationVi:
          "Đảo kết quả lên trước và nhấn mạnh nguyên nhân ở vế sau, cực kỳ thường gặp trong văn nghị luận và đọc hiểu HSK 5.",
        examples: [
          {
            zh: "他之所以能一直保持乐观的心态，是因为他懂得自我调节。",
            pinyin: "Tā zhī suǒyǐ néng yīzhí bǎochí lèguān de xīntài, shì yīnwèi tā dǒngde zìwǒ tiáojié.",
            vi: "Anh ấy sở dĩ luôn giữ được tâm thế lạc quan là bởi vì anh ấy biết cách tự điều tiết bản thân.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 忍不住 (rěn bù zhù — không kìm được)",
        formula: "Chủ ngữ + 忍不住 + Động từ (笑 / 哭 / 发脾气 / 问)",
        explanationVi:
          "Bổ ngữ khả năng biểu thị không thể khống chế được cảm xúc hoặc hành động của bản thân.",
        examples: [
          {
            zh: "听到这个好消息，她激动得忍不住流下了眼泪。",
            pinyin: "Tīngdào zhège hǎo xiāoxi, tā jīdòng de rěn bù zhù liúxià le yǎnlèi.",
            vi: "Nghe tin vui này, cô ấy xúc động đến mức không kìm được mà rơi nước mắt.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk5-l11-q1",
        "心理学研究表明，适度的压力能激发潜能，但长期处于焦虑状态则会损害身心健康，因此学会及时缓解压力至关重要。",
        "Xīnlǐxué yánjiū biǎomíng, shìdù de yālì néng jīfā qiánnéng, dàn chángqī chǔyú jiāolǜ zhuàngtài zé huì sǔnhài shēnxīn jiànkāng, yīncǐ xuéhuì jíshí huǎnjiě yālì zhìguān zhòngyào.",
        "Nghiên cứu tâm lý học chỉ ra rằng áp lực vừa phải có thể khơi dậy tiềm năng, nhưng ở trong trạng thái lo âu kéo dài sẽ gây hại cho sức khỏe thể chất và tinh thần, vì vậy học cách giải tỏa áp lực kịp thời là vô cùng quan trọng.",
        "Theo đoạn văn, áp lực vừa phải có tác dụng gì?",
        [
          "Có thể khơi dậy tiềm năng.",
          "Luôn gây hại cho sức khỏe tâm lý.",
          "Khiến con người mất đi động lực làm việc.",
          "Không có bất kỳ ảnh hưởng nào.",
        ],
        "Có thể khơi dậy tiềm năng.",
        "适度的压力能激发潜能 = áp lực vừa phải có thể khơi dậy tiềm năng."
      ),
      readingComp(
        "hsk5-l11-q2",
        "当你感到心情低落时，千万不要把所有烦恼憋在心里，找一位信任的朋友倾诉，往往能让你轻松很多。",
        "Dāng nǐ gǎndào xīnqíng dīluò shí, qiānwàn bùyào bǎ suǒyǒu fánnǎo biē zài xīnlǐ, zhǎo yī wèi xìnrèn de péngyou qīngsù, wǎngwǎng néng ràng nǐ qīngsōng hěn duō.",
        "Khi bạn cảm thấy tâm trạng sa sút, tuyệt đối đừng giữ mọi phiền muộn trong lòng, tìm một người bạn tin cậy để tâm sự thường sẽ giúp bạn nhẹ nhõm hơn nhiều.",
        "Đoạn văn khuyên chúng ta làm gì khi tâm trạng sa sút?",
        [
          "Tìm một người bạn tin cậy để tâm sự.",
          "Giữ kín mọi phiền muộn trong lòng.",
          "Tránh tiếp xúc với tất cả mọi người.",
          "Làm việc xuyên đêm để quên đi nỗi buồn.",
        ],
        "Tìm một người bạn tin cậy để tâm sự.",
        "找一位信任的朋友倾诉 = tìm một người bạn đáng tin để giãi bày."
      ),
      readingComp(
        "hsk5-l11-q3",
        "在团队合作中，之所以会产生很多不必要的矛盾，主要是因为大家缺乏换位思考的意识。",
        "Zài tuánduì hézuò zhōng, zhī suǒyǐ huì chǎnshēng hěn duō bù bìyào de máodùn, zhǔyào shì yīnwèi dàjiā quēfá huànwèi sīkǎo de yìshí.",
        "Trong hợp tác nhóm, sở dĩ nảy sinh nhiều mâu thuẫn không cần thiết chủ yếu là vì mọi người thiếu ý thức đặt mình vào vị trí người khác.",
        "Nguyên nhân chính gây ra mâu thuẫn trong làm việc nhóm là gì?",
        [
          "Thiếu ý thức đặt mình vào vị trí người khác.",
          "Thời gian làm việc quá ngắn.",
          "Không có đủ tài liệu tham khảo.",
          "Mọi người đều quá lạc quan.",
        ],
        "Thiếu ý thức đặt mình vào vị trí người khác.",
        "主要是因为大家缺乏换位思考的意识."
      ),
      readingComp(
        "hsk5-l11-q4",
        "真正成熟的人，不是没有负面情绪，而是懂得在关键时刻有效调节自己的情绪，不被冲动左右。",
        "Zhēnzhèng chéngshú de rén, bùshì méiyǒu fùmiàn qíngxù, érshì dǒngde zài guānjiàn shíkè yǒuxiào tiáojié zìjǐ de qíngxù, bù bèi chōngdòng zuǒyòu.",
        "Người thực sự trưởng thành không phải là không có cảm xúc tiêu cực, mà là biết cách điều tiết cảm xúc hiệu quả vào thời khắc quan trọng, không bị sự bốc đồng chi phối.",
        "Theo đoạn văn, người thực sự trưởng thành có đặc điểm nào?",
        [
          "Biết cách điều tiết cảm xúc hiệu quả, không bị sự bốc đồng chi phối.",
          "Không bao giờ có cảm xúc tiêu cực.",
          "Luôn thể hiện sự tức giận ngay lập tức.",
          "Không quan tâm đến cảm xúc của bản thân.",
        ],
        "Biết cách điều tiết cảm xúc hiệu quả, không bị sự bốc đồng chi phối.",
        "懂得在关键时刻有效调节自己的情绪，不被冲动左右."
      ),
      readingComp(
        "hsk5-l11-q5",
        "面对挫折时，保持积极乐观的心态，往往比盲目抱怨更容易找到解决问题的办法。",
        "Miànduì cuòzhé shí, bǎochí jījí lèguān de xīntài, wǎngwǎng bǐ mángmù bàoyuàn gèng róngyì zhǎodào jiějué wèntí de bànfǎ.",
        "Khi đối mặt với trắc trở, giữ tâm thế tích cực lạc quan thường dễ tìm ra cách giải quyết vấn đề hơn là mù quáng phàn nàn.",
        "Ý chính của câu trên là gì?",
        [
          "Tâm thế lạc quan giúp giải quyết khó khăn hiệu quả hơn phàn nàn.",
          "Phàn nàn là cách tốt nhất để vượt qua trắc trở.",
          "Khi gặp khó khăn nên bỏ cuộc ngay.",
          "Người lạc quan không bao giờ gặp thất bại.",
        ],
        "Tâm thế lạc quan giúp giải quyết khó khăn hiệu quả hơn phàn nàn.",
        "保持积极乐观的心态...更容易找到解决问题的办法."
      ),
    ],
  },

  // ==========================================
  // BÀI 12: HSK 5 综合模拟与总结 (Tổng ôn chiến lược & Viết luận HSK 5)
  // ==========================================
  {
    id: "hsk5-l12-zonghe",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Tổng ôn chiến lược & Viết luận HSK 5",
    titleZh: "第十二课：HSK 5 综合模拟与总结",
    titlePinyin: "Dì shí'èr kè: HSK wǔ zōnghé mónǐ yǔ zǒngjié",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=pSKS18qbgPU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 5 Bài 12 HSK 5 综合模拟与总结",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Chiến lược phân bổ thời gian HSK 5: Nghe (30 phút) → Đọc (45 phút, không dừng quá 1 phút ở 1 câu khó) → Viết (40 phút: 10 phút sắp xếp câu + 30 phút cho 2 đoạn văn 80 chữ).",
      "Cấu trúc 不仅……而且……, 虽然……但是……, 只要……就…… giúp câu văn HSK 5 đạt tiêu chí đa dạng ngữ pháp.",
      "Thành ngữ 持之以恒 (chí zhī yǐ héng — kiên trì bền bỉ) và 循序渐进 (xún xù jiàn jìn — tiến từng bước vững chắc) rất hợp dùng trong bài luận tổng kết.",
    ],
    newWords: [
      {
        hanzi: "综合",
        pinyin: "zōnghé",
        partOfSpeech: "Động từ/Tính từ",
        meaningVi: "tổng hợp",
        radical: "纟 (Mịch)",
        strokeCount: 17,
      },
      {
        hanzi: "模拟",
        pinyin: "mónǐ",
        partOfSpeech: "Động từ",
        meaningVi: "mô phỏng, thi thử",
        radical: "木 (Mộc)",
        strokeCount: 21,
      },
      {
        hanzi: "策略",
        pinyin: "cèlüè",
        partOfSpeech: "Danh từ",
        meaningVi: "chiến lược",
        radical: "竹 (Trúc)",
        strokeCount: 23,
      },
      {
        hanzi: "分配",
        pinyin: "fēnpèi",
        partOfSpeech: "Động từ",
        meaningVi: "phân bổ, phân phối",
        radical: "刀 (Đao)",
        strokeCount: 14,
      },
      {
        hanzi: "持之以恒",
        pinyin: "chí zhī yǐ héng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "kiên trì bền bỉ lâu dài",
        radical: "扌 (Tài gẩy)",
        strokeCount: 25,
      },
      {
        hanzi: "循序渐进",
        pinyin: "xún xù jiàn jìn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "tuần tự tiến lên từng bước",
        radical: "彳 (Xích)",
        strokeCount: 37,
      },
      {
        hanzi: "充分发挥",
        pinyin: "chōngfèn fāhuī",
        partOfSpeech: "Cụm động từ",
        meaningVi: "phát huy tối đa, phát huy trọn vẹn",
        radical: "亠 (Đầu)",
        strokeCount: 24,
      },
      {
        hanzi: "脱颖而出",
        pinyin: "tuō yǐng ér chū",
        partOfSpeech: "Thành ngữ",
        meaningVi: "nổi bật vượt trội lên hẳn",
        radical: "月 (Nguyệt)",
        strokeCount: 35,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chiến lược phân bổ thời gian trong phòng thi HSK 5",
        lines: [
          {
            speaker: "小兰",
            zh: "下周就要参加HSK 5正式考试了，我做模拟题时阅读总是来不及做完。",
            pinyin: "Xià zhōu jiù yào cānjiā HSK wǔ zhèngshì kǎoshì le, wǒ zuò mónǐtí shí yuèdú zǒngshì láibují zuòwán.",
            vi: "Tuần sau là thi chính thức HSK 5 rồi, lúc làm đề thi thử mình cứ hay không kịp làm hết phần đọc.",
          },
          {
            speaker: "陈老师",
            zh: "考试不仅考语言水平，更考时间分配策略。阅读遇到生词别纠结，先抓关键词和首尾句，确保把会做的题稳稳拿分。",
            pinyin: "Kǎoshì bùjǐn kǎo yǔyán shuǐpíng, gèng kǎo shíjiān fēnpèi cèlüè. Yuèdú yùdào shēngcí bié jiūjié, xiān zhuā guānjiàncí hé shǒuwěijù, quèbǎo bǎ huì zuò de tí wěnwěn náfēn.",
            vi: "Thi cử không chỉ kiểm tra trình độ ngôn ngữ mà còn kiểm tra chiến lược phân bổ thời gian. Đọc hiểu gặp từ mới đừng dây dưa, hãy bắt từ khóa và câu đầu/cuối trước, đảm bảo ăn chắc điểm những câu mình biết làm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Tổng kết hành trình chinh phục HSK 5",
        lines: [
          {
            speaker: "小兰",
            zh: "回想这半年备考，从词汇辨析到看图写作，真的收获很大。",
            pinyin: "Huíxiǎng zhè bàn nián bèikǎo, cóng cíhuì biànxī dào kàntú xiězuò, zhēn de shōuhuò hěn dà.",
            vi: "Nhìn lại nửa năm ôn thi này, từ phân biệt từ vựng đến nhìn tranh viết văn, thực sự thu hoạch rất lớn.",
          },
          {
            speaker: "陈老师",
            zh: "语言学习贵在循序渐进、持之以恒。相信你一定能在考场上充分发挥自己的实力，取得理想成绩！",
            pinyin: "Yǔyán xuéxí guì zài xún xù jiàn jìn, chí zhī yǐ héng. Xiāngxìn nǐ yīdìng néng zài kǎochǎng shàng chōngfèn fāhuī zìjǐ de shílì, qǔdé lǐxiǎng chéngjì!",
            vi: "Học ngôn ngữ quý ở chỗ tiến từng bước vững chắc và kiên trì bền bỉ. Thầy tin em nhất định sẽ phát huy trọn vẹn thực lực trong phòng thi và đạt kết quả như ý!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 贵在…… (guì zài — quý ở chỗ / điều quan trọng nhất nằm ở)",
        formula: "Chủ ngữ + 贵在 + Cụm động từ / Thành ngữ",
        explanationVi:
          "Cách diễn đạt trang trọng dùng để đúc kết triết lý hoặc kinh nghiệm học tập, rất hay để kết bài viết HSK 5.",
        examples: [
          {
            zh: "学习外语贵在持之以恒，每天进步一点点。",
            pinyin: "Xuéxí wàiyǔ guì zài chí zhī yǐ héng, měitiān jìnbù yīdiǎndiǎn.",
            vi: "Học ngoại ngữ quý ở sự kiên trì bền bỉ, mỗi ngày tiến bộ một chút.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 不仅……更…… (Không chỉ... mà còn hơn thế...)",
        formula: "Chủ ngữ + 不仅 + A，更 + B",
        explanationVi:
          "Mức độ tăng tiến mạnh hơn 不仅……而且……, giúp làm nổi bật luận điểm chính trong văn nghị luận.",
        examples: [
          {
            zh: "通过HSK 5考试不仅是一张证书，更是职场竞争力的有力证明。",
            pinyin: "Tōngguò HSK wǔ kǎoshì bùjǐn shì yī zhāng zhèngshū, gèng shì zhíchǎng jìngzhēnglì de yǒulì zhèngmíng.",
            vi: "Vượt qua kỳ thi HSK 5 không chỉ là một tấm chứng chỉ, mà hơn thế còn là minh chứng mạnh mẽ cho năng lực cạnh tranh nơi công sở.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk5-l12-q1",
        "恒",
        "héng",
        "bền bỉ, vĩnh hằng (trong 持之以恒)",
        "Chữ 恒 gồm bộ Tâm đứng (忄) bên trái và chữ 亘 bên phải, tổng 9 nét."
      ),
      writingStroke(
        "hsk5-l12-q2",
        "策",
        "cè",
        "sách lược, kế sách (trong 策略)",
        "Chữ 策 gồm bộ Trúc (竹) ở trên và chữ 朿 ở dưới, tổng 12 nét."
      ),
      writingOrder(
        "hsk5-l12-q3",
        "Sắp xếp thành câu tổng kết về chiến lược thi HSK 5:",
        ["合理分配", "在综合模拟中，", "考试时间。", "我们要学会"],
        "在综合模拟中，我们要学会合理分配考试时间。",
        "Zài zōnghé mónǐ zhōng, wǒmen yào xuéhuì hélǐ fēnpèi kǎoshì shíjiān.",
        "Trạng ngữ 在综合模拟中 đặt đầu câu, theo sau là Chủ ngữ 我们 + 要学会合理分配考试时间."
      ),
      writingOrder(
        "hsk5-l12-q4",
        "Sắp xếp thành câu khích lệ dùng thành ngữ 持之以恒:",
        ["取得理想成绩。", "只要持之以恒，", "在考场上", "就一定能"],
        "只要持之以恒，就一定能在考场上取得理想成绩。",
        "Zhǐyào chí zhī yǐ héng, jiù yīdìng néng zài kǎochǎng shàng qǔdé lǐxiǎng chéngjì.",
        "Cấu trúc điều kiện 只要……就…… nối với trạng ngữ địa điểm 在考场上 + 取得理想成绩."
      ),
      writingTwoSentences(
        "hsk5-l12-q5",
        "持之以恒",
        "chí zhī yǐ héng",
        "kiên trì bền bỉ",
        "Gợi ý: Câu 1 viết về việc học tiếng Trung HSK 5; Câu 2 viết về mục tiêu dài hạn trong sự nghiệp."
      ),
    ],
  },
];
