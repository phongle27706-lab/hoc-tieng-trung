import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK4: ReadingPassage[] = [
  {
    id: "rp-ex-hsk4-1",
    level: "HSK4",
    subDifficulty: "basic",
    genre: "Thương mại điện tử",
    title: "直播带货为什么这么火？",
    titlePinyin: "Zhíbō dàihuò wèishénme zhème huǒ?",
    titleVi: "Vì sao livestream bán hàng lại bùng nổ đến vậy?",
    contentZh:
      "近几年，直播带货在中国和东南亚市场都发展得非常迅速。与传统的图文电商相比，直播最大的优势在于直观和互动性强。消费者不仅能实时看到商品的真实材质、试穿效果和使用方法，还可以直接在评论区提问，主播会当场演示并解答，这大大降低了网购的决策成本。此外，许多工厂直接开启原产地直播，减少了中间商环节，让消费者以更实惠的价格买到高性价比产品。不过，业内人士也提醒，直播电商想要走得长远，不能只靠低价促销，更需要严格把控供应链和售后服务，才能真正赢得顾客的长期信任。",
    contentPinyin:
      "Jìn jǐ nián, zhíbō dàihuò zài Zhōngguó hé Dōngnányà shìchǎng dōu fāzhǎn de fēicháng xùnsù. Yǔ chuántǒng de túwén diànshāng xiāngbǐ, zhíbō zuì dà de yōushì zàiyú zhíguān hé hùdòngxìng qiáng. Xiāofèizhě bùjǐn néng shíshí kàndào shāngpǐn de zhēnshí cáizhì, shìchuān xiàoguǒ hé shǐyòng fāngfǎ, hái kěyǐ zhíjiē zài pínglùnqū tíwèn, zhǔbō huì dāngchǎng yǎnshì bìng jiědá, zhè dàdà jiàngdī le wǎnggòu de juécè chéngběn. Cǐwài, xǔduō gōngchǎng zhíjiē kāiqǐ yuánchǎndì zhíbō, jiǎnshǎo le zhōngjiānshāng huánjié, ràng xiāofèizhě yǐ gèng shíhuì de jiàgé mǎidào gāo xìngjiàbǐ chǎnpǐn. Búguò, yènèi rénshì yě tíxǐng, zhíbō diànshāng xiǎngyào zǒu de chángyuǎn, bùnéng zhǐ kào dījià cùxiāo, gèng xūyào yángé bǎkòng gōngyìngliàn hé shòuhòu fúwù, cáinéng zhēnzhèng yíngdé gùkè de chángqī xìnrèn.",
    contentVi:
      "Những năm gần đây, livestream bán hàng phát triển cực kỳ nhanh chóng tại cả thị trường Trung Quốc lẫn Đông Nam Á. So với thương mại điện tử dạng hình ảnh và chữ viết truyền thống, ưu thế lớn nhất của livestream nằm ở tính trực quan và khả năng tương tác cao. Người tiêu dùng không chỉ xem được trực tiếp chất liệu thật, hiệu quả mặc thử và cách sử dụng sản phẩm mà còn có thể đặt câu hỏi ngay ở phần bình luận để người dẫn chương trình minh họa và giải đáp tại chỗ, giúp giảm đáng kể chi phí ra quyết định khi mua sắm trực tuyến. Ngoài ra, nhiều nhà máy trực tiếp mở livestream tại xưởng sản xuất, cắt giảm khâu trung gian để người mua có được sản phẩm hiệu năng giá cao với mức giá phải chăng hơn. Tuy nhiên, giới chuyên môn cũng nhắc nhở rằng muốn phát triển lâu dài, livestream không thể chỉ dựa vào khuyến mãi giá rẻ mà cần kiểm soát chặt chẽ chuỗi cung ứng và dịch vụ hậu mãi mới thực sự chiếm được niềm tin bền vững của khách hàng.",
    questions: [
      {
        id: "rp-ex-hsk4-1-q1",
        questionVi: "So với TMĐT truyền thống, ưu thế lớn nhất của livestream bán hàng là gì?",
        options: [
          "Thời gian giao hàng nhanh hơn gấp đôi",
          "Tính trực quan và tương tác mạnh",
          "Không cần kho bãi lưu trữ hàng hóa",
          "Chỉ bán các mặt hàng xa xỉ",
        ],
        correctAnswer: "Tính trực quan và tương tác mạnh",
        explanationVi: "Bài nêu rõ: '直播最大的优势在于直观和互动性强' (ưu thế lớn nhất nằm ở tính trực quan và tính tương tác cao).",
      },
      {
        id: "rp-ex-hsk4-1-q2",
        questionVi: "Việc người livestream giải đáp và minh họa trực tiếp giúp ích gì cho người mua?",
        options: [
          "Tăng thời gian xem video",
          "Giảm đáng kể chi phí ra quyết định khi mua hàng",
          "Miễn phí hoàn toàn phí vận chuyển",
          "Cho phép trả góp không lãi suất",
        ],
        correctAnswer: "Giảm đáng kể chi phí ra quyết định khi mua hàng",
        explanationVi: "Đoạn văn viết: '这大大降低了网购的决策成本' (điều này giảm đáng kể chi phí ra quyết định mua hàng online).",
      },
      {
        id: "rp-ex-hsk4-1-q3",
        questionVi: "Vì sao nhiều nhà máy livestream trực tiếp tại xưởng lại có giá tốt hơn?",
        options: [
          "Vì bán hàng tồn kho lỗi thời",
          "Vì cắt giảm được khâu trung gian",
          "Vì không cần đóng gói sản phẩm",
          "Vì được sàn TMĐT trợ giá toàn bộ",
        ],
        correctAnswer: "Vì cắt giảm được khâu trung gian",
        explanationVi: "Trong bài có câu '许多工厂直接开启原产地直播，减少了中间商环节' (nhiều xưởng mở livestream tận gốc, giảm khâu trung gian).",
      },
      {
        id: "rp-ex-hsk4-1-q4",
        questionVi: "Theo giới chuyên môn, yếu tố nào quyết định sự phát triển lâu dài của livestream bán hàng?",
        options: [
          "Liên tục giảm giá sâu hơn đối thủ",
          "Mời thật nhiều người nổi tiếng quảng cáo",
          "Kiểm soát chặt chuỗi cung ứng và dịch vụ hậu mãi",
          "Phát sóng 24 giờ mỗi ngày không nghỉ",
        ],
        correctAnswer: "Kiểm soát chặt chuỗi cung ứng và dịch vụ hậu mãi",
        explanationVi: "Câu cuối nhấn mạnh: '更需要严格把控供应链和售后服务，才能真正赢得顾客的长期信任'.",
      },
      {
        id: "rp-ex-hsk4-1-q5",
        questionVi: "Thái độ của bài viết đối với hình thức livestream bán hàng là gì?",
        options: [
          "Hoàn toàn phản đối vì gây lãng phí",
          "Khách quan, vừa nêu ưu thế vừa chỉ ra điều kiện phát triển bền vững",
          "Chỉ ca ngợi mà không đề cập thách thức",
          "Cho rằng livestream sắp bị thay thế",
        ],
        correctAnswer: "Khách quan, vừa nêu ưu thế vừa chỉ ra điều kiện phát triển bền vững",
        explanationVi: "Bài viết phân tích ưu điểm ('直观和互动性强', '高性价比') rồi dùng '不过' để lưu ý về '供应链和售后服务'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk4-2",
    level: "HSK4",
    subDifficulty: "basic",
    genre: "Hợp đồng ngoại thương",
    title: "关于交货期与违约条款的说明",
    titlePinyin: "Guānyú jiāohuòqī yǔ wéiyuē tiáokuǎn de shuōmíng",
    titleVi: "Giải thích về thời hạn giao hàng và điều khoản vi phạm hợp đồng",
    contentZh:
      "在国际贸易合作中，明确交货期和违约责任是保护买卖双方权益的关键。根据本合同第六条规定，卖方应在收到买方30%预付款后的二十五个工作日内完成生产并安排出货。如果因卖方自身原因导致延期交货，每延迟一周，卖方需向买方支付该批货物总金额1%的违约金，但累计违约金最高不超过合同总额的5%。若延期超过四周，买方有权单方面解除合同，并要求卖方全额退还预付款。当然，如遇台风、港口封锁等不可抗力因素，卖方须在事件发生后48小时内书面通知买方，双方可协商顺延交期。",
    contentPinyin:
      "Zài guójì màoyì hézuò zhōng, míngquè jiāohuòqī hé wéiyuē zérèn shì bǎohù mǎimài shuāngfāng quányì de guānjiàn. Gēnjù běn hétong dì liù tiáo guīdìng, màifāng yīng zài shōudào mǎifāng bǎifēnzhī sānshí yùfùkuǎn hòu de èrshíwǔ gè gōngzuòrì nèi wánchéng shēngchǎn bìng ānpái chūhuò. Rúguǒ yīn màifāng zìshēn yuányīn dǎozhì yánqī jiāohuò, měi yánchí yì zhōu, màifāng xū xiàng mǎifāng zhīfù gāi pī huòwù zǒng jīn'é bǎifēnzhī yī de wéiyuējīn, dàn lěijì wéiyuējīn zuìgāo bù chāoguò hétong zǒng'é de bǎifēnzhī wǔ. Ruò yánqī chāoguò sì zhōu, mǎifāng yǒuquán dānfāngmiàn jiěchú hétong, bìng yāoqiú màifāng quán'é tuìhuán yùfùkuǎn. Dāngrán, rú yù táifēng, gǎngkǒu fēngsuǒ děng bùkěkànglì yīnsù, màifāng xū zài shìjiàn fāshēng hòu sìshíbā xiǎoshí nèi shūmiàn tōngzhī mǎifāng, shuāngfāng kě xiéshāng shùnyán jiāoqī.",
    contentVi:
      "Trong hợp tác thương mại quốc tế, việc làm rõ thời hạn giao hàng và trách nhiệm vi phạm hợp đồng là chìa khóa bảo vệ quyền lợi hai bên mua bán. Theo Điều 6 của hợp đồng này, bên bán phải hoàn tất sản xuất và sắp xếp xuất hàng trong vòng 25 ngày làm việc kể từ khi nhận được 30% tiền đặt cọc của bên mua. Nếu do nguyên nhân chủ quan của bên bán dẫn đến giao hàng chậm, cứ chậm mỗi tuần bên bán phải trả cho bên mua tiền phạt vi phạm bằng 1% tổng giá trị lô hàng, nhưng tổng tiền phạt lũy kế không vượt quá 5% tổng giá trị hợp đồng. Nếu chậm quá 4 tuần, bên mua có quyền đơn phương hủy hợp đồng và yêu cầu hoàn trả toàn bộ tiền đặt cọc. Tất nhiên, nếu gặp yếu tố bất khả kháng như bão, phong tỏa cảng, bên bán phải thông báo bằng văn bản trong vòng 48 giờ sau khi sự việc xảy ra để hai bên thương lượng gia hạn.",
    questions: [
      {
        id: "rp-ex-hsk4-2-q1",
        questionVi: "Bên bán phải hoàn thành sản xuất và xuất hàng trong bao lâu sau khi nhận cọc?",
        options: [
          "15 ngày làm việc",
          "20 ngày làm việc",
          "25 ngày làm việc",
          "30 ngày làm việc",
        ],
        correctAnswer: "25 ngày làm việc",
        explanationVi: "Điều khoản quy định: '收到买方30%预付款后的二十五个工作日内完成生产并安排出货'.",
      },
      {
        id: "rp-ex-hsk4-2-q2",
        questionVi: "Mức phạt vi phạm tối đa khi bên bán giao hàng chậm là bao nhiêu?",
        options: [
          "1% tổng giá trị hợp đồng",
          "3% tổng giá trị hợp đồng",
          "5% tổng giá trị hợp đồng",
          "10% tổng giá trị hợp đồng",
        ],
        correctAnswer: "5% tổng giá trị hợp đồng",
        explanationVi: "Bài viết nêu rõ: '累计违约金最高不超过合同总额的5%' (tiền phạt lũy kế tối đa không quá 5% tổng giá trị hợp đồng).",
      },
      {
        id: "rp-ex-hsk4-2-q3",
        questionVi: "Khi nào bên mua có quyền đơn phương hủy hợp đồng và đòi lại toàn bộ tiền cọc?",
        options: [
          "Khi giao chậm quá 1 tuần",
          "Khi giao chậm quá 2 tuần",
          "Khi giao chậm quá 4 tuần",
          "Ngay khi xảy ra bão tại cảng",
        ],
        correctAnswer: "Khi giao chậm quá 4 tuần",
        explanationVi: "Trong đoạn có câu '若延期超过四周，买方有权单方面解除合同，并要求卖方全额退还预付款'.",
      },
      {
        id: "rp-ex-hsk4-2-q4",
        questionVi: "Nếu gặp sự cố bất khả kháng, bên bán phải thông báo bằng văn bản trong vòng bao lâu?",
        options: ["12 giờ", "24 giờ", "48 giờ", "72 giờ"],
        correctAnswer: "48 giờ",
        explanationVi: "Câu cuối quy định: '卖方须在事件发生后48小时内书面通知买方'.",
      },
      {
        id: "rp-ex-hsk4-2-q5",
        questionVi: "Tỷ lệ tiền đặt cọc được nhắc đến trong điều khoản hợp đồng là bao nhiêu?",
        options: ["20%", "30%", "40%", "50%"],
        correctAnswer: "30%",
        explanationVi: "Đoạn văn nêu: '收到买方30%预付款后' (sau khi nhận 30% tiền trả trước của bên mua).",
      },
    ],
  },
  {
    id: "rp-ex-hsk4-3",
    level: "HSK4",
    subDifficulty: "basic",
    genre: "Văn hóa & Ẩm thực",
    title: "中国酒桌文化的新变化",
    titlePinyin: "Zhōngguó jiǔzhuō wénhuà de xīn biànhuà",
    titleVi: "Những thay đổi mới trong văn hóa bàn tiệc Trung Quốc",
    contentZh:
      "在传统观念里，中国的商务宴请往往离不开白酒和劝酒文化，许多人甚至认为喝得越多越能体现诚意。然而，随着健康意识的提高和年轻一代步入职场，这种传统的酒桌文化正在悄然改变。如今，在不少一二线城市的商务聚餐中，硬性劝酒的现象明显减少了，大家更注重轻松平等的交流氛围。越来越多的人选择以茶代酒，或者点低度果酒和无酒精气泡水，既不伤身体，也不影响第二天的工作效率。真正决定合作能否成功的，归根结底还是产品实力与专业精神，而不是酒量大小。",
    contentPinyin:
      "Zài chuántǒng guānniàn lǐ, Zhōngguó de shāngwù yànqǐng wǎngwǎng líbukāi báijiǔ hé quànjiǔ wénhuà, xǔduō rén shènzhì rènwéi hē de yuè duō yuè néng tǐxiàn chéngyì. Rán'ér, suízhe jiànkāng yìshí de tígāo hé niánqīng yídài bùrù zhíchǎng, zhè zhǒng chuántǒng de jiǔzhuō wénhuà zhèngzài qiǎorán gǎibiàn. Rújīn, zài bùshǎo yī èr xiàn chéngshì de shāngwù jùcān zhōng, yìngxìng quànjiǔ de xiànxiàng míngxiǎn jiǎnshǎo le, dàjiā gèng zhùzhòng qīngsōng píngděng de jiāoliú fēnwéi. Yuèláiyuè duō de rén xuǎnzé yǐ chá dài jiǔ, huòzhě diǎn dīdù guǒjiǔ hé wú jiǔjīng qìpàoshuǐ, jì bù shāng shēntǐ, yě bù yǐngxiǎng dì èr tiān de gōngzuò xiàolǜ. Zhēnzhèng juédìng hézuò néngfǒu chénggōng de, guīgēnjiédǐ háishi chǎnpǐn shílì yǔ zhuānyè jīngshén, ér búshì jiǔliàng dàxiǎo.",
    contentVi:
      "Trong quan niệm truyền thống, tiệc chiêu đãi thương mại ở Trung Quốc thường không thể thiếu rượu trắng và văn hóa ép uống rượu, thậm chí nhiều người cho rằng uống càng nhiều càng thể hiện thành ý. Tuy nhiên, cùng với ý thức sức khỏe nâng cao và thế hệ trẻ bước vào chốn công sở, văn hóa bàn nhậu truyền thống này đang âm thầm thay đổi. Ngày nay, trong nhiều bữa tiệc đối tác ở các thành phố lớn hạng một, hạng hai, tình trạng ép uống rượu cứng nhắc đã giảm rõ rệt, mọi người chú trọng hơn đến bầu không khí giao tiếp thoải mái, bình đẳng. Ngày càng nhiều người chọn lấy trà thay rượu hoặc gọi rượu trái cây nồng độ thấp, nước có ga không cồn, vừa không hại sức khỏe vừa không ảnh hưởng hiệu suất làm việc hôm sau. Điều thực sự quyết định hợp tác có thành công hay không, suy cho cùng vẫn là thực lực sản phẩm và tinh thần chuyên nghiệp chứ không phải tửu lượng.",
    questions: [
      {
        id: "rp-ex-hsk4-3-q1",
        questionVi: "Theo quan niệm truyền thống trước đây, người ta thường nghĩ gì về việc uống rượu trên bàn tiệc?",
        options: [
          "Uống ít mới lịch sự",
          "Uống càng nhiều càng thể hiện thành ý",
          "Chỉ nên uống rượu vang đỏ",
          "Không nên bàn công việc khi ăn",
        ],
        correctAnswer: "Uống càng nhiều càng thể hiện thành ý",
        explanationVi: "Bài viết nêu: '许多人甚至认为喝得越多越能体现诚意' (nhiều người thậm chí cho rằng uống càng nhiều càng thể hiện thành ý).",
      },
      {
        id: "rp-ex-hsk4-3-q2",
        questionVi: "Hai nguyên nhân chính làm thay đổi văn hóa bàn tiệc hiện nay là gì?",
        options: [
          "Giá rượu tăng cao và luật cấm bán rượu",
          "Ý thức sức khỏe tăng cao và thế hệ trẻ bước vào môi trường làm việc",
          "Ảnh hưởng từ phim ảnh và du lịch",
          "Nhà hàng không còn phục vụ rượu trắng",
        ],
        correctAnswer: "Ý thức sức khỏe tăng cao và thế hệ trẻ bước vào môi trường làm việc",
        explanationVi: "Đoạn văn chỉ rõ: '随着健康意识的提高和年轻一代步入职场，这种传统的酒桌文化正在悄然改变'.",
      },
      {
        id: "rp-ex-hsk4-3-q3",
        questionVi: "Thay vì rượu trắng, ngày càng nhiều người chọn loại đồ uống nào?",
        options: [
          "Cà phê đen và nước tăng lực",
          "Trà, rượu trái cây nhẹ hoặc nước có ga không cồn",
          "Sữa đậu nành và nước ép rau củ",
          "Bia đen nồng độ cao",
        ],
        correctAnswer: "Trà, rượu trái cây nhẹ hoặc nước có ga không cồn",
        explanationVi: "Bài viết kể tên: '以茶代酒，或者点低度果酒和无酒精气泡水'.",
      },
      {
        id: "rp-ex-hsk4-3-q4",
        questionVi: "Lợi ích của việc hạn chế rượu mạnh trong tiệc công việc là gì?",
        options: [
          "Tiết kiệm một nửa hóa đơn bữa ăn",
          "Không hại sức khỏe và không ảnh hưởng hiệu suất làm việc hôm sau",
          "Kết thúc bữa tiệc sớm hơn",
          "Giúp ký hợp đồng ngay lập tức",
        ],
        correctAnswer: "Không hại sức khỏe và không ảnh hưởng hiệu suất làm việc hôm sau",
        explanationVi: "Trong bài có câu '既不伤身体，也不影响第二天的工作效率'.",
      },
      {
        id: "rp-ex-hsk4-3-q5",
        questionVi: "Theo tác giả, yếu tố cốt lõi quyết định sự thành công của hợp tác là gì?",
        options: [
          "Tửu lượng của người đại diện",
          "Độ sang trọng của nhà hàng",
          "Thực lực sản phẩm và tinh thần chuyên nghiệp",
          "Mối quan hệ cá nhân lâu năm",
        ],
        correctAnswer: "Thực lực sản phẩm và tinh thần chuyên nghiệp",
        explanationVi: "Câu cuối khẳng định: '真正决定合作能否成功的，归根结底还是产品实力与专业精神'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk4-4",
    level: "HSK4",
    subDifficulty: "advanced",
    genre: "Kịch bản phỏng vấn",
    title: "跨境电商运营岗位复试",
    titlePinyin: "Kuàjìng diànshāng yùnyíng gǎngwèi fùshì",
    titleVi: "Vòng phỏng vấn hai vị trí vận hành TMĐT xuyên biên giới",
    contentZh:
      "面试官：你在简历里提到，去年负责过一款家居小电器的越南站推广，能具体说说你遇到过什么难题吗？候选人：刚上线时，商品点击率很高，但转化率却不到百分之二。我仔细分析了后台数据和买家评论，发现主要原因是详情页的越南语翻译不够自然，而且没有明确标注电压是否适配本地插座。于是我联合设计团队重新拍摄了使用场景图，把核心卖点和保修政策放在最显眼的位置，同时优化了客服的常见问答模板。调整三周后，转化率提升到了百分之五点六，退货率也下降了一半。面试官：很扎实的数据复盘能力，这正是我们团队看重的。",
    contentPinyin:
      "Miànshìguān: Nǐ zài jiǎnlì lǐ tídào, qùnián fùzé guò yì kuǎn jiājū xiǎo diànqì de Yuènán zhàn tuīguǎng, néng jùtǐ shuōshuo nǐ yùdào guò shénme nántí ma? Hòuxuǎnrén: Gāng shàngxiàn shí, shāngpǐn diǎnjīlǜ hěn gāo, dàn zhuǎnhuàlǜ què bú dào bǎifēnzhī èr. Wǒ zǐxì fēnxī le hòutái shùjù hé mǎijiā pínglùn, fāxiàn zhǔyào yuányīn shì xiángqíngyè de Yuènányǔ fānyì búgòu zìrán, érqiě méiyǒu míngquè biāozhù diànyā shìfǒu shìpèi běndì chāzuò. Yúshì wǒ liánhé shèjì tuánduì chóngxīn pāishè le shǐyòng chǎngjǐng tú, bǎ héxīn màidiǎn hé bǎoxiū zhèngcè fàngzài zuì xiǎnyǎn de wèizhi, tóngshí yōuhuà le kèfú de chángjiàn wèndá múbǎn. Tiáozhěng sān zhōu hòu, zhuǎnhuàlǜ tíshēng dào le bǎifēnzhī wǔ diǎn liù, tuìhuòlǜ yě xiàjiàng le yíbàn. Miànshìguān: Hěn zhāshi de shùjù fùpán nénglì, zhè zhèng shì wǒmen tuánduì kànzhòng de.",
    contentVi:
      "Người phỏng vấn: Trong CV bạn có nhắc năm ngoái từng phụ trách quảng bá một sản phẩm điện gia dụng nhỏ trên sàn Việt Nam, bạn có thể nói cụ thể đã gặp khó khăn gì không? Ứng viên: Lúc mới lên kệ, tỷ lệ nhấp chuột vào sản phẩm rất cao nhưng tỷ lệ chuyển đổi lại chưa tới 2%. Em đã phân tích kỹ dữ liệu hệ thống và bình luận của người mua, phát hiện nguyên nhân chính là bản dịch tiếng Việt trên trang chi tiết chưa tự nhiên và không ghi rõ điện áp có tương thích ổ cắm nội địa hay không. Vì vậy em đã phối hợp đội thiết kế chụp lại ảnh bối cảnh sử dụng, đưa điểm bán hàng cốt lõi cùng chính sách bảo hành lên vị trí nổi bật nhất, đồng thời tối ưu bộ mẫu hỏi đáp thường gặp cho CSKH. Sau ba tuần điều chỉnh, tỷ lệ chuyển đổi tăng lên 5,6% và tỷ lệ hoàn trả hàng cũng giảm một nửa. Người phỏng vấn: Năng lực rà soát dữ liệu rất vững, đây chính là điều đội ngũ chúng tôi đề cao.",
    questions: [
      {
        id: "rp-ex-hsk4-4-q1",
        questionVi: "Vấn đề ban đầu của sản phẩm điện gia dụng khi mới lên kệ là gì?",
        options: [
          "Không ai nhấp vào xem sản phẩm",
          "Tỷ lệ nhấp cao nhưng tỷ lệ chuyển đổi dưới 2%",
          "Hết hàng ngay trong tuần đầu",
          "Chi phí vận chuyển quá đắt",
        ],
        correctAnswer: "Tỷ lệ nhấp cao nhưng tỷ lệ chuyển đổi dưới 2%",
        explanationVi: "Ứng viên nói: '商品点击率很高，但转化率却不到百分之二'.",
      },
      {
        id: "rp-ex-hsk4-4-q2",
        questionVi: "Ứng viên đã tìm ra nguyên nhân bằng cách nào?",
        options: [
          "Hỏi trực tiếp giám đốc sản phẩm",
          "Phân tích dữ liệu hậu đài và bình luận của người mua",
          "Sao chép trang bán hàng của đối thủ",
          "Chạy khảo sát ngoài phố",
        ],
        correctAnswer: "Phân tích dữ liệu hậu đài và bình luận của người mua",
        explanationVi: "Trong bài viết: '我仔细分析了后台数据和买家评论'.",
      },
      {
        id: "rp-ex-hsk4-4-q3",
        questionVi: "Một trong những thiếu sót chính trên trang chi tiết sản phẩm là gì?",
        options: [
          "Không có giá bán",
          "Dịch tiếng Việt thiếu tự nhiên và không ghi rõ tương thích điện áp/ổ cắm",
          "Hình ảnh bị mờ do độ phân giải thấp",
          "Sai tên thương hiệu",
        ],
        correctAnswer: "Dịch tiếng Việt thiếu tự nhiên và không ghi rõ tương thích điện áp/ổ cắm",
        explanationVi: "Bài nêu: '详情页的越南语翻译不够自然，而且没有明确标注电压是否适配本地插座'.",
      },
      {
        id: "rp-ex-hsk4-4-q4",
        questionVi: "Kết quả sau ba tuần tối ưu hóa là gì?",
        options: [
          "Tỷ lệ chuyển đổi lên 5,6% và tỷ lệ trả hàng giảm một nửa",
          "Doanh số tăng gấp 10 lần ngay ngày đầu",
          "Tỷ lệ chuyển đổi giữ nguyên nhưng chi phí quảng cáo giảm",
          "Không còn bất kỳ đơn hàng hoàn trả nào",
        ],
        correctAnswer: "Tỷ lệ chuyển đổi lên 5,6% và tỷ lệ trả hàng giảm một nửa",
        explanationVi: "Ứng viên báo cáo: '调整三周后，转化率提升到了百分之五点六，退货率也下降了一半'.",
      },
      {
        id: "rp-ex-hsk4-4-q5",
        questionVi: "Người phỏng vấn đánh giá cao năng lực nào của ứng viên?",
        options: [
          "Kỹ năng chụp ảnh nghệ thuật",
          "Năng lực rà soát, phân tích dữ liệu vững vàng",
          "Khả năng đàm phán với nhà xưởng",
          "Kinh nghiệm livestream bán hàng",
        ],
        correctAnswer: "Năng lực rà soát, phân tích dữ liệu vững vàng",
        explanationVi: "Câu cuối người phỏng vấn khen: '很扎实的数据复盘能力，这正是我们团队看重的'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk4-5",
    level: "HSK4",
    subDifficulty: "advanced",
    genre: "Tin tức",
    title: "中越跨境铁路货运量持续增长",
    titlePinyin: "Zhōng-Yuè kuàjìng tiělù huòyùnliàng chíxù zēngzhǎng",
    titleVi: "Sản lượng vận tải hàng hóa đường sắt xuyên biên giới Trung - Việt tiếp tục tăng trưởng",
    contentZh:
      "据最新物流统计数据显示，今年以来，中越跨境铁路班列的开行频率和货运总量均创下新高。相比传统的公路运输，铁路货运不仅受极端天气影响较小、班次稳定，而且在口岸实现了电子化通关，整体运输时间比两年前缩短了近三分之一。目前，从中国南宁出发的列车主要运载电子零配件、机械设备及日用百货，而返程列车则满载越南的优质农产品、热带水果和木制品。随着双方冷链物流设施不断完善，越来越多的新鲜水果得以快速直达中国各大消费市场，进一步推动了区域经贸往来。",
    contentPinyin:
      "Jù zuìxīn wùliú tǒngjì shùjù xiǎnshì, jīnnián yǐlái, Zhōng-Yuè kuàjìng tiělù bānliè de kāixíng pínlǜ hé huòyùn zǒngliàng jūn chuàngxià xīngāo. Xiāngbǐ chuántǒng de gōnglù yùnshū, tiělù huòyùn bùjǐn shòu jíduān tiānqì yǐngxiǎng jiào xiǎo, bāncì wěndìng, érqiě zài kǒu'àn shíxiàn le diànzǐhuà tōngguān, zhěngtǐ yùnshū shíjiān bǐ liǎng nián qián suōduǎn le jìn sānfēnzhīyī. Mùqián, cóng Zhōngguó Nánníng chūfā de lièchē zhǔyào yùnzài diànzǐ língpèijiàn, jīxiè shèbèi jí rìyòng bǎihuò, ér fǎnchéng lièchē zé mǎnzài Yuènán de yōuzhì nóngchǎnpǐn, rèdài shuǐguǒ hé mùzhìpǐn. Suízhe shuāngfāng lěngliàn wùliú shèshī búduàn wánshàn, yuèláiyuè duō de xīnxiān shuǐguǒ déyǐ kuàisù zhídá Zhōngguó gè dà xiāofèi shìchǎng, jìnyíbù tuīdòng le qūyù jīngmào wǎnglái.",
    contentVi:
      "Theo số liệu thống kê logistics mới nhất, từ đầu năm đến nay, tần suất chạy tàu và tổng lượng hàng hóa của các chuyến tàu đường sắt xuyên biên giới Trung - Việt đều lập kỷ lục mới. So với vận tải đường bộ truyền thống, vận tải đường sắt không chỉ ít chịu ảnh hưởng của thời tiết cực đoan, lịch trình ổn định mà còn áp dụng thông quan điện tử tại cửa khẩu, giúp tổng thời gian vận chuyển rút ngắn gần một phần ba so với hai năm trước. Hiện nay, các đoàn tàu xuất phát từ Nam Ninh (Trung Quốc) chủ yếu chở linh kiện điện tử, máy móc thiết bị và hàng bách hóa tiêu dùng, trong khi tàu chiều về chở đầy nông sản chất lượng cao, trái cây nhiệt đới và đồ gỗ của Việt Nam. Cùng với hệ thống logistics chuỗi lạnh hai bên ngày càng hoàn thiện, ngày càng nhiều trái cây tươi có thể đi thẳng nhanh chóng đến các thị trường tiêu thụ lớn của Trung Quốc, thúc đẩy hơn nữa giao thương khu vực.",
    questions: [
      {
        id: "rp-ex-hsk4-5-q1",
        questionVi: "So với hai năm trước, tổng thời gian vận chuyển đường sắt Trung - Việt đã thay đổi thế nào?",
        options: [
          "Tăng thêm 10%",
          "Rút ngắn gần một phần ba",
          "Giữ nguyên không đổi",
          "Rút ngắn một nửa",
        ],
        correctAnswer: "Rút ngắn gần một phần ba",
        explanationVi: "Bài viết nêu: '整体运输时间比两年前缩短了近三分之一' (tổng thời gian vận chuyển rút ngắn gần 1/3 so với hai năm trước).",
      },
      {
        id: "rp-ex-hsk4-5-q2",
        questionVi: "Ưu điểm của vận tải đường sắt so với đường bộ được nhắc đến trong bài là gì?",
        options: [
          "Chi phí rẻ hơn 80% và giao tận cửa nhà",
          "Ít bị ảnh hưởng thời tiết cực đoan, lịch chạy ổn định và thông quan điện tử",
          "Không cần kiểm dịch hàng nông sản",
          "Chỉ vận chuyển hàng giá trị cao",
        ],
        correctAnswer: "Ít bị ảnh hưởng thời tiết cực đoan, lịch chạy ổn định và thông quan điện tử",
        explanationVi: "Đoạn văn viết: '受极端天气影响较小、班次稳定，而且在口岸实现了电子化通关'.",
      },
      {
        id: "rp-ex-hsk4-5-q3",
        questionVi: "Các đoàn tàu xuất phát từ Nam Ninh (Trung Quốc) chủ yếu chở mặt hàng gì?",
        options: [
          "Trái cây nhiệt đới và đồ gỗ",
          "Linh kiện điện tử, máy móc thiết bị và hàng bách hóa",
          "Thủy hải sản đông lạnh",
          "Than đá và dầu mỏ",
        ],
        correctAnswer: "Linh kiện điện tử, máy móc thiết bị và hàng bách hóa",
        explanationVi: "Bài nêu: '从中国南宁出发的列车主要运载电子零配件、机械设备及日用百货'.",
      },
      {
        id: "rp-ex-hsk4-5-q4",
        questionVi: "Hàng hóa trên chuyến tàu chiều từ Việt Nam sang Trung Quốc gồm những gì?",
        options: [
          "Nông sản chất lượng cao, trái cây nhiệt đới và đồ gỗ",
          "Ô tô điện và pin mặt trời",
          "Vải vóc và máy dệt công nghiệp",
          "Linh kiện bán dẫn",
        ],
        correctAnswer: "Nông sản chất lượng cao, trái cây nhiệt đới và đồ gỗ",
        explanationVi: "Trong bài ghi: '返程列车则满载越南的优质农产品、热带水果和木制品'.",
      },
      {
        id: "rp-ex-hsk4-5-q5",
        questionVi: "Yếu tố hạ tầng nào giúp trái cây tươi Việt Nam tiếp cận nhanh các thị trường lớn của Trung Quốc?",
        options: [
          "Mạng lưới sân bay nội địa",
          "Hệ thống logistics chuỗi lạnh ngày càng hoàn thiện",
          "Kho ngoại quan trên biển",
          "Chợ đầu mối truyền thống",
        ],
        correctAnswer: "Hệ thống logistics chuỗi lạnh ngày càng hoàn thiện",
        explanationVi: "Câu cuối viết: '随着双方冷链物流设施不断完善，越来越多的新鲜水果得以快速直达中国各大消费市场'.",
      },
    ],
  },
];
