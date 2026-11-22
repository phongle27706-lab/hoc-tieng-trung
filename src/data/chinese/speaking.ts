import type { HSKLevel, SubDifficulty } from "@/types";
import { SPEAKING_SENTENCES_EXTRA } from "./speaking-extra";

export interface SpeakingSentence {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  topic: string;
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  focusTones: string[];
  tipVi: string;
}

export const SPEAKING_SENTENCES: SpeakingSentence[] = [
  {
    "id": "sp-hsk0-basic-1",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Chào hỏi",
    "hanzi": "你好！",
    "pinyin": "Nǐ hǎo!",
    "meaningVi": "Xin chào!",
    "focusTones": [
      "Biến điệu thanh 3 (3+3 → 2+3)"
    ],
    "tipVi": "Hai thanh 3 đi liền nhau, đọc chữ 你 thành thanh 2: Ní hǎo."
  },
  {
    "id": "sp-hsk0-basic-2",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Chào hỏi",
    "hanzi": "您好，老师！",
    "pinyin": "Nín hǎo, lǎoshī!",
    "meaningVi": "Chào ngài, thưa thầy/cô!",
    "focusTones": [
      "Thanh 2 (nín)",
      "Thanh 1 (shī)"
    ],
    "tipVi": "Giữ giọng cao đều ở chữ 师 (shī), không bị rơi giọng."
  },
  {
    "id": "sp-hsk0-basic-3",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Cảm ơn",
    "hanzi": "谢谢你。",
    "pinyin": "Xièxie nǐ.",
    "meaningVi": "Cảm ơn bạn.",
    "focusTones": [
      "Thanh 4 (xiè)",
      "Thanh nhẹ (xie)"
    ],
    "tipVi": "Chữ 谢 đầu đọc dứt khoát từ cao xuống thấp, chữ thứ hai đọc ngắn và nhẹ."
  },
  {
    "id": "sp-hsk0-basic-4",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Đáp lễ",
    "hanzi": "不客气。",
    "pinyin": "Bú kèqi.",
    "meaningVi": "Đừng khách sáo.",
    "focusTones": [
      "Biến điệu 不 (bú + thanh 4)"
    ],
    "tipVi": "Vì 客 (kè) mang thanh 4 nên 不 biến thành thanh 2: bú."
  },
  {
    "id": "sp-hsk0-basic-5",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Xin lỗi",
    "hanzi": "对不起。",
    "pinyin": "Duìbuqǐ.",
    "meaningVi": "Xin lỗi.",
    "focusTones": [
      "Thanh 4 (duì)",
      "Thanh nhẹ (bu)"
    ],
    "tipVi": "Đọc lướt nhẹ chữ 不 ở giữa, nhấn rõ thanh 3 ở 起 (qǐ)."
  },
  {
    "id": "sp-hsk0-basic-6",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Đáp lễ",
    "hanzi": "没关系。",
    "pinyin": "Méi guānxi.",
    "meaningVi": "Không sao đâu.",
    "focusTones": [
      "Thanh 2 (méi)",
      "Thanh 1 (guān)"
    ],
    "tipVi": "Lên giọng mượt ở 没 (méi), giữ phẳng ở 关 (guān), nhẹ ở 系 (xi)."
  },
  {
    "id": "sp-hsk0-basic-7",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Tạm biệt",
    "hanzi": "再见，明天见。",
    "pinyin": "Zàijiàn, míngtiān jiàn.",
    "meaningVi": "Tạm biệt, ngày mai gặp lại.",
    "focusTones": [
      "Âm đầu lưỡi z",
      "Thanh 4 (zài, jiàn)"
    ],
    "tipVi": "Âm z không bật hơi, đặt đầu lưỡi chạm mặt sau răng cửa trên."
  },
  {
    "id": "sp-hsk0-basic-8",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Làm quen",
    "hanzi": "我姓王，叫小兰。",
    "pinyin": "Wǒ xìng Wáng, jiào Xiǎolán.",
    "meaningVi": "Tôi họ Vương, tên là Tiểu Lan.",
    "focusTones": [
      "Thanh mẫu x, j",
      "Thanh 2 (Wáng, lán)"
    ],
    "tipVi": "Phát âm x và j với mặt lưỡi ép nhẹ lên vòm miệng trước, không cuốn lưỡi."
  },
  {
    "id": "sp-hsk0-basic-9",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Quốc tịch",
    "hanzi": "我是越南人。",
    "pinyin": "Wǒ shì Yuènán rén.",
    "meaningVi": "Tôi là người Việt Nam.",
    "focusTones": [
      "Âm cuốn lưỡi sh, r",
      "Thanh 4 (shì, Yuè)"
    ],
    "tipVi": "Cuốn đầu lưỡi lên khi đọc 是 (shì) và 人 (rén)."
  },
  {
    "id": "sp-hsk0-basic-10",
    "level": "HSK0",
    "subDifficulty": "basic",
    "topic": "Học tập",
    "hanzi": "我学习汉语。",
    "pinyin": "Wǒ xuéxí Hànyǔ.",
    "meaningVi": "Tôi học tiếng Hán.",
    "focusTones": [
      "Vận mẫu ü (xué)",
      "Thanh 2 (xué, xí)"
    ],
    "tipVi": "Chữ u sau x thực chất là ü, cần tròn môi khi đọc xué."
  },
  {
    "id": "sp-hsk0-advanced-1",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Biến điệu thanh 3",
    "hanzi": "我很好，你呢？",
    "pinyin": "Wǒ hěn hǎo, nǐ ne?",
    "meaningVi": "Tôi rất khỏe, còn bạn thì sao?",
    "focusTones": [
      "3 thanh 3 liền nhau",
      "Thanh nhẹ ne"
    ],
    "tipVi": "Đọc nhóm 我很好 thành wó hén hǎo hoặc wǒ hén hǎo cho tự nhiên."
  },
  {
    "id": "sp-hsk0-advanced-2",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Biến điệu 一",
    "hanzi": "请给我一杯水。",
    "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
    "meaningVi": "Xin cho tôi một cốc nước.",
    "focusTones": [
      "Âm bật hơi q",
      "Biến điệu 一 (yì)"
    ],
    "tipVi": "Bật hơi mạnh ở 请 (qǐng); 一 đứng trước thanh 1 (bēi) đọc thành thanh 4 (yì)."
  },
  {
    "id": "sp-hsk0-advanced-3",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Biến điệu 一",
    "hanzi": "一个人走在大街上。",
    "pinyin": "Yí gè rén zǒu zài dàjiē shàng.",
    "meaningVi": "Một người đi trên phố lớn.",
    "focusTones": [
      "Biến điệu 一 (yí + thanh 4)",
      "Âm z"
    ],
    "tipVi": "一 đứng trước thanh 4 (gè) biến thành thanh 2: yí gè."
  },
  {
    "id": "sp-hsk0-advanced-4",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Biến điệu 不",
    "hanzi": "他不去北京。",
    "pinyin": "Tā bú qù Běijīng.",
    "meaningVi": "Anh ấy không đi Bắc Kinh.",
    "focusTones": [
      "Âm bật hơi t, q",
      "Biến điệu 不 (bú)"
    ],
    "tipVi": "Bật hơi rõ ở 他 (tā) và 去 (qù), chữ 不 đọc thanh 2 (bú)."
  },
  {
    "id": "sp-hsk0-advanced-5",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Âm bật hơi",
    "hanzi": "爸爸怕爬坡。",
    "pinyin": "Bàba pà pápō.",
    "meaningVi": "Bố sợ leo dốc.",
    "focusTones": [
      "Phân biệt b và p"
    ],
    "tipVi": "Chữ b không bật hơi, chữ p bật luồng hơi mạnh ra khỏi hai môi."
  },
  {
    "id": "sp-hsk0-advanced-6",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Cuốn lưỡi",
    "hanzi": "四是四，十是十。",
    "pinyin": "Sì shì sì, shí shì shí.",
    "meaningVi": "Bốn là bốn, mười là mười.",
    "focusTones": [
      "Phân biệt s và sh"
    ],
    "tipVi": "Giữ đầu lưỡi thẳng ở 四 (sì), cuốn lưỡi lên rõ rệt ở 是 (shì) và 十 (shí)."
  },
  {
    "id": "sp-hsk0-advanced-7",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Âm j/q/x",
    "hanzi": "请你大声读一遍。",
    "pinyin": "Qǐng nǐ dàshēng dú yí biàn.",
    "meaningVi": "Xin bạn đọc to một lần.",
    "focusTones": [
      "Âm bật hơi q",
      "Biến điệu 一 (yí)"
    ],
    "tipVi": "Mở khẩu hình rõ ở 大声 (dàshēng), giữ chắc thanh 4 ở 遍 (biàn)."
  },
  {
    "id": "sp-hsk0-advanced-8",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Quy tắc viết",
    "hanzi": "写汉字要先横后竖。",
    "pinyin": "Xiě Hànzì yào xiān héng hòu shù.",
    "meaningVi": "Viết chữ Hán phải ngang trước sổ sau.",
    "focusTones": [
      "Âm z, sh",
      "Thanh 4 (Hàn, zì, yào, hòu, shù)"
    ],
    "tipVi": "Chú ý chuỗi thanh 4 cuối câu, giữ nhịp dứt khoát không bị kéo dài."
  },
  {
    "id": "sp-hsk0-advanced-9",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Bộ thủ",
    "hanzi": "河字左边是三点水。",
    "pinyin": "Hé zì zuǒbiān shì sāndiǎnshuǐ.",
    "meaningVi": "Chữ Hà bên trái là bộ Tam chấm thủy.",
    "focusTones": [
      "Âm h, z, sh",
      "Biến điệu thanh 3"
    ],
    "tipVi": "Đọc rõ 三点水 (sān dián shuǐ) với chữ 点 biến thành thanh 2 trước 水."
  },
  {
    "id": "sp-hsk0-advanced-10",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "topic": "Luyện phát âm",
    "hanzi": "他的发音非常标准。",
    "pinyin": "Tā de fāyīn fēicháng biāozhǔn.",
    "meaningVi": "Phát âm của anh ấy vô cùng chuẩn.",
    "focusTones": [
      "Thanh 1 (fā, yīn, fēi, biāo)",
      "Âm cuốn lưỡi zh"
    ],
    "tipVi": "Giữ cao độ thanh 1 thật ổn định ở 发音 và 非常, cuốn lưỡi ở 准 (zhǔn)."
  },
  {
    "id": "sp-hsk1-basic-1",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Gia đình",
    "hanzi": "你家有几口人？",
    "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
    "meaningVi": "Nhà bạn có mấy người?",
    "focusTones": [
      "Biến điệu 几口 (jí kǒu)",
      "Âm bật hơi k"
    ],
    "tipVi": "Bật hơi mạnh ở 口 (kǒu), biến điệu 几 thành thanh 2."
  },
  {
    "id": "sp-hsk1-basic-2",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Nghề nghiệp",
    "hanzi": "我爸爸是医生。",
    "pinyin": "Wǒ bàba shì yīshēng.",
    "meaningVi": "Bố tôi là bác sĩ.",
    "focusTones": [
      "Thanh 1 (yī, shēng)",
      "Âm cuốn lưỡi sh"
    ],
    "tipVi": "Đọc 医生 (yīshēng) ở tông cao và đều, kéo nhẹ."
  },
  {
    "id": "sp-hsk1-basic-3",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Tuổi tác",
    "hanzi": "我今年二十岁。",
    "pinyin": "Wǒ jīnnián èrshí suì.",
    "meaningVi": "Năm nay tôi hai mươi tuổi.",
    "focusTones": [
      "Âm r (èr)",
      "Âm s (suì)"
    ],
    "tipVi": "Cuốn lưỡi ở 二 (èr), đầu lưỡi thẳng ở 岁 (suì)."
  },
  {
    "id": "sp-hsk1-basic-4",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Giờ giấc",
    "hanzi": "现在是上午八点半。",
    "pinyin": "Xiànzài shì shàngwǔ bā diǎn bàn.",
    "meaningVi": "Bây giờ là 8 giờ rưỡi sáng.",
    "focusTones": [
      "Thanh 4 (xiàn, zài, shì, shàng, bàn)"
    ],
    "tipVi": "Nhấn rõ các thanh 4 nhưng giữ nhịp câu tự nhiên, không ngắt quãng."
  },
  {
    "id": "sp-hsk1-basic-5",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Ngày tháng",
    "hanzi": "今天是十月五号。",
    "pinyin": "Jīntiān shì shí yuè wǔ hào.",
    "meaningVi": "Hôm nay là ngày mùng 5 tháng 10.",
    "focusTones": [
      "Vận mẫu üe (yuè)",
      "Thanh 2 (shí)"
    ],
    "tipVi": "Tròn môi khi đọc 月 (yuè), rơi giọng nhanh ở thanh 4."
  },
  {
    "id": "sp-hsk1-basic-6",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Ẩm thực",
    "hanzi": "你喜欢吃中国菜吗？",
    "pinyin": "Nǐ xǐhuan chī Zhōngguó cài ma?",
    "meaningVi": "Bạn có thích ăn món Trung Quốc không?",
    "focusTones": [
      "Âm bật hơi ch, c",
      "Thanh nhẹ huan, ma"
    ],
    "tipVi": "Bật hơi mạnh ở 吃 (chī) và 菜 (cài), cuốn lưỡi ở 吃 và 中."
  },
  {
    "id": "sp-hsk1-basic-7",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Đồ uống",
    "hanzi": "我很喜欢喝奶茶。",
    "pinyin": "Wǒ hěn xǐhuan hē nǎichá.",
    "meaningVi": "Tôi rất thích uống trà sữa.",
    "focusTones": [
      "Âm h (hěn, hē)",
      "Âm bật hơi ch (chá)"
    ],
    "tipVi": "Đọc 喝 (hē) với luồng hơi ma sát nhẹ ở cuống họng, bật hơi ở 茶."
  },
  {
    "id": "sp-hsk1-basic-8",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Đồ vật",
    "hanzi": "桌子上有一台电脑。",
    "pinyin": "Zhuōzi shàng yǒu yì tái diànnǎo.",
    "meaningVi": "Trên bàn có một chiếc máy tính.",
    "focusTones": [
      "Âm cuốn lưỡi zh",
      "Âm bật hơi t (tái)"
    ],
    "tipVi": "Chú ý thanh 3 nửa ở 脑 (nǎo) và thanh nhẹ ở 子 (zi)."
  },
  {
    "id": "sp-hsk1-basic-9",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Mua sắm",
    "hanzi": "我下午去商店买水果。",
    "pinyin": "Wǒ xiàwǔ qù shāngdiàn mǎi shuǐguǒ.",
    "meaningVi": "Chiều nay tôi đi cửa hàng mua hoa quả.",
    "focusTones": [
      "Biến điệu 水果 (shuíguǒ)",
      "Âm q, sh"
    ],
    "tipVi": "Đọc 水果 thành shuíguǒ theo quy tắc biến điệu thanh 3."
  },
  {
    "id": "sp-hsk1-basic-10",
    "level": "HSK1",
    "subDifficulty": "basic",
    "topic": "Giải trí",
    "hanzi": "晚上我们在家看电视。",
    "pinyin": "Wǎnshang wǒmen zài jiā kàn diànshì.",
    "meaningVi": "Buổi tối chúng tôi ở nhà xem tivi.",
    "focusTones": [
      "Âm bật hơi k (kàn)",
      "Thanh nhẹ shang, men"
    ],
    "tipVi": "Nhấn vào 看电视 (kàn diànshì), đọc nhẹ 晚上 và 我们."
  },
  {
    "id": "sp-hsk1-advanced-1",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Hỏi giá",
    "hanzi": "请问，这件衣服多少钱？",
    "pinyin": "Qǐngwèn, zhè jiàn yīfu duōshao qián?",
    "meaningVi": "Xin hỏi, chiếc áo này bao nhiêu tiền?",
    "focusTones": [
      "Âm bật hơi q (qǐng, qián)",
      "Thanh nhẹ fu, shao"
    ],
    "tipVi": "Bật hơi rõ ở 请 và 钱, lên giọng nhẹ ở cuối câu hỏi."
  },
  {
    "id": "sp-hsk1-advanced-2",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Mua hoa quả",
    "hanzi": "苹果怎么卖？十块钱三斤。",
    "pinyin": "Píngguǒ zěnme mài? Shí kuài qián sān jīn.",
    "meaningVi": "Táo bán thế nào? Mười tệ ba cân.",
    "focusTones": [
      "Âm bật hơi p, k, q",
      "Âm đầu lưỡi z"
    ],
    "tipVi": "Phân biệt thanh 3 买 (mǎi - mua) và thanh 4 卖 (mài - bán)."
  },
  {
    "id": "sp-hsk1-advanced-3",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Gọi trà sữa",
    "hanzi": "我想买两杯少糖冰奶茶。",
    "pinyin": "Wǒ xiǎng mǎi liǎng bēi shǎo táng bīng nǎichá.",
    "meaningVi": "Tôi muốn mua hai cốc trà sữa đá ít đường.",
    "focusTones": [
      "Chuỗi thanh 3 (wǒ xiǎng mǎi liǎng)",
      "Âm bật hơi t, ch"
    ],
    "tipVi": "Ngắt nhịp tự nhiên: Wǒ xiáng mǎi / liǎng bēi / shǎo táng bīng nǎichá."
  },
  {
    "id": "sp-hsk1-advanced-4",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Nhà hàng",
    "hanzi": "服务员，请给我一碗牛肉面。",
    "pinyin": "Fúwùyuán, qǐng gěi wǒ yì wǎn niúròumiàn.",
    "meaningVi": "Phục vụ ơi, cho tôi một bát mì bò.",
    "focusTones": [
      "Vận mẫu üan (yuán)",
      "Biến điệu 一 (yì)"
    ],
    "tipVi": "Tròn môi ở 员 (yuán), đọc nối mượt 一碗牛肉面."
  },
  {
    "id": "sp-hsk1-advanced-5",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Thanh toán",
    "hanzi": "可以用微信支付吗？",
    "pinyin": "Kěyǐ yòng Wēixìn zhīfù ma?",
    "meaningVi": "Có thể thanh toán bằng WeChat không?",
    "focusTones": [
      "Biến điệu 可以 (kéyǐ)",
      "Âm cuốn lưỡi zh"
    ],
    "tipVi": "Đọc 可以 thành kéyǐ, giữ thanh 1 ở 微 (wēi) và 支 (zhī)."
  },
  {
    "id": "sp-hsk1-advanced-6",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Hỏi đường",
    "hanzi": "请问，火车站在哪儿？",
    "pinyin": "Qǐngwèn, huǒchēzhàn zài nǎr?",
    "meaningVi": "Xin hỏi, ga tàu hỏa ở đâu?",
    "focusTones": [
      "Âm uốn lưỡi 儿化 (nǎr)",
      "Âm bật hơi ch"
    ],
    "tipVi": "Uốn nhẹ đầu lưỡi khi kết thúc âm nǎr (哪儿)."
  },
  {
    "id": "sp-hsk1-advanced-7",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Di chuyển",
    "hanzi": "我们坐出租车去机场吧。",
    "pinyin": "Wǒmen zuò chūzūchē qù jīchǎng ba.",
    "meaningVi": "Chúng ta đi taxi ra sân bay nhé.",
    "focusTones": [
      "Phân biệt ch và z trong 出租车"
    ],
    "tipVi": "Cuốn lưỡi ở 出 (chū) và 车 (chē), thả thẳng lưỡi ở 租 (zū)."
  },
  {
    "id": "sp-hsk1-advanced-8",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Thời tiết",
    "hanzi": "北京的冬天非常冷。",
    "pinyin": "Běijīng de dōngtiān fēicháng lěng.",
    "meaningVi": "Mùa đông Bắc Kinh vô cùng lạnh.",
    "focusTones": [
      "Thanh 1 (dōng, tiān, fēi)",
      "Thanh 3 (lěng)"
    ],
    "tipVi": "Đọc sâu và rõ thanh 3 ở cuối câu 冷 (lěng)."
  },
  {
    "id": "sp-hsk1-advanced-9",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Điện thoại",
    "hanzi": "喂，请问张先生在公司吗？",
    "pinyin": "Wéi, qǐngwèn Zhāng xiānsheng zài gōngsī ma?",
    "meaningVi": "Alo, xin hỏi ông Trương có ở công ty không?",
    "focusTones": [
      "Thanh 2 (wéi)",
      "Âm s (sī)"
    ],
    "tipVi": "Khi nghe điện thoại, 喂 thường đọc thanh 2 (wéi) để tạo cảm giác lịch sự."
  },
  {
    "id": "sp-hsk1-advanced-10",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "topic": "Chúc tụng",
    "hanzi": "祝你一路平安，旅途愉快！",
    "pinyin": "Zhù nǐ yílù píng'ān, lǚtú yúkuài!",
    "meaningVi": "Chúc bạn thượng lộ bình an, chuyến đi vui vẻ!",
    "focusTones": [
      "Biến điệu 一 (yílù)",
      "Vận mẫu ü (lǚ, yú)"
    ],
    "tipVi": "Tròn môi rõ ở 旅 (lǚ) và 愉 (yú), nhấn mạnh tinh thần vui tươi."
  },
  {
    "id": "sp-hsk2-basic-1",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Thói quen",
    "hanzi": "我每天早上六点起床。",
    "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.",
    "meaningVi": "Mỗi sáng tôi thức dậy lúc 6 giờ.",
    "focusTones": [
      "Âm bật hơi q, ch",
      "Thanh 2 (chuáng)"
    ],
    "tipVi": "Bật hơi mạnh ở 起 (qǐ) và 床 (chuáng), cuốn lưỡi ở 床."
  },
  {
    "id": "sp-hsk2-basic-2",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Thể thao",
    "hanzi": "他常常去公园跑步。",
    "pinyin": "Tā chángcháng qù gōngyuán pǎobù.",
    "meaningVi": "Anh ấy thường xuyên đi công viên chạy bộ.",
    "focusTones": [
      "Âm bật hơi t, ch, q, p"
    ],
    "tipVi": "Chú ý bật hơi đủ ở cả 4 chữ 他, 常, 去, 跑."
  },
  {
    "id": "sp-hsk2-basic-3",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Giao thông",
    "hanzi": "坐地铁到公司要半个小时。",
    "pinyin": "Zuò dìtiě dào gōngsī yào bàn gè xiǎoshí.",
    "meaningVi": "Đi tàu điện ngầm đến công ty mất nửa tiếng.",
    "focusTones": [
      "Thanh 4 (zuò, dì, dào, yào, bàn)",
      "Âm s, sh"
    ],
    "tipVi": "Phân biệt rõ 司 (sī - thẳng lưỡi) và 时 (shí - cuốn lưỡi)."
  },
  {
    "id": "sp-hsk2-basic-4",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Thời tiết",
    "hanzi": "外面正在下雨，别忘了带伞。",
    "pinyin": "Wàimiàn zhèngzài xiàyǔ, bié wàng le dài sǎn.",
    "meaningVi": "Bên ngoài đang mưa, đừng quên mang ô.",
    "focusTones": [
      "Âm cuốn lưỡi zh",
      "Âm s (sǎn)"
    ],
    "tipVi": "Ngắt nhẹ sau 下雨, đọc rõ 别忘了 (bié wàng le)."
  },
  {
    "id": "sp-hsk2-basic-5",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "So sánh",
    "hanzi": "今天比昨天冷多了。",
    "pinyin": "Jīntiān bǐ zuótiān lěng duō le.",
    "meaningVi": "Hôm nay lạnh hơn hôm qua nhiều.",
    "focusTones": [
      "Âm z (zuó)",
      "Thanh 3 (bǐ, lěng)"
    ],
    "tipVi": "Đọc nửa thanh 3 ở 比 và 冷, nhấn vào 多了 (duō le)."
  },
  {
    "id": "sp-hsk2-basic-6",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Sức khỏe",
    "hanzi": "医生让我多喝热水，多休息。",
    "pinyin": "Yīshēng ràng wǒ duō hē rèshuǐ, duō xiūxi.",
    "meaningVi": "Bác sĩ bảo tôi uống nhiều nước ấm, nghỉ ngơi nhiều.",
    "focusTones": [
      "Âm cuốn lưỡi r, sh",
      "Thanh nhẹ xi"
    ],
    "tipVi": "Cuốn lưỡi rõ ở 让 (ràng), 热 (rè) và 水 (shuǐ)."
  },
  {
    "id": "sp-hsk2-basic-7",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Trải nghiệm",
    "hanzi": "我去过北京，没去过上海。",
    "pinyin": "Wǒ qù guo Běijīng, méi qù guo Shànghǎi.",
    "meaningVi": "Tôi từng đi Bắc Kinh rồi, chưa từng đi Thượng Hải.",
    "focusTones": [
      "Trợ từ 过 (guo - thanh nhẹ)"
    ],
    "tipVi": "Đọc nhẹ và lướt chữ 过 (guo), không nhấn mạnh thành thanh 4."
  },
  {
    "id": "sp-hsk2-basic-8",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Giải trí",
    "hanzi": "电影七点半开始，我们快走吧。",
    "pinyin": "Diànyǐng qī diǎn bàn kāishǐ, wǒmen kuài zǒu ba.",
    "meaningVi": "Phim bắt đầu lúc 7h30, chúng ta đi nhanh thôi.",
    "focusTones": [
      "Âm bật hơi q, k",
      "Âm z (zǒu)"
    ],
    "tipVi": "Giữ nhịp khẩn trương tự nhiên ở vế sau 我们快走吧."
  },
  {
    "id": "sp-hsk2-basic-9",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Chỉ đường",
    "hanzi": "公共汽车站就在前面往左拐。",
    "pinyin": "Gōnggòng qìchēzhàn jiù zài qiánmiàn wǎng zuǒ guǎi.",
    "meaningVi": "Trạm xe buýt ở ngay phía trước rẽ trái.",
    "focusTones": [
      "Âm bật hơi q, ch",
      "Biến điệu 往左 (wáng zuǒ)"
    ],
    "tipVi": "Đọc 往左拐 thành wáng zuó guǎi với hai lần biến điệu thanh 3."
  },
  {
    "id": "sp-hsk2-basic-10",
    "level": "HSK2",
    "subDifficulty": "basic",
    "topic": "Quà tặng",
    "hanzi": "我准备送她一块手表。",
    "pinyin": "Wǒ zhǔnbèi sòng tā yí kuài shǒubiǎo.",
    "meaningVi": "Tôi chuẩn bị tặng cô ấy một chiếc đồng hồ đeo tay.",
    "focusTones": [
      "Biến điệu 一 (yí kuài)",
      "Biến điệu 手表 (shóubiǎo)"
    ],
    "tipVi": "Chú ý 一块 đọc yí kuài và 手表 đọc shóubiǎo."
  },
  {
    "id": "sp-hsk2-advanced-1",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Mua sắm Taobao",
    "hanzi": "我在淘宝上买了一双运动鞋。",
    "pinyin": "Wǒ zài Táobǎo shàng mǎi le yì shuāng yùndòngxié.",
    "meaningVi": "Tôi đã mua một đôi giày thể thao trên Taobao.",
    "focusTones": [
      "Âm bật hơi t (táo)",
      "Âm cuốn lưỡi sh (shuāng)"
    ],
    "tipVi": "Tròn môi khi đọc 双 (shuāng) và 运 (yùn)."
  },
  {
    "id": "sp-hsk2-advanced-2",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Hỏi giao hàng",
    "hanzi": "请问今天能发货吗？包邮吗？",
    "pinyin": "Qǐngwèn jīntiān néng fāhuò ma? Bāoyóu ma?",
    "meaningVi": "Xin hỏi hôm nay có thể gửi hàng không? Có miễn phí ship không?",
    "focusTones": [
      "Âm bật hơi q",
      "Ngữ điệu câu hỏi"
    ],
    "tipVi": "Lên giọng nhẹ ở cuối hai câu hỏi 吗 để tạo âm điệu giao tiếp tự nhiên."
  },
  {
    "id": "sp-hsk2-advanced-3",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Nhận hàng",
    "hanzi": "您的快递已经到了小区门口。",
    "pinyin": "Nín de kuàidì yǐjīng dào le xiǎoqū ménkǒu.",
    "meaningVi": "Kiện hàng của ngài đã đến cổng khu dân cư rồi.",
    "focusTones": [
      "Âm bật hơi k, q",
      "Vận mẫu ü (qū)"
    ],
    "tipVi": "Tròn môi và bật hơi ở 区 (qū), giữ rõ âm cuối ở 门口 (ménkǒu)."
  },
  {
    "id": "sp-hsk2-advanced-4",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Khách sạn",
    "hanzi": "你好，我预订了一个标准间。",
    "pinyin": "Nǐ hǎo, wǒ yùdìng le yí gè biāozhǔnjiān.",
    "meaningVi": "Xin chào, tôi đã đặt trước một phòng tiêu chuẩn.",
    "focusTones": [
      "Vận mẫu ü (yù)",
      "Âm cuốn lưỡi zh (zhǔn)"
    ],
    "tipVi": "Nhấn rõ từ khóa 预订 (yùdìng) và 标准间 (biāozhǔnjiān)."
  },
  {
    "id": "sp-hsk2-advanced-5",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Thủ tục",
    "hanzi": "请出示您的护照或者身份证。",
    "pinyin": "Qǐng chūshì nín de hùzhào huòzhě shēnfènzhèng.",
    "meaningVi": "Vui lòng xuất trình hộ chiếu hoặc căn cước của ngài.",
    "focusTones": [
      "Chuỗi âm cuốn lưỡi ch, sh, zh"
    ],
    "tipVi": "Đọc chậm rãi, rõ ràng từng âm cuốn lưỡi: 出示, 护照, 身份证."
  },
  {
    "id": "sp-hsk2-advanced-6",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Khách sạn",
    "hanzi": "请问房间的无线网密码是多少？",
    "pinyin": "Qǐngwèn fángjiān de wúxiànwǎng mìmǎ shì duōshao?",
    "meaningVi": "Xin hỏi mật khẩu Wi-Fi của phòng là bao nhiêu?",
    "focusTones": [
      "Thanh 4 (xiàn, mì)",
      "Thanh 3 (wǎng, mǎ)"
    ],
    "tipVi": "Ngắt nhịp rõ: 房间的 / 无线网密码 / 是多少？"
  },
  {
    "id": "sp-hsk2-advanced-7",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Du lịch",
    "hanzi": "坐地铁二号线可以直达机场。",
    "pinyin": "Zuò dìtiě èr hào xiàn kěyǐ zhídá jīchǎng.",
    "meaningVi": "Đi tàu điện ngầm tuyến số 2 có thể tới thẳng sân bay.",
    "focusTones": [
      "Âm r (èr)",
      "Âm cuốn lưỡi zh, ch"
    ],
    "tipVi": "Đọc rõ 直达 (zhídá - thanh 2 nối thanh 2) và 机场 (jīchǎng)."
  },
  {
    "id": "sp-hsk2-advanced-8",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Vé máy bay",
    "hanzi": "这张机票可以免费改签吗？",
    "pinyin": "Zhè zhāng jīpiào kěyǐ miǎnfèi gǎiqiān ma?",
    "meaningVi": "Vé máy bay này có thể đổi giờ bay miễn phí không?",
    "focusTones": [
      "Âm bật hơi p, q",
      "Biến điệu 可以 (kéyǐ)"
    ],
    "tipVi": "Bật hơi mạnh ở 票 (piào) và 签 (qiān)."
  },
  {
    "id": "sp-hsk2-advanced-9",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Nhập hàng",
    "hanzi": "我打算今年暑假去广州进货。",
    "pinyin": "Wǒ dǎsuàn jīnnián shǔjià qù Guǎngzhōu jìnhuò.",
    "meaningVi": "Tôi dự định nghỉ hè năm nay đi Quảng Châu nhập hàng.",
    "focusTones": [
      "Âm cuốn lưỡi sh, zh",
      "Thanh 3 (dǎ, shǔ, Guǎng)"
    ],
    "tipVi": "Nhấn rõ cụm đích đến 去广州进货 (qù Guǎngzhōu jìnhuò)."
  },
  {
    "id": "sp-hsk2-advanced-10",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "topic": "Mặc cả",
    "hanzi": "老板，买多一点可以打折吗？",
    "pinyin": "Lǎobǎn, mǎi duō yìdiǎn kěyǐ dǎzhé ma?",
    "meaningVi": "Ông chủ, mua nhiều hơn một chút có được giảm giá không?",
    "focusTones": [
      "Biến điệu 老板 (láobǎn)",
      "Âm cuốn lưỡi zh (zhé)"
    ],
    "tipVi": "Giọng điệu thân thiện, nhấn nhẹ vào 打折 (dǎzhé)."
  },
  {
    "id": "sp-hsk3-basic-1",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Họp hành",
    "hanzi": "请大家把会议资料准备好。",
    "pinyin": "Qǐng dàjiā bǎ huìyì zīliào zhǔnbèi hǎo.",
    "meaningVi": "Xin mọi người hãy chuẩn bị xong tài liệu cuộc họp.",
    "focusTones": [
      "Câu chữ 把",
      "Âm z, zh"
    ],
    "tipVi": "Phân biệt thẳng lưỡi 资 (zī) và cuốn lưỡi 准 (zhǔn)."
  },
  {
    "id": "sp-hsk3-basic-2",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Báo cáo",
    "hanzi": "经理让你把这份报告发给他。",
    "pinyin": "Jīnglǐ ràng nǐ bǎ zhè fèn bàogào fā gěi tā.",
    "meaningVi": "Giám đốc bảo bạn gửi bản báo cáo này cho ông ấy.",
    "focusTones": [
      "Âm r (ràng)",
      "Thanh 4 (bào, gào)"
    ],
    "tipVi": "Ngắt nhịp tự nhiên sau 经理让你 và 这份报告."
  },
  {
    "id": "sp-hsk3-basic-3",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Email",
    "hanzi": "我刚给客户发了一封电子邮件。",
    "pinyin": "Wǒ gāng gěi kèhù fā le yì fēng diànzǐ yóujiàn.",
    "meaningVi": "Tôi vừa gửi một bức thư điện tử cho khách hàng.",
    "focusTones": [
      "Âm bật hơi k (kè)",
      "Biến điệu 一 (yì fēng)"
    ],
    "tipVi": "Đọc rõ 电子邮件 (diànzǐ yóujiàn), giữ thanh 3 nhẹ ở 子."
  },
  {
    "id": "sp-hsk3-basic-4",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Xin nghỉ phép",
    "hanzi": "因为感冒发烧，他今天请假了。",
    "pinyin": "Yīnwèi gǎnmào fāshāo, tā jīntiān qǐngjià le.",
    "meaningVi": "Vì cảm cúm sốt nên hôm nay anh ấy xin nghỉ phép rồi.",
    "focusTones": [
      "Âm cuốn lưỡi sh (shāo)",
      "Âm bật hơi q (qǐng)"
    ],
    "tipVi": "Nhấn vào nguyên nhân 感冒发烧 và kết quả 请假了."
  },
  {
    "id": "sp-hsk3-basic-5",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Động viên",
    "hanzi": "只要努力学习，汉语水平一定会提高。",
    "pinyin": "Zhǐyào nǔlì xuéxí, Hànyǔ shuǐpíng yídìng huì tígāo.",
    "meaningVi": "Chỉ cần nỗ lực học tập, trình độ tiếng Hán nhất định sẽ nâng cao.",
    "focusTones": [
      "Cặp liên từ 只要...就/一定",
      "Biến điệu 一 (yídìng)"
    ],
    "tipVi": "Nhấn giọng tự tin vào 一定会提高 (yídìng huì tígāo)."
  },
  {
    "id": "sp-hsk3-basic-6",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Sở thích",
    "hanzi": "周末我喜欢在家里一边喝茶一边看书。",
    "pinyin": "Zhōumò wǒ xǐhuan zài jiālǐ yìbiān hē chá yìbiān kànshū.",
    "meaningVi": "Cuối tuần tôi thích ở nhà vừa uống trà vừa đọc sách.",
    "focusTones": [
      "Cấu trúc 一边...一边...",
      "Âm cuốn lưỡi zh, ch, sh"
    ],
    "tipVi": "Đọc nhịp nhàng, đều đặn ở hai vế 一边喝茶 / 一边看书."
  },
  {
    "id": "sp-hsk3-basic-7",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Ngoại ngữ",
    "hanzi": "除了英语以外，她还会说流利的汉语。",
    "pinyin": "Chúle Yīngyǔ yǐwài, tā hái huì shuō liúlì de Hànyǔ.",
    "meaningVi": "Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Hán lưu loát.",
    "focusTones": [
      "Cấu trúc 除了...以外，还...",
      "Âm bật hơi ch"
    ],
    "tipVi": "Nhấn mạnh vào vế bổ sung 还会说流利的汉语."
  },
  {
    "id": "sp-hsk3-basic-8",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Thời tiết",
    "hanzi": "根据天气预报，明天下午会有大风。",
    "pinyin": "Gēnjù tiānqì yùbào, míngtiān xiàwǔ huì yǒu dàfēng.",
    "meaningVi": "Theo dự báo thời tiết, chiều mai sẽ có gió lớn.",
    "focusTones": [
      "Vận mẫu ü (jù, yù)",
      "Thanh 4 (jù, qì, yù, bào)"
    ],
    "tipVi": "Tròn môi rõ ở 据 (jù) và 预 (yù)."
  },
  {
    "id": "sp-hsk3-basic-9",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Sức khỏe",
    "hanzi": "虽然工作很忙，但是要注意锻炼身体。",
    "pinyin": "Suīrán gōngzuò hěn máng, dànshì yào zhùyì duànliàn shēntǐ.",
    "meaningVi": "Tuy công việc rất bận nhưng phải chú ý rèn luyện sức khỏe.",
    "focusTones": [
      "Cặp liên từ 虽然...但是...",
      "Âm s, r, sh"
    ],
    "tipVi": "Nhấn vào vế chuyển ý 但是要注意锻炼身体."
  },
  {
    "id": "sp-hsk3-basic-10",
    "level": "HSK3",
    "subDifficulty": "basic",
    "topic": "Phỏng vấn",
    "hanzi": "参加面试的时候应该穿正式一点的衣服。",
    "pinyin": "Cānjiā miànshì de shíhou yīnggāi chuān zhèngshì yìdiǎn de yīfu.",
    "meaningVi": "Khi tham gia phỏng vấn nên mặc trang phục trang trọng một chút.",
    "focusTones": [
      "Âm bật hơi c, ch",
      "Âm cuốn lưỡi sh, zh"
    ],
    "tipVi": "Bật hơi rõ ở 参 (cān) và 穿 (chuān), giữ rõ 正式 (zhèngshì)."
  },
  {
    "id": "sp-hsk3-advanced-1",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Bán sỉ 1688",
    "hanzi": "老板你好，我是做越南批发生意的。",
    "pinyin": "Lǎobǎn nǐ hǎo, wǒ shì zuò Yuènán pīfā shēngyi de.",
    "meaningVi": "Chào ông chủ, tôi làm kinh doanh bán sỉ tại Việt Nam.",
    "focusTones": [
      "Âm bật hơi p (pī)",
      "Thanh nhẹ yi"
    ],
    "tipVi": "Giọng điệu tự tin, chuyên nghiệp; nhấn vào 批发生意."
  },
  {
    "id": "sp-hsk3-advanced-2",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Hỏi MOQ",
    "hanzi": "这款产品的最低起订量是多少？",
    "pinyin": "Zhè kuǎn chǎnpǐn de zuìdī qǐdìngliàng shì duōshao?",
    "meaningVi": "Số lượng đặt hàng tối thiểu của mẫu sản phẩm này là bao nhiêu?",
    "focusTones": [
      "Âm bật hơi k, ch, p, q"
    ],
    "tipVi": "Đọc rõ thuật ngữ thương mại 起订量 (qǐdìngliàng)."
  },
  {
    "id": "sp-hsk3-advanced-3",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Mặc cả giá sỉ",
    "hanzi": "如果订五百件，单价还能再优惠吗？",
    "pinyin": "Rúguǒ dìng wǔbǎi jiàn, dānjià hái néng zài yōuhuì ma?",
    "meaningVi": "Nếu đặt 500 chiếc, đơn giá có thể ưu đãi thêm nữa không?",
    "focusTones": [
      "Biến điệu 五百 (wúbǎi)",
      "Thanh 4 (dìng, jiàn, jià, zài, huì)"
    ],
    "tipVi": "Nhấn vào số lượng 五百件 và từ khóa 优惠 (yōuhuì)."
  },
  {
    "id": "sp-hsk3-advanced-4",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Lấy hàng mẫu",
    "hanzi": "我想先拿两个样品看看质量怎么样。",
    "pinyin": "Wǒ xiǎng xiān ná liǎng gè yàngpǐn kànkan zhìliàng zěnmeyàng.",
    "meaningVi": "Tôi muốn lấy trước hai mẫu thử để xem chất lượng thế nào.",
    "focusTones": [
      "Âm bật hơi p, k",
      "Âm cuốn lưỡi zh"
    ],
    "tipVi": "Đọc liền mạch 样品 (yàngpǐn) và 质量 (zhìliàng)."
  },
  {
    "id": "sp-hsk3-advanced-5",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Báo giá",
    "hanzi": "请把产品目录和报价单发到我的微信。",
    "pinyin": "Qǐng bǎ chǎnpǐn mùlù hé bàojiàdān fā dào wǒ de Wēixìn.",
    "meaningVi": "Vui lòng gửi danh mục sản phẩm và bảng báo giá vào WeChat của tôi.",
    "focusTones": [
      "Câu chữ 把",
      "Từ vựng 报价单"
    ],
    "tipVi": "Ngắt nhịp rõ: 产品目录和报价单 / 发到我的微信."
  },
  {
    "id": "sp-hsk3-advanced-6",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Kho logistics",
    "hanzi": "请帮我把货物发到广西凭祥物流仓。",
    "pinyin": "Qǐng bāng wǒ bǎ huòwù fā dào Guǎngxī Píngxiáng wùliúcāng.",
    "meaningVi": "Vui lòng giúp tôi gửi hàng đến kho logistics Bằng Tường Quảng Tây.",
    "focusTones": [
      "Âm bật hơi p, c",
      "Địa danh 广西凭祥"
    ],
    "tipVi": "Đọc rõ địa danh 广西凭祥 (Guǎngxī Píngxiáng) và 物流仓 (wùliúcāng)."
  },
  {
    "id": "sp-hsk3-advanced-7",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Đóng gói",
    "hanzi": "外箱包装一定要结实，防止运输损坏。",
    "pinyin": "Wàixiāng bāozhuāng yídìng yào jiēshi, fángzhǐ yùnshū sǔnhuài.",
    "meaningVi": "Đóng gói thùng ngoài nhất định phải chắc chắn để tránh hư hại khi vận chuyển.",
    "focusTones": [
      "Âm cuốn lưỡi zh, sh",
      "Âm s (sǔn)"
    ],
    "tipVi": "Nhấn mạnh yêu cầu 一定要结实 (nhất định phải chắc chắn)."
  },
  {
    "id": "sp-hsk3-advanced-8",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Thanh toán",
    "hanzi": "我们先付百分之三十的定金。",
    "pinyin": "Wǒmen xiān fù bǎifēn zhī sānshí de dìngjīn.",
    "meaningVi": "Chúng tôi thanh toán trước 30% tiền đặt cọc.",
    "focusTones": [
      "Cách đọc phần trăm 百分之...",
      "Âm s, sh"
    ],
    "tipVi": "Đọc rõ cụm 百分之三十 (bǎifēn zhī sānshí) và 定金 (dìngjīn)."
  },
  {
    "id": "sp-hsk3-advanced-9",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Đổi trả",
    "hanzi": "如果发现有质量问题，工厂负责退换。",
    "pinyin": "Rúguǒ fāxiàn yǒu zhìliàng wèntí, gōngchǎng fùzé tuìhuàn.",
    "meaningVi": "Nếu phát hiện có vấn đề chất lượng, nhà máy chịu trách nhiệm đổi trả.",
    "focusTones": [
      "Âm cuốn lưỡi zh, ch",
      "Âm z (zé)"
    ],
    "tipVi": "Nhấn rõ điều kiện 质量问题 và trách nhiệm 负责退换."
  },
  {
    "id": "sp-hsk3-advanced-10",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "topic": "Hợp tác",
    "hanzi": "希望我们能够建立长期的合作关系。",
    "pinyin": "Xīwàng wǒmen nénggòu jiànlì chángqī de hézuò guānxi.",
    "meaningVi": "Hy vọng chúng ta có thể thiết lập mối quan hệ hợp tác lâu dài.",
    "focusTones": [
      "Âm bật hơi ch, q",
      "Âm z (zuò)"
    ],
    "tipVi": "Giọng chân thành, nhấn vào 长期的合作关系."
  },
  {
    "id": "sp-hsk4-basic-1",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Công nghệ",
    "hanzi": "随着科技的发展，人们的消费习惯发生了巨大变化。",
    "pinyin": "Suízhe kējì de fāzhǎn, rénmen de xiāofèi xíguàn fāshēng le jùdà biànhuà.",
    "meaningVi": "Cùng với sự phát triển của công nghệ, thói quen tiêu dùng của mọi người đã thay đổi to lớn.",
    "focusTones": [
      "Cấu trúc 随着...",
      "Âm s, zh, sh"
    ],
    "tipVi": "Đọc trôi chảy cụm 随着科技的发展, ngắt hơi nhẹ ở dấu phẩy."
  },
  {
    "id": "sp-hsk4-basic-2",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Du lịch số",
    "hanzi": "在中国出门旅游，只要带一部手机就足够了。",
    "pinyin": "Zài Zhōngguó chūmén lǚyóu, zhǐyào dài yí bù shǒujī jiù zúgòu le.",
    "meaningVi": "Đi du lịch ở Trung Quốc chỉ cần mang theo một chiếc điện thoại là đủ.",
    "focusTones": [
      "Vận mẫu ü (lǚ)",
      "Biến điệu 一 (yí bù)"
    ],
    "tipVi": "Nhấn vào 只要...就足够了 để thể hiện sự tiện lợi."
  },
  {
    "id": "sp-hsk4-basic-3",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Tàu cao tốc",
    "hanzi": "中国的高铁不仅速度非常快，而且十分准时舒适。",
    "pinyin": "Zhōngguó de gāotiě bùjǐn sùdù fēicháng kuài, érqiě shífēn zhǔnshí shūshì.",
    "meaningVi": "Tàu cao tốc Trung Quốc không những tốc độ rất nhanh mà còn vô cùng đúng giờ và thoải mái.",
    "focusTones": [
      "Cặp liên từ 不仅...而且...",
      "Âm cuốn lưỡi sh, zh"
    ],
    "tipVi": "Đọc rõ chuỗi âm cuốn lưỡi 十分准时舒适 (shífēn zhǔnshí shūshì)."
  },
  {
    "id": "sp-hsk4-basic-4",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Ẩm thực",
    "hanzi": "每个地方的饮食文化都与当地的气候有密切关系。",
    "pinyin": "Měi gè dìfang de yǐnshí wénhuà dōu yǔ dāngdì de qìhòu yǒu mìqiè guānxi.",
    "meaningVi": "Văn hóa ẩm thực mỗi nơi đều có quan hệ mật thiết với khí hậu địa phương.",
    "focusTones": [
      "Âm bật hơi q (qì, qiè)",
      "Cụm 与...有密切关系"
    ],
    "tipVi": "Nhấn rõ 密切关系 (mìqiè guānxi - quan hệ mật thiết)."
  },
  {
    "id": "sp-hsk4-basic-5",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Lễ hội",
    "hanzi": "春节是中国人一年当中最重要、最热闹的传统节日。",
    "pinyin": "Chūnjié shì Zhōngguó rén yì nián dāngzhōng zuì zhòngyào, zuì rènao de chuántǒng jiérì.",
    "meaningVi": "Tết Nguyên đán là lễ hội truyền thống quan trọng và náo nhiệt nhất trong năm của người Trung Quốc.",
    "focusTones": [
      "Âm bật hơi ch",
      "Âm r (rè, rì)"
    ],
    "tipVi": "Giữ cao độ và sự hào hứng khi nhấn 最重要、最热闹."
  },
  {
    "id": "sp-hsk4-basic-6",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Phong tục",
    "hanzi": "入乡随俗意味着到新的环境要尊重当地的风俗习惯。",
    "pinyin": "Rùxiāngsuísú yìwèizhe dào xīn de huánjìng yào zūnzhòng dāngdì de fēngsú xíguàn.",
    "meaningVi": "Nhập gia tùy tục có nghĩa là đến môi trường mới phải tôn trọng phong tục tập quán địa phương.",
    "focusTones": [
      "Thành ngữ 入乡随俗",
      "Âm z, zh trong 尊重"
    ],
    "tipVi": "Phân biệt thẳng lưỡi 尊 (zūn) và cuốn lưỡi 重 (zhòng)."
  },
  {
    "id": "sp-hsk4-basic-7",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Môi trường",
    "hanzi": "保护环境是每一个公民都应该承担的社会责任。",
    "pinyin": "Bǎohù huánjìng shì měi yí gè gōngmín dōu yīnggāi chéngdān de shèhuì zérèn.",
    "meaningVi": "Bảo vệ môi trường là trách nhiệm xã hội mà mỗi công dân đều nên gánh vác.",
    "focusTones": [
      "Âm bật hơi ch (chéng)",
      "Âm z, r (zérèn)"
    ],
    "tipVi": "Đọc trang trọng, nhấn vào 承担的社会责任."
  },
  {
    "id": "sp-hsk4-basic-8",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Trưởng thành",
    "hanzi": "失败并不可怕，重要的是从失败中总结经验教训。",
    "pinyin": "Shībài bìng bù kěpà, zhòngyào de shì cóng shībài zhōng zǒngjié jīngyàn jiàoxun.",
    "meaningVi": "Thất bại không hề đáng sợ, quan trọng là tổng kết bài học kinh nghiệm từ thất bại.",
    "focusTones": [
      "Âm bật hơi k, p, c",
      "Cụm 总结经验教训"
    ],
    "tipVi": "Nhấn vào 重要的是 để chuyển trọng tâm sang vế sau."
  },
  {
    "id": "sp-hsk4-basic-9",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Cuộc sống",
    "hanzi": "现代年轻人越来越重视工作与生活的平衡。",
    "pinyin": "Xiàndài niánqīngrén yuèláiyuè zhòngshì gōngzuò yǔ shēnghuó de pínghéng.",
    "meaningVi": "Giới trẻ hiện đại ngày càng coi trọng sự cân bằng giữa công việc và cuộc sống.",
    "focusTones": [
      "Âm bật hơi q, p",
      "Âm cuốn lưỡi zh, sh"
    ],
    "tipVi": "Đọc liền mạch 越来越重视 và 平衡 (pínghéng)."
  },
  {
    "id": "sp-hsk4-basic-10",
    "level": "HSK4",
    "subDifficulty": "basic",
    "topic": "Học ngoại ngữ",
    "hanzi": "要想在短时间内学好一门外语，坚持练习是关键。",
    "pinyin": "Yàoxiǎng zài duǎn shíjiān nèi xuéhǎo yì mén wàiyǔ, jiānchí liànxí shì guānjiàn.",
    "meaningVi": "Muốn học tốt một ngoại ngữ trong thời gian ngắn, kiên trì luyện tập là chìa khóa.",
    "focusTones": [
      "Biến điệu 一 (yì mén)",
      "Âm bật hơi ch (chí)"
    ],
    "tipVi": "Nhấn mạnh kết luận ở cuối câu: 坚持练习是关键."
  },
  {
    "id": "sp-hsk4-advanced-1",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Thương mại XBG",
    "hanzi": "近年来，中越跨境电商贸易规模保持快速增长。",
    "pinyin": "Jìnnián lái, Zhōng-Yuè kuàjìng diànshāng màoyì guīmó bǎochí kuàisù zēngzhǎng.",
    "meaningVi": "Những năm gần đây, quy mô thương mại điện tử xuyên biên giới Trung - Việt duy trì mức tăng trưởng nhanh.",
    "focusTones": [
      "Âm bật hơi k (kuà, kuài)",
      "Âm z, zh trong 增长"
    ],
    "tipVi": "Phân biệt thẳng lưỡi 增 (zēng) và cuốn lưỡi 长 (zhǎng)."
  },
  {
    "id": "sp-hsk4-advanced-2",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Hải quan",
    "hanzi": "请务必提前提供准确的装箱单和商业发票。",
    "pinyin": "Qǐng wùbì tíqián tígōng zhǔnquè de zhuāngxiāngdān hé shāngyè fāpiào.",
    "meaningVi": "Vui lòng nhất định cung cấp trước phiếu đóng gói và hóa đơn thương mại chính xác.",
    "focusTones": [
      "Âm bật hơi t, q, p",
      "Từ vựng 装箱单, 发票"
    ],
    "tipVi": "Nhấn vào 务必 (wùbì - nhất định phải) và 准确 (zhǔnquè)."
  },
  {
    "id": "sp-hsk4-advanced-3",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Chứng từ",
    "hanzi": "如果单证信息不符，可能会导致海关查验延误。",
    "pinyin": "Rúguǒ dānzhèng xìnxī bùfú, kěnéng huì dǎozhì hǎiguān cháyàn yánwù.",
    "meaningVi": "Nếu thông tin chứng từ không khớp, có thể dẫn đến chậm trễ do hải quan kiểm hóa.",
    "focusTones": [
      "Âm cuốn lưỡi zh, ch",
      "Thanh 2 (fú, chá, yán)"
    ],
    "tipVi": "Ngắt hơi sau 不符, đọc rõ thuật ngữ 海关查验 (hǎiguān cháyàn)."
  },
  {
    "id": "sp-hsk4-advanced-4",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Điều khoản FOB",
    "hanzi": "客户要求按照FOB深圳条款重新计算报价。",
    "pinyin": "Kèhù yāoqiú ànzhào FOB Shēnzhèn tiáokuǎn chóngxīn jìsuàn bàojià.",
    "meaningVi": "Khách hàng yêu cầu tính lại báo giá theo điều khoản FOB Thâm Quyến.",
    "focusTones": [
      "Âm bật hơi k, t, ch",
      "Âm cuốn lưỡi sh, zh"
    ],
    "tipVi": "Đọc rõ từng chữ cái F-O-B rồi nối sang 深圳条款 (Shēnzhèn tiáokuǎn)."
  },
  {
    "id": "sp-hsk4-advanced-5",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Thuế quan",
    "hanzi": "原产地证书可以帮进口商享受关税减免优惠。",
    "pinyin": "Yuánchǎndì zhèngshū kěyǐ bāng jìnkǒushāng xiǎngshòu guānshuì jiǎnmiǎn yōuhuì.",
    "meaningVi": "Giấy chứng nhận xuất xứ có thể giúp nhà nhập khẩu hưởng ưu đãi miễn giảm thuế quan.",
    "focusTones": [
      "Biến điệu 减免 (jiánmiǎn)",
      "Âm cuốn lưỡi ch, zh, sh"
    ],
    "tipVi": "Đọc rõ thuật ngữ 原产地证书 và 关税减免."
  },
  {
    "id": "sp-hsk4-advanced-6",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Livestream",
    "hanzi": "直播带货已经成为品牌推广最高效的渠道之一。",
    "pinyin": "Zhíbō dàihuò yǐjīng chéngwéi pǐnpái tuīguǎng zuì gāoxiào de qúdào zhī yī.",
    "meaningVi": "Livestream bán hàng đã trở thành một trong những kênh quảng bá thương hiệu hiệu quả nhất.",
    "focusTones": [
      "Âm bật hơi ch, p, t, q"
    ],
    "tipVi": "Nhấn vào 最高效 (zuì gāoxiào) và 渠道之一 (qúdào zhī yī)."
  },
  {
    "id": "sp-hsk4-advanced-7",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Hợp đồng",
    "hanzi": "双方在合同中明确规定了交货期限和违约责任。",
    "pinyin": "Shuāngfāng zài hétong zhōng míngquè guīdìng le jiāohuò qīxiàn hé wéiyuē zérèn.",
    "meaningVi": "Hai bên đã quy định rõ thời hạn giao hàng và trách nhiệm vi phạm trong hợp đồng.",
    "focusTones": [
      "Âm bật hơi q (què, qī)",
      "Vận mẫu üe (què, yuē)"
    ],
    "tipVi": "Tròn môi rõ ở 确 (què) và 约 (yuē)."
  },
  {
    "id": "sp-hsk4-advanced-8",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Kho ngoại quan",
    "hanzi": "我们在胡志明市设立了海外仓，支持一件代发。",
    "pinyin": "Wǒmen zài Húzhìmíng shì shèlì le hǎiwàicāng, zhīchí yí jiàn dàifā.",
    "meaningVi": "Chúng tôi đã lập kho ngoại quan tại TP.HCM, hỗ trợ dropshipping từng kiện.",
    "focusTones": [
      "Địa danh 胡志明市",
      "Biến điệu 一 (yí jiàn)"
    ],
    "tipVi": "Đọc chuẩn tên thành phố 胡志明市 và thuật ngữ 一件代发."
  },
  {
    "id": "sp-hsk4-advanced-9",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Kiểm định",
    "hanzi": "质检部门在抽查中发现了百分之二的次品率。",
    "pinyin": "Zhìjiǎn bùmén zài chōuchá zhōng fāxiàn le bǎifēn zhī èr de cìpǐnlǜ.",
    "meaningVi": "Bộ phận kiểm định chất lượng đã phát hiện tỷ lệ hàng lỗi 2% trong đợt kiểm tra xác suất.",
    "focusTones": [
      "Vận mẫu ü (lǜ)",
      "Âm bật hơi ch, c, p"
    ],
    "tipVi": "Tròn môi rõ ở 率 (lǜ), bật hơi dứt khoát ở 次品 (cìpǐn)."
  },
  {
    "id": "sp-hsk4-advanced-10",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "topic": "Hội chợ",
    "hanzi": "这次广交会为我们开拓东南亚市场提供了绝佳机会。",
    "pinyin": "Zhè cì Guǎngjiāohuì wèi wǒmen kāituò Dōngnányà shìchǎng tígōng le juéjiā jīhuì.",
    "meaningVi": "Hội chợ Canton Fair lần này đã mang lại cơ hội tuyệt vời để chúng tôi mở rộng thị trường Đông Nam Á.",
    "focusTones": [
      "Âm bật hơi c, k, t",
      "Cụm 为...提供..."
    ],
    "tipVi": "Đọc lưu loát, ngắt nhịp hợp lý sau 广交会 và 市场."
  },
  {
    "id": "sp-hsk5-basic-1",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Trí tuệ nhân tạo",
    "hanzi": "人工智能技术的广泛应用正在深刻改变传统行业。",
    "pinyin": "Réngōng zhìnéng jìshù de guǎngfàn yìngyòng zhèngzài shēnkè gǎibiàn chuántǒng hángyè.",
    "meaningVi": "Việc ứng dụng rộng rãi công nghệ trí tuệ nhân tạo đang làm thay đổi sâu sắc các ngành nghề truyền thống.",
    "focusTones": [
      "Âm r, zh, sh, ch",
      "Âm bật hơi k, ch, t"
    ],
    "tipVi": "Ngắt hơi nhẹ sau 广泛应用, nhấn vào 深刻改变."
  },
  {
    "id": "sp-hsk5-basic-2",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Tư duy",
    "hanzi": "独立思考的能力比单纯记忆书本知识更加重要。",
    "pinyin": "Dúlì sīkǎo de nénglì bǐ dānchún jìyì shūběn zhīshi gèngjiā zhòngyào.",
    "meaningVi": "Năng lực tư duy độc lập quan trọng hơn nhiều so với việc chỉ ghi nhớ kiến thức sách vở.",
    "focusTones": [
      "Âm s (sī) vs sh (shū, shi)",
      "Âm bật hơi k, ch"
    ],
    "tipVi": "Nhấn rõ sự đối lập giữa 独立思考 và 单纯记忆."
  },
  {
    "id": "sp-hsk5-basic-3",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Công sở",
    "hanzi": "面对激烈的职场竞争，终身学习已成为必然趋势。",
    "pinyin": "Miànduì jīliè de zhíchǎng jìngzhēng, zhōngshēn xuéxí yǐ chéngwéi bìrán qūshì.",
    "meaningVi": "Đối mặt với cạnh tranh khốc liệt nơi công sở, học tập suốt đời đã trở thành xu thế tất yếu.",
    "focusTones": [
      "Âm cuốn lưỡi zh, ch, sh, r",
      "Vận mẫu ü (xué, qū)"
    ],
    "tipVi": "Đọc trang trọng như phát thanh viên, nhấn vào 必然趋势."
  },
  {
    "id": "sp-hsk5-basic-4",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Giáo dục",
    "hanzi": "父母应该学会倾听孩子的想法，而不是一味地指责。",
    "pinyin": "Fùmǔ yīnggāi xuéhuì qīngtīng háizi de xiǎngfǎ, ér bú shì yíwèi de zhǐzé.",
    "meaningVi": "Cha mẹ nên học cách lắng nghe suy nghĩ của con cái chứ không phải một mực chỉ trích.",
    "focusTones": [
      "Cấu trúc ...而不是...",
      "Biến điệu 一 (yíwèi)"
    ],
    "tipVi": "Nhấn mạnh cặp đối lập 倾听 (lắng nghe) và 指责 (chỉ trích)."
  },
  {
    "id": "sp-hsk5-basic-5",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Năng lượng xanh",
    "hanzi": "新能源汽车的普及有助于减少城市的碳排放量。",
    "pinyin": "Xīn néngyuán qìchē de pǔjí yǒuzhùyú jiǎnshǎo chéngshì de tàn páifàngliàng.",
    "meaningVi": "Sự phổ cập của xe ô tô năng lượng mới giúp giảm lượng khí thải carbon của thành phố.",
    "focusTones": [
      "Âm bật hơi q, ch, p, t",
      "Cụm 有助于"
    ],
    "tipVi": "Đọc rõ thuật ngữ 碳排放量 (tàn páifàngliàng)."
  },
  {
    "id": "sp-hsk5-basic-6",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Quản trị rủi ro",
    "hanzi": "在做出重大决定之前，我们应当全面评估潜在风险。",
    "pinyin": "Zài zuòchū zhòngdà juédìng zhīqián, wǒmen yīngdāng quánmiàn pínggū qiánzài fēngxiǎn.",
    "meaningVi": "Trước khi đưa ra quyết định trọng đại, chúng ta nên đánh giá toàn diện các rủi ro tiềm ẩn.",
    "focusTones": [
      "Vận mẫu üe/üan (jué, quán)",
      "Âm bật hơi q, p"
    ],
    "tipVi": "Tròn môi rõ ở 决 (jué) và 全 (quán), nhấn vào 潜在风险."
  },
  {
    "id": "sp-hsk5-basic-7",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Giao tiếp",
    "hanzi": "良好的沟通技巧往往能化解人际关系中的许多矛盾。",
    "pinyin": "Liánghǎo de gōutōng jìqiǎo wǎngwǎng néng huàjiě rénjì guānxi zhōng de xǔduō máodùn.",
    "meaningVi": "Kỹ năng giao tiếp tốt thường có thể hóa giải nhiều mâu thuẫn trong các mối quan hệ xã hội.",
    "focusTones": [
      "Âm bật hơi t, q",
      "Biến điệu 往往 (wángwǎng)"
    ],
    "tipVi": "Đọc mượt cụm 化解...矛盾 (hóa giải mâu thuẫn)."
  },
  {
    "id": "sp-hsk5-basic-8",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Tiêu dùng",
    "hanzi": "消费者在网购时应当保持理性，避免盲目跟风消费。",
    "pinyin": "Xiāofèizhě zài wǎnggòu shí yīngdāng bǎochí lǐxìng, bìmiǎn mángmù gēnfēng xiāofèi.",
    "meaningVi": "Người tiêu dùng khi mua sắm online nên giữ sự lý tính, tránh tiêu dùng chạy theo đám đông một cách mù quáng.",
    "focusTones": [
      "Âm cuốn lưỡi zh, sh, ch",
      "Thanh 3 (zhě, wǎng, bǎo, lǐ)"
    ],
    "tipVi": "Nhấn rõ 保持理性 và 避免盲目跟风."
  },
  {
    "id": "sp-hsk5-basic-9",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Thực hành",
    "hanzi": "只有把理论知识与实际操作结合起来，才能真正掌握技能。",
    "pinyin": "Zhǐyǒu bǎ lǐlùn zhīshi yǔ shíjì cāozuò jiéhé qǐlái, cái néng zhēnzhèng zhǎngwò jìnéng.",
    "meaningVi": "Chỉ khi kết hợp kiến thức lý thuyết với thao tác thực tế mới có thể thực sự nắm vững kỹ năng.",
    "focusTones": [
      "Cấu trúc 只有...才能...",
      "Âm c, z trong 操作"
    ],
    "tipVi": "Phân biệt âm bật hơi 操 (cāo) và không bật hơi 作 (zuò)."
  },
  {
    "id": "sp-hsk5-basic-10",
    "level": "HSK5",
    "subDifficulty": "basic",
    "topic": "Quốc tế",
    "hanzi": "尊重文化多样性是促进国际友好合作的必要前提。",
    "pinyin": "Zūnzhòng wénhuà duōyàngxìng shì cùjìn guójì yǒuhǎo hézuò de bìyào qiántí.",
    "meaningVi": "Tôn trọng sự đa dạng văn hóa là tiền đề tất yếu để thúc đẩy hợp tác hữu nghị quốc tế.",
    "focusTones": [
      "Âm bật hơi c, q, t",
      "Biến điệu 友好 (yóuhǎo)"
    ],
    "tipVi": "Giữ ngữ điệu trang trọng, nhấn vào 必要前提."
  },
  {
    "id": "sp-hsk5-advanced-1",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Hợp đồng",
    "hanzi": "在签署正式合同之前，双方需要就付款方式达成一致。",
    "pinyin": "Zài qiānshǔ zhèngshì hétong zhīqián, shuāngfāng xūyào jiù fùkuǎn fāngshì dáchéng yízhì.",
    "meaningVi": "Trước khi ký kết hợp đồng chính thức, hai bên cần đạt được sự thống nhất về phương thức thanh toán.",
    "focusTones": [
      "Cụm 就...达成一致",
      "Biến điệu 一 (yízhì)"
    ],
    "tipVi": "Đọc trang trọng, nhấn rõ cụm 达成一致 (đạt được sự thống nhất)."
  },
  {
    "id": "sp-hsk5-advanced-2",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Tín dụng L/C",
    "hanzi": "对于首次合作的大额订单，我方建议采用不可撤销信用证。",
    "pinyin": "Duìyú shǒucì hézuò de dà'é dìngdān, wǒfāng jiànyì cǎiyòng bùkě chèxiāo xìnyòngzhèng.",
    "meaningVi": "Đối với đơn hàng giá trị lớn hợp tác lần đầu, phía chúng tôi đề nghị sử dụng thư tín dụng không thể hủy ngang.",
    "focusTones": [
      "Âm bật hơi c, ch",
      "Thuật ngữ 不可撤销信用证"
    ],
    "tipVi": "Ngắt hơi nhẹ sau 大额订单, đọc liền mạch 不可撤销信用证."
  },
  {
    "id": "sp-hsk5-advanced-3",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Độc quyền",
    "hanzi": "如果贵公司能保证年度采购量，我们可以授予越南独家代理权。",
    "pinyin": "Rúguǒ guì gōngsī néng bǎozhèng niándù cǎigòuliàng, wǒmen kěyǐ shòuyǔ Yuènán dújiā dàilǐquán.",
    "meaningVi": "Nếu quý công ty có thể đảm bảo sản lượng thu mua hàng năm, chúng tôi có thể trao quyền đại lý độc quyền tại Việt Nam.",
    "focusTones": [
      "Âm bật hơi c, q",
      "Thuật ngữ 独家代理权"
    ],
    "tipVi": "Nhấn rõ điều kiện 年度采购量 và quyền lợi 独家代理权."
  },
  {
    "id": "sp-hsk5-advanced-4",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Tỷ giá",
    "hanzi": "由于汇率波动较大，本报价单的有效期为十五个工作日。",
    "pinyin": "Yóuyú huìlǜ bōdòng jiào dà, běn bàojiàdān de yǒuxiàoqī wéi shíwǔ gè gōngzuòrì.",
    "meaningVi": "Do tỷ giá biến động khá lớn, thời hạn hiệu lực của bảng báo giá này là 15 ngày làm việc.",
    "focusTones": [
      "Vận mẫu ü (lǜ)",
      "Văn phong thương mại 为 (wéi)"
    ],
    "tipVi": "Tròn môi ở 率 (lǜ), đọc dứt khoát cụm 十五个工作日."
  },
  {
    "id": "sp-hsk5-advanced-5",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Bất khả kháng",
    "hanzi": "若因不可抗力因素导致延迟交货，双方应及时协商解决方案。",
    "pinyin": "Ruò yīn bùkěkànglì yīnsù dǎozhì yánchí jiāohuò, shuāngfāng yīng jíshí xiéshāng jiějué fāng'àn.",
    "meaningVi": "Nếu do yếu tố bất khả kháng dẫn đến giao hàng chậm trễ, hai bên cần kịp thời thương lượng phương án giải quyết.",
    "focusTones": [
      "Âm r (ruò)",
      "Thuật ngữ 不可抗力"
    ],
    "tipVi": "Đọc rõ thuật ngữ pháp lý 不可抗力 (bùkěkànglì)."
  },
  {
    "id": "sp-hsk5-advanced-6",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Bảo mật",
    "hanzi": "为了保障商业机密，合作双方必须签订严格的保密协议。",
    "pinyin": "Wèile bǎozhàng shāngyè jīmì, hézuò shuāngfāng bìxū qiāndìng yángé de bǎomì xiéyì.",
    "meaningVi": "Để bảo đảm bí mật thương mại, hai bên hợp tác bắt buộc phải ký thỏa thuận bảo mật nghiêm ngặt.",
    "focusTones": [
      "Âm bật hơi q (qiān)",
      "Cụm 保密协议"
    ],
    "tipVi": "Nhấn mạnh tính bắt buộc ở 必须签订严格的保密协议."
  },
  {
    "id": "sp-hsk5-advanced-7",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Sở hữu trí tuệ",
    "hanzi": "关于知识产权归属问题，合同第五条款已经作出了明确界定。",
    "pinyin": "Guānyú zhīshi chǎnquán guīshǔ wèntí, hétong dì-wǔ tiáokuǎn yǐjīng zuòchū le míngquè jièdìng.",
    "meaningVi": "Về vấn đề quyền sở hữu trí tuệ thuộc về ai, điều khoản thứ 5 của hợp đồng đã phân định rõ ràng.",
    "focusTones": [
      "Âm bật hơi ch, q, t, k",
      "Thuật ngữ 知识产权"
    ],
    "tipVi": "Ngắt hơi sau 归属问题, nhấn rõ 明确界定."
  },
  {
    "id": "sp-hsk5-advanced-8",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Trọng tài",
    "hanzi": "一旦发生贸易争端，双方应优先通过友好协商或仲裁解决。",
    "pinyin": "Yídàn fāshēng màoyì zhēngduān, shuāngfāng yīng yōuxiān tōngguò yǒuhǎo xiéshāng huò zhòngcái jiějué.",
    "meaningVi": "Một khi phát sinh tranh chấp thương mại, hai bên nên ưu tiên giải quyết thông qua thương lượng hữu nghị hoặc trọng tài.",
    "focusTones": [
      "Biến điệu 一 (yídàn)",
      "Âm zh, c trong 仲裁"
    ],
    "tipVi": "Đọc rõ 仲裁 (zhòngcái - trọng tài), nhấn vào 优先通过."
  },
  {
    "id": "sp-hsk5-advanced-9",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Nghiệm thu",
    "hanzi": "请贵方在收到货物后七天内完成验收并出具书面确认函。",
    "pinyin": "Qǐng guìfāng zài shōudào huòwù hòu qī tiān nèi wánchéng yànshōu bìng chūjù shūmiàn quèrènhán.",
    "meaningVi": "Xin quý bên hoàn thành nghiệm thu và xuất thư xác nhận bằng văn bản trong vòng 7 ngày sau khi nhận hàng.",
    "focusTones": [
      "Âm bật hơi q, ch",
      "Thuật ngữ 书面确认函"
    ],
    "tipVi": "Giọng lịch sự chuẩn văn thư, nhấn vào 七天内完成验收."
  },
  {
    "id": "sp-hsk5-advanced-10",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "topic": "Lời mời",
    "hanzi": "我们诚挚邀请贵公司代表出席下个月在上海举办的国际进口博览会。",
    "pinyin": "Wǒmen chéngzhì yāoqǐng guì gōngsī dàibiǎo chūxí xià gè yuè zài Shànghǎi jǔbàn de Guójì Jìnkǒu Bólǎnhuì.",
    "meaningVi": "Chúng tôi chân thành mời đại diện quý công ty tham dự Hội chợ Nhập khẩu Quốc tế tổ chức tại Thượng Hải vào tháng tới.",
    "focusTones": [
      "Âm bật hơi ch, q, k",
      "Vận mẫu ü (jǔ)"
    ],
    "tipVi": "Ngắt nhịp mạch lạc: 诚挚邀请贵公司代表 / 出席下个月在上海举办的 / 国际进口博览会."
  },
  {
    "id": "sp-hsk6-basic-1",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Di sản",
    "hanzi": "非物质文化遗产的保护不仅需要资金投入，更依赖于年轻一代的传承。",
    "pinyin": "Fēi wùzhì wénhuà yíchǎn de bǎohù bùjǐn xūyào zījīn tóurù, gèng yīlài yú niánqīng yídài de chuánchéng.",
    "meaningVi": "Việc bảo vệ di sản văn hóa phi vật thể không chỉ cần đầu tư vốn mà còn phụ thuộc vào sự kế thừa của thế hệ trẻ.",
    "focusTones": [
      "Cấu trúc 不仅...更...",
      "Âm bật hơi ch trong 传承"
    ],
    "tipVi": "Nhấn mạnh vế sau 更依赖于年轻一代的传承."
  },
  {
    "id": "sp-hsk6-basic-2",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Truyền thông",
    "hanzi": "在信息爆炸的时代，如何辨别新闻的真伪成为公众必备的媒介素养。",
    "pinyin": "Zài xìnxī bàozhà de shídài, rúhé biànbié xīnwén de zhēnwěi chéngwéi gōngzhòng bìbèi de méijiè sùyǎng.",
    "meaningVi": "Trong thời đại bùng nổ thông tin, làm thế nào để phân biệt thật giả của tin tức trở thành năng lực truyền thông tất yếu của công chúng.",
    "focusTones": [
      "Âm cuốn lưỡi zh, ch, sh",
      "Âm s (sù)"
    ],
    "tipVi": "Đọc rõ cặp đối lập 真伪 (zhēnwěi - thật giả) và 媒介素养."
  },
  {
    "id": "sp-hsk6-basic-3",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Đổi mới",
    "hanzi": "真正的创新往往源于对日常现象的敏锐洞察以及持之以恒的探索。",
    "pinyin": "Zhēnzhèng de chuàngxīn wǎngwǎng yuányú duì rìcháng xiànxiàng de mǐnruì dòngchá yǐjí chízhīyǐhéng de tànsuǒ.",
    "meaningVi": "Sự đổi mới thực sự thường bắt nguồn từ cái nhìn sâu sắc nhạy bén đối với hiện tượng thường ngày và sự tìm tòi kiên trì bền bỉ.",
    "focusTones": [
      "Thành ngữ 持之以恒",
      "Âm r (rì, ruì)"
    ],
    "tipVi": "Đọc tròn trịa thành ngữ 持之以恒 (chízhīyǐhéng)."
  },
  {
    "id": "sp-hsk6-basic-4",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Chuyển đổi",
    "hanzi": "消费结构的升级促使制造业向高质量、高附加值方向加速转型。",
    "pinyin": "Xiāofèi jiégòu de shēngjí cùshǐ zhìzàoyè xiàng gāo zhìliàng, gāo fùjiāzhí fāngxiàng jiāsù zhuǎnxíng.",
    "meaningVi": "Sự nâng cấp cơ cấu tiêu dùng thúc đẩy ngành chế tạo tăng tốc chuyển đổi theo hướng chất lượng cao và giá trị gia tăng cao.",
    "focusTones": [
      "Âm bật hơi c (cù)",
      "Âm zh, sh"
    ],
    "tipVi": "Nhấn nhịp song song ở 高质量、高附加值."
  },
  {
    "id": "sp-hsk6-basic-5",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Văn học",
    "hanzi": "文学作品之所以能够跨越时空打动读者，是因为它触及了人类共通的情感。",
    "pinyin": "Wénxué zuòpǐn zhīsuǒyǐ nénggòu kuàyuè shíkōng dǎdòng dúzhě, shì yīnwèi tā chùjí le rénlèi gòngtōng de qínggǎn.",
    "meaningVi": "Sở dĩ tác phẩm văn học có thể vượt qua không gian thời gian làm lay động độc giả là vì nó chạm tới tình cảm chung của nhân loại.",
    "focusTones": [
      "Cấu trúc 之所以...是因为...",
      "Âm bật hơi k, ch, t, q"
    ],
    "tipVi": "Giữ nhịp truyền cảm, nhấn vào 触及了人类共通的情感."
  },
  {
    "id": "sp-hsk6-basic-6",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Kinh tế số",
    "hanzi": "随着数字经济的蓬勃发展，数据安全与个人隐私保护引发了广泛讨论。",
    "pinyin": "Suízhe shùzì jīngjì de péngbó fāzhǎn, shùjù ānquán yǔ gèrén yǐnsī bǎohù yǐnfā le guǎngfàn tǎolùn.",
    "meaningVi": "Cùng với sự phát triển mạnh mẽ của kinh tế số, an toàn dữ liệu và bảo vệ quyền riêng tư cá nhân đã làm dấy lên cuộc thảo luận rộng rãi.",
    "focusTones": [
      "Âm bật hơi p, t",
      "Biến điệu 隐私保护"
    ],
    "tipVi": "Đọc rõ 蓬勃发展 (péngbó fāzhǎn) và 个人隐私 (gèrén yǐnsī)."
  },
  {
    "id": "sp-hsk6-basic-7",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Học thuật",
    "hanzi": "在学术研究中，严谨的逻辑推理与充分的实证数据缺一不可。",
    "pinyin": "Zài xuéshù yánjiū zhōng, yánjǐn de luójí tuīlǐ yǔ chōngfèn de shízhèng shùjù quēyībùkě.",
    "meaningVi": "Trong nghiên cứu học thuật, suy luận logic chặt chẽ và dữ liệu thực chứng đầy đủ là không thể thiếu một.",
    "focusTones": [
      "Thành ngữ 缺一不可",
      "Âm bật hơi t, ch, q, k"
    ],
    "tipVi": "Nhấn dứt khoát ở thành ngữ kết câu 缺一不可."
  },
  {
    "id": "sp-hsk6-basic-8",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Tâm thái",
    "hanzi": "当遭遇挫折与逆境时，乐观豁达的心态往往是走出低谷的最大动力。",
    "pinyin": "Dāng zāoyù cuòzhé yǔ nìjìng shí, lèguān huòdá de xīntài wǎngwǎng shì zǒuchū dīgǔ de zuìdà dònglì.",
    "meaningVi": "Khi gặp phải vấp ngã và nghịch cảnh, tâm thái lạc quan khoáng đạt thường là động lực lớn nhất để bước ra khỏi vực sâu.",
    "focusTones": [
      "Âm bật hơi c, t, ch",
      "Từ vựng 挫折, 豁达"
    ],
    "tipVi": "Đọc có chiều sâu, nhấn vào 乐观豁达 (lèguān huòdá)."
  },
  {
    "id": "sp-hsk6-basic-9",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Kinh nghiệm",
    "hanzi": "盲目照搬国外经验而不顾本土实际情况，往往难以取得预期成效。",
    "pinyin": "Mángmù zhàobān guówài jīngyàn ér búgù běntǔ shíjì qíngkuàng, wǎngwǎng nányǐ qǔdé yùqī chéngxiào.",
    "meaningVi": "Rập khuôn mù quáng kinh nghiệm nước ngoài mà bất chấp tình hình thực tế bản địa thì thường khó đạt được hiệu quả như kỳ vọng.",
    "focusTones": [
      "Biến điệu 不 (búgù)",
      "Vận mẫu ü (qǔ, yù)"
    ],
    "tipVi": "Nhấn vào sự phê phán ở 盲目照搬 và 难以取得预期成效."
  },
  {
    "id": "sp-hsk6-basic-10",
    "level": "HSK6",
    "subDifficulty": "basic",
    "topic": "Sinh thái",
    "hanzi": "生态环境一旦遭到毁灭性破坏，往往需要数代人的努力才能得以修复。",
    "pinyin": "Shēngtài huánjìng yídàn zāodào huǐmièxìng pòhuài, wǎngwǎng xūyào shù dài rén de nǔlì cái néng déyǐ xiūfù.",
    "meaningVi": "Môi trường sinh thái một khi bị phá hoại mang tính hủy diệt thì thường cần nỗ lực của nhiều thế hệ mới có thể khôi phục được.",
    "focusTones": [
      "Cấu trúc 一旦...才...",
      "Âm bật hơi t, p, c"
    ],
    "tipVi": "Giọng trầm lắng cảnh báo, nhấn vào 毁灭性破坏."
  },
  {
    "id": "sp-hsk6-advanced-1",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "RCEP",
    "hanzi": "区域全面经济伙伴关系协定的生效为亚太贸易自由化注入了强劲动力。",
    "pinyin": "Qūyù Quánmiàn Jīngjì Huǒbàn Guānxi Xiédìng de shēngxiào wèi Yà-Tài màoyì zìyóuhuà zhùrù le qiángjìng dònglì.",
    "meaningVi": "Việc Hiệp định RCEP có hiệu lực đã bơm động lực mạnh mẽ cho tự do hóa thương mại châu Á - Thái Bình Dương.",
    "focusTones": [
      "Tên hiệp định dài",
      "Âm bật hơi q (qū, quán, qiáng)"
    ],
    "tipVi": "Chia cụm hơi rõ ràng sau 协定的生效 và 自由化."
  },
  {
    "id": "sp-hsk6-advanced-2",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "M&A",
    "hanzi": "跨国企业在进行海外并购时，必须对目标公司进行尽职调查。",
    "pinyin": "Kuàguó qǐyè zài jìnxíng hǎiwài bìnggòu shí, bìxū duì mùbiāo gōngsī jìnxíng jìnzhí diàochá.",
    "meaningVi": "Doanh nghiệp đa quốc gia khi tiến hành M&A ở nước ngoài bắt buộc phải thực hiện thẩm định chuyên sâu công ty mục tiêu.",
    "focusTones": [
      "Thuật ngữ 并购, 尽职调查",
      "Âm bật hơi k, q, ch"
    ],
    "tipVi": "Đọc chuẩn xác thuật ngữ tài chính 尽职调查 (jìnzhí diàochá)."
  },
  {
    "id": "sp-hsk6-advanced-3",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Thị trường vốn",
    "hanzi": "受全球通胀压力及央行加息影响，资本市场的避险情绪明显升温。",
    "pinyin": "Shòu quánqiú tōngzhàng yālì jí yāngháng jiāxī yǐngxiǎng, zīběn shìchǎng de bìxiǎn qíngxù míngxiǎn shēngwēn.",
    "meaningVi": "Chịu ảnh hưởng từ áp lực lạm phát toàn cầu và tăng lãi suất, tâm lý trú ẩn an toàn trên thị trường vốn tăng lên rõ rệt.",
    "focusTones": [
      "Cấu trúc 受...影响",
      "Thuật ngữ 通胀, 加息, 避险"
    ],
    "tipVi": "Giọng bản tin tài chính dứt khoát, nhấn vào 避险情绪明显升温."
  },
  {
    "id": "sp-hsk6-advanced-4",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "FDI Việt Nam",
    "hanzi": "越南凭借优越的地理位置与年轻的人口结构吸引了大量制造业外资。",
    "pinyin": "Yuènán píngjiè yōuyuè de dìlǐ wèizhì yǔ niánqīng de rénkǒu jiégòu xīyǐn le dàliàng zhìzàoyè wàizī.",
    "meaningVi": "Việt Nam nhờ vị trí địa lý ưu việt và cơ cấu dân số trẻ đã thu hút lượng lớn vốn đầu tư nước ngoài ngành chế tạo.",
    "focusTones": [
      "Cấu trúc 凭借...",
      "Âm bật hơi p, q, k"
    ],
    "tipVi": "Ngắt hơi nhẹ sau 人口结构, nhấn vào 吸引了大量制造业外资."
  },
  {
    "id": "sp-hsk6-advanced-5",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Thanh toán NDT",
    "hanzi": "人民币跨境结算业务的扩大有助于外贸企业规避美元汇率波动风险。",
    "pinyin": "Rénmínbì kuàjìng jiésuàn yèwù de kuòdà yǒuzhùyú wàimào qǐyè guībì Měiyuán huìlǜ bōdòng fēngxiǎn.",
    "meaningVi": "Việc mở rộng nghiệp vụ thanh toán xuyên biên giới bằng NDT giúp doanh nghiệp ngoại thương tránh rủi ro tỷ giá USD.",
    "focusTones": [
      "Âm bật hơi k, q",
      "Vận mẫu ü (lǜ)"
    ],
    "tipVi": "Đọc mạch lạc thuật ngữ 跨境结算 và 规避...风险."
  },
  {
    "id": "sp-hsk6-advanced-6",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Chống bán phá giá",
    "hanzi": "在反倾销调查中，出口商需要提供详实的成本核算资料以维护合法权益。",
    "pinyin": "Zài fǎnqīngxiāo diàochá zhōng, chūkǒushāng xūyào tígōng xiángshí de chéngběn hésuàn zīliào yǐ wéihù héfǎ quányì.",
    "meaningVi": "Trong điều tra chống bán phá giá, nhà xuất khẩu cần cung cấp tài liệu hạch toán chi phí chi tiết để bảo vệ quyền lợi hợp pháp.",
    "focusTones": [
      "Thuật ngữ 反倾销, 成本核算",
      "Văn phong 以 + V"
    ],
    "tipVi": "Nhấn rõ 详实的成本核算资料 và 维护合法权益."
  },
  {
    "id": "sp-hsk6-advanced-7",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Trái phiếu xanh",
    "hanzi": "绿色债券的发行不仅拓宽了环保项目的融资渠道，也引导了可持续投资理念。",
    "pinyin": "Lǜsè zhàiquàn de fāxíng bùjǐn tuòkuān le huánbǎo xiàngmù de róngzī qúdào, yě yǐndǎo le kěchíxù tóuzī lǐniàn.",
    "meaningVi": "Việc phát hành trái phiếu xanh không chỉ mở rộng kênh huy động vốn cho dự án môi trường mà còn định hướng triết lý đầu tư bền vững.",
    "focusTones": [
      "Vận mẫu ü (lǜ, qú)",
      "Âm bật hơi q, t, k, ch"
    ],
    "tipVi": "Tròn môi chuẩn ở 绿 (lǜ) và 渠 (qú), nhấn rõ 融资渠道."
  },
  {
    "id": "sp-hsk6-advanced-8",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Chuyển đổi số",
    "hanzi": "数字化转型绝非简单购买软件设备，而是对企业业务流程的全面重塑。",
    "pinyin": "Shùzìhuà zhuǎnxíng juéfēi jiǎndān gòumǎi ruǎnjiàn shèbèi, ér shì duì qǐyè yèwù liúchéng de quánmiàn chóngsù.",
    "meaningVi": "Chuyển đổi số tuyệt đối không phải mua phần mềm đơn thuần mà là tái định hình toàn diện quy trình nghiệp vụ doanh nghiệp.",
    "focusTones": [
      "Cấu trúc 绝非...而是...",
      "Âm cuốn lưỡi sh, zh, r, ch"
    ],
    "tipVi": "Nhấn mạnh cặp phủ định - khẳng định 绝非...而是..."
  },
  {
    "id": "sp-hsk6-advanced-9",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Trọng tài QT",
    "hanzi": "国际商事仲裁具有保密性强、裁决在缔约国可强制执行等显著优势。",
    "pinyin": "Guójì shāngshì zhòngcái jùyǒu bǎomìxìng qiáng, cáijué zài dìyuēguó kě qiángzhì zhíxíng děng xiǎnzhù yōushì.",
    "meaningVi": "Trọng tài thương mại quốc tế có ưu thế nổi bật như tính bảo mật cao và phán quyết được cưỡng chế thi hành tại các nước thành viên.",
    "focusTones": [
      "Âm bật hơi c, q, k",
      "Thuật ngữ 商事仲裁, 强制执行"
    ],
    "tipVi": "Đọc dứt khoát hai ưu thế song song với nhịp điệu đều đặn."
  },
  {
    "id": "sp-hsk6-advanced-10",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "topic": "Đàm phán",
    "hanzi": "在谈判陷入僵局时，适当作出非核心利益的妥协往往能推动协议达成。",
    "pinyin": "Zài tánpàn xiànrù jiāngjú shí, shìdàng zuòchū fēi héxīn lìyì de tuǒxié wǎngwǎng néng tuīdòng xiéyì dáchéng.",
    "meaningVi": "Khi đàm phán rơi vào bế tắc, nhượng bộ thích đáng ở lợi ích không cốt lõi thường thúc đẩy đạt được thỏa thuận.",
    "focusTones": [
      "Âm bật hơi t, p, ch",
      "Từ vựng 僵局, 妥协"
    ],
    "tipVi": "Ngắt hơi sau 僵局时, nhấn rõ 妥协 (tuǒxié) và 达成."
  },
  {
    "id": "sp-hsk7-basic-1",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Trung hòa carbon",
    "hanzi": "实现碳达峰与碳中和是一场广泛而深刻的经济社会系统性变革。",
    "pinyin": "Shíxiàn tàndáfēng yǔ tànzhōnghé shì yì chǎng guǎngfàn ér shēnkè de jīngjì shèhuì xìtǒngxìng biàngé.",
    "meaningVi": "Thực hiện đạt đỉnh carbon và trung hòa carbon là một cuộc cải cách mang tính hệ thống kinh tế xã hội rộng lớn và sâu sắc.",
    "focusTones": [
      "Âm bật hơi t, ch, k",
      "Thuật ngữ 碳达峰, 碳中和"
    ],
    "tipVi": "Đọc với ngữ điệu trang trọng, nhấn vào 广泛而深刻 và 系统性变革."
  },
  {
    "id": "sp-hsk7-basic-2",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Đô thị thông minh",
    "hanzi": "智慧城市建设应当以人为本，避免沦为单纯追求技术炫技的形象工程。",
    "pinyin": "Zhìhuì chéngshì jiànshè yīngdāng yǐrénwéiběn, bìmiǎn lúnwéi dānchún zhuīqiú jìshù xuànjì de xíngxiàng gōngchéng.",
    "meaningVi": "Xây dựng thành phố thông minh cần lấy con người làm gốc, tránh rơi vào công trình hình thức chỉ khoe mẽ công nghệ.",
    "focusTones": [
      "Thành ngữ 以人为本",
      "Vận mẫu üan (xuàn)"
    ],
    "tipVi": "Nhấn mạnh 以人为本 và thái độ cảnh báo ở 避免沦为."
  },
  {
    "id": "sp-hsk7-basic-3",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Khoảng cách số",
    "hanzi": "数字鸿沟的存在使得部分老年群体在享受智能化服务时面临诸多不便。",
    "pinyin": "Shùzì hónggōu de cúnzài shǐde bùfen lǎonián qúntǐ zài xiǎngshòu zhìnénghuà fúwù shí miànlín zhūduō búbiàn.",
    "meaningVi": "Sự tồn tại của khoảng cách số khiến một bộ phận người cao tuổi gặp nhiều bất tiện khi hưởng dịch vụ thông minh.",
    "focusTones": [
      "Âm bật hơi c, q",
      "Vận mẫu ün (qún)"
    ],
    "tipVi": "Đọc mượt cụm 数字鸿沟 (shùzì hónggōu) và 诸多不便."
  },
  {
    "id": "sp-hsk7-basic-4",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Cải cách thể chế",
    "hanzi": "唯有破除体制机制障碍，方能充分激发各类市场主体的创新活力。",
    "pinyin": "Wéiyǒu pòchú tǐzhì jīzhì zhàng'ài, fāng néng chōngfèn jīfā gèlèi shìchǎng zhǔtǐ de chuàngxīn huólì.",
    "meaningVi": "Chỉ có xóa bỏ rào cản thể chế cơ chế mới có thể khơi dậy đầy đủ sức sống sáng tạo của các chủ thể thị trường.",
    "focusTones": [
      "Cấu trúc văn viết 唯有...方能...",
      "Âm bật hơi p, ch, t"
    ],
    "tipVi": "Nhấn dứt khoát vào cặp liên từ văn viết 唯有...方能..."
  },
  {
    "id": "sp-hsk7-basic-5",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Minh bạch thông tin",
    "hanzi": "在突发公共卫生事件中，透明及时的信息披露是稳定社会情绪的关键。",
    "pinyin": "Zài tūfā gōnggòng wèishēng shìjiàn zhōng, tòumíng jíshí de xìnxī pīlù shì wěndìng shèhuì qíngxù de guānjiàn.",
    "meaningVi": "Trong sự cố y tế công cộng bất ngờ, công bố thông tin minh bạch kịp thời là chìa khóa ổn định tâm lý xã hội.",
    "focusTones": [
      "Âm bật hơi t, p, q",
      "Từ vựng 信息披露"
    ],
    "tipVi": "Ngắt nhịp rõ sau 事件中, nhấn vào 透明及时的信息披露."
  },
  {
    "id": "sp-hsk7-basic-6",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Pháp quyền SHTT",
    "hanzi": "健全知识产权侵权惩罚性赔偿制度，有助于营造尊重创新的法治环境。",
    "pinyin": "Jiànquán zhīshi chǎnquán qīnquán chéngfáxìng péicháng zhìdù, yǒuzhùyú yíngzào zūnzhòng chuàngxīn de fǎzhì huánjìng.",
    "meaningVi": "Kiện toàn chế độ bồi thường trừng phạt xâm phạm SHTT giúp tạo dựng môi trường pháp quyền tôn trọng sáng tạo.",
    "focusTones": [
      "Chuỗi âm bật hơi ch, q, p",
      "Vận mẫu üan (quán)"
    ],
    "tipVi": "Kiểm soát hơi thở tốt ở chuỗi 知识产权侵权惩罚性赔偿制度."
  },
  {
    "id": "sp-hsk7-basic-7",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Kinh tế nền tảng",
    "hanzi": "平台经济在提升资源配置效率的同时，也须防范算法歧视与不正当竞争。",
    "pinyin": "Píngtái jīngjì zài tíshēng zīyuán pèizhì xiàolǜ de tóngshí, yě xū fángfàn suànfǎ qíshì yǔ bùzhèngdàng jìngzhēng.",
    "meaningVi": "Kinh tế nền tảng trong khi nâng cao hiệu quả phân bổ nguồn lực cũng phải phòng ngừa phân biệt thuật toán và cạnh tranh không lành mạnh.",
    "focusTones": [
      "Vận mẫu ü (lǜ, xū)",
      "Âm bật hơi p, t, q"
    ],
    "tipVi": "Nhấn rõ hai vế song song 在...的同时，也须..."
  },
  {
    "id": "sp-hsk7-basic-8",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Giao lưu văn hóa",
    "hanzi": "文化交流绝非单向输出，而是在相互鉴赏与对话中实现美美与共。",
    "pinyin": "Wénhuà jiāoliú juéfēi dānxiàng shūchū, ér shì zài xiānghù jiànshǎng yǔ duìhuà zhōng shíxiàn měiměiyǔgòng.",
    "meaningVi": "Giao lưu văn hóa tuyệt không phải xuất khẩu một chiều mà là thực hiện sự hòa hợp vẻ đẹp chung trong đối thoại và thưởng thức lẫn nhau.",
    "focusTones": [
      "Thành ngữ 美美与共",
      "Âm cuốn lưỡi sh, ch"
    ],
    "tipVi": "Đọc truyền cảm, nhấn nhẹ ở cụm 美美与共 (měiměiyǔgòng)."
  },
  {
    "id": "sp-hsk7-basic-9",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Tự chủ công nghệ",
    "hanzi": "在全球产业链重构背景下，提升关键核心技术的自主可控能力迫在眉睫。",
    "pinyin": "Zài quánqiú chǎnyèliàn chónggòu bèijǐng xià, tíshēng guānjiàn héxīn jìshù de zìzhǔ kěkòng nénglì pòzàiméijié.",
    "meaningVi": "Trong bối cảnh tái cấu trúc chuỗi công nghiệp toàn cầu, nâng cao năng lực tự chủ kiểm soát công nghệ lõi là vô cùng cấp bách.",
    "focusTones": [
      "Thành ngữ 迫在眉睫",
      "Âm bật hơi q, ch, t, k, p"
    ],
    "tipVi": "Nhấn mạnh tính cấp bách ở thành ngữ kết câu 迫在眉睫."
  },
  {
    "id": "sp-hsk7-basic-10",
    "level": "HSK7",
    "subDifficulty": "basic",
    "topic": "Đô thị nhân văn",
    "hanzi": "城市更新应注重保留市井烟火气，让居民在环境改善中记住乡愁。",
    "pinyin": "Chéngshì gēngxīn yīng zhùzhòng bǎoliú shìjǐng yānhuǒqì, ràng jūmín zài huánjìng gǎishàn zhōng jìzhù xiāngchóu.",
    "meaningVi": "Chỉnh trang đô thị nên chú trọng giữ lại hơi thở đời sống phố phường để cư dân nhớ về nỗi nhớ quê hương trong môi trường cải thiện.",
    "focusTones": [
      "Từ vựng 市井烟火气, 乡愁",
      "Vận mẫu ü (jū)"
    ],
    "tipVi": "Giọng ấm áp giàu cảm xúc ở 市井烟火气 và 记住乡愁."
  },
  {
    "id": "sp-hsk7-advanced-1",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Khai mạc diễn đàn",
    "hanzi": "各位嘉宾、女士们、先生们，非常荣幸受邀出席本届亚太经贸合作高峰论坛。",
    "pinyin": "Gèwèi jiābīn, nǚshìmen, xiānshengmen, fēicháng róngxìng shòuyāo chūxí běn jiè Yà-Tài Jīngmào Hézuò Gāofēng Lùntán.",
    "meaningVi": "Kính thưa quý vị khách quý, quý bà và quý ông, vô cùng vinh dự được mời tham dự Diễn đàn Thượng đỉnh Hợp tác Kinh tế Thương mại châu Á - Thái Bình Dương lần này.",
    "focusTones": [
      "Ngữ điệu diễn văn",
      "Vận mẫu ü (nǚ)"
    ],
    "tipVi": "Ngắt nhịp chậm rãi, đĩnh đạc sau mỗi danh xưng chào hỏi."
  },
  {
    "id": "sp-hsk7-advanced-2",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Đa phương",
    "hanzi": "当今世界正经历百年未有之大变局，多边主义与自由贸易面临严峻考验。",
    "pinyin": "Dāngjīn shìjiè zhèng jīnglì bǎinián wèiyǒu zhī dàbiànjú, duōbiānzhǔyì yǔ zìyóu màoyì miànlín yánjùn kǎoyàn.",
    "meaningVi": "Thế giới ngày nay đang trải qua cục diện biến đổi lớn chưa từng có trong một trăm năm, chủ nghĩa đa phương và thương mại tự do đối mặt thử thách khắc nghiệt.",
    "focusTones": [
      "Cụm 百年未有之大变局",
      "Vận mẫu ü (jú, jùn)"
    ],
    "tipVi": "Đọc trang nghiêm, tròn môi chuẩn ở 局 (jú) và 峻 (jùn)."
  },
  {
    "id": "sp-hsk7-advanced-3",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Chống tách rời",
    "hanzi": "任何搞单边保护主义和脱钩断链的做法，最终都将损害全球产业链的稳定。",
    "pinyin": "Rènhé gǎo dānbiān bǎohùzhǔyì hé tuōgōu duànliàn de zuòfǎ, zuìzhōng dōu jiāng sǔnhài quánqiú chǎnyèliàn de wěndìng.",
    "meaningVi": "Bất kỳ cách làm nào theo chủ nghĩa bảo hộ đơn phương và tách rời đứt gãy chuỗi cung ứng cuối cùng đều làm tổn hại sự ổn định chuỗi công nghiệp toàn cầu.",
    "focusTones": [
      "Thuật ngữ 脱钩断链",
      "Âm bật hơi t, q, ch"
    ],
    "tipVi": "Nhấn giọng kiên quyết ở 任何...最终都将损害..."
  },
  {
    "id": "sp-hsk7-advanced-4",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Phương pháp NC",
    "hanzi": "本研究采用定量与定性相结合的方法，对跨境电商消费者行为进行了实证分析。",
    "pinyin": "Běn yánjiū cǎiyòng dìngliàng yǔ dìngxìng xiāng jiéhé de fāngfǎ, duì kuàjìng diànshāng xiāofèizhě xíngwéi jìnxíng le shízhèng fēnxī.",
    "meaningVi": "Nghiên cứu này áp dụng phương pháp kết hợp định lượng và định tính để phân tích thực chứng hành vi người tiêu dùng TMĐT xuyên biên giới.",
    "focusTones": [
      "Thuật ngữ học thuật 定量与定性, 实证分析"
    ],
    "tipVi": "Đọc mạch lạc như thuyết trình bảo vệ luận văn, ngắt nhẹ sau 方法."
  },
  {
    "id": "sp-hsk7-advanced-5",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Đạo đức AI",
    "hanzi": "在人工智能伦理框架下，算法的透明性与可解释性应当成为技术落地的先决条件。",
    "pinyin": "Zài réngōng zhìnéng lúnlǐ kuàngjià xià, suànfǎ de tòumíngxìng yǔ kějiěshìxìng yīngdāng chéngwéi jìshù luòdì de xiānjué tiáojiàn.",
    "meaningVi": "Trong khuôn khổ đạo đức AI, tính minh bạch và khả năng giải thích của thuật toán cần trở thành điều kiện tiên quyết để triển khai công nghệ.",
    "focusTones": [
      "Âm bật hơi k, t, ch",
      "Thuật ngữ 先决条件"
    ],
    "tipVi": "Nhấn rõ hai thuộc tính 透明性 và 可解释性."
  },
  {
    "id": "sp-hsk7-advanced-6",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Hợp tác",
    "hanzi": "各国应当摒弃零和博弈的陈旧思维，在良性竞争与协同创新中实现共同发展。",
    "pinyin": "Gèguó yīngdāng bìngqì línghé bóyì de chénjiù sīwéi, zài liángxìng jìngzhēng yǔ xiétóng chuàngxīn zhōng shíxiàn gòngtóng fāzhǎn.",
    "meaningVi": "Các quốc gia nên loại bỏ tư duy cũ kỹ về trò chơi có tổng bằng không, thực hiện phát triển chung trong cạnh tranh lành mạnh và đổi mới hiệp đồng.",
    "focusTones": [
      "Thuật ngữ 零和博弈, 摒弃",
      "Âm bật hơi q, ch, t"
    ],
    "tipVi": "Đọc dứt khoát động từ 摒弃 (bìngqì - loại bỏ)."
  },
  {
    "id": "sp-hsk7-advanced-7",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Mở cửa thể chế",
    "hanzi": "高水平对外开放要求我们在规则、规制、管理、标准等制度型开放上迈出更大步伐。",
    "pinyin": "Gāo shuǐpíng duìwài kāifàng yāoqiú wǒmen zài guīzé, guīzhì, guǎnlǐ, biāozhǔn děng zhìdùxíng kāifàng shàng màichū gèng dà bùfá.",
    "meaningVi": "Mở cửa đối ngoại trình độ cao đòi hỏi chúng ta tiến bước lớn hơn trong mở cửa thể chế về quy tắc, quy chế, quản lý và tiêu chuẩn.",
    "focusTones": [
      "Liệt kê 4 danh từ song âm tiết",
      "Thuật ngữ 制度型开放"
    ],
    "tipVi": "Tạo nhịp ngắt đều và rõ ràng giữa 规则、规制、管理、标准."
  },
  {
    "id": "sp-hsk7-advanced-8",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Phản biện mô hình",
    "hanzi": "该理论模型虽然具有逻辑自洽性，但在解释现实经济波动时仍存在局限。",
    "pinyin": "Gāi lǐlùn móxíng suīrán jùyǒu luójí zìqiàxìng, dàn zài jiěshì xiànshí jīngjì bōdòng shí réng cúnzài júxiàn.",
    "meaningVi": "Mô hình lý thuyết này tuy có tính tự nhất quán về logic nhưng vẫn tồn tại hạn chế khi giải thích biến động kinh tế thực tế.",
    "focusTones": [
      "Thuật ngữ 逻辑自洽性, 局限",
      "Âm bật hơi q, c"
    ],
    "tipVi": "Đọc khách quan, nhấn vào sự chuyển ý ở 但...仍存在局限."
  },
  {
    "id": "sp-hsk7-advanced-9",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Kết nối R&D",
    "hanzi": "产学研深度融合有助于打通科技成果从实验室走向市场应用的最后一公里。",
    "pinyin": "Chǎn-xué-yán shēndù rónghé yǒuzhùyú dǎtōng kējì chéngguǒ cóng shíyànshì zǒuxiàng shìchǎng yìngyòng de zuìhòu yì gōnglǐ.",
    "meaningVi": "Sự dung hợp sâu sắc giữa doanh nghiệp - đại học - viện nghiên cứu giúp đả thông chặng đường cuối cùng đưa thành quả KHCN từ phòng thí nghiệm ra thị trường.",
    "focusTones": [
      "Cụm 产学研, 最后一公里",
      "Biến điệu 一 (yì)"
    ],
    "tipVi": "Đọc gọn cụm 产学研 (chǎn-xué-yán) và nhấn vào 最后一公里."
  },
  {
    "id": "sp-hsk7-advanced-10",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "topic": "Quy luật lịch sử",
    "hanzi": "历史经验反复证明，开放则兴、封闭则衰是人类文明演进的客观规律。",
    "pinyin": "Lìshǐ jīngyàn fǎnfù zhèngmíng, kāifàng zé xīng, fēngbì zé shuāi shì rénlèi wénmíng yǎnjìn de kèguān guīlǜ.",
    "meaningVi": "Kinh nghiệm lịch sử nhiều lần chứng minh rằng mở cửa thì hưng thịnh, khép kín thì suy tàn là quy luật khách quan của sự tiến hóa văn minh nhân loại.",
    "focusTones": [
      "Cấu trúc đối ngẫu 开放则兴、封闭则衰",
      "Vận mẫu ü (lǜ)"
    ],
    "tipVi": "Đọc hào sảng, nhấn mạnh sự đối ngẫu ở 开放则兴、封闭则衰."
  },
  {
    "id": "sp-hsk8-basic-1",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Thiên nhân hợp nhất",
    "hanzi": "中国传统文化主张天人合一，强调人类应当顺应自然规律而非一味索取。",
    "pinyin": "Zhōngguó chuántǒng wénhuà zhǔzhāng tiānrénhéyī, qiángdiào rénlèi yīngdāng shùnyìng zìrán guīlǜ ér fēi yíwèi suǒqǔ.",
    "meaningVi": "Văn hóa truyền thống Trung Quốc chủ trương thiên nhân hợp nhất, nhấn mạnh nhân loại cần thuận theo quy luật tự nhiên chứ không phải một mực đòi hỏi.",
    "focusTones": [
      "Thành ngữ 天人合一",
      "Văn phong 而非"
    ],
    "tipVi": "Đọc rõ nhịp đối lập 顺应自然规律 / 而非一味索取."
  },
  {
    "id": "sp-hsk8-basic-2",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Hòa nhi bất đồng",
    "hanzi": "君子和而不同，意味着在保持独立见解的同时能够包容他人的差异。",
    "pinyin": "Jūnzǐ hé ér bù tóng, yìwèizhe zài bǎochí dúlì jiànjiě de tóngshí nénggòu bāoróng tārén de chāyì.",
    "meaningVi": "Quân tử hòa hợp nhưng không hòa tan có nghĩa là trong khi giữ vững kiến giải độc lập vẫn có thể bao dung sự khác biệt của người khác.",
    "focusTones": [
      "Danh ngôn 君子和而不同",
      "Âm bật hơi ch, t"
    ],
    "tipVi": "Ngắt hơi nhẹ sau 君子和而不同 để tạo sức nặng triết lý."
  },
  {
    "id": "sp-hsk8-basic-3",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Mỹ học tranh",
    "hanzi": "中国山水画讲究留白艺术，于无画处皆成妙境，赋予观者无限遐想空间。",
    "pinyin": "Zhōngguó shānshuǐhuà jiǎngjiu liúbái yìshù, yú wú huà chù jiē chéng miàojìng, fùyǔ guānzhě wúxiàn xiáxiǎng kōngjiān.",
    "meaningVi": "Tranh sơn thủy Trung Quốc coi trọng nghệ thuật để khoảng trắng, ở nơi không vẽ đều tạo nên cảnh giới kỳ diệu, trao cho người xem không gian liên tưởng vô tận.",
    "focusTones": [
      "Cổ văn 于无画处皆成妙境",
      "Âm bật hơi ch, k"
    ],
    "tipVi": "Giọng thanh thoát, nhấn nhẹ ở 留白艺术 và 无限遐想."
  },
  {
    "id": "sp-hsk8-basic-4",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Cảnh tỉnh lịch sử",
    "hanzi": "历史的兴衰更替犹如一面明镜，提醒后人居安思危、戒骄戒躁。",
    "pinyin": "Lìshǐ de xīngshuāi gēngtì yóurú yí miàn míngjìng, tíxǐng hòurén jū'ānsīwēi, jièjiāojièzào.",
    "meaningVi": "Sự thay đổi hưng suy của lịch sử giống như một tấm gương sáng nhắc nhở người đời sau lúc an bình phải nghĩ đến nguy cơ, răn dạy kiêu ngạo nóng vội.",
    "focusTones": [
      "Thành ngữ 居安思危、戒骄戒躁",
      "Biến điệu 一 (yí miàn)"
    ],
    "tipVi": "Đọc trang trọng, tách nhịp rõ giữa hai thành ngữ cuối câu."
  },
  {
    "id": "sp-hsk8-basic-5",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Nghề dịch thuật",
    "hanzi": "优秀的译者不仅要精通两种语言的语法词汇，更需深谙各自背后的文化语境。",
    "pinyin": "Yōuxiù de yìzhě bùjǐn yào jīngtōng liǎng zhǒng yǔyán de yǔfǎ cíhuì, gèng xū shēn'ān gèzì bèihòu de wénhuà yǔjìng.",
    "meaningVi": "Dịch giả xuất sắc không chỉ phải tinh thông ngữ pháp từ vựng của hai ngôn ngữ mà còn cần am hiểu sâu sắc ngữ cảnh văn hóa đằng sau mỗi bên.",
    "focusTones": [
      "Từ cao cấp 深谙 (shēn'ān)",
      "Vận mẫu ü (xū, yǔ)"
    ],
    "tipVi": "Đọc rõ âm ngắt nguyên âm ở 深谙 (shēn'ān)."
  },
  {
    "id": "sp-hsk8-basic-6",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Tinh thần nghệ nhân",
    "hanzi": "工匠精神的核心在于精益求精，对每一个细微之处都怀有敬畏之心。",
    "pinyin": "Gōngjiàng jīngshén de héxīn zàiyú jīngyìqiújīng, duì měi yí gè xìwēi zhī chù dōu huáiyǒu jìngwèi zhī xīn.",
    "meaningVi": "Cốt lõi của tinh thần nghệ nhân nằm ở việc đã tốt lại càng cầu toàn hơn, luôn mang lòng kính trọng cẩn trọng đối với từng chi tiết nhỏ bé.",
    "focusTones": [
      "Thành ngữ 精益求精",
      "Cụm 敬畏之心"
    ],
    "tipVi": "Nhấn mạnh sự trang nghiêm ở 精益求精 và 敬畏之心."
  },
  {
    "id": "sp-hsk8-basic-7",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Phương pháp đọc",
    "hanzi": "读书贵在融会贯通，若只知死记硬背而不加思索，终究不过是纸上谈兵。",
    "pinyin": "Dúshū guì zài rónghuìguàntōng, ruò zhǐ zhī sǐjìyìngbèi ér bù jiā sīsuǒ, zhōngjiū búguò shì zhǐshàngtánbīng.",
    "meaningVi": "Đọc sách quý ở sự thấu hiểu quán thông, nếu chỉ biết học vẹt mà không suy ngẫm thì rốt cuộc cũng chỉ là bàn việc quân trên giấy.",
    "focusTones": [
      "3 thành ngữ 融会贯通, 死记硬背, 纸上谈兵"
    ],
    "tipVi": "Đọc có sắc thái tương phản giữa 融会贯通 và 纸上谈兵."
  },
  {
    "id": "sp-hsk8-basic-8",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Độc lập tư duy",
    "hanzi": "面对纷繁复杂的社会舆论，唯有保持独立审视的定力，方能不被偏见所裹挟。",
    "pinyin": "Miànduì fēnfán fùzá de shèhuì yúlùn, wéiyǒu bǎochí dúlì shěnshì de dìnglì, fāng néng bú bèi piānjiàn suǒ guǒxié.",
    "meaningVi": "Đối mặt với dư luận xã hội rối ren phức tạp, chỉ có giữ vững bản lĩnh xem xét độc lập mới không bị định kiến cuốn theo.",
    "focusTones": [
      "Cấu trúc 被...所...",
      "Từ vựng 裹挟 (guǒxié)"
    ],
    "tipVi": "Đọc rõ 裹挟 (guǒxié - cuốn theo) và 审视 (shěnshì)."
  },
  {
    "id": "sp-hsk8-basic-9",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Thượng thiện nhược thủy",
    "hanzi": "老子所言上善若水，赞美的是水泽被万物而不争名利的谦逊品格。",
    "pinyin": "Lǎozǐ suǒ yán shàngshànruòshuǐ, zànměi de shì shuǐ zébèi wànwù ér bù zhēng mínglì de qiānxùn pǐngé.",
    "meaningVi": "Câu Thượng thiện nhược thủy mà Lão Tử nói là ca ngợi phẩm cách khiêm nhường của nước nuôi dưỡng vạn vật mà không tranh danh lợi.",
    "focusTones": [
      "Danh ngôn 上善若水",
      "Từ cao cấp 泽被 (zébèi)"
    ],
    "tipVi": "Giữ giọng trầm tĩnh, khoan thai như giảng triết học."
  },
  {
    "id": "sp-hsk8-basic-10",
    "level": "HSK8",
    "subDifficulty": "basic",
    "topic": "Tư tưởng trường tồn",
    "hanzi": "唯有经得起时间淘洗与实践检验的思想，方能在历史长河中历久弥新。",
    "pinyin": "Wéiyǒu jīngdeqǐ shíjiān táoxǐ yǔ shíjiàn jiǎnyàn de sīxiǎng, fāng néng zài lìshǐ chánghé zhōng lìjiǔmíxīn.",
    "meaningVi": "Chỉ những tư tưởng chịu được sự sàng lọc của thời gian và kiểm nghiệm của thực tiễn mới có thể càng lâu càng mới trong dòng chảy lịch sử.",
    "focusTones": [
      "Thành ngữ 历久弥新",
      "Âm bật hơi t, ch"
    ],
    "tipVi": "Nhấn trang trọng vào thành ngữ kết 历久弥新."
  },
  {
    "id": "sp-hsk8-advanced-1",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Chuỗi giá trị",
    "hanzi": "企业唯有向研发设计与品牌营销两端攀升，方能摆脱低端锁定。",
    "pinyin": "Qǐyè wéiyǒu xiàng yánfā shèjì yǔ pǐnpái yíngxiāo liǎng duān pānshēng, fāng néng bǎituō dīduān suǒdìng.",
    "meaningVi": "Doanh nghiệp chỉ có vươn lên hai đầu R&D thiết kế và tiếp thị thương hiệu mới thoát khỏi bẫy giá trị thấp.",
    "focusTones": [
      "Thuật ngữ 低端锁定",
      "Âm bật hơi p, t"
    ],
    "tipVi": "Đọc dứt khoát, nhấn vào 攀升 và 摆脱低端锁定."
  },
  {
    "id": "sp-hsk8-advanced-2",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Quản trị ESG",
    "hanzi": "环境、社会和公司治理即ESG理念，已成为衡量跨国企业长期投资价值的核心标尺。",
    "pinyin": "Huánjìng, shèhuì hé gōngsī zhìlǐ jí ESG lǐniàn, yǐ chéngwéi héngliáng kuàguó qǐyè chángqī tóuzī jiàzhí de héxīn biāochǐ.",
    "meaningVi": "Triết lý Môi trường, Xã hội và Quản trị doanh nghiệp (ESG) đã trở thành thước đo cốt lõi đánh giá giá trị đầu tư dài hạn của doanh nghiệp đa quốc gia.",
    "focusTones": [
      "Thuật ngữ ESG, 核心标尺",
      "Âm cuốn lưỡi sh, zh, ch"
    ],
    "tipVi": "Ngắt hơi nhẹ sau ESG理念, nhấn rõ 核心标尺."
  },
  {
    "id": "sp-hsk8-advanced-3",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Chống độc quyền",
    "hanzi": "针对数字平台滥用市场支配地位的行为，反垄断监管亟需建立更具前瞻性的规制框架。",
    "pinyin": "Zhēnduì shùzì píngtái lànyòng shìchǎng zhīpèi dìwèi de xíngwéi, fǎnlǒngduàn jiānguǎn jíxū jiànlì gèng jù qiánzhānxìng de guīzhì kuàngjià.",
    "meaningVi": "Nhắm vào hành vi lạm dụng vị trí thống lĩnh thị trường của nền tảng số, cơ quan giám sát chống độc quyền cấp thiết cần xây khung quy chế có tầm nhìn xa hơn.",
    "focusTones": [
      "Thuật ngữ 支配地位, 亟需 (jíxū), 前瞻性"
    ],
    "tipVi": "Đọc chuẩn 亟需 (jíxū) và 前瞻性 (qiánzhānxìng)."
  },
  {
    "id": "sp-hsk8-advanced-4",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Chính sách vĩ mô",
    "hanzi": "宏观审慎政策与货币政策的双支柱调控框架，有效防范了系统性金融风险的传染。",
    "pinyin": "Hóngguān shěnshèn zhèngcè yǔ huòbì zhèngcè de shuāngzhīzhù tiáokòng kuàngjià, yǒuxiào fángfàn le xìtǒngxìng jīnróng fēngxiǎn de chuánrǎn.",
    "meaningVi": "Khung điều tiết hai trụ cột gồm chính sách thận trọng vĩ mô và chính sách tiền tệ đã phòng ngừa hiệu quả sự lây lan rủi ro tài chính hệ thống.",
    "focusTones": [
      "Thuật ngữ 宏观审慎, 双支柱调控"
    ],
    "tipVi": "Chia nhịp hợp lý sau 调控框架 để giữ hơi đều."
  },
  {
    "id": "sp-hsk8-advanced-5",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "CBAM",
    "hanzi": "碳边境调节机制的实施将对高耗能出口产业构成严峻挑战，倒逼企业加快绿色转型。",
    "pinyin": "Tàn biānjìng tiáojié jīzhì de shíshī jiāng duì gāo hàonéng chūkǒu chǎnyè gòuchéng yánjùn tiǎozhàn, dàobī qǐyè jiākuài lǜsè zhuǎnxíng.",
    "meaningVi": "Việc thực thi Cơ chế Điều chỉnh Biên giới Carbon sẽ đặt ra thách thức gay gắt cho ngành xuất khẩu tiêu thụ nhiều năng lượng, buộc doanh nghiệp đẩy nhanh chuyển đổi xanh.",
    "focusTones": [
      "Từ vựng 倒逼 (dàobī)",
      "Vận mẫu ü (jùn, lǜ)"
    ],
    "tipVi": "Nhấn rõ động từ 倒逼 (dàobī - gây sức ép buộc phải)."
  },
  {
    "id": "sp-hsk8-advanced-6",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Quản trị tập đoàn",
    "hanzi": "股权激励机制旨在将管理层收益与公司长远发展绑定，从而降低委托代理成本。",
    "pinyin": "Gǔquán jīlì jīzhì zhǐzài jiāng guǎnlǐcéng shōuyì yǔ gōngsī chángyuǎn fāzhǎn bǎngdìng, cóng'ér jiàngdī wěituō dàilǐ chéngběn.",
    "meaningVi": "Cơ chế khuyến khích bằng cổ phần nhằm gắn thu nhập quản lý với phát triển lâu dài của công ty, từ đó giảm chi phí ủy thác đại diện.",
    "focusTones": [
      "Cấu trúc 旨在...从而...",
      "Thuật ngữ 委托代理成本"
    ],
    "tipVi": "Đọc mạch lạc, nhấn vào 旨在 và 从而."
  },
  {
    "id": "sp-hsk8-advanced-7",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Bản quyền AI",
    "hanzi": "生成式人工智能在重塑内容生产范式的同时，也引发了版权归属的法律争议。",
    "pinyin": "Shēngchéngshì réngōng zhìnéng zài chóngsù nèiróng shēngchǎn fànshì de tóngshí, yě yǐnfā le bǎnquán guīshǔ de fǎlǜ zhēngyì.",
    "meaningVi": "Trí tuệ nhân tạo tạo sinh trong khi tái định hình mô thức sản xuất nội dung cũng làm dấy lên tranh cãi pháp lý về quyền tác giả.",
    "focusTones": [
      "Thuật ngữ 生成式, 范式 (fànshì)"
    ],
    "tipVi": "Đọc rõ 范式 (fànshì - paradigm) và 版权归属."
  },
  {
    "id": "sp-hsk8-advanced-8",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Danh mục hạn chế",
    "hanzi": "自由贸易试验区通过实施负面清单管理模式，大幅放宽了外商投资的市场准入门槛。",
    "pinyin": "Zìyóu màoyì shìyànqū tōngguò shíshī fùmiàn qīngdān guǎnlǐ móshì, dàfú fàngkuān le wàishāng tóuzī de shìchǎng zhǔnrù ménkǎn.",
    "meaningVi": "Khu thí điểm thương mại tự do thông qua mô hình quản lý danh mục hạn chế đã nới lỏng đáng kể ngưỡng tiếp cận thị trường cho đầu tư nước ngoài.",
    "focusTones": [
      "Thuật ngữ 负面清单, 准入门槛"
    ],
    "tipVi": "Đọc rõ 门槛 (ménkǎn - ngưỡng cửa) với thanh 3 rõ nét."
  },
  {
    "id": "sp-hsk8-advanced-9",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Xử lý khủng hoảng",
    "hanzi": "企业危机公关的黄金法则是快速响应、坦诚担责，任何推诿只会加剧信任危机。",
    "pinyin": "Qǐyè wēijī gōngguān de huángjīn fǎzé shì kuàisù xiǎngyìng, tǎnchéng dānzé, rènhé tuīwěi zhǐ huì jiājù xìnrèn wēijī.",
    "meaningVi": "Nguyên tắc vàng trong PR khủng hoảng là phản ứng nhanh, thẳng thắn nhận trách nhiệm; bất kỳ sự đùn đẩy nào chỉ làm trầm trọng thêm khủng hoảng niềm tin.",
    "focusTones": [
      "Từ cao cấp 推诿 (tuīwěi - đùn đẩy)"
    ],
    "tipVi": "Nhấn mạnh cặp 4 chữ 快速响应、坦诚担责."
  },
  {
    "id": "sp-hsk8-advanced-10",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "topic": "Blockchain",
    "hanzi": "通过引入区块链溯源技术，跨境生鲜供应链实现了从原产地到餐桌的全流程透明化监管。",
    "pinyin": "Tōngguò yǐnrù qūkuàiliàn sùyuán jìshù, kuàjìng shēngxiān gōngyìngliàn shíxiàn le cóng yuánchǎndì dào cānzhuō de quán liúchéng tòumínghuà jiānguǎn.",
    "meaningVi": "Thông qua công nghệ truy xuất nguồn gốc blockchain, chuỗi cung ứng thực phẩm tươi sống xuyên biên giới đã thực hiện giám sát minh bạch toàn quy trình từ nơi sản xuất đến bàn ăn.",
    "focusTones": [
      "Thuật ngữ 区块链溯源 (qūkuàiliàn sùyuán)"
    ],
    "tipVi": "Đọc chuẩn 溯源 (sùyuán - truy xuất nguồn gốc)."
  },
  {
    "id": "sp-hsk9-basic-1",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Cổ văn Lý Bạch",
    "hanzi": "夫天地者，万物之逆旅也；光阴者，百代之过客也。",
    "pinyin": "Fú tiāndì zhě, wànwù zhī nìlǚ yě; guāngyīn zhě, bǎidài zhī guòkè yě.",
    "meaningVi": "Trời đất là quán trọ của vạn vật; thời gian là khách qua đường của trăm đời.",
    "focusTones": [
      "Văn ngôn 夫 (fú), 者...也",
      "Âm cổ điển"
    ],
    "tipVi": "Chữ 夫 ở đầu câu văn ngôn đọc thanh 2 (fú); đọc khoan thai, trầm lắng."
  },
  {
    "id": "sp-hsk9-basic-2",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Tầm nhìn chiến lược",
    "hanzi": "不谋万世者，不足谋一时；不谋全局者，不足谋一域。",
    "pinyin": "Bù móu wànshì zhě, bùzú móu yìshí; bù móu quánjú zhě, bùzú móu yíyù.",
    "meaningVi": "Người không mưu tính cho muôn đời thì không đủ để mưu tính một thời; người không mưu tính toàn cục thì không đủ để mưu tính một vùng.",
    "focusTones": [
      "Câu đối ngẫu cổ văn",
      "Biến điệu 一 (yìshí, yíyù)"
    ],
    "tipVi": "Giữ nhịp đối xứng mạnh mẽ giữa hai vế câu."
  },
  {
    "id": "sp-hsk9-basic-3",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Đạo học thuật",
    "hanzi": "博学之，审问之，慎思之，明辨之，笃行之，此乃治学之根本要义。",
    "pinyin": "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī, cǐ nǎi zhìxué zhī gēnběn yàoyì.",
    "meaningVi": "Học rộng, hỏi kỹ, nghĩ cẩn trọng, phân biệt rõ ràng, thực hành chân thực bền bỉ, đó chính là yếu nghĩa căn bản của việc làm học thuật.",
    "focusTones": [
      "5 vế bài tỷ cổ văn",
      "Từ cổ 笃行 (dǔxíng)"
    ],
    "tipVi": "Đọc 5 vế đầu với nhịp điệu tăng tiến, kết đĩnh đạc ở 此乃..."
  },
  {
    "id": "sp-hsk9-basic-4",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Chiến Quốc Sách",
    "hanzi": "泰山不让土壤，故能成其大；河海不择细流，故能就其深。",
    "pinyin": "Tàishān bú ràng tǔrǎng, gù néng chéng qí dà; héhǎi bù zé xìliú, gù néng jiù qí shēn.",
    "meaningVi": "Núi Thái Sơn không từ chối đất bụi nên mới tạo nên sự vĩ đại; sông biển không kén dòng chảy nhỏ nên mới đạt được độ sâu.",
    "focusTones": [
      "Cổ văn 故能...",
      "Biến điệu 不 (bú ràng)"
    ],
    "tipVi": "Thể hiện khí phách hùng vĩ qua nhịp ngắt chuẩn xác."
  },
  {
    "id": "sp-hsk9-basic-5",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Trị quốc",
    "hanzi": "治国有常，而利民为本；政教有经，而令行为上。",
    "pinyin": "Zhìguó yǒu cháng, ér lìmín wéi běn; zhèngjiào yǒu jīng, ér lìngxíng wéi shàng.",
    "meaningVi": "Trị nước có phép thường nhưng lợi dân là gốc; chính giáo có nguyên tắc nhưng mệnh lệnh được thực thi là trên hết.",
    "focusTones": [
      "Văn ngôn 为本, 为上"
    ],
    "tipVi": "Nhấn rõ hai điểm rơi 利民为本 và 令行为上."
  },
  {
    "id": "sp-hsk9-basic-6",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Thông diễn học",
    "hanzi": "在跨文化诠释学视野下，经典文本的每一次重译都是一场跨越时空的思想对话。",
    "pinyin": "Zài kuàwénhuà quánshìxué shìyě xià, jīngdiǎn wénběn de měi yí cì chóngyì dōu shì yì chǎng kuàyuè shíkōng de sīxiǎng duìhuà.",
    "meaningVi": "Dưới góc nhìn thông diễn học liên văn hóa, mỗi lần dịch lại văn bản kinh điển đều là một cuộc đối thoại tư tưởng vượt không gian thời gian.",
    "focusTones": [
      "Thuật ngữ 诠释学 (quánshìxué)",
      "Đa âm tự 重 (chóngyì)"
    ],
    "tipVi": "Chú ý 重译 đọc là chóngyì (dịch lại), không đọc zhòng."
  },
  {
    "id": "sp-hsk9-basic-7",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Phê bình học thuật",
    "hanzi": "学术批评应当秉持公允客观之立场，既不阿谀奉承，亦不吹毛求疵。",
    "pinyin": "Xuéshù pīpíng yīngdāng bǐngchí gōngyǔn kèguān zhī lìchǎng, jì bù ēyúfèngchéng, yì bù chuīmáoyícī.",
    "meaningVi": "Phê bình học thuật cần giữ lập trường công bằng khách quan, vừa không xu nịnh tâng bốc, cũng không bới lông tìm vết.",
    "focusTones": [
      "Thành ngữ 阿谀奉承 (ēyú), 吹毛求疵 (cī)"
    ],
    "tipVi": "Chú ý phát âm chuẩn 阿谀 (ēyú) và 疵 (cī - thanh 1)."
  },
  {
    "id": "sp-hsk9-basic-8",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Kiên trì",
    "hanzi": "绳锯木断，水滴石穿，凡成大事者皆需有锲而不舍之坚韧毅力。",
    "pinyin": "Shéngjùmùduàn, shuǐdīshíchuān, fán chéng dàshì zhě jiē xū yǒu qiè'érbùshě zhī jiānrèn yìlì.",
    "meaningVi": "Dây cưa gỗ đứt, nước chảy đá mòn, phàm người làm nên việc lớn đều cần có nghị lực kiên cường bền bỉ không bỏ cuộc.",
    "focusTones": [
      "Thành ngữ 锲而不舍 (qiè'érbùshě)"
    ],
    "tipVi": "Đọc chuẩn 锲 (qiè - thanh 4), không đọc nhầm thành qì."
  },
  {
    "id": "sp-hsk9-basic-9",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Pháp trị",
    "hanzi": "法者，天下之程式也，万事之仪表也；良法善治乃国家长治久安之基石。",
    "pinyin": "Fǎ zhě, tiānxià zhī chéngshì yě, wànshì zhī yíbiǎo yě; liángfǎ shànzhì nǎi guójiā chángzhìjiǔ'ān zhī jīshí.",
    "meaningVi": "Pháp luật là khuôn phép của thiên hạ, là thước đo của muôn việc; luật tốt và quản trị khéo là nền tảng cho sự trị an lâu dài của quốc gia.",
    "focusTones": [
      "Văn ngôn 良法善治, 长治久安"
    ],
    "tipVi": "Giọng đanh thép, trang nghiêm, nhấn rõ 良法善治."
  },
  {
    "id": "sp-hsk9-basic-10",
    "level": "HSK9",
    "subDifficulty": "basic",
    "topic": "Hoành Cừ Tứ Cú",
    "hanzi": "学者当有为天地立心、为生民立命、为往圣继绝学、为万世开太平之胸怀。",
    "pinyin": "Xuézhě dāng yǒu wèi tiāndì lìxīn, wèi shēngmín lìmìng, wèi wǎngshèng jì juéxué, wèi wànshì kāi tàipíng zhī xiōnghuái.",
    "meaningVi": "Học giả cần có tấm lòng vì trời đất lập tâm, vì dân sinh lập mệnh, vì bậc thánh hiền xưa nối tiếp tuyệt học, vì muôn đời mở ra thái bình.",
    "focusTones": [
      "Tứ cú nổi tiếng của Trương Tải",
      "Âm thanh 4 为 (wèi)"
    ],
    "tipVi": "Đọc hùng tráng, ngắt nhịp dứt khoát từng vế trong 4 câu."
  },
  {
    "id": "sp-hsk9-advanced-1",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Đa phương",
    "hanzi": "在全球经济复苏乏力、地缘博弈日趋复杂的背景下，重振多边贸易体制成为紧迫共识。",
    "pinyin": "Zài quánqiú jīngjì fūsū fálì, dìyuán bóyì rìqū fùzá de bèijǐng xià, chóngzhèn duōbiān màoyì tǐzhì chéngwéi jǐnpò gòngshí.",
    "meaningVi": "Trong bối cảnh kinh tế toàn cầu phục hồi yếu ớt và đấu trí địa chính trị ngày càng phức tạp, chấn hưng thể chế thương mại đa phương trở thành nhận thức chung cấp bách.",
    "focusTones": [
      "Thuật ngữ 复苏乏力, 地缘博弈, 重振"
    ],
    "tipVi": "Đọc chuẩn ngữ điệu thông tấn xã, nhấn vào 重振多边贸易体制."
  },
  {
    "id": "sp-hsk9-advanced-2",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Nợ công",
    "hanzi": "主权债务危机的外溢效应正在侵蚀部分新兴市场国家的金融稳定与外汇储备缓冲能力。",
    "pinyin": "Zhǔquán zhàiwù wēijī de wàiyì xiàoyìng zhèngzài qīnshí bùfen xīnxīng shìchǎng guójiā de jīnróng wěndìng yǔ wàihuì chǔbèi huǎnchōng nénglì.",
    "meaningVi": "Hiệu ứng lan tỏa của khủng hoảng nợ công đang bào mòn sự ổn định tài chính và khả năng đệm dự trữ ngoại hối của một số quốc gia thị trường mới nổi.",
    "focusTones": [
      "Thuật ngữ 外溢效应, 侵蚀, 外汇储备"
    ],
    "tipVi": "Ngắt hơi nhẹ sau 外溢效应 và 金融稳定."
  },
  {
    "id": "sp-hsk9-advanced-3",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Khí hậu",
    "hanzi": "构建公正合理的全球气候治理架构，必须坚持共同但有区别的责任原则。",
    "pinyin": "Gòujiàn gōngzhèng hélǐ de quánqiú qìhòu zhìlǐ jiàgòu, bìxū jiānchí gòngtóng dàn yǒu qūbié de zérèn yuánzé.",
    "meaningVi": "Xây dựng cấu trúc quản trị khí hậu toàn cầu công bằng hợp lý bắt buộc phải kiên trì nguyên tắc trách nhiệm chung nhưng có phân biệt.",
    "focusTones": [
      "Cụm ngoại giao 共同但有区别的责任"
    ],
    "tipVi": "Nhấn rõ từng chữ trong nguyên tắc cốt lõi 共同但有区别的责任."
  },
  {
    "id": "sp-hsk9-advanced-4",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Kinh tế thực",
    "hanzi": "产业链的过度证券化与脱实向虚倾向，极易诱发资产泡沫并削弱实体经济韧性。",
    "pinyin": "Chǎnyèliàn de guòdù zhèngquànhuà yǔ tuōshíxiàngxū qīngxiàng, jíyì yòufā zīchǎn pàomò bìng xuēruò shítǐ jīngjì rènxìng.",
    "meaningVi": "Khuynh hướng chứng khoán hóa quá mức và rời bỏ kinh tế thực sang đầu cơ ảo rất dễ gây bong bóng tài sản và làm suy yếu sức chống chịu của kinh tế thực.",
    "focusTones": [
      "Thuật ngữ 脱实向虚, 削弱 (xuēruò)"
    ],
    "tipVi": "Chú ý 削弱 đọc là xuēruò (thanh 1), không đọc xiāo."
  },
  {
    "id": "sp-hsk9-advanced-5",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Nghịch lý Triffin",
    "hanzi": "国际货币体系的多元化演进有助于缓解单一主权货币充当储备资产所带来的特里芬难题。",
    "pinyin": "Guójì huòbì tǐxì de duōyuánhuà yǎnjìn yǒuzhùyú huǎnjiě dānyī zhǔquán huòbì chōngdāng chǔbèi zīchǎn suǒ dàilái de Tèlǐfēn nántí.",
    "meaningVi": "Sự tiến hóa đa dạng hóa của hệ thống tiền tệ quốc tế giúp làm dịu nghịch lý Triffin do một đồng tiền quốc gia duy nhất làm tài sản dự trữ toàn cầu gây ra.",
    "focusTones": [
      "Thuật ngữ kinh tế 特里芬难题"
    ],
    "tipVi": "Chia nhịp hợp lý trước 有助于 và trước 所带来的."
  },
  {
    "id": "sp-hsk9-advanced-6",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Tiêu chuẩn kỹ thuật",
    "hanzi": "技术标准制定权的争夺本质上是产业话语权与未来市场超额利润分配权的竞争。",
    "pinyin": "Jìshù biāozhǔn zhìdìngquán de zhēngduó běnzhì shàng shì chǎnyè huàyǔquán yǔ wèilái shìchǎng chāo'é lìrùn fēnpèiquán de jìngzhēng.",
    "meaningVi": "Cuộc tranh giành quyền xây dựng tiêu chuẩn kỹ thuật về bản chất là sự cạnh tranh quyền phát ngôn ngành và quyền phân phối lợi nhuận siêu ngạch tương lai.",
    "focusTones": [
      "Thuật ngữ 话语权, 超额利润"
    ],
    "tipVi": "Nhấn mạnh vào 本质上是 để làm nổi bật luận điểm."
  },
  {
    "id": "sp-hsk9-advanced-7",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Sức sản xuất mới",
    "hanzi": "通过深化供给侧结构性改革与扩大制度型开放，中国经济正加快培育新质生产力。",
    "pinyin": "Tōngguò shēnhuà gōngjǐcè jiégòuxìng gǎigé yǔ kuòdà zhìdùxíng kāifàng, Zhōngguó jīngjì zhèng jiākuài péiyù xīnzhì shēngchǎnlì.",
    "meaningVi": "Thông qua làm sâu sắc cải cách cơ cấu bên cung và mở rộng mở cửa thể chế, kinh tế Trung Quốc đang đẩy nhanh bồi dưỡng lực lượng sản xuất chất lượng mới.",
    "focusTones": [
      "Đa âm tự 供给 (gōngjǐ)",
      "Thuật ngữ 新质生产力"
    ],
    "tipVi": "Chú ý 供给 đọc là gōngjǐ (không đọc gěi)."
  },
  {
    "id": "sp-hsk9-advanced-8",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Đồng tâm hiệp lực",
    "hanzi": "在应对全球性公共危机时，以邻为壑的短视行为终将反噬自身，唯有同舟共济方能共克时艰。",
    "pinyin": "Zài yìngduì quánqiúxìng gōnggòng wēijī shí, yǐlínwéihè de duǎnshì xíngwéi zhōngjiāng fǎnshì zìshēn, wéiyǒu tóngzhōugòngjì fāng néng gòngkèshíjiān.",
    "meaningVi": "Khi ứng phó khủng hoảng công cộng toàn cầu, hành vi thiển cận đẩy khó khăn cho láng giềng cuối cùng sẽ hại chính mình, chỉ có đồng tâm hiệp lực mới cùng vượt gian nan.",
    "focusTones": [
      "Thành ngữ 以邻为壑, 同舟共济, 共克时艰"
    ],
    "tipVi": "Đọc chuẩn 壑 (hè) và 噬 (shì), ngữ điệu hùng hồn."
  },
  {
    "id": "sp-hsk9-advanced-9",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Ngôn từ ngoại giao",
    "hanzi": "外交辞令既讲求字斟句酌的严谨与含蓄，亦不失原则立场上的坚定与锋芒。",
    "pinyin": "Wàijiāo cílìng jì jiǎngqiú zìzhēnjùzhuó de yánjǐn yǔ hánxù, yì bù shī yuánzé lìchǎng shàng de jiāndìng yǔ fēngmáng.",
    "meaningVi": "Ngôn từ ngoại giao vừa đòi hỏi sự chặt chẽ hàm súc cân nhắc từng chữ từng câu, vừa không đánh mất sự kiên định và sắc bén trên lập trường nguyên tắc.",
    "focusTones": [
      "Thành ngữ 字斟句酌",
      "Cấu trúc 既...亦..."
    ],
    "tipVi": "Đọc sắc sảo, nhấn rõ sự cân bằng giữa 含蓄 và 锋芒."
  },
  {
    "id": "sp-hsk9-advanced-10",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "topic": "Kỷ nguyên mới",
    "hanzi": "唯有以人类命运共同体理念为引领，方能跨越修昔底德陷阱，开创和平繁荣的新纪元。",
    "pinyin": "Wéiyǒu yǐ rénlèi mìngyùn gòngtóngtǐ lǐniàn wéi yǐnlǐng, fāng néng kuàyuè Xiūxīdǐdé xiànjǐng, kāichuàng hépíng fánróng de xīn jìyuán.",
    "meaningVi": "Chỉ có lấy triết lý Cộng đồng chung vận mệnh nhân loại làm dẫn dắt mới có thể vượt qua bẫy Thucydides, mở ra kỷ nguyên mới hòa bình và thịnh vượng.",
    "focusTones": [
      "Thuật ngữ 修昔底德陷阱, 人类命运共同体"
    ],
    "tipVi": "Giọng diễn văn trang trọng, kết thúc dứt khoát ở 新纪元."
  },
  ...SPEAKING_SENTENCES_EXTRA
];
