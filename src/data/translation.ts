import type { HSKLevel, SubDifficulty } from "@/types";

export type TranslationDirection = "vi-to-zh" | "zh-to-vi";

export interface TranslationKeyword {
  word: string;
  pinyin?: string;
  meaningVi: string;
}

export interface TranslationExercise {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  direction: TranslationDirection;
  topic: string;
  sourceText: string; // Tiếng Việt nếu vi-to-zh, chữ Hán nếu zh-to-vi
  sourcePinyin?: string;
  referenceTarget: string; // Câu đích chuẩn
  referencePinyin?: string;
  acceptedVariants: string[];
  requiredKeywords: TranslationKeyword[];
  grammarStructureVi: string;
  commonMistakeVi: string;
}

export interface TranslationEvaluationResult {
  score: number; // 0 - 100
  passed: boolean; // >= 70
  matchedKeywords: TranslationKeyword[];
  missingKeywords: TranslationKeyword[];
  grammarErrors: string[];
  grammarFeedbackVi: string;
  naturalSuggestion: string;
  naturalPinyin?: string;
}

type RawSeed = [
  level: HSKLevel,
  subDifficulty: SubDifficulty,
  topic: string,
  viText: string,
  zhText: string,
  pinyin: string,
  variantsViToZh: string[],
  variantsZhToVi: string[],
  keywords: [hanzi: string, py: string, vi: string][],
  grammarStructureVi: string,
  commonMistakeVi: string,
];

