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

export const HSK8_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: 宏观经济与中越贸易 (Kinh tế vĩ mô & Thương mại song phương Trung – Việt)
  // ==========================================
  {
    id: "hsk8-l1-macro",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Kinh tế vĩ mô & Thương mại song phương Trung – Việt",
    titleZh: "第一课：宏观经济与中越贸易",
    titlePinyin: "Dì yī kè: Hóngguān jīngjì yǔ Zhōng-Yuè màoyì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Yun Xuexi (云学习)",
    youtubeUrl: "https://www.youtube.com/watch?v=XGXBFSr1aVE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 1 宏观经济与中越贸易",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc văn viết trang trọng 在……的背景下 (Trong bối cảnh...) thường mở đầu các báo cáo kinh tế vĩ mô.",
      "Cấu trúc 呈现出……的态势 (Thể hiện xu thế / trạng thái...) dùng để mô tả số liệu tăng trưởng, xuất nhập khẩu.",
      "Động từ chuyên ngành kinh tế: 拉动 (thúc đẩy, kéo theo), 逆差 (nhập siêu), 顺差 (xuất siêu), 关税壁垒 (hàng rào thuế quan).",
    ],
    newWords: [
      {
        hanzi: "宏观经济",
        pinyin: "hóngguān jīngjì",
        partOfSpeech: "Danh từ",
        meaningVi: "kinh tế vĩ mô",
        radical: "宀 (Miên)",
        strokeCount: 31,
      },
      {
        hanzi: "双边贸易",
        pinyin: "shuāngbiān màoyì",
        partOfSpeech: "Danh từ",
        meaningVi: "thương mại song phương",
        radical: "又 (Hựu)",
        strokeCount: 26,
      },
      {
        hanzi: "通货膨胀",
        pinyin: "tōnghuò péngzhàng",
        partOfSpeech: "Danh từ",
        meaningVi: "lạm phát",
        radical: "辶 (Sước)",
        strokeCount: 44,
      },
      {
        hanzi: "汇率波动",
        pinyin: "huìlǜ bōdòng",
        partOfSpeech: "Cụm danh từ",
        meaningVi: "biến động tỷ giá hối đoái",
        radical: "氵 (Chấm thủy)",
        strokeCount: 30,
      },
      {
        hanzi: "贸易顺差",
        pinyin: "màoyì shùnchā",
        partOfSpeech: "Danh từ",
        meaningVi: "thặng dư thương mại (xuất siêu)",
        radical: "贝 (Bối)",
        strokeCount: 35,
      },
      {
        hanzi: "关税壁垒",
        pinyin: "guānshuì bìlěi",
        partOfSpeech: "Danh từ",
        meaningVi: "hàng rào thuế quan",
        radical: "禾 (Hòa)",
        strokeCount: 43,
      },
      {
        hanzi: "外商直接投资",
        pinyin: "wàishāng zhíjiē tóuzī",
        partOfSpeech: "Danh từ",
        meaningVi: "đầu tư trực tiếp nước ngoài (FDI)",
        radical: "夕 (Tịch)",
        strokeCount: 51,
      },
      {
        hanzi: "产业链转移",
        pinyin: "chǎnyèliàn zhuǎnyí",
        partOfSpeech: "Cụm danh từ",
        meaningVi: "dịch chuyển chuỗi công nghiệp",
        radical: "产 (Sản)",
        strokeCount: 42,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Diễn đàn phân tích kim ngạch thương mại Trung – Việt",
        lines: [
          {
            speaker: "主持人",
            zh: "在当前全球通货膨胀和汇率波动的背景下，您如何评价今年中越双边贸易的走势？",
            pinyin: "Zài dāngqián quánqiú tōnghuò péngzhàng hé huìlǜ bōdòng de bèijǐng xià, nín rúhé píngjià jīnnián Zhōng-Yuè shuāngbiān màoyì de zǒushì?",
            vi: "Trong bối cảnh lạm phát toàn cầu và biến động tỷ giá hiện nay, ngài đánh giá thế nào về xu hướng thương mại song phương Trung – Việt năm nay?",
          },
          {
            speaker: "经济学家",
            zh: "尽管面临关税壁垒和外部需求放缓，中越双边贸易额依然呈现出稳步增长的态势，尤其是电子零部件与农产品领域。",
            pinyin: "Jǐnguǎn miànlín guānshuì bìlěi hé wàibù xūqiú fànghuǎn, Zhōng-Yuè shuāngbiān màoyì'é yīrán chéngxiàn chū wěnbù zēngzhǎng de tàishì, yóuqí shì diànzǐ língbùjiàn yǔ nóngchǎnpǐn lǐngyù.",
            vi: "Mặc dù đối mặt với hàng rào thuế quan và nhu cầu bên ngoài chậm lại, kim ngạch thương mại song phương Trung – Việt vẫn thể hiện xu thế tăng trưởng ổn định, đặc biệt là trong lĩnh vực linh kiện điện tử và nông sản.",
          },
          {
            speaker: "主持人",
            zh: "产业链转移对越南吸引外商直接投资起到了怎样的作用？",
            pinyin: "Chǎnyèliàn zhuǎnyí duì Yuènán xīyǐn wàishāng zhíjiē tóuzī qǐdào le zěnyàng de zuòyòng?",
            vi: "Sự dịch chuyển chuỗi công nghiệp đã đóng vai trò như thế nào đối với việc Việt Nam thu hút FDI?",
          },
          {
            speaker: "经济学家",
            zh: "大批制造企业赴越设厂，不仅拉动了当地就业，还显著提升了越南在全球供应链中的战略地位。",
            pinyin: "Dàpī zhìzào qǐyè fù Yuè shèchǎng, bùjǐn lādòng le dāngdì jiùyè, hái xiǎnzhù tíshēng le Yuènán zài quánqiú gōngyìngliàn zhōng de zhànlüè dìwèi.",
            vi: "Hàng loạt doanh nghiệp sản xuất sang Việt Nam mở nhà máy, không chỉ thúc đẩy việc làm tại địa phương mà còn nâng cao đáng kể vị thế chiến lược của Việt Nam trong chuỗi cung ứng toàn cầu.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Trao đổi nội bộ về rủi ro tỷ giá và xuất siêu",
        lines: [
          {
            speaker: "财务总监",
            zh: "近期美元加息导致汇率波动加剧，我们的进口原材料成本上涨了近百分之五。",
            pinyin: "Jìnqī Měiyuán jiāxī dǎozhì huìlǜ bōdòng jiājù, wǒmen de jìnkǒu yuáncáiliào chéngběn shàngzhǎng le jìn bǎifēnzhī wǔ.",
            vi: "Gần đây việc đồng USD tăng lãi suất khiến biến động tỷ giá gay gắt hơn, chi phí nhập khẩu nguyên vật liệu của chúng ta đã tăng gần 5%.",
          },
          {
            speaker: "总经理",
            zh: "我们要密切关注宏观经济政策，同时扩大人民币跨境结算比例，以对冲汇率风险。",
            pinyin: "Wǒmen yào mìqiè guānzhù hóngguān jīngjì zhèngcè, tóngshí kuòdà Rénmínbì kuàjìng jiésuàn bǐlì, yǐ duìchōng huìlǜ fēngxiǎn.",
            vi: "Chúng ta cần theo dõi sát sao chính sách kinh tế vĩ mô, đồng thời mở rộng tỷ lệ thanh toán xuyên biên giới bằng Nhân dân tệ để phòng ngừa rủi ro tỷ giá.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc bối cảnh: 在……的背景下",
        formula: "在 + [Hoàn cảnh / Tình hình vĩ mô] + 的背景下，+ [Kết quả / Hành động]",
        explanationVi:
          "Dùng trong văn viết kinh tế, báo chí và phát biểu trang trọng để nêu bối cảnh lớn làm tiền đề cho sự việc ở vế sau.",
        examples: [
          {
            zh: "在全球经济复苏乏力的背景下，区域合作显得尤为重要。",
            pinyin: "Zài quánqiú jīngjì fùsū fálì de bèijǐng xià, qūyù hézuò xiǎnde yóuwéi zhòngyào.",
            vi: "Trong bối cảnh kinh tế toàn cầu phục hồi yếu ớt, hợp tác khu vực càng trở nên quan trọng.",
          },
          {
            zh: "在产业链转移的背景下，越南北部工业园迎来了投资热潮。",
            pinyin: "Zài chǎnyèliàn zhuǎnyí de bèijǐng xià, Yuènán běibù gōngyèyuán yínglái le tóuzī rècháo.",
            vi: "Trong bối cảnh dịch chuyển chuỗi công nghiệp, các khu công nghiệp miền Bắc Việt Nam đón làn sóng đầu tư.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc mô tả xu thế: 呈现出……的态势",
        formula: "[Chủ thể / Chỉ số] + 呈现出 + [Tính từ / Cụm động từ] + 的态势",
        explanationVi:
          "Diễn tả một chỉ số kinh tế, thị trường hoặc hiện tượng xã hội đang bộc lộ một xu thế, trạng thái rõ rệt.",
        examples: [
          {
            zh: "今年上半年，我司出口额呈现出强劲复苏的态势。",
            pinyin: "Jīnnián shàngbànnián, wǒsī chūkǒu'é chéngxiàn chū qiángjìng fùsū de tàishì.",
            vi: "Nửa đầu năm nay, kim ngạch xuất khẩu của công ty chúng tôi thể hiện xu thế phục hồi mạnh mẽ.",
          },
          {
            zh: "中越跨境电商呈现出高速发展的态势。",
            pinyin: "Zhōng-Yuè kuàjìng diànshāng chéngxiàn chū gāosù fāzhǎn de tàishì.",
            vi: "Thương mại điện tử xuyên biên giới Trung – Việt thể hiện xu thế phát triển tốc độ cao.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk8-l1-q1",
        "在当前全球通货膨胀的背景下，各国央行普遍采取了收紧货币政策的措施。",
        "Zài dāngqián quánqiú tōnghuò péngzhàng de bèijǐng xià, gèguó yāngháng pǔbiàn cǎiqǔ le shōujǐn huòbì zhèngcè de cuòshī.",
        "Nghe đoạn tin kinh tế và chọn nội dung chính xác:",
        [
          "Các ngân hàng trung ương đồng loạt thắt chặt chính sách tiền tệ do lạm phát toàn cầu.",
          "Các ngân hàng trung ương nới lỏng lãi suất để kích cầu tiêu dùng.",
          "Lạm phát toàn cầu đã hoàn toàn chấm dứt trong quý này.",
          "Chính sách tiền tệ không liên quan đến lạm phát.",
        ],
        "Các ngân hàng trung ương đồng loạt thắt chặt chính sách tiền tệ do lạm phát toàn cầu.",
        "收紧货币政策 nghĩa là 'thắt chặt chính sách tiền tệ', được áp dụng trong bối cảnh 通货膨胀 (lạm phát)."
      ),
      listeningFill(
        "hsk8-l1-q2",
        "中越双边贸易额依然呈现出稳步增长的态势。",
        "中越______依然呈现出稳步增长的态势。",
        "Zhōng-Yuè shuāngbiān màoyì'é yīrán chéngxiàn chū wěnbù zēngzhǎng de tàishì.",
        "Nghe và điền cụm từ tiếng Trung còn thiếu (kim ngạch thương mại song phương):",
        "双边贸易额",
        "双边贸易额 (shuāngbiān màoyì'é) là 'kim ngạch thương mại song phương'."
      ),
      listeningDialogue(
        "hsk8-l1-q3",
        "女：近期汇率波动这么大，对我们出口利润有影响吗？男：有一定冲击，但我们已经通过远期结汇锁定了大部分汇率。",
        "Nǚ: Jìnqī huìlǜ bōdòng zhème dà, duì wǒmen chūkǒu lìrùn yǒu yǐngxiǎng ma? Nán: Yǒu yīdìng chōngjī, dàn wǒmen yǐjīng tōngguò yuǎnqī jiéhuì suǒdìng le dàbùfen huìlǜ.",
        "Nghe hội thoại giữa hai đồng nghiệp. Công ty đã làm gì để ứng phó biến động tỷ giá?",
        [
          "Khóa tỷ giá phần lớn thông qua nghiệp vụ mua bán ngoại tệ kỳ hạn.",
          "Ngừng hoàn toàn hoạt động xuất khẩu sang thị trường nước ngoài.",
          "Tăng giá bán sản phẩm lên gấp đôi.",
          "Chưa có bất kỳ biện pháp phòng ngừa nào.",
        ],
        "Khóa tỷ giá phần lớn thông qua nghiệp vụ mua bán ngoại tệ kỳ hạn.",
        "通过远期结汇锁定了大部分汇率 = khóa phần lớn tỷ giá thông qua kết hối kỳ hạn (forward settlement)."
      ),
      listeningMcq(
        "hsk8-l1-q4",
        "尽管面临关税壁垒，越南今年仍保持了可观的贸易顺差。",
        "Jǐnguǎn miànlín guānshuì bìlěi, Yuènán jīnnián réng bǎochí le kěguān de màoyì shùnchā.",
        "Nghe câu sau và cho biết '贸易顺差' mang ý nghĩa gì trong ngữ cảnh này?",
        [
          "Thặng dư thương mại (xuất siêu)",
          "Thâm hụt thương mại (nhập siêu)",
          "Thuế giá trị gia tăng",
          "Tỷ giá thả nổi",
        ],
        "Thặng dư thương mại (xuất siêu)",
        "贸易顺差 (màoyì shùnchā) là thặng dư thương mại / xuất siêu; trái nghĩa là 贸易逆差 (nhập siêu)."
      ),
      listeningDialogue(
        "hsk8-l1-q5",
        "男：产业链转移给当地带来了哪些变化？女：不仅吸引了大量外商直接投资，还带动了配套物流和基础设施的升级。",
        "Nán: Chǎnyèliàn zhuǎnyí gěi dāngdì dàilái le nǎxiē biànhuà? Nǚ: Bùjǐn xīyǐn le dàliàng wàishāng zhíjiē tóuzī, hái dàidòng le pèitào wùliú hé jīchǔ shèshī de shēngjí.",
        "Nghe đoạn phỏng vấn. Sự dịch chuyển chuỗi công nghiệp KHÔNG được nhắc đến với tác động nào sau đây?",
        [
          "Làm giảm mạnh tỷ lệ đô thị hóa tại địa phương.",
          "Thu hút lượng lớn vốn đầu tư trực tiếp nước ngoài (FDI).",
          "Thúc đẩy nâng cấp logistics phụ trợ.",
          "Thúc đẩy nâng cấp cơ sở hạ tầng.",
        ],
        "Làm giảm mạnh tỷ lệ đô thị hóa tại địa phương.",
        "Người nữ chỉ nhắc đến 3 tác động tích cực: 吸引外商直接投资 (thu hút FDI), 配套物流 (logistics phụ trợ) và 基础设施升级 (nâng cấp hạ tầng)."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: 企业财务与信用证结算 (Tài chính doanh nghiệp, Thuế & Thanh toán L/C)
  // ==========================================
  {
    id: "hsk8-l2-finance",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Tài chính doanh nghiệp, Thuế & Thanh toán L/C",
    titleZh: "第二课：企业财务与信用证结算",
    titlePinyin: "Dì èr kè: Qǐyè cáiwù yǔ xìnyòngzhèng jiésuàn",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Thương Mại BCT",
    youtubeUrl: "https://www.youtube.com/watch?v=_72pJavM_pY",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 2 企业财务与信用证结算",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc điều kiện tài chính/pháp lý: 凡……均须…… (Phàm những gì... đều phải...).",
      "Cấu trúc nguyên tắc đối chiếu: 以……为准 (Lấy... làm chuẩn / căn cứ cuối cùng).",
      "Thuật ngữ thanh toán quốc tế: 不可撤销信用证 (L/C không hủy ngang), 提单 (vận đơn B/L), 出口退税 (hoàn thuế xuất khẩu).",
    ],
    newWords: [
      {
        hanzi: "资产负债表",
        pinyin: "zīchǎn fùzhàibiǎo",
        partOfSpeech: "Danh từ",
        meaningVi: "bảng cân đối kế toán",
        radical: "贝 (Bối)",
        strokeCount: 44,
      },
      {
        hanzi: "现金流",
        pinyin: "xiànjīnliú",
        partOfSpeech: "Danh từ",
        meaningVi: "dòng tiền",
        radical: "王 (Ngọc)",
        strokeCount: 26,
      },
      {
        hanzi: "不可撤销信用证",
        pinyin: "bùkě chèxiāo xìnyòngzhèng",
        partOfSpeech: "Danh từ",
        meaningVi: "thư tín dụng không hủy ngang (Irrevocable L/C)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 57,
      },
      {
        hanzi: "增值税发票",
        pinyin: "zēngzhíshuì fāpiào",
        partOfSpeech: "Danh từ",
        meaningVi: "hóa đơn thuế giá trị gia tăng (hóa đơn VAT)",
        radical: "土 (Thổ)",
        strokeCount: 53,
      },
      {
        hanzi: "出口退税",
        pinyin: "chūkǒu tuìshuì",
        partOfSpeech: "Danh từ",
        meaningVi: "hoàn thuế xuất khẩu",
        radical: "禾 (Hòa)",
        strokeCount: 29,
      },
      {
        hanzi: "审计报告",
        pinyin: "shěnjì bàogào",
        partOfSpeech: "Danh từ",
        meaningVi: "báo cáo kiểm toán",
        radical: "宀 (Miên)",
        strokeCount: 26,
      },
      {
        hanzi: "提单",
        pinyin: "tídān",
        partOfSpeech: "Danh từ",
        meaningVi: "vận đơn đường biển (Bill of Lading)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 20,
      },
      {
        hanzi: "单证相符",
        pinyin: "dānzhèng xiāngfú",
        partOfSpeech: "Cụm từ",
        meaningVi: "chứng từ phù hợp (khớp hoàn toàn với L/C)",
        radical: "讠 (Ngôn)",
        strokeCount: 35,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Rà soát bộ chứng từ thanh toán L/C",
        lines: [
          {
            speaker: "单证员",
            zh: "经理，客户开来的不可撤销信用证已经收到，但上面要求提单上的货物描述必须与商业发票一字不差。",
            pinyin: "Jīnglǐ, kèhù kāilái de bùkě chèxiāo xìnyòngzhèng yǐjīng shōudào, dàn shàngmiàn yāoqiú tídān shàng de huòwù miáoshù bìxū yǔ shāngyè fāpiào yīzì bùchà.",
            vi: "Thưa giám đốc, thư tín dụng không hủy ngang khách hàng mở đã nhận được, nhưng trên đó yêu cầu mô tả hàng hóa trên vận đơn phải khớp từng chữ với hóa đơn thương mại.",
          },
          {
            speaker: "财务经理",
            zh: "没问题，信用证结算最核心的原则就是单证相符。交单前你务必逐项核对，避免出现不符点导致银行拒付。",
            pinyin: "Méi wèntí, xìnyòngzhèng jiésuàn zuì héxīn de yuánzé jiùshì dānzhèng xiāngfú. Jiāodān qián nǐ wùbì zhúxiàng héduì, bìmiǎn chūxiàn bùfúdiǎn dǎozhì yínháng jùfù.",
            vi: "Không vấn đề gì, nguyên tắc cốt lõi nhất của thanh toán L/C là chứng từ phù hợp. Trước khi xuất trình chứng từ em nhất định phải đối chiếu từng mục, tránh xuất hiện bất hợp lệ khiến ngân hàng từ chối thanh toán.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Phân tích báo cáo tài chính và hoàn thuế cuối quý",
        lines: [
          {
            speaker: "审计师",
            zh: "从第三季度的资产负债表来看，贵公司的资产负债率控制在合理范围内，但经营性现金流略显紧张。",
            pinyin: "Cóng dì-sān jìdù de zīchǎn fùzhàibiǎo lái kàn, guì gōngsī de zīchǎn fùzhàilǜ kòngzhì zài hélǐ fànwéi nèi, dàn jīngyíngxìng xiànjīnliú lüèxiǎn jǐnzhāng.",
            vi: "Nhìn từ bảng cân đối kế toán quý 3, tỷ lệ nợ trên tổng tài sản của quý công ty được kiểm soát trong phạm vi hợp lý, nhưng dòng tiền từ hoạt động kinh doanh hơi căng thẳng.",
          },
          {
            speaker: "财务总监",
            zh: "确实如此，主要原因是应收账款回款周期拉长。我们正加快办理出口退税，预计下月初可缓解资金压力。",
            pinyin: "Quèshí rúcǐ, zhǔyào yuányīn shì yīngshōu zhàngkuǎn huíkuǎn zhōuqī lācháng. Wǒmen zhèng jiākuài bànlǐ chūkǒu tuìshuì, yùjì xiàyuèchū kě huǎnjiě zījīn yālì.",
            vi: "Đúng là như vậy, nguyên nhân chính là chu kỳ thu hồi khoản phải thu bị kéo dài. Chúng tôi đang đẩy nhanh thủ tục hoàn thuế xuất khẩu, dự kiến đầu tháng sau sẽ giảm bớt áp lực nguồn vốn.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc quy định chặt chẽ: 凡……均须……",
        formula: "凡 + [Đối tượng / Điều kiện] + 均须 + [Nghĩa vụ bắt buộc]",
        explanationVi:
          "Thường dùng trong quy chế tài chính, thuế vụ và văn bản pháp quy, mang nghĩa 'Phàm là... đều bắt buộc phải...'.",
        examples: [
          {
            zh: "凡申请出口退税的企业，均须提供合法有效的增值税发票及报关单。",
            pinyin: "Fán shēnqǐng chūkǒu tuìshuì de qǐyè, jūnxū tígōng héfǎ yǒuxiào de zēngzhíshuì fāpiào jí bàoguāndān.",
            vi: "Phàm là doanh nghiệp đăng ký hoàn thuế xuất khẩu, đều phải cung cấp hóa đơn VAT và tờ khai hải quan hợp pháp, còn hiệu lực.",
          },
          {
            zh: "凡金额超过五十万元的采购合同，均须经财务总监复核。",
            pinyin: "Fán jīn'é chāoguò wǔshí wàn yuán de cǎigòu hétong, jūnxū jīng cáiwù zǒngjiān fùhé.",
            vi: "Phàm là hợp đồng thu mua có giá trị vượt 500 nghìn tệ, đều phải qua Giám đốc tài chính thẩm định lại.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc căn cứ xác định: 以……为准",
        formula: "[Nội dung tranh chấp / số liệu] + 以 + [Tài liệu / Tiêu chuẩn] + 为准",
        explanationVi:
          "Chỉ rõ căn cứ pháp lý hoặc số liệu cuối cùng có hiệu lực khi có sự sai khác giữa nhiều tài liệu hoặc phiên bản.",
        examples: [
          {
            zh: "最终财务数据以第三方机构出具的年度审计报告为准。",
            pinyin: "Zuìzhōng cáiwù shùjù yǐ dì-sānfāng jīgòu chūjù de niándù shěnjì bàogào wéizhǔn.",
            vi: "Số liệu tài chính cuối cùng lấy báo cáo kiểm toán thường niên do tổ chức bên thứ ba phát hành làm chuẩn.",
          },
          {
            zh: "装船日期以海运提单签发日为准。",
            pinyin: "Zhuāngchuán rìqī yǐ hǎiyùn tídān qiānfārì wéizhǔn.",
            vi: "Ngày giao hàng lên tàu lấy ngày ký phát vận đơn đường biển làm chuẩn.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk8-l2-q1",
        "信用证结算的核心原则是“单证相符、单单相符”。只要受益人提交的全套单据完全符合信用证条款，开证行即承担第一性付款责任，而不介入买卖双方的基础货物纠纷。",
        "Xìnyòngzhèng jiésuàn de héxīn yuánzé shì 'dānzhèng xiāngfú, dāndān xiāngfú'. Zhǐyào shòuyìrén tíjiāo de quántào dānjù wánquán fúhé xìnyòngzhèng tiáokuǎn, kāizhèngháng jí chéngdān dì-yīxìng fùkuǎn zérèn, ér bù jièrù mǎimài shuāngfāng de jīchǔ huòwù jiūfēn.",
        "Nguyên tắc cốt lõi của thanh toán L/C là 'chứng từ khớp L/C, chứng từ khớp nhau'. Chỉ cần bộ chứng từ do người thụ hưởng xuất trình hoàn toàn khớp điều khoản L/C, ngân hàng phát hành lập tức chịu trách nhiệm thanh toán đầu tiên, không can thiệp tranh chấp hàng hóa cơ sở giữa bên mua và bên bán.",
        "Theo đoạn văn trên, ngân hàng phát hành L/C dựa vào đâu để thực hiện nghĩa vụ thanh toán?",
        [
          "Dựa vào việc bộ chứng từ xuất trình có khớp hoàn toàn với điều khoản L/C hay không.",
          "Dựa vào chất lượng thực tế của hàng hóa sau khi người mua kiểm tra tại kho.",
          "Dựa vào thỏa thuận miệng giữa bên mua và bên bán.",
          "Dựa vào tỷ giá hối đoái tại thời điểm giao hàng.",
        ],
        "Dựa vào việc bộ chứng từ xuất trình có khớp hoàn toàn với điều khoản L/C hay không.",
        "Đoạn văn nêu rõ: 只要受益人提交的全套单据完全符合信用证条款，开证行即承担第一性付款责任."
      ),
      readingComp(
        "hsk8-l2-q2",
        "本季度公司营业收入同比增长18%，但经营性现金流却同比下降6%。财务部指出，这主要是由于大客户账期由30天延长至90天所致。",
        "Běn jìdù gōngsī yíngyè shōurù tóngbǐ zēngzhǎng 18%, dàn jīngyíngxìng xiànjīnliú què tóngbǐ xiàjiàng 6%. Cáiwùbù zhǐchū, zhè zhǔyào shì yóuyú dà kèhù zhàngqī yóu 30 tiān yáncháng zhì 90 tiān suǒzhì.",
        "Quý này doanh thu hoạt động của công ty tăng 18% so với cùng kỳ, nhưng dòng tiền kinh doanh lại giảm 6%. Phòng tài chính chỉ ra nguyên nhân chủ yếu do kỳ hạn công nợ của khách hàng lớn kéo dài từ 30 ngày lên 90 ngày.",
        "Vì sao doanh thu tăng nhưng dòng tiền kinh doanh lại giảm?",
        [
          "Do thời hạn thanh toán công nợ của khách hàng lớn bị kéo dài từ 30 lên 90 ngày.",
          "Do công ty bị thua lỗ nặng trong hoạt động sản xuất.",
          "Do thuế suất thuế giá trị gia tăng tăng đột biến.",
          "Do ngân hàng từ chối giải ngân khoản vay ngắn hạn.",
        ],
        "Do thời hạn thanh toán công nợ của khách hàng lớn bị kéo dài từ 30 lên 90 ngày.",
        "大客户账期由30天延长至90天 = kỳ hạn công nợ của khách hàng lớn kéo dài từ 30 ngày lên 90 ngày."
      ),
      readingComp(
        "hsk8-l2-q3",
        "凡符合条件的出口生产企业，均须在货物报关离境并完成外汇核销后，凭增值税专用发票及报关单向主管税务机关申报出口退税。",
        "Fán fúhé tiáojiàn de chūkǒu shēngchǎn qǐyè, jūnxū zài huòwù bàoguān líjìng bìng wánchéng wàihuì héxiāo hòu, píng zēngzhíshuì zhuānyòng fāpiào jí bàoguāndān xiàng zhǔguǎn shuìwù jīguān shēnbào chūkǒu tuìshuì.",
        "Phàm là doanh nghiệp sản xuất xuất khẩu đủ điều kiện, đều phải sau khi hàng hóa thông quan xuất cảnh và hoàn tất đối chiếu ngoại hối, mang hóa đơn VAT chuyên dụng và tờ khai hải quan đến cơ quan thuế chủ quản để kê khai hoàn thuế xuất khẩu.",
        "Để kê khai hoàn thuế xuất khẩu, doanh nghiệp cần nộp chứng từ nào sau đây?",
        [
          "Hóa đơn VAT chuyên dụng và tờ khai hải quan.",
          "Hợp đồng lao động và bảng lương nhân viên.",
          "Báo cáo kiểm toán 5 năm gần nhất.",
          "Giấy phép xây dựng nhà xưởng.",
        ],
        "Hóa đơn VAT chuyên dụng và tờ khai hải quan.",
        "凭增值税专用发票及报关单 = căn cứ vào hóa đơn VAT chuyên dụng và tờ khai hải quan."
      ),
      readingComp(
        "hsk8-l2-q4",
        "资产负债表反映的是企业在某一特定日期的财务状况，涵盖资产、负债与所有者权益三大要素；而利润表则反映企业在一定会计期间的经营成果。",
        "Zīchǎn fùzhàibiǎo fǎnyìng de shì qǐyè zài mǒu yī tèdìng rìqī de cáiwù zhuàngkuàng, hángài zīchǎn, fùzhài yǔ suǒyǒuzhě quányì sān dà yàosù; ér lìrùnbiǎo zé fǎnyìng qǐyè zài yīdìng kuàijì qījiān de jīngyíng chéngguǒ.",
        "Bảng cân đối kế toán phản ánh tình hình tài chính của doanh nghiệp tại một ngày cụ thể, gồm 3 yếu tố: tài sản, nợ phải trả và vốn chủ sở hữu; còn báo cáo kết quả kinh doanh phản ánh kết quả hoạt động trong một kỳ kế toán nhất định.",
        "Điểm khác biệt cốt lõi giữa 资产负债表 và 利润表 được nêu trong đoạn văn là gì?",
        [
          "Bảng cân đối kế toán phản ánh tình hình tài chính tại một thời điểm, còn báo cáo kết quả kinh doanh phản ánh kết quả trong một thời kỳ.",
          "Bảng cân đối kế toán chỉ dành cho ngân hàng, còn báo cáo kết quả kinh doanh chỉ dành cho cơ quan thuế.",
          "Bảng cân đối kế toán không bao gồm nợ phải trả.",
          "Cả hai báo cáo đều chỉ phản ánh dòng tiền mặt ra vào.",
        ],
        "Bảng cân đối kế toán phản ánh tình hình tài chính tại một thời điểm, còn báo cáo kết quả kinh doanh phản ánh kết quả trong một thời kỳ.",
        "某一特定日期 (một ngày cụ thể / thời điểm) đối lập với 一定会计期间 (một kỳ kế toán nhất định / thời kỳ)."
      ),
      readingComp(
        "hsk8-l2-q5",
        "若商业发票金额与信用证规定金额存在差异，且超出允许的溢短装幅度，银行有权出具不符点通知并暂缓付款。最终结算金额以修正后经双方确认的发票为准。",
        "Ruò shāngyè fāpiào jīn'é yǔ xìnyòngzhèng guīdìng jīn'é cúnzài chāyì, qiě chāochū yǔnxǔ de yìduǎnzhuāng fúdù, yínháng yǒuquán chūjù bùfúdiǎn tōngzhī bìng zànhuǎn fùkuǎn. Zuìzhōng jiésuàn jīn'é yǐ xiūzhèng hòu jīng shuāngfāng quèrèn de fāpiào wéizhǔn.",
        "Nếu số tiền trên hóa đơn thương mại chênh lệch với số tiền quy định trên L/C và vượt quá dung sai cho phép, ngân hàng có quyền phát hành thông báo bất hợp lệ và tạm hoãn thanh toán. Số tiền thanh toán cuối cùng lấy hóa đơn đã chỉnh sửa được hai bên xác nhận làm chuẩn.",
        "Khi phát hiện sai lệch vượt dung sai giữa hóa đơn thương mại và L/C, ngân hàng có quyền làm gì?",
        [
          "Phát hành thông báo bất hợp lệ (不符点通知) và tạm hoãn thanh toán.",
          "Tự ý khấu trừ 50% giá trị hợp đồng mà không cần thông báo.",
          "Hủy bỏ giấy phép kinh doanh của bên bán.",
          "Bắt buộc thanh toán ngay trong vòng 24 giờ.",
        ],
        "Phát hành thông báo bất hợp lệ (不符点通知) và tạm hoãn thanh toán.",
        "银行有权出具不符点通知并暂缓付款 = ngân hàng có quyền phát hành thông báo bất hợp lệ và tạm hoãn thanh toán."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: 国际贸易合同条款 (Soạn thảo & Rà soát Hợp đồng thương mại quốc tế)
  // ==========================================
  {
    id: "hsk8-l3-contract",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Soạn thảo & Rà soát Hợp đồng thương mại quốc tế",
    titleZh: "第三课：国际贸易合同条款",
    titlePinyin: "Dì sān kè: Guójì màoyì hétong tiáokuǎn",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Thùy Nguyễn",
    youtubeUrl: "https://www.youtube.com/watch?v=ANK5eu--tfM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 3 国际贸易合同条款",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc điều khoản miễn trách / xử lý vi phạm: 如因……致使……，则…… (Nếu do... dẫn đến..., thì...).",
      "Cấu trúc giải quyết tranh chấp: 应通过友好协商解决；协商不成的，提交……仲裁 (Nên giải quyết qua thương lượng hữu nghị; nếu thương lượng không thành, đệ trình... trọng tài).",
      "Phân biệt 甲方 (Bên A — thường là bên mua/giao thầu) và 乙方 (Bên B — thường là bên bán/nhận thầu).",
    ],
    newWords: [
      {
        hanzi: "不可抗力",
        pinyin: "bùkě kànglì",
        partOfSpeech: "Danh từ",
        meaningVi: "bất khả kháng (Force Majeure)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 18,
      },
      {
        hanzi: "违约责任",
        pinyin: "wéiyuē zérèn",
        partOfSpeech: "Danh từ",
        meaningVi: "trách nhiệm vi phạm hợp đồng",
        radical: "辶 (Sước)",
        strokeCount: 27,
      },
      {
        hanzi: "仲裁机构",
        pinyin: "zhòngcái jīgòu",
        partOfSpeech: "Danh từ",
        meaningVi: "cơ quan trọng tài",
        radical: "亻 (Nhân đứng)",
        strokeCount: 32,
      },
      {
        hanzi: "保密条款",
        pinyin: "bǎomì tiáokuǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "điều khoản bảo mật",
        radical: "亻 (Nhân đứng)",
        strokeCount: 39,
      },
      {
        hanzi: "知识产权",
        pinyin: "zhīshi chǎnquán",
        partOfSpeech: "Danh từ",
        meaningVi: "quyền sở hữu trí tuệ",
        radical: "矢 (Thỉ)",
        strokeCount: 27,
      },
      {
        hanzi: "索赔期限",
        pinyin: "suǒpéi qīxiàn",
        partOfSpeech: "Danh từ",
        meaningVi: "thời hạn khiếu nại đòi bồi thường",
        radical: "贝 (Bối)",
        strokeCount: 42,
      },
      {
        hanzi: "生效日期",
        pinyin: "shēngxiào rìqī",
        partOfSpeech: "Danh từ",
        meaningVi: "ngày có hiệu lực",
        radical: "生 (Sinh)",
        strokeCount: 31,
      },
      {
        hanzi: "书面确认",
        pinyin: "shūmiàn quèrèn",
        partOfSpeech: "Động từ",
        meaningVi: "xác nhận bằng văn bản",
        radical: "乛 (Ất)",
        strokeCount: 32,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Đàm phán điều khoản bất khả kháng và bồi thường",
        lines: [
          {
            speaker: "法务经理",
            zh: "针对这份供货合同，我们建议在不可抗力条款中明确列明自然灾害、战争及政府禁令，并规定受影响方须在七日内书面通知对方。",
            pinyin: "Zhēnduì zhè fèn gōnghuò hétong, wǒmen jiànyì zài bùkě kànglì tiáokuǎn zhōng míngquè lièmíng zìrán zāihài, zhànzhēng jí zhèngfǔ jìnlìng, bìng guīdìng shòuyǐngxiǎngfāng xū zài qīrì nèi shūmiàn tōngzhī duìfāng.",
            vi: "Đối với hợp đồng cung ứng này, chúng tôi đề nghị liệt kê rõ thiên tai, chiến tranh và lệnh cấm của chính phủ trong điều khoản bất khả kháng, đồng thời quy định bên bị ảnh hưởng phải thông báo bằng văn bản trong vòng 7 ngày.",
          },
          {
            speaker: "供应商代表",
            zh: "同意。另外关于违约责任，若因乙方逾期交货致使甲方遭受直接经济损失，每日按未交货金额的千分之一支付违约金，上限不超过合同总额的百分之五。",
            pinyin: "Tóngyì. Lìngwài guānyú wéiyuē zérèn, ruò yīn Yǐfāng yúqī jiāohuò zhìshǐ Jiǎfāng zāoshòu zhíjiē jīngjì sǔnshī, měirì àn wèijiāohuò jīn'é de qiānfēnzhī yī zhīfù wéiyuējīn, shàngxiàn bù chāoguò hétong zǒng'é de bǎifēnzhī wǔ.",
            vi: "Đồng ý. Ngoài ra về trách nhiệm vi phạm, nếu do Bên B giao hàng quá hạn dẫn đến Bên A chịu tổn thất kinh tế trực tiếp, mỗi ngày trả phạt vi phạm bằng 0,1% giá trị hàng chưa giao, mức trần không vượt quá 5% tổng giá trị hợp đồng.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Điều khoản bảo mật và trọng tài thương mại",
        lines: [
          {
            speaker: "甲方律师",
            zh: "本协议涉及我方核心工艺图纸，因此保密条款在合同终止后三年内依然具有法律约束力。",
            pinyin: "Běn xiéyì shèjí wǒfāng héxīn gōngyì túzhǐ, yīncǐ bǎomì tiáokuǎn zài hétong zhōngzhǐ hòu sānnián nèi yīrán jùyǒu fǎlǜ yuēshùlì.",
            vi: "Thỏa thuận này liên quan đến bản vẽ quy trình cốt lõi của bên tôi, do đó điều khoản bảo mật vẫn có giá trị ràng buộc pháp lý trong vòng 3 năm sau khi chấm dứt hợp đồng.",
          },
          {
            speaker: "乙方律师",
            zh: "没问题。若今后发生争议，双方应先友好协商；协商不成的，同意提交新加坡国际仲裁中心裁决。",
            pinyin: "Méi wèntí. Ruò jīnhòu fāshēng zhēngyì, shuāngfāng yīng xiān yǒuhǎo xiéshāng; xiéshāng bùchéng de, tóngyì tíjiāo Xīnjiāpō Guójì Zhòngcái Zhōngxīn cáijué.",
            vi: "Không vấn đề gì. Nếu sau này phát sinh tranh chấp, hai bên nên thương lượng hữu nghị trước; nếu thương lượng không thành, đồng ý đệ trình Trung tâm Trọng tài Quốc tế Singapore phán quyết.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc giả thiết – hậu quả pháp lý: 如因……致使……，则……",
        formula: "如因 + [Nguyên nhân] + 致使 + [Hậu quả] + ，则 + [Cách xử lý / Trách nhiệm]",
        explanationVi:
          "Cấu trúc văn bản hợp đồng cực kỳ chuẩn mực, diễn tả mối quan hệ nhân quả và trách nhiệm pháp lý phát sinh.",
        examples: [
          {
            zh: "如因不可抗力致使合同无法履行，则双方互不承担违约责任。",
            pinyin: "Ruò yīn bùkě kànglì zhìshǐ hétong wúfǎ lǚxíng, zé shuāngfāng hù bù chéngdān wéiyuē zérèn.",
            vi: "Nếu do bất khả kháng dẫn đến không thể thực hiện hợp đồng, thì hai bên không phải chịu trách nhiệm vi phạm lẫn nhau.",
          },
          {
            zh: "如因一方泄密致使对方受损，则违约方须承担全部赔偿责任。",
            pinyin: "Ruò yīn yīfāng xièmì zhìshǐ duìfāng shòusǔn, zé wéiyuēfāng xū chéngdān quánbù péicháng zérèn.",
            vi: "Nếu do một bên làm lộ bí mật dẫn đến bên kia bị thiệt hại, thì bên vi phạm phải chịu toàn bộ trách nhiệm bồi thường.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc giải quyết tranh chấp: 协商不成的，提交……",
        formula: "双方应通过友好协商解决；协商不成的，提交 + [Cơ quan trọng tài / Tòa án]",
        explanationVi:
          "Mẫu câu tiêu chuẩn trong điều khoản giải quyết tranh chấp (争议解决条款) của mọi hợp đồng thương mại tiếng Trung.",
        examples: [
          {
            zh: "凡因本合同引起的争议，协商不成的，提交中国国际经济贸易仲裁委员会仲裁。",
            pinyin: "Fán yīn běn hétong yǐnqǐ de zhēngyì, xiéshāng bùchéng de, tíjiāo Zhōngguó Guójì Jīngjì Màoyì Zhòngcái Wěiyuánhuì zhòngcái.",
            vi: "Mọi tranh chấp phát sinh từ hợp đồng này, nếu thương lượng không thành, đệ trình Ủy ban Trọng tài Kinh tế và Thương mại Quốc tế Trung Quốc phân xử.",
          },
          {
            zh: "双方就质量问题协商不成的，可提交第三方权威机构鉴定。",
            pinyin: "Shuāngfāng jiù zhìliàng wèntí xiéshāng bùchéng de, kě tíjiāo dì-sānfāng quánwēi jīgòu jiàndìng.",
            vi: "Nếu hai bên thương lượng không thành về vấn đề chất lượng, có thể gửi tổ chức uy tín bên thứ ba giám định.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk8-l3-q1",
        "Sắp xếp các cụm từ sau thành điều khoản hợp đồng hoàn chỉnh (Nếu do bất khả kháng dẫn đến không thể giao hàng, hai bên không chịu trách nhiệm vi phạm):",
        ["如因不可抗力", "致使无法交货，", "则双方", "互不承担", "违约责任。"],
        "如因不可抗力致使无法交货，则双方互不承担违约责任。",
        "Rú yīn bùkě kànglì zhìshǐ wúfǎ jiāohuò, zé shuāngfāng hù bù chéngdān wéiyuē zérèn.",
        "Cấu trúc chuẩn hợp đồng: 如因……致使……，则……."
      ),
      writingOrder(
        "hsk8-l3-q2",
        "Sắp xếp thành điều khoản sửa đổi hợp đồng (Bất kỳ sửa đổi nào đối với hợp đồng này đều phải có xác nhận bằng văn bản của hai bên mới có hiệu lực):",
        ["对本合同的", "任何修改", "均须经双方", "书面确认", "方可生效。"],
        "对本合同的任何修改均须经双方书面确认方可生效。",
        "Duì běn hétong de rènhé xiūgǎi jūnxū jīng shuāngfāng shūmiàn quèrèn fāngkě shēngxiào.",
        "Cụm 均须经双方书面确认方可生效 (đều phải qua hai bên xác nhận bằng văn bản mới có hiệu lực) rất phổ biến cuối hợp đồng."
      ),
      writingStroke(
        "hsk8-l3-q3",
        "赔",
        "péi",
        "bồi thường (trong 索赔 / 赔偿)",
        "Chữ 赔 gồm bộ 贝 (tiền bạc) bên trái và 咅 bên phải, tổng 12 nét, dùng trong 索赔 (khiếu nại đòi bồi thường)."
      ),
      writingTwoSentences(
        "hsk8-l3-q4",
        "保密条款",
        "bǎomì tiáokuǎn",
        "điều khoản bảo mật",
        "Đặt 2 câu có chứa 保密条款: Câu 1 về ký kết hợp đồng lao động/dự án, Câu 2 về thời hạn hiệu lực sau khi chấm dứt hợp đồng."
      ),
      writingTwoSentences(
        "hsk8-l3-q5",
        "不可抗力",
        "bùkě kànglì",
        "bất khả kháng",
        "Đặt 2 câu có chứa 不可抗力: Câu 1 về thiên tai/dịch bệnh trong đời sống, Câu 2 về điều khoản miễn trách trong hợp đồng thương mại."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: 数字化转型与智慧供应链 (Chuyển đổi số, AI & Chuỗi cung ứng thông minh)
  // ==========================================
  {
    id: "hsk8-l4-digital",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "advanced",
    lessonNumber: 4,
    title: "Bài 4: Chuyển đổi số, AI & Chuỗi cung ứng thông minh",
    titleZh: "第四课：数字化转型与智慧供应链",
    titlePinyin: "Dì sì kè: Shùzìhuà zhuǎnxíng yǔ zhìhuì gōngyìngliàn",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Thương Mại BCT",
    youtubeUrl: "https://www.youtube.com/watch?v=iDkhPtuq1F4",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 4 数字化转型与智慧供应链",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc công nghệ/giải pháp: 依托……，实现…… (Dựa vào nền tảng..., hiện thực hóa...).",
      "Cấu trúc nâng cấp hiệu suất: 不仅大幅降低了……，更显著提升了…… (Không chỉ giảm mạnh..., mà còn nâng cao đáng kể...).",
      "Thuật ngữ sản xuất thông minh: 工业互联网 (Internet công nghiệp), 预测性维护 (bảo trì dự đoán), 降本增效 (giảm chi phí tăng hiệu quả).",
    ],
    newWords: [
      {
        hanzi: "数字化转型",
        pinyin: "shùzìhuà zhuǎnxíng",
        partOfSpeech: "Danh từ",
        meaningVi: "chuyển đổi số",
        radical: "攵 (Phộc)",
        strokeCount: 40,
      },
      {
        hanzi: "智慧供应链",
        pinyin: "zhìhuì gōngyìngliàn",
        partOfSpeech: "Danh từ",
        meaningVi: "chuỗi cung ứng thông minh",
        radical: "日 (Nhật)",
        strokeCount: 54,
      },
      {
        hanzi: "人工智能",
        pinyin: "réngōng zhìnéng",
        partOfSpeech: "Danh từ",
        meaningVi: "trí tuệ nhân tạo (AI)",
        radical: "人 (Nhân)",
        strokeCount: 27,
      },
      {
        hanzi: "工业互联网",
        pinyin: "gōngyè hùliánwǎng",
        partOfSpeech: "Danh từ",
        meaningVi: "Internet công nghiệp (IIoT)",
        radical: "工 (Công)",
        strokeCount: 30,
      },
      {
        hanzi: "降本增效",
        pinyin: "jiàngběn zēngxiào",
        partOfSpeech: "Thành ngữ / Cụm từ",
        meaningVi: "giảm chi phí, tăng hiệu quả",
        radical: "阝 (Phụ)",
        strokeCount: 38,
      },
      {
        hanzi: "数据孤岛",
        pinyin: "shùjù gūdǎo",
        partOfSpeech: "Danh từ",
        meaningVi: "ốc đảo dữ liệu (dữ liệu rời rạc, không liên thông)",
        radical: "攵 (Phộc)",
        strokeCount: 39,
      },
      {
        hanzi: "可视化追踪",
        pinyin: "kěshìhuà zhuīzōng",
        partOfSpeech: "Cụm danh từ",
        meaningVi: "theo dõi trực quan hóa",
        radical: "口 (Khẩu)",
        strokeCount: 44,
      },
      {
        hanzi: "算法优化",
        pinyin: "suànfǎ yōuhuà",
        partOfSpeech: "Cụm từ",
        meaningVi: "tối ưu hóa thuật toán",
        radical: "竹 (Trúc)",
        strokeCount: 32,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Hội nghị triển khai hệ thống chuỗi cung ứng thông minh",
        lines: [
          {
            speaker: "技术总监",
            zh: "过去我们各工厂之间存在严重的数据孤岛，库存信息滞后。今年我们依托工业互联网平台，实现了从采购到交付的全流程可视化追踪。",
            pinyin: "Guòqù wǒmen gè gōngchǎng zhījiān cúnzài yánzhòng de shùjù gūdǎo, kùcún xìnxī zhìhòu. Jīnnián wǒmen yītuō gōngyè hùliánwǎng píngtái, shíxiàn le cóng cǎigòu dào jiāofù de quánliúchéng kěshìhuà zhuīzōng.",
            vi: "Trước đây giữa các nhà máy của chúng ta tồn tại tình trạng ốc đảo dữ liệu nghiêm trọng, thông tin tồn kho bị trễ. Năm nay chúng ta dựa vào nền tảng Internet công nghiệp, đã hiện thực hóa theo dõi trực quan toàn quy trình từ thu mua đến giao hàng.",
          },
          {
            speaker: "供应链副总",
            zh: "这套智慧供应链系统上线后，通过人工智能算法优化排产，不仅大幅降低了呆滞库存，更显著提升了订单准时交付率。",
            pinyin: "Zhè tào zhìhuì gōngyìngliàn xìtǒng shàngxiàn hòu, tōngguò réngōng zhìnéng suànfǎ yōuhuà páichǎn, bùjǐn dàfú jiàngdī le dāizhì kùcún, gèng xiǎnzhù tíshēng le dìngdān zhǔnshí jiāofùlǜ.",
            vi: "Sau khi hệ thống chuỗi cung ứng thông minh này vận hành, nhờ tối ưu hóa thuật toán AI để lập lịch sản xuất, không chỉ giảm mạnh hàng tồn kho ứ đọng mà còn nâng cao đáng kể tỷ lệ giao hàng đúng hạn.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Thảo luận về chi phí và lộ trình chuyển đổi số",
        lines: [
          {
            speaker: "运营经理",
            zh: "很多中小供应商担心数字化转型前期投入过高，短期内看不到回报。",
            pinyin: "Hěnduō zhōngxiǎo gōngyìngshāng dānxīn shùzìhuà zhuǎnxíng qiánqī tóurù guògāo, duǎnqī nèi kànbudào huíbào.",
            vi: "Nhiều nhà cung cấp vừa và nhỏ lo ngại chi phí đầu tư ban đầu cho chuyển đổi số quá cao, ngắn hạn chưa thấy hoàn vốn.",
          },
          {
            speaker: "顾问",
            zh: "建议采取分阶段部署策略，先从核心痛点切入，用云端轻量化方案实现降本增效，再逐步扩展。",
            pinyin: "Jiànyì cǎiqǔ fēnjiēduàn bùshǔ cèlüè, xiān cóng héxīn tòngdiǎn qiērù, yòng yúnduān qīngliànghuà fāng'àn shíxiàn jiàngběn zēngxiào, zài zhúbù kuòzhǎn.",
            vi: "Đề xuất áp dụng chiến lược triển khai theo giai đoạn, bắt đầu từ điểm nghẽn cốt lõi, dùng giải pháp đám mây gọn nhẹ để giảm chi phí tăng hiệu quả trước, rồi mới mở rộng dần.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc nền tảng – thành quả: 依托……，实现……",
        formula: "依托 + [Nền tảng / Công nghệ / Lợi thế] + ，实现 + [Mục tiêu / Kết quả]",
        explanationVi:
          "Dùng nhiều trong báo cáo công nghệ và chiến lược doanh nghiệp để nhấn mạnh việc dựa trên một hạ tầng/công nghệ để đạt được mục tiêu cụ thể.",
        examples: [
          {
            zh: "我司依托云计算和大数据，实现了跨国仓库的实时协同。",
            pinyin: "Wǒsī yītuō yúnjìsuàn hé dàshùjù, shíxiàn le kuàguó cāngkù de shíshí xiétóng.",
            vi: "Công ty chúng tôi dựa vào điện toán đám mây và dữ liệu lớn, đã hiện thực hóa sự phối hợp thời gian thực giữa các kho xuyên quốc gia.",
          },
          {
            zh: "依托人工智能视觉检测，质检准确率实现了质的飞跃。",
            pinyin: "Yītuō réngōng zhìnéng shìjué jiǎncè, zhìjiǎn zhǔnquèlǜ shíxiàn le zhì de fēiyuè.",
            vi: "Dựa vào kiểm tra thị giác AI, tỷ lệ chính xác kiểm định chất lượng đã đạt bước nhảy vọt về chất.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc tăng tiến nhấn mạnh hiệu quả: 不仅大幅……，更显著……",
        formula: "不仅大幅 + [Động từ 1] + ，更显著 + [Động từ 2]",
        explanationVi:
          "Diễn đạt hai lợi ích song song với mức độ nhấn mạnh cao hơn ở vế sau, thường dùng khi thuyết trình kết quả dự án.",
        examples: [
          {
            zh: "自动化产线不仅大幅缩短了生产周期，更显著提高了产品一致性。",
            pinyin: "Zìdònghuà chǎnxiàn bùjǐn dàfú suōduǎn le shēngchǎn zhōuqī, gèng xiǎnzhù tígāo le chǎnpǐn yīzhìxìng.",
            vi: "Dây chuyền tự động hóa không chỉ rút ngắn mạnh chu kỳ sản xuất mà còn nâng cao đáng kể tính đồng nhất của sản phẩm.",
          },
          {
            zh: "该方案不仅大幅压缩了物流成本，更显著增强了客户满意度。",
            pinyin: "Gāi fāng'àn bùjǐn dàfú yāsuō le wùliú chéngběn, gèng xiǎnzhù zēngqiáng le kèhù mǎnyìdù.",
            vi: "Phương án này không chỉ cắt giảm mạnh chi phí logistics mà còn tăng cường đáng kể mức độ hài lòng của khách hàng.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk8-l4-q1",
        "打破部门之间的数据孤岛，是企业推进数字化转型的首要任务。",
        "Dǎpò bùmén zhījiān de shùjù gūdǎo, shì qǐyè tuījìn shùzìhuà zhuǎnxíng de shǒuyào rènwu.",
        "Nghe câu sau và chọn ý hiểu đúng nhất về '数据孤岛':",
        [
          "Tình trạng dữ liệu bị chia cắt, không liên thông giữa các phòng ban.",
          "Hệ thống lưu trữ dữ liệu trên đám mây toàn cầu.",
          "Thiết bị bảo mật chống tấn công mạng.",
          "Đội ngũ kỹ sư phân tích dữ liệu lớn.",
        ],
        "Tình trạng dữ liệu bị chia cắt, không liên thông giữa các phòng ban.",
        "数据孤岛 (ốc đảo dữ liệu) chỉ dữ liệu bị cô lập giữa các hệ thống/phòng ban, cần 打破 (phá vỡ)."
      ),
      listeningFill(
        "hsk8-l4-q2",
        "我们依托工业互联网平台，实现了全流程可视化追踪。",
        "我们依托______平台，实现了全流程可视化追踪。",
        "Wǒmen yītuō gōngyè hùliánwǎng píngtái, shíxiàn le quánliúchéng kěshìhuà zhuīzōng.",
        "Nghe và điền cụm từ tiếng Trung còn thiếu (Internet công nghiệp):",
        "工业互联网",
        "工业互联网 (gōngyè hùliánwǎng) là Internet công nghiệp (IIoT)."
      ),
      listeningDialogue(
        "hsk8-l4-q3",
        "男：引入AI算法优化排产后，效果怎么样？女：不仅大幅降低了呆滞库存，更显著提升了订单准时交付率。",
        "Nán: Yǐnrù AI suànfǎ yōuhuà páichǎn hòu, xiàoguǒ zěnmeyàng? Nǚ: Bùjǐn dàfú jiàngdī le dāizhì kùcún, gèng xiǎnzhù tíshēng le dìngdān zhǔnshí jiāofùlǜ.",
        "Nghe hội thoại. Việc ứng dụng thuật toán AI lập lịch sản xuất mang lại hiệu quả gì?",
        [
          "Giảm mạnh hàng tồn kho ứ đọng và nâng cao tỷ lệ giao hàng đúng hạn.",
          "Cắt giảm toàn bộ nhân sự bộ phận kinh doanh.",
          "Tăng lượng hàng tồn kho để dự phòng rủi ro.",
          "Kéo dài thời gian giao hàng thêm 2 tuần.",
        ],
        "Giảm mạnh hàng tồn kho ứ đọng và nâng cao tỷ lệ giao hàng đúng hạn.",
        "大幅降低了呆滞库存 (giảm mạnh tồn kho ứ đọng) và 显著提升了订单准时交付率 (nâng cao đáng kể tỷ lệ giao hàng đúng hạn)."
      ),
      listeningMcq(
        "hsk8-l4-q4",
        "面对激烈竞争，制造企业必须借助自动化和数字化手段实现降本增效。",
        "Miànduì jīliè jìngzhēng, zhìzào qǐyè bìxū jièzhù zìdònghuà hé shùzìhuà shǒuduàn shíxiàn jiàngběn zēngxiào.",
        "Nghe câu sau. Mục tiêu '降本增效' có nghĩa là gì?",
        [
          "Giảm chi phí, tăng hiệu quả",
          "Mở rộng quy mô nhà xưởng bằng mọi giá",
          "Tăng giá bán lẻ để bù đắp chi phí",
          "Giảm sản lượng để tiết kiệm điện năng",
        ],
        "Giảm chi phí, tăng hiệu quả",
        "降本 (giảm chi phí / 降低成本) + 增效 (tăng hiệu quả / 增加效益)."
      ),
      listeningDialogue(
        "hsk8-l4-q5",
        "女：中小企业数字化转型资金有限，该怎么起步？男：建议采用云端轻量化方案，分阶段部署，先解决最紧迫的痛点。",
        "Nǚ: Zhōngxiǎo qǐyè shùzìhuà zhuǎnxíng zījīn yǒuxiàn, gāi zěnme qǐbù? Nán: Jiànyì cǎiyòng yúnduān qīngliànghuà fāng'àn, fēnjiēduàn bùshǔ, xiān jiějué zuì jǐnpò de tòngdiǎn.",
        "Nghe đoạn tư vấn. Chuyên gia khuyên doanh nghiệp vừa và nhỏ nên bắt đầu chuyển đổi số thế nào?",
        [
          "Dùng giải pháp đám mây gọn nhẹ, triển khai theo giai đoạn từ điểm nghẽn cấp bách nhất.",
          "Vay vốn ngân hàng để thay thế toàn bộ máy móc trong một lần.",
          "Chờ đến khi đối thủ chuyển đổi xong mới bắt đầu.",
          "Tự xây dựng trung tâm dữ liệu riêng tốn kém.",
        ],
        "Dùng giải pháp đám mây gọn nhẹ, triển khai theo giai đoạn từ điểm nghẽn cấp bách nhất.",
        "云端轻量化方案 (giải pháp đám mây gọn nhẹ) + 分阶段部署 (triển khai theo giai đoạn) + 先解决最紧迫的痛点 (giải quyết điểm nghẽn cấp bách nhất trước)."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 企业文化与跨文化管理 (Quản trị nhân sự, Văn hóa doanh nghiệp Trung Quốc)
  // ==========================================
  {
    id: "hsk8-l5-culture",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "advanced",
    lessonNumber: 5,
    title: "Bài 5: Quản trị nhân sự & Văn hóa doanh nghiệp Trung Quốc",
    titleZh: "第五课：企业文化与跨文化管理",
    titlePinyin: "Dì wǔ kè: Qǐyè wénhuà yǔ kuàwénhuà guǎnlǐ",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "HUYỀN NGỮ ĐƯỜNG - TIẾNG TRUNG ONLINE",
    youtubeUrl: "https://www.youtube.com/watch?v=4oSrpakbym8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 5 企业文化与跨文化管理",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc cân bằng quản trị: 既要……，又要…… (Vừa phải..., lại vừa phải...).",
      "Cấu trúc dung hòa văn hóa: 求同存异 (Cầu đồng tồn dị — tìm điểm chung, tôn trọng sự khác biệt).",
      "Thuật ngữ nhân sự: 绩效考核 (đánh giá hiệu suất KPI), 激励机制 (cơ chế đãi ngộ/khích lệ), 归属感 (cảm giác gắn kết), 扁平化管理 (quản trị phẳng).",
    ],
    newWords: [
      {
        hanzi: "企业文化",
        pinyin: "qǐyè wénhuà",
        partOfSpeech: "Danh từ",
        meaningVi: "văn hóa doanh nghiệp",
        radical: "人 (Nhân)",
        strokeCount: 19,
      },
      {
        hanzi: "跨文化管理",
        pinyin: "kuàwénhuà guǎnlǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "quản trị đa văn hóa",
        radical: "足 (Túc)",
        strokeCount: 46,
      },
      {
        hanzi: "绩效考核",
        pinyin: "jìxiào kǎohé",
        partOfSpeech: "Danh từ",
        meaningVi: "đánh giá hiệu suất (KPI)",
        radical: "纟 (Mịch)",
        strokeCount: 37,
      },
      {
        hanzi: "激励机制",
        pinyin: "jīlì jīzhì",
        partOfSpeech: "Danh từ",
        meaningVi: "cơ chế khích lệ / đãi ngộ",
        radical: "氵 (Chấm thủy)",
        strokeCount: 37,
      },
      {
        hanzi: "凝聚力",
        pinyin: "níngjùlì",
        partOfSpeech: "Danh từ",
        meaningVi: "sức gắn kết tập thể",
        radical: "冫 (Băng)",
        strokeCount: 32,
      },
      {
        hanzi: "归属感",
        pinyin: "guīshǔgǎn",
        partOfSpeech: "Danh từ",
        meaningVi: "cảm giác gắn bó, thuộc về",
        radical: "彐 (Kệ)",
        strokeCount: 30,
      },
      {
        hanzi: "扁平化管理",
        pinyin: "biǎnpínghuà guǎnlǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "quản trị phẳng (ít cấp bậc trung gian)",
        radical: "户 (Hộ)",
        strokeCount: 43,
      },
      {
        hanzi: "求同存异",
        pinyin: "qiútóng cúnyì",
        partOfSpeech: "Thành ngữ",
        meaningVi: "cầu đồng tồn dị (tìm điểm chung, giữ lại sự khác biệt)",
        radical: "水 (Thủy)",
        strokeCount: 25,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Trao đổi về quản trị đa văn hóa tại nhà máy Trung – Việt",
        lines: [
          {
            speaker: "人力资源总监",
            zh: "在越南子公司推进跨文化管理时，我们既要传承总部的狼性执行力，又要充分尊重当地员工的生活节奏与节日习俗。",
            pinyin: "Zài Yuènán zǐgōngsī tuījìn kuàwénhuà guǎnlǐ shí, wǒmen jì yào chuánchéng zǒngbù de lángxìng zhíxínglì, yòu yào chōngfèn zūnzhòng dāngdì yuángōng de shēnghuó jiézòu yǔ jiérì xísú.",
            vi: "Khi triển khai quản trị đa văn hóa tại công ty con ở Việt Nam, chúng ta vừa phải kế thừa năng lực thực thi quyết liệt của trụ sở chính, vừa phải tôn trọng đầy đủ nhịp sống và phong tục lễ Tết của nhân viên địa phương.",
          },
          {
            speaker: "中方厂长",
            zh: "说得很对。只有坚持求同存异，建立透明公平的绩效考核与激励机制，才能真正增强团队凝聚力和员工归属感。",
            pinyin: "Shuō de hěn duì. Zhǐyǒu jiānchí qiútóng cúnyì, jiànlì tòumíng gōngpíng de jìxiào kǎohé yǔ jīlì jīzhì, cáinéng zhēnzhèng zēngqiáng tuánduì níngjùlì hé yuángōng guīshǔgǎn.",
            vi: "Nói rất đúng. Chỉ khi kiên trì cầu đồng tồn dị, xây dựng cơ chế đánh giá hiệu suất và đãi ngộ minh bạch công bằng, mới có thể thực sự tăng cường sức gắn kết đội ngũ và cảm giác gắn bó của nhân viên.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Cải cách cơ cấu tổ chức theo hướng quản trị phẳng",
        lines: [
          {
            speaker: "部门主管",
            zh: "过去审批层级太多，导致市场响应速度慢。推行扁平化管理后，一线员工可以直接向项目负责人汇报。",
            pinyin: "Guòqù shěnpī céngjí tài duō, dǎozhì shìchǎng xiǎngyìng sùdù màn. Tuīxíng biǎnpínghuà guǎnlǐ hòu, yīxiàn yuángōng kěyǐ zhíjiē xiàng xiàngmù fùzérén huìbào.",
            vi: "Trước đây cấp bậc phê duyệt quá nhiều khiến tốc độ phản ứng thị trường chậm. Sau khi áp dụng quản trị phẳng, nhân viên tuyến đầu có thể báo cáo trực tiếp cho trưởng dự án.",
          },
          {
            speaker: "总经理",
            zh: "扁平化不是放任不管，而是通过明确权责边界和目标导向，激发年轻骨干的主观能动性。",
            pinyin: "Biǎnpínghuà bùshì fàngrèn bùguǎn, érshì tōngguò míngquè quánzé biānjiè hé mùbiāo dǎoxiàng, jīfā niánqīng gǔgàn de zhǔguān néngdòngxìng.",
            vi: "Quản trị phẳng không phải là buông lỏng không quản, mà là thông qua làm rõ ranh giới quyền hạn trách nhiệm và định hướng mục tiêu để khơi dậy tính chủ động của các nhân sự nòng cốt trẻ.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc cân bằng hai vế: 既要……，又要……",
        formula: "既要 + [Yêu cầu / Mục tiêu 1] + ，又要 + [Yêu cầu / Mục tiêu 2]",
        explanationVi:
          "Thường dùng trong phát biểu lãnh đạo và quản trị để nhấn mạnh cần kết hợp hài hòa hai yếu tố song song, không được thiên lệch.",
        examples: [
          {
            zh: "绩效考核既要看重短期业绩，又要兼顾员工的长期成长。",
            pinyin: "Jìxiào kǎohé jì yào kànzhòng duǎnqī yèjì, yòu yào jiāngù yuángōng de chángqī chéngzhǎng.",
            vi: "Đánh giá hiệu suất vừa phải coi trọng thành tích ngắn hạn, vừa phải tính đến sự phát triển dài hạn của nhân viên.",
          },
          {
            zh: "跨国团队既要保持制度统一，又要允许因地制宜。",
            pinyin: "Kuàguó tuánduì jì yào bǎochí zhìdù tǒngyī, yòu yào yǔnxǔ yīndì zhìyí.",
            vi: "Đội ngũ đa quốc gia vừa phải giữ tính thống nhất của chế độ, vừa phải cho phép linh hoạt theo địa phương.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc điều kiện duy nhất: 只有……，才能……",
        formula: "只有 + [Điều kiện tiên quyết] + ，才能 + [Kết quả mong muốn]",
        explanationVi:
          "Nhấn mạnh điều kiện bắt buộc duy nhất để đạt được mục tiêu quản trị hoặc xây dựng văn hóa doanh nghiệp.",
        examples: [
          {
            zh: "只有建立公平透明的激励机制，才能留住核心人才。",
            pinyin: "Zhǐyǒu jiànlì gōngpíng tòumíng de jīlì jīzhì, cáinéng liúzhù héxīn réncái.",
            vi: "Chỉ khi xây dựng cơ chế đãi ngộ công bằng minh bạch, mới có thể giữ chân nhân tài cốt lõi.",
          },
          {
            zh: "只有尊重文化差异，才能打造真正高效的跨国团队。",
            pinyin: "Zhǐyǒu zūnzhòng wénhuà chāyì, cáinéng dǎzào zhēnzhèng gāoxiào de kuàguó tuánduì.",
            vi: "Chỉ khi tôn trọng khác biệt văn hóa, mới có thể xây dựng đội ngũ đa quốc gia thực sự hiệu quả.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk8-l5-q1",
        "在跨文化管理中，我们既要坚持核心价值观，又要尊重当地习俗。",
        "Zài kuàwénhuà guǎnlǐ zhōng, wǒmen jì yào jiānchí héxīn jiàzhíguān, yòu yào zūnzhòng dāngdì xísú.",
        "Thu âm câu phát biểu quản trị đa văn hóa, nhấn rõ cặp liên từ 既要……又要……:",
        ["Thanh 4 dứt khoát (kuà, jì, yòu)", "Nhịp ngắt tự nhiên sau dấu phẩy"],
        "Ngắt nhịp rõ ràng ở 跨文化管理中 và giữa hai vế 既要... 又要... để tạo phong thái lãnh đạo."
      ),
      speakingShadowing(
        "hsk8-l5-q2",
        "只有坚持求同存异，才能增强团队的凝聚力和员工的归属感。",
        "Zhǐyǒu jiānchí qiútóng cúnyì, cáinéng zēngqiáng tuánduì de níngjùlì hé yuángōng de guīshǔgǎn.",
        "Thu âm câu nhấn mạnh tinh thần đội ngũ, chú ý phát âm chuẩn thành ngữ 求同存异:",
        ["Âm bật hơi q, c (qiú, cún, cái)", "Thanh 2 liên tiếp (qiútóng, níng)"],
        "Đọc rõ 求同存异 (qiútóng cúnyì) và nhấn mạnh vào hai danh từ cốt lõi 凝聚力, 归属感."
      ),
      speakingShadowing(
        "hsk8-l5-q3",
        "透明公平的绩效考核与激励机制，是留住核心人才的关键。",
        "Tòumíng gōngpíng de jìxiào kǎohé yǔ jīlì jīzhì, shì liúzhù héxīn réncái de guānjiàn.",
        "Thu âm câu thuyết trình về nhân sự, chú ý phân biệt âm j/x và thanh điệu:",
        ["Thanh 4 liên tiếp (jìxiào, jīlì jīzhì)", "Âm uốn lưỡi zh (zhì, zhù)"],
        "Cụm 绩效考核 (jìxiào kǎohé) và 激励机制 (jīlì jīzhì) có nhiều âm gần nhau, cần đọc tách bạch rõ ràng."
      ),
      speakingShadowing(
        "hsk8-l5-q4",
        "推行扁平化管理后，部门之间的沟通效率和决策速度明显提升。",
        "Tuīxíng biǎnpínghuà guǎnlǐ hòu, bùmén zhījiān de gōutōng xiàolǜ hé juécè sùdù míngxiǎn tíshēng.",
        "Thu âm câu báo cáo cải cách quản trị, chú ý từ 扁平化管理:",
        ["Biến điệu thanh 3 (guǎnlǐ → guánlǐ)", "Âm tròn môi ü (xiàolǜ, juécè)"],
        "Chú ý 管理 đọc biến điệu thành guánlǐ, và 效率 (xiàolǜ) phải tròn môi ở vận mẫu ü."
      ),
      speakingShadowing(
        "hsk8-l5-q5",
        "优秀的企业文化不是挂在墙上的口号，而是体现在日常决策中的行为准则。",
        "Yōuxiù de qǐyè wénhuà bùshì guà zài qiáng shàng de kǒuhào, érshì tǐxiàn zài rìcháng juécè zhōng de xíngwéi zhǔnzé.",
        "Thu âm câu kết luận sâu sắc về văn hóa doanh nghiệp, nhấn mạnh cấu trúc 不是……而是……:",
        ["Nhấn giọng 不是 / 而是", "Âm uốn lưỡi sh, ch, zh (shì, rìcháng, zhǔnzé)"],
        "Giọng điệu điềm tĩnh, nhấn nhẹ vào 不是 và nâng cao rõ ràng ở vế 而是 để làm nổi bật thông điệp."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 市场分析报告撰写 (Viết báo cáo phân tích thị trường & Đề xuất dự án)
  // ==========================================
  {
    id: "hsk8-l6-report",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "advanced",
    lessonNumber: 6,
    title: "Bài 6: Viết báo cáo phân tích thị trường & Đề xuất dự án",
    titleZh: "第六课：市场分析报告撰写",
    titlePinyin: "Dì liù kè: Shìchǎng fēnxī bàogào zhuànxiě",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 50,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "DJ.xiaoxian",
    youtubeUrl: "https://www.youtube.com/watch?v=aDDSfnoQbS4",
    defaultSearchQuery: "Giáo trình chuẩn HSK 8 Bài 6 市场分析报告撰写",
    attachedResourceIds: ["res-7-factory-vocab", "res-1-grammar"],
    grammarNotesVi: [
      "Cấu trúc tổng kết – kiến nghị trong báo cáo: 综上所述，本报告建议…… (Tổng hợp những điều nêu trên, báo cáo này kiến nghị...).",
      "Cấu trúc phân tích nguyên nhân đa chiều: 一方面……，另一方面…… (Một mặt..., mặt khác...).",
      "Thuật ngữ báo cáo kinh doanh: 市场份额 (thị phần), 竞品分析 (phân tích đối thủ cạnh tranh), 可行性研究 (nghiên cứu khả thi), 投资回报率 (ROI).",
    ],
    newWords: [
      {
        hanzi: "市场份额",
        pinyin: "shìchǎng fèn'é",
        partOfSpeech: "Danh từ",
        meaningVi: "thị phần",
        radical: "巾 (Cân)",
        strokeCount: 32,
      },
      {
        hanzi: "竞品分析",
        pinyin: "jìngpǐn fēnxī",
        partOfSpeech: "Danh từ",
        meaningVi: "phân tích sản phẩm đối thủ cạnh tranh",
        radical: "立 (Lập)",
        strokeCount: 31,
      },
      {
        hanzi: "可行性研究",
        pinyin: "kěxíngxìng yánjiū",
        partOfSpeech: "Danh từ",
        meaningVi: "nghiên cứu tính khả thi",
        radical: "口 (Khẩu)",
        strokeCount: 35,
      },
      {
        hanzi: "投资回报率",
        pinyin: "tóuzī huíbàolǜ",
        partOfSpeech: "Danh từ",
        meaningVi: "tỷ suất hoàn vốn đầu tư (ROI)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 41,
      },
      {
        hanzi: "目标客群",
        pinyin: "mùbiāo kèqún",
        partOfSpeech: "Danh từ",
        meaningVi: "nhóm khách hàng mục tiêu",
        radical: "目 (Mục)",
        strokeCount: 36,
      },
      {
        hanzi: "差异化优势",
        pinyin: "chāyìhuà yōushì",
        partOfSpeech: "Danh từ",
        meaningVi: "lợi thế khác biệt hóa",
        radical: "工 (Công)",
        strokeCount: 33,
      },
      {
        hanzi: "风险评估",
        pinyin: "fēngxiǎn pínggū",
        partOfSpeech: "Danh từ",
        meaningVi: "đánh giá rủi ro",
        radical: "风 (Phong)",
        strokeCount: 27,
      },
      {
        hanzi: "综上所述",
        pinyin: "zōngshàng suǒshù",
        partOfSpeech: "Thành ngữ",
        meaningVi: "tổng hợp những điều nêu trên, tóm lại",
        radical: "纟 (Mịch)",
        strokeCount: 27,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài khóa 1: Rà soát báo cáo nghiên cứu khả thi dự án mới",
        lines: [
          {
            speaker: "市场分析师",
            zh: "根据最新竞品分析，东南亚新能源配件市场增速迅猛，但头部品牌尚未完全垄断市场份额。",
            pinyin: "Gēnjù zuìxīn jìngpǐn fēnxī, Dōngnányà xīnnéngyuán pèijiàn shìchǎng zēngsù xùnměng, dàn tóubù pǐnpái shàngwèi wánquán lǒngduàn shìchǎng fèn'é.",
            vi: "Theo phân tích đối thủ mới nhất, thị trường phụ kiện năng lượng mới Đông Nam Á tăng trưởng rất nhanh, nhưng các thương hiệu dẫn đầu vẫn chưa hoàn toàn độc chiếm thị phần.",
          },
          {
            speaker: "投资总监",
            zh: "可行性研究里的投资回报率测算很清晰，但风险评估部分还需补充原材料价格波动的敏感性分析。",
            pinyin: "Kěxíngxìng yánjiū lǐ de tóuzī huíbàolǜ cèsuàn hěn qīngxī, dàn fēngxiǎn pínggū bùfen háixū bǔchōng yuáncáiliào jiàgé bōdòng de mǐngǎnxìng fēnxī.",
            vi: "Phần ước tính tỷ suất hoàn vốn (ROI) trong nghiên cứu khả thi rất rõ ràng, nhưng phần đánh giá rủi ro cần bổ sung thêm phân tích độ nhạy trước biến động giá nguyên vật liệu.",
          },
        ],
      },
      {
        titleVi: "Bài khóa 2: Hoàn thiện phần kết luận và đề xuất hành động",
        lines: [
          {
            speaker: "项目经理",
            zh: "我们的目标客群对性价比和本地化售后最为敏感，这正是我们打造差异化优势的突破口。",
            pinyin: "Wǒmen de mùbiāo kèqún duì xìngjiàbǐ hé běndìhuà shòuhòu zuìwéi mǐngǎn, zhè zhèngshì wǒmen dǎzào chāyìhuà yōushì de tūpòkǒu.",
            vi: "Nhóm khách hàng mục tiêu của chúng ta nhạy cảm nhất với tỷ lệ hiệu năng/giá thành và hậu mãi bản địa hóa, đây chính là điểm đột phá để chúng ta tạo lợi thế khác biệt.",
          },
          {
            speaker: "副总裁",
            zh: "很好。报告结尾用“综上所述”收束核心论点，并附上未来十二个月的分阶段落地预算表，周五提交董事会审议。",
            pinyin: "Hěnhǎo. Bàogào jiéwěi yòng 'zōngshàng suǒshù' shōushù héxīn lùndiǎn, bìng fùshàng wèilái shí'èr gè yuè de fēnjiēduàn luòdì yùsuànbiǎo, zhōuwǔ tíjiāo dǒngshìhuì shěnyì.",
            vi: "Rất tốt. Cuối báo cáo hãy dùng '综上所述' để chốt lại các luận điểm cốt lõi, kèm theo bảng ngân sách triển khai theo giai đoạn trong 12 tháng tới, thứ Sáu trình Hội đồng quản trị phê duyệt.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Cấu trúc chốt báo cáo: 综上所述，……",
        formula: "综上所述，+ [Kết luận tổng quát / Đề xuất hành động]",
        explanationVi:
          "Thành ngữ văn viết chuẩn mực dùng ở đoạn cuối báo cáo phân tích thị trường, luận văn hoặc đề xuất dự án để tổng kết toàn bộ lập luận phía trên.",
        examples: [
          {
            zh: "综上所述，该项目在技术与财务层面均具备较高可行性，建议予以立项。",
            pinyin: "Zōngshàng suǒshù, gāi xiàngmù zài jìshù yǔ cáiwù céngmiàn jūn jùbèi jiàogāo kěxíngxìng, jiànyì yǔyǐ lìxiàng.",
            vi: "Tóm lại, dự án này đều có tính khả thi cao ở cả phương diện kỹ thuật và tài chính, kiến nghị phê duyệt lập dự án.",
          },
          {
            zh: "综上所述，拓展越南细分市场有助于进一步提升公司整体市场份额。",
            pinyin: "Zōngshàng suǒshù, tuòzhǎn Yuènán xìfēn shìchǎng yǒuzhùyú jìnyībù tíshēng gōngsī zhěngtǐ shìchǎng fèn'é.",
            vi: "Tóm lại, mở rộng thị trường ngách tại Việt Nam giúp nâng cao hơn nữa thị phần tổng thể của công ty.",
          },
        ],
      },
      {
        titleVi: "Cấu trúc phân tích song song: 一方面……，另一方面……",
        formula: "一方面 + [Luận điểm / Nguyên nhân 1] + ，另一方面 + [Luận điểm / Nguyên nhân 2]",
        explanationVi:
          "Giúp trình bày hai khía cạnh của một vấn đề thị trường một cách mạch lạc, cân đối và thuyết phục trong văn viết học thuật lẫn thương mại.",
        examples: [
          {
            zh: "我们一方面要巩固现有核心客户，另一方面要积极开拓新兴目标客群。",
            pinyin: "Wǒmen yīfāngmiàn yào gǒnggù xiànyǒu héxīn kèhù, lìng yīfāngmiàn yào jījí kāituò xīnxīng mùbiāo kèqún.",
            vi: "Chúng ta một mặt phải củng cố khách hàng cốt lõi hiện có, mặt khác phải tích cực khai phá nhóm khách hàng mục tiêu mới nổi.",
          },
          {
            zh: "新产品一方面具备显著的价格优势，另一方面在节能表现上领先竞品。",
            pinyin: "Xīn chǎnpǐn yīfāngmiàn jùbèi xiǎnzhù de jiàgé yōushì, lìng yīfāngmiàn zài jiénéng biǎoxiàn shàng lǐngxiān jìngpǐn.",
            vi: "Sản phẩm mới một mặt có lợi thế giá cả rõ rệt, mặt khác dẫn đầu đối thủ về hiệu suất tiết kiệm năng lượng.",
          },
        ],
      },
    ],
    exercises: [
      writingOrder(
        "hsk8-l6-q1",
        "Sắp xếp thành câu kết luận báo cáo phân tích thị trường (Tóm lại, dự án này có tỷ suất hoàn vốn cao, kiến nghị phê duyệt lập dự án):",
        ["综上所述，", "该项目", "投资回报率较高，", "建议董事会", "予以立项。"],
        "综上所述，该项目投资回报率较高，建议董事会予以立项。",
        "Zōngshàng suǒshù, gāi xiàngmù tóuzī huíbàolǜ jiàogāo, jiànyì dǒngshìhuì yǔyǐ lìxiàng.",
        "Mẫu câu chuẩn chốt đề xuất dự án: 综上所述 + đánh giá + 建议予以立项 (kiến nghị phê duyệt lập dự án)."
      ),
      writingOrder(
        "hsk8-l6-q2",
        "Sắp xếp thành câu phân tích chiến lược sản phẩm (Thông qua phân tích đối thủ, chúng ta cần tìm đúng nhóm khách hàng mục tiêu để tạo lợi thế khác biệt):",
        ["通过竞品分析，", "我们要精准定位", "目标客群，", "打造", "差异化优势。"],
        "通过竞品分析，我们要精准定位目标客群，打造差异化优势。",
        "Tōngguò jìngpǐn fēnxī, wǒmen yào jīngzhǔn dìngwèi mùbiāo kèqún, dǎzào chāyìhuà yōushì.",
        "Động từ chuyên ngành báo cáo: 精准定位 (định vị chính xác) + 打造 (xây dựng/tạo nên)."
      ),
      writingStroke(
        "hsk8-l6-q3",
        "估",
        "gū",
        "ước lượng, đánh giá (trong 风险评估 / 估算)",
        "Chữ 估 gồm bộ 亻 (Nhân đứng) bên trái và 古 bên phải, tổng 7 nét, dùng trong 风险评估 (đánh giá rủi ro)."
      ),
      writingTwoSentences(
        "hsk8-l6-q4",
        "市场份额",
        "shìchǎng fèn'é",
        "thị phần",
        "Đặt 2 câu có chứa 市场份额: Câu 1 về một thương hiệu quen thuộc trong đời sống, Câu 2 về mục tiêu mở rộng kinh doanh của công ty."
      ),
      writingTwoSentences(
        "hsk8-l6-q5",
        "综上所述",
        "zōngshàng suǒshù",
        "tổng hợp những điều nêu trên, tóm lại",
        "Đặt 2 câu có chứa 综上所述: Câu 1 tổng kết một quyết định cá nhân/học tập, Câu 2 chốt kiến nghị trong báo cáo phân tích thị trường."
      ),
    ],
  },
];
