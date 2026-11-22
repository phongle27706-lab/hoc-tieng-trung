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

export const STAGES_3_TO_5_SESSIONS: StudySession[] = [
  // ==========================================
  // STAGE 3 — CHẶNG 3 (HSK3: Đời sống đô thị, Công sở, WeChat/Alipay, Câu chữ 把 & 被)
  // ==========================================
  {
    id: "hsk3-s1-listening-office-payment",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    title: "Nghe hội thoại thanh toán WeChat/Alipay, tàu cao tốc & họp nhóm",
    titleZh: "移动支付、高铁出行与办公室会议听力",
    titlePinyin: "Yídòng zhīfù, gāotiě chūxíng yǔ bàngōngshì huìyì tīnglì",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "listening-tieng-trung-518",
    recommendedChannelName: "Tiếng Trung 518",
    youtubeUrl: "https://www.youtube.com/watch?v=XvXQIMvupPs",
    defaultSearchQuery: "Tiếng Trung 518 học tiếng Trung giao tiếp thực tế đời sống",
    grammarNotesVi: [
      "Câu chữ 把 (bǎ): Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác (dùng khi xử lý, di chuyển hoặc làm thay đổi trạng thái của tân ngữ xác định).",
      "Câu bị động 被 (bèi): Chủ ngữ (bị tác động) + 被 (+ Tác nhân) + Động từ + Thành phần khác.",
      "Phân biệt 刚才 (gāngcái - danh từ chỉ thời gian 'vừa nãy') và 刚 (gāng - phó từ 'vừa mới' đứng ngay trước động từ).",
    ],
    exercises: [
      listeningDialogue(
        "hsk3-s1-q1",
        "女：老板，一共多少钱？我可以刷信用卡吗？男：一共八十五块，抱歉我们店只能用微信或者支付宝扫码。",
        "Nǚ: Lǎobǎn, yígòng duōshao qián? Wǒ kěyǐ shuā xìnyòngkǎ ma? Nán: Yígòng bāshíwǔ kuài, bàoqiàn wǒmen diàn zhǐ néng yòng Wēixìn huòzhě Zhīfùbǎo sǎomǎ.",
        "Cửa hàng này chấp nhận phương thức thanh toán nào?",
        [
          "Quét mã WeChat hoặc Alipay",
          "Quẹt thẻ tín dụng quốc tế",
          "Chỉ nhận tiền mặt",
          "Chuyển khoản ngân hàng sau 3 ngày",
        ],
        "Quét mã WeChat hoặc Alipay",
        "Chủ quán nói: 只能用微信或者支付宝扫码 (chỉ có thể dùng WeChat hoặc Alipay quét mã)."
      ),
      listeningFill(
        "hsk3-s1-q2",
        "请把报价单发到我的电子邮件。",
        "请___报价单发到我的电子邮件。",
        "Qǐng bǎ bàojiàdān fādào wǒ de diànzǐ yóujiàn.",
        "Nghe và điền giới từ câu xử lý (1 chữ Hán) vào chỗ trống:",
        "把",
        "Câu chữ 把: 请把报价单发到我的电子邮件 (Vui lòng gửi bảng báo giá vào email của tôi)."
      ),
      listeningMcq(
        "hsk3-s1-q3",
        "从北京坐高铁到上海只要四个半小时，非常方便。",
        "Cóng Běijīng zuò gāotiě dào Shànghǎi zhǐyào sì gè bàn xiǎoshí, fēicháng fāngbiàn.",
        "Đi tàu cao tốc từ Bắc Kinh đến Thượng Hải mất bao lâu?",
        ["4 tiếng rưỡi", "4 tiếng", "2 tiếng rưỡi", "6 tiếng"],
        "4 tiếng rưỡi",
        "四个半小时 (sì gè bàn xiǎoshí) = 4 tiếng rưỡi."
      ),
      listeningDialogue(
        "hsk3-s1-q4",
        "男：李经理，客户对我们的新样品满意吗？女：他们非常满意，决定下周签正式合同。",
        "Nán: Lǐ jīnglǐ, kèhù duì wǒmen de xīn yàngpǐn mǎnyì ma? Nǚ: Tāmen fēicháng mǎnyì, juédìng xiàzhōu qiān zhèngshì hétóng.",
        "Khách hàng đã quyết định làm gì vào tuần sau?",
        [
          "Ký hợp đồng chính thức",
          "Yêu cầu làm lại hàng mẫu",
          "Hủy đơn đặt hàng",
          "Đổi nhà cung cấp khác",
        ],
        "Ký hợp đồng chính thức",
        "Giám đốc Lý nói: 决定下周签正式合同 (quyết định tuần sau ký hợp đồng chính thức)."
      ),
      listeningFill(
        "hsk3-s1-q5",
        "我的护照放在行李箱里了。",
        "我的___放在行李箱里了。",
        "Wǒ de hùzhào fàng zài xínglixiāng lǐ le.",
        "Nghe và điền danh từ 2 chữ Hán ('hộ chiếu') vào chỗ trống:",
        "护照",
        "护照 (hùzhào) là hộ chiếu."
      ),
    ],
  },
  {
    id: "hsk3-s2-speaking-ba-directional",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "basic",
    title: "Luyện nói câu chữ 把, bổ ngữ xu hướng & giao tiếp văn phòng",
    titleZh: "“把”字句、趋向补语与职场口语",
    titlePinyin: "“Bǎ” zìjù, qūxiàng bǔyǔ yǔ zhíchǎng kǒuyǔ",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-dapan",
    recommendedChannelName: "Tiếng Trung Dapan",
    youtubeUrl: "https://www.youtube.com/watch?v=5WO8mEGwdrw",
    defaultSearchQuery: "Tiếng Trung Dapan quy tắc phát âm giao tiếp",
    grammarNotesVi: [
      "Bổ ngữ xu hướng kép: Động từ + 上来 / 下去 / 进来 / 出去 / 回来 / 过去. Nếu tân ngữ là địa điểm thì phải đặt TRƯỚC 来/去 (走进办公室来).",
      "Trong câu chữ 把, phó từ phủ định (没, 不, 别) và động từ năng nguyện (要, 能, 可以) luôn đứng TRƯỚC chữ 把.",
    ],
    exercises: [
      speakingShadowing(
        "hsk3-s2-q1",
        "请把那份采购合同发到我的微信。",
        "Qǐng bǎ nà fèn cǎigòu hétóng fādào wǒ de Wēixìn.",
        "Thu âm câu yêu cầu gửi hợp đồng thu mua qua WeChat bằng cấu trúc 把:",
        ["Biến điệu thanh 3 (Qǐng bǎ, cǎigòu)", "Âm bật hơi c (cǎi)"],
        "Đọc liền mạch cụm 请把 (qíng bǎ) và rõ bổ ngữ kết quả 发到."
      ),
      speakingShadowing(
        "hsk3-s2-q2",
        "请您放心，我们一定按时完成任务。",
        "Qǐng nín fàngxīn, wǒmen yídìng ànshí wánchéng rènwu.",
        "Thu âm câu cam kết hoàn thành nhiệm vụ đúng hạn với khách hàng/sếp:",
        ["Thanh 4 dứt khoát (fàng, dìng, àn, rèn)", "Âm cuốn lưỡi sh, ch, r"],
        "Giọng điệu tự tin, dứt khoát ở 一定按时 (nhất định đúng giờ)."
      ),
      speakingShadowing(
        "hsk3-s2-q3",
        "在中国用手机扫码支付非常方便。",
        "Zài Zhōngguó yòng shǒujī sǎomǎ zhīfù fēicháng fāngbiàn.",
        "Thu âm câu nhận xét về sự tiện lợi của thanh toán quét mã tại Trung Quốc:",
        ["Biến điệu 扫码 (sǎomǎ → sáomǎ)", "Âm cuốn lưỡi zh (Zhōng, zhī)"],
        "扫码 (sǎomǎ) có hai thanh 3 đi liền nhau, chữ 扫 đọc thành thanh 2."
      ),
      speakingShadowing(
        "hsk3-s2-q4",
        "下个月我们去广州参加国际贸易展会。",
        "Xià gè yuè wǒmen qù Guǎngzhōu cānjiā guójì màoyì zhǎnhuì.",
        "Thu âm câu thông báo kế hoạch đi Quảng Châu tham dự hội chợ thương mại:",
        ["Âm đầu lưỡi c (cān)", "Âm cuốn lưỡi zh (zhōu, zhǎn)"],
        "Phân biệt rõ âm thẳng lưỡi 参 (cān) và âm cuốn lưỡi 展 (zhǎn)."
      ),
    ],
  },
  {
    id: "hsk3-s3-reading-email-culture",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    title: "Đọc hiểu Email công việc, thông báo lễ hội & lịch trình công tác",
    titleZh: "商务电子邮件与节日通知阅读",
    titlePinyin: "Shāngwù diànzǐ yóujiàn yǔ jiérì tōngzhī yuèdú",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-thanhmai-hsk",
    recommendedChannelName: "Thanhmai HSK",
    youtubeUrl: "https://www.youtube.com/watch?v=ugPh2lOVd8Q",
    defaultSearchQuery: "Thanhmai HSK phản xạ từ vựng HSK3 3.0",
    grammarNotesVi: [
      "Phân biệt 3 trợ từ kết cấu đồng âm 'de': 的 (Định ngữ + 的 + Danh từ), 地 (Trạng ngữ + 地 + Động từ), 得 (Động từ + 得 + Bổ ngữ trạng thái).",
      "Cấu trúc 一边...一边... (Vừa... vừa...): Biểu thị hai hành động diễn ra song song cùng lúc.",
      "Cấu trúc 越来越 + Tính từ (Ngày càng...) và 越 A 越 B (Càng A càng B).",
    ],
    exercises: [
      readingComp(
        "hsk3-s3-q1",
        "【公司春节放假通知】各位同事：今年春节公司从二月八日到二月十四日放假，一共七天。二月十五日（星期四）正常上班。请大家离开办公室前把电脑和窗户关好。",
        "[Gōngsī Chūnjié fàngjià tōngzhī] Gèwèi tóngshì: Jīnnián Chūnjié gōngsī cóng èryuè bā rì dào èryuè shísì rì fàngjià, yígòng qī tiān. Èryuè shíwǔ rì (xīngqīsì) zhèngcháng shàngbān. Qǐng dàjiā líkāi bàngōngshì qián bǎ diànnǎo hé chuānghu guānhǎo.",
        "[Thông báo nghỉ Tết Nguyên đán của công ty] Các đồng nghiệp thân mến: Tết Nguyên đán năm nay công ty nghỉ từ ngày 8/2 đến 14/2, tổng cộng 7 ngày. Ngày 15/2 (thứ Năm) đi làm bình thường. Đề nghị mọi người trước khi rời văn phòng hãy tắt máy tính và đóng kỹ cửa sổ.",
        "Nhân viên công ty sẽ bắt đầu đi làm lại bình thường vào ngày nào?",
        ["Ngày 15 tháng 2", "Ngày 8 tháng 2", "Ngày 14 tháng 2", "Ngày 16 tháng 2"],
        "Ngày 15 tháng 2",
        "Thông báo ghi rõ: 二月十五日（星期四）正常上班。"
      ),
      readingComp(
        "hsk3-s3-q2",
        "李经理工作非常认真。每次和越南客户开视频会议前，他都会仔细检查演示文稿，还会提前十分钟进入线上会议室准备。",
        "Lǐ jīnglǐ gōngzuò fēicháng rènzhēn. Měi cì hé Yuènán kèhù kāi shìpín huìyì qián, tā dōu huì zǐxì jiǎnchá yǎnshì wéngǎo, hái huì tíqián shí fēnzhōng jìnrù xiànshàng huìyìshì zhǔnbèi.",
        "Giám đốc Lý làm việc vô cùng nghiêm túc. Mỗi lần trước khi họp video với khách hàng Việt Nam, anh đều kiểm tra kỹ slide thuyết trình, còn vào phòng họp trực tuyến trước 10 phút để chuẩn bị.",
        "Giám đốc Lý thường vào phòng họp trực tuyến trước bao lâu?",
        ["Trước 10 phút", "Trước 30 phút", "Đúng giờ bắt đầu", "Trước 5 phút"],
        "Trước 10 phút",
        "Trong bài viết: 还会提前十分钟进入线上会议室准备 (vào phòng họp online trước 10 phút)."
      ),
      readingComp(
        "hsk3-s3-q3",
        "中秋节是中越两国共同的传统节日。这一天，人们喜欢买月饼作为礼物送给亲戚、朋友和商业合作伙伴，表达关心与祝福。",
        "Zhōngqiūjié shì Zhōng-Yuè liǎng guó gòngtóng de chuántǒng jiérì. Zhè yì tiān, rénmen xǐhuan mǎi yuèbǐng zuòwéi lǐwù sònggěi qīnqi, péngyou hé shāngyè hézuò huǒbàn, biǎodá guānxīn yǔ zhùfú.",
        "Tết Trung thu là lễ hội truyền thống chung của hai nước Trung - Việt. Vào ngày này, mọi người thích mua bánh Trung thu làm quà tặng người thân, bạn bè và đối tác kinh doanh để bày tỏ sự quan tâm và lời chúc phúc.",
        "Vào dịp Tết Trung thu, mọi người thường tặng món quà gì cho đối tác và người thân?",
        ["Bánh Trung thu (月饼)", "Bánh chưng", "Hoa hồng", "Trà sữa"],
        "Bánh Trung thu (月饼)",
        "人们喜欢买月饼作为礼物送给亲戚、朋友和商业合作伙伴。"
      ),
      readingComp(
        "hsk3-s3-q4",
        "越来越多年轻人喜欢用思维导图来记汉语单词。把同一个主题的名词、动词和形容词放在一起复习，不仅记生词更快，而且不容易忘记。",
        "Yuèláiyuè duō niánqīngrén xǐhuan yòng sīwéi dǎotú lái jì Hànyǔ dāncí. Bǎ tóng yí gè zhǔtí de míngcí, dòngcí hé xíngróngcí fàng zài yìqǐ fùxí, bùjǐn jì shēngcí gèng kuài, érqiě bù róngyì wàngjì.",
        "Ngày càng nhiều người trẻ thích dùng sơ đồ tư duy (Mind Map) để nhớ từ vựng tiếng Trung. Gom danh từ, động từ và tính từ cùng một chủ đề lại để ôn tập không những nhớ từ mới nhanh hơn mà còn khó quên.",
        "Phương pháp học từ vựng bằng sơ đồ tư duy (思维导图) mang lại lợi ích gì?",
        [
          "Nhớ từ mới nhanh hơn và khó quên hơn",
          "Không cần học viết chữ Hán nữa",
          "Chỉ dùng để luyện phát âm",
          "Giúp dịch tự động không cần từ điển",
        ],
        "Nhớ từ mới nhanh hơn và khó quên hơn",
        "不仅记生词更快，而且不容易忘记 (Không những nhớ từ mới nhanh hơn mà còn không dễ quên)."
      ),
    ],
  },
  {
    id: "hsk3-s4-writing-ba-passive",
    stageId: 3,
    hskLevel: "HSK3",
    subDifficulty: "advanced",
    title: "Viết chữ Hán HSK3, Sắp xếp câu chữ 把 / 被 & Đặt 2 câu",
    titleZh: "HSK3汉字书写、“把”字句与“被”字句造句",
    titlePinyin: "HSK3 Hànzì shūxiě, “bǎ” zìjù yǔ “bèi” zìjù zàojù",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-sofl",
    recommendedChannelName: "Trung Tâm Tiếng Trung SOFL",
    youtubeUrl: "https://www.youtube.com/watch?v=86NQeiP7Z18",
    defaultSearchQuery: "Trung Tâm Tiếng Trung SOFL ngữ pháp HSK",
    grammarNotesVi: [
      "Công thức câu chữ 把: Chủ ngữ + (Phó từ/Động từ năng nguyện) + 把 + Tân ngữ + Động từ + Bổ ngữ kết quả/xu hướng/了.",
      "Lưu ý: Động từ trong câu chữ 把 KHÔNG BAO GIỜ đứng trơ trọi một mình mà bắt buộc phải có thành phần đi kèm phía sau (như 了, 好, 完, 到...).",
    ],
    exercises: [
      writingStroke(
        "hsk3-s4-q1",
        "把",
        "bǎ",
        "Đem / Lấy (7 nét, bộ Tài gảy 扌)",
        "Chữ 把 gồm bộ Tài gảy (扌- 3 nét) bên trái và chữ Ba (巴 - 4 nét) bên phải."
      ),
      writingStroke(
        "hsk3-s4-q2",
        "心",
        "xīn",
        "Tâm / Lòng (4 nét: Chấm trái, Nằm móc, Chấm giữa, Chấm phải)",
        "Chữ 心 (Tâm - 4 nét) là bộ thủ cốt lõi trong 关心, 放心, 满意. Chú ý nét 2 là nét Nằm móc (卧钩)."
      ),
      writingOrder(
        "hsk3-s4-q3",
        "Sắp xếp câu chữ 把: 'Vui lòng gửi bảng báo giá vào email của tôi.'",
        ["我的电子邮件。", "发到", "把报价单", "请"],
        "请把报价单发到我的电子邮件。",
        "Qǐng bǎ bàojiàdān fādào wǒ de diànzǐ yóujiàn.",
        "请 + 把 + Tân ngữ (报价单) + Động từ + Bổ ngữ kết quả (发到) + Địa điểm (我的电子邮件)."
      ),
      writingOrder(
        "hsk3-s4-q4",
        "Sắp xếp câu bị động 被: 'Đề xuất của anh ấy đã được công ty tiếp nhận.'",
        ["采纳了。", "被公司", "他的提案"],
        "他的提案被公司采纳了。",
        "Tā de tí'àn bèi gōngsī cǎinà le.",
        "Chủ ngữ chịu tác động (他的提案) + 被 + Tác nhân (公司) + Động từ + 了 (采纳了)."
      ),
      writingTwoSentences(
        "hsk3-s4-q5",
        "方便",
        "fāngbiàn",
        "Thuận tiện / Tiện lợi",
        "Đặt 2 câu hoàn chỉnh với từ 方便 (Câu 1: Giao thông/thanh toán đời sống; Câu 2: Hẹn lịch họp/liên hệ công việc)."
      ),
    ],
  },

  // ==========================================
  // STAGE 4 — CHẶNG 4 (HSK4: Thương mại Taobao/1688, Công việc, Du học & Liên từ nâng cao)
  // ==========================================
  {
    id: "hsk4-s1-listening-taobao-ecommerce",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    title: "Nghe đàm phán CSKH Taobao/1688, chiết khấu sỉ & thời gian发货",
    titleZh: "淘宝1688客服询盘、批发折扣与发货听力",
    titlePinyin: "Táobǎo Yīliùbābā kèfú xúnpán, pīfā zhékòu yǔ fāhuò tīnglì",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-say-ninhao",
    recommendedChannelName: "Say Ninhao",
    youtubeUrl: "https://www.youtube.com/watch?v=KRL1sAh6hbI",
    defaultSearchQuery: "Say Ninhao HSK4 Lesson 1 Standard Course",
    grammarNotesVi: [
      "Cặp liên từ tăng tiến: 不仅...，而且... (Không những..., mà còn...).",
      "Cặp liên từ điều kiện bất biến: 无论/不管...，都... (Bất luận/Cho dù..., đều...).",
      "Thuật ngữ mua hàng Taobao/1688: 现货 (hàng có sẵn), 起订量 (MOQ), 包邮 (freeship), 发货 (xuất hàng).",
    ],
    exercises: [
      listeningDialogue(
        "hsk4-s1-q1",
        "女：老板，这款连衣裙有现货吗？我拿两百件什么价格？男：有现货！两百件按批发价每件三十五元，而且包到凭祥仓库的国内运费。",
        "Nǚ: Lǎobǎn, zhè kuǎn liányīqún yǒu xiànhuò ma? Wǒ ná liǎngbǎi jiàn shénme jiàgé? Nán: Yǒu xiànhuò! Liǎngbǎi jiàn àn pīfājià měi jiàn sānshíwǔ yuán, érqiě bāo dào Píngxiáng cāngkù de guónèi yùnfèi.",
        "Khi lấy 200 chiếc váy liền, chủ xưởng đưa ra mức giá và ưu đãi gì?",
        [
          "Giá sỉ 35 tệ/chiếc và miễn phí vận chuyển nội địa tới kho Bằng Tường",
          "Giá 50 tệ/chiếc và không miễn phí vận chuyển",
          "Hiện tại hết hàng, phải đợi sản xuất 15 ngày",
          "Phải mua từ 500 chiếc mới có giá sỉ",
        ],
        "Giá sỉ 35 tệ/chiếc và miễn phí vận chuyển nội địa tới kho Bằng Tường",
        "Chủ xưởng nói: 两百件按批发价每件三十五元，而且包到凭祥仓库的国内运费。"
      ),
      listeningFill(
        "hsk4-s1-q2",
        "如果订购量大，价格还可以优惠。",
        "如果订购量大，___还可以优惠。",
        "Rúguǒ dìnggòuliàng dà, jiàgé hái kěyǐ yōuhuì.",
        "Nghe và điền danh từ 2 chữ Hán ('giá cả / mức giá') vào chỗ trống:",
        "价格",
        "价格 (jiàgé) là giá cả."
      ),
      listeningMcq(
        "hsk4-s1-q3",
        "这款蓝牙耳机不仅外观时尚，而且音质非常好，在抖音上销量第一。",
        "Zhè kuǎn lányá ěrjī bùjǐn wàiguān shíshàng, érqiě yīnzhì fēicháng hǎo, zài Dǒuyīn shàng xiāoliàng dì-yī.",
        "Mẫu tai nghe Bluetooth này có ưu điểm gì nổi bật?",
        [
          "Vẻ ngoài thời trang, chất âm rất tốt và doanh số đứng đầu trên Douyin",
          "Giá rẻ nhất thị trường nhưng chất âm bình thường",
          "Chỉ bán tại cửa hàng truyền thống",
          "Chưa được bán trên mạng",
        ],
        "Vẻ ngoài thời trang, chất âm rất tốt và doanh số đứng đầu trên Douyin",
        "不仅外观时尚，而且音质非常好，在抖音上销量第一。"
      ),
      listeningDialogue(
        "hsk4-s1-q4",
        "男：客服你好，我收到的货有两件尺码发错了。女：非常抱歉！您可以申请退货退款，运费由我们店铺承担。",
        "Nán: Kèfú nǐ hǎo, wǒ shōudào de huò yǒu liǎng jiàn chǐmǎ fācuò le. Nǚ: Fēicháng bàoqiàn! Nín kěyǐ shēnqǐng tuìhuò tuìkuǎn, yùnfèi yóu wǒmen diànpù chéngdān.",
        "Nhân viên CSKH giải quyết vấn đề gửi nhầm kích cỡ như thế nào?",
        [
          "Cho phép trả hàng hoàn tiền và shop chịu cước phí vận chuyển",
          "Từ chối đổi trả vì đã quá 7 ngày",
          "Yêu cầu khách hàng tự trả phí ship chiều về",
          "Tặng phiếu giảm giá 5 tệ cho lần sau",
        ],
        "Cho phép trả hàng hoàn tiền và shop chịu cước phí vận chuyển",
        "CSKH phản hồi: 您可以申请退货退款，运费由我们店铺承担。"
      ),
      listeningFill(
        "hsk4-s1-q5",
        "双方已经在购销合同上签字了。",
        "双方已经在购销___上签字了。",
        "Shuāngfāng yǐjīng zài gòuxiāo hétóng shàng qiānzì le.",
        "Nghe và điền danh từ 2 chữ Hán ('hợp đồng') vào chỗ trống:",
        "合同",
        "购销合同 (gòuxiāo hétóng): hợp đồng mua bán."
      ),
    ],
  },
  {
    id: "hsk4-s2-speaking-business-negotiation",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "basic",
    title: "Luyện nói hỏi hàng xưởng 1688, thương lượng giá & hẹn lịch thăm xưởng",
    titleZh: "1688源头工厂询价与看厂预约口语",
    titlePinyin: "Yīliùbābā yuántóu gōngchǎng xúnjià yǔ kànchǎng yùyuē kǒuyǔ",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-khoai-tay",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=AJ7RyVUJ00U",
    defaultSearchQuery: "Khoai Tây yêu tiếng Trung bí mật giao tiếp tiếng Trung",
    grammarNotesVi: [
      "Khi đàm phán thương mại với xưởng Trung Quốc, dùng cấu trúc 如果...，就/还... để đưa điều kiện số lượng đổi lấy chiết khấu.",
      "Cấu trúc 不仅...而且... giúp nhấn mạnh lợi ích đôi bên khi đặt hàng lâu dài.",
    ],
    exercises: [
      speakingShadowing(
        "hsk4-s2-q1",
        "老板，今天下单什么时候能安排发货？",
        "Lǎobǎn, jīntiān xiàdān shénme shíhou néng ānpái fāhuò?",
        "Thu âm câu hỏi chủ shop 1688 về thời gian xuất hàng:",
        ["Biến điệu 老板 (Lǎobǎn)", "Thanh 1 rõ ràng (jīntiān, xiā, ānpái, fā)"],
        "Ngữ điệu lịch sự, rõ ràng ở cụm 安排发货 (sắp xếp gửi hàng)."
      ),
      speakingShadowing(
        "hsk4-s2-q2",
        "如果质量稳定，我们会建立长期合作关系。",
        "Rúguǒ zhìliàng wěndìng, wǒmen huì jiànlì chángqī hézuò guānxi.",
        "Thu âm câu cam kết hợp tác lâu dài nếu chất lượng ổn định:",
        ["Âm cuốn lưỡi zh, ch (zhì, cháng)", "Thanh nhẹ 关系 (guānxi)"],
        "Nhấn giọng ở 质量稳定 (chất lượng ổn định) và 长期合作 (hợp tác dài hạn)."
      ),
      speakingShadowing(
        "hsk4-s2-q3",
        "我负责公司的跨境采购和供应链管理。",
        "Wǒ fùzé gōngsī de kuàjìng cǎigòu hé gōngyìngliàn guǎnlǐ.",
        "Thu âm câu giới thiệu vị trí công việc thu mua và chuỗi cung ứng:",
        ["Biến điệu 管理 (guǎnlǐ → guánlǐ)", "Âm bật hơi k, c (kuà, cǎi)"],
        "Đọc rõ cụm chuyên ngành 跨境采购 (thu mua xuyên biên giới) và 供应链管理."
      ),
      speakingShadowing(
        "hsk4-s2-q4",
        "我已经安排好下周去深圳看厂的行程。",
        "Wǒ yǐjīng ānpái hǎo xiàzhōu qù Shēnzhèn kàn chǎng de xíngchéng.",
        "Thu âm câu thông báo lịch trình đi Thâm Quyến thăm nhà máy:",
        ["Âm cuốn lưỡi Shēnzhèn, chǎng, chéng", "Bổ ngữ kết quả 安排好"],
        "Phát âm chuẩn hai âm cuốn lưỡi liên tiếp trong 深圳 (Shēnzhèn)."
      ),
    ],
  },
  {
    id: "hsk4-s3-reading-scholarship-rental",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    title: "Đọc hiểu thông báo Học bổng Du học & Hợp đồng thuê căn hộ",
    titleZh: "留学奖学金申请与租房合同阅读",
    titlePinyin: "Liúxué jiǎngxuéjīn shēnqǐng yǔ zūfáng hétóng yuèdú",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-an-kha-hy",
    recommendedChannelName: "An Khả Hy",
    youtubeUrl: "https://www.youtube.com/watch?v=vqxczn9pBBM",
    defaultSearchQuery: "An Khả Hy luyện đọc tiếng Trung HSK3 HSK4",
    grammarNotesVi: [
      "Cấu trúc 只要...，就... (Chỉ cần..., thì...): Đưa ra điều kiện đủ.",
      "Cấu trúc 只有...，才... (Chỉ có..., mới...): Đưa ra điều kiện cần duy nhất.",
      "Thuật ngữ thuê nhà tại Trung Quốc: 押一付三 (Đặt cọc 1 tháng, thanh toán tiền thuê 3 tháng một lần).",
    ],
    exercises: [
      readingComp(
        "hsk4-s3-q1",
        "【房屋租赁协议摘要】本公寓位于上海市中心，靠近二号线地铁站，交通极其便利。月租金为四千五百元人民币，采取“押一付三”方式支付。合同期满后，如房屋设施无损坏，房东将全额退还押金。",
        "[Fángwū zūlìn xiéyì zhāiyào] Běn gōngyù wèiyú Shànghǎi shìzhōngxīn, kàojìn èr hào xiàn dìtiězhàn, jiāotōng jíqí biànlì. Yuè zūjīn wéi sìqiān wǔbǎi yuán Rénmínbì, cǎiqǔ “yā yī fù sān” fāngshì zhīfù. Hétóng qīmǎn hòu, rú fángwū shèshī wú sǔnhuài, fángdōng jiāng quán'é tuìhuán yājīn.",
        "[Tóm tắt thỏa thuận thuê nhà] Căn hộ này nằm ở trung tâm Thượng Hải, gần ga tàu điện ngầm tuyến số 2, giao thông cực kỳ thuận lợi. Tiền thuê mỗi tháng là 4.500 Nhân dân tệ, thanh toán theo hình thức 'cọc 1 đóng 3'. Sau khi hết hạn hợp đồng, nếu thiết bị trong nhà không hư hỏng, chủ nhà sẽ hoàn trả toàn bộ tiền cọc.",
        "Theo hợp đồng thuê nhà, khi nào người thuê được hoàn trả toàn bộ tiền đặt cọc?",
        [
          "Khi hợp đồng hết hạn và thiết bị trong nhà không bị hư hỏng",
          "Ngay sau khi ở được 1 tháng đầu tiên",
          "Chủ nhà không bao giờ hoàn trả tiền cọc",
          "Khi người thuê tự ý chấm dứt hợp đồng sớm",
        ],
        "Khi hợp đồng hết hạn và thiết bị trong nhà không bị hư hỏng",
        "合同期满后，如房屋设施无损坏，房东将全额退还押金。"
      ),
      readingComp(
        "hsk4-s3-q2",
        "申请中国大学硕士留学奖学金的外国学生，不仅需要提供本科毕业证书和成绩单，而且必须通过HSK五级或六级考试，并提交两封教授推荐信。",
        "Shēnqǐng Zhōngguó dàxué shuòshì liúxué jiǎngxuéjīn de wàiguó xuésheng, bùjǐn xūyào tígōng běnkē bìyè zhèngshū hé chéngjìdān, érqiě bìxū tōngguò HSK wǔ jí huò liù jí kǎoshì, bìng tíjiāo liǎng fēng jiàoshòu tuījiànxìn.",
        "Sinh viên nước ngoài xin học bổng du học thạc sĩ tại các trường đại học Trung Quốc không những cần cung cấp bằng tốt nghiệp đại học và bảng điểm, mà còn bắt buộc phải đỗ kỳ thi HSK cấp 5 hoặc cấp 6, đồng thời nộp hai bức thư giới thiệu của giáo sư.",
        "Ứng viên xin học bổng thạc sĩ cần nộp mấy bức thư giới thiệu của giáo sư?",
        ["2 bức thư giới thiệu", "1 bức thư giới thiệu", "3 bức thư giới thiệu", "Không cần thư giới thiệu"],
        "2 bức thư giới thiệu",
        "Trong bài nêu rõ: 并提交两封教授推荐信 (nộp 2 bức thư giới thiệu của giáo sư)."
      ),
      readingComp(
        "hsk4-s3-q3",
        "宝玲大学主修国际经济与贸易专业。为了提高商务口语能力，她每天坚持跟读半小时新闻，还经常用中文和广州供应商沟通订单细节。",
        "Bǎolíng dàxué zhǔxiū Guójì Jīngjì yǔ Màoyì zhuānyè. Wèile tígāo Shāngwù kǒuyǔ nénglì, tā měitiān jiānchí gēndú bàn xiǎoshí xīnwén, hái jīngcháng yòng Zhōngwén hé Guǎngzhōu gōngyìngshāng gōutōng dìngdān xìjié.",
        "Bảo Linh học chuyên ngành Kinh tế và Thương mại Quốc tế ở đại học. Để nâng cao năng lực khẩu ngữ thương mại, cô kiên trì đọc nhại bản tin nửa tiếng mỗi ngày, còn thường xuyên trao đổi chi tiết đơn hàng bằng tiếng Trung với nhà cung cấp Quảng Châu.",
        "Chuyên ngành đại học của Bảo Linh là gì?",
        [
          "Kinh tế và Thương mại Quốc tế",
          "Công nghệ thông tin",
          "Y học cổ truyền",
          "Kiến trúc xây dựng",
        ],
        "Kinh tế và Thương mại Quốc tế",
        "宝玲大学主修国际经济与贸易专业。"
      ),
      readingComp(
        "hsk4-s3-q4",
        "在国际商务合作中，准时和守信是最基本的职业素养。无论遇到什么困难，如果不能按时交货，都应该提前通知客户并商量解决办法。",
        "Zài guójì shāngwù hézuò zhōng, zhǔnshí hé shǒuxìn shì zuì jīběn de zhíyè sùyǎng. Wúlùn yùdào shénme kùnnan, rúguǒ bù néng ànshí jiāohuò, dōu yīnggāi tíqián tōngzhī kèhù bìng shāngliang jiějué bànfǎ.",
        "Trong hợp tác thương mại quốc tế, đúng giờ và giữ chữ tín là tố chất nghề nghiệp cơ bản nhất. Bất luận gặp khó khăn gì, nếu không thể giao hàng đúng hạn đều nên thông báo trước cho khách hàng và bàn bạc cách giải quyết.",
        "Theo đoạn văn, khi không thể giao hàng đúng hạn thì doanh nghiệp nên làm gì?",
        [
          "Thông báo trước cho khách hàng và cùng bàn bạc cách giải quyết",
          "Im lặng đợi đến khi nào xong hàng mới báo",
          "Đổ lỗi cho công ty vận chuyển",
          "Tự ý hủy đơn hàng",
        ],
        "Thông báo trước cho khách hàng và cùng bàn bạc cách giải quyết",
        "都应该提前通知客户并商量解决办法。"
      ),
    ],
  },
  {
    id: "hsk4-s4-writing-complex-conjunctions",
    stageId: 4,
    hskLevel: "HSK4",
    subDifficulty: "advanced",
    title: "Viết chữ Hán thương mại HSK4, Câu phức 不仅...而且 & Đặt 2 câu",
    titleZh: "HSK4商务汉字书写、递进复句与实战造句",
    titlePinyin: "HSK4 shāngwù Hànzì shūxiě, dìjìn fùjù yǔ shízhàn zàojù",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "writing-duong-chau",
    recommendedChannelName: "Tiếng Trung Dương Châu",
    youtubeUrl: "https://www.youtube.com/watch?v=hxgIYlTwTrs",
    defaultSearchQuery: "Tiếng Trung Dương Châu giáo trình Hán ngữ 3",
    grammarNotesVi: [
      "Khi hai vế của 不仅...而且... có CÙNG chủ ngữ, chủ ngữ phải đặt TRƯỚC 不仅: 他不仅会说汉语，而且会写书法。",
      "Khi hai vế có KHÁC chủ ngữ, mỗi chủ ngữ đặt SAU 不仅 và 而且.",
    ],
    exercises: [
      writingStroke(
        "hsk4-s4-q1",
        "合",
        "hé",
        "Hợp tác / Hợp đồng (6 nét, bộ Nhân 人 + Nhất 一 + Khẩu 口)",
        "Chữ 合 (6 nét) viết theo thứ tự Trên trước Dưới sau: Bộ Nhân (人: Phẩy, Mác) ở trên, nét Ngang (一) ở giữa, bộ Khẩu (口) ở dưới."
      ),
      writingStroke(
        "hsk4-s4-q2",
        "同",
        "tóng",
        "Cùng / Hợp đồng (6 nét, bộ Quynh 冂)",
        "Chữ 同 (6 nét) viết khung ngoài (Sổ, Ngang gập móc) trước, sau đó viết nét Ngang và bộ Khẩu (口) bên trong."
      ),
      writingOrder(
        "hsk4-s4-q3",
        "Sắp xếp câu phức 不仅...而且: 'Mẫu sản phẩm này không những chất lượng tốt mà giá cả còn rất rẻ.'",
        ["而且价格很便宜。", "不仅质量好，", "这款产品"],
        "这款产品不仅质量好，而且价格很便宜。",
        "Zhè kuǎn chǎnpǐn bùjǐn zhìliàng hǎo, érqiě jiàgé hěn piányi.",
        "Chủ ngữ (这款产品) + 不仅质量好 + 而且价格很便宜。"
      ),
      writingOrder(
        "hsk4-s4-q4",
        "Sắp xếp câu điều kiện 无论...都: 'Bất luận gặp khó khăn gì, chúng ta đều không được bỏ cuộc.'",
        ["我们都不能放弃。", "什么困难，", "无论遇到"],
        "无论遇到什么困难，我们都不能放弃。",
        "Wúlùn yùdào shénme kùnnan, wǒmen dōu bù néng fàngqì.",
        "无论 + Động từ + Từ nghi vấn (遇到什么困难)，Chủ ngữ + 都 + Vị ngữ (我们都不能放弃)."
      ),
      writingTwoSentences(
        "hsk4-s4-q5",
        "合作",
        "hézuò",
        "Hợp tác",
        "Đặt 2 câu hoàn chỉnh với từ 合作 (Câu 1: Hợp tác cùng bạn bè/đồng nghiệp; Câu 2: Hợp tác thương mại với đối tác/công ty)."
      ),
    ],
  },

  // ==========================================
  // STAGE 5 — CHẶNG 5 (HSK5: Xuất nhập khẩu, Hải quan, Logistics, AI & Livestream)
  // ==========================================
  {
    id: "hsk5-s1-listening-customs-logistics",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    title: "Nghe nghiệp vụ Xuất nhập khẩu, Thông quan hải quan & Báo giá CIF/FOB",
    titleZh: "进出口贸易、海关清关与国际物流听力",
    titlePinyin: "Jìn-chūkǒu màoyì, hǎiguān qīngguān yǔ guójì wùliú tīnglì",
    skillFocus: "listening",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-wenjing-zhiyuan",
    recommendedChannelName: "Wenjing-Zhiyuan",
    youtubeUrl: "https://www.youtube.com/watch?v=40tMAMC5MI8",
    defaultSearchQuery: "Wenjing-Zhiyuan HSK5 Standard Course Lesson 2",
    grammarNotesVi: [
      "Thuật ngữ ngoại thương cốt lõi: 报关 (khai báo hải quan), 清关 (thông quan), 集装箱 (container), 提单 (vận đơn B/L), 增值税发票 (hóa đơn GTGT).",
      "Giới từ 针对 (zhēnduì - nhắm vào / đối với) và 根据 (gēnjù - căn cứ theo) thường mở đầu mệnh đề trong văn bản thương mại.",
    ],
    exercises: [
      listeningDialogue(
        "hsk5-s1-q1",
        "男：王经理，发往海防港的那两个四十尺集装箱清关了吗？女：昨天下午已经在口岸顺利清关，预计明天上午送到北宁工厂仓库。",
        "Nán: Wáng jīnglǐ, fāwǎng Hǎifánggǎng de nà liǎng gè sìshí chǐ jízhuāngxiāng qīngguān le ma? Nǚ: Zuótiān xiàwǔ yǐjīng zài kǒu'àn shùnlì qīngguān, yùjì míngtiān shàngwǔ sòngdào Běiníng gōngchǎng cāngkù.",
        "Hai container 40 feet gửi đi cảng Hải Phòng hiện đang ở trạng thái nào?",
        [
          "Đã thông quan thuận lợi chiều qua và dự kiến sáng mai giao tới kho nhà máy Bắc Ninh",
          "Đang chờ khai báo hải quan tại cảng Thâm Quyến",
          "Bị kẹt tại cửa khẩu do thiếu hóa đơn",
          "Mới bắt đầu đóng hàng lên tàu",
        ],
        "Đã thông quan thuận lợi chiều qua và dự kiến sáng mai giao tới kho nhà máy Bắc Ninh",
        "Giám đốc Vương báo: 昨天下午已经在口岸顺利清关，预计明天上午送到北宁工厂仓库。"
      ),
      listeningFill(
        "hsk5-s1-q2",
        "所有报关单据必须真实准确。",
        "所有___单据必须真实准确。",
        "Suǒyǒu bàoguān dānjù bìxū zhēnshí zhǔnquè.",
        "Nghe và điền thuật ngữ 2 chữ Hán ('khai báo hải quan') vào chỗ trống:",
        "报关",
        "报关单据 (bàoguān dānjù): chứng từ khai báo hải quan."
      ),
      listeningMcq(
        "hsk5-s1-q3",
        "定金已经通过银行电汇转账成功，请贵公司收到后立即安排生产。",
        "Dìngjīn yǐjīng tōngguò yínháng diànhuì zhuǎnzhàng chénggōng, qǐng guì gōngsī shōudào hòu lìjí ānpái shēngchǎn.",
        "Bên mua yêu cầu quý công ty làm gì ngay sau khi nhận được tiền đặt cọc?",
        [
          "Lập tức sắp xếp sản xuất",
          "Hoàn trả lại tiền đặt cọc",
          "Gửi lại bảng báo giá mới",
          "Tạm dừng đơn hàng",
        ],
        "Lập tức sắp xếp sản xuất",
        "请贵公司收到后立即安排生产 (Đề nghị quý công ty sau khi nhận được lập tức sắp xếp sản xuất)."
      ),
      listeningDialogue(
        "hsk5-s1-q4",
        "女：陈总，这批电子配件走空运还是海运？男：首批五十件样品走特快空运，后面的大货走海运整柜，这样能节省百分之四十的运费。",
        "Nǚ: Chén zǒng, zhè pī diànzǐ pèijiàn zǒu kōngyùn háishi hǎiyùn? Nán: Shǒupī wǔshí jiàn yàngpǐn zǒu tèkuài kōngyùn, hòumiàn de dàhuò zǒu hǎiyùn zhěngguì, zhèyàng néng jiéshěng bǎifēnzhī sìshí de yùnfèi.",
        "Phương án vận chuyển nào được Giám đốc Trần lựa chọn để tiết kiệm 40% cước phí?",
        [
          "50 kiện hàng mẫu đầu đi đường hàng không hỏa tốc, hàng đại trà phía sau đi đường biển nguyên container",
          "Toàn bộ lô hàng đi đường hàng không",
          "Toàn bộ lô hàng đi đường bộ tiểu ngạch",
          "Hàng mẫu đi đường biển, hàng lớn đi máy bay",
        ],
        "50 kiện hàng mẫu đầu đi đường hàng không hỏa tốc, hàng đại trà phía sau đi đường biển nguyên container",
        "首批五十件样品走特快空运，后面的大货走海运整柜。"
      ),
      listeningFill(
        "hsk5-s1-q5",
        "经过三轮商务谈判，双方达成了共识。",
        "经过三轮商务___，双方达成了共识。",
        "Jīngguò sān lún shāngwù tánpàn, shuāngfāng dáchéng le gòngshí.",
        "Nghe và điền từ 2 chữ Hán ('đàm phán') vào chỗ trống:",
        "谈判",
        "商务谈判 (shāngwù tánpàn): đàm phán thương mại."
      ),
    ],
  },
  {
    id: "hsk5-s2-speaking-livestream-tech",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "basic",
    title: "Luyện nói thuyết trình Thương mại điện tử, Livestream & Ứng dụng AI",
    titleZh: "直播带货、人工智能与外贸谈判口语",
    titlePinyin: "Zhíbō dàihuò, réngōng zhìnéng yǔ wàimào tánpàn kǒuyǔ",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-le-gia-huynh-de",
    recommendedChannelName: "Lê Gia Huynh Đệ",
    youtubeUrl: "https://www.youtube.com/watch?v=Jgf7IzmKuho",
    defaultSearchQuery: "Lê Gia Huynh Đệ mỗi ngày một câu tiếng Trung",
    grammarNotesVi: [
      "Sử dụng động từ 促进 (thúc đẩy), 提升 (nâng cao), 达成共识 (đạt được đồng thuận) giúp câu nói chuyên nghiệp chuẩn HSK5.",
      "Chú ý ngắt nhịp theo cụm danh từ dài (ví dụ: 跨境物流时效 / 直接影响 / 客户体验).",
    ],
    exercises: [
      speakingShadowing(
        "hsk5-s2-q1",
        "请提供包含运费的CIF海防港报价单。",
        "Qǐng tígōng bāohán yùnfèi de CIF Hǎifánggǎng bàojiàdān.",
        "Thu âm câu yêu cầu nhà cung cấp gửi báo giá CIF cảng Hải Phòng:",
        ["Biến điệu 海防港 (Hǎifánggǎng)", "Thanh 4 chuẩn xác (yùnfèi, bàojià)"],
        "Đọc rõ thuật ngữ国际贸易 CIF Hǎifánggǎng bàojiàdān."
      ),
      speakingShadowing(
        "hsk5-s2-q2",
        "直播带货已经成为电商行业的主流模式。",
        "Zhíbō dàihuò yǐjīng chéngwéi diànshāng hángyè de zhǔliú móshì.",
        "Thu âm câu nhận định về xu hướng Livestream bán hàng trong ngành TMĐT:",
        ["Âm cuốn lưỡi zh, ch, sh (Zhí, chéng, shāng, zhǔ, shì)", "Nhịp câu thuyết trình"],
        "Phát âm rõ ràng cụm 直播带货 (zhíbō dàihuò) và 主流模式 (mô hình chủ đạo)."
      ),
      speakingShadowing(
        "hsk5-s2-q3",
        "人工智能正在大幅提升客服响应效率。",
        "Réngōng zhìnéng zhèngzài dàfú tíshēng kèfú xiǎngyìng xiàolǜ.",
        "Thu âm câu thuyết trình về ứng dụng AI trong nâng cao hiệu suất CSKH:",
        ["Âm cuốn lưỡi r, zh, sh", "Vận mẫu ü trong 效率 (xiàolǜ)"],
        "Chú ý tròn môi ở chữ 率 (lǜ) trong 效率."
      ),
      speakingShadowing(
        "hsk5-s2-q4",
        "整柜货物已经在凭祥口岸顺利清关。",
        "Zhěngguì huòwù yǐjīng zài Píngxiáng kǒu'àn shùnlì qīngguān.",
        "Thu âm câu báo cáo lô hàng nguyên container đã thông quan tại cửa khẩu Bằng Tường:",
        ["Âm bật hơi q (qīngguān), k (kǒu'àn)", "Âm cuốn lưỡi zh, sh"],
        "Ngắt nhịp tự nhiên sau 已经在凭祥口岸."
      ),
    ],
  },
  {
    id: "hsk5-s3-reading-trade-contract-ai",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    title: "Đọc hiểu Hợp đồng ngoại thương, Chính sách hải quan & Báo cáo dữ liệu",
    titleZh: "外贸采购合同与科技行业报告阅读",
    titlePinyin: "Wàimào cǎigòu hétóng yǔ kējì hángyè bàogào yuèdú",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 35,
    recommendedChannelId: "reading-tieng-hoa-haha",
    recommendedChannelName: "Tiếng Hoa HAHA",
    youtubeUrl: "https://www.youtube.com/watch?v=YVhtZIIMPm8",
    defaultSearchQuery: "Tiếng Hoa HAHA ngữ pháp tiếng Trung HSK",
    grammarNotesVi: [
      "Văn phong hợp đồng thương mại HSK5 thường dùng các từ đơn âm tiết trang trọng: 需 (cần = 需要), 应 (nên/phải = 应该), 均 (đều = 都), 由 (do... đảm nhận).",
      "Cấu trúc 一旦...，就... (Một khi..., thì...): Cảnh báo điều kiện rủi ro hoặc违约 (vi phạm hợp đồng).",
    ],
    exercises: [
      readingComp(
        "hsk5-s3-q1",
        "【交货与赔偿条款】卖方应于收到买方百分之三十定金之日起十五个工作日内完成生产并安排发货。如因卖方原因延期交货，每逾期一天，卖方需向买方支付合同总额千分之三的赔偿金。",
        "[Jiāohuò yǔ péicháng tiáokuǎn] Màifāng yīng yú shōudào mǎifāng bǎifēnzhī sānshí dìngjīn zhī rì qǐ shíwǔ gè gōngzuòrì nèi wánchéng shēngchǎn bìng ānpái fāhuò. Rú yīn màifāng yuányīn yánqī jiāohuò, měi yúqī yì tiān, màifāng xū xiàng mǎifāng zhīfù hétóng zǒng'é qiānfēnzhī sān de péichángjīn.",
        "[Điều khoản giao hàng & bồi thường] Bên bán phải hoàn thành sản xuất và sắp xếp gửi hàng trong vòng 15 ngày làm việc kể từ ngày nhận được 30% tiền đặt cọc của bên mua. Nếu giao hàng chậm do nguyên nhân từ bên bán, mỗi ngày quá hạn bên bán phải trả cho bên mua khoản tiền bồi thường bằng 0,3% (3 phần nghìn) tổng giá trị hợp đồng.",
        "Bên bán phải hoàn thành sản xuất và xuất hàng trong vòng bao lâu sau khi nhận được 30% tiền cọc?",
        [
          "Trong vòng 15 ngày làm việc",
          "Trong vòng 30 ngày làm việc",
          "Trong vòng 3 ngày làm việc",
          "Trong vòng 7 ngày làm việc",
        ],
        "Trong vòng 15 ngày làm việc",
        "收到买方百分之三十定金之日起十五个工作日内完成生产并安排发货。"
      ),
      readingComp(
        "hsk5-s3-q2",
        "近年来，中越跨境电商物流体系不断完善。通过智能仓储系统与大数据算法，货物从广东东莞仓库发往河内消费者手中，平均配送时效已缩短至七十二小时以内。",
        "Jìnnián lái, Zhōng-Yuè kuàjìng diànshāng wùliú tǐxì búduàn wánshàn. Tōngguò zhìnéng cāngchǔ xìtǒng yǔ dàshùjù suànfǎ, huòwù cóng Guǎngdōng Dōngguǎn cāngkù fāwǎng Hénèi xiāofèizhě shǒuzhōng, píngjūn pèisòng shíxiào yǐ suōduǎn zhì qīshí'èr xiǎoshí yǐnèi.",
        "Những năm gần đây, hệ thống logistics thương mại điện tử xuyên biên giới Trung - Việt không ngừng hoàn thiện. Thông qua hệ thống kho thông minh và thuật toán dữ liệu lớn, hàng hóa gửi từ kho Đông Quản (Quảng Đông) tới tay người tiêu dùng Hà Nội đã rút ngắn thời gian giao hàng trung bình xuống dưới 72 giờ.",
        "Thời gian giao hàng trung bình từ kho Đông Quản tới tay người tiêu dùng Hà Nội hiện đã rút ngắn xuống mức nào?",
        ["Dưới 72 giờ (3 ngày)", "Dưới 24 giờ", "Khoảng 15 ngày", "Khoảng 10 ngày"],
        "Dưới 72 giờ (3 ngày)",
        "平均配送时效已缩短至七十二小时以内 (rút ngắn xuống dưới 72 giờ)."
      ),
      readingComp(
        "hsk5-s3-q3",
        "在国际结算中，汇率波动会直接影响进出口企业的利润。财务部门通常建议在大额订单合同中明确约定结算货币与汇率锁定机制。",
        "Zài guójì jiésuàn zhōng, huìlǜ bōdòng huì zhíjiē yǐngxiǎng jìn-chūkǒu qǐyè de lìrùn. Cáiwù bùmén tōngcháng jiànyì zài dà'é dìngdān hétóng zhōng míngquè yuēdìng jiésuàn huòbì yǔ huìlǜ suǒdìng jīzhì.",
        "Trong thanh toán quốc tế, biến động tỷ giá hối đoái sẽ ảnh hưởng trực tiếp tới lợi nhuận của doanh nghiệp xuất nhập khẩu. Phòng tài chính thường khuyến nghị quy định rõ đồng tiền thanh toán và cơ chế khóa tỷ giá trong các hợp đồng đơn hàng lớn.",
        "Để hạn chế rủi ro biến động tỷ giá, phòng tài chính khuyến nghị doanh nghiệp nên làm gì trong hợp đồng lớn?",
        [
          "Quy định rõ đồng tiền thanh toán và cơ chế khóa tỷ giá",
          "Chỉ nhận thanh toán bằng tiền mặt tại xưởng",
          "Không ký hợp đồng bằng văn bản",
          "Tăng giá bán gấp đôi mỗi tháng",
        ],
        "Quy định rõ đồng tiền thanh toán và cơ chế khóa tỷ giá",
        "建议在大额订单合同中明确约定结算货币与汇率锁定机制。"
      ),
      readingComp(
        "hsk5-s3-q4",
        "义乌和广州是中国最重要的两大商品批发基地。义乌以日用小商品种类齐全著称，而广州则在服装、皮具和美妆供应链方面具有显著优势。",
        "Yìwū hé Guǎngzhōu shì Zhōngguó zuì zhòngyào de liǎng dà shāngpǐn pīfā jīdì. Yìwū yǐ rìyòng xiǎoshāngpǐn zhǒnglèi qíquán zhùchēng, ér Guǎngzhōu zé zài fúzhuāng, píjù hé měizhuāng gōngyìngliàn fāngmiàn jùyǒu xiǎnzhù yōushì.",
        "Nghĩa Ô và Quảng Châu là hai trung tâm bán sỉ hàng hóa lớn và quan trọng nhất của Trung Quốc. Nghĩa Ô nổi tiếng với mặt hàng tiêu dùng nhỏ đa dạng chủng loại, còn Quảng Châu lại có ưu thế nổi bật về chuỗi cung ứng thời trang, đồ da và mỹ phẩm.",
        "Quảng Châu có lợi thế chuỗi cung ứng nổi bật ở những nhóm ngành hàng nào?",
        [
          "Thời trang (quần áo), đồ da và mỹ phẩm",
          "Than đá và quặng sắt",
          "Lúa gạo và cà phê",
          "Chỉ chuyên đồ nhựa gia dụng nhỏ",
        ],
        "Thời trang (quần áo), đồ da và mỹ phẩm",
        "广州则在服装、皮具和美妆供应链方面具有显著优势。"
      ),
    ],
  },
  {
    id: "hsk5-s4-writing-business-correspondence",
    stageId: 5,
    hskLevel: "HSK5",
    subDifficulty: "advanced",
    title: "Viết chữ Hán Hải quan/Logistics, Sắp xếp câu thương mại & Đặt 2 câu",
    titleZh: "HSK5外贸物流汉字书写与商务信函造句",
    titlePinyin: "HSK5 wàimào wùliú Hànzì shūxiě yǔ shāngwù xìnhán zàojù",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-chinemaster",
    recommendedChannelName: "Tiếng Trung ChineMaster",
    youtubeUrl: "https://www.youtube.com/watch?v=3sTya3lDp88",
    defaultSearchQuery: "Tiếng Trung ChineMaster HSK 3.0",
    grammarNotesVi: [
      "Khi viết email báo giá và thông quan bằng tiếng Trung, câu văn cần rõ chủ ngữ hoặc mở đầu bằng động từ lịch sự: 请提供... (Vui lòng cung cấp...), 烦请确认... (Phiền ngài xác nhận...).",
    ],
    exercises: [
      writingStroke(
        "hsk5-s4-q1",
        "关",
        "guān",
        "Hải quan / Cửa ải / Đóng (6 nét, bộ Bát 八)",
        "Chữ 关 (6 nét): Hai nét chấm-phẩy đầu trên (bộ Bát ngược), tiếp theo là hai nét Ngang (ngang trên ngắn, ngang dưới dài), cuối cùng là Phẩy và Mác."
      ),
      writingStroke(
        "hsk5-s4-q2",
        "运",
        "yùn",
        "Vận chuyển / Logistics (7 nét, bộ Sước 辶 viết sau cùng)",
        "Quy tắc chữ có bộ Sước (辶): Viết phần bên trong (云 - 4 nét) trước, viết bộ Sước (辶 - 3 nét: Chấm, Ngang gập cong, Mác phẳng) sau cùng."
      ),
      writingOrder(
        "hsk5-s4-q3",
        "Sắp xếp câu thương mại: 'Tất cả chứng từ khai báo hải quan bắt buộc phải trung thực và chính xác.'",
        ["真实准确。", "必须", "所有报关单据"],
        "所有报关单据必须真实准确。",
        "Suǒyǒu bàoguān dānjù bìxū zhēnshí zhǔnquè.",
        "Chủ ngữ (所有报关单据) + Phó từ (必须) + Cụm tính từ vị ngữ (真实准确)."
      ),
      writingOrder(
        "hsk5-s4-q4",
        "Sắp xếp câu: 'Hàng nguyên container đã thông quan thuận lợi tại cửa khẩu Bằng Tường.'",
        ["顺利清关。", "已经在凭祥口岸", "整柜货物"],
        "整柜货物已经在凭祥口岸顺利清关。",
        "Zhěngguì huòwù yǐjīng zài Píngxiáng kǒu'àn shùnlì qīngguān.",
        "Chủ ngữ (整柜货物) + 已经 + Địa điểm (在凭祥口岸) + Trạng ngữ + Động từ (顺利清关)."
      ),
      writingTwoSentences(
        "hsk5-s4-q5",
        "物流",
        "wùliú",
        "Logistics / Vận chuyển hàng hóa",
        "Đặt 2 câu hoàn chỉnh với từ 物流 (Câu 1: Kiểm tra mã vận đơn mua hàng online; Câu 2: Quản lý chi phí/thời gian logistics xuất nhập khẩu)."
      ),
    ],
  },
];
