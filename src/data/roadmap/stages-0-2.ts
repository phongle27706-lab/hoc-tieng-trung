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

export const STAGES_0_TO_2_SESSIONS: StudySession[] = [
  // ==========================================
  // STAGE 0 — MỨC 0 (HSK0: Nhập môn Pinyin, 4 Thanh điệu, Biến điệu, 50 Bộ thủ)
  // ==========================================
  {
    id: "hsk0-s1-listening-pinyin-tones",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "basic",
    title: "Nghe phân biệt 21 Thanh mẫu, 36 Vận mẫu & 4 Thanh điệu",
    titleZh: "汉语拼音与四声听力训练",
    titlePinyin: "Hànyǔ Pīnyīn yǔ sìshēng tīnglì xùnliàn",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "TTB Chinese",
    youtubeUrl: "https://www.youtube.com/watch?v=-rOIWAHYXB4",
    defaultSearchQuery: "TTB Chinese phát âm Pinyin 4 thanh điệu tiếng Trung",
    grammarNotesVi: [
      "Tiếng Trung phổ thông có 4 thanh điệu chính: Thanh 1 (ngang cao ā), Thanh 2 (lên giọng á), Thanh 3 (trầm xuống rồi lên ǎ), Thanh 4 (dứt khoát xuống à) và Thanh nhẹ (khinh thanh).",
      "Quy tắc biến điệu Thanh 3: Khi hai Thanh 3 đi liền nhau (3 + 3), chữ đầu đọc thành Thanh 2 (2 + 3). Ví dụ: 你好 (nǐ hǎo → ní hǎo).",
      "Phân biệt nhóm âm bật hơi (p, t, k, q, ch, c) với âm không bật hơi (b, d, g, j, zh, z).",
    ],
    exercises: [
      listeningMcq(
        "hsk0-s1-q1",
        "你好！",
        "Nǐ hǎo!",
        "Nghe âm thanh và chọn nghĩa tiếng Việt đúng của câu chào:",
        ["Xin chào!", "Tạm biệt!", "Cảm ơn!", "Xin lỗi!"],
        "Xin chào!",
        "你好 (Nǐ hǎo - biến điệu đọc là ní hǎo) là câu chào hỏi phổ biến nhất trong tiếng Trung."
      ),
      listeningFill(
        "hsk0-s1-q2",
        "谢谢你！",
        "___你！",
        "Xièxie nǐ!",
        "Nghe và điền từ còn thiếu vào chỗ trống (2 chữ Hán nghĩa là 'Cảm ơn'):",
        "谢谢",
        "谢谢你 (Xièxie nǐ) nghĩa là Cảm ơn bạn. Chữ 谢 thứ hai đọc thanh nhẹ."
      ),
      listeningDialogue(
        "hsk0-s1-q3",
        "男：你好，我是越南人。女：欢迎你！",
        "Nán: Nǐ hǎo, wǒ shì Yuènánrén. Nǚ: Huānyíng nǐ!",
        "Nghe hội thoại và cho biết người nam đến từ quốc gia nào?",
        ["Việt Nam", "Trung Quốc", "Nhật Bản", "Hàn Quốc"],
        "Việt Nam",
        "Người nam nói: 我是越南人 (Wǒ shì Yuènánrén — Tôi là người Việt Nam)."
      ),
      listeningMcq(
        "hsk0-s1-q4",
        "一杯温水",
        "Yì bēi wēnshuǐ",
        "Nghe cụm từ và chọn đáp án khớp với nội dung âm thanh:",
        ["Một cốc nước ấm", "Một ly trà sữa", "Một bát phở", "Một tách cà phê"],
        "Một cốc nước ấm",
        "一杯温水 (Yì bēi wēnshuǐ): Một cốc nước ấm. Chữ 一 đứng trước thanh 1 đọc biến điệu thành thanh 4 (yì)."
      ),
      listeningFill(
        "hsk0-s1-q5",
        "再见！",
        "___！",
        "Zàijiàn!",
        "Nghe và điền từ chào tạm biệt bằng chữ Hán:",
        "再见",
        "再见 (Zàijiàn — cả hai chữ đều mang Thanh 4) nghĩa là Tạm biệt / Hẹn gặp lại."
      ),
    ],
  },
  {
    id: "hsk0-s2-speaking-sandhi-pronunciation",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "basic",
    title: "Khẩu hình âm bật hơi, cuốn lưỡi & Biến điệu 一 / 不",
    titleZh: "送气音、翘舌音与变调口语跟读",
    titlePinyin: "Sòngqìyīn, qiàoshéyīn yǔ biàndiào kǒuyǔ gēndú",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Học Tiếng Trung Cầm Xu",
    youtubeUrl: "https://www.youtube.com/watch?v=EVnxU8WkNSA",
    defaultSearchQuery: "Học Tiếng Trung Cầm Xu phát âm chuẩn bài 1",
    grammarNotesVi: [
      "Biến điệu của 不 (bù): Đứng trước Thanh 4 thì đọc thành Thanh 2 (bú). Ví dụ: 不客气 (bú kèqi), 不对 (bú duì).",
      "Biến điệu của 一 (yī): Đứng trước Thanh 4 đọc thành Thanh 2 (yí gè); đứng trước Thanh 1, 2, 3 đọc thành Thanh 4 (yì bēi, yì nián, yì běn).",
      "Âm cuốn lưỡi zh, ch, sh, r: Đầu lưỡi cong chạm ngạc cứng phía trên.",
    ],
    exercises: [
      speakingShadowing(
        "hsk0-s2-q1",
        "你好，很高兴认识你！",
        "Nǐ hǎo, hěn gāoxìng rènshi nǐ!",
        "Thu âm đọc to câu chào hỏi và làm quen (chú ý biến điệu nǐ hǎo → ní hǎo):",
        ["Thanh 3 biến điệu (ní hǎo)", "Âm mặt lưỡi x, q", "Âm cuốn lưỡi sh, r"],
        "Đọc rõ biến điệu hai thanh 3 ở 你好 và giữ thanh 4 dứt khoát ở 高兴 (gāoxìng)."
      ),
      speakingShadowing(
        "hsk0-s2-q2",
        "不客气，这是我应该做的。",
        "Bú kèqi, zhè shì wǒ yīnggāi zuò de.",
        "Thu âm câu đáp lễ lịch sự (chú ý 不 biến điệu thành bú trước 客 thanh 4):",
        ["Biến điệu 不 → bú", "Âm bật hơi k (kè)", "Âm cuốn lưỡi zh, sh"],
        "不客气 đọc là 'bú kèqi' (chữ 气 đọc thanh nhẹ)."
      ),
      speakingShadowing(
        "hsk0-s2-q3",
        "请给我一杯温水。",
        "Qǐng gěi wǒ yì bēi wēnshuǐ.",
        "Luyện đọc cụm 3 thanh 3 liên tiếp 请给我 (qǐng gěi wǒ → qíng géi wǒ):",
        ["3 Thanh 3 liên tiếp", "Biến điệu 一 → yì", "Âm bật hơi q (qǐng)"],
        "Khi 3 thanh 3 đi liền (请给我), hai chữ đầu đọc nâng lên thanh 2."
      ),
      speakingShadowing(
        "hsk0-s2-q4",
        "我是越南人，我在学中文。",
        "Wǒ shì Yuènánrén, wǒ zài xué Zhōngwén.",
        "Thu âm câu giới thiệu quốc tịch và việc học tiếng Trung:",
        ["Vận mẫu üe (Yuè)", "Âm cuốn lưỡi sh, r, zh", "Thanh 2 lên giọng (nán, rén, xué, wén)"],
        "Chú ý tròn môi ở âm 越 (Yuè) và cuốn lưỡi rõ ở chữ 中 (Zhōng)."
      ),
    ],
  },
  {
    id: "hsk0-s3-reading-radicals-numbers",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "advanced",
    title: "Nhận diện 50 Bộ thủ cốt lõi, Chữ tượng hình & Số đếm",
    titleZh: "五十个核心偏旁部首与数字认读",
    titlePinyin: "Wǔshí gè héxīn piānpáng bùshǒu yǔ shùzì rèndú",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "DẬY HỌC TIẾNG TRUNG ĐI",
    youtubeUrl: "https://www.youtube.com/watch?v=x99c35Y9pZY",
    defaultSearchQuery: "DẬY HỌC TIẾNG TRUNG ĐI bài 1 chào hỏi từ vựng",
    grammarNotesVi: [
      "Bộ thủ cho biết trường nghĩa của chữ Hán: 亻(Nhân đứng - người: 你, 他), 氵(Chấm thủy - nước: 河, 海), 口 (Khẩu - miệng/nói: 吃, 喝), 女 (Nữ - phụ nữ: 她, 妈, 好).",
      "Bộ 讠(Ngôn - lời nói: 请, 谢, 说, 读), 钅(Kim - kim loại/tiền: 钱, 银), 艹 (Thảo đầu - cây cỏ: 茶, 花).",
      "Ghép số đếm từ 1 đến 99 chỉ cần 10 chữ cơ bản: 一, 二, 三, 四, 五, 六, 七, 八, 九, 十.",
    ],
    exercises: [
      readingComp(
        "hsk0-s3-q1",
        "我家有四口人：爸爸、妈妈、姐姐和我。爸爸和妈妈喝茶，我和姐姐喝水。",
        "Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Bàba hé māma hē chá, wǒ hé jiějie hē shuǐ.",
        "Nhà tôi có 4 người: bố, mẹ, chị gái và tôi. Bố và mẹ uống trà, tôi và chị gái uống nước.",
        "Gia đình nhân vật 'tôi' có tất cả mấy người?",
        ["4 người", "3 người", "5 người", "6 người"],
        "4 người",
        "Trong câu đầu tiên có nêu rõ: 我家有四口人 (Nhà tôi có 4 nhân khẩu)."
      ),
      readingComp(
        "hsk0-s3-q2",
        "“她、妈、姐、好”这四个汉字都有“女”字旁。在汉字里，“女”字旁通常和女性有关。",
        "“Tā, mā, jiě, hǎo” zhè sì gè Hànzì dōu yǒu “nǚ” zìpáng. Zài Hànzì lǐ, “nǚ” zìpáng tōngcháng hé nǚxìng yǒuguān.",
        "Bốn chữ Hán '她, 妈, 姐, 好' đều có bộ Nữ (女). Trong chữ Hán, bộ Nữ thường liên quan đến nữ giới.",
        "Các chữ '她、妈、姐、好' đều có chung bộ thủ nào?",
        ["Bộ Nữ (女)", "Bộ Khẩu (口)", "Bộ Nhân đứng (亻)", "Bộ Thủy (水)"],
        "Bộ Nữ (女)",
        "Cả 4 chữ 她 (cô ấy), 妈 (mẹ), 姐 (chị gái), 好 (tốt) đều chứa bộ Nữ (女) ở bên trái."
      ),
      readingComp(
        "hsk0-s3-q3",
        "今天是八月十日。早上八点我去学校，下午四点回家。",
        "Jīntiān shì bāyuè shí rì. Zǎoshang bā diǎn wǒ qù xuéxiào, xiàwǔ sì diǎn huí jiā.",
        "Hôm nay là ngày 10 tháng 8. Sáng 8 giờ tôi đi học, chiều 4 giờ về nhà.",
        "Nhân vật trong đoạn văn về nhà lúc mấy giờ chiều?",
        ["4 giờ chiều", "8 giờ sáng", "10 giờ trưa", "6 giờ tối"],
        "4 giờ chiều",
        "Đoạn văn ghi rõ: 下午四点回家 (Chiều 4 giờ về nhà)."
      ),
      readingComp(
        "hsk0-s3-q4",
        "这杯奶茶十五块，那杯咖啡二十块。我买一杯奶茶和一杯水。",
        "Zhè bēi nǎichá shíwǔ kuài, nà bēi kāfēi èrshí kuài. Wǒ mǎi yì bēi nǎichá hé yì bēi shuǐ.",
        "Ly trà sữa này 15 tệ, ly cà phê kia 20 tệ. Tôi mua một ly trà sữa và một cốc nước.",
        "Một ly trà sữa trong đoạn văn có giá bao nhiêu tiền?",
        ["15 tệ", "20 tệ", "10 tệ", "25 tệ"],
        "15 tệ",
        "这杯奶茶十五块 (shíwǔ kuài = 15 tệ)."
      ),
    ],
  },
  {
    id: "hsk0-s4-writing-strokes-radicals",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "advanced",
    title: "8 Nét cơ bản, 7 Quy tắc bút thuận & Đặt câu chữ đơn",
    titleZh: "汉字基本笔画、笔顺规则与造句",
    titlePinyin: "Hànzì jīběn bǐhuà, bǐshùn guīzé yǔ zàojù",
    skillFocus: "writing",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Thầy Thắng",
    youtubeUrl: "https://www.youtube.com/watch?v=iMYYBaxKrDQ",
    defaultSearchQuery: "Tiếng Trung Thầy Thắng hướng dẫn viết chữ Hán bài 1 HSK1",
    grammarNotesVi: [
      "8 nét cơ bản (永字八法): Điểm (丶 Chấm), Hoành (一 Ngang), Thụ (丨 Sổ), Phiệt (丿 Phẩy), Nại (乀 Mác), Đề (㇀ Hất), Chiết (𠃍 Gập), Câu (亅 Móc).",
      "7 Quy tắc bút thuận vàng: Ngang trước Sổ sau (十); Phẩy trước Mác sau (人, 八); Trên trước Dưới sau (三); Trái trước Phải sau (你); Ngoài trước Trong sau (月); Vào trước Đóng sau (口, 国); Giữa trước Hai bên sau (小, 水).",
      "Trật tự câu đơn tiếng Trung giống tiếng Việt: Chủ ngữ (S) + Động từ (V) + Tân ngữ (O).",
    ],
    exercises: [
      writingStroke(
        "hsk0-s4-q1",
        "人",
        "rén",
        "Con người (Quy tắc: Phẩy trước Mác sau)",
        "Chữ 人 (Nhân - 2 nét) bắt buộc viết nét Phẩy (丿) từ trên xuống trái trước, sau đó viết nét Mác (乀) sang phải."
      ),
      writingStroke(
        "hsk0-s4-q2",
        "口",
        "kǒu",
        "Miệng / Nhân khẩu (Quy tắc: Vào trước đóng sau)",
        "Chữ 口 (Khẩu - 3 nét): Nét 1 Sổ trái, Nét 2 Ngang gập phải, Nét 3 Ngang đáy đóng khung từ trái sang phải."
      ),
      writingOrder(
        "hsk0-s4-q3",
        "Sắp xếp các thẻ từ thành câu hoàn chỉnh: 'Tôi là người Việt Nam.'",
        ["越南人。", "是", "我"],
        "我是越南人。",
        "Wǒ shì Yuènánrén.",
        "Trật tự câu SVO: Chủ ngữ (我) + Động từ (是) + Tân ngữ (越南人)."
      ),
      writingOrder(
        "hsk0-s4-q4",
        "Sắp xếp các thẻ từ thành câu hoàn chỉnh: 'Nhà tôi có bốn người.'",
        ["四口人。", "有", "我家"],
        "我家有四口人。",
        "Wǒ jiā yǒu sì kǒu rén.",
        "Chủ ngữ nơi chốn/sở hữu (我家) + Động từ (有) + Số lượng từ + Danh từ (四口人)."
      ),
      writingTwoSentences(
        "hsk0-s4-q5",
        "好",
        "hǎo",
        "Tốt / Khỏe / Ngon",
        "Đặt 2 câu hoàn chỉnh với chữ 好 (ví dụ: 你好，我是明龙。 / 这个主意很好。)."
      ),
    ],
  },

  // ==========================================
  // STAGE 1 — CHẶNG 1 (HSK1: Giao tiếp sinh tồn, Gia đình, Thời gian, Mua bán cơ bản)
  // ==========================================
  {
    id: "hsk1-s1-listening-greetings-numbers",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    title: "Nghe hội thoại làm quen, hỏi quốc tịch & số điện thoại",
    titleZh: "自我介绍、国籍与电话号码听力",
    titlePinyin: "Zìwǒ jièshào, guójí yǔ diànhuà hàomǎ tīnglì",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Panda Studio",
    youtubeUrl: "https://www.youtube.com/watch?v=kL5hL2P8U0k",
    defaultSearchQuery: "Panda Studio luyện nghe hội thoại tiếng Trung làm quen bạn mới",
    grammarNotesVi: [
      "Câu hỏi tên: 你叫什么名字？ (Nǐ jiào shénme míngzi?) — Tôi tên là...: 我叫... (Wǒ jiào...).",
      "Câu hỏi quốc tịch: 你是哪国人？ (Nǐ shì nǎ guó rén?) — Tôi là người Việt Nam: 我是越南人。",
      "Trong số điện thoại và số phòng, số 1 (一) thường đọc là 'yāo' để tránh nhầm với số 7 (qī).",
    ],
    exercises: [
      listeningDialogue(
        "hsk1-s1-q1",
        "男：你好，请问你叫什么名字？女：我叫宝玲，我是河内大学的学生。",
        "Nán: Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzi? Nǚ: Wǒ jiào Bǎolíng, wǒ shì Hénèi Dàxué de xuésheng.",
        "Bạn nữ trong đoạn hội thoại làm nghề gì?",
        ["Sinh viên Đại học Hà Nội", "Giáo viên tiếng Trung", "Nhân viên ngân hàng", "Bác sĩ bệnh viện"],
        "Sinh viên Đại học Hà Nội",
        "Bạn nữ giới thiệu: 我是河内大学的学生 (Tôi là sinh viên Đại học Hà Nội)."
      ),
      listeningFill(
        "hsk1-s1-q2",
        "很高兴认识你！",
        "很高兴___你！",
        "Hěn gāoxìng rènshi nǐ!",
        "Nghe và điền động từ 2 chữ Hán ('quen biết / làm quen') vào chỗ trống:",
        "认识",
        "认识 (rènshi): quen biết, nhận biết."
      ),
      listeningMcq(
        "hsk1-s1-q3",
        "张老师今天下午三点在办公室。",
        "Zhāng lǎoshī jīntiān xiàwǔ sān diǎn zài bàngōngshì.",
        "Thầy Trương ở văn phòng vào lúc mấy giờ?",
        ["3 giờ chiều hôm nay", "8 giờ sáng mai", "4 giờ chiều qua", "10 giờ trưa nay"],
        "3 giờ chiều hôm nay",
        "今天下午三点 (Jīntiān xiàwǔ sān diǎn) = 3 giờ chiều hôm nay."
      ),
      listeningDialogue(
        "hsk1-s1-q4",
        "女：这杯奶茶多少钱？男：十五块钱，您可以用微信支付。",
        "Nǚ: Zhè bēi nǎichá duōshao qián? Nán: Shíwǔ kuài qián, nín kěyǐ yòng Wēixìn zhīfù.",
        "Ly trà sữa có giá bao nhiêu tiền?",
        ["15 tệ", "25 tệ", "50 tệ", "12 tệ"],
        "15 tệ",
        "Người bán trả lời: 十五块钱 (Shíwǔ kuài qián = 15 tệ)."
      ),
      listeningFill(
        "hsk1-s1-q5",
        "明天我们一起去北京学习汉语。",
        "明天我们一起去北京学习___。",
        "Míngtiān wǒmen yìqǐ qù Běijīng xuéxí Hànyǔ.",
        "Nghe và điền danh từ 2 chữ Hán ('tiếng Hán / tiếng Trung'):",
        "汉语",
        "学习汉语 (xuéxí Hànyǔ) = học tiếng Trung."
      ),
    ],
  },
  {
    id: "hsk1-s2-speaking-daily-conversation",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "basic",
    title: "Luyện nói giới thiệu bản thân, gia đình & gọi đồ uống",
    titleZh: "日常口语：介绍家庭与点饮品",
    titlePinyin: "Rìcháng kǒuyǔ: Jièshào jiātíng yǔ diǎn yǐnpǐn",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "speaking-yangdexin",
    recommendedChannelName: "Yangdexin",
    youtubeUrl: "https://www.youtube.com/watch?v=c7a2gpVtRIA",
    defaultSearchQuery: "Yangdexin nhập môn tiếng Trung giao tiếp bài 1",
    grammarNotesVi: [
      "Khi có tính từ làm vị ngữ, dùng phó từ chỉ mức độ 很 (hěn - rất) đứng trước tính từ, KHÔNG dùng 是: 她很漂亮 (Cô ấy rất đẹp).",
      "Trợ từ sở hữu 的 (de): Đứng giữa người sở hữu và danh từ: 我的爸爸 (bố của tôi), 我们的学校 (trường của chúng tôi).",
      "Động từ 想 (xiǎng - muốn) + Động từ: 我想喝一杯奶茶 (Tôi muốn uống một ly trà sữa).",
    ],
    exercises: [
      speakingShadowing(
        "hsk1-s2-q1",
        "你好，我叫明龙，我是河内大学的学生。",
        "Nǐ hǎo, wǒ jiào Mínglóng, wǒ shì Hénèi Dàxué de xuésheng.",
        "Thu âm câu tự giới thiệu tên và trường học:",
        ["Thanh 2 lên giọng (Míng, lóng, Hé, xué)", "Trợ từ thanh nhẹ (de, sheng)"],
        "Giữ nhịp tự nhiên, đọc nhẹ âm 'de' và 'sheng' ở cuối câu."
      ),
      speakingShadowing(
        "hsk1-s2-q2",
        "我想买一杯珍珠奶茶，少糖少冰。",
        "Wǒ xiǎng mǎi yì bēi zhēnzhū nǎichá, shǎo táng shǎo bīng.",
        "Thu âm câu gọi trà sữa trân châu ít đường ít đá:",
        ["Chuỗi thanh 3 (Wǒ xiǎng mǎi)", "Âm cuốn lưỡi zh, ch, sh"],
        "Với 我想买 (3 thanh 3 liên tiếp), đọc nâng 我想 thành thanh 2 (wó xiáng mǎi)."
      ),
      speakingShadowing(
        "hsk1-s2-q3",
        "请问，地铁站在哪儿？",
        "Qǐngwèn, dìtiězhàn zài nǎr?",
        "Thu âm câu hỏi đường tới ga tàu điện ngầm:",
        ["Âm bật hơi q, t", "Âm uốn lưỡi nhi hóa (nǎr)"],
        "Chữ 哪儿 (nǎr) uốn cong lưỡi nhẹ ở cuối âm tiết."
      ),
      speakingShadowing(
        "hsk1-s2-q4",
        "我爸爸在公司工作，妈妈在医院工作。",
        "Wǒ bàba zài gōngsī gōngzuò, māma zài yīyuàn gōngzuò.",
        "Thu âm câu giới thiệu nơi làm việc của bố mẹ:",
        ["Thanh 1 đều giọng (gōngsī, māma, yī)", "Thanh 4 dứt khoát (bà, zài, zuò, yuàn)"],
        "Cấu trúc 在 + Địa điểm + Động từ: làm việc ở đâu phải đặt địa điểm trước động từ 工作."
      ),
    ],
  },
  {
    id: "hsk1-s3-reading-time-schedule",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    title: "Đọc hiểu tin nhắn WeChat hẹn giờ, lịch trình & giá tiền",
    titleZh: "微信聊天记录与日程阅读理解",
    titlePinyin: "Wēixìn liáotiān jìlù yǔ rìchéng yuèdú lǐjiě",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-an-kha-hy",
    recommendedChannelName: "An Khả Hy",
    youtubeUrl: "https://www.youtube.com/watch?v=-gVC9BG9FEQ",
    defaultSearchQuery: "An Khả Hy 500 từ vựng HSK 1 phiên bản HSK 3.0",
    grammarNotesVi: [
      "Trật tự thời gian trong tiếng Trung đi từ LỚN đến NHỎ: Năm (年) → Tháng (月) → Ngày (日/号) → Buổi → Giờ (点) → Phút (分).",
      "Trạng ngữ chỉ thời gian luôn đứng TRƯỚC động từ (có thể đứng trước hoặc sau chủ ngữ): 我明天八点去公司。",
      "Trợ từ 了 (le) đứng sau động từ hoặc cuối câu biểu thị hành động đã hoàn thành.",
    ],
    exercises: [
      readingComp(
        "hsk1-s3-q1",
        "【微信消息】小兰：明龙，今天晚上七点我们去中国饭店吃饭吧。明龙：太好了！我六点半下班，七点在饭店门口见。",
        "[Wēixìn xiāoxi] Xiǎolán: Mínglóng, jīntiān wǎnshang qī diǎn wǒmen qù Zhōngguó fàndiàn chīfàn ba. Mínglóng: Tài hǎo le! Wǒ liù diǎn bàn xiàbān, qī diǎn zài fàndiàn ménkǒu jiàn.",
        "[Tin nhắn WeChat] Tiểu Lan: Minh Long ơi, 7 giờ tối nay chúng mình đi nhà hàng Trung Quốc ăn cơm nhé. Minh Long: Tuyệt quá! Mình 6 rưỡi tan làm, 7 giờ gặp ở cổng nhà hàng nhé.",
        "Hai bạn hẹn gặp nhau ở cổng nhà hàng vào lúc mấy giờ?",
        ["7 giờ tối", "6 giờ rưỡi tối", "8 giờ tối", "12 giờ trưa"],
        "7 giờ tối",
        "Minh Long xác nhận: 七点在饭店门口见 (7 giờ gặp ở cổng nhà hàng)."
      ),
      readingComp(
        "hsk1-s3-q2",
        "王老师是我的汉语老师。她今年二十八岁，是北京人。她很喜欢喝越南咖啡，每天早上都喝一杯。",
        "Wáng lǎoshī shì wǒ de Hànyǔ lǎoshī. Tā jīnnián èrshíbā suì, shì Běijīngrén. Tā hěn xǐhuan hē Yuènán kāfēi, měitiān zǎoshang dōu hē yì bēi.",
        "Cô Vương là giáo viên tiếng Trung của tôi. Năm nay cô 28 tuổi, là người Bắc Kinh. Cô rất thích uống cà phê Việt Nam, sáng nào cũng uống một ly.",
        "Cô Vương có thói quen gì vào mỗi buổi sáng?",
        [
          "Uống một ly cà phê Việt Nam",
          "Uống một ấm trà Ô Long",
          "Đi bộ trong công viên",
          "Đọc báo tiếng Trung",
        ],
        "Uống một ly cà phê Việt Nam",
        "Đoạn văn nêu: 她很喜欢喝越南咖啡，每天早上都喝一杯。"
      ),
      readingComp(
        "hsk1-s3-q3",
        "昨天我去商店买了一个新手机和两本书。手机三千块钱，两本书八十块钱。",
        "Zuótiān wǒ qù shāngdiàn mǎi le yí gè xīn shǒujī hé liǎng běn shū. Shǒujī sānqiān kuài qián, liǎng běn shū bāshí kuài qián.",
        "Hôm qua tôi đi cửa hàng mua một chiếc điện thoại mới và hai cuốn sách. Điện thoại 3.000 tệ, hai cuốn sách 80 tệ.",
        "Tổng cộng nhân vật đã chi bao nhiêu tiền hôm qua?",
        ["3.080 tệ", "3.000 tệ", "3.800 tệ", "80 tệ"],
        "3.080 tệ",
        "Điện thoại 3.000 tệ (三千块) + 2 cuốn sách 80 tệ (八十块) = 3.080 tệ."
      ),
      readingComp(
        "hsk1-s3-q4",
        "星期六和星期日我不去学校上课。星期六上午我在家学习汉字，下午和朋友去看电影。",
        "Xīngqīliù hé xīngqīrì wǒ bú qù xuéxiào shàngkè. Xīngqīliù shàngwǔ wǒ zài jiā xuéxí Hànzì, xiàwǔ hé péngyou qù kàn diànyǐng.",
        "Thứ Bảy và Chủ nhật tôi không đến trường học. Sáng thứ Bảy tôi ở nhà học chữ Hán, buổi chiều cùng bạn đi xem phim.",
        "Chiều thứ Bảy nhân vật làm gì?",
        [
          "Cùng bạn đi xem phim",
          "Ở nhà học chữ Hán",
          "Đến trường lên lớp",
          "Đi siêu thị mua hoa quả",
        ],
        "Cùng bạn đi xem phim",
        "Đoạn văn viết: 下午和朋友去看电影 (Buổi chiều cùng bạn đi xem phim)."
      ),
    ],
  },
  {
    id: "hsk1-s4-writing-svo-sentences",
    stageId: 1,
    hskLevel: "HSK1",
    subDifficulty: "advanced",
    title: "Viết chữ Hán HSK1, Sắp xếp câu Thời gian/Địa điểm & Đặt 2 câu",
    titleZh: "HSK1核心汉字书写与时间地点状语造句",
    titlePinyin: "HSK1 héxīn Hànzì shūxiě yǔ shíjiān dìdiǎn zhuàngyǔ zàojù",
    skillFocus: "writing",
    difficulty: "easy",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-duong-chau",
    recommendedChannelName: "Tiếng Trung Dương Châu",
    youtubeUrl: "https://www.youtube.com/watch?v=sLUg6LGlNek",
    defaultSearchQuery: "Tiếng Trung Dương Châu bài 1 giáo trình Hán ngữ 1",
    grammarNotesVi: [
      "Công thức vàng cho trật tự câu tiếng Trung: Chủ ngữ + [Thời gian] + [在 + Địa điểm] + Động từ + Tân ngữ.",
      "Ví dụ: 我 (S) + 每天早上 (Thời gian) + 在家 (Địa điểm) + 喝咖啡 (V + O).",
      "Tuyệt đối không đặt thời gian hoặc địa điểm ở cuối câu như tiếng Việt.",
    ],
    exercises: [
      writingStroke(
        "hsk1-s4-q1",
        "我",
        "wǒ",
        "Tôi / Mình (7 nét, bộ Qua 戈)",
        "Chữ 我 gồm 7 nét: Phẩy, Ngang, Sổ móc, Hất, Nghiêng móc dài, Phẩy, Chấm."
      ),
      writingStroke(
        "hsk1-s4-q2",
        "家",
        "jiā",
        "Nhà / Gia đình (10 nét, bộ Miên 宀)",
        "Chữ 家 có bộ Miên (宀 - mái nhà) ở trên và chữ Thỉ (豕) ở dưới, viết theo quy tắc Trên trước Dưới sau."
      ),
      writingOrder(
        "hsk1-s4-q3",
        "Sắp xếp câu chuẩn ngữ pháp: 'Mỗi ngày tôi đều học tiếng Trung ở trường.'",
        ["学习汉语。", "在学校", "每天都", "我"],
        "我每天都在学校学习汉语。",
        "Wǒ měitiān dōu zài xuéxiào xuéxí Hànyǔ.",
        "Trật tự chuẩn: Chủ ngữ (我) + Thời gian (每天都) + Địa điểm (在学校) + Động từ + Tân ngữ (学习汉语)."
      ),
      writingOrder(
        "hsk1-s4-q4",
        "Sắp xếp câu: 'Chiều mai chúng tôi đi cửa hàng mua hoa quả.'",
        ["买水果。", "去商店", "我们", "明天下午"],
        "明天下午我们去商店买水果。",
        "Míngtiān xiàwǔ wǒmen qù shāngdiàn mǎi shuǐguǒ.",
        "Thời gian (明天下午) + Chủ ngữ (我们) + Câu liên động (去商店买水果)."
      ),
      writingTwoSentences(
        "hsk1-s4-q5",
        "喜欢",
        "xǐhuan",
        "Thích / Yêu thích",
        "Đặt 2 câu hoàn chỉnh với từ 喜欢 (Câu 1: Sở thích ăn uống/đời sống; Câu 2: Sở thích học tập/công việc)."
      ),
    ],
  },

  // ==========================================
  // STAGE 2 — CHẶNG 2 (HSK2: Sinh hoạt, Du lịch, Mua sắm, Sức khỏe & Liên từ)
  // ==========================================
  {
    id: "hsk2-s1-listening-travel-shopping",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    title: "Nghe tình huống đặt phòng khách sạn, ra sân bay & mua sắm",
    titleZh: "酒店预订、去机场与购物听力",
    titlePinyin: "Jiǔdiàn yùdìng, qù jīchǎng yǔ gòuwù tīnglì",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Panda Studio",
    youtubeUrl: "https://www.youtube.com/watch?v=2mKgniIiHi4",
    defaultSearchQuery: "Panda Studio luyện nghe hội thoại tiếng Trung giao tiếp bạn bè",
    grammarNotesVi: [
      "Trợ từ động thái 过 (guò) đứng sau động từ diễn tả trải nghiệm đã từng xảy ra: 我去过北京 (Tôi đã từng đi Bắc Kinh).",
      "Cặp liên từ nguyên nhân - kết quả: 因为...，所以... (Bởi vì..., cho nên...).",
      "Bổ ngữ thời lượng đặt sau động từ: 坐飞机要三个小时 (Đi máy bay mất 3 tiếng đồng hồ).",
    ],
    exercises: [
      listeningDialogue(
        "hsk2-s1-q1",
        "女：先生您好，请问您预订房间了吗？男：预订了，我叫阮明，订了一个双人房间。",
        "Nǚ: Xiānsheng nín hǎo, qǐngwèn nín yùdìng fángjiān le ma? Nán: Yùdìng le, wǒ jiào Ruǎn Míng, dìng le yí gè shuāngrén fángjiān.",
        "Vị khách nam đã đặt loại phòng nào tại khách sạn?",
        ["Phòng đôi (2 người)", "Phòng đơn (1 người)", "Phòng gia đình 4 người", "Chưa đặt phòng trước"],
        "Phòng đôi (2 người)",
        "Khách trả lời: 订了一个双人房间 (shuāngrén fángjiān = phòng đôi)."
      ),
      listeningFill(
        "hsk2-s1-q2",
        "因为今天下大雨，所以飞机晚点了。",
        "___今天下大雨，所以飞机晚点了。",
        "Yīnwèi jīntiān xià dàyǔ, suǒyǐ fēijī wǎndiǎn le.",
        "Nghe và điền liên từ 2 chữ Hán ('Bởi vì') vào đầu câu:",
        "因为",
        "Cấu trúc 因为...，所以... (Yīnwèi..., suǒyǐ... — Bởi vì..., cho nên...)."
      ),
      listeningMcq(
        "hsk2-s1-q3",
        "直接从工厂买比在商店买便宜多了。",
        "Zhíjiē cóng gōngchǎng mǎi bǐ zài shāngdiàn mǎi piányi duō le.",
        "Theo câu vừa nghe, mua hàng ở đâu sẽ rẻ hơn nhiều?",
        [
          "Mua trực tiếp từ nhà máy/xưởng",
          "Mua tại cửa hàng bán lẻ",
          "Mua ở sân bay",
          "Hai nơi có giá bằng nhau",
        ],
        "Mua trực tiếp từ nhà máy/xưởng",
        "直接从工厂买比在商店买便宜多了 (Mua trực tiếp từ xưởng rẻ hơn nhiều so với mua ở cửa hàng)."
      ),
      listeningDialogue(
        "hsk2-s1-q4",
        "男：服务员，请问这件白色衬衫多少钱？女：原价两百块，今天打折，只要一百六十块。",
        "Nán: Fúwùyuán, qǐngwèn zhè jiàn báisè chènshān duōshao qián? Nǚ: Yuánjià liǎngbǎi kuài, jīntiān dǎzhé, zhǐyào yìbǎi liùshí kuài.",
        "Sau khi giảm giá, chiếc áo sơ mi trắng còn bao nhiêu tiền?",
        ["160 tệ", "200 tệ", "180 tệ", "120 tệ"],
        "160 tệ",
        "Nhân viên nói: 今天打折，只要一百六十块 (Hôm nay giảm giá, chỉ còn 160 tệ)."
      ),
      listeningFill(
        "hsk2-s1-q5",
        "请提前两个小时到机场。",
        "请提前两个小时到___。",
        "Qǐng tíqián liǎng gè xiǎoshí dào jīchǎng.",
        "Nghe và điền danh từ 2 chữ Hán ('sân bay') vào chỗ trống:",
        "机场",
        "机场 (jīchǎng) nghĩa là sân bay."
      ),
    ],
  },
  {
    id: "hsk2-s2-speaking-comparison-reasons",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    title: "Luyện nói so sánh 比, giải thích lý do 因为...所以 & mặc cả",
    titleZh: "比较句“比”与因果复句口语训练",
    titlePinyin: "Bǐjiàojù “bǐ” yǔ yīnguǒ fùjù kǒuyǔ xùnliàn",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-khoai-tay",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=Ier0CogR_g4",
    defaultSearchQuery: "Khoai Tây yêu tiếng Trung lộ trình học tiếng Trung 3.0",
    grammarNotesVi: [
      "Câu so sánh hơn với 比: A + 比 + B + Tính từ (+ 一点儿 / 多了). Lưu ý: Không dùng 很 trước tính từ trong câu chữ 比!",
      "Cấu trúc 虽然...，但是... (Tuy rằng..., nhưng mà...) dùng để diễn đạt sự nhượng bộ - chuyển ngoặt.",
      "Động từ lặp lại (看看, 试试, 休息休息) làm ngữ khí câu nói nhẹ nhàng, tự nhiên hơn.",
    ],
    exercises: [
      speakingShadowing(
        "hsk2-s2-q1",
        "坐高铁比坐公共汽车快多了。",
        "Zuò gāotiě bǐ zuò gōnggòng qìchē kuài duō le.",
        "Thu âm câu so sánh tốc độ tàu cao tốc với xe buýt:",
        ["Cấu trúc A 比 B + Adj + 多了", "Thanh 4 (Zuò, qì, kuài)"],
        "Đọc rõ cụm so sánh 比 và nhấn mạnh ở 快多了 (nhanh hơn nhiều)."
      ),
      speakingShadowing(
        "hsk2-s2-q2",
        "虽然汉字有一点儿难，但是非常有意思。",
        "Suīrán Hànzì yǒu yìdiǎnr nán, dànshì fēicháng yǒu yìsi.",
        "Thu âm câu phức 虽然...但是... nhận xét về chữ Hán:",
        ["Liên từ 虽然...但是...", "Âm cuốn lưỡi r (yìdiǎnr, rán)"],
        "Chú ý ngắt nhịp nhẹ sau 难 (nán) trước khi chuyển sang vế 但是."
      ),
      speakingShadowing(
        "hsk2-s2-q3",
        "老板，我买十件，可以便宜一点儿吗？",
        "Lǎobǎn, wǒ mǎi shí jiàn, kěyǐ piányi yìdiǎnr ma?",
        "Thu âm câu mặc cả thực tế khi mua hàng số lượng nhiều:",
        ["Biến điệu thanh 3 (Lǎobǎn, wǒ mǎi, kěyǐ)", "Thanh nhẹ ở 便宜 (piányi)"],
        "Chữ 宜 trong 便宜 đọc thanh nhẹ (piányi)."
      ),
      speakingShadowing(
        "hsk2-s2-q4",
        "我已经准备好明天的会议资料了。",
        "Wǒ yǐjīng zhǔnbèi hǎo míngtiān de huìyì zīliào le.",
        "Thu âm câu thông báo đã chuẩn bị xong tài liệu họp:",
        ["Bổ ngữ kết quả 准备好 (chuẩn bị xong)", "Âm đầu lưỡi z (zīliào)"],
        "Cụm 我已经准备 có 3 thanh 3 liên tiếp (Wǒ yǐjīng zhǔn...), đọc nâng nhịp đầu mượt mà."
      ),
    ],
  },
  {
    id: "hsk2-s3-reading-health-clinic",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    title: "Đọc hiểu lời khuyên bác sĩ, thói quen sức khỏe & đơn hàng",
    titleZh: "健康养生与日常订单阅读",
    titlePinyin: "Jiànkāng yǎngshēng yǔ rìcháng dìngdān yuèdú",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-ly-dinh-tran",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=o98uwta8jJc",
    defaultSearchQuery: "Tiếng Trung Lý Dinh Trân HSK 3.0 HSK 1 bài 13",
    grammarNotesVi: [
      "Bổ ngữ trạng thái với 得 (de): Động từ + 得 + (很) + Tính từ. Ví dụ: 他说得很好 (Anh ấy nói rất tốt), 起得很早 (Dậy rất sớm).",
      "Phó từ 别 (bié) / 不要 (búyào) + Động từ: Đừng làm gì đó (câu khuyên can).",
      "Trợ từ 着 (zhe) đứng sau động từ biểu thị trạng thái đang duy trì: 门开着 (Cửa đang mở).",
    ],
    exercises: [
      readingComp(
        "hsk2-s3-q1",
        "张先生最近工作太忙，每天晚上十二点才睡觉。今天早上他觉得头疼，去医院看病。医生告诉他要多喝温水，吃药以后在家休息两天。",
        "Zhāng xiānsheng zuìjìn gōngzuò tài máng, měitiān wǎnshang shí'èr diǎn cái shuìjiào. Jīntiān zǎoshang tā juéde tóuténg, qù yīyuàn kànbìng. Yīshēng gàosu tā yào duō hē wēnshuǐ, chīyào yǐhòu zài jiā xiūxi liǎng tiān.",
        "Anh Trương dạo này công việc bận quá, tối nào cũng 12 giờ đêm mới đi ngủ. Sáng nay anh thấy đau đầu nên đi bệnh viện khám. Bác sĩ dặn anh phải uống nhiều nước ấm, sau khi uống thuốc thì ở nhà nghỉ ngơi 2 ngày.",
        "Bác sĩ khuyên anh Trương nên làm gì sau khi uống thuốc?",
        [
          "Ở nhà nghỉ ngơi 2 ngày và uống nhiều nước ấm",
          "Đi tập chạy bộ ngay buổi chiều",
          "Quay lại công ty tăng ca tiếp",
          "Uống cà phê đen cho tỉnh táo",
        ],
        "Ở nhà nghỉ ngơi 2 ngày và uống nhiều nước ấm",
        "Trong bài có câu: 医生告诉他要多喝温水，吃药以后在家休息两天。"
      ),
      readingComp(
        "hsk2-s3-q2",
        "我每天早上六点起床，去公园跑步半个小时。运动让我的身体越来越健康，工作的时候也很有精神。",
        "Wǒ měitiān zǎoshang liù diǎn qǐchuáng, qù gōngyuán pǎobù bàn gè xiǎoshí. Yùndòng ràng wǒ de shēntǐ yuèláiyuè jiànkāng, gōngzuò de shíhou yě hěn yǒu jīngshen.",
        "Mỗi ngày tôi thức dậy lúc 6 giờ sáng, ra công viên chạy bộ nửa tiếng. Vận động giúp cơ thể tôi ngày càng khỏe mạnh, lúc làm việc cũng rất tỉnh táo.",
        "Nhân vật chạy bộ ở công viên trong bao lâu mỗi sáng?",
        ["Nửa tiếng (30 phút)", "Một tiếng", "Hai tiếng", "15 phút"],
        "Nửa tiếng (30 phút)",
        "去公园跑步半个小时 (pǎobù bàn gè xiǎoshí = chạy bộ nửa tiếng)."
      ),
      readingComp(
        "hsk2-s3-q3",
        "【淘宝物流通知】您购买的蓝牙耳机已经从广州仓库发货，顺丰快递预计三天后送到您的地址，请注意查收。",
        "[Táobǎo wùliú tōngzhī] Nín gòumǎi de lányá ěrjī yǐjīng cóng Guǎngzhōu cāngkù fāhuò, Shùnfēng kuàidì yùjì sān tiān hòu sòngdào nín de dìzhǐ, qǐng zhùyì cháshōu.",
        "[Thông báo vận chuyển Taobao] Tai nghe Bluetooth quý khách mua đã được gửi đi từ kho Quảng Châu, chuyển phát nhanh Thuận Phong dự kiến giao tới địa chỉ của quý khách sau 3 ngày.",
        "Kiện hàng tai nghe Bluetooth được gửi đi từ kho ở thành phố nào?",
        ["Quảng Châu", "Thượng Hải", "Bắc Kinh", "Thâm Quyến"],
        "Quảng Châu",
        "Thông báo ghi rõ: 已经从广州仓库发货 (đã gửi đi từ kho Quảng Châu)."
      ),
      readingComp(
        "hsk2-s3-q4",
        "妹妹汉语说得非常流利，汉字也写得很漂亮。因为她每天都认真复习生词，还常常用中文写日记。",
        "Mèimei Hànyǔ shuō de fēicháng liúlì, Hànzì yě xiě de hěn piàoliang. Yīnwèi tā měitiān dōu rènzhēn fùxí shēngcí, hái chángcháng yòng Zhōngwén xiě rìjì.",
        "Em gái nói tiếng Trung vô cùng lưu loát, chữ Hán cũng viết rất đẹp. Bởi vì mỗi ngày em đều nghiêm túc ôn tập từ mới, còn thường xuyên viết nhật ký bằng tiếng Trung.",
        "Tại sao em gái lại nói tiếng Trung lưu loát và viết chữ Hán đẹp?",
        [
          "Vì mỗi ngày đều ôn từ mới và thường viết nhật ký bằng tiếng Trung",
          "Vì em đã sống ở Bắc Kinh 10 năm",
          "Vì bài thi rất dễ",
          "Vì em chỉ học nghe mà không học viết",
        ],
        "Vì mỗi ngày đều ôn từ mới và thường viết nhật ký bằng tiếng Trung",
        "Câu giải thích: 因为她每天都认真复习生词，还常常用中文写日记。"
      ),
    ],
  },
  {
    id: "hsk2-s4-writing-complement-conjunctions",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "advanced",
    title: "Viết chữ Hán HSK2, Câu so sánh 比 / Bổ ngữ 得 & Đặt 2 câu",
    titleZh: "HSK2汉字笔顺、状态补语“得”与造句",
    titlePinyin: "HSK2 Hànzì bǐshùn, zhuàngtài bǔyǔ “de” yǔ zàojù",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-pham-duong-chau",
    recommendedChannelName: "Học tiếng Trung Phạm Dương Châu",
    youtubeUrl: "https://www.youtube.com/watch?v=H3qnjYyT6sY",
    defaultSearchQuery: "Học tiếng Trung Phạm Dương Châu giáo trình Hán ngữ 1",
    grammarNotesVi: [
      "Khi động từ mang tân ngữ mà muốn dùng bổ ngữ trạng thái 得, ta lặp lại động từ hoặc đưa tân ngữ lên trước: 他说汉语说得很好 hoặc 他汉语说得很好。",
      "Trong câu so sánh 比, phó từ 很 không được đứng trước tính từ. Nếu muốn nói 'hơn nhiều', thêm 多了 ở sau tính từ.",
    ],
    exercises: [
      writingStroke(
        "hsk2-s4-q1",
        "买",
        "mǎi",
        "Mua (6 nét, bộ Ất 乛)",
        "Chữ 买 (Mua - 6 nét): Nét 1 Ngang móc, Nét 2-3 hai chấm, Nét 4 Ngang dài, Nét 5 Phẩy lớn, Nét 6 Chấm dài."
      ),
      writingStroke(
        "hsk2-s4-q2",
        "快",
        "kuài",
        "Nhanh / Vui vẻ (7 nét, bộ Tâm đứng 忄)",
        "Chữ 快 có kết cấu Trái - Phải: Bên trái viết bộ Tâm đứng (忄: Chấm trái, Chấm phải, Sổ) trước, bên phải viết chữ Quải (夬) sau."
      ),
      writingOrder(
        "hsk2-s4-q3",
        "Sắp xếp các thẻ từ thành câu so sánh đúng: 'Hôm nay mát hơn hôm qua nhiều rồi.'",
        ["凉快多了。", "昨天", "比", "今天"],
        "今天比昨天凉快多了。",
        "Jīntiān bǐ zuótiān liángkuai duō le.",
        "Cấu trúc A (今天) + 比 + B (昨天) + Tính từ (凉快) + 多了。"
      ),
      writingOrder(
        "hsk2-s4-q4",
        "Sắp xếp câu có bổ ngữ trạng thái 得: 'Cô ấy nói tiếng Trung rất lưu loát.'",
        ["很流利。", "说得", "汉语", "她"],
        "她汉语说得很流利。",
        "Tā Hànyǔ shuō de hěn liúlì.",
        "Chủ ngữ (她) + Tân ngữ (汉语) + Động từ (说) + 得 + 很流利。"
      ),
      writingTwoSentences(
        "hsk2-s4-q5",
        "准备",
        "zhǔnbèi",
        "Chuẩn bị",
        "Đặt 2 câu hoàn chỉnh với từ 准备 (Câu 1: Chuẩn bị đồ đạc/du lịch; Câu 2: Chuẩn bị cuộc họp/hợp đồng công việc)."
      ),
    ],
  },
];
