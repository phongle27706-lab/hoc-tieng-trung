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

export const HSK2_PART1_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 九月去北京旅游最好 (Du lịch Bắc Kinh tháng 9 là tốt nhất)
  // ==========================================
  {
    id: "hsk2-l1-beijing",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Du lịch Bắc Kinh tháng 9 là tốt nhất",
    titleZh: "第一课：九月去北京旅游最好",
    titlePinyin: "Dì yī kè: Jiǔ yuè qù Běijīng lǚyóu zuì hǎo",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-ttb-chinese",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=eJbD4x9oLWs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 1 九月去北京旅游最好",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Động từ năng nguyện 要 (yào) đứng trước động từ biểu thị nguyện vọng hoặc dự định làm việc gì đó trong tương lai.",
      "Phó từ chỉ mức độ 最 (zuì — nhất) đứng trước tính từ hoặc động từ tâm lý để biểu thị mức độ cao nhất (ví dụ: 最好, 最喜欢).",
      "Phó từ 也 (yě — cũng) luôn đứng trước động từ hoặc tính từ, không đứng đầu câu.",
    ],
    newWords: [
      {
        hanzi: "旅游",
        pinyin: "lǚyóu",
        partOfSpeech: "Động từ",
        meaningVi: "du lịch",
        radical: "方 (Phương)",
        strokeCount: 22,
      },
      {
        hanzi: "觉得",
        pinyin: "juéde",
        partOfSpeech: "Động từ",
        meaningVi: "cảm thấy, cho rằng",
        radical: "见 (Kiến)",
        strokeCount: 20,
      },
      {
        hanzi: "最",
        pinyin: "zuì",
        partOfSpeech: "Phó từ",
        meaningVi: "nhất (mức độ cao nhất)",
        radical: "曰 (Viết)",
        strokeCount: 12,
      },
      {
        hanzi: "为什么",
        pinyin: "wèishénme",
        partOfSpeech: "Đại từ nghi vấn",
        meaningVi: "tại sao, vì sao",
        radical: "丶 (Chủ)",
        strokeCount: 11,
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
        hanzi: "运动",
        pinyin: "yùndòng",
        partOfSpeech: "Danh từ / Động từ",
        meaningVi: "thể thao, vận động",
        radical: "辶 (Xước)",
        strokeCount: 13,
      },
      {
        hanzi: "踢足球",
        pinyin: "tī zúqiú",
        partOfSpeech: "Cụm động từ",
        meaningVi: "đá bóng",
        radical: "足 (Túc)",
        strokeCount: 33,
      },
      {
        hanzi: "一起",
        pinyin: "yìqǐ",
        partOfSpeech: "Phó từ",
        meaningVi: "cùng nhau",
        radical: "一 (Nhất)",
        strokeCount: 11,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Du lịch Bắc Kinh vào tháng 9",
        lines: [
          {
            speaker: "A",
            zh: "我要去北京旅游，你觉得什么时候去最好？",
            pinyin: "Wǒ yào qù Běijīng lǚyóu, nǐ juéde shénme shíhou qù zuì hǎo?",
            vi: "Tôi định đi Bắc Kinh du lịch, bạn thấy đi vào lúc nào là tốt nhất?",
          },
          {
            speaker: "B",
            zh: "九月去北京旅游最好。",
            pinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.",
            vi: "Đi du lịch Bắc Kinh vào tháng 9 là tốt nhất.",
          },
          {
            speaker: "A",
            zh: "为什么？",
            pinyin: "Wèishénme?",
            vi: "Tại sao vậy?",
          },
          {
            speaker: "B",
            zh: "九月的北京天气不冷也不热。",
            pinyin: "Jiǔ yuè de Běijīng tiānqì bù lěng yě bú rè.",
            vi: "Thời tiết Bắc Kinh tháng 9 không lạnh cũng không nóng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Rủ nhau đi đá bóng",
        lines: [
          {
            speaker: "A",
            zh: "你喜欢什么运动？",
            pinyin: "Nǐ xǐhuan shénme yùndòng?",
            vi: "Bạn thích môn thể thao nào?",
          },
          {
            speaker: "B",
            zh: "我最喜欢踢足球。",
            pinyin: "Wǒ zuì xǐhuan tī zúqiú.",
            vi: "Tôi thích nhất là đá bóng.",
          },
          {
            speaker: "A",
            zh: "下午我们一起去踢足球吧。",
            pinyin: "Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.",
            vi: "Buổi chiều chúng ta cùng nhau đi đá bóng nhé.",
          },
          {
            speaker: "B",
            zh: "好啊！",
            pinyin: "Hǎo a!",
            vi: "Được thôi!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Động từ năng nguyện 要 (yào)",
        formula: "Chủ ngữ + 要 + Động từ + Tân ngữ",
        explanationVi:
          "Biểu thị mong muốn hoặc dự định làm một việc gì đó. Dạng phủ định thường dùng 不想 (bù xiǎng — không muốn).",
        examples: [
          {
            zh: "我要去北京旅游。",
            pinyin: "Wǒ yào qù Běijīng lǚyóu.",
            vi: "Tôi muốn/định đi Bắc Kinh du lịch.",
          },
          {
            zh: "明天我要去买新衣服。",
            pinyin: "Míngtiān wǒ yào qù mǎi xīn yīfu.",
            vi: "Ngày mai tôi định đi mua quần áo mới.",
          },
        ],
      },
      {
        titleVi: "Phó từ chỉ mức độ 最 (zuì — nhất)",
        formula: "最 + Tính từ / Động từ tâm lý (喜欢, 想...)",
        explanationVi:
          "Đặt trước tính từ hoặc động từ tâm lý để chỉ mức độ cao nhất trong một phạm vi so sánh.",
        examples: [
          {
            zh: "九月去北京旅游最好。",
            pinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.",
            vi: "Tháng 9 đi du lịch Bắc Kinh là tốt nhất.",
          },
          {
            zh: "我最喜欢踢足球。",
            pinyin: "Wǒ zuì xǐhuan tī zúqiú.",
            vi: "Tôi thích đá bóng nhất.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk2-l1-q1",
        "九月去北京旅游最好，天气不冷也不热。",
        "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo, tiānqì bù lěng yě bú rè.",
        "Nghe và chọn thời điểm tốt nhất để đi du lịch Bắc Kinh:",
        ["Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10"],
        "Tháng 9",
        "九月 (jiǔ yuè) là tháng 9, thời tiết không lạnh cũng không nóng."
      ),
      listeningFill(
        "hsk2-l1-q2",
        "你觉得什么时候去旅游最好？",
        "你___什么时候去旅游最好？",
        "Nǐ juéde shénme shíhou qù lǚyóu zuì hǎo?",
        "Nghe và điền động từ 'cảm thấy / cho rằng' vào chỗ trống:",
        "觉得",
        "觉得 (juéde) có nghĩa là cảm thấy, cho rằng."
      ),
      listeningDialogue(
        "hsk2-l1-q3",
        "A: 你最喜欢什么运动？ B: 我最喜欢踢足球，我们下午一起去吧。",
        "A: Nǐ zuì xǐhuan shénme yùndòng? B: Wǒ zuì xǐhuan tī zúqiú, wǒmen xiàwǔ yìqǐ qù ba.",
        "Nghe đoạn hội thoại: Hai người định làm gì vào buổi chiều?",
        ["Đi du lịch", "Đi đá bóng", "Đi mua sắm", "Đi xem phim"],
        "Đi đá bóng",
        "Người B nói 最喜欢踢足球 (thích nhất đá bóng) và rủ 下午一起去 (chiều cùng đi)."
      ),
      listeningMcq(
        "hsk2-l1-q4",
        "为什么你喜欢九月去北京？",
        "Wèishénme nǐ xǐhuan jiǔ yuè qù Běijīng?",
        "Nghe câu hỏi và chọn từ nghi vấn xuất hiện trong câu:",
        ["什么时候 (khi nào)", "为什么 (tại sao)", "怎么样 (như thế nào)", "在哪里 (ở đâu)"],
        "为什么 (tại sao)",
        "为什么 (wèishénme) dùng để hỏi nguyên nhân (tại sao)."
      ),
      listeningFill(
        "hsk2-l1-q5",
        "下午我们一起去踢足球吧。",
        "下午我们___去踢足球吧。",
        "Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.",
        "Nghe và điền phó từ 'cùng nhau' vào chỗ trống:",
        "一起",
        "一起 (yìqǐ) là cùng nhau, đặt trước động từ 去."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 我每天六点起床 (Tôi thức dậy lúc 6 giờ mỗi ngày)
  // ==========================================
  {
    id: "hsk2-l2-qichuang",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Tôi thức dậy lúc 6 giờ mỗi ngày",
    titleZh: "第二课：我每天六点起床",
    titlePinyin: "Dì èr kè: Wǒ měitiān liù diǎn qǐchuáng",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=Mc2iygKaxoo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 2 我每天六点起床",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc câu hỏi xác nhận với 是不是 (shì bu shì — có phải... không) có thể đặt trước vị ngữ hoặc đầu câu.",
      "Đại từ 每 (měi — mỗi) thường đi kèm lượng từ và kết hợp với phó từ 都 (dōu — đều) ở phía sau: 每天都...",
      "Chú ý phân biệt 吃药 (chī yào — uống thuốc, tiếng Trung dùng động từ 吃 chứ không dùng 喝).",
    ],
    newWords: [
      {
        hanzi: "生病",
        pinyin: "shēngbìng",
        partOfSpeech: "Động từ",
        meaningVi: "bị ốm, đổ bệnh",
        radical: "生 (Sinh)",
        strokeCount: 15,
      },
      {
        hanzi: "每",
        pinyin: "měi",
        partOfSpeech: "Đại từ",
        meaningVi: "mỗi, mọi",
        radical: "毋 (Vô)",
        strokeCount: 7,
      },
      {
        hanzi: "早上",
        pinyin: "zǎoshang",
        partOfSpeech: "Danh từ",
        meaningVi: "buổi sáng",
        radical: "日 (Nhật)",
        strokeCount: 9,
      },
      {
        hanzi: "跑步",
        pinyin: "pǎobù",
        partOfSpeech: "Động từ",
        meaningVi: "chạy bộ",
        radical: "足 (Túc)",
        strokeCount: 19,
      },
      {
        hanzi: "起床",
        pinyin: "qǐchuáng",
        partOfSpeech: "Động từ",
        meaningVi: "thức dậy, rời giường",
        radical: "走 (Tẩu)",
        strokeCount: 17,
      },
      {
        hanzi: "药",
        pinyin: "yào",
        partOfSpeech: "Danh từ",
        meaningVi: "thuốc",
        radical: "艹 (Thảo)",
        strokeCount: 9,
      },
      {
        hanzi: "身体",
        pinyin: "shēntǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "cơ thể, sức khỏe",
        radical: "身 (Thân)",
        strokeCount: 14,
      },
      {
        hanzi: "出院",
        pinyin: "chūyuàn",
        partOfSpeech: "Động từ",
        meaningVi: "xuất viện, ra viện",
        radical: "凵 (Khảm)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Thói quen tập thể dục buổi sáng",
        lines: [
          {
            speaker: "A",
            zh: "你很少生病，是不是喜欢运动？",
            pinyin: "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?",
            vi: "Bạn rất ít khi bị ốm, có phải rất thích tập thể thao không?",
          },
          {
            speaker: "B",
            zh: "是啊，我每天早上都要出去跑步。",
            pinyin: "Shì a, wǒ měitiān zǎoshang dōu yào chūqù pǎobù.",
            vi: "Đúng vậy, sáng nào tôi cũng ra ngoài chạy bộ.",
          },
          {
            speaker: "A",
            zh: "你每天几点起床？",
            pinyin: "Nǐ měitiān jǐ diǎn qǐchuáng?",
            vi: "Mỗi ngày bạn thức dậy lúc mấy giờ?",
          },
          {
            speaker: "B",
            zh: "我每天六点起床。",
            pinyin: "Wǒ měitiān liù diǎn qǐchuáng.",
            vi: "Tôi thức dậy lúc 6 giờ mỗi ngày.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hỏi thăm sức khỏe sau khi ra viện",
        lines: [
          {
            speaker: "A",
            zh: "吃药了吗？现在身体怎么样？",
            pinyin: "Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?",
            vi: "Bạn đã uống thuốc chưa? Bây giờ sức khỏe thế nào rồi?",
          },
          {
            speaker: "B",
            zh: "吃了。现在好多了。",
            pinyin: "Chī le. Xiànzài hǎo duō le.",
            vi: "Uống rồi. Bây giờ đỡ hơn nhiều rồi.",
          },
          {
            speaker: "A",
            zh: "什么时候能出院？",
            pinyin: "Shénme shíhou néng chūyuàn?",
            vi: "Khi nào thì có thể xuất viện?",
          },
          {
            speaker: "B",
            zh: "医生说下个星期。",
            pinyin: "Yīshēng shuō xià gè xīngqī.",
            vi: "Bác sĩ nói là tuần sau.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Câu hỏi xác nhận với 是不是 (shì bu shì)",
        formula: "Chủ ngữ + 是不是 + Vị ngữ?",
        explanationVi:
          "Dùng khi người nói đã có suy đoán nhất định và muốn đối phương xác nhận lại thông tin (có phải... không?).",
        examples: [
          {
            zh: "你很少生病，是不是喜欢运动？",
            pinyin: "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?",
            vi: "Bạn ít khi bị ốm, có phải bạn thích tập thể thao không?",
          },
          {
            zh: "明天是不是你的生日？",
            pinyin: "Míngtiān shì bu shì nǐ de shēngrì?",
            vi: "Ngày mai có phải sinh nhật bạn không?",
          },
        ],
      },
      {
        titleVi: "Đại từ 每 (měi — mỗi) kết hợp với 都 (dōu)",
        formula: "每 + (Lượng từ) + Danh từ + 都 + Động từ",
        explanationVi:
          "Biểu thị tính đều đặn hoặc bao quát toàn bộ các cá thể trong một tập hợp. Lưu ý: 天 (ngày), 年 (năm) tự làm lượng từ nên nói 每天, 每年 (không thêm 个).",
        examples: [
          {
            zh: "我每天早上都跑步。",
            pinyin: "Wǒ měitiān zǎoshang dōu pǎobù.",
            vi: "Sáng nào tôi cũng chạy bộ.",
          },
          {
            zh: "每个人都喜欢他。",
            pinyin: "Měi gè rén dōu xǐhuan tā.",
            vi: "Mọi người đều thích anh ấy.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk2-l2-q1",
        "我每天六点起床。",
        "Wǒ měitiān liù diǎn qǐchuáng.",
        "Đọc theo câu mẫu về giờ thức dậy hàng ngày:",
        ["měi (thanh 3)", "qǐchuáng (âm bật hơi q-, ch-)"],
        "Chú ý biến điệu của 我每 (wó měi) khi hai thanh 3 đứng liền nhau và bật hơi rõ ở qǐ, chuáng."
      ),
      speakingShadowing(
        "hsk2-l2-q2",
        "我每天早上都要出去跑步。",
        "Wǒ měitiān zǎoshang dōu yào chūqù pǎobù.",
        "Đọc trôi chảy câu nói về thói quen chạy bộ buổi sáng:",
        ["zǎoshang (thanh nhẹ shang)", "pǎobù (bật hơi p-)"],
        "Nhấn nhẹ ở 早上 (zǎoshang) và phát âm dứt khoát thanh 4 ở 要, 去, 步."
      ),
      speakingShadowing(
        "hsk2-l2-q3",
        "你很少生病，是不是喜欢运动？",
        "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?",
        "Luyện ngữ điệu câu hỏi xác nhận với 是不是:",
        ["shì bu shì (bu đọc thanh nhẹ)", "shēngbìng (vần -eng/-ing)"],
        "Trong khẩu ngữ, 是不是 đọc lướt nhẹ âm 不 (shì bu shì), cuối câu hơi lên giọng nhẹ."
      ),
      speakingShadowing(
        "hsk2-l2-q4",
        "吃药了吗？现在身体怎么样？",
        "Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?",
        "Luyện câu hỏi thăm sức khỏe người ốm:",
        ["chī (uốn lưỡi, bật hơi)", "shēntǐ (uốn lưỡi sh-)"],
        "Chú ý âm uốn lưỡi chī và shēn, giữ nhịp tự nhiên khi hỏi thăm."
      ),
      speakingShadowing(
        "hsk2-l2-q5",
        "医生说我下个星期能出院。",
        "Yīshēng shuō wǒ xià gè xīngqī néng chūyuàn.",
        "Luyện đọc câu thông báo thời gian xuất viện:",
        ["chūyuàn (âm ch- + vần üan)", "xīngqī (thanh 1 giữ cao đều)"],
        "Giữ cao độ đều cho 医生 và 星期 (thanh 1), tròn môi khi đọc 出院 (chūyuàn)."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 左边那个红色的是我的 (Cái màu đỏ bên trái là của tôi)
  // ==========================================
  {
    id: "hsk2-l3-hongse",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Cái màu đỏ bên trái là của tôi",
    titleZh: "第三课：左边那个红色的是我的",
    titlePinyin: "Dì sān kè: Zuǒbian nàge hóngsè de shì wǒ de",
    skillFocus: "reading",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=BeeTBdIE1yU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 3 左边那个红色的是我的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Kết cấu chữ 的 (de): Đại từ/Tính từ/Động từ + 的 có thể đứng độc lập như một cụm danh từ khi danh từ phía sau đã rõ ngữ cảnh (ví dụ: 红色的 = cái màu đỏ, 我的 = cái của tôi).",
      "Động từ + 一下 (yíxià) biểu thị hành động diễn ra nhanh, ngắn gọn hoặc làm cho ngữ khí yêu cầu trở nên nhẹ nhàng, lịch sự hơn.",
      "Phương vị từ 左边 (bên trái), 旁边 (bên cạnh) thường đứng sau danh từ để chỉ vị trí.",
    ],
    newWords: [
      {
        hanzi: "手表",
        pinyin: "shǒubiǎo",
        partOfSpeech: "Danh từ",
        meaningVi: "đồng hồ đeo tay",
        radical: "手 (Thủ)",
        strokeCount: 12,
      },
      {
        hanzi: "千",
        pinyin: "qiān",
        partOfSpeech: "Số từ",
        meaningVi: "nghìn (1.000)",
        radical: "十 (Thập)",
        strokeCount: 3,
      },
      {
        hanzi: "报纸",
        pinyin: "bàozhǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "báo giấy, tờ báo",
        radical: "扌 (Tài gẩy)",
        strokeCount: 14,
      },
      {
        hanzi: "送",
        pinyin: "sòng",
        partOfSpeech: "Động từ",
        meaningVi: "tặng, giao, tiễn",
        radical: "辶 (Xước)",
        strokeCount: 9,
      },
      {
        hanzi: "一下",
        pinyin: "yíxià",
        partOfSpeech: "Số lượng từ",
        meaningVi: "một chút, một lát",
        radical: "一 (Nhất)",
        strokeCount: 4,
      },
      {
        hanzi: "牛奶",
        pinyin: "niúnǎi",
        partOfSpeech: "Danh từ",
        meaningVi: "sữa bò",
        radical: "牛 (Ngưu)",
        strokeCount: 9,
      },
      {
        hanzi: "房间",
        pinyin: "fángjiān",
        partOfSpeech: "Danh từ",
        meaningVi: "căn phòng",
        radical: "户 (Hộ)",
        strokeCount: 15,
      },
      {
        hanzi: "旁边",
        pinyin: "pángbiān",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "bên cạnh",
        radical: "方 (Phương)",
        strokeCount: 15,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đồng hồ đeo tay của ai?",
        lines: [
          {
            speaker: "A",
            zh: "这块手表是你的吗？",
            pinyin: "Zhè kuài shǒubiǎo shì nǐ de ma?",
            vi: "Chiếc đồng hồ đeo tay này là của bạn à?",
          },
          {
            speaker: "B",
            zh: "不是我的。左边那个红色的是我的。",
            pinyin: "Bú shì wǒ de. Zuǒbian nàge hóngsè de shì wǒ de.",
            vi: "Không phải của tôi. Cái màu đỏ bên trái mới là của tôi.",
          },
          {
            speaker: "A",
            zh: "这块手表真漂亮，多少钱？",
            pinyin: "Zhè kuài shǒubiǎo zhēn piàoliang, duōshao qián?",
            vi: "Chiếc đồng hồ này đẹp thật, bao nhiêu tiền thế?",
          },
          {
            speaker: "B",
            zh: "三千多块。",
            pinyin: "Sān qiān duō kuài.",
            vi: "Hơn ba nghìn tệ.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Sữa và báo trong phòng",
        lines: [
          {
            speaker: "A",
            zh: "这是今天早上的报纸吗？",
            pinyin: "Zhè shì jīntiān zǎoshang de bàozhǐ ma?",
            vi: "Đây là báo sáng nay phải không?",
          },
          {
            speaker: "B",
            zh: "不是，是昨天的。",
            pinyin: "Bú shì, shì zuótiān de.",
            vi: "Không phải, là báo hôm qua.",
          },
          {
            speaker: "A",
            zh: "你听一下，是不是送牛奶的来了？",
            pinyin: "Nǐ tīng yíxià, shì bu shì sòng niúnǎi de lái le?",
            vi: "Bạn nghe thử xem, có phải người giao sữa tới rồi không?",
          },
          {
            speaker: "B",
            zh: "是，牛奶就在房间旁边。",
            pinyin: "Shì, niúnǎi jiù zài fángjiān pángbiān.",
            vi: "Đúng rồi, sữa ở ngay bên cạnh phòng đấy.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Kết cấu chữ 的 (de) lược bỏ danh từ",
        formula: "Đại từ / Tính từ / Động từ + 的",
        explanationVi:
          "Khi danh từ phía sau đã được nhắc đến hoặc người nghe đã hiểu rõ, có thể lược bỏ danh từ để tạo thành cụm danh từ ngắn gọn.",
        examples: [
          {
            zh: "左边那个红色的是我的。",
            pinyin: "Zuǒbian nàge hóngsè de shì wǒ de.",
            vi: "Cái màu đỏ bên trái là của tôi.",
          },
          {
            zh: "送牛奶的来了。",
            pinyin: "Sòng niúnǎi de lái le.",
            vi: "Người giao sữa đến rồi.",
          },
        ],
      },
      {
        titleVi: "Động từ + 一下 (yíxià)",
        formula: "Chủ ngữ + Động từ + 一下 + (Tân ngữ)",
        explanationVi:
          "Diễn tả hành động thực hiện nhanh chóng, thử làm một chút, đồng thời làm mềm giọng điệu câu đề nghị.",
        examples: [
          {
            zh: "你听一下。",
            pinyin: "Nǐ tīng yíxià.",
            vi: "Bạn nghe một chút đi.",
          },
          {
            zh: "我看一下你的手表。",
            pinyin: "Wǒ kàn yíxià nǐ de shǒubiǎo.",
            vi: "Tôi xem qua đồng hồ của bạn một chút.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk2-l3-q1",
        "桌子上有两块手表，左边那个红色的是我的，右边那个黑色的是我哥哥的。",
        "Zhuōzi shàng yǒu liǎng kuài shǒubiǎo, zuǒbian nàge hóngsè de shì wǒ de, yòubian nàge hēisè de shì wǒ gēge de.",
        "Trên bàn có hai chiếc đồng hồ đeo tay, cái màu đỏ bên trái là của tôi, cái màu đen bên phải là của anh trai tôi.",
        "Chiếc đồng hồ màu đỏ nằm ở vị trí nào và là của ai?",
        [
          "Bên trái, của tôi",
          "Bên phải, của tôi",
          "Bên trái, của anh trai",
          "Bên phải, của anh trai",
        ],
        "Bên trái, của tôi",
        "Câu văn nêu rõ: 左边那个红色的是我的 (Cái màu đỏ bên trái là của tôi)."
      ),
      readingComp(
        "hsk2-l3-q2",
        "这块新手表真漂亮，是爸爸送我的生日礼物，花了三千多块钱。",
        "Zhè kuài xīn shǒubiǎo zhēn piàoliang, shì bàba sòng wǒ de shēngrì lǐwù, huā le sān qiān duō kuài qián.",
        "Chiếc đồng hồ mới này thật đẹp, là quà sinh nhật bố tặng tôi, tốn hơn ba nghìn tệ.",
        "Giá của chiếc đồng hồ là bao nhiêu?",
        ["Hơn 300 tệ", "Hơn 3.000 tệ", "Hơn 1.300 tệ", "Hơn 30.000 tệ"],
        "Hơn 3.000 tệ",
        "三千多块 (sān qiān duō kuài) nghĩa là hơn ba nghìn tệ."
      ),
      readingComp(
        "hsk2-l3-q3",
        "每天早上七点，送牛奶的人都会把牛奶放在我们房间旁边。",
        "Měitiān zǎoshang qī diǎn, sòng niúnǎi de rén dōu huì bǎ niúnǎi fàng zài wǒmen fángjiān pángbiān.",
        "7 giờ sáng mỗi ngày, người giao sữa đều đặt sữa ở bên cạnh phòng chúng tôi.",
        "Người giao sữa thường đặt sữa ở đâu?",
        [
          "Trong bếp",
          "Trên bàn ăn",
          "Bên cạnh căn phòng",
          "Ngoài cổng công ty",
        ],
        "Bên cạnh căn phòng",
        "房间旁边 (fángjiān pángbiān) nghĩa là bên cạnh căn phòng."
      ),
      readingComp(
        "hsk2-l3-q4",
        "爸爸每天早上喝一杯牛奶，再看一下今天的报纸。",
        "Bàba měitiān zǎoshang hē yì bēi niúnǎi, zài kàn yíxià jīntiān de bàozhǐ.",
        "Sáng nào bố cũng uống một ly sữa bò, rồi xem qua tờ báo hôm nay.",
        "Buổi sáng bố thường làm hai việc gì?",
        [
          "Chạy bộ và ăn sáng",
          "Uống sữa và đọc báo",
          "Uống trà và xem TV",
          "Mua báo và đi làm",
        ],
        "Uống sữa và đọc báo",
        "喝一杯牛奶 (uống một ly sữa) và 看一下今天的报纸 (xem qua tờ báo hôm nay)."
      ),
      readingComp(
        "hsk2-l3-q5",
        "桌子上那张报纸不是今天的，是昨天的。",
        "Zhuōzi shàng nà zhāng bàozhǐ bú shì jīntiān de, shì zuótiān de.",
        "Tờ báo trên bàn kia không phải của hôm nay, mà là của hôm qua.",
        "Cụm từ '昨天的' trong câu dùng để chỉ cái gì?",
        [
          "Sữa của hôm qua",
          "Đồng hồ của hôm qua",
          "Tờ báo của hôm qua",
          "Căn phòng hôm qua",
        ],
        "Tờ báo của hôm qua",
        "Kết cấu chữ 的 lược bỏ danh từ 报纸 đã xuất hiện ở vế trước."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 这个工作是他帮我介绍的 (Công việc này là anh ấy giới thiệu giúp tôi)
  // ==========================================
  {
    id: "hsk2-l4-jieshao",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 4,
    title: "Bài 4: Công việc này là anh ấy giới thiệu giúp tôi",
    titleZh: "第四课：这个工作是他帮我介绍的",
    titlePinyin: "Dì sì kè: Zhège gōngzuò shì tā bāng wǒ jièshào de",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=-1RVIypUDLY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 4 这个工作是他帮我介绍的",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Cấu trúc nhấn mạnh 是……的 (shì... de) dùng cho sự việc ĐÃ XẢY RA để nhấn mạnh thời gian, địa điểm, cách thức hoặc chủ thể thực hiện hành động.",
      "Trong câu khẳng định, 是 có thể lược bỏ nhưng 的 bắt buộc giữ lại; trong câu phủ định dùng 不是……的.",
      "Phó từ 非常 (fēicháng — vô cùng, rất) đặt trước tính từ hoặc động từ tâm lý để tăng mạnh mức độ.",
    ],
    newWords: [
      {
        hanzi: "生日",
        pinyin: "shēngrì",
        partOfSpeech: "Danh từ",
        meaningVi: "sinh nhật",
        radical: "生 (Sinh)",
        strokeCount: 9,
      },
      {
        hanzi: "快乐",
        pinyin: "kuàilè",
        partOfSpeech: "Tính từ",
        meaningVi: "vui vẻ, hạnh phúc",
        radical: "忄 (Tâm đứng)",
        strokeCount: 12,
      },
      {
        hanzi: "给",
        pinyin: "gěi",
        partOfSpeech: "Giới từ / Động từ",
        meaningVi: "cho, đưa cho",
        radical: "纟 (Mịch)",
        strokeCount: 9,
      },
      {
        hanzi: "接",
        pinyin: "jiē",
        partOfSpeech: "Động từ",
        meaningVi: "nghe (điện thoại), đón (người)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 11,
      },
      {
        hanzi: "晚上",
        pinyin: "wǎnshang",
        partOfSpeech: "Danh từ",
        meaningVi: "buổi tối",
        radical: "日 (Nhật)",
        strokeCount: 14,
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
        hanzi: "非常",
        pinyin: "fēicháng",
        partOfSpeech: "Phó từ",
        meaningVi: "vô cùng, rất",
        radical: "非 (Phi)",
        strokeCount: 19,
      },
      {
        hanzi: "开始",
        pinyin: "kāishǐ",
        partOfSpeech: "Động từ",
        meaningVi: "bắt đầu",
        radical: "廾 (Củng)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Chúc mừng sinh nhật",
        lines: [
          {
            speaker: "A",
            zh: "生日快乐！这是送给你的。",
            pinyin: "Shēngrì kuàilè! Zhè shì sòng gěi nǐ de.",
            vi: "Chúc mừng sinh nhật! Đây là quà tặng cho bạn.",
          },
          {
            speaker: "B",
            zh: "谢谢！是一本书吗？",
            pinyin: "Xièxie! Shì yì běn shū ma?",
            vi: "Cảm ơn! Là một cuốn sách phải không?",
          },
          {
            speaker: "A",
            zh: "对，这本书非常好看。",
            pinyin: "Duì, zhè běn shū fēicháng hǎokàn.",
            vi: "Đúng vậy, cuốn sách này hay vô cùng.",
          },
          {
            speaker: "B",
            zh: "晚上我们一起吃饭吧。",
            pinyin: "Wǎnshang wǒmen yìqǐ chīfàn ba.",
            vi: "Tối nay chúng ta cùng nhau đi ăn cơm nhé.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Công việc mới",
        lines: [
          {
            speaker: "A",
            zh: "你是什么时候开始工作的？",
            pinyin: "Nǐ shì shénme shíhou kāishǐ gōngzuò de?",
            vi: "Bạn bắt đầu đi làm từ khi nào thế?",
          },
          {
            speaker: "B",
            zh: "我是上个月开始工作的。",
            pinyin: "Wǒ shì shàng gè yuè kāishǐ gōngzuò de.",
            vi: "Tôi bắt đầu đi làm từ tháng trước.",
          },
          {
            speaker: "A",
            zh: "你喜欢现在的工作吗？",
            pinyin: "Nǐ xǐhuan xiànzài de gōngzuò ma?",
            vi: "Bạn có thích công việc hiện tại không?",
          },
          {
            speaker: "B",
            zh: "非常喜欢，这个工作是他帮我介绍的。",
            pinyin: "Fēicháng xǐhuan, zhège gōngzuò shì tā bāng wǒ jièshào de.",
            vi: "Rất thích, công việc này là anh ấy giới thiệu giúp tôi đấy.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nhấn mạnh 是……的 (shì... de)",
        formula: "Chủ ngữ + 是 + [Thời gian / Địa điểm / Chủ thể / Cách thức] + Động từ + 的",
        explanationVi:
          "Dùng khi sự việc đã xảy ra, nhằm nhấn mạnh chi tiết cụ thể (ai làm, làm lúc nào, ở đâu, bằng cách nào).",
        examples: [
          {
            zh: "这个工作是他帮我介绍的。",
            pinyin: "Zhège gōngzuò shì tā bāng wǒ jièshào de.",
            vi: "Công việc này là anh ấy giới thiệu giúp tôi.",
          },
          {
            zh: "我是昨天晚上到北京的。",
            pinyin: "Wǒ shì zuótiān wǎnshang dào Běijīng de.",
            vi: "Tôi đến Bắc Kinh vào tối hôm qua.",
          },
        ],
      },
      {
        titleVi: "Cách dùng phó từ 非常 (fēicháng)",
        formula: "非常 + Tính từ / Động từ tâm lý",
        explanationVi:
          "Biểu thị mức độ rất cao (vô cùng, cực kỳ), mạnh hơn 很 (hěn).",
        examples: [
          {
            zh: "我非常喜欢这个工作。",
            pinyin: "Wǒ fēicháng xǐhuan zhège gōngzuò.",
            vi: "Tôi vô cùng thích công việc này.",
          },
          {
            zh: "今天晚上非常冷。",
            pinyin: "Jīntiān wǎnshang fēicháng lěng.",
            vi: "Tối nay lạnh vô cùng.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk2-l4-q1",
        "问",
        "wèn",
        "hỏi",
        "Chữ 问 gồm bộ Môn (门 — cửa) bên ngoài và bộ Khẩu (口 — miệng) bên trong: mở cửa hỏi thăm."
      ),
      writingStroke(
        "hsk2-l4-q2",
        "给",
        "gěi",
        "cho, đưa cho",
        "Chữ 给 gồm bộ Mịch (纟) bên trái và chữ 合 bên phải, viết từ trái sang phải."
      ),
      writingOrder(
        "hsk2-l4-q3",
        "Sắp xếp các từ thành câu hoàn chỉnh: 'Công việc này là anh ấy giới thiệu giúp tôi.'",
        ["这个工作", "是", "他", "帮我", "介绍的"],
        "这个工作是他帮我介绍的",
        "Zhège gōngzuò shì tā bāng wǒ jièshào de",
        "Cấu trúc nhấn mạnh chủ thể: 这个工作 + 是 + 他 + 帮我介绍 + 的."
      ),
      writingOrder(
        "hsk2-l4-q4",
        "Sắp xếp các từ thành câu hỏi: 'Bạn bắt đầu học tiếng Trung từ khi nào?'",
        ["你", "是", "什么时候", "开始", "学汉语的"],
        "你是什么时候开始学汉语的",
        "Nǐ shì shénme shíhou kāishǐ xué Hànyǔ de",
        "Nhấn mạnh thời gian bằng cấu trúc 是 + 什么时候 + Động từ + 的."
      ),
      writingTwoSentences(
        "hsk2-l4-q5",
        "非常",
        "fēicháng",
        "vô cùng, rất",
        "Đặt 2 câu có chứa 非常 đứng trước tính từ hoặc động từ tâm lý (ví dụ: 非常高兴, 非常喜欢)."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 就买这件吧 (Mua chiếc này đi)
  // ==========================================
  {
    id: "hsk2-l5-maizhejian",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 5,
    title: "Bài 5: Mua chiếc này đi",
    titleZh: "第五课：就买这件吧",
    titlePinyin: "Dì wǔ kè: Jiù mǎi zhè jiàn ba",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-panda-studio",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=Bp1nrb0JJKo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 5 就买这件吧",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Phó từ 就 (jiù) kết hợp với động từ biểu thị quyết định dứt khoát dựa trên tình huống trước đó (ví dụ: 就买这件吧 — vậy mua chiếc này đi).",
      "Trợ từ ngữ khí 吧 (ba) đặt cuối câu biểu thị lời đề nghị, thương lượng hoặc đồng ý nhẹ nhàng.",
      "Phó từ 还 (hái — khá, cũng tương đối) đứng trước tính từ để diễn tả mức độ chấp nhận được (ví dụ: 还可以 — cũng được).",
    ],
    newWords: [
      {
        hanzi: "外面",
        pinyin: "wàimiàn",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "bên ngoài",
        radical: "夕 (Tịch)",
        strokeCount: 14,
      },
      {
        hanzi: "准备",
        pinyin: "zhǔnbèi",
        partOfSpeech: "Động từ",
        meaningVi: "chuẩn bị, dự định",
        radical: "冫 (Băng)",
        strokeCount: 18,
      },
      {
        hanzi: "就",
        pinyin: "jiù",
        partOfSpeech: "Phó từ",
        meaningVi: "liền, thì, ngay, cứ",
        radical: "尤 (Vưu)",
        strokeCount: 12,
      },
      {
        hanzi: "鱼",
        pinyin: "yú",
        partOfSpeech: "Danh từ",
        meaningVi: "cá",
        radical: "鱼 (Ngư)",
        strokeCount: 8,
      },
      {
        hanzi: "吧",
        pinyin: "ba",
        partOfSpeech: "Trợ từ ngữ khí",
        meaningVi: "nhé, đi, nhỉ",
        radical: "口 (Khẩu)",
        strokeCount: 7,
      },
      {
        hanzi: "件",
        pinyin: "jiàn",
        partOfSpeech: "Lượng từ",
        meaningVi: "chiếc, cái (dùng cho áo, sự việc)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 6,
      },
      {
        hanzi: "还",
        pinyin: "hái",
        partOfSpeech: "Phó từ",
        meaningVi: "còn, vẫn, khá (tương đối)",
        radical: "辶 (Xước)",
        strokeCount: 7,
      },
      {
        hanzi: "可以",
        pinyin: "kěyǐ",
        partOfSpeech: "Tính từ / Động từ",
        meaningVi: "có thể, cũng được",
        radical: "口 (Khẩu)",
        strokeCount: 9,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đi ăn cá bên ngoài",
        lines: [
          {
            speaker: "A",
            zh: "晚上我们去外面吃吧，你准备吃什么？",
            pinyin: "Wǎnshang wǒmen qù wàimiàn chī ba, nǐ zhǔnbèi chī shénme?",
            vi: "Tối nay chúng ta ra ngoài ăn đi, bạn định ăn gì?",
          },
          {
            speaker: "B",
            zh: "听说那家饭馆的鱼很好吃，我们就去那儿吧。",
            pinyin: "Tīngshuō nà jiā fànguǎn de yú hěn hǎochī, wǒmen jiù qù nàr ba.",
            vi: "Nghe nói món cá của quán ăn kia ngon lắm, chúng ta đến đó luôn đi.",
          },
          {
            speaker: "A",
            zh: "好，我准备一下就出发。",
            pinyin: "Hǎo, wǒ zhǔnbèi yíxià jiù chūfā.",
            vi: "Được, tôi chuẩn bị một chút rồi xuất phát ngay.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chọn mua áo",
        lines: [
          {
            speaker: "A",
            zh: "你觉得这件衣服怎么样？",
            pinyin: "Nǐ juéde zhè jiàn yīfu zěnmeyàng?",
            vi: "Bạn thấy chiếc áo này thế nào?",
          },
          {
            speaker: "B",
            zh: "颜色还可以，就是有点儿大。",
            pinyin: "Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.",
            vi: "Màu sắc cũng tạm được, chỉ là hơi rộng một chút.",
          },
          {
            speaker: "A",
            zh: "那件小的呢？",
            pinyin: "Nà jiàn xiǎo de ne?",
            vi: "Thế còn chiếc nhỏ kia?",
          },
          {
            speaker: "B",
            zh: "那件不错，就买这件吧！",
            pinyin: "Nà jiàn búcuò, jiù mǎi zhè jiàn ba!",
            vi: "Chiếc đó được đấy, cứ mua chiếc này đi!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 就 (jiù) biểu thị quyết định / kết luận",
        formula: "就 + Động từ + Tân ngữ + 吧",
        explanationVi:
          "Đặt trước động từ để thể hiện sự chốt lại phương án sau khi cân nhắc.",
        examples: [
          {
            zh: "就买这件吧。",
            pinyin: "Jiù mǎi zhè jiàn ba.",
            vi: "Cứ mua chiếc này đi.",
          },
          {
            zh: "我们就去那家饭馆吃饭吧。",
            pinyin: "Wǒmen jiù qù nà jiā fànguǎn chīfàn ba.",
            vi: "Chúng ta cứ đến quán ăn đó ăn cơm đi.",
          },
        ],
      },
      {
        titleVi: "Phó từ 还 (hái) chỉ mức độ chấp nhận được",
        formula: "还 + Tính từ (可以 / 不错 / 行)",
        explanationVi:
          "Khi đứng trước tính từ mang nghĩa tích cực, 还 diễn tả mức độ 'khá, tạm được, không tệ'.",
        examples: [
          {
            zh: "这件衣服还可以。",
            pinyin: "Zhè jiàn yīfu hái kěyǐ.",
            vi: "Chiếc áo này cũng tạm được.",
          },
          {
            zh: "今天的天气还不错。",
            pinyin: "Jīntiān de tiānqì hái búcuò.",
            vi: "Thời tiết hôm nay khá ổn.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk2-l5-q1",
        "这件衣服颜色还可以，就买这件吧。",
        "Zhè jiàn yīfu yánsè hái kěyǐ, jiù mǎi zhè jiàn ba.",
        "Nghe và cho biết người nói quyết định làm gì:",
        [
          "Không mua chiếc áo này",
          "Mua chiếc áo này",
          "Đổi sang màu khác",
          "Đi cửa hàng khác",
        ],
        "Mua chiếc áo này",
        "就买这件吧 nghĩa là 'Cứ mua chiếc này đi'."
      ),
      listeningFill(
        "hsk2-l5-q2",
        "晚上我准备去外面吃鱼。",
        "晚上我___去外面吃鱼。",
        "Wǎnshang wǒ zhǔnbèi qù wàimiàn chī yú.",
        "Nghe và điền động từ 'chuẩn bị / dự định' vào chỗ trống:",
        "准备",
        "准备 (zhǔnbèi) nghĩa là chuẩn bị hoặc dự định làm gì."
      ),
      listeningDialogue(
        "hsk2-l5-q3",
        "A: 晚上去外面吃鱼怎么样？ B: 好啊，我就喜欢吃鱼。",
        "A: Wǎnshang qù wàimiàn chī yú zěnmeyàng? B: Hǎo a, wǒ jiù xǐhuan chī yú.",
        "Nghe đoạn hội thoại: Hai người định ăn món gì vào buổi tối?",
        ["Thịt cừu", "Mì sợi", "Cá", "Cơm rang"],
        "Cá",
        "吃鱼 (chī yú) nghĩa là ăn cá."
      ),
      listeningMcq(
        "hsk2-l5-q4",
        "我觉得这件衣服还可以。",
        "Wǒ juéde zhè jiàn yīfu hái kěyǐ.",
        "Nghe và chọn nghĩa đúng nhất của cụm '还可以':",
        ["Rất đắt", "Cũng tạm được", "Không đẹp lắm", "Quá nhỏ"],
        "Cũng tạm được",
        "还可以 (hái kěyǐ) biểu thị mức độ khá, tạm ổn, chấp nhận được."
      ),
      listeningFill(
        "hsk2-l5-q5",
        "外面很冷，我们别出去了吧。",
        "___很冷，我们别出去了吧。",
        "Wàimiàn hěn lěng, wǒmen bié chūqù le ba.",
        "Nghe và điền danh từ phương vị 'bên ngoài' vào chỗ trống:",
        "外面",
        "外面 (wàimiàn) là bên ngoài."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 你怎么不吃了 (Sao bạn không ăn nữa?)
  // ==========================================
  {
    id: "hsk2-l6-buchile",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 6,
    title: "Bài 6: Sao bạn không ăn nữa?",
    titleZh: "第六课：你怎么不吃了",
    titlePinyin: "Dì liù kè: Nǐ zěnme bù chī le",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=hoHbBKQpXd0",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 6 你怎么不吃了",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Đại từ nghi vấn 怎么 (zěnme) khi đứng trước động từ phủ định (不/没) thường dùng để hỏi nguyên nhân mang sắc thái ngạc nhiên: 'Sao lại...?'",
      "Cặp liên từ 因为……所以…… (yīnwèi... suǒyǐ... — bởi vì... cho nên...) dùng để diễn đạt quan hệ nhân quả.",
      "Động từ lặp lại một âm tiết (ví dụ: 吃吃, 看看) hoặc câu hỏi nguyên nhân giúp hội thoại tự nhiên hơn.",
    ],
    newWords: [
      {
        hanzi: "门",
        pinyin: "mén",
        partOfSpeech: "Danh từ",
        meaningVi: "cửa, cổng",
        radical: "门 (Môn)",
        strokeCount: 3,
      },
      {
        hanzi: "外",
        pinyin: "wài",
        partOfSpeech: "Danh từ phương vị",
        meaningVi: "ngoài, bên ngoài",
        radical: "夕 (Tịch)",
        strokeCount: 5,
      },
      {
        hanzi: "自行车",
        pinyin: "zìxíngchē",
        partOfSpeech: "Danh từ",
        meaningVi: "xe đạp",
        radical: "自 (Tự)",
        strokeCount: 16,
      },
      {
        hanzi: "羊肉",
        pinyin: "yángròu",
        partOfSpeech: "Danh từ",
        meaningVi: "thịt cừu",
        radical: "羊 (Dương)",
        strokeCount: 12,
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
        hanzi: "面条",
        pinyin: "miàntiáo",
        partOfSpeech: "Danh từ",
        meaningVi: "mì sợi",
        radical: "面 (Diện)",
        strokeCount: 16,
      },
      {
        hanzi: "打篮球",
        pinyin: "dǎ lánqiú",
        partOfSpeech: "Cụm động từ",
        meaningVi: "chơi bóng rổ",
        radical: "扌 (Tài gẩy)",
        strokeCount: 32,
      },
      {
        hanzi: "因为",
        pinyin: "yīnwèi",
        partOfSpeech: "Liên từ",
        meaningVi: "bởi vì",
        radical: "囗 (Vi)",
        strokeCount: 10,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Sao bạn không ăn nữa?",
        lines: [
          {
            speaker: "A",
            zh: "你怎么不吃了？羊肉不好吃吗？",
            pinyin: "Nǐ zěnme bù chī le? Yángròu bù hǎochī ma?",
            vi: "Sao bạn không ăn nữa? Thịt cừu không ngon à?",
          },
          {
            speaker: "B",
            zh: "羊肉很好吃，但是我吃饱了。",
            pinyin: "Yángròu hěn hǎochī, dànshì wǒ chībǎo le.",
            vi: "Thịt cừu rất ngon, nhưng tôi ăn no rồi.",
          },
          {
            speaker: "A",
            zh: "那再来一碗面条吧？",
            pinyin: "Nà zài lái yì wǎn miàntiáo ba?",
            vi: "Vậy làm thêm một bát mì sợi nhé?",
          },
          {
            speaker: "B",
            zh: "真的吃不下了，谢谢。",
            pinyin: "Zhēn de chī bú xià le, xièxie.",
            vi: "Thật sự không ăn nổi nữa rồi, cảm ơn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Sao hôm nay không đi chơi bóng rổ?",
        lines: [
          {
            speaker: "A",
            zh: "你今天怎么不去打篮球？",
            pinyin: "Nǐ jīntiān zěnme bú qù dǎ lánqiú?",
            vi: "Hôm nay sao bạn không đi chơi bóng rổ?",
          },
          {
            speaker: "B",
            zh: "因为昨天生病了，所以今天不能去。",
            pinyin: "Yīnwèi zuótiān shēngbìng le, suǒyǐ jīntiān bù néng qù.",
            vi: "Bởi vì hôm qua bị ốm, cho nên hôm nay không thể đi được.",
          },
          {
            speaker: "A",
            zh: "门外那辆自行车是你的吗？",
            pinyin: "Mén wài nà liàng zìxíngchē shì nǐ de ma?",
            vi: "Chiếc xe đạp ngoài cửa kia là của bạn à?",
          },
          {
            speaker: "B",
            zh: "不是，是我朋友的。",
            pinyin: "Bú shì, shì wǒ péngyou de.",
            vi: "Không phải, là của bạn tôi.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Đại từ nghi vấn 怎么 (zěnme) hỏi nguyên nhân",
        formula: "Chủ ngữ + 怎么 + (不/没) + Động từ...?",
        explanationVi:
          "Khác với 为什么 (hỏi lý do khách quan), 怎么 hỏi nguyên nhân thường kèm theo sắc thái ngạc nhiên hoặc thắc mắc trước tình huống bất ngờ.",
        examples: [
          {
            zh: "你怎么不吃了？",
            pinyin: "Nǐ zěnme bù chī le?",
            vi: "Sao bạn không ăn nữa?",
          },
          {
            zh: "他今天怎么没来上课？",
            pinyin: "Tā jīntiān zěnme méi lái shàngkè?",
            vi: "Hôm nay sao anh ấy không đến lớp?",
          },
        ],
      },
      {
        titleVi: "Cấu trúc nhân quả 因为……所以……",
        formula: "因为 + [Nguyên nhân]，所以 + [Kết quả]",
        explanationVi:
          "Biểu thị mối quan hệ nguyên nhân — kết quả (bởi vì... cho nên...). Có thể dùng cả cặp hoặc chỉ dùng một vế.",
        examples: [
          {
            zh: "因为下雨了，所以我没去打篮球。",
            pinyin: "Yīnwèi xiàyǔ le, suǒyǐ wǒ méi qù dǎ lánqiú.",
            vi: "Vì trời mưa nên tôi không đi chơi bóng rổ.",
          },
          {
            zh: "因为羊肉很好吃，所以我吃了很多。",
            pinyin: "Yīnwèi yángròu hěn hǎochī, suǒyǐ wǒ chī le hěn duō.",
            vi: "Vì thịt cừu rất ngon nên tôi đã ăn rất nhiều.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk2-l6-q1",
        "你怎么不吃了？羊肉不好吃吗？",
        "Nǐ zěnme bù chī le? Yángròu bù hǎochī ma?",
        "Luyện ngữ điệu ngạc nhiên khi hỏi 'Sao bạn không ăn nữa?':",
        ["zěnme (thanh 3 + thanh nhẹ)", "yángròu (ròu uốn lưỡi)"],
        "Nhấn vào từ 怎么 và đọc mềm âm ròu (thịt)."
      ),
      speakingShadowing(
        "hsk2-l6-q2",
        "因为昨天生病了，所以今天不能去打篮球。",
        "Yīnwèi zuótiān shēngbìng le, suǒyǐ jīntiān bù néng qù dǎ lánqiú.",
        "Luyện nói câu phức nhân quả 因为……所以……:",
        ["yīnwèi (thanh 1 + thanh 4)", "dǎ lánqiú (biến điệu dǎ + lán)"],
        "Ngắt nhịp rõ ràng ở dấu phẩy giữa vế nguyên nhân và vế kết quả."
      ),
      speakingShadowing(
        "hsk2-l6-q3",
        "门外那辆自行车是我朋友的。",
        "Mén wài nà liàng zìxíngchē shì wǒ péngyou de.",
        "Luyện phát âm cụm danh từ 'xe đạp ngoài cửa':",
        ["zìxíngchē (z- thẳng lưỡi, ch- uốn lưỡi)"],
        "Phân biệt rõ âm đầu lưỡi zì và âm uốn lưỡi chē trong 自行车."
      ),
      speakingShadowing(
        "hsk2-l6-q4",
        "这家饭馆的羊肉面条非常好吃。",
        "Zhè jiā fànguǎn de yángròu miàntiáo fēicháng hǎochī.",
        "Luyện đọc câu khen món mì thịt cừu ngon:",
        ["miàntiáo (thanh 4 + thanh 2)", "hǎochī (thanh 3 + thanh 1)"],
        "Phát âm rõ ràng từng thanh điệu, giữ hơi đều ở 非常好吃."
      ),
      speakingShadowing(
        "hsk2-l6-q5",
        "你今天怎么没骑自行车来？",
        "Nǐ jīntiān zěnme méi qí zìxíngchē lái?",
        "Luyện câu hỏi với 怎么没:",
        ["qí (bật hơi)", "zěnme méi (nhịp nối tự nhiên)"],
        "Bật hơi rõ chữ 骑 (qí — đạp xe) và lên giọng nhẹ cuối câu."
      ),
    ],
  },

  // ==========================================
  // BÀI 7: 你家离公司远吗 (Nhà bạn cách công ty có xa không?)
  // ==========================================
  {
    id: "hsk2-l7-ligongsi",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 7,
    title: "Bài 7: Nhà bạn cách công ty có xa không?",
    titleZh: "第七课：你家离公司远吗",
    titlePinyin: "Dì qī kè: Nǐ jiā lí gōngsī yuǎn ma",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "reading-day-hoc-tieng-trung-di",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=8oaO77qozX8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 7 你家离公司远吗",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Giới từ 离 (lí — cách) dùng để biểu thị khoảng cách về không gian hoặc thời gian giữa hai mốc: A + 离 + B + 很远 / 很近 / Khoảng cách.",
      "Khi nói đi bằng phương tiện giao thông công cộng, dùng động từ 坐 (zuò — ngồi/đi): 坐公共汽车 (đi xe buýt), 坐出租车 (đi taxi).",
      "Lượng từ của 小时 (xiǎoshí — tiếng đồng hồ) là 个: 一个小时 (1 tiếng), 半个小时 (nửa tiếng).",
    ],
    newWords: [
      {
        hanzi: "教室",
        pinyin: "jiàoshì",
        partOfSpeech: "Danh từ",
        meaningVi: "phòng học, lớp học",
        radical: "攵 (Phộc)",
        strokeCount: 20,
      },
      {
        hanzi: "机场",
        pinyin: "jīchǎng",
        partOfSpeech: "Danh từ",
        meaningVi: "sân bay",
        radical: "木 (Mộc)",
        strokeCount: 12,
      },
      {
        hanzi: "路",
        pinyin: "lù",
        partOfSpeech: "Danh từ",
        meaningVi: "con đường, tuyến (xe buýt)",
        radical: "足 (Túc)",
        strokeCount: 13,
      },
      {
        hanzi: "离",
        pinyin: "lí",
        partOfSpeech: "Giới từ",
        meaningVi: "cách (khoảng cách, thời gian)",
        radical: "亠 (Đầu)",
        strokeCount: 10,
      },
      {
        hanzi: "公司",
        pinyin: "gōngsī",
        partOfSpeech: "Danh từ",
        meaningVi: "công ty",
        radical: "八 (Bát)",
        strokeCount: 9,
      },
      {
        hanzi: "远",
        pinyin: "yuǎn",
        partOfSpeech: "Tính từ",
        meaningVi: "xa",
        radical: "辶 (Xước)",
        strokeCount: 7,
      },
      {
        hanzi: "公共汽车",
        pinyin: "gōnggòng qìchē",
        partOfSpeech: "Danh từ",
        meaningVi: "xe buýt công cộng",
        radical: "八 (Bát)",
        strokeCount: 21,
      },
      {
        hanzi: "小时",
        pinyin: "xiǎoshí",
        partOfSpeech: "Danh từ",
        meaningVi: "giờ đồng hồ, tiếng đồng hồ",
        radical: "小 (Tiểu)",
        strokeCount: 10,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Khoảng cách từ nhà đến công ty",
        lines: [
          {
            speaker: "A",
            zh: "你家离公司远吗？",
            pinyin: "Nǐ jiā lí gōngsī yuǎn ma?",
            vi: "Nhà bạn cách công ty có xa không?",
          },
          {
            speaker: "B",
            zh: "很远，坐公共汽车要一个多小时呢。",
            pinyin: "Hěn yuǎn, zuò gōnggòng qìchē yào yí gè duō xiǎoshí ne.",
            vi: "Rất xa, đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.",
          },
          {
            speaker: "A",
            zh: "坐公共汽车太慢了，你为什么不坐地铁？",
            pinyin: "Zuò gōnggòng qìchē tài màn le, nǐ wèishénme bú zuò dìtiě?",
            vi: "Đi xe buýt chậm quá, sao bạn không đi tàu điện ngầm?",
          },
          {
            speaker: "B",
            zh: "我家旁边没有地铁站。",
            pinyin: "Wǒ jiā pángbiān méiyǒu dìtiězhàn.",
            vi: "Bên cạnh nhà tôi không có trạm tàu điện ngầm.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Đường đi ra sân bay",
        lines: [
          {
            speaker: "A",
            zh: "请问，从这里到机场远吗？",
            pinyin: "Qǐngwèn, cóng zhèlǐ dào jīchǎng yuǎn ma?",
            vi: "Xin hỏi, từ đây đến sân bay có xa không?",
          },
          {
            speaker: "B",
            zh: "不太远，坐出租车二十分钟就到了。",
            pinyin: "Bú tài yuǎn, zuò chūzūchē èrshí fēnzhōng jiù dào le.",
            vi: "Không xa lắm, đi taxi 20 phút là tới.",
          },
          {
            speaker: "A",
            zh: "教室离机场呢？",
            pinyin: "Jiàoshì lí jīchǎng ne?",
            vi: "Thế còn phòng học cách sân bay thì sao?",
          },
          {
            speaker: "B",
            zh: "也很近，走这条路一直往前走。",
            pinyin: "Yě hěn jìn, zǒu zhè tiáo lù yìzhí wǎng qián zǒu.",
            vi: "Cũng rất gần, đi con đường này cứ đi thẳng về phía trước.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc chỉ khoảng cách với 离 (lí)",
        formula: "Địa điểm A + 离 + Địa điểm B + 很远 / 很近 / Khoảng cách",
        explanationVi:
          "Dùng để diễn tả khoảng cách giữa hai địa điểm (hoặc hai mốc thời gian). Lưu ý: Không nói '离A到B', mà phải nói 'A离B'.",
        examples: [
          {
            zh: "你家离公司远吗？",
            pinyin: "Nǐ jiā lí gōngsī yuǎn ma?",
            vi: "Nhà bạn cách công ty có xa không?",
          },
          {
            zh: "学校离机场很远。",
            pinyin: "Xuéxiào lí jīchǎng hěn yuǎn.",
            vi: "Trường học cách sân bay rất xa.",
          },
        ],
      },
      {
        titleVi: "Trợ từ ngữ khí 呢 (ne) nhấn mạnh sự thật",
        formula: "Câu trần thuật + 呢",
        explanationVi:
          "Ngoài việc dùng trong câu hỏi tỉnh lược, 呢 đặt cuối câu trần thuật còn có tác dụng nhấn mạnh một sự thật hoặc mức độ lớn (đấy, cơ đấy).",
        examples: [
          {
            zh: "坐公共汽车要一个多小时呢！",
            pinyin: "Zuò gōnggòng qìchē yào yí gè duō xiǎoshí ne!",
            vi: "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy!",
          },
          {
            zh: "八点上课，时间还早呢。",
            pinyin: "Bā diǎn shàngkè, shíjiān hái zǎo ne.",
            vi: "8 giờ mới vào lớp, thời gian vẫn còn sớm lắm.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk2-l7-q1",
        "我家离公司很远，每天早上我要坐一个多小时的公共汽车去上班。",
        "Wǒ jiā lí gōngsī hěn yuǎn, měitiān zǎoshang wǒ yào zuò yí gè duō xiǎoshí de gōnggòng qìchē qù shàngbān.",
        "Nhà tôi cách công ty rất xa, sáng nào tôi cũng phải đi xe buýt hơn một tiếng đồng hồ để đi làm.",
        "Người viết đi làm bằng phương tiện gì và mất bao lâu?",
        [
          "Đi xe đạp, 30 phút",
          "Đi xe buýt, hơn 1 tiếng",
          "Đi taxi, 20 phút",
          "Đi bộ, 1 tiếng",
        ],
        "Đi xe buýt, hơn 1 tiếng",
        "坐一个多小时的公共汽车 (đi xe buýt hơn một tiếng đồng hồ)."
      ),
      readingComp(
        "hsk2-l7-q2",
        "请问，去机场怎么走？这里离机场远吗？",
        "Qǐngwèn, qù jīchǎng zěnme zǒu? Zhèlǐ lí jīchǎng yuǎn ma?",
        "Xin hỏi, đi sân bay đi như thế nào? Ở đây cách sân bay có xa không?",
        "Người nói đang muốn đi đến địa điểm nào?",
        ["Công ty", "Phòng học", "Sân bay", "Bệnh viện"],
        "Sân bay",
        "机场 (jīchǎng) là sân bay."
      ),
      readingComp(
        "hsk2-l7-q3",
        "我的教室离图书馆很近，走路五分钟就到了。",
        "Wǒ de jiàoshì lí túshūguǎn hěn jìn, zǒulù wǔ fēnzhōng jiù dào le.",
        "Phòng học của tôi cách thư viện rất gần, đi bộ 5 phút là tới.",
        "Từ phòng học đến thư viện mất bao lâu nếu đi bộ?",
        ["5 phút", "15 phút", "50 phút", "1 tiếng"],
        "5 phút",
        "走路五分钟就到了 (đi bộ 5 phút là tới)."
      ),
      readingComp(
        "hsk2-l7-q4",
        "从学校到公司，坐105路公共汽车很方便。",
        "Cóng xuéxiào dào gōngsī, zuò yāo-líng-wǔ lù gōnggòng qìchē hěn fāngbiàn.",
        "Từ trường học đến công ty, đi xe buýt tuyến 105 rất tiện lợi.",
        "Chữ '路' trong '105路公共汽车' có nghĩa là gì?",
        ["Tuyến (xe buýt)", "Giờ đồng hồ", "Người lái xe", "Giá vé"],
        "Tuyến (xe buýt)",
        "路 (lù) ngoài nghĩa là con đường còn dùng để chỉ số tuyến xe buýt."
      ),
      readingComp(
        "hsk2-l7-q5",
        "离下午两点开会还有半个小时呢，别着急。",
        "Lí xiàwǔ liǎng diǎn kāihuì hái yǒu bàn gè xiǎoshí ne, bié zháojí.",
        "Cách cuộc họp lúc 2 giờ chiều vẫn còn nửa tiếng nữa cơ, đừng vội.",
        "Bây giờ là mấy giờ?",
        ["1 giờ", "1 giờ 30 phút", "2 giờ", "2 giờ 30 phút"],
        "1 giờ 30 phút",
        "Cách 2 giờ chiều còn 半个小时 (nửa tiếng) nên hiện tại là 1 giờ 30 phút."
      ),
    ],
  },

  // ==========================================
  // BÀI 8: 让我想想再告诉你 (Để tôi nghĩ thêm rồi nói cho bạn)
  // ==========================================
  {
    id: "hsk2-l8-xiangxiang",
    stageId: 2,
    hskLevel: "HSK2",
    subDifficulty: "basic",
    lessonNumber: 8,
    title: "Bài 8: Để tôi nghĩ thêm rồi nói cho bạn",
    titleZh: "第八课：让我想想再告诉你",
    titlePinyin: "Dì bā kè: Ràng wǒ xiǎngxiang zài gàosu nǐ",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "writing-thay-thang",
    recommendedChannelName: "Tiếng Trung Lý Dinh Trân",
    youtubeUrl: "https://www.youtube.com/watch?v=deMBhBT1HpM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 2 Bài 8 让我想想再告诉你",
    attachedResourceIds: [
      "res-4-hsk-textbooks",
      "res-2-slides-301",
      "res-9-speed-listening",
    ],
    grammarNotesVi: [
      "Phó từ 再 (zài) dùng trước động từ biểu thị một hành động xảy ra SAU một hành động khác (rồi mới...), hoặc sự lặp lại trong tương lai.",
      "Câu kiêm ngữ với 让 (ràng — để, bảo, khiến): Chủ ngữ 1 + 让 + Tân ngữ (Chủ ngữ 2) + Động từ (ví dụ: 让我想想 — để tôi nghĩ một chút).",
      "Động từ lặp lại AA (想想, 看看, 等等) diễn tả hành động diễn ra ngắn, nhẹ nhàng.",
    ],
    newWords: [
      {
        hanzi: "再",
        pinyin: "zài",
        partOfSpeech: "Phó từ",
        meaningVi: "lại, thêm lần nữa, rồi mới",
        radical: "冂 (Quynh)",
        strokeCount: 6,
      },
      {
        hanzi: "让",
        pinyin: "ràng",
        partOfSpeech: "Động từ",
        meaningVi: "để, bảo, nhường, khiến",
        radical: "讠 (Ngôn)",
        strokeCount: 5,
      },
      {
        hanzi: "告诉",
        pinyin: "gàosu",
        partOfSpeech: "Động từ",
        meaningVi: "nói cho biết, bảo cho biết",
        radical: "口 (Khẩu)",
        strokeCount: 14,
      },
      {
        hanzi: "等",
        pinyin: "děng",
        partOfSpeech: "Động từ",
        meaningVi: "đợi, chờ",
        radical: "竹 (Trúc)",
        strokeCount: 12,
      },
      {
        hanzi: "找",
        pinyin: "zhǎo",
        partOfSpeech: "Động từ",
        meaningVi: "tìm, kiếm",
        radical: "扌 (Tài gẩy)",
        strokeCount: 7,
      },
      {
        hanzi: "事情",
        pinyin: "shìqing",
        partOfSpeech: "Danh từ",
        meaningVi: "sự việc, công việc",
        radical: "亅 (Quyết)",
        strokeCount: 19,
      },
      {
        hanzi: "服务员",
        pinyin: "fúwùyuán",
        partOfSpeech: "Danh từ",
        meaningVi: "nhân viên phục vụ",
        radical: "月 (Nguyệt)",
        strokeCount: 20,
      },
      {
        hanzi: "白",
        pinyin: "bái",
        partOfSpeech: "Tính từ",
        meaningVi: "màu trắng",
        radical: "白 (Bạch)",
        strokeCount: 5,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Để tôi nghĩ thêm rồi trả lời bạn",
        lines: [
          {
            speaker: "A",
            zh: "我们下午去看电影，好吗？",
            pinyin: "Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?",
            vi: "Chiều nay chúng ta đi xem phim nhé, được không?",
          },
          {
            speaker: "B",
            zh: "下午我有点儿事情，让我想想再告诉你。",
            pinyin: "Xiàwǔ wǒ yǒudiǎnr shìqing, ràng wǒ xiǎngxiang zài gàosu nǐ.",
            vi: "Buổi chiều tôi có chút việc, để tôi nghĩ thêm rồi nói cho bạn nhé.",
          },
          {
            speaker: "A",
            zh: "好的，那我等你电话。",
            pinyin: "Hǎo de, nà wǒ děng nǐ diànhuà.",
            vi: "Được rồi, vậy tôi đợi điện thoại của bạn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Gọi nhân viên phục vụ",
        lines: [
          {
            speaker: "A",
            zh: "请问，您找谁？",
            pinyin: "Qǐngwèn, nín zhǎo shéi?",
            vi: "Xin hỏi, ngài tìm ai ạ?",
          },
          {
            speaker: "B",
            zh: "我找服务员，想再要一杯白开水。",
            pinyin: "Wǒ zhǎo fúwùyuán, xiǎng zài yào yì bēi báikāishuǐ.",
            vi: "Tôi tìm nhân viên phục vụ, muốn gọi thêm một ly nước lọc.",
          },
          {
            speaker: "A",
            zh: "好的，请等一下。",
            pinyin: "Hǎo de, qǐng děng yíxià.",
            vi: "Vâng ạ, xin đợi một chút.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phó từ 再 (zài — rồi mới / lặp lại)",
        formula: "Động từ 1 + 再 + Động từ 2",
        explanationVi:
          "Biểu thị hành động thứ hai chỉ diễn ra sau khi hành động thứ nhất hoàn thành.",
        examples: [
          {
            zh: "让我想想再告诉你。",
            pinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ.",
            vi: "Để tôi nghĩ một chút rồi mới nói cho bạn.",
          },
          {
            zh: "我们先吃饭再去看电影。",
            pinyin: "Wǒmen xiān chīfàn zài qù kàn diànyǐng.",
            vi: "Chúng ta ăn cơm trước rồi mới đi xem phim.",
          },
        ],
      },
      {
        titleVi: "Câu kiêm ngữ với 让 (ràng)",
        formula: "Chủ ngữ + 让 + Người + Động từ",
        explanationVi:
          "Tân ngữ của động từ 让 đồng thời làm chủ ngữ cho động từ phía sau, mang nghĩa 'để ai làm gì' hoặc 'bảo ai làm gì'.",
        examples: [
          {
            zh: "妈妈让我每天喝牛奶。",
            pinyin: "Māma ràng wǒ měitiān hē niúnǎi.",
            vi: "Mẹ bảo tôi mỗi ngày uống sữa.",
          },
          {
            zh: "请让我再看一看。",
            pinyin: "Qǐng ràng wǒ zài kàn yí kàn.",
            vi: "Xin hãy để tôi xem lại một chút.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk2-l8-q1",
        "再",
        "zài",
        "lại, rồi mới",
        "Chữ 再 gồm 6 nét: ngang trên, sổ trái, ngang gập móc, sổ giữa, ngang trong, ngang đáy dài."
      ),
      writingStroke(
        "hsk2-l8-q2",
        "找",
        "zhǎo",
        "tìm, kiếm",
        "Chữ 找 gồm bộ Tài gẩy (扌) bên trái và chữ 戈 bên phải, chú ý nét phẩy và chấm cuối cùng."
      ),
      writingOrder(
        "hsk2-l8-q3",
        "Sắp xếp các từ thành câu hoàn chỉnh: 'Để tôi nghĩ thêm rồi nói cho bạn.'",
        ["让", "我", "想想", "再", "告诉你"],
        "让我想想再告诉你",
        "Ràng wǒ xiǎngxiang zài gàosu nǐ",
        "Câu kiêm ngữ 让我想想 kết hợp với 再告诉你 (rồi mới nói cho bạn)."
      ),
      writingOrder(
        "hsk2-l8-q4",
        "Sắp xếp các từ thành câu hoàn chỉnh: 'Xin đợi một chút, tôi đi tìm nhân viên phục vụ.'",
        ["请", "等一下，", "我", "去", "找服务员"],
        "请等一下，我去找服务员",
        "Qǐng děng yíxià, wǒ qù zhǎo fúwùyuán",
        "Động từ 等 + 一下 (đợi một chút), sau đó là 去找服务员 (đi tìm nhân viên phục vụ)."
      ),
      writingTwoSentences(
        "hsk2-l8-q5",
        "告诉",
        "gàosu",
        "nói cho biết",
        "Đặt 2 câu có chứa động từ 告诉 (ví dụ: 请告诉我..., 他告诉我...)."
      ),
    ],
  },
];