const BILINGUAL_SEEDS: RawSeed[] = [
  // ==========================================================================
  // HSK 0 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK0",
    "basic",
    "Chào hỏi & Làm quen",
    "Xin chào! Bạn khỏe không? Tôi rất khỏe, cảm ơn bạn.",
    "你好！你好吗？我很好，谢谢你。",
    "Nǐ hǎo! Nǐ hǎo ma? Wǒ hěn hǎo, xièxie nǐ.",
    ["你好!你好吗?我很好,谢谢你。", "你好，你好吗？我很好，谢谢。"],
    ["Xin chào! Bạn có khỏe không? Tôi rất khỏe, cảm ơn.", "Chào bạn! Bạn khỏe không? Mình rất khỏe, cảm ơn bạn."],
    [
      ["你好", "nǐ hǎo", "xin chào"],
      ["很好", "hěn hǎo", "rất khỏe / rất tốt"],
      ["谢谢", "xièxie", "cảm ơn"],
    ],
    "Câu vị ngữ tính từ: Chủ ngữ + 很 + Tính từ (我很好). Câu hỏi Có/Không: Câu trần thuật + 吗？",
    "Người Việt hay dịch từng chữ 'Tôi là khỏe' thành '我是好' (SAI) — trước tính từ tiếng Trung dùng 很, không dùng 是.",
  ],
  [
    "HSK0",
    "basic",
    "Chào hỏi & Quốc tịch",
    "Bạn là người Việt Nam phải không? Đúng vậy, tôi là người Việt Nam.",
    "你是越南人吗？对，我是越南人。",
    "Nǐ shì Yuènánrén ma? Duì, wǒ shì Yuènánrén.",
    ["你是越南人吗?是的,我是越南人。", "你是越南人吗？我是越南人。"],
    ["Bạn là người Việt Nam à? Đúng, tôi là người Việt Nam.", "Bạn có phải người Việt Nam không? Đúng vậy, mình là người Việt Nam."],
    [
      ["是", "shì", "là"],
      ["越南人", "Yuènánrén", "người Việt Nam"],
      ["吗", "ma", "phải không"],
    ],
    "Chủ ngữ + 是 + Quốc gia + 人 + 吗？ (Hỏi quốc tịch).",
    "Quên chữ 人 sau tên nước (nói '我是越南' nghĩa là 'Tôi là nước Việt Nam' -> phải là '我是越南人').",
  ],
  [
    "HSK0",
    "basic",
    "Đồ uống & Đời sống",
    "Tôi uống trà, tôi không uống cà phê.",
    "我喝茶，我不喝咖啡。",
    "Wǒ hē chá, wǒ bù hē kāfēi.",
    ["我喝茶,不喝咖啡。", "我喝茶，不喝咖啡。"],
    ["Mình uống trà, mình không uống cà phê.", "Tôi uống trà chứ không uống cà phê."],
    [
      ["喝", "hē", "uống"],
      ["茶", "chá", "trà"],
      ["不", "bù", "không"],
      ["咖啡", "kāfēi", "cà phê"],
    ],
    "Chủ ngữ + (不) + Động từ + Tân ngữ (我喝茶 / 我不喝咖啡).",
    "Đặt từ phủ định 不 sai vị trí hoặc dùng 没 cho thói quen hiện tại.",
  ],
  [
    "HSK0",
    "basic",
    "Lịch sự & Tạm biệt",
    "Đừng khách sáo! Tạm biệt, ngày mai gặp lại.",
    "不客气！再见，明天见。",
    "Bú kèqi! Zàijiàn, míngtiān jiàn.",
    ["不用谢！再见，明天见。", "不客气，再见，明天见！"],
    ["Không có gì! Tạm biệt, hẹn gặp lại ngày mai.", "Đừng khách sáo, tạm biệt, mai gặp nhé."],
    [
      ["不客气", "bú kèqi", "đừng khách sáo / không có gì"],
      ["再见", "zàijiàn", "tạm biệt"],
      ["明天见", "míngtiān jiàn", "ngày mai gặp lại"],
    ],
    "Biến điệu chữ 不: Đứng trước Thanh 4 (客气 kèqi), chữ 不 đọc thành Thanh 2 (bú kèqi).",
    "Đọc sai 不客气 thành bù kèqi (thanh 4) thay vì biến điệu sang thanh 2 bú kèqi.",
  ],
  [
    "HSK0",
    "advanced",
    "Làm quen & Hỏi họ tên",
    "Xin chào ngài, xin hỏi quý danh của ngài là gì? Tôi họ Nguyễn, tên là Nguyễn Minh.",
    "您好，请问您贵姓？我姓阮，叫阮明。",
    "Nín hǎo, qǐngwèn nín guìxìng? Wǒ xìng Ruǎn, jiào Ruǎn Míng.",
    ["您好！请问您贵姓？我姓阮，叫阮明。"],
    ["Chào ngài, xin hỏi ngài họ gì? Tôi họ Nguyễn, tên là Nguyễn Minh.", "Xin chào, xin hỏi quý danh của ông/bà? Tôi họ Nguyễn, gọi là Nguyễn Minh."],
    [
      ["请问", "qǐngwèn", "xin hỏi"],
      ["贵姓", "guìxìng", "quý danh (hỏi họ)"],
      ["姓", "xìng", "họ"],
      ["叫", "jiào", "tên là / gọi là"],
    ],
    "Cách hỏi họ trang trọng: 请问您贵姓？ Trả lời: 我姓 + Họ，叫 + Họ tên đầy đủ.",
    "Trả lời '我的贵姓是阮' (SAI hoàn toàn — 贵姓 chỉ dùng để hỏi đối phương, không bao giờ dùng cho bản thân).",
  ],
  [
    "HSK0",
    "advanced",
    "Hỏi thăm & Trợ từ 呢",
    "Hôm nay công việc của tôi rất bận, còn bạn thì sao?",
    "今天我的工作很忙，你呢？",
    "Jīntiān wǒ de gōngzuò hěn máng, nǐ ne?",
    ["我今天工作很忙，你呢？", "今天我工作很忙，你呢？"],
    ["Công việc hôm nay của tôi rất bận, còn bạn thế nào?", "Hôm nay tôi làm việc rất bận, còn bạn?"],
    [
      ["今天", "jīntiān", "hôm nay"],
      ["工作", "gōngzuò", "công việc"],
      ["很忙", "hěn máng", "rất bận"],
      ["呢", "ne", "thì sao"],
    ],
    "Danh từ + 很 + Tính từ; Đại từ + 呢？ (Hỏi nối tiếp ngữ cảnh).",
    "Dùng '是忙' thay vì '很忙', hoặc dùng '吗' thay vì '呢' trong '你呢？'.",
  ],
  [
    "HSK0",
    "advanced",
    "Học ngoại ngữ",
    "Chúng tôi đều học tiếng Trung và viết chữ Hán.",
    "我们都学习汉语，写汉字。",
    "Wǒmen dōu xuéxí Hànyǔ, xiě Hànzì.",
    ["我们都学汉语、写汉字。", "我们都学习中文和写汉字。"],
    ["Tất cả chúng tôi đều học tiếng Trung và tập viết chữ Hán.", "Chúng mình đều học tiếng Hán và viết chữ Hán."],
    [
      ["我们", "wǒmen", "chúng tôi"],
      ["都", "dōu", "đều"],
      ["汉语", "Hànyǔ", "tiếng Trung"],
      ["汉字", "Hànzì", "chữ Hán"],
    ],
    "Phó từ tổng括 都 (đều) luôn đứng SAU chủ ngữ và TRƯỚC động từ (我们都学习).",
    "Đặt 都 lên đầu câu trước chủ ngữ ('都我们学习' là SAI ngữ pháp).",
  ],
  [
    "HSK0",
    "advanced",
    "Gọi đồ uống & Biến điệu",
    "Làm ơn cho tôi một cốc nước ấm và một cốc trà sữa.",
    "请给我一杯温水和一杯奶茶。",
    "Qǐng gěi wǒ yì bēi wēnshuǐ hé yì bēi nǎichá.",
    ["请给我一杯温水、一杯奶茶。"],
    ["Vui lòng lấy cho tôi một ly nước ấm và một ly trà sữa.", "Cho tôi xin một cốc nước ấm cùng một cốc trà sữa."],
    [
      ["请", "qǐng", "làm ơn / xin mời"],
      ["一杯", "yì bēi", "một cốc / một ly"],
      ["温水", "wēnshuǐ", "nước ấm"],
      ["奶茶", "nǎichá", "trà sữa"],
    ],
    "请 + 给 + Tân ngữ người + Số lượng từ + Danh từ.",
    "Quên lượng từ 杯 (nói '一温水' là sai, phải có lượng từ '一杯温水').",
  ],

  // ==========================================================================
  // HSK 1 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK1",
    "basic",
    "Gia đình & Số lượng",
    "Gia đình tôi có bốn người: bố, mẹ, chị gái và tôi.",
    "我家有四口人：爸爸、妈妈、姐姐和我。",
    "Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.",
    ["我们家有四口人：爸爸、妈妈、姐姐和我。", "我家有四个人：爸爸、妈妈、姐姐和我。"],
    ["Nhà tôi có 4 người: bố, mẹ, chị gái và tôi.", "Gia đình mình gồm bốn thành viên: ba, mẹ, chị gái và mình."],
    [
      ["家", "jiā", "gia đình / nhà"],
      ["有", "yǒu", "có"],
      ["口", "kǒu", "lượng từ chỉ nhân khẩu"],
      ["姐姐", "jiějie", "chị gái"],
    ],
    "A + 有 + Số từ + 口/个 + 人 (Giới thiệu số thành viên trong gia đình).",
    "Khi liệt kê nhiều danh từ trong tiếng Trung, dùng dấu chấm phẩy nghiêng '、' (đốn hào) và đặt '和' trước thành phần cuối cùng.",
  ],
  [
    "HSK1",
    "basic",
    "Thời gian & Lịch trình",
    "Ngày mai tôi đi Bắc Kinh thăm bạn học của tôi.",
    "我明天去北京看我的同学。",
    "Wǒ míngtiān qù Běijīng kàn wǒ de tóngxué.",
    ["明天我去北京看我的同学。", "我明天去北京看同学。"],
    ["Mai tôi sẽ đi Bắc Kinh thăm người bạn cùng lớp của mình.", "Ngày mai mình đi Bắc Kinh gặp bạn học."],
    [
      ["明天", "míngtiān", "ngày mai"],
      ["去", "qù", "đi"],
      ["北京", "Běijīng", "Bắc Kinh"],
      ["同学", "tóngxué", "bạn học"],
    ],
    "Câu liên động: Chủ ngữ + Thời gian + 去 + Địa điểm + Động từ mục đích.",
    "Đặt trạng ngữ thời gian '明天' ở cuối câu theo thói quen tiếng Việt ('我去北京看同学明天' là SAI).",
  ],
  [
    "HSK1",
    "basic",
    "Mua sắm & Giá cả",
    "Tôi muốn mua hai quyển sách tiếng Trung, tổng cộng bao nhiêu tiền?",
    "我想买两本汉语书，一共多少钱？",
    "Wǒ xiǎng mǎi liǎng běn Hànyǔ shū, yígòng duōshao qián?",
    ["我要买两本中文书，一共多少钱？", "我想买两本汉语书,一共多少钱?"],
    ["Mình muốn mua 2 cuốn sách tiếng Trung, hết tất cả bao nhiêu tiền?", "Tôi cần mua hai quyển sách Hán ngữ, tổng cộng giá bao nhiêu?"],
    [
      ["想买", "xiǎng mǎi", "muốn mua"],
      ["两本", "liǎng běn", "hai quyển"],
      ["一共", "yígòng", "tổng cộng"],
      ["多少钱", "duōshao qián", "bao nhiêu tiền"],
    ],
    "Số 2 + Lượng từ: Bắt buộc dùng 两 (两本书), không dùng 二.",
    "Viết '二本汉语书' hoặc thiếu lượng từ '两汉语书'.",
  ],
  [
    "HSK1",
    "basic",
    "Địa điểm & Công việc",
    "Chị gái tôi làm việc ở một bệnh viện tại Hà Nội.",
    "我姐姐在河内的一家医院工作。",
    "Wǒ jiějie zài Hénèi de yì jiā yīyuàn gōngzuò.",
    ["我姐姐在河内一家医院工作。", "我的姐姐在河内的医院工作。"],
    ["Chị tôi làm việc tại một bệnh viện ở Hà Nội.", "Chị gái mình công tác ở bệnh viện tại Hà Nội."],
    [
      ["在", "zài", "ở / tại"],
      ["河内", "Hénèi", "Hà Nội"],
      ["医院", "yīyuàn", "bệnh viện"],
      ["工作", "gōngzuò", "làm việc"],
    ],
    "Chủ ngữ + [在 + Địa điểm] + Động từ chính (在医院工作).",
    "Đặt cụm địa điểm ra sau động từ ('我姐姐工作在河内医院' là SAI).",
  ],
  [
    "HSK1",
    "advanced",
    "Kỹ năng & Ngoại ngữ",
    "Anh ấy biết nói tiếng Trung, cũng biết viết một chút chữ Hán.",
    "他会说汉语，也会写一点儿汉字。",
    "Tā huì shuō Hànyǔ, yě huì xiě yìdiǎnr Hànzì.",
    ["他会说中文，也会写一点汉字。"],
    ["Cậu ấy biết nói tiếng Trung và cũng biết viết một ít chữ Hán.", "Anh ta có thể nói tiếng Hán, cũng biết viết chút ít chữ Hán."],
    [
      ["会", "huì", "biết (kỹ năng qua học tập)"],
      ["也", "yě", "cũng"],
      ["一点儿", "yìdiǎnr", "một chút"],
    ],
    "会 + Động từ (biết làm một kỹ năng); 一点儿 + Danh từ (một chút cái gì).",
    "Đặt 一点儿 ra sau danh từ ('写汉字一点儿' là sai, phải là '写一点儿汉字').",
  ],
  [
    "HSK1",
    "advanced",
    "Phương tiện giao thông",
    "Sáng chủ nhật chúng tôi ngồi tàu cao tốc đi Thượng Hải.",
    "星期天上午我们坐高铁去上海。",
    "Xīngqītiān shàngwǔ wǒmen zuò gāotiě qù Shànghǎi.",
    ["我们星期天上午坐高铁去上海。", "周日上午我们坐高铁去上海。"],
    ["Buổi sáng Chủ nhật chúng tôi đi Thượng Hải bằng tàu cao tốc.", "Sáng Chủ nhật tụi mình đi tàu cao tốc tới Thượng Hải."],
    [
      ["星期天", "xīngqītiān", "Chủ nhật"],
      ["上午", "shàngwǔ", "buổi sáng"],
      ["坐高铁", "zuò gāotiě", "ngồi/đi tàu cao tốc"],
      ["去", "qù", "đi tới"],
    ],
    "Trật tự thời gian từ lớn đến nhỏ (星期天上午); Phương tiện đứng trước điểm đến (坐高铁去上海).",
    "Nói '上午星期天' (ngược thứ tự lớn-nhỏ) hoặc '去上海坐高铁' (ngược phương tiện - mục đích).",
  ],
  [
    "HSK1",
    "advanced",
    "Thời tiết & Khuyên nhủ",
    "Hôm nay bên ngoài trời rất lạnh, bạn uống nhiều nước ấm một chút nhé.",
    "今天外面天气很冷，你多喝一点儿温水吧。",
    "Jīntiān wàimiàn tiānqì hěn lěng, nǐ duō hē yìdiǎnr wēnshuǐ ba.",
    ["今天外面很冷，你多喝点温水吧。"],
    ["Hôm nay thời tiết bên ngoài lạnh lắm, bạn hãy uống nhiều nước ấm hơn nhé.", "Ngoài trời hôm nay rất lạnh, cậu uống thêm chút nước ấm đi."],
    [
      ["外面", "wàimiàn", "bên ngoài"],
      ["天气", "tiānqì", "thời tiết"],
      ["多喝", "duō hē", "uống nhiều hơn"],
      ["吧", "ba", "nhé (trợ từ khuyên nhủ)"],
    ],
    "多 / 少 + Động từ (làm gì nhiều/ít hơn: 多喝水 = uống nhiều nước).",
    "Viết '喝多水' theo trật tự tiếng Việt — chuẩn tiếng Trung phải đặt 多 trước động từ: '多喝水'.",
  ],
  [
    "HSK1",
    "advanced",
    "Phủ định sở hữu & Thời gian",
    "Chiều nay tôi không có tiết học, tôi ở ký túc xá xem phim Trung Quốc.",
    "今天下午我没有课，我在宿舍看中国电影。",
    "Jīntiān xiàwǔ wǒ méiyǒu kè, wǒ zài sùshè kàn Zhōngguó diànyǐng.",
    ["我今天下午没课，在宿舍看中国电影。"],
    ["Buổi chiều hôm nay mình không có lịch học, mình ở ký túc xá xem phim Trung Quốc.", "Chiều nay tôi không có giờ học nên ở ký túc xá xem phim Trung."],
    [
      ["没有课", "méiyǒu kè", "không có tiết học"],
      ["在宿舍", "zài sùshè", "ở ký túc xá"],
      ["中国电影", "Zhōngguó diànyǐng", "phim Trung Quốc"],
    ],
    "Phủ định của 有 là 没有; Định ngữ đứng trước danh từ (中国电影).",
    "Viết '不有课' (sai) hoặc '电影中国' (sai vị trí định ngữ).",
  ],

  // ==========================================================================
  // HSK 2 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK2",
    "basic",
    "Trải nghiệm du lịch",
    "Tôi đã từng đi Quảng Châu hai lần, nhưng vẫn chưa từng đi Bắc Kinh.",
    "我去过两次广州，但是还没去过北京。",
    "Wǒ qù guò liǎng cì Guǎngzhōu, dànshì hái méi qù guò Běijīng.",
    ["我去过广州两次，但还没去过北京。"],
    ["Mình từng tới Quảng Châu 2 lần rồi, nhưng vẫn chưa từng đến Bắc Kinh.", "Tôi đã đi Quảng Châu hai lần nhưng chưa đi Bắc Kinh bao giờ."],
    [
      ["去过", "qù guò", "đã từng đi"],
      ["两次", "liǎng cì", "hai lần"],
      ["但是", "dànshì", "nhưng"],
      ["还没", "hái méi", "vẫn chưa"],
    ],
    "Động từ + 过 + Số lần + Tân ngữ địa điểm; Phủ định: 还没(有) + Động từ + 过.",
    "Bỏ mất chữ 过 ở vế phủ định hoặc dùng '不去过'.",
  ],
  [
    "HSK2",
    "basic",
    "So sánh hơn với 比",
    "Mùa đông ở Bắc Kinh lạnh hơn mùa đông ở Hà Nội rất nhiều.",
    "北京的冬天比河内的冬天冷得多。",
    "Běijīng de dōngtiān bǐ Hénèi de dōngtiān lěng de duō.",
    ["北京冬天比河内冬天冷多了。", "北京的冬天比河内冷得多。"],
    ["Mùa đông Bắc Kinh lạnh hơn nhiều so với mùa đông Hà Nội.", "Mùa đông tại Bắc Kinh lạnh hơn ở Hà Nội rất nhiều."],
    [
      ["冬天", "dōngtiān", "mùa đông"],
      ["比", "bǐ", "so với / hơn"],
      ["冷得多", "lěng de duō", "lạnh hơn nhiều"],
    ],
    "A + 比 + B + Tính từ + 得多 / 多了 (So sánh hơn với mức độ lớn).",
    "Thêm 很 trước tính từ trong câu chữ 比 ('比河内很冷' là SAI ngữ pháp).",
  ],
  [
    "HSK2",
    "basic",
    "Bổ ngữ trạng thái 得",
    "Cô ấy nói tiếng Trung rất lưu loát, hát cũng rất hay.",
    "她汉语说得很流利，歌唱得也很好听。",
    "Tā Hànyǔ shuō de hěn liúlì, gē chàng de yě hěn hǎotīng.",
    ["她说汉语说得很流利，唱歌也唱得很好听。"],
    ["Cô ấy nói tiếng Hán rất trôi chảy, mà hát cũng rất hay.", "Tiếng Trung cô ấy nói rất lưu loát, hát cũng cực kỳ êm tai."],
    [
      ["说得", "shuō de", "nói (đến mức)"],
      ["流利", "liúlì", "lưu loát / trôi chảy"],
      ["唱得", "chàng de", "hát (đến mức)"],
      ["好听", "hǎotīng", "hay / êm tai"],
    ],
    "(Tân ngữ) + Động từ + 得 + 很 + Tính từ (Đánh giá mức độ của hành động).",
    "Dùng nhầm chữ 的 thay vì chữ 得 sau động từ, hoặc nói '她说汉语得很流利' (không đẩy tân ngữ lên trước hoặc lặp động từ).",
  ],
  [
    "HSK2",
    "basic",
    "Khoảng cách & Thời gian",
    "Khách sạn này cách ga tàu điện ngầm rất gần, đi bộ năm phút là tới.",
    "这家酒店离地铁站很近，走路五分钟就到了。",
    "Zhè jiā jiǔdiàn lí dìtiězhàn hěn jìn, zǒulù wǔ fēnzhōng jiù dào le.",
    ["这个宾馆离地铁站很近，走五分钟就到了。"],
    ["Khách sạn này ở rất gần trạm tàu điện ngầm, đi bộ 5 phút là đến nơi.", "Từ khách sạn này tới ga metro rất gần, chỉ đi bộ năm phút là tới."],
    [
      ["离", "lí", "cách (khoảng cách)"],
      ["地铁站", "dìtiězhàn", "ga tàu điện ngầm"],
      ["很近", "hěn jìn", "rất gần"],
      ["就到了", "jiù dào le", "đã tới rồi (nhanh)"],
    ],
    "A + 离 + B + 很近/很远; Thời gian ngắn + 就 + Động từ + 了.",
    "Dùng 从 thay cho 离 khi nói khoảng cách tĩnh ('这家酒店从地铁站很近' là SAI).",
  ],
  [
    "HSK2",
    "advanced",
    "Nguyên nhân & Kết quả",
    "Vì hôm qua trời mưa to nên chuyến bay đi Thâm Quyến bị hoãn hai tiếng.",
    "因为昨天下大雨，所以飞往深圳的航班延误了两个小时。",
    "Yīnwèi zuótiān xià dàyǔ, suǒyǐ fēiwǎng Shēnzhèn de hángbān yánwù le liǎng gè xiǎoshí.",
    ["因为昨天下大雨，所以去深圳的飞机晚点了两个小时。"],
    ["Bởi vì hôm qua mưa lớn nên chuyến bay tới Thâm Quyến đã bị trễ 2 giờ đồng hồ.", "Do hôm qua trời mưa to, chuyến bay đi Thâm Quyến bị delay hai tiếng."],
    [
      ["因为", "yīnwèi", "bởi vì"],
      ["所以", "suǒyǐ", "cho nên"],
      ["航班", "hángbān", "chuyến bay"],
      ["延误", "yánwù", "hoãn / trễ (delay)"],
    ],
    "因为 + Nguyên nhân，所以 + Kết quả; Động từ + 了 + Bổ ngữ thời lượng (延误了两个小时).",
    "Quên lượng từ 个 trong '两个小时' (2 tiếng đồng hồ).",
  ],
  [
    "HSK2",
    "advanced",
    "Mua hàng Taobao & Kết quả",
    "Kiện hàng bạn mua trên Taobao đã gửi đến rồi, mau ra mở xem thử đi.",
    "你在淘宝上买的快递已经寄到了，快打开看看吧。",
    "Nǐ zài Táobǎo shàng mǎi de kuàidì yǐjīng jì dào le, kuài dǎkāi kànkan ba.",
    ["你在淘宝买的包裹已经到了，快打开看看吧。"],
    ["Đơn chuyển phát nhanh bạn đặt trên Taobao đã giao tới nơi rồi, mau mở ra xem đi.", "Bưu kiện cậu mua trên Taobao đã gửi tới rồi, nhanh mở ra xem thử nhé."],
    [
      ["淘宝", "Táobǎo", "Taobao"],
      ["快递", "kuàidì", "kiện hàng chuyển phát nhanh"],
      ["已经", "yǐjīng", "đã"],
      ["看看", "kànkan", "xem thử một chút"],
    ],
    "[Định ngữ] + 的 + Danh từ (你在淘宝上买的快递); Động từ + 到 (Bổ ngữ kết quả).",
    "Đặt mệnh đề định ngữ 'mà bạn mua trên Taobao' ra sau chữ 快递 theo kiểu tiếng Việt.",
  ],
  [
    "HSK2",
    "advanced",
    "Sức khỏe & Khám bệnh",
    "Bác sĩ nói thuốc này một ngày uống ba lần, uống sau bữa ăn bằng nước ấm.",
    "医生说这种药一天吃三次，饭后用温水吃。",
    "Yīshēng shuō zhè zhǒng yào yì tiān chī sān cì, fànhòu yòng wēnshuǐ chī.",
    ["大夫说这个药一天三次，饭后用温水送服。"],
    ["Bác sĩ dặn loại thuốc này ngày uống 3 lần, uống với nước ấm sau khi ăn.", "Bác sĩ bảo thuốc này mỗi ngày uống ba lần, dùng nước ấm uống sau bữa ăn."],
    [
      ["这种药", "zhè zhǒng yào", "loại thuốc này"],
      ["三次", "sān cì", "ba lần"],
      ["饭后", "fànhòu", "sau bữa ăn"],
    ],
    "Uống thuốc trong tiếng Trung dùng động từ 吃 (吃药) hoặc 服用, không dùng 喝药 (trừ thuốc bắc dạng nước).",
    "Người Việt hay dịch 'uống thuốc' là '喝药' — với thuốc viên/thuốc tây thông thường người Trung nói là '吃药'.",
  ],
  [
    "HSK2",
    "advanced",
    "Động từ lặp & Hỏi đường",
    "Xin lỗi cho tôi hỏi một chút, đi từ đây đến cổng trường Đại học Bắc Kinh đi thế nào ạ?",
    "不好意思请问一下，从这儿到北京大学门口怎么走？",
    "Bù hǎoyìsi qǐngwèn yíxià, cóng zhèr dào Běijīng Dàxué ménkǒu zěnme zǒu?",
    ["请问一下，从这里到北大门口怎么走？"],
    ["Xin phép cho hỏi thăm một chút, từ đây tới cổng Đại học Bắc Kinh thì đi đường nào ạ?", "Phiền bạn cho mình hỏi từ chỗ này đến cổng trường ĐH Bắc Kinh đi như thế nào?"],
    [
      ["不好意思", "bù hǎoyìsi", "xin lỗi (khi làm phiền)"],
      ["从…到…", "cóng... dào...", "từ... đến..."],
      ["怎么走", "zěnme zǒu", "đi như thế nào"],
    ],
    "从 + Điểm A + 到 + Điểm B + 怎么走？ (Cấu trúc hỏi đường chuẩn).",
    "Dùng '怎么去走' hoặc đặt '怎么' ra cuối câu.",
  ],

  // ==========================================================================
  // HSK 3 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK3",
    "basic",
    "Câu chữ 把 trong văn phòng",
    "Phiền bạn gửi bản báo cáo tiếng Trung này vào email của Giám đốc Vương giúp tôi.",
    "麻烦你把这份中文报告发到王经理的邮箱里。",
    "Máfan nǐ bǎ zhè fèn Zhōngwén bàogào fā dào Wáng jīnglǐ de yóuxiāng lǐ.",
    ["请把这份中文报告发到王经理邮箱。"],
    ["Làm ơn gửi báo cáo tiếng Trung này vào hòm thư điện tử của Giám đốc Vương giúp mình.", "Phiền cậu chuyển bản báo cáo tiếng Hán này tới email của quản lý Vương."],
    [
      ["把", "bǎ", "giới từ xử lý tân ngữ"],
      ["这份", "zhè fèn", "bản này (lượng từ cho tài liệu)"],
      ["发到", "fā dào", "gửi tới"],
      ["邮箱", "yóuxiāng", "hòm thư / email"],
    ],
    "Câu chữ 把 với bổ ngữ kết quả 到: 把 + Tân ngữ + Động từ + 到 + Địa điểm.",
    "Viết '发这份报告到邮箱' mà không dùng câu chữ 把 (trong tiếng Trung, với 'V + 到/在/给', tân ngữ phải đưa lên sau 把).",
  ],
  [
    "HSK3",
    "basic",
    "Câu bị động chữ 被",
    "Lô hàng mẫu gửi đi hôm qua đã được khách hàng ở Quảng Châu nhận rồi.",
    "昨天寄出去的样品已经被广州的客户收到了。",
    "Zuótiān jì chūqù de yàngpǐn yǐjīng bèi Guǎngzhōu de kèhù shōudào le.",
    ["昨天寄出的样品已被广州客户收到了。"],
    ["Hàng mẫu gửi đi hôm qua đã được vị khách ở Quảng Châu nhận được rồi.", "Lô mẫu phẩm gửi hôm qua đã được khách hàng Quảng Châu tiếp nhận."],
    [
      ["寄出去", "jì chūqù", "gửi đi"],
      ["样品", "yàngpǐn", "hàng mẫu"],
      ["被", "bèi", "được / bị"],
      ["收到", "shōudào", "nhận được"],
    ],
    "Tân ngữ + 已经 + 被 + Tác nhân + Động từ + Kết quả + 了.",
    "Đặt phó từ 已经 ở sau chữ 被 ('被已经客户收到' là SAI).",
  ],
  [
    "HSK3",
    "basic",
    "Phân biệt 才 và 就",
    "Cuộc họp tám giờ bắt đầu, bảy rưỡi cô ấy đã tới rồi, còn anh ấy chín giờ mới tới.",
    "会议八点开始，她七点半就到了，而他九点才来。",
    "Huìyì bā diǎn kāishǐ, tā qī diǎn bàn jiù dào le, ér tā jiǔ diǎn cái lái.",
    ["八点开会，她七点半就到了，他九点才到。"],
    ["8 giờ họp mà 7 giờ 30 cô ấy đã có mặt, trong khi 9 giờ anh ta mới đến.", "Buổi họp bắt đầu lúc 8h, 7h30 cô ấy đã tới nơi, còn cậu ấy 9h mới tới."],
    [
      ["开始", "kāishǐ", "bắt đầu"],
      ["就到了", "jiù dào le", "đã tới rồi (sớm)"],
      ["才", "cái", "mới (muộn)"],
    ],
    "Sớm hơn dự kiến dùng '就…了'; Muộn hơn dự kiến dùng '才' (cuối câu không có 了).",
    "Thêm chữ 了 vào cuối vế có 才 ('他九点才来了' là SAI ngữ pháp).",
  ],
  [
    "HSK3",
    "basic",
    "Cấu trúc 越来越 & 越…越…",
    "Giao thương Việt - Trung ngày càng phát triển, người Việt học tiếng Trung càng lúc càng nhiều.",
    "中越贸易越来越发达，学汉语的越南人越来愈多。",
    "Zhōng-Yuè màoyì yuèláiyuè fādá, xué Hànyǔ de Yuènánrén yuèláiyuè duō.",
    ["中越贸易越来越发展，学中文的越南人越来越多。", "中越贸易越来越发达，学习汉语的越南人越来越多。"],
    ["Thương mại Trung - Việt ngày càng phát达, người Việt Nam học tiếng Trung ngày một đông.", "Buôn bán giữa Việt Nam và Trung Quốc ngày càng phát triển, ngày càng có nhiều người Việt học tiếng Hán."],
    [
      ["中越贸易", "Zhōng-Yuè màoyì", "thương mại Trung - Việt"],
      ["越来越", "yuèláiyuè", "ngày càng"],
      ["发达", "fādá", "phát triển / thịnh vượng"],
    ],
    "Chủ ngữ + 越来越 + Tính từ / Động từ tâm lý.",
    "Thêm 很 sau 越来越 ('越来越很多' là SAI).",
  ],
  [
    "HSK3",
    "advanced",
    "Bổ ngữ khả năng trong công việc",
    "Tài liệu hợp đồng hôm nay nhiều quá, một mình tôi dịch không xuể trước sáu giờ chiều.",
    "今天的合同资料太多了，我一个人在下午六点前翻译不完。",
    "Jīntiān de hétong zīliào tài duō le, wǒ yí gè rén zài xiàwǔ liù diǎn qián fānyì bù wán.",
    ["今天合同资料太多，我一个人下午六点前翻译不完。"],
    ["Tài liệu hợp đồng hôm nay quá nhiều, một mình tôi không thể dịch xong trước 6 giờ chiều.", "Hồ sơ hợp đồng hôm nay nhiều quá, mình tôi dịch không hết nổi trước 18h."],
    [
      ["合同资料", "hétong zīliào", "tài liệu hợp đồng"],
      ["一个人", "yí gè rén", "một mình"],
      ["翻译不完", "fānyì bù wán", "dịch không xuể / không xong nổi"],
    ],
    "Bổ ngữ khả năng phủ định: Động từ + 不 + 完 (làm không hết/không xuể).",
    "Dùng '不能翻译完' thiếu tự nhiên hơn bổ ngữ khả năng '翻译不完', hoặc viết sai thành '不翻译完'.",
  ],
  [
    "HSK3",
    "advanced",
    "Cấu trúc 一边…一边… & 只要…",
    "Anh ấy thường vừa uống cà phê vừa kiểm tra báo giá của các nhà máy trên 1688.",
    "他常常一边喝咖啡，一边在1688上核对工厂的报价。",
    "Tā chángcháng yìbiān hē kāfēi, yìbiān zài 1688 shàng héduì gōngchǎng de bàojià.",
    ["他经常一边喝咖啡一边在1688核对工厂报价。"],
    ["Anh ấy hay vừa nhâm nhi cà phê vừa đối chiếu báo giá của các xưởng trên 1688.", "Cậu ấy thường vừa uống cà phê vừa kiểm tra bảng giá nhà máy trên sàn 1688."],
    [
      ["一边…一边…", "yìbiān... yìbiān...", "vừa... vừa..."],
      ["核对", "héduì", "đối chiếu / kiểm tra"],
      ["报价", "bàojià", "báo giá"],
    ],
    "Chủ ngữ + 一边 + V1，一边 + V2 (Hai hành động diễn ra song song).",
    "Đặt chủ ngữ vào sau 一边 hoặc dùng '又喝咖啡又核对报价' (又…又… thường dùng cho tính từ hơn).",
  ],
  [
    "HSK3",
    "advanced",
    "Loại trừ & Bao gồm với 除了…以外",
    "Ngoài tiếng Trung ra, cô ấy còn nói được tiếng Anh rất trôi chảy.",
    "除了汉语以外，她还会说一口流利的英语。",
    "Chúle Hànyǔ yǐwài, tā hái huì shuō yì kǒu liúlì de Yīngyǔ.",
    ["除了中文以外，她的英语也说得很流利。"],
    ["Bên cạnh tiếng Trung, cô ấy còn có thể nói tiếng Anh rất lưu loát.", "Không chỉ tiếng Hán, cô ấy còn nói được tiếng Anh cực kỳ trôi chảy."],
    [
      ["除了…以外", "chúle... yǐwài", "ngoài... ra"],
      ["还", "hái", "còn (bổ sung thêm)"],
      ["一口流利", "yì kǒu liúlì", "một giọng lưu loát"],
    ],
    "除了 A 以外，S + 还/也 + B (Bao gồm cả A và thêm B).",
    "Dùng 都 thay cho 还/也 sẽ làm câu đổi nghĩa thành 'Trừ tiếng Trung ra (không biết tiếng Trung)'!",
  ],
  [
    "HSK3",
    "advanced",
    "Cấu trúc 一…就… trong giao dịch",
    "Hễ hàng về đến kho Bằng Tường là chúng tôi sẽ lập tức sắp xếp xe tải chở về Bắc Ninh.",
    "货物一到凭祥仓库，我们就马上安排卡车运回北宁。",
    "Huòwù yí dào Píngxiáng cāngkù, wǒmen jiù mǎshàng ānpái kǎchē yùnhuí Běiníng.",
    ["货一到凭祥仓库，我们就立刻安排货车运回北宁。"],
    ["Ngay khi hàng hóa tới kho Bằng Tường, chúng tôi sẽ lập tức bố trí xe tải vận chuyển về Bắc Ninh.", "Vừa khi lô hàng cập kho Bằng Tường là bên tôi sắp xếp xe chở về Bắc Ninh ngay."],
    [
      ["一…就…", "yī... jiù...", "hễ / vừa mới... thì ngay..."],
      ["仓库", "cāngkù", "kho hàng"],
      ["安排", "ānpái", "sắp xếp / bố trí"],
    ],
    "Chủ ngữ 1 + 一 + V1，Chủ ngữ 2 + 就 + V2.",
    "Đặt chữ 就 ở trước chủ ngữ thứ hai ('一到仓库，就我们安排' là SAI, phải là '我们就安排').",
  ],

  // ==========================================================================
  // HSK 4 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK4",
    "basic",
    "Câu nhấn mạnh 是…的",
    "Hợp đồng đại lý độc quyền này là được ký kết tại Thượng Hải vào tháng trước.",
    "这份独家代理合同是上个月在上海签的。",
    "Zhè fèn dújiā dàilǐ hétong shì shàng gè yuè zài Shànghǎi qiān de.",
    ["这份独家代理合同是上个月在上海签署的。"],
    ["Bản hợp đồng đại lý độc quyền này được ký ở Thượng Hải vào tháng trước.", "Hợp đồng đại lý độc quyền này là ký hồi tháng trước tại Thượng Hải."],
    [
      ["独家代理", "dújiā dàilǐ", "đại lý độc quyền"],
      ["是…的", "shì... de", "cấu trúc nhấn mạnh thời gian/địa điểm"],
      ["上个月", "shàng gè yuè", "tháng trước"],
    ],
    "Chủ ngữ + 是 + [Thời gian] + [Địa điểm] + Động từ + 的.",
    "Dùng 了 ở cuối câu nhấn mạnh 是…的 ('是上个月在上海签了' làm mất cấu trúc nhấn mạnh 是…的).",
  ],
  [
    "HSK4",
    "basic",
    "Điều kiện cần 只有…才…",
    "Chỉ có kiểm soát chặt chẽ chất lượng từ khâu nguyên liệu thì mới có thể giảm tỷ lệ hàng lỗi.",
    "只有从原材料环节严格把控质量，才能降低次品率。",
    "Zhǐyǒu cóng yuáncáiliào huánjié yángé bǎkòng zhìliàng, cái néng jiàngdī cìpǐnlǜ.",
    ["只有严格控制原材料质量，才能降低不良率。"],
    ["Chỉ khi kiểm soát nghiêm ngặt chất lượng ngay từ khâu nguyên vật liệu mới có thể hạ thấp tỷ lệ phế phẩm.", "Muốn giảm tỷ lệ hàng lỗi thì cách duy nhất là quản lý chặt chất lượng từ khâu nguyên liệu."],
    [
      ["只有…才…", "zhǐyǒu... cái...", "chỉ có... thì mới..."],
      ["原材料", "yuáncáiliào", "nguyên vật liệu"],
      ["严格把控", "yángé bǎkòng", "kiểm soát nghiêm ngặt"],
      ["次品率", "cìpǐnlǜ", "tỷ lệ hàng lỗi"],
    ],
    "只有 + Điều kiện tiên quyết，才 + Kết quả đạt được.",
    "Ghép nhầm '只有…就…' hoặc '只要…才…'.",
  ],
  [
    "HSK4",
    "basic",
    "Nhượng bộ 尽管…还是…",
    "Mặc dù giá xuất xưởng của nhà máy này cao hơn 5%, nhưng vì chất lượng ổn định nên chúng tôi vẫn chọn họ.",
    "尽管这家工厂的出厂价高了百分之五，但因为质量稳定，我们还是选择了他们。",
    "Jǐnguǎn zhè jiā gōngchǎng de chūchǎngjià gāo le bǎifēnzhī wǔ, dàn yīnwèi zhìliàng wěndìng, wǒmen háishi xuǎnzé le tāmen.",
    ["虽然这家工厂出厂价贵5%，但质量稳定，我们还是选了他们。"],
    ["Tuy giá xuất xưởng của xưởng này đắt hơn 5%, nhưng do chất lượng ổn định nên bên tôi vẫn lựa chọn họ.", "Dù báo giá tại xưởng của nhà máy này cao hơn 5%, chúng tôi vẫn chọn họ vì chất lượng hàng ổn định."],
    [
      ["尽管", "jǐnguǎn", "mặc dù / tuy rằng"],
      ["出厂价", "chūchǎngjià", "giá xuất xưởng (EXW)"],
      ["质量稳定", "zhìliàng wěndìng", "chất lượng ổn định"],
      ["还是", "háishi", "vẫn"],
    ],
    "尽管 + Sự thật A，但(是)…还是 + B.",
    "Viết phần trăm ngược kiểu tiếng Việt '5%' khi đọc thành '五百分之' — chuẩn tiếng Trung phải là '百分之五 (bǎifēnzhī wǔ)'.",
  ],
  [
    "HSK4",
    "basic",
    "Bất luận điều kiện 无论…都…",
    "Bất luận đơn hàng lớn hay nhỏ, công ty chúng tôi đều giao hàng đúng hẹn và bảo hành một năm.",
    "无论订单大小，我们公司都会按时交货并保修一年。",
    "Wúlùn dìngdān dàxiǎo, wǒmen gōngsī dōu huì ànshí jiāohuò bìng bǎoxiū yì nián.",
    ["不管订单是大是小，我们公司都按时交货并保修一年。"],
    ["Cho dù đơn hàng lớn hay nhỏ, công ty chúng tôi đều giao hàng đúng thời hạn và bảo hành 1 năm.", "Bất kể quy mô đơn hàng lớn nhỏ ra sao, bên tôi đều giao đúng hẹn kèm bảo hành một năm."],
    [
      ["无论", "wúlùn", "bất luận / cho dù"],
      ["订单大小", "dìngdān dàxiǎo", "đơn hàng lớn hay nhỏ"],
      ["按时交货", "ànshí jiāohuò", "giao hàng đúng hạn"],
      ["保修", "bǎoxiū", "bảo hành"],
    ],
    "无论 + Cụm lựa chọn chính phản (大小/多少/高低)，S + 都 + Vị ngữ.",
    "Quên chữ 都/也 ở mệnh đề chính phía sau 无论.",
  ],
  [
    "HSK4",
    "advanced",
    "Phó từ chuyển ngoặt 反而",
    "Sau khi giảm giá 20%, doanh thu của cửa hàng không những không giảm mà ngược lại còn tăng gấp đôi.",
    "降价百分之二十以后，店铺的营业额不但没有减少，反而翻了一倍。",
    "Jiàngjià bǎifēnzhī èrshí yǐhòu, diànpù de yíngyè'é búdàn méiyǒu jiǎnshǎo, fǎn'ér fān le yí bèi.",
    ["打八折后，店里的营业额不但没降，反而增加了一倍。"],
    ["Sau khi hạ giá 20%, doanh số của shop không những không sụt giảm mà trái lại còn tăng gấp đôi.", "Từ lúc giảm giá 20% (chiết khấu còn 8折), doanh thu cửa hàng chẳng những không giảm mà ngược lại còn nhân đôi."],
    [
      ["营业额", "yíngyè'é", "doanh thu / doanh số"],
      ["不但没有", "búdàn méiyǒu", "không những không"],
      ["反而", "fǎn'ér", "ngược lại còn"],
      ["翻了一倍", "fān le yí bèi", "tăng gấp đôi"],
    ],
    "不但不/没有 + A，反而 + B (Kết quả xảy ra theo chiều ngược hẳn với dự tính).",
    "Hiểu sai cách nói chiết khấu tiếng Trung: Giảm 20% = Còn 80% giá gốc = 打八折 (dǎ bā zhé), KHÔNG phải 打二折!",
  ],
  [
    "HSK4",
    "advanced",
    "Trạng ngữ 随着 & Biến đổi",
    "Cùng với việc tuyến đường sắt liên vận Trung - Việt đi vào hoạt động, thời gian vận chuyển hàng hóa đã rút ngắn một nửa.",
    "随着中越跨境班列的开通，货物运输时间缩短了一半。",
    "Suízhe Zhōng-Yuè kuàjìng bānliè de kāitōng, huòwù yùnshū shíjiān suōduǎn le yíbàn.",
    ["随着中越国际联运列车开通，货运时间缩短了一半。"],
    ["Nhờ sự kiện khai thông chuyến tàu liên vận xuyên biên giới Trung - Việt, thời gian vận tải hàng hóa đã giảm được một nửa.", "Cùng với sự ra đời của tàu liên vận Trung - Việt, thời gian chuyên chở hàng hóa đã rút ngắn 50%."],
    [
      ["随着", "suízhe", "cùng với"],
      ["开通", "kāitōng", "khai thông / đi vào hoạt động"],
      ["运输时间", "yùnshū shíjiān", "thời gian vận chuyển"],
      ["缩短", "suōduǎn", "rút ngắn"],
    ],
    "随着 + [Cụm danh từ hóa có 的]，Chủ ngữ + Vị ngữ biến đổi.",
    "Thêm chữ 使 vào đầu vế thứ hai ('随着…，使运输时间缩短' gây lỗi mất chủ ngữ).",
  ],
  [
    "HSK4",
    "advanced",
    "Thương mại & Điều khoản thanh toán",
    "Theo thông lệ của công ty, khách hàng mới cần đặt cọc 30% trước, 70% tiền còn lại thanh toán trước khi xuất xưởng.",
    "按照公司的惯例，新客户需要先付百分之三十的定金，百分之七十的尾款在发货前付清。",
    "Ànzhào gōngsī de guànlì, xīn kèhù xūyào xiān fù bǎifēnzhī sānshí de dìngjīn, bǎifēnzhī qīshí de wěikuǎn zài fāhuò qián fùqīng.",
    ["按公司惯例，新客户需先付30%定金，70%尾款发货前结清。"],
    ["Chiếu theo thông lệ công ty, khách mới phải trả trước 30% tiền cọc, 70% khoản cuối tất toán trước lúc giao hàng.", "Theo quy định thường lệ của công ty, khách hàng mới cần thanh toán 30% cọc trước và trả hết 70% còn lại trước khi gửi hàng."],
    [
      ["按照", "ànzhào", "chiếu theo / dựa theo"],
      ["定金", "dìngjīn", "tiền đặt cọc"],
      ["尾款", "wěikuǎn", "khoản tiền còn lại (balance)"],
      ["付清", "fùqīng", "thanh toán dứt điểm / trả hết"],
    ],
    "按照 + Quy định/Thông lệ，Chủ ngữ + 先…，…在…前 + Động từ + Bổ ngữ kết quả 清.",
    "Nhầm lẫn giữa 定金 (tiền cọc có ràng buộc pháp lý không hoàn nếu hủy đơn) và 订金 (tiền đặt trước có thể hoàn trả).",
  ],
  [
    "HSK4",
    "advanced",
    "Bất đắc dĩ 不得不 & Sản xuất",
    "Do nhà cung cấp giao thiếu linh kiện cốt lõi, phân xưởng số hai đành phải tạm dừng sản xuất một ngày.",
    "由于供应商漏发了核心零件，二号车间不得不暂停生产一天。",
    "Yóuyú gōngyìngshāng lòufā le héxīn língjiàn, èr hào chējiān bùdébù zàntíng shēngchǎn yì tiān.",
    ["因为供应商少发了核心配件，二车间不得不停产一天。"],
    ["Vì nhà cung cấp gửi sót linh kiện cốt lõi nên xưởng số 2 buộc lòng phải tạm ngưng sản xuất 1 ngày.", "Do bên cung ứng giao thiếu phụ tùng trọng yếu, phân xưởng 2 bất đắc dĩ phải dừng chuyền một ngày."],
    [
      ["由于", "yóuyú", "do / bởi vì"],
      ["供应商", "gōngyìngshāng", "nhà cung cấp"],
      ["不得不", "bùdébù", "đành phải / buộc phải"],
      ["暂停生产", "zàntíng shēngchǎn", "tạm dừng sản xuất"],
    ],
    "由于 + Nguyên nhân khách quan，Chủ ngữ + 不得不 + Động từ.",
    "Viết sai 不得不 thành '不能不' hoặc thiếu chữ 不 thứ hai.",
  ],

  // ==========================================================================
  // HSK 5 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK5",
    "basic",
    "So sánh lựa chọn 与其…不如…",
    "Thay vì tốn thời gian tranh cãi xem lỗi thuộc về ai, chi bằng chúng ta tập trung tìm giải pháp補 cứu ngay cho khách hàng.",
    "与其浪费时间争论责任在谁，不如我们集中精力马上为客户寻找补救方案。",
    "Yǔqí làngfèi shíjiān zhēnglùn zérèn zài shéi, bùrú wǒmen jízhōng jīnglì mǎshàng wèi kèhù xúnzhǎo bǔjiù fāng'àn.",
    ["与其花时间争论是谁的责任，不如集中精力立刻给客户找补救办法。"],
    ["Thay vì lãng phí thời gian tranh luận trách nhiệm thuộc về ai, thà rằng chúng ta dồn sức tìm ngay phương án khắc phục cho khách.", "Còn hơn mất thì giờ cãi nhau lỗi tại ai, tốt hơn hết chúng ta nên tập trung tìm phương án xử lý đền bù cho khách hàng ngay."],
    [
      ["与其…不如…", "yǔqí... bùrú...", "thay vì... chi bằng..."],
      ["争论", "zhēnglùn", "tranh luận / cãi nhau"],
      ["集中精力", "jízhōng jīnglì", "tập trung tinh lực"],
      ["补救方案", "bǔjiù fāng'àn", "phương án khắc phục / cứu vãn"],
    ],
    "与其 + Phương án bị loại bỏ，不如 + Phương án tối ưu được chọn.",
    "Đặt phương án tối ưu sau 与其 làm ngược hoàn toàn ý nghĩa câu.",
  ],
  [
    "HSK5",
    "basic",
    "Đánh đổi quyết liệt 宁可…也不…",
    "Thương hiệu của chúng tôi thà chịu giảm sản lượng ngắn hạn chứ tuyệt đối không sử dụng nguyên liệu tái chế kém chất lượng.",
    "我们品牌宁可承受短期产量下降，也绝不使用劣质回收原料。",
    "Wǒmen pǐnpái nìngkě chéngshòu duǎnqī chǎnliàng xiàjiàng, yě jué bù shǐyòng lièzhì huíshōu yuánliào.",
    ["我们宁愿承担短期减产，也绝不用劣质再生原料。"],
    ["Thương hiệu bên tôi thà chấp nhận sản lượng sụt giảm trong ngắn hạn chứ quyết không dùng nguyên liệu tái chế phẩm chất kém.", "Nhãn hàng chúng tôi thà chịu thiệt sản lượng trước mắt chứ nhất quyết không sử dụng vật liệu tái chế kém chất lượng."],
    [
      ["宁可…也绝不…", "nìngkě... yě jué bù...", "thà... chứ tuyệt đối không..."],
      ["承受", "chéngshòu", "chịu đựng / gánh chịu"],
      ["劣质", "lièzhì", "kém chất lượng"],
    ],
    "宁可 + Chấp nhận thiệt thòi A，也(绝)不 + Làm hành vi xấu B.",
    "Thiếu chữ 也 ở vế thứ hai sau 宁可.",
  ],
  [
    "HSK5",
    "basic",
    "Giới từ 针对 trong Quản trị",
    "Nhắm vào vấn đề tỷ lệ giao hàng trễ tăng cao trong tháng trước, Phòng Thu mua đã bổ sung thêm ba nhà máy dự phòng.",
    "针对上个月交货延误率上升的问题，采购部新增了三家备选工厂。",
    "Zhēnduì shàng gè yuè jiāohuò yánwùlǜ shàngshēng de wèntí, cǎigòubù xīnzēng le sān jiā bèixuǎn gōngchǎng.",
    ["针对上月延迟交货率高的问题，采购部增加了三家备用供应商。"],
    ["Trước tình trạng tỷ lệ trễ hạn giao hàng tăng lên vào tháng trước, bộ phận Mua hàng đã đưa thêm 3 xưởng dự phòng vào danh sách.", "Để giải quyết vấn đề tỷ lệ giao hàng chậm gia tăng trong tháng qua, phòng Purchasing đã mở rộng thêm ba nhà máy dự bị."],
    [
      ["针对", "zhēnduì", "nhắm vào / hướng tới giải quyết"],
      ["延误率", "yánwùlǜ", "tỷ lệ trễ hạn"],
      ["采购部", "cǎigòubù", "Phòng Thu mua (Purchasing)"],
      ["备选工厂", "bèixuǎn gōngchǎng", "nhà máy dự phòng"],
    ],
    "针对 + [Mệnh đề định ngữ + 的 + 问题/情况]，Chủ ngữ + Biện pháp xử lý.",
    "Không đưa danh từ trung tâm '问题' xuống cuối cụm giới từ '针对…的问题'.",
  ],
  [
    "HSK5",
    "basic",
    "Trợ từ 所 & Văn phong báo cáo",
    "Những thành tựu xuất khẩu mà công ty đạt được trong năm nay đều là nhờ sự nỗ lực ngày đêm của toàn thể nhân viên.",
    "公司今年所取得的出口业绩，都归功于全体员工夜以继日的努力。",
    "Gōngsī jīnnián suǒ qǔdé de chūkǒu yèjì, dōu guīgōng yú quántǐ yuángōng yèyǐjìrì de nǔlì.",
    ["公司今年所取得的出口成绩，全靠全体员工日夜不懈的努力。"],
    ["Kết quả kinh doanh xuất khẩu mà công ty gặt hái được trong năm nay đều thuộc về công lao phấn đấu ngày đêm của tập thể cán bộ nhân viên.", "Thành tích xuất khẩu công ty đạt được năm nay đều nhờ vào nỗ lực không ngừng nghỉ ngày đêm của toàn bộ nhân viên."],
    [
      ["所取得", "suǒ qǔdé", "mà đạt được"],
      ["出口业绩", "chūkǒu yèjì", "thành tích / doanh số xuất khẩu"],
      ["归功于", "guīgōng yú", "nhờ vào công lao của"],
      ["夜以继日", "yèyǐjìrì", "ngày đêm không nghỉ"],
    ],
    "Chủ ngữ + 所 + Ngoại động từ + 的 + Danh từ trung tâm; 归功于 + Tác nhân tích cực.",
    "Đặt chữ 所 trước chủ ngữ ('所公司取得' là SAI, phải là '公司所取得').",
  ],
  [
    "HSK5",
    "advanced",
    "Nghiệp vụ C/O Form E & Hải quan",
    "Nhờ kịp thời bổ sung Chứng nhận xuất xứ Form E bản gốc, lô thiết bị này đã được hưởng ưu đãi thuế nhập khẩu 0% tại cảng Hải Phòng.",
    "幸亏及时补交了东盟原产地证（Form E）正本，这批设备才得以在海防港享受零关税优惠。",
    "Xìngkuī jíshí bǔjiāo le Dōngméng yuánchǎndìzhèng (Form E) zhèngběn, zhè pī shèbèi cái déyǐ zài Hǎifáng gǎng xiǎngshòu líng guānshuì yōuhuì.",
    ["多亏及时补交了Form E原产地证原件，这批设备才能在海防港享受零关税。"],
    ["May mà nộp bổ sung kịp thời bản chính C/O Form E nên lô máy móc thiết bị này mới được hưởng ưu đãi thuế quan 0% ở cảng Hải Phòng.", "Nhờ có bản gốc Giấy chứng nhận xuất xứ ASEAN (Form E) bổ sung đúng lúc, lô thiết bị này mới có thể hưởng mức thuế 0% tại cảng Hải Phòng."],
    [
      ["幸亏", "xìngkuī", "may mà / nhờ có"],
      ["原产地证", "yuánchǎndìzhèng", "Giấy chứng nhận xuất xứ (C/O)"],
      ["正本", "zhèngběn", "bản gốc (Original)"],
      ["零关税", "líng guānshuì", "thuế quan 0%"],
    ],
    "幸亏 + Điều kiện may mắn，Chủ ngữ + 才(得以) + Kết quả thuận lợi.",
    "Nhầm lẫn giữa 正本/原件 (bản gốc) và 副本/复印件 (bản sao) trong chứng từ xuất nhập khẩu.",
  ],
  [
    "HSK5",
    "advanced",
    "Thương mại điện tử & Livestream",
    "Kể từ khi kết hợp video ngắn trên TikTok với livestream bán hàng, tỷ lệ chuyển đổi đơn hàng của thương hiệu đã tăng vọt 45%.",
    "自从把短视频种草与直播带货结合起来以后，该品牌的订单转化率飙升了百分之四十五。",
    "Zìcóng bǎ duǎnshìpín zhòngcǎo yǔ zhíbō dàihuò jiéhé qǐlái yǐhòu, gāi pǐnpái de dìngdān zhuǎnhuàlǜ biāoshēng le bǎifēnzhī sìshíwǔ.",
    ["自从将短视频与直播带货结合后，品牌的订单转化率提高了45%。"],
    ["Từ sau khi kết hợp review video ngắn với livestream bán hàng, tỷ lệ chuyển đổi đơn hàng của nhãn hàng này đã tăng mạnh 45%.", "Kể từ lúc phối hợp giữa video ngắn quảng bá và bán hàng qua livestream, tỷ lệ chốt đơn của thương hiệu đã bứt phá thêm 45%."],
    [
      ["短视频", "duǎnshìpín", "video ngắn"],
      ["直播带货", "zhíbō dàihuò", "livestream bán hàng"],
      ["转化率", "zhuǎnhuàlǜ", "tỷ lệ chuyển đổi (Conversion Rate)"],
      ["飙升", "biāoshēng", "tăng vọt"],
    ],
    "自从 + 把 A 与 B 结合起来 + 以后，Chủ ngữ + Động từ + 了 + Con số %.",
    "Dùng từ口语 '卖货直播' thay vì thuật ngữ chuẩn ngành TMĐT Trung Quốc là '直播带货 (zhíbō dàihuò)'.",
  ],
  [
    "HSK5",
    "advanced",
    "Đàm phán OEM & Khuôn mẫu",
    "Nếu số lượng đặt hàng năm đầu tiên của quý công ty đạt một trăm nghìn chiếc, nhà máy chúng tôi sẽ hoàn trả toàn bộ chi phí mở khuôn mẫu.",
    "如果贵公司首年订货量达到十万件，我厂将全额退还开模费用。",
    "Rúguǒ guì gōngsī shǒunián dìnghuòliàng dádào shíwàn jiàn, wǒ chǎng jiāng quán'é tuìhuán kāimú fèiyòng.",
    ["若贵司第一年采购量满十万件，本厂将全额退还模具费。"],
    ["Trong trường hợp sản lượng đặt hàng năm đầu của quý công ty chạm mốc 10 vạn (100.000) sản phẩm, xưởng chúng tôi sẽ hoàn lại 100% phí làm khuôn.", "Nếu lượng đơn đặt hàng năm đầu tiên từ phía quý công ty đạt đủ 100.000 cái, nhà máy bên tôi sẽ hoàn trả toàn bộ tiền mở khuôn mẫu."],
    [
      ["订货量", "dìnghuòliàng", "số lượng đặt hàng"],
      ["十万", "shíwàn", "một trăm nghìn (10 vạn)"],
      ["全额退还", "quán'é tuìhuán", "hoàn trả toàn bộ 100%"],
      ["开模费用", "kāimú fèiyòng", "chi phí mở khuôn mẫu (Molding fee)"],
    ],
    "Đổi đơn vị số đếm Việt ↔ Trung: 100.000 (trăm nghìn) trong tiếng Trung lấy 万 (10.000) làm gốc → 十万 (shíwàn).",
    "Sai lầm kinh điển khi dịch số tiền/sản lượng: Dịch '100 nghìn' thành '一百千' (SAI hoàn toàn — phải quy về đơn vị 万: 100.000 = 十万, 1.000.000 = 一百万, 10.000.000 = 一千万).",
  ],
  [
    "HSK5",
    "advanced",
    "Quản trị dự án & Họp复盘",
    "Trên tinh thần thực sự cầu thị, chúng ta phải mổ xẻ đánh giá lại nguyên nhân dự án bị chậm tiến độ chứ không phải đổ lỗi cho nhau.",
    "本着实事求是的原则，我们必须深入复盘项目延期的原因，而不是互相推卸责任。",
    "Běnzhe shíshì-qiúshì de yuánzé, wǒmen bìxū shēnrù fùpán xiàngmù yánqī de yuányīn, ér bú shì hùxiāng tuīxiè zérèn.",
    ["本着实事求是的精神，我们要深入复盘项目延迟原因，而非互相推诿。"],
    ["Dựa trên nguyên tắc thực tế khách quan, chúng ta cần đánh giá tổng kết sâu sắc lý do dự án trễ hạn chứ không phải đùn đẩy trách nhiệm cho nhau.", "Với tinh thần thực sự cầu thị, toàn đội phải review kỹ nguyên nhân trễ tiến độ dự án thay vì đổ lỗi qua lại."],
    [
      ["本着…的原则", "běnzhe... de yuánzé", "trên tinh thần / dựa trên nguyên tắc"],
      ["实事求是", "shíshì-qiúshì", "thực sự cầu thị (nhìn thẳng vào sự thật)"],
      ["复盘", "fùpán", "mổ xẻ đánh giá lại (review/retrospective)"],
      ["推卸责任", "tuīxiè zérèn", "đùn đẩy / đổ trách nhiệm"],
    ],
    "本着 + Thành ngữ/Danh từ + 的原则，Chủ ngữ + 必须 + V1，而不是 + V2.",
    "Không biết từ chuyên ngành quản trị hiện đại Trung Quốc '复盘 (fùpán)' khi dịch 'review/mổ xẻ đánh giá lại dự án'.",
  ],

  // ==========================================================================
  // HSK 6 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK6",
    "basic",
    "Cấu trúc 尚且…何况…",
    "Các tập đoàn đa quốc gia có nguồn vốn dồi dào còn phải thận trọng khi mở rộng thị trường mới, huống hồ là doanh nghiệp khởi nghiệp như chúng ta.",
    "资金雄厚的跨国集团在开拓新市场时尚且小心谨慎，何况是我们这样的初创企业？",
    "Zījīn xiónghòu de kuàguó jítuán zài kāituò xīn shìchǎng shí shàngqiě xiǎoxīn-jǐnshèn, hékuàng shì wǒmen zhèyàng de chūchuàng qǐyè?",
    ["资金雄厚的跨国公司在开拓新市场时尚且谨慎，更何况是我们这样的创业公司？"],
    ["Tập đoàn đa quốc gia tiềm lực tài chính hùng hậu khi khai phá thị trường mới còn phải hết sức dè dặt thận trọng, huống chi là công ty startup như chúng ta?", "Ngay cả các tập đoàn lớn dư dả vốn liếng lúc mở thị trường mới còn phải cẩn trọng, nói gì đến doanh nghiệp mới khởi nghiệp như mình."],
    [
      ["资金雄厚", "zījīn xiónghòu", "nguồn vốn hùng hậu / dồi dào"],
      ["尚且…何况…", "shàngqiě... hékuàng...", "ngay cả... còn..., huống hồ là..."],
      ["小心谨慎", "xiǎoxīn-jǐnshèn", "hết sức thận trọng"],
      ["初创企业", "chūchuàng qǐyè", "doanh nghiệp khởi nghiệp (startup)"],
    ],
    "Đối tượng bậc cao + 尚且 + Biểu hiện，(更)何况 + Đối tượng bậc thấp？",
    "Đặt ngược đối tượng nhỏ lên trước 尚且 và đối tượng lớn ở sau 何况.",
  ],
  [
    "HSK6",
    "basic",
    "Nhượng bộ học thuật 固然…但…",
    "Giảm giá để kích cầu tiêu dùng quả thực có thể thu hút lưu lượng khách trong ngắn hạn, nhưng nâng cao chất lượng cốt lõi mới là kế sách lâu dài.",
    "降价促销固然能在短期内吸引客流，但提升核心品质才是长久之计。",
    "Jiàngjià cùxiāo gùrán néng zài duǎnqī nèi xīyǐn kèliú, dàn tíshēng héxīn pǐnzhì cái shì chángjiǔ-zhījì.",
    ["打折促销固然能短期吸引流量，然而提升产品核心质量才是长远之计。"],
    ["Khuyến mãi giảm giá cố nhiên có thể thu hút lượng khách hàng trong thời gian ngắn, song nâng tầm chất lượng cốt lõi mới là kế sách bền vững lâu dài.", "Hạ giá kích cầu tuy rằng hút được khách trước mắt, nhưng nâng cao phẩm chất cốt lõi của sản phẩm mới là chiến lược dài hạn."],
    [
      ["促销", "cùxiāo", "xúc tiến bán hàng / khuyến mãi"],
      ["固然", "gùrán", "quả thực / cố nhiên"],
      ["核心品质", "héxīn pǐnzhì", "chất lượng cốt lõi"],
      ["长久之计", "chángjiǔ-zhījì", "kế sách lâu dài"],
    ],
    "A + 固然 + Giá trị cục bộ，但/然而 + B + 才是 + Trọng tâm cốt lõi.",
    "Dùng 固然 ở vế thứ hai (固然 chỉ đứng ở vế thứ nhất để nhượng bộ).",
  ],
  [
    "HSK6",
    "basic",
    "Công văn & Giới từ 鉴于",
    "Xét thấy giá cước vận tải biển quốc tế liên tục biến động mạnh, báo giá CIF này chỉ có hiệu lực trong vòng bảy ngày kể từ ngày phát hành.",
    "鉴于国际海运价格持续剧烈波动，本份CIF报价单自签发之日起仅在七日内有效。",
    "Jiànyú guójì hǎiyùn jiàgé chíxù jùliè bōdòng, běn fèn CIF bàojiàdān zì qiānfā zhī rì qǐ jǐn zài qī rì nèi yǒuxiào.",
    ["鉴于国际海运费持续大幅波动，此CIF报价自发出之日起七天内有效。"],
    ["Căn cứ vào tình hình giá cước đường biển quốc tế biến động dữ dội liên tục, bảng báo giá CIF này chỉ có giá trị hiệu lực trong 7 ngày tính từ ngày ký phát hành.", "Do cước tàu biển quốc tế đang dao động mạnh, báo giá CIF này chỉ có hiệu lực 7 ngày kể từ ngày xuất."],
    [
      ["鉴于", "jiànyú", "xét thấy / căn cứ vào"],
      ["剧烈波动", "jùliè bōdòng", "biến động dữ dội / mạnh"],
      ["自…之日起", "zì... zhī rì qǐ", "kể từ ngày..."],
      ["有效", "yǒuxiào", "có hiệu lực"],
    ],
    "鉴于 + Tình hình thực tế，Chủ ngữ + 自…之日起 + Phạm vi hiệu lực.",
    "Viết thiếu chữ 起 trong cấu trúc cố định '自…之日起' (kể từ ngày...).",
  ],
  [
    "HSK6",
    "basic",
    "Đảo nhân quả 之所以…是因为…",
    "Sở dĩ các tập đoàn điện tử lớn dịch chuyển chuỗi cung ứng sang Việt Nam là bởi vì nơi đây có vị trí cảng biển thuận lợi và lực lượng lao động trẻ dồi dào.",
    "大型电子集团之所以将供应链转移至越南，是因为这里拥有便利的港口区位与充沛的年轻劳动力。",
    "Dàxíng diànzǐ jítuán zhīsuǒyǐ jiāng gōngyìngliàn zhuǎnyí zhì Yuènán, shì yīnwèi zhèlǐ yōngyǒu biànlì de gǎngkǒu qūwèi yǔ chōngpèi de niánqīng láodònglì.",
    ["跨国电子企业之所以把供应链搬到越南，是因为越南有便利的港口位置和丰富的年轻劳动力。"],
    ["Lý do các tập đoàn điện tử lớn chuyển dịch chuỗi cung ứng tới Việt Nam là vì nơi này sở hữu vị trí cảng biển thuận tiện cùng nguồn nhân lực trẻ dồi dào.", "Sở dĩ khối doanh nghiệp điện tử quy mô lớn đưa chuỗi cung ứng sang Việt Nam là do địa thế cảng biển thuận lợi và lao động trẻ phong phú tại đây."],
    [
      ["之所以…是因为…", "zhīsuǒyǐ... shì yīnwèi...", "sở dĩ... là bởi vì..."],
      ["供应链", "gōngyìngliàn", "chuỗi cung ứng"],
      ["转移", "zhuǎnyí", "dịch chuyển"],
      ["劳动力", "láodònglì", "lực lượng lao động"],
    ],
    "Chủ ngữ + 之所以 + [Kết quả/Hiện tượng]，是因为 + [Nguyên nhân sâu xa].",
    "Đặt 之所以 ở trước chủ ngữ ('之所以大型集团…' kém chuẩn hơn '大型集团之所以…').",
  ],
  [
    "HSK6",
    "advanced",
    "Nghiệp vụ Logistics & Điện phóng B/L",
    "Do hành trình tàu biển từ Quảng Châu về Hải Phòng chỉ mất ba ngày, để tránh phát sinh phí lưu cont tại cảng đích, đề nghị quý công ty làm vận đơn điện giao hàng (Telex Release).",
    "由于从广州到海防的海运航程仅需三天，为避免目的港产生滞箱费，请贵司办理电放提单。",
    "Yóuyú cóng Guǎngzhōu dào Hǎifáng de hǎiyùn hángchéng jǐn xū sān tiān, wèi bìmiǎn mùdìgǎng chǎnshēng zhìxiāngfèi, qǐng guì sī bànlǐ diànfàng tídān.",
    ["因广州至海防航程仅三天，为免目的港产生滞柜费，请贵公司安排提单电放。"],
    ["Vì tuyến đường biển từ Quảng Châu tới Hải Phòng chỉ cần 3 ngày, nhằm tránh phát sinh phí lưu container ở cảng đến, kính đề nghị quý công ty làm thủ tục điện giao hàng (Surrendered/Telex Release B/L).", "Do tàu chạy từ Quảng Châu về cảng Hải Phòng chỉ mất 3 hôm, để không bị phạt phí lưu cont tại cảng đích, vui lòng cho phát hành vận đơn Telex Release."],
    [
      ["航程", "hángchéng", "hành trình tàu / chặng bay"],
      ["目的港", "mùdìgǎng", "cảng đích (Port of Destination)"],
      ["滞箱费", "zhìxiāngfèi", "phí lưu container (Demurrage/Detention)"],
      ["电放提单", "diànfàng tídān", "vận đơn điện giao hàng (Telex Release B/L)"],
    ],
    "由于 + Nguyên nhân，为避免 + Hậu quả xấu，请 + Yêu cầu nghiệp vụ.",
    "Thêm chữ 不 vào sau 为避免 ('为避免不产生滞箱费' là lỗi câu bệnh thừa phủ định).",
  ],
  [
    "HSK6",
    "advanced",
    "Kiểm định chất lượng QC / AQL",
    "Nếu tỷ lệ lỗi khi kiểm tra xác suất trước khi xuất hàng vượt quá 2%, nhà máy phải gia công làm lại vô điều kiện và chịu mọi tổn thất do giao hàng chậm.",
    "倘若出货前抽检的不良率超过百分之二，工厂须无条件返工重做，并承担由此造成的延期交货损失。",
    "Tǎngruò chūhuò qián chōujiǎn de bùliánglǜ chāoguò bǎifēnzhī èr, gōngchǎng xū wútiáojiàn fǎngōng chóngzuò, bìng chéngdān yóucǐ zàochéng de yánqī jiāohuò sǔnshī.",
    ["如果发货前抽查次品率高于2%，厂家必须无条件返工并承担延期损失。"],
    ["Giả sử tỷ lệ phế phẩm khi kiểm tra lấy mẫu trước lúc xuất hàng vượt mức 2%, phía nhà xưởng bắt buộc phải làm lại vô điều kiện và gánh chịu thiệt hại trễ hạn giao hàng phát sinh từ việc đó.", "Nếu kiểm hàng xác suất trước khi xuất xưởng có tỷ lệ lỗi trên 2%, nhà máy phải tái gia công vô điều kiện đồng thời chịu trách nhiệm cho tổn thất chậm giao hàng."],
    [
      ["抽检", "chōujiǎn", "kiểm tra xác suất / lấy mẫu (Random Inspection)"],
      ["不良率", "bùliánglǜ", "tỷ lệ hàng lỗi (Defect Rate)"],
      ["无条件", "wútiáojiàn", "vô điều kiện"],
      ["返工", "fǎngōng", "gia công làm lại (Rework)"],
    ],
    "倘若 + Giả định vi phạm，Chủ thể + 须 + Nghĩa vụ 1，并承担 + 由此造成的 + Hậu quả.",
    "Dùng từ '修理 (sửa chữa đồ gia dụng)' thay vì thuật ngữ sản xuất chuẩn là '返工 (rework - đưa lại vào chuyền làm lại)'.",
  ],
  [
    "HSK6",
    "advanced",
    "Thành ngữ thương mại & Chiến lược",
    "Đối mặt với thị trường nguyên liệu biến đổi từng giây từng phút, doanh nghiệp chỉ có chuẩn bị phương án dự phòng từ trước mới có thể đứng ở thế bất bại.",
    "面对瞬息万变的原材料市场，企业唯有未雨绸缪制定应急预案，方能立于不败之地。",
    "Miànduì shùnxī-wànbiàn de yuáncáiliào shìchǎng, qǐyè wéiyǒu wèiyǔ-chóumóu zhìdìng yìngjí yù'àn, fāng néng lì yú búbài zhī dì.",
    ["面对瞬息万变的原料市场，企业只有未雨绸缪做好预案，才能立于不败之地。"],
    ["Trước thị trường nguyên vật liệu thay đổi chóng mặt, doanh nghiệp chỉ có lo liệu từ trước bằng việc xây dựng phương án ứng phó khẩn cấp mới có thể đứng vững ở vị thế bất bại.", "Đối diện với thị trường nguyên liệu biến động khôn lường, chỉ khi chuẩn bị trước khi mưa tới, doanh nghiệp mới giữ được thế bất bại."],
    [
      ["瞬息万变", "shùnxī-wànbiàn", "biến đổi từng giây từng phút"],
      ["未雨绸缪", "wèiyǔ-chóumóu", "lo liệu chuẩn bị từ trước khi mưa tới"],
      ["应急预案", "yìngjí yù'àn", "phương án ứng phó khẩn cấp"],
      ["立于不败之地", "lì yú búbài zhī dì", "đứng ở thế bất bại"],
    ],
    "面对 + Bối cảnh，Chủ ngữ + 唯有 + Giải pháp，方能 + Kết quả đỉnh cao.",
    "Ghép sai cặp hô ứng văn viết: '唯有…方能/才…' (không dùng '唯有…就…').",
  ],
  [
    "HSK6",
    "advanced",
    "Tài chính & Hóa đơn hoàn thuế",
    "Xin lưu ý báo giá trên là giá xuất xưởng chưa bao gồm thuế; nếu quý công ty cần xuất hóa đơn GTGT chuyên dụng 13% để làm thủ tục hoàn thuế xuất khẩu thì cần cộng thêm 8 điểm thuế.",
    "请注意上述报价为不含税出厂价；若贵司需开具百分之十三的增值税专用发票以办理出口退税，则需另加八个税点。",
    "Qǐng zhùyì shàngshù bàojià wéi bù hán shuì chūchǎngjià; ruò guì sī xū kāijù bǎifēnzhī shísān de zēngzhíshuì zhuānyòng fāpiào yǐ bànlǐ chūkǒu tuìshuì, zé xū lìng jiā bā gè shuìdiǎn.",
    ["注意以上报价是不含税出厂价，如需开13%增值税专票办理出口退税，需加收8个点税费。"],
    ["Vui lòng lưu ý báo giá nêu trên là giá tại xưởng chưa thuế; trường hợp quý công ty cần xuất hóa đơn GTGT chuyên dụng 13% nhằm làm hoàn thuế xuất khẩu thì phải cộng thêm 8% điểm thuế.", "Xin chú ý giá trên là giá EXW chưa VAT; nếu quý đơn vị yêu cầu xuất hóa đơn đỏ VAT 13% để hoàn thuế xuất khẩu thì cần tính thêm 8 điểm phần trăm tiền thuế."],
    [
      ["不含税", "bù hán shuì", "chưa bao gồm thuế"],
      ["增值税专用发票", "zēngzhíshuì zhuānyòng fāpiào", "hóa đơn GTGT chuyên dụng"],
      ["出口退税", "chūkǒu tuìshuì", "hoàn thuế xuất khẩu"],
      ["税点", "shuìdiǎn", "điểm phần trăm thuế"],
    ],
    "若 + Điều kiện + 以 + Mục đích，则需 + Hành động tương ứng.",
    "Không nắm được thuật ngữ thực chiến tại các xưởng Trung Quốc: '开专票 (xuất hóa đơn VAT chuyên dụng)' và '加税点 (cộng thêm điểm % thuế)'.",
  ],

  // ==========================================================================
  // HSK 7 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK7",
    "basic",
    "Phân biệt 从而 & 进而 trong Chuỗi cung ứng",
    "Doanh nghiệp thông qua việc triển khai hệ thống kho thông minh đã giảm được 25% tỷ lệ tồn kho đọng vốn, từ đó giải phóng dòng tiền mặt, tiến tới mở rộng mạng lưới phân phối sang toàn khu vực Đông Nam Á.",
    "企业通过部署智能仓储系统降低了百分之二十五的库存积压率，从而盘活了现金流，进而将分销网络拓展至整个东南亚地区。",
    "Qǐyè tōngguò bùshǔ zhìnéng cāngchǔ xìtǒng jiàngdī le bǎifēnzhī èrshíwǔ de kùcún jīyālǜ, cóng'ér pánhuó le xiànjīnliú, jìn'ér jiāng fēnxiāo wǎngluò tuòzhǎn zhì zhěnggè Dōngnányà dìqū.",
    ["企业通过上线智能仓储系统降低了25%库存积压，从而盘活现金流，进而把分销网络扩展到整个东南亚。"],
    ["Thông qua việc lắp đặt hệ thống kho bãi thông minh, doanh nghiệp đã kéo giảm 25% tỷ lệ hàng tồn đọng, nhờ vậy khơi thông dòng tiền mặt và tiến thêm bước nữa là mở rộng mạng lưới phân phối ra khắp Đông Nam Á.", "Việc ứng dụng hệ thống lưu kho thông minh giúp công ty giảm 25% hàng tồn kho ứ đọng, từ đó làm sống lại dòng tiền mặt rồi tiến tới phủ sóng kênh phân phối toàn khu vực Đông Nam Á."],
    [
      ["库存积压", "kùcún jīyā", "hàng tồn kho ứ đọng"],
      ["从而", "cóng'ér", "từ đó (dẫn đến kết quả trực tiếp)"],
      ["盘活现金流", "pánhuó xiànjīnliú", "khơi thông / giải phóng dòng tiền mặt"],
      ["进而", "jìn'ér", "tiến tới (bước phát triển cao hơn)"],
    ],
    "Hành động gốc → 从而 + Kết quả trực tiếp (Bước 1) → 进而 + Mục tiêu tầm cao (Bước 2).",
    "Đảo ngược vị trí của 进而 và 从而.",
  ],
  [
    "HSK7",
    "basic",
    "Động từ trợ 得以 & Chính sách vĩ mô",
    "Nhờ cơ chế thông quan một cửa tại cửa khẩu thông minh Hữu Nghị Quan, thời gian thông quan nông sản tươi sống Việt - Trung mới có thể rút ngắn từ hai ngày xuống còn ba tiếng.",
    "得益于友谊关智慧口岸的“单一窗口”通关机制，中越生鲜农产品的清关耗时才得以从两天缩短至三个小时。",
    "Déyìyú Yǒuyìguān zhìhuì kǒu'àn de “dānyī chuāngkǒu” tōngguān jīzhì, Zhōng-Yuè shēngxiān nóngchǎnpǐn de qīngguān hàoshí cái déyǐ cóng liǎng tiān suōduǎn zhì sān gè xiǎoshí.",
    ["借助友谊关智慧口岸单一窗口机制，中越生鲜农产品通关时间才得以从两天缩短到三小时。"],
    ["Nhờ được hưởng lợi từ cơ chế thông quan 'một cửa' tại cửa khẩu thông minh Hữu Nghị Quan, thời gian làm thủ tục hải quan cho nông sản tươi sống Trung - Việt mới có thể giảm từ 2 ngày xuống 3 giờ đồng hồ.", "Nhờ có hệ thống thông quan một cửa ở cửa khẩu thông minh Hữu Nghị Quan mà thời gian thông quan mặt hàng nông sản tươi sống giữa hai nước mới rút ngắn được từ 2 ngày còn 3 tiếng."],
    [
      ["得益于", "déyìyú", "nhờ có / hưởng lợi từ"],
      ["智慧口岸", "zhìhuì kǒu'àn", "cửa khẩu thông minh"],
      ["生鲜农产品", "shēngxiān nóngchǎnpǐn", "nông sản tươi sống"],
      ["得以", "déyǐ", "nhờ đó mà có thể"],
    ],
    "得益于 + Nhân tố thuận lợi，Chủ ngữ + 才得以 + Động từ kết quả tích cực.",
    "Đặt 得以 ở cuối câu mà không có động từ chính theo sau.",
  ],
  [
    "HSK7",
    "basic",
    "Phủ định kép 无不 & Hội chợ thương mại",
    "Các nhà nhập khẩu tham dự triển lãm lần này sau khi trải nghiệm trực tiếp dây chuyền đóng gói tự động của chúng tôi, không một ai là không đánh giá cao độ chính xác và tính ổn định của thiết bị.",
    "出席本次展会的进口商在亲身体验了我司的自动化包装产线后，无不对其精准度与稳定性给予高度评价。",
    "Chūxí běncì zhǎnhuì de jìnkǒushāng zài qīnshēn tǐyàn le wǒ sī de zìdònghuà bāozhuāng chǎnxiàn hòu, wúbù duì qí jīngzhǔndù yǔ wěndìngxìng jǐyǔ gāodù píngjià.",
    ["参加此次展会的进口商在亲自体验我司自动化包装线后，莫不对其精度和稳定性给予高度评价。"],
    ["Tất cả các nhà nhập khẩu có mặt tại kỳ hội chợ triển lãm này, sau khi tận tay trải nghiệm dây chuyền đóng gói tự động của công ty chúng tôi, đều dành sự đánh giá rất cao cho độ chuẩn xác và tính ổn định của nó.", "Những đơn vị nhập khẩu tham gia triển lãm lần này khi trực tiếp trải nghiệm dây chuyền đóng gói tự động của công ty chúng tôi, không ai là không khen ngợi độ chính xác cùng sự vận hành ổn định của thiết bị."],
    [
      ["进口商", "jìnkǒushāng", "nhà nhập khẩu"],
      ["亲身体验", "qīnshēn tǐyàn", "trực tiếp trải nghiệm"],
      ["无不", "wúbù", "không ai là không (tất cả đều)"],
      ["给予高度评价", "jǐyǔ gāodù píngjià", "đánh giá rất cao"],
    ],
    "Chủ ngữ số nhiều + 在…后，无不 + 对其 + Danh từ + 给予高度评价.",
    "Hiểu lầm '无不' là phủ định ('không ai đánh giá cao') trong khi thực chất đây là phủ định kép = khẳng định 100%.",
  ],
  [
    "HSK7",
    "basic",
    "Liên từ tăng tiến 乃至 & Kinh tế khu vực",
    "Việc nâng cấp tuyến đường sắt khổ tiêu chuẩn Lào Cai – Hà Nội – Hải Phòng sẽ tái định hình mạng lưới logistics miền Bắc Việt Nam, hành lang kinh tế Côn Minh – Hà Nội và thậm chí cả cục diện thương mại Trung Quốc – ASEAN.",
    "老街—河内—海防标准轨铁路的升级改造，将重塑越南北方物流网络、昆河经济走廊乃至中国—东盟的贸易格局。",
    "Lǎojiē—Hénèi—Hǎifáng biāozhǔnguǐ tiělù de shēngjí gǎizào, jiāng chóngsù Yuènán běifāng wùliú wǎngluò, Kūn-Hé jīngjì zǒuláng nǎizhì Zhōngguó—Dōngméng de màoyì géjú.",
    ["老街至河内海防标准轨铁路的升级，将重塑越北物流网、昆河经济走廊乃至中国东盟贸易格局。"],
    ["Dự án cải tạo nâng cấp tuyến đường sắt khổ tiêu chuẩn Lào Cai – Hà Nội – Hải Phòng sẽ định hình lại mạng lưới logistics miền Bắc Việt Nam, hành lang kinh tế Côn Minh – Hà Nội và thậm chí cả bức tranh thương mại Trung Quốc – ASEAN.", "Việc nâng cấp đường sắt khổ chuẩn Lào Cai - Hà Nội - Hải Phòng sẽ tái cấu trúc hệ thống logistics phía Bắc Việt Nam, hành lang kinh tế Côn Minh - Hà Nội cho tới toàn bộ cục diện giao thương Trung Quốc - ASEAN."],
    [
      ["标准轨铁路", "biāozhǔnguǐ tiělù", "đường sắt khổ tiêu chuẩn (1435mm)"],
      ["重塑", "chóngsù", "tái định hình / tái cấu trúc"],
      ["经济走廊", "jīngjì zǒuláng", "hành lang kinh tế"],
      ["乃至", "nǎizhì", "thậm chí cho đến cả"],
    ],
    "Động từ + Tân ngữ 1 (nhỏ)、Tân ngữ 2 (vừa) + 乃至 + Tân ngữ 3 (vĩ mô).",
    "Sắp xếp thứ tự tân ngữ từ lớn xuống nhỏ trước 乃至 (phải xếp từ phạm vi hẹp đến phạm vi rộng).",
  ],
  [
    "HSK7",
    "advanced",
    "Thư tín dụng L/C & Thanh toán quốc tế",
    "Phương thức thanh toán của hợp đồng này là Thư tín dụng (L/C) không hủy ngang trả ngay; bên bán phải xuất trình bộ chứng từ vận tải hoàn hảo trong vòng 15 ngày sau khi giao hàng lên tàu để ngân hàng thanh toán.",
    "本合同付款方式为不可撤销的即期信用证（L/C）；卖方须于装船后十五日内提交全套清洁已装船海运单据，以便银行议付。",
    "Běn hétong fùkuǎn fāngshì wéi bùkě chèxiāo de jíqī xìnyòngzhèng (L/C); màifāng xū yú zhuāngchuán hòu shíwǔ rì nèi tíjiāo quántào qīngjié yǐ zhuāngchuán hǎiyùn dānjù, yǐbiàn yínháng yìfù.",
    ["本合同采用不可撤销即期信用证付款，卖方须在装船后15天内提交全套清洁已装船单据供银行议付。"],
    ["Phương thức thanh toán áp dụng cho hợp đồng này là L/C trả ngay không thể hủy ngang; Bên Bán bắt buộc phải nộp trọn bộ chứng từ vận tải biển hoàn hảo đã bốc hàng lên tàu trong vòng 15 ngày kể từ ngày装船 để ngân hàng chiết khấu thanh toán.", "Hợp đồng này thanh toán bằng Thư tín dụng trả ngay không hủy ngang (Irrevocable Sight L/C); bên bán cần xuất trình đầy đủ bộ chứng từ đường biển hoàn hảo trong 15 ngày sau khi hàng lên tàu để ngân hàng thanh toán."],
    [
      ["不可撤销", "bùkě chèxiāo", "không thể hủy ngang (Irrevocable)"],
      ["即期信用证", "jíqī xìnyòngzhèng", "Thư tín dụng trả ngay (Sight L/C)"],
      ["清洁已装船", "qīngjié yǐ zhuāngchuán", "hoàn hảo đã bốc hàng lên tàu (Clean on board)"],
      ["议付", "yìfù", "chiết khấu bộ chứng từ thanh toán (Negotiation)"],
    ],
    "Chủ ngữ + 为 + Thuật ngữ pháp lý；Chủ thể + 须于 + Thời hạn + 内 + Động từ + Tân ngữ，以便 + Mục đích.",
    "Không phân biệt được 即期信用证 (Sight L/C - trả ngay) và 远期信用证 (Usance L/C - trả chậm).",
  ],
  [
    "HSK7",
    "advanced",
    "Bảo hộ Sở hữu trí tuệ & Thương hiệu",
    "Trước khi đưa sản phẩm sang thị trường nước ngoài, việc cấp bách hàng đầu của doanh nghiệp là phải đăng ký bảo hộ nhãn hiệu và bằng sáng chế tại nước sở tại, tránh bị đối thủ cạnh tranh đăng ký mất trước.",
    "在产品出海之前，企业的当务之急是在目标国完成商标与专利注册保护，以免被竞争对手恶意抢注。",
    "Zài chǎnpǐn chūhǎi zhīqián, qǐyè de dāngwù-zhījí shì zài mùbiāoguó wánchéng shāngbiāo yǔ zhuānlì zhùcè bǎohù, yǐmiǎn bèi jìngzhēng duìshǒu èyì qiǎngzhù.",
    ["产品出海前，企业的当务之急是在当地国注册商标和专利，防止被竞争对手抢注。"],
    ["Trước lúc đưa sản phẩm vươn ra thị trường quốc tế, nhiệm vụ cấp thiết nhất của doanh nghiệp là hoàn tất đăng ký bảo hộ thương hiệu và sáng chế tại quốc gia mục tiêu, kẻo bị đối thủ cạnh tranh ác ý đăng ký chiếm đoạt trước.", "Trước khi xuất khẩu thương hiệu ra nước ngoài, việc gấp rút hàng đầu của công ty là đăng ký nhãn hiệu cùng bằng sáng chế ở nước sở tại nhằm tránh bị đối thủ giành đăng ký trước."],
    [
      ["产品出海", "chǎnpǐn chūhǎi", "đưa sản phẩm vươn ra nước ngoài"],
      ["当务之急", "dāngwù-zhījí", "việc cấp bách hàng đầu hiện nay"],
      ["商标与专利", "shāngbiāo yǔ zhuānlì", "nhãn hiệu thương mại và bằng sáng chế"],
      ["恶意抢注", "èyì qiǎngzhù", "ác ý tranh đăng ký trước (Trademark squatting)"],
    ],
    "在…之前，Chủ ngữ + 的当务之急是 + Giải pháp，以免 + Hậu quả bị động.",
    "Thêm chữ 不 sau 以免 ('以免不被抢注' là lỗi thừa phủ định).",
  ],
  [
    "HSK7",
    "advanced",
    "Phê phán chiến lược cạnh tranh giá rẻ",
    "Nếu doanh nghiệp cứ mù quáng dựa vào cuộc chiến phá giá để giành giật đơn hàng mà bỏ bê đầu tư nghiên cứu phát triển, thì sớm muộn gì cũng sẽ rơi vào vòng xoáy biên lợi nhuận cạn kiệt.",
    "倘若企业一味依靠价格战抢夺订单，而忽视研发投入，迟早会陷入利润率枯竭的恶性循环。",
    "Tǎngruò qǐyè yíwèi yīkào jiàgézhàn qiǎngduó dìngdān, ér hūshì yánfā tóurù, chízǎo huì xiànrù lìrùnlǜ kūjié de èxìng xúnhuán.",
    ["如果企业一味靠低价战抢单而忽略研发投入，早晚会陷入利润枯竭的恶性循环。"],
    ["Giả sử doanh nghiệp chỉ chăm chăm dựa vào cuộc chiến giá rẻ để tranh giành đơn hàng mà coi nhẹ đầu tư R&D, chẳng chóng thì chầy sẽ lún sâu vào vòng luẩn quẩn ác tính khiến biên lợi nhuận cạn kiệt.", "Nếu công ty cứ một mực dùng chiến thuật ép giá để giật đơn mà bỏ qua đầu tư nghiên cứu phát triển thì sớm muộn cũng rơi vào vòng xoáy suy kiệt lợi nhuận."],
    [
      ["一味", "yíwèi", "cứ mù quáng / chỉ chăm chăm"],
      ["价格战", "jiàgézhàn", "cuộc chiến giá cả (Price war)"],
      ["研发投入", "yánfā tóurù", "đầu tư nghiên cứu & phát triển (R&D)"],
      ["恶性循环", "èxìng xúnhuán", "vòng luẩn quẩn ác tính (Vicious cycle)"],
    ],
    "倘若 + Chủ ngữ + 一味 + Hành vi lệch lạc，而忽视 + Yếu tố cốt lõi，迟早会陷入 + …的恶性循环.",
    "Nhầm lẫn giữa 恶性循环 (vòng xoáy tiêu cực/luẩn quẩn) và 良性循环 (vòng tuần hoàn tích cực).",
  ],
  [
    "HSK7",
    "advanced",
    "Chuyển đổi xanh & Thuế carbon",
    "Việc xây dựng chuỗi cung ứng xanh phát thải thấp không chỉ nhằm đáp ứng tiêu chuẩn kiểm toán ESG của các tập đoàn Âu Mỹ, mà còn giúp doanh nghiệp giảm chi phí năng lượng về lâu dài.",
    "构建绿色低碳供应链不仅旨在满足欧美跨国集团的ESG审计标准，更有助于企业从长远上降低能源成本。",
    "Gòujiàn lǜsè dītàn gōngyìngliàn bùjǐn zhǐzài mǎnzú Ōu-Měi kuàguó jítuán de ESG shěnjì biāozhǔn, gèng yǒuzhùyú qǐyè cóng chángyuǎn shàng jiàngdī néngyuán chéngběn.",
    ["打造绿色低碳供应链不仅是为了符合欧美集团ESG审核标准，也有助于企业长期降低能耗成本。"],
    ["Thiết lập chuỗi cung ứng xanh ít phát thải carbon không những hướng tới mục tiêu đáp ứng tiêu chuẩn kiểm toán ESG từ các tập đoàn Âu - Mỹ, mà còn giúp ích cho doanh nghiệp trong việc cắt giảm chi phí năng lượng về dài hạn.", "Xây dựng chuỗi cung ứng xanh低碳 không chỉ nhằm thỏa mãn quy chuẩn đánh giá ESG của khối doanh nghiệp Âu Mỹ mà còn hỗ trợ công ty tiết giảm chi phí năng lượng lâu dài."],
    [
      ["绿色低碳", "lǜsè dītàn", "xanh và phát thải carbon thấp"],
      ["旨在", "zhǐzài", "nhằm mục đích"],
      ["审计标准", "shěnjì biāozhǔn", "tiêu chuẩn kiểm toán / đánh giá (Audit standard)"],
      ["有助于", "yǒuzhùyú", "giúp ích cho / có lợi cho"],
    ],
    "Cụm động danh từ làm chủ ngữ + 不仅旨在 + Mục tiêu 1，更有助于 + Lợi ích 2.",
    "Dùng từ口语 '建好' thay vì động từ học thuật '构建 (gòujiàn - kiến tạo/xây dựng hệ thống trừu tượng)'.",
  ],

  // ==========================================================================
  // HSK 8 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK8",
    "basic",
    "Điều khoản Bảo mật & Khuôn mẫu Hợp đồng",
    "Phàm là bản vẽ kỹ thuật, thông số công nghệ và khuôn mẫu đặt riêng do Bên Mua cung cấp, khi chưa được Bên Mua đồng ý bằng văn bản, Bên Bán tuyệt đối không được tiết lộ hoặc sử dụng để sản xuất hàng cho bất kỳ bên thứ ba nào.",
    "凡属买方提供之技术图纸、工艺参数及定制模具，未经买方书面同意，卖方概不得泄露或用于为任何第三方生产产品。",
    "Fán shǔ mǎifāng tígōng zhī jìshù túzhǐ, gōngyì cānshù jí dìngzhì mújù, wèijīng mǎifāng shūmiàn tóngyì, màifāng gài bùdé xièlòu huò yòngyú wèi rènhé dì-sānfāng shēngchǎn chǎnpǐn.",
    ["凡由买方提供的技术图纸、工艺参数和定制模具，未经买方书面许可，卖方均不得泄露或为第三方生产。"],
    ["Tất cả các bản vẽ kỹ thuật, thông số quy trình công nghệ cũng như khuôn đúc đặt riêng thuộc quyền cung cấp của Bên Mua, nếu chưa có sự chấp thuận bằng văn bản từ Bên Mua, Bên Bán nhất loạt không được phép tiết lộ hoặc dùng để gia công sản phẩm cho bất cứ bên thứ ba nào.", "Phàm là bản vẽ kỹ thuật, thông số kỹ thuật và khuôn mẫu do Bên Mua bàn giao, khi chưa có văn bản đồng ý của Bên Mua thì Bên Bán tuyệt đối không được để lộ hay sản xuất cho bên thứ ba."],
    [
      ["凡属", "fán shǔ", "phàm là / tất cả những gì thuộc về"],
      ["技术图纸", "jìshù túzhǐ", "bản vẽ kỹ thuật"],
      ["未经…书面同意", "wèijīng... shūmiàn tóngyì", "khi chưa được sự đồng ý bằng văn bản của..."],
      ["概不得", "gài bùdé", "nhất loạt không được phép"],
    ],
    "凡属 + Phạm vi đối tượng，未经 + Điều kiện phê duyệt，Chủ thể + 概不得 + Hành vi bị cấm.",
    "Dùng từ khẩu ngữ '都不要' thay vì thuật ngữ pháp lý chuẩn hợp đồng là '概不得 / 均不得'.",
  ],
  [
    "HSK8",
    "basic",
    "Điều khoản Nghiệm thu & Quá hạn (逾期)",
    "Bên Mua phải hoàn tất việc kiểm tra nghiệm thu hàng hóa trong vòng bảy ngày làm việc kể từ ngày hàng tới cảng đích; quá thời hạn trên mà không gửi khiếu nại bằng văn bản kèm biên bản giám định của bên thứ ba thì lập tức được coi là lô hàng đạt chuẩn.",
    "买方应自货物抵达目的港之日起七个工作日内完成验货；逾期未提出书面异议并附第三方检验报告的，即视为该批货物验收合格。",
    "Mǎifāng yīng zì huòwù dǐdá mùdìgǎng zhī rì qǐ qī gè gōngzuòrì nèi wánchéng yànhuò; yúqī wèi tíchū shūmiàn yìyì bìng fù dì-sānfāng jiǎnyàn bàogào de, jí shìwéi gāi pī huòwù yànshōu hégé.",
    ["买方须在货物到达目的港之日起7个工作日内完成验收，逾期未提书面异议及第三方检测报告的，即视为验收合格。"],
    ["Bên Mua có nghĩa vụ hoàn thành công tác nghiệm thu hàng trong thời hạn 07 ngày làm việc tính từ ngày hàng hóa cập cảng đến; trường hợp quá hạn mà không đưa ra kiến nghị phản đối bằng văn bản kèm theo báo cáo kiểm định từ đơn vị thứ ba thì mặc nhiên được xem là lô hàng đã nghiệm thu đạt yêu cầu.", "Trong vòng 7 ngày làm việc kể từ khi hàng cập cảng đích, Bên Mua phải nghiệm thu xong; nếu quá hạn không có khiếu nại bằng văn bản kèm chứng thư giám định bên thứ ba thì coi như lô hàng đạt chuẩn."],
    [
      ["抵达", "dǐdá", "đến / cập (cảng, sân bay)"],
      ["逾期", "yúqī", "quá thời hạn quy định"],
      ["书面异议", "shūmiàn yìyì", "khiếu nại / ý kiến phản đối bằng văn bản"],
      ["即视为", "jí shìwéi", "lập tức được coi như là"],
    ],
    "Chủ thể + 应自…之日起 + Thời hạn + 内 + Nghĩa vụ；逾期未…的，即视为 + Hệ quả pháp lý.",
    "Dùng '过期 (hết hạn sử dụng thực phẩm/thuốc)' thay cho thuật ngữ pháp lý chỉ việc trễ hạn hợp đồng là '逾期 (yúqī)'.",
  ],
  [
    "HSK8",
    "basic",
    "Điều khoản Bất khả kháng (不可抗力)",
    "Nếu do sự kiện bất khả kháng như thiên tai, chiến tranh, đình công cảng biển hoặc thay đổi chính sách cấm xuất khẩu của chính phủ dẫn đến việc không thể thực hiện hợp đồng đúng hạn, bên gặp sự cố phải thông báo bằng văn bản cho bên kia trong vòng 48 giờ.",
    "如因自然灾害、战争、港口罢工或政府出口禁令等不可抗力事件导致合同无法如期履行，受阻方须于四十八小时内书面通知对方。",
    "Rú yīn zìrán zāihài, zhànzhēng, gǎngkǒu bàgōng huò zhèngfǔ chūkǒu jìnlìng děng bùkě-kànglì shìjiàn dǎozhì hétong wúfǎ rúqī lǚxíng, shòuzǔfāng xū yú sìshíbā xiǎoshí nèi shūmiàn tōngzhī duìfāng.",
    ["若因天灾、战争、港口罢工或政府禁令等不可抗力导致无法按期履行合同，受影响方须在48小时内书面通知对方。"],
    ["Trường hợp do các sự kiện bất khả kháng như thảm họa thiên nhiên, chiến tranh, đình công tại cảng hay lệnh cấm xuất khẩu từ chính phủ khiến hợp đồng không thể thực thi đúng kỳ hạn, bên bị cản trở bắt buộc phải gửi thông báo bằng văn bản cho đối phương trong vòng 48 giờ đồng hồ.", "Nếu vì thiên tai, chiến tranh, bãi công cảng biển hoặc lệnh cấm xuất khẩu của nhà nước (bất khả kháng) làm hợp đồng không thực hiện được đúng hạn, bên chịu ảnh hưởng phải báo bằng văn bản cho bên kia trong 48 tiếng."],
    [
      ["不可抗力", "bùkě-kànglì", "bất khả kháng (Force Majeure)"],
      ["如期履行", "rúqī lǚxíng", "thực hiện (hợp đồng) đúng thời hạn"],
      ["受阻方", "shòuzǔfāng", "bên gặp trở ngại / bên chịu ảnh hưởng"],
      ["书面通知", "shūmiàn tōngzhī", "thông báo bằng văn bản"],
    ],
    "如因 + [Liệt kê] + 等不可抗力事件导致 + Hệ quả，Chủ thể + 须于 + Thời hạn + 内 + Nghĩa vụ.",
    "Dùng từ '做合同' thay vì động từ pháp lý chuẩn là '履行合同 (lǚxíng hétong - thực hiện hợp đồng)'.",
  ],
  [
    "HSK8",
    "basic",
    "Báo cáo tài chính & Thống kê vĩ mô (截至)",
    "Tính đến cuối quý 3 năm nay, tổng kim ngạch xuất nhập khẩu song phương giữa Việt Nam và Trung Quốc đã vượt mốc một trăm năm mươi tỷ đô la Mỹ, tăng trưởng 14,5% so với cùng kỳ năm ngoái.",
    "截至今年第三季度末，中越双边进出口贸易总额已突破一千五百亿美元大关，同比增长百分之十四点五。",
    "Jiézhì jīnnián dì-sān jìdù mò, Zhōng-Yuè shuāngbiān jìnchūkǒu màoyì zǒng'é yǐ tūpò yìqiān wǔbǎi yì Měiyuán dàguān, tóngbǐ zēngzhǎng bǎifēnzhī shísì diǎn wǔ.",
    ["截至今年三季度末，中越双边贸易总额已突破1500亿美元，同比增长14.5%。"],
    ["Tính tới thời điểm cuối quý III năm nay, tổng kim ngạch thương mại xuất nhập khẩu hai chiều Trung - Việt đã cán mốc trên 150 tỷ USD, đạt mức tăng trưởng 14,5% so với cùng kỳ năm trước.", "Chốt đến hết quý 3 năm nay, tổng giá trị xuất nhập khẩu song phương giữa Việt Nam và Trung Quốc đã vượt ngưỡng 150 tỷ đô la Mỹ, tăng 14,5% so với cùng kỳ."],
    [
      ["截至", "jiézhì", "tính đến (mốc thời gian)"],
      ["双边进出口", "shuāngbiān jìnchūkǒu", "xuất nhập khẩu song phương"],
      ["一千五百亿", "yìqiān wǔbǎi yì", "150 tỷ (1.500 ức)"],
      ["同比增长", "tóngbǐ zēngzhǎng", "tăng trưởng so với cùng kỳ năm trước (YoY)"],
    ],
    "Đổi đơn vị Tỷ (1.000.000.000) sang tiếng Trung: Tiếng Trung lấy 亿 (100.000.000 = 100 triệu) làm gốc → 1 tỷ = 十亿; 150 tỷ = 一千五百亿!",
    "Sai lầm nghiêm trọng nhất của phiên dịch viên: Dịch '150 tỷ' thành '一百五十亿' (thực ra mới là 15 tỷ!). Phải nhớ: 1 tỷ = 10 ức (十亿) → 150 tỷ = 1.500 ức (一千五百亿)!",
  ],
  [
    "HSK8",
    "advanced",
    "Phân biệt 同比 (YoY) và 环比 (MoM/QoQ) trong Phân tích Kinh tế",
    "Nhờ nhu cầu mua sắm dịp cuối năm bùng nổ, sản lượng xuất khẩu linh kiện điện tử tháng 11 của khu công nghiệp không những tăng 18% so với cùng kỳ năm ngoái, mà còn tăng 9% so với tháng 10 liền kề.",
    "受年底消费旺季需求拉动，该工业园区十一月份电子元器件出口量不仅同比增长百分之十八，而且环比十月份也增长了百分之九。",
    "Shòu niándǐ xiāofèi wàngjì xūqiú lādòng, gāi gōngyè yuánqū shíyī yuèfèn diànzǐ yuánqìjiàn chūkǒuliàng bùjǐn tóngbǐ zēngzhǎng bǎifēnzhī shíbā, érqiě huánbǐ shí yuèfèn yě zēngzhǎng le bǎifēnzhī jiǔ.",
    ["受年末旺季需求带动，园区11月电子元器件出口量不仅同比增长18%，环比10月也增长了9%。"],
    ["Được thúc đẩy bởi nhu cầu mùa cao điểm tiêu dùng cuối năm, sản lượng xuất khẩu linh kiện điện tử trong tháng 11 của khu công nghiệp này không chỉ tăng 18% so với cùng kỳ năm trước (YoY), mà còn tăng 9% so với tháng 10 liền trước (MoM).", "Nhờ sức kéo từ nhu cầu tiêu thụ mùa cao điểm cuối năm, lượng xuất khẩu linh kiện điện tử tháng 11 tại khu công nghiệp vừa tăng 18% cùng kỳ năm ngoái, vừa tăng 9% so với tháng 10 trước đó."],
    [
      ["消费旺季", "xiāofèi wàngjì", "mùa cao điểm tiêu dùng (Peak season)"],
      ["同比增长", "tóngbǐ zēngzhǎng", "tăng trưởng so với cùng kỳ năm trước (Year-on-Year)"],
      ["环比", "huánbǐ", "so với kỳ/tháng/quý liền kề trước đó (Month-on-Month / Quarter-on-Quarter)"],
    ],
    "受 + Nhân tố vĩ mô + 拉动/影响，Chủ ngữ + 不仅同比…，而且环比…",
    "Không phân biệt được 同比 (so với cùng kỳ năm trước - YoY) và 环比 (so với kỳ liền kề ngay trước đó - MoM/QoQ).",
  ],
  [
    "HSK8",
    "advanced",
    "Giải quyết tranh chấp & Trọng tài thương mại quốc tế",
    "Mọi tranh chấp phát sinh từ hoặc liên quan đến việc thực hiện hợp đồng này trước hết phải được giải quyết thông qua thương lượng hữu nghị giữa hai bên; nếu thương lượng không thành, bất kỳ bên nào cũng có quyền đưa vụ việc ra Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) hoặc Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc (CIETAC) để phân xử.",
    "凡因履行本合同所发生或与本合同有关之一切争议，双方应首先通过友好协商解决；协商不成的，任何一方均有权提交越南国际仲裁中心（VIAC）或中国国际经济贸易仲裁委员会（CIETAC）进行仲裁。",
    "Fán yīn lǚxíng běn hétong suǒ fāshēng huò yǔ běn hétong yǒuguān zhī yíqiè zhēngyì, shuāngfāng yīng shǒuxiān tōngguò yǒuhǎo xiéshāng jiějué; xiéshāng bù chéng de, rènhé yìfāng jūn yǒuquán tíjiāo Yuènán Guójì Zhòngcái Zhōngxīn (VIAC) huò Zhōngguó Guójì Jīngjì Màoyì Zhòngcái Wěiyuánhuì (CIETAC) jìnxíng zhòngcái.",
    ["凡因本合同引起或与本合同有关的任何争议，双方应先友好协商；协商不成的，任何一方均可提交VIAC或CIETAC仲裁。"],
    ["Tất cả mọi tranh chấp nảy sinh từ việc thực thi hợp đồng này hoặc có liên quan tới hợp đồng này, hai bên trước tiên cần giải quyết qua đàm phán thương lượng thiện chí; trường hợp thương lượng không đạt kết quả, mỗi bên đều có quyền đệ trình lên Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) hoặc Ủy ban Trọng tài Kinh tế Thương mại Quốc tế Trung Quốc (CIETAC) để tiến hành phân xử trọng tài.", "Phàm là tranh chấp phát sinh từ hoặc liên quan tới hợp đồng này sẽ được hai bên ưu tiên hòa giải thương lượng; nếu không thành, bất cứ bên nào cũng được quyền đưa ra VIAC hoặc CIETAC để trọng tài phán quyết."],
    [
      ["一切争议", "yíqiè zhēngyì", "mọi tranh chấp (All disputes)"],
      ["友好协商", "yǒuhǎo xiéshāng", "thương lượng hữu nghị"],
      ["仲裁", "zhòngcái", "trọng tài thương mại (Arbitration)"],
      ["均有权", "jūn yǒuquán", "đều có quyền"],
    ],
    "凡因…所发生或与…有关之一切争议，双方应首先…；协商不成的，任何一方均有权提交…进行仲裁.",
    "Đặt mệnh đề định ngữ dài 'phát sinh từ hoặc liên quan đến hợp đồng này' ở sau chữ '争议' (phải đưa toàn bộ lên trước '之一切争议').",
  ],
  [
    "HSK8",
    "advanced",
    "Chiến lược Bản địa hóa (本土化) của Tập đoàn Đa quốc gia",
    "Sự thành bại của các doanh nghiệp Trung Quốc khi đầu tư xây dựng nhà máy tại Việt Nam, suy cho cùng không chỉ phụ thuộc vào quy mô vốn đầu tư ban đầu, mà cốt lõi hơn là khả năng bản địa hóa đội ngũ quản lý và tôn trọng văn hóa pháp luật sở tại.",
    "中资企业赴越投资建厂的成败，归根结底不仅取决于初期资本投入的规模，更在于能否实现管理团队本土化并尊重当地法律与文化。",
    "Zhōngzī qǐyè fù Yuè tóuzī jiànchǎng de chéngbài, guīgēn-jiédǐ bùjǐn qǔjué yú chūqī zīběn tóurù de guīmó, gèng zàiyú néngfǒu shíxiàn guǎnlǐ tuánduì běntǔhuà bìng zūnzhòng dāngdì fǎlǜ yǔ wénhuà.",
    ["中企去越南投资设厂的成败，归根到底不仅在于初期投资规模，更在于能否实现管理本土化并尊重当地法律文化。"],
    ["Thành công hay thất bại của khối doanh nghiệp Trung Quốc khi sang Việt Nam đầu tư mở xưởng, xét đến tận gốc rễ không chỉ tùy thuộc vào quy mô rót vốn ban đầu, mà quan trọng hơn nằm ở việc có thực hiện được bản địa hóa đội ngũ quản trị và tôn trọng luật pháp, văn hóa địa phương hay không.", "Việc doanh nghiệp Trung Quốc đầu tư xây nhà máy tại Việt Nam thành hay bại suy cho cùng không những quyết định bởi quy mô vốn ban đầu mà cốt yếu nằm ở năng lực bản địa hóa nhân sự quản lý và sự tôn trọng văn hóa pháp lý bản địa."],
    [
      ["赴越投资", "fù Yuè tóuzī", "sang Việt Nam đầu tư"],
      ["归根结底", "guīgēn-jiédǐ", "suy cho cùng / xét đến tận gốc rễ"],
      ["取决于", "qǔjué yú", "phụ thuộc vào / được quyết định bởi"],
      ["本土化", "běntǔhuà", "bản địa hóa (Localization)"],
    ],
    "Tương ứng 2 chiều (两面对两面): Chủ ngữ có '成败 (thành bại - 2 chiều)' → Vị ngữ phía sau dùng '能否 (có thể hay không - 2 chiều)' để tránh lỗi Câu bệnh!",
    "Viết vế trước là '成败 (thành hay bại)' nhưng vế sau thiếu chữ '能否/是否' gây ra lỗi ngữ pháp 两面对一面.",
  ],
  [
    "HSK8",
    "advanced",
    "Hội nhập Chuỗi giá trị & Chuyển giao công nghệ",
    "Hợp tác công nghiệp giữa hai nước đang chuyển dịch mạnh mẽ từ mô hình gia công lắp ráp đơn thuần sang hợp tác sâu rộng trong các lĩnh vực có giá trị gia tăng cao như bán dẫn, trí tuệ nhân tạo và năng lượng sạch.",
    "两国产业合作正从单纯的加工组装模式，加速向半导体、人工智能及清洁能源等高附加值领域的深度协同迈进。",
    "Liǎng guó chǎnyè hézuò zhèng cóng dānchún de jiāgōng zǔzhuāng móshì, jiāsù xiàng bàndǎotǐ, réngōng zhìnéng jí qīngjié néngyuán děng gāo fùjiāzhí lǐngyù de shēndù xiétóng màijìn.",
    ["双边产业合作正由单纯的加工组装，向半导体、AI和清洁能源等高附加值领域的深度合作迈进。"],
    ["Sự hợp tác công nghiệp giữa hai quốc gia đang tăng tốc tiến bước từ mô hình gia công lắp ráp đơn thuần sang phối hợp chiều sâu trong các lĩnh vực giá trị gia tăng cao như chất bán dẫn, AI và năng lượng sạch.", "Hợp tác sản xuất công nghiệp song phương đang chuyển mình nhanh chóng từ hình thức lắp ráp gia công thuần túy sang hợp tác chuyên sâu ở những ngành có giá trị gia tăng lớn như bán dẫn, trí tuệ nhân tạo cùng năng lượng tái tạo."],
    [
      ["加工组装", "jiāgōng zǔzhuāng", "gia công lắp ráp"],
      ["半导体", "bàndǎotǐ", "chất bán dẫn (Semiconductor)"],
      ["高附加值", "gāo fùjiāzhí", "giá trị gia tăng cao (High value-added)"],
      ["深度协同", "shēndù xiétóng", "phối hợp / hợp tác chiều sâu"],
    ],
    "Chủ ngữ + 正从 + Mô hình cũ，加速向 + [Liệt kê + 等高附加值领域的…] + 迈进/转型.",
    "Đặt '等高附加值领域' lên trước danh sách liệt kê '半导体、人工智能及清洁能源'.",
  ],

  // ==========================================================================
  // HSK 9 — 8 SEEDS (4 BASIC + 4 ADVANCED = 16 EXERCISES)
  // ==========================================================================
  [
    "HSK9",
    "basic",
    "Biện luận Học thuật: 诚然…然而… & 无异于",
    "Quả thực, việc áp dụng rào cản thuế quan bảo hộ có thể che chắn cho các nhà sản xuất nội địa trong ngắn hạn; tuy nhiên, xét về lâu dài, hành động tự cô lập mình khỏi chuỗi phân công lao động toàn cầu chẳng khác nào uống rượu độc giải khát, tất sẽ làm suy yếu năng lực sáng tạo của nền kinh tế.",
    "诚然，设置保护性关税壁垒能在短期内为本土制造商提供庇护；然而，从长远来看，这种将自身孤立于全球分工体系之外的做法无异于饮鸩止渴，必将削弱经济体的创新活力。",
    "Chéngrán, shèzhì bǎohùxìng guānshuì bìlěi néng zài duǎnqī nèi wèi běntǔ zhìzàoshāng tígōng bìhù; rán'ér, cóng chángyuǎn láikàn, zhè zhǒng jiāng zìshēn gūlì yú quánqiú fēngōng tǐxì zhīwài de zuòfǎ wúyìyú yǐnzhèn-zhǐkě, bìjiāng xuēruò jīngjìtǐ de chuàngxīn huólì.",
    ["诚然，关税壁垒短期内能保护本土制造业；但从长远看，脱离全球分工体系无异于饮鸩止渴，必会削弱经济创新力。"],
    ["Đúng là việc dựng lên các hàng rào thuế quan mang tính bảo hộ có thể tạo ô che chở cho giới sản xuất trong nước ở giai đoạn ngắn hạn; thế nhưng nhìn về dài hạn, cách làm tự tách mình ra khỏi hệ thống phân công lao động toàn cầu như vậy chẳng khác gì uống thuốc độc để giải cơn khát, chắc chắn sẽ bào mòn sức sống đổi mới sáng tạo của nền kinh tế.", "Quả thật rào cản thuế quan bảo hộ giúp che chở doanh nghiệp sản xuất nội địa trước mắt, song về lâu dài việc tự cô lập khỏi chuỗi cung ứng toàn cầu không khác nào uống rượu độc giải khát và tất yếu làm suy giảm động lực sáng tạo kinh tế."],
    [
      ["诚然…然而…", "chéngrán... rán'ér...", "quả thực là... tuy nhiên..."],
      ["关税壁垒", "guānshuì bìlěi", "rào cản thuế quan (Tariff barrier)"],
      ["无异于", "wúyìyú", "chẳng khác nào"],
      ["饮鸩止渴", "yǐnzhèn-zhǐkě", "uống rượu độc giải khát (giải pháp ngắn hạn gây hại lâu dài)"],
    ],
    "诚然 + Nhượng bộ ngắn hạn；然而，从长远来看，[Định ngữ dài + 的做法] + 无异于 + Thành ngữ ẩn dụ，必将 + Hệ quả vĩ mô.",
    "Đọc hoặc viết sai chữ 削弱 (xuēruò - làm suy yếu) và thành ngữ 饮鸩止渴 (yǐnzhèn-zhǐkě).",
  ],
  [
    "HSK9",
    "basic",
    "Phản biện Nhận thức: 殊不知 & Kinh tế số",
    "Không ít doanh nghiệp truyền thống ngỡ rằng chuyển đổi số chỉ đơn giản là mua vài phần mềm quản trị ERP đắt tiền, mà đâu biết rằng nếu không tái cấu trúc quy trình vận hành và tư duy dữ liệu của đội ngũ nhân sự, thì hệ thống hiện đại đến mấy cũng chỉ là vật trang trí hình thức.",
    "不少传统企业以为数字化转型不过是购置几套昂贵的ERP管理软件，殊不知倘若不彻底重构业务流程与全员的数据思维，再先进的系统也沦为徒有其表的摆设。",
    "Bùshǎo chuántǒng qǐyè yǐwéi shùzìhuà zhuǎnxíng búguò shì gòuzhì jǐ tào ángguì de ERP guǎnlǐ ruǎnjiàn, shūbùzhī tǎngruò bú chèdǐ chónggòu yèwù liúchéng yǔ quányuán de shùjù sīwéi, zài xiānjìn de xìtǒng yě lúnwéi túyǒu-qíbiǎo de bǎishè.",
    ["许多传统企业以为数字化转型只是买几套昂贵的ERP软件，殊不知若不重构业务流程与数据思维，再先进的系统也只是摆设。"],
    ["Nhiều doanh nghiệp truyền thống cứ tưởng chuyển đổi số chẳng qua chỉ là sắm vài bộ phần mềm quản lý ERP đắt đỏ, nào ngờ đâu nếu không tái thiết triệt để quy trình nghiệp vụ cùng tư duy dữ liệu của toàn bộ nhân viên thì hệ thống dù tối tân tới đâu cũng rơi vào cảnh làm vật trưng bày hào nhoáng bên ngoài mà rỗng tuếch bên trong.", "Không ít công ty truyền thống cho rằng chuyển đổi số chỉ là mua phần mềm ERP đắt tiền, mà chẳng hề biết rằng nếu không đập đi xây lại quy trình vận hành và tư duy dữ liệu thì hệ thống tiên tiến mấy cũng chỉ là đồ trang trí hữu danh vô thực."],
    [
      ["数字化转型", "shùzìhuà zhuǎnxíng", "chuyển đổi số (Digital transformation)"],
      ["殊不知", "shūbùzhī", "mà đâu biết rằng / nào ngờ đâu"],
      ["重构", "chónggòu", "tái cấu trúc / kiến thiết lại"],
      ["徒有其表", "túyǒu-qíbiǎo", "chỉ có cái vỏ bề ngoài (hữu danh vô thực)"],
    ],
    "Chủ thể + 以为 + Nhận thức bề nổi，殊不知 + 倘若不 + Bản chất cốt lõi，再…也沦为…",
    "Dùng '不知道' thay vì từ phản biện học thuật đắt giá '殊不知' trong văn nghị luận HSK 9.",
  ],
  [
    "HSK9",
    "basic",
    "Công văn Hành chính & Hư động từ 予以 / 加以",
    "Đối với những đơn vị cung ứng vi phạm nghiêm trọng cam kết bảo mật thương mại hoặc gian lận chứng nhận xuất xứ, tập đoàn sẽ lập tức hủy bỏ tư cách nhà cung cấp và truy cứu trách nhiệm pháp lý theo quy định, tuyệt đối không dung túng.",
    "对于严重违反商业保密承诺或伪造原产地证明之供应商，集团将立即取消其合格供方资格并依法予以严厉追责，绝不姑息。",
    "Duìyú yánzhòng wéifǎn shāngyè bǎomì chéngnuò huò wěizào yuánchǎndì zhèngmíng zhī gōngyìngshāng, jítuán jiāng lìjí qǔxiāo qí hégé gōngfāng zīgé bìng yīfǎ yǔyǐ yánlì zhuīzé, juébù gūxī.",
    ["对严重违反保密承诺或伪造原产地证的供应商，集团将立即取消其供方资格并依法予以追责，绝不姑息。"],
    ["Đối với các nhà cung cấp vi phạm nghiêm trọng cam kết bảo mật thương mại hoặc làm giả giấy chứng nhận xuất xứ hàng hóa, Tập đoàn sẽ lập tức tước bỏ tư cách nhà cung ứng hợp chuẩn và tiến hành truy cứu trách nhiệm nghiêm khắc theo pháp luật, tuyệt đối không khoan nhượng.", "Với những nhà cung ứng xâm phạm nặng nề thỏa thuận bảo mật kinh doanh hay giả mạo C/O xuất xứ, tập đoàn sẽ hủy ngay tư cách nhà cung cấp và truy cứu trách nhiệm pháp lý nghiêm minh, quyết không dung túng."],
    [
      ["伪造", "wěizào", "làm giả / giả mạo"],
      ["合格供方", "hégé gōngfāng", "nhà cung cấp đạt chuẩn (Approved Vendor)"],
      ["予以", "yǔyǐ", "tiến hành / áp dụng (hình thức xử lý)"],
      ["绝不姑息", "juébù gūxī", "tuyệt đối không dung túng / khoan nhượng"],
    ],
    "对于 + [Định ngữ dài + 之 + Đối tượng]，Chủ thể + 将…并依法予以 + Động từ 2 âm tiết，绝不姑息.",
    "Thêm tân ngữ vào sau '予以追责' (Tân ngữ đã được đưa lên đầu câu sau 对于 nên sau 予以 + ĐT 2 âm tiết không được lặp lại tân ngữ).",
  ],
  [
    "HSK9",
    "basic",
    "Diễn văn Ngoại giao & Hợp tác Chiến lược",
    "Chỉ có kiên trì tinh thần thượng tôn pháp luật và cam kết hợp đồng, lấy sự chân thành làm cầu nối, lấy đôi bên cùng thắng làm mục tiêu, quan hệ hợp tác kinh tế thương mại giữa hai nước mới có thể vượt qua sóng gió của biến động địa chính trị để tiến bước vững vàng và vươn xa.",
    "唯有秉持法治与契约精神，以诚意为纽带，以互利共赢为旨归，两国经贸合作关系方能穿越地缘政治动荡之风浪，实现行稳致远。",
    "Wéiyǒu bǐngchí fǎzhì yǔ qìyuē jīngshén, yǐ chéngyì wéi niǔdài, yǐ hùlì-gòngyíng wéi zhǐguī, liǎng guó jīngmào hézuò guānxì fāng néng chuānyuè dìyuán zhèngzhì dòngdàng zhī fēnglàng, shíxiàn xíngwěn-zhìyuǎn.",
    ["唯有秉持契约精神，以诚信为纽带、以互利共赢为目标，双边经贸关系方能跨越地缘政治风浪，行稳致远。"],
    ["Chỉ khi giữ vững tinh thần pháp trị và tôn trọng khế ước, lấy thiện chí chân thành làm sợi dây gắn kết, lấy lợi ích song phương cùng thắng làm đích đến tối thượng, mối quan hệ hợp tác kinh tế thương mại giữa hai quốc gia mới có thể băng qua sóng gió của những biến động địa chính trị để tiến bước vững chãi và vươn tới tương lai lâu dài.", "Chỉ có kiên trì tinh thần thượng tôn pháp luật cùng cam kết hợp đồng, lấy chữ tín làm cầu nối và win-win làm tôn chỉ, hợp tác kinh tế thương mại song phương mới vượt qua được bão táp địa chính trị để phát triển bền vững lâu dài."],
    [
      ["秉持", "bǐngchí", "giữ vững / kiên trì theo đuổi"],
      ["契约精神", "qìyuē jīngshén", "tinh thần thượng tôn cam kết / khế ước"],
      ["以…为纽带", "yǐ... wéi niǔdài", "lấy... làm sợi dây gắn kết / cầu nối"],
      ["行稳致远", "xíngwěn-zhìyuǎn", "đi vững thì mới tiến được xa"],
    ],
    "唯有 + 秉持…，以 A 为 B，以 C 为 D，Chủ ngữ + 方能 + Vượt thử thách + 实现行稳致远.",
    "Viết nhầm '法治 (fǎzhì - pháp trị / thượng tôn pháp luật)' với '法制 (hệ thống chế độ pháp luật)'.",
  ],
  [
    "HSK9",
    "advanced",
    "Lý thuyết Dịch thuật & Văn hóa Học thuật",
    "Dịch thuật thương mại và pháp lý bậc cao tuyệt đối không phải là phép cộng trừ chữ nghĩa đơn thuần giữa hai cuốn từ điển, mà đòi hỏi người dịch phải am hiểu tường tận cả khung pháp lý ngoại thương lẫn văn hóa đàm phán tiềm ẩn đằng sau từng điều khoản.",
    "高阶商务与法律翻译绝非两本词典之间单纯的字词加减，而是要求译者既要深谙国际贸易法律框架，又要洞悉每一条款背后潜藏的谈判文化。",
    "Gāojiē shāngwù yǔ fǎlǜ fānyì jué fēi liǎng běn cídiǎn zhījiān dānchún de zìcí jiājiǎn, érshì yāoqiú yìzhě jì yào shēn'ān guójì màoyì fǎlǜ kuàngjià, yòu yào dòngxī měi yì tiáokuǎn bèihòu qiáncáng de tánpàn wénhuà.",
    ["高级商务与法律翻译绝不是字词的简单转换，而是要求译者既深谙外贸法律框架，又洞察条款背后的谈判文化。"],
    ["Công tác biên phiên dịch thương mại và pháp lý cấp cao hoàn toàn không phải là phép cộng trừ từ ngữ máy móc giữa hai cuốn từ điển, mà đòi hỏi dịch giả vừa phải thông hiểu sâu sắc khung pháp luật thương mại quốc tế, vừa phải thấu suốt văn hóa đàm phán ẩn chứa phía sau từng điều khoản.", "Dịch thuật pháp lý và kinh doanh trình độ cao tuyệt nhiên không phải sự ghép nối từ vựng đơn thuần, mà yêu cầu người dịch phải nắm vững luật ngoại thương đồng thời nhìn thấu văn hóa thương lượng ngầm sau mỗi điều khoản."],
    [
      ["绝非", "jué fēi", "tuyệt đối không phải là"],
      ["深谙", "shēn'ān", "am hiểu sâu sắc / thông thuộc"],
      ["法律框架", "fǎlǜ kuàngjià", "khung pháp lý"],
      ["洞悉", "dòngxī", "thấu suốt / nhìn thấu rõ ràng"],
    ],
    "Chủ ngữ + 绝非 + Bản chất nông，而是要求 + Chủ thể + 既要深谙 A，又要洞悉 B.",
    "Dùng từ sơ cấp '很知道' thay cho động từ HSK 8-9 '深谙 (shēn'ān - am hiểu sâu sắc)' và '洞悉 (dòngxī - thấu suốt)'.",
  ],
  [
    "HSK9",
    "advanced",
    "Kinh tế Vĩ mô & Phát triển Bền vững (零和博弈)",
    "Trong kỷ nguyên tái cấu trúc chuỗi cung ứng toàn cầu, tăng trưởng kinh tế và bảo vệ môi trường sinh thái không còn là trò chơi có tổng bằng không; doanh nghiệp nào làm chủ được công nghệ sản xuất xanh trước thì doanh nghiệp đó sẽ nắm quyền định giá trên thị trường quốc tế.",
    "在全球供应链重构的时代背景下，经济增长与生态保护已不再是零和博弈；谁能率先掌握绿色制造核心技术，谁就能在国际市场上掌握定价话语权。",
    "Zài quánqiú gōngyìngliàn chónggòu de shídài bèijǐng xià, jīngjì zēngzhǎng yǔ shēngtài bǎohù yǐ bú zài shì línghé bóyì; shéi néng shuàixiān zhǎngwò lǜsè zhìzào héxīn jìshù, shéi jiù néng zài guójì shìchǎng shàng zhǎngwò dìngjià huàyǔquán.",
    ["在全球供应链重塑背景下，经济增长与生态环保已非零和博弈；谁率先掌握绿色制造技术，谁就拥有国际市场定价话语权。"],
    ["Trong bối cảnh thời đại tái định hình chuỗi cung ứng toàn cầu, tăng trưởng kinh tế và bảo vệ sinh thái đã không còn là cuộc chơi có tổng bằng không; đơn vị nào đi đầu làm chủ được công nghệ cốt lõi về sản xuất xanh thì đơn vị đó sẽ nắm giữ quyền phát ngôn định giá trên thương trường quốc tế.", "Dưới bối cảnh tái cấu trúc chuỗi cung ứng thế giới, phát triển kinh tế và giữ gìn môi trường không còn là trò chơi thắng - thua triệt tiêu nhau; ai tiên phong nắm giữ công nghệ sản xuất xanh thì người đó nắm quyền định giá quốc tế."],
    [
      ["零和博弈", "línghé bóyì", "trò chơi có tổng bằng không (Zero-sum game)"],
      ["率先", "shuàixiān", "đi đầu / tiên phong"],
      ["绿色制造", "lǜsè zhìzào", "sản xuất xanh (Green manufacturing)"],
      ["话语权", "huàyǔquán", "quyền phát ngôn / vị thế quyết định"],
    ],
    "在…背景下，A 与 B 已不再是零和博弈；谁能率先 V1，谁就能 V2 (Câu連鎖 đại từ nghi vấn phiếm chỉ).",
    "Không dùng cấu trúc hô ứng đại từ nghi vấn '谁…，谁就…' để dịch câu 'Doanh nghiệp nào..., doanh nghiệp đó...'.",
  ],
  [
    "HSK9",
    "advanced",
    "Quản trị Rủi ro Tài chính & Tỷ giá Hối đoái",
    "Trước sự biến động khó lường của tỷ giá hối đoái quốc tế, các doanh nghiệp xuất nhập khẩu cần chủ động sử dụng công cụ phái sinh ngoại hối hoặc thỏa thuận thanh toán song phương bằng đồng bản tệ để phòng ngừa rủi ro từ khi chưa phát sinh.",
    "面对变幻莫测的国际汇率波动，进出口企业理应主动运用外汇衍生工具或约定双边本币结算，以做到防患于未然。",
    "Miànduì biànhuàn-mòcè de guójì huìlǜ bōdòng, jìnchūkǒu qǐyè lǐyīng zhǔdòng yùnyòng wàihuì yǎnshēng gōngjù huò yuēdìng shuāngbiān běnbì jiésuàn, yǐ zuòdào fánghuàn-yú-wèirán.",
    ["面对莫测的国际汇率波动，外贸企业应主动采用外汇衍生品或双边本币结算，从而防患于未然。"],
    ["Đối diện với những biến động khôn lường của tỷ giá hối đoái quốc tế, các doanh nghiệp xuất nhập khẩu cần chủ động vận dụng các công cụ phái sinh ngoại hối hoặc thỏa thuận thanh toán bằng đồng bản tệ song phương nhằm phòng ngừa rủi ro ngay từ khi chưa xảy ra.", "Trước đà dao động khó đoán định của tỷ giá quốc tế, khối doanh nghiệp ngoại thương nên chủ động dùng công cụ phòng vệ ngoại hối hoặc thanh toán trực tiếp bằng nội tệ hai nước để ngăn chặn tổn thất từ sớm."],
    [
      ["变幻莫测", "biànhuàn-mòcè", "biến đổi khôn lường, khó đoán định"],
      ["汇率波动", "huìlǜ bōdòng", "biến động tỷ giá hối đoái"],
      ["本币结算", "běnbì jiésuàn", "thanh toán bằng đồng bản tệ (Local currency settlement)"],
      ["防患于未然", "fánghuàn-yú-wèirán", "phòng ngừa tai họa/rủi ro từ khi chưa phát sinh"],
    ],
    "面对 + Bối cảnh rủi ro，Chủ thể + 理应 + Giải pháp chuyên môn，以做到 + 防患于未然.",
    "Viết sai chữ '防患于未然' thành '防患于未燃' hoặc không biết thuật ngữ tài chính '本币结算 (thanh toán bằng đồng bản tệ VND/CNY)'.",
  ],
  [
    "HSK9",
    "advanced",
    "Đạo đức Kinh doanh & Phát triển Trường tồn",
    "Chữ Tín nặng tựa ngàn vàng; trong thương trường quốc tế đầy rẫy cám dỗ lợi ích ngắn hạn, chỉ những doanh nghiệp biết kính畏 quy luật thị trường và giữ trọn lời hứa với khách hàng mới có thể xây dựng được cơ nghiệp trường tồn qua nhiều thế hệ.",
    "一诺千金重如山；在充满短期利益诱惑的国际商海中，唯有敬畏市场规律、信守对客户每一份承诺的企业，方能铸就基业长青。",
    "Yínuò-qiānjīn zhòng rú shān; zài chōngmǎn duǎnqī lìyì yòuhuò de guójì shānghǎi zhōng, wéiyǒu jìngwèi shìchǎng guīlǜ, xìnshǒu duì kèhù měi yí fèn chéngnuò de qǐyè, fāng néng zhùjiù jīyè-chángqīng.",
    ["一诺千金；在充满短期利益诱惑的国际商场上，只有敬畏市场规律、恪守客户承诺的企业，才能实现基业长青。"],
    ["Một lời hứa đáng giá ngàn vàng, nặng tựa thái sơn; giữa thương trường quốc tế đầy rẫy những cám dỗ lợi nhuận ngắn hạn, chỉ có những doanh nghiệp biết kính trọng quy luật thị trường và giữ trọn vẹn từng cam kết với khách hàng mới có thể đúc nên cơ nghiệp xanh tươi trường tồn mãi với thời gian.", "Một lời cam kết quý hơn vàng; trên thương trường quốc tế ngập tràn cám dỗ lợi ích trước mắt, chỉ doanh nghiệp nào tôn trọng quy luật thị trường và giữ chữ tín với khách hàng mới kiến tạo được sự nghiệp bền vững muôn đời."],
    [
      ["一诺千金", "yínuò-qiānjīn", "một lời hứa đáng giá ngàn vàng"],
      ["敬畏", "jìngwèi", "kính sợ / tôn trọng nghiêm cẩn"],
      ["信守承诺", "xìnshǒu chéngnuò", "giữ trọn lời hứa / cam kết"],
      ["基业长青", "jīyè-chángqīng", "cơ nghiệp trường tồn bền vững (Built to last)"],
    ],
    "Thành ngữ mở đầu；在 + Bối cảnh 中，唯有 + [Định ngữ dài + 的企业]，方能铸就 + 基业长青.",
    "Không biết thành ngữ kinh điển trong quản trị doanh nghiệp Trung Quốc '基业长青 (jīyè-chángqīng - Built to Last / cơ nghiệp trường tồn)'.",
  ],
];

