import type { ReadingPassage } from "@/data/reading-passages";

export const READING_EXTRA_HSK9: ReadingPassage[] = [
  {
    id: "rp-ex-hsk9-1",
    level: "HSK9",
    subDifficulty: "basic",
    genre: "Khoa học & Đạo đức",
    title: "脑机接口临床突破背后的伦理边界探讨",
    titlePinyin: "Nǎojī jiēkǒu línchuáng tūpò bèihòu de lúnlǐ biānjiè tàntǎo",
    titleVi: "Thảo luận về ranh giới đạo đức đằng sau các đột phá lâm sàng của giao diện não - máy",
    contentZh:
      "随着柔性电极材料与神经信号解码算法的协同演进，侵入式与半侵入式脑机接口（BCI）技术已从实验室构想迈入临床试验阶段，使部分高位截瘫患者得以仅凭意念操控机械臂或实现屏幕打字，为神经康复医学带来了前所未有的曙光。然而，当硅基算力开始与人类最私密的神经活动直接耦合，其引发的伦理与法理拷问远超一般医疗器械范畴。首当其冲的是“神经隐私权”的界定难题：脑电信号不仅包含运动意图，还可能折射出受试者的情绪波动、潜意识偏好乃至健康隐疾，一旦此类高维生物数据被商业机构截留或滥用，个体最后的精神堡垒将荡然无存。其次，若未来脑机接口从“医疗修复”越界至“认知增强”，高昂的植入费用极可能催生生理层面的阶层固化，使社会不平等从财富分配延伸至记忆力与思维速度的先天鸿沟。因此，学界普遍呼吁在技术全面商用之前，必须确立“治疗优先、增强审慎”的国际伦理共识，并对神经数据的采集、加密与所有权归属实施最严格的法治约束。",
    contentPinyin:
      "Suízhe róuxìng diànjí cáiliào yǔ shénjīng xìnhào jiěmǎ suànfǎ de xiétóng yǎnjìn, qīnrùshì yǔ bàn qīnrùshì nǎojī jiēkǒu (BCI) jìshù yǐ cóng shíyànshì gòuxiǎng màirù línchuáng shìyàn jiēduàn, shǐ bùfen gāowèi jiétān huànzhě déyǐ jǐn píng yìniàn cāokòng jīxièbì huò shíxiàn píngmù dǎzì, wèi shénjīng kāngfù yīxué dàilái le qiánsuǒwèiyǒu de shǔguāng. Rán'ér, dāng guījī suànlì kāishǐ yǔ rénlèi zuì sīmì de shénjīng huódòng zhíjiē ǒuhé, qí yǐnfā de lúnlǐ yǔ fǎlǐ kǎowèn yuǎnchāo yìbān yīliáo qìxiè fànchóu. Shǒudāngqíchōng de shì 'shénjīng yǐnsīquán' de jièdìng nántí: nǎodiàn xìnhào bùjǐn bāohán yùndòng yìtú, hái kěnéng zhéshè chū shòushìzhě de qíngxù bōdòng, qiányìshí piānhào nǎizhì jiànkāng yǐnjí, yídàn cǐlèi gāowéi shēngwù shùjù bèi shāngyè jīgòu jiéliú huò lànyòng, gètǐ zuìhòu de jīngshén bǎolěi jiāng dàngránwúcún. Qícì, ruò wèilái nǎojī jiēkǒu cóng 'yīliáo xiūfù' yuèjiè zhì 'rènzhī zēngqiáng', gāo'áng de zhírù fèiyòng jí kěnéng cuīshēng shēnglǐ céngmiàn de jiēcéng gùhuà, shǐ shèhuì bùpíngděng cóng cáifù fēnpèi yánshēn zhì jìyìlì yǔ sīwéi sùdù de xiāntiān hónggōu. Yīncǐ, xuéjiè pǔbiàn hūyù zài jìshù quánmiàn shāngyòng zhīqián, bìxū quèlì 'zhìliáo yōuxiān, zēngqiáng shěnshèn' de guójì lúnlǐ gòngshí, bìng duì shénjīng shùjù de cǎijí, jiāmì yǔ suǒyǒuquán guīshǔ shíshī zuì yángé de fǎzhì yuēshù.",
    contentVi:
      "Cùng với sự tiến hóa đồng bộ của vật liệu điện cực mềm và thuật toán giải mã tín hiệu thần kinh, công nghệ giao diện não - máy (BCI) xâm lấn và bán xâm lấn đã bước từ ý tưởng phòng thí nghiệm sang giai đoạn thử nghiệm lâm sàng, giúp một số bệnh nhân liệt tứ chi có thể chỉ bằng ý nghĩ điều khiển cánh tay robot hoặc gõ chữ trên màn hình, mở ra tia hy vọng chưa từng có cho y học phục hồi thần kinh. Tuy nhiên, khi năng lực tính toán gốc silicon bắt đầu kết nối trực tiếp với hoạt động thần kinh riêng tư nhất của con người, những câu hỏi đạo đức và pháp lý đặt ra vượt xa phạm vi thiết bị y tế thông thường. Trước tiên là bài toán định nghĩa 'quyền riêng tư thần kinh': tín hiệu điện não không chỉ chứa ý định vận động mà còn có thể phản chiếu dao động cảm xúc, thiên hướng tiềm thức thậm chí bệnh lý ẩn giấu của người tham gia thử nghiệm; một khi loại dữ liệu sinh học đa chiều này bị tổ chức thương mại giữ lại hoặc lạm dụng, pháo đài tinh thần cuối cùng của cá nhân sẽ không còn tồn tại. Thứ hai, nếu tương lai BCI vượt ranh giới từ 'phục hồi y tế' sang 'tăng cường nhận thức', chi phí cấy ghép đắt đỏ rất dễ làm nảy sinh phân tầng giai cấp ở cấp độ sinh lý, đẩy bất bình đẳng xã hội từ phân phối tài sản sang hố ngăn về trí nhớ và tốc độ tư duy. Vì vậy, giới học thuật kêu gọi trước khi thương mại hóa toàn diện phải xác lập đồng thuận đạo đức quốc tế 'ưu tiên điều trị, thận trọng với tăng cường', đồng thời áp đặt ràng buộc pháp quyền nghiêm ngặt nhất đối với việc thu thập, mã hóa và quyền sở hữu dữ liệu thần kinh.",
    questions: [
      {
        id: "rp-ex-hsk9-1-q1",
        questionVi: "Bước tiến lâm sàng cụ thể của công nghệ giao diện não - máy (BCI) được nêu trong đoạn văn là gì?",
        options: [
          "Chữa khỏi hoàn toàn bệnh mất trí nhớ tuổi già",
          "Giúp một số bệnh nhân liệt cao điều khiển cánh tay robot hoặc gõ chữ trên màn hình chỉ bằng ý nghĩ",
          "Cho phép truyền suy nghĩ trực tiếp giữa hai người không cần nói chuyện",
          "Thay thế hoàn toàn thuốc gây mê trong phẫu thuật",
        ],
        correctAnswer: "Giúp một số bệnh nhân liệt cao điều khiển cánh tay robot hoặc gõ chữ trên màn hình chỉ bằng ý nghĩ",
        explanationVi: "Bài viết nêu: '使部分高位截瘫患者得以仅凭意念操控机械臂或实现屏幕打字'.",
      },
      {
        id: "rp-ex-hsk9-1-q2",
        questionVi: "Vì sao dữ liệu tín hiệu điện não lại đặc biệt nhạy cảm về mặt quyền riêng tư?",
        options: [
          "Vì dung lượng tệp dữ liệu quá lớn khó lưu trữ",
          "Vì ngoài ý định vận động, nó còn có thể hé lộ dao động cảm xúc, thiên hướng tiềm thức và bệnh lý ẩn giấu",
          "Vì tín hiệu này dễ bị nhiễu bởi sóng điện thoại",
          "Vì chỉ các công ty nước ngoài mới giải mã được",
        ],
        correctAnswer: "Vì ngoài ý định vận động, nó còn có thể hé lộ dao động cảm xúc, thiên hướng tiềm thức và bệnh lý ẩn giấu",
        explanationVi: "Đoạn văn phân tích: '脑电信号不仅包含运动意图，还可能折射出受试者的情绪波动、潜意识偏好乃至健康隐疾'.",
      },
      {
        id: "rp-ex-hsk9-1-q3",
        questionVi: "Rủi ro xã hội nào có thể xảy ra nếu BCI mở rộng từ 'phục hồi y tế' sang 'tăng cường nhận thức'?",
        options: [
          "Tất cả mọi người đều có trí nhớ giống hệt nhau",
          "Chi phí cấy ghép đắt đỏ có thể gây phân tầng giai cấp ở cấp độ sinh lý về trí nhớ và tốc độ tư duy",
          "Hệ thống trường học đại học sẽ bị xóa bỏ",
          "Các bác sĩ thần kinh sẽ mất việc làm",
        ],
        correctAnswer: "Chi phí cấy ghép đắt đỏ có thể gây phân tầng giai cấp ở cấp độ sinh lý về trí nhớ và tốc độ tư duy",
        explanationVi: "Bài cảnh báo: '高昂的植入费用极可能催生生理层面的阶层固化，使社会不平等从财富分配延伸至记忆力与思维速度的先天鸿沟'.",
      },
      {
        id: "rp-ex-hsk9-1-q4",
        questionVi: "Nguyên tắc đạo đức quốc tế nào được giới học thuật kêu gọi thiết lập trước khi thương mại hóa rộng rãi BCI?",
        options: [
          "Thương mại hóa tự do không cần kiểm duyệt",
          "'Ưu tiên điều trị, thận trọng với tăng cường' (治疗优先、增强审慎)",
          "Cấm tuyệt đối mọi nghiên cứu cấy ghép trên người",
          "Chỉ cho phép sử dụng trong lĩnh vực giải trí",
        ],
        correctAnswer: "'Ưu tiên điều trị, thận trọng với tăng cường' (治疗优先、增强审慎)",
        explanationVi: "Câu cuối viết: '必须确立“治疗优先、增强审慎”的国际伦理共识'.",
      },
      {
        id: "rp-ex-hsk9-1-q5",
        questionVi: "Cụm từ '个体最后的精神堡垒将荡然无存' ám chỉ điều gì?",
        options: [
          "Con người sẽ mất hoàn toàn không gian riêng tư nội tâm sâu kín nhất",
          "Bệnh viện sẽ phải đóng cửa khoa thần kinh",
          "Trí tuệ nhân tạo sẽ thay thế toàn bộ cảm xúc con người",
          "Các luật sư sẽ không thể bảo vệ bằng sáng chế y tế",
        ],
        correctAnswer: "Con người sẽ mất hoàn toàn không gian riêng tư nội tâm sâu kín nhất",
        explanationVi: "'精神堡垒' (pháo đài tinh thần) chỉ thế giới nội tâm và suy nghĩ riêng tư nhất của mỗi người; '荡然无存' nghĩa là biến mất không còn dấu vết.",
      },
    ],
  },
  {
    id: "rp-ex-hsk9-2",
    level: "HSK9",
    subDifficulty: "basic",
    genre: "Pháp luật & Thương mại",
    title: "国际商事仲裁中“不可抗力”条款的司法认定尺度",
    titlePinyin: "Guójì shāngshì zhòngcái zhōng 'bùkěkànglì' tiáokuǎn de sīfǎ rèndìng chǐdù",
    titleVi: "Tiêu chuẩn thẩm định tư pháp đối với điều khoản 'bất khả kháng' trong trọng tài thương mại quốc tế",
    contentZh:
      "在跨国贸易纠纷频发的当下，不少履约受阻的当事方倾向于援引合同中的“不可抗力”条款以谋求免责。然而，国际商事仲裁庭对此类主张的审查历来极为严苛，绝非只要遭遇市场剧烈波动或供应链中断即可自动免除违约责任。以《联合国国际货物销售合同公约》（CISG）第七十九条及英美普通法判例为例，主张方必须同时满足三项核心要件：其一，障碍事件在订立合同时属于不可预见；其二，该事件完全超出当事方的合理控制范围；其三，纵然采取一切商业上合理的替代措施，当事方仍客观上无法克服该障碍。值得注意的是，原材料价格暴涨、汇率极端贬值或原定分包商破产，虽然会大幅吞噬卖方利润乃至造成巨额亏损，但通常仅被界定为“商业履行艰难”而非法律意义上的不可抗力，仲裁庭一般不会据此免除交货义务。因此，资深涉外法务往往建议企业在起草长期供货合同时，除列明不可抗力清单外，还应并行订立“情势变更与价格重谈条款”，以便在极端宏观冲击下为双方保留有序协商而非诉诸仲裁的制度出口。",
    contentPinyin:
      "Zài kuàguó màoyì jiūfēn pínfā de dāngxià, bùshǎo lǚyuē shòuzǔ de dāngshìfāng qīngxiàng yú yuányǐn hétong zhōng de 'bùkěkànglì' tiáokuǎn yǐ móuqiú miǎnzé. Rán'ér, guójì shāngshì zhòngcáitíng duì cǐlèi zhǔzhāng de shěnchá lìlái jíwéi yánkē, juéfēi zhǐyào zāoyù shìchǎng jùliè bōdòng huò gōngyìngliàn zhōngduàn jí kě zìdòng miǎnchú wéiyuē zérèn. Yǐ «Liánhéguó Guójì Huòwù Xiāoshòu Hétong Gōngyuē» (CISG) dì qīshíjiǔ tiáo jí Yīng-Měi pǔtōngfǎ pànlì wéilì, zhǔzhāngfāng bìxū tóngshí mǎnzú sān xiàng héxīn yàojiàn: qí yī, zhàng'ài shìjiàn zài dìnglì hétong shí shǔyú bùkě yùjiàn; qí èr, gāi shìjiàn wánquán chāochū dāngshìfāng de hélǐ kòngzhì fànwéi; qí sān, zòngrán cǎiqǔ yíqiè shāngyè shàng hélǐ de tìdài cuòshī, dāngshìfāng réng kèguān shàng wúfǎ kèfú gāi zhàng'ài. Zhídé zhùyì de shì, yuáncáiliào jiàgé bàozhǎng, huìlǜ jíduān biǎnzhí huò yuándìng fēnbāoshāng pòchǎn, suīrán huì dàfú tūnshì màifāng lìrùn nǎizhì zàochéng jù'é kuīsǔn, dàn tōngcháng jǐn bèi jièdìng wéi 'shāngyè lǚxíng jiānnán' ér fēi fǎlǜ yìyì shàng de bùkěkànglì, zhòngcáitíng yìbān búhuì jùcǐ miǎnchú jiāohuò yìwù. Yīncǐ, zīshēn shèwài fǎwù wǎngwǎng jiànyì qǐyè zài qǐcǎo chángqī gōnghuò hétong shí, chú lièmíng bùkěkànglì qīngdān wài, hái yīng bìngxíng dìnglì 'qíngshì biàngēng yǔ jiàgé chóngtán tiáokuǎn', yǐbiàn zài jíduān hóngguān chōngjī xià wèi shuāngfāng bǎoliú yǒuxù xiéshāng ér fēi sùzhū zhòngcái de zhìdù chūkǒu.",
    contentVi:
      "Trong bối cảnh tranh chấp thương mại xuyên quốc gia diễn ra dày đặc, không ít bên gặp trở ngại thực hiện hợp đồng có xu hướng viện dẫn điều khoản 'bất khả kháng' để xin miễn trách nhiệm. Tuy nhiên, hội đồng trọng tài thương mại quốc tế xưa nay thẩm định yêu cầu này cực kỳ khắt khe, tuyệt đối không phải cứ gặp biến động thị trường dữ dội hay gián đoạn chuỗi cung ứng là tự động được miễn trách nhiệm vi phạm. Lấy Điều 79 Công ước Viên về Hợp đồng Mua bán Hàng hóa Quốc tế (CISG) và án lệ thông luật Anh - Mỹ làm ví dụ, bên viện dẫn phải đáp ứng đồng thời ba điều kiện cốt lõi: thứ nhất, sự kiện trở ngại là không thể lường trước tại thời điểm giao kết hợp đồng; thứ hai, sự kiện đó hoàn toàn vượt ngoài phạm vi kiểm soát hợp lý của đương sự; thứ ba, dù đã áp dụng mọi biện pháp thay thế hợp lý về mặt thương mại, đương sự vẫn không thể khắc phục một cách khách quan. Đáng chú ý là giá nguyên liệu tăng vọt, tỷ giá mất giá cực đoan hoặc nhà thầu phụ ban đầu phá sản, tuy có thể bào mòn mạnh lợi nhuận thậm chí gây thua lỗ lớn cho bên bán, nhưng thường chỉ được xếp vào diện 'khó khăn thương mại khi thực hiện hợp đồng' chứ không phải bất khả kháng theo nghĩa pháp lý, và hội đồng trọng tài thường không căn cứ vào đó để miễn nghĩa vụ giao hàng. Bởi vậy, luật sư pháp chế quốc tế dày dạn thường khuyên doanh nghiệp khi soạn hợp đồng cung ứng dài hạn, ngoài danh mục bất khả kháng cần quy định song song 'điều khoản thay đổi hoàn cảnh và đàm phán lại giá' để giữ lối thoát thể chế cho hai bên thương lượng có trật tự thay vì kéo nhau ra trọng tài khi gặp cú sốc vĩ mô cực đoan.",
    questions: [
      {
        id: "rp-ex-hsk9-2-q1",
        questionVi: "Theo Điều 79 CISG được nêu trong bài, điều kiện nào KHÔNG nằm trong ba yêu cầu cốt lõi để chứng minh bất khả kháng?",
        options: [
          "Sự kiện không thể lường trước tại thời điểm ký hợp đồng",
          "Sự kiện hoàn toàn vượt ngoài tầm kiểm soát hợp lý của đương sự",
          "Không thể khắc phục khách quan dù đã áp dụng mọi biện pháp thay thế hợp lý",
          "Sự kiện làm giảm ít nhất 20% lợi nhuận dự kiến của bên bán",
        ],
        correctAnswer: "Sự kiện làm giảm ít nhất 20% lợi nhuận dự kiến của bên bán",
        explanationVi: "Bài chỉ nêu 3 điều kiện: '不可预见', '超出当事方的合理控制范围', và '采取一切商业上合理的替代措施...仍客观上无法克服'.",
      },
      {
        id: "rp-ex-hsk9-2-q2",
        questionVi: "Giá nguyên liệu tăng vọt hoặc nhà thầu phụ phá sản thường được trọng tài quốc tế phân loại là gì?",
        options: [
          "Bất khả kháng tuyệt đối, được miễn giao hàng ngay lập tức",
          "'Khó khăn thương mại khi thực hiện hợp đồng' (商业履行艰难), thường không được miễn nghĩa vụ giao hàng",
          "Lỗi cố ý của bên mua hàng",
          "Căn cứ tự động hủy bỏ hợp đồng không cần thông báo",
        ],
        correctAnswer: "'Khó khăn thương mại khi thực hiện hợp đồng' (商业履行艰难), thường không được miễn nghĩa vụ giao hàng",
        explanationVi: "Đoạn văn viết: '通常仅被界定为“商业履行艰难”而非法律意义上的不可抗力，仲裁庭一般不会据此免除交货义务'.",
      },
      {
        id: "rp-ex-hsk9-2-q3",
        questionVi: "Thái độ thẩm định của hội đồng trọng tài thương mại quốc tế đối với yêu cầu viện dẫn bất khả kháng là gì?",
        options: [
          "Khá dễ dãi nếu có xác nhận của phòng thương mại địa phương",
          "Cực kỳ nghiêm ngặt, đòi hỏi đáp ứng đồng thời đủ các điều kiện pháp lý",
          "Luôn ưu tiên bảo vệ bên xuất khẩu",
          "Chỉ áp dụng cho các hợp đồng có giá trị trên 10 triệu USD",
        ],
        correctAnswer: "Cực kỳ nghiêm ngặt, đòi hỏi đáp ứng đồng thời đủ các điều kiện pháp lý",
        explanationVi: "Bài nêu rõ: '国际商事仲裁庭对此类主张的审查历来极为严苛'.",
      },
      {
        id: "rp-ex-hsk9-2-q4",
        questionVi: "Chuyên gia pháp chế quốc tế khuyên doanh nghiệp nên bổ sung điều khoản nào song song với điều khoản bất khả kháng trong hợp đồng dài hạn?",
        options: [
          "Điều khoản cấm khiếu nại chất lượng sau khi nhận hàng",
          "'Điều khoản thay đổi hoàn cảnh và đàm phán lại giá' (情势变更与价格重谈条款)",
          "Điều khoản thanh toán hoàn toàn bằng tiền mã hóa",
          "Điều khoản chuyển toàn bộ rủi ro vận tải cho bên bảo hiểm",
        ],
        correctAnswer: "'Điều khoản thay đổi hoàn cảnh và đàm phán lại giá' (情势变更与价格重谈条款)",
        explanationVi: "Câu cuối khuyến nghị: '还应并行订立“情势变更与价格重谈条款”'.",
      },
      {
        id: "rp-ex-hsk9-2-q5",
        questionVi: "Mục đích của việc bổ sung điều khoản nói trên là gì?",
        options: [
          "Giúp bên bán tự ý tăng giá bất cứ lúc nào",
          "Giữ lối thoát thể chế để hai bên thương lượng có trật tự khi gặp cú sốc vĩ mô cực đoan thay vì đưa nhau ra trọng tài",
          "Rút ngắn thời gian xét xử trọng tài xuống còn 1 tháng",
          "Thay thế hoàn toàn vai trò của tòa án quốc gia",
        ],
        correctAnswer: "Giữ lối thoát thể chế để hai bên thương lượng có trật tự khi gặp cú sốc vĩ mô cực đoan thay vì đưa nhau ra trọng tài",
        explanationVi: "Bài viết giải thích: '以便在极端宏观冲击下为双方保留有序协商而非诉诸仲裁的制度出口'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk9-3",
    level: "HSK9",
    subDifficulty: "advanced",
    genre: "Văn hóa & Ngôn ngữ học",
    title: "数字时代汉字书写能力退化与“提笔忘字”现象反思",
    titlePinyin: "Shùzì shídài Hànzì shūxiě nénglì tuìhuà yǔ 'tíbǐ wàngzì' xiànxiàng fǎnsī",
    titleVi: "Suy ngẫm về sự suy giảm năng lực viết tay chữ Hán và hiện tượng 'nhấc bút quên chữ' thời đại số",
    contentZh:
      "在拼音输入法与语音转文字高度普及的当代社会，“提笔忘字”早已不再是个别现象，而是横跨不同年龄层的普遍文化焦虑。认知心理学研究表明，键盘拼音输入本质上是一种基于语音线索的“再认”过程，大脑只需从候选词条中视觉筛选目标字形即可；而传统手写则属于深度的“回忆与运动编码”过程，需要精准调动字体的偏旁结构、笔画顺序与空间比例记忆。长期以打字替代手写，必然导致大脑中负责字形精细提取的神经通路因缺乏激活而日趋钝化。然而，语言学界对此亦存在辩证声音：汉字的核心生命力本就在于承载语义与维系文化共同体，从甲骨刀刻、毛笔纸书到激光照排再到如今的屏幕输入，书写介质的迭代从未削弱汉语的表达张力，反而极大降低了知识传播门槛。真正值得警惕的，或许并非手写频率的自然回落，而是随之而来的对汉字构形理据、词源脉络及精微修辞感知的整体荒疏——唯有在享受数字输入高效的同时，于基础教育与审美生活中有意识地保留手写与深度阅读的空间，方能在工具理性与文化根脉之间维系从容的平衡。",
    contentPinyin:
      "Zài pīnyīn shūrùfǎ yǔ yǔyīn zhuǎn wénzì gāodù pǔjí de dāngdài shèhuì, 'tíbǐ wàngzì' zǎoyǐ búzài shì gèbié xiànxiàng, érshì héngkuà bùtóng niánlíngcéng de pǔbiàn wénhuà jiāolǜ. Rènzhī xīnlǐxué yánjiū biǎomíng, jiànpán pīnyīn shūrù běnzhì shàng shì yì zhǒng jīyú yǔyīn xiànsuǒ de 'zàirèn' guòchéng, dànǎo zhǐxū cóng hòuxuǎn cítiáo zhōng shìjué shāixuǎn mùbiāo zìxíng jí kě; ér chuántǒng shǒuxiě zé shǔyú shēndù de 'huíyì yǔ yùndòng biānmǎ' guòchéng, xūyào jīngzhǔn diàodòng zìtǐ de piānpáng jiégòu, bǐhuà shùnxù yǔ kōngjiān bǐlì jìyì. Chángqī yǐ dǎzì tìdài shǒuxiě, bìrán dǎozhì dànǎo zhōng fùzé zìxíng jīngxì tíqǔ de shénjīng tōnglù yīn quēfá jīhuó ér rìqū dùnhuà. Rán'ér, yǔyánxuéjiè duì cǐ yì cúnzài biànzhèng shēngyīn: Hànzì de héxīn shēngmìnglì běn jiù zàiyú chéngzài yǔyì yǔ wéixì wénhuà gòngtóngtǐ, cóng jiǎgǔ dāokè, máobǐ zhǐshū dào jīguāng zhàopái zài dào rújīn de píngmù shūrù, shūxiě jièzhì de diédài cóngwèi xuēruò Hànyǔ de biǎodá zhānglì, fǎn'ér jídà jiàngdī le zhīshi chuánbō ménkǎn. Zhēnzhèng zhídé jǐngtì de, huòxǔ bìngfēi shǒuxiě pínlǜ de zìrán huíluò, érshì suízhī érlái de duì Hànzì gòuxíng lǐjù, cíyuán màiluò jí jīngwēi xiūcí gǎnzhī de zhěngtǐ huāngshū — wéiyǒu zài xiǎngshòu shùzì shūrù gāoxiào de tóngshí, yú jīchǔ jiàoyù yǔ shěnměi shēnghuó zhōng yǒu yìshí de bǎoliú shǒuxiě yǔ shēndù yuèdú de kōngjiān, fāngnéng zài gōngjù lǐxìng yǔ wénhuà gēnmài zhījiān wéixì cóngróng de pínghéng.",
    contentVi:
      "Trong xã hội đương đại nơi bộ gõ phiên âm và chuyển giọng nói thành văn bản phổ biến rộng khắp, 'nhấc bút quên chữ' từ lâu không còn là hiện tượng cá biệt mà trở thành nỗi lo âu văn hóa phổ biến xuyên qua nhiều lứa tuổi. Nghiên cứu tâm lý học nhận thức chỉ ra rằng gõ phiên âm trên bàn phím về bản chất là quá trình 'nhận diện lại' dựa trên manh mối âm thanh, bộ não chỉ cần dùng thị giác chọn mặt chữ mục tiêu từ danh sách gợi ý; trong khi viết tay truyền thống thuộc quá trình 'hồi tưởng và mã hóa vận động' sâu sắc, đòi hỏi huy động chính xác ký ức về cấu trúc bộ thủ, thứ tự nét và tỷ lệ không gian của chữ. Thay thế viết tay bằng đánh máy lâu dài tất yếu khiến các đường dẫn thần kinh phụ trách truy xuất chi tiết hình chữ ngày càng chai lì do ít được kích hoạt. Tuy nhiên, giới ngôn ngữ học cũng có góc nhìn biện chứng: sức sống cốt lõi của chữ Hán vốn nằm ở việc chuyên chở ngữ nghĩa và gắn kết cộng đồng văn hóa; từ khắc dao trên giáp cốt, bút lông giấy mực đến chế bản quang học rồi gõ màn hình ngày nay, sự thay đổi phương tiện ghi chép chưa từng làm suy yếu sức biểu đạt của tiếng Hán mà trái lại hạ thấp mạnh mẽ rào cản truyền bá tri thức. Điều thực sự đáng cảnh giác có lẽ không phải sự sụt giảm tự nhiên của tần suất viết tay, mà là sự mai một tổng thể đi kèm đối với lý giải cấu tạo chữ, mạch từ nguyên và cảm thụ tu từ tinh tế — chỉ khi vừa tận hưởng hiệu suất gõ số vừa có ý thức giữ lại không gian viết tay và đọc sâu trong giáo dục cơ bản cũng như đời sống thẩm mỹ, ta mới duy trì được sự cân bằng ung dung giữa lý tính công cụ và cội rễ văn hóa.",
    questions: [
      {
        id: "rp-ex-hsk9-3-q1",
        questionVi: "Theo tâm lý học nhận thức trong bài, sự khác biệt bản chất giữa gõ phiên âm và viết tay truyền thống là gì?",
        options: [
          "Gõ phiên âm tốn nhiều năng lượng não bộ hơn viết tay",
          "Gõ phiên âm là quá trình 'nhận diện lại' qua manh mối âm thanh, còn viết tay là 'hồi tưởng và mã hóa vận động' sâu",
          "Viết tay chỉ cần nhớ âm đọc, không cần nhớ cấu trúc bộ thủ",
          "Cả hai đều kích hoạt cùng một vùng thần kinh như nhau",
        ],
        correctAnswer: "Gõ phiên âm là quá trình 'nhận diện lại' qua manh mối âm thanh, còn viết tay là 'hồi tưởng và mã hóa vận động' sâu",
        explanationVi: "Bài viết đối chiếu rõ: '键盘拼音输入本质上是一种基于语音线索的“再认”过程...而传统手写则属于深度的“回忆与运动编码”过程'.",
      },
      {
        id: "rp-ex-hsk9-3-q2",
        questionVi: "Góc nhìn biện chứng của giới ngôn ngữ học về lịch sử thay đổi phương tiện viết chữ Hán là gì?",
        options: [
          "Chữ Hán chỉ giữ được vẻ đẹp khi viết bằng bút lông",
          "Sự thay đổi phương tiện từ giáp cốt đến màn hình chưa từng làm yếu sức biểu đạt mà còn hạ thấp rào cản truyền bá tri thức",
          "Bộ gõ phiên âm đang dần thay thế hoàn toàn hệ thống chữ Hán",
          "In ấn hiện đại đã làm giảm số lượng từ vựng tiếng Trung",
        ],
        correctAnswer: "Sự thay đổi phương tiện từ giáp cốt đến màn hình chưa từng làm yếu sức biểu đạt mà còn hạ thấp rào cản truyền bá tri thức",
        explanationVi: "Đoạn văn nêu: '书写介质的迭代从未削弱汉语的表达张力，反而极大降低了知识传播门槛'.",
      },
      {
        id: "rp-ex-hsk9-3-q3",
        questionVi: "Theo tác giả, điều thực sự đáng cảnh giác nhất phía sau hiện tượng giảm tần suất viết tay là gì?",
        options: [
          "Ngành sản xuất bút và giấy bị thua lỗ",
          "Sự mai một tổng thể đối với lý giải cấu tạo chữ Hán, mạch từ nguyên và cảm thụ tu từ tinh tế",
          "Tốc độ gõ văn bản trên điện thoại chưa đủ nhanh",
          "Trẻ em không còn thích học ngoại ngữ",
        ],
        correctAnswer: "Sự mai một tổng thể đối với lý giải cấu tạo chữ Hán, mạch từ nguyên và cảm thụ tu từ tinh tế",
        explanationVi: "Bài viết chỉ rõ: '真正值得警惕的...是随之而来的对汉字构形理据、词源脉络及精微修辞感知的整体荒疏'.",
      },
      {
        id: "rp-ex-hsk9-3-q4",
        questionVi: "Tác giả đề xuất giải pháp cân bằng nào giữa hiệu suất công nghệ số và cội rễ văn hóa?",
        options: [
          "Cấm sử dụng bộ gõ phiên âm trong các trường đại học",
          "Chủ động dành không gian cho viết tay và đọc sâu trong giáo dục cơ bản và đời sống thẩm mỹ song song với việc dùng công cụ số",
          "Chuyển toàn bộ tài liệu hành chính sang viết tay",
          "Bỏ hoàn toàn việc dạy viết chữ Hán cho học sinh tiểu học",
        ],
        correctAnswer: "Chủ động dành không gian cho viết tay và đọc sâu trong giáo dục cơ bản và đời sống thẩm mỹ song song với việc dùng công cụ số",
        explanationVi: "Câu cuối viết: '在享受数字输入高效的同时，于基础教育与审美生活中有意识地保留手写与深度阅读的空间'.",
      },
      {
        id: "rp-ex-hsk9-3-q5",
        questionVi: "Giọng điệu tổng thể của bài viết đối với hiện tượng 'nhấc bút quên chữ' là gì?",
        options: [
          "Hoảng loạn và cực đoan phản đối công nghệ số",
          "Biện chứng, khách quan và sâu sắc",
          "Hài hước, châm biếm người trẻ lười học",
          "Thờ ơ, cho rằng việc quên chữ hoàn toàn không đáng quan tâm",
        ],
        correctAnswer: "Biện chứng, khách quan và sâu sắc",
        explanationVi: "Bài vừa phân tích cơ chế tâm lý nhận thức vừa đưa ra '辩证声音' của ngôn ngữ học và đề xuất sự cân bằng '从容的平衡'.",
      },
    ],
  },
  {
    id: "rp-ex-hsk9-4",
    level: "HSK9",
    subDifficulty: "advanced",
    genre: "Kinh tế vĩ mô & Năng lượng",
    title: "新型电力系统转型中的储能瓶颈与市场机制创新",
    titlePinyin: "Xīnxíng diànlì xìtǒng zhuǎnxíng zhōng de chǔnéng píngjǐng yǔ shìchǎng jīzhì chuàngxīn",
    titleVi: "Nút thắt lưu trữ năng lượng và đổi mới cơ chế thị trường trong chuyển đổi hệ thống điện kiểu mới",
    contentZh:
      "随着风电、光伏装机容量在能源结构中的占比迅速攀升，中国及全球主要经济体正迈入以新能源为主体的新型电力系统建设深水区。然而，风光发电天然具备显著的间歇性与波动性——正午光照充足时电网频现“弃光”冗余，而傍晚用电高峰来临时出力又骤然回落，这种发用电时空的剧烈错配对电网频率稳定构成了严峻考验。作为平抑波动的核心调节手段，抽水蓄能与电化学储能近年虽呈爆发式增长，但在实际运营中却普遍面临“建而不用”或“收益模式单一”的尴尬：由于部分地区峰谷电价差尚未充分拉大，且辅助服务市场定价机制不够完善，独立储能电站难以通过调峰、调频获取覆盖高昂初始投资的稳定回报。能源经济学家指出，破解储能商业化困局不能仅靠行政强制配储，而应加快构建多层次现货电力市场与容量补偿机制，并借助虚拟电厂技术聚合分布式光伏、电动汽车充电桩及工业可中断负荷，以精准的价格信号引导社会资本投向真正具备高效率与长时调节能力的储能技术路线。",
    contentPinyin:
      "Suízhe fēngdiàn, guāngfú zhuāngjī róngliàng zài néngyuán jiégòu zhōng de zhànbǐ xùnsù pānshēng, Zhōngguó jí quánqiú zhǔyào jīngjìtǐ zhèng màirù yǐ xīn néngyuán wéi zhǔtǐ de xīnxíng diànlì xìtǒng jiànshè shēnshuǐqū. Rán'ér, fēngguāng fādiàn tiānrán jùbèi xiǎnzhù de jiànxiēxìng yǔ bōdòngxìng — zhèngwǔ guāngzhào chōngzú shí diànwǎng pínxiàn 'qìguāng' rǒngyú, ér bàngwǎn yòngdiàn gāofēng láilín shí chūlì yòu zhòurán huíluò, zhè zhǒng fā-yòngdiàn shíkōng de jùliè cuòpèi duì diànwǎng pínlǜ wěndìng gòuchéng le yánjùn kǎoyàn. Zuòwéi píngyì bōdòng de héxīn tiáojié shǒuduàn, chōushuǐ xùnéng yǔ diànhuàxué chǔnéng jìnnián suī chéng bàofāshì zēngzhǎng, dàn zài shíjì yùnyíng zhōng què pǔbiàn miànlín 'jiàn ér búyòng' huò 'shōuyì móshì dānyī' de gāngà: yóuyú bùfen dìqū fēnggǔ diànjiàchā shàngwèi chōngfèn lādà, qiě fǔzhù fúwù shìchǎng dìngjià jīzhì búgòu wánshàn, dúlì chǔnéng diànzhàn nányǐ tōngguò tiáofēng, tiáopín huòqǔ fùgài gāo'áng chūshǐ tóuzī de wěndìng huíbào. Néngyuán jīngjìxuéjiā zhǐchū, pòjiě chǔnéng shāngyèhuà kùnjú bùnéng jǐn kào xíngzhèng qiángzhì pèichǔ, ér yīng jiākuài gòujiàn duō céngcì xiànhuò diànlì shìchǎng yǔ róngliàng bǔcháng jīzhì, bìng jièzhù xūnǐ diànchǎng jìshù jùhé fēnbùshì guāngfú, diàndòng qìchē chōngdiànzhuāng jí gōngyè kě zhōngduàn fùhè, yǐ jīngzhǔn de jiàgé xìnhào yǐndǎo shèhuì zīběn tóuxiàng zhēnzhèng jùbèi gāo xiàolǜ yǔ chángshí tiáojié nénglì de chǔnéng jìshù lùxiàn.",
    contentVi:
      "Cùng với tỷ trọng công suất lắp đặt điện gió và điện mặt trời tăng vọt trong cơ cấu năng lượng, Trung Quốc và các nền kinh tế lớn toàn cầu đang bước vào giai đoạn chiều sâu của việc xây dựng hệ thống điện kiểu mới lấy năng lượng tái tạo làm chủ đạo. Tuy nhiên, điện gió và điện mặt trời vốn mang tính gián đoạn và biến động rõ rệt — buổi trưa nắng gắt lưới điện thường xuyên dư thừa phải 'cắt giảm điện mặt trời', còn chiều tối khi cao điểm tiêu thụ ập tới thì công suất phát lại sụt giảm đột ngột; sự lệch pha gay gắt về thời gian và không gian giữa phát và dùng điện này đặt ra thử thách khắc nghiệt cho ổn định tần số lưới điện. Là phương tiện điều tiết cốt lõi nhằm làm phẳng dao động, thủy điện tích năng và lưu trữ điện hóa vài năm gần đây tuy tăng trưởng bùng nổ nhưng trong vận hành thực tế lại phổ biến cảnh lúng túng 'xây xong ít dùng' hoặc 'mô hình doanh thu đơn điệu': do chênh lệch giá điện giờ cao điểm - thấp điểm ở một số địa phương chưa đủ rộng và cơ chế định giá thị trường dịch vụ phụ trợ chưa hoàn thiện, các trạm lưu trữ độc lập khó thu được lợi nhuận ổn định bù đắp vốn đầu tư ban đầu rất lớn thông qua điều đỉnh, điều tần. Các nhà kinh tế năng lượng chỉ ra rằng để tháo gỡ bài toán thương mại hóa lưu trữ năng lượng không thể chỉ dựa vào mệnh lệnh hành chính ép lắp đặt, mà cần đẩy nhanh xây dựng thị trường điện giao ngay đa tầng cùng cơ chế bù đắp công suất, đồng thời ứng dụng công nghệ nhà máy điện ảo để kết nối điện mặt trời phân tán, trụ sạc xe điện và phụ tải công nghiệp có thể cắt giảm, dùng tín hiệu giá chuẩn xác dẫn dắt vốn xã hội chảy vào các tuyến công nghệ lưu trữ thực sự hiệu suất cao và có năng lực điều tiết dài hạn.",
    questions: [
      {
        id: "rp-ex-hsk9-4-q1",
        questionVi: "Thách thức kỹ thuật lớn nhất mà điện gió và điện mặt trời gây ra cho lưới điện là gì?",
        options: [
          "Chi phí lắp đặt tấm pin mặt trời tăng liên tục",
          "Tính gián đoạn và biến động mạnh, gây lệch pha thời gian - không gian giữa lúc phát và lúc tiêu thụ cao điểm",
          "Không thể truyền tải điện đi xa quá 100 km",
          "Gây ô nhiễm tiếng ồn nghiêm trọng tại các đô thị",
        ],
        correctAnswer: "Tính gián đoạn và biến động mạnh, gây lệch pha thời gian - không gian giữa lúc phát và lúc tiêu thụ cao điểm",
        explanationVi: "Bài nêu: '风光发电天然具备显著的间歇性与波动性...这种发用电时空的剧烈错配对电网频率稳定构成了严峻考验'.",
      },
      {
        id: "rp-ex-hsk9-4-q2",
        questionVi: "Vì sao nhiều trạm lưu trữ năng lượng độc lập hiện rơi vào tình cảnh 'xây xong ít dùng' hoặc khó thu hồi vốn?",
        options: [
          "Vì công nghệ pin lưu trữ chưa thể vận hành ngoài trời",
          "Vì chênh lệch giá điện cao điểm - thấp điểm ở một số nơi chưa đủ lớn và cơ chế định giá dịch vụ phụ trợ chưa hoàn thiện",
          "Vì người dân không muốn sử dụng điện mặt trời",
          "Vì nhà nước cấm trạm lưu trữ bán điện lên lưới",
        ],
        correctAnswer: "Vì chênh lệch giá điện cao điểm - thấp điểm ở một số nơi chưa đủ lớn và cơ chế định giá dịch vụ phụ trợ chưa hoàn thiện",
        explanationVi: "Đoạn văn giải thích: '由于部分地区峰谷电价差尚未充分拉大，且辅助服务市场定价机制不够完善，独立储能电站难以...获取覆盖高昂初始投资的稳定回报'.",
      },
      {
        id: "rp-ex-hsk9-4-q3",
        questionVi: "Theo các nhà kinh tế năng lượng, biện pháp nào là KHÔNG đủ để tháo gỡ bài toán thương mại hóa lưu trữ năng lượng?",
        options: [
          "Xây dựng thị trường điện giao ngay đa tầng",
          "Chỉ dựa vào mệnh lệnh hành chính bắt buộc lắp đặt lưu trữ (行政强制配储)",
          "Thiết lập cơ chế bù đắp công suất",
          "Sử dụng tín hiệu giá chuẩn xác để dẫn dắt vốn xã hội",
        ],
        correctAnswer: "Chỉ dựa vào mệnh lệnh hành chính bắt buộc lắp đặt lưu trữ (行政强制配储)",
        explanationVi: "Bài khẳng định: '破解储能商业化困局不能仅靠行政强制配储'.",
      },
      {
        id: "rp-ex-hsk9-4-q4",
        questionVi: "Công nghệ 'nhà máy điện ảo' (虚拟电厂) trong bài được dùng để tích hợp những nguồn lực phân tán nào?",
        options: [
          "Nhà máy điện hạt nhân và mỏ than",
          "Điện mặt trời phân tán, trụ sạc xe điện và phụ tải công nghiệp có thể cắt giảm",
          "Các đập thủy điện lớn ở vùng núi",
          "Máy phát điện diesel dự phòng của bệnh viện",
        ],
        correctAnswer: "Điện mặt trời phân tán, trụ sạc xe điện và phụ tải công nghiệp có thể cắt giảm",
        explanationVi: "Câu cuối liệt kê: '借助虚拟电厂技术聚合分布式光伏、电动汽车充电桩及工业可中断负荷'.",
      },
      {
        id: "rp-ex-hsk9-4-q5",
        questionVi: "Thuật ngữ '弃光' (cắt giảm/bỏ phí điện mặt trời) trong đoạn văn xảy ra vào thời điểm nào?",
        options: [
          "Vào ban đêm khi không có ánh sáng mặt trời",
          "Vào buổi trưa khi nắng gắt khiến lượng điện phát ra dư thừa vượt nhu cầu lưới",
          "Vào mùa đông khi tuyết phủ kín tấm pin",
          "Vào buổi tối giờ cao điểm tiêu thụ điện",
        ],
        correctAnswer: "Vào buổi trưa khi nắng gắt khiến lượng điện phát ra dư thừa vượt nhu cầu lưới",
        explanationVi: "Bài viết ghi rõ: '正午光照充足时电网频现“弃光”冗余'.",
      },
    ],
  },
];
