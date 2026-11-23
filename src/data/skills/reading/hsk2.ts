import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK2: ReadingPassage[] = [
  {
    id: "rp-ex-hsk2-1",
    level: "HSK2",
    subDifficulty: "basic",
    genre: "Hội thoại",
    title: "租房子看房记",
    titlePinyin: "Zū fángzi kànfáng jì",
    titleVi: "Đi xem nhà thuê",
    contentZh:
      "中介：这套房子离地铁站只有五分钟路，附近有超市和菜市场，生活很方便。小周：房间很干净，阳光也不错，但是一个月房租多少钱？中介：每月三千二百块，水电费另外算。如果你签一年的合同，房东可以便宜两百块。小周：听起来不错，我回去和室友商量一下，明天早上回复你。",
    contentPinyin:
      "Zhōngjiè: Zhè tào fángzi lí dìtiězhàn zhǐyǒu wǔ fēnzhōng lù, fùjìn yǒu chāoshì hé càishìchǎng, shēnghuó hěn fāngbiàn. Xiǎo Zhōu: Fángjiān hěn gānjìng, yángguāng yě búcuò, dànshì yí gè yuè fángzū duōshao qián? Zhōngjiè: Měi yuè sānqiān èrbǎi kuài, shuǐdiànfèi lìngwài suàn. Rúguǒ nǐ qiān yì nián de hétong, fángdōng kěyǐ piányi liǎngbǎi kuài. Xiǎo Zhōu: Tīng qǐlái búcuò, wǒ huíqù hé shìyǒu shāngliang yíxià, míngtiān zǎoshang huífù nǐ.",
    contentVi:
      "Môi giới: Căn hộ này cách ga tàu điện ngầm chỉ 5 phút đi bộ, gần đó có siêu thị và chợ thực phẩm, sinh hoạt rất tiện. Tiểu Chu: Phòng rất sạch sẽ, ánh sáng cũng tốt, nhưng tiền thuê một tháng bao nhiêu? Môi giới: Mỗi tháng 3.200 tệ, tiền điện nước tính riêng. Nếu bạn ký hợp đồng một năm, chủ nhà có thể giảm 200 tệ. Tiểu Chu: Nghe ổn đấy, tôi về bàn với bạn cùng phòng một chút, sáng mai sẽ trả lời bạn.",
    questions: [
      {
        id: "rp-ex-hsk2-1-q1",
        questionVi: "Căn hộ này cách ga tàu điện ngầm bao xa?",
        options: [
          "5 phút đi bộ",
          "10 phút đi xe buýt",
          "15 phút đi bộ",
          "20 phút lái xe",
        ],
        correctAnswer: "5 phút đi bộ",
        explanationVi: "Môi giới nói: '离地铁站只有五分钟路' (cách ga tàu điện ngầm chỉ 5 phút đường đi).",
      },
      {
        id: "rp-ex-hsk2-1-q2",
        questionVi: "Giá thuê ban đầu mỗi tháng là bao nhiêu?",
        options: ["2.800 tệ", "3.000 tệ", "3.200 tệ", "3.500 tệ"],
        correctAnswer: "3.200 tệ",
        explanationVi: "Môi giới báo giá: '每月三千二百块' (mỗi tháng 3.200 tệ).",
      },
      {
        id: "rp-ex-hsk2-1-q3",
        questionVi: "Tiền điện nước được tính như thế nào?",
        options: [
          "Đã bao gồm trong tiền nhà",
          "Chủ nhà trả một nửa",
          "Tính riêng ngoài tiền nhà",
          "Miễn phí 3 tháng đầu",
        ],
        correctAnswer: "Tính riêng ngoài tiền nhà",
        explanationVi: "Trong bài có câu '水电费另外算' (tiền điện nước tính riêng).",
      },
      {
        id: "rp-ex-hsk2-1-q4",
        questionVi: "Làm thế nào để được chủ nhà giảm 200 tệ mỗi tháng?",
        options: [
          "Trả tiền trước 6 tháng",
          "Ký hợp đồng thuê 1 năm",
          "Thuê thêm một phòng nữa",
          "Tự sửa chữa đồ đạc",
        ],
        correctAnswer: "Ký hợp đồng thuê 1 năm",
        explanationVi: "Môi giới cho biết: '如果你签一年的合同，房东可以便宜两百块' (Nếu ký hợp đồng 1 năm, chủ nhà giảm 200 tệ).",
      },
      {
        id: "rp-ex-hsk2-1-q5",
        questionVi: "Tiểu Chu dự định khi nào sẽ trả lời môi giới?",
        options: ["Ngay tối nay", "Sáng mai", "Cuối tuần này", "Tuần sau"],
        correctAnswer: "Sáng mai",
        explanationVi: "Câu cuối Tiểu Chu nói: '明天早上回复你' (sáng mai trả lời bạn).",
      },
    ],
  },
  {
    id: "rp-ex-hsk2-2",
    level: "HSK2",
    subDifficulty: "basic",
    genre: "Email công sở",
    title: "申请请假一天",
    titlePinyin: "Shēnqǐng qǐngjià yì tiān",
    titleVi: "Đơn xin nghỉ phép một ngày",
    contentZh:
      "刘主管：您好！不好意思打扰您。昨天晚上我淋了雨，今天早上开始发烧、头疼，去医院看了医生，医生建议我回家休息一天。我想申请今天请假一天。手头的客户报表我已经发给小王了，他会帮我跟进。如果有什么紧急的事情，请随时给我打电话。谢谢您的理解！阿明",
    contentPinyin:
      "Liú zhǔguǎn: Nín hǎo! Bù hǎoyìsi dǎrǎo nín. Zuótiān wǎnshang wǒ lín le yǔ, jīntiān zǎoshang kāishǐ fāshāo, tóuténg, qù yīyuàn kàn le yīshēng, yīshēng jiànyì wǒ huí jiā xiūxi yì tiān. Wǒ xiǎng shēnqǐng jīntiān qǐngjià yì tiān. Shǒutóu de kèhù bàobiǎo wǒ yǐjīng fā gěi Xiǎo Wáng le, tā huì bāng wǒ gēnjìn. Rúguǒ yǒu shénme jǐnjí de shìqing, qǐng suíshí gěi wǒ dǎ diànhuà. Xièxie nín de lǐjiě! Ā Míng",
    contentVi:
      "Trưởng phòng Lưu kính chào! Xin lỗi đã làm phiền anh. Tối qua em bị dầm mưa, sáng nay bắt đầu sốt và đau đầu, em đã đi bệnh viện khám và bác sĩ khuyên về nhà nghỉ ngơi một ngày. Em muốn xin nghỉ phép hôm nay một ngày. Báo cáo khách hàng đang làm em đã gửi cho Tiểu Vương, bạn ấy sẽ giúp em theo dõi tiếp. Nếu có việc gì khẩn cấp xin anh cứ gọi điện cho em bất cứ lúc nào. Cảm ơn sự thông cảm của anh! A Minh",
    questions: [
      {
        id: "rp-ex-hsk2-2-q1",
        questionVi: "Vì sao A Minh bị ốm?",
        options: [
          "Vì ăn đồ lạnh",
          "Vì tối qua bị dầm mưa",
          "Vì làm việc quá khuya",
          "Vì đi công tác xa",
        ],
        correctAnswer: "Vì tối qua bị dầm mưa",
        explanationVi: "Email viết: '昨天晚上我淋了雨，今天早上开始发烧、头疼' (Tối qua tôi bị dầm mưa, sáng nay bắt đầu sốt và đau đầu).",
      },
      {
        id: "rp-ex-hsk2-2-q2",
        questionVi: "Bác sĩ khuyên A Minh làm gì?",
        options: [
          "Nhập viện 3 ngày",
          "Về nhà nghỉ ngơi 1 ngày",
          "Đi làm bình thường",
          "Tập thể dục nhẹ",
        ],
        correctAnswer: "Về nhà nghỉ ngơi 1 ngày",
        explanationVi: "Trong bài có câu '医生建议我回家休息一天' (Bác sĩ khuyên tôi về nhà nghỉ 1 ngày).",
      },
      {
        id: "rp-ex-hsk2-2-q3",
        questionVi: "A Minh đã giao việc theo dõi báo cáo khách hàng cho ai?",
        options: ["Trưởng phòng Lưu", "Tiểu Vương", "Tiểu Lý", "Giám đốc"],
        correctAnswer: "Tiểu Vương",
        explanationVi: "A Minh báo cáo: '手头的客户报表我已经发给小王了，他会帮我跟进' (Tôi đã gửi báo cáo cho Tiểu Vương để bạn ấy theo dõi giúp).",
      },
      {
        id: "rp-ex-hsk2-2-q4",
        questionVi: "Nếu có việc khẩn cấp, trưởng phòng có thể liên hệ A Minh bằng cách nào?",
        options: [
          "Đến tận nhà",
          "Gửi bưu điện",
          "Gọi điện thoại bất cứ lúc nào",
          "Đợi đến ngày mai",
        ],
        correctAnswer: "Gọi điện thoại bất cứ lúc nào",
        explanationVi: "Email ghi: '请随时给我打电话' (Xin cứ gọi điện cho em bất cứ lúc nào).",
      },
      {
        id: "rp-ex-hsk2-2-q5",
        questionVi: "A Minh xin nghỉ phép mấy ngày?",
        options: ["Nửa ngày", "1 ngày", "2 ngày", "3 ngày"],
        correctAnswer: "1 ngày",
        explanationVi: "Trong bài nêu rõ '我想申请今天请假一天' (Em muốn xin nghỉ phép hôm nay 1 ngày).",
      },
    ],
  },
  {
    id: "rp-ex-hsk2-3",
    level: "HSK2",
    subDifficulty: "basic",
    genre: "Thông báo",
    title: "健身房春节营业通知",
    titlePinyin: "Jiànshēnfáng Chūnjié yíngyè tōngzhī",
    titleVi: "Thông báo lịch mở cửa Tết Nguyên đán của phòng gym",
    contentZh:
      "尊敬的会员：春节快到了，感谢大家一年来的支持！本健身房将于大年三十到正月初三放假四天，正月初四上午九点恢复正常营业。放假期间所有团课暂停，会员卡有效期会自动延长四天。祝大家新年快乐，身体健康！如有疑问，请在前台咨询。",
    contentPinyin:
      "Zūnjìng de huìyuán: Chūnjié kuài dào le, gǎnxiè dàjiā yì nián lái de zhīchí! Běn jiànshēnfáng jiāng yú Dànián Sānshí dào Zhēngyuè Chūsān fàngjià sì tiān, Zhēngyuè Chūsì shàngwǔ jiǔ diǎn huīfù zhèngcháng yíngyè. Fàngjià qījiān suǒyǒu tuánkè zàntíng, huìyuánkǎ yǒuxiàoqī huì zìdòng yáncháng sì tiān. Zhù dàjiā xīnnián kuàilè, shēntǐ jiànkāng! Rúyǒu yíwèn, qǐng zài qiántái zīxún.",
    contentVi:
      "Quý hội viên thân mến: Tết Nguyên đán sắp đến, cảm ơn sự ủng hộ của mọi người trong suốt một năm qua! Phòng gym sẽ nghỉ 4 ngày từ 30 Tết đến mùng 3 Tết, 9 giờ sáng mùng 4 Tết sẽ hoạt động bình thường trở lại. Trong thời gian nghỉ, tất cả các lớp học nhóm tạm dừng, thời hạn thẻ hội viên sẽ tự động được gia hạn thêm 4 ngày. Chúc mọi người năm mới vui vẻ, dồi dào sức khỏe! Nếu có thắc mắc, vui lòng hỏi tại quầy lễ tân.",
    questions: [
      {
        id: "rp-ex-hsk2-3-q1",
        questionVi: "Phòng gym nghỉ Tết mấy ngày?",
        options: ["3 ngày", "4 ngày", "5 ngày", "7 ngày"],
        correctAnswer: "4 ngày",
        explanationVi: "Thông báo nêu: '大年三十到正月初三放假四天' (nghỉ 4 ngày từ 30 Tết đến mùng 3).",
      },
      {
        id: "rp-ex-hsk2-3-q2",
        questionVi: "Khi nào phòng gym mở cửa hoạt động lại?",
        options: [
          "9:00 sáng mùng 3 Tết",
          "9:00 sáng mùng 4 Tết",
          "8:00 sáng mùng 5 Tết",
          "10:00 sáng mùng 6 Tết",
        ],
        correctAnswer: "9:00 sáng mùng 4 Tết",
        explanationVi: "Trong bài ghi rõ: '正月初四上午九点恢复正常营业' (9 giờ sáng mùng 4 hoạt động bình thường lại).",
      },
      {
        id: "rp-ex-hsk2-3-q3",
        questionVi: "Các lớp học nhóm trong dịp nghỉ Tết sẽ thế nào?",
        options: [
          "Vẫn học bình thường",
          "Chuyển sang học trực tuyến",
          "Tạm dừng toàn bộ",
          "Chỉ mở buổi sáng",
        ],
        correctAnswer: "Tạm dừng toàn bộ",
        explanationVi: "Bài viết nêu: '放假期间所有团课暂停' (Trong thời gian nghỉ tất cả lớp nhóm tạm dừng).",
      },
      {
        id: "rp-ex-hsk2-3-q4",
        questionVi: "Quyền lợi thẻ hội viên được xử lý ra sao?",
        options: [
          "Tự động gia hạn thêm 4 ngày",
          "Được hoàn tiền 4 ngày",
          "Tặng thêm 1 buổi PT",
          "Không thay đổi thời hạn",
        ],
        correctAnswer: "Tự động gia hạn thêm 4 ngày",
        explanationVi: "Thông báo ghi: '会员卡有效期会自动延长四天' (Thời hạn thẻ hội viên tự động kéo dài 4 ngày).",
      },
      {
        id: "rp-ex-hsk2-3-q5",
        questionVi: "Nếu có câu hỏi, hội viên nên liên hệ ở đâu?",
        options: ["Gửi email", "Hỏi tại quầy lễ tân", "Hỏi huấn luyện viên", "Nhắn qua ứng dụng"],
        correctAnswer: "Hỏi tại quầy lễ tân",
        explanationVi: "Câu cuối viết: '如有疑问，请在前台咨询' (Nếu có thắc mắc, vui lòng tư vấn tại quầy lễ tân).",
      },
    ],
  },
  {
    id: "rp-ex-hsk2-4",
    level: "HSK2",
    subDifficulty: "advanced",
    genre: "Đánh giá 1688",
    title: "义乌小商品批发反馈",
    titlePinyin: "Yìwū xiǎoshāngpǐn pīfā fǎnkuì",
    titleVi: "Phản hồi nhập sỉ hàng tiểu thủ công Nghĩa Ô",
    contentZh:
      "这是我第二次在这家义乌工厂进货了，这次一共拿了三百个手机壳。老板服务态度特别好，下单前还发了实物视频给我看。包装很结实，运到越南河内也没有一个破损的。唯一的小缺点是发货比约定晚了一天，不过产品质量真的很稳定，客人反馈都很好，下次还会继续合作。",
    contentPinyin:
      "Zhè shì wǒ dì èr cì zài zhè jiā Yìwū gōngchǎng jìnhuò le, zhè cì yígòng ná le sānbǎi gè shǒujīké. Lǎobǎn fúwù tàidu tèbié hǎo, xiàdān qián hái fā le shíwù shìpín gěi wǒ kàn. Bāozhuāng hěn jiēshi, yùn dào Yuènán Hénèi yě méiyǒu yí gè pòsǔn de. Wéiyī de xiǎo quēdiǎn shì fāhuò bǐ yuēdìng wǎn le yì tiān, búguò chǎnpǐn zhìliàng zhēn de hěn wěndìng, kèrén fǎnkuì dōu hěn hǎo, xià cì hái huì jìxù hézuò.",
    contentVi:
      "Đây là lần thứ hai mình nhập hàng ở xưởng Nghĩa Ô này, lần này lấy tổng cộng 300 chiếc ốp điện thoại. Thái độ phục vụ của chủ xưởng cực kỳ tốt, trước khi đặt hàng còn gửi video hàng thật cho mình xem. Đóng gói rất chắc chắn, vận chuyển về tận Hà Nội Việt Nam mà không hỏng một chiếc nào. Điểm trừ nhỏ duy nhất là giao hàng chậm hơn hẹn 1 ngày, nhưng chất lượng sản phẩm thực sự rất ổn định, khách phản hồi đều tốt, lần sau vẫn sẽ hợp tác tiếp.",
    questions: [
      {
        id: "rp-ex-hsk2-4-q1",
        questionVi: "Lần này người mua đã nhập bao nhiêu ốp điện thoại?",
        options: ["100 chiếc", "200 chiếc", "300 chiếc", "500 chiếc"],
        correctAnswer: "300 chiếc",
        explanationVi: "Trong bài viết: '这次一共拿了三百个手机壳' (Lần này tổng cộng lấy 300 chiếc ốp điện thoại).",
      },
      {
        id: "rp-ex-hsk2-4-q2",
        questionVi: "Trước khi đặt hàng, chủ xưởng đã làm gì cho khách?",
        options: [
          "Giảm giá 20%",
          "Gửi video sản phẩm thật",
          "Tặng 10 chiếc mẫu miễn phí",
          "Miễn phí vận chuyển quốc tế",
        ],
        correctAnswer: "Gửi video sản phẩm thật",
        explanationVi: "Đoạn văn nêu: '下单前还发了实物视频给我看' (Trước khi đặt đơn còn gửi video hàng thật cho tôi xem).",
      },
      {
        id: "rp-ex-hsk2-4-q3",
        questionVi: "Tình trạng hàng khi vận chuyển về Hà Nội thế nào?",
        options: [
          "Hỏng mất 5 chiếc",
          "Bị ướt thùng carton",
          "Không hỏng chiếc nào",
          "Thiếu mất 10 chiếc",
        ],
        correctAnswer: "Không hỏng chiếc nào",
        explanationVi: "Bài viết ghi: '运到越南河内也没有一个破损的' (Vận chuyển đến Hà Nội Việt Nam cũng không có cái nào hư hỏng).",
      },
      {
        id: "rp-ex-hsk2-4-q4",
        questionVi: "Điểm trừ duy nhất của đơn hàng này là gì?",
        options: [
          "Giá cao hơn thị trường",
          "Đóng gói sơ sài",
          "Giao hàng trễ hơn hẹn 1 ngày",
          "Màu sắc hơi lệch",
        ],
        correctAnswer: "Giao hàng trễ hơn hẹn 1 ngày",
        explanationVi: "Người mua nhận xét: '唯一的小缺点是发货比约定晚了一天' (Nhược điểm nhỏ duy nhất là phát hàng muộn hơn hẹn 1 ngày).",
      },
      {
        id: "rp-ex-hsk2-4-q5",
        questionVi: "Người mua có dự định tiếp tục nhập hàng ở xưởng này không?",
        options: [
          "Có, sẽ tiếp tục hợp tác",
          "Không, sẽ đổi xưởng khác",
          "Chưa quyết định",
          "Chỉ mua nếu giảm giá",
        ],
        correctAnswer: "Có, sẽ tiếp tục hợp tác",
        explanationVi: "Câu cuối khẳng định: '下次还会继续合作' (Lần sau vẫn sẽ tiếp tục hợp tác).",
      },
    ],
  },
  {
    id: "rp-ex-hsk2-5",
    level: "HSK2",
    subDifficulty: "advanced",
    genre: "Kịch bản phỏng vấn",
    title: "应聘汉语翻译助理",
    titlePinyin: "Yìngpìn Hànyǔ fānyì zhùlǐ",
    titleVi: "Phỏng vấn vị trí trợ lý phiên dịch tiếng Trung",
    contentZh:
      "面试官：你好，请先简单介绍一下你自己吧。阿兰：您好！我叫阿兰，今年从河内大学中文系毕业。我学了四年汉语，已经通过了HSK四级。大学期间，我在一家贸易公司实习了三个月，主要帮经理翻译邮件和接待中国客户。我很喜欢这份工作，希望能加入贵公司。面试官：很好，你什么时候能开始上班？阿兰：随时都可以。",
    contentPinyin:
      "Miànshìguān: Nǐ hǎo, qǐng xiān jiǎndān jièshào yíxià nǐ zìjǐ ba. Ā Lán: Nín hǎo! Wǒ jiào Ā Lán, jīnnián cóng Hénèi Dàxué Zhōngwénxì bìyè. Wǒ xué le sì nián Hànyǔ, yǐjīng tōngguò le HSK sì jí. Dàxué qījiān, wǒ zài yì jiā màoyì gōngsī shíxí le sān gè yuè, zhǔyào bāng jīnglǐ fānyì yóujiàn hé jiēdài Zhōngguó kèhù. Wǒ hěn xǐhuan zhè fèn gōngzuò, xīwàng néng jiārù guì gōngsī. Miànshìguān: Hěn hǎo, nǐ shénme shíhou néng kāishǐ shàngbān? Ā Lán: Suíshí dōu kěyǐ.",
    contentVi:
      "Người phỏng vấn: Chào bạn, mời bạn giới thiệu ngắn gọn về bản thân trước nhé. A Lan: Chào anh/chị ạ! Em tên là A Lan, năm nay tốt nghiệp khoa tiếng Trung Đại học Hà Nội. Em đã học tiếng Trung 4 năm và đã thi đỗ HSK 4. Thời sinh viên, em từng thực tập 3 tháng tại một công ty thương mại, chủ yếu giúp giám đốc dịch email và tiếp đón khách hàng Trung Quốc. Em rất thích công việc này và hy vọng được gia nhập quý công ty. Người phỏng vấn: Rất tốt, khi nào bạn có thể bắt đầu đi làm? A Lan: Bất cứ lúc nào cũng được ạ.",
    questions: [
      {
        id: "rp-ex-hsk2-5-q1",
        questionVi: "A Lan tốt nghiệp trường đại học nào?",
        options: [
          "Đại học Bắc Kinh",
          "Đại học Hà Nội",
          "Đại học Thượng Hải",
          "Đại học Ngoại thương",
        ],
        correctAnswer: "Đại học Hà Nội",
        explanationVi: "A Lan nói: '今年从河内大学中文系毕业' (Năm nay tốt nghiệp khoa tiếng Trung Đại học Hà Nội).",
      },
      {
        id: "rp-ex-hsk2-5-q2",
        questionVi: "A Lan đã đạt chứng chỉ HSK cấp mấy?",
        options: ["HSK 3", "HSK 4", "HSK 5", "HSK 6"],
        correctAnswer: "HSK 4",
        explanationVi: "Trong bài có câu '已经通过了HSK四级' (đã thi đỗ HSK cấp 4).",
      },
      {
        id: "rp-ex-hsk2-5-q3",
        questionVi: "Thời đại học A Lan đã thực tập ở công ty thương mại bao lâu?",
        options: ["1 tháng", "2 tháng", "3 tháng", "6 tháng"],
        correctAnswer: "3 tháng",
        explanationVi: "A Lan chia sẻ: '在一家贸易公司实习了三个月' (thực tập 3 tháng tại một công ty thương mại).",
      },
      {
        id: "rp-ex-hsk2-5-q4",
        questionVi: "Công việc chính của A Lan khi thực tập là gì?",
        options: [
          "Bán hàng trực tuyến",
          "Dịch email và tiếp khách Trung Quốc",
          "Kiểm tra hàng trong kho",
          "Thiết kế quảng cáo",
        ],
        correctAnswer: "Dịch email và tiếp khách Trung Quốc",
        explanationVi: "Bài nêu rõ: '主要帮经理翻译邮件和接待中国客户' (chủ yếu giúp giám đốc dịch email và tiếp đón khách Trung Quốc).",
      },
      {
        id: "rp-ex-hsk2-5-q5",
        questionVi: "Khi nào A Lan có thể bắt đầu nhận việc?",
        options: [
          "Tháng sau",
          "Sau hai tuần nữa",
          "Bất cứ lúc nào",
          "Sau khi tốt nghiệp vào mùa thu",
        ],
        correctAnswer: "Bất cứ lúc nào",
        explanationVi: "Câu cuối A Lan đáp: '随时都可以' (Lúc nào cũng được).",
      },
    ],
  },
];