// Build 160 TranslationExercises (80 seeds × 2 directions: vi-to-zh and zh-to-vi)
export const TRANSLATION_EXERCISES: TranslationExercise[] = BILINGUAL_SEEDS.flatMap(
  (seed, index) => {
    const [
      level,
      subDifficulty,
      topic,
      viText,
      zhText,
      pinyin,
      variantsViToZh,
      variantsZhToVi,
      keywords,
      grammarStructureVi,
      commonMistakeVi,
    ] = seed;

    const num = String(index + 1).padStart(3, "0");

    const mappedKeywords: TranslationKeyword[] = keywords.map(([word, py, meaningVi]) => ({
      word,
      pinyin: py,
      meaningVi,
    }));

    const viToZhExercise: TranslationExercise = {
      id: `tr-v2z-${num}`,
      level,
      subDifficulty,
      direction: "vi-to-zh",
      topic,
      sourceText: viText,
      referenceTarget: zhText,
      referencePinyin: pinyin,
      acceptedVariants: variantsViToZh,
      requiredKeywords: mappedKeywords,
      grammarStructureVi,
      commonMistakeVi,
    };

    const zhToViExercise: TranslationExercise = {
      id: `tr-z2v-${num}`,
      level,
      subDifficulty,
      direction: "zh-to-vi",
      topic,
      sourceText: zhText,
      sourcePinyin: pinyin,
      referenceTarget: viText,
      referencePinyin: pinyin,
      acceptedVariants: variantsZhToVi,
      requiredKeywords: mappedKeywords,
      grammarStructureVi,
      commonMistakeVi,
    };

    return [viToZhExercise, zhToViExercise];
  }
);

