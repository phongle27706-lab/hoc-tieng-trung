import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK6: ReadingPassage[] = [
  {
    id: "rp-ex-hsk6-1",
    level: "HSK6",
    subDifficulty: "basic",
    genre: "Hợp đồng ngoại thương",
    title: "国际信用证结算中的“软条款”风险防范",
    titlePinyin: "Guójì xìnyòngzhèng jiésuàn zhōng de 'ruǎntiáokuǎn' fēngxiǎn fángfàn",
    titleVi: "Phòng ngừa rủi ro 'điều khoản mềm' trong thanh toán L/C quốc tế",
    contentZh:
      "在大宗跨境贸易中，不可撤销跟单信用证（L/C）因其以银行信用作担保，向来被出口商视为较为稳妥的结算方式。然而，实务中部分买方会在信用证中隐蔽地加入所谓“软条款”，使出口商即便按期保质发货，仍可能丧失主动收款权。常见的软条款包括：要求提交由买方指定人员签署的检验证书、规定船名与装运日期须待买方另行书面通知，或将付款条件与货物到达目的港后的清关结果挂钩。一旦市场行情下跌或买方资金吃紧，对方只需拒绝签发相关证明，银行便会以“单证不符”为由拒付。因此，外贸企业在审证环节必须逐字逐句核对条款，凡涉及由买方单方面控制的生效条件，均应果断要求开证行修改删除，切勿心存侥幸。",
    contentPinyin:
      "Zài dàzōng kuàjìng màoyì zhōng, bùkě chèxiāo gēndān xìnyòngzhèng (L/C) yīn qí yǐ yínháng xìnyòng zuò dānbǎo, xiànglái bèi chūkǒushāng shìwéi jiàowéi wěntuǒ de jiésuàn fāngshì. Rán'ér, shíwù zhōng bùfen mǎifāng huì zài xìnyòngzhèng zhōng yǐnbì de jiārù suǒwèi 'ruǎntiáokuǎn', shǐ chūkǒushāng jíbiàn ànqī bǎozhì fāhuò, réng kěnéng sàngshī zhǔdòng shōukuǎnquán. Chángjiàn de ruǎntiáokuǎn bāokuò: yāoqiú tíjiāo yóu mǎifāng zhǐdìng rényuán qiānshǔ de jiǎnyàn zhèngshū, guīdìng chuánmíng yǔ zhuāngyùn rìqī xū dài mǎifāng lìngxíng shūmiàn tōngzhī, huò jiāng fùkuǎn tiáojiàn yǔ huòwù dàodá mùdìgǎng hòu de qīngguān jiéguǒ guàgōu. Yídàn shìchǎng hángqíng xiàdiē huò mǎifāng zījīn chījǐn, duìfāng zhǐxū jùjué qiānfā xiāngguān zhèngmíng, yínháng biàn huì yǐ 'dānzhèng bùfú' wéiyóu jùfù. Yīncǐ, wàimào qǐyè zài shěnzhèng huánjié bìxū zhúzì zhújù héduì tiáokuǎn, fán shèjí yóu mǎifāng dānfāngmiàn kòngzhì de shēngxiào tiáojiàn, jūn yīng guǒduàn yāoqiú kāizhèngháng xiūgǎi shānchú, qièwù xīncún jiǎoxìng.",
    contentVi:
      "Trong thương mại xuyên biên giới quy mô lớn, thư tín dụng chứng từ không hủy ngang (L/C) nhờ có uy tín ngân hàng bảo lãnh nên xưa nay vẫn được nhà xuất khẩu xem là phương thức thanh toán khá an toàn. Tuy nhiên, trong thực tiễn một số người mua lồng ghép khéo léo cái gọi là 'điều khoản mềm' vào L/C, khiến nhà xuất khẩu dù giao hàng đúng hạn và đúng chất lượng vẫn có thể mất quyền chủ động thu tiền. Các điều khoản mềm thường gặp gồm: yêu cầu nộp giấy chứng nhận kiểm định do người phía mua chỉ định ký, quy định tên tàu và ngày bốc hàng phải chờ bên mua thông báo bằng văn bản sau, hoặc gắn điều kiện thanh toán với kết quả thông quan tại cảng đích. Một khi thị trường đi xuống hoặc bên mua thiếu hụt dòng tiền, đối phương chỉ cần từ chối ký giấy xác nhận liên quan thì ngân hàng sẽ lấy lý do 'chứng từ bất hợp lệ' để từ chối thanh toán. Vì vậy, doanh nghiệp ngoại thương ở khâu kiểm tra L/C phải rà soát từng câu chữ, hễ có điều kiện hiệu lực do bên mua đơn phương kiểm soát thì phải kiên quyết yêu cầu ngân hàng phát hành sửa đổi xóa bỏ, tuyệt đối không được chủ quan cầu may.",
    questions: [
      {
        id: "rp-ex-hsk6-1-q1",
        questionVi: "Vì sao thư tín dụng (L/C) truyền thống thường được nhà xuất khẩu coi là phương thức thanh toán tương đối an toàn?",
        options: [
          "Vì không cần nộp bất kỳ chứng từ nào",
          "Vì được bảo lãnh bằng uy tín của ngân hàng",
          "Vì bên mua phải trả trước 100% tiền mặt",
          "Vì được miễn hoàn toàn phí giao dịch quốc tế",
        ],
        correctAnswer: "Vì được bảo lãnh bằng uy tín của ngân hàng",
        explanationVi: "Câu đầu nêu: '因其以银行信用作担保，向来被出口商视为较为稳妥的结算方式'.",
      },
      {
        id: "rp-ex-hsk6-1-q2",
        questionVi: "Tác hại lớn nhất của 'điều khoản mềm' trong L/C đối với nhà xuất khẩu là gì?",
        options: [
          "Làm tăng thuế xuất khẩu tại cảng đi",
          "Dù giao hàng đúng hạn và đúng chất lượng vẫn có thể mất quyền chủ động thu tiền",
          "Bắt buộc phải sử dụng tàu vận tải của bên mua",
          "Kéo dài thời hạn bảo hành sản phẩm lên 5 năm",
        ],
        correctAnswer: "Dù giao hàng đúng hạn và đúng chất lượng vẫn có thể mất quyền chủ động thu tiền",
        explanationVi: "Bài viết chỉ rõ: '使出口商即便按期保质发货，仍可能丧失主动收款权'.",
      },
      {
        id: "rp-ex-hsk6-1-q3",
        questionVi: "Ví dụ nào sau đây KHÔNG được nêu là một 'điều khoản mềm' thường gặp?",
        options: [
          "Yêu cầu giấy kiểm định do người của bên mua chỉ định ký",
          "Tên tàu và ngày bốc hàng chờ bên mua thông báo bằng văn bản sau",
          "Gắn điều kiện thanh toán với kết quả thông quan ở cảng đích",
          "Yêu cầu giao hàng theo điều kiện FOB tại cảng xuất khẩu",
        ],
        correctAnswer: "Yêu cầu giao hàng theo điều kiện FOB tại cảng xuất khẩu",
        explanationVi: "Bài liệt kê 3 ví dụ: '买方指定人员签署的检验证书', '船名与装运日期须待买方另行书面通知', và '与...清关结果挂钩', không nhắc đến điều kiện FOB.",
      },
      {
        id: "rp-ex-hsk6-1-q4",
        questionVi: "Khi bên mua từ chối ký giấy xác nhận liên quan, ngân hàng sẽ từ chối thanh toán với lý do gì?",
        options: [
          "Chứng từ bất hợp lệ (单证不符)",
          "Tỷ giá hối đoái biến động quá mạnh",
          "Cảng đích đang bị phong tỏa",
          "Hết hạn mức tín dụng quốc gia",
        ],
        correctAnswer: "Chứng từ bất hợp lệ (单证不符)",
        explanationVi: "Trong đoạn có câu '银行便会以“单证不符”为由拒付'.",
      },
      {
        id: "rp-ex-hsk6-1-q5",
        questionVi: "Bài viết khuyên doanh nghiệp xuất khẩu nên xử lý thế nào khi phát hiện điều khoản do bên mua đơn phương kiểm soát?",
        options: [
          "Ký tạm trước rồi thương lượng lại sau khi giao hàng",
          "Kiên quyết yêu cầu ngân hàng phát hành sửa đổi xóa bỏ ngay ở khâu kiểm tra L/C",
          "Tăng giá bán thêm 5% để bù rủi ro",
          "Chuyển sang giao hàng từng phần nhỏ",
        ],
        correctAnswer: "Kiên quyết yêu cầu ngân hàng phát hành sửa đổi xóa bỏ ngay ở khâu kiểm tra L/C",
        explanationVi: "Câu cuối khuyến nghị: '凡涉及由买方单方面控制的生效条件，均应果断要求开证行修改删除，切勿心存侥幸'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk6-2",
    level: "HSK6",
    subDifficulty: "basic",
    genre: "Bài xã luận",
    title: "“银发经济”开启消费市场新蓝海",
    titlePinyin: "'Yínfà jīngjì' kāiqǐ xiāofèi shìchǎng xīn lánhǎi",
    titleVi: "'Kinh tế tóc bạc' mở ra đại dương xanh mới cho thị trường tiêu dùng",
    contentZh:
      "随着人口老龄化进程加快，中国60岁及以上人口规模已突破三亿，一个结构多元化、需求精细化的“银发经济”时代正在到来。与人们刻板印象中节俭保守的老年群体不同，新一代“活力老人”普遍受教育程度较高，具备稳定的退休金和较强的消费意愿。他们的支出早已不再局限于基础医疗和日常买菜，而是广泛延伸至旅居康养、适老化智能家居、老年大学以及定制化营养保健等领域。敏锐的企业已经意识到，做好银发产品绝不能只是把字号放大、把颜色变灰，而必须从老年人的生理特点和尊严需求出发，提供真正好用、体面且富有科技温度的解决方案。",
    contentPinyin:
      "Suízhe rénkǒu lǎolínghuà jìnchéng jiākuài, Zhōngguó liùshí suì jí yǐshàng rénkǒu guīmó yǐ tūpò sān yì, yí gè jiégòu duōyuánhuà, xūqiú jīngxìhuà de 'yínfà jīngjì' shídài zhèngzài dàolái. Yǔ rénmen kèbǎn yìnxiàng zhōng jiéjiǎn bǎoshǒu de lǎonián qúntǐ bùtóng, xīn yídài 'huólì lǎorén' pǔbiàn shòu jiàoyù chéngdù jiào gāo, jùbèi wěndìng de tuìxiūjīn hé jiào qiáng de xiāofèi yìyuàn. Tāmen de zhīchū zǎoyǐ búzài júxiàn yú jīchǔ yīliáo hé rìcháng mǎicài, érshì guǎngfàn yánshēn zhì lǚjū kāngyǎng, shìlǎohuà zhìnéng jiājū, lǎonián dàxué yǐjí dìngzhìhuà yíngyǎng bǎojiàn děng lǐngyù. Mǐnruì de qǐyè yǐjīng yìshí dào, zuòhǎo yínfà chǎnpǐn jué bùnéng zhǐshì bǎ zìhào fàngdà, bǎ yánsè biànhuī, ér bìxū cóng lǎoniánrén de shēnglǐ tèdiǎn hé zūnyán xūqiú chūfā, tígōng zhēnzhèng hǎoyòng, tǐmiàn qiě fùyǒu kējì wēndù de jiějué fāng'àn.",
    contentVi:
      "Cùng với tiến trình già hóa dân số tăng nhanh, quy mô dân số từ 60 tuổi trở lên tại Trung Quốc đã vượt mốc 300 triệu người, mở ra kỷ nguyên 'kinh tế tóc bạc' có cơ cấu đa dạng và nhu cầu tinh tế hơn. Khác với khuôn mẫu lâu nay về nhóm người cao tuổi tằn tiện, bảo thủ, thế hệ 'người cao tuổi năng động' mới nhìn chung có trình độ học vấn cao hơn, lương hưu ổn định và sẵn sàng chi tiêu mạnh hơn. Chi tiêu của họ từ lâu không còn gói gọn trong y tế cơ bản và đi chợ hằng ngày, mà mở rộng sang du lịch nghỉ dưỡng kết hợp chăm sóc sức khỏe, nhà thông minh thân thiện với người già, đại học cho người cao tuổi và dinh dưỡng chăm sóc sức khỏe cá nhân hóa. Những doanh nghiệp nhạy bén đã nhận ra rằng làm tốt sản phẩm cho người cao tuổi tuyệt đối không thể chỉ phóng to cỡ chữ hay đổi sang màu xám, mà phải xuất phát từ đặc điểm sinh lý và nhu cầu tôn trọng phẩm giá của họ để cung cấp giải pháp thực sự dễ dùng, trang nhã và ấm áp công nghệ.",
    questions: [
      {
        id: "rp-ex-hsk6-2-q1",
        questionVi: "Quy mô dân số từ 60 tuổi trở lên tại Trung Quốc được nêu trong bài đã vượt mức nào?",
        options: ["100 triệu người", "200 triệu người", "300 triệu người", "500 triệu người"],
        correctAnswer: "300 triệu người",
        explanationVi: "Bài nêu: '中国60岁及以上人口规模已突破三亿' (vượt mốc 300 triệu người).",
      },
      {
        id: "rp-ex-hsk6-2-q2",
        questionVi: "Thế hệ 'người cao tuổi năng động' (活力老人) mới có đặc điểm nổi bật nào?",
        options: [
          "Hoàn toàn không sử dụng thiết bị thông minh",
          "Học vấn cao hơn, có lương hưu ổn định và sẵn sàng chi tiêu",
          "Chỉ tiêu tiền cho thực phẩm hằng ngày",
          "Thích sống tách biệt ở vùng nông thôn",
        ],
        correctAnswer: "Học vấn cao hơn, có lương hưu ổn định và sẵn sàng chi tiêu",
        explanationVi: "Đoạn văn miêu tả: '普遍受教育程度较高，具备稳定的退休金和较强的消费意愿'.",
      },
      {
        id: "rp-ex-hsk6-2-q3",
        questionVi: "Lĩnh vực nào sau đây nằm trong nhóm chi tiêu mở rộng của người cao tuổi hiện đại?",
        options: [
          "Du lịch nghỉ dưỡng kết hợp chăm sóc sức khỏe và nhà thông minh thân thiện người già",
          "Đầu tư tiền mã hóa rủi ro cao",
          "Mua sắm trò chơi điện tử đối kháng",
          "Thuê văn phòng khởi nghiệp công nghệ",
        ],
        correctAnswer: "Du lịch nghỉ dưỡng kết hợp chăm sóc sức khỏe và nhà thông minh thân thiện người già",
        explanationVi: "Bài viết liệt kê: '旅居康养、适老化智能家居、老年大学以及定制化营养保健等领域'.",
      },
      {
        id: "rp-ex-hsk6-2-q4",
        questionVi: "Tác giả phê phán cách làm sản phẩm cho người già nào là quá hời hợt?",
        options: [
          "Chỉ phóng to cỡ chữ và đổi sang tông màu xám",
          "Tích hợp quá nhiều tính năng chăm sóc sức khỏe",
          "Bán sản phẩm qua kênh trực tuyến",
          "Mời bác sĩ tham gia tư vấn thiết kế",
        ],
        correctAnswer: "Chỉ phóng to cỡ chữ và đổi sang tông màu xám",
        explanationVi: "Trong bài viết: '做好银发产品绝不能只是把字号放大、把颜色变灰'.",
      },
      {
        id: "rp-ex-hsk6-2-q5",
        questionVi: "Theo bài viết, sản phẩm tốt cho người cao tuổi cần xuất phát từ hai yếu tố cốt lõi nào?",
        options: [
          "Giá thành cực rẻ và bao bì bắt mắt",
          "Đặc điểm sinh lý và nhu cầu được tôn trọng phẩm giá",
          "Thị hiếu của con cháu và xu hướng mạng xã hội",
          "Tốc độ sản xuất nhanh và dễ vận chuyển",
        ],
        correctAnswer: "Đặc điểm sinh lý và nhu cầu được tôn trọng phẩm giá",
        explanationVi: "Câu cuối nhấn mạnh: '必须从老年人的生理特点和尊严需求出发，提供真正好用、体面且富有科技温度的解决方案'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk6-3",
    level: "HSK6",
    subDifficulty: "advanced",
    genre: "Công nghệ & Công nghiệp",
    title: "工业机器人赋能“黑灯工厂”转型",
    titlePinyin: "Gōngyè jīqìrén fùnéng 'hēidēng gōngchǎng' zhuǎnxíng",
    titleVi: "Robot công nghiệp tiếp sức cho quá trình chuyển đổi sang 'nhà máy tắt đèn'",
    contentZh:
      "在长三角的一座新能源汽车零部件制造基地内，宽敞的车间几乎看不到工人的身影，甚至连照明灯都无需常开，只有数百台机械臂和无人搬运车在昏暗中有条不紊地完成焊接、涂装与精密检测，这便是业内常说的“黑灯工厂”。借助工业物联网、机器视觉和人工智能排产系统，生产线能够实现二十四小时不间断运转，不仅将产品不良率控制在万分之三以内，还大幅降低了照明与空调能耗。不过，高度自动化并不意味着制造企业不再需要人。相反，企业对能够维护智能装备、分析设备运行数据以及优化生产算法的复合型技术人才需求激增，一线操作工正加速向“设备管家”和“数据工程师”转型。",
    contentPinyin:
      "Zài Chángsānjiǎo de yí zuò xīn néngyuán qìchē língbùjiàn zhìzào jīdì nèi, kuānchǎng de chējiān jīhū kànbudào gōngrén de shēnyǐng, shènzhì lián zhàomíngdēng dōu wúxū cháng kāi, zhǐyǒu shùbǎi tái jīxièbì hé wúrén bānyùnchē zài hūn'àn zhōng yǒutiáobùwěn de wánchéng hànjiē, túzhuāng yǔ jīngmì jiǎncè, zhè biàn shì yènèi cháng shuō de 'hēidēng gōngchǎng'. Jièzhù gōngyè wùliánwǎng, jīqì shìjué hé réngōng zhìnéng páichǎn xìtǒng, shēngchǎnxiàn nénggòu shíxiàn èrshísì xiǎoshí bú jiànduàn yùnzhuǎn, bùjǐn jiāng chǎnpǐn bùliánglǜ kòngzhì zài wànfēnzhīsān yǐnèi, hái dàfú jiàngdī le zhàomíng yǔ kōngtiáo nénghào. Búguò, gāodù zìdònghuà bìng bù yìwèizhe zhìzào qǐyè búzài xūyào rén. Xiāngfǎn, qǐyè duì nénggòu wéihù zhìnéng zhuāngbèi, fēnxī shèbèi yùnxíng shùjù yǐjí yōuhuà shēngchǎn suànfǎ de fùhéxíng jìshù réncái xūqiú jīzēng, yīxiàn cāozuògōng zhèng jiāsù xiàng 'shèbèi guǎnjiā' hé 'shùjù gōngchéngshī' zhuǎnxíng.",
    contentVi:
      "Bên trong một cơ sở sản xuất linh kiện ô tô năng lượng mới ở vùng đồng bằng Trường Giang, phân xưởng rộng lớn hầu như không thấy bóng dáng công nhân, thậm chí đèn chiếu sáng cũng không cần bật liên tục, chỉ có hàng trăm cánh tay robot và xe vận chuyển tự hành nhịp nhàng thực hiện hàn, sơn và kiểm tra chính xác trong bóng tối — đó chính là 'nhà máy tắt đèn' mà giới chuyên môn thường nhắc tới. Nhờ Internet vạn vật công nghiệp, thị giác máy tính và hệ thống lập lịch sản xuất bằng AI, dây chuyền có thể vận hành liên tục 24 giờ, không chỉ kiểm soát tỷ lệ lỗi sản phẩm dưới mức 3 phần vạn mà còn giảm đáng kể điện năng chiếu sáng và điều hòa. Tuy nhiên, tự động hóa mức độ cao không có nghĩa doanh nghiệp sản xuất không còn cần con người. Trái lại, nhu cầu đối với nhân tài kỹ thuật đa năng có thể bảo trì thiết bị thông minh, phân tích dữ liệu vận hành và tối ưu thuật toán sản xuất tăng vọt, công nhân trực tiếp đang tăng tốc chuyển đổi thành 'quản gia thiết bị' và 'kỹ sư dữ liệu'.",
    questions: [
      {
        id: "rp-ex-hsk6-3-q1",
        questionVi: "Vì sao cơ sở sản xuất trong bài được gọi là 'nhà máy tắt đèn' (黑灯工厂)?",
        options: [
          "Vì nhà máy thường xuyên bị cắt điện luân phiên",
          "Vì hầu như không cần công nhân trong xưởng và không cần bật đèn liên tục khi robot vận hành",
          "Vì sản phẩm bên trong rất nhạy cảm với ánh sáng mặt trời",
          "Vì nhà máy chỉ hoạt động vào ban đêm",
        ],
        correctAnswer: "Vì hầu như không cần công nhân trong xưởng và không cần bật đèn liên tục khi robot vận hành",
        explanationVi: "Bài miêu tả: '几乎看不到工人的身影，甚至连照明灯都无需常开，只有数百台机械臂和无人搬运车...完成焊接、涂装与精密检测'.",
      },
      {
        id: "rp-ex-hsk6-3-q2",
        questionVi: "Tỷ lệ sản phẩm lỗi tại dây chuyền này được kiểm soát ở mức nào?",
        options: [
          "Dưới 3%",
          "Dưới 3 phần nghìn",
          "Dưới 3 phần vạn (0,03%)",
          "Bằng 0 tuyệt đối",
        ],
        correctAnswer: "Dưới 3 phần vạn (0,03%)",
        explanationVi: "Đoạn văn nêu: '将产品不良率控制在万分之三以内' (khống chế tỷ lệ lỗi dưới 3/10.000).",
      },
      {
        id: "rp-ex-hsk6-3-q3",
        questionVi: "Ngoài việc giảm tỷ lệ lỗi và chạy 24 giờ, nhà máy tắt đèn còn đem lại lợi ích gì về năng lượng?",
        options: [
          "Tự sản xuất được 100% điện mặt trời",
          "Giảm đáng kể điện năng tiêu thụ cho chiếu sáng và điều hòa",
          "Không cần sử dụng nước làm mát máy",
          "Loại bỏ hoàn toàn khí thải công nghiệp",
        ],
        correctAnswer: "Giảm đáng kể điện năng tiêu thụ cho chiếu sáng và điều hòa",
        explanationVi: "Bài viết ghi: '还大幅降低了照明与空调能耗'.",
      },
      {
        id: "rp-ex-hsk6-3-q4",
        questionVi: "Tự động hóa mức độ cao tác động thế nào đến nhu cầu nhân lực của doanh nghiệp?",
        options: [
          "Doanh nghiệp không cần tuyển thêm bất kỳ nhân sự nào",
          "Nhu cầu nhân tài kỹ thuật đa năng bảo trì thiết bị, phân tích dữ liệu và tối ưu thuật toán tăng vọt",
          "Chỉ cần tuyển thêm nhân viên vệ sinh xưởng",
          "Lương của kỹ sư phần mềm giảm mạnh",
        ],
        correctAnswer: "Nhu cầu nhân tài kỹ thuật đa năng bảo trì thiết bị, phân tích dữ liệu và tối ưu thuật toán tăng vọt",
        explanationVi: "Bài nêu: '对能够维护智能装备、分析设备运行数据以及优化生产算法的复合型技术人才需求激增'.",
      },
      {
        id: "rp-ex-hsk6-3-q5",
        questionVi: "Công nhân vận hành trực tiếp đang chuyển dịch sang vai trò mới nào?",
        options: [
          "Nhân viên bán hàng và tiếp thị",
          "'Quản gia thiết bị' và 'kỹ sư dữ liệu'",
          "Tài xế xe tải đường dài",
          "Chuyên viên kiểm tra bằng mắt thường",
        ],
        correctAnswer: "'Quản gia thiết bị' và 'kỹ sư dữ liệu'",
        explanationVi: "Câu cuối viết: '一线操作工正加速向“设备管家”和“数据工程师”转型'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk6-4",
    level: "HSK6",
    subDifficulty: "advanced",
    genre: "Văn hóa & Đời sống",
    title: "非遗手作在当代年轻人中的“破圈”之路",
    titlePinyin: "Fēiyí shǒuzuò zài dāngdài niánqīngrén zhōng de 'pòquān' zhī lù",
    titleVi: "Hành trình 'phá vỡ rào cản' của nghề thủ công di sản phi vật thể trong giới trẻ đương đại",
    contentZh:
      "曾几何时，苏绣、漆器、景德镇青花瓷和竹编等传统非物质文化遗产，在不少年轻人眼中显得遥远而陈旧，甚至面临后继乏人的困境。但近年来，一股“新中式”美学风潮席卷社交媒体，让这些古老技艺重新焕发生机。许多年轻传承人不再固守博物馆式的静态展示，而是大胆将传统纹样与现代日常用品结合：例如把非遗大漆工艺融入耳机保护壳和咖啡杯，或用短视频完整记录一件手工器物从选材到成型的匠心过程。这种既保留文化底蕴又契合现代审美的创新表达，不仅让非遗产品从展柜走进了年轻人的日常生活，也探索出了一条文化保护与商业变现良性循环的可持续路径。",
    contentPinyin:
      "Céngjǐhéshí, Sūxiù, qīqì, Jǐngdézhèn qīnghuācí hé zhúbiān děng chuántǒng fēiwùzhì wénhuà yíchǎn, zài bùshǎo niánqīngrén yǎnzhōng xiǎnde yáoyuǎn ér chénjiù, shènzhì miànlín hòujìfárén de kùnjìng. Dàn jìnniánlái, yì gǔ 'xīn Zhōngshì' měixué fēngcháo xíjuǎn shèjiāo méitǐ, ràng zhèxiē gǔlǎo jìyì chóngxīn huànfā shēngjī. Xǔduō niánqīng chuánchéngrén búzài gùshǒu bówùguǎnshì de jìngtài zhǎnshì, érshì dàdǎn jiāng chuántǒng wényàng yǔ xiàndài rìcháng yòngpǐn jiéhé: lìrú bǎ fēiyí dàqī gōngyì róngrù ěrjī bǎohùké hé kāfēibēi, huò yòng duǎnshìpín wánzhěng jìlù yí jiàn shǒugōng qìwù cóng xuǎncái dào chéngxíng de jiàngxīn guòchéng. Zhè zhǒng jì bǎoliú wénhuà dǐyùn yòu qìhé xiàndài shěnměi de chuàngxīn biǎodá, bùjǐn ràng fēiyí chǎnpǐn cóng zhǎnguì zǒujìn le niánqīngrén de rìcháng shēnghuó, yě tànsuǒ chū le yì tiáo wénhuà bǎohù yǔ shāngyè biànxiàn liángxìng xúnhuán de kěchíxù lùjìng.",
    contentVi:
      "Đã từng có thời, các di sản văn hóa phi vật thể truyền thống như thêu Tô Châu, sơn mài, gốm hoa lam Cảnh Đức Trấn hay đan tre trong mắt không ít người trẻ tỏ ra xa vời và cũ kỹ, thậm chí đối mặt cảnh thiếu người kế thừa. Nhưng vài năm gần đây, làn sóng thẩm mỹ 'Tân Trung Hoa' càn quét mạng xã hội đã giúp những kỹ nghệ cổ xưa này hồi sinh mạnh mẽ. Nhiều nghệ nhân trẻ kế thừa không còn bó hẹp trong cách trưng bày tĩnh kiểu bảo tàng mà mạnh dạn kết hợp hoa văn truyền thống với đồ dùng hằng ngày hiện đại: chẳng hạn đưa kỹ thuật sơn mài di sản vào ốp tai nghe và cốc cà phê, hoặc dùng video ngắn ghi lại trọn vẹn quá trình chế tác đầy tâm huyết từ chọn nguyên liệu đến thành phẩm. Cách thể hiện sáng tạo vừa giữ trọn chiều sâu văn hóa vừa hợp gu thẩm mỹ đương đại này không chỉ đưa sản phẩm di sản bước ra khỏi tủ kính vào đời sống giới trẻ, mà còn mở ra con đường phát triển bền vững với vòng tuần hoàn tích cực giữa bảo tồn văn hóa và thương mại hóa.",
    questions: [
      {
        id: "rp-ex-hsk6-4-q1",
        questionVi: "Trước đây, các nghề thủ công di sản phi vật thể từng phải đối mặt với khó khăn nào?",
        options: [
          "Thiếu nguyên liệu tre và đất sét",
          "Bị giới trẻ xem là xa vời, cũ kỹ và thiếu người kế thừa",
          "Bị cấm quảng bá trên mạng xã hội",
          "Giá bán quá rẻ không đủ chi phí sản xuất",
        ],
        correctAnswer: "Bị giới trẻ xem là xa vời, cũ kỹ và thiếu người kế thừa",
        explanationVi: "Câu đầu viết: '在不少年轻人眼中显得遥远而陈旧，甚至面临后继乏人的困境'.",
      },
      {
        id: "rp-ex-hsk6-4-q2",
        questionVi: "Xu hướng thẩm mỹ nào trên mạng xã hội đã góp phần hồi sinh các kỹ nghệ truyền thống này?",
        options: [
          "Phong cách tối giản Bắc Âu",
          "Làn sóng thẩm mỹ 'Tân Trung Hoa' (新中式)",
          "Trào lưu phục cổ phương Tây",
          "Nghệ thuật trừu tượng kỹ thuật số",
        ],
        correctAnswer: "Làn sóng thẩm mỹ 'Tân Trung Hoa' (新中式)",
        explanationVi: "Bài nêu: '一股“新中式”美学风潮席卷社交媒体，让这些古老技艺重新焕发生机'.",
      },
      {
        id: "rp-ex-hsk6-4-q3",
        questionVi: "Các nghệ nhân trẻ đã ứng dụng kỹ thuật sơn mài di sản vào sản phẩm hiện đại nào?",
        options: [
          "Bàn phím máy tính và chuột không dây",
          "Ốp bảo vệ tai nghe và cốc cà phê",
          "Vali du lịch và giày thể thao",
          "Đèn trần và thảm trải sàn",
        ],
        correctAnswer: "Ốp bảo vệ tai nghe và cốc cà phê",
        explanationVi: "Đoạn văn lấy ví dụ: '把非遗大漆工艺融入耳机保护壳和咖啡杯'.",
      },
      {
        id: "rp-ex-hsk6-4-q4",
        questionVi: "Ngoài việc sáng tạo sản phẩm mới, nghệ nhân trẻ còn dùng phương thức nào để lan tỏa giá trị nghề thủ công?",
        options: [
          "In sách giáo khoa phát miễn phí",
          "Dùng video ngắn ghi lại trọn vẹn quá trình chế tác công phu",
          "Chỉ bán đấu giá trong các bảo tàng quốc tế",
          "Chuyển toàn bộ quy trình sang sản xuất hàng loạt bằng máy",
        ],
        correctAnswer: "Dùng video ngắn ghi lại trọn vẹn quá trình chế tác công phu",
        explanationVi: "Bài viết ghi: '用短视频完整记录一件手工器物从选材到成型的匠心过程'.",
      },
      {
        id: "rp-ex-hsk6-4-q5",
        questionVi: "Ý nghĩa lớn nhất của cách tiếp cận mới này theo câu kết là gì?",
        options: [
          "Thay thế hoàn toàn các bảo tàng truyền thống",
          "Tạo ra con đường bền vững kết hợp vòng tuần hoàn tích cực giữa bảo tồn văn hóa và thương mại hóa",
          "Giúp mọi sản phẩm thủ công có giá rẻ ngang hàng công nghiệp",
          "Thu hút toàn bộ du khách nước ngoài đến Cảnh Đức Trấn",
        ],
        correctAnswer: "Tạo ra con đường bền vững kết hợp vòng tuần hoàn tích cực giữa bảo tồn văn hóa và thương mại hóa",
        explanationVi: "Câu cuối khẳng định: '探索出了一条文化保护与商业变现良性循环的可持续路径'.",
      },
    ],
  },
];
