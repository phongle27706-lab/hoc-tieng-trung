import type { HSKLevel, SubDifficulty } from "@/types";
import { LISTENING_TASKS_EXTRA } from "./listening-tasks-extra";

export type ListeningTaskType =
  | "task1-single"
  | "task2-qa"
  | "task3-dialogue"
  | "task4-monologue";

export interface ListeningTaskTab {
  id: ListeningTaskType;
  labelVi: string;
  labelZh: string;
  descriptionVi: string;
}

export const LISTENING_TASK_TABS: ListeningTaskTab[] = [
  {
    id: "task1-single",
    labelVi: "Task 1 · Nghe câu đơn",
    labelZh: "第一部分 · 单句理解",
    descriptionVi: "Nghe một câu phát ngôn hoặc thông báo ngắn và nắm bắt thông tin cốt lõi.",
  },
  {
    id: "task2-qa",
    labelVi: "Task 2 · Nghe hỏi – đáp",
    labelZh: "第二部分 · 问句应答",
    descriptionVi: "Nghe câu hỏi hoặc lời thoại giao tiếp và chọn câu hồi đáp tự nhiên, chuẩn xác nhất.",
  },
  {
    id: "task3-dialogue",
    labelVi: "Task 3 · Nghe hội thoại",
    labelZh: "第三部分 · 男女对话",
    descriptionVi: "Nghe đoạn hội thoại thực tế giữa hai người (Đời sống, Công sở, Thương mại 1688, Đàm phán).",
  },
  {
    id: "task4-monologue",
    labelVi: "Task 4 · Đoạn văn / Bản tin",
    labelZh: "第四部分 · 短文与新闻",
    descriptionVi: "Nghe đoạn độc thoại, thông báo, bản tin kinh tế hoặc bình luận học thuật chuyên sâu.",
  },
];

export interface ListeningTaskItem {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  taskType: ListeningTaskType;
  title: string;
  audioZh: string;
  pinyin: string;
  transcriptVi: string;
  questionVi: string;
  options: string[];
  correctAnswer: string;
  explanationVi: string;
}

export const LISTENING_TASKS: ListeningTaskItem[] = [
  {
    "id": "lt-hsk0-basic-1",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Chào hỏi cơ bản",
    "audioZh": "你好！我是越南人。",
    "pinyin": "Nǐ hǎo! Wǒ shì Yuènán rén.",
    "transcriptVi": "Xin chào! Tôi là người Việt Nam.",
    "questionVi": "Người nói đến từ quốc gia nào?",
    "options": [
      "Việt Nam",
      "Trung Quốc",
      "Nhật Bản",
      "Hàn Quốc"
    ],
    "correctAnswer": "Việt Nam",
    "explanationVi": "Trong câu có cụm '越南人' (Yuènán rén) nghĩa là người Việt Nam."
  },
  {
    "id": "lt-hsk0-basic-2",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Chào hỏi thầy giáo",
    "audioZh": "老师，早上好！",
    "pinyin": "Lǎoshī, zǎoshang hǎo!",
    "transcriptVi": "Thưa thầy/cô, chào buổi sáng!",
    "questionVi": "Người nói đang chào ai vào thời điểm nào?",
    "options": [
      "Chào bạn học vào buổi tối",
      "Chào thầy/cô vào buổi sáng",
      "Chào bố mẹ vào buổi trưa",
      "Chào bác sĩ vào buổi chiều"
    ],
    "correctAnswer": "Chào thầy/cô vào buổi sáng",
    "explanationVi": "'老师' là thầy/cô giáo, '早上好' là chào buổi sáng."
  },
  {
    "id": "lt-hsk0-basic-3",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Cảm ơn & Đáp lễ",
    "audioZh": "谢谢你的茶。",
    "pinyin": "Xièxie nǐ de chá.",
    "transcriptVi": "Cảm ơn trà của bạn.",
    "questionVi": "Người nói cảm ơn vì điều gì?",
    "options": [
      "Được tặng một cuốn sách",
      "Được chỉ đường",
      "Được mời uống trà",
      "Được mời ăn cơm"
    ],
    "correctAnswer": "Được mời uống trà",
    "explanationVi": "'茶' (chá) là trà, '谢谢你的茶' là cảm ơn trà của bạn."
  },
  {
    "id": "lt-hsk0-basic-4",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi thăm sức khỏe",
    "audioZh": "你身体好吗？",
    "pinyin": "Nǐ shēntǐ hǎo ma?",
    "transcriptVi": "Sức khỏe của bạn có tốt không?",
    "questionVi": "Câu trả lời nào phù hợp nhất với câu hỏi vừa nghe?",
    "options": [
      "我是学生。 (Tôi là học sinh.)",
      "这是我的书。 (Đây là sách của tôi.)",
      "明天见！ (Mai gặp lại!)",
      "我很好，谢谢！ (Tôi rất khỏe, cảm ơn!)"
    ],
    "correctAnswer": "我很好，谢谢！ (Tôi rất khỏe, cảm ơn!)",
    "explanationVi": "Khi được hỏi '你身体好吗？' (Bạn có khỏe không?), câu đáp chuẩn là '我很好，谢谢！'."
  },
  {
    "id": "lt-hsk0-basic-5",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi tên làm quen",
    "audioZh": "请问，你叫什么名字？",
    "pinyin": "Qǐngwèn, nǐ jiào shénme míngzi?",
    "transcriptVi": "Xin hỏi, bạn tên là gì?",
    "questionVi": "Đáp án nào trả lời đúng câu hỏi trên?",
    "options": [
      "我叫阮文安。 (Tôi tên là Nguyễn Văn An.)",
      "我二十岁。 (Tôi 20 tuổi.)",
      "我不喝水。 (Tôi không uống nước.)",
      "他是中国人。 (Anh ấy là người Trung Quốc.)"
    ],
    "correctAnswer": "我叫阮文安。 (Tôi tên là Nguyễn Văn An.)",
    "explanationVi": "Câu hỏi '你叫什么名字？' hỏi về tên, nên trả lời bằng '我叫...'."
  },
  {
    "id": "lt-hsk0-basic-6",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Lời xin lỗi lịch sự",
    "audioZh": "对不起，我来晚了。",
    "pinyin": "Duìbuqǐ, wǒ lái wǎn le.",
    "transcriptVi": "Xin lỗi, tôi đến muộn rồi.",
    "questionVi": "Người nghe nên đáp lại thế nào cho lịch sự?",
    "options": [
      "不客气。 (Đừng khách sáo.)",
      "没关系。 (Không sao đâu.)",
      "再见。 (Tạm biệt.)",
      "太好了。 (Tốt quá rồi.)"
    ],
    "correctAnswer": "没关系。 (Không sao đâu.)",
    "explanationVi": "Với lời xin lỗi '对不起', câu đáp tương ứng luôn là '没关系' (Không sao)."
  },
  {
    "id": "lt-hsk0-basic-7",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Làm quen lớp tiếng Trung",
    "audioZh": "男：你好，你是新学生吗？\n女：是的，我今天第一天学汉语。",
    "pinyin": "Nán: Nǐ hǎo, nǐ shì xīn xuésheng ma?\nNǚ: Shì de, wǒ jīntiān dì-yī tiān xué Hànyǔ.",
    "transcriptVi": "Nam: Xin chào, bạn là học sinh mới phải không?\nNữ: Đúng vậy, hôm nay là ngày đầu tiên tôi học tiếng Hán.",
    "questionVi": "Bạn nữ đang học môn gì?",
    "options": [
      "Tiếng Anh",
      "Toán học",
      "Tiếng Hán (Tiếng Trung)",
      "Lịch sử"
    ],
    "correctAnswer": "Tiếng Hán (Tiếng Trung)",
    "explanationVi": "Bạn nữ nói '学汉语' (xué Hànyǔ) nghĩa là học tiếng Hán."
  },
  {
    "id": "lt-hsk0-basic-8",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Hỏi quốc tịch bạn học",
    "audioZh": "女：小王，他是哪国人？\n男：他是中国人，来自北京。",
    "pinyin": "Nǚ: Xiǎo Wáng, tā shì nǎ guó rén?\nNán: Tā shì Zhōngguó rén, láizì Běijīng.",
    "transcriptVi": "Nữ: Tiểu Vương, anh ấy là người nước nào?\nNam: Anh ấy là người Trung Quốc, đến từ Bắc Kinh.",
    "questionVi": "Người được nhắc đến đến từ thành phố nào?",
    "options": [
      "Thượng Hải",
      "Hà Nội",
      "Quảng Châu",
      "Bắc Kinh"
    ],
    "correctAnswer": "Bắc Kinh",
    "explanationVi": "Bạn nam trả lời '来自北京' (đến từ Bắc Kinh)."
  },
  {
    "id": "lt-hsk0-basic-9",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Gọi đồ uống cơ bản",
    "audioZh": "男：你喝水还是喝茶？\n女：我喝热茶，谢谢。",
    "pinyin": "Nán: Nǐ hē shuǐ háishi hē chá?\nNǚ: Wǒ hē rè chá, xièxie.",
    "transcriptVi": "Nam: Bạn uống nước lọc hay uống trà?\nNữ: Tôi uống trà nóng, cảm ơn.",
    "questionVi": "Bạn nữ chọn uống gì?",
    "options": [
      "Trà nóng",
      "Nước lạnh",
      "Cà phê",
      "Sữa bò"
    ],
    "correctAnswer": "Trà nóng",
    "explanationVi": "Bạn nữ nói '我喝热茶' (rè chá = trà nóng)."
  },
  {
    "id": "lt-hsk0-basic-10",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Tự giới thiệu bản thân",
    "audioZh": "大家好！我姓陈，叫陈明。我是越南人，今年十八岁。我很喜欢学习汉字。",
    "pinyin": "Dàjiā hǎo! Wǒ xìng Chén, jiào Chén Míng. Wǒ shì Yuènán rén, jīnnián shíbā suì. Wǒ hěn xǐhuan xuéxí Hànzì.",
    "transcriptVi": "Chào mọi người! Tôi họ Trần, tên là Trần Minh. Tôi là người Việt Nam, năm nay 18 tuổi. Tôi rất thích học chữ Hán.",
    "questionVi": "Trần Minh năm nay bao nhiêu tuổi và thích học gì?",
    "options": [
      "20 tuổi, thích nghe nhạc",
      "18 tuổi, thích học chữ Hán",
      "18 tuổi, thích nấu ăn",
      "22 tuổi, thích du lịch"
    ],
    "correctAnswer": "18 tuổi, thích học chữ Hán",
    "explanationVi": "Đoạn băng nêu rõ '今年十八岁' (18 tuổi) và '喜欢学习汉字' (thích học chữ Hán)."
  },
  {
    "id": "lt-hsk0-basic-11",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Gia đình của Tiểu Lan",
    "audioZh": "我家有三口人：爸爸、妈妈和我。爸爸是老师，妈妈是医生，我是大学生。",
    "pinyin": "Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ. Bàba shì lǎoshī, māma shì yīshēng, wǒ shì dàxuéshēng.",
    "transcriptVi": "Nhà tôi có 3 người: bố, mẹ và tôi. Bố là giáo viên, mẹ là bác sĩ, tôi là sinh viên đại học.",
    "questionVi": "Nghề nghiệp của mẹ người nói là gì?",
    "options": [
      "Giáo viên",
      "Sinh viên",
      "Bác sĩ",
      "Y tá"
    ],
    "correctAnswer": "Bác sĩ",
    "explanationVi": "Trong bài có câu '妈妈是医生' (Mẹ là bác sĩ)."
  },
  {
    "id": "lt-hsk0-basic-12",
    "level": "HSK0",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Buổi học Pinyin đầu tiên",
    "audioZh": "汉语拼音有四个声调和一个轻声。每天大声读二十分钟，发音就会很好。",
    "pinyin": "Hànyǔ Pīnyīn yǒu sì gè shēngdiào hé yí gè qīngshēng. Měitiān dàshēng dú èrshí fēnzhōng, fāyīn jiù huì hěn hǎo.",
    "transcriptVi": "Pinyin tiếng Hán có 4 thanh điệu và 1 thanh nhẹ. Mỗi ngày đọc to 20 phút thì phát âm sẽ rất tốt.",
    "questionVi": "Theo bài nghe, Pinyin tiếng Hán gồm bao nhiêu thanh điệu chính và thanh nhẹ?",
    "options": [
      "5 thanh điệu chính",
      "3 thanh điệu chính và 2 thanh nhẹ",
      "6 thanh điệu",
      "4 thanh điệu chính và 1 thanh nhẹ"
    ],
    "correctAnswer": "4 thanh điệu chính và 1 thanh nhẹ",
    "explanationVi": "Câu đầu tiên nêu rõ: '四个声调和一个轻声' (4 thanh điệu và 1 thanh nhẹ)."
  },
  {
    "id": "lt-hsk0-advanced-1",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Quy tắc biến điệu thanh 3",
    "audioZh": "“你好”两个字都是第三声，读的时候第一个字变成第二声。",
    "pinyin": "“Nǐ hǎo” liǎng gè zì dōu shì dì-sān shēng, dú de shíhou dì-yī gè zì biànchéng dì-èr shēng.",
    "transcriptVi": "Hai chữ 'Nǐ hǎo' đều là thanh 3, khi đọc thì chữ thứ nhất biến thành thanh 2.",
    "questionVi": "Khi hai thanh 3 đi liền nhau, chữ đầu tiên biến đổi như thế nào?",
    "options": [
      "Đọc thành thanh 2",
      "Đọc thành thanh 4",
      "Đọc thành thanh 1",
      "Đọc thành thanh nhẹ"
    ],
    "correctAnswer": "Đọc thành thanh 2",
    "explanationVi": "Quy tắc biến điệu thanh 3: 3 + 3 -> 2 + 3 ('第一个字变成第二声')."
  },
  {
    "id": "lt-hsk0-advanced-2",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Biến điệu của chữ 不",
    "audioZh": "“不去”和“不对”里面的“不”都要读第二声 bú。",
    "pinyin": "“Bú qù” hé “bú duì” lǐmiàn de “bù” dōu yào dú dì-èr shēng bú.",
    "transcriptVi": "Chữ 'Bù' trong 'Bú qù' và 'Bú duì' đều phải đọc thành thanh 2 (bú).",
    "questionVi": "Tại sao chữ 不 trong '不去' lại đọc là bú (thanh 2)?",
    "options": [
      "Vì đứng ở đầu câu",
      "Vì đứng trước một chữ mang thanh 4",
      "Vì đứng trước thanh 1",
      "Vì đứng ở cuối câu"
    ],
    "correctAnswer": "Vì đứng trước một chữ mang thanh 4",
    "explanationVi": "Khi '不' (bù) đứng trước âm tiết thanh 4 (như 去 qù, 对 duì), nó biến điệu thành thanh 2 (bú)."
  },
  {
    "id": "lt-hsk0-advanced-3",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Nhận diện bộ thủ chữ Hán",
    "audioZh": "“河”、“海”、“洗”这三个字左边都有三点水，表示和水有关系。",
    "pinyin": "“Hé”, “hǎi”, “xǐ” zhè sān gè zì zuǒbiān dōu yǒu sāndiǎnshuǐ, biǎoshì hé shuǐ yǒu guānxi.",
    "transcriptVi": "Ba chữ 'Hà', 'Hải', 'Tẩy' bên trái đều có bộ Tam chấm thủy, biểu thị liên quan đến nước.",
    "questionVi": "Các chữ Hán có bộ Tam chấm thủy (氵) thường liên quan đến điều gì?",
    "options": [
      "Lửa và nhiệt độ",
      "Cây cối và gỗ",
      "Nước và chất lỏng",
      "Kim loại"
    ],
    "correctAnswer": "Nước và chất lỏng",
    "explanationVi": "Bộ '三点水' (氵 - Tam chấm thủy) biểu thị ý nghĩa liên quan đến nước ('和水有关系')."
  },
  {
    "id": "lt-hsk0-advanced-4",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về quy tắc bút thuận",
    "audioZh": "写汉字的时候，应该先写横还是先写竖？",
    "pinyin": "Xiě Hànzì de shíhou, yīnggāi xiān xiě héng háishi xiān xiě shù?",
    "transcriptVi": "Khi viết chữ Hán, nên viết nét ngang trước hay nét sổ trước?",
    "questionVi": "Câu trả lời nào đúng quy tắc bút thuận chữ Hán?",
    "options": [
      "先竖后横。 (Sổ trước ngang sau.)",
      "随便怎么写都可以。 (Viết thế nào cũng được.)",
      "从右到左写。 (Viết từ phải sang trái.)",
      "先横后竖，比如“十”字。 (Ngang trước sổ sau, ví dụ chữ Thập 十.)"
    ],
    "correctAnswer": "先横后竖，比如“十”字。 (Ngang trước sổ sau, ví dụ chữ Thập 十.)",
    "explanationVi": "Quy tắc bút thuận cơ bản đầu tiên của chữ Hán là '先横后竖' (Ngang trước sổ sau)."
  },
  {
    "id": "lt-hsk0-advanced-5",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi cách đọc số 1 trong số điện thoại",
    "audioZh": "读电话号码的时候，数字“1”一般怎么读？",
    "pinyin": "Dú diànhuà hàomǎ de shíhou, shùzì “yī” yìbān zěnme dú?",
    "transcriptVi": "Khi đọc số điện thoại, chữ số '1' thường được đọc như thế nào?",
    "questionVi": "Cách trả lời nào chính xác nhất?",
    "options": [
      "一般读作 yāo，防止听错。 (Thường đọc là yāo để tránh nghe nhầm.)",
      "读作 èr。 (Đọc là èr.)",
      "不读出来。 (Không đọc ra.)",
      "读作十。 (Đọc là shí.)"
    ],
    "correctAnswer": "一般读作 yāo，防止听错。 (Thường đọc là yāo để tránh nghe nhầm.)",
    "explanationVi": "Trong tiếng Trung giao tiếp, số 1 trong số điện thoại/số phòng thường đọc là 'yāo' để tránh nhầm với số 7 (qī)."
  },
  {
    "id": "lt-hsk0-advanced-6",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về bộ Khẩu (口)",
    "audioZh": "请问，“吃”、“喝”、“唱”这三个字有什么共同的部首？",
    "pinyin": "Qǐngwèn, “chī”, “hē”, “chàng” zhè sān gè zì yǒu shénme gòngtóng de bùshǒu?",
    "transcriptVi": "Xin hỏi, ba chữ 'Ăn (吃)', 'Uống (喝)', 'Hát (唱)' có chung bộ thủ nào?",
    "questionVi": "Đáp án nào trả lời đúng câu hỏi trên?",
    "options": [
      "它们都有木字旁。 (Chúng đều có bộ Mộc.)",
      "它们都有口字旁，和嘴巴有关。 (Chúng đều có bộ Khẩu, liên quan đến miệng.)",
      "它们都有人字旁。 (Chúng đều có bộ Nhân.)",
      "它们都有心字底。 (Chúng đều có bộ Tâm.)"
    ],
    "correctAnswer": "它们都有口字旁，和嘴巴有关。 (Chúng đều có bộ Khẩu, liên quan đến miệng.)",
    "explanationVi": "Các chữ 吃, 喝, 唱 đều có bộ Khẩu (口) ở bên trái, liên quan đến hoạt động của miệng."
  },
  {
    "id": "lt-hsk0-advanced-7",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Phân biệt âm bật hơi p và b",
    "audioZh": "女：老师，“爸”和“怕”发音有什么不同？\n男：“爸”的声母是 b，不送气；“怕”的声母是 p，要送气。",
    "pinyin": "Nǚ: Lǎoshī, “bà” hé “pà” fāyīn yǒu shénme bùtóng?\nNán: “Bà” de shēngmǔ shì b, bú sòngqì; “pà” de shēngmǔ shì p, yào sòngqì.",
    "transcriptVi": "Nữ: Thưa thầy, phát âm chữ 'Bà' và 'Pà' khác nhau thế nào?\nNam: Thanh mẫu của 'Bà' là b, không bật hơi; thanh mẫu của 'Pà' là p, phải bật hơi.",
    "questionVi": "Điểm khác biệt cốt lõi giữa thanh mẫu b và p là gì?",
    "options": [
      "b là thanh 1, còn p là thanh 4",
      "b dùng lưỡi, còn p không dùng môi",
      "b không bật hơi, còn p phải bật hơi",
      "Hai âm đọc hoàn toàn giống nhau"
    ],
    "correctAnswer": "b không bật hơi, còn p phải bật hơi",
    "explanationVi": "Thầy giáo giải thích rõ: 'b 不送气' (không bật hơi), 'p 要送气' (phải bật hơi)."
  },
  {
    "id": "lt-hsk0-advanced-8",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Cách viết chữ Quốc (国)",
    "audioZh": "男：这个“国”字里面的“玉”写完以后才封口吗？\n女：对，全包围的字要“先里头后封口”。",
    "pinyin": "Nán: Zhège “guó” zì lǐmiàn de “yù” xiě wán yǐhòu cái fēngkǒu ma?\nNǚ: Duì, quán bāowéi de zì yào “xiān lǐtou hòu fēngkǒu”.",
    "transcriptVi": "Nam: Chữ 'Quốc (国)' này viết xong chữ 'Ngọc (玉)' bên trong rồi mới đóng khung phải không?\nNữ: Đúng rồi, chữ bao vây toàn bộ phải 'viết bên trong trước rồi mới đóng đáy sau'.",
    "questionVi": "Quy tắc viết chữ có khung bao quanh toàn bộ như chữ 国 là gì?",
    "options": [
      "Đóng kín khung vuông bên ngoài trước rồi mới viết bên trong",
      "Viết từ dưới lên trên",
      "Viết từ phải sang trái",
      "Viết phần bên trong trước, đóng nét ngang đáy cuối cùng"
    ],
    "correctAnswer": "Viết phần bên trong trước, đóng nét ngang đáy cuối cùng",
    "explanationVi": "Quy tắc bút thuận cho chữ bao quanh toàn bộ (囗) là '先里头后封口' (Vào nhà trước, đóng cửa sau)."
  },
  {
    "id": "lt-hsk0-advanced-9",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Biến điệu của chữ 一",
    "audioZh": "女：为什么“一天”读第四声，而“一个”读第二声？\n男：因为“一”在第四声前面要变成第二声，在其他声调前变第四声。",
    "pinyin": "Nǚ: Wèishénme “yì tiān” dú dì-sì shēng, ér “yí gè” dú dì-èr shēng?\nNán: Yīnwèi “yī” zài dì-sì shēng qiánmiàn yào biànchéng dì-èr shēng, zài qítā shēngdiào qián biàn dì-sì shēng.",
    "transcriptVi": "Nữ: Tại sao 'yì tiān' đọc thanh 4 mà 'yí gè' lại đọc thanh 2?\nNam: Vì chữ 'Một (一)' đứng trước thanh 4 sẽ biến thành thanh 2, còn đứng trước các thanh khác thì biến thành thanh 4.",
    "questionVi": "Chữ 一 (yī) khi đứng trước chữ 个 (gè - thanh 4) sẽ đọc thành thanh mấy?",
    "options": [
      "Thanh 2 (yí gè)",
      "Thanh 1 (yī gè)",
      "Thanh 3 (yǐ gè)",
      "Thanh 4 (yì gè)"
    ],
    "correctAnswer": "Thanh 2 (yí gè)",
    "explanationVi": "Đứng trước thanh 4, chữ '一' biến điệu thành thanh 2: 'yí gè'."
  },
  {
    "id": "lt-hsk0-advanced-10",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Mẹo nhớ 50 bộ thủ cốt lõi",
    "audioZh": "学习汉字如果只靠死记硬背会很累。掌握五十个常用偏旁部首，就能猜出汉字的意思和读音。比如木字旁和树木有关，金字旁和金属有关。",
    "pinyin": "Xuéxí Hànzì rúguǒ zhǐ kào sǐjìyìngbèi huì hěn lèi. Zhǎngwò wǔshí gè chángyòng piānpáng bùshǒu, jiù néng cāichū Hànzì de yìsi hé dúyīn. Bǐrú mùzìpáng hé shùmù yǒuguān, jīnzìpáng hé jīnshǔ yǒuguān.",
    "transcriptVi": "Học chữ Hán nếu chỉ học vẹt sẽ rất mệt. Nắm vững 50 bộ thủ thông dụng sẽ có thể đoán được ý nghĩa và âm đọc của chữ Hán. Ví dụ bộ Mộc liên quan đến cây cối, bộ Kim liên quan đến kim loại.",
    "questionVi": "Lợi ích của việc nắm vững 50 bộ thủ thông dụng là gì?",
    "options": [
      "Giúp nói tiếng Anh giỏi hơn",
      "Giúp đoán được ý nghĩa và âm đọc của chữ Hán mà không cần học vẹt",
      "Không cần phải viết chữ Hán nữa",
      "Chỉ dùng để tra số điện thoại"
    ],
    "correctAnswer": "Giúp đoán được ý nghĩa và âm đọc của chữ Hán mà không cần học vẹt",
    "explanationVi": "Đoạn văn nói rõ: '掌握五十个常用偏旁部首，就能猜出汉字的意思和读音'."
  },
  {
    "id": "lt-hsk0-advanced-11",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Phân biệt âm đầu lưỡi và âm cuốn lưỡi",
    "audioZh": "越南学生学汉语时，常常把平舌音 z、c、s 和翘舌音 zh、ch、sh 分不清。发翘舌音的时候，舌尖一定要往上卷起来。",
    "pinyin": "Yuènán xuésheng xué Hànyǔ shí, chángcháng bǎ píngshéyīn z, c, s hé qiàoshéyīn zh, ch, sh fēn bù qīng. Fā qiàoshéyīn de shíhou, shéjiān yídìng yào wǎng shàng juǎn qǐlái.",
    "transcriptVi": "Học sinh Việt Nam khi học tiếng Hán thường không phân biệt rõ âm đầu lưỡi thẳng z, c, s và âm cuốn lưỡi zh, ch, sh. Khi phát âm cuốn lưỡi, đầu lưỡi nhất định phải cong lên trên.",
    "questionVi": "Khi phát âm nhóm âm zh, ch, sh, vị trí lưỡi phải như thế nào?",
    "options": [
      "Đầu lưỡi đặt thẳng chạm răng dưới",
      "Môi phải mím chặt",
      "Đầu lưỡi phải cong/cuốn lên trên",
      "Không cần cử động lưỡi"
    ],
    "correctAnswer": "Đầu lưỡi phải cong/cuốn lên trên",
    "explanationVi": "Trong bài hướng dẫn: '发翘舌音的时候，舌尖一定要往上卷起来' (đầu lưỡi nhất định phải cuốn lên trên)."
  },
  {
    "id": "lt-hsk0-advanced-12",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Tầm quan trọng của thứ tự nét viết",
    "audioZh": "每个汉字都有固定的笔画顺序。按照正确的笔顺写字，不仅写得快，而且字形端正好看，用手机手写输入时识别率也最高。",
    "pinyin": "Měi gè Hànzì dōu yǒu gùdìng de bǐhuà shùnxù. Ànzhào zhèngquè de bǐshùn xiězì, bùjǐn xiě de kuài, érqiě zìxíng duānzhèng hǎokàn, yòng shǒujī shǒuxiě shūrù shí shíbiélǜ yě zuì gāo.",
    "transcriptVi": "Mỗi chữ Hán đều có thứ tự nét bút cố định. Viết chữ theo đúng bút thuận không chỉ viết nhanh, dáng chữ ngay ngắn đẹp mắt mà khi viết tay trên điện thoại tỷ lệ nhận diện cũng cao nhất.",
    "questionVi": "Đâu KHÔNG phải là lợi ích của việc viết đúng thứ tự nét chữ Hán được nêu trong bài?",
    "options": [
      "Giúp viết nhanh, chữ đẹp và nhận diện viết tay trên điện thoại chính xác",
      "Giúp dáng chữ ngay ngắn cân đối",
      "Giúp tốc độ viết chữ nhanh hơn",
      "Giúp thay đổi hoàn toàn nghĩa của từ vựng"
    ],
    "correctAnswer": "Giúp thay đổi hoàn toàn nghĩa của từ vựng",
    "explanationVi": "Bài nghe nêu 3 lợi ích: viết nhanh, dáng chữ ngay ngắn đẹp, và nhận diện viết tay trên điện thoại cao nhất; không hề làm thay đổi nghĩa của từ."
  },
  {
    "id": "lt-hsk1-basic-1",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Thời gian đi làm",
    "audioZh": "我爸爸每天早上八点去医院工作。",
    "pinyin": "Wǒ bàba měitiān zǎoshang bā diǎn qù yīyuàn gōngzuò.",
    "transcriptVi": "Bố tôi mỗi sáng 8 giờ đi làm ở bệnh viện.",
    "questionVi": "Bố của người nói làm việc ở đâu?",
    "options": [
      "Trường học",
      "Bệnh viện",
      "Nhà hàng",
      "Sân bay"
    ],
    "correctAnswer": "Bệnh viện",
    "explanationVi": "Câu nghe có '去医院工作' (đi làm ở bệnh viện)."
  },
  {
    "id": "lt-hsk1-basic-2",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Món ăn yêu thích",
    "audioZh": "我最喜欢吃北京烤鸭和米饭。",
    "pinyin": "Wǒ zuì xǐhuan chī Běijīng kǎoyā hé mǐfàn.",
    "transcriptVi": "Tôi thích nhất là ăn vịt quay Bắc Kinh và cơm.",
    "questionVi": "Người nói thích ăn món gì?",
    "options": [
      "Mì bò và bánh bao",
      "Lẩu Tứ Xuyên",
      "Vịt quay Bắc Kinh và cơm",
      "Sủi cảo và trà sữa"
    ],
    "correctAnswer": "Vịt quay Bắc Kinh và cơm",
    "explanationVi": "'北京烤鸭' là vịt quay Bắc Kinh, '米饭' là cơm trắng."
  },
  {
    "id": "lt-hsk1-basic-3",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Vị trí đồ vật",
    "audioZh": "你的汉语书在电脑旁边。",
    "pinyin": "Nǐ de Hànyǔ shū zài diànnǎo pángbiān.",
    "transcriptVi": "Sách tiếng Hán của bạn ở bên cạnh máy tính.",
    "questionVi": "Cuốn sách tiếng Hán đang nằm ở đâu?",
    "options": [
      "Phía dưới cái ghế",
      "Ở trong cặp sách",
      "Trên giường",
      "Bên cạnh máy tính"
    ],
    "correctAnswer": "Bên cạnh máy tính",
    "explanationVi": "'在电脑旁边' nghĩa là ở bên cạnh máy tính."
  },
  {
    "id": "lt-hsk1-basic-4",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi thứ trong tuần",
    "audioZh": "请问，今天是星期几？",
    "pinyin": "Qǐngwèn, jīntiān shì xīngqījǐ?",
    "transcriptVi": "Xin hỏi, hôm nay là thứ mấy?",
    "questionVi": "Câu trả lời nào khớp với câu hỏi?",
    "options": [
      "今天是星期三。 (Hôm nay là thứ Tư.)",
      "现在三点半。 (Bây giờ là 3 giờ rưỡi.)",
      "我有三本书。 (Tôi có 3 quyển sách.)",
      "今天很冷。 (Hôm nay rất lạnh.)"
    ],
    "correctAnswer": "今天是星期三。 (Hôm nay là thứ Tư.)",
    "explanationVi": "'星期几' hỏi về thứ trong tuần, trả lời '今天是星期三'."
  },
  {
    "id": "lt-hsk1-basic-5",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi giá hoa quả",
    "audioZh": "老板，这个西瓜多少钱？",
    "pinyin": "Lǎobǎn, zhège xīguā duōshao qián?",
    "transcriptVi": "Ông chủ, quả dưa hấu này bao nhiêu tiền?",
    "questionVi": "Đáp án nào là câu trả lời của ông chủ?",
    "options": [
      "这个西瓜很大。 (Quả dưa hấu này rất to.)",
      "二十五块钱一个。 (25 tệ một quả.)",
      "我不买苹果。 (Tôi không mua táo.)",
      "商店在前面。 (Cửa hàng ở phía trước.)"
    ],
    "correctAnswer": "二十五块钱一个。 (25 tệ một quả.)",
    "explanationVi": "Câu hỏi '多少钱' hỏi giá tiền, đáp án '二十五块钱一个' (25 tệ một quả) là chính xác."
  },
  {
    "id": "lt-hsk1-basic-6",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi khả năng nói tiếng Trung",
    "audioZh": "你会说汉语吗？",
    "pinyin": "Nǐ huì shuō Hànyǔ ma?",
    "transcriptVi": "Bạn có biết nói tiếng Hán không?",
    "questionVi": "Câu trả lời nào tự nhiên và đúng ngữ cảnh nhất?",
    "options": [
      "我是昨天来的。 (Tôi đến từ hôm qua.)",
      "汉语书很贵。 (Sách tiếng Hán rất đắt.)",
      "我会说一点儿。 (Tôi biết nói một chút.)",
      "他在看电视。 (Anh ấy đang xem tivi.)"
    ],
    "correctAnswer": "我会说一点儿。 (Tôi biết nói một chút.)",
    "explanationVi": "Với câu hỏi '你会说汉语吗？', trả lời '我会说一点儿' (Tôi biết nói một chút) là chuẩn xác."
  },
  {
    "id": "lt-hsk1-basic-7",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Đi mua quần áo",
    "audioZh": "女：这件白衣服多少钱？\n男：九十块，您穿很漂亮。",
    "pinyin": "Nǚ: Zhè jiàn bái yīfu duōshao qián?\nNán: Jiǔshí kuài, nín chuān hěn piàoliang.",
    "transcriptVi": "Nữ: Chiếc áo màu trắng này bao nhiêu tiền?\nNam: 90 tệ, chị mặc rất đẹp.",
    "questionVi": "Chiếc áo màu trắng có giá bao nhiêu?",
    "options": [
      "19 tệ",
      "80 tệ",
      "100 tệ",
      "90 tệ"
    ],
    "correctAnswer": "90 tệ",
    "explanationVi": "Người bán hàng trả lời '九十块' (90 tệ)."
  },
  {
    "id": "lt-hsk1-basic-8",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Hẹn giờ xem phim",
    "audioZh": "男：我们下午几点去看电影？\n女：四点半吧，我在电影院前面等你。",
    "pinyin": "Nán: Wǒmen xiàwǔ jǐ diǎn qù kàn diànyǐng?\nNǚ: Sì diǎn bàn ba, wǒ zài diànyǐngyuàn qiánmiàn děng nǐ.",
    "transcriptVi": "Nam: Chiều nay mấy giờ chúng mình đi xem phim?\nNữ: 4 giờ rưỡi nhé, mình đợi bạn ở phía trước rạp chiếu phim.",
    "questionVi": "Hai người hẹn gặp nhau lúc mấy giờ chiều?",
    "options": [
      "4 giờ 30 chiều",
      "3 giờ 30 chiều",
      "4 giờ đúng",
      "5 giờ chiều"
    ],
    "correctAnswer": "4 giờ 30 chiều",
    "explanationVi": "Bạn nữ nói '四点半吧' (4 giờ rưỡi nhé)."
  },
  {
    "id": "lt-hsk1-basic-9",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Tìm mèo cưng",
    "audioZh": "女：你看见我的小猫了吗？\n男：它在椅子下面睡觉呢。",
    "pinyin": "Nǚ: Nǐ kànjiàn wǒ de xiǎomāo le ma?\nNán: Tā zài yǐzi xiàmiàn shuìjiào ne.",
    "transcriptVi": "Nữ: Bạn có nhìn thấy chú mèo nhỏ của tôi không?\nNam: Nó đang ngủ ở dưới ghế kìa.",
    "questionVi": "Chú mèo đang làm gì ở đâu?",
    "options": [
      "Đang ăn cá trên bàn",
      "Đang ngủ ở dưới cái ghế",
      "Đang chạy ngoài sân",
      "Đang ngồi cạnh tivi"
    ],
    "correctAnswer": "Đang ngủ ở dưới cái ghế",
    "explanationVi": "Bạn nam nói '它在椅子下面睡觉呢' (đang ngủ dưới ghế)."
  },
  {
    "id": "lt-hsk1-basic-10",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Một ngày của sinh viên",
    "audioZh": "我叫林娜，是河内大学的学生。我每天上午八点去学校上课，中午在学校吃午饭，下午四点回家。晚上我喜欢看中国电影。",
    "pinyin": "Wǒ jiào Lín Nà, shì Hénèi Dàxué de xuésheng. Wǒ měitiān shàngwǔ bā diǎn qù xuéxiào shàngkè, zhōngwǔ zài xuéxiào chī wǔfàn, xiàwǔ sì diǎn huí jiā. Wǎnshang wǒ xǐhuan kàn Zhōngguó diànyǐng.",
    "transcriptVi": "Tôi tên là Lâm Na, là sinh viên Đại học Hà Nội. Mỗi ngày tôi đi học lúc 8 giờ sáng, buổi trưa ăn trưa ở trường, 4 giờ chiều về nhà. Buổi tối tôi thích xem phim Trung Quốc.",
    "questionVi": "Buổi tối Lâm Na thích làm gì?",
    "options": [
      "Đi cửa hàng mua hoa quả",
      "Gọi điện thoại cho bạn",
      "Xem phim Trung Quốc",
      "Nghe nhạc tiếng Anh"
    ],
    "correctAnswer": "Xem phim Trung Quốc",
    "explanationVi": "Câu cuối nói rõ: '晚上我喜欢看中国电影'."
  },
  {
    "id": "lt-hsk1-basic-11",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Thời tiết Bắc Kinh",
    "audioZh": "今天北京的天气不太好，上午下大雨，最高气温只有十二度。大家出门请多穿一点衣服。",
    "pinyin": "Jīntiān Běijīng de tiānqì bú tài hǎo, shàngwǔ xià dàyǔ, zuìgāo qìwēn zhǐyǒu shí'èr dù. Dàjiā chūmén qǐng duō chuān yìdiǎn yīfu.",
    "transcriptVi": "Thời tiết Bắc Kinh hôm nay không tốt lắm, buổi sáng mưa to, nhiệt độ cao nhất chỉ có 12 độ. Mọi người ra ngoài xin mặc thêm quần áo.",
    "questionVi": "Nhiệt độ cao nhất ở Bắc Kinh hôm nay là bao nhiêu độ?",
    "options": [
      "20 độ",
      "22 độ",
      "10 độ",
      "12 độ"
    ],
    "correctAnswer": "12 độ",
    "explanationVi": "Trong bản tin có câu '最高气温只有十二度' (12 độ)."
  },
  {
    "id": "lt-hsk1-basic-12",
    "level": "HSK1",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Gọi món ở quán ăn",
    "audioZh": "中午我和朋友去中国饭店吃饭。我点了一碗牛肉面，我朋友点了十个饺子和一杯热茶。一共花了四十八块钱。",
    "pinyin": "Zhōngwǔ wǒ hé péngyou qù Zhōngguó fàndiàn chīfàn. Wǒ diǎn le yì wǎn niúròumiàn, wǒ péngyou diǎn le shí gè jiǎozi hé yì bēi rè chá. Yígòng huā le sìshíbā kuài qián.",
    "transcriptVi": "Buổi trưa tôi và bạn đi ăn ở nhà hàng Trung Quốc. Tôi gọi một bát mì bò, bạn tôi gọi 10 cái sủi cảo và một cốc trà nóng. Tổng cộng hết 48 tệ.",
    "questionVi": "Hai người ăn trưa hết tổng cộng bao nhiêu tiền?",
    "options": [
      "48 tệ",
      "38 tệ",
      "58 tệ",
      "84 tệ"
    ],
    "correctAnswer": "48 tệ",
    "explanationVi": "Câu cuối nêu rõ: '一共花了四十八块钱' (48 tệ)."
  },
  {
    "id": "lt-hsk1-advanced-1",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Chuyến bay đi Thượng Hải",
    "audioZh": "我明天下午坐三点十分的飞机去上海开会。",
    "pinyin": "Wǒ míngtiān xiàwǔ zuò sān diǎn shí fēn de fēijī qù Shànghǎi kāihuì.",
    "transcriptVi": "Chiều mai tôi đi chuyến bay lúc 3 giờ 10 phút tới Thượng Hải để họp.",
    "questionVi": "Người nói đi Thượng Hải bằng phương tiện gì và để làm gì?",
    "options": [
      "Đi tàu hỏa để du lịch",
      "Đi máy bay để dự họp",
      "Đi taxi để thăm bạn",
      "Đi xe buýt để mua sắm"
    ],
    "correctAnswer": "Đi máy bay để dự họp",
    "explanationVi": "'坐...飞机去上海开会' nghĩa là đi máy bay tới Thượng Hải họp."
  },
  {
    "id": "lt-hsk1-advanced-2",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thanh toán WeChat Pay",
    "audioZh": "不好意思，我没带现金，请问可以扫微信付款吗？",
    "pinyin": "Bù hǎoyìsi, wǒ méi dài xiànjīn, qǐngwèn kěyǐ sǎo Wēixìn fùkuǎn ma?",
    "transcriptVi": "Ngại quá, tôi không mang tiền mặt, xin hỏi có thể quét mã WeChat thanh toán không?",
    "questionVi": "Tại sao người nói muốn thanh toán qua WeChat?",
    "options": [
      "Vì điện thoại hết pin",
      "Vì được giảm giá một nửa",
      "Vì không mang theo tiền mặt",
      "Vì quên mật khẩu thẻ ngân hàng"
    ],
    "correctAnswer": "Vì không mang theo tiền mặt",
    "explanationVi": "'我没带现金' = Tôi không mang theo tiền mặt."
  },
  {
    "id": "lt-hsk1-advanced-3",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Liên hệ qua điện thoại",
    "audioZh": "喂，王经理现在不在办公室，请您下午两点再打来。",
    "pinyin": "Wéi, Wáng jīnglǐ xiànzài bú zài bàngōngshì, qǐng nín xiàwǔ liǎng diǎn zài dǎ lái.",
    "transcriptVi": "Alo, Giám đốc Vương hiện không có ở văn phòng, xin ngài 2 giờ chiều gọi lại.",
    "questionVi": "Khi nào người gọi nên gọi điện lại?",
    "options": [
      "12 giờ trưa",
      "8 giờ sáng mai",
      "4 giờ chiều",
      "2 giờ chiều"
    ],
    "correctAnswer": "2 giờ chiều",
    "explanationVi": "Nhân viên nhắn: '请您下午两点再打来' (2 giờ chiều gọi lại)."
  },
  {
    "id": "lt-hsk1-advanced-4",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi phương tiện ra sân bay",
    "audioZh": "我们怎么去机场？坐出租车还是坐地铁？",
    "pinyin": "Wǒmen zěnme qù jīchǎng? Zuò chūzūchē háishi zuò dìtiě?",
    "transcriptVi": "Chúng ta đi sân bay bằng cách nào? Đi taxi hay đi tàu điện ngầm?",
    "questionVi": "Đáp án nào phù hợp nhất?",
    "options": [
      "坐地铁吧，不会堵车。 (Đi tàu điện ngầm đi, sẽ không bị tắc đường.)",
      "飞机已经到了。 (Máy bay đã đến rồi.)",
      "我不认识路。 (Tôi không biết đường.)",
      "机场很大。 (Sân bay rất rộng.)"
    ],
    "correctAnswer": "坐地铁吧，不会堵车。 (Đi tàu điện ngầm đi, sẽ không bị tắc đường.)",
    "explanationVi": "Câu hỏi lựa chọn giữa taxi và tàu điện ngầm, đáp án chọn '坐地铁吧' là hợp lý nhất."
  },
  {
    "id": "lt-hsk1-advanced-5",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi độ ngọt trà sữa",
    "audioZh": "您好，您的珍珠奶茶要正常糖还是少糖？",
    "pinyin": "Nínhǎo, nín de zhēnzhū nǎichá yào zhèngcháng táng háishi shǎo táng?",
    "transcriptVi": "Xin chào, trà sữa trân châu của quý khách muốn đường bình thường hay ít đường?",
    "questionVi": "Khách hàng nên trả lời thế nào?",
    "options": [
      "我要两碗米饭。 (Tôi lấy hai bát cơm.)",
      "请给我少糖，少冰，谢谢。 (Cho tôi ít đường, ít đá, cảm ơn.)",
      "一共二十块钱。 (Tổng cộng 20 tệ.)",
      "这家店很有名。 (Quán này rất nổi tiếng.)"
    ],
    "correctAnswer": "请给我少糖，少冰，谢谢。 (Cho tôi ít đường, ít đá, cảm ơn.)",
    "explanationVi": "Nhân viên hỏi mức đường ('正常糖还是少糖'), khách đáp '请给我少糖，少冰' là chuẩn thực tế."
  },
  {
    "id": "lt-hsk1-advanced-6",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi ngày về Việt Nam",
    "audioZh": "你什么时候回越南看爸爸妈妈？",
    "pinyin": "Nǐ shénme shíhou huí Yuènán kàn bàba māma?",
    "transcriptVi": "Khi nào bạn về Việt Nam thăm bố mẹ?",
    "questionVi": "Câu trả lời nào đúng trọng tâm?",
    "options": [
      "我爸爸妈妈身体很好。 (Bố mẹ tôi sức khỏe rất tốt.)",
      "我在北京学了三年汉语。 (Tôi học tiếng Hán ở Bắc Kinh 3 năm rồi.)",
      "下个月十五号我坐飞机回去。 (Ngày 15 tháng sau tôi đi máy bay về.)",
      "越南菜很好吃。 (Món ăn Việt Nam rất ngon.)"
    ],
    "correctAnswer": "下个月十五号我坐飞机回去。 (Ngày 15 tháng sau tôi đi máy bay về.)",
    "explanationVi": "'什么时候' hỏi về thời gian, đáp án '下个月十五号...' trả lời chính xác thời điểm về."
  },
  {
    "id": "lt-hsk1-advanced-7",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Mua trái cây mặc cả",
    "audioZh": "女：老板，草莓怎么卖？\n男：十五块钱一斤，买两斤算你二十五块。",
    "pinyin": "Nǚ: Lǎobǎn, cǎoméi zěnme mài?\nNán: Shíwǔ kuài qián yì jīn, mǎi liǎng jīn suàn nǐ èrshíwǔ kuài.",
    "transcriptVi": "Nữ: Ông chủ, dâu tây bán thế nào?\nNam: 15 tệ một cân, mua hai cân thì tính bạn 25 tệ.",
    "questionVi": "Nếu bạn nữ mua 2 cân dâu tây thì phải trả bao nhiêu tiền?",
    "options": [
      "30 tệ",
      "15 tệ",
      "20 tệ",
      "25 tệ"
    ],
    "correctAnswer": "25 tệ",
    "explanationVi": "Ông chủ nói '买两斤算你二十五块' (mua 2 cân tính 25 tệ)."
  },
  {
    "id": "lt-hsk1-advanced-8",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Hỏi đường đến ngân hàng",
    "audioZh": "男：请问，中国银行离这儿远吗？\n女：不远，就在前面医院的右边，走路五分钟就到。",
    "pinyin": "Nán: Qǐngwèn, Zhōngguó Yínháng lí zhèr yuǎn ma?\nNǚ: Bù yuǎn, jiù zài qiánmiàn yīyuàn de yòubiān, zǒulù wǔ fēnzhōng jiù dào.",
    "transcriptVi": "Nam: Xin hỏi, Ngân hàng Trung Quốc cách đây có xa không?\nNữ: Không xa, ở ngay bên phải bệnh viện phía trước, đi bộ 5 phút là tới.",
    "questionVi": "Ngân hàng Trung Quốc nằm ở vị trí nào và đi bộ mất bao lâu?",
    "options": [
      "Bên phải bệnh viện, đi bộ 5 phút",
      "Bên trái trường học, đi bộ 10 phút",
      "Phía sau ga tàu, đi xe 15 phút",
      "Đối diện khách sạn, đi bộ 20 phút"
    ],
    "correctAnswer": "Bên phải bệnh viện, đi bộ 5 phút",
    "explanationVi": "Bạn nữ chỉ rõ: '医院的右边，走路五分钟就到'."
  },
  {
    "id": "lt-hsk1-advanced-9",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Đặt bàn nhà hàng",
    "audioZh": "女：你好，我想订今天晚上六点的桌子，四个人。\n男：好的，请问您贵姓？电话号码是多少？",
    "pinyin": "Nǚ: Nǐ hǎo, wǒ xiǎng dìng jīntiān wǎnshang liù diǎn de zhuōzi, sì gè rén.\nNán: Hǎo de, qǐngwèn nín guìxìng? Diànhuà hàomǎ shì duōshao?",
    "transcriptVi": "Nữ: Xin chào, tôi muốn đặt bàn lúc 6 giờ tối nay cho 4 người.\nNam: Vâng, xin hỏi quý danh của chị? Số điện thoại là bao nhiêu?",
    "questionVi": "Bạn nữ đặt bàn cho mấy người vào lúc mấy giờ?",
    "options": [
      "6 người vào lúc 4 giờ chiều",
      "4 người vào lúc 6 giờ tối",
      "2 người vào lúc 7 giờ tối",
      "4 người vào lúc 12 giờ trưa"
    ],
    "correctAnswer": "4 người vào lúc 6 giờ tối",
    "explanationVi": "Trong hội thoại: '今天晚上六点的桌子，四个人'."
  },
  {
    "id": "lt-hsk1-advanced-10",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Kế hoạch cuối tuần",
    "audioZh": "明天是星期六，我们不上课。上午我想在家洗衣服、打扫房间。下午我和中国朋友一起去书店买汉语词典，晚上去吃火锅。",
    "pinyin": "Míngtiān shì xīngqīliù, wǒmen bú shàngkè. Shàngwǔ wǒ xiǎng zài jiā xǐ yīfu, dǎsǎo fángjiān. Xiàwǔ wǒ hé Zhōngguó péngyou yìqǐ qù shūdiàn mǎi Hànyǔ cídiǎn, wǎnshang qù chī huǒguō.",
    "transcriptVi": "Ngày mai là thứ Bảy, chúng tôi không đi học. Buổi sáng tôi muốn ở nhà giặt quần áo, dọn phòng. Buổi chiều tôi cùng bạn Trung Quốc đi hiệu sách mua từ điển tiếng Hán, buổi tối đi ăn lẩu.",
    "questionVi": "Chiều thứ Bảy người nói sẽ đi đâu làm gì?",
    "options": [
      "Ở nhà giặt quần áo",
      "Đi bệnh viện khám bệnh",
      "Đi hiệu sách mua từ điển tiếng Hán",
      "Đi sân bay đón bạn"
    ],
    "correctAnswer": "Đi hiệu sách mua từ điển tiếng Hán",
    "explanationVi": "Đoạn băng nêu rõ: '下午我和中国朋友一起去书店买汉语词典'."
  },
  {
    "id": "lt-hsk1-advanced-11",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Món quà sinh nhật tặng mẹ",
    "audioZh": "下个星期天是我妈妈五十岁的生日。我想去商场给她买一件红色的毛衣，因为她最喜欢红色。我妹妹会给她做一个生日蛋糕。",
    "pinyin": "Xià gè xīngqītiān shì wǒ māma wǔshí suì de shēngrì. Wǒ xiǎng qù shāngchǎng gěi tā mǎi yí jiàn hóngsè de máoyī, yīnwèi tā zuì xǐhuan hóngsè. Wǒ mèimei huì gěi tā zuò yí gè shēngrì dàngāo.",
    "transcriptVi": "Chủ nhật tuần sau là sinh nhật 50 tuổi của mẹ tôi. Tôi muốn đi trung tâm thương mại mua tặng mẹ một chiếc áo len màu đỏ vì mẹ thích nhất màu đỏ. Em gái tôi sẽ làm một chiếc bánh sinh nhật tặng mẹ.",
    "questionVi": "Người nói định mua quà gì tặng mẹ?",
    "options": [
      "Một chiếc bánh sinh nhật",
      "Một chiếc điện thoại mới",
      "Một bó hoa tươi",
      "Một chiếc áo len màu đỏ"
    ],
    "correctAnswer": "Một chiếc áo len màu đỏ",
    "explanationVi": "'给她买一件红色的毛衣' = mua tặng bà một chiếc áo len màu đỏ."
  },
  {
    "id": "lt-hsk1-advanced-12",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Văn phòng mới của công ty",
    "audioZh": "我们公司搬到了市中心的大楼，在第十五层。办公室里有很多电脑，还有一个茶水间，大家累的时候可以免费喝咖啡和绿茶。",
    "pinyin": "Wǒmen gōngsī bān dào le shìzhōngxīn de dàlóu, zài dì-shíwǔ céng. Bàngōngshì lǐ yǒu hěn duō diànnǎo, hái yǒu yí gè cháshuǐjiān, dàjiā lèi de shíhou kěyǐ miǎnfèi hē kāfēi hé lǜchá.",
    "transcriptVi": "Công ty chúng tôi chuyển đến tòa nhà ở trung tâm thành phố, tại tầng 15. Trong văn phòng có rất nhiều máy tính, còn có một phòng trà nước, khi mệt mọi người có thể uống cà phê và trà xanh miễn phí.",
    "questionVi": "Văn phòng mới của công ty nằm ở tầng mấy?",
    "options": [
      "Tầng 15",
      "Tầng 5",
      "Tầng 10",
      "Tầng 25"
    ],
    "correctAnswer": "Tầng 15",
    "explanationVi": "Trong bài nêu: '在第十五层' (ở tầng thứ 15)."
  },
  {
    "id": "lt-hsk2-basic-1",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "So sánh chiều cao",
    "audioZh": "弟弟今年十四岁，已经比哥哥高五公分了。",
    "pinyin": "Dìdi jīnnián shísì suì, yǐjīng bǐ gēge gāo wǔ gōngfēn le.",
    "transcriptVi": "Em trai năm nay 14 tuổi, đã cao hơn anh trai 5 phân rồi.",
    "questionVi": "Ai là người cao hơn?",
    "options": [
      "Anh trai cao hơn em trai 5 cm",
      "Hai anh em cao bằng nhau",
      "Em trai cao hơn anh trai 5 cm",
      "Em trai thấp hơn anh trai 14 cm"
    ],
    "correctAnswer": "Em trai cao hơn anh trai 5 cm",
    "explanationVi": "Cấu trúc so sánh '弟弟...比哥哥高五公分' cho biết em trai cao hơn anh trai 5 cm."
  },
  {
    "id": "lt-hsk2-basic-2",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Thời gian đi tàu điện ngầm",
    "audioZh": "从我家坐地铁到北京西站只要二十五分钟。",
    "pinyin": "Cóng wǒ jiā zuò dìtiě dào Běijīng Xīzhàn zhǐ yào èrshíwǔ fēnzhōng.",
    "transcriptVi": "Từ nhà tôi đi tàu điện ngầm đến ga Bắc Kinh Tây chỉ mất 25 phút.",
    "questionVi": "Đi tàu điện ngầm từ nhà người nói đến ga Bắc Kinh Tây mất bao lâu?",
    "options": [
      "15 phút",
      "45 phút",
      "50 phút",
      "25 phút"
    ],
    "correctAnswer": "25 phút",
    "explanationVi": "'只要二十五分钟' nghĩa là chỉ mất 25 phút."
  },
  {
    "id": "lt-hsk2-basic-3",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Lời dặn của bác sĩ",
    "audioZh": "吃药以后不要喝茶，多喝温水，早点休息。",
    "pinyin": "Chī yào yǐhòu búyào hē chá, duō hē wēnshuǐ, zǎodiǎn xiūxi.",
    "transcriptVi": "Sau khi uống thuốc đừng uống trà, hãy uống nhiều nước ấm và nghỉ ngơi sớm.",
    "questionVi": "Sau khi uống thuốc không nên làm gì?",
    "options": [
      "Không nên uống trà",
      "Không nên uống nước ấm",
      "Không nên đi ngủ sớm",
      "Không nên ăn cháo"
    ],
    "correctAnswer": "Không nên uống trà",
    "explanationVi": "'吃药以后不要喝茶' = Sau khi uống thuốc không được uống trà."
  },
  {
    "id": "lt-hsk2-basic-4",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi kinh nghiệm du lịch",
    "audioZh": "你以前去过广州吗？",
    "pinyin": "Nǐ yǐqián qù guo Guǎngzhōu ma?",
    "transcriptVi": "Trước đây bạn đã từng đi Quảng Châu chưa?",
    "questionVi": "Đáp án nào trả lời đúng câu hỏi trên?",
    "options": [
      "我明天不上班。 (Ngày mai tôi không đi làm.)",
      "去过两次，那儿的点心非常好吃。 (Đã đi 2 lần rồi, điểm tâm ở đó rất ngon.)",
      "广州在南方。 (Quảng Châu ở phía Nam.)",
      "我坐火车去。 (Tôi đi bằng tàu hỏa.)"
    ],
    "correctAnswer": "去过两次，那儿的点心非常好吃。 (Đã đi 2 lần rồi, điểm tâm ở đó rất ngon.)",
    "explanationVi": "Câu hỏi dùng '去过...吗' hỏi trải nghiệm trong quá khứ, trả lời '去过两次...' là chính xác."
  },
  {
    "id": "lt-hsk2-basic-5",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi lý do đi làm muộn",
    "audioZh": "你今天早上怎么迟到了二十分钟？",
    "pinyin": "Nǐ jīntiān zǎoshang zěnme chídào le èrshí fēnzhōng?",
    "transcriptVi": "Sao sáng nay bạn lại đến muộn 20 phút vậy?",
    "questionVi": "Câu trả lời nào giải thích đúng nguyên nhân?",
    "options": [
      "我现在去开会。 (Bây giờ tôi đi họp.)",
      "手表是新买的。 (Đồng hồ mới mua đấy.)",
      "因为路上下大雨，堵车很厉害。 (Vì trên đường mưa to, tắc đường dữ lắm.)",
      "今天星期一。 (Hôm nay là thứ Hai.)"
    ],
    "correctAnswer": "因为路上下大雨，堵车很厉害。 (Vì trên đường mưa to, tắc đường dữ lắm.)",
    "explanationVi": "'怎么迟到了' hỏi lý do đến muộn, trả lời bằng '因为...' (vì mưa to tắc đường) là chuẩn xác."
  },
  {
    "id": "lt-hsk2-basic-6",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi mượn ô khi trời mưa",
    "audioZh": "外面还在下雨吗？我没带雨伞。",
    "pinyin": "Wàimiàn hái zài xiàyǔ ma? Wǒ méi dài yǔsǎn.",
    "transcriptVi": "Bên ngoài vẫn đang mưa à? Tôi không mang theo ô.",
    "questionVi": "Câu đáp nào phù hợp và nhiệt tình nhất?",
    "options": [
      "这把伞二十块钱。 (Chiếc ô này 20 tệ.)",
      "昨天也下雨了。 (Hôm qua cũng mưa.)",
      "我不喜欢冬天。 (Tôi không thích mùa đông.)",
      "雨停了，不用带伞了。 (Mưa tạnh rồi, không cần mang ô nữa đâu.)"
    ],
    "correctAnswer": "雨停了，不用带伞了。 (Mưa tạnh rồi, không cần mang ô nữa đâu.)",
    "explanationVi": "Người hỏi lo lắng vì không có ô khi trời mưa, đáp '雨停了，不用带伞了' (Mưa tạnh rồi) là khớp nhất."
  },
  {
    "id": "lt-hsk2-basic-7",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Tìm điện thoại để quên",
    "audioZh": "女：奇怪，我的手机呢？刚才还在桌子上。\n男：别找了，在你外衣左边的口袋里呢。",
    "pinyin": "Nǚ: Qíguài, wǒ de shǒujī ne? Gāngcái hái zài zhuōzi shàng.\nNán: Bié zhǎo le, zài nǐ wàiyī zuǒbiān de kǒudài lǐ ne.",
    "transcriptVi": "Nữ: Lạ thật, điện thoại của em đâu rồi? Vừa nãy vẫn ở trên bàn mà.\nNam: Đừng tìm nữa, ở trong túi áo khoác bên trái của em kìa.",
    "questionVi": "Chiếc điện thoại của bạn nữ thực chất đang ở đâu?",
    "options": [
      "Trong túi áo khoác bên trái",
      "Ở trên bàn làm việc",
      "Ở trên giường ngủ",
      "Trong ngăn kéo bàn"
    ],
    "correctAnswer": "Trong túi áo khoác bên trái",
    "explanationVi": "Bạn nam chỉ rõ: '在你外衣左边的口袋里呢'."
  },
  {
    "id": "lt-hsk2-basic-8",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Món cá cay Tứ Xuyên",
    "audioZh": "男：今天的水煮鱼怎么样？是不是太辣了？\n女：有一点辣，不过味道非常香，我很喜欢。",
    "pinyin": "Nán: Jīntiān de shuǐzhǔyú zěnmeyàng? Shì bu shì tài là le?\nNǚ: Yǒu yìdiǎn là, búguò wèidào fēicháng xiāng, wǒ hěn xǐhuan.",
    "transcriptVi": "Nam: Món cá luộc cay hôm nay thế nào? Có phải cay quá không?\nNữ: Hơi cay một chút, nhưng hương vị rất thơm, tôi rất thích.",
    "questionVi": "Bạn nữ nhận xét thế nào về món cá?",
    "options": [
      "Quá cay nên không thể ăn được",
      "Hơi cay một chút nhưng rất thơm ngon",
      "Quá mặn và không tươi",
      "Không cay chút nào"
    ],
    "correctAnswer": "Hơi cay một chút nhưng rất thơm ngon",
    "explanationVi": "Bạn nữ nói: '有一点辣，不过味道非常香，我很喜欢'."
  },
  {
    "id": "lt-hsk2-basic-9",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Mua vé tàu cao tốc",
    "audioZh": "女：去杭州的高铁票买到了吗？\n男：上午的票卖完了，我买了下午两点十五分的。",
    "pinyin": "Nǚ: Qù Hángzhōu de gāotiěpiào mǎidào le ma?\nNán: Shàngwǔ de piào mài wán le, wǒ mǎi le xiàwǔ liǎng diǎn shíwǔ fēn de.",
    "transcriptVi": "Nữ: Vé tàu cao tốc đi Hàng Châu đã mua được chưa?\nNam: Vé buổi sáng bán hết rồi, anh mua vé lúc 2 giờ 15 phút chiều.",
    "questionVi": "Tại sao bạn nam lại mua vé tàu buổi chiều?",
    "options": [
      "Vì buổi sáng bạn nam bận họp",
      "Vì vé buổi chiều rẻ hơn",
      "Vì vé buổi sáng đã bán hết",
      "Vì buổi sáng trời mưa to"
    ],
    "correctAnswer": "Vì vé buổi sáng đã bán hết",
    "explanationVi": "Bạn nam nói '上午的票卖完了' (Vé buổi sáng đã bán hết rồi)."
  },
  {
    "id": "lt-hsk2-basic-10",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Thói quen chạy bộ buổi sáng",
    "audioZh": "张大夫今年六十岁了，但是身体非常健康。他每天早上五点半起床，去公园慢跑四十分钟，然后回家吃早饭。他常说运动是最好的药。",
    "pinyin": "Zhāng dàifu jīnnián liùshí suì le, dànshì shēntǐ fēicháng jiànkāng. Tā měitiān zǎoshang wǔ diǎn bàn qǐchuáng, qù gōngyuán mànpǎo sìshí fēnzhōng, ránhòu huí jiā chī zǎofàn. Tā cháng shuō yùndòng shì zuì hǎo de yào.",
    "transcriptVi": "Bác sĩ Trương năm nay 60 tuổi rồi nhưng cơ thể rất khỏe mạnh. Mỗi sáng ông thức dậy lúc 5 giờ rưỡi, ra công viên chạy bộ chậm 40 phút rồi về nhà ăn sáng. Ông thường nói vận động là liều thuốc tốt nhất.",
    "questionVi": "Bác sĩ Trương chạy bộ ở công viên mỗi sáng trong bao lâu?",
    "options": [
      "30 phút",
      "60 phút",
      "50 phút",
      "40 phút"
    ],
    "correctAnswer": "40 phút",
    "explanationVi": "Đoạn băng nêu: '去公园慢跑四十分钟' (chạy bộ chậm 40 phút)."
  },
  {
    "id": "lt-hsk2-basic-11",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Chuẩn bị tiệc sinh nhật",
    "audioZh": "明天是小王的生日，我们打算在他的房间里办一个晚会。小李去超市买水果和饮料，我去蛋糕店拿生日蛋糕，大家晚上七点准时到。",
    "pinyin": "Míngtiān shì Xiǎo Wáng de shēngrì, wǒmen dǎsuàn zài tā de fángjiān lǐ bàn yí gè wǎnhuì. Xiǎo Lǐ qù chāoshì mǎi shuǐguǒ hé yǐnliào, wǒ qù dàngāodiàn ná shēngrì dàngāo, dàjiā wǎnshang qī diǎn zhǔnshí dào.",
    "transcriptVi": "Ngày mai là sinh nhật Tiểu Vương, chúng tôi dự định tổ chức một bữa tiệc tối tại phòng cậu ấy. Tiểu Lý đi siêu thị mua hoa quả và đồ uống, tôi đi tiệm bánh lấy bánh sinh nhật, mọi người đến đúng 7 giờ tối.",
    "questionVi": "Người nói (我) đảm nhận việc gì cho bữa tiệc sinh nhật?",
    "options": [
      "Đi tiệm bánh lấy bánh sinh nhật",
      "Đi siêu thị mua hoa quả và đồ uống",
      "Nấu bữa tối tại nhà",
      "Đi mua礼物 (quà) ở trung tâm thương mại"
    ],
    "correctAnswer": "Đi tiệm bánh lấy bánh sinh nhật",
    "explanationVi": "Trong bài nói rõ: '我去蛋糕店拿生日蛋糕'."
  },
  {
    "id": "lt-hsk2-basic-12",
    "level": "HSK2",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Săn sale mua giày trên mạng",
    "audioZh": "上个星期我在网上看中了一双白色的运动鞋，原价四百块。昨天商店搞活动打五折，我只花了两百块就买到了，还免邮费。",
    "pinyin": "Shàng gè xīngqī wǒ zài wǎngshàng kànzhòng le yì shuāng báisè de yùndòngxié, yuánjià sìbǎi kuài. Zuótiān shāngdiàn gǎo huódòng dǎ wǔ zhé, wǒ zhǐ huā le liǎngbǎi kuài jiù mǎidào le, hái miǎn yóufèi.",
    "transcriptVi": "Tuần trước tôi ưng một đôi giày thể thao màu trắng trên mạng, giá gốc 400 tệ. Hôm qua cửa hàng có chương trình giảm giá 50% (打五折), tôi chỉ tốn 200 tệ là mua được, lại còn miễn phí ship.",
    "questionVi": "Người nói đã mua đôi giày thể thao với giá thực tế là bao nhiêu?",
    "options": [
      "400 tệ",
      "200 tệ (và được miễn phí vận chuyển)",
      "300 tệ",
      "150 tệ"
    ],
    "correctAnswer": "200 tệ (và được miễn phí vận chuyển)",
    "explanationVi": "'打五折，我只花了两百块就买到了' = giảm 50%, chỉ tốn 200 tệ."
  },
  {
    "id": "lt-hsk2-advanced-1",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thông báo giao hàng Taobao",
    "audioZh": "您好，您的淘宝快递已经放在小区南门的丰巢快递柜里了，取件码是5826。",
    "pinyin": "Nínhǎo, nín de Táobǎo kuàidì yǐjīng fàng zài xiǎoqū nánmén de Fēngcháo kuàidìguì lǐ le, qǔjiànmǎ shì wǔ-bā-èr-liù.",
    "transcriptVi": "Xin chào, kiện hàng Taobao của quý khách đã được đặt trong tủ nhận hàng Phong Sào ở cổng Nam khu dân cư, mã lấy hàng là 5826.",
    "questionVi": "Kiện hàng được đặt ở đâu?",
    "options": [
      "Ở quầy lễ tân tầng 1",
      "Trước cửa phòng 5826",
      "Trong tủ nhận hàng ở cổng Nam khu dân cư",
      "Tại bưu điện trung tâm"
    ],
    "correctAnswer": "Trong tủ nhận hàng ở cổng Nam khu dân cư",
    "explanationVi": "Bản tin nói rõ: '放在小区南门的丰巢快递柜里了'."
  },
  {
    "id": "lt-hsk2-advanced-2",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thủ tục nhận phòng khách sạn",
    "audioZh": "先生您好，您的标准间在十楼，早餐时间是早上六点半到九点半。",
    "pinyin": "Xiānsheng nínhǎo, nín de biāozhǔnjiān zài shí lóu, zǎocān shíjiān shì zǎoshang liù diǎn bàn dào jiǔ diǎn bàn.",
    "transcriptVi": "Chào quý ông, phòng tiêu chuẩn của ngài ở tầng 10, thời gian ăn sáng là từ 6 giờ 30 đến 9 giờ 30 sáng.",
    "questionVi": "Khách sạn phục vụ bữa sáng đến mấy giờ?",
    "options": [
      "Đến 10 giờ sáng",
      "Đến 8 giờ 30 sáng",
      "Đến 11 giờ trưa",
      "Đến 9 giờ 30 sáng"
    ],
    "correctAnswer": "Đến 9 giờ 30 sáng",
    "explanationVi": "'早餐时间是早上六点半到九点半' = từ 6h30 đến 9h30 sáng."
  },
  {
    "id": "lt-hsk2-advanced-3",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thông báo đổi cửa lên máy bay",
    "audioZh": "各位旅客请注意，飞往河内的VN513次航班登机口改到二十八号。",
    "pinyin": "Gèwèi lǚkè qǐng zhùyì, fēiwǎng Hénèi de VN wǔ-yāo-sān cì hángbān dēngjīkǒu gǎi dào èrshíbā hào.",
    "transcriptVi": "Xin quý hành khách chú ý, chuyến bay VN513 bay đi Hà Nội đã đổi cửa lên máy bay sang cửa số 28.",
    "questionVi": "Thông báo ở sân bay nhắc hành khách về thay đổi gì?",
    "options": [
      "Chuyến bay đi Hà Nội đổi sang cửa lên máy bay số 28",
      "Chuyến bay bị hủy do thời tiết xấu",
      "Chuyến bay cất cánh sớm hơn 28 phút",
      "Hành khách phải lấy lại hành lý"
    ],
    "correctAnswer": "Chuyến bay đi Hà Nội đổi sang cửa lên máy bay số 28",
    "explanationVi": "'登机口改到二十八号' nghĩa là cửa lên máy bay (boarding gate) đổi sang số 28."
  },
  {
    "id": "lt-hsk2-advanced-4",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về phí vận chuyển",
    "audioZh": "老板，我买十件衣服可以包邮吗？",
    "pinyin": "Lǎobǎn, wǒ mǎi shí jiàn yīfu kěyǐ bāoyóu ma?",
    "transcriptVi": "Ông chủ, tôi mua 10 chiếc áo có được miễn phí vận chuyển (bao ship) không?",
    "questionVi": "Câu trả lời nào hợp lý nhất từ chủ shop?",
    "options": [
      "这件衣服没有黑色的。 (Chiếc áo này không có màu đen.)",
      "可以，满三件我们就全国包邮。 (Được chứ, cứ đủ từ 3 chiếc là chúng tôi miễn phí ship toàn quốc.)",
      "邮局在前面左拐。 (Bưu điện ở phía trước rẽ trái.)",
      "昨天已经下班了。 (Hôm qua đã tan làm rồi.)"
    ],
    "correctAnswer": "可以，满三件我们就全国包邮。 (Được chứ, cứ đủ từ 3 chiếc là chúng tôi miễn phí ship toàn quốc.)",
    "explanationVi": "Khách hỏi '可以包邮吗' (có bao ship không), chủ shop đáp '可以，满三件我们就全国包邮' là khớp 100%."
  },
  {
    "id": "lt-hsk2-advanced-5",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi mật khẩu Wi-Fi khách sạn",
    "audioZh": "前台你好，请问房间的无线网密码是多少？",
    "pinyin": "Qiántái nǐ hǎo, qǐngwèn fángjiān de wúxiànwǎng mìmǎ shì duōshao?",
    "transcriptVi": "Lễ tân ơi, cho hỏi mật khẩu Wi-Fi của phòng là bao nhiêu?",
    "questionVi": "Đáp án nào là câu trả lời của lễ tân?",
    "options": [
      "电视在桌子上面。 (Tivi ở trên bàn.)",
      "退房时间是十二点。 (Giờ trả phòng là 12 giờ.)",
      "密码就是您的房间号加四个八。 (Mật khẩu chính là số phòng của ngài cộng thêm bốn số 8.)",
      "需要两百块押金。 (Cần 200 tệ tiền đặt cọc.)"
    ],
    "correctAnswer": "密码就是您的房间号加四个八。 (Mật khẩu chính là số phòng của ngài cộng thêm bốn số 8.)",
    "explanationVi": "Câu hỏi về '无线网密码' (mật khẩu Wi-Fi), trả lời '密码就是您的房间号加四个八' là chính xác."
  },
  {
    "id": "lt-hsk2-advanced-6",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi đổi vé máy bay",
    "audioZh": "小姐，我没赶上九点的飞机，可以改签下午的航班吗？",
    "pinyin": "Xiǎojiě, wǒ méi gǎnshàng jiǔ diǎn de fēijī, kěyǐ gǎiqiān xiàwǔ de hángbān ma?",
    "transcriptVi": "Cô ơi, tôi không kịp chuyến bay 9 giờ, có thể đổi sang chuyến bay buổi chiều không?",
    "questionVi": "Nhân viên sân bay sẽ trả lời thế nào?",
    "options": [
      "火车站离这儿很远。 (Ga tàu hỏa cách đây rất xa.)",
      "今天天气真不错。 (Thời tiết hôm nay đẹp thật.)",
      "这件行李不重。 (Kiện hành lý này không nặng.)",
      "可以，下午三点还有一班，请给我您的护照。 (Được ạ, 3 giờ chiều vẫn còn một chuyến, xin đưa tôi hộ chiếu của ngài.)"
    ],
    "correctAnswer": "可以，下午三点还有一班，请给我您的护照。 (Được ạ, 3 giờ chiều vẫn còn một chuyến, xin đưa tôi hộ chiếu của ngài.)",
    "explanationVi": "'改签...航班' là đổi chuyến bay, nhân viên đáp '可以，下午三点还有一班...' là chuẩn xác."
  },
  {
    "id": "lt-hsk2-advanced-7",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Đổi size quần áo mua trên mạng",
    "audioZh": "女：客服你好，我昨天收到的裤子有点小，可以换大一号的吗？\n男：没问题，请您把裤子寄回来，我们收到后马上给您换XL码。",
    "pinyin": "Nǚ: Kèfú nǐ hǎo, wǒ zuótiān shōudào de kùzi yǒudiǎn xiǎo, kěyǐ huàn dà yí hào de ma?\nNán: Méi wèntí, qǐng nín bǎ kùzi jì huílái, wǒmen shōudào hòu mǎshàng gěi nín huàn XL mǎ.",
    "transcriptVi": "Nữ: Chào CSKH, chiếc quần tôi nhận hôm qua hơi chật, có thể đổi sang cỡ lớn hơn một số không?\nNam: Không vấn đề gì, xin chị gửi chiếc quần lại, sau khi nhận được chúng tôi sẽ đổi ngay size XL cho chị.",
    "questionVi": "Tại sao bạn nữ muốn đổi chiếc quần?",
    "options": [
      "Vì chiếc quần hơi nhỏ so với bạn ấy",
      "Vì chiếc quần bị rách",
      "Vì giao nhầm màu sắc",
      "Vì bạn ấy không thích kiểu dáng đó nữa"
    ],
    "correctAnswer": "Vì chiếc quần hơi nhỏ so với bạn ấy",
    "explanationVi": "Bạn nữ nói '我昨天收到的裤子有点小，可以换大一号的吗' (quần hơi nhỏ, muốn đổi size lớn hơn)."
  },
  {
    "id": "lt-hsk2-advanced-8",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Trả phòng và lấy lại tiền cọc",
    "audioZh": "男：你好，八零五房间退房，这是房卡。\n女：好的，请稍等。房间检查没问题，退您三百元押金，欢迎下次光临！",
    "pinyin": "Nán: Nǐ hǎo, bālíngwǔ fángjiān tuìfáng, zhè shì fángkǎ.\nNǚ: Hǎo de, qǐng shāoděng. Fángjiān jiǎnchá méi wèntí, tuì nín sānbǎi yuán yājīn, huānyíng xià cì guānglín!",
    "transcriptVi": "Nam: Xin chào, phòng 805 trả phòng, đây là thẻ phòng.\nNữ: Vâng, xin đợi một chút. Kiểm tra phòng không có vấn đề gì, hoàn lại ngài 300 tệ tiền cọc, hẹn gặp lại quý khách lần sau!",
    "questionVi": "Nhân viên lễ tân hoàn lại cho vị khách bao nhiêu tiền đặt cọc?",
    "options": [
      "805 tệ",
      "300 tệ",
      "500 tệ",
      "200 tệ"
    ],
    "correctAnswer": "300 tệ",
    "explanationVi": "'退您三百元押金' = hoàn lại ngài 300 tệ tiền đặt cọc."
  },
  {
    "id": "lt-hsk2-advanced-9",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Đi chợ đầu mối Quảng Châu",
    "audioZh": "女：老板，这款女包拿货价多少？\n男：零售八十，如果你拿十个以上，按批发价四十五一个。",
    "pinyin": "Nǚ: Lǎobǎn, zhè kuǎn nǚbāo náhuòjià duōshao?\nNán: Língshòu bāshí, rúguǒ nǐ ná shí gè yǐshàng, àn pīfājià sìshíwǔ yí gè.",
    "transcriptVi": "Nữ: Ông chủ, mẫu túi xách nữ này giá sỉ lấy hàng là bao nhiêu?\nNam: Bán lẻ 80 tệ, nếu bạn lấy từ 10 chiếc trở lên thì tính giá sỉ 45 tệ một chiếc.",
    "questionVi": "Nếu mua từ 10 chiếc túi trở lên, giá mỗi chiếc là bao nhiêu?",
    "options": [
      "80 tệ/chiếc",
      "55 tệ/chiếc",
      "45 tệ/chiếc",
      "40 tệ/chiếc"
    ],
    "correctAnswer": "45 tệ/chiếc",
    "explanationVi": "Ông chủ báo giá: '拿十个以上，按批发价四十五一个' (45 tệ một chiếc)."
  },
  {
    "id": "lt-hsk2-advanced-10",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Kinh nghiệm đi tàu cao tốc ở Trung Quốc",
    "audioZh": "在中国坐高铁非常方便。越南游客只需要在网上用护照买好车票，进站的时候直接刷护照原件就可以通过，不需要换纸质车票。建议大家提前三十分钟到车站。",
    "pinyin": "Zài Zhōngguó zuò gāotiě fēicháng fāngbiàn. Yuènán yóukè zhǐ xūyào zài wǎngshàng yòng hùzhào mǎihǎo chēpiào, jìnzhàn de shíhou zhíjiē shuā hùzhào yuánjiàn jiù kěyǐ tōngguò, bù xūyào huàn zhǐzhì chēpiào. Jiànyì dàjiā tíqián sānshí fēnzhōng dào chēzhàn.",
    "transcriptVi": "Đi tàu cao tốc ở Trung Quốc rất thuận tiện. Du khách Việt Nam chỉ cần dùng hộ chiếu mua vé trên mạng, khi vào ga quét trực tiếp hộ chiếu bản gốc là có thể đi qua, không cần đổi vé giấy. Khuyên mọi người nên đến ga trước 30 phút.",
    "questionVi": "Du khách Việt Nam cần xuất trình giấy tờ gì khi vào ga tàu cao tốc Trung Quốc?",
    "options": [
      "Bắt buộc phải đổi sang vé giấy ở quầy",
      "Chỉ cần đọc số điện thoại",
      "Dùng thẻ sinh viên",
      "Quét trực tiếp hộ chiếu bản gốc (không cần vé giấy)"
    ],
    "correctAnswer": "Quét trực tiếp hộ chiếu bản gốc (không cần vé giấy)",
    "explanationVi": "Bài nghe nêu rõ: '进站的时候直接刷护照原件就可以通过，不需要换纸质车票'."
  },
  {
    "id": "lt-hsk2-advanced-11",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Dịch vụ giao đồ ăn Meituan",
    "audioZh": "今天外面下大雨，我不想出门买午饭，就用手机上的美团点了一份烤鸭饭和一杯柠檬茶。不到二十五分钟，外卖小哥就送到了我家门口，配送费才三块钱。",
    "pinyin": "Jīntiān wàimiàn xià dàyǔ, wǒ bù xiǎng chūmén mǎi wǔfàn, jiù yòng shǒujī shàng de Měituán diǎn le yí fèn kǎoyāfàn hé yì bēi níngméngchá. Búdào èrshíwǔ fēnzhōng, wàimài xiǎogē jiù sòng dào le wǒ jiā ménkǒu, pèisòngfèi cái sān kuài qián.",
    "transcriptVi": "Hôm nay bên ngoài mưa to, tôi không muốn ra ngoài mua cơm trưa nên dùng ứng dụng Meituan trên điện thoại đặt một suất cơm vịt quay và một cốc trà chanh. Chưa đầy 25 phút, shipper đã giao đến tận cửa nhà tôi, phí giao hàng chỉ có 3 tệ.",
    "questionVi": "Phí giao hàng (配送费) cho đơn đồ ăn này là bao nhiêu?",
    "options": [
      "3 tệ",
      "25 tệ",
      "10 tệ",
      "Miễn phí"
    ],
    "correctAnswer": "3 tệ",
    "explanationVi": "Câu cuối nói rõ: '配送费才三块钱' (phí giao hàng chỉ 3 tệ)."
  },
  {
    "id": "lt-hsk2-advanced-12",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Mùa du lịch đẹp nhất ở Bắc Kinh",
    "audioZh": "去北京旅游最好的时间是秋天，特别是九月和十月。那时候天气不冷也不热，天很蓝，香山的红叶非常漂亮。冬天虽然能看雪，但是风很大，气温常常在零度以下。",
    "pinyin": "Qù Běijīng lǚyóu zuì hǎo de shíjiān shì qiūtiān, tèbié shì jiǔ yuè hé shí yuè. Nà shíhou tiānqì bù lěng yě bú rè, tiān hěn lán, Xiāngshān de hóngyè fēicháng piàoliang. Dōngtiān suīrán néng kàn xuě, dànshì fēng hěn dà, qìwēn chángcháng zài líng dù yǐxià.",
    "transcriptVi": "Thời gian tốt nhất để đi du lịch Bắc Kinh là mùa thu, đặc biệt là tháng 9 và tháng 10. Lúc đó thời tiết không lạnh cũng không nóng, bầu trời rất xanh, lá đỏ ở Hương Sơn vô cùng đẹp. Mùa đông tuy có thể ngắm tuyết nhưng gió rất lớn, nhiệt độ thường dưới 0 độ.",
    "questionVi": "Theo bài nghe, thời điểm lý tưởng nhất để đi du lịch Bắc Kinh là khi nào?",
    "options": [
      "Mùa đông khi có tuyết rơi",
      "Mùa thu (tháng 9 và tháng 10)",
      "Mùa hè tháng 7",
      "Mùa xuân tháng 3"
    ],
    "correctAnswer": "Mùa thu (tháng 9 và tháng 10)",
    "explanationVi": "Câu đầu khẳng định: '去北京旅游最好的时间是秋天，特别是九月和十月'."
  },
  {
    "id": "lt-hsk3-basic-1",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Thông báo đổi giờ họp",
    "audioZh": "由于李经理上午要去机场接客户，原定十点的部门会议推迟到下午两点半。",
    "pinyin": "Yóuyú Lǐ jīnglǐ shàngwǔ yào qù jīchǎng jiē kèhù, yuándìng shí diǎn de bùmén huìyì tuīchí dào xiàwǔ liǎng diǎn bàn.",
    "transcriptVi": "Do Giám đốc Lý buổi sáng phải ra sân bay đón khách hàng, cuộc họp bộ phận dự kiến lúc 10 giờ được lùi sang 2 giờ 30 chiều.",
    "questionVi": "Cuộc họp bộ phận sẽ diễn ra vào lúc mấy giờ?",
    "options": [
      "10 giờ sáng",
      "12 giờ trưa",
      "4 giờ chiều",
      "2 giờ 30 chiều"
    ],
    "correctAnswer": "2 giờ 30 chiều",
    "explanationVi": "'推迟到下午两点半' nghĩa là lùi sang 2 giờ 30 chiều."
  },
  {
    "id": "lt-hsk3-basic-2",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Quên chìa khóa trong văn phòng",
    "audioZh": "我刚走出电梯才发现，把家里的钥匙忘在办公室抽屉里了。",
    "pinyin": "Wǒ gāng zǒuchū diàntī cái fāxiàn, bǎ jiālǐ de yàoshi wàng zài bàngōngshì chōuti lǐ le.",
    "transcriptVi": "Tôi vừa bước ra khỏi thang máy mới phát hiện để quên chìa khóa nhà ở trong ngăn kéo văn phòng rồi.",
    "questionVi": "Người nói đã để quên chìa khóa nhà ở đâu?",
    "options": [
      "Trong ngăn kéo ở văn phòng",
      "Ở bên trong thang máy",
      "Ở dưới tầng hầm gửi xe",
      "Trong túi xách của đồng nghiệp"
    ],
    "correctAnswer": "Trong ngăn kéo ở văn phòng",
    "explanationVi": "'忘在办公室抽屉里了' = để quên trong ngăn kéo văn phòng."
  },
  {
    "id": "lt-hsk3-basic-3",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Sửa máy in văn phòng",
    "audioZh": "行政部请注意，三楼的彩色打印机卡纸了，请找技术员来看看。",
    "pinyin": "Xíngzhèngbù qǐng zhùyì, sān lóu de cǎisè dǎyìnjī kǎzhǐ le, qǐng zhǎo jìshùyuán lái kànkan.",
    "transcriptVi": "Bộ phận hành chính xin chú ý, máy in màu ở tầng 3 bị kẹt giấy rồi, vui lòng gọi kỹ thuật viên tới kiểm tra.",
    "questionVi": "Chiếc máy in ở tầng 3 gặp sự cố gì?",
    "options": [
      "Bị hết mực đen",
      "Bị kẹt giấy",
      "Bị mất nguồn điện",
      "Chưa kết nối mạng"
    ],
    "correctAnswer": "Bị kẹt giấy",
    "explanationVi": "'彩色打印机卡纸了' (kǎzhǐ = kẹt giấy)."
  },
  {
    "id": "lt-hsk3-basic-4",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về báo cáo tuần",
    "audioZh": "小陈，这周的销售报表你发给财务部了吗？",
    "pinyin": "Xiǎo Chén, zhè zhōu de xiāoshòu bàobiǎo nǐ fā gěi cáiwùbù le ma?",
    "transcriptVi": "Tiểu Trần, báo cáo bán hàng tuần này cậu đã gửi cho phòng tài vụ chưa?",
    "questionVi": "Câu trả lời nào đúng ngữ cảnh công sở?",
    "options": [
      "财务部在五楼。 (Phòng tài vụ ở tầng 5.)",
      "我昨天买了一台电脑。 (Hôm qua tôi mua một chiếc máy tính.)",
      "已经发到张会计的邮箱里了，您可以查收。 (Em đã gửi vào hộp thư của kế toán Trương rồi, anh có thể kiểm tra.)",
      "下周不去出差。 (Tuần sau không đi công tác.)"
    ],
    "correctAnswer": "已经发到张会计的邮箱里了，您可以查收。 (Em đã gửi vào hộp thư của kế toán Trương rồi, anh có thể kiểm tra.)",
    "explanationVi": "Câu hỏi đã gửi báo cáo chưa ('发给财务部了吗'), trả lời '已经发到张会计的邮箱里了' là chuẩn xác."
  },
  {
    "id": "lt-hsk3-basic-5",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về việc chuyển nhà",
    "audioZh": "听说你上周末搬家了，新房子离公司远不远？",
    "pinyin": "Tīngshuō nǐ shàng zhōumò bānjiā le, xīn fángzi lí gōngsī yuǎn bu yuǎn?",
    "transcriptVi": "Nghe nói cuối tuần trước bạn chuyển nhà rồi, nhà mới cách công ty có xa không?",
    "questionVi": "Đáp án nào trả lời đúng trọng tâm câu hỏi?",
    "options": [
      "房租每个月三千块。 (Tiền thuê nhà mỗi tháng 3000 tệ.)",
      "房间里没有空调。 (Trong phòng không có điều hòa.)",
      "我喜欢做饭。 (Tôi thích nấu ăn.)",
      "很近，坐地铁只要三站，比以前方便多了。 (Rất gần, đi tàu điện ngầm chỉ mất 3 trạm, tiện hơn trước nhiều.)"
    ],
    "correctAnswer": "很近，坐地铁只要三站，比以前方便多了。 (Rất gần, đi tàu điện ngầm chỉ mất 3 trạm, tiện hơn trước nhiều.)",
    "explanationVi": "Câu hỏi '离公司远不远' (cách công ty có xa không), đáp '很近，坐地铁只要三站' là khớp nhất."
  },
  {
    "id": "lt-hsk3-basic-6",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi ý kiến về buổi phỏng vấn",
    "audioZh": "你觉得今天上午来面试的那个越南留学生怎么样？",
    "pinyin": "Nǐ juéde jīntiān shàngwǔ lái miànshì de nàge Yuènán liúxuéshēng zěnmeyàng?",
    "transcriptVi": "Bạn thấy du học sinh Việt Nam đến phỏng vấn sáng nay thế nào?",
    "questionVi": "Câu trả lời nào phù hợp nhất?",
    "options": [
      "他的汉语说得很流利，而且有两年的外贸经验。 (Tiếng Trung của cậu ấy nói rất lưu loát, hơn nữa còn có 2 năm kinh nghiệm ngoại thương.)",
      "面试在三号会议室举行。 (Buổi phỏng vấn tổ chức ở phòng họp số 3.)",
      "我是河内人。 (Tôi là người Hà Nội.)",
      "他明天早上九点来。 (9 giờ sáng mai cậu ấy đến.)"
    ],
    "correctAnswer": "他的汉语说得很流利，而且有两年的外贸经验。 (Tiếng Trung của cậu ấy nói rất lưu loát, hơn nữa còn có 2 năm kinh nghiệm ngoại thương.)",
    "explanationVi": "Câu hỏi đánh giá ứng viên ('那个越南留学生怎么样'), đáp án nhận xét về năng lực tiếng Trung và kinh nghiệm ngoại thương là hoàn hảo."
  },
  {
    "id": "lt-hsk3-basic-7",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Xin nghỉ phép đi khám răng",
    "audioZh": "女：王经理，我今天下午想请两个小时的假，去医院看牙。\n男：好的，那你把下午要发的合同先交给小李处理吧。",
    "pinyin": "Nǚ: Wáng jīnglǐ, wǒ jīntiān xiàwǔ xiǎng qǐng liǎng gè xiǎoshí de jià, qù yīyuàn kàn yá.\nNán: Hǎo de, nà nǐ bǎ xiàwǔ yào fā de hétong xiān jiāo gěi Xiǎo Lǐ chǔlǐ ba.",
    "transcriptVi": "Nữ: Giám đốc Vương, chiều nay em muốn xin nghỉ phép 2 tiếng để đi bệnh viện khám răng.\nNam: Được, vậy em hãy bàn giao hợp đồng cần gửi chiều nay cho Tiểu Lý xử lý trước nhé.",
    "questionVi": "Giám đốc Vương yêu cầu bạn nữ làm gì trước khi nghỉ?",
    "options": [
      "Phải làm thêm giờ vào tối mai",
      "Bàn giao hợp đồng chiều nay cho Tiểu Lý xử lý",
      "Không đồng ý cho nghỉ phép",
      "Tự gửi hợp đồng xong mới được đi"
    ],
    "correctAnswer": "Bàn giao hợp đồng chiều nay cho Tiểu Lý xử lý",
    "explanationVi": "Giám đốc nói: '把下午要发的合同先交给小李处理吧'."
  },
  {
    "id": "lt-hsk3-basic-8",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Lựa chọn quà tặng khách hàng",
    "audioZh": "男：下周去深圳拜访客户，我们带什么礼物比较好？\n女：带越南特产吧，比如滴漏咖啡和腰果，他们一定喜欢。",
    "pinyin": "Nán: Xià zhōu qù Shēnzhèn bàifǎng kèhù, wǒmen dài shénme lǐwù bǐjiào hǎo?\nNǚ: Dài Yuènán tèchǎn ba, bǐrú dīlòu kāfēi hé yāoguǒ, tāmen yídìng xǐhuan.",
    "transcriptVi": "Nam: Tuần sau đi Thâm Quyến thăm khách hàng, chúng ta mang quà gì thì tốt?\nNữ: Mang đặc sản Việt Nam đi, ví dụ cà phê phin và hạt điều, họ nhất định sẽ thích.",
    "questionVi": "Hai người quyết định mang quà gì tặng khách hàng ở Thâm Quyến?",
    "options": [
      "Trà Ô Long Trung Quốc",
      "Rượu vang Pháp",
      "Đặc sản Việt Nam (cà phê phin và hạt điều)",
      "Bộ ấm chén gốm sứ"
    ],
    "correctAnswer": "Đặc sản Việt Nam (cà phê phin và hạt điều)",
    "explanationVi": "Bạn nữ gợi ý: '带越南特产吧，比如滴漏咖啡和腰果'."
  },
  {
    "id": "lt-hsk3-basic-9",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Thói quen đọc sách trước khi ngủ",
    "audioZh": "女：你最近气色真好，睡眠质量提高了吧？\n男：是啊，我现在每天晚上十点半就把手机关掉，看半个小时书再睡。",
    "pinyin": "Nǚ: Nǐ zuìjìn qìsè zhēn hǎo, shuìmián zhìliàng tígāo le ba?\nNán: Shì a, wǒ xiànzài měitiān wǎnshang shí diǎn bàn jiù bǎ shǒujī guāndiào, kàn bàn gè xiǎoshí shū zài shuì.",
    "transcriptVi": "Nữ: Dạo này sắc mặt anh tốt thật, chất lượng giấc ngủ được cải thiện rồi phải không?\nNam: Đúng vậy, bây giờ mỗi tối 10 giờ rưỡi là anh tắt điện thoại, đọc sách nửa tiếng rồi mới ngủ.",
    "questionVi": "Bạn nam đã làm gì để cải thiện giấc ngủ?",
    "options": [
      "Uống thuốc ngủ mỗi tối",
      "Chạy bộ lúc 11 giờ đêm",
      "Ngủ dậy muộn vào buổi sáng",
      "Tắt điện thoại lúc 10h30 tối và đọc sách 30 phút trước khi ngủ"
    ],
    "correctAnswer": "Tắt điện thoại lúc 10h30 tối và đọc sách 30 phút trước khi ngủ",
    "explanationVi": "Bạn nam chia sẻ: '十点半就把手机关掉，看半个小时书再睡'."
  },
  {
    "id": "lt-hsk3-basic-10",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Bí quyết học tốt tiếng Trung",
    "audioZh": "很多朋友问我怎么才能把汉语说得这么流利。其实没有什么秘密，第一是多听多模仿中国人的发音；第二是不怕说错，每天坚持和中国人或者AI老师对话二十分钟。",
    "pinyin": "Hěn duō péngyou wèn wǒ zěnme cái néng bǎ Hànyǔ shuō de zhème liúlì. Qíshí méiyǒu shénme mìmì, dì-yī shì duō tīng duō mófǎng Zhōngguó rén de fāyīn; dì-èr shì bú pà shuō cuò, měitiān jiānchí hé Zhōngguó rén huòzhě AI lǎoshī duìhuà èrshí fēnzhōng.",
    "transcriptVi": "Rất nhiều bạn bè hỏi tôi làm thế nào để nói tiếng Hán lưu loát như vậy. Thực ra không có bí mật gì cả: thứ nhất là nghe nhiều và bắt chước phát âm của người Trung Quốc; thứ hai là không sợ nói sai, mỗi ngày kiên trì hội thoại 20 phút với người Trung Quốc hoặc gia sư AI.",
    "questionVi": "Theo người nói, hai bí quyết để nói tiếng Trung lưu loát là gì?",
    "options": [
      "Nghe - bắt chước nhiều và không sợ nói sai, kiên trì luyện hội thoại 20 phút mỗi ngày",
      "Chỉ cần chép từ vựng 5 tiếng mỗi ngày",
      "Chỉ đọc sách ngữ pháp mà không cần nói",
      "Đợi đến khi thuộc hết từ điển mới bắt đầu nói"
    ],
    "correctAnswer": "Nghe - bắt chước nhiều và không sợ nói sai, kiên trì luyện hội thoại 20 phút mỗi ngày",
    "explanationVi": "Đoạn văn nêu rõ 2 điểm: '第一是多听多模仿... 第二是不怕说错，每天坚持...对话二十分钟'."
  },
  {
    "id": "lt-hsk3-basic-11",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Thông báo bảo trì thang máy",
    "audioZh": "各位住户您好：为了保证大家的安全，本大楼的一号和二号电梯将于明天上午九点到十二点进行定期检查和维修。在此期间，请大家使用三号电梯或者走楼梯。",
    "pinyin": "Gèwèi zhùhù nínhǎo: Wèile bǎozhèng dàjiā de ānquán, běn dàlóu de yī hào hé èr hào diàntī jiāng yú míngtiān shàngwǔ jiǔ diǎn dào shí'èr diǎn jìnxíng dìngqī jiǎnchá hé wéixiū. Zài cǐ qījiān, qǐng dàjiā shǐyòng sān hào diàntī huòzhě zǒu lóutī.",
    "transcriptVi": "Xin chào quý cư dân: Để đảm bảo an toàn cho mọi người, thang máy số 1 và số 2 của tòa nhà sẽ tiến hành kiểm tra và bảo trì định kỳ từ 9 giờ đến 12 giờ sáng mai. Trong thời gian này, xin mọi người sử dụng thang máy số 3 hoặc đi cầu thang bộ.",
    "questionVi": "Sáng mai từ 9 giờ đến 12 giờ, cư dân trong tòa nhà có thể đi thang máy nào?",
    "options": [
      "Thang máy số 1",
      "Thang máy số 3 (hoặc đi thang bộ)",
      "Thang máy số 2",
      "Tất cả thang máy đều ngừng hoạt động"
    ],
    "correctAnswer": "Thang máy số 3 (hoặc đi thang bộ)",
    "explanationVi": "Thông báo ghi rõ: thang số 1 và 2 bảo trì, '请大家使用三号电梯或者走楼梯'."
  },
  {
    "id": "lt-hsk3-basic-12",
    "level": "HSK3",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Chuyến công tác Hội chợ Quảng Châu",
    "audioZh": "上个月我和公司同事一起去广州参加了广交会。我们在展会上认识了十几家做智能家电的工厂，不仅拿到了最新的产品目录，还现场签下了两份试订单，收获非常大。",
    "pinyin": "Shàng gè yuè wǒ hé gōngsī tóngshì yìqǐ qù Guǎngzhōu cānjiā le Guǎngjiāohuì. Wǒmen zài zhǎnhuì shàng rènshi le shíjǐ jiā zuò zhìnéng jiādiàn de gōngchǎng, bùjǐn nádào le zuìxīn de chǎnpǐn mùlù, hái xiànchǎng qiānxià le liǎng fèn shìdìngdān, shōuhuò fēicháng dà.",
    "transcriptVi": "Tháng trước tôi cùng đồng nghiệp công ty đi Quảng Châu tham gia Hội chợ Canton Fair. Tại triển lãm chúng tôi đã làm quen được hơn mười nhà máy sản xuất đồ gia dụng thông minh, không chỉ lấy được catalog sản phẩm mới nhất mà còn ký trực tiếp 2 đơn hàng thử nghiệm ngay tại chỗ.",
    "questionVi": "Kết quả nổi bật nhất của chuyến công tác Hội chợ Quảng Châu là gì?",
    "options": [
      "Đi tham quan các điểm du lịch nổi tiếng ở Quảng Châu",
      "Tuyển dụng được 10 nhân viên mới",
      "Kết nối hơn 10 nhà máy gia dụng thông minh và ký được 2 đơn hàng thử ngay tại chỗ",
      "Mở một cửa hàng bán lẻ tại Quảng Châu"
    ],
    "correctAnswer": "Kết nối hơn 10 nhà máy gia dụng thông minh và ký được 2 đơn hàng thử ngay tại chỗ",
    "explanationVi": "Trong bài nêu rõ: '认识了十几家做智能家电的工厂... 还现场签下了两份试订单'."
  },
  {
    "id": "lt-hsk3-advanced-1",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Đàm phán số lượng đặt hàng tối thiểu (MOQ)",
    "audioZh": "老板，这款蓝牙耳机我们的最低起订量是五百个，如果印你们的商标要一千个起订。",
    "pinyin": "Lǎobǎn, zhè kuǎn lányá ěrjī wǒmen de zuìdī qǐdìngliàng shì wǔbǎi gè, rúguǒ yìn nǐmen de shāngbiāo yào yìqiān gè qǐdìng.",
    "transcriptVi": "Ông chủ, mẫu tai nghe Bluetooth này số lượng đặt tối thiểu (MOQ) của chúng tôi là 500 chiếc, nếu in logo thương hiệu của các bạn thì phải đặt từ 1000 chiếc.",
    "questionVi": "Nếu khách hàng muốn in logo thương hiệu riêng lên tai nghe thì phải đặt tối thiểu bao nhiêu chiếc?",
    "options": [
      "500 chiếc",
      "100 chiếc",
      "5000 chiếc",
      "1000 chiếc"
    ],
    "correctAnswer": "1000 chiếc",
    "explanationVi": "'如果印你们的商标要一千个起订' = in logo riêng thì MOQ là 1000 chiếc."
  },
  {
    "id": "lt-hsk3-advanced-2",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Phương thức thanh toán cọc và尾款",
    "audioZh": "按照行规，下单时先付百分之三十的定金，剩下的百分之七十在发货前付清。",
    "pinyin": "Ànzhào hángguī, xiàdān shí xiān fù bǎifēn zhī sānshí de dìngjīn, shèngxià de bǎifēn zhī qīshí zài fāhuò qián fùqīng.",
    "transcriptVi": "Theo thông lệ ngành, khi đặt đơn thanh toán trước 30% tiền cọc, 70% còn lại thanh toán hết trước khi xuất hàng.",
    "questionVi": "Khách hàng phải thanh toán 70% số tiền còn lại (尾款) vào thời điểm nào?",
    "options": [
      "Trước khi nhà máy giao/xuất hàng",
      "Sau khi bán hết hàng tại Việt Nam",
      "Ngay khi ký hợp đồng",
      "Một năm sau khi nhận hàng"
    ],
    "correctAnswer": "Trước khi nhà máy giao/xuất hàng",
    "explanationVi": "'剩下的百分之七十在发货前付清' = thanh toán hết trước khi giao hàng."
  },
  {
    "id": "lt-hsk3-advanced-3",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Yêu cầu đóng gói chống ẩm",
    "audioZh": "这批货要走海运去胡志明市，请你们一定在外箱里面加防潮袋和泡沫保护。",
    "pinyin": "Zhè pī huò yào zǒu hǎiyùn qù Húzhìmíng shì, qǐng nǐmen yídìng zài wàixiāng lǐmiàn jiā fángcháodài hé pàomò bǎohù.",
    "transcriptVi": "Lô hàng này sẽ đi đường biển tới TP.HCM, xin các bạn nhất định phải thêm túi chống ẩm và xốp bảo vệ bên trong thùng carton ngoài.",
    "questionVi": "Tại sao người mua yêu cầu thêm túi chống ẩm và xốp bảo vệ?",
    "options": [
      "Vì hàng gửi bằng máy bay",
      "Vì lô hàng vận chuyển bằng đường biển tới TP.HCM",
      "Vì khách muốn hộp trông đẹp hơn để tặng quà",
      "Vì nhà máy miễn phí đóng gói"
    ],
    "correctAnswer": "Vì lô hàng vận chuyển bằng đường biển tới TP.HCM",
    "explanationVi": "'这批货要走海运去胡志明市' = đi đường biển nên cần chống ẩm và chống va đập."
  },
  {
    "id": "lt-hsk3-advanced-4",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi thời gian sản xuất đơn hàng sỉ",
    "audioZh": "陈厂长，如果我今天打定金，这两千件连衣裙什么时候能交货？",
    "pinyin": "Chén chǎngzhǎng, rúguǒ wǒ jīntiān dǎ dìngjīn, zhè liǎngqiān jiàn liányīqún shénme shíhou néng jiāohuò?",
    "transcriptVi": "Xưởng trưởng Trần, nếu hôm nay tôi chuyển tiền cọc thì 2000 chiếc váy liền này khi nào có thể giao hàng?",
    "questionVi": "Câu trả lời nào đúng chuẩn chủ xưởng sản xuất?",
    "options": [
      "这件裙子很适合年轻人。 (Chiếc váy này rất hợp với giới trẻ.)",
      "我们的工厂在东莞。 (Nhà máy chúng tôi ở Đông Quản.)",
      "面料都有现货，十天之内一定能全部生产完并发往凭祥。 (Vải đều có sẵn, trong vòng 10 ngày nhất định sản xuất xong toàn bộ và gửi đi Bằng Tường.)",
      "去年生意非常好。 (Năm ngoái việc làm ăn rất tốt.)"
    ],
    "correctAnswer": "面料都有现货，十天之内一定能全部生产完并发往凭祥。 (Vải đều có sẵn, trong vòng 10 ngày nhất định sản xuất xong toàn bộ và gửi đi Bằng Tường.)",
    "explanationVi": "Câu hỏi về thời gian giao hàng ('什么时候能交货'), đáp án '十天之内一定能全部生产完...' là chính xác nhất."
  },
  {
    "id": "lt-hsk3-advanced-5",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về chi phí gửi hàng mẫu",
    "audioZh": "我想先拿三个样品回越南给客户看，样品费怎么算？",
    "pinyin": "Wǒ xiǎng xiān ná sān gè yàngpǐn huí Yuènán gěi kèhù kàn, yàngpǐnfèi zěnme suàn?",
    "transcriptVi": "Tôi muốn lấy trước 3 mẫu thử về Việt Nam cho khách xem, phí hàng mẫu tính thế nào?",
    "questionVi": "Đáp án nào phù hợp nhất?",
    "options": [
      "越南离广州不远。 (Việt Nam cách Quảng Châu không xa.)",
      "我们不支持信用卡。 (Chúng tôi không hỗ trợ thẻ tín dụng.)",
      "这个颜色已经卖完了。 (Màu này đã bán hết rồi.)",
      "样品每个收一百块，等您下大货订单时全额退还。 (Hàng mẫu thu 100 tệ mỗi chiếc, khi ngài đặt đơn hàng lớn sẽ hoàn trả toàn bộ.)"
    ],
    "correctAnswer": "样品每个收一百块，等您下大货订单时全额退还。 (Hàng mẫu thu 100 tệ mỗi chiếc, khi ngài đặt đơn hàng lớn sẽ hoàn trả toàn bộ.)",
    "explanationVi": "Câu hỏi '样品费怎么算' (phí hàng mẫu tính sao), trả lời thu 100 tệ/cái và hoàn lại khi đặt đơn lớn là đúng chuẩn giao dịch 1688."
  },
  {
    "id": "lt-hsk3-advanced-6",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi địa chỉ kho gom hàng",
    "audioZh": "货已经打包好了，一共二十箱，请问发到哪个物流仓库？",
    "pinyin": "Huò yǐjīng dǎbāo hǎo le, yígòng èrshí xiāng, qǐngwèn fā dào nǎge wùliú cāngkù?",
    "transcriptVi": "Hàng đã đóng gói xong rồi, tổng cộng 20 thùng, xin hỏi gửi đến kho logistics nào?",
    "questionVi": "Người mua hàng nên trả lời thế nào?",
    "options": [
      "请发到广州白云区的中越专线仓，收货人写我的客户编号。 (Vui lòng gửi đến kho tuyến chuyên biệt Trung - Việt ở quận Bạch Vân Quảng Châu, người nhận ghi mã khách hàng của tôi.)",
      "一共重五百公斤。 (Tổng cộng nặng 500 kg.)",
      "请用纸箱包装。 (Vui lòng đóng gói bằng thùng giấy.)",
      "运费已经付过了。 (Cước vận chuyển đã thanh toán rồi.)"
    ],
    "correctAnswer": "请发到广州白云区的中越专线仓，收货人写我的客户编号。 (Vui lòng gửi đến kho tuyến chuyên biệt Trung - Việt ở quận Bạch Vân Quảng Châu, người nhận ghi mã khách hàng của tôi.)",
    "explanationVi": "Chủ xưởng hỏi '发到哪个物流仓库' (gửi đến kho nào), khách trả lời địa chỉ kho ở quận Bạch Vân Quảng Châu là khớp hoàn toàn."
  },
  {
    "id": "lt-hsk3-advanced-7",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Khiếu nại hàng lỗi thiếu số lượng",
    "audioZh": "女：张老板，昨天收到的那批货我清点了一下，少了十五件，而且有八件拉链坏了。\n男：真不好意思！您拍个照片发我微信，少发的和坏的我们明天马上给您补发过去。",
    "pinyin": "Nǚ: Zhāng lǎobǎn, zuótiān shōudào de nà pī huò wǒ qīngdiǎn le yíxià, shǎo le shíwǔ jiàn, érqiě yǒu bā jiàn lāliàn huài le.\nNán: Zhēn bù hǎoyìsi! Nín pāi gè zhàopiàn fā wǒ Wēixìn, shǎo fā de hé huài de wǒmen míngtiān mǎshàng gěi nín bǔfā guòqù.",
    "transcriptVi": "Nữ: Ông chủ Trương, lô hàng nhận hôm qua tôi kiểm đếm lại thì thấy thiếu 15 chiếc, hơn nữa có 8 chiếc bị hỏng khóa kéo.\nNam: Thật ngại quá! Chị chụp ảnh gửi qua WeChat cho tôi nhé, số hàng giao thiếu và bị hỏng ngày mai chúng tôi sẽ gửi bù ngay cho chị.",
    "questionVi": "Tổng số sản phẩm cần nhà máy gửi bù (cả thiếu và hỏng) là bao nhiêu chiếc?",
    "options": [
      "15 chiếc",
      "23 chiếc (15 chiếc thiếu và 8 chiếc hỏng khóa kéo)",
      "8 chiếc",
      "7 chiếc"
    ],
    "correctAnswer": "23 chiếc (15 chiếc thiếu và 8 chiếc hỏng khóa kéo)",
    "explanationVi": "Thiếu 15 chiếc ('少了十五件') + hỏng 8 chiếc ('八件拉链坏了') = 23 chiếc được gửi bù ('少发的和坏的...补发')."
  },
  {
    "id": "lt-hsk3-advanced-8",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Mặc cả giá sỉ tại chợ 1688",
    "audioZh": "男：林小姐，四十二块已经是我们的出厂最低价了，真的不能再少了。\n女：王总，我们是长期老客户了，这次订三千件，您按四十块整数算，我马上转定金。",
    "pinyin": "Nán: Lín xiǎojiě, sìshí'èr kuài yǐjīng shì wǒmen de chūchǎng zuìdījià le, zhēnde bùnéng zài shǎo le.\nNǚ: Wáng zǒng, wǒmen shì chángqī lǎo kèhù le, zhè cì dìng sānqiān jiàn, nín àn sìshí kuài zhěngshù suàn, wǒ mǎshàng zhuǎn dìngjīn.",
    "transcriptVi": "Nam: Cô Lâm ơi, 42 tệ đã là giá xuất xưởng thấp nhất của chúng tôi rồi, thực sự không giảm thêm được nữa.\nNữ: Giám đốc Vương, chúng tôi là khách quen lâu năm rồi, lần này đặt 3000 chiếc, anh tính tròn 40 tệ đi, tôi chuyển tiền cọc ngay lập tức.",
    "questionVi": "Cô Lâm đề nghị mức đơn giá bao nhiêu cho đơn hàng 3000 chiếc?",
    "options": [
      "42 tệ/chiếc",
      "30 tệ/chiếc",
      "40 tệ/chiếc",
      "45 tệ/chiếc"
    ],
    "correctAnswer": "40 tệ/chiếc",
    "explanationVi": "Cô Lâm trả giá: '您按四十块整数算' (tính tròn 40 tệ)."
  },
  {
    "id": "lt-hsk3-advanced-9",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "So sánh vận chuyển đường bộ và đường biển",
    "audioZh": "女：这批家具从佛山运到河内，走陆运还是走海运划算？\n男：如果客户着急要，走广西凭祥陆运三天就到；如果不急，走海运到海防港能省百分之四十的运费。",
    "pinyin": "Nǚ: Zhè pī jiājù cóng Fóshān yùn dào Hénèi, zǒu lùyùn háishi zǒu hǎiyùn huásuàn?\nNán: Rúguǒ kèhù zháojí yào, zǒu Guǎngxī Píngxiáng lùyùn sān tiān jiù dào; rúguǒ bù jí, zǒu hǎiyùn dào Hǎifáng gǎng néng shěng bǎifēn zhī sìshí de yùnfèi.",
    "transcriptVi": "Nữ: Lô đồ nội thất này vận chuyển từ Phật Sơn về Hà Nội, đi đường bộ hay đường biển có lợi hơn?\nNam: Nếu khách cần gấp thì đi đường bộ qua Bằng Tường Quảng Tây 3 ngày là tới; nếu không gấp thì đi đường biển về cảng Hải Phòng có thể tiết kiệm 40% cước phí.",
    "questionVi": "Ưu điểm của việc vận chuyển bằng đường biển về cảng Hải Phòng là gì?",
    "options": [
      "Chỉ mất 3 ngày là tới nơi",
      "Không cần đóng gói thùng gỗ",
      "Giao thẳng đến cửa hàng mà không qua cảng",
      "Tiết kiệm được 40% cước phí vận chuyển"
    ],
    "correctAnswer": "Tiết kiệm được 40% cước phí vận chuyển",
    "explanationVi": "Bạn nam giải thích: '走海运到海防港能省百分之四十的运费'."
  },
  {
    "id": "lt-hsk3-advanced-10",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Quy trình đặt hàng 1688 về Việt Nam",
    "audioZh": "对于刚开始做中越贸易的新手来说，在1688平台采购非常方便。首先筛选有“实力商家”标志的工厂，先买一两个样品确认质量；满意后再谈批发价，把货发到广州或凭祥的集运仓，物流公司会负责报关并送到越南。",
    "pinyin": "Duìyú gāng kāishǐ zuò Zhōng-Yuè màoyì de xīnshǒu lái shuō, zài Yāo-liù-bā-bā píngtái cǎigòu fēicháng fāngbiàn. Shǒuxiān shāixuǎn yǒu “shílì shāngjiā” biāozhì de gōngchǎng, xiān mǎi yì-liǎng gè yàngpǐn quèrèn zhìliàng; mǎnyì hòu zài tán pīfājià, bǎ huò fā dào Guǎngzhōu huò Píngxiáng de jíyùncāng, wùliú gōngsī huì fùzé bàoguān bìng sòng dào Yuènán.",
    "transcriptVi": "Đối với người mới bắt đầu làm thương mại Trung - Việt, thu mua trên nền tảng 1688 rất thuận tiện. Trước tiên hãy lọc các nhà máy có huy hiệu 'Thương nhân thực lực' (Đầu trâu), mua trước 1-2 mẫu thử để xác nhận chất lượng; sau khi hài lòng mới đàm phán giá sỉ, gửi hàng tới kho gom hàng ở Quảng Châu hoặc Bằng Tường, công ty logistics sẽ phụ trách khai báo hải quan và giao về Việt Nam.",
    "questionVi": "Theo bài nghe, bước đầu tiên nên làm trước khi đặt đơn hàng sỉ số lượng lớn trên 1688 là gì?",
    "options": [
      "Lọc các nhà máy uy tín ('Thương nhân thực lực') và mua 1-2 mẫu thử để kiểm tra chất lượng",
      "Chuyển ngay 100% tiền hàng cho bất kỳ shop nào rẻ nhất",
      "Tự thuê tàu biển sang Trung Quốc chở hàng",
      "Không cần xem mẫu, đặt luôn 5000 chiếc"
    ],
    "correctAnswer": "Lọc các nhà máy uy tín ('Thương nhân thực lực') và mua 1-2 mẫu thử để kiểm tra chất lượng",
    "explanationVi": "Bài hướng dẫn nêu rõ: '首先筛选有“实力商家”标志的工厂，先买一两个样品确认质量'."
  },
  {
    "id": "lt-hsk3-advanced-11",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Lưu ý về nhãn ký hiệu thùng hàng (Shipping Mark - 唛头)",
    "audioZh": "发国际物流的时候，外箱上的“唛头”非常重要。每个箱子外面都必须用防水记号笔写清楚客户的代号、箱号、总箱数以及目的地城市。如果没贴唛头，货物到了仓库很容易和别人的货弄混。",
    "pinyin": "Fā guójì wùliú de shíhou, wàixiāng shàng de “màitóu” fēicháng zhòngyào. Měi gè xiāngzi wàimiàn dōu bìxū yòng fángshuǐ jìhàobǐ xiě qīngchu kèhù de dàihào, xiānghào, zǒng xiāngshù yǐjí mùdìdì chéngshì. Rúguǒ méi tiē màitóu, huòwù dào le cāngkù hěn róngyì hé biérén de huò nònghùn.",
    "transcriptVi": "Khi gửi logistics quốc tế, nhãn ký hiệu hàng (Shipping Mark - 唛头) trên thùng ngoài vô cùng quan trọng. Bên ngoài mỗi thùng đều bắt buộc phải dùng bút dạ chống nước ghi rõ mã khách hàng, số thứ tự thùng, tổng số thùng và thành phố đích. Nếu không dán nhãn唛头, khi hàng đến kho rất dễ bị lẫn với hàng của người khác.",
    "questionVi": "Chuyện gì dễ xảy ra nếu thùng hàng không được ghi hoặc dán nhãn 唛头 (Shipping Mark)?",
    "options": [
      "Hàng sẽ được miễn phí vận chuyển",
      "Hàng đến kho rất dễ bị thất lạc hoặc nhầm lẫn với hàng của khách khác",
      "Thời gian vận chuyển sẽ nhanh gấp đôi",
      "Nhà máy sẽ giảm giá 50%"
    ],
    "correctAnswer": "Hàng đến kho rất dễ bị thất lạc hoặc nhầm lẫn với hàng của khách khác",
    "explanationVi": "Câu cuối cảnh báo: '如果没贴唛头，货物到了仓库很容易和别人的货弄混'."
  },
  {
    "id": "lt-hsk3-advanced-12",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Sự khác biệt giữa hàng có sẵn (现货) và hàng đặt may (定做)",
    "audioZh": "在广州服装批发市场进货时，要注意区分“现货”和“定做”。现货一般当天就能打包发走，适合补货快的网店；而定做可以改颜色和换商标，但生产周期通常需要七到十五天。",
    "pinyin": "Zài Guǎngzhōu fúzhuāng pīfā shìchǎng jìnhuò shí, yào zhùyì qūfēn “xiànhuò” hé “dìngzuò”. Xiànhuò yìbān dāngtiān jiù néng dǎbāo fāzǒu, shìhé bǔhuò kuài de wǎngdiàn; ér dìngzuò kěyǐ gǎi yánsè hé huàn shāngbiāo, dàn shēngchǎn zhōuqī tōngcháng xūyào qī dào shíwǔ tiān.",
    "transcriptVi": "Khi nhập hàng tại chợ đầu mối quần áo Quảng Châu, cần chú ý phân biệt 'hàng có sẵn (现货)' và 'hàng đặt sản xuất (定做)'. Hàng có sẵn thường có thể đóng gói gửi đi ngay trong ngày, phù hợp với các shop online cần bổ sung hàng nhanh; còn hàng đặt sản xuất có thể đổi màu sắc và thay nhãn mác thương hiệu, nhưng chu kỳ sản xuất thường mất từ 7 đến 15 ngày.",
    "questionVi": "Ưu điểm của hình thức đặt sản xuất riêng (定做) là gì?",
    "options": [
      "Có thể lấy hàng ngay lập tức trong ngày",
      "Không cần đặt cọc trước",
      "Có thể thay đổi màu sắc và gắn nhãn mác thương hiệu riêng",
      "Chỉ cần mua 1 chiếc cũng sản xuất"
    ],
    "correctAnswer": "Có thể thay đổi màu sắc và gắn nhãn mác thương hiệu riêng",
    "explanationVi": "Trong bài nêu rõ: '定做可以改颜色和换商标，但生产周期通常需要七到十五天'."
  },
  {
    "id": "lt-hsk4-basic-1",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Lợi ích của việc đặt vé trực tuyến",
    "audioZh": "现在几乎所有博物馆都实行网上实名制预约，既免去了排队之苦，又能控制馆内人数。",
    "pinyin": "Xiànzài jīhū suǒyǒu bówùguǎn dōu shíxíng wǎngshàng shímíngzhì yùyuē, jì miǎnqù le páiduì zhī kǔ, yòu néng kòngzhì guǎnnèi rénshù.",
    "transcriptVi": "Hiện nay hầu như tất cả các bảo tàng đều thực hiện đặt lịch hẹn trực tuyến bằng tên thật, vừa tránh được nỗi khổ xếp hàng, vừa kiểm soát được lượng người trong bảo tàng.",
    "questionVi": "Việc đặt lịch hẹn trực tuyến khi đi bảo tàng mang lại tác dụng gì?",
    "options": [
      "Giúp khách không phải xếp hàng và kiểm soát được lượng người tham quan",
      "Giúp được tặng quà lưu niệm miễn phí",
      "Cho phép chụp ảnh ở mọi khu vực cấm",
      "Không cần mang theo giấy tờ tùy thân"
    ],
    "correctAnswer": "Giúp khách không phải xếp hàng và kiểm soát được lượng người tham quan",
    "explanationVi": "'既免去了排队之苦，又能控制馆内人数' = không phải xếp hàng và kiểm soát số người."
  },
  {
    "id": "lt-hsk4-basic-2",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Tác động của áp lực công việc",
    "audioZh": "长期处于紧张的工作状态不仅会降低效率，还容易引起失眠和焦虑。",
    "pinyin": "Chángqī chǔyú jǐnzhāng de gōngzuò zhuàngtài bùjǐn huì jiàngdī xiàolǜ, hái róngyì yǐnqǐ shīmián hé jiāolǜ.",
    "transcriptVi": "Ở trong trạng thái làm việc căng thẳng lâu dài không chỉ làm giảm hiệu suất mà còn dễ gây mất ngủ và lo âu.",
    "questionVi": "Làm việc căng thẳng trong thời gian dài sẽ dẫn đến hậu quả gì?",
    "options": [
      "Giúp tăng hiệu suất làm việc gấp đôi",
      "Giảm hiệu suất làm việc, dễ gây mất ngủ và lo âu",
      "Giúp ngủ sâu giấc hơn",
      "Giúp tiết kiệm thời gian họp hành"
    ],
    "correctAnswer": "Giảm hiệu suất làm việc, dễ gây mất ngủ và lo âu",
    "explanationVi": "'不仅会降低效率，还容易引起失眠和焦虑'."
  },
  {
    "id": "lt-hsk4-basic-3",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Ý nghĩa của câu nhập gia tùy tục",
    "audioZh": "去国外旅行或工作时，尊重当地的风俗习惯是融入新环境的第一步。",
    "pinyin": "Qù guówài lǚxíng huò gōngzuò shí, zūnzhòng dāngdì de fēngsú xíguàn shì róngrù xīn huánjìng de dì-yī bù.",
    "transcriptVi": "Khi đi du lịch hoặc làm việc ở nước ngoài, tôn trọng phong tục tập quán địa phương là bước đầu tiên để hòa nhập vào môi trường mới.",
    "questionVi": "Theo người nói, bước đầu tiên để hòa nhập vào môi trường mới ở nước ngoài là gì?",
    "options": [
      "Chỉ kết bạn với người cùng quốc籍",
      "Thay đổi hoàn toàn tên gọi của mình",
      "Tôn trọng phong tục tập quán của địa phương",
      "Mua thật nhiều quần áo đắt tiền"
    ],
    "correctAnswer": "Tôn trọng phong tục tập quán của địa phương",
    "explanationVi": "'尊重当地的风俗习惯是融入新环境的第一步'."
  },
  {
    "id": "lt-hsk4-basic-4",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về kế hoạch sau khi tốt nghiệp",
    "audioZh": "你大学毕业以后打算留在北京工作，还是回越南发展？",
    "pinyin": "Nǐ dàxué bìyè yǐhòu dǎsuàn liú zài Běijīng gōngzuò, háishi huí Yuènán fāzhǎn?",
    "transcriptVi": "Sau khi tốt nghiệp đại học, bạn dự định ở lại Bắc Kinh làm việc hay về Việt Nam phát triển?",
    "questionVi": "Đáp án nào trả lời hợp lý nhất?",
    "options": [
      "我学的是国际贸易专业。 (Chuyên ngành tôi học là Thương mại quốc tế.)",
      "北京的秋天最凉快。 (Mùa thu Bắc Kinh mát mẻ nhất.)",
      "毕业典礼在下周五。 (Lễ tốt nghiệp vào thứ Sáu tuần sau.)",
      "我想先在中国的外贸公司实习一年，积累经验后再回河内创业。 (Tôi muốn thực tập 1 năm ở công ty ngoại thương tại Trung Quốc trước, tích lũy kinh nghiệm xong sẽ về Hà Nội khởi nghiệp.)"
    ],
    "correctAnswer": "我想先在中国的外贸公司实习一年，积累经验后再回河内创业。 (Tôi muốn thực tập 1 năm ở công ty ngoại thương tại Trung Quốc trước, tích lũy kinh nghiệm xong sẽ về Hà Nội khởi nghiệp.)",
    "explanationVi": "Câu hỏi lựa chọn dự định sau tốt nghiệp, câu trả lời nêu rõ lộ trình thực tập 1 năm rồi về Hà Nội khởi nghiệp là hoàn toàn phù hợp."
  },
  {
    "id": "lt-hsk4-basic-5",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi cảm nhận về bộ phim tài liệu",
    "audioZh": "昨晚央视播放的那部关于丝绸之路的纪录片，你看了吗？",
    "pinyin": "Zuówǎn Yāngshì bōfàng de nà bù guānyú Sīchóuzhīlù de jìlùpiàn, nǐ kàn le ma?",
    "transcriptVi": "Bộ phim tài liệu về Con đường Tơ lụa phát sóng trên đài CCTV tối qua bạn có xem không?",
    "questionVi": "Câu trả lời nào tự nhiên nhất?",
    "options": [
      "看了，画面拍得非常震撼，让我对西北的历史文化有了新的认识。 (Xem rồi, hình ảnh quay vô cùng ấn tượng, giúp tôi có nhận thức mới về lịch sử văn hóa vùng Tây Bắc.)",
      "电影院在三楼。 (Rạp chiếu phim ở tầng 3.)",
      "这件丝绸衣服很软。 (Chiếc áo lụa này rất mềm.)",
      "我还没买电视机。 (Tôi vẫn chưa mua tivi.)"
    ],
    "correctAnswer": "看了，画面拍得非常震撼，让我对西北的历史文化有了新的认识。 (Xem rồi, hình ảnh quay vô cùng ấn tượng, giúp tôi có nhận thức mới về lịch sử văn hóa vùng Tây Bắc.)",
    "explanationVi": "Hỏi '那部...纪录片，你看了吗？', đáp '看了，画面拍得非常震撼...' là chính xác."
  },
  {
    "id": "lt-hsk4-basic-6",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi cách giải quyết xung đột nhóm",
    "audioZh": "如果团队成员在讨论方案时意见不一致，你通常怎么处理？",
    "pinyin": "Rúguǒ tuánduì chéngyuán zài tǎolùn fāng'àn shí yìjiàn bù yízhì, nǐ tōngcháng zěnme chǔlǐ?",
    "transcriptVi": "Nếu các thành viên trong nhóm không thống nhất ý kiến khi thảo luận phương án, bạn thường xử lý thế nào?",
    "questionVi": "Đáp án nào thể hiện kỹ năng làm việc chuyên nghiệp?",
    "options": [
      "我会马上取消会议。 (Tôi sẽ hủy cuộc họp ngay lập tức.)",
      "我会先耐心听取每个人的理由，再结合数据找出最合适的方案。 (Tôi sẽ kiên nhẫn lắng nghe lý do của từng người trước, sau đó kết hợp dữ liệu để tìm ra phương án phù hợp nhất.)",
      "我今天不参加讨论。 (Hôm nay tôi không tham gia thảo luận.)",
      "这份文件已经打印了。 (Tài liệu này đã in rồi.)"
    ],
    "correctAnswer": "我会先耐心听取每个人的理由，再结合数据找出最合适的方案。 (Tôi sẽ kiên nhẫn lắng nghe lý do của từng người trước, sau đó kết hợp dữ liệu để tìm ra phương án phù hợp nhất.)",
    "explanationVi": "Câu hỏi về cách xử lý bất đồng ý kiến ('意见不一致...怎么处理'), đáp án lắng nghe và dựa trên dữ liệu để chọn phương án tốt nhất là chuẩn xác."
  },
  {
    "id": "lt-hsk4-basic-7",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Thói quen đọc sách điện tử và sách giấy",
    "audioZh": "女：现在大家都在用手机看电子书，你怎么还买这么多纸质书？\n男：电子书虽然携带方便，但我还是喜欢翻阅纸张的感觉，而且在书上做笔记印象更深。",
    "pinyin": "Nǚ: Xiànzài dàjiā dōu zài yòng shǒujī kàn diànzǐshū, nǐ zěnme hái mǎi zhème duō zhǐzhìshū?\nNán: Diànzǐshū suīrán xiédài fāngbiàn, dàn wǒ háishi xǐhuan fānyuè zhǐzhāng de gǎnjué, érqiě zài shū shàng zuò bǐjì yìnxiàng gèng shēn.",
    "transcriptVi": "Nữ: Bây giờ mọi người đều đọc sách điện tử trên điện thoại, sao anh vẫn mua nhiều sách giấy thế?\nNam: Sách điện tử tuy tiện mang theo, nhưng anh vẫn thích cảm giác lật trang giấy, hơn nữa ghi chú trên sách giúp ấn tượng sâu sắc hơn.",
    "questionVi": "Tại sao bạn nam vẫn thích đọc sách giấy hơn sách điện tử?",
    "options": [
      "Vì bạn nam không biết dùng điện thoại thông minh",
      "Vì sách giấy rẻ hơn sách điện tử",
      "Vì thích cảm giác lật trang giấy và ghi chú trực tiếp giúp nhớ sâu hơn",
      "Vì mắt bạn nam không nhìn được màn hình"
    ],
    "correctAnswer": "Vì thích cảm giác lật trang giấy và ghi chú trực tiếp giúp nhớ sâu hơn",
    "explanationVi": "Bạn nam giải thích: '喜欢翻阅纸张的感觉，而且在书上做笔记印象更深'."
  },
  {
    "id": "lt-hsk4-basic-8",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Tư vấn thuê căn hộ gần công ty",
    "audioZh": "男：这套两室一厅虽然采光好，但房租每个月要四千五，超出预算了。\n女：你可以找一个同事合租，这样每个人只需分担两千多，而且走路十分钟就能到公司，省了交通费。",
    "pinyin": "Nán: Zhè tào liǎngshì-yìtīng suīrán cǎiguāng hǎo, dàn fángzū měi gè yuè yào sìqiān wǔ, chāochū yùsuàn le.\nNǚ: Nǐ kěyǐ zhǎo yí gè tóngshì hézū, zhèyàng měi gè rén zhǐ xū fēndān liǎngqiān duō, érqiě zǒulù shí fēnzhōng jiù néng dào gōngsī, shěng le jiāotōngfèi.",
    "transcriptVi": "Nam: Căn hộ 2 phòng ngủ 1 phòng khách này tuy ánh sáng tốt nhưng tiền thuê mỗi tháng 4500 tệ, vượt quá ngân sách rồi.\nNữ: Cậu có thể tìm một đồng nghiệp thuê chung, như vậy mỗi người chỉ cần chia sẻ hơn 2000 tệ, hơn nữa đi bộ 10 phút là tới công ty, tiết kiệm được tiền đi lại.",
    "questionVi": "Bạn nữ đưa ra lời khuyên gì cho bạn nam?",
    "options": [
      "Tìm một căn hộ khác ở ngoại ô xa công ty",
      "Vay tiền ngân hàng để mua đứt căn hộ",
      "Xin giám đốc tăng lương ngay lập tức",
      "Tìm một đồng nghiệp thuê chung để chia đôi tiền nhà và tiết kiệm chi phí đi lại"
    ],
    "correctAnswer": "Tìm một đồng nghiệp thuê chung để chia đôi tiền nhà và tiết kiệm chi phí đi lại",
    "explanationVi": "Bạn nữ khuyên: '你可以找一个同事合租，这样每个人只需分担两千多...'."
  },
  {
    "id": "lt-hsk4-basic-9",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Kinh nghiệm phỏng vấn xin việc",
    "audioZh": "女：下周一我要去一家中资企业面试，心里特别紧张。\n男：别担心，你只要提前了解清楚那家公司的业务范围，面试时保持微笑和自信，一定没问题。",
    "pinyin": "Nǚ: Xià zhōuyī wǒ yào qù yì jiā Zhōngzī qǐyè miànshì, xīnlǐ tèbié jǐnzhāng.\nNán: Bié dānxīn, nǐ zhǐyào tíqián liǎojiě qīngchu nà jiā gōngsī de yèwù fànwéi, miànshì shí bǎochí wēixiào hé zìxìn, yídìng méi wèntí.",
    "transcriptVi": "Nữ: Thứ Hai tuần sau mình phải đi phỏng vấn ở một doanh nghiệp vốn Trung Quốc, trong lòng hồi hộp quá.\nNam: Đừng lo, cậu chỉ cần tìm hiểu kỹ phạm vi kinh doanh của công ty đó trước, khi phỏng vấn giữ nụ cười và sự tự tin thì nhất định không vấn đề gì.",
    "questionVi": "Bạn nam khuyên bạn nữ cần chuẩn bị gì trước buổi phỏng vấn?",
    "options": [
      "Tìm hiểu rõ phạm vi kinh doanh của công ty và giữ sự tự tin, mỉm cười",
      "Học thuộc lòng toàn bộ cuốn từ điển thương mại",
      "Mua một bộ vest thật đắt tiền",
      "Đến sớm trước 3 tiếng đồng hồ"
    ],
    "correctAnswer": "Tìm hiểu rõ phạm vi kinh doanh của công ty và giữ sự tự tin, mỉm cười",
    "explanationVi": "Lời khuyên: '提前了解清楚那家公司的业务范围，面试时保持微笑和自信'."
  },
  {
    "id": "lt-hsk4-basic-10",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Sự thay đổi của thanh toán không tiền mặt",
    "audioZh": "十年前人们出门必须带钱包和银行卡，而现在移动支付已经渗透到生活的每一个角落。无论是在大型商场购物，还是在路边摊买一个五块钱的煎饼，只需用手机扫一扫二维码，两秒钟就能完成支付。",
    "pinyin": "Shí nián qián rénmen chūmén bìxū dài qiánbāo hé yínhángkǎ, ér xiànzài yídòng zhīfù yǐjīng shèntòu dào shēnghuó de měi yí gè jiǎoluò. Wúlùn shì zài dàxíng shāngchǎng gòuwù, háishi zài lùbiāntān mǎi yí gè wǔ kuài qián de jiānbǐng, zhǐ xū yòng shǒujī sǎoyìsǎo èrwéimǎ, liǎng miǎozhōng jiù néng wánchéng zhīfù.",
    "transcriptVi": "Mười năm trước mọi người ra ngoài bắt buộc phải mang ví tiền và thẻ ngân hàng, còn hiện nay thanh toán di động đã thâm nhập vào mọi ngóc ngách của cuộc sống. Bất kể là mua sắm ở trung tâm thương mại lớn hay mua một chiếc bánh kếp 5 tệ ở quán vỉa hè, chỉ cần dùng điện thoại quét mã QR, 2 giây là hoàn tất thanh toán.",
    "questionVi": "Đoạn văn trên chủ yếu nói về hiện tượng gì?",
    "options": [
      "Cách làm món bánh kếp truyền thống ở vỉa hè",
      "Sự phổ biến và tiện lợi của thanh toán di động bằng mã QR trong đời sống hiện đại",
      "Thủ tục mở thẻ ngân hàng ở Trung Quốc",
      "Lịch sử phát triển của trung tâm thương mại"
    ],
    "correctAnswer": "Sự phổ biến và tiện lợi của thanh toán di động bằng mã QR trong đời sống hiện đại",
    "explanationVi": "Đoạn văn xoay quanh '移动支付已经渗透到生活的每一个角落... 扫一扫二维码'."
  },
  {
    "id": "lt-hsk4-basic-11",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Tâm lý trì hoãn của giới trẻ",
    "audioZh": "许多年轻人都有“拖延症”，明明知道一件工作很重要，却总是等到最后一刻才匆忙动手。心理学家建议，可以把一个大任务拆分成几个容易完成的小目标，每完成一步就给自己一点小奖励，这样能有效克服拖延。",
    "pinyin": "Xǔduō niánqīngrén dōu yǒu “tuōyánzhèng”, míngmíng zhīdào yí jiàn gōngzuò hěn zhòngyào, què zǒngshì děngdào zuìhòu yí kè cái cōngmáng dòngshǒu. Xīnlǐxuéjiā jiànyì, kěyǐ bǎ yí gè dà rènwu chāifēn chéng jǐ gè róngyì wánchéng de xiǎo mùbiāo, měi wánchéng yí bù jiù gěi zìjǐ yìdiǎn xiǎo jiǎnglì, zhèyàng néng yǒuxiào kèfú tuōyán.",
    "transcriptVi": "Nhiều người trẻ mắc 'chứng trì hoãn', rõ ràng biết một công việc rất quan trọng nhưng luôn đợi đến phút chót mới vội vàng bắt tay vào làm. Các nhà tâm lý học khuyên rằng có thể chia nhỏ một nhiệm vụ lớn thành vài mục tiêu nhỏ dễ hoàn thành, mỗi khi xong một bước lại tự thưởng cho mình một chút, như vậy sẽ khắc phục sự trì hoãn hiệu quả.",
    "questionVi": "Các nhà tâm lý học khuyên nên làm thế nào để khắc phục chứng trì hoãn?",
    "options": [
      "Đợi đến đêm cuối cùng mới thức trắng đêm để làm",
      "Nhờ đồng nghiệp làm hộ toàn bộ công việc",
      "Chia nhiệm vụ lớn thành các mục tiêu nhỏ dễ làm và tự thưởng sau mỗi bước hoàn thành",
      "Từ bỏ những công việc khó khăn"
    ],
    "correctAnswer": "Chia nhiệm vụ lớn thành các mục tiêu nhỏ dễ làm và tự thưởng sau mỗi bước hoàn thành",
    "explanationVi": "Trong bài nêu rõ: '把一个大任务拆分成几个容易完成的小目标，每完成一步就给自己一点小奖励'."
  },
  {
    "id": "lt-hsk4-basic-12",
    "level": "HSK4",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Du lịch xanh và bảo vệ môi trường",
    "audioZh": "随着环保意识的增强，越来越多的人在旅行时选择“绿色出行”。他们自带牙刷和毛巾，尽量不使用酒店的一次性塑料用品；在景区游览时，随身携带垃圾袋，不留下任何一片垃圾。",
    "pinyin": "Suízhe huánbǎo yìshi de zēngqiáng, yuèláiyuè duō de rén zài lǚxíng shí xuǎnzé “lǜsè chūxíng”. Tāmen zìdài yáshuā hé máojīn, jìnliàng bù shǐyòng jiǔdiàn de yícìxìng sùliào yòngpǐn; zài jǐngqū yóulǎn shí, suíshēn xiédài lājīdài, bù liúxià rènhé yí piàn lājī.",
    "transcriptVi": "Cùng với sự nâng cao ý thức bảo vệ môi trường, ngày càng nhiều người chọn 'du lịch xanh' khi đi du lịch. Họ tự mang theo bàn chải đánh răng và khăn mặt, cố gắng không dùng đồ nhựa dùng một lần của khách sạn; khi tham quan tại khu du lịch thì mang theo túi đựng rác bên mình, không để lại bất kỳ mảnh rác nào.",
    "questionVi": "Hành động nào dưới đây thuộc lối sống 'du lịch xanh' được nhắc tới trong bài?",
    "options": [
      "Chỉ đi du lịch bằng máy bay hạng thương gia",
      "Mua thật nhiều đồ nhựa lưu niệm tại khu du lịch",
      "Yêu cầu khách sạn thay khăn mới mỗi giờ",
      "Tự mang bàn chải, khăn mặt và hạn chế dùng đồ nhựa dùng một lần của khách sạn"
    ],
    "correctAnswer": "Tự mang bàn chải, khăn mặt và hạn chế dùng đồ nhựa dùng một lần của khách sạn",
    "explanationVi": "Bài nghe nêu: '自带牙刷和毛巾，尽量不使用酒店的一次性塑料用品'."
  },
  {
    "id": "lt-hsk4-advanced-1",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Chứng từ khai báo hải quan xuất khẩu",
    "audioZh": "请各部门注意，出口到越南的这批机械设备必须附上东盟原产地证书Form E，以便客户享受关税优惠。",
    "pinyin": "Qǐng gè bùmén zhùyì, chūkǒu dào Yuènán de zhè pī jīxiè shèbèi bìxū fùshàng Dōngméng yuánchǎndì zhèngshū Form E, yǐbiàn kèhù xiǎngshòu guānshuì yōuhuì.",
    "transcriptVi": "Xin các bộ phận chú ý, lô thiết bị máy móc xuất khẩu sang Việt Nam này bắt buộc phải kèm theo Giấy chứng nhận xuất xứ ASEAN (C/O Form E) để khách hàng được hưởng ưu đãi thuế quan.",
    "questionVi": "Tác dụng của Giấy chứng nhận xuất xứ C/O Form E trong lô hàng này là gì?",
    "options": [
      "Giúp khách hàng nhập khẩu tại Việt Nam được hưởng ưu đãi giảm thuế quan",
      "Giúp tàu biển chạy nhanh hơn",
      "Dùng để thay thế hoàn toàn hợp đồng mua bán",
      "Miễn kiểm tra chất lượng tại nhà máy"
    ],
    "correctAnswer": "Giúp khách hàng nhập khẩu tại Việt Nam được hưởng ưu đãi giảm thuế quan",
    "explanationVi": "'以便客户享受关税优惠' = để khách hàng hưởng ưu đãi thuế quan."
  },
  {
    "id": "lt-hsk4-advanced-2",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Báo giá theo điều khoản FOB",
    "audioZh": "这份报价单是按FOB深圳美金价计算的，不含深圳港到海防港的海运费和保险费。",
    "pinyin": "Zhè fèn bàojiàdān shì àn FOB Shēnzhèn Měijīnjià jìsuàn de, bù hán Shēnzhèngǎng dào Hǎifánggǎng de hǎiyùnfèi hé bǎoxiǎnfèi.",
    "transcriptVi": "Bảng báo giá này được tính theo giá USD điều khoản FOB Thâm Quyến, không bao gồm cước vận tải biển và phí bảo hiểm từ cảng Thâm Quyến đến cảng Hải Phòng.",
    "questionVi": "Theo điều khoản FOB Thâm Quyến được nêu, chi phí nào KHÔNG nằm trong bảng báo giá?",
    "options": [
      "Chi phí sản xuất hàng hóa tại nhà máy",
      "Cước vận tải biển và phí bảo hiểm từ Thâm Quyến đến Hải Phòng",
      "Chi phí đóng gói thùng carton",
      "Chi phí vận chuyển từ xưởng ra cảng Thâm Quyến"
    ],
    "correctAnswer": "Cước vận tải biển và phí bảo hiểm từ Thâm Quyến đến Hải Phòng",
    "explanationVi": "'不含深圳港到海防港的海运费和保险费' = không bao gồm cước biển và bảo hiểm tới Hải Phòng."
  },
  {
    "id": "lt-hsk4-advanced-3",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Kiểm soát tỷ lệ hàng lỗi (次品率)",
    "audioZh": "根据合同规定，整批货物的次品率不得超过千分之五，否则买方有权要求退货或赔偿。",
    "pinyin": "Gēnjù hétong guīdìng, zhěng pī huòwù de cìpǐnlǜ bùdé chāoguò qiānfēn zhī wǔ, fǒuzé mǎifāng yǒuquán yāoqiú tuìhuò huò péicháng.",
    "transcriptVi": "Theo quy định hợp đồng, tỷ lệ hàng lỗi của toàn bộ lô hàng không được vượt quá 0,5% (5 phần nghìn), nếu không bên mua có quyền yêu cầu trả hàng hoặc bồi thường.",
    "questionVi": "Tỷ lệ hàng lỗi tối đa cho phép theo hợp đồng là bao nhiêu?",
    "options": [
      "Không vượt quá 5 phần trăm (5%)",
      "Không vượt quá 10 phần trăm (10%)",
      "Không vượt quá 5 phần nghìn (0,5%)",
      "Không cho phép bất kỳ sản phẩm lỗi nào"
    ],
    "correctAnswer": "Không vượt quá 5 phần nghìn (0,5%)",
    "explanationVi": "'不得超过千分之五' = không được vượt quá 5 phần nghìn (0.5%)."
  },
  {
    "id": "lt-hsk4-advanced-4",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi tiến độ thông quan tại cửa khẩu",
    "audioZh": "刘经理，昨天发往友谊关的那两车布料已经顺利通关了吗？",
    "pinyin": "Liú jīnglǐ, zuótiān fāwǎng Yǒuyìguān de nà liǎng chē bùliào yǐjīng shùnlì tōngguān le ma?",
    "transcriptVi": "Giám đốc Lưu, hai xe vải gửi đi Hữu Nghị Quan hôm qua đã thông quan thuận lợi chưa?",
    "questionVi": "Đáp án nào phù hợp nhất?",
    "options": [
      "这批布料是纯棉的。 (Lô vải này là 100% cotton.)",
      "友谊关在广西凭祥。 (Hữu Nghị Quan ở Bằng Tường Quảng Tây.)",
      "我们下个月再去参展。 (Tháng sau chúng ta mới đi dự triển lãm.)",
      "今天上午十点已经完成海关查验放行了，预计今晚就能到达河内仓库。 (10 giờ sáng nay đã hoàn tất kiểm hóa hải quan và thông hành rồi, dự kiến tối nay sẽ tới kho Hà Nội.)"
    ],
    "correctAnswer": "今天上午十点已经完成海关查验放行了，预计今晚就能到达河内仓库。 (10 giờ sáng nay đã hoàn tất kiểm hóa hải quan và thông hành rồi, dự kiến tối nay sẽ tới kho Hà Nội.)",
    "explanationVi": "Câu hỏi về tình trạng thông quan ('已经顺利通关了吗'), trả lời '已经完成海关查验放行了...' là chính xác."
  },
  {
    "id": "lt-hsk4-advanced-5",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về nguyên nhân tăng giá xuất xưởng",
    "audioZh": "为什么这个季度的包装纸箱报价比上个季度涨了百分之八？",
    "pinyin": "Wèishénme zhège jìdù de bāozhuāng zhǐxiāng bàojià bǐ shàng gè jìdù zhǎng le bǎifēn zhī bā?",
    "transcriptVi": "Tại sao báo giá thùng giấy đóng gói quý này lại tăng 8% so với quý trước?",
    "questionVi": "Câu trả lời nào giải thích đúng góc độ chuỗi cung ứng?",
    "options": [
      "因为最近原纸材料价格大幅上涨，而且环保加工成本也提高了。 (Vì gần đây giá nguyên liệu giấy thô tăng mạnh, hơn nữa chi phí gia công bảo vệ môi trường cũng tăng.)",
      "纸箱上印了公司的商标。 (Trên thùng giấy có in logo công ty.)",
      "我们仓库还有三百个纸箱。 (Kho chúng tôi vẫn còn 300 thùng giấy.)",
      "这批货走空运太贵了。 (Lô hàng này đi đường hàng không đắt quá.)"
    ],
    "correctAnswer": "因为最近原纸材料价格大幅上涨，而且环保加工成本也提高了。 (Vì gần đây giá nguyên liệu giấy thô tăng mạnh, hơn nữa chi phí gia công bảo vệ môi trường cũng tăng.)",
    "explanationVi": "Hỏi lý do báo giá tăng 8%, đáp án giải thích do giá nguyên liệu giấy thô ('原纸材料价格大幅上涨') và chi phí gia công tăng là hợp lý nhất."
  },
  {
    "id": "lt-hsk4-advanced-6",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về dịch vụ kho ngoại quan (海外仓)",
    "audioZh": "如果把货提前备在你们的胡志明市海外仓，消费者下单后多久能收到？",
    "pinyin": "Rúguǒ bǎ huò tíqián bèi zài nǐmen de Húzhìmíng shì hǎiwàicāng, xiāofèizhě xiàdān hòu duōjiǔ néng shōudào?",
    "transcriptVi": "Nếu chuẩn bị sẵn hàng tại kho ngoại quan TP.HCM của các bạn, sau khi người tiêu dùng đặt đơn thì bao lâu có thể nhận được?",
    "questionVi": "Đáp án nào đúng với nghiệp vụ thương mại điện tử xuyên biên giới?",
    "options": [
      "海外仓的面积有三千平方米。 (Diện tích kho ngoại quan là 3000 mét vuông.)",
      "同城当天就能送达，越南其他省市一般两到三天就能签收。 (Cùng thành phố thì giao tới ngay trong ngày, các tỉnh thành khác ở Việt Nam thường 2 đến 3 ngày là ký nhận được.)",
      "我们支持微信和支付宝。 (Chúng tôi hỗ trợ WeChat và Alipay.)",
      "这批货还没有生产完。 (Lô hàng này vẫn chưa sản xuất xong.)"
    ],
    "correctAnswer": "同城当天就能送达，越南其他省市一般两到三天就能签收。 (Cùng thành phố thì giao tới ngay trong ngày, các tỉnh thành khác ở Việt Nam thường 2 đến 3 ngày là ký nhận được.)",
    "explanationVi": "Câu hỏi hỏi thời gian giao hàng tới người tiêu dùng ('下单后多久能收到'), trả lời '同城当天就能送达，越南其他省市一般两到三天...' là chuẩn xác."
  },
  {
    "id": "lt-hsk4-advanced-7",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Xử lý sai sót trên hóa đơn thương mại",
    "audioZh": "女：小王，客户刚打来电话说商业发票上的货物品名写错了，会影响报关。\n男：我马上修改并重新盖章，十分钟内把扫描件发给他们的报关行。",
    "pinyin": "Nǚ: Xiǎo Wáng, kèhù gāng dǎ lái diànhuà shuō shāngyè fāpiào shàng de huòwù pǐnmíng xiě cuò le, huì yǐngxiǎng bàoguān.\nNán: Wǒ mǎshàng xiūgǎi bìng chóngxīn gàizhāng, shí fēnzhōng nèi bǎ sǎomiáojiàn fā gěi tāmen de bàoguānháng.",
    "transcriptVi": "Nữ: Tiểu Vương, khách hàng vừa gọi điện báo tên hàng hóa trên hóa đơn thương mại bị viết sai rồi, sẽ ảnh hưởng đến việc khai báo hải quan.\nNam: Em sẽ sửa ngay và đóng dấu lại, trong vòng 10 phút sẽ gửi bản scan cho đại lý hải quan của họ.",
    "questionVi": "Tiểu Vương sẽ xử lý sai sót trên hóa đơn thương mại như thế nào?",
    "options": [
      "Đợi tuần sau gửi bản giấy qua bưu điện",
      "Yêu cầu khách hàng tự sửa bằng bút bi",
      "Sửa lại ngay, đóng dấu lại và gửi bản scan cho đại lý hải quan trong 10 phút",
      "Hủy bỏ toàn bộ lô hàng"
    ],
    "correctAnswer": "Sửa lại ngay, đóng dấu lại và gửi bản scan cho đại lý hải quan trong 10 phút",
    "explanationVi": "Tiểu Vương nói: '我马上修改并重新盖章，十分钟内把扫描件发给他们的报关行'."
  },
  {
    "id": "lt-hsk4-advanced-8",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Chiến lược livestream bán hàng trên TikTok",
    "audioZh": "男：我们上个月在越南TikTok上尝试了直播带货，销量比传统广告翻了一倍。\n女：太棒了！如果能找懂中文又了解越南潮流的本土主播合作，转化率肯定还会更高。",
    "pinyin": "Nán: Wǒmen shàng gè yuè zài Yuènán TikTok shàng chángshì le zhíbō dàihuò, xiāoliàng bǐ chuántǒng guǎnggào fān le yí bèi.\nNǚ: Tài bàng le! Rúguǒ néng zhǎo dǒng Zhōngwén yòu liǎojiě Yuènán cháoliú de běntǔ zhǔbō hézuò, zhuǎnhuàlǜ kěndìng hái huì gèng gāo.",
    "transcriptVi": "Nam: Tháng trước chúng tôi đã thử nghiệm livestream bán hàng trên TikTok Việt Nam, doanh số tăng gấp đôi so với quảng cáo truyền thống.\nNữ: Tuyệt quá! Nếu có thể tìm các streamer bản địa vừa biết tiếng Trung vừa hiểu xu hướng Việt Nam để hợp tác thì tỷ lệ chuyển đổi chắc chắn sẽ còn cao hơn nữa.",
    "questionVi": "Bạn nữ gợi ý giải pháp gì để nâng cao hơn nữa tỷ lệ chuyển đổi (转化率)?",
    "options": [
      "Tăng giá bán sản phẩm lên gấp đôi",
      "Ngừng hoàn toàn việc bán hàng online",
      "Chỉ chạy quảng cáo trên báo giấy",
      "Hợp tác với các streamer bản địa vừa biết tiếng Trung vừa am hiểu xu hướng tại Việt Nam"
    ],
    "correctAnswer": "Hợp tác với các streamer bản địa vừa biết tiếng Trung vừa am hiểu xu hướng tại Việt Nam",
    "explanationVi": "Bạn nữ đề xuất: '找懂中文又了解越南潮流的本土主播合作，转化率肯定还会更高'."
  },
  {
    "id": "lt-hsk4-advanced-9",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Thương lượng bồi thường giao hàng trễ",
    "audioZh": "女：陈总，按照合同昨天就应该装船，现在推迟了一周，我们面临终端超市的罚款。\n男：实在抱歉，因为台风港口停航了三天。这批货的陆运费由我方全额承担，另外下批订单给您九五折补偿。",
    "pinyin": "Nǚ: Chén zǒng, ànzhào hétong zuótiān jiù yīnggāi zhuāngchuán, xiànzài tuīchí le yì zhōu, wǒmen miànlín zhōngduān chāoshì de fákuǎn.\nNán: Shízài bàoqiàn, yīnwèi táifēng gǎngkǒu tíngháng le sān tiān. Zhè pī huò de lùyùnfèi yóu wǒfāng quán'é chéngdān, lìngwài xià pī dìngdān gěi nín jiǔwǔ zhé bǔcháng.",
    "transcriptVi": "Nữ: Giám đốc Trần, theo hợp đồng hôm qua đã phải xếp hàng lên tàu, giờ bị trễ 1 tuần khiến chúng tôi đối mặt với khoản phạt từ siêu thị đầu cuối.\nNam: Thực sự xin lỗi, do bão nên cảng phải ngừng tàu 3 ngày. Cước vận chuyển đường bộ của lô hàng này bên tôi sẽ chịu toàn bộ, ngoài ra đơn hàng tới sẽ chiết khấu 5% (tính giá 95%) để bù đắp cho chị.",
    "questionVi": "Giám đốc Trần đưa ra phương án đền bù nào cho khách hàng?",
    "options": [
      "Chịu toàn bộ cước đường bộ lô hàng này và giảm giá 5% (95折) cho đơn hàng tiếp theo",
      "Từ chối bồi thường vì lý do thời tiết",
      "Tặng miễn phí toàn bộ lô hàng",
      "Hủy hợp đồng hợp tác"
    ],
    "correctAnswer": "Chịu toàn bộ cước đường bộ lô hàng này và giảm giá 5% (95折) cho đơn hàng tiếp theo",
    "explanationVi": "Giám đốc Trần cam kết: '这批货的陆运费由我方全额承担，另外下批订单给您九五折补偿'."
  },
  {
    "id": "lt-hsk4-advanced-10",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Xu hướng xuất khẩu nông sản Việt Nam sang Trung Quốc",
    "audioZh": "近年来，越南的榴莲、火龙果和咖啡等优质农产品在中国市场越来越受欢迎。得益于中越跨境冷链物流的升级以及通关流程的简化，新鲜采摘的越南榴莲最快只需四十八小时就能摆上北京和上海超市的货架。",
    "pinyin": "Jìnnián lái, Yuènán de liúlián, huǒlóngguǒ hé kāfēi děng yōuzhì nóngchǎnpǐn zài Zhōngguó shìchǎng yuèláiyuè shòu huānyíng. Déyì yú Zhōng-Yuè kuàjìng lěngliàn wùliú de shēngjí yǐjí tōngguān liúchéng de jiǎnhuà, xīnxiān cǎizhāi de Yuènán liúlián zuì kuài zhǐ xū sìshíbā xiǎoshí jiù néng bǎishàng Běijīng hé Shànghǎi chāoshì de huòjià.",
    "transcriptVi": "Những năm gần đây, các nông sản chất lượng cao của Việt Nam như sầu riêng, thanh long và cà phê ngày càng được ưa chuộng tại thị trường Trung Quốc. Nhờ sự nâng cấp của logistics chuỗi lạnh xuyên biên giới Trung - Việt cũng như việc đơn giản hóa quy trình thông quan, sầu riêng Việt Nam mới hái nhanh nhất chỉ mất 48 tiếng đã có thể bày lên kệ siêu thị ở Bắc Kinh và Thượng Hải.",
    "questionVi": "Nhờ yếu tố nào mà sầu riêng tươi Việt Nam có thể lên kệ siêu thị Bắc Kinh, Thượng Hải chỉ sau 48 giờ?",
    "options": [
      "Nhờ trồng sầu riêng ngay tại Bắc Kinh",
      "Nhờ nâng cấp logistics chuỗi lạnh xuyên biên giới và đơn giản hóa quy trình thông quan",
      "Nhờ giảm giá bán xuống một nửa",
      "Nhờ vận chuyển bằng tàu thủy thường không cần bảo quản lạnh"
    ],
    "correctAnswer": "Nhờ nâng cấp logistics chuỗi lạnh xuyên biên giới và đơn giản hóa quy trình thông quan",
    "explanationVi": "Bài nghe nêu rõ: '得益于中越跨境冷链物流的升级以及通关流程的简化'."
  },
  {
    "id": "lt-hsk4-advanced-11",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Quản lý tồn kho bằng hệ thống ERP",
    "audioZh": "为了避免仓库积压或者热门商品断货，我们公司今年引入了智能库存管理系统。每当某款商品的库存低于安全线时，系统就会自动向采购部门发出预警，并根据历史销售数据生成最佳补货方案，使库存周转效率提高了百分之三十五。",
    "pinyin": "Wèile bìmiǎn cāngkù jīyā huòzhě rèmén shāngpǐn duànhuò, wǒmen gōngsī jīnnián yǐnrù le zhìnéng kùcún guǎnlǐ xìtǒng. Měidāng mǒu kuǎn shāngpǐn de kùcún dīyú ānquánxiàn shí, xìtǒng jiù huì zìdòng xiàng cǎigòu bùmén fāchū yùjǐng, bìng gēnjù lìshǐ xiāoshòu shùjù shēngchéng zuìjiā bǔhuò fāng'àn, shǐ kùcún zhōuzhuǎn xiàolǜ tígāo le bǎifēn zhī sānshíwǔ.",
    "transcriptVi": "Để tránh ứ đọng hàng trong kho hoặc đứt hàng các sản phẩm bán chạy, năm nay công ty chúng tôi đã đưa vào hệ thống quản lý tồn kho thông minh. Mỗi khi lượng tồn kho của một mặt hàng thấp hơn ngưỡng an toàn, hệ thống sẽ tự động phát cảnh báo tới bộ phận thu mua và tạo phương án bổ sung hàng tối ưu dựa trên dữ liệu bán hàng lịch sử, giúp hiệu suất quay vòng tồn kho tăng 35%.",
    "questionVi": "Hệ thống quản lý tồn kho thông minh đã giúp hiệu suất quay vòng tồn kho của công ty tăng bao nhiêu phần trăm?",
    "options": [
      "15%",
      "50%",
      "35%",
      "25%"
    ],
    "correctAnswer": "35%",
    "explanationVi": "Câu cuối nêu rõ: '使库存周转效率提高了百分之三十五' (tăng 35%)."
  },
  {
    "id": "lt-hsk4-advanced-12",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Tầm quan trọng của dịch vụ hậu mãi",
    "audioZh": "在竞争激烈的电商行业，把产品卖出去只是第一步，优质的售后服务才是留住老客户的关键。数据显示，能够提供七天无理由退换货、并在三分钟内响应客户咨询的店铺，其客户复购率比普通店铺高出两倍以上。",
    "pinyin": "Zài jìngzhēng jīliè de diànshāng hángyè, bǎ chǎnpǐn mài chūqù zhǐshì dì-yī bù, yōuzhì de shòuhòu fúwù cái shì liúzhù lǎo kèhù de guānjiàn. Shùjù xiǎnshì, nénggòu tígōng qī tiān wúlǐyóu tuìhuànhuò, bìng zài sān fēnzhōng nèi xiǎngyìng kèhù zīxún de diànpù, qí kèhù fùgòulǜ bǐ pǔtōng diànpù gāochū liǎng bèi yǐshàng.",
    "transcriptVi": "Trong ngành thương mại điện tử cạnh tranh khốc liệt, bán được sản phẩm ra mới chỉ là bước đầu tiên, dịch vụ hậu mãi chất lượng cao mới là chìa khóa giữ chân khách hàng cũ. Dữ liệu cho thấy những gian hàng cung cấp đổi trả không cần lý do trong 7 ngày và phản hồi tư vấn khách hàng trong vòng 3 phút có tỷ lệ khách mua lại cao hơn gấp đôi so với gian hàng bình thường.",
    "questionVi": "Theo dữ liệu trong bài, những gian hàng nào có tỷ lệ khách mua lại (复购率) cao gấp đôi gian hàng thường?",
    "options": [
      "Gian hàng không bao giờ cho phép khách trả lại hàng",
      "Gian hàng chỉ bán một mặt hàng duy nhất",
      "Gian hàng tắt chức năng nhắn tin trực tuyến",
      "Gian hàng hỗ trợ đổi trả 7 ngày không cần lý do và phản hồi tư vấn trong vòng 3 phút"
    ],
    "correctAnswer": "Gian hàng hỗ trợ đổi trả 7 ngày không cần lý do và phản hồi tư vấn trong vòng 3 phút",
    "explanationVi": "Trong bài nêu rõ: '能够提供七天无理由退换货、并在三分钟内响应客户咨询的店铺，其客户复购率比普通店铺高出两倍以上'."
  },
  {
    "id": "lt-hsk5-basic-1",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Ứng dụng AI trong y tế",
    "audioZh": "人工智能辅助诊断系统能够大幅缩短医生看片的时间，并提高早期病变的识别准确率。",
    "pinyin": "Réngōng zhìnéng fǔzhù zhěnduàn xìtǒng nénggòu dàfú suōduǎn yīshēng kànpiān de shíjiān, bìng tígāo zǎoqī bìngbiàn de shíbié zhǔnquèlǜ.",
    "transcriptVi": "Hệ thống chẩn đoán hỗ trợ bởi trí tuệ nhân tạo có thể rút ngắn đáng kể thời gian bác sĩ đọc phim chụp và nâng cao tỷ lệ nhận diện chính xác các tổn thương bệnh lý giai đoạn sớm.",
    "questionVi": "Hệ thống chẩn đoán hỗ trợ bởi AI mang lại lợi ích gì cho bác sĩ?",
    "options": [
      "Thay thế hoàn toàn bác sĩ phẫu thuật",
      "Rút ngắn thời gian đọc phim và tăng độ chính xác khi phát hiện bệnh giai đoạn sớm",
      "Giảm giá thuốc xuống bằng không",
      "Giúp bệnh nhân không cần đến bệnh viện kiểm tra"
    ],
    "correctAnswer": "Rút ngắn thời gian đọc phim và tăng độ chính xác khi phát hiện bệnh giai đoạn sớm",
    "explanationVi": "Trong câu nêu rõ: '大幅缩短医生看片的时间，并提高早期病变的识别准确率'."
  },
  {
    "id": "lt-hsk5-basic-2",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Giá trị của tư duy độc lập",
    "audioZh": "在信息唾手可得的互联网时代，具备独立思考与批判性思维比单纯背诵知识更为迫切。",
    "pinyin": "Zài xìnxī tuòshǒukědé de hùliánwǎng shídài, jùbèi dúlì sīkǎo yǔ pīpànxìng sīwéi bǐ dānchún bèisòng zhīshi gèngwéi pòqiè.",
    "transcriptVi": "Trong kỷ nguyên Internet nơi thông tin dễ dàng có được trong tầm tay, việc trang bị tư duy độc lập và tư duy phản biện cấp thiết hơn nhiều so với việc chỉ học thuộc lòng kiến thức.",
    "questionVi": "Theo người nói, năng lực nào quan trọng hơn việc học thuộc lòng trong thời đại Internet?",
    "options": [
      "Tốc độ gõ bàn phím máy tính",
      "Khả năng học thuộc lòng danh bạ điện thoại",
      "Tư duy độc lập và tư duy phản biện",
      "Kỹ năng sao chép bài viết trên mạng"
    ],
    "correctAnswer": "Tư duy độc lập và tư duy phản biện",
    "explanationVi": "'具备独立思考与批判性思维比单纯背诵知识更为迫切'."
  },
  {
    "id": "lt-hsk5-basic-3",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Xu hướng xe năng lượng mới",
    "audioZh": "随着电池续航技术的突破以及充电桩网络的完善，新能源汽车的市场占有率持续攀升。",
    "pinyin": "Suízhe diànchí xùháng jìshù de tūpò yǐjí chōngdiànzhuāng wǎngluò de wánshàn, xīn néngyuán qìchē de shìchǎng zhànyǒulǜ chíxù pānshēng.",
    "transcriptVi": "Cùng với sự đột phá của công nghệ thời lượng pin và sự hoàn thiện của mạng lưới trạm sạc, thị phần xe ô tô năng lượng mới liên tục tăng cao.",
    "questionVi": "Hai yếu tố nào thúc đẩy thị phần xe năng lượng mới liên tục tăng?",
    "options": [
      "Giá xăng giảm xuống mức thấp kỷ lục",
      "Các thành phố cấm hoàn toàn xe đạp",
      "Nhà sản xuất tặng xe miễn phí",
      "Đột phá công nghệ thời lượng pin và hoàn thiện mạng lưới trạm sạc"
    ],
    "correctAnswer": "Đột phá công nghệ thời lượng pin và hoàn thiện mạng lưới trạm sạc",
    "explanationVi": "'随着电池续航技术的突破以及充电桩网络的完善...'."
  },
  {
    "id": "lt-hsk5-basic-4",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về cách giáo dục con cái",
    "audioZh": "当孩子在学习上遇到挫折想要放弃时，家长应该采取怎样的态度？",
    "pinyin": "Dāng háizi zài xuéxí shàng yùdào cuòzhé xiǎngyào fàngqì shí, jiāzhǎng yīnggāi cǎiqǔ zěnyàng de tàidu?",
    "transcriptVi": "Khi con cái gặp vấp ngã trong học tập và muốn bỏ cuộc, phụ huynh nên có thái độ như thế nào?",
    "questionVi": "Đáp án nào phù hợp nhất với quan điểm giáo dục tâm lý hiện đại?",
    "options": [
      "应当先倾听孩子的困惑并给予鼓励，引导他们分析原因，而不是一味指责。 (Nên lắng nghe nỗi băn khoăn của trẻ và khích lệ trước, hướng dẫn trẻ phân tích nguyên nhân chứ không phải một mực chỉ trích.)",
      "立刻没收孩子的所有玩具。 (Lập tức tịch thu toàn bộ đồ chơi của trẻ.)",
      "替孩子把所有作业做完。 (Làm hộ toàn bộ bài tập cho trẻ.)",
      "不允许孩子参加任何体育活动。 (Không cho phép trẻ tham gia bất kỳ hoạt động thể thao nào.)"
    ],
    "correctAnswer": "应当先倾听孩子的困惑并给予鼓励，引导他们分析原因，而不是一味指责。 (Nên lắng nghe nỗi băn khoăn của trẻ và khích lệ trước, hướng dẫn trẻ phân tích nguyên nhân chứ không phải một mực chỉ trích.)",
    "explanationVi": "Câu hỏi về thái độ của phụ huynh khi con gặp挫折 (vấp ngã), đáp án lắng nghe, khích lệ và hướng dẫn phân tích nguyên nhân là chuẩn xác."
  },
  {
    "id": "lt-hsk5-basic-5",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về bảo tồn phố cổ",
    "audioZh": "在城市现代化改造过程中，应当如何对待具有百年历史的古建筑街区？",
    "pinyin": "Zài chéngshì xiàndàihuà gǎizào guòchéng zhōng, yīngdāng rúhé duìdài jùyǒu bǎinián lìshǐ de gǔ jiànzhù jiēqū?",
    "transcriptVi": "Trong quá trình cải tạo hiện đại hóa đô thị, cần đối xử thế nào với các khu phố kiến trúc cổ có lịch sử trăm năm?",
    "questionVi": "Đáp án nào hợp lý nhất?",
    "options": [
      "全部拆除用来盖高层写字楼。 (Phá dỡ toàn bộ để xây tòa nhà văn phòng cao tầng.)",
      "应在保留原有历史风貌的基础上修旧如旧，并注入适度的文化创意产业。 (Nên tu bổ giữ nguyên diện mạo lịch sử vốn có theo nguyên tắc 'sửa cũ như cũ', đồng thời đưa vào ngành sáng tạo văn hóa ở mức độ vừa phải.)",
      "完全封闭起来禁止任何人进入。 (Đóng cửa hoàn toàn cấm bất kỳ ai bước vào.)",
      "改造成大型重工业化工厂。 (Cải tạo thành nhà máy hóa chất công nghiệp nặng.)"
    ],
    "correctAnswer": "应在保留原有历史风貌的基础上修旧如旧，并注入适度的文化创意产业。 (Nên tu bổ giữ nguyên diện mạo lịch sử vốn có theo nguyên tắc 'sửa cũ như cũ', đồng thời đưa vào ngành sáng tạo văn hóa ở mức độ vừa phải.)",
    "explanationVi": "Với câu hỏi bảo tồn khu phố cổ ('如何对待...古建筑街区'), đáp án '修旧如旧' (tu bổ giữ nguyên diện mạo lịch sử) là chính xác."
  },
  {
    "id": "lt-hsk5-basic-6",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về cân bằng công việc và sức khỏe",
    "audioZh": "面对互联网行业高强度的加班文化，职场人士该如何维护身心健康？",
    "pinyin": "Miànduì hùliánwǎng hángyè gāo qiángdù de jiābān wénhuà, zhíchǎng rénshì gāi rúhé wéichí shēnxīn jiànkāng?",
    "transcriptVi": "Đối mặt với văn hóa tăng ca cường độ cao trong ngành Internet, người đi làm nên duy trì sức khỏe thể chất và tinh thần như thế nào?",
    "questionVi": "Câu trả lời nào thiết thực nhất?",
    "options": [
      "每天只睡三个小时。 (Mỗi ngày chỉ ngủ 3 tiếng.)",
      "把所有工作推给新同事。 (Đẩy toàn bộ công việc cho đồng nghiệp mới.)",
      "要学会合理规划工作优先级以提高效率，同时坚持规律作息和适度体育锻炼。 (Cần học cách quy hoạch hợp lý thứ tự ưu tiên công việc để tăng hiệu suất, đồng thời kiên trì sinh hoạt điều độ và tập thể dục vừa phải.)",
      "一天喝十杯浓咖啡代替吃饭。 (Mỗi ngày uống 10 cốc cà phê đặc thay cơm.)"
    ],
    "correctAnswer": "要学会合理规划工作优先级以提高效率，同时坚持规律作息和适度体育锻炼。 (Cần học cách quy hoạch hợp lý thứ tự ưu tiên công việc để tăng hiệu suất, đồng thời kiên trì sinh hoạt điều độ và tập thể dục vừa phải.)",
    "explanationVi": "Đáp án nêu giải pháp quy hoạch ưu tiên công việc, sinh hoạt điều độ và tập thể dục là chuẩn xác."
  },
  {
    "id": "lt-hsk5-basic-7",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Bàn về hiện tượng tiêu dùng theo trào lưu",
    "audioZh": "女：你看，这家网红奶茶店门口排了两百多人，听说要等三个小时才能买到一杯。\n男：很多人并不是真的喜欢喝，只是为了拍照发朋友圈跟风打卡而已，我更看重产品本身的品质。",
    "pinyin": "Nǚ: Nǐ kàn, zhè jiā wǎnghóng nǎichádiàn ménkǒu pái le liǎngbǎi duō rén, tīngshuō yào děng sān gè xiǎoshí cái néng mǎidào yì bēi.\nNán: Hěn duō rén bìng bú shì zhēnde xǐhuan hē, zhǐshì wèile pāizhào fā Péngyouquān gēnfēng dǎkǎ éryǐ, wǒ gèng kànzhòng chǎnpǐn běnshēn de pǐnzhì.",
    "transcriptVi": "Nữ: Anh nhìn kìa, trước cửa quán trà sữa hot mạng này có hơn 200 người xếp hàng, nghe nói phải đợi 3 tiếng mới mua được một cốc.\nNam: Nhiều người đâu phải thực sự thích uống, chỉ là để chụp ảnh đăng lên vòng bạn bè WeChat check-in theo trào lưu thôi, anh coi trọng chất lượng bản thân sản phẩm hơn.",
    "questionVi": "Thái độ của bạn nam đối với việc xếp hàng 3 tiếng mua trà sữa hot mạng là gì?",
    "options": [
      "Rất hào hứng và muốn vào xếp hàng ngay lập tức",
      "Muốn đầu tư mở một quán tương tự",
      "Cho rằng quán trà sữa này giá quá rẻ",
      "Cho rằng nhiều người chỉ chạy theo trào lưu để chụp ảnh sống ảo, còn anh coi trọng chất lượng thực sự hơn"
    ],
    "correctAnswer": "Cho rằng nhiều người chỉ chạy theo trào lưu để chụp ảnh sống ảo, còn anh coi trọng chất lượng thực sự hơn",
    "explanationVi": "Bạn nam nhận xét: '只是为了拍照发朋友圈跟风打卡而已，我更看重产品本身的品质'."
  },
  {
    "id": "lt-hsk5-basic-8",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Thảo luận về làm việc từ xa (Remote work)",
    "audioZh": "男：公司打算下个月试行每周两天居家办公，你赞成这个制度吗？\n女：挺好的，不仅能省去每天两个小时的通勤时间，还能让大家更灵活地安排工作与家庭事务。",
    "pinyin": "Nán: Gōngsī dǎsuàn xià gè yuè shìxíng měi zhōu liǎng tiān jūjiā bàngōng, nǐ zànchéng zhège zhìdù ma?\nNǚ: Tǐng hǎo de, bùjǐn néng shěngqù měitiān liǎng gè xiǎoshí de tōngqín shíjiān, hái néng ràng dàjiā gèng línghuó de ānpái gōngzuò yǔ jiātíng shìwù.",
    "transcriptVi": "Nam: Công ty dự định tháng tới thí điểm làm việc tại nhà 2 ngày mỗi tuần, bạn có tán thành chế độ này không?\nNữ: Rất tốt đấy, không chỉ tiết kiệm được 2 tiếng đi lại mỗi ngày mà còn giúp mọi người sắp xếp công việc và việc gia đình linh hoạt hơn.",
    "questionVi": "Theo bạn nữ, chế độ làm việc tại nhà 2 ngày/tuần mang lại lợi ích gì?",
    "options": [
      "Tiết kiệm thời gian đi lại (commute) và giúp sắp xếp công việc, gia đình linh hoạt hơn",
      "Giúp nhân viên không cần phải làm bất kỳ công việc nào",
      "Giúp công ty tăng lương gấp đôi cho mọi người",
      "Không cần phải họp trực tuyến nữa"
    ],
    "correctAnswer": "Tiết kiệm thời gian đi lại (commute) và giúp sắp xếp công việc, gia đình linh hoạt hơn",
    "explanationVi": "Bạn nữ nói: '不仅能省去每天两个小时的通勤时间，还能让大家更灵活地安排工作与家庭事务'."
  },
  {
    "id": "lt-hsk5-basic-9",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Phản hồi về khóa đào tạo kỹ năng mềm",
    "audioZh": "女：人力资源部组织的这次跨文化沟通培训，你们部门员工反馈怎么样？\n男：大家普遍反映案例非常贴近中越合资企业的实际场景，对解决日常协作中的误解很有启发。",
    "pinyin": "Nǚ: Rénlì zīyuánbù zǔzhī de zhè cì kuàwénhuà gōutōng péixùn, nǐmen bùmén yuángōng fǎnkuì zěnmeyàng?\nNán: Dàjiā pǔbiàn fǎnyìng ànlì fēicháng tiējìn Zhōng-Yuè hézī qǐyè de shíjì chǎngjǐng, duì jiějué rìcháng xiézuò zhōng de wùjiě hěn yǒu qǐfā.",
    "transcriptVi": "Nữ: Khóa đào tạo giao tiếp đa văn hóa do phòng Nhân sự tổ chức lần này, nhân viên bộ phận anh phản hồi thế nào?\nNam: Mọi người đều phản ánh các tình huống thực tế rất sát với bối cảnh doanh nghiệp liên doanh Trung - Việt, rất có tính gợi mở để giải quyết các hiểu lầm trong phối hợp hàng ngày.",
    "questionVi": "Tại sao nhân viên lại đánh giá cao khóa đào tạo giao tiếp đa văn hóa này?",
    "options": [
      "Vì khóa học chỉ kéo dài 5 phút",
      "Vì các tình huống thực tế rất sát với doanh nghiệp liên doanh Trung - Việt, giúp tháo gỡ hiểu lầm khi làm việc",
      "Vì tất cả học viên đều được tặng điện thoại mới",
      "Vì khóa học chỉ dạy nấu ăn"
    ],
    "correctAnswer": "Vì các tình huống thực tế rất sát với doanh nghiệp liên doanh Trung - Việt, giúp tháo gỡ hiểu lầm khi làm việc",
    "explanationVi": "Bạn nam nêu: '案例非常贴近中越合资企业的实际场景，对解决日常协作中的误解很有启发'."
  },
  {
    "id": "lt-hsk5-basic-10",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Bí quyết vượt qua hiệu ứng nhà kính thông tin (Information Cocoons)",
    "audioZh": "在算法推荐盛行的今天，短视频和新闻软件总是根据我们的浏览记录推送相似的内容。久而久之，人们容易陷入“信息茧房”，只看到自己认同的观点，视野变得越来越狭隘。因此，主动搜索不同领域的知识、阅读深度书籍显得尤为必要。",
    "pinyin": "Zài suànfǎ tuījiàn shèngxíng de jīntiān, duǎnshìpín hé xīnwén ruǎnjiàn zǒngshì gēnjù wǒmen de liúlǎn jìlù tuīsòng xiāngsì de nèiróng. Jiǔ'érjiǔzhī, rénmen róngyì xiànrù “xìnxī jiǎnfáng”, zhǐ kàndào zìjǐ rèntóng de guāndiǎn, shìyě biànde yuèláiyuè xiá'ài. Yīncǐ, zhǔdòng sōusuǒ bùtóng lǐngyù de zhīshi, yuèdú shēndù shūjí xiǎnde yóuwéi bìyào.",
    "transcriptVi": "Trong thời đại thuật toán gợi ý thịnh hành ngày nay, các ứng dụng video ngắn và tin tức luôn đẩy những nội dung tương tự dựa trên lịch sử duyệt web của chúng ta. Lâu dần, con người dễ rơi vào 'kén thông tin', chỉ nhìn thấy những quan điểm mà mình đồng tình, tầm nhìn trở nên ngày càng hạn hẹp. Do đó, việc chủ động tìm kiếm kiến thức thuộc các lĩnh vực khác nhau và đọc sách chuyên sâu trở nên đặc biệt cần thiết.",
    "questionVi": "Tác hại của việc rơi vào 'kén thông tin (信息茧房)' do thuật toán gợi ý là gì?",
    "options": [
      "Làm hỏng màn hình điện thoại thông minh",
      "Khiến tốc độ mạng Internet bị chậm lại",
      "Khiến con người chỉ thấy quan điểm mình đồng tình và tầm nhìn ngày càng hạn hẹp",
      "Làm mất toàn bộ danh bạ trong máy"
    ],
    "correctAnswer": "Khiến con người chỉ thấy quan điểm mình đồng tình và tầm nhìn ngày càng hạn hẹp",
    "explanationVi": "Đoạn văn chỉ rõ: '只看到自己认同的观点，视野变得越来越狭隘'."
  },
  {
    "id": "lt-hsk5-basic-11",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Xu hướng thanh niên về quê khởi nghiệp nông nghiệp số",
    "audioZh": "过去农村年轻人大多渴望到大城市打工，而如今，随着乡村物流网络和直播电商的普及，越来越多的大学生选择返乡创业。他们利用短视频展示果园采摘过程，把家乡的特色农产品直接卖向全国，既实现了个人价值，又带动了村民共同致富。",
    "pinyin": "Guòqù nóngcūn niánqīngrén dàduō kěwàng dào dà chéngshì dǎgōng, ér rújīn, suízhe xiāngcūn wùliú wǎngluò hé zhíbō diànshāng de pǔjí, yuèláiyuè duō de dàxuéshēng xuǎnzé fǎnxiāng chuàngyè. Tāmen lìyòng duǎnshìpín zhǎnshì guǒyuán cǎizhāi guòchéng, bǎ jiāxiāng de tèsè nóngchǎnpǐn zhíjiē màixiàng quánguó, jì shíxiàn le gèrén jiàzhí, yòu dàidòng le cūnmín gòngtóng zhìfù.",
    "transcriptVi": "Trước đây thanh niên nông thôn phần lớn khao khát ra thành phố lớn làm thuê, còn ngày nay, cùng với sự phổ cập của mạng lưới logistics nông thôn và thương mại điện tử livestream, ngày càng nhiều sinh viên đại học chọn về quê khởi nghiệp. Họ tận dụng video ngắn để giới thiệu quá trình thu hoạch tại vườn, bán nông sản đặc sản quê hương trực tiếp đi khắp cả nước, vừa thực hiện giá trị bản thân vừa kéo người dân trong làng cùng làm giàu.",
    "questionVi": "Các sinh viên về quê khởi nghiệp đã sử dụng phương thức nào để tiêu thụ nông sản quê hương?",
    "options": [
      "Đóng cửa vườn cây để làm khu công nghiệp nặng",
      "Chỉ bán cho người dân trong cùng một ngôi làng",
      "Phụ thuộc hoàn toàn vào thương lái ép giá",
      "Dùng video ngắn và livestream thương mại điện tử để quay cảnh thu hoạch và bán trực tiếp đi toàn quốc"
    ],
    "correctAnswer": "Dùng video ngắn và livestream thương mại điện tử để quay cảnh thu hoạch và bán trực tiếp đi toàn quốc",
    "explanationVi": "Trong bài nêu: '利用短视频展示果园采摘过程，把家乡的特色农产品直接卖向全国'."
  },
  {
    "id": "lt-hsk5-basic-12",
    "level": "HSK5",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Giá trị của giấc ngủ trưa ngắn nơi công sở",
    "audioZh": "科学研究表明，中午进行二十到三十分钟的短暂午睡，能够有效缓解上午大脑的疲劳，使下午的工作效率提升百分之三十以上。但专家同时提醒，午睡时间不宜超过一个小时，否则容易进入深睡眠阶段，醒来后反而会感到头晕乏力。",
    "pinyin": "Kēxué yánjiū biǎomíng, zhōngwǔ jìnxíng èrshí dào sānshí fēnzhōng de duǎnzàn wǔshuì, nénggòu yǒuxiào huǎnjiě shàngwǔ dànǎo de píláo, shǐ xiàwǔ de gōngzuò xiàolǜ tíshēng bǎifēn zhī sānshí yǐshàng. Dàn zhuānjiā tóngshí tíxǐng, wǔshuì shíjiān bùyí chāoguò yí gè xiǎoshí, fǒuzé róngyì jìnrù shēn shuìmián jiēduàn, xǐnglái hòu fǎn'ér huì gǎndào tóuyūn fálì.",
    "transcriptVi": "Nghiên cứu khoa học chỉ ra rằng ngủ trưa ngắn từ 20 đến 30 phút vào buổi trưa có thể làm dịu hiệu quả sự mệt mỏi của não bộ buổi sáng, giúp hiệu suất làm việc buổi chiều tăng trên 30%. Tuy nhiên các chuyên gia đồng thời nhắc nhở thời gian ngủ trưa không nên quá 1 tiếng, nếu không dễ bước vào giai đoạn ngủ sâu, sau khi tỉnh dậy ngược lại sẽ cảm thấy chóng mặt mệt mỏi.",
    "questionVi": "Theo các chuyên gia, tại sao không nên ngủ trưa quá 1 tiếng đồng hồ?",
    "options": [
      "Vì dễ rơi vào giấc ngủ sâu, khi tỉnh dậy sẽ bị chóng mặt và uể oải",
      "Vì sẽ bị công ty trừ половину lương tháng",
      "Vì ngủ trưa làm giảm trí nhớ vĩnh viễn",
      "Vì sẽ không thể ăn tối được"
    ],
    "correctAnswer": "Vì dễ rơi vào giấc ngủ sâu, khi tỉnh dậy sẽ bị chóng mặt và uể oải",
    "explanationVi": "Câu cuối giải thích: '否则容易进入深睡眠阶段，醒来后反而会感到头晕乏力'."
  },
  {
    "id": "lt-hsk5-advanced-1",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thanh toán thư tín dụng không thể hủy ngang (Irrevocable L/C)",
    "audioZh": "鉴于本合同金额高达两百万美元且双方系首次合作，卖方坚持要求采用即期不可撤销信用证进行结算。",
    "pinyin": "Jiànyú běn hétong jīn'é gāodá liǎngbǎi wàn Měiyuán qiě shuāngfāng xì shǒucì hézuò, màifāng jiānchí yāoqiú cǎiyòng jíqī bùkě chèxiāo xìnyòngzhèng jìnxíng jiésuàn.",
    "transcriptVi": "Xét thấy giá trị hợp đồng này lên tới 2 triệu USD và hai bên mới hợp tác lần đầu, bên bán kiên quyết yêu cầu sử dụng thư tín dụng (L/C) trả ngay không thể hủy ngang để thanh toán.",
    "questionVi": "Tại sao bên bán kiên quyết yêu cầu thanh toán bằng thư tín dụng (L/C) không thể hủy ngang?",
    "options": [
      "Vì bên mua không có tài khoản ngân hàng",
      "Vì giá trị hợp đồng lớn (2 triệu USD) và hai bên mới hợp tác lần đầu",
      "Vì hàng hóa được vận chuyển bằng xe máy",
      "Vì chính phủ cấm dùng ngoại tệ"
    ],
    "correctAnswer": "Vì giá trị hợp đồng lớn (2 triệu USD) và hai bên mới hợp tác lần đầu",
    "explanationVi": "'鉴于本合同金额高达两百万美元且双方系首次合作...'."
  },
  {
    "id": "lt-hsk5-advanced-2",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Điều khoản bất khả kháng (Force Majeure)",
    "audioZh": "若因地震、台风等不可抗力因素导致无法按期交货，受影响方应在事故发生后四十八小时内书面通知对方。",
    "pinyin": "Ruò yīn dìzhèn, táifēng děng bùkěkànglì yīnsù dǎozhì wúfǎ ànqī jiāohuò, shòu yǐngxiǎng fāng yīng zài shìgù fāshēng hòu sìshíbā xiǎoshí nèi shūmiàn tōngzhī duìfāng.",
    "transcriptVi": "Nếu do các yếu tố bất khả kháng như động đất, bão dẫn đến không thể giao hàng đúng hạn, bên bị ảnh hưởng phải thông báo bằng văn bản cho đối phương trong vòng 48 giờ sau khi sự cố xảy ra.",
    "questionVi": "Khi xảy ra sự kiện bất khả kháng gây chậm giao hàng, bên bị ảnh hưởng phải làm gì?",
    "options": [
      "Tự động hủy bỏ hợp đồng mà không cần báo trước",
      "Bồi thường gấp 10 lần giá trị hợp đồng",
      "Thông báo bằng văn bản cho đối phương trong vòng 48 giờ sau khi sự cố xảy ra",
      "Đợi 6 tháng sau mới liên lạc"
    ],
    "correctAnswer": "Thông báo bằng văn bản cho đối phương trong vòng 48 giờ sau khi sự cố xảy ra",
    "explanationVi": "'应在事故发生后四十八小时内书面通知对方'."
  },
  {
    "id": "lt-hsk5-advanced-3",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Kiểm định chất lượng bên thứ ba (SGS/TUV)",
    "audioZh": "装船前七个工作日，买方将委托SGS检验机构前往贵厂对货物进行抽样检测，合格后方可放行出运。",
    "pinyin": "Zhuāngchuán qián qī gè gōngzuòrì, mǎifāng jiāng wěituō SGS jiǎnyàn jīgòu qiánwǎng guì chǎng duì huòwù jìnxíng chōuyàng jiǎncè, hégé hòu fāngkě fàngxíng chūyùn.",
    "transcriptVi": "Bảy ngày làm việc trước khi xếp hàng lên tàu, bên mua sẽ ủy thác tổ chức kiểm định SGS đến nhà máy quý vị để lấy mẫu kiểm tra hàng hóa, đạt chuẩn mới được phép xuất hàng.",
    "questionVi": "Khi nào lô hàng mới được phép xuất xưởng để xếp lên tàu?",
    "options": [
      "Ngay sau khi ký hợp đồng mà không cần kiểm tra",
      "Sau khi hàng đã đến cảng của người mua",
      "Khi nhà máy tự viết giấy cam kết",
      "Sau khi tổ chức kiểm định SGS lấy mẫu kiểm tra tại nhà máy và xác nhận đạt chuẩn"
    ],
    "correctAnswer": "Sau khi tổ chức kiểm định SGS lấy mẫu kiểm tra tại nhà máy và xác nhận đạt chuẩn",
    "explanationVi": "'进行抽样检测，合格后方可放行出运'."
  },
  {
    "id": "lt-hsk5-advanced-4",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về điều kiện cấp quyền đại lý độc quyền",
    "audioZh": "如果我方希望获得贵品牌在越南北方市场的独家代理权，需要满足哪些核心条件？",
    "pinyin": "Rúguǒ wǒfāng xīwàng huòdé guì pǐnpái zài Yuènán běifāng shìchǎng de dújiā dàilǐquán, xūyào mǎnzú nǎxiē héxīn tiáojiàn?",
    "transcriptVi": "Nếu phía chúng tôi muốn giành quyền đại lý độc quyền thương hiệu của quý vị tại thị trường miền Bắc Việt Nam thì cần đáp ứng những điều kiện cốt lõi nào?",
    "questionVi": "Câu trả lời nào đúng chuẩn đàm phán thương mại quốc tế?",
    "options": [
      "贵公司首年保底采购额需达到五百万人民币，并在河内建立完善的售后服务网点。 (Doanh số thu mua cam kết tối thiểu năm đầu của quý công ty cần đạt 5 triệu Nhân dân tệ, đồng thời xây dựng mạng lưới dịch vụ hậu mãi hoàn thiện tại Hà Nội.)",
      "我们公司的总部在杭州。 (Trụ sở chính công ty chúng tôi ở Hàng Châu.)",
      "这款产品有三种颜色。 (Sản phẩm này có 3 màu.)",
      "明天上午九点签约。 (9 giờ sáng mai ký hợp đồng.)"
    ],
    "correctAnswer": "贵公司首年保底采购额需达到五百万人民币，并在河内建立完善的售后服务网点。 (Doanh số thu mua cam kết tối thiểu năm đầu của quý công ty cần đạt 5 triệu Nhân dân tệ, đồng thời xây dựng mạng lưới dịch vụ hậu mãi hoàn thiện tại Hà Nội.)",
    "explanationVi": "Câu hỏi về điều kiện làm đại lý độc quyền ('需要满足哪些核心条件'), trả lời yêu cầu doanh số cam kết tối thiểu 5 triệu tệ và mạng lưới hậu mãi tại Hà Nội là chính xác."
  },
  {
    "id": "lt-hsk5-advanced-5",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về phương thức giải quyết tranh chấp hợp đồng",
    "audioZh": "万一双方在履行合同过程中产生争议且协商不成，应当提交哪个机构裁决？",
    "pinyin": "Wànyī shuāngfāng zài lǚxíng hétong guòchéng zhōng chǎnshēng zhēngyì qiě xiéshāng bù chéng, yīngdāng tíjiāo nǎge jīgòu cáijué?",
    "transcriptVi": "Vạn nhất hai bên phát sinh tranh chấp trong quá trình thực hiện hợp đồng mà thương lượng không thành thì nên đệ trình lên cơ quan nào phán quyết?",
    "questionVi": "Đáp án nào đúng thuật ngữ pháp lý ngoại thương?",
    "options": [
      "请直接给客服打电话。 (Vui lòng gọi điện trực tiếp cho bộ phận CSKH.)",
      "根据合同第十二条，应提交中国国际经济贸易仲裁委员会或越南国际仲裁中心进行仲裁。 (Theo Điều 12 của hợp đồng, cần đệ trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc hoặc Trung tâm Trọng tài Quốc tế Việt Nam để phân xử.)",
      "这批货已经买过保险了。 (Lô hàng này đã mua bảo hiểm rồi.)",
      "我们支持人民币结算。 (Chúng tôi hỗ trợ thanh toán bằng Nhân dân tệ.)"
    ],
    "correctAnswer": "根据合同第十二条，应提交中国国际经济贸易仲裁委员会或越南国际仲裁中心进行仲裁。 (Theo Điều 12 của hợp đồng, cần đệ trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc hoặc Trung tâm Trọng tài Quốc tế Việt Nam để phân xử.)",
    "explanationVi": "Câu hỏi về cơ quan phán quyết tranh chấp ('提交哪个机构裁决'), trả lời đệ trình lên Ủy ban/Trung tâm Trọng tài Quốc tế theo Điều 12 là chuẩn xác."
  },
  {
    "id": "lt-hsk5-advanced-6",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về thời hạn hiệu lực của báo giá",
    "audioZh": "鉴于近期国际大宗商品和汇率波动剧烈，这份报价单的价格能保留多久？",
    "pinyin": "Jiànyú jìnqī guójì dàzōng shāngpǐn hé huìlǜ bōdòng jùliè, zhè fèn bàojiàdān de jiàgé néng bǎoliú duōjiǔ?",
    "transcriptVi": "Xét thấy giá hàng hóa nguyên liệu quốc tế và tỷ giá gần đây biến động mạnh, mức giá trong bảng báo giá này có thể giữ được bao lâu?",
    "questionVi": "Câu trả lời nào phù hợp nhất?",
    "options": [
      "我们已经收到了您的定金。 (Chúng tôi đã nhận được tiền cọc của ngài.)",
      "工厂下周放假三天。 (Nhà máy tuần sau nghỉ lễ 3 ngày.)",
      "本报价有效期为十五个自然日，逾期如汇率变动超过百分之三则需重新核价。 (Báo giá này có hiệu lực trong 15 ngày tự nhiên, quá hạn nếu tỷ giá biến động quá 3% thì cần tính lại giá.)",
      "产品符合欧盟环保标准。 (Sản phẩm đạt chuẩn bảo vệ môi trường EU.)"
    ],
    "correctAnswer": "本报价有效期为十五个自然日，逾期如汇率变动超过百分之三则需重新核价。 (Báo giá này có hiệu lực trong 15 ngày tự nhiên, quá hạn nếu tỷ giá biến động quá 3% thì cần tính lại giá.)",
    "explanationVi": "Câu hỏi về thời hạn giữ giá ('价格能保留多久'), trả lời hiệu lực 15 ngày và điều khoản điều chỉnh khi tỷ giá biến động >3% là chuẩn mực."
  },
  {
    "id": "lt-hsk5-advanced-7",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Đàm phán chiết khấu theo bậc sản lượng",
    "audioZh": "女：林总，如果我方把年采购量从五万台提升到十万台，单价能否在现有基础上再下调百分之八？\n男：百分之八确实超出我们的利润底线了。不过考虑到贵方是战略合作伙伴，我们可以让利百分之五，并免费提供千分之三的备品备件。",
    "pinyin": "Nǚ: Lín zǒng, rúguǒ wǒfāng bǎ nián cǎigòuliàng cóng wǔwàn tái tíshēng dào shíwàn tái, dānjià néngfǒu zài xiànyǒu jīchǔ shàng zài xiàtiáo bǎifēn zhī bā?\nNán: Bǎifēn zhī bā quèshí chāochū wǒmen de lìrùn dǐxiàn le. Búguò kǎolǜ dào guìfāng shì zhànlüè hézuò huǒbàn, wǒmen kěyǐ rànglì bǎifēn zhī wǔ, bìng miǎnfèi tígōng qiānfēn zhī sān de bèipǐn bèijiàn.",
    "transcriptVi": "Nữ: Giám đốc Lâm, nếu bên tôi nâng sản lượng thu mua năm từ 50.000 máy lên 100.000 máy, đơn giá có thể giảm thêm 8% trên mức hiện tại không?\nNam: Mức 8% thực sự vượt quá giới hạn lợi nhuận tối thiểu của chúng tôi rồi. Nhưng xét quý bên là đối tác chiến lược, chúng tôi có thể nhượng bộ giảm 5% và cung cấp miễn phí 0,3% linh kiện dự phòng.",
    "questionVi": "Phương án cuối cùng mà Giám đốc Lâm đưa ra là gì?",
    "options": [
      "Đồng ý giảm ngay 8% theo yêu cầu",
      "Từ chối giảm giá và tăng thêm 5%",
      "Giảm 10% nhưng không bảo hành",
      "Giảm giá 5% và tặng miễn phí 0,3% linh kiện dự phòng"
    ],
    "correctAnswer": "Giảm giá 5% và tặng miễn phí 0,3% linh kiện dự phòng",
    "explanationVi": "Giám đốc Lâm đề xuất: '我们可以让利百分之五，并免费提供千分之三的备品备件'."
  },
  {
    "id": "lt-hsk5-advanced-8",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Bảo mật khuôn mẫu thiết kế OEM",
    "audioZh": "男：这批智能水杯的外观模具是我们团队独立研发的，委托贵厂代工期间如何确保不外泄？\n女：您放心，我们可以签署具有法律效力的专有模具保密协议，承诺该模具仅用于贵方订单，绝不向任何第三方展示或销售。",
    "pinyin": "Nán: Zhè pī zhìnéng shuǐbēi de wàiguān mújù shì wǒmen tuánduì dúlì yánfā de, wěituō guì chǎng dàigōng qījiān rúhé quèbǎo bù wàixiè?\nNǚ: Nín fàngxīn, wǒmen kěyǐ qiānshǔ jùyǒu fǎlǜ xiàolì de zhuānyǒu mújù bǎomì xiéyì, chéngnuò gāi mújù jǐn yòngyú guìfāng dìngdān, juébù xiàng rènhé dì-sānfāng zhǎnshì huò xiāoshòu.",
    "transcriptVi": "Nam: Khuôn mẫu ngoại quan của lô bình nước thông minh này do đội ngũ chúng tôi tự nghiên cứu phát triển, trong thời gian ủy thác nhà máy chị gia công (OEM) thì làm sao đảm bảo không bị rò rỉ ra ngoài?\nNữ: Anh yên tâm, chúng ta có thể ký thỏa thuận bảo mật khuôn mẫu độc quyền có hiệu lực pháp lý, cam kết khuôn này chỉ dùng cho đơn hàng của bên anh, tuyệt đối không trưng bày hay bán cho bất kỳ bên thứ ba nào.",
    "questionVi": "Nhà máy cam kết bảo vệ khuôn mẫu thiết kế của khách hàng bằng cách nào?",
    "options": [
      "Ký thỏa thuận bảo mật khuôn mẫu độc quyền, chỉ dùng cho đơn hàng của khách và không bán cho bên thứ ba",
      "Cho phép các khách hàng khác dùng chung khuôn để giảm chi phí",
      "Trả lại khuôn ngay trước khi sản xuất",
      "Đăng bản vẽ khuôn mẫu lên trang web công ty"
    ],
    "correctAnswer": "Ký thỏa thuận bảo mật khuôn mẫu độc quyền, chỉ dùng cho đơn hàng của khách và không bán cho bên thứ ba",
    "explanationVi": "Đại diện nhà máy cam kết: '签署具有法律效力的专有模具保密协议，承诺该模具仅用于贵方订单...'."
  },
  {
    "id": "lt-hsk5-advanced-9",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Tối ưu hóa phương án đóng container (装柜)",
    "audioZh": "女：物流部刚核算过，如果按原来的彩盒尺寸装箱，一个四十尺高柜只能装三千八百台，浪费了不少空间。\n男：那让设计部把缓冲泡沫改成紧凑型卡槽，外箱高度缩减两厘米，这样正好能装满四千两百台，单台运费能降一成。",
    "pinyin": "Nǚ: Wùliúbù gāng hésuàn guo, rúguǒ àn yuánlái de cǎihé chǐcun zhuāngxiāng, yí gè sìshí chǐ gāoguì zhǐ néng zhuāng sānqiān bābǎi tái, làngfèi le bùshǎo kōngjiān.\nNán: Nà ràng shèjìbù bǎ huǎnchōng pàomò gǎichéng jǐncòuxíng kǎcáo, wàixiāng gāodù suōjiǎn liǎng límǐ, zhèyàng zhènghǎo néng zhuāngmǎn sìqiān liǎngbǎi tái, dāntái yùnfèi néng jiàng yì chéng.",
    "transcriptVi": "Nữ: Bộ phận logistics vừa tính toán, nếu đóng thùng theo kích thước hộp màu ban đầu thì một container 40 feet cao (40HQ) chỉ xếp được 3800 máy, lãng phí khá nhiều không gian.\nNam: Vậy hãy bảo bộ phận thiết kế đổi xốp đệm sang dạng rãnh cài gọn hơn, chiều cao thùng ngoài giảm đi 2 cm, như vậy vừa khéo xếp đầy được 4200 máy, cước vận chuyển mỗi máy giảm được 10%.",
    "questionVi": "Sau khi thu gọn chiều cao thùng ngoài đi 2 cm, một container 40HQ có thể chở được bao nhiêu máy?",
    "options": [
      "3800 máy",
      "4200 máy (giúp giảm 10% cước phí mỗi máy)",
      "3000 máy",
      "5000 máy"
    ],
    "correctAnswer": "4200 máy (giúp giảm 10% cước phí mỗi máy)",
    "explanationVi": "Bạn nam tính toán: '正好能装满四千两百台，单台运费能降一成'."
  },
  {
    "id": "lt-hsk5-advanced-10",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Quản trị rủi ro nhà cung cấp trong chuỗi cung ứng",
    "audioZh": "在全球供应链不确定性增加的背景下，成熟的外贸企业通常会实行“核心供应商加备份供应商”的双轨制策略。即把百分之七十的订单交给长期合作的主力工厂以获取最优价格，同时将百分之三十的订单分配给两家备选工厂，以防主力工厂出现停产或交期延误风险。",
    "pinyin": "Zài quánqiú gōngyìngliàn bùquèdìngxìng zēngjiā de bèijǐng xià, chéngshú de wàimào qǐyè tōngcháng huì shíxíng “héxīn gōngyìngshāng jiā bèifèn gōngyìngshāng” de shuāngguǐzhì cèlüè. Jì bǎ bǎifēn zhī qīshí de dìngdān jiāogěi chángqī hézuò de zhǔlì gōngchǎng yǐ huòqǔ zuìyōu jiàgé, tóngshí jiāng bǎifēn zhī sānshí de dìngdān fēnpèi gěi liǎng jiā bèixuǎn gōngchǎng, yǐfáng zhǔlì gōngchǎng chūxiàn tíngchǎn huò jiāoqī yánwù fēngxiǎn.",
    "transcriptVi": "Trong bối cảnh tính bất định của chuỗi cung ứng toàn cầu gia tăng, các doanh nghiệp ngoại thương trưởng thành thường thực hiện chiến lược hai đường ray 'nhà cung cấp cốt lõi cộng nhà cung cấp dự phòng'. Tức là giao 70% đơn hàng cho nhà máy chủ lực hợp tác lâu năm để có mức giá tối ưu, đồng thời phân bổ 30% đơn hàng cho 2 nhà máy dự phòng nhằm đề phòng rủi ro nhà máy chủ lực ngừng sản xuất hoặc trễ hạn giao hàng.",
    "questionVi": "Theo chiến lược được nêu, doanh nghiệp phân bổ đơn hàng như thế nào để vừa có giá tốt vừa phòng ngừa rủi ro?",
    "options": [
      "Giao 100% đơn hàng cho một nhà máy duy nhất có giá rẻ nhất",
      "Mỗi ngày đổi một nhà máy mới",
      "Giao 70% đơn hàng cho nhà máy chủ lực và 30% cho các nhà máy dự phòng",
      "Tự xây dựng 10 nhà máy riêng"
    ],
    "correctAnswer": "Giao 70% đơn hàng cho nhà máy chủ lực và 30% cho các nhà máy dự phòng",
    "explanationVi": "Đoạn văn nêu rõ: '把百分之七十的订单交给...主力工厂...同时将百分之三十的订单分配给两家备选工厂'."
  },
  {
    "id": "lt-hsk5-advanced-11",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Lợi thế của thanh toán Nhân dân tệ xuyên biên giới",
    "audioZh": "过去中越企业开展贸易大多以美元作为中间结算货币，企业需要承受两次汇兑手续费以及汇率波动损失。如今，随着中越边境银行跨境人民币结算通道的完善，双方可以直接使用人民币或越南盾报价与结算，不仅到账速度缩短至几个小时，还能节省百分之二以上的财务成本。",
    "pinyin": "Guòqù Zhōng-Yuè qǐyè kāizhǎn màoyì dàduō yǐ Měiyuán zuòwéi zhōngjiān jiésuàn huòbì, qǐyè xūyào chéngshòu liǎng cì huìduì shǒuxùfèi yǐjí huìlǜ bōdòng sǔnshī. Rújīn, suízhe Zhōng-Yuè biānjìng yínháng kuàjìng Rénmínbì jiésuàn tōngdào de wánshàn, shuāngfāng kěyǐ zhíjiē shǐyòng Rénmínbì huò Yuènándùn bàojià yǔ jiésuàn, bùjǐn dàozhàng sùdù suōduǎn zhì jǐ gè xiǎoshí, hái néng jiéshěng bǎifēn zhī èr yǐshàng de cáiwù chéngběn.",
    "transcriptVi": "Trước đây các doanh nghiệp Trung - Việt giao thương phần lớn dùng đồng USD làm đồng tiền thanh toán trung gian, doanh nghiệp phải chịu hai lần phí chuyển đổi ngoại tệ cùng tổn thất biến động tỷ giá. Ngày nay, cùng với sự hoàn thiện của kênh thanh toán Nhân dân tệ xuyên biên giới tại các ngân hàng biên giới Trung - Việt, hai bên có thể trực tiếp báo giá và quyết toán bằng Nhân dân tệ hoặc Việt Nam Đồng, không chỉ rút ngắn thời gian tiền về tài khoản xuống vài giờ mà còn tiết kiệm trên 2% chi phí tài chính.",
    "questionVi": "Việc thanh toán trực tiếp qua kênh Nhân dân tệ/VND xuyên biên giới giúp doanh nghiệp tiết kiệm được gì?",
    "options": [
      "Được ngân hàng miễn hoàn toàn tiền mua hàng",
      "Không cần phải ký hợp đồng thương mại",
      "Không cần khai báo hải quan",
      "Rút ngắn thời gian tiền về xuống vài giờ và tiết kiệm trên 2% chi phí tài chính (tránh 2 lần phí quy đổi qua USD)"
    ],
    "correctAnswer": "Rút ngắn thời gian tiền về xuống vài giờ và tiết kiệm trên 2% chi phí tài chính (tránh 2 lần phí quy đổi qua USD)",
    "explanationVi": "Câu cuối khẳng định: '不仅到账速度缩短至几个小时，还能节省百分之二以上的财务成本'."
  },
  {
    "id": "lt-hsk5-advanced-12",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Tiêu chuẩn xanh trong xuất khẩu dệt may và nội thất",
    "audioZh": "欧美及东盟高端市场对进口纺织品与家具的环保认证要求日益严格。除了常规的耐用度测试外，采购商还普遍要求工厂提供木材合法来源证明以及零甲醛环保涂料检测报告。能够率先完成绿色生产线改造的工厂，其订单溢价能力明显高于普通代工厂。",
    "pinyin": "Ōu-Měi jí Dōngméng gāoduān shìchǎng duì jìnkǒu fǎngzhīpǐn yǔ jiājù de huánbǎo rènzhèng yāoqiú rìyì yángé. Chúle chángguī de nàiyòngdù cèshì wài, cǎigòushāng hái pǔbiàn yāoqiú gōngchǎng tígōng mùcái héfǎ láiyuán zhèngmíng yǐjí líng jiǎquán huánbǎo túliào jiǎncè bàogào. Nénggòu shuàixiān wánchéng lǜsè shēngchǎnxiàn gǎizào de gōngchǎng, qí dìngdān yìjià nénglì míngxiǎn gāoyú pǔtōng dàigōngchǎng.",
    "transcriptVi": "Thị trường cao cấp Âu Mỹ và ASEAN ngày càng khắt khe về chứng nhận bảo vệ môi trường đối với hàng dệt may và nội thất nhập khẩu. Ngoài các bài kiểm tra độ bền thông thường, bên thu mua còn phổ biến yêu cầu nhà máy cung cấp chứng nhận nguồn gốc gỗ hợp pháp và báo cáo kiểm nghiệm sơn bảo vệ môi trường không chứa formaldehyde. Những nhà máy đi đầu hoàn thành cải tạo dây chuyền sản xuất xanh có năng lực định giá đơn hàng cao hơn rõ rệt so với xưởng gia công thông thường.",
    "questionVi": "Ngoài kiểm tra độ bền, các nhà thu mua nội thất cao cấp còn yêu cầu nhà máy cung cấp giấy tờ gì?",
    "options": [
      "Chứng nhận nguồn gốc gỗ hợp pháp và báo cáo kiểm nghiệm sơn không chứa formaldehyde",
      "Giấy chứng nhận nhà máy có trên 10.000 công nhân",
      "Vé máy bay của giám đốc nhà máy",
      "Hóa đơn tiền điện nước của năm trước"
    ],
    "correctAnswer": "Chứng nhận nguồn gốc gỗ hợp pháp và báo cáo kiểm nghiệm sơn không chứa formaldehyde",
    "explanationVi": "Trong bài nêu rõ: '要求工厂提供木材合法来源证明以及零甲醛环保涂料检测报告'."
  },
  {
    "id": "lt-hsk6-basic-1",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Bảo tồn di sản văn hóa phi vật thể",
    "audioZh": "非物质文化遗产的生命力在于活态传承，只有让传统技艺融入现代日常生活，才能避免其沦为博物馆里的标本。",
    "pinyin": "Fēi wùzhì wénhuà yíchǎn de shēngmìnglì zàiyú huótài chuánchéng, zhǐyǒu ràng chuántǒng jìyì róngrù xiàndài rìcháng shēnghuó, cái néng bìmiǎn qí lúnwéi bówùguǎn lǐ de biāoběn.",
    "transcriptVi": "Sức sống của di sản văn hóa phi vật thể nằm ở sự kế thừa sống động; chỉ khi để các kỹ nghệ truyền thống hòa nhập vào đời sống thường nhật hiện đại mới có thể tránh việc chúng biến thành tiêu bản trong bảo tàng.",
    "questionVi": "Theo câu nghe, làm thế nào để duy trì sức sống của di sản văn hóa phi vật thể?",
    "options": [
      "Cất giữ kín trong kho bảo tàng và cấm sử dụng",
      "Chỉ cho phép người trên 80 tuổi học nghề",
      "Đưa các kỹ nghệ truyền thống hòa nhập vào đời sống thường nhật hiện đại (kế thừa sống động)",
      "Thay thế hoàn toàn bằng máy móc công nghiệp"
    ],
    "correctAnswer": "Đưa các kỹ nghệ truyền thống hòa nhập vào đời sống thường nhật hiện đại (kế thừa sống động)",
    "explanationVi": "'生命力在于活态传承，只有让传统技艺融入现代日常生活...'."
  },
  {
    "id": "lt-hsk6-basic-2",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Năng lực thẩm định truyền thông",
    "audioZh": "在自媒体时代，面对煽动性极强的网络热点，公众应当保持审慎求证的态度，切勿在真相未明前盲目转发。",
    "pinyin": "Zài zìméitǐ shídài, miànduì shāndòngxìng jí qiáng de wǎngluò rèdiǎn, gōngzhòng yīngdāng bǎochí shěnshèn qiúzhèng de tàidu, qièwù zài zhēnxiàng wèimíng qián mángmù zhuǎnfā.",
    "transcriptVi": "Trong thời đại truyền thông cá nhân, trước những điểm nóng mạng có tính kích động mạnh, công chúng cần giữ thái độ thận trọng kiểm chứng, tuyệt đối không chia sẻ mù quáng khi sự thật chưa sáng tỏ.",
    "questionVi": "Người nói khuyên công chúng nên làm gì trước các tin nóng có tính kích động trên mạng?",
    "options": [
      "Chia sẻ ngay lập tức để thu hút lượt xem",
      "Xóa toàn bộ ứng dụng trên điện thoại",
      "Tin tưởng tuyệt đối vào mọi bình luận ẩn danh",
      "Giữ thái độ thận trọng kiểm chứng, không chia sẻ mù quáng khi chưa rõ sự thật"
    ],
    "correctAnswer": "Giữ thái độ thận trọng kiểm chứng, không chia sẻ mù quáng khi chưa rõ sự thật",
    "explanationVi": "'保持审慎求证的态度，切勿在真相未明前盲目转发'."
  },
  {
    "id": "lt-hsk6-basic-3",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Hiệu ứng tâm lý neo giá (Anchoring Effect)",
    "audioZh": "商家常在促销时先标出一个高昂的原价，再划掉写上折扣价，这正是利用了消费心理学中的“锚定效应”。",
    "pinyin": "Shāngjiā cháng zài cùxiāo shí xiān biāochū yí gè gāo'áng de yuánjià, zài huádiào xiěshàng zhékòujià, zhè zhèng shì lìyòng le xiāofèi xīnlǐxué zhōng de “máodìng xiàoyìng”.",
    "transcriptVi": "Các thương nhân khi khuyến mãi thường ghi một mức giá gốc rất cao trước rồi gạch đi viết giá chiết khấu, đây chính là lợi dụng 'hiệu ứng mỏ neo' trong tâm lý học tiêu dùng.",
    "questionVi": "Cách ghi giá gốc thật cao rồi gạch đi để hiển thị giá giảm là ứng dụng hiệu ứng tâm lý nào?",
    "options": [
      "Hiệu ứng mỏ neo (锚定效应 - Anchoring Effect)",
      "Hiệu ứng cánh bướm",
      "Hiệu ứng nhà kính",
      "Hiệu ứng đám đông"
    ],
    "correctAnswer": "Hiệu ứng mỏ neo (锚定效应 - Anchoring Effect)",
    "explanationVi": "Trong câu giải thích rõ: '利用了消费心理学中的“锚定效应”'."
  },
  {
    "id": "lt-hsk6-basic-4",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về thách thức của xã hội già hóa",
    "audioZh": "随着人口老龄化程度不断加深，社会公共服务体系面临着哪些亟待解决的课题？",
    "pinyin": "Suízhe rénkǒu lǎolínghuà chéngdù búduàn jiāshēn, shèhuì gōnggòng fúwù tǐxì miànlín zhe nǎxiē jídài jiějué de kètí?",
    "transcriptVi": "Cùng với mức độ già hóa dân số ngày càng sâu sắc, hệ thống dịch vụ công xã hội đang đối mặt với những bài toán cấp bách nào cần giải quyết?",
    "questionVi": "Đáp án nào toàn diện và chính xác nhất?",
    "options": [
      "应该减少医院的数量。 (Nên giảm số lượng bệnh viện.)",
      "亟需完善社区居家养老配套设施，并加快培养专业的老年医疗与康复护理人才。 (Cấp thiết cần hoàn thiện cơ sở hạ tầng dưỡng lão tại cộng đồng và gia đình, đồng thời đẩy nhanh đào tạo nhân lực y tế và điều dưỡng phục hồi chức năng chuyên nghiệp cho người cao tuổi.)",
      "所有老年人都必须搬到国外居住。 (Tất cả người cao tuổi đều phải chuyển ra nước ngoài sống.)",
      "取消所有公共交通工具。 (Hủy bỏ tất cả phương tiện giao thông công cộng.)"
    ],
    "correctAnswer": "亟需完善社区居家养老配套设施，并加快培养专业的老年医疗与康复护理人才。 (Cấp thiết cần hoàn thiện cơ sở hạ tầng dưỡng lão tại cộng đồng và gia đình, đồng thời đẩy nhanh đào tạo nhân lực y tế và điều dưỡng phục hồi chức năng chuyên nghiệp cho người cao tuổi.)",
    "explanationVi": "Đáp án nêu đúng trọng tâm: hoàn thiện hạ tầng dưỡng lão cộng đồng và đào tạo nhân lực y tế, điều dưỡng người cao tuổi."
  },
  {
    "id": "lt-hsk6-basic-5",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về sự thành công của sản phẩm văn hóa sáng tạo (文创)",
    "audioZh": "为什么故宫和各大博物馆推出的文创产品近年来能够深受年轻消费者的追捧？",
    "pinyin": "Wèishénme Gùgōng hé gè dà bówùguǎn tuīchū de wénchuàng chǎnpǐn jìnnián lái nénggòu shēnshòu niánqīng xiāofèizhě de zhuīpěng?",
    "transcriptVi": "Tại sao các sản phẩm sáng tạo văn hóa (văn sáng) do Cố Cung và các bảo tàng lớn ra mắt những năm gần đây lại được người tiêu dùng trẻ săn đón nồng nhiệt đến vậy?",
    "questionVi": "Câu trả lời nào phân tích sâu sắc nhất?",
    "options": [
      "因为博物馆强制每个游客必须购买。 (Vì bảo tàng ép buộc mỗi du khách đều phải mua.)",
      "因为这些产品完全不收任何费用。 (Vì những sản phẩm này hoàn toàn miễn phí.)",
      "因为它们巧妙地将严肃的历史文物与现代实用设计相结合，赋予了传统文化时尚的表达方式。 (Vì chúng đã kết hợp khéo léo các văn vật lịch sử trang nghiêm với thiết kế tiện dụng hiện đại, trao cho văn hóa truyền thống phương thức biểu đạt thời thượng.)",
      "因为年轻人从来没见过纸张。 (Vì giới trẻ chưa bao giờ nhìn thấy giấy.)"
    ],
    "correctAnswer": "因为它们巧妙地将严肃的历史文物与现代实用设计相结合，赋予了传统文化时尚的表达方式。 (Vì chúng đã kết hợp khéo léo các văn vật lịch sử trang nghiêm với thiết kế tiện dụng hiện đại, trao cho văn hóa truyền thống phương thức biểu đạt thời thượng.)",
    "explanationVi": "Đáp án phân tích đúng sự kết hợp giữa văn vật lịch sử và thiết kế hiện đại ('将严肃的历史文物与现代实用设计相结合')."
  },
  {
    "id": "lt-hsk6-basic-6",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về nguyên tắc phổ cập khoa học",
    "audioZh": "向普通大众普及前沿科学知识时，科研工作者最需要注意的是什么？",
    "pinyin": "Xiàng pǔtōng dàzhòng pǔjí qiányán kēxué zhīshi shí, kēyán gōngzuòzhě zuì xūyào zhùyì de shì shénme?",
    "transcriptVi": "Khi phổ cập kiến thức khoa học tiên phong cho đại chúng bình thường, người làm nghiên cứu khoa học cần chú ý nhất điều gì?",
    "questionVi": "Đáp án nào phù hợp nhất?",
    "options": [
      "尽量使用没人能看懂的专业术语。 (Cố gắng dùng thật nhiều thuật ngữ chuyên ngành không ai hiểu nổi.)",
      "不需要验证实验数据的真伪。 (Không cần kiểm chứng tính xác thực của dữ liệu thí nghiệm.)",
      "只对博士生进行科普讲座。 (Chỉ tổ chức講座 phổ cập cho nghiên cứu sinh tiến sĩ.)",
      "应当在确保科学严谨性的前提下，用通俗生动的比喻把深奥的原理阐释清楚。 (Nên dùng những phép ẩn dụ bình dị sinh động để giải thích rõ các nguyên lý thâm sâu trên tiền đề vẫn đảm bảo tính chặt chẽ khoa học.)"
    ],
    "correctAnswer": "应当在确保科学严谨性的前提下，用通俗生动的比喻把深奥的原理阐释清楚。 (Nên dùng những phép ẩn dụ bình dị sinh động để giải thích rõ các nguyên lý thâm sâu trên tiền đề vẫn đảm bảo tính chặt chẽ khoa học.)",
    "explanationVi": "Phổ cập khoa học cần vừa đảm bảo tính chặt chẽ ('科学严谨性') vừa bình dị dễ hiểu ('通俗生动的比喻')."
  },
  {
    "id": "lt-hsk6-basic-7",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Bàn về cải tạo không gian xanh đô thị",
    "audioZh": "女：你看，以前这片废弃的铁路沿线改造为带状口袋公园后，周边居民晚饭后都有了散步健身的好去处。\n男：是啊，城市更新不一定要大拆大建，这种“见缝插针”式的微改造既节约财政资金，又切实提升了市民的幸福感。",
    "pinyin": "Nǚ: Nǐ kàn, yǐqián zhè piàn fèiqì de tiělù yánxiàn gǎizào wéi dàizhuàng kǒudài gōngyuán hòu, zhōubiān jūmín wǎnfàn hòu dōu yǒu le sànbù jiànshēn de hǎo qùchù.\nNán: Shì a, chéngshì gēngxīn bù yídìng yào dàchāidàjiàn, zhè zhǒng “jiànfèngchāzhēn” shì de wēi gǎizào jì jiéyuē cáizhèng zījīn, yòu qièshí tíshēng le shìmín de xìngfúgǎn.",
    "transcriptVi": "Nữ: Anh nhìn xem, sau khi dải đất bỏ hoang dọc đường sắt trước đây được cải tạo thành công viên bỏ túi dạng dải, cư dân xung quanh đều có nơi tốt để đi dạo tập thể dục sau bữa tối.\nNam: Đúng vậy, chỉnh trang đô thị không nhất thiết phải phá dỡ xây dựng quy mô lớn, kiểu cải tạo vi mô tận dụng từng khoảng trống này vừa tiết kiệm ngân sách tài chính vừa nâng cao thiết thực cảm giác hạnh phúc của người dân.",
    "questionVi": "Bạn nam đánh giá thế nào về mô hình 'công viên bỏ túi (口袋公园)' cải tạo từ đất bỏ hoang?",
    "options": [
      "Vừa tiết kiệm ngân sách tài chính vừa nâng cao thiết thực hạnh phúc của người dân mà không cần phá dỡ quy mô lớn",
      "Làm gây tắc nghẽn giao thông nghiêm trọng",
      "Tốn kém ngân sách gấp 10 lần xây trung tâm thương mại",
      "Không có người dân nào đến sử dụng"
    ],
    "correctAnswer": "Vừa tiết kiệm ngân sách tài chính vừa nâng cao thiết thực hạnh phúc của người dân mà không cần phá dỡ quy mô lớn",
    "explanationVi": "Bạn nam nhận định: '这种“见缝插针”式的微改造既节约财政资金，又切实提升了市民的幸福感'."
  },
  {
    "id": "lt-hsk6-basic-8",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Tranh luận về tác phẩm văn học chuyển thể thành phim",
    "audioZh": "男：那部获得茅盾文学奖的小说改编成电视剧后，虽然收视率很高，但原著读者却批评它删减了太多心理描写。\n女：文学与影视本来就是两种不同的艺术媒介。电视剧需要在有限的篇幅内强化戏剧冲突，只要核心精神没变，适度的改编是可以理解的。",
    "pinyin": "Nán: Nà bù huòdé Máodùn Wénxuéjiǎng de xiǎoshuō gǎibiān chéng diànshìjù hòu, suīrán shōushìlǜ hěn gāo, dàn yuánzhù dúzhě què pīpíng tā shānjiǎn le tài duō xīnlǐ miáoxiě.\nNǚ: Wénxué yǔ yǐngshì běnlái jiù shì liǎng zhǒng bùtóng de yìshù méijiè. Diànshìjù xūyào zài yǒuxiàn de piānfú nèi qiánghuà xìjù chōngtū, zhǐyào héxīn jīngshén méi biàn, shìdù de gǎibiān shì kěyǐ lǐjiě de.",
    "transcriptVi": "Nam: Cuốn tiểu thuyết đoạt giải Văn học Mao Thuẫn đó sau khi chuyển thể thành phim truyền hình tuy tỷ suất người xem rất cao nhưng độc giả nguyên tác lại phê bình phim cắt bỏ quá nhiều miêu tả tâm lý.\nNữ: Văn học và điện ảnh truyền hình vốn là hai phương tiện nghệ thuật khác nhau. Phim truyền hình cần cường hóa xung đột kịch tính trong thời lượng hữu hạn, chỉ cần tinh thần cốt lõi không đổi thì việc cải biên vừa phải là có thể hiểu được.",
    "questionVi": "Quan điểm của bạn nữ về việc chuyển thể tiểu thuyết thành phim truyền hình là gì?",
    "options": [
      "Phim truyền hình bắt buộc phải giữ nguyên từng dấu chấm phẩy của tiểu thuyết",
      "Văn học và phim ảnh là hai phương tiện khác nhau, miễn giữ được tinh thần cốt lõi thì việc cải biên để tăng kịch tính là hợp lý",
      "Không bao giờ nên chuyển thể tiểu thuyết thành phim",
      "Chỉ nên làm phim hoạt hình từ tiểu thuyết"
    ],
    "correctAnswer": "Văn học và phim ảnh là hai phương tiện khác nhau, miễn giữ được tinh thần cốt lõi thì việc cải biên để tăng kịch tính là hợp lý",
    "explanationVi": "Bạn nữ nêu rõ: '只要核心精神没变，适度的改编是可以理解的'."
  },
  {
    "id": "lt-hsk6-basic-9",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Chuyển đổi mô hình từ gia công (OEM) sang thương hiệu riêng (OBM)",
    "audioZh": "女：我们替国外大牌代工了十几年，虽然订单稳定，但利润率还不到百分之五，稍微遇到原材料涨价就接近亏损。\n男：这正是传统代工企业的痛点。我们必须把每年营收的百分之八投入自主研发，逐步打造自有品牌，才能掌握定价权。",
    "pinyin": "Nǚ: Wǒmen tì guówài dàpái dàigōng le shíjǐ nián, suīrán dìngdān wěndìng, dàn lìrùnlǜ hái búdào bǎifēn zhī wǔ, shāowēi yùdào yuáncáiliào zhǎngjià jiù jiējìn kuīsǔn.\nNán: Zhè zhèng shì chuántǒng dàigōng qǐyè de tòngdiǎn. Wǒmen bìxū bǎ měinián yíngshōu de bǎifēn zhī bā tóurù zìzhǔ yánfā, zhúbù dǎzào zìyǒu pǐnpái, cái néng zhǎngwò dìngjiàquán.",
    "transcriptVi": "Nữ: Chúng ta gia công cho các thương hiệu lớn nước ngoài hơn mười năm rồi, tuy đơn hàng ổn định nhưng tỷ suất lợi nhuận chưa tới 5%, hễ gặp nguyên liệu tăng giá một chút là gần như thua lỗ.\nNam: Đây chính là điểm đau của doanh nghiệp gia công truyền thống. Chúng ta bắt buộc phải đầu tư 8% doanh thu hàng năm vào nghiên cứu phát triển tự chủ, từng bước xây dựng thương hiệu riêng thì mới nắm được quyền định giá.",
    "questionVi": "Theo bạn nam, doanh nghiệp cần làm gì để thoát khỏi cảnh lợi nhuận thấp và nắm được quyền định giá?",
    "options": [
      "Giảm chất lượng sản phẩm để tiết kiệm chi phí",
      "Sa thải toàn bộ công nhân kỹ thuật",
      "Đầu tư 8% doanh thu hàng năm vào R&D tự chủ và từng bước xây dựng thương hiệu riêng",
      "Ngừng sản xuất và chuyển sang buôn bán bất động sản"
    ],
    "correctAnswer": "Đầu tư 8% doanh thu hàng năm vào R&D tự chủ và từng bước xây dựng thương hiệu riêng",
    "explanationVi": "Bạn nam khẳng định: '必须把每年营收的百分之八投入自主研发，逐步打造自有品牌，才能掌握定价权'."
  },
  {
    "id": "lt-hsk6-basic-10",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Nghịch lý của sự lựa chọn (Paradox of Choice)",
    "audioZh": "心理学研究发现，当商品的选项从三个增加到三十个时，消费者的购买意愿反而会显著下降。这是因为过多的选择会大幅增加人们的决策成本，使人担心自己没有选到最优项，从而产生后悔与焦虑感。因此，优秀的商业展示往往懂得替用户做减法，精选出两三款最核心的方案。",
    "pinyin": "Xīnlǐxué yánjiū fāxiàn, dāng shāngpǐn de xuǎnxiàng cóng sān gè zēngjiā dào sānshí gè shí, xiāofèizhě de gòumǎi yìyuàn fǎn'ér huì xiǎnzhù xiàjiàng. Zhè shì yīnwèi guòduō de xuǎnzé huì dàfú zēngjiā rénmen de juécè chéngběn, shǐ rén dānxīn zìjǐ méiyǒu xuǎndào zuìyōuxiàng, cóng'ér chǎnshēng hòuhuǐ yǔ jiāolǜgǎn. Yīncǐ, yōuxiù de shāngyè zhǎnshì wǎngwǎng dǒngde tì yònghù zuò jiǎnfǎ, jīngxuǎn chū liǎng-sān kuǎn zuì héxīn de fāng'àn.",
    "transcriptVi": "Nghiên cứu tâm lý học phát hiện khi số lựa chọn hàng hóa tăng từ 3 lên 30, ý muốn mua hàng của người tiêu dùng ngược lại sẽ giảm đáng kể. Đó là vì quá nhiều lựa chọn sẽ làm tăng mạnh chi phí ra quyết định của con người, khiến người ta lo lắng mình chưa chọn được phương án tối ưu nhất, từ đó nảy sinh cảm giác hối tiếc và lo âu. Do đó, cách trưng bày thương mại xuất sắc thường biết làm phép trừ thay cho người dùng, tinh tuyển ra 2-3 phương án cốt lõi nhất.",
    "questionVi": "Tại sao việc đưa ra tới 30 lựa chọn sản phẩm lại làm giảm ý muốn mua hàng của người tiêu dùng?",
    "options": [
      "Vì cửa hàng không đủ chỗ để trưng bày 30 sản phẩm",
      "Vì người tiêu dùng không biết đếm quá số 10",
      "Vì 30 sản phẩm đều bị hỏng",
      "Vì làm tăng chi phí ra quyết định, khiến người mua lo lắng và sợ hối tiếc vì không chọn được phương án tốt nhất"
    ],
    "correctAnswer": "Vì làm tăng chi phí ra quyết định, khiến người mua lo lắng và sợ hối tiếc vì không chọn được phương án tốt nhất",
    "explanationVi": "Bài nghe giải thích: '过多的选择会大幅增加人们的决策成本，使人担心自己没有选到最优项，从而产生后悔与焦虑感'."
  },
  {
    "id": "lt-hsk6-basic-11",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Nghệ thuật sửa đồ gốm vỡ bằng vàng (Kintsugi / 金缮)",
    "audioZh": "在传统器物修复艺术中，有一种被称为“金缮”的技艺。工匠不会刻意掩盖瓷器破碎的裂痕，而是用天然大漆将碎片粘合，再在裂纹处敷上一层金粉。原本残缺的伤口在金线的勾勒下反而成为独一无二的艺术纹理，这体现了接纳不完美、于破碎处重获新生的东方美学智慧。",
    "pinyin": "Zài chuántǒng qìwù xiūfù yìshù zhōng, yǒu yì zhǒng bèi chēngwéi “jīnshàn” de jìyì. Gōngjiàng búhuì kèyì yǎngài cíqì pòsuì de lièhén, ér shì yòng tiānrán dàqī jiāng suìpiàn niánhé, zài zài lièwén chù fūshàng yì céng jīnfěn. Yuánběn cánquē de shāngkǒu zài jīnxiàn de gōulè xià fǎn'ér chéngwéi dúyīwú'èr de yìshù wénlǐ, zhè tǐxiàn le jiēnà bù wánměi, yú pòsuì chù chónghuò xīnshēng de Dōngfāng měixué zhìhuì.",
    "transcriptVi": "Trong nghệ thuật phục chế đồ vật truyền thống, có một kỹ nghệ gọi là 'Kim thiện' (hàn gắn bằng vàng). Người nghệ nhân không cố tình che giấu vết nứt vỡ của đồ sứ mà dùng sơn mài tự nhiên gắn kết các mảnh vỡ lại, sau đó phủ một lớp bột vàng lên vết nứt. Vết thương khiếm khuyết ban đầu dưới nét phác họa của đường chỉ vàng ngược lại trở thành hoa văn nghệ thuật độc nhất vô nhị, thể hiện trí tuệ mỹ học phương Đông chấp nhận sự không hoàn hảo và tái sinh từ nơi đổ vỡ.",
    "questionVi": "Triết lý mỹ học phương Đông được thể hiện qua nghệ thuật phục chế gốm sứ 'Kim thiện (金缮)' là gì?",
    "options": [
      "Chấp nhận sự không hoàn hảo và biến vết nứt đổ vỡ thành vẻ đẹp tái sinh độc nhất vô nhị",
      "Che giấu hoàn toàn mọi vết nứt để giả làm đồ mới",
      "Vứt bỏ ngay bất kỳ đồ vật nào có vết xước nhỏ",
      "Chỉ sử dụng đồ bằng vàng nguyên khối"
    ],
    "correctAnswer": "Chấp nhận sự không hoàn hảo và biến vết nứt đổ vỡ thành vẻ đẹp tái sinh độc nhất vô nhị",
    "explanationVi": "Câu cuối nêu rõ: '体现了接纳不完美、于破碎处重获新生的东方美学智慧'."
  },
  {
    "id": "lt-hsk6-basic-12",
    "level": "HSK6",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Vai trò của rừng ngập mặn đối với hệ sinh thái ven biển",
    "audioZh": "红树林被誉为“海岸卫士”和“地球之肾”。它们发达的根系不仅能有效抵御台风巨浪、防止海岸线侵蚀，还为数百种鱼类、虾蟹和候鸟提供了繁衍生息的家园。更重要的是，红树林的固碳效率是普通陆地森林的数倍，在应对全球气候变化中发挥着不可替代的作用。",
    "pinyin": "Hóngshùlín bèi yùwéi “hǎi'àn wèishì” hé “dìqiú zhī shèn”. Tāmen fādá de gēnxì bùjǐn néng yǒuxiào dǐyù táifēng jùlàng, fángzhǐ hǎi'ànxiàn qīnshí, hái wèi shùbǎi zhǒng yúlèi, xiāxiè hé hòuniǎo tígōng le fányǎn shēngxī de jiāyuán. Gèng zhòngyào de shì, hóngshùlín de gùtàn xiàolǜ shì pǔtōng lùdì sēnlín de shù bèi, zài yìngduì quánqiú qìhòu biànhuà zhōng fāhuī zhe bùkě tìdài de zuòyòng.",
    "transcriptVi": "Rừng ngập mặn được ca ngợi là 'vệ sĩ bờ biển' và 'lá thận của Trái Đất'. Bộ rễ phát triển của chúng không chỉ chống đỡ hiệu quả sóng lớn bão tố, ngăn chặn xói mòn đường bờ biển mà còn cung cấp ngôi nhà sinh sôi cho hàng trăm loài cá, tôm cua và chim di cư. Quan trọng hơn, hiệu suất hấp thụ và cố định carbon của rừng ngập mặn cao gấp nhiều lần rừng trên cạn thông thường, đóng vai trò không thể thay thế trong việc ứng phó biến đổi khí hậu toàn cầu.",
    "questionVi": "Đâu là đặc điểm nổi bật của rừng ngập mặn được nêu trong đoạn băng?",
    "options": [
      "Chỉ mọc ở vùng sa mạc khô cằn",
      "Chống xói mòn bờ biển, bảo vệ đa dạng sinh học và có hiệu suất cố định carbon cao gấp nhiều lần rừng trên cạn",
      "Có lá cây màu đỏ tươi quanh năm và không có rễ",
      "Hấp thụ carbon kém hơn cỏ tự nhiên"
    ],
    "correctAnswer": "Chống xói mòn bờ biển, bảo vệ đa dạng sinh học và có hiệu suất cố định carbon cao gấp nhiều lần rừng trên cạn",
    "explanationVi": "Đoạn văn nêu đủ 3 vai trò: chống sóng bão xói mòn, nơi sinh sôi của sinh vật biển/chim di cư, và '固碳效率是普通陆地森林的数倍'."
  },
  {
    "id": "lt-hsk6-advanced-1",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Hiệp định thương mại tự do RCEP và quy tắc xuất xứ cộng gộp",
    "audioZh": "在RCEP原产地累积规则下，越南服装厂使用中国生产的面料加工成衣出口到日本，更容易满足原产地标准并享受零关税待遇。",
    "pinyin": "Zài RCEP yuánchǎndì lěijī guīzé xià, Yuènán fúzhuāngchǎng shǐyòng Zhōngguó shēngchǎn de miànliào jiāgōng chéngyī chūkǒu dào Rìběn, gèng róngyì mǎnzú yuánchǎndì biāozhǔn bìng xiǎngshòu líng guānshuì dàiyù.",
    "transcriptVi": "Dưới quy tắc cộng gộp xuất xứ của Hiệp định RCEP, nhà máy may mặc Việt Nam sử dụng vải sản xuất tại Trung Quốc để gia công quần áo xuất khẩu sang Nhật Bản sẽ dễ dàng đáp ứng tiêu chuẩn xuất xứ hơn và được hưởng ưu đãi thuế quan 0%.",
    "questionVi": "Quy tắc cộng gộp xuất xứ trong RCEP mang lại lợi ích gì cho nhà máy may mặc tại Việt Nam?",
    "options": [
      "Không cần phải trả tiền mua vải cho nhà cung cấp Trung Quốc",
      "Được miễn toàn bộ chi phí vận chuyển hàng không",
      "Dùng vải từ Trung Quốc may quần áo xuất sang Nhật Bản vẫn dễ đạt chuẩn xuất xứ để hưởng thuế suất 0%",
      "Không cần kiểm tra chất lượng khi xuất sang Nhật Bản"
    ],
    "correctAnswer": "Dùng vải từ Trung Quốc may quần áo xuất sang Nhật Bản vẫn dễ đạt chuẩn xuất xứ để hưởng thuế suất 0%",
    "explanationVi": "'使用中国生产的面料加工成衣出口到日本，更容易满足原产地标准并享受零关税待遇'."
  },
  {
    "id": "lt-hsk6-advanced-2",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Thẩm định chuyên sâu (Due Diligence) trong M&A xuyên biên giới",
    "audioZh": "跨国并购交易失败的首要原因往往是买方在尽职调查阶段未能识别出目标公司潜藏的税务纠纷与环保违规负债。",
    "pinyin": "Kuàguó bìnggòu jiāoyì shībài de shǒuyào yuányīn wǎngwǎng shì mǎifāng zài jìnzhí diàochá jiēduàn wèinéng shíbié chū mùbiāo gōngsī qiáncáng de shuìwù jiūfēn yǔ huánbǎo wéiguī fùzhài.",
    "transcriptVi": "Nguyên nhân hàng đầu khiến các thương vụ M&A xuyên quốc gia thất bại thường là do bên mua trong giai đoạn thẩm định chuyên sâu (due diligence) đã không nhận diện được các tranh chấp thuế và khoản nợ vi phạm môi trường tiềm ẩn của công ty mục tiêu.",
    "questionVi": "Theo câu nghe, rủi ro nào thường bị bỏ sót trong giai đoạn thẩm định chuyên sâu (尽职调查) dẫn đến thất bại khi M&A?",
    "options": [
      "Địa chỉ trụ sở chính của công ty mục tiêu",
      "Số lượng bàn ghế trong phòng họp",
      "Tên tiếng Anh của tổng giám đốc",
      "Các tranh chấp về thuế và khoản nợ vi phạm quy định môi trường tiềm ẩn của công ty mục tiêu"
    ],
    "correctAnswer": "Các tranh chấp về thuế và khoản nợ vi phạm quy định môi trường tiềm ẩn của công ty mục tiêu",
    "explanationVi": "'未能识别出目标公司潜藏的税务纠纷与环保违规负债'."
  },
  {
    "id": "lt-hsk6-advanced-3",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Nghiệp vụ tài chính chuỗi cung ứng (Supply Chain Finance)",
    "audioZh": "核心企业通过签发数字化应收账款凭证，使处于供应链上游的中小微配套厂商能够凭此向银行申请低息融资。",
    "pinyin": "Héxīn qǐyè tōngguò qiānfā shùzìhuà yīngshōu zhàngkuǎn píngzhèng, shǐ chǔyú gōngyìngliàn shàngyóu de zhōng-xiǎo-wēi pèitào chǎngshāng nénggòu píng cǐ xiàng yínháng shēnqǐng dīxī róngzī.",
    "transcriptVi": "Doanh nghiệp hạt nhân thông qua việc phát hành chứng từ khoản phải thu số hóa đã giúp các nhà sản xuất phụ trợ vừa, nhỏ và siêu nhỏ ở thượng nguồn chuỗi cung ứng có thể dựa vào đó để vay vốn lãi suất thấp từ ngân hàng.",
    "questionVi": "Chứng từ khoản phải thu số hóa do doanh nghiệp hạt nhân phát hành giúp ích gì cho các nhà cung cấp vừa và nhỏ?",
    "options": [
      "Giúp họ dùng chứng từ đó để đăng ký vay vốn lãi suất thấp tại ngân hàng",
      "Giúp họ không cần sản xuất hàng hóa nữa",
      "Giúp họ mua cổ phiếu miễn phí",
      "Miễn toàn bộ thuế thu nhập doanh nghiệp"
    ],
    "correctAnswer": "Giúp họ dùng chứng từ đó để đăng ký vay vốn lãi suất thấp tại ngân hàng",
    "explanationVi": "'使处于供应链上游的中小微配套厂商能够凭此向银行申请低息融资'."
  },
  {
    "id": "lt-hsk6-advanced-4",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về biện pháp ứng phó điều tra chống bán phá giá",
    "audioZh": "当行业协会收到进口国发起的反倾销立案调查通知时，出口企业应当如何在法定期限内积极应诉？",
    "pinyin": "Dāng hángyè xiéhuì shōudào jìnkǒuguó fāqǐ de fǎnqīngxiāo lì'àn diàochá tōngzhī shí, chūkǒu qǐyè yīngdāng rúhé zài fǎdìng qīxiàn nèi jījí yìngsù?",
    "transcriptVi": "Khi hiệp hội ngành nghề nhận được thông báo khởi xướng điều tra chống bán phá giá từ nước nhập khẩu, doanh nghiệp xuất khẩu nên tích cực kháng kiện thế nào trong thời hạn luật định?",
    "questionVi": "Đáp án nào thể hiện đúng nghiệp vụ luật thương mại quốc tế?",
    "options": [
      "立即销毁公司所有的财务账本。 (Lập tức tiêu hủy toàn bộ sổ sách tài chính của công ty.)",
      "应立即聘请专业国际贸易律师，整理完整的原材料采购、生产成本及内销价格账目，证明不存在恶性低价倾销。 (Cần lập tức thuê luật sư thương mại quốc tế chuyên nghiệp, hệ thống hóa đầy đủ sổ sách thu mua nguyên liệu, chi phí sản xuất và giá bán nội địa để chứng minh không tồn tại hành vi bán phá giá ác ý.)",
      "拒绝回复进口国调查机关的任何信函。 (Từ chối trả lời bất kỳ thư từ nào của cơ quan điều tra nước nhập khẩu.)",
      "把产品价格再降低百分之八十。 (Hạ giá sản phẩm xuống thêm 80% nữa.)"
    ],
    "correctAnswer": "应立即聘请专业国际贸易律师，整理完整的原材料采购、生产成本及内销价格账目，证明不存在恶性低价倾销。 (Cần lập tức thuê luật sư thương mại quốc tế chuyên nghiệp, hệ thống hóa đầy đủ sổ sách thu mua nguyên liệu, chi phí sản xuất và giá bán nội địa để chứng minh không tồn tại hành vi bán phá giá ác ý.)",
    "explanationVi": "Trong điều tra chống bán phá giá ('反倾销调查'), doanh nghiệp cần thuê luật sư chuyên ngành và nộp đầy đủ chứng từ hạch toán chi phí để chứng minh không bán phá giá."
  },
  {
    "id": "lt-hsk6-advanced-5",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về quản trị rủi ro biến động tỷ giá ngoại hối",
    "audioZh": "在人民币与美元汇率双向波动加剧的背景下，年出口额超千万美元的外贸企业该如何锁定预期利润？",
    "pinyin": "Zài Rénmínbì yǔ Měiyuán huìlǜ shuāngxiàng bōdòng jiājù de bèijǐng xià, nián chūkǒu'é chāo qiānwàn Měiyuán de wàimào qǐyè gāi rúhé suǒdìng yùqī lìrùn?",
    "transcriptVi": "Trong bối cảnh tỷ giá Nhân dân tệ và USD biến động hai chiều gay gắt, doanh nghiệp ngoại thương có kim ngạch xuất khẩu trên 10 triệu USD/năm nên làm thế nào để khóa chặt lợi nhuận kỳ vọng?",
    "questionVi": "Câu trả lời nào đúng chuẩn quản trị tài chính doanh nghiệp?",
    "options": [
      "把所有货款都换成现金藏在仓库里。 (Đổi toàn bộ tiền hàng thành tiền mặt giấu trong kho.)",
      "停止一切进出口业务五年。 (Ngừng mọi hoạt động xuất nhập khẩu trong 5 năm.)",
      "可以通过银行办理远期结售汇或外汇期权业务来对冲汇率风险，并在合同中增设汇率波动价格调整条款。 (Có thể thực hiện nghiệp vụ mua bán ngoại tệ kỳ hạn hoặc quyền chọn ngoại hối qua ngân hàng để phòng vệ rủi ro tỷ giá, đồng thời bổ sung điều khoản điều chỉnh giá theo biến động tỷ giá trong hợp đồng.)",
      "要求客户用黄金支付。 (Yêu cầu khách hàng thanh toán bằng vàng thỏi.)"
    ],
    "correctAnswer": "可以通过银行办理远期结售汇或外汇期权业务来对冲汇率风险，并在合同中增设汇率波动价格调整条款。 (Có thể thực hiện nghiệp vụ mua bán ngoại tệ kỳ hạn hoặc quyền chọn ngoại hối qua ngân hàng để phòng vệ rủi ro tỷ giá, đồng thời bổ sung điều khoản điều chỉnh giá theo biến động tỷ giá trong hợp đồng.)",
    "explanationVi": "Sử dụng hợp đồng kỳ hạn ngoại tệ ('远期结售汇'), quyền chọn ('外汇期权') và điều khoản điều chỉnh giá là công cụ chuẩn để khóa rủi ro tỷ giá."
  },
  {
    "id": "lt-hsk6-advanced-6",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về ưu thế của trọng tài thương mại quốc tế so với kiện tụng tòa án",
    "audioZh": "为什么跨国商事合同的当事方通常更倾向于选择国际仲裁，而不是去一方法院提起诉讼？",
    "pinyin": "Wèishénme kuàguó shāngshì hétong de dāngshìfāng tōngcháng gèng qīngxiàng yú xuǎnzé guójì zhòngcái, ér bú shì qù yìfāng fǎyuàn tíqǐ sùsòng?",
    "transcriptVi": "Tại sao các bên trong hợp đồng thương mại xuyên quốc gia thường có xu hướng chọn trọng tài quốc tế hơn là khởi kiện tại tòa án của một bên?",
    "questionVi": "Đáp án nào giải thích chính xác nhất?",
    "options": [
      "因为国际仲裁完全不需要支付任何费用。 (Vì trọng tài quốc tế hoàn toàn không tốn bất kỳ chi phí nào.)",
      "因为仲裁员不需要懂法律知识。 (Vì trọng tài viên không cần hiểu kiến thức pháp luật.)",
      "因为法院不审理任何商业案件。 (Vì tòa án không xét xử bất kỳ vụ án thương mại nào.)",
      "因为仲裁程序严格保密、一裁终局效率高，且根据《纽约公约》，仲裁裁决可在全球一百多个缔约国得到承认与强制执行。 (Vì thủ tục trọng tài bảo mật nghiêm ngặt, phán quyết chung thẩm một lần có hiệu quả cao, và theo Công ước New York, phán quyết trọng tài được công nhận và cưỡng chế thi hành tại hơn 100 quốc gia thành viên trên toàn cầu.)"
    ],
    "correctAnswer": "因为仲裁程序严格保密、一裁终局效率高，且根据《纽约公约》，仲裁裁决可在全球一百多个缔约国得到承认与强制执行。 (Vì thủ tục trọng tài bảo mật nghiêm ngặt, phán quyết chung thẩm một lần có hiệu quả cao, và theo Công ước New York, phán quyết trọng tài được công nhận và cưỡng chế thi hành tại hơn 100 quốc gia thành viên trên toàn cầu.)",
    "explanationVi": "3 ưu điểm cốt lõi của trọng tài thương mại quốc tế: bảo mật ('保密'), chung thẩm một lần ('一裁终局'), và thi hành xuyên biên giới theo Công ước New York."
  },
  {
    "id": "lt-hsk6-advanced-7",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Tái cấu trúc danh mục đầu tư của tập đoàn",
    "audioZh": "女：集团董事会昨晚审议通过了剥离传统燃油车零部件业务的决议，不少老员工对此感到不太理解。\n男：虽然那块业务目前还能产生微薄现金流，但毛利率已连续三年下滑。只有果断回笼资金，集中投向固态电池与智能驾驶芯片，集团才能在未来十年的竞争中立于不败之地。",
    "pinyin": "Nǚ: Jítuán dǒngshìhuì zuówǎn shěnyì tōngguò le bōlí chuántǒng rányóuchē língbùjiàn yèwù de juéyì, bùshǎo lǎo yuángōng duì cǐ gǎndào bú tài lǐjiě.\nNán: Suīrán nà kuài yèwù mùqián hái néng chǎnshēng wēibó xiànjīnliú, dàn máolìlǜ yǐ liánxù sān nián xiàhuá. Zhǐyǒu guǒduàn huílóng zījīn, jízhōng tóuxiàng gùtài diànchí yǔ zhìnéng jiàshǐ xīnpiàn, jítuán cái néng zài wèilái shí nián de jìngzhēng zhōng lìyúbúbàizhīdì.",
    "transcriptVi": "Nữ: Hội đồng quản trị tập đoàn tối qua đã thông qua nghị quyết tách bỏ mảng kinh doanh linh kiện xe chạy xăng truyền thống, không ít nhân viên lâu năm cảm thấy khó hiểu về điều này.\nNam: Tuy mảng đó hiện vẫn tạo ra dòng tiền ít ỏi nhưng biên lợi nhuận gộp đã sụt giảm 3 năm liên tiếp. Chỉ có quyết đoán thu hồi vốn, tập trung đầu tư vào pin thể rắn và chip lái xe thông minh thì tập đoàn mới đứng vững trong cuộc cạnh tranh 10 năm tới.",
    "questionVi": "Tại sao Hội đồng quản trị quyết định tách bỏ mảng linh kiện xe chạy xăng truyền thống?",
    "options": [
      "Vì biên lợi nhuận gộp đã giảm 3 năm liên tiếp và cần thu hồi vốn để tập trung đầu tư vào pin thể rắn cùng chip lái xe thông minh",
      "Vì tập đoàn muốn giải thể toàn bộ công ty",
      "Vì nhà máy bị cháy hoàn toàn",
      "Vì chính phủ cấm sản xuất mọi loại ô tô"
    ],
    "correctAnswer": "Vì biên lợi nhuận gộp đã giảm 3 năm liên tiếp và cần thu hồi vốn để tập trung đầu tư vào pin thể rắn cùng chip lái xe thông minh",
    "explanationVi": "Bạn nam giải thích: '毛利率已连续三年下滑。只有果断回笼资金，集中投向固态电池与智能驾驶芯片...'."
  },
  {
    "id": "lt-hsk6-advanced-8",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Đàm phán điều khoản ngôn ngữ chuẩn trong hợp đồng song ngữ",
    "audioZh": "男：张律师，越方合作伙伴提出合同应当同时签署中文、越南文和英文三个版本，且三个版本具有同等法律效力。\n女：这种约定在实际执行中极易产生隐患。一旦不同语种的措辞出现细微歧义，双方就会争执不下。我建议补充一条：如解释发生分歧，以英文或中文单一版本为最终准据文本。",
    "pinyin": "Nán: Zhāng lǜshī, Yuèfāng hézuò huǒbàn tíchū hétong yīngdāng tóngshí qiānshǔ Zhōngwén, Yuènánwén hé Yīngwén sān gè bǎnběn, qiě sān gè bǎnběn jùyǒu tóngděng fǎlǜ xiàolì.\nNǚ: Zhè zhǒng yuēdìng zài shíjì zhíxíng zhōng jíyì chǎnshēng yǐnhuàn. Yídàn bùtóng yǔzhǒng de cuòcí chūxiàn xìwēi qíyì, shuāngfāng jiù huì zhēngzhí búxià. Wǒ jiànyì bǔchōng yì tiáo: rú jiěshì fāshēng fēnqí, yǐ Yīngwén huò Zhōngwén dānyī bǎnběn wéi zuìzhōng zhǔnjù wénběn.",
    "transcriptVi": "Nam: Luật sư Trương, đối tác phía Việt Nam đề nghị hợp đồng nên ký đồng thời 3 bản tiếng Trung, tiếng Việt và tiếng Anh, và cả 3 bản đều có hiệu lực pháp lý ngang nhau.\nNữ: Thỏa thuận như vậy khi thực thi thực tế rất dễ nảy sinh rủi ro ngầm. Một khi cách dùng từ giữa các ngôn ngữ có sự khác biệt nhỏ gây hiểu lầm, hai bên sẽ tranh cãi không dứt. Tôi kiến nghị bổ sung một điều: nếu có bất đồng khi giải thích thì lấy một văn bản duy nhất (tiếng Anh hoặc tiếng Trung) làm bản căn cứ cuối cùng.",
    "questionVi": "Luật sư Trương kiến nghị điều gì để tránh tranh chấp do khác biệt ngôn ngữ trong hợp đồng đa ngữ?",
    "options": [
      "Không ký hợp đồng bằng văn bản nữa mà chỉ thỏa thuận miệng",
      "Quy định rõ một văn bản ngôn ngữ duy nhất làm bản chuẩn cuối cùng khi phát sinh bất đồng giải thích",
      "Dịch hợp đồng sang 10 thứ tiếng khác nhau",
      "Bỏ hết các điều khoản pháp lý trong hợp đồng"
    ],
    "correctAnswer": "Quy định rõ một văn bản ngôn ngữ duy nhất làm bản chuẩn cuối cùng khi phát sinh bất đồng giải thích",
    "explanationVi": "Luật sư Trương khuyên: '如解释发生分歧，以英文或中文单一版本为最终准据文本'."
  },
  {
    "id": "lt-hsk6-advanced-9",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Phát hành trái phiếu xanh tài trợ khu công nghiệp sinh thái",
    "audioZh": "女：我们集团计划在越南北宁省投资建设低碳电子产业园，前期基础设施资金缺口大约有五千万美元，你有什么融资建议？\n男：既然园区主打屋顶光伏与废水零排放循环系统，完全符合国际绿色金融标准。我们可以联合跨国银行在香港发行三年期绿色债券，融资成本比普通商业贷款低八十个基点。",
    "pinyin": "Nǚ: Wǒmen jítuán jìhuà zài Yuènán Běiníng shěng tóuzī jiànshè dītàn diànzǐ chǎnyèyuán, qiánqī jīchǔ shèshī zījīn quēkǒu dàyuē yǒu wǔqiānwàn Měiyuán, nǐ yǒu shénme róngzī jiànyì?\nNán: Jìrán yuánqū zhǔdǎ wūdǐng guāngfú yǔ fèishuǐ líng páifàng xúnhuán xìtǒng, wánquán fúhé guójì lǜsè jīnróng biāozhǔn. Wǒmen kěyǐ liánhé kuàguó yínháng zài Xiānggǎng fāxíng sān nián qī lǜsè zhàiquàn, róngzī chéngběn bǐ pǔtōng shāngyè dàikuǎn dī bāshí gè jīdiǎn.",
    "transcriptVi": "Nữ: Tập đoàn chúng ta có kế hoạch đầu tư xây dựng khu công nghiệp điện tử carbon thấp tại tỉnh Bắc Ninh Việt Nam, thiếu hụt vốn hạ tầng giai đoạn đầu khoảng 50 triệu USD, anh có kiến nghị huy động vốn nào không?\nNam: Vì khu công nghiệp tập trung vào điện mặt trời áp mái và hệ thống tuần hoàn nước thải không phát thải, hoàn toàn đạt chuẩn tài chính xanh quốc tế. Chúng ta có thể phối hợp với ngân hàng đa quốc gia phát hành trái phiếu xanh kỳ hạn 3 năm tại Hồng Kông, chi phí huy động vốn thấp hơn vay thương mại thông thường 80 điểm cơ bản (0,8%).",
    "questionVi": "Tại sao dự án khu công nghiệp ở Bắc Ninh có thể huy động vốn qua trái phiếu xanh với lãi suất ưu đãi?",
    "options": [
      "Vì dự án chỉ xây dựng nhà ở thương mại",
      "Vì không cần phải hoàn trả tiền gốc trái phiếu",
      "Vì dự án ứng dụng điện mặt trời áp mái và hệ thống tuần hoàn nước thải không phát thải, đạt chuẩn tài chính xanh quốc tế",
      "Vì ngân hàng cho vay không cần thẩm định"
    ],
    "correctAnswer": "Vì dự án ứng dụng điện mặt trời áp mái và hệ thống tuần hoàn nước thải không phát thải, đạt chuẩn tài chính xanh quốc tế",
    "explanationVi": "Bạn nam giải thích: '既然园区主打屋顶光伏与废水零排放循环系统，完全符合国际绿色金融标准... 发行三年期绿色债券'."
  },
  {
    "id": "lt-hsk6-advanced-10",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Xu hướng chuyển dịch chuỗi cung ứng 'Trung Quốc + 1'",
    "audioZh": "近年来，全球制造业呈现出明显的“中国加一”供应链布局趋势。值得注意的是，这种转移并非简单的替代关系，而是形成了更为紧密的区域产业链协同。许多中国龙头企业在越南、泰国投资设厂完成终端组装的同时，其核心元器件、精密模具与高端化工原材料依然高度依赖中国本土的产业集群供给，从而带动了中国对东盟中间品贸易额的爆发式增长。",
    "pinyin": "Jìnnián lái, quánqiú zhìzàoyè chéngxiàn chū míngxiǎn de “Zhōngguó jiā yī” gōngyìngliàn bùjú qūshì. Zhíde zhùyì de shì, zhè zhǒng zhuǎnyí bìngfēi jiǎndān de tìdài guānxi, ér shì xíngchéng le gèngwéi jǐnmì de qūyù chǎnyèliàn xiétóng. Xǔduō Zhōngguó lóngtóu qǐyè zài Yuènán, Tàiguó tóuzī shèchǎng wánchéng zhōngduān zǔzhuāng de tóngshí, qí héxīn yuánqìjiàn, jīngmì mújù yǔ gāoduān huàgōng yuáncáiliào yīrán gāodù yīlài Zhōngguó běntǔ de chǎnyè jíqún gōngjǐ, cóng'ér dàidòng le Zhōngguó duì Dōngméng zhōngjiānpǐn màoyì'é de bàofāshì zēngzhǎng.",
    "transcriptVi": "Những năm gần đây, ngành chế tạo toàn cầu thể hiện rõ xu hướng bố trí chuỗi cung ứng 'Trung Quốc + 1'. Đáng chú ý là sự dịch chuyển này không phải mối quan hệ thay thế đơn thuần mà đã hình thành sự hiệp đồng chuỗi công nghiệp khu vực chặt chẽ hơn. Nhiều doanh nghiệp đầu ngành Trung Quốc trong khi đầu tư mở nhà máy tại Việt Nam, Thái Lan để hoàn thiện lắp ráp đầu cuối thì linh kiện cốt lõi, khuôn mẫu chính xác và nguyên liệu hóa chất cao cấp của họ vẫn phụ thuộc cao vào nguồn cung từ cụm công nghiệp nội địa Trung Quốc, từ đó kéo theo sự tăng trưởng bùng nổ kim ngạch thương mại hàng hóa trung gian từ Trung Quốc sang ASEAN.",
    "questionVi": "Theo bài phân tích, xu hướng các doanh nghiệp Trung Quốc mở nhà máy lắp ráp tại Việt Nam, Thái Lan đã dẫn đến kết quả gì?",
    "options": [
      "Khiến thương mại giữa Trung Quốc và ASEAN giảm xuống bằng không",
      "Làm các nhà máy tại Trung Quốc ngừng sản xuất toàn bộ linh kiện",
      "Khiến ASEAN không còn xuất khẩu hàng hóa nữa",
      "Thúc đẩy sự hiệp đồng chuỗi công nghiệp khu vực và làm tăng trưởng bùng nổ thương mại hàng hóa trung gian (linh kiện, khuôn mẫu, nguyên liệu) từ Trung Quốc sang ASEAN"
    ],
    "correctAnswer": "Thúc đẩy sự hiệp đồng chuỗi công nghiệp khu vực và làm tăng trưởng bùng nổ thương mại hàng hóa trung gian (linh kiện, khuôn mẫu, nguyên liệu) từ Trung Quốc sang ASEAN",
    "explanationVi": "Câu cuối chỉ rõ: '从而带动了中国对东盟中间品贸易额的爆发式增长'."
  },
  {
    "id": "lt-hsk6-advanced-11",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Tuân thủ bảo mật dữ liệu khi doanh nghiệp công nghệ vươn ra toàn cầu (出海)",
    "audioZh": "随着数字经济企业加速出海，数据合规已成为决定海外业务生死存亡的红线。无论是欧盟的《通用数据保护条例》还是东南亚各国最新出台的个人数据保护法，均对用户数据的采集授权、本地化存储以及跨境传输设定了极其严苛的限制。一旦企业违规将海外用户敏感数据回传，不仅会面临高达全球营业额百分之四的巨额罚款，更可能导致应用被强制下架。",
    "pinyin": "Suízhe shùzì jīngjì qǐyè jiāsù chūhǎi, shùjù héguī yǐ chéngwéi juédìng hǎiwài yèwù shēngsǐcúnwáng de hóngxiàn. Wúlùn shì Ōuméng de Tōngyòng Shùjù Bǎohù Tiáolì háishi Dōngnányà gèguó zuìxīn chūtái de Gèrén Shùjù Bǎohùfǎ, jūn duì yònghù shùjù de cǎijí shòuquán, běndìhuà cúnchǔ yǐjí kuàjìng chuánshū shèdìng le jíqí yánkē de xiànzhì. Yídàn qǐyè wéiguī jiāng hǎiwài yònghù mǐngǎn shùjù huíchuán, bùjǐn huì miànlín gāodá quánqiú yíngyè'é bǎifēn zhī sì de jù'é fákuǎn, gèng kěnéng dǎozhì yìngyòng bèi qiángzhì xiàjià.",
    "transcriptVi": "Cùng với việc các doanh nghiệp kinh tế số tăng tốc vươn ra nước ngoài, tuân thủ dữ liệu đã trở thành lằn ranh đỏ quyết định sự sống còn của mảng kinh doanh hải ngoại. Bất kể là Quy định Bảo vệ Dữ liệu Chung (GDPR) của EU hay Luật Bảo vệ Dữ liệu Cá nhân mới ban hành của các nước Đông Nam Á đều đặt ra hạn chế vô cùng khắt khe đối với việc cấp quyền thu thập, lưu trữ bản địa hóa và truyền tải xuyên biên giới dữ liệu người dùng. Một khi doanh nghiệp vi phạm quy định truyền dữ liệu nhạy cảm của người dùng nước ngoài về, không chỉ đối mặt với mức phạt khổng lồ lên tới 4% doanh thu toàn cầu mà còn có thể khiến ứng dụng bị buộc gỡ khỏi kho ứng dụng.",
    "questionVi": "Hậu quả nghiêm trọng nào có thể xảy ra nếu doanh nghiệp vi phạm quy định truyền dữ liệu nhạy cảm của người dùng nước ngoài?",
    "options": [
      "Bị phạt tới 4% doanh thu toàn cầu và ứng dụng có thể bị buộc gỡ bỏ (下架)",
      "Chỉ bị nhắc nhở qua email mà không phạt tiền",
      "Được thưởng thêm thị phần tại châu Âu",
      "Chỉ phải đóng phí 100 USD"
    ],
    "correctAnswer": "Bị phạt tới 4% doanh thu toàn cầu và ứng dụng có thể bị buộc gỡ bỏ (下架)",
    "explanationVi": "Câu cuối nêu rõ: '不仅会面临高达全球营业额百分之四的巨额罚款，更可能导致应用被强制下架'."
  },
  {
    "id": "lt-hsk6-advanced-12",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Nguyên tắc vàng trong xử lý khủng hoảng truyền thông doanh nghiệp",
    "audioZh": "在社交媒体时代，任何一起产品质量瑕疵如果处置不当，都可能在二十四小时内演变成席卷全网的舆论危机。公共关系学者指出，危机爆发后的黄金四小时内，企业切忌采取删帖、推诿责任或傲慢辩解的做法。正确的策略应当是由高层第一时间真诚致歉，公布权威第三方的检测进展，并给出高于法定标准的无条件退赔方案，方能化危为机，重塑品牌公信力。",
    "pinyin": "Zài shèjiāo méitǐ shídài, rènhé yì qǐ chǎnpǐn zhìliàng xiácī rúguǒ chǔzhì búdàng, dōu kěnéng zài èrshísì xiǎoshí nèi yǎnbiàn chéng xíjuǎn quánwǎng de yúlùn wēijī. Gōnggòng guānxi xuézhě zhǐchū, wēijī bàofā hòu de huángjīn sì xiǎoshí nèi, qǐyè qièjì cǎiqǔ shāntiě, tuīwěi zérèn huò àomàn biànjiě de zuòfǎ. Zhèngquè de cèlüè yīngdāng shì yóu gāocéng dì-yī shíjiān zhēnchéng zhìqiàn, gōngbù quánwēi dì-sānfāng de jiǎncè jìnzhǎn, bìng gěichū gāoyú fǎdìng biāozhǔn de wútiáojiàn tuìpéi fāng'àn, fāng néng huàwēiwéijī, chóngsù pǐnpái gōngxìnlì.",
    "transcriptVi": "Trong thời đại mạng xã hội, bất kỳ một lỗi chất lượng sản phẩm nào nếu xử lý không thỏa đáng đều có thể biến thành cuộc khủng hoảng dư luận cuốn qua toàn mạng chỉ trong vòng 24 giờ. Các học giả quan hệ công chúng chỉ ra rằng, trong 4 giờ vàng sau khi khủng hoảng bùng phát, doanh nghiệp tối kỵ việc xóa bài đăng, đùn đẩy trách nhiệm hoặc biện minh ngạo mạn. Chiến lược đúng đắn phải là lãnh đạo cấp cao chân thành xin lỗi ngay lập tức, công bố tiến độ kiểm định của bên thứ ba có thẩm quyền và đưa ra phương án hoàn tiền bồi thường vô điều kiện cao hơn tiêu chuẩn luật định, có như vậy mới biến nguy thành cơ, tái tạo uy tín thương hiệu.",
    "questionVi": "Theo các học giả PR, doanh nghiệp nên làm gì trong '4 giờ vàng' sau khi bùng phát khủng hoảng chất lượng sản phẩm?",
    "options": [
      "Tìm cách xóa hết các bài đăng trên mạng và đổ lỗi cho người tiêu dùng",
      "Lãnh đạo cấp cao chân thành xin lỗi ngay, công bố tiến độ kiểm định của bên thứ ba và đưa ra phương án bồi thường vượt chuẩn luật định",
      "Giữ im lặng tuyệt đối trong suốt 1 tháng",
      "Đổi tên thương hiệu ngay trong đêm"
    ],
    "correctAnswer": "Lãnh đạo cấp cao chân thành xin lỗi ngay, công bố tiến độ kiểm định của bên thứ ba và đưa ra phương án bồi thường vượt chuẩn luật định",
    "explanationVi": "Trong bài nêu rõ: '由高层第一时间真诚致歉，公布权威第三方的检测进展，并给出高于法定标准的无条件退赔方案'."
  },
  {
    "id": "lt-hsk7-basic-1",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Mục tiêu Đạt đỉnh Carbon và Trung hòa Carbon",
    "audioZh": "推进碳达峰与碳中和绝非限制工业发展，而是通过能源结构清洁化与产业技术升级培育新的绿色增长极。",
    "pinyin": "Tuījìn tàndáfēng yǔ tànzhōnghé juéfēi xiànzhì gōngyè fāzhǎn, ér shì tōngguò néngyuán jiégòu qīngjiéhuà yǔ chǎnyè jìshù shēngjí péiyù xīn de lǜsè zēngzhǎngjí.",
    "transcriptVi": "Thúc đẩy đạt đỉnh carbon và trung hòa carbon tuyệt nhiên không phải là hạn chế phát triển công nghiệp, mà là bồi dưỡng cực tăng trưởng xanh mới thông qua làm sạch cơ cấu năng lượng và nâng cấp công nghệ ngành nghề.",
    "questionVi": "Theo câu nghe, bản chất của việc thúc đẩy trung hòa carbon là gì?",
    "options": [
      "Đóng cửa vĩnh viễn tất cả các nhà máy công nghiệp",
      "Quay trở lại thời kỳ nông nghiệp thủ công",
      "Ngừng sử dụng điện trên toàn quốc",
      "Bồi dưỡng cực tăng trưởng xanh mới thông qua năng lượng sạch và nâng cấp công nghệ công nghiệp"
    ],
    "correctAnswer": "Bồi dưỡng cực tăng trưởng xanh mới thông qua năng lượng sạch và nâng cấp công nghệ công nghiệp",
    "explanationVi": "'通过能源结构清洁化与产业技术升级培育新的绿色增长极'."
  },
  {
    "id": "lt-hsk7-basic-2",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Thu hẹp khoảng cách số cho người cao tuổi",
    "audioZh": "智慧城市建设在推广无纸化政务与扫码出行的同时，必须保留人工服务窗口，避免将老年群体隔绝在数字时代之外。",
    "pinyin": "Zhìhuì chéngshì jiànshè zài tuīguǎng wúzhǐhuà zhèngwù yǔ sǎomǎ chūxíng de tóngshí, bìxū bǎoliú réngōng fúwù chuāngkǒu, bìmiǎn jiāng lǎonián qúntǐ géjué zài shùzì shídài zhīwài.",
    "transcriptVi": "Xây dựng thành phố thông minh trong khi phổ biến dịch vụ công không giấy tờ và đi lại bằng quét mã thì bắt buộc phải giữ lại các quầy phục vụ trực tiếp bằng con người, tránh cô lập nhóm người cao tuổi ở bên ngoài kỷ nguyên số.",
    "questionVi": "Tại sao các thành phố thông minh vẫn phải giữ lại quầy phục vụ trực tiếp bằng nhân viên?",
    "options": [
      "Để tránh cô lập nhóm người cao tuổi chưa quen công nghệ ở bên ngoài kỷ nguyên số",
      "Vì hệ thống máy tính chỉ hoạt động được 1 giờ mỗi ngày",
      "Vì quét mã QR đắt hơn dùng tiền mặt",
      "Vì không có ai biết dùng điện thoại"
    ],
    "correctAnswer": "Để tránh cô lập nhóm người cao tuổi chưa quen công nghệ ở bên ngoài kỷ nguyên số",
    "explanationVi": "'必须保留人工服务窗口，避免将老年群体隔绝在数字时代之外'."
  },
  {
    "id": "lt-hsk7-basic-3",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Cơ chế bồi thường trừng phạt vi phạm sở hữu trí tuệ",
    "audioZh": "引入知识产权侵权惩罚性赔偿制度，显著提高了违法成本，为科技创新型企业筑牢了法治护城河。",
    "pinyin": "Yǐnrù zhīshi chǎnquán qīnquán chéngfáxìng péicháng zhìdù, xiǎnzhù tígāo le wéifǎ chéngběn, wèi kējì chuàngxīnxíng qǐyè zhùláo le fǎzhì hùchénghé.",
    "transcriptVi": "Việc đưa vào chế độ bồi thường mang tính trừng phạt đối với hành vi xâm phạm sở hữu trí tuệ đã làm tăng đáng kể chi phí vi phạm pháp luật, xây chắc hào bảo vệ pháp quyền cho các doanh nghiệp đổi mới sáng tạo công nghệ.",
    "questionVi": "Chế độ bồi thường mang tính trừng phạt đối với vi phạm sở hữu trí tuệ có tác dụng gì?",
    "options": [
      "Cho phép các công ty sao chép bằng sáng chế miễn phí",
      "Làm tăng cao chi phí vi phạm và bảo vệ vững chắc cho các doanh nghiệp đổi mới công nghệ",
      "Giảm mức phạt xuống mức tượng trưng",
      "Bãi bỏ hoàn toàn luật bản quyền"
    ],
    "correctAnswer": "Làm tăng cao chi phí vi phạm và bảo vệ vững chắc cho các doanh nghiệp đổi mới công nghệ",
    "explanationVi": "'显著提高了违法成本，为科技创新型企业筑牢了法治护城河'."
  },
  {
    "id": "lt-hsk7-basic-4",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về giải pháp tháo gỡ mâu thuẫn việc làm mang tính cơ cấu",
    "audioZh": "当前一方面许多大学毕业生感叹就业难，另一方面高端制造业却面临严重的技工荒，该如何破解这一结构性矛盾？",
    "pinyin": "Dāngqián yì fāngmiàn xǔduō dàxué bìyèshēng gǎntàn jiùyè nán, lìng yì fāngmiàn gāoduān zhìzàoyè què miànlín yánzhòng de jìgōnghuāng, gāi rúhé pòjiě zhè yī jiégòuxìng máodùn?",
    "transcriptVi": "Hiện nay một mặt nhiều sinh viên tốt nghiệp đại học than thở khó tìm việc, mặt khác ngành chế tạo cao cấp lại đối mặt với tình trạng thiếu hụt thợ kỹ thuật trầm trọng, làm thế nào để tháo gỡ mâu thuẫn mang tính cơ cấu này?",
    "questionVi": "Đáp án nào đưa ra giải pháp chính sách căn cơ nhất?",
    "options": [
      "取消所有理工科大学。 (Hủy bỏ tất cả các trường đại học bách khoa kỹ thuật.)",
      "规定所有毕业生只能去送外卖。 (Quy định tất cả sinh viên tốt nghiệp chỉ được đi giao đồ ăn.)",
      "应当深化产教融合与职业教育改革，使高校学科设置与产业升级需求紧密对接，并提高技能型人才的社会待遇。 (Cần làm sâu sắc sự dung hợp giữa công nghiệp - giáo dục và cải cách giáo dục nghề nghiệp, giúp việc thiết lập ngành học đại học kết nối chặt chẽ với nhu cầu nâng cấp ngành nghề, đồng thời nâng cao đãi ngộ xã hội cho nhân tài kỹ năng.)",
      "禁止工厂使用自动化设备。 (Cấm các nhà máy sử dụng thiết bị tự động hóa.)"
    ],
    "correctAnswer": "应当深化产教融合与职业教育改革，使高校学科设置与产业升级需求紧密对接，并提高技能型人才的社会待遇。 (Cần làm sâu sắc sự dung hợp giữa công nghiệp - giáo dục và cải cách giáo dục nghề nghiệp, giúp việc thiết lập ngành học đại học kết nối chặt chẽ với nhu cầu nâng cấp ngành nghề, đồng thời nâng cao đãi ngộ xã hội cho nhân tài kỹ năng.)",
    "explanationVi": "Giải pháp chuẩn: '深化产教融合与职业教育改革，使高校学科设置与产业升级需求紧密对接...'."
  },
  {
    "id": "lt-hsk7-basic-5",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về bảo tồn bản sắc trong chấn hưng nông thôn",
    "audioZh": "在推进乡村振兴与乡村旅游开发的过程中，为什么许多专家反对千篇一律地照搬城市网红景点模式？",
    "pinyin": "Zài tuījìn xiāngcūn zhènxīng yǔ xiāngcūn lǚyóu kāifā de guòchéng zhōng, wèishénme xǔduō zhuānjiā fǎnduì qiānpiānyílǜ de zhàobān chéngshì wǎnghóng jǐngdiǎn móshì?",
    "transcriptVi": "Trong quá trình thúc đẩy chấn hưng nông thôn và phát triển du lịch làng quê, tại sao nhiều chuyên gia phản đối việc rập khuôn trăm nơi như một theo mô hình điểm check-in ở thành phố?",
    "questionVi": "Đáp án nào giải thích đúng nhất?",
    "options": [
      "因为农村没有土地可以建公园。 (Vì nông thôn không có đất để xây công viên.)",
      "因为城市游客不喜欢呼吸新鲜空气。 (Vì du khách thành phố không thích hít thở không khí trong lành.)",
      "因为农村不允许外地人进入。 (Vì nông thôn không cho phép người nơi khác vào.)",
      "因为盲目同质化开发会侵蚀古村落独特的乡土底蕴与生态肌理，只有深挖本土民俗与非遗特色才能实现可持续发展。 (Vì khai thác đồng nhất hóa một cách mù quáng sẽ bào mòn bề dày bản địa độc đáo và kết cấu sinh thái của làng cổ; chỉ có đào sâu phong tục bản địa và đặc sắc di sản phi vật thể mới thực hiện được phát triển bền vững.)"
    ],
    "correctAnswer": "因为盲目同质化开发会侵蚀古村落独特的乡土底蕴与生态肌理，只有深挖本土民俗与非遗特色才能实现可持续发展。 (Vì khai thác đồng nhất hóa một cách mù quáng sẽ bào mòn bề dày bản địa độc đáo và kết cấu sinh thái của làng cổ; chỉ có đào sâu phong tục bản địa và đặc sắc di sản phi vật thể mới thực hiện được phát triển bền vững.)",
    "explanationVi": "Rập khuôn đồng nhất hóa ('同质化开发') sẽ làm mất bản sắc làng quê ('侵蚀古村落独特的乡土底蕴')."
  },
  {
    "id": "lt-hsk7-basic-6",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về quản trị thuật toán của kinh tế nền tảng",
    "audioZh": "针对部分电商与出行平台利用大数据对老用户实行“杀熟”及算法歧视的现象，监管部门应当如何规范？",
    "pinyin": "Zhēnduì bùfen diànshāng yǔ chūxíng píngtái lìyòng dàshùjù duì lǎo yònghù shíxíng “shāshú” jí suànfǎ qíshì de xiànxiàng, jiānguǎn bùmén yīngdāng rúhé guīfàn?",
    "transcriptVi": "Nhắm vào hiện tượng một số nền tảng thương mại điện tử và gọi xe lợi dụng dữ liệu lớn để 'chặt chém khách quen' (giá cho khách quen đắt hơn khách mới) và phân biệt đối xử bằng thuật toán, cơ quan quản lý cần chấn chỉnh thế nào?",
    "questionVi": "Đáp án nào đúng chuẩn quản trị công nghệ?",
    "options": [
      "应建立算法备案与透明度审查机制，严厉查处价格欺诈行为，并保障消费者关闭个性化推荐的权利。 (Cần thiết lập cơ chế đăng ký thuật toán và thẩm tra tính minh bạch, xử lý nghiêm hành vi gian lận giá cả, đồng thời bảo đảm quyền tắt gợi ý cá nhân hóa của người tiêu dùng.)",
      "禁止所有人在手机上购物。 (Cấm tất cả mọi người mua sắm trên điện thoại.)",
      "要求平台把所有商品价格提高十倍。 (Yêu cầu nền tảng tăng giá mọi hàng hóa lên 10 lần.)",
      "允许平台随意读取用户的银行密码。 (Cho phép nền tảng tùy ý đọc mật khẩu ngân hàng của người dùng.)"
    ],
    "correctAnswer": "应建立算法备案与透明度审查机制，严厉查处价格欺诈行为，并保障消费者关闭个性化推荐的权利。 (Cần thiết lập cơ chế đăng ký thuật toán và thẩm tra tính minh bạch, xử lý nghiêm hành vi gian lận giá cả, đồng thời bảo đảm quyền tắt gợi ý cá nhân hóa của người tiêu dùng.)",
    "explanationVi": "Giải pháp quản trị thuật toán: '建立算法备案与透明度审查机制，严厉查处价格欺诈行为...'."
  },
  {
    "id": "lt-hsk7-basic-7",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Bàn về cơ chế tài trợ cho nghiên cứu khoa học cơ bản",
    "audioZh": "女：陈院士，基础科学研究往往需要十年冷板凳才能产出一项突破，但现在的年度考核指标却让不少青年学者只敢选短平快的课题。\n男：你说到了问题的症结。基础研究具有高度的不确定性，评价体系绝不能急功近利。我们正在推动长周期评估与“包干制”经费改革，营造宽容失败、鼓励原创的学术生态。",
    "pinyin": "Nǚ: Chén yuànshì, jīchǔ kēxué yánjiū wǎngwǎng xūyào shí nián lěngbǎndèng cái néng chǎnchū yí xiàng tūpò, dàn xiànzài de niándù kǎohé zhǐbiāo què ràng bùshǎo qīngnián xuézhě zhǐ gǎn xuǎn duǎnpíngkuài de kètí.\nNán: Nǐ shuōdào le wèntí de zhèngjié. Jīchǔ yánjiū jùyǒu gāodù de bùquèdìngxìng, píngjià tǐxì jué bùnéng jígōngjìnlì. Wǒmen zhèngzài tuīdòng cháng zhōuqī pínggū yǔ “bāogānzhì” jīngfèi gǎigé, yíngzào kuānróng shībài, gǔlì yuánchuàng de xuéshù shēngtài.",
    "transcriptVi": "Nữ: Viện sĩ Trần, nghiên cứu khoa học cơ bản thường cần 10 năm âm thầm miệt mài mới tạo ra được một đột phá, nhưng chỉ tiêu đánh giá hàng năm hiện nay lại khiến không ít học giả trẻ chỉ dám chọn các đề tài ngắn hạn nhanh ra kết quả.\nNam: Cô đã nói trúng nút thắt của vấn đề rồi. Nghiên cứu cơ bản có tính bất định cao, hệ thống đánh giá tuyệt đối không thể hám lợi trước mắt. Chúng tôi đang thúc đẩy đánh giá chu kỳ dài và cải cách kinh phí khoán gọn nhằm tạo dựng hệ sinh thái học thuật bao dung thất bại, khuyến khích sáng tạo nguyên bản.",
    "questionVi": "Viện sĩ Trần đề xuất cải cách gì để hỗ trợ các nhà khoa học làm nghiên cứu cơ bản?",
    "options": [
      "Yêu cầu mỗi tuần phải công bố một phát minh mới",
      "Thúc đẩy cơ chế đánh giá chu kỳ dài và khoán kinh phí, tạo môi trường bao dung thất bại và khuyến khích sáng tạo gốc",
      "Cắt giảm toàn bộ kinh phí nghiên cứu cơ bản",
      "Chỉ tài trợ cho những đề tài chắc chắn thành công trong 1 tháng"
    ],
    "correctAnswer": "Thúc đẩy cơ chế đánh giá chu kỳ dài và khoán kinh phí, tạo môi trường bao dung thất bại và khuyến khích sáng tạo gốc",
    "explanationVi": "Viện sĩ Trần nêu rõ: '推动长周期评估与“包干制”经费改革，营造宽容失败、鼓励原创的学术生态'."
  },
  {
    "id": "lt-hsk7-basic-8",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Thảo luận về hiệu ứng kinh tế của mạng lưới logistics cao tốc",
    "audioZh": "男：中老铁路和中越跨境班列开通后，西南内陆省份的外贸格局发生了肉眼可见的跃升。\n女：确实如此。过去重庆、昆明的货物要先运到沿海港口再装船出海，耗时近半个月；如今通过跨境铁路班列直达东盟腹地，物流时间压缩了三分之二，内陆城市一跃成为对外开放的前沿枢纽。",
    "pinyin": "Nán: Zhōng-Lǎo tiělù hé Zhōng-Yuè kuàjìng bānliè kāitōng hòu, Xīnán nèilù shěngfèn de wàimào géjú fāshēng le ròuyǎn kějiàn de yuèshēng.\nNǚ: Quèshí rúcǐ. Guòqù Chóngqìng, Kūnmíng de huòwù yào xiān yùndào yánhǎi gǎngkǒu zài zhuāngchuán chūhǎi, hàoshí jìn bàn gè yuè; rújīn tōngguò kuàjìng tiělù bānliè zhídá Dōngméng fùdì, wùliú shíjiān yāsuō le sān fēn zhī èr, nèilù chéngshì yíyuè chéngwéi duìwài kāifàng de qiányán shūniǔ.",
    "transcriptVi": "Nam: Sau khi đường sắt Trung - Lào và tàu liên vận xuyên biên giới Trung - Việt khai thông, cục diện ngoại thương của các tỉnh nội địa Tây Nam đã có bước nhảy vọt thấy rõ.\nNữ: Đúng là như vậy. Trước đây hàng hóa từ Trùng Khánh, Côn Minh phải vận chuyển ra cảng ven biển trước rồi mới xếp lên tàu ra biển, tốn gần nửa tháng; ngày nay thông qua tàu hỏa liên vận xuyên biên giới đi thẳng vào trung tâm ASEAN, thời gian logistics đã rút ngắn được 2/3, các thành phố nội địa vươn lên trở thành đầu mối tiên phong mở cửa đối ngoại.",
    "questionVi": "Tuyến tàu liên vận đường sắt xuyên biên giới đã giúp các thành phố nội địa như Trùng Khánh, Côn Minh rút ngắn bao nhiêu thời gian logistics tới ASEAN?",
    "options": [
      "Chỉ rút ngắn được 5 phút",
      "Thời gian vận chuyển lâu gấp đôi so với đường biển",
      "Rút ngắn 2/3 thời gian vận chuyển (từ gần nửa tháng xuống chỉ còn vài ngày)",
      "Không làm thay đổi thời gian vận chuyển"
    ],
    "correctAnswer": "Rút ngắn 2/3 thời gian vận chuyển (từ gần nửa tháng xuống chỉ còn vài ngày)",
    "explanationVi": "Bạn nữ khẳng định: '通过跨境铁路班列直达东盟腹地，物流时间压缩了三分之二'."
  },
  {
    "id": "lt-hsk7-basic-9",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Tranh luận về chỉnh trang đô thị và hơi thở đời sống (烟火气)",
    "audioZh": "女：有些城市为了整洁美观，把街边所有的早点铺、修鞋摊和便民菜市场都迁到了偏远的郊区，结果居民买菜反而得坐半小时公交车。\n男：这就是典型的把“秩序”与“活力”对立起来了。真正高水平的城市治理应当保留适度的市井烟火气，通过划定规范经营时段与卫生标准，实现市容整洁与民生便利的共赢。",
    "pinyin": "Nǚ: Yǒuxiē chéngshì wèile zhěngjié měiguān, bǎ jiēbiān suǒyǒu de zǎodiǎnpù, xiūxiétān hé biànmín càishìchǎng dōu qiāndào le piānyuǎn de jiāoqū, jiéguǒ jūmín mǎi cài fǎn'ér děi zuò bàn xiǎoshí gōngjiāochē.\nNán: Zhè jiù shì diǎnxíng de bǎ “zhìxù” yǔ “huólì” duìlì qǐlái le. Zhēnzhèng gāo shuǐpíng de chéngshì zhìlǐ yīngdāng bǎoliú shìdù de shìjǐng yānhuǒqì, tōngguò huàdìng guīfàn jīngyíng shíduàn yǔ wèishēng biāozhǔn, shíxiàn shìróng zhěngjié yǔ mínshēng biànlì de gòngyíng.",
    "transcriptVi": "Nữ: Một số thành phố vì sự gọn gàng mỹ quan đã di dời tất cả quán ăn sáng, sạp sửa giày và chợ dân sinh ven đường ra vùng ngoại ô hẻo lánh, kết quả là người dân đi mua rau lại phải đi xe buýt mất nửa tiếng.\nNam: Đây chính là kiểu điển hình đem 'trật tự' đối lập với 'sức sống'. Quản trị đô thị trình độ cao thực sự cần giữ lại hơi thở đời sống phố phường ở mức độ hợp lý, thông qua việc quy định khung giờ kinh doanh chuẩn mực và tiêu chuẩn vệ sinh để thực hiện cùng thắng giữa mỹ quan đô thị và tiện ích dân sinh.",
    "questionVi": "Quan điểm của bạn nam về quản trị đô thị trình độ cao là gì?",
    "options": [
      "Di dời toàn bộ cửa hàng ăn uống ra sa mạc",
      "Cấm người dân nấu ăn tại nhà",
      "Cho phép xả rác bừa bãi trên mọi tuyến phố",
      "Không đối lập trật tự với sức sống; cần quy hoạch khung giờ và tiêu chuẩn vệ sinh để vừa đảm bảo mỹ quan vừa giữ lại tiện ích dân sinh"
    ],
    "correctAnswer": "Không đối lập trật tự với sức sống; cần quy hoạch khung giờ và tiêu chuẩn vệ sinh để vừa đảm bảo mỹ quan vừa giữ lại tiện ích dân sinh",
    "explanationVi": "Bạn nam nêu rõ: '通过划定规范经营时段与卫生标准，实现市容整洁与民生便利的共赢'."
  },
  {
    "id": "lt-hsk7-basic-10",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Bình luận thời sự: Công bố thông tin minh bạch trong khủng hoảng công cộng",
    "audioZh": "在现代风险社会中，突发公共事件往往伴随着舆论场的剧烈震荡。大量社会心理学案例证实，引发公众恐慌的往往不是危机本身，而是信息的不确定性与权威声音的缺位。当官方机构能够在黄金时间内做到信息公开透明，既不讳疾忌医地隐瞒困难，又清晰交代应对措施时，谣言便会不攻自破，社会信任与协同抗风险能力也将随之显著增强。",
    "pinyin": "Zài xiàndài fēngxiǎn shèhuì zhōng, tūfā gōnggòng shìjiàn wǎngwǎng bànsuízhe yúlùnchǎng de jùliè zhèndàng. Dàliàng shèhuì xīnlǐxué ànlì zhèngshí, yǐnfā gōngzhòng kǒnghuāng de wǎngwǎng bú shì wēijī běnshēn, ér shì xìnxī de bùquèdìngxìng yǔ quánwēi shēngyīn de quēwèi. Dāng guānfāng jīgòu nénggòu zài huángjīn shíjiān nèi zuòdào xìnxī gōngkāi tòumíng, jì bú huìjíjìyī de yǐnmán kùnnan, yòu qīngxī jiāodài yìngduì cuòshī shí, yáoyán biàn huì bùgōngzìpò, shèhuì xìnrèn yǔ xiétóng kàngfēngxiǎn nénglì yě jiāng suízhī xiǎnzhù zēngqiáng.",
    "transcriptVi": "Trong xã hội rủi ro hiện đại, các sự cố công cộng bất ngờ thường đi kèm với sự chấn động dữ dội của trường dư luận. Hàng loạt tình huống tâm lý học xã hội chứng thực rằng thứ gây ra sự hoảng loạn cho công chúng thường không phải bản thân cuộc khủng hoảng, mà là tính bất định của thông tin và sự vắng mặt của tiếng nói có thẩm quyền. Khi cơ quan chức năng có thể công khai minh bạch thông tin trong thời gian vàng, vừa không giấu bệnh sợ thầy để che đậy khó khăn, vừa trình bày rõ các biện pháp ứng phó thì tin đồn sẽ tự khắc tan vỡ, niềm tin xã hội và năng lực hiệp đồng chống rủi ro cũng theo đó tăng cường rõ rệt.",
    "questionVi": "Theo đoạn bình luận, nguyên nhân chính gây ra sự hoảng loạn trong công chúng khi xảy ra sự cố bất ngờ là gì?",
    "options": [
      "Tính bất định của thông tin và sự thiếu vắng tiếng nói chính thống có thẩm quyền",
      "Do thông tin được công bố quá rõ ràng và chi tiết",
      "Do các nhà khoa học giải thích quá dễ hiểu",
      "Do tốc độ Internet quá nhanh"
    ],
    "correctAnswer": "Tính bất định của thông tin và sự thiếu vắng tiếng nói chính thống có thẩm quyền",
    "explanationVi": "Trong bài khẳng định: '引发公众恐慌的往往不是危机本身，而是信息的不确定性与权威声音的缺位'."
  },
  {
    "id": "lt-hsk7-basic-11",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Sự trỗi dậy của thẩm mỹ Đông Phương trong thế hệ trẻ (国潮)",
    "audioZh": "曾几何时，国际奢侈大牌是都市青年追逐的唯一时尚风向标；而近五年来，融合了传统纹样、非遗刺绣与东方草本配方的本土“国潮”品牌异军突起。这一消费转向不仅源于本土制造业供应链品质的飞跃，更深层地折射出年轻一代平视世界的文化自信——他们不再盲目崇拜洋品牌，而是更看重产品背后的审美共鸣与文化认同。",
    "pinyin": "Céngjǐhéshí, guójì shēchǐ dàpái shì dūshì qīngnián zhuīzhú de wéiyī shíshàng fēngxiàngbiāo; ér jìn wǔ nián lái, rónghé le chuántǒng wényàng, fēiyí cìxiù yǔ Dōngfāng cǎoběn pèifāng de běntǔ “guócháo” pǐnpái yìjūntǔqǐ. Zhè yī xiāofèi zhuǎnxiàng bùjǐn yuányú běntǔ zhìzàoyè gōngyìngliàn pǐnzhì de fēiyuè, gèng shēncéng de zhéshè chū niánqīng yídài píngshì shìjiè de wénhuà zìxìn — tāmen búzài mángmù chóngbài yángpǐnpái, ér shì gèng kànzhòng chǎnpǐn bèihòu de shěnměi gòngmíng yǔ wénhuà rèntóng.",
    "transcriptVi": "Đã có thời các thương hiệu xa xỉ quốc tế là kim chỉ nam thời trang duy nhất mà thanh niên đô thị theo đuổi; nhưng 5 năm trở lại đây, các thương hiệu 'Quốc triều (Guochao)' bản địa dung hợp hoa văn truyền thống, thêu thùa di sản phi vật thể và công thức thảo mộc phương Đông đã trỗi dậy mạnh mẽ. Sự chuyển hướng tiêu dùng này không chỉ bắt nguồn từ bước nhảy vọt về chất lượng chuỗi cung ứng chế tạo bản địa, mà ở tầng sâu hơn còn phản chiếu sự tự tin văn hóa nhìn thế giới bằng ánh mắt bình đẳng của thế hệ trẻ — họ không còn sùng bái mù quáng thương hiệu ngoại mà coi trọng hơn sự cộng hưởng thẩm mỹ và bản sắc văn hóa đằng sau sản phẩm.",
    "questionVi": "Theo bài nghe, nguyên nhân sâu xa ở tầng văn hóa khiến giới trẻ ưa chuộng các thương hiệu 'Quốc triều (国潮)' là gì?",
    "options": [
      "Vì hàng ngoại đã ngừng bán hoàn toàn trên toàn thế giới",
      "Sự tự tin văn hóa, coi trọng sự cộng hưởng thẩm mỹ và bản sắc văn hóa truyền thống thay vì sùng bái mù quáng đồ ngoại",
      "Vì giới trẻ không biết sử dụng mạng Internet",
      "Vì các sản phẩm Quốc triều đều được phát miễn phí"
    ],
    "correctAnswer": "Sự tự tin văn hóa, coi trọng sự cộng hưởng thẩm mỹ và bản sắc văn hóa truyền thống thay vì sùng bái mù quáng đồ ngoại",
    "explanationVi": "Bài phân tích chỉ rõ: '更深层地折射出年轻一代平视世界的文化自信——他们不再盲目崇拜洋品牌，而是更看重产品背后的审美共鸣与文化认同'."
  },
  {
    "id": "lt-hsk7-basic-12",
    "level": "HSK7",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Tầm quan trọng của tự chủ công nghệ lõi trong kỷ nguyên biến động",
    "audioZh": "全球产业链的震荡深刻警示我们，建立在别人地基上的房子再华丽也经不起风雨。在高端芯片、工业母机、核心工业软件以及生物育种等关键领域，任何“卡脖子”环节的受制于人都可能危及整个产业生态的安全。坚持开放合作绝不等于放弃自主研发，唯有掌握关键核心技术的自主可控权，方能在国际分工与博弈中拥有真正的战略回旋余地。",
    "pinyin": "Quánqiú chǎnyèliàn de zhèndàng shēnkè jǐngshì wǒmen, jiànlì zài biérén dìjī shàng de fángzi zài huálì yě jīngbuqǐ fēngyǔ. Zài gāoduān xīnpiàn, gōngyè mǔjī, héxīn gōngyè ruǎnjiàn yǐjí shēngwù yùzhǒng děng guānjiàn lǐngyù, rènhé “kǎbózi” huánjié de shòuzhìyúrén dōu kěnéng wēijí zhěnggè chǎnyè shēngtài de ānquán. Jiānchí kāifàng hézuò jué bù děngyú fàngqì zìzhǔ yánfā, wéiyǒu zhǎngwò guānjiàn héxīn jìshù de zìzhǔ kěkòngquán, fāng néng zài guójì fēngōng yǔ bóyì zhōng yōngyǒu zhēnzhèng de zhànlüè huíxuán yúdì.",
    "transcriptVi": "Sự chấn động của chuỗi công nghiệp toàn cầu cảnh tỉnh sâu sắc chúng ta rằng ngôi nhà xây trên nền móng của người khác dù hoa lệ đến đâu cũng không chịu nổi mưa gió. Trong các lĩnh vực then chốt như chip cao cấp, máy công cụ cái, phần mềm công nghiệp cốt lõi và chọn tạo giống sinh học, bất kỳ khâu 'bóp nghẹt cổ (bottleneck)' nào bị phụ thuộc vào người khác đều có thể đe dọa an ninh của toàn bộ hệ sinh thái ngành. Kiên trì mở cửa hợp tác tuyệt đối không đồng nghĩa với từ bỏ R&D tự chủ; chỉ khi nắm quyền tự chủ kiểm soát công nghệ lõi then chốt mới có được không gian xoay xở chiến lược thực sự trong phân công và đấu trí quốc tế.",
    "questionVi": "Hình ảnh ẩn dụ 'ngôi nhà xây trên nền móng của người khác (建立在别人地基上的房子)' trong bài dùng để cảnh báo điều gì?",
    "options": [
      "Kỹ thuật xây dựng nhà cao tầng ở các thành phố ven biển",
      "Chi phí thuê văn phòng quá đắt đỏ",
      "Sự nguy hiểm khi phụ thuộc hoàn toàn vào nước ngoài ở các công nghệ lõi then chốt (như chip, phần mềm công nghiệp)",
      "Thị trường bất động sản đang thiếu vật liệu xây dựng"
    ],
    "correctAnswer": "Sự nguy hiểm khi phụ thuộc hoàn toàn vào nước ngoài ở các công nghệ lõi then chốt (như chip, phần mềm công nghiệp)",
    "explanationVi": "Ẩn dụ này cảnh báo việc phụ thuộc công nghệ lõi ('卡脖子'环节的受制于人) sẽ đe dọa an ninh toàn bộ hệ sinh thái ngành."
  },
  {
    "id": "lt-hsk8-basic-1",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Triết lý Hòa nhi bất đồng (和而不同)",
    "audioZh": "孔子所言“君子和而不同，小人同而不和”，深刻阐明了真正的和谐并非消灭差异，而是在尊重多元见解的基础上实现共生共荣。",
    "pinyin": "Kǒngzǐ suǒ yán “jūnzǐ hé ér bù tóng, xiǎorén tóng ér bù hé”, shēnkè chǎnmíng le zhēnzhèng de héxié bìngfēi xiāomiè chāyì, ér shì zài zūnzhòng duōyuán jiànjiě de jīchǔ shàng shíxiàn gòngshēng gòngróng.",
    "transcriptVi": "Câu nói của Khổng Tử 'Quân tử hòa hợp nhưng không rập khuôn, tiểu nhân rập khuôn nhưng không hòa hợp' đã làm sáng tỏ sâu sắc rằng sự hài hòa thực sự không phải là xóa bỏ khác biệt, mà là thực hiện cùng tồn tại cùng phát triển trên nền tảng tôn trọng các kiến giải đa dạng.",
    "questionVi": "Theo lời giảng, 'Hòa nhi bất đồng (和而不同)' của Khổng Tử mang ý nghĩa gì?",
    "options": [
      "Hài hòa thực sự là tôn trọng sự khác biệt và đa dạng kiến giải để cùng phát triển, chứ không phải xóa bỏ mọi khác biệt",
      "Bắt buộc tất cả mọi người phải có suy nghĩ giống hệt nhau",
      "Không bao giờ hợp tác với bất kỳ ai có ý kiến khác mình",
      "Tranh cãi gay gắt trong mọi cuộc họp"
    ],
    "correctAnswer": "Hài hòa thực sự là tôn trọng sự khác biệt và đa dạng kiến giải để cùng phát triển, chứ không phải xóa bỏ mọi khác biệt",
    "explanationVi": "'真正的和谐并非消灭差异，而是在尊重多元见解的基础上实现共生共荣'."
  },
  {
    "id": "lt-hsk8-basic-2",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Nghệ thuật Lưu bạch (留白) trong hội họa cổ điển",
    "audioZh": "中国古典水墨画推崇“计白当黑”，画幅中未着笔墨的空白并非空无一物，而是云烟、江水与观者神思交汇的意境空间。",
    "pinyin": "Zhōngguó gǔdiǎn shuǐmòhuà tuīchóng “jìbáidānghēi”, huàfú zhōng wèi zhuó bǐmò de kòngbái bìngfēi kōngwúyíwù, ér shì yúnyān, jiāngshuǐ yǔ guānzhě shénsī jiāohuì de yìjìng kōngjiān.",
    "transcriptVi": "Tranh thủy mặc cổ điển Trung Quốc tôn sùng nguyên tắc 'tính khoảng trắng như nét mực', khoảng trắng chưa đặt bút mực trên bức tranh không phải là trống rỗng không có gì, mà là không gian ý cảnh nơi mây khói, sông nước giao hòa với tâm tưởng người xem.",
    "questionVi": "Khoảng trắng (留白) trong tranh thủy mặc cổ điển Trung Quốc có vai trò nghệ thuật gì?",
    "options": [
      "Do họa sĩ hết mực giữa chừng nên chưa kịp vẽ完",
      "Tạo nên không gian ý cảnh mây khói, sông nước để giao hòa với trí tưởng tượng của người thưởng lãm",
      "Để người mua tranh tự viết chữ quảng cáo vào",
      "Để tiết kiệm tiền mua mực tàu"
    ],
    "correctAnswer": "Tạo nên không gian ý cảnh mây khói, sông nước để giao hòa với trí tưởng tượng của người thưởng lãm",
    "explanationVi": "'并非空无一物，而是云烟、江水与观者神思交汇的意境空间'."
  },
  {
    "id": "lt-hsk8-basic-3",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Tiêu chuẩn Dịch thuật Tín - Đạt - Nhã (信达雅)",
    "audioZh": "严复提出的“信、达、雅”翻译三原则，要求译文不仅要忠实于原文意旨、语言通顺畅达，更需在文采与格调上传达出原作的神韵。",
    "pinyin": "Yán Fù tíchū de “xìn, dá, yǎ” fānyì sān yuánzé, yāoqiú yìwén bùjǐn yào zhōngshí yú yuánwén yìzhǐ, yǔyán tōngshùn chàngdá, gèng xū zài wéncǎi yǔ gédiào shàng chuándá chū yuánzuò de shényùn.",
    "transcriptVi": "Ba nguyên tắc dịch thuật 'Tín, Đạt, Nhã' do Nghiêm Phục đề xuất đòi hỏi bản dịch không chỉ trung thành với ý chỉ nguyên văn, ngôn ngữ trôi chảy thông suốt, mà còn cần truyền tải được thần thái của nguyên tác về mặt văn vẻ và phong cách.",
    "questionVi": "Trong ba nguyên tắc dịch thuật 'Tín, Đạt, Nhã' của Nghiêm Phục, chữ 'Nhã (雅)' đòi hỏi điều gì ở bản dịch?",
    "options": [
      "Chỉ cần dịch từng chữ theo thứ tự từ điển",
      "Rút ngắn văn bản xuống còn một câu duy nhất",
      "Truyền tải được thần thái, văn vẻ và phong cách nghệ thuật của nguyên tác",
      "Thay đổi hoàn toàn cốt truyện của tác giả"
    ],
    "correctAnswer": "Truyền tải được thần thái, văn vẻ và phong cách nghệ thuật của nguyên tác",
    "explanationVi": "'更需在文采与格调上传达出原作的神韵' chính là giải thích cho chữ '雅'."
  },
  {
    "id": "lt-hsk8-basic-4",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về ý nghĩa thành ngữ Nhổ cây giúp lớn (拔苗助长)",
    "audioZh": "《孟子》中“拔苗助长”的典故，对于当代教育与企业人才培养有何警示意义？",
    "pinyin": "Mèngzǐ zhōng “bámiáozhùzhǎng” de diǎngù, duìyú dāngdài jiàoyù yǔ qǐyè réncái péiyǎng yǒu hé jǐngshì yìyì?",
    "transcriptVi": "Điển cố 'Bạt miêu trợ trưởng' (Nhổ mạ giúp cây mau lớn) trong sách Mạnh Tử có ý nghĩa cảnh tỉnh gì đối với giáo dục đương đại và bồi dưỡng nhân tài doanh nghiệp?",
    "questionVi": "Đáp án nào阐释 (giải thích) sâu sắc nhất?",
    "options": [
      "说明种庄稼的时候不需要浇水。 (Cho thấy khi trồng lúa không cần tưới nước.)",
      "鼓励企业每天更换所有的管理人员。 (Khuyến khích doanh nghiệp mỗi ngày thay toàn bộ nhân sự quản lý.)",
      "证明只有学农业的人才能当老师。 (Chứng minh chỉ người học nông nghiệp mới làm giáo viên được.)",
      "它警示我们人才成长自有其客观规律，违背循序渐进原则、急功近利地强行催熟，最终只会适得其反。 (Điển cố cảnh tỉnh chúng ta rằng sự trưởng thành của nhân tài có quy luật khách quan riêng; làm trái nguyên tắc tuần tự tiến lên, hám lợi trước mắt mà ép chín sớm thì cuối cùng chỉ phản tác dụng.)"
    ],
    "correctAnswer": "它警示我们人才成长自有其客观规律，违背循序渐进原则、急功近利地强行催熟，最终只会适得其反。 (Điển cố cảnh tỉnh chúng ta rằng sự trưởng thành của nhân tài có quy luật khách quan riêng; làm trái nguyên tắc tuần tự tiến lên, hám lợi trước mắt mà ép chín sớm thì cuối cùng chỉ phản tác dụng.)",
    "explanationVi": "'拔苗助长' phê phán sự nóng vội làm trái quy luật ('违背循序渐进原则、急功近利...最终只会适得其反')."
  },
  {
    "id": "lt-hsk8-basic-5",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về tư tưởng Thượng thiện nhược thủy (上善若水)",
    "audioZh": "道家经典《道德经》云“上善若水，水善利万物而不争”，这一哲学命题蕴含着怎样的处世与领导智慧？",
    "pinyin": "Dàojiā jīngdiǎn Dàodéjīng yún “shàngshànruòshuǐ, shuǐ shàn lì wànwù ér bù zhēng”, zhè yī zhéxué mìngtí yùnhán zhe zěnyàng de chǔshì yǔ lǐngdǎo zhìhuì?",
    "transcriptVi": "Kinh điển Đạo gia Đạo Đức Kinh có câu 'Thượng thiện nhược thủy, thủy thiện lợi vạn vật nhi bất tranh' (Đức thiện cao nhất giống như nước, nước khéo làm lợi cho vạn vật mà không tranh giành), mệnh đề triết học này hàm chứa trí tuệ đối nhân xử thế và lãnh đạo như thế nào?",
    "questionVi": "Đáp án nào chuẩn xác nhất?",
    "options": [
      "它倡导以柔克刚、谦逊包容的胸怀，通过赋能他人与利他成就来赢得持久的感召力，而非靠强权压服。 (Nó đề xướng tấm lòng lấy nhu thắng cương, khiêm nhường bao dung, thông qua việc trao quyền và làm lợi cho người khác để giành được sức cảm hóa lâu dài chứ không dựa vào cường quyền áp chế.)",
      "教导人们遇到困难就立刻放弃。 (Dạy con người gặp khó khăn là lập tức bỏ cuộc.)",
      "认为只有卖矿泉水才能赚大钱。 (Cho rằng chỉ có bán nước khoáng mới kiếm được nhiều tiền.)",
      "主张人与人之间完全不要来往。 (Chủ trương giữa người với người hoàn toàn không qua lại.)"
    ],
    "correctAnswer": "它倡导以柔克刚、谦逊包容的胸怀，通过赋能他人与利他成就来赢得持久的感召力，而非靠强权压服。 (Nó đề xướng tấm lòng lấy nhu thắng cương, khiêm nhường bao dung, thông qua việc trao quyền và làm lợi cho người khác để giành được sức cảm hóa lâu dài chứ không dựa vào cường quyền áp chế.)",
    "explanationVi": "'上善若水' đề cao đức tính khiêm nhường, bao dung, làm lợi cho vạn vật và lấy nhu thắng cương."
  },
  {
    "id": "lt-hsk8-basic-6",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về nguyên tắc khảo chứng sử học",
    "audioZh": "面对浩如烟海且真伪混杂的古代文献史料，历史学者在治学时应遵循怎样的方法论？",
    "pinyin": "Miànduì hàorúyānhǎi qiě zhēnwěi hùnzá de gǔdài wénxiàn shǐliào, lìshǐ xuézhě zài zhìxué shí yīng zūnxún zěnyàng de fāngfǎlùn?",
    "transcriptVi": "Đối mặt với tư liệu văn kiện lịch sử cổ đại mênh mông như biển khói lại lẫn lộn thật giả, học giả lịch sử khi nghiên cứu cần tuân theo phương pháp luận nào?",
    "questionVi": "Đáp án nào thể hiện tinh thần học thuật nghiêm cẩn?",
    "options": [
      "只要故事好听就可以直接写进历史教科书。 (Chỉ cần câu chuyện hay là có thể viết thẳng vào sách giáo khoa lịch sử.)",
      "应当秉持“孤证不立”与“二重证据法”原则，将传世文献与地下考古实物相互印证，力戒主观臆断。 (Cần kiên trì nguyên tắc 'chứng cứ đơn lẻ không thể lập luận' và 'phương pháp chứng cứ kép', đem văn kiện lưu truyền đối chiếu kiểm chứng với hiện vật khảo cổ dưới lòng đất, tuyệt đối tránh suy đoán chủ quan.)",
      "只相信现代人拍的古装电视剧。 (Chỉ tin vào phim truyền hình cổ trang do người hiện đại quay.)",
      "把看不懂的古籍全部烧掉。 (Đốt hết những sách cổ không đọc hiểu được.)"
    ],
    "correctAnswer": "应当秉持“孤证不立”与“二重证据法”原则，将传世文献与地下考古实物相互印证，力戒主观臆断。 (Cần kiên trì nguyên tắc 'chứng cứ đơn lẻ không thể lập luận' và 'phương pháp chứng cứ kép', đem văn kiện lưu truyền đối chiếu kiểm chứng với hiện vật khảo cổ dưới lòng đất, tuyệt đối tránh suy đoán chủ quan.)",
    "explanationVi": "Trong sử học Trung Hoa, nguyên tắc '孤证不立' và '二重证据法' (của Vương Quốc Duy: đối chiếu văn헌 và khảo cổ) là chuẩn mực tối cao."
  },
  {
    "id": "lt-hsk8-basic-7",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Bàn về tinh thần nghệ nhân (工匠精神) và văn hóa nhanh",
    "audioZh": "女：在如今追求流量与快钱的商业环境下，一个老字号墨厂依然坚持用古法耗时两年制作一块松烟墨，不少人觉得这不合时宜。\n男：恰恰相反，越是在浮躁的时代，这种精益求精、耐得住寂寞的工匠精神越是稀缺的护城河。机器能批量复制商品，却无法复制倾注其中的时间与心血。",
    "pinyin": "Nǚ: Zài rújīn zhuīqiú liúliàng yǔ kuàiqián de shāngyè huánjìng xià, yí gè lǎozìhào mòchǎng yīrán jiānchí yòng gǔfǎ hàoshí liǎng nián zhìzuò yí kuài sōngyānmò, bùshǎo rén juéde zhè bùhéshíyí.\nNán: Qiàqià xiāngfǎn, yuè shì zài fúzào de shídài, zhè zhǒng jīngyìqiújīng, nàidezhù jìmò de gōngjiàng jīngshén yuè shì xīquē de hùchénghé. Jīqì néng pīliàng fùzhì shāngpǐn, què wúfǎ fùzhì qīngzhù qízhōng de shíjiān yǔ xīnxuè.",
    "transcriptVi": "Nữ: Trong môi trường thương mại chạy theo lưu lượng và tiền nhanh hiện nay, một xưởng mực lâu đời vẫn kiên trì dùng phương pháp cổ truyền mất 2 năm mới chế tác xong một thỏi mực tùng yên, không ít người cho rằng điều này không hợp thời.\nNam: Hoàn toàn ngược lại, càng trong thời đại xốc nổi thì tinh thần nghệ nhân cầu toàn tinh xảo, chịu được sự cô tịch này càng là hào bảo vệ khan hiếm. Máy móc có thể sao chép hàng loạt hàng hóa, nhưng không thể sao chép thời gian và tâm huyết đổ vào trong đó.",
    "questionVi": "Bạn nam nhìn nhận thế nào về việc xưởng mực lâu đời dành 2 năm làm một thỏi mực theo phương pháp cổ?",
    "options": [
      "Cho rằng xưởng mực nên đóng cửa ngay lập tức",
      "Khuyên xưởng mực chuyển sang bán mực in laser giá rẻ",
      "Đó là tinh thần nghệ nhân cầu toàn quý giá, tạo nên giá trị độc bản mà máy móc sản xuất hàng loạt không thể sao chép",
      "Cho rằng làm mực chỉ mất 5 phút là đủ"
    ],
    "correctAnswer": "Đó là tinh thần nghệ nhân cầu toàn quý giá, tạo nên giá trị độc bản mà máy móc sản xuất hàng loạt không thể sao chép",
    "explanationVi": "Bạn nam khẳng định: '越是在浮躁的时代，这种精益求精、耐得住寂寞的工匠精神越是稀缺的护城河'."
  },
  {
    "id": "lt-hsk8-basic-8",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Thảo luận về việc dịch thuật ngữ văn hóa Trung Hoa ra nước ngoài",
    "audioZh": "男：在把中国古典诗词翻译成外语时，如果完全按字面直译，外国读者往往摸不着头脑；但如果完全用西方典故替换，又丧失了原本的文化意象。\n女：这就需要译者具备深厚的跨文化阐释力。比如翻译“东施效颦”或“折柳送别”时，可以在保留核心意象的同时，辅以简明扼要的文化语境导读，架起理解的桥梁。",
    "pinyin": "Nán: Zài bǎ Zhōngguó gǔdiǎn shīcí fānyì chéng wàiyǔ shí, rúguǒ wánquán àn zìmiàn zhíyì, wàiguó dúzhě wǎngwǎng mōbuzháo tóunǎo; dàn rúguǒ wánquán yòng Xīfāng diǎngù tìhuàn, yòu sàngshī le yuánběn de wénhuà yìxiàng.\nNǚ: Zhè jiù xūyào yìzhě jùbèi shēnhòu de kuàwénhuà chǎnshìlì. Bǐrú fānyì “Dōngshīxiàopín” huò “zhéliǔ sòngbié” shí, kěyǐ zài bǎoliú héxīn yìxiàng de tóngshí, fǔ yǐ jiǎnmíng'èyào de wénhuà yǔjìng dǎodú, jiàqǐ lǐjiě de qiáoliáng.",
    "transcriptVi": "Nam: Khi dịch thơ từ cổ điển Trung Quốc sang ngoại ngữ, nếu dịch sát từng chữ theo mặt chữ thì độc giả nước ngoài thường không hiểu đầu cua tai nheo thế nào; nhưng nếu thay thế hoàn toàn bằng điển cố phương Tây thì lại đánh mất hình tượng văn hóa vốn có.\nNữ: Điều này đòi hỏi dịch giả phải có năng lực diễn giải liên văn hóa sâu dày. Ví dụ khi dịch 'Đông Thi hiệu tần' hay 'bẻ liễu tiễn biệt', có thể vừa giữ lại hình tượng cốt lõi vừa kèm theo phần dẫn giải ngữ cảnh văn hóa ngắn gọn súc tích để bắc nhịp cầu thấu hiểu.",
    "questionVi": "Bạn nữ đề xuất phương pháp nào để xử lý các điển cố và hình tượng văn hóa khi dịch thơ cổ ra nước ngoài?",
    "options": [
      "Bỏ qua không dịch tất cả các câu có điển cố",
      "Thay thế toàn bộ tên nhân vật lịch sử bằng tên nhân vật hoạt hình",
      "Chỉ phiên âm Pinyin mà không dịch nghĩa",
      "Giữ lại hình tượng văn hóa cốt lõi kết hợp với phần dẫn giải ngữ cảnh văn hóa ngắn gọn súc tích"
    ],
    "correctAnswer": "Giữ lại hình tượng văn hóa cốt lõi kết hợp với phần dẫn giải ngữ cảnh văn hóa ngắn gọn súc tích",
    "explanationVi": "Bạn nữ gợi ý: '在保留核心意象的同时，辅以简明扼要的文化语境导读，架起理解的桥梁'."
  },
  {
    "id": "lt-hsk8-basic-9",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Phân tích tư tưởng Cư an tư nguy (居安思危)",
    "audioZh": "女：纵观商业史，许多曾经不可一世的行业巨头并非败在创业初期的艰难中，反而是在巅峰时期迅速陨落。\n男：所谓“生于忧患，死于安乐”。当企业垄断市场后，管理层极易滋生傲慢与路径依赖，对颠覆性技术的萌芽视而不见。唯有时刻保持居安思危的警觉，敢于自我革新，方能基业长青。",
    "pinyin": "Nǚ: Zòngguān shāngyèshǐ, xǔduō céngjīng bùkěyíshì de hángyè jùtóu bìngfēi bài zài chuàngyè chūqī de jiānnán zhōng, fǎn'ér shì zài diānfēng shíqī xùnsù yǔnluò.\nNán: Suǒwèi “shēng yú yōuhuàn, sǐ yú ānlè”. Dāng qǐyè lǒngduàn shìchǎng hòu, guǎnlǐcéng jíyì zīshēng àomàn yǔ lùjìng yīlài, duì diānfùxìng jìshù de méngyá shì'érbújiàn. Wéiyǒu shíkè bǎochí jū'ānsīwēi de jǐngjué, gǎnyú zìwǒ géxīn, fāng néng jīyèchángqīng.",
    "transcriptVi": "Nữ: Nhìn纵관 (tổng quan) lịch sử thương mại, nhiều gã khổng lồ từng lừng lẫy một thời không hề thất bại trong gian nan thuở mới khởi nghiệp, mà ngược lại sụp đổ nhanh chóng ngay ở thời kỳ đỉnh cao.\nNam: Đúng như câu 'Sống trong忧患 (lo âu hoạn nạn), chết trong an lạc'. Khi doanh nghiệp độc chiếm thị trường, tầng lớp quản lý rất dễ nảy sinh sự ngạo mạn và phụ thuộc vào lối mòn cũ, làm ngơ trước mầm mống của công nghệ mang tính lật đổ. Chỉ có luôn giữ sự cảnh giác lúc an bình nghĩ đến nguy cơ, dám tự đổi mới chính mình mới có thể giữ cơ nghiệp trường tồn.",
    "questionVi": "Theo bạn nam, tại sao nhiều tập đoàn lớn lại sụp đổ ngay khi đang ở đỉnh cao?",
    "options": [
      "Vì tầng lớp quản lý nảy sinh sự ngạo mạn, phụ thuộc vào lối mòn thành công cũ và làm ngơ trước các công nghệ đột phá mới",
      "Vì họ đầu tư quá nhiều tiền cho nghiên cứu công nghệ mới",
      "Vì họ quá khiêm tốn và cẩn trọng",
      "Vì họ tuyển dụng quá nhiều nhân tài trẻ"
    ],
    "correctAnswer": "Vì tầng lớp quản lý nảy sinh sự ngạo mạn, phụ thuộc vào lối mòn thành công cũ và làm ngơ trước các công nghệ đột phá mới",
    "explanationVi": "Bạn nam chỉ rõ: '管理层极易滋生傲慢与路径依赖，对颠覆性技术的萌芽视而不见'."
  },
  {
    "id": "lt-hsk8-basic-10",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Chiều sâu văn hóa của chữ Hán: Biểu ý và Siêu vượt phương言",
    "audioZh": "在世界古老文字体系中，汉字是唯一沿用数千年而未曾中断的表意文字。与表音文字直接记录语音不同，汉字通过象形、指事、会意、形声等造字法，将先民对自然万物的哲学思考凝结于方寸笔画之间。正因为汉字超脱了具体方言读音的束缚，使得天南海北、口音迥异的人们得以共用同一套书面文献，从而在历史长河中牢牢维系了中华文明的向心力与连续性。",
    "pinyin": "Zài shìjiè gǔlǎo wénzì tǐxì zhōng, Hànzì shì wéiyī yányòng shùqiān nián ér wèicéng zhōngduàn de biǎoyì wénzì. Yǔ biǎoyīn wénzì zhíjiē jìlù yǔyīn bùtóng, Hànzì tōngguò xiàngxíng, zhǐshì, huìyì, xíngshēng děng zàozìfǎ, jiāng xiānmín duì zìrán wànwù de zhéxué sīkǎo níngjié yú fāngcùn bǐhuà zhījiān. Zhèng yīnwèi Hànzì chāotuō le jùtǐ fāngyán dúyīn de shùfù, shǐde tiānnánhǎiběi, kǒuyīn jiǒngyì de rénmen déyǐ gòngyòng tóng yí tào shūmiàn wénxiàn, cóng'ér zài lìshǐ chánghé zhōng láoláo wéixì le Zhōnghuá wénmíng de xiàngxīnlì yǔ liánxùxìng.",
    "transcriptVi": "Trong các hệ thống chữ viết cổ xưa trên thế giới, chữ Hán là chữ viết biểu ý duy nhất được sử dụng liên tục hàng ngàn năm mà chưa từng đứt đoạn. Khác với chữ biểu âm ghi lại trực tiếp âm thanh lời nói, chữ Hán thông qua các phép tạo chữ Tượng hình, Chỉ sự, Hội ý, Hình thanh đã kết tinh tư duy triết học của người xưa về vạn vật tự nhiên vào trong từng nét bút vuông vức. Chính nhờ chữ Hán vượt thoát khỏi sự ràng buộc của âm đọc phương ngữ cụ thể, khiến người dân khắp bốn phương dù giọng nói khác biệt vẫn có thể dùng chung một hệ thống văn헌 chữ viết, từ đó duy trì bền chặt lực hướng tâm và tính liên tục của văn minh Trung Hoa trong dòng chảy lịch sử.",
    "questionVi": "Đặc tính nào của chữ Hán đã giúp người dân các vùng miền có phương ngữ (giọng nói) rất khác nhau vẫn dùng chung được một hệ thống văn bản suốt hàng ngàn năm?",
    "options": [
      "Vì chữ Hán chỉ có 26 chữ cái",
      "Tính chất biểu ý vượt thoát khỏi sự ràng buộc của âm đọc phương ngữ cụ thể",
      "Vì chữ Hán thay đổi hình dạng hoàn toàn sau mỗi 10 năm",
      "Vì người xưa ở mọi vùng đều nói giọng Bắc Kinh chuẩn"
    ],
    "correctAnswer": "Tính chất biểu ý vượt thoát khỏi sự ràng buộc của âm đọc phương ngữ cụ thể",
    "explanationVi": "Trong bài giải thích: '正因为汉字超脱了具体方言读音的束缚，使得天南海北、口音迥异的人们得以共用同一套书面文献'."
  },
  {
    "id": "lt-hsk8-basic-11",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Mỹ học Thư pháp: Tâm họa và Khí vận",
    "audioZh": "汉代学者扬雄曾言：“书，心画也。”在中国传统文化视野中，书法绝非单纯的写字技巧，而是书写者学养、性情与胸襟的外化。同是一笔长横，有人写来刚健雄强如千里阵云，有人写来温润内敛似谦谦君子。行笔过程中的起承转合、提按顿挫，无不与呼吸吐纳相呼应。因此，临习书法不仅是锤炼控笔能力的过程，更是一场澄怀观道、涵养浩然之气的精神修行。",
    "pinyin": "Hàndài xuézhě Yáng Xióng céng yán: “Shū, xīnhuà yě.” Zài Zhōngguó chuántǒng wénhuà shìyě zhōng, shūfǎ juéfēi dānchún de xiězì jìqiǎo, ér shì shūxiězhě xuéyǎng, xìngqíng yǔ xiōngjīn de wàihuà. Tóng shì yì bǐ chánghéng, yǒurén xiě lái gāngjiàn xióngqiáng rú qiānlǐ zhènyún, yǒurén xiě lái wēnrùn nèiliǎn sì qiānqiān jūnzǐ. Xíngbǐ guòchéng zhōng de qǐ-chéng-zhuǎn-hé, tí-àn-dùn-cuò, wúbù yǔ hūxī tǔnà xiāng hūyìng. Yīncǐ, línxí shūfǎ bùjǐn shì chuíliàn kòngbǐ nénglì de guòchéng, gèng shì yì chǎng chénghuáiguāndào, hányǎng hàoránzhīqì de jīngshén xiūxíng.",
    "transcriptVi": "Học giả thời Hán Dương Hùng từng nói: 'Chữ viết là bức tranh của tâm hồn.' Dưới góc nhìn văn hóa truyền thống Trung Quốc, thư pháp tuyệt nhiên không phải kỹ xảo viết chữ đơn thuần, mà là sự biểu hiện ra bên ngoài của học vấn, tính tình và tầm vóc tâm hồn người viết. Cùng là một nét ngang dài, có người viết剛健 (cương kiện) hùng mạnh như mây trận ngàn dặm, có người viết ôn nhuần kín đáo tựa người quân tử khiêm nhường. Sự khởi mở chuyển hợp, nâng ấn trầm bổng trong quá trình đi bút đều hô ứng với nhịp thở. Do đó, luyện tập thư pháp không chỉ là quá trình rèn luyện khả năng kiểm soát bút, mà còn là một cuộc tu hành tinh thần làm lắng trong tâm hồn và nuôi dưỡng khí pháchạo nhiên.",
    "questionVi": "Câu nói 'Thư, tâm họa dã (书，心画也)' của học giả Dương Hùng thời Hán có hàm ý gì?",
    "options": [
      "Viết chữ Hán bắt buộc phải vẽ thêm một bức tranh bên cạnh",
      "Chỉ những họa sĩ mới biết viết chữ",
      "Thư pháp là bức tranh phản ánh học vấn, tính tình và tâm hồn của người cầm bút",
      "Thư pháp chỉ dùng để trang trí tường"
    ],
    "correctAnswer": "Thư pháp là bức tranh phản ánh học vấn, tính tình và tâm hồn của người cầm bút",
    "explanationVi": "Trong bài giải thích ngay sau câu trích dẫn: '书法绝非单纯的写字技巧，而是书写者学养、性情与胸襟的外化'."
  },
  {
    "id": "lt-hsk8-basic-12",
    "level": "HSK8",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Triết lý Tu thân và Trách nhiệm xã hội của kẻ sĩ",
    "audioZh": "《礼记·大学》所构建的“格物、致知、诚意、正心、修身、齐家、治国、平天下”八条目，深刻勾勒出中国传统知识分子的人生进阶路径。在这一思想体系中，内在的道德修养是一切外在事功的起点与根基——没有“格物致知”的理性探索与“正心修身”的人格锤炼，所谓的“治国平天下”便如同无源之水、无本之木。这种将个体品德完善与社会公共责任融为一体的价值取向，至今仍具深远的现代启示。",
    "pinyin": "Lǐjì - Dàxué suǒ gòujiàn de “géwù, zhìzhī, chéngyì, zhèngxīn, xiūshēn, qíjiā, zhìguó, píngtiānxià” bā tiáomù, shēnkè gōulè chū Zhōngguó chuántǒng zhīshifènzǐ de rénshēng jìnjiē lùjìng. Zài zhè yī sīxiǎng tǐxì zhōng, nèizài de dàodé xiūyǎng shì yíqiè wàizài shìgōng de qǐdiǎn yǔ gēnjī — méiyǒu “géwùzhìzhī” de lǐxìng tànsuǒ yǔ “zhèngxīn xiūshēn” de réngé chuíliàn, suǒwèi de “zhìguó píngtiānxià” biàn rútóng wúyuánzhīshuǐ, wúběnzhīmù. Zhè zhǒng jiāng gètǐ pǐndé wánshàn yǔ shèhuì gōnggòng zérèn róngwéiyìtǐ de jiàzhí qǔxiàng, zhìjīn réng jù shēnyuǎn de xiàndài qǐshì.",
    "transcriptVi": "Tám mục 'Cách vật, Trí tri, Thành ý, Chính tâm, Tu thân, Tề gia, Trị quốc, Bình thiên hạ' được xây dựng trong sách Lễ Ký - Đại Học đã phác họa sâu sắc lộ trình thăng tiến nhân sinh của người trí thức truyền thống Trung Quốc. Trong hệ thống tư tưởng này, sự tu dưỡng đạo đức nội tại là điểm khởi đầu và gốc rễ của mọi sự nghiệp bên ngoài — nếu không có sự tìm tòi lý tính của 'cách vật trí tri' và sự rèn giũa nhân cách của 'chính tâm tu thân' thì cái gọi là 'trị quốc bình thiên hạ' sẽ chẳng khác nào nước không nguồn, cây không gốc. Định hướng giá trị dung hợp việc hoàn thiện phẩm đức cá nhân với trách nhiệm công cộng xã hội này cho đến nay vẫn mang ý nghĩa gợi mở hiện đại sâu xa.",
    "questionVi": "Trong tư tưởng của sách 'Đại Học', điều gì được coi là điểm khởi đầu và gốc rễ cho sự nghiệp 'Trị quốc, Bình thiên hạ'?",
    "options": [
      "Sự giàu có về tiền bạc và tài sản",
      "Việc nắm giữ binh quyền",
      "Việc tách biệt hoàn toàn khỏi gia đình và xã hội",
      "Sự tìm tòi tri thức ('Cách vật trí tri') và tu dưỡng đạo đức, nhân cách nội tại ('Chính tâm tu thân')"
    ],
    "correctAnswer": "Sự tìm tòi tri thức ('Cách vật trí tri') và tu dưỡng đạo đức, nhân cách nội tại ('Chính tâm tu thân')",
    "explanationVi": "Đoạn văn nêu rõ: '内在的道德修养是一切外在事功的起点与根基——没有“格物致知”的理性探索与“正心修身”的人格锤炼...'."
  },
  {
    "id": "lt-hsk8-advanced-1",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Đường cong nụ cười (Smiling Curve) trong chuỗi giá trị toàn cầu",
    "audioZh": "根据“微笑曲线”理论，产业链的高附加值主要集中在前端的核心技术研发与后端的品牌渠道运营，而处于中间环节的单纯组装制造利润最为微薄。",
    "pinyin": "Gēnjù “wēixiào qūxiàn” lǐlùn, chǎnyèliàn de gāo fùjiāzhí zhǔyào jízhōng zài qiánduān de héxīn jìshù yánfā yǔ hòuduān de pǐnpái qúdào yùnyíng, ér chǔyú zhōngjiān huánjié de dānchún zǔzhuāng zhìzào lìrùn zuìwéi wēibó.",
    "transcriptVi": "Theo lý thuyết 'Đường cong nụ cười', giá trị gia tăng cao của chuỗi công nghiệp chủ yếu tập trung ở đầu trước là nghiên cứu phát triển công nghệ lõi và đầu sau là vận hành kênh thương hiệu, còn khâu lắp ráp chế tạo đơn thuần nằm ở giữa có lợi nhuận mỏng nhất.",
    "questionVi": "Theo lý thuyết 'Đường cong nụ cười', giá trị gia tăng cao nhất nằm ở những khâu nào?",
    "options": [
      "Nghiên cứu phát triển công nghệ lõi ở đầu trước và vận hành kênh thương hiệu ở đầu sau",
      "Khâu lắp ráp gia công đơn thuần ở chính giữa",
      "Khâu vận chuyển nguyên liệu thô",
      "Khâu đóng gói thùng giấy"
    ],
    "correctAnswer": "Nghiên cứu phát triển công nghệ lõi ở đầu trước và vận hành kênh thương hiệu ở đầu sau",
    "explanationVi": "'高附加值主要集中在前端的核心技术研发与后端的品牌渠道运营'."
  },
  {
    "id": "lt-hsk8-advanced-2",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Cơ chế Điều chỉnh Biên giới Carbon (CBAM)",
    "audioZh": "欧盟碳边境调节机制的全面落地，意味着高碳排放产品在出口时需额外购买碳关税凭证，这将倒逼发展中国家出口企业加速全生命周期的绿色低碳改造。",
    "pinyin": "Ōuméng tàn biānjìng tiáojié jīzhì de quánmiàn luòdì, yìwèizhe gāo tàn páifàng chǎnpǐn zài chūkǒu shí xū éwài gòumǎi tàn guānshuì píngzhèng, zhè jiāng dàobī fāzhǎnzhōng guójiā chūkǒu qǐyè jiākuài quán shēngmìng zhōuqī de lǜsè dītàn gǎizào.",
    "transcriptVi": "Việc Cơ chế Điều chỉnh Biên giới Carbon (CBAM) của EU được triển khai toàn diện đồng nghĩa với việc các sản phẩm phát thải carbon cao khi xuất khẩu phải mua thêm chứng chỉ thuế quan carbon, điều này sẽ buộc các doanh nghiệp xuất khẩu ở các nước đang phát triển đẩy nhanh cải tạo xanh carbon thấp trong toàn bộ vòng đời sản phẩm.",
    "questionVi": "Cơ chế CBAM của EU tác động thế nào đến các doanh nghiệp xuất khẩu có mức phát thải carbon cao?",
    "options": [
      "Được EU thưởng thêm tiền mặt khi phát thải nhiều carbon",
      "Buộc phải mua thêm chứng chỉ thuế quan carbon, từ đó thúc đẩy doanh nghiệp đẩy nhanh cải tạo sản xuất xanh carbon thấp",
      "Được miễn toàn bộ thủ tục hải quan",
      "Không có bất kỳ ảnh hưởng nào đến chi phí xuất khẩu"
    ],
    "correctAnswer": "Buộc phải mua thêm chứng chỉ thuế quan carbon, từ đó thúc đẩy doanh nghiệp đẩy nhanh cải tạo sản xuất xanh carbon thấp",
    "explanationVi": "'高碳排放产品在出口时需额外购买碳关税凭证，这将倒逼...加速全生命周期的绿色低碳改造'."
  },
  {
    "id": "lt-hsk8-advanced-3",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Quy định Chống xói mòn cơ sở thuế và chuyển lợi nhuận (BEPS)",
    "audioZh": "全球最低企业税率协议的实施，旨在遏制跨国巨头通过将无形资产与账面利润转移至低税率避税港来逃避东道国纳税义务的行为。",
    "pinyin": "Quánqiú zuìdī qǐyè shuìlǜ xiéyì de shíshī, zhǐzài èzhì kuàguó jùtóu tōngguò jiāng wúxíng zīchǎn yǔ zhàngmiàn lìrùn zhuǎnyí zhì dī shuìlǜ bìshuìgǎng lái táobì dōngdàoguó nàshuì yìwù de xíngwéi.",
    "transcriptVi": "Việc thực thi thỏa thuận thuế suất doanh nghiệp tối thiểu toàn cầu nhằm ngăn chặn hành vi của các tập đoàn đa quốc gia chuyển tài sản vô hình và lợi nhuận trên sổ sách sang các thiên đường thuế có thuế suất thấp để trốn tránh nghĩa vụ nộp thuế tại nước sở tại.",
    "questionVi": "Mục đích của thỏa thuận thuế suất doanh nghiệp tối thiểu toàn cầu là gì?",
    "options": [
      "Xóa bỏ hoàn toàn mọi loại thuế cho các tập đoàn lớn",
      "Tăng thuế thu nhập cá nhân của sinh viên lên 90%",
      "Ngăn chặn các tập đoàn đa quốc gia chuyển lợi nhuận sang các thiên đường thuế để né tránh nghĩa vụ thuế",
      "Đóng cửa tất cả các ngân hàng quốc tế"
    ],
    "correctAnswer": "Ngăn chặn các tập đoàn đa quốc gia chuyển lợi nhuận sang các thiên đường thuế để né tránh nghĩa vụ thuế",
    "explanationVi": "'旨在遏制跨国巨头通过将无形资产与账面利润转移至低税率避税港来逃避东道国纳税义务的行为'."
  },
  {
    "id": "lt-hsk8-advanced-4",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về chiến lược quản trị ESG của tập đoàn đa quốc gia",
    "audioZh": "为什么如今国际机构投资者在评估一家跨国上市公司的长期价值时，把ESG报告与财务报表置于同等重要的地位？",
    "pinyin": "Wèishénme rújīn guójì jīgòu tóuzīzhě zài pínggū yì jiā kuàguó shàngshì gōngsī de chángqī jiàzhí shí, bǎ ESG bàogào yǔ cáiwù bàobiǎo zhìyú tóngděng zhòngyào de dìwèi?",
    "transcriptVi": "Tại sao hiện nay các nhà đầu tư tổ chức quốc tế khi đánh giá giá trị dài hạn của một công ty niêm yết đa quốc gia lại đặt báo cáo ESG (Môi trường, Xã hội và Quản trị) ở vị trí quan trọng ngang với báo cáo tài chính?",
    "questionVi": "Đáp án nào phân tích sắc bén nhất?",
    "options": [
      "因为ESG报告只有一页纸，比财务报表容易读。 (Vì báo cáo ESG chỉ có 1 trang giấy, dễ đọc hơn báo cáo tài chính.)",
      "因为发布了ESG报告就不需要向股东分红。 (Vì phát hành báo cáo ESG thì không cần chia cổ tức cho cổ đông.)",
      "因为ESG只统计公司种了多少棵树。 (Vì ESG chỉ thống kê công ty trồng được bao nhiêu cái cây.)",
      "因为良好的环境合规、劳工权益保障与透明的公司治理能够显著降低企业的尾部黑天鹅风险，体现其可持续经营韧性。 (Vì việc tuân thủ môi trường tốt, bảo đảm quyền lợi người lao động và quản trị công ty minh bạch có thể giảm đáng kể rủi ro 'thiên nga đen' cực đoan, thể hiện sức chống chịu kinh doanh bền vững của doanh nghiệp.)"
    ],
    "correctAnswer": "因为良好的环境合规、劳工权益保障与透明的公司治理能够显著降低企业的尾部黑天鹅风险，体现其可持续经营韧性。 (Vì việc tuân thủ môi trường tốt, bảo đảm quyền lợi người lao động và quản trị công ty minh bạch có thể giảm đáng kể rủi ro 'thiên nga đen' cực đoan, thể hiện sức chống chịu kinh doanh bền vững của doanh nghiệp.)",
    "explanationVi": "ESG giúp đánh giá khả năng quản trị rủi ro dài hạn ('降低企业的尾部黑天鹅风险，体现其可持续经营韧性')."
  },
  {
    "id": "lt-hsk8-advanced-5",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về cơ chế khuyến khích cổ phần (Equity Incentive) và chi phí đại diện",
    "audioZh": "在现代公司治理结构中，所有权与经营权的分离容易引发“委托代理矛盾”，董事会通常如何通过制度设计加以化解？",
    "pinyin": "Zài xiàndài gōngsī zhìlǐ jiégòu zhōng, suǒyǒuquán yǔ jīngyíngquán de fēnlí róngyì yǐnfā “wěituō dàilǐ máodùn”, dǒngshìhuì tōngcháng rúhé tōngguò zhìdù shèjì jiāyǐ huàjiě?",
    "transcriptVi": "Trong cấu trúc quản trị công ty hiện đại, sự tách rời giữa quyền sở hữu và quyền điều hành dễ làm nảy sinh 'mâu thuẫn ủy thác - đại diện (principal-agent problem)', Hội đồng quản trị thường hóa giải điều này qua thiết kế chế độ như thế nào?",
    "questionVi": "Đáp án nào đúng lý thuyết quản trị doanh nghiệp hiện đại?",
    "options": [
      "通过实施限制性股票或期权等长期股权激励计划，将职业经理人的个人收益与公司长期市值及业绩目标深度绑定。 (Thông qua việc thực hiện kế hoạch khuyến khích cổ phần dài hạn như cổ phiếu hạn chế hoặc quyền chọn cổ phiếu, gắn kết sâu sắc thu nhập cá nhân của nhà quản lý chuyên nghiệp với giá trị vốn hóa dài hạn và mục tiêu业绩 của công ty.)",
      "要求所有股东每天亲自到工厂流水线拧螺丝。 (Yêu cầu tất cả cổ đông mỗi ngày đích thân đến dây chuyền nhà máy vặn ốc vít.)",
      "取消总经理和所有部门经理的职位。 (Hủy bỏ chức vụ tổng giám đốc và tất cả giám đốc bộ phận.)",
      "不给管理层发任何工资。 (Không trả bất kỳ khoản lương nào cho tầng lớp quản lý.)"
    ],
    "correctAnswer": "通过实施限制性股票或期权等长期股权激励计划，将职业经理人的个人收益与公司长期市值及业绩目标深度绑定。 (Thông qua việc thực hiện kế hoạch khuyến khích cổ phần dài hạn như cổ phiếu hạn chế hoặc quyền chọn cổ phiếu, gắn kết sâu sắc thu nhập cá nhân của nhà quản lý chuyên nghiệp với giá trị vốn hóa dài hạn và mục tiêu业绩 của công ty.)",
    "explanationVi": "Cơ chế '长期股权激励计划' (khuyến khích cổ phần dài hạn) giúp gắn lợi ích của ban điều hành với lợi ích dài hạn của cổ đông."
  },
  {
    "id": "lt-hsk8-advanced-6",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về quy định chống độc quyền đối với nền tảng kỹ thuật số",
    "audioZh": "当大型数字生态平台利用算法偏袒自营商品并强制商户“二选一”时，反垄断监管机构应当依据何种原则进行规制？",
    "pinyin": "Dāng dàxíng shùzì shēngtài píngtái lìyòng suànfǎ piāntǎn zìyíng shāngpǐn bìng qiángzhì shānghù “èrxuǎnyī” shí, fǎnlǒngduàn jiānguǎn jīgòu yīngdāng yījù hézhǒng yuánzé jìnxíng guīzhì?",
    "transcriptVi": "Khi các nền tảng hệ sinh thái số lớn lợi dụng thuật toán thiên vị hàng tự doanh và ép buộc các thương nhân phải 'chọn một trong hai' (không được bán trên nền tảng đối thủ), cơ quan giám sát chống độc quyền cần dựa trên nguyên tắc nào để chế tài?",
    "questionVi": "Đáp án nào chính xác nhất?",
    "options": [
      "直接关闭全国所有的互联网服务器。 (Đóng cửa trực tiếp toàn bộ máy chủ Internet trên cả nước.)",
      "应依据反垄断法关于禁止滥用市场支配地位的规定，责令平台停止排他性限制，保障平台内中小微经营者的公平竞争权。 (Cần căn cứ quy định của Luật Chống độc quyền về cấm lạm dụng vị trí thống lĩnh thị trường, buộc nền tảng chấm dứt các hạn chế mang tính loại trừ, bảo đảm quyền cạnh tranh công bằng của các hộ kinh doanh vừa và nhỏ trên nền tảng.)",
      "要求所有商户停止网上销售。 (Yêu cầu tất cả thương nhân ngừng bán hàng qua mạng.)",
      "允许平台没收商户的全部货款。 (Cho phép nền tảng tịch thu toàn bộ tiền hàng của thương nhân.)"
    ],
    "correctAnswer": "应依据反垄断法关于禁止滥用市场支配地位的规定，责令平台停止排他性限制，保障平台内中小微经营者的公平竞争权。 (Cần căn cứ quy định của Luật Chống độc quyền về cấm lạm dụng vị trí thống lĩnh thị trường, buộc nền tảng chấm dứt các hạn chế mang tính loại trừ, bảo đảm quyền cạnh tranh công bằng của các hộ kinh doanh vừa và nhỏ trên nền tảng.)",
    "explanationVi": "Ép '二选一' là hành vi điển hình của '滥用市场支配地位' (lạm dụng vị trí thống lĩnh thị trường) trong Luật Chống độc quyền."
  },
  {
    "id": "lt-hsk8-advanced-7",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Thảo luận về chiến lược bản địa hóa sâu (Deep Localization) tại Đông Nam Á",
    "audioZh": "女：不少企业以为出海东南亚只要把国内畅销的产品翻译成当地语言、找几个本地经销商就能大功告成，结果往往水土不服。\n男：一针见血。真正的跨国本土化绝非表层的语言转换，而是要深入研究当地的气候特征、宗教文化禁忌与消费信贷习惯，甚至在当地建立本地化的研发与售后中心，实现从“产品出海”向“品牌与供应链生态出海”的跨越。",
    "pinyin": "Nǚ: Bùshǎo qǐyè yǐwéi chūhǎi Dōngnányà zhǐyào bǎ guónèi chàngxiāo de chǎnpǐn fānyì chéng dāngdì yǔyán, zhǎo jǐ gè běndì jīngxiāoshāng jiù néng dàgōnggàochéng, jiéguǒ wǎngwǎng shuǐtǔbùfú.\nNán: Yìzhēnjiànxiě. Zhēnzhèng de kuàguó běntǔhuà juéfēi biǎocéng de yǔyán zhuǎnhuàn, ér shì yào shēnrù yánjiū dāngdì de qìhòu tèzhēng, zōngjiào wénhuà jìnjì yǔ xiāofèi xìndài xíguàn, shènzhì zài dāngdì jiànlì běndìhuà de yánfā yǔ shòuhòu zhōngxīn, shíxiàn cóng “chǎnpǐn chūhǎi” xiàng “pǐnpái yǔ gōngyìngliàn shēngtài chūhǎi” de kuàyuè.",
    "transcriptVi": "Nữ: Không ít doanh nghiệp tưởng rằng vươn ra thị trường Đông Nam Á chỉ cần dịch sản phẩm bán chạy trong nước sang ngôn ngữ bản địa, tìm vài nhà phân phối địa phương là thành công mỹ mãn, kết quả thường không thích nghi được ('không hợp thủy thổ').\nNam: Rất trúng tim đen. Bản địa hóa đa quốc gia thực sự tuyệt không phải là chuyển đổi ngôn ngữ bề nổi, mà phải nghiên cứu sâu đặc trưng khí hậu, điều cấm kỵ văn hóa tôn giáo và thói quen tín dụng tiêu dùng tại địa phương, thậm chí xây dựng trung tâm R&D và hậu mãi bản địa hóa để thực hiện bước nhảy vọt từ 'xuất khẩu sản phẩm' sang 'vươn ra toàn cầu cả thương hiệu và hệ sinh thái chuỗi cung ứng'.",
    "questionVi": "Theo bạn nam, 'bản địa hóa đa quốc gia thực sự (真正的跨国本土化)' đòi hỏi doanh nghiệp phải làm gì?",
    "options": [
      "Chỉ cần dùng phần mềm dịch tự động tên sản phẩm",
      "Giữ nguyên 100% thiết kế và quảng cáo y hệt trong nước",
      "Nghiên cứu sâu khí hậu, văn hóa tôn giáo, thói quen tiêu dùng địa phương và xây dựng trung tâm R&D, hậu mãi bản địa hóa",
      "Không cần cung cấp dịch vụ bảo hành ở nước ngoài"
    ],
    "correctAnswer": "Nghiên cứu sâu khí hậu, văn hóa tôn giáo, thói quen tiêu dùng địa phương và xây dựng trung tâm R&D, hậu mãi bản địa hóa",
    "explanationVi": "Bạn nam phân tích rõ: '深入研究当地的气候特征、宗教文化禁忌与消费信贷习惯，甚至在当地建立本地化的研发与售后中心...'."
  },
  {
    "id": "lt-hsk8-advanced-8",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Bàn về tranh chấp bản quyền đối với nội dung do AI tạo sinh (AIGC)",
    "audioZh": "男：现在的设计师只需输入几句提示词，生成式AI就能在几秒内画出一幅精美的商业海报。可一旦这幅画的风格酷似某位在世画家，版权归属和侵权责任该由谁来承担？\n女：这正是当前全球知识产权法学界争论的焦点。目前主流判例倾向于认为，纯粹由AI自动生成且缺乏人类独创性智力投入的内容不受著作权保护；同时，如果模型训练阶段未经授权抓取了受保护作品，开发商可能构成侵权。",
    "pinyin": "Nán: Xiànzài de shèjìshī zhǐ xū shūrù jǐ jù tíshìcí, shēngchéngshì AI jiù néng zài jǐ miǎo nèi huàchū yì fú jīngměi de shāngyè hǎibào. Kě yídàn zhè fú huà de fēnggé kùsì mǒu wèi zàishì huàjiā, bǎnquán guīshǔ hé qīnquán zérèn gāi yóu shuí lái chéngdān?\nNǚ: Zhè zhèng shì dāngqián quánqiú zhīshi chǎnquán fǎxuéjiè zhēnglùn de jiāodiǎn. Mùqián zhǔliú pànlì qīngxiàng yú rènwéi, chúncuì yóu AI zìdòng shēngchéng qiě quēfá rénlèi dúchuàngxìng zhìlì tóurù de nèiróng bú shòu zhùzuòquán bǎohù; tóngshí, rúguǒ móxíng xùnliàn jiēduàn wèijīng shòuquán zhuāqǔ le shòu bǎohù zuòpǐn, kāifāshāng kěnéng gòuchéng qīnquán.",
    "transcriptVi": "Nam: Các nhà thiết kế hiện nay chỉ cần nhập vài câu lệnh gợi ý (prompt) là AI tạo sinh có thể vẽ ra một tấm áp phích thương mại tinh xảo trong vài giây. Nhưng một khi phong cách bức tranh đó giống hệt một họa sĩ đang sống thì quyền tác giả và trách nhiệm xâm phạm bản quyền sẽ do ai gánh vác?\nNữ: Đây chính là tâm điểm tranh luận của giới luật học sở hữu trí tuệ toàn cầu hiện nay. Án lệ chủ류 hiện tại nghiêng về quan điểm nội dung hoàn toàn do AI tự động tạo ra mà thiếu sự đầu tư trí tuệ sáng tạo độc lập của con người sẽ không được bảo hộ quyền tác giả; đồng thời nếu giai đoạn huấn luyện mô hình thu thập trái phép các tác phẩm được bảo hộ thì nhà phát triển có thể cấu thành hành vi xâm phạm bản quyền.",
    "questionVi": "Theo các án lệ chủ lưu được bạn nữ nhắc tới, nội dung nào KHÔNG được bảo hộ quyền tác giả (著作权)?",
    "options": [
      "Tranh sơn dầu do họa sĩ vẽ tay trong 2 năm",
      "Tiểu thuyết do nhà văn tự sáng tác",
      "Bản nhạc do nhạc sĩ tự viết",
      "Nội dung thuần túy do AI tự động tạo ra mà thiếu sự đầu tư trí tuệ sáng tạo độc lập của con người"
    ],
    "correctAnswer": "Nội dung thuần túy do AI tự động tạo ra mà thiếu sự đầu tư trí tuệ sáng tạo độc lập của con người",
    "explanationVi": "Bạn nữ nêu rõ: '纯粹由 AI 自动生成且缺乏人类独创性智力投入的内容不受著作权保护'."
  },
  {
    "id": "lt-hsk8-advanced-9",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Cơ chế tái cơ cấu phá sản (破产重整) để cứu doanh nghiệp có giá trị",
    "audioZh": "女：那家拥有三十项核心专利的光伏企业因为短期债务违约被债权人申请破产了，如果直接清算拍卖设备，不仅专利技术被贱卖，上千名研发人员也会失业。\n男：对于这种技术底子好、只是流动性暂时枯竭的企业，法院通常会启动“破产重整”而非“破产清算”。通过引入战略投资人注入资金并开展债务重组，既能让企业涅槃重生，债权人的最终受偿率也比直接拍卖高得多。",
    "pinyin": "Nǚ: Nà jiā yōngyǒu sānshí xiàng héxīn zhuānlì de guāngfú qǐyè yīnwèi duǎnqī zhàiwù wéiyuē bèi zhàiquánrén shēnqǐng pòchǎn le, rúguǒ zhíjiē qīngsuàn pāimài shèbèi, bùjǐn zhuānlì jìshù bèi jiànmài, shàngqiān míng yánfā rényuán yě huì shīyè.\nNán: Duìyú zhè zhǒng jìshù dǐzi hǎo, zhǐshì liúdòngxìng zànshí kūjié de qǐyè, fǎyuàn tōngcháng huì qǐdòng “pòchǎn chóngzhěng” ér fēi “pòchǎn qīngsuàn”. Tōngguò yǐnrù zhànlüè tóuzīrén zhùrù zījīn bìng kāizhǎn zhàiwù chóngzǔ, jì néng ràng qǐyè nièpán chóngshēng, zhàiquánrén de zuìzhōng shòuchánglǜ yě bǐ zhíjiē pāimài gāo de duō.",
    "transcriptVi": "Nữ: Doanh nghiệp điện mặt trời sở hữu 30 bằng sáng chế cốt lõi đó vì vỡ nợ ngắn hạn nên bị chủ nợ nộp đơn xin phá sản rồi; nếu thanh lý đấu giá thiết bị trực tiếp thì không những công nghệ sáng chế bị bán rẻ mà hàng ngàn nhân sự R&D cũng sẽ thất nghiệp.\nNam: Đối với doanh nghiệp có nền tảng kỹ thuật tốt, chỉ tạm thời cạn kiệt thanh khoản như vậy, tòa án thường sẽ kích hoạt thủ tục 'tái cơ cấu phá sản' chứ không phải 'thanh lý phá sản'. Thông qua việc đưa nhà đầu tư chiến lược vào bơm vốn và tái cơ cấu nợ, vừa giúp doanh nghiệp hồi sinh, vừa giúp tỷ lệ thu hồi nợ cuối cùng của các chủ nợ cao hơn nhiều so với đấu giá trực tiếp.",
    "questionVi": "Sự khác biệt của 'tái cơ cấu phá sản (破产重整)' so với 'thanh lý phá sản (破产清算)' đối với doanh nghiệp có công nghệ tốt nhưng cạn thanh khoản là gì?",
    "options": [
      "Đưa nhà đầu tư chiến lược vào bơm vốn và tái cơ cấu nợ để doanh nghiệp hồi sinh, đồng thời giúp chủ nợ thu hồi được tỷ lệ nợ cao hơn",
      "Đập bỏ toàn bộ máy móc thiết bị của nhà máy",
      "Xóa bỏ toàn bộ bằng sáng chế của doanh nghiệp",
      "Không trả lại bất kỳ đồng nào cho các chủ nợ"
    ],
    "correctAnswer": "Đưa nhà đầu tư chiến lược vào bơm vốn và tái cơ cấu nợ để doanh nghiệp hồi sinh, đồng thời giúp chủ nợ thu hồi được tỷ lệ nợ cao hơn",
    "explanationVi": "Bạn nam giải thích: '通过引入战略投资人注入资金并开展债务重组，既能让企业涅槃重生，债权人的最终受偿率也比直接拍卖高得多'."
  },
  {
    "id": "lt-hsk8-advanced-10",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Ứng dụng công nghệ Blockchain trong truy xuất nguồn gốc nông sản xuyên biên giới",
    "audioZh": "在跨境生鲜与高端农产品贸易中，原产地造假与冷链断链一直是困扰进口商与消费者的顽疾。如今，借助区块链分布式账本不可篡改的特性，每一箱从越南出口的优质燕窝或榴莲在采摘打包时即被赋予唯一的数字身份码。从果园农残检测、出境海关检疫、冷链集装箱温湿度监控到终端超市上架，全流程数据实时上链存证。消费者只需用手机扫码，即可穿透式核验商品的前世今生，极大降低了跨国贸易的信任成本。",
    "pinyin": "Zài kuàjìng shēngxiān yǔ gāoduān nóngchǎnpǐn màoyì zhōng, yuánchǎndì zàojiǎ yǔ lěngliàn duànliàn yìzhí shì kùnrǎo jìnkǒushāng yǔ xiāofèizhě de wánjí. Rújīn, jièzhù qūkuàiliàn fēnbùshì zhàngběn bùkě cuàngǎi de tèxìng, měi yì xiāng cóng Yuènán chūkǒu de yōuzhì yànwō huò liúlián zài cǎizhāi dǎbāo shí jí bèi fùyǔ wéiyī de shùzì shēnfènmǎ. Cóng guǒyuán nóngcán jiǎncè, chūjìng hǎiguān jiǎnyì, lěngliàn jízhuāngxiāng wēn-shīdù jiānkòng dào zhōngduān chāoshì shàngjià, quán liúchéng shùjù shíshí shàngliàn cúnzhèng. Xiāofèizhě zhǐ xū yòng shǒujī sǎomǎ, jíkě chuāntòushì héyàn shāngpǐn de qiánshì-jīnshēng, jídà jiàngdī le kuàguó màoyì de xìnrèn chéngběn.",
    "transcriptVi": "Trong thương mại thực phẩm tươi sống và nông sản cao cấp xuyên biên giới, làm giả xuất xứ và đứt gãy chuỗi lạnh luôn là căn bệnh trầmkha gây đau đầu cho nhà nhập khẩu và người tiêu dùng. Ngày nay, nhờ đặc tính không thể sửa đổi của sổ cái phân tán blockchain, mỗi thùng tổ yến hay sầu riêng chất lượng cao xuất khẩu từ Việt Nam ngay khi thu hoạch đóng gói đã được gắn một mã định danh số duy nhất. Từ kiểm nghiệm dư lượng thuốc bảo vệ thực vật tại vườn, kiểm dịch hải quan xuất cảnh, giám sát nhiệt độ độ ẩm container lạnh cho đến khi lên kệ siêu thị đầu cuối, dữ liệu toàn quy trình đều được lưu trữ lên chuỗi theo thời gian thực. Người tiêu dùng chỉ cần quét mã bằng điện thoại là có thể kiểm chứng xuyên suốt toàn bộ hành trình sản phẩm, làm giảm đáng kể chi phí niềm tin trong thương mại xuyên quốc gia.",
    "questionVi": "Đặc tính kỹ thuật cốt lõi nào của Blockchain đã giúp giải quyết bài toán làm giả xuất xứ và đứt gãy chuỗi lạnh?",
    "options": [
      "Khả năng làm lạnh trái cây mà không cần điện",
      "Sổ cái phân tán không thể bị sửa đổi (不可篡改), lưu trữ dữ liệu toàn quy trình theo thời gian thực",
      "Tự động dịch ngôn ngữ trên bao bì",
      "Giúp tàu biển đi nhanh gấp 5 lần"
    ],
    "correctAnswer": "Sổ cái phân tán không thể bị sửa đổi (不可篡改), lưu trữ dữ liệu toàn quy trình theo thời gian thực",
    "explanationVi": "Trong bài nêu rõ: '借助区块链分布式账本不可篡改的特性...全流程数据实时上链存证'."
  },
  {
    "id": "lt-hsk8-advanced-11",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Thử thách của Khu thí điểm thương mại tự do và Danh mục hạn chế (负面清单)",
    "audioZh": "设立自由贸易试验区的核心使命，不在于给予企业多少短期税收优惠，而在于开展对接国际高标准经贸规则的制度型开放压力测试。其中，“外商投资负面清单”管理模式是关键抓手——凡是未列入负面清单的行业领域，外资企业均享有与本土企业完全平等的准入国民待遇。通过不断缩减负面清单的长度，并在跨境服务贸易、数据流动与知识产权保护领域先行先试，自贸区为全国深层次体制改革探索出可复制、可推广的制度经验。",
    "pinyin": "Shèlì zìyóu màoyì shìyànqū de héxīn shǐmìng, bú zàiyú jǐyǔ qǐyè duōshao duǎnqī shuìshōu yōuhuì, ér zàiyú kāizhǎn duìjiē guójì gāo biāozhǔn jīngmào guīzé de zhìdùxíng kāifàng yālì cèshì. Qízhōng, “wàishāng tóuzī fùmiàn qīngdān” guǎnlǐ móshì shì guānjiàn zhuāshǒu — fánshì wèi lièrù fùmiàn qīngdān de hángyè lǐngyù, wàizī qǐyè jūn xiǎngyǒu yǔ běntǔ qǐyè wánquán píngděng de zhǔnrù guómín dàiyù. Tōngguò búduàn suōjiǎn fùmiàn qīngdān de chángdù, bìng zài kuàjìng fúwù màoyì, shùjù liúdòng yǔ zhīshi chǎnquán bǎohù lǐngyù xiānxíng-xiānshì, zìmàoqū wèi quánguó shēncéngcì tǐzhì gǎigé tànsuǒ chū kě fùzhì, kě tuīguǎng de zhìdù jīngyàn.",
    "transcriptVi": "Sứ mệnh cốt lõi của việc thành lập Khu thí điểm thương mại tự do (FTZ) không nằm ở việc trao cho doanh nghiệp bao nhiêu ưu đãi thuế ngắn hạn, mà nằm ở việc triển khai thử nghiệm áp lực mở cửa mang tính thể chế kết nối với các quy tắc kinh tế thương mại tiêu chuẩn cao quốc tế. Trong đó, mô hình quản lý 'Danh mục hạn chế đầu tư nước ngoài (Negative List)' là đòn bẩy then chốt — phàm những ngành nghề lĩnh vực không nằm trong danh mục hạn chế thì doanh nghiệp có vốn đầu tư nước ngoài đều được hưởng đãi ngộ quốc gia về tiếp cận thị trường hoàn toàn bình đẳng với doanh nghiệp bản địa. Thông qua việc không ngừng rút ngắn độ dài danh mục hạn chế và thí điểm đi trước trong các lĩnh vực thương mại dịch vụ xuyên biên giới, dòng chảy dữ liệu và bảo hộ sở hữu trí tuệ, khu thương mại tự do đã tìm tòi ra những kinh nghiệm thể chế có thể nhân rộng cho cải cách thể chế tầng sâu trên toàn quốc.",
    "questionVi": "Theo mô hình quản lý 'Danh mục hạn chế (负面清单)', những ngành nghề KHÔNG nằm trong danh mục này sẽ được áp dụng quy tắc gì đối với doanh nghiệp FDI?",
    "options": [
      "Doanh nghiệp nước ngoài bị cấm đầu tư hoàn toàn",
      "Doanh nghiệp nước ngoài phải nộp thuế cao gấp 3 lần",
      "Doanh nghiệp nước ngoài được hưởng đãi ngộ quốc gia, tiếp cận thị trường hoàn toàn bình đẳng như doanh nghiệp bản địa",
      "Phải xin giấy phép đặc biệt mất 5 năm"
    ],
    "correctAnswer": "Doanh nghiệp nước ngoài được hưởng đãi ngộ quốc gia, tiếp cận thị trường hoàn toàn bình đẳng như doanh nghiệp bản địa",
    "explanationVi": "Trong bài giải thích rõ: '凡是未列入负面清单的行业领域，外资企业均享有与本土企业完全平等的准入国民待遇'."
  },
  {
    "id": "lt-hsk8-advanced-12",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Khung điều tiết vĩ mô hai trụ cột: Chính sách tiền tệ và Chính sách thận trọng vĩ mô",
    "audioZh": "2008年全球金融危机深刻表明，即便中央银行通过传统货币政策维持了物价总水平的稳定，金融体系内部仍可能因过度杠杆化与顺周期行为而积聚起巨大的系统性风险。为此，现代中央银行普遍构建了“货币政策加宏观审慎政策”双支柱调控框架：货币政策主要针对整体经济周期调节利率与流动性，以稳定通胀与就业；而宏观审慎政策则聚焦于跨市场风险传染与逆周期资本缓冲，从而为金融体系装上防范系统性崩溃的安全阀。",
    "pinyin": "Èrlínglíngbā nián quánqiú jīnróng wēijī shēnkè biǎomíng, jíbiàn zhōngyāng yínháng tōngguò chuántǒng huòbì zhèngcè wéichí le wùjià zǒng shuǐpíng de wěndìng, jīnróng tǐxì nèibù réng kěnéng yīn guòdù gànggǎnhuà yǔ shùnzhōuqī xíngwéi ér jījù qǐ jùdà de xìtǒngxìng fēngxiǎn. Wèicǐ, xiàndài zhōngyāng yínháng pǔbiàn gòujiàn le “huòbì zhèngcè jiā hóngguān shěnshèn zhèngcè” shuāngzhīzhù tiáokòng kuàngjià: huòbì zhèngcè zhǔyào zhēnduì zhěngtǐ jīngjì zhōuqī tiáojié lìlǜ yǔ liúdòngxìng, yǐ wěndìng tōngzhàng yǔ jiùyè; ér hóngguān shěnshèn zhèngcè zé jùjiāo yú kuà shìchǎng fēngxiǎn chuánrǎn yǔ nìzhōuqī zīběn huǎnchōng, cóng'ér wèi jīnróng tǐxì zhuāngshàng fángfàn xìtǒngxìng bēngkuì de ānquánfá.",
    "transcriptVi": "Cuộc khủng hoảng tài chính toàn cầu năm 2008 đã chỉ ra sâu sắc rằng, ngay cả khi ngân hàng trung ương duy trì được sự ổn định của mặt bằng giá cả thông qua chính sách tiền tệ truyền thống, nội bộ hệ thống tài chính vẫn có thể tích tụ rủi ro hệ thống khổng lồ do đòn bẩy quá mức và hành vi thuận chu kỳ. Vì lý do đó, các ngân hàng trung ương hiện đại phổ biến xây dựng khung điều tiết hai trụ cột 'Chính sách tiền tệ cộng Chính sách thận trọng vĩ mô': chính sách tiền tệ chủ yếu điều tiết lãi suất và thanh khoản theo chu kỳ kinh tế tổng thể nhằm ổn định lạm phát và việc làm; còn chính sách thận trọng vĩ mô tập trung vào sự lây lan rủi ro liên thị trường và bộ đệm vốn ngược chu kỳ, từ đó lắp đặt van an toàn phòng ngừa sụp đổ hệ thống cho nền tài chính.",
    "questionVi": "Trong khung điều tiết hai trụ cột của ngân hàng trung ương hiện đại, 'Chính sách thận trọng vĩ mô (宏观审慎政策)' tập trung vào nhiệm vụ gì?",
    "options": [
      "In tiền mặt để phát trực tiếp cho các siêu thị",
      "Quy định giá bán lẻ của từng loại rau củ",
      "Quản lý lịch bay của các hãng hàng không",
      "Ngăn chặn sự lây lan rủi ro liên thị trường và thiết lập bộ đệm vốn ngược chu kỳ để phòng ngừa rủi ro tài chính hệ thống"
    ],
    "correctAnswer": "Ngăn chặn sự lây lan rủi ro liên thị trường và thiết lập bộ đệm vốn ngược chu kỳ để phòng ngừa rủi ro tài chính hệ thống",
    "explanationVi": "Câu cuối nêu rõ: '宏观审慎政策则聚焦于跨市场风险传染与逆周期资本缓冲，从而为金融体系装上防范系统性崩溃的安全阀'."
  },
  {
    "id": "lt-hsk9-basic-1",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Triết lý Trị quốc lấy dân làm gốc trong Cổ văn",
    "audioZh": "《淮南子》有云：“治国有常，而利民为本；政教有经，而令行为上。”此言深刻揭示了制度变革的终极尺度在于是否增进黎民百姓的福祉。",
    "pinyin": "Huáinánzǐ yǒu yún: “Zhìguó yǒu cháng, ér lìmín wéi běn; zhèngjiào yǒu jīng, ér lìngxíng wéi shàng.” Cǐ yán shēnkè jiēshì le zhìdù biàngé de zhōngjí chǐdù zàiyú shìfǒu zēngjìn límín bǎixìng de fúzhǐ.",
    "transcriptVi": "Sách Hoài Nam Tử có câu: 'Trị nước có phép thường nhưng làm lợi cho dân là gốc; chính giáo có khuôn phép nhưng mệnh lệnh được thực thi là trên hết.' Lời này đã làm sáng tỏ sâu sắc rằng thước đo tối hậu của cải cách thể chế nằm ở việc có làm tăng thêm phúc lợi cho trăm họ hay không.",
    "questionVi": "Câu cổ văn 'Trị quốc hữu thường, nhi lợi dân vi bản (治国有常，而利民为本)' nhấn mạnh điều gì?",
    "options": [
      "Pháp luật không bao giờ được phép thay đổi",
      "Thước đo căn bản và tối hậu của việc trị nước và cải cách thể chế là mang lại lợi ích, phúc lợi cho nhân dân",
      "Trị nước chỉ cần dựa vào quân đội",
      "Người dân không cần tuân theo mệnh lệnh"
    ],
    "correctAnswer": "Thước đo căn bản và tối hậu của việc trị nước và cải cách thể chế là mang lại lợi ích, phúc lợi cho nhân dân",
    "explanationVi": "'揭示了制度变革的终极尺度在于是否增进黎民百姓的福祉'."
  },
  {
    "id": "lt-hsk9-basic-2",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Tầm nhìn chiến lược Bất mưu vạn thế giả (不谋万世者，不足谋一时)",
    "audioZh": "古人云：“不谋万世者，不足谋一时；不谋全局者，不足谋一域。”在制定产业升级战略时，若缺乏长远的历史纵深感与系统思维，便极易陷入头痛医头、脚痛医脚的短视困局。",
    "pinyin": "Gǔrén yún: “Bù móu wànshì zhě, bùzú móu yìshí; bù móu quánjú zhě, bùzú móu yíyù.” Zài zhìdìng chǎnyè shēngjí zhànlüè shí, ruò quēfá chángyuǎn de lìshǐ zòngshēngǎn yǔ xìtǒng sīwéi, biàn jíyì xiànrù tóutòngyītóu, jiǎotòngyījiǎo de duǎnshì kùnjú.",
    "transcriptVi": "Người xưa có câu: 'Người không mưu tính cho muôn đời thì không đủ để mưu tính một thời; người không mưu tính toàn cục thì không đủ để mưu tính một vùng.' Khi hoạch định chiến lược nâng cấp ngành nghề, nếu thiếu chiều sâu tầm nhìn dài hạn và tư duy hệ thống thì rất dễ rơi vào thế bí thiển cận đau đầu chữa đầu, đau chân chữa chân.",
    "questionVi": "Câu nói của người xưa được trích dẫn nhằm phê phán lối tư duy nào khi hoạch định chiến lược?",
    "options": [
      "Lối tư duy chuẩn bị kế hoạch quá kỹ lưỡng",
      "Việc tham khảo ý kiến của các chuyên gia",
      "Lối tư duy thiển cận, thiếu tầm nhìn dài hạn và thiếu cái nhìn tổng thể hệ thống ('đau đầu chữa đầu, đau chân chữa chân')",
      "Việc đầu tư cho giáo dục dài hạn"
    ],
    "correctAnswer": "Lối tư duy thiển cận, thiếu tầm nhìn dài hạn và thiếu cái nhìn tổng thể hệ thống ('đau đầu chữa đầu, đau chân chữa chân')",
    "explanationVi": "'若缺乏长远的历史纵深感与系统思维，便极易陷入头痛医头、脚痛医脚的短视困局'."
  },
  {
    "id": "lt-hsk9-basic-3",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task1-single",
    "title": "Bản lĩnh học thuật trong phê bình",
    "audioZh": "健全的学术生态离不开切磋琢磨的批评精神：既当力戒阿谀奉承之风，亦须摒弃攻其一点、不及其余的偏狭门户之见。",
    "pinyin": "Jiànquán de xuéshù shēngtài líbùkāi qiēcuō-zhuómó de pīpíng jīngshén: jì dāng lìjiè ēyúfèngchéng zhī fēng, yì xū bìngqì gōngqíyìdiǎn, bùjíqíyú de piānxiá ménhùzhījiàn.",
    "transcriptVi": "Một hệ sinh thái học thuật lành mạnh không thể tách rời tinh thần phê bình cùng nhau mài giũa học hỏi: vừa phải tuyệt đối tránh thói xu nịnh tâng bốc, vừa phải loại bỏ định kiến phe phái hẹp hòi chỉ công kích một điểm mà phủ nhận toàn bộ phần còn lại.",
    "questionVi": "Theo câu nghe, tinh thần phê bình học thuật lành mạnh đòi hỏi học giả phải tránh hai thái cực nào?",
    "options": [
      "Tránh đọc sách của người khác và tránh viết bài báo khoa học",
      "Tránh tham gia hội thảo và tránh dạy học",
      "Tránh sử dụng dữ liệu thống kê",
      "Tránh thói xu nịnh tâng bốc (阿谀奉承) và tránh định kiến phe phái hẹp hòi bới móc một điểm phủ nhận tất cả"
    ],
    "correctAnswer": "Tránh thói xu nịnh tâng bốc (阿谀奉承) và tránh định kiến phe phái hẹp hòi bới móc một điểm phủ nhận tất cả",
    "explanationVi": "'既当力戒阿谀奉承之风，亦须摒弃攻其一点、不及其余的偏狭门户之见'."
  },
  {
    "id": "lt-hsk9-basic-4",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về tư tưởng Hoành Cừ Tứ Cú (横渠四句) của Trương Tải",
    "audioZh": "北宋大儒张载提出的“为天地立心，为生民立命，为往圣继绝学，为万世开太平”，为何被后世尊为中华知识分子的精神丰碑？",
    "pinyin": "Běisòng dàrú Zhāng Zǎi tíchū de “wèi tiāndì lìxīn, wèi shēngmín lìmìng, wèi wǎngshèng jì juéxué, wèi wànshì kāi tàipíng”, wèihé bèi hòushì zūnwéi Zhōnghuá zhīshifènzǐ de jīngshén fēngbēi?",
    "transcriptVi": "Tại sao bốn câu của bậc đại nho thời Bắc Tống Trương Tải 'Vì trời đất lập tâm, vì dân sinh lập mệnh, vì bậc thánh hiền xưa nối tiếp tuyệt học, vì muôn đời mở ra thái bình' lại được hậu thế tôn vinh là tượng đài tinh thần của người trí thức Trung Hoa?",
    "questionVi": "Đáp án nào阐释 (giải thích) đúng tầm vóc triết học của câu nói?",
    "options": [
      "因为它将学者个体的学术追求与宇宙关怀、民生福祉、文化传承及人类永久和平融为一体，展现了恢弘的淑世担当。 (Vì bốn câu đó đã dung hợp sự theo đuổi học thuật của cá nhân người học giả với nỗi trăn trở về vũ trụ, phúc lợi dân sinh, kế thừa văn hóa và hòa bình vĩnh cửu của nhân loại, thể hiện bản lĩnh gánh vác giúp đời hùng vĩ.)",
      "因为这四句话是用来教儿童认识数字的。 (Vì bốn câu này dùng để dạy trẻ em nhận biết chữ số.)",
      "因为它规定了古代官员的俸禄标准。 (Vì nó quy định tiêu chuẩn bổng lộc của quan lại cổ đại.)",
      "因为它是一首描写江南春天的山水诗。 (Vì đó là một bài thơ sơn thủy miêu tả mùa xuân Giang Nam.)"
    ],
    "correctAnswer": "因为它将学者个体的学术追求与宇宙关怀、民生福祉、文化传承及人类永久和平融为一体，展现了恢弘的淑世担当。 (Vì bốn câu đó đã dung hợp sự theo đuổi học thuật của cá nhân người học giả với nỗi trăn trở về vũ trụ, phúc lợi dân sinh, kế thừa văn hóa và hòa bình vĩnh cửu của nhân loại, thể hiện bản lĩnh gánh vác giúp đời hùng vĩ.)",
    "explanationVi": "Bốn câu của Trương Tải ('Hoành Cừ tứ cú') kết tinh sứ mệnh tối cao của kẻ sĩ đối với vũ trụ, dân sinh, học thuật và thái bình muôn đời."
  },
  {
    "id": "lt-hsk9-basic-5",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về thông diễn học liên văn hóa (Cross-cultural Hermeneutics)",
    "audioZh": "在跨文化诠释学视野下，为什么说经典文本的每一次跨语种重译，绝非简单的语言符号转换，而是一场深刻的思想对话？",
    "pinyin": "Zài kuàwénhuà quánshìxué shìyě xià, wèishénme shuō jīngdiǎn wénběn de měi yí cì kuà yǔzhǒng chóngyì, juéfēi jiǎndān de yǔyán fúhào zhuǎnhuàn, ér shì yì chǎng shēnkè de sīxiǎng duìhuà?",
    "transcriptVi": "Dưới góc nhìn thông diễn học liên văn hóa, tại sao nói mỗi lần dịch lại một văn bản kinh điển sang ngôn ngữ khác tuyệt không phải là sự chuyển đổi ký hiệu ngôn ngữ đơn thuần, mà là một cuộc đối thoại tư tưởng sâu sắc?",
    "questionVi": "Đáp án nào đạt chuẩn lý luận học thuật HSK 9?",
    "options": [
      "因为翻译软件每次生成的句子都不一样。 (Vì phần mềm dịch thuật mỗi lần tạo ra câu khác nhau.)",
      "因为译者总是带着特定时代的文化视域与原作者进行“视域融合”，重译过程不仅激活了经典的潜在意蕴，也丰富了目标语的思想图谱。 (Vì dịch giả luôn mang theo tầm nhìn văn hóa của một thời đại nhất định để thực hiện 'sự dung hợp tầm nhìn' với tác giả nguyên tác; quá trình dịch lại không chỉ kích hoạt tầng ý nghĩa tiềm ẩn của tác phẩm kinh điển mà còn làm phong phú bản đồ tư tưởng của ngôn ngữ đích.)",
      "因为译者喜欢把作者的名字改成自己的。 (Vì dịch giả thích đổi tên tác giả thành tên mình.)",
      "因为古人写书从来不用标点符号。 (Vì người xưa viết sách không bao giờ dùng dấu câu.)"
    ],
    "correctAnswer": "因为译者总是带着特定时代的文化视域与原作者进行“视域融合”，重译过程不仅激活了经典的潜在意蕴，也丰富了目标语的思想图谱。 (Vì dịch giả luôn mang theo tầm nhìn văn hóa của một thời đại nhất định để thực hiện 'sự dung hợp tầm nhìn' với tác giả nguyên tác; quá trình dịch lại không chỉ kích hoạt tầng ý nghĩa tiềm ẩn của tác phẩm kinh điển mà còn làm phong phú bản đồ tư tưởng của ngôn ngữ đích.)",
    "explanationVi": "Khái niệm '视域融合' (Fusion of Horizons - dung hợp tầm nhìn của Gadamer trong thông diễn học) giải thích chính xác bản chất đối thoại tư tưởng của việc dịch lại kinh điển."
  },
  {
    "id": "lt-hsk9-basic-6",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task2-qa",
    "title": "Hỏi về mối quan hệ giữa Văn nghệ và Thời đại",
    "audioZh": "白居易倡言“文章合为时而著，歌诗合为事而作”，这一文学主张对当代数字时代的文艺创作有何启迪？",
    "pinyin": "Bái Jūyì chàngyán “wénzhāng hé wèi shí ér zhù, gēshī hé wèi shì ér zuò”, zhè yī wénxué zhǔzhāng duì dāngdài shùzì shídài de wényì chuàngzuò yǒu hé qǐdí?",
    "transcriptVi": "Bạch Cư Dị đề xướng 'Văn chương nên vì thời cuộc mà viết, thơ ca nên vì sự việc mà làm', chủ trương văn học này có ý nghĩa khai sáng gì đối với sáng tác văn nghệ trong kỷ nguyên số đương đại?",
    "questionVi": "Đáp án nào sâu sắc nhất?",
    "options": [
      "要求所有作家只能写唐朝的律诗。 (Yêu cầu tất cả nhà văn chỉ được viết thơ luật thời Đường.)",
      "认为现代小说不需要任何故事情节。 (Cho rằng tiểu thuyết hiện đại không cần bất kỳ cốt truyện nào.)",
      "它提醒创作者切勿沉溺于空洞的辞藻堆砌或流量迎合，而应扎根现实土壤，敏锐捕捉时代脉搏与苍生悲欢，方能写出传世之作。 (Nó nhắc nhở người sáng tác chớ đắm chìm vào việc chất đống từ ngữ sáo rỗng hay chiều theo lưu lượng ảo, mà phải cắm rễ vào mảnh đất hiện thực, nhạy bén nắm bắt mạch đập thời đại và nỗi buồn vui của chúng sinh thì mới viết nên tác phẩm để đời.)",
      "主张用计算机自动生成所有的诗歌。 (Chủ trương dùng máy tính tự động tạo ra mọi bài thơ.)"
    ],
    "correctAnswer": "它提醒创作者切勿沉溺于空洞的辞藻堆砌或流量迎合，而应扎根现实土壤，敏锐捕捉时代脉搏与苍生悲欢，方能写出传世之作。 (Nó nhắc nhở người sáng tác chớ đắm chìm vào việc chất đống từ ngữ sáo rỗng hay chiều theo lưu lượng ảo, mà phải cắm rễ vào mảnh đất hiện thực, nhạy bén nắm bắt mạch đập thời đại và nỗi buồn vui của chúng sinh thì mới viết nên tác phẩm để đời.)",
    "explanationVi": "Chủ trương của Bạch Cư Dị đề cao tinh thần hiện thực, gắn bó với thời cuộc và đời sống nhân dân ('扎根现实土壤，敏锐捕捉时代脉搏与苍生悲欢')."
  },
  {
    "id": "lt-hsk9-basic-7",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Đối thoại học thuật: Sự chuyển đổi mô thức (Paradigm Shift) trong lịch sử khoa học",
    "audioZh": "女：库恩在《科学革命的结构》中提出，科学的进步并非知识的线性累积，而是旧范式在反常现象冲击下崩溃、新范式取而代之的革命过程。\n男：诚然如此。正如爱因斯坦相对论对牛顿经典力学的超越，每一次范式转换不仅重塑了科学共同体的研究方法与公理体系，甚至彻底改变了人类审视时空与宇宙的哲学世界观。",
    "pinyin": "Nǚ: Kù'ēn zài Kēxué Gémìng de Jiégòu zhōng tíchū, kēxué de jìnbù bìngfēi zhīshi de xiànxìng lěijī, ér shì jiù fànshì zài fǎncháng xiànxiàng chōngjī xià bēngkuì, xīn fànshì qǔ'érdàizhī de gémìng guòchéng.\nNán: Chéngrán rúcǐ. Zhèngrú Àiyīnsītǎn xiāngduìlùn duì Niúdùn jīngdiǎn lìxué de chāoyuè, měi yí cì fànshì zhuǎnhuàn bùjǐn chóngsù le kēxué gòngtóngtǐ de yánjiū fāngfǎ yǔ gōnglǐ tǐxì, shènzhì chèdǐ gǎibiàn le rénlèi shěnshì shíkōng yǔ yǔzhòu de zhéxué shìjièguān.",
    "transcriptVi": "Nữ: Thomas Kuhn trong cuốn 'Cấu trúc các cuộc cách mạng khoa học' đã đề xuất rằng sự tiến bộ của khoa học không phải là sự tích lũy tuyến tính của tri thức, mà là quá trình cách mạng khi mô thức cũ sụp đổ trước cú sốc của các hiện tượng dị thường và mô thức mới thay thế nó.\nNam: Quả đúng như vậy. Giống như thuyết tương đối của Einstein vượt qua cơ học cổ điển của Newton, mỗi lần chuyển đổi mô thức không chỉ tái định hình phương pháp nghiên cứu và hệ thống tiên đề của cộng đồng khoa học, mà thậm chí còn thay đổi triệt để thế giới quan triết học của nhân loại khi nhìn nhận không gian, thời gian và vũ trụ.",
    "questionVi": "Theo cuộc đối thoại, 'chuyển đổi mô thức (范式转换 - Paradigm Shift)' trong khoa học mang lại tác động gì?",
    "options": [
      "Chỉ bổ sung thêm một vài con số lẻ vào sách giáo khoa cũ",
      "Chứng minh mọi nghiên cứu khoa học đều là vô ích",
      "Khiến các nhà khoa học ngừng làm thí nghiệm",
      "Tái định hình phương pháp nghiên cứu, hệ thống tiên đề của cộng đồng khoa học và thay đổi cả thế giới quan triết học về vũ trụ"
    ],
    "correctAnswer": "Tái định hình phương pháp nghiên cứu, hệ thống tiên đề của cộng đồng khoa học và thay đổi cả thế giới quan triết học về vũ trụ",
    "explanationVi": "Bạn nam khẳng định: '每一次范式转换不仅重塑了科学共同体的研究方法与公理体系，甚至彻底改变了人类审视时空与宇宙的哲学世界观'."
  },
  {
    "id": "lt-hsk9-basic-8",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Bàn về cải cách chế độ thuế khóa trong lịch sử Trung Quốc (Hoàng Tông Hy định luật)",
    "audioZh": "男：明末清初思想家黄宗羲曾敏锐地指出，历代封建王朝合并赋税役法的改革，往往在初期减轻了百姓负担，但数十年后杂派复生，反而造成“积累莫返之害”。\n女：这就是著名的“黄宗羲定律”。无论是唐代的两税法、明代的一条鞭法还是清代的摊丁入亩，若缺乏对皇权财政汲取边界的制度性约束，单纯简化税目终究难以跳出赋税反弹的历史周期率。",
    "pinyin": "Nán: Míngmò Qīngchū sīxiǎngjiā Huáng Zōngxī céng mǐnruì de zhǐchū, lìdài fēngjiàn wángcháo hébìng fùshuì yìfǎ de gǎigé, wǎngwǎng zài chūqī jiǎnqīng le bǎixìng fùdān, dàn shùshí nián hòu zápài fùshēng, fǎn'ér zàochéng “jīlěi mò fǎn zhī hài”.\nNǚ: Zhè jiù shì zhùmíng de “Huáng Zōngxī dìnglǜ”. Wúlùn shì Tángdài de Liǎngshuìfǎ, Míngdài de Yìtiáobiānfǎ háishi Qīngdài de Tāndīngrùmǔ, ruò quēfá duì huángquán cáizhèng jíqǔ biānjiè de zhìdùxìng yuēshù, dānchún jiǎnhuà shuìmù zhōngjiū nányǐ tiàochū fùshuì fǎntán de lìshǐ zhōuqīlǜ.",
    "transcriptVi": "Nam: Nhà tư tưởng cuối Minh đầu Thanh Hoàng Tông Hy từng nhạy bén chỉ ra rằng, các cuộc cải cách gộp thuế và phu dịch của các triều đại phong kiến thường làm nhẹ gánh nặng cho dân trong giai đoạn đầu, nhưng vài chục năm sau các khoản thu phụ lại phát sinh, ngược lại gây ra 'mối họa tích tụ không thể quay đầu'.\nNữ: Đó chính là 'Định luật Hoàng Tông Hy' nổi tiếng. Bất kể là phép Lưỡng thuế thời Đường, Nhất điều biên thời Minh hay Than đinh nhập mẫu thời清 (Thanh), nếu thiếu sự ràng buộc mang tính thể chế đối với ranh giới thu thuế của hoàng quyền thì việc chỉ đơn thuần gộp các sắc thuế rốt cuộc khó thoát khỏi quy luật chu kỳ lịch sử thuế khóa tăng trở lại.",
    "questionVi": "Theo bạn nữ, tại sao các cuộc cải cách gộp thuế thời phong kiến (như Lưỡng thuế pháp, Nhất điều biên pháp) cuối cùng vẫn không thoát khỏi 'Định luật Hoàng Tông Hy'?",
    "options": [
      "Vì thiếu sự ràng buộc mang tính thể chế đối với ranh giới thu vét tài chính của hoàng quyền, nên sau một thời gian các khoản thu phụ lại tái sinh",
      "Vì người dân thời cổ đại không biết làm toán",
      "Vì các triều đại đó hoàn toàn không thu thuế của bất kỳ ai",
      "Vì không có quan lại phụ trách sổ sách"
    ],
    "correctAnswer": "Vì thiếu sự ràng buộc mang tính thể chế đối với ranh giới thu vét tài chính của hoàng quyền, nên sau một thời gian các khoản thu phụ lại tái sinh",
    "explanationVi": "Bạn nữ chỉ rõ nguyên nhân: '若缺乏对皇权财政汲取边界的制度性约束，单纯简化税目终究难以跳出赋税反弹的历史周期率'."
  },
  {
    "id": "lt-hsk9-basic-9",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task3-dialogue",
    "title": "Phẩm cách độc lập của tinh thần nhân văn trong kỷ nguyên số hóa",
    "audioZh": "女：当算法能精准预测消费者的每一次点击、生成式模型能模仿大师文风撰写论文时，不少人悲观地认为人文学科正在丧失其存在的根基。\n男：我倒不这么看。技术越是无孔不入，人类对于“意义”、“价值”与“伦理边界”的追问就越发紧迫。算法可以计算概率与效率，却无法体会悲悯、良知与审美超越。守护人之为人的主体性与批判精神，正是人文学科在数字时代不可替代的使命。",
    "pinyin": "Nǚ: Dāng suànfǎ néng jīngzhǔn yùcè xiāofèizhě de měi yí cì diǎnjī, shēngchéngshì móxíng néng mófǎng dàshī wénfēng zhuànxiě lùnwén shí, bùshǎo rén bēiguān de rènwéi rénwén xuékē zhèngzài sàngshī qí cúnzài de gēnjī.\nNán: Wǒ dào bú zhème kàn. Jìshù yuè shì wúkǒngbúrù, rénlèi duìyú “yìyì”, “jiàzhí” yǔ “lúnlǐ biānjiè” de zhuīwèn jiù yuèfā jǐnpò. Suànfǎ kěyǐ jìsuàn gàilǜ yǔ xiàolǜ, què wúfǎ tǐhuì bēimǐn, liángzhī yǔ shěnměi chāoyuè. Shǒuhù rén zhī wéi rén de zhǔtǐxìng yǔ pīpàn jīngshén, zhèng shì rénwén xuékē zài shùzì shídài bùkě tìdài de shǐmìng.",
    "transcriptVi": "Nữ: Khi thuật toán có thể dự đoán chính xác từng cú nhấp chuột của người tiêu dùng và mô hình tạo sinh có thể bắt chước văn phong bậc thầy để viết luận văn, không ít người bi quan cho rằng các ngành khoa học nhân văn đang đánh mất nền tảng tồn tại.\nNam: Tôi lại không nhìn nhận như vậy. Công nghệ càng len lỏi vào mọi ngóc ngách thì sự truy vấn của nhân loại về 'ý nghĩa', 'giá trị' và 'ranh giới đạo đức' lại càng cấp thiết. Thuật toán có thể tính toán xác suất và hiệu suất, nhưng không thể thấu cảm lòng trắc ẩn, lương tri và sự thăng hoa thẩm mỹ. Bảo vệ tính chủ thể làm nên con người và tinh thần phê phán chính là sứ mệnh không thể thay thế của khoa học nhân văn trong kỷ nguyên số.",
    "questionVi": "Theo bạn nam, tại sao khoa học nhân văn vẫn giữ sứ mệnh không thể thay thế trong kỷ nguyên AI và thuật toán?",
    "options": [
      "Vì các học giả nhân văn giỏi lập trình hơn kỹ sư máy tính",
      "Vì thuật toán chỉ tính được xác suất và hiệu suất, còn nhân văn học truy vấn về ý nghĩa, ranh giới đạo đức, lòng trắc ẩn, lương tri và bảo vệ tính chủ thể của con người",
      "Vì máy tính sẽ sớm bị cấm sử dụng trên toàn cầu",
      "Vì khoa học nhân văn giúp tăng tốc độ chip bán dẫn"
    ],
    "correctAnswer": "Vì thuật toán chỉ tính được xác suất và hiệu suất, còn nhân văn học truy vấn về ý nghĩa, ranh giới đạo đức, lòng trắc ẩn, lương tri và bảo vệ tính chủ thể của con người",
    "explanationVi": "Bạn nam phân tích sâu sắc: '算法可以计算概率与效率，却无法体会悲悯、良知与审美超越。守护人之为人的主体性与批判精神，正是人文学科在数字时代不可替代的使命'."
  },
  {
    "id": "lt-hsk9-basic-10",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Diễn ngôn Văn ngôn - Bạch thoại: Sự dung nạp và Tự đổi mới của Văn minh",
    "audioZh": "《战国策》有言：“泰山不让土壤，故能成其大；河海不择细流，故能就其深。”回望数千年人类文明史，凡能绵延不绝、历久弥新的伟大文明，无不具备海纳百川的开放胸襟与自我革新的内生动力。从汉唐时期丝绸之路上的文明互鉴，到近代以来中西学术思想的碰撞交融，历史反复昭示：固步自封、唯我独尊只会招致思想的僵化与国力的衰微；唯有在坚守文化主体性的同时，以谦逊包容之姿汲取全人类的优秀智慧成果，方能在时代大潮中激荡出新的生机。",
    "pinyin": "Zhànguócè yǒu yún: “Tàishān bú ràng tǔrǎng, gù néng chéng qí dà; héhǎi bù zé xìliú, gù néng jiù qí shēn.” Huíwàng shùqiān nián rénlèi wénmíngshǐ, fán néng miányán bùjué, lìjiǔmíxīn de wěidà wénmíng, wúbù jùbèi hǎinàbǎichuān de kāifàng xiōngjīn yǔ zìwǒ géxīn de nèishēng dònglì. Cóng Hàn-Táng shíqī Sīchóuzhīlù shàng de wénmíng hùjiàn, dào jìndài yǐlái Zhōng-Xī xuéshù sīxiǎng de pèngzhuàng jiāoróng, lìshǐ fǎnfù zhāoshì: gùbùzìfēng, wéiwǒdúzūn zhǐ huì zhāozhì sīxiǎng de jiānghuà yǔ guólì de shuāiwēi; wéiyǒu zài jiānshǒu wénhuà zhǔtǐxìng de tóngshí, yǐ qiānxùn bāoróng zhī zī jíqǔ quán rénlèi de yōuxiù zhìhuì chéngguǒ, fāng néng zài shídài dàcháo zhōng jīdàng chū xīn de shēngjī.",
    "transcriptVi": "Sách Chiến Quốc Sách có câu: 'Núi Thái Sơn không từ chối đất bụi nên mới tạo nên sự vĩ đại; sông biển không kén dòng chảy nhỏ nên mới đạt được độ sâu.' Nhìn lại lịch sử văn minh nhân loại hàng ngàn năm, phàm những nền văn minh vĩ đại có thể kéo dài không dứt, càng lâu càng mới đều mang trong mình tấm lòng cởi mở biển lớn dung nạp trăm sông và động lực nội sinh tự đổi mới. Từ sự giao lưu học hỏi văn minh trên Con đường Tơ lụa thời Hán Đường cho đến sự va chạm dung hợp tư tưởng học thuật Đông - Tây thời cận đại, lịch sử nhiều lần chỉ rõ: khép kín tự mãn, độc tôn duy ngã chỉ dẫn đến sự cứng nhắc tư tưởng và suy vi quốc lực; chỉ có vừa kiên trì giữ vững tính chủ thể văn hóa, vừa dùng tư thái khiêm nhường bao dung hấp thu thành quả trí tuệ xuất sắc của toàn nhân loại mới có thể khơi dậy sức sống mới trong làn sóng lớn của thời đại.",
    "questionVi": "Câu trích dẫn từ Chiến Quốc Sách về núi Thái Sơn và sông biển được tác giả dùng để làm luận cứ cho quan điểm nào?",
    "options": [
      "Kêu gọi bảo vệ đất đai trên núi Thái Sơn và nguồn nước biển",
      "Chứng minh địa lý quyết định hoàn toàn lịch sử",
      "Một nền văn minh muốn trường tồn và phát triển phải có tấm lòng cởi mở bao dung, học hỏi tinh hoa nhân loại thay vì khép kín tự mãn",
      "Khuyên con người nên chuyển lên núi cao sinh sống"
    ],
    "correctAnswer": "Một nền văn minh muốn trường tồn và phát triển phải có tấm lòng cởi mở bao dung, học hỏi tinh hoa nhân loại thay vì khép kín tự mãn",
    "explanationVi": "Câu trích dẫn làm luận cứ cho: '凡能绵延不绝、历久弥新的伟大文明，无不具备海纳百川的开放胸襟与自我革新的内生动力'."
  },
  {
    "id": "lt-hsk9-basic-11",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Bình luận Pháp학: Lương pháp thiện trị (良法善治)",
    "audioZh": "先秦法家经典《管子》曾言：“法者，天下之程式也，万事之仪表也。”然而，法律条文的完备只是实现社会长治久安的必要条件而非充分条件。古往今来的治理实践表明，“徒善不足以为政，徒法不能以自行”。若仅有严密繁复的律令条文，而在执行层面缺乏程序正义、权力制衡与对弱势群体的司法温情，法律便可能异化为冰冷僵硬的教条。唯有将科学完备的“良法”与公正透明、刚柔并济的“善治”有机结合，方能使法治精神真正内化为全社会的共同信仰。",
    "pinyin": "Xiānqín Fǎjiā jīngdiǎn Guǎnzǐ céng yán: “Fǎ zhě, tiānxià zhī chéngshì yě, wànshì zhī yíbiǎo yě.” Rán'ér, fǎlǜ tiáowén de wánbèi zhǐshì shíxiàn shèhuì chángzhìjiǔ'ān de bìyào tiáojiàn ér fēi chōngfèn tiáojiàn. Gǔwǎngjīnlái de zhìlǐ shíjiàn biǎomíng, “tú shàn bùzú yǐ wéi zhèng, tú fǎ bùnéng yǐ zìxíng”. Ruò jǐn yǒu yánmì fánfù de lǜlìng tiáowén, ér zài zhíxíng céngmiàn quēfá chéngxù zhèngyì, quánlì zhìhéng yǔ duì ruòshì qúntǐ de sīfǎ wēnqíng, fǎlǜ biàn kěnéng yìhuà wéi bīnglěng jiāngyìng de jiàotiáo. Wéiyǒu jiāng kēxué wánbèi de “liángfǎ” yǔ gōngzhèng tòumíng, gāngróubìngjì de “shànzhì” yǒujī jiéhé, fāng néng shǐ fǎzhì jīngshén zhēnzhèng nèihuà wéi quán shèhuì de gòngtóng xìnyǎng.",
    "transcriptVi": "Kinh điển Pháp gia thời Tiên Tần Quản Tử từng nói: 'Pháp luật là khuôn phép của thiên hạ, là thước đo của muôn việc.' Tuy nhiên, sự hoàn bị của các điều khoản pháp luật mới chỉ là điều kiện cần chứ chưa phải điều kiện đủ để thực hiện sự trị an lâu dài của xã hội. Thực tiễn quản trị từ xưa đến nay chỉ ra rằng: 'Chỉ có lòng thiện suông thì không đủ để làm chính sự, chỉ có luật pháp trên giấy thì không thể tự vận hành.' Nếu chỉ có những điều luật chặt chẽ rườm rà mà ở tầng thực thi lại thiếu công lý thủ tục, sự kiểm soát cân bằng quyền lực và hơi ấm tư pháp đối với nhóm yếu thế thì pháp luật có thể bị tha hóa thành giáo điều lạnh lùng cứng nhắc. Chỉ khi kết hợp hữu cơ giữa 'Lương pháp' (luật tốt, khoa học hoàn bị) với 'Thiện trị' (quản trị khéo, công bằng minh bạch, cương nhu kết hợp) mới có thể làm cho tinh thần pháp quyền thực sự thấm sâu thành niềm tin chung của toàn xã hội.",
    "questionVi": "Theo đoạn bình luận, tại sao sự hoàn bị của văn bản pháp luật mới chỉ là điều kiện cần mà chưa phải điều kiện đủ ('徒法不能以自行')?",
    "options": [
      "Vì văn bản pháp luật không bao giờ được in thành sách",
      "Vì người dân không cần biết luật pháp viết gì",
      "Vì chỉ cần đạo đức là có thể thay thế hoàn toàn tòa án",
      "Vì nếu ở khâu thực thi thiếu công lý thủ tục, kiểm soát quyền lực và sự nhân văn đối với nhóm yếu thế thì luật pháp sẽ biến thành giáo điều cứng nhắc; cần kết hợp cả 'Lương pháp' và 'Thiện trị'"
    ],
    "correctAnswer": "Vì nếu ở khâu thực thi thiếu công lý thủ tục, kiểm soát quyền lực và sự nhân văn đối với nhóm yếu thế thì luật pháp sẽ biến thành giáo điều cứng nhắc; cần kết hợp cả 'Lương pháp' và 'Thiện trị'",
    "explanationVi": "Trong bài phân tích rõ: '若仅有严密繁复的律令条文，而在执行层面缺乏程序正义、权力制衡与对弱势群体的司法温情，法律便可能异化为冰冷僵硬的教条。唯有将...“良法”与...“善治”有机结合...'."
  },
  {
    "id": "lt-hsk9-basic-12",
    "level": "HSK9",
    "subDifficulty": "basic",
    "taskType": "task4-monologue",
    "title": "Triết học Lịch sử: Biện chứng giữa Truyền thống và Hiện đại",
    "audioZh": "在现代化转型浪潮中，人们往往容易陷入一种非此即彼的二元对立思维：要么将传统文化视为阻碍现代科学的沉重包袱而主张全盘否定，要么退回狭隘的文化保守主义而抗拒一切外来新知。殊不知，传统绝非凝固不变的化石，而是一条在历史演进中不断吐故纳新的生命长河。昨日之创新沉淀为今日之传统，今日之变革亦将铸就明日之经典。真正的文化自觉，在于以现代理性精神激活传统思想中的普世价值，在创造性转化与创新性发展中实现古老文明的现代新生。",
    "pinyin": "Zài xiàndàihuà zhuǎnxíng làngcháo zhōng, rénmen wǎngwǎng róngyì xiànrù yì zhǒng fēicǐjíbǐ de èryuán duìlì sīwéi: yàome jiāng chuántǒng wénhuà shìwéi zǔ'ài xiàndài kēxué de chénzhòng bāofu ér zhǔzhāng quánpán fǒudìng, yàome tuìhuí xiá'ài de wénhuà bǎoshǒuzhǔyì ér kàngjù yíqiè wàilái xīnzhī. Shūbùzhī, chuántǒng juéfēi nínggù búbiàn de huàshí, ér shì yì tiáo zài lìshǐ yǎnjìn zhōng búduàn tǔgùnàxīn de shēngmìng chánghé. Zuórì zhī chuàngxīn chéndiàn wéi jīnrì zhī chuántǒng, jīnrì zhī biàngé yì jiāng zhùjiù míngrì zhī jīngdiǎn. Zhēnzhèng de wénhuà zìjué, zàiyú yǐ xiàndài lǐxìng jīngshén jīhuó chuántǒng sīxiǎng zhōng de pǔshì jiàzhí, zài chuàngzàoxìng zhuǎnhuà yǔ chuàngxīnxìng fāzhǎn zhōng shíxiàn gǔlǎo wénmíng de xiàndài xīnshēng.",
    "transcriptVi": "Trong làn sóng chuyển đổi hiện đại hóa, con người thường dễ rơi vào lối tư duy đối lập nhị nguyên không cái này thì cái kia: hoặc coi văn hóa truyền thống là gánh nặng cản trở khoa học hiện đại nên chủ trương phủ định sạch trơn, hoặc lùi về chủ nghĩa bảo thủ văn hóa hẹp hòi mà khước từ mọi tri thức mới từ bên ngoài. Họ đâu biết rằng truyền thống tuyệt không phải là hóa thạch đông cứng bất biến, mà là một dòng sông sự sống không ngừng đào thải cái cũ, hấp thu cái mới trong tiến trình lịch sử. Sự đổi mới của ngày hôm qua lắng đọng thành truyền thống của ngày hôm nay, và cuộc biến革 của ngày hôm nay cũng sẽ đúc nên kinh điển của ngày mai. Sự tự giác văn hóa thực sự nằm ở việc dùng tinh thần lý tính hiện đại để kích hoạt những giá trị phổ quát trong tư tưởng truyền thống, thực hiện sự tái sinh hiện đại của nền văn minh cổ xưa thông qua chuyển hóa sáng tạo và phát triển đổi mới.",
    "questionVi": "Tác giả định nghĩa như thế nào về mối quan hệ giữa 'Truyền thống' và 'Đổi mới'?",
    "options": [
      "Truyền thống không phải hóa thạch bất biến mà là dòng sông luôn đổi mới: đổi mới của hôm qua lắng đọng thành truyền thống hôm nay, và biến革 hôm nay sẽ đúc nên kinh điển ngày mai",
      "Truyền thống và hiện đại hoàn toàn đối lập, buộc phải xóa bỏ một trong hai",
      "Mọi truyền thống đều cản trở sự phát triển của khoa học",
      "Không được phép thay đổi bất kỳ phong tục cổ xưa nào"
    ],
    "correctAnswer": "Truyền thống không phải hóa thạch bất biến mà là dòng sông luôn đổi mới: đổi mới của hôm qua lắng đọng thành truyền thống hôm nay, và biến革 hôm nay sẽ đúc nên kinh điển ngày mai",
    "explanationVi": "Trong bài khẳng định: '传统绝非凝固不变的化石，而是一条在历史演进中不断吐故纳新的生命长河。昨日之创新沉淀为今日之传统，今日之变革亦将铸就明日之经典'."
  },
  {
    "id": "lt-hsk9-advanced-1",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Nghịch lý Triffin (Triffin Dilemma) trong hệ thống tiền tệ quốc tế",
    "audioZh": "根据“特里芬难题”，当某一主权国家的货币充当全球主要储备货币时，该国维持国际收支顺差以保证币值坚挺与通过逆差向全球提供流动性之间存在着无法调和的内在悖论。",
    "pinyin": "Gēnjù “Tèlǐfēn nántí”, dāng mǒu yī zhǔquán guójiā de huòbì chōngdāng quánqiú zhǔyào chǔbèi huòbì shí, gāiguó wéichí guójì shōuzhī shùnchā yǐ bǎozhèng bìzhí jiāntǐng yǔ tōngguò nìchā xiàng quánqiú tígōng liúdòngxìng zhījiān cúnzài zhe wúfǎ tiáohé de nèizài bèilùn.",
    "transcriptVi": "Theo 'Nghịch lý Triffin', khi đồng tiền của một quốc gia có chủ quyền đóng vai trò làm đồng tiền dự trữ chính của toàn cầu, giữa việc quốc gia đó phải duy trì thặng dư cán cân thanh toán quốc tế để đảm bảo giá trị đồng tiền vững chắc với việc phải thông qua thâm hụt để cung cấp thanh khoản cho toàn cầu luôn tồn tại một nghịch lý nội tại không thể điều hòa.",
    "questionVi": "Nghịch lý nội tại không thể điều hòa được chỉ ra trong 'Nghịch lý Triffin' là gì?",
    "options": [
      "Mâu thuẫn giữa việc in tiền giấy và đúc tiền xu",
      "Mâu thuẫn giữa việc phải duy trì thặng dư cán cân thanh toán để giữ giá trị đồng tiền dự trữ với việc phải chịu thâm hụt để cung cấp thanh khoản cho thế giới",
      "Việc các ngân hàng không biết tính lãi suất",
      "Việc vàng nặng hơn tiền giấy"
    ],
    "correctAnswer": "Mâu thuẫn giữa việc phải duy trì thặng dư cán cân thanh toán để giữ giá trị đồng tiền dự trữ với việc phải chịu thâm hụt để cung cấp thanh khoản cho thế giới",
    "explanationVi": "'该国维持国际收支顺差以保证币值坚挺与通过逆差向全球提供流动性之间存在着无法调和的内在悖论'."
  },
  {
    "id": "lt-hsk9-advanced-2",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Hiệu ứng lan tỏa (Spillover Effect) của chính sách tiền tệ",
    "audioZh": "主要储备货币发行国激进的量化紧缩与加息周期，往往通过跨境资本回流对新兴市场国家造成汇率贬值、输入性通胀与主权债务违约的三重外溢冲击。",
    "pinyin": "Zhǔyào chǔbèi huòbì fāxíngguó jījìn de liànghuà jǐnsuō yǔ jiāxī zhōuqī, wǎngwǎng tōngguò kuàjìng zīběn huíliú duì xīnxīng shìchǎng guójiā zàochéng huìlǜ biǎnzhí, shūrùxìng tōngzhàng yǔ zhǔquán zhàiwù wéiyuē de sānchóng wàiyì chōngjī.",
    "transcriptVi": "Chu kỳ thắt chặt định lượng và tăng lãi suất quyết liệt của quốc gia phát hành đồng tiền dự trữ chính thường thông qua dòng vốn xuyên biên giới chảy ngược về gây ra cú sốc lan tỏa ba tầng cho các quốc gia thị trường mới nổi: mất giá tỷ giá, lạm phát nhập khẩu và vỡ nợ công.",
    "questionVi": "Chu kỳ tăng lãi suất quyết liệt của nước phát hành đồng tiền dự trữ chính gây ra 3 cú sốc lan tỏa nào cho các thị trường mới nổi?",
    "options": [
      "Giúp các nước mới nổi tăng gấp đôi dự trữ ngoại hối",
      "Làm giảm lãi suất vay vốn trên toàn cầu xuống 0%",
      "Đồng nội tệ mất giá, lạm phát nhập khẩu và nguy cơ vỡ nợ công do dòng vốn chảy ngược",
      "Xóa bỏ hoàn toàn nợ nước ngoài của các nước đang phát triển"
    ],
    "correctAnswer": "Đồng nội tệ mất giá, lạm phát nhập khẩu và nguy cơ vỡ nợ công do dòng vốn chảy ngược",
    "explanationVi": "'对新兴市场国家造成汇率贬值、输入性通胀与主权债务违约的三重外溢冲击'."
  },
  {
    "id": "lt-hsk9-advanced-3",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task1-single",
    "title": "Cuộc cạnh tranh quyền xây dựng tiêu chuẩn kỹ thuật quốc tế",
    "audioZh": "在6G通信、量子计算与人工智能治理等前沿疆域，国际技术标准制定权的博弈本质上是未来数十年全球产业话语权与知识产权许可溢价分配权的争夺。",
    "pinyin": "Zài 6G tōngxìn, liàngzǐ jìsuàn yǔ réngōng zhìnéng zhìlǐ děng qiányán jiāngyù, guójì jìshù biāozhǔn zhìdìngquán de bóyì běnzhì shàng shì wèilái shùshí nián quánqiú chǎnyè huàyǔquán yǔ zhīshi chǎnquán xǔkě yìjià fēnpèiquán de zhēngduó.",
    "transcriptVi": "Trong các lãnh địa tiên phong như viễn thông 6G, điện toán lượng tử và quản trị trí tuệ nhân tạo, cuộc đấu trí giành quyền xây dựng tiêu chuẩn kỹ thuật quốc tế về bản chất là sự tranh giành quyền phát ngôn công nghiệp toàn cầu và quyền phân phối lợi nhuận cấp phép sở hữu trí tuệ trong hàng chục năm tới.",
    "questionVi": "Về bản chất, cuộc đấu trí giành quyền xây dựng tiêu chuẩn kỹ thuật quốc tế (như 6G, AI) là sự tranh giành điều gì?",
    "options": [
      "Quyền đặt tên cho các tòa nhà văn phòng",
      "Quyền bán vé tham quan triển lãm",
      "Quyền miễn thuế nhập khẩu nông sản",
      "Quyền phát ngôn trong ngành công nghiệp toàn cầu và quyền phân phối lợi nhuận cấp phép sở hữu trí tuệ trong tương lai"
    ],
    "correctAnswer": "Quyền phát ngôn trong ngành công nghiệp toàn cầu và quyền phân phối lợi nhuận cấp phép sở hữu trí tuệ trong tương lai",
    "explanationVi": "'本质上是未来数十年全球产业话语权与知识产权许可溢价分配权的争夺'."
  },
  {
    "id": "lt-hsk9-advanced-4",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về nguyên tắc Trách nhiệm chung nhưng có phân biệt trong quản trị khí hậu",
    "audioZh": "在全球气候谈判与减排融资机制设计中，为什么发展中国家始终强调必须恪守《联合国气候变化框架公约》所确立的“共同但有区别的责任”原则？",
    "pinyin": "Zài quánqiú qìhòu tánpàn yǔ jiǎnpái róngzī jīzhì shèjì zhōng, wèishénme fāzhǎnzhōng guójiā shǐzhōng qiángdiào bìxū kèshǒu Liánhéguó Qìhòu Biànhuà Kuàngjià Gōngyuē suǒ quèlì de “gòngtóng dàn yǒu qūbié de zérèn” yuánzé?",
    "transcriptVi": "Trong đàm phán khí hậu toàn cầu và thiết kế cơ chế tài chính giảm phát thải, tại sao các nước đang phát triển luôn nhấn mạnh bắt buộc phải tuân thủ nguyên tắc 'Trách nhiệm chung nhưng có phân biệt' được xác lập trong Công ước khung của Liên Hợp Quốc về Biến đổi Khí hậu?",
    "questionVi": "Đáp án nào phân tích chuẩn xác góc độ kinh tế chính trị học quốc tế?",
    "options": [
      "因为大气中累积的温室气体绝大部分源于发达国家两百余年的工业化历史排放，发达国家理应在率先大幅减排的同时，向发展中国家兑现资金与绿色技术转让承诺。 (Vì phần lớn khí nhà kính tích tụ trong khí quyển bắt nguồn từ lượng phát thải lịch sử suốt hơn 200 năm công nghiệp hóa của các nước phát triển; các nước phát triển lẽ đương nhiên phải đi đầu giảm mạnh phát thải đồng thời thực hiện cam kết chuyển giao vốn và công nghệ xanh cho các nước đang phát triển.)",
      "因为发展中国家完全没有森林和海洋。 (Vì các nước đang phát triển hoàn toàn không có rừng và đại dương.)",
      "因为气候变化只影响北极熊而不影响人类。 (Vì biến đổi khí hậu chỉ ảnh hưởng đến gấu Bắc Cực chứ không ảnh hưởng đến con người.)",
      "因为联合国禁止任何国家使用太阳能。 (Vì Liên Hợp Quốc cấm mọi quốc gia sử dụng năng lượng mặt trời.)"
    ],
    "correctAnswer": "因为大气中累积的温室气体绝大部分源于发达国家两百余年的工业化历史排放，发达国家理应在率先大幅减排的同时，向发展中国家兑现资金与绿色技术转让承诺。 (Vì phần lớn khí nhà kính tích tụ trong khí quyển bắt nguồn từ lượng phát thải lịch sử suốt hơn 200 năm công nghiệp hóa của các nước phát triển; các nước phát triển lẽ đương nhiên phải đi đầu giảm mạnh phát thải đồng thời thực hiện cam kết chuyển giao vốn và công nghệ xanh cho các nước đang phát triển.)",
    "explanationVi": "Nguyên tắc '共同但有区别的责任' dựa trên trách nhiệm phát thải lịch sử ('工业化历史排放') và nghĩa vụ hỗ trợ vốn, công nghệ của các nước phát triển."
  },
  {
    "id": "lt-hsk9-advanced-5",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về kinh tế học thể chế (Institutional Economics) của Douglass North",
    "audioZh": "诺贝尔经济学奖得主道格拉斯·诺斯在制度经济学研究中指出，为什么有些拥有丰富自然资源的国家反而长期陷入经济增长停滞的“资源诅咒”？",
    "pinyin": "Nuòbèi'ěr Jīngjìxuéjiǎng dézhǔ Dàogélāsī Nuòsī zài zhìdù jīngjìxué yánjiū zhōng zhǐchū, wèishénme yǒuxiē yōngyǒu fēngfù zìrán zīyuán de guójiā fǎn'ér chángqī xiànrù jīngjì zēngzhǎng tíngzhì de “zīyuán zǔzhòu”?",
    "transcriptVi": "Chủ nhân giải Nobel Kinh tế Douglass North trong nghiên cứu kinh tế học thể chế đã chỉ ra tại sao một số quốc gia sở hữu tài nguyên thiên nhiên phong phú lại rơi vào 'lời nguyền tài nguyên' khiến tăng trưởng kinh tế đình trệ kéo dài?",
    "questionVi": "Đáp án nào giải thích đúng theo lý thuyết Kinh tế học thể chế?",
    "options": [
      "因为自然资源太多的国家没有阳光和雨水。 (Vì những nước có quá nhiều tài nguyên thiên nhiên không có ánh nắng và nước mưa.)",
      "因为决定长期经济绩效的根本变量并非资源禀赋，而是产权界定的清晰度、契约执行的法治保障以及激励生产性创新而非寻租分利的制度架构。 (Vì biến số căn bản quyết định hiệu quả kinh tế dài hạn không phải là tài nguyên thiên nhiên sẵn có, mà là mức độ rõ ràng của việc phân định quyền tài sản, sự bảo đảm pháp quyền trong thực thi khế ước và cấu trúc thể chế khuyến khích đổi mới sản xuất thay vì trục lợi đặc quyền.)",
      "因为石油和矿产不能用来出口换取外汇。 (Vì dầu mỏ và khoáng sản không thể dùng để xuất khẩu đổi lấy ngoại tệ.)",
      "因为所有资源型国家都位于南极洲。 (Vì tất cả các quốc gia giàu tài nguyên đều nằm ở châu Nam Cực.)"
    ],
    "correctAnswer": "因为决定长期经济绩效的根本变量并非资源禀赋，而是产权界定的清晰度、契约执行的法治保障以及激励生产性创新而非寻租分利的制度架构。 (Vì biến số căn bản quyết định hiệu quả kinh tế dài hạn không phải là tài nguyên thiên nhiên sẵn có, mà là mức độ rõ ràng của việc phân định quyền tài sản, sự bảo đảm pháp quyền trong thực thi khế ước và cấu trúc thể chế khuyến khích đổi mới sản xuất thay vì trục lợi đặc quyền.)",
    "explanationVi": "Kinh tế học thể chế khẳng định quyền tài sản ('产权界定'), thực thi khế ước ('契约执行') và thể chế khuyến khích đổi mới mới là biến số căn bản quyết định tăng trưởng dài hạn."
  },
  {
    "id": "lt-hsk9-advanced-6",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task2-qa",
    "title": "Hỏi về nghệ thuật ngôn từ ngoại giao (外交辞令)",
    "audioZh": "在国际多边外交声明与双边联合公报中，诸如“交换了坦诚、深入的意见”与“达成了广泛共识”这两类措辞，在外交语境下分别传递出怎样的潜台词？",
    "pinyin": "Zài guójì duōbiān wàijiāo shēngmíng yǔ shuāngbiān liánhé gōngbào zhōng, zhūrú “jiāohuàn le tǎnchéng, shēnrù de yìjiàn” yǔ “dáchéng le guǎngfàn gòngshí” zhè liǎng lèi cuòcí, zài wàijiāo yǔjìng xià fēnbié chuándì chū zěnyàng de qiántáicí?",
    "transcriptVi": "Trong các tuyên bố ngoại giao đa phương và thông cáo chung song phương, hai kiểu dùng từ như 'đã trao đổi ý kiến thẳng thắn, sâu sắc' và 'đã đạt được nhận thức chung rộng rãi' lần lượt truyền tải hàm ý ngầm (subtext) gì trong ngữ cảnh ngoại giao?",
    "questionVi": "Đáp án nào giải mã chính xác ngôn từ ngoại giao?",
    "options": [
      "两句话的意思完全相同，都表示双方已经签署了军事同盟条约。 (Hai câu có nghĩa hoàn toàn giống nhau, đều biểu thị hai bên đã ký hiệp ước đồng minh quân sự.)",
      "表示双方代表在会议上只谈论了天气和饮食。 (Biểu thị đại biểu hai bên trong hội nghị chỉ bàn về thời tiết và ẩm thực.)",
      "“坦诚深入交换意见”通常委婉地表明双方在核心议题上存在重大分歧但保持了直接沟通；而“达成广泛共识”则意味着双方在多数原则立场上已趋于一致并准备推进实质合作。 ('Trao đổi ý kiến thẳng thắn sâu sắc' thường uyển chuyển cho thấy hai bên còn bất đồng lớn ở các vấn đề cốt lõi nhưng vẫn duy trì đối thoại trực tiếp; còn 'đạt được nhận thức chung rộng rãi' có nghĩa là hai bên đã thống nhất ở đa số lập trường nguyên tắc và chuẩn bị thúc đẩy hợp tác thực chất.)",
      "表示会议因为翻译缺席而提前取消。 (Biểu thị hội nghị bị hủy sớm vì phiên dịch vắng mặt.)"
    ],
    "correctAnswer": "“坦诚深入交换意见”通常委婉地表明双方在核心议题上存在重大分歧但保持了直接沟通；而“达成广泛共识”则意味着双方在多数原则立场上已趋于一致并准备推进实质合作。 ('Trao đổi ý kiến thẳng thắn sâu sắc' thường uyển chuyển cho thấy hai bên còn bất đồng lớn ở các vấn đề cốt lõi nhưng vẫn duy trì đối thoại trực tiếp; còn 'đạt được nhận thức chung rộng rãi' có nghĩa là hai bên đã thống nhất ở đa số lập trường nguyên tắc và chuẩn bị thúc đẩy hợp tác thực chất.)",
    "explanationVi": "Trong ngôn ngữ ngoại giao, '坦诚深入交换意见' (frank and in-depth exchange of views) là cách nói uyển chuyển khi hai bên có bất đồng lớn nhưng trao đổi thẳng thắn."
  },
  {
    "id": "lt-hsk9-advanced-7",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Tọa đàm kinh tế vĩ mô: Phòng ngừa xu hướng 'Thoát thực hướng hư' (脱实向虚)",
    "audioZh": "女：回顾近几十年全球多次金融泡沫破灭的教训，当大量社会资本脱离制造业与科技创新，涌入房地产投机与复杂金融衍生品空转套利时，实体经济的根基往往会被严重掏空。\n男：言之有理。金融的本源使命是服务实体经济，犹如血液之于肌体。一旦金融体系自我循环、过度证券化，不仅会推高制造业的融资与要素成本，更会积聚起一触即发的资产泡沫。因此，引导信贷资源精准滴灌高端制造与绿色科技，是宏观调控的重中之重。",
    "pinyin": "Nǚ: Huígù jìn jǐshí nián quánqiú duō cì jīnróng pàomò pòmiè de jiàoxun, dāng dàliàng shèhuì zīběn tuōlí zhìzàoyè yǔ kējì chuàngxīn, yǒngrù fángdìchǎn tóujī yǔ fùzá jīnróng yǎnshēngpǐn kōngzhuàn tàolì shí, shítǐ jīngjì de gēnjī wǎngwǎng huì bèi yánzhòng tāokōng.\nNán: Yánzhīyǒulǐ. Jīnróng de běnyuán shǐmìng shì fúwù shítǐ jīngjì, yóurú xuèyè zhī yú jītǐ. Yídàn jīnróng tǐxì zìwǒ xúnhuán, guòdù zhèngquànhuà, bùjǐn huì tuīgāo zhìzàoyè de róngzī yǔ yàosù chéngběn, gèng huì jījù qǐ yíchùjífā de zīchǎn pàomò. Yīncǐ, yǐndǎo xìndài zīyuán jīngzhǔn dīguàn gāoduān zhìzào yǔ lǜsè kējì, shì hóngguān tiáokòng de zhòngzhōngzhīzhòng.",
    "transcriptVi": "Nữ: Nhìn lại bài học từ nhiều lần vỡ bong bóng tài chính toàn cầu mấy chục năm qua, khi lượng lớn nguồn vốn xã hội rời bỏ ngành chế tạo và đổi mới công nghệ để đổ vào đầu cơ bất động sản và quay vòng trục lợi trong các sản phẩm phái sinh tài chính phức tạp, nền tảng của nền kinh tế thực thường bị rút ruột nghiêm trọng.\nNam: Rất chí lý. Sứ mệnh căn nguyên của tài chính là phục vụ nền kinh tế thực, giống như máu đối với cơ thể. Một khi hệ thống tài chính tự tuần hoàn khép kín và chứng khoán hóa quá mức, không những đẩy cao chi phí huy động vốn và yếu tố sản xuất của ngành chế tạo, mà còn tích tụ bong bóng tài sản có thể nổ tung bất cứ lúc nào. Do đó, định hướng nguồn lực tín dụng tưới tiêu chính xác vào chế tạo cao cấp và công nghệ xanh là trọng tâm hàng đầu của điều tiết vĩ mô.",
    "questionVi": "Hai chuyên gia cảnh báo hậu quả gì khi dòng vốn xã hội rời bỏ ngành chế tạo để đổ vào đầu cơ tài chính ('脱实向虚')?",
    "options": [
      "Giúp các nhà máy sản xuất hàng hóa với chi phí bằng không",
      "Giúp xóa bỏ hoàn toàn lạm phát trên toàn cầu",
      "Làm tăng số lượng kỹ sư cơ khí lên gấp 10 lần",
      "Làm rỗng nền tảng kinh tế thực, đẩy cao chi phí của ngành chế tạo và tích tụ bong bóng tài sản nguy hiểm"
    ],
    "correctAnswer": "Làm rỗng nền tảng kinh tế thực, đẩy cao chi phí của ngành chế tạo và tích tụ bong bóng tài sản nguy hiểm",
    "explanationVi": "Trong đối thoại chỉ rõ: '实体经济的根基往往会被严重掏空...不仅会推高制造业的融资与要素成本，更会积聚起一触即发的资产泡沫'."
  },
  {
    "id": "lt-hsk9-advanced-8",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Chủ nghĩa khu vực mở (Open Regionalism) và chống phân mảnh thương mại",
    "audioZh": "男：近年来，“友岸外包”与排他性供应链小圈子的兴起，正在将原本高度一体化的全球贸易网络切割成相互壁垒的碎片，全球福祉因此遭受了巨额效率损失。\n女：是的，对抗碎片化的唯一出路是坚持“开放的区域主义”。以东盟主导的区域合作为例，它不搞非此即彼的阵营对抗，而是通过RCEP与升级版中国—东盟自贸区，持续降低关税与非关税壁垒，为全球经济复苏提供了难能可贵的确定性锚点。",
    "pinyin": "Nán: Jìnnián lái, “yǒu'àn wàibāo” yǔ páitāxìng gōngyìngliàn xiǎoquānzi de xīngqǐ, zhèngzài jiāng yuánběn gāodù yìtǐhuà de quánqiú màoyì wǎngluò qiēgē chéng xiānghù bìlěi de suìpiàn, quánqiú fúzhǐ yīncǐ zāoshòu le jù'é xiàolǜ sǔnshī.\nNǚ: Shì de, duìkàng suìpiànhuà de wéiyī chūlù shì jiānchí “kāifàng de qūyùzhǔyì”. Yǐ Dōngméng zhǔdǎo de qūyù hézuò wéilì, tā bù gǎo fēicǐjíbǐ de zhènyíng duìkàng, ér shì tōngguò RCEP yǔ shēngjíbǎn Zhōngguó—Dōngméng Zìmàoqū, chíxù jiàngdī guānshuì yǔ fēi guānshuì bìlěi, wèi quánqiú jīngjì fūsū tígōng le nánnéngkěguì de quèdìngxìng máodiǎn.",
    "transcriptVi": "Nam: Những năm gần đây, sự trỗi dậy của xu hướng 'friend-shoring (thuê ngoài tại các nước đồng minh)' và các nhóm chuỗi cung ứng khép kín mang tính loại trừ đang cắt xẻ mạng lưới thương mại toàn cầu vốn có độ nhất thể hóa cao thành những mảnh vụn dựng rào cản lẫn nhau, phúc lợi toàn cầu vì thế chịu tổn thất hiệu quả khổng lồ.\nNữ: Đúng vậy, lối thoát duy nhất để chống lại sự phân mảnh là kiên trì 'Chủ nghĩa khu vực mở'. Lấy hợp tác khu vực do ASEAN dẫn dắt làm ví dụ, cơ chế này không搞 (tiến hành) đối đầu phe phái chọn bên, mà thông qua RCEP và Khu vực Mậu dịch Tự do Trung Quốc - ASEAN phiên bản nâng cấp để liên tục cắt giảm rào cản thuế quan và phi thuế quan, mang lại điểm tựa chắc chắn đáng quý cho sự phục hồi kinh tế toàn cầu.",
    "questionVi": "Theo bạn nữ, đặc trưng cốt lõi của mô hình 'Chủ nghĩa khu vực mở (开放的区域主义)' do ASEAN thúc đẩy là gì?",
    "options": [
      "Không đối đầu phe phái chọn bên, mà thông qua các hiệp định như RCEP và ACFTA nâng cấp để liên tục giảm rào cản thuế quan và phi thuế quan",
      "Chỉ giao thương nội bộ trong 3 quốc gia và đóng cửa biên giới với thế giới",
      "Tăng thuế nhập khẩu của mọi mặt hàng lên 200%",
      "Bãi bỏ hoàn toàn vận tải hàng hải quốc tế"
    ],
    "correctAnswer": "Không đối đầu phe phái chọn bên, mà thông qua các hiệp định như RCEP và ACFTA nâng cấp để liên tục giảm rào cản thuế quan và phi thuế quan",
    "explanationVi": "Bạn nữ nêu rõ: '它不搞非此即彼的阵营对抗，而是通过RCEP与升级版中国—东盟自贸区，持续降低关税与非关税壁垒...'."
  },
  {
    "id": "lt-hsk9-advanced-9",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task3-dialogue",
    "title": "Quản trị Trí tuệ nhân tạo toàn cầu: Cân bằng giữa Đổi mới và Rủi ro đạo đức",
    "audioZh": "女：随着具备自主规划与跨模态推理能力的通用人工智能模型加速迭代，技术失控、深度伪造欺诈以及大规模结构性失业的隐忧正从科幻小说变为现实议题。\n男：这正是全球AI治理面临的“科林格里奇困境”：在技术发展早期，其负面后果尚未充分显现，规制往往滞后；而一旦技术深度嵌入社会经济结构，再想纠偏则成本高昂。因此，构建具有敏捷响应能力的沙盒监管机制与跨国伦理底线公约已刻不容缓。",
    "pinyin": "Nǚ: Suízhe jùbèi zìzhǔ guīhuà yǔ kuà mótài tuīlǐ nénglì de tōngyòng réngōng zhìnéng móxíng jiāsù diédài, jìshù shīkòng, shēndù wěizào qīzhà yǐjí dà guīmó jiégòuxìng shīyè de yǐnyōu zhèng cóng kēhuàn xiǎoshuō biànwéi xiànshí yìtí.\nNán: Zhè zhèng shì quánqiú AI zhìlǐ miànlín de “Kēlíngélǐqí kùnjìng”: zài jìshù fāzhǎn zǎoqī, qí fùmiàn hòuguǒ shàngwèi chōngfèn xiǎnxiàn, guīzhì wǎngwǎng zhìhòu; ér yídàn jìshù shēndù qiànrù shèhuì jīngjì jiégòu, zài xiǎng jiūpiān zé chéngběn gāo'áng. Yīncǐ, gòujiàn jùyǒu mǐnjié xiǎngyìng nénglì de shāhé jiānguǎn jīzhì yǔ kuàguó lúnlǐ dǐxiàn gōngyuē yǐ kèbùrónghuǎn.",
    "transcriptVi": "Nữ: Cùng với sự迭代 (cập nhật thế hệ) tăng tốc của các mô hình trí tuệ nhân tạo tổng quát có khả năng tự lập kế hoạch và suy luận đa phương thức, những nỗi lo về mất kiểm soát công nghệ, lừa đảo deepfake và thất nghiệp cơ cấu quy mô lớn đang từ tiểu thuyết khoa học viễn tưởng trở thành vấn đề nghị sự thực tế.\nNam: Đây chính là 'Thế lưỡng nan Collingridge (Collingridge Dilemma)' mà quản trị AI toàn cầu đang đối mặt: ở giai đoạn đầu phát triển công nghệ, hệ quả tiêu cực của nó chưa bộc lộ đầy đủ nên quy chế quản lý thường đi sau; nhưng một khi công nghệ đã ăn sâu vào cấu trúc kinh tế xã hội, muốn uốn nắn lại thì chi phí vô cùng đắt đỏ. Do đó, việc xây dựng cơ chế giám sát thử nghiệm (regulatory sandbox) có khả năng phản ứng linh hoạt cùng công ước quốc tế về giới hạn đạo đức tối thiểu đã trở nên cấp bách không thể chậm trễ.",
    "questionVi": "Khái niệm 'Thế lưỡng nan Collingridge (科林格里奇困境)' trong quản trị công nghệ mô tả nghịch lý gì?",
    "options": [
      "Máy tính càng nhỏ thì giá bán càng đắt",
      "Ở giai đoạn đầu thì hậu quả tiêu cực chưa lộ rõ nên khó lập quy chế; nhưng khi công nghệ đã ăn sâu vào xã hội thì chi phí sửa chữa, kiểm soát lại quá đắt đỏ",
      "Càng nhiều kỹ sư lập trình thì phần mềm chạy càng chậm",
      "Không thể kết nối Internet giữa hai lục địa"
    ],
    "correctAnswer": "Ở giai đoạn đầu thì hậu quả tiêu cực chưa lộ rõ nên khó lập quy chế; nhưng khi công nghệ đã ăn sâu vào xã hội thì chi phí sửa chữa, kiểm soát lại quá đắt đỏ",
    "explanationVi": "Bạn nam giải thích rất rõ: '在技术发展早期，其负面后果尚未充分显现，规制往往滞后；而一旦技术深度嵌入社会经济结构，再想纠偏则成本高昂'."
  },
  {
    "id": "lt-hsk9-advanced-10",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Bình luận Kinh tế Vĩ mô: Bồi dưỡng Lực lượng sản xuất chất lượng mới (新质生产力)",
    "audioZh": "在传统依靠土地、廉价劳动力与高耗能资本投入的粗放型增长模式触及天花板之际，加快培育“新质生产力”成为推动经济高质量发展的核心引擎。所谓新质生产力，是以科技创新为主导，摆脱传统经济增长方式，具有高科技、高效能、高质量特征的先进生产力质态。它不仅涵盖人工智能、生物制造、商业航天与低空经济等战略性新兴产业与未来产业，更强调通过数智技术与绿色技术对传统制造业进行全链条赋能，从而实现全要素生产率的质的飞跃。",
    "pinyin": "Zài chuántǒng yīkào tǔdì, liánjià láodònglì yǔ gāo hàonéng zīběn tóurù de cūfàngxíng zēngzhǎng móshì chùjí tiānhuābǎn zhījì, jiākuài péiyù “xīnzhì shēngchǎnlì” chéngwéi tuīdòng jīngjì gāo zhìliàng fāzhǎn de héxīn yǐnqíng. Suǒwèi xīnzhì shēngchǎnlì, shì yǐ kējì chuàngxīn wéi zhǔdǎo, bǎituō chuántǒng jīngjì zēngzhǎng fāngshì, jùyǒu gāo kējì, gāo xiàonéng, gāo zhìliàng tèzhēng de xiānjìn shēngchǎnlì zhìtài. Tā bùjǐn hángài réngōng zhìnéng, shēngwù zhìzào, shāngyè hángtiān yǔ dīkōng jīngjì děng zhànlüèxìng xīnxīng chǎnyè yǔ wèilái chǎnyè, gèng qiángdiào tōngguò shùzhì jìshù yǔ lǜsè jìshù duì chuántǒng zhìzàoyè jìnxíng quán liàntiáo fùnéng, cóng'ér shíxiàn quán yàosù shēngchǎnlǜ de zhì de fēiyuè.",
    "transcriptVi": "Trong lúc mô hình tăng trưởng quảng canh truyền thống dựa vào đất đai, lao động giá rẻ và đầu tư vốn tiêu hao nhiều năng lượng chạm trần giới hạn, việc đẩy nhanh bồi dưỡng 'lực lượng sản xuất chất lượng mới' đã trở thành động cơ cốt lõi thúc đẩy kinh tế phát triển chất lượng cao. Lực lượng sản xuất chất lượng mới lấy đổi mới khoa học công nghệ làm chủ đạo, thoát khỏi phương thức tăng trưởng kinh tế truyền thống, mang đặc trưng công nghệ cao, hiệu năng cao và chất lượng cao. Nó không chỉ bao hàm các ngành công nghiệp mới nổi mang tính chiến lược và ngành tương lai như trí tuệ nhân tạo, chế tạo sinh học, hàng không vũ trụ thương mại và kinh tế tầm thấp, mà còn nhấn mạnh việc trao quyền toàn chuỗi cho ngành chế tạo truyền thống thông qua công nghệ số thông minh và công nghệ xanh, từ đó thực hiện bước nhảy vọt về chất của năng suất nhân tố tổng hợp (TFP).",
    "questionVi": "Theo bài bình luận, 'Lực lượng sản xuất chất lượng mới (新质生产力)' có những đặc trưng cốt lõi nào?",
    "options": [
      "Tiếp tục mở rộng diện tích đất nhà máy và tuyển dụng lao động phổ thông giá rẻ",
      "Tăng gấp đôi lượng than đá tiêu thụ trong công nghiệp nặng",
      "Lấy đổi mới KHCN làm chủ đạo (công nghệ cao, hiệu năng cao, chất lượng cao), vừa phát triển các ngành tương lai vừa dùng công nghệ số và xanh nâng cấp ngành chế tạo truyền thốngเพื่อ tăng năng suất nhân tố tổng hợp",
      "Bãi bỏ toàn bộ ngành sản xuất chế tạo để chỉ làm dịch vụ ăn uống"
    ],
    "correctAnswer": "Lấy đổi mới KHCN làm chủ đạo (công nghệ cao, hiệu năng cao, chất lượng cao), vừa phát triển các ngành tương lai vừa dùng công nghệ số và xanh nâng cấp ngành chế tạo truyền thốngเพื่อ tăng năng suất nhân tố tổng hợp",
    "explanationVi": "Trong bài định nghĩa rõ: '以科技创新为主导...具有高科技、高效能、高质量特征...不仅涵盖...战略性新兴产业与未来产业，更强调通过数智技术与绿色技术对传统制造业进行全链条赋能，从而实现全要素生产率的质的飞跃'."
  },
  {
    "id": "lt-hsk9-advanced-11",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Diễn văn Thượng đỉnh: Vượt qua Bẫy Thucydides và Xây dựng Cộng đồng chung vận mệnh",
    "audioZh": "纵观近五百年国际关系史，新兴大国与守成大国之间似乎总难逃脱猜忌对抗、零和博弈的所谓“修昔底德陷阱”。然而，历史并非宿命的简单重复。在核威慑与全球产业链高度交织的二十一世纪，任何大国间的全面冲突都将是全人类无法承受之重，开放合作与和平共处才是唯一理性的战略抉择。面对气候变化、公共卫生危机与全球发展赤字等跨越国界的共同挑战，没有哪个国家能够独善其身。唯有摒弃冷战思维与以邻为壑的短视行径，践行真正的多边主义，方能开创普惠包容、持久和平的人类文明新纪元。",
    "pinyin": "Zòngguān jìn wǔbǎi nián guójì guānxishǐ, xīnxīng dàguó yǔ shǒuchéng dàguó zhījiān sìhū zǒng nán táotuō cāijì duìkàng, línghé bóyì de suǒwèi “Xiūxīdǐdé xiànjǐng”. Rán'ér, lìshǐ bìngfēi sùmìng de jiǎndān chóngfù. Zài hé wēishè yǔ quánqiú chǎnyèliàn gāodù jiāozhī de èrshíyī shìjì, rènhé dàguó jiān de quánmiàn chōngtū dōu jiāng shì quán rénlèi wúfǎ chéngshòu zhī zhòng, kāifàng hézuò yǔ hépíng gòngchǔ cái shì wéiyī lǐxìng de zhànlüè juézé. Miànduì qìhòu biànhuà, gōnggòng wèishēng wēijī yǔ quánqiú fāzhǎn chìzì děng kuàyuè guójiè de gòngtóng tiǎozhàn, méiyǒu nǎge guójiā nénggòu dúshànqíshēn. Wéiyǒu bìngqì lěngzhàn sīwéi yǔ yǐlínwéihè de duǎnshì xíngjìng, jiànxíng zhēnzhèng de duōbiānzhǔyì, fāng néng kāichuàng pǔhuì bāoróng, chíjiǔ hépíng de rénlèi wénmíng xīn jìyuán.",
    "transcriptVi": "Nhìn tổng quan lịch sử quan hệ quốc tế gần 500 năm qua, giữa cường quốc mới nổi và cường quốc hiện hữu dường như luôn khó thoát khỏi cái gọi là 'Bẫy Thucydides' của sự nghi kỵ đối đầu và trò chơi có tổng bằng không. Tuy nhiên, lịch sử không phải là sự lặp lại đơn thuần của định mệnh. Trong thế kỷ 21 nơi răn đe hạt nhân và chuỗi công nghiệp toàn cầu đan xen ở mức độ cao, bất kỳ cuộc xung đột toàn diện nào giữa các nước lớn đều sẽ là gánh nặng mà toàn nhân loại không thể gánh chịu; mở cửa hợp tác và chung sống hòa bình mới là sự lựa chọn chiến lược lý tính duy nhất. Đối mặt với những thách thức chung vượt qua biên giới quốc gia như biến đổi khí hậu, khủng hoảng y tế công cộng và thâm hụt phát triển toàn cầu, không một quốc gia nào có thể chỉ lo cho riêng mình. Chỉ có loại bỏ tư duy Chiến tranh Lạnh và hành vi thiển cận đẩy khó khăn cho láng giềng, thực hành chủ nghĩa đa phương thực sự mới có thể mở ra kỷ nguyên mới của văn minh nhân loại bao trùm và hòa bình lâu dài.",
    "questionVi": "Theo bài diễn văn, tại sao trong thế kỷ 21 các cường quốc cần vượt qua 'Bẫy Thucydides' để lựa chọn hợp tác và chung sống hòa bình?",
    "options": [
      "Vì trên thế giới hiện nay chỉ còn một quốc gia duy nhất",
      "Vì tất cả các nước đã hủy bỏ hoàn toàn thương mại quốc tế",
      "Vì không còn sự khác biệt về ngôn ngữ",
      "Vì chuỗi công nghiệp toàn cầu đan xen chặt chẽ và nhân loại đang đối mặt với các thách thức xuyên biên giới (khí hậu, y tế, phát triển) mà không quốc gia nào có thể tự giải quyết một mình"
    ],
    "correctAnswer": "Vì chuỗi công nghiệp toàn cầu đan xen chặt chẽ và nhân loại đang đối mặt với các thách thức xuyên biên giới (khí hậu, y tế, phát triển) mà không quốc gia nào có thể tự giải quyết một mình",
    "explanationVi": "Trong bài nêu rõ: '全球产业链高度交织...面对气候变化、公共卫生危机与全球发展赤字等跨越国界的共同挑战，没有哪个国家能够独善其身'."
  },
  {
    "id": "lt-hsk9-advanced-12",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "taskType": "task4-monologue",
    "title": "Kinh tế học Tài chính Xanh: Khép lại khoảng trống tài chính khí hậu",
    "audioZh": "实现《巴黎协定》温控目标每年需要数万亿美元的绿色转型投资，单靠各国公共财政拨款仅是杯水车薪。如何通过制度创新撬动庞大的私人与机构资本流向低碳领域，是绿色金融的核心命题。首先，必须建立统一透明的绿色分类标准与强制性环境信息披露制度，严防企业通过虚假宣传“洗绿”套取低息资金；其次，应大力发展碳排放权交易市场、转型债券以及绿色基础设施不动产投资信托基金，通过市场化定价机制让减排效益转化为可预期、可持续的投资回报。",
    "pinyin": "Shíxiàn Bālí Xiédìng wēnkòng mùbiāo měinián xūyào shùwànyì Měiyuán de lǜsè zhuǎnxíng tóuzī, dān kào gèguó gōnggòng cáizhèng bōkuǎn jǐn shì bēishuǐchēxīn. Rúhé tōngguò zhìdù chuàngxīn qiàodòng pángdà de sīrén yǔ jīgòu zīběn liúxiàng dītàn lǐngyù, shì lǜsè jīnróng de héxīn mìngtí. Shǒuxiān, bìxū jiànlì tǒngyī tòumíng de lǜsè fēnlèi biāozhǔn yǔ qiángzhìxìng huánjìng xìnxī pīlù zhìdù, yánfáng qǐyè tōngguò xūjiǎ xuānchuán “xǐlǜ” tàoqǔ dīxī zījīn; qícì, yīng dàlì fāzhǎn tàn páifàngquán jiāoyì shìchǎng, zhuǎnxíng zhàiquàn yǐjí lǜsè jīchǔ shèshī bùdòngchǎn tóuzī xìntuō jījīn, tōngguò shìchǎnghuà dìngjià jīzhì ràng jiǎnpái xiàoyì zhuǎnhuà wéi kě yùqī, kěchíxù de tóuzī huíbào.",
    "transcriptVi": "Để thực hiện mục tiêu kiểm soát nhiệt độ của Hiệp định Paris, mỗi năm cần hàng ngàn tỷ USD đầu tư chuyển đổi xanh, nếu chỉ dựa vào ngân sách tài chính công của các nước thì chẳng khác nào một cốc nước cứu một xe củi cháy. Làm thế nào thông qua đổi mới thể chế để kích hoạt nguồn vốn tư nhân và tổ chức khổng lồ chảy vào lĩnh vực carbon thấp là mệnh đề cốt lõi của tài chính xanh. Trước hết, bắt buộc phải thiết lập tiêu chuẩn phân loại xanh thống nhất minh bạch và chế độ công bố thông tin môi trường bắt buộc, phòng ngừa nghiêm ngặt việc doanh nghiệp 'tẩy xanh (greenwashing)' qua tuyên truyền giả dối để trục lợi nguồn vốn lãi suất thấp; thứ hai, cần phát triển mạnh thị trường giao dịch quyền phát thải carbon, trái phiếu chuyển đổi và quỹ tín thác đầu tư bất động sản (REITs) hạ tầng xanh, thông qua cơ chế định giá thị trường để biến hiệu quả giảm phát thải thành lợi tức đầu tư có thể dự báo và bền vững.",
    "questionVi": "Theo đoạn phân tích, hai giải pháp thể chế cốt lõi để thu hút nguồn vốn tư nhân vào đầu tư chuyển đổi xanh là gì?",
    "options": [
      "Thiết lập tiêu chuẩn phân loại xanh cùng chế độ công bố thông tin bắt buộc để chống 'tẩy xanh (洗绿)', và phát triển thị trường tín chỉ carbon, trái phiếu chuyển đổi để biến hiệu quả giảm phát thải thành lợi tức đầu tư bền vững",
      "Cấm hoàn toàn vốn tư nhân tham gia vào các dự án năng lượng sạch",
      "Cho phép doanh nghiệp tự tuyên bố dự án xanh mà không cần kiểm chứng",
      "Tăng thuế đối với các dự án điện mặt trời và điện gió"
    ],
    "correctAnswer": "Thiết lập tiêu chuẩn phân loại xanh cùng chế độ công bố thông tin bắt buộc để chống 'tẩy xanh (洗绿)', và phát triển thị trường tín chỉ carbon, trái phiếu chuyển đổi để biến hiệu quả giảm phát thải thành lợi tức đầu tư bền vững",
    "explanationVi": "Đoạn văn nêu rõ 2 bước: '首先，必须建立统一透明的绿色分类标准与强制性环境信息披露制度，严防...“洗绿”...；其次，应大力发展碳排放权交易市场、转型债券...'."
  },
  ...LISTENING_TASKS_EXTRA,
];
