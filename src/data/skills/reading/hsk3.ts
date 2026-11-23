import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK3: ReadingPassage[] = [
  {
    id: "rp-ex-hsk3-1",
    level: "HSK3",
    subDifficulty: "basic",
    genre: "Blog du lịch",
    title: "成都的慢生活与茶馆",
    titlePinyin: "Chéngdū de màn shēnghuó yǔ cháguǎn",
    titleVi: "Nhịp sống chậm và quán trà ở Thành Đô",
    contentZh:
      "很多人去四川成都旅游，除了看可爱的大熊猫和吃麻辣火锅以外，最喜欢体验当地的茶馆文化。在人民公园的露天茶馆里，不管是老人还是年轻人，只要花十几块钱买一杯盖碗茶，就可以坐上一整个下午。大家一边喝茶，一边聊天、打麻将或者看书，完全不着急。这种悠闲的生活节奏，让来自大城市的游客感到格外放松。",
    contentPinyin:
      "Hěn duō rén qù Sìchuān Chéngdū lǚyóu, chúle kàn kě'ài de dàxióngmāo hé chī málà huǒguō yǐwài, zuì xǐhuan tǐyàn dāngdì de cháguǎn wénhuà. Zài Rénmín Gōngyuán de lùtiān cháguǎn lǐ, bùguǎn shì lǎorén háishi niánqīngrén, zhǐyào huā shí jǐ kuài qián mǎi yì bēi gàiwǎnchá, jiù kěyǐ zuò shàng yì zhěng gè xiàwǔ. Dàjiā yìbiān hē chá, yìbiān liáotiān, dǎ májiàng huòzhě kànshū, wánquán bù zháojí. Zhè zhǒng yōuxián de shēnghuó jiézòu, ràng láizì dà chéngshì de yóukè gǎndào géwài fàngsōng.",
    contentVi:
      "Nhiều người đến Thành Đô, Tứ Xuyên du lịch, ngoài ngắm gấu trúc đáng yêu và ăn lẩu cay tê ra thì thích nhất là trải nghiệm văn hóa quán trà địa phương. Ở quán trà ngoài trời trong Công viên Nhân dân, dù là người già hay người trẻ, chỉ cần bỏ ra hơn chục tệ mua một chén trà có nắp là có thể ngồi trọn cả buổi chiều. Mọi người vừa uống trà vừa trò chuyện, đánh mạt chược hoặc đọc sách, hoàn toàn không vội vã. Nhịp sống thong dong này khiến du khách đến từ các thành phố lớn cảm thấy vô cùng thư giãn.",
    questions: [
      {
        id: "rp-ex-hsk3-1-q1",
        questionVi: "Ngoài gấu trúc và lẩu cay, du khách đến Thành Đô thích trải nghiệm điều gì nhất?",
        options: [
          "Leo núi ngắm tuyết",
          "Văn hóa quán trà địa phương",
          "Mua sắm ở trung tâm thương mại",
          "Đi du thuyền trên sông",
        ],
        correctAnswer: "Văn hóa quán trà địa phương",
        explanationVi: "Bài viết nêu: '最喜欢体验当地的茶馆文化' (thích trải nghiệm văn hóa quán trà địa phương nhất).",
      },
      {
        id: "rp-ex-hsk3-1-q2",
        questionVi: "Một chén trà có nắp ở Công viên Nhân dân có giá khoảng bao nhiêu?",
        options: ["Khoảng 5 tệ", "Hơn chục tệ", "Khoảng 50 tệ", "Hơn 100 tệ"],
        correctAnswer: "Hơn chục tệ",
        explanationVi: "Trong đoạn có cụm '只要花十几块钱买一杯盖碗茶' (chỉ cần tiêu hơn chục tệ mua một chén trà cái uyển).",
      },
      {
        id: "rp-ex-hsk3-1-q3",
        questionVi: "Mọi người thường làm gì khi ngồi ở quán trà ngoài trời?",
        options: [
          "Làm việc trên máy tính cả ngày",
          "Trò chuyện, đánh mạt chược hoặc đọc sách",
          "Hát karaoke và nhảy múa",
          "Nấu ăn và bán hàng",
        ],
        correctAnswer: "Trò chuyện, đánh mạt chược hoặc đọc sách",
        explanationVi: "Bài viết miêu tả: '一边聊天、打麻将或者看书' (vừa trò chuyện, đánh mạt chược hoặc đọc sách).",
      },
      {
        id: "rp-ex-hsk3-1-q4",
        questionVi: "Ai là những người thường đến quán trà ở Công viên Nhân dân?",
        options: [
          "Chỉ có người lớn tuổi",
          "Chỉ có khách du lịch nước ngoài",
          "Cả người già lẫn người trẻ",
          "Chỉ có sinh viên đại học",
        ],
        correctAnswer: "Cả người già lẫn người trẻ",
        explanationVi: "Đoạn văn viết: '不管是老人还是年轻人' (bất kể người già hay người trẻ).",
      },
      {
        id: "rp-ex-hsk3-1-q5",
        questionVi: "Nhịp sống ở Thành Đô mang lại cảm giác gì cho du khách từ thành phố lớn?",
        options: [
          "Rất nhàm chán",
          "Hơi áp lực",
          "Vô cùng thư giãn",
          "Quá ồn ào",
        ],
        correctAnswer: "Vô cùng thư giãn",
        explanationVi: "Câu cuối viết: '让来自大城市的游客感到格外放松' (khiến du khách từ thành phố lớn cảm thấy vô cùng thư giãn).",
      },
    ],
  },
  {
    id: "rp-ex-hsk3-2",
    level: "HSK3",
    subDifficulty: "basic",
    genre: "Báo cáo QC",
    title: "服装验货初步记录",
    titlePinyin: "Fúzhuāng yànhuò chūbù jìlù",
    titleVi: "Biên bản kiểm hàng may mặc sơ bộ",
    contentZh:
      "今天上午，我对发往胡志明市的五百件纯棉T恤进行了抽检，一共检查了一百件。整体来看，面料手感和颜色都符合客户确认的样品标准，领口缝线也比较整齐。不过在检查中发现了两个小问题：第一，有六件衣服的袖口留有明显线头；第二，三箱外包装纸箱受潮变形。我已通知工厂主管尽快返工修剪线头，并更换新纸箱，确保后天顺利装柜。",
    contentPinyin:
      "Jīntiān shàngwǔ, wǒ duì fāwǎng Húzhìmíngshì de wǔbǎi jiàn chúnmián T-xù jìnxíng le chōujiǎn, yígòng jiǎnchá le yìbǎi jiàn. Zhěngtǐ láikàn, miànliào shǒugǎn hé yánsè dōu fúhé kèhù quèrèn de yàngpǐn biāozhǔn, lǐngkǒu féngxiàn yě bǐjiào zhěngqí. Búguò zài jiǎnchá zhōng fāxiàn le liǎng gè xiǎo wèntí: dì yī, yǒu liù jiàn yīfu de xiùkǒu liúyǒu míngxiǎn xiàntóu; dì èr, sān xiāng wàibāozhuāng zhǐxiāng shòucháo biànxíng. Wǒ yǐ tōngzhī gōngchǎng zhǔguǎn jǐnkuài fǎngōng xiūjiǎn xiàntóu, bìng gēnghuàn xīn zhǐxiāng, quèbǎo hòutiān shùnlì zhuāngguì.",
    contentVi:
      "Sáng nay tôi đã tiến hành kiểm tra xác suất lô 500 chiếc áo thun cotton gửi đi TP. Hồ Chí Minh, tổng cộng kiểm tra 100 chiếc. Nhìn chung, cảm giác chất vải và màu sắc đều đúng tiêu chuẩn mẫu khách đã duyệt, đường may cổ áo cũng khá ngay ngắn. Tuy nhiên trong lúc kiểm phát hiện hai lỗi nhỏ: thứ nhất, có 6 chiếc áo bị dư chỉ rõ rệt ở cửa tay áo; thứ hai, 3 thùng carton đóng gói ngoài bị ẩm và biến dạng. Tôi đã báo cho quản đốc xưởng nhanh chóng sửa lại, cắt chỉ thừa và thay thùng mới để đảm bảo ngày kia đóng container thuận lợi.",
    questions: [
      {
        id: "rp-ex-hsk3-2-q1",
        questionVi: "Nhân viên QC đã kiểm tra bao nhiêu chiếc áo trên tổng lô hàng?",
        options: [
          "50 trên 500 chiếc",
          "100 trên 500 chiếc",
          "200 trên 500 chiếc",
          "Kiểm toàn bộ 500 chiếc",
        ],
        correctAnswer: "100 trên 500 chiếc",
        explanationVi: "Báo cáo nêu: '五百件纯棉T恤进行了抽检，一共检查了一百件' (kiểm mẫu lô 500 chiếc, tổng kiểm 100 chiếc).",
      },
      {
        id: "rp-ex-hsk3-2-q2",
        questionVi: "Chất liệu vải và màu sắc của lô áo đạt yêu cầu không?",
        options: [
          "Có, đúng tiêu chuẩn mẫu khách duyệt",
          "Màu sắc bị phai nhẹ",
          "Vải mỏng hơn mẫu gốc",
          "Chưa thể kết luận",
        ],
        correctAnswer: "Có, đúng tiêu chuẩn mẫu khách duyệt",
        explanationVi: "Bài viết ghi: '面料手感和颜色都符合客户确认的样品标准' (chất vải và màu sắc đều phù hợp tiêu chuẩn mẫu khách xác nhận).",
      },
      {
        id: "rp-ex-hsk3-2-q3",
        questionVi: "Lỗi đầu tiên phát hiện trên 6 chiếc áo là gì?",
        options: [
          "Rách cổ áo",
          "Sai kích cỡ in trên mác",
          "Dư chỉ thừa rõ rệt ở cửa tay áo",
          "Bị dính vết bẩn dầu máy",
        ],
        correctAnswer: "Dư chỉ thừa rõ rệt ở cửa tay áo",
        explanationVi: "Báo cáo ghi rõ: '有六件衣服的袖口留有明显线头' (có 6 chiếc áo có đầu chỉ thừa rõ ở cổ tay áo).",
      },
      {
        id: "rp-ex-hsk3-2-q4",
        questionVi: "Vấn đề xảy ra với 3 thùng carton ngoài là gì?",
        options: [
          "In sai mã vạch",
          "Bị ẩm và biến dạng",
          "Thiếu băng keo dán",
          "Đóng quá trọng lượng quy định",
        ],
        correctAnswer: "Bị ẩm và biến dạng",
        explanationVi: "Trong bài nêu: '三箱外包装纸箱受潮变形' (3 thùng giấy đóng gói ngoài bị ẩm và biến dạng).",
      },
      {
        id: "rp-ex-hsk3-2-q5",
        questionVi: "Dự kiến khi nào lô hàng này sẽ được đóng container?",
        options: ["Chiều nay", "Ngày mai", "Ngày kia", "Tuần sau"],
        correctAnswer: "Ngày kia",
        explanationVi: "Câu cuối viết: '确保后天顺利装柜' (đảm bảo ngày kia đóng container thuận lợi).",
      },
    ],
  },
  {
    id: "rp-ex-hsk3-3",
    level: "HSK3",
    subDifficulty: "basic",
    genre: "Tin tức",
    title: "无现金支付改变了生活",
    titlePinyin: "Wú xiànjīn zhīfù gǎibiàn le shēnghuó",
    titleVi: "Thanh toán không tiền mặt đã thay đổi cuộc sống",
    contentZh:
      "如今在中国的很多城市，出门几乎不需要带钱包，只要带一部手机就足够了。无论是去大商场买衣服、坐公交地铁，还是在路边小摊买早餐，人们都习惯用手机扫码付款。对商家来说，电子支付不仅省去了找零钱的麻烦，还能自动记录每天的收入，管理起来方便得多。不过，为了照顾不熟悉智能手机的老年人，很多超市和医院仍然保留了现金窗口。",
    contentPinyin:
      "Rújīn zài Zhōngguó de hěn duō chéngshì, chūmén jīhū bù xūyào dài qiánbāo, zhǐyào dài yí bù shǒujī jiù zúgòu le. Wúlùn shì qù dà shāngchǎng mǎi yīfu, zuò gōngjiāo dìtiě, háishi zài lùbiān xiǎotān mǎi zǎocān, rénmen dōu xíguàn yòng shǒujī sǎomǎ fùkuǎn. Duì shāngjiā láishuō, diànzǐ zhīfù bùjǐn shěngqù le zhǎo língqián de máfan, hái néng zìdòng jìlù měitiān de shōurù, guǎnlǐ qǐlái fāngbiàn de duō. Búguò, wèile zhàogù bù shúxī zhìnéng shǒujī de lǎoniánrén, hěn duō chāoshì hé yīyuàn réngrán bǎoliú le xiànjīn chuāngkǒu.",
    contentVi:
      "Ngày nay ở nhiều thành phố tại Trung Quốc, ra ngoài hầu như không cần mang ví, chỉ cần mang một chiếc điện thoại là đủ. Dù là đến trung tâm thương mại mua quần áo, đi xe buýt tàu điện ngầm hay mua bữa sáng ở sạp vỉa hè, mọi người đều quen quét mã bằng điện thoại để trả tiền. Với người bán, thanh toán điện tử không chỉ đỡ phiền phức khi thối tiền lẻ mà còn tự động ghi lại doanh thu mỗi ngày, quản lý tiện hơn nhiều. Tuy nhiên, để hỗ trợ người cao tuổi không quen dùng smartphone, nhiều siêu thị và bệnh viện vẫn giữ lại quầy thanh toán tiền mặt.",
    questions: [
      {
        id: "rp-ex-hsk3-3-q1",
        questionVi: "Hiện nay ở nhiều thành phố Trung Quốc, ra ngoài người ta chỉ cần mang gì để thanh toán?",
        options: [
          "Nhiều tiền lẻ",
          "Một chiếc điện thoại",
          "Sổ tiết kiệm",
          "Thẻ tín dụng quốc tế",
        ],
        correctAnswer: "Một chiếc điện thoại",
        explanationVi: "Câu đầu viết: '只要带一部手机就足够了' (chỉ cần mang một chiếc điện thoại là đủ rồi).",
      },
      {
        id: "rp-ex-hsk3-3-q2",
        questionVi: "Thanh toán điện tử giúp ích gì cho người bán hàng?",
        options: [
          "Được miễn hoàn toàn thuế kinh doanh",
          "Không cần thối tiền lẻ và tự động ghi doanh thu",
          "Tăng giá bán sản phẩm dễ dàng hơn",
          "Giảm chi phí thuê mặt bằng",
        ],
        correctAnswer: "Không cần thối tiền lẻ và tự động ghi doanh thu",
        explanationVi: "Bài nêu: '不仅省去了找零钱的麻烦，还能自动记录每天的收入' (không chỉ bỏ phiền phức thối tiền lẻ mà còn tự ghi doanh thu hàng ngày).",
      },
      {
        id: "rp-ex-hsk3-3-q3",
        questionVi: "Tại sao nhiều siêu thị và bệnh viện vẫn giữ quầy tiền mặt?",
        options: [
          "Vì mạng Internet thường xuyên bị hỏng",
          "Vì tiền mặt an toàn hơn",
          "Để hỗ trợ người cao tuổi không quen dùng điện thoại thông minh",
          "Vì phí quét mã quá cao",
        ],
        correctAnswer: "Để hỗ trợ người cao tuổi không quen dùng điện thoại thông minh",
        explanationVi: "Câu cuối giải thích: '为了照顾不熟悉智能手机的老年人，很多超市和医院仍然保留了现金窗口'.",
      },
      {
        id: "rp-ex-hsk3-3-q4",
        questionVi: "Theo bài viết, nơi nào sau đây KHÔNG được nhắc đến là dùng quét mã thanh toán?",
        options: [
          "Sạp ăn sáng ven đường",
          "Xe buýt và tàu điện ngầm",
          "Trung tâm thương mại lớn",
          "Quầy đổi ngoại tệ ở sân bay",
        ],
        correctAnswer: "Quầy đổi ngoại tệ ở sân bay",
        explanationVi: "Bài chỉ nhắc đến '大商场', '公交地铁', '路边小摊', không nhắc quầy đổi ngoại tệ ở sân bay.",
      },
      {
        id: "rp-ex-hsk3-3-q5",
        questionVi: "Ý chính của đoạn văn là gì?",
        options: [
          "Khuyên mọi người không nên dùng tiền mặt nữa",
          "Giới thiệu sự tiện lợi của thanh toán không tiền mặt và sự linh hoạt dành cho người già",
          "So sánh các ứng dụng thanh toán tại Trung Quốc",
          "Phê phán thói quen tiêu dùng quá mức của giới trẻ",
        ],
        correctAnswer: "Giới thiệu sự tiện lợi của thanh toán không tiền mặt và sự linh hoạt dành cho người già",
        explanationVi: "Toàn bài mô tả sự phổ biến và tiện lợi của '无现金支付', đồng thời nêu việc '保留了现金窗口' cho người lớn tuổi.",
      },
    ],
  },
  {
    id: "rp-ex-hsk3-4",
    level: "HSK3",
    subDifficulty: "advanced",
    genre: "Email công sở",
    title: "确认物流发货与报关资料",
    titlePinyin: "Quèrèn wùliú fāhuò yǔ bàoguān zīliào",
    titleVi: "Xác nhận giao hàng logistics và chứng từ khai báo hải quan",
    contentZh:
      "陈先生：您好！贵司订购的两百台桌面风扇已经全部生产完毕，并顺利通过了质检。按照合同约定，我们计划于本周五下午将货物送到深圳物流仓库。为了避免清关延误，麻烦您在周四中午前再次核对附件里的装箱单和商业发票，特别是收货公司名称、税号以及数量是否正确。另外，余款到账后，我们会第一时间把提单扫描件发给您。期待您的回复！",
    contentPinyin:
      "Chén xiānsheng: Nín hǎo! Guìsī dìnggòu de liǎngbǎi tái zhuōmiàn fēngshàn yǐjīng quánbù shēngchǎn wánbì, bìng shùnlì tōngguò le zhìjiǎn. Ànzhào hétong yuēdìng, wǒmen jìhuà yú běn zhōuwǔ xiàwǔ jiāng huòwù sòng dào Shēnzhèn wùliú cāngkù. Wèile bìmiǎn qīngguān yánwù, máfan nín zài zhōusì zhōngwǔ qián zàicì héduì fùjiàn lǐ de zhuāngxiāngdān hé shāngyè fāpiào, tèbié shì shōuhuò gōngsī míngchēng, shuìhào yǐjí shùliàng shìfǒu zhèngquè. Lìngwài, yúkuǎn dàozhàng hòu, wǒmen huì dì yī shíjiān bǎ tídān sǎomiáojiàn fā gěi nín. Qīdài nín de huífù!",
    contentVi:
      "Ông Trần kính chào! Lô 200 chiếc quạt để bàn quý công ty đặt mua đã hoàn tất sản xuất và vượt qua kiểm định chất lượng thuận lợi. Theo thỏa thuận hợp đồng, chúng tôi dự kiến chiều thứ Sáu tuần này sẽ giao hàng đến kho logistics Thâm Quyến. Để tránh chậm trễ thông quan, phiền ông trước trưa thứ Năm kiểm tra lại phiếu đóng gói và hóa đơn thương mại trong tệp đính kèm, đặc biệt là tên công ty nhận hàng, mã số thuế và số lượng đã chính xác chưa. Ngoài ra, sau khi khoản tiền còn lại về tài khoản, chúng tôi sẽ gửi ngay bản scan vận đơn cho ông. Mong phản hồi của ông!",
    questions: [
      {
        id: "rp-ex-hsk3-4-q1",
        questionVi: "Lô hàng được nhắc đến trong email là sản phẩm gì?",
        options: [
          "200 chiếc đèn bàn",
          "200 chiếc quạt để bàn",
          "200 chiếc máy lọc không khí",
          "200 chiếc loa Bluetooth",
        ],
        correctAnswer: "200 chiếc quạt để bàn",
        explanationVi: "Email viết: '贵司订购的两百台桌面风扇' (200 chiếc quạt để bàn quý công ty đặt mua).",
      },
      {
        id: "rp-ex-hsk3-4-q2",
        questionVi: "Người bán dự kiến giao hàng đến kho Thâm Quyến vào lúc nào?",
        options: [
          "Trưa thứ Năm tuần này",
          "Chiều thứ Sáu tuần này",
          "Sáng thứ Hai tuần sau",
          "Cuối tháng này",
        ],
        correctAnswer: "Chiều thứ Sáu tuần này",
        explanationVi: "Trong bài có câu '计划于本周五下午将货物送到深圳物流仓库' (dự kiến chiều thứ Sáu tuần này giao đến kho Thâm Quyến).",
      },
      {
        id: "rp-ex-hsk3-4-q3",
        questionVi: "Ông Trần cần kiểm tra lại chứng từ trước thời điểm nào?",
        options: [
          "Trước tối thứ Tư",
          "Trước trưa thứ Năm",
          "Trước chiều thứ Sáu",
          "Trước sáng thứ Bảy",
        ],
        correctAnswer: "Trước trưa thứ Năm",
        explanationVi: "Email đề nghị: '麻烦您在周四中午前再次核对附件里的装箱单和商业发票'.",
      },
      {
        id: "rp-ex-hsk3-4-q4",
        questionVi: "Những thông tin nào được nhắc cần kiểm tra kỹ trên chứng từ?",
        options: [
          "Màu sắc hộp và trọng lượng từng chiếc",
          "Tên công ty nhận hàng, mã số thuế và số lượng",
          "Tên tài xế và biển số xe tải",
          "Địa chỉ xưởng sản xuất và số điện thoại",
        ],
        correctAnswer: "Tên công ty nhận hàng, mã số thuế và số lượng",
        explanationVi: "Bài nêu rõ: '特别是收货公司名称、税号以及数量是否正确'.",
      },
      {
        id: "rp-ex-hsk3-4-q5",
        questionVi: "Khi nào bên bán sẽ gửi bản scan vận đơn cho ông Trần?",
        options: [
          "Ngay khi ông Trần trả lời email",
          "Sau khi khoản tiền còn lại vào tài khoản",
          "Sau khi hàng đã thông quan tại Việt Nam",
          "Sau khi nhận được đánh giá 5 sao",
        ],
        correctAnswer: "Sau khi khoản tiền còn lại vào tài khoản",
        explanationVi: "Câu gần cuối viết: '余款到账后，我们会第一时间把提单扫描件发给您' (Sau khi tiền dư về tài khoản, sẽ gửi ngay bản scan vận đơn).",
      },
    ],
  },
  {
    id: "rp-ex-hsk3-5",
    level: "HSK3",
    subDifficulty: "advanced",
    genre: "Công nghệ & Đời sống",
    title: "AI语音助手帮我学中文",
    titlePinyin: "AI yǔyīn zhùshǒu bāng wǒ xué Zhōngwén",
    titleVi: "Trợ lý giọng nói AI giúp tôi học tiếng Trung",
    contentZh:
      "以前我学汉语时，最头疼的就是缺少练习口语的环境，遇到中国客户常常紧张得说不出话。半年前，我开始每天晚上用AI语音助手练习十五分钟对话。我可以设定不同的场景，比如机场值机、谈价格或者面试自我介绍。每次说完，AI不仅能立刻纠正我的声调和语法错误，还会提供更地道的表达方式。坚持半年后，我开口说中文明显自信多了。",
    contentPinyin:
      "Yǐqián wǒ xué Hànyǔ shí, zuì tóuténg de jiùshì quēshǎo liànxí kǒuyǔ de huánjìng, yùdào Zhōngguó kèhù chángcháng jǐnzhāng de shuōbuchū huà. Bàn nián qián, wǒ kāishǐ měitiān wǎnshang yòng AI yǔyīn zhùshǒu liànxí shíwǔ fēnzhōng duìhuà. Wǒ kěyǐ shèdìng bùtóng de chǎngjǐng, bǐrú jīchǎng zhíjī, tán jiàgé huòzhě miànshì zìwǒ jièshào. Měi cì shuōwán, AI bùjǐn néng lìkè jiūzhèng wǒ de shēngdiào hé yǔfǎ cuòwù, hái huì tígōng gèng dìdào de biǎodá fāngshì. Jiānchí bàn nián hòu, wǒ kāikǒu shuō Zhōngwén míngxiǎn zìxìn duō le.",
    contentVi:
      "Trước đây khi học tiếng Trung, điều khiến mình đau đầu nhất là thiếu môi trường luyện nói, gặp khách hàng Trung Quốc thường căng thẳng đến mức không nói nên lời. Nửa năm trước, mình bắt đầu dùng trợ lý giọng nói AI luyện hội thoại 15 phút mỗi tối. Mình có thể thiết lập nhiều tình huống khác nhau như làm thủ tục ở sân bay, mặc cả giá hay tự giới thiệu khi phỏng vấn. Mỗi lần nói xong, AI không chỉ sửa ngay lỗi thanh điệu và ngữ pháp mà còn gợi ý cách diễn đạt tự nhiên hơn. Kiên trì nửa năm, mình mở miệng nói tiếng Trung tự tin hơn hẳn.",
    questions: [
      {
        id: "rp-ex-hsk3-5-q1",
        questionVi: "Trước đây khó khăn lớn nhất của tác giả khi học tiếng Trung là gì?",
        options: [
          "Không nhớ nổi chữ Hán",
          "Thiếu môi trường luyện nói",
          "Không có thời gian học từ vựng",
          "Không tìm được giáo trình phù hợp",
        ],
        correctAnswer: "Thiếu môi trường luyện nói",
        explanationVi: "Câu đầu nêu: '最头疼的就是缺少练习口语的环境' (đau đầu nhất là thiếu môi trường luyện khẩu ngữ).",
      },
      {
        id: "rp-ex-hsk3-5-q2",
        questionVi: "Mỗi tối tác giả luyện hội thoại với AI trong bao lâu?",
        options: ["5 phút", "15 phút", "30 phút", "60 phút"],
        correctAnswer: "15 phút",
        explanationVi: "Trong bài viết: '每天晚上用AI语音助手练习十五分钟对话' (mỗi tối luyện 15 phút hội thoại).",
      },
      {
        id: "rp-ex-hsk3-5-q3",
        questionVi: "Tác giả KHÔNG nhắc đến tình huống luyện tập nào dưới đây?",
        options: [
          "Làm thủ tục ở sân bay",
          "Thương lượng giá cả",
          "Tự giới thiệu khi phỏng vấn",
          "Khám bệnh ở bệnh viện",
        ],
        correctAnswer: "Khám bệnh ở bệnh viện",
        explanationVi: "Bài chỉ liệt kê '机场值机、谈价格或者面试自我介绍', không có tình huống khám bệnh.",
      },
      {
        id: "rp-ex-hsk3-5-q4",
        questionVi: "Sau mỗi lần tác giả nói xong, AI giúp làm những gì?",
        options: [
          "Chấm điểm và gửi chứng chỉ",
          "Sửa lỗi thanh điệu, ngữ pháp và gợi ý cách nói tự nhiên hơn",
          "Dịch toàn bộ sang tiếng Anh",
          "Ghi âm và đăng lên mạng xã hội",
        ],
        correctAnswer: "Sửa lỗi thanh điệu, ngữ pháp và gợi ý cách nói tự nhiên hơn",
        explanationVi: "Đoạn văn viết: '不仅能立刻纠正我的声调和语法错误，还会提供更地道的表达方式'.",
      },
      {
        id: "rp-ex-hsk3-5-q5",
        questionVi: "Kết quả sau nửa năm kiên trì luyện tập của tác giả là gì?",
        options: [
          "Thi đỗ HSK 6 với điểm tuyệt đối",
          "Mở miệng nói tiếng Trung tự tin hơn hẳn",
          "Trở thành giáo viên tiếng Trung",
          "Không cần dùng AI nữa",
        ],
        correctAnswer: "Mở miệng nói tiếng Trung tự tin hơn hẳn",
        explanationVi: "Câu cuối nêu: '坚持半年后，我开口说中文明显自信多了' (sau nửa năm kiên trì, mở miệng nói tiếng Trung rõ ràng tự tin hơn nhiều).",
      },
    ],
  },
];