function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,!?;:，。！？；：、“”‘’"'\(\)（）【】\[\]\s—\-]/g, "")
    .trim();
}

function normalizeViWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[.,!?;:，。！？；：、“”‘’"'\(\)（）【】\[\]—\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function computeCharacterSimilarity(a: string, b: string): number {
  if (!a || !b) return 0;
  if (a === b) return 1;

  const bigramsA = new Map<string, number>();
  for (let i = 0; i < a.length - 1; i++) {
    const bg = a.slice(i, i + 2);
    bigramsA.set(bg, (bigramsA.get(bg) ?? 0) + 1);
  }

  let intersection = 0;
  for (let i = 0; i < b.length - 1; i++) {
    const bg = b.slice(i, i + 2);
    const count = bigramsA.get(bg) ?? 0;
    if (count > 0) {
      intersection++;
      bigramsA.set(bg, count - 1);
    }
  }

  if (a.length === 1 || b.length === 1) {
    return a.includes(b) || b.includes(a) ? 0.8 : 0;
  }

  return (2 * intersection) / (a.length - 1 + (b.length - 1));
}

function detectChineseGrammarIssues(
  userInput: string,
  exercise: TranslationExercise
): string[] {
  const issues: string[] = [];
  const trimmed = userInput.trim();

  if (!trimmed) {
    issues.push("Bạn chưa nhập câu dịch.");
    return issues;
  }

  if (/不有/.test(trimmed)) {
    issues.push(
      "Lỗi phủ định kinh điển: Tiếng Trung KHÔNG BAO GIỜ dùng '不有'. Phủ định của '有 (có)' bắt buộc là '没有'."
    );
  }

  if (/是(很|非常|太|真)?(好|忙|冷|热|贵|便宜|漂亮|累|高兴|大|小|快|慢|近|远)/.test(trimmed) && !exercise.referenceTarget.includes("是")) {
    issues.push(
      "Lỗi câu vị ngữ tính từ: Trước tính từ tiếng Trung dùng phó từ mức độ (như '很'), KHÔNG dùng động từ '是' kiểu '我是好 / 是很忙'."
    );
  }

  if (/二(个|本|件|杯|家|次|天|年|张|条|位|台|辆|批|票|小时)/.test(trimmed)) {
    issues.push(
      "Lỗi số từ + lượng từ: Khi số 2 đứng trước lượng từ (个, 本, 件, 次, 小时...), bắt buộc phải dùng '两 (liǎng)' chứ không dùng '二 (èr)'."
    );
  }

  if (/没[^，。！？]*了/.test(trimmed) && !/没有了|没了/.test(trimmed)) {
    issues.push(
      "Lỗi trợ từ động thái: Khi phủ định hành động trong quá khứ bằng '没(有)', cần bỏ trợ từ '了' ở sau động từ."
    );
  }

  if (/比[^，。！？]*(很|非常|太|真)/.test(trimmed)) {
    issues.push(
      "Lỗi câu so sánh chữ '比': Trong câu so sánh hơn với '比', không được dùng '很 / 非常 / 太' trước tính từ (muốn nói 'hơn nhiều' hãy đặt '得多 / 多了' sau tính từ)."
    );
  }

  if (/把[^，。！？]*(不|没)/.test(trimmed) && !/把[^，。！？]*没问题/.test(trimmed)) {
    issues.push(
      "Lỗi trật tự câu chữ '把': Phó từ phủ định ('没 / 不 / 别') bắt buộc phải đặt TRƯỚC chữ '把' (ví dụ: 还没把…做完)."
    );
  }

  if (/才[^，。！？]*了/.test(trimmed)) {
    issues.push(
      "Lỗi phó từ '才': Khi dùng '才' để nhấn mạnh hành động diễn ra muộn/khó khăn, cuối câu KHÔNG dùng trợ từ '了'."
    );
  }

  if ((/只要/.test(trimmed) && /才/.test(trimmed)) || (/只有/.test(trimmed) && /就/.test(trimmed))) {
    issues.push(
      "Lỗi cặp liên từ điều kiện: Hãy nhớ cặp chuẩn '只要…就…' (chỉ cần... thì...) và '只有…才…' (chỉ có... thì mới...), không ghép chéo."
    );
  }

  return issues;
}

