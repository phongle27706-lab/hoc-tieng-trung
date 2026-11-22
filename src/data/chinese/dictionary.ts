import type { DictionaryEntry, HSKLevel } from "@/types";

type RawDictTuple = [
  hanzi: string,
  pinyin: string,
  radical: string,
  strokeCount: number,
  partOfSpeech: string,
  meaningVi: string,
  level: HSKLevel,
  exampleZh: string,
  examplePinyin: string,
  exampleVi: string
];

const RAW_DICTIONARY: RawDictTuple[] = [
  // ==========================================
  // HSK0 — Nền tảng Pinyin, Bộ thủ, Chữ Hán cơ bản & Số đếm (45 mục từ)
  // ==========================================
  ["一", "yī", "一 (Nhất)", 1, "Số từ", "số một; thứ nhất", "HSK0", "一杯奶茶。", "Yì bēi nǎichá.", "Một ly trà sữa."],
  ["二", "èr", "二 (Nhị)", 2, "Số từ", "số hai; thứ hai", "HSK0", "二月很冷。", "Èryuè hěn lěng.", "Tháng Hai rất lạnh."],
  ["三", "sān", "一 (Nhất)", 3, "Số từ", "số ba", "HSK0", "三个人一起去。", "Sān gè rén yìqǐ qù.", "Ba người cùng nhau đi."],
  ["四", "sì", "囗 (Vi)", 5, "Số từ", "số bốn", "HSK0", "四点钟下班。", "Sì diǎnzhōng xiàbān.", "Bốn giờ tan làm."],
  ["五", "wǔ", "二 (Nhị)", 4, "Số từ", "số năm", "HSK0", "我有五本书。", "Wǒ yǒu wǔ běn shū.", "Tôi có năm cuốn sách."],
  ["六", "liù", "八 (Bát)", 4, "Số từ", "số sáu", "HSK0", "星期六休息。", "Xīngqīliù xiūxi.", "Thứ Bảy nghỉ ngơi."],
  ["七", "qī", "一 (Nhất)", 2, "Số từ", "số bảy", "HSK0", "早上七点起床。", "Zǎoshang qī diǎn qǐchuáng.", "Sáng bảy giờ thức dậy."],
  ["八", "bā", "八 (Bát)", 2, "Số từ", "số tám; phát đạt", "HSK0", "八月八号开业。", "Bāyuè bā hào kāiyè.", "Ngày 8 tháng 8 khai trương."],
  ["九", "jiǔ", "乙 (Ất)", 2, "Số từ", "số chín; lâu dài", "HSK0", "九点开会。", "Jiǔ diǎn kāihuì.", "Chín giờ họp."],
  ["十", "shí", "十 (Thập)", 2, "Số từ", "số mười", "HSK0", "十全十美。", "Shíquán-shíměi.", "Thập toàn thập mỹ."],
  ["百", "bǎi", "白 (Bạch)", 6, "Số từ", "một trăm", "HSK0", "这件衣服一百块。", "Zhè jiàn yīfu yìbǎi kuài.", "Bộ quần áo này một trăm tệ."],
  ["千", "qiān", "十 (Thập)", 3, "Số từ", "một nghìn", "HSK0", "三千人民币。", "Sānqiān Rénmínbì.", "Ba nghìn Nhân dân tệ."],
  ["万", "wàn", "一 (Nhất)", 3, "Số từ", "một vạn (10.000)", "HSK0", "万事如意。", "Wànshì rúyì.", "Vạn sự như ý."],
  ["人", "rén", "人 (Nhân)", 2, "Danh từ", "con người; người", "HSK0", "他是好人。", "Tā shì hǎorén.", "Anh ấy là người tốt."],
  ["口", "kǒu", "口 (Khẩu)", 3, "Danh từ / Lượng từ", "miệng; nhân khẩu", "HSK0", "我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."],
  ["日", "rì", "日 (Nhật)", 4, "Danh từ", "mặt trời; ngày", "HSK0", "今天是几月几日？", "Jīntiān shì jǐ yuè jǐ rì?", "Hôm nay là ngày mấy tháng mấy?"],
  ["月", "yuè", "月 (Nguyệt)", 4, "Danh từ", "mặt trăng; tháng", "HSK0", "下个月我去北京。", "Xià gè yuè wǒ qù Běijīng.", "Tháng sau tôi đi Bắc Kinh."],
  ["水", "shuǐ", "水 (Thủy)", 4, "Danh từ", "nước", "HSK0", "请给我一杯温水。", "Qǐng gěi wǒ yì bēi wēnshuǐ.", "Làm ơn cho tôi một cốc nước ấm."],
  ["火", "huǒ", "火 (Hỏa)", 4, "Danh từ", "lửa; hỏa; hot", "HSK0", "这家火锅店很火。", "Zhè jiā huǒguōdiàn hěn huǒ.", "Quán lẩu này rất đông khách."],
  ["山", "shān", "山 (Sơn)", 3, "Danh từ", "núi", "HSK0", "周末我们去爬山。", "Zhōumò wǒmen qù páshān.", "Cuối tuần chúng tôi đi leo núi."],
  ["木", "mù", "木 (Mộc)", 4, "Danh từ", "cây; gỗ", "HSK0", "这张桌子是实木的。", "Zhè zhāng zhuōzi shì shímù de.", "Chiếc bàn này làm bằng gỗ thịt."],
  ["金", "jīn", "金 (Kim)", 8, "Danh từ", "vàng; kim loại; tiền", "HSK0", "时间就是金钱。", "Shíjiān jiùshì jīnqián.", "Thời gian chính là tiền bạc."],
  ["土", "tǔ", "土 (Thổ)", 3, "Danh từ", "đất", "HSK0", "这片土地很肥沃。", "Zhè piàn tǔdì hěn féiwò.", "Vùng đất này rất màu mỡ."],
  ["心", "xīn", "心 (Tâm)", 4, "Danh từ", "trái tim; tấm lòng", "HSK0", "祝你天天开心。", "Zhù nǐ tiāntiān kāixīn.", "Chúc bạn ngày nào cũng vui vẻ."],
  ["手", "shǒu", "手 (Thủ)", 4, "Danh từ", "bàn tay", "HSK0", "饭前要洗手。", "Fànqián yào xǐshǒu.", "Trước khi ăn phải rửa tay."],
  ["目", "mù", "目 (Mục)", 5, "Danh từ", "mắt; mục tiêu", "HSK0", "我们的目标很明确。", "Wǒmen de mùbiāo hěn míngquè.", "Mục tiêu của chúng tôi rất rõ ràng."],
  ["女", "nǚ", "女 (Nữ)", 3, "Danh từ", "phụ nữ; con gái", "HSK0", "她的女儿很聪明。", "Tā de nǚ'ér hěn cōngming.", "Con gái cô ấy rất thông minh."],
  ["子", "zǐ", "子 (Tử)", 3, "Danh từ", "con cái; hạt", "HSK0", "孩子们在院子里玩。", "Háizimen zài yuànzi lǐ wán.", "Bọn trẻ đang chơi trong sân."],
  ["大", "dà", "大 (Đại)", 3, "Tính từ", "to; lớn", "HSK0", "这个房间很大。", "Zhège fángjiān hěn dà.", "Căn phòng này rất lớn."],
  ["小", "xiǎo", "小 (Tiểu)", 3, "Tính từ", "nhỏ; bé", "HSK0", "我有一只小猫。", "Wǒ yǒu yì zhī xiǎomāo.", "Tôi có một chú mèo nhỏ."],
  ["多", "duō", "夕 (Tịch)", 6, "Tính từ", "nhiều", "HSK0", "今天人很多。", "Jīntiān rén hěn duō.", "Hôm nay đông người lắm."],
  ["少", "shǎo", "小 (Tiểu)", 4, "Tính từ", "ít", "HSK0", "少糖少冰，谢谢。", "Shǎo táng shǎo bīng, xièxie.", "Ít đường ít đá, cảm ơn."],
  ["上", "shàng", "一 (Nhất)", 3, "Phương vị từ / Động từ", "trên; lên; đi làm/học", "HSK0", "书在桌子上。", "Shū zài zhuōzi shàng.", "Sách ở trên bàn."],
  ["下", "xià", "一 (Nhất)", 3, "Phương vị từ / Động từ", "dưới; xuống; tan ca", "HSK0", "下午我们去喝茶。", "Xiàwǔ wǒmen qù hē chá.", "Buổi chiều chúng ta đi uống trà."],
  ["中", "zhōng", "丨 (Cổn)", 4, "Danh từ / Phương vị", "ở giữa; Trung Quốc", "HSK0", "我在学中文。", "Wǒ zài xué Zhōngwén.", "Tôi đang học tiếng Trung."],
  ["天", "tiān", "大 (Đại)", 4, "Danh từ", "bầu trời; ngày", "HSK0", "今天天气真好。", "Jīntiān tiānqì zhēn hǎo.", "Thời tiết hôm nay thật đẹp."],
  ["门", "mén", "门 (Môn)", 3, "Danh từ", "cánh cửa; cổng", "HSK0", "请把门关上。", "Qǐng bǎ mén guānshàng.", "Vui lòng đóng cửa lại."],
  ["车", "chē", "车 (Xa)", 4, "Danh từ", "xe cộ", "HSK0", "我们在车站等你。", "Wǒmen zài chēzhàn děng nǐ.", "Chúng tôi đợi bạn ở bến xe."],
  ["马", "mǎ", "马 (Mã)", 3, "Danh từ", "con ngựa", "HSK0", "祝你马到成功。", "Zhù nǐ mǎdào-chénggōng.", "Chúc bạn mã đáo thành công."],
  ["田", "tián", "田 (Điền)", 5, "Danh từ", "ruộng đồng", "HSK0", "春天田野很绿。", "Chūntiān tiányě hěn lǜ.", "Mùa xuân cánh đồng rất xanh."],
  ["我", "wǒ", "戈 (Qua)", 7, "Đại từ", "tôi; mình", "HSK0", "我是越南人。", "Wǒ shì Yuènánrén.", "Tôi là người Việt Nam."],
  ["你", "nǐ", "亻 (Nhân đứng)", 7, "Đại từ", "bạn; anh; chị", "HSK0", "你好，很高兴认识你！", "Nǐ hǎo, hěn gāoxìng rènshi nǐ!", "Xin chào, rất vui được làm quen với bạn!"],
  ["他", "tā", "亻 (Nhân đứng)", 5, "Đại từ", "anh ấy; ông ấy", "HSK0", "他是我的汉语老师。", "Tā shì wǒ de Hànyǔ lǎoshī.", "Thầy ấy là giáo viên tiếng Trung của tôi."],
  ["她", "tā", "女 (Nữ)", 6, "Đại từ", "cô ấy; bà ấy", "HSK0", "她汉语说得很好。", "Tā Hànyǔ shuō de hěn hǎo.", "Cô ấy nói tiếng Trung rất giỏi."],
  ["好", "hǎo", "女 (Nữ)", 6, "Tính từ", "tốt; khỏe; ngon", "HSK0", "这个主意很好。", "Zhège zhǔyi hěn hǎo.", "Ý kiến này rất hay."],

  // ==========================================
  // HSK1 — Giao tiếp cơ bản, Gia đình, Thời gian, Ăn uống (45 mục từ)
  // ==========================================
  ["你好", "nǐ hǎo", "亻 (Nhân đứng)", 13, "Cụm từ", "xin chào", "HSK1", "你好，请问你叫什么名字？", "Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzi?", "Xin chào, cho hỏi bạn tên là gì?"],
  ["您好", "nín hǎo", "心 (Tâm)", 16, "Cụm từ", "xin chào (kính trọng)", "HSK1", "王总您好，欢迎来到越南！", "Wáng zǒng nín hǎo, huānyíng láidào Yuènán!", "Chào Tổng giám đốc Vương, chào mừng đến Việt Nam!"],
  ["谢谢", "xièxie", "讠 (Ngôn)", 24, "Động từ", "cảm ơn", "HSK1", "谢谢你的帮忙。", "Xièxie nǐ de bāngmáng.", "Cảm ơn sự giúp đỡ của bạn."],
  ["不客气", "bú kèqi", "宀 (Miên)", 17, "Cụm từ", "đừng khách sáo; không có gì", "HSK1", "不客气，这是我应该做的。", "Bú kèqi, zhè shì wǒ yīnggāi zuò de.", "Không có gì, đây là việc tôi nên làm."],
  ["对不起", "duìbuqǐ", "寸 (Thốn)", 19, "Động từ", "xin lỗi", "HSK1", "对不起，我迟到了五分钟。", "Duìbuqǐ, wǒ chídào le wǔ fēnzhōng.", "Xin lỗi, tôi đến muộn năm phút."],
  ["没关系", "méi guānxi", "氵 (Chấm thủy)", 20, "Cụm từ", "không sao đâu", "HSK1", "没关系，我们也刚到。", "Méi guānxi, wǒmen yě gāng dào.", "Không sao đâu, chúng tôi cũng vừa mới đến."],
  ["再见", "zàijiàn", "冂 (Quynh)", 10, "Động từ", "tạm biệt; hẹn gặp lại", "HSK1", "明天见，再见！", "Míngtiān jiàn, zàijiàn!", "Mai gặp nhé, tạm biệt!"],
  ["请问", "qǐngwèn", "讠 (Ngôn)", 16, "Động từ", "xin hỏi", "HSK1", "请问地铁站在哪儿？", "Qǐngwèn dìtiězhàn zài nǎr?", "Xin hỏi ga tàu điện ngầm ở đâu ạ?"],
  ["名字", "míngzi", "口 (Khẩu)", 12, "Danh từ", "tên", "HSK1", "你的中文名字真好听。", "Nǐ de Zhōngwén míngzi zhēn hǎotīng.", "Tên tiếng Trung của bạn thật hay."],
  ["老师", "lǎoshī", "耂 (Lão)", 12, "Danh từ", "giáo viên; thầy cô", "HSK1", "张老师教我们口语。", "Zhāng lǎoshī jiāo wǒmen kǒuyǔ.", "Thầy Trương dạy chúng tôi khẩu ngữ."],
  ["学生", "xuésheng", "子 (Tử)", 13, "Danh từ", "học sinh; sinh viên", "HSK1", "我是河内大学的学生。", "Wǒ shì Hénèi Dàxué de xuésheng.", "Tôi là sinh viên Đại học Hà Nội."],
  ["朋友", "péngyou", "月 (Nguyệt)", 12, "Danh từ", "bạn bè", "HSK1", "他是我的中国朋友。", "Tā shì wǒ de Zhōngguó péngyou.", "Anh ấy là người bạn Trung Quốc của tôi."],
  ["中国", "Zhōngguó", "囗 (Vi)", 12, "Danh từ riêng", "Trung Quốc", "HSK1", "我想去中国留学。", "Wǒ xiǎng qù Zhōngguó liúxué.", "Tôi muốn đi du học Trung Quốc."],
  ["越南", "Yuènán", "走 (Tẩu)", 21, "Danh từ riêng", "Việt Nam", "HSK1", "越南咖啡非常有名。", "Yuènán kāfēi fēicháng yǒumíng.", "Cà phê Việt Nam vô cùng nổi tiếng."],
  ["汉语", "Hànyǔ", "氵 (Chấm thủy)", 14, "Danh từ", "tiếng Hán; tiếng Trung", "HSK1", "我每天学习一个小时汉语。", "Wǒ měitiān xuéxí yí gè xiǎoshí Hànyǔ.", "Mỗi ngày tôi học tiếng Trung một tiếng đồng hồ."],
  ["爸爸", "bàba", "父 (Phụ)", 16, "Danh từ", "bố; ba", "HSK1", "我爸爸在公司工作。", "Wǒ bàba zài gōngsī gōngzuò.", "Bố tôi làm việc ở công ty."],
  ["妈妈", "māma", "女 (Nữ)", 12, "Danh từ", "mẹ; má", "HSK1", "妈妈做的菜最好吃。", "Māma zuò de cài zuì hǎochī.", "Món mẹ nấu là ngon nhất."],
  ["家", "jiā", "宀 (Miên)", 10, "Danh từ / Lượng từ", "nhà; gia đình", "HSK1", "我晚上七点回家。", "Wǒ wǎnshang qī diǎn huí jiā.", "Tối bảy giờ tôi về nhà."],
  ["学校", "xuéxiào", "木 (Mộc)", 18, "Danh từ", "trường học", "HSK1", "学校离我家不远。", "Xuéxiào lí wǒ jiā bù yuǎn.", "Trường học cách nhà tôi không xa."],
  ["饭店", "fàndiàn", "饣 (Thực)", 15, "Danh từ", "nhà hàng; khách sạn", "HSK1", "这家中国饭店的烤鸭很地道。", "Zhè jiā Zhōngguó fàndiàn de kǎoyā hěn dìdao.", "Món vịt quay của nhà hàng Trung Quốc này rất chuẩn vị."],
  ["商店", "shāngdiàn", "口 (Khẩu)", 19, "Danh từ", "cửa hàng; tiệm", "HSK1", "我去商店买一些水果。", "Wǒ qù shāngdiàn mǎi yìxiē shuǐguǒ.", "Tôi đi cửa hàng mua một ít hoa quả."],
  ["医院", "yīyuàn", "匚 (Phương)", 16, "Danh từ", "bệnh viện", "HSK1", "他生病了，要去医院看病。", "Tā shēngbìng le, yào qù yīyuàn kànbìng.", "Anh ấy bị ốm rồi, phải đến bệnh viện khám bệnh."],
  ["今天", "jīntiān", "人 (Nhân)", 8, "Danh từ", "hôm nay", "HSK1", "今天你有空吗？", "Jīntiān nǐ yǒu kòng ma?", "Hôm nay bạn có rảnh không?"],
  ["明天", "míngtiān", "日 (Nhật)", 12, "Danh từ", "ngày mai", "HSK1", "明天我们去机场接客户。", "Míngtiān wǒmen qù jīchǎng jiē kèhù.", "Ngày mai chúng tôi ra sân bay đón khách hàng."],
  ["昨天", "zuótiān", "日 (Nhật)", 13, "Danh từ", "hôm qua", "HSK1", "昨天我买了一本新书。", "Zuótiān wǒ mǎi le yì běn xīn shū.", "Hôm qua tôi đã mua một cuốn sách mới."],
  ["现在", "xiànzài", "王 (Ngọc)", 14, "Danh từ", "bây giờ; hiện tại", "HSK1", "现在是北京时间八点。", "Xiànzài shì Běijīng shíjiān bā diǎn.", "Bây giờ là 8 giờ theo giờ Bắc Kinh."],
  ["时候", "shíhou", "日 (Nhật)", 17, "Danh từ", "lúc; khi; thời gian", "HSK1", "你什么时候来上海？", "Nǐ shénme shíhou lái Shànghǎi?", "Khi nào bạn đến Thượng Hải?"],
  ["吃", "chī", "口 (Khẩu)", 6, "Động từ", "ăn", "HSK1", "你喜欢吃中国菜吗？", "Nǐ xǐhuan chī Zhōngguócài ma?", "Bạn có thích ăn món Trung Quốc không?"],
  ["喝", "hē", "口 (Khẩu)", 12, "Động từ", "uống", "HSK1", "我想喝一杯珍珠奶茶。", "Wǒ xiǎng hē yì bēi zhēnzhū nǎichá.", "Tôi muốn uống một ly trà sữa trân châu."],
  ["看", "kàn", "目 (Mục)", 9, "Động từ", "nhìn; xem; đọc", "HSK1", "周末我喜欢看中国电影。", "Zhōumò wǒ xǐhuan kàn Zhōngguó diànyǐng.", "Cuối tuần tôi thích xem phim Trung Quốc."],
  ["听", "tīng", "口 (Khẩu)", 7, "Động từ", "nghe", "HSK1", "多听录音能提高听力。", "Duō tīng lùyīn néng tígāo tīnglì.", "Nghe ghi âm nhiều có thể nâng cao kỹ năng nghe."],
  ["说", "shuō", "讠 (Ngôn)", 9, "Động từ", "nói", "HSK1", "请你说慢一点儿。", "Qǐng nǐ shuō màn yìdiǎnr.", "Xin bạn nói chậm một chút."],
  ["读", "dú", "讠 (Ngôn)", 10, "Động từ", "đọc", "HSK1", "请跟我读这个句子。", "Qǐng gēn wǒ dú zhège jùzi.", "Xin hãy đọc câu này theo tôi."],
  ["写", "xiě", "冖 (Mịch)", 5, "Động từ", "viết", "HSK1", "汉字要按笔顺来写。", "Hànzì yào àn bǐshùn lái xiě.", "Chữ Hán phải viết theo thứ tự nét bút."],
  ["买", "mǎi", "乛 (Ất)", 6, "Động từ", "mua", "HSK1", "我在淘宝上买了很多东西。", "Wǒ zài Táobǎo shàng mǎi le hěn duō dōngxi.", "Tôi đã mua rất nhiều đồ trên Taobao."],
  ["去", "qù", "厶 (Khư)", 5, "Động từ", "đi", "HSK1", "下周我去广州出差。", "Xiàzhōu wǒ qù Guǎngzhōu chūchāi.", "Tuần sau tôi đi công tác Quảng Châu."],
  ["来", "lái", "木 (Mộc)", 7, "Động từ", "đến; tới", "HSK1", "欢迎你来我家做客。", "Huānyíng nǐ lái wǒ jiā zuòkè.", "Hoan nghênh bạn đến nhà tôi chơi."],
  ["做", "zuò", "亻 (Nhân đứng)", 11, "Động từ", "làm; nấu", "HSK1", "你在做什么工作？", "Nǐ zài zuò shénme gōngzuò?", "Bạn đang làm công việc gì?"],
  ["想", "xiǎng", "心 (Tâm)", 13, "Động từ", "muốn; nhớ; nghĩ", "HSK1", "我想学习流利的中文。", "Wǒ xiǎng xuéxí liúlì de Zhōngwén.", "Tôi muốn học tiếng Trung lưu loát."],
  ["喜欢", "xǐhuan", "口 (Khẩu)", 18, "Động từ", "thích", "HSK1", "我非常喜欢喝乌龙茶。", "Wǒ fēicháng xǐhuan hē wūlóngchá.", "Tôi vô cùng thích uống trà Ô Long."],
  ["认识", "rènshi", "讠 (Ngôn)", 11, "Động từ", "quen biết; nhận biết", "HSK1", "你认识这个汉字吗？", "Nǐ rènshi zhège Hànzì ma?", "Bạn có biết chữ Hán này không?"],
  ["钱", "qián", "钅 (Kim)", 10, "Danh từ", "tiền", "HSK1", "这个手机多少钱？", "Zhège shǒujī duōshao qián?", "Chiếc điện thoại này bao nhiêu tiền?"],
  ["电脑", "diànnǎo", "雨 (Vũ)", 15, "Danh từ", "máy tính", "HSK1", "我用电脑写报告。", "Wǒ yòng diànnǎo xiě bàogào.", "Tôi dùng máy tính viết báo cáo."],
  ["高兴", "gāoxìng", "高 (Cao)", 16, "Tính từ", "vui vẻ; phấn khởi", "HSK1", "收到你的礼物我很高兴。", "Shōudào nǐ de lǐwù wǒ hěn gāoxìng.", "Nhận được quà của bạn tôi rất vui."],
  ["漂亮", "piàoliang", "氵 (Chấm thủy)", 23, "Tính từ", "đẹp; xinh đẹp", "HSK1", "这件旗袍真漂亮。", "Zhè jiàn qípáo zhēn piàoliang.", "Chiếc sườn xám này thật đẹp."],

  // ==========================================
  // HSK2 — Sinh hoạt, Du lịch, Mua sắm, Sức khỏe (35 mục từ)
  // ==========================================
  ["旅游", "lǚyóu", "方 (Phương)", 22, "Động từ / Danh từ", "du lịch", "HSK2", "今年夏天我想去云南旅游。", "Jīnnián xiàtiān wǒ xiǎng qù Yúnnán lǚyóu.", "Mùa hè năm nay tôi muốn đi Vân Nam du lịch."],
  ["机场", "jīchǎng", "木 (Mộc)", 12, "Danh từ", "sân bay", "HSK2", "请提前两个小时到机场。", "Qǐng tíqián liǎng gè xiǎoshí dào jīchǎng.", "Vui lòng đến sân bay trước hai tiếng."],
  ["飞机", "fēijī", "飞 (Phi)", 9, "Danh từ", "máy bay", "HSK2", "坐飞机去上海要三个小时。", "Zuò fēijī qù Shànghǎi yào sān gè xiǎoshí.", "Đi máy bay tới Thượng Hải mất ba tiếng."],
  ["房间", "fángjiān", "户 (Hộ)", 15, "Danh từ", "căn phòng", "HSK2", "我预订了一个双人房间。", "Wǒ yùdìng le yí gè shuāngrén fángjiān.", "Tôi đã đặt một phòng đôi."],
  ["准备", "zhǔnbèi", "冫 (Băng)", 18, "Động từ", "chuẩn bị", "HSK2", "我已经准备好考试了。", "Wǒ yǐjīng zhǔnbèi hǎo kǎoshì le.", "Tôi đã chuẩn bị xong cho kỳ thi rồi."],
  ["开始", "kāishǐ", "廾 (Củng)", 12, "Động từ", "bắt đầu", "HSK2", "会议九点准时开始。", "Huìyì jiǔ diǎn zhǔnshí kāishǐ.", "Cuộc họp bắt đầu đúng 9 giờ."],
  ["结束", "jiéshù", "纟 (Mịch)", 16, "Động từ", "kết thúc", "HSK2", "今天的工作终于结束了。", "Jīntiān de gōngzuò zhōngyú jiéshù le.", "Công việc hôm nay cuối cùng đã kết thúc."],
  ["帮助", "bāngzhù", "巾 (Cân)", 16, "Động từ / Danh từ", "giúp đỡ", "HSK2", "感谢您一直以来对我的帮助。", "Gǎnxiè nín yìzhí yǐlái duì wǒ de bāngzhù.", "Cảm ơn sự giúp đỡ của ngài dành cho tôi suốt thời gian qua."],
  ["介绍", "jièshào", "人 (Nhân)", 12, "Động từ", "giới thiệu", "HSK2", "我先介绍一下我们公司。", "Wǒ xiān jièshào yíxià wǒmen gōngsī.", "Trước tiên tôi xin giới thiệu đôi chút về công ty chúng tôi."],
  ["问题", "wèntí", "门 (Môn)", 21, "Danh từ", "vấn đề; câu hỏi", "HSK2", "这个质量问题必须马上解决。", "Zhège zhìliàng wèntí bìxū mǎshàng jiějué.", "Vấn đề chất lượng này bắt buộc phải giải quyết ngay."],
  ["意思", "yìsi", "心 (Tâm)", 22, "Danh từ", "ý nghĩa; ý", "HSK2", "这句话是什么意思？", "Zhè jù huà shì shénme yìsi?", "Câu này có nghĩa là gì?"],
  ["因为", "yīnwèi", "囗 (Vi)", 10, "Liên từ", "bởi vì", "HSK2", "因为下雨，所以航班延误了。", "Yīnwèi xiàyǔ, suǒyǐ hángbān yánwù le.", "Bởi vì trời mưa nên chuyến bay bị hoãn."],
  ["所以", "suǒyǐ", "户 (Hộ)", 12, "Liên từ", "cho nên; vì vậy", "HSK2", "他很努力，所以进步很快。", "Tā hěn nǔlì, suǒyǐ jìnbù hěn kuài.", "Anh ấy rất nỗ lực cho nên tiến bộ rất nhanh."],
  ["虽然", "suīrán", "虫 (Trùng)", 21, "Liên từ", "tuy rằng; mặc dù", "HSK2", "虽然汉字很难，但是很有意思。", "Suīrán Hànzì hěn nán, dànshì hěn yǒu yìsi.", "Tuy chữ Hán khó nhưng rất thú vị."],
  ["但是", "dànshì", "亻 (Nhân đứng)", 16, "Liên từ", "nhưng; nhưng mà", "HSK2", "这件衣服很贵，但是质量很好。", "Zhè jiàn yīfu hěn guì, dànshì zhìliàng hěn hǎo.", "Bộ đồ này đắt nhưng chất lượng rất tốt."],
  ["觉得", "juéde", "见 (Kiến)", 20, "Động từ", "cảm thấy; cho rằng", "HSK2", "你觉得这个方案怎么样？", "Nǐ juéde zhège fāng'àn zěnmeyàng?", "Bạn thấy phương án này thế nào?"],
  ["希望", "xīwàng", "巾 (Cân)", 18, "Động từ / Danh từ", "hy vọng", "HSK2", "希望我们合作愉快。", "Xīwàng wǒmen hézuò yúkuài.", "Hy vọng chúng ta hợp tác vui vẻ."],
  ["告诉", "gàosu", "口 (Khẩu)", 14, "Động từ", "nói cho biết; báo", "HSK2", "到酒店后请告诉我一声。", "Dào jiǔdiàn hòu qǐng gàosu wǒ yì shēng.", "Sau khi đến khách sạn vui lòng báo cho tôi một tiếng."],
  ["手机", "shǒujī", "手 (Thủ)", 10, "Danh từ", "điện thoại di động", "HSK2", "现在大家都用手机扫码支付。", "Xiànzài dàjiā dōu yòng shǒujī sǎomǎ zhīfù.", "Bây giờ mọi người đều dùng điện thoại quét mã thanh toán."],
  ["公司", "gōngsī", "八 (Bát)", 9, "Danh từ", "công ty", "HSK2", "我们是一家跨国贸易公司。", "Wǒmen shì yì jiā kuàguó màoyì gōngsī.", "Chúng tôi là một công ty thương mại đa quốc gia."],
  ["上班", "shàngbān", "一 (Nhất)", 13, "Động từ", "đi làm", "HSK2", "我每天早上八点半上班。", "Wǒ měitiān zǎoshang bā diǎn bàn shàngbān.", "Mỗi ngày tôi đi làm lúc 8 giờ rưỡi sáng."],
  ["休息", "xiūxi", "亻 (Nhân đứng)", 16, "Động từ", "nghỉ ngơi", "HSK2", "工作太累了，先休息一会儿吧。", "Gōngzuò tài lèi le, xiān xiūxi yíhuìr ba.", "Làm việc mệt quá rồi, nghỉ ngơi một lát trước đã."],
  ["身体", "shēntǐ", "身 (Thân)", 14, "Danh từ", "cơ thể; sức khỏe", "HSK2", "你要多注意身体。", "Nǐ yào duō zhùyì shēntǐ.", "Bạn phải chú ý giữ gìn sức khỏe nhiều hơn."],
  ["运动", "yùndòng", "辶 (Sước)", 13, "Động từ / Danh từ", "vận động; thể thao", "HSK2", "每天运动半小时对健康有好处。", "Měitiān yùndòng bàn xiǎoshí duì jiànkāng yǒu hǎochù.", "Vận động nửa tiếng mỗi ngày rất có lợi cho sức khỏe."],
  ["便宜", "piányi", "亻 (Nhân đứng)", 17, "Tính từ", "rẻ", "HSK2", "直接从工厂拿货更便宜。", "Zhíjiē cóng gōngchǎng náhuò gèng piányi.", "Lấy hàng trực tiếp từ xưởng sẽ rẻ hơn."],
  ["贵", "guì", "贝 (Bối)", 9, "Tính từ", "đắt; quý", "HSK2", "这个品牌的包太贵了。", "Zhège pǐnpái de bāo tài guì le.", "Túi của thương hiệu này đắt quá."],
  ["快", "kuài", "忄 (Tâm đứng)", 7, "Tính từ / Phó từ", "nhanh; sắp", "HSK2", "顺丰快递送货非常快。", "Shùnfēng kuàidì sònghuò fēicháng kuài.", "Chuyển phát nhanh Thuận Phong giao hàng rất nhanh."],
  ["慢", "màn", "忄 (Tâm đứng)", 14, "Tính từ", "chậm", "HSK2", "请您慢走，欢迎下次光临。", "Qǐng nín màn zǒu, huānyíng xiàcì guānglín.", "Xin ngài đi thong thả, hẹn lần sau lại ghé."],
  ["服务员", "fúwùyuán", "月 (Nguyệt)", 20, "Danh từ", "nhân viên phục vụ", "HSK2", "服务员，请帮我买单。", "Fúwùyuán, qǐng bāng wǒ mǎidān.", "Phục vụ ơi, làm ơn thanh toán giúp tôi."],
  ["奶茶", "nǎichá", "女 (Nữ)", 14, "Danh từ", "trà sữa", "HSK2", "我要一杯三分糖的珍珠奶茶。", "Wǒ yào yì bēi sānfēn táng de zhēnzhū nǎichá.", "Cho tôi một ly trà sữa trân châu 30% đường."],
  ["咖啡", "kāfēi", "口 (Khẩu)", 19, "Danh từ", "cà phê", "HSK2", "早上喝一杯黑咖啡很有精神。", "Zǎoshang hē yì bēi hēi kāfēi hěn yǒu jīngshen.", "Buổi sáng uống một ly cà phê đen rất tỉnh táo."],
  ["鸡蛋", "jīdàn", "鸟 (Điểu)", 18, "Danh từ", "trứng gà", "HSK2", "西红柿炒鸡蛋是很常见的家常菜。", "Xīhóngshì chǎo jīdàn shì hěn chángjiàn de jiāchángcài.", "Cà chua xào trứng là món ăn gia đình rất phổ biến."],
  ["已经", "yǐjīng", "己 (Kỷ)", 11, "Phó từ", "đã... rồi", "HSK2", "货物已经发到仓库了。", "Huòwù yǐjīng fādào cāngkù le.", "Hàng hóa đã được gửi đến kho rồi."],
  ["一起", "yìqǐ", "走 (Tẩu)", 11, "Phó từ", "cùng nhau", "HSK2", "我们一起去吃重庆火锅吧。", "Wǒmen yìqǐ qù chī Chóngqìng huǒguō ba.", "Chúng ta cùng đi ăn lẩu Trùng Khánh nhé."],
  ["可能", "kěnéng", "口 (Khẩu)", 15, "Phó từ / Tính từ", "có thể; khả năng", "HSK2", "明天可能会下大雨。", "Míngtiān kěnéng huì xià dàyǔ.", "Ngày mai có thể sẽ mưa to."],

  // ==========================================
  // HSK3 — Đời sống đô thị, Công sở, Giao dịch, Thanh toán (35 mục từ)
  // ==========================================
  ["方便", "fāngbiàn", "方 (Phương)", 13, "Tính từ", "thuận tiện; tiện lợi", "HSK3", "在中国用微信支付非常方便。", "Zài Zhōngguó yòng Wēixìn zhīfù fēicháng fāngbiàn.", "Ở Trung Quốc dùng WeChat Pay vô cùng tiện lợi."],
  ["简单", "jiǎndān", "竹 (Trúc)", 21, "Tính từ", "đơn giản", "HSK3", "这个软件的操作很简单。", "Zhège ruǎnjiàn de cāozuò hěn jiǎndān.", "Thao tác của phần mềm này rất đơn giản."],
  ["重要", "zhòngyào", "里 (Lý)", 18, "Tính từ", "quan trọng", "HSK3", "诚信是做生意最重要的原则。", "Chéngxìn shì zuò shēngyi zuì zhòngyào de yuánzé.", "Chữ tín là nguyên tắc quan trọng nhất khi kinh doanh."],
  ["认真", "rènzhēn", "讠 (Ngôn)", 14, "Tính từ", "nghiêm túc; chăm chỉ", "HSK3", "他工作一直非常认真负责。", "Tā gōngzuò yìzhí fēicháng rènzhēn fùzé.", "Anh ấy làm việc luôn vô cùng nghiêm túc và có trách nhiệm."],
  ["满意", "mǎnyì", "氵 (Chấm thủy)", 26, "Động từ / Tính từ", "hài lòng", "HSK3", "客户对这批样品很满意。", "Kèhù duì zhè pī yàngpǐn hěn mǎnyì.", "Khách hàng rất hài lòng với lô hàng mẫu này."],
  ["决定", "juédìng", "冫 (Băng)", 14, "Động từ / Danh từ", "quyết định", "HSK3", "公司决定在越南建新工厂。", "Gōngsī juédìng zài Yuènán jiàn xīn gōngchǎng.", "Công ty quyết định xây nhà máy mới tại Việt Nam."],
  ["选择", "xuǎnzé", "辶 (Sước)", 17, "Động từ / Danh từ", "lựa chọn", "HSK3", "你可以选择空运或者海运。", "Nǐ kěyǐ xuǎnzé kōngyùn huòzhě hǎiyùn.", "Bạn có thể chọn vận chuyển đường hàng không hoặc đường biển."],
  ["办法", "bànfǎ", "力 (Lực)", 12, "Danh từ", "cách; biện pháp", "HSK3", "我们一定能找到解决的办法。", "Wǒmen yídìng néng zhǎodào jiějué de bànfǎ.", "Chúng ta nhất định sẽ tìm được cách giải quyết."],
  ["经理", "jīnglǐ", "纟 (Mịch)", 19, "Danh từ", "giám đốc; quản lý", "HSK3", "李经理正在和供应商开会。", "Lǐ jīnglǐ zhèngzài hé gōngyìngshāng kāihuì.", "Giám đốc Lý đang họp với nhà cung cấp."],
  ["同事", "tóngshì", "口 (Khẩu)", 14, "Danh từ", "đồng nghiệp", "HSK3", "我的中国同事都很热情。", "Wǒ de Zhōngguó tóngshì dōu hěn rèqíng.", "Đồng nghiệp Trung Quốc của tôi đều rất nhiệt tình."],
  ["会议", "huìyì", "人 (Nhân)", 11, "Danh từ", "cuộc họp; hội nghị", "HSK3", "下午两点有一个视频会议。", "Xiàwǔ liǎng diǎn yǒu yí gè shìpín huìyì.", "Hai giờ chiều có một cuộc họp video."],
  ["电子邮件", "diànzǐ yóujiàn", "雨 (Vũ)", 22, "Danh từ", "thư điện tử (Email)", "HSK3", "请把报价单发到我的电子邮件。", "Qǐng bǎ bàojiàdān fādào wǒ de diànzǐ yóujiàn.", "Vui lòng gửi bảng báo giá vào email của tôi."],
  ["护照", "hùzhào", "扌 (Tài gảy)", 20, "Danh từ", "hộ chiếu", "HSK3", "办签证需要提供有效护照。", "Bàn qiānzhèng xūyào tígōng yǒuxiào hùzhào.", "Làm visa cần cung cấp hộ chiếu còn hiệu lực."],
  ["行李箱", "xínglixiāng", "彳 (Xích)", 28, "Danh từ", "vali hành lý", "HSK3", "我的行李箱在托运时超重了。", "Wǒ de xínglixiāng zài tuōyùn shí chāozhòng le.", "Vali hành lý của tôi bị quá cân khi ký gửi."],
  ["高铁", "gāotiě", "高 (Cao)", 20, "Danh từ", "tàu cao tốc", "HSK3", "从北京坐高铁到上海只要四个半小时。", "Cóng Běijīng zuò gāotiě dào Shànghǎi zhǐyào sì gè bàn xiǎoshí.", "Đi tàu cao tốc từ Bắc Kinh đến Thượng Hải chỉ mất 4 tiếng rưỡi."],
  ["超市", "chāoshì", "走 (Tẩu)", 17, "Danh từ", "siêu thị", "HSK3", "楼下有一家二十四小时超市。", "Lóuxià yǒu yì jiā èrshísì xiǎoshí chāoshì.", "Dưới lầu có một siêu thị 24 giờ."],
  ["银行", "yínháng", "钅 (Kim)", 17, "Danh từ", "ngân hàng", "HSK3", "我去中国银行换一些人民币。", "Wǒ qù Zhōngguó Yínháng huàn yìxiē Rénmínbì.", "Tôi đi Ngân hàng Trung Quốc đổi một ít Nhân dân tệ."],
  ["信用卡", "xìnyòngkǎ", "亻 (Nhân đứng)", 19, "Danh từ", "thẻ tín dụng", "HSK3", "这家商场支持刷国际信用卡。", "Zhè jiā shāngchǎng zhīchí shuā guójì xìnyòngkǎ.", "Trung tâm thương mại này hỗ trợ quẹt thẻ tín dụng quốc tế."],
  ["微信", "Wēixìn", "彳 (Xích)", 22, "Danh từ riêng", "WeChat", "HSK3", "我们可以加个微信方便联系吗？", "Wǒmen kěyǐ jiā gè Wēixìn fāngbiàn liánxì ma?", "Chúng ta có thể kết bạn WeChat để tiện liên lạc không?"],
  ["支付宝", "Zhīfùbǎo", "支 (Chi)", 17, "Danh từ riêng", "Alipay", "HSK3", "在淘宝购物通常用支付宝付款。", "Zài Táobǎo gòuwù tōngcháng yòng Zhīfùbǎo fùkuǎn.", "Mua sắm trên Taobao thường thanh toán bằng Alipay."],
  ["环境", "huánjìng", "王 (Ngọc)", 22, "Danh từ", "môi trường; hoàn cảnh", "HSK3", "我们办公室的工作环境很安静。", "Wǒmen bàngōngshì de gōngzuò huánjìng hěn ānjìng.", "Môi trường làm việc ở văn phòng chúng tôi rất yên tĩnh."],
  ["习惯", "xíguàn", "习 (Tập)", 14, "Động từ / Danh từ", "thói quen; quen với", "HSK3", "我已经习惯了北方的冬天。", "Wǒ yǐjīng xíguàn le běifāng de dōngtiān.", "Tôi đã quen với mùa đông phương Bắc rồi."],
  ["关心", "guānxīn", "八 (Bát)", 10, "Động từ", "quan tâm", "HSK3", "谢谢领导对新员工的关心。", "Xièxie lǐngdǎo duì xīn yuángōng de guānxīn.", "Cảm ơn sự quan tâm của lãnh đạo đối với nhân viên mới."],
  ["放心", "fàngxīn", "攵 (Phộc)", 12, "Động từ", "yên tâm", "HSK3", "请您放心，我们一定按时交货。", "Qǐng nín fàngxīn, wǒmen yídìng ànshí jiāohuò.", "Xin ngài yên tâm, chúng tôi nhất định giao hàng đúng hạn."],
  ["比较", "bǐjiào", "比 (Tỷ)", 14, "Phó từ / Động từ", "khá; tương đối; so sánh", "HSK3", "今天的工作比较忙。", "Jīntiān de gōngzuò bǐjiào máng.", "Công việc hôm nay tương đối bận."],
  ["必须", "bìxū", "心 (Tâm)", 14, "Phó từ", "bắt buộc; phải", "HSK3", "出口食品必须符合安全标准。", "Chūkǒu shípǐn bìxū fúhé ānquán biāozhǔn.", "Thực phẩm xuất khẩu bắt buộc phải đạt tiêu chuẩn an toàn."],
  ["刚才", "gāngcái", "刂 (Đao đứng)", 9, "Danh từ", "vừa nãy", "HSK3", "刚才谁给你打电话了？", "Gāngcái shéi gěi nǐ dǎ diànhuà le?", "Vừa nãy ai gọi điện cho bạn thế?"],
  ["终于", "zhōngyú", "纟 (Mịch)", 11, "Phó từ", "cuối cùng thì", "HSK3", "经过三个月努力，项目终于上线了。", "Jīngguò sān gè yuè nǔlì, xiàngmù zhōngyú shàngxiàn le.", "Sau ba tháng nỗ lực, dự án cuối cùng đã đi vào hoạt động."],
  ["文化", "wénhuà", "文 (Văn)", 8, "Danh từ", "văn hóa", "HSK3", "我对中国传统文化很感兴趣。", "Wǒ duì Zhōngguó chuántǒng wénhuà hěn gǎn xìngqù.", "Tôi rất có hứng thú với văn hóa truyền thống Trung Quốc."],
  ["节日", "jiérì", "艹 (Thảo đầu)", 9, "Danh từ", "ngày lễ; lễ hội", "HSK3", "春节是中国最重要的传统节日。", "Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì.", "Tết Nguyên đán là lễ hội truyền thống quan trọng nhất của Trung Quốc."],
  ["礼物", "lǐwù", "礻 (Thị)", 13, "Danh từ", "quà tặng", "HSK3", "我给客户准备了一份越南特产礼物。", "Wǒ gěi kèhù zhǔnbèi le yí fèn Yuènán tèchǎn lǐwù.", "Tôi đã chuẩn bị một món quà đặc sản Việt Nam cho khách hàng."],
  ["参加", "cānjiā", "厶 (Khư)", 13, "Động từ", "tham gia", "HSK3", "下个月我们去广州参加广交会。", "Xià gè yuè wǒmen qù Guǎngzhōu cānjiā Guǎngjiāohuì.", "Tháng sau chúng tôi đi Quảng Châu tham gia Hội chợ Canton Fair."],
  ["影响", "yǐngxiǎng", "彡 (Sam)", 24, "Động từ / Danh từ", "ảnh hưởng", "HSK3", "台风影响了港口的发货进度。", "Táifēng yǐngxiǎng le gǎngkǒu de fāhuò jìndù.", "Bão đã ảnh hưởng đến tiến độ xuất hàng tại cảng."],
  ["提高", "tígāo", "扌 (Tài gảy)", 22, "Động từ", "nâng cao", "HSK3", "我们要不断提高产品质量。", "Wǒmen yào búduàn tígāo chǎnpǐn zhìliàng.", "Chúng ta phải không ngừng nâng cao chất lượng sản phẩm."],
  ["需要", "xūyào", "雨 (Vũ)", 23, "Động từ / Danh từ", "cần; nhu cầu", "HSK3", "如果有任何需要，请随时联系我。", "Rúguǒ yǒu rènhé xūyào, qǐng suíshí liánxì wǒ.", "Nếu có bất kỳ nhu cầu nào, xin hãy liên hệ tôi bất cứ lúc nào."],

  // ==========================================
  // HSK4 — Thương mại, Taobao/1688, Công việc, Giao tiếp xã hội (40 mục từ)
  // ==========================================
  ["合作", "hézuò", "人 (Nhân)", 13, "Động từ / Danh từ", "hợp tác", "HSK4", "期待与贵公司建立长期合作关系。", "Qīdài yǔ guì gōngsī jiànlì chángqī hézuò guānxi.", "Mong đợi thiết lập quan hệ hợp tác lâu dài với quý công ty."],
  ["合同", "hétóng", "口 (Khẩu)", 12, "Danh từ", "hợp đồng", "HSK4", "双方已经在购销合同上签字了。", "Shuāngfāng yǐjīng zài gòuxiāo hétóng shàng qiānzì le.", "Hai bên đã ký tên vào hợp đồng mua bán rồi."],
  ["价格", "jiàgé", "亻 (Nhân đứng)", 16, "Danh từ", "giá cả; mức giá", "HSK4", "如果订购量大，价格还可以优惠。", "Rúguǒ dìnggòuliàng dà, jiàgé hái kěyǐ yōuhuì.", "Nếu số lượng đặt hàng lớn, giá cả vẫn có thể ưu đãi thêm."],
  ["质量", "zhìliàng", "贝 (Bối)", 20, "Danh từ", "chất lượng", "HSK4", "我们工厂把产品质量放在第一位。", "Wǒmen gōngchǎng bǎ chǎnpǐn zhìliàng fàng zài dì-yī wèi.", "Nhà máy chúng tôi đặt chất lượng sản phẩm lên hàng đầu."],
  ["数量", "shùliàng", "攵 (Phộc)", 25, "Danh từ", "số lượng", "HSK4", "请仔细核对装箱单上的货物数量。", "Qǐng zǐxì héduì zhuāngxiāngdān shàng de huòwù shùliàng.", "Vui lòng đối chiếu kỹ số lượng hàng hóa trên phiếu đóng gói."],
  ["计划", "jìhuà", "讠 (Ngôn)", 10, "Danh từ / Động từ", "kế hoạch; lên kế hoạch", "HSK4", "请把下季度的销售计划发给我。", "Qǐng bǎ xià jìdù de xiāoshòu jìhuà fā gěi wǒ.", "Vui lòng gửi kế hoạch bán hàng quý tới cho tôi."],
  ["经验", "jīngyàn", "纟 (Mịch)", 18, "Danh từ", "kinh nghiệm", "HSK4", "他在跨境电商领域有五年经验。", "Tā zài kuàjìng diànshāng lǐngyù yǒu wǔ nián jīngyàn.", "Anh ấy có 5 năm kinh nghiệm trong lĩnh vực thương mại điện tử xuyên biên giới."],
  ["成功", "chénggōng", "戈 (Qua)", 11, "Động từ / Tính từ", "thành công", "HSK4", "新产品在越南市场推广非常成功。", "Xīn chǎnpǐn zài Yuènán shìchǎng tuīguǎng fēicháng chénggōng.", "Sản phẩm mới quảng bá tại thị trường Việt Nam vô cùng thành công."],
  ["失败", "shībài", "大 (Đại)", 13, "Động từ / Danh từ", "thất bại", "HSK4", "失败是成功之母。", "Shībài shì chénggōng zhī mǔ.", "Thất bại là mẹ thành công."],
  ["负责", "fùzé", "贝 (Bối)", 14, "Động từ / Tính từ", "phụ trách; có trách nhiệm", "HSK4", "我负责公司的采购和供应链管理。", "Wǒ fùzé gōngsī de cǎigòu hé gōngyìngliàn guǎnlǐ.", "Tôi phụ trách thu mua và quản lý chuỗi cung ứng của công ty."],
  ["联系", "liánxì", "耳 (Nhĩ)", 19, "Động từ / Danh từ", "liên hệ; liên lạc", "HSK4", "货到海防港后请第一时间联系我。", "Huò dào Hǎifáng gǎng hòu qǐng dì-yī shíjiān liánxì wǒ.", "Sau khi hàng tới cảng Hải Phòng vui lòng liên hệ tôi ngay lập tức."],
  ["通知", "tōngzhī", "辶 (Sước)", 18, "Động từ / Danh từ", "thông báo", "HSK4", "财务部已经收到付款通知了。", "Cáiwùbù yǐjīng shōudào fùkuǎn tōngzhī le.", "Phòng tài vụ đã nhận được thông báo thanh toán rồi."],
  ["安排", "ānpái", "宀 (Miên)", 17, "Động từ / Danh từ", "sắp xếp; bố trí", "HSK4", "我已经安排好下周去深圳看厂的行程。", "Wǒ yǐjīng ānpái hǎo xiàzhōu qù Shēnzhèn kàn chǎng de xíngchéng.", "Tôi đã sắp xếp xong lịch trình tuần sau đi Thâm Quyến thăm xưởng."],
  ["管理", "guǎnlǐ", "竹 (Trúc)", 25, "Động từ / Danh từ", "quản lý", "HSK4", "现代企业需要科学的仓储管理。", "Xiàndài qǐyè xūyào kēxué de cāngchǔ guǎnlǐ.", "Doanh nghiệp hiện đại cần quản lý kho bãi khoa học."],
  ["发展", "fāzhǎn", "又 (Hựu)", 15, "Động từ / Danh từ", "phát triển", "HSK4", "中越两国经贸合作发展迅速。", "Zhōng-Yuè liǎng guó jīngmào hézuò fāzhǎn xùnsù.", "Hợp tác kinh tế thương mại Trung - Việt phát triển nhanh chóng."],
  ["经济", "jīngjì", "纟 (Mịch)", 17, "Danh từ / Tính từ", "kinh tế", "HSK4", "数字经济正在改变传统商业模式。", "Shùzì jīngjì zhèngzài gǎibiàn chuántǒng shāngyè móshì.", "Kinh tế số đang thay đổi mô hình kinh doanh truyền thống."],
  ["广告", "guǎnggào", "广 (Nghiễm)", 10, "Danh từ", "quảng cáo", "HSK4", "我们在抖音和脸书上投放了视频广告。", "Wǒmen zài Dǒuyīn hé Liǎnshū shàng tóufàng le shìpín guǎnggào.", "Chúng tôi đã chạy quảng cáo video trên TikTok/Douyin và Facebook."],
  ["顾客", "gùkè", "页 (Hiệt)", 19, "Danh từ", "khách hàng (mua lẻ)", "HSK4", "优质的服务能留住更多老顾客。", "Yōuzhì de fúwù néng liúzhù gèng duō lǎo gùkè.", "Dịch vụ chất lượng cao có thể giữ chân nhiều khách quen hơn."],
  ["包邮", "bāoyóu", "勹 (Bao)", 12, "Động từ / Cụm từ", "miễn phí vận chuyển (freeship)", "HSK4", "在淘宝买满九十九元全国包邮。", "Zài Táobǎo mǎi mǎn jiǔshíjiǔ yuán quánguó bāoyóu.", "Mua đủ 99 tệ trên Taobao được miễn phí vận chuyển toàn quốc."],
  ["客服", "kèfú", "宀 (Miên)", 17, "Danh từ", "chăm sóc khách hàng (CSKH)", "HSK4", "有问题可以先咨询1688店铺客服。", "Yǒu wèntí kěyǐ xiān zīxún Yīliùbābā diànpù kèfú.", "Có vấn đề gì có thể hỏi nhân viên CSKH của shop 1688 trước."],
  ["发货", "fāhuò", "又 (Hựu)", 13, "Động từ", "gửi hàng; xuất hàng", "HSK4", "老板，今天下单什么时候能发货？", "Lǎobǎn, jīntiān xiàdān shénme shíhou néng fāhuò?", "Ông chủ, hôm nay đặt đơn thì khi nào gửi hàng được?"],
  ["快递", "kuàidì", "忄 (Tâm đứng)", 17, "Danh từ", "chuyển phát nhanh", "HSK4", "你的快递已经放在小区驿站了。", "Nǐ de kuàidì yǐjīng fàng zài xiǎoqū yìzhàn le.", "Bưu kiện chuyển phát nhanh của bạn đã để ở trạm nhận hàng khu dân cư."],
  ["打折", "dǎzhé", "扌 (Tài gảy)", 12, "Động từ", "giảm giá; chiết khấu", "HSK4", "双十一购物节很多商品打五折。", "Shuāng Shíyī gòuwùjié hěn duō shāngpǐn dǎ wǔzhé.", "Lễ hội mua sắm 11/11 rất nhiều mặt hàng giảm giá 50%."],
  ["退款", "tuìkuǎn", "辶 (Sước)", 21, "Động từ / Danh từ", "hoàn tiền", "HSK4", "商品有瑕疵可以申请七天无理由退款。", "Shāngpǐn yǒu xiācī kěyǐ shēnqǐng qī tiān wú lǐyóu tuìkuǎn.", "Hàng có lỗi có thể yêu cầu hoàn tiền không cần lý do trong 7 ngày."],
  ["安全", "ānquán", "宀 (Miên)", 12, "Tính từ / Danh từ", "an toàn", "HSK4", "线上支付一定要注意账户安全。", "Xiànshàng zhīfù yídìng yào zhùyì zhànghù ānquán.", "Thanh toán trực tuyến nhất định phải chú ý an toàn tài khoản."],
  ["密码", "mìmǎ", "宀 (Miên)", 19, "Danh từ", "mật khẩu; mã pin", "HSK4", "请不要把支付密码告诉陌生人。", "Qǐng búyào bǎ zhīfù mìmǎ gàosu mòshēngrén.", "Vui lòng không tiết lộ mật khẩu thanh toán cho người lạ."],
  ["网站", "wǎngzhàn", "罒 (Võng)", 16, "Danh từ", "trang web (website)", "HSK4", "你可以在官方网站查询物流信息。", "Nǐ kěyǐ zài guānfāng wǎngzhàn cháxún wùliú xìnxī.", "Bạn có thể tra cứu thông tin vận chuyển trên trang web chính thức."],
  ["专业", "zhuānyè", "一 (Nhất)", 9, "Danh từ / Tính từ", "chuyên ngành; chuyên nghiệp", "HSK4", "我的大学专业是国际经济与贸易。", "Wǒ de dàxué zhuānyè shì Guójì Jīngjì yǔ Màoyì.", "Chuyên ngành đại học của tôi là Kinh tế và Thương mại Quốc tế."],
  ["留学", "liúxué", "田 (Điền)", 18, "Động từ", "du học", "HSK4", "她申请到了去北京大学的留学奖学金。", "Tā shēnqǐng dào le qù Běijīng Dàxué de liúxué jiǎngxuéjīn.", "Cô ấy đã xin được học bổng du học Đại học Bắc Kinh."],
  ["签证", "qiānzhèng", "竹 (Trúc)", 20, "Danh từ", "thị thực (visa)", "HSK4", "商务签证一般需要提供邀请函。", "Shāngwù qiānzhèng yìbān xūyào tígōng yāoqǐnghán.", "Visa thương mại thông thường cần cung cấp thư mời."],
  ["房租", "fángzū", "户 (Hộ)", 18, "Danh từ", "tiền thuê nhà", "HSK4", "市中心的房租每个月要五千元。", "Shìzhōngxīn de fángzū měi gè yuè yào wǔqiān yuán.", "Tiền thuê nhà ở trung tâm thành phố mỗi tháng mất 5.000 tệ."],
  ["交通", "jiāotōng", "亠 (Đầu)", 16, "Danh từ", "giao thông", "HSK4", "这套公寓靠近地铁，交通非常便利。", "Zhè tào gōngyù kàojìn dìtiě, jiāotōng fēicháng biànlì.", "Căn hộ này gần tàu điện ngầm, giao thông vô cùng thuận lợi."],
  ["不仅", "bùjǐn", "一 (Nhất)", 8, "Liên từ", "không những...", "HSK4", "他不仅会说汉语，还会写毛笔字。", "Tā bùjǐn huì shuō Hànyǔ, hái huì xiě máobǐzì.", "Anh ấy không những biết nói tiếng Trung mà còn biết viết thư pháp."],
  ["而且", "érqiě", "而 (Nhi)", 11, "Liên từ", "mà còn; hơn nữa", "HSK4", "这款耳机不仅外观时尚，而且音质极佳。", "Zhè kuǎn ěrjī bùjǐn wàiguān shíshàng, érqiě yīnzhì jí jiā.", "Mẫu tai nghe này không những vẻ ngoài thời trang mà chất âm còn cực tốt."],
  ["无论", "wúlùn", "无 (Vô)", 10, "Liên từ", "bất luận; cho dù", "HSK4", "无论遇到什么困难，我们都不能放弃。", "Wúlùn yùdào shénme kùnnan, wǒmen dōu bù néng fàngqì.", "Bất luận gặp khó khăn gì, chúng ta đều không được bỏ cuộc."],
  ["尽管", "jǐnguǎn", "尸 (Thi)", 20, "Liên từ / Phó từ", "mặc dù; cứ việc", "HSK4", "有问题您尽管提出来。", "Yǒu wèntí nín jǐnguǎn tí chūlái.", "Có vấn đề gì ngài cứ việc nêu ra."],
  ["到底", "dàodǐ", "刂 (Đao đứng)", 16, "Phó từ", "rốt cuộc; đến cùng", "HSK4", "这批货到底什么时候能到港？", "Zhè pī huò dàodǐ shénme shíhou néng dào gǎng?", "Lô hàng này rốt cuộc khi nào mới cập cảng được?"],
  ["顺便", "shùnbiàn", "页 (Hiệt)", 18, "Phó từ", "nhân tiện; tiện thể", "HSK4", "我去银行办业务，顺便给你寄了样品。", "Wǒ qù yínháng bàn yèwù, shùnbiàn gěi nǐ jì le yàngpǐn.", "Tôi đi ngân hàng làm nghiệp vụ, tiện thể gửi hàng mẫu cho bạn luôn."],
  ["准时", "zhǔnshí", "冫 (Băng)", 17, "Tính từ", "đúng giờ", "HSK4", "同声传译员必须准时到达会场。", "Tóngshēng chuányìyuán bìxū zhǔnshí dàodá huìchǎng.", "Phiên dịch viên cabin bắt buộc phải có mặt tại hội trường đúng giờ."],
  ["尊重", "zūnzhòng", "寸 (Thốn)", 21, "Động từ / Danh từ", "tôn trọng", "HSK4", "在国际商务谈判中要尊重对方的文化习惯。", "Zài guójì shāngwù tánpàn zhōng yào zūnzhòng duìfāng de wénhuà xíguàn.", "Trong đàm phán thương mại quốc tế phải tôn trọng tập quán văn hóa của đối phương."],

  // ==========================================
  // HSK5 — Xuất nhập khẩu, Logistics, Tài chính, Công nghệ & Văn phòng (35 mục từ)
  // ==========================================
  ["贸易", "màoyì", "贝 (Bối)", 17, "Danh từ", "thương mại; mậu dịch", "HSK5", "跨境贸易需要熟悉两国的海关政策。", "Kuàjìng màoyì xūyào shúxī liǎng guó de hǎiguān zhèngcè.", "Thương mại xuyên biên giới cần nắm vững chính sách hải quan của hai nước."],
  ["进出口", "jìn-chūkǒu", "辶 (Sước)", 15, "Danh từ / Động từ", "xuất nhập khẩu", "HSK5", "我们公司拥有独立的进出口经营权。", "Wǒmen gōngsī yōngyǒu dúlì de jìn-chūkǒu jīngyíngquán.", "Công ty chúng tôi có quyền kinh doanh xuất nhập khẩu độc lập."],
  ["采购", "cǎigòu", "爫 (Trảo)", 16, "Động từ / Danh từ", "thu mua; mua hàng (purchasing)", "HSK5", "我是公司的资深采购专员。", "Wǒ shì gōngsī de zīshēn cǎigòu zhuānyuán.", "Tôi là chuyên viên thu mua cấp cao của công ty."],
  ["供应商", "gōngyìngshāng", "亻 (Nhân đứng)", 26, "Danh từ", "nhà cung cấp (supplier)", "HSK5", "我们在义乌和广州筛选了十家优质供应商。", "Wǒmen zài Yìwū hé Guǎngzhōu shāixuǎn le shí jiā yōuzhì gōngyìngshāng.", "Chúng tôi đã sàng lọc 10 nhà cung cấp chất lượng tại Nghĩa Ô và Quảng Châu."],
  ["批发", "pīfā", "扌 (Tài gảy)", 12, "Động từ / Danh từ", "bán buôn; bán sỉ", "HSK5", "1688是中国最大的批发采购平台。", "Yīliùbābā shì Zhōngguó zuì dà de pīfā cǎigòu píngtái.", "1688 là nền tảng thu mua bán sỉ lớn nhất Trung Quốc."],
  ["零售", "língshòu", "雨 (Vũ)", 24, "Động từ / Danh từ", "bán lẻ", "HSK5", "这个价格只针对批发，不做零售。", "Zhège jiàgé zhǐ zhēnduì pīfā, bú zuò língshòu.", "Mức giá này chỉ áp dụng cho bán sỉ, không bán lẻ."],
  ["报价", "bàojià", "扌 (Tài gảy)", 13, "Động từ / Danh từ", "báo giá", "HSK5", "请提供包含运费的CIF海防港报价。", "Qǐng tígōng bāohán yùnfèi de CIF Hǎifáng gǎng bàojià.", "Vui lòng cung cấp báo giá CIF cảng Hải Phòng đã bao gồm cước vận chuyển."],
  ["样品", "yàngpǐn", "木 (Mộc)", 19, "Danh từ", "hàng mẫu (sample)", "HSK5", "签正式合同前，我们需要先确认样品。", "Qiān zhèngshì hétóng qián, wǒmen xūyào xiān quèrèn yàngpǐn.", "Trước khi ký hợp đồng chính thức, chúng tôi cần xác nhận hàng mẫu trước."],
  ["订单", "dìngdān", "讠 (Ngôn)", 12, "Danh từ", "đơn đặt hàng (order)", "HSK5", "这笔订单的交货期是十五个工作日。", "Zhè bǐ dìngdān de jiāohuòqī shì shíwǔ gè gōngzuòrì.", "Thời hạn giao hàng của đơn hàng này là 15 ngày làm việc."],
  ["发票", "fāpiào", "又 (Hựu)", 16, "Danh từ", "hóa đơn (invoice)", "HSK5", "报销差旅费需要提供增值税专用发票。", "Bàoxiāo chāilǚfèi xūyào tígōng zēngzhíshuì zhuānyòng fāpiào.", "Thanh toán công tác phí cần cung cấp hóa đơn GTGT chuyên dụng."],
  ["海关", "hǎiguān", "氵 (Chấm thủy)", 16, "Danh từ", "hải quan", "HSK5", "货物正在海关接受检验检疫。", "Huòwù zhèngzài hǎiguān jiēshòu jiǎnyàn jiǎnyì.", "Hàng hóa đang được kiểm nghiệm kiểm dịch tại hải quan."],
  ["报关", "bàoguān", "扌 (Tài gảy)", 13, "Động từ", "khai báo hải quan", "HSK5", "所有报关单据必须真实准确。", "Suǒyǒu bàoguān dānjù bìxū zhēnshí zhǔnquè.", "Tất cả chứng từ khai báo hải quan bắt buộc phải trung thực và chính xác."],
  ["清关", "qīngguān", "氵 (Chấm thủy)", 17, "Động từ", "thông quan", "HSK5", "整柜货物已经在凭祥口岸顺利清关。", "Zhěngguì huòwù yǐjīng zài Píngxiáng kǒu'àn shùnlì qīngguān.", "Hàng nguyên container đã thông quan thuận lợi tại cửa khẩu Bằng Tường."],
  ["物流", "wùliú", "牜 (Ngưu)", 18, "Danh từ", "logistics; hậu cần vận tải", "HSK5", "跨境物流时效直接影响客户体验。", "Kuàjìng wùliú shíxiào zhíjiē yǐngxiǎng kèhù tǐyàn.", "Thời gian vận chuyển logistics xuyên biên giới ảnh hưởng trực tiếp tới trải nghiệm khách hàng."],
  ["仓库", "cāngkù", "人 (Nhân)", 11, "Danh từ", "nhà kho; kho bãi", "HSK5", "我们在东兴和河内都有中转仓库。", "Wǒmen zài Dōngxīng hé Hénèi dōu yǒu zhōngzhuǎn cāngkù.", "Chúng tôi đều có kho trung chuyển tại Đông Hưng và Hà Nội."],
  ["集装箱", "jízhuāngxiāng", "隹 (Chuy)", 39, "Danh từ", "container", "HSK5", "这一批家具需要装两个四十尺集装箱。", "Zhè yì pī jiājù xūyào zhuāng liǎng gè sìshí chǐ jízhuāngxiāng.", "Lô nội thất này cần đóng hai container 40 feet."],
  ["运费", "yùnfèi", "辶 (Sước)", 16, "Danh từ", "cước phí vận chuyển", "HSK5", "最近海运运费比上个月下降了。", "Zuìjìn hǎiyùn yùnfèi bǐ shàng gè yuè xiàjiàng le.", "Gần đây giá cước vận tải biển đã giảm so với tháng trước."],
  ["汇率", "huìlǜ", "氵 (Chấm thủy)", 16, "Danh từ", "tỷ giá hối đoái", "HSK5", "国际结算需要密切关注人民币汇率波动。", "Guójì jiésuàn xūyào mìqiè guānzhù Rénmínbì huìlǜ bōdòng.", "Thanh toán quốc tế cần theo dõi sát sao biến động tỷ giá Nhân dân tệ."],
  ["转账", "zhuǎnzhàng", "车 (Xa)", 15, "Động từ", "chuyển khoản", "HSK5", "定金已经通过银行电汇转账成功。", "Dìngjīn yǐjīng tōngguò yínháng diànhuì zhuǎnzhàng chénggōng.", "Tiền đặt cọc đã chuyển khoản thành công qua điện chuyển tiền ngân hàng (T/T)."],
  ["投资", "tóuzī", "扌 (Tài gảy)", 17, "Động từ / Danh từ", "đầu tư", "HSK5", "越来越多中国科技企业投资越南。", "Yuèláiyuè duō Zhōngguó kējì qǐyè tóuzī Yuènán.", "Ngày càng nhiều doanh nghiệp công nghệ Trung Quốc đầu tư vào Việt Nam."],
  ["市场", "shìchǎng", "巾 (Cân)", 11, "Danh từ", "thị trường", "HSK5", "东南亚市场具有巨大的增长潜力。", "Dōngnányà shìchǎng jùyǒu jùdà de zēngzhǎng qiánlì.", "Thị trường Đông Nam Á có tiềm năng tăng trưởng khổng lồ."],
  ["竞争", "jìngzhēng", "立 (L立)", 16, "Động từ / Danh từ", "cạnh tranh", "HSK5", "我们要靠核心技术赢得市场竞争。", "Wǒmen yào kào héxīn jìshù yíngdé shìchǎng jìngzhēng.", "Chúng ta phải dựa vào công nghệ cốt lõi để chiến thắng cạnh tranh thị trường."],
  ["人工智能", "réngōng zhìnéng", "人 (Nhân)", 27, "Danh từ", "trí tuệ nhân tạo (AI)", "HSK5", "人工智能正在大幅提升客服响应效率。", "Réngōng zhìnéng zhèngzài dàfú tíshēng kèfú xiǎngyìng xiàolǜ.", "Trí tuệ nhân tạo đang nâng cao mạnh mẽ hiệu suất phản hồi CSKH."],
  ["数据", "shùjù", "攵 (Phộc)", 24, "Danh từ", "dữ liệu (data)", "HSK5", "请根据销售数据制作月度报表。", "Qǐng gēnjù xiāoshòu shùjù zhìzuò yuèdù bàobiǎo.", "Vui lòng lập báo cáo tháng dựa trên dữ liệu bán hàng."],
  ["软件", "ruǎnjiàn", "车 (Xa)", 14, "Danh từ", "phần mềm (software)", "HSK5", "这款翻译软件支持中越双语实时语音识别。", "Zhè kuǎn fānyì ruǎnjiàn zhīchí Zhōng-Yuè shuāngyǔ shíshí yǔyīn shíbié.", "Phần mềm dịch thuật này hỗ trợ nhận diện giọng nói song ngữ Trung - Việt thời gian thực."],
  ["算法", "suànfǎ", "竹 (Trúc)", 22, "Danh từ", "thuật toán (algorithm)", "HSK5", "推荐算法能够精准匹配用户需求。", "Tuījiàn suànfǎ nénggòu jīngzhǔn pǐpèi yònghù xūqiú.", "Thuật toán đề xuất có thể khớp chính xác nhu cầu người dùng."],
  ["直播", "zhíbō", "目 (Mục)", 23, "Động từ / Danh từ", "phát trực tiếp (livestream)", "HSK5", "直播带货已经成为电商行业的主流模式。", "Zhíbō dàihuò yǐjīng chéngwéi diànshāng hángyè de zhǔliú móshì.", "Livestream bán hàng đã trở thành mô hình chủ đạo của ngành thương mại điện tử."],
  ["效率", "xiàolǜ", "攵 (Phộc)", 21, "Danh từ", "hiệu suất; hiệu quả", "HSK5", "自动化生产线提高了三倍生产效率。", "Zìdònghuà shēngchǎnxiàn tígāo le sān bèi shēngchǎn xiàolǜ.", "Dây chuyền sản xuất tự động hóa đã nâng cao hiệu suất sản xuất gấp ba lần."],
  ["谈判", "tánpàn", "讠 (Ngôn)", 17, "Động từ / Danh từ", "đàm phán", "HSK5", "经过三轮商务谈判，双方达成了共识。", "Jīngguò sān lún shāngwù tánpàn, shuāngfāng dáchéng le gòngshí.", "Trải qua ba vòng đàm phán thương mại, hai bên đã đạt được đồng thuận."],
  ["赔偿", "péicháng", "贝 (Bối)", 23, "Động từ / Danh từ", "bồi thường", "HSK5", "如果违约延期交货，卖方需支付赔偿金。", "Rúguǒ wéiyuē yánqī jiāohuò, màifāng xū zhīfù péichángjīn.", "Nếu vi phạm hợp đồng giao hàng chậm, bên bán phải trả tiền bồi thường."],
  ["保险", "bǎoxiǎn", "亻 (Nhân đứng)", 18, "Danh từ / Tính từ", "bảo hiểm", "HSK5", "贵重货物运输建议购买海运一切险保险。", "Guìzhòng huòwù yùnshū jiànyì gòumǎi hǎiyùn yíqièxiǎn bǎoxiǎn.", "Vận chuyển hàng quý giá kiến nghị mua bảo hiểm mọi rủi ro đường biển."],
  ["诊断", "zhěnduàn", "讠 (Ngôn)", 18, "Động từ / Danh từ", "chẩn đoán", "HSK5", "医生通过检查结果做出了准确诊断。", "Yīshēng tōngguò jiǎnchá jiéguǒ zuòchū le zhǔnquè zhěnduàn.", "Bác sĩ đã đưa ra chẩn đoán chính xác thông qua kết quả kiểm tra."],
  ["传统", "chuántǒng", "亻 (Nhân đứng)", 15, "Danh từ / Tính từ", "truyền thống", "HSK5", "中秋节吃月饼是中越两国共同的传统。", "Zhōngqiūjié chī yuèbǐng shì Zhōng-Yuè liǎng guó gòngtóng de chuántǒng.", "Tết Trung thu ăn bánh nướng là truyền thống chung của hai nước Trung - Việt."],
  ["奖学金", "jiǎngxuéjīn", "大 (Đại)", 25, "Danh từ", "học bổng", "HSK5", "考过HSK五级可以申请中国政府奖学金。", "Kǎoguò HSK wǔ jí kěyǐ shēnqǐng Zhōngguó Zhèngfǔ Jiǎngxuéjīn.", "Thi đỗ HSK cấp 5 có thể nộp hồ sơ xin Học bổng Chính phủ Trung Quốc."],
  ["贷款", "dàikuǎn", "贝 (Bối)", 21, "Danh từ / Động từ", "khoản vay; vay vốn", "HSK5", "他们向银行申请了三十年按揭贷款买房。", "Tāmen xiàng yínháng shēnqǐng le sānshí nián ànjiē dàikuǎn mǎifáng.", "Họ đã xin ngân hàng khoản vay trả góp 30 năm để mua nhà."],

  // ==========================================
  // HSK6 — Kinh tế vĩ mô, Pháp lý hợp đồng, Quản trị, Học thuật (30 mục từ)
  // ==========================================
  ["供应链", "gōngyìngliàn", "亻 (Nhân đứng)", 28, "Danh từ", "chuỗi cung ứng (supply chain)", "HSK6", "全球供应链正在加速向东南亚转移。", "Quánqiú gōngyìngliàn zhèngzài jiāsù xiàng Dōngnányà zhuǎnyí.", "Chuỗi cung ứng toàn cầu đang tăng tốc dịch chuyển sang Đông Nam Á."],
  ["战略", "zhànlüè", "戈 (Qua)", 20, "Danh từ", "chiến lược", "HSK6", "本土化运营是我们开拓海外市场的核心战略。", "Běntǔhuà yùnyíng shì wǒmen kāituò hǎiwài shìchǎng de héxīn zhànlüè.", "Vận hành bản địa hóa là chiến lược cốt lõi để chúng tôi mở rộng thị trường nước ngoài."],
  ["协议", "xiéyì", "十 (Thập)", 11, "Danh từ", "hiệp nghị; thỏa thuận", "HSK6", "双方签署了保密协议与独家代理协议。", "Shuāngfāng qiānshǔ le bǎomì xiéyì yǔ dújiā dàilǐ xiéyì.", "Hai bên đã ký thỏa thuận bảo mật (NDA) và thỏa thuận đại lý độc quyền."],
  ["条款", "tiáokuǎn", "木 (Mộc)", 19, "Danh từ", "điều khoản", "HSK6", "请法务部门仔细审核合同中的违约责任条款。", "Qǐng fǎwù bùmén zǐxì shěnhé hétóng zhōng de wéiyuē zérèn tiáokuǎn.", "Đề nghị bộ phận pháp chế rà soát kỹ điều khoản trách nhiệm vi phạm trong hợp đồng."],
  ["关税", "guānshuì", "八 (Bát)", 18, "Danh từ", "thuế quan", "HSK6", "凭原产地证书可以享受东盟自贸区零关税优惠。", "Píng yuánchǎndì zhèngshū kěyǐ xiǎngshòu Dōngméng Zìmàoqū líng guānshuì yōuhuì.", "Nhờ giấy chứng nhận xuất xứ (C/O) có thể hưởng ưu đãi thuế quan 0% của khu vực mậu dịch tự do ASEAN."],
  ["知识产权", "zhīshi chǎnquán", "矢 (Thỉ)", 33, "Danh từ", "quyền sở hữu trí tuệ", "HSK6", "自主品牌出海必须重视知识产权保护。", "Zìzhǔ pǐnpái chūhǎi bìxū zhòngshì zhīshi chǎnquán bǎohù.", "Thương hiệu tự chủ vươn ra nước ngoài bắt buộc phải coi trọng bảo hộ sở hữu trí tuệ."],
  ["通货膨胀", "tōnghuò péngzhàng", "辶 (Sước)", 46, "Danh từ", "lạm phát", "HSK6", "通货膨胀导致原材料采购成本持续上升。", "Tōnghuò péngzhàng dǎozhì yuáncáiliào cǎigòu chéngběn chíxù shàngshēng.", "Lạm phát khiến chi phí thu mua nguyên vật liệu liên tục tăng cao."],
  ["可持续发展", "kě chíxù fāzhǎn", "口 (Khẩu)", 41, "Danh từ", "phát triển bền vững", "HSK6", "绿色制造与低碳环保是企业可持续发展的基石。", "Lǜsè zhìzào yǔ dītàn huánbǎo shì qǐyè kě chíxù fāzhǎn de jīshí.", "Sản xuất xanh và bảo vệ môi trường carbon thấp là nền tảng phát triển bền vững của doanh nghiệp."],
  ["创新", "chuàngxīn", "刂 (Đao đứng)", 19, "Động từ / Danh từ", "đổi mới sáng tạo", "HSK6", "技术创新是推动产业升级的根本动力。", "Jìshù chuàngxīn shì tuīdòng chǎnyè shēngjí de gēnběn dònglì.", "Đổi mới công nghệ là động lực căn bản thúc đẩy nâng cấp ngành công nghiệp."],
  ["核心", "héxīn", "木 (Mộc)", 14, "Danh từ / Tính từ", "cốt lõi; hạt nhân", "HSK6", "人才培养是提升企业核心竞争力的关键。", "Réncái péiyǎng shì tíshēng qǐyè héxīn jìngzhēnglì de guānjiàn.", "Đào tạo nhân tài là chìa khóa nâng cao năng lực cạnh tranh cốt lõi của doanh nghiệp."],
  ["趋势", "qūshì", "走 (Tẩu)", 20, "Danh từ", "xu hướng", "HSK6", "跨境电商数字化、品牌化是未来的必然趋势。", "Kuàjìng diànshāng shùzìhuà, pǐnpáihuà shì wèilái de bìrán qūshì.", "Số hóa và thương hiệu hóa thương mại điện tử xuyên biên giới là xu hướng tất yếu của tương lai."],
  ["潜力", "qiánlì", "氵 (Chấm thủy)", 17, "Danh từ", "tiềm năng", "HSK6", "年轻人口结构赋予越南消费市场巨大的潜力。", "Niánqīng rénkǒu jiégòu fùyǔ Yuènán xiāofèi shìchǎng jùdà de qiánlì.", "Cơ cấu dân số trẻ mang lại tiềm năng to lớn cho thị trường tiêu dùng Việt Nam."],
  ["风险", "fēngxiǎn", "风 (Phong)", 13, "Danh từ", "rủi ro", "HSK6", "多元化布局有助于分散国际供应链风险。", "Duōyuánhuà bùjú yǒuzhùyú fēnsàn guójì gōngyìngliàn fēngxiǎn.", "Bố cục đa dạng hóa giúp phân tán rủi ro chuỗi cung ứng quốc tế."],
  ["成本", "chéngběn", "戈 (Qua)", 11, "Danh từ", "chi phí; giá thành", "HSK6", "优化物流路线能有效降低综合运营成本。", "Yōuhuà wùliú lùxiàn néng yǒuxiào jiàngdī zōnghé yùnyíng chéngběn.", "Tối ưu hóa tuyến đường logistics có thể giảm hiệu quả chi phí vận hành tổng hợp."],
  ["利润", "lìrùn", "刂 (Đao đứng)", 17, "Danh từ", "lợi nhuận", "HSK6", "高附加值产品为公司带来了丰厚的净利润。", "Gāo fùjiāzhí chǎnpǐn wèi gōngsī dàilái le fēnghòu de jìng lìrùn.", "Sản phẩm giá trị gia tăng cao mang lại lợi nhuận ròng dồi dào cho công ty."],
  ["预算", "yùsuàn", "页 (Hiệt)", 24, "Danh từ / Động từ", "ngân sách; dự toán", "HSK6", "今年的市场营销预算比去年增加了百分之二十。", "Jīnnián de shìchǎng yíngxiāo yùsuàn bǐ qùnián zēngjiā le bǎifēnzhī èrshí.", "Ngân sách tiếp thị thị trường năm nay tăng 20% so với năm ngoái."],
  ["融资", "róngzī", "虫 (Trùng)", 26, "Động từ / Danh từ", "huy động vốn", "HSK6", "这家人工智能初创公司刚刚完成A轮融资。", "Zhè jiā réngōng zhìnéng chūchuàng gōngsī gānggāng wánchéng A lún róngzī.", "Công ty khởi nghiệp AI này vừa hoàn thành vòng gọi vốn Series A."],
  ["并购", "bìnggòu", "干 (Can)", 14, "Động từ / Danh từ", "mua bán và sáp nhập (M&A)", "HSK6", "通过跨国并购，企业迅速扩大了全球市场份额。", "Tōngguò kuàguó bìnggòu, qǐyè xùnsù kuòdà le quánqiú shìchǎng fèn'é.", "Thông qua M&A xuyên quốc gia, doanh nghiệp nhanh chóng mở rộng thị phần toàn cầu."],
  ["房地产", "fángdìchǎn", "户 (Hộ)", 20, "Danh từ", "bất động sản", "HSK6", "工业园区房地产租赁需求保持强劲增长。", "Gōngyè yuánqū fángdìchǎn zūlìn xūqiú bǎochí qiángjìng zēngzhǎng.", "Nhu cầu thuê bất động sản khu công nghiệp duy trì mức tăng trưởng mạnh mẽ."],
  ["基础设施", "jīchǔ shèshī", "土 (Thổ)", 36, "Danh từ", "cơ sở hạ tầng", "HSK6", "高速公路与深水港等基础设施建设日趋完善。", "Gāosù gōnglù yǔ shēnshuǐgǎng děng jīchǔ shèshī jiànshè rìqū wánshàn.", "Việc xây dựng cơ sở hạ tầng như đường cao tốc và cảng nước sâu ngày càng hoàn thiện."],
  ["评估", "pínggū", "讠 (Ngôn)", 14, "Động từ / Danh từ", "đánh giá; thẩm định", "HSK6", "投资前必须对项目的环境影响进行全面评估。", "Tóuzī qián bìxū duì xiàngmù de huánjìng yǐngxiǎng jìnxíng quánmiàn pínggū.", "Trước khi đầu tư bắt buộc phải đánh giá toàn diện tác động môi trường của dự án."],
  ["监督", "jiāndū", "皿 (Mãnh)", 23, "Động từ / Danh từ", "giám sát", "HSK6", "我们派驻了质检工程师到工厂现场监督生产。", "Wǒmen pàizhù le zhìjiǎn gōngchéngshī dào gōngchǎng xiànchǎng jiāndū shēngchǎn.", "Chúng tôi đã cử kỹ sư QC tới hiện trường nhà máy để giám sát sản xuất."],
  ["协调", "xiétiáo", "十 (Thập)", 16, "Động từ / Tính từ", "điều phối; phối hợp", "HSK6", "项目经理负责协调研发、生产和物流部门。", "Xiàngmù jīnglǐ fùzé xiétiáo yánfā, shēngchǎn hé wùliú bùmén.", "Quản lý dự án phụ trách điều phối các bộ phận R&D, sản xuất và logistics."],
  ["妥协", "tuǒxié", "爫 (Trảo)", 13, "Động từ / Danh từ", "thỏa hiệp; nhượng bộ", "HSK6", "在涉及产品安全底线的问题上，我们绝不妥协。", "Zài shèjí chǎnpǐn ānquán dǐxiàn de wèntí shàng, wǒmen juébù tuǒxié.", "Trong các vấn đề liên quan đến giới hạn an toàn sản phẩm, chúng tôi tuyệt đối không thỏa hiệp."],
  ["履行", "lǚxíng", "尸 (Thi)", 21, "Động từ", "thực hiện; thi hành (hợp đồng/nghĩa vụ)", "HSK6", "签约双方均应严格履行合同规定的各项义务。", "Qiānyuē shuāngfāng jūn yīng yángé lǚxíng hétóng guīdìng de gè xiàng yìwù.", "Hai bên ký kết đều phải thực hiện nghiêm ngặt các nghĩa vụ quy định trong hợp đồng."],
  ["论文", "lùnwén", "讠 (Ngôn)", 10, "Danh từ", "luận văn; bài báo khoa học", "HSK6", "他的博士毕业论文研究了汉越商务词汇对比。", "Tā de bóshì bìyè lùnwén yánjiū le Hàn-Yuè shāngwù cíhuì duìbǐ.", "Luận văn tốt nghiệp tiến sĩ của anh ấy nghiên cứu đối chiếu từ vựng thương mại Hán - Việt."],
  ["辩论", "biànlùn", "辛 (Tân)", 22, "Động từ / Danh từ", "tranh luận; biện luận", "HSK6", "选手们围绕人工智能伦理展开了激烈的辩论。", "Xuǎnshǒumen wéirào réngōng zhìnéng lúnlǐ zhǎnkāi le jīliè de biànlùn.", "Các thí sinh đã mở ra cuộc tranh luận sôi nổi xoay quanh đạo đức trí tuệ nhân tạo."],
  ["权威", "quánwēi", "木 (Mộc)", 19, "Danh từ / Tính từ", "có thẩm quyền; uy tín", "HSK6", "这份检测报告由国际权威第三方机构出具。", "Zhè fèn jiǎncè bàogào yóu guójì quánwēi dì-sānfāng jīgòu chūjù.", "Bản báo cáo kiểm định này do tổ chức bên thứ ba uy tín quốc tế cấp."],
  ["弥补", "míbǔ", "弓 (Cung)", 15, "Động từ", "bù đắp; khắc phục", "HSK6", "我们提供免费技术升级以弥补此次交付延迟。", "Wǒmen tígōng miǎnfèi jìshù shēngjí yǐ míbǔ cǐcì jiāofù yánchí.", "Chúng tôi cung cấp nâng cấp kỹ thuật miễn phí để bù đắp cho sự chậm trễ bàn giao lần này."],
  ["筛选", "shāixuǎn", "竹 (Trúc)", 21, "Động từ", "sàng lọc; tuyển chọn", "HSK6", "人事部从三百份简历中筛选出十位候选人。", "Rénshìbù cóng sānbǎi fèn jiǎnlì zhōng shāixuǎn chū shí wèi hòuxuǎnrén.", "Phòng nhân sự đã sàng lọc ra 10 ứng viên từ 300 bản CV."],

  // ==========================================
  // HSK7-9 — Thành ngữ 4 chữ, Học thuật, Ngoại giao, Thương mại cao cấp (45 mục từ)
  // ==========================================
  ["互利共赢", "hùlì-gòngyíng", "二 (Nhị)", 34, "Thành ngữ", "đôi bên cùng có lợi (win-win)", "HSK7", "我们秉持互利共赢的原则推进区域经贸合作。", "Wǒmen bǐngchí hùlì-gòngyíng de yuánzé tuījìn qūyù jīngmào hézuò.", "Chúng tôi kiên trì nguyên tắc đôi bên cùng có lợi để thúc đẩy hợp tác kinh tế thương mại khu vực."],
  ["实事求是", "shíshì-qiúshì", "宀 (Miên)", 32, "Thành ngữ", "thực sự cầu thị; xuất phát từ thực tế", "HSK7", "做市场调研必须坚持实事求是的科学态度。", "Zuò shìchǎng diàoyán bìxū jiānchí shíshì-qiúshì de kēxué tàidu.", "Làm khảo sát thị trường bắt buộc phải kiên trì thái độ khoa học thực sự cầu thị."],
  ["因地制宜", "yīndì-zhìyí", "囗 (Vi)", 28, "Thành ngữ", "tùy theo điều kiện địa phương mà áp dụng", "HSK7", "跨国企业应当因地制宜地制定本土化营销策略。", "Kuàguó qǐyè yīngdāng yīndì-zhìyí de zhìdìng běntǔhuà yíngxiāo cèlüè.", "Doanh nghiệp đa quốc gia nên xây dựng chiến lược tiếp thị bản địa hóa phù hợp với từng địa phương."],
  ["精益求精", "jīngyì-qiújíng", "米 (Mễ)", 45, "Thành ngữ", "đã tốt lại càng hoàn thiện hơn", "HSK7", "工匠精神的核心在于对产品质量的精益求精。", "Gōngjiàng jīngshen de héxīn zàiyú duì chǎnpǐn zhìliàng de jīngyì-qiújīng.", "Cốt lõi của tinh thần nghệ nhân nằm ở sự hoàn thiện không ngừng đối với chất lượng sản phẩm."],
  ["举足轻重", "jǔzú-qīngzhòng", "丶 (Chủ)", 34, "Thành ngữ", "có vị trí then chốt, cực kỳ quan trọng", "HSK7", "越南在全球电子制造业供应链中占据举足轻重的地位。", "Yuènán zài quánqiú diànzǐ zhìzàoyè gōngyìngliàn zhōng zhànjù jǔzú-qīngzhòng de dìwèi.", "Việt Nam chiếm vị trí vô cùng quan trọng trong chuỗi cung ứng ngành sản xuất điện tử toàn cầu."],
  ["循序渐进", "xúnxù-jiànjìn", "彳 (Xích)", 37, "Thành ngữ", "tiến hành tuần tự từng bước", "HSK7", "语言学习是一个循序渐进、日积月累的过程。", "Yǔyán xuéxí shì yí gè xúnxù-jiànjìn, rìjī-yuèlěi de guòchéng.", "Học ngôn ngữ là một quá trình tuần tự từng bước, tích lũy ngày tháng."],
  ["画龙点睛", "huàlóng-diǎnjīng", "田 (Điền)", 35, "Thành ngữ", "vẽ rồng chấm mắt (điểm nhấn quyết định)", "HSK7", "结尾的那句总结陈词起到了画龙点睛的作用。", "Jiéwěi de nà jù zǒngjié chéncí qǐdào le huàlóng-diǎnjīng de zuòyòng.", "Câu tổng kết ở phần cuối đã phát huy tác dụng điểm nhấn đắt giá."],
  ["脱颖而出", "tuōyǐng-érchū", "月 (Nguyệt)", 35, "Thành ngữ", "nổi bật vượt trội lên trên đám đông", "HSK7", "凭借流利的中英越三语能力，她在面试中脱颖而出。", "Píngjiè liúlì de Zhōng-Yīng-Yuè sānyǔ nénglì, tā zài miànshì zhōng tuōyǐng-érchū.", "Nhờ năng lực thông thạo ba thứ tiếng Trung - Anh - Việt, cô ấy đã nổi bật vượt trội trong buổi phỏng vấn."],
  ["未雨绸缪", "wèiyǔ-chóumóu", "木 (Mộc)", 38, "Thành ngữ", "chưa mưa đã lo làm nhà (lo xa phòng bị trước)", "HSK8", "面对国际汇率波动，财务团队必须未雨绸缪。", "Miànduì guójì huìlǜ bōdòng, cáiwù tuánduì bìxū wèiyǔ-chóumóu.", "Trước biến động tỷ giá quốc tế, đội ngũ tài chính bắt buộc phải phòng bị từ sớm."],
  ["相辅相成", "xiāngfǔ-xiāngchéng", "木 (Mộc)", 35, "Thành ngữ", "bổ trợ lẫn nhau cùng phát triển", "HSK8", "理论学习与商务实践是相辅相成的。", "Lǐlùn xuéxí yǔ shāngwù shíjiàn shì xiāngfǔ-xiāngchéng de.", "Học tập lý thuyết và thực tiễn thương mại luôn bổ trợ lẫn nhau."],
  ["潜移默化", "qiányí-mòhuà", "氵 (Chấm thủy)", 46, "Thành ngữ", "mưa dầm thấm lâu (thay đổi ngầm tự nhiên)", "HSK8", "优秀的企业文化会对员工产生潜移默化的积极影响。", "Yōuxiù de qǐyè wénhuà huì duì yuángōng chǎnshēng qiányí-mòhuà de jījí yǐngxiǎng.", "Văn hóa doanh nghiệp xuất sắc sẽ tạo ra ảnh hưởng tích cực kiểu mưa dầm thấm lâu đối với nhân viên."],
  ["高瞻远瞩", "gāozhān-yuǎnzhǔ", "高 (Cao)", 47, "Thành ngữ", "nhìn xa trông rộng", "HSK8", "董事会高瞻远瞩，五年前就开始布局新能源赛道。", "Dǒngshìhuì gāozhān-yuǎnzhǔ, wǔ nián qián jiù kāishǐ bùjú xīn néngyuán sàidào.", "Hội đồng quản trị nhìn xa trông rộng, từ 5 năm trước đã bắt đầu bố cục đường đua năng lượng mới."],
  ["当务之急", "dāngwù-zhījí", "彐 (Kệ)", 23, "Thành ngữ", "việc cấp bách hàng đầu hiện nay", "HSK8", "当务之急是尽快恢复港口到工厂的冷链运输。", "Dāngwù-zhījí shì jǐnkuài huīfù gǎngkǒu dào gōngchǎng de lěngliàn yùnshū.", "Việc cấp bách nhất hiện nay là khôi phục vận chuyển chuỗi lạnh từ cảng về nhà máy càng sớm càng tốt."],
  ["一席之地", "yìxí-zhīdì", "一 (Nhất)", 20, "Thành ngữ", "một chỗ đứng vững chắc", "HSK8", "国货品牌凭借高性价比在海外市场占有一席之地。", "Guóhuò pǐnpái píngjiè gāo xìngjiàbǐ zài hǎiwài shìchǎng zhànyǒu yìxí-zhīdì.", "Thương hiệu nội địa nhờ tỷ lệ hiệu năng/giá thành cao đã chiếm được một chỗ đứng trên thị trường quốc tế."],
  ["琳琅满目", "línláng-mǎnmù", "王 (Ngọc)", 41, "Thành ngữ", "rực rỡ muôn màu, bạt ngàn hàng hóa đẹp", "HSK8", "义乌国际商贸城里的商品琳琅满目，应有尽有。", "Yìwū Guójì Shāngmàochéng lǐ de shāngpǐn línláng-mǎnmù, yīngyǒu-jìnyǒu.", "Hàng hóa trong Chợ thương mại quốc tế Nghĩa Ô bạt ngàn đẹp mắt, thứ gì cũng có."],
  ["融会贯通", "rónghuì-guàntōng", "虫 (Trùng)", 40, "Thành ngữ", "hiểu thấu đáo và vận dụng linh hoạt", "HSK9", "高级翻译需要将语言技巧与行业背景知识融会贯通。", "Gāojí fānyì xūyào jiāng yǔyán jìqiǎo yǔ hángyè bèijǐng zhīshi rónghuì-guàntōng.", "Phiên dịch cao cấp cần dung hợp thấu đáo kỹ năng ngôn ngữ với kiến thức nền tảng của ngành."],
  ["迫在眉睫", "pòzài-méijié", "辶 (Sước)", 36, "Thành ngữ", "cấp bách ngay trước mắt", "HSK9", "节能减排与碳中和转型已是迫在眉睫的全球议题。", "Jiénéng jiǎnpái yǔ tànzhōnghé zhuǎnxíng yǐ shì pòzài-méijié de quánqiú yìtí.", "Tiết kiệm năng lượng, giảm phát thải và chuyển đổi trung hòa carbon đã là nghị sự toàn cầu cấp bách ngay trước mắt."],
  ["推陈出新", "tuīchén-chūxīn", "扌 (Tài gảy)", 36, "Thành ngữ", "bỏ cũ đổi mới; sáng tạo cái mới từ nền tảng cũ", "HSK9", "老字号品牌只有不断推陈出新，才能赢得年轻消费者。", "Lǎozìhào pǐnpái zhǐyǒu búduàn tuīchén-chūxīn, cáinéng yíngdé niánqīng xiāofèizhě.", "Thương hiệu lâu đời chỉ có không ngừng đổi mới sáng tạo mới có thể chinh phục người tiêu dùng trẻ."],
  ["炉火纯青", "lúhuǒ-chúnqīng", "火 (Hỏa)", 33, "Thành ngữ", "trình độ điêu luyện, thượng thừa", "HSK9", "他的同声传译技艺已经达到了炉火纯青的境界。", "Tā de tóngshēng chuányì jìyì yǐjīng dádào le lúhuǒ-chúnqīng de jìngjiè.", "Kỹ nghệ dịch cabin của anh ấy đã đạt tới cảnh giới điêu luyện thượng thừa."],
  ["运筹帷幄", "yùnchóu-wéiwò", "辶 (Sước)", 44, "Thành ngữ", "vạch kế hoạch chiến lược tài tình", "HSK9", "优秀的供应链总监能够在复杂局势中运筹帷幄。", "Yōuxiù de gōngyìngliàn zǒngjiān nénggòu zài fùzá júshì zhōng yùnchóu-wéiwò.", "Giám đốc chuỗi cung ứng xuất sắc có thể hoạch định chiến lược tài tình trong cục diện phức tạp."],
  ["赋能", "fùnéng", "贝 (Bối)", 22, "Động từ", "trao quyền; tiếp sức công nghệ (empower)", "HSK7", "数字化工具为传统外贸企业赋能提效。", "Shùzìhuà gōngjù wèi chuántǒng wàimào qǐyè fùnéng tíxiào.", "Công cụ số hóa tiếp sức và nâng cao hiệu suất cho doanh nghiệp ngoại thương truyền thống."],
  ["生态圈", "shēngtàiquān", "生 (Sinh)", 24, "Danh từ", "hệ sinh thái (ecosystem)", "HSK7", "打造涵盖支付、物流与金融的跨境电商生态圈。", "Dǎzào hángài zhīfù, wùliú yǔ jīnróng de kuàjìng diànshāng shēngtàiquān.", "Xây dựng hệ sinh thái thương mại điện tử xuyên biên giới bao gồm thanh toán, logistics và tài chính."],
  ["宏观调控", "hóngguān tiáokòng", "宀 (Miên)", 34, "Danh từ", "điều tiết vĩ mô", "HSK8", "政府通过货币与财政政策进行宏观调控。", "Zhèngfǔ tōngguò huòbì yǔ cáizhèng zhèngcè jìnxíng hóngguān tiáokòng.", "Chính phủ tiến hành điều tiết vĩ mô thông qua chính sách tiền tệ và tài khóa."],
  ["仲裁", "zhòngcái", "亻 (Nhân đứng)", 18, "Danh từ / Động từ", "trọng tài thương mại (arbitration)", "HSK8", "合同规定如有争议应提交国际经济贸易仲裁委员会。", "Hétóng guīdìng rú yǒu zhēngyì yīng tíjiāo Guójì Jīngjì Màoyì Zhòngcái Wěiyuánhuì.", "Hợp đồng quy định nếu có tranh chấp sẽ đệ trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế."],
  ["里程碑", "lǐchéngbēi", "里 (Lý)", 32, "Danh từ", "cột mốc quan trọng (milestone)", "HSK7", "新工厂投产标志着公司全球化迈出了里程碑式的一步。", "Xīn gōngchǎng tóuchǎn biāozhì zhe gōngsī quánqiúhuà màichū le lǐchéngbēi shì de yí bù.", "Nhà máy mới đi vào sản xuất đánh dấu bước tiến mang tính cột mốc trong quá trình toàn cầu hóa của công ty."],
  ["闭环", "bìhuán", "门 (Môn)", 14, "Danh từ", "vòng khép kín (closed-loop)", "HSK8", "形成从设计、打样到量产质检的全流程业务闭环。", "Xíngchéng cóng shèjì, dǎyàng dào liàngchǎn zhìjiǎn de quán liúchéng yèwù bìhuán.", "Hình thành vòng nghiệp vụ khép kín toàn quy trình từ thiết kế, làm mẫu đến sản xuất hàng loạt và kiểm định."],
  ["壁垒", "bìlěi", "土 (Thổ)", 25, "Danh từ", "rào cản (barrier)", "HSK8", "提升环保合规标准有助于突破绿色贸易壁垒。", "Tíshēng huánbǎo héguī biāozhǔn yǒuzhùyú tūpò lǜsè màoyì bìlěi.", "Nâng cao tiêu chuẩn tuân thủ môi trường giúp đột phá rào cản thương mại xanh."],
  ["溢价", "yìjià", "氵 (Chấm thủy)", 19, "Danh từ", "giá trị thặng dư thương hiệu (premium)", "HSK8", "卓越的品牌口碑为产品带来了显著的品牌溢价。", "Zhuóyuè de pǐnpái kǒubēi wèi chǎnpǐn dàilái le xiǎnzhù de pǐnpái yìjià.", "Danh tiếng thương hiệu vượt trội đã mang lại giá trị thặng dư thương hiệu rõ rệt cho sản phẩm."],
  ["迭代", "diédài", "辶 (Sước)", 13, "Động từ / Danh từ", "cập nhật lặp lại; nâng cấp thế hệ (iteration)", "HSK7", "互联网产品需要根据用户反馈快速迭代。", "Hùliánwǎng chǎnpǐn xūyào gēnjù yònghù fǎnkuì kuàisù diédài.", "Sản phẩm Internet cần nâng cấp nhanh chóng dựa trên phản hồi của người dùng."],
  ["前瞻性", "qiánzhānxìng", "刂 (Đao đứng)", 34, "Danh từ / Tính từ", "tính tầm nhìn dự báo trước", "HSK9", "这份行业白皮书具有极高的学术价值与前瞻性。", "Zhè fèn hángyè báipíshū jùyǒu jí gāo de xuéshù jiàzhí yǔ qiánzhānxìng.", "Cuốn sách trắng ngành này có giá trị học thuật và tính dự báo tầm nhìn cực cao."],

  // ==========================================
  // Chữ đơn & Hư từ cốt lõi bổ trợ phân tích từng chữ (65 mục từ)
  // ==========================================
  ["的", "de", "白 (Bạch)", 8, "Trợ từ", "của (trợ từ kết cấu định ngữ)", "HSK1", "这是我的书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."],
  ["了", "le", "乛 (Ất)", 2, "Trợ từ", "rồi (trợ từ động thái/ngữ khí)", "HSK1", "我吃了早饭。", "Wǒ chī le zǎofàn.", "Tôi đã ăn sáng rồi."],
  ["吗", "ma", "口 (Khẩu)", 6, "Trợ từ", "không? (trợ từ nghi vấn)", "HSK1", "你是留学生吗？", "Nǐ shì liúxuéshēng ma?", "Bạn là du học sinh phải không?"],
  ["呢", "ne", "口 (Khẩu)", 8, "Trợ từ", "thế còn...? (trợ từ ngữ khí)", "HSK1", "我很好，你呢？", "Wǒ hěn hǎo, nǐ ne?", "Tôi rất khỏe, còn bạn thì sao?"],
  ["吧", "ba", "口 (Khẩu)", 7, "Trợ từ", "nhé, nhỉ, đi (trợ từ thương lượng)", "HSK2", "我们一起走吧。", "Wǒmen yìqǐ zǒu ba.", "Chúng ta cùng đi nhé."],
  ["在", "zài", "土 (Thổ)", 6, "Động từ / Giới từ / Phó từ", "ở tại; đang", "HSK1", "他在办公室工作。", "Tā zài bàngōngshì gōngzuò.", "Anh ấy đang làm việc ở văn phòng."],
  ["是", "shì", "日 (Nhật)", 9, "Động từ", "là; đúng; vâng", "HSK1", "我是商务汉语专业的学生。", "Wǒ shì Shāngwù Hànyǔ zhuānyè de xuésheng.", "Tôi là sinh viên chuyên ngành Tiếng Trung Thương mại."],
  ["有", "yǒu", "月 (Nguyệt)", 6, "Động từ", "có", "HSK1", "你有微信吗？", "Nǐ yǒu Wēixìn ma?", "Bạn có WeChat không?"],
  ["不", "bù", "一 (Nhất)", 4, "Phó từ", "không", "HSK1", "我今天不忙。", "Wǒ jīntiān bù máng.", "Hôm nay tôi không bận."],
  ["没", "méi", "氵 (Chấm thủy)", 7, "Phó từ", "chưa; không có", "HSK1", "我还没去过北京。", "Wǒ hái méi qùguò Běijīng.", "Tôi vẫn chưa từng đi Bắc Kinh."],
  ["很", "hěn", "彳 (Xích)", 9, "Phó từ", "rất", "HSK1", "越南菜很好吃。", "Yuènáncài hěn hǎochī.", "Món ăn Việt Nam rất ngon."],
  ["太", "tài", "大 (Đại)", 4, "Phó từ", "quá; lắm", "HSK1", "太好了！", "Tài hǎo le!", "Tốt quá rồi!"],
  ["都", "dōu", "阝 (Ấp)", 10, "Phó từ", "đều", "HSK1", "我们都是越南人。", "Wǒmen dōu shì Yuènánrén.", "Chúng tôi đều là người Việt Nam."],
  ["也", "yě", "乛 (Ất)", 3, "Phó từ", "cũng", "HSK1", "我也喜欢学中文。", "Wǒ yě xǐhuan xué Zhōngwén.", "Tôi cũng thích học tiếng Trung."],
  ["和", "hé", "口 (Khẩu)", 8, "Liên từ / Giới từ", "và; với", "HSK1", "我和他一起去广州。", "Wǒ hé tā yìqǐ qù Guǎngzhōu.", "Tôi và anh ấy cùng đi Quảng Châu."],
  ["这", "zhè", "辶 (Sước)", 7, "Đại từ", "này; đây", "HSK1", "这是我们的新产品。", "Zhè shì wǒmen de xīn chǎnpǐn.", "Đây là sản phẩm mới của chúng tôi."],
  ["那", "nà", "阝 (Ấp)", 6, "Đại từ", "kia; đó", "HSK1", "那家工厂的规模很大。", "Nà jiā gōngchǎng de guīmó hěn dà.", "Quy mô của nhà máy kia rất lớn."],
  ["哪", "nǎ", "口 (Khẩu)", 9, "Đại từ", "nào; đâu", "HSK1", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
  ["谁", "shéi", "讠 (Ngôn)", 10, "Đại từ", "ai", "HSK1", "谁是你们的采购经理？", "Shéi shì nǐmen de cǎigòu jīnglǐ?", "Ai là giám đốc thu mua của các bạn?"],
  ["什么", "shénme", "亻 (Nhân đứng)", 7, "Đại từ", "cái gì; gì", "HSK1", "你需要什么帮助？", "Nǐ xūyào shénme bāngzhù?", "Bạn cần sự giúp đỡ gì?"],
  ["多少", "duōshao", "夕 (Tịch)", 10, "Đại từ", "bao nhiêu", "HSK1", "起订量是多少？", "Qǐdìngliàng shì duōshao?", "Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?"],
  ["几", "jǐ", "几 (Kỷ)", 2, "Đại từ", "mấy; vài", "HSK1", "你去过几次中国？", "Nǐ qùguò jǐ cì Zhōngguó?", "Bạn đã đi Trung Quốc mấy lần rồi?"],
  ["怎么", "zěnme", "心 (Tâm)", 12, "Đại từ", "như thế nào; làm sao", "HSK1", "这个字怎么读？", "Zhège zì zěnme dú?", "Chữ này đọc thế nào?"],
  ["怎么样", "zěnmeyàng", "心 (Tâm)", 22, "Đại từ", "như thế nào; ra sao", "HSK1", "这批货的质量怎么样？", "Zhè pī huò de zhìliàng zěnmeyàng?", "Chất lượng lô hàng này thế nào?"],
  ["个", "gè", "人 (Nhân)", 3, "Lượng từ", "cái; chiếc; người", "HSK1", "我有两个姐姐。", "Wǒ yǒu liǎng gè jiějie.", "Tôi có hai người chị gái."],
  ["本", "běn", "木 (Mộc)", 5, "Lượng từ / Danh từ", "quyển; cuốn; gốc", "HSK1", "这本词典很实用。", "Zhè běn cídiǎn hěn shíyòng.", "Cuốn từ điển này rất thiết thực."],
  ["块", "kuài", "土 (Thổ)", 7, "Lượng từ", "đồng (tệ); miếng; cục", "HSK1", "这杯奶茶十五块钱。", "Zhè bēi nǎichá shíwǔ kuài qián.", "Ly trà sữa này 15 tệ."],
  ["岁", "suì", "山 (Sơn)", 6, "Danh từ / Lượng từ", "tuổi", "HSK1", "我今年二十五岁。", "Wǒ jīnnián èrshíwǔ suì.", "Năm nay tôi 25 tuổi."],
  ["年", "nián", "干 (Can)", 6, "Danh từ", "năm", "HSK1", "祝您新年快乐！", "Zhù nín xīnnián kuàilè!", "Chúc ngài năm mới vui vẻ!"],
  ["号", "hào", "口 (Khẩu)", 5, "Danh từ", "ngày (trong tháng); số", "HSK1", "你的手机号是多少？", "Nǐ de shǒujīhào shì duōshao?", "Số điện thoại di động của bạn là bao nhiêu?"],
  ["点", "diǎn", "灬 (Hỏa chấm)", 9, "Danh từ / Động từ", "giờ; chút; gọi món", "HSK1", "我们开始点菜吧。", "Wǒmen kāishǐ diǎncài ba.", "Chúng ta bắt đầu gọi món nhé."],
  ["分", "fēn", "刀 (Đao)", 4, "Danh từ / Động từ", "phút; điểm; chia", "HSK1", "现在八点三十分。", "Xiànzài bā diǎn sānshí fēn.", "Bây giờ là 8 giờ 30 phút."],
  ["能", "néng", "月 (Nguyệt)", 10, "Động từ năng nguyện", "có thể", "HSK1", "你能帮我翻译一下吗？", "Nǐ néng bāng wǒ fānyì yíxià ma?", "Bạn có thể giúp tôi dịch một chút không?"],
  ["会", "huì", "人 (Nhân)", 6, "Động từ năng nguyện", "biết (qua học tập); sẽ", "HSK1", "我会说汉语和英语。", "Wǒ huì shuō Hànyǔ hé Yīngyǔ.", "Tôi biết nói tiếng Trung và tiếng Anh."],
  ["可以", "kěyǐ", "口 (Khẩu)", 9, "Động từ năng nguyện", "có thể; được phép", "HSK2", "这里可以微信扫码支付。", "Zhèlǐ kěyǐ Wēixìn sǎomǎ zhīfù.", "Ở đây có thể quét mã WeChat thanh toán."],
  ["要", "yào", "覀 (Á)", 9, "Động từ", "muốn; phải; cần", "HSK2", "明天我要去河内出差。", "Míngtiān wǒ yào qù Hénèi chūchāi.", "Ngày mai tôi phải đi công tác Hà Nội."],
  ["给", "gěi", "纟 (Mịch)", 9, "Động từ / Giới từ", "cho; đưa cho", "HSK2", "请给我发一份产品目录。", "Qǐng gěi wǒ fā yí fèn chǎnpǐn mùlù.", "Vui lòng gửi cho tôi một bản danh mục sản phẩm."],
  ["到", "dào", "刂 (Đao đứng)", 8, "Động từ", "đến; tới", "HSK2", "货物已经到港口了。", "Huòwù yǐjīng dào gǎngkǒu le.", "Hàng hóa đã tới cảng rồi."],
  ["从", "cóng", "人 (Nhân)", 4, "Giới từ", "từ", "HSK2", "从广州到海防海运只要三天。", "Cóng Guǎngzhōu dào Hǎifáng hǎiyùn zhǐyào sān tiān.", "Vận chuyển đường biển từ Quảng Châu đến Hải Phòng chỉ mất 3 ngày."],
  ["对", "duì", "寸 (Thốn)", 5, "Tính từ / Giới từ", "đúng; đối với", "HSK2", "您说得完全对。", "Nín shuō de wánquán duì.", "Ngài nói hoàn toàn đúng."],
  ["比", "bǐ", "比 (Tỷ)", 4, "Giới từ", "so với; hơn", "HSK2", "今天比昨天凉快多了。", "Jīntiān bǐ zuótiān liángkuai duō le.", "Hôm nay mát hơn hôm qua nhiều rồi."],
  ["把", "bǎ", "扌 (Tài gảy)", 7, "Giới từ / Lượng từ", "đem, lấy (câu chữ 把)", "HSK3", "请把合同发给我审核。", "Qǐng bǎ hétóng fā gěi wǒ shěnhé.", "Vui lòng gửi hợp đồng cho tôi kiểm duyệt."],
  ["被", "bèi", "衤 (Y)", 10, "Giới từ", "bị, được (câu bị động)", "HSK3", "他的提案被公司采纳了。", "Tā de tí'àn bèi gōngsī cǎinà le.", "Đề xuất của anh ấy đã được công ty tiếp nhận."],
  ["让", "ràng", "讠 (Ngôn)", 5, "Động từ", "bảo; để; nhường", "HSK2", "我让助理去机场接您。", "Wǒ ràng zhùlǐ qù jīchǎng jiē nín.", "Tôi bảo trợ lý ra sân bay đón ngài."],
  ["跟", "gēn", "足 (Túc)", 13, "Giới từ / Liên từ", "cùng với; theo", "HSK3", "我跟工厂老板谈好了价格。", "Wǒ gēn gōngchǎng lǎobǎn tán hǎo le jiàgé.", "Tôi đã đàm phán xong giá cả với ông chủ xưởng."],
  ["向", "xiàng", "口 (Khẩu)", 6, "Giới từ", "hướng về; với", "HSK3", "向您介绍一下我们的新品。", "Xiàng nín jièshào yíxià wǒmen de xīnpǐn.", "Xin giới thiệu với ngài sản phẩm mới của chúng tôi."],
  ["新", "xīn", "斤 (Cân)", 13, "Tính từ", "mới", "HSK1", "这是今年的新款。", "Zhè shì jīnnián de xīnkuǎn.", "Đây là mẫu mới của năm nay."],
  ["老", "lǎo", "耂 (Lão)", 6, "Tính từ", "cũ; già; lâu năm", "HSK2", "他是我们的老客户。", "Tā shì wǒmen de lǎo kèhù.", "Ông ấy là khách hàng lâu năm của chúng tôi."],
  ["高", "gāo", "高 (Cao)", 10, "Tính từ", "cao", "HSK2", "这栋写字楼非常高。", "Zhè dòng xiězìlóu fēicháng gāo.", "Tòa nhà văn phòng này rất cao."],
  ["低", "dī", "亻 (Nhân đứng)", 7, "Tính từ", "thấp", "HSK3", "我们的不良率非常低。", "Wǒmen de bùliánglǜ fēicháng dī.", "Tỷ lệ hàng lỗi của chúng tôi cực kỳ thấp."],
  ["长", "cháng", "长 (Trường)", 4, "Tính từ", "dài", "HSK2", "这条河很长。", "Zhè tiáo hé hěn cháng.", "Con sông này rất dài."],
  ["短", "duǎn", "矢 (Thỉ)", 12, "Tính từ", "ngắn", "HSK3", "交货周期缩短了三天。", "Jiāohuò zhōuqī suōduǎn le sān tiān.", "Chu kỳ giao hàng đã rút ngắn được ba ngày."],
  ["远", "yuǎn", "辶 (Sước)", 7, "Tính từ", "xa", "HSK2", "工厂离港口不远。", "Gōngchǎng lí gǎngkǒu bù yuǎn.", "Nhà máy cách cảng không xa."],
  ["近", "jìn", "辶 (Sước)", 7, "Tính từ", "gần", "HSK2", "最近生意怎么样？", "Zuìjìn shēngyi zěnmeyàng?", "Dạo này việc kinh doanh thế nào?"],
  ["真", "zhēn", "目 (Mục)", 10, "Tính từ / Phó từ", "thật; chân thật", "HSK2", "这件丝绸衬衫是真丝的。", "Zhè jiàn sīchóu chènshān shì zhēnsī de.", "Chiếc áo sơ mi lụa này làm bằng tơ tằm thật."],
  ["假", "jiǎ", "亻 (Nhân đứng)", 11, "Tính từ / Danh từ", "giả; kỳ nghỉ (jià)", "HSK3", "我们商城承诺假一赔十。", "Wǒmen shāngchéng chéngnuò jiǎ yī péi shí.", "Trung tâm thương mại chúng tôi cam kết hàng giả đền gấp mười."],
  ["难", "nán", "隹 (Chuy)", 10, "Tính từ", "khó", "HSK3", "只要方法对，学中文并不难。", "Zhǐyào fāngfǎ duì, xué Zhōngwén bìng bù nán.", "Chỉ cần đúng phương pháp, học tiếng Trung hoàn toàn không khó."],
  ["容易", "róngyì", "宀 (Miên)", 18, "Tính từ", "dễ dàng", "HSK3", "用思维导图记单词很容易。", "Yòng sīwéi dǎotú jì dāncí hěn róngyì.", "Dùng sơ đồ tư duy nhớ từ vựng rất dễ."],
  ["早", "zǎo", "日 (Nhật)", 6, "Danh từ / Tính từ", "buổi sáng; sớm", "HSK1", "早上好！", "Zǎoshang hǎo!", "Chào buổi sáng!"],
  ["晚", "wǎn", "日 (Nhật)", 11, "Danh từ / Tính từ", "buổi tối; muộn", "HSK1", "晚上我们去吃火锅。", "Wǎnshang wǒmen qù chī huǒguō.", "Buổi tối chúng ta đi ăn lẩu."],
  ["忙", "máng", "忄 (Tâm đứng)", 6, "Tính từ", "bận rộn", "HSK1", "年底物流非常忙。", "Niándǐ wùliú fēicháng máng.", "Cuối năm vận chuyển logistics vô cùng bận rộn."],
  ["累", "lèi", "纟 (Mịch)", 11, "Tính từ", "mệt mỏi", "HSK2", "虽然很累，但是很有成就感。", "Suīrán hěn lèi, dànshì hěn yǒu chéngjiùgǎn.", "Tuy rất mệt nhưng rất có cảm giác thành tựu."],
  ["饿", "è", "饣 (Thực)", 10, "Tính từ", "đói", "HSK3", "肚子饿了，点个外卖吧。", "Dùzi è le, diǎn gè wàimài ba.", "Đói bụng rồi, đặt đồ ăn ngoài nhé."],
  ["渴", "kě", "氵 (Chấm thủy)", 12, "Tính từ", "khát", "HSK3", "口渴了就喝点绿茶。", "Kǒu kě le jiù hē diǎn lǜchá.", "Khát nước thì uống chút trà xanh."],
  ["甜", "tián", "舌 (Thiệt)", 11, "Tính từ", "ngọt", "HSK3", "这杯奶茶太甜了。", "Zhè bēi nǎichá tài tián le.", "Ly trà sữa này ngọt quá."],
  ["辣", "là", "辛 (Tân)", 14, "Tính từ", "cay", "HSK3", "四川菜又麻又辣。", "Sìchuāncài yòu má yòu là.", "Món Tứ Xuyên vừa tê vừa cay."],
];

// Single-character fallback table for intelligent character-by-character analysis
const CHAR_FALLBACK_TABLE: Record<
  string,
  { pinyin: string; radical: string; strokeCount: number; meaningVi: string }
> = {
  学: { pinyin: "xué", radical: "子 (Tử)", strokeCount: 8, meaningVi: "học" },
  习: { pinyin: "xí", radical: "习 (Tập)", strokeCount: 3, meaningVi: "ôn tập, thực hành" },
  生: { pinyin: "shēng", radical: "生 (Sinh)", strokeCount: 5, meaningVi: "sinh sống, học sinh" },
  语: { pinyin: "yǔ", radical: "讠 (Ngôn)", strokeCount: 9, meaningVi: "ngôn ngữ" },
  文: { pinyin: "wén", radical: "文 (Văn)", strokeCount: 4, meaningVi: "văn tự, văn hóa" },
  字: { pinyin: "zì", radical: "子 (Tử)", strokeCount: 6, meaningVi: "chữ viết" },
  汉: { pinyin: "Hàn", radical: "氵 (Chấm thủy)", strokeCount: 5, meaningVi: "Hán, tiếng Hán" },
  国: { pinyin: "guó", radical: "囗 (Vi)", strokeCount: 8, meaningVi: "quốc gia, đất nước" },
  家: { pinyin: "jiā", radical: "宀 (Miên)", strokeCount: 10, meaningVi: "nhà, gia đình" },
  工: { pinyin: "gōng", radical: "工 (Công)", strokeCount: 3, meaningVi: "công việc, công nhân" },
  作: { pinyin: "zuò", radical: "亻 (Nhân đứng)", strokeCount: 7, meaningVi: "làm việc" },
  商: { pinyin: "shāng", radical: "口 (Khẩu)", strokeCount: 11, meaningVi: "thương mại, buôn bán" },
  业: { pinyin: "yè", radical: "一 (Nhất)", strokeCount: 5, meaningVi: "ngành nghề, sự nghiệp" },
  贸: { pinyin: "mào", radical: "贝 (Bối)", strokeCount: 12, meaningVi: "mậu dịch" },
  易: { pinyin: "yì", radical: "日 (Nhật)", strokeCount: 8, meaningVi: "giao dịch, dễ dàng" },
  货: { pinyin: "huò", radical: "贝 (Bối)", strokeCount: 8, meaningVi: "hàng hóa" },
  物: { pinyin: "wù", radical: "牜 (Ngưu)", strokeCount: 8, meaningVi: "vật phẩm" },
  流: { pinyin: "liú", radical: "氵 (Chấm thủy)", strokeCount: 10, meaningVi: "lưu thông, dòng chảy" },
  海: { pinyin: "hǎi", radical: "氵 (Chấm thủy)", strokeCount: 10, meaningVi: "biển, hải ngoại" },
  关: { pinyin: "guān", radical: "八 (Bát)", strokeCount: 6, meaningVi: "cửa ải, hải quan, đóng" },
  电: { pinyin: "diàn", radical: "电 (Điện)", strokeCount: 5, meaningVi: "điện, điện tử" },
  话: { pinyin: "huà", radical: "讠 (Ngôn)", strokeCount: 8, meaningVi: "lời nói, điện thoại" },
  机: { pinyin: "jī", radical: "木 (Mộc)", strokeCount: 6, meaningVi: "máy móc, cơ hội" },
  场: { pinyin: "chǎng", radical: "土 (Thổ)", strokeCount: 6, meaningVi: "sân, quảng trường, nơi" },
  店: { pinyin: "diàn", radical: "广 (Nghiễm)", strokeCount: 8, meaningVi: "cửa tiệm, quán" },
  饭: { pinyin: "fàn", radical: "饣 (Thực)", strokeCount: 7, meaningVi: "cơm, bữa ăn" },
  菜: { pinyin: "cài", radical: "艹 (Thảo đầu)", strokeCount: 11, meaningVi: "món ăn, rau" },
  茶: { pinyin: "chá", radical: "艹 (Thảo đầu)", strokeCount: 9, meaningVi: "trà" },
  奶: { pinyin: "nǎi", radical: "女 (Nữ)", strokeCount: 5, meaningVi: "sữa" },
  客: { pinyin: "kè", radical: "宀 (Miên)", strokeCount: 9, meaningVi: "khách, khách hàng" },
  户: { pinyin: "hù", radical: "户 (Hộ)", strokeCount: 4, meaningVi: "hộ gia đình, tài khoản" },
  价: { pinyin: "jià", radical: "亻 (Nhân đứng)", strokeCount: 6, meaningVi: "giá cả" },
  格: { pinyin: "gé", radical: "木 (Mộc)", strokeCount: 10, meaningVi: "quy cách, tiêu chuẩn" },
  质: { pinyin: "zhì", radical: "贝 (Bối)", strokeCount: 8, meaningVi: "chất lượng" },
  量: { pinyin: "liàng", radical: "里 (Lý)", strokeCount: 12, meaningVi: "số lượng, đo lường" },
  单: { pinyin: "dān", radical: "十 (Thập)", strokeCount: 8, meaningVi: "đơn từ, hóa đơn" },
  款: { pinyin: "kuǎn", radical: "欠 (Khiếm)", strokeCount: 12, meaningVi: "khoản tiền, mẫu mã" },
  支: { pinyin: "zhī", radical: "支 (Chi)", strokeCount: 4, meaningVi: "chi trả, nhánh" },
  付: { pinyin: "fù", radical: "亻 (Nhân đứng)", strokeCount: 5, meaningVi: "thanh toán, trả" },
  宝: { pinyin: "bǎo", radical: "宀 (Miên)", strokeCount: 8, meaningVi: "bảo bối, quý giá" },
  银: { pinyin: "yín", radical: "钅 (Kim)", strokeCount: 11, meaningVi: "bạc, ngân hàng" },
  行: { pinyin: "háng / xíng", radical: "行 (Hành)", strokeCount: 6, meaningVi: "ngành nghề; đi" },
  出: { pinyin: "chū", radical: "凵 (Khảm)", strokeCount: 5, meaningVi: "ra, xuất khẩu" },
  进: { pinyin: "jìn", radical: "辶 (Sước)", strokeCount: 7, meaningVi: "vào, nhập khẩu" },
  运: { pinyin: "yùn", radical: "辶 (Sước)", strokeCount: 7, meaningVi: "vận chuyển, vận may" },
  费: { pinyin: "fèi", radical: "贝 (Bối)", strokeCount: 9, meaningVi: "chi phí" },
  合: { pinyin: "hé", radical: "人 (Nhân)", strokeCount: 6, meaningVi: "hợp tác, phù hợp" },
  同: { pinyin: "tóng", radical: "口 (Khẩu)", strokeCount: 6, meaningVi: "cùng, hợp đồng" },
  公: { pinyin: "gōng", radical: "八 (Bát)", strokeCount: 4, meaningVi: "công cộng, công ty" },
  司: { pinyin: "sī", radical: "口 (Khẩu)", strokeCount: 5, meaningVi: "quản lý, công ty" },
  经: { pinyin: "jīng", radical: "纟 (Mịch)", strokeCount: 8, meaningVi: "kinh tế, trải qua" },
  理: { pinyin: "lǐ", radical: "王 (Ngọc)", strokeCount: 11, meaningVi: "quản lý, đạo lý" },
  智: { pinyin: "zhì", radical: "日 (Nhật)", strokeCount: 12, meaningVi: "trí tuệ" },
  科: { pinyin: "kē", radical: "禾 (Hòa)", strokeCount: 9, meaningVi: "khoa học" },
  技: { pinyin: "jì", radical: "扌 (Tài gảy)", strokeCount: 7, meaningVi: "kỹ thuật" },
  新: { pinyin: "xīn", radical: "斤 (Cân)", strokeCount: 13, meaningVi: "mới" },
  成: { pinyin: "chéng", radical: "戈 (Qua)", strokeCount: 6, meaningVi: "hoàn thành, thành công" },
  功: { pinyin: "gōng", radical: "力 (Lực)", strokeCount: 5, meaningVi: "công sức, thành công" },
  安: { pinyin: "ān", radical: "宀 (Miên)", strokeCount: 6, meaningVi: "an toàn, bình an" },
  全: { pinyin: "quán", radical: "人 (Nhân)", strokeCount: 6, meaningVi: "toàn bộ, an toàn" },
  美: { pinyin: "měi", radical: "羊 (Dương)", strokeCount: 9, meaningVi: "đẹp, tốt đẹp" },
  越: { pinyin: "Yuè", radical: "走 (Tẩu)", strokeCount: 12, meaningVi: "Việt (Việt Nam), vượt" },
  南: { pinyin: "nán", radical: "十 (Thập)", strokeCount: 9, meaningVi: "phương Nam" },
  北: { pinyin: "běi", radical: "匕 (Chủy)", strokeCount: 5, meaningVi: "phương Bắc" },
  京: { pinyin: "jīng", radical: "亠 (Đầu)", strokeCount: 8, meaningVi: "kinh đô (Bắc Kinh)" },
  广: { pinyin: "guǎng", radical: "广 (Nghiễm)", strokeCount: 3, meaningVi: "rộng lớn (Quảng Châu)" },
  州: { pinyin: "zhōu", radical: "川 (Xuyên)", strokeCount: 6, meaningVi: "châu, vùng" },
};

const OFFLINE_MAP = new Map<string, DictionaryEntry>();

for (const [
  hanzi,
  pinyin,
  radical,
  strokeCount,
  partOfSpeech,
  meaningVi,
  level,
  exampleZh,
  examplePinyin,
  exampleVi,
] of RAW_DICTIONARY) {
  OFFLINE_MAP.set(hanzi, {
    hanzi,
    pinyin,
    radical,
    strokeCount,
    partOfSpeech,
    meaningVi,
    level,
    exampleZh,
    examplePinyin,
    exampleVi,
  });

  // Also index individual characters from multi-character entries if not already present
  if (hanzi.length === 1 && !CHAR_FALLBACK_TABLE[hanzi]) {
    CHAR_FALLBACK_TABLE[hanzi] = {
      pinyin,
      radical,
      strokeCount,
      meaningVi,
    };
  }
}

// Second pass: index constituent characters of compounds into CHAR_FALLBACK_TABLE
for (const [hanzi, pinyin, radical, strokeCount, , meaningVi] of RAW_DICTIONARY) {
  if (hanzi.length > 1) {
    const syllables = pinyin.split(/[\s-]+/).filter(Boolean);
    const chars = Array.from(hanzi);
    chars.forEach((ch, idx) => {
      if (!CHAR_FALLBACK_TABLE[ch]) {
        CHAR_FALLBACK_TABLE[ch] = {
          pinyin: syllables[idx] ?? pinyin,
          radical,
          strokeCount: Math.max(2, Math.round(strokeCount / chars.length)),
          meaningVi: `chữ trong "${hanzi}" (${meaningVi})`,
        };
      }
    });
  }
}

const RADICAL_BY_UNICODE_RANGE: { start: number; end: number; radical: string }[] = [
  { start: 0x4e00, end: 0x4eff, radical: "一 (Nhất) / 亻 (Nhân)" },
  { start: 0x4f00, end: 0x51ff, radical: "亻 (Nhân đứng)" },
  { start: 0x5200, end: 0x53ff, radical: "刂 (Đao) / 力 (Lực)" },
  { start: 0x5400, end: 0x56ff, radical: "口 (Khẩu)" },
  { start: 0x5700, end: 0x58ff, radical: "土 (Thổ)" },
  { start: 0x5900, end: 0x5bff, radical: "女 (Nữ) / 宀 (Miên)" },
  { start: 0x5c00, end: 0x5eff, radical: "山 (Sơn) / 巾 (Cân)" },
  { start: 0x5f00, end: 0x62ff, radical: "忄 (Tâm) / 戈 (Qua)" },
  { start: 0x6300, end: 0x66ff, radical: "扌 (Tài gảy) / 日 (Nhật)" },
  { start: 0x6700, end: 0x6aff, radical: "木 (Mộc)" },
  { start: 0x6b00, end: 0x6fff, radical: "氵 (Chấm thủy)" },
  { start: 0x7000, end: 0x73ff, radical: "火 (Hỏa) / 王 (Ngọc)" },
  { start: 0x7400, end: 0x77ff, radical: "田 (Điền) / 目 (Mục)" },
  { start: 0x7800, end: 0x7dff, radical: "石 (Thạch) / 禾 (Hòa)" },
  { start: 0x7e00, end: 0x81ff, radical: "纟 (Mịch) / 月 (Nguyệt)" },
  { start: 0x8200, end: 0x86ff, radical: "艹 (Thảo đầu)" },
  { start: 0x8700, end: 0x8aff, radical: "讠 (Ngôn)" },
  { start: 0x8b00, end: 0x8fff, radical: "贝 (Bối) / 辶 (Sước)" },
  { start: 0x9000, end: 0x94ff, radical: "辶 (Sước) / 钅 (Kim)" },
  { start: 0x9500, end: 0x9fa5, radical: "门 (Môn) / 饣 (Thực)" },
];

function guessRadicalAndStrokes(char: string): { radical: string; strokeCount: number } {
  const code = char.codePointAt(0) ?? 0x4e00;
  for (const r of RADICAL_BY_UNICODE_RANGE) {
    if (code >= r.start && code <= r.end) {
      const estimatedStrokes = 4 + ((code - r.start) % 12);
      return { radical: r.radical, strokeCount: estimatedStrokes };
    }
  }
  return { radical: "一 (Nhất)", strokeCount: 8 };
}

function cleanChineseWord(rawWord: string): string {
  if (!rawWord) return "";
  return rawWord
    .trim()
    .replace(/[，。！？、；：“”‘’（）《》【】,.!?;:"'()[\]\s]+/g, "");
}

/**
 * Synchronous Chinese word lookup.
 * If the exact word is not in the hardcoded dictionary map, it decomposes
 * the word character by character to synthesize Pinyin, radical, stroke count,
 * and Vietnamese meaning so it NEVER returns an empty entry.
 */
export function lookupChineseSync(rawWord: string): DictionaryEntry {
  const cleaned = cleanChineseWord(rawWord);
  if (!cleaned) {
    return {
      hanzi: rawWord || "字",
      pinyin: "zì",
      radical: "子 (Tử)",
      strokeCount: 6,
      partOfSpeech: "Danh từ",
      meaningVi: "chữ Hán",
      level: "HSK0",
      exampleZh: "我们一起写汉字。",
      examplePinyin: "Wǒmen yìqǐ xiě Hànzì.",
      exampleVi: "Chúng ta cùng nhau viết chữ Hán.",
    };
  }

  // 1. Direct match
  const exact = OFFLINE_MAP.get(cleaned);
  if (exact) {
    return exact;
  }

  // 2. Substring compound match + character-by-character intelligent synthesis
  const chars = Array.from(cleaned);
  const pinyinParts: string[] = [];
  const meaningParts: string[] = [];
  let primaryRadical = "";
  let totalStrokes = 0;

  let i = 0;
  while (i < chars.length) {
    // Check 2-char sub-word first
    const twoChar = chars.slice(i, i + 2).join("");
    const subHit = twoChar.length === 2 ? OFFLINE_MAP.get(twoChar) : undefined;
    if (subHit) {
      pinyinParts.push(subHit.pinyin);
      meaningParts.push(`${twoChar}: ${subHit.meaningVi}`);
      if (!primaryRadical) primaryRadical = subHit.radical;
      totalStrokes += subHit.strokeCount;
      i += 2;
      continue;
    }

    const ch = chars[i];
    const singleExact = OFFLINE_MAP.get(ch);
    if (singleExact) {
      pinyinParts.push(singleExact.pinyin);
      meaningParts.push(`${ch} (${singleExact.meaningVi})`);
      if (!primaryRadical) primaryRadical = singleExact.radical;
      totalStrokes += singleExact.strokeCount;
    } else if (CHAR_FALLBACK_TABLE[ch]) {
      const fb = CHAR_FALLBACK_TABLE[ch];
      pinyinParts.push(fb.pinyin);
      meaningParts.push(`${ch} (${fb.meaningVi})`);
      if (!primaryRadical) primaryRadical = fb.radical;
      totalStrokes += fb.strokeCount;
    } else {
      const guessed = guessRadicalAndStrokes(ch);
      pinyinParts.push(ch);
      meaningParts.push(`${ch} (chữ Hán bộ ${guessed.radical})`);
      if (!primaryRadical) primaryRadical = guessed.radical;
      totalStrokes += guessed.strokeCount;
    }
    i += 1;
  }

  return {
    hanzi: cleaned,
    pinyin: pinyinParts.join(" "),
    radical: primaryRadical || "一 (Nhất)",
    strokeCount: Math.max(1, totalStrokes),
    partOfSpeech: chars.length === 4 ? "Cụm từ / Thành ngữ" : chars.length > 1 ? "Từ ghép" : "Chữ Hán",
    meaningVi: meaningParts.join(" + "),
    level: chars.length >= 4 ? "HSK6" : "HSK3",
    exampleZh: `我正在学习“${cleaned}”这个词。`,
    examplePinyin: `Wǒ zhèngzài xuéxí "${pinyinParts.join(" ")}" zhège cí.`,
    exampleVi: `Tôi đang học từ "${cleaned}" này.`,
  };
}

const ONLINE_CACHE = new Map<string, DictionaryEntry>();

/**
 * Async Chinese word lookup with offline dictionary first, character decomposition fallback,
 * and optional online translation enhancement.
 */
export async function lookupChineseWord(word: string): Promise<DictionaryEntry> {
  const cleaned = cleanChineseWord(word);
  if (!cleaned) {
    return lookupChineseSync(word);
  }

  const exact = OFFLINE_MAP.get(cleaned);
  if (exact) {
    return exact;
  }

  const cached = ONLINE_CACHE.get(cleaned);
  if (cached) {
    return cached;
  }

  const syncFallback = lookupChineseSync(cleaned);

  // Attempt online enrichment with short timeout if running in browser
  if (typeof window !== "undefined") {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3200);
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        cleaned
      )}&langpair=zh-CN|vi`;
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (response.ok) {
        const data = (await response.json()) as {
          responseData?: { translatedText?: string };
        };
        const translated = data?.responseData?.translatedText?.trim();
        if (translated && translated.toLowerCase() !== cleaned.toLowerCase()) {
          const enriched: DictionaryEntry = {
            ...syncFallback,
            meaningVi: `${translated} (${syncFallback.meaningVi})`,
          };
          ONLINE_CACHE.set(cleaned, enriched);
          return enriched;
        }
      }
    } catch {
      clearTimeout(timeoutId);
    }
  }

  ONLINE_CACHE.set(cleaned, syncFallback);
  return syncFallback;
}

export function getOfflineDictionaryEntries(): DictionaryEntry[] {
  return Array.from(OFFLINE_MAP.values());
}

export function getOfflineDictionaryCount(): number {
  return OFFLINE_MAP.size;
}
