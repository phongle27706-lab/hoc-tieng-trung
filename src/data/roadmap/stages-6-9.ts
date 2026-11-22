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

export const STAGES_6_TO_9_SESSIONS: StudySession[] = [
  // ==========================================
  // STAGE 6 — CHẶNG 6 (HSK6: Kinh tế vĩ mô, Pháp lý hợp đồng, Thuế quan ASEAN, M&A)
  // ==========================================
  {
    id: "hsk6-s1-listening-macro-supplychain",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    title: "Nghe phân tích Chuỗi cung ứng toàn cầu, Thuế quan FORM E & Pháp lý hợp đồng",
    titleZh: "全球供应链转移、东盟零关税与法务条款听力",
    titlePinyin: "Quánqiú gōngyìngliàn zhuǎnyí, Dōngméng líng guānshuì yǔ fǎwù tiáokuǎn tīnglì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "listening-wenjing-zhiyuan",
    recommendedChannelName: "Wenjing-Zhiyuan",
    youtubeUrl: "https://www.youtube.com/watch?v=tBqHmOH2ycs",
    defaultSearchQuery: "Wenjing-Zhiyuan HSK 5 HSK 6 Standard Course",
    grammarNotesVi: [
      "Thuật ngữ HSK6 thương mại vĩ mô: 原产地证书 (Giấy chứng nhận xuất xứ C/O), 关税 (Thuế quan), 违约责任 (Trách nhiệm vi phạm hợp đồng), 知识产权 (Quyền sở hữu trí tuệ).",
      "Cấu trúc 凭 (píng - dựa vào / nhờ có) + Danh từ/Chứng từ + 可以享受... (có thể hưởng...).",
    ],
    exercises: [
      listeningDialogue(
        "hsk6-s1-q1",
        "男：林总监，我们出口到越南的这批新能源设备能享受关税优惠吗？女：可以，只要凭中国东盟原产地证书FORM E，就能享受零关税待遇。",
        "Nán: Lín zǒngjiān, wǒmen chūkǒu dào Yuènán de zhè pī xīn néngyuán shèbèi néng xiǎngshòu guānshuì yōuhuì ma? Nǚ: Kěyǐ, zhǐyào píng Zhōngguó-Dōngméng yuánchǎndì zhèngshū FORM E, jiù néng xiǎngshòu líng guānshuì dàiyù.",
        "Nhờ chứng từ nào mà lô thiết bị năng lượng mới xuất khẩu sang Việt Nam được hưởng ưu đãi thuế quan 0%?",
        [
          "Giấy chứng nhận xuất xứ Trung Quốc - ASEAN (FORM E)",
          "Hóa đơn bán lẻ thông thường",
          "Thẻ tín dụng doanh nghiệp",
          "Hợp đồng thuê kho bãi",
        ],
        "Giấy chứng nhận xuất xứ Trung Quốc - ASEAN (FORM E)",
        "林总监 nói rõ: 只要凭中国东盟原产地证书FORM E，就能享受零关税待遇。"
      ),
      listeningFill(
        "hsk6-s1-q2",
        "请法务部门仔细审核合同中的违约责任条款。",
        "请法务部门仔细审核合同中的违约责任___。",
        "Qǐng fǎwù bùmén zǐxì shěnhé hétóng zhōng de wéiyuē zérèn tiáokuǎn.",
        "Nghe và điền từ 2 chữ Hán ('điều khoản') vào chỗ trống:",
        "条款",
        "违约责任条款 (wéiyuē zérèn tiáokuǎn): điều khoản trách nhiệm vi phạm hợp đồng."
      ),
      listeningMcq(
        "hsk6-s1-q3",
        "多元化布局有助于分散国际供应链风险，降低对单一市场的依赖。",
        "Duōyuánhuà bùjú yǒuzhùyú fēnsàn guójì gōngyìngliàn fēngxiǎn, jiàngdī duì dānyī shìchǎng de yīlài.",
        "Bố cục đa dạng hóa mang lại lợi ích chiến lược gì cho doanh nghiệp?",
        [
          "Phân tán rủi ro chuỗi cung ứng quốc tế và giảm sự phụ thuộc vào một thị trường đơn lẻ",
          "Tăng chi phí vận chuyển lên gấp đôi",
          "Tập trung toàn bộ vốn vào một nhà máy duy nhất",
          "Ngừng xuất khẩu ra nước ngoài",
        ],
        "Phân tán rủi ro chuỗi cung ứng quốc tế và giảm sự phụ thuộc vào một thị trường đơn lẻ",
        "多元化布局有助于分散国际供应链风险，降低对单一市场的依赖。"
      ),
      listeningDialogue(
        "hsk6-s1-q4",
        "女：董事长，这家人工智能初创公司刚刚完成A轮融资。男：很好，投资部要尽快评估并购或者战略合作的可行性。",
        "Nǚ: Dǒngshìzhǎng, zhè jiā réngōng zhìnéng chūchuàng gōngsī gānggāng wánchéng A lún róngzī. Nán: Hěn hǎo, tóuzībù yào jǐnkuài pínggū bìnggòu huòzhě zhànlüè hézuò de kěxíngxìng.",
        "Chủ tịch HĐQT yêu cầu bộ phận đầu tư làm gì với công ty khởi nghiệp AI?",
        [
          "Đánh giá tính khả thi của việc M&A (mua bán sáp nhập) hoặc hợp tác chiến lược",
          "Từ bỏ dự án ngay lập tức",
          "Thuê lại văn phòng của công ty đó",
          "Tuyển dụng toàn bộ sinh viên thực tập",
        ],
        "Đánh giá tính khả thi của việc M&A (mua bán sáp nhập) hoặc hợp tác chiến lược",
        "投资部要尽快评估并购或者战略合作的可行性。"
      ),
      listeningFill(
        "hsk6-s1-q5",
        "自主品牌出海必须重视知识产权保护。",
        "自主品牌出海必须重视知识___保护。",
        "Zìzhǔ pǐnpái chūhǎi bìxū zhòngshì zhīshi chǎnquán bǎohù.",
        "Nghe và điền 2 chữ Hán ('tài sản / quyền sở hữu' trong cụm 'sở hữu trí tuệ'):",
        "产权",
        "知识产权 (zhīshi chǎnquán): quyền sở hữu trí tuệ."
      ),
    ],
  },
  {
    id: "hsk6-s2-speaking-executive-pitch",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "basic",
    title: "Luyện nói thuyết trình Chiến lược bản địa hóa, Kiểm soát chi phí & Phát triển bền vững",
    titleZh: "高管演说：本土化战略、成本控制与可持续发展",
    titlePinyin: "Gāoguǎn yǎnshuō: Běntǔhuà zhànlüè, chéngběn kòngzhì yǔ kě chíxù fāzhǎn",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-khoai-tay",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=tODE90ncH1A",
    defaultSearchQuery: "Khoai Tây yêu tiếng Trung luyện nhớ Hán tự giao tiếp nâng cao",
    grammarNotesVi: [
      "Trong diễn thuyết cấp quản lý (高管演说), sử dụng cụm động từ 4 chữ hoặc từ song âm tiết trang trọng: 严格履行 (thực hiện nghiêm ngặt), 全面评估 (đánh giá toàn diện), 核心竞争力 (năng lực cạnh tranh cốt lõi).",
    ],
    exercises: [
      speakingShadowing(
        "hsk6-s2-q1",
        "本土化运营是我们开拓海外市场的核心战略。",
        "Běntǔhuà yùnyíng shì wǒmen kāituò hǎiwài shìchǎng de héxīn zhànlüè.",
        "Thu âm câu tuyên bố chiến lược cốt lõi khi mở rộng thị trường quốc tế:",
        ["Biến điệu 本土 (Běntǔ → Béntǔ)", "Vận mẫu üe trong 战略 (zhànlüè)"],
        "Phát âm rõ âm tròn môi lüè trong 战略 (chiến lược)."
      ),
      speakingShadowing(
        "hsk6-s2-q2",
        "签约双方均应严格履行合同规定的各项义务。",
        "Qiānyuē shuāngfāng jūn yīng yángé lǚxíng hétóng guīdìng de gè xiàng yìwù.",
        "Thu âm câu điều khoản pháp lý về nghĩa vụ thực hiện hợp đồng:",
        ["Vận mẫu ü trong 均 (jūn), 履 (lǚ)", "Nhịp điệu trang trọng, đĩnh đạc"],
        "Đọc rõ chữ 均 (jūn) và 履行 (lǚxíng)."
      ),
      speakingShadowing(
        "hsk6-s2-q3",
        "优化物流路线能有效降低综合运营成本。",
        "Yōuhuà wùliú lùxiàn néng yǒuxiào jiàngdī zōnghé yùnyíng chéngběn.",
        "Thu âm câu phân tích giải pháp tối ưu chi phí vận hành tổng hợp:",
        ["Âm đầu lưỡi z (zōnghé)", "Âm cuốn lưỡi ch (chéngběn)"],
        "Phân biệt rõ 综合 (zōnghé - không cuốn lưỡi) và 成本 (chéngběn - cuốn lưỡi)."
      ),
      speakingShadowing(
        "hsk6-s2-q4",
        "绿色制造与低碳环保是企业可持续发展的基石。",
        "Lǜsè zhìzào yǔ dītàn huánbǎo shì qǐyè kě chíxù fāzhǎn de jīshí.",
        "Thu âm câu thuyết trình về sản xuất xanh và phát triển bền vững (ESG):",
        ["Vận mẫu ü trong 绿 (lǜ), 续 (xù)", "Biến điệu 可持续 (kě chíxù), 发展 (fāzhǎn)"],
        "Nhấn giọng trang trọng ở cụm 可持续发展的基石 (nền tảng của sự phát triển bền vững)."
      ),
    ],
  },
  {
    id: "hsk6-s3-reading-financial-legal-report",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    title: "Đọc hiểu Báo cáo kinh tế vĩ mô, Thỏa thuận NDA & Đầu tư hạ tầng",
    titleZh: "宏观经济报告、保密协议与基础设施投资阅读",
    titlePinyin: "Hóngguān jīngjì bàogào, bǎomì xiéyì yǔ jīchǔ shèshī tóuzī yuèdú",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-thanhmai-hsk",
    recommendedChannelName: "Thanhmai HSK",
    youtubeUrl: "https://www.youtube.com/watch?v=0oRg7MV1bwc",
    defaultSearchQuery: "Thanhmai HSK tiếng Trung thực tế HSK 6",
    grammarNotesVi: [
      "Cấu trúc 以...为... (Lấy... làm...): 以技术创新为核心动力 (Lấy đổi mới công nghệ làm động lực cốt lõi).",
      "Cấu trúc 日趋 + Tính từ / Động từ 2 âm tiết (Ngày càng tiến tới...): 基础设施建设日趋完善 (Xây dựng cơ sở hạ tầng ngày càng hoàn thiện).",
    ],
    exercises: [
      readingComp(
        "hsk6-s3-q1",
        "【东南亚供应链投资报告】随着高速公路、深水港及工业园区等基础设施建设日趋完善，加上年轻人口结构带来的消费潜力，越南正成为全球电子与新能源制造企业海外布局的首选目的地之一。",
        "[Dōngnányà gōngyìngliàn tóuzī bàogào] Suízhe gāosù gōnglù, shēnshuǐgǎng jí gōngyè yuánqū děng jīchǔ shèshī jiànshè rìqū wánshàn, jiāshàng niánqīng rénkǒu jiégòu dàilái de xiāofèi qiánlì, Yuènán zhèng chéngwéi quánqiú diànzǐ yǔ xīn néngyuán zhìzào qǐyè hǎiwài bùjú de shǒuxuǎn mùdìdì zhī yī.",
        "[Báo cáo đầu tư chuỗi cung ứng Đông Nam Á] Cùng với việc xây dựng cơ sở hạ tầng như đường cao tốc, cảng nước sâu và khu công nghiệp ngày càng hoàn thiện, cộng thêm tiềm năng tiêu dùng do cơ cấu dân số trẻ mang lại, Việt Nam đang trở thành một trong những điểm đến ưu tiên hàng đầu khi bố cục hải ngoại của các doanh nghiệp sản xuất điện tử và năng lượng mới toàn cầu.",
        "Hai yếu tố chính nào giúp Việt Nam trở thành điểm đến hàng đầu của các doanh nghiệp sản xuất điện tử và năng lượng mới?",
        [
          "Cơ sở hạ tầng ngày càng hoàn thiện và tiềm năng từ cơ cấu dân số trẻ",
          "Thuế nhập khẩu tăng cao và chi phí thuê đất đắt đỏ",
          "Chỉ phát triển du lịch mà không xây khu công nghiệp",
          "Không cần đầu tư vào cảng nước sâu",
        ],
        "Cơ sở hạ tầng ngày càng hoàn thiện và tiềm năng từ cơ cấu dân số trẻ",
        "随着高速公路、深水港及工业园区等基础设施建设日趋完善，加上年轻人口结构带来的消费潜力..."
      ),
      readingComp(
        "hsk6-s3-q2",
        "【保密与独家代理协议】在合作期间及协议终止后三年内，乙方对甲方提供的核心技术参数、客户名单及成本预算负有严格保密义务。未经甲方书面授权，不得向任何第三方披露。",
        "[Bǎomì yǔ dújiā dàilǐ xiéyì] Zài hézuò qījiān jí xiéyì zhōngzhǐ hòu sān nián nèi, Yǐfāng duì Jiǎfāng tígōng de héxīn jìshù cānshù, kèhù míngdān jí chéngběn yùsuàn fùyǒu yángé bǎomì yìwù. Wèijīng Jiǎfāng shūmiàn shòuquán, bùdé xiàng rènhé dì-sānfāng pīlù.",
        "[Thỏa thuận bảo mật & đại lý độc quyền] Trong thời gian hợp tác và trong vòng 3 năm sau khi chấm dứt thỏa thuận, Bên B có nghĩa vụ bảo mật nghiêm ngặt đối với thông số kỹ thuật cốt lõi, danh sách khách hàng và ngân sách chi phí do Bên A cung cấp. Khi chưa có ủy quyền bằng văn bản của Bên A, không được tiết lộ cho bất kỳ bên thứ ba nào.",
        "Nghĩa vụ bảo mật của Bên B kéo dài thêm bao lâu sau khi thỏa thuận chấm dứt?",
        ["3 năm sau khi thỏa thuận chấm dứt", "1 tháng sau khi chấm dứt", "Chỉ trong lúc đang hợp tác", "10 năm"],
        "3 năm sau khi thỏa thuận chấm dứt",
        "在合作期间及协议终止后三年内...负有严格保密义务。"
      ),
      readingComp(
        "hsk6-s3-q3",
        "在原材料价格受通货膨胀影响持续上涨的背景下，企业单纯依靠低价竞争已难以维持利润。唯有加大研发投入、打造自主品牌并提升产品附加值，才能在国际市场上实现可持续发展。",
        "Zài yuáncáiliào jiàgé shòu tōnghuò péngzhàng yǐngxiǎng chíxù shàngzhǎng de bèijǐng xià, qǐyè dānchún yīkào dījià jìngzhēng yǐ nányǐ wéichí lìrùn. Wéiyǒu jiādà yánfā tóurù, dǎzào zìzhǔ pǐnpái bìng tíshēng chǎnpǐn fùjiāzhí, cáinéng zài guójì shìchǎng shàng shíxiàn kě chíxù fāzhǎn.",
        "Trong bối cảnh giá nguyên vật liệu liên tục tăng cao do ảnh hưởng của lạm phát, doanh nghiệp chỉ đơn thuần dựa vào cạnh tranh giá rẻ đã khó lòng duy trì lợi nhuận. Chỉ có tăng cường đầu tư R&D, xây dựng thương hiệu tự chủ và nâng cao giá trị gia tăng của sản phẩm mới có thể thực hiện phát triển bền vững trên thị trường quốc tế.",
        "Theo đoạn văn, giải pháp căn bản để doanh nghiệp phát triển bền vững khi chi phí nguyên liệu tăng cao là gì?",
        [
          "Tăng đầu tư R&D, xây dựng thương hiệu tự chủ và nâng cao giá trị gia tăng của sản phẩm",
          "Tiếp tục hạ giá bán xuống dưới giá thành",
          "Cắt giảm toàn bộ bộ phận kiểm định chất lượng",
          "Ngừng đổi mới mẫu mã sản phẩm",
        ],
        "Tăng đầu tư R&D, xây dựng thương hiệu tự chủ và nâng cao giá trị gia tăng của sản phẩm",
        "唯有加大研发投入、打造自主品牌并提升产品附加值，才能在国际市场上实现可持续发展。"
      ),
      readingComp(
        "hsk6-s3-q4",
        "为了确保大宗出口商品符合欧盟及东盟环保标准，采购方不仅委托国际权威第三方机构出具检测报告，还派驻质检工程师到工厂现场监督整个生产流程。",
        "Wèile quèbǎo dàzōng chūkǒu shāngpǐn fúhé Ōuméng jí Dōngméng huánbǎo biāozhǔn, cǎigòufāng bùjǐn wěituō guójì quánwēi dì-sānfāng jīgòu chūjù jiǎncè bàogào, hái pàizhù zhìjiǎn gōngchéngshī dào gōngchǎng xiànchǎng jiāndū zhěnggè shēngchǎn liúchéng.",
        "Để đảm bảo hàng hóa xuất khẩu số lượng lớn đạt tiêu chuẩn môi trường của EU và ASEAN, bên thu mua không những ủy thác tổ chức bên thứ ba uy tín quốc tế cấp báo cáo kiểm định mà còn cử kỹ sư QC tới hiện trường nhà máy giám sát toàn bộ quy trình sản xuất.",
        "Bên thu mua đã thực hiện hai biện pháp kiểm soát chất lượng nào?",
        [
          "Thuê tổ chức kiểm định quốc tế bên thứ ba và cử kỹ sư QC giám sát trực tiếp tại nhà máy",
          "Chỉ kiểm tra qua ảnh chụp trên WeChat",
          "Đợi hàng tới cảng đích mới mở container kiểm tra",
          "Giao toàn quyền cho bên vận chuyển tự kiểm tra",
        ],
        "Thuê tổ chức kiểm định quốc tế bên thứ ba và cử kỹ sư QC giám sát trực tiếp tại nhà máy",
        "不仅委托国际权威第三方机构出具检测报告，还派驻质检工程师到工厂现场监督整个生产流程。"
      ),
    ],
  },
  {
    id: "hsk6-s4-writing-contract-clauses",
    stageId: 6,
    hskLevel: "HSK6",
    subDifficulty: "advanced",
    title: "Viết chữ Hán Chiến lược/Pháp lý, Sắp xếp điều khoản hợp đồng & Đặt 2 câu",
    titleZh: "HSK6战略法务汉字书写与合同条款造句",
    titlePinyin: "HSK6 zhànlüè fǎwù Hànzì shūxiě yǔ hétóng tiáokuǎn zàojù",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-chinemaster",
    recommendedChannelName: "Tiếng Trung ChineMaster",
    youtubeUrl: "https://www.youtube.com/watch?v=IClmwqU9ZXM",
    defaultSearchQuery: "Tiếng Trung ChineMaster giáo trình Hán ngữ hành chính",
    grammarNotesVi: [
      "Văn viết HSK6 dùng nhiều cấu trúc 4 chữ và hư từ văn ngôn: 均应 (đều phải), 有助于 (giúp ích cho), 以...以弥补... (lấy... để bù đắp...).",
    ],
    exercises: [
      writingStroke(
        "hsk6-s4-q1",
        "企",
        "qǐ",
        "Doanh nghiệp (6 nét, bộ Nhân 人 ở trên + chữ Chỉ 止 ở dưới)",
        "Chữ 企 (trong 企业 - doanh nghiệp) gồm bộ Nhân (人: Phẩy, Mác) bao trùm phía trên và chữ Chỉ (止: Sổ giữa, Ngang ngắn phải, Sổ trái, Ngang đáy dài) ở dưới."
      ),
      writingStroke(
        "hsk6-s4-q2",
        "业",
        "yè",
        "Sự nghiệp / Ngành nghề (5 nét: Sổ, Sổ, Chấm trái, Phẩy phải, Ngang đáy)",
        "Chữ 业 (5 nét): Viết hai nét sổ ở giữa trước, rồi chấm trái, phẩy ngắn phải, cuối cùng là nét ngang dài đỡ đáy."
      ),
      writingOrder(
        "hsk6-s4-q3",
        "Sắp xếp câu chiến lược: 'Đổi mới công nghệ là động lực căn bản thúc đẩy nâng cấp ngành công nghiệp.'",
        ["的根本动力。", "是推动产业升级", "技术创新"],
        "技术创新是推动产业升级的根本动力。",
        "Jìshù chuàngxīn shì tuīdòng chǎnyè shēngjí de gēnběn dònglì.",
        "Chủ ngữ (技术创新) + 是 + Cụm định ngữ (推动产业升级的) + Trung tâm ngữ (根本动力)."
      ),
      writingOrder(
        "hsk6-s4-q4",
        "Sắp xếp điều khoản hợp đồng: 'Hai bên ký kết đều phải thực hiện nghiêm ngặt các nghĩa vụ quy định trong hợp đồng.'",
        ["合同规定的各项义务。", "均应严格履行", "签约双方"],
        "签约双方均应严格履行合同规定的各项义务。",
        "Qiānyuē shuāngfāng jūn yīng yángé lǚxíng hétóng guīdìng de gè xiàng yìwù.",
        "Chủ ngữ (签约双方) + 均应严格履行 + Tân ngữ (合同规定的各项义务)."
      ),
      writingTwoSentences(
        "hsk6-s4-q5",
        "战略",
        "zhànlüè",
        "Chiến lược",
        "Đặt 2 câu hoàn chỉnh với từ 战略 (Câu 1: Chiến lược học tập/phát triển bản thân; Câu 2: Chiến lược mở rộng thị trường/chuỗi cung ứng doanh nghiệp)."
      ),
    ],
  },

  // ==========================================
  // STAGE 7 — CHẶNG 7 (HSK7: Thành ngữ thương mại, Hệ sinh thái số, Đàm phán cấp cao)
  // ==========================================
  {
    id: "hsk7-s1-listening-idioms-ecosystem",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "basic",
    title: "Nghe diễn đàn Kinh tế khu vực, Hệ sinh thái số & Thành ngữ thương mại HSK7",
    titleZh: "区域经济论坛、数字生态圈与商务成语听力",
    titlePinyin: "Qūyù jīngjì lùntán, shùzì shēngtàiquān yǔ shāngwù chéngyǔ tīnglì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "listening-wenjing-zhiyuan",
    recommendedChannelName: "Wenjing-Zhiyuan",
    youtubeUrl: "https://www.youtube.com/watch?v=VONw_j2lPrs",
    defaultSearchQuery: "Wenjing-Zhiyuan HSK advanced listening",
    grammarNotesVi: [
      "Thành ngữ 4 chữ (成语) trọng tâm HSK7: 互利共赢 (đôi bên cùng có lợi), 因地制宜 (tùy điều kiện địa phương mà áp dụng), 实事求是 (thực sự cầu thị), 精益求精 (đã tốt càng hoàn thiện hơn), 举足轻重 (vị trí then chốt).",
      "Từ vựng kỷ nguyên số: 赋能 (trao quyền/tiếp sức công nghệ), 生态圈 (hệ sinh thái), 迭代 (nâng cấp thế hệ).",
    ],
    exercises: [
      listeningDialogue(
        "hsk7-s1-q1",
        "男：张会长，您如何看待未来五年中越跨境产业链的合作前景？女：双方产业结构高度互补，只要秉持互利共赢的原则，因地制宜推进本土化生产，合作前景必定十分广阔。",
        "Nán: Zhāng huìzhǎng, nín rúhé kàndài wèilái wǔ nián Zhōng-Yuè kuàjìng chǎnyèliàn de hézuò qiánjǐng? Nǚ: Shuāngfāng chǎnyè jiégòu gāodù hùbǔ, zhǐyào bǐngchí hùlì-gòngyíng de yuánzé, yīndì-zhìyí tuījìn běntǔhuà shēngchǎn, hézuò qiánjǐng bìdìng shífēn guǎngkuò.",
        "Chủ tịch hiệp hội Trương nhấn mạnh hai nguyên tắc thành ngữ nào để thúc đẩy hợp tác chuỗi công nghiệp Trung - Việt?",
        [
          "Đôi bên cùng có lợi (互利共赢) và tùy điều kiện địa phương mà áp dụng (因地制宜)",
          "Cạnh tranh giá thấp và độc점 thị trường",
          "Chỉ xuất khẩu nguyên liệu thô",
          "Sao chép nguyên mẫu không thay đổi",
        ],
        "Đôi bên cùng có lợi (互利共赢) và tùy điều kiện địa phương mà áp dụng (因地制宜)",
        "只要秉持互利共赢的原则，因地制宜推进本土化生产..."
      ),
      listeningFill(
        "hsk7-s1-q2",
        "工匠精神的核心在于对产品质量的精益求精。",
        "工匠精神的核心在于对产品质量的___。",
        "Gōngjiàng jīngshen de héxīn zàiyú duì chǎnpǐn zhìliàng de jīngyì-qiújīng.",
        "Nghe và điền thành ngữ 4 chữ Hán ('đã tốt lại càng hoàn thiện hơn') vào chỗ trống:",
        "精益求精",
        "精益求精 (jīngyì-qiújīng): không ngừng hoàn thiện tỉ mỉ tới mức tinh xảo."
      ),
      listeningMcq(
        "hsk7-s1-q3",
        "越南在全球电子制造业供应链中占据举足轻重的地位。",
        "Yuènán zài quánqiú diànzǐ zhìzàoyè gōngyìngliàn zhōng zhànjù jǔzú-qīngzhòng de dìwèi.",
        "Thành ngữ '举足轻重' (jǔzú-qīngzhòng) trong câu vừa nghe diễn tả điều gì?",
        [
          "Chiếm vị trí then chốt, có tầm ảnh hưởng cực kỳ quan trọng",
          "Chiếm tỷ trọng rất nhỏ không đáng kể",
          "Mới bắt đầu thử nghiệm bước đầu",
          "Đang gặp nhiều rào cản kỹ thuật",
        ],
        "Chiếm vị trí then chốt, có tầm ảnh hưởng cực kỳ quan trọng",
        "举足轻重 (nhấc chân lên là làm lệch cán cân nặng nhẹ) nghĩa là có vai trò quyết định, cực kỳ quan trọng."
      ),
      listeningDialogue(
        "hsk7-s1-q4",
        "女：为什么这位年轻候选人能在三百名应聘者中脱颖而出？男：因为她不仅精通中英越三语，而且有丰富的跨境电商实战经验。",
        "Nǚ: Wèishénme zhè wèi niánqīng hòuxuǎnrén néng zài sānbǎi míng yìngpìnzhě zhōng tuōyǐng-érchū? Nán: Yīnwèi tā bùjǐn jīngtōng Zhōng-Yīng-Yuè sānyǔ, érqiě yǒu fēngfù de kuàjìng diànshāng shízhàn jīngyàn.",
        "Tại sao ứng viên trẻ này lại nổi bật vượt trội (脱颖而出) giữa 300 người ứng tuyển?",
        [
          "Vì thông thạo 3 ngôn ngữ Trung - Anh - Việt và giàu kinh nghiệm thực chiến TMĐT xuyên biên giới",
          "Vì cô ấy yêu cầu mức lương thấp nhất",
          "Vì có người quen giới thiệu vào công ty",
          "Vì chỉ nộp hồ sơ thực tập ngắn hạn",
        ],
        "Vì thông thạo 3 ngôn ngữ Trung - Anh - Việt và giàu kinh nghiệm thực chiến TMĐT xuyên biên giới",
        "因为她不仅精通中英越三语，而且有丰富的跨境电商实战经验。"
      ),
      listeningFill(
        "hsk7-s1-q5",
        "数字化工具为传统外贸企业赋能提效。",
        "数字化工具为传统外贸企业___提效。",
        "Shùzìhuà gōngjù wèi chuántǒng wàimào qǐyè fùnéng tíxiào.",
        "Nghe và điền động từ 2 chữ Hán ('trao quyền / tiếp sức công nghệ') vào chỗ trống:",
        "赋能",
        "赋能 (fùnéng): tiếp sức, trao quyền năng công nghệ."
      ),
    ],
  },
  {
    id: "hsk7-s2-speaking-chengyu-debate",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "basic",
    title: "Luyện nói vận dụng Thành ngữ 4 chữ trong Đàm phán & Phỏng vấn cấp cao",
    titleZh: "高级商务谈判与面试中的成语演说",
    titlePinyin: "Gāojí shāngwù tánpàn yǔ miànshì zhōng de chéngyǔ yǎnshuō",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 35,
    recommendedChannelId: "speaking-le-gia-huynh-de",
    recommendedChannelName: "Lê Gia Huynh Đệ",
    youtubeUrl: "https://www.youtube.com/watch?v=dUV0uWcLFEc",
    defaultSearchQuery: "Lê Gia Huynh Đệ học tiếng Trung qua câu chuyện",
    grammarNotesVi: [
      "Khi nói thành ngữ 4 chữ (成语), nhịp chuẩn là 2 + 2 (ví dụ: 互利 / 共赢, 因地 / 制宜, 循序 / 渐进).",
      "Đặt thành ngữ làm định ngữ (+ 的) hoặc vị ngữ sau 秉持/坚持 giúp lời nói súc tích, uyên bác.",
    ],
    exercises: [
      speakingShadowing(
        "hsk7-s2-q1",
        "我们秉持互利共赢的原则推进区域经贸合作。",
        "Wǒmen bǐngchí hùlì-gòngyíng de yuánzé tuījìn qūyù jīngmào hézuò.",
        "Thu âm lời phát biểu ngoại giao thương mại với thành ngữ 互利共赢:",
        ["Nhịp 2+2 ở 互利共赢 (hùlì-gòngyíng)", "Biến điệu 秉持 (bǐngchí)"],
        "Phát âm đĩnh đạc, rõ âm bật hơi q trong 区域 (qūyù)."
      ),
      speakingShadowing(
        "hsk7-s2-q2",
        "跨国企业应当因地制宜地制定本土化营销策略。",
        "Kuàguó qǐyè yīngdāng yīndì-zhìyí de zhìdìng běntǔhuà yíngxiāo cèlüè.",
        "Thu âm câu phân tích chiến lược tiếp thị bản địa hóa với thành ngữ 因地制宜:",
        ["Thành ngữ 因地制宜 (yīndì-zhìyí)", "Âm đầu lưỡi c (cèlüè)"],
        "Chú ý phân biệt âm cuốn lưỡi 制 (zhì) và âm thẳng lưỡi 策 (cè)."
      ),
      speakingShadowing(
        "hsk7-s2-q3",
        "语言学习是一个循序渐进、日积月累的过程。",
        "Yǔyán xuéxí shì yí gè xúnxù-jiànjìn, rìjī-yuèlěi de guòchéng.",
        "Thu âm câu đúc kết phương pháp học ngôn ngữ bằng cặp thành ngữ song hành:",
        ["Cặp thành ngữ 循序渐进、日积月累", "Vận mẫu ü trong 语 (Yǔ), 序 (xù)"],
        "Ngắt nhịp nhẹ ở dấu chấm tranh (、) giữa hai thành ngữ."
      ),
      speakingShadowing(
        "hsk7-s2-q4",
        "凭借流利的中英越三语能力，她在面试中脱颖而出。",
        "Píngjiè liúlì de Zhōng-Yīng-Yuè sānyǔ nénglì, tā zài miànshì zhōng tuōyǐng-érchū.",
        "Thu âm câu khen ngợi năng lực đa ngôn ngữ với thành ngữ 脱颖而出:",
        ["Thành ngữ 脱颖而出 (tuōyǐng-érchū)", "Âm cuốn lưỡi zh, ch"],
        "Đọc rõ âm bật hơi t trong 脱 (tuō) và ch trong 出 (chū)."
      ),
    ],
  },
  {
    id: "hsk7-s3-reading-whitepaper-industry",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "advanced",
    title: "Đọc hiểu Sách trắng Thương mại điện tử xuyên biên giới & Tinh thần Nghệ nhân",
    titleZh: "跨境电商生态白皮书与工匠精神评论阅读",
    titlePinyin: "Kuàjìng diànshāng shēngtàiquān báipíshū yǔ gōngjiàng jīngshen pínglùn yuèdú",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-tieng-hoa-haha",
    recommendedChannelName: "Tiếng Hoa HAHA",
    youtubeUrl: "https://www.youtube.com/watch?v=O2lrrGSTNmI",
    defaultSearchQuery: "Tiếng Hoa HAHA học tiếng Trung nâng cao",
    grammarNotesVi: [
      "Trong văn nghị luận và sách trắng ngành (行业白皮书) HSK7, các thành ngữ 4 chữ thường đảm nhận vai trò tổng kết luận điểm (画龙点睛).",
    ],
    exercises: [
      readingComp(
        "hsk7-s3-q1",
        "【跨境电商生态白皮书】构建涵盖移动支付、智能仓储、通关结汇与供应链金融的一体化生态圈，已成为中国品牌出海东南亚的里程碑式变革。人工智能与大数据算法的快速迭代，更进一步为中小外贸企业赋能提效。",
        "[Kuàjìng diànshāng shēngtàiquān báipíshū] Gòujiàn hángài yídòng zhīfù, zhìnéng cāngchǔ, tōngguān jiéhuì yǔ gōngyìngliàn jīnróng de yìtǐhuà shēngtàiquān, yǐ chéngwéi Zhōngguó pǐnpái chūhǎi Dōngnányà de lǐchéngbēi shì biàngé. Réngōng zhìnéng yǔ dàshùjù suànfǎ de kuàisù diédài, gèng jìnyíbù wèi zhōng-xiǎo wàimào qǐyè fùnéng tíxiào.",
        "[Sách trắng hệ sinh thái TMĐT xuyên biên giới] Việc kiến tạo hệ sinh thái tích hợp bao gồm thanh toán di động, kho bãi thông minh, thông quan kết hối và tài chính chuỗi cung ứng đã trở thành cuộc biến革 mang tính cột mốc của các thương hiệu Trung Quốc khi vươn ra Đông Nam Á. Sự nâng cấp nhanh chóng của AI và thuật toán dữ liệu lớn càng tiếp sức và nâng cao hiệu suất hơn nữa cho các doanh nghiệp ngoại thương vừa và nhỏ.",
        "Hệ sinh thái tích hợp (一体化生态圈) trong sách trắng bao gồm 4 trụ cột nào?",
        [
          "Thanh toán di động, kho bãi thông minh, thông quan kết hối và tài chính chuỗi cung ứng",
          "Bán lẻ truyền thống, phát tờ rơi, quảng cáo báo giấy và thu tiền mặt",
          "Du lịch nghỉ dưỡng, khách sạn, nhà hàng và vé máy bay",
          "Nông nghiệp, lâm nghiệp, ngư nghiệp và khai khoáng",
        ],
        "Thanh toán di động, kho bãi thông minh, thông quan kết hối và tài chính chuỗi cung ứng",
        "构建涵盖移动支付、智能仓储、通关结汇与供应链金融的一体化生态圈..."
      ),
      readingComp(
        "hsk7-s3-q2",
        "所谓“工匠精神”，绝非墨守成规，而是在实事求是的基础上对产品品质精益求精。每一处看似微不足道的细节改良，往往能在激烈的市场竞争中起到画龙点睛的作用。",
        "Suǒwèi “gōngjiàng jīngshen”, juéfēi mòshǒu-chéngguī, érshì zài shíshì-qiúshì de jīchǔ shàng duì chǎnpǐn pǐnzhì jīngyì-qiújīng. Měi yí chù kànsì wēibùzúdào de xìjié gǎiliáng, wǎngwǎng néng zài jīliè de shìchǎng jìngzhēng zhōng qǐdào huàlóng-diǎnjīng de zuòyòng.",
        "Cái gọi là 'tinh thần nghệ nhân' tuyệt đối không phải là khư khư giữ lối mòn cũ, mà là không ngừng hoàn thiện chất lượng sản phẩm trên nền tảng thực sự cầu thị. Mỗi một cải tiến chi tiết tưởng chừng nhỏ bé không đáng kể lại thường phát huy tác dụng điểm nhấn quyết định (vẽ rồng chấm mắt) trong cuộc cạnh tranh thị trường khốc liệt.",
        "Theo tác giả, bản chất của 'tinh thần nghệ nhân' (工匠精神) là gì?",
        [
          "Không ngừng hoàn thiện chất lượng sản phẩm (精益求精) trên nền tảng thực sự cầu thị (实事求是)",
          "Giữ nguyên quy trình cũ không bao giờ thay đổi (墨守成规)",
          "Chỉ chú trọng quảng cáo bề ngoài mà bỏ qua chi tiết nhỏ",
          "Sản xuất càng nhanh càng tốt bất chấp lỗi kỹ thuật",
        ],
        "Không ngừng hoàn thiện chất lượng sản phẩm (精益求精) trên nền tảng thực sự cầu thị (实事求是)",
        "绝非墨守成规，而是在实事求是的基础上对产品品质精益求精。"
      ),
      readingComp(
        "hsk7-s3-q3",
        "跨国企业在开拓新兴市场时，切忌生搬硬套母国经验。唯有深入调研当地法律法规与文化习俗，因地制宜地调整产品设计与沟通策略，方能赢得当地消费者的长期信赖。",
        "Kuàguó qǐyè zài kāituò xīnxīng shìchǎng shí, qièjì shēngbān-yìngtào mǔguó jīngyàn. Wéiyǒu shēnrù diàoyán dāngdì fǎlǜ fǎguī yǔ wénhuà xísú, yīndì-zhìyí de tiáozhěng chǎnpǐn shèjì yǔ gōutōng cèlüè, fāngnéng yíngdé dāngdì xiāofèizhě de chángqī xìnlài.",
        "Doanh nghiệp đa quốc gia khi mở rộng thị trường mới nổi tuyệt đối kỵ việc bê nguyên xi máy móc kinh nghiệm ở nước mẹ. Chỉ có khảo sát sâu pháp luật quy định và phong tục văn hóa bản địa, tùy điều kiện địa phương mà điều chỉnh thiết kế sản phẩm và chiến lược truyền thông thì mới có thể giành được sự tin cậy lâu dài của người tiêu dùng sở tại.",
        "Điều tối kỵ (切忌) khi doanh nghiệp đa quốc gia mở rộng sang thị trường mới nổi là gì?",
        [
          "Bê nguyên xi máy móc kinh nghiệm của nước mẹ (生搬硬套母国经验)",
          "Khảo sát pháp luật và văn hóa bản địa",
          "Điều chỉnh thiết kế sản phẩm phù hợp địa phương",
          "Tôn trọng người tiêu dùng sở tại",
        ],
        "Bê nguyên xi máy móc kinh nghiệm của nước mẹ (生搬硬套母国经验)",
        "切忌生搬硬套母国经验。"
      ),
      readingComp(
        "hsk7-s3-q4",
        "从零基础迈向高级商务汉语并非一朝一夕之功，而是一个循序渐进的过程。学习者既要扎实掌握汉字部首与语法结构，又要通过大量真实商务场景演练来培养语感。",
        "Cóng líng jīchǔ màixiàng gāojí Shāngwù Hànyǔ bìngfēi yìzhāo-yìxī zhī gōng, érshì yí gè xúnxù-jiànjìn de guòchéng. Xuéxízhě jì yào zhāshi zhǎngwò Hànzì bùshǒu yǔ yǔfǎ jiégòu, yòu yào tōngguò dàliàng zhēnshí shāngwù chǎngjǐng yǎnliàn lái péiyǎng yǔgǎn.",
        "Từ con số 0 tiến lên tiếng Trung thương mại cao cấp hoàn toàn không phải chuyện một sớm một chiều, mà là một quá trình tuần tự từng bước. Người học vừa phải nắm vững bộ thủ chữ Hán và cấu trúc ngữ pháp, vừa phải rèn luyện ngữ cảm thông qua thực hành lượng lớn tình huống thương mại thực tế.",
        "Để đạt tới trình độ tiếng Trung thương mại cao cấp, người học cần kết hợp hai yếu tố nào?",
        [
          "Nắm vững bộ thủ/ngữ pháp nền tảng và thực hành nhiều tình huống thương mại thực tế",
          "Chỉ học thuộc lòngPinyin trong 1 ngày",
          "Chỉ dùng phần mềm dịch tự động",
          "Bỏ qua việc học chữ Hán",
        ],
        "Nắm vững bộ thủ/ngữ pháp nền tảng và thực hành nhiều tình huống thương mại thực tế",
        "既要扎实掌握汉字部首与语法结构，又要通过大量真实商务场景演练来培养语感。"
      ),
    ],
  },
  {
    id: "hsk7-s4-writing-chengyu-arguments",
    stageId: 7,
    hskLevel: "HSK7",
    subDifficulty: "advanced",
    title: "Viết chữ Hán Thành ngữ HSK7, Sắp xếp luận điểm & Đặt 2 câu học thuật",
    titleZh: "HSK7核心成语汉字书写与商业评论造句",
    titlePinyin: "HSK7 héxīn chéngyǔ Hànzì shūxiě yǔ shāngyè pínglùn zàojù",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-chinemaster",
    recommendedChannelName: "Tiếng Trung ChineMaster",
    youtubeUrl: "https://www.youtube.com/watch?v=mfDMIIGXefM",
    defaultSearchQuery: "Tiếng Trung ChineMaster luyện thi HSK 7-9",
    grammarNotesVi: [
      "Khi đưa thành ngữ 4 chữ vào bài viết luận HSK7, có thể dùng cấu trúc: 秉持 [成语] 的原则 (kiên trì nguyên tắc...), 起到 [成语] 的作用 (phát huy tác dụng...).",
    ],
    exercises: [
      writingStroke(
        "hsk7-s4-q1",
        "互",
        "hù",
        "Lẫn nhau / Hỗ tương (trong 互利共赢 - 4 nét, bộ Nhị 二)",
        "Chữ 互 (4 nét): Nét 1 Ngang trên, Nét 2 Phẩy gập ngang, Nét 3 Ngang gập xuống, Nét 4 Ngang dài đáy."
      ),
      writingStroke(
        "hsk7-s4-q2",
        "求",
        "qiú",
        "Cầu / Tìm kiếm (trong 实事求是, 精益求精 - 7 nét, bộ Thủy 水)",
        "Chữ 求 (7 nét): Viết nét Ngang và Sổ móc ở giữa trước, sau đó viết Chấm-Hất bên trái, Phẩy-Chấm bên phải, và chấm nhỏ ở góc trên phải sau cùng."
      ),
      writingOrder(
        "hsk7-s4-q3",
        "Sắp xếp câu nghị luận: 'Làm khảo sát thị trường bắt buộc phải kiên trì thái độ khoa học thực sự cầu thị.'",
        ["的科学态度。", "必须坚持实事求是", "做市场调研"],
        "做市场调研必须坚持实事求是的科学态度。",
        "Zuò shìchǎng diàoyán bìxū jiānchí shíshì-qiúshì de kēxué tàidu.",
        "Chủ ngữ cụm động tân (做市场调研) + 必须坚持 + Định ngữ thành ngữ (实事求是的) + 科学态度。"
      ),
      writingOrder(
        "hsk7-s4-q4",
        "Sắp xếp câu: 'Chúng tôi kiên trì nguyên tắc đôi bên cùng có lợi để thúc đẩy hợp tác kinh tế thương mại khu vực.'",
        ["推进区域经贸合作。", "的原则", "我们秉持互利共赢"],
        "我们秉持互利共赢的原则推进区域经贸合作。",
        "Wǒmen bǐngchí hùlì-gòngyíng de yuánzé tuījìn qūyù jīngmào hézuò.",
        "我们 + 秉持互利共赢的原则 + 推进区域经贸合作。"
      ),
      writingTwoSentences(
        "hsk7-s4-q5",
        "互利共赢",
        "hùlì-gòngyíng",
        "Đôi bên cùng có lợi (Win-Win)",
        "Đặt 2 câu hoàn chỉnh với thành ngữ 互利共赢 (Câu 1: Hợp tác giữa các cá nhân/đội nhóm; Câu 2: Hợp tác thương mại quốc tế giữa hai doanh nghiệp/quốc gia)."
      ),
    ],
  },

  // ==========================================
  // STAGE 8 — CHẶNG 8 (HSK8: Điều tiết vĩ mô, Trọng tài quốc tế, Quản trị rủi ro, Thành ngữ HSK8)
  // ==========================================
  {
    id: "hsk8-s1-listening-arbitration-risk",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "basic",
    title: "Nghe chuyên đề Trọng tài thương mại quốc tế, Quản trị rủi ro tỷ giá & Rào cản xanh",
    titleZh: "国际贸易仲裁、汇率风险防范与绿色壁垒听力",
    titlePinyin: "Guójì màoyì zhòngcái, huìlǜ fēngxiǎn fángfàn yǔ lǜsè bìlěi tīnglì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "listening-tieng-trung-518",
    recommendedChannelName: "Tiếng Trung 518",
    youtubeUrl: "https://www.youtube.com/watch?v=OGGy2p3z_v0",
    defaultSearchQuery: "Tiếng Trung 518 5000 từ vựng tiếng Trung nâng cao",
    grammarNotesVi: [
      "Thành ngữ & thuật ngữ HSK8: 未雨绸缪 (lo xa phòng bị trước), 高瞻远瞩 (nhìn xa trông rộng), 当务之急 (việc cấp bách hàng đầu), 相辅相成 (bổ trợ lẫn nhau), 仲裁 (trọng tài thương mại), 贸易壁垒 (rào cản thương mại), 品牌溢价 (giá trị thặng dư thương hiệu).",
    ],
    exercises: [
      listeningDialogue(
        "hsk8-s1-q1",
        "男：首席财务官，近期国际汇率波动剧烈，我们该如何应对？女：面对汇率风险，财务团队必须未雨绸缪，一方面采用远期结售汇锁定成本，另一方面提高人民币跨境结算比例。",
        "Nán: Shǒuxí cáiwùguān, jìnqī guójì huìlǜ bōdòng jùliè, wǒmen gāi rúhé yìngduì? Nǚ: Miànduì huìlǜ fēngxiǎn, cáiwù tuánduì bìxū wèiyǔ-chóumóu, yì fāngmiàn cǎiyòng yuǎnqī jiéshòuhuì suǒdìng chéngběn, lìng yì fāngmiàn tígāo Rénmínbì kuàjìng jiésuàn bǐlì.",
        "Giám đốc tài chính (CFO) đưa ra hai giải pháp phòng bị trước (未雨绸缪) nào trước biến động tỷ giá?",
        [
          "Sử dụng hợp đồng kỳ hạn ngoại tệ để khóa chi phí và nâng tỷ lệ thanh toán xuyên biên giới bằng Nhân dân tệ",
          "Ngừng toàn bộ hoạt động xuất khẩu trong 1 năm",
          "Vay thêm ngoại tệ lãi suất cao",
          "Tăng giá bán sản phẩm lên gấp 3 lần",
        ],
        "Sử dụng hợp đồng kỳ hạn ngoại tệ để khóa chi phí và nâng tỷ lệ thanh toán xuyên biên giới bằng Nhân dân tệ",
        "一方面采用远期结售汇锁定成本，另一方面提高人民币跨境结算比例。"
      ),
      listeningFill(
        "hsk8-s1-q2",
        "当务之急是尽快恢复港口到工厂的冷链运输。",
        "___是尽快恢复港口到工厂的冷链运输。",
        "Dāngwù-zhījí shì jǐnkuài huīfù gǎngkǒu dào gōngchǎng de lěngliàn yùnshū.",
        "Nghe và điền thành ngữ 4 chữ Hán ('việc cấp bách hàng đầu hiện nay') vào đầu câu:",
        "当务之急",
        "当务之急 (dāngwù-zhījí): nhiệm vụ cấp thiết nhất ngay lúc này."
      ),
      listeningMcq(
        "hsk8-s1-q3",
        "合同规定如有争议，应提交中国国际经济贸易仲裁委员会进行仲裁。",
        "Hétóng guīdìng rú yǒu zhēngyì, yīng tíjiāo Zhōngguó Guójì Jīngjì Màoyì Zhòngcái Wěiyuánhuì jìnxíng zhòngcái.",
        "Khi phát sinh tranh chấp hợp đồng, hai bên quy định giải quyết thông qua cơ quan nào?",
        [
          "Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc (CIETAC)",
          "Đồn cảnh sát giao thông địa phương",
          "Ban quản lý tòa nhà văn phòng",
          "Hiệp hội du lịch thành phố",
        ],
        "Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc (CIETAC)",
        "提交中国国际经济贸易仲裁委员会进行仲裁。"
      ),
      listeningDialogue(
        "hsk8-s1-q4",
        "女：为什么董事会五年前就决定投入巨资研发绿色环保材料？男：董事会高瞻远瞩，早就预见到欧美市场会设立严格的碳排放与绿色贸易壁垒。",
        "Nǚ: Wèishénme dǒngshìhuì wǔ nián qián jiù juédìng tóurù jùzī yánfā lǜsè huánbǎo cáiliào? Nán: Dǒngshìhuì gāozhān-yuǎnzhǔ, zǎo jiù yùjiàn dào Ōu-Měi shìchǎng huì shèlì yángé de tànpáifàng yǔ lǜsè màoyì bìlěi.",
        "Nhờ tầm nhìn xa trông rộng (高瞻远瞩), Hội đồng quản trị đã dự báo trước được điều gì ở thị trường Âu - Mỹ?",
        [
          "Thị trường Âu - Mỹ sẽ thiết lập rào cản thương mại xanh và tiêu chuẩn phát thải carbon nghiêm ngặt",
          "Giá dầu mỏ sẽ giảm về bằng 0",
          "Người tiêu dùng không còn quan tâm đến chất lượng",
          "Vận tải biển sẽ biến mất",
        ],
        "Thị trường Âu - Mỹ sẽ thiết lập rào cản thương mại xanh và tiêu chuẩn phát thải carbon nghiêm ngặt",
        "早就预见到欧美市场会设立严格的碳排放与绿色贸易壁垒。"
      ),
      listeningFill(
        "hsk8-s1-q5",
        "理论学习与商务实践是相辅相成的。",
        "理论学习与商务实践是___的。",
        "Lǐlùn xuéxí yǔ shāngwù shíjiàn shì xiāngfǔ-xiāngchéng de.",
        "Nghe và điền thành ngữ 4 chữ Hán ('bổ trợ lẫn nhau cùng phát triển'):",
        "相辅相成",
        "相辅相成 (xiāngfǔ-xiāngchéng): hai mặt gắn bó, hỗ trợ lẫn nhau."
      ),
    ],
  },
  {
    id: "hsk8-s2-speaking-boardroom-strategy",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "basic",
    title: "Luyện nói phản biện Hội đồng quản trị, Giá trị thương hiệu & Quản trị khép kín",
    titleZh: "董事会战略辩论、品牌溢价与业务闭环演说",
    titlePinyin: "Dǒngshìhuì zhànlüè biànlùn, pǐnpái yìjià yǔ yèwù bìhuán yǎnshuō",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-le-gia-huynh-de",
    recommendedChannelName: "Lê Gia Huynh Đệ",
    youtubeUrl: "https://www.youtube.com/watch?v=qHj_nqC9RNY",
    defaultSearchQuery: "Lê Gia Huynh Đệ triết lý cuộc sống tiếng Trung cao cấp",
    grammarNotesVi: [
      "Khi phát biểu trong cuộc họp Hội đồng quản trị (董事会), ngữ điệu cần điềm tĩnh, nhấn mạnh vào các thành ngữ 4 chữ: 未雨绸缪, 高瞻远瞩, 潜移默化, 一席之地.",
    ],
    exercises: [
      speakingShadowing(
        "hsk8-s2-q1",
        "面对国际汇率波动，财务团队必须未雨绸缪。",
        "Miànduì guójì huìlǜ bōdòng, cáiwù tuánduì bìxū wèiyǔ-chóumóu.",
        "Thu âm câu phát biểu yêu cầu đội ngũ tài chính phòng bị rủi ro tỷ giá từ sớm:",
        ["Thành ngữ 未雨绸缪 (wèiyǔ-chóumóu)", "Vận mẫu ü trong 率 (lǜ), 雨 (yǔ)"],
        "Đọc rõ âm bật hơi ch trong 绸 (chóu)."
      ),
      speakingShadowing(
        "hsk8-s2-q2",
        "董事会高瞻远瞩，五年前就开始布局新能源赛道。",
        "Dǒngshìhuì gāozhān-yuǎnzhǔ, wǔ nián qián jiù kāishǐ bùjú xīn néngyuán sàidào.",
        "Thu âm câu đánh giá tầm nhìn chiến lược của Hội đồng quản trị:",
        ["Thành ngữ 高瞻远瞩 (gāozhān-yuǎnzhǔ)", "Biến điệu 远瞩 (yuǎnzhǔ → yuánzhǔ)"],
        "远瞩 gồm hai thanh 3 đi liền, chữ 远 nâng lên thanh 2."
      ),
      speakingShadowing(
        "hsk8-s2-q3",
        "卓越的品牌口碑为产品带来了显著的品牌溢价。",
        "Zhuóyuè de pǐnpái kǒubēi wèi chǎnpǐn dàilái le xiǎnzhù de pǐnpái yìjià.",
        "Thu âm câu phân tích uy tín thương hiệu tạo ra giá trị thặng dư (brand premium):",
        ["Âm cuốn lưỡi zh (Zhuó, zhù)", "Biến điệu 产品 (chǎnpǐn)"],
        "Nhấn giọng ở 卓越的品牌口碑 và 显著的品牌溢价."
      ),
      speakingShadowing(
        "hsk8-s2-q4",
        "提升环保合规标准有助于突破绿色贸易壁垒。",
        "Tíshēng huánbǎo héguī biāozhǔn yǒuzhùyú tūpò lǜsè màoyì bìlěi.",
        "Thu âm câu đề xuất giải pháp vượt qua rào cản thương mại xanh:",
        ["Vận mẫu ü trong 绿 (lǜ)", "Thanh 4 dứt khoát (zhù, pò, lǜ,sè, màoyì, bì)"],
        "Giữ nhịp đĩnh đạc ở cụm 突破绿色贸易壁垒."
      ),
    ],
  },
  {
    id: "hsk8-s3-reading-arbitration-macro",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "advanced",
    title: "Đọc hiểu Phán quyết Trọng tài thương mại, Điều tiết vĩ mô & Văn hóa doanh nghiệp",
    titleZh: "宏观调控、贸易壁垒与企业文化深度阅读",
    titlePinyin: "Hóngguān tiáokòng, màoyì bìlěi yǔ qǐyè wénhuà shēndù yuèdú",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "reading-tieng-hoa-haha",
    recommendedChannelName: "Tiếng Hoa HAHA",
    youtubeUrl: "https://www.youtube.com/watch?v=S-nBMbUBb08",
    defaultSearchQuery: "Tiếng Hoa HAHA phân tích ngữ pháp chuyên sâu",
    grammarNotesVi: [
      "Văn bản kinh tế - pháp lý HSK8 thường kết hợp các cặp phạm trù đối xứng: 既...又..., 一方面...另一方面..., 不仅...更...",
    ],
    exercises: [
      readingComp(
        "hsk8-s3-q1",
        "【品牌出海与贸易壁垒】在全球绿色转型加速的背景下，碳足迹认证已成为新型非关税贸易壁垒。具备高瞻远瞩眼光的制造企业早已未雨绸缪，构建了从绿色原材料采购、清洁能源生产到可回收包装的全流程业务闭环，从而在欧美高端市场稳占一席之地。",
        "[Pǐnpái chūhǎi yǔ màoyì bìlěi] Zài quánqiú lǜsè zhuǎnxíng jiāsù de bèijǐng xià, tànzújì rènzhèng yǐ chéngwéi xīnxíng fēi-guānshuì màoyì bìlěi. Jùbèi gāozhān-yuǎnzhǔ yǎnguāng de zhìzào qǐyè zǎoyǐ wèiyǔ-chóumóu, gòujiàn le cóng lǜsè yuáncáiliào cǎigòu, qīngjié néngyuán shēngchǎn dào kě huíshōu bāozhuāng de quán liúchéng yèwù bìhuán, cóng'ér zài Ōu-Měi gāoduān shìchǎng wěnzhàn yìxí-zhīdì.",
        "[Thương hiệu vươn ra biển lớn & Rào cản thương mại] Trong bối cảnh chuyển đổi xanh toàn cầu tăng tốc, chứng nhận dấu chân carbon đã trở thành rào cản thương mại phi thuế quan kiểu mới. Các doanh nghiệp sản xuất có tầm nhìn xa trông rộng đã sớm phòng bị trước, xây dựng vòng nghiệp vụ khép kín toàn quy trình từ thu mua nguyên liệu xanh, sản xuất bằng năng lượng sạch đến bao bì tái chế, nhờ đó chiếm giữ vững chắc một chỗ đứng tại thị trường cao cấp Âu - Mỹ.",
        "Chứng nhận nào đã trở thành rào cản thương mại phi thuế quan kiểu mới trong bối cảnh chuyển đổi xanh toàn cầu?",
        [
          "Chứng nhận dấu chân carbon (碳足迹认证)",
          "Giấy phép lái xe quốc tế",
          "Chứng chỉ tiếng Anh cơ bản",
          "Hóa đơn bán lẻ nội địa",
        ],
        "Chứng nhận dấu chân carbon (碳足迹认证)",
        "碳足迹认证已成为新型非关税贸易壁垒。"
      ),
      readingComp(
        "hsk8-s3-q2",
        "优秀的企业文化绝非挂在墙上的口号，而是通过管理者的身体力行与公正透明的激励机制，对员工产生潜移默化的深远影响。制度约束与文化认同相辅相成，共同构筑起企业的核心护城河。",
        "Yōuxiù de qǐyè wénhuà juéfēi guà zài qiáng shàng de kǒuhào, érshì tōngguò guǎnlǐzhě de shēntǐ-lìxíng yǔ gōngzhèng tòumíng de jīlì jīzhì, duì yuángōng chǎnshēng qiányí-mòhuà de shēnyuǎn yǐngxiǎng. Zhìdù yuēshù yǔ wénhuà rèntóng xiāngfǔ-xiāngchéng, gòngtóng gòuzhù qǐ qǐyè de héxīn hùchénghé.",
        "Văn hóa doanh nghiệp xuất sắc tuyệt đối không phải là khẩu hiệu treo trên tường, mà thông qua sự gương mẫu bắt tay thực hiện của người quản lý và cơ chế khích lệ công bằng minh bạch, tạo ra ảnh hưởng sâu rộng kiểu mưa dầm thấm lâu đối với nhân viên. Sự ràng buộc của chế độ và sự đồng thuận văn hóa bổ trợ lẫn nhau, cùng đắp nên hào lũy bảo vệ cốt lõi của doanh nghiệp.",
        "Theo đoạn văn, hai yếu tố nào bổ trợ lẫn nhau (相辅相成) để tạo nên hào lũy cốt lõi của doanh nghiệp?",
        [
          "Sự ràng buộc của chế độ quy章 và sự đồng thuận về văn hóa (制度约束与文化认同)",
          "Khẩu hiệu treo trên tường và phạt tiền nhân viên",
          "Chỉ cần chế độ kỷ luật mà không cần khích lệ",
          "Tăng giờ làm thêm và giảm ngày nghỉ",
        ],
        "Sự ràng buộc của chế độ quy章 và sự đồng thuận về văn hóa (制度约束与文化认同)",
        "制度约束与文化认同相辅相成，共同构筑起企业的核心护城河。"
      ),
      readingComp(
        "hsk8-s3-q3",
        "当全球经济面临通货膨胀或需求疲软时，政府通常会运用利率调整、存款准备金率及财政补贴等手段进行宏观调控，以平抑周期波动，维护金融市场的稳定运行。",
        "Dāng quánqiú jīngjì miànlín tōnghuò péngzhàng huò xūqiú píruǎn shí, zhèngfǔ tōngcháng huì yùnyòng lìlǜ tiáozhěng, cúnkuǎn zhǔnbèijīnlǜ jí cáizhèng bǔtiē děng shǒuduàn jìnxíng hóngguān tiáokòng, yǐ píngyì zhōuqī bōdòng, wéihù jīnróng shìchǎng de wěndìng yùnxíng.",
        "Khi nền kinh tế toàn cầu đối mặt với lạm phát hoặc cầu yếu, chính phủ thường vận dụng các công cụ như điều chỉnh lãi suất, tỷ lệ dự trữ bắt buộc và trợ cấp tài khóa để tiến hành điều tiết vĩ mô, nhằm làm dịu biến động chu kỳ và duy trì sự vận hành ổn định của thị trường tài chính.",
        "Mục đích của việc chính phủ tiến hành điều tiết vĩ mô (宏观调控) là gì?",
        [
          "Làm dịu biến động chu kỳ và duy trì sự vận hành ổn định của thị trường tài chính",
          "Xóa bỏ hoàn toàn hoạt động ngân hàng",
          "Cấm các doanh nghiệp xuất nhập khẩu",
          "Tăng mức lạm phát lên cao hơn",
        ],
        "Làm dịu biến động chu kỳ và duy trì sự vận hành ổn định của thị trường tài chính",
        "以平抑周期波动，维护金融市场的稳定运行。"
      ),
      readingComp(
        "hsk8-s3-q4",
        "相较于耗时漫长的跨国诉讼，国际商事仲裁具有保密性强、程序灵活及一裁终局等显著优势。因此，绝大多数跨国并购与大宗贸易合同均将仲裁条款列为争议解决的首选机制。",
        "Xiāngjiào yú hàoshí màncháng de kuàguó sùsòng, guójì shāngshì zhòngcái jùyǒu bǎomìxìng qiáng, chéngxù línghuó jí yìcái-zhōngjú děng xiǎnzhù yōushì. Yīncǐ, juédàduōshù kuàguó bìnggòu yǔ dàzōng màoyì hétóng jūn jiāng zhòngcái tiáokuǎn lièwéi zhēngyì jiějué de shǒuxuǎn jīzhì.",
        "So với kiện tụng xuyên quốc gia tốn thời gian đằng đẵng, trọng tài thương mại quốc tế có các ưu thế nổi bật như tính bảo mật cao, thủ tục linh hoạt và phán quyết chung thẩm một lần. Do đó, tuyệt đại đa số hợp đồng M&A xuyên quốc gia và thương mại hàng hóa lớn đều đưa điều khoản trọng tài làm cơ chế ưu tiên hàng đầu để giải quyết tranh chấp.",
        "Ba ưu thế nổi bật của trọng tài thương mại quốc tế (国际商事仲裁) so với kiện tụng tòa án là gì?",
        [
          "Tính bảo mật cao, thủ tục linh hoạt và phán quyết chung thẩm một lần (一裁终局)",
          "Công khai toàn bộ bí mật kinh doanh lên báo chí",
          "Kéo dài 10 năm và có thể kháng cáo nhiều cấp",
          "Hoàn toàn miễn phí không tốn lệ phí",
        ],
        "Tính bảo mật cao, thủ tục linh hoạt và phán quyết chung thẩm một lần (一裁终局)",
        "具有保密性强、程序灵活及一裁终局等显著优势。"
      ),
    ],
  },
  {
    id: "hsk8-s4-writing-macro-chengyu",
    stageId: 8,
    hskLevel: "HSK8",
    subDifficulty: "advanced",
    title: "Viết chữ Hán Thành ngữ HSK8, Sắp xếp câu quản trị vĩ mô & Đặt 2 câu",
    titleZh: "HSK8高阶成语书写与宏观战略造句",
    titlePinyin: "HSK8 gāojiē chéngyǔ shūxiě yǔ hóngguān zhànlüè zàojù",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "writing-chinemaster",
    recommendedChannelName: "Tiếng Trung ChineMaster",
    youtubeUrl: "https://www.youtube.com/watch?v=mfDMIIGXefM",
    defaultSearchQuery: "Tiếng Trung ChineMaster HSK 8 HSK 9",
    grammarNotesVi: [
      "Trong bài luận HSK8, sử dụng cấu trúc 形成从 A、B 到 C 的全流程闭环 (Hình thành vòng khép kín toàn quy trình từ A, B đến C) để diễn đạt tư duy hệ thống.",
    ],
    exercises: [
      writingStroke(
        "hsk8-s4-q1",
        "未",
        "wèi",
        "Chưa / Tương lai (trong 未雨绸缪, 未来 - 5 nét, bộ Mộc 木: Ngang trên ngắn, Ngang dưới dài)",
        "Phân biệt chữ 未 (Vị - chưa: nét ngang trên NGẮN, nét ngang dưới DÀI) với chữ 末 (Mạt - cuối: nét ngang trên dài, ngang dưới ngắn)."
      ),
      writingStroke(
        "hsk8-s4-q2",
        "雨",
        "yǔ",
        "Mưa (trong 未雨绸缪 - 8 nét, bộ Vũ 雨)",
        "Chữ 雨 (8 nét): Ngang trên, Sổ trái, Ngang gập móc phải, Sổ trục giữa, sau đó là 4 nét chấm đối xứng hai bên."
      ),
      writingOrder(
        "hsk8-s4-q3",
        "Sắp xếp câu: 'Văn hóa doanh nghiệp xuất sắc sẽ tạo ra ảnh hưởng tích cực kiểu mưa dầm thấm lâu đối với nhân viên.'",
        ["的积极影响。", "会对员工产生潜移默化", "优秀的企业文化"],
        "优秀的企业文化会对员工产生潜移默化的积极影响。",
        "Yōuxiù de qǐyè wénhuà huì duì yuángōng chǎnshēng qiányí-mòhuà de jījí yǐngxiǎng.",
        "Chủ ngữ (优秀的企业文化) + 会对员工产生 + Định ngữ thành ngữ (潜移默化的) + 积极影响。"
      ),
      writingOrder(
        "hsk8-s4-q4",
        "Sắp xếp câu: 'Thương hiệu nội địa nhờ tỷ lệ hiệu năng/giá thành cao đã chiếm được một chỗ đứng trên thị trường quốc tế.'",
        ["在海外市场占有一席之地。", "凭借高性价比", "国货品牌"],
        "国货品牌凭借高性价比在海外市场占有一席之地。",
        "Guóhuò pǐnpái píngjiè gāo xìngjiàbǐ zài hǎiwài shìchǎng zhànyǒu yìxí-zhīdì.",
        "Chủ ngữ (国货品牌) + 凭借高性价比 + 在海外市场 + 占有一席之地。"
      ),
      writingTwoSentences(
        "hsk8-s4-q5",
        "未雨绸缪",
        "wèiyǔ-chóumóu",
        "Lo xa phòng bị trước khi sự việc xảy ra",
        "Đặt 2 câu hoàn chỉnh với thành ngữ 未雨绸缪 (Câu 1: Chuẩn bị tài chính/kỹ năng cá nhân; Câu 2: Quản trị rủi ro chuỗi cung ứng/tỷ giá doanh nghiệp)."
      ),
    ],
  },

  // ==========================================
  // STAGE 9 — CHẶNG 9 (HSK9: Đỉnh cao học thuật, Phiên dịch cabin, Đàm phán ngoại giao & Thành ngữ HSK9)
  // ==========================================
  {
    id: "hsk9-s1-listening-interpreting-summit",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    title: "Nghe Hội nghị Thượng đỉnh Thương mại, Dịch cabin (同声传译) & Trung hòa Carbon",
    titleZh: "国际经贸峰会、同声传译与碳中和议题听力",
    titlePinyin: "Guójì jīngmào fēnghuì, tóngshēng chuányì yǔ tànzhōnghé yìtí tīnglì",
    skillFocus: "listening",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "listening-tieng-trung-518",
    recommendedChannelName: "Tiếng Trung 518",
    youtubeUrl: "https://www.youtube.com/watch?v=5ClwMD-mHTU",
    defaultSearchQuery: "Tiếng Trung 518 luyện nghe tiếng Trung cao cấp",
    grammarNotesVi: [
      "Ngũ đại thành ngữ & thuật ngữ đỉnh cao HSK9: 融会贯通 (hiểu thấu đáo và vận dụng linh hoạt), 迫在眉睫 (cấp bách ngay trước mắt), 推陈出新 (bỏ cũ đổi mới sáng tạo), 炉火纯青 (trình độ điêu luyện thượng thừa), 运筹帷幄 (hoạch định chiến lược tài tình), 前瞻性 (tính tầm nhìn dự báo trước).",
    ],
    exercises: [
      listeningDialogue(
        "hsk9-s1-q1",
        "男：李教授，要成为一名顶尖的中越同声传译员，需要具备哪些核心素养？女：不仅需要炉火纯青的双语转换技艺，更要将国际法、金融贸易与跨文化知识融会贯通。",
        "Nán: Lǐ jiàoshòu, yào chéngwéi yì míng dǐngjiān de Zhōng-Yuè tóngshēng chuányìyuán, xūyào jùbèi nǎxiē héxīn sùyǎng? Nǚ: Bùjǐn xūyào lúhuǒ-chúnqīng de shuāngyǔ zhuǎnhuàn jìyì, gèng yào jiāng guójìfǎ, jīnróng màoyì yǔ kuàwénhuà zhīshi rónghuì-guàntōng.",
        "Theo Giáo sư Lý, một phiên dịch viên cabin (同声传译员) đỉnh cao cần hội tụ hai phẩm chất nào?",
        [
          "Kỹ nghệ chuyển ngữ song ngữ điêu luyện thượng thừa (炉火纯青) và sự dung hợp thấu đáo (融会贯通) kiến thức luật quốc tế, tài chính thương mại, liên văn hóa",
          "Chỉ cần đọc nhanh từ điển trên điện thoại",
          "Chỉ cần biết giao tiếp sinh hoạt cơ bản",
          "Không cần hiểu kiến thức chuyên ngành kinh tế",
        ],
        "Kỹ nghệ chuyển ngữ song ngữ điêu luyện thượng thừa (炉火纯青) và sự dung hợp thấu đáo (融会贯通) kiến thức luật quốc tế, tài chính thương mại, liên văn hóa",
        "不仅需要炉火纯青的双语转换技艺，更要将国际法、金融贸易与跨文化知识融会贯通。"
      ),
      listeningFill(
        "hsk9-s1-q2",
        "节能减排与碳中和转型已是迫在眉睫的全球议题。",
        "节能减排与碳中和转型已是___的全球议题。",
        "Jiénéng jiǎnpái yǔ tànzhōnghé zhuǎnxíng yǐ shì pòzài-méijié de quánqiú yìtí.",
        "Nghe và điền thành ngữ 4 chữ Hán ('cấp bách ngay trước mắt') vào chỗ trống:",
        "迫在眉睫",
        "迫在眉睫 (pòzài-méijié): đã áp sát ngay trước lông mày và lông mi — cực kỳ cấp bách."
      ),
      listeningMcq(
        "hsk9-s1-q3",
        "老字号品牌只有不断推陈出新，才能在数字化时代赢得年轻消费者的青睐。",
        "Lǎozìhào pǐnpái zhǐyǒu búduàn tuīchén-chūxīn, cáinéng zài shùzìhuà shídài yíngdé niánqīng xiāofèizhě de qīnglài.",
        "Thương hiệu lâu đời (老字号) cần làm gì để chinh phục người tiêu dùng trẻ trong kỷ nguyên số?",
        [
          "Không ngừng đổi mới sáng tạo trên nền tảng truyền thống (推陈出新)",
          "Ngừng sản xuất các sản phẩm truyền thống",
          "Chỉ bán cho khách hàng lớn tuổi",
          "Đóng cửa toàn bộ kênh trực tuyến",
        ],
        "Không ngừng đổi mới sáng tạo trên nền tảng truyền thống (推陈出新)",
        "只有不断推陈出新，才能在数字化时代赢得年轻消费者的青睐。"
      ),
      listeningDialogue(
        "hsk9-s1-q4",
        "女：这份《东盟数字经济白皮书》为什么受到学术界和商界的高度评价？男：因为它基于翔实的跨国调研数据，对未来十年的产业格局做出了极具前瞻性的分析。",
        "Nǚ: Zhè fèn 《Dōngméng Shùzì Jīngjì Báipíshū》 wèishénme shòudào xuéshùjiè hé shāngjiè de gāodù píngjià? Nán: Yīnwèi tā jīyú xiángshí de kuàguó diàoyán shùjù, duì wèilái shí nián de chǎnyè géjú zuòchū le jí jù qiánzhānxìng de fēnxī.",
        "Tại sao cuốn 'Sách trắng Kinh tế số ASEAN' lại được giới học thuật và thương giới đánh giá cao?",
        [
          "Vì dựa trên dữ liệu khảo sát đa quốc gia tường tận và đưa ra phân tích giàu tính dự báo tầm nhìn (前瞻性) cho 10 năm tới",
          "Vì sách rất ngắn chỉ có 2 trang",
          "Vì không sử dụng bất kỳ số liệu thống kê nào",
          "Vì chỉ viết về lịch sử cổ đại",
        ],
        "Vì dựa trên dữ liệu khảo sát đa quốc gia tường tận và đưa ra phân tích giàu tính dự báo tầm nhìn (前瞻性) cho 10 năm tới",
        "因为它基于翔实的跨国调研数据，对未来十年的产业格局做出了极具前瞻性的分析。"
      ),
      listeningFill(
        "hsk9-s1-q5",
        "优秀的供应链总监能够在复杂局势中运筹帷幄。",
        "优秀的供应链总监能够在复杂局势中___。",
        "Yōuxiù de gōngyìngliàn zǒngjiān nénggòu zài fùzá júshì zhōng yùnchóu-wéiwò.",
        "Nghe và điền thành ngữ 4 chữ Hán ('hoạch định chiến lược tài tình'):",
        "运筹帷幄",
        "运筹帷幄 (yùnchóu-wéiwò): ngồi trong màn trướng vạch kế sách quyết thắng."
      ),
    ],
  },
  {
    id: "hsk9-s2-speaking-simultaneous-keynote",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    title: "Luyện nói Diễn văn Thượng đỉnh, Phiên dịch Cabin & Hùng biện Học thuật HSK9",
    titleZh: "峰会主旨演讲与同声传译口语精练",
    titlePinyin: "Fēnghuì zhǔzhǐ yǎnjiǎng yǔ tóngshēng chuányì kǒuyǔ jīngliàn",
    skillFocus: "speaking",
    difficulty: "hard",
    estimatedMinutes: 40,
    recommendedChannelId: "speaking-khoai-tay",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=AJ7RyVUJ00U",
    defaultSearchQuery: "Khoai Tây yêu tiếng Trung luyện nói tiếng Trung cao cấp",
    grammarNotesVi: [
      "Ở cấp độ HSK9 (cấp độ cao nhất của khung HSK 3.0), người nói cần làm chủ nhịp điệu diễn thuyết trang trọng, phát âm chuẩn xác các cụm thành ngữ học thuật và chuyển đổi linh hoạt giữa ngôn ngữ ngoại giao – thương mại – học thuật.",
    ],
    exercises: [
      speakingShadowing(
        "hsk9-s2-q1",
        "高级翻译需要将语言技巧与行业背景知识融会贯通。",
        "Gāojí fānyì xūyào jiāng yǔyán jìqiǎo yǔ hángyè bèijǐng zhīshi rónghuì-guàntōng.",
        "Thu âm câu phát biểu về tiêu chuẩn của phiên dịch viên cao cấp:",
        ["Thành ngữ 融会贯通 (rónghuì-guàntōng)", "Giới từ văn viết 将 (jiāng = 把)"],
        "Đọc rõ âm cuốn lưỡi r trong 融 (róng) và zh, sh trong 知识 (zhīshi)."
      ),
      speakingShadowing(
        "hsk9-s2-q2",
        "节能减排与碳中和转型已是迫在眉睫的全球议题。",
        "Jiénéng jiǎnpái yǔ tànzhōnghé zhuǎnxíng yǐ shì pòzài-méijié de quánqiú yìtí.",
        "Thu âm câu diễn văn hội nghị quốc tế về chuyển đổi trung hòa carbon:",
        ["Thành ngữ 迫在眉睫 (pòzài-méijié)", "Âm bật hơi p (pái, pò), t (tàn, tí)"],
        "Nhấn giọng mạnh mẽ ở cụm 迫在眉睫的全球议题."
      ),
      speakingShadowing(
        "hsk9-s2-q3",
        "他的同声传译技艺已经达到了炉火纯青的境界。",
        "Tā de tóngshēng chuányì jìyì yǐjīng dádào le lúhuǒ-chúnqīng de jìngjiè.",
        "Thu âm câu tán dương trình độ phiên dịch cabin thượng thừa:",
        ["Thành ngữ 炉火纯青 (lúhuǒ-chúnqīng)", "Âm bật hơi ch (chuán, chún), q (qīng)"],
        "Giữ hơi thở đều, phát âm vang sáng ở 炉火纯青的境界."
      ),
      speakingShadowing(
        "hsk9-s2-q4",
        "优秀的供应链总监能够在复杂局势中运筹帷幄。",
        "Yōuxiù de gōngyìngliàn zǒngjiān nénggòu zài fùzá júshì zhōng yùnchóu-wéiwò.",
        "Thu âm câu kết luận về bản lĩnh điều hành chiến lược chuỗi cung ứng:",
        ["Thành ngữ 运筹帷幄 (yùnchóu-wéiwò)", "Vận mẫu ü trong 局 (jú), 运 (yùn)"],
        "Đọc đĩnh đạc, tròn vành rõ chữ ở 4 âm tiết 运筹帷幄."
      ),
    ],
  },
  {
    id: "hsk9-s3-reading-academic-dissertation",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    title: "Đọc hiểu Luận văn Học thuật, Diễn văn Ngoại giao & Chiến lược Chuỗi giá trị Toàn cầu",
    titleZh: "全球价值链重构、学术论文摘要与外交辞令阅读",
    titlePinyin: "Quánqiú jiàzhíliàn chónggòu, xuéshù lùnwén zhāiyào yǔ wàijiāo cílìng yuèdú",
    skillFocus: "reading",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "reading-thanhmai-hsk",
    recommendedChannelName: "Thanhmai HSK",
    youtubeUrl: "https://www.youtube.com/watch?v=2Mo6tXryTf0",
    defaultSearchQuery: "Thanhmai HSK luyện đọc hiểu HSK cao cấp",
    grammarNotesVi: [
      "Văn bản HSK9 sử dụng mật độ cao các hư từ văn ngôn (以, 于, 由, 均, 亦, 旨在, 鉴于) và thành ngữ 4 chữ để nén thông tin học thuật ở mức tối đa.",
    ],
    exercises: [
      readingComp(
        "hsk9-s3-q1",
        "【全球价值链重构论文摘要】鉴于地缘经济格局深刻演变与数字技术迅猛迭代，传统劳动密集型代工模式已难以为继。唯有将本土产业链优势与科技创新融会贯通，不断推陈出新，向研发设计与品牌营销两端延伸，方能在全球价值链重构中掌握主动权。",
        "[Quánqiú jiàzhíliàn chónggòu lùnwén zhāiyào] Jiànyú dìyuán jīngjì géjú shēnkè yǎnbiàn yǔ shùzì jìshù xùnměng diédài, chuántǒng láodòng mìjíxíng dàigōng móshì yǐ nányǐ-wéijì. Wéiyǒu jiāng běntǔ chǎnyèliàn yōushì yǔ kējì chuàngxīn rónghuì-guàntōng, búduàn tuīchén-chūxīn, xiàng yánfā shèjì yǔ pǐnpái yíngxiāo liǎng duān yánshēn, fāngnéng zài quánqiú jiàzhíliàn chónggòu zhōng zhǎngwò zhǔdòngquán.",
        "[Tóm tắt luận văn tái cấu trúc chuỗi giá trị toàn cầu] Xét thấy cục diện địa kinh tế biến chuyển sâu sắc và công nghệ số nâng cấp vũ bão, mô hình gia công thâm dụng lao động truyền thống đã khó lòng duy trì tiếp. Chỉ có dung hợp thấu đáo lợi thế chuỗi công nghiệp bản địa với đổi mới khoa học công nghệ, không ngừng đổi mới sáng tạo, vươn dài sang hai đầu R&D thiết kế và tiếp thị thương hiệu thì mới có thể nắm quyền chủ động trong cuộc tái cấu trúc chuỗi giá trị toàn cầu.",
        "Theo tóm tắt luận văn, để nắm quyền chủ động trong tái cấu trúc chuỗi giá trị toàn cầu, doanh nghiệp cần vươn sang hai đầu nào của chuỗi giá trị (Đường cong nụ cười)?",
        [
          "Nghiên cứu thiết kế (研发设计) và Tiếp thị thương hiệu (品牌营销)",
          "Gia công lắp ráp thủ công và khai thác tài nguyên thô",
          "Vận tải đường bộ và kho bãi truyền thống",
          "Cắt giảm chi phí nhân sự và ngừng R&D",
        ],
        "Nghiên cứu thiết kế (研发设计) và Tiếp thị thương hiệu (品牌营销)",
        "向研发设计与品牌营销两端延伸，方能在全球价值链重构中掌握主动权。"
      ),
      readingComp(
        "hsk9-s3-q2",
        "【人工智能与同声传译研究】尽管神经网络机器翻译在日常资讯处理中已颇具效率，但在涉及高阶商务谈判、外交斡旋及文化隐喻的同声传译场景中，人类译员炉火纯青的临场应变与跨文化共情能力依然无可替代。人机协同而非彼此取代，才是语言服务行业最具前瞻性的演进方向。",
        "[Réngōng zhìnéng yǔ tóngshēng chuányì yánjiū] Jǐnguǎn shénjīng wǎngluò jīqì fānyì zài rìcháng zīxùn chǔlǐ zhōng yǐ pō jù xiàolǜ, dàn zài shèjí gāojiē shāngwù tánpàn, wàijiāo wòxuán jí wénhuà yǐnyù de tóngshēng chuányì chǎngjǐng zhōng, rénlèi yìyuán lúhuǒ-chúnqīng de línchǎng yìngbiàn yǔ kuàwénhuà gòngqíng nénglì yīrán wúkě-tìdài. Rén-jī xiétóng érfēi bǐcǐ qǔdài, cáishì yǔyán fúwù hángyè zuì jù qiánzhānxìng de yǎnjìn fāngxiàng.",
        "[Nghiên cứu AI và Phiên dịch cabin] Mặc dù dịch máy mạng nơ-ron đã khá hiệu quả trong xử lý thông tin thường ngày, nhưng trong các bối cảnh dịch cabin liên quan đến đàm phán thương mại cấp cao, dàn xếp ngoại giao và ẩn dụ văn hóa, năng lực ứng biến tại chỗ điêu luyện thượng thừa cùng sự thấu cảm liên văn hóa của phiên dịch viên con người vẫn không thể thay thế. Sự phối hợp Người - Máy chứ không phải thay thế lẫn nhau mới là hướng tiến hóa giàu tính tầm nhìn nhất của ngành dịch vụ ngôn ngữ.",
        "Theo bài nghiên cứu, hướng phát triển giàu tính tầm nhìn dự báo nhất (最具前瞻性) của ngành dịch vụ ngôn ngữ là gì?",
        [
          "Sự phối hợp cộng tác giữa Người và Máy (人机协同)",
          "Máy móc thay thế hoàn toàn con người trong ngoại giao",
          "Từ bỏ hoàn toàn công nghệ AI và từ điển điện tử",
          "Chỉ dịch từng chữ rời rạc không cần ngữ cảnh",
        ],
        "Sự phối hợp cộng tác giữa Người và Máy (人机协同)",
        "人机协同而非彼此取代，才是语言服务行业最具前瞻性的演进方向。"
      ),
      readingComp(
        "hsk9-s3-q3",
        "【碳中和与绿色供应链战略】面对迫在眉睫的全球气候挑战，跨国集团纷纷将供应链脱碳列为战略核心。能够在复杂多变的国际法规与能源转型中运筹帷幄、率先建立零碳工厂的企业，不仅能规避高昂的碳关税成本，更能在资本市场获得长远的价值认同。",
        "[Tànzhōnghé yǔ lǜsè gōngyìngliàn zhànlüè] Miànduì pòzài-méijié de quánqiú qìhòu tiǎozhàn, kuàguó jítuán fēnfēn jiāng gōngyìngliàn tuōtàn lièwéi zhànlüè héxīn. Nénggòu zài fùzá duōbiàn de guójì fǎguī yǔ néngyuán zhuǎnxíng zhōng yùnchóu-wéiwò, shuàixiān jiànlì língtàn gōngchǎng de qǐyè, bùjǐn néng guībì gāo'áng de tànguānshuì chéngběn, gèng néng zài zīběn shìchǎng huòdé chángyuǎn de jiàzhí rèntóng.",
        "[Chiến lược Trung hòa Carbon & Chuỗi cung ứng xanh] Trước thách thức khí hậu toàn cầu cấp bách ngay trước mắt, các tập đoàn đa quốc gia lần lượt đưa việc khử carbon chuỗi cung ứng làm trọng tâm chiến lược. Doanh nghiệp nào có thể hoạch định tài tình giữa các quy định quốc tế phức tạp và quá trình chuyển đổi năng lượng, đi đầu xây dựng nhà máy không phát thải carbon, không những tránh được chi phí thuế carbon đắt đỏ mà còn nhận được sự công nhận giá trị lâu dài trên thị trường vốn.",
        "Doanh nghiệp đi đầu xây dựng nhà máy không phát thải carbon (零碳工厂) sẽ đạt được hai lợi ích lớn nào?",
        [
          "Tránh được chi phí thuế carbon đắt đỏ và nhận được sự công nhận giá trị lâu dài trên thị trường vốn",
          "Không cần đóng bất kỳ loại thuế nào trong nước",
          "Không cần kiểm định chất lượng sản phẩm",
          "Giảm lương công nhân xuống một nửa",
        ],
        "Tránh được chi phí thuế carbon đắt đỏ và nhận được sự công nhận giá trị lâu dài trên thị trường vốn",
        "不仅能规避高昂的碳关税成本，更能在资本市场获得长远的价值认同。"
      ),
      readingComp(
        "hsk9-s3-q4",
        "【汉越双语人才战略】随着区域全面经济伙伴关系协定（RCEP）深入实施，兼具精湛语言造诣与跨境供应链管理经验的复合型人才炙手可热。唯有坚持终身学习，在实战中不断复盘与沉淀，方能达到游刃有余的职业境界。",
        "[Hàn-Yuè shuāngyǔ réncái zhànlüè] Suízhe Qūyù Quánmiàn Jīngjì Huǒbàn Guānxi Xiédìng (RCEP) shēnrù shíshī, jiānjù jīngzhàn yǔyán zàoyì yǔ kuàjìng gōngyìngliàn guǎnlǐ jīngyàn de fùhéxíng réncái zhìshǒu-kěrè. Wéiyǒu jiānchí zhōngshēn xuéxí, zài shízhàn zhōng búduàn fùpán yǔ chéndiàn, fāngnéng dádào yóurèn-yǒuyú de zhíyè jìngjiè.",
        "[Chiến lược nhân tài song ngữ Hán - Việt] Cùng với việc Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) đi vào thực thi sâu rộng, nhân tài phức hợp vừa có trình độ ngôn ngữ tinh thâm vừa có kinh nghiệm quản lý chuỗi cung ứng xuyên biên giới trở nên cực kỳ săn đón. Chỉ có kiên trì học tập suốt đời, không ngừng đúc kết và lắng đọng trong thực chiến mới có thể đạt tới cảnh giới nghề nghiệp thành thục tự tại.",
        "Mẫu nhân tài phức hợp (复合型人才) nào đang cực kỳ được săn đón (炙手可热) khi hiệp định RCEP thực thi sâu rộng?",
        [
          "Nhân tài vừa có trình độ ngôn ngữ tinh thâm vừa có kinh nghiệm quản lý chuỗi cung ứng xuyên biên giới",
          "Người chỉ biết đọc Pinyin mà không biết chuyên ngành",
          "Người chỉ làm việc độc lập không giao tiếp",
          "Người không muốn học hỏi công nghệ mới",
        ],
        "Nhân tài vừa có trình độ ngôn ngữ tinh thâm vừa có kinh nghiệm quản lý chuỗi cung ứng xuyên biên giới",
        "兼具精湛语言造诣与跨境供应链管理经验的复合型人才炙手可热。"
      ),
    ],
  },
  {
    id: "hsk9-s4-writing-master-synthesis",
    stageId: 9,
    hskLevel: "HSK9",
    subDifficulty: "advanced",
    title: "Viết chữ Hán Thành ngữ HSK9, Sắp xếp Luận văn Đỉnh cao & Đặt 2 câu Học thuật",
    titleZh: "HSK9大师级成语书写与学术论文造句",
    titlePinyin: "HSK9 dàshījí chéngyǔ shūxiě yǔ xuéshù lùnwén zàojù",
    skillFocus: "writing",
    difficulty: "hard",
    estimatedMinutes: 45,
    recommendedChannelId: "writing-chinemaster",
    recommendedChannelName: "Tiếng Trung ChineMaster",
    youtubeUrl: "https://www.youtube.com/watch?v=mfDMIIGXefM",
    defaultSearchQuery: "Tiếng Trung ChineMaster luyện thi HSK 9 toàn diện",
    grammarNotesVi: [
      "Chúc mừng bạn bước vào buổi tổng kết Lộ trình Mức 0 → HSK 9! Ở cấp độ HSK9, câu văn viết kết hợp nhuần nhuyễn hư từ văn ngôn (唯有...方能..., 将...与...融会贯通) và thành ngữ 4 chữ chuẩn mực.",
    ],
    exercises: [
      writingStroke(
        "hsk9-s4-q1",
        "通",
        "tōng",
        "Thông suốt (trong 融会贯通 - 10 nét, bộ Sước 辶 viết sau cùng)",
        "Chữ 通 (10 nét): Viết chữ Dũng (甬 - 7 nét) bên trong trước, sau đó viết bộ Sước (辶 - 3 nét) bao đáy từ trái sang phải."
      ),
      writingStroke(
        "hsk9-s4-q2",
        "新",
        "xīn",
        "Đổi mới / Sáng tạo (trong 推陈出新, 创新 - 13 nét, bộ Cân 斤)",
        "Chữ 新 (13 nét) có kết cấu Trái - Phải: Bên trái viết chữ Thân (亲 = 立 + 木, 9 nét) trước, bên phải viết bộ Cân (斤: Phẩy, Phẩy, Ngang, Sổ - 4 nét) sau."
      ),
      writingOrder(
        "hsk9-s4-q3",
        "Sắp xếp câu luận văn HSK9: 'Phiên dịch cao cấp cần dung hợp thấu đáo kỹ năng ngôn ngữ với kiến thức nền tảng của ngành.'",
        ["融会贯通。", "与行业背景知识", "高级翻译需要将语言技巧"],
        "高级翻译需要将语言技巧与行业背景知识融会贯通。",
        "Gāojí fānyì xūyào jiāng yǔyán jìqiǎo yǔ hángyè bèijǐng zhīshi rónghuì-guàntōng.",
        "Chủ ngữ (高级翻译) + 需要将 + A 与 B + 融会贯通。"
      ),
      writingOrder(
        "hsk9-s4-q4",
        "Sắp xếp câu: 'Thương hiệu lâu đời chỉ có không ngừng đổi mới sáng tạo mới có thể chinh phục người tiêu dùng trẻ.'",
        ["才能赢得年轻消费者。", "只有不断推陈出新，", "老字号品牌"],
        "老字号品牌只有不断推陈出新，才能赢得年轻消费者。",
        "Lǎozìhào pǐnpái zhǐyǒu búduàn tuīchén-chūxīn, cáinéng yíngdé niánqīng xiāofèizhě.",
        "Chủ ngữ (老字号品牌) + 只有不断推陈出新 + 才能赢得年轻消费者。"
      ),
      writingTwoSentences(
        "hsk9-s4-q5",
        "融会贯通",
        "rónghuì-guàntōng",
        "Hiểu thấu đáo và vận dụng linh hoạt",
        "Đặt 2 câu hoàn chỉnh với thành ngữ 融会贯通 (Câu 1: Phương pháp học tiếng Trung từ HSK0 lên HSK9; Câu 2: Vận dụng kiến thức chuyên môn vào công việc/kinh doanh)."
      ),
    ],
  },
];
