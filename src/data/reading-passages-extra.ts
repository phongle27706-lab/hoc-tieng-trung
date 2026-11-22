import type { ReadingPassage } from "./reading-passages";

export const READING_PASSAGES_EXTRA: ReadingPassage[] = [
  {
    id: "rp-ex-hsk1-basic-1",
    level: "HSK1",
    subDifficulty: "basic",
    genre: "Nhật ký hàng ngày",
    title: "我的周末",
    titlePinyin: "Wǒ de zhōumò",
    titleVi: "Cuối tuần của tôi",
    contentZh: "今天是星期六，天气很好。上午八点，我和妈妈去超市买水果和牛奶。我们买了苹果、香蕉和两瓶牛奶。中午，我们在家吃面条和炒鸡蛋。下午三点，我去图书馆看书，认识了一位新朋友，他叫大明。晚上七点，我和家人一起看电视，大家都很开心。",
    contentPinyin: "Jīntiān shì xīngqīliù, tiānqì hěn hǎo. Shàngwǔ bā diǎn, wǒ hé māma qù chāoshì mǎi shuǐguǒ hé niúnǎi. Wǒmen mǎi le píngguǒ, xiāngjiāo hé liǎng píng niúnǎi. Zhōngwǔ, wǒmen zài jiā chī miàntiáo hé chǎo jīdàn. Xiàwǔ sān diǎn, wǒ qù túshūguǎn kànshū, rènshi le yí wèi xīn péngyou, tā jiào Dàmíng. Wǎnshang qī diǎn, wǒ hé jiārén yìqǐ kàn diànshì, dàjiā dōu hěn kāixīn.",
    contentVi: "Hôm nay là thứ Bảy, thời tiết rất đẹp. 8 giờ sáng, tôi và mẹ đi siêu thị mua hoa quả và sữa. Chúng tôi mua táo, chuối và hai chai sữa. Buổi trưa, chúng tôi ăn mì và trứng chiên ở nhà. 3 giờ chiều, tôi đến thư viện đọc sách, quen một người bạn mới tên là Đại Minh. 7 giờ tối, tôi cùng gia đình xem tivi, mọi người đều rất vui.",
    questions: [
      {
        id: "rp-ex-hsk1-basic-1-q1",
        questionVi: "Tác giả đi siêu thị cùng ai vào buổi sáng?",
        options: ["Bố", "Mẹ", "Đại Minh", "Anh trai"],
        correctAnswer: "Mẹ",
        explanationVi: "Bài viết nêu: '我和妈妈去超市买水果和牛奶'."
      },
      {
        id: "rp-ex-hsk1-basic-1-q2",
        questionVi: "Họ đã mua mấy chai sữa?",
        options: ["Một chai", "Hai chai", "Ba chai", "Bốn chai"],
        correctAnswer: "Hai chai",
        explanationVi: "Trong bài có cụm '两瓶牛奶' (hai chai sữa)."
      },
      {
        id: "rp-ex-hsk1-basic-1-q3",
        questionVi: "Buổi trưa họ ăn món gì?",
        options: ["Cơm chiên và cá", "Mì và trứng chiên", "Bánh bao và sữa", "Phở bò"],
        correctAnswer: "Mì và trứng chiên",
        explanationVi: "Câu văn ghi rõ: '中午，我们在家吃面条和炒鸡蛋'."
      },
      {
        id: "rp-ex-hsk1-basic-1-q4",
        questionVi: "Tác giả quen Đại Minh ở đâu?",
        options: ["Ở siêu thị", "Ở công viên", "Ở thư viện", "Ở nhà hàng"],
        correctAnswer: "Ở thư viện",
        explanationVi: "Bài đọc viết: '下午三点，我去图书馆看书，认识了一位新朋友，他叫大明'."
      },
      {
        id: "rp-ex-hsk1-basic-1-q5",
        questionVi: "7 giờ tối tác giả làm gì?",
        options: ["Đi ngủ", "Làm bài tập", "Xem tivi cùng gia đình", "Đi dạo phố"],
        correctAnswer: "Xem tivi cùng gia đình",
        explanationVi: "Câu cuối viết: '晚上七点，我和家人一起看电视'."
      }
    ]
  },
  {
    id: "rp-ex-hsk1-advanced-1",
    level: "HSK1",
    subDifficulty: "advanced",
    genre: "Thông báo lớp học",
    title: "汉语课的通知",
    titlePinyin: "Hànyǔ kè de tōngzhī",
    titleVi: "Thông báo lớp tiếng Trung",
    contentZh: "各位同学：下个星期一开始，我们的汉语课换到三楼305教室上课。上课时间还是上午九点到十一点。请大家带好课本、笔记本和黑色水笔。星期三下午两点，学校有中国茶文化体验活动，想参加的同学请在星期二下午五点前找李老师报名。谢谢大家！",
    contentPinyin: "Gèwèi tóngxué: Xià ge xīngqīyī kāishǐ, wǒmen de Hànyǔ kè huàn dào sānlóu 305 jiàoshì shàngkè. Shàngkè shíjiān háishi shàngwǔ jiǔ diǎn dào shíyī diǎn. Qǐng dàjiā dài hǎo kèběn, bǐjìběn hé hēisè shuǐbǐ. Xīngqīsān xiàwǔ liǎng diǎn, xuéxiào yǒu Zhōngguó chá wénhuà tǐyàn huódòng, xiǎng cānjiā de tóngxué qǐng zài xīngqī'èr xiàwǔ wǔ diǎn qián zhǎo Lǐ lǎoshī bàomíng. Xièxie dàjiā!",
    contentVi: "Các bạn học viên thân mến: Bắt đầu từ thứ Hai tuần sau, lớp tiếng Trung của chúng ta chuyển sang phòng 305 tầng 3. Giờ học vẫn là 9 giờ đến 11 giờ sáng. Mọi người nhớ mang theo sách giáo khoa, vở ghi và bút nước màu đen. 2 giờ chiều thứ Tư, trường có hoạt động trải nghiệm văn hóa trà Trung Quốc, bạn nào muốn tham gia vui lòng gặp cô Lý đăng ký trước 5 giờ chiều thứ Ba. Cảm ơn mọi người!",
    questions: [
      {
        id: "rp-ex-hsk1-advanced-1-q1",
        questionVi: "Từ thứ Hai tuần sau, lớp tiếng Trung học ở phòng nào?",
        options: ["Phòng 205 tầng 2", "Phòng 305 tầng 3", "Phòng 301 tầng 3", "Phòng 503 tầng 5"],
        correctAnswer: "Phòng 305 tầng 3",
        explanationVi: "Thông báo ghi: '换到三楼305教室上课'."
      },
      {
        id: "rp-ex-hsk1-advanced-1-q2",
        questionVi: "Giờ học lớp tiếng Trung có thay đổi không?",
        options: ["Chuyển sang buổi chiều", "Bắt đầu sớm hơn 1 tiếng", "Không đổi, vẫn từ 9h đến 11h sáng", "Học vào buổi tối"],
        correctAnswer: "Không đổi, vẫn từ 9h đến 11h sáng",
        explanationVi: "Câu văn nêu: '上课时间还是上午九点到十一点'."
      },
      {
        id: "rp-ex-hsk1-advanced-1-q3",
        questionVi: "Học viên cần mang theo những gì?",
        options: ["Máy tính và tai nghe", "Sách giáo khoa, vở ghi và bút nước đen", "Từ điển và bút đỏ", "Ấm trà và tách trà"],
        correctAnswer: "Sách giáo khoa, vở ghi và bút nước đen",
        explanationVi: "Bài viết dặn: '带好课本、笔记本和黑色水笔'."
      },
      {
        id: "rp-ex-hsk1-advanced-1-q4",
        questionVi: "Hoạt động trải nghiệm văn hóa trà diễn ra khi nào?",
        options: ["9 giờ sáng thứ Hai", "5 giờ chiều thứ Ba", "2 giờ chiều thứ Tư", "2 giờ chiều thứ Năm"],
        correctAnswer: "2 giờ chiều thứ Tư",
        explanationVi: "Thông báo ghi: '星期三下午两点，学校有中国茶文化体验活动'."
      },
      {
        id: "rp-ex-hsk1-advanced-1-q5",
        questionVi: "Muốn tham gia hoạt động văn hóa trà thì đăng ký với ai?",
        options: ["Cô Vương", "Thầy Trương", "Cô Lý", "Bạn lớp trưởng"],
        correctAnswer: "Cô Lý",
        explanationVi: "Trong bài có câu: '找李老师报名'."
      }
    ]
  },
  {
    id: "rp-ex-hsk2-basic-1",
    level: "HSK2",
    subDifficulty: "basic",
    genre: "Du lịch & Giao thông",
    title: "坐高铁去上海",
    titlePinyin: "Zuò gāotiě qù Shànghǎi",
    titleVi: "Đi tàu cao tốc đến Thượng Hải",
    contentZh: "上个月，我第一次去中国旅游。我从北京坐高铁去上海，只需要四个半小时，比普通火车快多了。高铁站非常大，也很干净。车厢里很安静，座位很舒服，还可以充电。一路上，我看着窗外的风景，喝着热茶，觉得特别放松。到上海以后，我去了外滩，那里的夜景美极了。",
    contentPinyin: "Shàng ge yuè, wǒ dì yī cì qù Zhōngguó lǚyóu. Wǒ cóng Běijīng zuò gāotiě qù Shànghǎi, zhǐ xūyào sì ge bàn xiǎoshí, bǐ pǔtōng huǒchē kuài duō le. Gāotiězhàn fēicháng dà, yě hěn gānjìng. Chēxiāng lǐ hěn ānjìng, zuòwèi hěn shūfu, hái kěyǐ chōngdiàn. Yílù shàng, wǒ kànzhe chuāngwài de fēngjǐng, hēzhe rèchá, juéde tèbié fàngsōng. Dào Shànghǎi yǐhòu, wǒ qù le Wàitān, nàlǐ de yèjǐng měi jí le.",
    contentVi: "Tháng trước, tôi lần đầu tiên đi du lịch Trung Quốc. Tôi đi tàu cao tốc từ Bắc Kinh đến Thượng Hải, chỉ mất bốn tiếng rưỡi, nhanh hơn nhiều so với tàu hỏa thường. Ga tàu cao tốc rất lớn và cũng rất sạch sẽ. Trong toa tàu rất yên tĩnh, ghế ngồi thoải mái, còn có thể sạc điện. Suốt dọc đường, tôi ngắm cảnh ngoài cửa sổ, uống trà nóng, cảm thấy vô cùng thư giãn. Sau khi đến Thượng Hải, tôi đã đi Bến Thượng Hải, cảnh đêm ở đó đẹp tuyệt vời.",
    questions: [
      {
        id: "rp-ex-hsk2-basic-1-q1",
        questionVi: "Tác giả đi từ Bắc Kinh đến Thượng Hải bằng phương tiện gì?",
        options: ["Máy bay", "Tàu cao tốc", "Xe khách", "Tàu thủy"],
        correctAnswer: "Tàu cao tốc",
        explanationVi: "Bài viết nêu: '我从北京坐高铁去上海'."
      },
      {
        id: "rp-ex-hsk2-basic-1-q2",
        questionVi: "Chuyến đi từ Bắc Kinh đến Thượng Hải mất bao lâu?",
        options: ["2 tiếng rưỡi", "3 tiếng", "4 tiếng rưỡi", "6 tiếng"],
        correctAnswer: "4 tiếng rưỡi",
        explanationVi: "Trong bài có cụm '只需要四个半小时' (chỉ cần 4 tiếng rưỡi)."
      },
      {
        id: "rp-ex-hsk2-basic-1-q3",
        questionVi: "Toa tàu cao tốc có đặc điểm nào sau đây?",
        options: ["Rất ồn ào và chật", "Yên tĩnh, ghế thoải mái và có chỗ sạc điện", "Không có cửa sổ", "Không bán đồ uống"],
        correctAnswer: "Yên tĩnh, ghế thoải mái và có chỗ sạc điện",
        explanationVi: "Câu văn ghi: '车厢里很安静，座位很舒服，还可以充电'."
      },
      {
        id: "rp-ex-hsk2-basic-1-q4",
        questionVi: "Trên đường đi, tác giả làm gì?",
        options: ["Ngủ suốt chặng đường", "Làm việc trên máy tính", "Ngắm cảnh ngoài cửa sổ và uống trà nóng", "Nói chuyện điện thoại"],
        correctAnswer: "Ngắm cảnh ngoài cửa sổ và uống trà nóng",
        explanationVi: "Bài đọc viết: '看着窗外的风景，喝着热茶'."
      },
      {
        id: "rp-ex-hsk2-basic-1-q5",
        questionVi: "Tác giả ấn tượng điều gì ở Bến Thượng Hải (外滩)?",
        options: ["Món ăn đường phố", "Cảnh đêm tuyệt đẹp", "Trung tâm mua sắm rẻ", "Công viên yên tĩnh"],
        correctAnswer: "Cảnh đêm tuyệt đẹp",
        explanationVi: "Câu cuối nêu: '那里的夜景美极了' (cảnh đêm ở đó đẹp tuyệt vời)."
      }
    ]
  },
  {
    id: "rp-ex-hsk2-advanced-1",
    level: "HSK2",
    subDifficulty: "advanced",
    genre: "Thương mại đời sống",
    title: "第一次在1688买样品",
    titlePinyin: "Dì yī cì zài 1688 mǎi yàngpǐn",
    titleVi: "Lần đầu mua hàng mẫu trên 1688",
    contentZh: "小南在越南开了一家小鞋店，最近他想从中国进货。朋友推荐他在1688网站上找工厂。小南先选了三家评价很好的广东鞋厂，然后给客服发消息问价格和起订量。客服回复得很快，说可以先买两双样品看看质量。三天后，样品寄到了广州的仓库，再由物流公司运回越南。小南收到样品后非常满意，决定下个月正式下大单。",
    contentPinyin: "Xiǎonán zài Yuènán kāi le yì jiā xiǎo xiédiàn, zuìjìn tā xiǎng cóng Zhōngguó jìnhuò. Péngyou tuījiàn tā zài 1688 wǎngzhàn shàng zhǎo gōngchǎng. Xiǎonán xiān xuǎn le sān jiā píngjià hěn hǎo de Guǎngdōng xiéchǎng, ránhòu gěi kèfú fā xiāoxi wèn jiàgé hé qǐdìngliàng. Kèfú huífù de hěn kuài, shuō kěyǐ xiān mǎi liǎng shuāng yàngpǐn kànkan zhìliàng. Sān tiān hòu, yàngpǐn jì dào le Guǎngzhōu de cāngkù, zài yóu wùliú gōngsī yùn huí Yuènán. Xiǎonán shōudào yàngpǐn hòu fēicháng mǎnyì, juédìng xià ge yuè zhèngshì xià dàdān.",
    contentVi: "Tiểu Nam mở một cửa hàng giày nhỏ ở Việt Nam, gần đây anh muốn nhập hàng từ Trung Quốc. Bạn bè giới thiệu anh tìm xưởng trên trang 1688. Tiểu Nam trước tiên chọn ba xưởng giày Quảng Đông có đánh giá rất tốt, sau đó nhắn tin cho chăm sóc khách hàng hỏi giá và số lượng đặt tối thiểu. Nhân viên trả lời rất nhanh, nói có thể mua trước hai đôi mẫu xem chất lượng. Ba ngày sau, mẫu được gửi đến kho ở Quảng Châu, rồi công ty logistics vận chuyển về Việt Nam. Tiểu Nam nhận được mẫu rất hài lòng, quyết định tháng sau chính thức đặt đơn lớn.",
    questions: [
      {
        id: "rp-ex-hsk2-advanced-1-q1",
        questionVi: "Tiểu Nam kinh doanh mặt hàng gì ở Việt Nam?",
        options: ["Quần áo", "Giày dép", "Đồ điện tử", "Mỹ phẩm"],
        correctAnswer: "Giày dép",
        explanationVi: "Câu đầu viết: '小南在越南开了一家小鞋店'."
      },
      {
        id: "rp-ex-hsk2-advanced-1-q2",
        questionVi: "Tiểu Nam đã chọn mấy xưởng giày ở Quảng Đông để hỏi?",
        options: ["Một xưởng", "Hai xưởng", "Ba xưởng", "Năm xưởng"],
        correctAnswer: "Ba xưởng",
        explanationVi: "Bài viết nêu: '先选了三家评价很好的广东鞋厂'."
      },
      {
        id: "rp-ex-hsk2-advanced-1-q3",
        questionVi: "Tiểu Nam hỏi chăm sóc khách hàng hai thông tin gì?",
        options: ["Màu sắc và kích cỡ", "Giá cả và số lượng đặt tối thiểu (MOQ)", "Địa chỉ xưởng và số điện thoại", "Thuế nhập khẩu và bảo hành"],
        correctAnswer: "Giá cả và số lượng đặt tối thiểu (MOQ)",
        explanationVi: "Trong bài có cụm '问价格和起订量'."
      },
      {
        id: "rp-ex-hsk2-advanced-1-q4",
        questionVi: "Hàng mẫu được gửi đi theo lộ trình nào?",
        options: ["Gửi thẳng bằng máy bay về nhà Tiểu Nam", "Gửi đến kho Quảng Châu rồi công ty logistics chuyển về Việt Nam", "Tiểu Nam tự sang Quảng Đông lấy", "Gửi qua đường biển mất một tháng"],
        correctAnswer: "Gửi đến kho Quảng Châu rồi công ty logistics chuyển về Việt Nam",
        explanationVi: "Đoạn văn nêu rõ: '样品寄到了广州的仓库，再由物流公司运回越南'."
      },
      {
        id: "rp-ex-hsk2-advanced-1-q5",
        questionVi: "Sau khi nhận hàng mẫu, Tiểu Nam quyết định thế nào?",
        options: ["Không mua nữa vì chất lượng kém", "Tiếp tục tìm xưởng khác", "Tháng sau chính thức đặt đơn hàng lớn", "Đổi sang bán túi xách"],
        correctAnswer: "Tháng sau chính thức đặt đơn hàng lớn",
        explanationVi: "Câu cuối viết: '决定下个月正式下大单'."
      }
    ]
  },
  {
    id: "rp-ex-hsk3-basic-1",
    level: "HSK3",
    subDifficulty: "basic",
    genre: "Sức khỏe & Lối sống",
    title: "养成早睡早起的好习惯",
    titlePinyin: "Yǎngchéng zǎoshuì zǎoqǐ de hǎo xíguàn",
    titleVi: "Hình thành thói quen ngủ sớm dậy sớm",
    contentZh: "以前我经常熬夜看手机，有时候凌晨一点才睡觉，结果第二天早上起不来，上班总是迟到，白天也没有精神。后来医生提醒我，长期睡眠不足不仅会影响工作效率，还会让身体抵抗力下降。从上个月开始，我决定改变生活习惯：每天晚上十点半就把手机放在客厅充电，十一点前准时上床睡觉，早上六点半起床跑步二十分钟。坚持了四周以后，我发现自己的注意力集中多了，整个人也更有活力了。",
    contentPinyin: "Yǐqián wǒ jīngcháng áoyè kàn shǒujī, yǒu shíhou língchén yī diǎn cái shuìjiào, jiéguǒ dì èr tiān zǎoshang qǐ bù lái, shàngbān zǒngshì chídào, báitiān yě méiyǒu jīngshén. Hòulái yīshēng tíxǐng wǒ, chángqī shuìmián bùzú bùjǐn huì yǐngxiǎng gōngzuò xiàolǜ, hái huì ràng shēntǐ dǐkànglì xiàjiàng. Cóng shàng ge yuè kāishǐ, wǒ juédìng gǎibiàn shēnghuó xíguàn: měitiān wǎnshang shí diǎn bàn jiù bǎ shǒujī fàng zài kètīng chōngdiàn, shíyī diǎn qián zhǔnshí shàngchuáng shuìjiào, zǎoshang liù diǎn bàn qǐchuáng pǎobù èrshí fēnzhōng. Jiānchí le sì zhōu yǐhòu, wǒ fāxiàn zìjǐ de zhùyìlì jízhōng duō le, zhěng ge rén yě gèng yǒu huólì le.",
    contentVi: "Trước đây tôi thường thức khuya xem điện thoại, có khi 1 giờ sáng mới ngủ, kết quả là sáng hôm sau không dậy nổi, đi làm luôn bị muộn, ban ngày cũng không có tinh thần. Sau này bác sĩ nhắc nhở tôi rằng thiếu ngủ kéo dài không chỉ ảnh hưởng hiệu suất công việc mà còn làm giảm sức đề kháng của cơ thể. Từ tháng trước, tôi quyết định thay đổi thói quen sinh hoạt: mỗi tối 10 giờ rưỡi đặt điện thoại sạc ở phòng khách, trước 11 giờ lên giường đúng giờ, 6 giờ rưỡi sáng dậy chạy bộ 20 phút. Sau khi kiên trì bốn tuần, tôi thấy khả năng tập trung của mình tốt hơn nhiều, cả người cũng tràn đầy năng lượng hơn.",
    questions: [
      {
        id: "rp-ex-hsk3-basic-1-q1",
        questionVi: "Trước đây vì sao tác giả thường đi làm muộn?",
        options: ["Vì nhà xa công ty", "Vì hay thức khuya xem điện thoại nên sáng không dậy nổi", "Vì tắc đường mỗi sáng", "Vì đồng hồ báo thức bị hỏng"],
        correctAnswer: "Vì hay thức khuya xem điện thoại nên sáng không dậy nổi",
        explanationVi: "Bài viết nêu: '经常熬夜看手机...结果第二天早上起不来，上班总是迟到'."
      },
      {
        id: "rp-ex-hsk3-basic-1-q2",
        questionVi: "Bác sĩ cảnh báo thiếu ngủ kéo dài gây ra hậu quả gì?",
        options: ["Chỉ gây đau đầu nhẹ", "Ảnh hưởng hiệu suất công việc và làm giảm sức đề kháng", "Làm tăng cân nhanh chóng", "Khiến thị lực tốt hơn"],
        correctAnswer: "Ảnh hưởng hiệu suất công việc và làm giảm sức đề kháng",
        explanationVi: "Câu văn ghi: '不仅会影响工作效率，还会让身体抵抗力下降'."
      },
      {
        id: "rp-ex-hsk3-basic-1-q3",
        questionVi: "Tác giả làm cách nào để tránh xem điện thoại trước khi ngủ?",
        options: ["Tắt nguồn điện thoại cả tuần", "10 giờ rưỡi tối để điện thoại sạc ở phòng khách", "Bán điện thoại đi", "Đưa điện thoại cho đồng nghiệp giữ"],
        correctAnswer: "10 giờ rưỡi tối để điện thoại sạc ở phòng khách",
        explanationVi: "Trong bài viết: '每天晚上十点半就把手机放在客厅充电'."
      },
      {
        id: "rp-ex-hsk3-basic-1-q4",
        questionVi: "Mỗi sáng tác giả tập thể dục bao lâu?",
        options: ["10 phút", "20 phút", "40 phút", "1 tiếng"],
        correctAnswer: "20 phút",
        explanationVi: "Câu văn nêu: '早上六点半起床跑步二十分钟'."
      },
      {
        id: "rp-ex-hsk3-basic-1-q5",
        questionVi: "Sau 4 tuần kiên trì, tác giả cảm thấy thế nào?",
        options: ["Vẫn rất mệt mỏi", "Tập trung hơn nhiều và tràn đầy năng lượng", "Không có thay đổi gì", "Muốn quay lại thói quen cũ"],
        correctAnswer: "Tập trung hơn nhiều và tràn đầy năng lượng",
        explanationVi: "Câu cuối viết: '注意力集中多了，整个人也更有活力了'."
      }
    ]
  },
  {
    id: "rp-ex-hsk3-advanced-1",
    level: "HSK3",
    subDifficulty: "advanced",
    genre: "Công xưởng & Sản xuất",
    title: "鞋厂质检员的一天",
    titlePinyin: "Xiéchǎng zhìjiǎnyuán de yì tiān",
    titleVi: "Một ngày của nhân viên QC xưởng giày",
    contentZh: "阿梅在一家中越合资的皮鞋厂当质检员。每天早上七点半，她就到车间检查当天要出货的鞋子。她的工作非常细致：先看鞋面有没有划痕和色差，再检查针车走线是不是整齐，最后还要测试鞋底的粘合度够不够牢固。一旦发现不合格的产品，她会立刻贴上红色标签，通知班长拿回去返工。虽然每天站着工作很辛苦，但阿梅说，只有把好质量关，客户才会信任工厂，订单才会越来越多。",
    contentPinyin: "Āméi zài yì jiā Zhōng-Yuè hézī de píxiéchǎng dāng zhìjiǎnyuán. Měitiān zǎoshang qī diǎn bàn, tā jiù dào chējiān jiǎnchá dàngtiān yào chūhuò de xiézi. Tā de gōngzuò fēicháng xìzhì: xiān kàn xiémiàn yǒu méiyǒu huáhén hé sèchā, zài jiǎnchá zhēnchē zǒuxiàn shì bu shì zhěngqí, zuìhòu hái yào cèshì xiédǐ de zhānhédù gòu bu gòu láogù. Yídàn fāxiàn bù hégé de chǎnpǐn, tā huì lìkè tiē shàng hóngsè biāoqiān, tōngzhī bānzhǎng ná huíqù fǎngōng. Suīrán měitiān zhànzhe gōngzuò hěn xīnkǔ, dàn Āméi shuō, zhǐyǒu bǎ hǎo zhìliàngguān, kèhù cái huì xìnrèn gōngchǎng, dìngdān cái huì yuè lái yuè duō.",
    contentVi: "A Mai làm nhân viên kiểm tra chất lượng (QC) tại một xưởng giày da liên doanh Trung – Việt. 7 giờ 30 sáng mỗi ngày, cô đã có mặt tại xưởng để kiểm tra lô giày xuất hàng trong ngày. Công việc của cô vô cùng tỉ mỉ: đầu tiên xem mũ giày có vết xước hay lệch màu không, tiếp theo kiểm tra đường may có đều không, cuối cùng còn phải kiểm tra độ bám dính của đế giày có chắc chắn không. Hễ phát hiện sản phẩm không đạt chuẩn, cô lập tức dán tem đỏ và báo tổ trưởng mang về sửa lại. Dù đứng làm việc mỗi ngày rất vất vả, A Mai nói rằng chỉ có giữ vững khâu chất lượng thì khách hàng mới tin tưởng xưởng và đơn hàng mới ngày càng nhiều.",
    questions: [
      {
        id: "rp-ex-hsk3-advanced-1-q1",
        questionVi: "A Mai làm vị trí gì trong xưởng giày?",
        options: ["Thiết kế mẫu", "Nhân viên kiểm tra chất lượng (QC)", "Thủ kho", "Kế toán"],
        correctAnswer: "Nhân viên kiểm tra chất lượng (QC)",
        explanationVi: "Câu đầu viết: '阿梅在一家中越合资的皮鞋厂当质检员'."
      },
      {
        id: "rp-ex-hsk3-advanced-1-q2",
        questionVi: "Quy trình kiểm tra giày của A Mai gồm 3 bước nào?",
        options: ["Đo size, cân nặng, đóng thùng", "Xem mũ giày (xước/lệch màu), kiểm tra đường may, kiểm tra độ bám dính đế giày", "Lau giày, xỏ dây, dán giá", "Chụp ảnh, gửi khách, xuất hóa đơn"],
        correctAnswer: "Xem mũ giày (xước/lệch màu), kiểm tra đường may, kiểm tra độ bám dính đế giày",
        explanationVi: "Bài nêu rõ 3 bước: '先看鞋面...再检查针车走线...最后还要测试鞋底的粘合度'."
      },
      {
        id: "rp-ex-hsk3-advanced-1-q3",
        questionVi: "Khi phát hiện giày lỗi, A Mai xử lý thế nào?",
        options: ["Vứt bỏ ngay lập tức", "Bán giảm giá cho công nhân", "Dán tem đỏ và báo tổ trưởng mang đi sửa lại (返工)", "Vẫn đóng thùng xuất đi"],
        correctAnswer: "Dán tem đỏ và báo tổ trưởng mang đi sửa lại (返工)",
        explanationVi: "Trong bài ghi: '立刻贴上红色标签，通知班长拿回去返工'."
      },
      {
        id: "rp-ex-hsk3-advanced-1-q4",
        questionVi: "Từ '返工' (fǎngōng) trong bài có nghĩa là gì?",
        options: ["Tan ca về nhà", "Làm lại / sửa lại sản phẩm lỗi", "Tăng ca cuối tuần", "Nghỉ phép"],
        correctAnswer: "Làm lại / sửa lại sản phẩm lỗi",
        explanationVi: "Sản phẩm không đạt chuẩn được mang về sửa lại gọi là 返工."
      },
      {
        id: "rp-ex-hsk3-advanced-1-q5",
        questionVi: "Theo A Mai, vì sao phải giữ vững khâu chất lượng?",
        options: ["Để được nghỉ sớm", "Để khách hàng tin tưởng xưởng và đơn hàng ngày càng nhiều", "Để giảm giá bán", "Để không phải đứng làm việc"],
        correctAnswer: "Để khách hàng tin tưởng xưởng và đơn hàng ngày càng nhiều",
        explanationVi: "Câu cuối nêu: '只有把好质量关，客户才会信任工厂，订单才会越来越多'."
      }
    ]
  },
  {
    id: "rp-ex-hsk4-basic-1",
    level: "HSK4",
    subDifficulty: "basic",
    genre: "Công sở & Phỏng vấn",
    title: "面试时的三个关键细节",
    titlePinyin: "Miànshì shí de sān ge guānjiàn xìjié",
    titleVi: "Ba chi tiết then chốt khi đi phỏng vấn",
    contentZh: "很多求职者在参加面试前只顾着背诵自我介绍，却忽略了一些决定成败的细节。首先，准时是最基本的职业素养，建议提前十分钟到达面试地点，既能整理仪容，也能缓解紧张情绪。其次，提前了解应聘公司的核心业务与近期动态非常重要，当面试官问你“为什么想加入我们公司”时，结合具体业务作答会显得诚意十足。最后，在面试结束前的提问环节，不要只问工资和休假，可以询问岗位的成长路径或团队目前面临的挑战，这能充分展现你的主动性与职业规划。",
    contentPinyin: "Hěnduō qiúzhízhě zài cānjiā miànshì qián zhǐ gùzhe bèisòng zìwǒ jièshào, què hūlüè le yìxiē juédìng chéngbài de xìjié. Shǒuxiān, zhǔnshí shì zuì jīběn de zhíyè sùyǎng, jiànyì tíqián shí fēnzhōng dàodá miànshì dìdiǎn, jì néng zhěnglǐ yíróng, yě néng huǎnjiě jǐnzhāng qíngxù. Qícì, tíqián liǎojiě yìngpìn gōngsī de héxīn yèwù yǔ jìnqī dòngtài fēicháng zhòngyào, dāng miànshìguān wèn nǐ “wèishénme xiǎng jiārù wǒmen gōngsī” shí, jiéhé jùtǐ yèwù zuòdá huì xiǎnde chéngyì shízú. Zuìhòu, zài miànshì jiéshù qián de tíwèn huánjié, búyào zhǐ wèn gōngzī hé xiūjià, kěyǐ xúnwèn gǎngwèi de chéngzhǎng lùjìng huò tuánduì mùqián miànlín de tiǎozhàn, zhè néng chōngfèn zhǎnxiàn nǐ de zhǔdòngxìng yǔ zhíyè guīhuà.",
    contentVi: "Nhiều ứng viên trước khi đi phỏng vấn chỉ mải học thuộc phần giới thiệu bản thân mà bỏ qua những chi tiết quyết định thành bại. Thứ nhất, đúng giờ là tác phong nghề nghiệp cơ bản nhất, nên đến sớm 10 phút vừa để chỉnh đốn trang phục vừa giảm bớt căng thẳng. Thứ hai, tìm hiểu trước mảng kinh doanh cốt lõi và tình hình gần đây của công ty rất quan trọng; khi nhà tuyển dụng hỏi 'vì sao muốn gia nhập công ty chúng tôi', trả lời gắn với nghiệp vụ cụ thể sẽ thể hiện sự chân thành. Cuối cùng, ở phần đặt câu hỏi cuối buổi, đừng chỉ hỏi lương và ngày nghỉ mà hãy hỏi về lộ trình phát triển của vị trí hoặc thách thức đội ngũ đang gặp phải, điều này thể hiện rõ sự chủ động và định hướng nghề nghiệp của bạn.",
    questions: [
      {
        id: "rp-ex-hsk4-basic-1-q1",
        questionVi: "Bài viết khuyên ứng viên nên đến địa điểm phỏng vấn sớm bao lâu?",
        options: ["5 phút", "10 phút", "30 phút", "1 tiếng"],
        correctAnswer: "10 phút",
        explanationVi: "Bài viết nêu: '建议提前十分钟到达面试地点'."
      },
      {
        id: "rp-ex-hsk4-basic-1-q2",
        questionVi: "Đến sớm mang lại hai lợi ích nào?",
        options: ["Gặp trước giám đốc và xem đề thi", "Chỉnh đốn trang phục và giảm căng thẳng", "Uống cà phê và đọc báo", "Hỏi lương nhân viên khác"],
        correctAnswer: "Chỉnh đốn trang phục và giảm căng thẳng",
        explanationVi: "Trong bài có câu: '既能整理仪容，也能缓解紧张情绪'."
      },
      {
        id: "rp-ex-hsk4-basic-1-q3",
        questionVi: "Làm thế nào để trả lời câu hỏi 'Vì sao bạn muốn gia nhập công ty chúng tôi' một cách chân thành?",
        options: ["Khen văn phòng đẹp", "Nói vì công ty gần nhà", "Kết hợp với mảng kinh doanh cốt lõi và tình hình gần đây của công ty", "Nói vì lương cao"],
        correctAnswer: "Kết hợp với mảng kinh doanh cốt lõi và tình hình gần đây của công ty",
        explanationVi: "Bài viết khuyên: '提前了解应聘公司的核心业务与近期动态...结合具体业务作答会显得诚意十足'."
      },
      {
        id: "rp-ex-hsk4-basic-1-q4",
        questionVi: "Ở phần đặt câu hỏi cuối buổi phỏng vấn, ứng viên nên hỏi điều gì?",
        options: ["Chỉ hỏi về lương và ngày phép", "Hỏi về lộ trình phát triển vị trí hoặc thách thức hiện tại của đội ngũ", "Không hỏi gì cả", "Hỏi chuyện riêng tư của nhà tuyển dụng"],
        correctAnswer: "Hỏi về lộ trình phát triển vị trí hoặc thách thức hiện tại của đội ngũ",
        explanationVi: "Câu cuối nêu: '可以询问岗位的成长路径或团队目前面临的挑战'."
      },
      {
        id: "rp-ex-hsk4-basic-1-q5",
        questionVi: "Đặt câu hỏi về lộ trình phát triển giúp ứng viên thể hiện điều gì?",
        options: ["Sự rụt rè", "Sự chủ động và định hướng nghề nghiệp", "Sự thiếu kinh nghiệm", "Chỉ quan tâm đến thu nhập"],
        correctAnswer: "Sự chủ động và định hướng nghề nghiệp",
        explanationVi: "Bài viết kết luận: '这能充分展现你的主动性与职业规划'."
      }
    ]
  },
  {
    id: "rp-ex-hsk4-advanced-1",
    level: "HSK4",
    subDifficulty: "advanced",
    genre: "Thương mại điện tử",
    title: "跨境直播带货的新趋势",
    titlePinyin: "Kuàjìng zhíbō dàihuò de xīn qūshì",
    titleVi: "Xu hướng mới của livestream bán hàng xuyên biên giới",
    contentZh: "近年来，随着东南亚电商市场的爆发式增长，越来越多中国源头工厂不再满足于传统的B2B批发模式，而是直接开通海外直播间，面向终端消费者销售产品。相比传统外贸，跨境直播不仅缩短了供应链环节，让海外买家以更实惠的价格买到高性价比商品，还能通过实时互动快速收集市场反馈，帮助工厂在两周内调整款式和配色。然而，跨境直播也面临语言文化差异、海外仓备货成本高以及退换货流程复杂等挑战。因此，组建本地化运营团队、建立稳定的海外履约体系，正成为品牌出海成功的关键。",
    contentPinyin: "Jìnniánlái, suízhe Dōngnányà diànshāng shìchǎng de bàofāshì zēngzhǎng, yuè lái yuè duō Zhōngguó yuántóu gōngchǎng búzài mǎnzú yú chuántǒng de B2B pīfā móshì, érshì zhíjiē kāitōng hǎiwài zhíbōjiān, miànxiàng zhōngduān xiāofèizhě xiāoshòu chǎnpǐn. Xiāngbǐ chuántǒng wàimào, kuàjìng zhíbō bùjǐn suōduǎn le gōngyìngliàn huánjié, ràng hǎiwài mǎijiā yǐ gèng shíhuì de jiàgé mǎidào gāo xìngjiàbǐ shāngpǐn, hái néng tōngguò shíshí hùdòng kuàisù shōují shìchǎng fǎnkuì, bāngzhù gōngchǎng zài liǎng zhōu nèi tiáozhěng kuǎnshì hé pèisè. Rán'ér, kuàjìng zhíbō yě miànlín yǔyán wénhuà chāyì, hǎiwàicāng bèihuò chéngběn gāo yǐjí tuìhuànhuò liúchéng fùzá děng tiǎozhàn. Yīncǐ, zǔjiàn běndìhuà yùnyíng tuánduì, jiànlì wěndìng de hǎiwài lǚyuē tǐxì, zhèng chéngwéi pǐnpái chūhǎi chénggōng de guānjiàn.",
    contentVi: "Những năm gần đây, cùng với sự tăng trưởng bùng nổ của thị trường thương mại điện tử Đông Nam Á, ngày càng nhiều xưởng sản xuất tận gốc của Trung Quốc không còn hài lòng với mô hình bán sỉ B2B truyền thống mà trực tiếp mở phòng livestream nước ngoài để bán thẳng cho người tiêu dùng cuối. So với ngoại thương truyền thống, livestream xuyên biên giới không chỉ rút ngắn khâu chuỗi cung ứng giúp người mua nước ngoài mua được hàng chất lượng giá tốt, mà còn thu thập phản hồi thị trường nhanh qua tương tác thời gian thực, giúp xưởng điều chỉnh kiểu dáng và phối màu trong vòng hai tuần. Tuy nhiên, hình thức này cũng đối mặt với thách thức về khác biệt ngôn ngữ văn hóa, chi phí trữ hàng kho ngoại cao và quy trình đổi trả phức tạp. Vì vậy, xây dựng đội ngũ vận hành bản địa hóa và hệ thống hoàn tất đơn hàng ổn định đang trở thành chìa khóa thành công.",
    questions: [
      {
        id: "rp-ex-hsk4-advanced-1-q1",
        questionVi: "Nhiều xưởng gốc Trung Quốc gần đây đang chuyển sang mô hình nào?",
        options: ["Chỉ bán lẻ nội địa", "Trực tiếp mở livestream nước ngoài bán cho người tiêu dùng cuối", "Đóng cửa nhà máy", "Chỉ làm gia công cho đại lý"],
        correctAnswer: "Trực tiếp mở livestream nước ngoài bán cho người tiêu dùng cuối",
        explanationVi: "Bài viết nêu: '直接开通海外直播间，面向终端消费者销售产品'."
      },
      {
        id: "rp-ex-hsk4-advanced-1-q2",
        questionVi: "Livestream xuyên biên giới giúp xưởng điều chỉnh kiểu dáng và màu sắc trong bao lâu?",
        options: ["Trong 2 ngày", "Trong 2 tuần", "Trong 2 tháng", "Trong nửa năm"],
        correctAnswer: "Trong 2 tuần",
        explanationVi: "Trong bài có cụm '帮助工厂在两周内调整款式和配色'."
      },
      {
        id: "rp-ex-hsk4-advanced-1-q3",
        questionVi: "Đâu KHÔNG phải là thách thức của livestream xuyên biên giới được nêu trong bài?",
        options: ["Khác biệt ngôn ngữ và văn hóa", "Chi phí trữ hàng kho nước ngoài cao", "Quy trình đổi trả phức tạp", "Thiếu nguồn cung hàng hóa tại Trung Quốc"],
        correctAnswer: "Thiếu nguồn cung hàng hóa tại Trung Quốc",
        explanationVi: "Bài chỉ nêu 3 thách thức: ngôn ngữ văn hóa, chi phí kho ngoại, đổi trả phức tạp."
      },
      {
        id: "rp-ex-hsk4-advanced-1-q4",
        questionVi: "Chìa khóa thành công cho thương hiệu vươn ra nước ngoài là gì?",
        options: ["Giảm chất lượng sản phẩm để hạ giá", "Xây dựng đội ngũ vận hành bản địa hóa và hệ thống hoàn tất đơn hàng ổn định", "Chỉ dùng tiếng Trung khi livestream", "Không cho phép đổi trả hàng"],
        correctAnswer: "Xây dựng đội ngũ vận hành bản địa hóa và hệ thống hoàn tất đơn hàng ổn định",
        explanationVi: "Câu cuối nêu: '组建本地化运营团队、建立稳定的海外履约体系，正成为品牌出海成功的关键'."
      },
      {
        id: "rp-ex-hsk4-advanced-1-q5",
        questionVi: "Từ '性价比' (xìngjiàbǐ) trong bài có nghĩa là gì?",
        options: ["Tỷ lệ hiệu năng/chất lượng trên giá thành", "Chi phí vận chuyển", "Thuế giá trị gia tăng", "Tỷ giá ngoại tệ"],
        correctAnswer: "Tỷ lệ hiệu năng/chất lượng trên giá thành",
        explanationVi: "'高性价比商品' nghĩa là hàng hóa có chất lượng cao so với mức giá (đáng tiền)."
      }
    ]
  },
  {
    id: "rp-ex-hsk4-advanced-2",
    level: "HSK4",
    subDifficulty: "advanced",
    genre: "Văn hóa & Ẩm thực",
    title: "茶馆里的慢生活",
    titlePinyin: "Cháguǎn lǐ de màn shēnghuó",
    titleVi: "Nhịp sống chậm trong quán trà",
    contentZh: "在成都，茶馆不只是喝茶的地方，更是人们交流感情、放松身心的公共客厅。无论是清晨还是午后，老街巷里的竹椅上总是坐满了喝盖碗茶的市民。有人一边品茶一边下象棋，有人和老朋友聊家常，也有年轻人带着电脑在院子里安静地工作。与大城市快节奏的咖啡馆不同，成都茶馆讲究的是“安逸”二字——花十几块钱点一壶花茶，就可以从上午坐到傍晚，服务员还会热情地不停续水。这种不慌不忙的生活态度，正是这座城市最迷人的文化底色。",
    contentPinyin: "Zài Chéngdū, cháguǎn bùzhǐ shì hēchá de dìfang, gèng shì rénmen jiāoliú gǎnqíng, fàngsōng shēnxīn de gōnggòng kètīng. Wúlùn shì qīngchén háishi wǔhòu, lǎo jiēxiàng lǐ de zhúyǐ shàng zǒngshì zuòmǎn le hē gàiwǎnchá de shìmín. Yǒurén yìbiān pǐnchá yìbiān xià xiàngqí, yǒurén hé lǎo péngyou liáo jiācháng, yě yǒu niánqīngrén dàizhe diànnǎo zài yuànzi lǐ ānjìng de gōngzuò. Yǔ dà chéngshì kuài jiézòu de kāfēiguǎn bùtóng, Chéngdū cháguǎn jiǎngjiu de shì “ānyì” èr zì—huā shíjǐ kuài qián diǎn yì hú huāchá, jiù kěyǐ cóng shàngwǔ zuò dào bàngwǎn, fúwùyuán hái huì rèqíng de bùtíng xùshuǐ. Zhè zhǒng bùhuāngbùmáng de shēnghuó tàidù, zhèng shì zhè zuò chéngshì zuì mírén de wénhuà dǐsè.",
    contentVi: "Ở Thành Đô, quán trà không chỉ là nơi uống trà mà còn là phòng khách công cộng để mọi người giao lưu tình cảm và thư giãn thân tâm. Dù sáng sớm hay chiều tà, những chiếc ghế tre trong con phố cổ luôn chật kín người dân uống trà chén có nắp (cái uyển trà). Người vừa thưởng trà vừa đánh cờ tướng, người trò chuyện cùng bạn cũ, cũng có bạn trẻ mang máy tính ngồi làm việc yên tĩnh trong sân. Khác với quán cà phê nhịp điệu nhanh ở các đô thị lớn, quán trà Thành Đô đề cao hai chữ 'an dật' — chỉ tốn hơn chục tệ gọi một ấm trà hoa là có thể ngồi từ sáng đến chiều tối, nhân viên còn nhiệt tình châm nước liên tục. Thái độ sống thong thả ấy chính là nét văn hóa quyến rũ nhất của thành phố này.",
    questions: [
      {
        id: "rp-ex-hsk4-advanced-2-q1",
        questionVi: "Quán trà ở Thành Đô được ví như điều gì?",
        options: ["Thư viện lớn", "Phòng khách công cộng để giao lưu và thư giãn", "Văn phòng làm việc chuyên nghiệp", "Chợ đêm sầm uất"],
        correctAnswer: "Phòng khách công cộng để giao lưu và thư giãn",
        explanationVi: "Câu đầu viết: '更是人们交流感情、放松身心的公共客厅'."
      },
      {
        id: "rp-ex-hsk4-advanced-2-q2",
        questionVi: "Người dân Thành Đô thường ngồi trên loại ghế nào ở quán trà phố cổ?",
        options: ["Ghế sofa da", "Ghế tre", "Ghế nhựa", "Ghế xoay văn phòng"],
        correctAnswer: "Ghế tre",
        explanationVi: "Trong bài có cụm '老街巷里的竹椅上'."
      },
      {
        id: "rp-ex-hsk4-advanced-2-q3",
        questionVi: "Hai chữ nào thể hiện tinh thần của quán trà Thành Đô?",
        options: ["Nhanh chóng (快速)", "An dật / thư thái (安逸)", "Xa hoa (奢华)", "Cạnh tranh (竞争)"],
        correctAnswer: "An dật / thư thái (安逸)",
        explanationVi: "Bài viết nêu: '成都茶馆讲究的是“安逸”二字'."
      },
      {
        id: "rp-ex-hsk4-advanced-2-q4",
        questionVi: "Chỉ với hơn chục tệ gọi một ấm trà hoa, khách có thể làm gì?",
        options: ["Chỉ được ngồi 30 phút", "Ngồi từ sáng đến chiều tối và được châm nước liên tục", "Được tặng thêm bữa tối miễn phí", "Phải gọi thêm đồ ăn mới được ngồi"],
        correctAnswer: "Ngồi từ sáng đến chiều tối và được châm nước liên tục",
        explanationVi: "Câu văn ghi: '可以从上午坐到傍晚，服务员还会热情地不停续水'."
      },
      {
        id: "rp-ex-hsk4-advanced-2-q5",
        questionVi: "Nét văn hóa quyến rũ nhất của Thành Đô theo tác giả là gì?",
        options: ["Tốc độ phát triển nhanh", "Thái độ sống thong thả, không vội vàng", "Nhiều quán cà phê hiện đại", "Giá nhà rẻ"],
        correctAnswer: "Thái độ sống thong thả, không vội vàng",
        explanationVi: "Câu cuối viết: '这种不慌不忙的生活态度，正是这座城市最迷人的文化底色'."
      }
    ]
  },
  {
    id: "rp-ex-hsk5-basic-1",
    level: "HSK5",
    subDifficulty: "basic",
    genre: "Khoa học & Đời sống",
    title: "为什么音乐能调节情绪？",
    titlePinyin: "Wèishénme yīnyuè néng tiáojié qíngxù?",
    titleVi: "Vì sao âm nhạc có thể điều tiết cảm xúc?",
    contentZh: "心理学与神经科学研究表明，音乐之所以能迅速影响人的情绪，是因为旋律和节奏能够直接激活大脑中负责奖赏与记忆的区域。当我们听到喜爱的轻快音乐时，大脑会分泌多巴胺，让人产生愉悦感；而舒缓的纯音乐则有助于降低心率与皮质醇水平，从而有效缓解焦虑。有趣的是，研究还发现，人在悲伤时听一首忧伤的歌，反而能获得心理安慰，这是因为音乐产生了共情效应，让听众觉得自己的感受被理解了。因此，合理建立不同场景的歌单，是一种零成本且高效的情绪管理工具。",
    contentPinyin: "Xīnlǐxué yǔ shénjīng kēxué yánjiū biǎomíng, yīnyuè zhī suǒyǐ néng xùnsù yǐngxiǎng rén de qíngxù, shì yīnwèi xuánlǜ hé jiézòu nénggòu zhíjiē jīhuó dànǎo zhōng fùzé jiǎngshǎng yǔ jìyì de qūyù. Dāng wǒmen tīngdào xǐ'ài de qīngkuài yīnyuè shí, dànǎo huì fēnmì duōbā'àn, ràng rén chǎnshēng yúyuègǎn; ér shūhuǎn de chúnyīnyuè zé yǒuzhùyú jiàngdī xīnlǜ yǔ pízhìchún shuǐpíng, cóng'ér yǒuxiào huǎnjiě jiāolǜ. Yǒuqù de shì, yánjiū hái fāxiàn, rén zài bēishāng shí tīng yì shǒu yōushāng de gē, fǎn'ér néng huòdé xīnlǐ ānwèi, zhè shì yīnwèi yīnyuè chǎnshēng le gòngqíng xiàoyìng, ràng tīngzhòng juéde zìjǐ de gǎnshòu bèi lǐjiě le. Yīncǐ, hélǐ jiànlì bùtóng chǎngjǐng de gēdān, shì yì zhǒng líng chéngběn qiě gāoxiào de qíngxù guǎnlǐ gōngjù.",
    contentVi: "Nghiên cứu tâm lý học và khoa học thần kinh cho thấy âm nhạc có thể tác động nhanh chóng đến cảm xúc con người là vì giai điệu và tiết tấu kích hoạt trực tiếp vùng não phụ trách phần thưởng và ký ức. Khi nghe bản nhạc vui tươi yêu thích, não tiết ra dopamine tạo cảm giác hưng phấn; còn nhạc không lời êm dịu giúp hạ nhịp tim và mức cortisol, từ đó giảm lo âu hiệu quả. Điều thú vị là khi buồn mà nghe một bản nhạc buồn lại giúp con người được an ủi về tâm lý, do âm nhạc tạo ra hiệu ứng đồng cảm khiến người nghe thấy cảm xúc của mình được thấu hiểu. Do đó, lập danh sách nhạc phù hợp từng bối cảnh là công cụ quản lý cảm xúc hiệu quả và không tốn chi phí.",
    questions: [
      {
        id: "rp-ex-hsk5-basic-1-q1",
        questionVi: "Vì sao âm nhạc có thể tác động nhanh đến cảm xúc?",
        options: ["Vì lời bài hát luôn vui vẻ", "Vì giai điệu và tiết tấu kích hoạt trực tiếp vùng não phụ trách phần thưởng và ký ức", "Vì âm lượng lớn làm người nghe tỉnh táo", "Vì âm nhạc thay thế được giấc ngủ"],
        correctAnswer: "Vì giai điệu và tiết tấu kích hoạt trực tiếp vùng não phụ trách phần thưởng và ký ức",
        explanationVi: "Câu đầu nêu: '旋律和节奏能够直接激活大脑中负责奖赏与记忆的区域'."
      },
      {
        id: "rp-ex-hsk5-basic-1-q2",
        questionVi: "Nhạc không lời êm dịu mang lại tác dụng sinh lý nào?",
        options: ["Tăng nhịp tim", "Hạ nhịp tim và mức cortisol, giúp giảm lo âu", "Làm tăng cảm giác đói", "Gây mất tập trung"],
        correctAnswer: "Hạ nhịp tim và mức cortisol, giúp giảm lo âu",
        explanationVi: "Bài viết ghi: '舒缓的纯音乐则有助于降低心率与皮质醇水平，从而有效缓解焦虑'."
      },
      {
        id: "rp-ex-hsk5-basic-1-q3",
        questionVi: "Vì sao nghe nhạc buồn lúc đang buồn lại giúp người nghe cảm thấy được an ủi?",
        options: ["Vì họ quên mất lý do buồn", "Vì tạo ra hiệu ứng đồng cảm, khiến người nghe thấy mình được thấu hiểu", "Vì nhạc buồn có tiết tấu nhanh", "Vì nhạc buồn không có lời"],
        correctAnswer: "Vì tạo ra hiệu ứng đồng cảm, khiến người nghe thấy mình được thấu hiểu",
        explanationVi: "Trong bài có câu: '这是因为音乐产生了共情效应，让听众觉得自己的感受被理解了'."
      },
      {
        id: "rp-ex-hsk5-basic-1-q4",
        questionVi: "Khi nghe nhạc vui tươi yêu thích, não bộ tiết ra chất gì?",
        options: ["Cortisol", "Dopamine (多巴胺)", "Insulin", "Adrenaline"],
        correctAnswer: "Dopamine (多巴胺)",
        explanationVi: "Câu văn ghi: '大脑会分泌多巴胺，让人产生愉悦感'."
      },
      {
        id: "rp-ex-hsk5-basic-1-q5",
        questionVi: "Tác giả đề xuất cách ứng dụng thực tế nào ở cuối bài?",
        options: ["Học chơi một loại nhạc cụ", "Lập danh sách nhạc (歌单) phù hợp từng bối cảnh để quản lý cảm xúc", "Không nghe nhạc khi làm việc", "Chỉ nghe nhạc cổ điển"],
        correctAnswer: "Lập danh sách nhạc (歌单) phù hợp từng bối cảnh để quản lý cảm xúc",
        explanationVi: "Câu cuối viết: '合理建立不同场景的歌单，是一种零成本且高效的情绪管理工具'."
      }
    ]
  },
  {
    id: "rp-ex-hsk5-advanced-1",
    level: "HSK5",
    subDifficulty: "advanced",
    genre: "Đàm phán & Chuỗi cung ứng",
    title: "外贸合同中的交期博弈",
    titlePinyin: "Wàimào hétong zhōng de jiāoqī bóyì",
    titleVi: "Cuộc đấu trí về thời hạn giao hàng trong hợp đồng ngoại thương",
    contentZh: "在国际贸易实务中，采购商往往只盯着单价反复压价，却忽略了“交货期”同样隐藏着巨大的隐性成本。以鞋类代工为例，旺季时原材料供应紧张，如果工厂为了抢单盲目承诺二十天交货，结果因皮料延迟或产能不足被迫延期，采购商不仅会错过最佳销售窗口，还可能面临电商平台的违约罚款。经验丰富的采购经理通常会在合同中明确分批交货条款与阶梯式违约金，并在大货生产中期安排第三方验货，既给工厂留出合理的缓冲时间，又将延期风险控制在可承受范围内。",
    contentPinyin: "Zài guójì màoyì shíwù zhōng, cǎigòushāng wǎngwǎng zhǐ dīngzhe dānjià fǎnfù yājià, què hūlüè le “jiāohuòqī” tóngyàng yǐncángzhe jùdà de yǐnxìng chéngběn. Yǐ xiélèi dàigōng wéi lì, wàngjì shí yuáncáiliào gōngyìng jǐnzhāng, rúguǒ gōngchǎng wèile qiǎngdān mángmù chéngnuò èrshí tiān jiāohuò, jiéguǒ yīn píliào yánchí huò chǎnnéng bùzú bèipò yánqī, cǎigòushāng bùjǐn huì cuòguò zuìjiā xiāoshòu chuāngkǒu, hái kěnéng miànlín diànshāng píngtái de wéiyuē fákuǎn. Jīngyàn fēngfù de cǎigòu jīnglǐ tōngcháng huì zài hétong zhōng míngquè fēnpī jiāohuò tiáokuǎn yǔ jiētīshì wéiyuējīn, bìng zài dàhuò shēngchǎn zhōngqī ānpái dìsānfāng yànhuò, jì gěi gōngchǎng liúchū hélǐ de huǎnchōng shíjiān, yòu jiāng yánqī fēngxiǎn kòngzhì zài kě chéngshòu fànwéi nèi.",
    contentVi: "Trong thực tiễn thương mại quốc tế, bên mua thường chỉ chăm chăm ép đơn giá mà quên rằng 'thời hạn giao hàng' cũng ẩn chứa chi phí ngầm khổng lồ. Lấy gia công giày dép làm ví dụ, vào mùa cao điểm nguyên liệu khan hiếm, nếu xưởng vì tranh đơn mà cam kết bừa giao hàng trong 20 ngày, kết quả vì chậm da hoặc thiếu công suất mà buộc phải trễ hạn, bên mua không chỉ lỡ thời điểm bán vàng mà còn có thể bị sàn thương mại điện tử phạt vi phạm. Quản lý thu mua giàu kinh nghiệm thường quy định rõ điều khoản giao từng đợt và mức phạt trễ hạn theo bậc thang trong hợp đồng, đồng thời bố trí bên thứ ba kiểm hàng giữa kỳ sản xuất, vừa cho xưởng thời gian đệm hợp lý vừa kiểm soát rủi ro trễ hẹn.",
    questions: [
      {
        id: "rp-ex-hsk5-advanced-1-q1",
        questionVi: "Sai lầm phổ biến của nhiều bên mua trong ngoại thương là gì?",
        options: ["Chỉ tập trung ép đơn giá mà bỏ qua chi phí ngầm của thời hạn giao hàng", "Không ký hợp đồng bằng văn bản", "Luôn trả trước 100% tiền hàng", "Chỉ chọn xưởng lớn nhất"],
        correctAnswer: "Chỉ tập trung ép đơn giá mà bỏ qua chi phí ngầm của thời hạn giao hàng",
        explanationVi: "Câu đầu nêu: '往往只盯着单价反复压价，却忽略了“交货期”同样隐藏着巨大的隐性成本'."
      },
      {
        id: "rp-ex-hsk5-advanced-1-q2",
        questionVi: "Hậu quả khi xưởng giao hàng trễ vào mùa cao điểm là gì?",
        options: ["Chỉ cần đổi mẫu khác", "Bên mua lỡ thời điểm bán tốt nhất và có thể bị sàn TMĐT phạt vi phạm", "Nguyên liệu sẽ rẻ hơn", "Khách hàng sẽ thông cảm hoàn toàn"],
        correctAnswer: "Bên mua lỡ thời điểm bán tốt nhất và có thể bị sàn TMĐT phạt vi phạm",
        explanationVi: "Bài viết ghi: '不仅会错过最佳销售窗口，还可能面临电商平台的违约罚款'."
      },
      {
        id: "rp-ex-hsk5-advanced-1-q3",
        questionVi: "Quản lý thu mua giàu kinh nghiệm thường thêm hai điều khoản nào vào hợp đồng?",
        options: ["Miễn kiểm hàng và thanh toán tiền mặt", "Giao hàng từng đợt (分批交货) và phạt vi phạm theo bậc thang (阶梯式违约金)", "Độc quyền khu vực và chiết khấu cuối năm", "Bảo hành 5 năm và đổi trả tự do"],
        correctAnswer: "Giao hàng từng đợt (分批交货) và phạt vi phạm theo bậc thang (阶梯式违约金)",
        explanationVi: "Câu văn nêu: '明确分批交货条款与阶梯式违约金'."
      },
      {
        id: "rp-ex-hsk5-advanced-1-q4",
        questionVi: "Bên thứ ba được sắp xếp kiểm hàng vào thời điểm nào?",
        options: ["Trước khi ký hợp đồng", "Giữa kỳ sản xuất hàng loạt (大货生产中期)", "Sau khi hàng đã bán hết", "Khi khách hàng khiếu nại"],
        correctAnswer: "Giữa kỳ sản xuất hàng loạt (大货生产中期)",
        explanationVi: "Trong bài ghi rõ: '并在大货生产中期安排第三方验货'."
      },
      {
        id: "rp-ex-hsk5-advanced-1-q5",
        questionVi: "Mục tiêu của cách làm này là gì?",
        options: ["Ép xưởng giảm giá sâu hơn", "Vừa tạo thời gian đệm hợp lý cho xưởng, vừa kiểm soát rủi ro trễ hẹn", "Hủy hợp đồng sớm", "Tránh phải trả tiền vận chuyển"],
        correctAnswer: "Vừa tạo thời gian đệm hợp lý cho xưởng, vừa kiểm soát rủi ro trễ hẹn",
        explanationVi: "Câu cuối viết: '既给工厂留出合理的缓冲时间，又将延期风险控制在可承受范围内'."
      }
    ]
  },
  {
    id: "rp-ex-hsk5-advanced-2",
    level: "HSK5",
    subDifficulty: "advanced",
    genre: "Môi trường & Đô thị",
    title: "海绵城市如何应对暴雨？",
    titlePinyin: "Hǎimián chéngshì rúhé yìngduì bàoyǔ?",
    titleVi: "Thành phố bọt biển ứng phó với mưa lớn ra sao?",
    contentZh: "过去，许多现代城市习惯用大面积水泥和沥青铺设路面，一遇到强降雨，雨水无法下渗，只能全部涌向地下排水管网，极易引发严重内涝。为了破解这一难题，“海绵城市”理念应运而生。顾名思义，这种城市像海绵一样富有弹性：下雨时通过透水砖、下沉式绿地和人工湿地吸水、蓄水并净化雨水；干旱时再将储存的水释放出来用于绿化灌溉和道路清扫。实践证明，海绵城市不仅显著降低了洪涝灾害风险，还有效缓解了城市热岛效应，实现了人与自然的和谐共生。",
    contentPinyin: "Guòqù, xǔduō xiàndài chéngshì xíguàn yòng dàmìanjī shuǐní hé lìqīng pūshè lùmiàn, yí yùdào qiáng jiàngyǔ, yǔshuǐ wúfǎ xiàshèn, zhǐ néng quánbù yǒngxiàng dìxià páishuǐ guǎnwǎng, jíyì yǐnfā yánzhòng nèilào. Wèile pòjiě zhè yì nántí, “hǎimián chéngshì” lǐniàn yìngyùn'érshēng. Gùmíngsīyì, zhè zhǒng chéngshì xiàng hǎimián yíyàng fùyǒu tánxìng: xiàyǔ shí tōngguò tòushuǐzhuān, xiàchénshì lǜdì hé réngōng shīdì xīshuǐ, xùshuǐ bìng jìnghuà yǔshuǐ; gānhàn shí zài jiāng chǔcún de shuǐ shìfàng chūlái yòngyú lǜhuà guàngài hé dàolù qīngsǎo. Shíjiàn zhèngmíng, hǎimián chéngshì bùjǐn xiǎnzhù jiàngdī le hónglào zāihài fēngxiǎn, hái yǒuxiào huǎnjiě le chéngshì rèdǎo xiàoyìng, shíxiàn le rén yǔ zìrán de héxié gòngshēng.",
    contentVi: "Trước đây, nhiều đô thị hiện đại quen lát mặt đường bằng diện tích lớn xi măng và nhựa đường, hễ gặp mưa lớn nước không thấm xuống đất được mà đổ dồn toàn bộ vào hệ thống cống ngầm, rất dễ gây ngập úng nghiêm trọng. Để giải bài toán này, khái niệm 'thành phố bọt biển' đã ra đời. Đúng như tên gọi, đô thị này có độ đàn hồi như miếng bọt biển: khi mưa sẽ dùng gạch thấm nước, thảm xanh trũng và đầm lầy nhân tạo để hút, trữ và lọc nước mưa; khi hạn hán lại giải phóng lượng nước tích trữ để tưới cây và rửa đường. Thực tiễn chứng minh thành phố bọt biển không chỉ giảm mạnh nguy cơ ngập lụt mà còn giảm hiệu ứng đảo nhiệt đô thị hiệu quả.",
    questions: [
      {
        id: "rp-ex-hsk5-advanced-2-q1",
        questionVi: "Vì sao các đô thị truyền thống dễ bị ngập úng khi mưa lớn?",
        options: ["Vì không có sông hồ", "Vì lát nhiều xi măng và nhựa đường khiến nước mưa không thấm xuống được", "Vì trồng quá nhiều cây xanh", "Vì mưa kéo dài cả năm"],
        correctAnswer: "Vì lát nhiều xi măng và nhựa đường khiến nước mưa không thấm xuống được",
        explanationVi: "Câu đầu nêu: '用大面积水泥和沥青铺设路面...雨水无法下渗...极易引发严重内涝'."
      },
      {
        id: "rp-ex-hsk5-advanced-2-q2",
        questionVi: "Thành phố bọt biển hấp thụ và trữ nước mưa bằng những công trình nào?",
        options: ["Tường bê tông cao", "Gạch thấm nước, thảm xanh trũng và đầm lầy nhân tạo", "Bể bơi trên sân thượng", "Đường hầm tàu điện ngầm"],
        correctAnswer: "Gạch thấm nước, thảm xanh trũng và đầm lầy nhân tạo",
        explanationVi: "Bài viết ghi: '通过透水砖、下沉式绿地和人工湿地吸水、蓄水并净化雨水'."
      },
      {
        id: "rp-ex-hsk5-advanced-2-q3",
        questionVi: "Khi trời hạn hán, lượng nước tích trữ được dùng vào việc gì?",
        options: ["Cấp nước uống trực tiếp", "Tưới tiêu cây xanh và rửa đường", "Sản xuất thủy điện", "Bán cho nông thôn"],
        correctAnswer: "Tưới tiêu cây xanh và rửa đường",
        explanationVi: "Trong bài nêu: '用于绿化灌溉和道路清扫'."
      },
      {
        id: "rp-ex-hsk5-advanced-2-q4",
        questionVi: "Ngoài giảm ngập lụt, thành phố bọt biển còn mang lại lợi ích môi trường nào?",
        options: ["Giảm tiếng ồn giao thông", "Giảm hiệu ứng đảo nhiệt đô thị (城市热岛效应)", "Tăng diện tích bãi đỗ xe", "Giảm chi phí điện năng"],
        correctAnswer: "Giảm hiệu ứng đảo nhiệt đô thị (城市热岛效应)",
        explanationVi: "Câu cuối viết: '还有效缓解了城市热岛效应'."
      },
      {
        id: "rp-ex-hsk5-advanced-2-q5",
        questionVi: "Thành ngữ '应运而生' (yìngyùn'érshēng) trong bài có nghĩa là gì?",
        options: ["Biến mất theo thời gian", "Ra đời đúng lúc đáp ứng nhu cầu thực tiễn", "Bị phản đối mạnh mẽ", "Tồn tại từ thời cổ đại"],
        correctAnswer: "Ra đời đúng lúc đáp ứng nhu cầu thực tiễn",
        explanationVi: "应运而生 chỉ sự vật, khái niệm ra đời thuận theo thời thế và nhu cầu."
      }
    ]
  },
  {
    id: "rp-ex-hsk6-basic-1",
    level: "HSK6",
    subDifficulty: "basic",
    genre: "Công nghệ & Xã hội",
    title: "算法推荐与“信息茧房”效应",
    titlePinyin: "Suànfǎ tuījiàn yǔ “xìnxī jiǎnfáng” xiàoyìng",
    titleVi: "Thuật toán đề xuất và hiệu ứng 'kén thông tin'",
    contentZh: "在移动互联网时代，精准的算法推荐极大提升了人们获取信息的效率，无论是新闻资讯还是商品购物，平台似乎总能“猜中”我们的喜好。然而，这种高度定制化的便利背后也潜藏着隐忧：当用户长期只接触符合既有偏好的内容时，视野会逐渐窄化，仿佛被包裹在一个密不透风的“信息茧房”之中。久而久之，人们不仅容易对异质观点产生排斥，还可能加剧社会群体的认知极化。要打破这一困境，除了平台方应优化算法机制、适当引入多元化内容外，用户自身也需保持独立思考与主动跨界阅读的自觉。",
    contentPinyin: "Zài yídòng hùliánwǎng shídài, jīngzhǔn de suànfǎ tuījiàn jídà tíshēng le rénmen huòqǔ xìnxī de xiàolǜ, wúlùn shì xīnwén zīxùn háishi shāngpǐn gòuwù, píngtái sìhū zǒng néng “cāizhòng” wǒmen de xǐhào. Rán'ér, zhè zhǒng gāodù dìngzhìhuà de biànlì bèihòu yě qiáncángzhe yǐnyōu: dāng yònghù chángqī zhǐ jiēchù fúhé jìyǒu piānhào de nèiróng shí, shìyě huì zhújiàn zhǎihuà, fǎngfú bèi bāoguǒ zài yí ge mìbùtòufēng de “xìnxī jiǎnfáng” zhīzhōng. Jiǔ'érjiǔzhī, rénmen bùjǐn róngyì duì yìzhì guāndiǎn chǎnshēng páichì, hái kěnéng jiājù shèhuì qúntǐ de rènzhī jíhuà. Yào dǎpò zhè yí kùnjìng, chúle píngtáifāng yīng yōuhuà suànfǎ jīzhì, shìdàng yǐnrù duōyuánhuà nèiróng wài, yònghù zìshēn yě xū bǎochí dúlì sīkǎo yǔ zhǔdòng kuàjiè yuèdú de zìjué.",
    contentVi: "Trong kỷ nguyên Internet di động, thuật toán đề xuất chính xác đã nâng cao mạnh mẽ hiệu suất tiếp nhận thông tin; dù là tin tức hay mua sắm, nền tảng dường như luôn 'đoán trúng' sở thích của chúng ta. Tuy nhiên, đằng sau sự tiện lợi cá nhân hóa cao độ này lại tiềm ẩn nỗi lo: khi người dùng lâu dài chỉ tiếp xúc với nội dung hợp gu sẵn có, tầm nhìn sẽ dần thu hẹp như bị bọc trong một 'kén thông tin' kín mít. Lâu dần, con người không chỉ dễ bài xích quan điểm khác biệt mà còn làm trầm trọng thêm sự phân cực nhận thức xã hội. Để phá vỡ thế kẹt này, ngoài việc nền tảng cần tối ưu thuật toán và đưa thêm nội dung đa dạng, bản thân người dùng cũng cần giữ tư duy độc lập và ý thức chủ động đọc đa lĩnh vực.",
    questions: [
      {
        id: "rp-ex-hsk6-basic-1-q1",
        questionVi: "'Kén thông tin' (信息茧房) trong bài chỉ hiện tượng gì?",
        options: ["Người dùng không có mạng Internet", "Người dùng lâu dài chỉ tiếp xúc nội dung hợp sở thích sẵn có khiến tầm nhìn thu hẹp", "Thông tin trên mạng đều là tin giả", "Tốc độ truyền tải dữ liệu chậm"],
        correctAnswer: "Người dùng lâu dài chỉ tiếp xúc nội dung hợp sở thích sẵn có khiến tầm nhìn thu hẹp",
        explanationVi: "Bài viết giải thích: '当用户长期只接触符合既有偏好的内容时，视野会逐渐窄化，仿佛被包裹在一个密不透风的“信息茧房”之中'."
      },
      {
        id: "rp-ex-hsk6-basic-1-q2",
        questionVi: "Hậu quả xã hội lâu dài của hiệu ứng kén thông tin là gì?",
        options: ["Giảm doanh thu thương mại điện tử", "Dễ bài xích quan điểm khác biệt và làm tăng phân cực nhận thức", "Khiến mọi người ngừng dùng điện thoại", "Làm tăng tốc độ đọc sách"],
        correctAnswer: "Dễ bài xích quan điểm khác biệt và làm tăng phân cực nhận thức",
        explanationVi: "Câu văn nêu: '不仅容易对异质观点产生排斥，还可能加剧社会群体的认知极化'."
      },
      {
        id: "rp-ex-hsk6-basic-1-q3",
        questionVi: "Nền tảng công nghệ cần làm gì để khắc phục tình trạng này?",
        options: ["Xóa bỏ hoàn toàn thuật toán", "Tối ưu cơ chế thuật toán và đưa vào nội dung đa dạng một cách hợp lý", "Chỉ đăng tải tin tức giải trí", "Thu phí cao hơn với người dùng"],
        correctAnswer: "Tối ưu cơ chế thuật toán và đưa vào nội dung đa dạng một cách hợp lý",
        explanationVi: "Bài viết nêu: '平台方应优化算法机制、适当引入多元化内容'."
      },
      {
        id: "rp-ex-hsk6-basic-1-q4",
        questionVi: "Bản thân người dùng cần có thái độ thế nào?",
        options: ["Tin tưởng tuyệt đối vào đề xuất của nền tảng", "Giữ tư duy độc lập và chủ động đọc mở rộng đa lĩnh vực", "Chỉ đọc bài viết của bạn bè thân thiết", "Không đọc tin tức nữa"],
        correctAnswer: "Giữ tư duy độc lập và chủ động đọc mở rộng đa lĩnh vực",
        explanationVi: "Câu cuối viết: '用户自身也需保持独立思考与主动跨界阅读的自觉'."
      },
      {
        id: "rp-ex-hsk6-basic-1-q5",
        questionVi: "Thái độ của tác giả đối với thuật toán đề xuất là gì?",
        options: ["Phủ nhận hoàn toàn", "Khách quan: ghi nhận sự tiện lợi nhưng cảnh báo rủi ro tiềm ẩn", "Ca ngợi tuyệt đối không có nhược điểm", "Thờ ơ không quan tâm"],
        correctAnswer: "Khách quan: ghi nhận sự tiện lợi nhưng cảnh báo rủi ro tiềm ẩn",
        explanationVi: "Tác giả mở đầu bằng mặt tích cực ('极大提升了...效率') rồi chuyển sang phân tích rủi ro ('然而...潜藏着隐忧')."
      }
    ]
  },
  {
    id: "rp-ex-hsk6-advanced-1",
    level: "HSK6",
    subDifficulty: "advanced",
    genre: "Kinh tế & Sản xuất",
    title: "传统制造业的“柔性供应链”转型",
    titlePinyin: "Chuántǒng zhìzàoyè de “róuxìng gōngyìngliàn” zhuǎnxíng",
    titleVi: "Chuyển đổi 'chuỗi cung ứng linh hoạt' của ngành sản xuất truyền thống",
    contentZh: "在过去的工业大生产模式下，服装与鞋类工厂普遍依赖“大批量、少批次”的刚性生产以摊薄单件成本。然而，随着社交媒体加速时尚潮流迭代，传统模式一旦预测失误，便会造成巨额库存积压，甚至拖垮企业现金流。如今，越来越多领先制造企业开始推行“小单快反”的柔性供应链：先通过数字化系统小批量试产三百至五百件测试市场反应，一旦某款产品成为爆款，便迅速联动面料商与智能产线在七天内完成返单补货。这种以实时需求拉动生产的模式，不仅大幅降低了库存滞销率，也重塑了中国制造在全球快时尚产业链中的核心竞争力。",
    contentPinyin: "Zài guòqù de gōngyè dàshēngchǎn móshì xià, fúzhuāng yǔ xiélèi gōngchǎng pǔbiàn yīlài “dàpīliàng, shǎopīcì” de gāngxìng shēngchǎn yǐ tānbó dānjiàn chéngběn. Rán'ér, suízhe shèjiāo méitǐ jiāsù shíshàng cháoliú diédài, chuántǒng móshì yídàn yùcè shīwù, biàn huì zàochéng jù'é kùcún jīyā, shènzhì tuōkuǎ qǐyè xiànjīnliú. Rújīn, yuè lái yuè duō lǐngxiān zhìzào qǐyè kāishǐ tuīxíng “xiǎodān kuàifǎn” de róuxìng gōngyìngliàn: xiān tōngguò shùzìhuà xìtǒng xiǎopīliàng shìchǎn sānbǎi zhì wǔbǎi jiàn cèshì shìchǎng fǎnyìng, yídàn mǒu kuǎn chǎnpǐn chéngwéi bàokuǎn, biàn xùnsù liándòng miànliàoshāng yǔ zhìnéng chǎnxiàn zài qī tiān nèi wánchéng fǎndān bǔhuò. Zhè zhǒng yǐ shíshí xūqiú lādòng shēngchǎn de móshì, bùjǐn dàfú jiàngdī le kùcún zhìxiāolǜ, yě chóngsù le Zhōngguó zhìzào zài quánqiú kuàishíshàng chǎnyèliàn zhōng de héxīn jìngzhēnglì.",
    contentVi: "Trong mô hình đại công nghiệp trước đây, các xưởng may mặc và giày dép thường dựa vào sản xuất cứng nhắc 'số lượng lớn, ít đợt' để chia nhỏ chi phí đơn vị. Tuy nhiên, khi mạng xã hội đẩy nhanh vòng đời xu hướng thời trang, mô hình truyền thống hễ dự báo sai sẽ gây tồn kho khổng lồ, thậm chí làm sụp đổ dòng tiền doanh nghiệp. Ngày nay, ngày càng nhiều doanh nghiệp sản xuất tiên phong áp dụng chuỗi cung ứng linh hoạt 'đơn nhỏ phản ứng nhanh': trước tiên sản xuất thử 300–500 sản phẩm qua hệ thống số hóa để đo phản ứng thị trường, hễ mẫu nào thành hàng hot thì lập tức liên kết nhà cung cấp nguyên liệu và dây chuyền thông minh bổ sung hàng trong 7 ngày. Mô hình lấy nhu cầu thực tế dẫn dắt sản xuất này không chỉ giảm mạnh tỷ lệ tồn kho ế ẩm mà còn định hình lại năng lực cạnh tranh cốt lõi.",
    questions: [
      {
        id: "rp-ex-hsk6-advanced-1-q1",
        questionVi: "Rủi ro lớn nhất của mô hình sản xuất 'số lượng lớn, ít đợt' trong thời đại mạng xã hội là gì?",
        options: ["Chi phí đơn vị quá cao", "Dự báo sai sẽ gây tồn kho khổng lồ và đe dọa dòng tiền", "Không tìm được công nhân", "Thời gian vận chuyển chậm"],
        correctAnswer: "Dự báo sai sẽ gây tồn kho khổng lồ và đe dọa dòng tiền",
        explanationVi: "Bài viết nêu: '一旦预测失误，便会造成巨额库存积压，甚至拖垮企业现金流'."
      },
      {
        id: "rp-ex-hsk6-advanced-1-q2",
        questionVi: "Quy mô sản xuất thử (试产) trong mô hình 'đơn nhỏ phản ứng nhanh' là bao nhiêu?",
        options: ["50 đến 100 sản phẩm", "300 đến 500 sản phẩm", "3.000 đến 5.000 sản phẩm", "10.000 sản phẩm"],
        correctAnswer: "300 đến 500 sản phẩm",
        explanationVi: "Trong bài có cụm '小批量试产三百至五百件测试市场反应'."
      },
      {
        id: "rp-ex-hsk6-advanced-1-q3",
        questionVi: "Khi một mẫu trở thành 'bạo khoản' (爆款), xưởng có thể hoàn tất bổ sung hàng trong bao lâu?",
        options: ["Trong 24 giờ", "Trong 7 ngày", "Trong 30 ngày", "Trong 2 tháng"],
        correctAnswer: "Trong 7 ngày",
        explanationVi: "Câu văn ghi: '在七天内完成返单补货'."
      },
      {
        id: "rp-ex-hsk6-advanced-1-q4",
        questionVi: "Đặc trưng cốt lõi của chuỗi cung ứng linh hoạt là gì?",
        options: ["Sản xuất trước thật nhiều rồi mới bán", "Lấy nhu cầu thời gian thực dẫn dắt sản xuất", "Cắt giảm toàn bộ khâu thiết kế", "Chỉ bán cho thị trường nội địa"],
        correctAnswer: "Lấy nhu cầu thời gian thực dẫn dắt sản xuất",
        explanationVi: "Bài viết nêu rõ: '这种以实时需求拉动生产的模式'."
      },
      {
        id: "rp-ex-hsk6-advanced-1-q5",
        questionVi: "Lợi ích lớn nhất của mô hình '小单快反' là gì?",
        options: ["Xóa bỏ hoàn toàn chi phí nguyên liệu", "Giảm mạnh tỷ lệ tồn kho ế ẩm và nâng cao năng lực cạnh tranh cốt lõi", "Không cần dùng đến hệ thống số hóa", "Tăng giá bán gấp đôi"],
        correctAnswer: "Giảm mạnh tỷ lệ tồn kho ế ẩm và nâng cao năng lực cạnh tranh cốt lõi",
        explanationVi: "Câu cuối viết: '不仅大幅降低了库存滞销率，也重塑了...核心竞争力'."
      }
    ]
  },
  {
    id: "rp-ex-hsk7-basic-1",
    level: "HSK7",
    subDifficulty: "basic",
    genre: "Khoa học & Đạo đức AI",
    title: "生成式人工智能与版权边界的博弈",
    titlePinyin: "Shēngchéngshì réngōng zhìnéng yǔ bǎnquán biānjiè de bóyì",
    titleVi: "AI tạo sinh và cuộc giằng co về ranh giới bản quyền",
    contentZh: "生成式人工智能的迅猛普及，正在深刻重构内容创作行业的生产逻辑。大模型凭借海量数据训练，能在数秒内生成媲美专业水准的插画、文案乃至交响乐片段。然而，技术狂飙突进的背后，知识产权归属的法律灰色地带日益凸显：一方面，原始创作者质疑科技公司在未经授权的情况下抓取其受版权保护的作品作为训练语料，构成了对劳动成果的隐性掠夺；另一方面，人工智能企业则主张模型学习的是抽象风格与统计规律，属于“合理使用”范畴。如何在激励技术创新与保护人类原创尊严之间寻求制度平衡，已成为全球立法机构亟待回应的时代命题。",
    contentPinyin: "Shēngchéngshì réngōng zhìnéng de xùnměng pǔjí, zhèngzài shēnkè chónggòu nèiróng chuàngzuò hángyè de shēngchǎn luójí. Dàmóxíng píngjiè hǎiliàng shùjù xùnliàn, néng zài shù miǎo nèi shēngchéng pìměi zhuānyè shuǐzhǔn de chāhuà, wén'àn nǎizhì jiāoxiǎngyuè piànduàn. Rán'ér, jìshù kuángbiāo tūjìn de bèihòu, zhīshichǎnquán guīshǔ de fǎlǜ huīsè dìdài rìyì tūxiǎn: yì fāngmiàn, yuánshǐ chuàngzuòzhě zhìyí kējì gōngsī zài wèijīng shòuquán de qíngkuàng xià zhuāqǔ qí shòu bǎnquán bǎohù de zuòpǐn zuòwéi xùnliàn yǔliào, gòuchéng le duì láodòng chéngguǒ de yǐnxìng lüèduó; lìng yì fāngmiàn, réngōng zhìnéng qǐyè zé zhǔzhāng móxíng xuéxí de shì chōuxiàng fēnggé yǔ tǒngjì guīlǜ, shǔyú “hélǐ shǐyòng” fànchóu. Rúhé zài jīlì jìshù chuàngxīn yǔ bǎohù rénlèi yuánchuàng zūnyán zhījiān xúnqiú zhìdù pínghéng, yǐ chéngwéi quánqiú lìfǎ jīgòu jídài huíyìng de shídài mìngtí.",
    contentVi: "Sự phổ cập thần tốc của trí tuệ nhân tạo tạo sinh đang tái cấu trúc sâu sắc logic sản xuất của ngành sáng tạo nội dung. Nhờ huấn luyện trên dữ liệu khổng lồ, các mô hình lớn có thể tạo ra tranh minh họa, bài viết thậm chí đoạn giao hưởng sánh ngang trình độ chuyên nghiệp chỉ trong vài giây. Tuy nhiên, đằng sau bước tiến vũ bão ấy là vùng xám pháp lý ngày càng rõ nét về sở hữu trí tuệ: một mặt, tác giả gốc chất vấn việc công ty công nghệ thu thập tác phẩm có bản quyền làm dữ liệu huấn luyện khi chưa được phép là hành vi chiếm đoạt ngầm; mặt khác, doanh nghiệp AI lập luận rằng mô hình chỉ học phong cách trừu tượng và quy luật thống kê, thuộc phạm vi 'sử dụng hợp lý'. Tìm điểm cân bằng thể chế giữa khuyến khích đổi mới công nghệ và bảo vệ phẩm giá sáng tạo nguyên bản của con người đã trở thành bài toán cấp bách của các cơ quan lập pháp toàn cầu.",
    questions: [
      {
        id: "rp-ex-hsk7-basic-1-q1",
        questionVi: "Các tác giả gốc phản đối điều gì ở các công ty AI?",
        options: ["AI tạo ra nội dung quá chậm", "Thu thập tác phẩm có bản quyền làm dữ liệu huấn luyện khi chưa được ủy quyền", "Giá dịch vụ AI quá đắt", "AI không biết sáng tác nhạc"],
        correctAnswer: "Thu thập tác phẩm có bản quyền làm dữ liệu huấn luyện khi chưa được ủy quyền",
        explanationVi: "Bài viết nêu: '质疑科技公司在未经授权的情况下抓取其受版权保护的作品作为训练语料'."
      },
      {
        id: "rp-ex-hsk7-basic-1-q2",
        questionVi: "Các doanh nghiệp AI biện hộ cho việc huấn luyện mô hình dựa trên lập luận nào?",
        options: ["Họ đã trả tiền cho mọi tác giả", "Mô hình chỉ học phong cách trừu tượng và quy luật thống kê, thuộc 'sử dụng hợp lý' (合理使用)", "Bản quyền không còn tồn tại trong kỷ nguyên số", "Tác phẩm trên mạng đều là tài sản công"],
        correctAnswer: "Mô hình chỉ học phong cách trừu tượng và quy luật thống kê, thuộc 'sử dụng hợp lý' (合理使用)",
        explanationVi: "Câu văn ghi: '主张模型学习的是抽象风格与统计规律，属于“合理使用”范畴'."
      },
      {
        id: "rp-ex-hsk7-basic-1-q3",
        questionVi: "Cụm từ '法律灰色地带' trong bài có nghĩa là gì?",
        options: ["Luật pháp đã quy định rất chặt chẽ", "Vùng xám pháp lý (chưa có quy định rõ ràng, còn tranh cãi)", "Tòa án đã cấm hoàn toàn AI", "Quy định chỉ áp dụng cho báo in"],
        correctAnswer: "Vùng xám pháp lý (chưa có quy định rõ ràng, còn tranh cãi)",
        explanationVi: "法律灰色地带 chỉ khu vực pháp luật chưa phân định rạch ròi."
      },
      {
        id: "rp-ex-hsk7-basic-1-q4",
        questionVi: "Bài toán cấp bách mà các cơ quan lập pháp toàn cầu phải giải quyết là gì?",
        options: ["Cấm toàn bộ mô hình AI lớn", "Tìm điểm cân bằng thể chế giữa khuyến khích đổi mới công nghệ và bảo vệ bản quyền sáng tạo của con người", "Bãi bỏ luật sở hữu trí tuệ", "Đánh thuế 100% lên nội dung số"],
        correctAnswer: "Tìm điểm cân bằng thể chế giữa khuyến khích đổi mới công nghệ và bảo vệ bản quyền sáng tạo của con người",
        explanationVi: "Câu cuối viết: '如何在激励技术创新与保护人类原创尊严之间寻求制度平衡'."
      },
      {
        id: "rp-ex-hsk7-basic-1-q5",
        questionVi: "Từ '亟待' (jídài) ở cuối bài mang sắc thái nghĩa gì?",
        options: ["Có thể trì hoãn lâu dài", "Cấp bách, cần được giải quyết ngay", "Đã hoàn thành xong", "Không đáng quan tâm"],
        correctAnswer: "Cấp bách, cần được giải quyết ngay",
        explanationVi: "亟待回应 nghĩa là hết sức cấp bách cần được phản hồi/giải quyết."
      }
    ]
  },
  {
    id: "rp-ex-hsk7-advanced-1",
    level: "HSK7",
    subDifficulty: "advanced",
    genre: "Kinh tế học & Dân số",
    title: "老龄化背景下的“银发经济”新蓝海",
    titlePinyin: "Lǎolínghuà bèijǐng xià de “yínfà jīngjì” xīn lánhǎi",
    titleVi: "Đại dương xanh mới của 'kinh tế tóc bạc' trong bối cảnh già hóa dân số",
    contentZh: "长期以来，社会舆论往往将人口老龄化简单等同于劳动力萎缩与社保体系承压的宏观负担，却低估了这一结构性变迁所孕育的庞大消费潜能。随着“60后”“70后”逐步步入退休阶段，新一代老年群体普遍具备更高的受教育水平、更稳健的资产积累以及更强烈的悦己消费意愿。他们对养老的需求早已超越基础的衣食照料，而是向智慧适老化家居、康养旅居、老年教育及精准慢病管理等高附加值领域延伸。企业唯有摒弃刻板印象，以精细化产品设计与有温度的服务供给回应这一群体对体面晚年的向往，方能在万亿级的银发市场中抢占先机。",
    contentPinyin: "Chángqī yǐlái, shèhuì yúlùn wǎngwǎng jiāng rénkǒu lǎolínghuà jiǎndān děngtóng yú láodònglì wěisuō yǔ shèbǎo tǐxì chéngyā de hóngguān fùdān, què dīgū le zhè yì jiégòuxìng biànqiān suǒ yùnyù de pángdà xiāofèi qiánnéng. Suízhe “liùlínghòu” “qīlínghòu” zhúbù bùrù tuìxiū jiēduàn, xīn yídài lǎonián qúntǐ pǔbiàn jùbèi gèng gāo de shòujiàoyù shuǐpíng, gèng wěnjiàn de zīchǎn jīlěi yǐjí gèng qiángliè de yuèjǐ xiāofèi yìyuàn. Tāmen duì yǎnglǎo de xūqiú zǎoyǐ chāoyuè jīchǔ de yīshí zhàoliào, érshì xiàng zhìhuì shìlǎohuà jiājū, kāngyǎng lǚjū, lǎonián jiàoyù jí jīngzhǔn mànbìng guǎnlǐ děng gāo fùjiāzhí lǐngyù yánshēn. Qǐyè wéiyǒu bìngqì kèbǎn yìnxiàng, yǐ jīngxìhuà chǎnpǐn shèjì yǔ yǒu wēndù de fúwù gōngjǐ huíyìng zhè yì qúntǐ duì tǐmiàn wǎnnián de xiàngwǎng, fāng néng zài wànyìjí de yínfà shìchǎng zhōng qiǎngzhàn xiānjī.",
    contentVi: "Từ lâu, dư luận xã hội thường đánh đồng đơn giản già hóa dân số với gánh nặng vĩ mô như suy giảm lao động và áp lực quỹ bảo hiểm, mà đánh giá thấp tiềm năng tiêu dùng khổng lồ ẩn sau biến chuyển cơ cấu này. Khi thế hệ 6x, 7x dần bước vào tuổi nghỉ hưu, nhóm người cao tuổi mới nhìn chung có trình độ học vấn cao hơn, tích lũy tài sản vững hơn và sẵn sàng chi tiêu cho bản thân hơn. Nhu cầu dưỡng lão của họ đã vượt xa ăn mặc chăm sóc cơ bản để mở rộng sang nội thất thông minh thân thiện người già, du lịch nghỉ dưỡng kết hợp chăm sóc sức khỏe, giáo dục người cao tuổi và quản lý bệnh mạn tính chính xác. Doanh nghiệp chỉ có từ bỏ định kiến, thiết kế sản phẩm tinh tế và cung cấp dịch vụ giàu tính nhân văn mới có thể chiếm lĩnh tiên cơ trên thị trường nghìn tỷ này.",
    questions: [
      {
        id: "rp-ex-hsk7-advanced-1-q1",
        questionVi: "Dư luận trước đây thường có cái nhìn phiến diện nào về già hóa dân số?",
        options: ["Cho rằng người già không sống lâu", "Chỉ coi đó là gánh nặng vĩ mô mà đánh giá thấp tiềm năng tiêu dùng khổng lồ", "Cho rằng người già chi tiêu quá hoang phí", "Cho rằng dân số đang trẻ hóa"],
        correctAnswer: "Chỉ coi đó là gánh nặng vĩ mô mà đánh giá thấp tiềm năng tiêu dùng khổng lồ",
        explanationVi: "Câu đầu nêu: '往往将人口老龄化简单等同于...宏观负担，却低估了...庞大消费潜能'."
      },
      {
        id: "rp-ex-hsk7-advanced-1-q2",
        questionVi: "Thế hệ người cao tuổi mới (6x, 7x) có đặc điểm nổi bật nào?",
        options: ["Không có tích lũy tài sản", "Học vấn cao hơn, tích lũy tài sản vững hơn và sẵn sàng chi tiêu cho bản thân (悦己消费)", "Chỉ thích ở nhà không đi đâu", "Không sử dụng thiết bị thông minh"],
        correctAnswer: "Học vấn cao hơn, tích lũy tài sản vững hơn và sẵn sàng chi tiêu cho bản thân (悦己消费)",
        explanationVi: "Bài viết ghi: '具备更高的受教育水平、更稳健的资产积累以及更强烈的悦己消费意愿'."
      },
      {
        id: "rp-ex-hsk7-advanced-1-q3",
        questionVi: "Lĩnh vực nào sau đây thuộc nhu cầu giá trị gia tăng cao của kinh tế tóc bạc được nêu trong bài?",
        options: ["Trò chơi điện tử mạo hiểm", "Nội thất thông minh thân thiện người già, du lịch dưỡng sinh, giáo dục người cao tuổi và quản lý bệnh mạn tính", "Khai thác khoáng sản", "Vận tải container đường biển"],
        correctAnswer: "Nội thất thông minh thân thiện người già, du lịch dưỡng sinh, giáo dục người cao tuổi và quản lý bệnh mạn tính",
        explanationVi: "Trong bài liệt kê rõ: '智慧适老化家居、康养旅居、老年教育及精准慢病管理'."
      },
      {
        id: "rp-ex-hsk7-advanced-1-q4",
        questionVi: "Để nắm bắt cơ hội trên thị trường kinh tế tóc bạc, doanh nghiệp cần làm gì?",
        options: ["Bán hàng giá rẻ nhất có thể", "Từ bỏ định kiến, thiết kế sản phẩm tinh tế và cung cấp dịch vụ giàu tính nhân văn", "Chỉ quảng cáo trên báo giấy", "Thu hẹp quy mô sản xuất"],
        correctAnswer: "Từ bỏ định kiến, thiết kế sản phẩm tinh tế và cung cấp dịch vụ giàu tính nhân văn",
        explanationVi: "Câu cuối viết: '摒弃刻板印象，以精细化产品设计与有温度的服务供给回应...'."
      },
      {
        id: "rp-ex-hsk7-advanced-1-q5",
        questionVi: "Cụm từ '新蓝海' (xīn lánhǎi) trong tiêu đề mang nghĩa ẩn dụ gì?",
        options: ["Vùng biển mới phát hiện", "Thị trường mới giàu tiềm năng và ít cạnh tranh khốc liệt", "Ngành đánh bắt thủy sản", "Khu vực bị ô nhiễm"],
        correctAnswer: "Thị trường mới giàu tiềm năng và ít cạnh tranh khốc liệt",
        explanationVi: "Trong kinh tế học, '蓝海' (đại dương xanh) chỉ không gian thị trường mới giàu cơ hội."
      }
    ]
  },
  {
    id: "rp-ex-hsk8-basic-1",
    level: "HSK8",
    subDifficulty: "basic",
    genre: "Quản trị & Doanh nghiệp",
    title: "组织韧性：不确定时代的生存法则",
    titlePinyin: "Zǔzhī rènxìng: bù quèdìng shídài de shēngcún fǎzé",
    titleVi: "Sức bền tổ chức: Quy luật sinh tồn trong kỷ nguyên bất định",
    contentZh: "在宏观环境风平浪静的周期里，企业最推崇的是极致效率——通过压缩冗余、零库存管理与高度专业化分工将利润率推向极限。然而，当公共卫生事件、地缘冲突或技术颠覆等“黑天鹅”事件骤然降临时，过度紧绷的精益系统往往因为缺乏缓冲空间而瞬间断裂。近年来，管理学界愈发强调“组织韧性”的价值：它并非被动承受冲击后的勉强复原，而是企业在危机中快速重构资源、从混乱中汲取进化动力的“反脆弱”能力。具体而言，构建韧性需要企业在供应链多元布局、现金储备安全垫以及扁平化授权决策三个维度提前投入，用适度的短期冗余换取长期的基业长青。",
    contentPinyin: "Zài hóngguān huánjìng fēngpínglàngjìng de zhōuqī lǐ, qǐyè zuì tuīchóng de shì jízhì xiàolǜ—tōngguò yāsuō rǒngyú, líng kùcún guǎnlǐ yǔ gāodù zhuānyèhuà fēngōng jiāng lìrùnlǜ tuīxiàng jíxiàn. Rán'ér, dāng gōnggòng wèishēng shìjiàn, dìyuán chōngtū huò jìshù diānfù děng “hēitiān'é” shìjiàn zhòurán jiànglín shí, guòdù jǐnbēng de jīngyì xìtǒng wǎngwǎng yīnwèi quēfá huǎnchōng kōngjiān ér shùnjiān duànliè. Jìnniánlái, guǎnlǐxuéjiè yùfā qiángdiào “zǔzhī rènxìng” de jiàzhí: tā bìngfēi bèidòng chéngshòu chōngjī hòu de miǎnqiǎng fùyuán, érshì qǐyè zài wēijī zhōng kuàisù chónggòu zīyuán, cóng hùnluàn zhōng jíqǔ jìnhuà dònglì de “fǎncuìruò” nénglì. Jùtǐ éryán, gòujiàn rènxìng xūyào qǐyè zài gōngyìngliàn duōyuán bùjú, xiànjīn chǔbèi ānquándiàn yǐjí biǎnpínghuà shòuquán juécè sān ge wéidù tíqián tóurù, yòng shìdù de duǎnqī rǒngyú huànqǔ chángqī de jīyè chángqīng.",
    contentVi: "Trong chu kỳ vĩ mô êm đềm, doanh nghiệp sùng bái hiệu suất tối đa — nén dự phòng, quản trị tồn kho bằng không và chuyên môn hóa cao độ để đẩy biên lợi nhuận lên cực hạn. Tuy nhiên, khi các sự kiện 'thiên nga đen' như khủng hoảng y tế, xung đột địa chính trị hay công nghệ đột phá bất ngờ ập tới, hệ thống tinh gọn quá căng thẳng thường đứt gãy tức thì vì thiếu khoảng đệm. Gần đây, giới quản trị ngày càng nhấn mạnh giá trị của 'sức bền tổ chức': đó không phải sự phục hồi gượng gạo sau cú sốc, mà là năng lực 'phản giòn' giúp doanh nghiệp tái cấu trúc nguồn lực nhanh trong khủng hoảng và tiến hóa từ hỗn loạn. Cụ thể, doanh nghiệp cần đầu tư trước ở ba phương diện: đa dạng hóa chuỗi cung ứng, đệm an toàn tiền mặt và phân quyền ra quyết định phẳng, dùng sự dự phòng ngắn hạn hợp lý đổi lấy sự trường tồn dài hạn.",
    questions: [
      {
        id: "rp-ex-hsk8-basic-1-q1",
        questionVi: "Vì sao hệ thống quản trị quá tinh gọn (精益系统) dễ đứt gãy khi gặp sự kiện 'thiên nga đen'?",
        options: ["Vì chi phí quá cao", "Vì quá căng thẳng và thiếu khoảng đệm (缓冲空间)", "Vì nhân viên làm việc chậm", "Vì không có khách hàng"],
        correctAnswer: "Vì quá căng thẳng và thiếu khoảng đệm (缓冲空间)",
        explanationVi: "Bài viết nêu: '过度紧绷的精益系统往往因为缺乏缓冲空间而瞬间断裂'."
      },
      {
        id: "rp-ex-hsk8-basic-1-q2",
        questionVi: "Bản chất thực sự của 'sức bền tổ chức' (组织韧性) là gì?",
        options: ["Tránh mọi rủi ro bằng cách ngừng kinh doanh", "Năng lực 'phản giòn' giúp tái cấu trúc nguồn lực nhanh trong khủng hoảng và tiến hóa từ hỗn loạn", "Cắt giảm toàn bộ nhân sự khi có khủng hoảng", "Chỉ dựa vào trợ cấp của chính phủ"],
        correctAnswer: "Năng lực 'phản giòn' giúp tái cấu trúc nguồn lực nhanh trong khủng hoảng và tiến hóa từ hỗn loạn",
        explanationVi: "Câu văn giải thích: '而是企业在危机中快速重构资源、从混乱中汲取进化动力的“反脆弱”能力'."
      },
      {
        id: "rp-ex-hsk8-basic-1-q3",
        questionVi: "Ba phương diện doanh nghiệp cần đầu tư trước để xây dựng sức bền là gì?",
        options: ["Quảng cáo, giảm giá, mở thêm cửa hàng", "Đa dạng hóa chuỗi cung ứng, đệm an toàn tiền mặt và phân quyền ra quyết định phẳng", "Vay nợ tối đa, tồn kho bằng 0, tập trung quyền lực", "Thuê ngoài toàn bộ, cắt giảm R&D, giảm lương"],
        correctAnswer: "Đa dạng hóa chuỗi cung ứng, đệm an toàn tiền mặt và phân quyền ra quyết định phẳng",
        explanationVi: "Bài viết liệt kê rõ 3 trụ cột: '供应链多元布局、现金储备安全垫以及扁平化授权决策'."
      },
      {
        id: "rp-ex-hsk8-basic-1-q4",
        questionVi: "Triết lý đánh đổi được tác giả đúc kết ở câu cuối là gì?",
        options: ["Hy sinh dài hạn để tối đa hóa lợi nhuận quý này", "Dùng sự dự phòng ngắn hạn hợp lý đổi lấy sự trường tồn dài hạn", "Loại bỏ mọi chi phí dự phòng", "Chỉ đầu tư khi khủng hoảng đã xảy ra"],
        correctAnswer: "Dùng sự dự phòng ngắn hạn hợp lý đổi lấy sự trường tồn dài hạn",
        explanationVi: "Câu cuối viết: '用适度的短期冗余换取长期的基业长青'."
      },
      {
        id: "rp-ex-hsk8-basic-1-q5",
        questionVi: "Thuật ngữ '黑天鹅事件' (hēitiān'é shìjiàn) chỉ loại sự kiện nào?",
        options: ["Sự kiện diễn ra đều đặn hàng năm", "Sự kiện hiếm gặp, khó lường trước nhưng gây tác động chấn động lớn", "Sự kiện chỉ xảy ra trong ngành du lịch", "Sự kiện luôn mang lại lợi nhuận"],
        correctAnswer: "Sự kiện hiếm gặp, khó lường trước nhưng gây tác động chấn động lớn",
        explanationVi: "Ví dụ trong bài: khủng hoảng y tế công cộng, xung đột địa chính trị, đột phá công nghệ bất ngờ."
      }
    ]
  },
  {
    id: "rp-ex-hsk8-advanced-1",
    level: "HSK8",
    subDifficulty: "advanced",
    genre: "Văn hóa & Kiến trúc",
    title: "城市更新中的历史文脉赓续",
    titlePinyin: "Chéngshì gēngxīn zhōng de lìshǐ wénmài gēngxù",
    titleVi: "Tiếp nối mạch nguồn văn hóa lịch sử trong cải tạo đô thị",
    contentZh: "在快速城镇化的前几十年里，“大拆大建”曾是许多城市追求现代化面貌的惯性路径，结果却导致不少拥有百年底蕴的历史街区被推倒重来，取而代之的是千篇一律的玻璃幕墙与商业综合体，城市的集体记忆随之失语。近年来，城市规划理念正经历深刻转向：从粗放式推倒重建迈向精细化的“微更新”与“有机更新”。通过修旧如旧的建筑修缮、保留原住民生活肌理，并巧妙植入文创书店、非遗工坊与社区美术馆等现代业态，老街区得以在不丧失烟火气的前提下重焕生机。真正的城市现代化，绝非与过去决裂，而是让历史文脉在当代生活中自然延续。",
    contentPinyin: "Zài kuàisù chéngzhènhuà de qián jǐshí nián lǐ, “dàchāi dàjiàn” céng shì xǔduō chéngshì zhuīqiú xiàndàihuà miànmào de guànxìng lùjìng, jiéguǒ què dǎozhì bùshǎo yōngyǒu bǎinián dǐyùn de lìshǐ jiēqū bèi tuīdǎo chónglái, qǔ'érdàizhī de shì qiānpiān-yílǜ de bōli mùqiáng yǔ shāngyè zōnghé tǐ, chéngshì de jítǐ jìyì suízhī shīyǔ. Jìnniánlái, chéngshì guīhuà lǐniàn zhèng jīnglì shēnkè zhuǎnxiàng: cóng cūfàngshì tuīdǎo chóngjiàn màixiàng jīngxìhuà de “wēigēngxīn” yǔ “yǒujī gēngxīn”. Tōngguò xiūjiù-rújiù de jiànzhù xiūshàn, bǎoliú yuánzhùmín shēnghuó jīlǐ, bìng qiǎomiào zhírù wénchuàng shūdiàn, fēiyí gōngfāng yǔ shèqū měishùguǎn děng xiàndài yètài, lǎo jiēqū déyǐ zài bù sàngshī yānhuǒqì de qiántí xià chónghuàn shēngjī. Zhēnzhèng de chéngshì xiàndàihuà, juéfēi yǔ guòqù juéliè, érshì ràng lìshǐ wénmài zài dāngdài shēnghuó zhōng zìrán yánxù.",
    contentVi: "Trong vài thập niên đô thị hóa nhanh trước đây, 'phá lớn xây lớn' từng là lối mòn của nhiều thành phố theo đuổi diện mạo hiện đại, kết quả khiến nhiều khu phố lịch sử trăm năm bị san phẳng, thay bằng những tòa nhà kính và trung tâm thương mại na ná nhau, làm ký ức tập thể đô thị dần mất tiếng nói. Gần đây, tư duy quy hoạch đang chuyển dịch sâu sắc: từ phá bỏ xây mới thô bạo sang 'vi cải tạo' và 'cải tạo hữu cơ' tinh tế. Thông qua tu bổ 'sửa cũ như cũ', giữ lại kết cấu đời sống cư dân bản địa, đồng thời khéo léo đưa vào hiệu sách sáng tạo, xưởng di sản phi vật thể và bảo tàng nghệ thuật cộng đồng, phố cổ hồi sinh mà không mất đi hơi thở đời thường. Hiện đại hóa đô thị thực sự tuyệt đối không phải đoạn tuyệt với quá khứ, mà là để mạch nguồn lịch sử tiếp nối tự nhiên trong đời sống đương đại.",
    questions: [
      {
        id: "rp-ex-hsk8-advanced-1-q1",
        questionVi: "Hệ lụy của lối quy hoạch 'phá lớn xây lớn' (大拆大建) là gì?",
        options: ["Chi phí xây dựng quá thấp", "Khu phố lịch sử bị phá hủy, thay bằng kiến trúc na ná nhau khiến ký ức tập thể đô thị mai một", "Người dân không muốn sống ở thành phố", "Giao thông trở nên ùn tắc hơn"],
        correctAnswer: "Khu phố lịch sử bị phá hủy, thay bằng kiến trúc na ná nhau khiến ký ức tập thể đô thị mai một",
        explanationVi: "Bài viết nêu: '历史街区被推倒重来，取而代之的是千篇一律的玻璃幕墙...城市的集体记忆随之失语'."
      },
      {
        id: "rp-ex-hsk8-advanced-1-q2",
        questionVi: "Tư duy quy hoạch đô thị gần đây đang chuyển hướng sang mô hình nào?",
        options: ["Xây thêm nhiều trung tâm thương mại kính", "'Vi cải tạo' (微更新) và 'cải tạo hữu cơ' (有机更新) tinh tế", "Đóng băng hoàn toàn không sửa chữa", "Di dời toàn bộ cư dân ra ngoại ô"],
        correctAnswer: "'Vi cải tạo' (微更新) và 'cải tạo hữu cơ' (有机更新) tinh tế",
        explanationVi: "Câu văn ghi: '从粗放式推倒重建迈向精细化的“微更新”与“有机更新”'."
      },
      {
        id: "rp-ex-hsk8-advanced-1-q3",
        questionVi: "Những loại hình hiện đại nào được đưa vào phố cổ để tạo sức sống mới?",
        options: ["Nhà máy công nghiệp nặng", "Hiệu sách sáng tạo, xưởng di sản phi vật thể và bảo tàng nghệ thuật cộng đồng", "Bãi đỗ xe nhiều tầng", "Sân vận động quốc tế"],
        correctAnswer: "Hiệu sách sáng tạo, xưởng di sản phi vật thể và bảo tàng nghệ thuật cộng đồng",
        explanationVi: "Trong bài liệt kê: '文创书店、非遗工坊与社区美术馆等现代业态'."
      },
      {
        id: "rp-ex-hsk8-advanced-1-q4",
        questionVi: "Từ '烟火气' (yānhuǒqì) trong bài diễn tả điều gì?",
        options: ["Khói bụi ô nhiễm", "Hơi thở đời sống thường nhật ấm áp, sinh động của người dân", "Hỏa hoạn trong khu phố cổ", "Mùi khói từ nhà máy"],
        correctAnswer: "Hơi thở đời sống thường nhật ấm áp, sinh động của người dân",
        explanationVi: "'烟火气' là từ văn hóa đặc sắc chỉ sức sống đời thường gần gũi, chân thực."
      },
      {
        id: "rp-ex-hsk8-advanced-1-q5",
        questionVi: "Quan điểm cốt lõi của tác giả về hiện đại hóa đô thị thực sự là gì?",
        options: ["Đoạn tuyệt hoàn toàn với kiến trúc cũ", "Không đoạn tuyệt quá khứ, mà để mạch nguồn văn hóa lịch sử tiếp nối tự nhiên trong đời sống đương đại", "Chỉ giữ lại nhà cổ làm bảo tàng không cho ai ở", "Sao chép kiến trúc của các nước khác"],
        correctAnswer: "Không đoạn tuyệt quá khứ, mà để mạch nguồn văn hóa lịch sử tiếp nối tự nhiên trong đời sống đương đại",
        explanationVi: "Câu cuối khẳng định: '绝非与过去决裂，而是让历史文脉在当代生活中自然延续'."
      }
    ]
  },
  {
    id: "rp-ex-hsk9-basic-1",
    level: "HSK9",
    subDifficulty: "basic",
    genre: "Khoa học & Triết học",
    title: "基础研究：超越功利计较的文明灯塔",
    titlePinyin: "Jīchǔ yánjiū: chāoyuè gōnglì jìjiào de wénmíng dēngtǎ",
    titleVi: "Nghiên cứu cơ bản: Ngọn hải đăng văn minh vượt lên toan tính thực dụng",
    contentZh: "在科技竞争日趋白热化的当下，应用技术因其见效快、商业回报清晰而备受资本青睐，而周期漫长、前景莫测的基础科学研究却时常面临经费掣肘与急功近利的考核压力。然而，纵观近现代科学史，从麦克斯韦方程组到量子力学，再到基因编辑的底层机理，几乎所有改写人类文明进程的颠覆性产业革命，其源头皆源于科学家出于纯粹好奇心所进行的“无用之学”。如果缺乏宽容失败的学术生态与稳定持久的财政托底，科研人员被迫追逐短平快的论文指标，一个国家便难以在原始创新上实现从跟跑到领跑的跃升。唯有涵养“板凳甘坐十年冷”的定力，基础研究这座灯塔方能照亮未知的前路。",
    contentPinyin: "Zài kējì jìngzhēng rìqū báirèhuà de dāngxià, yìngyòng jìshù yīn qí jiànxiào kuài, shāngyè huíbào qīngxī ér bèishòu zīběn qīnglài, ér zhōuqī màncháng, qiánjǐng mòcè de jīchǔ kēxué yánjiū què shícháng miànlín jīngfèi chèzhǒu yǔ jígōng-jìnlì de kǎohé yālì. Rán'ér, zòngguān jìnxiàndài kēxuéshǐ, cóng Màikèsīwéi fāngchéngzǔ dào liàngzǐ lìxué, zài dào jīyīn biānjí de dǐcéng jīlǐ, jīhū suǒyǒu gǎixiě rénlèi wénmíng jìnchéng de diānfùxìng chǎnyè gémìng, qí yuántóu jiē yuányú kēxuéjiā chūyú chúncuì hàoqíxīn suǒ jìnxíng de “wúyòng zhī xué”. Rúguǒ quēfá kuānróng shībài de xuéshù shēngtài yǔ wěndìng chíjiǔ de cáizhèng tuōdǐ, kēyán rényuán bèipò zhuīzhú duǎnpíngkuài de lùnwén zhǐbiāo, yí ge guójiā biàn nányǐ zài yuánshǐ chuàngxīn shàng shíxiàn cóng gēnpǎo dào lǐngpǎo de yuèshēng. Wéiyǒu hányǎng “bǎndèng gānzuò shínián lěng” de dìnglì, jīchǔ yánjiū zhè zuò dēngtǎ fāng néng zhàoliàng wèizhī de qiánlù.",
    contentVi: "Trong bối cảnh cạnh tranh công nghệ ngày càng gay gắt, công nghệ ứng dụng được dòng vốn săn đón vì hiệu quả nhanh và lợi nhuận rõ ràng, còn nghiên cứu khoa học cơ bản có chu kỳ dài và triển vọng khó đoán lại thường chịu áp lực kinh phí eo hẹp cùng cơ chế đánh giá nóng vội. Tuy nhiên, nhìn suốt lịch sử khoa học cận hiện đại, từ hệ phương trình Maxwell đến cơ học lượng tử rồi cơ chế nền tảng của chỉnh sửa gen, hầu như mọi cuộc cách mạng công nghiệp làm thay đổi tiến trình văn minh nhân loại đều bắt nguồn từ 'khoa học tưởng chừng vô dụng' xuất phát từ trí tò mò thuần túy. Nếu thiếu hệ sinh thái học thuật bao dung thất bại và bệ đỡ tài chính ổn định dài hạn, khiến nhà nghiên cứu bị ép chạy theo chỉ tiêu bài báo ngắn hạn, một quốc gia khó lòng nhảy vọt từ chạy theo sang dẫn đầu trong đổi mới nguyên bản. Chỉ có nuôi dưỡng bản lĩnh 'cam chịu ngồi ghế lạnh mười năm', ngọn hải đăng nghiên cứu cơ bản mới có thể soi sáng con đường phía trước.",
    questions: [
      {
        id: "rp-ex-hsk9-basic-1-q1",
        questionVi: "Vì sao công nghệ ứng dụng dễ thu hút vốn hơn nghiên cứu cơ bản?",
        options: ["Vì công nghệ ứng dụng không cần nhà khoa học", "Vì hiệu quả nhanh và lợi nhuận thương mại rõ ràng", "Vì nghiên cứu cơ bản không có giá trị gì", "Vì chính phủ cấm đầu tư nghiên cứu cơ bản"],
        correctAnswer: "Vì hiệu quả nhanh và lợi nhuận thương mại rõ ràng",
        explanationVi: "Câu đầu nêu: '应用技术因其见效快、商业回报清晰而备受资本青睐'."
      },
      {
        id: "rp-ex-hsk9-basic-1-q2",
        questionVi: "Tác giả dẫn chứng hệ phương trình Maxwell, cơ học lượng tử và chỉnh sửa gen nhằm chứng minh điều gì?",
        options: ["Khoa học hiện đại đã đạt đến giới hạn", "Hầu hết các cuộc cách mạng công nghiệp đột phá đều bắt nguồn từ nghiên cứu cơ bản xuất phát từ trí tò mò thuần túy", "Chỉ có vật lý học mới quan trọng", "Nghiên cứu cơ bản luôn mang lại lợi nhuận ngay lập tức"],
        correctAnswer: "Hầu hết các cuộc cách mạng công nghiệp đột phá đều bắt nguồn từ nghiên cứu cơ bản xuất phát từ trí tò mò thuần túy",
        explanationVi: "Bài viết khẳng định: '几乎所有改写人类文明进程的颠覆性产业革命，其源头皆源于科学家出于纯粹好奇心所进行的“无用之学”'."
      },
      {
        id: "rp-ex-hsk9-basic-1-q3",
        questionVi: "Điều gì cản trở một quốc gia bứt phá từ 'chạy theo' sang 'dẫn đầu' trong đổi mới nguyên bản?",
        options: ["Thiếu hệ sinh thái bao dung thất bại và tài chính ổn định, ép nhà nghiên cứu chạy theo chỉ tiêu bài báo ngắn hạn", "Có quá nhiều nhà khoa học cơ bản", "Thiếu sinh viên đại học", "Không có tạp chí khoa học"],
        correctAnswer: "Thiếu hệ sinh thái bao dung thất bại và tài chính ổn định, ép nhà nghiên cứu chạy theo chỉ tiêu bài báo ngắn hạn",
        explanationVi: "Câu văn nêu rõ: '如果缺乏宽容失败的学术生态与稳定持久的财政托底，科研人员被迫追逐短平快的论文指标...'."
      },
      {
        id: "rp-ex-hsk9-basic-1-q4",
        questionVi: "Câu '板凳甘坐十年冷' trong bài biểu đạt tinh thần gì?",
        options: ["Sự lười biếng không muốn thay đổi", "Sự kiên trì, nhẫn nại, bền bỉ theo đuổi nghiên cứu lâu dài bất chấp cô đơn và chưa có danh lợi trước mắt", "Điều kiện phòng thí nghiệm thiếu sưởi ấm", "Thói quen ngồi làm việc quá lâu"],
        correctAnswer: "Sự kiên trì, nhẫn nại, bền bỉ theo đuổi nghiên cứu lâu dài bất chấp cô đơn và chưa có danh lợi trước mắt",
        explanationVi: "Thành ngữ học thuật kinh điển ca ngợi sự kiên định, không nóng vội trong nghiên cứu."
      },
      {
        id: "rp-ex-hsk9-basic-1-q5",
        questionVi: "Từ '掣肘' (chèzhǒu) trong bài có nghĩa là gì?",
        options: ["Hỗ trợ hết mình", "Kìm hãm, gây trở ngại, bó tay bó chân", "Thúc đẩy tăng tốc", "Giải phóng hoàn toàn"],
        correctAnswer: "Kìm hãm, gây trở ngại, bó tay bó chân",
        explanationVi: "'经费掣肘' nghĩa là bị kinh phí kìm hãm, trói buộc."
      }
    ]
  },
  {
    id: "rp-ex-hsk9-advanced-1",
    level: "HSK9",
    subDifficulty: "advanced",
    genre: "Chính luận & Quan hệ quốc tế",
    title: "数字主权与全球数据跨境治理的新秩序",
    titlePinyin: "Shùzì zhǔquán yǔ quánqiú shùjù kuàjìng zhìlǐ de xīn zhìxù",
    titleVi: "Chủ quyền số và trật tự mới của quản trị dữ liệu xuyên biên giới toàn cầu",
    contentZh: "进入人工智能与数字经济深度融合的二十一世纪，数据已跃升为与土地、资本并驾齐驱的核心生产要素，其跨境流动的自由度直接关乎全球贸易活力与技术创新效率。然而，围绕数据主权、国家安全与个人隐私保护的博弈正日趋复杂：部分经济体以“数据本地化”构筑高墙，力图防范核心数据外流与数字霸权渗透；另一些经济体则极力倡导无条件的数据自由流动，以维系其跨国科技巨头的先发优势。若任由这两种极端倾向演变为彼此割裂的“数字孤岛”，全球数字红利将被严重侵蚀。构建兼顾安全底线与发展红利的全球数据治理新秩序，亟需各国在多边框架下确立分级分类的跨境流动规则与互认的隐私保护标准，在开放合作与风险可控之间达成最大公约数。",
    contentPinyin: "Jìnrù réngōng zhìnéng yǔ shùzì jīngjì shēndù rónghé de èrshíyī shìjì, shùjù yǐ yuèshēng wéi yǔ tǔdì, zīběn bìngjiàqíqū de héxīn shēngchǎn yàosù, qí kuàjìng liúdòng de zìyóudù zhíjiē guānhū quánqiú màoyì huólì yǔ jìshù chuàngxīn xiàolǜ. Rán'ér, wéirào shùzì zhǔquán, guójiā ānquán yǔ gèrén yǐnsī bǎohù de bóyì zhèng rìqū fùzá: bùfèn jīngjìtǐ yǐ “shùjù běndìhuà” gòuzhù gāoqiáng, lìtú fángfàn héxīn shùjù wàiliú yǔ shùzì bàquán shèntòu; lìng yìxiē jīngjìtǐ zé jílì chàngdǎo wú tiáojiàn de shùjù zìyóu liúdòng, yǐ wéixì qí kuàguó kējì jùtóu de xiānfā yōushì. Ruò rènyóu zhè liǎng zhǒng jíduān qīngxiàng yǎnbiàn wéi bǐcǐ gēliè de “shùzì gūdǎo”, quánqiú shùzì hónglì jiāng bèi yánzhòng qīnshí. Gòujiàn jiāngù ānquán dǐxiàn yǔ fāzhǎn hónglì de quánqiú shùjù zhìlǐ xīn zhìxù, jíxū gèguó zài duōbiān kuàngjià xià quèlì fēnjí fēnlèi de kuàjìng liúdòng guīzé yǔ hùrèn de yǐnsī bǎohù biāozhǔn, zài kāifàng hézuò yǔ fēngxiǎn kěkòng zhījiān dáchéng zuìdà gōngyuēshù.",
    contentVi: "Bước vào thế kỷ XXI với sự hòa quyện sâu sắc giữa AI và kinh tế số, dữ liệu đã vươn lên thành yếu tố sản xuất cốt lõi sánh ngang đất đai và tư bản, mức độ tự do lưu chuyển xuyên biên giới của nó liên quan trực tiếp đến sức sống thương mại toàn cầu và hiệu suất đổi mới công nghệ. Tuy nhiên, cuộc giằng co xoay quanh chủ quyền số, an ninh quốc gia và bảo vệ quyền riêng tư ngày càng phức tạp: một số nền kinh tế dựng tường cao 'bản địa hóa dữ liệu' nhằm ngăn rò rỉ dữ liệu lõi và bá quyền số; số khác lại ra sức cổ súy lưu chuyển tự do vô điều kiện để duy trì lợi thế đi trước của các tập đoàn công nghệ xuyên quốc gia. Nếu để hai khuynh hướng cực đoan này biến thành các 'ốc đảo số' chia cắt, cổ tức số toàn cầu sẽ bị bào mòn nghiêm trọng. Xây dựng trật tự quản trị dữ liệu mới vừa giữ lằn ranh an ninh vừa đảm bảo lợi ích phát triển đòi hỏi các nước thiết lập quy tắc lưu chuyển phân cấp phân loại và tiêu chuẩn bảo vệ quyền riêng tư được công nhận lẫn nhau trong khuôn khổ đa phương.",
    questions: [
      {
        id: "rp-ex-hsk9-advanced-1-q1",
        questionVi: "Vì sao một số nền kinh tế thúc đẩy chính sách 'bản địa hóa dữ liệu' (数据本地化)?",
        options: ["Để tăng tốc độ Internet", "Nhằm phòng ngừa rò rỉ dữ liệu cốt lõi và sự xâm nhập của bá quyền số", "Để hỗ trợ các tập đoàn công nghệ nước ngoài", "Vì không đủ dung lượng lưu trữ"],
        correctAnswer: "Nhằm phòng ngừa rò rỉ dữ liệu cốt lõi và sự xâm nhập của bá quyền số",
        explanationVi: "Bài viết nêu: '力图防范核心数据外流与数字霸权渗透'."
      },
      {
        id: "rp-ex-hsk9-advanced-1-q2",
        questionVi: "Động cơ phía sau việc một số nền kinh tế cổ súy lưu chuyển dữ liệu tự do vô điều kiện là gì?",
        options: ["Bảo vệ tuyệt đối quyền riêng tư cá nhân", "Duy trì lợi thế đi trước của các tập đoàn công nghệ xuyên quốc gia của họ", "Xóa bỏ hoàn toàn thương mại điện tử", "Giúp các nước đang phát triển kiểm soát dữ liệu"],
        correctAnswer: "Duy trì lợi thế đi trước của các tập đoàn công nghệ xuyên quốc gia của họ",
        explanationVi: "Câu văn ghi: '以维系其跨国科技巨头的先发优势'."
      },
      {
        id: "rp-ex-hsk9-advanced-1-q3",
        questionVi: "Nguy cơ nào sẽ xảy ra nếu hai khuynh hướng cực đoan tiếp tục đối đầu?",
        options: ["Hình thành các 'ốc đảo số' chia cắt và bào mòn nghiêm trọng cổ tức số toàn cầu", "Dữ liệu sẽ trở nên miễn phí hoàn toàn", "Trí tuệ nhân tạo sẽ ngừng phát triển ngay lập tức", "Không gây ảnh hưởng đến kinh tế thế giới"],
        correctAnswer: "Hình thành các 'ốc đảo số' chia cắt và bào mòn nghiêm trọng cổ tức số toàn cầu",
        explanationVi: "Trong bài nêu: '演变为彼此割裂的“数字孤岛”，全球数字红利将被严重侵蚀'."
      },
      {
        id: "rp-ex-hsk9-advanced-1-q4",
        questionVi: "Giải pháp xây dựng trật tự quản trị dữ liệu toàn cầu mới mà tác giả đề xuất là gì?",
        options: ["Cấm toàn bộ dòng chảy dữ liệu xuyên biên giới", "Thiết lập quy tắc lưu chuyển phân cấp phân loại và tiêu chuẩn bảo vệ quyền riêng tư công nhận lẫn nhau trong khuôn khổ đa phương", "Giao toàn quyền quản lý cho một công ty duy nhất", "Bãi bỏ mọi quy định về bảo mật"],
        correctAnswer: "Thiết lập quy tắc lưu chuyển phân cấp phân loại và tiêu chuẩn bảo vệ quyền riêng tư công nhận lẫn nhau trong khuôn khổ đa phương",
        explanationVi: "Câu cuối viết: '在多边框架下确立分级分类的跨境流动规则与互认的隐私保护标准'."
      },
      {
        id: "rp-ex-hsk9-advanced-1-q5",
        questionVi: "Cụm từ '最大公约数' (zuìdà gōngyuēshù) trong văn cảnh ngoại giao/chính luận có nghĩa là gì?",
        options: ["Sự bất đồng lớn nhất", "Mẫu số chung lớn nhất / điểm đồng thuận chung rộng rãi nhất giữa các bên", "Con số thống kê về dân số", "Mức thuế quan cao nhất"],
        correctAnswer: "Mẫu số chung lớn nhất / điểm đồng thuận chung rộng rãi nhất giữa các bên",
        explanationVi: "Trong chính luận, '达成最大公约数' nghĩa là đạt được điểm đồng thuận chung lớn nhất giữa các bên."
      }
    ]
  }
];
