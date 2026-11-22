import type { HSKLevel } from "@/types";

export type InterviewTrackId =
  | "hoc-bong-csc"
  | "doanh-nghiep-tq"
  | "visa-du-hoc"
  | "hskk";

export interface InterviewVocabItem {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
}

export interface InterviewQA {
  id: string;
  level: HSKLevel;
  questionZh: string;
  questionPinyin: string;
  questionVi: string;
  answerZh: string;
  answerPinyin: string;
  answerVi: string;
  keyVocab: InterviewVocabItem[];
  tipsVi: string;
}

export interface InterviewTrack {
  id: InterviewTrackId;
  titleVi: string;
  titleZh: string;
  titlePinyin: string;
  subtitleVi: string;
  badgeText: string;
  questions: InterviewQA[];
}

export const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    id: "hoc-bong-csc",
    titleVi: "Phỏng vấn Học bổng Chính phủ Trung Quốc (CSC / CIS)",
    titleZh: "中国政府奖学金与国际中文教师奖学金面试",
    titlePinyin: "Zhōngguó Zhèngfǔ Jiǎngxuéjīn Miànshì",
    subtitleVi:
      "9 câu hỏi hội đồng giáo sư các trường Đại học Top đầu Trung Quốc (Thanh Hoa, Bắc Đại, Phục Đán, Chiết Giang, Vũ Hán) thường hỏi nhất khi xét duyệt học bổng Toàn phần CSC & Khổng Tử.",
    badgeText: "HSK 4–8 · 9 câu hỏi cốt lõi",
    questions: [
      {
        id: "csc-01",
        level: "HSK4",
        questionZh: "请先用一两分钟做一个简单的自我介绍。",
        questionPinyin: "Qǐng xiān yòng yì liǎng fēnzhōng zuò yí gè jiǎndān de zìwǒ jièshào.",
        questionVi: "Trước tiên, em hãy dùng 1–2 phút để giới thiệu ngắn gọn về bản thân.",
        answerZh:
          "各位评审老师好！我叫阮明英，来自越南河内，今年二十二岁。我本科毕业于河内国家大学下属外国语大学中文系，平均绩点（GPA）为3.7/4.0，并已高分通过HSK六级和HSKK高级考试。在校期间，我曾主持过一项关于中越跨境电商语言特征的科研课题。今天非常荣幸能申请贵校的国际商务硕士项目。",
        answerPinyin:
          "Gèwèi píngshěn lǎoshī hǎo! Wǒ jiào Ruǎn Míng Yīng, láizì Yuènán Hénèi, jīnnián èrshí'èr suì. Wǒ běnkē bìyè yú Hénèi Guójiā Dàxué xiàshǔ Wàiguóyǔ Dàxué Zhōngwénxì, píngjūn jìdiǎn (GPA) wéi sān diǎn qī, bìng yǐ gāofēn tōngguò HSK liù jí hé HSKK gāojí kǎoshì. Zàixiào qījiān, wǒ céng zhǔchí guò yí xiàng guānyú Zhōng-Yuè kuàjìng diànshāng yǔyán tèzhēng de kēyán kètí. Jīntiān fēicháng róngxìng néng shēnqǐng guì xiào de Guójì Shāngwù shuòshì xiàngmù.",
        answerVi:
          "Em xin chào các thầy cô trong hội đồng! Em tên là Nguyễn Minh Anh, đến từ Hà Nội, Việt Nam, năm nay 22 tuổi. Em tốt nghiệp Cử nhân Khoa Tiếng Trung, Trường Đại học Ngoại ngữ - ĐHQG Hà Nội với GPA 3.7/4.0, đồng thời đã đạt điểm cao kỳ thi HSK 6 và HSKK Cao cấp. Thời gian học đại học, em từng chủ trì một đề tài nghiên cứu khoa học về đặc trưng ngôn ngữ TMĐT xuyên biên giới Trung - Việt. Hôm nay em vô cùng vinh dự được ứng tuyển chương trình Thạc sĩ Kinh doanh Quốc tế của quý trường.",
        keyVocab: [
          { hanzi: "评审老师", pinyin: "píngshěn lǎoshī", meaningVi: "giám khảo / thầy cô hội đồng" },
          { hanzi: "平均绩点", pinyin: "píngjūn jìdiǎn", meaningVi: "điểm trung bình tích lũy (GPA)" },
          { hanzi: "科研课题", pinyin: "kēyán kètí", meaningVi: "đề tài nghiên cứu khoa học" },
        ],
        tipsVi:
          "Công thức vàng 60 giây cho CSC: Họ tên & Quê quán + Trường đại học & GPA + Điểm HSK/HSKK + 1 thành tích nghiên cứu/hoạt động nổi bật + Chuyên ngành đăng ký.",
      },
      {
        id: "csc-02",
        level: "HSK5",
        questionZh: "你为什么选择来中国留学，而不是去其他国家？",
        questionPinyin: "Nǐ wèishénme xuǎnzé lái Zhōngguó liúxué, ér bú shì qù qítā guójiā?",
        questionVi: "Tại sao em lại chọn du học Trung Quốc chứ không phải các quốc gia khác?",
        answerZh:
          "首先，中国在数字经济、跨境电商和供应链管理领域处于世界领先地位，这与我申请的国际商务专业高度契合。其次，中越两国山水相连，经贸往来日益密切，中国是越南最大的贸易伙伴。亲身来到中国顶尖学府深造，能让我接触到最前沿的商业案例与学术资源。",
        answerPinyin:
          "Shǒuxiān, Zhōngguó zài shùzì jīngjì, kuàjìng diànshāng hé gōngyìngliàn guǎnlǐ lǐngyù chǔyú shìjiè lǐngxiān dìwèi, zhè yǔ wǒ shēnqǐng de Guójì Shāngwù zhuānyè gāodù qìhé. Qícì, Zhōng-Yuè liǎng guó shānshuǐ-xiānglián, jīngmào wǎnglái rìyì mìqiè, Zhōngguó shì Yuènán zuì dà de màoyì huǒbàn. Qīnshēn láidào Zhōngguó dǐngjiān xuéfǔ shēnzào, néng ràng wǒ jiēchù dào zuì qiányán de shāngyè ànlì yǔ xuéshù zīyuán.",
        answerVi:
          "Trước hết, Trung Quốc đang giữ vị thế dẫn đầu thế giới trong lĩnh vực kinh tế số, thương mại điện tử xuyên biên giới và quản trị chuỗi cung ứng, điều này hoàn toàn ăn khớp với chuyên ngành Kinh doanh Quốc tế mà em ứng tuyển. Thứ hai, Việt - Trung núi sông liền một dải, giao thương ngày càng mật thiết, Trung Quốc là đối tác thương mại lớn nhất của Việt Nam. Trực tiếp đến học tập chuyên sâu tại ngôi trường hàng đầu Trung Quốc sẽ giúp em tiếp cận các case-study thương mại và nguồn lực học thuật tiên tiến nhất.",
        keyVocab: [
          { hanzi: "数字经济", pinyin: "shùzì jīngjì", meaningVi: "kinh tế số" },
          { hanzi: "高度契合", pinyin: "gāodù qìhé", meaningVi: "phù hợp / ăn khớp cao độ" },
          { hanzi: "山水相连", pinyin: "shānshuǐ-xiānglián", meaningVi: "núi sông liền một dải" },
        ],
        tipsVi:
          "Kết nối trực tiếp thế mạnh của Trung Quốc với chuyên ngành bạn chọn (kinh tế số, Hán ngữ, y học, kỹ thuật) và mối quan hệ hợp tác Việt - Trung.",
      },
      {
        id: "csc-03",
        level: "HSK5",
        questionZh: "中国有那么多优秀的大学，你为什么唯独选择我们学校？",
        questionPinyin: "Zhōngguó yǒu nàme duō yōuxiù de dàxué, nǐ wèishénme wéidú xuǎnzé wǒmen xuéxiào?",
        questionVi: "Trung Quốc có rất nhiều trường đại học xuất sắc, tại sao em lại chọn trường của chúng tôi?",
        answerZh:
          "我仔细阅读过贵校商学院的培养方案，贵校不仅拥有国家重点学科平台，而且在东盟区域经济研究方面成果卓著。特别是贵院李教授关于“中国—东盟数字贸易走廊”的论文给了我极大的启发。此外，贵校浓厚的国际化学术氛围和严谨的校风也是我梦寐以求的求学环境。",
        answerPinyin:
          "Wǒ zǐxì yuèdú guò guì xiào shāngxuéyuàn de péiyǎng fāng'àn, guì xiào bùjǐn yōngyǒu guójiā zhòngdiǎn xuékē píngtái, érqiě zài Dōngméng qūyù jīngjì yánjiū fāngmiàn chéngguǒ zhuózhù. Tèbié shì guì yuàn Lǐ jiàoshòu guānyú “Zhōngguó—Dōngméng shùzì màoyì zǒuláng” de lùnwén gěi le wǒ jídà de qǐfā. Cǐwài, guì xiào nónghòu de guójìhuà xuéshù fēnwéi hé yánjǐn de xiàofēng yě shì wǒ mèngmèi-yǐqiú de qiúxué huánjìng.",
        answerVi:
          "Em đã đọc rất kỹ chương trình đào tạo của Khoa Kinh doanh quý trường; trường mình không chỉ sở hữu nền tảng ngành trọng điểm quốc gia mà còn có thành tựu nổi bật trong nghiên cứu kinh tế khu vực ASEAN. Đặc biệt, công trình của Giáo sư Lý thuộc quý khoa về 'Hành lang thương mại số Trung Quốc - ASEAN' đã truyền cảm hứng rất lớn cho em. Ngoài ra, bầu không khí học thuật quốc tế浓 hậu và tác phong học tập nghiêm cẩn của trường cũng là môi trường em hằng mơ ước.",
        keyVocab: [
          { hanzi: "培养方案", pinyin: "péiyǎng fāng'àn", meaningVi: "chương trình khung đào tạo" },
          { hanzi: "成果卓著", pinyin: "chéngguǒ zhuózhù", meaningVi: "thành tựu nổi bật" },
          { hanzi: "梦寐以求", pinyin: "mèngmèi-yǐqiú", meaningVi: "hằng mơ ước" },
        ],
        tipsVi:
          "Đừng khen chung chung kiểu 'trường đẹp, nổi tiếng'. Hãy nhắc tới Chương trình đào tạo (培养方案) và hướng nghiên cứu cụ thể của Khoa/Giáo sư tại trường đó.",
      },
      {
        id: "csc-04",
        level: "HSK6",
        questionZh: "请谈一谈你来华攻读硕士期间的研究计划（Study Plan）。",
        questionPinyin: "Qǐng tán yì tán nǐ láihuá gōngdú shuòshì qījiān de yánjiū jìhuà (Study Plan).",
        questionVi: "Em hãy trình bày Kế hoạch học tập & nghiên cứu (Study Plan) trong thời gian học Thạc sĩ tại Trung Quốc.",
        answerZh:
          "我的研究计划分为三个阶段：第一学年扎实修完核心必修课，掌握计量经济学与数据分析工具，并确定毕业论文选题；第二学年在导师指导下深入收集RCEP框架下中越农产品与电子产品跨境供应链的实证数据，撰写开题报告并发表一篇学术论文；第三学年完成硕士学位论文撰写与答辩。",
        answerPinyin:
          "Wǒ de yánjiū jìhuà fēnwéi sān gè jiēduàn: Dì-yī xuénián zhāshi xiūwán héxīn bìxiūkè, zhǎngwò jìliàng jīngjìxué yǔ shùjù fēnxī gōngjù, bìng quèdìng bìyè lùnwén xuǎntí; dì-èr xuénián zài dǎoshī zhǐdǎo xià shēnrù shōují RCEP kuàngjià xià Zhōng-Yuè nóngchǎnpǐn yǔ diànzǐ chǎnpǐn kuàjìng gōngyìngliàn de shízhèng shùjù, zhuànxiě kāití bàogào bìng fābiǎo yì piān xuéshù lùnwén; dì-sān xuénián wánchéng shuòshì xuéwèi lùnwén zhuànxiě yǔ dábiàn.",
        answerVi:
          "Kế hoạch nghiên cứu của em chia làm 3 giai đoạn: Năm thứ nhất hoàn thành vững chắc các môn bắt buộc cốt lõi, làm chủ công cụ kinh tế lượng & phân tích dữ liệu, đồng thời chốt đề tài luận văn; Năm thứ hai dưới sự hướng dẫn của giáo sư sẽ thu thập sâu dữ liệu thực nghiệm về chuỗi cung ứng xuyên biên giới nông sản và điện tử Trung - Việt trong khuôn khổ RCEP, viết đề cương開题报告 và công bố 1 bài báo khoa học; Năm thứ ba hoàn thiện luận văn Thạc sĩ và bảo vệ tốt nghiệp.",
        keyVocab: [
          { hanzi: "核心必修课", pinyin: "héxīn bìxiūkè", meaningVi: "môn học bắt buộc cốt lõi" },
          { hanzi: "开题报告", pinyin: "kāití bàogào", meaningVi: "báo cáo bảo vệ đề cương luận văn" },
          { hanzi: "论文答辩", pinyin: "lùnwén dábiàn", meaningVi: "bảo vệ luận văn" },
        ],
        tipsVi:
          "Chia rõ theo từng năm học (第一学年 / 第二学年 / 第三学年) với đầu ra cụ thể: môn học, đề cương (开题报告), thu thập dữ liệu và bảo vệ luận văn (答辩).",
      },
      {
        id: "csc-05",
        level: "HSK5",
        questionZh: "如果来中国以后遇到文化冲击或学业压力，你会怎么克服？",
        questionPinyin: "Rúguǒ lái Zhōngguó yǐhòu yùdào wénhuà chōngjī huò xuéyè yālì, nǐ huì zěnme kèfú?",
        questionVi: "Nếu sau khi sang Trung Quốc gặp phải cú sốc văn hóa hoặc áp lực học tập, em sẽ vượt qua như thế nào?",
        answerZh:
          "首先，中越文化同源，在儒家传统与饮食习惯上有许多共通之处，而且我曾在南宁参加过夏令营，适应能力很强。如果遇到学业瓶颈，我会主动向导师和师兄师姐请教，充分利用学校图书馆与学术研讨会；同时通过跑步和参加国际学生社团来保持积极乐观的心态。",
        answerPinyin:
          "Shǒuxiān, Zhōng-Yuè wénhuà tóngyuán, zài Rújiā chuántǒng yǔ yǐnshí xíguàn shàng yǒu xǔduō gòngtōng zhī chù, érqiě wǒ céng zài Nánníng cānjiā guò xiàlìngyíng, shìyìng nénglì hěn qiáng. Rúguǒ yùdào xuéyè píngjǐng, wǒ huì zhǔdòng xiàng dǎoshī hé shīxiōng shījiě qǐngjiào, chōngfèn lìyòng xuéxiào túshūguǎn yǔ xuéshù yántǎohuì; tóngshí tōngguò pǎobù hé cānjiā guójì xuésheng shètuán lái bǎochí jījí lèguān de xīntài.",
        answerVi:
          "Trước hết, văn hóa Trung - Việt có nhiều nét tương đồng về truyền thống Nho giáo và thói quen ẩm thực, hơn nữa em từng tham gia trại hè tại Nam Ninh nên khả năng thích nghi rất tốt. Nếu gặp nút thắt trong học tập, em sẽ chủ động xin chỉ dẫn từ giáo sư hướng dẫn và các anh chị khóa trên, tận dụng tối đa thư viện cùng hội thảo học thuật; đồng thời duy trì tâm lý tích cực qua chạy bộ và tham gia câu lạc bộ sinh viên quốc tế.",
        keyVocab: [
          { hanzi: "学业瓶颈", pinyin: "xuéyè píngjǐng", meaningVi: "nút thắt / khó khăn trong học tập" },
          { hanzi: "师兄师姐", pinyin: "shīxiōng shījiě", meaningVi: "anh chị khóa trên cùng thầy hướng dẫn" },
          { hanzi: "积极乐观", pinyin: "jījí lèguān", meaningVi: "tích cực lạc quan" },
        ],
        tipsVi:
          "Hội đồng CSC rất sợ sinh viên bỏ học giữa chừng vì áp lực. Hãy khẳng định khả năng tự điều chỉnh tâm lý và chủ động kết nối với 导师 (giáo sư hướng dẫn) & 师兄师姐.",
      },
      {
        id: "csc-06",
        level: "HSK6",
        questionZh: "你本科阶段最满意的一项学术研究或社会实践是什么？",
        questionPinyin: "Nǐ běnkē jiēduàn zuì mǎnyì de yí xiàng xuéshù yánjiū huò shèhuì shíjiàn shì shénme?",
        questionVi: "Nghiên cứu học thuật hoặc hoạt động thực tiễn xã hội mà em tâm đắc nhất thời đại học là gì?",
        answerZh:
          "大三时，我带领四人团队开展了“越南年轻消费者对中国国潮品牌认知度”的问卷调查，共收集了八百份有效样本。我们运用SPSS分析了价格敏感度与社交媒体种草对购买意愿的影响，最终报告获得了校级大学生科研竞赛一等奖。这段经历锻炼了我的实证分析与团队协作能力。",
        answerPinyin:
          "Dàsān shí, wǒ dàilǐng sì rén tuánduì kāizhǎn le “Yuènán niánqīng xiāofèizhě duì Zhōngguó guócháo pǐnpái rènzhīdù” de wènjuàn diàochá, gòng shōují le bābǎi fèn yǒuxiào yàngběn. Wǒmen yùnyòng SPSS fēnxī le jiàgé mǐngǎndù yǔ shèjiāo méitǐ zhòngcǎo duì gòumǎi yìyuàn de yǐngxiǎng, zuìzhōng bàogào huòdé le xiàojí dàxuésheng kēyán jìngsài yīděngjiǎng. Zhè duàn jīnglì duànliàn le wǒ de shízhèng fēnxī yǔ tuánduì xiézuò nénglì.",
        answerVi:
          "Năm thứ 3 đại học, em dẫn dắt nhóm 4 người thực hiện khảo sát bảng hỏi về 'Mức độ nhận diện của người tiêu dùng trẻ Việt Nam đối với các thương hiệu Quốc triều (Guochao) Trung Quốc', thu thập được 800 mẫu hợp lệ. Chúng em dùng SPSS phân tích tác động của độ nhạy cảm giá và bài review mạng xã hội lên ý định mua hàng, báo cáo cuối cùng đạt Giải Nhất cuộc thi NCKH sinh viên cấp trường. Trải nghiệm này đã rèn luyện năng lực phân tích thực nghiệm và làm việc nhóm của em.",
        keyVocab: [
          { hanzi: "问卷调查", pinyin: "wènjuàn diàochá", meaningVi: "khảo sát bằng bảng hỏi" },
          { hanzi: "有效样本", pinyin: "yǒuxiào yàngběn", meaningVi: "mẫu khảo sát hợp lệ" },
          { hanzi: "实证分析", pinyin: "shízhèng fēnxī", meaningVi: "phân tích thực nghiệm" },
        ],
        tipsVi:
          "Trình bày theo cấu trúc: Đề tài gì -> Phương pháp/cỡ mẫu ra sao -> Kết quả đạt được -> Kỹ năng học thuật rút ra.",
      },
      {
        id: "csc-07",
        level: "HSK5",
        questionZh: "毕业之后你有什么职业规划？会留在越南还是在中国发展？",
        questionPinyin: "Bìyè zhīhòu nǐ yǒu shénme zhíyè guīhuà? Huì liú zài Yuènán háishi zài Zhōngguó fāzhǎn?",
        questionVi: "Sau khi tốt nghiệp em có định hướng nghề nghiệp gì? Sẽ về Việt Nam hay phát triển tại Trung Quốc?",
        answerZh:
          "硕士毕业后，我计划先在一家布局越南市场的中国大型跨国企业或高校智库工作，担任中越经贸研究员或供应链战略顾问。我希望把在中国学到的先进管理体系带回越南，做一名连接两国商业与文化交流的友好使者。",
        answerPinyin:
          "Shuòshì bìyè hòu, wǒ jìhuà xiān zài yì jiā bùjú Yuènán shìchǎng de Zhōngguó dàxíng kuàguó qǐyè huò gāoxiào zhìkù gōngzuò, dānrèn Zhōng-Yuè jīngmào yánjiūyuán huò gōngyìngliàn zhànlüè gùwèn. Wǒ xīwàng bǎ zài Zhōngguó xuédào de xiānjìn guǎnlǐ tǐxì dài huí Yuènán, zuò yì míng liánjiē liǎng guó shāngyè yǔ wénhuà jiāoliú de yǒuhǎo shǐzhě.",
        answerVi:
          "Sau khi tốt nghiệp Thạc sĩ, em dự định làm việc tại một tập đoàn đa quốc gia lớn của Trung Quốc đang đầu tư tại thị trường Việt Nam hoặc viện nghiên cứu đại học, đảm nhiệm vị trí Chuyên viên nghiên cứu kinh tế thương mại Trung - Việt hoặc Cố vấn chiến lược chuỗi cung ứng. Em mong muốn mang hệ thống quản trị tiên tiến học được tại Trung Quốc về Việt Nam, trở thành sứ giả hữu nghị kết nối giao lưu thương mại và văn hóa giữa hai nước.",
        keyVocab: [
          { hanzi: "职业规划", pinyin: "zhíyè guīhuà", meaningVi: "định hướng nghề nghiệp" },
          { hanzi: "跨国企业", pinyin: "kuàguó qǐyè", meaningVi: "doanh nghiệp đa quốc gia" },
          { hanzi: "友好使者", pinyin: "yǒuhǎo shǐzhě", meaningVi: "sứ giả hữu nghị" },
        ],
        tipsVi:
          "Mục tiêu cốt lõi của Học bổng Chính phủ CSC là đào tạo nhân tài quốc tế thúc đẩy hợp tác song phương. Cụm từ '友好使者' (sứ giả hữu nghị) rất ghi điểm.",
      },
      {
        id: "csc-08",
        level: "HSK7",
        questionZh: "如果申请国际中文教师奖学金（原孔子学院奖学金），你认为越南学生学汉语最大的难点是什么？",
        questionPinyin: "Rúguǒ shēnqǐng Guójì Zhōngwén Jiàoshī Jiǎngxuéjīn, nǐ rènwéi Yuènán xuésheng xué Hànyǔ zuì dà de nándiǎn shì shénme?",
        questionVi: "Nếu ứng tuyển Học bổng Giáo viên Tiếng Trung Quốc tế (CIS/Khổng Tử), theo em điểm khó nhất của học sinh Việt Nam khi học tiếng Trung là gì?",
        answerZh:
          "虽然越南语中有大量汉越词，有助于词汇理解，但也容易造成“负迁移”。越南学生最大的难点在于两点：一是语音上的送气音与不送气音（如j/q、zh/ch、z/c）及轻声儿化；二是语法上受母语“定语后置”影响，经常把汉语定语位置放错，且对“把”字句和趋向补语掌握不够自然。因此教学中应采用对比语言学方法进行针对性纠偏。",
        answerPinyin:
          "Suīrán Yuènányǔ zhōng yǒu dàliàng Hàn-Yuècí, yǒuzhùyú cíhuì lǐjiě, dàn yě róngyì zàochéng “fùqiānyí”. Yuènán xuésheng zuì dà de nándiǎn zàiyú liǎng diǎn: yī shì yǔyīn shàng de sòngqìyīn yǔ bú sòngqìyīn (rú j/q, zh/ch, z/c) jí qīngshēng érhuà; èr shì yǔfǎ shàng shòu mǔyǔ “dìngyǔ hòuzhì” yǐngxiǎng, jīngcháng bǎ Hànyǔ dìngyǔ wèizhì fàngcuò, qiě duì “bǎ” zì jù hé qūxiàng bǔyǔ zhǎngwò búgòu zìrán. Yīncǐ jiàoxué zhōng yīng cǎiyòng duìbǐ yǔyánxué fāngfǎ jìnxíng zhēnduìxìng jiūpiān.",
        answerVi:
          "Mặc dù tiếng Việt có lượng lớn từ Hán Việt giúp ích cho việc hiểu từ vựng, nhưng cũng dễ gây ra 'chuyển di tiêu cực' (负迁移). Điểm khó lớn nhất của người Việt nằm ở 2 chỗ: Một là về ngữ âm với cặp âm bật hơi và không bật hơi (như j/q, zh/ch, z/c) cùng thanh nhẹ và âm cuốn lưỡi; Hai là về ngữ pháp do chịu ảnh hưởng 'định ngữ đứng sau' của tiếng mẹ đẻ nên hay đặt sai vị trí định ngữ tiếng Trung, đồng thời dùng câu chữ 把 và bổ ngữ xu hướng chưa tự nhiên. Do đó trong giảng dạy cần áp dụng phương pháp ngôn ngữ học đối chiếu để sửa lỗi có trọng tâm.",
        keyVocab: [
          { hanzi: "汉越词", pinyin: "Hàn-Yuècí", meaningVi: "từ Hán Việt" },
          { hanzi: "负迁移", pinyin: "fùqiānyí", meaningVi: "chuyển di tiêu cực (negative transfer)" },
          { hanzi: "定语后置", pinyin: "dìngyǔ hòuzhì", meaningVi: "định ngữ đặt phía sau danh từ" },
        ],
        tipsVi:
          "Câu trả lời chuẩn chuyên ngành Giáo dục Hán ngữ Quốc tế (汉语国际教育): Nêu được khái niệm 汉越词 (từ Hán Việt), 正/负迁移 (chuyển di tích cực/tiêu cực) và 定语位置 (vị trí định ngữ).",
      },
      {
        id: "csc-09",
        level: "HSK6",
        questionZh: "面试快结束了，你有什么问题想问评审委员会的老师吗？",
        questionPinyin: "Miànshì kuài jiéshù le, nǐ yǒu shénme wèntí xiǎng wèn píngshěn wěiyuánhuì de lǎoshī ma?",
        questionVi: "Buổi phỏng vấn sắp kết thúc rồi, em có câu hỏi nào muốn hỏi các thầy cô trong Hội đồng xét duyệt không?",
        answerZh:
          "非常感谢各位老师的耐心提问！我想请教一下：如果我有幸被录取，在今年九月正式入学前，老师建议我提前研读哪些专业书籍或补充哪些软件技能，以便更快地跟上课题组的研究节奏？",
        answerPinyin:
          "Fēicháng gǎnxiè gèwèi lǎoshī de nàixīn tíwèn! Wǒ xiǎng qǐngjiào yíxià: rúguǒ wǒ yǒuxìng bèi lùqǔ, zài jīnnián jiǔyuè zhèngshì rùxué qián, lǎoshī jiànyì wǒ tíqián yándú nǎxiē zhuānyè shūjí huò bǔchōng nǎxiē ruǎnjiàn jìnéng, yǐbiàn gèng kuài de gēnshàng kètízǔ de yánjiū jiézòu?",
        answerVi:
          "Em vô cùng cảm ơn các thầy cô đã kiên nhẫn đặt câu hỏi! Em muốn xin thỉnh giáo một điều ạ: Nếu may mắn được trúng tuyển, trước khi chính thức nhập học vào tháng 9 năm nay, các thầy cô khuyên em nên đọc trước những cuốn sách chuyên ngành nào hoặc bổ sung kỹ năng phần mềm nào để bắt nhịp nhanh nhất với nhóm nghiên cứu (课题组) ạ?",
        keyVocab: [
          { hanzi: "有幸被录取", pinyin: "yǒuxìng bèi lùqǔ", meaningVi: "may mắn được trúng tuyển" },
          { hanzi: "提前研读", pinyin: "tíqián yándú", meaningVi: "đọc nghiên cứu trước" },
          { hanzi: "课题组", pinyin: "kètízǔ", meaningVi: "nhóm nghiên cứu của giáo sư" },
        ],
        tipsVi:
          "Hỏi về sách chuyên ngành hoặc kỹ năng cần chuẩn bị trước khi nhập học cho thấy tinh thần cầu tiến học thuật cực cao.",
      },
    ],
  },
  {
    id: "doanh-nghiep-tq",
    titleVi: "Phỏng vấn Doanh nghiệp Trung Quốc & Xuất nhập khẩu / Purchasing",
    titleZh: "中资企业、进出口贸易与采购岗位面试",
    titlePinyin: "Zhōngzī Qǐyè yǔ Cǎigòu Gǎngwèi Miànshì",
    subtitleVi:
      "9 câu hỏi thực chiến khi ứng tuyển vào các tập đoàn sản xuất, thương mại điện tử, logistics & xuất nhập khẩu Trung Quốc tại Việt Nam (Chuyên viên thu mua 采购, Trợ lý Tổng giám đốc 总助,跟单 Merchandiser).",
    badgeText: "HSK 4–8 · 9 câu hỏi thực chiến",
    questions: [
      {
        id: "dn-01",
        level: "HSK4",
        questionZh: "请结合你的过往工作经历，谈谈你为什么应聘我们公司的采购专员岗位？",
        questionPinyin: "Qǐng jiéhé nǐ de guòwǎng gōngzuò jīnglì, tántan nǐ wèishénme yìngpìn wǒmen gōngsī de cǎigòu zhuānyuán gǎngwèi?",
        questionVi: "Hãy kết hợp với kinh nghiệm làm việc trước đây để chia sẻ lý do bạn ứng tuyển vị trí Chuyên viên thu mua (Purchasing) của công ty chúng tôi?",
        answerZh:
          "您好！我过去两年在北宁一家中资电子制造企业担任采购跟单，日常负责1688与国内源头工厂寻源、询价比价、下达PO订单以及跟踪跨境物流。贵公司正在越南扩大智能硬件产线，我的双语谈判能力和本地及中国供应链资源，能让我在入职后立刻上手创造价值。",
        answerPinyin:
          "Nín hǎo! Wǒ guòqù liǎng nián zài Běiníng yì jiā Zhōngzī diànzǐ zhìzào qǐyè dānrèn cǎigòu gēndān, rìcháng fùzé 1688 yǔ guónèi yuántóu gōngchǎng xúnyuán, xúnjià bǐjià, xiàdá PO dìngdān yǐjí gēnzōng kuàjìng wùliú. Guì gōngsī zhèngzài Yuènán kuòdà zhìnéng yìngjiàn chǎnxiàn, wǒ de shuāngyǔ tánpàn nénglì hé běndì jí Zhōngguó gōngyìngliàn zīyuán, néng ràng wǒ zài rùzhí hòu lìkè shàngshǒu chuàngzào jiàzhí.",
        answerVi:
          "Xin chào ngài! Hai năm qua tôi làm nhân viên thu mua kiêm theo dõi đơn hàng tại một doanh nghiệp sản xuất điện tử vốn Trung Quốc ở Bắc Ninh, hàng ngày phụ trách tìm nguồn hàng trên 1688 và các xưởng gốc nội địa Trung Quốc, hỏi giá so sánh giá, phát hành đơn hàng PO cũng như theo dõi logistics xuyên biên giới. Quý công ty đang mở rộng dây chuyền phần cứng thông minh tại Việt Nam, năng lực đàm phán song ngữ và nguồn nhà cung cấp tại cả Việt Nam lẫn Trung Quốc sẽ giúp tôi bắt tay vào việc tạo ra giá trị ngay sau khi nhận việc.",
        keyVocab: [
          { hanzi: "源头工厂", pinyin: "yuántóu gōngchǎng", meaningVi: "nhà máy / xưởng sản xuất gốc" },
          { hanzi: "询价比价", pinyin: "xúnjià bǐjià", meaningVi: "hỏi giá và so sánh báo giá" },
          { hanzi: "立刻上手", pinyin: "lìkè shàngshǒu", meaningVi: "bắt nhịp làm được việc ngay" },
        ],
        tipsVi:
          "Các sếp Trung Quốc cực kỳ thích từ '立刻上手' (vào làm được việc ngay, không tốn nhiều thời gian đào tạo lại từ đầu).",
      },
      {
        id: "dn-02",
        level: "HSK5",
        questionZh: "在采购谈判中，如果中国供应商一口咬定原材料涨价、拒绝降价，你会怎么处理？",
        questionPinyin: "Zài cǎigòu tánpàn zhōng, rúguǒ Zhōngguó gōngyìngshāng yìkǒu yǎodìng yuáncáiliào zhǎngjià, jùjué jiàngjià, nǐ huì zěnme chǔlǐ?",
        questionVi: "Trong đàm phán thu mua, nếu nhà cung cấp Trung Quốc khăng khăng nguyên liệu tăng giá và từ chối giảm giá, bạn sẽ xử lý thế nào?",
        answerZh:
          "我不会只凭口头压价，而是采取三步策略：第一，调取大宗商品行情数据并提前向三家以上备选工厂询价，掌握真实成本底线；第二，提出阶梯报价方案或年度框架协议，用稳定的长期订单量换取单价让利；第三，若单价确实无法下调，则争取延长账期（如月结60天）或由卖方承担部分运费。",
        answerPinyin:
          "Wǒ búhuì zhǐ píng kǒutóu yājià, érshì cǎiqǔ sān bù cèlüè: Dì-yī, diàoqǔ dàzōng shāngpǐn hángqíng shùjù bìng tíqián xiàng sān jiā yǐshàng bèixuǎn gōngchǎng xúnjià, zhǎngwò zhēnshí chéngběn dǐxiàn; dì-èr, tíchū jiētī bàojià fāng'àn huò niándù kuàngjià xiéyì, yòng wěndìng de chángqī dìngdānliàng huànqǔ dānjià rànglì; dì-sān, ruò dānjià quèshí wúfǎ xiàtiáo, zé zhēngqǔ yáncháng zhàngqī (rú yuèjié liùshí tiān) huò yóu màifāng chéngdān bùfen yùnfèi.",
        answerVi:
          "Tôi sẽ không ép giá suông bằng miệng mà áp dụng chiến lược 3 bước: Thứ nhất, tra cứu dữ liệu giá nguyên liệu thị trường và hỏi giá trước ít nhất 3 xưởng dự phòng để nắm rõ giá vốn thực tế; Thứ hai, đề xuất phương án báo giá bậc thang theo sản lượng hoặc hợp đồng khung năm, dùng sản lượng đơn hàng ổn định lâu dài để đổi lấy chiết khấu đơn giá; Thứ ba, nếu đơn giá thực sự không thể giảm thêm, tôi sẽ đàm phán kéo dài kỳ công nợ (như công nợ 60 ngày) hoặc yêu cầu bên bán chịu một phần cước vận chuyển.",
        keyVocab: [
          { hanzi: "成本底线", pinyin: "chéngběn dǐxiàn", meaningVi: "mức giá vốn sàn tối thiểu" },
          { hanzi: "阶梯报价", pinyin: "jiētī bàojià", meaningVi: "báo giá bậc thang theo số lượng" },
          { hanzi: "延长账期", pinyin: "yáncháng zhàngqī", meaningVi: "kéo dài thời hạn công nợ thanh toán" },
        ],
        tipsVi:
          "Câu trả lời ăn điểm tuyệt đối với Giám đốc Mua hàng: Không giảm được Đơn giá (单价) thì đàm phán Công nợ (账期 -月结30/60天) hoặc Cước vận chuyển (运费).",
      },
      {
        id: "dn-03",
        level: "HSK5",
        questionZh: "如果一批从深圳发往海防港的原材料在海关清关时延误，而车间明天就要停线待料，你怎么办？",
        questionPinyin: "Rúguǒ yì pī cóng Shēnzhèn fāwǎng Hǎifáng gǎng de yuáncáiliào zài hǎiguān qīngguān shí yánwù, ér chējiān míngtiān jiù yào tíngxiàn dàiliào, nǐ zěnmebàn?",
        questionVi: "Nếu một lô nguyên liệu gửi từ Thâm Quyến về cảng Hải Phòng bị trễ khi thông quan hải quan, mà xưởng sản xuất ngày mai đã sắp phải dừng chuyền chờ nguyên liệu, bạn làm thế nào?",
        answerZh:
          "面对停线风险，我会立即启动应急预案：首先与报关行核实卡单原因，看是缺少原产地证Form E还是HS编码争议，第一时间补齐单证；其次，同步联系生管部门（PMC）调整排产计划，或向越南本地同行及备用供应商紧急调拨小批量现货应急；最后在货物放行后安排专车直送工厂，并在事后复盘优化安全库存。",
        answerPinyin:
          "Miànduì tíngxiàn fēngxiǎn, wǒ huì lìjí qǐdòng yìngjí yù'àn: Shǒuxiān yǔ bàoguānháng héshí kǎdān yuányīn, kàn shì quēshǎo yuánchǎndìzhèng Form E háishi HS biānmǎ zhēngyì, dì-yī shíjiān bǔqí dānzhèng; qícì, tóngbù liánxì shēngguǎn bùmén (PMC) tiáozhěng páichǎn jìhuà, huò xiàng Yuènán běndì tóngháng jí bèiyòng gōngyìngshāng jǐnjí diàobō xiǎo pīliàng xiànhuò yìngjí; zuìhòu zài huòwù fàngxíng hòu ānpái zhuānchē zhísòng gōngchǎng, bìng zài shìhòu fùpán yōuhuà ānquán kùcún.",
        answerVi:
          "Trước nguy cơ dừng chuyền (停线), tôi sẽ lập tức kích hoạt phương án khẩn cấp: Đầu tiên làm việc ngay với đại lý hải quan để xác minh nguyên nhân kẹt tờ khai là do thiếu C/O Form E hay vướng mã HS để bổ sung chứng từ ngay lập tức; Thứ hai, đồng thời báo bộ phận Kế hoạch sản xuất (PMC) điều chỉnh lịch chạy chuyền hoặc调 động khẩn cấp một lượng nhỏ hàng có sẵn từ nhà cung cấp dự phòng tại Việt Nam; Cuối cùng ngay khi hàng thông quan sẽ thuê xe riêng chạy thẳng về nhà máy, và sau đó đánh giá lại để tối ưu tồn kho an toàn (安全库存).",
        keyVocab: [
          { hanzi: "停线待料", pinyin: "tíngxiàn dàiliào", meaningVi: "dừng dây chuyền sản xuất vì chờ nguyên liệu" },
          { hanzi: "报关行", pinyin: "bàoguānháng", meaningVi: "đại lý khai báo hải quan / forwarder" },
          { hanzi: "安全库存", pinyin: "ānquán kùcún", meaningVi: "tồn kho an toàn (safety stock)" },
        ],
        tipsVi:
          "Trong nhà máy sản xuất, '停线' (dừng chuyền) là điều tối kỵ nhất. Nhắc tới PMC (生管), 报关行 và 安全库存 chứng tỏ bạn là người có kinh nghiệm thực tế.",
      },
      {
        id: "dn-04",
        level: "HSK6",
        questionZh: "如果应聘总经理助理或现场翻译，当中国主管和越南员工在车间发生误会甚至争执时，你如何协调？",
        questionPinyin: "Rúguǒ yìngpìn zǒngjīnglǐ zhùlǐ huò xiànchǎng fānyì, dāng Zhōngguó zhǔguǎn hé Yuènán yuángōng zài chējiān fāshēng wùhuì shènzhì zhēngzhí shí, nǐ rúhé xiétiáo?",
        questionVi: "Nếu ứng tuyển Trợ lý Tổng giám đốc hoặc Phiên dịch hiện trường, khi quản lý người Trung Quốc và công nhân Việt Nam xảy ra hiểu lầm hoặc tranh cãi dưới xưởng, bạn điều phối thế nào?",
        answerZh:
          "作为沟通桥梁，我绝不会直接翻译情绪化的气话而激化矛盾。我会先安抚双方情绪，把焦点拉回工作问题本身：在翻译时进行“柔性转化”，客观传达中国主管对产量与品质的标准要求，同时向主管解释越南员工遇到的实际操作困难。事后我会协助制定双语标准作业指导书（SOP），从源头减少沟通摩擦。",
        answerPinyin:
          "Zuòwéi gōutōng qiáoliáng, wǒ jué búhuì zhíjiē fānyì qíngxùhuà de qìhuà ér jīhuà máodùn. Wǒ huì xiān ānfǔ shuāngfāng qíngxù, bǎ jiāodiǎn lāhuí gōngzuò wèntí běnshēn: zài fānyì shí jìnxíng “róuxìng zhuǎnhuà”, kèguān chuándá Zhōngguó zhǔguǎn duì chǎnliàng yǔ pǐnzhì de biāozhǔn yāoqiú, tóngshí xiàng zhǔguǎn jiěshì Yuènán yuángōng yùdào de shíjì cāozuò kùnnan. Shìhòu wǒ huì xiézhù zhìdìng shuāngyǔ biāozhǔn zuòyè zhǐdǎoshū (SOP), cóng yuántóu jiǎnshǎo gōutōng mócā.",
        answerVi:
          "Là cầu nối giao tiếp, tôi tuyệt đối không dịch nguyên xi những lời nóng giận mang tính cảm xúc làm gay gắt thêm mâu thuẫn. Tôi sẽ trấn an cảm xúc hai bên trước, kéo trọng tâm quay về bản thân vấn đề công việc: khi dịch sẽ 'chuyển hóa mềm mỏng', truyền đạt khách quan yêu cầu tiêu chuẩn về sản lượng và chất lượng của sếp Trung, đồng thời giải thích cho sếp hiểu khó khăn thao tác thực tế mà công nhân Việt đang gặp. Sau đó tôi sẽ hỗ trợ xây dựng Quy trình thao tác chuẩn song ngữ (SOP) để giảm va chạm giao tiếp từ gốc.",
        keyVocab: [
          { hanzi: "激化矛盾", pinyin: "jīhuà máodùn", meaningVi: "làm mâu thuẫn trở nên gay gắt" },
          { hanzi: "柔性转化", pinyin: "róuxìng zhuǎnhuà", meaningVi: "chuyển hóa mềm mỏng / khéo léo" },
          { hanzi: "标准作业指导书", pinyin: "biāozhǔn zuòyè zhǐdǎoshū", meaningVi: "hướng dẫn thao tác chuẩn (SOP)" },
        ],
        tipsVi:
          "Các ông chủ Trung Quốc sang Việt Nam mở xưởng cần nhất một người trợ lý biết 'hóa giải xung đột văn hóa' chứ không phải cái máy dịch từng chữ.",
      },
      {
        id: "dn-05",
        level: "HSK5",
        questionZh: "中资企业工作节奏快，有时需要配合国内总部进度加班，你对此怎么看？",
        questionPinyin: "Zhōngzī qǐyè gōngzuò jiézòu kuài, yǒushí xūyào pèihé guónèi zǒngbù jìndù jiābān, nǐ duì cǐ zěnme kàn?",
        questionVi: "Doanh nghiệp Trung Quốc có nhịp độ làm việc nhanh, đôi khi cần tăng ca để phối hợp tiến độ với tổng công ty bên Trung Quốc, bạn nhìn nhận việc này thế nào?",
        answerZh:
          "我非常理解跨国制造业的运作模式。首先，在日常工作中我会借助ERP系统和数字化表格提高效率，尽量在工作时间内高质高效完成任务，避免低效加班；其次，当遇到新项目上线、总部盘点或紧急出货等关键节点需要加班时，我完全愿意全力配合团队，确保项目按期交付。",
        answerPinyin:
          "Wǒ fēicháng lǐjiě kuàguó zhìzàoyè de yùnzuò móshì. Shǒuxiān, zài rìcháng gōngzuò zhōng wǒ huì jièzhù ERP xìtǒng hé shùzìhuà biǎogé tígāo xiàolǜ, jǐnliàng zài gōngzuò shíjiān nèi gāozhì gāoxiào wánchéng rènwu, bìmiǎn dīxiào jiābān; qícì, dāng yùdào xīn xiàngmù shàngxiàn, zǒngbù pándiǎn huò jǐnjí chūhuò děng guānjiàn jiédiǎn xūyào jiābān shí, wǒ wánquán yuànyì quánlì pèihé tuánduì, quèbǎo xiàngmù ànqī jiāofù.",
        answerVi:
          "Tôi rất hiểu mô hình vận hành của ngành sản xuất đa quốc gia. Trước hết, trong công việc hàng ngày tôi sẽ tận dụng hệ thống ERP và bảng biểu số hóa để nâng cao hiệu suất, cố gắng hoàn thành nhiệm vụ với chất lượng và tốc độ cao ngay trong giờ làm, tránh tăng ca kém hiệu quả; Thứ hai, vào các mốc quan trọng như chạy dự án mới, kiểm kê với tổng bộ hay xuất hàng gấp cần tăng ca, tôi hoàn toàn sẵn sàng phối hợp hết mình cùng đội ngũ để đảm bảo bàn giao đúng hạn.",
        keyVocab: [
          { hanzi: "高质高效", pinyin: "gāozhì gāoxiào", meaningVi: "chất lượng cao và hiệu suất cao" },
          { hanzi: "关键节点", pinyin: "guānjiàn jiédiǎn", meaningVi: "mốc thời gian / giai đoạn then chốt" },
          { hanzi: "按期交付", pinyin: "ànqī jiāofù", meaningVi: "bàn giao đúng thời hạn" },
        ],
        tipsVi:
          "Trả lời khéo léo 2 vế: Bình thường làm việc năng suất cao để không tăng ca vô ích (避免低效加班), nhưng vào giai đoạn nước rút (关键节点) luôn sẵn sàng chiến đấu cùng công ty.",
      },
      {
        id: "dn-06",
        level: "HSK6",
        questionZh: "你对国际贸易术语（Incoterms）以及中越清关单证了解多少？",
        questionPinyin: "Nǐ duì guójì màoyì shùyǔ (Incoterms) yǐjí Zhōng-Yuè qīngguān dānzhèng liǎojiě duōshao?",
        questionVi: "Bạn hiểu biết tới đâu về các điều kiện thương mại quốc tế (Incoterms) cũng như bộ chứng từ thông quan Trung - Việt?",
        answerZh:
          "我非常熟悉EXW、FOB、CIF和DDP等常用贸易术语的成本与风险划分。在中越进出口实操中，我能独立审核商业发票（CI）、装箱单（PL）、海运提单或陆运运单，并重点核对Form E东盟原产地证的货物描述、HS编码及发票号是否做到“单单一致、单证相符”，确保顺利享受关税减免。",
        answerPinyin:
          "Wǒ fēicháng shúxī EXW, FOB, CIF hé DDP děng chángyòng màoyì shùyǔ de chéngběn yǔ fēngxiǎn huàfēn. Zài Zhōng-Yuè jìnchūkǒu shícāo zhōng, wǒ néng dúlì shěnhé shāngyè fāpiào (CI), zhuāngxiāngdān (PL), hǎiyùn tídān huò lùyùn yùndān, bìng zhòngdiǎn héduì Form E Dōngméng yuánchǎndìzhèng de huòwù miáoshù, HS biānmǎ jí fāpiàohào shìfǒu zuòdào “dāndān yízhì, dānzhèng xiāngfú”, quèbǎo shùnlì xiǎngshòu guānshuì jiǎnmiǎn.",
        answerVi:
          "Tôi nắm rất vững cách phân chia chi phí và rủi ro của các điều kiện thương mại thông dụng như EXW, FOB, CIF và DDP. Trong nghiệp vụ xuất nhập khẩu Trung - Việt thực tế, tôi có thể độc lập kiểm duyệt Commercial Invoice, Packing List, vận đơn đường biển hoặc đường bộ, đặc biệt tập trung đối chiếu mô tả hàng hóa, mã HS và số hóa đơn trên C/O Form E sao cho đạt chuẩn 'chứng từ khớp nhau hoàn toàn' (单单一致、单证相符), đảm bảo hưởng ưu đãi miễn giảm thuế quan thuận lợi.",
        keyVocab: [
          { hanzi: "贸易术语", pinyin: "màoyì shùyǔ", meaningVi: "điều kiện thương mại quốc tế (Incoterms)" },
          { hanzi: "东盟原产地证", pinyin: "Dōngméng yuánchǎndìzhèng", meaningVi: "Chứng nhận xuất xứ ASEAN (C/O Form E)" },
          { hanzi: "单单一致", pinyin: "dāndān yízhì", meaningVi: "các chứng từ đồng nhất 100% với nhau" },
        ],
        tipsVi:
          "Nói ra cụm từ chuyên ngành ngoại thương '单单一致、单证相符' (các chứng từ khớp nhau, chứng từ khớp thực tế) sẽ khiến HR và Giám đốc XNK đánh giá bạn là dân chuyên nghiệp thực thụ.",
      },
      {
        id: "dn-07",
        level: "HSK5",
        questionZh: "你觉得自己最大的优势和不足分别是什么？",
        questionPinyin: "Nǐ juéde zìjǐ zuì dà de yōushì hé bùzú fēnbié shì shénme?",
        questionVi: "Bạn thấy ưu điểm lớn nhất và điểm còn thiếu sót của bản thân lần lượt là gì?",
        answerZh:
          "我的最大优势是“懂语言更懂业务”：不仅汉语听说读写流利，还能熟练使用Excel数据透视表与ERP系统进行采购成本分析。至于不足之处，由于我之前主要负责电子元器件采购，对贵司所在的新能源光伏辅材行业了解还不够深入，但我已经在研读贵司的产品手册，有信心在一个月内补齐行业知识。",
        answerPinyin:
          "Wǒ de zuì dà yōushì shì “dǒng yǔyán gèng dǒng yèwù”: bùjǐn Hànyǔ tīng-shuō-dú-xiě liúlì, hái néng shúliàn shǐyòng Excel shùjù tòushìbiǎo yǔ ERP xìtǒng jìnxíng cǎigòu chéngběn fēnxī. Zhìyú bùzú zhī chù, yóuyú wǒ zhīqián zhǔyào fùzé diànzǐ yuánqìjiàn cǎigòu, duì guì sī suǒzài de xīnnéngyuán guāngfú fǔcái hángyè liǎojiě hái búgòu shēnrù, dàn wǒ yǐjīng zài yándú guì sī de chǎnpǐn shǒucè, yǒu xìnxīn zài yí gè yuè nèi bǔqí hángyè zhīshi.",
        answerVi:
          "Ưu điểm lớn nhất của tôi là 'giỏi ngôn ngữ và càng hiểu nghiệp vụ': không chỉ nghe nói đọc viết tiếng Trung lưu loát mà còn dùng thành thạo Pivot Table trong Excel và hệ thống ERP để phân tích chi phí thu mua. Về điểm thiếu sót, do trước đây tôi chủ yếu phụ trách thu mua linh kiện điện tử nên hiểu biết về ngành vật liệu phụ trợ điện mặt trời năng lượng mới của quý công ty chưa thật sâu, nhưng tôi đã bắt đầu nghiên cứu tài liệu sản phẩm của công ty và tự tin sẽ nắm trọn kiến thức ngành trong vòng 1 tháng.",
        keyVocab: [
          { hanzi: "懂语言更懂业务", pinyin: "dǒng yǔyán gèng dǒng yèwù", meaningVi: "biết ngoại ngữ và càng am hiểu nghiệp vụ" },
          { hanzi: "数据透视表", pinyin: "shùjù tòushìbiǎo", meaningVi: "bảng Pivot Table trong Excel" },
          { hanzi: "电子元器件", pinyin: "diànzǐ yuánqìjiàn", meaningVi: "linh kiện điện tử" },
        ],
        tipsVi:
          "Khẩu hiệu '懂语言更懂业务' là câu thần chú khi đi phỏng vấn doanh nghiệp Trung Quốc.",
      },
      {
        id: "dn-08",
        level: "HSK6",
        questionZh: "你上一份工作的薪资是多少？你对我们这个岗位的期望薪资是多少？",
        questionPinyin: "Nǐ shàng yí fèn gōngzuò de xīnzī shì duōshao? Nǐ duì wǒmen zhège gǎngwèi de qīwàng xīnzī shì duōshao?",
        questionVi: "Mức lương ở công ty cũ của bạn là bao nhiêu? Mức lương kỳ vọng của bạn cho vị trí này tại công ty chúng tôi là bao nhiêu?",
        answerZh:
          "我上一份工作的税后固定月薪是一千八百万越盾，加上绩效奖金和年终奖，年收入约合两亿四千万越盾。考虑到本岗位需要统筹整个越南工厂的海外采购并承担降本KPI，我期望的税后基本月薪在两千两百万到两千五百万越盾之间。当然，我也非常看重贵司的晋升空间与绩效激励机制。",
        answerPinyin:
          "Wǒ shàng yí fèn gōngzuò de shuìhòu gùdìng yuèxīn shì yìqiān bābǎi wàn Yuèdùn, jiāshàng jìxiào jiǎngjīn hé niánzhōngjiǎng, nián shōurù yuē hé liǎng yì sìqiān wàn Yuèdùn. Kǎolǜ dào běn gǎngwèi xūyào tǒngchóu zhěnggè Yuènán gōngchǎng de hǎiwài cǎigòu bìng chéngdān jiàngběn KPI, wǒ qīwàng de shuìhòu jīběn yuèxīn zài liǎngqiān liǎngbǎi wàn dào liǎngqiān wǔbǎi wàn Yuèdùn zhījiān. Dāngrán, wǒ yě fēicháng kànzhòng guì sī de jìnshēng kōngjiān yǔ jìxiào jīlì jīzhì.",
        answerVi:
          "Mức lương cứng sau thuế (Net) ở công ty cũ của tôi là 18 triệu VNĐ/tháng, cộng thêm thưởng hiệu suất và thưởng cuối năm thì tổng thu nhập năm khoảng 240 triệu VNĐ. Xét thấy vị trí này cần điều phối toàn bộ mảng thu mua nước ngoài của nhà máy tại Việt Nam và gánh KPI giảm chi phí, mức lương cơ bản sau thuế tôi kỳ vọng nằm trong khoảng 22 đến 25 triệu VNĐ. Tất nhiên, tôi cũng rất coi trọng lộ trình thăng tiến và cơ chế thưởng hiệu suất của quý công ty.",
        keyVocab: [
          { hanzi: "税后月薪", pinyin: "shuìhòu yuèxīn", meaningVi: "lương tháng sau thuế (lương Net)" },
          { hanzi: "绩效奖金", pinyin: "jìxiào jiǎngjīn", meaningVi: "thưởng hiệu suất công việc (KPI bonus)" },
          { hanzi: "年终奖", pinyin: "niánzhōngjiǎng", meaningVi: "thưởng cuối năm / lương tháng 13+" },
        ],
        tipsVi:
          "Luôn nói rõ đơn vị tiền tệ (越盾 - VNĐ hay 人民币 - RMB) và phân biệt rõ 税前 (Gross) hay 税后 (Net), kèm theo 绩效奖金 (thưởng KPI).",
      },
      {
        id: "dn-09",
        level: "HSK7",
        questionZh: "在跨国采购中，如何防范供应商串标或吃回扣等合规风险？",
        questionPinyin: "Zài kuàguó cǎigòu zhōng, rúhé fángfàn gōngyìngshāng chuànbiāo huò chī huíkòu děng héguī fēngxiǎn?",
        questionVi: "Trong thu mua đa quốc gia, làm thế nào để phòng ngừa rủi ro thông thầu giữa các nhà cung cấp hoặc nhận hoa hồng ngầm (kickback)?",
        answerZh:
          "采购廉洁是企业的生命线。在制度上，我坚持推行“阳光采购”：所有大额订单必须经过至少三家独立供应商密封比价，并实现寻源、定价与验收岗位分离；同时通过企查查或天眼查核实供应商股权关联，防止围标串标。我本人也严格遵守职业道德与反商业贿赂协议，确保每一笔订单经得起审计。",
        answerPinyin:
          "Cǎigòu liánjié shì qǐyè de shēngmìngxiàn. Zài zhìdù shàng, wǒ jiānchí tuīxíng “yángguāng cǎigòu”: suǒyǒu dà'é dìngdān bìxū jīngguò zhìshǎo sān jiā dúlì gōngyìngshāng mìfēng bǐjià, bìng shíxiàn xúnyuán, dìngjià yǔ yànshōu gǎngwèi fēnlí; tóngshí tōngguò Qǐcháchá huò Tiānyǎnchá héshí gōngyìngshāng gǔquán guānlián, fángzhǐ wéibiāo chuànbiāo. Wǒ běnrén yě yángé zūnshǒu zhíyè dàodé yǔ fǎn shāngyè huìlù xiéyì, quèbǎo měi yì bǐ dìngdān jīngdéqǐ shěnjì.",
        answerVi:
          "Sự liêm chính trong thu mua là mạch sống của doanh nghiệp. Về mặt quy chế, tôi kiên trì thực hiện 'thu mua minh bạch': mọi đơn hàng giá trị lớn đều phải qua báo giá niêm phong của ít nhất 3 nhà cung cấp độc lập, đồng thời tách biệt khâu tìm nguồn, chốt giá và nghiệm thu; bên cạnh đó dùng Qichacha hoặc Tianyancha để kiểm tra quan hệ cổ phần giữa các nhà cung cấp nhằm chống quân xanh quân đỏ thông thầu. Bản thân tôi cũng tuân thủ nghiêm ngặt đạo đức nghề nghiệp và thỏa thuận chống hối lộ thương mại, đảm bảo mỗi đơn hàng đều vững vàng trước kiểm toán.",
        keyVocab: [
          { hanzi: "阳光采购", pinyin: "yángguāng cǎigòu", meaningVi: "thu mua minh bạch công khai" },
          { hanzi: "围标串标", pinyin: "wéibiāo chuànbiāo", meaningVi: "quân xanh quân đỏ thông thầu" },
          { hanzi: "反商业贿赂", pinyin: "fǎn shāngyè huìlù", meaningVi: "chống hối lộ / hoa hồng ngầm thương mại" },
        ],
        tipsVi:
          "Ông chủ Trung Quốc sợ nhất nhân viên thu mua ăn hoa hồng (吃回扣) hoặc nhà cung cấp dùng công ty sân sau thông thầu. Nhắc tới công cụ tra cứu doanh nghiệp Trung Quốc như 企查查 (Qichacha) / 天眼查 (Tianyancha) và '阳光采购' sẽ tạo niềm tin tuyệt đối.",
      },
    ],
  },
  {
    id: "visa-du-hoc",
    titleVi: "Phỏng vấn Visa Du học & Thương mại Trung Quốc",
    titleZh: "中国留学签证（X1/X2）与商务签证（M）面谈",
    titlePinyin: "Zhōngguó Liúxué yǔ Shāngwù Qiānzhèng Miàntán",
    subtitleVi:
      "8 câu hỏi xác minh hồ sơ tại Trung tâm Dịch vụ Thị thực Trung Quốc / Đại sứ quán và Hải quan cửa khẩu khi xin Visa Du học (X1/X2) và Visa Công tác Thương mại (M).",
    badgeText: "HSK 2–6 · 8 câu hỏi trọng tâm",
    questions: [
      {
        id: "vs-01",
        level: "HSK2",
        questionZh: "你这次申请去中国的目的是什么？申请的是哪种签证？",
        questionPinyin: "Nǐ zhè cì shēnqǐng qù Zhōngguó de mùdì shì shénme? Shēnqǐng de shì nǎ zhǒng qiānzhèng?",
        questionVi: "Mục đích xin sang Trung Quốc lần này của bạn là gì? Bạn xin loại visa nào?",
        answerZh:
          "我这次去中国是为了到上海复旦大学攻读汉语言文学本科专业，学习期限为四年，所以我申请的是X1长期留学签证。",
        answerPinyin:
          "Wǒ zhè cì qù Zhōngguó shì wèile dào Shànghǎi Fùdàn Dàxué gōngdú Hànyǔyán Wénxué běnkē zhuānyè, xuéxí qīxiàn wéi sì nián, suǒyǐ wǒ shēnqǐng de shì X yī chángqī liúxué qiānzhèng.",
        answerVi:
          "Lần này tôi sang Trung Quốc để theo học chương trình Cử nhân ngành Ngôn ngữ & Văn học Trung Quốc tại Đại học Phục Đán (Thượng Hải), thời hạn học là 4 năm, vì vậy tôi xin visa du học dài hạn X1.",
        keyVocab: [
          { hanzi: "长期留学签证", pinyin: "chángqī liúxué qiānzhèng", meaningVi: "visa du học dài hạn (>180 ngày - X1)" },
          { hanzi: "学习期限", pinyin: "xuéxí qīxiàn", meaningVi: "thời hạn học tập" },
          { hanzi: "汉语言文学", pinyin: "Hànyǔyán Wénxué", meaningVi: "ngành Ngôn ngữ & Văn học Trung Quốc" },
        ],
        tipsVi:
          "Phân biệt rõ: Học trên 180 ngày là Visa X1 (sau khi nhập cảnh 30 ngày phải đổi sang 居留许可 - Giấy phép cư trú); học dưới 180 ngày là Visa X2.",
      },
      {
        id: "vs-02",
        level: "HSK3",
        questionZh: "请出示你的录取通知书和JW201或JW202表原件。",
        questionPinyin: "Qǐng chūshì nǐ de lùqǔ tōngzhīshū hé JW201 huò JW202 biǎo yuánjiàn.",
        questionVi: "Vui lòng xuất trình Giấy báo trúng tuyển và bản gốc biểu mẫu JW201 hoặc JW202 của bạn.",
        answerZh:
          "好的，这是我的大学录取通知书原件，还有《外国留学人员来华确认表》（JW202表）以及体检记录验证证明，请您过目。",
        answerPinyin:
          "Hǎo de, zhè shì wǒ de dàxué lùqǔ tōngzhīshū yuánjiàn, háiyǒu 《Wàiguó Liúxué Rényuán Láihuá Quèrènbiǎo》 (JW202 biǎo) yǐjí tǐjiǎn jìlù yànzhèng zhèngmíng, qǐng nín guòmù.",
        answerVi:
          "Vâng ạ, đây là bản gốc Giấy báo trúng tuyển đại học của tôi, cùng với 'Biểu xác nhận lưu học sinh nước ngoài đến Trung Quốc' (Mẫu JW202) và Giấy khám sức khỏe, xin ngài kiểm tra.",
        keyVocab: [
          { hanzi: "录取通知书", pinyin: "lùqǔ tōngzhīshū", meaningVi: "giấy báo trúng tuyển / nhập học" },
          { hanzi: "确认表", pinyin: "quèrènbiǎo", meaningVi: "biểu xác nhận thị thực JW201/JW202" },
          { hanzi: "体检记录", pinyin: "tǐjiǎn jìlù", meaningVi: "hồ sơ khám sức khỏe du học" },
        ],
        tipsVi:
          "Học bổng Chính phủ CSC dùng mẫu JW201; học bổng trường/tự túc dùng mẫu JW202 (nay thường cấp dưới dạng điện tử có mã QR xác thực).",
      },
      {
        id: "vs-03",
        level: "HSK4",
        questionZh: "你在华留学期间的学费和生活费由谁来承担？有资金证明吗？",
        questionPinyin: "Nǐ zàihuá liúxué qījiān de xuéfèi hé shēnghuófèi yóu shéi lái chéngdān? Yǒu zījīn zhèngmíng ma?",
        questionVi: "Học phí và sinh hoạt phí trong thời gian bạn du học tại Trung Quốc do ai chi trả? Có giấy chứng minh tài chính không?",
        answerZh:
          "我已经获得了全额奖学金，免除了学费、住宿费并每月发放生活津贴。此外，我父母有稳定的经商收入，这是银行开具的二十万人民币存款冻结证明，足以保障我在中国的全部开销。",
        answerPinyin:
          "Wǒ yǐjīng huòdé le quán'é jiǎngxuéjīn, miǎnchú le xuéfèi, zhùsùfèi bìng měi yuè fāfàng shēnghuó jīntiē. Cǐwài, wǒ fùmǔ yǒu wěndìng de jīngshāng shōurù, zhè shì yínháng kāijù de èrshí wàn Rénmínbì cúnkuǎn dòngjié zhèngmíng, zúyǐ bǎozhàng wǒ zài Zhōngguó de quánbù kāixiāo.",
        answerVi:
          "Tôi đã nhận được học bổng toàn phần, được miễn học phí, phí ký túc xá và được cấp trợ cấp sinh hoạt hàng tháng. Ngoài ra, bố mẹ tôi có thu nhập kinh doanh ổn định, đây là giấy xác nhận sổ tiết kiệm phong tỏa tương đương 200.000 Nhân dân tệ do ngân hàng cấp, đủ đảm bảo toàn bộ chi tiêu của tôi tại Trung Quốc.",
        keyVocab: [
          { hanzi: "全额奖学金", pinyin: "quán'é jiǎngxuéjīn", meaningVi: "học bổng toàn phần" },
          { hanzi: "生活津贴", pinyin: "shēnghuó jīntiē", meaningVi: "trợ cấp sinh hoạt phí hàng tháng" },
          { hanzi: "存款证明", pinyin: "cúnkuǎn zhèngmíng", meaningVi: "giấy xác nhận số dư sổ tiết kiệm" },
        ],
        tipsVi:
          "Chứng minh tài chính rõ ràng giúp loại bỏ hoàn toàn nghi ngờ sang lao động bất hợp pháp (非法务工).",
      },
      {
        id: "vs-04",
        level: "HSK4",
        questionZh: "持学生签证在中国学习期间，你可以出去打工兼职吗？",
        questionPinyin: "Chí xuésheng qiānzhèng zài Zhōngguó xuéxí qījiān, nǐ kěyǐ chūqù dǎgōng jiānzhí ma?",
        questionVi: "Khi giữ visa du học học tập tại Trung Quốc, bạn có được phép ra ngoài đi làm thêm không?",
        answerZh:
          "我非常清楚中国的出入境管理法规：外国留学生未经学校和公安机关出入境管理部门批准，严禁在校外非法打工。我来中国的首要任务是全心投入学业；若需勤工助学或实习，我一定会按规定向学校国际学生办公室和出入境管理局申请居留许可加注。",
        answerPinyin:
          "Wǒ fēicháng qīngchu Zhōngguó de chūrùjìng guǎnlǐ fǎguī: wàiguó liúxuéshēng wèijīng xuéxiào hé gōng'ān jīguān chūrùjìng guǎnlǐ bùmén pīzhǔn, yánjìn zài xiàowài fēifǎ dǎgōng. Wǒ lái Zhōngguó de shǒuyào rènwu shì quánxīn tóurù xuéyè; ruò xū qíngōng-zhùxué huò shíxí, wǒ yídìng huì àn guīdìng xiàng xuéxiào guójì xuésheng bàngōngshì hé chūrùjìng guǎnlǐjú shēnqǐng jūliú xǔkě jiāzhù.",
        answerVi:
          "Tôi nắm rất rõ quy định pháp luật quản lý xuất nhập cảnh của Trung Quốc: lưu học sinh nước ngoài khi chưa được nhà trường và cơ quan quản lý xuất nhập cảnh công an phê duyệt thì nghiêm cấm đi làm thêm bất hợp pháp ngoài trường. Nhiệm vụ hàng đầu của tôi khi sang Trung Quốc là toàn tâm cho việc học; nếu cần thực tập, tôi nhất định sẽ xin đóng dấu ghi chú bổ sung trên giấy phép cư trú theo đúng quy định.",
        keyVocab: [
          { hanzi: "出入境管理", pinyin: "chūrùjìng guǎnlǐ", meaningVi: "quản lý xuất nhập cảnh" },
          { hanzi: "勤工助学", pinyin: "qíngōng-zhùxué", meaningVi: "vừa học vừa làm (hợp pháp theo quy định trường)" },
          { hanzi: "居留许可加注", pinyin: "jūliú xǔkě jiāzhù", meaningVi: "ghi chú bổ sung (thực tập) trên thẻ cư trú" },
        ],
        tipsVi:
          "Câu hỏi bẫy kinh điển của viên chức lãnh sự! Tuyệt đối không nói 'Tôi sẽ đi làm thêm kiếm tiền trang trải', phải khẳng định tuân thủ quy định xuất nhập cảnh.",
      },
      {
        id: "vs-05",
        level: "HSK5",
        questionZh: "你申请M字商务签证去广州和深圳，具体拜访哪家公司？行程是怎么安排的？",
        questionPinyin: "Nǐ shēnqǐng M zì shāngwù qiānzhèng qù Guǎngzhōu hé Shēnzhèn, jùtǐ bàifǎng nǎ jiā gōngsī? Xíngchéng shì zěnme ānpái de?",
        questionVi: "Bạn xin Visa Thương mại (ký hiệu M) đi Quảng Châu và Thâm Quyến, cụ thể là tới thăm công ty nào? Lịch trình sắp xếp ra sao?",
        answerZh:
          "我受广州白云电器设备有限公司的正式邀请，前往中国进行为期七天的商务考察。前三天在广州参加广交会并参观邀请方工厂，检验我们采购的自动化包装设备；后四天前往深圳与两家配件供应商洽谈明年的年度供货合同。这是邀请函、营业执照副本及往返机票酒店订单。",
        answerPinyin:
          "Wǒ shòu Guǎngzhōu Báiyún Diànqì Shèbèi Yǒuxiàn Gōngsī de zhèngshì yāoqǐng, qiánwǎng Zhōngguó jìnxíng wéiqī qī tiān de shāngwù kǎochá. Qián sān tiān zài Guǎngzhōu cānjiā Guǎngjiāohuì bìng cānguān yāoqǐngfāng gōngchǎng, jiǎnyàn wǒmen cǎigòu de zìdònghuà bāozhuāng shèbèi; hòu sì tiān qiánwǎng Shēnzhèn yǔ liǎng jiā pèijiàn gōngyìngshāng qiàtán míngnián de niándù gōnghuò hétong. Zhè shì yāoqǐnghán, yíngyè zhízhào fùběn jí wǎngfǎn jīpiào jiǔdiàn dìngdān.",
        answerVi:
          "Tôi nhận lời mời chính thức của Công ty TNHH Thiết bị Điện Bạch Vân Quảng Châu sang Trung Quốc khảo sát thương mại trong 7 ngày. 3 ngày đầu ở Quảng Châu tham dự Hội chợ Canton Fair và thăm nhà máy của bên mời, nghiệm thu thiết bị đóng gói tự động mà chúng tôi đặt mua; 4 ngày sau sang Thâm Quyến đàm phán hợp đồng cung ứng năm tới với 2 nhà cung cấp linh kiện. Đây là thư mời, bản sao giấy phép kinh doanh cùng vé máy bay khứ hồi và booking khách sạn.",
        keyVocab: [
          { hanzi: "商务考察", pinyin: "shāngwù kǎochá", meaningVi: "khảo sát thương mại / công tác" },
          { hanzi: "广交会", pinyin: "Guǎngjiāohuì", meaningVi: "Hội chợ Xuất nhập khẩu Quảng Châu (Canton Fair)" },
          { hanzi: "营业执照副本", pinyin: "yíngyè zhízhào fùběn", meaningVi: "bản sao giấy phép đăng ký kinh doanh" },
        ],
        tipsVi:
          "Khi phỏng vấn Visa Thương mại M hoặc nhập cảnh hải quan, câu trả lời về tên công ty mời, lịch trình từng ngày và booking khách sạn phải khớp 100% với Thư mời (邀请函).",
      },
      {
        id: "vs-06",
        level: "HSK5",
        questionZh: "你们越南公司和中国的邀请公司是什么关系？之前有过贸易往来吗？",
        questionPinyin: "Nǐmen Yuènán gōngsī hé Zhōngguó de yāoqǐng gōngsī shì shénme guānxì? Zhīqián yǒuguò màoyì wǎnglái ma?",
        questionVi: "Công ty Việt Nam của bạn và công ty mời bên Trung Quốc có mối quan hệ gì? Trước đây đã từng có giao dịch thương mại chưa?",
        answerZh:
          "我们是长期的合作伙伴关系。过去两年里，我们公司从该工厂进口了六个标准柜的机械零件，总贸易额超过一百万人民币。这是我们双方之前签署的采购合同、海关报关单以及银行国际电汇（T/T）水单复印件。",
        answerPinyin:
          "Wǒmen shì chángqī de hézuò huǒbàn guānxì. Guòqù liǎng nián lǐ, wǒmen gōngsī cóng gāi gōngchǎng jìnkǒu le liù gè biāozhǔnguì de jīxiè língjiàn, zǒng màoyì'é chāoguò yìbǎi wàn Rénmínbì. Zhè shì wǒmen shuāngfāng zhīqián qiānshǔ de cǎigòu hétong, hǎiguān bàoguāndān yǐjí yínháng guójì diànhuì (T/T) shuǐdān fùyìnjiàn.",
        answerVi:
          "Chúng tôi là đối tác hợp tác lâu dài. Trong 2 năm qua, công ty chúng tôi đã nhập khẩu 6 container tiêu chuẩn linh kiện cơ khí từ nhà máy này với tổng kim ngạch thương mại trên 1 triệu Nhân dân tệ. Đây là bản photo hợp đồng mua bán hai bên đã ký, tờ khai hải quan và điện chuyển tiền quốc tế ngân hàng (T/T).",
        keyVocab: [
          { hanzi: "贸易往来", pinyin: "màoyì wǎnglái", meaningVi: "giao dịch thương mại qua lại" },
          { hanzi: "海关报关单", pinyin: "hǎiguān bàoguāndān", meaningVi: "tờ khai hải quan" },
          { hanzi: "银行水单", pinyin: "yínháng shuǐdān", meaningVi: "chứng từ / biên lai chuyển tiền ngân hàng" },
        ],
        tipsVi:
          "Đưa ra được Tờ khai hải quan (报关单) hoặc Biên lai chuyển tiền quốc tế (银行水单) là bằng chứng thép chứng minh giao thương thật.",
      },
      {
        id: "vs-07",
        level: "HSK3",
        questionZh: "到达中国以后，你住在哪里？知道怎么办理住宿登记吗？",
        questionPinyin: "Dàodá Zhōngguó yǐhòu, nǐ zhù zài nǎlǐ? Zhīdào zěnme bànlǐ zhùsù dēngjì ma?",
        questionVi: "Sau khi tới Trung Quốc, bạn ở đâu? Có biết quy định đăng ký tạm trú không?",
        answerZh:
          "我已经预订了学校内的国际学生公寓二号楼。我知道根据规定，入住酒店由前台直接联网登记；如果住在校外公寓，必须在抵达后二十四小时内带护照去当地派出所办理临时住宿登记。",
        answerPinyin:
          "Wǒ yǐjīng yùdìng le xuéxiào nèi de guójì xuésheng gōngyù èr hào lóu. Wǒ zhīdào gēnjù guīdìng, rùzhù jiǔdiàn yóu qiántái zhíjiē liánwǎng dēngjì; rúguǒ zhù zài xiàowài gōngyù, bìxū zài dǐdá hòu èrshísì xiǎoshí nèi dài hùzhào qù dāngdì pàichūsuǒ bànlǐ línshí zhùsù dēngjì.",
        answerVi:
          "Tôi đã đặt trước Tòa số 2 Ký túc xá Sinh viên Quốc tế trong trường. Tôi biết theo quy định, nếu ở khách sạn lễ tân sẽ đăng ký nối mạng trực tiếp; còn nếu ở căn hộ ngoài trường thì bắt buộc trong vòng 24 giờ sau khi tới phải mang hộ chiếu ra đồn công an địa phương đăng ký tạm trú.",
        keyVocab: [
          { hanzi: "国际学生公寓", pinyin: "guójì xuésheng gōngyù", meaningVi: "ký túc xá sinh viên quốc tế" },
          { hanzi: "临时住宿登记", pinyin: "línshí zhùsù dēngjì", meaningVi: "đăng ký tạm trú tạm thời (trong 24h)" },
          { hanzi: "当地派出所", pinyin: "dāngdì pàichūsuǒ", meaningVi: "đồn công an địa phương" },
        ],
        tipsVi:
          "Hiểu rõ quy định đăng ký tạm trú 24h (24小时临时住宿登记) cho thấy bạn rất tôn trọng luật pháp sở tại.",
      },
      {
        id: "vs-08",
        level: "HSK6",
        questionZh: "持X1签证入境中国后，你需要在多长时间内去哪里换发居留许可？",
        questionPinyin: "Chí X yī qiānzhèng rùjìng Zhōngguó hòu, nǐ xūyào zài duō cháng shíjiān nèi qù nǎlǐ huànfā jūliú xǔkě?",
        questionVi: "Sau khi nhập cảnh Trung Quốc bằng visa X1, bạn cần đi đâu và trong thời gian bao lâu để đổi sang Giấy phép cư trú (Residence Permit)?",
        answerZh:
          "持X1签证入境后，该签证页本身只有三十天的有效期。我必须在入境之日起三十天内，先到学校报到并完成当地国际旅行卫生保健中心的体检验证，然后携带学校公函去市公安局出入境管理局申请换发学习类居留许可。",
        answerPinyin:
          "Chí X yī qiānzhèng rùjìng hòu, gāi qiānzhèngyè běnshēn zhǐyǒu sānshí tiān de yǒuxiàoqī. Wǒ bìxū zài rùjìng zhī rì qǐ sānshí tiān nèi, xiān dào xuéxiào bàodào bìng wánchéng dāngdì Guójì Lǚxíng Wèishēng Bǎojiàn Zhōngxīn de tǐjiǎn yànzhèng, ránhòu xiédài xuéxiào gōnghán qù Shì Gōng'ānjú Chūrùjìng Guǎnlǐjú shēnqǐng huànfā xuéxílèi jūliú xǔkě.",
        answerVi:
          "Sau khi nhập cảnh bằng visa X1, tờ thị thực đó chỉ có hiệu lực 30 ngày. Trong vòng 30 ngày kể từ ngày nhập cảnh, tôi bắt buộc phải tới trường nhập học, hoàn tất xác nhận khám sức khỏe tại Trung tâm Y tế Du lịch Quốc tế địa phương, sau đó mang công văn của trường tới Cục Quản lý Xuất nhập cảnh Công an Thành phố để xin đổi sang Giấy phép cư trú diện học tập.",
        keyVocab: [
          { hanzi: "入境之日起", pinyin: "rùjìng zhī rì qǐ", meaningVi: "kể từ ngày nhập cảnh" },
          { hanzi: "卫生保健中心", pinyin: "wèishēng bǎojiàn zhōngxīn", meaningVi: "trung tâm kiểm dịch y tế quốc tế" },
          { hanzi: "学习类居留许可", pinyin: "xuéxílèi jūliú xǔkě", meaningVi: "giấy phép cư trú diện du học" },
        ],
        tipsVi:
          "Rất nhiều tân du học sinh quên mốc 30 ngày đổi Visa X1 sang 居留许可 dẫn đến quá hạn cư trú (非法居留). Nắm rõ quy trình này giúp bạn tự tin 100%.",
      },
    ],
  },
  {
    id: "hskk",
    titleVi: "Thi vấn đáp HSKK (Sơ cấp – Trung cấp – Cao cấp)",
    titleZh: "HSKK汉语水平口语考试（初、中、高级）高分模板",
    titlePinyin: "HSKK Hànyǔ Shuǐpíng Kǒuyǔ Kǎoshì",
    subtitleVi:
      "9 đề thi nói chuẩn cấu trúc HSKK: Nghe nhắc lại & Trả lời ngắn (HSKK Sơ cấp), Mô tả tranh & Trả lời đoạn văn (HSKK Trung cấp), Bình luận quan điểm xã hội & Biện luận (HSKK Cao cấp).",
    badgeText: "HSK 2–9 · Sơ – Trung – Cao cấp",
    questions: [
      {
        id: "hskk-01",
        level: "HSK2",
        questionZh: "【HSKK初级·简答题】你平时周末喜欢做什么？和谁一起做？",
        questionPinyin: "[HSKK Chūjí · Jiǎndátí] Nǐ píngshí zhōumò xǐhuan zuò shénme? Hé shéi yìqǐ zuò?",
        questionVi: "[HSKK Sơ cấp · Trả lời câu hỏi] Cuối tuần bình thường bạn thích làm gì? Làm cùng với ai?",
        answerZh:
          "平时周末我最喜欢去公园跑步和看书。星期六上午我常常和好朋友一起去咖啡店练习说汉语，星期天晚上我会在家里帮妈妈做晚饭。这样的周末既开心又有意义。",
        answerPinyin:
          "Píngshí zhōumò wǒ zuì xǐhuan qù gōngyuán pǎobù hé kànshū. Xīngqīliù shàngwǔ wǒ chángcháng hé hǎo péngyou yìqǐ qù kāfēidiàn liànxí shuō Hànyǔ, xīngqītiān wǎnshang wǒ huì zài jiālǐ bāng māma zuò wǎnfàn. Zhèyàng de zhōumò jì kāixīn yòu yǒu yìyì.",
        answerVi:
          "Cuối tuần bình thường tôi thích nhất là đi chạy bộ ở công viên và đọc sách. Sáng thứ Bảy tôi thường cùng bạn thân ra quán cà phê luyện nói tiếng Trung, tối Chủ nhật tôi ở nhà giúp mẹ nấu bữa tối. Một cuối tuần như vậy vừa vui vừa ý nghĩa.",
        keyVocab: [
          { hanzi: "平时周末", pinyin: "píngshí zhōumò", meaningVi: "cuối tuần thông thường" },
          { hanzi: "练习说汉语", pinyin: "liànxí shuō Hànyǔ", meaningVi: "luyện nói tiếng Trung" },
          { hanzi: "既…又…", pinyin: "jì... yòu...", meaningVi: "vừa... vừa..." },
        ],
        tipsVi:
          "Ở phần trả lời câu hỏi HSKK Sơ cấp (mỗi câu 15–30 giây), hãy nói tối thiểu 3 câu: Câu mở đầu trả lời trực tiếp + Câu chi tiết (Thứ Bảy/Chủ nhật làm gì) + Câu cảm nghĩ kết thúc dùng '既…又…'.",
      },
      {
        id: "hskk-02",
        level: "HSK3",
        questionZh: "【HSKK初级·简答题】请介绍一下你最喜欢的一位老师或者朋友。",
        questionPinyin: "[HSKK Chūjí · Jiǎndátí] Qǐng jièshào yíxià nǐ zuì xǐhuan de yí wèi lǎoshī huòzhě péngyou.",
        questionVi: "[HSKK Sơ cấp · Trả lời câu hỏi] Hãy giới thiệu về một người thầy cô hoặc người bạn mà bạn yêu quý nhất.",
        answerZh:
          "我最喜欢的人是我的汉语老师王老师。她今年三十岁，不但讲课非常认真、有趣，而且对学生特别有耐心。每次我发音不准的时候，她都会笑着一遍一遍地帮我纠正。因为她，我越来越爱学中文了。",
        answerPinyin:
          "Wǒ zuì xǐhuan de rén shì wǒ de Hànyǔ lǎoshī Wáng lǎoshī. Tā jīnnián sānshí suì, búdàn jiǎngkè fēicháng rènzhēn, yǒuqù, érqiě duì xuésheng tèbié yǒu nàixīn. Měi cì wǒ fāyīn bù zhǔn de shíhou, tā dōu huì xiàozhe yíbiàn yíbiàn de bāng wǒ jiūzhèng. Yīnwèi tā, wǒ yuèláiyuè ài xué Zhōngwén le.",
        answerVi:
          "Người tôi yêu quý nhất là cô Vương, giáo viên tiếng Trung của tôi. Năm nay cô 30 tuổi, không những giảng bài vô cùng tận tâm, thú vị mà còn cực kỳ kiên nhẫn với học sinh. Mỗi lần tôi phát âm chưa chuẩn, cô đều mỉm cười sửa giúp tôi từng lần một. Nhờ có cô mà tôi ngày càng yêu việc học tiếng Trung hơn.",
        keyVocab: [
          { hanzi: "不但…而且…", pinyin: "búdàn... érqiě...", meaningVi: "không những... mà còn..." },
          { hanzi: "有耐心", pinyin: "yǒu nàixīn", meaningVi: "kiên nhẫn" },
          { hanzi: "纠正发音", pinyin: "jiūzhèng fāyīn", meaningVi: "sửa lỗi phát âm" },
        ],
        tipsVi:
          "Dùng cấu trúc ghép '不但…而且…' và '越来越…' sẽ giúp bài nói HSKK Sơ cấp đạt điểm tối đa về ngữ pháp.",
      },
      {
        id: "hskk-03",
        level: "HSK4",
        questionZh: "【HSKK中级·看图说话】图片里一个年轻人在地铁上看手机背单词。请结合图片编一个两分钟的故事或谈谈你的看法。",
        questionPinyin: "[HSKK Zhōngjí · Kàntú Shuōhuà] Túpiàn lǐ yí gè niánqīngrén zài dìtiě shàng kàn shǒujī bèi dāncí. Qǐng jiéhé túpiàn biān yí gè liǎng fēnzhōng de gùshi huò tántan nǐ de kànfǎ.",
        questionVi: "[HSKK Trung cấp · Mô tả tranh] Trong tranh là một bạn trẻ đang xem điện thoại học từ vựng trên tàu điện ngầm. Hãy kết hợp bức tranh kể một câu chuyện hoặc nêu cảm nghĩ trong 2 phút.",
        answerZh:
          "从这张图片中我们可以看到，一位年轻的上班族正坐在拥挤的地铁里，手里拿着智能手机，认真地背诵汉语单词。这让我想到了我的朋友小林。小林在一家中越贸易公司上班，平时工作特别忙，但他每天都利用上下班坐地铁的半个小时在手机软件上刷题、练听力。坚持了一年之后，他不仅顺利考过了HSK五级，还得到了升职加薪的机会。这张图告诉我们：时间就像海绵里的水，只要善于利用碎片化时间，就能积少成多，实现自己的目标。",
        answerPinyin:
          "Cóng zhè zhāng túpiàn zhōng wǒmen kěyǐ kàndào, yí wèi niánqīng de shàngbānzú zhèng zuò zài yōngjǐ de dìtiě lǐ, shǒulǐ názhe zhìnéng shǒujī, rènzhēn de bèisòng Hànyǔ dāncí. Zhè ràng wǒ xiǎngdào le wǒ de péngyou Xiǎo Lín. Xiǎo Lín zài yì jiā Zhōng-Yuè màoyì gōngsī shàngbān, píngshí gōngzuò tèbié máng, dàn tā měitiān dōu lìyòng shàng-xiàbān zuò dìtiě de bàn gè xiǎoshí zài shǒujī ruǎnjiàn shàng shuātí, liàn tīnglì. Jiānchí le yì nián zhīhòu, tā bùjǐn shùnlì kǎoguò le HSK wǔ jí, hái dédào le shēngzhí jiāxīn de jīhuì. Zhè zhāng tú gàosu wǒmen: shíjiān jiù xiàng hǎimián lǐ de shuǐ, zhǐyào shànyú lìyòng suìpiànhuà shíjiān, jiù néng jīshǎo-chéngduō, shíxiàn zìjǐ de mùbiāo.",
        answerVi:
          "Từ bức tranh này chúng ta có thể thấy một nhân viên văn phòng trẻ đang ngồi trên tàu điện ngầm đông đúc, tay cầm điện thoại thông minh chăm chú học thuộc từ vựng tiếng Trung. Hình ảnh này khiến tôi nhớ tới người bạn Tiểu Lâm của mình. Tiểu Lâm làm việc tại một công ty thương mại Trung - Việt, bình thường công việc rất bận nhưng ngày nào anh ấy cũng tận dụng 30 phút đi tàu điện ngầm lúc đi làm và tan làm để luyện đề, luyện nghe trên ứng dụng điện thoại. Sau một năm kiên trì, anh ấy không chỉ thi đỗ HSK 5 thuận lợi mà còn có cơ hội thăng chức tăng lương. Bức tranh này nhắn nhủ chúng ta: Thời gian giống như nước trong miếng bọt biển, chỉ cần khéo tận dụng thời gian phân mảnh thì sẽ tích tiểu thành đại, thực hiện được mục tiêu của mình.",
        keyVocab: [
          { hanzi: "上班族", pinyin: "shàngbānzú", meaningVi: "giới nhân viên văn phòng" },
          { hanzi: "碎片化时间", pinyin: "suìpiànhuà shíjiān", meaningVi: "thời gian rảnh vụn vặt / phân mảnh" },
          { hanzi: "积少成多", pinyin: "jīshǎo-chéngduō", meaningVi: "tích tiểu thành đại" },
        ],
        tipsVi:
          "Khung 4 bước giải mọi bài 看图说话 (Mô tả tranh) HSKK Trung cấp: 1. Mô tả trực quan (`从这张图片中我们可以看到…`) -> 2. Liên hệ câu chuyện nhân vật (`这让我想到了…`) -> 3. Diễn biến & Kết quả -> 4. Bài học rút ra (`这张图告诉我们…`).",
      },
      {
        id: "hskk-04",
        level: "HSK5",
        questionZh: "【HSKK中级·回答问题】现在越来越多人喜欢网上购物，你认为网购有哪些优点和缺点？",
        questionPinyin: "[HSKK Zhōngjí · Huídá Wèntí] Xiànzài yuèláiyuè duō rén xǐhuan wǎngshàng gòuwù, nǐ rènwéi wǎnggòu yǒu nǎxiē yōudiǎn hé quēdiǎn?",
        questionVi: "[HSKK Trung cấp · Trả lời câu hỏi] Hiện nay ngày càng nhiều người thích mua sắm trực tuyến, theo bạn mua hàng online có những ưu điểm và nhược điểm gì?",
        answerZh:
          "我认为网上购物是一把双刃剑，既有明显的优势，也存在一些不足。首先，网购最大的优点是方便快捷、选择丰富，我们足不出户就能在淘宝、京东或Shopee上对比几百家店铺的价格，而且送货上门非常省时。其次，直播带货和节日促销也能帮消费者省下不少钱。然而，网购也有缺点：比如看不到实物，收到的衣服可能存在色差或尺码不合；此外，过度沉迷刷购物软件还容易导致冲动消费。因此，我们应该理性网购，按需购买。",
        answerPinyin:
          "Wǒ rènwéi wǎngshàng gòuwù shì yì bǎ shuāngrènjiàn, jì yǒu míngxiǎn de yōushì, yě cúnzài yìxiē bùzú. Shǒuxiān, wǎnggòu zuì dà de yōudiǎn shì fāngbiàn kuàijié, xuǎnzé fēngfù, wǒmen zú-bù-chū-hù jiù néng zài Táobǎo, Jīngdōng huò Shopee shàng duìbǐ jǐbǎi jiā diànpù de jiàgé, érqiě sònghuò-shàngmén fēicháng shěngshí. Qícì, zhíbō dàihuò hé jiérì cùxiāo yě néng bāng xiāofèizhě shěngxià bùshǎo qián. Rán'ér, wǎnggòu yě yǒu quēdiǎn: bǐrú kànbudào shíwù, shōudào de yīfu kěnéng cúnzài sèchā huò chǐmǎ bùhé; cǐwài, guòdù chénmí shuā gòuwù ruǎnjiàn hái róngyì dǎozhì chōngdòng xiāofèi. Yīncǐ, wǒmen yīnggāi lǐxìng wǎnggòu, ànxū gòumǎi.",
        answerVi:
          "Theo tôi mua sắm trực tuyến là con dao hai lưỡi, vừa có ưu thế rõ rệt vừa tồn tại một số hạn chế. Trước hết, ưu điểm lớn nhất của mua hàng online là tiện lợi nhanh chóng, lựa chọn phong phú; chúng ta chẳng cần bước chân ra khỏi nhà cũng có thể so sánh giá của hàng trăm cửa hàng trên Taobao, JD hay Shopee, hơn nữa giao hàng tận nơi rất tiết kiệm thời gian. Thứ hai, livestream bán hàng và khuyến mãi lễ tết cũng giúp người tiêu dùng tiết kiệm kha khá. Tuy nhiên, mua sắm online cũng có nhược điểm: ví dụ không nhìn thấy hàng thật nên quần áo nhận về có thể bị lệch màu hoặc không vừa size; ngoài ra quá sa đà lướt app mua sắm còn dễ dẫn tới tiêu dùng bốc đồng. Vì vậy, chúng ta nên mua sắm lý trí, mua theo nhu cầu thực.",
        keyVocab: [
          { hanzi: "双刃剑", pinyin: "shuāngrènjiàn", meaningVi: "con dao hai lưỡi" },
          { hanzi: "足不出户", pinyin: "zú-bù-chū-hù", meaningVi: "chân không cần bước ra khỏi nhà" },
          { hanzi: "冲动消费", pinyin: "chōngdòng xiāofèi", meaningVi: "mua sắm / tiêu dùng bốc đồng" },
        ],
        tipsVi:
          "Khung lập luận 2 chiều cực hay cho HSKK Trung/Cao cấp: Mở bài `是一把双刃剑` -> Ưu điểm `首先… 其次…` -> Nhược điểm `然而…` -> Kết luận `因此，我们应该…`.",
      },
      {
        id: "hskk-05",
        level: "HSK5",
        questionZh: "【HSKK中级·回答问题】如果你有机会去中国旅游一周，你最想去哪个城市？为什么？",
        questionPinyin: "[HSKK Zhōngjí · Huídá Wèntí] Rúguǒ nǐ yǒu jīhuì qù Zhōngguó lǚyóu yì zhōu, nǐ zuì xiǎng qù nǎge chéngshì? Wèishénme?",
        questionVi: "[HSKK Trung cấp · Trả lời câu hỏi] Nếu có cơ hội đi du lịch Trung Quốc 1 tuần, bạn muốn đi thành phố nào nhất? Tại sao?",
        answerZh:
          "如果有一周的时间去中国旅游，我最想去的城市是杭州。中国有句古话叫“上有天堂，下有苏杭”。首先，我想去西湖边散步、坐游船，亲眼看看课本里学过的断桥和雷峰塔，品尝正宗的龙井茶与东坡肉。其次，杭州又是中国电子商务和移动支付之都，阿里巴巴的总部就在那里，出门甚至不需要带现金。这种千年历史文化与现代高科技完美融合的魅力，正是杭州最吸引我的地方。",
        answerPinyin:
          "Rúguǒ yǒu yì zhōu de shíjiān qù Zhōngguó lǚyóu, wǒ zuì xiǎng qù de chéngshì shì Hángzhōu. Zhōngguó yǒu jù gǔhuà jiào “shàng yǒu tiāntáng, xià yǒu Sū-Háng”. Shǒuxiān, wǒ xiǎng qù Xīhú biān sànbù, zuò yóuchuán, qīnyǎn kànkan kèběn lǐ xuéguò de Duànqiáo hé Léifēngtǎ, pǐncháng zhèngzōng de Lóngjǐngchá yǔ Dōngpōròu. Qícì, Hángzhōu yòu shì Zhōngguó diànzǐ shāngwù hé yídòng zhīfù zhī dū, Ālǐbābā de zǒngbù jiù zài nàlǐ, chūmén shènzhì bù xūyào dài xiànjīn. Zhè zhǒng qiānnián lìshǐ wénhuà yǔ xiàndài gāokējì wánměi rónghé de mèilì, zhèng shì Hángzhōu zuì xīyǐn wǒ de dìfang.",
        answerVi:
          "Nếu có thời gian 1 tuần đi du lịch Trung Quốc, thành phố tôi muốn đến nhất là Hàng Châu. Trung Quốc có câu tục ngữ xưa: 'Trên có thiên đàng, dưới có Tô - Hàng'. Trước hết, tôi muốn đi dạo bên Tây Hồ, đi thuyền du ngoạn, tận mắt ngắm nhìn Đoạn Kiều và Tháp Lôi Phong từng học trong sách giáo khoa, thưởng thức trà Long Tỉnh và thịt kho Đông Pha chính gốc. Thứ hai, Hàng Châu lại là kinh đô thương mại điện tử và thanh toán di động của Trung Quốc, trụ sở của Alibaba nằm ngay tại đó, ra đường thậm chí không cần mang tiền mặt. Sức hấp dẫn từ sự hòa quyện hoàn hảo giữa văn hóa lịch sử ngàn năm và công nghệ cao hiện đại chính là điều ở Hàng Châu cuốn hút tôi nhất.",
        keyVocab: [
          { hanzi: "上有天堂，下有苏杭", pinyin: "shàng yǒu tiāntáng, xià yǒu Sū-Háng", meaningVi: "trên có thiên đàng, dưới có Tô Châu - Hàng Châu" },
          { hanzi: "移动支付", pinyin: "yídòng zhīfù", meaningVi: "thanh toán di động" },
          { hanzi: "完美融合", pinyin: "wánměi rónghé", meaningVi: "hòa quyện hoàn hảo" },
        ],
        tipsVi:
          "Trích dẫn một câu tục ngữ/thành ngữ (`上有天堂，下有苏杭` hoặc `不到长城非好汉`) ở đầu bài nói giúp giám khảo chấm điểm ấn tượng cực cao.",
      },
      {
        id: "hskk-06",
        level: "HSK6",
        questionZh: "【HSKK高级·听后复述技巧】在HSKK高级第一部分“听后复述”中，如何把一段两百字的叙事短文完整流利地复述出来？",
        questionPinyin: "[HSKK Gāojí · Tīnghòu Fùshù] Zài HSKK Gāojí dì-yī bùfen “Tīnghòu Fùshù” zhōng, rúhé bǎ yí duàn liǎngbǎi zì de xùshì duǎnwén wánzhěng liúlì de fùshù chūlái?",
        questionVi: "[HSKK Cao cấp · Kỹ thuật Nghe & Thuật lại] Trong phần 1 'Nghe và thuật lại' của HSKK Cao cấp, làm thế nào để thuật lại trọn vẹn một đoạn văn tự sự 200 chữ?",
        answerZh:
          "这段故事讲述了一位老木匠在退休前为老板建造最后一栋房子的经历。老木匠因为知道这是最后一份工作，心里有些懈怠，不仅选用了次等木材，做工也十分敷衍。没想到房子完工那天，老板却把钥匙交给他，说这是送给他的退休礼物。老木匠顿时懊悔不已。这个故事深刻地提醒我们：做任何事情都应当善始善终、尽职尽责，因为我们今天的每一份敷衍，最终买单的往往是自己。",
        answerPinyin:
          "Zhè duàn gùshi jiǎngshù le yí wèi lǎo mùjiang zài tuìxiū qián wèi lǎobǎn jiànzào zuìhòu yí dòng fángzi de jīnglì. Lǎo mùjiang yīnwèi zhīdào zhè shì zuìhòu yí fèn gōngzuò, xīnlǐ yǒuxiē xièdài, bùjǐn xuǎnyòng le cìděng mùcái, zuògōng yě shífēn fūyǎn. Méi xiǎngdào fángzi wángōng nà tiān, lǎobǎn què bǎ yàoshi jiāogěi tā, shuō zhè shì sònggěi tā de tuìxiū lǐwù. Lǎo mùjiang dùnshí àohuǐ bùyǐ. Zhège gùshi shēnkè de tíxǐng wǒmen: zuò rènhé shìqing dōu yīngdāng shànshǐ-shànzhōng, jìnzhí-jìnzé, yīnwèi wǒmen jīntiān de měi yí fèn fūyǎn, zuìzhōng mǎidān de wǎngwǎng shì zìjǐ.",
        answerVi:
          "Câu chuyện này kể về trải nghiệm của một bác thợ mộc già khi xây dựng ngôi nhà cuối cùng cho ông chủ trước lúc nghỉ hưu. Bác thợ mộc vì biết đây là công việc cuối cùng nên trong lòng có phần chểnh mảng, không những chọn gỗ hạng hai mà tay nghề thi công cũng rất qua loa. Chẳng ngờ ngày ngôi nhà hoàn thiện, ông chủ lại trao chìa khóa cho bác và nói đây là món quà nghỉ hưu tặng bác. Bác thợ mộc lập tức hối hận khôn nguôi. Câu chuyện này nhắc nhở sâu sắc chúng ta rằng: Làm bất cứ việc gì cũng cần có đầu có cuối, tận tâm tận lực, bởi mỗi sự qua loa của chúng ta hôm nay, người phải trả giá cuối cùng thường chính là bản thân mình.",
        keyVocab: [
          { hanzi: "懈怠敷衍", pinyin: "xièdài fūyǎn", meaningVi: "chểnh mảng, làm qua loa chiếu lệ" },
          { hanzi: "懊悔不已", pinyin: "àohuǐ bùyǐ", meaningVi: "hối hận khôn nguôi" },
          { hanzi: "善始善终", pinyin: "shànshǐ-shànzhōng", meaningVi: "có đầu có cuối, làm trọn vẹn từ đầu tới cuối" },
        ],
        tipsVi:
          "Mẹo tốc ký 听后复述 HSKK Cao cấp: Ghi nhanh 5 yếu tố 人物 (Nhân vật) + 起因 (Nguyên nhân) + 经过 (Diễn biến) + 转折 (`没想到…`) + 寓意 (`这个故事提醒我们…`), chuyển ngôi kể sang ngôi thứ 3.",
      },
      {
        id: "hskk-07",
        level: "HSK7",
        questionZh: "【HSKK高级·议论文问答】随着人工智能（AI）和翻译软件的普及，有人认为未来不再需要花大量时间学习外语。你赞同这种观点吗？",
        questionPinyin: "[HSKK Gāojí · Yìlùnwén Wèndá] Suízhe réngōng zhìnéng (AI) hé fānyì ruǎnjiàn de pǔjí, yǒurén rènwéi wèilái bú zài xūyào huā dàliàng shíjiān xuéxí wàiyǔ. Nǐ zàntóng zhè zhǒng guāndiǎn ma?",
        questionVi: "[HSKK Cao cấp · Biện luận] Cùng với sự phổ cập của Trí tuệ nhân tạo (AI) và phần mềm dịch thuật, có người cho rằng tương lai không cần tốn nhiều thời gian học ngoại ngữ nữa. Bạn có đồng tình với quan điểm này không?",
        answerZh:
          "我并不赞同“AI将彻底取代外语学习”的观点。诚然，人工智能翻译在旅游问路、基础文献阅读等浅层信息转换上极大提升了效率；然而，语言绝非冷冰冰的符号代码，它承载着一个民族的文化底蕴、思维逻辑与情感温度。首先，在高端商务谈判与外交场合，微妙的语气停顿、潜台词以及眼神互动带来的信任感，是任何机器都无法替代的。其次，学习一门外语的本质是掌握一种全新的思维方式。因此，AI应当成为我们学习外语的得力助手，而非放弃深度学习的借口。",
        answerPinyin:
          "Wǒ bìng bú zàntóng “AI jiāng chèdǐ qǔdài wàiyǔ xuéxí” de guāndiǎn. Chéngrán, réngōng zhìnéng fānyì zài lǚyóu wènlù, jīchǔ wénxiàn yuèdú děng qiǎncéng xìnxī zhuǎnhuàn shàng jídà tíshēng le xiàolǜ; rán'ér, yǔyán jué fēi lěngbīngbīng de fúhào dàimǎ, tā chéngzàizhe yí gè mínzú de wénhuà dǐyùn, sīwéi luójí yǔ qínggǎn wēndù. Shǒuxiān, zài gāoduān shāngwù tánpàn yǔ wàijiāo chǎnghé, wēimiào de yǔqì tíngdùn, qiántáicí yǐjí yǎnshén hùdòng dàilái de xìnrèngǎn, shì rènhé jīqì dōu wúfǎ tìdài de. Qícì, xuéxí yì mén wàiyǔ de běnzhì shì zhǎngwò yì zhǒng quánxīn de sīwéi fāngshì. Yīncǐ, AI yīngdāng chéngwéi wǒmen xuéxí wàiyǔ de délì zhùshǒu, ér fēi fàngqì shēndù xuéxí de jièkǒu.",
        answerVi:
          "Tôi không đồng tình với quan điểm 'AI sẽ thay thế triệt để việc học ngoại ngữ'. Quả thực, dịch thuật AI đã nâng cao đáng kể hiệu suất trong việc chuyển đổi thông tin bề mặt như hỏi đường du lịch hay đọc tài liệu cơ bản; tuy nhiên, ngôn ngữ tuyệt đối không phải những dòng mã ký hiệu lạnh băng, mà nó chuyên chở bề dày văn hóa, tư duy logic và hơi ấm cảm xúc của một dân tộc. Trước hết, trong đàm phán thương mại cấp cao và ngoại giao, nhịp ngừng ngữ điệu tinh tế, ẩn ý ngầm cùng cảm giác tin cậy từ tương tác ánh mắt là điều không máy móc nào thay thế được. Thứ hai, bản chất của việc học một ngoại ngữ là làm chủ một phương thức tư duy hoàn toàn mới. Do đó, AI nên trở thành trợ thủ đắc lực giúp chúng ta học ngoại ngữ, chứ không phải cái cớ để từ bỏ việc học chuyên sâu.",
        keyVocab: [
          { hanzi: "诚然…然而…", pinyin: "chéngrán... rán'ér...", meaningVi: "quả thực là... tuy nhiên..." },
          { hanzi: "文化底蕴", pinyin: "wénhuà dǐyùn", meaningVi: "bề dày / chiều sâu văn hóa" },
          { hanzi: "潜台词", pinyin: "qiántáicí", meaningVi: "ẩn ý / hàm ý đằng sau lời nói" },
        ],
        tipsVi:
          "Cấu trúc nhượng bộ bậc cao '诚然…，然而…' (Quả thực..., tuy nhiên...) là vũ khí sắc bén nhất trong bài nói biện luận HSKK Cao cấp (2 phút).",
      },
      {
        id: "hskk-08",
        level: "HSK8",
        questionZh: "【HSKK高级·议论文问答】有人说“年轻人应该选择大城市打拼”，也有人认为“回小城市生活更幸福”。请谈谈你的见解。",
        questionPinyin: "[HSKK Gāojí · Yìlùnwén Wèndá] Yǒurén shuō “niánqīngrén yīnggāi xuǎnzé dà chéngshì dǎpīn”, yě yǒurén rènwéi “huí xiǎo chéngshì shēnghuó gèng xìngfú”. Qǐng tántan nǐ de jiànjiě.",
        questionVi: "[HSKK Cao cấp · Biện luận] Có người nói 'Người trẻ nên chọn thành phố lớn để lập nghiệp', cũng có người cho rằng 'Về thành phố nhỏ sống hạnh phúc hơn'. Hãy nêu kiến giải của bạn.",
        answerZh:
          "关于去大城市拼搏还是回小城市安居，我认为并无放之四海而皆准的标准答案，关键取决于个人的职业发展阶段与价值追求。大城市汇聚了优质的资源、前沿的行业视野以及公平的竞争机制，对于初入职场的年轻人而言，是快速积累人脉与专业壁垒的最佳舞台。而中小城市则拥有较低的生活成本与从容的生活节奏，更利于兼顾家庭与身心健康。依我之见，年轻人在二十多岁时不妨先去大城市闯荡历练，待练就过硬本领后，无论留在大都市还是返乡创业，都能游刃有余。",
        answerPinyin:
          "Guānyú qù dà chéngshì pīnbó háishi huí xiǎo chéngshì ānjū, wǒ rènwéi bìng wú fàngzhī-sìhǎi-ér-jiēzhǔn de biāozhǔn dá'àn, guānjiàn qǔjué yú gèrén de zhíyè fāzhǎn jiēduàn yǔ jiàzhí zhuīqiú. Dà chéngshì huìjù le yōuzhì de zīyuán, qiányán de hángyè shìyě yǐjí gōngpíng de jìngzhēng jīzhì, duìyú chū rù zhíchǎng de niánqīngrén éryán, shì kuàisù jīlěi rénmài yǔ zhuānyè bìlěi de zuìjiā wǔtái. Ér zhōng-xiǎo chéngshì zé yōngyǒu jiào dī de shēnghuó chéngběn yǔ cóngróng de shēnghuó jiézòu, gèng lìyú jiāngù jiātíng yǔ shēnxīn jiànkāng. Yī wǒ zhī jiàn, niánqīngrén zài èrshí duō suì shí bùfáng xiān qù dà chéngshì chuǎngdàng lìliàn, dài liànjiù guòyìng běnlǐng hòu, wúlùn liú zài dà dūshì háishi fǎnxiāng chuàngyè, dōu néng yóurèn-yǒuyú.",
        answerVi:
          "Về việc chọn tới thành phố lớn phấn đấu hay về thành phố nhỏ an cư, theo tôi không có đáp án tiêu chuẩn đúng cho mọi trường hợp, mấu chốt phụ thuộc vào giai đoạn phát triển sự nghiệp và mưu cầu giá trị của mỗi cá nhân. Thành phố lớn hội tụ nguồn lực chất lượng cao, tầm nhìn ngành tiên phong cùng cơ chế cạnh tranh công bằng; đối với người trẻ mới bước vào nghề thì đó là sân khấu tốt nhất để nhanh chóng tích lũy mạng lưới quan hệ và lợi thế chuyên môn. Trong khi đó các thành phố vừa và nhỏ lại có chi phí sinh hoạt thấp hơn và nhịp sống thong dong, thuận lợi hơn để cân bằng gia đình cùng sức khỏe thể chất tinh thần. Theo thiển ý của tôi, người trẻ ở độ tuổi đôi mươi cứ mạnh dạn ra thành phố lớn bươn chải rèn luyện trước, đợi khi đã rèn được bản lĩnh vững vàng rồi thì dù ở lại đô thị lớn hay về quê khởi nghiệp đều có thể ung dung tự chủ.",
        keyVocab: [
          { hanzi: "放之四海而皆准", pinyin: "fàngzhī-sìhǎi-ér-jiēzhǔn", meaningVi: "áp dụng đi đâu cũng đúng (chân lý phổ quát)" },
          { hanzi: "初入职场", pinyin: "chū rù zhíchǎng", meaningVi: "mới bước chân vào môi trường công sở" },
          { hanzi: "游刃有余", pinyin: "yóurèn-yǒuyú", meaningVi: "thuần thục, ung dung dư dả năng lực" },
        ],
        tipsVi:
          "Cách trả lời biện chứng (辩证分析) đạt điểm tuyệt đối HSKK Cao cấp: Phân tích giá trị của Lựa chọn A -> Giá trị của Lựa chọn B -> Đưa ra giải pháp kết hợp theo từng giai đoạn cuộc đời.",
      },
      {
        id: "hskk-09",
        level: "HSK9",
        questionZh: "【HSKK高级·深度评述】在经济发展与环境保护发生冲突时，企业与政府应当如何权衡取舍？",
        questionPinyin: "[HSKK Gāojí · Shēndù Píngshù] Zài jīngjì fāzhǎn yǔ huánjìng bǎohù fāshēng chōngtū shí, qǐyè yǔ zhèngfǔ yīngdāng rúhé quánhéng qǔshě?",
        questionVi: "[HSKK Cao cấp · Bình luận chuyên sâu] Khi phát triển kinh tế và bảo vệ môi trường xảy ra xung đột, doanh nghiệp và chính phủ cần cân nhắc lựa chọn như thế nào?",
        answerZh:
          "经济发展与生态保护绝非零和博弈，中国提出的“绿水青山就是金山银山”理念早已指明了可持续发展的根本路径。过去那种“先污染、后治理”的粗放型增长模式虽然能在短期内带来GDP账面数字的攀升，却往往以透支子孙后代的生存环境为惨痛代价。因此，政府应当完善碳排放交易机制与环保法规，淘汰高耗能落后产能；企业则必须将ESG（环境、社会和公司治理）纳入核心战略，通过绿色技术革新实现降本增效。唯有走人与自然和谐共生的绿色转型之路，经济繁荣才能行稳致远。",
        answerPinyin:
          "Jīngjì fāzhǎn yǔ shēngtài bǎohù jué fēi línghé bóyì, Zhōngguó tíchū de “lǜshuǐ-qīngshān jiù shì jīnshān-yínshān” lǐniàn zǎoyǐ zhǐmíng le kěchíxù fāzhǎn de gēnběn lùjìng. Guòqù nà zhǒng “xiān wūrǎn, hòu zhìlǐ” de cūfàngxíng zēngzhǎng móshì suīrán néng zài duǎnqī nèi dàilái GDP zhàngmiàn shùzì de pānshēng, què wǎngwǎng yǐ tòuzhī zǐsūn hòudài de shēngcún huánjìng wéi cǎntòng dàijià. Yīncǐ, zhèngfǔ yīngdāng wánshàn tànpáifàng jiāoyì jīzhì yǔ huánbǎo fǎguī, táotài gāohàonéng luòhòu chǎnnéng; qǐyè zé bìxū jiāng ESG (huánjìng, shèhuì hé gōngsī zhìlǐ) nàrù héxīn zhànlüè, tōngguò lǜsè jìshù géxīn shíxiàn jiàngběn-zēngxiào. Wéiyǒu zǒu rén yǔ zìrán héxié gòngshēng de lǜsè zhuǎnxíng zhī lù, jīngjì fánróng cáinéng xíngwěn-zhìyuǎn.",
        answerVi:
          "Phát triển kinh tế và bảo vệ sinh thái tuyệt đối không phải là trò chơi có tổng bằng không (zero-sum game); quan điểm 'Nước biếc non xanh chính là núi vàng núi bạc' mà Trung Quốc đề xuất từ lâu đã chỉ rõ con đường căn bản của phát triển bền vững. Mô hình tăng trưởng thô quảng theo kiểu 'ô nhiễm trước, xử lý sau' trước kia tuy có thể mang lại sự gia tăng con số GDP trên sổ sách trong ngắn hạn, nhưng thường phải trả giá đắt bằng việc tiêu xài trước môi trường sinh tồn của con cháu đời sau. Do đó, chính phủ cần hoàn thiện cơ chế giao dịch phát thải carbon và luật bảo vệ môi trường, loại bỏ năng lực sản xuất lạc hậu tiêu tốn nhiều năng lượng; còn doanh nghiệp bắt buộc phải đưa ESG vào chiến lược cốt lõi, thông qua đổi mới công nghệ xanh để giảm chi phí tăng hiệu quả. Chỉ có đi theo con đường chuyển đổi xanh nơi con người và thiên nhiên chung sống hài hòa, sự thịnh vượng kinh tế mới có thể tiến bước vững vàng và vươn xa.",
        keyVocab: [
          { hanzi: "零和博弈", pinyin: "línghé bóyì", meaningVi: "trò chơi có tổng bằng không (zero-sum game)" },
          { hanzi: "绿水青山就是金山银山", pinyin: "lǜshuǐ-qīngshān jiù shì jīnshān-yínshān", meaningVi: "nước biếc non xanh chính là núi vàng núi bạc" },
          { hanzi: "行稳致远", pinyin: "xíngwěn-zhìyuǎn", meaningVi: "đi vững thì mới tiến được xa" },
        ],
        tipsVi:
          "Ở cấp độ HSK 7–9 / HSKK Cao cấp, việc sử dụng các thuật ngữ vĩ mô như 零和博弈, 粗放型增长, 可持续发展 và 行稳致远 sẽ thể hiện năng lực Hán ngữ học thuật tương đương người bản xứ có trình độ đại học.",
      },
    ],
  },
];
