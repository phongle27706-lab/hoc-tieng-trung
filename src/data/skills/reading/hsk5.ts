import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK5: ReadingPassage[] = [
  {
    id: "rp-ex-hsk5-1",
    level: "HSK5",
    subDifficulty: "basic",
    genre: "Công nghệ & AI",
    title: "生成式AI如何重塑职场效率",
    titlePinyin: "Shēngchéngshì AI rúhé chóngsù zhíchǎng xiàolǜ",
    titleVi: "AI tạo sinh đang tái định hình hiệu suất công sở như thế nào",
    contentZh:
      "随着大语言模型技术的日趋成熟，生成式人工智能正迅速渗透到文案撰写、数据分析、代码编写和跨语言沟通等日常办公场景中。过去需要团队耗时半天整理的会议纪要和竞品报告，如今借助AI工具往往几分钟便能生成初稿，极大地解放了员工的重复性劳动。然而，多项职场调研表明，AI带来的并非简单的“替代”，而是工作重心的转移。那些善于提出精准需求、具备批判性思维并能够严格核查AI输出准确性的从业者，其职场竞争力反而大幅提升。相反，如果盲目依赖工具而不加甄别，不仅容易产生事实性错误，还可能导致自身专业判断力的退化。",
    contentPinyin:
      "Suízhe dà yǔyán móxíng jìshù de rìqū chéngshú, shēngchéngshì réngōng zhìnéng zhèng xùnsù shèntòu dào wén'àn zhuànxiě, shùjù fēnxī, dàimǎ biānxiě hé kuà yǔyán gōutōng děng rìcháng bàngōng chǎngjǐng zhōng. Guòqù xūyào tuánduì hàoshí bàn tiān zhěnglǐ de huìyì jìyào hé jìngpǐn bàogào, rújīn jièzhù AI gōngjù wǎngwǎng jǐ fēnzhōng biàn néng shēngchéng chūgǎo, jídà de jiěfàng le yuángōng de chóngfùxìng láodòng. Rán'ér, duō xiàng zhíchǎng diàoyán biǎomíng, AI dàilái de bìngfēi jiǎndān de 'tìdài', érshì gōngzuò zhòngxīn de zhuǎnyí. Nàxiē shànyú tíchū jīngzhǔn xūqiú, jùbèi pīpànxìng sīwéi bìng nénggòu yángé héchá AI shūchū zhǔnquèxìng de cóngyèzhě, qí zhíchǎng jìngzhēnglì fǎn'ér dàfú tíshēng. Xiāngfǎn, rúguǒ mángmù yīlài gōngjù ér bùjiā zhēnbié, bùjǐn róngyì chǎnshēng shìshíxìng cuòwù, hái kěnéng dǎozhì zìshēn zhuānyè pànduànlì de tuìhuà.",
    contentVi:
      "Cùng với sự trưởng thành ngày càng rõ nét của công nghệ mô hình ngôn ngữ lớn, trí tuệ nhân tạo tạo sinh đang nhanh chóng thâm nhập vào các bối cảnh công sở hằng ngày như viết nội dung, phân tích dữ liệu, lập trình và giao tiếp đa ngôn ngữ. Những biên bản cuộc họp hay báo cáo đối thủ trước đây đội ngũ phải mất nửa ngày tổng hợp, nay nhờ công cụ AI thường chỉ vài phút là có bản nháp đầu tiên, giải phóng đáng kể sức lao động lặp đi lặp lại. Tuy nhiên, nhiều khảo sát công sở chỉ ra rằng điều AI mang lại không đơn giản là sự 'thay thế' mà là sự dịch chuyển trọng tâm công việc. Những nhân sự biết đặt yêu cầu chính xác, có tư duy phản biện và kiểm chứng chặt chẽ độ chính xác đầu ra của AI lại tăng mạnh năng lực cạnh tranh. Ngược lại, nếu phụ thuộc mù quáng mà không chọn lọc, không chỉ dễ mắc sai sót thực tế mà còn có thể làm suy giảm khả năng phán đoán chuyên môn của chính mình.",
    questions: [
      {
        id: "rp-ex-hsk5-1-q1",
        questionVi: "Theo đoạn văn, AI tạo sinh giúp ích trực tiếp điều gì cho các công việc như lập biên bản họp hay báo cáo đối thủ?",
        options: [
          "Tự động ký kết hợp đồng với khách hàng",
          "Tạo bản nháp trong vài phút, giải phóng lao động lặp lại",
          "Loại bỏ hoàn toàn nhu cầu họp nhóm",
          "Đảm bảo 100% không có sai sót dữ liệu",
        ],
        correctAnswer: "Tạo bản nháp trong vài phút, giải phóng lao động lặp lại",
        explanationVi: "Bài viết nêu: '如今借助AI工具往往几分钟便能生成初稿，极大地解放了员工的重复性劳动'.",
      },
      {
        id: "rp-ex-hsk5-1-q2",
        questionVi: "Nhiều khảo sát công sở cho thấy tác động thực sự của AI là gì?",
        options: [
          "Thay thế toàn bộ nhân viên văn phòng trong 2 năm",
          "Không chỉ là thay thế đơn thuần mà là sự dịch chuyển trọng tâm công việc",
          "Khiến thời gian làm việc của mọi người tăng lên",
          "Chỉ có tác dụng với ngành công nghệ thông tin",
        ],
        correctAnswer: "Không chỉ là thay thế đơn thuần mà là sự dịch chuyển trọng tâm công việc",
        explanationVi: "Trong bài có câu 'AI带来的并非简单的“替代”，而是工作重心的转移'.",
      },
      {
        id: "rp-ex-hsk5-1-q3",
        questionVi: "Nhóm nhân sự nào sẽ gia tăng năng lực cạnh tranh mạnh mẽ trong kỷ nguyên AI?",
        options: [
          "Người làm việc hoàn toàn thủ công không dùng AI",
          "Người biết đặt yêu cầu chuẩn xác, có tư duy phản biện và biết kiểm chứng đầu ra của AI",
          "Người sao chép nguyên văn kết quả AI trả về",
          "Người chỉ tập trung vào các tác vụ lặp lại",
        ],
        correctAnswer: "Người biết đặt yêu cầu chuẩn xác, có tư duy phản biện và biết kiểm chứng đầu ra của AI",
        explanationVi: "Đoạn văn viết: '善于提出精准需求、具备批判性思维并能够严格核查AI输出准确性的从业者，其职场竞争力反而大幅提升'.",
      },
      {
        id: "rp-ex-hsk5-1-q4",
        questionVi: "Hậu quả của việc phụ thuộc mù quáng vào công cụ AI là gì?",
        options: [
          "Tốn quá nhiều chi phí phần mềm",
          "Dễ sinh lỗi sai thực tế và làm suy giảm khả năng phán đoán chuyên môn",
          "Bị đồng nghiệp xa lánh",
          "Làm chậm tốc độ máy tính công ty",
        ],
        correctAnswer: "Dễ sinh lỗi sai thực tế và làm suy giảm khả năng phán đoán chuyên môn",
        explanationVi: "Câu cuối cảnh báo: '不仅容易产生事实性错误，还可能导致自身专业判断力的退化'.",
      },
      {
        id: "rp-ex-hsk5-1-q5",
        questionVi: "Bối cảnh công sở nào KHÔNG được liệt kê trong câu đầu tiên?",
        options: [
          "Viết nội dung (文案撰写)",
          "Phân tích dữ liệu (数据分析)",
          "Giao tiếp đa ngôn ngữ (跨语言沟通)",
          "Vận hành dây chuyền sản xuất cơ khí",
        ],
        correctAnswer: "Vận hành dây chuyền sản xuất cơ khí",
        explanationVi: "Câu đầu chỉ liệt kê '文案撰写、数据分析、代码编写和跨语言沟通'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk5-2",
    level: "HSK5",
    subDifficulty: "basic",
    genre: "Báo cáo QC & Sản xuất",
    title: "东南亚建厂的供应链本地化挑战",
    titlePinyin: "Dōngnányà jiànchǎng de gōngyìngliàn běndìhuà tiǎozhàn",
    titleVi: "Thách thức nội địa hóa chuỗi cung ứng khi mở nhà máy tại Đông Nam Á",
    contentZh:
      "近年来，越来越多中国制造企业选择在越南、泰国等东南亚国家投资建厂，以优化全球产能布局并规避部分关税壁垒。虽然当地在土地成本和年轻劳动力方面具备明显优势，但不少企业在投产初期都遇到了供应链配套不足的瓶颈。许多精密零部件、特种化工原料仍需从中国珠三角或长三角地区跨国调运，不仅拉长了交货周期，也增加了海运与清关成本。因此，领先企业正通过培育本地二级供应商、派驻资深工艺工程师进行技术培训以及建立区域共享保税仓等措施，逐步提升零部件本地采购率，从而真正释放海外生产基地的长期成本优势。",
    contentPinyin:
      "Jìnniánlái, yuèláiyuè duō Zhōngguó zhìzào qǐyè xuǎnzé zài Yuènán, Tàiguó děng Dōngnányà guójiā tóuzī jiànchǎng, yǐ yōuhuà quánqiú chǎnnéng bùjú bìng guībì bùfen guānshuì bìlěi. Suīrán dāngdì zài tǔdì chéngběn hé niánqīng láodònglì fāngmiàn jùbèi míngxiǎn yōushì, dàn bùshǎo qǐyè zài tóuchǎn chūqī dōu yùdào le gōngyìngliàn pèitào bùzú de píngjǐng. Xǔduō jīngmì língbùjiàn, tèzhǒng huàgōng yuánliào réng xū cóng Zhōngguó Zhūsānjiǎo huò Chángsānjiǎo dìqū kuàguó diàoyùn, bùjǐn lācháng le jiāohuò zhōuqī, yě zēngjiā le hǎiyùn yǔ qīngguān chéngběn. Yīncǐ, lǐngxiān qǐyè zhèng tōngguò péiyù běndì èrjí gōngyìngshāng, pàizhù zīshēn gōngyì gōngchéngshī jìnxíng jìshù péixùn yǐjí jiànlì qūyù gòngxiǎng bǎoshuìcāng děng cuòshī, zhúbù tíshēng língbùjiàn běndì cǎigòulǜ, cóng'ér zhēnzhèng shìfàng hǎiwài shēngchǎn jīdì de chángqī chéngběn yōushì.",
    contentVi:
      "Những năm gần đây, ngày càng nhiều doanh nghiệp sản xuất Trung Quốc chọn đầu tư xây nhà máy tại các nước Đông Nam Á như Việt Nam, Thái Lan nhằm tối ưu bố cục năng lực sản xuất toàn cầu và né tránh một số hàng rào thuế quan. Tuy địa phương có lợi thế rõ rệt về chi phí đất đai và lực lượng lao động trẻ, nhưng không ít doanh nghiệp trong giai đoạn đầu vận hành đều gặp nút thắt do chuỗi cung ứng phụ trợ chưa đầy đủ. Nhiều linh kiện chính xác, nguyên liệu hóa chất đặc chủng vẫn phải vận chuyển xuyên biên giới từ vùng Châu Giang hoặc Trường Giang của Trung Quốc, không chỉ kéo dài chu kỳ giao hàng mà còn tăng chi phí vận tải biển và thông quan. Do đó, các doanh nghiệp tiên phong đang từng bước nâng tỷ lệ nội địa hóa linh kiện thông qua việc bồi dưỡng nhà cung cấp cấp 2 bản địa, cử kỹ sư công nghệ kỳ cựu đào tạo kỹ thuật và xây dựng kho ngoại quan dùng chung khu vực, từ đó thực sự giải phóng lợi thế chi phí dài hạn của cơ sở sản xuất ở nước ngoài.",
    questions: [
      {
        id: "rp-ex-hsk5-2-q1",
        questionVi: "Mục tiêu chính khi doanh nghiệp sản xuất Trung Quốc mở nhà máy tại Đông Nam Á là gì?",
        options: [
          "Chỉ để tiêu thụ hàng hóa tại thị trường nội địa",
          "Tối ưu bố cục sản xuất toàn cầu và tránh một số rào cản thuế quan",
          "Tận dụng nguồn nguyên liệu hóa chất đặc chủng dồi dào",
          "Giảm hoàn toàn số lượng kỹ sư người Trung Quốc",
        ],
        correctAnswer: "Tối ưu bố cục sản xuất toàn cầu và tránh một số rào cản thuế quan",
        explanationVi: "Câu đầu viết: '以优化全球产能布局并规避部分关税壁垒'.",
      },
      {
        id: "rp-ex-hsk5-2-q2",
        questionVi: "Nút thắt lớn mà nhiều nhà máy gặp phải trong giai đoạn đầu đi vào sản xuất là gì?",
        options: [
          "Thiếu lao động trẻ",
          "Giá thuê đất quá cao",
          "Chuỗi cung ứng phụ trợ tại chỗ chưa đầy đủ",
          "Không có cảng biển xuất khẩu",
        ],
        correctAnswer: "Chuỗi cung ứng phụ trợ tại chỗ chưa đầy đủ",
        explanationVi: "Bài nêu rõ: '不少企业在投产初期都遇到了供应链配套不足的瓶颈'.",
      },
      {
        id: "rp-ex-hsk5-2-q3",
        questionVi: "Việc phải vận chuyển linh kiện chính xác từ Trung Quốc sang gây ra hệ quả gì?",
        options: [
          "Chất lượng sản phẩm giảm sút nghiêm trọng",
          "Kéo dài chu kỳ giao hàng và tăng chi phí vận tải biển, thông quan",
          "Làm mất ưu đãi thuế doanh nghiệp",
          "Gây thiếu hụt điện năng tại khu công nghiệp",
        ],
        correctAnswer: "Kéo dài chu kỳ giao hàng và tăng chi phí vận tải biển, thông quan",
        explanationVi: "Đoạn văn viết: '不仅拉长了交货周期，也增加了海运与清关成本'.",
      },
      {
        id: "rp-ex-hsk5-2-q4",
        questionVi: "Biện pháp nào KHÔNG nằm trong giải pháp của các doanh nghiệp tiên phong?",
        options: [
          "Bồi dưỡng nhà cung cấp cấp 2 tại địa phương",
          "Cử kỹ sư công nghệ kỳ cựu sang đào tạo kỹ thuật",
          "Xây dựng kho ngoại quan dùng chung khu vực",
          "Đóng cửa toàn bộ nhà máy trong nước",
        ],
        correctAnswer: "Đóng cửa toàn bộ nhà máy trong nước",
        explanationVi: "Bài chỉ nhắc đến '培育本地二级供应商', '派驻资深工艺工程师进行技术培训', và '建立区域共享保税仓'.",
      },
      {
        id: "rp-ex-hsk5-2-q5",
        questionVi: "Mục đích cuối cùng của việc nâng tỷ lệ mua sắm linh kiện nội địa là gì?",
        options: [
          "Giải phóng thực sự lợi thế chi phí dài hạn của nhà máy ở nước ngoài",
          "Rút ngắn thời gian đào tạo công nhân mới",
          "Thay đổi thương hiệu sang tên địa phương",
          "Chấm dứt mọi hoạt động xuất khẩu sang châu Âu",
        ],
        correctAnswer: "Giải phóng thực sự lợi thế chi phí dài hạn của nhà máy ở nước ngoài",
        explanationVi: "Câu cuối kết luận: '从而真正释放海外生产基地的长期成本优势'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk5-3",
    level: "HSK5",
    subDifficulty: "advanced",
    genre: "Kinh tế & Tiêu dùng",
    title: "年轻人为什么热衷“平替”消费？",
    titlePinyin: "Niánqīngrén wèishénme rèzhōng 'píngtì' xiāofèi?",
    titleVi: "Vì sao giới trẻ chuộng xu hướng tiêu dùng 'bản thay thế giá mềm'?",
    contentZh:
      "近两年，“平替”（平价替代品）成为中国消费市场的高频热词。从护肤品、户外冲锋衣到咖啡豆和无线耳机，越来越多年轻消费者不再盲目追捧国际大牌的高额品牌溢价，而是愿意花时间研究成分表、面料参数和代工厂背景，寻找品质相近但价格只有大牌三分之一甚至更低的替代品。这种现象的背后，并非单纯的消费降级，而是理性消费观念的觉醒。年轻人更加看重产品的实际体验与自身需求的匹配度，宁愿把省下来的预算投入到旅行、健身或技能提升等能带来长期满足感的体验型消费上。",
    contentPinyin:
      "Jìn liǎng nián, 'píngtì' (píngjià tìdàipǐn) chéngwéi Zhōngguó xiāofèi shìchǎng de gāopín rècí. Cóng hùfūpǐn, hùwài chōngfēngyī dào kāfēidòu hé wúxiàn ěrjī, yuèláiyuè duō niánqīng xiāofèizhě búzài mángmù zhuīpěng guójì dàpái de gāo'é pǐnpái yìjià, érshì yuànyì huā shíjiān yánjiū chéngfènbiǎo, miànliào cānshù hé dàigōngchǎng bèijǐng, xúnzhǎo pǐnzhì xiāngjìn dàn jiàgé zhǐyǒu dàpái sānfēnzhīyī shènzhì gèng dī de tìdàipǐn. Zhè zhǒng xiànxiàng de bèihòu, bìngfēi dānchún de xiāofèi jiàngjí, érshì lǐxìng xiāofèi guānniàn de juéxǐng. Niánqīngrén gèngjiā kànzhòng chǎnpǐn de shíjì tǐyàn yǔ zìshēn xūqiú de pǐpèidù, nìngyuàn bǎ shěng xiàlái de yùsuàn tóurù dào lǚxíng, jiànshēn huò jìnéng tíshēng děng néng dàilái chángqī mǎnzúgǎn de tǐyànxíng xiāofèi shàng.",
    contentVi:
      "Hai năm gần đây, 'bình thế' (sản phẩm thay thế giá bình dân) trở thành từ khóa xuất hiện dày đặc trên thị trường tiêu dùng Trung Quốc. Từ mỹ phẩm dưỡng da, áo khoác dã ngoại đến hạt cà phê và tai nghe không dây, ngày càng nhiều người tiêu dùng trẻ không còn mù quáng chạy theo mức chênh lệch thương hiệu đắt đỏ của các hãng quốc tế lớn, mà sẵn sàng bỏ thời gian nghiên cứu bảng thành phần, thông số chất liệu và nguồn gốc xưởng gia công để tìm sản phẩm tương đương chất lượng nhưng giá chỉ bằng một phần ba hoặc thấp hơn. Đằng sau hiện tượng này không chỉ đơn thuần là suy giảm tiêu dùng, mà là sự thức tỉnh của tư duy tiêu dùng lý trí. Người trẻ coi trọng hơn trải nghiệm thực tế và mức độ phù hợp với nhu cầu bản thân, thà dùng khoản ngân sách tiết kiệm được đầu tư vào du lịch, tập luyện thể chất hay nâng cao kỹ năng — những tiêu dùng trải nghiệm mang lại cảm giác thỏa mãn lâu dài.",
    questions: [
      {
        id: "rp-ex-hsk5-3-q1",
        questionVi: "Thuật ngữ '平替' (píngtì) trong bài có nghĩa là gì?",
        options: [
          "Sản phẩm giảm giá cuối mùa của hãng lớn",
          "Sản phẩm thay thế giá bình dân có chất lượng tương đương",
          "Hàng đã qua sử dụng mua lại trên mạng",
          "Hàng đặt may thủ công theo yêu cầu riêng",
        ],
        correctAnswer: "Sản phẩm thay thế giá bình dân có chất lượng tương đương",
        explanationVi: "Bài giải thích rõ: '平替（平价替代品）' và '寻找品质相近但价格只有大牌三分之一甚至更低的替代品'.",
      },
      {
        id: "rp-ex-hsk5-3-q2",
        questionVi: "Người tiêu dùng trẻ thường tìm kiếm sản phẩm thay thế bằng cách nào?",
        options: [
          "Chỉ mua những món rẻ nhất không cần xem đánh giá",
          "Nghiên cứu bảng thành phần, thông số chất liệu và thông tin xưởng gia công",
          "Hỏi ý kiến bạn bè cùng lớp",
          "Chỉ mua ở các chợ truyền thống",
        ],
        correctAnswer: "Nghiên cứu bảng thành phần, thông số chất liệu và thông tin xưởng gia công",
        explanationVi: "Đoạn văn viết: '愿意花时间研究成分表、面料参数和代工厂背景'.",
      },
      {
        id: "rp-ex-hsk5-3-q3",
        questionVi: "Theo tác giả, bản chất đằng sau xu hướng tiêu dùng này là gì?",
        options: [
          "Thu nhập của người trẻ giảm mạnh",
          "Sự thức tỉnh của quan niệm tiêu dùng lý trí",
          "Các thương hiệu quốc tế rút khỏi thị trường",
          "Ảnh hưởng tạm thời từ một trào lưu mạng",
        ],
        correctAnswer: "Sự thức tỉnh của quan niệm tiêu dùng lý trí",
        explanationVi: "Bài khẳng định: '并非单纯的消费降级，而是理性消费观念的觉醒'.",
      },
      {
        id: "rp-ex-hsk5-3-q4",
        questionVi: "Giới trẻ thường dùng khoản tiền tiết kiệm được để đầu tư vào đâu?",
        options: [
          "Gửi tiết kiệm ngân hàng dài hạn",
          "Mua bất động sản và vàng",
          "Du lịch, tập gym hoặc nâng cao kỹ năng",
          "Mua sắm thêm nhiều quần áo giá rẻ",
        ],
        correctAnswer: "Du lịch, tập gym hoặc nâng cao kỹ năng",
        explanationVi: "Câu cuối nêu: '把省下来的预算投入到旅行、健身或技能提升等...体验型消费上'.",
      },
      {
        id: "rp-ex-hsk5-3-q5",
        questionVi: "Mặt hàng nào sau đây KHÔNG được nhắc đến làm ví dụ cho xu hướng 'bình thế'?",
        options: [
          "Mỹ phẩm dưỡng da",
          "Áo khoác dã ngoại",
          "Tai nghe không dây",
          "Ô tô điện gia đình",
        ],
        correctAnswer: "Ô tô điện gia đình",
        explanationVi: "Bài chỉ nêu ví dụ '护肤品、户外冲锋衣、咖啡豆和无线耳机'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk5-4",
    level: "HSK5",
    subDifficulty: "advanced",
    genre: "Xã hội & Đời sống",
    title: "城市“口袋公园”让绿意触手可及",
    titlePinyin: "Chéngshì 'kǒudài gōngyuán' ràng lǜyì chùshǒu kějí",
    titleVi: "'Công viên bỏ túi' nơi đô thị đưa mảng xanh vào tầm tay",
    contentZh:
      "在寸土寸金的现代化大都市里，新建大型综合公园往往受到土地资源的严格限制。为了缓解居民亲近自然的需求与城市空间紧张之间的矛盾，近年来中国多地大力推进“口袋公园”建设。所谓口袋公园，就是利用街头转角、闲置边角地或老旧小区旁的小块空地，经过精细化设计改造而成的迷你绿地。尽管面积通常只有几百到几千平方米，却“麻雀虽小，五脏俱全”，不仅种植了四季常青的乔木花卉，还配备了健身步道、无障碍座椅和儿童游乐设施。对忙碌的上班族和周边老人而言，下楼步行五分钟就能在绿荫下歇脚聊天，大大提升了城市的宜居温度。",
    contentPinyin:
      "Zài cùntǔ cùnjīn de xiàndàihuà dà dūshì lǐ, xīnjiàn dàxíng zōnghé gōngyuán wǎngwǎng shòudào tǔdì zīyuán de yángé xiànzhì. Wèile huǎnjiě jūmín qīnjìn zìrán de xūqiú yǔ chéngshì kōngjiān jǐnzhāng zhījiān de máodùn, jìnniánlái Zhōngguó duōdì dàlì tuījìn 'kǒudài gōngyuán' jiànshè. Suǒwèi kǒudài gōngyuán, jiùshì lìyòng jiētóu zhuǎnjiǎo, xiánzhì biānjiǎodì huò lǎojiù xiǎoqū páng de xiǎo kuài kòngdì, jīngguò jīngxìhuà shèjì gǎizào ér chéng de mínǐ lǜdì. Jǐnguǎn miànjī tōngcháng zhǐyǒu jǐbǎi dào jǐqiān píngfāngmǐ, què 'máquè suī xiǎo, wǔzàng jùquán', bùjǐn zhòngzhí le sìjì chángqīng de qiáomù huāhuì, hái pèibèi le jiànshēn bùdào, wúzhàng'ài zuòyǐ hé értóng yóulè shèshī. Duì mánglù de shàngbānzú hé zhōubiān lǎorén éryán, xiàlóu bùxíng wǔ fēnzhōng jiù néng zài lǜyīn xià xiējiǎo liáotiān, dàdà tíshēng le chéngshì de yíjū wēndù.",
    contentVi:
      "Ở những đại đô thị hiện đại tấc đất tấc vàng, việc xây mới các công viên tổng hợp quy mô lớn thường bị hạn chế nghiêm ngặt bởi quỹ đất. Để dung hòa mâu thuẫn giữa nhu cầu gần gũi thiên nhiên của cư dân và sự chật hẹp của không gian đô thị, những năm gần đây nhiều địa phương Trung Quốc đẩy mạnh xây dựng 'công viên bỏ túi'. Công viên bỏ túi là những mảng xanh mini được thiết kế cải tạo tinh tế từ các góc phố, mảnh đất xen kẹt bỏ trống hoặc bãi đất nhỏ cạnh khu dân cư cũ. Dù diện tích thường chỉ từ vài trăm đến vài nghìn mét vuông nhưng 'chim sẻ tuy nhỏ mà đủ ngũ tạng', không chỉ trồng cây xanh hoa lá bốn mùa mà còn trang bị đường chạy bộ, ghế ngồi không rào cản và khu vui chơi trẻ em. Với nhân viên văn phòng bận rộn và người già xung quanh, chỉ cần xuống lầu đi bộ 5 phút là có thể nghỉ chân trò chuyện dưới bóng cây, nâng cao rõ rệt sự ấm áp và đáng sống của đô thị.",
    questions: [
      {
        id: "rp-ex-hsk5-4-q1",
        questionVi: "Vì sao các đô thị lớn khó xây dựng thêm nhiều công viên tổng hợp cỡ lớn?",
        options: [
          "Vì người dân không còn thích đi công viên",
          "Vì quỹ đất bị hạn chế nghiêm ngặt",
          "Vì thiếu cây xanh phù hợp khí hậu",
          "Vì chi phí bảo trì ghế ngồi quá cao",
        ],
        correctAnswer: "Vì quỹ đất bị hạn chế nghiêm ngặt",
        explanationVi: "Câu đầu viết: '新建大型综合公园往往受到土地资源的严格限制'.",
      },
      {
        id: "rp-ex-hsk5-4-q2",
        questionVi: "'Công viên bỏ túi' thường được cải tạo từ những khu vực nào?",
        options: [
          "Đất nông nghiệp ở vùng ngoại ô xa",
          "Góc phố, đất xen kẹt bỏ trống hoặc khoảng đất nhỏ cạnh khu dân cư cũ",
          "Tầng hầm của các tòa nhà thương mại",
          "Bãi đỗ xe của các nhà ga tàu hỏa",
        ],
        correctAnswer: "Góc phố, đất xen kẹt bỏ trống hoặc khoảng đất nhỏ cạnh khu dân cư cũ",
        explanationVi: "Đoạn văn định nghĩa: '利用街头转角、闲置边角地或老旧小区旁的小块空地，经过精细化设计改造而成的迷你绿地'.",
      },
      {
        id: "rp-ex-hsk5-4-q3",
        questionVi: "Cụm thành ngữ '麻雀虽小，五脏俱全' trong bài nhằm nhấn mạnh điều gì?",
        options: [
          "Trong công viên có rất nhiều chim sẻ sinh sống",
          "Công viên tuy diện tích nhỏ nhưng tiện ích đầy đủ",
          "Thiết kế công viên rất đơn sơ và tiết kiệm",
          "Công viên chỉ dành cho trẻ nhỏ vui chơi",
        ],
        correctAnswer: "Công viên tuy diện tích nhỏ nhưng tiện ích đầy đủ",
        explanationVi: "Bài nối tiếp ngay sau thành ngữ bằng loạt tiện ích: '不仅种植了四季常青的乔木花卉，还配备了健身步道、无障碍座椅和儿童游乐设施'.",
      },
      {
        id: "rp-ex-hsk5-4-q4",
        questionVi: "Diện tích thông thường của một công viên bỏ túi khoảng bao nhiêu?",
        options: [
          "Dưới 50 mét vuông",
          "Từ vài trăm đến vài nghìn mét vuông",
          "Trên 10 hecta",
          "Khoảng 50 nghìn mét vuông",
        ],
        correctAnswer: "Từ vài trăm đến vài nghìn mét vuông",
        explanationVi: "Trong bài ghi rõ: '尽管面积通常只有几百到几千平方米'.",
      },
      {
        id: "rp-ex-hsk5-4-q5",
        questionVi: "Lợi ích thiết thực nhất mà công viên bỏ túi mang lại cho cư dân xung quanh là gì?",
        options: [
          "Làm tăng gấp đôi giá trị bất động sản",
          "Chỉ cần đi bộ khoảng 5 phút là có chỗ nghỉ ngơi dưới bóng xanh, tăng độ đáng sống của thành phố",
          "Cung cấp thêm nơi đỗ xe miễn phí",
          "Thay thế hoàn toàn các phòng tập gym trả phí",
        ],
        correctAnswer: "Chỉ cần đi bộ khoảng 5 phút là có chỗ nghỉ ngơi dưới bóng xanh, tăng độ đáng sống của thành phố",
        explanationVi: "Câu cuối nêu: '下楼步行五分钟就能在绿荫下歇脚聊天，大大提升了城市的宜居温度'.",
      },
    ],
  },
];
