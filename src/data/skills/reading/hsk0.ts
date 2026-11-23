import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK0: ReadingPassage[] = [
  {
    id: "rp-ex-hsk0-1",
    level: "HSK0",
    subDifficulty: "basic",
    genre: "Hội thoại",
    title: "在咖啡店点饮料",
    titlePinyin: "Zài kāfēidiàn diǎn yǐnliào",
    titleVi: "Gọi đồ uống ở quán cà phê",
    contentZh:
      "服务员：你好！请问你要喝什么？小安：你好，我要一杯热茶。服务员：要大杯还是小杯？小安：小杯，谢谢。多少钱？服务员：十五块。小安：给你钱，谢谢你！",
    contentPinyin:
      "Fúwùyuán: Nǐ hǎo! Qǐngwèn nǐ yào hē shénme? Xiǎo Ān: Nǐ hǎo, wǒ yào yì bēi rè chá. Fúwùyuán: Yào dà bēi háishi xiǎo bēi? Xiǎo Ān: Xiǎo bēi, xièxie. Duōshao qián? Fúwùyuán: Shíwǔ kuài. Xiǎo Ān: Gěi nǐ qián, xièxie nǐ!",
    contentVi:
      "Nhân viên: Xin chào! Xin hỏi bạn muốn uống gì? Tiểu An: Xin chào, mình muốn một ly trà nóng. Nhân viên: Bạn lấy ly lớn hay ly nhỏ? Tiểu An: Ly nhỏ, cảm ơn. Bao nhiêu tiền vậy? Nhân viên: 15 tệ. Tiểu An: Gửi bạn tiền, cảm ơn bạn!",
    questions: [
      {
        id: "rp-ex-hsk0-1-q1",
        questionVi: "Tiểu An gọi đồ uống gì?",
        options: ["Trà nóng", "Cà phê đá", "Nước cam", "Sữa tươi"],
        correctAnswer: "Trà nóng",
        explanationVi: "Tiểu An nói: '我要一杯热茶' (Tôi muốn một ly trà nóng).",
      },
      {
        id: "rp-ex-hsk0-1-q2",
        questionVi: "Tiểu An chọn cỡ ly nào?",
        options: ["Ly lớn", "Ly vừa", "Ly nhỏ", "Hai ly nhỏ"],
        correctAnswer: "Ly nhỏ",
        explanationVi: "Khi nhân viên hỏi cỡ ly, Tiểu An đáp: '小杯，谢谢' (Ly nhỏ, cảm ơn).",
      },
      {
        id: "rp-ex-hsk0-1-q3",
        questionVi: "Ly đồ uống có giá bao nhiêu tiền?",
        options: ["5 tệ", "10 tệ", "15 tệ", "25 tệ"],
        correctAnswer: "15 tệ",
        explanationVi: "Nhân viên báo giá: '十五块' (15 tệ).",
      },
      {
        id: "rp-ex-hsk0-1-q4",
        questionVi: "Đoạn hội thoại diễn ra ở đâu?",
        options: ["Ở trường học", "Ở quán cà phê", "Ở bệnh viện", "Ở ga tàu"],
        correctAnswer: "Ở quán cà phê",
        explanationVi: "Tiêu đề ghi rõ '在咖啡店点饮料' (Gọi đồ uống ở quán cà phê).",
      },
      {
        id: "rp-ex-hsk0-1-q5",
        questionVi: "Cuối đoạn hội thoại, Tiểu An làm gì?",
        options: [
          "Đổi sang ly lớn",
          "Rời đi không mua nữa",
          "Trả tiền và cảm ơn",
          "Hỏi đường về nhà",
        ],
        correctAnswer: "Trả tiền và cảm ơn",
        explanationVi: "Câu cuối Tiểu An nói: '给你钱，谢谢你！' (Gửi bạn tiền, cảm ơn bạn!).",
      },
    ],
  },
  {
    id: "rp-ex-hsk0-2",
    level: "HSK0",
    subDifficulty: "basic",
    genre: "Tin nhắn WeChat",
    title: "明天去买水果",
    titlePinyin: "Míngtiān qù mǎi shuǐguǒ",
    titleVi: "Ngày mai đi mua trái cây",
    contentZh:
      "妈妈，明天是星期天，我不去学校。上午九点我想和你一起去商店买水果。我喜欢吃苹果和香蕉，爸爸喜欢吃西瓜。我们中午回家吃饭吧！",
    contentPinyin:
      "Māma, míngtiān shì Xīngqītiān, wǒ bú qù xuéxiào. Shàngwǔ jiǔ diǎn wǒ xiǎng hé nǐ yìqǐ qù shāngdiàn mǎi shuǐguǒ. Wǒ xǐhuan chī píngguǒ hé xiāngjiāo, bàba xǐhuan chī xīguā. Wǒmen zhōngwǔ huí jiā chīfàn ba!",
    contentVi:
      "Mẹ ơi, ngày mai là Chủ nhật, con không đi học. 9 giờ sáng con muốn cùng mẹ đi cửa hàng mua trái cây. Con thích ăn táo và chuối, bố thích ăn dưa hấu. Trưa chúng ta về nhà ăn cơm nhé!",
    questions: [
      {
        id: "rp-ex-hsk0-2-q1",
        questionVi: "Ngày mai là thứ mấy?",
        options: ["Thứ Sáu", "Thứ Bảy", "Chủ nhật", "Thứ Hai"],
        correctAnswer: "Chủ nhật",
        explanationVi: "Trong tin nhắn có câu '明天是星期天' (Ngày mai là Chủ nhật).",
      },
      {
        id: "rp-ex-hsk0-2-q2",
        questionVi: "Hai mẹ con dự định đi cửa hàng lúc mấy giờ?",
        options: ["8 giờ sáng", "9 giờ sáng", "10 giờ sáng", "2 giờ chiều"],
        correctAnswer: "9 giờ sáng",
        explanationVi: "Người viết hẹn: '上午九点我想和你一起去商店' (9 giờ sáng con muốn cùng mẹ đi cửa hàng).",
      },
      {
        id: "rp-ex-hsk0-2-q3",
        questionVi: "Người viết thích ăn loại trái cây nào?",
        options: ["Táo và chuối", "Dưa hấu và nho", "Cam và táo", "Chuối và lê"],
        correctAnswer: "Táo và chuối",
        explanationVi: "Bài viết nêu rõ '我喜欢吃苹果和香蕉' (Con thích ăn táo và chuối).",
      },
      {
        id: "rp-ex-hsk0-2-q4",
        questionVi: "Bố thích ăn loại quả gì?",
        options: ["Táo", "Chuối", "Dưa hấu", "Dâu tây"],
        correctAnswer: "Dưa hấu",
        explanationVi: "Trong bài có câu '爸爸喜欢吃西瓜' (Bố thích ăn dưa hấu).",
      },
      {
        id: "rp-ex-hsk0-2-q5",
        questionVi: "Buổi trưa họ định ăn cơm ở đâu?",
        options: ["Ở nhà hàng", "Ở nhà", "Ở trường học", "Ở nhà ông bà"],
        correctAnswer: "Ở nhà",
        explanationVi: "Câu cuối viết: '我们中午回家吃饭吧！' (Trưa chúng ta về nhà ăn cơm nhé!).",
      },
    ],
  },
  {
    id: "rp-ex-hsk0-3",
    level: "HSK0",
    subDifficulty: "basic",
    genre: "Giới thiệu bản thân",
    title: "我的好朋友大卫",
    titlePinyin: "Wǒ de hǎo péngyou Dàwèi",
    titleVi: "Người bạn thân của tôi là David",
    contentZh:
      "我有一个好朋友，他叫大卫。他今年二十二岁，住在上海。大卫是汉语老师，他每天早上七点起床，八点去学校工作。周末我们常一起看电影。",
    contentPinyin:
      "Wǒ yǒu yí gè hǎo péngyou, tā jiào Dàwèi. Tā jīnnián èrshí'èr suì, zhù zài Shànghǎi. Dàwèi shì Hànyǔ lǎoshī, tā měitiān zǎoshang qī diǎn qǐchuáng, bā diǎn qù xuéxiào gōngzuò. Zhōumò wǒmen cháng yìqǐ kàn diànyǐng.",
    contentVi:
      "Tôi có một người bạn thân, anh ấy tên là David. Năm nay anh ấy 22 tuổi, sống ở Thượng Hải. David là giáo viên tiếng Trung, mỗi ngày anh ấy dậy lúc 7 giờ sáng và 8 giờ đến trường làm việc. Cuối tuần chúng tôi thường cùng nhau xem phim.",
    questions: [
      {
        id: "rp-ex-hsk0-3-q1",
        questionVi: "David năm nay bao nhiêu tuổi?",
        options: ["20 tuổi", "21 tuổi", "22 tuổi", "24 tuổi"],
        correctAnswer: "22 tuổi",
        explanationVi: "Trong đoạn văn viết: '他今年二十二岁' (Anh ấy năm nay 22 tuổi).",
      },
      {
        id: "rp-ex-hsk0-3-q2",
        questionVi: "David hiện đang sống ở thành phố nào?",
        options: ["Bắc Kinh", "Thượng Hải", "Quảng Châu", "Thâm Quyến"],
        correctAnswer: "Thượng Hải",
        explanationVi: "Bài có cụm '住在上海' (sống ở Thượng Hải).",
      },
      {
        id: "rp-ex-hsk0-3-q3",
        questionVi: "Nghề nghiệp của David là gì?",
        options: [
          "Bác sĩ",
          "Sinh viên",
          "Giáo viên tiếng Trung",
          "Nhân viên bán hàng",
        ],
        correctAnswer: "Giáo viên tiếng Trung",
        explanationVi: "Câu '大卫是汉语老师' cho biết David là giáo viên tiếng Trung.",
      },
      {
        id: "rp-ex-hsk0-3-q4",
        questionVi: "Mỗi sáng David đi làm lúc mấy giờ?",
        options: ["6 giờ", "7 giờ", "8 giờ", "9 giờ"],
        correctAnswer: "8 giờ",
        explanationVi: "Đoạn văn nêu '八点去学校工作' (8 giờ đến trường làm việc).",
      },
      {
        id: "rp-ex-hsk0-3-q5",
        questionVi: "Cuối tuần hai người thường làm gì cùng nhau?",
        options: ["Đi bơi", "Đi mua sắm", "Xem phim", "Đá bóng"],
        correctAnswer: "Xem phim",
        explanationVi: "Câu cuối viết: '周末我们常一起看电影' (Cuối tuần chúng tôi thường cùng xem phim).",
      },
    ],
  },
  {
    id: "rp-ex-hsk0-4",
    level: "HSK0",
    subDifficulty: "advanced",
    genre: "Thông báo",
    title: "汉语班上课时间",
    titlePinyin: "Hànyǔ bān shàngkè shíjiān",
    titleVi: "Lịch học lớp tiếng Trung",
    contentZh:
      "各位同学：下星期一我们的汉语课在三楼302教室上课。上课时间是晚上七点到八点半。请大家带书、笔和本子，不要迟到。有问题可以给李老师发微信。",
    contentPinyin:
      "Gèwèi tóngxué: Xià Xīngqīyī wǒmen de Hànyǔ kè zài sān lóu sānlíng'èr jiàoshì shàngkè. Shàngkè shíjiān shì wǎnshang qī diǎn dào bā diǎn bàn. Qǐng dàjiā dài shū, bǐ hé běnzi, búyào chídào. Yǒu wèntí kěyǐ gěi Lǐ lǎoshī fā Wēixìn.",
    contentVi:
      "Các bạn học viên thân mến: Thứ Hai tuần sau lớp tiếng Trung của chúng ta học ở phòng 302 tầng 3. Giờ học từ 7 giờ tối đến 8 giờ 30 tối. Mọi người nhớ mang theo sách, bút và vở, đừng đi muộn. Có thắc mắc có thể nhắn WeChat cho cô Lý.",
    questions: [
      {
        id: "rp-ex-hsk0-4-q1",
        questionVi: "Lớp tiếng Trung học ở phòng nào?",
        options: ["Phòng 203", "Phòng 302", "Phòng 305", "Phòng 102"],
        correctAnswer: "Phòng 302",
        explanationVi: "Thông báo ghi: '在三楼302教室上课' (học tại phòng 302 tầng 3).",
      },
      {
        id: "rp-ex-hsk0-4-q2",
        questionVi: "Buổi học kéo dài trong khung giờ nào?",
        options: [
          "18:00 - 19:30",
          "19:00 - 20:00",
          "19:00 - 20:30",
          "20:00 - 21:30",
        ],
        correctAnswer: "19:00 - 20:30",
        explanationVi: "Trong bài nêu: '上课时间是晚上七点到八点半' (từ 7 giờ tối đến 8 giờ rưỡi).",
      },
      {
        id: "rp-ex-hsk0-4-q3",
        questionVi: "Học viên cần mang theo những gì?",
        options: [
          "Máy tính và tai nghe",
          "Sách, bút và vở",
          "Thẻ sinh viên và ảnh",
          "Bút chì màu và giấy",
        ],
        correctAnswer: "Sách, bút và vở",
        explanationVi: "Thông báo dặn: '请大家带书、笔和本子' (Xin mọi người mang theo sách, bút và vở).",
      },
      {
        id: "rp-ex-hsk0-4-q4",
        questionVi: "Thông báo nhắc nhở học viên điều gì?",
        options: [
          "Không nói chuyện trong lớp",
          "Không mang đồ ăn",
          "Không đi muộn",
          "Không dùng điện thoại",
        ],
        correctAnswer: "Không đi muộn",
        explanationVi: "Trong bài có cụm '不要迟到' (đừng đi muộn).",
      },
      {
        id: "rp-ex-hsk0-4-q5",
        questionVi: "Nếu có thắc mắc, học viên nên liên hệ ai?",
        options: ["Thầy Vương", "Cô Lý", "Cô Trương", "Lớp trưởng"],
        correctAnswer: "Cô Lý",
        explanationVi: "Câu cuối viết: '有问题可以给李老师发微信' (Có vấn đề có thể nhắn WeChat cho cô Lý).",
      },
    ],
  },
  {
    id: "rp-ex-hsk0-5",
    level: "HSK0",
    subDifficulty: "advanced",
    genre: "Đánh giá 1688",
    title: "买家好评：白色水杯",
    titlePinyin: "Mǎijiā hǎopíng: Báisè shuǐbēi",
    titleVi: "Đánh giá tốt của người mua: Ly nước màu trắng",
    contentZh:
      "这个白色水杯很好看，也不贵，只要二十八块。快递很快，三天就到了。杯子质量不错，我每天在公司用它喝水和喝茶，同事都说漂亮，推荐大家买！",
    contentPinyin:
      "Zhège báisè shuǐbēi hěn hǎokàn, yě bú guì, zhǐyào èrshíbā kuài. Kuàidì hěn kuài, sān tiān jiù dào le. Bēizi zhìliàng búcuò, wǒ měitiān zài gōngsī yòng tā hē shuǐ hé hē chá, tóngshì dōu shuō piàoliang, tuījiàn dàjiā mǎi!",
    contentVi:
      "Chiếc ly nước màu trắng này rất đẹp mà cũng không đắt, chỉ 28 tệ. Giao hàng rất nhanh, 3 ngày đã tới. Chất lượng ly khá tốt, ngày nào ở công ty mình cũng dùng nó uống nước và uống trà, đồng nghiệp ai cũng khen đẹp, khuyên mọi người nên mua!",
    questions: [
      {
        id: "rp-ex-hsk0-5-q1",
        questionVi: "Người mua đánh giá sản phẩm gì?",
        options: [
          "Áo sơ mi trắng",
          "Ly nước màu trắng",
          "Bình giữ nhiệt màu đen",
          "Hộp cơm văn phòng",
        ],
        correctAnswer: "Ly nước màu trắng",
        explanationVi: "Câu đầu viết: '这个白色水杯很好看' (Chiếc ly nước màu trắng này rất đẹp).",
      },
      {
        id: "rp-ex-hsk0-5-q2",
        questionVi: "Giá của chiếc ly là bao nhiêu?",
        options: ["18 tệ", "25 tệ", "28 tệ", "38 tệ"],
        correctAnswer: "28 tệ",
        explanationVi: "Người mua nêu giá: '只要二十八块' (chỉ cần 28 tệ).",
      },
      {
        id: "rp-ex-hsk0-5-q3",
        questionVi: "Hàng được giao trong bao lâu?",
        options: ["1 ngày", "2 ngày", "3 ngày", "5 ngày"],
        correctAnswer: "3 ngày",
        explanationVi: "Trong bài có câu '快递很快，三天就到了' (Giao hàng rất nhanh, 3 ngày đã đến).",
      },
      {
        id: "rp-ex-hsk0-5-q4",
        questionVi: "Người mua thường dùng chiếc ly ở đâu?",
        options: ["Ở trường học", "Ở công ty", "Ở phòng tập", "Ở nhà"],
        correctAnswer: "Ở công ty",
        explanationVi: "Bài viết ghi '我每天在公司用它喝水和喝茶' (Mỗi ngày tôi dùng nó ở công ty để uống nước và uống trà).",
      },
      {
        id: "rp-ex-hsk0-5-q5",
        questionVi: "Đồng nghiệp nhận xét chiếc ly thế nào?",
        options: ["Rất nặng", "Quá nhỏ", "Rất đẹp", "Khá đắt"],
        correctAnswer: "Rất đẹp",
        explanationVi: "Câu cuối viết: '同事都说漂亮' (Đồng nghiệp đều khen đẹp).",
      },
    ],
  },
];