export function evaluateTranslation(
  exercise: TranslationExercise,
  userInput: string
): TranslationEvaluationResult {
  const cleanedInput = userInput.trim();
  if (!cleanedInput) {
    return {
      score: 0,
      passed: false,
      matchedKeywords: [],
      missingKeywords: exercise.requiredKeywords,
      grammarErrors: ["Vui lòng nhập bản dịch của bạn trước khi bấm chấm điểm."],
      grammarFeedbackVi: exercise.grammarStructureVi,
      naturalSuggestion: exercise.referenceTarget,
      naturalPinyin: exercise.referencePinyin,
    };
  }

  const normInput = normalizeForComparison(cleanedInput);
  const allTargets = [exercise.referenceTarget, ...exercise.acceptedVariants];
  const isExactMatch = allTargets.some(
    (target) => normalizeForComparison(target) === normInput
  );

  const matchedKeywords: TranslationKeyword[] = [];
  const missingKeywords: TranslationKeyword[] = [];

  for (const kw of exercise.requiredKeywords) {
    if (exercise.direction === "vi-to-zh") {
      // Check if user's Chinese translation contains the required Chinese keyword (or main characters)
      const kwClean = kw.word.replace(/…|\.|（.*?）|\(.*?\)/g, "").trim();
      const parts = kw.word
        .split(/[…\/]/)
        .map((p) => p.replace(/（.*?）|\(.*?\)/g, "").trim())
        .filter(Boolean);

      const matched =
        (kwClean && cleanedInput.includes(kwClean)) ||
        (parts.length > 0 && parts.every((p) => cleanedInput.includes(p)));

      if (matched) {
        matchedKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    } else {
      // zh-to-vi: Check if user's Vietnamese translation contains any core meaning tokens
      const meaningOptions = kw.meaningVi
        .toLowerCase()
        .replace(/\(.*?\)/g, "")
        .split(/[\/,;]/)
        .map((s) => s.trim())
        .filter(Boolean);

      const inputLower = cleanedInput.toLowerCase();
      const matched = meaningOptions.some((opt) => {
        if (inputLower.includes(opt)) return true;
        const optWords = normalizeViWords(opt).filter((w) => w.length > 2);
        return optWords.length > 0 && optWords.some((w) => inputLower.includes(w));
      });

      if (matched) {
        matchedKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    }
  }

  const grammarErrors =
    exercise.direction === "vi-to-zh"
      ? detectChineseGrammarIssues(cleanedInput, exercise)
      : [];

  // Calculate best similarity across referenceTarget & acceptedVariants
  const bestSimilarity = Math.max(
    ...allTargets.map((t) =>
      computeCharacterSimilarity(normInput, normalizeForComparison(t))
    )
  );

  const keywordRatio =
    exercise.requiredKeywords.length > 0
      ? matchedKeywords.length / exercise.requiredKeywords.length
      : 1;

  let rawScore = Math.round(keywordRatio * 55 + bestSimilarity * 45);

  if (isExactMatch) {
    rawScore = 100;
  } else {
    if (grammarErrors.length > 0) {
      rawScore = Math.max(15, rawScore - grammarErrors.length * 12);
    }
    if (keywordRatio === 1 && bestSimilarity >= 0.72 && grammarErrors.length === 0) {
      rawScore = Math.max(rawScore, 92);
    }
  }

  const score = Math.min(100, Math.max(0, rawScore));
  const passed = score >= 70;

  let grammarFeedbackVi = `Cấu trúc chuẩn: ${exercise.grammarStructureVi}`;
  if (grammarErrors.length > 0) {
    grammarFeedbackVi = `${grammarErrors.join(" ")} | Lưu ý: ${exercise.commonMistakeVi}`;
  } else if (score >= 90) {
    grammarFeedbackVi = `Xuất sắc! Bạn đã nắm rất vững cấu trúc ngữ pháp: ${exercise.grammarStructureVi}`;
  } else if (missingKeywords.length > 0) {
    grammarFeedbackVi = `Bản dịch đã có ý đúng nhưng cần bổ sung các từ khóa trọng tâm và lưu ý: ${exercise.commonMistakeVi}`;
  }

  return {
    score,
    passed,
    matchedKeywords,
    missingKeywords,
    grammarErrors,
    grammarFeedbackVi,
    naturalSuggestion: exercise.referenceTarget,
    naturalPinyin: exercise.referencePinyin,
  };
}
