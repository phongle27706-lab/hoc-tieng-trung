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

export const HSK1_PART1_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 你好 (Nǐ hǎo — Xin chào)
  // ==========================================
  {
    id: "hsk1-l1-nihao",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Xin chào",
    titleZh: "第一课：你好",
    titlePinyin: "Dì yī kè: Nǐ hǎo",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=EpSs4cdSML0",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 1 你好",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Biến điệu của Thanh 3: Khi hai âm tiết mang Thanh 3 đi liền nhau (3 + 3), âm tiết đầu đọc thành Thanh 2 (2 + 3). Ví dụ: 你好 (nǐ hǎo → ní hǎo).",
      "Phân biệt 你 (nǐ — bạn, ngang hàng/thân mật) và 您 (nín — ngài/ông/bà, kính trọng người lớn tuổi hoặc cấp trên).",
      "Khi xin lỗi dùng 对不起 (duìbuqǐ), đáp lại lịch sự dùng 没关系 (méi guānxi — không sao đâu).",
    ],
    newWords: [
      {
        hanzi: "你",
        pinyin: "nǐ",
        partOfSpeech: "Đại từ",
        meaningVi: "bạn, anh, chị (ngôi thứ 2 số ít)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 7,
      },
      {
        hanzi: "好",
        pinyin: "hǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "tốt, khỏe, đẹp, ngon",
        radical: "女 (Nữ)",
        strokeCount: 6,
      },
      {
        hanzi: "您",
        pinyin: "nín",
        partOfSpeech: "Đại từ",
        meaningVi: "ngài, ông, bà (dạng kính trọng của 你)",
        radical: "心 (Tâm)",
        strokeCount: 11,
      },
      {
        hanzi: "你们",
        pinyin: "nǐmen",
        partOfSpeech: "Đại từ",
        meaningVi: "các bạn (ngôi thứ 2 số nhiều)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 12,
      },
      {
        hanzi: "对不起",
        pinyin: "duìbuqǐ",
        partOfSpeech: "Động từ",
        meaningVi: "xin lỗi",
        radical: "寸 (Thốn)",
        strokeCount: 19,
      },
      {
        hanzi: "没关系",
        pinyin: "méi guānxi",
        partOfSpeech: "Cụm từ",
        meaningVi: "không sao đâu, không có gì",
        radical: "氵 (Chấm thủy)",
        strokeCount: 20,
      },
      {
        hanzi: "我",
        pinyin: "wǒ",
        partOfSpeech: "Đại từ",
        meaningVi: "tôi, mình (ngôi thứ 1 số ít)",
        radical: "戈 (Qua)",
        strokeCount: 7,
      },
      {
        hanzi: "们",
        pinyin: "men",
        partOfSpeech: "Hậu tố",
        meaningVi: "các, chúng (biểu thị số nhiều cho người)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 5,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Chào hỏi thông thường và lịch sự",
        lines: [
          {
            speaker: "A",
            zh: "你好！",
            pinyin: "Nǐ hǎo!",
            vi: "Xin chào!",
          },
          {
            speaker: "B",
            zh: "你好！",
            pinyin: "Nǐ hǎo!",
            vi: "Xin chào!",
          },
          {
            speaker: "A",
            zh: "您好！",
            pinyin: "Nín hǎo!",
            vi: "Chào ngài / Chào thầy (cô)!",
          },
          {
            speaker: "B",
            zh: "你们好！",
            pinyin: "Nǐmen hǎo!",
            vi: "Chào các bạn!",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Xin lỗi và đáp lại",
        lines: [
          {
            speaker: "A",
            zh: "对不起！",
            pinyin: "Duìbuqǐ!",
            vi: "Xin lỗi!",
          },
          {
            speaker: "B",
            zh: "没关系！",
            pinyin: "Méi guānxi!",
            vi: "Không sao đâu!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Quy tắc biến điệu của hai Thanh 3 liền nhau",
        formula: "Thanh 3 + Thanh 3 → Thanh 2 + Thanh 3",
        explanationVi:
          "Trong tiếng Trung phổ thông, khi hai âm tiết đều mang Thanh 3 đứng liền nhau, âm tiết thứ nhất phải đọc thành Thanh 2 để dễ phát âm, nhưng khi viết Pinyin vẫn giữ nguyên dấu Thanh 3 gốc.",
        examples: [
          {
            zh: "你好！",
            pinyin: "Nǐ hǎo! (đọc là: ní hǎo)",
            vi: "Xin chào!",
          },
          {
            zh: "很好。",
            pinyin: "Hěn hǎo. (đọc là: hén hǎo)",
            vi: "Rất tốt.",
          },
        ],
      },
      {
        titleVi: "Cách dùng đại từ nhân xưng 你, 您 và 你们",
        formula: "Đại từ (你 / 您 / 你们) + 好！",
        explanationVi:
          "Dùng 你好 với bạn bè, người ngang tuổi hoặc nhỏ hơn; dùng 您好 để thể hiện sự tôn trọng với thầy cô, người lớn tuổi, khách hàng; thêm hậu tố 们 (men) sau đại từ để tạo số nhiều (你们 — các bạn).",
        examples: [
          {
            zh: "老师，您好！",
            pinyin: "Lǎoshī, nín hǎo!",
            vi: "Thưa thầy/cô, em chào thầy/cô ạ!",
          },
          {
            zh: "你们好！",
            pinyin: "Nǐmen hǎo!",
            vi: "Chào các bạn!",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk1-l1-q1",
        "你好！",
        "Nǐ hǎo!",
        "Thu âm câu chào cơ bản, chú ý biến điệu Thanh 3 + Thanh 3 (đọc là ní hǎo):",
        ["Biến điệu Thanh 3 (ní hǎo)", "Thanh mẫu n, h"],
        "Chữ 你 (nǐ) đứng trước 好 (hǎo) nên nâng lên đọc thành thanh 2: ní hǎo."
      ),
      speakingShadowing(
        "hsk1-l1-q2",
        "您好！",
        "Nín hǎo!",
        "Thu âm câu chào kính trọng với người lớn tuổi hoặc thầy cô:",
        ["Thanh 2 lên giọng (nín)", "Vận mẫu mũi trước -in"],
        "您 (nín) mang thanh 2 đi lên rõ ràng, sau đó hạ trầm xuống thanh 3 ở 好 (hǎo)."
      ),
      speakingShadowing(
        "hsk1-l1-q3",
        "你们好！",
        "Nǐmen hǎo!",
        "Thu âm câu chào nhiều người (chú ý chữ 们 đọc thanh nhẹ):",
        ["Thanh nhẹ (men)", "Thanh 3 nửa giọng (nǐ)"],
        "Chữ 们 (men) đọc nhẹ và ngắn, không nhấn mạnh thanh điệu."
      ),
      speakingShadowing(
        "hsk1-l1-q4",
        "对不起！",
        "Duìbuqǐ!",
        "Thu âm lời xin lỗi tự nhiên (chú ý chữ 不 đọc thanh nhẹ ở giữa):",
        ["Thanh 4 dứt khoát (duì)", "Âm bật hơi q (qǐ)", "Thanh nhẹ (bu)"],
        "对 (duì) đọc dứt khoát, 不 (bu) lướt nhẹ, 起 (qǐ) bật hơi mạnh ở âm q."
      ),
      speakingShadowing(
        "hsk1-l1-q5",
        "没关系！",
        "Méi guānxi!",
        "Thu âm câu đáp lại lời xin lỗi (chú ý chữ 系 đọc thanh nhẹ):",
        ["Thanh 2 (méi)", "Thanh 1 ngang cao (guān)", "Thanh nhẹ (xi)"],
        "没 (méi) lên giọng thanh 2, 关 (guān) giữ ngang cao, 系 (xi) đọc nhẹ."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 谢谢你 (Xièxie nǐ — Cảm ơn bạn)
  // ==========================================
  {
    id: "hsk1-l2-xiexie",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Cảm ơn bạn",
    titleZh: "第二课：谢谢你",
    titlePinyin: "Dì èr kè: Xièxie nǐ",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=EfN5_uU35vY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 2 谢谢你",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Biến điệu của 不 (bù): Khi 不 đứng trước âm tiết mang Thanh 4, 不 đổi thành Thanh 2 (bú). Ví dụ: 不客气 (bú kèqi), 不谢 (bú xiè).",
      "Thanh nhẹ (Khinh thanh): Âm tiết thứ hai trong các từ láy như 谢谢 (xièxie) hoặc từ cố định như 客气 (kèqi) đọc nhẹ và ngắn.",
      "Cách chào tạm biệt: 再见 (zàijiàn — hẹn gặp lại), cả hai âm tiết đều mang Thanh 4.",
    ],
    newWords: [
      {
        hanzi: "谢谢",
        pinyin: "xièxie",
        partOfSpeech: "Động từ",
        meaningVi: "cảm ơn",
        radical: "讠 (Ngôn)",
        strokeCount: 24,
      },
      {
        hanzi: "不",
        pinyin: "bù",
        partOfSpeech: "Phó từ",
        meaningVi: "không (phủ định)",
        radical: "一 (Nhất)",
        strokeCount: 4,
      },
      {
        hanzi: "不客气",
        pinyin: "bú kèqi",
        partOfSpeech: "Cụm từ",
        meaningVi: "đừng khách sáo, không có gì",
        radical: "宀 (Miên)",
        strokeCount: 17,
      },
      {
        hanzi: "再见",
        pinyin: "zàijiàn",
        partOfSpeech: "Động từ",
        meaningVi: "tạm biệt, hẹn gặp lại",
        radical: "冂 (Quynh)",
        strokeCount: 10,
      },
      {
        hanzi: "客气",
        pinyin: "kèqi",
        partOfSpeech: "Tính từ",
        meaningVi: "khách sáo, lịch sự",
        radical: "宀 (Miên)",
        strokeCount: 13,
      },
      {
        hanzi: "再",
        pinyin: "zài",
        partOfSpeech: "Phó từ",
        meaningVi: "lại, nữa",
        radical: "冂 (Quynh)",
        strokeCount: 6,
      },
      {
        hanzi: "见",
        pinyin: "jiàn",
        partOfSpeech: "Động từ",
        meaningVi: "gặp, thấy",
        radical: "见 (Kiến)",
        strokeCount: 4,
      },
      {
        hanzi: "不用谢",
        pinyin: "búyòng xiè",
        partOfSpeech: "Cụm từ",
        meaningVi: "không cần cảm ơn",
        radical: "用 (Dụng)",
        strokeCount: 21,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Cảm ơn và đáp lễ lịch sự",
        lines: [
          {
            speaker: "A",
            zh: "谢谢！",
            pinyin: "Xièxie!",
            vi: "Cảm ơn!",
          },
          {
            speaker: "B",
            zh: "不谢！",
            pinyin: "Bú xiè!",
            vi: "Không có gì!",
          },
          {
            speaker: "A",
            zh: "谢谢你！",
            pinyin: "Xièxie nǐ!",
            vi: "Cảm ơn bạn!",
          },
          {
            speaker: "B",
            zh: "不客气！",
            pinyin: "Bú kèqi!",
            vi: "Đừng khách sáo!",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Chào tạm biệt",
        lines: [
          {
            speaker: "A",
            zh: "再见！",
            pinyin: "Zàijiàn!",
            vi: "Tạm biệt!",
          },
          {
            speaker: "B",
            zh: "再见！",
            pinyin: "Zàijiàn!",
            vi: "Tạm biệt!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Quy tắc biến điệu của phó từ phủ định 不 (bù)",
        formula: "不 (bù) + Thanh 4 → 不 (bú) + Thanh 4",
        explanationVi:
          "Thanh điệu gốc của 不 là Thanh 4 (bù). Khi đứng trước một âm tiết mang Thanh 4 khác, 不 biến thành Thanh 2 (bú). Đứng trước Thanh 1, 2, 3 vẫn giữ nguyên là bù.",
        examples: [
          {
            zh: "不客气！",
            pinyin: "Bú kèqi!",
            vi: "Đừng khách sáo!",
          },
          {
            zh: "不谢！",
            pinyin: "Bú xiè!",
            vi: "Không cần cảm ơn!",
          },
        ],
      },
      {
        titleVi: "Thanh nhẹ (Khinh thanh) trong giao tiếp tự nhiên",
        formula: "Âm tiết chính + Âm tiết thanh nhẹ (đọc ngắn, nhẹ)",
        explanationVi:
          "Một số từ hai âm tiết trong tiếng Trung có âm tiết thứ hai đọc không mang thanh điệu (thanh nhẹ), giúp câu nói tự nhiên và mềm mại hơn.",
        examples: [
          {
            zh: "谢谢你！",
            pinyin: "Xièxie nǐ!",
            vi: "Cảm ơn bạn!",
          },
          {
            zh: "不客气。",
            pinyin: "Bú kèqi.",
            vi: "Không có gì / Đừng khách sáo.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk1-l2-q1",
        "谢谢你！",
        "Xièxie nǐ!",
        "Nghe âm thanh và chọn nghĩa tiếng Việt chính xác:",
        ["Cảm ơn bạn!", "Xin lỗi bạn!", "Chào tạm biệt!", "Không sao đâu!"],
        "Cảm ơn bạn!",
        "谢谢你 (Xièxie nǐ) nghĩa là Cảm ơn bạn."
      ),
      listeningFill(
        "hsk1-l2-q2",
        "不客气！",
        "不___！",
        "Bú kèqi!",
        "Nghe và điền 2 chữ Hán còn thiếu vào chỗ trống (nghĩa là 'khách sáo'):",
        "客气",
        "不客气 (Bú kèqi) nghĩa là Đừng khách sáo, dùng để đáp lại lời cảm ơn."
      ),
      listeningDialogue(
        "hsk1-l2-q3",
        "男：谢谢您！女：不客气，再见！",
        "Nán: Xièxie nín! Nǚ: Bú kèqi, zàijiàn!",
        "Nghe hội thoại và cho biết người nữ đã nói gì với người nam?",
        [
          "Đừng khách sáo, tạm biệt!",
          "Xin lỗi, không sao đâu!",
          "Xin chào, cảm ơn bạn!",
          "Chào các bạn, hẹn gặp lại!",
        ],
        "Đừng khách sáo, tạm biệt!",
        "Người nữ đáp: 不客气，再见！(Bú kèqi, zàijiàn! — Đừng khách sáo, tạm biệt!)."
      ),
      listeningMcq(
        "hsk1-l2-q4",
        "再见！",
        "Zàijiàn!",
        "Nghe âm thanh và chọn tình huống sử dụng phù hợp nhất:",
        [
          "Khi chia tay / chào tạm biệt",
          "Khi mới gặp mặt lần đầu",
          "Khi làm phiền người khác",
          "Khi nhận được quà tặng",
        ],
        "Khi chia tay / chào tạm biệt",
        "再见 (Zàijiàn) có nghĩa là Tạm biệt / Hẹn gặp lại."
      ),
      listeningFill(
        "hsk1-l2-q5",
        "谢谢，再见！",
        "谢谢，___！",
        "Xièxie, zàijiàn!",
        "Nghe và điền từ chào tạm biệt (2 chữ Hán) vào chỗ trống:",
        "再见",
        "再见 (zàijiàn) gồm chữ 再 (lại) và 见 (gặp)."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 你叫什么名字 (Nǐ jiào shénme míngzi — Bạn tên là gì?)
  // ==========================================
  {
    id: "hsk1-l3-mingzi",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Bạn tên là gì?",
    titleZh: "第三课：你叫什么名字",
    titlePinyin: "Dì sān kè: Nǐ jiào shénme míngzi",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=gZrvRS91p-I",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 3 你叫什么名字",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn 什么 (shénme — cái gì): Đặt ở vị trí của thông tin cần hỏi, không đảo trật tự câu. Ví dụ: 你叫什么名字？ → 我叫李月。",
      "Câu chữ 是 (shì — là): Khẳng định A 是 B; Phủ định A 不是 B (bú shì). Ví dụ: 我不是老师，我是学生。",
      "Câu hỏi có/không với 吗 (ma): Chỉ cần thêm trợ từ 吗 vào cuối câu trần thuật. Ví dụ: 你是中国人吗？",
    ],
    newWords: [
      {
        hanzi: "叫",
        pinyin: "jiào",
        partOfSpeech: "Động từ",
        meaningVi: "gọi, tên là",
        radical: "口 (Khẩu)",
        strokeCount: 5,
      },
      {
        hanzi: "什么",
        pinyin: "shénme",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "cái gì, gì",
        radical: "亻 (Nhân đứng)",
        strokeCount: 7,
      },
      {
        hanzi: "名字",
        pinyin: "míngzi",
        partOfSpeech: "Danh từ",
        meaningVi: "tên, tên gọi",
        radical: "夕 (Tịch)",
        strokeCount: 12,
      },
      {
        hanzi: "是",
        pinyin: "shì",
        partOfSpeech: "Động từ",
        meaningVi: "là",
        radical: "日 (Nhật)",
        strokeCount: 9,
      },
      {
        hanzi: "老师",
        pinyin: "lǎoshī",
        partOfSpeech: "Danh từ",
        meaningVi: "giáo viên, thầy/cô giáo",
        radical: "耂 (Lão)",
        strokeCount: 12,
      },
      {
        hanzi: "吗",
        pinyin: "ma",
        partOfSpeech: "Trợ từ nghi vấn",
        meaningVi: "không, à (đặt cuối câu hỏi)",
        radical: "口 (Khẩu)",
        strokeCount: 6,
      },
      {
        hanzi: "学生",
        pinyin: "xuésheng",
        partOfSpeech: "Danh từ",
        meaningVi: "học sinh, sinh viên",
        radical: "子 (Tử)",
        strokeCount: 13,
      },
      {
        hanzi: "人",
        pinyin: "rén",
        partOfSpeech: "Danh từ",
        meaningVi: "người",
        radical: "人 (Nhân)",
        strokeCount: 2,
      },
      {
        hanzi: "中国",
        pinyin: "Zhōngguó",
        partOfSpeech: "Danh từ riêng",
        meaningVi: "Trung Quốc",
        radical: "丨 (Cổn)",
        strokeCount: 12,
      },
      {
        hanzi: "美国",
        pinyin: "Měiguó",
        partOfSpeech: "Danh từ riêng",
        meaningVi: "nước Mỹ",
        radical: "羊 (Dương)",
        strokeCount: 17,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Hỏi tên và nghề nghiệp",
        lines: [
          {
            speaker: "A",
            zh: "你叫什么名字？",
            pinyin: "Nǐ jiào shénme míngzi?",
            vi: "Bạn tên là gì?",
          },
          {
            speaker: "B",
            zh: "我叫李月。",
            pinyin: "Wǒ jiào Lǐ Yuè.",
            vi: "Tôi tên là Lý Nguyệt.",
          },
          {
            speaker: "A",
            zh: "你是老师吗？",
            pinyin: "Nǐ shì lǎoshī ma?",
            vi: "Bạn là giáo viên phải không?",
          },
          {
            speaker: "B",
            zh: "我不是老师，我是学生。",
            pinyin: "Wǒ bú shì lǎoshī, wǒ shì xuésheng.",
            vi: "Tôi không phải giáo viên, tôi là học sinh.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Hỏi quốc tịch",
        lines: [
          {
            speaker: "A",
            zh: "你是中国人吗？",
            pinyin: "Nǐ shì Zhōngguórén ma?",
            vi: "Bạn là người Trung Quốc phải không?",
          },
          {
            speaker: "B",
            zh: "我不是中国人，我是美国人。",
            pinyin: "Wǒ bú shì Zhōngguórén, wǒ shì Měiguórén.",
            vi: "Tôi không phải người Trung Quốc, tôi là người Mỹ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu nghi vấn với đại từ 什么 (shénme)",
        formula: "Chủ ngữ + Động từ + 什么 + (Danh từ)?",
        explanationVi:
          "Đại từ nghi vấn 什么 dùng để hỏi về sự vật, tên gọi. Trật tự câu hỏi giữ nguyên như câu trần thuật; khi trả lời chỉ cần thay 什么 bằng thông tin thực tế.",
        examples: [
          {
            zh: "你叫什么名字？",
            pinyin: "Nǐ jiào shénme míngzi?",
            vi: "Bạn tên là gì?",
          },
          {
            zh: "我叫大卫。",
            pinyin: "Wǒ jiào Dàwèi.",
            vi: "Tôi tên là David.",
          },
        ],
      },
      {
        titleVi: "Câu chữ 是 (shì) và câu hỏi với 吗 (ma)",
        formula: "A + 是 / 不是 + B.  |  A + 是 + B + 吗？",
        explanationVi:
          "Động từ 是 nối chủ ngữ với danh từ chỉ nghề nghiệp, quốc tịch, thân phận. Phủ định dùng 不是 (bú shì). Thêm 吗 vào cuối câu trần thuật để tạo câu hỏi Có/Không.",
        examples: [
          {
            zh: "你是学生吗？",
            pinyin: "Nǐ shì xuésheng ma?",
            vi: "Bạn là học sinh phải không?",
          },
          {
            zh: "我不是美国人，我是中国人。",
            pinyin: "Wǒ bú shì Měiguórén, wǒ shì Zhōngguórén.",
            vi: "Tôi không phải người Mỹ, tôi là người Trung Quốc.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk1-l3-q1",
        "你好！我叫李月，我是中国人，我不是老师，我是学生。",
        "Nǐ hǎo! Wǒ jiào Lǐ Yuè, wǒ shì Zhōngguórén, wǒ bú shì lǎoshī, wǒ shì xuésheng.",
        "Xin chào! Tôi tên là Lý Nguyệt, tôi là người Trung Quốc, tôi không phải giáo viên, tôi là học sinh.",
        "Lý Nguyệt (李月) làm nghề gì?",
        ["Học sinh / Sinh viên", "Giáo viên", "Bác sĩ", "Nhân viên văn phòng"],
        "Học sinh / Sinh viên",
        "Đoạn văn viết rõ: 我不是老师，我是学生 (Tôi không phải giáo viên, tôi là học sinh)."
      ),
      readingComp(
        "hsk1-l3-q2",
        "A：请问，你是中国人吗？ B：我不是中国人，我是美国人。我叫大卫。",
        "A: Qǐngwèn, nǐ shì Zhōngguórén ma? B: Wǒ bú shì Zhōngguórén, wǒ shì Měiguórén. Wǒ jiào Dàwèi.",
        "A: Xin hỏi, bạn là người Trung Quốc phải không? B: Tôi không phải người Trung Quốc, tôi là người Mỹ. Tôi tên là David.",
        "David (大卫) là người nước nào?",
        ["Người Mỹ", "Người Trung Quốc", "Người Việt Nam", "Người Anh"],
        "Người Mỹ",
        "B trả lời: 我是美国人 (Wǒ shì Měiguórén — Tôi là người Mỹ)."
      ),
      readingComp(
        "hsk1-l3-q3",
        "她叫王明，她是汉语老师，她是中国人。",
        "Tā jiào Wáng Míng, tā shì Hànyǔ lǎoshī, tā shì Zhōngguórén.",
        "Cô ấy tên là Vương Minh, cô ấy là giáo viên tiếng Trung, cô ấy là người Trung Quốc.",
        "Thông tin nào sau đây ĐÚNG về Vương Minh (王明)?",
        [
          "Là giáo viên tiếng Trung người Trung Quốc",
          "Là học sinh người Mỹ",
          "Là học sinh người Trung Quốc",
          "Là giáo viên người Mỹ",
        ],
        "Là giáo viên tiếng Trung người Trung Quốc",
        "Đoạn văn nêu rõ: 她是汉语老师，她是中国人."
      ),
      readingComp(
        "hsk1-l3-q4",
        "A：你叫什么名字？ B：我叫乔丹，我是美国学生。",
        "A: Nǐ jiào shénme míngzi? B: Wǒ jiào Qiáodān, wǒ shì Měiguó xuésheng.",
        "A: Bạn tên là gì? B: Tôi tên là Jordan, tôi là học sinh Mỹ.",
        "Người B tên là gì?",
        ["乔丹 (Jordan)", "李月 (Lý Nguyệt)", "大卫 (David)", "王明 (Vương Minh)"],
        "乔丹 (Jordan)",
        "B giới thiệu: 我叫乔丹 (Wǒ jiào Qiáodān)."
      ),
      readingComp(
        "hsk1-l3-q5",
        "我不是美国人，也不是中国人，我是越南学生。",
        "Wǒ bú shì Měiguórén, yě bú shì Zhōngguórén, wǒ shì Yuènán xuésheng.",
        "Tôi không phải người Mỹ, cũng không phải người Trung Quốc, tôi là học sinh Việt Nam.",
        "Tác giả câu trên là người nước nào?",
        ["Việt Nam", "Trung Quốc", "Mỹ", "Không rõ"],
        "Việt Nam",
        "Cuối câu khẳng định: 我是越南学生 (Tôi là học sinh Việt Nam)."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 她是我的汉语老师 (Tā shì wǒ de Hànyǔ lǎoshī — Cô ấy là giáo viên tiếng Trung của tôi)
  // ==========================================
  {
    id: "hsk1-l4-laoshi",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Cô ấy là giáo viên tiếng Trung của tôi",
    titleZh: "第四课：她是我的汉语老师",
    titlePinyin: "Dì sì kè: Tā shì wǒ de Hànyǔ lǎoshī",
    skillFocus: "writing",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=WNKzPU_W3bE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 4 她是我的汉语老师",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn 谁 (shéi — ai) và 哪 (nǎ — nào): 她是谁？ (Cô ấy là ai?), 你是哪国人？ (Bạn là người nước nào?).",
      "Trợ từ kết cấu 的 (de — của): Biểu thị quan hệ sở hữu hoặc định ngữ. Cấu trúc: Định ngữ + 的 + Danh từ (我的汉语老师 — giáo viên tiếng Trung của tôi).",
      "Trợ từ nghi vấn 呢 (ne — còn... thì sao?): Đặt sau danh từ/đại từ để hỏi ngược lại câu hỏi trước đó. Ví dụ: 我是中国人，你呢？",
    ],
    newWords: [
      {
        hanzi: "她",
        pinyin: "tā",
        partOfSpeech: "Đại từ",
        meaningVi: "cô ấy, chị ấy, bà ấy",
        radical: "女 (Nữ)",
        strokeCount: 6,
      },
      {
        hanzi: "谁",
        pinyin: "shéi",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "ai",
        radical: "讠 (Ngôn)",
        strokeCount: 10,
      },
      {
        hanzi: "的",
        pinyin: "de",
        partOfSpeech: "Trợ từ kết cấu",
        meaningVi: "của (biểu thị sở hữu/định ngữ)",
        radical: "白 (Bạch)",
        strokeCount: 8,
      },
      {
        hanzi: "汉语",
        pinyin: "Hànyǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "tiếng Hán, tiếng Trung",
        radical: "氵 (Chấm thủy)",
        strokeCount: 14,
      },
      {
        hanzi: "哪",
        pinyin: "nǎ",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "nào",
        radical: "口 (Khẩu)",
        strokeCount: 9,
      },
      {
        hanzi: "国",
        pinyin: "guó",
        partOfSpeech: "Danh từ",
        meaningVi: "nước, quốc gia",
        radical: "囗 (Vi)",
        strokeCount: 8,
      },
      {
        hanzi: "呢",
        pinyin: "ne",
        partOfSpeech: "Trợ từ nghi vấn",
        meaningVi: "thế, nhỉ, còn... thì sao?",
        radical: "口 (Khẩu)",
        strokeCount: 8,
      },
      {
        hanzi: "他",
        pinyin: "tā",
        partOfSpeech: "Đại từ",
        meaningVi: "anh ấy, ông ấy",
        radical: "亻 (Nhân đứng)",
        strokeCount: 5,
      },
      {
        hanzi: "同学",
        pinyin: "tóngxué",
        partOfSpeech: "Danh từ",
        meaningVi: "bạn học, bạn cùng lớp",
        radical: "冂 (Quynh)",
        strokeCount: 14,
      },
      {
        hanzi: "朋友",
        pinyin: "péngyou",
        partOfSpeech: "Danh từ",
        meaningVi: "bạn bè, bạn",
        radical: "月 (Nguyệt)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Giới thiệu giáo viên và hỏi quốc tịch",
        lines: [
          {
            speaker: "A",
            zh: "她是谁？",
            pinyin: "Tā shì shéi?",
            vi: "Cô ấy là ai?",
          },
          {
            speaker: "B",
            zh: "她是我的汉语老师，她叫李月。",
            pinyin: "Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.",
            vi: "Cô ấy là giáo viên tiếng Trung của tôi, cô ấy tên là Lý Nguyệt.",
          },
          {
            speaker: "A",
            zh: "你是哪国人？",
            pinyin: "Nǐ shì nǎ guó rén?",
            vi: "Bạn là người nước nào?",
          },
          {
            speaker: "B",
            zh: "我是美国人。你呢？",
            pinyin: "Wǒ shì Měiguórén. Nǐ ne?",
            vi: "Tôi là người Mỹ. Còn bạn thì sao?",
          },
          {
            speaker: "A",
            zh: "我是中国人。",
            pinyin: "Wǒ shì Zhōngguórén.",
            vi: "Tôi là người Trung Quốc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Giới thiệu bạn học và bạn bè",
        lines: [
          {
            speaker: "A",
            zh: "他是谁？",
            pinyin: "Tā shì shéi?",
            vi: "Anh ấy là ai?",
          },
          {
            speaker: "B",
            zh: "他是我同学。",
            pinyin: "Tā shì wǒ tóngxué.",
            vi: "Anh ấy là bạn học của tôi.",
          },
          {
            speaker: "A",
            zh: "她呢？她是你同学吗？",
            pinyin: "Tā ne? Tā shì nǐ tóngxué ma?",
            vi: "Còn cô ấy? Cô ấy có phải bạn học của bạn không?",
          },
          {
            speaker: "B",
            zh: "她不是我同学，她是我朋友。",
            pinyin: "Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.",
            vi: "Cô ấy không phải bạn học của tôi, cô ấy là bạn của tôi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Trợ từ kết cấu 的 (de) biểu thị quan hệ sở hữu",
        formula: "Người sở hữu / Định ngữ + 的 + Danh từ",
        explanationVi:
          "Chữ 的 đặt giữa định ngữ và danh từ trung tâm. Lưu ý: tiếng Trung đặt định ngữ TRƯỚC danh từ (ngược với tiếng Việt). Với quan hệ thân thiết (người thân, bạn bè) có thể lược bỏ 的 (ví dụ: 我朋友).",
        examples: [
          {
            zh: "她是我的汉语老师。",
            pinyin: "Tā shì wǒ de Hànyǔ lǎoshī.",
            vi: "Cô ấy là giáo viên tiếng Trung của tôi.",
          },
          {
            zh: "这是李月的书。",
            pinyin: "Zhè shì Lǐ Yuè de shū.",
            vi: "Đây là sách của Lý Nguyệt.",
          },
        ],
      },
      {
        titleVi: "Câu hỏi tỉnh lược với trợ từ 呢 (ne)",
        formula: "Danh từ / Đại từ + 呢？",
        explanationVi:
          "Dùng 呢 sau danh từ hoặc đại từ để hỏi tiếp về cùng nội dung đã nhắc ở câu trước, tránh lặp lại cả câu hỏi dài.",
        examples: [
          {
            zh: "我叫李月，你呢？",
            pinyin: "Wǒ jiào Lǐ Yuè, nǐ ne?",
            vi: "Tôi tên là Lý Nguyệt, còn bạn thì sao?",
          },
          {
            zh: "他是老师，她呢？",
            pinyin: "Tā shì lǎoshī, tā ne?",
            vi: "Anh ấy là giáo viên, còn cô ấy thì sao?",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk1-l4-q1",
        "她",
        "tā",
        "Cô ấy (Bộ Nữ 女 + 也)",
        "Chữ 她 (6 nét): viết bộ Nữ (女) bên trái trước (3 nét), sau đó viết chữ 也 bên phải (3 nét)."
      ),
      writingStroke(
        "hsk1-l4-q2",
        "国",
        "guó",
        "Quốc gia / Nước (Vào trước đóng sau)",
        "Chữ 国 (8 nét): viết khung ngoài 冂 (sổ trái, ngang gập phải), viết chữ 玉 (ngọc) bên trong, cuối cùng đóng nét ngang đáy."
      ),
      writingOrder(
        "hsk1-l4-q3",
        "Sắp xếp các thẻ từ thành câu hoàn chỉnh: 'Cô ấy là giáo viên tiếng Trung của tôi.'",
        ["汉语老师。", "是", "我的", "她"],
        "她是我的汉语老师。",
        "Tā shì wǒ de Hànyǔ lǎoshī.",
        "Trật tự đúng: Chủ ngữ (她) + 是 + Định ngữ sở hữu (我的) + Danh từ (汉语老师)."
      ),
      writingOrder(
        "hsk1-l4-q4",
        "Sắp xếp các thẻ từ thành câu hỏi: 'Bạn là người nước nào?'",
        ["哪国人？", "是", "你"],
        "你是哪国人？",
        "Nǐ shì nǎ guó rén?",
        "Cấu trúc hỏi quốc tịch chuẩn HSK 1: 你 + 是 + 哪国人？"
      ),
      writingTwoSentences(
        "hsk1-l4-q5",
        "朋友",
        "péngyou",
        "Bạn bè / Bạn",
        "Đặt 2 câu có chứa từ 朋友 (ví dụ: 她是我的中国朋友。 / 他不是我同学，他是我朋友。)."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 她女儿今年二十岁 (Tā nǚ'ér jīnnián èrshí suì — Con gái cô ấy năm nay 20 tuổi)
  // ==========================================
  {
    id: "hsk1-l5-ershisui",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 5,
    title: "Bài 5: Con gái cô ấy năm nay 20 tuổi",
    titleZh: "第五课：她女儿今年二十岁",
    titlePinyin: "Dì wǔ kè: Tā nǚ'ér jīnnián èrshí suì",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=f8DFvv7FiDs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 5 她女儿今年二十岁",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn 几 (jǐ — mấy): Dùng hỏi số lượng nhỏ (thường dưới 10), bắt buộc có lượng từ đứng sau: 你家有几口人？ (Nhà bạn có mấy người?).",
      "Hỏi tuổi: Với trẻ em dùng 几岁 (jǐ suì); với người lớn/người lớn tuổi dùng 多大了 (duō dà le — bao nhiêu tuổi rồi?).",
      "Trợ từ ngữ khí 了 (le) cuối câu: Biểu thị sự thay đổi hoặc tình huống mới xuất hiện. Ví dụ: 李老师今年五十岁了。",
    ],
    newWords: [
      {
        hanzi: "家",
        pinyin: "jiā",
        partOfSpeech: "Danh từ",
        meaningVi: "nhà, gia đình",
        radical: "宀 (Miên)",
        strokeCount: 10,
      },
      {
        hanzi: "有",
        pinyin: "yǒu",
        partOfSpeech: "Động từ",
        meaningVi: "có",
        radical: "月 (Nguyệt)",
        strokeCount: 6,
      },
      {
        hanzi: "口",
        pinyin: "kǒu",
        partOfSpeech: "Lượng từ",
        meaningVi: "người, nhân khẩu (lượng từ cho thành viên gia đình)",
        radical: "口 (Khẩu)",
        strokeCount: 3,
      },
      {
        hanzi: "女儿",
        pinyin: "nǚ'ér",
        partOfSpeech: "Danh từ",
        meaningVi: "con gái",
        radical: "女 (Nữ)",
        strokeCount: 5,
      },
      {
        hanzi: "几",
        pinyin: "jǐ",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "mấy (hỏi số lượng dưới 10)",
        radical: "几 (Kỷ)",
        strokeCount: 2,
      },
      {
        hanzi: "岁",
        pinyin: "suì",
        partOfSpeech: "Lượng từ",
        meaningVi: "tuổi",
        radical: "山 (Sơn)",
        strokeCount: 6,
      },
      {
        hanzi: "了",
        pinyin: "le",
        partOfSpeech: "Trợ từ ngữ khí",
        meaningVi: "rồi (biểu thị sự thay đổi)",
        radical: "乙 (Ất)",
        strokeCount: 2,
      },
      {
        hanzi: "今年",
        pinyin: "jīnnián",
        partOfSpeech: "Danh từ",
        meaningVi: "năm nay",
        radical: "人 (Nhân)",
        strokeCount: 10,
      },
      {
        hanzi: "多",
        pinyin: "duō",
        partOfSpeech: "Phó từ",
        meaningVi: "bao nhiêu (dùng trong 多大 hỏi tuổi)",
        radical: "夕 (Tịch)",
        strokeCount: 6,
      },
      {
        hanzi: "大",
        pinyin: "dà",
        partOfSpeech: "Tính từ",
        meaningVi: "lớn, to (tuổi tác)",
        radical: "大 (Đại)",
        strokeCount: 3,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Hỏi số người trong gia đình và tuổi con gái",
        lines: [
          {
            speaker: "A",
            zh: "你家有几口人？",
            pinyin: "Nǐ jiā yǒu jǐ kǒu rén?",
            vi: "Nhà bạn có mấy người?",
          },
          {
            speaker: "B",
            zh: "我家有三口人。",
            pinyin: "Wǒ jiā yǒu sān kǒu rén.",
            vi: "Nhà tôi có 3 người.",
          },
          {
            speaker: "A",
            zh: "你女儿几岁了？",
            pinyin: "Nǐ nǚ'ér jǐ suì le?",
            vi: "Con gái bạn mấy tuổi rồi?",
          },
          {
            speaker: "B",
            zh: "她今年四岁了。",
            pinyin: "Tā jīnnián sì suì le.",
            vi: "Bé năm nay 4 tuổi rồi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Hỏi tuổi cô giáo và con gái cô",
        lines: [
          {
            speaker: "A",
            zh: "李老师多大了？",
            pinyin: "Lǐ lǎoshī duō dà le?",
            vi: "Cô Lý bao nhiêu tuổi rồi?",
          },
          {
            speaker: "B",
            zh: "她今年五十岁了。",
            pinyin: "Tā jīnnián wǔshí suì le.",
            vi: "Cô ấy năm nay 50 tuổi rồi.",
          },
          {
            speaker: "A",
            zh: "她女儿呢？",
            pinyin: "Tā nǚ'ér ne?",
            vi: "Còn con gái cô ấy thì sao?",
          },
          {
            speaker: "B",
            zh: "她女儿今年二十岁。",
            pinyin: "Tā nǚ'ér jīnnián èrshí suì.",
            vi: "Con gái cô ấy năm nay 20 tuổi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cách hỏi tuổi bằng 几岁了 và 多大了",
        formula: "Chủ ngữ + 几岁了？ (trẻ em)  |  Chủ ngữ + 多大了？ (người lớn)",
        explanationVi:
          "Khi hỏi tuổi trẻ nhỏ dưới 10 tuổi dùng 几岁了; khi hỏi tuổi người lớn hoặc bạn bè dùng 多大了. Khi trả lời tuổi KHÔNG dùng động từ 是, chỉ cần nói trực tiếp: 主语 + 今年 + Số + 岁(了).",
        examples: [
          {
            zh: "你女儿几岁了？— 她今年四岁了。",
            pinyin: "Nǐ nǚ'ér jǐ suì le? — Tā jīnnián sì suì le.",
            vi: "Con gái bạn mấy tuổi rồi? — Bé năm nay 4 tuổi rồi.",
          },
          {
            zh: "李老师多大了？— 她今年五十岁了。",
            pinyin: "Lǐ lǎoshī duō dà le? — Tā jīnnián wǔshí suì le.",
            vi: "Cô Lý bao nhiêu tuổi rồi? — Cô ấy năm nay 50 tuổi rồi.",
          },
        ],
      },
      {
        titleVi: "Số đếm dưới 100 và lượng từ 口 (kǒu)",
        formula: "Chủ ngữ (家) + 有 + Số từ + 口 + 人",
        explanationVi:
          "Lượng từ 口 chuyên dùng để đếm số thành viên trong gia đình. Số đếm từ 11 đến 99 ghép trực tiếp hàng chục + 十 + hàng đơn vị (ví dụ: 20 = 二十, 50 = 五十, 25 = 二十五).",
        examples: [
          {
            zh: "我家有三口人。",
            pinyin: "Wǒ jiā yǒu sān kǒu rén.",
            vi: "Nhà tôi có 3 người.",
          },
          {
            zh: "她女儿今年二十岁。",
            pinyin: "Tā nǚ'ér jīnnián èrshí suì.",
            vi: "Con gái cô ấy năm nay 20 tuổi.",
          },
        ],
      },
    ],
    exercises: [
      listeningDialogue(
        "hsk1-l5-q1",
        "男：你家有几口人？女：我家有三口人。",
        "Nán: Nǐ jiā yǒu jǐ kǒu rén? Nǚ: Wǒ jiā yǒu sān kǒu rén.",
        "Nghe hội thoại và cho biết nhà người nữ có mấy người?",
        ["3 người", "4 người", "5 người", "2 người"],
        "3 người",
        "Người nữ trả lời: 我家有三口人 (sān kǒu rén = 3 người)."
      ),
      listeningMcq(
        "hsk1-l5-q2",
        "她女儿今年四岁了。",
        "Tā nǚ'ér jīnnián sì suì le.",
        "Con gái cô ấy năm nay mấy tuổi?",
        ["4 tuổi", "14 tuổi", "40 tuổi", "10 tuổi"],
        "4 tuổi",
        "四岁了 (sì suì le) = 4 tuổi rồi."
      ),
      listeningDialogue(
        "hsk1-l5-q3",
        "男：李老师多大了？女：她今年五十岁了。",
        "Nán: Lǐ lǎoshī duō dà le? Nǚ: Tā jīnnián wǔshí suì le.",
        "Cô Lý năm nay bao nhiêu tuổi?",
        ["50 tuổi", "15 tuổi", "20 tuổi", "55 tuổi"],
        "50 tuổi",
        "五十岁了 (wǔshí suì le) = 50 tuổi rồi."
      ),
      listeningFill(
        "hsk1-l5-q4",
        "她女儿今年二十岁。",
        "她女儿___二十岁。",
        "Tā nǚ'ér jīnnián èrshí suì.",
        "Nghe và điền từ 2 chữ Hán nghĩa là 'năm nay' vào chỗ trống:",
        "今年",
        "今年 (jīnnián) nghĩa là năm nay."
      ),
      listeningFill(
        "hsk1-l5-q5",
        "你家有几口人？",
        "你家有几___人？",
        "Nǐ jiā yǒu jǐ kǒu rén?",
        "Nghe và điền lượng từ chỉ số người trong gia đình (1 chữ Hán):",
        "口",
        "口 (kǒu) là lượng từ dùng để đếm nhân khẩu trong gia đình."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 我会说汉语 (Wǒ huì shuō Hànyǔ — Tôi biết nói tiếng Trung)
  // ==========================================
  {
    id: "hsk1-l6-huishuo",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 6,
    title: "Bài 6: Tôi biết nói tiếng Trung",
    titleZh: "第六课：我会说汉语",
    titlePinyin: "Dì liù kè: Wǒ huì shuō Hànyǔ",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=2AEBhTxaomU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 6 我会说汉语",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Động từ năng nguyện 会 (huì — biết làm gì thông qua học tập): Khẳng định Chủ ngữ + 会 + Động từ; Phủ định 不会 (bú huì).",
      "Câu vị ngữ tính từ: Chủ ngữ + 很 (hěn) + Tính từ. KHÔNG dùng 是 trước tính từ. Ví dụ: 中国菜很好吃 (Món ăn Trung Quốc rất ngon).",
      "Đại từ nghi vấn 怎么 (zěnme — như thế nào): Đặt trước động từ để hỏi cách thức. Ví dụ: 这个字怎么写？ (Chữ này viết thế nào?).",
    ],
    newWords: [
      {
        hanzi: "会",
        pinyin: "huì",
        partOfSpeech: "Động từ năng nguyện",
        meaningVi: "biết (kỹ năng qua học tập)",
        radical: "人 (Nhân)",
        strokeCount: 6,
      },
      {
        hanzi: "说",
        pinyin: "shuō",
        partOfSpeech: "Động từ",
        meaningVi: "nói",
        radical: "讠 (Ngôn)",
        strokeCount: 9,
      },
      {
        hanzi: "妈妈",
        pinyin: "māma",
        partOfSpeech: "Danh từ",
        meaningVi: "mẹ, má",
        radical: "女 (Nữ)",
        strokeCount: 12,
      },
      {
        hanzi: "菜",
        pinyin: "cài",
        partOfSpeech: "Danh từ",
        meaningVi: "món ăn, rau",
        radical: "艹 (Thảo đầu)",
        strokeCount: 11,
      },
      {
        hanzi: "很",
        pinyin: "hěn",
        partOfSpeech: "Phó từ",
        meaningVi: "rất",
        radical: "彳 (Xích)",
        strokeCount: 9,
      },
      {
        hanzi: "好吃",
        pinyin: "hǎochī",
        partOfSpeech: "Tính từ",
        meaningVi: "ngon (đồ ăn)",
        radical: "女 (Nữ)",
        strokeCount: 12,
      },
      {
        hanzi: "做",
        pinyin: "zuò",
        partOfSpeech: "Động từ",
        meaningVi: "làm, nấu",
        radical: "亻 (Nhân đứng)",
        strokeCount: 11,
      },
      {
        hanzi: "写",
        pinyin: "xiě",
        partOfSpeech: "Động từ",
        meaningVi: "viết",
        radical: "冖 (Mịch)",
        strokeCount: 5,
      },
      {
        hanzi: "汉字",
        pinyin: "Hànzì",
        partOfSpeech: "Danh từ",
        meaningVi: "chữ Hán",
        radical: "氵 (Chấm thủy)",
        strokeCount: 11,
      },
      {
        hanzi: "怎么",
        pinyin: "zěnme",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "như thế nào, làm sao",
        radical: "心 (Tâm)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Nói tiếng Trung và nấu món Trung Quốc",
        lines: [
          {
            speaker: "A",
            zh: "你会说汉语吗？",
            pinyin: "Nǐ huì shuō Hànyǔ ma?",
            vi: "Bạn có biết nói tiếng Trung không?",
          },
          {
            speaker: "B",
            zh: "我会说汉语。",
            pinyin: "Wǒ huì shuō Hànyǔ.",
            vi: "Tôi biết nói tiếng Trung.",
          },
          {
            speaker: "A",
            zh: "你妈妈会说汉语吗？",
            pinyin: "Nǐ māma huì shuō Hànyǔ ma?",
            vi: "Mẹ bạn có biết nói tiếng Trung không?",
          },
          {
            speaker: "B",
            zh: "她不会说。",
            pinyin: "Tā bú huì shuō.",
            vi: "Mẹ tôi không biết nói.",
          },
          {
            speaker: "A",
            zh: "中国菜好吃吗？",
            pinyin: "Zhōngguócài hǎochī ma?",
            vi: "Món ăn Trung Quốc có ngon không?",
          },
          {
            speaker: "B",
            zh: "中国菜很好吃。你会做中国菜吗？",
            pinyin: "Zhōngguócài hěn hǎochī. Nǐ huì zuò Zhōngguócài ma?",
            vi: "Món ăn Trung Quốc rất ngon. Bạn có biết nấu món Trung Quốc không?",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Viết chữ Hán và hỏi cách đọc, cách viết",
        lines: [
          {
            speaker: "A",
            zh: "你会写汉字吗？",
            pinyin: "Nǐ huì xiě Hànzì ma?",
            vi: "Bạn có biết viết chữ Hán không?",
          },
          {
            speaker: "B",
            zh: "我会写。",
            pinyin: "Wǒ huì xiě.",
            vi: "Tôi biết viết.",
          },
          {
            speaker: "A",
            zh: "这个字怎么写？",
            pinyin: "Zhège zì zěnme xiě?",
            vi: "Chữ này viết như thế nào?",
          },
          {
            speaker: "B",
            zh: "对不起，这个字我会读，不会写。",
            pinyin: "Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.",
            vi: "Xin lỗi, chữ này tôi biết đọc, không biết viết.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Động từ năng nguyện 会 (huì) chỉ kỹ năng",
        formula: "Chủ ngữ + 会 / 不会 + Động từ + Tân ngữ",
        explanationVi:
          "会 dùng để diễn tả khả năng làm một việc gì đó nhờ học tập mà có (nói ngoại ngữ, viết chữ Hán, nấu ăn...). Phủ định là 不会 (bú huì).",
        examples: [
          {
            zh: "我会说汉语，也会写汉字。",
            pinyin: "Wǒ huì shuō Hànyǔ, yě huì xiě Hànzì.",
            vi: "Tôi biết nói tiếng Trung, cũng biết viết chữ Hán.",
          },
          {
            zh: "我不会做中国菜。",
            pinyin: "Wǒ bú huì zuò Zhōngguócài.",
            vi: "Tôi không biết nấu món ăn Trung Quốc.",
          },
        ],
      },
      {
        titleVi: "Đại từ nghi vấn 怎么 (zěnme) hỏi cách thức",
        formula: "Chủ ngữ + 怎么 + Động từ?",
        explanationVi:
          "怎么 đứng ngay trước động từ để hỏi cách thực hiện một hành động nào đó (đọc thế nào, viết thế nào, làm thế nào).",
        examples: [
          {
            zh: "这个字怎么读？",
            pinyin: "Zhège zì zěnme dú?",
            vi: "Chữ này đọc như thế nào?",
          },
          {
            zh: "这个汉字怎么写？",
            pinyin: "Zhège Hànzì zěnme xiě?",
            vi: "Chữ Hán này viết như thế nào?",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk1-l6-q1",
        "你会说汉语吗？",
        "Nǐ huì shuō Hànyǔ ma?",
        "Thu âm câu hỏi khả năng nói tiếng Trung (chú ý âm cuốn lưỡi sh ở 说):",
        ["Âm cuốn lưỡi sh (shuō)", "Thanh 4 (huì, Hàn)", "Thanh nhẹ (ma)"],
        "Đọc tròn môi và cuốn lưỡi ở 说 (shuō), giữ thanh 1 ngang cao."
      ),
      speakingShadowing(
        "hsk1-l6-q2",
        "我会说汉语，我妈妈不会说。",
        "Wǒ huì shuō Hànyǔ, wǒ māma bú huì shuō.",
        "Thu âm câu khẳng định và phủ định với 会 / 不会 (chú ý biến điệu 不 → bú):",
        ["Biến điệu 不 → bú (bú huì)", "Thanh nhẹ (ma trong māma)"],
        "Chữ 不 đứng trước 会 (thanh 4) phải đọc thành thanh 2: bú huì."
      ),
      speakingShadowing(
        "hsk1-l6-q3",
        "中国菜很好吃。",
        "Zhōngguócài hěn hǎochī.",
        "Thu âm câu khen món ăn ngon (chú ý biến điệu 很 hěn + 好 hǎo → hén hǎo):",
        ["Biến điệu Thanh 3 (hén hǎo)", "Âm bật hơi c (cài)", "Âm cuốn lưỡi zh, ch"],
        "很 (hěn) đi trước 好 (hǎo) biến điệu thành thanh 2: hén hǎochī."
      ),
      speakingShadowing(
        "hsk1-l6-q4",
        "这个字怎么写？",
        "Zhège zì zěnme xiě?",
        "Thu âm câu hỏi cách viết chữ Hán:",
        ["Âm đầu lưỡi z (zì, zěn)", "Âm cuốn lưỡi zh (zhè)", "Thanh nhẹ (ge, me)"],
        "Phân biệt rõ âm cuốn lưỡi zh ở 这 (zhè) và âm phẳng lưỡi z ở 字 (zì), 怎 (zěn)."
      ),
      speakingShadowing(
        "hsk1-l6-q5",
        "对不起，这个字我会读，不会写。",
        "Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.",
        "Thu âm câu trả lời dài từ Bài khóa 3:",
        ["Thanh 2 lên giọng (dú)", "Biến điệu 不 → bú (bú huì)", "Thanh 3 (xiě)"],
        "Ngắt nhịp nhẹ sau 对不起 và sau 会读 để câu nói tự nhiên."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 今天几号 (Jīntiān jǐ hào — Hôm nay ngày mấy?)
  // ==========================================
  {
    id: "hsk1-l7-jihao",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 7,
    title: "Bài 7: Hôm nay ngày mấy?",
    titleZh: "第七课：今天几号",
    titlePinyin: "Dì qī kè: Jīntiān jǐ hào",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=MDNnjsSX0DU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 7 今天几号",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Trật tự thời gian trong tiếng Trung đi từ LỚN đến NHỎ: Năm (年) → Tháng (月) → Ngày (号/日) → Thứ (星期). Ví dụ: 九月一号星期三.",
      "Câu vị ngữ danh từ: Khi nói ngày tháng, thứ, tuổi tác có thể lược bỏ động từ 是. Ví dụ: 今天九月一号 (Hôm nay ngày 1 tháng 9).",
      "Câu liên động với 去 (qù — đi): Chủ ngữ + 去 + Địa điểm + Làm gì. Ví dụ: 明天我去学校看书 (Ngày mai tôi đi trường đọc sách).",
    ],
    newWords: [
      {
        hanzi: "请",
        pinyin: "qǐng",
        partOfSpeech: "Động từ",
        meaningVi: "mời, xin",
        radical: "讠 (Ngôn)",
        strokeCount: 10,
      },
      {
        hanzi: "问",
        pinyin: "wèn",
        partOfSpeech: "Động từ",
        meaningVi: "hỏi",
        radical: "门 (Môn)",
        strokeCount: 6,
      },
      {
        hanzi: "今天",
        pinyin: "jīntiān",
        partOfSpeech: "Danh từ",
        meaningVi: "hôm nay",
        radical: "人 (Nhân)",
        strokeCount: 8,
      },
      {
        hanzi: "号",
        pinyin: "hào",
        partOfSpeech: "Danh từ",
        meaningVi: "ngày (dùng trong khẩu ngữ)",
        radical: "口 (Khẩu)",
        strokeCount: 5,
      },
      {
        hanzi: "月",
        pinyin: "yuè",
        partOfSpeech: "Danh từ",
        meaningVi: "tháng",
        radical: "月 (Nguyệt)",
        strokeCount: 4,
      },
      {
        hanzi: "星期",
        pinyin: "xīngqī",
        partOfSpeech: "Danh từ",
        meaningVi: "tuần, thứ (星期一 đến 星期六, Chủ nhật: 星期日/天)",
        radical: "日 (Nhật)",
        strokeCount: 21,
      },
      {
        hanzi: "昨天",
        pinyin: "zuótiān",
        partOfSpeech: "Danh từ",
        meaningVi: "hôm qua",
        radical: "日 (Nhật)",
        strokeCount: 13,
      },
      {
        hanzi: "明天",
        pinyin: "míngtiān",
        partOfSpeech: "Danh từ",
        meaningVi: "ngày mai",
        radical: "日 (Nhật)",
        strokeCount: 12,
      },
      {
        hanzi: "去",
        pinyin: "qù",
        partOfSpeech: "Động từ",
        meaningVi: "đi",
        radical: "土 (Thổ)",
        strokeCount: 5,
      },
      {
        hanzi: "学校",
        pinyin: "xuéxiào",
        partOfSpeech: "Danh từ",
        meaningVi: "trường học",
        radical: "子 (Tử)",
        strokeCount: 18,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Hỏi ngày tháng và thứ trong tuần",
        lines: [
          {
            speaker: "A",
            zh: "请问，今天几号？",
            pinyin: "Qǐngwèn, jīntiān jǐ hào?",
            vi: "Xin hỏi, hôm nay ngày mấy?",
          },
          {
            speaker: "B",
            zh: "今天九月一号。",
            pinyin: "Jīntiān jiǔyuè yī hào.",
            vi: "Hôm nay ngày 1 tháng 9.",
          },
          {
            speaker: "A",
            zh: "今天星期几？",
            pinyin: "Jīntiān xīngqī jǐ?",
            vi: "Hôm nay thứ mấy?",
          },
          {
            speaker: "B",
            zh: "星期三。",
            pinyin: "Xīngqīsān.",
            vi: "Thứ Tư.",
          },
          {
            speaker: "A",
            zh: "昨天是几月几号？",
            pinyin: "Zuótiān shì jǐ yuè jǐ hào?",
            vi: "Hôm qua là ngày mấy tháng mấy?",
          },
          {
            speaker: "B",
            zh: "昨天是八月三十一号，星期二。",
            pinyin: "Zuótiān shì bāyuè sānshíyī hào, xīngqī'èr.",
            vi: "Hôm qua là ngày 31 tháng 8, thứ Ba.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Kế hoạch ngày mai đi trường học",
        lines: [
          {
            speaker: "A",
            zh: "明天星期六，你去学校吗？",
            pinyin: "Míngtiān xīngqīliù, nǐ qù xuéxiào ma?",
            vi: "Ngày mai thứ Bảy, bạn có đi học không?",
          },
          {
            speaker: "B",
            zh: "我去学校。",
            pinyin: "Wǒ qù xuéxiào.",
            vi: "Tôi có đi đến trường.",
          },
          {
            speaker: "A",
            zh: "你去学校做什么？",
            pinyin: "Nǐ qù xuéxiào zuò shénme?",
            vi: "Bạn đến trường làm gì?",
          },
          {
            speaker: "B",
            zh: "我去学校看书。",
            pinyin: "Wǒ qù xuéxiào kàn shū.",
            vi: "Tôi đến trường đọc sách.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cách diễn đạt ngày, tháng, thứ trong tiếng Trung",
        formula: "Số + 月 (tháng) + Số + 号/日 (ngày) + 星期 + Số (thứ)",
        explanationVi:
          "Thứ trong tiếng Trung: 星期一 (Thứ Hai) → 星期六 (Thứ Bảy), riêng Chủ nhật là 星期日 hoặc 星期天. Lưu ý thứ Hai là số 1 (一), lệch 1 đơn vị so với tiếng Việt.",
        examples: [
          {
            zh: "今天九月一号，星期三。",
            pinyin: "Jīntiān jiǔyuè yī hào, xīngqīsān.",
            vi: "Hôm nay ngày 1 tháng 9, thứ Tư.",
          },
          {
            zh: "明天九月二号，星期四。",
            pinyin: "Míngtiān jiǔyuè èr hào, xīngqīsì.",
            vi: "Ngày mai ngày 2 tháng 9, thứ Năm.",
          },
        ],
      },
      {
        titleVi: "Câu liên động biểu thị mục đích với 去 (qù)",
        formula: "Chủ ngữ + 去 + (Địa điểm) + Động từ 2 + Tân ngữ",
        explanationVi:
          "Khi hai động từ cùng thuộc một chủ ngữ nối tiếp nhau, động từ thứ hai biểu thị mục đích của động từ thứ nhất (去).",
        examples: [
          {
            zh: "我去学校看书。",
            pinyin: "Wǒ qù xuéxiào kàn shū.",
            vi: "Tôi đến trường đọc sách.",
          },
          {
            zh: "我去中国学习汉语。",
            pinyin: "Wǒ qù Zhōngguó xuéxí Hànyǔ.",
            vi: "Tôi đi Trung Quốc học tiếng Trung.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk1-l7-q1",
        "今天九月一号，星期三。昨天八月三十一号，星期二。",
        "Jīntiān jiǔyuè yī hào, xīngqīsān. Zuótiān bāyuè sānshíyī hào, xīngqī'èr.",
        "Hôm nay ngày 1 tháng 9, thứ Tư. Hôm qua ngày 31 tháng 8, thứ Ba.",
        "Hôm nay là thứ mấy theo tiếng Việt?",
        ["Thứ Tư", "Thứ Ba", "Thứ Hai", "Thứ Năm"],
        "Thứ Tư",
        "星期三 (xīngqīsān) trong tiếng Trung tương ứng với Thứ Tư trong tiếng Việt."
      ),
      readingComp(
        "hsk1-l7-q2",
        "明天星期六，我不去学校，我去朋友家看书。",
        "Míngtiān xīngqīliù, wǒ bú qù xuéxiào, wǒ qù péngyou jiā kàn shū.",
        "Ngày mai thứ Bảy, tôi không đến trường, tôi đến nhà bạn đọc sách.",
        "Ngày mai nhân vật 'tôi' sẽ đi đâu?",
        ["Đến nhà bạn", "Đến trường học", "Đi Trung Quốc", "Ở nhà ngủ"],
        "Đến nhà bạn",
        "Đoạn văn nêu rõ: 我去朋友家看书 (Tôi đến nhà bạn đọc sách)."
      ),
      readingComp(
        "hsk1-l7-q3",
        "A：请问，明天是几月几号？ B：明天是十月十号，星期天。",
        "A: Qǐngwèn, míngtiān shì jǐ yuè jǐ hào? B: Míngtiān shì shíyuè shí hào, xīngqītiān.",
        "A: Xin hỏi, ngày mai là ngày mấy tháng mấy? B: Ngày mai là ngày 10 tháng 10, Chủ nhật.",
        "Ngày mai là thứ mấy?",
        ["Chủ nhật", "Thứ Bảy", "Thứ Hai", "Thứ Sáu"],
        "Chủ nhật",
        "星期天 (xīngqītiān) hoặc 星期日 (xīngqīrì) nghĩa là Chủ nhật."
      ),
      readingComp(
        "hsk1-l7-q4",
        "我昨天去学校学习汉语，明天我去学校看书。",
        "Wǒ zuótiān qù xuéxiào xuéxí Hànyǔ, míngtiān wǒ qù xuéxiào kàn shū.",
        "Hôm qua tôi đến trường học tiếng Trung, ngày mai tôi đến trường đọc sách.",
        "Hôm qua nhân vật 'tôi' đến trường để làm gì?",
        ["Học tiếng Trung", "Đọc sách", "Nấu ăn", "Gặp bạn"],
        "Học tiếng Trung",
        "Câu đầu ghi rõ: 昨天去学校学习汉语 (Hôm qua đến trường học tiếng Trung)."
      ),
      readingComp(
        "hsk1-l7-q5",
        "今天是五月五号，星期四。明天是五月六号，星期五。",
        "Jīntiān shì wǔyuè wǔ hào, xīngqīsì. Míngtiān shì wǔyuè liù hào, xīngqīwǔ.",
        "Hôm nay là ngày 5 tháng 5, thứ Năm. Ngày mai là ngày 6 tháng 5, thứ Sáu.",
        "Ngày 6 tháng 5 là thứ mấy?",
        ["Thứ Sáu", "Thứ Năm", "Thứ Bảy", "Thứ Tư"],
        "Thứ Sáu",
        "星期五 (xīngqīwǔ) tương ứng với Thứ Sáu trong tiếng Việt."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 我想喝茶 (Wǒ xiǎng hē chá — Tôi muốn uống trà)
  // ==========================================
  {
    id: "hsk1-l8-hecha",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    lessonNumber: 8,
    title: "Bài 8: Tôi muốn uống trà",
    titleZh: "第八课：我想喝茶",
    titlePinyin: "Dì bā kè: Wǒ xiǎng hē chá",
    skillFocus: "writing",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "THÀNH LUÂN",
    youtubeUrl: "https://www.youtube.com/watch?v=9OQI2UK-qX0",
    defaultSearchQuery: "Giáo trình chuẩn HSK 1 Bài 8 我想喝茶",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Động từ năng nguyện 想 (xiǎng — muốn): Diễn tả nguyện vọng, dự định. Cấu trúc: Chủ ngữ + 想 + Động từ + Tân ngữ. Ví dụ: 我想喝茶。",
      "Đại từ nghi vấn 多少 (duōshao — bao nhiêu): Dùng hỏi số lượng lớn hơn 10 hoặc hỏi giá tiền (多少钱 — bao nhiêu tiền?). Sau 多少 có thể lược bỏ lượng từ.",
      "Lượng từ 个 (gè — cái, người) và 口 (kǒu), 块 (kuài — tệ/đồng tiền Trung Quốc). Ví dụ: 一个杯子二十八块钱。",
    ],
    newWords: [
      {
        hanzi: "想",
        pinyin: "xiǎng",
        partOfSpeech: "Động từ năng nguyện",
        meaningVi: "muốn, nghĩ, nhớ",
        radical: "心 (Tâm)",
        strokeCount: 13,
      },
      {
        hanzi: "喝",
        pinyin: "hē",
        partOfSpeech: "Động từ",
        meaningVi: "uống",
        radical: "口 (Khẩu)",
        strokeCount: 12,
      },
      {
        hanzi: "茶",
        pinyin: "chá",
        partOfSpeech: "Danh từ",
        meaningVi: "trà",
        radical: "艹 (Thảo đầu)",
        strokeCount: 9,
      },
      {
        hanzi: "吃",
        pinyin: "chī",
        partOfSpeech: "Động từ",
        meaningVi: "ăn",
        radical: "口 (Khẩu)",
        strokeCount: 6,
      },
      {
        hanzi: "米饭",
        pinyin: "mǐfàn",
        partOfSpeech: "Danh từ",
        meaningVi: "cơm",
        radical: "米 (Mễ)",
        strokeCount: 13,
      },
      {
        hanzi: "下午",
        pinyin: "xiàwǔ",
        partOfSpeech: "Danh từ",
        meaningVi: "buổi chiều",
        radical: "一 (Nhất)",
        strokeCount: 7,
      },
      {
        hanzi: "商店",
        pinyin: "shāngdiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "cửa hàng, tiệm",
        radical: "口 (Khẩu)",
        strokeCount: 19,
      },
      {
        hanzi: "买",
        pinyin: "mǎi",
        partOfSpeech: "Động từ",
        meaningVi: "mua",
        radical: "乙 (Ất)",
        strokeCount: 6,
      },
      {
        hanzi: "杯子",
        pinyin: "bēizi",
        partOfSpeech: "Danh từ",
        meaningVi: "cốc, ly, tách",
        radical: "木 (Mộc)",
        strokeCount: 11,
      },
      {
        hanzi: "多少钱",
        pinyin: "duōshao qián",
        partOfSpeech: "Cụm từ nghi vấn",
        meaningVi: "bao nhiêu tiền",
        radical: "钅 (Kim)",
        strokeCount: 20,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1 & 2: Gọi đồ uống, ăn cơm và kế hoạch buổi chiều",
        lines: [
          {
            speaker: "A",
            zh: "你想喝什么？",
            pinyin: "Nǐ xiǎng hē shénme?",
            vi: "Bạn muốn uống gì?",
          },
          {
            speaker: "B",
            zh: "我想喝茶。",
            pinyin: "Wǒ xiǎng hē chá.",
            vi: "Tôi muốn uống trà.",
          },
          {
            speaker: "A",
            zh: "你想吃什么？",
            pinyin: "Nǐ xiǎng chī shénme?",
            vi: "Bạn muốn ăn gì?",
          },
          {
            speaker: "B",
            zh: "我想吃米饭。",
            pinyin: "Wǒ xiǎng chī mǐfàn.",
            vi: "Tôi muốn ăn cơm.",
          },
          {
            speaker: "A",
            zh: "下午你想做什么？",
            pinyin: "Xiàwǔ nǐ xiǎng zuò shénme?",
            vi: "Buổi chiều bạn muốn làm gì?",
          },
          {
            speaker: "B",
            zh: "下午我想去商店买一个杯子。",
            pinyin: "Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi yí gè bēizi.",
            vi: "Buổi chiều tôi muốn đi cửa hàng mua một cái cốc.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 3: Hỏi giá tiền tại cửa hàng",
        lines: [
          {
            speaker: "A",
            zh: "你好！这个杯子多少钱？",
            pinyin: "Nǐ hǎo! Zhège bēizi duōshao qián?",
            vi: "Xin chào! Cái cốc này bao nhiêu tiền?",
          },
          {
            speaker: "B",
            zh: "二十八块。",
            pinyin: "Èrshíbā kuài.",
            vi: "28 tệ.",
          },
          {
            speaker: "A",
            zh: "那个杯子多少钱？",
            pinyin: "Nàge bēizi duōshao qián?",
            vi: "Cái cốc kia bao nhiêu tiền?",
          },
          {
            speaker: "B",
            zh: "那个杯子十八块钱。",
            pinyin: "Nàge bēizi shíbā kuài qián.",
            vi: "Cái cốc kia 18 tệ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Động từ năng nguyện 想 (xiǎng — muốn)",
        formula: "Chủ ngữ + 想 / 不想 + Động từ + Tân ngữ",
        explanationVi:
          "想 đặt trước động từ để biểu thị mong muốn hoặc dự định làm việc gì đó. Phủ định là 不想 (bù xiǎng — không muốn).",
        examples: [
          {
            zh: "我想喝茶，不想喝水。",
            pinyin: "Wǒ xiǎng hē chá, bù xiǎng hē shuǐ.",
            vi: "Tôi muốn uống trà, không muốn uống nước.",
          },
          {
            zh: "下午我想去商店买杯子。",
            pinyin: "Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi bēizi.",
            vi: "Buổi chiều tôi muốn đi cửa hàng mua cốc.",
          },
        ],
      },
      {
        titleVi: "Cách hỏi và nói giá tiền với 多少钱 và 块",
        formula: "Vật phẩm + 多少钱？  |  Số tiền + 块 (钱)",
        explanationVi:
          "Dùng 多少钱 (duōshao qián) để hỏi giá. Trong khẩu ngữ, đơn vị tiền tệ Trung Quốc (Nhân dân tệ) dùng 块 (kuài), chữ 钱 (qián) ở cuối có thể lược bỏ.",
        examples: [
          {
            zh: "这个杯子多少钱？— 二十八块。",
            pinyin: "Zhège bēizi duōshao qián? — Èrshíbā kuài.",
            vi: "Cái cốc này bao nhiêu tiền? — 28 tệ.",
          },
          {
            zh: "那本书十五块钱。",
            pinyin: "Nà běn shū shíwǔ kuài qián.",
            vi: "Quyển sách kia 15 tệ.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk1-l8-q1",
        "茶",
        "chá",
        "Trà (Bộ Thảo đầu 艹 + 人 + 木)",
        "Chữ 茶 (9 nét): viết bộ Thảo đầu (艹) trên cùng, tiếp theo là chữ 人 (phẩy trước mác sau), cuối cùng là chữ 木 ở dưới."
      ),
      writingStroke(
        "hsk1-l8-q2",
        "买",
        "mǎi",
        "Mua (Ngang móc trên + chữ 头 ở dưới)",
        "Chữ 买 (6 nét): nét 1 ngang móc (乛), sau đó viết hai nét chấm, nét ngang, phẩy và chấm cuối cùng."
      ),
      writingOrder(
        "hsk1-l8-q3",
        "Sắp xếp các thẻ từ thành câu hoàn chỉnh: 'Buổi chiều tôi muốn đi cửa hàng mua một cái cốc.'",
        ["买一个杯子。", "去商店", "想", "我", "下午"],
        "下午我想去商店买一个杯子。",
        "Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi yí gè bēizi.",
        "Trật tự chuẩn: Thời gian (下午) + Chủ ngữ (我) + 想 + 去 + Địa điểm (商店) + Mục đích (买一个杯子)."
      ),
      writingOrder(
        "hsk1-l8-q4",
        "Sắp xếp các thẻ từ thành câu hỏi giá tiền: 'Cái cốc này bao nhiêu tiền?'",
        ["多少钱？", "杯子", "这个"],
        "这个杯子多少钱？",
        "Zhège bēizi duōshao qián?",
        "Cấu trúc hỏi giá: Đại từ chỉ thị + Lượng từ + Danh từ (这个杯子) + 多少钱？"
      ),
      writingTwoSentences(
        "hsk1-l8-q5",
        "想",
        "xiǎng",
        "Muốn / Dự định",
        "Đặt 2 câu có chứa từ 想 (ví dụ: 我想喝茶，我想吃米饭。 / 明天下午我想去学校看书。)."
      ),
    ],
  },
];
