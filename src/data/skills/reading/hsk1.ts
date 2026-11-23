import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK1: ReadingPassage[] = [
  {
    id: "rp-ex-hsk1-1",
    level: "HSK1",
    subDifficulty: "basic",
    genre: "Hội thoại",
    title: "去火车站怎么走",
    titlePinyin: "Qù huǒchēzhàn zěnme zǒu",
    titleVi: "Đi ga tàu hỏa bằng cách nào",
    contentZh:
      "林娜：请问，去北京火车站怎么走？王先生：你坐地铁二号线，坐三站就到了。林娜：地铁站在哪儿？王先生：就在前面医院的旁边，走五分钟就能看见。林娜：太谢谢你了！",
    contentPinyin:
      "Lín Nà: Qǐngwèn, qù Běijīng huǒchēzhàn zěnme zǒu? Wáng xiānsheng: Nǐ zuò dìtiě èr hào xiàn, zuò sān zhàn jiù dào le. Lín Nà: Dìtiězhàn zài nǎr? Wáng xiānsheng: Jiù zài qiánmiàn yīyuàn de pángbiān, zǒu wǔ fēnzhōng jiù néng kànjiàn. Lín Nà: Tài xièxie nǐ le!",
    contentVi:
      "Lâm Na: Xin hỏi, đi ga tàu hỏa Bắc Kinh đi thế nào ạ? Ông Vương: Bạn đi tàu điện ngầm tuyến số 2, đi 3 trạm là tới. Lâm Na: Ga tàu điện ngầm ở đâu ạ? Ông Vương: Ngay bên cạnh bệnh viện phía trước, đi bộ 5 phút là nhìn thấy. Lâm Na: Cảm ơn ông nhiều lắm ạ!",
    questions: [
      {
        id: "rp-ex-hsk1-1-q1",
        questionVi: "Lâm Na muốn đi đâu?",
        options: ["Bệnh viện", "Sân bay", "Ga tàu hỏa Bắc Kinh", "Bến xe buýt"],
        correctAnswer: "Ga tàu hỏa Bắc Kinh",
        explanationVi: "Lâm Na hỏi: '请问，去北京火车站怎么走？' (Xin hỏi đi ga tàu hỏa Bắc Kinh đi thế nào?).",
      },
      {
        id: "rp-ex-hsk1-1-q2",
        questionVi: "Ông Vương khuyên Lâm Na đi tuyến tàu điện ngầm số mấy?",
        options: ["Tuyến số 1", "Tuyến số 2", "Tuyến số 3", "Tuyến số 5"],
        correctAnswer: "Tuyến số 2",
        explanationVi: "Ông Vương đáp: '你坐地铁二号线' (Bạn đi tàu điện ngầm tuyến số 2).",
      },
      {
        id: "rp-ex-hsk1-1-q3",
        questionVi: "Lâm Na cần đi qua mấy trạm tàu điện ngầm?",
        options: ["2 trạm", "3 trạm", "4 trạm", "5 trạm"],
        correctAnswer: "3 trạm",
        explanationVi: "Trong bài có câu '坐三站就到了' (Đi 3 trạm là tới).",
      },
      {
        id: "rp-ex-hsk1-1-q4",
        questionVi: "Ga tàu điện ngầm nằm cạnh địa điểm nào?",
        options: ["Trường học", "Siêu thị", "Bệnh viện", "Ngân hàng"],
        correctAnswer: "Bệnh viện",
        explanationVi: "Ông Vương chỉ: '就在前面医院的旁边' (Ngay bên cạnh bệnh viện phía trước).",
      },
      {
        id: "rp-ex-hsk1-1-q5",
        questionVi: "Đi bộ đến ga tàu điện ngầm mất khoảng bao lâu?",
        options: ["3 phút", "5 phút", "10 phút", "15 phút"],
        correctAnswer: "5 phút",
        explanationVi: "Câu '走五分钟就能看见' cho biết đi bộ 5 phút sẽ thấy ga.",
      },
    ],
  },
  {
    id: "rp-ex-hsk1-2",
    level: "HSK1",
    subDifficulty: "basic",
    genre: "Nhật ký",
    title: "周末学做中国菜",
    titlePinyin: "Zhōumò xué zuò Zhōngguó cài",
    titleVi: "Cuối tuần học nấu món Trung Quốc",
    contentZh:
      "今天天气有点冷，但是我很高兴。下午我的中国朋友来我家，教我做西红柿炒鸡蛋。这道菜很简单，也很好吃。晚上我们一起喝了一点啤酒，聊了很多学习的事情。",
    contentPinyin:
      "Jīntiān tiānqì yǒudiǎn lěng, dànshì wǒ hěn gāoxìng. Xiàwǔ wǒ de Zhōngguó péngyou lái wǒ jiā, jiāo wǒ zuò xīhóngshì chǎo jīdàn. Zhè dào cài hěn jiǎndān, yě hěn hǎochī. Wǎnshang wǒmen yìqǐ hē le yìdiǎn píjiǔ, liáo le hěn duō xuéxí de shìqing.",
    contentVi:
      "Hôm nay trời hơi lạnh nhưng mình rất vui. Buổi chiều bạn người Trung Quốc của mình đến nhà dạy mình làm món trứng xào cà chua. Món này rất đơn giản mà lại rất ngon. Buổi tối tụi mình cùng uống một chút bia và trò chuyện rất nhiều chuyện học hành.",
    questions: [
      {
        id: "rp-ex-hsk1-2-q1",
        questionVi: "Thời tiết hôm nay thế nào?",
        options: ["Rất nóng", "Hơi lạnh", "Có tuyết rơi", "Có bão"],
        correctAnswer: "Hơi lạnh",
        explanationVi: "Câu đầu viết: '今天天气有点冷' (Hôm nay trời hơi lạnh).",
      },
      {
        id: "rp-ex-hsk1-2-q2",
        questionVi: "Ai đến nhà dạy người viết nấu ăn?",
        options: [
          "Mẹ của người viết",
          "Đầu bếp nhà hàng",
          "Bạn người Trung Quốc",
          "Thầy giáo tiếng Trung",
        ],
        correctAnswer: "Bạn người Trung Quốc",
        explanationVi: "Trong bài có câu '我的中国朋友来我家，教我做...' (Bạn Trung Quốc đến nhà tôi dạy tôi làm...).",
      },
      {
        id: "rp-ex-hsk1-2-q3",
        questionVi: "Họ đã làm món ăn gì?",
        options: [
          "Mì bò",
          "Sủi cảo",
          "Trứng xào cà chua",
          "Vịt quay Bắc Kinh",
        ],
        correctAnswer: "Trứng xào cà chua",
        explanationVi: "Bài nêu rõ món '西红柿炒鸡蛋' (trứng xào cà chua).",
      },
      {
        id: "rp-ex-hsk1-2-q4",
        questionVi: "Người viết cảm thấy món ăn đó thế nào?",
        options: [
          "Rất cay và khó làm",
          "Đơn giản và rất ngon",
          "Hơi mặn nhưng đẹp mắt",
          "Mất nhiều thời gian",
        ],
        correctAnswer: "Đơn giản và rất ngon",
        explanationVi: "Trong đoạn có câu '这道菜很简单，也很好吃' (Món này rất đơn giản, cũng rất ngon).",
      },
      {
        id: "rp-ex-hsk1-2-q5",
        questionVi: "Buổi tối hai người vừa uống bia vừa nói chuyện về chủ đề gì?",
        options: ["Du lịch", "Mua sắm", "Chuyện học hành", "Thể thao"],
        correctAnswer: "Chuyện học hành",
        explanationVi: "Câu cuối viết: '聊了很多学习的事情' (nói chuyện rất nhiều về việc học tập).",
      },
    ],
  },
  {
    id: "rp-ex-hsk1-3",
    level: "HSK1",
    subDifficulty: "basic",
    genre: "Email công sở",
    title: "明天的会议通知",
    titlePinyin: "Míngtiān de huìyì tōngzhī",
    titleVi: "Thông báo cuộc họp ngày mai",
    contentZh:
      "张经理：您好！明天上午十点我们在二号会议室开会，讨论下个月的新产品。越南公司的两位同事也会参加。我已经准备好了资料，请您明天九点半先看一下。谢谢！小陈",
    contentPinyin:
      "Zhāng jīnglǐ: Nín hǎo! Míngtiān shàngwǔ shí diǎn wǒmen zài èr hào huìyìshì kāihuì, tǎolùn xià gè yuè de xīn chǎnpǐn. Yuènán gōngsī de liǎng wèi tóngshì yě huì cānjiā. Wǒ yǐjīng zhǔnbèi hǎo le zīliào, qǐng nín míngtiān jiǔ diǎn bàn xiān kàn yíxià. Xièxie! Xiǎo Chén",
    contentVi:
      "Giám đốc Trương kính chào! 10 giờ sáng mai chúng ta họp tại phòng họp số 2 để thảo luận về sản phẩm mới tháng tới. Hai đồng nghiệp bên công ty Việt Nam cũng sẽ tham gia. Em đã chuẩn bị xong tài liệu, mời anh 9 giờ 30 sáng mai xem trước một chút ạ. Cảm ơn anh! Tiểu Trần",
    questions: [
      {
        id: "rp-ex-hsk1-3-q1",
        questionVi: "Cuộc họp ngày mai bắt đầu lúc mấy giờ?",
        options: ["9:00 sáng", "9:30 sáng", "10:00 sáng", "10:30 sáng"],
        correctAnswer: "10:00 sáng",
        explanationVi: "Email viết: '明天上午十点我们在二号会议室开会' (10 giờ sáng mai chúng ta họp).",
      },
      {
        id: "rp-ex-hsk1-3-q2",
        questionVi: "Cuộc họp diễn ra ở đâu?",
        options: [
          "Phòng họp số 1",
          "Phòng họp số 2",
          "Văn phòng giám đốc",
          "Công ty Việt Nam",
        ],
        correctAnswer: "Phòng họp số 2",
        explanationVi: "Địa điểm được ghi rõ là '二号会议室' (phòng họp số 2).",
      },
      {
        id: "rp-ex-hsk1-3-q3",
        questionVi: "Nội dung cuộc họp là gì?",
        options: [
          "Tuyển dụng nhân sự mới",
          "Thảo luận sản phẩm mới tháng tới",
          "Tổng kết doanh thu năm ngoái",
          "Lên lịch du lịch công ty",
        ],
        correctAnswer: "Thảo luận sản phẩm mới tháng tới",
        explanationVi: "Trong bài có cụm '讨论下个月的新产品' (thảo luận sản phẩm mới tháng tới).",
      },
      {
        id: "rp-ex-hsk1-3-q4",
        questionVi: "Có bao nhiêu đồng nghiệp từ công ty Việt Nam tham gia?",
        options: ["1 người", "2 người", "3 người", "4 người"],
        correctAnswer: "2 người",
        explanationVi: "Email nêu: '越南公司的两位同事也会参加' (Hai đồng nghiệp công ty Việt Nam cũng sẽ tham gia).",
      },
      {
        id: "rp-ex-hsk1-3-q5",
        questionVi: "Tiểu Trần mời Giám đốc Trương xem tài liệu lúc mấy giờ?",
        options: ["8:30 sáng mai", "9:00 sáng mai", "9:30 sáng mai", "10:00 sáng mai"],
        correctAnswer: "9:30 sáng mai",
        explanationVi: "Câu cuối yêu cầu: '请您明天九点半先看一下' (Mời anh 9 rưỡi sáng mai xem trước).",
      },
    ],
  },
  {
    id: "rp-ex-hsk1-4",
    level: "HSK1",
    subDifficulty: "advanced",
    genre: "Tin nhắn Taobao",
    title: "客服回复：换尺码",
    titlePinyin: "Kèfú huífù: Huàn chǐmǎ",
    titleVi: "Chăm sóc khách hàng trả lời: Đổi cỡ áo",
    contentZh:
      "亲，您好！您买的黑色外套我们已经看到订单了。您说M码有点小，想换L码，没问题！我们的L码现在有现货，明天下午可以给您寄出。您先不用着急，收到后不合适还可以退货。",
    contentPinyin:
      "Qīn, nín hǎo! Nín mǎi de hēisè wàitào wǒmen yǐjīng kàndào dìngdān le. Nín shuō M mǎ yǒudiǎn xiǎo, xiǎng huàn L mǎ, méi wèntí! Wǒmen de L mǎ xiànzài yǒu xiànhuò, míngtiān xiàwǔ kěyǐ gěi nín jìchū. Nín xiān búyòng zháojí, shōudào hòu bù héshì hái kěyǐ tuìhuò.",
    contentVi:
      "Chào bạn thân mến! Chúng tôi đã thấy đơn hàng áo khoác màu đen bạn đặt. Bạn nói size M hơi nhỏ và muốn đổi sang size L, không vấn đề gì! Size L của chúng tôi hiện có sẵn hàng, chiều mai có thể gửi đi cho bạn. Bạn cứ yên tâm, sau khi nhận nếu không vừa vẫn có thể trả hàng.",
    questions: [
      {
        id: "rp-ex-hsk1-4-q1",
        questionVi: "Khách hàng đã mua sản phẩm gì?",
        options: [
          "Áo khoác màu đen",
          "Quần dài màu trắng",
          "Giày thể thao màu xanh",
          "Áo phông màu đỏ",
        ],
        correctAnswer: "Áo khoác màu đen",
        explanationVi: "Tin nhắn ghi: '您买的黑色外套' (chiếc áo khoác màu đen bạn mua).",
      },
      {
        id: "rp-ex-hsk1-4-q2",
        questionVi: "Khách hàng muốn đổi từ size nào sang size nào?",
        options: [
          "Từ S sang M",
          "Từ M sang L",
          "Từ L sang XL",
          "Từ L sang M",
        ],
        correctAnswer: "Từ M sang L",
        explanationVi: "Trong bài có câu '您说M码有点小，想换L码' (Bạn nói size M hơi nhỏ, muốn đổi size L).",
      },
      {
        id: "rp-ex-hsk1-4-q3",
        questionVi: "Tình trạng tồn kho của size L hiện tại ra sao?",
        options: [
          "Đã hết hàng",
          "Phải đặt trước 7 ngày",
          "Đang có sẵn hàng",
          "Chỉ còn màu trắng",
        ],
        correctAnswer: "Đang có sẵn hàng",
        explanationVi: "CSKH trả lời: '我们的L码现在有现货' (Size L của chúng tôi hiện có hàng sẵn).",
      },
      {
        id: "rp-ex-hsk1-4-q4",
        questionVi: "Khi nào shop có thể gửi hàng đi?",
        options: ["Tối nay", "Sáng mai", "Chiều mai", "Tuần sau"],
        correctAnswer: "Chiều mai",
        explanationVi: "Tin nhắn nêu rõ: '明天下午可以给您寄出' (Chiều mai có thể gửi đi cho bạn).",
      },
      {
        id: "rp-ex-hsk1-4-q5",
        questionVi: "Nếu nhận hàng vẫn không vừa thì khách có thể làm gì?",
        options: [
          "Không được đổi nữa",
          "Vẫn có thể trả hàng",
          "Phải mua thêm một chiếc",
          "Chỉ được tặng mã giảm giá",
        ],
        correctAnswer: "Vẫn có thể trả hàng",
        explanationVi: "Câu cuối viết: '收到后不合适还可以退货' (Nhận xong không vừa vẫn có thể trả hàng).",
      },
    ],
  },
  {
    id: "rp-ex-hsk1-5",
    level: "HSK1",
    subDifficulty: "advanced",
    genre: "Blog du lịch",
    title: "我的河内三日游",
    titlePinyin: "Wǒ de Hénèi sān rì yóu",
    titleVi: "Chuyến du lịch Hà Nội 3 ngày của tôi",
    contentZh:
      "上个月我第一次去越南河内旅游，玩了三天。河内的牛肉粉非常好吃，每天早上我都要吃一碗。我还去了还剑湖散步，拍了很多照片。那里的咖啡也很香，明年我想再带家人去一次。",
    contentPinyin:
      "Shàng gè yuè wǒ dì yī cì qù Yuènán Hénèi lǚyóu, wán le sān tiān. Hénèi de niúròufěn fēicháng hǎochī, měitiān zǎoshang wǒ dōu yào chī yì wǎn. Wǒ hái qù le Huánjiànhú sànbù, pāi le hěn duō zhàopiàn. Nàlǐ de kāfēi yě hěn xiāng, míngnián wǒ xiǎng zài dài jiārén qù yí cì.",
    contentVi:
      "Tháng trước mình lần đầu tiên đi du lịch Hà Nội ở Việt Nam, chơi 3 ngày. Phở bò Hà Nội cực kỳ ngon, sáng nào mình cũng phải ăn một bát. Mình còn ra hồ Hoàn Kiếm đi dạo và chụp rất nhiều ảnh. Cà phê ở đó cũng rất thơm, năm sau mình muốn đưa gia đình đi thêm một lần nữa.",
    questions: [
      {
        id: "rp-ex-hsk1-5-q1",
        questionVi: "Tác giả đã đến Hà Nội bao nhiêu lần?",
        options: ["Lần đầu tiên", "Lần thứ hai", "Lần thứ ba", "Mỗi năm một lần"],
        correctAnswer: "Lần đầu tiên",
        explanationVi: "Câu đầu viết: '上个月我第一次去越南河内旅游' (Tháng trước tôi lần đầu đi du lịch Hà Nội).",
      },
      {
        id: "rp-ex-hsk1-5-q2",
        questionVi: "Mỗi buổi sáng tác giả đều ăn món gì?",
        options: ["Bánh mì", "Phở bò", "Bún chả", "Cháo gà"],
        correctAnswer: "Phở bò",
        explanationVi: "Trong bài có câu '河内的牛肉粉非常好吃，每天早上我都要吃一碗' (Phở bò Hà Nội rất ngon, sáng nào tôi cũng ăn một bát).",
      },
      {
        id: "rp-ex-hsk1-5-q3",
        questionVi: "Tác giả đã đi dạo và chụp ảnh ở đâu?",
        options: ["Hồ Tây", "Hồ Hoàn Kiếm", "Phố cổ Hội An", "Vịnh Hạ Long"],
        correctAnswer: "Hồ Hoàn Kiếm",
        explanationVi: "Bài viết nêu: '我还去了还剑湖散步，拍了很多照片' (Tôi còn đi dạo ở hồ Hoàn Kiếm và chụp nhiều ảnh).",
      },
      {
        id: "rp-ex-hsk1-5-q4",
        questionVi: "Tác giả nhận xét cà phê ở Hà Nội thế nào?",
        options: ["Rất đắng", "Hơi ngọt", "Rất thơm", "Khá đắt"],
        correctAnswer: "Rất thơm",
        explanationVi: "Trong bài viết: '那里的咖啡也很香' (Cà phê ở đó cũng rất thơm).",
      },
      {
        id: "rp-ex-hsk1-5-q5",
        questionVi: "Năm sau tác giả dự định đi Hà Nội cùng ai?",
        options: ["Bạn học", "Đồng nghiệp", "Gia đình", "Đi một mình"],
        correctAnswer: "Gia đình",
        explanationVi: "Câu cuối viết: '明年我想再带家人去一次' (Năm sau tôi muốn đưa gia đình đi thêm một lần).",
      },
    ],
  },
];
