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

export const HSK7_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 流水线与生产计划 (Quy trình sản xuất & Dây chuyền công xưởng)
  // ==========================================
  {
    id: "hsk7-l1-factory",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Quy trình sản xuất & Dây chuyền công xưởng",
    titleZh: "第一课：流水线与生产计划",
    titlePinyin: "Dì yī kè: Liúshuǐxiàn yǔ shēngchǎn jìhuà",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Study Chinese",
    youtubeUrl: "https://www.youtube.com/watch?v=FcC-fGRBUng",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 1 流水线与生产计划",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc 按照……排产 (ànzhào... páichǎn — sắp xếp lịch sản xuất theo...): dùng phổ biến trong họp điều độ xưởng (PMC).",
      "Cấu trúc 一旦……就…… (yīdàn... jiù... — một khi... thì...): nhấn mạnh hệ quả khi dây chuyền gặp sự cố thiếu liệu hoặc dừng máy.",
      "Phân biệt 产能 (chǎnnéng — năng lực sản xuất tối đa) và 产量 (chǎnliàng — sản lượng thực tế đạt được).",
    ],
    newWords: [
      {
        hanzi: "流水线",
        pinyin: "liúshuǐxiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "dây chuyền sản xuất",
        radical: "氵 (Chấm thủy)",
        strokeCount: 22,
      },
      {
        hanzi: "排产",
        pinyin: "páichǎn",
        partOfSpeech: "Động từ",
        meaningVi: "lên lịch sản xuất, xếp chuyền",
        radical: "扌 (Tài gẩy)",
        strokeCount: 17,
      },
      {
        hanzi: "产能",
        pinyin: "chǎnnéng",
        partOfSpeech: "Danh từ",
        meaningVi: "năng lực sản xuất, công suất",
        radical: "立 (Lập)",
        strokeCount: 16,
      },
      {
        hanzi: "工序",
        pinyin: "gōngxù",
        partOfSpeech: "Danh từ",
        meaningVi: "công đoạn sản xuất",
        radical: "工 (Công)",
        strokeCount: 10,
      },
      {
        hanzi: "缺料",
        pinyin: "quēliào",
        partOfSpeech: "Động từ",
        meaningVi: "thiếu nguyên vật liệu",
        radical: "缶 (Phẫu)",
        strokeCount: 20,
      },
      {
        hanzi: "交期",
        pinyin: "jiāoqī",
        partOfSpeech: "Danh từ",
        meaningVi: "thời hạn giao hàng (lead time)",
        radical: "亠 (Đầu)",
        strokeCount: 18,
      },
      {
        hanzi: "车间",
        pinyin: "chējiān",
        partOfSpeech: "Danh từ",
        meaningVi: "phân xưởng sản xuất",
        radical: "车 (Xa)",
        strokeCount: 11,
      },
      {
        hanzi: "加急",
        pinyin: "jiājí",
        partOfSpeech: "Động từ",
        meaningVi: "làm gấp, đẩy tiến độ khẩn",
        radical: "力 (Lực)",
        strokeCount: 14,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Họp điều độ PMC đầu tuần tại phân xưởng",
        lines: [
          {
            speaker: "厂长 (Quản đốc)",
            zh: "三号车间这周的排产计划确定了吗？这批出口单交期非常紧。",
            pinyin:
              "Sān hào chējiān zhè zhōu de páichǎn jìhuà quèdìng le ma? Zhè pī chūkǒu dān jiāoqī fēicháng jǐn.",
            vi: "Kế hoạch xếp chuyền tuần này của xưởng 3 đã chốt chưa? Lô hàng xuất khẩu này hạn giao rất gấp.",
          },
          {
            speaker: "PMC主管 (Trưởng PMC)",
            zh: "已经排好了，两条流水线同时开，日产能可以达到五千件。",
            pinyin:
              "Yǐjīng páihǎo le, liǎng tiáo liúshuǐxiàn tóngshí kāi, rì chǎnnéng kěyǐ dádào wǔqiān jiàn.",
            vi: "Đã xếp xong rồi ạ, mở đồng thời hai dây chuyền thì công suất ngày có thể đạt 5.000 chiếc.",
          },
          {
            speaker: "厂长 (Quản đốc)",
            zh: "千万注意别缺料，一旦停线，后面的工序全都会延误。",
            pinyin:
              "Qiānwàn zhùyì bié quēliào, yīdàn tíngxiàn, hòumiàn de gōngxù quándōu huì yánwù.",
            vi: "Tuyệt đối chú ý đừng để thiếu liệu, một khi dừng chuyền thì mọi công đoạn phía sau đều bị trễ.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Xử lý đơn hàng加急 (làm gấp)",
        lines: [
          {
            speaker: "跟单员 (Nhân viên theo đơn)",
            zh: "王主任，客户刚发邮件要求把这批货提前三天出货，能加急吗？",
            pinyin:
              "Wáng zhǔrèn, kèhù gāng fā yóujiàn yāoqiú bǎ zhè pī huò tíqián sān tiān chūhuò, néng jiājí ma?",
            vi: "Chủ nhiệm Vương ơi, khách vừa gửi email yêu cầu xuất lô hàng này sớm 3 ngày, mình có làm gấp được không ạ?",
          },
          {
            speaker: "王主任 (Chủ nhiệm Vương)",
            zh: "如果今晚安排加班，把包装工序调到二线支援，应该赶得上交期。",
            pinyin:
              "Rúguǒ jīnwǎn ānpái jiābān, bǎ bāozhuāng gōngxù tiáodào èr xiàn zhīyuán, yīnggāi gǎndeshàng jiāoqī.",
            vi: "Nếu tối nay sắp xếp tăng ca, điều công đoạn đóng gói sang chuyền 2 hỗ trợ thì chắc kịp tiến độ giao hàng.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc điều kiện khẩn cấp 一旦……就…… (Một khi... thì...)",
        formula: "一旦 + [Sự cố/Điều kiện xảy ra]，就 + [Hệ quả nghiêm trọng]",
        explanationVi:
          "Dùng trong báo cáo sản xuất và quản lý rủi ro công xưởng để nhấn mạnh rằng chỉ cần một khâu trục trặc (thiếu liệu, mất điện, hỏng máy) thì toàn bộ dây chuyền sẽ lập tức chịu ảnh hưởng.",
        examples: [
          {
            zh: "一旦缺料，整条流水线就必须停工。",
            pinyin: "Yīdàn quēliào, zhěng tiáo liúshuǐxiàn jiù bìxū tínggōng.",
            vi: "Một khi thiếu liệu, cả dây chuyền sản xuất sẽ buộc phải dừng việc.",
          },
          {
            zh: "一旦错过船期，工厂就要承担空运费。",
            pinyin: "Yīdàn cuòguò chuánqī, gōngchǎng jiù yào chéngdān kōngyùnfèi.",
            vi: "Một khi lỡ lịch tàu, nhà máy sẽ phải chịu phí vận chuyển hàng không.",
          },
        ],
      },
      {
        titleVi: "Bổ ngữ khả năng 赶得上 / 赶不上 (Kịp / Không kịp tiến độ)",
        formula: "Chủ ngữ + 赶得上 / 赶不上 + 交期 / 船期 / 进度",
        explanationVi:
          "Trong môi trường sản xuất, 赶得上 (gǎndeshàng) và 赶不上 (gǎnbushàng) là cặp từ cốt lõi khi đánh giá năng lực đáp ứng thời hạn giao hàng (交期).",
        examples: [
          {
            zh: "按目前的产能，这批加急单完全赶得上交期。",
            pinyin: "Àn mùqián de chǎnnéng, zhè pī jiājí dān wánquán gǎndeshàng jiāoqī.",
            vi: "Theo công suất hiện tại, lô hàng gấp này hoàn toàn kịp hạn giao.",
          },
          {
            zh: "如果不增加人手，月底前肯定赶不上出货。",
            pinyin: "Rúguǒ bù zēngjiā rénshǒu, yuèdǐ qián kěndìng gǎnbushàng chūhuò.",
            vi: "Nếu không tăng thêm nhân lực, trước cuối tháng chắc chắn không kịp xuất hàng.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk7-l1-q1",
        "两条流水线同时开，日产能可以达到五千件。",
        "Liǎng tiáo liúshuǐxiàn tóngshí kāi, rì chǎnnéng kěyǐ dádào wǔqiān jiàn.",
        "Nghe và chọn công suất mỗi ngày khi mở đồng thời 2 dây chuyền:",
        ["3.000 chiếc", "5.000 chiếc", "8.000 chiếc", "10.000 chiếc"],
        "5.000 chiếc",
        "日产能可以达到五千件 (rì chǎnnéng kěyǐ dádào wǔqiān jiàn) = công suất ngày có thể đạt 5.000 chiếc."
      ),
      listeningFill(
        "hsk7-l1-q2",
        "千万注意别缺料，一旦停线，后面的工序全都会延误。",
        "千万注意别____，一旦停线，后面的工序全都会延误。",
        "Qiānwàn zhùyì bié ____, yīdàn tíngxiàn, hòumiàn de gōngxù quándōu huì yánwù.",
        "Nghe và điền từ tiếng Trung còn thiếu vào chỗ trống (2 chữ Hán):",
        "缺料",
        "缺料 (quēliào) nghĩa là thiếu nguyên vật liệu — nguyên nhân trực tiếp gây dừng chuyền (停线)."
      ),
      listeningDialogue(
        "hsk7-l1-q3",
        "客户刚发邮件要求把这批货提前三天出货，能加急吗？",
        "Kèhù gāng fā yóujiàn yāoqiú bǎ zhè pī huò tíqián sān tiān chūhuò, néng jiājí ma?",
        "Nghe lời nhân viên theo đơn và cho biết khách hàng yêu cầu điều gì:",
        [
          "Hủy đơn hàng hiện tại",
          "Xuất hàng sớm hơn 3 ngày",
          "Giảm 30% số lượng đặt hàng",
          "Đổi sang vận chuyển đường bộ",
        ],
        "Xuất hàng sớm hơn 3 ngày",
        "提前三天出货 (tíqián sān tiān chūhuò) = xuất hàng sớm hơn 3 ngày."
      ),
      listeningMcq(
        "hsk7-l1-q4",
        "三号车间这周的排产计划确定了吗？",
        "Sān hào chējiān zhè zhōu de páichǎn jìhuà quèdìng le ma?",
        "Nghe câu hỏi của quản đốc và chọn ý đúng nhất:",
        [
          "Hỏi xưởng 3 đã chốt kế hoạch xếp chuyền tuần này chưa",
          "Hỏi xưởng 3 có bao nhiêu công nhân nghỉ phép",
          "Hỏi máy móc xưởng 3 đã sửa xong chưa",
          "Hỏi xưởng 3 đã kiểm kho xong chưa",
        ],
        "Hỏi xưởng 3 đã chốt kế hoạch xếp chuyền tuần này chưa",
        "排产计划 (páichǎn jìhuà) = kế hoạch sắp xếp lịch sản xuất/xếp chuyền."
      ),
      listeningFill(
        "hsk7-l1-q5",
        "把包装工序调到二线支援，应该赶得上交期。",
        "把包装工序调到二线支援，应该赶得上____。",
        "Bǎ bāozhuāng gōngxù tiáodào èr xiàn zhīyuán, yīnggāi gǎndeshàng ____.",
        "Nghe và điền từ chỉ 'thời hạn giao hàng' vào chỗ trống:",
        "交期",
        "交期 (jiāoqī) là thời hạn giao hàng; 赶得上交期 = kịp hạn giao hàng."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 质检标准与次品处理 (Kiểm soát chất lượng QC & Xử lý hàng lỗi)
  // ==========================================
  {
    id: "hsk7-l2-qc",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Kiểm soát chất lượng QC & Xử lý hàng lỗi",
    titleZh: "第二课：质检标准与次品处理",
    titlePinyin: "Dì èr kè: Zhìjiǎn biāozhǔn yǔ cìpǐn chǔlǐ",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "CHUYÊN TIẾNG TRUNG THANH HÀ BẮC NINH",
    youtubeUrl: "https://www.youtube.com/watch?v=-Wbf8DHDwpU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 2 质检标准与次品处理",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc 把……控制在……以内 (bǎ... kòngzhì zài... yǐnèi — khống chế... ở mức dưới...): dùng khi đặt KPI tỷ lệ lỗi.",
      "Phân biệt 抽检 (chōujiǎn — kiểm tra ngẫu nhiên theo mẫu AQL) và 全检 (quánjiǎn — kiểm tra 100% toàn bộ lô hàng).",
      "Phân biệt 返工 (fǎngōng — làm lại, sửa lỗi để dùng tiếp) và 报废 (bàofèi — hủy bỏ, không thể sửa chữa).",
    ],
    newWords: [
      {
        hanzi: "质检",
        pinyin: "zhìjiǎn",
        partOfSpeech: "Danh/Động từ",
        meaningVi: "kiểm tra chất lượng (QC)",
        radical: "贝 (Bối)",
        strokeCount: 19,
      },
      {
        hanzi: "抽检",
        pinyin: "chōujiǎn",
        partOfSpeech: "Động từ",
        meaningVi: "kiểm tra xác suất, lấy mẫu kiểm",
        radical: "扌 (Tài gẩy)",
        strokeCount: 19,
      },
      {
        hanzi: "全检",
        pinyin: "quánjiǎn",
        partOfSpeech: "Động từ",
        meaningVi: "kiểm tra 100% toàn bộ lô hàng",
        radical: "人 (Nhân)",
        strokeCount: 17,
      },
      {
        hanzi: "次品",
        pinyin: "cìpǐn",
        partOfSpeech: "Danh từ",
        meaningVi: "hàng lỗi, thứ phẩm",
        radical: "欠 (Khiếm)",
        strokeCount: 15,
      },
      {
        hanzi: "不良率",
        pinyin: "bùliánglǜ",
        partOfSpeech: "Danh từ",
        meaningVi: "tỷ lệ hàng lỗi (defect rate)",
        radical: "一 (Nhất)",
        strokeCount: 22,
      },
      {
        hanzi: "返工",
        pinyin: "fǎngōng",
        partOfSpeech: "Động từ",
        meaningVi: "sửa lại, làm lại (rework)",
        radical: "辶 (Sước)",
        strokeCount: 10,
      },
      {
        hanzi: "报废",
        pinyin: "bàofèi",
        partOfSpeech: "Động từ",
        meaningVi: "báo phế, hủy bỏ hàng hỏng nặng",
        radical: "扌 (Tài gẩy)",
        strokeCount: 15,
      },
      {
        hanzi: "公差",
        pinyin: "gōngchā",
        partOfSpeech: "Danh từ",
        meaningVi: "dung sai kỹ thuật (tolerance)",
        radical: "八 (Bát)",
        strokeCount: 13,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Báo cáo kết quả kiểm hàng AQL trước khi đóng thùng",
        lines: [
          {
            speaker: "QC主管 (Trưởng nhóm QC)",
            zh: "李经理，这批货按AQL标准抽检，发现表面划痕和色差，不良率超过百分之三了。",
            pinyin:
              "Lǐ jīnglǐ, zhè pī huò àn AQL biāozhǔn chōujiǎn, fāxiàn biǎomiàn huáhén hé sèchā, bùliánglǜ chāoguò bǎifēnzhī sān le.",
            vi: "Giám đốc Lý ơi, lô hàng này kiểm mẫu theo chuẩn AQL phát hiện vết trầy bề mặt và lệch màu, tỷ lệ lỗi vượt quá 3% rồi.",
          },
          {
            speaker: "李经理 (Giám đốc Lý)",
            zh: "马上暂停打包，改成全检！所有次品挑出来分类，能修的立刻返工。",
            pinyin:
              "Mǎshàng zàntíng dǎbāo, gǎichéng quánjiǎn! Suǒyǒu cìpǐn tiāochūlái fēnlèi, néng xiū de lìkè fǎngōng.",
            vi: "Tạm dừng đóng gói ngay lập tức, chuyển sang kiểm 100%! Lọc toàn bộ hàng lỗi ra phân loại, cái nào sửa được thì cho làm lại ngay.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Thống nhất tiêu chuẩn dung sai với kỹ thuật",
        lines: [
          {
            speaker: "质检员 (Nhân viên QC)",
            zh: "这几个零件的尺寸超出了公差范围，应该怎么处理？",
            pinyin:
              "Zhè jǐ gè língjiàn de chǐcùn chāochū le gōngchā fànwéi, yīnggāi zěnme chǔlǐ?",
            vi: "Kích thước của mấy linh kiện này vượt quá phạm vi dung sai rồi, nên xử lý thế nào ạ?",
          },
          {
            speaker: "工程师 (Kỹ sư)",
            zh: "超出公差的不能勉强装配，直接做报废处理，并把不良率控制在百分之一以内。",
            pinyin:
              "Chāochū gōngchā de bùnéng miǎnqiǎng zhuāngpèi, zhíjiē zuò bàofèi chǔlǐ, bìng bǎ bùliánglǜ kòngzhì zài bǎifēnzhī yī yǐnèi.",
            vi: "Vượt dung sai thì không được cố lắp ráp, làm thủ tục báo phế trực tiếp và khống chế tỷ lệ lỗi dưới 1%.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc khống chế chỉ tiêu 把……控制在……以内",
        formula: "把 + [Chỉ số: 不良率 / 成本 / 公差] + 控制在 + [Mức giới hạn] + 以内",
        explanationVi:
          "Mẫu câu chuẩn mực khi giao KPI chất lượng hoặc chi phí trong nhà máy. 以内 (yǐnèi) có nghĩa là 'trong phạm vi / không vượt quá'.",
        examples: [
          {
            zh: "我们必须把不良率控制在百分之一以内。",
            pinyin: "Wǒmen bìxū bǎ bùliánglǜ kòngzhì zài bǎifēnzhī yī yǐnèi.",
            vi: "Chúng ta bắt buộc phải khống chế tỷ lệ lỗi dưới 1%.",
          },
          {
            zh: "尺寸误差要控制在两毫米以内。",
            pinyin: "Chǐcùn wùchā yào kòngzhì zài liǎng háomǐ yǐnèi.",
            vi: "Sai số kích thước phải được khống chế trong phạm vi 2mm.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 按……标准 (Theo tiêu chuẩn...)",
        formula: "按 + [Tiêu chuẩn / Quy định] + Động từ (抽检 / 生产 / 验收)",
        explanationVi:
          "按 (àn — rút gọn của 按照) kết hợp với 标准 (biāozhǔn) để khẳng định quy trình kiểm định có căn cứ rõ ràng, tránh tranh cãi giữa xưởng và khách.",
        examples: [
          {
            zh: "这批货按国际AQL标准抽检。",
            pinyin: "Zhè pī huò àn guójì AQL biāozhǔn chōujiǎn.",
            vi: "Lô hàng này kiểm tra xác suất theo tiêu chuẩn AQL quốc tế.",
          },
          {
            zh: "所有产品都按客户签样标准验收。",
            pinyin: "Suǒyǒu chǎnpǐn dōu àn kèhù qiānyàng biāozhǔn yànshōu.",
            vi: "Toàn bộ sản phẩm đều nghiệm thu theo tiêu chuẩn mẫu khách đã ký.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk7-l2-q1",
        "这批货的不良率超过了百分之三，必须马上全检。",
        "Zhè pī huò de bùliánglǜ chāoguò le bǎifēnzhī sān, bìxū mǎshàng quánjiǎn.",
        "Đọc to câu báo cáo QC (nhấn mạnh âm cong lưỡi ở 超过 và thanh 4 dứt khoát ở 必须):",
        ["Thanh 4 dứt khoát (lǜ, bìxū)", "Âm uốn lưỡi ch (chāoguò)"],
        "Phát âm rõ 率 (lǜ — tỷ lệ) với vận mẫu ü tròn môi, tránh nhầm sang lu."
      ),
      speakingShadowing(
        "hsk7-l2-q2",
        "所有次品挑出来分类，能修的立刻返工。",
        "Suǒyǒu cìpǐn tiāochūlái fēnlèi, néng xiū de lìkè fǎngōng.",
        "Đọc lệnh xử lý hàng lỗi tại xưởng, ngắt nhịp tự nhiên sau 分类:",
        ["Âm đầu lưỡi c (cìpǐn)", "Biến điệu thanh 3 (suǒyǒu → suóyǒu)"],
        "Chú ý 次 (cì) bật hơi nhẹ ở đầu lưỡi, và 所有 (suǒyǒu) biến điệu thành suóyǒu."
      ),
      speakingShadowing(
        "hsk7-l2-q3",
        "尺寸超出公差范围的零件直接做报废处理。",
        "Chǐcùn chāochū gōngchā fànwéi de língjiàn zhíjiē zuò bàofèi chǔlǐ.",
        "Đọc câu chỉ đạo kỹ thuật về dung sai và báo phế:",
        ["Âm uốn lưỡi ch, zh (chǐcùn, chāochū, zhíjiē)", "Biến điệu thanh 3 (chǔlǐ → chúlǐ)"],
        "处理 (chǔlǐ) có hai thanh 3 liền nhau nên đọc là chúlǐ."
      ),
      speakingShadowing(
        "hsk7-l2-q4",
        "我们必须把不良率控制在百分之一以内。",
        "Wǒmen bìxū bǎ bùliánglǜ kòngzhì zài bǎifēnzhī yī yǐnèi.",
        "Đọc câu cam kết KPI chất lượng với khách hàng:",
        ["Thanh 4 liên tiếp (kòngzhì zài)", "Vận mẫu ü (lǜ)"],
        "Giữ nhịp chắc chắn ở cụm 控制在 (kòngzhì zài) để thể hiện sự chuyên nghiệp."
      ),
      speakingShadowing(
        "hsk7-l2-q5",
        "请质检部门按客户签样标准严格抽检。",
        "Qǐng zhìjiǎn bùmén àn kèhù qiānyàng biāozhǔn yángé chōujiǎn.",
        "Đọc câu yêu cầu bộ phận QC kiểm mẫu theo hàng ký duyệt:",
        ["Âm bật hơi q, ch (qǐng, qiānyàng, chōujiǎn)", "Thanh 2 lên giọng (bùmén, yángé)"],
        "Nhấn mạnh 严格 (yángé — nghiêm ngặt) và 抽检 (chōujiǎn — kiểm mẫu)."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 鞋业生产与辅料采购 (Chuyên ngành Giày da, Dệt may & Nguyên phụ liệu)
  // ==========================================
  {
    id: "hsk7-l3-shoes",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Chuyên ngành Giày da, Dệt may & Nguyên phụ liệu",
    titleZh: "第三课：鞋业生产与辅料采购",
    titlePinyin: "Dì sān kè: Xiéyè shēngchǎn yǔ fǔliào cǎigòu",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "NGOẠI NGỮ HOA MỸ - 华美外语培训中心",
    youtubeUrl: "https://www.youtube.com/watch?v=ZrF3H_z9N70",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 3 鞋业生产与辅料采购",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc 不仅……而且…… (bùjǐn... érqiě... — không những... mà còn...): dùng khi đánh giá chất lượng chất liệu vải, da, đế giày.",
      "Cấu trúc 由……制成 (yóu... zhìchéng — được làm từ chất liệu...): cấu trúc bị động trang trọng trong bảng thông số kỹ thuật (BOM / Tech Pack).",
      "Phân biệt 面料 (miànliào — vải chính/da mặt ngoài) và 辅料 (fǔliào — nguyên phụ liệu đi kèm như chỉ, khóa kéo, keo, nhãn mác).",
    ],
    newWords: [
      {
        hanzi: "鞋底",
        pinyin: "xiédǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "đế giày",
        radical: "革 (Cách)",
        strokeCount: 23,
      },
      {
        hanzi: "鞋面",
        pinyin: "xiémiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "mũ giày, thân trên giày",
        radical: "革 (Cách)",
        strokeCount: 24,
      },
      {
        hanzi: "面料",
        pinyin: "miànliào",
        partOfSpeech: "Danh từ",
        meaningVi: "chất liệu chính, vải chính",
        radical: "面 (Diện)",
        strokeCount: 19,
      },
      {
        hanzi: "辅料",
        pinyin: "fǔliào",
        partOfSpeech: "Danh từ",
        meaningVi: "nguyên phụ liệu (chỉ, cúc, khóa, mác)",
        radical: "车 (Xa)",
        strokeCount: 21,
      },
      {
        hanzi: "打样",
        pinyin: "dǎyàng",
        partOfSpeech: "Động từ",
        meaningVi: "làm hàng mẫu (sampling)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 15,
      },
      {
        hanzi: "开模",
        pinyin: "kāimó",
        partOfSpeech: "Động từ",
        meaningVi: "mở khuôn đúc (đế giày, phụ kiện)",
        radical: "廾 (Củng)",
        strokeCount: 18,
      },
      {
        hanzi: "针车",
        pinyin: "zhēnchē",
        partOfSpeech: "Danh từ",
        meaningVi: "bộ phận may mũ giày / máy may công nghiệp",
        radical: "钅 (Kim)",
        strokeCount: 11,
      },
      {
        hanzi: "色牢度",
        pinyin: "sèláodù",
        partOfSpeech: "Danh từ",
        meaningVi: "độ bền màu (color fastness)",
        radical: "色 (Sắc)",
        strokeCount: 22,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trao đổi làm mẫu (打样) và mở khuôn đế giày",
        lines: [
          {
            speaker: "采购经理 (Trưởng phòng thu mua)",
            zh: "这款运动鞋的鞋面采用透气网布，鞋底需要重新开模吗？",
            pinyin:
              "Zhè kuǎn yùndòngxié de xiémiàn cǎiyòng tòuqì wǎngbù, xiédǐ xūyào chóngxīn kāimó ma?",
            vi: "Mũ của mẫu giày thể thao này dùng vải lưới thoáng khí, còn đế giày có cần mở khuôn mới không?",
          },
          {
            speaker: "开发部 (Bộ phận phát triển mẫu)",
            zh: "大底模具厂里有现成的，只需要调整一下纹路，五天就能完成打样。",
            pinyin:
              "Dàdǐ mújù chǎnglǐ yǒu xiànchéng de, zhǐ xūyào tiáozhěng yīxià wénlù, wǔ tiān jiù néng wánchéng dǎyàng.",
            vi: "Khuôn đế ngoài xưởng có sẵn rồi, chỉ cần chỉnh lại hoa văn chút thôi, 5 ngày là làm mẫu xong.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Kiểm tra độ bền màu vải và tiến độ xưởng may (针车)",
        lines: [
          {
            speaker: "跟单 (Theo đơn)",
            zh: "新到的深蓝色面料做过色牢度测试了吗？辅料仓那边拉链和鞋带齐了吗？",
            pinyin:
              "Xīn dào de shēnlánsè miànliào zuòguò sèláodù cèshì le ma? Fǔliào cāng nàbiān lāliàn hé xiédài qí le ma?",
            vi: "Vải chính màu xanh đậm mới về đã test độ bền màu chưa? Bên kho phụ liệu khóa kéo và dây giày đã đủ chưa?",
          },
          {
            speaker: "仓管 (Thủ kho)",
            zh: "色牢度已经达标了，所有辅料今天下午配齐，明天一早发给针车车间上线。",
            pinyin:
              "Sèláodù yǐjīng dábiāo le, suǒyǒu fǔliào jīntiān xiàwǔ pèiqí, míngtiān yīzǎo fāgěi zhēnchē chējiān shàngxiàn.",
            vi: "Độ bền màu đã đạt chuẩn rồi, toàn bộ phụ liệu chiều nay soạn đủ, sáng sớm mai phát cho xưởng may lên chuyền.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc mô tả chất liệu 由……制成 / 采用……面料",
        formula: "[Bộ phận sản phẩm] + 由 + [Chất liệu] + 制成 / 采用 + [Chất liệu]",
        explanationVi:
          "Dùng phổ biến trong bảng kê nguyên vật liệu (BOM) và mô tả sản phẩm giày da, may mặc để nêu rõ cấu tạo từng bộ phận.",
        examples: [
          {
            zh: "这款鞋底由环保橡胶制成，防滑耐磨。",
            pinyin: "Zhè kuǎn xiédǐ yóu huánbǎo xiàngjiāo zhìchéng, fánghuá nàimó.",
            vi: "Đế giày mẫu này được làm từ cao su thân thiện môi trường, chống trượt và chống mài mòn.",
          },
          {
            zh: "鞋面采用头层牛皮，手感非常柔软。",
            pinyin: "Xiémiàn cǎiyòng tóucéng niúpí, shǒugǎn fēicháng róuruǎn.",
            vi: "Mũ giày sử dụng da bò lớp 1, cảm giác sờ rất mềm mại.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 不仅……而且…… trong đánh giá vật tư",
        formula: "Chủ ngữ + 不仅 + [Ưu điểm 1]，而且 + [Ưu điểm 2]",
        explanationVi:
          "Giúp trình bày thuyết phục lý do chọn nhà cung cấp vải hoặc phụ liệu mới trong báo cáo thu mua.",
        examples: [
          {
            zh: "这种面料不仅色牢度高，而且成本更低。",
            pinyin: "Zhè zhǒng miànliào bùjǐn sèláodù gāo, érqiě chéngběn gèng dī.",
            vi: "Loại vải này không những độ bền màu cao mà chi phí còn thấp hơn.",
          },
          {
            zh: "这家辅料厂不仅打样快，而且起订量很灵活。",
            pinyin: "Zhè jiā fǔliào chǎng bùjǐn dǎyàng kuài, érqiě qǐdìngliàng hěn línghuó.",
            vi: "Xưởng phụ liệu này không những làm mẫu nhanh mà số lượng đặt tối thiểu cũng rất linh hoạt.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk7-l3-q1",
        "本款跑鞋鞋面采用透气网布，鞋底由高弹性EVA材料制成。因工厂已有现成模具，无需重新开模，预计五天内可完成打样。",
        "Běn kuǎn pǎoxié xiémiàn cǎiyòng tòuqì wǎngbù, xiédǐ yóu gāo tánxìng EVA cáiliào zhìchéng. Yīn gōngchǎng yǐ yǒu xiànchéng mújù, wúxū chóngxīn kāimó, yùjì wǔ tiān nèi kě wánchéng dǎyàng.",
        "Mẫu giày chạy bộ này có mũ giày dùng vải lưới thoáng khí, đế giày làm từ vật liệu EVA đàn hồi cao. Do nhà máy đã có sẵn khuôn nên không cần mở khuôn mới, dự kiến hoàn thành làm mẫu trong 5 ngày.",
        "Vì sao mẫu giày chạy bộ này có thể làm mẫu xong trong 5 ngày?",
        [
          "Vì không cần làm đế giày",
          "Vì nhà máy đã có sẵn khuôn đế, không cần mở khuôn mới",
          "Vì khách hàng tự gửi vải lưới sang",
          "Vì xưởng tăng ca cả cuối tuần",
        ],
        "Vì nhà máy đã có sẵn khuôn đế, không cần mở khuôn mới",
        "Đoạn văn nêu rõ: 因工厂已有现成模具，无需重新开模 (do xưởng đã có khuôn sẵn, không cần mở khuôn mới)."
      ),
      readingComp(
        "hsk7-l3-q2",
        "辅料仓通知：305号订单的拉链、鞋带及水洗标已全部配齐，请针车车间于明早八点派人领料上线。",
        "Fǔliào cāng tōngzhī: 305 hào dìngdān de lāliàn, xiédài jí shuǐxǐbiāo yǐ quánbù pèiqí, qǐng zhēnchē chējiān yú míngzǎo bā diǎn pàirén lǐngliào shàngxiàn.",
        "Thông báo kho phụ liệu: Khóa kéo, dây giày và tem hướng dẫn giặt của đơn hàng 305 đã soạn đủ toàn bộ, đề nghị xưởng may cử người đến lĩnh liệu lên chuyền lúc 8 giờ sáng mai.",
        "Bộ phận nào cần cử người đi lĩnh phụ liệu vào 8 giờ sáng mai?",
        [
          "Bộ phận QC",
          "Xưởng may (针车车间)",
          "Phòng xuất nhập khẩu",
          "Xưởng ép đế",
        ],
        "Xưởng may (针车车间)",
        "请针车车间于明早八点派人领料上线 = đề nghị xưởng may (针车车间) cử người đi lĩnh liệu."
      ),
      readingComp(
        "hsk7-l3-q3",
        "质检报告显示，新采购的黑色帆布干摩擦色牢度达到4级，湿摩擦达到3.5级，符合欧盟出口环保与耐洗标准。",
        "Zhìjiǎn bàogào xiǎnshì, xīn cǎigòu de hēisè fānbù gān mócā sèláodù dádào 4 jí, shī mócā dádào 3.5 jí, fúhé Ōuméng chūkǒu huánbǎo yǔ nàixǐ biāozhǔn.",
        "Báo cáo QC cho thấy vải bố đen mới mua có độ bền màu ma sát khô đạt cấp 4, ma sát ướt đạt cấp 3.5, phù hợp tiêu chuẩn môi trường và độ bền giặt xuất khẩu sang EU.",
        "Kết luận nào đúng về lô vải bố đen mới mua?",
        [
          "Không đạt chuẩn xuất khẩu sang EU",
          "Đạt tiêu chuẩn độ bền màu xuất khẩu sang EU",
          "Bị phai màu nặng khi ma sát khô",
          "Cần nhuộm lại toàn bộ",
        ],
        "Đạt tiêu chuẩn độ bền màu xuất khẩu sang EU",
        "符合欧盟出口环保与耐洗标准 = phù hợp tiêu chuẩn xuất khẩu sang EU."
      ),
      readingComp(
        "hsk7-l3-q4",
        "本次改款仅更换鞋面面料颜色，不改动鞋底结构，因此不需要支付额外开模费，但需要重新确认色卡。",
        "Běn cì gǎikuǎn jǐn gēnghuàn xiémiàn miànliào yánsè, bù gǎidòng xiédǐ jiégòu, yīncǐ bù xūyào zhīfù éwài kāimófèi, dàn xūyào chóngxīn quèrèn sèkǎ.",
        "Đợt chỉnh mẫu này chỉ thay màu vải mũ giày, không sửa cấu trúc đế giày, do đó không cần trả thêm phí mở khuôn, nhưng cần xác nhận lại bảng màu.",
        "Khách hàng cần làm gì cho đợt chỉnh mẫu này?",
        [
          "Trả thêm phí mở khuôn đế",
          "Xác nhận lại bảng màu (色卡)",
          "Thiết kế lại toàn bộ đế giày",
          "Đổi nhà cung cấp keo dán",
        ],
        "Xác nhận lại bảng màu (色卡)",
        "但需要重新确认色卡 = nhưng cần xác nhận lại bảng màu."
      ),
      readingComp(
        "hsk7-l3-q5",
        "在鞋服BOM清单中，皮革与网布属于主面料，而缝纫线、鞋眼扣、包装盒和吊牌则统一归类为辅料管理。",
        "Zài xiéfú BOM qīngdān zhōng, pígé yǔ wǎngbù shǔyú zhǔ miànliào, ér féngrènxiàn, xiéyǎnkòu, bāozhuānghé hé diàopái zé tǒngyī guīlèi wéi fǔliào guǎnlǐ.",
        "Trong danh mục BOM giày dép may mặc, da và vải lưới thuộc nhóm chất liệu chính, còn chỉ may, khoen xỏ dây, hộp đóng gói và thẻ bài được phân loại thống nhất vào nhóm phụ liệu.",
        "Vật tư nào sau đây thuộc nhóm 'phụ liệu' (辅料)?",
        [
          "Da bò và vải lưới",
          "Chỉ may, khoen xỏ dây và thẻ bài",
          "Chỉ có da tổng hợp",
          "Máy may công nghiệp",
        ],
        "Chỉ may, khoen xỏ dây và thẻ bài",
        "缝纫线 (chỉ may), 鞋眼扣 (khoen xỏ dây), 吊牌 (thẻ bài) đều được xếp vào nhóm 辅料 (phụ liệu)."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 出厂价谈判与起订量 (Đàm phán giá xuất xưởng 1688/Quảng Châu & MOQ)
  // ==========================================
  {
    id: "hsk7-l4-1688",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "advanced",
    lessonNumber: 4,
    title: "Bài 4: Đàm phán giá xuất xưởng 1688/Quảng Châu & MOQ",
    titleZh: "第四课：出厂价谈判与起订量",
    titlePinyin: "Dì sì kè: Chūchǎngjià tánpàn yǔ qǐdìngliàng",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Bảo Bảo",
    youtubeUrl: "https://www.youtube.com/watch?v=Ndy5Kg7YyMo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 4 出厂价谈判与起订量",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc 只要……就能…… (zhǐyào... jiù néng... — chỉ cần... là có thể...): vũ khí chốt điều kiện chiết khấu theo sản lượng.",
      "Cấu trúc 含税 / 不含税 (hánshuì / bù hánshuì — đã gồm thuế VAT / chưa gồm thuế): bắt buộc hỏi rõ khi lấy báo giá trên 1688 hoặc chợ Quảng Châu.",
      "Thuật ngữ thanh toán chuẩn: 预付30%定金，出货前付清70%尾款 (đặt cọc 30%, thanh toán nốt 70% trước khi xuất hàng).",
    ],
    newWords: [
      {
        hanzi: "出厂价",
        pinyin: "chūchǎngjià",
        partOfSpeech: "Danh từ",
        meaningVi: "giá xuất xưởng (EXW price)",
        radical: "凵 (Khảm)",
        strokeCount: 13,
      },
      {
        hanzi: "起订量",
        pinyin: "qǐdìngliàng",
        partOfSpeech: "Danh từ",
        meaningVi: "số lượng đặt tối thiểu (MOQ)",
        radical: "走 (Tẩu)",
        strokeCount: 26,
      },
      {
        hanzi: "报价",
        pinyin: "bàojià",
        partOfSpeech: "Danh/Động từ",
        meaningVi: "báo giá, bảng báo giá",
        radical: "扌 (Tài gẩy)",
        strokeCount: 13,
      },
      {
        hanzi: "含税",
        pinyin: "hánshuì",
        partOfSpeech: "Động từ",
        meaningVi: "đã bao gồm thuế (VAT)",
        radical: "口 (Khẩu)",
        strokeCount: 19,
      },
      {
        hanzi: "定金",
        pinyin: "dìngjīn",
        partOfSpeech: "Danh từ",
        meaningVi: "tiền đặt cọc",
        radical: "宀 (Miên)",
        strokeCount: 16,
      },
      {
        hanzi: "尾款",
        pinyin: "wěikuǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "khoản tiền thanh toán nốt còn lại",
        radical: "尸 (Thi)",
        strokeCount: 19,
      },
      {
        hanzi: "返单",
        pinyin: "fǎndān",
        partOfSpeech: "Động từ",
        meaningVi: "đặt lại đơn hàng (reorder)",
        radical: "辶 (Sước)",
        strokeCount: 15,
      },
      {
        hanzi: "让利",
        pinyin: "rànglì",
        partOfSpeech: "Động từ",
        meaningVi: "nhượng lợi, giảm bớt biên lãi để chốt đơn",
        radical: "讠 (Ngôn)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Thương lượng giá xuất xưởng và MOQ với chủ xưởng Quảng Châu",
        lines: [
          {
            speaker: "越南采购 (Bên mua VN)",
            zh: "陈老板，您刚才给的报价是含税出厂价吗？我们首批想先拿五百双试销，起订量能降一点吗？",
            pinyin:
              "Chén lǎobǎn, nín gāngcái gěi de bàojià shì hánshuì chūchǎngjià ma? Wǒmen shǒupī xiǎng xiān ná wǔbǎi shuāng shìxiāo, qǐdìngliàng néng jiàng yīdiǎn ma?",
            vi: "Ông chủ Trần ơi, báo giá ông vừa gửi là giá xuất xưởng đã gồm thuế chưa ạ? Lô đầu bên tôi muốn lấy 500 đôi bán thử, MOQ có giảm xuống chút được không?",
          },
          {
            speaker: "陈老板 (Chủ xưởng Trần)",
            zh: "这是不含税出厂价。五百双起订我可以配合，但单价要加两块；只要后续返单满两千双，我一定让利。",
            pinyin:
              "Zhè shì bù hánshuì chūchǎngjià. Wǔbǎi shuāng qǐdìng wǒ kěyǐ pèihé, dàn dānjià yào jiā liǎng kuài; zhǐyào hòuxù fǎndān mǎn liǎngqiān shuāng, wǒ yīdìng rànglì.",
            vi: "Đây là giá xuất xưởng chưa thuế. MOQ 500 đôi tôi có thể hỗ trợ, nhưng đơn giá phải cộng thêm 2 tệ; chỉ cần đơn đặt lại sau này đủ 2.000 đôi, tôi nhất định nhượng lãi giảm giá.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Chốt điều khoản đặt cọc và thanh toán 尾款",
        lines: [
          {
            speaker: "越南采购 (Bên mua VN)",
            zh: "那付款方式怎么安排？我们是长期合作，可以预付百分之三十定金吗？",
            pinyin:
              "Nà fùkuǎn fāngshì zěnme ānpái? Wǒmen shì chángqī hézuò, kěyǐ yùfù bǎifēnzhī sānshí dìngjīn ma?",
            vi: "Vậy phương thức thanh toán sắp xếp thế nào ạ? Chúng ta hợp tác lâu dài, có thể cọc trước 30% không?",
          },
          {
            speaker: "陈老板 (Chủ xưởng Trần)",
            zh: "没问题，预付百分之三十定金排产，验货合格后出货前付清百分之七十尾款。",
            pinyin:
              "Méi wèntí, yùfù bǎifēnzhī sānshí dìngjīn páichǎn, yànhuò hégé hòu chūhuò qián fùqīng bǎifēnzhī qīshí wěikuǎn.",
            vi: "Không vấn đề gì, cọc trước 30% để xếp chuyền sản xuất, kiểm hàng đạt chuẩn thì thanh toán nốt 70% tiền hàng trước khi xuất.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc thương lượng 只要……就…… (Chỉ cần... là...)",
        formula: "只要 + [Điều kiện số lượng/hợp tác]，就 + [Ưu đãi giá/điều khoản]",
        explanationVi:
          "Dùng rất hiệu quả trong đàm phán B2B để đưa ra điều kiện có đi có lại (win-win) thay vì chỉ ép giá một chiều.",
        examples: [
          {
            zh: "只要订单量超过一千件，我们就能给您出厂最低价。",
            pinyin: "Zhǐyào dìngdānliàng chāoguò yīqiān jiàn, wǒmen jiù néng gěi nín chūchǎng zuìdījià.",
            vi: "Chỉ cần số lượng đơn vượt 1.000 chiếc, chúng tôi có thể để cho ông giá xuất xưởng thấp nhất.",
          },
          {
            zh: "只要品质稳定，我们每个月都会持续返单。",
            pinyin: "Zhǐyào pǐnzhì wěndìng, wǒmen měi gè yuè dōu huì chíxù fǎndān.",
            vi: "Chỉ cần chất lượng ổn định, tháng nào chúng tôi cũng sẽ đặt lại hàng liên tục.",
          },
        ],
      },
      {
        titleVi: "Cách nói điều khoản thanh toán chuẩn trong hợp đồng",
        formula: "预付 X% 定金，[Điều kiện] 付清 Y% 尾款",
        explanationVi:
          "付清 (fùqīng) có bổ ngữ kết quả 清 (xong, sạch sẽ), diễn tả việc thanh toán đầy đủ 100% số tiền còn lại không còn công nợ.",
        examples: [
          {
            zh: "合同签订后预付三成定金，装柜前付清尾款。",
            pinyin: "Hétong qiāndìng hòu yùfù sānchéng dìngjīn, zhuāngguì qián fùqīng wěikuǎn.",
            vi: "Sau khi ký hợp đồng cọc trước 30%, trước khi đóng container thanh toán nốt phần còn lại.",
          },
          {
            zh: "尾款到账后，我们当天安排发货。",
            pinyin: "Wěikuǎn dàozhàng hòu, wǒmen dàngtiān ānpái fāhuò.",
            vi: "Sau khi tiền thanh toán nốt vào tài khoản, chúng tôi sắp xếp giao hàng trong ngày.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk7-l4-q1",
        "请问您这份报价是含税出厂价还是不含税价？",
        "Qǐngwèn nín zhè fèn bàojià shì hánshuì chūchǎngjià háishi bù hánshuì jià?",
        "Đọc câu hỏi chốt điều kiện thuế trong báo giá (giọng lịch sự, rõ ràng):",
        ["Thanh 4 dứt khoát (bàojià, hánshuì)", "Âm uốn lưỡi sh, ch (shì, chūchǎngjià)"],
        "Phát âm rõ 含税 (hánshuì) và 出厂价 (chūchǎngjià) để tránh hiểu nhầm về thuế VAT."
      ),
      speakingShadowing(
        "hsk7-l4-q2",
        "我们首批先拿五百双试销，起订量能不能稍微降一点？",
        "Wǒmen shǒupī xiān ná wǔbǎi shuāng shìxiāo, qǐdìngliàng néng bu néng shāowēi jiàng yīdiǎn?",
        "Đọc câu thương lượng giảm MOQ với chủ xưởng:",
        ["Biến điệu thanh 3 (wǔbǎi → wúbǎi)", "Âm bật hơi q (qǐdìngliàng)"],
        "Dùng ngữ điệu mềm mỏng ở cụm 能不能稍微降一点 để dễ thuyết phục đối tác."
      ),
      speakingShadowing(
        "hsk7-l4-q3",
        "只要这批货品质稳定，我们下个月马上返单两千件。",
        "Zhǐyào zhè pī huò pǐnzhì wěndìng, wǒmen xià gè yuè mǎshàng fǎndān liǎngqiān jiàn.",
        "Đọc câu tạo động lực cho xưởng bằng cam kết đặt lại đơn (返单):",
        ["Thanh 3 liên tiếp (pǐnzhì wěndìng)", "Âm mũi trước/sau (fǎndān, liǎngqiān)"],
        "Nhấn mạnh 返单两千件 để tạo đòn bẩy khi xin giảm giá."
      ),
      speakingShadowing(
        "hsk7-l4-q4",
        "希望工厂能适当让利，大家一起把市场做大。",
        "Xīwàng gōngchǎng néng shìdàng rànglì, dàjiā yīqǐ bǎ shìchǎng zuòdà.",
        "Đọc câu đàm phán kinh điển theo tinh thần hợp tác đôi bên cùng có lợi:",
        ["Âm r uốn lưỡi (rànglì)", "Thanh 4 dứt khoát (shìdàng, zuòdà)"],
        "让利 (rànglì — nhượng lợi) là từ rất chuyên nghiệp, nghe lịch sự hơn nhiều so với 便宜点."
      ),
      speakingShadowing(
        "hsk7-l4-q5",
        "我们可以预付百分之三十定金，验货合格后付清尾款。",
        "Wǒmen kěyǐ yùfù bǎifēnzhī sānshí dìngjīn, yànhuò hégé hòu fùqīng wěikuǎn.",
        "Đọc câu chốt điều khoản thanh toán 30/70:",
        ["Âm bật hơi q (fùqīng)", "Biến điệu thanh 3 (wěikuǎn → wéikuǎn)"],
        "尾款 (wěikuǎn) có 2 thanh 3 liền nhau nên đọc biến điệu thành wéikuǎn."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 国际物流与报关清关 (Logistics, Thông quan, Vận đơn B/L & C/O Form E)
  // ==========================================
  {
    id: "hsk7-l5-logistics",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "advanced",
    lessonNumber: 5,
    title: "Bài 5: Logistics, Thông quan, Vận đơn B/L & C/O Form E",
    titleZh: "第五课：国际物流与报关清关",
    titlePinyin: "Dì wǔ kè: Guójì wùliú yǔ bàoguān qīngguān",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "HỌC BỒI TIẾNG TRUNG QUỐC",
    youtubeUrl: "https://www.youtube.com/watch?v=X2jnNq0QRzU",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 5 国际物流与报关清关",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Phân biệt 报关 (bàoguān — khai báo hải quan xuất khẩu) và 清关 (qīngguān — thông quan nhập khẩu tại nước đến).",
      "Cấu trúc 以便…… (yǐbiàn... — để thuận tiện cho việc...): văn phong chuẩn mực trong email chứng từ xuất nhập khẩu.",
      "Cấu trúc 务必…… (wùbì... — nhất định phải...): dùng khi nhắc đối tác kiểm tra kỹ thông tin trên B/L, Packing List và C/O Form E tránh sai sót bị phạt lưu container.",
    ],
    newWords: [
      {
        hanzi: "报关",
        pinyin: "bàoguān",
        partOfSpeech: "Động từ",
        meaningVi: "khai báo hải quan (xuất khẩu)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 13,
      },
      {
        hanzi: "清关",
        pinyin: "qīngguān",
        partOfSpeech: "Động từ",
        meaningVi: "thông quan (nhập khẩu)",
        radical: "氵 (Chấm thủy)",
        strokeCount: 17,
      },
      {
        hanzi: "提单",
        pinyin: "tídān",
        partOfSpeech: "Danh từ",
        meaningVi: "vận đơn đường biển (Bill of Lading - B/L)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 20,
      },
      {
        hanzi: "装箱单",
        pinyin: "zhuāngxiāngdān",
        partOfSpeech: "Danh từ",
        meaningVi: "phiếu đóng gói (Packing List)",
        radical: "衣 (Y)",
        strokeCount: 35,
      },
      {
        hanzi: "原产地证",
        pinyin: "yuánchǎndìzhèng",
        partOfSpeech: "Danh từ",
        meaningVi: "chứng nhận xuất xứ (C/O, ví dụ Form E)",
        radical: "厂 (Hán)",
        strokeCount: 29,
      },
      {
        hanzi: "货代",
        pinyin: "huòdài",
        partOfSpeech: "Danh từ",
        meaningVi: "đại lý giao nhận vận tải (Forwarder)",
        radical: "贝 (Bối)",
        strokeCount: 13,
      },
      {
        hanzi: "装柜",
        pinyin: "zhuāngguì",
        partOfSpeech: "Động từ",
        meaningVi: "đóng hàng vào container",
        radical: "衣 (Y)",
        strokeCount: 20,
      },
      {
        hanzi: "关税",
        pinyin: "guānshuì",
        partOfSpeech: "Danh từ",
        meaningVi: "thuế quan xuất nhập khẩu",
        radical: "八 (Bát)",
        strokeCount: 18,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Xác nhận chứng từ C/O Form E và vận đơn B/L",
        lines: [
          {
            speaker: "单证员 (Nhân viên chứng từ)",
            zh: "您好，这票海运货明天装柜，请务必核对提单草稿和装箱单上的件数、毛重。",
            pinyin:
              "Nínhǎo, zhè piào hǎiyùn huò míngtiān zhuāngguì, qǐng wùbì héduì tídān cǎogǎo hé zhuāngxiāngdān shàng de jiànshù, máozhòng.",
            vi: "Chào anh/chị, lô hàng đường biển này ngày mai đóng container, vui lòng nhất định kiểm tra kỹ số kiện và tổng trọng lượng trên bản nháp vận đơn và phiếu đóng gói.",
          },
          {
            speaker: "进口商 (Bên nhập khẩu VN)",
            zh: "好的，另外请帮我们办理原产地证 Form E，以便货到海防港后享受零关税优惠。",
            pinyin:
              "Hǎo de, lìngwài qǐng bāng wǒmen bànlǐ yuánchǎndìzhèng Form E, yǐbiàn huò dào Hǎifáng gǎng hòu xiǎngshòu líng guānshuì yōuhuì.",
            vi: "Vâng, ngoài ra nhờ bên bạn làm giúp C/O Form E để hàng về cảng Hải Phòng được hưởng ưu đãi thuế nhập khẩu 0%.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Phối hợp với Forwarder (货代) xử lý tiến độ thông quan",
        lines: [
          {
            speaker: "货代 (Forwarder)",
            zh: "报关行已经放行了，船公司预计周五开船，下周二抵达胡志明港。",
            pinyin:
              "Bàoguānháng yǐjīng fàngxíng le, chuángōngsī yùjì zhōuwǔ kāichuán, xià zhōu'èr dǐdá Húzhìmíng gǎng.",
            vi: "Hải quan xuất khẩu đã thông quan cho đi rồi, hãng tàu dự kiến thứ Sáu tàu chạy, thứ Ba tuần sau cập cảng Hồ Chí Minh.",
          },
          {
            speaker: "进口商 (Bên nhập khẩu VN)",
            zh: "收到！请开船后尽快把电放提单发给我，我提前安排这边清关提货。",
            pinyin:
              "Shōudào! Qǐng kāichuán hòu jǐnkuài bǎ diànfàng tídān fāgěi wǒ, wǒ tíqián ānpái zhèbiān qīngguān tíhuò.",
            vi: "Đã nhận! Sau khi tàu chạy vui lòng gửi sớm vận đơn điện giao hàng (Telex Release B/L) cho tôi để tôi sắp xếp thông quan lấy hàng trước.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Liên từ mục đích trang trọng 以便 (Để thuận tiện cho việc...)",
        formula: "[Hành động chuẩn bị]，以便 + [Mục đích/Kết quả mong muốn]",
        explanationVi:
          "Dùng nhiều trong email giao dịch quốc tế và chứng từ logistics, sắc thái lịch sự và chặt chẽ hơn 为了 trong câu ghép 2 vế.",
        examples: [
          {
            zh: "请提前寄出正本原产地证，以便我方顺利清关。",
            pinyin: "Qǐng tíqián jìchū zhèngběn yuánchǎndìzhèng, yǐbiàn wǒfāng shùnlì qīngguān.",
            vi: "Vui lòng gửi sớm bản gốc C/O để bên tôi thông quan thuận lợi.",
          },
          {
            zh: "请提供准确的HS编码，以便货代核查关税税率。",
            pinyin: "Qǐng tígōng zhǔnquè de HS biānmǎ, yǐbiàn huòdài héchá guānshuì shuìlǜ.",
            vi: "Vui lòng cung cấp mã HS chính xác để Forwarder kiểm tra thuế suất.",
          },
        ],
      },
      {
        titleVi: "Phó từ nhấn mạnh trách nhiệm 务必 (Nhất định phải...)",
        formula: "请务必 + [Động từ hành động quan trọng]",
        explanationVi:
          "Trong xuất nhập khẩu, một sai sót nhỏ trên B/L hoặc C/O đều gây phí chỉnh sửa (amendment fee) hoặc lưu bãi (demurrage), nên 务必 được dùng để nhấn mạnh yêu cầu bắt buộc.",
        examples: [
          {
            zh: "装柜前请务必核对封条号和柜号。",
            pinyin: "Zhuāngguì qián qǐng wùbì héduì fēngtiáohào hé guìhào.",
            vi: "Trước khi đóng container vui lòng nhất định đối chiếu số seal và số container.",
          },
          {
            zh: "开船前务必确认提单收货人信息无误。",
            pinyin: "Kāichuán qián wùbì quèrèn tídān shōuhuòrén xìnxī wúwù.",
            vi: "Trước khi tàu chạy nhất định phải xác nhận thông tin người nhận hàng trên vận đơn không có sai sót.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk7-l5-q1",
        "发往越南海防港的40尺高柜已于今日上午完成装柜并顺利报关放行。随附提单草稿及装箱单，请于今日17:00前核对确认，以便及时签发原产地证 Form E。",
        "Fāwǎng Yuènán Hǎifáng gǎng de 40 chǐ gāoguì yǐ yú jīnrì shàngwǔ wánchéng zhuāngguì bìng shùnlì bàoguān fàngxíng. Suífù tídān cǎogǎo jí zhuāngxiāngdān, qǐng yú jīnrì 17:00 qián héduì quèrèn, yǐbiàn jíshí qiānfā yuánchǎndìzhèng Form E.",
        "Container 40HC đi cảng Hải Phòng (Việt Nam) đã đóng hàng xong sáng nay và khai báo hải quan thông quan thuận lợi. Đính kèm bản nháp vận đơn và phiếu đóng gói, vui lòng đối chiếu xác nhận trước 17:00 hôm nay để kịp cấp C/O Form E.",
        "Người nhận email cần làm gì trước 17:00 hôm nay?",
        [
          "Đóng hàng vào container 40HC",
          "Đối chiếu xác nhận bản nháp vận đơn và phiếu đóng gói",
          "Ra cảng Hải Phòng lấy hàng",
          "Thanh toán thuế nhập khẩu",
        ],
        "Đối chiếu xác nhận bản nháp vận đơn và phiếu đóng gói",
        "Đoạn văn yêu cầu: 请于今日17:00前核对确认 (đối chiếu xác nhận bản nháp B/L và Packing List trước 17:00)."
      ),
      readingComp(
        "hsk7-l5-q2",
        "由于收货人要求办理电放提单（Telex Release），发货人在收到全部尾款后，已通知货代向船公司申请电放，客户无需等待正本提单邮寄即可凭电放件清关。",
        "Yóuyú shōuhuòrén yāoqiú bànlǐ diànfàng tídān (Telex Release), fāhuòrén zài shōudào quánbù wěikuǎn hòu, yǐ tōngzhī huòdài xiàng chuángōngsī shēnqǐng diànfàng, kèhù wúxū děngdài zhèngběn tídān yóujì jí kě píng diànfàngjiàn qīngguān.",
        "Do người nhận hàng yêu cầu làm vận đơn điện giao hàng (Telex Release), sau khi nhận đủ tiền hàng còn lại, bên bán đã báo Forwarder xin hãng tàu điện giao hàng; khách không cần chờ gửi vận đơn gốc mà có thể dùng bản điện giao hàng để thông quan.",
        "Ưu điểm của vận đơn điện giao hàng (电放提单) trong đoạn văn là gì?",
        [
          "Được miễn toàn bộ cước biển",
          "Không cần chờ gửi chuyển phát vận đơn gốc vẫn có thể thông quan",
          "Không cần thanh toán tiền hàng còn lại",
          "Tự động giảm thuế quan về 0%",
        ],
        "Không cần chờ gửi chuyển phát vận đơn gốc vẫn có thể thông quan",
        "客户无需等待正本提单邮寄即可凭电放件清关 = khách không cần đợi gửi B/L gốc vẫn thông quan được."
      ),
      readingComp(
        "hsk7-l5-q3",
        "根据中国—东盟自贸协定，只要出口商提供合法有效的原产地证 Form E，符合原产地规则的货物在越南口岸清关时即可享受大幅减免关税。",
        "Gēnjù Zhōngguó—Dōngméng zìmào xiédìng, zhǐyào chūkǒushāng tígōng héfǎ yǒuxiào de yuánchǎndìzhèng Form E, fúhé yuánchǎndì guīzé de huòwù zài Yuènán kǒu'àn qīngguān shí jí kě xiǎngshòu dàfú jiǎnmiǎn guānshuì.",
        "Theo Hiệp định Thương mại Tự do Trung Quốc – ASEAN, chỉ cần bên xuất khẩu cung cấp C/O Form E hợp lệ, hàng hóa đáp ứng quy tắc xuất xứ khi thông quan tại cửa khẩu Việt Nam sẽ được hưởng ưu đãi miễn giảm thuế quan mạnh.",
        "Chứng từ nào giúp hàng hóa được hưởng ưu đãi giảm thuế quan khi nhập từ Trung Quốc về Việt Nam?",
        [
          "Phiếu đóng gói (装箱单)",
          "Chứng nhận xuất xứ Form E (原产地证 Form E)",
          "Hợp đồng thuê kho",
          "Phiếu kiểm tra chất lượng nội bộ",
        ],
        "Chứng nhận xuất xứ Form E (原产地证 Form E)",
        "原产地证 Form E là chứng từ hưởng ưu đãi thuế quan theo hiệp định ACFTA."
      ),
      readingComp(
        "hsk7-l5-q4",
        "货代提醒：如果装箱单上的件数与实际报关数据不一致，极易触发海关查验，从而产生额外的查验费与滞箱费。",
        "Huòdài tíxǐng: Rúguǒ zhuāngxiāngdān shàng de jiànshù yǔ shíjì bàoguān shùjù bù yīzhì, jí yì chùfā hǎiguān cháyàn, cóng'ér chǎnshēng éwài de cháyànfèi yǔ zhìxiāngfèi.",
        "Forwarder nhắc nhở: Nếu số kiện trên Packing List không khớp với số liệu khai báo hải quan thực tế, rất dễ bị hải quan kiểm hóa, từ đó phát sinh thêm phí kiểm hóa và phí lưu container.",
        "Điều gì sẽ xảy ra nếu số kiện trên Packing List lệch với số liệu khai hải quan?",
        [
          "Hàng được thông quan nhanh hơn",
          "Dễ bị hải quan kiểm hóa và phát sinh phí kiểm hóa, phí lưu container",
          "Hãng tàu hoàn lại cước vận chuyển",
          "Không ảnh hưởng gì đến tiến độ",
        ],
        "Dễ bị hải quan kiểm hóa và phát sinh phí kiểm hóa, phí lưu container",
        "触发海关查验 (kích hoạt kiểm hóa hải quan) và phát sinh 查验费 (phí kiểm hóa), 滞箱费 (phí lưu container)."
      ),
      readingComp(
        "hsk7-l5-q5",
        "本批货采用FOB深圳条款，卖方负责将货物运至深圳港装船并办理出口报关，海运费及目的港清关费用则由买方自行承担。",
        "Běn pī huò cǎiyòng FOB Shēnzhèn tiáokuǎn, màifāng fùzé jiāng huòwù yùnzhì Shēnzhèn gǎng zhuāngchuán bìng bànlǐ chūkǒu bàoguān, hǎiyùnfèi jí mùdìgǎng qīngguān fèiyòng zé yóu mǎifāng zìxíng chéngdān.",
        "Lô hàng này áp dụng điều kiện FOB Thâm Quyến: bên bán chịu trách nhiệm đưa hàng lên tàu tại cảng Thâm Quyến và làm thủ tục khai hải quan xuất khẩu; cước biển và phí thông quan tại cảng đích do bên mua tự chịu.",
        "Theo điều kiện FOB Thâm Quyến trong đoạn văn, bên mua chịu chi phí nào?",
        [
          "Phí khai hải quan xuất khẩu tại Thâm Quyến",
          "Cước biển và phí thông quan tại cảng đích",
          "Phí sản xuất tại nhà máy",
          "Phí vận chuyển nội địa ra cảng Thâm Quyến",
        ],
        "Cước biển và phí thông quan tại cảng đích",
        "海运费及目的港清关费用则由买方自行承担 = cước biển và phí thông quan cảng đích do bên mua chịu."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 质量索赔与交期协商 (Khiếu nại chất lượng, Bồi thường & Gia hạn giao hàng)
  // ==========================================
  {
    id: "hsk7-l6-claim",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "advanced",
    lessonNumber: 6,
    title: "Bài 6: Khiếu nại chất lượng, Bồi thường & Gia hạn giao hàng",
    titleZh: "第六课：质量索赔与交期协商",
    titlePinyin: "Dì liù kè: Zhìliàng suǒpéi yǔ jiāoqī xiéshāng",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Có Gì Vui",
    youtubeUrl: "https://www.youtube.com/watch?v=brSWxwfR6Uo",
    defaultSearchQuery: "Giáo trình chuẩn HSK 7 Bài 6 质量索赔与交期协商",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc 经双方友好协商 (jīng shuāngfāng yǒuhǎo xiéshāng — qua thương lượng hữu nghị giữa hai bên): câu mở đầu chuẩn mực trong biên bản thỏa thuận bồi thường hoặc gia hạn giao hàng.",
      "Cấu trúc 鉴于……，我方要求…… (jiànyú..., wǒfāng yāoqiú... — xét thấy..., bên tôi yêu cầu...): văn phong pháp lý/thương mại đanh thép khi gửi thư khiếu nại (索赔函).",
      "Phân biệt 补发 (bǔfā — gửi bù hàng mới) và 扣款 (kòukuǎn — khấu trừ tiền trực tiếp vào đơn sau hoặc khoản 尾款).",
    ],
    newWords: [
      {
        hanzi: "索赔",
        pinyin: "suǒpéi",
        partOfSpeech: "Động từ",
        meaningVi: "khiếu nại đòi bồi thường (claim)",
        radical: "十 (Thập)",
        strokeCount: 22,
      },
      {
        hanzi: "赔偿",
        pinyin: "péicháng",
        partOfSpeech: "Động/Danh từ",
        meaningVi: "bồi thường, tiền bồi thường",
        radical: "贝 (Bối)",
        strokeCount: 21,
      },
      {
        hanzi: "延期",
        pinyin: "yánqī",
        partOfSpeech: "Động từ",
        meaningVi: "gia hạn, lùi thời hạn",
        radical: "廴 (Dẫn)",
        strokeCount: 18,
      },
      {
        hanzi: "违约金",
        pinyin: "wéiyuējīn",
        partOfSpeech: "Danh từ",
        meaningVi: "tiền phạt vi phạm hợp đồng",
        radical: "辶 (Sước)",
        strokeCount: 21,
      },
      {
        hanzi: "补发",
        pinyin: "bǔfā",
        partOfSpeech: "Động từ",
        meaningVi: "gửi bù hàng mới",
        radical: "衤 (Y)",
        strokeCount: 12,
      },
      {
        hanzi: "扣款",
        pinyin: "kòukuǎn",
        partOfSpeech: "Động từ",
        meaningVi: "khấu trừ tiền hàng",
        radical: "扌 (Tài gẩy)",
        strokeCount: 18,
      },
      {
        hanzi: "协商",
        pinyin: "xiéshāng",
        partOfSpeech: "Động từ",
        meaningVi: "thương lượng, hiệp thương",
        radical: "十 (Thập)",
        strokeCount: 17,
      },
      {
        hanzi: "凭证",
        pinyin: "píngzhèng",
        partOfSpeech: "Danh từ",
        meaningVi: "bằng chứng, chứng từ đối chiếu",
        radical: "几 (Kỷ)",
        strokeCount: 15,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Gửi khiếu nại chất lượng kèm bằng chứng (凭证)",
        lines: [
          {
            speaker: "买方代表 (Đại diện bên mua)",
            zh: "张总，我们拆柜检验后发现有两百双鞋开胶，照片和质检凭证已经发您邮箱了，我们必须提出索赔。",
            pinyin:
              "Zhāng zǒng, wǒmen chāiguì jiǎnyàn hòu fāxiàn yǒu liǎngbǎi shuāng xié kāijiāo, zhàopiàn hé zhìjiǎn píngzhèng yǐjīng fā nín yóuxiāng le, wǒmen bìxū tíchū suǒpéi.",
            vi: "Tổng giám đốc Trương ơi, sau khi rút container kiểm tra chúng tôi phát hiện 200 đôi giày bị bung keo, ảnh và chứng từ kiểm định đã gửi vào email ông rồi, chúng tôi buộc phải đưa ra khiếu nại bồi thường.",
          },
          {
            speaker: "张总 (Giám đốc xưởng)",
            zh: "非常抱歉给贵司造成损失！经核实属我方责任，我们同意在下批订单中直接扣款，或者免费补发两百双。",
            pinyin:
              "Fēicháng bàoqiàn gěi guìsī zàochéng sǔnshī! Jīng héshí shǔ wǒfāng zérèn, wǒmen tóngyì zài xià pī dìngdān zhōng zhíjiē kòukuǎn, huòzhě miǎnfèi bǔfā liǎngbǎi shuāng.",
            vi: "Vô cùng xin lỗi đã gây tổn thất cho quý công ty! Qua xác minh đúng là trách nhiệm bên tôi, chúng tôi đồng ý khấu trừ trực tiếp vào đơn hàng sau, hoặc gửi bù miễn phí 200 đôi.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Thương lượng gia hạn giao hàng (延期) tránh phạt hợp đồng",
        lines: [
          {
            speaker: "工厂代表 (Đại diện nhà máy)",
            zh: "由于台风导致原材料延迟到厂，能否协商将交期延期五天，免除本次违约金？",
            pinyin:
              "Yóuyú táifēng dǎozhì yuáncáiliào yánchí dàochǎng, néngfǒu xiéshāng jiāng jiāoqī yánqī wǔ tiān, miǎnchú běn cì wéiyuējīn?",
            vi: "Do bão khiến nguyên liệu về xưởng chậm, có thể thương lượng lùi hạn giao hàng 5 ngày và miễn tiền phạt hợp đồng lần này được không ạ?",
          },
          {
            speaker: "买方代表 (Đại diện bên mua)",
            zh: "考虑到不可抗力因素，我们可以同意延期五天，但空运差价需由贵厂承担一半。",
            pinyin:
              "Kǎolǜdào bùkěkànglì yīnsù, wǒmen kěyǐ tóngyì yánqī wǔ tiān, dàn kōngyùn chājià xū yóu guìchǎng chéngdān yībàn.",
            vi: "Xét yếu tố bất khả kháng, chúng tôi có thể đồng ý gia hạn 5 ngày, nhưng phần chênh lệch cước hàng không quý xưởng phải chịu một nửa.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc văn bản thương mại 经……核实 / 经双方友好协商",
        formula: "经 + [Chủ thể] + 核实 / 协商，[Quyết định/Phương án xử lý]",
        explanationVi:
          "经 (jīng — trải qua) mở đầu cụm trạng ngữ trang trọng, rất phổ biến trong biên bản xử lý sự cố, email xác nhận bồi thường và phụ lục hợp đồng.",
        examples: [
          {
            zh: "经双方友好协商，交期延期至本月二十五日。",
            pinyin: "Jīng shuāngfāng yǒuhǎo xiéshāng, jiāoqī yánqī zhì běnyuè èrshíwǔ rì.",
            vi: "Qua thương lượng hữu nghị giữa hai bên, thời hạn giao hàng được gia hạn đến ngày 25 tháng này.",
          },
          {
            zh: "经质检部核实，该批货物确属工厂工艺问题。",
            pinyin: "Jīng zhìjiǎnbù héshí, gāi pī huòwù què shǔ gōngchǎng gōngyì wèntí.",
            vi: "Qua xác minh của bộ phận QC, lô hàng này đích thực thuộc lỗi kỹ thuật của nhà máy.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc 鉴于……，我方要求…… (Xét thấy..., bên tôi yêu cầu...)",
        formula: "鉴于 + [Thực tế sự cố/thiệt hại]，我方要求 + [Phương án bồi thường]",
        explanationVi:
          "Dùng trong thư khiếu nại chính thức (索赔函) để trình bày căn cứ rõ ràng trước khi nêu yêu cầu bồi thường, khấu trừ hay gửi bù.",
        examples: [
          {
            zh: "鉴于交期延误造成我方损失，我方要求按合同支付违约金。",
            pinyin: "Jiànyú jiāoqī yánwù zàochéng wǒfāng sǔnshī, wǒfāng yāoqiú àn hétong zhīfù wéiyuējīn.",
            vi: "Xét thấy việc giao hàng trễ gây tổn thất cho bên tôi, bên tôi yêu cầu thanh toán tiền phạt theo hợp đồng.",
          },
          {
            zh: "鉴于次品比例过高，我方要求免费补发并承担运费。",
            pinyin: "Jiànyú cìpǐn bǐlì guògāo, wǒfāng yāoqiú miǎnfèi bǔfā bìng chéngdān yùnfèi.",
            vi: "Xét thấy tỷ lệ hàng lỗi quá cao, bên tôi yêu cầu gửi bù miễn phí và chịu cước vận chuyển.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk7-l6-q1",
        "Sắp xếp các mảnh từ thành câu biên bản thương lượng gia hạn giao hàng chuẩn xác:",
        ["经双方友好协商，", "交期", "延期", "五天。"],
        "经双方友好协商，交期延期五天。",
        "Jīng shuāngfāng yǒuhǎo xiéshāng, jiāoqī yánqī wǔ tiān.",
        "Trật tự chuẩn: Cụm trạng ngữ (经双方友好协商，) + Chủ ngữ (交期) + Động từ (延期) + Thời lượng (五天)."
      ),
      writingOrder(
        "hsk7-l6-q2",
        "Sắp xếp thành câu xác nhận phương án bồi thường bằng cách khấu trừ vào đơn sau:",
        ["我们同意", "在下批订单中", "直接", "扣款。"],
        "我们同意在下批订单中直接扣款。",
        "Wǒmen tóngyì zài xià pī dìngdān zhōng zhíjiē kòukuǎn.",
        "Trật tự chuẩn: Chủ ngữ + 同意 + Trạng ngữ nơi chốn/phạm vi (在下批订单中) + Phó từ (直接) + Động từ (扣款)."
      ),
      writingStroke(
        "hsk7-l6-q3",
        "赔",
        "péi",
        "bồi thường (trong 索赔, 赔偿)",
        "Chữ 赔 gồm bộ 贝 (Bối — tiền bạc) bên trái và 咅 bên phải, viết theo quy tắc trái trước phải sau."
      ),
      writingTwoSentences(
        "hsk7-l6-q4",
        "索赔",
        "suǒpéi",
        "khiếu nại đòi bồi thường",
        "Gợi ý: Câu 1 dùng trong mua sắm/vận chuyển đời sống (hàng vỡ đòi bồi thường); Câu 2 dùng trong email xuất nhập khẩu kèm 凭证 (chứng từ)."
      ),
      writingTwoSentences(
        "hsk7-l6-q5",
        "延期",
        "yánqī",
        "gia hạn, lùi thời hạn",
        "Gợi ý: Câu 1 dùng cho lịch hẹn/hạn nộp hồ sơ; Câu 2 dùng cho thương lượng 交期 (thời hạn giao hàng) với nhà máy."
      ),
    ],
  },
];
