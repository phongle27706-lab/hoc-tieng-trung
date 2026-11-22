import type { SentenceOrderExercise } from "./writing";

export const SENTENCE_ORDER_EXERCISES_EXTRA: SentenceOrderExercise[] = [
  // ==================== HSK0 BASIC (6) ====================
  {
    id: "so-ex-hsk0-basic-1",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Hỏi thăm sức khỏe",
    promptVi: "Bạn có khỏe không? Tôi rất khỏe.",
    scrambledTokens: ["很好。", "吗？", "我", "你好"],
    correctAnswer: "你好吗？我很好。",
    pinyin: "Nǐ hǎo ma? Wǒ hěn hǎo.",
    explanationVi: "Câu hỏi với 吗 đặt ở cuối câu, trả lời dùng 很 + tính từ (很好)."
  },
  {
    id: "so-ex-hsk0-basic-2",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Giới thiệu nghề nghiệp",
    promptVi: "Tôi là học sinh, cô ấy là giáo viên.",
    scrambledTokens: ["是老师。", "学生，", "她", "我是"],
    correctAnswer: "我是学生，她是老师。",
    pinyin: "Wǒ shì xuésheng, tā shì lǎoshī.",
    explanationVi: "Cấu trúc Chủ ngữ + 是 + Danh từ nghề nghiệp cho hai vế song song."
  },
  {
    id: "so-ex-hsk0-basic-3",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Nói tạm biệt",
    promptVi: "Tạm biệt! Ngày mai gặp nhé.",
    scrambledTokens: ["见！", "明天", "再见！"],
    correctAnswer: "再见！明天见！",
    pinyin: "Zàijiàn! Míngtiān jiàn!",
    explanationVi: "Thời gian (明天) đứng trước động từ 见 (gặp)."
  },
  {
    id: "so-ex-hsk0-basic-4",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Xin lỗi và đáp lại",
    promptVi: "Xin lỗi! Không có gì đâu.",
    scrambledTokens: ["没关系。", "对不起！"],
    correctAnswer: "对不起！没关系。",
    pinyin: "Duìbuqǐ! Méi guānxi.",
    explanationVi: "Lời xin lỗi (对不起) đi trước câu đáp lịch sự (没关系)."
  },
  {
    id: "so-ex-hsk0-basic-5",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Đếm số cơ bản",
    promptVi: "Tôi có ba người bạn.",
    scrambledTokens: ["朋友。", "三个", "有", "我"],
    correctAnswer: "我有三个朋友。",
    pinyin: "Wǒ yǒu sān gè péngyou.",
    explanationVi: "Số từ (三) + lượng từ (个) + danh từ (朋友) đứng sau động từ 有."
  },
  {
    id: "so-ex-hsk0-basic-6",
    level: "HSK0",
    subDifficulty: "basic",
    grammarTopic: "Chỉ thị đại từ 这",
    promptVi: "Đây là sách tiếng Trung của tôi.",
    scrambledTokens: ["中文书。", "我的", "是", "这"],
    correctAnswer: "这是我的中文书。",
    pinyin: "Zhè shì wǒ de Zhōngwén shū.",
    explanationVi: "Cấu trúc 这是 + sở hữu (我的) + danh từ (中文书)."
  },

  // ==================== HSK0 ADVANCED (6) ====================
  {
    id: "so-ex-hsk0-advanced-1",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Hỏi tuổi trẻ em",
    promptVi: "Năm nay em trai bạn mấy tuổi rồi?",
    scrambledTokens: ["几岁了？", "今年", "你弟弟"],
    correctAnswer: "你弟弟今年几岁了？",
    pinyin: "Nǐ dìdi jīnnián jǐ suì le?",
    explanationVi: "Chủ ngữ (你弟弟) + thời gian (今年) + 几岁了 để hỏi tuổi trẻ nhỏ."
  },
  {
    id: "so-ex-hsk0-advanced-2",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Động từ 喜欢",
    promptVi: "Tôi rất thích uống trà Trung Quốc.",
    scrambledTokens: ["中国茶。", "喝", "很喜欢", "我"],
    correctAnswer: "我很喜欢喝中国茶。",
    pinyin: "Wǒ hěn xǐhuan hē Zhōngguó chá.",
    explanationVi: "Chủ ngữ + 很喜欢 + động từ (喝) + tân ngữ (中国茶)."
  },
  {
    id: "so-ex-hsk0-advanced-3",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Phủ định với 不",
    promptVi: "Hôm nay tôi không đi trường học.",
    scrambledTokens: ["学校。", "不去", "我", "今天"],
    correctAnswer: "今天我不去学校。",
    pinyin: "Jīntiān wǒ bú qù xuéxiào.",
    explanationVi: "Trạng ngữ thời gian (今天) đặt đầu câu, 不 đứng trước động từ 去."
  },
  {
    id: "so-ex-hsk0-advanced-4",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Hỏi thứ ngày",
    promptVi: "Hôm nay là thứ mấy?",
    scrambledTokens: ["星期几？", "是", "今天"],
    correctAnswer: "今天是星期几？",
    pinyin: "Jīntiān shì xīngqī jǐ?",
    explanationVi: "Dùng 星期几 để hỏi thứ trong tuần."
  },
  {
    id: "so-ex-hsk0-advanced-5",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Sở hữu với 的",
    promptVi: "Kia là xe đạp của anh trai tôi.",
    scrambledTokens: ["自行车。", "我哥哥的", "是", "那"],
    correctAnswer: "那是我哥哥的自行车。",
    pinyin: "Nà shì wǒ gēge de zìxíngchē.",
    explanationVi: "Định ngữ sở hữu (我哥哥的) luôn đứng trước danh từ trung tâm (自行车)."
  },
  {
    id: "so-ex-hsk0-advanced-6",
    level: "HSK0",
    subDifficulty: "advanced",
    grammarTopic: "Hỏi giá tiền",
    promptVi: "Quả táo này bao nhiêu tiền?",
    scrambledTokens: ["多少钱？", "苹果", "这个"],
    correctAnswer: "这个苹果多少钱？",
    pinyin: "Zhège píngguǒ duōshao qián?",
    explanationVi: "Chủ ngữ (这个苹果) + 多少钱 để hỏi giá cả."
  },

  // ==================== HSK1 BASIC (6) ====================
  {
    id: "so-ex-hsk1-basic-1",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Động từ năng nguyện 会",
    promptVi: "Tôi biết nói một chút tiếng Trung.",
    scrambledTokens: ["汉语。", "一点儿", "会说", "我"],
    correctAnswer: "我会说一点儿汉语。",
    pinyin: "Wǒ huì shuō yìdiǎnr Hànyǔ.",
    explanationVi: "会 + động từ (说) diễn tả kỹ năng học được; 一点儿 đứng trước danh từ."
  },
  {
    id: "so-ex-hsk1-basic-2",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Giới từ 在 chỉ vị trí",
    promptVi: "Con mèo nhỏ đang ở dưới cái ghế.",
    scrambledTokens: ["下面。", "椅子", "在", "小猫"],
    correctAnswer: "小猫在椅子下面。",
    pinyin: "Xiǎomāo zài yǐzi xiàmiàn.",
    explanationVi: "Chủ ngữ + 在 + danh từ + phương vị từ (下面)."
  },
  {
    id: "so-ex-hsk1-basic-3",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Động từ 想 (muốn)",
    promptVi: "Buổi chiều tôi muốn đi cửa hàng mua quần áo.",
    scrambledTokens: ["买衣服。", "去商店", "我想", "下午"],
    correctAnswer: "下午我想去商店买衣服。",
    pinyin: "Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi yīfu.",
    explanationVi: "Câu liên động: Thời gian + Chủ ngữ + 想 + 去 + địa điểm + động từ."
  },
  {
    id: "so-ex-hsk1-basic-4",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Trạng thái thời tiết",
    promptVi: "Thời tiết hôm nay không nóng cũng không lạnh.",
    scrambledTokens: ["也不冷。", "不热", "天气", "今天的"],
    correctAnswer: "今天的天气不热也不冷。",
    pinyin: "Jīntiān de tiānqì bú rè yě bù lěng.",
    explanationVi: "Cấu trúc 不 A 也不 B diễn tả không A cũng không B."
  },
  {
    id: "so-ex-hsk1-basic-5",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Hỏi giờ giấc",
    promptVi: "Bây giờ là tám giờ mười lăm phút sáng.",
    scrambledTokens: ["十五分。", "八点", "上午", "现在是"],
    correctAnswer: "现在是上午八点十五分。",
    pinyin: "Xiànzài shì shàngwǔ bā diǎn shíwǔ fēn.",
    explanationVi: "Thứ tự thời gian trong tiếng Trung từ lớn đến nhỏ: 上午 → 八点 → 十五分."
  },
  {
    id: "so-ex-hsk1-basic-6",
    level: "HSK1",
    subDifficulty: "basic",
    grammarTopic: "Phó từ 都 (đều)",
    promptVi: "Chúng tôi đều là bạn học đại học.",
    scrambledTokens: ["同学。", "大学", "都是", "我们"],
    correctAnswer: "我们都是大学同学。",
    pinyin: "Wǒmen dōu shì dàxué tóngxué.",
    explanationVi: "Phó từ 都 đứng sau chủ ngữ số nhiều và trước động từ 是."
  },

  // ==================== HSK1 ADVANCED (6) ====================
  {
    id: "so-ex-hsk1-advanced-1",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Trạng ngữ địa điểm với 在",
    promptVi: "Bố tôi làm việc ở bệnh viện.",
    scrambledTokens: ["工作。", "医院", "在", "我爸爸"],
    correctAnswer: "我爸爸在医院工作。",
    pinyin: "Wǒ bàba zài yīyuàn gōngzuò.",
    explanationVi: "Cụm 在 + địa điểm luôn đứng trước động từ chính (工作)."
  },
  {
    id: "so-ex-hsk1-advanced-2",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 是...的 nhấn mạnh",
    promptVi: "Bạn đến Bắc Kinh bằng phương tiện gì?",
    scrambledTokens: ["来北京的？", "怎么", "你是"],
    correctAnswer: "你是怎么来北京的？",
    pinyin: "Nǐ shì zěnme lái Běijīng de?",
    explanationVi: "Dùng 是...的 để nhấn mạnh phương thức của hành động đã xảy ra."
  },
  {
    id: "so-ex-hsk1-advanced-3",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Câu hỏi với 什么时候",
    promptVi: "Khi nào bạn về nhà ăn cơm tối?",
    scrambledTokens: ["吃晚饭？", "回家", "什么时候", "你"],
    correctAnswer: "你什么时候回家吃晚饭？",
    pinyin: "Nǐ shénme shíhou huíjiā chī wǎnfàn?",
    explanationVi: "Từ để hỏi thời gian 什么时候 đứng sau chủ ngữ và trước cụm động từ."
  },
  {
    id: "so-ex-hsk1-advanced-4",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Phủ định quá khứ 没",
    promptVi: "Hôm qua trời không mưa.",
    scrambledTokens: ["下雨。", "没", "昨天"],
    correctAnswer: "昨天没下雨。",
    pinyin: "Zuótiān méi xiàyǔ.",
    explanationVi: "Phủ định hành động đã không xảy ra trong quá khứ dùng 没 + động từ."
  },
  {
    id: "so-ex-hsk1-advanced-5",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Động từ 给 (cho)",
    promptVi: "Xin hãy gọi điện thoại cho tôi.",
    scrambledTokens: ["打电话。", "给我", "请"],
    correctAnswer: "请给我打电话。",
    pinyin: "Qǐng gěi wǒ dǎ diànhuà.",
    explanationVi: "Cấu trúc 请 + 给 + đối tượng + 打电话."
  },
  {
    id: "so-ex-hsk1-advanced-6",
    level: "HSK1",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 太...了",
    promptVi: "Bộ phim này hay quá đi mất!",
    scrambledTokens: ["好看了！", "太", "电影", "这个"],
    correctAnswer: "这个电影太好看了！",
    pinyin: "Zhège diànyǐng tài hǎokàn le!",
    explanationVi: "太 + tính từ + 了 dùng để cảm thán mức độ cao."
  },

  // ==================== HSK2 BASIC (6) ====================
  {
    id: "so-ex-hsk2-basic-1",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Câu so sánh với 比",
    promptVi: "Hôm nay lạnh hơn hôm qua một chút.",
    scrambledTokens: ["冷一点儿。", "昨天", "比", "今天"],
    correctAnswer: "今天比昨天冷一点儿。",
    pinyin: "Jīntiān bǐ zuótiān lěng yìdiǎnr.",
    explanationVi: "Cấu trúc so sánh hơn: A + 比 + B + tính từ + 一点儿."
  },
  {
    id: "so-ex-hsk2-basic-2",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Trợ từ động thái 过",
    promptVi: "Tôi đã từng đi Thượng Hải hai lần.",
    scrambledTokens: ["两次上海。", "去过", "我"],
    correctAnswer: "我去过两次上海。",
    pinyin: "Wǒ qùguo liǎng cì Shànghǎi.",
    explanationVi: "Động từ + 过 diễn tả trải nghiệm; bổ ngữ động lượng (两次) đứng trước tân ngữ địa danh."
  },
  {
    id: "so-ex-hsk2-basic-3",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Phó từ 正在",
    promptVi: "Em gái tôi đang đọc sách trong phòng.",
    scrambledTokens: ["看书呢。", "房间里", "正在", "我妹妹"],
    correctAnswer: "我妹妹正在房间里看书呢。",
    pinyin: "Wǒ mèimei zhèngzài fángjiān lǐ kànshū ne.",
    explanationVi: "正在...呢 diễn tả hành động đang diễn ra tại thời điểm nói."
  },
  {
    id: "so-ex-hsk2-basic-4",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Liên từ 因为...所以...",
    promptVi: "Vì bị ốm nên hôm nay anh ấy không đi làm.",
    scrambledTokens: ["没去上班。", "所以今天", "生病了，", "因为他"],
    correctAnswer: "因为他生病了，所以今天没去上班。",
    pinyin: "Yīnwèi tā shēngbìng le, suǒyǐ jīntiān méi qù shàngbān.",
    explanationVi: "Cặp liên từ nguyên nhân - kết quả: 因为..., 所以...."
  },
  {
    id: "so-ex-hsk2-basic-5",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 要...了",
    promptVi: "Tàu hỏa sắp chạy rồi, mau lên thôi!",
    scrambledTokens: ["快点儿吧！", "要开了，", "火车"],
    correctAnswer: "火车要开了，快点儿吧！",
    pinyin: "Huǒchē yào kāi le, kuàidiǎnr ba!",
    explanationVi: "要 + động từ + 了 diễn tả sự việc sắp sửa xảy ra."
  },
  {
    id: "so-ex-hsk2-basic-6",
    level: "HSK2",
    subDifficulty: "basic",
    grammarTopic: "Giới từ 离 chỉ khoảng cách",
    promptVi: "Nhà tôi cách công ty không xa lắm.",
    scrambledTokens: ["不太远。", "公司", "离", "我家"],
    correctAnswer: "我家离公司不太远。",
    pinyin: "Wǒ jiā lí gōngsī bú tài yuǎn.",
    explanationVi: "Cấu trúc A + 离 + B + khoảng cách/tính từ."
  },

  // ==================== HSK2 ADVANCED (6) ====================
  {
    id: "so-ex-hsk2-advanced-1",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Bổ ngữ trạng thái 得",
    promptVi: "Cô ấy hát hay cực kỳ.",
    scrambledTokens: ["非常好听。", "唱得", "歌", "她"],
    correctAnswer: "她歌唱得非常好听。",
    pinyin: "Tā gē chàng de fēicháng hǎotīng.",
    explanationVi: "Động từ ly hợp 唱歌 khi có bổ ngữ trạng thái 得: đưa tân ngữ 歌 lên trước hoặc lặp động từ."
  },
  {
    id: "so-ex-hsk2-advanced-2",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Giới từ 从...到...",
    promptVi: "Từ thứ Hai đến thứ Sáu tôi đều rất bận.",
    scrambledTokens: ["都很忙。", "到星期五", "我", "从星期一"],
    correctAnswer: "从星期一到星期五我都很忙。",
    pinyin: "Cóng xīngqīyī dào xīngqīwǔ wǒ dōu hěn máng.",
    explanationVi: "从 A 到 B biểu thị phạm vi thời gian từ A đến B."
  },
  {
    id: "so-ex-hsk2-advanced-3",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Phó từ 已经...了",
    promptVi: "Tôi đã học tiếng Trung được hai năm rồi.",
    scrambledTokens: ["两年汉语了。", "学了", "已经", "我"],
    correctAnswer: "我已经学了两年汉语了。",
    pinyin: "Wǒ yǐjīng xuéle liǎng nián Hànyǔ le.",
    explanationVi: "已经 + động từ + 了 + thời lượng + tân ngữ + 了 diễn tả hành động kéo dài đến hiện tại."
  },
  {
    id: "so-ex-hsk2-advanced-4",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Câu cầu khiến 别",
    promptVi: "Đừng quên mang theo hộ chiếu nhé!",
    scrambledTokens: ["带护照！", "忘记", "别"],
    correctAnswer: "别忘记带护照！",
    pinyin: "Bié wàngjì dài hùzhào!",
    explanationVi: "别 + động từ dùng để khuyên ngăn, nhắc nhở đừng làm gì."
  },
  {
    id: "so-ex-hsk2-advanced-5",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 虽然...但是...",
    promptVi: "Tuy bài thi này hơi khó nhưng tôi làm xong hết rồi.",
    scrambledTokens: ["但我都做完了。", "有点儿难，", "这次考试", "虽然"],
    correctAnswer: "虽然这次考试有点儿难，但我都做完了。",
    pinyin: "Suīrán zhè cì kǎoshì yǒudiǎnr nán, dàn wǒ dōu zuòwán le.",
    explanationVi: "Cặp liên từ chuyển折: 虽然..., 但(是).... (tuy... nhưng...)."
  },
  {
    id: "so-ex-hsk2-advanced-6",
    level: "HSK2",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 对...感兴趣",
    promptVi: "Anh ấy rất có hứng thú với văn hóa Trung Quốc.",
    scrambledTokens: ["很感兴趣。", "中国文化", "对", "他"],
    correctAnswer: "他对中国文化很感兴趣。",
    pinyin: "Tā duì Zhōngguó wénhuà hěn gǎn xìngqù.",
    explanationVi: "Chủ ngữ + 对 + đối tượng + 很感兴趣."
  },

  // ==================== HSK3 BASIC (6) ====================
  {
    id: "so-ex-hsk3-basic-1",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Câu chữ 把 cơ bản",
    promptVi: "Bạn hãy mở cửa sổ ra một chút nhé.",
    scrambledTokens: ["打开吧。", "窗户", "把", "你"],
    correctAnswer: "你把窗户打开吧。",
    pinyin: "Nǐ bǎ chuānghu dǎkāi ba.",
    explanationVi: "Câu chữ 把: Chủ ngữ + 把 + tân ngữ + động từ + thành phần khác (开)."
  },
  {
    id: "so-ex-hsk3-basic-2",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Câu chữ 被 (bị động)",
    promptVi: "Chiếc cốc của tôi bị em trai làm vỡ mất rồi.",
    scrambledTokens: ["打碎了。", "弟弟", "被", "我的杯子"],
    correctAnswer: "我的杯子被弟弟打碎了。",
    pinyin: "Wǒ de bēizi bèi dìdi dǎsuì le.",
    explanationVi: "Câu bị động: Chủ ngữ chịu tác động + 被 + tác nhân + động từ + bổ ngữ."
  },
  {
    id: "so-ex-hsk3-basic-3",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 一边...一边...",
    promptVi: "Anh ấy thích vừa nghe nhạc vừa chạy bộ.",
    scrambledTokens: ["一边跑步。", "听音乐", "一边", "他喜欢"],
    correctAnswer: "他喜欢一边听音乐一边跑步。",
    pinyin: "Tā xǐhuan yìbiān tīng yīnyuè yìbiān pǎobù.",
    explanationVi: "一边 + V1 + 一边 + V2 diễn tả hai hành động xảy ra song song."
  },
  {
    id: "so-ex-hsk3-basic-4",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 如果...就...",
    promptVi: "Nếu ngày mai trời nắng thì chúng ta đi công viên.",
    scrambledTokens: ["去公园。", "我们就", "是晴天，", "如果明天"],
    correctAnswer: "如果明天是晴天，我们就去公园。",
    pinyin: "Rúguǒ míngtiān shì qíngtiān, wǒmen jiù qù gōngyuán.",
    explanationVi: "Câu điều kiện giả thiết: 如果..., 主语 + 就...."
  },
  {
    id: "so-ex-hsk3-basic-5",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Bổ ngữ khả năng 得/不",
    promptVi: "Chữ trên bảng bạn có nhìn rõ không?",
    scrambledTokens: ["看得清楚吗？", "字你", "黑板上的"],
    correctAnswer: "黑板上的字你看得清楚吗？",
    pinyin: "Hēibǎn shàng de zì nǐ kàn de qīngchu ma?",
    explanationVi: "Động từ + 得 + bổ ngữ kết quả (清楚) tạo thành bổ ngữ khả năng."
  },
  {
    id: "so-ex-hsk3-basic-6",
    level: "HSK3",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 越...越...",
    promptVi: "Trời càng lúc càng tối, chúng ta mau về nhà thôi.",
    scrambledTokens: ["快回家吧。", "我们", "越黑，", "天越来"],
    correctAnswer: "天越来越黑，我们快回家吧。",
    pinyin: "Tiān yuèláiyuè hēi, wǒmen kuài huíjiā ba.",
    explanationVi: "越来越 + tính từ diễn tả mức độ tăng dần theo thời gian."
  },

  // ==================== HSK3 ADVANCED (6) ====================
  {
    id: "so-ex-hsk3-advanced-1",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 除了...以外，还...",
    promptVi: "Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Nhật.",
    scrambledTokens: ["还会说日语。", "以外，她", "英语", "除了"],
    correctAnswer: "除了英语以外，她还会说日语。",
    pinyin: "Chúle Yīngyǔ yǐwài, tā hái huì shuō Rìyǔ.",
    explanationVi: "除了...以外，还... biểu thị sự bổ sung (ngoài A ra còn B)."
  },
  {
    id: "so-ex-hsk3-advanced-2",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 一...就...",
    promptVi: "Hễ về đến nhà là anh ấy mở máy tính ngay.",
    scrambledTokens: ["打开电脑。", "就", "回到家", "他一"],
    correctAnswer: "他一回到家就打开电脑。",
    pinyin: "Tā yì huídào jiā jiù dǎkāi diànnǎo.",
    explanationVi: "一 + V1 + 就 + V2 diễn tả hành động thứ hai xảy ra ngay lập tức sau hành động thứ nhất."
  },
  {
    id: "so-ex-hsk3-advanced-3",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "Câu chữ 把 với kết quả 在/到",
    promptVi: "Hãy đặt cuốn từ điển này lên trên bàn làm việc.",
    scrambledTokens: ["书桌上。", "放到", "这本词典", "请把"],
    correctAnswer: "请把这本词典放到书桌上。",
    pinyin: "Qǐng bǎ zhè běn cídiǎn fàngdào shūzhuō shàng.",
    explanationVi: "把 + tân ngữ + động từ + 到 + vị trí đích."
  },
  {
    id: "so-ex-hsk3-advanced-4",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "So sánh với 跟...一样",
    promptVi: "Sở thích của tôi giống hệt sở thích của bạn.",
    scrambledTokens: ["一模一样。", "你的", "跟", "我的爱好"],
    correctAnswer: "我的爱好跟你的一模一样。",
    pinyin: "Wǒ de àihào gēn nǐ de yìmúyíyàng.",
    explanationVi: "A + 跟 + B + 一模一样 diễn tả A giống hệt B."
  },
  {
    id: "so-ex-hsk3-advanced-5",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "Bổ ngữ xu hướng kép",
    promptVi: "Cô ấy lấy một bức ảnh từ trong túi xách ra.",
    scrambledTokens: ["一张照片。", "拿出来", "从包里", "她"],
    correctAnswer: "她从包里拿出来一张照片。",
    pinyin: "Tā cóng bāo lǐ náchūlái yì zhāng zhàopiàn.",
    explanationVi: "从 + nơi chốn + động từ + 出来 + tân ngữ chưa xác định."
  },
  {
    id: "so-ex-hsk3-advanced-6",
    level: "HSK3",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 只有...才...",
    promptVi: "Chỉ có kiên trì luyện tập mới có thể tiến bộ.",
    scrambledTokens: ["才能进步。", "坚持练习，", "只有"],
    correctAnswer: "只有坚持练习，才能进步。",
    pinyin: "Zhǐyǒu jiānchí liànxí, cái néng jìnbù.",
    explanationVi: "只有 + điều kiện duy nhất，才 + kết quả."
  },

  // ==================== HSK4 BASIC (6) ====================
  {
    id: "so-ex-hsk4-basic-1",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 不仅...而且...",
    promptVi: "Nhà hàng này không chỉ đồ ăn ngon mà phục vụ cũng rất tốt.",
    scrambledTokens: ["而且服务很好。", "菜好吃，", "不仅", "这家餐厅"],
    correctAnswer: "这家餐厅不仅菜好吃，而且服务很好。",
    pinyin: "Zhè jiā cāntīng bùjǐn cài hǎochī, érqiě fúwù hěn hǎo.",
    explanationVi: "不仅...而且... nối hai vế tăng tiến."
  },
  {
    id: "so-ex-hsk4-basic-2",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 只要...就...",
    promptVi: "Chỉ cần bạn nỗ lực thì nhất định sẽ thành công.",
    scrambledTokens: ["一定会成功。", "就", "努力，", "只要你"],
    correctAnswer: "只要你努力，就一定会成功。",
    pinyin: "Zhǐyào nǐ nǔlì, jiù yídìng huì chénggōng.",
    explanationVi: "只要 + điều kiện đủ，就 + kết quả tất yếu."
  },
  {
    id: "so-ex-hsk4-basic-3",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 既然...就...",
    promptVi: "Đã quyết định đi du học thì phải chuẩn bị cho tốt.",
    scrambledTokens: ["好好准备。", "就要", "决定留学了，", "既然"],
    correctAnswer: "既然决定留学了，就要好好准备。",
    pinyin: "Jìrán juédìng liúxué le, jiù yào hǎohǎo zhǔnbèi.",
    explanationVi: "既然 + sự thật đã có，就 + suy luận hoặc đề xuất."
  },
  {
    id: "so-ex-hsk4-basic-4",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Giới từ 按照",
    promptVi: "Xin hãy điền vào bảng này theo đúng yêu cầu.",
    scrambledTokens: ["这张表格。", "填写", "按照要求", "请"],
    correctAnswer: "请按照要求填写这张表格。",
    pinyin: "Qǐng ànzhào yāoqiú tiánxiě zhè zhāng biǎogé.",
    explanationVi: "按照 + căn cứ/yêu cầu + động từ."
  },
  {
    id: "so-ex-hsk4-basic-5",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 无论...都...",
    promptVi: "Bất kể gặp khó khăn gì, chúng ta đều không bỏ cuộc.",
    scrambledTokens: ["都不会放弃。", "我们", "什么困难，", "无论遇到"],
    correctAnswer: "无论遇到什么困难，我们都不会放弃。",
    pinyin: "Wúlùn yùdào shénme kùnnan, wǒmen dōu bú huì fàngqì.",
    explanationVi: "无论 + đại từ nghi vấn，主语 + 都 + kết quả không đổi."
  },
  {
    id: "so-ex-hsk4-basic-6",
    level: "HSK4",
    subDifficulty: "basic",
    grammarTopic: "Phó từ 竟然 (không ngờ)",
    promptVi: "Không ngờ anh ấy lại quên mất sinh nhật của mình.",
    scrambledTokens: ["忘记了自己的生日。", "竟然", "他"],
    correctAnswer: "他竟然忘记了自己的生日。",
    pinyin: "Tā jìngrán wàngjì le zìjǐ de shēngrì.",
    explanationVi: "竟然 đứng trước động từ để biểu thị sự ngạc nhiên ngoài dự đoán."
  },

  // ==================== HSK4 ADVANCED (6) ====================
  {
    id: "so-ex-hsk4-advanced-1",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 即使...也...",
    promptVi: "Cho dù ngày mai trời mưa, trận đấu vẫn sẽ diễn ra đúng giờ.",
    scrambledTokens: ["也会按时举行。", "比赛", "下雨，", "即使明天"],
    correctAnswer: "即使明天下雨，比赛也会按时举行。",
    pinyin: "Jíshǐ míngtiān xiàyǔ, bǐsài yě huì ànshí jǔxíng.",
    explanationVi: "即使 + giả thiết nhượng bộ，也 + kết quả không thay đổi."
  },
  {
    id: "so-ex-hsk4-advanced-2",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Giới từ 由于",
    promptVi: "Do tắc đường nên chuyến bay bị trễ hai tiếng.",
    scrambledTokens: ["晚点了两个小时。", "航班", "交通堵塞，", "由于"],
    correctAnswer: "由于交通堵塞，航班晚点了两个小时。",
    pinyin: "Yóuyú jiāotōng dǔsè, hángbān wǎndiǎn le liǎng gè xiǎoshí.",
    explanationVi: "由于 + nguyên nhân (văn phong trang trọng hơn 因为)."
  },
  {
    id: "so-ex-hsk4-advanced-3",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 随着...",
    promptVi: "Cùng với sự phát triển của công nghệ, cuộc sống ngày càng tiện lợi.",
    scrambledTokens: ["越来越方便。", "生活", "科技的发展，", "随着"],
    correctAnswer: "随着科技的发展，生活越来越方便。",
    pinyin: "Suízhe kējì de fāzhǎn, shēnghuó yuèláiyuè fāngbiàn.",
    explanationVi: "随着 + danh từ/cụm danh từ chỉ biến đổi，chủ ngữ + kết quả biến đổi tương ứng."
  },
  {
    id: "so-ex-hsk4-advanced-4",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 连...都...",
    promptVi: "Anh ấy bận đến mức ngay cả cơm trưa cũng không kịp ăn.",
    scrambledTokens: ["来不及吃。", "连午饭都", "忙得", "他"],
    correctAnswer: "他忙得连午饭都来不及吃。",
    pinyin: "Tā máng de lián wǔfàn dōu láibují chī.",
    explanationVi: "连 + đối tượng nhấn mạnh + 都/也 biểu thị mức độ cực đoan."
  },
  {
    id: "so-ex-hsk4-advanced-5",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 不是...而是...",
    promptVi: "Không phải tôi không muốn đi mà là thật sự không có thời gian.",
    scrambledTokens: ["没有时间。", "而是实在", "不想去，", "我不是"],
    correctAnswer: "我不是不想去，而是实在没有时间。",
    pinyin: "Wǒ bú shì bù xiǎng qù, érshì shízài méiyǒu shíjiān.",
    explanationVi: "不是 A，而是 B phủ định vế trước để khẳng định vế sau."
  },
  {
    id: "so-ex-hsk4-advanced-6",
    level: "HSK4",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 与其...不如...",
    promptVi: "Thay vì ngồi đây phàn nàn, chi bằng nghĩ cách giải quyết.",
    scrambledTokens: ["想办法解决。", "不如", "在这里抱怨，", "与其"],
    correctAnswer: "与其在这里抱怨，不如想办法解决。",
    pinyin: "Yǔqí zài zhèlǐ bàoyuàn, bùrú xiǎng bànfǎ jiějué.",
    explanationVi: "与其 A，不如 B dùng để so sánh và lựa chọn phương án B tốt hơn."
  },

  // ==================== HSK5 BASIC (6) ====================
  {
    id: "so-ex-hsk5-basic-1",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 尽管...还是...",
    promptVi: "Mặc dù điều kiện có hạn, họ vẫn hoàn thành nhiệm vụ xuất sắc.",
    scrambledTokens: ["出色地完成了任务。", "他们还是", "条件有限，", "尽管"],
    correctAnswer: "尽管条件有限，他们还是出色地完成了任务。",
    pinyin: "Jǐnguǎn tiáojiàn yǒuxiàn, tāmen háishi chūsè de wánchéng le rènwu.",
    explanationVi: "尽管 + sự thật bất lợi，还是 + kết quả tích cực."
  },
  {
    id: "so-ex-hsk5-basic-2",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 宁可...也不...",
    promptVi: "Anh ấy thà làm thêm giờ chứ không chịu giao sản phẩm kém chất lượng.",
    scrambledTokens: ["也不愿交出不合格的作品。", "加班，", "宁可", "他"],
    correctAnswer: "他宁可加班，也不愿交出不合格的作品。",
    pinyin: "Tā nìngkě jiābān, yě búyuàn jiāochū bù hégé de zuòpǐn.",
    explanationVi: "宁可 A，也不 B diễn tả sự kiên quyết chọn A thay vì B."
  },
  {
    id: "so-ex-hsk5-basic-3",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Giới từ 针对",
    promptVi: "Công ty đã đưa ra phương án cải tiến nhắm vào vấn đề này.",
    scrambledTokens: ["提出了改进方案。", "公司", "这个问题，", "针对"],
    correctAnswer: "针对这个问题，公司提出了改进方案。",
    pinyin: "Zhēnduì zhège wèntí, gōngsī tíchū le gǎijìn fāng'àn.",
    explanationVi: "针对 + đối tượng/vấn đề cụ thể để đưa ra biện pháp tương ứng."
  },
  {
    id: "so-ex-hsk5-basic-4",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 之所以...是因为...",
    promptVi: "Sở dĩ anh ấy được mọi người tin tưởng là vì luôn giữ chữ tín.",
    scrambledTokens: ["是因为他一向信守承诺。", "受大家信任，", "之所以", "他"],
    correctAnswer: "他之所以受大家信任，是因为他一向信守承诺。",
    pinyin: "Tā zhīsuǒyǐ shòu dàjiā xìnrèn, shì yīnwèi tā yíxiàng xìnshǒu chéngnuò.",
    explanationVi: "之所以 + kết quả，是因为 + nguyên nhân nhấn mạnh."
  },
  {
    id: "so-ex-hsk5-basic-5",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 既...又...",
    promptVi: "Phương pháp này vừa tiết kiệm thời gian lại vừa nâng cao hiệu suất.",
    scrambledTokens: ["又提高了效率。", "节省了时间，", "既", "这种方法"],
    correctAnswer: "这种方法既节省了时间，又提高了效率。",
    pinyin: "Zhè zhǒng fāngfǎ jì jiéshěng le shíjiān, yòu tígāo le xiàolǜ.",
    explanationVi: "既...又... nối hai đặc điểm hoặc tác dụng song song."
  },
  {
    id: "so-ex-hsk5-basic-6",
    level: "HSK5",
    subDifficulty: "basic",
    grammarTopic: "Phó từ 居然",
    promptVi: "Không ngờ một dự án phức tạp như vậy lại hoàn thành trước thời hạn.",
    scrambledTokens: ["提前竣工了。", "居然", "复杂的工程", "这么"],
    correctAnswer: "这么复杂的工程居然提前竣工了。",
    pinyin: "Zhème fùzá de gōngchéng jūrán tíqián jùngōng le.",
    explanationVi: "居然 nhấn mạnh kết quả ngoài sức tưởng tượng."
  },

  // ==================== HSK5 ADVANCED (6) ====================
  {
    id: "so-ex-hsk5-advanced-1",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 一方面...另一方面...",
    promptVi: "Một mặt cần thúc đẩy tăng trưởng kinh tế, mặt khác phải bảo vệ môi trường.",
    scrambledTokens: ["另一方面也要保护环境。", "促进经济增长，", "一方面要", "我们"],
    correctAnswer: "我们一方面要促进经济增长，另一方面也要保护环境。",
    pinyin: "Wǒmen yìfāngmiàn yào cùjìn jīngjì zēngzhǎng, lìng yìfāngmiàn yě yào bǎohù huánjìng.",
    explanationVi: "一方面...，另一方面... trình bày hai khía cạnh cân bằng."
  },
  {
    id: "so-ex-hsk5-advanced-2",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 除非...否则...",
    promptVi: "Trừ phi có sự cho phép bằng văn bản, nếu không cấm sao chép tài liệu này.",
    scrambledTokens: ["否则严禁复制本资料。", "书面许可，", "获得", "除非"],
    correctAnswer: "除非获得书面许可，否则严禁复制本资料。",
    pinyin: "Chúfēi huòdé shūmiàn xǔkě, fǒuzé yánjìn fùzhì běn zīliào.",
    explanationVi: "除非 + điều kiện ngoại lệ duy nhất，否则 + hệ quả."
  },
  {
    id: "so-ex-hsk5-advanced-3",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 难免",
    promptVi: "Lần đầu quản lý nhóm lớn, khó tránh khỏi có lúc lúng túng.",
    scrambledTokens: ["难免会感到手足无措。", "大团队，", "管理", "初次"],
    correctAnswer: "初次管理大团队，难免会感到手足无措。",
    pinyin: "Chūcì guǎnlǐ dà tuánduì, nánmiǎn huì gǎndào shǒuzú wúcuò.",
    explanationVi: "难免 (khó tránh khỏi) thường đi với 会 để diễn tả điều tất yếu dễ xảy ra."
  },
  {
    id: "so-ex-hsk5-advanced-4",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 从而",
    promptVi: "Cải cách quy trình giúp giảm chi phí, từ đó nâng cao sức cạnh tranh.",
    scrambledTokens: ["从而增强了市场竞争力。", "降低了成本，", "流程改革"],
    correctAnswer: "流程改革降低了成本，从而增强了市场竞争力。",
    pinyin: "Liúchéng gǎigé jiàngdī le chéngběn, cóng'ér zēngqiáng le shìchǎng jìngzhēnglì.",
    explanationVi: "从而 nối nguyên nhân/biện pháp phía trước với kết quả tiếp theo."
  },
  {
    id: "so-ex-hsk5-advanced-5",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 无论如何",
    promptVi: "Dù thế nào đi nữa, chúng ta cũng phải giữ vững nguyên tắc an toàn.",
    scrambledTokens: ["守住安全底线。", "我们都要", "无论如何，"],
    correctAnswer: "无论如何，我们都要守住安全底线。",
    pinyin: "Wúlùn rúhé, wǒmen dōu yào shǒuzhù ānquán dǐxiàn.",
    explanationVi: "无论如何 (bất kể thế nào) đặt đầu câu nhấn mạnh quyết tâm."
  },
  {
    id: "so-ex-hsk5-advanced-6",
    level: "HSK5",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 以便",
    promptVi: "Xin hãy nộp báo cáo trước thứ Sáu để tiện cho việc tổng hợp.",
    scrambledTokens: ["以便我们统一汇总。", "提交报告，", "在周五前", "请大家"],
    correctAnswer: "请大家在周五前提交报告，以便我们统一汇总。",
    pinyin: "Qǐng dàjiā zài zhōuwǔ qián tíjiāo bàogào, yǐbiàn wǒmen tǒngyī huìzǒng.",
    explanationVi: "以便 + mục đích giúp việc phía sau diễn ra thuận lợi."
  },

  // ==================== HSK6 BASIC (6) ====================
  {
    id: "so-ex-hsk6-basic-1",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 鉴于",
    promptVi: "Xét thấy tình hình thị trường biến động, hội đồng quyết định hoãn đầu tư.",
    scrambledTokens: ["董事会决定暂缓投资。", "波动剧烈，", "市场行情", "鉴于"],
    correctAnswer: "鉴于市场行情波动剧烈，董事会决定暂缓投资。",
    pinyin: "Jiànyú shìchǎng hángqíng bōdòng jùliè, dǒngshìhuì juédìng zànhuǎn tóuzī.",
    explanationVi: "鉴于 + bối cảnh/căn cứ thực tế，mệnh đề quyết định (văn viết trang trọng)."
  },
  {
    id: "so-ex-hsk6-basic-2",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 固然...但...",
    promptVi: "Kinh nghiệm dĩ nhiên quan trọng, nhưng khả năng học hỏi mới là then chốt.",
    scrambledTokens: ["但持续学习的能力更为关键。", "固然重要，", "过往经验"],
    correctAnswer: "过往经验固然重要，但持续学习的能力更为关键。",
    pinyin: "Guòwǎng jīngyàn gùrán zhòngyào, dàn chíxù xuéxí de nénglì gèng wéi guānjiàn.",
    explanationVi: "固然 thừa nhận vế trước là đúng, 但 nhấn mạnh vế sau quan trọng hơn."
  },
  {
    id: "so-ex-hsk6-basic-3",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 以免",
    promptVi: "Hãy sao lưu dữ liệu định kỳ để tránh tổn thất không thể khắc phục.",
    scrambledTokens: ["以免造成不可挽回的损失。", "备份数据，", "请定期"],
    correctAnswer: "请定期备份数据，以免造成不可挽回的损失。",
    pinyin: "Qǐng dìngqī bèifèn shùjù, yǐmiǎn zàochéng bùkě wǎnhuí de sǔnshī.",
    explanationVi: "以免 + hậu quả xấu cần phòng tránh."
  },
  {
    id: "so-ex-hsk6-basic-4",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 尚且...何况...",
    promptVi: "Ngay cả chuyên gia còn cần thẩm định kỹ, huống hồ là người mới.",
    scrambledTokens: ["何况初入行业的新人。", "尚且需要反复论证，", "资深专家"],
    correctAnswer: "资深专家尚且需要反复论证，何况初入行业的新人。",
    pinyin: "Zīshēn zhuānjiā shàngqiě xūyào fǎnfù lùnzhèng, hékuàng chūrù hángyè de xīnrén.",
    explanationVi: "尚且...，何况... dùng để so sánh tăng tiến mang tính phản vấn."
  },
  {
    id: "so-ex-hsk6-basic-5",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 凡是...都...",
    promptVi: "Phàm là công dân đủ điều kiện đều có quyền tham gia bỏ phiếu.",
    scrambledTokens: ["都享有依法投票的权利。", "的公民，", "符合条件", "凡是"],
    correctAnswer: "凡是符合条件的公民，都享有依法投票的权利。",
    pinyin: "Fánshì fúhé tiáojiàn de gōngmín, dōu xiǎngyǒu yīfǎ tóupiào de quánlì.",
    explanationVi: "凡是...，都... bao quát toàn bộ đối tượng trong phạm vi nêu ra."
  },
  {
    id: "so-ex-hsk6-basic-6",
    level: "HSK6",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 进而",
    promptVi: "Nghiên cứu này làm rõ cơ chế gây bệnh, từ đó mở ra hướng điều trị mới.",
    scrambledTokens: ["进而开辟了新的治疗路径。", "揭示了致病机理，", "这项研究"],
    correctAnswer: "这项研究揭示了致病机理，进而开辟了新的治疗路径。",
    pinyin: "Zhè xiàng yánjiū jiēshì le zhìbìng jīlǐ, jìn'ér kāipì le xīn de zhìliáo lùjìng.",
    explanationVi: "进而 diễn tả bước tiến tiếp theo dựa trên nền tảng của vế trước."
  },

  // ==================== HSK6 ADVANCED (6) ====================
  {
    id: "so-ex-hsk6-advanced-1",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 倘若...势必...",
    promptVi: "Nếu như chỉ chạy theo lợi ích ngắn hạn, tất yếu sẽ tổn hại uy tín thương hiệu.",
    scrambledTokens: ["势必损害品牌信誉。", "短期利益，", "盲目追求", "倘若"],
    correctAnswer: "倘若盲目追求短期利益，势必损害品牌信誉。",
    pinyin: "Tǎngruò mángmù zhuīqiú duǎnqī lìyì, shìbì sǔnhài pǐnpái xìnyù.",
    explanationVi: "倘若 (nếu như - văn viết) kết hợp 势必 (tất yếu sẽ)."
  },
  {
    id: "so-ex-hsk6-advanced-2",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 非但...反而...",
    promptVi: "Biện pháp này chẳng những không xoa dịu mâu thuẫn mà ngược lại còn làm nó gay gắt hơn.",
    scrambledTokens: ["反而加剧了分歧。", "未能化解矛盾，", "非但", "此举"],
    correctAnswer: "此举非但未能化解矛盾，反而加剧了分歧。",
    pinyin: "Cǐjǔ fēidàn wèinéng huàjiě máodùn, fǎn'ér jiājù le fēnqí.",
    explanationVi: "非但 + phủ định，反而 + kết quả trái ngược tiêu cực hơn."
  },
  {
    id: "so-ex-hsk6-advanced-3",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 纵然...亦...",
    promptVi: "Dẫu phía trước đầy chông gai, chúng ta cũng không hề chùn bước.",
    scrambledTokens: ["我们亦无所畏惧。", "荆棘密布，", "前路", "纵然"],
    correctAnswer: "纵然前路荆棘密布，我们亦无所畏惧。",
    pinyin: "Zòngrán qiánlù jīngjí mìbù, wǒmen yì wúsuǒ wèijù.",
    explanationVi: "纵然 (dẫu cho) + 亦 (cũng) mang sắc thái văn chương trang trọng."
  },
  {
    id: "so-ex-hsk6-advanced-4",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 毋庸置疑",
    promptVi: "Không thể nghi ngờ rằng đổi mới sáng tạo là động lực cốt lõi của phát triển.",
    scrambledTokens: ["高质量发展的核心引擎。", "创新是推动", "毋庸置疑，"],
    correctAnswer: "毋庸置疑，创新是推动高质量发展的核心引擎。",
    pinyin: "Wúyōng zhìyí, chuàngxīn shì tuīdòng gāo zhìliàng fāzhǎn de héxīn yǐnqíng.",
    explanationVi: "毋庸置疑 (không cần nghi ngờ) đặt đầu câu để khẳng định chân lý."
  },
  {
    id: "so-ex-hsk6-advanced-5",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 亟待",
    promptVi: "Hệ thống pháp luật về bảo vệ dữ liệu cá nhân đang rất cần được hoàn thiện.",
    scrambledTokens: ["亟待进一步完善。", "法律体系", "个人信息保护的"],
    correctAnswer: "个人信息保护的法律体系亟待进一步完善。",
    pinyin: "Gèrén xìnxī bǎohù de fǎlǜ tǐxì jídài jìnyíbù wánshàn.",
    explanationVi: "亟待 (vô cùng cấp bách cần) + động từ."
  },
  {
    id: "so-ex-hsk6-advanced-6",
    level: "HSK6",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 诚然...然而...",
    promptVi: "Quả thực trí tuệ nhân tạo nâng cao năng suất, tuy nhiên nó cũng đặt ra thách thức đạo đức.",
    scrambledTokens: ["然而也引发了伦理隐忧。", "提升了生产效率，", "人工智能", "诚然，"],
    correctAnswer: "诚然，人工智能提升了生产效率，然而也引发了伦理隐忧。",
    pinyin: "Chéngrán, réngōng zhìnéng tíshēng le shēngchǎn xiàolǜ, rán'ér yě yǐnfā le lúnlǐ yǐnyōu.",
    explanationVi: "诚然...，然而... là cặp chuyển ngoặt học thuật (quả thực... tuy nhiên...)."
  },

  // ==================== HSK7 BASIC (6) ====================
  {
    id: "so-ex-hsk7-basic-1",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Diễn đạt học thuật 旨在",
    promptVi: "Sáng kiến này nhằm thúc đẩy giao lưu văn hóa xuyên biên giới.",
    scrambledTokens: ["跨国界文化交流。", "旨在推动", "该项倡议"],
    correctAnswer: "该项倡议旨在推动跨国界文化交流。",
    pinyin: "Gāi xiàng chàngyì zhǐzài tuīdòng kuà guójiè wénhuà jiāoliú.",
    explanationVi: "旨在 (nhằm mục đích) + cụm động từ mục tiêu."
  },
  {
    id: "so-ex-hsk7-basic-2",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 立足于",
    promptVi: "Chính sách công phải đứng trên nền tảng thực tiễn của địa phương.",
    scrambledTokens: ["本土实际国情。", "必须立足于", "公共政策的制定"],
    correctAnswer: "公共政策的制定必须立足于本土实际国情。",
    pinyin: "Gōnggòng zhèngcè de zhìdìng bìxū lìzú yú běntǔ shíjì guóqíng.",
    explanationVi: "立足于 + cơ sở/nền tảng thực tế."
  },
  {
    id: "so-ex-hsk7-basic-3",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 相辅相成",
    promptVi: "Phát triển kinh tế và bảo tồn di sản bổ trợ lẫn nhau, không hề mâu thuẫn.",
    scrambledTokens: ["并不矛盾。", "相辅相成，", "与遗产保护", "经济发展"],
    correctAnswer: "经济发展与遗产保护相辅相成，并不矛盾。",
    pinyin: "Jīngjì fāzhǎn yǔ yíchǎn bǎohù xiāngfǔ xiāngchéng, bìng bù máodùn.",
    explanationVi: "A 与 B 相辅相成 diễn tả hai yếu tố hỗ trợ nhau cùng phát triển."
  },
  {
    id: "so-ex-hsk7-basic-4",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 归根结底",
    promptVi: "Suy cho cùng, cạnh tranh doanh nghiệp là cạnh tranh về nhân tài.",
    scrambledTokens: ["还是人才的竞争。", "企业的竞争", "归根结底，"],
    correctAnswer: "归根结底，企业的竞争还是人才的竞争。",
    pinyin: "Guīgēn jiédǐ, qǐyè de jìngzhēng háishi réncái de jìngzhēng.",
    explanationVi: "归根结底 (suy cho cùng) dùng để tổng kết bản chất cốt lõi của vấn đề."
  },
  {
    id: "so-ex-hsk7-basic-5",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 有鉴于此",
    promptVi: "Nhận thấy điều này, nhóm nghiên cứu đã điều chỉnh mô hình thí nghiệm.",
    scrambledTokens: ["调整了实验模型。", "研究团队", "有鉴于此，"],
    correctAnswer: "有鉴于此，研究团队调整了实验模型。",
    pinyin: "Yǒujiànyúcǐ, yánjiū tuánduì tiáozhěng le shíyàn móxíng.",
    explanationVi: "有鉴于此 (xét thấy điều này) nối tiếp bối cảnh trước với hành động ứng phó."
  },
  {
    id: "so-ex-hsk7-basic-6",
    level: "HSK7",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 不可或缺",
    promptVi: "Tư duy phản biện là năng lực không thể thiếu trong thời đại bùng nổ thông tin.",
    scrambledTokens: ["不可或缺的素养。", "信息爆炸时代", "是", "批判性思维"],
    correctAnswer: "批判性思维是信息爆炸时代不可或缺的素养。",
    pinyin: "Pīpànxìng sīwéi shì xìnxī bàozhà shídài bùkě huòquē de sùyǎng.",
    explanationVi: "A 是...不可或缺的 B (A là B không thể thiếu của...)."
  },

  // ==================== HSK7 ADVANCED (6) ====================
  {
    id: "so-ex-hsk7-advanced-1",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 究其根源",
    promptVi: "Truy tìm tận gốc rễ, vấn đề này bắt nguồn từ cơ chế phân bổ chưa hợp lý.",
    scrambledTokens: ["在于资源配置机制失衡。", "这一现象的产生", "究其根源，"],
    correctAnswer: "究其根源，这一现象的产生在于资源配置机制失衡。",
    pinyin: "Jiū qí gēnyuán, zhè yí xiànxiàng de chǎnshēng zàiyú zīyuán pèizhì jīzhì shīhéng.",
    explanationVi: "究其根源，...在于... dùng để phân tích nguyên nhân sâu xa trong văn nghị luận."
  },
  {
    id: "so-ex-hsk7-advanced-2",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 概莫能外",
    promptVi: "Trước làn sóng chuyển đổi số, hầu như không ngành nghề nào đứng ngoài cuộc.",
    scrambledTokens: ["几乎概莫能外。", "各行各业", "数字化浪潮，", "面对"],
    correctAnswer: "面对数字化浪潮，各行各业几乎概莫能外。",
    pinyin: "Miànduì shùzìhuà làngcháo, gèháng gèyè jīhū gàimò néngwài.",
    explanationVi: "概莫能外 (không một ai/lĩnh vực nào ngoại lệ)."
  },
  {
    id: "so-ex-hsk7-advanced-3",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 权衡利弊",
    promptVi: "Sau khi cân nhắc kỹ lợi hại, chúng tôi quyết định giữ nguyên phương án ban đầu.",
    scrambledTokens: ["保留原有方案。", "我们决定", "权衡利弊之后，"],
    correctAnswer: "权衡利弊之后，我们决定保留原有方案。",
    pinyin: "Quánhéng lìbì zhīhòu, wǒmen juédìng bǎoliú yuányǒu fāng'àn.",
    explanationVi: "权衡利弊之后 (sau khi cân nhắc thiệt hơn) làm trạng ngữ thời gian."
  },
  {
    id: "so-ex-hsk7-advanced-4",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 潜移默化",
    promptVi: "Môi trường gia đình ảnh hưởng một cách âm thầm đến tính cách của trẻ nhỏ.",
    scrambledTokens: ["塑造着孩子的品格。", "潜移默化地", "家庭氛围"],
    correctAnswer: "家庭氛围潜移默化地塑造着孩子的品格。",
    pinyin: "Jiātíng fēnwéi qiányí mòhuà de sùzào zhe háizi de pǐngé.",
    explanationVi: "潜移默化地 + động từ (tác động một cách âm thầm, sâu sắc)."
  },
  {
    id: "so-ex-hsk7-advanced-5",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 未雨绸缪",
    promptVi: "Doanh nghiệp cần chủ động phòng ngừa rủi ro chuỗi cung ứng từ sớm.",
    scrambledTokens: ["防范供应链风险。", "未雨绸缪，", "企业应当"],
    correctAnswer: "企业应当未雨绸缪，防范供应链风险。",
    pinyin: "Qǐyè yīngdāng wèiyǔ chóumóu, fángfàn gōngyìngliàn fēngxiǎn.",
    explanationVi: "未雨绸缪 (lo xa, chuẩn bị trước khi sự cố xảy ra)."
  },
  {
    id: "so-ex-hsk7-advanced-6",
    level: "HSK7",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 循序渐进",
    promptVi: "Cải cách giáo dục cần tiến hành từng bước vững chắc, không thể nóng vội.",
    scrambledTokens: ["切忌操之过急。", "循序渐进，", "教育改革必须"],
    correctAnswer: "教育改革必须循序渐进，切忌操之过急。",
    pinyin: "Jiàoyù gǎigé bìxū xúnxù jiànjìn, qièjì cāozhī guòjí.",
    explanationVi: "循序渐进 (từng bước một) đối lập với 操之过急 (nóng vội)."
  },

  // ==================== HSK8 BASIC (6) ====================
  {
    id: "so-ex-hsk8-basic-1",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Ngôn ngữ học thuật 契合",
    promptVi: "Triết lý thiết kế này hoàn toàn ăn khớp với xu hướng phát triển bền vững.",
    scrambledTokens: ["可持续发展的时代潮流。", "高度契合", "这一设计理念"],
    correctAnswer: "这一设计理念高度契合可持续发展的时代潮流。",
    pinyin: "Zhè yí shèjì lǐniàn gāodù qìhé kě chíxù fāzhǎn de shídài cháoliú.",
    explanationVi: "高度契合 (ăn khớp ở mức độ cao) + danh từ trừu tượng."
  },
  {
    id: "so-ex-hsk8-basic-2",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 毋宁说",
    promptVi: "Thay vì nói đây là cuộc khủng hoảng, chi bằng nói đó là cơ hội tái cấu trúc.",
    scrambledTokens: ["毋宁说是重塑格局的契机。", "是一场危机，", "与其说这"],
    correctAnswer: "与其说这是一场危机，毋宁说是重塑格局的契机。",
    pinyin: "Yǔqí shuō zhè shì yì chǎng wēijī, wúnìng shuō shì chóngsù géjú de qìjī.",
    explanationVi: "与其说 A，毋宁说 B (thay vì nói là A, chi bằng nói là B)."
  },
  {
    id: "so-ex-hsk8-basic-3",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 凸显",
    promptVi: "Báo cáo thực nghiệm làm nổi bật tầm quan trọng của hợp tác liên ngành.",
    scrambledTokens: ["跨学科协作的紧迫性。", "充分凸显了", "实证报告"],
    correctAnswer: "实证报告充分凸显了跨学科协作的紧迫性。",
    pinyin: "Shízhèng bàogào chōngfèn tūxiǎn le kuà xuékē xiézuò de jǐnpòxìng.",
    explanationVi: "充分凸显了 (làm nổi bật rõ rệt) dùng nhiều trong báo cáo học thuật."
  },
  {
    id: "so-ex-hsk8-basic-4",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 秉持",
    promptVi: "Các bên nên kiên trì nguyên tắc công bằng, minh bạch và cùng có lợi.",
    scrambledTokens: ["开展深度合作。", "互利共赢的原则", "公平透明、", "各方应秉持"],
    correctAnswer: "各方应秉持公平透明、互利共赢的原则开展深度合作。",
    pinyin: "Gèfāng yīng bǐngchí gōngpíng tòumíng, hùlì gòngyíng de yuánzé kāizhǎn shēndù hézuò.",
    explanationVi: "秉持 + nguyên tắc/tinh thần + động từ triển khai."
  },
  {
    id: "so-ex-hsk8-basic-5",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 折射出",
    promptVi: "Sự thay đổi trong thói quen tiêu dùng phản ánh bước chuyển dịch cấu trúc xã hội.",
    scrambledTokens: ["社会结构的深层变迁。", "折射出", "消费习惯的演变"],
    correctAnswer: "消费习惯的演变折射出社会结构的深层变迁。",
    pinyin: "Xiāofèi xíguàn de yǎnbiàn zhéshè chū shèhuì jiégòu de shēncéng biànqiān.",
    explanationVi: "折射出 (phản ánh gián tiếp) nối hiện tượng bề mặt với bản chất sâu xa."
  },
  {
    id: "so-ex-hsk8-basic-6",
    level: "HSK8",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 掣肘",
    promptVi: "Thiếu hụt nhân lực trình độ cao đang kìm hãm tốc độ nâng cấp công nghiệp.",
    scrambledTokens: ["产业转型升级的步伐。", "严重掣肘着", "高端人才的短缺"],
    correctAnswer: "高端人才的短缺严重掣肘着产业转型升级的步伐。",
    pinyin: "Gāoduān réncái de duǎnquē yánzhòng chèzhǒu zhe chǎnyè zhuǎnxíng shēngjí de bùfá.",
    explanationVi: "掣肘 (kìm hãm, cản trở) là động từ văn viết cao cấp."
  },

  // ==================== HSK8 ADVANCED (6) ====================
  {
    id: "so-ex-hsk8-advanced-1",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 审慎",
    promptVi: "Cơ quan quản lý cần đánh giá thận trọng tác động lan tỏa của thuật toán tạo sinh.",
    scrambledTokens: ["生成式算法的外溢效应。", "审慎评估", "监管机构须"],
    correctAnswer: "监管机构须审慎评估生成式算法的外溢效应。",
    pinyin: "Jiānguǎn jīgòu xū shěnshèn pínggū shēngchéngshì suànfǎ de wàiyì xiàoyìng.",
    explanationVi: "须审慎评估 (cần đánh giá một cách thận trọng)."
  },
  {
    id: "so-ex-hsk8-advanced-2",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 破局之道",
    promptVi: "Đổi mới thể chế chính là chìa khóa phá vỡ thế bế tắc tăng trưởng hiện nay.",
    scrambledTokens: ["当前增长瓶颈的破局之道。", "乃是打破", "制度创新"],
    correctAnswer: "制度创新乃是打破当前增长瓶颈的破局之道。",
    pinyin: "Zhìdù chuàngxīn nǎishì dǎpò dāngqián zēngzhǎng píngjǐng de pòjú zhī dào.",
    explanationVi: "乃是...的破局之道 (chính là con đường phá vỡ thế bế tắc của...)."
  },
  {
    id: "so-ex-hsk8-advanced-3",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 兼顾",
    promptVi: "Quy hoạch đô thị hiện đại phải dung hòa giữa hiệu quả không gian và bản sắc nhân văn.",
    scrambledTokens: ["空间效率与人文温度。", "必须兼顾", "现代城市规划"],
    correctAnswer: "现代城市规划必须兼顾空间效率与人文温度。",
    pinyin: "Xiàndài chéngshì guīhuà bìxū jiāngù kōngjiān xiàolǜ yǔ rénwén wēndù.",
    explanationVi: "兼顾 A 与 B (chú trọng đồng thời cả A và B)."
  },
  {
    id: "so-ex-hsk8-advanced-4",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 赋能",
    promptVi: "Dữ liệu lớn đang tiếp thêm động lực mạnh mẽ cho quá trình hiện đại hóa quản trị công.",
    scrambledTokens: ["公共治理体系现代化。", "深度赋能", "大数据技术正"],
    correctAnswer: "大数据技术正深度赋能公共治理体系现代化。",
    pinyin: "Dà shùjù jìshù zhèng shēndù fùnéng gōnggòng zhìlǐ tǐxì xiàndàihuà.",
    explanationVi: "深度赋能 (trao quyền/tiếp năng lực sâu rộng) cho đối tượng phía sau."
  },
  {
    id: "so-ex-hsk8-advanced-5",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 蔚然成风",
    promptVi: "Lối sống xanh, ít phát thải carbon đang dần trở thành xu thế phổ biến trong xã hội.",
    scrambledTokens: ["全社会蔚然成风。", "的生活方式已在", "绿色低碳"],
    correctAnswer: "绿色低碳的生活方式已在全社会蔚然成风。",
    pinyin: "Lǜsè dītàn de shēnghuó fāngshì yǐ zài quán shèhuì wèirán chéngfēng.",
    explanationVi: "蔚然成风 (trở thành phong trào/nếp sống lan rộng)."
  },
  {
    id: "so-ex-hsk8-advanced-6",
    level: "HSK8",
    subDifficulty: "advanced",
    grammarTopic: "Cấu trúc 殊途同归",
    promptVi: "Tuy lộ trình công nghệ khác nhau nhưng mục tiêu cuối cùng đều hướng về trung hòa carbon.",
    scrambledTokens: ["但终极目标殊途同归。", "技术路线各异，", "尽管"],
    correctAnswer: "尽管技术路线各异，但终极目标殊途同归。",
    pinyin: "Jǐnguǎn jìshù lùxiàn gèyì, dàn zhōngjí mùbiāo shūtú tóngguī.",
    explanationVi: "殊途同归 (tuy đi đường khác nhau nhưng cùng dẫn đến một đích)."
  },

  // ==================== HSK9 BASIC (6) ====================
  {
    id: "so-ex-hsk9-basic-1",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Lập luận học thuật 范式转移",
    promptVi: "Bước ngoặt công nghệ này đang kích hoạt sự chuyển dịch hệ hình trong nghiên cứu khoa học.",
    scrambledTokens: ["科研领域的范式转移。", "正在触发", "此轮技术跃迁"],
    correctAnswer: "此轮技术跃迁正在触发科研领域的范式转移。",
    pinyin: "Cǐlún jìshù yuèqiān zhèngzài chùfā kēyán lǐngyù de fànshì zhuǎnyí.",
    explanationVi: "范式转移 (paradigm shift - chuyển dịch hệ hình) là thuật ngữ học thuật cao cấp."
  },
  {
    id: "so-ex-hsk9-basic-2",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 辩证统一",
    promptVi: "An ninh và phát triển là hai trụ cột thống nhất biện chứng, bổ sung cho nhau.",
    scrambledTokens: ["有机整体。", "辩证统一的", "安全与发展是"],
    correctAnswer: "安全与发展是辩证统一的有机整体。",
    pinyin: "Ānquán yǔ fāzhǎn shì biànzhèng tǒngyī de yǒujī zhěngtǐ.",
    explanationVi: "辩证统一的有机整体 (chỉnh thể hữu cơ thống nhất biện chứng)."
  },
  {
    id: "so-ex-hsk9-basic-3",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 韧性",
    promptVi: "Đa dạng hóa thị trường giúp nâng cao rõ rệt sức chống chịu của nền kinh tế trước cú sốc bên ngoài.",
    scrambledTokens: ["抵御外部冲击的韧性。", "显著增强了经济", "市场多元化布局"],
    correctAnswer: "市场多元化布局显著增强了经济抵御外部冲击的韧性。",
    pinyin: "Shìchǎng duōyuánhuà bùjú xiǎnzhù zēngqiáng le jīngjì dǐyù wàibù chōngjī de rènxìng.",
    explanationVi: "抵御外部冲击的韧性 (sức chống chịu trước các cú sốc từ bên ngoài)."
  },
  {
    id: "so-ex-hsk9-basic-4",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 互鉴",
    promptVi: "Đối thoại bình đẳng và học hỏi lẫn nhau giữa các nền văn minh là nền tảng của hòa bình bền vững.",
    scrambledTokens: ["构筑持久和平的基石。", "文明交流互鉴是", "平等对话与"],
    correctAnswer: "平等对话与文明交流互鉴是构筑持久和平的基石。",
    pinyin: "Píngděng duìhuà yǔ wénmíng jiāoliú hùjiàn shì gòuzhù chíjiǔ hépíng de jīshí.",
    explanationVi: "文明交流互鉴 (giao lưu và học hỏi lẫn nhau giữa các nền văn minh)."
  },
  {
    id: "so-ex-hsk9-basic-5",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 协同增效",
    promptVi: "Sự phối hợp nhịp nhàng giữa chính sách tài khóa và tiền tệ tạo ra hiệu ứng cộng hưởng.",
    scrambledTokens: ["释放出协同增效的政策红利。", "与货币政策联动，", "财政政策"],
    correctAnswer: "财政政策与货币政策联动，释放出协同增效的政策红利。",
    pinyin: "Cáizhèng zhèngcè yǔ huòbì zhèngcè liándòng, shìfàng chū xiétóng zēngxiào de zhèngcè hónglì.",
    explanationVi: "协同增效 (cộng hưởng nâng cao hiệu quả)."
  },
  {
    id: "so-ex-hsk9-basic-6",
    level: "HSK9",
    subDifficulty: "basic",
    grammarTopic: "Cấu trúc 阐释",
    promptVi: "Luận án này diễn giải lại mối quan hệ giữa chủ thể và cấu trúc dưới góc nhìn liên ngành.",
    scrambledTokens: ["主体与结构的互动关系。", "重新阐释了", "跨学科视角", "该论文立足"],
    correctAnswer: "该论文立足跨学科视角重新阐释了主体与结构的互动关系。",
    pinyin: "Gāi lùnwén lìzú kuà xuékē shìjiǎo chóngxīn chǎnshì le zhǔtǐ yǔ jiégòu de hùdòng guānxì.",
    explanationVi: "立足...视角重新阐释了... (đứng từ góc nhìn... diễn giải lại...)."
  },

  // ==================== HSK9 ADVANCED (6) ====================
  {
    id: "so-ex-hsk9-advanced-1",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Triết luận 守正创新",
    promptVi: "Chỉ khi giữ vững nền tảng cốt lõi và không ngừng đổi mới mới có thể vượt qua chu kỳ biến động.",
    scrambledTokens: ["方能在时代变局中行稳致远。", "守正创新，", "唯有坚持"],
    correctAnswer: "唯有坚持守正创新，方能在时代变局中行稳致远。",
    pinyin: "Wéiyǒu jiānchí shǒuzhèng chuàngxīn, fāng néng zài shídài biànjú zhōng xíngwěn zhìyuǎn.",
    explanationVi: "唯有...，方能... (chỉ có... mới có thể...) kết hợp thành ngữ 守正创新 và 行稳致远."
  },
  {
    id: "so-ex-hsk9-advanced-2",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Quản trị toàn cầu 博弈与共治",
    promptVi: "Trong bối cảnh đa cực hóa, quản trị toàn cầu cần chuyển từ trò chơi có tổng bằng không sang cùng quản trị.",
    scrambledTokens: ["迈向包容性多边共治。", "应超越零和博弈，", "全球治理体系", "多极化背景下，"],
    correctAnswer: "多极化背景下，全球治理体系应超越零和博弈，迈向包容性多边共治。",
    pinyin: "Duōjíhuà bèijǐng xià, quánqiú zhìlǐ tǐxì yīng chāoyuè línghé bóyì, màixiàng bāoróngxìng duōbiān gòngzhì.",
    explanationVi: "超越 A，迈向 B (vượt qua A, tiến tới B) trong diễn ngôn quan hệ quốc tế."
  },
  {
    id: "so-ex-hsk9-advanced-3",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Kinh tế vĩ mô 逆周期调节",
    promptVi: "Tăng cường điều tiết nghịch chu kỳ là công cụ then chốt nhằm ổn định kỳ vọng thị trường.",
    scrambledTokens: ["稳定宏观预期的关键抓手。", "逆周期调节是", "强化财政金融"],
    correctAnswer: "强化财政金融逆周期调节是稳定宏观预期的关键抓手。",
    pinyin: "Qiánghuà cáizhèng jīnróng nìzhōuqī tiáojié shì wěndìng hóngguān yùqī de guānjiàn zhuāshǒu.",
    explanationVi: "逆周期调节 (điều tiết nghịch chu kỳ) và 关键抓手 (điểm tựa/công cụ then chốt)."
  },
  {
    id: "so-ex-hsk9-advanced-4",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Đạo đức công nghệ 价值对齐",
    promptVi: "Thiết lập cơ chế căn chỉnh giá trị là tiền đề cốt lõi để trí tuệ nhân tạo phục vụ nhân loại an toàn.",
    scrambledTokens: ["安全向善的根本前提。", "人工智能", "是确保", "构建价值对齐机制"],
    correctAnswer: "构建价值对齐机制是确保人工智能安全向善的根本前提。",
    pinyin: "Gòujiàn jiàzhí duìqí jīzhì shì quèbǎo réngōng zhìnéng ānquán xiàngshàn de gēnběn qiántí.",
    explanationVi: "构建...机制是确保...的根本前提 (xây dựng cơ chế... là tiền đề căn bản để bảo đảm...)."
  },
  {
    id: "so-ex-hsk9-advanced-5",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Lý thuyết hệ thống 耦合",
    promptVi: "Sự liên kết chặt chẽ giữa chuyển đổi năng lượng và hạ tầng số đang định hình lại chuỗi giá trị toàn cầu.",
    scrambledTokens: ["正在重塑全球价值链格局。", "深度耦合，", "与数字基建的", "能源转型"],
    correctAnswer: "能源转型与数字基建的深度耦合，正在重塑全球价值链格局。",
    pinyin: "Néngyuán zhuǎnxíng yǔ shùzì jījiàn de shēndù ǒuhé, zhèngzài chóngsù quánqiú jiàzhíliàn géjú.",
    explanationVi: "深度耦合 (liên kết/khớp nối sâu sắc) dùng trong phân tích hệ thống phức tạp."
  },
  {
    id: "so-ex-hsk9-advanced-6",
    level: "HSK9",
    subDifficulty: "advanced",
    grammarTopic: "Tư duy chiến lược 统筹兼顾",
    promptVi: "Chỉ khi điều phối hài hòa lợi ích trước mắt và tầm nhìn dài hạn mới đạt được phát triển bền vững thực sự.",
    scrambledTokens: ["实现真正意义上的永续发展。", "统筹兼顾，方能", "短期诉求与长远愿景", "唯有将"],
    correctAnswer: "唯有将短期诉求与长远愿景统筹兼顾，方能实现真正意义上的永续发展。",
    pinyin: "Wéiyǒu jiāng duǎnqī sùqiú yǔ chángyuǎn yuànjǐng tǒngchóu jiāngù, fāng néng shíxiàn zhēnzhèng yìyì shàng de yǒngxù fāzhǎn.",
    explanationVi: "唯有将 A 与 B 统筹兼顾，方能... (chỉ có điều phối hài hòa A và B mới có thể...)."
  }
];
