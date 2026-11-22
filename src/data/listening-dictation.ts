import type { HSKLevel, SubDifficulty } from "@/types";

export interface DictationSentence {
  id: string;
  textZh: string;
  pinyin: string;
  translationVi: string;
  priorityKeywords?: string[];
}

export interface DictationLesson {
  id: string;
  title: string;
  titleZh: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  topic: string;
  descriptionVi: string;
  sentences: DictationSentence[];
}

export const DICTATION_LESSONS: DictationLesson[] = [
  {
    "id": "dict-hsk0-basic",
    "title": "Nhập môn Phiên âm Pinyin & 4 Thanh điệu cốt lõi",
    "titleZh": "拼音与四声基础",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Phát âm & Pinyin",
    "descriptionVi": "Làm quen với chữ Hán cơ bản nhất, 4 thanh điệu và các câu chào hỏi đầu đời cho người mới bắt đầu từ con số 0.",
    "sentences": [
      {
        "id": "dict-hsk0-basic-s1",
        "textZh": "你好！",
        "pinyin": "Nǐ hǎo!",
        "translationVi": "Xin chào!",
        "priorityKeywords": [
          "你好"
        ]
      },
      {
        "id": "dict-hsk0-basic-s2",
        "textZh": "您好，老师！",
        "pinyin": "Nín hǎo, lǎoshī!",
        "translationVi": "Chào ngài, thưa thầy/cô!",
        "priorityKeywords": [
          "您好",
          "老师"
        ]
      },
      {
        "id": "dict-hsk0-basic-s3",
        "textZh": "谢谢你。",
        "pinyin": "Xièxie nǐ.",
        "translationVi": "Cảm ơn bạn.",
        "priorityKeywords": [
          "谢谢"
        ]
      },
      {
        "id": "dict-hsk0-basic-s4",
        "textZh": "不客气。",
        "pinyin": "Bú kèqi.",
        "translationVi": "Đừng khách sáo.",
        "priorityKeywords": [
          "不客气"
        ]
      },
      {
        "id": "dict-hsk0-basic-s5",
        "textZh": "对不起。",
        "pinyin": "Duìbuqǐ.",
        "translationVi": "Xin lỗi.",
        "priorityKeywords": [
          "对不起"
        ]
      },
      {
        "id": "dict-hsk0-basic-s6",
        "textZh": "没关系。",
        "pinyin": "Méi guānxi.",
        "translationVi": "Không sao đâu.",
        "priorityKeywords": [
          "没关系"
        ]
      },
      {
        "id": "dict-hsk0-basic-s7",
        "textZh": "再见，明天见。",
        "pinyin": "Zàijiàn, míngtiān jiàn.",
        "translationVi": "Tạm biệt, ngày mai gặp lại.",
        "priorityKeywords": [
          "再见",
          "明天"
        ]
      },
      {
        "id": "dict-hsk0-basic-s8",
        "textZh": "我姓王。",
        "pinyin": "Wǒ xìng Wáng.",
        "translationVi": "Tôi họ Vương.",
        "priorityKeywords": [
          "姓",
          "王"
        ]
      },
      {
        "id": "dict-hsk0-basic-s9",
        "textZh": "我叫小兰。",
        "pinyin": "Wǒ jiào Xiǎolán.",
        "translationVi": "Tôi tên là Tiểu Lan.",
        "priorityKeywords": [
          "叫"
        ]
      },
      {
        "id": "dict-hsk0-basic-s10",
        "textZh": "你是哪国人？",
        "pinyin": "Nǐ shì nǎ guó rén?",
        "translationVi": "Bạn là người nước nào?",
        "priorityKeywords": [
          "哪国",
          "人"
        ]
      },
      {
        "id": "dict-hsk0-basic-s11",
        "textZh": "我是越南人。",
        "pinyin": "Wǒ shì Yuènán rén.",
        "translationVi": "Tôi là người Việt Nam.",
        "priorityKeywords": [
          "越南人"
        ]
      },
      {
        "id": "dict-hsk0-basic-s12",
        "textZh": "他是中国人。",
        "pinyin": "Tā shì Zhōngguó rén.",
        "translationVi": "Anh ấy là người Trung Quốc.",
        "priorityKeywords": [
          "中国人"
        ]
      },
      {
        "id": "dict-hsk0-basic-s13",
        "textZh": "我学汉语。",
        "pinyin": "Wǒ xué Hànyǔ.",
        "translationVi": "Tôi học tiếng Hán.",
        "priorityKeywords": [
          "学",
          "汉语"
        ]
      },
      {
        "id": "dict-hsk0-basic-s14",
        "textZh": "汉语不难。",
        "pinyin": "Hànyǔ bù nán.",
        "translationVi": "Tiếng Hán không khó.",
        "priorityKeywords": [
          "汉语",
          "不难"
        ]
      },
      {
        "id": "dict-hsk0-basic-s15",
        "textZh": "这是什么？",
        "pinyin": "Zhè shì shénme?",
        "translationVi": "Đây là cái gì?",
        "priorityKeywords": [
          "什么"
        ]
      },
      {
        "id": "dict-hsk0-basic-s16",
        "textZh": "这是汉字。",
        "pinyin": "Zhè shì Hànzì.",
        "translationVi": "Đây là chữ Hán.",
        "priorityKeywords": [
          "汉字"
        ]
      },
      {
        "id": "dict-hsk0-basic-s17",
        "textZh": "我喝茶。",
        "pinyin": "Wǒ hē chá.",
        "translationVi": "Tôi uống trà.",
        "priorityKeywords": [
          "喝茶"
        ]
      },
      {
        "id": "dict-hsk0-basic-s18",
        "textZh": "妈妈爱我。",
        "pinyin": "Māma ài wǒ.",
        "translationVi": "Mẹ yêu tôi.",
        "priorityKeywords": [
          "妈妈",
          "爱"
        ]
      },
      {
        "id": "dict-hsk0-basic-s19",
        "textZh": "今天很好。",
        "pinyin": "Jīntiān hěn hǎo.",
        "translationVi": "Hôm nay rất tốt.",
        "priorityKeywords": [
          "今天",
          "很好"
        ]
      },
      {
        "id": "dict-hsk0-basic-s20",
        "textZh": "我们去学校。",
        "pinyin": "Wǒmen qù xuéxiào.",
        "translationVi": "Chúng tôi đi đến trường học.",
        "priorityKeywords": [
          "我们",
          "学校"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk0-advanced",
    "title": "Biến điệu Thanh 3, Chữ 一 / 不 & 50 Bộ thủ thông dụng",
    "titleZh": "变调规则与常用偏旁部首",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Biến điệu & Bộ thủ",
    "descriptionVi": "Thực hành nghe phân biệt biến điệu thanh 3, biến điệu của 一 (yī) và 不 (bù), cùng các câu chứa chữ Hán theo bộ thủ cốt lõi.",
    "sentences": [
      {
        "id": "dict-hsk0-advanced-s1",
        "textZh": "我很好，你呢？",
        "pinyin": "Wǒ hěn hǎo, nǐ ne?",
        "translationVi": "Tôi rất khỏe, còn bạn thì sao?",
        "priorityKeywords": [
          "很好"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s2",
        "textZh": "请给我一杯水。",
        "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
        "translationVi": "Xin cho tôi một cốc nước.",
        "priorityKeywords": [
          "一杯",
          "水"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s3",
        "textZh": "我有一本汉语书。",
        "pinyin": "Wǒ yǒu yì běn Hànyǔ shū.",
        "translationVi": "Tôi có một quyển sách tiếng Hán.",
        "priorityKeywords": [
          "一本",
          "汉语"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s4",
        "textZh": "今天不高也不冷。",
        "pinyin": "Jīntiān bù gāo yě bù lěng.",
        "translationVi": "Hôm nay không cao cũng không lạnh.",
        "priorityKeywords": [
          "不冷"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s5",
        "textZh": "他不去北京。",
        "pinyin": "Tā bú qù Běijīng.",
        "translationVi": "Anh ấy không đi Bắc Kinh.",
        "priorityKeywords": [
          "不去",
          "北京"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s6",
        "textZh": "是不是你的老师？",
        "pinyin": "Shì bu shì nǐ de lǎoshī?",
        "translationVi": "Có phải là giáo viên của bạn không?",
        "priorityKeywords": [
          "是不是",
          "老师"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s7",
        "textZh": "一个人走在大街上。",
        "pinyin": "Yí gè rén zǒu zài dàjiē shàng.",
        "translationVi": "Một người đi trên phố lớn.",
        "priorityKeywords": [
          "一个人",
          "大街"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s8",
        "textZh": "我们一起学习汉字。",
        "pinyin": "Wǒmen yìqǐ xuéxí Hànzì.",
        "translationVi": "Chúng tôi cùng nhau học chữ Hán.",
        "priorityKeywords": [
          "一起",
          "汉字"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s9",
        "textZh": "水字有四个笔画。",
        "pinyin": "Shuǐ zì yǒu sì gè bǐhuà.",
        "translationVi": "Chữ Thủy có bốn nét bút.",
        "priorityKeywords": [
          "笔画"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s10",
        "textZh": "好字左边是女字旁。",
        "pinyin": "Hǎo zì zuǒbiān shì nǚzìpáng.",
        "translationVi": "Chữ Hảo bên trái là bộ Nữ.",
        "priorityKeywords": [
          "左边",
          "女字旁"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s11",
        "textZh": "河字左边是三点水。",
        "pinyin": "Hé zì zuǒbiān shì sāndiǎnshuǐ.",
        "translationVi": "Chữ Hà bên trái là bộ Tam chấm thủy.",
        "priorityKeywords": [
          "三点水"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s12",
        "textZh": "写汉字要先横后竖。",
        "pinyin": "Xiě Hànzì yào xiān héng hòu shù.",
        "translationVi": "Viết chữ Hán phải ngang trước sổ sau.",
        "priorityKeywords": [
          "先横后竖"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s13",
        "textZh": "先撇后捺是基本规则。",
        "pinyin": "Xiān piě hòu nà shì jīběn guīzé.",
        "translationVi": "Phẩy trước mác sau là quy tắc cơ bản.",
        "priorityKeywords": [
          "先撇后捺",
          "规则"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s14",
        "textZh": "从上到下，从左到右。",
        "pinyin": "Cóng shàng dào xià, cóng zuǒ dào yòu.",
        "translationVi": "Từ trên xuống dưới, từ trái sang phải.",
        "priorityKeywords": [
          "从上到下",
          "从左到右"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s15",
        "textZh": "请你大声读一遍。",
        "pinyin": "Qǐng nǐ dàshēng dú yí biàn.",
        "translationVi": "Xin bạn đọc to một lần.",
        "priorityKeywords": [
          "大声",
          "一遍"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s16",
        "textZh": "他的发音非常标准。",
        "pinyin": "Tā de fāyīn fēicháng biāozhǔn.",
        "translationVi": "Phát âm của anh ấy vô cùng chuẩn.",
        "priorityKeywords": [
          "发音",
          "标准"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s17",
        "textZh": "注意第三声的变调。",
        "pinyin": "Zhùyì dì-sān shēng de biàndiào.",
        "translationVi": "Chú ý biến điệu của thanh thứ ba.",
        "priorityKeywords": [
          "第三声",
          "变调"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s18",
        "textZh": "每天练习写十个字。",
        "pinyin": "Měitiān liànxí xiě shí gè zì.",
        "translationVi": "Mỗi ngày luyện viết mười chữ.",
        "priorityKeywords": [
          "每天",
          "练习"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s19",
        "textZh": "这个部首表示和嘴有关。",
        "pinyin": "Zhège bùshǒu biǎoshì hé zuǐ yǒuguān.",
        "translationVi": "Bộ thủ này biểu thị liên quan đến miệng.",
        "priorityKeywords": [
          "部首",
          "有关"
        ]
      },
      {
        "id": "dict-hsk0-advanced-s20",
        "textZh": "汉字文化非常有趣。",
        "pinyin": "Hànzì wénhuà fēicháng yǒuqù.",
        "translationVi": "Văn hóa chữ Hán vô cùng thú vị.",
        "priorityKeywords": [
          "文化",
          "有趣"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk1-basic",
    "title": "Giao tiếp hàng ngày, Gia đình & Thời gian",
    "titleZh": "日常问候与家庭时间",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Đời sống & Gia đình",
    "descriptionVi": "Nghe chép chính tả các câu giao tiếp HSK 1 cơ bản về giới thiệu gia đình, tuổi tác, ngày tháng và giờ giấc.",
    "sentences": [
      {
        "id": "dict-hsk1-basic-s1",
        "textZh": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "translationVi": "Nhà bạn có mấy người?",
        "priorityKeywords": [
          "几口人"
        ]
      },
      {
        "id": "dict-hsk1-basic-s2",
        "textZh": "我家有四口人。",
        "pinyin": "Wǒ jiā yǒu sì kǒu rén.",
        "translationVi": "Nhà tôi có bốn người.",
        "priorityKeywords": [
          "四口人"
        ]
      },
      {
        "id": "dict-hsk1-basic-s3",
        "textZh": "我爸爸是医生。",
        "pinyin": "Wǒ bàba shì yīshēng.",
        "translationVi": "Bố tôi là bác sĩ.",
        "priorityKeywords": [
          "爸爸",
          "医生"
        ]
      },
      {
        "id": "dict-hsk1-basic-s4",
        "textZh": "我妈妈在医院工作。",
        "pinyin": "Wǒ māma zài yīyuàn gōngzuò.",
        "translationVi": "Mẹ tôi làm việc ở bệnh viện.",
        "priorityKeywords": [
          "医院",
          "工作"
        ]
      },
      {
        "id": "dict-hsk1-basic-s5",
        "textZh": "你今年多大了？",
        "pinyin": "Nǐ jīnnián duō dà le?",
        "translationVi": "Năm nay bạn bao nhiêu tuổi rồi?",
        "priorityKeywords": [
          "今年",
          "多大"
        ]
      },
      {
        "id": "dict-hsk1-basic-s6",
        "textZh": "我今年二十岁。",
        "pinyin": "Wǒ jīnnián èrshí suì.",
        "translationVi": "Năm nay tôi hai mươi tuổi.",
        "priorityKeywords": [
          "二十岁"
        ]
      },
      {
        "id": "dict-hsk1-basic-s7",
        "textZh": "现在几点了？",
        "pinyin": "Xiànzài jǐ diǎn le?",
        "translationVi": "Bây giờ là mấy giờ rồi?",
        "priorityKeywords": [
          "现在",
          "几点"
        ]
      },
      {
        "id": "dict-hsk1-basic-s8",
        "textZh": "现在是上午八点半。",
        "pinyin": "Xiànzài shì shàngwǔ bā diǎn bàn.",
        "translationVi": "Bây giờ là tám giờ rưỡi sáng.",
        "priorityKeywords": [
          "上午",
          "八点半"
        ]
      },
      {
        "id": "dict-hsk1-basic-s9",
        "textZh": "今天是几月几号？",
        "pinyin": "Jīntiān shì jǐ yuè jǐ hào?",
        "translationVi": "Hôm nay là ngày mấy tháng mấy?",
        "priorityKeywords": [
          "几月",
          "几号"
        ]
      },
      {
        "id": "dict-hsk1-basic-s10",
        "textZh": "今天是十月五号。",
        "pinyin": "Jīntiān shì shí yuè wǔ hào.",
        "translationVi": "Hôm nay là ngày mùng năm tháng mười.",
        "priorityKeywords": [
          "十月",
          "五号"
        ]
      },
      {
        "id": "dict-hsk1-basic-s11",
        "textZh": "明天是星期六。",
        "pinyin": "Míngtiān shì xīngqīliù.",
        "translationVi": "Ngày mai là thứ Bảy.",
        "priorityKeywords": [
          "明天",
          "星期六"
        ]
      },
      {
        "id": "dict-hsk1-basic-s12",
        "textZh": "我中午十二点吃午饭。",
        "pinyin": "Wǒ zhōngwǔ shí'èr diǎn chī wǔfàn.",
        "translationVi": "Tôi ăn bữa trưa lúc mười hai giờ trưa.",
        "priorityKeywords": [
          "中午",
          "午饭"
        ]
      },
      {
        "id": "dict-hsk1-basic-s13",
        "textZh": "你喜欢吃中国菜吗？",
        "pinyin": "Nǐ xǐhuan chī Zhōngguó cài ma?",
        "translationVi": "Bạn có thích ăn món Trung Quốc không?",
        "priorityKeywords": [
          "喜欢",
          "中国菜"
        ]
      },
      {
        "id": "dict-hsk1-basic-s14",
        "textZh": "我很喜欢喝奶茶。",
        "pinyin": "Wǒ hěn xǐhuan hē nǎichá.",
        "translationVi": "Tôi rất thích uống trà sữa.",
        "priorityKeywords": [
          "喜欢",
          "奶茶"
        ]
      },
      {
        "id": "dict-hsk1-basic-s15",
        "textZh": "桌子上有一台电脑。",
        "pinyin": "Zhuōzi shàng yǒu yì tái diànnǎo.",
        "translationVi": "Trên bàn có một chiếc máy tính.",
        "priorityKeywords": [
          "桌子",
          "电脑"
        ]
      },
      {
        "id": "dict-hsk1-basic-s16",
        "textZh": "我的小狗在椅子下面。",
        "pinyin": "Wǒ de xiǎogǒu zài yǐzi xiàmiàn.",
        "translationVi": "Chú chó nhỏ của tôi ở dưới cái ghế.",
        "priorityKeywords": [
          "小狗",
          "椅子"
        ]
      },
      {
        "id": "dict-hsk1-basic-s17",
        "textZh": "她会说一点儿汉语。",
        "pinyin": "Tā huì shuō yìdiǎnr Hànyǔ.",
        "translationVi": "Cô ấy biết nói một chút tiếng Hán.",
        "priorityKeywords": [
          "一点儿",
          "汉语"
        ]
      },
      {
        "id": "dict-hsk1-basic-s18",
        "textZh": "这个汉字怎么读？",
        "pinyin": "Zhège Hànzì zěnme dú?",
        "translationVi": "Chữ Hán này đọc thế nào?",
        "priorityKeywords": [
          "汉字",
          "怎么读"
        ]
      },
      {
        "id": "dict-hsk1-basic-s19",
        "textZh": "我下午去商店买水果。",
        "pinyin": "Wǒ xiàwǔ qù shāngdiàn mǎi shuǐguǒ.",
        "translationVi": "Chiều nay tôi đi cửa hàng mua hoa quả.",
        "priorityKeywords": [
          "商店",
          "水果"
        ]
      },
      {
        "id": "dict-hsk1-basic-s20",
        "textZh": "晚上我们在家看电视。",
        "pinyin": "Wǎnshang wǒmen zài jiā kàn diànshì.",
        "translationVi": "Buổi tối chúng tôi ở nhà xem tivi.",
        "priorityKeywords": [
          "晚上",
          "看电视"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk1-advanced",
    "title": "Mua sắm, Gọi món Nhà hàng & Hỏi đường cơ bản",
    "titleZh": "餐厅点餐与购物问路",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Mua sắm & Ẩm thực",
    "descriptionVi": "Luyện nghe chép các câu hội thoại thực tế khi đi mua quần áo, hỏi giá tiền, gọi trà sữa và bắt taxi.",
    "sentences": [
      {
        "id": "dict-hsk1-advanced-s1",
        "textZh": "请问，这个多少钱？",
        "pinyin": "Qǐngwèn, zhège duōshao qián?",
        "translationVi": "Xin hỏi, cái này bao nhiêu tiền?",
        "priorityKeywords": [
          "请问",
          "多少钱"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s2",
        "textZh": "这件衣服八十块钱。",
        "pinyin": "Zhè jiàn yīfu bāshí kuài qián.",
        "translationVi": "Bộ quần áo này giá tám mươi tệ.",
        "priorityKeywords": [
          "衣服",
          "块钱"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s3",
        "textZh": "苹果怎么卖？",
        "pinyin": "Píngguǒ zěnme mài?",
        "translationVi": "Táo bán thế nào?",
        "priorityKeywords": [
          "苹果",
          "怎么卖"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s4",
        "textZh": "十块钱三斤苹果。",
        "pinyin": "Shí kuài qián sān jīn píngguǒ.",
        "translationVi": "Mười tệ ba cân táo.",
        "priorityKeywords": [
          "三斤",
          "苹果"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s5",
        "textZh": "我想买两杯冰奶茶。",
        "pinyin": "Wǒ xiǎng mǎi liǎng bēi bīng nǎichá.",
        "translationVi": "Tôi muốn mua hai cốc trà sữa đá.",
        "priorityKeywords": [
          "两杯",
          "奶茶"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s6",
        "textZh": "你要大杯还是小杯？",
        "pinyin": "Nǐ yào dà bēi háishi xiǎo bēi?",
        "translationVi": "Bạn muốn cốc lớn hay cốc nhỏ?",
        "priorityKeywords": [
          "大杯",
          "小杯"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s7",
        "textZh": "请给我一碗牛肉面。",
        "pinyin": "Qǐng gěi wǒ yì wǎn niúròumiàn.",
        "translationVi": "Xin cho tôi một bát mì bò.",
        "priorityKeywords": [
          "一碗",
          "牛肉面"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s8",
        "textZh": "服务员，买单！",
        "pinyin": "Fúwùyuán, mǎidān!",
        "translationVi": "Phục vụ ơi, tính tiền!",
        "priorityKeywords": [
          "服务员",
          "买单"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s9",
        "textZh": "可以用微信支付吗？",
        "pinyin": "Kěyǐ yòng Wēixìn zhīfù ma?",
        "translationVi": "Có thể thanh toán bằng WeChat không?",
        "priorityKeywords": [
          "微信",
          "支付"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s10",
        "textZh": "请问，火车站在哪儿？",
        "pinyin": "Qǐngwèn, huǒchēzhàn zài nǎr?",
        "translationVi": "Xin hỏi, ga tàu hỏa ở đâu?",
        "priorityKeywords": [
          "火车站",
          "在哪儿"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s11",
        "textZh": "学校在医院的前面。",
        "pinyin": "Xuéxiào zài yīyuàn de qiánmiàn.",
        "translationVi": "Trường học ở phía trước bệnh viện.",
        "priorityKeywords": [
          "医院",
          "前面"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s12",
        "textZh": "我们坐出租车去机场吧。",
        "pinyin": "Wǒmen zuò chūzūchē qù jīchǎng ba.",
        "translationVi": "Chúng ta đi taxi ra sân bay nhé.",
        "priorityKeywords": [
          "出租车",
          "机场"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s13",
        "textZh": "今天天气太热了。",
        "pinyin": "Jīntiān tiānqì tài rè le.",
        "translationVi": "Thời tiết hôm nay nóng quá.",
        "priorityKeywords": [
          "天气",
          "太热"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s14",
        "textZh": "北京的冬天很冷。",
        "pinyin": "Běijīng de dōngtiān hěn lěng.",
        "translationVi": "Mùa đông ở Bắc Kinh rất lạnh.",
        "priorityKeywords": [
          "冬天",
          "很冷"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s15",
        "textZh": "昨天我去朋友家吃饭了。",
        "pinyin": "Zuótiān wǒ qù péngyou jiā chīfàn le.",
        "translationVi": "Hôm qua tôi đến nhà bạn ăn cơm.",
        "priorityKeywords": [
          "朋友",
          "吃饭"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s16",
        "textZh": "喂，请问张先生在家吗？",
        "pinyin": "Wéi, qǐngwèn Zhāng xiānsheng zài jiā ma?",
        "translationVi": "Alo, xin hỏi ông Trương có ở nhà không?",
        "priorityKeywords": [
          "先生",
          "在家"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s17",
        "textZh": "他不在，他在公司开会。",
        "pinyin": "Tā bú zài, tā zài gōngsī kāihuì.",
        "translationVi": "Ông ấy không có ở đây, ông ấy đang họp ở công ty.",
        "priorityKeywords": [
          "公司",
          "开会"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s18",
        "textZh": "我下个月去中国旅游。",
        "pinyin": "Wǒ xià gè yuè qù Zhōngguó lǚyóu.",
        "translationVi": "Tháng sau tôi đi du lịch Trung Quốc.",
        "priorityKeywords": [
          "下个月",
          "旅游"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s19",
        "textZh": "祝你一路平安！",
        "pinyin": "Zhù nǐ yílù píng'ān!",
        "translationVi": "Chúc bạn thượng lộ bình an!",
        "priorityKeywords": [
          "一路",
          "平安"
        ]
      },
      {
        "id": "dict-hsk1-advanced-s20",
        "textZh": "非常感谢您的帮助。",
        "pinyin": "Fēicháng gǎnxiè nín de bāngzhù.",
        "translationVi": "Vô cùng cảm ơn sự giúp đỡ của ngài.",
        "priorityKeywords": [
          "感谢",
          "帮助"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk2-basic",
    "title": "Sinh hoạt thường nhật, Giao thông & Thời tiết",
    "titleZh": "日常生活与交通出行",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Sinh hoạt & Đi lại",
    "descriptionVi": "Nghe chép chính tả HSK 2 về thói quen hàng ngày, phương tiện giao thông công cộng, thời tiết và sức khỏe.",
    "sentences": [
      {
        "id": "dict-hsk2-basic-s1",
        "textZh": "我每天早上六点起床。",
        "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.",
        "translationVi": "Mỗi sáng tôi thức dậy lúc sáu giờ.",
        "priorityKeywords": [
          "每天",
          "起床"
        ]
      },
      {
        "id": "dict-hsk2-basic-s2",
        "textZh": "他常常去公园跑步。",
        "pinyin": "Tā chángcháng qù gōngyuán pǎobù.",
        "translationVi": "Anh ấy thường xuyên đi công viên chạy bộ.",
        "priorityKeywords": [
          "常常",
          "跑步"
        ]
      },
      {
        "id": "dict-hsk2-basic-s3",
        "textZh": "从我家到公司坐地铁要半个小时。",
        "pinyin": "Cóng wǒ jiā dào gōngsī zuò dìtiě yào bàn gè xiǎoshí.",
        "translationVi": "Từ nhà tôi đến công ty đi tàu điện ngầm mất nửa tiếng.",
        "priorityKeywords": [
          "地铁",
          "小时"
        ]
      },
      {
        "id": "dict-hsk2-basic-s4",
        "textZh": "外面正在下雨，别忘了带伞。",
        "pinyin": "Wàimiàn zhèngzài xiàyǔ, bié wàng le dài sǎn.",
        "translationVi": "Bên ngoài đang mưa, đừng quên mang ô.",
        "priorityKeywords": [
          "下雨",
          "带伞"
        ]
      },
      {
        "id": "dict-hsk2-basic-s5",
        "textZh": "今天比昨天冷多了。",
        "pinyin": "Jīntiān bǐ zuótiān lěng duō le.",
        "translationVi": "Hôm nay lạnh hơn hôm qua nhiều.",
        "priorityKeywords": [
          "昨天",
          "冷多了"
        ]
      },
      {
        "id": "dict-hsk2-basic-s6",
        "textZh": "你穿这件红衣服真好看。",
        "pinyin": "Nǐ chuān zhè jiàn hóng yīfu zhēn hǎokàn.",
        "translationVi": "Bạn mặc chiếc áo đỏ này thật đẹp.",
        "priorityKeywords": [
          "穿",
          "好看"
        ]
      },
      {
        "id": "dict-hsk2-basic-s7",
        "textZh": "我昨天晚上十一点才睡觉。",
        "pinyin": "Wǒ zuótiān wǎnshang shíyī diǎn cái shuìjiào.",
        "translationVi": "Tối qua mười một giờ tôi mới đi ngủ.",
        "priorityKeywords": [
          "晚上",
          "睡觉"
        ]
      },
      {
        "id": "dict-hsk2-basic-s8",
        "textZh": "身体不舒服就要去医院看病。",
        "pinyin": "Shēntǐ bù shūfu jiù yào qù yīyuàn kànbìng.",
        "translationVi": "Cơ thể không khỏe thì phải đi bệnh viện khám bệnh.",
        "priorityKeywords": [
          "不舒服",
          "看病"
        ]
      },
      {
        "id": "dict-hsk2-basic-s9",
        "textZh": "医生让我多喝热水，多休息。",
        "pinyin": "Yīshēng ràng wǒ duō hē rèshuǐ, duō xiūxi.",
        "translationVi": "Bác sĩ bảo tôi uống nhiều nước ấm, nghỉ ngơi nhiều.",
        "priorityKeywords": [
          "热水",
          "休息"
        ]
      },
      {
        "id": "dict-hsk2-basic-s10",
        "textZh": "这道题太难了，我不会做。",
        "pinyin": "Zhè dào tí tài nán le, wǒ bú huì zuò.",
        "translationVi": "Câu hỏi này khó quá, tôi không biết làm.",
        "priorityKeywords": [
          "太难",
          "不会"
        ]
      },
      {
        "id": "dict-hsk2-basic-s11",
        "textZh": "我已经吃过早饭了。",
        "pinyin": "Wǒ yǐjīng chī guo zǎofàn le.",
        "translationVi": "Tôi đã ăn sáng rồi.",
        "priorityKeywords": [
          "已经",
          "早饭"
        ]
      },
      {
        "id": "dict-hsk2-basic-s12",
        "textZh": "你去过上海没有？",
        "pinyin": "Nǐ qù guo Shànghǎi méiyǒu?",
        "translationVi": "Bạn đã từng đi Thượng Hải chưa?",
        "priorityKeywords": [
          "去过",
          "上海"
        ]
      },
      {
        "id": "dict-hsk2-basic-s13",
        "textZh": "我去过北京，没去过上海。",
        "pinyin": "Wǒ qù guo Běijīng, méi qù guo Shànghǎi.",
        "translationVi": "Tôi từng đi Bắc Kinh rồi, chưa từng đi Thượng Hải.",
        "priorityKeywords": [
          "北京",
          "上海"
        ]
      },
      {
        "id": "dict-hsk2-basic-s14",
        "textZh": "电影七点半开始，我们快走吧。",
        "pinyin": "Diànyǐng qī diǎn bàn kāishǐ, wǒmen kuài zǒu ba.",
        "translationVi": "Phim bắt đầu lúc bảy giờ rưỡi, chúng ta đi nhanh thôi.",
        "priorityKeywords": [
          "电影",
          "开始"
        ]
      },
      {
        "id": "dict-hsk2-basic-s15",
        "textZh": "公共汽车站就在前面往左拐。",
        "pinyin": "Gōnggòng qìchēzhàn jiù zài qiánmiàn wǎng zuǒ guǎi.",
        "translationVi": "Trạm xe buýt ở ngay phía trước rẽ trái.",
        "priorityKeywords": [
          "汽车站",
          "往左"
        ]
      },
      {
        "id": "dict-hsk2-basic-s16",
        "textZh": "弟弟比我高五公分。",
        "pinyin": "Dìdi bǐ wǒ gāo wǔ gōngfēn.",
        "translationVi": "Em trai cao hơn tôi năm phân.",
        "priorityKeywords": [
          "弟弟",
          "高"
        ]
      },
      {
        "id": "dict-hsk2-basic-s17",
        "textZh": "房间里太黑了，请打开灯。",
        "pinyin": "Fángjiān lǐ tài hēi le, qǐng dǎkāi dēng.",
        "translationVi": "Trong phòng tối quá, làm ơn bật đèn lên.",
        "priorityKeywords": [
          "房间",
          "打开"
        ]
      },
      {
        "id": "dict-hsk2-basic-s18",
        "textZh": "这本书我看了三遍还没看懂。",
        "pinyin": "Zhè běn shū wǒ kàn le sān biàn hái méi kàndǒng.",
        "translationVi": "Cuốn sách này tôi đọc ba lần rồi vẫn chưa hiểu.",
        "priorityKeywords": [
          "三遍",
          "看懂"
        ]
      },
      {
        "id": "dict-hsk2-basic-s19",
        "textZh": "明天是我女朋友的生日。",
        "pinyin": "Míngtiān shì wǒ nǚpéngyou de shēngrì.",
        "translationVi": "Ngày mai là sinh nhật bạn gái tôi.",
        "priorityKeywords": [
          "女朋友",
          "生日"
        ]
      },
      {
        "id": "dict-hsk2-basic-s20",
        "textZh": "我准备送她一块手表。",
        "pinyin": "Wǒ zhǔnbèi sòng tā yí kuài shǒubiǎo.",
        "translationVi": "Tôi chuẩn bị tặng cô ấy một chiếc đồng hồ đeo tay.",
        "priorityKeywords": [
          "准备",
          "手表"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk2-advanced",
    "title": "Mua hàng Taobao, Đặt phòng khách sạn & Du lịch",
    "titleZh": "网购快递与酒店预订",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Thương mại & Du lịch",
    "descriptionVi": "Nghe chép các mẫu câu thực tế khi mua hàng online trên Taobao, nhận chuyển phát nhanh và làm thủ tục khách sạn.",
    "sentences": [
      {
        "id": "dict-hsk2-advanced-s1",
        "textZh": "我在淘宝上买了一双运动鞋。",
        "pinyin": "Wǒ zài Táobǎo shàng mǎi le yì shuāng yùndòngxié.",
        "translationVi": "Tôi đã mua một đôi giày thể thao trên Taobao.",
        "priorityKeywords": [
          "淘宝",
          "运动鞋"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s2",
        "textZh": "这双鞋比商场的便宜一半。",
        "pinyin": "Zhè shuāng xié bǐ shāngchǎng de piányi yíbàn.",
        "translationVi": "Đôi giày này rẻ hơn ở trung tâm thương mại một nửa.",
        "priorityKeywords": [
          "商场",
          "便宜"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s3",
        "textZh": "请问今天能发货吗？",
        "pinyin": "Qǐngwèn jīntiān néng fāhuò ma?",
        "translationVi": "Xin hỏi hôm nay có thể gửi hàng đi không?",
        "priorityKeywords": [
          "今天",
          "发货"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s4",
        "textZh": "包邮吗？发什么快递？",
        "pinyin": "Bāoyóu ma? Fā shénme kuàidì?",
        "translationVi": "Có miễn phí vận chuyển không? Gửi chuyển phát nhanh nào?",
        "priorityKeywords": [
          "包邮",
          "快递"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s5",
        "textZh": "您的快递已经到了小区门口。",
        "pinyin": "Nín de kuàidì yǐjīng dào le xiǎoqū ménkǒu.",
        "translationVi": "Kiện hàng của ngài đã đến cổng khu dân cư rồi.",
        "priorityKeywords": [
          "快递",
          "门口"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s6",
        "textZh": "你好，我预订了一个标准间。",
        "pinyin": "Nǐ hǎo, wǒ yùdìng le yí gè biāozhǔnjiān.",
        "translationVi": "Xin chào, tôi đã đặt trước một phòng tiêu chuẩn.",
        "priorityKeywords": [
          "预订",
          "标准间"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s7",
        "textZh": "请出示您的护照或者身份证。",
        "pinyin": "Qǐng chūshì nín de hùzhào huòzhě shēnfènzhèng.",
        "translationVi": "Vui lòng xuất trình hộ chiếu hoặc căn cước của ngài.",
        "priorityKeywords": [
          "护照",
          "身份证"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s8",
        "textZh": "我们的房间在八楼八零二号。",
        "pinyin": "Wǒmen de fángjiān zài bā lóu bālíng'èr hào.",
        "translationVi": "Phòng của chúng tôi ở số 802 tầng 8.",
        "priorityKeywords": [
          "房间",
          "八楼"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s9",
        "textZh": "酒店的早餐从六点半到九点半。",
        "pinyin": "Jiǔdiàn de zǎocān cóng liù diǎn bàn dào jiǔ diǎn bàn.",
        "translationVi": "Bữa sáng của khách sạn từ 6 giờ 30 đến 9 giờ 30.",
        "priorityKeywords": [
          "酒店",
          "早餐"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s10",
        "textZh": "请问房间的无线网密码是多少？",
        "pinyin": "Qǐngwèn fángjiān de wúxiànwǎng mìmǎ shì duōshao?",
        "translationVi": "Xin hỏi mật khẩu Wi-Fi của phòng là bao nhiêu?",
        "priorityKeywords": [
          "无线网",
          "密码"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s11",
        "textZh": "我想明天中午十二点退房。",
        "pinyin": "Wǒ xiǎng míngtiān zhōngwǔ shí'èr diǎn tuìfáng.",
        "translationVi": "Tôi muốn trả phòng vào 12 giờ trưa mai.",
        "priorityKeywords": [
          "中午",
          "退房"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s12",
        "textZh": "去高铁站坐几路公交车？",
        "pinyin": "Qù gāotiězhàn zuò jǐ lù gōngjiāochē?",
        "translationVi": "Đi ga tàu cao tốc thì bắt xe buýt tuyến số mấy?",
        "priorityKeywords": [
          "高铁站",
          "公交车"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s13",
        "textZh": "坐地铁二号线可以直达机场。",
        "pinyin": "Zuò dìtiě èr hào xiàn kěyǐ zhídá jīchǎng.",
        "translationVi": "Đi tàu điện ngầm tuyến số 2 có thể tới thẳng sân bay.",
        "priorityKeywords": [
          "地铁",
          "直达"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s14",
        "textZh": "这张机票可以改签吗？",
        "pinyin": "Zhè zhāng jīpiào kěyǐ gǎiqiān ma?",
        "translationVi": "Vé máy bay này có thể đổi giờ bay không?",
        "priorityKeywords": [
          "机票",
          "改签"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s15",
        "textZh": "请把手机调成静音模式。",
        "pinyin": "Qǐng bǎ shǒujī tiáochéng jìngyīn móshì.",
        "translationVi": "Vui lòng chuyển điện thoại sang chế độ im lặng.",
        "priorityKeywords": [
          "手机",
          "静音"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s16",
        "textZh": "这家饭店的服务态度非常好。",
        "pinyin": "Zhè jiā fàndiàn de fúwù tàidu fēicháng hǎo.",
        "translationVi": "Thái độ phục vụ của nhà hàng này rất tốt.",
        "priorityKeywords": [
          "服务",
          "态度"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s17",
        "textZh": "如果你有时间，欢迎来越南玩。",
        "pinyin": "Rúguǒ nǐ yǒu shíjiān, huānyíng lái Yuènán wán.",
        "translationVi": "Nếu bạn có thời gian, chào mừng đến Việt Nam chơi.",
        "priorityKeywords": [
          "时间",
          "欢迎"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s18",
        "textZh": "我打算今年暑假去广州进货。",
        "pinyin": "Wǒ dǎsuàn jīnnián shǔjià qù Guǎngzhōu jìnhuò.",
        "translationVi": "Tôi dự định nghỉ hè năm nay đi Quảng Châu nhập hàng.",
        "priorityKeywords": [
          "打算",
          "进货"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s19",
        "textZh": "老板，买多一点可以打折吗？",
        "pinyin": "Lǎobǎn, mǎi duō yìdiǎn kěyǐ dǎzhé ma?",
        "translationVi": "Ông chủ, mua nhiều hơn một chút có được giảm giá không?",
        "priorityKeywords": [
          "老板",
          "打折"
        ]
      },
      {
        "id": "dict-hsk2-advanced-s20",
        "textZh": "质量没问题的话，下次我们还来。",
        "pinyin": "Zhìliàng méi wèntí de huà, xià cì wǒmen hái lái.",
        "translationVi": "Nếu chất lượng không có vấn đề gì, lần sau chúng tôi lại đến.",
        "priorityKeywords": [
          "质量",
          "问题"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk3-basic",
    "title": "Công sở, Lịch trình làm việc & Giao tiếp xã hội",
    "titleZh": "办公室工作与社交生活",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Công sở & Đời sống",
    "descriptionVi": "Nghe chép các câu giao tiếp văn phòng HSK 3: họp hành, gửi email, xin nghỉ phép và phối hợp công việc.",
    "sentences": [
      {
        "id": "dict-hsk3-basic-s1",
        "textZh": "请大家把会议资料准备好。",
        "pinyin": "Qǐng dàjiā bǎ huìyì zīliào zhǔnbèi hǎo.",
        "translationVi": "Xin mọi người hãy chuẩn bị xong tài liệu cuộc họp.",
        "priorityKeywords": [
          "会议",
          "资料"
        ]
      },
      {
        "id": "dict-hsk3-basic-s2",
        "textZh": "经理让你把这份报告发给他。",
        "pinyin": "Jīnglǐ ràng nǐ bǎ zhè fèn bàogào fā gěi tā.",
        "translationVi": "Giám đốc bảo bạn gửi bản báo cáo này cho ông ấy.",
        "priorityKeywords": [
          "经理",
          "报告"
        ]
      },
      {
        "id": "dict-hsk3-basic-s3",
        "textZh": "我刚给客户发了一封电子邮件。",
        "pinyin": "Wǒ gāng gěi kèhù fā le yì fēng diànzǐ yóujiàn.",
        "translationVi": "Tôi vừa gửi một bức thư điện tử cho khách hàng.",
        "priorityKeywords": [
          "客户",
          "电子邮件"
        ]
      },
      {
        "id": "dict-hsk3-basic-s4",
        "textZh": "明天的会议改到下午三点举行。",
        "pinyin": "Míngtiān de huìyì gǎi dào xiàwǔ sān diǎn jǔxíng.",
        "translationVi": "Cuộc họp ngày mai đổi sang tổ chức lúc ba giờ chiều.",
        "priorityKeywords": [
          "会议",
          "举行"
        ]
      },
      {
        "id": "dict-hsk3-basic-s5",
        "textZh": "因为感冒发烧，他今天请假了。",
        "pinyin": "Yīnwèi gǎnmào fāshāo, tā jīntiān qǐngjià le.",
        "translationVi": "Vì cảm cúm sốt nên hôm nay anh ấy xin nghỉ phép rồi.",
        "priorityKeywords": [
          "发烧",
          "请假"
        ]
      },
      {
        "id": "dict-hsk3-basic-s6",
        "textZh": "这台打印机又坏了，需要修理。",
        "pinyin": "Zhè tái dǎyìnjī yòu huài le, xūyào xiūlǐ.",
        "translationVi": "Chiếc máy in này lại hỏng rồi, cần phải sửa chữa.",
        "priorityKeywords": [
          "打印机",
          "修理"
        ]
      },
      {
        "id": "dict-hsk3-basic-s7",
        "textZh": "新来的同事对工作环境还不太熟悉。",
        "pinyin": "Xīn lái de tóngshì duì gōngzuò huánjìng hái bú tài shúxī.",
        "translationVi": "Đồng nghiệp mới đến vẫn chưa quen lắm với môi trường làm việc.",
        "priorityKeywords": [
          "同事",
          "熟悉"
        ]
      },
      {
        "id": "dict-hsk3-basic-s8",
        "textZh": "只要努力学习，汉语水平一定会提高。",
        "pinyin": "Zhǐyào nǔlì xuéxí, Hànyǔ shuǐpíng yídìng huì tígāo.",
        "translationVi": "Chỉ cần nỗ lực học tập, trình độ tiếng Hán nhất định sẽ nâng cao.",
        "priorityKeywords": [
          "水平",
          "提高"
        ]
      },
      {
        "id": "dict-hsk3-basic-s9",
        "textZh": "我把钥匙忘在办公室的抽屉里了。",
        "pinyin": "Wǒ bǎ yàoshi wàng zài bàngōngshì de chōuti lǐ le.",
        "translationVi": "Tôi để quên chìa khóa trong ngăn kéo văn phòng rồi.",
        "priorityKeywords": [
          "钥匙",
          "办公室"
        ]
      },
      {
        "id": "dict-hsk3-basic-s10",
        "textZh": "周末我喜欢在家里一边喝茶一边看书。",
        "pinyin": "Zhōumò wǒ xǐhuan zài jiālǐ yìbiān hē chá yìbiān kànshū.",
        "translationVi": "Cuối tuần tôi thích ở nhà vừa uống trà vừa đọc sách.",
        "priorityKeywords": [
          "周末",
          "一边"
        ]
      },
      {
        "id": "dict-hsk3-basic-s11",
        "textZh": "除了英语以外，她还会说流利的汉语。",
        "pinyin": "Chúle Yīngyǔ yǐwài, tā hái huì shuō liúlì de Hànyǔ.",
        "translationVi": "Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Hán lưu loát.",
        "priorityKeywords": [
          "除了",
          "流利"
        ]
      },
      {
        "id": "dict-hsk3-basic-s12",
        "textZh": "根据天气预报，明天下午会有大风。",
        "pinyin": "Gēnjù tiānqì yùbào, míngtiān xiàwǔ huì yǒu dàfēng.",
        "translationVi": "Theo dự báo thời tiết, chiều mai sẽ có gió lớn.",
        "priorityKeywords": [
          "根据",
          "天气预报"
        ]
      },
      {
        "id": "dict-hsk3-basic-s13",
        "textZh": "你能帮我解决这个电脑问题吗？",
        "pinyin": "Nǐ néng bāng wǒ jiějué zhège diànnǎo wèntí ma?",
        "translationVi": "Bạn có thể giúp tôi giải quyết vấn đề máy tính này không?",
        "priorityKeywords": [
          "解决",
          "问题"
        ]
      },
      {
        "id": "dict-hsk3-basic-s14",
        "textZh": "虽然工作很忙，但是要注意锻炼身体。",
        "pinyin": "Suīrán gōngzuò hěn máng, dànshì yào zhùyì duànliàn shēntǐ.",
        "translationVi": "Tuy công việc rất bận nhưng phải chú ý rèn luyện sức khỏe.",
        "priorityKeywords": [
          "虽然",
          "锻炼"
        ]
      },
      {
        "id": "dict-hsk3-basic-s15",
        "textZh": "他对中国的历史和传统文化很感兴趣。",
        "pinyin": "Tā duì Zhōngguó de lìshǐ hé chuántǒng wénhuà hěn gǎn xìngqù.",
        "translationVi": "Anh ấy rất có hứng thú với lịch sử và văn hóa truyền thống Trung Quốc.",
        "priorityKeywords": [
          "传统",
          "感兴趣"
        ]
      },
      {
        "id": "dict-hsk3-basic-s16",
        "textZh": "请不要在电梯里吸烟或者大声说话。",
        "pinyin": "Qǐng búyào zài diàntī lǐ xīyān huòzhě dàshēng shuōhuà.",
        "translationVi": "Xin đừng hút thuốc hoặc nói to trong thang máy.",
        "priorityKeywords": [
          "电梯",
          "吸烟"
        ]
      },
      {
        "id": "dict-hsk3-basic-s17",
        "textZh": "我已经决定下个月搬到新房子去住。",
        "pinyin": "Wǒ yǐjīng juédìng xià gè yuè bān dào xīn fángzi qù zhù.",
        "translationVi": "Tôi đã quyết định tháng sau chuyển đến nhà mới ở.",
        "priorityKeywords": [
          "决定",
          "房子"
        ]
      },
      {
        "id": "dict-hsk3-basic-s18",
        "textZh": "这次考试的成绩比上次提高了不少。",
        "pinyin": "Zhè cì kǎoshì de chéngjì bǐ shàng cì tígāo le bùshǎo.",
        "translationVi": "Thành tích kỳ thi lần này nâng cao hơn lần trước không ít.",
        "priorityKeywords": [
          "考试",
          "成绩"
        ]
      },
      {
        "id": "dict-hsk3-basic-s19",
        "textZh": "参加面试的时候应该穿正式一点的衣服。",
        "pinyin": "Cānjiā miànshì de shíhou yīnggāi chuān zhèngshì yìdiǎn de yīfu.",
        "translationVi": "Khi tham gia phỏng vấn nên mặc trang phục trang trọng một chút.",
        "priorityKeywords": [
          "面试",
          "正式"
        ]
      },
      {
        "id": "dict-hsk3-basic-s20",
        "textZh": "感谢大家这一年来对我的关心和支持。",
        "pinyin": "Gǎnxiè dàjiā zhè yì nián lái duì wǒ de guānxīn hé zhīchí.",
        "translationVi": "Cảm ơn sự quan tâm và ủng hộ của mọi người dành cho tôi trong một năm qua.",
        "priorityKeywords": [
          "关心",
          "支持"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk3-advanced",
    "title": "Tìm nguồn hàng 1688, Đặt hàng Quảng Châu & Thanh toán",
    "titleZh": "广州采购与1688批发订单",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Thương mại & Nguồn hàng",
    "descriptionVi": "Nghe chép thực chiến giao dịch với chủ xưởng Trung Quốc trên 1688, hỏi giá sỉ, mẫu thử và thời gian giao hàng.",
    "sentences": [
      {
        "id": "dict-hsk3-advanced-s1",
        "textZh": "老板你好，我是做越南批发生意的。",
        "pinyin": "Lǎobǎn nǐ hǎo, wǒ shì zuò Yuènán pīfā shēngyi de.",
        "translationVi": "Chào ông chủ, tôi làm kinh doanh bán sỉ tại Việt Nam.",
        "priorityKeywords": [
          "批发",
          "生意"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s2",
        "textZh": "这款产品的最低起订量是多少？",
        "pinyin": "Zhè kuǎn chǎnpǐn de zuìdī qǐdìngliàng shì duōshao?",
        "translationVi": "Số lượng đặt hàng tối thiểu của mẫu sản phẩm này là bao nhiêu?",
        "priorityKeywords": [
          "产品",
          "起订量"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s3",
        "textZh": "如果订五百件，单价还能再优惠吗？",
        "pinyin": "Rúguǒ dìng wǔbǎi jiàn, dānjià hái néng zài yōuhuì ma?",
        "translationVi": "Nếu đặt 500 chiếc, đơn giá có thể ưu đãi thêm nữa không?",
        "priorityKeywords": [
          "单价",
          "优惠"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s4",
        "textZh": "你们工厂现在有现货还是需要定做？",
        "pinyin": "Nǐmen gōngchǎng xiànzài yǒu xiànhuò háishi xūyào dìngzuò?",
        "translationVi": "Nhà máy các bạn hiện có hàng sẵn hay cần đặt sản xuất?",
        "priorityKeywords": [
          "工厂",
          "现货"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s5",
        "textZh": "我想先拿两个样品看看质量怎么样。",
        "pinyin": "Wǒ xiǎng xiān ná liǎng gè yàngpǐn kànkan zhìliàng zěnmeyàng.",
        "translationVi": "Tôi muốn lấy trước hai mẫu thử để xem chất lượng thế nào.",
        "priorityKeywords": [
          "样品",
          "质量"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s6",
        "textZh": "样品费可以在下大货订单时退还。",
        "pinyin": "Yàngpǐnfèi kěyǐ zài xià dàhuò dìngdān shí tuìhuán.",
        "translationVi": "Phí hàng mẫu có thể hoàn lại khi đặt đơn hàng lớn.",
        "priorityKeywords": [
          "订单",
          "退还"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s7",
        "textZh": "请把产品目录和报价单发到我的微信。",
        "pinyin": "Qǐng bǎ chǎnpǐn mùlù hé bàojiàdān fā dào wǒ de Wēixìn.",
        "translationVi": "Vui lòng gửi danh mục sản phẩm và bảng báo giá vào WeChat của tôi.",
        "priorityKeywords": [
          "目录",
          "报价单"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s8",
        "textZh": "这批货大概需要多少天才能生产完？",
        "pinyin": "Zhè pī huò dàgài xūyào duōshao tiān cái néng shēngchǎn wán?",
        "translationVi": "Lô hàng này khoảng bao nhiêu ngày mới sản xuất xong?",
        "priorityKeywords": [
          "这批货",
          "生产"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s9",
        "textZh": "正常情况下，付款后七天之内发货。",
        "pinyin": "Zhèngcháng qíngkuàng xià, fùkuǎn hòu qī tiān zhīnèi fāhuò.",
        "translationVi": "Trong trường hợp bình thường, sau khi thanh toán sẽ giao hàng trong vòng 7 ngày.",
        "priorityKeywords": [
          "付款",
          "发货"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s10",
        "textZh": "请帮我把货物发到广西凭祥物流仓。",
        "pinyin": "Qǐng bāng wǒ bǎ huòwù fā dào Guǎngxī Píngxiáng wùliúcāng.",
        "translationVi": "Vui lòng giúp tôi gửi hàng đến kho logistics Bằng Tường Quảng Tây.",
        "priorityKeywords": [
          "货物",
          "物流仓"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s11",
        "textZh": "外箱包装一定要结实，防止运输损坏。",
        "pinyin": "Wàixiāng bāozhuāng yídìng yào jiēshi, fángzhǐ yùnshū sǔnhuài.",
        "translationVi": "Đóng gói thùng ngoài nhất định phải chắc chắn để tránh hư hại khi vận chuyển.",
        "priorityKeywords": [
          "包装",
          "运输"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s12",
        "textZh": "每个箱子外面都要贴上我们的唛头。",
        "pinyin": "Měi gè xiāngzi wàimiàn dōu yào tiē shàng wǒmen de màitóu.",
        "translationVi": "Bên ngoài mỗi thùng đều phải dán nhãn ký hiệu hàng (shipping mark) của chúng tôi.",
        "priorityKeywords": [
          "箱子",
          "唛头"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s13",
        "textZh": "支持支付宝或者人民币银行转账吗？",
        "pinyin": "Zhīchí Zhīfùbǎo huòzhě Rénmínbì yínháng zhuǎnzhàng ma?",
        "translationVi": "Có hỗ trợ Alipay hoặc chuyển khoản ngân hàng Nhân dân tệ không?",
        "priorityKeywords": [
          "支付宝",
          "转账"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s14",
        "textZh": "我们先付百分之三十的定金。",
        "pinyin": "Wǒmen xiān fù bǎifēn zhī sānshí de dìngjīn.",
        "translationVi": "Chúng tôi thanh toán trước 30% tiền đặt cọc.",
        "priorityKeywords": [
          "百分之",
          "定金"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s15",
        "textZh": "剩下的尾款在发货前全部付清。",
        "pinyin": "Shèngxià de wěikuǎn zài fāhuò qián quánbù fùqīng.",
        "translationVi": "Số tiền còn lại sẽ thanh toán hết trước khi giao hàng.",
        "priorityKeywords": [
          "尾款",
          "付清"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s16",
        "textZh": "如果发现有质量问题，工厂负责退换。",
        "pinyin": "Rúguǒ fāxiàn yǒu zhìliàng wèntí, gōngchǎng fùzé tuìhuàn.",
        "translationVi": "Nếu phát hiện có vấn đề chất lượng, nhà máy chịu trách nhiệm đổi trả.",
        "priorityKeywords": [
          "质量",
          "退换"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s17",
        "textZh": "这批衣服的颜色和图片上有一点差别。",
        "pinyin": "Zhè pī yīfu de yánsè hé túpiàn shàng yǒu yìdiǎn chābié.",
        "translationVi": "Màu sắc lô quần áo này có chút khác biệt so với trên hình.",
        "priorityKeywords": [
          "颜色",
          "差别"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s18",
        "textZh": "请发定位给我，我下午去你们档口看货。",
        "pinyin": "Qǐng fā dìngwèi gěi wǒ, wǒ xiàwǔ qù nǐmen dàngkǒu kànhuò.",
        "translationVi": "Vui lòng gửi định vị cho tôi, chiều nay tôi qua sạp hàng của bạn xem hàng.",
        "priorityKeywords": [
          "定位",
          "看货"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s19",
        "textZh": "希望我们能够建立长期的合作关系。",
        "pinyin": "Xīwàng wǒmen nénggòu jiànlì chángqī de hézuò guānxi.",
        "translationVi": "Hy vọng chúng ta có thể thiết lập mối quan hệ hợp tác lâu dài.",
        "priorityKeywords": [
          "长期",
          "合作"
        ]
      },
      {
        "id": "dict-hsk3-advanced-s20",
        "textZh": "祝老板生意兴隆，财源广进！",
        "pinyin": "Zhù lǎobǎn shēngyi xīnglóng, cáiyuán guǎngjìn!",
        "translationVi": "Chúc ông chủ buôn may bán đắt, tài lộc dồi dào!",
        "priorityKeywords": [
          "生意兴隆",
          "财源广进"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk4-basic",
    "title": "Văn hóa, Du lịch Trung Quốc & Trải nghiệm Đời sống số",
    "titleZh": "中国文化旅游与数字生活",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Du lịch & Đời sống số",
    "descriptionVi": "Nghe chép chính tả HSK 4 về du lịch tàu cao tốc, thanh toán di động không tiền mặt và phong tục văn hóa Trung Hoa.",
    "sentences": [
      {
        "id": "dict-hsk4-basic-s1",
        "textZh": "随着科技的发展，人们的消费习惯发生了巨大变化。",
        "pinyin": "Suízhe kējì de fāzhǎn, rénmen de xiāofèi xíguàn fāshēng le jùdà biànhuà.",
        "translationVi": "Cùng với sự phát triển của công nghệ, thói quen tiêu dùng của mọi người đã thay đổi to lớn.",
        "priorityKeywords": [
          "科技",
          "消费"
        ]
      },
      {
        "id": "dict-hsk4-basic-s2",
        "textZh": "在中国出门旅游，只要带一部手机就足够了。",
        "pinyin": "Zài Zhōngguó chūmén lǚyóu, zhǐyào dài yí bù shǒujī jiù zúgòu le.",
        "translationVi": "Đi du lịch ở Trung Quốc chỉ cần mang theo một chiếc điện thoại là đủ.",
        "priorityKeywords": [
          "旅游",
          "足够"
        ]
      },
      {
        "id": "dict-hsk4-basic-s3",
        "textZh": "无论是坐地铁还是去菜市场买菜，都可以扫码支付。",
        "pinyin": "Wúlùn shì zuò dìtiě háishi qù càishìchǎng mǎi cài, dōu kěyǐ sǎomǎ zhīfù.",
        "translationVi": "Bất kể là đi tàu điện ngầm hay ra chợ mua rau đều có thể quét mã thanh toán.",
        "priorityKeywords": [
          "无论",
          "扫码"
        ]
      },
      {
        "id": "dict-hsk4-basic-s4",
        "textZh": "中国的高铁不仅速度非常快，而且十分准时舒适。",
        "pinyin": "Zhōngguó de gāotiě bùjǐn sùdù fēicháng kuài, érqiě shífēn zhǔnshí shūshì.",
        "translationVi": "Tàu cao tốc Trung Quốc không những tốc độ rất nhanh mà còn vô cùng đúng giờ và thoải mái.",
        "priorityKeywords": [
          "高铁",
          "准时"
        ]
      },
      {
        "id": "dict-hsk4-basic-s5",
        "textZh": "提前在网上预订门票可以节省很多排队的时间。",
        "pinyin": "Tíqián zài wǎngshàng yùdìng ménpiào kěyǐ jiéshěng hěn duō páiduì de shíjiān.",
        "translationVi": "Đặt vé trước trên mạng có thể tiết kiệm rất nhiều thời gian xếp hàng.",
        "priorityKeywords": [
          "预订",
          "节省"
        ]
      },
      {
        "id": "dict-hsk4-basic-s6",
        "textZh": "长城是中国古代最伟大的建筑工程之一。",
        "pinyin": "Chángchéng shì Zhōngguó gǔdài zuì wěidà de jiànzhù gōngchéng zhī yī.",
        "translationVi": "Vạn Lý Trường Thành là một trong những công trình kiến trúc vĩ đại nhất Trung Quốc cổ đại.",
        "priorityKeywords": [
          "古代",
          "建筑"
        ]
      },
      {
        "id": "dict-hsk4-basic-s7",
        "textZh": "每个地方的饮食文化都与当地的气候有密切关系。",
        "pinyin": "Měi gè dìfang de yǐnshí wénhuà dōu yǔ dāngdì de qìhòu yǒu mìqiè guānxi.",
        "translationVi": "Văn hóa ẩm thực mỗi nơi đều có quan hệ mật thiết với khí hậu địa phương.",
        "priorityKeywords": [
          "饮食",
          "密切"
        ]
      },
      {
        "id": "dict-hsk4-basic-s8",
        "textZh": "四川人喜欢吃辣，是因为当地气候潮湿。",
        "pinyin": "Sìchuān rén xǐhuan chī là, shì yīnwèi dāngdì qìhòu cháoshī.",
        "translationVi": "Người Tứ Xuyên thích ăn cay là vì khí hậu địa phương ẩm ướt.",
        "priorityKeywords": [
          "气候",
          "潮湿"
        ]
      },
      {
        "id": "dict-hsk4-basic-s9",
        "textZh": "春节是中国人一年当中最重要、最热闹的传统节日。",
        "pinyin": "Chūnjié shì Zhōngguó rén yì nián dāngzhōng zuì zhòngyào, zuì rènao de chuántǒng jiérì.",
        "translationVi": "Tết Nguyên đán là lễ hội truyền thống quan trọng và náo nhiệt nhất trong năm của người Trung Quốc.",
        "priorityKeywords": [
          "春节",
          "传统"
        ]
      },
      {
        "id": "dict-hsk4-basic-s10",
        "textZh": "无论离家多远，人们都会想办法回家吃年夜饭。",
        "pinyin": "Wúlùn lí jiā duō yuǎn, rénmen dōu huì xiǎng bànfǎ huí jiā chī niányèfàn.",
        "translationVi": "Dù xa nhà đến đâu, mọi người đều tìm cách về nhà ăn bữa cơm tất niên.",
        "priorityKeywords": [
          "办法",
          "年夜饭"
        ]
      },
      {
        "id": "dict-hsk4-basic-s11",
        "textZh": "入乡随俗意味着到新的环境要尊重当地的风俗习惯。",
        "pinyin": "Rùxiāngsuísú yìwèizhe dào xīn de huánjìng yào zūnzhòng dāngdì de fēngsú xíguàn.",
        "translationVi": "Nhập gia tùy tục có nghĩa là đến môi trường mới phải tôn trọng phong tục tập quán địa phương.",
        "priorityKeywords": [
          "入乡随俗",
          "尊重"
        ]
      },
      {
        "id": "dict-hsk4-basic-s12",
        "textZh": "通过参加这次文化交流活动，我交到了许多中国朋友。",
        "pinyin": "Tōngguò cānjiā zhè cì wénhuà jiāoliú huódòng, wǒ jiāo dào le xǔduō Zhōngguó péngyou.",
        "translationVi": "Thông qua việc tham gia hoạt động giao lưu văn hóa lần này, tôi đã kết bạn được với nhiều bạn Trung Quốc.",
        "priorityKeywords": [
          "交流",
          "活动"
        ]
      },
      {
        "id": "dict-hsk4-basic-s13",
        "textZh": "保护环境是每一个公民都应该承担的社会责任。",
        "pinyin": "Bǎohù huánjìng shì měi yí gè gōngmín dōu yīnggāi chéngdān de shèhuì zérèn.",
        "translationVi": "Bảo vệ môi trường là trách nhiệm xã hội mà mỗi công dân đều nên gánh vác.",
        "priorityKeywords": [
          "承担",
          "责任"
        ]
      },
      {
        "id": "dict-hsk4-basic-s14",
        "textZh": "养成良好的阅读习惯对个人的成长非常有帮助。",
        "pinyin": "Yǎngchéng liánghǎo de yuèdú xíguàn duì gèrén de chéngzhǎng fēicháng yǒu bāngzhù.",
        "translationVi": "Hình thành thói quen đọc sách tốt rất có ích cho sự trưởng thành của cá nhân.",
        "priorityKeywords": [
          "养成",
          "成长"
        ]
      },
      {
        "id": "dict-hsk4-basic-s15",
        "textZh": "失败并不可怕，重要的是从失败中总结经验教训。",
        "pinyin": "Shībài bìng bù kěpà, zhòngyào de shì cóng shībài zhōng zǒngjié jīngyàn jiàoxun.",
        "translationVi": "Thất bại không hề đáng sợ, quan trọng là tổng kết bài học kinh nghiệm từ thất bại.",
        "priorityKeywords": [
          "失败",
          "总结"
        ]
      },
      {
        "id": "dict-hsk4-basic-s16",
        "textZh": "现代年轻人越来越重视工作与生活的平衡。",
        "pinyin": "Xiàndài niánqīngrén yuèláiyuè zhòngshì gōngzuò yǔ shēnghuó de pínghéng.",
        "translationVi": "Giới trẻ hiện đại ngày càng coi trọng sự cân bằng giữa công việc và cuộc sống.",
        "priorityKeywords": [
          "重视",
          "平衡"
        ]
      },
      {
        "id": "dict-hsk4-basic-s17",
        "textZh": "遇到困难的时候，保持冷静的态度往往能更快找到出路。",
        "pinyin": "Yùdào kùnnan de shíhou, bǎochí lěngjìng de tàidu wǎngwǎng néng gèng kuài zhǎodào chūlù.",
        "translationVi": "Khi gặp khó khăn, giữ thái độ bình tĩnh thường có thể tìm ra lối thoát nhanh hơn.",
        "priorityKeywords": [
          "困难",
          "冷静"
        ]
      },
      {
        "id": "dict-hsk4-basic-s18",
        "textZh": "这部纪录片真实地反映了普通人的日常生活。",
        "pinyin": "Zhè bù jìlùpiàn zhēnshí de fǎnyìng le pǔtōngrén de rìcháng shēnghuó.",
        "translationVi": "Bộ phim tài liệu này phản ánh chân thực cuộc sống thường nhật của người bình thường.",
        "priorityKeywords": [
          "纪录片",
          "反映"
        ]
      },
      {
        "id": "dict-hsk4-basic-s19",
        "textZh": "要想在短时间内学好一门外语，坚持练习是关键。",
        "pinyin": "Yàoxiǎng zài duǎn shíjiān nèi xuéhǎo yì mén wàiyǔ, jiānchí liànxí shì guānjiàn.",
        "translationVi": "Muốn học tốt một ngoại ngữ trong thời gian ngắn, kiên trì luyện tập là chìa khóa.",
        "priorityKeywords": [
          "坚持",
          "关键"
        ]
      },
      {
        "id": "dict-hsk4-basic-s20",
        "textZh": "旅行不仅能开阔眼界，还能让人放松紧张的心情。",
        "pinyin": "Lǚxíng bùjǐn néng kāikuò yǎnjiè, hái néng ràng rén fàngsōng jǐnzhāng de xīnqíng.",
        "translationVi": "Du lịch không chỉ mở mang tầm mắt mà còn giúp con người thư giãn tâm trạng căng thẳng.",
        "priorityKeywords": [
          "开阔",
          "心情"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk4-advanced",
    "title": "Thương mại điện tử xuyên biên giới & Logistics Trung – Việt",
    "titleZh": "中越跨境电商与国际物流",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Logistics & XNK",
    "descriptionVi": "Nghe chép chuyên sâu về vận chuyển hàng hóa Trung - Việt, khai báo hải quan, kho ngoại quan và livestream bán hàng.",
    "sentences": [
      {
        "id": "dict-hsk4-advanced-s1",
        "textZh": "近年来，中越跨境电商贸易规模保持快速增长。",
        "pinyin": "Jìnnián lái, Zhōng-Yuè kuàjìng diànshāng màoyì guīmó bǎochí kuàisù zēngzhǎng.",
        "translationVi": "Những năm gần đây, quy mô thương mại điện tử xuyên biên giới Trung - Việt duy trì mức tăng trưởng nhanh.",
        "priorityKeywords": [
          "跨境电商",
          "规模"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s2",
        "textZh": "我们的货物主要通过友谊关口岸进行报关出口。",
        "pinyin": "Wǒmen de huòwù zhǔyào tōngguò Yǒuyìguān kǒu'àn jìnxíng bàoguān chūkǒu.",
        "translationVi": "Hàng hóa của chúng tôi chủ yếu làm thủ tục khai báo hải quan xuất khẩu qua cửa khẩu Hữu Nghị Quan.",
        "priorityKeywords": [
          "口岸",
          "报关"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s3",
        "textZh": "请务必提前提供准确的装箱单和商业发票。",
        "pinyin": "Qǐng wùbì tíqián tígōng zhǔnquè de zhuāngxiāngdān hé shāngyè fāpiào.",
        "translationVi": "Vui lòng nhất định cung cấp trước phiếu đóng gói và hóa đơn thương mại chính xác.",
        "priorityKeywords": [
          "装箱单",
          "发票"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s4",
        "textZh": "如果单证信息不符，可能会导致海关查验延误。",
        "pinyin": "Rúguǒ dānzhèng xìnxī bùfú, kěnéng huì dǎozhì hǎiguān cháyàn yánwù.",
        "translationVi": "Nếu thông tin chứng từ không khớp, có thể dẫn đến chậm trễ do hải quan kiểm hóa.",
        "priorityKeywords": [
          "单证",
          "查验"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s5",
        "textZh": "从东莞集运仓到河内一般只需要三到四天。",
        "pinyin": "Cóng Dōngguǎn jíyùncāng dào Hénèi yìbān zhǐ xūyào sān dào sì tiān.",
        "translationVi": "Từ kho gom hàng Đông Quản về Hà Nội thông thường chỉ mất 3 đến 4 ngày.",
        "priorityKeywords": [
          "集运仓",
          "河内"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s6",
        "textZh": "大宗货物走海运虽然时间长，但运输成本低得多。",
        "pinyin": "Dàzōng huòwù zǒu hǎiyùn suīrán shíjiān cháng, dàn yùnshū chéngběn dī de duō.",
        "translationVi": "Hàng hóa số lượng lớn đi đường biển tuy thời gian dài nhưng chi phí vận chuyển thấp hơn nhiều.",
        "priorityKeywords": [
          "海运",
          "成本"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s7",
        "textZh": "客户要求按照FOB深圳条款重新计算报价。",
        "pinyin": "Kèhù yāoqiú ànzhào FOB Shēnzhèn tiáokuǎn chóngxīn jìsuàn bàojià.",
        "translationVi": "Khách hàng yêu cầu tính lại báo giá theo điều khoản FOB Thâm Quyến.",
        "priorityKeywords": [
          "条款",
          "报价"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s8",
        "textZh": "原产地证书可以帮进口商享受关税减免优惠。",
        "pinyin": "Yuánchǎndì zhèngshū kěyǐ bāng jìnkǒushāng xiǎngshòu guānshuì jiǎnmiǎn yōuhuì.",
        "translationVi": "Giấy chứng nhận xuất xứ (C/O) có thể giúp nhà nhập khẩu hưởng ưu đãi miễn giảm thuế quan.",
        "priorityKeywords": [
          "原产地",
          "关税"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s9",
        "textZh": "直播带货已经成为品牌推广最高效的渠道之一。",
        "pinyin": "Zhíbō dàihuò yǐjīng chéngwéi pǐnpái tuīguǎng zuì gāoxiào de qúdào zhī yī.",
        "translationVi": "Livestream bán hàng đã trở thành một trong những kênh quảng bá thương hiệu hiệu quả nhất.",
        "priorityKeywords": [
          "直播带货",
          "渠道"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s10",
        "textZh": "为了吸引年轻消费者，我们需要不断优化产品包装。",
        "pinyin": "Wèile xīyǐn niánqīng xiāofèizhě, wǒmen xūyào búduàn yōuhuà chǎnpǐn bāozhuāng.",
        "translationVi": "Để thu hút người tiêu dùng trẻ, chúng ta cần không ngừng tối ưu hóa bao bì sản phẩm.",
        "priorityKeywords": [
          "消费者",
          "优化"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s11",
        "textZh": "仓库管理员每天都要核对库存数量并更新系统。",
        "pinyin": "Cāngkù guǎnlǐyuán měitiān dōu yào héduì kùcún shùliàng bìng gēngxīn xìtǒng.",
        "translationVi": "Quản lý kho mỗi ngày đều phải đối chiếu số lượng tồn kho và cập nhật hệ thống.",
        "priorityKeywords": [
          "核对",
          "库存"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s12",
        "textZh": "这批电子产品需要购买运输保险以降低风险。",
        "pinyin": "Zhè pī diànzǐ chǎnpǐn xūyào gòumǎi yùnshū bǎoxiǎn yǐ jiàngdī fēngxiǎn.",
        "translationVi": "Lô sản phẩm điện tử này cần mua bảo hiểm vận chuyển để giảm thiểu rủi ro.",
        "priorityKeywords": [
          "保险",
          "风险"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s13",
        "textZh": "由于原材料价格上涨，工厂不得不调整出厂价。",
        "pinyin": "Yóuyú yuáncáiliào jiàgé shàngzhǎng, gōngchǎng bùdébù tiáozhěng chūchǎngjià.",
        "translationVi": "Do giá nguyên vật liệu tăng, nhà máy buộc phải điều chỉnh giá xuất xưởng.",
        "priorityKeywords": [
          "原材料",
          "出厂价"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s14",
        "textZh": "双方在合同中明确规定了交货期限和违约责任。",
        "pinyin": "Shuāngfāng zài hétong zhōng míngquè guīdìng le jiāohuò qīxiàn hé wéiyuē zérèn.",
        "translationVi": "Hai bên đã quy định rõ thời hạn giao hàng và trách nhiệm vi phạm trong hợp đồng.",
        "priorityKeywords": [
          "合同",
          "违约"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s15",
        "textZh": "良好的售后服务能够有效提升客户的复购率。",
        "pinyin": "Liánghǎo de shòuhòu fúwù nénggòu yǒuxiào tíshēng kèhù de fùgòulǜ.",
        "translationVi": "Dịch vụ hậu mãi tốt có thể nâng cao hiệu quả tỷ lệ mua lại của khách hàng.",
        "priorityKeywords": [
          "售后",
          "复购率"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s16",
        "textZh": "我们在胡志明市设立了海外仓，支持一件代发。",
        "pinyin": "Wǒmen zài Húzhìmíng shì shèlì le hǎiwàicāng, zhīchí yí jiàn dàifā.",
        "translationVi": "Chúng tôi đã lập kho ngoại quan tại TP.HCM, hỗ trợ dropshipping từng kiện.",
        "priorityKeywords": [
          "海外仓",
          "一件代发"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s17",
        "textZh": "请把这批货的物流单号发给我以便随时追踪。",
        "pinyin": "Qǐng bǎ zhè pī huò de wùliú dānhào fā gěi wǒ yǐbiàn suíshí zhuīzōng.",
        "translationVi": "Vui lòng gửi mã vận đơn lô hàng này cho tôi để tiện theo dõi bất cứ lúc nào.",
        "priorityKeywords": [
          "单号",
          "追踪"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s18",
        "textZh": "质检部门在抽查中发现了百分之二的次品率。",
        "pinyin": "Zhìjiǎn bùmén zài chōuchá zhōng fāxiàn le bǎifēn zhī èr de cìpǐnlǜ.",
        "translationVi": "Bộ phận kiểm định chất lượng đã phát hiện tỷ lệ hàng lỗi 2% trong đợt kiểm tra xác suất.",
        "priorityKeywords": [
          "质检",
          "次品率"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s19",
        "textZh": "只有严格控制产品质量，才能在市场竞争中获胜。",
        "pinyin": "Zhǐyǒu yángé kòngzhì chǎnpǐn zhìliàng, cái néng zài shìchǎng jìngzhēng zhōng huòshèng.",
        "translationVi": "Chỉ có kiểm soát nghiêm ngặt chất lượng sản phẩm mới có thể chiến thắng trong cạnh tranh thị trường.",
        "priorityKeywords": [
          "控制",
          "竞争"
        ]
      },
      {
        "id": "dict-hsk4-advanced-s20",
        "textZh": "这次广交会为我们开拓东南亚市场提供了绝佳机会。",
        "pinyin": "Zhè cì Guǎngjiāohuì wèi wǒmen kāituò Dōngnányà shìchǎng tígōng le juéjiā jīhuì.",
        "translationVi": "Hội chợ Canton Fair lần này đã mang lại cơ hội tuyệt vời để chúng tôi mở rộng thị trường Đông Nam Á.",
        "priorityKeywords": [
          "广交会",
          "开拓"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk5-basic",
    "title": "Xã hội hiện đại, Giáo dục, Tâm lý & Công nghệ",
    "titleZh": "现代社会、教育与科技生活",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Xã hội & Công nghệ",
    "descriptionVi": "Nghe chép các câu nghị luận xã hội HSK 5 về trí tuệ nhân tạo, giáo dục đại học, tâm lý nơi làm việc và lối sống xanh.",
    "sentences": [
      {
        "id": "dict-hsk5-basic-s1",
        "textZh": "人工智能技术的广泛应用正在深刻改变传统行业。",
        "pinyin": "Réngōng zhìnéng jìshù de guǎngfàn yìngyòng zhèngzài shēnkè gǎibiàn chuántǒng hángyè.",
        "translationVi": "Việc ứng dụng rộng rãi công nghệ trí tuệ nhân tạo đang làm thay đổi sâu sắc các ngành nghề truyền thống.",
        "priorityKeywords": [
          "人工智能",
          "行业"
        ]
      },
      {
        "id": "dict-hsk5-basic-s2",
        "textZh": "独立思考的能力比单纯记忆书本知识更加重要。",
        "pinyin": "Dúlì sīkǎo de nénglì bǐ dānchún jìyì shūběn zhīshi gèngjiā zhòngyào.",
        "translationVi": "Năng lực tư duy độc lập quan trọng hơn nhiều so với việc chỉ ghi nhớ kiến thức sách vở.",
        "priorityKeywords": [
          "独立思考",
          "单纯"
        ]
      },
      {
        "id": "dict-hsk5-basic-s3",
        "textZh": "面对激烈的职场竞争，终身学习已成为必然趋势。",
        "pinyin": "Miànduì jīliè de zhíchǎng jìngzhēng, zhōngshēn xuéxí yǐ chéngwéi bìrán qūshì.",
        "translationVi": "Đối mặt với cạnh tranh khốc liệt nơi công sở, học tập suốt đời đã trở thành xu thế tất yếu.",
        "priorityKeywords": [
          "激烈",
          "趋势"
        ]
      },
      {
        "id": "dict-hsk5-basic-s4",
        "textZh": "过度依赖智能手机容易导致注意力分散和睡眠不足。",
        "pinyin": "Guòdù yīlài zhìnéng shǒujī róngyì dǎozhì zhùyìlì fēnsàn hé shuìmián bùzú.",
        "translationVi": "Phụ thuộc quá mức vào điện thoại thông minh dễ dẫn đến phân tán sự chú ý và thiếu ngủ.",
        "priorityKeywords": [
          "依赖",
          "注意力"
        ]
      },
      {
        "id": "dict-hsk5-basic-s5",
        "textZh": "父母应该学会倾听孩子的想法，而不是一味地指责。",
        "pinyin": "Fùmǔ yīnggāi xuéhuì qīngtīng háizi de xiǎngfǎ, ér bú shì yíwèi de zhǐzé.",
        "translationVi": "Cha mẹ nên học cách lắng nghe suy nghĩ của con cái chứ không phải một mực chỉ trích.",
        "priorityKeywords": [
          "倾听",
          "指责"
        ]
      },
      {
        "id": "dict-hsk5-basic-s6",
        "textZh": "新能源汽车的普及有助于减少城市的碳排放量。",
        "pinyin": "Xīn néngyuán qìchē de pǔjí yǒuzhùyú jiǎnshǎo chéngshì de tàn páifàngliàng.",
        "translationVi": "Sự phổ cập của xe ô tô năng lượng mới giúp giảm lượng khí thải carbon của thành phố.",
        "priorityKeywords": [
          "新能源",
          "普及"
        ]
      },
      {
        "id": "dict-hsk5-basic-s7",
        "textZh": "一个优秀的团队需要成员之间相互信任与密切配合。",
        "pinyin": "Yí gè yōuxiù de tuánduì xūyào chéngyuán zhījiān xiānghù xìnrèn yǔ mìqiè pèihé.",
        "translationVi": "Một đội ngũ xuất sắc cần sự tin tưởng lẫn nhau và phối hợp mật thiết giữa các thành viên.",
        "priorityKeywords": [
          "信任",
          "配合"
        ]
      },
      {
        "id": "dict-hsk5-basic-s8",
        "textZh": "在做出重大决定之前，我们应当全面评估潜在风险。",
        "pinyin": "Zài zuòchū zhòngdà juédìng zhīqián, wǒmen yīngdāng quánmiàn pínggū qiánzài fēngxiǎn.",
        "translationVi": "Trước khi đưa ra quyết định trọng đại, chúng ta nên đánh giá toàn diện các rủi ro tiềm ẩn.",
        "priorityKeywords": [
          "评估",
          "潜在"
        ]
      },
      {
        "id": "dict-hsk5-basic-s9",
        "textZh": "中华饮食文化讲究色香味俱全以及营养均衡。",
        "pinyin": "Zhōnghuá yǐnshí wénhuà jiǎngjiu sè-xiāng-wèi jùquán yǐjí yíngyǎng jūnhéng.",
        "translationVi": "Văn hóa ẩm thực Trung Hoa coi trọng đủ cả sắc hương vị cũng như cân bằng dinh dưỡng.",
        "priorityKeywords": [
          "讲究",
          "均衡"
        ]
      },
      {
        "id": "dict-hsk5-basic-s10",
        "textZh": "许多年轻人选择毕业后回到家乡创业，支持农村发展。",
        "pinyin": "Xǔduō niánqīngrén xuǎnzé bìyè hòu huídào jiāxiāng chuàngyè, zhīchí nóngcūn fāzhǎn.",
        "translationVi": "Nhiều người trẻ chọn trở về quê hương khởi nghiệp sau khi tốt nghiệp để ủng hộ phát triển nông thôn.",
        "priorityKeywords": [
          "创业",
          "农村"
        ]
      },
      {
        "id": "dict-hsk5-basic-s11",
        "textZh": "良好的沟通技巧往往能化解人际关系中的许多矛盾。",
        "pinyin": "Liánghǎo de gōutōng jìqiǎo wǎngwǎng néng huàjiě rénjì guānxi zhōng de xǔduō máodùn.",
        "translationVi": "Kỹ năng giao tiếp tốt thường có thể hóa giải nhiều mâu thuẫn trong các mối quan hệ xã hội.",
        "priorityKeywords": [
          "化解",
          "矛盾"
        ]
      },
      {
        "id": "dict-hsk5-basic-s12",
        "textZh": "博物馆不仅是保存历史文物的场所，更是公众教育的课堂。",
        "pinyin": "Bówùguǎn bùjǐn shì bǎocún lìshǐ wénwù de chǎngsuǒ, gèng shì gōngzhòng jiàoyù de kètáng.",
        "translationVi": "Bảo tàng không chỉ là nơi lưu giữ văn vật lịch sử mà còn là lớp học giáo dục công chúng.",
        "priorityKeywords": [
          "文物",
          "场所"
        ]
      },
      {
        "id": "dict-hsk5-basic-s13",
        "textZh": "规律的作息和适度的运动是维持身心健康的基石。",
        "pinyin": "Guīlǜ de zuòxī hé shìdù de yùndòng shì wéichí shēnxīn jiànkāng de jīshí.",
        "translationVi": "Sinh hoạt điều độ và vận động vừa phải là nền tảng duy trì sức khỏe thể chất và tinh thần.",
        "priorityKeywords": [
          "作息",
          "维持"
        ]
      },
      {
        "id": "dict-hsk5-basic-s14",
        "textZh": "消费者在网购时应当保持理性，避免盲目跟风消费。",
        "pinyin": "Xiāofèizhě zài wǎnggòu shí yīngdāng bǎochí lǐxìng, bìmiǎn mángmù gēnfēng xiāofèi.",
        "translationVi": "Người tiêu dùng khi mua sắm online nên giữ sự lý tính, tránh tiêu dùng chạy theo đám đông một cách mù quáng.",
        "priorityKeywords": [
          "理性",
          "盲目"
        ]
      },
      {
        "id": "dict-hsk5-basic-s15",
        "textZh": "这项科学实验取得了突破性进展，引起了国际关注。",
        "pinyin": "Zhè xiàng kēxué shíyàn qǔdé le tūpòxìng jìnzhǎn, yǐnqǐ le guójì guānzhù.",
        "translationVi": "Thí nghiệm khoa học này đã đạt được tiến triển mang tính đột phá, thu hút sự chú ý quốc tế.",
        "priorityKeywords": [
          "突破",
          "进展"
        ]
      },
      {
        "id": "dict-hsk5-basic-s16",
        "textZh": "阅读经典文学作品能够丰富我们的精神世界。",
        "pinyin": "Yuèdú jīngdiǎn wénxué zuòpǐn nénggòu fēngfù wǒmen de jīngshén shìjiè.",
        "translationVi": "Đọc các tác phẩm văn học kinh điển có thể làm phong phú thế giới tinh thần của chúng ta.",
        "priorityKeywords": [
          "经典",
          "精神"
        ]
      },
      {
        "id": "dict-hsk5-basic-s17",
        "textZh": "面对突发事件，相关部门迅速启动了应急预案。",
        "pinyin": "Miànduì tūfā shìjiàn, xiāngguān bùmén xùnsù qǐdòng le yìngjí yù'àn.",
        "translationVi": "Đối mặt với sự cố bất ngờ, các cơ quan liên quan đã nhanh chóng kích hoạt phương án ứng phó khẩn cấp.",
        "priorityKeywords": [
          "突发",
          "应急"
        ]
      },
      {
        "id": "dict-hsk5-basic-s18",
        "textZh": "只有把理论知识与实际操作结合起来，才能真正掌握技能。",
        "pinyin": "Zhǐyǒu bǎ lǐlùn zhīshi yǔ shíjì cāozuò jiéhé qǐlái, cái néng zhēnzhèng zhǎngwò jìnéng.",
        "translationVi": "Chỉ khi kết hợp kiến thức lý thuyết với thao tác thực tế mới có thể thực sự nắm vững kỹ năng.",
        "priorityKeywords": [
          "理论",
          "掌握"
        ]
      },
      {
        "id": "dict-hsk5-basic-s19",
        "textZh": "随着老龄化社会的到来，养老服务需求日益增长。",
        "pinyin": "Suízhe lǎolínghuà shèhuì de dàolái, yǎnglǎo fúwù xūqiú rìyì zēngzhǎng.",
        "translationVi": "Cùng với sự xuất hiện của xã hội già hóa, nhu cầu dịch vụ dưỡng lão ngày càng tăng.",
        "priorityKeywords": [
          "老龄化",
          "日益"
        ]
      },
      {
        "id": "dict-hsk5-basic-s20",
        "textZh": "尊重文化多样性是促进国际友好合作的必要前提。",
        "pinyin": "Zūnzhòng wénhuà duōyàngxìng shì cùjìn guójì yǒuhǎo hézuò de bìyào qiántí.",
        "translationVi": "Tôn trọng sự đa dạng văn hóa là tiền đề tất yếu để thúc đẩy hợp tác hữu nghị quốc tế.",
        "priorityKeywords": [
          "多样性",
          "前提"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk5-advanced",
    "title": "Đàm phán Hợp đồng Ngoại thương & Chuỗi cung ứng",
    "titleZh": "外贸商务谈判与供应链管理",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Đàm phán & Hợp đồng",
    "descriptionVi": "Nghe chép chuyên sâu về đàm phán điều khoản thanh toán L/C, độc quyền phân phối, kiểm định chất lượng và giải quyết tranh chấp.",
    "sentences": [
      {
        "id": "dict-hsk5-advanced-s1",
        "textZh": "在签署正式合同之前，双方需要就付款方式达成一致。",
        "pinyin": "Zài qiānshǔ zhèngshì hétong zhīqián, shuāngfāng xūyào jiù fùkuǎn fāngshì dáchéng yízhì.",
        "translationVi": "Trước khi ký kết hợp đồng chính thức, hai bên cần đạt được sự thống nhất về phương thức thanh toán.",
        "priorityKeywords": [
          "签署",
          "达成一致"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s2",
        "textZh": "对于首次合作的大额订单，我方建议采用不可撤销信用证。",
        "pinyin": "Duìyú shǒucì hézuò de dà'é dìngdān, wǒfāng jiànyì cǎiyòng bùkě chèxiāo xìnyòngzhèng.",
        "translationVi": "Đối với đơn hàng giá trị lớn hợp tác lần đầu, phía chúng tôi đề nghị sử dụng thư tín dụng (L/C) không thể hủy ngang.",
        "priorityKeywords": [
          "撤销",
          "信用证"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s3",
        "textZh": "如果贵公司能保证年度采购量，我们可以授予越南独家代理权。",
        "pinyin": "Rúguǒ guì gōngsī néng bǎozhèng niándù cǎigòuliàng, wǒmen kěyǐ shòuyǔ Yuènán dújiā dàilǐquán.",
        "translationVi": "Nếu quý công ty có thể đảm bảo sản lượng thu mua hàng năm, chúng tôi có thể trao quyền đại lý độc quyền tại Việt Nam.",
        "priorityKeywords": [
          "授予",
          "独家代理"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s4",
        "textZh": "所有出口产品均须符合进口国的质量安全标准。",
        "pinyin": "Suǒyǒu chūkǒu chǎnpǐn jūn xū fúhé jìnkǒuguó de zhìliàng ānquán biāozhǔn.",
        "translationVi": "Tất cả sản phẩm xuất khẩu đều phải phù hợp với tiêu chuẩn an toàn chất lượng của nước nhập khẩu.",
        "priorityKeywords": [
          "符合",
          "标准"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s5",
        "textZh": "由于汇率波动较大，本报价单的有效期为十五个工作日。",
        "pinyin": "Yóuyú huìlǜ bōdòng jiào dà, běn bàojiàdān de yǒuxiàoqī wéi shíwǔ gè gōngzuòrì.",
        "translationVi": "Do tỷ giá biến động khá lớn, thời hạn hiệu lực của bảng báo giá này là 15 ngày làm việc.",
        "priorityKeywords": [
          "汇率",
          "有效期"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s6",
        "textZh": "买方有权委托第三方检验机构在装船前进行质量抽检。",
        "pinyin": "Mǎifāng yǒuquán wěituō dì-sānfāng jiǎnyàn jīgòu zài zhuāngchuán qián jìnxíng zhìliàng chōujiǎn.",
        "translationVi": "Bên mua có quyền ủy thác cơ quan kiểm định bên thứ ba tiến hành kiểm tra chất lượng xác suất trước khi xếp hàng lên tàu.",
        "priorityKeywords": [
          "委托",
          "抽检"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s7",
        "textZh": "若因不可抗力因素导致延迟交货，双方应及时协商解决方案。",
        "pinyin": "Ruò yīn bùkě抗lì yīnsù dǎozhì yánchí jiāohuò, shuāngfāng yīng jíshí xiéshāng jiějué fāng'àn.",
        "translationVi": "Nếu do yếu tố bất khả kháng dẫn đến giao hàng chậm trễ, hai bên cần kịp thời thương lượng phương án giải quyết.",
        "priorityKeywords": [
          "不可抗力",
          "协商"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s8",
        "textZh": "为了保障商业机密，合作双方必须签订严格的保密协议。",
        "pinyin": "Wèile bǎozhàng shāngyè jīmì, hézuò shuāngfāng bìxū qiāndìng yángé de bǎomì xiéyì.",
        "translationVi": "Để bảo đảm bí mật thương mại, hai bên hợp tác bắt buộc phải ký thỏa thuận bảo mật nghiêm ngặt.",
        "priorityKeywords": [
          "商业机密",
          "保密协议"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s9",
        "textZh": "完善的供应链体系能够有效抵御国际市场价格波动的冲击。",
        "pinyin": "Wánshàn de gōngyìngliàn tǐxì nénggòu yǒuxiào dǐyù guójì shìchǎng jiàgé bōdòng de chōngjī.",
        "translationVi": "Hệ thống chuỗi cung ứng hoàn thiện có thể chống đỡ hiệu quả cú sốc biến động giá cả thị trường quốc tế.",
        "priorityKeywords": [
          "供应链",
          "抵御"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s10",
        "textZh": "我方将派技术团队前往贵厂提供生产线安装与操作培训。",
        "pinyin": "Wǒfāng jiāng pài jìshù tuánduì qiánwǎng guì chǎng tígōng shēngchǎnxiàn ānzhuāng yǔ cāozuò péixùn.",
        "translationVi": "Phía chúng tôi sẽ cử đội ngũ kỹ thuật tới nhà máy quý vị để cung cấp đào tạo lắp đặt và vận hành dây chuyền sản xuất.",
        "priorityKeywords": [
          "生产线",
          "培训"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s11",
        "textZh": "关于知识产权归属问题，合同第五条款已经作出了明确界定。",
        "pinyin": "Guānyú zhīshi chǎnquán guīshǔ wèntí, hétong dì-wǔ tiáokuǎn yǐjīng zuòchū le míngquè jièdìng.",
        "translationVi": "Về vấn đề quyền sở hữu trí tuệ thuộc về ai, điều khoản thứ 5 của hợp đồng đã phân định rõ ràng.",
        "priorityKeywords": [
          "知识产权",
          "界定"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s12",
        "textZh": "一旦发生贸易争端，双方应优先通过友好协商或仲裁解决。",
        "pinyin": "Yídàn fāshēng màoyì zhēngduān, shuāngfāng yīng yōuxiān tōngguò yǒuhǎo xiéshāng huò zhòngcái jiějué.",
        "translationVi": "Một khi phát sinh tranh chấp thương mại, hai bên nên ưu tiên giải quyết thông qua thương lượng hữu nghị hoặc trọng tài.",
        "priorityKeywords": [
          "争端",
          "仲裁"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s13",
        "textZh": "通过优化仓储布局，该企业的物流配送效率提升了三成。",
        "pinyin": "Tōngguò yōuhuà cāngchǔ bùjú, gāi qǐyè de wùliú pèisòng xiàolǜ tíshēng le sān chéng.",
        "translationVi": "Thông qua tối ưu hóa bố cục kho bãi, hiệu suất phân phối logistics của doanh nghiệp này đã tăng 30%.",
        "priorityKeywords": [
          "仓储",
          "配送"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s14",
        "textZh": "请贵方在收到货物后七天内完成验收并出具书面确认函。",
        "pinyin": "Qǐng guìfāng zài shōudào huòwù hòu qī tiān nèi wánchéng yànshōu bìng chūjù shūmiàn quèrènhán.",
        "translationVi": "Xin quý bên hoàn thành nghiệm thu và xuất thư xác nhận bằng văn bản trong vòng 7 ngày sau khi nhận hàng.",
        "priorityKeywords": [
          "验收",
          "确认函"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s15",
        "textZh": "本季度东南亚市场的销售额占公司海外总营收的百分之四十。",
        "pinyin": "Běn jìdù Dōngnányà shìchǎng de xiāoshòu'é zhàn gōngsī hǎiwài zǒng yíngshōu de bǎifēn zhī sìshí.",
        "translationVi": "Doanh số thị trường Đông Nam Á quý này chiếm 40% tổng doanh thu nước ngoài của công ty.",
        "priorityKeywords": [
          "销售额",
          "营收"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s16",
        "textZh": "我们在原材料采购环节实行严格的供应商准入评估制度。",
        "pinyin": "Wǒmen zài yuáncáiliào cǎigòu huánjié shíxíng yángé de gōngyìngshāng zhǔnrù pínggū zhìdù.",
        "translationVi": "Chúng tôi thực hiện chế độ đánh giá đầu vào nhà cung cấp nghiêm ngặt ở khâu thu mua nguyên vật liệu.",
        "priorityKeywords": [
          "供应商",
          "准入"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s17",
        "textZh": "针对客户提出的定制化需求，研发部门迅速调整了设计图纸。",
        "pinyin": "Zhēnduì kèhù tíchū de dìngzhìhuà xūqiú, yánfā bùmén xùnsù tiáozhěng le shèjì túzhǐ.",
        "translationVi": "Nhắm vào nhu cầu tùy chỉnh do khách hàng đưa ra, bộ phận R&D đã nhanh chóng điều chỉnh bản vẽ thiết kế.",
        "priorityKeywords": [
          "定制化",
          "研发"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s18",
        "textZh": "降低包装材料的重量不仅能节约成本，还符合绿色环保理念。",
        "pinyin": "Jiàngdī bāozhuāng cáiliào de zhòngliàng bùjǐn néng jiéyuē chéngběn, hái fúhé lǜsè huánbǎo lǐniàn.",
        "translationVi": "Giảm trọng lượng vật liệu đóng gói không chỉ tiết kiệm chi phí mà còn phù hợp với triết lý bảo vệ môi trường xanh.",
        "priorityKeywords": [
          "节约",
          "理念"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s19",
        "textZh": "此次战略合作为双方在智慧物流领域的深度布局奠定了基础。",
        "pinyin": "Cǐ cì zhànlüè hézuò wèi shuāngfāng zài zhìhuì wùliú lǐngyù de shēndù bùjú diàndìng le jīchǔ.",
        "translationVi": "Sự hợp tác chiến lược lần này đã đặt nền móng cho việc bố trí sâu rộng của hai bên trong lĩnh vực logistics thông minh.",
        "priorityKeywords": [
          "战略",
          "奠定"
        ]
      },
      {
        "id": "dict-hsk5-advanced-s20",
        "textZh": "我们诚挚邀请贵公司代表出席下个月在上海举办的国际进口博览会。",
        "pinyin": "Wǒmen chéngzhì yāoqǐng guì gōngsī dàibiǎo chūxí xià gè yuè zài Shànghǎi jǔbàn de Guójì Jìnkǒu Bólǎnhuì.",
        "translationVi": "Chúng tôi chân thành mời đại diện quý công ty tham dự Hội chợ Nhập khẩu Quốc tế tổ chức tại Thượng Hải vào tháng tới.",
        "priorityKeywords": [
          "诚挚",
          "博览会"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk6-basic",
    "title": "Kinh tế vĩ mô, Văn hóa Học thuật & Truyền thông",
    "titleZh": "宏观经济、文化传承与传媒评论",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Kinh tế & Văn hóa",
    "descriptionVi": "Nghe chép chính tả HSK 6 với cấu trúc câu phức tạp, từ vựng học thuật, bảo tồn di sản văn hóa và phân tích truyền thông.",
    "sentences": [
      {
        "id": "dict-hsk6-basic-s1",
        "textZh": "非物质文化遗产的保护不仅需要政府的资金投入，更依赖于年轻一代的传承。",
        "pinyin": "Fēi wùzhì wénhuà yíchǎn de bǎohù bùjǐn xūyào zhèngfǔ de zījīn tóurù, gèng yīlài yú niánqīng yídài de chuánchéng.",
        "translationVi": "Việc bảo vệ di sản văn hóa phi vật thể không chỉ cần đầu tư vốn của chính phủ mà còn phụ thuộc vào sự kế thừa của thế hệ trẻ.",
        "priorityKeywords": [
          "文化遗产",
          "传承"
        ]
      },
      {
        "id": "dict-hsk6-basic-s2",
        "textZh": "在信息爆炸的时代，如何辨别新闻的真伪成为公众必备的媒介素养。",
        "pinyin": "Zài xìnxī bàozhà de shídài, rúhé biànbié xīnwén de zhēnwěi chéngwéi gōngzhòng bìbèi de méijiè sùyǎng.",
        "translationVi": "Trong thời đại bùng nổ thông tin, làm thế nào để phân biệt thật giả của tin tức trở thành năng lực truyền thông tất yếu của công chúng.",
        "priorityKeywords": [
          "辨别",
          "素养"
        ]
      },
      {
        "id": "dict-hsk6-basic-s3",
        "textZh": "城市化进程在带来经济繁荣的同时，也引发了交通拥堵与生态环境压力。",
        "pinyin": "Chéngshìhuà jìnchéng zài dàilái jīngjì fánróng de tóngshí, yě yǐnfā le jiāotōng yōngdǔ yǔ shēngtài huánjìng yālì.",
        "translationVi": "Tiến trình đô thị hóa trong khi mang lại sự phồn vinh kinh tế cũng gây ra ùn tắc giao thông và áp lực môi trường sinh thái.",
        "priorityKeywords": [
          "繁荣",
          "拥堵"
        ]
      },
      {
        "id": "dict-hsk6-basic-s4",
        "textZh": "真正的创新往往源于对日常现象的敏锐洞察以及持之以恒的探索。",
        "pinyin": "Zhēnzhèng de chuàngxīn wǎngwǎng yuányú duì rìcháng xiànxiàng de mǐnruì dòngchá yǐjí chízhīyǐhéng de tànsuǒ.",
        "translationVi": "Sự đổi mới thực sự thường bắt nguồn từ cái nhìn sâu sắc nhạy bén đối với hiện tượng thường ngày và sự tìm tòi kiên trì bền bỉ.",
        "priorityKeywords": [
          "敏锐",
          "持之以恒"
        ]
      },
      {
        "id": "dict-hsk6-basic-s5",
        "textZh": "消费结构的升级促使制造业向高质量、高附加值方向加速转型。",
        "pinyin": "Xiāofèi jiégòu de shēngjí cùshǐ zhìzàoyè xiàng gāo zhìliàng, gāo fùjiāzhí fāngxiàng jiāsù zhuǎnxíng.",
        "translationVi": "Sự nâng cấp cơ cấu tiêu dùng thúc đẩy ngành chế tạo tăng tốc chuyển đổi theo hướng chất lượng cao và giá trị gia tăng cao.",
        "priorityKeywords": [
          "附加值",
          "转型"
        ]
      },
      {
        "id": "dict-hsk6-basic-s6",
        "textZh": "任何一项改革措施的推行都难免会遇到既得利益群体的阻力。",
        "pinyin": "Rènhé yí xiàng gǎigé cuòshī de tuīxíng dōu nánmiǎn huì yùdào jìdé lìyì qúntǐ de zǔlì.",
        "translationVi": "Việc thực thi bất kỳ biện pháp cải cách nào cũng khó tránh khỏi gặp phải lực cản từ nhóm lợi ích既得 (đã có sẵn).",
        "priorityKeywords": [
          "措施",
          "阻力"
        ]
      },
      {
        "id": "dict-hsk6-basic-s7",
        "textZh": "文学作品之所以能够跨越时空打动读者，是因为它触及了人类共通的情感。",
        "pinyin": "Wénxué zuòpǐn zhīsuǒyǐ nénggòu kuàyuè shíkōng dǎdòng dúzhě, shì yīnwèi tā chùjí le rénlèi gòngtōng de qínggǎn.",
        "translationVi": "Sở dĩ tác phẩm văn học có thể vượt qua không gian thời gian làm lay động độc giả là vì nó chạm tới tình cảm chung của nhân loại.",
        "priorityKeywords": [
          "跨越",
          "触及"
        ]
      },
      {
        "id": "dict-hsk6-basic-s8",
        "textZh": "如果企业只顾追求短期利润而忽视社会责任，终将失去消费者的信赖。",
        "pinyin": "Rúguǒ qǐyè zhǐgù zhuīqiú duǎnqī lìrùn ér hūshì shèhuì zérèn, zhōngjiāng shīqù xiāofèizhě de xìnlài.",
        "translationVi": "Nếu doanh nghiệp chỉมุ่ง theo đuổi lợi nhuận ngắn hạn mà coi nhẹ trách nhiệm xã hội thì cuối cùng sẽ đánh mất sự tín nhiệm của người tiêu dùng.",
        "priorityKeywords": [
          "忽视",
          "信赖"
        ]
      },
      {
        "id": "dict-hsk6-basic-s9",
        "textZh": "良好的家庭教育应当在给予孩子关爱的同时，培养其独立担当的品格。",
        "pinyin": "Liánghǎo de jiātíng jiàoyù yīngdāng zài jǐyǔ háizi guān'ài de tóngshí, péiyǎng qí dúlì dāndāng de pǐngé.",
        "translationVi": "Giáo dục gia đình tốt nên vừa trao yêu thương cho trẻ vừa bồi dưỡng phẩm cách gánh vác độc lập.",
        "priorityKeywords": [
          "给予",
          "品格"
        ]
      },
      {
        "id": "dict-hsk6-basic-s10",
        "textZh": "医学研究表明，长期处于高压状态会显著削弱人体的免疫系统功能。",
        "pinyin": "Yīxué yánjiū biǎomíng, chángqī chǔyú gāoyā zhuàngtài huì xiǎnzhù xuēruò réntǐ de miǎnyì xìtǒng gōngnéng.",
        "translationVi": "Nghiên cứu y học chỉ ra rằng ở trong trạng thái áp lực cao lâu dài sẽ làm suy yếu đáng kể chức năng hệ miễn dịch của cơ thể.",
        "priorityKeywords": [
          "削弱",
          "免疫"
        ]
      },
      {
        "id": "dict-hsk6-basic-s11",
        "textZh": "随着数字经济的蓬勃发展，数据安全与个人隐私保护引发了广泛讨论。",
        "pinyin": "Suízhe shùzì jīngjì de péngbó fāzhǎn, shùjù ānquán yǔ gèrén yǐnsī bǎohù yǐnfā le guǎngfàn tǎolùn.",
        "translationVi": "Cùng với sự phát triển mạnh mẽ của kinh tế số, an toàn dữ liệu và bảo vệ quyền riêng tư cá nhân đã làm dấy lên cuộc thảo luận rộng rãi.",
        "priorityKeywords": [
          "蓬勃",
          "隐私"
        ]
      },
      {
        "id": "dict-hsk6-basic-s12",
        "textZh": "面对复杂多变的国际局势，保持战略定力显得尤为重要。",
        "pinyin": "Miànduì fùzá duōbiàn de guójì júshì, bǎochí zhànlüè dìnglì xiǎnde yóuwéi zhòngyào.",
        "translationVi": "Đối mặt với cục diện quốc tế phức tạp nhiều biến động, việc giữ vững bản lĩnh chiến lược càng trở nên đặc biệt quan trọng.",
        "priorityKeywords": [
          "局势",
          "尤为"
        ]
      },
      {
        "id": "dict-hsk6-basic-s13",
        "textZh": "传统手工艺人凭借精湛的技艺，将一件件普通材料雕琢成艺术珍品。",
        "pinyin": "Chuántǒng shǒugōng yìrén píngjiè jīngzhàn de jìyì, jiāng yí jiàn jiàn pǔtōng cáiliào diāozhuó chéng yìshù zhēnpǐn.",
        "translationVi": "Các nghệ nhân thủ công truyền thống dựa vào tay nghề tinh xảo đã chạm khắc từng vật liệu bình thường thành báu vật nghệ thuật.",
        "priorityKeywords": [
          "精湛",
          "雕琢"
        ]
      },
      {
        "id": "dict-hsk6-basic-s14",
        "textZh": "在学术研究中，严谨的逻辑推理与充分的实证数据缺一不可。",
        "pinyin": "Zài xuéshù yánjiū zhōng, yánjǐn de luójí tuīlǐ yǔ chōngfèn de shízhèng shùjù quēyībùkě.",
        "translationVi": "Trong nghiên cứu học thuật, suy luận logic chặt chẽ và dữ liệu thực chứng đầy đủ là không thể thiếu một.",
        "priorityKeywords": [
          "严谨",
          "缺一不可"
        ]
      },
      {
        "id": "dict-hsk6-basic-s15",
        "textZh": "建立健全社会保障体系有助于缩小贫富差距，促进社会公平正义。",
        "pinyin": "Jiànlì jiànquán shèhuì bǎozhàng tǐxì yǒuzhùyú suōxiǎo pínfù chājù, cùjìn shèhuì gōngpíng zhèngyì.",
        "translationVi": "Xây dựng và kiện toàn hệ thống an sinh xã hội giúp thu hẹp khoảng cách giàu nghèo, thúc đẩy công bằng chính nghĩa xã hội.",
        "priorityKeywords": [
          "健全",
          "差距"
        ]
      },
      {
        "id": "dict-hsk6-basic-s16",
        "textZh": "当遭遇挫折与逆境时，乐观豁达的心态往往是走出低谷的最大动力。",
        "pinyin": "Dāng zāoyù cuòzhé yǔ nìjìng shí, lèguān huòdá de xīntài wǎngwǎng shì zǒuchū dīgǔ de zuìdà dònglì.",
        "translationVi": "Khi gặp phải vấp ngã và nghịch cảnh, tâm thái lạc quan khoáng đạt thường là động lực lớn nhất để bước ra khỏi vực sâu.",
        "priorityKeywords": [
          "挫折",
          "豁达"
        ]
      },
      {
        "id": "dict-hsk6-basic-s17",
        "textZh": "这部历史剧因细节考究、演员演技精湛而获得了观众的一致好评。",
        "pinyin": "Zhè bù lìshǐjù yīn xìjié kǎojiu, yǎnyuán yǎnjì jīngzhàn ér huòdé le guānzhòng de yízhì hǎopíng.",
        "translationVi": "Bộ phim lịch sử này nhờ chi tiết考究 (được nghiên cứu kỹ lưỡng) và diễn xuất tinh tế của diễn viên nên nhận được lời khen ngợi đồng nhất từ khán giả.",
        "priorityKeywords": [
          "考究",
          "好评"
        ]
      },
      {
        "id": "dict-hsk6-basic-s18",
        "textZh": "盲目照搬国外经验而不顾本土实际情况，往往难以取得预期成效。",
        "pinyin": "Mángmù zhàobān guówài jīngyàn ér búgù běntǔ shíjì qíngkuàng, wǎngwǎng nányǐ qǔdé yùqī chéngxiào.",
        "translationVi": "Rập khuôn mù quáng kinh nghiệm nước ngoài mà bất chấp tình hình thực tế bản địa thì thường khó đạt được hiệu quả như kỳ vọng.",
        "priorityKeywords": [
          "照搬",
          "成效"
        ]
      },
      {
        "id": "dict-hsk6-basic-s19",
        "textZh": "科学普及工作应当用通俗易懂的语言向大众阐释深奥的科学原理。",
        "pinyin": "Kēxué pǔjí gōngzuò yīngdāng yòng tōngsú yìdǒng de yǔyán xiàng dàzhòng chǎnshì shēn'ào de kēxué yuánlǐ.",
        "translationVi": "Công tác phổ cập khoa học nên dùng ngôn ngữ bình dị dễ hiểu để giải thích các nguyên lý khoa học thâm sâu cho đại chúng.",
        "priorityKeywords": [
          "通俗",
          "阐释"
        ]
      },
      {
        "id": "dict-hsk6-basic-s20",
        "textZh": "生态环境一旦遭到毁灭性破坏，往往需要数代人的努力才能得以修复。",
        "pinyin": "Shēngtài huánjìng yídàn zāodào huǐmièxìng pòhuài, wǎngwǎng xūyào shù dài rén de nǔlì cái néng déyǐ xiūfù.",
        "translationVi": "Môi trường sinh thái một khi bị phá hoại mang tính hủy diệt thì thường cần nỗ lực của nhiều thế hệ mới có thể khôi phục được.",
        "priorityKeywords": [
          "毁灭",
          "修复"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk6-advanced",
    "title": "Tài chính Quốc tế, Đầu tư FDI & Luật Thương mại",
    "titleZh": "国际金融、跨国投资与商法实务",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Tài chính & Đầu tư",
    "descriptionVi": "Nghe chép bản tin tài chính, sáp nhập doanh nghiệp (M&A), hiệp định RCEP, thuế quan và quản trị rủi ro pháp lý quốc tế.",
    "sentences": [
      {
        "id": "dict-hsk6-advanced-s1",
        "textZh": "区域全面经济伙伴关系协定的生效为亚太地区贸易自由化注入了强劲动力。",
        "pinyin": "Qūyù Quánmiàn Jīngjì Huǒbàn Guānxi Xiédìng de shēngxiào wèi Yà-Tài dìqū màoyì zìyóuhuà zhùrù le qiángjìng dònglì.",
        "translationVi": "Việc Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) có hiệu lực đã bơm động lực mạnh mẽ cho tự do hóa thương mại khu vực châu Á - Thái Bình Dương.",
        "priorityKeywords": [
          "协定",
          "强劲"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s2",
        "textZh": "跨国企业在进行海外并购时，必须对目标公司的财务状况进行尽职调查。",
        "pinyin": "Kuàguó qǐyè zài jìnxíng hǎiwài bìnggòu shí, bìxū duì mùbiāo gōngsī de cáiwù zhuàngkuàng jìnxíng jìnzhí diàochá.",
        "translationVi": "Doanh nghiệp đa quốc gia khi tiến hành M&A ở nước ngoài bắt buộc phải thực hiện thẩm định chuyên sâu (due diligence) về tình hình tài chính của công ty mục tiêu.",
        "priorityKeywords": [
          "并购",
          "尽职调查"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s3",
        "textZh": "受全球通胀压力及央行加息政策影响，资本市场的避险情绪明显升温。",
        "pinyin": "Shòu quánqiú tōngzhàng yālì jí yāngháng jiāxī zhèngcè yǐngxiǎng, zīběn shìchǎng de bìxiǎn qíngxù míngxiǎn shēngwēn.",
        "translationVi": "Chịu ảnh hưởng từ áp lực lạm phát toàn cầu và chính sách tăng lãi suất của ngân hàng trung ương, tâm lý trú ẩn an toàn trên thị trường vốn tăng lên rõ rệt.",
        "priorityKeywords": [
          "通胀",
          "加息"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s4",
        "textZh": "健全的内部控制与合规管理体系是企业防范跨国经营法律风险的屏障。",
        "pinyin": "Jiànquán de nèibù kòngzhì yǔ héguī guǎnlǐ tǐxì shì qǐyè fángfàn kuàguó jīngyíng fǎlǜ fēngxiǎn de píngzhàng.",
        "translationVi": "Hệ thống kiểm soát nội bộ và quản trị tuân thủ kiện toàn là bức bình phong giúp doanh nghiệp phòng ngừa rủi ro pháp lý khi kinh doanh đa quốc gia.",
        "priorityKeywords": [
          "合规",
          "防范"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s5",
        "textZh": "近年来，越南凭借优越的地理位置与年轻的人口结构吸引了大量制造业外资。",
        "pinyin": "Jìnnián lái, Yuènán píngjiè yōuyuè de dìlǐ wèizhì yǔ niánqīng de rénkǒu jiégòu xīyǐn le dàliàng zhìzàoyè wàizī.",
        "translationVi": "Những năm gần đây, Việt Nam nhờ vị trí địa lý ưu việt và cơ cấu dân số trẻ đã thu hút lượng lớn vốn đầu tư nước ngoài trong ngành chế tạo.",
        "priorityKeywords": [
          "优越",
          "外资"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s6",
        "textZh": "人民币跨境结算业务的扩大有助于外贸企业规避美元汇率波动风险。",
        "pinyin": "Rénmínbì kuàjìng jiésuàn yèwù de kuòdà yǒuzhùyú wàimào qǐyè guībì Měiyuán huìlǜ bōdòng fēngxiǎn.",
        "translationVi": "Việc mở rộng nghiệp vụ thanh toán xuyên biên giới bằng Nhân dân tệ giúp các doanh nghiệp ngoại thương phòng tránh rủi ro biến động tỷ giá USD.",
        "priorityKeywords": [
          "结算",
          "规避"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s7",
        "textZh": "在反倾销调查中，出口商需要提供详实的成本核算资料以维护自身合法权益。",
        "pinyin": "Zài fǎnqīngxiāo diàochá zhōng, chūkǒushāng xūyào tígōng xiángshí de chéngběn hésuàn zīliào yǐ wéihù zìshēn héfǎ quányì.",
        "translationVi": "Trong cuộc điều tra chống bán phá giá, nhà xuất khẩu cần cung cấp tài liệu hạch toán chi phí chi tiết và xác thực để bảo vệ quyền lợi hợp pháp của mình.",
        "priorityKeywords": [
          "反倾销",
          "权益"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s8",
        "textZh": "供应链金融通过盘活应收账款，有效缓解了中小微企业的资金周转难题。",
        "pinyin": "Gōngyìngliàn jīnróng tōngguò pánhuó yīngshōu zhàngkuǎn, yǒuxiào huǎnjiě le zhōng-xiǎo-wēi qǐyè de zījīn zhōuzhuǎn nántí.",
        "translationVi": "Tài chính chuỗi cung ứng thông qua việc khai thác linh hoạt các khoản phải thu đã làm dịu hiệu quả bài toán xoay vòng vốn của các doanh nghiệp vừa, nhỏ và siêu nhỏ.",
        "priorityKeywords": [
          "应收账款",
          "周转"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s9",
        "textZh": "绿色债券的发行不仅拓宽了环保项目的融资渠道，也引导了可持续投资理念。",
        "pinyin": "Lǜsè zhàiquàn de fāxíng bùjǐn tuòkuān le huánbǎo xiàngmù de róngzī qúdào, yě yǐndǎo le kěchíxù tóuzī lǐniàn.",
        "translationVi": "Việc phát hành trái phiếu xanh không chỉ mở rộng kênh huy động vốn cho các dự án bảo vệ môi trường mà còn định hướng triết lý đầu tư bền vững.",
        "priorityKeywords": [
          "债券",
          "融资"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s10",
        "textZh": "若合同中英文版本在解释上存在分歧，双方同意以中文文本为准。",
        "pinyin": "Ruò hétong Zhōng-Yīngwén bǎnběn zài jiěshì shàng cúnzài fēnqí, shuāngfāng tóngyì yǐ Zhōngwén wénběn wéizhǔn.",
        "translationVi": "Nếu bản tiếng Trung và tiếng Anh của hợp đồng có sự bất đồng trong cách giải thích, hai bên đồng ý lấy văn bản tiếng Trung làm chuẩn.",
        "priorityKeywords": [
          "分歧",
          "为准"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s11",
        "textZh": "数字化转型绝非简单地购买软件设备，而是对企业业务流程的全面重塑。",
        "pinyin": "Shùzìhuà zhuǎnxíng juéfēi jiǎndān de gòumǎi ruǎnjiàn shèbèi, ér shì duì qǐyè yèwù liúchéng de quánmiàn chóngsù.",
        "translationVi": "Chuyển đổi số tuyệt đối không phải là mua thiết bị phần mềm đơn thuần mà là tái định hình toàn diện quy trình nghiệp vụ doanh nghiệp.",
        "priorityKeywords": [
          "绝非",
          "重塑"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s12",
        "textZh": "任何违反公平竞争原则的垄断行为都将受到监管机构的严厉处罚。",
        "pinyin": "Rènhé wéifǎn gōngpíng jìngzhēng yuánzé de lǒngduàn xíngwéi dōu jiāng shòudào jiānguǎn jīgòu de yánlì chǔfá.",
        "translationVi": "Bất kỳ hành vi độc quyền nào vi phạm nguyên tắc cạnh tranh công bằng đều sẽ bị cơ quan quản lý xử phạt nghiêm khắc.",
        "priorityKeywords": [
          "垄断",
          "监管"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s13",
        "textZh": "该集团通过剥离非核心亏损业务，将资源集中于高增长的半导体领域。",
        "pinyin": "Gāi jítuán tōngguò bōlí fēi héxīn kuīsǔn yèwù, jiāng zīyuán jízhōng yú gāo zēngzhǎng de bàndǎotǐ lǐngyù.",
        "translationVi": "Tập đoàn này thông qua việc tách bỏ các mảng kinh doanh thua lỗ không cốt lõi đã tập trung nguồn lực vào lĩnh vực bán dẫn tăng trưởng cao.",
        "priorityKeywords": [
          "剥离",
          "亏损"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s14",
        "textZh": "国际商事仲裁具有保密性强、裁决在缔约国可强制执行等显著优势。",
        "pinyin": "Guójì shāngshì zhòngcái jùyǒu bǎomìxìng qiáng, cáijué zài dìyuēguó kě qiángzhì zhíxíng děng xiǎnzhù yōushì.",
        "translationVi": "Trọng tài thương mại quốc tế có ưu thế nổi bật như tính bảo mật cao, phán quyết có thể cưỡng chế thi hành tại các quốc gia ký kết.",
        "priorityKeywords": [
          "裁决",
          "强制"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s15",
        "textZh": "品牌溢价能力的提升离不开长期的技术研发投入与严苛的品质管控。",
        "pinyin": "Pǐnpái yìjià nénglì de tíshēng líbùkāi chángqī de jìshù yánfā tóurù yǔ yánkē de pǐnzhì guǎnkòng.",
        "translationVi": "Việc nâng cao năng lực định giá cao (brand premium) của thương hiệu không thể tách rời đầu tư R&D lâu dài và kiểm soát chất lượng khắt khe.",
        "priorityKeywords": [
          "溢价",
          "严苛"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s16",
        "textZh": "面对原材料成本飙升，企业亟需通过工艺革新与规模效应来消化成本压力。",
        "pinyin": "Miànduì yuáncáiliào chéngběn biāoshēng, qǐyè jíxū tōngguò gōngyì géxīn yǔ guīmó xiàoyìng lái xiāohuà chéngběn yālì.",
        "translationVi": "Đối mặt với chi phí nguyên liệu tăng vọt, doanh nghiệp cấp thiết cần tiêu hóa áp lực chi phí thông qua cải tiến công nghệ và hiệu ứng quy mô.",
        "priorityKeywords": [
          "飙升",
          "亟需"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s17",
        "textZh": "跨境数据流动的合规审查已成为科技企业出海过程中不可忽视的议题。",
        "pinyin": "Kuàjìng shùjù liúdòng de héguī shěnchá yǐ chéngwéi kējì qǐyè chūhǎi guòchéng zhōng bùkě hūshì de yìtí.",
        "translationVi": "Thẩm tra tuân thủ dòng chảy dữ liệu xuyên biên giới đã trở thành议题 (vấn đề nghị sự) không thể bỏ qua trong quá trình vươn ra nước ngoài của các doanh nghiệp công nghệ.",
        "priorityKeywords": [
          "审查",
          "出海"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s18",
        "textZh": "在谈判陷入僵局时，适当作出非核心利益的妥协往往能推动协议达成。",
        "pinyin": "Zài tánpàn xiànrù jiāngjú shí, shìdàng zuòchū fēi héxīn lìyì de tuǒxié wǎngwǎng néng tuīdòng xiéyì dáchéng.",
        "translationVi": "Khi đàm phán rơi vào bế tắc, nhượng bộ thích đáng ở những lợi ích không cốt lõi thường có thể thúc đẩy đạt được thỏa thuận.",
        "priorityKeywords": [
          "僵局",
          "妥协"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s19",
        "textZh": "董事会一致批准了新财年的资本支出预算及东南亚生产基地扩建计划。",
        "pinyin": "Dǒngshìhuì yízhì pīzhǔn le xīn cáinián de zīběn zhīchū yùsuàn jí Dōngnányà shēngchǎn jīdì kuòjiàn jìhuà.",
        "translationVi": "Hội đồng quản trị đã nhất trí phê duyệt ngân sách chi tiêu vốn cho năm tài chính mới và kế hoạch mở rộng cơ sở sản xuất tại Đông Nam Á.",
        "priorityKeywords": [
          "董事会",
          "预算"
        ]
      },
      {
        "id": "dict-hsk6-advanced-s20",
        "textZh": "构建互利共赢的经贸合作伙伴关系符合两国人民的根本利益与长远福祉。",
        "pinyin": "Gòujiàn hùlì gòngyíng de jīngmào hézuò huǒbàn guānxi fúhé liǎng guó rénmín de gēnběn lìyì yǔ chángyuǎn fúzhǐ.",
        "translationVi": "Xây dựng quan hệ đối tác hợp tác kinh tế thương mại cùng có lợi phù hợp với lợi ích căn bản và phúc lợi lâu dài của nhân dân hai nước.",
        "priorityKeywords": [
          "互利共赢",
          "福祉"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk7-basic",
    "title": "Báo chí Kinh tế, Chuyển đổi Xanh & Quản trị Công (HSK 7)",
    "titleZh": "经济报道、绿色转型与公共治理",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Báo chí & Kinh tế xanh",
    "descriptionVi": "Nghe chép trình độ Cao cấp HSK 7 về chính sách trung hòa carbon, quản trị đô thị thông minh và bình luận kinh tế thời sự.",
    "sentences": [
      {
        "id": "dict-hsk7-basic-s1",
        "textZh": "实现碳达峰与碳中和是一场广泛而深刻的经济社会系统性变革。",
        "pinyin": "Shíxiàn tàndáfēng yǔ tànzhōnghé shì yì chǎng guǎngfàn ér shēnkè de jīngjì shèhuì xìtǒngxìng biàngé.",
        "translationVi": "Thực hiện đạt đỉnh carbon và trung hòa carbon là một cuộc biến革 (cải cách) mang tính hệ thống kinh tế xã hội rộng lớn và sâu sắc.",
        "priorityKeywords": [
          "碳中和",
          "变革"
        ]
      },
      {
        "id": "dict-hsk7-basic-s2",
        "textZh": "智慧城市建设应当以人为本，避免沦为单纯追求技术炫技的形象工程。",
        "pinyin": "Zhìhuì chéngshì jiànshè yīngdāng yǐrénwéiběn, bìmiǎn lúnwéi dānchún zhuīqiú jìshù xuànjì de xíngxiàng gōngchéng.",
        "translationVi": "Xây dựng thành phố thông minh cần lấy con người làm gốc, tránh rơi vào công trình hình thức chỉ đơn thuần khoe mẽ công nghệ.",
        "priorityKeywords": [
          "以人为本",
          "沦为"
        ]
      },
      {
        "id": "dict-hsk7-basic-s3",
        "textZh": "构建现代物流体系对于畅通国内国际双循环具有至关重要的战略意义。",
        "pinyin": "Gòujiàn xiàndài wùliú tǐxì duìyú chàngtōng guónèi guójì shuāngxúnhuán jùyǒu zhìguān zhòngyào de zhànlüè yìyì.",
        "translationVi": "Xây dựng hệ thống logistics hiện đại có ý nghĩa chiến lược vô cùng quan trọng đối với việc làm thông suốt vòng tuần hoàn kép trong nước và quốc tế.",
        "priorityKeywords": [
          "畅通",
          "至关重要"
        ]
      },
      {
        "id": "dict-hsk7-basic-s4",
        "textZh": "数字鸿沟的存在使得部分老年群体在享受智能化公共服务时面临诸多不便。",
        "pinyin": "Shùzì hónggōu de cúnzài shǐde bùfen lǎonián qúntǐ zài xiǎngshòu zhìnénghuà gōnggòng fúwù shí miànlín zhūduō búbiàn.",
        "translationVi": "Sự tồn tại của khoảng cách số khiến một bộ phận người cao tuổi gặp nhiều bất tiện khi thụ hưởng dịch vụ công thông minh.",
        "priorityKeywords": [
          "鸿沟",
          "诸多"
        ]
      },
      {
        "id": "dict-hsk7-basic-s5",
        "textZh": "唯有破除体制机制障碍，方能充分激发各类市场主体的创新活力。",
        "pinyin": "Wéiyǒu pòchú tǐzhì jīzhì zhàng'ài, fāng néng chōngfèn jīfā gèlèi shìchǎng zhǔtǐ de chuàngxīn huólì.",
        "translationVi": "Chỉ có xóa bỏ rào cản thể chế cơ chế mới có thể khơi dậy đầy đủ sức sống sáng tạo của các chủ thể thị trường.",
        "priorityKeywords": [
          "破除",
          "激发"
        ]
      },
      {
        "id": "dict-hsk7-basic-s6",
        "textZh": "乡村振兴不仅要促进农民增收，更要注重乡土文化生态的保育与活化。",
        "pinyin": "Xiāngcūn zhènxīng bùjǐn yào cùjìn nóngmín zēngshōu, gèng yào zhùzhòng xiāngtǔ wénhuà shēngtài de bǎoyù yǔ huóhuà.",
        "translationVi": "Chấn hưng nông thôn không chỉ thúc đẩy tăng thu nhập cho nông dân mà còn phải chú trọng bảo tồn và làm sống lại hệ sinh thái văn hóa bản địa.",
        "priorityKeywords": [
          "振兴",
          "保育"
        ]
      },
      {
        "id": "dict-hsk7-basic-s7",
        "textZh": "在突发公共卫生事件中，透明及时的信息披露是稳定社会情绪的关键。",
        "pinyin": "Zài tūfā gōnggòng wèishēng shìjiàn zhōng, tòumíng jíshí de xìnxī pīlù shì wěndìng shèhuì qíngxù de guānjiàn.",
        "translationVi": "Trong các sự cố y tế công cộng bất ngờ, việc công bố thông tin minh bạch kịp thời là chìa khóa ổn định tâm lý xã hội.",
        "priorityKeywords": [
          "披露",
          "关键"
        ]
      },
      {
        "id": "dict-hsk7-basic-s8",
        "textZh": "高等教育应当与产业需求紧密对接，着力破解结构性就业矛盾。",
        "pinyin": "Gāoděng jiàoyù yīngdāng yǔ chǎnyè xūqiú jǐnmì duìjiē, zhuólì pòjiě jiégòuxìng jiùyè máodùn.",
        "translationVi": "Giáo dục đại học cần kết nối chặt chẽ với nhu cầu ngành nghề, tập trung tháo gỡ mâu thuẫn việc làm mang tính cơ cấu.",
        "priorityKeywords": [
          "对接",
          "破解"
        ]
      },
      {
        "id": "dict-hsk7-basic-s9",
        "textZh": "过度商业化开发往往会侵蚀历史文化街区的原真性与人文底蕴。",
        "pinyin": "Guòdù shāngyèhuà kāifā wǎngwǎng huì qīnshí lìshǐ wénhuà jiēqū de yuánzhēnxìng yǔ rénwén dǐyùn.",
        "translationVi": "Khai thác thương mại hóa quá mức thường sẽ bào mòn tính nguyên bản và bề dày nhân văn của các khu phố văn hóa lịch sử.",
        "priorityKeywords": [
          "侵蚀",
          "底蕴"
        ]
      },
      {
        "id": "dict-hsk7-basic-s10",
        "textZh": "健全知识产权侵权惩罚性赔偿制度，有助于营造尊重创新的法治环境。",
        "pinyin": "Jiànquán zhīshi chǎnquán qīnquán chéngfáxìng péicháng zhìdù, yǒuzhùyú yíngzào zūnzhòng chuàngxīn de fǎzhì huánjìng.",
        "translationVi": "Kiện toàn chế độ bồi thường mang tính trừng phạt đối với hành vi xâm phạm sở hữu trí tuệ giúp tạo dựng môi trường pháp quyền tôn trọng đổi mới sáng tạo.",
        "priorityKeywords": [
          "侵权",
          "法治"
        ]
      },
      {
        "id": "dict-hsk7-basic-s11",
        "textZh": "人口出生率的持续走低对未来劳动力供给及社会养老体系构成了严峻挑战。",
        "pinyin": "Rénkǒu chūshēnglǜ de chíxù zǒudī duì wèilái láodònglì gōngjǐ jí shèhuì yǎnglǎo tǐxì gòuchéng le yánjùn tiǎozhàn.",
        "translationVi": "Tỷ lệ sinh tiếp tục giảm sâu đặt ra thách thức nghiêm trọng đối với nguồn cung lao động tương lai và hệ thống hưu trí xã hội.",
        "priorityKeywords": [
          "供给",
          "严峻"
        ]
      },
      {
        "id": "dict-hsk7-basic-s12",
        "textZh": "平台经济在提升资源配置效率的同时，也须防范算法歧视与不正当竞争。",
        "pinyin": "Píngtái jīngjì zài tíshēng zīyuán pèizhì xiàolǜ de tóngshí, yě xū fángfàn suànfǎ qíshì yǔ bùzhèngdàng jìngzhēng.",
        "translationVi": "Kinh tế nền tảng trong khi nâng cao hiệu quả phân bổ nguồn lực cũng phải phòng ngừa phân biệt đối xử bằng thuật toán và cạnh tranh không lành mạnh.",
        "priorityKeywords": [
          "配置",
          "歧视"
        ]
      },
      {
        "id": "dict-hsk7-basic-s13",
        "textZh": "文化交流绝非单向输出，而是在相互鉴赏与对话中实现美美与共。",
        "pinyin": "Wénhuà jiāoliú juéfēi dānxiàng shūchū, ér shì zài xiānghù jiànshǎng yǔ duìhuà zhōng shíxiàn měiměiyǔgòng.",
        "translationVi": "Giao lưu văn hóa tuyệt nhiên không phải là xuất khẩu một chiều mà là thực hiện sự hòa hợp vẻ đẹp chung trong đối thoại và thưởng thức lẫn nhau.",
        "priorityKeywords": [
          "鉴赏",
          "美美与共"
        ]
      },
      {
        "id": "dict-hsk7-basic-s14",
        "textZh": "基础研究周期长、不确定性高，亟需长期稳定的经费支持与宽容失败的机制。",
        "pinyin": "Jīchǔ yánjiū zhōuqī cháng, bùquèdìngxìng gāo, jíxū chángqī wěndìng de jīngfèi zhīchí yǔ kuānróng shībài de jīzhì.",
        "translationVi": "Nghiên cứu cơ bản có chu kỳ dài, tính bất định cao, rất cần nguồn kinh phí hỗ trợ ổn định lâu dài và cơ chế bao dung cho thất bại.",
        "priorityKeywords": [
          "周期",
          "宽容"
        ]
      },
      {
        "id": "dict-hsk7-basic-s15",
        "textZh": "在全球产业链重构背景下，提升关键核心技术的自主可控能力迫在眉睫。",
        "pinyin": "Zài quánqiú chǎnyèliàn chónggòu bèijǐng xià, tíshēng guānjiàn héxīn jìshù de zìzhǔ kěkòng nénglì pòzàiméijié.",
        "translationVi": "Trong bối cảnh tái cấu trúc chuỗi công nghiệp toàn cầu, việc nâng cao năng lực tự chủ kiểm soát công nghệ lõi then chốt là vô cùng cấp bách.",
        "priorityKeywords": [
          "重构",
          "迫在眉睫"
        ]
      },
      {
        "id": "dict-hsk7-basic-s16",
        "textZh": "舆论监督作为社会治理的重要一环，应当建立在事实准确与客观公正的基础之上。",
        "pinyin": "Yúlùn jiāndū zuòwéi shèhuì zhìlǐ de zhòngyào yì huán, yīngdāng jiànlì zài shìshí zhǔnquè yǔ kèguān gōngzhèng de jīchǔ zhīshàng.",
        "translationVi": "Giám sát dư luận với tư cách là một mắt xích quan trọng của quản trị xã hội cần được xây dựng trên nền tảng sự thật chính xác và khách quan công tâm.",
        "priorityKeywords": [
          "舆论",
          "公正"
        ]
      },
      {
        "id": "dict-hsk7-basic-s17",
        "textZh": "博物馆文创产品的走红，折射出当代青年对中华美学精神的认同与追捧。",
        "pinyin": "Bówùguǎn wénchuàng chǎnpǐn de zǒuhóng, zhéshè chū dāngdài qīngnián duì Zhōnghuá měixué jīngshén de rèntóng yǔ zhuīpěng.",
        "translationVi": "Sự nổi tiếng của các sản phẩm sáng tạo văn hóa bảo tàng phản chiếu sự đồng cảm và săn đón của thanh niên đương đại đối với tinh thần mỹ học Trung Hoa.",
        "priorityKeywords": [
          "折射",
          "追捧"
        ]
      },
      {
        "id": "dict-hsk7-basic-s18",
        "textZh": "极端天气事件的频发再次敲响了全球气候治理与减排合作刻不容缓的警钟。",
        "pinyin": "Jíduān tiānqì shìjiàn de pínfā zàicì qiāoxiǎng le quánqiú qìhòu zhìlǐ yǔ jiǎnpái hézuò kèbùrónghuǎn de jǐngzhōng.",
        "translationVi": "Việc các hiện tượng thời tiết cực đoan xảy ra dồn dập một lần nữa gióng lên hồi chuông cảnh báo rằng quản trị khí hậu toàn cầu và hợp tác giảm phát thải không thể chậm trễ.",
        "priorityKeywords": [
          "频发",
          "刻不容缓"
        ]
      },
      {
        "id": "dict-hsk7-basic-s19",
        "textZh": "城市更新应注重保留市井烟火气，让居民在环境改善中记住乡愁。",
        "pinyin": "Chéngshì gēngxīn yīng zhùzhòng bǎoliú shìjǐng yānhuǒqì, ràng jūmín zài huánjìng gǎishàn zhōng jìzhù xiāngchóu.",
        "translationVi": "Chỉnh trang đô thị nên chú trọng giữ lại hơi thở đời sống phố phường để cư dân vẫn nhớ về nỗi nhớ quê hương trong môi trường được cải thiện.",
        "priorityKeywords": [
          "烟火气",
          "乡愁"
        ]
      },
      {
        "id": "dict-hsk7-basic-s20",
        "textZh": "唯有秉持开放包容的心态，才能在瞬息万变的时代浪潮中立于不败之地。",
        "pinyin": "Wéiyǒu bǐngchí kāifàng bāoróng de xīntài, cái néng zài shùnxīwànbiàn de shídài làngcháo zhōng lìyúbúbàizhīdì.",
        "translationVi": "Chỉ có kiên trì tâm thái cởi mở bao dung mới có thể đứng ở thế bất bại trong làn sóng thời đại biến đổi trong chớp mắt.",
        "priorityKeywords": [
          "秉持",
          "瞬息万变"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk7-advanced",
    "title": "Diễn văn Hội nghị Thượng đỉnh & Nghiên cứu Học thuật (HSK 7)",
    "titleZh": "国际峰会致辞与学术专题报告",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Học thuật & Ngoại giao",
    "descriptionVi": "Nghe chép văn phong trang trọng tại diễn đàn kinh tế quốc tế, báo cáo nghiên cứu học thuật và hợp tác đa phương.",
    "sentences": [
      {
        "id": "dict-hsk7-advanced-s1",
        "textZh": "各位嘉宾、女士们、先生们，非常荣幸受邀出席本届亚太经贸合作高峰论坛。",
        "pinyin": "Gèwèi jiābīn, nǚshìmen, xiānshengmen, fēicháng róngxìng shòuyāo chūxí běn jiè Yà-Tài Jīngmào Hézuò Gāofēng Lùntán.",
        "translationVi": "Kính thưa quý vị khách quý, quý bà và quý ông, tôi vô cùng vinh dự được mời tham dự Diễn đàn Thượng đỉnh Hợp tác Kinh tế Thương mại châu Á - Thái Bình Dương lần này.",
        "priorityKeywords": [
          "荣幸",
          "论坛"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s2",
        "textZh": "当今世界正经历百年未有之大变局，多边主义与自由贸易面临严峻考验。",
        "pinyin": "Dāngjīn shìjiè zhèng jīnglì bǎinián wèiyǒu zhī dàbiànjú, duōbiānzhǔyì yǔ zìyóu màoyì miànlín yánjùn kǎoyàn.",
        "translationVi": "Thế giới ngày nay đang trải qua cục diện biến đổi lớn chưa từng có trong một trăm năm, chủ nghĩa đa phương và thương mại tự do đối mặt với thử thách khắc nghiệt.",
        "priorityKeywords": [
          "变局",
          "多边主义"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s3",
        "textZh": "任何搞单边保护主义和脱钩断链的做法，最终都将损害全球产业链的稳定。",
        "pinyin": "Rènhé gǎo dānbiān bǎohùzhǔyì hé tuōgōu duànliàn de zuòfǎ, zuìzhōng dōu jiāng sǔnhài quánqiú chǎnyèliàn de wěndìng.",
        "translationVi": "Bất kỳ cách làm nào theo chủ nghĩa bảo hộ đơn phương và tách rời đứt gãy chuỗi cung ứng cuối cùng đều sẽ làm tổn hại sự ổn định của chuỗi công nghiệp toàn cầu.",
        "priorityKeywords": [
          "脱钩",
          "损害"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s4",
        "textZh": "本研究采用定量与定性相结合的方法，对跨境电商消费者行为进行了实证分析。",
        "pinyin": "Běn yánjiū cǎiyòng dìngliàng yǔ dìngxìng xiāng jiéhé de fāngfǎ, duì kuàjìng diànshāng xiāofèizhě xíngwéi jìnxíng le shízhèng fēnxī.",
        "translationVi": "Nghiên cứu này áp dụng phương pháp kết hợp định lượng và định tính để phân tích thực chứng hành vi người tiêu dùng thương mại điện tử xuyên biên giới.",
        "priorityKeywords": [
          "定量",
          "实证"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s5",
        "textZh": "样本数据显示，物流时效与售后保障是影响海外用户复购决策的核心变量。",
        "pinyin": "Yàngběn shùjù xiǎnshì, wùliú shíxiào yǔ shòuhòu bǎozhàng shì yǐngxiǎng hǎiwài yònghù fùgòu juécè de héxīn biànliàng.",
        "translationVi": "Dữ liệu mẫu cho thấy thời gian vận chuyển và bảo đảm hậu mãi là biến số cốt lõi ảnh hưởng đến quyết định mua lại của người dùng nước ngoài.",
        "priorityKeywords": [
          "样本",
          "变量"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s6",
        "textZh": "在人工智能伦理框架下，算法的透明性与可解释性应当成为技术落地的先决条件。",
        "pinyin": "Zài réngōng zhìnéng lúnlǐ kuàngjià xià, suànfǎ de tòumíngxìng yǔ kějiěshìxìng yīngdāng chéngwéi jìshù luòdì de xiānjué tiáojiàn.",
        "translationVi": "Trong khuôn khổ đạo đức trí tuệ nhân tạo, tính minh bạch và khả năng giải thích được của thuật toán cần trở thành điều kiện tiên quyết để triển khai công nghệ.",
        "priorityKeywords": [
          "伦理",
          "先决条件"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s7",
        "textZh": "各国应当摒弃零和博弈的陈旧思维，在良性竞争与协同创新中实现共同发展。",
        "pinyin": "Gèguó yīngdāng bìngqì línghé bóyì de chénjiù sīwéi, zài liángxìng jìngzhēng yǔ xiétóng chuàngxīn zhōng shíxiàn gòngtóng fāzhǎn.",
        "translationVi": "Các quốc gia nên loại bỏ tư duy cũ kỹ về trò chơi có tổng bằng không, thực hiện phát triển chung trong cạnh tranh lành mạnh và đổi mới hiệp đồng.",
        "priorityKeywords": [
          "摒弃",
          "零和博弈"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s8",
        "textZh": "基础设施互联互通是促进区域经济一体化与消除发展壁垒的重要引擎。",
        "pinyin": "Jīchǔ shèshī hùlián hùtōng shì cùjìn qūyù jīngjì yìtǐhuà yǔ xiāochú fāzhǎn bìlěi de zhòngyào yǐnqíng.",
        "translationVi": "Kết nối hạ tầng cơ sở là động cơ quan trọng thúc đẩy nhất thể hóa kinh tế khu vực và xóa bỏ rào cản phát triển.",
        "priorityKeywords": [
          "一体化",
          "壁垒"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s9",
        "textZh": "学术界普遍认为，制度创新对经济增长的贡献率在后工业化时代愈发凸显。",
        "pinyin": "Xuéshùjiè pǔbiàn rènwéi, zhìdù chuàngxīn duì jīngjì zēngzhǎng de gòngxiànlǜ zài hòu gōngyèhuà shídài yùfā tūxiǎn.",
        "translationVi": "Giới học thuật phổ biến cho rằng tỷ lệ đóng góp của đổi mới thể chế đối với tăng trưởng kinh tế ngày càng nổi bật trong thời đại hậu công nghiệp hóa.",
        "priorityKeywords": [
          "贡献率",
          "凸显"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s10",
        "textZh": "面对气候变化带来的系统性风险，发达国家应切实履行对发展中国家的资金与技术承诺。",
        "pinyin": "Miànduì qìhòu biànhuà dàilái de xìtǒngxìng fēngxiǎn, fādá guójiā yīng qièshí lǚxíng duì fāzhǎnzhōng guójiā de zījīn yǔ jìshù chéngnuò.",
        "translationVi": "Đối mặt với rủi ro hệ thống do biến đổi khí hậu mang lại, các nước phát triển cần thực hiện thiết thực cam kết về vốn và công nghệ đối với các nước đang phát triển.",
        "priorityKeywords": [
          "切实",
          "履行"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s11",
        "textZh": "文献综述表明，跨文化领导力能够显著降低跨国并购整合阶段的组织冲突。",
        "pinyin": "Wénxiàn zōngshù biǎomíng, kuàwénhuà lǐngdǎolì nénggòu xiǎnzhù jiàngdī kuàguó bìnggòu zhěnghé jiēduàn de zǔzhī chōngtū.",
        "translationVi": "Tổng quan tài liệu nghiên cứu chỉ ra rằng năng lực lãnh đạo đa văn hóa có thể làm giảm đáng kể xung đột tổ chức trong giai đoạn hậu sáp nhập đa quốc gia.",
        "priorityKeywords": [
          "文献综述",
          "整合"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s12",
        "textZh": "数字货币的推广不仅重塑了跨境支付清算体系，也对传统货币政策传导机制提出了新课题。",
        "pinyin": "Shùzì huòbì de tuīguǎng bùjǐn chóngsù le kuàjìng zhīfù qīngsuàn tǐxì, yě duì chuántǒng huòbì zhèngcè chuándǎo jīzhì tíchū le xīn kètí.",
        "translationVi": "Việc phổ biến tiền kỹ thuật số không chỉ tái định hình hệ thống thanh toán bù trừ xuyên biên giới mà còn đặt ra bài toán mới cho cơ chế truyền dẫn chính sách tiền tệ truyền thống.",
        "priorityKeywords": [
          "清算",
          "传导"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s13",
        "textZh": "我们在推进产业结构优化升级的过程中，绝不能以牺牲生态环境为代价。",
        "pinyin": "Wǒmen zài tuījìn chǎnyè jiégòu yōuhuà shēngjí de guòchéng zhōng, jué bùnéng yǐ xīshēng shēngtài huánjìng wéi dàijià.",
        "translationVi": "Trong quá trình thúc đẩy tối ưu hóa và nâng cấp cơ cấu ngành nghề, chúng ta tuyệt đối không thể đánh đổi bằng việc hy sinh môi trường sinh thái.",
        "priorityKeywords": [
          "牺牲",
          "代价"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s14",
        "textZh": "高水平对外开放要求我们在规则、规制、管理、标准等制度型开放上迈出更大步伐。",
        "pinyin": "Gāo shuǐpíng duìwài kāifàng yāoqiú wǒmen zài guīzé, guīzhì, guǎnlǐ, biāozhǔn děng zhìdùxíng kāifàng shàng màichū gèng dà bùfá.",
        "translationVi": "Mở cửa đối ngoại trình độ cao đòi hỏi chúng ta phải tiến những bước lớn hơn trong mở cửa mang tính thể chế như quy tắc, quy chế, quản lý và tiêu chuẩn.",
        "priorityKeywords": [
          "规制",
          "步伐"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s15",
        "textZh": "该理论模型虽然在假设条件下具有逻辑自洽性，但在解释现实经济波动时仍存在局限。",
        "pinyin": "Gāi lǐlùn móxíng suīrán zài jiǎshè tiáojiàn xià jùyǒu luójí zìqiàxìng, dàn zài jiěshì xiànshí jīngjì bōdòng shí réng cúnzài júxiàn.",
        "translationVi": "Mô hình lý thuyết này tuy có tính tự nhất quán về logic dưới các điều kiện giả định nhưng vẫn tồn tại hạn chế khi giải thích biến động kinh tế thực tế.",
        "priorityKeywords": [
          "自洽",
          "局限"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s16",
        "textZh": "产学研深度融合有助于打通科技成果从实验室走向市场应用的最后一公里。",
        "pinyin": "Chǎn-xué-yán shēndù rónghé yǒuzhùyú dǎtōng kējì chéngguǒ cóng shíyànshì zǒuxiàng shìchǎng yìngyòng de zuìhòu yì gōnglǐ.",
        "translationVi": "Sự dung hợp sâu sắc giữa doanh nghiệp - trường đại học - viện nghiên cứu giúp đả thông chặng đường cuối cùng đưa thành quả khoa học công nghệ từ phòng thí nghiệm ra ứng dụng thị trường.",
        "priorityKeywords": [
          "产学研",
          "融合"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s17",
        "textZh": "只有建立严谨的学术规范与零容忍的惩戒机制，才能有效遏制学术不端行为。",
        "pinyin": "Zhǐyǒu jiànlì yánjǐn de xuéshù guīfàn yǔ língróngrěn de chéngjiè jīzhì, cái néng yǒuxiào èzhì xuéshù bùduān xíngwéi.",
        "translationVi": "Chỉ có thiết lập quy phạm học thuật nghiêm ngặt và cơ chế trừng계 (xử phạt) không khoan nhượng mới có thể ngăn chặn hiệu quả hành vi sai phạm học thuật.",
        "priorityKeywords": [
          "惩戒",
          "遏制"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s18",
        "textZh": "历史经验反复证明，开放则兴、封闭则衰是人类文明演进的客观规律。",
        "pinyin": "Lìshǐ jīngyàn fǎnfù zhèngmíng, kāifàng zé xīng, fēngbì zé shuāi shì rénlèi wénmíng yǎnjìn de kèguān guīlǜ.",
        "translationVi": "Kinh nghiệm lịch sử nhiều lần chứng minh rằng mở cửa thì hưng thịnh, khép kín thì suy tàn là quy luật khách quan của sự tiến hóa văn minh nhân loại.",
        "priorityKeywords": [
          "演进",
          "规律"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s19",
        "textZh": "让我们携手并肩，为构建更加公正合理、普惠包容的全球经济治理体系贡献智慧。",
        "pinyin": "Ràng wǒmen xiéshǒu bìngjiān, wèi gòujiàn gèngjiā gōngzhèng hélǐ, pǔhuì bāoróng de quánqiú jīngjì zhìlǐ tǐxì gòngxiàn zhìhuì.",
        "translationVi": "Hãy để chúng ta chung tay sát cánh đóng góp trí tuệ nhằm xây dựng hệ thống quản trị kinh tế toàn cầu công bằng, hợp lý, phổ quát và bao trùm hơn.",
        "priorityKeywords": [
          "携手",
          "普惠"
        ]
      },
      {
        "id": "dict-hsk7-advanced-s20",
        "textZh": "预祝本次国际学术研讨会取得圆满成功，祝各位代表在华期间工作顺利、生活愉快。",
        "pinyin": "Yùzhù běn cì guójì xuéshù yántǎohuì qǔdé yuánmǎn chénggōng, zhù gèwèi dàibiǎo zài Huá qījiān gōngzuò shùnlì, shēnghuó yúkuài.",
        "translationVi": "Chúc hội thảo học thuật quốc tế lần này thành công viên mãn, chúc quý vị đại biểu trong thời gian tại Trung Quốc công tác thuận lợi và sinh hoạt vui vẻ.",
        "priorityKeywords": [
          "研讨会",
          "圆满"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk8-basic",
    "title": "Triết học Văn hóa, Thành ngữ & Điển cố Trung Hoa (HSK 8)",
    "titleZh": "哲学思想、成语典故与人文精神",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Văn hóa & Triết học",
    "descriptionVi": "Nghe chép HSK 8 về tư tưởng Nho - Đạo, thành ngữ 4 chữ cao cấp, mỹ học cổ điển và chiều sâu ngôn ngữ văn học.",
    "sentences": [
      {
        "id": "dict-hsk8-basic-s1",
        "textZh": "中国传统文化主张天人合一，强调人类应当顺应自然规律而非一味索取。",
        "pinyin": "Zhōngguó chuántǒng wénhuà zhǔzhāng tiānrénhéyī, qiángdiào rénlèi yīngdāng shùnyìng zìrán guīlǜ ér fēi yíwèi suǒqǔ.",
        "translationVi": "Văn hóa truyền thống Trung Quốc chủ trương thiên nhân hợp nhất, nhấn mạnh nhân loại cần thuận theo quy luật tự nhiên chứ không phải một mực đòi hỏi.",
        "priorityKeywords": [
          "天人合一",
          "顺应"
        ]
      },
      {
        "id": "dict-hsk8-basic-s2",
        "textZh": "君子和而不同，意味着在保持独立见解的同时能够包容他人的差异。",
        "pinyin": "Jūnzǐ hé ér bù tóng, yìwèizhe zài bǎochí dúlì jiànjiě de tóngshí nénggòu bāoróng tārén de chāyì.",
        "translationVi": "Quân tử hòa hợp nhưng không hòa tan có nghĩa là trong khi giữ vững kiến giải độc lập vẫn có thể bao dung sự khác biệt của người khác.",
        "priorityKeywords": [
          "和而不同",
          "见解"
        ]
      },
      {
        "id": "dict-hsk8-basic-s3",
        "textZh": "古人云千里之行始于足下，任何宏伟的蓝图都离不开脚踏实地的践行。",
        "pinyin": "Gǔrén yún qiānlǐzhīxíng shǐyúzúxià, rènhé hóngwěi de lántú dōu líbùkāi jiǎotàshídì de jiànxíng.",
        "translationVi": "Người xưa có câu hành trình vạn dặm bắt đầu từ bước chân đầu tiên, bất kỳ bản quy hoạch hùng vĩ nào cũng không thể tách rời việc thực hành vững chắc.",
        "priorityKeywords": [
          "脚踏实地",
          "践行"
        ]
      },
      {
        "id": "dict-hsk8-basic-s4",
        "textZh": "中国山水画讲究留白艺术，于无画处皆成妙境，赋予观者无限遐想空间。",
        "pinyin": "Zhōngguó shānshuǐhuà jiǎngjiu liúbái yìshù, yú wú huà chù jiē chéng miàojìng, fùyǔ guānzhě wúxiàn xiáxiǎng kōngjiān.",
        "translationVi": "Tranh sơn thủy Trung Quốc coi trọng nghệ thuật để khoảng trắng, ở nơi không vẽ đều tạo nên cảnh giới kỳ diệu, trao cho người xem không gian liên tưởng vô tận.",
        "priorityKeywords": [
          "留白",
          "遐想"
        ]
      },
      {
        "id": "dict-hsk8-basic-s5",
        "textZh": "历史的兴衰更替犹如一面明镜，提醒后人居安思危、戒骄戒躁。",
        "pinyin": "Lìshǐ de xīngshuāi gēngtì yóurú yí miàn míngjìng, tíxǐng hòurén jū'ānsīwēi, jièjiāojièzào.",
        "translationVi": "Sự thay đổi hưng suy của lịch sử giống như một tấm gương sáng nhắc nhở người đời sau lúc an bình phải nghĩ đến nguy cơ, răn dạy kiêu ngạo nóng vội.",
        "priorityKeywords": [
          "居安思危",
          "戒骄戒躁"
        ]
      },
      {
        "id": "dict-hsk8-basic-s6",
        "textZh": "优秀的译者不仅要精通两种语言的语法词汇，更需深谙各自背后的文化语境。",
        "pinyin": "Yōuxiù de yìzhě bùjǐn yào jīngtōng liǎng zhǒng yǔyán de yǔfǎ cíhuì, gèng xū shēn'ān gèzì bèihòu de wénhuà yǔjìng.",
        "translationVi": "Dịch giả xuất sắc không chỉ phải tinh thông ngữ pháp từ vựng của hai ngôn ngữ mà còn cần am hiểu sâu sắc ngữ cảnh văn hóa đằng sau mỗi bên.",
        "priorityKeywords": [
          "精通",
          "深谙"
        ]
      },
      {
        "id": "dict-hsk8-basic-s7",
        "textZh": "在浮躁功利的现代社会中，能够潜心治学、甘坐冷板凳的学者尤为可贵。",
        "pinyin": "Zài fúzào gōnglì de xiàndài shèhuì zhōng, nénggòu qiánxīn zhìxué, gān zuò lěngbǎndèng de xuézhě yóuwéi kěguì.",
        "translationVi": "Trong xã hội hiện đại xốc nổi thực dụng, những học giả có thể chuyên tâm nghiên cứu, cam tâm chịu cảnh âm thầm vất vả càng đặc biệt đáng quý.",
        "priorityKeywords": [
          "浮躁",
          "潜心"
        ]
      },
      {
        "id": "dict-hsk8-basic-s8",
        "textZh": "成语往往凝结着深厚的历史典故，言简意赅却能达到振聋发聩的表达效果。",
        "pinyin": "Chéngyǔ wǎngwǎng níngjié zhe shēnhòu de lìshǐ diǎngù, yánjiǎnyìgāi què néng dádào zhènlóngfākuì de biǎodá xiàoguǒ.",
        "translationVi": "Thành ngữ thường kết tinh điển cố lịch sử sâu dày, lời lẽ ngắn gọn ý nghĩa súc tích nhưng có thể đạt hiệu quả biểu đạt thức tỉnh mạnh mẽ.",
        "priorityKeywords": [
          "言简意赅",
          "振聋发聩"
        ]
      },
      {
        "id": "dict-hsk8-basic-s9",
        "textZh": "工匠精神的核心在于精益求精，对每一个细微之处都怀有敬畏之心。",
        "pinyin": "Gōngjiàng jīngshén de héxīn zàiyú jīngyìqiújīng, duì měi yí gè xìwēi zhī chù dōu huáiyǒu jìngwèi zhī xīn.",
        "translationVi": "Cốt lõi của tinh thần nghệ nhân nằm ở việc đã tốt lại càng cầu toàn hơn, luôn怀 (mang) lòng kính畏 (kính trọng cẩn trọng) đối với từng chi tiết nhỏ bé.",
        "priorityKeywords": [
          "精益求精",
          "敬畏"
        ]
      },
      {
        "id": "dict-hsk8-basic-s10",
        "textZh": "读书贵在融会贯通，若只知死记硬背而不加思索，终究不过是纸上谈兵。",
        "pinyin": "Dúshū guì zài rónghuìguàntōng, ruò zhǐ zhī sǐjìyìngbèi ér bù jiā sīsuǒ, zhōngjiū búguò shì zhǐshàngtánbīng.",
        "translationVi": "Đọc sách quý ở sự thấu hiểu贯通 (dung hội quán thông), nếu chỉ biết học vẹt mà không suy ngẫm thì rốt cuộc cũng chỉ là bàn việc quân trên giấy.",
        "priorityKeywords": [
          "融会贯通",
          "纸上谈兵"
        ]
      },
      {
        "id": "dict-hsk8-basic-s11",
        "textZh": "面对纷繁复杂的社会舆论，唯有保持独立审视的定力，方能不被偏见所裹挟。",
        "pinyin": "Miànduì fēnfán fùzá de shèhuì yúlùn, wéiyǒu bǎochí dúlì shěnshì de dìnglì, fāng néng bú bèi piānjiàn suǒ guǒxié.",
        "translationVi": "Đối mặt với dư luận xã hội rối ren phức tạp, chỉ có giữ vững bản lĩnh xem xét độc lập mới không bị định kiến cuốn theo.",
        "priorityKeywords": [
          "审视",
          "裹挟"
        ]
      },
      {
        "id": "dict-hsk8-basic-s12",
        "textZh": "古典诗词讲究平仄韵律与意境营造，短短数十字便能勾勒出万千气象。",
        "pinyin": "Gǔdiǎn shīcí jiǎngjiu píngzè yùnlǜ yǔ yìjìng yíngzào, duǎnduǎn shùshí zì biàn néng gōulè chū wànqiān qìxiàng.",
        "translationVi": "Thơ từ cổ điển coi trọng âm luật bằng trắc và kiến tạo ý cảnh, chỉ vài chục chữ ngắn ngủi đã có thể phác họa muôn vàn khí tượng.",
        "priorityKeywords": [
          "意境",
          "勾勒"
        ]
      },
      {
        "id": "dict-hsk8-basic-s13",
        "textZh": "欲速则不达，做学问与搞研发皆需循序渐进，切忌急功近利、拔苗助长。",
        "pinyin": "Yùsùzébùdá, zuò xuéwen yǔ gǎo yánfā jiē xū xúnxùjiànjìn, qièjì jígōngjìnlì, bámiáozhùzhǎng.",
        "translationVi": "Dục tốc bất đạt, làm học thuật hay nghiên cứu phát triển đều cần tuần tự tiến lên, tối kỵ hám lợi trước mắt, nhổ cây giúp lớn.",
        "priorityKeywords": [
          "循序渐进",
          "拔苗助长"
        ]
      },
      {
        "id": "dict-hsk8-basic-s14",
        "textZh": "儒家提倡修身齐家治国平天下，将个人道德修养与家国情怀紧密相连。",
        "pinyin": "Rújiā tíchàng xiūshēn qíjiā zhìguó píngtiānxià, jiāng gèrén dàodé xiūyǎng yǔ jiāguó qínghuái jǐnmì xiānglián.",
        "translationVi": "Nho gia đề xướng tu thân tề gia trị quốc bình thiên hạ, gắn kết chặt chẽ việc tu dưỡng đạo đức cá nhân với tình cảm gia đình đất nước.",
        "priorityKeywords": [
          "修养",
          "情怀"
        ]
      },
      {
        "id": "dict-hsk8-basic-s15",
        "textZh": "老子所言上善若水，赞美的是水泽被万物而不争名利的谦逊品格。",
        "pinyin": "Lǎozǐ suǒ yán shàngshànruòshuǐ, zànměi de shì shuǐ zébèi wànwù ér bù zhēng mínglì de qiānxùn pǐngé.",
        "translationVi": "Câu Thượng thiện nhược thủy mà Lão Tử nói là ca ngợi phẩm cách khiêm nhường của nước nuôi dưỡng vạn vật mà không tranh danh lợi.",
        "priorityKeywords": [
          "上善若水",
          "谦逊"
        ]
      },
      {
        "id": "dict-hsk8-basic-s16",
        "textZh": "文化自信并非盲目排外，而是在深刻理解本民族传统的基础上海纳百川。",
        "pinyin": "Wénhuà zìxìn bìngfēi mángmù páiwài, ér shì zài shēnkè lǐjiě běn mínzú chuántǒng de jīchǔ shàng hǎinàbǎichuān.",
        "translationVi": "Tự tin văn hóa không phải là bài ngoại mù quáng mà là biển lớn dung nạp trăm sông trên nền tảng thấu hiểu sâu sắc truyền thống dân tộc mình.",
        "priorityKeywords": [
          "排外",
          "海纳百川"
        ]
      },
      {
        "id": "dict-hsk8-basic-s17",
        "textZh": "这部史学巨著资料翔实、考证精严，可谓集数十年心血之大成。",
        "pinyin": "Zhè bù shǐxué jùzhù zīliào xiángshí, kǎozhèng jīngyán, kěwèi jí shùshí nián xīnxuè zhī dàchéng.",
        "translationVi": "Tác phẩm sử học đồ sộ này tư liệu tường tận, khảo chứng nghiêm cẩn, có thể gọi là tập đại thành tâm huyết hàng chục năm.",
        "priorityKeywords": [
          "翔实",
          "心血"
        ]
      },
      {
        "id": "dict-hsk8-basic-s18",
        "textZh": "知己知彼方能百战不殆，商业博弈同样需要对市场格局有透彻的研判。",
        "pinyin": "Zhījǐzhībǐ fāng néng bǎizhànbúdài, shāngyè bóyì tóngyàng xūyào duì shìchǎng géjú yǒu tòuchè de yánpàn.",
        "translationVi": "Biết người biết ta mới trăm trận không nguy, đấu trí thương trường cũng cần có sự nghiên cứu phán đoán thấu triệt về cục diện thị trường.",
        "priorityKeywords": [
          "知己知彼",
          "透彻"
        ]
      },
      {
        "id": "dict-hsk8-basic-s19",
        "textZh": "书法艺术通过笔墨的浓淡干湿与疾徐顿挫，展现出书写者的性情与气度。",
        "pinyin": "Shūfǎ yìshù tōngguò bǐmò de nóngdàn gānshī yǔ jíxú dùncuò, zhǎnxiàn chū shūxiězhě de xìngqíng yǔ qìdù.",
        "translationVi": "Nghệ thuật thư pháp thông qua độ đậm nhạt khô ướt của bút mực và nhịp nhanh chậm trầm bổng đã thể hiện tính tình cùng khí độ của người viết.",
        "priorityKeywords": [
          "顿挫",
          "气度"
        ]
      },
      {
        "id": "dict-hsk8-basic-s20",
        "textZh": "唯有经得起时间淘洗与实践检验的思想，方能在历史长河中历久弥新。",
        "pinyin": "Wéiyǒu jīngdeqǐ shíjiān táoxǐ yǔ shíjiàn jiǎnyàn de sīxiǎng, fāng néng zài lìshǐ chánghé zhōng lìjiǔmíxīn.",
        "translationVi": "Chỉ những tư tưởng chịu được sự sàng lọc của thời gian và kiểm nghiệm của thực tiễn mới có thể càng lâu càng mới trong dòng chảy lịch sử.",
        "priorityKeywords": [
          "淘洗",
          "历久弥新"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk8-advanced",
    "title": "Chiến lược Kinh tế Toàn cầu, Quản trị Tập đoàn & Luật Quốc tế (HSK 8)",
    "titleZh": "全球经济战略、集团治理与国际法务",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Chiến lược & Luật quốc tế",
    "descriptionVi": "Nghe chép HSK 8 nâng cao về tái cấu trúc chuỗi giá trị toàn cầu, quản trị ESG, chống độc quyền và chính sách tiền tệ.",
    "sentences": [
      {
        "id": "dict-hsk8-advanced-s1",
        "textZh": "在全球价值链深度重构的当下，企业唯有向研发设计与品牌营销两端攀升，方能摆脱低端锁定。",
        "pinyin": "Zài quánqiú jiàzhíliàn shēndù chónggòu de dāngxià, qǐyè wéiyǒu xiàng yánfā shèjì yǔ pǐnpái yíngxiāo liǎng duān pānshēng, fāng néng bǎituō dīduān suǒdìng.",
        "translationVi": "Trong bối cảnh chuỗi giá trị toàn cầu tái cấu trúc sâu sắc hiện nay, doanh nghiệp chỉ có vươn lên hai đầu R&D thiết kế và tiếp thị thương hiệu mới thoát khỏi bẫy giá trị thấp.",
        "priorityKeywords": [
          "价值链",
          "摆脱"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s2",
        "textZh": "环境、社会和公司治理即ESG理念，已成为衡量跨国企业长期投资价值的核心标尺。",
        "pinyin": "Huánjìng, shèhuì hé gōngsī zhìlǐ jí ESG lǐniàn, yǐ chéngwéi héngliáng kuàguó qǐyè chángqī tóuzī jiàzhí de héxīn biāochǐ.",
        "translationVi": "Triết lý Môi trường, Xã hội và Quản trị doanh nghiệp (ESG) đã trở thành thước đo cốt lõi đánh giá giá trị đầu tư dài hạn của doanh nghiệp đa quốc gia.",
        "priorityKeywords": [
          "衡量",
          "标尺"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s3",
        "textZh": "针对数字平台滥用市场支配地位的行为，反垄断监管亟需建立更具前瞻性的规制框架。",
        "pinyin": "Zhēnduì shùzì píngtái lànyòng shìchǎng zhīpèi dìwèi de xíngwéi, fǎnlǒngduàn jiānguǎn jíxū jiànlì gèng jù qiánzhānxìng de guīzhì kuàngjià.",
        "translationVi": "Nhắm vào hành vi lạm dụng vị trí thống lĩnh thị trường của các nền tảng số, cơ quan giám sát chống độc quyền cấp thiết cần xây dựng khung quy chế có tính tầm nhìn xa hơn.",
        "priorityKeywords": [
          "支配",
          "前瞻性"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s4",
        "textZh": "跨境数据主权与自由流动之间的博弈，折射出各国在数字经济时代的战略安全考量。",
        "pinyin": "Kuàjìng shùjù zhǔquán yǔ zìyóu liúdòng zhījiān de bóyì, zhéshè chū gèguó zài shùzì jīngjì shídài de zhànlüè ānquán kǎoliáng.",
        "translationVi": "Cuộc đấu trí giữa chủ quyền dữ liệu xuyên biên giới và dòng chảy tự do phản chiếu sự cân nhắc an ninh chiến lược của các nước trong kỷ nguyên kinh tế số.",
        "priorityKeywords": [
          "主权",
          "考量"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s5",
        "textZh": "宏观审慎政策与货币政策的双支柱调控框架，有效防范了系统性金融风险的积累与传染。",
        "pinyin": "Hóngguān shěnshèn zhèngcè yǔ huòbì zhèngcè de shuāngzhīzhù tiáokòng kuàngjià, yǒuxiào fángfàn le xìtǒngxìng jīnróng fēngxiǎn de jīlěi yǔ chuánrǎn.",
        "translationVi": "Khung điều tiết hai trụ cột gồm chính sách thận trọng vĩ mô và chính sách tiền tệ đã phòng ngừa hiệu quả sự tích tụ và lây lan rủi ro tài chính hệ thống.",
        "priorityKeywords": [
          "审慎",
          "调控"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s6",
        "textZh": "在国际工程承包项目中，汇率风险对冲与政治风险投保是保障项目盈利的必要手段。",
        "pinyin": "Zài guójì gōngchéng chéngbāo xiàngmù zhōng, huìlǜ fēngxiǎn duìchōng yǔ zhèngzhì fēngxiǎn tóubǎo shì bǎozhàng xiàngmù yínglì de bìyào shǒuduàn.",
        "translationVi": "Trong các dự án tổng thầu công trình quốc tế, phòng vệ rủi ro tỷ giá và mua bảo hiểm rủi ro chính trị là biện pháp tất yếu đảm bảo lợi nhuận dự án.",
        "priorityKeywords": [
          "对冲",
          "盈利"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s7",
        "textZh": "碳边境调节机制的实施将对高耗能出口产业构成严峻挑战，倒逼企业加快绿色低碳转型。",
        "pinyin": "Tàn biānjìng tiáojié jīzhì de shíshī jiāng duì gāo hàonéng chūkǒu chǎnyè gòuchéng yánjùn tiǎozhàn, dàobī qǐyè jiākuài lǜsè dītàn zhuǎnxíng.",
        "translationVi": "Việc thực thi Cơ chế Điều chỉnh Biên giới Carbon (CBAM) sẽ đặt ra thách thức gay gắt cho các ngành xuất khẩu tiêu thụ nhiều năng lượng, buộc doanh nghiệp đẩy nhanh chuyển đổi xanh carbon thấp.",
        "priorityKeywords": [
          "耗能",
          "倒逼"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s8",
        "textZh": "跨国公司的本土化战略绝非简单雇佣当地员工，而是要实现研发、供应链与企业文化的深度融合。",
        "pinyin": "Kuàguó gōngsī de běntǔhuà zhànlüè juéfēi jiǎndān gùyōng dāngdì yuángōng, ér shì yào shíxiàn yánfā, gōngyìngliàn yǔ qǐyè wénhuà de shēndù rónghé.",
        "translationVi": "Chiến lược bản địa hóa của công ty đa quốc gia tuyệt không phải chỉ thuê nhân viên địa phương đơn thuần mà là thực hiện sự dung hợp sâu sắc giữa R&D, chuỗi cung ứng và văn hóa doanh nghiệp.",
        "priorityKeywords": [
          "雇佣",
          "本土化"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s9",
        "textZh": "股权激励机制旨在将管理层的个人收益与公司的长远发展绑定，从而降低委托代理成本。",
        "pinyin": "Gǔquán jīlì jīzhì zhǐzài jiāng guǎnlǐcéng de gèrén shōuyì yǔ gōngsī de chángyuǎn fāzhǎn bǎngdìng, cóng'ér jiàngdī wěituō dàilǐ chéngběn.",
        "translationVi": "Cơ chế khuyến khích bằng cổ phần nhằm gắn kết thu nhập cá nhân của tầng lớp quản lý với sự phát triển lâu dài của công ty, từ đó giảm chi phí ủy thác đại diện.",
        "priorityKeywords": [
          "股权",
          "绑定"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s10",
        "textZh": "面对地缘政治冲突引发的供应链扰动，构建多元化与韧性兼具的采购网络显得尤为迫切。",
        "pinyin": "Miànduì dìyuán zhèngzhì chōngtū yǐnfā de gōngyìngliàn rǎodòng, gòujiàn duōyuánhuà yǔ rènxìng jiānjù de cǎigòu wǎngluò xiǎnde yóuwéi pòqiè.",
        "translationVi": "Đối mặt với sự xáo trộn chuỗi cung ứng do xung đột địa chính trị gây ra, việc xây dựng mạng lưới thu mua vừa đa dạng hóa vừa có tính chống chịu cao càng trở nên cấp thiết.",
        "priorityKeywords": [
          "地缘",
          "韧性"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s11",
        "textZh": "国际税基侵蚀和利润转移行动计划，致力于打击跨国企业利用避税港规避纳税义务的行为。",
        "pinyin": "Guójì shuìjī qīnshí hé lìrùn zhuǎnyí xíngdòng jìhuà, zhìlì yú dǎjī kuàguó qǐyè lìyòng bìshuìgǎng guībì nàshuì yìwù de xíngwéi.",
        "translationVi": "Kế hoạch hành động chống xói mòn cơ sở thuế và chuyển lợi nhuận quốc tế (BEPS) nỗ lực chống lại hành vi doanh nghiệp đa quốc gia lợi dụng thiên đường thuế để né tránh nghĩa vụ nộp thuế.",
        "priorityKeywords": [
          "税基",
          "避税港"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s12",
        "textZh": "在商业谈判中，精准把握对方的核心诉求与底线筹码，往往能掌握议价的主动权。",
        "pinyin": "Zài shāngyè tánpàn zhōng, jīngzhǔn bǎwò duìfāng de héxīn sùqiú yǔ dǐxiàn chóumǎ, wǎngwǎng néng zhǎngwò yìjià de zhǔdòngquán.",
        "translationVi": "Trong đàm phán thương mại, nắm bắt chính xác yêu cầu cốt lõi và quân bài giới hạn cuối cùng của đối phương thường giúp nắm quyền chủ động thương lượng giá.",
        "priorityKeywords": [
          "诉求",
          "筹码"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s13",
        "textZh": "生成式人工智能在重塑内容生产范式的同时，也引发了版权归属与虚假信息泛滥的法律争议。",
        "pinyin": "Shēngchéngshì réngōng zhìnéng zài chóngsù nèiróng shēngchǎn fànshì de tóngshí, yě yǐnfā le bǎnquán guīshǔ yǔ xūjiǎ xìnxī fànlàn de fǎlǜ zhēngyì.",
        "translationVi": "Trí tuệ nhân tạo tạo sinh trong khi tái định hình mô thức sản xuất nội dung cũng làm dấy lên tranh cãi pháp lý về quyền tác giả và sự tràn lan thông tin giả mạo.",
        "priorityKeywords": [
          "范式",
          "泛滥"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s14",
        "textZh": "自由贸易试验区通过实施负面清单管理模式，大幅放宽了外商投资的市场准入门槛。",
        "pinyin": "Zìyóu màoyì shìyànqū tōngguò shíshī fùmiàn qīngdān guǎnlǐ móshì, dàfú fàngkuān le wàishāng tóuzī de shìchǎng zhǔnrù ménkǎn.",
        "translationVi": "Khu thí điểm thương mại tự do thông qua thực hiện mô hình quản lý danh mục hạn chế đã nới lỏng đáng kể ngưỡng准入 (tiếp cận) thị trường cho đầu tư nước ngoài.",
        "priorityKeywords": [
          "负面清单",
          "门槛"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s15",
        "textZh": "企业危机公关的黄金法则是快速响应、坦诚担责，任何遮掩与推诿只会加剧公众的信任危机。",
        "pinyin": "Qǐyè wēijī gōngguān de huángjīn fǎzé shì kuàisù xiǎngyìng, tǎnchéng dānzé, rènhé zhēyǎn yǔ tuīwěi zhǐ huì jiājù gōngzhòng de xìnrèn wēijī.",
        "translationVi": "Nguyên tắc vàng trong xử lý khủng hoảng truyền thông doanh nghiệp là phản ứng nhanh, thẳng thắn nhận trách nhiệm; bất kỳ sự che đậy hay đùn đẩy nào chỉ làm trầm trọng thêm khủng hoảng niềm tin của công chúng.",
        "priorityKeywords": [
          "公关",
          "推诿"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s16",
        "textZh": "通过引入区块链溯源技术，跨境生鲜供应链实现了从原产地到餐桌的全流程透明化监管。",
        "pinyin": "Tōngguò yǐnrù qūkuàiliàn sùyuán jìshù, kuàjìng shēngxiān gōngyìngliàn shíxiàn le cóng yuánchǎndì dào cānzhuō de quán liúchéng tòumínghuà jiānguǎn.",
        "translationVi": "Thông qua việc đưa vào công nghệ truy xuất nguồn gốc blockchain, chuỗi cung ứng thực phẩm tươi sống xuyên biên giới đã thực hiện giám sát minh bạch toàn quy trình từ nơi sản xuất đến bàn ăn.",
        "priorityKeywords": [
          "区块链",
          "溯源"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s17",
        "textZh": "健全的破产重整制度不仅能帮助具有挽救价值的困境企业再生，也有助于优化社会资源配置。",
        "pinyin": "Jiànquán de pòchǎn chóngzhěng zhìdù bùjǐn néng bāngzhù jùyǒu wǎnjiù jiàzhí de kùnjìng qǐyè zàishēng, yě yǒuzhùyú yōuhuà shèhuì zīyuán pèizhì.",
        "translationVi": "Chế độ tái cơ cấu phá sản kiện toàn không chỉ giúp các doanh nghiệp gặp khó khăn còn giá trị cứu vãn được hồi sinh mà còn giúp tối ưu hóa phân bổ nguồn lực xã hội.",
        "priorityKeywords": [
          "重整",
          "挽救"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s18",
        "textZh": "在多边贸易体制遭受冲击的背景下，区域经济一体化协定成为稳定国际贸易预期的重要压舱石。",
        "pinyin": "Zài duōbiān màoyì tǐzhì zāoshòu chōngjī de bèijǐng xià, qūyù jīngjì yìtǐhuà xiédìng chéngwéi wěndìng guójì màoyì yùqī de zhòngyào yācāngshí.",
        "translationVi": "Trong bối cảnh thể chế thương mại đa phương chịu cú sốc, các hiệp định nhất thể hóa kinh tế khu vực trở thành hòn đá tảng quan trọng ổn định kỳ vọng thương mại quốc tế.",
        "priorityKeywords": [
          "遭受",
          "压舱石"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s19",
        "textZh": "科技巨头的跨界扩张虽然带来了生态协同效应，但也容易形成排他性的竞争壁垒。",
        "pinyin": "Kējì jùtóu de kuàjiè kuòzhāng suīrán dàilái le shēngtài xiétóng xiàoyìng, dàn yě róngyì xíngchéng páitāxìng de jìngzhēng bìlěi.",
        "translationVi": "Sự mở rộng đa ngành của các gã khổng lồ công nghệ tuy mang lại hiệu ứng hiệp đồng hệ sinh thái nhưng cũng dễ hình thành rào cản cạnh tranh mang tính loại trừ.",
        "priorityKeywords": [
          "巨头",
          "排他性"
        ]
      },
      {
        "id": "dict-hsk8-advanced-s20",
        "textZh": "唯有将技术创新、制度保障与人文关怀有机结合，方能推动人类社会迈向可持续的未来。",
        "pinyin": "Wéiyǒu jiāng jìshù chuàngxīn, zhìdù bǎozhàng yǔ rénwén guānhuái yǒujī jiéhé, fāng néng tuīdòng rénlèi shèhuì màixiàng kěchíxù de wèilái.",
        "translationVi": "Chỉ có kết hợp hữu cơ giữa đổi mới công nghệ, bảo đảm thể chế và sự quan tâm nhân văn mới có thể thúc đẩy xã hội loài người tiến tới tương lai bền vững.",
        "priorityKeywords": [
          "有机",
          "关怀"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk9-basic",
    "title": "Văn ngôn Cổ điển, Bình luận Học thuật & Dịch thuật Cao cấp (HSK 9)",
    "titleZh": "文言修辞、学术纵论与高阶政论",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Văn ngôn & Chính luận",
    "descriptionVi": "Nghe chép đỉnh cao HSK 9 với ngữ liệu văn ngôn - bạch thoại đan xen, phê bình học thuật và chính luận chuyên sâu.",
    "sentences": [
      {
        "id": "dict-hsk9-basic-s1",
        "textZh": "夫天地者，万物之逆旅也；光阴者，百代之过客也。",
        "pinyin": "Fú tiāndì zhě, wànwù zhī nìlǚ yě; guāngyīn zhě, bǎidài zhī guòkè yě.",
        "translationVi": "Trời đất là quán trọ của vạn vật; thời gian là khách qua đường của trăm đời.",
        "priorityKeywords": [
          "逆旅",
          "光阴"
        ]
      },
      {
        "id": "dict-hsk9-basic-s2",
        "textZh": "不谋万世者，不足谋一时；不谋全局者，不足谋一域。",
        "pinyin": "Bù móu wànshì zhě, bùzú móu yìshí; bù móu quánjú zhě, bùzú móu yíyù.",
        "translationVi": "Người không mưu tính cho muôn đời thì không đủ để mưu tính một thời; người không mưu tính toàn cục thì không đủ để mưu tính một vùng.",
        "priorityKeywords": [
          "万世",
          "全局"
        ]
      },
      {
        "id": "dict-hsk9-basic-s3",
        "textZh": "博学之，审问之，慎思之，明辨之，笃行之，此乃治学之根本要义。",
        "pinyin": "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī, cǐ nǎi zhìxué zhī gēnběn yàoyì.",
        "translationVi": "Học rộng, hỏi kỹ, nghĩ cẩn trọng, phân biệt rõ ràng, thực hành笃实 (chân thực bền bỉ), đó chính là yếu nghĩa căn bản của việc làm học thuật.",
        "priorityKeywords": [
          "明辨",
          "笃行"
        ]
      },
      {
        "id": "dict-hsk9-basic-s4",
        "textZh": "文章合为时而著，歌诗合为事而作，文艺创作当紧扣时代脉搏。",
        "pinyin": "Wénzhāng hé wèi shí ér zhù, gēshī hé wèi shì ér zuò, wényì chuàngzuò dāng jǐnkòu shídài màibó.",
        "translationVi": "Văn chương nên vì thời cuộc mà viết, thơ ca nên vì sự việc mà làm; sáng tác văn nghệ phải bám sát mạch đập thời đại.",
        "priorityKeywords": [
          "紧扣",
          "脉搏"
        ]
      },
      {
        "id": "dict-hsk9-basic-s5",
        "textZh": "泰山不让土壤，故能成其大；河海不择细流，故能就其深。",
        "pinyin": "Tàishān bú ràng tǔrǎng, gù néng chéng qí dà; héhǎi bù zé xìliú, gù néng jiù qí shēn.",
        "translationVi": "Núi Thái Sơn không từ chối đất bụi nên mới成 (tạo nên) sự vĩ đại; sông biển không kén dòng chảy nhỏ nên mới đạt được độ sâu.",
        "priorityKeywords": [
          "土壤",
          "细流"
        ]
      },
      {
        "id": "dict-hsk9-basic-s6",
        "textZh": "治国有常，而利民为本；政教有经，而令行为上。",
        "pinyin": "Zhìguó yǒu cháng, ér lìmín wéi běn; zhèngjiào yǒu jīng, ér lìngxíng wéi shàng.",
        "translationVi": "Trị nước có phép thường nhưng lợi dân là gốc; chính giáo có nguyên tắc nhưng mệnh lệnh được thực thi là trên hết.",
        "priorityKeywords": [
          "治国",
          "利民"
        ]
      },
      {
        "id": "dict-hsk9-basic-s7",
        "textZh": "穷则独善其身，达则兼济天下，体现了中国知识分子的精神追求。",
        "pinyin": "Qióng zé dúshànqíshēn, dá zé jiānjìtiānxià, tǐxiàn le Zhōngguó zhīshifènzǐ de jīngshén zhuīqiú.",
        "translationVi": "Khi cùng khốn thì giữ trọn phẩm hạnh bản thân, khi hiển đạt thì cứu giúp thiên hạ, thể hiện sự theo đuổi tinh thần của trí thức Trung Quốc.",
        "priorityKeywords": [
          "独善其身",
          "兼济天下"
        ]
      },
      {
        "id": "dict-hsk9-basic-s8",
        "textZh": "在跨文化诠释学视野下，经典文本的每一次重译都是一场跨越时空的思想对话。",
        "pinyin": "Zài kuàwénhuà quánshìxué shìyě xià, jīngdiǎn wénběn de měi yí cì chóngyì dōu shì yì chǎng kuàyuè shíkōng de sīxiǎng duìhuà.",
        "translationVi": "Dưới góc nhìn thông diễn học liên văn hóa, mỗi lần dịch lại văn bản kinh điển đều là một cuộc đối thoại tư tưởng vượt qua không gian và thời gian.",
        "priorityKeywords": [
          "诠释学",
          "重译"
        ]
      },
      {
        "id": "dict-hsk9-basic-s9",
        "textZh": "学术批评应当秉持公允客观之立场，既不阿谀奉承，亦不吹毛求疵。",
        "pinyin": "Xuéshù pīpíng yīngdāng bǐngchí gōngyǔn kèguān zhī lìchǎng, jì bù ēyúfèngchéng, yì bù chuīmáoyícī.",
        "translationVi": "Phê bình học thuật cần giữ vững lập trường công bằng khách quan,既 (vừa) không xu nịnh tâng bốc, cũng không bới lông tìm vết.",
        "priorityKeywords": [
          "阿谀奉承",
          "吹毛求疵"
        ]
      },
      {
        "id": "dict-hsk9-basic-s10",
        "textZh": "绳锯木断，水滴石穿，凡成大事者皆需有锲而不舍之坚韧毅力。",
        "pinyin": "Shéngjùmùduàn, shuǐdīshíchuān, fán chéng dàshì zhě jiē xū yǒu qiè'érbùshě zhī jiānrèn yìlì.",
        "translationVi": "Dây cưa gỗ đứt, nước chảy đá mòn, phàm người làm nên việc lớn đều cần có nghị lực kiên cường bền bỉ không bỏ cuộc.",
        "priorityKeywords": [
          "水滴石穿",
          "锲而不舍"
        ]
      },
      {
        "id": "dict-hsk9-basic-s11",
        "textZh": "鉴古知今，通过对历代财政制度演变的梳理，可揭示国家治理能力与税制结构之内在关联。",
        "pinyin": "Jiàngǔzhījīn, tōngguò duì lìdài cáizhèng zhìdù yǎnbiàn de shūlǐ, kě jiēshì guójiā zhìlǐ nénglì yǔ shuìzhì jiégòu zhī nèizài guānlián.",
        "translationVi": "Soi cổ biết kim, thông qua việc hệ thống hóa sự diễn biến chế độ tài chính qua các triều đại có thể làm sáng tỏ mối liên hệ nội tại giữa năng lực quản trị quốc gia và cơ cấu thuế chế.",
        "priorityKeywords": [
          "鉴古知今",
          "梳理"
        ]
      },
      {
        "id": "dict-hsk9-basic-s12",
        "textZh": "语言不仅是交际的工具，更是民族思维方式与审美情趣的物质载体。",
        "pinyin": "Yǔyán bùjǐn shì jiāojì de gōngjù, gèng shì mínzú sīwéi fāngshì yǔ shěnměi qíngqù de wùzhì zàitǐ.",
        "translationVi": "Ngôn ngữ không chỉ là công cụ giao际 (giao tiếp) mà còn là vật chuyên chở phương thức tư duy và hứng thú thẩm mỹ của dân tộc.",
        "priorityKeywords": [
          "审美",
          "载体"
        ]
      },
      {
        "id": "dict-hsk9-basic-s13",
        "textZh": "若仅凭片面之词便妄下断言，无异于盲人摸象，难窥事物之全貌。",
        "pinyin": "Ruò jǐn píng piànmiàn zhī cí biàn wàng xià duànyán, wúyì yú mángrénmōxiàng, nán kuī shìwù zhī quánmào.",
        "translationVi": "Nếu chỉ dựa vào lời nói phiến diện đã vội đưa ra phán đoán thì chẳng khác nào thầy bói xem voi, khó nhìn thấu toàn cảnh sự vật.",
        "priorityKeywords": [
          "盲人摸象",
          "全貌"
        ]
      },
      {
        "id": "dict-hsk9-basic-s14",
        "textZh": "汉字以形表意、音义相生，在数千年的演变中维系了中华文明的连续性。",
        "pinyin": "Hànzì yǐ xíng biǎoyì, yīnyì xiāngshēng, zài shùqiān nián de yǎnbiàn zhōng wéixì le Zhōnghuá wénmíng de liánxùxìng.",
        "translationVi": "Chữ Hán lấy hình biểu ý, âm và nghĩa sinh thành lẫn nhau, trong hàng ngàn năm diễn biến đã duy trì tính liên tục của nền văn minh Trung Hoa.",
        "priorityKeywords": [
          "表意",
          "维系"
        ]
      },
      {
        "id": "dict-hsk9-basic-s15",
        "textZh": "君子防未然，不处嫌疑间；瓜田不纳履，李下不正冠。",
        "pinyin": "Jūnzǐ fáng wèirán, bù chǔ xiányí jiān; guātián bú nà lǚ, lǐxià bú zhèng guān.",
        "translationVi": "Người quân tử phòng ngừa từ khi chưa xảy ra, không đặt mình vào nơi hiềm nghi; qua ruộng dưa không sửa giày, dưới gốc mận không chỉnh mũ.",
        "priorityKeywords": [
          "未然",
          "嫌疑"
        ]
      },
      {
        "id": "dict-hsk9-basic-s16",
        "textZh": "文明因交流而多彩，因互鉴而丰富，任何固步自封的傲慢都将阻碍人类进步。",
        "pinyin": "Wénmíng yīn jiāoliú ér duōcǎi, yīn hùjiàn ér fēngfù, rènhé gùbùzìfēng de àomàn dōu jiāng zǔ'ài rénlèi jìnbù.",
        "translationVi": "Văn minh nhờ giao lưu mà đa sắc, nhờ học hỏi lẫn nhau mà phong phú; bất kỳ sự ngạo mạn khép kín tự mãn nào cũng sẽ cản trở sự tiến bộ của nhân loại.",
        "priorityKeywords": [
          "互鉴",
          "固步自封"
        ]
      },
      {
        "id": "dict-hsk9-basic-s17",
        "textZh": "在数字化浪潮席卷全球之际，如何守护人文精神的独立品格值得深思。",
        "pinyin": "Zài shùzìhuà làngcháo xíjuǎn quánqiú zhījì, rúhé shǒuhù rénwén jīngshén de dúlì pǐngé zhíde shēnsī.",
        "translationVi": "Trong lúc làn sóng số hóa cuốn qua toàn cầu, làm thế nào để bảo vệ phẩm cách độc lập của tinh thần nhân văn là điều đáng suy ngẫm sâu sắc.",
        "priorityKeywords": [
          "席卷",
          "守护"
        ]
      },
      {
        "id": "dict-hsk9-basic-s18",
        "textZh": "法者，天下之程式也，万事之仪表也；良法善治乃国家长治久安之基石。",
        "pinyin": "Fǎ zhě, tiānxià zhī chéngshì yě, wànshì zhī yíbiǎo yě; liángfǎ shànzhì nǎi guójiā chángzhìjiǔ'ān zhī jīshí.",
        "translationVi": "Pháp luật là khuôn phép của thiên hạ, là thước đo của muôn việc; luật tốt và quản trị khéo là nền tảng cho sự trị an lâu dài của quốc gia.",
        "priorityKeywords": [
          "善治",
          "长治久安"
        ]
      },
      {
        "id": "dict-hsk9-basic-s19",
        "textZh": "学者当有为天地立心、为生民立命、为往圣继绝学、为万世开太平之胸怀。",
        "pinyin": "Xuézhě dāng yǒu wèi tiāndì lìxīn, wèi shēngmín lìmìng, wèi wǎngshèng jì juéxué, wèi wànshì kāi tàipíng zhī xiōnghuái.",
        "translationVi": "Học giả cần có tấm lòng vì trời đất lập tâm, vì dân sinh lập mệnh, vì bậc thánh hiền xưa nối tiếp tuyệt học, vì muôn đời mở ra thái bình.",
        "priorityKeywords": [
          "生民",
          "胸怀"
        ]
      },
      {
        "id": "dict-hsk9-basic-s20",
        "textZh": "综观人类思想史，每一次范式革命皆始于对既有教条的勇敢质疑与超越。",
        "pinyin": "Zōngguān rénlèi sīxiǎngshǐ, měi yí cì fànshì gémìng jiē shǐyú duì jìyǒu jiàotiáo de yǒnggǎn zhìyí yǔ chāoyuè.",
        "translationVi": "Nhìn tổng quan lịch sử tư tưởng nhân loại, mỗi cuộc cách mạng mô thức đều bắt đầu từ sự chất vấn dũng cảm và vượt qua những giáo điều sẵn có.",
        "priorityKeywords": [
          "教条",
          "质疑"
        ]
      }
    ]
  },
  {
    "id": "dict-hsk9-advanced",
    "title": "Kinh tế Chính trị Học, Ngoại giao Đa phương & Quản trị Toàn cầu (HSK 9)",
    "titleZh": "国际政治经济学、多边外交与全球治理",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Ngoại giao & Toàn cầu",
    "descriptionVi": "Nghe chép cấp độ thông thạo chuyên gia HSK 9: thông cáo ngoại giao, phân tích kinh tế vĩ mô toàn cầu và diễn ngôn học thuật đỉnh cao.",
    "sentences": [
      {
        "id": "dict-hsk9-advanced-s1",
        "textZh": "在全球经济复苏乏力、地缘博弈日趋复杂的背景下，重振多边贸易体制成为国际社会的紧迫共识。",
        "pinyin": "Zài quánqiú jīngjì fūsū fálì, dìyuán bóyì rìqū fùzá de bèijǐng xià, chóngzhèn duōbiān màoyì tǐzhì chéngwéi guójì shèhuì de jǐnpò gòngshí.",
        "translationVi": "Trong bối cảnh kinh tế toàn cầu phục hồi yếu ớt và đấu trí địa chính trị ngày càng phức tạp, việc chấn hưng lại thể chế thương mại đa phương trở thành nhận thức chung cấp bách của cộng đồng quốc tế.",
        "priorityKeywords": [
          "复苏",
          "共识"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s2",
        "textZh": "主权债务危机的外溢效应正在侵蚀部分新兴市场国家的金融稳定与外汇储备缓冲能力。",
        "pinyin": "Zhǔquán zhàiwù wēijī de wàiyì xiàoyìng zhèngzài qīnshí bùfen xīnxīng shìchǎng guójiā de jīnróng wěndìng yǔ wàihuì chǔbèi huǎnchōng nénglì.",
        "translationVi": "Hiệu ứng lan tỏa của khủng hoảng nợ công đang bào mòn sự ổn định tài chính và khả năng đệm dự trữ ngoại hối của một số quốc gia thị trường mới nổi.",
        "priorityKeywords": [
          "外溢",
          "外汇储备"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s3",
        "textZh": "构建公正合理的全球气候治理架构，必须坚持共同但有区别的责任原则及各自能力原则。",
        "pinyin": "Gòujiàn gōngzhèng hélǐ de quánqiú qìhòu zhìlǐ jiàgòu, bìxū jiānchí gòngtóng dàn yǒu qūbié de zérèn yuánzé jí gèzì nénglì yuánzé.",
        "translationVi": "Xây dựng cấu trúc quản trị khí hậu toàn cầu công bằng hợp lý bắt buộc phải kiên trì nguyên tắc trách nhiệm chung nhưng có phân biệt và nguyên tắc năng lực mỗi nước.",
        "priorityKeywords": [
          "架构",
          "原则"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s4",
        "textZh": "数字主权与跨境数据流动规制的协调，已成为新一轮国际经贸规则博弈的核心疆域。",
        "pinyin": "Shùzì zhǔquán yǔ kuàjìng shùjù liúdòng guīzhì de xiétiáo, yǐ chéngwéi xīn yì lún guójì jīngmào guīzé bóyì de héxīn jiāngyù.",
        "translationVi": "Sự điều phối giữa chủ quyền số và quy chế dòng chảy dữ liệu xuyên biên giới đã trở thành lãnh địa cốt lõi trong vòng đấu trí mới về quy tắc kinh tế thương mại quốc tế.",
        "priorityKeywords": [
          "协调",
          "疆域"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s5",
        "textZh": "产业链的过度证券化与脱实向虚倾向，极易诱发资产泡沫并削弱实体经济的抗风险韧性。",
        "pinyin": "Chǎnyèliàn de guòdù zhèngquànhuà yǔ tuōshíxiàngxū qīngxiàng, jíyì yòufā zīchǎn pàomò bìng xuēruò shítǐ jīngjì de kàngfēngxiǎn rènxìng.",
        "translationVi": "Khuynh hướng chứng khoán hóa quá mức chuỗi công nghiệp và rời bỏ kinh tế thực sang đầu cơ ảo rất dễ gây ra bong bóng tài sản và làm suy yếu sức chống chịu rủi ro của nền kinh tế thực.",
        "priorityKeywords": [
          "泡沫",
          "实体经济"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s6",
        "textZh": "区域经济合作应秉持开放的区域主义精神，反对构筑排他性的小圈子与技术铁幕。",
        "pinyin": "Qūyù jīngjì hézuò yīng bǐngchí kāifàng de qūyùzhǔyì jīngshén, fǎnduì gòuzhù páitāxìng de xiǎoquānzi yǔ jìshù tiěmù.",
        "translationVi": "Hợp tác kinh tế khu vực cần kiên trì tinh thần chủ nghĩa khu vực mở, phản đối việc dựng lên các nhóm lợi ích khép kín mang tính loại trừ và bức màn sắt công nghệ.",
        "priorityKeywords": [
          "构筑",
          "排他性"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s7",
        "textZh": "国际货币体系的多元化演进有助于缓解单一主权货币充当全球储备资产所带来的特里芬难题。",
        "pinyin": "Guójì huòbì tǐxì de duōyuánhuà yǎnjìn yǒuzhùyú huǎnjiě dānyī zhǔquán huòbì chōngdāng quánqiú chǔbèi zīchǎn suǒ dàilái de Tèlǐfēn nántí.",
        "translationVi": "Sự tiến hóa đa dạng hóa của hệ thống tiền tệ quốc tế giúp làm dịu nghịch lý Triffin do một đồng tiền quốc gia duy nhất đóng vai trò tài sản dự trữ toàn cầu gây ra.",
        "priorityKeywords": [
          "储备",
          "演进"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s8",
        "textZh": "在重大地缘危机面前，保持外交沟通渠道的畅通是避免战略误判与冲突升级的最后防线。",
        "pinyin": "Zài zhòngdà dìyuán wēijī miànqián, bǎochí wàijiāo gōutōng qúdào de chàngtōng shì bìmiǎn zhànlüè wùpàn yǔ chōngtū shēngjí de zuìhòu fángxiàn.",
        "translationVi": "Trước các cuộc khủng hoảng địa chính trị trọng đại, giữ cho kênh giao tiếp ngoại giao thông suốt là phòng tuyến cuối cùng để tránh phán đoán sai lầm chiến lược và leo thang xung đột.",
        "priorityKeywords": [
          "误判",
          "防线"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s9",
        "textZh": "技术标准制定权的争夺本质上是产业话语权与未来市场超额利润分配权的竞争。",
        "pinyin": "Jìshù biāozhǔn zhìdìngquán de zhēngduó běnzhì shàng shì chǎnyè huàyǔquán yǔ wèilái shìchǎng chāo'é lìrùn fēnpèiquán de jìngzhēng.",
        "translationVi": "Cuộc tranh giành quyền制定 (xây dựng) tiêu chuẩn kỹ thuật về bản chất là sự cạnh tranh quyền phát ngôn trong ngành và quyền phân phối lợi nhuận siêu ngạch trên thị trường tương lai.",
        "priorityKeywords": [
          "话语权",
          "分配"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s10",
        "textZh": "人工智能治理亟需在鼓励前沿技术创新与防范系统性伦理失范之间寻求动态平衡。",
        "pinyin": "Réngōng zhìnéng zhìlǐ jíxū zài gǔlì qiányán jìshù chuàngxīn yǔ fángfàn xìtǒngxìng lúnlǐ shīfàn zhījiān xúnqiú dòngtài pínghéng.",
        "translationVi": "Quản trị trí tuệ nhân tạo cấp thiết cần tìm kiếm sự cân bằng động giữa việc khuyến khích đổi mới công nghệ tiên phong và phòng ngừa sự lệch chuẩn đạo đức mang tính hệ thống.",
        "priorityKeywords": [
          "前沿",
          "失范"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s11",
        "textZh": "通过深化供给侧结构性改革与扩大制度型开放，中国经济正加快培育新质生产力。",
        "pinyin": "Tōngguò shēnhuà gōngjǐcè jiégòuxìng gǎigé yǔ kuòdà zhìdùxíng kāifàng, Zhōngguó jīngjì zhèng jiākuài péiyù xīnzhì shēngchǎnlì.",
        "translationVi": "Thông qua việc làm sâu sắc cải cách cơ cấu bên cung và mở rộng mở cửa thể chế, nền kinh tế Trung Quốc đang đẩy nhanh việc bồi dưỡng lực lượng sản xuất chất lượng mới.",
        "priorityKeywords": [
          "供给侧",
          "生产力"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s12",
        "textZh": "跨国知识产权诉讼的复杂化要求出海企业构建涵盖专利布局、合规审查与危机应对的立体防御体系。",
        "pinyin": "Kuàguó zhīshi chǎnquán sùsòng de fùzáhuà yāoqiú chūhǎi qǐyè gòujiàn hángài zhuānlì bùjú, héguī shěnchá yǔ wēijī yìngduì de lìtǐ fángyù tǐxì.",
        "translationVi": "Sự phức tạp hóa của các vụ kiện tụng sở hữu trí tuệ xuyên quốc gia đòi hỏi doanh nghiệp vươn ra nước ngoài phải xây dựng hệ thống phòng ngự đa tầng bao gồm bố trí bằng sáng chế, thẩm tra tuân thủ và ứng phó khủng hoảng.",
        "priorityKeywords": [
          "诉讼",
          "专利"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s13",
        "textZh": "粮食安全与能源供应链的稳定，是维系发展中国家宏观经济平稳运行与社会安定的生命线。",
        "pinyin": "Liángshi ānquán yǔ néngyuán gōngyìngliàn de wěndìng, shì wéixì fāzhǎnzhōng guójiā hóngguān jīngjì píngwěn yùnxíng yǔ shèhuì āndìng de shēngmìngxiàn.",
        "translationVi": "An ninh lương thực và sự ổn định chuỗi cung ứng năng lượng làเส้น sinh mệnh duy trì sự vận hành kinh tế vĩ mô ổn định và an định xã hội của các nước đang phát triển.",
        "priorityKeywords": [
          "维系",
          "生命线"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s14",
        "textZh": "在应对全球性公共危机时，以邻为壑的短视行为终将反噬自身，唯有同舟共济方能共克时艰。",
        "pinyin": "Zài yìngduì quánqiúxìng gōnggòng wēijī shí, yǐlínwéihè de duǎnshì xíngwéi zhōngjiāng fǎnshì zìshēn, wéiyǒu tóngzhōugòngjì fāng néng gòngkèshíjiān.",
        "translationVi": "Khi ứng phó với khủng hoảng công cộng mang tính toàn cầu, hành vi thiển cận đẩy khó khăn cho láng giềng cuối cùng sẽ quay lại làm hại chính mình, chỉ có同舟共济 (cùng hội cùng thuyền) mới có thể cùng nhau vượt qua thời khắc gian nan.",
        "priorityKeywords": [
          "以邻为壑",
          "同舟共济"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s15",
        "textZh": "人口结构转型与技术进步的叠加效应，正在深刻重塑全球劳动力市场的供求格局与薪酬体系。",
        "pinyin": "Rénkǒu jiégòu zhuǎnxíng yǔ jìshù jìnbù de diéjiā xiàoyìng, zhèngzài shēnkè chóngsù quánqiú láodònglì shìchǎng de gōngqiú géjú yǔ xīnchóu tǐxì.",
        "translationVi": "Hiệu ứng cộng hưởng giữa chuyển đổi cơ cấu dân số và tiến bộ công nghệ đang tái định hình sâu sắc cục diện cung cầu và hệ thống lương thưởng của thị trường lao động toàn cầu.",
        "priorityKeywords": [
          "叠加",
          "薪酬"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s16",
        "textZh": "制度经济学研究表明，产权界定的清晰度与契约执行的可靠性是决定长期投资意愿的根本变量。",
        "pinyin": "Zhìdù jīngjìxué yánjiū biǎomíng, chǎnquán jièdìng de qīngxīdù yǔ qìyuē zhíxíng de kěkàoxìng shì juédìng chángqī tóuzī yìyuàn de gēnběn biànliàng.",
        "translationVi": "Nghiên cứu kinh tế học thể chế chỉ ra rằng mức độ rõ ràng của việc phân định quyền tài sản và độ tin cậy của việc thực thi khế ước là biến số căn bản quyết định ý muốn đầu tư dài hạn.",
        "priorityKeywords": [
          "产权",
          "契约"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s17",
        "textZh": "面对气候融资缺口，创新绿色金融工具与撬动私人资本参与显得尤为关键。",
        "pinyin": "Miànduì qìhòu róngzī quēkǒu, chuàngxīn lǜsè jīnróng gōngjù yǔ qiàodòng sīrén zīběn cānyù xiǎnde yóuwéi guānjiàn.",
        "translationVi": "Đối mặt với khoảng trống tài chính khí hậu, việc đổi mới công cụ tài chính xanh và kích hoạt nguồn vốn tư nhân tham gia càng trở nên đặc biệt then chốt.",
        "priorityKeywords": [
          "缺口",
          "撬动"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s18",
        "textZh": "文化霸权主义试图将单一价值观奉为圭臬，这与人类文明百花齐放的演进逻辑背道而驰。",
        "pinyin": "Wénhuà bàquánzhǔyì shìtú jiāng dānyī jiàzhíguān fèngwéiguīniè, zhè yǔ rénlèi wénmíng bǎihuāqífàng de yǎnjìn luójí bèidào'érchí.",
        "translationVi": "Chủ nghĩa bá quyền văn hóa mưu toan tôn sùng một hệ giá trị duy nhất làm khuôn vàng thước ngọc, điều này đi ngược lại hoàn toàn với logic tiến hóa trăm hoa đua nở của văn minh nhân loại.",
        "priorityKeywords": [
          "奉为圭臬",
          "背道而驰"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s19",
        "textZh": "外交辞令既讲求字斟句酌的严谨与含蓄，亦不失原则立场上的坚定与锋芒。",
        "pinyin": "Wàijiāo cílìng jì jiǎngqiú zìzhēnjùzhuó de yánjǐn yǔ hánxù, yì bù shī yuánzé lìchǎng shàng de jiāndìng yǔ fēngmáng.",
        "translationVi": "Ngôn từ ngoại giao vừa đòi hỏi sự chặt chẽ hàm súc cân nhắc từng chữ từng câu, vừa không đánh mất sự kiên định và sắc bén trên lập trường nguyên tắc.",
        "priorityKeywords": [
          "字斟句酌",
          "锋芒"
        ]
      },
      {
        "id": "dict-hsk9-advanced-s20",
        "textZh": "展望未来，唯有以人类命运共同体理念为引领，方能跨越修昔底德陷阱，开创和平繁荣的新纪元。",
        "pinyin": "Zhǎnwàng wèilái, wéiyǒu yǐ rénlèi mìngyùn gòngtóngtǐ lǐniàn wéi yǐnlǐng, fāng néng kuàyuè Xiūxīdǐdé xiànjǐng, kāichuàng hépíng fánróng de xīn jìyuán.",
        "translationVi": "Hướng tới tương lai, chỉ có lấy triết lý Cộng đồng chung vận mệnh nhân loại làm dẫn dắt mới có thể vượt qua bẫy Thucydides, mở ra kỷ nguyên mới hòa bình và thịnh vượng.",
        "priorityKeywords": [
          "共同体",
          "纪元"
        ]
      }
    ]
  }
];
