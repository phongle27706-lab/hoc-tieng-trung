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

export const HSK1_PART2_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 9 — HSK STANDARD COURSE 1
  // 你儿子在哪儿工作 (Nǐ érzi zài nǎr gōngzuò)
  // ==========================================
  {
    id: "hsk1-l9-gongzuo",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 9,
    title: "Bài 9: Con trai bạn làm việc ở đâu?",
    titleZh: "你儿子在哪儿工作",
    titlePinyin: "Nǐ érzi zài nǎr gōngzuò",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=-u3sGPl2QzI",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 9 你儿子在哪儿工作",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Động từ 在 (zài — ở tại): S + 在 + Phương vị từ / Địa điểm. Ví dụ: 小猫在椅子下面 (Con mèo nhỏ ở dưới cái ghế).",
      "Giới từ 在 (zài — tại/ở): S + 在 + Địa điểm + Động từ. Địa điểm làm trạng ngữ phải đặt TRƯỚC động từ. Ví dụ: 他在医院工作 (Anh ấy làm việc ở bệnh viện).",
      "Đại từ nghi vấn 哪儿 (nǎr — ở đâu) dùng để hỏi vị trí hoặc nơi chốn thực hiện hành động.",
    ],
    newWords: [
      {
        hanzi: "小",
        pinyin: "xiǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "nhỏ, bé",
        radical: "小 (Tiểu)",
        strokeCount: 3,
      },
      {
        hanzi: "猫",
        pinyin: "māo",
        partOfSpeech: "Danh từ",
        meaningVi: "con mèo",
        radical: "犭 (Khuyển)",
        strokeCount: 11,
      },
      {
        hanzi: "在",
        pinyin: "zài",
        partOfSpeech: "Động từ / Giới từ",
        meaningVi: "ở, tại",
        radical: "土 (Thổ)",
        strokeCount: 6,
      },
      {
        hanzi: "那儿",
        pinyin: "nàr",
        partOfSpeech: "Đại từ",
        meaningVi: "ở kia, chỗ kia",
        radical: "阝 (Ấp)",
        strokeCount: 8,
      },
      {
        hanzi: "狗",
        pinyin: "gǒu",
        partOfSpeech: "Danh từ",
        meaningVi: "con chó",
        radical: "犭 (Khuyển)",
        strokeCount: 8,
      },
      {
        hanzi: "椅子",
        pinyin: "yǐzi",
        partOfSpeech: "Danh từ",
        meaningVi: "cái ghế",
        radical: "木 (Mộc)",
        strokeCount: 15,
      },
      {
        hanzi: "下面",
        pinyin: "xiàmiàn",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "phía dưới, bên dưới",
        radical: "一 (Nhất)",
        strokeCount: 12,
      },
      {
        hanzi: "哪儿",
        pinyin: "nǎr",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "ở đâu, chỗ nào",
        radical: "口 (Khẩu)",
        strokeCount: 11,
      },
      {
        hanzi: "工作",
        pinyin: "gōngzuò",
        partOfSpeech: "Động từ / Danh từ",
        meaningVi: "làm việc / công việc",
        radical: "工 (Công)",
        strokeCount: 10,
      },
      {
        hanzi: "医生",
        pinyin: "yīshēng",
        partOfSpeech: "Danh từ",
        meaningVi: "bác sĩ",
        radical: "匚 (Phương)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Ở nhà (在家)",
        lines: [
          {
            speaker: "A",
            zh: "小猫在哪儿？",
            pinyin: "Xiǎo māo zài nǎr?",
            vi: "Con mèo nhỏ ở đâu rồi?",
          },
          {
            speaker: "B",
            zh: "小猫在那儿。",
            pinyin: "Xiǎo māo zài nàr.",
            vi: "Con mèo nhỏ ở đằng kia kìa.",
          },
          {
            speaker: "A",
            zh: "小狗在哪儿？",
            pinyin: "Xiǎo gǒu zài nǎr?",
            vi: "Con chó nhỏ ở đâu?",
          },
          {
            speaker: "B",
            zh: "小狗在椅子下面。",
            pinyin: "Xiǎo gǒu zài yǐzi xiàmiàn.",
            vi: "Con chó nhỏ ở dưới cái ghế.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hỏi nơi làm việc (问工作地点)",
        lines: [
          {
            speaker: "A",
            zh: "你儿子在哪儿工作？",
            pinyin: "Nǐ érzi zài nǎr gōngzuò?",
            vi: "Con trai bạn làm việc ở đâu?",
          },
          {
            speaker: "B",
            zh: "我儿子在医院工作，他是医生。",
            pinyin: "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
            vi: "Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.",
          },
          {
            speaker: "A",
            zh: "你爸爸呢？",
            pinyin: "Nǐ bàba ne?",
            vi: "Thế còn bố bạn?",
          },
          {
            speaker: "B",
            zh: "我爸爸也在医院工作。",
            pinyin: "Wǒ bàba yě zài yīyuàn gōngzuò.",
            vi: "Bố tôi cũng làm việc ở bệnh viện.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Động từ 在 (zài) biểu thị vị trí",
        formula: "Chủ ngữ + 在 + Từ chỉ địa điểm / Phương vị",
        explanationVi:
          "Khi 在 làm động từ chính trong câu, nó đứng trước danh từ chỉ địa điểm hoặc phương vị từ để chỉ người hay vật đang ở đâu.",
        examples: [
          {
            zh: "我的朋友在学校。",
            pinyin: "Wǒ de péngyou zài xuéxiào.",
            vi: "Bạn của tôi đang ở trường học.",
          },
          {
            zh: "小狗在椅子下面。",
            pinyin: "Xiǎo gǒu zài yǐzi xiàmiàn.",
            vi: "Con chó nhỏ ở dưới cái ghế.",
          },
        ],
      },
      {
        titleVi: "Giới từ 在 (zài) làm trạng ngữ chỉ địa điểm",
        formula: "Chủ ngữ + 在 + Địa điểm + Động từ (+ Tân ngữ)",
        explanationVi:
          "Khác với tiếng Việt ('làm việc ở bệnh viện'), trong tiếng Trung cụm '在 + địa điểm' bắt buộc phải đứng TRƯỚC động từ chính.",
        examples: [
          {
            zh: "我儿子在医院工作。",
            pinyin: "Wǒ érzi zài yīyuàn gōngzuò.",
            vi: "Con trai tôi làm việc ở bệnh viện.",
          },
          {
            zh: "他在中国学习汉语。",
            pinyin: "Tā zài Zhōngguó xuéxí Hànyǔ.",
            vi: "Anh ấy học tiếng Trung ở Trung Quốc.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk1-l9-q1",
        "小狗在椅子下面。",
        "Xiǎo gǒu zài yǐzi xiàmiàn.",
        "Nghe câu trên và cho biết con chó nhỏ đang ở đâu?",
        ["Ở dưới cái ghế", "Ở trên cái bàn", "Ở trong bệnh viện", "Ở trường học"],
        "Ở dưới cái ghế",
        "椅子下面 (yǐzi xiàmiàn) nghĩa là phía dưới cái ghế."
      ),
      listeningDialogue(
        "hsk1-l9-q2",
        "女：你儿子在哪儿工作？男：他在医院工作，他是医生。",
        "Nǚ: Nǐ érzi zài nǎr gōngzuò? Nán: Tā zài yīyuàn gōngzuò, tā shì yīshēng.",
        "Nghe hội thoại và chọn nghề nghiệp của con trai người nam:",
        ["Bác sĩ", "Giáo viên", "Sinh viên", "Nhân viên bán hàng"],
        "Bác sĩ",
        "Người nam nói: 他在医院工作，他是医生 (Con trai tôi làm ở bệnh viện, nó là bác sĩ)."
      ),
      listeningFill(
        "hsk1-l9-q3",
        "小猫在那儿。",
        "小猫在___。",
        "Xiǎo māo zài nàr.",
        "Nghe và điền đại từ chỉ nơi chốn ('ở kia', 2 chữ Hán) vào chỗ trống:",
        "那儿",
        "那儿 (nàr) nghĩa là ở kia, chỗ kia."
      ),
      listeningDialogue(
        "hsk1-l9-q4",
        "男：请问，王医生在医院吗？女：不在，他在家呢。",
        "Nán: Qǐngwèn, Wáng yīshēng zài yīyuàn ma? Nǚ: Bú zài, tā zài jiā ne.",
        "Bác sĩ Vương hiện đang ở đâu?",
        ["Ở nhà", "Ở bệnh viện", "Ở trường học", "Ở công ty"],
        "Ở nhà",
        "Người nữ trả lời: 不在，他在家呢 (Không có ở bệnh viện, ông ấy đang ở nhà)."
      ),
      listeningFill(
        "hsk1-l9-q5",
        "你爸爸在哪儿工作？",
        "你爸爸在哪儿___？",
        "Nǐ bàba zài nǎr gōngzuò?",
        "Nghe và điền động từ ('làm việc', 2 chữ Hán) vào chỗ trống:",
        "工作",
        "工作 (gōngzuò) nghĩa là làm việc."
      ),
    ],
  },

  // ==========================================
  // BÀI 10 — HSK STANDARD COURSE 1
  // 我能坐这儿吗 (Wǒ néng zuò zhèr ma)
  // ==========================================
  {
    id: "hsk1-l10-zuozher",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 10,
    title: "Bài 10: Tôi có thể ngồi đây không?",
    titleZh: "我能坐这儿吗",
    titlePinyin: "Wǒ néng zuò zhèr ma",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=4ftlLe__dLQ",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 10 我能坐这儿吗",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Câu tồn tại với 有 (yǒu): Địa điểm + 有 + Người/Vật. Ví dụ: 桌子上有一台电脑 (Trên bàn có một chiếc máy tính).",
      "Liên từ 和 (hé — và) dùng để nối hai danh từ hoặc cụm danh từ: 一台电脑和一本书.",
      "Động từ năng nguyện 能 (néng — có thể) dùng trong câu hỏi xin phép: 我能坐这儿吗？ — 请坐 (Mời ngồi).",
    ],
    newWords: [
      {
        hanzi: "桌子",
        pinyin: "zhuōzi",
        partOfSpeech: "Danh từ",
        meaningVi: "cái bàn",
        radical: "木 (Mộc)",
        strokeCount: 13,
      },
      {
        hanzi: "上",
        pinyin: "shàng",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "trên, phía trên",
        radical: "一 (Nhất)",
        strokeCount: 3,
      },
      {
        hanzi: "电脑",
        pinyin: "diànnǎo",
        partOfSpeech: "Danh từ",
        meaningVi: "máy tính",
        radical: "田 (Điền)",
        strokeCount: 15,
      },
      {
        hanzi: "和",
        pinyin: "hé",
        partOfSpeech: "Liên từ",
        meaningVi: "và",
        radical: "口 (Khẩu)",
        strokeCount: 8,
      },
      {
        hanzi: "本",
        pinyin: "běn",
        partOfSpeech: "Lượng từ",
        meaningVi: "quyển, cuốn (sách, vở)",
        radical: "木 (Mộc)",
        strokeCount: 5,
      },
      {
        hanzi: "里",
        pinyin: "lǐ",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "trong, bên trong",
        radical: "里 (Lý)",
        strokeCount: 7,
      },
      {
        hanzi: "前面",
        pinyin: "qiánmiàn",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "phía trước",
        radical: "刂 (Đao)",
        strokeCount: 18,
      },
      {
        hanzi: "后面",
        pinyin: "hòumiàn",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "phía sau",
        radical: "口 (Khẩu)",
        strokeCount: 15,
      },
      {
        hanzi: "能",
        pinyin: "néng",
        partOfSpeech: "Động từ năng nguyện",
        meaningVi: "có thể",
        radical: "月 (Nguyệt)",
        strokeCount: 10,
      },
      {
        hanzi: "坐",
        pinyin: "zuò",
        partOfSpeech: "Động từ",
        meaningVi: "ngồi",
        radical: "土 (Thổ)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trong văn phòng (在办公室)",
        lines: [
          {
            speaker: "A",
            zh: "桌子上有什么？",
            pinyin: "Zhuōzi shàng yǒu shénme?",
            vi: "Trên bàn có cái gì thế?",
          },
          {
            speaker: "B",
            zh: "桌子上有一个电脑和一本书。",
            pinyin: "Zhuōzi shàng yǒu yí gè diànnǎo hé yì běn shū.",
            vi: "Trên bàn có một cái máy tính và một quyển sách.",
          },
          {
            speaker: "A",
            zh: "杯子在哪儿？",
            pinyin: "Bēizi zài nǎr?",
            vi: "Cái cốc ở đâu?",
          },
          {
            speaker: "B",
            zh: "杯子在桌子里。",
            pinyin: "Bēizi zài zhuōzi lǐ.",
            vi: "Cái cốc ở trong ngăn bàn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trong thư viện (在图书馆)",
        lines: [
          {
            speaker: "A",
            zh: "请问，这儿有人吗？",
            pinyin: "Qǐngwèn, zhèr yǒu rén ma?",
            vi: "Xin hỏi, chỗ này có người ngồi chưa?",
          },
          {
            speaker: "B",
            zh: "没有。",
            pinyin: "Méiyǒu.",
            vi: "Chưa có ai đâu.",
          },
          {
            speaker: "A",
            zh: "我能坐这儿吗？",
            pinyin: "Wǒ néng zuò zhèr ma?",
            vi: "Tôi có thể ngồi đây không?",
          },
          {
            speaker: "B",
            zh: "请坐。",
            pinyin: "Qǐng zuò.",
            vi: "Mời ngồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu chữ 有 (yǒu) biểu thị sự tồn tại",
        formula: "Từ chỉ địa điểm + 有 / 没有 + Người / Vật",
        explanationVi:
          "Dùng để diễn tả ở một nơi nào đó có (hoặc không có) người hay vật nào đó. Phủ định của 有 là 没有 (méiyǒu).",
        examples: [
          {
            zh: "椅子下面有一只小猫。",
            pinyin: "Yǐzi xiàmiàn yǒu yì zhī xiǎo māo.",
            vi: "Dưới cái ghế có một con mèo nhỏ.",
          },
          {
            zh: "这儿没有人。",
            pinyin: "Zhèr méiyǒu rén.",
            vi: "Ở đây không có ai cả.",
          },
        ],
      },
      {
        titleVi: "Động từ năng nguyện 能 (néng) và câu xin phép",
        formula: "Chủ ngữ + 能 + Động từ + Tân ngữ + 吗？",
        explanationVi:
          "能 + 吗 dùng để xin phép một cách lịch sự. Khi đồng ý có thể đáp: 能 (Được), 请坐 (Mời ngồi) hoặc 可以 (Có thể).",
        examples: [
          {
            zh: "我能坐这儿吗？",
            pinyin: "Wǒ néng zuò zhèr ma?",
            vi: "Tôi có thể ngồi đây không?",
          },
          {
            zh: "我能看你的书吗？",
            pinyin: "Wǒ néng kàn nǐ de shū ma?",
            vi: "Tôi có thể xem sách của bạn không?",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk1-l10-q1",
        "请问，我能坐这儿吗？",
        "Qǐngwèn, wǒ néng zuò zhèr ma?",
        "Thu âm câu hỏi xin phép ngồi xuống (chú ý âm uốn lưỡi zhèr):",
        ["Âm bật hơi q (qǐng)", "Âm uốn lưỡi nhi hóa (zhèr)", "Thanh 2 (néng)"],
        "Đọc nhẹ nhàng, lịch sự và lên giọng tự nhiên ở cuối câu hỏi 吗."
      ),
      speakingShadowing(
        "hsk1-l10-q2",
        "桌子上有一个电脑和一本书。",
        "Zhuōzi shàng yǒu yí gè diànnǎo hé yì běn shū.",
        "Thu âm câu miêu tả đồ vật trên bàn (chú ý biến điệu của 一):",
        ["Biến điệu 一 → yí (yí gè)", "Biến điệu 一 → yì (yì běn)", "Âm cuốn lưỡi zh, sh"],
        "一 trước 个 (thanh 4) đọc là yí; 一 trước 本 (thanh 3) đọc là yì."
      ),
      speakingShadowing(
        "hsk1-l10-q3",
        "前面那个人叫王方，在医院工作。",
        "Qiánmiàn nàge rén jiào Wáng Fāng, zài yīyuàn gōngzuò.",
        "Thu âm câu giới thiệu người ngồi phía trước:",
        ["Âm bật hơi q (qián)", "Thanh 2 (qián, rén, Wáng)", "Thanh 1 (Fāng, yī, gōng)"],
        "Chú ý ngắt nhịp tự nhiên sau tên riêng 王方."
      ),
      speakingShadowing(
        "hsk1-l10-q4",
        "后面那个人叫谢朋，在商店工作。",
        "Hòumiàn nàge rén jiào Xiè Péng, zài shāngdiàn gōngzuò.",
        "Thu âm câu giới thiệu người ngồi phía sau:",
        ["Thanh 4 dứt khoát (hòu, Xiè, zài, diàn)", "Âm cuốn lưỡi sh (shāng)"],
        "Đọc rõ thanh 4 ở 后面 (hòumiàn) và 商店 (shāngdiàn)."
      ),
      speakingShadowing(
        "hsk1-l10-q5",
        "这儿没有人，请坐吧！",
        "Zhèr méiyǒu rén, qǐng zuò ba!",
        "Thu âm câu mời người khác ngồi xuống:",
        ["Âm uốn lưỡi (zhèr)", "Thanh 3 (yǒu, qǐng)", "Trợ từ thanh nhẹ (ba)"],
        "Chữ 吧 (ba) ở cuối câu đọc thanh nhẹ tạo cảm giác thân thiện."
      ),
    ],
  },

  // ==========================================
  // BÀI 11 — HSK STANDARD COURSE 1
  // 现在几点 (Xiànzài jǐ diǎn)
  // ==========================================
  {
    id: "hsk1-l11-jidian",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 11,
    title: "Bài 11: Bây giờ mấy giờ rồi?",
    titleZh: "现在几点",
    titlePinyin: "Xiànzài jǐ diǎn",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=3O5EQGb1vLk",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 11 现在几点",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cách nói giờ: Số + 点 (diǎn — giờ) + Số + 分 (fēn — phút). 2 giờ dùng 两点 (liǎng diǎn), không dùng 二点.",
      "Từ chỉ thời gian làm trạng ngữ: Đặt trước động từ hoặc trước chủ ngữ. Ví dụ: 我们中午十二点吃饭.",
      "Danh từ 前 (qián — trước) đặt sau mốc thời gian: 三天前 (3 ngày trước), 星期五前 (trước thứ Sáu).",
    ],
    newWords: [
      {
        hanzi: "现在",
        pinyin: "xiànzài",
        partOfSpeech: "Danh từ thời gian",
        meaningVi: "bây giờ, hiện tại",
        radical: "王 (Vương)",
        strokeCount: 14,
      },
      {
        hanzi: "点",
        pinyin: "diǎn",
        partOfSpeech: "Lượng từ",
        meaningVi: "giờ (đồng hồ)",
        radical: "灬 (Hỏa)",
        strokeCount: 9,
      },
      {
        hanzi: "分",
        pinyin: "fēn",
        partOfSpeech: "Lượng từ",
        meaningVi: "phút",
        radical: "刀 (Đao)",
        strokeCount: 4,
      },
      {
        hanzi: "中午",
        pinyin: "zhōngwǔ",
        partOfSpeech: "Danh từ thời gian",
        meaningVi: "buổi trưa",
        radical: "丨 (Cổn)",
        strokeCount: 8,
      },
      {
        hanzi: "吃饭",
        pinyin: "chīfàn",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "ăn cơm",
        radical: "口 (Khẩu)",
        strokeCount: 13,
      },
      {
        hanzi: "时候",
        pinyin: "shíhou",
        partOfSpeech: "Danh từ",
        meaningVi: "lúc, khi (什么时候: khi nào)",
        radical: "日 (Nhật)",
        strokeCount: 17,
      },
      {
        hanzi: "回",
        pinyin: "huí",
        partOfSpeech: "Động từ",
        meaningVi: "về, trở về",
        radical: "囗 (Vi)",
        strokeCount: 6,
      },
      {
        hanzi: "我们",
        pinyin: "wǒmen",
        partOfSpeech: "Đại từ",
        meaningVi: "chúng tôi, chúng ta",
        radical: "戈 (Qua)",
        strokeCount: 12,
      },
      {
        hanzi: "电影",
        pinyin: "diànyǐng",
        partOfSpeech: "Danh từ",
        meaningVi: "phim điện ảnh",
        radical: "田 (Điền)",
        strokeCount: 20,
      },
      {
        hanzi: "住",
        pinyin: "zhù",
        partOfSpeech: "Động từ",
        meaningVi: "sống, cư trú, ở lại",
        radical: "亻 (Nhân đứng)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trong thư viện (在图书馆)",
        lines: [
          {
            speaker: "A",
            zh: "现在几点？",
            pinyin: "Xiànzài jǐ diǎn?",
            vi: "Bây giờ mấy giờ rồi?",
          },
          {
            speaker: "B",
            zh: "现在十点十分。",
            pinyin: "Xiànzài shí diǎn shí fēn.",
            vi: "Bây giờ là 10 giờ 10 phút.",
          },
          {
            speaker: "A",
            zh: "中午几点吃饭？",
            pinyin: "Zhōngwǔ jǐ diǎn chīfàn?",
            vi: "Trưa nay mấy giờ ăn cơm?",
          },
          {
            speaker: "B",
            zh: "十二点吃饭。",
            pinyin: "Shí'èr diǎn chīfàn.",
            vi: "12 giờ ăn cơm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hỏi lịch trình về nhà (问回家时间)",
        lines: [
          {
            speaker: "A",
            zh: "爸爸什么时候回家？",
            pinyin: "Bàba shénme shíhou huí jiā?",
            vi: "Khi nào bố về nhà thế?",
          },
          {
            speaker: "B",
            zh: "下午五点。",
            pinyin: "Xiàwǔ wǔ diǎn.",
            vi: "5 giờ chiều.",
          },
          {
            speaker: "A",
            zh: "我们什么时候去看电影？",
            pinyin: "Wǒmen shénme shíhou qù kàn diànyǐng?",
            vi: "Khi nào chúng ta đi xem phim?",
          },
          {
            speaker: "B",
            zh: "六点三十分。",
            pinyin: "Liù diǎn sānshí fēn.",
            vi: "6 giờ 30 phút.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cách biểu đạt thời gian (点 / 分)",
        formula: "Số + 点 (diǎn) + [Số + 分 (fēn)]",
        explanationVi:
          "Giờ chẵn dùng 点 (ví dụ: 九点 = 9 giờ). Nếu phút nhỏ hơn 10, thêm 零 (líng) ở giữa (ví dụ: 八点零五分 = 8 giờ 05 phút). 30 phút có thể nói 三十分 hoặc 半 (bàn).",
        examples: [
          {
            zh: "现在十点十分。",
            pinyin: "Xiànzài shí diǎn shí fēn.",
            vi: "Bây giờ là 10 giờ 10 phút.",
          },
          {
            zh: "下午两点半我有汉语课。",
            pinyin: "Xiàwǔ liǎng diǎn bàn wǒ yǒu Hànyǔ kè.",
            vi: "2 giờ rưỡi chiều tôi có tiết tiếng Trung.",
          },
        ],
      },
      {
        titleVi: "Trạng ngữ chỉ thời gian trong câu",
        formula: "Chủ ngữ + Thời gian + Động từ (hoặc Thời gian + Chủ ngữ + Động từ)",
        explanationVi:
          "Từ chỉ thời gian (现在, 中午, 下午五点, 星期五前...) luôn đứng TRƯỚC động từ chính, không đặt ở cuối câu như tiếng Việt.",
        examples: [
          {
            zh: "我中午十二点吃饭。",
            pinyin: "Wǒ zhōngwǔ shí'èr diǎn chīfàn.",
            vi: "Tôi ăn cơm lúc 12 giờ trưa.",
          },
          {
            zh: "星期五前我能回家。",
            pinyin: "Xīngqīwǔ qián wǒ néng huí jiā.",
            vi: "Trước thứ Sáu tôi có thể về nhà.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk1-l11-q1",
        "现在是上午十点十分。我和朋友在图书馆看书，中午十二点我们去饭馆吃饭。",
        "Xiànzài shì shàngwǔ shí diǎn shí fēn. Wǒ hé péngyou zài túshūguǎn kànshū, zhōngwǔ shí'èr diǎn wǒmen qù fànguǎn chīfàn.",
        "Bây giờ là 10 giờ 10 phút sáng. Tôi và bạn đang đọc sách ở thư viện, 12 giờ trưa chúng tôi đi nhà hàng ăn cơm.",
        "Họ dự định đi ăn cơm lúc mấy giờ?",
        ["12 giờ trưa", "10 giờ 10 sáng", "11 giờ trưa", "1 giờ chiều"],
        "12 giờ trưa",
        "Đoạn văn nêu rõ: 中午十二点我们去饭馆吃饭 (12 giờ trưa chúng tôi đi ăn cơm)."
      ),
      readingComp(
        "hsk1-l11-q2",
        "我爸爸今天下午五点回家。晚上六点三十分，我们一家人一起去看电影。",
        "Wǒ bàba jīntiān xiàwǔ wǔ diǎn huí jiā. Wǎnshang liù diǎn sānshí fēn, wǒmen yìjiārén yìqǐ qù kàn diànyǐng.",
        "Bố tôi hôm nay 5 giờ chiều về nhà. 6 giờ 30 tối, cả nhà tôi cùng nhau đi xem phim.",
        "Cả gia đình đi xem phim lúc mấy giờ?",
        ["6 giờ 30 tối", "5 giờ chiều", "7 giờ tối", "6 giờ đúng"],
        "6 giờ 30 tối",
        "晚上六点三十分 (wǎnshang liù diǎn sānshí fēn) = 6 giờ 30 tối."
      ),
      readingComp(
        "hsk1-l11-q3",
        "大卫星期一去北京，他在北京住三天，星期五前能回学校。",
        "Dàwèi xīngqīyī qù Běijīng, tā zài Běijīng zhù sān tiān, xīngqīwǔ qián néng huí xuéxiào.",
        "David thứ Hai đi Bắc Kinh, anh ấy ở lại Bắc Kinh 3 ngày, trước thứ Sáu có thể về lại trường.",
        "David ở lại Bắc Kinh mấy ngày?",
        ["3 ngày", "5 ngày", "1 ngày", "2 ngày"],
        "3 ngày",
        "Đoạn văn ghi: 他在北京住三天 (Anh ấy ở Bắc Kinh 3 ngày)."
      ),
      readingComp(
        "hsk1-l11-q4",
        "A：请问，现在几点？\nB：现在八点零五分，我们八点半上课。",
        "A: Qǐngwèn, xiànzài jǐ diǎn? B: Xiànzài bā diǎn líng wǔ fēn, wǒmen bā diǎn bàn shàngkè.",
        "A: Xin hỏi, bây giờ mấy giờ rồi? B: Bây giờ là 8 giờ 05 phút, 8 giờ rưỡi chúng ta vào học.",
        "Bây giờ là mấy giờ?",
        ["8 giờ 05 phút", "8 giờ 30 phút", "8 giờ 50 phút", "9 giờ 05 phút"],
        "8 giờ 05 phút",
        "八点零五分 (bā diǎn líng wǔ fēn) nghĩa là 8 giờ 05 phút."
      ),
      readingComp(
        "hsk1-l11-q5",
        "我每天上午八点去医院工作，中午十二点吃饭，下午五点回家。",
        "Wǒ měitiān shàngwǔ bā diǎn qù yīyuàn gōngzuò, zhōngwǔ shí'èr diǎn chīfàn, xiàwǔ wǔ diǎn huí jiā.",
        "Mỗi ngày 8 giờ sáng tôi đến bệnh viện làm việc, 12 giờ trưa ăn cơm, 5 giờ chiều về nhà.",
        "Nhân vật 'tôi' về nhà lúc mấy giờ?",
        ["5 giờ chiều", "8 giờ sáng", "12 giờ trưa", "6 giờ chiều"],
        "5 giờ chiều",
        "下午五点回家 = 5 giờ chiều về nhà."
      ),
    ],
  },

  // ==========================================
  // BÀI 12 — HSK STANDARD COURSE 1
  // 明天天气怎么样 (Míngtiān tiānqì zěnmeyàng)
  // ==========================================
  {
    id: "hsk1-l12-tianqi",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 12,
    title: "Bài 12: Thời tiết ngày mai thế nào?",
    titleZh: "明天天气怎么样",
    titlePinyin: "Míngtiān tiānqì zěnmeyàng",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=bQAeE6AhLLM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 12 明天天气怎么样",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn 怎么样 (zěnmeyàng — thế nào) dùng để hỏi tình trạng, chất lượng: 明天天气怎么样？",
      "Phó từ mức độ 太 (tài — quá) kết hợp với 了 (le): 太热了 (nóng quá rồi), 太冷了 (lạnh quá rồi).",
      "Động từ năng nguyện 会 (huì — sẽ) biểu thị khả năng xảy ra trong tương lai: 今天会下雨吗？ — 不会下雨.",
    ],
    newWords: [
      {
        hanzi: "天气",
        pinyin: "tiānqì",
        partOfSpeech: "Danh từ",
        meaningVi: "thời tiết",
        radical: "大 (Đại)",
        strokeCount: 8,
      },
      {
        hanzi: "怎么样",
        pinyin: "zěnmeyàng",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "thế nào, ra sao",
        radical: "心 (Tâm)",
        strokeCount: 22,
      },
      {
        hanzi: "太",
        pinyin: "tài",
        partOfSpeech: "Phó từ",
        meaningVi: "quá, lắm (太...了)",
        radical: "大 (Đại)",
        strokeCount: 4,
      },
      {
        hanzi: "热",
        pinyin: "rè",
        partOfSpeech: "Tính từ",
        meaningVi: "nóng",
        radical: "灬 (Hỏa)",
        strokeCount: 10,
      },
      {
        hanzi: "冷",
        pinyin: "lěng",
        partOfSpeech: "Tính từ",
        meaningVi: "lạnh",
        radical: "冫 (Băng)",
        strokeCount: 7,
      },
      {
        hanzi: "下雨",
        pinyin: "xiàyǔ",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "trời mưa, đổ mưa",
        radical: "雨 (Vũ)",
        strokeCount: 11,
      },
      {
        hanzi: "小姐",
        pinyin: "xiǎojiě",
        partOfSpeech: "Danh từ",
        meaningVi: "cô, tiểu thư",
        radical: "女 (Nữ)",
        strokeCount: 11,
      },
      {
        hanzi: "来",
        pinyin: "lái",
        partOfSpeech: "Động từ",
        meaningVi: "đến, tới",
        radical: "木 (Mộc)",
        strokeCount: 7,
      },
      {
        hanzi: "身体",
        pinyin: "shēntǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "sức khỏe, cơ thể",
        radical: "身 (Thân)",
        strokeCount: 14,
      },
      {
        hanzi: "爱",
        pinyin: "ài",
        partOfSpeech: "Động từ",
        meaningVi: "yêu, thích",
        radical: "爫 (Trảo)",
        strokeCount: 10,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trên đường (在路上)",
        lines: [
          {
            speaker: "A",
            zh: "昨天北京的天气怎么样？",
            pinyin: "Zuótiān Běijīng de tiānqì zěnmeyàng?",
            vi: "Thời tiết Bắc Kinh hôm qua thế nào?",
          },
          {
            speaker: "B",
            zh: "太热了。",
            pinyin: "Tài rè le.",
            vi: "Nóng quá trời luôn.",
          },
          {
            speaker: "A",
            zh: "明天呢？明天天气怎么样？",
            pinyin: "Míngtiān ne? Míngtiān tiānqì zěnmeyàng?",
            vi: "Còn ngày mai thì sao? Thời tiết ngày mai thế nào?",
          },
          {
            speaker: "B",
            zh: "明天天气很好，不冷不热。",
            pinyin: "Míngtiān tiānqì hěn hǎo, bù lěng bú rè.",
            vi: "Thời tiết ngày mai rất đẹp, không lạnh cũng không nóng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trong phòng tập (在健身房)",
        lines: [
          {
            speaker: "A",
            zh: "今天会下雨吗？",
            pinyin: "Jīntiān huì xiàyǔ ma?",
            vi: "Hôm nay trời có mưa không?",
          },
          {
            speaker: "B",
            zh: "今天不会下雨。",
            pinyin: "Jīntiān bú huì xiàyǔ.",
            vi: "Hôm nay sẽ không mưa đâu.",
          },
          {
            speaker: "A",
            zh: "王小姐今天会来吗？",
            pinyin: "Wáng xiǎojiě jīntiān huì lái ma?",
            vi: "Cô Vương hôm nay có đến không?",
          },
          {
            speaker: "B",
            zh: "不会来，天气太冷了。",
            pinyin: "Bú huì lái, tiānqì tài lěng le.",
            vi: "Sẽ không đến đâu, trời lạnh quá rồi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc cảm thán 太 + Tính từ + 了",
        formula: "太 + Tính từ + 了",
        explanationVi:
          "Biểu thị mức độ cao hoặc cảm thán ('...quá đi mất'). Dạng phủ định là 不太 + Tính từ (không quá..., không có 了 ở cuối).",
        examples: [
          {
            zh: "今天天气太热了！",
            pinyin: "Jīntiān tiānqì tài rè le!",
            vi: "Thời tiết hôm nay nóng quá!",
          },
          {
            zh: "我身体不太好。",
            pinyin: "Wǒ shēntǐ bú tài hǎo.",
            vi: "Sức khỏe của tôi không được tốt lắm.",
          },
        ],
      },
      {
        titleVi: "Động từ năng nguyện 会 (huì) chỉ dự đoán",
        formula: "Chủ ngữ + 会 / 不会 + Động từ",
        explanationVi:
          "Ngoài nghĩa 'biết làm gì', 会 còn dùng để dự đoán một sự việc có khả năng xảy ra trong tương lai ('sẽ').",
        examples: [
          {
            zh: "明天会下雨吗？",
            pinyin: "Míngtiān huì xiàyǔ ma?",
            vi: "Ngày mai trời có mưa không?",
          },
          {
            zh: "天气太冷了，他不会来。",
            pinyin: "Tiānqì tài lěng le, tā bú huì lái.",
            vi: "Trời lạnh quá, anh ấy sẽ không đến đâu.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk1-l12-q1",
        "天",
        "tiān",
        "Trời / Ngày (trong 天气 - thời tiết)",
        "Chữ 天 (Thiên - 4 nét): Nét 1 Ngang ngắn trên, Nét 2 Ngang dài dưới, Nét 3 Phẩy, Nét 4 Mác."
      ),
      writingStroke(
        "hsk1-l12-q2",
        "太",
        "tài",
        "Quá, lắm (trong 太热了)",
        "Chữ 太 (Thái - 4 nét): Viết chữ 大 (Ngang, Phẩy, Mác) trước, sau đó thêm nét Chấm (丶) ở phía dưới."
      ),
      writingOrder(
        "hsk1-l12-q3",
        "Sắp xếp các thẻ từ thành câu hỏi: 'Thời tiết ngày mai thế nào?'",
        ["怎么样？", "天气", "明天"],
        "明天天气怎么样？",
        "Míngtiān tiānqì zěnmeyàng?",
        "Trật tự: Thời gian (明天) + Chủ ngữ (天气) + Đại từ nghi vấn (怎么样)."
      ),
      writingOrder(
        "hsk1-l12-q4",
        "Sắp xếp các thẻ từ thành câu hoàn chỉnh: 'Hôm nay trời sẽ không mưa.'",
        ["下雨。", "不会", "今天"],
        "今天不会下雨。",
        "Jīntiān bú huì xiàyǔ.",
        "Trạng ngữ thời gian (今天) + Phủ định dự đoán (不会) + Động từ (下雨)."
      ),
      writingTwoSentences(
        "hsk1-l12-q5",
        "天气",
        "tiānqì",
        "Thời tiết",
        "Đặt 2 câu hoàn chỉnh với từ 天气 (ví dụ: 今天天气很好。 / 北京的天气太冷了。)."
      ),
    ],
  },

  // ==========================================
  // BÀI 13 — HSK STANDARD COURSE 1
  // 他在学做中国菜呢 (Tā zài xué zuò Zhōngguó cài ne)
  // ==========================================
  {
    id: "hsk1-l13-zhongguocai",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 13,
    title: "Bài 13: Anh ấy đang học nấu món Trung Quốc",
    titleZh: "他在学做中国菜呢",
    titlePinyin: "Tā zài xué zuò Zhōngguó cài ne",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=-oib4Xw-LGI",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 13 他在学做中国菜呢",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Thì hiện tại tiếp diễn: Chủ ngữ + 在 + Động từ (+ Tân ngữ) + 呢. Ví dụ: 他在学做中国菜呢 (Anh ấy đang học nấu món Trung Quốc đấy).",
      "Phủ định của thì tiếp diễn dùng 没(在) + Động từ (KHÔNG dùng 不 và KHÔNG có 呢): 我没看电视.",
      "Đọc số điện thoại: Số 1 (一) đọc là yāo để phân biệt rõ với số 7 (qī).",
    ],
    newWords: [
      {
        hanzi: "喂",
        pinyin: "wèi",
        partOfSpeech: "Thán từ",
        meaningVi: "a-lô (khi nghe điện thoại)",
        radical: "口 (Khẩu)",
        strokeCount: 12,
      },
      {
        hanzi: "也",
        pinyin: "yě",
        partOfSpeech: "Phó từ",
        meaningVi: "cũng",
        radical: "乙 (Ất)",
        strokeCount: 3,
      },
      {
        hanzi: "学习",
        pinyin: "xuéxí",
        partOfSpeech: "Động từ",
        meaningVi: "học tập",
        radical: "子 (Tử)",
        strokeCount: 11,
      },
      {
        hanzi: "上午",
        pinyin: "shàngwǔ",
        partOfSpeech: "Danh từ thời gian",
        meaningVi: "buổi sáng",
        radical: "一 (Nhất)",
        strokeCount: 7,
      },
      {
        hanzi: "睡觉",
        pinyin: "shuìjiào",
        partOfSpeech: "Động từ ly hợp",
        meaningVi: "ngủ",
        radical: "目 (Mục)",
        strokeCount: 22,
      },
      {
        hanzi: "电视",
        pinyin: "diànshì",
        partOfSpeech: "Danh từ",
        meaningVi: "tivi, truyền hình",
        radical: "田 (Điền)",
        strokeCount: 13,
      },
      {
        hanzi: "喜欢",
        pinyin: "xǐhuan",
        partOfSpeech: "Động từ",
        meaningVi: "thích",
        radical: "口 (Khẩu)",
        strokeCount: 18,
      },
      {
        hanzi: "给",
        pinyin: "gěi",
        partOfSpeech: "Giới từ / Động từ",
        meaningVi: "cho",
        radical: "纟 (Mịch)",
        strokeCount: 9,
      },
      {
        hanzi: "打电话",
        pinyin: "dǎ diànhuà",
        partOfSpeech: "Cụm động từ",
        meaningVi: "gọi điện thoại",
        radical: "扌 (Tài gẩy)",
        strokeCount: 18,
      },
      {
        hanzi: "吧",
        pinyin: "ba",
        partOfSpeech: "Trợ từ ngữ khí",
        meaningVi: "nhé, đi (đề nghị, thương lượng)",
        radical: "口 (Khẩu)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Gọi điện thoại (打电话)",
        lines: [
          {
            speaker: "A",
            zh: "喂，你在做什么呢？",
            pinyin: "Wèi, nǐ zài zuò shénme ne?",
            vi: "A-lô, bạn đang làm gì thế?",
          },
          {
            speaker: "B",
            zh: "我在看书呢。",
            pinyin: "Wǒ zài kànshū ne.",
            vi: "Mình đang đọc sách.",
          },
          {
            speaker: "A",
            zh: "大卫也在看书吗？",
            pinyin: "Dàwèi yě zài kànshū ma?",
            vi: "David cũng đang đọc sách à?",
          },
          {
            speaker: "B",
            zh: "他没看书，他在学做中国菜呢。",
            pinyin: "Tā méi kànshū, tā zài xué zuò Zhōngguó cài ne.",
            vi: "Anh ấy không đọc sách, anh ấy đang học nấu món Trung Quốc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trong quán cà phê (在咖啡馆)",
        lines: [
          {
            speaker: "A",
            zh: "昨天上午你在做什么呢？",
            pinyin: "Zuótiān shàngwǔ nǐ zài zuò shénme ne?",
            vi: "Sáng hôm qua bạn làm gì thế?",
          },
          {
            speaker: "B",
            zh: "我在睡觉呢。你呢？",
            pinyin: "Wǒ zài shuìjiào ne. Nǐ ne?",
            vi: "Mình đang ngủ. Còn bạn?",
          },
          {
            speaker: "A",
            zh: "我在家看电视呢。你喜欢看电视吗？",
            pinyin: "Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?",
            vi: "Mình ở nhà xem tivi. Bạn có thích xem tivi không?",
          },
          {
            speaker: "B",
            zh: "我不喜欢看电视，我喜欢看电影。",
            pinyin: "Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.",
            vi: "Mình không thích xem tivi, mình thích xem phim điện ảnh.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc đang diễn ra 在...呢 (zài... ne)",
        formula: "Chủ ngữ + 在 + Động từ (+ Tân ngữ) + 呢",
        explanationVi:
          "Diễn tả hành động đang diễn ra tại thời điểm nói. Có thể lược bỏ 呢 hoặc chỉ giữ 在. Dạng phủ định dùng 没(在) + Động từ.",
        examples: [
          {
            zh: "我在学习汉语呢。",
            pinyin: "Wǒ zài xuéxí Hànyǔ ne.",
            vi: "Tôi đang học tiếng Trung.",
          },
          {
            zh: "他没睡觉，他在看电视呢。",
            pinyin: "Tā méi shuìjiào, tā zài kàn diànshì ne.",
            vi: "Anh ấy không ngủ, anh ấy đang xem tivi.",
          },
        ],
      },
      {
        titleVi: "Trợ từ ngữ khí 吧 (ba) cuối câu đề nghị",
        formula: "Câu trần thuật + 吧",
        explanationVi:
          "Đặt ở cuối câu để đưa ra lời đề nghị, thương lượng hoặc thúc giục một cách nhẹ nhàng, lịch sự.",
        examples: [
          {
            zh: "你给他打电话吧。",
            pinyin: "Nǐ gěi tā dǎ diànhuà ba.",
            vi: "Bạn gọi điện cho anh ấy đi nhé.",
          },
          {
            zh: "我们去吃饭吧。",
            pinyin: "Wǒmen qù chīfàn ba.",
            vi: "Chúng ta đi ăn cơm đi.",
          },
        ],
      },
    ],
    exercises: [
      listeningDialogue(
        "hsk1-l13-q1",
        "女：喂，大卫在看书吗？男：他没看书，他在学做中国菜呢。",
        "Nǚ: Wèi, Dàwèi zài kànshū ma? Nán: Tā méi kànshū, tā zài xué zuò Zhōngguó cài ne.",
        "David hiện đang làm gì?",
        [
          "Đang học nấu món Trung Quốc",
          "Đang đọc sách",
          "Đang xem tivi",
          "Đang ngủ",
        ],
        "Đang học nấu món Trung Quốc",
        "Người nam nói: 他在学做中国菜呢 (Anh ấy đang học nấu món Trung Quốc)."
      ),
      listeningMcq(
        "hsk1-l13-q2",
        "昨天上午我在睡觉呢。",
        "Zuótiān shàngwǔ wǒ zài shuìjiào ne.",
        "Người nói đang làm gì vào sáng hôm qua?",
        ["Đang ngủ", "Đang học tiếng Trung", "Đang gọi điện thoại", "Đang ăn cơm"],
        "Đang ngủ",
        "睡觉 (shuìjiào) nghĩa là ngủ."
      ),
      listeningFill(
        "hsk1-l13-q3",
        "我不喜欢看电视，我喜欢看电影。",
        "我不___看电视，我喜欢看电影。",
        "Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.",
        "Nghe và điền động từ ('thích', 2 chữ Hán) vào chỗ trống:",
        "喜欢",
        "喜欢 (xǐhuan) nghĩa là thích."
      ),
      listeningDialogue(
        "hsk1-l13-q4",
        "男：李老师的电话号码是多少？女：82304155，你给她打电话吧。",
        "Nán: Lǐ lǎoshī de diànhuà hàomǎ shì duōshao? Nǚ: Bā èr sān líng sì yāo wǔ wǔ, nǐ gěi tā dǎ diànhuà ba.",
        "Người nữ khuyên người nam làm gì?",
        [
          "Gọi điện thoại cho cô Lý",
          "Đến nhà cô Lý",
          "Học nấu ăn với cô Lý",
          "Đi xem phim cùng cô Lý",
        ],
        "Gọi điện thoại cho cô Lý",
        "你给她打电话吧 = Bạn gọi điện thoại cho cô ấy đi nhé."
      ),
      listeningFill(
        "hsk1-l13-q5",
        "喂，你在做什么呢？",
        "___，你在做什么呢？",
        "Wèi, nǐ zài zuò shénme ne?",
        "Nghe và điền thán từ nghe điện thoại ('A-lô', 1 chữ Hán):",
        "喂",
        "喂 (wèi) là từ dùng khi bắt máy nghe điện thoại (A-lô)."
      ),
    ],
  },

  // ==========================================
  // BÀI 14 — HSK STANDARD COURSE 1
  // 她买了不少衣服 (Tā mǎi le bùshǎo yīfu)
  // ==========================================
  {
    id: "hsk1-l14-yifu",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 14,
    title: "Bài 14: Cô ấy mua không ít quần áo",
    titleZh: "她买了不少衣服",
    titlePinyin: "Tā mǎi le bùshǎo yīfu",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=5mgr8rQDFOc",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 14 她买了不少衣服",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Trợ từ động thái 了 (le) đứng ngay sau động từ biểu thị hành động đã hoàn thành: 她买了不少衣服 (Cô ấy đã mua không ít quần áo).",
      "Phủ định hành động trong quá khứ dùng 没(有) + Động từ và BỎ 了: 我没去商店 (Tôi không đi cửa hàng).",
      "Cấu trúc 都 (dōu — đều) luôn đứng TRƯỚC động từ hoặc tính từ: 我们都看见他了 (Chúng tôi đều nhìn thấy anh ấy rồi).",
    ],
    newWords: [
      {
        hanzi: "东西",
        pinyin: "dōngxi",
        partOfSpeech: "Danh từ",
        meaningVi: "đồ đạc, thứ, vật",
        radical: "一 (Nhất)",
        strokeCount: 11,
      },
      {
        hanzi: "一点儿",
        pinyin: "yìdiǎnr",
        partOfSpeech: "Số lượng từ",
        meaningVi: "một chút, một ít",
        radical: "一 (Nhất)",
        strokeCount: 12,
      },
      {
        hanzi: "苹果",
        pinyin: "píngguǒ",
        partOfSpeech: "Danh từ",
        meaningVi: "quả táo",
        radical: "艹 (Thảo đầu)",
        strokeCount: 16,
      },
      {
        hanzi: "看见",
        pinyin: "kànjiàn",
        partOfSpeech: "Động từ",
        meaningVi: "nhìn thấy",
        radical: "目 (Mục)",
        strokeCount: 13,
      },
      {
        hanzi: "先生",
        pinyin: "xiānsheng",
        partOfSpeech: "Danh từ",
        meaningVi: "ông, ngài, chồng",
        radical: "儿 (Nhi)",
        strokeCount: 11,
      },
      {
        hanzi: "开",
        pinyin: "kāi",
        partOfSpeech: "Động từ",
        meaningVi: "lái (xe), mở",
        radical: "廾 (Củng)",
        strokeCount: 4,
      },
      {
        hanzi: "车",
        pinyin: "chē",
        partOfSpeech: "Danh từ",
        meaningVi: "xe (ô tô, xe cộ)",
        radical: "车 (Xa)",
        strokeCount: 4,
      },
      {
        hanzi: "回来",
        pinyin: "huílai",
        partOfSpeech: "Động từ",
        meaningVi: "trở về, quay lại",
        radical: "囗 (Vi)",
        strokeCount: 13,
      },
      {
        hanzi: "衣服",
        pinyin: "yīfu",
        partOfSpeech: "Danh từ",
        meaningVi: "quần áo",
        radical: "衣 (Y)",
        strokeCount: 14,
      },
      {
        hanzi: "漂亮",
        pinyin: "piàoliang",
        partOfSpeech: "Tính từ",
        meaningVi: "đẹp, xinh đẹp",
        radical: "氵 (Thủy)",
        strokeCount: 23,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trong ký túc xá (在宿舍)",
        lines: [
          {
            speaker: "A",
            zh: "昨天上午你去哪儿了？",
            pinyin: "Zuótiān shàngwǔ nǐ qù nǎr le?",
            vi: "Sáng hôm qua bạn đã đi đâu thế?",
          },
          {
            speaker: "B",
            zh: "我去商店买东西了。",
            pinyin: "Wǒ qù shāngdiàn mǎi dōngxi le.",
            vi: "Mình đi cửa hàng mua đồ.",
          },
          {
            speaker: "A",
            zh: "你买什么了？",
            pinyin: "Nǐ mǎi shénme le?",
            vi: "Bạn đã mua gì thế?",
          },
          {
            speaker: "B",
            zh: "我买了一点儿苹果。",
            pinyin: "Wǒ mǎi le yìdiǎnr píngguǒ.",
            vi: "Mình mua một ít táo.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trong cửa hàng (在商店)",
        lines: [
          {
            speaker: "A",
            zh: "王方怎么没来？",
            pinyin: "Wáng Fāng zěnme méi lái?",
            vi: "Sao Vương Phương không đến thế?",
          },
          {
            speaker: "B",
            zh: "她去买衣服了。",
            pinyin: "Tā qù mǎi yīfu le.",
            vi: "Cô ấy đi mua quần áo rồi.",
          },
          {
            speaker: "A",
            zh: "她买了不少衣服吧？",
            pinyin: "Tā mǎi le bùshǎo yīfu ba?",
            vi: "Cô ấy mua không ít quần áo nhỉ?",
          },
          {
            speaker: "B",
            zh: "是的，这些衣服都很漂亮。",
            pinyin: "Shì de, zhèxiē yīfu dōu hěn piàoliang.",
            vi: "Đúng vậy, mấy bộ quần áo này đều rất đẹp.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Trợ từ 了 (le) biểu thị hành động đã xảy ra / hoàn thành",
        formula: "Chủ ngữ + Động từ + 了 + (Định ngữ) + Tân ngữ",
        explanationVi:
          "Đặt 了 ngay sau động từ khi tân ngữ có định ngữ đi kèm (như 一点儿, 不少, 三件...). Dạng phủ định dùng 没 + Động từ (không dùng 了).",
        examples: [
          {
            zh: "我买了一点儿苹果。",
            pinyin: "Wǒ mǎi le yìdiǎnr píngguǒ.",
            vi: "Tôi đã mua một ít táo.",
          },
          {
            zh: "我没买衣服。",
            pinyin: "Wǒ méi mǎi yīfu.",
            vi: "Tôi đã không mua quần áo.",
          },
        ],
      },
      {
        titleVi: "Phó từ 都 (dōu — đều)",
        formula: "Chủ ngữ số nhiều + 都 + Động từ / Tính từ",
        explanationVi:
          "都 bao quát toàn bộ đối tượng được nhắc tới ở phía trước. Lưu ý vị trí của 不: 都不 (đều không — phủ định toàn bộ) khác với 不都 (không phải tất cả đều).",
        examples: [
          {
            zh: "这些衣服都很漂亮。",
            pinyin: "Zhèxiē yīfu dōu hěn piàoliang.",
            vi: "Những bộ quần áo này đều rất đẹp.",
          },
          {
            zh: "我们都看见张先生了。",
            pinyin: "Wǒmen dōu kànjiàn Zhāng xiānsheng le.",
            vi: "Chúng tôi đều đã nhìn thấy ông Trương rồi.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk1-l14-q1",
        "昨天上午我去商店买东西了。",
        "Zuótiān shàngwǔ wǒ qù shāngdiàn mǎi dōngxi le.",
        "Thu âm câu kể lại việc đi mua đồ sáng hôm qua:",
        ["Thanh nhẹ (dōngxi, le)", "Âm cuốn lưỡi sh (shàng, shāng)"],
        "Chữ 西 trong 东西 (đồ đạc) đọc thanh nhẹ (dōngxi), không đọc thanh 1."
      ),
      speakingShadowing(
        "hsk1-l14-q2",
        "她买了不少衣服，都很漂亮。",
        "Tā mǎi le bùshǎo yīfu, dōu hěn piàoliang.",
        "Thu âm câu nhận xét quần áo cô ấy mua:",
        ["Thanh nhẹ (le, fu, liang)", "Thanh 4 bật hơi p (piào)"],
        "Đọc thanh nhẹ tự nhiên ở 衣服 (yīfu) và 漂亮 (piàoliang)."
      ),
      speakingShadowing(
        "hsk1-l14-q3",
        "我买了一点儿苹果和一点儿菜。",
        "Wǒ mǎi le yìdiǎnr píngguǒ hé yìdiǎnr cài.",
        "Thu âm câu nói về việc mua táo và rau (chú ý âm nhi hóa yìdiǎnr):",
        ["Âm nhi hóa (yìdiǎnr)", "Âm bật hơi p, c (píng, cài)"],
        "一点儿 (yìdiǎnr) uốn nhẹ lưỡi ở cuối âm, 一 đọc biến điệu thành thanh 4."
      ),
      speakingShadowing(
        "hsk1-l14-q4",
        "你看见张先生了吗？他去学开车了。",
        "Nǐ kànjiàn Zhāng xiānsheng le ma? Tā qù xué kāichē le.",
        "Thu âm câu hỏi thăm ông Trương:",
        ["Âm bật hơi k, ch (kàn, kāi, chē)", "Âm cuốn lưỡi zh, ch"],
        "Chú ý bật hơi rõ ở 看 (kàn), 开 (kāi) và 车 (chē)."
      ),
      speakingShadowing(
        "hsk1-l14-q5",
        "他四十分钟后回来。",
        "Tā sìshí fēnzhōng hòu huílai.",
        "Thu âm câu thông báo thời gian quay về:",
        ["Phân biệt s và sh (sìshí)", "Âm cuốn lưỡi zh (zhōng)"],
        "Phân biệt rõ âm thẳng lưỡi s (sì) và âm cuốn lưỡi sh (shí) trong 四十."
      ),
    ],
  },

  // ==========================================
  // BÀI 15 — HSK STANDARD COURSE 1
  // 我是坐飞机来的 (Wǒ shì zuò fēijī lái de)
  // ==========================================
  {
    id: "hsk1-l15-feiji",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 15,
    title: "Bài 15: Tôi đi máy bay đến",
    titleZh: "我是坐飞机来的",
    titlePinyin: "Wǒ shì zuò fēijī lái de",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=YU4H2whCqmE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 15 我是坐飞机来的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc nhấn mạnh 是...的 (shì... de): Dùng để nhấn mạnh thời gian, địa điểm hoặc phương thức của hành động ĐÃ xảy ra. Ví dụ: 我是坐飞机来的 (Tôi đi máy bay đến).",
      "Cách nói năm, tháng, ngày: Năm đọc từng chữ số (2011年 = èr líng yī yī nián) + 月 (tháng) + 日/号 (ngày).",
      "Phương tiện giao thông + động từ: 坐飞机 (đi máy bay), 坐出租车 (đi taxi), 坐火车 (đi tàu hỏa).",
    ],
    newWords: [
      {
        hanzi: "认识",
        pinyin: "rènshi",
        partOfSpeech: "Động từ",
        meaningVi: "quen biết, nhận biết",
        radical: "讠 (Ngôn)",
        strokeCount: 11,
      },
      {
        hanzi: "年",
        pinyin: "nián",
        partOfSpeech: "Danh từ",
        meaningVi: "năm",
        radical: "干 (Can)",
        strokeCount: 6,
      },
      {
        hanzi: "大学",
        pinyin: "dàxué",
        partOfSpeech: "Danh từ",
        meaningVi: "đại học",
        radical: "大 (Đại)",
        strokeCount: 11,
      },
      {
        hanzi: "饭店",
        pinyin: "fàndiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "khách sạn, nhà hàng",
        radical: "饣 (Thực)",
        strokeCount: 15,
      },
      {
        hanzi: "出租车",
        pinyin: "chūzūchē",
        partOfSpeech: "Danh từ",
        meaningVi: "xe taxi",
        radical: "凵 (Khảm)",
        strokeCount: 19,
      },
      {
        hanzi: "一起",
        pinyin: "yìqǐ",
        partOfSpeech: "Phó từ",
        meaningVi: "cùng nhau",
        radical: "一 (Nhất)",
        strokeCount: 11,
      },
      {
        hanzi: "高兴",
        pinyin: "gāoxìng",
        partOfSpeech: "Tính từ",
        meaningVi: "vui vẻ, phấn khởi",
        radical: "高 (Cao)",
        strokeCount: 16,
      },
      {
        hanzi: "听",
        pinyin: "tīng",
        partOfSpeech: "Động từ",
        meaningVi: "nghe",
        radical: "口 (Khẩu)",
        strokeCount: 7,
      },
      {
        hanzi: "飞机",
        pinyin: "fēijī",
        partOfSpeech: "Danh từ",
        meaningVi: "máy bay",
        radical: "飞 (Phi)",
        strokeCount: 9,
      },
      {
        hanzi: "来",
        pinyin: "lái",
        partOfSpeech: "Động từ",
        meaningVi: "đến, tới",
        radical: "木 (Mộc)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Tại bàn ăn (在餐桌旁)",
        lines: [
          {
            speaker: "A",
            zh: "你和李小姐是什么时候认识的？",
            pinyin: "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?",
            vi: "Anh và cô Lý quen nhau từ khi nào thế?",
          },
          {
            speaker: "B",
            zh: "我们是2011年9月认识的。",
            pinyin: "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
            vi: "Chúng tôi quen nhau vào tháng 9 năm 2011.",
          },
          {
            speaker: "A",
            zh: "你们在哪儿认识的？",
            pinyin: "Nǐmen zài nǎr rènshi de?",
            vi: "Hai người quen nhau ở đâu?",
          },
          {
            speaker: "B",
            zh: "我们是在学校认识的，她是我大学同学。",
            pinyin: "Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.",
            vi: "Chúng tôi quen nhau ở trường, cô ấy là bạn học đại học của tôi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Ngoài cửa khách sạn (在饭店门口)",
        lines: [
          {
            speaker: "A",
            zh: "你们是怎么来饭店的？",
            pinyin: "Nǐmen shì zěnme lái fàndiàn de?",
            vi: "Các bạn đến khách sạn bằng cách nào thế?",
          },
          {
            speaker: "B",
            zh: "我们是坐出租车来的。",
            pinyin: "Wǒmen shì zuò chūzūchē lái de.",
            vi: "Chúng tôi đi taxi đến.",
          },
          {
            speaker: "A",
            zh: "李先生呢？他是怎么来北京的？",
            pinyin: "Lǐ xiānsheng ne? Tā shì zěnme lái Běijīng de?",
            vi: "Thế còn ông Lý? Ông ấy đến Bắc Kinh bằng gì?",
          },
          {
            speaker: "B",
            zh: "他是坐飞机来的。",
            pinyin: "Tā shì zuò fēijī lái de.",
            vi: "Ông ấy đi máy bay đến.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nhấn mạnh 是...的 (shì... de)",
        formula: "Chủ ngữ + 是 + [Thời gian / Địa điểm / Phương thức] + Động từ + 的",
        explanationVi:
          "Khi hành động đã xảy ra rồi và người nói muốn nhấn mạnh KHI NÀO, Ở ĐÂU hoặc BẰNG CÁCH NÀO, đặt phần cần nhấn mạnh vào giữa 是 và 的.",
        examples: [
          {
            zh: "我是坐飞机来北京的。",
            pinyin: "Wǒ shì zuò fēijī lái Běijīng de.",
            vi: "Tôi đi máy bay đến Bắc Kinh.",
          },
          {
            zh: "我们是2011年9月认识的。",
            pinyin: "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
            vi: "Chúng tôi quen nhau vào tháng 9 năm 2011.",
          },
        ],
      },
      {
        titleVi: "Biểu đạt ngày tháng năm trong tiếng Trung",
        formula: "XXXX年 (năm) + XX月 (tháng) + XX日 / 号 (ngày)",
        explanationVi:
          "Tiếng Trung xếp đơn vị thời gian từ LỚN đến NHỎ (Năm → Tháng → Ngày). Số năm đọc rời từng chữ số (ví dụ 2025年: èr líng èr wǔ nián).",
        examples: [
          {
            zh: "我是2024年10月来中国的。",
            pinyin: "Wǒ shì èr líng èr sì nián shí yuè lái Zhōngguó de.",
            vi: "Tôi đến Trung Quốc vào tháng 10 năm 2024.",
          },
          {
            zh: "今天是2026年5月1日。",
            pinyin: "Jīntiān shì èr líng èr liù nián wǔ yuè yī rì.",
            vi: "Hôm nay là ngày 1 tháng 5 năm 2026.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk1-l15-q1",
        "我和李小姐是2011年9月在学校认识的，她是我大学同学。今天我们很高兴能一起吃饭。",
        "Wǒ hé Lǐ xiǎojiě shì èr líng yī yī nián jiǔ yuè zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué. Jīntiān wǒmen hěn gāoxìng néng yìqǐ chīfàn.",
        "Tôi và cô Lý quen nhau tại trường vào tháng 9 năm 2011, cô ấy là bạn học đại học của tôi. Hôm nay chúng tôi rất vui vì có thể cùng nhau ăn cơm.",
        "Nhân vật 'tôi' và cô Lý quen nhau ở đâu?",
        ["Ở trường học", "Ở khách sạn", "Trên máy bay", "Ở bệnh viện"],
        "Ở trường học",
        "Đoạn văn nêu rõ: 在学校认识的 (quen nhau ở trường học)."
      ),
      readingComp(
        "hsk1-l15-q2",
        "李先生今天上午十点来北京，他是坐飞机来的。我们是坐出租车去饭店看他的。",
        "Lǐ xiānsheng jīntiān shàngwǔ shí diǎn lái Běijīng, tā shì zuò fēijī lái de. Wǒmen shì zuò chūzūchē qù fàndiàn kàn tā de.",
        "Ông Lý đến Bắc Kinh lúc 10 giờ sáng nay, ông ấy đi máy bay đến. Chúng tôi đi taxi tới khách sạn thăm ông ấy.",
        "Ông Lý đến Bắc Kinh bằng phương tiện gì?",
        ["Máy bay", "Xe taxi", "Tàu hỏa", "Xe buýt"],
        "Máy bay",
        "他是坐飞机来的 = Ông ấy đi máy bay đến."
      ),
      readingComp(
        "hsk1-l15-q3",
        "我和朋友是昨天坐出租车来饭店的。这里的中国菜很好吃，我们都很高兴。",
        "Wǒ hé péngyou shì zuótiān zuò chūzūchē lái fàndiàn de. Zhèlǐ de Zhōngguó cài hěn hǎochī, wǒmen dōu hěn gāoxìng.",
        "Tôi và bạn đã đi taxi đến nhà hàng vào hôm qua. Món Trung Quốc ở đây rất ngon, chúng tôi đều rất vui.",
        "Họ đến nhà hàng bằng phương tiện gì?",
        ["Xe taxi", "Máy bay", "Đi bộ", "Xe đạp"],
        "Xe taxi",
        "坐出租车 (zuò chūzūchē) nghĩa là đi xe taxi."
      ),
      readingComp(
        "hsk1-l15-q4",
        "张先生和王小姐是在大学认识的。现在张先生在医院工作，王小姐在学校教汉语。",
        "Zhāng xiānsheng hé Wáng xiǎojiě shì zài dàxué rènshi de. Xiànzài Zhāng xiānsheng zài yīyuàn gōngzuò, Wáng xiǎojiě zài xuéxiào jiāo Hànyǔ.",
        "Ông Trương và cô Vương quen nhau ở trường đại học. Hiện tại ông Trương làm việc ở bệnh viện, cô Vương dạy tiếng Trung ở trường học.",
        "Hiện tại ông Trương làm việc ở đâu?",
        ["Ở bệnh viện", "Ở trường đại học", "Ở khách sạn", "Ở cửa hàng"],
        "Ở bệnh viện",
        "Đoạn văn ghi rõ: 现在张先生在医院工作 (Hiện tại ông Trương làm việc ở bệnh viện)."
      ),
      readingComp(
        "hsk1-l15-q5",
        "听张先生说，你下个月去北京学习汉语。你是坐飞机去，还是坐火车去？",
        "Tīng Zhāng xiānsheng shuō, nǐ xià gè yuè qù Běijīng xuéxí Hànyǔ. Nǐ shì zuò fēijī qù, háishi zuò huǒchē qù?",
        "Nghe ông Trương nói tháng sau bạn đi Bắc Kinh học tiếng Trung. Bạn đi máy bay hay đi tàu hỏa?",
        "Người được hỏi dự định tháng sau đi Bắc Kinh để làm gì?",
        ["Học tiếng Trung", "Làm bác sĩ", "Mua quần áo", "Xem phim"],
        "Học tiếng Trung",
        "你下个月去北京学习汉语 = Tháng sau bạn đi Bắc Kinh học tiếng Trung."
      ),
    ],
  },
];
