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

export const HSK4_PART2_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 11: 读书好，读好书，好读书
  // ==========================================
  {
    id: "hsk4-l11-dushu",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Đọc sách tốt, đọc sách hay, thích đọc sách",
    titleZh: "第十一课：读书好，读好书，好读书",
    titlePinyin: "Dì shíyī kè: Dúshū hǎo, dú hǎoshū, hào dúshū",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=6nwAueS3R0k",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 11 读书好，读好书，好读书",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Giới từ/Liên từ 与 (yǔ — và, với) mang sắc thái trang trọng hơn 和 (hé), thường dùng trong văn viết hoặc diễn thuyết.",
      "Phó từ 难道 (nándào — chẳng lẽ) dùng trong câu hỏi phản vấn để nhấn mạnh ngữ khí khẳng định hoặc phủ định ngược lại.",
      "Phân biệt chữ đa âm 好: hǎo (tốt, hay) trong 读书好 / 读好书 và hào (thích, ham) trong 好读书.",
    ],
    newWords: [
      {
        hanzi: "与",
        pinyin: "yǔ",
        partOfSpeech: "Liên từ / Giới từ",
        meaningVi: "và, với, cùng với (văn viết)",
        radical: "一 (Nhất)",
        strokeCount: 3,
      },
      {
        hanzi: "平时",
        pinyin: "píngshí",
        partOfSpeech: "Danh từ",
        meaningVi: "bình thường, ngày thường",
        radical: "干 (Can)",
        strokeCount: 12,
      },
      {
        hanzi: "互联网",
        pinyin: "hùliánwǎng",
        partOfSpeech: "Danh từ",
        meaningVi: "mạng Internet",
        radical: "二 (Nhị)",
        strokeCount: 22,
      },
      {
        hanzi: "联系",
        pinyin: "liánxì",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "liên hệ, liên lạc, mối liên hệ",
        radical: "耳 (Nhĩ)",
        strokeCount: 19,
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
        hanzi: "养成",
        pinyin: "yǎngchéng",
        partOfSpeech: "Động từ",
        meaningVi: "hình thành, rèn luyện (thói quen)",
        radical: "丷 (Bát)",
        strokeCount: 15,
      },
      {
        hanzi: "习惯",
        pinyin: "xíguàn",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "thói quen; quen với",
        radical: "乙 (Ất)",
        strokeCount: 14,
      },
      {
        hanzi: "仔细",
        pinyin: "zǐxì",
        partOfSpeech: "Tính từ",
        meaningVi: "cẩn thận, tỉ mỉ, kỹ lưỡng",
        radical: "亻 (Nhân đứng)",
        strokeCount: 13,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bàn về thói quen đọc sách và Internet",
        lines: [
          {
            speaker: "李进",
            zh: "我平时很喜欢看书，但是现在有了互联网，大家好像越来越少看纸质书了。",
            pinyin:
              "Wǒ píngshí hěn xǐhuan kànshū, dànshì xiànzài yǒule hùliánwǎng, dàjiā hǎoxiàng yuèláiyuè shǎo kàn zhǐzhì shū le.",
            vi: "Ngày thường tôi rất thích đọc sách, nhưng bây giờ có Internet rồi, mọi người dường như ngày càng ít đọc sách giấy hơn.",
          },
          {
            speaker: "王静",
            zh: "其实不管用什么方式，只要养成每天读书的好习惯，就一定会有收获。",
            pinyin:
              "Qíshí bùguǎn yòng shénme fāngshì, zhǐyào yǎngchéng měitiān dúshū de hǎo xíguàn, jiù yídìng huì yǒu shōuhuò.",
            vi: "Thật ra bất kể dùng cách nào, chỉ cần rèn luyện được thói quen tốt đọc sách mỗi ngày thì nhất định sẽ có thu hoạch.",
          },
          {
            speaker: "李进",
            zh: "说得对。不过书太多了，我们得仔细选择那些真正值得读的好书。",
            pinyin:
              "Shuō de duì. Búguò shū tài duō le, wǒmen děi zǐxì xuǎnzé nàxiē zhēnzhèng zhídé dú de hǎoshū.",
            vi: "Nói đúng lắm. Nhưng sách nhiều quá, chúng ta phải chọn lựa kỹ càng những cuốn sách hay thật sự đáng đọc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ý nghĩa của câu 'Đọc sách tốt, đọc sách hay, thích đọc sách'",
        lines: [
          {
            speaker: "老师",
            zh: "中国有一句名言：读书好，读好书，好读书。你们知道这句话的意思吗？",
            pinyin:
              "Zhōngguó yǒu yí jù míngyán: Dúshū hǎo, dú hǎoshū, hào dúshū. Nǐmen zhīdào zhè jù huà de yìsi ma?",
            vi: "Trung Quốc có một câu danh ngôn: Đọc sách tốt, đọc sách hay, thích đọc sách. Các em có biết ý nghĩa của câu này không?",
          },
          {
            speaker: "学生",
            zh: "读书能开阔眼界，与智者交流；但书有好坏之分，所以要读好书，并且发自内心地爱好读书。",
            pinyin:
              "Dúshū néng kāikuò yǎnjiè, yǔ zhìzhě jiāoliú; dàn shū yǒu hǎohuài zhī fēn, suǒyǐ yào dú hǎoshū, bìngqiě fāzì nèixīn de àihào dúshū.",
            vi: "Đọc sách có thể mở mang tầm mắt, giao lưu với bậc hiền triết; nhưng sách có hay có dở, nên phải đọc sách hay, đồng thời xuất phát từ nội tâm yêu thích đọc sách.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cách dùng liên từ/giới từ 与 (yǔ)",
        formula: "A + 与 + B (văn viết, tương đương 和 / 跟)",
        explanationVi:
          "与 (yǔ) dùng để nối hai danh từ, cụm danh từ hoặc biểu thị đối tượng cùng thực hiện hành động, thường xuất hiện trong văn viết, tiêu đề sách báo và câu văn trang trọng.",
        examples: [
          {
            zh: "阅读与写作之间有着密切的联系。",
            pinyin: "Yuèdú yǔ xiězuò zhījiān yǒuzhe mìqiè de liánxì.",
            vi: "Giữa đọc hiểu và viết lách có mối liên hệ mật thiết.",
          },
          {
            zh: "他平时喜欢与朋友分享好书。",
            pinyin: "Tā píngshí xǐhuan yǔ péngyou fēnxiǎng hǎoshū.",
            vi: "Ngày thường anh ấy thích chia sẻ sách hay với bạn bè.",
          },
        ],
      },
      {
        titleVi: "Câu hỏi phản vấn với 难道 (nándào)",
        formula: "难道 + Chủ ngữ + ... + 吗？",
        explanationVi:
          "难道 (chẳng lẽ) dùng để nhấn mạnh ngữ khí phản vấn: nếu mệnh đề khẳng định thì hàm ý phủ định, nếu mệnh đề phủ định thì hàm ý khẳng định mạnh mẽ.",
        examples: [
          {
            zh: "这本书这么有名，难道你没读过吗？",
            pinyin: "Zhè běn shū zhème yǒumíng, nándào nǐ méi dúguo ma?",
            vi: "Cuốn sách này nổi tiếng như vậy, chẳng lẽ bạn chưa từng đọc sao? (Hàm ý: đáng lẽ bạn phải đọc rồi)",
          },
          {
            zh: "难道上网聊天比读书更有意思吗？",
            pinyin: "Nándào shàngwǎng liáotiān bǐ dúshū gèng yǒuyìsi ma?",
            vi: "Chẳng lẽ lên mạng tán gẫu thú vị hơn đọc sách sao? (Hàm ý: không thú vị hơn)",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk4-l11-q1",
        "虽然互联网让人们获取信息变得非常方便，但每天抽出半小时仔细阅读一本好书，依然是值得坚持的好习惯。",
        "Suīrán hùliánwǎng ràng rénmen huòqǔ xìnxī biànde fēicháng fāngbiàn, dàn měitiān chōuchū bàn xiǎoshí zǐxì yuèdú yì běn hǎoshū, yīrán shì zhídé jiānchí de hǎo xíguàn.",
        "Tuy Internet giúp con người tiếp cận thông tin vô cùng thuận tiện, nhưng mỗi ngày dành ra nửa tiếng đọc kỹ một cuốn sách hay vẫn là thói quen tốt đáng kiên trì.",
        "Đoạn văn trên muốn nhấn mạnh điều gì?",
        [
          "Dù có Internet, vẫn nên giữ thói quen đọc sách hay mỗi ngày",
          "Internet hoàn toàn thay thế được việc đọc sách",
          "Đọc sách trên mạng tốn quá nhiều thời gian",
          "Mỗi ngày chỉ nên lên mạng nửa tiếng",
        ],
        "Dù có Internet, vẫn nên giữ thói quen đọc sách hay mỗi ngày",
        "Cụm '依然是值得坚持的好习惯' khẳng định tầm quan trọng của việc đọc sách hay mỗi ngày."
      ),
      readingComp(
        "hsk4-l11-q2",
        "读书好，读好书，好读书。其中最后一个“好”读第四声，意思是“喜欢、爱好”。",
        "Dúshū hǎo, dú hǎoshū, hào dúshū. Qízhōng zuìhòu yí gè 'hào' dú dì-sì shēng, yìsi shì 'xǐhuan, àihào'.",
        "Đọc sách tốt, đọc sách hay, thích đọc sách. Trong đó chữ '好' cuối cùng đọc thanh 4, có nghĩa là 'thích, yêu thích'.",
        "Chữ 好 cuối cùng trong câu danh ngôn có cách đọc và nghĩa là gì?",
        [
          "Thanh 4 (hào) — nghĩa là thích, yêu thích",
          "Thanh 3 (hǎo) — nghĩa là tốt đẹp",
          "Thanh 2 (háo) — nghĩa là giỏi giang",
          "Thanh 1 (hāo) — nghĩa là đọc nhanh",
        ],
        "Thanh 4 (hào) — nghĩa là thích, yêu thích",
        "Theo đoạn văn: '最后一个好读第四声，意思是喜欢、爱好'."
      ),
      readingComp(
        "hsk4-l11-q3",
        "这本书内容非常丰富，不仅能帮助你提高汉语水平，还能让你了解中国文化，非常值得一看。",
        "Zhè běn shū nèiróng fēicháng fēngfù, bùjǐn néng bāngzhù nǐ tígāo Hànyǔ shuǐpíng, hái néng ràng nǐ liǎojiě Zhōngguó wénhuà, fēicháng zhídé yí kàn.",
        "Nội dung cuốn sách này vô cùng phong phú, không những giúp bạn nâng cao trình độ tiếng Trung mà còn giúp bạn hiểu văn hóa Trung Quốc, rất đáng xem.",
        "Tại sao tác giả khuyên nên đọc cuốn sách này?",
        [
          "Giúp nâng cao tiếng Trung và hiểu thêm văn hóa Trung Quốc",
          "Vì cuốn sách này rất mỏng và rẻ tiền",
          "Vì đây là sách bài tập toán học",
          "Vì cuốn sách có nhiều tranh ảnh đẹp",
        ],
        "Giúp nâng cao tiếng Trung và hiểu thêm văn hóa Trung Quốc",
        "Câu dùng cấu trúc '不仅...还...' nêu hai lợi ích rõ ràng."
      ),
      readingComp(
        "hsk4-l11-q4",
        "小张平时工作很忙，跟大学同学的联系越来越少，但他一直保留着写读书笔记的习惯。",
        "Xiǎo Zhāng píngshí gōngzuò hěn máng, gēn dàxué tóngxué de liánxì yuèláiyuè shǎo, dàn tā yìzhí bǎoliúzhe xiě dúshū bǐjì de xíguàn.",
        "Tiểu Trương ngày thường công việc rất bận, liên lạc với bạn đại học ngày càng ít, nhưng anh ấy vẫn luôn giữ thói quen viết ghi chú đọc sách.",
        "Điều nào đúng về Tiểu Trương?",
        [
          "Anh ấy vẫn duy trì thói quen ghi chép khi đọc sách",
          "Anh ấy thường xuyên gặp gỡ bạn đại học",
          "Anh ấy không có thời gian đọc sách",
          "Anh ấy mới nghỉ việc gần đây",
        ],
        "Anh ấy vẫn duy trì thói quen ghi chép khi đọc sách",
        "Chi tiết '一直保留着写读书笔记的习惯' trùng khớp với đáp án A."
      ),
      readingComp(
        "hsk4-l11-q5",
        "你每天晚上都看手机到十二点，难道第二天上班不困吗？",
        "Nǐ měitiān wǎnshang dōu kàn shǒujī dào shí'èr diǎn, nándào dì-èr tiān shàngbān bú kùn ma?",
        "Tối nào bạn cũng xem điện thoại đến 12 giờ, chẳng lẽ hôm sau đi làm không buồn ngủ sao?",
        "Hàm ý của người nói trong câu phản vấn trên là gì?",
        [
          "Hôm sau đi làm chắc chắn sẽ rất buồn ngủ",
          "Xem điện thoại đến 12 giờ giúp tỉnh táo hơn",
          "Hôm sau không cần phải đi làm",
          "Người nghe ngủ rất sớm mỗi tối",
        ],
        "Hôm sau đi làm chắc chắn sẽ rất buồn ngủ",
        "难道 + phủ định (不困) + 吗 biểu thị khẳng định mạnh: chắc chắn là buồn ngủ."
      ),
    ],
  },

  // ==========================================
  // BÀI 12: 用心发现世界
  // ==========================================
  {
    id: "hsk4-l12-yongxin",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Dùng tâm để khám phá thế giới",
    titleZh: "第十二课：用心发现世界",
    titlePinyin: "Dì shí'èr kè: Yòngxīn fāxiàn shìjiè",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=bz4psTj-VrE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 12 用心发现世界",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc 无论……都…… (wúlùn... dōu... — bất luận... đều...) biểu thị kết quả không thay đổi trong mọi điều kiện.",
      "Liên từ 否则 (fǒuzé — nếu không thì) dùng để đưa ra kết quả xấu hoặc tình huống ngược lại nếu không làm theo vế trước.",
      "Động từ 坚持 (jiānchí — kiên trì) và 放弃 (fàngqì — từ bỏ) là cặp từ trái nghĩa cốt lõi trong chủ đề nghị lực sống.",
    ],
    newWords: [
      {
        hanzi: "坚持",
        pinyin: "jiānchí",
        partOfSpeech: "Động từ",
        meaningVi: "kiên trì, giữ vững",
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
        hanzi: "改变",
        pinyin: "gǎibiàn",
        partOfSpeech: "Động từ",
        meaningVi: "thay đổi, biến đổi",
        radical: "攵 (Phộc)",
        strokeCount: 15,
      },
      {
        hanzi: "温度",
        pinyin: "wēndù",
        partOfSpeech: "Danh từ",
        meaningVi: "nhiệt độ",
        radical: "氵 (Chấm thủy)",
        strokeCount: 21,
      },
      {
        hanzi: "超过",
        pinyin: "chāoguò",
        partOfSpeech: "Động từ",
        meaningVi: "vượt quá, hơn",
        radical: "走 (Tẩu)",
        strokeCount: 18,
      },
      {
        hanzi: "否则",
        pinyin: "fǒuzé",
        partOfSpeech: "Liên từ",
        meaningVi: "nếu không thì, bằng không",
        radical: "口 (Khẩu)",
        strokeCount: 13,
      },
      {
        hanzi: "无论",
        pinyin: "wúlùn",
        partOfSpeech: "Liên từ",
        meaningVi: "bất luận, cho dù, bất kể",
        radical: "一 (Nhất)",
        strokeCount: 10,
      },
      {
        hanzi: "勇敢",
        pinyin: "yǒnggǎn",
        partOfSpeech: "Tính từ",
        meaningVi: "dũng cảm, can đảm",
        radical: "力 (Lực)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Kiên trì và không từ bỏ khi gặp khó khăn",
        lines: [
          {
            speaker: "马克",
            zh: "这次实验又失败了，我真想放弃。",
            pinyin: "Zhè cì shíyàn yòu shībài le, wǒ zhēn xiǎng fàngqì.",
            vi: "Thí nghiệm lần này lại thất bại rồi, mình thật sự muốn bỏ cuộc.",
          },
          {
            speaker: "林娜",
            zh: "别灰心！无论遇到多大的困难，我们都要勇敢地坚持下去。",
            pinyin:
              "Bié huīxīn! Wúlùn yùdào duō dà de kùnnan, wǒmen dōu yào yǒnggǎn de jiānchí xiàqù.",
            vi: "Đừng nản lòng! Bất luận gặp khó khăn lớn đến đâu, chúng ta đều phải dũng cảm kiên trì tiếp tục.",
          },
          {
            speaker: "马克",
            zh: "你说得对，我必须改变一下方法，否则还是会失败。",
            pinyin:
              "Nǐ shuō de duì, wǒ bìxū gǎibiàn yíxià fāngfǎ, fǒuzé háishì huì shībài.",
            vi: "Cậu nói đúng, mình phải thay đổi phương pháp một chút, nếu không thì vẫn sẽ thất bại.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Dùng tâm cảm nhận những điều kỳ diệu quanh ta",
        lines: [
          {
            speaker: "导游",
            zh: "今天山上的温度不超过十五度，大家记得多穿件衣服，否则容易感冒。",
            pinyin:
              "Jīntiān shānshang de wēndù bù chāoguò shíwǔ dù, dàjiā jìde duō chuān jiàn yīfu, fǒuzé róngyì gǎnmào.",
            vi: "Hôm nay nhiệt độ trên núi không vượt quá 15 độ, mọi người nhớ mặc thêm chiếc áo, nếu không rất dễ bị cảm.",
          },
          {
            speaker: "游客",
            zh: "只要用心去观察，无论春夏秋冬，大自然都有不同的美。",
            pinyin:
              "Zhǐyào yòngxīn qù guānchá, wúlùn chūn xià qiū dōng, dàzìrán dōu yǒu bùtóng de měi.",
            vi: "Chỉ cần dùng tâm để quan sát, bất kể xuân hạ thu đông, thiên nhiên đều có những vẻ đẹp khác nhau.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc điều kiện 无论……都/也……",
        formula: "无论 + (Đại từ nghi vấn / A 还是 B) + 都/也 + Kết quả",
        explanationVi:
          "无论 (bất luận, bất kể) đi với từ nghi vấn (什么, 怎么, 多么) hoặc lựa chọn (A 还是 B), vế sau bắt buộc có 都 hoặc 也 để nhấn mạnh kết quả không đổi.",
        examples: [
          {
            zh: "无论发生什么事，我都不会放弃梦想。",
            pinyin: "Wúlùn fāshēng shénme shì, wǒ dōu bú huì fàngqì mèngxiǎng.",
            vi: "Bất luận xảy ra chuyện gì, tôi đều sẽ không từ bỏ ước mơ.",
          },
          {
            zh: "无论天气好还是坏，他每天都坚持跑步。",
            pinyin: "Wúlùn tiānqì hǎo háishi huài, tā měitiān dōu jiānchí pǎobù.",
            vi: "Bất kể thời tiết đẹp hay xấu, anh ấy mỗi ngày đều kiên trì chạy bộ.",
          },
        ],
      },
      {
        titleVi: "Liên từ 否则 (fǒuzé — nếu không thì)",
        formula: "Mệnh đề 1 (yêu cầu / lời khuyên)，否则 + Kết quả ngược lại",
        explanationVi:
          "否则 dùng ở đầu vế câu thứ hai, biểu thị 'nếu không làm theo vế trước thì sẽ dẫn đến hậu quả ở vế sau'.",
        examples: [
          {
            zh: "我们得快点儿走，否则就要迟到了。",
            pinyin: "Wǒmen děi kuàidiǎnr zǒu, fǒuzé jiù yào chídào le.",
            vi: "Chúng ta phải đi nhanh lên một chút, nếu không thì sắp muộn rồi.",
          },
          {
            zh: "你必须改变生活习惯，否则身体会越来越差。",
            pinyin: "Nǐ bìxū gǎibiàn shēnghuó xíguàn, fǒuzé shēntǐ huì yuèláiyuè chà.",
            vi: "Bạn phải thay đổi thói quen sinh hoạt, nếu không sức khỏe sẽ ngày càng kém đi.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk4-l12-q1",
        "坚",
        "jiān",
        "kiên (trong 坚持 — kiên trì)",
        "Chữ 坚 gồm bộ Thổ (土) ở dưới, 7 nét, chú ý viết phần trên trước rồi mới viết 土."
      ),
      writingStroke(
        "hsk4-l12-q2",
        "改",
        "gǎi",
        "cải, sửa (trong 改变 — thay đổi)",
        "Chữ 改 gồm 己 bên trái và bộ Phộc (攵) bên phải, 7 nét."
      ),
      writingOrder(
        "hsk4-l12-q3",
        "Sắp xếp thành câu hoàn chỉnh với cấu trúc 无论……都……:",
        ["无论", "遇到什么困难", "都", "不要放弃", "我们"],
        "无论遇到什么困难我们都不要放弃",
        "Wúlùn yùdào shénme kùnnan wǒmen dōu bú yào fàngqì",
        "Cấu trúc: 无论 + 遇到什么困难 + 我们 + 都 + 不要放弃."
      ),
      writingOrder(
        "hsk4-l12-q4",
        "Sắp xếp thành câu hoàn chỉnh với liên từ 否则:",
        ["多穿点儿衣服", "否则", "会感冒的", "今天温度很低"],
        "今天温度很低多穿点儿衣服否则会感冒的",
        "Jīntiān wēndù hěn dī duō chuān diǎnr yīfu fǒuzé huì gǎnmào de",
        "Nêu nguyên nhân/lời khuyên trước, rồi dùng 否则 dẫn ra hậu quả."
      ),
      writingTwoSentences(
        "hsk4-l12-q5",
        "坚持",
        "jiānchí",
        "kiên trì",
        "Đặt 2 câu có từ 坚持 (ví dụ: 坚持每天学汉语 / 无论多累都要坚持完成工作)."
      ),
    ],
  },

  // ==========================================
  // BÀI 13: 喝着茶看京剧
  // ==========================================
  {
    id: "hsk4-l13-jingju",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 13,
    title: "Bài 13: Uống trà xem Kinh kịch",
    titleZh: "第十三课：喝着茶看京剧",
    titlePinyin: "Dì shísān kè: Hēzhe chá kàn Jīngjù",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=nY_o78dElQc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 13 喝着茶看京剧",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc V1 + 着 + (Tân ngữ 1) + V2 diễn tả hai hành động xảy ra đồng thời, trong đó V1 là phương thức/trạng thái đi kèm của V2 (ví dụ: 喝着茶看京剧).",
      "Phó từ 竟然 (jìngrán — vậy mà lại, không ngờ) biểu thị sự ngạc nhiên trước một sự việc nằm ngoài dự đoán.",
      "Từ vựng văn hóa đặc trưng: 京剧 (Kinh kịch), 演出 (biểu diễn), 观众 (khán giả), 鼓掌 (vỗ tay), 传统艺术 (nghệ thuật truyền thống).",
    ],
    newWords: [
      {
        hanzi: "京剧",
        pinyin: "Jīngjù",
        partOfSpeech: "Danh từ",
        meaningVi: "Kinh kịch",
        radical: "亠 (Đầu)",
        strokeCount: 18,
      },
      {
        hanzi: "演出",
        pinyin: "yǎnchū",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "biểu diễn; buổi biểu diễn",
        radical: "氵 (Chấm thủy)",
        strokeCount: 19,
      },
      {
        hanzi: "演员",
        pinyin: "yǎnyuán",
        partOfSpeech: "Danh từ",
        meaningVi: "diễn viên",
        radical: "氵 (Chấm thủy)",
        strokeCount: 21,
      },
      {
        hanzi: "观众",
        pinyin: "guānzhòng",
        partOfSpeech: "Danh từ",
        meaningVi: "khán giả",
        radical: "见 (Kiến)",
        strokeCount: 12,
      },
      {
        hanzi: "鼓掌",
        pinyin: "gǔzhǎng",
        partOfSpeech: "Động từ",
        meaningVi: "vỗ tay",
        radical: "鼓 (Cổ)",
        strokeCount: 25,
      },
      {
        hanzi: "精彩",
        pinyin: "jīngcǎi",
        partOfSpeech: "Tính từ",
        meaningVi: "đặc sắc, xuất sắc, tuyệt vời",
        radical: "米 (Mễ)",
        strokeCount: 25,
      },
      {
        hanzi: "传统",
        pinyin: "chuántǒng",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "truyền thống",
        radical: "亻 (Nhân đứng)",
        strokeCount: 15,
      },
      {
        hanzi: "艺术",
        pinyin: "yìshù",
        partOfSpeech: "Danh từ",
        meaningVi: "nghệ thuật",
        radical: "艹 (Thảo đầu)",
        strokeCount: 9,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đi xem biểu diễn Kinh kịch ở Bắc Kinh",
        lines: [
          {
            speaker: "安娜",
            zh: "昨晚的京剧演出太精彩了！演员们的唱腔和动作都让人印象深刻。",
            pinyin:
              "Zuówǎn de Jīngjù yǎnchū tài jīngcǎi le! Yǎnyuánmen de chàngqiāng hé dòngzuò dōu ràng rén yìnxiàng shēnkè.",
            vi: "Buổi biểu diễn Kinh kịch tối qua đặc sắc quá! Giọng hát và động tác của các diễn viên đều khiến người ta ấn tượng sâu sắc.",
          },
          {
            speaker: "王明",
            zh: "是啊，大家一边喝着茶，一边看京剧，结束后观众们不停地鼓掌。",
            pinyin:
              "Shì a, dàjiā yìbiān hēzhe chá, yìbiān kàn Jīngjù, jiéshù hòu guānzhòngmen bùtíng de gǔzhǎng.",
            vi: "Đúng vậy, mọi người vừa uống trà vừa xem Kinh kịch, kết thúc rồi khán giả vỗ tay không ngớt.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Sự ngạc nhiên với nghệ thuật truyền thống",
        lines: [
          {
            speaker: "大卫",
            zh: "真没想到，一个外国留学生竟然能把京剧唱得这么好听！",
            pinyin:
              "Zhēn méi xiǎngdào, yí gè wàiguó liúxuéshēng jìngrán néng bǎ Jīngjù chàng de zhème hǎotīng!",
            vi: "Thật không ngờ, một du học sinh nước ngoài vậy mà lại có thể hát Kinh kịch hay đến thế!",
          },
          {
            speaker: "李老师",
            zh: "京剧是中国的传统艺术，现在越来越多的年轻人开始喜欢并学习它了。",
            pinyin:
              "Jīngjù shì Zhōngguó de chuántǒng yìshù, xiànzài yuèláiyuè duō de niánqīngrén kāishǐ xǐhuan bìng xuéxí tā le.",
            vi: "Kinh kịch là nghệ thuật truyền thống của Trung Quốc, hiện nay ngày càng nhiều người trẻ bắt đầu yêu thích và học nó rồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc V1 + 着 + (O1) + V2 (Hành động đi kèm)",
        formula: "Chủ ngữ + V1 + 着 + (Tân ngữ 1) + V2 + (Tân ngữ 2)",
        explanationVi:
          "Biểu thị hai động tác diễn ra đồng thời, trong đó V1+着 làm trạng ngữ miêu tả phương thức hoặc trạng thái khi thực hiện động tác chính V2.",
        examples: [
          {
            zh: "老北京人喜欢喝着茶看京剧。",
            pinyin: "Lǎo Běijīngrén xǐhuan hēzhe chá kàn Jīngjù.",
            vi: "Người Bắc Kinh xưa thích vừa uống trà vừa xem Kinh kịch.",
          },
          {
            zh: "她笑着对观众说了声谢谢。",
            pinyin: "Tā xiàozhe duì guānzhòng shuōle shēng xièxie.",
            vi: "Cô ấy mỉm cười nói lời cảm ơn với khán giả.",
          },
        ],
      },
      {
        titleVi: "Phó từ 竟然 (jìngrán — vậy mà lại, không ngờ)",
        formula: "Chủ ngữ + 竟然 + Động từ / Tính từ",
        explanationVi:
          "竟然 biểu thị sự việc xảy ra ngoài dự đoán, mang sắc thái kinh ngạc (có thể tích cực hoặc tiêu cực).",
        examples: [
          {
            zh: "他才学了半年汉语，竟然能看懂京剧了。",
            pinyin: "Tā cái xuéle bàn nián Hànyǔ, jìngrán néng kàndǒng Jīngjù le.",
            vi: "Anh ấy mới học tiếng Trung nửa năm, vậy mà đã có thể xem hiểu Kinh kịch rồi.",
          },
          {
            zh: "这么精彩的演出，他竟然睡着了。",
            pinyin: "Zhème jīngcǎi de yǎnchū, tā jìngrán shuìzháo le.",
            vi: "Buổi biểu diễn đặc sắc như vậy mà anh ấy lại ngủ quên mất.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk4-l13-q1",
        "昨晚的京剧演出非常精彩，观众们热烈地鼓掌。",
        "Zuówǎn de Jīngjù yǎnchū fēicháng jīngcǎi, guānzhòngmen rèliè de gǔzhǎng.",
        "Nghe câu trên và chọn nhận định đúng về buổi biểu diễn Kinh kịch tối qua:",
        [
          "Buổi biểu diễn rất đặc sắc và khán giả vỗ tay nhiệt liệt",
          "Buổi biểu diễn bị hủy vì trời mưa",
          "Khán giả đến rất ít",
          "Diễn viên bị ốm nên không hát được",
        ],
        "Buổi biểu diễn rất đặc sắc và khán giả vỗ tay nhiệt liệt",
        "Từ khóa nghe được: 非常精彩 (rất đặc sắc) và 热烈地鼓掌 (vỗ tay nhiệt liệt)."
      ),
      listeningMcq(
        "hsk4-l13-q2",
        "我真没想到，马克竟然会唱京剧，而且唱得非常好听。",
        "Wǒ zhēn méi xiǎngdào, Mǎkè jìngrán huì chàng Jīngjù, érqiě chàng de fēicháng hǎotīng.",
        "Nghe câu trên: Người nói cảm thấy thế nào về việc Mark biết hát Kinh kịch?",
        [
          "Rất bất ngờ và khen anh ấy hát rất hay",
          "Cảm thấy bình thường vì anh ấy là diễn viên",
          "Khuyên anh ấy không nên hát nữa",
          "Nghĩ rằng anh ấy hát chưa tốt lắm",
        ],
        "Rất bất ngờ và khen anh ấy hát rất hay",
        "Cụm '真没想到' và '竟然' biểu thị sự ngạc nhiên lớn."
      ),
      listeningFill(
        "hsk4-l13-q3",
        "京剧是中国的传统艺术。",
        "京剧是中国的____艺术。",
        "Jīngjù shì Zhōngguó de chuántǒng yìshù.",
        "Nghe và điền từ còn thiếu (2 chữ Hán, nghĩa là 'truyền thống'):",
        "传统",
        "传统 (chuántǒng) nghĩa là truyền thống."
      ),
      listeningFill(
        "hsk4-l13-q4",
        "在北京的老茶馆里，人们可以喝着茶看演出。",
        "在北京的老茶馆里，人们可以____看演出。",
        "Zài Běijīng de lǎo cháguǎn lǐ, rénmen kěyǐ hēzhe chá kàn yǎnchū.",
        "Nghe và điền cụm từ còn thiếu (3 chữ Hán, nghĩa là 'vừa uống trà'):",
        "喝着茶",
        "Cấu trúc V1+着+O1+V2: 喝着茶看演出 (vừa uống trà vừa xem biểu diễn)."
      ),
      listeningDialogue(
        "hsk4-l13-q5",
        "男：你昨天去听京剧了吗？觉得怎么样？女：太棒了！演员的衣服很漂亮，音乐也很好听，我下次还想去。",
        "Nán: Nǐ zuótiān qù tīng Jīngjù le ma? Juéde zěnmeyàng? Nǚ: Tài bàng le! Yǎnyuán de yīfu hěn piàoliang, yīnyuè yě hěn hǎotīng, wǒ xiàcì hái xiǎng qù.",
        "Nghe đoạn hội thoại và chọn đáp án đúng về cảm nhận của người nữ:",
        [
          "Cô ấy rất thích buổi Kinh kịch và muốn đi xem lần nữa",
          "Cô ấy không nghe hiểu nên thấy hơi chán",
          "Cô ấy chỉ thích trang phục chứ không thích âm nhạc",
          "Cô ấy chưa từng đi xem Kinh kịch",
        ],
        "Cô ấy rất thích buổi Kinh kịch và muốn đi xem lần nữa",
        "Người nữ nói '太棒了' (tuyệt quá) và '下次还想去' (lần sau vẫn muốn đi)."
      ),
    ],
  },

  // ==========================================
  // BÀI 14: 保护地球母亲
  // ==========================================
  {
    id: "hsk4-l14-huanjing",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 14,
    title: "Bài 14: Bảo vệ Mẹ Trái Đất",
    titleZh: "第十四课：保护地球母亲",
    titlePinyin: "Dì shísì kè: Bǎohù dìqiú mǔqīn",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=p6HHMz29llc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 14 保护地球母亲",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Phó từ 顺便 (shùnbiàn — tiện thể, nhân tiện) dùng trước động từ để diễn tả việc làm thêm một việc khác trong lúc đang làm việc chính.",
      "Lượng từ 倍 (bèi — lần, gấp bội) dùng để biểu thị bội số tăng lên (ví dụ: 是去年的两倍 — gấp hai lần năm ngoái).",
      "Chủ đề bảo vệ môi trường: 保护地球 (bảo vệ Trái Đất), 减少污染 (giảm ô nhiễm), 节约用水 (tiết kiệm nước), 不用塑料袋 (không dùng túi ni-lông).",
    ],
    newWords: [
      {
        hanzi: "保护",
        pinyin: "bǎohù",
        partOfSpeech: "Động từ",
        meaningVi: "bảo vệ",
        radical: "亻 (Nhân đứng)",
        strokeCount: 16,
      },
      {
        hanzi: "地球",
        pinyin: "dìqiú",
        partOfSpeech: "Danh từ",
        meaningVi: "Trái Đất",
        radical: "土 (Thổ)",
        strokeCount: 17,
      },
      {
        hanzi: "环境",
        pinyin: "huánjìng",
        partOfSpeech: "Danh từ",
        meaningVi: "môi trường",
        radical: "王 (Ngọc)",
        strokeCount: 22,
      },
      {
        hanzi: "污染",
        pinyin: "wūrǎn",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "ô nhiễm; làm ô nhiễm",
        radical: "氵 (Chấm thủy)",
        strokeCount: 15,
      },
      {
        hanzi: "塑料袋",
        pinyin: "sùliàodài",
        partOfSpeech: "Danh từ",
        meaningVi: "túi ni-lông, túi nhựa",
        radical: "土 (Thổ)",
        strokeCount: 34,
      },
      {
        hanzi: "减少",
        pinyin: "jiǎnshǎo",
        partOfSpeech: "Động từ",
        meaningVi: "giảm bớt, cắt giảm",
        radical: "冫 (Băng)",
        strokeCount: 15,
      },
      {
        hanzi: "节约",
        pinyin: "jiéyuē",
        partOfSpeech: "Động từ",
        meaningVi: "tiết kiệm",
        radical: "艹 (Thảo đầu)",
        strokeCount: 11,
      },
      {
        hanzi: "垃圾",
        pinyin: "lājī",
        partOfSpeech: "Danh từ",
        meaningVi: "rác, rác thải",
        radical: "土 (Thổ)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đi siêu thị và giảm dùng túi ni-lông",
        lines: [
          {
            speaker: "妈妈",
            zh: "你下楼扔垃圾的时候，顺便去超市买点儿水果吧。",
            pinyin:
              "Nǐ xiàlóu rēng lājī de shíhou, shùnbiàn qù chāoshì mǎi diǎnr shuǐguǒ ba.",
            vi: "Con xuống lầu đổ rác thì tiện thể ra siêu thị mua ít hoa quả nhé.",
          },
          {
            speaker: "女儿",
            zh: "好的，我带上自己的环保袋，尽量少用塑料袋，减少环境污染。",
            pinyin:
              "Hǎo de, wǒ dàishàng zìjǐ de huánbǎodài, jǐnliàng shǎo yòng sùliàodài, jiǎnshǎo huánjìng wūrǎn.",
            vi: "Vâng ạ, con mang theo túi bảo vệ môi trường của mình, cố gắng ít dùng túi ni-lông để giảm ô nhiễm môi trường.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chung tay bảo vệ Mẹ Trái Đất",
        lines: [
          {
            speaker: "主持人",
            zh: "保护地球母亲其实可以从身边的小事做起，比如节约用水和用电。",
            pinyin:
              "Bǎohù dìqiú mǔqīn qíshí kěyǐ cóng shēnbiān de xiǎoshì zuòqǐ, bǐrú jiéyuē yòngshuǐ hé yòngdiàn.",
            vi: "Bảo vệ Mẹ Trái Đất thật ra có thể bắt đầu từ những việc nhỏ quanh mình, ví dụ như tiết kiệm nước và điện.",
          },
          {
            speaker: "嘉宾",
            zh: "没错，现在骑自行车上班的人数是五年前的两倍，大家的环保意识越来越强了。",
            pinyin:
              "Méicuò, xiànzài qí zìxíngchē shàngbān de rénshù shì wǔ nián qián de liǎng bèi, dàjiā de huánbǎo yìshí yuèláiyuè qiáng le.",
            vi: "Đúng vậy, hiện nay số người đạp xe đi làm gấp đôi 5 năm trước, ý thức bảo vệ môi trường của mọi người ngày càng cao rồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 顺便 (shùnbiàn — tiện thể, nhân tiện)",
        formula: "Làm việc A + (的时候)，顺便 + Làm việc B",
        explanationVi:
          "顺便 đứng trước động từ, diễn tả nhân lúc làm việc chính thì làm thêm một việc phụ thuận đường hoặc thuận thời gian.",
        examples: [
          {
            zh: "你去邮局寄信，顺便帮我买几张邮票吧。",
            pinyin: "Nǐ qù yóujú jìxìn, shùnbiàn bāng wǒ mǎi jǐ zhāng yóupiào ba.",
            vi: "Cậu ra bưu điện gửi thư thì tiện thể mua giúp mình mấy con tem nhé.",
          },
          {
            zh: "我回家的路上顺便把垃圾扔了。",
            pinyin: "Wǒ huíjiā de lùshang shùnbiàn bǎ lājī rēng le.",
            vi: "Trên đường về nhà tôi tiện thể vứt rác luôn rồi.",
          },
        ],
      },
      {
        titleVi: "Cách diễn đạt bội số với 倍 (bèi)",
        formula: "A + 是 + B + 的 + Số từ + 倍 (A gấp ... lần B)",
        explanationVi:
          "倍 dùng để chỉ số lần nhân lên. Lưu ý: '两倍' là gấp 2 lần (200%), '增加了两倍' nghĩa là tăng thêm 2 lần (tức thành 3 lần ban đầu).",
        examples: [
          {
            zh: "今年的绿化面积是去年的两倍。",
            pinyin: "Jīnnián de lǜhuà miànjī shì qùnián de liǎng bèi.",
            vi: "Diện tích phủ xanh năm nay gấp hai lần năm ngoái.",
          },
          {
            zh: "这个城市的汽车数量比十年前多了三倍。",
            pinyin: "Zhège chéngshì de qìchē shùliàng bǐ shí nián qián duōle sān bèi.",
            vi: "Số lượng ô tô ở thành phố này nhiều hơn 10 năm trước gấp 3 lần.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk4-l14-q1",
        "保护地球母亲，是我们每个人的责任。",
        "Bǎohù dìqiú mǔqīn, shì wǒmen měi gè rén de zérèn.",
        "Luyện đọc theo câu khẩu hiệu bảo vệ môi trường, chú ý ngắt nhịp sau dấu phẩy:",
        ["bǎohù", "dìqiú", "zérèn"],
        "Đọc rõ thanh 3-4 ở 保护 (bǎohù) và âm uốn lưỡi/nhấn nhẹ ở 责任 (zérèn)."
      ),
      speakingShadowing(
        "hsk4-l14-q2",
        "去超市买东西时，请尽量少用塑料袋。",
        "Qù chāoshì mǎi dōngxi shí, qǐng jǐnliàng shǎo yòng sùliàodài.",
        "Luyện nói lời khuyên giảm dùng túi ni-lông:",
        ["jǐnliàng", "sùliàodài"],
        "Chú ý phát âm chuẩn từ 塑料袋 (sù-liào-dài — ba thanh 4 liên tiếp rõ ràng)."
      ),
      speakingShadowing(
        "hsk4-l14-q3",
        "你下楼扔垃圾的时候，顺便帮我拿一下快递吧。",
        "Nǐ xiàlóu rēng lājī de shíhou, shùnbiàn bāng wǒ ná yíxià kuàidì ba.",
        "Luyện nói câu nhờ vả tự nhiên với phó từ 顺便:",
        ["lājī", "shùnbiàn"],
        "Từ 垃圾 đọc là lājī (hai thanh 1), không đọc là lè sè trong tiếng phổ thông đại lục."
      ),
      speakingShadowing(
        "hsk4-l14-q4",
        "节约用水和用电，可以大大减少环境污染。",
        "Jiéyuē yòngshuǐ hé yòngdiàn, kěyǐ dàdà jiǎnshǎo huánjìng wūrǎn.",
        "Luyện nói câu trình bày giải pháp bảo vệ môi trường:",
        ["jiéyuē", "jiǎnshǎo", "wūrǎn"],
        "Chú ý biến điệu thanh 3 ở 减少 (jiǎnshǎo → jiánshǎo)."
      ),
      speakingShadowing(
        "hsk4-l14-q5",
        "现在骑自行车上班的人数是五年前的两倍。",
        "Xiànzài qí zìxíngchē shàngbān de rénshù shì wǔ nián qián de liǎng bèi.",
        "Luyện nói câu so sánh số liệu với 倍:",
        ["zìxíngchē", "liǎng bèi"],
        "Nhấn mạnh cụm 两倍 (liǎng bèi) để làm nổi bật sự thay đổi tích cực."
      ),
    ],
  },

  // ==========================================
  // BÀI 15: 教育孩子的艺术
  // ==========================================
  {
    id: "hsk4-l15-jiaoyu",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 15,
    title: "Bài 15: Nghệ thuật giáo dục con cái",
    titleZh: "第十五课：教育孩子的艺术",
    titlePinyin: "Dì shíwǔ kè: Jiàoyù háizi de yìshù",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=ijYppvUPgfI",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 15 教育孩子的艺术",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Phó từ 千万 (qiānwàn — nhất định phải / tuyệt đối đừng) dùng trong câu cầu khiến để nhấn mạnh lời dặn dò khẩn thiết (thường đi với 要 hoặc 别/不要).",
      "Bổ ngữ khả năng 来不及 (láibují — không kịp) biểu thị thời gian quá ngắn nên không thể hoàn thành việc gì.",
      "Phân biệt 批评 (phê bình) và 表扬 (khen ngợi), 鼓励 (khích lệ) trong bối cảnh giáo dục trẻ em.",
    ],
    newWords: [
      {
        hanzi: "教育",
        pinyin: "jiàoyù",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "giáo dục, dạy dỗ",
        radical: "攵 (Phộc)",
        strokeCount: 19,
      },
      {
        hanzi: "批评",
        pinyin: "pīpíng",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "phê bình, chỉ trích",
        radical: "扌 (Tài gẩy)",
        strokeCount: 14,
      },
      {
        hanzi: "表扬",
        pinyin: "biǎoyáng",
        partOfSpeech: "Động từ",
        meaningVi: "biểu dương, khen ngợi",
        radical: "衣 (Y)",
        strokeCount: 14,
      },
      {
        hanzi: "鼓励",
        pinyin: "gǔlì",
        partOfSpeech: "Động từ",
        meaningVi: "khích lệ, động viên",
        radical: "鼓 (Cổ)",
        strokeCount: 20,
      },
      {
        hanzi: "骄傲",
        pinyin: "jiāo'ào",
        partOfSpeech: "Tính từ",
        meaningVi: "kiêu ngạo; tự hào",
        radical: "马 (Mã)",
        strokeCount: 21,
      },
      {
        hanzi: "害羞",
        pinyin: "hàixiū",
        partOfSpeech: "Tính từ",
        meaningVi: "xấu hổ, ngại ngùng, rụt rè",
        radical: "宀 (Miên)",
        strokeCount: 20,
      },
      {
        hanzi: "负责",
        pinyin: "fùzé",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "phụ trách, chịu trách nhiệm",
        radical: "贝 (Bối)",
        strokeCount: 14,
      },
      {
        hanzi: "独立",
        pinyin: "dúlì",
        partOfSpeech: "Động từ / Tính từ",
        meaningVi: "độc lập, tự lập",
        radical: "犭 (Khuyển)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Khen ngợi và phê bình đúng cách",
        lines: [
          {
            speaker: "王老师",
            zh: "教育孩子是一门艺术。孩子做得好的时候要及时表扬和鼓励，但也要防止他们变得骄傲。",
            pinyin:
              "Jiàoyù háizi shì yì mén yìshù. Háizi zuò de hǎo de shíhou yào jíshí biǎoyáng hé gǔlì, dàn yě yào fángzhǐ tāmen biànde jiāo'ào.",
            vi: "Giáo dục con cái là một môn nghệ thuật. Khi trẻ làm tốt cần kịp thời khen ngợi và khích lệ, nhưng cũng phải tránh để chúng trở nên kiêu ngạo.",
          },
          {
            speaker: "家长",
            zh: "那如果孩子犯错了呢？我有时候忍不住会大声批评他。",
            pinyin:
              "Nà rúguǒ háizi fàncuò le ne? Wǒ yǒushíhou rěnbuzhù huì dàshēng pīpíng tā.",
            vi: "Vậy nếu con mắc lỗi thì sao ạ? Đôi khi tôi không nhịn được lại lớn tiếng phê bình cháu.",
          },
          {
            speaker: "王老师",
            zh: "千万不要在别人面前批评孩子，那样会伤了他们的自尊心，让孩子变得害羞或不自信。",
            pinyin:
              "Qiānwàn bú yào zài biérén miànqián pīpíng háizi, nàyàng huì shāngle tāmen de zìzūnxīn, ràng háizi biànde hàixiū huò bú zìxìn.",
            vi: "Tuyệt đối đừng phê bình trẻ trước mặt người khác, làm vậy sẽ tổn thương lòng tự trọng của chúng, khiến trẻ trở nên rụt rè hoặc thiếu tự tin.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Rèn luyện tính tự lập cho trẻ",
        lines: [
          {
            speaker: "爸爸",
            zh: "都七点半了，再不叫儿子起床就来不及吃早饭了。",
            pinyin:
              "Dōu qī diǎn bàn le, zài bú jiào érzi qǐchuáng jiù láibují chī zǎofàn le.",
            vi: "Đã 7 rưỡi rồi, không gọi con trai dậy nữa là không kịp ăn sáng đâu.",
          },
          {
            speaker: "妈妈",
            zh: "让他自己负责吧！我们要学会放手，培养孩子独立思考和解决问题的能力。",
            pinyin:
              "Ràng tā zìjǐ fùzé ba! Wǒmen yào xuéhuì fàngshǒu, péiyǎng háizi dúlì sīkǎo hé jiějué wèntí de nénglì.",
            vi: "Để con tự chịu trách nhiệm đi anh! Chúng ta phải học cách buông tay, bồi dưỡng năng lực tư duy độc lập và giải quyết vấn đề cho con.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 千万 (qiānwàn — nhất định / tuyệt đối đừng)",
        formula: "千万 + 要 / 别 / 不要 + Động từ",
        explanationVi:
          "千万 dùng để nhấn mạnh lời khuyên, lời dặn dò hết sức quan trọng, thường dùng trong câu cầu khiến (khuyên nên làm hoặc tuyệt đối tránh làm).",
        examples: [
          {
            zh: "教育孩子时，千万不要失去耐心。",
            pinyin: "Jiàoyù háizi shí, qiānwàn bú yào shīqù nàixīn.",
            vi: "Khi giáo dục con cái, tuyệt đối đừng đánh mất sự kiên nhẫn.",
          },
          {
            zh: "明天有重要考试，你千万要早点儿休息。",
            pinyin: "Míngtiān yǒu zhòngyào kǎoshì, nǐ qiānwàn yào zǎodiǎnr xiūxi.",
            vi: "Ngày mai có kỳ thi quan trọng, con nhất định phải nghỉ ngơi sớm nhé.",
          },
        ],
      },
      {
        titleVi: "Bổ ngữ khả năng 来不及 (láibují — không kịp)",
        formula: "来不及 (+ Động từ / Cụm động từ)",
        explanationVi:
          "来不及 diễn tả do thời gian quá gấp nên không đủ thời gian làm việc gì đó. Có thể đứng một mình hoặc mang theo tân ngữ động từ phía sau.",
        examples: [
          {
            zh: "快点儿走吧，再不走就来不及了。",
            pinyin: "Kuàidiǎnr zǒu ba, zài bù zǒu jiù láibují le.",
            vi: "Đi nhanh lên thôi, không đi nữa là không kịp đâu.",
          },
          {
            zh: "今天起床太晚了，来不及吃早饭了。",
            pinyin: "Jīntiān qǐchuáng tài wǎn le, láibují chī zǎofàn le.",
            vi: "Hôm nay dậy muộn quá, không kịp ăn sáng nữa rồi.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk4-l15-q1",
        "很多父母喜欢拿自己的孩子和别人比较，其实这样做很容易让孩子失去自信。多表扬、多鼓励，孩子才会更勇敢。",
        "Hěn duō fùmǔ xǐhuan ná zìjǐ de háizi hé biérén bǐjiào, qíshí zhèyàng zuò hěn róngyì ràng háizi shīqù zìxìn. Duō biǎoyáng, duō gǔlì, háizi cái huì gèng yǒnggǎn.",
        "Nhiều bậc cha mẹ thích đem con mình so sánh với người khác, thật ra làm vậy rất dễ khiến trẻ mất tự tin. Khen ngợi nhiều, khích lệ nhiều thì trẻ mới dũng cảm hơn.",
        "Theo đoạn văn, cha mẹ nên làm gì để con tự tin và dũng cảm hơn?",
        [
          "Khen ngợi và khích lệ con nhiều hơn, tránh so sánh",
          "Thường xuyên so sánh con với bạn bè",
          "Nghiêm khắc phê bình mỗi khi con làm sai",
          "Làm thay con mọi việc khó khăn",
        ],
        "Khen ngợi và khích lệ con nhiều hơn, tránh so sánh",
        "Đoạn văn nêu rõ: '多表扬、多鼓励，孩子才会更勇敢'."
      ),
      readingComp(
        "hsk4-l15-q2",
        "小女孩刚上台时有点儿害羞，但在老师和同学们的掌声鼓励下，她顺利地完成了演讲。",
        "Xiǎo nǚhái gāng shàngtái shí yǒudiǎnr hàixiū, dàn zài lǎoshī hé tóngxuémen de zhǎngshēng gǔlì xià, tā shùnlì de wánchéngle yǎnjiǎng.",
        "Cô bé lúc mới lên sân khấu hơi ngại ngùng, nhưng dưới sự khích lệ bằng tràng pháo tay của thầy cô và bạn bè, em đã hoàn thành bài diễn thuyết một cách suôn sẻ.",
        "Nhờ đâu cô bé hoàn thành tốt bài diễn thuyết?",
        [
          "Nhờ sự khích lệ bằng tràng pháo tay của thầy cô và bạn bè",
          "Nhờ bố mẹ lên sân khấu đọc cùng",
          "Vì cô bé đã luyện tập ở nhà suốt một năm",
          "Vì bài diễn thuyết rất ngắn",
        ],
        "Nhờ sự khích lệ bằng tràng pháo tay của thầy cô và bạn bè",
        "Chi tiết '在老师和同学们的掌声鼓励下' trả lời trực tiếp câu hỏi."
      ),
      readingComp(
        "hsk4-l15-q3",
        "培养孩子的独立能力非常重要，父母不应该什么事情都替孩子做好，而应该让他们学会为自己的选择负责。",
        "Péiyǎng háizi de dúlì nénglì fēicháng zhòngyào, fùmǔ bù yīnggāi shénme shìqing dōu tì háizi zuòhǎo, ér yīnggāi ràng tāmen xuéhuì wèi zìjǐ de xuǎnzé fùzé.",
        "Bồi dưỡng năng lực độc lập cho trẻ rất quan trọng, cha mẹ không nên việc gì cũng làm thay con, mà nên để trẻ học cách chịu trách nhiệm với lựa chọn của mình.",
        "Đoạn văn khuyên các bậc phụ huynh điều gì?",
        [
          "Để trẻ tự lập và học cách chịu trách nhiệm với lựa chọn của mình",
          "Làm thay con mọi việc để con có thời gian học",
          "Không cho phép trẻ tự đưa ra quyết định",
          "Chỉ quan tâm đến điểm số ở trường của con",
        ],
        "Để trẻ tự lập và học cách chịu trách nhiệm với lựa chọn của mình",
        "Ý chính nằm ở vế sau '而应该让他们学会为自己的选择负责'."
      ),
      readingComp(
        "hsk4-l15-q4",
        "已经八点十分了，电影八点一刻开始，咱们现在打车过去可能也来不及了。",
        "Yǐjīng bā diǎn shí fēn le, diànyǐng bā diǎn yíkè kāishǐ, zánmen xiànzài dǎchē guòqù kěnéng yě láibují le.",
        "Đã 8 giờ 10 phút rồi, phim bắt đầu lúc 8 giờ 15, bây giờ chúng ta bắt taxi qua có lẽ cũng không kịp nữa rồi.",
        "Tình huống hiện tại của hai người là gì?",
        [
          "Rất có thể họ sẽ bị muộn giờ chiếu phim",
          "Họ đã đến rạp chiếu phim từ sớm",
          "Bộ phim đã bị dời sang ngày mai",
          "Họ quyết định đi bộ đến rạp",
        ],
        "Rất có thể họ sẽ bị muộn giờ chiếu phim",
        "Cụm '可能也来不及了' nghĩa là có lẽ cũng không kịp nữa."
      ),
      readingComp(
        "hsk4-l15-q5",
        "你这次考了第一名，我为你感到非常骄傲，但千万不要因此而停止努力。",
        "Nǐ zhè cì kǎole dì-yī míng, wǒ wèi nǐ gǎndào fēicháng jiāo'ào, dàn qiānwàn bú yào yīncǐ ér tíngzhǐ nǔlì.",
        "Lần này con thi đứng nhất, bố/mẹ cảm thấy vô cùng tự hào về con, nhưng tuyệt đối đừng vì thế mà ngừng nỗ lực.",
        "Từ 骄傲 trong câu trên mang nghĩa nào?",
        [
          "Tự hào (nghĩa tích cực)",
          "Kiêu ngạo, tự phụ (nghĩa tiêu cực)",
          "Lo lắng, bất an",
          "Ngại ngùng, xấu hổ",
        ],
        "Tự hào (nghĩa tích cực)",
        "Cấu trúc '为某人感到骄傲' luôn mang nghĩa tích cực là 'cảm thấy tự hào về ai đó'."
      ),
    ],
  },

  // ==========================================
  // BÀI 16: 生活可以更美好
  // ==========================================
  {
    id: "hsk4-l16-shenghuo",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 16,
    title: "Bài 16: Cuộc sống có thể tốt đẹp hơn",
    titleZh: "第十六课：生活可以更美好",
    titlePinyin: "Dì shíliù kè: Shēnghuó kěyǐ gèng měihǎo",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=ixmhUhys76w",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 16 生活可以更美好",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Bổ ngữ khả năng 来得及 (láidejí — kịp, vẫn còn kịp) trái nghĩa với 来不及, biểu thị còn đủ thời gian để làm việc gì.",
      "Cấu trúc 既然……就…… (jìrán... jiù... — đã... thì...) nêu tiền đề/sự thật đã xác định ở vế trước để suy ra kết luận hoặc đề nghị ở vế sau.",
      "Nhóm từ vựng thủ tục và kế hoạch: 博士 (tiến sĩ), 签证 (visa), 报名 (đăng ký), 表格 (biểu mẫu), 护照 (hộ chiếu), 总结 (tổng kết).",
    ],
    newWords: [
      {
        hanzi: "博士",
        pinyin: "bóshì",
        partOfSpeech: "Danh từ",
        meaningVi: "tiến sĩ",
        radical: "十 (Thập)",
        strokeCount: 15,
      },
      {
        hanzi: "签证",
        pinyin: "qiānzhèng",
        partOfSpeech: "Danh từ",
        meaningVi: "thị thực, visa",
        radical: "⺮ (Trúc)",
        strokeCount: 20,
      },
      {
        hanzi: "报名",
        pinyin: "bàomíng",
        partOfSpeech: "Động từ",
        meaningVi: "đăng ký, ghi danh",
        radical: "扌 (Tài gẩy)",
        strokeCount: 13,
      },
      {
        hanzi: "表格",
        pinyin: "biǎogé",
        partOfSpeech: "Danh từ",
        meaningVi: "biểu mẫu, bảng biểu",
        radical: "衣 (Y)",
        strokeCount: 18,
      },
      {
        hanzi: "护照",
        pinyin: "hùzhào",
        partOfSpeech: "Danh từ",
        meaningVi: "hộ chiếu",
        radical: "扌 (Tài gẩy)",
        strokeCount: 20,
      },
      {
        hanzi: "总结",
        pinyin: "zǒngjié",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "tổng kết; bản tổng kết",
        radical: "心 (Tâm)",
        strokeCount: 18,
      },
      {
        hanzi: "计划",
        pinyin: "jìhuà",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "kế hoạch; lên kế hoạch",
        radical: "讠 (Ngôn)",
        strokeCount: 10,
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
        titleVi: "Bài khóa 1: Làm thủ tục đăng ký và xin visa du học",
        lines: [
          {
            speaker: "小夏",
            zh: "你申请读博士的事情办得怎么样了？护照和签证都准备好了吗？",
            pinyin:
              "Nǐ shēnqǐng dú bóshì de shìqing bàn de zěnmeyàng le? Hùzhào hé qiānzhèng dōu zhǔnbèi hǎo le ma?",
            vi: "Chuyện cậu nộp hồ sơ học tiến sĩ làm đến đâu rồi? Hộ chiếu và visa đều chuẩn bị xong chưa?",
          },
          {
            speaker: "李明",
            zh: "报名表格已经交上去了，一切都很顺利，下周去办签证完全来得及。",
            pinyin:
              "Bàomíng biǎogé yǐjīng jiāo shàngqù le, yíqiè dōu hěn shùnlì, xià zhōu qù bàn qiānzhèng wánquán láidejí.",
            vi: "Biểu mẫu đăng ký đã nộp lên rồi, mọi thứ đều rất thuận lợi, tuần sau đi làm visa hoàn toàn kịp.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Lập kế hoạch để cuộc sống tốt đẹp hơn",
        lines: [
          {
            speaker: "经理",
            zh: "既然你已经决定了明年的工作计划，就要认真去执行。",
            pinyin:
              "Jìrán nǐ yǐjīng juédìngle míngnián de gōngzuò jìhuà, jiù yào rènzhēn qù zhíxíng.",
            vi: "Đã quyết định kế hoạch công việc năm tới rồi thì phải nghiêm túc thực hiện.",
          },
          {
            speaker: "员工",
            zh: "好的，我每个月底都会写一份总结，及时调整方向，让工作和生活都更美好。",
            pinyin:
              "Hǎo de, wǒ měi gè yuèdǐ dōu huì xiě yí fèn zǒngjié, jíshí tiáozhěng fāngxiàng, ràng gōngzuò hé shēnghuó dōu gèng měihǎo.",
            vi: "Vâng ạ, cuối mỗi tháng tôi đều sẽ viết một bản tổng kết, kịp thời điều chỉnh phương hướng để công việc và cuộc sống đều tốt đẹp hơn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Bổ ngữ khả năng 来得及 (láidejí — kịp)",
        formula: "来得及 (+ Động từ / Cụm động từ)",
        explanationVi:
          "来得及 biểu thị thời gian còn đủ để hoàn thành một việc nào đó. Thường dùng ở thể khẳng định hoặc nghi vấn (来得及吗？).",
        examples: [
          {
            zh: "别着急，离飞机起飞还有两个小时，肯定来得及。",
            pinyin: "Bié zháojí, lí fēijī qǐfēi hái yǒu liǎng gè xiǎoshí, kěndìng láidejí.",
            vi: "Đừng vội, còn 2 tiếng nữa máy bay mới cất cánh, chắc chắn kịp.",
          },
          {
            zh: "现在去报名还来得及吗？",
            pinyin: "Xiànzài qù bàomíng hái láidejí ma?",
            vi: "Bây giờ đi đăng ký vẫn còn kịp chứ?",
          },
        ],
      },
      {
        titleVi: "Cấu trúc nhân quả suy luận 既然……就……",
        formula: "既然 + Tiền đề đã rõ，(Chủ ngữ) + 就 + Kết luận / Đề nghị",
        explanationVi:
          "Khác với 因为……所以…… (nêu nguyên nhân khách quan), 既然……就…… dựa vào một sự thật đã xảy ra hoặc đã biết trước để đưa ra quyết định, lời khuyên hay suy luận hợp lý.",
        examples: [
          {
            zh: "既然护照已经办好了，我们就快点儿订机票吧。",
            pinyin: "Jìrán hùzhào yǐjīng bànhǎo le, wǒmen jiù kuàidiǎnr dìng jīpiào ba.",
            vi: "Hộ chiếu đã làm xong rồi thì chúng ta mau đặt vé máy bay thôi.",
          },
          {
            zh: "既然你不喜欢这份工作，就换一份更适合自己的吧。",
            pinyin: "Jìrán nǐ bù xǐhuan zhè fèn gōngzuò, jiù huàn yí fèn gèng shìhé zìjǐ de ba.",
            vi: "Đã không thích công việc này thì đổi một công việc phù hợp hơn với mình đi.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk4-l16-q1",
        "护",
        "hù",
        "hộ, bảo vệ (trong 护照 — hộ chiếu)",
        "Chữ 护 gồm bộ Tài gẩy (扌) bên trái và 户 bên phải, 7 nét."
      ),
      writingStroke(
        "hsk4-l16-q2",
        "顺",
        "shùn",
        "thuận (trong 顺利 — thuận lợi)",
        "Chữ 顺 gồm 川 bên trái và bộ Hiệt (页) bên phải, 9 nét."
      ),
      writingOrder(
        "hsk4-l16-q3",
        "Sắp xếp thành câu hoàn chỉnh với cấu trúc 既然……就……:",
        ["既然", "已经报名了", "就", "认真准备吧", "你"],
        "既然你已经报名了就认真准备吧",
        "Jìrán nǐ yǐjīng bàomíng le jiù rènzhēn zhǔnbèi ba",
        "Cấu trúc: 既然 + 你已经报名了 + 就 + 认真准备吧."
      ),
      writingOrder(
        "hsk4-l16-q4",
        "Sắp xếp thành câu hoàn chỉnh với 来得及:",
        ["现在出发", "还", "来得及", "别担心"],
        "别担心现在出发还来得及",
        "Bié dānxīn xiànzài chūfā hái láidejí",
        "Câu trấn an: 别担心，现在出发还来得及."
      ),
      writingTwoSentences(
        "hsk4-l16-q5",
        "计划",
        "jìhuà",
        "kế hoạch / lên kế hoạch",
        "Đặt 2 câu có từ 计划 (ví dụ: 周末的旅行计划 / 计划明年去中国留学)."
      ),
    ],
  },

  // ==========================================
  // BÀI 17: 人与自然
  // ==========================================
  {
    id: "hsk4-l17-renyuziran",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 17,
    title: "Bài 17: Con người và Tự nhiên",
    titleZh: "第十七课：人与自然",
    titlePinyin: "Dì shíqī kè: Rén yǔ zìrán",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Q5kNZAhNnCo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 17 人与自然",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Phó từ 稍微 (shāowēi — hơi, một chút) đứng trước tính từ hoặc động từ, thường kết hợp với 一下 / 一点儿 để làm mềm ngữ khí.",
      "Phó từ 尽量 (jǐnliàng — cố gắng hết sức trong phạm vi có thể) đứng trước động từ để khuyên nhủ hoặc nêu nỗ lực tối đa.",
      "Từ vựng hệ sinh thái: 自然 (tự nhiên), 森林 (rừng rậm), 植物 (thực vật), 动物 (động vật), 气候 (khí hậu), 破坏 (phá hoại).",
    ],
    newWords: [
      {
        hanzi: "自然",
        pinyin: "zìrán",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "tự nhiên, thiên nhiên",
        radical: "自 (Tự)",
        strokeCount: 18,
      },
      {
        hanzi: "森林",
        pinyin: "sēnlín",
        partOfSpeech: "Danh từ",
        meaningVi: "rừng rậm, khu rừng",
        radical: "木 (Mộc)",
        strokeCount: 20,
      },
      {
        hanzi: "植物",
        pinyin: "zhíwù",
        partOfSpeech: "Danh từ",
        meaningVi: "thực vật, cây cối",
        radical: "木 (Mộc)",
        strokeCount: 20,
      },
      {
        hanzi: "动物",
        pinyin: "dòngwù",
        partOfSpeech: "Danh từ",
        meaningVi: "động vật",
        radical: "力 (Lực)",
        strokeCount: 14,
      },
      {
        hanzi: "气候",
        pinyin: "qìhòu",
        partOfSpeech: "Danh từ",
        meaningVi: "khí hậu",
        radical: "气 (Khí)",
        strokeCount: 14,
      },
      {
        hanzi: "空气",
        pinyin: "kōngqì",
        partOfSpeech: "Danh từ",
        meaningVi: "không khí",
        radical: "穴 (Huyệt)",
        strokeCount: 12,
      },
      {
        hanzi: "丰富",
        pinyin: "fēngfù",
        partOfSpeech: "Tính từ / Động từ",
        meaningVi: "phong phú; làm phong phú",
        radical: "丨 (Cổn)",
        strokeCount: 16,
      },
      {
        hanzi: "破坏",
        pinyin: "pòhuài",
        partOfSpeech: "Động từ",
        meaningVi: "phá hoại, hủy hoại",
        radical: "石 (Thạch)",
        strokeCount: 17,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Khám phá khu rừng nguyên sinh",
        lines: [
          {
            speaker: "小周",
            zh: "这片森林里的植物和动物种类真丰富，而且空气也特别新鲜！",
            pinyin:
              "Zhè piàn sēnlín lǐ de zhíwù hé dòngwù zhǒnglèi zhēn fēngfù, érqiě kōngqì yě tèbié xīnxiān!",
            vi: "Các loài thực vật và động vật trong khu rừng này phong phú thật đấy, hơn nữa không khí cũng vô cùng trong lành!",
          },
          {
            speaker: "导游",
            zh: "是的，这里的气候非常湿润。大家拍照的时候尽量小声一点儿，不要破坏自然环境。",
            pinyin:
              "Shì de, zhèlǐ de qìhòu fēicháng shīrùn. Dàjiā pāizhào de shíhou jǐnliàng xiǎoshēng yìdiǎnr, bú yào pòhuài zìrán huánjìng.",
            vi: "Đúng vậy, khí hậu ở đây rất ẩm ướt. Mọi người lúc chụp ảnh cố gắng nhỏ tiếng một chút, đừng phá hoại môi trường tự nhiên.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chung sống hài hòa với thiên nhiên",
        lines: [
          {
            speaker: "教授",
            zh: "如果人类不尊重自然规律，随意破坏森林，气候就会发生严重变化。",
            pinyin:
              "Rúguǒ rénlèi bù zūnzhòng zìrán guīlǜ, suíyì pòhuài sēnlín, qìhòu jiù huì fāshēng yánzhòng biànhuà.",
            vi: "Nếu con người không tôn trọng quy luật tự nhiên, tùy tiện phá hoại rừng, khí hậu sẽ xảy ra biến đổi nghiêm trọng.",
          },
          {
            speaker: "学生",
            zh: "老师，今天的内容稍微有点儿难，下课后您能再稍微解释一下吗？",
            pinyin:
              "Lǎoshī, jīntiān de nèiróng shāowēi yǒudiǎnr nán, xiàkè hòu nín néng zài shāowēi jiěshì yíxià ma?",
            vi: "Thưa thầy, nội dung hôm nay hơi khó một chút, sau giờ học thầy có thể giải thích lại một chút được không ạ?",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ chỉ mức độ 稍微 (shāowēi — hơi, một chút)",
        formula: "稍微 + Tính từ / Động từ + 一点儿 / 一下",
        explanationVi:
          "稍微 biểu thị mức độ nhẹ hoặc số lượng ít, thường đi kèm với 一点儿, 一些 hoặc 一下 ở cuối câu để câu nói tự nhiên và lịch sự hơn.",
        examples: [
          {
            zh: "这里的气候比北方稍微暖和一点儿。",
            pinyin: "Zhèlǐ de qìhòu bǐ běifāng shāowēi nuǎnhuo yìdiǎnr.",
            vi: "Khí hậu ở đây hơi ấm hơn miền Bắc một chút.",
          },
          {
            zh: "你稍微等我一下，我马上就好。",
            pinyin: "Nǐ shāowēi děng wǒ yíxià, wǒ mǎshàng jiù hǎo.",
            vi: "Bạn đợi mình một chút nhé, mình xong ngay đây.",
          },
        ],
      },
      {
        titleVi: "Phó từ 尽量 (jǐnliàng — cố gắng hết sức)",
        formula: "尽量 + Động từ / Tính từ",
        explanationVi:
          "尽量 (đọc là jǐnliàng) biểu thị nỗ lực đạt đến mức cao nhất trong khả năng cho phép.",
        examples: [
          {
            zh: "我们应该尽量保护野生动物和植物。",
            pinyin: "Wǒmen yīnggāi jǐnliàng bǎohù yěshēng dòngwù hé zhíwù.",
            vi: "Chúng ta nên cố gắng hết sức bảo vệ động thực vật hoang dã.",
          },
          {
            zh: "周末我尽量早点儿起床去公园呼吸新鲜空气。",
            pinyin: "Zhōumò wǒ jǐnliàng zǎodiǎnr qǐchuáng qù gōngyuán hūxī xīnxiān kōngqì.",
            vi: "Cuối tuần tôi cố gắng dậy sớm chút ra công viên hít thở không khí trong lành.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk4-l17-q1",
        "这片森林里的植物种类非常丰富，空气也很新鲜。",
        "Zhè piàn sēnlín lǐ de zhíwù zhǒnglèi fēicháng fēngfù, kōngqì yě hěn xīnxiān.",
        "Nghe câu trên và chọn đặc điểm đúng của khu rừng này:",
        [
          "Thực vật rất phong phú và không khí trong lành",
          "Rừng đã bị chặt phá gần hết",
          "Không khí ở đây rất khô và nóng",
          "Trong rừng không có loài thực vật nào",
        ],
        "Thực vật rất phong phú và không khí trong lành",
        "Từ khóa nghe được: 植物种类非常丰富 và 空气也很新鲜."
      ),
      listeningMcq(
        "hsk4-l17-q2",
        "人类如果继续破坏自然环境，最终受到伤害的还是人类自己。",
        "Rénlèi rúguǒ jìxù pòhuài zìrán huánjìng, zuìzhōng shòudào shānghài de háishi rénlèi zìjǐ.",
        "Nghe câu trên: Tác giả muốn cảnh báo điều gì?",
        [
          "Nếu tiếp tục phá hoại tự nhiên, chính con người sẽ chịu tổn hại",
          "Tự nhiên có thể tự phục hồi rất nhanh",
          "Con người không cần quan tâm đến biến đổi khí hậu",
          "Động vật hoang dã đang tăng lên nhanh chóng",
        ],
        "Nếu tiếp tục phá hoại tự nhiên, chính con người sẽ chịu tổn hại",
        "Cụm '最终受到伤害的还是人类自己' nêu rõ hậu quả đối với con người."
      ),
      listeningFill(
        "hsk4-l17-q3",
        "云南的气候非常舒服，四季如春。",
        "云南的____非常舒服，四季如春。",
        "Yúnnán de qìhòu fēicháng shūfu, sìjì rú chūn.",
        "Nghe và điền từ còn thiếu (2 chữ Hán, nghĩa là 'khí hậu'):",
        "气候",
        "气候 (qìhòu) nghĩa là khí hậu."
      ),
      listeningFill(
        "hsk4-l17-q4",
        "请大家稍微安静一点儿，别吓跑了小动物。",
        "请大家____安静一点儿，别吓跑了小动物。",
        "Qǐng dàjiā shāowēi ānjìng yìdiǎnr, bié xiàpǎole xiǎo dòngwù.",
        "Nghe và điền phó từ còn thiếu (2 chữ Hán, nghĩa là 'hơi, một chút'):",
        "稍微",
        "稍微 (shāowēi) kết hợp với 一点儿 làm mềm lời nhắc nhở."
      ),
      listeningDialogue(
        "hsk4-l17-q5",
        "男：你周末有什么打算？女：我想去郊区的森林公园走走，那儿空气好，还能亲近大自然。",
        "Nán: Nǐ zhōumò yǒu shénme dǎsuàn? Nǚ: Wǒ xiǎng qù jiāoqū de sēnlín gōngyuán zǒuzou, nàr kōngqì hǎo, hái néng qīnjìn dàzìrán.",
        "Nghe đoạn hội thoại: Tại sao người nữ muốn đến công viên rừng ở ngoại ô?",
        [
          "Vì không khí ở đó trong lành và có thể gần gũi thiên nhiên",
          "Vì ở đó có trung tâm thương mại lớn",
          "Vì nhà bạn thân cô ấy ở ngay cạnh đó",
          "Vì cô ấy phải đi công tác ở ngoại ô",
        ],
        "Vì không khí ở đó trong lành và có thể gần gũi thiên nhiên",
        "Người nữ giải thích: '那儿空气好，还能亲近大自然'."
      ),
    ],
  },

  // ==========================================
  // BÀI 18: 科技与世界
  // ==========================================
  {
    id: "hsk4-l18-keji",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 18,
    title: "Bài 18: Công nghệ và Thế giới",
    titleZh: "第十八课：科技与世界",
    titlePinyin: "Dì shíbā kè: Kējì yǔ shìjiè",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=6mf6jZ3DOMc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 18 科技与世界",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc tăng tiến 不仅……而且…… (bùjǐn... érqiě... — không những... mà còn...) nhấn mạnh hai tầng ý nghĩa ngày càng sâu hơn.",
      "Giới từ 随着 (suízhe — cùng với, theo đà...) dùng ở đầu câu để chỉ một sự thay đổi làm điều kiện/bối cảnh dẫn đến sự thay đổi khác ở vế sau.",
      "Từ vựng chủ đề công nghệ: 科技 (công nghệ), 发展 (phát triển), 信息 (thông tin), 交流 (giao lưu), 速度 (tốc độ), 距离 (khoảng cách).",
    ],
    newWords: [
      {
        hanzi: "科技",
        pinyin: "kējì",
        partOfSpeech: "Danh từ",
        meaningVi: "khoa học kỹ thuật, công nghệ",
        radical: "禾 (Hòa)",
        strokeCount: 16,
      },
      {
        hanzi: "发展",
        pinyin: "fāzhǎn",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "phát triển; sự phát triển",
        radical: "又 (Hựu)",
        strokeCount: 15,
      },
      {
        hanzi: "方便",
        pinyin: "fāngbiàn",
        partOfSpeech: "Tính từ",
        meaningVi: "thuận tiện, tiện lợi",
        radical: "方 (Phương)",
        strokeCount: 13,
      },
      {
        hanzi: "信息",
        pinyin: "xìnxī",
        partOfSpeech: "Danh từ",
        meaningVi: "thông tin, tin tức",
        radical: "亻 (Nhân đứng)",
        strokeCount: 19,
      },
      {
        hanzi: "交流",
        pinyin: "jiāoliú",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "giao lưu, trao đổi",
        radical: "亠 (Đầu)",
        strokeCount: 16,
      },
      {
        hanzi: "速度",
        pinyin: "sùdù",
        partOfSpeech: "Danh từ",
        meaningVi: "tốc độ",
        radical: "辶 (Xước)",
        strokeCount: 19,
      },
      {
        hanzi: "距离",
        pinyin: "jùlí",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "khoảng cách; cách",
        radical: "足 (Túc)",
        strokeCount: 21,
      },
      {
        hanzi: "影响",
        pinyin: "yǐngxiǎng",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "ảnh hưởng; sự ảnh hưởng",
        radical: "彡 (Sam)",
        strokeCount: 24,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Công nghệ rút ngắn khoảng cách giữa con người",
        lines: [
          {
            speaker: "小王",
            zh: "随着科技的发展，现在高铁的速度越来越快，手机支付也越来越方便了。",
            pinyin:
              "Suízhe kējì de fāzhǎn, xiànzài gāotiě de sùdù yuèláiyuè kuài, shǒujī zhīfù yě yuèláiyuè fāngbiàn le.",
            vi: "Cùng với sự phát triển của công nghệ, hiện nay tốc độ tàu cao tốc ngày càng nhanh, thanh toán điện thoại cũng ngày càng tiện lợi.",
          },
          {
            speaker: "小李",
            zh: "是啊，互联网不仅加快了信息传播的速度，而且拉近了人与人之间的距离。",
            pinyin:
              "Shì a, hùliánwǎng bùjǐn jiākuàile xìnxī chuánbō de sùdù, érqiě lājìnle rén yǔ rén zhījiān de jùlí.",
            vi: "Đúng vậy, Internet không những đẩy nhanh tốc độ lan truyền thông tin, mà còn kéo gần khoảng cách giữa người với người.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hai mặt ảnh hưởng của công nghệ",
        lines: [
          {
            speaker: "记者",
            zh: "您认为智能手机对年轻人的生活有什么影响？",
            pinyin:
              "Nín rènwéi zhìnéng shǒujī duì niánqīngrén de shēnghuó yǒu shénme yǐngxiǎng?",
            vi: "Ông/bà cho rằng điện thoại thông minh có ảnh hưởng gì đến cuộc sống của người trẻ?",
          },
          {
            speaker: "专家",
            zh: "虽然手机让交流更方便，但过度使用也会影响健康，大家应该合理安排时间。",
            pinyin:
              "Suīrán shǒujī ràng jiāoliú gèng fāngbiàn, dàn guòdù shǐyòng yě huì yǐngxiǎng jiànkāng, dàjiā yīnggāi hélǐ ānpái shíjiān.",
            vi: "Tuy điện thoại giúp giao lưu tiện lợi hơn, nhưng sử dụng quá mức cũng sẽ ảnh hưởng sức khỏe, mọi người nên sắp xếp thời gian hợp lý.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Giới từ 随着 (suízhe — cùng với, theo đà)",
        formula: "随着 + Danh từ / Cụm động từ (sự biến đổi)，Chủ ngữ + Biến đổi tương ứng",
        explanationVi:
          "随着 đặt ở đầu câu, biểu thị một sự việc thay đổi kéo theo sự thay đổi tương ứng của sự việc khác.",
        examples: [
          {
            zh: "随着科技的发展，人们的生活方式发生了很大变化。",
            pinyin: "Suízhe kējì de fāzhǎn, rénmen de shēnghuó fāngshì fāshēngle hěn dà biànhuà.",
            vi: "Cùng với sự phát triển của công nghệ, lối sống của con người đã có nhiều thay đổi lớn.",
          },
          {
            zh: "随着时间的推移，我们的感情越来越深。",
            pinyin: "Suízhe shíjiān de tuīyí, wǒmen de gǎnqíng yuèláiyuè shēn.",
            vi: "Theo thời gian trôi qua, tình cảm của chúng tôi ngày càng sâu đậm.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc tăng tiến 不仅……而且……",
        formula: "Chủ ngữ + 不仅 + A，而且 + B (hoặc 不仅 + S1 + A，而且 + S2 + B)",
        explanationVi:
          "Khi hai vế cùng chủ ngữ, 不仅 đứng sau chủ ngữ; khi khác chủ ngữ, 不仅 đứng trước chủ ngữ thứ nhất.",
        examples: [
          {
            zh: "这部手机不仅价格合理，而且功能非常齐全。",
            pinyin: "Zhè bù shǒujī bùjǐn jiàgé hélǐ, érqiě gōngnéng fēicháng qíquán.",
            vi: "Chiếc điện thoại này không những giá cả hợp lý mà tính năng còn rất đầy đủ.",
          },
          {
            zh: "高铁不仅速度快，而且坐起来非常舒服。",
            pinyin: "Gāotiě bùjǐn sùdù kuài, érqiě zuò qǐlái fēicháng shūfu.",
            vi: "Tàu cao tốc không những tốc độ nhanh mà ngồi cũng rất thoải mái.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk4-l18-q1",
        "随着科技的发展，我们的生活变得越来越方便。",
        "Suízhe kējì de fāzhǎn, wǒmen de shēnghuó biànde yuèláiyuè fāngbiàn.",
        "Luyện đọc trôi chảy câu mở đầu chủ đề công nghệ với 随着:",
        ["suízhe", "kējì", "fāzhǎn"],
        "Chú ý phát âm rõ âm đầu lưỡi thẳng ở 随着 (suízhe) và 发展 (fāzhǎn)."
      ),
      speakingShadowing(
        "hsk4-l18-q2",
        "互联网不仅加快了信息传播的速度，而且方便了人们的交流。",
        "Hùliánwǎng bùjǐn jiākuàile xìnxī chuánbō de sùdù, érqiě fāngbiànle rénmen de jiāoliú.",
        "Luyện nói câu ghép tăng tiến với 不仅……而且……:",
        ["xìnxī", "sùdù", "jiāoliú"],
        "Ngắt nhịp tự nhiên ở dấu phẩy, nhấn nhẹ vào 不仅 và 而且."
      ),
      speakingShadowing(
        "hsk4-l18-q3",
        "现代科技拉近了世界各地人们之间的距离。",
        "Xiàndài kējì lājìnle shìjiè gèdì rénmen zhījiān de jùlí.",
        "Luyện đọc câu diễn đạt ý nghĩa kết nối toàn cầu:",
        ["shìjiè", "jùlí"],
        "Phát âm rõ 距离 (jùlí — thanh 4 + thanh 2)."
      ),
      speakingShadowing(
        "hsk4-l18-q4",
        "长时间看手机会对眼睛和睡眠产生不好的影响。",
        "Cháng shíjiān kàn shǒujī huì duì yǎnjing hé shuìmián chǎnshēng bù hǎo de yǐngxiǎng.",
        "Luyện nói câu nêu tác hại của việc dùng điện thoại quá lâu:",
        ["yǎnjing", "yǐngxiǎng"],
        "Chú ý biến điệu thanh 3 ở 影响 (yǐngxiǎng → yíngxiǎng)."
      ),
      speakingShadowing(
        "hsk4-l18-q5",
        "科技改变了世界，也改变了我们学习和工作的方式。",
        "Kējì gǎibiànle shìjiè, yě gǎibiànle wǒmen xuéxí hé gōngzuò de fāngshì.",
        "Luyện đọc câu tổng kết chủ đề Công nghệ và Thế giới:",
        ["gǎibiàn", "fāngshì"],
        "Đọc đều nhịp hai vế song song để tạo ngữ điệu thuyết trình tự tin."
      ),
    ],
  },

  // ==========================================
  // BÀI 19: 生活的味道
  // ==========================================
  {
    id: "hsk4-l19-shenghuo",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 19,
    title: "Bài 19: Hương vị cuộc sống",
    titleZh: "第十九课：生活的味道",
    titlePinyin: "Dì shíjiǔ kè: Shēnghuó de wèidao",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=D4mn6YL9ZDg",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 19 生活的味道",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Cấu trúc giả thiết nhượng bộ 即使……也…… (jíshǐ... yě... — cho dù... cũng...) nêu tình huống giả định cực đoan nhưng kết quả vẫn không thay đổi.",
      "Phó từ 究竟 (jiūjìng — rốt cuộc, suy cho cùng) dùng trong câu hỏi để truy vấn đến tận cùng bản chất sự việc.",
      "Thành ngữ 酸甜苦辣 (suān tián kǔ là — chua cay mặn ngọt) ẩn dụ cho đủ mọi cung bậc vui buồn, thăng trầm trong cuộc sống.",
    ],
    newWords: [
      {
        hanzi: "味道",
        pinyin: "wèidao",
        partOfSpeech: "Danh từ",
        meaningVi: "mùi vị, hương vị",
        radical: "口 (Khẩu)",
        strokeCount: 20,
      },
      {
        hanzi: "酸",
        pinyin: "suān",
        partOfSpeech: "Tính từ",
        meaningVi: "chua; đau nhức, mỏi",
        radical: "酉 (Dậu)",
        strokeCount: 14,
      },
      {
        hanzi: "甜",
        pinyin: "tián",
        partOfSpeech: "Tính từ",
        meaningVi: "ngọt, ngọt ngào",
        radical: "甘 (Cam)",
        strokeCount: 11,
      },
      {
        hanzi: "苦",
        pinyin: "kǔ",
        partOfSpeech: "Tính từ",
        meaningVi: "đắng; khổ cực",
        radical: "艹 (Thảo đầu)",
        strokeCount: 8,
      },
      {
        hanzi: "辣",
        pinyin: "là",
        partOfSpeech: "Tính từ",
        meaningVi: "cay",
        radical: "辛 (Tân)",
        strokeCount: 14,
      },
      {
        hanzi: "咸",
        pinyin: "xián",
        partOfSpeech: "Tính từ",
        meaningVi: "mặn",
        radical: "口 (Khẩu)",
        strokeCount: 9,
      },
      {
        hanzi: "幸福",
        pinyin: "xìngfú",
        partOfSpeech: "Tính từ / Danh từ",
        meaningVi: "hạnh phúc",
        radical: "干 (Can)",
        strokeCount: 21,
      },
      {
        hanzi: "感受",
        pinyin: "gǎnshòu",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "cảm nhận; cảm giác",
        radical: "心 (Tâm)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Bàn về khẩu vị ẩm thực và hương vị cuộc sống",
        lines: [
          {
            speaker: "小陈",
            zh: "中国不同地方的菜味道不一样，四川菜偏辣，上海菜偏甜，北方菜稍微咸一点儿。",
            pinyin:
              "Zhōngguó bùtóng dìfang de cài wèidao bù yíyàng, Sìchuān cài piān là, Shànghǎi cài piān tián, běifāng cài shāowēi xián yìdiǎnr.",
            vi: "Món ăn ở các vùng khác nhau của Trung Quốc có hương vị khác nhau, món Tứ Xuyên thiên cay, món Thượng Hải thiên ngọt, món miền Bắc hơi mặn một chút.",
          },
          {
            speaker: "小赵",
            zh: "其实生活也像做菜一样，酸甜苦辣各种味道都有，尝过之后才更有意思。",
            pinyin:
              "Qíshí shēnghuó yě xiàng zuòcài yíyàng, suān tián kǔ là gèzhǒng wèidao dōu yǒu, chángguo zhīhòu cái gèng yǒuyìsi.",
            vi: "Thật ra cuộc sống cũng giống như nấu ăn vậy, chua ngọt đắng cay đủ cả các vị, nếm trải qua rồi mới thấy càng thú vị.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hạnh phúc rốt cuộc là gì?",
        lines: [
          {
            speaker: "主持人",
            zh: "很多人都在问：幸福究竟是什么？",
            pinyin: "Hěn duō rén dōu zài wèn: Xìngfú jiūjìng shì shénme?",
            vi: "Rất nhiều người đều đang hỏi: Hạnh phúc rốt cuộc là gì?",
          },
          {
            speaker: "作家",
            zh: "幸福其实是一种内心的感受。即使日子很普通，只要和家人在一起，也能感受到满满的幸福。",
            pinyin:
              "Xìngfú qíshí shì yì zhǒng nèixīn de gǎnshòu. Jíshǐ rìzi hěn pǔtōng, zhǐyào hé jiārén zài yìqǐ, yě néng gǎnshòudào mǎnmǎn de xìngfú.",
            vi: "Hạnh phúc thật ra là một loại cảm nhận từ nội tâm. Cho dù ngày tháng rất bình dị, chỉ cần ở bên gia đình thì cũng có thể cảm nhận được niềm hạnh phúc trọn vẹn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc giả thiết nhượng bộ 即使……也……",
        formula: "即使 + Tình huống giả định，Chủ ngữ + 也 + Kết quả không đổi",
        explanationVi:
          "即使 (cho dù) đưa ra một giả thiết chưa xảy ra hoặc mang tính cực đoan, vế sau dùng 也 để khẳng định kết quả vẫn không thay đổi.",
        examples: [
          {
            zh: "即使生活中有苦有累，我们也要保持乐观。",
            pinyin: "Jíshǐ shēnghuó zhōng yǒu kǔ yǒu lèi, wǒmen yě yào bǎochí lèguān.",
            vi: "Cho dù trong cuộc sống có đắng cay mệt mỏi, chúng ta cũng phải giữ sự lạc quan.",
          },
          {
            zh: "即使明天下大雨，我也要按时去参加活动。",
            pinyin: "Jíshǐ míngtiān xià dàyǔ, wǒ yě yào ànshí qù cānjiā huódòng.",
            vi: "Cho dù ngày mai trời mưa to, tôi cũng sẽ đến tham gia hoạt động đúng giờ.",
          },
        ],
      },
      {
        titleVi: "Phó từ nghi vấn 究竟 (jiūjìng — rốt cuộc)",
        formula: "Chủ ngữ + 究竟 + Đại từ nghi vấn / Câu hỏi chính phản？",
        explanationVi:
          "究竟 dùng trong câu hỏi (trừ câu hỏi dùng 吗) để nhấn mạnh sự tò mò, muốn biết rõ nguyên nhân hoặc kết quả cuối cùng.",
        examples: [
          {
            zh: "这道菜里究竟放了什么调料，味道这么特别？",
            pinyin: "Zhè dào cài lǐ jiūjìng fàngle shénme tiáoliào, wèidao zhème tèbié?",
            vi: "Trong món ăn này rốt cuộc đã cho gia vị gì mà hương vị đặc biệt thế?",
          },
          {
            zh: "你究竟喜不喜欢这份工作？",
            pinyin: "Nǐ jiūjìng xǐ bu xǐhuan zhè fèn gōngzuò?",
            vi: "Rốt cuộc bạn có thích công việc này hay không?",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk4-l19-q1",
        "人们常说生活有酸甜苦辣四种味道。没有经历过“苦”，就很难真正体会到“甜”有多么珍贵。",
        "Rénmen cháng shuō shēnghuó yǒu suān tián kǔ là sì zhǒng wèidao. Méiyǒu jīnglìguo 'kǔ', jiù hěn nán zhēnzhèng tǐhuìdào 'tián' yǒu duōme zhēnguì.",
        "Người ta thường nói cuộc sống có bốn vị chua ngọt đắng cay. Chưa từng trải qua 'đắng' thì rất khó cảm nhận trọn vẹn vị 'ngọt' quý giá nhường nào.",
        "Đoạn văn trên muốn truyền đạt triết lý gì?",
        [
          "Trải qua khó khăn giúp ta trân trọng niềm vui và hạnh phúc hơn",
          "Cuộc sống chỉ nên có vị ngọt, không nên có vị đắng",
          "Nấu ăn cần phải có đủ bốn loại gia vị",
          "Người trẻ không thích ăn đồ ăn có vị đắng",
        ],
        "Trải qua khó khăn giúp ta trân trọng niềm vui và hạnh phúc hơn",
        "Câu thứ hai giải thích rõ mối quan hệ giữa 苦 (khó khăn) và 甜 (hạnh phúc)."
      ),
      readingComp(
        "hsk4-l19-q2",
        "我妈妈做的红烧肉甜而不腻，每次回家吃到这道菜，我都能感受到家的温暖和幸福。",
        "Wǒ māma zuò de hóngshāoròu tián ér bú nì, měi cì huíjiā chīdào zhè dào cài, wǒ dōu néng gǎnshòudào jiā de wēnnuǎn hé xìngfú.",
        "Món thịt kho tàu mẹ tôi nấu ngọt mà không ngấy, mỗi lần về nhà ăn món này tôi đều cảm nhận được sự ấm áp và hạnh phúc của gia đình.",
        "Món thịt kho tàu của mẹ mang lại cho tác giả cảm giác gì?",
        [
          "Sự ấm áp và hạnh phúc của gia đình",
          "Cảm giác quá mặn và cay",
          "Nỗi nhớ bạn bè thời đại học",
          "Cảm giác mệt mỏi khi đi làm xa",
        ],
        "Sự ấm áp và hạnh phúc của gia đình",
        "Chi tiết '感受到家的温暖和幸福' nêu trực tiếp cảm nhận của tác giả."
      ),
      readingComp(
        "hsk4-l19-q3",
        "即使工作再忙，也要记得按时吃饭、好好休息，因为健康才是最大的幸福。",
        "Jíshǐ gōngzuò zài máng, yě yào jìde ànshí chīfàn, hǎohāo xiūxi, yīnwèi jiànkāng cái shì zuì dà de xìngfú.",
        "Cho dù công việc có bận đến mấy, cũng phải nhớ ăn uống đúng giờ, nghỉ ngơi đầy đủ, vì sức khỏe mới là hạnh phúc lớn nhất.",
        "Theo đoạn văn, điều gì là hạnh phúc lớn nhất?",
        [
          "Sức khỏe",
          "Kiếm được thật nhiều tiền",
          "Làm việc thâu đêm suốt sáng",
          "Đi du lịch nước ngoài",
        ],
        "Sức khỏe",
        "Vế cuối khẳng định: '因为健康才是最大的幸福'."
      ),
      readingComp(
        "hsk4-l19-q4",
        "小李刚到重庆时完全吃不了辣，但生活了两年以后，现在无辣不欢，特别喜欢吃火锅。",
        "Xiǎo Lǐ gāng dào Chóngqìng shí wánquán chībuliǎo là, dàn shēnghuóle liǎng nián yǐhòu, xiànzài wúlà bùhuān, tèbié xǐhuan chī huǒguō.",
        "Tiểu Lý lúc mới đến Trùng Khánh hoàn toàn không ăn được cay, nhưng sau hai năm sinh sống, giờ bữa nào cũng phải có cay, đặc biệt thích ăn lẩu.",
        "Khẩu vị của Tiểu Lý đã thay đổi như thế nào?",
        [
          "Từ không ăn được cay chuyển sang rất thích ăn cay",
          "Từ thích ăn cay chuyển sang chỉ ăn đồ ngọt",
          "Vẫn hoàn toàn không ăn được lẩu",
          "Chỉ thích ăn đồ ăn mặn",
        ],
        "Từ không ăn được cay chuyển sang rất thích ăn cay",
        "Ban đầu '完全吃不了辣', sau 2 năm trở thành '无辣不欢' (không cay không vui)."
      ),
      readingComp(
        "hsk4-l19-q5",
        "大家都在讨论这件奇怪的事情，谁也不知道究竟发生了什么。",
        "Dàjiā dōu zài tǎolùn zhè jiàn qíguài de shìqing, shéi yě bù zhīdào jiūjìng fāshēngle shénme.",
        "Mọi người đều đang bàn tán về chuyện kỳ lạ này, chẳng ai biết rốt cuộc đã xảy ra chuyện gì.",
        "Từ 究竟 trong câu trên có tác dụng gì?",
        [
          "Nhấn mạnh sự tò mò muốn biết rõ sự thật cuối cùng",
          "Biểu thị hành động xảy ra rất nhanh",
          "Nối hai mệnh đề đối lập nhau",
          "Chỉ thời gian trong tương lai",
        ],
        "Nhấn mạnh sự tò mò muốn biết rõ sự thật cuối cùng",
        "究竟 nghĩa là 'rốt cuộc', dùng để truy vấn bản chất sự việc."
      ),
    ],
  },

  // ==========================================
  // BÀI 20: 路上的风景
  // ==========================================
  {
    id: "hsk4-l20-fengjing",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    lessonNumber: 20,
    title: "Bài 20: Phong cảnh trên đường đi",
    titleZh: "第二十课：路上的风景",
    titlePinyin: "Dì èrshí kè: Lùshang de fēngjǐng",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=avWUZGfoqB4",
    defaultSearchQuery: "Giáo trình chuẩn HSK 4 Bài 20 路上的风景",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-1-grammar",
      "res-6-exercises",
    ],
    grammarNotesVi: [
      "Phó từ 恐怕 (kǒngpà — e rằng, sợ rằng) dùng để biểu thị sự suy đoán kèm theo lo ngại hoặc từ chối một cách lịch sự.",
      "Cấu trúc 不管……都…… (bùguǎn... dōu... — bất kể... đều...) dùng tương tự 无论……都…… nhưng mang sắc thái khẩu ngữ tự nhiên hơn.",
      "Thông điệp kết thúc HSK 4: 目的地很重要，但路上的风景和努力的过程同样值得珍惜 (Đích đến rất quan trọng, nhưng phong cảnh trên đường và quá trình nỗ lực cũng đáng trân trọng như vậy).",
    ],
    newWords: [
      {
        hanzi: "风景",
        pinyin: "fēngjǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "phong cảnh, cảnh đẹp",
        radical: "风 (Phong)",
        strokeCount: 16,
      },
      {
        hanzi: "旅游",
        pinyin: "lǚyóu",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "du lịch",
        radical: "方 (Phương)",
        strokeCount: 22,
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
        hanzi: "照片",
        pinyin: "zhàopiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "bức ảnh, tấm hình",
        radical: "灬 (Hỏa)",
        strokeCount: 17,
      },
      {
        hanzi: "地图",
        pinyin: "dìtú",
        partOfSpeech: "Danh từ",
        meaningVi: "bản đồ",
        radical: "土 (Thổ)",
        strokeCount: 14,
      },
      {
        hanzi: "目的地",
        pinyin: "mùdìdì",
        partOfSpeech: "Danh từ",
        meaningVi: "đích đến, điểm đến",
        radical: "目 (Mục)",
        strokeCount: 19,
      },
      {
        hanzi: "过程",
        pinyin: "guòchéng",
        partOfSpeech: "Danh từ",
        meaningVi: "quá trình",
        radical: "辶 (Xước)",
        strokeCount: 18,
      },
      {
        hanzi: "恐怕",
        pinyin: "kǒngpà",
        partOfSpeech: "Phó từ",
        meaningVi: "e rằng, sợ rằng, có lẽ",
        radical: "心 (Tâm)",
        strokeCount: 18,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chuẩn bị hành trình du lịch",
        lines: [
          {
            speaker: "大卫",
            zh: "快看地图，前面堵车了，我们下午三点前恐怕到不了目的地了。",
            pinyin:
              "Kuài kàn dìtú, qiánmiàn dǔchē le, wǒmen xiàwǔ sān diǎn qián kǒngpà dàobuliǎo mùdìdì le.",
            vi: "Mau xem bản đồ đi, phía trước tắc đường rồi, e rằng trước 3 giờ chiều chúng ta không đến được điểm đến đâu.",
          },
          {
            speaker: "林娜",
            zh: "没关系，你看窗外的风景多美啊！我们正好可以拍几张照片留作纪念。",
            pinyin:
              "Méi guānxi, nǐ kàn chuāngwài de fēngjǐng duō měi a! Wǒmen zhènghǎo kěyǐ pāi jǐ zhāng zhàopiàn liúzuò jìniàn.",
            vi: "Không sao đâu, cậu nhìn phong cảnh ngoài cửa sổ đẹp biết bao! Nhân tiện chúng ta có thể chụp vài tấm ảnh làm kỷ niệm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trân trọng phong cảnh trên đường đời",
        lines: [
          {
            speaker: "老师",
            zh: "学完HSK四级，大家对汉语和中国文化一定有了更深的印象。你们有什么感想？",
            pinyin:
              "Xuéwán HSK sìjí, dàjiā duì Hànyǔ hé Zhōngguó wénhuà yídìng yǒule gèng shēn de yìnxiàng. Nǐmen yǒu shénme gǎnxiǎng?",
            vi: "Học xong HSK 4 rồi, mọi người chắc hẳn đã có ấn tượng sâu sắc hơn về tiếng Trung và văn hóa Trung Quốc. Các em có cảm nghĩ gì không?",
          },
          {
            speaker: "学生",
            zh: "学习就像旅游一样，不管目的地有多远，欣赏路上的风景、享受努力的过程，都是最值得珍惜的。",
            pinyin:
              "Xuéxí jiù xiàng lǚyóu yíyàng, bùguǎn mùdìdì yǒu duō yuǎn, xīnshǎng lùshang de fēngjǐng, xiǎngshòu nǔlì de guòchéng, dōu shì zuì zhídé zhēnxī de.",
            vi: "Học tập cũng giống như đi du lịch vậy, bất kể đích đến xa bao nhiêu, ngắm nhìn phong cảnh trên đường và tận hưởng quá trình nỗ lực đều là những điều đáng trân trọng nhất.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 恐怕 (kǒngpà — e rằng, sợ rằng)",
        formula: "(Chủ ngữ) + 恐怕 + Phán đoán / Sự việc không mong muốn",
        explanationVi:
          "恐怕 biểu thị sự suy đoán kèm theo tâm lý lo ngại (e rằng sẽ xảy ra điều không hay), hoặc dùng để từ chối/đưa ra ý kiến khác một cách uyển chuyển, lịch sự.",
        examples: [
          {
            zh: "天阴了，今天下午恐怕要下雨。",
            pinyin: "Tiān yīn le, jīntiān xiàwǔ kǒngpà yào xiàyǔ.",
            vi: "Trời âm u rồi, chiều nay e rằng sắp mưa.",
          },
          {
            zh: "这件事恐怕没你想的那么简单。",
            pinyin: "Zhè jiàn shì kǒngpà méi nǐ xiǎng de nàme jiǎndān.",
            vi: "Chuyện này e rằng không đơn giản như bạn nghĩ đâu.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc điều kiện khẩu ngữ 不管……都/也……",
        formula: "不管 + (Đại từ nghi vấn / A 还是 B) + 都/也 + Kết quả",
        explanationVi:
          "不管 có nghĩa tương đương 无论 (bất kể, dù cho), nhưng thường dùng nhiều hơn trong giao tiếp hàng ngày.",
        examples: [
          {
            zh: "不管遇到什么困难，我都不会停下前进的脚步。",
            pinyin: "Bùguǎn yùdào shénme kùnnan, wǒ dōu bú huì tíngxià qiánjìn de jiǎobù.",
            vi: "Bất kể gặp khó khăn gì, tôi cũng sẽ không dừng bước tiến về phía trước.",
          },
          {
            zh: "不管结果怎么样，努力的过程最重要。",
            pinyin: "Bùguǎn jiéguǒ zěnmeyàng, nǔlì de guòchéng zuì zhòngyào.",
            vi: "Bất kể kết quả ra sao, quá trình nỗ lực là quan trọng nhất.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk4-l20-q1",
        "景",
        "jǐng",
        "cảnh (trong 风景 — phong cảnh)",
        "Chữ 景 gồm bộ Nhật (日) ở trên và chữ 京 ở dưới, 12 nét."
      ),
      writingStroke(
        "hsk4-l20-q2",
        "图",
        "tú",
        "đồ, hình vẽ (trong 地图 — bản đồ)",
        "Chữ 图 gồm bộ Vi (囗) bao ngoài và chữ 冬 bên trong, 8 nét (đóng nét đáy sau cùng)."
      ),
      writingOrder(
        "hsk4-l20-q3",
        "Sắp xếp thành câu hoàn chỉnh với phó từ 恐怕:",
        ["今天", "恐怕", "按时到达目的地", "我们", "不能"],
        "今天我们恐怕不能按时到达目的地",
        "Jīntiān wǒmen kǒngpà bù néng ànshí dàodá mùdìdì",
        "Cấu trúc: 今天 + 我们 + 恐怕 + 不能按时到达目的地."
      ),
      writingOrder(
        "hsk4-l20-q4",
        "Sắp xếp thành câu hoàn chỉnh với cấu trúc 不管……都……:",
        ["不管", "风景有多美", "都", "要记得安全第一", "路上的"],
        "不管路上的风景有多美都要记得安全第一",
        "Bùguǎn lùshang de fēngjǐng yǒu duō měi dōu yào jìde ānquán dì-yī",
        "Cấu trúc: 不管 + 路上的风景有多美 + 都 + 要记得安全第一."
      ),
      writingTwoSentences(
        "hsk4-l20-q5",
        "印象",
        "yìnxiàng",
        "ấn tượng",
        "Đặt 2 câu có từ 印象 (ví dụ: 这次旅游给我留下了深刻的印象 / 他的第一印象很好)."
      ),
    ],
  },
];
