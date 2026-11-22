import type { HSKLevel, SubDifficulty } from "@/types";
import { READING_PASSAGES_EXTRA } from "./reading-passages-extra";

export interface ReadingQuestion {
  id: string;
  questionVi: string;
  options: string[];
  correctAnswer: string;
  explanationVi: string;
}

export interface ReadingPassage {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  genre: string;
  title: string;
  titlePinyin: string;
  titleVi: string;
  contentZh: string;
  contentPinyin: string;
  contentVi: string;
  questions: ReadingQuestion[];
}

const HSK_ORDER: Record<HSKLevel, number> = {
  HSK0: 0,
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6,
  HSK7: 7,
  HSK8: 8,
  HSK9: 9,
};

const SUB_DIFFICULTY_ORDER: Record<SubDifficulty, number> = {
  basic: 0,
  advanced: 1,
};

const RAW_READING_PASSAGES: ReadingPassage[] = [
  {
    "id": "rp-hsk0-basic-1",
    "level": "HSK0",
    "subDifficulty": "basic",
    "genre": "Tin nhắn WeChat",
    "title": "新朋友的微信",
    "titlePinyin": "Xīn péngyou de Wēixìn",
    "titleVi": "Tin nhắn WeChat của người bạn mới",
    "contentZh": "你好！我叫小美，我是中国人，今年二十岁。我是北京大学的大学生。很高兴认识你！你是越南人吗？你喜欢喝茶吗？",
    "contentPinyin": "Nǐ hǎo! Wǒ jiào Xiǎoměi, wǒ shì Zhōngguó rén, jīnnián èrshí suì. Wǒ shì Běijīng Dàxué de dàxuéshēng. Hěn gāoxìng rènshi nǐ! Nǐ shì Yuènán rén ma? Nǐ xǐhuan hē chá ma?",
    "contentVi": "Xin chào! Mình tên là Tiểu Mỹ, mình là người Trung Quốc, năm nay 20 tuổi. Mình là sinh viên Đại học Bắc Kinh. Rất vui được quen biết bạn! Bạn là người Việt Nam phải không? Bạn có thích uống trà không?",
    "questions": [
      {
        "id": "rp-hsk0-basic-1-q1",
        "questionVi": "Người gửi tin nhắn tên là gì?",
        "options": [
          "Tiểu Mỹ (小美)",
          "Tiểu Vương (小王)",
          "Tiểu Lan (小兰)",
          "Trần Minh (陈明)"
        ],
        "correctAnswer": "Tiểu Mỹ (小美)",
        "explanationVi": "Trong tin nhắn có câu '我叫小美'."
      },
      {
        "id": "rp-hsk0-basic-1-q2",
        "questionVi": "Tiểu Mỹ là người nước nào?",
        "options": [
          "Việt Nam",
          "Trung Quốc",
          "Hàn Quốc",
          "Nhật Bản"
        ],
        "correctAnswer": "Trung Quốc",
        "explanationVi": "Trong bài nêu rõ '我是中国人'."
      },
      {
        "id": "rp-hsk0-basic-1-q3",
        "questionVi": "Năm nay Tiểu Mỹ bao nhiêu tuổi?",
        "options": [
          "18 tuổi",
          "22 tuổi",
          "20 tuổi",
          "25 tuổi"
        ],
        "correctAnswer": "20 tuổi",
        "explanationVi": "Đoạn văn có cụm '今年二十岁' (20 tuổi)."
      },
      {
        "id": "rp-hsk0-basic-1-q4",
        "questionVi": "Tiểu Mỹ đang học ở trường nào?",
        "options": [
          "Đại học Thượng Hải",
          "Đại học Hà Nội",
          "Trường cấp ba",
          "Đại học Bắc Kinh"
        ],
        "correctAnswer": "Đại học Bắc Kinh",
        "explanationVi": "Câu '我是北京大学的大学生' cho biết cô học Đại học Bắc Kinh."
      },
      {
        "id": "rp-hsk0-basic-1-q5",
        "questionVi": "Cuối tin nhắn Tiểu Mỹ hỏi người nhận có thích uống gì?",
        "options": [
          "Trà",
          "Cà phê",
          "Sữa bò",
          "Nước ép"
        ],
        "correctAnswer": "Trà",
        "explanationVi": "Câu cuối hỏi: '你喜欢喝茶吗？'."
      }
    ]
  },
  {
    "id": "rp-hsk0-basic-2",
    "level": "HSK0",
    "subDifficulty": "basic",
    "genre": "Biển báo & Thẻ tên",
    "title": "汉语教室的牌子",
    "titlePinyin": "Hànyǔ jiàoshì de páizi",
    "titleVi": "Biển thông báo phòng học tiếng Hán",
    "contentZh": "欢迎来到汉语一班！\n老师：王老师\n上课时间：上午八点\n教室：三楼三零二室\n请带汉语书、本子和笔。谢谢大家！",
    "contentPinyin": "Huānyíng láidào Hànyǔ yī bān!\nLǎoshī: Wáng lǎoshī\nShàngkè shíjiān: shàngwǔ bā diǎn\nJiàoshì: sān lóu sānlíng'èr shì\nQǐng dài Hànyǔ shū, běnzi hé bǐ. Xièxie dàjiā!",
    "contentVi": "Chào mừng đến với lớp tiếng Hán số 1!\nGiáo viên: Thầy/Cô Vương\nGiờ lên lớp: 8 giờ sáng\nPhòng học: Phòng 302 tầng 3\nVui lòng mang theo sách tiếng Hán, vở và bút. Cảm ơn mọi người!",
    "questions": [
      {
        "id": "rp-hsk0-basic-2-q1",
        "questionVi": "Đây là thông báo của lớp học nào?",
        "options": [
          "Lớp tiếng Anh số 2",
          "Lớp tiếng Hán số 1",
          "Lớp Toán số 3",
          "Lớp Âm nhạc"
        ],
        "correctAnswer": "Lớp tiếng Hán số 1",
        "explanationVi": "Dòng đầu tiên ghi: '汉语一班' (Lớp tiếng Hán số 1)."
      },
      {
        "id": "rp-hsk0-basic-2-q2",
        "questionVi": "Ai là giáo viên phụ trách lớp này?",
        "options": [
          "Thầy/Cô Lý (李老师)",
          "Thầy/Cô Trương (张老师)",
          "Thầy/Cô Vương (王老师)",
          "Thầy/Cô Trần (陈老师)"
        ],
        "correctAnswer": "Thầy/Cô Vương (王老师)",
        "explanationVi": "Biển thông báo ghi rõ: '老师：王老师'."
      },
      {
        "id": "rp-hsk0-basic-2-q3",
        "questionVi": "Giờ lên lớp là mấy giờ?",
        "options": [
          "9 giờ sáng",
          "2 giờ chiều",
          "7 giờ tối",
          "8 giờ sáng"
        ],
        "correctAnswer": "8 giờ sáng",
        "explanationVi": "'上课时间：上午八点' = 8 giờ sáng."
      },
      {
        "id": "rp-hsk0-basic-2-q4",
        "questionVi": "Phòng học nằm ở đâu?",
        "options": [
          "Phòng 302 tầng 3",
          "Phòng 203 tầng 2",
          "Phòng 102 tầng 1",
          "Phòng 305 tầng 3"
        ],
        "correctAnswer": "Phòng 302 tầng 3",
        "explanationVi": "'三楼三零二室' = Phòng 302 tầng 3."
      },
      {
        "id": "rp-hsk0-basic-2-q5",
        "questionVi": "Học viên cần mang theo những đồ dùng gì?",
        "options": [
          "Máy tính và điện thoại",
          "Sách tiếng Hán, vở và bút",
          "Nước lọc và bánh mì",
          "Áo mưa và ô"
        ],
        "correctAnswer": "Sách tiếng Hán, vở và bút",
        "explanationVi": "Thông báo dặn: '请带汉语书、本子和笔'."
      }
    ]
  },
  {
    "id": "rp-hsk0-advanced-3",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "genre": "Cẩm nang chữ Hán",
    "title": "有趣的汉字部首",
    "titlePinyin": "Yǒuqù de Hànzì bùshǒu",
    "titleVi": "Những bộ thủ chữ Hán thú vị",
    "contentZh": "汉字非常有趣。很多汉字由两个部分组成：左边表示意思，右边表示读音。比如，“河”和“海”左边有三点水，都和水有关；“吃”和“喝”左边有口字旁，都和嘴有关。记住五十个常用部首，学汉字就不难了。",
    "contentPinyin": "Hànzì fēicháng yǒuqù. Hěn duō Hànzì yóu liǎng gè bùfen zǔchéng: zuǒbiān biǎoshì yìsi, yòubiān biǎoshì dúyīn. Bǐrú, “hé” hé “hǎi” zuǒbiān yǒu sāndiǎnshuǐ, dōu hé shuǐ yǒuguān; “chī” hé “hē” zuǒbiān yǒu kǒuzìpáng, dōu hé zuǐ yǒuguān. Jìzhù wǔshí gè chángyòng bùshǒu, xué Hànzì jiù bù nán le.",
    "contentVi": "Chữ Hán vô cùng thú vị. Rất nhiều chữ Hán được cấu tạo từ hai phần: bên trái biểu thị ý nghĩa, bên phải biểu thị âm đọc. Ví dụ, chữ 'Hà (河)' và 'Hải (海)' bên trái có bộ Tam chấm thủy, đều liên quan đến nước; chữ 'Ăn (吃)' và 'Uống (喝)' bên trái có bộ Khẩu, đều liên quan đến miệng. Nhớ được 50 bộ thủ thông dụng thì học chữ Hán sẽ không khó nữa.",
    "questions": [
      {
        "id": "rp-hsk0-advanced-3-q1",
        "questionVi": "Trong nhiều chữ Hán cấu tạo từ hai phần trái - phải, phần bên trái thường biểu thị gì?",
        "options": [
          "Chỉ biểu thị số thứ tự",
          "Không có tác dụng gì",
          "Ý nghĩa của chữ",
          "Chỉ dùng để trang trí"
        ],
        "correctAnswer": "Ý nghĩa của chữ",
        "explanationVi": "Bài viết nêu: '左边表示意思，右边表示读音'."
      },
      {
        "id": "rp-hsk0-advanced-3-q2",
        "questionVi": "Chữ 河 (sông) và 海 (biển) có chung bộ thủ nào ở bên trái?",
        "options": [
          "Bộ Khẩu (口)",
          "Bộ Mộc (木)",
          "Bộ Nữ (女)",
          "Bộ Tam chấm thủy (氵)"
        ],
        "correctAnswer": "Bộ Tam chấm thủy (氵)",
        "explanationVi": "'“河”和“海”左边有三点水'."
      },
      {
        "id": "rp-hsk0-advanced-3-q3",
        "questionVi": "Bộ Khẩu (口) trong chữ 吃 và 喝 biểu thị sự liên quan đến bộ phận nào?",
        "options": [
          "Miệng (嘴)",
          "Tay (手)",
          "Chân (脚)",
          "Mắt (眼)"
        ],
        "correctAnswer": "Miệng (嘴)",
        "explanationVi": "'“吃”和“喝”左边有口字旁，都和嘴有关'."
      },
      {
        "id": "rp-hsk0-advanced-3-q4",
        "questionVi": "Theo tác giả, cần ghi nhớ bao nhiêu bộ thủ thông dụng để việc học chữ Hán trở nên dễ dàng?",
        "options": [
          "5 bộ thủ",
          "50 bộ thủ",
          "500 bộ thủ",
          "10 bộ thủ"
        ],
        "correctAnswer": "50 bộ thủ",
        "explanationVi": "Câu cuối ghi: '记住五十个常用部首，学汉字就不难了'."
      },
      {
        "id": "rp-hsk0-advanced-3-q5",
        "questionVi": "Thái độ của tác giả đối với chữ Hán là gì?",
        "options": [
          "Thấy chữ Hán không thể nào học được",
          "Khuyên mọi người không nên học bộ thủ",
          "Thấy chữ Hán vô cùng thú vị và có quy luật dễ nhớ",
          "Cho rằng chữ Hán không có phần biểu âm"
        ],
        "correctAnswer": "Thấy chữ Hán vô cùng thú vị và có quy luật dễ nhớ",
        "explanationVi": "Câu đầu nói '汉字非常有趣' và câu cuối khẳng định nhớ 50 bộ thủ sẽ '不难了'."
      }
    ]
  },
  {
    "id": "rp-hsk0-advanced-4",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "genre": "Quy tắc phát âm",
    "title": "声调和变调小知识",
    "titlePinyin": "Shēngdiào hé biàndiào xiǎo zhīshi",
    "titleVi": "Kiến thức nhỏ về thanh điệu và biến điệu",
    "contentZh": "汉语有四个声调。读错声调，意思就会完全不同，比如“妈”是第一声，“马”是第三声。另外，两个第三声在一起时，第一个字要读成第二声，比如“你好”读作 ní hǎo。“不”在第四声前面也要变成第二声，比如“不去”读作 bú qù。",
    "contentPinyin": "Hànyǔ yǒu sì gè shēngdiào. Dú cuò shēngdiào, yìsi jiù huì wánquán bùtóng, bǐrú “mā” shì dì-yī shēng, “mǎ” shì dì-sān shēng. Lìngwài, liǎng gè dì-sān shēng zài yìqǐ shí, dì-yī gè zì yào dúchéng dì-èr shēng, bǐrú “nǐ hǎo” dúzuò ní hǎo. “Bù” zài dì-sì shēng qiánmiàn yě yào biànchéng dì-èr shēng, bǐrú “bú qù” dúzuò bú qù.",
    "contentVi": "Tiếng Hán có 4 thanh điệu. Đọc sai thanh điệu thì nghĩa sẽ hoàn toàn khác, ví dụ 'Mẹ (妈)' là thanh 1, 'Ngựa (马)' là thanh 3. Ngoài ra, khi hai thanh 3 đi liền nhau, chữ đầu tiên phải đọc thành thanh 2, ví dụ '你好' đọc là ní hǎo. Chữ '不' đứng trước thanh 4 cũng phải biến thành thanh 2, ví dụ '不去' đọc là bú qù.",
    "questions": [
      {
        "id": "rp-hsk0-advanced-4-q1",
        "questionVi": "Điều gì xảy ra nếu đọc sai thanh điệu trong tiếng Trung?",
        "options": [
          "Người nghe vẫn hiểu y hệt",
          "Chỉ thay đổi tốc độ nói",
          "Không ảnh hưởng gì",
          "Ý nghĩa của từ sẽ hoàn toàn khác đi"
        ],
        "correctAnswer": "Ý nghĩa của từ sẽ hoàn toàn khác đi",
        "explanationVi": "'读错声调，意思就会完全不同'."
      },
      {
        "id": "rp-hsk0-advanced-4-q2",
        "questionVi": "Chữ 马 (con ngựa) mang thanh điệu thứ mấy?",
        "options": [
          "Thanh 3 (mǎ)",
          "Thanh 1 (mā)",
          "Thanh 2 (má)",
          "Thanh 4 (mà)"
        ],
        "correctAnswer": "Thanh 3 (mǎ)",
        "explanationVi": "'“马”是第三声'."
      },
      {
        "id": "rp-hsk0-advanced-4-q3",
        "questionVi": "Khi hai thanh 3 đứng cạnh nhau, chữ đầu tiên biến đổi thế nào?",
        "options": [
          "Biến thành thanh 1",
          "Biến thành thanh 2",
          "Biến thành thanh 4",
          "Biến thành thanh nhẹ"
        ],
        "correctAnswer": "Biến thành thanh 2",
        "explanationVi": "'两个第三声在一起时，第一个字要读成第二声'."
      },
      {
        "id": "rp-hsk0-advanced-4-q4",
        "questionVi": "Trong cụm từ 不去 (không đi), chữ 不 được đọc như thế nào?",
        "options": [
          "bù (thanh 4)",
          "bū (thanh 1)",
          "bú (thanh 2)",
          "bǔ (thanh 3)"
        ],
        "correctAnswer": "bú (thanh 2)",
        "explanationVi": "'“不去”读作 bú qù'."
      },
      {
        "id": "rp-hsk0-advanced-4-q5",
        "questionVi": "Tại sao chữ 不 lại biến điệu thành thanh 2 trong 不去?",
        "options": [
          "Vì nó đứng ở đầu câu",
          "Vì nó đứng trước thanh 1",
          "Vì nó đứng trước thanh 3",
          "Vì nó đứng trước một chữ mang thanh 4 (去 qù)"
        ],
        "correctAnswer": "Vì nó đứng trước một chữ mang thanh 4 (去 qù)",
        "explanationVi": "'“不”在第四声前面也要变成第二声'."
      }
    ]
  },
  {
    "id": "rp-hsk1-basic-5",
    "level": "HSK1",
    "subDifficulty": "basic",
    "genre": "Nhật ký ngắn",
    "title": "我的星期天",
    "titlePinyin": "Wǒ de xīngqītiān",
    "titleVi": "Ngày Chủ nhật của tôi",
    "contentZh": "今天是星期天，天气很暖和。上午八点，我和妈妈去商店买水果，买了三斤苹果和两个西瓜。中午我们在中国饭店吃午饭，我吃了一碗牛肉面，喝了一杯热茶。下午我在家看汉语书，晚上和朋友看电影。今天真高兴！",
    "contentPinyin": "Jīntiān shì xīngqītiān, tiānqì hěn nuǎnhuo. Shàngwǔ bā diǎn, wǒ hé māma qù shāngdiàn mǎi shuǐguǒ, mǎi le sān jīn píngguǒ hé liǎng gè xīguā. Zhōngwǔ wǒmen zài Zhōngguó fàndiàn chī wǔfàn, wǒ chī le yì wǎn niúròumiàn, hē le yì bēi rè chá. Xiàwǔ wǒ zài jiā kàn Hànyǔ shū, wǎnshang hé péngyou kàn diànyǐng. Jīntiān zhēn gāoxìng!",
    "contentVi": "Hôm nay là Chủ nhật, thời tiết rất ấm áp. 8 giờ sáng, tôi và mẹ đi cửa hàng mua hoa quả, đã mua 3 cân táo và 2 quả dưa hấu. Buổi trưa chúng tôi ăn trưa ở nhà hàng Trung Quốc, tôi ăn một bát mì bò và uống một cốc trà nóng. Buổi chiều tôi ở nhà đọc sách tiếng Hán, buổi tối đi xem phim với bạn. Hôm nay thật vui!",
    "questions": [
      {
        "id": "rp-hsk1-basic-5-q1",
        "questionVi": "Thời tiết ngày Chủ nhật hôm nay thế nào?",
        "options": [
          "Rất ấm áp",
          "Rất lạnh và có tuyết",
          "Mưa rất to",
          "Nóng bức"
        ],
        "correctAnswer": "Rất ấm áp",
        "explanationVi": "'天气很暖和' = Thời tiết rất ấm áp."
      },
      {
        "id": "rp-hsk1-basic-5-q2",
        "questionVi": "Buổi sáng tác giả đi mua hoa quả cùng ai?",
        "options": [
          "Cùng bố",
          "Cùng mẹ",
          "Cùng bạn học",
          "Đi một mình"
        ],
        "correctAnswer": "Cùng mẹ",
        "explanationVi": "'我和妈妈去商店买水果'."
      },
      {
        "id": "rp-hsk1-basic-5-q3",
        "questionVi": "Họ đã mua những loại hoa quả nào?",
        "options": [
          "2 cân táo và 3 quả dưa hấu",
          "5 cân cam",
          "3 cân táo và 2 quả dưa hấu",
          "1 cân dâu tây"
        ],
        "correctAnswer": "3 cân táo và 2 quả dưa hấu",
        "explanationVi": "'买了三斤苹果和两个西瓜'."
      },
      {
        "id": "rp-hsk1-basic-5-q4",
        "questionVi": "Buổi trưa tác giả đã ăn món gì ở nhà hàng Trung Quốc?",
        "options": [
          "Cơm vịt quay",
          "Sủi cảo và cà phê",
          "Bánh bao và sữa",
          "Một bát mì bò và một cốc trà nóng"
        ],
        "correctAnswer": "Một bát mì bò và một cốc trà nóng",
        "explanationVi": "'我吃了一碗牛肉面，喝了一杯热茶'."
      },
      {
        "id": "rp-hsk1-basic-5-q5",
        "questionVi": "Buổi tối tác giả làm gì?",
        "options": [
          "Đi xem phim với bạn",
          "Ở nhà xem tivi",
          "Đi ngủ lúc 7 giờ",
          "Đi siêu thị"
        ],
        "correctAnswer": "Đi xem phim với bạn",
        "explanationVi": "'晚上和朋友看电影'."
      }
    ]
  },
  {
    "id": "rp-hsk1-basic-6",
    "level": "HSK1",
    "subDifficulty": "basic",
    "genre": "Thư giới thiệu",
    "title": "林明的家庭",
    "titlePinyin": "Lín Míng de jiātíng",
    "titleVi": "Gia đình của Lâm Minh",
    "contentZh": "我叫林明，家在河内。我家有五口人：爷爷、奶奶、爸爸、妈妈和我。爷爷和奶奶今年七十岁了，身体都很好。爸爸是公司职员，每天坐出租车上班。妈妈是中学老师，在学校教历史。我在大学学习汉语，明年想去上海旅游。",
    "contentPinyin": "Wǒ jiào Lín Míng, jiā zài Hénèi. Wǒ jiā yǒu wǔ kǒu rén: yéye, nǎinai, bàba, māma hé wǒ. Yéye hé nǎinai jīnnián qīshí suì le, shēntǐ dōu hěn hǎo. Bàba shì gōngsī zhíyuán, měitiān zuò chūzūchē shàngbān. Māma shì zhōngxué lǎoshī, zài xuéxiào jiāo lìshǐ. Wǒ zài dàxué xuéxí Hànyǔ, míngnián xiǎng qù Shànghǎi lǚyóu.",
    "contentVi": "Tôi tên là Lâm Minh, nhà ở Hà Nội. Nhà tôi có 5 người: ông nội, bà nội, bố, mẹ và tôi. Ông bà nội năm nay 70 tuổi rồi, sức khỏe đều rất tốt. Bố là nhân viên công ty, mỗi ngày đi taxi đi làm. Mẹ là giáo viên cấp hai, dạy lịch sử ở trường. Tôi học tiếng Hán ở đại học, năm sau muốn đi du lịch Thượng Hải.",
    "questions": [
      {
        "id": "rp-hsk1-basic-6-q1",
        "questionVi": "Gia đình Lâm Minh có bao nhiêu người?",
        "options": [
          "3 người",
          "5 người",
          "4 người",
          "6 người"
        ],
        "correctAnswer": "5 người",
        "explanationVi": "'我家有五口人'."
      },
      {
        "id": "rp-hsk1-basic-6-q2",
        "questionVi": "Ông bà nội của Lâm Minh năm nay bao nhiêu tuổi?",
        "options": [
          "60 tuổi",
          "80 tuổi",
          "70 tuổi",
          "65 tuổi"
        ],
        "correctAnswer": "70 tuổi",
        "explanationVi": "'爷爷和奶奶今年七十岁了'."
      },
      {
        "id": "rp-hsk1-basic-6-q3",
        "questionVi": "Bố của Lâm Minh đi làm bằng phương tiện gì?",
        "options": [
          "Đi tàu điện ngầm",
          "Đi xe đạp",
          "Đi bộ",
          "Đi taxi (出租车)"
        ],
        "correctAnswer": "Đi taxi (出租车)",
        "explanationVi": "'每天坐出租车上班'."
      },
      {
        "id": "rp-hsk1-basic-6-q4",
        "questionVi": "Mẹ của Lâm Minh dạy môn gì ở trường trung học?",
        "options": [
          "Môn Lịch sử (历史)",
          "Môn Toán",
          "Môn Tiếng Hán",
          "Môn Tiếng Anh"
        ],
        "correctAnswer": "Môn Lịch sử (历史)",
        "explanationVi": "'妈妈是中学老师，在学校教历史'."
      },
      {
        "id": "rp-hsk1-basic-6-q5",
        "questionVi": "Năm sau Lâm Minh muốn đi đâu du lịch?",
        "options": [
          "Bắc Kinh",
          "Thượng Hải",
          "Quảng Châu",
          "Hàng Châu"
        ],
        "correctAnswer": "Thượng Hải",
        "explanationVi": "'明年想去上海旅游'."
      }
    ]
  },
  {
    "id": "rp-hsk1-advanced-7",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "genre": "Tin nhắn mua sắm",
    "title": "微信买奶茶",
    "titlePinyin": "Wēixìn mǎi nǎichá",
    "titleVi": "Đặt trà sữa qua WeChat",
    "contentZh": "小兰：老板你好，我想买三杯珍珠奶茶。\n老板：好的，请问要大杯还是中杯？\n小兰：两杯大杯少糖少冰，一杯中杯热奶茶。一共多少钱？\n老板：大杯十八块，中杯十五块，一共五十一块钱。您可以扫微信付款，二十分钟后送到您的办公室。",
    "contentPinyin": "Xiǎolán: Lǎobǎn nǐ hǎo, wǒ xiǎng mǎi sān bēi zhēnzhū nǎichá.\nLǎobǎn: Hǎo de, qǐngwèn yào dà bēi háishi zhōng bēi?\nXiǎolán: Liǎng bēi dà bēi shǎo táng shǎo bīng, yì bēi zhōng bēi rè nǎichá. Yígòng duōshao qián?\nLǎobǎn: Dà bēi shíbā kuài, zhōng bēi shíwǔ kuài, yígòng wǔshíyī kuài qián. Nín kěyǐ sǎo Wēixìn fùkuǎn, èrshí fēnzhōng hòu sòng dào nín de bàngōngshì.",
    "contentVi": "Tiểu Lan: Chào ông chủ, tôi muốn mua 3 cốc trà sữa trân châu.\nÔng chủ: Vâng, xin hỏi lấy cốc lớn hay cốc vừa?\nTiểu Lan: 2 cốc lớn ít đường ít đá, 1 cốc vừa trà sữa nóng. Tổng cộng bao nhiêu tiền?\nÔng chủ: Cốc lớn 18 tệ, cốc vừa 15 tệ, tổng cộng 51 tệ. Chị có thể quét mã WeChat thanh toán, 20 phút sau sẽ giao đến văn phòng của chị.",
    "questions": [
      {
        "id": "rp-hsk1-advanced-7-q1",
        "questionVi": "Tiểu Lan đặt mua tổng cộng bao nhiêu cốc trà sữa?",
        "options": [
          "2 cốc",
          "4 cốc",
          "3 cốc",
          "5 cốc"
        ],
        "correctAnswer": "3 cốc",
        "explanationVi": "'我想买三杯珍珠奶茶'."
      },
      {
        "id": "rp-hsk1-advanced-7-q2",
        "questionVi": "Hai cốc lớn Tiểu Lan yêu cầu pha chế như thế nào?",
        "options": [
          "Nhiều đường, nhiều đá",
          "Không đá, nóng",
          "Đường bình thường",
          "Ít đường, ít đá (少糖少冰)"
        ],
        "correctAnswer": "Ít đường, ít đá (少糖少冰)",
        "explanationVi": "'两杯大杯少糖少冰'."
      },
      {
        "id": "rp-hsk1-advanced-7-q3",
        "questionVi": "Giá một cốc trà sữa cỡ vừa là bao nhiêu tiền?",
        "options": [
          "15 tệ",
          "18 tệ",
          "20 tệ",
          "51 tệ"
        ],
        "correctAnswer": "15 tệ",
        "explanationVi": "'大杯十八块，中杯十五块'."
      },
      {
        "id": "rp-hsk1-advanced-7-q4",
        "questionVi": "Tổng số tiền Tiểu Lan cần thanh toán là bao nhiêu?",
        "options": [
          "33 tệ",
          "51 tệ",
          "54 tệ",
          "48 tệ"
        ],
        "correctAnswer": "51 tệ",
        "explanationVi": "18 × 2 + 15 = 51 tệ ('一共五十一块钱')."
      },
      {
        "id": "rp-hsk1-advanced-7-q5",
        "questionVi": "Sau bao lâu thì trà sữa sẽ được giao đến văn phòng?",
        "options": [
          "10 phút",
          "30 phút",
          "20 phút",
          "1 tiếng"
        ],
        "correctAnswer": "20 phút",
        "explanationVi": "'二十分钟后送到您的办公室'."
      }
    ]
  },
  {
    "id": "rp-hsk1-advanced-8",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "genre": "Biển chỉ dẫn",
    "title": "北京火车站公告",
    "titlePinyin": "Běijīng Huǒchēzhàn gōnggào",
    "titleVi": "Thông báo tại Ga tàu hỏa Bắc Kinh",
    "contentZh": "各位旅客您好：开往上海的G15次高铁上午十点十分开车，请在一楼三号候车室等待。车站二楼有饭店和商店，可以买热茶、水果和面包。洗手间在二楼商店的右边。祝您旅途平安！",
    "contentPinyin": "Gèwèi lǚkè nínhǎo: kāiwǎng Shànghǎi de G shíwǔ cì gāotiě shàngwǔ shí diǎn shí fēn kāichē, qǐng zài yī lóu sān hào hòuchēshì děngdài. Chēzhàn èr lóu yǒu fàndiàn hé shāngdiàn, kěyǐ mǎi rè chá, shuǐguǒ hé miànbāo. Xǐshǒujiān zài èr lóu shāngdiàn de yòubiān. Zhù nín lǚtú píng'ān!",
    "contentVi": "Xin chào quý hành khách: Chuyến tàu cao tốc G15 đi Thượng Hải khởi hành lúc 10 giờ 10 phút sáng, vui lòng đợi tại phòng chờ số 3 tầng 1. Tầng 2 nhà ga có nhà hàng và cửa hàng, có thể mua trà nóng, hoa quả và bánh mì. Nhà vệ sinh ở bên phải cửa hàng tầng 2. Chúc quý khách thượng lộ bình an!",
    "questions": [
      {
        "id": "rp-hsk1-advanced-8-q1",
        "questionVi": "Chuyến tàu cao tốc G15 đi đến thành phố nào?",
        "options": [
          "Quảng Châu",
          "Hà Nội",
          "Hàng Châu",
          "Thượng Hải"
        ],
        "correctAnswer": "Thượng Hải",
        "explanationVi": "'开往上海的G15次高铁'."
      },
      {
        "id": "rp-hsk1-advanced-8-q2",
        "questionVi": "Chuyến tàu khởi hành lúc mấy giờ?",
        "options": [
          "10 giờ 10 phút sáng",
          "10 giờ 15 phút sáng",
          "9 giờ 10 phút sáng",
          "3 giờ chiều"
        ],
        "correctAnswer": "10 giờ 10 phút sáng",
        "explanationVi": "'上午十点十分开车'."
      },
      {
        "id": "rp-hsk1-advanced-8-q3",
        "questionVi": "Hành khách cần đợi tàu ở đâu?",
        "options": [
          "Phòng chờ số 1 tầng 3",
          "Phòng chờ số 3 tầng 1",
          "Tầng 2 bên cạnh cửa hàng",
          "Trước cửa nhà ga"
        ],
        "correctAnswer": "Phòng chờ số 3 tầng 1",
        "explanationVi": "'请在一楼三号候车室等待'."
      },
      {
        "id": "rp-hsk1-advanced-8-q4",
        "questionVi": "Ở tầng 2 nhà ga có thể mua được những gì?",
        "options": [
          "Quần áo và giày dép",
          "Sách tiếng Hán",
          "Trà nóng, hoa quả và bánh mì",
          "Máy tính xách tay"
        ],
        "correctAnswer": "Trà nóng, hoa quả và bánh mì",
        "explanationVi": "'可以买热茶、水果和面包'."
      },
      {
        "id": "rp-hsk1-advanced-8-q5",
        "questionVi": "Nhà vệ sinh nằm ở vị trí nào?",
        "options": [
          "Bên trái phòng chờ tầng 1",
          "Phía trước nhà hàng tầng 3",
          "Ngoài sân ga",
          "Bên phải cửa hàng trên tầng 2"
        ],
        "correctAnswer": "Bên phải cửa hàng trên tầng 2",
        "explanationVi": "'洗手间在二楼商店的右边'."
      }
    ]
  },
  {
    "id": "rp-hsk2-basic-9",
    "level": "HSK2",
    "subDifficulty": "basic",
    "genre": "Thư điện tử",
    "title": "给中国朋友的信",
    "titlePinyin": "Gěi Zhōngguó péngyou de xìn",
    "titleVi": "Thư gửi người bạn Trung Quốc",
    "contentZh": "小张你好！好久不见，你最近身体怎么样？我上个月开始在一家贸易公司上班了。从我家到公司坐地铁只要二十分钟，非常方便。虽然工作比以前忙多了，但是同事们都很热情，经常帮我练习汉语。下个月十五号我要去广州出差五天，如果你有时间，我们一起吃顿广东早茶吧！",
    "contentPinyin": "Xiǎo Zhāng nǐ hǎo! Hǎojiǔ bújiàn, nǐ zuìjìn shēntǐ zěnmeyàng? Wǒ shàng gè yuè kāishǐ zài yì jiā màoyì gōngsī shàngbān le. Cóng wǒ jiā dào gōngsī zuò dìtiě zhǐyào èrshí fēnzhōng, fēicháng fāngbiàn. Suīrán gōngzuò bǐ yǐqián máng duō le, dànshì tóngshìmen dōu hěn rèqíng, jīngcháng bāng wǒ liànxí Hànyǔ. Xià gè yuè shíwǔ hào wǒ yào qù Guǎngzhōu chūchāi wǔ tiān, rúguǒ nǐ yǒu shíjiān, wǒmen yìqǐ chī dùn Guǎngdōng zǎochá ba!",
    "contentVi": "Chào Tiểu Trương! Lâu rồi không gặp, dạo này sức khỏe bạn thế nào? Tháng trước mình bắt đầu đi làm ở một công ty thương mại rồi. Từ nhà mình đến công ty đi tàu điện ngầm chỉ mất 20 phút, rất tiện lợi. Tuy công việc bận hơn trước nhiều nhưng các đồng nghiệp đều rất nhiệt tình, thường xuyên giúp mình luyện tiếng Hán. Ngày 15 tháng sau mình phải đi Quảng Châu công tác 5 ngày, nếu bạn có thời gian, chúng mình cùng đi ăn một bữa điểm tâm sáng Quảng Đông nhé!",
    "questions": [
      {
        "id": "rp-hsk2-basic-9-q1",
        "questionVi": "Tác giả bắt đầu đi làm ở công ty thương mại từ khi nào?",
        "options": [
          "Tháng trước",
          "Tuần trước",
          "Năm ngoái",
          "Hôm qua"
        ],
        "correctAnswer": "Tháng trước",
        "explanationVi": "'我上个月开始在一家贸易公司上班了'."
      },
      {
        "id": "rp-hsk2-basic-9-q2",
        "questionVi": "Đi tàu điện ngầm từ nhà tác giả đến công ty mất bao lâu?",
        "options": [
          "15 phút",
          "20 phút",
          "30 phút",
          "1 tiếng"
        ],
        "correctAnswer": "20 phút",
        "explanationVi": "'坐地铁只要二十分钟'."
      },
      {
        "id": "rp-hsk2-basic-9-q3",
        "questionVi": "Các đồng nghiệp ở công ty mới đối xử với tác giả thế nào?",
        "options": [
          "Rất lạnh lùng",
          "Không ai biết nói tiếng Hán",
          "Rất nhiệt tình và thường xuyên giúp tác giả luyện tiếng Hán",
          "Chỉ nói tiếng Anh"
        ],
        "correctAnswer": "Rất nhiệt tình và thường xuyên giúp tác giả luyện tiếng Hán",
        "explanationVi": "'同事们都很热情，经常帮我练习汉语'."
      },
      {
        "id": "rp-hsk2-basic-9-q4",
        "questionVi": "Tác giả sẽ đi công tác Quảng Châu trong bao nhiêu ngày?",
        "options": [
          "15 ngày",
          "3 ngày",
          "1 tuần",
          "5 ngày"
        ],
        "correctAnswer": "5 ngày",
        "explanationVi": "'下个月十五号我要去广州出差五天'."
      },
      {
        "id": "rp-hsk2-basic-9-q5",
        "questionVi": "Tác giả hẹn Tiểu Trương cùng đi ăn món gì ở Quảng Châu?",
        "options": [
          "Điểm tâm sáng Quảng Đông (广东早茶)",
          "Vịt quay Bắc Kinh",
          "Lẩu cay Tứ Xuyên",
          "Mì bò Lan Châu"
        ],
        "correctAnswer": "Điểm tâm sáng Quảng Đông (广东早茶)",
        "explanationVi": "'我们一起吃顿广东早茶吧！'."
      }
    ]
  },
  {
    "id": "rp-hsk2-basic-10",
    "level": "HSK2",
    "subDifficulty": "basic",
    "genre": "Truyện ngắn đời sống",
    "title": "下雨天的热咖啡",
    "titlePinyin": "Xiàyǔtiān de rè kāfēi",
    "titleVi": "Cốc cà phê nóng ngày mưa",
    "contentZh": "昨天下午五点我下班的时候，外面突然下起了大雨。因为早上出门时天气很好，所以我没带雨伞，只好站在公司大楼门口等雨停。过了十分钟，同事小李走过来，把他的雨伞借给了我，还带我去旁边的咖啡馆喝了一杯热咖啡。有这样的好同事，我心里觉得非常温暖。",
    "contentPinyin": "Zuótiān xiàwǔ wǔ diǎn wǒ xiàbān de shíhou, wàimiàn tūrán xiàqǐ le dàyǔ. Yīnwèi zǎoshang chūmén shí tiānqì hěn hǎo, suǒyǐ wǒ méi dài yǔsǎn, zhǐhǎo zhàn zài gōngsī dàlóu ménkǒu děng yǔ tíng. Guò le shí fēnzhōng, tóngshì Xiǎo Lǐ zǒu guòlái, bǎ tā de yǔsǎn jiègěi le wǒ, hái dài wǒ qù pángbiān de kāfēiguǎn hē le yì bēi rè kāfēi. Yǒu zhèyàng de hǎo tóngshì, wǒ xīnlǐ juéde fēicháng wēnnuǎn.",
    "contentVi": "5 giờ chiều hôm qua lúc tôi tan làm, bên ngoài đột nhiên đổ mưa to. Vì buổi sáng lúc ra khỏi nhà thời tiết rất đẹp nên tôi không mang theo ô, đành đứng trước cửa tòa nhà công ty đợi tạnh mưa. Qua 10 phút, đồng nghiệp Tiểu Lý đi tới, cho tôi mượn chiếc ô của anh ấy, còn đưa tôi sang quán cà phê bên cạnh uống một cốc cà phê nóng. Có người đồng nghiệp tốt như vậy, trong lòng tôi cảm thấy vô cùng ấm áp.",
    "questions": [
      {
        "id": "rp-hsk2-basic-10-q1",
        "questionVi": "Chuyện gì xảy ra lúc tác giả tan làm vào 5 giờ chiều hôm qua?",
        "options": [
          "Tàu điện ngầm ngừng chạy",
          "Bên ngoài đột nhiên đổ mưa to",
          "Tác giả làm mất chìa khóa",
          "Trời có tuyết rơi"
        ],
        "correctAnswer": "Bên ngoài đột nhiên đổ mưa to",
        "explanationVi": "'外面突然下起了大雨'."
      },
      {
        "id": "rp-hsk2-basic-10-q2",
        "questionVi": "Tại sao tác giả không mang theo ô?",
        "options": [
          "Vì tác giả không có ô",
          "Vì ô bị hỏng",
          "Vì buổi sáng lúc ra khỏi nhà thời tiết rất đẹp",
          "Vì tác giả đi ô tô riêng"
        ],
        "correctAnswer": "Vì buổi sáng lúc ra khỏi nhà thời tiết rất đẹp",
        "explanationVi": "'因为早上出门时天气很好，所以我没带雨伞'."
      },
      {
        "id": "rp-hsk2-basic-10-q3",
        "questionVi": "Tác giả đã đứng đợi ở cửa tòa nhà công ty bao lâu?",
        "options": [
          "5 phút",
          "30 phút",
          "1 tiếng",
          "10 phút"
        ],
        "correctAnswer": "10 phút",
        "explanationVi": "'过了十分钟，同事小李走过来'."
      },
      {
        "id": "rp-hsk2-basic-10-q4",
        "questionVi": "Tiểu Lý đã giúp tác giả những gì?",
        "options": [
          "Cho mượn ô và mời đi uống cà phê nóng ở quán bên cạnh",
          "Lái xe đưa tác giả về tận nhà",
          "Gọi taxi giúp tác giả",
          "Mua cho tác giả một chiếc áo mưa mới"
        ],
        "correctAnswer": "Cho mượn ô và mời đi uống cà phê nóng ở quán bên cạnh",
        "explanationVi": "'把他的雨伞借给了我，还带我去旁边的咖啡馆喝了一杯热咖啡'."
      },
      {
        "id": "rp-hsk2-basic-10-q5",
        "questionVi": "Cảm xúc của tác giả sau sự việc này là gì?",
        "options": [
          "Cảm thấy rất buồn chán",
          "Cảm thấy vô cùng ấm áp trong lòng",
          "Cảm thấy bị cảm lạnh",
          "Cảm thấy tức giận vì trời mưa"
        ],
        "correctAnswer": "Cảm thấy vô cùng ấm áp trong lòng",
        "explanationVi": "'我心里觉得非常温暖'."
      }
    ]
  },
  {
    "id": "rp-hsk2-advanced-11",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "genre": "Hướng dẫn du lịch",
    "title": "中国酒店入住指南",
    "titlePinyin": "Zhōngguó jiǔdiàn rùzhù zhǐnán",
    "titleVi": "Hướng dẫn nhận phòng khách sạn tại Trung Quốc",
    "contentZh": "各位越南游客请注意：在中国办理酒店入住时，前台需要登记每位客人的护照原件，请提前准备好。酒店一般从下午两点开始办理入住，第二天中午十二点前退房。如果您的飞机晚上才起飞，退房后可以把行李免费寄存在前台。房间里的两瓶矿泉水是免费的，但是冰箱里的饮料需要另外付费。",
    "contentPinyin": "Gèwèi Yuènán yóukè qǐng zhùyì: zài Zhōngguó bànlǐ jiǔdiàn rùzhù shí, qiántái xūyào dēngjì měi wèi kèrén de hùzhào yuánjiàn, qǐng tíqián zhǔnbèi hǎo. Jiǔdiàn yìbān cóng xiàwǔ liǎng diǎn kāishǐ bànlǐ rùzhù, dì-èr tiān zhōngwǔ shí'èr diǎn qián tuìfáng. Rúguǒ nín de fēijī wǎnshang cái qǐfēi, tuìfáng hòu kěyǐ bǎ xíngli miǎnfèi jìcún zài qiántái. Fángjiān lǐ de liǎng píng kuàngquánshuǐ shì miǎnfèi de, dànshì bīngxiāng lǐ de yǐnliào xūyào lìngwài fùfèi.",
    "contentVi": "Xin quý du khách Việt Nam chú ý: Khi làm thủ tục nhận phòng khách sạn tại Trung Quốc, lễ tân cần đăng ký hộ chiếu bản gốc của mỗi vị khách, xin hãy chuẩn bị sẵn trước. Khách sạn thường bắt đầu nhận phòng từ 2 giờ chiều và trả phòng trước 12 giờ trưa hôm sau. Nếu chuyến bay của quý khách buổi tối mới cất cánh, sau khi trả phòng có thể gửi hành lý miễn phí tại quầy lễ tân. Hai chai nước khoáng trong phòng là miễn phí, nhưng đồ uống trong tủ lạnh cần thanh toán thêm phí.",
    "questions": [
      {
        "id": "rp-hsk2-advanced-11-q1",
        "questionVi": "Khi làm thủ tục nhận phòng khách sạn ở Trung Quốc, du khách cần xuất trình giấy tờ gì?",
        "options": [
          "Bằng lái xe máy",
          "Thẻ thư viện",
          "Hộ chiếu bản gốc (护照原件)",
          "Ảnh chụp hộ chiếu trên điện thoại"
        ],
        "correctAnswer": "Hộ chiếu bản gốc (护照原件)",
        "explanationVi": "'前台需要登记每位客人的护照原件'."
      },
      {
        "id": "rp-hsk2-advanced-11-q2",
        "questionVi": "Giờ nhận phòng và trả phòng tiêu chuẩn của khách sạn là khi nào?",
        "options": [
          "Nhận phòng lúc 8 giờ sáng, trả phòng lúc 8 giờ tối",
          "Nhận và trả phòng lúc nào cũng được",
          "Nhận phòng từ 12 giờ trưa, trả phòng lúc 2 giờ chiều",
          "Nhận phòng từ 2 giờ chiều, trả phòng trước 12 giờ trưa hôm sau"
        ],
        "correctAnswer": "Nhận phòng từ 2 giờ chiều, trả phòng trước 12 giờ trưa hôm sau",
        "explanationVi": "'下午两点开始办理入住，第二天中午十二点前退房'."
      },
      {
        "id": "rp-hsk2-advanced-11-q3",
        "questionVi": "Nếu chuyến bay cất cánh vào buổi tối, sau khi trả phòng trưa khách có thể làm gì với hành lý?",
        "options": [
          "Gửi hành lý miễn phí tại quầy lễ tân",
          "Phải trả 100 tệ phí gửi đồ",
          "Bắt buộc mang ra sân bay từ buổi sáng",
          "Không được phép gửi lại khách sạn"
        ],
        "correctAnswer": "Gửi hành lý miễn phí tại quầy lễ tân",
        "explanationVi": "'退房后可以把行李免费寄存在前台'."
      },
      {
        "id": "rp-hsk2-advanced-11-q4",
        "questionVi": "Đồ uống nào trong phòng được cung cấp miễn phí?",
        "options": [
          "Tất cả đồ uống trong tủ lạnh",
          "Hai chai nước khoáng",
          "Rượu vang đỏ",
          "Cà phê ở sảnh"
        ],
        "correctAnswer": "Hai chai nước khoáng",
        "explanationVi": "'房间里的两瓶矿泉水是免费的'."
      },
      {
        "id": "rp-hsk2-advanced-11-q5",
        "questionVi": "Điều gì xảy ra nếu khách uống đồ uống trong tủ lạnh phòng?",
        "options": [
          "Được miễn phí hoàn toàn",
          "Được tặng thêm hai chai nữa",
          "Phải thanh toán thêm tiền",
          "Sẽ bị hủy phòng"
        ],
        "correctAnswer": "Phải thanh toán thêm tiền",
        "explanationVi": "'但是冰箱里的饮料需要另外付费'."
      }
    ]
  },
  {
    "id": "rp-hsk2-advanced-12",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "genre": "Tin nhắn Taobao",
    "title": "淘宝客服聊天记录",
    "titlePinyin": "Táobǎo kèfú liáotiān jìlù",
    "titleVi": "Lịch sử chat với CSKH trên Taobao",
    "contentZh": "买家：亲，我刚拍了这件黑色风衣，请问什么时候能发货？\n客服：亲，您好！黑色M码现在有现货，今天下午五点前就能发顺丰快递，全国包邮。\n买家：太好了！如果穿起来不合适，可以退换吗？\n客服：完全可以，我们支持七天无理由退换货，而且已经为您赠送了运费险，您放心购买！",
    "contentPinyin": "Mǎijiā: Qīn, wǒ gāng pāi le zhè jiàn hēisè fēngyī, qǐngwèn shénme shíhou néng fāhuò?\nKèfú: Qīn, nínhǎo! Hēisè M mǎ xiànzài yǒu xiànhuò, jīntiān xiàwǔ wǔ diǎn qián jiù néng fā Shùnfēng kuàidì, quánguó bāoyóu.\nMǎijiā: Tài hǎo le! Rúguǒ chuān qǐlái bù héshì, kěyǐ tuìhuàn ma?\nKèfú: Wánquán kěyǐ, wǒmen zhīchí qī tiān wúlǐyóu tuìhuànhuò, érqiě yǐjīng wèi nín zèngsòng le yùnfèixiǎn, nín fàngxīn gòumǎi!",
    "contentVi": "Người mua: Bạn ơi (Qīn), mình vừa đặt mua chiếc áo khoác măng tô màu đen này, cho hỏi khi nào có thể gửi hàng?\nCSKH: Chào bạn! Màu đen size M hiện có hàng sẵn, trước 5 giờ chiều hôm nay là có thể gửi chuyển phát nhanh SF Express, miễn phí ship toàn quốc.\nNgười mua: Tốt quá! Nếu mặc không vừa có thể đổi trả không?\nCSKH: Hoàn toàn được ạ, chúng tôi hỗ trợ đổi trả không cần lý do trong 7 ngày, hơn nữa đã tặng kèm bảo hiểm phí vận chuyển cho bạn rồi, bạn cứ yên tâm mua sắm!",
    "questions": [
      {
        "id": "rp-hsk2-advanced-12-q1",
        "questionVi": "Người mua vừa đặt mua sản phẩm gì?",
        "options": [
          "Một đôi giày thể thao trắng",
          "Một chiếc túi xách đỏ",
          "Một chiếc quần bò xanh",
          "Một chiếc áo khoác măng tô màu đen"
        ],
        "correctAnswer": "Một chiếc áo khoác măng tô màu đen",
        "explanationVi": "'我刚拍了这件黑色风衣'."
      },
      {
        "id": "rp-hsk2-advanced-12-q2",
        "questionVi": "Cửa hàng dự kiến gửi hàng vào thời điểm nào?",
        "options": [
          "Trước 5 giờ chiều hôm nay",
          "Tuần sau",
          "Sau 7 ngày nữa",
          "Ngày mai buổi sáng"
        ],
        "correctAnswer": "Trước 5 giờ chiều hôm nay",
        "explanationVi": "'今天下午五点前就能发顺丰快递'."
      },
      {
        "id": "rp-hsk2-advanced-12-q3",
        "questionVi": "Đơn hàng này sử dụng hãng chuyển phát nhanh nào và có mất phí ship không?",
        "options": [
          "Giao hàng thường và thu phí 30 tệ",
          "SF Express (顺丰快递) và miễn phí ship toàn quốc",
          "Khách phải tự đến cửa hàng lấy",
          "Gửi bằng đường biển"
        ],
        "correctAnswer": "SF Express (顺丰快递) và miễn phí ship toàn quốc",
        "explanationVi": "'发顺丰快递，全国包邮'."
      },
      {
        "id": "rp-hsk2-advanced-12-q4",
        "questionVi": "Chính sách đổi trả của cửa hàng là gì?",
        "options": [
          "Không cho phép đổi trả sau khi mua",
          "Chỉ cho đổi trong vòng 1 tiếng",
          "Hỗ trợ đổi trả không cần lý do trong vòng 7 ngày",
          "Chỉ hoàn tiền 50%"
        ],
        "correctAnswer": "Hỗ trợ đổi trả không cần lý do trong vòng 7 ngày",
        "explanationVi": "'我们支持七天无理由退换货'."
      },
      {
        "id": "rp-hsk2-advanced-12-q5",
        "questionVi": "Cửa hàng còn tặng kèm quyền lợi gì để khách yên tâm mua sắm?",
        "options": [
          "Tặng thêm một chiếc áo nữa",
          "Giảm giá 80%",
          "Tặng thẻ điện thoại",
          "Tặng kèm bảo hiểm phí vận chuyển (运费险)"
        ],
        "correctAnswer": "Tặng kèm bảo hiểm phí vận chuyển (运费险)",
        "explanationVi": "'而且已经为您赠送了运费险'."
      }
    ]
  },
  {
    "id": "rp-hsk3-basic-13",
    "level": "HSK3",
    "subDifficulty": "basic",
    "genre": "Thông báo công ty",
    "title": "端午节放假通知",
    "titlePinyin": "Duānwǔjié fàngjià tōngzhī",
    "titleVi": "Thông báo nghỉ lễ Tết Đoan Ngọ",
    "contentZh": "公司全体员工：根据国家法定节假日安排，今年端午节放假时间为六月八日至六月十日，共三天。六月十一日星期二正常上班。请各部门在放假前安排好手头工作，离开办公室时务必关闭电脑、空调并锁好门窗。祝大家端午安康，假期愉快！行政部。",
    "contentPinyin": "Gōngsī quántǐ yuángōng: gēnjù guójiā fǎdìng jiéjiàrì ānpái, jīnnián Duānwǔjié fàngjià shíjiān wéi liù yuè bā rì zhì liù yuè shí rì, gòng sān tiān. Liù yuè shíyī rì xīngqī'èr zhèngcháng shàngbān. Qǐng gè bùmén zài fàngjià qián ānpái hǎo shǒutóu gōngzuò, líkāi bàngōngshì shí wùbì guānbì diànnǎo, kōngtiáo bìng suǒhǎo ménchuāng. Zhù dàjiā Duānwǔ ānkāng, jiàqī yúkuài! Xíngzhèngbù.",
    "contentVi": "Kính gửi toàn thể nhân viên công ty: Theo lịch nghỉ lễ quốc gia, thời gian nghỉ Tết Đoan Ngọ năm nay từ ngày 8/6 đến ngày 10/6, tổng cộng 3 ngày. Thứ Ba ngày 11/6 đi làm bình thường. Đề nghị các phòng ban sắp xếp ổn thỏa công việc trước khi nghỉ lễ, khi rời văn phòng nhất định phải tắt máy tính, điều hòa và khóa kỹ cửa ra vào, cửa sổ. Chúc mọi người Đoan Ngọ an khang, kỳ nghỉ vui vẻ! Phòng Hành chính.",
    "questions": [
      {
        "id": "rp-hsk3-basic-13-q1",
        "questionVi": "Thông báo này do bộ phận nào ban hành?",
        "options": [
          "Phòng Hành chính (行政部)",
          "Phòng Tài vụ",
          "Phòng Kinh doanh",
          "Bộ phận Bảo vệ"
        ],
        "correctAnswer": "Phòng Hành chính (行政部)",
        "explanationVi": "Cuối thông báo ký tên: '行政部'."
      },
      {
        "id": "rp-hsk3-basic-13-q2",
        "questionVi": "Nhân viên được nghỉ Tết Đoan Ngọ bao nhiêu ngày?",
        "options": [
          "5 ngày",
          "3 ngày (từ 8/6 đến 10/6)",
          "1 ngày",
          "7 ngày"
        ],
        "correctAnswer": "3 ngày (từ 8/6 đến 10/6)",
        "explanationVi": "'六月八日至六月十日，共三天'."
      },
      {
        "id": "rp-hsk3-basic-13-q3",
        "questionVi": "Ngày nào nhân viên sẽ quay trở lại làm việc bình thường?",
        "options": [
          "Thứ Hai ngày 10 tháng 6",
          "Thứ Tư ngày 12 tháng 6",
          "Thứ Ba ngày 11 tháng 6",
          "Chủ nhật ngày 9 tháng 6"
        ],
        "correctAnswer": "Thứ Ba ngày 11 tháng 6",
        "explanationVi": "'六月十一日星期二正常上班'."
      },
      {
        "id": "rp-hsk3-basic-13-q4",
        "questionVi": "Trước khi rời văn phòng đi nghỉ lễ, nhân viên bắt buộc phải làm gì?",
        "options": [
          "Để máy tính bật suốt 3 ngày",
          "Mang toàn bộ bàn ghế về nhà",
          "Tắt toàn bộ đèn đường",
          "Tắt máy tính, tắt điều hòa và khóa kỹ cửa sổ, cửa ra vào"
        ],
        "correctAnswer": "Tắt máy tính, tắt điều hòa và khóa kỹ cửa sổ, cửa ra vào",
        "explanationVi": "'务必关闭电脑、空调并锁好门窗'."
      },
      {
        "id": "rp-hsk3-basic-13-q5",
        "questionVi": "Câu chúc truyền thống dịp Tết Đoan Ngọ trong thông báo là gì?",
        "options": [
          "Đoan Ngọ an khang (端午安康)",
          "Chúc mừng năm mới",
          "Trung Thu vui vẻ",
          "Sinh nhật vui vẻ"
        ],
        "correctAnswer": "Đoan Ngọ an khang (端午安康)",
        "explanationVi": "'祝大家端午安康，假期愉快！'."
      }
    ]
  },
  {
    "id": "rp-hsk3-basic-14",
    "level": "HSK3",
    "subDifficulty": "basic",
    "genre": "Bài viết sức khỏe",
    "title": "久坐办公的护眼与健康建议",
    "titlePinyin": "Jiǔzuò bàngōng de hùyǎn yǔ jiànkāng jiànyì",
    "titleVi": "Lời khuyên bảo vệ mắt và sức khỏe khi ngồi văn phòng lâu",
    "contentZh": "现在很多上班族每天对着电脑屏幕工作八个小时以上，不仅眼睛容易干涩疲劳，脖子和肩膀也常常酸痛。医生建议，每工作五十分钟就应该站起来活动十分钟，看看窗外的绿色植物，让眼睛放松一下。此外，办公椅的高度要调整合适，电脑屏幕最好与眼睛保持平行，每天下班后坚持散步半小时，能有效预防职业病。",
    "contentPinyin": "Xiànzài hěn duō shàngbānzú měitiān duìzhe diànnǎo píngmù gōngzuò bā gè xiǎoshí yǐshàng, bùjǐn yǎnjing róngyì gānsè píláo, bózi hé jiānbǎng yě chángcháng suāntòng. Yīshēng jiànyì, měi gōngzuò wǔshí fēnzhōng jiù yīnggāi zhàn qǐlái huódòng shí fēnzhōng, kànkan chuāngwài de lǜsè zhíwù, ràng yǎnjing fàngsōng yíxià. Cǐwài, bàngōngyǐ de gāodù yào tiáozhěng héshì, diànnǎo píngmù zuìhǎo yǔ yǎnjing bǎochí píngxíng, měitiān xiàbān hòu jiānchí sànbù bàn xiǎoshí, néng yǒuxiào yùfáng zhíyèbìng.",
    "contentVi": "Hiện nay nhiều dân văn phòng mỗi ngày làm việc trước màn hình máy tính trên 8 tiếng, không chỉ mắt dễ bị khô mỏi mà cổ và vai cũng thường xuyên đau nhức. Bác sĩ khuyên rằng cứ làm việc 50 phút nên đứng dậy vận động 10 phút, nhìn ra cây xanh ngoài cửa sổ để mắt thư giãn một chút. Ngoài ra, chiều cao ghế văn phòng cần điều chỉnh phù hợp, màn hình máy tính tốt nhất giữ ngang tầm mắt, mỗi ngày sau khi tan làm kiên trì đi bộ nửa tiếng có thể phòng ngừa hiệu quả bệnh nghề nghiệp.",
    "questions": [
      {
        "id": "rp-hsk3-basic-14-q1",
        "questionVi": "Ngồi làm việc trước máy tính trên 8 tiếng mỗi ngày dễ gây ra vấn đề gì?",
        "options": [
          "Tăng chiều cao nhanh chóng",
          "Mắt khô mỏi, cổ và vai thường xuyên đau nhức",
          "Cải thiện thị lực",
          "Ngủ quá nhiều"
        ],
        "correctAnswer": "Mắt khô mỏi, cổ và vai thường xuyên đau nhức",
        "explanationVi": "'不仅眼睛容易干涩疲劳，脖子和肩膀也常常酸痛'."
      },
      {
        "id": "rp-hsk3-basic-14-q2",
        "questionVi": "Bác sĩ khuyên cứ sau 50 phút làm việc thì nên làm gì?",
        "options": [
          "Ngủ trưa 2 tiếng",
          "Nhìn sát vào màn hình điện thoại",
          "Đứng dậy vận động 10 phút và nhìn cây xanh ngoài cửa sổ",
          "Uống 3 cốc cà phê"
        ],
        "correctAnswer": "Đứng dậy vận động 10 phút và nhìn cây xanh ngoài cửa sổ",
        "explanationVi": "'每工作五十分钟就应该站起来活动十分钟，看看窗外的绿色植物'."
      },
      {
        "id": "rp-hsk3-basic-14-q3",
        "questionVi": "Vị trí màn hình máy tính nên đặt như thế nào so với mắt?",
        "options": [
          "Đặt sát xuống sàn nhà",
          "Đặt cao hơn đầu 1 mét",
          "Đặt lệch hẳn sang bên trái",
          "Nên giữ song song / ngang tầm với mắt"
        ],
        "correctAnswer": "Nên giữ song song / ngang tầm với mắt",
        "explanationVi": "'电脑屏幕最好与眼睛保持平行'."
      },
      {
        "id": "rp-hsk3-basic-14-q4",
        "questionVi": "Sau khi tan làm, thói quen nào giúp phòng ngừa bệnh nghề nghiệp hiệu quả?",
        "options": [
          "Kiên trì đi bộ nửa tiếng mỗi ngày",
          "Nằm xem điện thoại suốt đêm",
          "Không ăn tối",
          "Tiếp tục ngồi làm việc thêm 5 tiếng"
        ],
        "correctAnswer": "Kiên trì đi bộ nửa tiếng mỗi ngày",
        "explanationVi": "'每天下班后坚持散步半小时，能有效预防职业病'."
      },
      {
        "id": "rp-hsk3-basic-14-q5",
        "questionVi": "Bài viết trên chủ yếu hướng đến đối tượng nào?",
        "options": [
          "Học sinh mẫu giáo",
          "Dân văn phòng làm việc lâu với máy tính",
          "Vận động viên điền kinh",
          "Phi công hàng không"
        ],
        "correctAnswer": "Dân văn phòng làm việc lâu với máy tính",
        "explanationVi": "Câu đầu nêu rõ: '很多上班族每天对着电脑屏幕工作八个小时以上'."
      }
    ]
  },
  {
    "id": "rp-hsk3-advanced-15",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "genre": "Email thương mại 1688",
    "title": "向广州工厂询价的邮件",
    "titlePinyin": "Xiàng Guǎngzhōu gōngchǎng xúnjià de yóujiàn",
    "titleVi": "Email hỏi báo giá gửi nhà máy Quảng Châu",
    "contentZh": "尊敬的陈厂长：您好！我们是越南河内的电子配件批发商，最近在1688平台上看到贵厂生产的无线充电宝，款式非常符合越南市场需求。请问这款产品的最低起订量是多少？如果首批订购一千台，并要求印上我们的商标，单价和生产周期分别是多少？另外，我们希望先购买五个样品测试质量，请问样品费怎么算？期待您的回复！阮明。",
    "contentPinyin": "Zūnjìng de Chén chǎngzhǎng: nínhǎo! Wǒmen shì Yuènán Hénèi de diànzǐ pèijiàn pīfāshāng, zuìjìn zài Yāo-liù-bā-bā píngtái shàng kàndào guì chǎng shēngchǎn de wúxiàn chōngdiànbǎo, kuǎnshì fēicháng fúhé Yuènán shìchǎng xūqiú. Qǐngwèn zhè kuǎn chǎnpǐn de zuìdī qǐdìngliàng shì duōshao? Rúguǒ shǒupī dìnggòu yìqiān tái, bìng yāoqiú yìn shàng wǒmen de shāngbiāo, dānjià hé shēngchǎn zhōuqī fēnbié shì duōshao? Lìngwài, wǒmen xīwàng xiān gòumǎi wǔ gè yàngpǐn cèshì zhìliàng, qǐngwèn yàngpǐnfèi zěnme suàn? Qīdài nín de huífù! Ruǎn Míng.",
    "contentVi": "Kính gửi Xưởng trưởng Trần: Xin chào ngài! Chúng tôi là nhà bán sỉ phụ kiện điện tử tại Hà Nội, Việt Nam, gần đây thấy sạc dự phòng không dây do nhà máy quý vị sản xuất trên nền tảng 1688, kiểu dáng rất phù hợp với nhu cầu thị trường Việt Nam. Xin hỏi số lượng đặt tối thiểu (MOQ) của sản phẩm này là bao nhiêu? Nếu lô đầu đặt 1000 chiếc và yêu cầu in logo thương hiệu của chúng tôi thì đơn giá và chu kỳ sản xuất lần lượt là bao nhiêu? Ngoài ra, chúng tôi muốn mua trước 5 mẫu thử để kiểm tra chất lượng, xin hỏi phí hàng mẫu tính thế nào? Mong hồi âm của ngài! Nguyễn Minh.",
    "questions": [
      {
        "id": "rp-hsk3-advanced-15-q1",
        "questionVi": "Nguyễn Minh làm nghề gì và ở thành phố nào?",
        "options": [
          "Chủ nhà hàng tại Thượng Hải",
          "Giáo viên đại học tại Bắc Kinh",
          "Nhà bán sỉ phụ kiện điện tử tại Hà Nội",
          "Bác sĩ tại TP.HCM"
        ],
        "correctAnswer": "Nhà bán sỉ phụ kiện điện tử tại Hà Nội",
        "explanationVi": "'我们是越南河内的电子配件批发商'."
      },
      {
        "id": "rp-hsk3-advanced-15-q2",
        "questionVi": "Sản phẩm mà Nguyễn Minh quan tâm trên 1688 là gì?",
        "options": [
          "Tai nghe có dây",
          "Ốp lưng điện thoại",
          "Màn hình máy tính",
          "Sạc dự phòng không dây (无线充电宝)"
        ],
        "correctAnswer": "Sạc dự phòng không dây (无线充电宝)",
        "explanationVi": "'看到贵厂生产的无线充电宝'."
      },
      {
        "id": "rp-hsk3-advanced-15-q3",
        "questionVi": "Lô hàng đầu tiên Nguyễn Minh dự định đặt bao nhiêu chiếc và có yêu cầu đặc biệt gì?",
        "options": [
          "1000 chiếc và in logo thương hiệu riêng",
          "100 chiếc không cần in logo",
          "5000 chiếc đổi màu sắc",
          "5 chiếc để bán lẻ"
        ],
        "correctAnswer": "1000 chiếc và in logo thương hiệu riêng",
        "explanationVi": "'首批订购一千台，并要求印上我们的商标'."
      },
      {
        "id": "rp-hsk3-advanced-15-q4",
        "questionVi": "Tại sao Nguyễn Minh muốn mua trước 5 chiếc hàng mẫu?",
        "options": [
          "Để tặng cho người thân",
          "Để kiểm tra chất lượng sản phẩm trước khi đặt lô lớn",
          "Vì chỉ có tiền mua 5 chiếc",
          "Để bán thử ở chợ đêm"
        ],
        "correctAnswer": "Để kiểm tra chất lượng sản phẩm trước khi đặt lô lớn",
        "explanationVi": "'先购买五个样品测试质量'."
      },
      {
        "id": "rp-hsk3-advanced-15-q5",
        "questionVi": "Nội dung nào KHÔNG được Nguyễn Minh hỏi trong email?",
        "options": [
          "Số lượng đặt hàng tối thiểu (MOQ)",
          "Đơn giá và chu kỳ sản xuất",
          "Địa chỉ nhà riêng của xưởng trưởng Trần",
          "Cách tính phí hàng mẫu"
        ],
        "correctAnswer": "Địa chỉ nhà riêng của xưởng trưởng Trần",
        "explanationVi": "Email hỏi MOQ, đơn giá, chu kỳ sản xuất và phí hàng mẫu; không hề hỏi địa chỉ nhà riêng."
      }
    ]
  },
  {
    "id": "rp-hsk3-advanced-16",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "genre": "Hướng dẫn Logistics",
    "title": "中越陆运专线发货须知",
    "titlePinyin": "Zhōng-Yuè lùyùn zhuānxiàn fāhuò xūzhī",
    "titleVi": "Lưu ý khi gửi hàng tuyến đường bộ chuyên biệt Trung – Việt",
    "contentZh": "尊敬的客户：为确保您的货物顺利从广州集运仓发往河内，请注意以下三点：第一，每个外箱必须贴清您的专属客户编号和箱号，防止仓库漏扫；第二，易碎品如玻璃杯、陶瓷必须打木架并加泡沫保护；第三，严禁夹带违禁品及未申报的电池类产品。正常陆运时效为三至五个工作日，入库后可在小程序实时查询物流轨迹。",
    "contentPinyin": "Zūnjìng de kèhù: wèi quèbǎo nín de huòwù shùnlì cóng Guǎngzhōu jíyùncāng fāwǎng Hénèi, qǐng zhùyì yǐxià sān diǎn: dì-yī, měi gè wàixiāng bìxū tiē qīng nín de zhuānshǔ kèhù biānhào hé xiānghào, fángzhǐ cāngkù lòusǎo; dì-èr, yìsuìpǐn rú bōlibēi, táocí bìxū dǎ mùjià bìng jiā pàomò bǎohù; dì-sān, yánjìn jiādài wéijìnpǐn jí wèi shēnbào de diànchí lèi chǎnpǐn. Zhèngcháng lùyùn shíxiào wéi sān zhì wǔ gè gōngzuòrì, rùkù hòu kě zài xiǎochéngxù shíshí cháxún wùliú guǐjì.",
    "contentVi": "Kính gửi quý khách hàng: Để đảm bảo hàng hóa của quý khách vận chuyển thuận lợi từ kho gom hàng Quảng Châu về Hà Nội, xin lưu ý 3 điểm sau: Thứ nhất, mỗi thùng ngoài phải dán rõ mã khách hàng riêng và số thứ tự thùng để tránh kho quét sót; Thứ hai, hàng dễ vỡ như cốc thủy tinh, đồ gốm sứ bắt buộc phải đóng khung gỗ và thêm xốp bảo vệ; Thứ ba, nghiêm cấm kẹp hàng cấm và các sản phẩm chứa pin chưa khai báo. Thời gian vận chuyển đường bộ thông thường là 3 đến 5 ngày làm việc, sau khi nhập kho có thể tra cứu hành trình vận đơn theo thời gian thực trên mini-program.",
    "questions": [
      {
        "id": "rp-hsk3-advanced-16-q1",
        "questionVi": "Tuyến vận chuyển trong thông báo đi từ đâu đến đâu?",
        "options": [
          "Từ Bắc Kinh đi Thượng Hải",
          "Từ Hà Nội đi TP.HCM",
          "Từ Thâm Quyến đi Châu Âu",
          "Từ kho gom hàng Quảng Châu về Hà Nội"
        ],
        "correctAnswer": "Từ kho gom hàng Quảng Châu về Hà Nội",
        "explanationVi": "'从广州集运仓发往河内'."
      },
      {
        "id": "rp-hsk3-advanced-16-q2",
        "questionVi": "Tại sao bên ngoài mỗi thùng hàng phải dán rõ mã khách hàng và số thùng?",
        "options": [
          "Để tránh nhân viên kho quét sót hoặc nhầm lẫn hàng",
          "Để được giảm 50% cước phí",
          "Để trang trí cho đẹp",
          "Vì quy định của hãng hàng không"
        ],
        "correctAnswer": "Để tránh nhân viên kho quét sót hoặc nhầm lẫn hàng",
        "explanationVi": "'防止仓库漏扫'."
      },
      {
        "id": "rp-hsk3-advanced-16-q3",
        "questionVi": "Hàng dễ vỡ như gốm sứ, thủy tinh cần đóng gói như thế nào?",
        "options": [
          "Chỉ cần bọc một lớp túi nilon mỏng",
          "Đóng khung gỗ và thêm xốp bảo vệ",
          "Không cần đóng thùng carton",
          "Gửi chung với sắt thép"
        ],
        "correctAnswer": "Đóng khung gỗ và thêm xốp bảo vệ",
        "explanationVi": "'易碎品如玻璃杯、陶瓷必须打木架并加泡沫保护'."
      },
      {
        "id": "rp-hsk3-advanced-16-q4",
        "questionVi": "Mặt hàng nào bị nghiêm cấm gửi lén trong kiện hàng?",
        "options": [
          "Quần áo vải cotton",
          "Sách vở học tập",
          "Hàng cấm và các sản phẩm chứa pin chưa khai báo",
          "Giày thể thao"
        ],
        "correctAnswer": "Hàng cấm và các sản phẩm chứa pin chưa khai báo",
        "explanationVi": "'严禁夹带违禁品及未申报的电池类产品'."
      },
      {
        "id": "rp-hsk3-advanced-16-q5",
        "questionVi": "Thời gian vận chuyển đường bộ thông thường mất bao lâu?",
        "options": [
          "15 đến 20 ngày",
          "1 tháng",
          "Chỉ 2 tiếng đồng hồ",
          "3 đến 5 ngày làm việc"
        ],
        "correctAnswer": "3 đến 5 ngày làm việc",
        "explanationVi": "'正常陆运时效为三至五个工作日'."
      }
    ]
  },
  {
    "id": "rp-hsk4-basic-17",
    "level": "HSK4",
    "subDifficulty": "basic",
    "genre": "Bài báo Văn hóa",
    "title": "中国高铁如何改变人们的出行方式",
    "titlePinyin": "Zhōngguó gāotiě rúhé gǎibiàn rénmen de chūxíng fāngshì",
    "titleVi": "Tàu cao tốc Trung Quốc thay đổi cách đi lại của con người như thế nào",
    "contentZh": "十多年前，从北京坐普通火车到上海需要十四个小时左右，人们往往要在卧铺车厢里过一夜。如今，随着中国高铁网络的四通八达，时速三百五十公里的“复兴号”列车把这段超过一千三百公里的路程缩短到了四个半小时。不仅如此，高铁站大多与市内地铁无缝衔接，乘客不用像坐飞机那样提前两小时去郊区机场安检，准点率也极高。因此，越来越多的商务人士和游客在短中期跨城出行时，首选高铁而非飞机。",
    "contentPinyin": "Shí duō nián qián, cóng Běijīng zuò pǔtōng huǒchē dào Shànghǎi xūyào shísì gè xiǎoshí zuǒyòu, rénmen wǎngwǎng yào zài wòpù chēxiāng lǐ guò yí yè. Rújīn, suízhe Zhōngguó gāotiě wǎngluò de sìtōngbādá, shísù sānbǎi wǔshí gōnglǐ de “Fùxīnghào” lièchē bǎ zhè duàn chāoguò yìqiān sānbǎi gōnglǐ de lùchéng suōduǎn dào le sì gè bàn xiǎoshí. Bùjǐn rúcǐ, gāotiězhàn dàduō yǔ shìnèi dìtiě wúfèng xiánjiē, chéngkè búyòng xiàng zuò fēijī nàyàng tíqián liǎng xiǎoshí qù jiāoqū jīchǎng ānjiǎn, zhǔndiǎnlǜ yě jí gāo. Yīncǐ, yuèláiyuè duō de shāngwù rénshì hé yóukè zài duǎn-zhōngqī kuàchéng chūxíng shí, shǒuxuǎn gāotiě ér fēi fēijī.",
    "contentVi": "Hơn mười năm trước, đi tàu hỏa thường từ Bắc Kinh tới Thượng Hải mất khoảng 14 tiếng, mọi người thường phải ngủ qua một đêm trong toa giường nằm. Ngày nay, cùng với mạng lưới tàu cao tốc Trung Quốc thông suốt khắp nơi, đoàn tàu 'Phục Hưng' tốc độ 350 km/giờ đã rút ngắn chặng đường hơn 1300 km này xuống còn 4 tiếng rưỡi. Không chỉ vậy, các ga tàu cao tốc phần lớn kết nối liền mạch với tàu điện ngầm nội đô, hành khách không phải ra sân bay ngoại ô kiểm tra an ninh trước 2 tiếng như đi máy bay, tỷ lệ đúng giờ cũng cực cao. Do đó, ngày càng nhiều doanh nhân và du khách ưu tiên chọn tàu cao tốc thay vì máy bay khi di chuyển liên tỉnh cự ly ngắn và trung bình.",
    "questions": [
      {
        "id": "rp-hsk4-basic-17-q1",
        "questionVi": "Hơn 10 năm trước, đi tàu hỏa thường từ Bắc Kinh đến Thượng Hải mất khoảng bao lâu?",
        "options": [
          "Khoảng 14 tiếng",
          "4 tiếng rưỡi",
          "2 tiếng",
          "24 tiếng"
        ],
        "correctAnswer": "Khoảng 14 tiếng",
        "explanationVi": "'需要十四个小时左右'."
      },
      {
        "id": "rp-hsk4-basic-17-q2",
        "questionVi": "Tốc độ của đoàn tàu cao tốc 'Phục Hưng' được nêu trong bài là bao nhiêu?",
        "options": [
          "150 km/giờ",
          "350 km/giờ",
          "500 km/giờ",
          "200 km/giờ"
        ],
        "correctAnswer": "350 km/giờ",
        "explanationVi": "'时速三百五十公里的“复兴号”列车'."
      },
      {
        "id": "rp-hsk4-basic-17-q3",
        "questionVi": "Hiện nay đi tàu cao tốc từ Bắc Kinh đến Thượng Hải chỉ mất bao lâu?",
        "options": [
          "14 tiếng",
          "8 tiếng",
          "4 tiếng rưỡi",
          "1 tiếng"
        ],
        "correctAnswer": "4 tiếng rưỡi",
        "explanationVi": "'缩短到了四个半小时'."
      },
      {
        "id": "rp-hsk4-basic-17-q4",
        "questionVi": "So với máy bay, ưu điểm nào của tàu cao tốc được nhắc đến trong bài?",
        "options": [
          "Vé tàu cao tốc hoàn toàn miễn phí",
          "Trên tàu có rạp chiếu phim",
          "Tàu cao tốc có thể bay qua đại dương",
          "Ga kết nối liền mạch với tàu điện ngầm, không cần ra ngoại ô sớm 2 tiếng và tỷ lệ đúng giờ rất cao"
        ],
        "correctAnswer": "Ga kết nối liền mạch với tàu điện ngầm, không cần ra ngoại ô sớm 2 tiếng và tỷ lệ đúng giờ rất cao",
        "explanationVi": "'高铁站大多与市内地铁无缝衔接...准点率也极高'."
      },
      {
        "id": "rp-hsk4-basic-17-q5",
        "questionVi": "Nhóm đối tượng nào ngày càng ưu tiên chọn tàu cao tốc cho chặng liên tỉnh cự ly ngắn và trung bình?",
        "options": [
          "Doanh nhân và du khách",
          "Chỉ có học sinh tiểu học",
          "Chỉ có phi công",
          "Chỉ có người cao tuổi"
        ],
        "correctAnswer": "Doanh nhân và du khách",
        "explanationVi": "'越来越多的商务人士和游客...首选高铁而非飞机'."
      }
    ]
  },
  {
    "id": "rp-hsk4-basic-18",
    "level": "HSK4",
    "subDifficulty": "basic",
    "genre": "Tâm lý & Đời sống",
    "title": "学会给生活做减法",
    "titlePinyin": "Xuéhuì gěi shēnghuó zuò jiǎnfǎ",
    "titleVi": "Học cách làm phép trừ cho cuộc sống",
    "contentZh": "如今物质生活越来越丰富，许多人的房间里堆满了打折时冲动买回来的衣服和几乎用不上的小家电，手机里也装了几十个很少打开的软件。结果，东西越多，我们反而越容易感到焦躁和疲惫。近年来流行的“断舍离”生活方式提醒我们：定期清理不再需要的物品，把时间和精力留给真正重要的人和事。学会给生活做减法，才能为内心的平静留出更多空间。",
    "contentPinyin": "Rújīn wùzhì shēnghuó yuèláiyuè fēngfù, xǔduō rén de fángjiān lǐ duīmǎn le dǎzhé shí chōngdòng mǎi huílái de yīfu hé jīhū yòngbushàng de xiǎo jiādiàn, shǒujī lǐ yě zhuāng le jǐshí gè hěn shǎo dǎkāi de ruǎnjiàn. Jiéguǒ, dōngxi yuè duō, wǒmen fǎn'ér yuè róngyì gǎndào jiāozào hé píbèi. Jìnnián lái liúxíng de “duànshělí” shēnghuó fāngshì tíxǐng wǒmen: dìngqī qīnglǐ búzài xūyào de wùpǐn, bǎ shíjiān hé jīnglì liúgěi zhēnzhèng zhòngyào de rén hé shì. Xuéhuì gěi shēnghuó zuò jiǎnfǎ, cái néng wèi nèixīn de píngjìng liúchū gèng duō kōngjiān.",
    "contentVi": "Ngày nay đời sống vật chất ngày càng phong phú, trong phòng nhiều người chất đầy quần áo mua bốc đồng lúc giảm giá và đồ gia dụng nhỏ hầu như không dùng tới, trong điện thoại cũng cài hàng chục ứng dụng hiếm khi mở. Kết quả là đồ đạc càng nhiều, chúng ta ngược lại càng dễ cảm thấy bồn chồn và mệt mỏi. Lối sống tối giản 'Đoạn - Xả - Ly' thịnh hành những năm gần đây nhắc nhở chúng ta: định kỳ dọn dẹp những món đồ không còn cần thiết, dành thời gian và tinh lực cho những người và việc thực sự quan trọng. Học cách làm phép trừ cho cuộc sống mới có thể chừa ra nhiều không gian hơn cho sự bình yên nội tâm.",
    "questions": [
      {
        "id": "rp-hsk4-basic-18-q1",
        "questionVi": "Thực trạng nào được mô tả ở đầu đoạn văn?",
        "options": [
          "Mọi người không có đủ quần áo để mặc",
          "Phòng chất đầy đồ mua bốc đồng lúc giảm giá và điện thoại cài đầy ứng dụng ít dùng",
          "Không ai thích mua sắm giảm giá",
          "Điện thoại thông minh không cài được ứng dụng"
        ],
        "correctAnswer": "Phòng chất đầy đồ mua bốc đồng lúc giảm giá và điện thoại cài đầy ứng dụng ít dùng",
        "explanationVi": "'房间里堆满了打折时冲动买回来的衣服...手机里也装了几十个很少打开的软件'."
      },
      {
        "id": "rp-hsk4-basic-18-q2",
        "questionVi": "Hệ quả của việc tích trữ quá nhiều đồ đạc không dùng tới là gì?",
        "options": [
          "Giúp căn phòng rộng rãi hơn",
          "Giúp tiết kiệm rất nhiều tiền",
          "Khiến con người dễ cảm thấy bồn chồn và mệt mỏi",
          "Giúp ngủ ngon hơn"
        ],
        "correctAnswer": "Khiến con người dễ cảm thấy bồn chồn và mệt mỏi",
        "explanationVi": "'东西越多，我们反而越容易感到焦躁和疲惫'."
      },
      {
        "id": "rp-hsk4-basic-18-q3",
        "questionVi": "Lối sống 'Đoạn - Xả - Ly (断舍离)' khuyên chúng ta nên làm gì?",
        "options": [
          "Vứt bỏ toàn bộ đồ đạc kể cả đồ đang dùng hàng ngày",
          "Mua thêm thật nhiều tủ để chứa đồ",
          "Không bao giờ dọn dẹp phòng",
          "Định kỳ dọn dẹp đồ không cần thiết, dành thời gian cho người và việc thực sự quan trọng"
        ],
        "correctAnswer": "Định kỳ dọn dẹp đồ không cần thiết, dành thời gian cho người và việc thực sự quan trọng",
        "explanationVi": "'定期清理不再需要的物品，把时间和精力留给真正重要的人和事'."
      },
      {
        "id": "rp-hsk4-basic-18-q4",
        "questionVi": "Cụm từ 'làm phép trừ cho cuộc sống (给生活做减法)' có nghĩa là gì?",
        "options": [
          "Giản lược những thứ dư thừa để tâm hồn bình yên và tập trung vào điều cốt lõi",
          "Giảm số giờ ngủ mỗi ngày",
          "Học lại môn toán trừ",
          "Nghỉ việc hoàn toàn"
        ],
        "correctAnswer": "Giản lược những thứ dư thừa để tâm hồn bình yên và tập trung vào điều cốt lõi",
        "explanationVi": "'学会给生活做减法，才能为内心的平静留出更多空间'."
      },
      {
        "id": "rp-hsk4-basic-18-q5",
        "questionVi": "Tác giả mang thái độ như thế nào đối với lối sống tối giản?",
        "options": [
          "Phản đối gay gắt",
          "Ủng hộ và khuyến khích áp dụng",
          "Chế giễu",
          "Không quan tâm"
        ],
        "correctAnswer": "Ủng hộ và khuyến khích áp dụng",
        "explanationVi": "Tác giả khẳng định làm phép trừ sẽ mang lại không gian cho sự bình yên nội tâm."
      }
    ]
  },
  {
    "id": "rp-hsk4-advanced-19",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "genre": "Báo cáo Thương mại",
    "title": "中越跨境电商与海外仓模式",
    "titlePinyin": "Zhōng-Yuè kuàjìng diànshāng yǔ hǎiwàicāng móshì",
    "titleVi": "Thương mại điện tử xuyên biên giới Trung – Việt và mô hình Kho ngoại quan",
    "contentZh": "过去，越南消费者购买中国商品往往需要等待十天甚至半个月的国际快递，退换货更是麻烦重重。近年来，随着TikTok Shop和Shopee在东南亚的迅猛发展，越来越多中国供应链企业选择在河内和胡志明市提前设立“海外仓”。工厂先通过整柜海运或中越陆运专线将畅销品批量备货到越南本地仓库，并完成正规报关缴税。当越南消费者在直播间下单后，本地仓库当天即可打包发货，同城次日就能送达，大幅提升了消费体验和店铺复购率。",
    "contentPinyin": "Guòqù, Yuènán xiāofèizhě gòumǎi Zhōngguó shāngpǐn wǎngwǎng xūyào děngdài shí tiān shènzhì bàn gè yuè de guójì kuàidì, tuìhuànhuò gèng shì máfan chóngchóng. Jìnnián lái, suízhe TikTok Shop hé Shopee zài Dōngnányà de xùnměng fāzhǎn, yuèláiyuè duō Zhōngguó gōngyìngliàn qǐyè xuǎnzé zài Hénèi hé Húzhìmíng shì tíqián shèlì “hǎiwàicāng”. Gōngchǎng xiān tōngguò zhěngguì hǎiyùn huò Zhōng-Yuè lùyùn zhuānxiàn jiāng chàngxiāopǐn pīliàng bèihuò dào Yuènán běndì cāngkù, bìng wánchéng zhèngguī bàoguān jiǎoshuì. Dāng Yuènán xiāofèizhě zài zhíbōjiān xiàdān hòu, běndì cāngkù dāngtiān jíkě dǎbāo fāhuò, tóngchéng cìrì jiù néng sòngdá, dàfú tíshēng le xiāofèi tǐyàn hé diànpù fùgòulǜ.",
    "contentVi": "Trước đây, người tiêu dùng Việt Nam mua hàng Trung Quốc thường phải đợi chuyển phát nhanh quốc tế 10 ngày thậm chí nửa tháng, việc đổi trả càng đầy rẫy phiền phức. Những năm gần đây, cùng với sự phát triển vũ bão của TikTok Shop và Shopee tại Đông Nam Á, ngày càng nhiều doanh nghiệp chuỗi cung ứng Trung Quốc chọn lập trước 'kho ngoại quan (overseas warehouse)' tại Hà Nội và TP.HCM. Nhà máy trước hết chuyển lô hàng bán chạy bằng container đường biển hoặc tuyến đường bộ chuyên biệt Trung - Việt tới kho nội địa Việt Nam và hoàn tất khai báo hải quan nộp thuế chính ngạch. Khi người tiêu dùng Việt Nam đặt đơn trên phòng livestream, kho nội địa có thể đóng gói gửi đi ngay trong ngày, nội thành hôm sau là tới nơi, nâng cao vượt bậc trải nghiệm tiêu dùng và tỷ lệ mua lại của gian hàng.",
    "questions": [
      {
        "id": "rp-hsk4-advanced-19-q1",
        "questionVi": "Trước đây, điểm bất tiện lớn nhất khi người tiêu dùng Việt Nam mua hàng từ Trung Quốc là gì?",
        "options": [
          "Không có hàng hóa để mua",
          "Không có điện thoại để đặt hàng",
          "Phải đợi chuyển phát quốc tế 10-15 ngày và đổi trả rất phiền phức",
          "Hàng hóa không có bao bì"
        ],
        "correctAnswer": "Phải đợi chuyển phát quốc tế 10-15 ngày và đổi trả rất phiền phức",
        "explanationVi": "'等待十天甚至半个月的国际快递，退换货更是麻烦重重'."
      },
      {
        "id": "rp-hsk4-advanced-19-q2",
        "questionVi": "Các doanh nghiệp chuỗi cung ứng Trung Quốc đã lập 'kho ngoại quan (海外仓)' tại hai thành phố nào ở Việt Nam?",
        "options": [
          "Đà Nẵng và Hải Phòng",
          "Cần Thơ và Huế",
          "Nha Trang và Vũng Tàu",
          "Hà Nội và TP.HCM"
        ],
        "correctAnswer": "Hà Nội và TP.HCM",
        "explanationVi": "'在河内和胡志明市提前设立“海外仓”'."
      },
      {
        "id": "rp-hsk4-advanced-19-q3",
        "questionVi": "Hàng bán chạy được đưa vào kho nội địa Việt Nam trước bằng cách nào?",
        "options": [
          "Vận chuyển số lượng lớn bằng container đường biển hoặc đường bộ chuyên biệt và khai báo hải quan chính ngạch",
          "Gửi từng chiếc qua đường bưu điện",
          "Nhờ khách du lịch xách tay",
          "Sản xuất thủ công ngay tại cửa hàng"
        ],
        "correctAnswer": "Vận chuyển số lượng lớn bằng container đường biển hoặc đường bộ chuyên biệt và khai báo hải quan chính ngạch",
        "explanationVi": "'通过整柜海运或中越陆运专线将畅销品批量备货到越南本地仓库，并完成正规报关缴税'."
      },
      {
        "id": "rp-hsk4-advanced-19-q4",
        "questionVi": "Với mô hình kho ngoại quan, khách nội thành đặt hàng trên livestream sau bao lâu có thể nhận được hàng?",
        "options": [
          "Sau 15 ngày",
          "Ngay ngày hôm sau (同城次日就能送达)",
          "Sau 1 tháng",
          "Sau 1 tuần"
        ],
        "correctAnswer": "Ngay ngày hôm sau (同城次日就能送达)",
        "explanationVi": "'本地仓库当天即可打包发货，同城次日就能送达'."
      },
      {
        "id": "rp-hsk4-advanced-19-q5",
        "questionVi": "Hiệu quả kinh doanh nổi bật nhất của mô hình kho ngoại quan là gì?",
        "options": [
          "Làm tăng thời gian giao hàng lên gấp đôi",
          "Bỏ qua hoàn toàn việc đóng thuế",
          "Nâng cao vượt bậc trải nghiệm mua sắm và tỷ lệ khách hàng mua lại (复购率)",
          "Chỉ bán được cho khách hàng nước ngoài"
        ],
        "correctAnswer": "Nâng cao vượt bậc trải nghiệm mua sắm và tỷ lệ khách hàng mua lại (复购率)",
        "explanationVi": "'大幅提升了消费体验和店铺复购率'."
      }
    ]
  },
  {
    "id": "rp-hsk4-advanced-20",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "genre": "Hợp đồng & Chứng từ",
    "title": "外贸出口单证核对清单",
    "titlePinyin": "Wàimào chūkǒu dānzhèng héduì qīngdān",
    "titleVi": "Danh mục đối chiếu chứng từ xuất khẩu ngoại thương",
    "contentZh": "在国际贸易实务中，“单证一致、单单一致”是顺利收汇和清关的生命线。出口企业在装船前必须仔细核对四份核心文件：商业发票、装箱单、海运提单以及原产地证书（如东盟Form E）。其中，商业发票上的商品品名、数量、单价和总金额必须与信用证或合同完全吻合；装箱单需准确列明净重、毛重和外箱体积。哪怕是一个字母或小数点的差错，都可能导致目的港海关扣货查验，产生高额滞箱费。",
    "contentPinyin": "Zài guójì màoyì shíwù zhōng, “dānzhèng yízhì, dāndān yízhì” shì shùnlì shōuhuì hé qīngguān de shēngmìngxiàn. Chūkǒu qǐyè zài zhuāngchuán qián bìxū zǐxì héduì sì fèn héxīn wénjiàn: shāngyè fāpiào, zhuāngxiāngdān, hǎiyùn tídān yǐjí yuánchǎndì zhèngshū (rú Dōngméng Form E). Qízhōng, shāngyè fāpiào shàng de shāngpǐn pǐnmíng, shùliàng, dānjià hé zǒng jīn'é bìxū yǔ xìnyòngzhèng huò hétong wánquán wěnhé; zhuāngxiāngdān xū zhǔnquè lièmíng jìngzhòng, máozhòng hé wàixiāng tǐjī. Nǎpà shì yí gè zìmǔ huò xiǎoshùdiǎn de chācuò, dōu kěnéng dǎozhì mùdìgǎng hǎiguān kòuhuò cháyàn, chǎnshēng gāo'é zhìxiāngfèi.",
    "contentVi": "Trong thực tiễn thương mại quốc tế, 'chứng từ khớp với L/C, chứng từ khớp với nhau' là sợi dây sinh mệnh để thu ngoại tệ và thông quan thuận lợi. Doanh nghiệp xuất khẩu trước khi xếp hàng lên tàu phải đối chiếu kỹ 4 văn kiện cốt lõi: Hóa đơn thương mại, Phiếu đóng gói, Vận đơn đường biển và Giấy chứng nhận xuất xứ (như ASEAN Form E). Trong đó, tên hàng, số lượng, đơn giá và tổng số tiền trên hóa đơn thương mại phải khớp hoàn toàn với L/C hoặc hợp đồng; phiếu đóng gói cần liệt kê chính xác trọng lượng tịnh, trọng lượng cả bì và thể tích thùng ngoài. Dù chỉ sai sót một chữ cái hay một dấu thập phân cũng có thể khiến hải quan cảng đích giữ hàng kiểm hóa, phát sinh phí lưu container rất cao.",
    "questions": [
      {
        "id": "rp-hsk4-advanced-20-q1",
        "questionVi": "Nguyên tắc cốt lõi để thu tiền và thông quan thuận lợi trong thương mại quốc tế là gì?",
        "options": [
          "Gửi hàng trước rồi viết hợp đồng sau",
          "Không cần làm hóa đơn thương mại",
          "Chỉ cần có vận đơn là đủ",
          "Chứng từ khớp với L/C và các chứng từ khớp với nhau (单证一致、单单一致)"
        ],
        "correctAnswer": "Chứng từ khớp với L/C và các chứng từ khớp với nhau (单证一致、单单一致)",
        "explanationVi": "'“单证一致、单单一致”是顺利收汇和清关的生命线'."
      },
      {
        "id": "rp-hsk4-advanced-20-q2",
        "questionVi": "Đâu là 4 văn kiện cốt lõi cần đối chiếu kỹ trước khi xếp hàng lên tàu?",
        "options": [
          "Hóa đơn thương mại, Phiếu đóng gói, Vận đơn đường biển và Giấy chứng nhận xuất xứ",
          "Hộ chiếu, vé máy bay, thẻ ngân hàng và danh thiếp",
          "Bản vẽ thiết kế, hợp đồng thuê nhà, hóa đơn điện và nước",
          "Catalog, tờ rơi, ảnh chụp kho và biển số xe"
        ],
        "correctAnswer": "Hóa đơn thương mại, Phiếu đóng gói, Vận đơn đường biển và Giấy chứng nhận xuất xứ",
        "explanationVi": "'商业发票、装箱单、海运提单以及原产地证书'."
      },
      {
        "id": "rp-hsk4-advanced-20-q3",
        "questionVi": "Phiếu đóng gói (装箱单 - Packing List) cần liệt kê chính xác những thông số nào?",
        "options": [
          "Tên tài xế và màu sơn tàu biển",
          "Trọng lượng tịnh (净重), trọng lượng cả bì (毛重) và thể tích thùng ngoài",
          "Giá bán lẻ tại siêu thị",
          "Lương của nhân viên kho"
        ],
        "correctAnswer": "Trọng lượng tịnh (净重), trọng lượng cả bì (毛重) và thể tích thùng ngoài",
        "explanationVi": "'装箱单需准确列明净重、毛重和外箱体积'."
      },
      {
        "id": "rp-hsk4-advanced-20-q4",
        "questionVi": "Hậu quả có thể xảy ra nếu trên chứng từ sai sót dù chỉ một chữ cái hoặc một dấu thập phân là gì?",
        "options": [
          "Được hải quan miễn thuế nhập khẩu",
          "Tàu biển sẽ giao hàng nhanh hơn",
          "Hải quan cảng đích giữ hàng kiểm hóa và phát sinh phí lưu container (滞箱费) rất cao",
          "Không ảnh hưởng gì đến việc nhận hàng"
        ],
        "correctAnswer": "Hải quan cảng đích giữ hàng kiểm hóa và phát sinh phí lưu container (滞箱费) rất cao",
        "explanationVi": "'都可能导致目的港海关扣货查验，产生高额滞箱费'."
      },
      {
        "id": "rp-hsk4-advanced-20-q5",
        "questionVi": "Loại Giấy chứng nhận xuất xứ nào được nhắc đến làm ví dụ cho khu vực Đông Nam Á?",
        "options": [
          "Form A",
          "Form D",
          "Form X",
          "ASEAN Form E (东盟Form E)"
        ],
        "correctAnswer": "ASEAN Form E (东盟Form E)",
        "explanationVi": "'原产地证书（如东盟Form E）'."
      }
    ]
  },
  {
    "id": "rp-hsk5-basic-21",
    "level": "HSK5",
    "subDifficulty": "basic",
    "genre": "Bình luận Công nghệ",
    "title": "人工智能时代，人类最不可替代的能力是什么？",
    "titlePinyin": "Réngōng zhìnéng shídài, rénlèi zuì bùkě tìdài de nénglì shì shénme?",
    "titleVi": "Trong kỷ nguyên AI, năng lực khó thay thế nhất của con người là gì?",
    "contentZh": "近年来，大语言模型和生成式人工智能的发展速度令世人惊叹。无论是编写基础代码、整理会议纪要，还是翻译常规商业邮件，AI都能在几秒钟内交出令人满意的答卷。面对自动化浪潮，许多职场人难免产生被取代的焦虑。然而，教育学与心理学专家普遍指出，AI本质上是对已有数据的概率重组，它并不具备真正的同理心、价值判断力以及跨界原创思维。因此，未来的核心竞争力不在于比拼记忆力和机械执行，而在于提出好问题的能力、深度共情的沟通力以及整合资源解决复杂现实问题的担当。",
    "contentPinyin": "Jìnnián lái, dà yǔyán móxíng hé shēngchéngshì réngōng zhìnéng de fāzhǎn sùdù lìng shìrén jīngtàn. Wúlùn shì biānxiě jīchǔ dàimǎ, zhěnglǐ huìyì jìyào, háishi fānyì chángguī shāngyè yóujiàn, AI dōu néng zài jǐ miǎozhōng nèi jiāochū lìngrén mǎnyì de dájuàn. Miànduì zìdònghuà làngcháo, xǔduō zhíchǎngrén nánmiǎn chǎnshēng bèi qǔdài de jiāolǜ. Rán'ér, jiàoyùxué yǔ xīnlǐxué zhuānjiā pǔbiàn zhǐchū, AI běnzhì shàng shì duì yǐyǒu shùjù de gàilǜ chóngzǔ, tā bìng bù jùbèi zhēnzhèng de tónglǐxīn, jiàzhí pànduànlì yǐjí kuàjiè yuánchuàng sīwéi. Yīncǐ, wèilái de héxīn jìngzhēnglì bú zàiyú bǐpīn jìyìlì hé jīxiè zhíxíng, ér zàiyú tíchū hǎo wèntí de nénglì, shēndù gòngqíng de gōutōnglì yǐjí zhěnghé zīyuán jiějué fùzá xiànshí wèntí de dāndāng.",
    "contentVi": "Những năm gần đây, tốc độ phát triển của mô hình ngôn ngữ lớn và AI tạo sinh khiến cả thế giới kinh ngạc. Bất kể là viết mã nguồn cơ bản, tổng hợp biên bản cuộc họp hay dịch email thương mại thông thường, AI đều có thể đưa ra bài giải đáng hài lòng trong vài giây. Trước làn sóng tự động hóa, nhiều người đi làm khó tránh khỏi nỗi lo âu bị thay thế. Tuy nhiên, các chuyên gia giáo dục và tâm lý học phổ biến chỉ ra rằng, AI về bản chất là sự tái tổ hợp theo xác suất từ dữ liệu sẵn có, nó không hề có lòng thấu cảm thực sự, năng lực phán đoán giá trị cũng như tư duy sáng tạo nguyên bản liên ngành. Do đó, năng lực cạnh tranh cốt lõi tương lai không nằm ở việc thi đua trí nhớ hay thực thi máy móc, mà nằm ở năng lực đặt câu hỏi hay, khả năng giao tiếp thấu cảm sâu sắc và bản lĩnh tích hợp nguồn lực giải quyết vấn đề thực tiễn phức tạp.",
    "questions": [
      {
        "id": "rp-hsk5-basic-21-q1",
        "questionVi": "Những công việc nào được nêu ra là AI có thể hoàn thành trong vài giây?",
        "options": [
          "Viết code cơ bản, tổng hợp biên bản họp và dịch email thương mại thông thường",
          "Phẫu thuật tim khẩn cấp",
          "Ký kết hiệp ước hòa bình quốc tế",
          "Chăm sóc tâm lý cho trẻ sơ sinh"
        ],
        "correctAnswer": "Viết code cơ bản, tổng hợp biên bản họp và dịch email thương mại thông thường",
        "explanationVi": "'编写基础代码、整理会议纪要，还是翻译常规商业邮件'."
      },
      {
        "id": "rp-hsk5-basic-21-q2",
        "questionVi": "Theo các chuyên gia, bản chất của AI là gì?",
        "options": [
          "Có cảm xúc và ý thức giống hệt con người",
          "Sự tái tổ hợp theo xác suất từ dữ liệu đã có sẵn",
          "Sáng tạo ra giá trị đạo đức mới hoàn toàn",
          "Không cần bất kỳ dữ liệu nào"
        ],
        "correctAnswer": "Sự tái tổ hợp theo xác suất từ dữ liệu đã có sẵn",
        "explanationVi": "'AI本质上是对已有数据的概率重组'."
      },
      {
        "id": "rp-hsk5-basic-21-q3",
        "questionVi": "Ba phẩm chất nào mà AI KHÔNG thực sự sở hữu theo bài viết?",
        "options": [
          "Tốc độ tính toán nhanh",
          "Khả năng lưu trữ văn bản",
          "Lòng thấu cảm thực sự, năng lực phán đoán giá trị và tư duy sáng tạo nguyên bản liên ngành",
          "Khả năng dịch câu đơn giản"
        ],
        "correctAnswer": "Lòng thấu cảm thực sự, năng lực phán đoán giá trị và tư duy sáng tạo nguyên bản liên ngành",
        "explanationVi": "'不具备真正的同理心、价值判断力以及跨界原创思维'."
      },
      {
        "id": "rp-hsk5-basic-21-q4",
        "questionVi": "Năng lực cạnh tranh cốt lõi của con người trong tương lai nằm ở đâu?",
        "options": [
          "Học thuộc lòng cuốn từ điển dày 2000 trang",
          "Làm các thao tác lặp đi lặp lại máy móc",
          "Từ chối sử dụng mọi thiết bị điện tử",
          "Đặt câu hỏi hay, giao tiếp thấu cảm sâu sắc và giải quyết vấn đề thực tiễn phức tạp"
        ],
        "correctAnswer": "Đặt câu hỏi hay, giao tiếp thấu cảm sâu sắc và giải quyết vấn đề thực tiễn phức tạp",
        "explanationVi": "'在于提出好问题的能力、深度共情的沟通力以及整合资源解决复杂现实问题的担当'."
      },
      {
        "id": "rp-hsk5-basic-21-q5",
        "questionVi": "Giọng điệu chung của bài viết đối với kỷ nguyên AI là gì?",
        "options": [
          "Khách quan, bình tĩnh và mang tính định hướng tích cực",
          "Hoảng loạn và kêu gọi phá hủy máy tính",
          "Phủ nhận hoàn toàn tác dụng của AI",
          "Châm biếm các chuyên gia giáo dục"
        ],
        "correctAnswer": "Khách quan, bình tĩnh và mang tính định hướng tích cực",
        "explanationVi": "Bài viết thừa nhận sức mạnh của AI đồng thời chỉ ra hướng phát triển năng lực cốt lõi cho con người."
      }
    ]
  },
  {
    "id": "rp-hsk5-basic-22",
    "level": "HSK5",
    "subDifficulty": "basic",
    "genre": "Văn hóa Ẩm thực",
    "title": "茶文化与“以茶会友”",
    "titlePinyin": "Chá wénhuà yǔ “yǐ chá huì yǒu”",
    "titleVi": "Văn hóa trà và đạo 'Lấy trà kết bạn'",
    "contentZh": "中国是茶的故乡，种茶和饮茶的历史已有数千年。根据发酵程度的不同，中国茶主要分为绿茶、红茶、乌龙茶、白茶、黄茶和黑茶六大类。在商务接待和日常社交中，“以茶会友”是一种极具东方韵味的礼仪。主人亲自温杯、投茶、冲泡，动作从容不迫；客人接过茶杯时，常常用食指和中指轻敲桌面两下，这被称为“叩指礼”，表示对主人的感谢。一壶好茶不仅能解渴提神，更能在舒缓的氛围中拉近彼此的心理距离。",
    "contentPinyin": "Zhōngguó shì chá de gùxiāng, zhòngchá hé yǐnchá de lìshǐ yǐ yǒu shùqiān nián. Gēnjù fājiào chéngdù de bùtóng, Zhōngguó chá zhǔyào fēnwéi lǜchá, hóngchá, wūlóngchá, báichá, huángchá hé hēichá liù dà lèi. Zài shāngwù jiēdài hé rìcháng shèjiāo zhōng, “yǐ chá huì yǒu” shì yì zhǒng jí jù Dōngfāng yùnwèi de lǐyí. Zhǔrén qīnzì wēnbēi, tóuchá, chōngpào, dòngzuò cóngróng búpò; kèrén jiēguò chábēi shí, chángcháng yòng shízhǐ hé zhōngzhǐ qīngqiāo zhuōmiàn liǎng xià, zhè bèi chēngwéi “kòuzhǐlǐ”, biǎoshì duì zhǔrén de gǎnxiè. Yì hú hǎochá bùjǐn néng jiěkě tíshén, gèng néng zài shūhuǎn de fēnwéi zhōng lājìn bǐcǐ de xīnlǐ jùlí.",
    "contentVi": "Trung Quốc là quê hương của trà, lịch sử trồng trà và uống trà đã có hàng ngàn năm. Căn cứ vào mức độ lên men khác nhau, trà Trung Quốc chủ yếu chia thành 6 loại lớn: trà xanh, hồng trà, trà Ô Long, bạch trà, hoàng trà và hắc trà. Trong tiếp đãi thương mại và giao tiếp thường ngày, 'lấy trà kết bạn' là một nghi lễ mang đậm dư vị phương Đông. Chủ nhà đích thân tráng chén, bỏ trà, pha trà với động tác ung dung thư thái; khách khi nhận chén trà thường dùng ngón trỏ và ngón giữa gõ nhẹ lên mặt bàn hai cái, gọi là 'Khấu chỉ lễ', biểu thị lòng cảm ơn đối với chủ nhà. Một ấm trà ngon không chỉ giải khát tỉnh táo mà còn giúp thu hẹp khoảng cách tâm lý giữa đôi bên trong bầu không khí thư thái.",
    "questions": [
      {
        "id": "rp-hsk5-basic-22-q1",
        "questionVi": "Trà Trung Quốc được phân thành 6 loại lớn dựa trên tiêu chí nào?",
        "options": [
          "Giá bán đắt hay rẻ",
          "Mức độ lên men khác nhau (发酵程度的不同)",
          "Màu sắc của ấm pha trà",
          "Kích thước lá trà"
        ],
        "correctAnswer": "Mức độ lên men khác nhau (发酵程度的不同)",
        "explanationVi": "'根据发酵程度的不同，中国茶主要分为...六大类'."
      },
      {
        "id": "rp-hsk5-basic-22-q2",
        "questionVi": "Đâu KHÔNG nằm trong 6 loại trà lớn được liệt kê trong bài?",
        "options": [
          "Trà xanh (绿茶)",
          "Trà Ô Long (乌龙茶)",
          "Trà sữa trân châu",
          "Bạch trà (白茶)"
        ],
        "correctAnswer": "Trà sữa trân châu",
        "explanationVi": "6 loại gồm: 绿茶, 红茶, 乌龙茶, 白茶, 黄茶, 黑茶."
      },
      {
        "id": "rp-hsk5-basic-22-q3",
        "questionVi": "Nghi lễ 'Khấu chỉ lễ (叩指礼)' khi được rót trà được thực hiện như thế nào?",
        "options": [
          "Đứng dậy vỗ tay thật to",
          "Đặt chén trà xuống sàn nhà",
          "Cúi đầu 90 độ không nói gì",
          "Dùng ngón trỏ và ngón giữa gõ nhẹ xuống mặt bàn hai cái"
        ],
        "correctAnswer": "Dùng ngón trỏ và ngón giữa gõ nhẹ xuống mặt bàn hai cái",
        "explanationVi": "'用食指和中指轻敲桌面两下，这被称为“叩指礼”'."
      },
      {
        "id": "rp-hsk5-basic-22-q4",
        "questionVi": "Ý nghĩa của nghi lễ gõ ngón tay xuống mặt bàn là gì?",
        "options": [
          "Biểu thị lòng cảm ơn đối với người rót trà",
          "Báo hiệu trà quá nóng",
          "Yêu cầu đổi loại trà khác",
          "Tỏ ý muốn ra về ngay"
        ],
        "correctAnswer": "Biểu thị lòng cảm ơn đối với người rót trà",
        "explanationVi": "'表示对主人的感谢'."
      },
      {
        "id": "rp-hsk5-basic-22-q5",
        "questionVi": "Trong tiếp đãi thương mại, một ấm trà ngon mang lại tác dụng gì ngoài việc giải khát?",
        "options": [
          "Thay thế hoàn toàn bữa trưa",
          "Tạo bầu không khí thư thái và thu hẹp khoảng cách tâm lý giữa hai bên",
          "Làm cuộc họp kết thúc trong 1 phút",
          "Giúp ký hợp đồng mà không cần đọc điều khoản"
        ],
        "correctAnswer": "Tạo bầu không khí thư thái và thu hẹp khoảng cách tâm lý giữa hai bên",
        "explanationVi": "'更能在舒缓的氛围中拉近彼此的心理距离'."
      }
    ]
  },
  {
    "id": "rp-hsk5-advanced-23",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "genre": "Hợp đồng Ngoại thương",
    "title": "中越采购合同核心条款节选",
    "titlePinyin": "Zhōng-Yuè cǎigòu hétong héxīn tiáokuǎn jiéxuǎn",
    "titleVi": "Trích đoạn điều khoản cốt lõi Hợp đồng thu mua Trung – Việt",
    "contentZh": "第五条（付款方式）：本合同总金额为人民币八十万元。合同签署后三个工作日内，买方须通过银行电汇（T/T）支付百分之三十的预付款；其余百分之七十尾款在货物生产完毕、经买方委托的第三方质检机构出具合格报告后、装船出运前一次性付清。\n第八条（违约责任）：如卖方非因不可抗力逾期交货，每逾期一天须按未交货物总值的千分之二向买方支付违约金；若逾期超过十五天，买方有权单方面解除合同并要求双倍返还定金。",
    "contentPinyin": "Dì-wǔ tiáo (fùkuǎn fāngshì): běn hétong zǒng jīn'é wéi Rénmínbì bāshíwàn yuán. Hétong qiānshǔ hòu sān gè gōngzuòrì nèi, mǎifāng xū tōngguò yínháng diànhuì (T/T) zhīfù bǎifēn zhī sānshí de yùfùkuǎn; qíyú bǎifēn zhī qīshí wěikuǎn zài huòwù shēngchǎn wánbì, jīng mǎifāng wěituō de dì-sānfāng zhìjiǎn jīgòu chūjù hégé bàogào hòu, zhuāngchuán chūyùn qián yícìxìng fùqīng.\nDì-bā tiáo (wéiyuē zérèn): rú màifāng fēi yīn bùkěkànglì yúqī jiāohuò, měi yúqī yì tiān xū àn wèijiāo huòwù zǒngzhí de qiānfēn zhī èr xiàng mǎifāng zhīfù wéiyuējīn; ruò yúqī chāoguò shíwǔ tiān, mǎifāng yǒuquán dānfāngmiàn jiěchú hétong bìng yāoqiú shuāngbèi fǎnhuán dìngjīn.",
    "contentVi": "Điều 5 (Phương thức thanh toán): Tổng giá trị hợp đồng này là 800.000 Nhân dân tệ. Trong vòng 3 ngày làm việc sau khi ký hợp đồng, bên mua phải thanh toán 30% tiền trả trước qua chuyển khoản ngân hàng (T/T); 70% tiền còn lại thanh toán một lần sau khi hàng sản xuất xong, có báo cáo đạt chuẩn của cơ quan kiểm định bên thứ ba do bên mua ủy thác và trước khi xếp hàng lên tàu xuất đi.\nĐiều 8 (Trách nhiệm vi phạm): Nếu bên bán giao hàng quá hạn không phải do bất khả kháng, mỗi ngày quá hạn phải trả cho bên mua tiền phạt vi phạm bằng 0,2% (2 phần nghìn) tổng giá trị hàng chưa giao; nếu quá hạn quá 15 ngày, bên mua có quyền đơn phương hủy bỏ hợp đồng và yêu cầu hoàn trả gấp đôi tiền đặt cọc.",
    "questions": [
      {
        "id": "rp-hsk5-advanced-23-q1",
        "questionVi": "Tổng giá trị của hợp đồng thu mua này là bao nhiêu?",
        "options": [
          "80.000 Nhân dân tệ",
          "800.000 USD",
          "800.000 Nhân dân tệ",
          "300.000 Nhân dân tệ"
        ],
        "correctAnswer": "800.000 Nhân dân tệ",
        "explanationVi": "'本合同总金额为人民币八十万元'."
      },
      {
        "id": "rp-hsk5-advanced-23-q2",
        "questionVi": "Số tiền trả trước 30% tương đương bao nhiêu tiền và phải thanh toán trong bao lâu?",
        "options": [
          "560.000 Nhân dân tệ, trong vòng 15 ngày",
          "100.000 Nhân dân tệ, sau khi nhận hàng",
          "800.000 Nhân dân tệ, ngay lập tức",
          "240.000 Nhân dân tệ, trong vòng 3 ngày làm việc sau khi ký hợp đồng"
        ],
        "correctAnswer": "240.000 Nhân dân tệ, trong vòng 3 ngày làm việc sau khi ký hợp đồng",
        "explanationVi": "30% của 800.000 tệ là 240.000 tệ, '合同签署后三个工作日内...支付百分之三十'."
      },
      {
        "id": "rp-hsk5-advanced-23-q3",
        "questionVi": "Điều kiện bắt buộc để thanh toán 70% số tiền còn lại là gì?",
        "options": [
          "Hàng sản xuất xong, có báo cáo đạt chuẩn của bên kiểm định thứ ba và trước khi xếp lên tàu",
          "Hàng đã bán hết tại Việt Nam",
          "Không cần kiểm định chất lượng",
          "Thanh toán sau khi tàu cập cảng 30 ngày"
        ],
        "correctAnswer": "Hàng sản xuất xong, có báo cáo đạt chuẩn của bên kiểm định thứ ba và trước khi xếp lên tàu",
        "explanationVi": "'经买方委托的第三方质检机构出具合格报告后、装船出运前一次性付清'."
      },
      {
        "id": "rp-hsk5-advanced-23-q4",
        "questionVi": "Nếu bên bán giao hàng trễ không phải do bất khả kháng, mức phạt mỗi ngày là bao nhiêu?",
        "options": [
          "2% tổng giá trị hợp đồng",
          "0,2% (2 phần nghìn) tổng giá trị số hàng chưa giao",
          "10% tiền đặt cọc",
          "Không bị phạt tiền"
        ],
        "correctAnswer": "0,2% (2 phần nghìn) tổng giá trị số hàng chưa giao",
        "explanationVi": "'每逾期一天须按未交货物总值的千分之二向买方支付违约金'."
      },
      {
        "id": "rp-hsk5-advanced-23-q5",
        "questionVi": "Khi bên bán giao hàng trễ quá 15 ngày, bên mua có quyền gì?",
        "options": [
          "Chỉ được gia hạn thêm 30 ngày",
          "Phải trả thêm tiền cho bên bán",
          "Đơn phương hủy hợp đồng và yêu cầu hoàn trả gấp đôi tiền đặt cọc",
          "Không có quyền hủy hợp đồng"
        ],
        "correctAnswer": "Đơn phương hủy hợp đồng và yêu cầu hoàn trả gấp đôi tiền đặt cọc",
        "explanationVi": "'买方有权单方面解除合同并要求双倍返还定金'."
      }
    ]
  },
  {
    "id": "rp-hsk5-advanced-24",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "genre": "Thư thương mại",
    "title": "关于调整报价及交期的协商函",
    "titlePinyin": "Guānyú tiáozhěng bàojià jí jiāoqī de xiéshānghán",
    "titleVi": "Thư thương lượng về việc điều chỉnh báo giá và thời hạn giao hàng",
    "contentZh": "尊敬的阮总：感谢贵公司三年来对我厂的大力支持。近期受国际铜价及海运燃油附加费持续上涨影响，我厂电机产品的综合生产成本上升了约百分之九。为维护双方的长期战略合作，我厂自行消化了部分涨幅，现恳请自下月一日起将单价微调百分之四。对于本月内已确认并支付定金的订单，我厂承诺依然严格按原价执行，绝不加价。同时，因旺季订单饱和，新订单交期将由十五天调整为二十天。盼望得到您的理解与支持！",
    "contentPinyin": "Zūnjìng de Ruǎn zǒng: gǎnxiè guì gōngsī sān nián lái duì wǒ chǎng de dàlì zhīchí. Jìnqī shòu guójì tóngjià jí hǎiyùn rányóu fùjiāfèi chíxù shàngzhǎng yǐngxiǎng, wǒ chǎng diànjī chǎnpǐn de zōnghé shēngchǎn chéngběn shàngshēng le yuē bǎifēn zhī jiǔ. Wèi wéihù shuāngfāng de chángqī zhànlüè hézuò, wǒ chǎng zìxíng xiāohuà le bùfen zhǎngfú, xiàn kěnqǐng zì xià yuè yī rì qǐ jiāng dānjià wēitiáo bǎifēn zhī sì. Duìyú běn yuè nèi yǐ quèrèn bìng zhīfù dìngjīn de dìngdān, wǒ chǎng chéngnuò yīrán yángé àn yuánjià zhíxíng, jué bù jiājià. Tóngshí, yīn wàngjì dìngdān bǎohé, xīn dìngdān jiāoqī jiāng yóu shíwǔ tiān tiáozhěng wéi èrshí tiān. Pànwàng dédào nín de lǐjiě yǔ zhīchí!",
    "contentVi": "Kính gửi Giám đốc Nguyễn: Cảm ơn sự ủng hộ mạnh mẽ của quý công ty dành cho nhà máy chúng tôi suốt 3 năm qua. Gần đây chịu ảnh hưởng từ giá đồng quốc tế và phụ phí nhiên liệu đường biển liên tục tăng, chi phí sản xuất tổng hợp sản phẩm động cơ điện của nhà máy tăng khoảng 9%. Để duy trì hợp tác chiến lược lâu dài giữa hai bên, nhà máy tự gánh chịu một phần mức tăng và kính mong từ ngày mùng 1 tháng sau điều chỉnh tăng nhẹ đơn giá 4%. Đối với các đơn hàng đã xác nhận và thanh toán cọc trong tháng này, nhà máy cam kết vẫn thực hiện nghiêm ngặt theo giá cũ, tuyệt đối không tăng giá. Đồng thời, do đơn hàng mùa cao điểm đã kín lịch, thời gian giao hàng của đơn mới sẽ điều chỉnh từ 15 ngày lên 20 ngày. Rất mong nhận được sự thông cảm và ủng hộ của ngài!",
    "questions": [
      {
        "id": "rp-hsk5-advanced-24-q1",
        "questionVi": "Nguyên nhân nào khiến chi phí sản xuất động cơ điện của nhà máy tăng khoảng 9%?",
        "options": [
          "Tiền thuê mặt bằng tăng gấp đôi",
          "Nhà máy chuyển địa điểm sang nước khác",
          "Thay đổi giám đốc điều hành",
          "Giá đồng quốc tế và phụ phí nhiên liệu đường biển liên tục tăng"
        ],
        "correctAnswer": "Giá đồng quốc tế và phụ phí nhiên liệu đường biển liên tục tăng",
        "explanationVi": "'受国际铜价及海运燃油附加费持续上涨影响'."
      },
      {
        "id": "rp-hsk5-advanced-24-q2",
        "questionVi": "Nhà máy đề nghị điều chỉnh tăng đơn giá bao nhiêu phần trăm từ ngày mùng 1 tháng sau?",
        "options": [
          "4% (nhà máy tự gánh chịu phần tăng còn lại)",
          "9%",
          "15%",
          "20%"
        ],
        "correctAnswer": "4% (nhà máy tự gánh chịu phần tăng còn lại)",
        "explanationVi": "'恳请自下月一日起将单价微调百分之四'."
      },
      {
        "id": "rp-hsk5-advanced-24-q3",
        "questionVi": "Đối với các đơn hàng đã xác nhận và đặt cọc trong tháng này, nhà máy xử lý thế nào?",
        "options": [
          "Bắt buộc phải cộng thêm 4% giá mới",
          "Cam kết thực hiện đúng theo giá cũ, tuyệt đối không tăng giá",
          "Hủy toàn bộ đơn hàng",
          "Hoàn lại tiền cọc"
        ],
        "correctAnswer": "Cam kết thực hiện đúng theo giá cũ, tuyệt đối không tăng giá",
        "explanationVi": "'承诺依然严格按原价执行，绝不加价'."
      },
      {
        "id": "rp-hsk5-advanced-24-q4",
        "questionVi": "Thời gian giao hàng đối với các đơn hàng mới sẽ thay đổi như thế nào?",
        "options": [
          "Giảm từ 20 ngày xuống 10 ngày",
          "Tăng lên 60 ngày",
          "Tăng từ 15 ngày lên 20 ngày do mùa cao điểm kín lịch",
          "Không thay đổi"
        ],
        "correctAnswer": "Tăng từ 15 ngày lên 20 ngày do mùa cao điểm kín lịch",
        "explanationVi": "'新订单交期将由十五天调整为二十天'."
      },
      {
        "id": "rp-hsk5-advanced-24-q5",
        "questionVi": "Hai công ty đã hợp tác với nhau được bao lâu?",
        "options": [
          "1 năm",
          "10 năm",
          "6 tháng",
          "3 năm"
        ],
        "correctAnswer": "3 năm",
        "explanationVi": "'感谢贵公司三年来对我厂的大力支持'."
      }
    ]
  },
  {
    "id": "rp-hsk6-basic-25",
    "level": "HSK6",
    "subDifficulty": "basic",
    "genre": "Bình luận Văn hóa",
    "title": "博物馆“热”背后的文化自信",
    "titlePinyin": "Bówùguǎn “rè” bèihòu de wénhuà zìxìn",
    "titleVi": "Sự tự tin văn hóa đằng sau cơn sốt 'đi Bảo tàng'",
    "contentZh": "曾几何时，博物馆在许多人眼中只是枯燥陈旧的文物陈列室，门可罗雀。然而近几年，每逢节假日，从北京故宫、陕西历史博物馆到各地的考古遗址公园，门票几乎一票难求，年轻游客更是成了打卡主力军。这股“博物馆热”的兴起，一方面得益于策展理念的革新——全息投影、互动沉浸式剧场以及兼具趣味与审美的文创雪糕、青铜器盲盒，让沉睡千年的文物“活”了起来；另一方面，更深层地反映出在物质丰裕之后，当代青年渴望追本溯源，在中华文明绵延数千年的脉络中寻找精神归属与审美共鸣。",
    "contentPinyin": "Céngjǐhéshí, bówùguǎn zài xǔduō rén yǎnzhōng zhǐshì kūzào chénjiù de wénwù chénlièshì, ménkěluóquè. Rán'ér jìn jǐ nián, měiféng jiéjiàrì, cóng Běijīng Gùgōng, Shǎnxī Lìshǐ Bówùguǎn dào gèdì de kǎogǔ yízhǐ gōngyuán, ménpiào jīhū yípiàonánqiú, niánqīng yóukè gèng shì chéng le dǎkǎ zhǔlìjūn. Zhè gǔ “bówùguǎn rè” de xīngqǐ, yì fāngmiàn déyì yú cèzhǎn lǐniàn de géxīn — quánxī tóuyǐng, hùdòng chénjìnshì jùchǎng yǐjí jiānjù qùwèi yǔ shěnměi de wénchuàng xuěgāo, qīngtóngqì mánghé, ràng chénshuì qiānnián de wénwù “huó” le qǐlái; lìng yì fāngmiàn, gèng shēncéng de fǎnyìng chū zài wùzhì fēngyù zhīhòu, dāngdài qīngnián kěwàng zhuīběnsùyuán, zài Zhōnghuá wénmíng miányán shùqiān nián de màiluò zhōng xúnzhǎo jīngshén guīshǔ yǔ shěnměi gòngmíng.",
    "contentVi": "Đã có thời, bảo tàng trong mắt nhiều người chỉ là phòng trưng bày văn vật khô khan cũ kỹ, vắng vẻ đìu hiu. Thế nhưng mấy năm gần đây, cứ mỗi dịp lễ Tết, từ Cố Cung Bắc Kinh, Bảo tàng Lịch sử Thiểm Tây đến các công viên di chỉ khảo cổ khắp nơi, vé vào cửa gần như rất khó săn được, du khách trẻ lại càng trở thành lực lượng chủ lực. Sự trỗi dậy của cơn sốt 'đi bảo tàng' này một mặt nhờ sự đổi mới tư duy giám tuyển — công nghệ chiếu ba chiều hologram, nhà hát tương tác nhập vai cùng kem văn sáng, hộp mù đồ đồng thanh vừa thú vị vừa thẩm mỹ đã làm các văn vật ngủ yên ngàn năm 'sống dậy'; mặt khác, ở tầng sâu hơn, nó phản ánh sau khi vật chất đã dư dả, thanh niên đương đại khao khát tìm về cội nguồn, tìm kiếm nơi nương tựa tinh thần và sự cộng hưởng thẩm mỹ trong mạch nguồn kéo dài hàng ngàn năm của văn minh Trung Hoa.",
    "questions": [
      {
        "id": "rp-hsk6-basic-25-q1",
        "questionVi": "Thành ngữ '门可罗雀' (ménkěluóquè) ở câu đầu mô tả tình trạng nào của bảo tàng trước đây?",
        "options": [
          "Vắng vẻ đìu hiu, rất ít khách ghé thăm",
          "Đông đúc chật kín người",
          "Có rất nhiều chim chóc trong sân",
          "Giá vé đắt đỏ"
        ],
        "correctAnswer": "Vắng vẻ đìu hiu, rất ít khách ghé thăm",
        "explanationVi": "门可罗雀 nghĩa là trước cửa có thể giăng lưới bắt chim sẻ -> cực kỳ vắng vẻ."
      },
      {
        "id": "rp-hsk6-basic-25-q2",
        "questionVi": "Ai hiện đang là lực lượng chủ lực trong cơn sốt tham quan bảo tàng những năm gần đây?",
        "options": [
          "Chỉ có các nhà khảo cổ học",
          "Du khách trẻ tuổi (年轻游客)",
          "Chỉ có khách du lịch châu Âu",
          "Chỉ có học sinh tiểu học"
        ],
        "correctAnswer": "Du khách trẻ tuổi (年轻游客)",
        "explanationVi": "'年轻游客更是成了打卡主力军'."
      },
      {
        "id": "rp-hsk6-basic-25-q3",
        "questionVi": "Những đổi mới nào trong tư duy giám tuyển đã giúp các văn vật ngàn năm 'sống dậy'?",
        "options": [
          "Cấm chụp ảnh và tắt hết đèn trong bảo tàng",
          "Bán đấu giá toàn bộ văn vật cổ",
          "Chiếu 3D hologram, nhà hát tương tác nhập vai và sản phẩm văn sáng (kem, hộp mù)",
          "Thu hẹp diện tích phòng trưng bày"
        ],
        "correctAnswer": "Chiếu 3D hologram, nhà hát tương tác nhập vai và sản phẩm văn sáng (kem, hộp mù)",
        "explanationVi": "'全息投影、互动沉浸式剧场以及...文创雪糕、青铜器盲盒'."
      },
      {
        "id": "rp-hsk6-basic-25-q4",
        "questionVi": "Nguyên nhân sâu xa hơn khiến giới trẻ ngày càng yêu thích bảo tàng là gì?",
        "options": [
          "Vì bảo tàng là nơi duy nhất có điều hòa",
          "Vì trường học bắt buộc đi mỗi tuần",
          "Vì không còn rạp chiếu phim nào mở cửa",
          "Sau khi vật chất dư dả, họ muốn tìm về cội nguồn, tìm kiếm bản sắc tinh thần và sự cộng hưởng thẩm mỹ"
        ],
        "correctAnswer": "Sau khi vật chất dư dả, họ muốn tìm về cội nguồn, tìm kiếm bản sắc tinh thần và sự cộng hưởng thẩm mỹ",
        "explanationVi": "'当代青年渴望追本溯源，在中华文明...脉络中寻找精神归属与审美共鸣'."
      },
      {
        "id": "rp-hsk6-basic-25-q5",
        "questionVi": "Ý chính bao quát nhất của đoạn văn là gì?",
        "options": [
          "Phân tích hiện tượng 'cơn sốt bảo tàng' cùng hai nguyên nhân từ đổi mới công nghệ trưng bày và nhu cầu tinh thần của giới trẻ",
          "Hướng dẫn cách đặt vé Cố Cung Bắc Kinh",
          "So sánh giá kem văn sáng ở các bảo tàng",
          "Giới thiệu lịch sử đồ đồng thanh"
        ],
        "correctAnswer": "Phân tích hiện tượng 'cơn sốt bảo tàng' cùng hai nguyên nhân từ đổi mới công nghệ trưng bày và nhu cầu tinh thần của giới trẻ",
        "explanationVi": "Bài viết phân tích toàn diện hiện tượng và nguyên nhân hai mặt của '博物馆热'."
      }
    ]
  },
  {
    "id": "rp-hsk6-basic-26",
    "level": "HSK6",
    "subDifficulty": "basic",
    "genre": "Khoa học & Tâm lý",
    "title": "睡眠不足如何悄悄损害决策力",
    "titlePinyin": "Shuìmián bùzú rúhé qiāoqiāo sǔnhài juécèlì",
    "titleVi": "Thiếu ngủ âm thầm hủy hoại năng lực ra quyết định như thế nào",
    "contentZh": "许多职场精英常把“每天只睡五个小时”当作勤奋敬业的勋章，殊不知长期睡眠剥夺正在悄无声息地透支大脑的高级认知功能。神经科学实验表明，连续一周睡眠不足六小时的受试者，其大脑前额叶皮层活跃度显著下降，在风险评估测试中表现得如同轻度醉酒者——不仅更容易冲动冒险，而且高估自己的判断准确率。令人担忧的是，受试者主观上往往感觉自己“已经适应了少睡”，根本察觉不到认知能力的滑坡。因此，保证七至八小时的优质睡眠绝非懒惰，而是高效能人士最划算的认知投资。",
    "contentPinyin": "Xǔduō zhíchǎng jīngyīng cháng bǎ “měitiān zhǐ shuì wǔ gè xiǎoshí” dàngzuò qínfèn jìngyè de xūnzhāng, shūbùzhī chángqī shuìmián bōduó zhèngzài qiāowúshēngxī de tòuzhī dànǎo de gāojí rènzhī gōngnéng. Shénjīng kēxué shíyàn biǎomíng, liánxù yì zhōu shuìmián bùzú liù xiǎoshí de shòushìzhě, qí dànǎo qián'éyè pícéng huóyuèdù xiǎnzhù xiàjiàng, zài fēngxiǎn pínggū cèshì zhōng biǎoxiàn de rútóng qīngdù zuìjiǔzhě — bùjǐn gèng róngyì chōngdòng màoxiǎn, érqiě gāogū zìjǐ de pànduàn zhǔnquèlǜ. Lìngrén dānyōu de shì, shòushìzhě zhǔguān shàng wǎngwǎng gǎnjué zìjǐ “yǐjīng shìyìng le shǎoshuì”, gēnběn chájué búdào rènzhī nénglì de huápō. Yīncǐ, bǎozhèng qī zhì bā xiǎoshí de yōuzhì shuìmián juéfēi lǎnduò, ér shì gāoxiàonéng rénshì zuì huásuàn de rènzhī tóuzī.",
    "contentVi": "Nhiều nhân sự tinh anh nơi công sở thường coi 'mỗi ngày chỉ ngủ 5 tiếng' là tấm huân chương của sự cần cù tận tụy, đâu biết rằng việc thiếu ngủ kéo dài đang âm thầm vắt kiệt chức năng nhận thức bậc cao của não bộ. Thí nghiệm khoa học thần kinh chỉ ra rằng những người tham gia ngủ dưới 6 tiếng liên tục trong một tuần có độ hoạt động của vỏ não thùy trán trước giảm sút rõ rệt, trong bài kiểm tra đánh giá rủi ro họ biểu hiện giống hệt người say rượu nhẹ — không chỉ dễ liều lĩnh bốc đồng hơn mà còn đánh giá quá cao độ chính xác phán đoán của bản thân. Điều đáng lo ngại là về mặt chủ quan họ thường cảm thấy mình 'đã thích nghi với việc ngủ ít', hoàn toàn không nhận ra sự tụt dốc của năng lực nhận thức. Do đó, đảm bảo 7 đến 8 tiếng ngủ chất lượng tuyệt đối không phải lười biếng, mà là khoản đầu tư nhận thức hời nhất của người làm việc hiệu suất cao.",
    "questions": [
      {
        "id": "rp-hsk6-basic-26-q1",
        "questionVi": "Thí nghiệm khoa học thần kinh phát hiện điều gì ở người ngủ dưới 6 tiếng liên tục một tuần?",
        "options": [
          "Trí nhớ tăng gấp đôi",
          "Hoạt động vỏ não thùy trán trước giảm rõ rệt, đánh giá rủi ro giống người say rượu nhẹ",
          "Tốc độ phản xạ nhanh hơn vận động viên",
          "Không có bất kỳ thay đổi nào"
        ],
        "correctAnswer": "Hoạt động vỏ não thùy trán trước giảm rõ rệt, đánh giá rủi ro giống người say rượu nhẹ",
        "explanationVi": "'大脑前额叶皮层活跃度显著下降，在风险评估测试中表现得如同轻度醉酒者'."
      },
      {
        "id": "rp-hsk6-basic-26-q2",
        "questionVi": "Người thiếu ngủ thường mắc hai sai lầm nào khi ra quyết định?",
        "options": [
          "Quá thận trọng đến mức không làm gì",
          "Quên tên của chính mình",
          "Dễ liều lĩnh bốc đồng hơn và đánh giá quá cao độ chính xác phán đoán của bản thân",
          "Chỉ thích làm việc nhóm"
        ],
        "correctAnswer": "Dễ liều lĩnh bốc đồng hơn và đánh giá quá cao độ chính xác phán đoán của bản thân",
        "explanationVi": "'不仅更容易冲动冒险，而且高估自己的判断准确率'."
      },
      {
        "id": "rp-hsk6-basic-26-q3",
        "questionVi": "Điểm đáng lo ngại nhất ở những người thiếu ngủ kéo dài là gì?",
        "options": [
          "Họ luôn kêu ca buồn ngủ trước mặt sếp",
          "Họ không thể uống cà phê được nữa",
          "Họ ngủ gật 12 tiếng mỗi ngày",
          "Họ chủ quan tưởng mình đã thích nghi với việc ngủ ít và không nhận ra nhận thức đang tụt dốc"
        ],
        "correctAnswer": "Họ chủ quan tưởng mình đã thích nghi với việc ngủ ít và không nhận ra nhận thức đang tụt dốc",
        "explanationVi": "'主观上往往感觉自己“已经适应了少睡”，根本察觉不到认知能力的滑坡'."
      },
      {
        "id": "rp-hsk6-basic-26-q4",
        "questionVi": "Tác giả coi việc ngủ đủ 7–8 tiếng mỗi ngày là gì?",
        "options": [
          "Khoản đầu tư nhận thức hời nhất của người làm việc hiệu suất cao",
          "Biểu hiện của sự lười biếng",
          "Sự lãng phí thời gian tuổi trẻ",
          "Chỉ cần thiết cho trẻ em"
        ],
        "correctAnswer": "Khoản đầu tư nhận thức hời nhất của người làm việc hiệu suất cao",
        "explanationVi": "'是高效能人士最划算的认知投资'."
      },
      {
        "id": "rp-hsk6-basic-26-q5",
        "questionVi": "Cụm từ '殊不知' (shūbùzhī) trong câu đầu mang sắc thái ngữ nghĩa nào?",
        "options": [
          "Đồng nghĩa với 'chắc chắn là'",
          "Chuyển ý mạnh: 'nào ngờ đâu / đâu biết rằng'",
          "Chỉ thời gian trong tương lai",
          "Dùng để liệt kê ví dụ"
        ],
        "correctAnswer": "Chuyển ý mạnh: 'nào ngờ đâu / đâu biết rằng'",
        "explanationVi": "殊不知 là từ chuyển ý cao cấp HSK 6, nghĩa là 'nào ngờ đâu, đâu hay biết rằng'."
      }
    ]
  },
  {
    "id": "rp-hsk6-advanced-27",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "genre": "Bản tin Kinh tế",
    "title": "RCEP红利下的中越产业链协同升级",
    "titlePinyin": "RCEP hónglì xià de Zhōng-Yuè chǎnyèliàn xiétóng shēngjí",
    "titleVi": "Sự nâng cấp hiệp đồng chuỗi công nghiệp Trung – Việt dưới lợi tức RCEP",
    "contentZh": "自《区域全面经济伙伴关系协定》（RCEP）正式实施以来，中越双边经贸合作迈入了以制度型开放和产业链深度融合为特征的新阶段。过去，两国贸易多集中于初级农产品与传统纺织品；如今，在关税递减与原产地累积规则的强力驱动下，光伏组件、消费电子零部件、新能源电池材料等高附加值中间品成为双边贸易的新引擎。与此同时，中越边境智慧口岸的投入运营与跨境铁路班列的加密，将电子元器件从珠三角工厂运抵越南北方工业园区的门到门时效压缩至二十四小时以内，真正实现了跨国界的“同城化”供应链协同。",
    "contentPinyin": "Zì Qūyù Quánmiàn Jīngjì Huǒbàn Guānxi Xiédìng (RCEP) zhèngshì shíshī yǐlái, Zhōng-Yuè shuāngbiān jīngmào hézuò màirù le yǐ zhìdùxíng kāifàng hé chǎnyèliàn shēndù rónghé wéi tèzhēng de xīn jiēduàn. Guòqù, liǎng guó màoyì duō jízhōng yú chūjí nóngchǎnpǐn yǔ chuántǒng fǎngzhīpǐn; rújīn, zài guānshuì dìjiǎn yǔ yuánchǎndì lěijī guīzé de qiánglì qūdòng xià, guāngfú zǔjiàn, xiāofèi diànzǐ língbùjiàn, xīn néngyuán diànchí cáiliào děng gāo fùjiāzhí zhōngjiānpǐn chéngwéi shuāngbiān màoyì de xīn yǐnqíng. Yǔcǐtóngshí, Zhōng-Yuè biānjìng zhìhuì kǒu'àn de tóurù yùnyíng yǔ kuàjìng tiělù bānliè de jiāmì, jiāng diànzǐ yuánqìjiàn cóng Zhūsānjiǎo gōngchǎng yùndǐ Yuènán běifāng gōngyè yuánqū de méndàomén shíxiào yāsuō zhì èrshísì xiǎoshí yǐnèi, zhēnzhèng shíxiàn le kuà guójiè de “tóngchénghuà” gōngyìngliàn xiétóng.",
    "contentVi": "Kể từ khi Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) chính thức có hiệu lực, hợp tác kinh tế thương mại song phương Trung - Việt đã bước vào giai đoạn mới mang đặc trưng mở cửa thể chế và dung hợp sâu chuỗi công nghiệp. Trước đây, thương mại hai nước phần lớn tập trung vào nông sản sơ cấp và dệt may truyền thống; ngày nay, dưới động lực mạnh mẽ của lộ trình cắt giảm thuế quan và quy tắc cộng gộp xuất xứ, các mặt hàng trung gian giá trị gia tăng cao như tấm pin quang điện, linh kiện điện tử tiêu dùng, vật liệu pin năng lượng mới đã trở thành động cơ mới của thương mại song phương. Đồng thời, việc đưa vào vận hành cửa khẩu thông minh biên giới Trung - Việt và tăng tần suất tàu liên vận xuyên biên giới đã rút ngắn thời gian giao hàng tận nơi (door-to-door) của linh kiện điện tử từ nhà máy đồng bằng Châu Giang đến các khu công nghiệp miền Bắc Việt Nam xuống dưới 24 giờ, thực sự hiện thực hóa sự hiệp đồng chuỗi cung ứng xuyên biên giới như 'trong cùng một thành phố'.",
    "questions": [
      {
        "id": "rp-hsk6-advanced-27-q1",
        "questionVi": "Trước đây, cơ cấu thương mại song phương Trung - Việt chủ yếu tập trung vào nhóm hàng nào?",
        "options": [
          "Tàu vũ trụ và máy bay",
          "Phần mềm lượng tử",
          "Nông sản sơ cấp và dệt may truyền thống",
          "Dầu thô và kim cương"
        ],
        "correctAnswer": "Nông sản sơ cấp và dệt may truyền thống",
        "explanationVi": "'过去，两国贸易多集中于初级农产品与传统纺织品'."
      },
      {
        "id": "rp-hsk6-advanced-27-q2",
        "questionVi": "Nhóm mặt hàng nào đã trở thành 'động cơ mới' của thương mại song phương dưới tác động của RCEP?",
        "options": [
          "Gạo và muối thô",
          "Đồ gỗ thủ công",
          "Giấy viết tay",
          "Hàng trung gian giá trị gia tăng cao (tấm quang điện, linh kiện điện tử, vật liệu pin năng lượng mới)"
        ],
        "correctAnswer": "Hàng trung gian giá trị gia tăng cao (tấm quang điện, linh kiện điện tử, vật liệu pin năng lượng mới)",
        "explanationVi": "'光伏组件、消费电子零部件、新能源电池材料等高附加值中间品成为双边贸易的新引擎'."
      },
      {
        "id": "rp-hsk6-advanced-27-q3",
        "questionVi": "Hai yếu tố hạ tầng nào giúp rút ngắn mạnh thời gian vận chuyển linh kiện điện tử sang miền Bắc Việt Nam?",
        "options": [
          "Vận hành cửa khẩu thông minh biên giới và tăng tần suất tàu đường sắt liên vận xuyên biên giới",
          "Xây thêm 10 sân bay mới ở biên giới",
          "Vận chuyển bằng xe đạp",
          "Bỏ hoàn toàn kiểm tra hải quan"
        ],
        "correctAnswer": "Vận hành cửa khẩu thông minh biên giới và tăng tần suất tàu đường sắt liên vận xuyên biên giới",
        "explanationVi": "'中越边境智慧口岸的投入运营与跨境铁路班列的加密'."
      },
      {
        "id": "rp-hsk6-advanced-27-q4",
        "questionVi": "Thời gian vận chuyển tận nơi linh kiện từ đồng bằng Châu Giang đến KCN miền Bắc Việt Nam hiện được nén xuống bao lâu?",
        "options": [
          "15 ngày",
          "Dưới 24 giờ (trong vòng 1 ngày)",
          "1 tuần",
          "3 tháng"
        ],
        "correctAnswer": "Dưới 24 giờ (trong vòng 1 ngày)",
        "explanationVi": "'门到门时效压缩至二十四小时以内'."
      },
      {
        "id": "rp-hsk6-advanced-27-q5",
        "questionVi": "Cụm từ '同城化供应链协同' (hiệp đồng chuỗi cung ứng như trong cùng một thành phố) nhấn mạnh điều gì?",
        "options": [
          "Hai nước gộp chung thành một thành phố",
          "Ngừng vận chuyển hàng hóa qua biên giới",
          "Tốc độ kết nối và phối hợp sản xuất xuyên biên giới nhanh chóng, liền mạch như nằm trong cùng một đô thị",
          "Chỉ bán hàng trong phạm vi 5 km"
        ],
        "correctAnswer": "Tốc độ kết nối và phối hợp sản xuất xuyên biên giới nhanh chóng, liền mạch như nằm trong cùng một đô thị",
        "explanationVi": "Thời gian vận chuyển dưới 24 giờ giúp các nhà máy ở hai nước phối hợp mượt mà như ở cùng thành phố."
      }
    ]
  },
  {
    "id": "rp-hsk6-advanced-28",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "genre": "Pháp lý Thương mại",
    "title": "企业出海如何筑牢知识产权防火墙",
    "titlePinyin": "Qǐyè chūhǎi rúhé zhùláo zhīshi chǎnquán fánghuǒqiáng",
    "titleVi": "Doanh nghiệp vươn ra toàn cầu xây tường lửa Sở hữu trí tuệ như thế nào",
    "contentZh": "许多出口型制造企业在海外市场辛辛苦苦打开销路后，却突然收到当地律师函，被告知自己的品牌商标已被他人抢注，甚至面临货物在海关被扣押的尴尬境地。知识产权律师提醒，商标与专利保护具有严格的地域性原则——在中国注册的商标并不会自动在越南或欧美生效。因此，企业在产品正式出海之前，务必坚持“市场未动，商标先行”的原则，通过马德里国际商标体系或目标国单一申请完成前瞻性布局，并建立定期的海外侵权监测机制，方能避免为他人做嫁衣。",
    "contentPinyin": "Xǔduō chūkǒuxíng zhìzào qǐyè zài hǎiwài shìchǎng xīnxīnkǔkǔ dǎkāi xiāolù hòu, què tūrán shōudào dāngdì lǜshīhán, bèi gàozhī zìjǐ de pǐnpái shāngbiāo yǐ bèi tārén qiǎngzhù, shènzhì miànlín huòwù zài hǎiguān bèi kòuyā de gāngà jìngdì. Zhīshi chǎnquán lǜshī tíxǐng, shāngbiāo yǔ zhuānlì bǎohù jùyǒu yángé de dìyùxìng yuánzé — zài Zhōngguó zhùcè de shāngbiāo bìng búhuì zìdòng zài Yuènán huò Ōu-Měi shēngxiào. Yīncǐ, qǐyè zài chǎnpǐn zhèngshì chūhǎi zhīqián, wùbì jiānchí “shìchǎng wèi dòng, shāngbiāo xiānxíng” de yuánzé, tōngguò Mǎdélǐ guójì shāngbiāo tǐxì huò mùbiāoguó dānyī shēnqǐng wánchéng qiánzhānxìng bùjú, bìng jiànlì dìngqī de hǎiwài qīnquán jiāncè jīzhì, fāng néng bìmiǎn wèi tārén zuò jiàyī.",
    "contentVi": "Nhiều doanh nghiệp chế tạo hướng xuất khẩu sau khi vất vả mở được đầu ra tại thị trường nước ngoài lại bất ngờ nhận được thư luật sư địa phương thông báo nhãn hiệu của mình đã bị người khác đăng ký chiếm trước, thậm chí đối mặt với tình cảnh trớ trêu là hàng hóa bị giữ tại hải quan. Luật sư sở hữu trí tuệ nhắc nhở rằng bảo hộ nhãn hiệu và bằng sáng chế có tính nguyên tắc lãnh thổ nghiêm ngặt — nhãn hiệu đăng ký tại Trung Quốc sẽ không tự động có hiệu lực tại Việt Nam hay Âu Mỹ. Do đó, trước khi sản phẩm chính thức vươn ra nước ngoài, doanh nghiệp nhất định phải kiên trì nguyên tắc 'thị trường chưa động, nhãn hiệu đi trước', hoàn thành bố trí tầm nhìn xa thông qua Hệ thống nhãn hiệu quốc tế Madrid hoặc nộp đơn trực tiếp tại nước mục tiêu, đồng thời thiết lập cơ chế giám sát xâm phạm định kỳ ở nước ngoài mới tránh được cảnh làm áo cưới cho người khác (công cốc).",
    "questions": [
      {
        "id": "rp-hsk6-advanced-28-q1",
        "questionVi": "Rủi ro pháp lý nào thường ập đến với các doanh nghiệp xuất khẩu sau khi đã mở được thị trường nước ngoài?",
        "options": [
          "Không tìm được tàu vận chuyển",
          "Khách hàng không biết đọc chữ",
          "Ngân hàng đóng cửa",
          "Nhãn hiệu bị người khác đăng ký chiếm trước và hàng hóa có nguy cơ bị hải quan giữ lại"
        ],
        "correctAnswer": "Nhãn hiệu bị người khác đăng ký chiếm trước và hàng hóa có nguy cơ bị hải quan giữ lại",
        "explanationVi": "'品牌商标已被他人抢注，甚至面临货物在海关被扣押'."
      },
      {
        "id": "rp-hsk6-advanced-28-q2",
        "questionVi": "Nguyên tắc 'tính lãnh thổ (地域性原则)' trong bảo hộ sở hữu trí tuệ có nghĩa là gì?",
        "options": [
          "Nhãn hiệu đăng ký ở nước này không tự động có hiệu lực bảo hộ ở nước khác",
          "Chỉ có thủ đô mới được đăng ký nhãn hiệu",
          "Nhãn hiệu có hiệu lực vĩnh viễn trên toàn cầu chỉ sau 1 lần nộp đơn nội địa",
          "Chỉ áp dụng cho nông sản"
        ],
        "correctAnswer": "Nhãn hiệu đăng ký ở nước này không tự động có hiệu lực bảo hộ ở nước khác",
        "explanationVi": "'在中国注册的商标并不会自动在越南或欧美生效'."
      },
      {
        "id": "rp-hsk6-advanced-28-q3",
        "questionVi": "Nguyên tắc vàng '市场未动，商标先行' khuyên doanh nghiệp làm gì?",
        "options": [
          "Bán hàng 5 năm rồi mới tính đến chuyện đăng ký nhãn hiệu",
          "Đăng ký bảo hộ nhãn hiệu tại thị trường mục tiêu trước khi chính thức đưa sản phẩm ra nước ngoài",
          "Không cần dùng nhãn hiệu khi xuất khẩu",
          "Dùng chung nhãn hiệu với đối thủ"
        ],
        "correctAnswer": "Đăng ký bảo hộ nhãn hiệu tại thị trường mục tiêu trước khi chính thức đưa sản phẩm ra nước ngoài",
        "explanationVi": "'在产品正式出海之前，务必坚持“市场未动，商标先行”的原则'."
      },
      {
        "id": "rp-hsk6-advanced-28-q4",
        "questionVi": "Doanh nghiệp có thể đăng ký nhãn hiệu quốc tế qua hai con đường nào được nêu trong bài?",
        "options": [
          "Đăng bài lên mạng xã hội",
          "Gửi email cho hải quan",
          "Hệ thống nhãn hiệu quốc tế Madrid hoặc nộp đơn trực tiếp tại quốc gia mục tiêu",
          "In lên bao bì sản phẩm"
        ],
        "correctAnswer": "Hệ thống nhãn hiệu quốc tế Madrid hoặc nộp đơn trực tiếp tại quốc gia mục tiêu",
        "explanationVi": "'通过马德里国际商标体系或目标国单一申请'."
      },
      {
        "id": "rp-hsk6-advanced-28-q5",
        "questionVi": "Thành ngữ '为他人做嫁衣' (làm áo cưới cho người khác) ở cuối bài ám chỉ điều gì?",
        "options": [
          "Chuyển sang kinh doanh váy cưới",
          "Tặng quà cho đối tác",
          "Hợp tác cùng có lợi",
          "Mình vất vả xây dựng thương hiệu nhưng cuối cùng kẻ khác lại hưởng lợi"
        ],
        "correctAnswer": "Mình vất vả xây dựng thương hiệu nhưng cuối cùng kẻ khác lại hưởng lợi",
        "explanationVi": "为他人做嫁衣 là thành ngữ chỉ cảnh mình bỏ công sức nhưng người khác lại chiếm lấy thành quả."
      }
    ]
  },
  {
    "id": "rp-hsk7-basic-29",
    "level": "HSK7",
    "subDifficulty": "basic",
    "genre": "Bình luận Kinh tế Xanh",
    "title": "循环经济与“无废城市”的治理实践",
    "titlePinyin": "Xúnhuán jīngjì yǔ “wúfèi chéngshì” de zhìlǐ shíjiàn",
    "titleVi": "Kinh tế tuần hoàn và thực tiễn quản trị 'Thành phố không rác thải'",
    "contentZh": "传统工业文明长期遵循“资源—产品—废弃物”的线性消耗模式，这种高开采、低利用、高排放的路径已逼近地球生态承载力的极限。在此背景下，“无废城市”建设应运而生。需要厘清的是，“无废”并非指城市完全不产生任何固体废物，而是通过推动形成绿色生产与生活方式，最大限度地实现固废源头减量与资源化循环利用。例如，建筑垃圾经智能分选破碎后可转化为环保再生砖；退役的新能源汽车动力电池经梯次利用后可转为储能电站备用电源。当曾经被视为负担的废弃物重新回归产业链闭环，城市治理便实现了生态效益与经济效益的双重跃升。",
    "contentPinyin": "Chuántǒng gōngyè wénmíng chángqī zūnxún “zīyuán—chǎnpǐn—fèiqìwù” de xiànxìng xiāohào móshì, zhè zhǒng gāo kāicǎi, dī lìyòng, gāo páifàng de lùjìng yǐ bījìn dìqiú shēngtài chéngzàilì de jíxiàn. Zài cǐ bèijǐng xià, “wúfèi chéngshì” jiànshè yìngyùn'érshēng. Xūyào líqīng de shì, “wúfèi” bìngfēi zhǐ chéngshì wánquán bù chǎnshēng rènhé gùtǐ fèiwù, ér shì tōngguò tuīdòng xíngchéng lǜsè shēngchǎn yǔ shēnghuó fāngshì, zuìdà xiàndù de shíxiàn gùfèi yuántóu jiǎnliàng yǔ zīyuánhuà xúnhuán lìyòng. Lìrú, jiànzhù lājī jīng zhìnéng fēnxuǎn pòsuì hòu kě zhuǎnhuà wéi huánbǎo zàishēngzhuān; tuìyì de xīn néngyuán qìchē dònglì diànchí jīng tīcì lìyòng hòu kě zhuǎnwéi chǔnéng diànzhàn bèiyòng diànyuán. Dāng céngjīng bèi shìwéi fùdān de fèiqìwù chóngxīn huíguī chǎnyèliàn bìhuán, chéngshì zhìlǐ biàn shíxiàn le shēngtài xiàoyì yǔ jīngjì xiàoyì de shuāngchóng yuèshēng.",
    "contentVi": "Nền văn minh công nghiệp truyền thống lâu nay tuân theo mô hình tiêu thụ tuyến tính 'Tài nguyên — Sản phẩm — Chất thải', con đường khai thác cao, sử dụng thấp, phát thải cao này đã tiến sát giới hạn sức chịu tải sinh thái của Trái Đất. Trong bối cảnh đó, việc xây dựng 'Thành phố không rác thải' đã ra đời. Cần làm rõ rằng 'không rác thải' không có nghĩa là thành phố hoàn toàn không phát sinh bất kỳ chất thải rắn nào, mà là thông qua thúc đẩy lối sản xuất và sinh hoạt xanh để tối đa hóa việc giảm lượng rác từ nguồn và tái chế tuần hoàn thành tài nguyên. Ví dụ, phế thải xây dựng sau khi phân loại nghiền thông minh có thể biến thành gạch tái chế thân thiện môi trường; pin xe điện hết hạn dùng cho ô tô sau khi tận dụng phân bậc có thể chuyển thành nguồn điện dự phòng cho trạm lưu trữ năng lượng. Khi những phế thải từng bị coi là gánh nặng quay trở lại vòng khép kín của chuỗi công nghiệp, quản trị đô thị đã đạt được bước nhảy vọt kép cả về hiệu quả sinh thái lẫn hiệu quả kinh tế.",
    "questions": [
      {
        "id": "rp-hsk7-basic-29-q1",
        "questionVi": "Mô hình tiêu thụ tuyến tính của nền văn minh công nghiệp truyền thống có đặc điểm gì?",
        "options": [
          "Tài nguyên — Sản phẩm — Chất thải (khai thác cao, sử dụng thấp, phát thải cao)",
          "Tuần hoàn khép kín không phát thải",
          "Chỉ sử dụng năng lượng mặt trời",
          "Không khai thác tài nguyên thiên nhiên"
        ],
        "correctAnswer": "Tài nguyên — Sản phẩm — Chất thải (khai thác cao, sử dụng thấp, phát thải cao)",
        "explanationVi": "'遵循“资源—产品—废弃物”的线性消耗模式，这种高开采、低利用、高排放的路径'."
      },
      {
        "id": "rp-hsk7-basic-29-q2",
        "questionVi": "Khái niệm 'Thành phố không rác thải (无废城市)' cần được hiểu đúng như thế nào?",
        "options": [
          "Cấm người dân vứt bất kỳ mảnh giấy nào",
          "Giảm thiểu tối đa chất thải rắn từ nguồn và tái chế tuần hoàn thành tài nguyên, chứ không phải hoàn toàn không có rác",
          "Đem toàn bộ rác chở ra ngoài đại dương",
          "Đóng cửa tất cả các nhà máy trong thành phố"
        ],
        "correctAnswer": "Giảm thiểu tối đa chất thải rắn từ nguồn và tái chế tuần hoàn thành tài nguyên, chứ không phải hoàn toàn không có rác",
        "explanationVi": "'并非指城市完全不产生任何固体废物，而是...最大限度地实现固废源头减量与资源化循环利用'."
      },
      {
        "id": "rp-hsk7-basic-29-q3",
        "questionVi": "Phế thải xây dựng trong mô hình kinh tế tuần hoàn có thể được tái chế thành gì?",
        "options": [
          "Nhiên liệu máy bay",
          "Thực phẩm đóng hộp",
          "Gạch tái chế thân thiện môi trường (环保再生砖)",
          "Vải sợi tổng hợp"
        ],
        "correctAnswer": "Gạch tái chế thân thiện môi trường (环保再生砖)",
        "explanationVi": "'建筑垃圾经智能分选破碎后可转化为环保再生砖'."
      },
      {
        "id": "rp-hsk7-basic-29-q4",
        "questionVi": "Pin động lực của xe năng lượng mới sau khi hết hạn dùng cho xe (退役) có thể tận dụng vào việc gì?",
        "options": [
          "Chôn lấp trực tiếp xuống đất",
          "Đốt để lấy nhiệt",
          "Không thể tái sử dụng được nữa",
          "Làm nguồn điện dự phòng cho trạm lưu trữ năng lượng (储能电站备用电源)"
        ],
        "correctAnswer": "Làm nguồn điện dự phòng cho trạm lưu trữ năng lượng (储能电站备用电源)",
        "explanationVi": "'经梯次利用后可转为储能电站备用电源'."
      },
      {
        "id": "rp-hsk7-basic-29-q5",
        "questionVi": "Ý nghĩa lớn nhất khi chất thải quay trở lại vòng khép kín chuỗi công nghiệp là gì?",
        "options": [
          "Đạt được bước nhảy vọt kép cả về hiệu quả sinh thái lẫn hiệu quả kinh tế",
          "Làm tăng chi phí xử lý rác lên gấp 5 lần",
          "Giảm số lượng việc làm trong đô thị",
          "Chỉ mang lại lợi ích tuyên truyền"
        ],
        "correctAnswer": "Đạt được bước nhảy vọt kép cả về hiệu quả sinh thái lẫn hiệu quả kinh tế",
        "explanationVi": "'实现了生态效益与经济效益的双重跃升'."
      }
    ]
  },
  {
    "id": "rp-hsk7-advanced-30",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "genre": "Nghiên cứu Học thuật",
    "title": "数字货币与跨境支付清算体系的重塑",
    "titlePinyin": "Shùzì huòbì yǔ kuàjìng zhīfù qīngsuàn tǐxì de chóngsù",
    "titleVi": "Tiền kỹ thuật số và sự tái định hình hệ thống thanh toán bù trừ xuyên biên giới",
    "contentZh": "长期以来，传统跨境汇款高度依赖代理行网络与SWIFT报文系统，一笔跨国贸易款项往往需经三至四家中转银行层层清算，不仅耗时二至五个工作日、手续费高昂，且受制于不同时区节假日与汇率点差损耗。近年来，多边央行数字货币桥（mBridge）等前沿金融基础设施试验取得了突破性进展。依托分布式账本技术，参与国商业银行可在同一底层账本上实现央行数字货币的点对点实时同步交收（PvP），将原本数天的跨境结算压缩至数秒，综合交易成本降低百分之五十以上。尽管在反洗钱合规协同、货币主权边界与隐私保护方面仍待国际规则进一步完善，但其重塑全球金融基础设施的潜力已毋庸置疑。",
    "contentPinyin": "Chángqī yǐlái, chuántǒng kuàjìng huìkuǎn gāodù yīlài dàilǐháng wǎngluò yǔ SWIFT bàowén xìtǒng, yì bǐ kuàguó màoyì kuǎnxiàng wǎngwǎng xū jīng sān zhì sì jiā zhōngzhuǎn yínháng céngcéng qīngsuàn, bùjǐn hàoshí èr zhì wǔ gè gōngzuòrì, shǒuxùfèi gāo'áng, qiě shòuzhì yú bùtóng shíqū jiéjiàrì yǔ huìlǜ diǎnchā sǔnhào. Jìnnián lái, duōbiān yāngháng shùzì huòbìqiáo (mBridge) děng qiányán jīnróng jīchǔ shèshī shìyàn qǔdé le tūpòxìng jìnzhǎn. Yītuō fēnbùshì zhàngběn jìshù, cānyùguó shāngyè yínháng kě zài tóng yī dǐcéng zhàngběn shàng shíxiàn yāngháng shùzì huòbì de diǎnduìdiǎn shíshí tóngbù jiāoshōu (PvP), jiāng yuánběn shù tiān de kuàjìng jiésuàn yāsuō zhì shù miǎo, zōnghé jiāoyì chéngběn jiàngdī bǎifēn zhī wǔshí yǐshàng. Jǐnguǎn zài fǎnxǐqián héguī xiétóng, huòbì zhǔquán biānjiè yǔ yǐnsī bǎohù fāngmiàn réng dài guójì guīzé jìnyíbù wánshàn, dàn qí chóngsù quánqiú jīnróng jīchǔ shèshī de qiánlì yǐ wúyōngzhìyí.",
    "contentVi": "Lâu nay, chuyển tiền xuyên biên giới truyền thống phụ thuộc cao vào mạng lưới ngân hàng đại lý và hệ thống điện SWIFT; một khoản thanh toán thương mại xuyên quốc gia thường phải qua 3-4 ngân hàng trung gian thanh toán bù trừ từng tầng, không chỉ mất 2-5 ngày làm việc, phí thủ tục đắt đỏ mà còn bị hạn chế bởi ngày nghỉ các múi giờ khác nhau và tổn thất chênh lệch tỷ giá. Những năm gần đây, các thử nghiệm hạ tầng tài chính tiên phong như Cầu nối tiền kỹ thuật số ngân hàng trung ương đa phương (mBridge) đã đạt tiến triển đột phá. Dựa trên công nghệ sổ cái phân tán, ngân hàng thương mại các nước tham gia có thể thực hiện thanh toán đồng bộ ngang hàng theo thời gian thực (PvP) ngay trên cùng một sổ cái nền tảng, rút ngắn thời gian quyết toán xuyên biên giới từ nhiều ngày xuống còn vài giây, giảm trên 50% tổng chi phí giao dịch. Dù vẫn cần hoàn thiện thêm quy tắc quốc tế về phối hợp chống rửa tiền, ranh giới chủ quyền tiền tệ và bảo vệ quyền riêng tư, nhưng tiềm năng tái định hình hạ tầng tài chính toàn cầu của nó là điều không thể nghi ngờ.",
    "questions": [
      {
        "id": "rp-hsk7-advanced-30-q1",
        "questionVi": "Nhược điểm của hệ thống chuyển tiền xuyên biên giới truyền thống qua ngân hàng đại lý là gì?",
        "options": [
          "Chỉ mất 1 giây nhưng không gửi được tiền",
          "Qua nhiều ngân hàng trung gian, mất 2-5 ngày làm việc, phí cao và chịu tổn thất chênh lệch tỷ giá",
          "Hoàn toàn miễn phí nhưng chỉ dùng được ban đêm",
          "Chỉ áp dụng cho giao dịch dưới 10 USD"
        ],
        "correctAnswer": "Qua nhiều ngân hàng trung gian, mất 2-5 ngày làm việc, phí cao và chịu tổn thất chênh lệch tỷ giá",
        "explanationVi": "'经三至四家中转银行层层清算，不仅耗时二至五个工作日、手续费高昂...'."
      },
      {
        "id": "rp-hsk7-advanced-30-q2",
        "questionVi": "Dự án mBridge sử dụng công nghệ nền tảng nào để thực hiện thanh toán ngang hàng theo thời gian thực?",
        "options": [
          "Hệ thống thư tín đường biển",
          "Máy in tiền cơ học",
          "Công nghệ sổ cái phân tán (分布式账本技术)",
          "Mạng điện thoại cố định"
        ],
        "correctAnswer": "Công nghệ sổ cái phân tán (分布式账本技术)",
        "explanationVi": "'依托分布式账本技术，参与国商业银行可在同一底层账本上实现...'."
      },
      {
        "id": "rp-hsk7-advanced-30-q3",
        "questionVi": "Hiệu quả vượt trội của mBridge so với thanh toán truyền thống là gì?",
        "options": [
          "Giảm chi phí xuống 5% nhưng mất 10 ngày",
          "Chỉ giảm thời gian chứ không giảm chi phí",
          "Tăng số lượng ngân hàng trung gian lên 10 ngân hàng",
          "Rút ngắn thời gian quyết toán xuống vài giây và giảm trên 50% chi phí giao dịch tổng hợp"
        ],
        "correctAnswer": "Rút ngắn thời gian quyết toán xuống vài giây và giảm trên 50% chi phí giao dịch tổng hợp",
        "explanationVi": "'将原本数天的跨境结算压缩至数秒，综合交易成本降低百分之五十以上'."
      },
      {
        "id": "rp-hsk7-advanced-30-q4",
        "questionVi": "Ba thách thức nào vẫn cần quy tắc quốc tế hoàn thiện thêm đối với tiền kỹ thuật số xuyên biên giới?",
        "options": [
          "Phối hợp tuân thủ chống rửa tiền, ranh giới chủ quyền tiền tệ và bảo vệ quyền riêng tư",
          "Thiết kế màu sắc tiền giấy",
          "Đào tạo nhân viên giao hàng",
          "Xây dựng kho chứa vàng"
        ],
        "correctAnswer": "Phối hợp tuân thủ chống rửa tiền, ranh giới chủ quyền tiền tệ và bảo vệ quyền riêng tư",
        "explanationVi": "'在反洗钱合规协同、货币主权边界与隐私保护方面仍待国际规则进一步完善'."
      },
      {
        "id": "rp-hsk7-advanced-30-q5",
        "questionVi": "Thành ngữ '毋庸置疑' (wúyōngzhìyí) ở cuối đoạn văn có nghĩa là gì?",
        "options": [
          "Còn rất nhiều nghi vấn chưa rõ",
          "Không cần phải nghi ngờ gì nữa (hiển nhiên, chắc chắn)",
          "Hoàn toàn vô nghĩa",
          "Cần phải hủy bỏ ngay"
        ],
        "correctAnswer": "Không cần phải nghi ngờ gì nữa (hiển nhiên, chắc chắn)",
        "explanationVi": "毋庸置疑 = Không cần nghi ngờ gì nữa."
      }
    ]
  },
  {
    "id": "rp-hsk8-basic-31",
    "level": "HSK8",
    "subDifficulty": "basic",
    "genre": "Triết học & Mỹ học",
    "title": "中国古典园林中的“借景”与空间哲学",
    "titlePinyin": "Zhōngguó gǔdiǎn yuánlín zhōng de “jièjǐng” yǔ kōngjiān zhéxué",
    "titleVi": "Nghệ thuật 'Mượn cảnh' và triết học không gian trong vườn cổ điển Trung Hoa",
    "contentZh": "与西方古典园林强调几何对称与人为秩序不同，以苏州园林为代表的中国私家园林追求“虽由人作，宛自天开”的自然意境。由于江南宅院往往占地有限，造园大师便创造性地运用了“借景”与“框景”手法，实现“小中见大”的空间奇迹。所谓借景，即通过巧妙设计粉墙漏窗与廊亭朝向，将园外的远山、古塔、流云乃至邻院的红杏纳入园内视野，使有限的庭院与无限的宇宙自然融为一体。正如明代计成在《园冶》中所言：“夫借景，林园之最要者也。”这不仅是一种高超的建筑造景技艺，更折射出中国人“天人合一”、于方寸之间观照大千世界的哲学胸襟。",
    "contentPinyin": "Yǔ Xīfāng gǔdiǎn yuánlín qiángdiào jǐhé duìchèn yǔ rénwéi zhìxù bùtóng, yǐ Sūzhōu yuánlín wéi dàibiǎo de Zhōngguó sījiā yuánlín zhuīqiú “suī yóu rén zuò, wǎn zì tiān kāi” de zìrán yìjìng. Yóuyú Jiāngnán zháiyuàn wǎngwǎng zhàndì yǒuxiàn, zàoyuán dàshī biàn chuàngzàoxìng de yùnyòng le “jièjǐng” yǔ “kuàngjǐng” shǒufǎ, shíxiàn “xiǎo zhōng jiàn dà” de kōngjiān qíjì. Suǒwèi jièjǐng, jí tōngguò qiǎomiào shèjì fěnqiáng lòuchuāng yǔ lángtíng cháoxiàng, jiāng yuánwài de yuǎnshān, gǔtǎ, liúyún nǎizhì línyuàn de hóngxìng nàrù yuánnèi shìyě, shǐ yǒuxiàn de tíngyuàn yǔ wúxiàn de yǔzhòu zìrán róngwéiyìtǐ. Zhèngrú Míngdài Jì Chéng zài Yuányě zhōng suǒ yán: “Fú jièjǐng, línyuán zhī zuì yào zhě yě.” Zhè bùjǐn shì yì zhǒng gāochāo de jiànzhù zàojǐng jìyì, gèng zhéshè chū Zhōngguó rén “tiānrénhéyī”, yú fāngcùn zhījiān guānzhào dàqiānshìjiè de zhéxué xiōngjīn.",
    "contentVi": "Khác với vườn cổ điển phương Tây nhấn mạnh tính đối xứng hình học và trật tự nhân tạo, vườn tư gia Trung Quốc tiêu biểu như vườn Tô Châu theo đuổi ý cảnh tự nhiên 'tuy do người tạo nhưng tựa hồ trời sinh'. Do các tư dinh vùng Giang Nam thường có diện tích hạn chế, các bậc thầy tạo vườn đã vận dụng sáng tạo thủ pháp 'mượn cảnh (tá cảnh)' và 'đóng khung cảnh' để tạo nên kỳ tích không gian 'trong cái nhỏ thấy cái lớn'. Mượn cảnh tức là thông qua thiết kế khéo léo tường trắng cửa sổ hoa văn và hướng của hành lang đình đài để đưa núi xa, tháp cổ, mây trôi ngoài vườn thậm chí cành hạnh đỏ nhà bên vào tầm mắt trong vườn, khiến khu sân vườn hữu hạn hòa làm một với vũ trụ tự nhiên vô hạn. Đúng như Kế Thành đời Minh nói trong sách 'Viên Dã': 'Mượn cảnh là điều quan trọng bậc nhất của việc làm vườn.' Đây không chỉ là kỹ nghệ kiến trúc tạo cảnh siêu phàm mà còn phản chiếu tầm vóc triết học 'Thiên nhân hợp nhất' của người Trung Quốc — quán chiếu cả thế giới bao la trong một tấc vuông.",
    "questions": [
      {
        "id": "rp-hsk8-basic-31-q1",
        "questionVi": "Sự khác biệt thẩm mỹ cơ bản giữa vườn cổ điển Trung Quốc và vườn cổ điển phương Tây là gì?",
        "options": [
          "Vườn Trung Quốc không bao giờ trồng cây",
          "Vườn phương Tây chỉ xây trên đỉnh núi",
          "Vườn phương Tây nhấn mạnh đối xứng hình học và trật tự nhân tạo, còn vườn Trung Quốc theo đuổi ý cảnh tự nhiên 'tuy do người tạo nhưng tựa trời sinh'",
          "Hai phong cách hoàn toàn giống nhau"
        ],
        "correctAnswer": "Vườn phương Tây nhấn mạnh đối xứng hình học và trật tự nhân tạo, còn vườn Trung Quốc theo đuổi ý cảnh tự nhiên 'tuy do người tạo nhưng tựa trời sinh'",
        "explanationVi": "'与西方古典园林强调几何对称与人为秩序不同，以苏州园林为代表的中国私家园林追求“虽由人作，宛自天开”的自然意境'."
      },
      {
        "id": "rp-hsk8-basic-31-q2",
        "questionVi": "Bối cảnh thực tế nào đã thúc đẩy các nghệ nhân Giang Nam sáng tạo ra thủ pháp 'mượn cảnh (借景)'?",
        "options": [
          "Vì không có tiền mua gạch xây tường",
          "Vì thời tiết không có nắng",
          "Vì cấm xây đình đài",
          "Diện tích đất của các tư dinh Giang Nam thường có hạn nên cần tạo hiệu ứng 'trong cái nhỏ thấy cái lớn'"
        ],
        "correctAnswer": "Diện tích đất của các tư dinh Giang Nam thường có hạn nên cần tạo hiệu ứng 'trong cái nhỏ thấy cái lớn'",
        "explanationVi": "'由于江南宅院往往占地有限...实现“小中见大”的空间奇迹'."
      },
      {
        "id": "rp-hsk8-basic-31-q3",
        "questionVi": "Thủ pháp 'mượn cảnh (借景)' được thực hiện bằng cách nào?",
        "options": [
          "Thiết kế hướng đình đài và cửa sổ hoa văn để đưa núi xa, tháp cổ, mây trôi ngoài vườn vào tầm nhìn bên trong",
          "Mua thêm đất mở rộng vườn gấp 100 lần",
          "Vẽ tranh sơn dầu dán lên tường",
          "Xây tường kín cao 20 mét che hết bên ngoài"
        ],
        "correctAnswer": "Thiết kế hướng đình đài và cửa sổ hoa văn để đưa núi xa, tháp cổ, mây trôi ngoài vườn vào tầm nhìn bên trong",
        "explanationVi": "'将园外的远山、古塔、流云乃至邻院的红杏纳入园内视野'."
      },
      {
        "id": "rp-hsk8-basic-31-q4",
        "questionVi": "Tác phẩm kinh điển về nghệ thuật làm vườn đời Minh được trích dẫn trong bài là cuốn sách nào?",
        "options": [
          "Hồng Lâu Mộng",
          "Viên Dã (《园冶》) của Kế Thành",
          "Tam Quốc Diễn Nghĩa",
          "Binh Pháp Tôn Tử"
        ],
        "correctAnswer": "Viên Dã (《园冶》) của Kế Thành",
        "explanationVi": "'明代计成在《园冶》中所言'."
      },
      {
        "id": "rp-hsk8-basic-31-q5",
        "questionVi": "Ở tầng triết học, nghệ thuật vườn cổ điển Trung Hoa phản ánh tư tưởng nào?",
        "options": [
          "Tư tưởng chinh phục và chế ngự tự nhiên bằng hình học",
          "Chủ nghĩa thực dụng thương mại",
          "Tư tưởng 'Thiên nhân hợp nhất' — nhìn thấy cả thế giới vô hạn trong không gian hữu hạn",
          "Sự cô lập hoàn toàn với thiên nhiên"
        ],
        "correctAnswer": "Tư tưởng 'Thiên nhân hợp nhất' — nhìn thấy cả thế giới vô hạn trong không gian hữu hạn",
        "explanationVi": "'折射出中国人“天人合一”、于方寸之间观照大千世界的哲学胸襟'."
      }
    ]
  },
  {
    "id": "rp-hsk8-advanced-32",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "genre": "Phân tích Chiến lược",
    "title": "ESG投资逻辑重构与跨国企业合规转型",
    "titlePinyin": "ESG tóuzī luójí chónggòu yǔ kuàguó qǐyè héguī zhuǎnxíng",
    "titleVi": "Tái cấu trúc logic đầu tư ESG và chuyển đổi tuân thủ của doanh nghiệp đa quốc gia",
    "contentZh": "在过去数十年间，“股东利益最大化”曾被奉为现代公司治理的铁律。然而，随着极端气候灾害频发、供应链劳工丑闻以及数据隐私危机屡屡导致巨头市值腰斩，全球资本市场的定价逻辑正在发生深刻重构。环境、社会与公司治理（ESG）不再是企业年报中锦上添花的公关点缀，而是直接关联融资成本、国际大客户准入资格与长期估值溢价的核心风险因子。值得注意的是，欧盟《企业可持续发展报告指令》等域外法规的落地，正将碳足迹追踪从企业自身延伸至上下游全价值链（范围三排放）。对于深度嵌入全球供应链的亚洲制造企业而言，唯有尽早构建可核查的碳数据核算体系与透明的治理架构，方能将合规压力转化为新一轮国际竞争的先发优势。",
    "contentPinyin": "Zài guòqù shùshí nián jiān, “gǔdōng lìyì zuìdàhuà” céng bèi fèngwéi xiàndài gōngsī zhìlǐ de tiělǜ. Rán'ér, suízhe jíduān qìhòu zāihài pínfā, gōngyìngliàn láogōng chǒuwén yǐjí shùjù yǐnsī wēijī lǚlǚ dǎozhì jùtóu shìzhí yāozhǎn, quánqiú zīběn shìchǎng de dìngjià luójí zhèngzài fāshēng shēnkè chónggòu. Huánjìng, shèhuì yǔ gōngsī zhìlǐ (ESG) búzài shì qǐyè niánbào zhōng jǐnshàngtiānhuā de gōngguān diǎnzhuì, ér shì zhíjiē guānlián róngzī chéngběn, guójì dà kèhù zhǔnrù zīgé yǔ chángqī gūzhí yìjià de héxīn fēngxiǎn yīnzǐ. Zhíde zhùyì de shì, Ōuméng Qǐyè Kěchíxù Fāzhǎn Bàogào Zhǐlìng děng yùwài fǎguī de luòdì, zhèng jiāng tànzújì zhuīzōng cóng qǐyè zìshēn yánshēn zhì shàng-xiàyóu quán jiàzhíliàn (fànwéi sān páifàng). Duìyú shēndù qiànrù quánqiú gōngyìngliàn de Yàzhōu zhìzào qǐyè éryán, wéiyǒu jìnzǎo gòujiàn kě héchá de tàn shùjù hésuàn tǐxì yǔ tòumíng de zhìlǐ jiàgòu, fāng néng jiāng héguī yālì zhuǎnhuà wéi xīn yì lún guójì jìngzhēng de xiānfā yōushì.",
    "contentVi": "Trong nhiều thập kỷ qua, 'tối đa hóa lợi ích cổ đông' từng được tôn sùng là thiết luật của quản trị công ty hiện đại. Tuy nhiên, khi thảm họa khí hậu cực đoan xảy ra dồn dập, bê bối lao động trong chuỗi cung ứng và khủng hoảng quyền riêng tư dữ liệu liên tiếp khiến vốn hóa của nhiều gã khổng lồ bị chia đôi, logic định giá của thị trường vốn toàn cầu đang tái cấu trúc sâu sắc. Môi trường, Xã hội và Quản trị (ESG) không còn là thứ trang sức PR tô điểm trong báo cáo thường niên mà đã trở thành nhân tố rủi ro cốt lõi gắn trực tiếp với chi phí huy động vốn, tư cách tiếp cận khách hàng lớn quốc tế và mức định giá cao dài hạn. Đáng chú ý là sự triển khai của các quy định có hiệu lực ngoài lãnh thổ như Chỉ thị Báo cáo Phát triển Bền vững Doanh nghiệp (CSRD) của EU đang mở rộng việc truy vết dấu chân carbon từ bản thân doanh nghiệp sang toàn bộ chuỗi giá trị thượng nguồn và hạ nguồn (phát thải Phạm vi 3 / Scope 3). Đối với các doanh nghiệp chế tạo châu Á gắn chặt vào chuỗi cung ứng toàn cầu, chỉ có sớm xây dựng hệ thống hạch toán dữ liệu carbon có thể kiểm chứng và cấu trúc quản trị minh bạch mới có thể biến áp lực tuân thủ thành lợi thế người đi trước trong vòng cạnh tranh quốc tế mới.",
    "questions": [
      {
        "id": "rp-hsk8-advanced-32-q1",
        "questionVi": "Nguyên tắc nào từng được coi là thiết luật quản trị công ty trước khi ESG tái định hình thị trường vốn?",
        "options": [
          "Không cần lợi nhuận",
          "Cấm niêm yết cổ phiếu",
          "Chỉ tập trung vào quảng cáo",
          "Tối đa hóa lợi ích cổ đông (股东利益最大化)"
        ],
        "correctAnswer": "Tối đa hóa lợi ích cổ đông (股东利益最大化)",
        "explanationVi": "'“股东利益最大化”曾被奉为现代公司治理的铁律'."
      },
      {
        "id": "rp-hsk8-advanced-32-q2",
        "questionVi": "Ngày nay, ESG ảnh hưởng trực tiếp đến ba khía cạnh kinh doanh cốt lõi nào của doanh nghiệp?",
        "options": [
          "Chi phí huy động vốn, tư cách tiếp cận khách hàng lớn quốc tế và mức định giá dài hạn",
          "Chỉ ảnh hưởng đến màu sắc logo",
          "Chỉ dùng để trang trí báo cáo thường niên",
          "Không liên quan đến tài chính doanh nghiệp"
        ],
        "correctAnswer": "Chi phí huy động vốn, tư cách tiếp cận khách hàng lớn quốc tế và mức định giá dài hạn",
        "explanationVi": "'直接关联融资成本、国际大客户准入资格与长期估值溢价的核心风险因子'."
      },
      {
        "id": "rp-hsk8-advanced-32-q3",
        "questionVi": "'Phát thải Phạm vi 3 (范围三排放 - Scope 3)' theo quy định CSRD của EU yêu cầu truy vết dấu chân carbon ở phạm vi nào?",
        "options": [
          "Chỉ tính lượng điện dùng trong phòng giám đốc",
          "Mở rộng từ bản thân doanh nghiệp ra toàn bộ chuỗi giá trị thượng nguồn và hạ nguồn",
          "Chỉ tính khí thải của xe buýt công cộng",
          "Không cần tính toán gì"
        ],
        "correctAnswer": "Mở rộng từ bản thân doanh nghiệp ra toàn bộ chuỗi giá trị thượng nguồn và hạ nguồn",
        "explanationVi": "'将碳足迹追踪从企业自身延伸至上下游全价值链（范围三排放）'."
      },
      {
        "id": "rp-hsk8-advanced-32-q4",
        "questionVi": "Tác giả khuyên các doanh nghiệp chế tạo châu Á nên làm gì để biến áp lực tuân thủ ESG thành lợi thế đi trước?",
        "options": [
          "Ngừng xuất khẩu sang thị trường châu Âu",
          "Che giấu dữ liệu phát thải",
          "Sớm xây dựng hệ thống hạch toán dữ liệu carbon có thể kiểm chứng và cấu trúc quản trị minh bạch",
          "Đợi 20 năm nữa mới bắt đầu tìm hiểu"
        ],
        "correctAnswer": "Sớm xây dựng hệ thống hạch toán dữ liệu carbon có thể kiểm chứng và cấu trúc quản trị minh bạch",
        "explanationVi": "'唯有尽早构建可核查的碳数据核算体系与透明的治理架构，方能将合规压力转化为...先发优势'."
      },
      {
        "id": "rp-hsk8-advanced-32-q5",
        "questionVi": "Từ '市值腰斩' (shìzhí yāozhǎn) trong bài mang nghĩa là gì?",
        "options": [
          "Giá trị vốn hóa tăng gấp đôi",
          "Công ty đổi tên mới",
          "Công ty chia tách thành 10 chi nhánh",
          "Giá trị vốn hóa thị trường bị sụt giảm mất một nửa (chia đôi)"
        ],
        "correctAnswer": "Giá trị vốn hóa thị trường bị sụt giảm mất một nửa (chia đôi)",
        "explanationVi": "腰斩 nghĩa đen là chém ngang lưng -> trong tài chính chỉ giá cổ phiếu/vốn hóa giảm mạnh 50%."
      }
    ]
  },
  {
    "id": "rp-hsk9-basic-33",
    "level": "HSK9",
    "subDifficulty": "basic",
    "genre": "Văn ngôn & Chính luận",
    "title": "鉴古知今：从《盐铁论》看国家治理与市场边界",
    "titlePinyin": "Jiàngǔzhījīn: cóng Yántiělùn kàn guójiā zhìlǐ yǔ shìchǎng biānjiè",
    "titleVi": "Soi cổ biết kim: Từ sách 'Diêm Thiết Luận' nhìn về quản trị quốc gia và ranh giới thị trường",
    "contentZh": "公元前八十一年，西汉朝廷召开了一场载入史册的经济政策大辩论，后由桓宽整理成《盐铁论》一书。辩论双方围绕盐铁官营、均输平准等国家垄断政策展开激烈交锋：以御史大夫桑弘羊为代表的法家官僚主张，国家掌控核心资源既能充实国库以备边防军费，又可抑制豪强兼并、平抑物价；而来自各地的贤良文学之士则秉持儒家立场，痛陈官营体制滋生腐败、器物粗劣且“与民争利”，主张“崇本抑末、藏富于民”。两千余年后的今天重读此书，仍令人拍案惊奇——这场古代论战所触及的国有垄断与民间活力、财政汲取与民生休养生息之间的张力，竟与现代宏观经济学中“有为政府”与“有效市场”的边界之争如出一辙。历史昭示我们，治理之道贵在审时度势、执两用中，绝非刻舟求剑式的教条照搬。",
    "contentPinyin": "Gōngyuán qián bāshíyī nián, Xīhàn cháotíng zhàokāi le yì chǎng zǎirùshǐcè de jīngjì zhèngcè dà biànlùn, hòu yóu Huán Kuān zhěnglǐ chéng Yántiělùn yì shū. Biànlùn shuāngfāng wéirào yántiě guānyíng, jūnshū píngzhǔn děng guójiā lǒngduàn zhèngcè zhǎnkāi jīliè jiāofēng: yǐ yùshǐ dàfū Sāng Hóngyáng wéi dàibiǎo de Fǎjiā guānliáo zhǔzhāng, guójiā zhǎngkòng héxīn zīyuán jì néng chōngshí guókù yǐ bèi biānfáng jūnfèi, yòu kě yìzhì háoqiáng jiānbìng, píngyì wùjià; ér láizì gèdì de xiánliáng wénxué zhī shì zé bǐngchí Rújiā lìchǎng, tòngchén guānyíng tǐzhì zīshēng fǔbài, qìwù cūliè qiě “yǔ mín zhēnglì”, zhǔzhāng “chóngběnyìmò, cángfùyúmín”. Liǎngqiān yú nián hòu de jīntiān chóngdú cǐ shū, réng lìngrén pāi'ànjīngqí — zhè chǎng gǔdài lùnzhàn suǒ chùjí de guóyǒu lǒngduàn yǔ mínjiān huólì, cáizhèng jíqǔ yǔ mínshēng xiūyǎngshēngxī zhījiān de zhānglì, jìng yǔ xiàndài hóngguān jīngjìxué zhōng “yǒuwéi zhèngfǔ” yǔ “yǒuxiào shìchǎng” de biānjiè zhī zhēng rúchūyīzhé. Lìshǐ zhāoshì wǒmen, zhìlǐ zhī dào guì zài shěnshídùshì, zhíliǎngyòngzhōng, juéfēi kèzhōuqiújiàn shì de jiàotiáo zhàobān.",
    "contentVi": "Năm 81 trước Công nguyên, triều đình Tây Hán đã triệu tập một cuộc đại tranh luận chính sách kinh tế đi vào sử sách, sau được Hoàn Khoan biên soạn thành cuốn 'Diêm Thiết Luận'. Hai phe tranh luận giao phong gay gắt xoay quanh các chính sách độc quyền nhà nước như muối sắt quốc doanh, quân thâu bình chuẩn: phe quan lại Pháp gia do Ngự sử đại phu Tang Hoằng Dương đại diện chủ trương nhà nước nắm giữ tài nguyên cốt lõi vừa làm đầy quốc khố phục vụ quân phí biên phòng, vừa kiềm chế hào cường thôn tính và bình ổn vật giá; còn các sĩ phu Hiền lương Văn học từ khắp nơi lại giữ lập trường Nho gia, kịch liệt chỉ trích cơ chế quốc doanh làm nảy sinh tham nhũng, nông cụ thô xấu và 'tranh lợi với dân', chủ trương 'trọng nông ức thương, tích trữ của cải trong dân'. Hơn hai ngàn năm sau đọc lại cuốn sách này vẫn khiến người ta phải vỗ bàn kinh ngạc — sự giằng co giữa độc quyền nhà nước với sức sống dân gian, giữa thu ngân sách với việc dưỡng sức dân mà cuộc luận chiến cổ đại đó chạm tới lại giống hệt cuộc tranh luận về ranh giới giữa 'Chính phủ kiến tạo' và 'Thị trường hiệu quả' trong kinh tế học vĩ mô hiện đại. Lịch sử chỉ rõ cho chúng ta rằng đạo trị quốc quý ở việc xem xét thời thế, dung hòa hai cực đoan chứ tuyệt đối không phải rập khuôn giáo điều kiểu khắc mạn thuyền tìm kiếm.",
    "questions": [
      {
        "id": "rp-hsk9-basic-33-q1",
        "questionVi": "Cuộc đại tranh luận kinh tế trong sách 'Diêm Thiết Luận (《盐铁论》)' diễn ra vào triều đại nào?",
        "options": [
          "Triều đại Tây Hán (năm 81 TCN)",
          "Triều đại nhà Đường",
          "Triều đại nhà Minh",
          "Triều đại nhà Thanh"
        ],
        "correctAnswer": "Triều đại Tây Hán (năm 81 TCN)",
        "explanationVi": "'公元前八十一年，西汉朝廷召开了一场载入史册的经济政策大辩论'."
      },
      {
        "id": "rp-hsk9-basic-33-q2",
        "questionVi": "Quan điểm cốt lõi của phe Pháp gia do Tang Hoằng Dương đại diện là gì?",
        "options": [
          "Bãi bỏ hoàn toàn mọi loại thuế",
          "Nhà nước nắm độc quyền muối sắt để làm đầy quốc khố phục vụ biên phòng, kiềm chế hào cường và bình ổn giá",
          "Giải tán quân đội biên phòng",
          "Giao toàn bộ kho bạc cho thương nhân nước ngoài"
        ],
        "correctAnswer": "Nhà nước nắm độc quyền muối sắt để làm đầy quốc khố phục vụ biên phòng, kiềm chế hào cường và bình ổn giá",
        "explanationVi": "'国家掌控核心资源既能充实国库以备边防军费，又可抑制豪强兼并、平抑物价'."
      },
      {
        "id": "rp-hsk9-basic-33-q3",
        "questionVi": "Phe sĩ phu Nho gia phê phán cơ chế quốc doanh muối sắt ở những điểm nào?",
        "options": [
          "Khiến hàng hóa quá rẻ",
          "Làm tăng quá nhiều doanh nghiệp tư nhân",
          "Gây tham nhũng, chất lượng nông cụ thô xấu và 'tranh lợi với dân'",
          "Không đủ tiền xây dựng công viên"
        ],
        "correctAnswer": "Gây tham nhũng, chất lượng nông cụ thô xấu và 'tranh lợi với dân'",
        "explanationVi": "'痛陈官营体制滋生腐败、器物粗劣且“与民争利”'."
      },
      {
        "id": "rp-hsk9-basic-33-q4",
        "questionVi": "Cuộc tranh luận cách đây hơn 2000 năm này tương đồng ('如出一辙') với vấn đề nào của kinh tế học vĩ mô hiện đại?",
        "options": [
          "Cách thiết kế tiền điện tử Bitcoin",
          "Cách tính lãi suất thẻ tín dụng",
          "Kỹ thuật tiếp thị trên mạng xã hội",
          "Cuộc tranh luận về ranh giới giữa 'Chính phủ kiến tạo (有为政府)' và 'Thị trường hiệu quả (有效市场)'"
        ],
        "correctAnswer": "Cuộc tranh luận về ranh giới giữa 'Chính phủ kiến tạo (有为政府)' và 'Thị trường hiệu quả (有效市场)'",
        "explanationVi": "'竟与现代宏观经济学中“有为政府”与“有效市场”的边界之争如出一辙'."
      },
      {
        "id": "rp-hsk9-basic-33-q5",
        "questionVi": "Bài học quản trị tối hậu mà tác giả rút ra từ lịch sử ở câu cuối là gì?",
        "options": [
          "Quý ở việc xét thời thế và dung hòa cân bằng hai cực ('审时度势、执两用中'), tránh rập khuôn giáo điều ('刻舟求剑')",
          "Bắt buộc áp dụng nguyên xi chính sách thời Tây Hán",
          "Chỉ cần thị trường tự do tuyệt đối không cần chính phủ",
          "Đóng cửa giao thương với thế giới"
        ],
        "correctAnswer": "Quý ở việc xét thời thế và dung hòa cân bằng hai cực ('审时度势、执两用中'), tránh rập khuôn giáo điều ('刻舟求剑')",
        "explanationVi": "'治理之道贵在审时度势、执两用中，绝非刻舟求剑式的教条照搬'."
      }
    ]
  },
  {
    "id": "rp-hsk9-advanced-34",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "genre": "Kinh tế Chính trị Học",
    "title": "地缘经济碎片化与全球供应链韧性重塑",
    "titlePinyin": "Dìyuán jīngjì suìpiànhuà yǔ quánqiú gōngyìngliàn rènxìng chóngsù",
    "titleVi": "Phân mảnh địa kinh tế và tái định hình sức chống chịu chuỗi cung ứng toàn cầu",
    "contentZh": "冷战结束后的三十年间，全球化遵循的是以“极致效率”和“成本最小化”为唯一准则的比较优势逻辑，跨国企业普遍推行“准时制（Just-in-Time）”零库存生产模式。然而，近年来公共卫生危机、地缘政治冲突与技术出口管制接踵而至，将高度单点依赖的全球供应链暴露于系统性断链风险之下。由此，全球产业布局正从单纯追求效率转向“效率与安全并重”，衍生出近岸外包、多元化备份（Just-in-Case）与区域化集群三大趋势。国际货币基金组织（IMF）的实证模型警示，若世界经济彻底分裂为相互隔绝的竞争阵营，全球GDP将蒙受高达百分之七的长期福利损失，其中高度依赖国际贸易与技术溢出的发展中国家首当其冲。因此，在维护核心产业安全底线的同时，坚守开放的多边贸易规则、抵制泛安全化壁垒，才是化解地缘经济碎片化困局的理性正道。",
    "contentPinyin": "Lěngzhàn jiéshù hòu de sānshí nián jiān, quánqiúhuà zūnxún de shì yǐ “jízhì xiàolǜ” hé “chéngběn zuìxiǎohuà” wéi wéiyī zhǔnzé de bǐjiào yōushì luójí, kuàguó qǐyè pǔbiàn tuīxíng “zhǔnshízhì (Just-in-Time)” líng kùcún shēngchǎn móshì. Rán'ér, jìnnián lái gōnggòng wèishēng wēijī, dìyuán zhèngzhì chōngtū yǔ jìshù chūkǒu guǎnzhì jiēzhǒng'érzhì, jiāng gāodù dāndiǎn yīlài de quánqiú gōngyìngliàn bàolù yú xìtǒngxìng duànliàn fēngxiǎn zhīxià. Yóucǐ, quánqiú chǎnyè bùjú zhèng cóng dānchún zhuīqiú xiàolǜ zhuǎnxiàng “xiàolǜ yǔ ānquán bìngzhòng”, yǎnshēng chū jìn'àn wàibāo, duōyuánhuà bèifèn (Just-in-Case) yǔ qūyùhuà jíqún sān dà qūshì. Guójì Huòbì Jījīn Zǔzhī (IMF) de shízhèng móxíng jǐngshì, ruò shìjiè jīngjì chèdǐ fēnliè wéi xiānghù géjué de jìngzhēng zhènyíng, quánqiú GDP jiāng méngshòu gāodá bǎifēn zhī qī de chángqī fúlì sǔnshī, qízhōng gāodù yīlài guójì màoyì yǔ jìshù yìchū de fāzhǎnzhōng guójiā shǒudāngqíchōng. Yīncǐ, zài wéihù héxīn chǎnyè ānquán dǐxiàn de tóngshí, jiānshǒu kāifàng de duōbiān màoyì guīzé, dǐzhì fàn'ānquánhuà bìlěi, cái shì huàjiě dìyuán jīngjì suìpiànhuà kùnjú de lǐxìng zhèngdào.",
    "contentVi": "Trong 30 năm sau khi Chiến tranh Lạnh kết thúc, toàn cầu hóa tuân theo logic lợi thế so sánh lấy 'hiệu quả tối đa' và 'chi phí tối thiểu' làm chuẩn mực duy nhất, các doanh nghiệp đa quốc gia phổ biến áp dụng mô hình sản xuất không tồn kho 'Đúng lúc (Just-in-Time)'. Tuy nhiên, những năm gần đây khủng hoảng y tế công cộng, xung đột địa chính trị và kiểm soát xuất khẩu công nghệ ập đến liên tiếp đã phơi bày chuỗi cung ứng toàn cầu phụ thuộc đơn điểm ở mức cao trước rủi ro đứt gãy hệ thống. Từ đó, bố cục công nghiệp toàn cầu đang chuyển từ chỉ theo đuổi hiệu quả sang 'coi trọng song song cả hiệu quả lẫn an ninh', sản sinh ra 3 xu hướng lớn: thuê ngoài cận biên, dự phòng đa dạng hóa (Just-in-Case) và cụm công nghiệp khu vực hóa. Mô hình thực chứng của Quỹ Tiền tệ Quốc tế (IMF) cảnh báo rằng nếu kinh tế thế giới phân liệt triệt để thành các phe cạnh tranh biệt lập lẫn nhau, GDP toàn cầu sẽ chịu tổn thất phúc lợi dài hạn lên tới 7%, trong đó các nước đang phát triển phụ thuộc cao vào thương mại quốc tế và lan tỏa công nghệ sẽ chịu ảnh hưởng đầu tiên và nặng nề nhất. Do đó, trong khi bảo vệ lằn ranh an ninh ngành lõi, việc kiên trì quy tắc thương mại đa phương cởi mở và chống lại rào cản 'an ninh hóa tràn lan' mới là con đường chính đạo lý tính để hóa giải thế bí phân mảnh địa kinh tế.",
    "questions": [
      {
        "id": "rp-hsk9-advanced-34-q1",
        "questionVi": "Trong 30 năm sau Chiến tranh Lạnh, mô hình sản xuất phổ biến của các tập đoàn đa quốc gia là gì?",
        "options": [
          "Mô hình đóng cửa tự cung tự cấp hoàn toàn",
          "Mô hình 'Đúng lúc (Just-in-Time)' không tồn kho dựa trên hiệu quả tối đa và chi phí tối thiểu",
          "Mô hình tích trữ tồn kho cho 10 năm",
          "Mô hình sản xuất thủ công không dùng máy móc"
        ],
        "correctAnswer": "Mô hình 'Đúng lúc (Just-in-Time)' không tồn kho dựa trên hiệu quả tối đa và chi phí tối thiểu",
        "explanationVi": "'以“极致效率”和“成本最小化”为唯一准则...推行“准时制（Just-in-Time）”零库存生产模式'."
      },
      {
        "id": "rp-hsk9-advanced-34-q2",
        "questionVi": "Sự chuyển dịch hiện nay của bố cục chuỗi cung ứng toàn cầu hướng tới mục tiêu nào?",
        "options": [
          "Bỏ qua hoàn toàn yếu tố an ninh",
          "Chỉ sản xuất tại một nhà máy duy nhất cho cả thế giới",
          "Coi trọng song song cả hiệu quả lẫn an ninh (效率与安全并重), chuyển sang dự phòng đa dạng hóa (Just-in-Case)",
          "Ngừng hoàn toàn mọi hoạt động xuất khẩu"
        ],
        "correctAnswer": "Coi trọng song song cả hiệu quả lẫn an ninh (效率与安全并重), chuyển sang dự phòng đa dạng hóa (Just-in-Case)",
        "explanationVi": "'从单纯追求效率转向“效率与安全并重”，衍生出近岸外包、多元化备份（Just-in-Case）与区域化集群'."
      },
      {
        "id": "rp-hsk9-advanced-34-q3",
        "questionVi": "Theo mô hình thực chứng của IMF, nếu kinh tế thế giới phân liệt triệt để thành các phe biệt lập, GDP toàn cầu có thể chịu tổn thất dài hạn lên tới bao nhiêu?",
        "options": [
          "0,7% GDP toàn cầu",
          "50% GDP toàn cầu",
          "Không bị tổn thất gì",
          "Lên tới 7% GDP toàn cầu"
        ],
        "correctAnswer": "Lên tới 7% GDP toàn cầu",
        "explanationVi": "'全球GDP将蒙受高达百分之七的长期福利损失'."
      },
      {
        "id": "rp-hsk9-advanced-34-q4",
        "questionVi": "Nhóm quốc gia nào sẽ '首当其冲' (chịu ảnh hưởng đầu tiên và nặng nề nhất) nếu kinh tế toàn cầu bị phân mảnh?",
        "options": [
          "Các nước đang phát triển phụ thuộc cao vào thương mại quốc tế và sự lan tỏa công nghệ",
          "Các quốc gia không có hoạt động thương mại nào",
          "Chỉ một vài thành phố ven biển",
          "Không quốc gia nào bị ảnh hưởng"
        ],
        "correctAnswer": "Các nước đang phát triển phụ thuộc cao vào thương mại quốc tế và sự lan tỏa công nghệ",
        "explanationVi": "'高度依赖国际贸易与技术溢出的发展中国家首当其冲'."
      },
      {
        "id": "rp-hsk9-advanced-34-q5",
        "questionVi": "Tác giả đề xuất con đường lý tính nào để hóa giải thế bí phân mảnh địa kinh tế?",
        "options": [
          "Cắt đứt hoàn toàn quan hệ thương mại giữa các châu lục",
          "Vừa giữ vững lằn ranh an ninh ngành lõi, vừa kiên trì quy tắc thương mại đa phương cởi mở và chống lại rào cản 'an ninh hóa tràn lan'",
          "Bãi bỏ Tổ chức Thương mại Thế giới",
          "Tăng thuế quan lên mức tối đa với mọi mặt hàng"
        ],
        "correctAnswer": "Vừa giữ vững lằn ranh an ninh ngành lõi, vừa kiên trì quy tắc thương mại đa phương cởi mở và chống lại rào cản 'an ninh hóa tràn lan'",
        "explanationVi": "'在维护核心产业安全底线的同时，坚守开放的多边贸易规则、抵制泛安全化壁垒'."
      }
    ]
  },
  ...READING_PASSAGES_EXTRA
];

export const READING_PASSAGES: ReadingPassage[] = [...RAW_READING_PASSAGES].sort((a, b) => {
  const levelDiff = (HSK_ORDER[a.level] ?? 99) - (HSK_ORDER[b.level] ?? 99);
  if (levelDiff !== 0) return levelDiff;
  return (SUB_DIFFICULTY_ORDER[a.subDifficulty] ?? 99) - (SUB_DIFFICULTY_ORDER[b.subDifficulty] ?? 99);
});
