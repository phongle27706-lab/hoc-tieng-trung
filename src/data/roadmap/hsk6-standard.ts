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

export const HSK6_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 病句分析（一）：搭配不当与成分残缺
  // ==========================================
  {
    id: "hsk6-l1-bingju1",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Sửa câu bệnh 1 — Kết hợp từ sai & Thiếu thành phần",
    titleZh: "第一课：病句分析（一）：搭配不当与成分残缺",
    titlePinyin: "Dì yī kè: Bìngjù fēnxī (yī): Dāpèi búdàng yǔ chéngfèn cánquē",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=MkSSVeicRJU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 1 病句分析（一）：搭配不当与成分残缺",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "搭配不当 (Kết hợp từ sai) là dạng câu bệnh phổ biến nhất trong phần Đọc 1 HSK 6: động từ không khớp tân ngữ (ví dụ: 提高...态度 là sai, phải là 端正...态度 hoặc 提高...水平).",
      "成分残缺 (Thiếu thành phần câu) thường gặp nhất là thiếu chủ ngữ do lạm dụng giới từ ở đầu câu: '通过/由于/在...下，使/让...' khiến cả cụm danh từ bị nhốt trong cụm giới từ.",
      "Mẹo thi HSK 6: Khi thấy '通过...使...' hoặc '由于...让...', hãy xóa một trong hai từ để trả lại chủ ngữ cho câu.",
    ],
    newWords: [
      {
        hanzi: "搭配",
        pinyin: "dāpèi",
        partOfSpeech: "Động từ",
        meaningVi: "kết hợp, phối hợp (từ ngữ, màu sắc)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 22,
      },
      {
        hanzi: "残缺",
        pinyin: "cánquē",
        partOfSpeech: "Tính từ",
        meaningVi: "khuyết thiếu, không trọn vẹn",
        radical: "歹 (Đãi)",
        strokeCount: 19,
      },
      {
        hanzi: "主语",
        pinyin: "zhǔyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "chủ ngữ",
        radical: "丶 (Chấm)",
        strokeCount: 14,
      },
      {
        hanzi: "谓语",
        pinyin: "wèiyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "vị ngữ",
        radical: "讠 (Ngôn)",
        strokeCount: 20,
      },
      {
        hanzi: "宾语",
        pinyin: "bīnyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "tân ngữ",
        radical: "宀 (Miên)",
        strokeCount: 19,
      },
      {
        hanzi: "端正",
        pinyin: "duānzhèng",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "chấn chỉnh, đúng đắn, ngay ngắn",
        radical: "立 (Lập)",
        strokeCount: 19,
      },
      {
        hanzi: "滥用",
        pinyin: "lànyòng",
        partOfSpeech: "Động từ",
        meaningVi: "lạm dụng",
        radical: "氵 (Chấm thủy)",
        strokeCount: 18,
      },
      {
        hanzi: "甄别",
        pinyin: "zhēnbié",
        partOfSpeech: "Động từ",
        meaningVi: "phân biệt, thẩm định, sàng lọc",
        radical: "瓦 (Ngõa)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bắt mạch lỗi thiếu chủ ngữ trong HSK 6",
        lines: [
          {
            speaker: "Giảng viên",
            zh: "请大家看这个句子：“通过这次实习，使我学到了很多宝贵的经验。”请问它错在哪里？",
            pinyin: "Qǐng dàjiā kàn zhège jùzi: 'Tōngguò zhè cì shíxí, shǐ wǒ xuédào le hěn duō bǎoguì de jīngyàn.' Qǐngwèn tā cuò zài nǎlǐ?",
            vi: "Mời cả lớp xem câu này: 'Thông qua kỳ thực tập lần này, khiến tôi học được nhiều kinh nghiệm quý báu.' Xin hỏi nó sai ở đâu?",
          },
          {
            speaker: "Học viên",
            zh: "老师，这句话缺少主语！“通过”和“使”同时出现，把主语“这次实习”给淹没了。",
            pinyin: "Lǎoshī, zhè jù huà quēshǎo zhǔyǔ! 'Tōngguò' hé 'shǐ' tóngshí chūxiàn, bǎ zhǔyǔ 'zhè cì shíxí' gěi yānmò le.",
            vi: "Thưa thầy, câu này thiếu chủ ngữ ạ! '通过' và '使' xuất hiện cùng lúc làm chìm mất chủ ngữ 'kỳ thực tập lần này'.",
          },
          {
            speaker: "Giảng viên",
            zh: "完全正确。修改方法很简单，删去“通过”或删去“使”，句子就通顺了。",
            pinyin: "Wánquán zhèngquè. Xiūgǎi fāngfǎ hěn jiǎndān, shānqù 'tōngguò' huò shānqù 'shǐ', jùzi jiù tōngshùn le.",
            vi: "Hoàn toàn chính xác. Cách sửa rất đơn giản, xóa '通过' hoặc xóa '使' là câu sẽ thông suốt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Phân tích lỗi kết hợp động-tân (动宾搭配不当)",
        lines: [
          {
            speaker: "Học viên",
            zh: "老师，“我们要大力提高消费者的环保意识和消费习惯”这句话为什么也是病句？",
            pinyin: "Lǎoshī, 'Wǒmen yào dàlì tígāo xiāofèizhě de huánbǎo yìshí hé xiāofèi xíguàn' zhè jù huà wèishénme yě shì bìngjù?",
            vi: "Thưa thầy, câu 'Chúng ta cần nâng cao mạnh mẽ ý thức bảo vệ môi trường và thói quen tiêu dùng của người tiêu dùng' tại sao cũng là câu bệnh ạ?",
          },
          {
            speaker: "Giảng viên",
            zh: "“提高”可以搭配“意识”，但不能搭配“习惯”。习惯应该用“培养”或“养成”来搭配。",
            pinyin: "'Tígāo' kěyǐ dāpèi 'yìshí', dàn bù néng dāpèi 'xíguàn'. Xíguàn yīnggāi yòng 'péiyǎng' huò 'yǎngchéng' lái dāpèi.",
            vi: "'提高' (nâng cao) có thể đi với '意识' (ý thức), nhưng không thể đi với '习惯' (thói quen). Thói quen phải đi với '培养' hoặc '养成' (hình thành/bồi dưỡng).",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Lỗi thiếu chủ ngữ do cấu trúc giới từ kép",
        formula: "[Sai] 通过/由于/在...下 + 使/让/令... → [Đúng] Xóa giới từ đầu hoặc xóa 使/让",
        explanationVi:
          "Trong tiếng Trung học thuật, cụm giới từ không thể làm chủ ngữ. Nếu vế sau lại dùng động từ sai khiến (使、让、令), câu sẽ mất hoàn toàn chủ ngữ.",
        examples: [
          {
            zh: "经过努力，他终于通过了考试。（Đúng）",
            pinyin: "Jīngguò nǔlì, tā zhōngyú tōngguò le kǎoshì.",
            vi: "Trải qua nỗ lực, anh ấy cuối cùng đã thi đỗ.",
          },
          {
            zh: "这次经历让我明白了许多道理。（Đúng）",
            pinyin: "Zhè cì jīnglì ràng wǒ míngbai le xǔduō dàolǐ.",
            vi: "Trải nghiệm lần này khiến tôi hiểu ra nhiều đạo lý.",
          },
        ],
      },
      {
        titleVi: "Lỗi kết hợp động từ - tân ngữ (动宾搭配不当)",
        formula: "Động từ + Tân ngữ 1 (đúng) + 和/与 + Tân ngữ 2 (sai)",
        explanationVi:
          "Đề HSK 6 rất hay giấu lỗi bằng cách cho một động từ đi kèm hai tân ngữ nối bằng 和/与, trong đó tân ngữ thứ hai không kết hợp được với động từ.",
        examples: [
          {
            zh: "我们既要提高工作效率，又要改善工作环境。",
            pinyin: "Wǒmen jì yào tígāo gōngzuò xiàolǜ, yòu yào gǎishàn gōngzuò huánjìng.",
            vi: "Chúng ta vừa phải nâng cao hiệu suất làm việc, vừa phải cải thiện môi trường làm việc.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk6-l1-q1",
        "A. 通过阅读大量经典著作，使他的写作水平有了显著提高。\nB. 阅读大量经典著作，使他的写作水平有了显著提高。",
        "A. Tōngguò yuèdú dàliàng jīngdiǎn zhùzuò, shǐ tā de xiězuò shuǐpíng yǒule xiǎnzhù tígāo.\nB. Yuèdú dàliàng jīngdiǎn zhùzuò, shǐ tā de xiězuò shuǐpíng yǒule xiǎnzhù tígāo.",
        "A. Thông qua việc đọc lượng lớn tác phẩm kinh điển, khiến trình độ viết của anh ấy nâng cao rõ rệt.\nB. Việc đọc lượng lớn tác phẩm kinh điển khiến trình độ viết của anh ấy nâng cao rõ rệt.",
        "Câu nào là câu bệnh (病句) và mắc lỗi gì?",
        [
          "Câu A mắc lỗi thiếu chủ ngữ (成分残缺)",
          "Câu B mắc lỗi thiếu chủ ngữ",
          "Cả hai câu đều đúng",
          "Câu A mắc lỗi thừa từ",
        ],
        "Câu A mắc lỗi thiếu chủ ngữ (成分残缺)",
        "Câu A dùng đồng thời '通过' và '使' khiến câu mất chủ ngữ."
      ),
      readingComp(
        "hsk6-l1-q2",
        "为了防止此类安全事故不再发生，公司加强了设备巡检力度。",
        "Wèile fángzhǐ cǐlèi ānquán shìgù bú zài fāshēng, gōngsī jiāqiáng le shèbèi xúnjiǎn lìdù.",
        "Để phòng ngừa sự cố an toàn loại này không tái diễn nữa, công ty đã tăng cường kiểm tra thiết bị.",
        "Câu trên mắc lỗi gì?",
        [
          "Phủ định sai logic (否定不当): 防止 + 不再 làm đảo ngược nghĩa",
          "Thiếu tân ngữ",
          "Sai trật tự trạng ngữ",
          "Câu hoàn toàn chính xác",
        ],
        "Phủ định sai logic (否定不当): 防止 + 不再 làm đảo ngược nghĩa",
        "'防止' đã mang nghĩa phủ định (ngăn chặn), đi kèm '不再' thành 'ngăn chặn không xảy ra' → sai nghĩa. Phải bỏ '不'."
      ),
      readingComp(
        "hsk6-l1-q3",
        "这部纪录片真实地再现了古代丝绸之路的繁华景象和历史意义。",
        "Zhè bù jìlùpiàn zhēnshí de zàixiàn le gǔdài Sīchóu zhī Lù de fánhuá jǐngxiàng hé lìshǐ yìyì.",
        "Bộ phim tài liệu này tái hiện chân thực cảnh tượng phồn hoa và ý nghĩa lịch sử của Con đường Tơ lụa cổ đại.",
        "Lỗi kết hợp từ (搭配不当) nằm ở đâu?",
        [
          "再现 không thể kết hợp với 历史意义",
          "真实地 không thể bổ nghĩa cho 再现",
          "这部 không đi với 纪录片",
          "繁华 không đi với 景象",
        ],
        "再现 không thể kết hợp với 历史意义",
        "'再现' (tái hiện) đi được với '景象' (cảnh tượng), nhưng không đi với '意义' (ý nghĩa); phải tách vế như '并深刻揭示了其历史意义'."
      ),
      readingComp(
        "hsk6-l1-q4",
        "他虽然年纪不大，但工作经验十分丰富，深受同事们的尊敬和爱戴。",
        "Tā suīrán niánjì bú dà, dàn gōngzuò jīngyàn shífēn fēngfù, shēnshòu tóngshìmen de zūnjìng hé àidài.",
        "Anh ấy tuy tuổi không lớn nhưng kinh nghiệm làm việc rất phong phú, nhận được sự kính trọng và yêu mến sâu sắc của đồng nghiệp.",
        "Chọn nhận xét đúng về câu trên:",
        [
          "Câu đúng ngữ pháp, không có lỗi câu bệnh",
          "Thiếu chủ ngữ ở vế sau",
          "丰富 không đi với 经验",
          "虽然...但 dùng sai vị trí",
        ],
        "Câu đúng ngữ pháp, không có lỗi câu bệnh",
        "Cả kết hợp từ (经验丰富, 深受尊敬和爱戴) lẫn cấu trúc câu đều chuẩn xác."
      ),
      readingComp(
        "hsk6-l1-q5",
        "由于资金严重短缺，导致这个极具潜力的科研项目被迫中止。",
        "Yóuyú zījīn yánzhòng duǎnquē, dǎozhì zhège jíjù qiánlì de kēyán xiàngmù bèipò zhōngzhǐ.",
        "Do nguồn vốn thiếu hụt nghiêm trọng, dẫn đến dự án nghiên cứu đầy tiềm năng này buộc phải dừng lại.",
        "Cách sửa chuẩn nhất cho câu bệnh trên là gì?",
        [
          "Xóa '由于' hoặc xóa '导致'",
          "Đổi '短缺' thành '缺少'",
          "Xóa '被迫'",
          "Đổi '中止' thành '终止'",
        ],
        "Xóa '由于' hoặc xóa '导致'",
        "'由于...导致...' là dạng thiếu chủ ngữ kinh điển giống '通过...使...'."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 病句分析（二）：语序不当与句式杂糅
  // ==========================================
  {
    id: "hsk6-l2-bingju2",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Sửa câu bệnh 2 — Sai trật tự từ & Lẫn lộn cấu trúc",
    titleZh: "第二课：病句分析（二）：语序不当与句式杂糅",
    titlePinyin: "Dì èr kè: Bìngjù fēnxī (èr): Yǔxù búdàng yǔ jùshì záróu",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=2I3DhxA5Svk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 2 病句分析（二）：语序不当与句式杂糅",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "句式杂糅 (Lẫn lộn cấu trúc câu) là lỗi ghép 2 cấu trúc đúng thành 1 câu sai, ví dụ: '本着...为原则' (trộn giữa 本着...的原则 và 以...为原则), hay '原因是...造成的' (trộn 原因是... và 是由...造成的).",
      "语序不当 (Sai trật tự từ) thường xảy ra ở: vị trí liên từ khi 2 vế cùng/khác chủ ngữ, hoặc trật tự nhiều định ngữ (sở hữu → thời gian/địa điểm → số lượng → động/tính từ → danh từ trung tâm).",
      "Quy tắc vàng liên từ: Cùng chủ ngữ → Chủ ngữ đứng TRƯỚC liên từ (他不仅...而且...); Khác chủ ngữ → Chủ ngữ đứng SAU liên từ (不仅他...而且我也...).",
    ],
    newWords: [
      {
        hanzi: "语序",
        pinyin: "yǔxù",
        partOfSpeech: "Danh từ",
        meaningVi: "trật tự từ",
        radical: "讠 (Ngôn)",
        strokeCount: 16,
      },
      {
        hanzi: "杂糅",
        pinyin: "záróu",
        partOfSpeech: "Động từ",
        meaningVi: "trộn lẫn, lẫn lộn (cấu trúc câu)",
        radical: "木 (Mộc)",
        strokeCount: 19,
      },
      {
        hanzi: "定语",
        pinyin: "dìngyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "định ngữ",
        radical: "宀 (Miên)",
        strokeCount: 17,
      },
      {
        hanzi: "状语",
        pinyin: "zhuàngyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "trạng ngữ",
        radical: "丬 (Tường)",
        strokeCount: 16,
      },
      {
        hanzi: "关联词",
        pinyin: "guānliáncí",
        partOfSpeech: "Danh từ",
        meaningVi: "liên từ, từ nối câu phức",
        radical: "丷 (Bát)",
        strokeCount: 25,
      },
      {
        hanzi: "本着",
        pinyin: "běnzhe",
        partOfSpeech: "Giới từ",
        meaningVi: "dựa trên, xuất phát từ (nguyên tắc)",
        radical: "木 (Mộc)",
        strokeCount: 16,
      },
      {
        hanzi: "所致",
        pinyin: "suǒzhì",
        partOfSpeech: "Động từ",
        meaningVi: "do... gây nên (văn viết)",
        radical: "户 (Hộ)",
        strokeCount: 18,
      },
      {
        hanzi: "逻辑",
        pinyin: "luóji",
        partOfSpeech: "Danh từ",
        meaningVi: "logic, tính hợp lý",
        radical: "辶 (Xước)",
        strokeCount: 24,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Nhận diện 句式杂糅 trong đề thi thật",
        lines: [
          {
            speaker: "Giảng viên",
            zh: "“这次事故的原因主要是由于操作失误造成的。”大家读起来是不是觉得很顺口？",
            pinyin: "'Zhè cì shìgù de yuányīn zhǔyào shì yóuyú cāozuò shīwù zàochéng de.' Dàjiā dú qǐlái shì bú shì juéde hěn shùnkǒu?",
            vi: "'Nguyên nhân của sự cố lần này chủ yếu là do thao tác sai lầm gây ra.' Mọi người đọc thấy có thuận miệng không?",
          },
          {
            speaker: "Học viên",
            zh: "听起来顺口，但其实是句式杂糅！应该说“原因是操作失误”或者“是由操作失误造成的”。",
            pinyin: "Tīng qǐlái shùnkǒu, dàn qíshí shì jùshì záróu! Yīnggāi shuō 'yuányīn shì cāozuò shīwù' huòzhě 'shì yóu cāozuò shīwù zàochéng de'.",
            vi: "Nghe thì thuận miệng nhưng thực ra là lẫn lộn cấu trúc! Phải nói 'nguyên nhân là thao tác sai lầm' hoặc 'là do thao tác sai lầm gây ra'.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Vị trí chủ ngữ và liên từ",
        lines: [
          {
            speaker: "Học viên",
            zh: "“不但他精通汉语，而且还写得一手好书法。”这句话的语序对吗？",
            pinyin: "'Búdàn tā jīngtōng Hànyǔ, érqiě hái xiě de yì shǒu hǎo shūfǎ.' Zhè jù huà de yǔxù duì ma?",
            vi: "'Không những anh ấy tinh thông tiếng Trung, mà còn viết thư pháp rất đẹp.' Trật tự từ câu này đúng không ạ?",
          },
          {
            speaker: "Giảng viên",
            zh: "不对。前后两个分句的主语都是“他”，所以“他”必须放在“不但”前面。",
            pinyin: "Bú duì. Qiánhòu liǎng gè fēnjù de zhǔyǔ dōu shì 'tā', suǒyǐ 'tā' bìxū fàng zài 'búdàn' qiánmiàn.",
            vi: "Không đúng. Chủ ngữ cả hai vế đều là '他', nên '他' bắt buộc phải đặt trước '不但'.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Các cặp 句式杂糅 hay thi nhất trong HSK 6",
        formula: "本着...的原则 (Đúng) / 以...为原则 (Đúng) ≠ 本着...为原则 (Sai)",
        explanationVi:
          "Ngoài '原因是...造成的', cần thuộc lòng các cặp sai: '成分是...配制而成的', '围绕以...为中心', '对于...问题上' (trộn 对于... và 在...问题上).",
        examples: [
          {
            zh: "我们本着互利共赢的原则展开合作。",
            pinyin: "Wǒmen běnzhe hùlì gòngyíng de yuánzé zhǎnkāi hézuò.",
            vi: "Chúng tôi triển khai hợp tác trên nguyên tắc đôi bên cùng có lợi.",
          },
        ],
      },
      {
        titleVi: "Trật tự logic theo tiến trình thời gian/mức độ",
        formula: "Phát hiện → Nghiên cứu → Giải quyết (không đảo ngược)",
        explanationVi:
          "Khi nhiều động từ xếp nối tiếp nhau, chúng phải tuân theo trình tự nhận thức hoặc thời gian tự nhiên (ví dụ: '讨论并通过' chứ không nói '通过并讨论').",
        examples: [
          {
            zh: "大会认真讨论并通过了这项决议。",
            pinyin: "Dàhuì rènzhēn tǎolùn bìng tōngguò le zhè xiàng juéyì.",
            vi: "Đại hội đã thảo luận nghiêm túc và thông qua nghị quyết này.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk6-l2-q1",
        "Sắp xếp thành câu đúng trật tự liên từ (cùng chủ ngữ):",
        ["他", "不仅", "精通", "三国语言，", "而且", "熟悉", "国际法。"],
        "他不仅精通三国语言，而且熟悉国际法。",
        "Tā bùjǐn jīngtōng sānguó yǔyán, érqiě shúxī guójìfǎ.",
        "Cùng chủ ngữ '他' nên '他' đứng trước '不仅'."
      ),
      writingOrder(
        "hsk6-l2-q2",
        "Sắp xếp thành câu không bị lẫn lộn cấu trúc (dùng 以...为原则):",
        ["双方", "以", "平等互利", "为原则", "签署了", "合作协议。"],
        "双方以平等互利为原则签署了合作协议。",
        "Shuāngfāng yǐ píngděng hùlì wéi yuánzé qiānshǔ le hézuò xiéyì.",
        "Dùng chuẩn cấu trúc '以...为原则', không trộn với '本着'."
      ),
      writingOrder(
        "hsk6-l2-q3",
        "Sắp xếp theo đúng trật tự logic hành động:",
        ["专家组", "经过", "深入调研，", "最终", "制定并实施了", "整改方案。"],
        "专家组经过深入调研，最终制定并实施了整改方案。",
        "Zhuānjiāzǔ jīngguò shēnrù diàoyán, zuìzhōng zhìdìng bìng shíshī le zhěnggǎi fāng'àn.",
        "Phải 制定 (xây dựng) trước rồi mới 实施 (thực thi)."
      ),
      writingTwoSentences(
        "hsk6-l2-q4",
        "本着",
        "běnzhe",
        "dựa trên, xuất phát từ (nguyên tắc)",
        "Lưu ý dùng đúng cấu trúc '本着...的原则/精神', tuyệt đối không trộn thành '本着...为原则'."
      ),
      writingStroke(
        "hsk6-l2-q5",
        "杂",
        "zá",
        "lẫn lộn, tạp (trong 杂糅)",
        "Chữ 杂 gồm 九 ở trên và 木 ở dưới, tổng 6 nét."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 高级成语与书面语
  // ==========================================
  {
    id: "hsk6-l3-chengyu",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Thành ngữ cao cấp & Văn viết trang trọng",
    titleZh: "第三课：高级成语与书面语",
    titlePinyin: "Dì sān kè: Gāojí chéngyǔ yǔ shūmiànyǔ",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=wJsYM_EmSYE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 3 高级成语与书面语",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Thành ngữ HSK 6 hay bẫy ở sắc thái nghĩa (褒义 khen / 贬义 chê): ví dụ 处心积虑 (dụng tâm xấu — chê) vs 呕心沥血 (dốc hết tâm huyết — khen).",
      "Văn viết trang trọng (书面语) ưu tiên các từ đơn tiết hoặc song tiết cổ: 迄今为止 (cho đến nay), 亟待 (cấp bách cần), 倘若 (nếu như), 鉴于 (xét thấy).",
      "Tránh lỗi trùng lặp nghĩa với thành ngữ (语义重复): đã có '忍俊不禁' (không nhịn được cười) thì không thêm '笑起来'; đã có '当务之急' thì không thêm '当前'.",
    ],
    newWords: [
      {
        hanzi: "潜移默化",
        pinyin: "qiányí-mòhuà",
        partOfSpeech: "Thành ngữ",
        meaningVi: "ảnh hưởng âm thầm, mưa dầm thấm lâu",
        radical: "氵 (Chấm thủy)",
        strokeCount: 46,
      },
      {
        hanzi: "循序渐进",
        pinyin: "xúnxù-jiànjìn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "tuần tự tiến lên từng bước",
        radical: "彳 (Xích)",
        strokeCount: 37,
      },
      {
        hanzi: "相得益彰",
        pinyin: "xiāngdé-yìzhāng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "bổ trợ lẫn nhau càng thêm nổi bật",
        radical: "目 (Mục)",
        strokeCount: 44,
      },
      {
        hanzi: "一蹴而就",
        pinyin: "yícù-érjiù",
        partOfSpeech: "Thành ngữ",
        meaningVi: "một bước thành công ngay (thường dùng phủ định)",
        radical: "一 (Nhất)",
        strokeCount: 37,
      },
      {
        hanzi: "亟待",
        pinyin: "jídài",
        partOfSpeech: "Động từ",
        meaningVi: "cấp bách cần được (giải quyết)",
        radical: "乙 (Ất)",
        strokeCount: 17,
      },
      {
        hanzi: "鉴于",
        pinyin: "jiànyú",
        partOfSpeech: "Giới từ",
        meaningVi: "xét thấy, căn cứ vào",
        radical: "金 (Kim)",
        strokeCount: 16,
      },
      {
        hanzi: "迄今为止",
        pinyin: "qìjīn-wéizhǐ",
        partOfSpeech: "Cụm từ",
        meaningVi: "cho đến tận ngày nay",
        radical: "辶 (Xước)",
        strokeCount: 20,
      },
      {
        hanzi: "相辅相成",
        pinyin: "xiāngfǔ-xiāngchéng",
        partOfSpeech: "Thành ngữ",
        meaningVi: "bổ trợ và làm hoàn thiện lẫn nhau",
        radical: "目 (Mục)",
        strokeCount: 35,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Phỏng vấn chuyên gia giáo dục",
        lines: [
          {
            speaker: "Phóng viên",
            zh: "林教授，您认为语言学习能一蹴而就吗？",
            pinyin: "Lín jiàoshòu, nín rènwéi yǔyán xuéxí néng yícù-érjiù ma?",
            vi: "Giáo sư Lâm, ông cho rằng học ngôn ngữ có thể một bước thành công ngay không?",
          },
          {
            speaker: "Giáo sư Lâm",
            zh: "绝不可能。语言积累必须循序渐进，同时家庭和学校的潜移默化也至关重要。",
            pinyin: "Jué bù kěnéng. Yǔyán jīlěi bìxū xúnxù-jiànjìn, tóngshí jiātíng hé xuéxiào de qiányí-mòhuà yě zhìguān zhòngyào.",
            vi: "Tuyệt đối không thể. Tích lũy ngôn ngữ phải tuần tự từng bước, đồng thời sự ảnh hưởng âm thầm của gia đình và nhà trường cũng vô cùng quan trọng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Bình luận về bảo tồn di sản và du lịch",
        lines: [
          {
            speaker: "Biên tập viên",
            zh: "鉴于古城游客激增，目前亟待解决的问题是什么？",
            pinyin: "Jiànyú gǔchéng yóukè jīzēng, mùqián jídài jiějué de wèntí shì shénme?",
            vi: "Xét thấy lượng du khách đến cổ thành tăng vọt, vấn đề cấp bách cần giải quyết hiện nay là gì?",
          },
          {
            speaker: "Chuyên gia",
            zh: "是如何让文化保护与旅游开发相辅相成，而不是彼此消耗。",
            pinyin: "Shì rúhé ràng wénhuà bǎohù yǔ lǚyóu kāifā xiāngfǔ-xiāngchéng, ér búshì bǐcǐ xiāohào.",
            vi: "Là làm sao để bảo tồn văn hóa và phát triển du lịch bổ trợ lẫn nhau, chứ không phải triệt tiêu nhau.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc văn viết 鉴于...",
        formula: "鉴于 + Nguyên nhân/Bối cảnh khách quan，Chủ ngữ + Quyết định/Biện pháp",
        explanationVi:
          "Dùng trong văn bản hành chính, báo chí, học thuật để nêu cơ sở đưa ra một quyết định trang trọng.",
        examples: [
          {
            zh: "鉴于当前市场波动较大，公司决定暂缓扩张计划。",
            pinyin: "Jiànyú dāngqián shìchǎng bōdòng jiàodà, gōngsī juédìng zànhuǎn kuòzhāng jìhuà.",
            vi: "Xét thấy thị trường hiện tại biến động khá lớn, công ty quyết định tạm hoãn kế hoạch mở rộng.",
          },
        ],
      },
      {
        titleVi: "Cách dùng phủ định với 一蹴而就",
        formula: "Chủ ngữ + 不是/不能/无法 + 一蹴而就的",
        explanationVi:
          "Thành ngữ 一蹴而就 hầu như luôn xuất hiện trong câu phủ định để nhấn mạnh việc gì đó cần thời gian và nỗ lực lâu dài.",
        examples: [
          {
            zh: "科技自立自强绝非一蹴而就之事。",
            pinyin: "Kējì zìlì zìqiáng juéfēi yícù-érjiù zhī shì.",
            vi: "Tự chủ tự cường về khoa học công nghệ tuyệt đối không phải chuyện một sớm một chiều.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk6-l3-q1",
        "任何伟大的改革都不可能一蹴而就，需要几代人的不懈努力。",
        "Rènhé wěidà de gǎigé dōu bù kěnéng yícù-érjiù, xūyào jǐ dài rén de búxiè nǔlì.",
        "Nghe và chọn ý đúng nhất của câu:",
        [
          "Cải cách lớn không thể thành công ngay lập tức mà cần nỗ lực bền bỉ",
          "Cải cách lớn có thể hoàn thành trong thời gian ngắn",
          "Chỉ cần một thế hệ là đủ hoàn thành cải cách",
          "Cải cách không cần sự nỗ lực liên tục",
        ],
        "Cải cách lớn không thể thành công ngay lập tức mà cần nỗ lực bền bỉ",
        "'一蹴而就' nghĩa là một bước thành công ngay; '不可能一蹴而就' nhấn mạnh cần thời gian dài."
      ),
      listeningFill(
        "hsk6-l3-q2",
        "良好的家风对孩子有着潜移默化的影响。",
        "良好的家风对孩子有着____的影响。",
        "Liánghǎo de jiāfēng duì háizi yǒuzhe qiányí-mòhuà de yǐngxiǎng.",
        "Nghe và điền thành ngữ 4 chữ còn thiếu:",
        "潜移默化",
        "'潜移默化' chỉ sự tác động âm thầm, dần dần thay đổi nhận thức."
      ),
      listeningDialogue(
        "hsk6-l3-q3",
        "女：传统工艺和现代设计结合后，这款产品卖得特别好。男：确实，两者相得益彰。",
        "Nǚ: Chuántǒng gōngyì hé xiàndài shèjì jiéhé hòu, zhè kuǎn chǎnpǐn mài de tèbié hǎo. Nán: Quèshí, liǎngzhě xiāngdé-yìzhāng.",
        "Người nam có thái độ gì về sự kết hợp này?",
        [
          "Khen ngợi hai yếu tố bổ trợ khiến nhau càng nổi bật",
          "Cho rằng thiết kế hiện đại làm hỏng thủ công truyền thống",
          "Lo lắng sản phẩm sẽ khó bán",
          "Đề nghị tách riêng hai yếu tố",
        ],
        "Khen ngợi hai yếu tố bổ trợ khiến nhau càng nổi bật",
        "'相得益彰' mang nghĩa khen ngợi hai bên phối hợp giúp nhau tỏa sáng hơn."
      ),
      listeningMcq(
        "hsk6-l3-q4",
        "鉴于近期极端天气频发，组委会决定将马拉松比赛推迟一周。",
        "Jiànyú jìnqī jíduān tiānqì pínfā, zǔwěihuì juédìng jiāng mǎlāsōng bǐsài tuīchí yì zhōu.",
        "Vì sao ban tổ chức hoãn giải chạy marathon?",
        [
          "Do gần đây thời tiết cực đoan xảy ra thường xuyên",
          "Do số lượng vận động viên quá ít",
          "Do kinh phí tổ chức không đủ",
          "Do đường chạy đang sửa chữa",
        ],
        "Do gần đây thời tiết cực đoan xảy ra thường xuyên",
        "'鉴于' dẫn ra nguyên nhân/bối cảnh: 近期极端天气频发."
      ),
      listeningFill(
        "hsk6-l3-q5",
        "生态治理是当前亟待解决的核心课题。",
        "生态治理是当前____解决的核心课题。",
        "Shēngtài zhìlǐ shì dāngqián jídài jiějué de héxīn kètí.",
        "Nghe và điền từ văn viết 2 chữ còn thiếu:",
        "亟待",
        "'亟待' (jídài) nghĩa là cấp bách cần được (giải quyết)."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: HSK 6 缩写技巧与实战
  // ==========================================
  {
    id: "hsk6-l4-suoxie",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Kỹ năng tóm tắt văn bản (缩写) 1.000 chữ → 400 chữ",
    titleZh: "第四课：HSK 6 缩写技巧与实战",
    titlePinyin: "Dì sì kè: HSK 6 suōxiě jìqiǎo yǔ shízhàn",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=wCgEcn0MMl4",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 4 HSK 6 缩写技巧与实战",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Quy định phần Viết HSK 6: Đọc bài văn ~1.000 chữ trong 10 phút (không được ghi chép), sau đó thu đề và viết lại thành bài ~400 chữ trong 35 phút, tự đặt tiêu đề.",
      "Nguyên tắc 6 yếu tố (六要素): Thời gian (时间), Địa điểm (地点), Nhân vật (人物), Nguyên nhân (起因), Diễn biến (经过), Kết quả (结果). Tuyệt đối không thêm quan điểm cá nhân!",
      "Chuyển lời thoại trực tiếp (A nói: '...') thành lời gián tiếp (A cho biết rằng...) để tiết kiệm dung lượng và giữ văn phong mạch lạc.",
    ],
    newWords: [
      {
        hanzi: "缩写",
        pinyin: "suōxiě",
        partOfSpeech: "Động từ",
        meaningVi: "viết tóm tắt, rút gọn văn bản",
        radical: "纟 (Mịch)",
        strokeCount: 19,
      },
      {
        hanzi: "梗概",
        pinyin: "gěnggài",
        partOfSpeech: "Danh từ",
        meaningVi: "đại ý, cốt truyện chính",
        radical: "木 (Mộc)",
        strokeCount: 24,
      },
      {
        hanzi: "主线",
        pinyin: "zhǔxiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "mạch chính, tuyến truyện chính",
        radical: "丶 (Chấm)",
        strokeCount: 13,
      },
      {
        hanzi: "删繁就简",
        pinyin: "shānfán-jiùjiǎn",
        partOfSpeech: "Thành ngữ",
        meaningVi: "lược bỏ rườm rà lấy phần tinh gọn",
        radical: "刂 (Đao)",
        strokeCount: 49,
      },
      {
        hanzi: "承上启下",
        pinyin: "chéngshàng-qǐxià",
        partOfSpeech: "Thành ngữ",
        meaningVi: "kết nối đoạn trên mở ra đoạn dưới",
        radical: "手 (Thủ)",
        strokeCount: 21,
      },
      {
        hanzi: "间接引语",
        pinyin: "jiànjiē yǐnyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "lời dẫn gián tiếp",
        radical: "门 (Môn)",
        strokeCount: 38,
      },
      {
        hanzi: "忠实",
        pinyin: "zhōngshí",
        partOfSpeech: "Tính từ",
        meaningVi: "trung thành (với nguyên tác)",
        radical: "心 (Tâm)",
        strokeCount: 16,
      },
      {
        hanzi: "篇幅",
        pinyin: "piānfú",
        partOfSpeech: "Danh từ",
        meaningVi: "dung lượng, độ dài bài viết",
        radical: "竹 (Trúc)",
        strokeCount: 27,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chiến thuật 10 phút đọc bài HSK 6",
        lines: [
          {
            speaker: "Học viên",
            zh: "老师，一篇文章一千多字，十分钟怎么记得住那么多细节？",
            pinyin: "Lǎoshī, yì piān wénzhāng yìqiān duō zì, shí fēnzhōng zěnme jì de zhù nàme duō xìjié?",
            vi: "Thưa thầy, một bài văn hơn một nghìn chữ, 10 phút làm sao nhớ hết nhiều chi tiết như vậy ạ?",
          },
          {
            speaker: "Giảng viên",
            zh: "你不需要记所有细节！重点抓人物姓名、核心冲突和结局，把景物描写和长对话删繁就简。",
            pinyin: "Nǐ bù xūyào jì suǒyǒu xìjié! Zhòngdiǎn zhuā rénwù xìngmíng, héxīn chōngtū hé jiéjú, bǎ jǐngwù miáoxiě hé cháng duìhuà shānfán-jiùjiǎn.",
            vi: "Em không cần nhớ mọi chi tiết! Tập trung nắm tên nhân vật, xung đột cốt lõi và kết cục, còn miêu tả cảnh vật và hội thoại dài thì lược bỏ rườm rà lấy ý chính.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Lỗi tối kỵ khi viết 缩写",
        lines: [
          {
            speaker: "Học viên",
            zh: "结尾处我可以加上“这个故事告诉我们……”这样的感悟吗？",
            pinyin: "Jiéwěi chù wǒ kěyǐ jiāshàng 'zhège gùshi gàosu wǒmen...' zhèyàng de gǎnwù ma?",
            vi: "Ở phần kết em có thể thêm cảm nghĩ kiểu 'Câu chuyện này dạy chúng ta...' không ạ?",
          },
          {
            speaker: "Giảng viên",
            zh: "千万不要！缩写必须忠实于原文，严禁添加个人议论或读后感，否则会被扣分。",
            pinyin: "Qiānwàn búyào! Suōxiě bìxū zhōngshí yú yuánwén, yánjìn tiānjiā gèrén yìlùn huò dúhòugǎn, fǒuzé huì bèi kòufēn.",
            vi: "Tuyệt đối đừng! Tóm tắt phải trung thành với nguyên tác, nghiêm cấm thêm bình luận cá nhân hay cảm nhận sau khi đọc, nếu không sẽ bị trừ điểm.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Chuyển đổi lời thoại trực tiếp sang gián tiếp",
        formula: "A说：“我明天去。” → A表示自己次日前往。",
        explanationVi:
          "Khi tóm tắt, đổi đại từ ngôi 1/2 (我、你) thành ngôi 3 (他、她、自己), đổi từ chỉ thời gian (明天 → 次日/第二天) để rút ngắn số chữ.",
        examples: [
          {
            zh: "父亲安慰他不必灰心，失败只是成功的起点。",
            pinyin: "Fùqīn ānwèi tā búbì huīxīn, shībài zhǐshì chénggōng de qǐdiǎn.",
            vi: "Người cha an ủi anh không cần nản lòng, thất bại chỉ là điểm khởi đầu của thành công.",
          },
        ],
      },
      {
        titleVi: "Dùng câu chuyển đoạn 承上启下",
        formula: "不久后 / 令人意想不到的是 / 正因如此，...",
        explanationVi:
          "Giúp bài tóm tắt 400 chữ không bị rời rạc như liệt kê sự kiện, giữ được mạch liên kết tự nhiên.",
        examples: [
          {
            zh: "令人意想不到的是，这份善意多年后竟改变了他的命运。",
            pinyin: "Lìng rén yìxiǎngbúdào de shì, zhè fèn shànyì duōnián hòu jìng gǎibiàn le tā de mìngyùn.",
            vi: "Điều không ngờ là tấm lòng thiện lương ấy nhiều năm sau lại thay đổi vận mệnh của anh.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk6-l4-q1",
        "Sắp xếp câu tóm tắt đúng chuẩn văn phong 缩写:",
        ["缩写", "必须", "忠实于", "原文，", "不得", "随意添加", "个人观点。"],
        "缩写必须忠实于原文，不得随意添加个人观点。",
        "Suōxiě bìxū zhōngshí yú yuánwén, bùdé suíyì tiānjiā gèrén guāndiǎn.",
        "Nêu nguyên tắc cốt lõi của bài viết tóm tắt HSK 6."
      ),
      writingOrder(
        "hsk6-l4-q2",
        "Sắp xếp câu chuyển lời thoại sang gián tiếp:",
        ["老木匠", "语重心长地", "告诉", "徒弟，", "做人", "应当", "诚实守信。"],
        "老木匠语重心长地告诉徒弟，做人应当诚实守信。",
        "Lǎo mùjiàng yǔzhòng-xīncháng de gàosu túdì, zuòrén yīngdāng chéngshí shǒuxìn.",
        "Chuyển hội thoại dài thành một câu trần thuật súc tích."
      ),
      writingOrder(
        "hsk6-l4-q3",
        "Sắp xếp câu kết nối mạch truyện (承上启下):",
        ["正因如此，", "他", "决定", "放弃", "高薪职位，", "回乡", "创业。"],
        "正因如此，他决定放弃高薪职位，回乡创业。",
        "Zhèng yīn rúcǐ, tā juédìng fàngqì gāoxīn zhíwèi, huíxiāng chuàngyè.",
        "Dùng '正因如此' để nối nguyên nhân ở đoạn trước với quyết định ở đoạn sau."
      ),
      writingTwoSentences(
        "hsk6-l4-q4",
        "删繁就简",
        "shānfán-jiùjiǎn",
        "lược bỏ rườm rà lấy phần tinh gọn",
        "Đặt 1 câu về kỹ năng viết/học tập và 1 câu về quy trình làm việc/quản lý."
      ),
      writingStroke(
        "hsk6-l4-q5",
        "缩",
        "suō",
        "rút gọn, co lại (trong 缩写)",
        "Chữ 缩 gồm bộ 纟 bên trái và 宿 bên phải, tổng 14 nét."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 财经报刊深度阅读
  // ==========================================
  {
    id: "hsk6-l5-baokan",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 5,
    title: "Bài 5: Đọc hiểu chuyên sâu báo chí tài chính",
    titleZh: "第五课：财经报刊深度阅读",
    titlePinyin: "Dì wǔ kè: Cáijīng bàokān shēndù yuèdú",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=FOMiRFz2W_E",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 5 财经报刊深度阅读",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Báo chí tài chính Trung Quốc hay dùng cặp từ so sánh: 同比 (tóngbǐ — so với cùng kỳ năm trước) và 环比 (huánbǐ — so với kỳ liền trước, ví dụ tháng trước/quý trước).",
      "Các động từ chỉ xu hướng kinh tế: 飙升 (tăng vọt), 回落 (giảm nhẹ/hạ nhiệt), 趋稳 (ổn định dần), 承压 (chịu áp lực).",
      "Khi đọc hiểu báo chí dài, hãy đọc câu chủ đề (đầu/cuối đoạn) và các từ chuyển ý (然而、但事实上、由此可见) để nắm lập luận tác giả.",
    ],
    newWords: [
      {
        hanzi: "同比",
        pinyin: "tóngbǐ",
        partOfSpeech: "Phó từ",
        meaningVi: "so với cùng kỳ năm trước (YoY)",
        radical: "口 (Khẩu)",
        strokeCount: 10,
      },
      {
        hanzi: "环比",
        pinyin: "huánbǐ",
        partOfSpeech: "Phó từ",
        meaningVi: "so với kỳ liền trước (MoM / QoQ)",
        radical: "王 (Vương)",
        strokeCount: 12,
      },
      {
        hanzi: "通胀",
        pinyin: "tōngzhàng",
        partOfSpeech: "Danh từ",
        meaningVi: "lạm phát (viết tắt của 通货膨胀)",
        radical: "辶 (Xước)",
        strokeCount: 18,
      },
      {
        hanzi: "宏观",
        pinyin: "hóngguān",
        partOfSpeech: "Tính từ",
        meaningVi: "vĩ mô",
        radical: "宀 (Miên)",
        strokeCount: 13,
      },
      {
        hanzi: "回落",
        pinyin: "huíluò",
        partOfSpeech: "Động từ",
        meaningVi: "giảm xuống, hạ nhiệt (giá cả, chỉ số)",
        radical: "囗 (Vi)",
        strokeCount: 18,
      },
      {
        hanzi: "飙升",
        pinyin: "biāoshēng",
        partOfSpeech: "Động từ",
        meaningVi: "tăng vọt, tăng phi mã",
        radical: "风 (Phong)",
        strokeCount: 17,
      },
      {
        hanzi: "韧性",
        pinyin: "rènxìng",
        partOfSpeech: "Danh từ",
        meaningVi: "sức chống chịu, tính bền bỉ (của nền kinh tế)",
        radical: "韦 (Vi)",
        strokeCount: 15,
      },
      {
        hanzi: "布局",
        pinyin: "bùjú",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "bố cục, hoạch định chiến lược đầu tư",
        radical: "巾 (Cân)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bản tin kinh tế quý III",
        lines: [
          {
            speaker: "BTV Tài chính",
            zh: "最新数据显示，今年第三季度新能源出口额同比增长百分之二十八，展现出强劲韧性。",
            pinyin: "Zuìxīn shùjù xiǎnshì, jīnnián dì sān jìdù xīn néngyuán chūkǒu'é tóngbǐ zēngzhǎng bǎifēnzhī èrshíbā, zhǎnxiàn chū qiángjìng rènxìng.",
            vi: "Số liệu mới nhất cho thấy kim ngạch xuất khẩu năng lượng mới quý III năm nay tăng 28% so với cùng kỳ năm ngoái, thể hiện sức bật mạnh mẽ.",
          },
          {
            speaker: "Nhà phân tích",
            zh: "不过受国际汇率波动影响，部分原材料价格环比略有回落，企业仍需谨慎应对。",
            pinyin: "Búguò shòu guójì huìlǜ bōdòng yǐngxiǎng, bùfen yuáncáiliào jiàgé huánbǐ lüèyǒu huíluò, qǐyè réng xū jǐnshèn yìngduì.",
            vi: "Tuy nhiên do ảnh hưởng biến động tỷ giá quốc tế, giá một số nguyên liệu giảm nhẹ so với quý trước, doanh nghiệp vẫn cần ứng phó thận trọng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Xu hướng đầu tư dài hạn",
        lines: [
          {
            speaker: "Nhà đầu tư",
            zh: "在宏观经济承压的背景下，头部企业为何依然加速海外布局？",
            pinyin: "Zài hóngguān jīngjì chéngyā de bèijǐng xià, tóubù qǐyè wèihé yīrán jiāsù hǎiwài bùjú?",
            vi: "Trong bối cảnh kinh tế vĩ mô chịu áp lực, vì sao các doanh nghiệp đầu ngành vẫn đẩy nhanh bố cục đầu tư ra nước ngoài?",
          },
          {
            speaker: "Chuyên gia",
            zh: "因为分散单一市场风险，才能在通胀周期中保持稳定盈利。",
            pinyin: "Yīnwèi fēnsàn dānyī shìchǎng fēngxiǎn, cáinéng zài tōngzhàng zhōuqī zhōng bǎochí wěndìng yínglì.",
            vi: "Bởi vì phân tán rủi ro thị trường đơn lẻ mới có thể duy trì lợi nhuận ổn định trong chu kỳ lạm phát.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phân biệt 同比 và 环比 trong số liệu",
        formula: "同比 + 增长/下降 + % (cùng kỳ năm ngoái) | 环比 + 增长/下降 + % (kỳ liền trước)",
        explanationVi:
          "Trong câu hỏi đọc hiểu HSK 6, đề rất hay đánh tráo 同比 thành 环比 để tạo phương án nhiễu.",
        examples: [
          {
            zh: "本月CPI同比上涨2.1%，环比持平。",
            pinyin: "Běn yuè CPI tóngbǐ shàngzhǎng 2.1%, huánbǐ chípíng.",
            vi: "Chỉ số CPI tháng này tăng 2,1% so với cùng kỳ năm trước, đi ngang so với tháng trước.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 在...的背景下",
        formula: "在 + Bối cảnh vĩ mô + 的背景下，Chủ ngữ + Hành động",
        explanationVi:
          "Cụm giới từ chuẩn báo chí dùng để mở đầu đoạn phân tích kinh tế - xã hội.",
        examples: [
          {
            zh: "在全球绿色转型的背景下，低碳技术成为投资热点。",
            pinyin: "Zài quánqiú lǜsè zhuǎnxíng de bèijǐng xià, dītàn jìshù chéngwéi tóuzī rèdiǎn.",
            vi: "Trong bối cảnh chuyển đổi xanh toàn cầu, công nghệ carbon thấp trở thành điểm nóng đầu tư.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk6-l5-q1",
        "某科技公司财报显示，其第二季度营收同比飙升35%，但受季节性因素影响，环比回落4%。",
        "Mǒu kējì gōngsī cáibào xiǎnshì, qí dì èr jìdù yíngshōu tóngbǐ biāoshēng 35%, dàn shòu jìjiéxìng yīnsù yǐngxiǎng, huánbǐ huíluò 4%.",
        "Báo cáo tài chính của một công ty công nghệ cho thấy doanh thu quý II tăng vọt 35% so với cùng kỳ năm ngoái, nhưng do yếu tố mùa vụ nên giảm nhẹ 4% so với quý I.",
        "Thông tin nào sau đây ĐÚNG theo đoạn văn?",
        [
          "Doanh thu quý II năm nay cao hơn quý II năm ngoái 35%",
          "Doanh thu quý II năm nay cao hơn quý I năm nay 35%",
          "Doanh thu quý II giảm 4% so với cùng kỳ năm ngoái",
          "Công ty bị thua lỗ trong quý II",
        ],
        "Doanh thu quý II năm nay cao hơn quý II năm ngoái 35%",
        "同比 = so với cùng kỳ năm ngoái (+35%); 环比 = so với quý liền trước (-4%)."
      ),
      readingComp(
        "hsk6-l5-q2",
        "尽管全球通胀压力尚未完全消退，但亚洲新兴市场依然展现出较强的经济韧性。",
        "Jǐnguǎn quánqiú tōngzhàng yālì shàngwèi wánquán xiāotuì, dàn Yàzhōu xīnxīng shìchǎng yīrán zhǎnxiàn chū jiàoqiáng de jīngjì rènxìng.",
        "Mặc dù áp lực lạm phát toàn cầu vẫn chưa hoàn toàn lắng dịu, các thị trường mới nổi châu Á vẫn thể hiện sức chống chịu kinh tế khá mạnh.",
        "Từ '韧性' trong đoạn văn nhấn mạnh điều gì?",
        [
          "Khả năng chống chịu và phục hồi tốt trước khó khăn",
          "Tốc độ lạm phát tăng nhanh",
          "Sự phụ thuộc vào thị trường bên ngoài",
          "Tình trạng suy thoái kéo dài",
        ],
        "Khả năng chống chịu và phục hồi tốt trước khó khăn",
        "'经济韧性' chỉ sức bền và khả năng trụ vững của nền kinh tế trước cú sốc."
      ),
      readingComp(
        "hsk6-l5-q3",
        "面对国内市场日趋饱和，多家新能源车企纷纷加速东南亚及欧洲市场布局。",
        "Miànduì guónèi shìchǎng rìqū bǎohé, duō jiā xīn néngyuán chēqǐ fēnfēn jiāsù Dōngnányà jí Ōuzhōu shìchǎng bùjú.",
        "Trước việc thị trường nội địa ngày càng bão hòa, nhiều hãng xe năng lượng mới đồng loạt đẩy nhanh chiến lược mở rộng tại Đông Nam Á và châu Âu.",
        "Nguyên nhân các hãng xe mở rộng ra nước ngoài là gì?",
        [
          "Thị trường trong nước ngày càng bão hòa",
          "Chính phủ cấm bán xe trong nước",
          "Chi phí sản xuất ở châu Âu rẻ hơn",
          "Người tiêu dùng trong nước không thích xe điện",
        ],
        "Thị trường trong nước ngày càng bão hòa",
        "Câu đầu nêu rõ: '面对国内市场日趋饱和'."
      ),
      readingComp(
        "hsk6-l5-q4",
        "央行近期采取稳健的宏观调控政策，旨在稳定市场预期，防范系统性金融风险。",
        "Yāngháng jìnqī cǎiqǔ wěnjiàn de hóngguān tiáokòng zhèngcè, zhǐzài wěndìng shìchǎng yùqī, fángfàn xìtǒngxìng jīnróng fēngxiǎn.",
        "Ngân hàng trung ương gần đây áp dụng chính sách điều tiết vĩ mô thận trọng nhằm ổn định kỳ vọng thị trường và phòng ngừa rủi ro tài chính hệ thống.",
        "Mục đích chính của chính sách điều tiết vĩ mô là gì?",
        [
          "Ổn định kỳ vọng thị trường và phòng ngừa rủi ro hệ thống",
          "Tăng mạnh lạm phát trong ngắn hạn",
          "Khuyến khích đầu cơ bất động sản",
          "Ngừng mọi hoạt động cho vay",
        ],
        "Ổn định kỳ vọng thị trường và phòng ngừa rủi ro hệ thống",
        "Từ '旨在' (nhằm mục đích) dẫn trực tiếp đến đáp án."
      ),
      readingComp(
        "hsk6-l5-q5",
        "短期内大宗商品价格飙升推高了制造业成本，但长期来看将倒逼企业进行技术升级。",
        "Duǎnqī nèi dàzōng shāngpǐn jiàgé biāoshēng tuīgāo le zhìzàoyè chéngběn, dàn chángqī lái kàn jiāng dàobī qǐyè jìnxíng jìshù shēngjí.",
        "Trong ngắn hạn, giá hàng hóa cơ bản tăng vọt đẩy cao chi phí ngành sản xuất, nhưng về dài hạn sẽ thúc ép doanh nghiệp nâng cấp công nghệ.",
        "Tác giả nhìn nhận tác động dài hạn của việc tăng giá nguyên liệu như thế nào?",
        [
          "Thúc đẩy doanh nghiệp nâng cấp công nghệ",
          "Khiến toàn bộ ngành sản xuất phá sản",
          "Không có bất kỳ ảnh hưởng nào",
          "Làm giảm chất lượng sản phẩm",
        ],
        "Thúc đẩy doanh nghiệp nâng cấp công nghệ",
        "Vế sau '但长期来看' nêu rõ tác động tích cực là '倒逼企业进行技术升级'."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 社会热点辩论与观点陈述
  // ==========================================
  {
    id: "hsk6-l6-bianlun",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    lessonNumber: 6,
    title: "Bài 6: Tranh biện vấn đề xã hội & Trình bày quan điểm",
    titleZh: "第六课：社会热点辩论与观点陈述",
    titlePinyin: "Dì liù kè: Shèhuì rèdiǎn biànlùn yǔ guāndiǎn chénshù",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=awGUosXDqLs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 6 社会热点辩论与观点陈述",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc trình bày quan điểm chuyên nghiệp (HSKK Cao cấp): Nêu lập trường (我方认为...) → Nhượng bộ có chừng mực (诚然/不可否认...) → Phản biện trọng tâm (然而/话虽如此...) → Kết luận (综上所述...).",
      "Sử dụng các cụm từ tu từ lịch sự khi phản biện: 恕我直言 (xin nói thẳng), 未免过于片面 (e rằng quá phiến diện), 利大于弊 (lợi nhiều hơn hại).",
      "Chú ý ngữ điệu nhấn mạnh vào các từ chuyển ý như 然而 (nhưng), 恰恰相反 (trái lại hoàn toàn) để tăng sức thuyết phục khi nói.",
    ],
    newWords: [
      {
        hanzi: "诚然",
        pinyin: "chéngrán",
        partOfSpeech: "Phó từ",
        meaningVi: "quả thực, đúng là như vậy (nhượng bộ)",
        radical: "讠 (Ngôn)",
        strokeCount: 20,
      },
      {
        hanzi: "不可否认",
        pinyin: "bùkě-fǒurèn",
        partOfSpeech: "Cụm từ",
        meaningVi: "không thể phủ nhận",
        radical: "一 (Nhất)",
        strokeCount: 20,
      },
      {
        hanzi: "片面",
        pinyin: "piànmiàn",
        partOfSpeech: "Tính từ",
        meaningVi: "phiến diện, một chiều",
        radical: "片 (Phiến)",
        strokeCount: 13,
      },
      {
        hanzi: "利弊",
        pinyin: "lìbì",
        partOfSpeech: "Danh từ",
        meaningVi: "lợi và hại",
        radical: "刂 (Đao)",
        strokeCount: 20,
      },
      {
        hanzi: "综上所述",
        pinyin: "zōngshàng-suǒshù",
        partOfSpeech: "Cụm từ",
        meaningVi: "tóm lại những điều đã trình bày ở trên",
        radical: "纟 (Mịch)",
        strokeCount: 30,
      },
      {
        hanzi: "权衡",
        pinyin: "quánhéng",
        partOfSpeech: "Động từ",
        meaningVi: "cân nhắc, đong đếm (lợi hại)",
        radical: "木 (Mộc)",
        strokeCount: 22,
      },
      {
        hanzi: "共识",
        pinyin: "gòngshí",
        partOfSpeech: "Danh từ",
        meaningVi: "sự đồng thuận, nhận thức chung",
        radical: "八 (Bát)",
        strokeCount: 13,
      },
      {
        hanzi: "立足点",
        pinyin: "lìzúdiǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "lập trường, điểm xuất phát",
        radical: "立 (Lập)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Tranh biện về làm việc từ xa (远程办公)",
        lines: [
          {
            speaker: "Bên Ủng hộ",
            zh: "不可否认，远程办公在团队沟通上存在一定局限，但它大幅降低了通勤成本，总体而言利大于弊。",
            pinyin: "Bùkě-fǒurèn, yuǎnchéng bàngōng zài tuánduì gōutōng shàng cúnzài yídìng júxiàn, dàn tā dàfú jiàngdī le tōngqín chéngběn, zǒngtǐ éryán lì dàyú bì.",
            vi: "Không thể phủ nhận làm việc từ xa có hạn chế nhất định trong giao tiếp nhóm, nhưng nó giảm mạnh chi phí đi lại, nhìn chung lợi nhiều hơn hại.",
          },
          {
            speaker: "Bên Phản đối",
            zh: "对方辩友的观点未免过于片面。长期居家办公容易模糊工作与生活的边界，反而降低幸福感。",
            pinyin: "Duìfāng biànyǒu de guāndiǎn wèimiǎn guòyú piànmiàn. Chángqī jūjiā bàngōng róngyì móhu gōngzuò yǔ shēnghuó de biānjiè, fǎn'ér jiàngdī xìngfúgǎn.",
            vi: "Quan điểm của đội bạn e rằng quá phiến diện. Làm việc tại nhà lâu dài dễ làm mờ ranh giới công việc và cuộc sống, trái lại làm giảm cảm giác hạnh phúc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Kết luận bài phát biểu HSKK Cao cấp",
        lines: [
          {
            speaker: "Thí sinh",
            zh: "诚然，短视频带来了便捷的娱乐体验，但我们必须权衡效率与深度思考之间的关系。",
            pinyin: "Chéngrán, duǎnshìpín dàilái le biànjié de yúlè tǐyàn, dàn wǒmen bìxū quánhéng xiàolǜ yǔ shēndù sīkǎo zhījiān de guānxì.",
            vi: "Quả thực video ngắn mang lại trải nghiệm giải trí tiện lợi, nhưng chúng ta phải cân nhắc mối quan hệ giữa hiệu suất và tư duy sâu sắc.",
          },
          {
            speaker: "Thí sinh",
            zh: "综上所述，只有理性使用媒介，才能真正成为信息的主人。",
            pinyin: "Zōngshàng-suǒshù, zhǐyǒu lǐxìng shǐyòng méijiè, cáinéng zhēnzhèng chéngwéi xìnxī de zhǔrén.",
            vi: "Tóm lại những điều đã trình bày, chỉ khi sử dụng truyền thông một cách lý trí mới có thể thực sự làm chủ thông tin.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nhượng bộ - chuyển ngoặt 诚然……，但……",
        formula: "诚然 + Thừa nhận ý hợp lý của đối phương，但/然而 + Lập luận phản bác",
        explanationVi:
          "Giúp lời tranh biện khách quan, sắc bén và mang phong thái học thuật cao cấp.",
        examples: [
          {
            zh: "诚然，技术进步提升了效率，但人文关怀同样不可或缺。",
            pinyin: "Chéngrán, jìshù jìnbù tíshēng le xiàolǜ, dàn rénwén guānhuái tóngyàng bùkě-huòquē.",
            vi: "Quả thực tiến bộ công nghệ nâng cao hiệu suất, nhưng sự quan tâm nhân văn cũng không thể thiếu.",
          },
        ],
      },
      {
        titleVi: "Cụm từ tổng kết lập luận 综上所述",
        formula: "综上所述，+ Kết luận cốt lõi / Đề xuất giải pháp",
        explanationVi:
          "Thường đặt ở câu cuối bài nói HSKK Cao cấp hoặc bài luận để chốt lại quan điểm một cách dứt khoát.",
        examples: [
          {
            zh: "综上所述，混合办公模式是兼顾效率与人文的最佳方案。",
            pinyin: "Zōngshàng-suǒshù, hùnhé bàngōng móshì shì jiāngù xiàolǜ yǔ rénwén de zuìjiā fāng'àn.",
            vi: "Tóm lại, mô hình làm việc kết hợp là phương án tối ưu cân bằng giữa hiệu suất và yếu tố con người.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk6-l6-q1",
        "不可否认，这项政策在短期内带来了一定压力，但从长远来看利大于弊。",
        "Bùkě-fǒurèn, zhè xiàng zhèngcè zài duǎnqī nèi dàilái le yídìng yālì, dàn cóng chángyuǎn lái kàn lì dàyú bì.",
        "Luyện đọc câu nhượng bộ - chuyển ngoặt với ngữ điệu tự tin:",
        ["Ngắt nhịp sau 不可否认", "Nhấn mạnh vào 从长远来看 và 利大于弊"],
        "Giữ giọng trầm ổn ở vế nhượng bộ và nâng âm lượng nhẹ ở vế khẳng định."
      ),
      speakingShadowing(
        "hsk6-l6-q2",
        "诚然，网络信息极大丰富了我们的视野，然而信息茧房的问题也不容忽视。",
        "Chéngrán, wǎngluò xìnxī jídà fēngfù le wǒmen de shìyě, rán'ér xìnxī jiǎnfáng de wèntí yě bùróng hūshì.",
        "Thu âm câu tranh biện có sử dụng 诚然...然而...:",
        ["Thanh 2 ở 诚然 (chéngrán)", "Ngắt nhịp rõ trước 然而"],
        "Đọc rõ cụm '信息茧房' (kén thông tin) — thuật ngữ rất hay dùng trong tranh biện xã hội."
      ),
      speakingShadowing(
        "hsk6-l6-q3",
        "如果只看到眼前的经济利益而忽视生态代价，这种看法未免过于片面。",
        "Rúguǒ zhǐ kàndào yǎnqián de jīngjì lìyì ér hūshì shēngtài dàijià, zhè zhǒng kànfǎ wèimiǎn guòyú piànmiàn.",
        "Thu âm câu phản biện lịch sự nhưng sắc bén:",
        ["Âm bật hơi p trong 片面 (piànmiàn)", "Nhấn mạnh 未免过于"],
        "'未免过于片面' giúp phản bác quan điểm đối phương mà vẫn giữ sự trang trọng."
      ),
      speakingShadowing(
        "hsk6-l6-q4",
        "在权衡各方利弊之后，我们应当努力寻求最大程度上的社会共识。",
        "Zài quánhéng gèfāng lìbì zhīhòu, wǒmen yīngdāng nǔlì xúnqiú zuìdà chéngdù shàng de shèhuì gòngshí.",
        "Luyện đọc câu đề xuất giải pháp trung hòa:",
        ["Phát âm chuẩn 权衡 (quánhéng)", "Thanh 4 dứt khoát ở 利弊 (lìbì)"],
        "Chú ý âm uan trong 权 (quán) và âm eng trong 衡 (héng)."
      ),
      speakingShadowing(
        "hsk6-l6-q5",
        "综上所述，我方坚定认为，教育的核心在于培养独立思考的能力。",
        "Zōngshàng-suǒshù, wǒfāng jiāndìng rènwéi, jiàoyù de héxīn zàiyú péiyǎng dúlì sīkǎo de nénglì.",
        "Thu âm câu kết luận tranh biện đầy thuyết phục:",
        ["Dừng nhẹ sau 综上所述", "Nhấn mạnh 坚定认为 và 独立思考"],
        "Giữ tốc độ vừa phải ở câu kết để tạo ấn tượng đĩnh đạc."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 国际贸易与供应链管理
  // ==========================================
  {
    id: "hsk6-l7-maoyi",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 7,
    title: "Bài 7: Thương mại quốc tế & Quản trị chuỗi cung ứng",
    titleZh: "第七课：国际贸易与供应链管理",
    titlePinyin: "Dì qī kè: Guójì màoyì yǔ gōngyìngliàn guǎnlǐ",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=ona07-E1XZo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 7 国际贸易与供应链管理",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Thuật ngữ ngoại thương cốt lõi: 关税 (thuế quan), 清关 (thông quan), 顺差/逆差 (xuất siêu / nhập siêu), 履约 (thực hiện hợp đồng).",
      "Trong nghe hiểu kinh doanh HSK 6, chú ý các từ chỉ nguyên nhân gián đoạn chuỗi cung ứng: 运力紧张 (năng lực vận tải căng thẳng), 港口拥堵 (tắc nghẽn cảng), 库存积压 (tồn kho ứ đọng).",
      "Cấu trúc '立足于...，着眼于...' (đứng trên nền tảng..., hướng tầm nhìn tới...) thường xuất hiện trong phát biểu của lãnh đạo doanh nghiệp.",
    ],
    newWords: [
      {
        hanzi: "供应链",
        pinyin: "gōngyìngliàn",
        partOfSpeech: "Danh từ",
        meaningVi: "chuỗi cung ứng",
        radical: "亻 (Nhân đứng)",
        strokeCount: 27,
      },
      {
        hanzi: "关税",
        pinyin: "guānshuì",
        partOfSpeech: "Danh từ",
        meaningVi: "thuế quan",
        radical: "丷 (Bát)",
        strokeCount: 18,
      },
      {
        hanzi: "清关",
        pinyin: "qīngguān",
        partOfSpeech: "Động từ",
        meaningVi: "thông quan, làm thủ tục hải quan",
        radical: "氵 (Chấm thủy)",
        strokeCount: 17,
      },
      {
        hanzi: "履约",
        pinyin: "lǚyuē",
        partOfSpeech: "Động từ",
        meaningVi: "thực hiện hợp đồng / cam kết",
        radical: "尸 (Thi)",
        strokeCount: 21,
      },
      {
        hanzi: "顺差",
        pinyin: "shùnchā",
        partOfSpeech: "Danh từ",
        meaningVi: "thặng dư thương mại, xuất siêu",
        radical: "页 (Hiệt)",
        strokeCount: 18,
      },
      {
        hanzi: "拥堵",
        pinyin: "yōngdǔ",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "tắc nghẽn, ùn ứ",
        radical: "扌 (Tài gẩy)",
        strokeCount: 19,
      },
      {
        hanzi: "多元化",
        pinyin: "duōyuánhuà",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "đa dạng hóa",
        radical: "夕 (Tịch)",
        strokeCount: 14,
      },
      {
        hanzi: "跨境",
        pinyin: "kuàjìng",
        partOfSpeech: "Tính từ",
        meaningVi: "xuyên biên giới",
        radical: "足 (Túc)",
        strokeCount: 27,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Xử lý rủi ro tắc nghẽn chuỗi cung ứng",
        lines: [
          {
            speaker: "Giám đốc Chuỗi cung ứng",
            zh: "受红海航线改道和港口拥堵影响，这批欧洲订单的清关时间预计推迟五天。",
            pinyin: "Shòu Hónghǎi hángxiàn gǎidào hé gǎngkǒu yōngdǔ yǐngxiǎng, zhè pī Ōuzhōu dìngdān de qīngguān shíjiān yùjì tuīchí wǔ tiān.",
            vi: "Do ảnh hưởng đổi tuyến Biển Đỏ và tắc nghẽn cảng, thời gian thông quan lô hàng châu Âu này dự kiến chậm 5 ngày.",
          },
          {
            speaker: "Phó Tổng giám đốc",
            zh: "立刻启动海外仓备货方案，务必保证按期履约，同时加快供应商多元化布局。",
            pinyin: "Lìkè qǐdòng hǎiwàicāng bèihuò fāng'àn, wùbì bǎozhèng ànqī lǚyuē, tóngshí jiākuài gōngyìngshāng duōyuánhuà bùjú.",
            vi: "Lập tức kích hoạt phương án xuất hàng từ kho ngoại quan, nhất định đảm bảo thực hiện hợp đồng đúng hạn, đồng thời đẩy nhanh đa dạng hóa nhà cung cấp.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Xu hướng thương mại điện tử xuyên biên giới",
        lines: [
          {
            speaker: "Phóng viên",
            zh: "关税政策调整后，跨境电商企业如何保持价格优势？",
            pinyin: "Guānshuì zhèngcè tiáozhěng hòu, kuàjìng diànshāng qǐyè rúhé bǎochí jiàgé yōushì?",
            vi: "Sau khi chính sách thuế quan điều chỉnh, doanh nghiệp TMĐT xuyên biên giới làm sao giữ lợi thế về giá?",
          },
          {
            speaker: "Chuyên gia",
            zh: "关键在于优化柔性供应链，减少中间环节和库存积压，从拼低价转向拼品牌。",
            pinyin: "Guānjiàn zàiyú yōuhuà róuxìng gōngyìngliàn, jiǎnshǎo zhōngjiān huánjié hé kùcún jīyā, cóng pīn dījià zhuǎnxiàng pīn pǐnpái.",
            vi: "Then chốt nằm ở tối ưu hóa chuỗi cung ứng linh hoạt, giảm khâu trung gian và tồn kho, chuyển từ cạnh tranh giá rẻ sang cạnh tranh thương hiệu.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc 务必…… (Nhất định phải...)",
        formula: "请/要求 + Chủ ngữ + 务必 + Động từ (văn bản hành chính / thương mại)",
        explanationVi:
          "Biểu thị yêu cầu nghiêm ngặt, không được phép sai sót trong công việc và giao thương.",
        examples: [
          {
            zh: "请各部门务必于周五前提交报关资料。",
            pinyin: "Qǐng gè bùmén wùbì yú Zhōuwǔ qián tíjiāo bàoguān zīliào.",
            vi: "Đề nghị các phòng ban nhất định nộp hồ sơ khai báo hải quan trước thứ Sáu.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 从……转向……",
        formula: "Chủ ngữ + 从 + Mô hình cũ + 转向 + Mô hình mới",
        explanationVi:
          "Diễn đạt sự chuyển dịch chiến lược trong kinh tế và quản trị.",
        examples: [
          {
            zh: "跨境贸易正从单一出口转向全链条本地化运营。",
            pinyin: "Kuàjìng màoyì zhèng cóng dānyī chūkǒu zhuǎnxiàng quán liàntiáo běndìhuà yùnyíng.",
            vi: "Thương mại xuyên biên giới đang chuyển từ xuất khẩu đơn lẻ sang vận hành bản địa hóa toàn chuỗi.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk6-l7-q1",
        "为了降低单一地区断供的风险，该集团决定在东南亚增设两家核心零部件工厂。",
        "Wèile jiàngdī dānyī dìqū duàngōng de fēngxiǎn, gāi jítuán juédìng zài Dōngnányà zēngshè liǎng jiā héxīn língbùjiàn gōngchǎng.",
        "Mục đích tập đoàn xây thêm nhà máy ở Đông Nam Á là gì?",
        [
          "Giảm rủi ro đứt gãy nguồn cung từ một khu vực duy nhất",
          "Đóng cửa toàn bộ nhà máy cũ",
          "Tăng thuế quan xuất khẩu",
          "Cắt giảm số lượng sản phẩm",
        ],
        "Giảm rủi ro đứt gãy nguồn cung từ một khu vực duy nhất",
        "Đầu câu nêu rõ: '为了降低单一地区断供的风险'."
      ),
      listeningFill(
        "hsk6-l7-q2",
        "这批生鲜货物已通过绿色通道顺利完成清关。",
        "这批生鲜货物已通过绿色通道顺利完成____。",
        "Zhè pī shēngxiān huòwù yǐ tōngguò lǜsè tōngdào shùnlì wánchéng qīngguān.",
        "Nghe và điền động từ chuyên ngành ngoại thương 2 chữ:",
        "清关",
        "'清关' (qīngguān) nghĩa là hoàn tất thủ tục thông quan."
      ),
      listeningDialogue(
        "hsk6-l7-q3",
        "男：今年上半年咱们的贸易顺差扩大了不少。女：是啊，高附加值机电产品的出口立了大功。",
        "Nán: Jīnnián shàngbànnián zánmen de màoyì shùnchā kuòdà le bùshǎo. Nǚ: Shì a, gāo fùjiāzhí jīdiàn chǎnpǐn de chūkǒu lì le dàgōng.",
        "Yếu tố nào đóng góp lớn vào việc mở rộng xuất siêu?",
        [
          "Xuất khẩu sản phẩm cơ điện giá trị gia tăng cao",
          "Nhập khẩu nguyên liệu thô giá rẻ",
          "Giảm giá mạnh hàng dệt may",
          "Tăng cường du lịch nội địa",
        ],
        "Xuất khẩu sản phẩm cơ điện giá trị gia tăng cao",
        "Người nữ nói: '高附加值机电产品的出口立了大功'."
      ),
      listeningMcq(
        "hsk6-l7-q4",
        "受极端天气影响，该港口目前严重拥堵，船舶平均等待时间超过七十二小时。",
        "Shòu jíduān tiānqì yǐngxiǎng, gāi gǎngkǒu mùqián yánzhòng yōngdǔ, chuánbó píngjūn děngdài shíjiān chāoguò qīshí'èr xiǎoshí.",
        "Tình trạng hiện tại của cảng là gì?",
        [
          "Tắc nghẽn nghiêm trọng, tàu phải chờ trung bình hơn 72 giờ",
          "Hoạt động thông suốt hơn bình thường",
          "Đóng cửa vĩnh viễn do đình công",
          "Tàu chỉ cần chờ chưa đầy 12 giờ",
        ],
        "Tắc nghẽn nghiêm trọng, tàu phải chờ trung bình hơn 72 giờ",
        "Nghe rõ cụm '严重拥堵' và '超过七十二小时'."
      ),
      listeningFill(
        "hsk6-l7-q5",
        "无论市场如何变化，按时履约都是企业立身之本。",
        "无论市场如何变化，按时____都是企业立身之本。",
        "Wúlùn shìchǎng rúhé biànhuà, ànshí lǚyuē dōu shì qǐyè lìshēn zhī běn.",
        "Nghe và điền từ 2 chữ mang nghĩa thực hiện hợp đồng:",
        "履约",
        "'履约' (lǚyuē) nghĩa là thực hiện đúng cam kết/hợp đồng."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 商业合同与法律条款
  // ==========================================
  {
    id: "hsk6-l8-falv",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 8,
    title: "Bài 8: Hợp đồng thương mại & Điều khoản pháp lý",
    titleZh: "第八课：商业合同与法律条款",
    titlePinyin: "Dì bā kè: Shāngyè hétong yǔ fǎlǜ tiáokuǎn",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=MI_klRsvdHk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 8 商业合同与法律条款",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Ngôn ngữ hợp đồng tiếng Trung dùng 甲方 (Bên A), 乙方 (Bên B), 违约金 (tiền phạt vi phạm hợp đồng), 不可抗力 (bất khả kháng), 仲裁 (trọng tài thương mại).",
      "Phân biệt cực kỳ chặt chẽ các từ nghĩa vụ pháp lý: 应当 (phải / có nghĩa vụ), 不得 (nghiêm cấm / không được phép), 有权 (có quyền), 免责 (miễn trừ trách nhiệm).",
      "Cấu trúc '如发生争议，双方应先友好协商；协商不成的，提交……仲裁' là mẫu câu tiêu chuẩn trong hầu hết hợp đồng thương mại Trung Quốc.",
    ],
    newWords: [
      {
        hanzi: "条款",
        pinyin: "tiáokuǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "điều khoản (hợp đồng, pháp luật)",
        radical: "木 (Mộc)",
        strokeCount: 19,
      },
      {
        hanzi: "甲方",
        pinyin: "jiǎfāng",
        partOfSpeech: "Danh từ",
        meaningVi: "Bên A (trong hợp đồng)",
        radical: "田 (Điền)",
        strokeCount: 9,
      },
      {
        hanzi: "违约",
        pinyin: "wéiyuē",
        partOfSpeech: "Động từ",
        meaningVi: "vi phạm hợp đồng",
        radical: "辶 (Xước)",
        strokeCount: 13,
      },
      {
        hanzi: "不可抗力",
        pinyin: "bùkě-kànglì",
        partOfSpeech: "Danh từ",
        meaningVi: "sự kiện bất khả kháng",
        radical: "一 (Nhất)",
        strokeCount: 18,
      },
      {
        hanzi: "仲裁",
        pinyin: "zhòngcái",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "trọng tài (phân xử tranh chấp)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 18,
      },
      {
        hanzi: "保密",
        pinyin: "bǎomì",
        partOfSpeech: "Động từ",
        meaningVi: "bảo mật",
        radical: "亻 (Nhân đứng)",
        strokeCount: 20,
      },
      {
        hanzi: "生效",
        pinyin: "shēngxiào",
        partOfSpeech: "Động từ",
        meaningVi: "có hiệu lực (hợp đồng, văn bản)",
        radical: "生 (Sinh)",
        strokeCount: 15,
      },
      {
        hanzi: "免责",
        pinyin: "miǎnzé",
        partOfSpeech: "Động từ",
        meaningVi: "miễn trừ trách nhiệm",
        radical: "刀 (Đao)",
        strokeCount: 15,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Rà soát điều khoản bảo mật và phạt vi phạm",
        lines: [
          {
            speaker: "Pháp chế Bên A",
            zh: "根据本合同第八条，未经甲方书面同意，乙方不得向任何第三方披露商业机密。",
            pinyin: "Gēnjù běn hétong dì bā tiáo, wèijīng jiǎfāng shūmiàn tóngyì, yǐfāng bùdé xiàng rènhé dì sānfāng pīlù shāngyè jīmì.",
            vi: "Theo Điều 8 hợp đồng này, nếu chưa có sự đồng ý bằng văn bản của Bên A, Bên B không được tiết lộ bí mật thương mại cho bất kỳ bên thứ ba nào.",
          },
          {
            speaker: "Đại diện Bên B",
            zh: "没问题，但我们希望明确不可抗力的免责范围，以及违约金的上限比例。",
            pinyin: "Méi wèntí, dàn wǒmen xīwàng míngquè bùkě-kànglì de miǎnzé fànwéi, yǐjí wéiyuējīn de shàngxiàn bǐlì.",
            vi: "Không vấn đề gì, nhưng chúng tôi muốn làm rõ phạm vi miễn trừ trách nhiệm do bất khả kháng cũng như mức trần tiền phạt vi phạm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Điều khoản giải quyết tranh chấp",
        lines: [
          {
            speaker: "Luật sư",
            zh: "本协议自双方签字盖章之日起生效，一式两份，具有同等法律效力。",
            pinyin: "Běn xiéyì zì shuāngfāng qiānzì gàizhāng zhī rì qǐ shēngxiào, yíshì liǎng fèn, jùyǒu tóngděng fǎlǜ xiàolì.",
            vi: "Thỏa thuận này có hiệu lực kể từ ngày hai bên ký tên đóng dấu, lập thành 2 bản có giá trị pháp lý như nhau.",
          },
          {
            speaker: "Khách hàng",
            zh: "如果履约过程中产生分歧，是去法院起诉还是申请仲裁？",
            pinyin: "Rúguǒ lǚyuē guòchéng zhōng chǎnshēng fēnqí, shì qù fǎyuàn qǐsù háishì shēnqǐng zhòngcái?",
            vi: "Nếu trong quá trình thực hiện hợp đồng phát sinh bất đồng, sẽ kiện ra tòa án hay yêu cầu trọng tài?",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc pháp lý 未经……，不得……",
        formula: "未经 + Cơ quan/Đối tác + 书面同意/许可，不得 + Hành vi bị cấm",
        explanationVi:
          "Mẫu câu quy định điều kiện tiên quyết và nghĩa vụ cấm đoán chuẩn mực trong văn bản luật.",
        examples: [
          {
            zh: "未经著作权人许可，不得擅自复制或传播本作品。",
            pinyin: "Wèijīng zhùzuòquánrén xǔkě, bùdé shànzì fùzhì huò chuánbō běn zuòpǐn.",
            vi: "Chưa được sự cho phép của chủ sở hữu bản quyền, nghiêm cấm tự ý sao chép hoặc phát tán tác phẩm này.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc thời điểm hiệu lực 自……之日起生效",
        formula: "本合同 + 自 + 签字盖章/发布 + 之日起生效",
        explanationVi:
          "Dùng '自...之日起' (kể từ ngày...) mang sắc thái pháp lý trang trọng thay cho '从...那天起'.",
        examples: [
          {
            zh: "新修订的消费者权益保护条例自明年一月一日起生效。",
            pinyin: "Xīn xiūdìng de xiāofèizhě quányì bǎohù tiáolì zì míngnián yīyuè yīrì qǐ shēngxiào.",
            vi: "Điều lệ bảo vệ quyền lợi người tiêu dùng sửa đổi mới có hiệu lực kể từ ngày 1 tháng 1 năm sau.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk6-l8-q1",
        "因地震、台风等不可抗力事件导致合同无法履行的，受影响方应在事件发生后48小时内书面通知对方，可免除相应违约责任。",
        "Yīn dìzhèn, táifēng děng bùkě-kànglì shìjiàn dǎozhì hétong wúfǎ lǚxíng de, shòu yǐngxiǎngfāng yīng zài shìjiàn fāshēng hòu 48 xiǎoshí nèi shūmiàn tōngzhī duìfāng, kě miǎnchú xiāngyìng wéiyuē zérèn.",
        "Trường hợp do động đất, bão và các sự kiện bất khả kháng khiến không thể thực hiện hợp đồng, bên bị ảnh hưởng phải thông báo bằng văn bản cho bên kia trong vòng 48 giờ sau khi sự kiện xảy ra để được miễn trách nhiệm vi phạm tương ứng.",
        "Điều kiện để được miễn trách nhiệm khi gặp bất khả kháng là gì?",
        [
          "Thông báo bằng văn bản cho đối phương trong vòng 48 giờ",
          "Không cần thông báo, tự động hủy hợp đồng",
          "Phải bồi thường gấp đôi tiền phạt trước",
          "Chỉ áp dụng nếu thông báo sau 1 tuần",
        ],
        "Thông báo bằng văn bản cho đối phương trong vòng 48 giờ",
        "Điều khoản ghi rõ: '应在事件发生后48小时内书面通知对方'."
      ),
      readingComp(
        "hsk6-l8-q2",
        "本协议有效期为三年。期满前三十日内，若双方均未提出书面异议，则本协议自动顺延一年。",
        "Běn xiéyì yǒuxiàoqī wéi sān nián. Qīmǎn qián sānshí rì nèi, ruò shuāngfāng jūn wèi tíchū shūmiàn yìyì, zé běn xiéyì zìdòng shùnyán yì nián.",
        "Thỏa thuận này có thời hạn 3 năm. Trong vòng 30 ngày trước khi hết hạn, nếu cả hai bên đều không nêu ý kiến phản đối bằng văn bản thì thỏa thuận tự động gia hạn 1 năm.",
        "Điều gì xảy ra nếu trước khi hết hạn 30 ngày không bên nào có ý kiến phản đối?",
        [
          "Hợp đồng tự động gia hạn thêm 1 năm",
          "Hợp đồng tự động chấm dứt",
          "Hợp đồng tự động gia hạn thêm 3 năm",
          "Phải ký lại hợp đồng mới hoàn toàn",
        ],
        "Hợp đồng tự động gia hạn thêm 1 năm",
        "'自动顺延一年' nghĩa là tự động gia hạn tiếp 1 năm."
      ),
      readingComp(
        "hsk6-l8-q3",
        "乙方如逾期交付货物，每逾期一日，应按合同总金额的千分之二向甲方支付违约金。",
        "Yǐfāng rú yúqī jiāofù huòwù, měi yúqī yírì, yīng àn hétong zǒng jīn'é de qiānfēnzhī èr xiàng jiǎfāng zhīfù wéiyuējīn.",
        "Nếu Bên B giao hàng quá hạn, mỗi ngày quá hạn phải trả cho Bên A tiền phạt vi phạm bằng 0,2% tổng giá trị hợp đồng.",
        "Mức phạt mỗi ngày giao hàng trễ là bao nhiêu?",
        [
          "0,2% (2 phần nghìn) tổng giá trị hợp đồng",
          "2% tổng giá trị hợp đồng",
          "20% tổng giá trị hợp đồng",
          "Miễn phạt nếu trễ dưới 10 ngày",
        ],
        "0,2% (2 phần nghìn) tổng giá trị hợp đồng",
        "'千分之二' = 2/1000 = 0,2%."
      ),
      readingComp(
        "hsk6-l8-q4",
        "因本合同引起的任何争议，双方应首先友好协商解决；协商不成的，任何一方均有权提交中国国际经济贸易仲裁委员会仲裁。",
        "Yīn běn hétong yǐnqǐ de rènhé zhēngyì, shuāngfāng yīng shǒuxiān yǒuhǎo xiéshāng jiějué; xiéshāng bùchéng de, rènhé yìfāng jūn yǒuquán tíjiāo Zhōngguó Guójì Jīngjì Màoyì Zhòngcái Wěiyuánhuì zhòngcái.",
        "Mọi tranh chấp phát sinh từ hợp đồng này, hai bên trước tiên phải thương lượng hữu nghị; nếu thương lượng không thành, bất kỳ bên nào cũng có quyền đệ trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc phân xử.",
        "Trình tự giải quyết tranh chấp trong điều khoản trên là gì?",
        [
          "Thương lượng hữu nghị trước, không thành thì đưa ra trọng tài",
          "Đưa thẳng ra tòa án ngay lập tức",
          "Chỉ Bên A mới có quyền yêu cầu trọng tài",
          "Không có cơ chế giải quyết tranh chấp",
        ],
        "Thương lượng hữu nghị trước, không thành thì đưa ra trọng tài",
        "Đoạn văn nêu rõ 2 bước: '首先友好协商解决' → '协商不成的...提交...仲裁'."
      ),
      readingComp(
        "hsk6-l8-q5",
        "保密义务在合同终止后的两年内依然有效，不因本合同的解除而失效。",
        "Bǎomì yìwù zài hétong zhōngzhǐ hòu de liǎng nián nèi yīrán yǒuxiào, bù yīn běn hétong de jiěchú ér shīxiào.",
        "Nghĩa vụ bảo mật vẫn tiếp tục có hiệu lực trong vòng 2 năm sau khi hợp đồng chấm dứt, không mất hiệu lực do việc giải trừ hợp đồng này.",
        "Nhận định nào đúng về nghĩa vụ bảo mật?",
        [
          "Vẫn có hiệu lực thêm 2 năm sau khi hợp đồng kết thúc",
          "Hết hiệu lực ngay khi hợp đồng kết thúc",
          "Chỉ có hiệu lực trong thời gian hợp đồng còn chạy",
          "Có thể tự ý hủy bỏ khi chấm dứt hợp đồng",
        ],
        "Vẫn có hiệu lực thêm 2 năm sau khi hợp đồng kết thúc",
        "Câu ghi rõ: '在合同终止后的两年内依然有效'."
      ),
    ],
  },

  // ==========================================
  // BÀI 9: 中国当代文学与散文赏析
  // ==========================================
  {
    id: "hsk6-l9-wenxue",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 9,
    title: "Bài 9: Văn học đương đại & Tản văn Trung Quốc",
    titleZh: "第九课：中国当代文学与散文赏析",
    titlePinyin: "Dì jiǔ kè: Zhōngguó dāngdài wénxué yǔ sǎnwén shǎngxī",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=gzZCOWrfS24",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 9 中国当代文学与散文赏析",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Tản văn Trung Quốc (散文) nổi tiếng với đặc trưng '形散神不散' (hình thức tản mác nhưng tinh thần thống nhất), thường mượn cảnh tả tình (借景抒情) và gửi gắm triết lý nhân sinh.",
      "Các biện pháp tu từ hay gặp trong văn học HSK 6: 拟人 (nhân hóa), 排比 (điệp cấu trúc), 隐喻 (ẩn dụ), 留白 (khoảng lặng nghệ thuật).",
      "Khi đọc diễn cảm tản văn, cần kiểm soát nhịp thở, ngắt nghỉ ở dấu phẩy dài và hạ giọng nhẹ nhàng ở các câu chiêm nghiệm.",
    ],
    newWords: [
      {
        hanzi: "散文",
        pinyin: "sǎnwén",
        partOfSpeech: "Danh từ",
        meaningVi: "tản văn, văn xuôi trữ tình",
        radical: "攵 (Phộc)",
        strokeCount: 16,
      },
      {
        hanzi: "赏析",
        pinyin: "shǎngxī",
        partOfSpeech: "Động từ",
        meaningVi: "thưởng thức và phân tích (tác phẩm)",
        radical: "贝 (Bối)",
        strokeCount: 20,
      },
      {
        hanzi: "意境",
        pinyin: "yìjìng",
        partOfSpeech: "Danh từ",
        meaningVi: "ý cảnh, không gian nghệ thuật giàu cảm xúc",
        radical: "心 (Tâm)",
        strokeCount: 27,
      },
      {
        hanzi: "细腻",
        pinyin: "xìnì",
        partOfSpeech: "Tính từ",
        meaningVi: "tinh tế, tỉ mỉ (miêu tả, cảm xúc)",
        radical: "纟 (Mịch)",
        strokeCount: 21,
      },
      {
        hanzi: "沧桑",
        pinyin: "cāngsāng",
        partOfSpeech: "Tính từ / Danh từ",
        meaningVi: "tang thương, thăng trầm của thời gian",
        radical: "氵 (Chấm thủy)",
        strokeCount: 17,
      },
      {
        hanzi: "共鸣",
        pinyin: "gòngmíng",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "sự đồng điệu, cộng hưởng tâm hồn",
        radical: "八 (Bát)",
        strokeCount: 14,
      },
      {
        hanzi: "豁达",
        pinyin: "huòdá",
        partOfSpeech: "Tính từ",
        meaningVi: "khoáng đạt, rộng mở, lạc quan",
        radical: "谷 (Cốc)",
        strokeCount: 23,
      },
      {
        hanzi: "沉淀",
        pinyin: "chéndiàn",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "lắng đọng, tích tụ theo thời gian",
        radical: "氵 (Chấm thủy)",
        strokeCount: 18,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Cảm nhận về tản văn của Sử Thiết Sinh & Uông Tăng Kỳ",
        lines: [
          {
            speaker: "Độc giả A",
            zh: "读汪曾祺的散文，总觉得文字平淡却极具烟火气，意境悠远。",
            pinyin: "Dú Wāng Zēngqí de sǎnwén, zǒng juéde wénzì píngdàn què jíjù yānhuǒqì, yìjìng yōuyuǎn.",
            vi: "Đọc tản văn của Uông Tăng Kỳ luôn thấy câu chữ bình dị nhưng đậm hơi thở đời thường, ý cảnh sâu lắng.",
          },
          {
            speaker: "Độc giả B",
            zh: "没错，而史铁生则以细腻深沉的笔触直面苦难，带给人一种历经沧桑后的豁达。",
            pinyin: "Méicuò, ér Shǐ Tiěshēng zé yǐ xìnì shēnchén de bǐchù zhímiàn kǔnàn, dàigěi rén yì zhǒng lìjīng cāngsāng hòu de huòdá.",
            vi: "Đúng vậy, còn Sử Thiết Sinh lại dùng ngòi bút tinh tế sâu lắng đối diện khổ đau, mang đến cho người đọc sự khoáng đạt sau khi trải qua thăng trầm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Giá trị của văn học trong thời đại vội vã",
        lines: [
          {
            speaker: "MC",
            zh: "在快节奏的现代社会，为什么我们依然需要静下心来阅读文学作品？",
            pinyin: "Zài kuài jiézòu de xiàndài shèhuì, wèishénme wǒmen yīrán xūyào jìngxià xīn lái yuèdú wénxué zuòpǐn?",
            vi: "Trong xã hội hiện đại nhịp sống nhanh, tại sao chúng ta vẫn cần tĩnh tâm đọc tác phẩm văn học?",
          },
          {
            speaker: "Nhà văn",
            zh: "因为优秀的文字能跨越时空引发共鸣，让浮躁的心灵在岁月沉淀中找到安宁。",
            pinyin: "Yīnwèi yōuxiù de wénzì néng kuàyuè shíkōng yǐnfā gòngmíng, ràng fúzào de xīnlíng zài suìyuè chéndiàn zhōng zhǎodào ānníng.",
            vi: "Bởi những con chữ xuất sắc có thể vượt thời không tạo nên sự đồng điệu, giúp tâm hồn xao động tìm thấy bình yên trong sự lắng đọng của năm tháng.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc tương phản văn học ……，而……则……",
        formula: "A + Đặc điểm 1，而 + B + 则 + Đặc điểm 2",
        explanationVi:
          "Dùng khi so sánh hai phong cách nghệ thuật, hai tác giả hoặc hai góc nhìn một cách tinh tế, trang nhã.",
        examples: [
          {
            zh: "北方的秋高远壮阔，而江南的秋则温润婉约。",
            pinyin: "Běifāng de qiū gāoyuǎn zhuàngkuò, ér Jiāngnán de qiū zé wēnrùn wǎnyuē.",
            vi: "Mùa thu phương Bắc cao rộng hùng vĩ, còn mùa thu Giang Nam lại dịu dàng êm ả.",
          },
        ],
      },
      {
        titleVi: "Cụm từ văn học 历经……后的……",
        formula: "历经 + Thử thách/Thăng trầm (沧桑/风雨/磨难) + 后的 + Trạng thái trưởng thành",
        explanationVi:
          "Diễn đạt chiều sâu trải nghiệm và sự trưởng thành nội tâm trong tản văn và phát biểu cảm nghĩ.",
        examples: [
          {
            zh: "那是一种历经风雨后的从容与淡定。",
            pinyin: "Nà shì yì zhǒng lìjīng fēngyǔ hòu de cóngróng yǔ dàndìng.",
            vi: "Đó là sự thong dong và điềm tĩnh sau khi đã trải qua bao gió mưa.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk6-l9-q1",
        "优秀的散文往往于平淡处见深情，在细微处显意境。",
        "Yōuxiù de sǎnwén wǎngwǎng yú píngdàn chù jiàn shēnqíng, zài xìwēi chù xiǎn yìjìng.",
        "Đọc diễn cảm câu bình luận tản văn với nhịp điệu chậm rãi, cân đối:",
        ["Ngắt nhịp cân xứng hai vế đối nhau", "Thanh 3 ở 散文 (sǎnwén)"],
        "Hai vế '于平淡处见深情' và '在细微处显意境' đối xứng nhau, đọc rõ tiết tấu."
      ),
      speakingShadowing(
        "hsk6-l9-q2",
        "真正的豁达，不是逃避苦难，而是历经沧桑后依然热爱生活。",
        "Zhēnzhèng de huòdá, búshì táobì kǔnàn, érshì lìjīng cāngsāng hòu yīrán rè'ài shēnghuó.",
        "Thu âm câu chiêm nghiệm nhân sinh giàu cảm xúc:",
        ["Phát âm chuẩn 豁达 (huòdá)", "Âm bật hơi c trong 沧桑 (cāngsāng)"],
        "Hạ giọng nhẹ ở '不是逃避苦难' và nhấn ấm áp ở '依然热爱生活'."
      ),
      speakingShadowing(
        "hsk6-l9-q3",
        "他的文字细腻而克制，总能在不经意间触动读者内心最柔软的共鸣。",
        "Tā de wénzì xìnì ér kèzhì, zǒng néng zài bùjīngyì jiān chùdòng dúzhě nèixīn zuì róuruǎn de gòngmíng.",
        "Luyện đọc câu nhận xét phong cách tác giả:",
        ["Thanh 4 liền nhau ở 细腻 (xìnì)", "Âm uan ở 柔软 (róuruǎn)"],
        "Đọc chậm rãi ở cụm '内心最柔软的共鸣' để truyền tải cảm xúc."
      ),
      speakingShadowing(
        "hsk6-l9-q4",
        "岁月如河，带走了年少的轻狂，却沉淀下最珍贵的记忆与智慧。",
        "Suìyuè rú hé, dàizǒu le niánshào de qīngkuáng, què chéndiàn xià zuì zhēnguì de jìyì yǔ zhìhuì.",
        "Thu âm câu tản văn sử dụng phép ẩn dụ 岁月如河:",
        ["Thanh 2 ở 沉淀 (chéndiàn)", "Ngắt nhịp sau 岁月如河"],
        "Chú ý sự tương phản nhẹ nhàng giữa '带走了' và '却沉淀下'."
      ),
      speakingShadowing(
        "hsk6-l9-q5",
        "阅读经典文学，是我们在喧嚣世界中为心灵保留的一方净土。",
        "Yuèdú jīngdiǎn wénxué, shì wǒmen zài xuānxiāo shìjiè zhōng wèi xīnlíng bǎoliú de yì fāng jìngtǔ.",
        "Thu âm câu kết bài thuyết trình về giá trị đọc sách:",
        ["Phát âm chuẩn 喧嚣 (xuānxiāo)", "Nhấn nhẹ ở 一方净土"],
        "Giữ hơi thở đều để câu dài nghe mượt mà, giàu chất văn học."
      ),
    ],
  },

  // ==========================================
  // BÀI 10: 人工智能与数字经济
  // ==========================================
  {
    id: "hsk6-l10-ai",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 10,
    title: "Bài 10: Trí tuệ nhân tạo & Kinh tế số",
    titleZh: "第十课：人工智能与数字经济",
    titlePinyin: "Dì shí kè: Réngōng zhìnéng yǔ shùzì jīngjì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=qjyjYF6mH-U",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 10 人工智能与数字经济",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Từ vựng công nghệ thời sự HSK 6: 生成式人工智能 (AI tạo sinh), 算法 (thuật toán), 算力 (năng lực tính toán), 赋能 (trao quyền / tăng lực cho ngành nghề), 伦理 (đạo đức công nghệ).",
      "Trong bài nghe khoa học công nghệ, hãy chú ý các cặp đối lập: 赋能 (trao quyền) vs 替代 (thay thế), 隐私保护 (bảo vệ quyền riêng tư) vs 数据共享 (chia sẻ dữ liệu).",
      "Động từ '赋能' (fùnéng) rất phổ biến trong báo chí Trung Quốc hiện đại, thường dùng theo mẫu 'A为B赋能' hoặc 'AI赋能千行百业'.",
    ],
    newWords: [
      {
        hanzi: "算法",
        pinyin: "suànfǎ",
        partOfSpeech: "Danh từ",
        meaningVi: "thuật toán",
        radical: "竹 (Trúc)",
        strokeCount: 22,
      },
      {
        hanzi: "算力",
        pinyin: "suànlì",
        partOfSpeech: "Danh từ",
        meaningVi: "năng lực tính toán (computing power)",
        radical: "竹 (Trúc)",
        strokeCount: 16,
      },
      {
        hanzi: "赋能",
        pinyin: "fùnéng",
        partOfSpeech: "Động từ",
        meaningVi: "trao quyền, tiếp thêm năng lực (cho ngành nghề)",
        radical: "贝 (Bối)",
        strokeCount: 22,
      },
      {
        hanzi: "迭代",
        pinyin: "diédài",
        partOfSpeech: "Động từ",
        meaningVi: "cập nhật lặp lại, nâng cấp thế hệ mới",
        radical: "辶 (Xước)",
        strokeCount: 13,
      },
      {
        hanzi: "伦理",
        pinyin: "lúnlǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "đạo đức, luân lý (AI, khoa học)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 17,
      },
      {
        hanzi: "隐私",
        pinyin: "yǐnsī",
        partOfSpeech: "Danh từ",
        meaningVi: "quyền riêng tư",
        radical: "阝 (Phụ)",
        strokeCount: 18,
      },
      {
        hanzi: "数字化",
        pinyin: "shùzìhuà",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "số hóa",
        radical: "攵 (Phộc)",
        strokeCount: 23,
      },
      {
        hanzi: "颠覆",
        pinyin: "diānfù",
        partOfSpeech: "Động từ",
        meaningVi: "đảo lộn, tạo bước ngoặt phá vỡ mô hình cũ",
        radical: "页 (Hiệt)",
        strokeCount: 34,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Tác động của AI tạo sinh đến thị trường lao động",
        lines: [
          {
            speaker: "Người dẫn chương trình",
            zh: "随着大模型技术快速迭代，人工智能究竟会替代人类，还是为人类赋能？",
            pinyin: "Suízhe dàmóxíng jìshù kuàisù diédài, réngōng zhìnéng jiūjìng huì tìdài rénlèi, háishì wèi rénlèi fùnéng?",
            vi: "Cùng với việc công nghệ mô hình lớn nâng cấp nhanh chóng, trí tuệ nhân tạo rốt cuộc sẽ thay thế con người hay trao quyền cho con người?",
          },
          {
            speaker: "Chuyên gia AI",
            zh: "重复性劳动确实面临颠覆，但具备创造力与共情力的人将借助AI大幅提升效率。",
            pinyin: "Chóngfùxìng láodòng quèshí miànlín diānfù, dàn jùbèi chuàngzàolì yǔ gòngqínglì de rén jiāng jièzhù AI dàfú tíshēng xiàolǜ.",
            vi: "Lao động lặp đi lặp lại quả thực đối mặt với sự thay đổi triệt để, nhưng người có sức sáng tạo và thấu cảm sẽ nhờ AI nâng cao hiệu suất vượt bậc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Quản trị dữ liệu và đạo đức AI",
        lines: [
          {
            speaker: "Phóng viên",
            zh: "数字经济高速发展的同时，我们在算法治理上还面临哪些挑战？",
            pinyin: "Shùzì jīngjì gāosù fāzhǎn de tóngshí, wǒmen zài suànfǎ zhìlǐ shàng hái miànlín nǎxiē tiǎozhàn?",
            vi: "Cùng lúc kinh tế số phát triển tốc độ cao, chúng ta còn đối mặt thách thức nào trong quản trị thuật toán?",
          },
          {
            speaker: "Học giả",
            zh: "核心在于平衡技术创新与隐私保护，建立透明、可追溯的人工智能伦理规范。",
            pinyin: "Héxīn zàiyú pínghéng jìshù chuàngxīn yǔ yǐnsī bǎohù, jiànlì tòumíng, kě zhuīsù de réngōng zhìnéng lúnlǐ guīfàn.",
            vi: "Cốt lõi là cân bằng giữa đổi mới công nghệ và bảo vệ quyền riêng tư, xây dựng quy chuẩn đạo đức AI minh bạch, có thể truy xuất.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc ……究竟是A，还是B？",
        formula: "Chủ ngữ + 究竟(是) + Khả năng A，还是 + Khả năng B？",
        explanationVi:
          "Dùng '究竟' (rốt cuộc) để tăng sắc thái truy vấn sâu sắc trong phỏng vấn và thảo luận học thuật.",
        examples: [
          {
            zh: "算法推荐究竟拓宽了视野，还是加剧了信息偏见？",
            pinyin: "Suànfǎ tuījiàn jiūjìng tuòkuān le shìyě, háishì jiājù le xìnxī piānjiàn?",
            vi: "Đề xuất theo thuật toán rốt cuộc đã mở rộng tầm nhìn hay làm trầm trọng thêm thiên kiến thông tin?",
          },
        ],
      },
      {
        titleVi: "Cách dùng 借助…… (Nhờ vào / Tận dụng...)",
        formula: "Chủ ngữ + 借助 + Công cụ/Nền tảng + Động từ",
        explanationVi:
          "Văn viết trang trọng hơn '用' hoặc '靠', rất hay dùng trong lĩnh vực công nghệ và kinh tế số.",
        examples: [
          {
            zh: "中小企业可以借助云计算平台大幅降低数字化转型成本。",
            pinyin: "Zhōngxiǎo qǐyè kěyǐ jièzhù yúnjìsuàn píngtái dàfú jiàngdī shùzìhuà zhuǎnxíng chéngběn.",
            vi: "Doanh nghiệp vừa và nhỏ có thể nhờ nền tảng điện toán đám mây giảm mạnh chi phí chuyển đổi số.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk6-l10-q1",
        "算力基础设施已成为数字经济时代的新型生产力，直接关系到人工智能产业的竞争力。",
        "Suànlì jīchǔ shèshī yǐ chéngwéi shùzì jīngjì shídài de xīnxíng shēngchǎnlì, zhíjiē guānxì dào réngōng zhìnéng chǎnyè de jìngzhēnglì.",
        "Đoạn nghe nhấn mạnh vai trò của yếu tố nào?",
        [
          "Hạ tầng năng lực tính toán (算力) là lực lượng sản xuất mới",
          "Ngành nông nghiệp truyền thống",
          "Thương mại bán lẻ tại cửa hàng vật lý",
          "Giảm đầu tư vào công nghệ số",
        ],
        "Hạ tầng năng lực tính toán (算力) là lực lượng sản xuất mới",
        "Câu mở đầu khẳng định: '算力基础设施已成为...新型生产力'."
      ),
      listeningFill(
        "hsk6-l10-q2",
        "人工智能正加速为医疗、教育和制造业赋能。",
        "人工智能正加速为医疗、教育和制造业____。",
        "Réngōng zhìnéng zhèng jiāsù wèi yīliáo, jiàoyù hé zhìzàoyè fùnéng.",
        "Nghe và điền động từ công nghệ 2 chữ còn thiếu:",
        "赋能",
        "'为...赋能' nghĩa là trao quyền, tiếp thêm năng lực cho các ngành nghề."
      ),
      listeningDialogue(
        "hsk6-l10-q3",
        "女：这款智能诊断系统能完全取代医生吗？男：不能，它只是辅助工具，最终决策仍需医生把关。",
        "Nǚ: Zhè kuǎn zhìnéng zhěnduàn xìtǒng néng wánquán qǔdài yīshēng ma? Nán: Bùnéng, tā zhǐshì fǔzhù gōngjù, zuìzhōng juécè réng xū yīshēng bǎguān.",
        "Quan điểm của người nam về hệ thống chẩn đoán thông minh là gì?",
        [
          "Chỉ là công cụ hỗ trợ, bác sĩ vẫn giữ quyền quyết định cuối cùng",
          "Có thể thay thế hoàn toàn bác sĩ trong tương lai gần",
          "Hệ thống này hoàn toàn vô dụng",
          "Bác sĩ không cần kiểm tra lại kết quả của AI",
        ],
        "Chỉ là công cụ hỗ trợ, bác sĩ vẫn giữ quyền quyết định cuối cùng",
        "Người nam nói rõ: '它只是辅助工具，最终决策仍需医生把关'."
      ),
      listeningMcq(
        "hsk6-l10-q4",
        "在采集和训练海量数据时，企业必须严格遵守数据安全法规，杜绝侵犯用户隐私。",
        "Zài cǎijí hé xùnliàn hǎiliàng shùjù shí, qǐyè bìxū yángé zūnshǒu shùjù ānquán fǎguī, dùjué qīnfàn yònghù yǐnsī.",
        "Doanh nghiệp phải làm gì khi thu thập và huấn luyện dữ liệu lớn?",
        [
          "Tuân thủ nghiêm quy định an toàn dữ liệu và bảo vệ quyền riêng tư",
          "Thu thập mọi thông tin cá nhân không cần xin phép",
          "Ngừng hoàn toàn việc sử dụng dữ liệu",
          "Chia sẻ công khai toàn bộ dữ liệu người dùng",
        ],
        "Tuân thủ nghiêm quy định an toàn dữ liệu và bảo vệ quyền riêng tư",
        "Nghe cụm '严格遵守数据安全法规，杜绝侵犯用户隐私'."
      ),
      listeningFill(
        "hsk6-l10-q5",
        "科技向善意味着技术发展不能突破人类伦理底线。",
        "科技向善意味着技术发展不能突破人类____底线。",
        "Kējì xiàngshàn yìwèizhe jìshù fāzhǎn bùnéng tūpò rénlèi lúnlǐ dǐxiàn.",
        "Nghe và điền danh từ 2 chữ mang nghĩa đạo đức/luân lý:",
        "伦理",
        "'伦理底线' nghĩa là ranh giới đạo đức."
      ),
    ],
  },

  // ==========================================
  // BÀI 11: 学术论文摘要写作
  // ==========================================
  {
    id: "hsk6-l11-xueshu",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Viết tóm tắt luận văn học thuật (论文摘要)",
    titleZh: "第十一课：学术论文摘要写作",
    titlePinyin: "Dì shíyī kè: Xuéshù lùnwén zhāiyào xiězuò",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Vân Anh Yoong",
    youtubeUrl: "https://www.youtube.com/watch?v=xipQhh2krN8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 11 学术论文摘要写作",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc chuẩn 4 phần của Tóm tắt luận văn (摘要 — Abstract): 研究目的 (Mục đích: 针对……问题，本文旨在探讨……) → 研究方法 (Phương pháp: 采用问卷调查/实证分析法……) → 研究结果 (Kết quả: 结果表明……) → 研究结论 (Kết luận: 本研究为……提供了理论依据).",
      "Văn phong học thuật tuyệt đối tránh ngôi thứ nhất chủ quan (我认为、我觉得), thay bằng '本文认为' (Bài viết này cho rằng), '研究表明' (Nghiên cứu chỉ ra), '笔者' (Người viết).",
      "Mỗi bài 摘要 thường dài 200–300 chữ Hán, đi kèm 3–5 关键词 (Từ khóa) tách nhau bằng dấu chấm phẩy (；).",
    ],
    newWords: [
      {
        hanzi: "摘要",
        pinyin: "zhāiyào",
        partOfSpeech: "Danh từ",
        meaningVi: "tóm tắt luận văn (abstract)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 23,
      },
      {
        hanzi: "旨在",
        pinyin: "zhǐzài",
        partOfSpeech: "Động từ",
        meaningVi: "nhằm mục đích (văn viết)",
        radical: "日 (Nhật)",
        strokeCount: 12,
      },
      {
        hanzi: "实证",
        pinyin: "shízhèng",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "thực chứng (nghiên cứu dựa trên dữ liệu thực tế)",
        radical: "宀 (Miên)",
        strokeCount: 15,
      },
      {
        hanzi: "样本",
        pinyin: "yàngběn",
        partOfSpeech: "Danh từ",
        meaningVi: "mẫu nghiên cứu, mẫu khảo sát",
        radical: "木 (Mộc)",
        strokeCount: 15,
      },
      {
        hanzi: "显著",
        pinyin: "xiǎnzhù",
        partOfSpeech: "Tính từ",
        meaningVi: "rõ rệt, có ý nghĩa thống kê",
        radical: "日 (Nhật)",
        strokeCount: 20,
      },
      {
        hanzi: "变量",
        pinyin: "biànliàng",
        partOfSpeech: "Danh từ",
        meaningVi: "biến số",
        radical: "又 (Hựu)",
        strokeCount: 20,
      },
      {
        hanzi: "依据",
        pinyin: "yījù",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "căn cứ, cơ sở (lý luận/thực tiễn)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 19,
      },
      {
        hanzi: "启示",
        pinyin: "qǐshì",
        partOfSpeech: "Danh từ",
        meaningVi: "gợi mở, hàm ý thực tiễn",
        radical: "口 (Khẩu)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Hướng dẫn sửa 摘要 luận văn thạc sĩ",
        lines: [
          {
            speaker: "Giáo sư hướng dẫn",
            zh: "你的摘要里不要写“我觉得这个结果很有意思”，要改成客观的学术表达。",
            pinyin: "Nǐ de zhāiyào lǐ búyào xiě 'wǒ juéde zhège jiéguǒ hěn yǒuyìsi', yào gǎichéng kèguān de xuéshù biǎodá.",
            vi: "Trong phần tóm tắt của em đừng viết 'Tôi thấy kết quả này rất thú vị', phải đổi thành cách diễn đạt học thuật khách quan.",
          },
          {
            speaker: "Nghiên cứu sinh",
            zh: "明白，老师！我改成“实证结果表明，两个变量之间存在显著的正相关关系”，这样合适吗？",
            pinyin: "Míngbai, lǎoshī! Wǒ gǎichéng 'Shízhèng jiéguǒ biǎomíng, liǎng gè biànliàng zhījiān cúnzài xiǎnzhù de zhèng xiāngguān guānxì', zhèyàng héshì ma?",
            vi: "Em hiểu rồi ạ! Em sửa thành 'Kết quả thực chứng cho thấy tồn tại mối tương quan thuận rõ rệt giữa hai biến số', như vậy ổn chưa ạ?",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Mở đầu và kết thúc 摘要 chuẩn mực",
        lines: [
          {
            speaker: "Giáo sư hướng dẫn",
            zh: "开头用“针对……现状，本文以……为样本，采用定量分析法”，逻辑非常清晰。",
            pinyin: "Kāitóu yòng 'zhēnduì... xiànzhuàng, běnwén yǐ... wéi yàngběn, cǎiyòng dìngliàng fēnxīfǎ', luóji fēicháng qīngxī.",
            vi: "Mở đầu dùng 'Trước thực trạng..., bài viết lấy... làm mẫu, áp dụng phương pháp phân tích định lượng', logic rất rõ ràng.",
          },
          {
            speaker: "Nghiên cứu sinh",
            zh: "最后一句我写“本研究为高校外语教学改革提供了实证依据与实践启示”。",
            pinyin: "Zuìhòu yí jù wǒ xiě 'Běn yánjiū wèi gāoxiào wàiyǔ jiàoxué gǎigé tígōng le shízhèng yījù yǔ shíjiàn qǐshì'.",
            vi: "Câu cuối em viết 'Nghiên cứu này cung cấp cơ sở thực chứng và gợi mở thực tiễn cho cải cách giảng dạy ngoại ngữ đại học'.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Mẫu câu mở đầu mục đích nghiên cứu",
        formula: "针对 + Vấn đề nghiên cứu，本文旨在探讨/分析 + Đối tượng",
        explanationVi:
          "Câu mở đầu kinh điển trong luận văn tiếng Trung, ngắn gọn, đi thẳng vào trọng tâm.",
        examples: [
          {
            zh: "针对留学生汉语习得中的偏误问题，本文旨在探讨母语负迁移的影响。",
            pinyin: "Zhēnduì liúxuéshēng Hànyǔ xídé zhōng de piānwù wèntí, běnwén zhǐzài tàntǎo mǔyǔ fùqiānyí de yǐngxiǎng.",
            vi: "Trước vấn đề lỗi sai trong quá trình thụ đắc tiếng Trung của du học sinh, bài viết nhằm tìm hiểu ảnh hưởng của chuyển di tiêu cực từ tiếng mẹ đẻ.",
          },
        ],
      },
      {
        titleVi: "Mẫu câu nêu kết quả thực chứng",
        formula: "研究/实证结果表明，A 对 B 具有显著的正向/负向影响。",
        explanationVi:
          "Dùng để trình bày phát hiện chính của nghiên cứu một cách khách quan và chuẩn xác.",
        examples: [
          {
            zh: "实证结果表明，数字化投入对企业创新绩效具有显著的正向影响。",
            pinyin: "Shízhèng jiéguǒ biǎomíng, shùzìhuà tóurù duì qǐyè chuàngxīn jìxiào jùyǒu xiǎnzhù de zhèngxiàng yǐngxiǎng.",
            vi: "Kết quả thực chứng cho thấy đầu tư số hóa có tác động tích cực rõ rệt đến hiệu quả đổi mới của doanh nghiệp.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk6-l11-q1",
        "Sắp xếp câu mở đầu tóm tắt luận văn (Mục đích nghiên cứu):",
        ["本文", "旨在", "探讨", "人工智能", "对", "外语教学的", "深远影响。"],
        "本文旨在探讨人工智能对外语教学的深远影响。",
        "Běnwén zhǐzài tàntǎo réngōng zhìnéng duì wàiyǔ jiàoxué de shēnyuǎn yǐngxiǎng.",
        "Mẫu câu học thuật: 本文旨在探讨 A 对 B 的影响."
      ),
      writingOrder(
        "hsk6-l11-q2",
        "Sắp xếp câu nêu kết quả nghiên cứu thực chứng:",
        ["实证结果", "表明，", "两个", "变量之间", "存在", "显著的", "正相关关系。"],
        "实证结果表明，两个变量之间存在显著的正相关关系。",
        "Shízhèng jiéguǒ biǎomíng, liǎng gè biànliàng zhījiān cúnzài xiǎnzhù de zhèng xiāngguān guānxì.",
        "Dùng '实证结果表明' thay cho các từ mang tính chủ quan."
      ),
      writingOrder(
        "hsk6-l11-q3",
        "Sắp xếp câu kết luận nêu ý nghĩa nghiên cứu:",
        ["本研究", "为", "相关政策的", "制定", "提供了", "坚实的", "理论依据。"],
        "本研究为相关政策的制定提供了坚实的理论依据。",
        "Běn yánjiū wèi xiāngguān zhèngcè de zhìdìng tígōng le jiānshí de lǐlùn yījù.",
        "Mẫu câu chốt chuẩn mực: 本研究为...提供了理论依据."
      ),
      writingTwoSentences(
        "hsk6-l11-q4",
        "旨在",
        "zhǐzài",
        "nhằm mục đích (văn viết/học thuật)",
        "Đặt 1 câu về mục đích một hoạt động/dự án và 1 câu về mục đích một nghiên cứu/chính sách."
      ),
      writingStroke(
        "hsk6-l11-q5",
        "摘",
        "zhāi",
        "trích, chọn lọc (trong 摘要)",
        "Chữ 摘 gồm bộ 扌 bên trái và 啇 bên phải, tổng 14 nét."
      ),
    ],
  },

  // ==========================================
  // BÀI 12: HSK 6 考前冲刺与病句总复习
  // ==========================================
  {
    id: "hsk6-l12-zonghe",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Tổng ôn câu bệnh & Chiến thuật thi HSK 6",
    titleZh: "第十二课：HSK 6 考前冲刺与病句总复习",
    titlePinyin: "Dì shí'èr kè: HSK 6 kǎoqián chōngcì yǔ bìngjù zǒngfùxí",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Mạt Trà",
    youtubeUrl: "https://www.youtube.com/watch?v=G98F2RIpNwc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 6 Bài 12 HSK 6 考前冲刺与病句总复习",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "6 đại loại câu bệnh HSK 6 (六大病句类型): ① 搭配不当 (Kết hợp từ sai), ② 成分残缺/赘余 (Thiếu/Thừa thành phần), ③ 语序不当 (Sai trật tự từ), ④ 句式杂糅 (Lẫn lộn cấu trúc), ⑤ 表意不明 (Mơ hồ đa nghĩa), ⑥ 不合逻辑 (Phi logic: 2 mặt vs 1 mặt — 能否...是...的关键).",
      "Bẫy '两面对一面' (Hai mặt đối một mặt): Vế trước có '能否/是否/好坏/高低' (2 mặt), vế sau chỉ có 1 mặt (là nguyên nhân thành công) → Câu bệnh! Phải cân bằng 2 mặt ở cả 2 vế.",
      "Phân bổ thời gian Đọc HSK 6 (50 phút / 50 câu): Phần 1 Câu bệnh (10 phút — tối đa 1 phút/câu), Phần 2 Điền từ (10 phút), Phần 3 Điền câu (10 phút), Phần 4 Đọc hiểu đoạn dài (20 phút).",
    ],
    newWords: [
      {
        hanzi: "冲刺",
        pinyin: "chōngcì",
        partOfSpeech: "Động từ",
        meaningVi: "nước rút, tăng tốc giai đoạn cuối",
        radical: "冫 (Băng)",
        strokeCount: 14,
      },
      {
        hanzi: "赘余",
        pinyin: "zhuìyú",
        partOfSpeech: "Tính từ / Danh từ",
        meaningVi: "thừa thãi, rườm rà (lỗi câu bệnh)",
        radical: "贝 (Bối)",
        strokeCount: 18,
      },
      {
        hanzi: "歧义",
        pinyin: "qíyì",
        partOfSpeech: "Danh từ",
        meaningVi: "đa nghĩa, mơ hồ gây hiểu nhầm",
        radical: "山 (Sơn)",
        strokeCount: 10,
      },
      {
        hanzi: "排查",
        pinyin: "páichá",
        partOfSpeech: "Động từ",
        meaningVi: "rà soát, loại trừ từng lỗi",
        radical: "扌 (Tài gẩy)",
        strokeCount: 20,
      },
      {
        hanzi: "主干",
        pinyin: "zhǔgàn",
        partOfSpeech: "Danh từ",
        meaningVi: "khung chính (chủ-vị-tân của câu)",
        radical: "丶 (Chấm)",
        strokeCount: 8,
      },
      {
        hanzi: "统筹",
        pinyin: "tǒngchóu",
        partOfSpeech: "Động từ",
        meaningVi: "sắp xếp tổng thể, điều phối (thời gian)",
        radical: "纟 (Mịch)",
        strokeCount: 22,
      },
      {
        hanzi: "陷阱",
        pinyin: "xiànjǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "cạm bẫy (trong đề thi)",
        radical: "阝 (Phụ)",
        strokeCount: 14,
      },
      {
        hanzi: "从容",
        pinyin: "cóngróng",
        partOfSpeech: "Tính từ",
        meaningVi: "bình tĩnh, ung dung",
        radical: "人 (Nhân)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Phương pháp rút khung câu (提取主干法)",
        lines: [
          {
            speaker: "Giảng viên",
            zh: "做HSK6病句题时，遇到很长的句子千万别慌，第一步是提取主干——只看主语、谓语和宾语。",
            pinyin: "Zuò HSK6 bìngjùtí shí, yùdào hěn cháng de jùzi qiānwàn bié huāng, dì yī bù shì tíqǔ zhǔgàn — zhǐ kàn zhǔyǔ, wèiyǔ hé bīnyǔ.",
            vi: "Khi làm bài câu bệnh HSK 6, gặp câu dài đừng hoảng, bước đầu tiên là rút khung chính — chỉ nhìn chủ ngữ, vị ngữ và tân ngữ.",
          },
          {
            speaker: "Học viên",
            zh: "如果主干没问题，第二步就排查关联词、否定词、两面对一面以及句式杂糅，对吗？",
            pinyin: "Rúguǒ zhǔgàn méi wèntí, dì èr bù jiù páichá guānliáncí, fǒudìngcí, liǎngmiàn duì yímiàn yǐjí jùshì záróu, duì ma?",
            vi: "Nếu khung chính không có vấn đề, bước hai là rà soát liên từ, từ phủ định, lỗi hai mặt đối một mặt và lẫn lộn cấu trúc, đúng không ạ?",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Tâm lý và phân bổ thời gian phòng thi",
        lines: [
          {
            speaker: "Học viên",
            zh: "老师，阅读第一部分经常让我纠结很久，导致后面长文章没时间做。",
            pinyin: "Lǎoshī, yuèdú dì yī bùfen jīngcháng ràng wǒ jiūjié hěn jiǔ, dǎozhì hòumiàn cháng wénzhāng méi shíjiān zuò.",
            vi: "Thưa thầy, phần Đọc 1 thường làm em phân vân rất lâu, khiến các bài đọc dài phía sau không đủ thời gian làm.",
          },
          {
            speaker: "Giảng viên",
            zh: "一定要统筹好时间！每道病句题最多花一分钟，拿不准的先标记跳过，保持从容心态才能拿高分。",
            pinyin: "Yídìng yào tǒngchóu hǎo shíjiān! Měi dào bìngjùtí zuìduō huā yì fēnzhōng, ná bù zhǔn de xiān biāojì tiàoguò, bǎochí cóngróng xīntài cáinéng ná gāofēn.",
            vi: "Nhất định phải phân bổ thời gian thật tốt! Mỗi câu bệnh tối đa 1 phút, câu nào chưa chắc thì đánh dấu bỏ qua trước, giữ tâm thế bình tĩnh mới đạt điểm cao.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Lỗi phi logic: Hai mặt đối một mặt (两面对一面)",
        formula: "[Sai] 能否/是否 + A，是 + B (1 mặt) 的关键 → [Đúng] Thêm 能否/是否 ở vế sau hoặc bỏ ở vế trước",
        explanationVi:
          "Một trong những bẫy kinh điển nhất của HSK 6: thấy '能否、是否、好坏、成败' phải kiểm tra ngay tính tương ứng ở vế còn lại.",
        examples: [
          {
            zh: "能否坚持长期阅读，是决定语言水平能否提升的关键。",
            pinyin: "Néngfǒu jiānchí chángqī yuèdú, shì juédìng yǔyán shuǐpíng néngfǒu tíshēng de guānjiàn.",
            vi: "Có thể kiên trì đọc lâu dài hay không là yếu tố then chốt quyết định trình độ ngôn ngữ có thể nâng cao hay không.",
          },
        ],
      },
      {
        titleVi: "Lỗi thừa từ (成分赘余) & Đa nghĩa (表意不明)",
        formula: "Tránh trùng nghĩa: 约...左右 / 免费赠送 / 忍俊不禁地笑起来",
        explanationVi:
          "Khi trong câu có hai từ cùng biểu đạt một ý (ví dụ: 约 và 左右 đều là 'khoảng'), hoặc cụm định ngữ gây hiểu 2 nghĩa (两个学校的学生), câu đó là câu bệnh.",
        examples: [
          {
            zh: "这座大桥全长约三公里。（Không viết: 约三公里左右）",
            pinyin: "Zhè zuò dàqiáo quáncháng yuē sān gōnglǐ.",
            vi: "Cây cầu lớn này dài khoảng 3 km.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk6-l12-q1",
        "A. 能否合理统筹备考时间，是决定考生最终取得优异成绩的关键。\nB. 合理统筹备考时间，是决定考生最终取得优异成绩的关键。",
        "A. Néngfǒu hélǐ tǒngchóu bèikǎo shíjiān, shì juédìng kǎoshēng zuìzhōng qǔdé yōuyì chéngjì de guānjiàn.\nB. Hélǐ tǒngchóu bèikǎo shíjiān, shì juédìng kǎoshēng zuìzhōng qǔdé yōuyì chéngjì de guānjiàn.",
        "A. Có thể sắp xếp hợp lý thời gian ôn thi hay không là then chốt quyết định thí sinh đạt thành tích xuất sắc.\nB. Sắp xếp hợp lý thời gian ôn thi là then chốt quyết định thí sinh đạt thành tích xuất sắc.",
        "Câu nào là câu bệnh (病句)?",
        [
          "Câu A mắc lỗi hai mặt đối một mặt (两面对一面)",
          "Câu B mắc lỗi thiếu chủ ngữ",
          "Cả hai câu đều sai",
          "Cả hai câu đều đúng",
        ],
        "Câu A mắc lỗi hai mặt đối một mặt (两面对一面)",
        "Câu A có '能否' (2 mặt) ở vế đầu nhưng vế sau chỉ có '取得优异成绩' (1 mặt)."
      ),
      readingComp(
        "hsk6-l12-q2",
        "看到小品演员滑稽的表演，全场观众都忍俊不禁地笑了起来。",
        "Kàndào xiǎopǐn yǎnyuán huájī de biǎoyǎn, quánchǎng guānzhòng dōu rěnjùn-bùjīn de xiào le qǐlái.",
        "Xem màn biểu diễn hài hước của diễn viên tiểu phẩm, khán giả cả hội trường đều không nhịn được cười mà cười lên.",
        "Câu trên mắc lỗi câu bệnh nào?",
        [
          "Thừa từ trùng nghĩa (成分赘余): 忍俊不禁 đã có nghĩa là cười",
          "Thiếu chủ ngữ",
          "Sai trật tự liên từ",
          "Đa nghĩa mơ hồ",
        ],
        "Thừa từ trùng nghĩa (成分赘余): 忍俊不禁 đã có nghĩa là cười",
        "'忍俊不禁' đã mang nghĩa 'không nhịn được cười', nên '笑了起来' bị trùng nghĩa thừa thãi."
      ),
      readingComp(
        "hsk6-l12-q3",
        "昨天下午，我在图书馆门口遇到了三个学校的志愿者。",
        "Zuótiān xiàwǔ, wǒ zài túshūguǎn ménkǒu yùdào le sān gè xuéxiào de zhìyuànzhě.",
        "Chiều hôm qua, tôi gặp tình nguyện viên của ba trường / ba tình nguyện viên của trường ở cổng thư viện.",
        "Câu trên mắc lỗi gì?",
        [
          "Biểu đạt mơ hồ gây đa nghĩa (表意不明 / 歧义)",
          "Lẫn lộn cấu trúc câu (句式杂糅)",
          "Phủ định sai logic",
          "Thiếu tân ngữ",
        ],
        "Biểu đạt mơ hồ gây đa nghĩa (表意不明 / 歧义)",
        "'三个学校的志愿者' có thể hiểu là '3 tình nguyện viên của 1 trường' hoặc 'tình nguyện viên đến từ 3 trường khác nhau'."
      ),
      readingComp(
        "hsk6-l12-q4",
        "这项新技术的应用，使工厂的生产成本降低了至少百分之三十以上。",
        "Zhè xiàng xīn jìshù de yìngyòng, shǐ gōngchǎng de shēngchǎn chéngběn jiàngdī le zhìshǎo bǎifēnzhī sānshí yǐshàng.",
        "Việc ứng dụng công nghệ mới này khiến chi phí sản xuất của nhà máy giảm ít nhất trên 30%.",
        "Lỗi câu bệnh trong câu trên là gì?",
        [
          "Trùng lặp logic số lượng: 至少 và 以上 không đi cùng nhau",
          "Thiếu chủ ngữ do dùng 使",
          "降低 không đi với 成本",
          "Câu hoàn toàn đúng",
        ],
        "Trùng lặp logic số lượng: 至少 và 以上 không đi cùng nhau",
        "'至少' (ít nhất) và '以上' (trở lên) trùng nghĩa về ước lượng; chỉ giữ 1 trong 2."
      ),
      readingComp(
        "hsk6-l12-q5",
        "面对日益激烈的国际竞争，唯有坚持自主创新，企业才能在市场中立于不败之地。",
        "Miànduì rìyì jīliè de guójì jìngzhēng, wéiyǒu jiānchí zìzhǔ chuàngxīn, qǐyè cáinéng zài shìchǎng zhōng lìyú-búbài-zhīdì.",
        "Trước sự cạnh tranh quốc tế ngày càng khốc liệt, chỉ có kiên trì đổi mới tự chủ thì doanh nghiệp mới có thể đứng vững bất bại trên thị trường.",
        "Đánh giá câu trên theo tiêu chuẩn HSK 6:",
        [
          "Câu đúng chuẩn ngữ pháp, không có lỗi câu bệnh",
          "Mắc lỗi thiếu chủ ngữ",
          "Mắc lỗi kết hợp từ sai",
          "Mắc lỗi lẫn lộn cấu trúc",
        ],
        "Câu đúng chuẩn ngữ pháp, không có lỗi câu bệnh",
        "Cấu trúc '唯有...才...' và thành ngữ '立于不败之地' đều chuẩn xác, không có lỗi."
      ),
    ],
  },
];
