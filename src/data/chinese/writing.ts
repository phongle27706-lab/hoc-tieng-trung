import type { HSKLevel, SubDifficulty } from "@/types";
import { SENTENCE_ORDER_EXERCISES_EXTRA } from "./writing-extra";

export interface HanziStrokeStep {
  nameVi: string;
  ruleVi: string;
  points: [number, number][];
}

export interface HanziStrokeTemplate {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  radical: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  strokes: HanziStrokeStep[];
}

export interface SentenceOrderExercise {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  grammarTopic: string;
  promptVi: string;
  scrambledTokens: string[];
  correctAnswer: string;
  pinyin?: string;
  explanationVi: string;
}

export interface WritingPrompt {
  id: string;
  level: HSKLevel;
  subDifficulty: SubDifficulty;
  title: string;
  examType: string;
  scenarioVi: string;
  minChars: number;
  targetChars: number;
  keywords: string[];
  checklistVi: string[];
  sampleZh: string;
  samplePinyin?: string;
  sampleVi: string;
}

export const HANZI_STROKE_BANK: HanziStrokeTemplate[] = [
  {
    "hanzi": "一",
    "pinyin": "yī",
    "meaningVi": "Một",
    "radical": "一 (Nhất)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            50
          ],
          [
            50,
            50
          ],
          [
            82,
            50
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "二",
    "pinyin": "èr",
    "meaningVi": "Hai",
    "radical": "二 (Nhị)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang trên (横)",
        "ruleVi": "Từ trên xuống dưới: nét ngang trên ngắn hơn",
        "points": [
          [
            26,
            34
          ],
          [
            50,
            34
          ],
          [
            74,
            34
          ]
        ]
      },
      {
        "nameVi": "Ngang dưới (横)",
        "ruleVi": "Nét ngang dưới dài hơn làm đáy",
        "points": [
          [
            16,
            68
          ],
          [
            50,
            68
          ],
          [
            84,
            68
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "三",
    "pinyin": "sān",
    "meaningVi": "Ba",
    "radical": "一 (Nhất)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            26,
            26
          ],
          [
            50,
            26
          ],
          [
            74,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            50
          ],
          [
            50,
            50
          ],
          [
            70,
            50
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            74
          ],
          [
            50,
            74
          ],
          [
            84,
            74
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "十",
    "pinyin": "shí",
    "meaningVi": "Mười",
    "radical": "十 (Thập)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Ngang trước sổ sau (先横后竖)",
        "points": [
          [
            18,
            46
          ],
          [
            50,
            46
          ],
          [
            82,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Kéo thẳng chính giữa từ trên xuống dưới",
        "points": [
          [
            50,
            16
          ],
          [
            50,
            51
          ],
          [
            50,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "人",
    "pinyin": "rén",
    "meaningVi": "Người",
    "radical": "人 (Nhân)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Phẩy trước mác sau (先撇后捺)",
        "points": [
          [
            52,
            16
          ],
          [
            38,
            50
          ],
          [
            20,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Bắt đầu từ thân nét phẩy kéo xuống phải",
        "points": [
          [
            46,
            44
          ],
          [
            62,
            64
          ],
          [
            82,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "大",
    "pinyin": "dà",
    "meaningVi": "To, lớn",
    "radical": "大 (Đại)",
    "level": "HSK0",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            40
          ],
          [
            50,
            40
          ],
          [
            80,
            40
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            16
          ],
          [
            36,
            50
          ],
          [
            18,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            42
          ],
          [
            65,
            63
          ],
          [
            84,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaningVi": "Miệng",
    "radical": "口 (Khẩu)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ trái (竖)",
        "ruleVi": "Viết cạnh trái trước",
        "points": [
          [
            24,
            24
          ],
          [
            24,
            50
          ],
          [
            24,
            76
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết ngang trên rồi gập xuống cạnh phải",
        "points": [
          [
            24,
            24
          ],
          [
            76,
            24
          ],
          [
            76,
            76
          ]
        ]
      },
      {
        "nameVi": "Ngang đáy (横)",
        "ruleVi": "Đóng đáy sau cùng (先里头后封口)",
        "points": [
          [
            26,
            74
          ],
          [
            51,
            74
          ],
          [
            76,
            74
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "日",
    "pinyin": "rì",
    "meaningVi": "Mặt trời, ngày",
    "radical": "日 (Nhật)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            20
          ],
          [
            26,
            51
          ],
          [
            26,
            82
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            26,
            20
          ],
          [
            74,
            20
          ],
          [
            74,
            82
          ]
        ]
      },
      {
        "nameVi": "Ngang giữa (横)",
        "ruleVi": "Viết nét bên trong trước khi đóng đáy",
        "points": [
          [
            28,
            50
          ],
          [
            50,
            50
          ],
          [
            72,
            50
          ]
        ]
      },
      {
        "nameVi": "Ngang đáy (横)",
        "ruleVi": "Đóng đáy sau cùng",
        "points": [
          [
            28,
            80
          ],
          [
            51,
            80
          ],
          [
            74,
            80
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "月",
    "pinyin": "yuè",
    "meaningVi": "Mặt trăng, tháng",
    "radical": "月 (Nguyệt)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            30,
            18
          ],
          [
            28,
            51
          ],
          [
            22,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            30,
            18
          ],
          [
            72,
            18
          ],
          [
            72,
            84
          ],
          [
            62,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            42
          ],
          [
            50,
            42
          ],
          [
            70,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            28,
            62
          ],
          [
            49,
            62
          ],
          [
            70,
            62
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaningVi": "Nước",
    "radical": "水 (Thủy)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ móc giữa (竖钩)",
        "ruleVi": "Giữa trước hai bên sau (先中间后两边)",
        "points": [
          [
            50,
            16
          ],
          [
            50,
            84
          ],
          [
            38,
            76
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy trái (横撇)",
        "ruleVi": "Ngang ngắn rồi phẩy xuống trái",
        "points": [
          [
            18,
            44
          ],
          [
            38,
            44
          ],
          [
            18,
            74
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            34
          ],
          [
            68,
            43
          ],
          [
            54,
            52
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            52,
            48
          ],
          [
            66,
            64
          ],
          [
            84,
            80
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "木",
    "pinyin": "mù",
    "meaningVi": "Cây, gỗ",
    "radical": "木 (Mộc)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            38
          ],
          [
            50,
            38
          ],
          [
            80,
            38
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            14
          ],
          [
            50,
            50
          ],
          [
            50,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            38
          ],
          [
            36,
            58
          ],
          [
            18,
            78
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            38
          ],
          [
            64,
            58
          ],
          [
            82,
            78
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "火",
    "pinyin": "huǒ",
    "meaningVi": "Lửa",
    "radical": "火 (Hỏa)",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            24,
            36
          ],
          [
            30,
            50
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            32
          ],
          [
            72,
            40
          ],
          [
            62,
            48
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            16
          ],
          [
            37,
            50
          ],
          [
            20,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            48
          ],
          [
            64,
            66
          ],
          [
            82,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaningVi": "Bạn",
    "radical": "亻 (Nhân đứng)",
    "level": "HSK1",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            32,
            16
          ],
          [
            26,
            32
          ],
          [
            16,
            48
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            38
          ],
          [
            26,
            62
          ],
          [
            26,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            54,
            16
          ],
          [
            49,
            30
          ],
          [
            40,
            44
          ]
        ]
      },
      {
        "nameVi": "Ngang móc (横钩)",
        "ruleVi": "Ngang sang phải rồi móc nhẹ xuống",
        "points": [
          [
            48,
            32
          ],
          [
            84,
            32
          ],
          [
            76,
            44
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            64,
            36
          ],
          [
            64,
            84
          ],
          [
            54,
            78
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            52,
            52
          ],
          [
            47,
            63
          ],
          [
            38,
            74
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            74,
            52
          ],
          [
            84,
            74
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaningVi": "Tốt, khỏe",
    "radical": "女 (Nữ)",
    "level": "HSK1",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy chấm (撇点)",
        "ruleVi": "Phẩy xuống trái rồi bẻ chấm sang phải",
        "points": [
          [
            30,
            18
          ],
          [
            20,
            56
          ],
          [
            42,
            72
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            42,
            34
          ],
          [
            32,
            58
          ],
          [
            18,
            82
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            14,
            48
          ],
          [
            46,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy (横撇)",
        "ruleVi": "Ngang rồi phẩy ngắn về giữa",
        "points": [
          [
            54,
            24
          ],
          [
            80,
            24
          ],
          [
            66,
            42
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            66,
            42
          ],
          [
            66,
            84
          ],
          [
            56,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            48,
            54
          ],
          [
            67,
            54
          ],
          [
            86,
            54
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaningVi": "Tôi",
    "radical": "戈 (Qua)",
    "level": "HSK1",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            44,
            18
          ],
          [
            34,
            23
          ],
          [
            20,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            44
          ],
          [
            50,
            44
          ],
          [
            84,
            44
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            34,
            24
          ],
          [
            34,
            84
          ],
          [
            24,
            78
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            16,
            66
          ],
          [
            46,
            54
          ]
        ]
      },
      {
        "nameVi": "Nghiêng móc (斜钩)",
        "ruleVi": "Kéo chéo dài sang phải rồi móc lên",
        "points": [
          [
            56,
            14
          ],
          [
            72,
            68
          ],
          [
            84,
            84
          ],
          [
            86,
            70
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            80,
            48
          ],
          [
            68,
            63
          ],
          [
            52,
            78
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            18
          ],
          [
            78,
            28
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "中",
    "pinyin": "zhōng",
    "meaningVi": "Giữa, Trung Quốc",
    "radical": "丨 (Cổn)",
    "level": "HSK1",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            22,
            30
          ],
          [
            22,
            44
          ],
          [
            22,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            22,
            30
          ],
          [
            78,
            30
          ],
          [
            78,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            56
          ],
          [
            50,
            56
          ],
          [
            76,
            56
          ]
        ]
      },
      {
        "nameVi": "Sổ giữa (竖)",
        "ruleVi": "Nét sổ xuyên tâm viết sau cùng",
        "points": [
          [
            50,
            14
          ],
          [
            50,
            51
          ],
          [
            50,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "国",
    "pinyin": "guó",
    "meaningVi": "Quốc gia",
    "radical": "囗 (Vi)",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            18,
            18
          ],
          [
            18,
            51
          ],
          [
            18,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            18,
            18
          ],
          [
            82,
            18
          ],
          [
            82,
            84
          ],
          [
            72,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            32,
            34
          ],
          [
            50,
            34
          ],
          [
            68,
            34
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            34,
            52
          ],
          [
            50,
            52
          ],
          [
            66,
            52
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            34
          ],
          [
            50,
            52
          ],
          [
            50,
            70
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            28,
            70
          ],
          [
            50,
            70
          ],
          [
            72,
            70
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            60,
            58
          ],
          [
            66,
            66
          ]
        ]
      },
      {
        "nameVi": "Ngang đáy (横)",
        "ruleVi": "Đóng khung sau cùng",
        "points": [
          [
            20,
            82
          ],
          [
            50,
            82
          ],
          [
            80,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "学",
    "pinyin": "xué",
    "meaningVi": "Học",
    "radical": "子 (Tử)",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            26,
            16
          ],
          [
            32,
            26
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            46,
            14
          ],
          [
            52,
            24
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            74,
            14
          ],
          [
            72,
            20
          ],
          [
            66,
            26
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            20,
            32
          ],
          [
            16,
            44
          ]
        ]
      },
      {
        "nameVi": "Ngang móc (横钩)",
        "ruleVi": "Mái che phần dưới",
        "points": [
          [
            20,
            34
          ],
          [
            82,
            34
          ],
          [
            74,
            44
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy (横撇)",
        "ruleVi": "Đầu chữ Tử",
        "points": [
          [
            34,
            48
          ],
          [
            66,
            48
          ],
          [
            50,
            60
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            50,
            60
          ],
          [
            50,
            86
          ],
          [
            40,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            68
          ],
          [
            51,
            68
          ],
          [
            82,
            68
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "书",
    "pinyin": "shū",
    "meaningVi": "Sách",
    "radical": "乙 (Ất)",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            26,
            24
          ],
          [
            70,
            24
          ],
          [
            70,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            18,
            42
          ],
          [
            80,
            42
          ],
          [
            80,
            70
          ],
          [
            70,
            64
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            48,
            14
          ],
          [
            48,
            51
          ],
          [
            48,
            88
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            62,
            18
          ],
          [
            74,
            28
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "茶",
    "pinyin": "chá",
    "meaningVi": "Trà",
    "radical": "艹 (Thảo)",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            24
          ],
          [
            50,
            24
          ],
          [
            82,
            24
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            36,
            14
          ],
          [
            36,
            24
          ],
          [
            36,
            34
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            64,
            14
          ],
          [
            64,
            24
          ],
          [
            64,
            34
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            34
          ],
          [
            35,
            47
          ],
          [
            16,
            60
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            34
          ],
          [
            65,
            47
          ],
          [
            84,
            60
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            28,
            58
          ],
          [
            50,
            58
          ],
          [
            72,
            58
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            50,
            48
          ],
          [
            50,
            86
          ],
          [
            40,
            80
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            36,
            68
          ],
          [
            31,
            75
          ],
          [
            22,
            82
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            64,
            68
          ],
          [
            78,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "明",
    "pinyin": "míng",
    "meaningVi": "Sáng, ngày mai",
    "radical": "日 (Nhật)",
    "level": "HSK2",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            18,
            26
          ],
          [
            18,
            49
          ],
          [
            18,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            18,
            26
          ],
          [
            42,
            26
          ],
          [
            42,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            48
          ],
          [
            30,
            48
          ],
          [
            40,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            70
          ],
          [
            30,
            70
          ],
          [
            40,
            70
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            54,
            18
          ],
          [
            53,
            51
          ],
          [
            48,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            54,
            18
          ],
          [
            82,
            18
          ],
          [
            82,
            84
          ],
          [
            72,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            54,
            42
          ],
          [
            67,
            42
          ],
          [
            80,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            52,
            60
          ],
          [
            66,
            60
          ],
          [
            80,
            60
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "天",
    "pinyin": "tiān",
    "meaningVi": "Trời, ngày",
    "radical": "大 (Đại)",
    "level": "HSK2",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            28
          ],
          [
            50,
            28
          ],
          [
            76,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            48
          ],
          [
            50,
            48
          ],
          [
            82,
            48
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            28
          ],
          [
            36,
            56
          ],
          [
            18,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            48
          ],
          [
            65,
            66
          ],
          [
            84,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "买",
    "pinyin": "mǎi",
    "meaningVi": "Mua",
    "radical": "乙 (Ất)",
    "level": "HSK2",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang móc (横钩)",
        "ruleVi": "Ngang rồi móc xuống",
        "points": [
          [
            24,
            22
          ],
          [
            76,
            22
          ],
          [
            66,
            36
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            38,
            34
          ],
          [
            48,
            42
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            34,
            46
          ],
          [
            46,
            54
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            62
          ],
          [
            50,
            62
          ],
          [
            84,
            62
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            42
          ],
          [
            37,
            64
          ],
          [
            20,
            86
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            68
          ],
          [
            80,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "卖",
    "pinyin": "mài",
    "meaningVi": "Bán",
    "radical": "十 (Thập)",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            22
          ],
          [
            50,
            22
          ],
          [
            76,
            22
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            12
          ],
          [
            50,
            23
          ],
          [
            50,
            34
          ]
        ]
      },
      {
        "nameVi": "Ngang móc (横钩)",
        "ruleVi": "Ngang rồi móc",
        "points": [
          [
            22,
            38
          ],
          [
            78,
            38
          ],
          [
            68,
            48
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            38,
            46
          ],
          [
            48,
            52
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            34,
            54
          ],
          [
            46,
            60
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            68
          ],
          [
            42,
            68
          ],
          [
            68,
            68
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            52
          ],
          [
            37,
            70
          ],
          [
            20,
            88
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            74
          ],
          [
            82,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "车",
    "pinyin": "chē",
    "meaningVi": "Xe cộ",
    "radical": "车 (Xa)",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            22,
            26
          ],
          [
            50,
            26
          ],
          [
            78,
            26
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Phẩy chéo rồi bẻ ngang",
        "points": [
          [
            46,
            16
          ],
          [
            26,
            48
          ],
          [
            72,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            68
          ],
          [
            50,
            68
          ],
          [
            84,
            68
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            34
          ],
          [
            50,
            61
          ],
          [
            50,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "快",
    "pinyin": "kuài",
    "meaningVi": "Nhanh, vui vẻ",
    "radical": "忄 (Tâm đứng)",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            18,
            38
          ],
          [
            14,
            52
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            34,
            34
          ],
          [
            40,
            44
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            16
          ],
          [
            26,
            51
          ],
          [
            26,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            48,
            34
          ],
          [
            78,
            34
          ],
          [
            78,
            54
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            42,
            54
          ],
          [
            64,
            54
          ],
          [
            86,
            54
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            62,
            16
          ],
          [
            54,
            51
          ],
          [
            42,
            86
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            62,
            54
          ],
          [
            72,
            70
          ],
          [
            86,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "工",
    "pinyin": "gōng",
    "meaningVi": "Công việc, thợ",
    "radical": "工 (Công)",
    "level": "HSK3",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            26
          ],
          [
            50,
            26
          ],
          [
            76,
            26
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            26
          ],
          [
            50,
            51
          ],
          [
            50,
            76
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            76
          ],
          [
            50,
            76
          ],
          [
            84,
            76
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "作",
    "pinyin": "zuò",
    "meaningVi": "Làm, tác phẩm",
    "radical": "亻 (Nhân đứng)",
    "level": "HSK3",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            32,
            16
          ],
          [
            26,
            33
          ],
          [
            16,
            50
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            38
          ],
          [
            26,
            62
          ],
          [
            26,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            54,
            16
          ],
          [
            48,
            32
          ],
          [
            38,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            48,
            32
          ],
          [
            67,
            32
          ],
          [
            86,
            32
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            58,
            32
          ],
          [
            58,
            59
          ],
          [
            58,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            58,
            52
          ],
          [
            70,
            52
          ],
          [
            82,
            52
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            58,
            70
          ],
          [
            71,
            70
          ],
          [
            84,
            70
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "会",
    "pinyin": "huì",
    "meaningVi": "Hội họp, biết",
    "radical": "人 (Nhân)",
    "level": "HSK3",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            14
          ],
          [
            35,
            31
          ],
          [
            16,
            48
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            14
          ],
          [
            65,
            31
          ],
          [
            84,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            32,
            44
          ],
          [
            50,
            44
          ],
          [
            68,
            44
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            20,
            60
          ],
          [
            50,
            60
          ],
          [
            80,
            60
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Phẩy xuống trái rồi hất ngang sang phải",
        "points": [
          [
            48,
            60
          ],
          [
            26,
            82
          ],
          [
            74,
            78
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            68
          ],
          [
            80,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "货",
    "pinyin": "huò",
    "meaningVi": "Hàng hóa",
    "radical": "贝 (Bối)",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            34,
            14
          ],
          [
            28,
            25
          ],
          [
            18,
            36
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            28
          ],
          [
            28,
            38
          ],
          [
            28,
            48
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            18
          ],
          [
            68,
            26
          ],
          [
            54,
            34
          ]
        ]
      },
      {
        "nameVi": "Sổ cong móc (竖弯钩)",
        "ruleVi": "Kéo thẳng xuống, uốn cong sang phải rồi móc nhẹ lên trên",
        "points": [
          [
            56,
            14
          ],
          [
            56,
            44
          ],
          [
            82,
            44
          ],
          [
            82,
            34
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            52
          ],
          [
            28,
            65
          ],
          [
            28,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            28,
            52
          ],
          [
            72,
            52
          ],
          [
            72,
            78
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            60
          ],
          [
            39,
            74
          ],
          [
            24,
            88
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            76
          ],
          [
            78,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "发",
    "pinyin": "fā",
    "meaningVi": "Phát, gửi hàng",
    "radical": "又 (Hựu)",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Phẩy xuống rồi kéo ngang",
        "points": [
          [
            34,
            18
          ],
          [
            22,
            42
          ],
          [
            80,
            42
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            14
          ],
          [
            36,
            49
          ],
          [
            18,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy (横撇)",
        "ruleVi": "Ngang rồi phẩy chéo xuống trái",
        "points": [
          [
            38,
            54
          ],
          [
            72,
            54
          ],
          [
            32,
            86
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            40,
            56
          ],
          [
            60,
            71
          ],
          [
            84,
            86
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            18
          ],
          [
            78,
            28
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "单",
    "pinyin": "dān",
    "meaningVi": "Đơn hàng, đơn lẻ",
    "radical": "十 (Thập)",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            30,
            14
          ],
          [
            38,
            24
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            68,
            14
          ],
          [
            66,
            19
          ],
          [
            60,
            24
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            24,
            28
          ],
          [
            24,
            43
          ],
          [
            24,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            24,
            28
          ],
          [
            76,
            28
          ],
          [
            76,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            26,
            42
          ],
          [
            50,
            42
          ],
          [
            74,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            26,
            56
          ],
          [
            50,
            56
          ],
          [
            74,
            56
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            70
          ],
          [
            50,
            70
          ],
          [
            84,
            70
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            28
          ],
          [
            50,
            58
          ],
          [
            50,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "商",
    "pinyin": "shāng",
    "meaningVi": "Thương mại",
    "radical": "口 (Khẩu)",
    "level": "HSK4",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            48,
            12
          ],
          [
            52,
            20
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            24
          ],
          [
            50,
            24
          ],
          [
            82,
            24
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            34,
            28
          ],
          [
            40,
            38
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            66,
            26
          ],
          [
            64,
            32
          ],
          [
            58,
            38
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            22,
            42
          ],
          [
            22,
            64
          ],
          [
            22,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            22,
            42
          ],
          [
            78,
            42
          ],
          [
            78,
            86
          ],
          [
            68,
            80
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            44,
            46
          ],
          [
            39,
            52
          ],
          [
            30,
            58
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            46
          ],
          [
            70,
            58
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            38,
            64
          ],
          [
            38,
            72
          ],
          [
            38,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            38,
            64
          ],
          [
            62,
            64
          ],
          [
            62,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            40,
            78
          ],
          [
            50,
            78
          ],
          [
            60,
            78
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "合",
    "pinyin": "hé",
    "meaningVi": "Hợp tác, hợp đồng",
    "radical": "口 (Khẩu)",
    "level": "HSK4",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            14
          ],
          [
            35,
            31
          ],
          [
            16,
            48
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            14
          ],
          [
            65,
            31
          ],
          [
            84,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            32,
            48
          ],
          [
            50,
            48
          ],
          [
            68,
            48
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            60
          ],
          [
            28,
            72
          ],
          [
            28,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            28,
            60
          ],
          [
            72,
            60
          ],
          [
            72,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            82
          ],
          [
            50,
            82
          ],
          [
            70,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "同",
    "pinyin": "tóng",
    "meaningVi": "Cùng, đồng",
    "radical": "口 (Khẩu)",
    "level": "HSK4",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            20,
            18
          ],
          [
            20,
            52
          ],
          [
            20,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            20,
            18
          ],
          [
            80,
            18
          ],
          [
            80,
            86
          ],
          [
            70,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            32,
            34
          ],
          [
            50,
            34
          ],
          [
            68,
            34
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            34,
            48
          ],
          [
            34,
            60
          ],
          [
            34,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            34,
            48
          ],
          [
            66,
            48
          ],
          [
            66,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            36,
            70
          ],
          [
            50,
            70
          ],
          [
            64,
            70
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "运",
    "pinyin": "yùn",
    "meaningVi": "Vận chuyển",
    "radical": "辶 (Quai xước)",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            44,
            26
          ],
          [
            61,
            26
          ],
          [
            78,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            36,
            46
          ],
          [
            60,
            46
          ],
          [
            84,
            46
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Viết phần trong trước bộ quai xước",
        "points": [
          [
            56,
            46
          ],
          [
            42,
            68
          ],
          [
            78,
            64
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            72,
            54
          ],
          [
            82,
            72
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            18,
            22
          ],
          [
            26,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang gập phẩy (横折折撇)",
        "ruleVi": "Bộ quai xước",
        "points": [
          [
            14,
            48
          ],
          [
            26,
            48
          ],
          [
            20,
            62
          ],
          [
            26,
            72
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            14,
            74
          ],
          [
            48,
            79
          ],
          [
            86,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "关",
    "pinyin": "guān",
    "meaningVi": "Hải quan, đóng",
    "radical": "八 (Bát)",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            32,
            16
          ],
          [
            40,
            28
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            68,
            16
          ],
          [
            65,
            22
          ],
          [
            58,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            38
          ],
          [
            50,
            38
          ],
          [
            76,
            38
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            58
          ],
          [
            50,
            58
          ],
          [
            84,
            58
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            38
          ],
          [
            36,
            62
          ],
          [
            18,
            86
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            58
          ],
          [
            65,
            72
          ],
          [
            84,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "价",
    "pinyin": "jià",
    "meaningVi": "Giá cả",
    "radical": "亻 (Nhân đứng)",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            32,
            16
          ],
          [
            26,
            33
          ],
          [
            16,
            50
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            38
          ],
          [
            26,
            62
          ],
          [
            26,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            62,
            16
          ],
          [
            52,
            32
          ],
          [
            38,
            48
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            62,
            16
          ],
          [
            72,
            32
          ],
          [
            86,
            48
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            52,
            48
          ],
          [
            49,
            66
          ],
          [
            42,
            84
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            70,
            48
          ],
          [
            70,
            67
          ],
          [
            70,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "信",
    "pinyin": "xìn",
    "meaningVi": "Tín nhiệm, thư tín",
    "radical": "亻 (Nhân đứng)",
    "level": "HSK5",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            30,
            16
          ],
          [
            24,
            33
          ],
          [
            14,
            50
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            24,
            38
          ],
          [
            24,
            62
          ],
          [
            24,
            86
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            14
          ],
          [
            62,
            22
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            38,
            28
          ],
          [
            62,
            28
          ],
          [
            86,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            44,
            42
          ],
          [
            61,
            42
          ],
          [
            78,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            44,
            54
          ],
          [
            61,
            54
          ],
          [
            78,
            54
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            44,
            64
          ],
          [
            44,
            74
          ],
          [
            44,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            44,
            64
          ],
          [
            78,
            64
          ],
          [
            78,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            46,
            82
          ],
          [
            61,
            82
          ],
          [
            76,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "用",
    "pinyin": "yòng",
    "meaningVi": "Sử dụng",
    "radical": "用 (Dụng)",
    "level": "HSK5",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            24,
            18
          ],
          [
            23,
            51
          ],
          [
            18,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            24,
            18
          ],
          [
            78,
            18
          ],
          [
            78,
            84
          ],
          [
            68,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            40
          ],
          [
            50,
            40
          ],
          [
            76,
            40
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            60
          ],
          [
            50,
            60
          ],
          [
            76,
            60
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            20
          ],
          [
            50,
            51
          ],
          [
            50,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "证",
    "pinyin": "zhèng",
    "meaningVi": "Chứng nhận, chứng từ",
    "radical": "讠 (Ngôn)",
    "level": "HSK5",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            22,
            18
          ],
          [
            30,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang gập hất (横折提)",
        "ruleVi": "Bộ ngôn bên trái",
        "points": [
          [
            14,
            44
          ],
          [
            28,
            44
          ],
          [
            28,
            78
          ],
          [
            38,
            68
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            42,
            24
          ],
          [
            63,
            24
          ],
          [
            84,
            24
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            64,
            24
          ],
          [
            64,
            52
          ],
          [
            64,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            64,
            50
          ],
          [
            73,
            50
          ],
          [
            82,
            50
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            46,
            46
          ],
          [
            46,
            63
          ],
          [
            46,
            80
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            38,
            80
          ],
          [
            62,
            80
          ],
          [
            86,
            80
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "权",
    "pinyin": "quán",
    "meaningVi": "Quyền lợi, chủ quyền",
    "radical": "木 (Mộc)",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            36
          ],
          [
            29,
            36
          ],
          [
            44,
            36
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            30,
            16
          ],
          [
            30,
            51
          ],
          [
            30,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            30,
            36
          ],
          [
            24,
            53
          ],
          [
            14,
            70
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            32,
            46
          ],
          [
            42,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy (横撇)",
        "ruleVi": "Phần bên phải chữ Hựu",
        "points": [
          [
            48,
            28
          ],
          [
            80,
            28
          ],
          [
            44,
            82
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            36
          ],
          [
            66,
            60
          ],
          [
            86,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "利",
    "pinyin": "lì",
    "meaningVi": "Lợi ích, thuận lợi",
    "radical": "刂 (Đao đứng)",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            48,
            16
          ],
          [
            36,
            21
          ],
          [
            20,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            46
          ],
          [
            34,
            46
          ],
          [
            54,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            36,
            22
          ],
          [
            36,
            54
          ],
          [
            36,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            36,
            46
          ],
          [
            27,
            61
          ],
          [
            14,
            76
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            38,
            54
          ],
          [
            52,
            66
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            66,
            26
          ],
          [
            66,
            48
          ],
          [
            66,
            70
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            80,
            14
          ],
          [
            80,
            86
          ],
          [
            70,
            80
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "协",
    "pinyin": "xié",
    "meaningVi": "Hiệp định, phối hợp",
    "radical": "十 (Thập)",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            44
          ],
          [
            28,
            44
          ],
          [
            42,
            44
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            16
          ],
          [
            28,
            51
          ],
          [
            28,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            46,
            36
          ],
          [
            82,
            36
          ],
          [
            82,
            82
          ],
          [
            72,
            76
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            64,
            16
          ],
          [
            55,
            50
          ],
          [
            42,
            84
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            52,
            48
          ],
          [
            60,
            58
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            52
          ],
          [
            76,
            62
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "创",
    "pinyin": "chuàng",
    "meaningVi": "Sáng tạo",
    "radical": "刂 (Đao đứng)",
    "level": "HSK6",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            36,
            16
          ],
          [
            27,
            33
          ],
          [
            14,
            50
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            36,
            22
          ],
          [
            54,
            36
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            26,
            46
          ],
          [
            52,
            46
          ],
          [
            52,
            70
          ],
          [
            42,
            64
          ]
        ]
      },
      {
        "nameVi": "Sổ cong móc (竖弯钩)",
        "ruleVi": "Kéo thẳng xuống, uốn cong sang phải rồi móc nhẹ lên trên",
        "points": [
          [
            26,
            46
          ],
          [
            26,
            82
          ],
          [
            56,
            82
          ],
          [
            56,
            72
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            68,
            26
          ],
          [
            68,
            47
          ],
          [
            68,
            68
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            82,
            14
          ],
          [
            82,
            86
          ],
          [
            72,
            80
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "新",
    "pinyin": "xīn",
    "meaningVi": "Mới, đổi mới",
    "radical": "斤 (Cân)",
    "level": "HSK6",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            30,
            14
          ],
          [
            36,
            22
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            26
          ],
          [
            32,
            26
          ],
          [
            48,
            26
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            22,
            30
          ],
          [
            28,
            42
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            44,
            28
          ],
          [
            43,
            35
          ],
          [
            38,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            46
          ],
          [
            32,
            46
          ],
          [
            50,
            46
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            60
          ],
          [
            32,
            60
          ],
          [
            48,
            60
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            32,
            48
          ],
          [
            32,
            86
          ],
          [
            22,
            80
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            24,
            66
          ],
          [
            21,
            73
          ],
          [
            14,
            80
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            40,
            66
          ],
          [
            48,
            78
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            18
          ],
          [
            70,
            22
          ],
          [
            58,
            26
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            58,
            26
          ],
          [
            58,
            54
          ],
          [
            54,
            82
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            58,
            46
          ],
          [
            72,
            46
          ],
          [
            86,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            74,
            46
          ],
          [
            74,
            66
          ],
          [
            74,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "文",
    "pinyin": "wén",
    "meaningVi": "Văn hóa, văn bản",
    "radical": "文 (Văn)",
    "level": "HSK6",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            46,
            14
          ],
          [
            52,
            24
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            32
          ],
          [
            50,
            32
          ],
          [
            84,
            32
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            66,
            32
          ],
          [
            45,
            58
          ],
          [
            20,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            32,
            36
          ],
          [
            56,
            60
          ],
          [
            84,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "资",
    "pinyin": "zī",
    "meaningVi": "Tư bản, nguồn vốn",
    "radical": "贝 (Bối)",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            20,
            16
          ],
          [
            28,
            24
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            16,
            42
          ],
          [
            34,
            30
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            12
          ],
          [
            46,
            21
          ],
          [
            38,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang móc (横钩)",
        "ruleVi": "Đầu chữ Khiếm",
        "points": [
          [
            46,
            22
          ],
          [
            80,
            22
          ],
          [
            72,
            32
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            58,
            26
          ],
          [
            49,
            36
          ],
          [
            36,
            46
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            58,
            30
          ],
          [
            69,
            38
          ],
          [
            84,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            52
          ],
          [
            28,
            65
          ],
          [
            28,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            28,
            52
          ],
          [
            72,
            52
          ],
          [
            72,
            78
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            60
          ],
          [
            39,
            74
          ],
          [
            24,
            88
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            56,
            76
          ],
          [
            80,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "税",
    "pinyin": "shuì",
    "meaningVi": "Thuế quan",
    "radical": "禾 (Hòa)",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            42,
            16
          ],
          [
            32,
            20
          ],
          [
            18,
            24
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            44
          ],
          [
            29,
            44
          ],
          [
            44,
            44
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            30,
            22
          ],
          [
            30,
            54
          ],
          [
            30,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            30,
            44
          ],
          [
            24,
            58
          ],
          [
            14,
            72
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            32,
            52
          ],
          [
            42,
            62
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            52,
            16
          ],
          [
            58,
            26
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            16
          ],
          [
            76,
            22
          ],
          [
            70,
            28
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            32
          ],
          [
            50,
            43
          ],
          [
            50,
            54
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            50,
            32
          ],
          [
            80,
            32
          ],
          [
            80,
            54
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            52,
            52
          ],
          [
            65,
            52
          ],
          [
            78,
            52
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            60,
            54
          ],
          [
            54,
            69
          ],
          [
            44,
            84
          ]
        ]
      },
      {
        "nameVi": "Sổ cong móc (竖弯钩)",
        "ruleVi": "Kéo thẳng xuống, uốn cong sang phải rồi móc nhẹ lên trên",
        "points": [
          [
            68,
            54
          ],
          [
            68,
            84
          ],
          [
            86,
            84
          ],
          [
            86,
            74
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "法",
    "pinyin": "fǎ",
    "meaningVi": "Pháp luật",
    "radical": "氵 (Thủy)",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            20,
            20
          ],
          [
            28,
            28
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            16,
            44
          ],
          [
            24,
            52
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            16,
            80
          ],
          [
            28,
            62
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            42,
            36
          ],
          [
            61,
            36
          ],
          [
            80,
            36
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            60,
            16
          ],
          [
            60,
            37
          ],
          [
            60,
            58
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            36,
            58
          ],
          [
            61,
            58
          ],
          [
            86,
            58
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Đáy chữ Khứ",
        "points": [
          [
            58,
            58
          ],
          [
            40,
            82
          ],
          [
            80,
            78
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            72,
            66
          ],
          [
            84,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "碳",
    "pinyin": "tàn",
    "meaningVi": "Carbon (Trung hòa carbon)",
    "radical": "石 (Thạch)",
    "level": "HSK7",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            26
          ],
          [
            27,
            26
          ],
          [
            40,
            26
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            28,
            26
          ],
          [
            23,
            44
          ],
          [
            14,
            62
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            22,
            48
          ],
          [
            22,
            63
          ],
          [
            22,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            22,
            48
          ],
          [
            38,
            48
          ],
          [
            38,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            76
          ],
          [
            30,
            76
          ],
          [
            36,
            76
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            62,
            14
          ],
          [
            62,
            21
          ],
          [
            62,
            28
          ]
        ]
      },
      {
        "nameVi": "Sổ gập (竖折)",
        "ruleVi": "Bộ Sơn trên đầu",
        "points": [
          [
            46,
            18
          ],
          [
            46,
            28
          ],
          [
            80,
            28
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            80,
            16
          ],
          [
            80,
            23
          ],
          [
            80,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            44,
            38
          ],
          [
            64,
            38
          ],
          [
            84,
            38
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            48,
            38
          ],
          [
            46,
            61
          ],
          [
            40,
            84
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            54,
            52
          ],
          [
            58,
            62
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            82,
            50
          ],
          [
            80,
            56
          ],
          [
            74,
            62
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            66,
            44
          ],
          [
            59,
            65
          ],
          [
            48,
            86
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            66,
            62
          ],
          [
            74,
            74
          ],
          [
            86,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "智",
    "pinyin": "zhì",
    "meaningVi": "Trí tuệ, thông minh",
    "radical": "日 (Nhật)",
    "level": "HSK7",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            28,
            12
          ],
          [
            24,
            21
          ],
          [
            16,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            22
          ],
          [
            36,
            22
          ],
          [
            48,
            22
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            36
          ],
          [
            33,
            36
          ],
          [
            52,
            36
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            34,
            22
          ],
          [
            27,
            37
          ],
          [
            16,
            52
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            36,
            40
          ],
          [
            50,
            50
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            58,
            20
          ],
          [
            58,
            34
          ],
          [
            58,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            58,
            20
          ],
          [
            82,
            20
          ],
          [
            82,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            60,
            46
          ],
          [
            70,
            46
          ],
          [
            80,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            58
          ],
          [
            28,
            72
          ],
          [
            28,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            28,
            58
          ],
          [
            72,
            58
          ],
          [
            72,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            72
          ],
          [
            50,
            72
          ],
          [
            70,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            84
          ],
          [
            50,
            84
          ],
          [
            70,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "治",
    "pinyin": "zhì",
    "meaningVi": "Quản trị, trị quốc",
    "radical": "氵 (Thủy)",
    "level": "HSK7",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            20,
            20
          ],
          [
            28,
            28
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            16,
            44
          ],
          [
            24,
            52
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            16,
            80
          ],
          [
            28,
            62
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Phần trên chữ Đài",
        "points": [
          [
            60,
            16
          ],
          [
            42,
            46
          ],
          [
            80,
            42
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            72,
            32
          ],
          [
            84,
            48
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            44,
            58
          ],
          [
            44,
            71
          ],
          [
            44,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            44,
            58
          ],
          [
            78,
            58
          ],
          [
            78,
            84
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            46,
            82
          ],
          [
            61,
            82
          ],
          [
            76,
            82
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "策",
    "pinyin": "cè",
    "meaningVi": "Chính sách, sách lược",
    "radical": "竹 (Trúc)",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            30,
            12
          ],
          [
            26,
            20
          ],
          [
            18,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            26,
            20
          ],
          [
            36,
            20
          ],
          [
            46,
            20
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            34,
            22
          ],
          [
            40,
            30
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            62,
            12
          ],
          [
            59,
            20
          ],
          [
            52,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            58,
            20
          ],
          [
            70,
            20
          ],
          [
            82,
            20
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            22
          ],
          [
            74,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            22,
            42
          ],
          [
            50,
            42
          ],
          [
            78,
            42
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            26,
            54
          ],
          [
            26,
            66
          ],
          [
            26,
            78
          ]
        ]
      },
      {
        "nameVi": "Ngang gập móc (横折钩)",
        "ruleVi": "Viết ngang sang phải, gập xuống dưới rồi móc nhẹ sang trái",
        "points": [
          [
            26,
            54
          ],
          [
            74,
            54
          ],
          [
            74,
            78
          ],
          [
            64,
            72
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            50,
            34
          ],
          [
            50,
            61
          ],
          [
            50,
            88
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            50,
            56
          ],
          [
            37,
            70
          ],
          [
            20,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            50,
            56
          ],
          [
            64,
            70
          ],
          [
            82,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "论",
    "pinyin": "lùn",
    "meaningVi": "Luận văn, diễn đàn",
    "radical": "讠 (Ngôn)",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            20,
            18
          ],
          [
            28,
            28
          ]
        ]
      },
      {
        "nameVi": "Ngang gập hất (横折提)",
        "ruleVi": "Bộ ngôn",
        "points": [
          [
            14,
            44
          ],
          [
            28,
            44
          ],
          [
            28,
            78
          ],
          [
            38,
            68
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            62,
            14
          ],
          [
            52,
            31
          ],
          [
            38,
            48
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            62,
            14
          ],
          [
            72,
            31
          ],
          [
            86,
            48
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            76,
            48
          ],
          [
            67,
            55
          ],
          [
            54,
            62
          ]
        ]
      },
      {
        "nameVi": "Sổ cong móc (竖弯钩)",
        "ruleVi": "Kéo thẳng xuống, uốn cong sang phải rồi móc nhẹ lên trên",
        "points": [
          [
            52,
            42
          ],
          [
            52,
            82
          ],
          [
            84,
            82
          ],
          [
            84,
            72
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "道",
    "pinyin": "dào",
    "meaningVi": "Đạo, con đường, triết lý",
    "radical": "辶 (Quai xước)",
    "level": "HSK8",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            46,
            14
          ],
          [
            52,
            22
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            72,
            14
          ],
          [
            71,
            18
          ],
          [
            66,
            22
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            38,
            28
          ],
          [
            61,
            28
          ],
          [
            84,
            28
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            58,
            28
          ],
          [
            58,
            32
          ],
          [
            54,
            36
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            44,
            38
          ],
          [
            44,
            56
          ],
          [
            44,
            74
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            44,
            38
          ],
          [
            76,
            38
          ],
          [
            76,
            74
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            46,
            50
          ],
          [
            60,
            50
          ],
          [
            74,
            50
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            46,
            62
          ],
          [
            60,
            62
          ],
          [
            74,
            62
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            46,
            72
          ],
          [
            60,
            72
          ],
          [
            74,
            72
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            18,
            22
          ],
          [
            26,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang gập phẩy (横折折撇)",
        "ruleVi": "Bộ quai xước viết sau cùng",
        "points": [
          [
            14,
            48
          ],
          [
            26,
            48
          ],
          [
            20,
            62
          ],
          [
            26,
            72
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            14,
            76
          ],
          [
            48,
            81
          ],
          [
            86,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "和",
    "pinyin": "hé",
    "meaningVi": "Hòa hợp, hòa bình",
    "radical": "口 (Khẩu)",
    "level": "HSK8",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            46,
            16
          ],
          [
            34,
            21
          ],
          [
            18,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            46
          ],
          [
            32,
            46
          ],
          [
            50,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            34,
            22
          ],
          [
            34,
            54
          ],
          [
            34,
            86
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            34,
            46
          ],
          [
            26,
            60
          ],
          [
            14,
            74
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            36,
            54
          ],
          [
            48,
            64
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            56,
            34
          ],
          [
            56,
            54
          ],
          [
            56,
            74
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            56,
            34
          ],
          [
            82,
            34
          ],
          [
            82,
            74
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            58,
            72
          ],
          [
            69,
            72
          ],
          [
            80,
            72
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "义",
    "pinyin": "yì",
    "meaningVi": "Nghĩa lý, chính nghĩa",
    "radical": "丶 (Chủ)",
    "level": "HSK8",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            42,
            16
          ],
          [
            54,
            28
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            68,
            26
          ],
          [
            46,
            55
          ],
          [
            20,
            84
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            26,
            34
          ],
          [
            53,
            59
          ],
          [
            84,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "弈",
    "pinyin": "yì",
    "meaningVi": "Đấu trí, đánh cờ (Bác dịch)",
    "radical": "廾 (Củng)",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            46,
            12
          ],
          [
            52,
            20
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            26
          ],
          [
            50,
            26
          ],
          [
            82,
            26
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            44,
            26
          ],
          [
            36,
            39
          ],
          [
            24,
            52
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            60,
            26
          ],
          [
            60,
            40
          ],
          [
            60,
            54
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            34,
            32
          ],
          [
            28,
            39
          ],
          [
            18,
            46
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            68,
            34
          ],
          [
            80,
            46
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            66
          ],
          [
            50,
            66
          ],
          [
            84,
            66
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            38,
            56
          ],
          [
            34,
            72
          ],
          [
            26,
            88
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            64,
            54
          ],
          [
            64,
            71
          ],
          [
            64,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "链",
    "pinyin": "liàn",
    "meaningVi": "Chuỗi (Chuỗi cung ứng)",
    "radical": "钅 (Kim)",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            28,
            16
          ],
          [
            23,
            29
          ],
          [
            14,
            42
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            24,
            30
          ],
          [
            31,
            30
          ],
          [
            38,
            30
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            18,
            46
          ],
          [
            27,
            46
          ],
          [
            36,
            46
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            60
          ],
          [
            27,
            60
          ],
          [
            38,
            60
          ]
        ]
      },
      {
        "nameVi": "Sổ hất (竖提)",
        "ruleVi": "Bộ Kim",
        "points": [
          [
            28,
            46
          ],
          [
            28,
            80
          ],
          [
            38,
            72
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            52,
            28
          ],
          [
            67,
            28
          ],
          [
            82,
            28
          ]
        ]
      },
      {
        "nameVi": "Phẩy gập (撇折)",
        "ruleVi": "Phần chữ Xa",
        "points": [
          [
            64,
            18
          ],
          [
            52,
            48
          ],
          [
            80,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            48,
            62
          ],
          [
            66,
            62
          ],
          [
            84,
            62
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            66,
            34
          ],
          [
            66,
            55
          ],
          [
            66,
            76
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            40,
            22
          ],
          [
            46,
            30
          ]
        ]
      },
      {
        "nameVi": "Mác (捺)",
        "ruleVi": "Kéo chéo từ trên trái xuống dưới phải, nhấn nhẹ cuối nét",
        "points": [
          [
            40,
            76
          ],
          [
            61,
            81
          ],
          [
            86,
            86
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "哲",
    "pinyin": "zhé",
    "meaningVi": "Triết học, hiền triết",
    "radical": "口 (Khẩu)",
    "level": "HSK9",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            28
          ],
          [
            30,
            28
          ],
          [
            44,
            28
          ]
        ]
      },
      {
        "nameVi": "Sổ móc (竖钩)",
        "ruleVi": "Kéo thẳng từ trên xuống rồi móc nhẹ lên sang trái",
        "points": [
          [
            32,
            14
          ],
          [
            32,
            56
          ],
          [
            22,
            50
          ]
        ]
      },
      {
        "nameVi": "Hất (提)",
        "ruleVi": "Hất nhanh từ dưới trái lên trên phải",
        "points": [
          [
            14,
            44
          ],
          [
            44,
            36
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            78,
            14
          ],
          [
            68,
            19
          ],
          [
            54,
            24
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            54,
            24
          ],
          [
            54,
            40
          ],
          [
            50,
            56
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            54,
            36
          ],
          [
            69,
            36
          ],
          [
            84,
            36
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            70,
            36
          ],
          [
            70,
            47
          ],
          [
            70,
            58
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            28,
            64
          ],
          [
            28,
            75
          ],
          [
            28,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            28,
            64
          ],
          [
            72,
            64
          ],
          [
            72,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            30,
            84
          ],
          [
            50,
            84
          ],
          [
            70,
            84
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "礼",
    "pinyin": "lǐ",
    "meaningVi": "Lễ nghi, Lễ Ký",
    "radical": "礻 (Thị)",
    "level": "HSK9",
    "subDifficulty": "basic",
    "strokes": [
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            26,
            16
          ],
          [
            34,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang phẩy (横撇)",
        "ruleVi": "Bộ Thị bên trái",
        "points": [
          [
            16,
            38
          ],
          [
            40,
            38
          ],
          [
            14,
            68
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            30,
            50
          ],
          [
            30,
            68
          ],
          [
            30,
            86
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            32,
            52
          ],
          [
            44,
            62
          ]
        ]
      },
      {
        "nameVi": "Sổ cong móc (竖弯钩)",
        "ruleVi": "Kéo thẳng xuống, uốn cong sang phải rồi móc nhẹ lên trên",
        "points": [
          [
            56,
            18
          ],
          [
            56,
            82
          ],
          [
            86,
            82
          ],
          [
            86,
            72
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "典",
    "pinyin": "diǎn",
    "meaningVi": "Kinh điển, điển cố",
    "radical": "八 (Bát)",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            24,
            28
          ],
          [
            24,
            48
          ],
          [
            24,
            68
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            24,
            28
          ],
          [
            76,
            28
          ],
          [
            76,
            68
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            42,
            16
          ],
          [
            42,
            42
          ],
          [
            42,
            68
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            58,
            16
          ],
          [
            58,
            42
          ],
          [
            58,
            68
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            26,
            48
          ],
          [
            50,
            48
          ],
          [
            74,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            14,
            68
          ],
          [
            50,
            68
          ],
          [
            86,
            68
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            40,
            74
          ],
          [
            32,
            81
          ],
          [
            20,
            88
          ]
        ]
      },
      {
        "nameVi": "Chấm (点)",
        "ruleVi": "Chấm ngắn dứt khoát từ trên xuống dưới",
        "points": [
          [
            60,
            74
          ],
          [
            80,
            88
          ]
        ]
      }
    ]
  },
  {
    "hanzi": "鼎",
    "pinyin": "dǐng",
    "meaningVi": "Đỉnh (Vật báu, thế chân vạc)",
    "radical": "鼎 (Đỉnh)",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "strokes": [
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            32,
            16
          ],
          [
            32,
            32
          ],
          [
            32,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            32,
            16
          ],
          [
            68,
            16
          ],
          [
            68,
            48
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            34,
            26
          ],
          [
            50,
            26
          ],
          [
            66,
            26
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            34,
            36
          ],
          [
            50,
            36
          ],
          [
            66,
            36
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            34,
            46
          ],
          [
            50,
            46
          ],
          [
            66,
            46
          ]
        ]
      },
      {
        "nameVi": "Sổ gập (竖折)",
        "ruleVi": "Chân trái đỉnh",
        "points": [
          [
            24,
            54
          ],
          [
            24,
            68
          ],
          [
            40,
            68
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            16,
            58
          ],
          [
            28,
            58
          ],
          [
            40,
            58
          ]
        ]
      },
      {
        "nameVi": "Phẩy (撇)",
        "ruleVi": "Đặt bút từ trên phải, vuốt cong xuống dưới trái",
        "points": [
          [
            36,
            60
          ],
          [
            32,
            73
          ],
          [
            24,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang (横)",
        "ruleVi": "Viết từ trái sang phải",
        "points": [
          [
            60,
            56
          ],
          [
            71,
            56
          ],
          [
            82,
            56
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            62,
            56
          ],
          [
            62,
            71
          ],
          [
            62,
            86
          ]
        ]
      },
      {
        "nameVi": "Ngang gập (横折)",
        "ruleVi": "Viết nét ngang từ trái sang phải rồi gập thẳng xuống dưới",
        "points": [
          [
            62,
            66
          ],
          [
            80,
            66
          ],
          [
            80,
            78
          ]
        ]
      },
      {
        "nameVi": "Sổ (竖)",
        "ruleVi": "Viết thẳng từ trên xuống dưới",
        "points": [
          [
            76,
            68
          ],
          [
            76,
            77
          ],
          [
            76,
            86
          ]
        ]
      }
    ]
  }
];

const STROKE_MAP = new Map<string, HanziStrokeTemplate>(
  HANZI_STROKE_BANK.map((item) => [item.hanzi, item])
);

/**
 * Retrieve a stroke-order template for any Chinese character.
 * If the character is not in the 64-character core bank, deterministically synthesizes
 * a well-structured stroke sequence in the 0..100 x 0..100 Mi-Zi-Ge grid so every
 * character in /vocab or /writing can be drawn and graded stroke-by-stroke.
 */
export function getStrokeTemplateForChar(
  char: string,
  meta?: { pinyin?: string; meaningVi?: string; radical?: string; level?: HSKLevel }
): HanziStrokeTemplate {
  const cleanChar = Array.from(char.trim())[0] ?? "永";
  const existing = STROKE_MAP.get(cleanChar);
  if (existing) {
    return existing;
  }

  const code = cleanChar.codePointAt(0) ?? 0x6c38;
  const variant = code % 4;

  const synthesizedStrokes: HanziStrokeStep[] =
    variant === 0
      ? [
          { nameVi: "Ngang trên (横)", ruleVi: "Từ trên xuống dưới, từ trái sang phải", points: [[22, 24], [50, 24], [78, 24]] },
          { nameVi: "Sổ trái (竖)", ruleVi: "Nét sổ khung trái kéo thẳng xuống", points: [[28, 36], [28, 56], [28, 76]] },
          { nameVi: "Ngang gập (横折)", ruleVi: "Ngang sang phải rồi gập thẳng xuống", points: [[28, 36], [72, 36], [72, 76]] },
          { nameVi: "Ngang giữa (横)", ruleVi: "Viết nét bên trong trước khi đóng đáy", points: [[30, 56], [50, 56], [70, 56]] },
          { nameVi: "Ngang đáy (横)", ruleVi: "Đóng nét đáy sau cùng", points: [[24, 78], [50, 78], [76, 78]] },
        ]
      : variant === 1
      ? [
          { nameVi: "Phẩy trái (撇)", ruleVi: "Viết bộ phận bên trái trước (从左到右)", points: [[34, 18], [26, 36], [18, 54]] },
          { nameVi: "Sổ đứng (竖)", ruleVi: "Kéo thẳng từ thân nét phẩy xuống dưới", points: [[28, 40], [28, 62], [28, 84]] },
          { nameVi: "Ngang phải (横)", ruleVi: "Chuyển sang bộ phận bên phải", points: [[46, 32], [65, 32], [84, 32]] },
          { nameVi: "Sổ móc phải (竖钩)", ruleVi: "Kéo thẳng xuống rồi móc nhẹ sang trái", points: [[64, 18], [64, 82], [54, 74]] },
          { nameVi: "Chấm (点)", ruleVi: "Chấm cân đối hoàn thiện chữ", points: [[48, 52], [58, 62]] },
        ]
      : variant === 2
      ? [
          { nameVi: "Chấm đỉnh (点)", ruleVi: "Chấm đầu trên cùng trước (从上到下)", points: [[46, 14], [54, 24]] },
          { nameVi: "Ngang (横)", ruleVi: "Ngang dài nâng đỡ phần trên", points: [[20, 34], [50, 34], [80, 34]] },
          { nameVi: "Phẩy (撇)", ruleVi: "Phẩy trước mác sau (先撇后捺)", points: [[50, 36], [36, 60], [20, 82]] },
          { nameVi: "Mác (捺)", ruleVi: "Kéo chéo sang phải cân bằng chữ", points: [[50, 42], [66, 62], [82, 82]] },
        ]
      : [
          { nameVi: "Ngang trên (横)", ruleVi: "Ngang trước sổ sau (先横后竖)", points: [[24, 26], [50, 26], [76, 26]] },
          { nameVi: "Sổ giữa (竖)", ruleVi: "Kéo thẳng trục giữa từ trên xuống", points: [[50, 14], [50, 50], [50, 86]] },
          { nameVi: "Ngang giữa (横)", ruleVi: "Nét ngang cân đối hai bên", points: [[28, 52], [50, 52], [72, 52]] },
          { nameVi: "Phẩy (撇)", ruleVi: "Phẩy trái mở rộng chân chữ", points: [[48, 54], [34, 68], [20, 82]] },
          { nameVi: "Mác (捺)", ruleVi: "Mác phải kết thúc vững chãi", points: [[52, 54], [66, 68], [82, 82]] },
        ];

  return {
    hanzi: cleanChar,
    pinyin: meta?.pinyin ?? "",
    meaningVi: meta?.meaningVi ?? "Chữ Hán luyện viết",
    radical: meta?.radical ?? "Bộ thủ cơ bản",
    level: meta?.level ?? "HSK1",
    subDifficulty: "basic",
    strokes: synthesizedStrokes,
  };
}

export const SENTENCE_ORDER_EXERCISES: SentenceOrderExercise[] = [
  {
    "id": "so-hsk0-basic-1",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Chào hỏi",
    "promptVi": "Chào bạn! Tôi là người Việt Nam.",
    "scrambledTokens": [
      "越南人。",
      "是",
      "我",
      "你好！"
    ],
    "correctAnswer": "你好！我是越南人。",
    "pinyin": "Nǐ hǎo! Wǒ shì Yuènán rén.",
    "explanationVi": "Cấu trúc cơ bản: Chủ ngữ (我) + 是 + Danh từ (越南人)."
  },
  {
    "id": "so-hsk0-basic-2",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Giới thiệu tên",
    "promptVi": "Tôi họ Vương, tên là Tiểu Lan.",
    "scrambledTokens": [
      "小兰。",
      "叫",
      "姓王，",
      "我"
    ],
    "correctAnswer": "我姓王，叫小兰。",
    "pinyin": "Wǒ xìng Wáng, jiào Xiǎolán.",
    "explanationVi": "Nói họ (姓) trước, sau đó mới nói tên (叫)."
  },
  {
    "id": "so-hsk0-basic-3",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Cảm ơn",
    "promptVi": "Cảm ơn thầy/cô giáo!",
    "scrambledTokens": [
      "您，",
      "老师！",
      "谢谢"
    ],
    "correctAnswer": "谢谢您，老师！",
    "pinyin": "Xièxie nín, lǎoshī!",
    "explanationVi": "Đặt lời cảm ơn trước danh xưng kính trọng."
  },
  {
    "id": "so-hsk0-basic-4",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Hỏi quốc tịch",
    "promptVi": "Bạn là người nước nào?",
    "scrambledTokens": [
      "人？",
      "哪国",
      "是",
      "你"
    ],
    "correctAnswer": "你是哪国人？",
    "pinyin": "Nǐ shì nǎ guó rén?",
    "explanationVi": "Từ để hỏi 哪国 đứng trực tiếp trước danh từ 人."
  },
  {
    "id": "so-hsk0-basic-5",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Học tiếng Hán",
    "promptVi": "Tôi học tiếng Hán.",
    "scrambledTokens": [
      "学习",
      "汉语。",
      "我"
    ],
    "correctAnswer": "我学习汉语。",
    "pinyin": "Wǒ xuéxí Hànyǔ.",
    "explanationVi": "Trật tự SVO chuẩn: Chủ ngữ + Động từ + Tân ngữ."
  },
  {
    "id": "so-hsk0-basic-6",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Phủ định",
    "promptVi": "Tiếng Hán không khó.",
    "scrambledTokens": [
      "不",
      "难。",
      "汉语"
    ],
    "correctAnswer": "汉语不难。",
    "pinyin": "Hànyǔ bù nán.",
    "explanationVi": "Phó từ phủ định 不 đứng ngay trước tính từ 难."
  },
  {
    "id": "so-hsk0-basic-7",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Câu hỏi 什么",
    "promptVi": "Đây là cái gì?",
    "scrambledTokens": [
      "是",
      "什么？",
      "这"
    ],
    "correctAnswer": "这是什么？",
    "pinyin": "Zhè shì shénme?",
    "explanationVi": "Từ để hỏi 什么 đứng ở vị trí tân ngữ cuối câu."
  },
  {
    "id": "so-hsk0-basic-8",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Đồ uống",
    "promptVi": "Tôi thích uống trà.",
    "scrambledTokens": [
      "喜欢",
      "喝茶。",
      "我"
    ],
    "correctAnswer": "我喜欢喝茶。",
    "pinyin": "Wǒ xǐhuan hē chá.",
    "explanationVi": "Động từ tâm lý 喜欢 đứng trước cụm động từ 喝茶."
  },
  {
    "id": "so-hsk0-basic-9",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Gia đình",
    "promptVi": "Mẹ yêu tôi.",
    "scrambledTokens": [
      "爱",
      "我。",
      "妈妈"
    ],
    "correctAnswer": "妈妈爱我。",
    "pinyin": "Māma ài wǒ.",
    "explanationVi": "Trật tự SVO: 妈妈 (Chủ ngữ) + 爱 (Động từ) + 我 (Tân ngữ)."
  },
  {
    "id": "so-hsk0-basic-10",
    "level": "HSK0",
    "subDifficulty": "basic",
    "grammarTopic": "Tạm biệt",
    "promptVi": "Tạm biệt, ngày mai gặp lại.",
    "scrambledTokens": [
      "明天",
      "见。",
      "再见，"
    ],
    "correctAnswer": "再见，明天见。",
    "pinyin": "Zàijiàn, míngtiān jiàn.",
    "explanationVi": "Từ chỉ thời gian 明天 đứng trước động từ 见."
  },
  {
    "id": "so-hsk0-advanced-1",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Biến điệu thanh 3",
    "promptVi": "Tôi rất khỏe, còn bạn thì sao?",
    "scrambledTokens": [
      "呢？",
      "你",
      "很好，",
      "我"
    ],
    "correctAnswer": "我很好，你呢？",
    "pinyin": "Wǒ hěn hǎo, nǐ ne?",
    "explanationVi": "Câu vị ngữ tính từ dùng 很 + Tính từ (không dùng 是)."
  },
  {
    "id": "so-hsk0-advanced-2",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Lượng từ 杯",
    "promptVi": "Xin cho tôi một cốc nước.",
    "scrambledTokens": [
      "水。",
      "一杯",
      "给我",
      "请"
    ],
    "correctAnswer": "请给我一杯水。",
    "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
    "explanationVi": "Số từ + Lượng từ (一杯) đứng trước danh từ (水)."
  },
  {
    "id": "so-hsk0-advanced-3",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Biến điệu 不",
    "promptVi": "Anh ấy không đi Bắc Kinh.",
    "scrambledTokens": [
      "不去",
      "北京。",
      "他"
    ],
    "correctAnswer": "他不去北京。",
    "pinyin": "Tā bú qù Běijīng.",
    "explanationVi": "Phủ định 不 đứng trước động từ 去."
  },
  {
    "id": "so-hsk0-advanced-4",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Câu hỏi chính phản",
    "promptVi": "Có phải thầy giáo của bạn không?",
    "scrambledTokens": [
      "你的",
      "老师？",
      "是不是"
    ],
    "correctAnswer": "是不是你的老师？",
    "pinyin": "Shì bu shì nǐ de lǎoshī?",
    "explanationVi": "Cấu trúc câu hỏi chính phản 是不是 đặt trước định ngữ + danh từ."
  },
  {
    "id": "so-hsk0-advanced-5",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Quy tắc bút thuận",
    "promptVi": "Viết chữ Hán phải ngang trước sổ sau.",
    "scrambledTokens": [
      "后竖。",
      "先横",
      "要",
      "写汉字"
    ],
    "correctAnswer": "写汉字要先横后竖。",
    "pinyin": "Xiě Hànzì yào xiān héng hòu shù.",
    "explanationVi": "Cụm động từ làm chủ ngữ + 要 + Quy tắc 先...后..."
  },
  {
    "id": "so-hsk0-advanced-6",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Bộ thủ",
    "promptVi": "Chữ Hà bên trái là bộ Tam chấm thủy.",
    "scrambledTokens": [
      "三点水。",
      "是",
      "左边",
      "河字"
    ],
    "correctAnswer": "河字左边是三点水。",
    "pinyin": "Hé zì zuǒbiān shì sāndiǎnshuǐ.",
    "explanationVi": "Phương vị từ 左边 đứng sau danh từ 河字."
  },
  {
    "id": "so-hsk0-advanced-7",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Luyện tập",
    "promptVi": "Chúng tôi cùng nhau học chữ Hán.",
    "scrambledTokens": [
      "汉字。",
      "学习",
      "一起",
      "我们"
    ],
    "correctAnswer": "我们一起学习汉字。",
    "pinyin": "Wǒmen yìqǐ xuéxí Hànzì.",
    "explanationVi": "Phó từ 一起 (cùng nhau) luôn đứng trước động từ 学习."
  },
  {
    "id": "so-hsk0-advanced-8",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Phát âm",
    "promptVi": "Phát âm của anh ấy vô cùng chuẩn.",
    "scrambledTokens": [
      "标准。",
      "非常",
      "发音",
      "他的"
    ],
    "correctAnswer": "他的发音非常标准。",
    "pinyin": "Tā de fāyīn fēicháng biāozhǔn.",
    "explanationVi": "Phó từ chỉ mức độ 非常 đứng ngay trước tính từ 标准."
  },
  {
    "id": "so-hsk0-advanced-9",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Luyện viết",
    "promptVi": "Mỗi ngày luyện viết mười chữ.",
    "scrambledTokens": [
      "十个字。",
      "写",
      "练习",
      "每天"
    ],
    "correctAnswer": "每天练习写十个字。",
    "pinyin": "Měitiān liànxí xiě shí gè zì.",
    "explanationVi": "Trạng ngữ thời gian 每天 đặt ở đầu câu."
  },
  {
    "id": "so-hsk0-advanced-10",
    "level": "HSK0",
    "subDifficulty": "advanced",
    "grammarTopic": "Đọc to",
    "promptVi": "Xin bạn đọc to một lần.",
    "scrambledTokens": [
      "一遍。",
      "读",
      "大声",
      "请你"
    ],
    "correctAnswer": "请你大声读一遍。",
    "pinyin": "Qǐng nǐ dàshēng dú yí biàn.",
    "explanationVi": "Trạng ngữ cách thức 大声 đứng trước động từ 读, bổ ngữ động lượng 一遍 đứng sau."
  },
  {
    "id": "so-hsk1-basic-1",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Hỏi số lượng",
    "promptVi": "Nhà bạn có mấy người?",
    "scrambledTokens": [
      "人？",
      "几口",
      "有",
      "你家"
    ],
    "correctAnswer": "你家有几口人？",
    "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
    "explanationVi": "Lượng từ 口 dùng riêng cho thành viên gia đình."
  },
  {
    "id": "so-hsk1-basic-2",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Địa điểm + Hành động",
    "promptVi": "Mẹ tôi làm việc ở bệnh viện.",
    "scrambledTokens": [
      "在医院",
      "工作。",
      "我妈妈"
    ],
    "correctAnswer": "我妈妈在医院工作。",
    "pinyin": "Wǒ māma zài yīyuàn gōngzuò.",
    "explanationVi": "Trong tiếng Trung, 在 + Địa điểm luôn đứng TRƯỚC động từ."
  },
  {
    "id": "so-hsk1-basic-3",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Hỏi tuổi",
    "promptVi": "Năm nay bạn bao nhiêu tuổi rồi?",
    "scrambledTokens": [
      "了？",
      "多大",
      "今年",
      "你"
    ],
    "correctAnswer": "你今年多大了？",
    "pinyin": "Nǐ jīnnián duō dà le?",
    "explanationVi": "Thời gian 今年 đứng sau chủ ngữ 你, trước cụm hỏi 多大."
  },
  {
    "id": "so-hsk1-basic-4",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Thời gian",
    "promptVi": "Tôi ăn trưa lúc 12 giờ trưa.",
    "scrambledTokens": [
      "午饭。",
      "吃",
      "中午十二点",
      "我"
    ],
    "correctAnswer": "我中午十二点吃午饭。",
    "pinyin": "Wǒ zhōngwǔ shí'èr diǎn chī wǔfàn.",
    "explanationVi": "Trạng ngữ thời gian 中午十二点 đứng trước động từ 吃."
  },
  {
    "id": "so-hsk1-basic-5",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Sở thích",
    "promptVi": "Tôi rất thích uống trà sữa.",
    "scrambledTokens": [
      "奶茶。",
      "喝",
      "很喜欢",
      "我"
    ],
    "correctAnswer": "我很喜欢喝奶茶。",
    "pinyin": "Wǒ hěn xǐhuan hē nǎichá.",
    "explanationVi": "Phó từ 很 đứng trước 喜欢, theo sau là cụm động từ 喝奶茶."
  },
  {
    "id": "so-hsk1-basic-6",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Tồn tại 有",
    "promptVi": "Trên bàn có một chiếc máy tính.",
    "scrambledTokens": [
      "电脑。",
      "一台",
      "有",
      "桌子上"
    ],
    "correctAnswer": "桌子上有一台电脑。",
    "pinyin": "Zhuōzi shàng yǒu yì tái diànnǎo.",
    "explanationVi": "Cấu trúc câu tồn tại: Địa điểm (桌子上) + 有 + Sự vật."
  },
  {
    "id": "so-hsk1-basic-7",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Phương vị",
    "promptVi": "Chú chó nhỏ ở dưới cái ghế.",
    "scrambledTokens": [
      "下面。",
      "椅子",
      "在",
      "小狗"
    ],
    "correctAnswer": "小狗在椅子下面。",
    "pinyin": "Xiǎogǒu zài yǐzi xiàmiàn.",
    "explanationVi": "Chủ ngữ + 在 + Danh từ + Phương vị từ (下面)."
  },
  {
    "id": "so-hsk1-basic-8",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Động từ năng nguyện",
    "promptVi": "Cô ấy biết nói một chút tiếng Hán.",
    "scrambledTokens": [
      "汉语。",
      "一点儿",
      "会说",
      "她"
    ],
    "correctAnswer": "她会说一点儿汉语。",
    "pinyin": "Tā huì shuō yìdiǎnr Hànyǔ.",
    "explanationVi": "Động từ năng nguyện 会 đứng trước động từ 说."
  },
  {
    "id": "so-hsk1-basic-9",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Mua sắm",
    "promptVi": "Chiều nay tôi đi cửa hàng mua hoa quả.",
    "scrambledTokens": [
      "买水果。",
      "去商店",
      "下午",
      "我"
    ],
    "correctAnswer": "我下午去商店买水果。",
    "pinyin": "Wǒ xiàwǔ qù shāngdiàn mǎi shuǐguǒ.",
    "explanationVi": "Câu liên động: Đi đến đâu (去商店) trước, rồi làm gì (买水果) sau."
  },
  {
    "id": "so-hsk1-basic-10",
    "level": "HSK1",
    "subDifficulty": "basic",
    "grammarTopic": "Buổi tối",
    "promptVi": "Buổi tối chúng tôi ở nhà xem tivi.",
    "scrambledTokens": [
      "看电视。",
      "在家",
      "我们",
      "晚上"
    ],
    "correctAnswer": "晚上我们在家看电视。",
    "pinyin": "Wǎnshang wǒmen zài jiā kàn diànshì.",
    "explanationVi": "Trật tự chuẩn: Thời gian + Chủ ngữ + Địa điểm + Hành động."
  },
  {
    "id": "so-hsk1-advanced-1",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Hỏi giá",
    "promptVi": "Xin hỏi chiếc áo này bao nhiêu tiền?",
    "scrambledTokens": [
      "钱？",
      "多少",
      "这件衣服",
      "请问，"
    ],
    "correctAnswer": "请问，这件衣服多少钱？",
    "pinyin": "Qǐngwèn, zhè jiàn yīfu duōshao qián?",
    "explanationVi": "Lượng từ 件 đi với 衣服, cụm 多少钱 đặt cuối câu."
  },
  {
    "id": "so-hsk1-advanced-2",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Mua đồ uống",
    "promptVi": "Tôi muốn mua hai cốc trà sữa đá.",
    "scrambledTokens": [
      "冰奶茶。",
      "两杯",
      "买",
      "我想"
    ],
    "correctAnswer": "我想买两杯冰奶茶。",
    "pinyin": "Wǒ xiǎng mǎi liǎng bēi bīng nǎichá.",
    "explanationVi": "Trước lượng từ 杯 phải dùng 两, không dùng 二."
  },
  {
    "id": "so-hsk1-advanced-3",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Câu hỏi lựa chọn",
    "promptVi": "Bạn muốn cốc lớn hay cốc nhỏ?",
    "scrambledTokens": [
      "小杯？",
      "还是",
      "大杯",
      "你要"
    ],
    "correctAnswer": "你要大杯还是小杯？",
    "pinyin": "Nǐ yào dà bēi háishi xiǎo bēi?",
    "explanationVi": "Trong câu hỏi lựa chọn dùng liên từ 还是."
  },
  {
    "id": "so-hsk1-advanced-4",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Thanh toán",
    "promptVi": "Có thể thanh toán bằng WeChat không?",
    "scrambledTokens": [
      "吗？",
      "支付",
      "用微信",
      "可以"
    ],
    "correctAnswer": "可以用微信支付吗？",
    "pinyin": "Kěyǐ yòng Wēixìn zhīfù ma?",
    "explanationVi": "Công cụ/phương thức (用微信) đứng trước động từ chính (支付)."
  },
  {
    "id": "so-hsk1-advanced-5",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Phương tiện",
    "promptVi": "Chúng ta đi taxi ra sân bay nhé.",
    "scrambledTokens": [
      "吧。",
      "去机场",
      "坐出租车",
      "我们"
    ],
    "correctAnswer": "我们坐出租车去机场吧。",
    "pinyin": "Wǒmen zuò chūzūchē qù jīchǎng ba.",
    "explanationVi": "Phương tiện di chuyển (坐出租车) luôn đặt TRƯỚC điểm đến (去机场)."
  },
  {
    "id": "so-hsk1-advanced-6",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Thời tiết",
    "promptVi": "Mùa đông ở Bắc Kinh rất lạnh.",
    "scrambledTokens": [
      "冷。",
      "很",
      "冬天",
      "北京的"
    ],
    "correctAnswer": "北京的冬天很冷。",
    "pinyin": "Běijīng de dōngtiān hěn lěng.",
    "explanationVi": "Định ngữ 北京的 đứng trước trung tâm ngữ 冬天."
  },
  {
    "id": "so-hsk1-advanced-7",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Quá khứ 了",
    "promptVi": "Hôm qua tôi đến nhà bạn ăn cơm.",
    "scrambledTokens": [
      "吃饭了。",
      "朋友家",
      "我去",
      "昨天"
    ],
    "correctAnswer": "昨天我去朋友家吃饭了。",
    "pinyin": "Zuótiān wǒ qù péngyou jiā chīfàn le.",
    "explanationVi": "Trợ từ 了 đặt cuối câu biểu thị hành động đã xảy ra."
  },
  {
    "id": "so-hsk1-advanced-8",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Đang làm gì",
    "promptVi": "Ông ấy đang họp ở công ty.",
    "scrambledTokens": [
      "呢。",
      "开会",
      "在公司",
      "他"
    ],
    "correctAnswer": "他在公司开会呢。",
    "pinyin": "Tā zài gōngsī kāihuì ne.",
    "explanationVi": "在 + Địa điểm + Động từ + 呢 diễn tả hành động đang tiếp diễn."
  },
  {
    "id": "so-hsk1-advanced-9",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Kế hoạch",
    "promptVi": "Tháng sau tôi đi du lịch Trung Quốc.",
    "scrambledTokens": [
      "旅游。",
      "去中国",
      "下个月",
      "我"
    ],
    "correctAnswer": "我下个月去中国旅游。",
    "pinyin": "Wǒ xià gè yuè qù Zhōngguó lǚyóu.",
    "explanationVi": "Thời gian (下个月) -> Đi đâu (去中国) -> Làm gì (旅游)."
  },
  {
    "id": "so-hsk1-advanced-10",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "grammarTopic": "Cảm ơn trang trọng",
    "promptVi": "Vô cùng cảm ơn sự giúp đỡ của ngài.",
    "scrambledTokens": [
      "帮助。",
      "您的",
      "感谢",
      "非常"
    ],
    "correctAnswer": "非常感谢您的帮助。",
    "pinyin": "Fēicháng gǎnxiè nín de bāngzhù.",
    "explanationVi": "非常 + 感谢 + Định ngữ (您的) + Danh từ (帮助)."
  },
  {
    "id": "so-hsk2-basic-1",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Thói quen",
    "promptVi": "Mỗi sáng tôi thức dậy lúc 6 giờ.",
    "scrambledTokens": [
      "起床。",
      "六点",
      "每天早上",
      "我"
    ],
    "correctAnswer": "我每天早上六点起床。",
    "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.",
    "explanationVi": "Thời gian xếp từ lớn đến nhỏ: 每天 -> 早上 -> 六点."
  },
  {
    "id": "so-hsk2-basic-2",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Câu so sánh 比",
    "promptVi": "Hôm nay lạnh hơn hôm qua nhiều.",
    "scrambledTokens": [
      "多了。",
      "冷",
      "比昨天",
      "今天"
    ],
    "correctAnswer": "今天比昨天冷多了。",
    "pinyin": "Jīntiān bǐ zuótiān lěng duō le.",
    "explanationVi": "A + 比 + B + Tính từ + 多了 (không dùng 很 với 比)."
  },
  {
    "id": "so-hsk2-basic-3",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Trải nghiệm 过",
    "promptVi": "Tôi từng đi Bắc Kinh, chưa từng đi Thượng Hải.",
    "scrambledTokens": [
      "上海。",
      "没去过",
      "去过北京，",
      "我"
    ],
    "correctAnswer": "我去过北京，没去过上海。",
    "pinyin": "Wǒ qù guo Běijīng, méi qù guo Shànghǎi.",
    "explanationVi": "Phủ định của 过 dùng 没...过."
  },
  {
    "id": "so-hsk2-basic-4",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Trạng thái 正在",
    "promptVi": "Bên ngoài đang mưa, đừng quên mang ô.",
    "scrambledTokens": [
      "带伞。",
      "别忘了",
      "正在下雨，",
      "外面"
    ],
    "correctAnswer": "外面正在下雨，别忘了带伞。",
    "pinyin": "Wàimiàn zhèngzài xiàyǔ, bié wàng le dài sǎn.",
    "explanationVi": "正在 + Động từ chỉ hành động đang diễn ra."
  },
  {
    "id": "so-hsk2-basic-5",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Phó từ 才",
    "promptVi": "Tối qua 11 giờ tôi mới đi ngủ.",
    "scrambledTokens": [
      "才睡觉。",
      "十一点",
      "昨天晚上",
      "我"
    ],
    "correctAnswer": "我昨天晚上十一点才睡觉。",
    "pinyin": "Wǒ zuótiān wǎnshang shíyī diǎn cái shuìjiào.",
    "explanationVi": "才 đứng trước động từ nhấn mạnh hành động xảy ra muộn."
  },
  {
    "id": "so-hsk2-basic-6",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Câu kiêm ngữ 让",
    "promptVi": "Bác sĩ bảo tôi uống nhiều nước ấm.",
    "scrambledTokens": [
      "热水。",
      "多喝",
      "让我",
      "医生"
    ],
    "correctAnswer": "医生让我多喝热水。",
    "pinyin": "Yīshēng ràng wǒ duō hē rèshuǐ.",
    "explanationVi": "Chủ ngữ + 让 + Tân ngữ + Cụm động từ (多喝热水)."
  },
  {
    "id": "so-hsk2-basic-7",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Đã làm gì",
    "promptVi": "Tôi đã ăn sáng rồi.",
    "scrambledTokens": [
      "早饭了。",
      "吃过",
      "已经",
      "我"
    ],
    "correctAnswer": "我已经吃过早饭了。",
    "pinyin": "Wǒ yǐjīng chī guo zǎofàn le.",
    "explanationVi": "Phó từ 已经 thường kết hợp với trợ từ 了 ở cuối câu."
  },
  {
    "id": "so-hsk2-basic-8",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Chỉ đường",
    "promptVi": "Trạm xe buýt ở phía trước rẽ trái.",
    "scrambledTokens": [
      "往左拐。",
      "前面",
      "就在",
      "公共汽车站"
    ],
    "correctAnswer": "公共汽车站就在前面往左拐。",
    "pinyin": "Gōnggòng qìchēzhàn jiù zài qiánmiàn wǎng zuǒ guǎi.",
    "explanationVi": "往 + Phương hướng (左) + Động từ (拐)."
  },
  {
    "id": "so-hsk2-basic-9",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Bổ ngữ kết quả",
    "promptVi": "Cuốn sách này tôi đọc 3 lần vẫn chưa hiểu.",
    "scrambledTokens": [
      "看懂。",
      "还没",
      "我看了三遍",
      "这本书"
    ],
    "correctAnswer": "这本书我看了三遍还没看懂。",
    "pinyin": "Zhè běn shū wǒ kàn le sān biàn hái méi kàndǒng.",
    "explanationVi": "Bổ ngữ kết quả 看懂 (đọc hiểu), phủ định bằng 没看懂."
  },
  {
    "id": "so-hsk2-basic-10",
    "level": "HSK2",
    "subDifficulty": "basic",
    "grammarTopic": "Dự định",
    "promptVi": "Tôi chuẩn bị tặng cô ấy một chiếc đồng hồ.",
    "scrambledTokens": [
      "手表。",
      "一块",
      "送她",
      "我准备"
    ],
    "correctAnswer": "我准备送她一块手表。",
    "pinyin": "Wǒ zhǔnbèi sòng tā yí kuài shǒubiǎo.",
    "explanationVi": "Động từ hai tân ngữ 送 + Người (她) + Vật (一块手表)."
  },
  {
    "id": "so-hsk2-advanced-1",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Mua sắm Taobao",
    "promptVi": "Tôi đã mua một đôi giày thể thao trên Taobao.",
    "scrambledTokens": [
      "一双运动鞋。",
      "买了",
      "淘宝上",
      "我在"
    ],
    "correctAnswer": "我在淘宝上买了一双运动鞋。",
    "pinyin": "Wǒ zài Táobǎo shàng mǎi le yì shuāng yùndòngxié.",
    "explanationVi": "Địa điểm trên mạng (在淘宝上) đặt trước động từ 买."
  },
  {
    "id": "so-hsk2-advanced-2",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Khách sạn",
    "promptVi": "Xin chào, tôi đã đặt trước một phòng tiêu chuẩn.",
    "scrambledTokens": [
      "标准间。",
      "一个",
      "我预订了",
      "你好，"
    ],
    "correctAnswer": "你好，我预订了一个标准间。",
    "pinyin": "Nǐ hǎo, wǒ yùdìng le yí gè biāozhǔnjiān.",
    "explanationVi": "Động từ 预订 + 了 + Tân ngữ (一个标准间)."
  },
  {
    "id": "so-hsk2-advanced-3",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Thủ tục",
    "promptVi": "Vui lòng xuất trình hộ chiếu hoặc căn cước.",
    "scrambledTokens": [
      "身份证。",
      "或者",
      "您的护照",
      "请出示"
    ],
    "correctAnswer": "请出示您的护照或者身份证。",
    "pinyin": "Qǐng chūshì nín de hùzhào huòzhě shēnfènzhèng.",
    "explanationVi": "Trong câu trần thuật/đề nghị dùng 或者 (hoặc)."
  },
  {
    "id": "so-hsk2-advanced-4",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Tàu điện ngầm",
    "promptVi": "Đi tuyến số 2 có thể tới thẳng sân bay.",
    "scrambledTokens": [
      "机场。",
      "可以直达",
      "二号线",
      "坐地铁"
    ],
    "correctAnswer": "坐地铁二号线可以直达机场。",
    "pinyin": "Zuò dìtiě èr hào xiàn kěyǐ zhídá jīchǎng.",
    "explanationVi": "Cụm phương tiện làm chủ ngữ + 可以直达 + Điểm đến."
  },
  {
    "id": "so-hsk2-advanced-5",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Câu chữ 把",
    "promptVi": "Vui lòng chuyển điện thoại sang chế độ im lặng.",
    "scrambledTokens": [
      "静音模式。",
      "调成",
      "手机",
      "请把"
    ],
    "correctAnswer": "请把手机调成静音模式。",
    "pinyin": "Qǐng bǎ shǒujī tiáochéng jìngyīn móshì.",
    "explanationVi": "Cấu trúc 把 + Tân ngữ + Động từ + Thành phần kết quả (调成)."
  },
  {
    "id": "so-hsk2-advanced-6",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Điều kiện 如果",
    "promptVi": "Nếu bạn có thời gian, chào mừng đến Việt Nam chơi.",
    "scrambledTokens": [
      "越南玩。",
      "欢迎来",
      "有时间，",
      "如果你"
    ],
    "correctAnswer": "如果你有时间，欢迎来越南玩。",
    "pinyin": "Rúguǒ nǐ yǒu shíjiān, huānyíng lái Yuènán wán.",
    "explanationVi": "Mệnh đề điều kiện 如果 đặt trước mệnh đề chính."
  },
  {
    "id": "so-hsk2-advanced-7",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Nhập hàng",
    "promptVi": "Tôi dự định nghỉ hè năm nay đi Quảng Châu nhập hàng.",
    "scrambledTokens": [
      "进货。",
      "去广州",
      "今年暑假",
      "我打算"
    ],
    "correctAnswer": "我打算今年暑假去广州进货。",
    "pinyin": "Wǒ dǎsuàn jīnnián shǔjià qù Guǎngzhōu jìnhuò.",
    "explanationVi": "打算 + Thời gian + 去 + Địa điểm + Mục đích (进货)."
  },
  {
    "id": "so-hsk2-advanced-8",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Mặc cả",
    "promptVi": "Ông chủ, mua nhiều chút có được giảm giá không?",
    "scrambledTokens": [
      "打折吗？",
      "可以",
      "买多一点",
      "老板，"
    ],
    "correctAnswer": "老板，买多一点可以打折吗？",
    "pinyin": "Lǎobǎn, mǎi duō yìdiǎn kěyǐ dǎzhé ma?",
    "explanationVi": "Điều kiện 买多一点 đặt trước câu hỏi 可以打折吗."
  },
  {
    "id": "so-hsk2-advanced-9",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Trả phòng",
    "promptVi": "Tôi muốn trả phòng vào 12 giờ trưa mai.",
    "scrambledTokens": [
      "退房。",
      "十二点",
      "明天中午",
      "我想"
    ],
    "correctAnswer": "我想明天中午十二点退房。",
    "pinyin": "Wǒ xiǎng míngtiān zhōngwǔ shí'èr diǎn tuìfáng.",
    "explanationVi": "Thời gian 明天中午十二点 đặt giữa 想 và động từ 退房."
  },
  {
    "id": "so-hsk2-advanced-10",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "grammarTopic": "Chất lượng",
    "promptVi": "Nếu chất lượng không có vấn đề, lần sau chúng tôi lại đến.",
    "scrambledTokens": [
      "我们还来。",
      "下次",
      "没问题的话，",
      "质量"
    ],
    "correctAnswer": "质量没问题的话，下次我们还来。",
    "pinyin": "Zhìliàng méi wèntí de huà, xià cì wǒmen hái lái.",
    "explanationVi": "Cấu trúc điều kiện khẩu ngữ ...的话 đặt cuối vế điều kiện."
  },
  {
    "id": "so-hsk3-basic-1",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Câu chữ 把",
    "promptVi": "Xin mọi người chuẩn bị xong tài liệu cuộc họp.",
    "scrambledTokens": [
      "好。",
      "准备",
      "把会议资料",
      "请大家"
    ],
    "correctAnswer": "请大家把会议资料准备好。",
    "pinyin": "Qǐng dàjiā bǎ huìyì zīliào zhǔnbèi hǎo.",
    "explanationVi": "把 + Tân ngữ (会议资料) + Động từ (准备) + Bổ ngữ kết quả (好)."
  },
  {
    "id": "so-hsk3-basic-2",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Gửi email",
    "promptVi": "Tôi vừa gửi một email cho khách hàng.",
    "scrambledTokens": [
      "电子邮件。",
      "发了一封",
      "给客户",
      "我刚"
    ],
    "correctAnswer": "我刚给客户发了一封电子邮件。",
    "pinyin": "Wǒ gāng gěi kèhù fā le yì fēng diànzǐ yóujiàn.",
    "explanationVi": "Giới từ 给 + Đối tượng (客户) đặt trước động từ 发."
  },
  {
    "id": "so-hsk3-basic-3",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Nguyên nhân",
    "promptVi": "Vì cảm cúm sốt nên hôm nay anh ấy xin nghỉ phép.",
    "scrambledTokens": [
      "请假了。",
      "他今天",
      "感冒发烧，",
      "因为"
    ],
    "correctAnswer": "因为感冒发烧，他今天请假了。",
    "pinyin": "Yīnwèi gǎnmào fāshāo, tā jīntiān qǐngjià le.",
    "explanationVi": "Mệnh đề nguyên nhân 因为 đặt trước mệnh đề kết quả."
  },
  {
    "id": "so-hsk3-basic-4",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Điều kiện 只要",
    "promptVi": "Chỉ cần nỗ lực, trình độ tiếng Hán nhất định sẽ tăng.",
    "scrambledTokens": [
      "一定会提高。",
      "汉语水平",
      "努力学习，",
      "只要"
    ],
    "correctAnswer": "只要努力学习，汉语水平一定会提高。",
    "pinyin": "Zhǐyào nǔlì xuéxí, Hànyǔ shuǐpíng yídìng huì tígāo.",
    "explanationVi": "Cặp cấu trúc 只要...就/一定... biểu thị điều kiện đủ."
  },
  {
    "id": "so-hsk3-basic-5",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Song song 一边",
    "promptVi": "Cuối tuần tôi ở nhà vừa uống trà vừa đọc sách.",
    "scrambledTokens": [
      "一边看书。",
      "一边喝茶",
      "我在家里",
      "周末"
    ],
    "correctAnswer": "周末我在家里一边喝茶一边看书。",
    "pinyin": "Zhōumò wǒ zài jiālǐ yìbiān hē chá yìbiān kànshū.",
    "explanationVi": "一边 + V1 + 一边 + V2 diễn tả hai hành động diễn ra cùng lúc."
  },
  {
    "id": "so-hsk3-basic-6",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Bổ sung 除了",
    "promptVi": "Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Hán.",
    "scrambledTokens": [
      "汉语。",
      "她还会说",
      "以外，",
      "除了英语"
    ],
    "correctAnswer": "除了英语以外，她还会说汉语。",
    "pinyin": "Chúle Yīngyǔ yǐwài, tā hái huì shuō Hànyǔ.",
    "explanationVi": "除了...以外，还... dùng để bổ sung thêm thông tin."
  },
  {
    "id": "so-hsk3-basic-7",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Nhượng bộ 虽然",
    "promptVi": "Tuy công việc bận nhưng phải chú ý rèn luyện sức khỏe.",
    "scrambledTokens": [
      "锻炼身体。",
      "但是要注意",
      "工作很忙，",
      "虽然"
    ],
    "correctAnswer": "虽然工作很忙，但是要注意锻炼身体。",
    "pinyin": "Suīrán gōngzuò hěn máng, dànshì yào zhùyì duànliàn shēntǐ.",
    "explanationVi": "Cặp liên từ nhượng bộ chuẩn 虽然...但是..."
  },
  {
    "id": "so-hsk3-basic-8",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Hứng thú",
    "promptVi": "Anh ấy rất có hứng thú với văn hóa Trung Quốc.",
    "scrambledTokens": [
      "感兴趣。",
      "很",
      "中国文化",
      "他对"
    ],
    "correctAnswer": "他对中国文化很感兴趣。",
    "pinyin": "Tā duì Zhōngguó wénhuà hěn gǎn xìngqù.",
    "explanationVi": "Cấu trúc cố định: A + 对 + B + 很感兴趣."
  },
  {
    "id": "so-hsk3-basic-9",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Cấm đoán",
    "promptVi": "Xin đừng hút thuốc trong thang máy.",
    "scrambledTokens": [
      "在电梯里",
      "吸烟。",
      "请不要"
    ],
    "correctAnswer": "请不要在电梯里吸烟。",
    "pinyin": "Qǐng búyào zài diàntī lǐ xīyān.",
    "explanationVi": "请不要 + Địa điểm (在电梯里) + Động từ (吸烟)."
  },
  {
    "id": "so-hsk3-basic-10",
    "level": "HSK3",
    "subDifficulty": "basic",
    "grammarTopic": "Phỏng vấn",
    "promptVi": "Khi tham gia phỏng vấn nên mặc trang phục trang trọng.",
    "scrambledTokens": [
      "正式的衣服。",
      "应该穿",
      "的时候",
      "参加面试"
    ],
    "correctAnswer": "参加面试的时候应该穿正式的衣服。",
    "pinyin": "Cānjiā miànshì de shíhou yīnggāi chuān zhèngshì de yīfu.",
    "explanationVi": "Mệnh đề thời gian ...的时候 luôn đặt ở đầu câu."
  },
  {
    "id": "so-hsk3-advanced-1",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Hỏi MOQ",
    "promptVi": "Số lượng đặt tối thiểu của mẫu này là bao nhiêu?",
    "scrambledTokens": [
      "是多少？",
      "起订量",
      "最低",
      "这款产品的"
    ],
    "correctAnswer": "这款产品的最低起订量是多少？",
    "pinyin": "Zhè kuǎn chǎnpǐn de zuìdī qǐdìngliàng shì duōshao?",
    "explanationVi": "Định ngữ 这款产品的 đứng trước cụm danh từ 最低起订量."
  },
  {
    "id": "so-hsk3-advanced-2",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Lấy mẫu",
    "promptVi": "Tôi muốn lấy trước hai mẫu thử xem chất lượng.",
    "scrambledTokens": [
      "看看质量。",
      "两个样品",
      "先拿",
      "我想"
    ],
    "correctAnswer": "我想先拿两个样品看看质量。",
    "pinyin": "Wǒ xiǎng xiān ná liǎng gè yàngpǐn kànkan zhìliàng.",
    "explanationVi": "Phó từ 先 đứng trước động từ thứ nhất 拿."
  },
  {
    "id": "so-hsk3-advanced-3",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Gửi báo giá",
    "promptVi": "Vui lòng gửi bảng báo giá vào WeChat của tôi.",
    "scrambledTokens": [
      "我的微信。",
      "发到",
      "报价单",
      "请把"
    ],
    "correctAnswer": "请把报价单发到我的微信。",
    "pinyin": "Qǐng bǎ bàojiàdān fā dào wǒ de Wēixìn.",
    "explanationVi": "Câu chữ 把 kết hợp bổ ngữ kết quả 发到 + Điểm đích."
  },
  {
    "id": "so-hsk3-advanced-4",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Kho Bằng Tường",
    "promptVi": "Vui lòng gửi hàng đến kho logistics Bằng Tường.",
    "scrambledTokens": [
      "凭祥物流仓。",
      "发到",
      "把货物",
      "请帮我"
    ],
    "correctAnswer": "请帮我把货物发到凭祥物流仓。",
    "pinyin": "Qǐng bāng wǒ bǎ huòwù fā dào Píngxiáng wùliúcāng.",
    "explanationVi": "请帮我 + 把 + Tân ngữ + 发到 + Địa điểm."
  },
  {
    "id": "so-hsk3-advanced-5",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Đóng gói",
    "promptVi": "Đóng gói thùng ngoài phải chắc chắn tránh hư hại.",
    "scrambledTokens": [
      "运输损坏。",
      "防止",
      "一定要结实，",
      "外箱包装"
    ],
    "correctAnswer": "外箱包装一定要结实，防止运输损坏。",
    "pinyin": "Wàixiāng bāozhuāng yídìng yào jiēshi, fángzhǐ yùnshū sǔnhuài.",
    "explanationVi": "Vế yêu cầu đặt trước, vế mục đích phòng ngừa 防止 đặt sau."
  },
  {
    "id": "so-hsk3-advanced-6",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Đặt cọc",
    "promptVi": "Chúng tôi thanh toán trước 30% tiền đặt cọc.",
    "scrambledTokens": [
      "定金。",
      "的",
      "百分之三十",
      "我们先付"
    ],
    "correctAnswer": "我们先付百分之三十的定金。",
    "pinyin": "Wǒmen xiān fù bǎifēn zhī sānshí de dìngjīn.",
    "explanationVi": "Phần trăm 百分之三十 làm định ngữ nối bằng 的 trước 定金."
  },
  {
    "id": "so-hsk3-advanced-7",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Thanh toán尾款",
    "promptVi": "Số tiền còn lại thanh toán hết trước khi gửi hàng.",
    "scrambledTokens": [
      "全部付清。",
      "在发货前",
      "尾款",
      "剩下的"
    ],
    "correctAnswer": "剩下的尾款在发货前全部付清。",
    "pinyin": "Shèngxià de wěikuǎn zài fāhuò qián quánbù fùqīng.",
    "explanationVi": "Thời gian 在发货前 đặt trước cụm động từ 全部付清."
  },
  {
    "id": "so-hsk3-advanced-8",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Đổi trả",
    "promptVi": "Nếu có vấn đề chất lượng, nhà máy chịu trách nhiệm đổi trả.",
    "scrambledTokens": [
      "退换。",
      "工厂负责",
      "质量问题，",
      "如果发现"
    ],
    "correctAnswer": "如果发现质量问题，工厂负责退换。",
    "pinyin": "Rúguǒ fāxiàn zhìliàng wèntí, gōngchǎng fùzé tuìhuàn.",
    "explanationVi": "Điều kiện 如果... đặt trước kết quả 工厂负责退换."
  },
  {
    "id": "so-hsk3-advanced-9",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Hợp tác",
    "promptVi": "Hy vọng chúng ta thiết lập quan hệ hợp tác lâu dài.",
    "scrambledTokens": [
      "合作关系。",
      "长期的",
      "能够建立",
      "希望我们"
    ],
    "correctAnswer": "希望我们能够建立长期的合作关系。",
    "pinyin": "Xīwàng wǒmen nénggòu jiànlì chángqī de hézuò guānxi.",
    "explanationVi": "Định ngữ 长期的 bổ nghĩa cho 合作关系."
  },
  {
    "id": "so-hsk3-advanced-10",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "grammarTopic": "Chúc thương mại",
    "promptVi": "Chúc ông chủ buôn may bán đắt, tài lộc dồi dào!",
    "scrambledTokens": [
      "广进！",
      "财源",
      "生意兴隆，",
      "祝老板"
    ],
    "correctAnswer": "祝老板生意兴隆，财源广进！",
    "pinyin": "Zhù lǎobǎn shēngyi xīnglóng, cáiyuán guǎngjìn!",
    "explanationVi": "Cấu trúc chúc tụng 祝 + Đối tượng + Hai thành ngữ 4 chữ song song."
  },
  {
    "id": "so-hsk4-basic-1",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Phát triển 随着",
    "promptVi": "Cùng với sự phát triển công nghệ, thói quen tiêu dùng đã đổi thay.",
    "scrambledTokens": [
      "发生了变化。",
      "消费习惯",
      "科技的发展，",
      "随着"
    ],
    "correctAnswer": "随着科技的发展，消费习惯发生了变化。",
    "pinyin": "Suízhe kējì de fāzhǎn, xiāofèi xíguàn fāshēng le biànhuà.",
    "explanationVi": "Cụm giới từ 随着... đứng đầu câu nêu bối cảnh."
  },
  {
    "id": "so-hsk4-basic-2",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Bất kể 无论",
    "promptVi": "Bất kể đi tàu điện hay đi chợ đều có thể quét mã.",
    "scrambledTokens": [
      "都可以扫码。",
      "还是买菜，",
      "坐地铁",
      "无论是"
    ],
    "correctAnswer": "无论是坐地铁还是买菜，都可以扫码。",
    "pinyin": "Wúlùn shì zuò dìtiě háishi mǎi cài, dōu kěyǐ sǎomǎ.",
    "explanationVi": "Cấu trúc 无论...还是...，都..."
  },
  {
    "id": "so-hsk4-basic-3",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Tăng tiến 不仅",
    "promptVi": "Tàu cao tốc không những nhanh mà còn rất đúng giờ.",
    "scrambledTokens": [
      "十分准时。",
      "而且",
      "不仅速度快，",
      "高铁"
    ],
    "correctAnswer": "高铁不仅速度快，而且十分准时。",
    "pinyin": "Gāotiě bùjǐn sùdù kuài, érqiě shífēn zhǔnshí.",
    "explanationVi": "Cặp liên từ tăng tiến 不仅...而且..."
  },
  {
    "id": "so-hsk4-basic-4",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Mối quan hệ 与",
    "promptVi": "Văn hóa ẩm thực có quan hệ mật thiết với khí hậu.",
    "scrambledTokens": [
      "密切关系。",
      "有",
      "与当地气候",
      "饮食文化"
    ],
    "correctAnswer": "饮食文化与当地气候有密切关系。",
    "pinyin": "Yǐnshí wénhuà yǔ dāngdì qìhòu yǒu mìqiè guānxi.",
    "explanationVi": "A + 与 + B + 有密切关系."
  },
  {
    "id": "so-hsk4-basic-5",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Mục đích 通过",
    "promptVi": "Thông qua giao lưu văn hóa, tôi kết thêm nhiều bạn.",
    "scrambledTokens": [
      "许多朋友。",
      "我交到了",
      "文化交流，",
      "通过"
    ],
    "correctAnswer": "通过文化交流，我交到了许多朋友。",
    "pinyin": "Tōngguò wénhuà jiāoliú, wǒ jiāo dào le xǔduō péngyou.",
    "explanationVi": "通过 + Phương thức/Hoạt động đặt ở vế đầu."
  },
  {
    "id": "so-hsk4-basic-6",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Trách nhiệm",
    "promptVi": "Bảo vệ môi trường là trách nhiệm của mỗi công dân.",
    "scrambledTokens": [
      "责任。",
      "应该承担的",
      "是每个公民",
      "保护环境"
    ],
    "correctAnswer": "保护环境是每个公民应该承担的责任。",
    "pinyin": "Bǎohù huánjìng shì měi gè gōngmín yīnggāi chéngdān de zérèn.",
    "explanationVi": "Định ngữ dài 每个公民应该承担的 đứng trước trung tâm ngữ 责任."
  },
  {
    "id": "so-hsk4-basic-7",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Thất bại",
    "promptVi": "Quan trọng là tổng kết kinh nghiệm từ thất bại.",
    "scrambledTokens": [
      "经验教训。",
      "总结",
      "从失败中",
      "重要的是"
    ],
    "correctAnswer": "重要的是从失败中总结经验教训。",
    "pinyin": "Zhòngyào de shì cóng shībài zhōng zǒngjié jīngyàn jiàoxun.",
    "explanationVi": "从...中 đặt trước động từ 总结."
  },
  {
    "id": "so-hsk4-basic-8",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Cân bằng",
    "promptVi": "Người trẻ ngày càng coi trọng cân bằng công việc và cuộc sống.",
    "scrambledTokens": [
      "平衡。",
      "工作与生活的",
      "越来越重视",
      "年轻人"
    ],
    "correctAnswer": "年轻人越来越重视工作与生活的平衡。",
    "pinyin": "Niánqīngrén yuèláiyuè zhòngshì gōngzuò yǔ shēnghuó de pínghéng.",
    "explanationVi": "越来越 + Động từ tâm lý 重视 + Tân ngữ."
  },
  {
    "id": "so-hsk4-basic-9",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Kiên trì",
    "promptVi": "Muốn học tốt ngoại ngữ thì kiên trì là chìa khóa.",
    "scrambledTokens": [
      "是关键。",
      "坚持练习",
      "学好外语，",
      "要想"
    ],
    "correctAnswer": "要想学好外语，坚持练习是关键。",
    "pinyin": "Yàoxiǎng xuéhǎo wàiyǔ, jiānchí liànxí shì guānjiàn.",
    "explanationVi": "Mệnh đề mục đích 要想... đặt trước kết luận."
  },
  {
    "id": "so-hsk4-basic-10",
    "level": "HSK4",
    "subDifficulty": "basic",
    "grammarTopic": "Du lịch",
    "promptVi": "Du lịch không chỉ mở mang tầm mắt mà còn thư giãn tâm trạng.",
    "scrambledTokens": [
      "放松心情。",
      "还能",
      "不仅能开阔眼界，",
      "旅行"
    ],
    "correctAnswer": "旅行不仅能开阔眼界，还能放松心情。",
    "pinyin": "Lǚxíng bùjǐn néng kāikuò yǎnjiè, hái néng fàngsōng xīnqíng.",
    "explanationVi": "不仅能...，还能... diễn tả hai lợi ích song song."
  },
  {
    "id": "so-hsk4-advanced-1",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Chứng từ",
    "promptVi": "Vui lòng cung cấp trước phiếu đóng gói và hóa đơn.",
    "scrambledTokens": [
      "商业发票。",
      "装箱单和",
      "提前提供",
      "请务必"
    ],
    "correctAnswer": "请务必提前提供装箱单和商业发票。",
    "pinyin": "Qǐng wùbì tíqián tígōng zhuāngxiāngdān hé shāngyè fāpiào.",
    "explanationVi": "Phó từ 务必 (nhất định) đứng trước 提前提供."
  },
  {
    "id": "so-hsk4-advanced-2",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Hải quan",
    "promptVi": "Nếu chứng từ không khớp sẽ dẫn đến hải quan kiểm hóa.",
    "scrambledTokens": [
      "海关查验。",
      "可能会导致",
      "单证不符，",
      "如果"
    ],
    "correctAnswer": "如果单证不符，可能会导致海关查验。",
    "pinyin": "Rúguǒ dānzhèng bùfú, kěnéng huì dǎozhì hǎiguān cháyàn.",
    "explanationVi": "Động từ 导致 (dẫn đến) luôn đi với hậu quả tiêu cực."
  },
  {
    "id": "so-hsk4-advanced-3",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Điều khoản FOB",
    "promptVi": "Khách hàng yêu cầu tính lại báo giá theo điều khoản FOB.",
    "scrambledTokens": [
      "报价。",
      "重新计算",
      "按照FOB条款",
      "客户要求"
    ],
    "correctAnswer": "客户要求按照FOB条款重新计算报价。",
    "pinyin": "Kèhù yāoqiú ànzhào FOB tiáokuǎn chóngxīn jìsuàn bàojià.",
    "explanationVi": "Giới từ 按照 + Tiêu chuẩn đứng trước động từ 重新计算."
  },
  {
    "id": "so-hsk4-advanced-4",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Giấy C/O",
    "promptVi": "Giấy chứng nhận xuất xứ giúp hưởng ưu đãi giảm thuế.",
    "scrambledTokens": [
      "关税减免。",
      "享受",
      "可以帮进口商",
      "原产地证书"
    ],
    "correctAnswer": "原产地证书可以帮进口商享受关税减免。",
    "pinyin": "Yuánchǎndì zhèngshū kěyǐ bāng jìnkǒushāng xiǎngshòu guānshuì jiǎnmiǎn.",
    "explanationVi": "Cấu trúc kiêm ngữ 帮 + Đối tượng + Động từ 享受."
  },
  {
    "id": "so-hsk4-advanced-5",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Mục đích 为了",
    "promptVi": "Để thu hút khách hàng trẻ, cần tối ưu hóa bao bì.",
    "scrambledTokens": [
      "优化包装。",
      "我们需要",
      "年轻消费者，",
      "为了吸引"
    ],
    "correctAnswer": "为了吸引年轻消费者，我们需要优化包装。",
    "pinyin": "Wèile xīyǐn niánqīng xiāofèizhě, wǒmen xūyào yōuhuà bāozhuāng.",
    "explanationVi": "Mệnh đề mục đích 为了... đặt ở đầu câu."
  },
  {
    "id": "so-hsk4-advanced-6",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Nguyên nhân 由于",
    "promptVi": "Do giá nguyên liệu tăng, nhà máy buộc phải chỉnh giá.",
    "scrambledTokens": [
      "调整出厂价。",
      "工厂不得不",
      "原材料涨价，",
      "由于"
    ],
    "correctAnswer": "由于原材料涨价，工厂不得不调整出厂价。",
    "pinyin": "Yóuyú yuáncáiliào zhǎngjià, gōngchǎng bùdébù tiáozhěng chūchǎngjià.",
    "explanationVi": "由于 nêu nguyên nhân khách quan, 不得不 (buộc phải) nêu kết quả."
  },
  {
    "id": "so-hsk4-advanced-7",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Kho ngoại quan",
    "promptVi": "Chúng tôi lập kho ngoại quan ở TP.HCM hỗ trợ dropshipping.",
    "scrambledTokens": [
      "支持一件代发。",
      "设立了海外仓，",
      "胡志明市",
      "我们在"
    ],
    "correctAnswer": "我们在胡志明市设立了海外仓，支持一件代发。",
    "pinyin": "Wǒmen zài Húzhìmíng shì shèlì le hǎiwàicāng, zhīchí yí jiàn dàifā.",
    "explanationVi": "Địa điểm 在胡志明市 đặt trước động từ 设立."
  },
  {
    "id": "so-hsk4-advanced-8",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Hậu mãi",
    "promptVi": "Dịch vụ hậu mãi tốt nâng cao tỷ lệ mua lại của khách.",
    "scrambledTokens": [
      "客户复购率。",
      "能够提升",
      "售后服务",
      "良好的"
    ],
    "correctAnswer": "良好的售后服务能够提升客户复购率。",
    "pinyin": "Liánghǎo de shòuhòu fúwù nénggòu tíshēng kèhù fùgòulǜ.",
    "explanationVi": "Cụm danh từ chủ ngữ + 能够提升 + Tân ngữ."
  },
  {
    "id": "so-hsk4-advanced-9",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Điều kiện 只有",
    "promptVi": "Chỉ có kiểm soát chặt chất lượng mới thắng trong cạnh tranh.",
    "scrambledTokens": [
      "获胜。",
      "才能在竞争中",
      "控制质量，",
      "只有严格"
    ],
    "correctAnswer": "只有严格控制质量，才能在竞争中获胜。",
    "pinyin": "Zhǐyǒu yángé kòngzhì zhìliàng, cái néng zài jìngzhēng zhōng huòshèng.",
    "explanationVi": "Cấu trúc điều kiện duy nhất 只有...才能..."
  },
  {
    "id": "so-hsk4-advanced-10",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "grammarTopic": "Mã vận đơn",
    "promptVi": "Vui lòng gửi mã vận đơn cho tôi để tiện theo dõi.",
    "scrambledTokens": [
      "以便追踪。",
      "发给我",
      "物流单号",
      "请把"
    ],
    "correctAnswer": "请把物流单号发给我以便追踪。",
    "pinyin": "Qǐng bǎ wùliú dānhào fā gěi wǒ yǐbiàn zhuīzōng.",
    "explanationVi": "Liên từ 以便 (để tiện cho việc...) đặt ở vế sau."
  },
  {
    "id": "so-hsk5-basic-1",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "AI & Ngành nghề",
    "promptVi": "Ứng dụng AI đang làm thay đổi sâu sắc các ngành truyền thống.",
    "scrambledTokens": [
      "传统行业。",
      "正在深刻改变",
      "广泛应用",
      "人工智能的"
    ],
    "correctAnswer": "人工智能的广泛应用正在深刻改变传统行业。",
    "pinyin": "Réngōng zhìnéng de guǎngfàn yìngyòng zhèngzài shēnkè gǎibiàn chuántǒng hángyè.",
    "explanationVi": "Chủ ngữ danh từ hóa + 正在深刻改变 + Tân ngữ."
  },
  {
    "id": "so-hsk5-basic-2",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Đối lập 而不是",
    "promptVi": "Cha mẹ nên lắng nghe con cái chứ không phải chỉ trích.",
    "scrambledTokens": [
      "一味指责。",
      "而不是",
      "倾听孩子，",
      "父母应该"
    ],
    "correctAnswer": "父母应该倾听孩子，而不是一味指责。",
    "pinyin": "Fùmǔ yīnggāi qīngtīng háizi, ér bú shì yíwèi zhǐzé.",
    "explanationVi": "Cấu trúc tương phản ...而不是..."
  },
  {
    "id": "so-hsk5-basic-3",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Học suốt đời",
    "promptVi": "Đối mặt cạnh tranh công sở, học suốt đời là xu thế tất yếu.",
    "scrambledTokens": [
      "已成为趋势。",
      "终身学习",
      "职场竞争，",
      "面对"
    ],
    "correctAnswer": "面对职场竞争，终身学习已成为趋势。",
    "pinyin": "Miànduì zhíchǎng jìngzhēng, zhōngshēn xuéxí yǐ chéngwéi qūshì.",
    "explanationVi": "Cụm động từ 面对... đứng đầu câu nêu hoàn cảnh."
  },
  {
    "id": "so-hsk5-basic-4",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Xe điện",
    "promptVi": "Phổ cập xe năng lượng mới giúp giảm phát thải carbon.",
    "scrambledTokens": [
      "碳排放。",
      "有助于减少",
      "普及",
      "新能源汽车的"
    ],
    "correctAnswer": "新能源汽车的普及有助于减少碳排放。",
    "pinyin": "Xīn néngyuán qìchē de pǔjí yǒuzhùyú jiǎnshǎo tàn páifàng.",
    "explanationVi": "Động từ văn viết 有助于 (có ích cho việc...) + Cụm động từ."
  },
  {
    "id": "so-hsk5-basic-5",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Đánh giá rủi ro",
    "promptVi": "Trước khi quyết định lớn, cần đánh giá toàn diện rủi ro.",
    "scrambledTokens": [
      "潜在风险。",
      "应当全面评估",
      "重大决定前，",
      "在做出"
    ],
    "correctAnswer": "在做出重大决定前，应当全面评估潜在风险。",
    "pinyin": "Zài zuòchū zhòngdà juédìng qián, yīngdāng quánmiàn pínggū qiánzài fēngxiǎn.",
    "explanationVi": "Cụm thời gian 在...前 đặt ở vế đầu."
  },
  {
    "id": "so-hsk5-basic-6",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Giao tiếp",
    "promptVi": "Kỹ năng giao tiếp tốt thường hóa giải được nhiều mâu thuẫn.",
    "scrambledTokens": [
      "许多矛盾。",
      "往往能化解",
      "沟通技巧",
      "良好的"
    ],
    "correctAnswer": "良好的沟通技巧往往能化解许多矛盾。",
    "pinyin": "Liánghǎo de gōutōng jìqiǎo wǎngwǎng néng huàjiě xǔduō máodùn.",
    "explanationVi": "Phó từ 往往 (thường) đứng trước động từ năng nguyện 能."
  },
  {
    "id": "so-hsk5-basic-7",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Tiêu dùng",
    "promptVi": "Người tiêu dùng cần giữ lý tính, tránh chạy theo đám đông.",
    "scrambledTokens": [
      "跟风消费。",
      "避免盲目",
      "保持理性，",
      "消费者应当"
    ],
    "correctAnswer": "消费者应当保持理性，避免盲目跟风消费。",
    "pinyin": "Xiāofèizhě yīngdāng bǎochí lǐxìng, bìmiǎn mángmù gēnfēng xiāofèi.",
    "explanationVi": "Động từ 避免 + Hành vi tiêu cực (盲目跟风消费)."
  },
  {
    "id": "so-hsk5-basic-8",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Lý thuyết & Thực tế",
    "promptVi": "Kết hợp lý thuyết với thực hành mới nắm vững kỹ năng.",
    "scrambledTokens": [
      "掌握技能。",
      "才能真正",
      "与实际结合，",
      "只有把理论"
    ],
    "correctAnswer": "只有把理论与实际结合，才能真正掌握技能。",
    "pinyin": "Zhǐyǒu bǎ lǐlùn yǔ shíjì jiéhé, cái néng zhēnzhèng zhǎngwò jìnéng.",
    "explanationVi": "Cấu trúc 把 A 与 B 结合 kết hợp với 只有...才能..."
  },
  {
    "id": "so-hsk5-basic-9",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Ứng phó khẩn cấp",
    "promptVi": "Đối mặt sự cố bất ngờ, cơ quan chức năng lập tức ứng phó.",
    "scrambledTokens": [
      "启动预案。",
      "相关部门迅速",
      "突发事件，",
      "面对"
    ],
    "correctAnswer": "面对突发事件，相关部门迅速启动预案。",
    "pinyin": "Miànduì tūfā shìjiàn, xiāngguān bùmén xùnsù qǐdòng yù'àn.",
    "explanationVi": "Trạng ngữ 迅速 đứng ngay trước động từ 启动."
  },
  {
    "id": "so-hsk5-basic-10",
    "level": "HSK5",
    "subDifficulty": "basic",
    "grammarTopic": "Đa dạng văn hóa",
    "promptVi": "Tôn trọng đa dạng văn hóa là tiền đề hợp tác quốc tế.",
    "scrambledTokens": [
      "必要前提。",
      "是国际合作的",
      "文化多样性",
      "尊重"
    ],
    "correctAnswer": "尊重文化多样性是国际合作的必要前提。",
    "pinyin": "Zūnzhòng wénhuà duōyàngxìng shì guójì hézuò de bìyào qiántí.",
    "explanationVi": "Cụm động từ làm chủ ngữ + 是 + ...的必要前提."
  },
  {
    "id": "so-hsk5-advanced-1",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Thống nhất thanh toán",
    "promptVi": "Trước khi ký hợp đồng, hai bên cần thống nhất cách thanh toán.",
    "scrambledTokens": [
      "达成一致。",
      "付款方式",
      "双方需要就",
      "签署合同前，"
    ],
    "correctAnswer": "签署合同前，双方需要就付款方式达成一致。",
    "pinyin": "Qiānshǔ hétong qián, shuāngfāng xūyào jiù fùkuǎn fāngshì dáchéng yízhì.",
    "explanationVi": "Cấu trúc thương mại chuẩn: 就 + Vấn đề + 达成一致."
  },
  {
    "id": "so-hsk5-advanced-2",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Thư tín dụng L/C",
    "promptVi": "Với đơn hàng lớn lần đầu, đề nghị dùng L/C không hủy ngang.",
    "scrambledTokens": [
      "不可撤销信用证。",
      "我方建议采用",
      "大额订单，",
      "对于首次"
    ],
    "correctAnswer": "对于首次大额订单，我方建议采用不可撤销信用证。",
    "pinyin": "Duìyú shǒucì dà'é dìngdān, wǒfāng jiànyì cǎiyòng bùkě chèxiāo xìnyòngzhèng.",
    "explanationVi": "Giới từ 对于 đứng đầu câu nêu đối tượng đề cập."
  },
  {
    "id": "so-hsk5-advanced-3",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Đại lý độc quyền",
    "promptVi": "Nếu đảm bảo sản lượng năm, có thể trao quyền đại lý độc quyền.",
    "scrambledTokens": [
      "独家代理权。",
      "我们可以授予",
      "年度采购量，",
      "如果保证"
    ],
    "correctAnswer": "如果保证年度采购量，我们可以授予独家代理权。",
    "pinyin": "Rúguǒ bǎozhèng niándù cǎigòuliàng, wǒmen kěyǐ shòuyǔ dújiā dàilǐquán.",
    "explanationVi": "Động từ thương mại 授予 (trao quyền) + 独家代理权."
  },
  {
    "id": "so-hsk5-advanced-4",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Hiệu lực báo giá",
    "promptVi": "Do tỷ giá biến động, báo giá có hiệu lực 15 ngày làm việc.",
    "scrambledTokens": [
      "为十五个工作日。",
      "本报价单有效期",
      "汇率波动，",
      "由于"
    ],
    "correctAnswer": "由于汇率波动，本报价单有效期为十五个工作日。",
    "pinyin": "Yóuyú huìlǜ bōdòng, běn bàojiàdān yǒuxiàoqī wéi shíwǔ gè gōngzuòrì.",
    "explanationVi": "Văn phong hợp đồng dùng 为 (wéi) thay cho 是."
  },
  {
    "id": "so-hsk5-advanced-5",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Kiểm định thứ ba",
    "promptVi": "Bên mua có quyền ủy thác bên thứ ba kiểm tra trước khi xếp tàu.",
    "scrambledTokens": [
      "进行抽检。",
      "在装船前",
      "委托第三方",
      "买方有权"
    ],
    "correctAnswer": "买方有权委托第三方在装船前进行抽检。",
    "pinyin": "Mǎifāng yǒuquán wěituō dì-sānfāng zài zhuāngchuán qián jìnxíng chōujiǎn.",
    "explanationVi": "有权 + 委托 + Đối tượng + Thời gian + 进行抽检."
  },
  {
    "id": "so-hsk5-advanced-6",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Bảo mật",
    "promptVi": "Để bảo vệ bí mật thương mại, hai bên phải ký thỏa thuận bảo mật.",
    "scrambledTokens": [
      "保密协议。",
      "双方必须签订",
      "商业机密，",
      "为了保障"
    ],
    "correctAnswer": "为了保障商业机密，双方必须签订保密协议。",
    "pinyin": "Wèile bǎozhàng shāngyè jīmì, shuāngfāng bìxū qiāndìng bǎomì xiéyì.",
    "explanationVi": "为了...，双方必须签订..."
  },
  {
    "id": "so-hsk5-advanced-7",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Tranh chấp",
    "promptVi": "Một khi phát sinh tranh chấp, ưu tiên thương lượng hoặc trọng tài.",
    "scrambledTokens": [
      "协商或仲裁解决。",
      "应优先通过",
      "贸易争端，",
      "一旦发生"
    ],
    "correctAnswer": "一旦发生贸易争端，应优先通过协商或仲裁解决。",
    "pinyin": "Yídàn fāshēng màoyì zhēngduān, yīng yōuxiān tōngguò xiéshāng huò zhòngcái jiějué.",
    "explanationVi": "Cấu trúc giả thiết 一旦...，应..."
  },
  {
    "id": "so-hsk5-advanced-8",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Nghiệm thu",
    "promptVi": "Xin quý bên hoàn thành nghiệm thu trong vòng 7 ngày sau khi nhận hàng.",
    "scrambledTokens": [
      "验收确认。",
      "七天内完成",
      "收到货物后",
      "请贵方"
    ],
    "correctAnswer": "请贵方收到货物后七天内完成验收确认。",
    "pinyin": "Qǐng guìfāng shōudào huòwù hòu qī tiān nèi wánchéng yànshōu quèrèn.",
    "explanationVi": "Thời gian 收到货物后七天内 đặt trước động từ 完成."
  },
  {
    "id": "so-hsk5-advanced-9",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Hợp tác chiến lược",
    "promptVi": "Sự hợp tác lần này đặt nền móng cho logistics thông minh.",
    "scrambledTokens": [
      "奠定了基础。",
      "智慧物流领域",
      "为双方在",
      "此次合作"
    ],
    "correctAnswer": "此次合作为双方在智慧物流领域奠定了基础。",
    "pinyin": "Cǐ cì hézuò wèi shuāngfāng zài zhìhuì wùliú lǐngyù diàndìng le jīchǔ.",
    "explanationVi": "Cấu trúc cố định: 为...奠定了基础 (đặt nền móng cho...)."
  },
  {
    "id": "so-hsk5-advanced-10",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "grammarTopic": "Mời dự hội chợ",
    "promptVi": "Chúng tôi chân thành mời quý công ty dự Hội chợ Nhập khẩu.",
    "scrambledTokens": [
      "国际进口博览会。",
      "出席上海",
      "贵公司代表",
      "我们诚挚邀请"
    ],
    "correctAnswer": "我们诚挚邀请贵公司代表出席上海国际进口博览会。",
    "pinyin": "Wǒmen chéngzhì yāoqǐng guì gōngsī dàibiǎo chūxí Shànghǎi Guójì Jìnkǒu Bólǎnhuì.",
    "explanationVi": "Câu kiêm ngữ trang trọng: 诚挚邀请 + Đối tượng + 出席 + Sự kiện."
  },
  {
    "id": "so-hsk6-basic-1",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Di sản văn hóa",
    "promptVi": "Bảo vệ di sản phi vật thể cần sự kế thừa của thế hệ trẻ.",
    "scrambledTokens": [
      "年轻一代的传承。",
      "更依赖于",
      "不仅需要资金，",
      "非遗保护"
    ],
    "correctAnswer": "非遗保护不仅需要资金，更依赖于年轻一代的传承。",
    "pinyin": "Fēiyí bǎohù bùjǐn xūyào zījīn, gèng yīlài yú niánqīng yídài de chuánchéng.",
    "explanationVi": "Cấu trúc tăng tiến 不仅...，更依赖于..."
  },
  {
    "id": "so-hsk6-basic-2",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Đô thị hóa",
    "promptVi": "Đô thị hóa mang lại phồn vinh đồng thời gây áp lực sinh thái.",
    "scrambledTokens": [
      "生态环境压力。",
      "同时，也引发了",
      "在带来繁荣的",
      "城市化"
    ],
    "correctAnswer": "城市化在带来繁荣的同时，也引发了生态环境压力。",
    "pinyin": "Chéngshìhuà zài dàilái fánróng de tóngshí, yě yǐnfā le shēngtài huánjìng yālì.",
    "explanationVi": "Cấu trúc 在...的同时，也... diễn tả hai mặt cùng tồn tại."
  },
  {
    "id": "so-hsk6-basic-3",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Sở dĩ 之所以",
    "promptVi": "Tác phẩm văn học lay động độc giả là vì chạm tới cảm xúc chung.",
    "scrambledTokens": [
      "人类共通情感。",
      "是因为触及了",
      "之所以打动读者，",
      "文学作品"
    ],
    "correctAnswer": "文学作品之所以打动读者，是因为触及了人类共通情感。",
    "pinyin": "Wénxué zuòpǐn zhīsuǒyǐ dǎdòng dúzhě, shì yīnwèi chùjí le rénlèi gòngtōng qínggǎn.",
    "explanationVi": "Cấu trúc nhân quả đảo ngược 之所以...，是因为..."
  },
  {
    "id": "so-hsk6-basic-4",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Trách nhiệm DN",
    "promptVi": "Nếu doanh nghiệp chỉ ham lợi ngắn hạn sẽ mất lòng tin khách hàng.",
    "scrambledTokens": [
      "消费者的信赖。",
      "终将失去",
      "短期利润，",
      "若企业只顾"
    ],
    "correctAnswer": "若企业只顾短期利润，终将失去消费者的信赖。",
    "pinyin": "Ruò qǐyè zhǐgù duǎnqī lìrùn, zhōngjiāng shīqù xiāofèizhě de xìnlài.",
    "explanationVi": "若 (nếu) + Hành vi sai -> 终将 (cuối cùng sẽ) + Hậu quả."
  },
  {
    "id": "so-hsk6-basic-5",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Nghiên cứu",
    "promptVi": "Suy luận logic chặt chẽ và dữ liệu thực chứng không thể thiếu một.",
    "scrambledTokens": [
      "缺一不可。",
      "实证数据",
      "严谨推理与",
      "在学术研究中，"
    ],
    "correctAnswer": "在学术研究中，严谨推理与实证数据缺一不可。",
    "pinyin": "Zài xuéshù yánjiū zhōng, yánjǐn tuīlǐ yǔ shízhèng shùjù quēyībùkě.",
    "explanationVi": "A 与 B 缺一不可 (thiếu một cũng không được)."
  },
  {
    "id": "so-hsk6-basic-6",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Phim lịch sử",
    "promptVi": "Bộ phim nhận được lời khen đồng nhất nhờ diễn xuất tinh tế.",
    "scrambledTokens": [
      "一致好评。",
      "而获得了",
      "因演技精湛",
      "这部历史剧"
    ],
    "correctAnswer": "这部历史剧因演技精湛而获得了一致好评。",
    "pinyin": "Zhè bù lìshǐjù yīn yǎnjì jīngzhàn ér huòdé le yízhì hǎopíng.",
    "explanationVi": "Cấu trúc văn viết 因...而... (nhờ/vì... mà...)."
  },
  {
    "id": "so-hsk6-basic-7",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Rập khuôn",
    "promptVi": "Rập khuôn kinh nghiệm nước ngoài khó đạt hiệu quả kỳ vọng.",
    "scrambledTokens": [
      "预期成效。",
      "往往难以取得",
      "国外经验，",
      "盲目照搬"
    ],
    "correctAnswer": "盲目照搬国外经验，往往难以取得预期成效。",
    "pinyin": "Mángmù zhàobān guówài jīngyàn, wǎngwǎng nányǐ qǔdé yùqī chéngxiào.",
    "explanationVi": "Cụm động từ chủ ngữ + 往往难以 + Động từ."
  },
  {
    "id": "so-hsk6-basic-8",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Phổ cập khoa học",
    "promptVi": "Cần dùng ngôn ngữ bình dị để giải thích nguyên lý sâu xa.",
    "scrambledTokens": [
      "深奥原理。",
      "向大众阐释",
      "用通俗语言",
      "科普工作应当"
    ],
    "correctAnswer": "科普工作应当用通俗语言向大众阐释深奥原理。",
    "pinyin": "Kēpǔ gōngzuò yīngdāng yòng tōngsú yǔyán xiàng dàzhòng chǎnshì shēn'ào yuánlǐ.",
    "explanationVi": "用 + Công cụ -> 向 + Đối tượng -> Động từ 阐释."
  },
  {
    "id": "so-hsk6-basic-9",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Tâm thái",
    "promptVi": "Tâm thái lạc quan là động lực lớn nhất bước ra khỏi nghịch cảnh.",
    "scrambledTokens": [
      "最大动力。",
      "走出低谷的",
      "心态往往是",
      "乐观豁达的"
    ],
    "correctAnswer": "乐观豁达的心态往往是走出低谷的最大动力。",
    "pinyin": "Lèguān huòdá de xīntài wǎngwǎng shì zǒuchū dīgǔ de zuìdà dònglì.",
    "explanationVi": "Cụm danh từ + 往往是 + Định ngữ + Trung tâm ngữ."
  },
  {
    "id": "so-hsk6-basic-10",
    "level": "HSK6",
    "subDifficulty": "basic",
    "grammarTopic": "Sinh thái",
    "promptVi": "Môi trường bị phá hủy cần nhiều thế hệ mới khôi phục được.",
    "scrambledTokens": [
      "才能得以修复。",
      "需要数代人",
      "遭到破坏，",
      "生态环境一旦"
    ],
    "correctAnswer": "生态环境一旦遭到破坏，需要数代人才能得以修复。",
    "pinyin": "Shēngtài huánjìng yídàn zāodào pòhuài, xūyào shù dài rén cái néng déyǐ xiūfù.",
    "explanationVi": "一旦...，需要...才能得以..."
  },
  {
    "id": "so-hsk6-advanced-1",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Hiệp định RCEP",
    "promptVi": "Hiệu lực của RCEP bơm động lực mạnh cho thương mại châu Á.",
    "scrambledTokens": [
      "注入了强劲动力。",
      "贸易自由化",
      "生效为亚太",
      "RCEP协定的"
    ],
    "correctAnswer": "RCEP协定的生效为亚太贸易自由化注入了强劲动力。",
    "pinyin": "RCEP xiédìng de shēngxiào wèi Yà-Tài màoyì zìyóuhuà zhùrù le qiángjìng dònglì.",
    "explanationVi": "Cụm cố định: 为...注入了强劲动力."
  },
  {
    "id": "so-hsk6-advanced-2",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Thẩm định M&A",
    "promptVi": "Khi M&A ở nước ngoài phải thẩm định tài chính công ty mục tiêu.",
    "scrambledTokens": [
      "尽职调查。",
      "进行严格的",
      "必须对目标公司",
      "海外并购时，"
    ],
    "correctAnswer": "海外并购时，必须对目标公司进行严格的尽职调查。",
    "pinyin": "Hǎiwài bìnggòu shí, bìxū duì mùbiāo gōngsī jìnxíng yángé de jìnzhí diàochá.",
    "explanationVi": "对 + Đối tượng + 进行 + Danh động từ 尽职调查."
  },
  {
    "id": "so-hsk6-advanced-3",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Thanh toán NDT",
    "promptVi": "Thanh toán NDT xuyên biên giới giúp tránh rủi ro tỷ giá USD.",
    "scrambledTokens": [
      "汇率风险。",
      "规避美元",
      "有助于外贸企业",
      "人民币跨境结算"
    ],
    "correctAnswer": "人民币跨境结算有助于外贸企业规避美元汇率风险。",
    "pinyin": "Rénmínbì kuàjìng jiésuàn yǒuzhùyú wàimào qǐyè guībì Měiyuán huìlǜ fēngxiǎn.",
    "explanationVi": "有助于 + Chủ thể + 规避 + Rủi ro."
  },
  {
    "id": "so-hsk6-advanced-4",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Chuyển đổi số",
    "promptVi": "Chuyển đổi số không phải mua phần mềm mà là tái định hình quy trình.",
    "scrambledTokens": [
      "全面重塑。",
      "而是对流程的",
      "绝非购买软件，",
      "数字化转型"
    ],
    "correctAnswer": "数字化转型绝非购买软件，而是对流程的全面重塑。",
    "pinyin": "Shùzìhuà zhuǎnxíng juéfēi gòumǎi ruǎnjiàn, ér shì duì liúchéng de quánmiàn chóngsù.",
    "explanationVi": "Cấu trúc khẳng định sắc bén 绝非...，而是..."
  },
  {
    "id": "so-hsk6-advanced-5",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Ngôn ngữ chuẩn",
    "promptVi": "Nếu bản Trung - Anh có bất đồng thì lấy bản tiếng Trung làm chuẩn.",
    "scrambledTokens": [
      "中文文本为准。",
      "双方同意以",
      "存在分歧，",
      "若中英文版本"
    ],
    "correctAnswer": "若中英文版本存在分歧，双方同意以中文文本为准。",
    "pinyin": "Ruò Zhōng-Yīngwén bǎnběn cúnzài fēnqí, shuāngfāng tóngyì yǐ Zhōngwén wénběn wéizhǔn.",
    "explanationVi": "Cấu trúc pháp lý cố định: 以...为准 (lấy... làm chuẩn)."
  },
  {
    "id": "so-hsk6-advanced-6",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Chống độc quyền",
    "promptVi": "Mọi hành vi độc quyền đều bị cơ quan quản lý xử phạt nghiêm.",
    "scrambledTokens": [
      "严厉处罚。",
      "监管机构的",
      "都将受到",
      "任何垄断行为"
    ],
    "correctAnswer": "任何垄断行为都将受到监管机构的严厉处罚。",
    "pinyin": "Rènhé lǒngduàn xíngwéi dōu jiāng shòudào jiānguǎn jīgòu de yánlì chǔfá.",
    "explanationVi": "任何...都将受到... (bị động trang trọng)."
  },
  {
    "id": "so-hsk6-advanced-7",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Thương hiệu",
    "promptVi": "Nâng cao định giá thương hiệu không thể tách rời đầu tư R&D.",
    "scrambledTokens": [
      "与品质管控。",
      "长期的研发投入",
      "提升离不开",
      "品牌溢价的"
    ],
    "correctAnswer": "品牌溢价的提升离不开长期的研发投入与品质管控。",
    "pinyin": "Pǐnpái yìjià de tíshēng líbùkāi chángqī de yánfā tóurù yǔ pǐnzhì guǎnkòng.",
    "explanationVi": "Động từ 离不开 (không thể tách rời khỏi...)."
  },
  {
    "id": "so-hsk6-advanced-8",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Đàm phán bế tắc",
    "promptVi": "Khi đàm phán bế tắc, nhượng bộ thích đáng giúp đạt thỏa thuận.",
    "scrambledTokens": [
      "协议达成。",
      "往往能推动",
      "适当妥协",
      "谈判陷入僵局时，"
    ],
    "correctAnswer": "谈判陷入僵局时，适当妥协往往能推动协议达成。",
    "pinyin": "Tánpàn xiànrù jiāngjú shí, shìdàng tuǒxié wǎngwǎng néng tuīdòng xiéyì dáchéng.",
    "explanationVi": "陷入僵局时 -> 推动协议达成."
  },
  {
    "id": "so-hsk6-advanced-9",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Tài chính chuỗi",
    "promptVi": "Tài chính chuỗi cung ứng làm dịu bài toán vốn cho SME.",
    "scrambledTokens": [
      "资金周转难题。",
      "中小微企业的",
      "有效缓解了",
      "供应链金融"
    ],
    "correctAnswer": "供应链金融有效缓解了中小微企业的资金周转难题。",
    "pinyin": "Gōngyìngliàn jīnróng yǒuxiào huǎnjiě le zhōng-xiǎo-wēi qǐyè de zījīn zhōuzhuǎn nántí.",
    "explanationVi": "有效缓解了 + Vấn đề khó khăn (难题)."
  },
  {
    "id": "so-hsk6-advanced-10",
    "level": "HSK6",
    "subDifficulty": "advanced",
    "grammarTopic": "Hợp tác cùng thắng",
    "promptVi": "Xây dựng quan hệ cùng có lợi phù hợp lợi ích hai nước.",
    "scrambledTokens": [
      "的根本利益。",
      "符合两国人民",
      "的经贸关系",
      "构建互利共赢"
    ],
    "correctAnswer": "构建互利共赢的经贸关系符合两国人民的根本利益。",
    "pinyin": "Gòujiàn hùlì gòngyíng de jīngmào guānxi fúhé liǎng guó rénmín de gēnběn lìyì.",
    "explanationVi": "构建... + 符合...的根本利益."
  },
  {
    "id": "so-hsk7-basic-1",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Trung hòa carbon",
    "promptVi": "Đạt đỉnh và trung hòa carbon là cuộc cải cách mang tính hệ thống.",
    "scrambledTokens": [
      "系统性变革。",
      "深刻的经济社会",
      "碳中和是一场",
      "实现碳达峰与"
    ],
    "correctAnswer": "实现碳达峰与碳中和是一场深刻的经济社会系统性变革。",
    "pinyin": "Shíxiàn tàndáfēng yǔ tànzhōnghé shì yì chǎng shēnkè de jīngjì shèhuì xìtǒngxìng biàngé.",
    "explanationVi": "Lượng từ 场 đi với 变革 (cuộc cải cách)."
  },
  {
    "id": "so-hsk7-basic-2",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Đô thị thông minh",
    "promptVi": "Xây dựng đô thị thông minh phải lấy con người làm gốc.",
    "scrambledTokens": [
      "形象工程。",
      "避免沦为",
      "应当以人为本，",
      "智慧城市建设"
    ],
    "correctAnswer": "智慧城市建设应当以人为本，避免沦为形象工程。",
    "pinyin": "Zhìhuì chéngshì jiànshè yīngdāng yǐrénwéiběn, bìmiǎn lúnwéi xíngxiàng gōngchéng.",
    "explanationVi": "Động từ 沦为 (rơi xuống thành, biến chất thành)."
  },
  {
    "id": "so-hsk7-basic-3",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Cải cách thể chế",
    "promptVi": "Chỉ có xóa bỏ rào cản thể chế mới khơi dậy sức sáng tạo.",
    "scrambledTokens": [
      "创新活力。",
      "方能充分激发",
      "体制障碍，",
      "唯有破除"
    ],
    "correctAnswer": "唯有破除体制障碍，方能充分激发创新活力。",
    "pinyin": "Wéiyǒu pòchú tǐzhì zhàng'ài, fāng néng chōngfèn jīfā chuàngxīn huólì.",
    "explanationVi": "Cấu trúc văn viết cao cấp 唯有...，方能..."
  },
  {
    "id": "so-hsk7-basic-4",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Công bố thông tin",
    "promptVi": "Công bố thông tin minh bạch là chìa khóa ổn định tâm lý.",
    "scrambledTokens": [
      "的关键。",
      "稳定社会情绪",
      "信息披露是",
      "透明及时的"
    ],
    "correctAnswer": "透明及时的信息披露是稳定社会情绪的关键。",
    "pinyin": "Tòumíng jíshí de xìnxī pīlù shì wěndìng shèhuì qíngxù de guānjiàn.",
    "explanationVi": "A 是 B 的关键."
  },
  {
    "id": "so-hsk7-basic-5",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Tự chủ công nghệ",
    "promptVi": "Nâng cao năng lực tự chủ công nghệ lõi là vô cùng cấp bách.",
    "scrambledTokens": [
      "迫在眉睫。",
      "自主可控能力",
      "核心技术的",
      "提升关键"
    ],
    "correctAnswer": "提升关键核心技术的自主可控能力迫在眉睫。",
    "pinyin": "Tíshēng guānjiàn héxīn jìshù de zìzhǔ kěkòng nénglì pòzàiméijié.",
    "explanationVi": "Thành ngữ 迫在眉睫 (cấp bách như lửa cháy lông mày) làm vị ngữ."
  },
  {
    "id": "so-hsk7-basic-6",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Giao lưu văn hóa",
    "promptVi": "Giao lưu văn hóa không phải xuất khẩu một chiều mà là cùng đẹp.",
    "scrambledTokens": [
      "美美与共。",
      "在对话中实现",
      "单向输出，而是",
      "文化交流绝非"
    ],
    "correctAnswer": "文化交流绝非单向输出，而是在对话中实现美美与共。",
    "pinyin": "Wénhuà jiāoliú juéfēi dānxiàng shūchū, ér shì zài duìhuà zhōng shíxiàn měiměiyǔgòng.",
    "explanationVi": "绝非...，而是..."
  },
  {
    "id": "so-hsk7-basic-7",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Kinh tế nền tảng",
    "promptVi": "Kinh tế nền tảng cần phòng ngừa phân biệt đối xử bằng thuật toán.",
    "scrambledTokens": [
      "算法歧视。",
      "也须防范",
      "提升效率的同时，",
      "平台经济在"
    ],
    "correctAnswer": "平台经济在提升效率的同时，也须防范算法歧视。",
    "pinyin": "Píngtái jīngjì zài tíshēng xiàolǜ de tóngshí, yě xū fángfàn suànfǎ qíshì.",
    "explanationVi": "在...的同时，也须..."
  },
  {
    "id": "so-hsk7-basic-8",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Nghiên cứu cơ bản",
    "promptVi": "Nghiên cứu cơ bản rất cần kinh phí ổn định và bao dung thất bại.",
    "scrambledTokens": [
      "的机制。",
      "与宽容失败",
      "长期经费支持",
      "基础研究亟需"
    ],
    "correctAnswer": "基础研究亟需长期经费支持与宽容失败的机制。",
    "pinyin": "Jīchǔ yánjiū jíxū chángqī jīngfèi zhīchí yǔ kuānróng shībài de jīzhì.",
    "explanationVi": "Động từ văn viết 亟需 (cấp thiết cần)."
  },
  {
    "id": "so-hsk7-basic-9",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Biến đổi khí hậu",
    "promptVi": "Thời tiết cực đoan gióng hồi chuông cảnh báo hợp tác giảm phát thải.",
    "scrambledTokens": [
      "的警钟。",
      "气候治理刻不容缓",
      "敲响了全球",
      "极端天气频发"
    ],
    "correctAnswer": "极端天气频发敲响了全球气候治理刻不容缓的警钟。",
    "pinyin": "Jíduān tiānqì pínfā qiāoxiǎng le quánqiú qìhòu zhìlǐ kèbùrónghuǎn de jǐngzhōng.",
    "explanationVi": "Cụm cố định: 敲响了...的警钟."
  },
  {
    "id": "so-hsk7-basic-10",
    "level": "HSK7",
    "subDifficulty": "basic",
    "grammarTopic": "Đô thị nhân văn",
    "promptVi": "Chỉnh trang đô thị nên giữ lại hơi thở phố phường để nhớ quê hương.",
    "scrambledTokens": [
      "乡愁。",
      "让居民记住",
      "保留市井烟火气，",
      "城市更新应"
    ],
    "correctAnswer": "城市更新应保留市井烟火气，让居民记住乡愁。",
    "pinyin": "Chéngshì gēngxīn yīng bǎoliú shìjǐng yānhuǒqì, ràng jūmín jìzhù xiāngchóu.",
    "explanationVi": "应 + 保留...，让 + Đối tượng + 记住..."
  },
  {
    "id": "so-hsk7-advanced-1",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Chống tách rời",
    "promptVi": "Làm bảo hộ đơn phương và đứt chuỗi sẽ hại chuỗi công nghiệp toàn cầu.",
    "scrambledTokens": [
      "产业链稳定。",
      "都将损害全球",
      "脱钩断链，最终",
      "搞单边保护与"
    ],
    "correctAnswer": "搞单边保护与脱钩断链，最终都将损害全球产业链稳定。",
    "pinyin": "Gǎo dānbiān bǎohù yǔ tuōgōu duànliàn, zuìzhōng dōu jiāng sǔnhài quánqiú chǎnyèliàn wěndìng.",
    "explanationVi": "最终都将损害... (cuối cùng đều sẽ làm tổn hại...)."
  },
  {
    "id": "so-hsk7-advanced-2",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Phương pháp NC",
    "promptVi": "Nghiên cứu này kết hợp định lượng và định tính phân tích thực chứng.",
    "scrambledTokens": [
      "进行实证分析。",
      "相结合的方法",
      "定量与定性",
      "本研究采用"
    ],
    "correctAnswer": "本研究采用定量与定性相结合的方法进行实证分析。",
    "pinyin": "Běn yánjiū cǎiyòng dìngliàng yǔ dìngxìng xiāng jiéhé de fāngfǎ jìnxíng shízhèng fēnxī.",
    "explanationVi": "采用...相结合的方法 + 进行..."
  },
  {
    "id": "so-hsk7-advanced-3",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Đạo đức AI",
    "promptVi": "Tính minh bạch của thuật toán là điều kiện tiên quyết triển khai AI.",
    "scrambledTokens": [
      "先决条件。",
      "成为技术落地的",
      "可解释性应当",
      "算法的透明性与"
    ],
    "correctAnswer": "算法的透明性与可解释性应当成为技术落地的先决条件。",
    "pinyin": "Suànfǎ de tòumíngxìng yǔ kějiěshìxìng yīngdāng chéngwéi jìshù luòdì de xiānjué tiáojiàn.",
    "explanationVi": "应当成为...的先决条件."
  },
  {
    "id": "so-hsk7-advanced-4",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Bỏ tư duy cũ",
    "promptVi": "Các nước nên bỏ tư duy trò chơi tổng bằng không để cùng phát triển.",
    "scrambledTokens": [
      "实现共同发展。",
      "在协同创新中",
      "零和博弈思维，",
      "各国应当摒弃"
    ],
    "correctAnswer": "各国应当摒弃零和博弈思维，在协同创新中实现共同发展。",
    "pinyin": "Gèguó yīngdāng bìngqì línghé bóyì sīwéi, zài xiétóng chuàngxīn zhōng shíxiàn gòngtóng fāzhǎn.",
    "explanationVi": "摒弃...，在...中实现..."
  },
  {
    "id": "so-hsk7-advanced-5",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Mở cửa thể chế",
    "promptVi": "Mở cửa trình độ cao đòi hỏi tiến bước lớn trong mở cửa thể chế.",
    "scrambledTokens": [
      "开放上迈出步伐。",
      "标准等制度型",
      "我们在规则与",
      "高水平开放要求"
    ],
    "correctAnswer": "高水平开放要求我们在规则与标准等制度型开放上迈出步伐。",
    "pinyin": "Gāo shuǐpíng kāifàng yāoqiú wǒmen zài guīzé yǔ biāozhǔn děng zhìdùxíng kāifàng shàng màichū bùfá.",
    "explanationVi": "在...上迈出步伐."
  },
  {
    "id": "so-hsk7-advanced-6",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Sản-Học-Nghiên",
    "promptVi": "Dung hợp doanh nghiệp - đại học - viện nghiên cứu đả thông chặng cuối.",
    "scrambledTokens": [
      "最后一公里。",
      "科技成果转化的",
      "有助于打通",
      "产学研深度融合"
    ],
    "correctAnswer": "产学研深度融合有助于打通科技成果转化的最后一公里。",
    "pinyin": "Chǎn-xué-yán shēndù rónghé yǒuzhùyú dǎtōng kējì chéngguǒ zhuǎnhuà de zuìhòu yì gōnglǐ.",
    "explanationVi": "有助于打通...的最后一公里."
  },
  {
    "id": "so-hsk7-advanced-7",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Không đánh đổi",
    "promptVi": "Nâng cấp công nghiệp tuyệt đối không đánh đổi môi trường sinh thái.",
    "scrambledTokens": [
      "代价。",
      "生态环境为",
      "绝不能以牺牲",
      "推进产业升级"
    ],
    "correctAnswer": "推进产业升级绝不能以牺牲生态环境为代价。",
    "pinyin": "Tuījìn chǎnyè shēngjí jué bùnéng yǐ xīshēng shēngtài huánjìng wéi dàijià.",
    "explanationVi": "Cấu trúc cố định: 绝不能以...为代价."
  },
  {
    "id": "so-hsk7-advanced-8",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Quy phạm học thuật",
    "promptVi": "Thiết lập cơ chế phạt không khoan nhượng mới chặn được gian lận học thuật.",
    "scrambledTokens": [
      "学术不端行为。",
      "才能有效遏制",
      "零容忍惩戒机制，",
      "只有建立"
    ],
    "correctAnswer": "只有建立零容忍惩戒机制，才能有效遏制学术不端行为。",
    "pinyin": "Zhǐyǒu jiànlì língróngrěn chéngjiè jīzhì, cái néng yǒuxiào èzhì xuéshù bùduān xíngwéi.",
    "explanationVi": "只有...，才能有效遏制..."
  },
  {
    "id": "so-hsk7-advanced-9",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Quy luật lịch sử",
    "promptVi": "Lịch sử chứng minh mở cửa thì thịnh, khép kín thì suy.",
    "scrambledTokens": [
      "的客观规律。",
      "则衰是文明演进",
      "开放则兴、封闭",
      "历史反复证明，"
    ],
    "correctAnswer": "历史反复证明，开放则兴、封闭则衰是文明演进的客观规律。",
    "pinyin": "Lìshǐ fǎnfù zhèngmíng, kāifàng zé xīng, fēngbì zé shuāi shì wénmíng yǎnjìn de kèguān guīlǜ.",
    "explanationVi": "开放则兴、封闭则衰 làm chủ ngữ mệnh đề phụ."
  },
  {
    "id": "so-hsk7-advanced-10",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "grammarTopic": "Quản trị toàn cầu",
    "promptVi": "Hãy chung tay đóng góp trí tuệ cho quản trị kinh tế toàn cầu công bằng.",
    "scrambledTokens": [
      "贡献智慧。",
      "全球治理体系",
      "为构建公正合理的",
      "让我们携手并肩，"
    ],
    "correctAnswer": "让我们携手并肩，为构建公正合理的全球治理体系贡献智慧。",
    "pinyin": "Ràng wǒmen xiéshǒu bìngjiān, wèi gòujiàn gōngzhèng hélǐ de quánqiú zhìlǐ tǐxì gòngxiàn zhìhuì.",
    "explanationVi": "为构建...贡献智慧."
  },
  {
    "id": "so-hsk8-basic-1",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Thiên nhân hợp nhất",
    "promptVi": "Văn hóa truyền thống chủ trương thuận theo tự nhiên chứ không đòi hỏi mù quáng.",
    "scrambledTokens": [
      "而非一味索取。",
      "顺应自然规律",
      "主张天人合一，",
      "中国传统文化"
    ],
    "correctAnswer": "中国传统文化主张天人合一，顺应自然规律而非一味索取。",
    "pinyin": "Zhōngguó chuántǒng wénhuà zhǔzhāng tiānrénhéyī, shùnyìng zìrán guīlǜ ér fēi yíwèi suǒqǔ.",
    "explanationVi": "Cấu trúc đối lập trang trọng ...而非..."
  },
  {
    "id": "so-hsk8-basic-2",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Hòa nhi bất đồng",
    "promptVi": "Quân tử hòa hợp nhưng giữ độc lập và bao dung khác biệt.",
    "scrambledTokens": [
      "他人的差异。",
      "同时能够包容",
      "保持独立见解的",
      "君子和而不同，"
    ],
    "correctAnswer": "君子和而不同，保持独立见解的同时能够包容他人的差异。",
    "pinyin": "Jūnzǐ hé ér bù tóng, bǎochí dúlì jiànjiě de tóngshí nénggòu bāoróng tārén de chāyì.",
    "explanationVi": "Mệnh đề giải nghĩa theo sau danh ngôn cổ."
  },
  {
    "id": "so-hsk8-basic-3",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Nghệ thuật lưu bạch",
    "promptVi": "Tranh sơn thủy coi trọng khoảng trắng tạo không gian liên tưởng vô tận.",
    "scrambledTokens": [
      "遐想空间。",
      "赋予观者无限",
      "讲究留白艺术，",
      "中国山水画"
    ],
    "correctAnswer": "中国山水画讲究留白艺术，赋予观者无限遐想空间。",
    "pinyin": "Zhōngguó shānshuǐhuà jiǎngjiu liúbái yìshù, fùyǔ guānzhě wúxiàn xiáxiǎng kōngjiān.",
    "explanationVi": "Động từ 赋予 (ban tặng, trao cho) + Đối tượng + Danh từ."
  },
  {
    "id": "so-hsk8-basic-4",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Gương lịch sử",
    "promptVi": "Hưng suy lịch sử như gương sáng nhắc hậu thế cư an tư nguy.",
    "scrambledTokens": [
      "戒骄戒躁。",
      "提醒后人居安思危、",
      "犹如一面明镜，",
      "历史的兴衰"
    ],
    "correctAnswer": "历史的兴衰犹如一面明镜，提醒后人居安思危、戒骄戒躁。",
    "pinyin": "Lìshǐ de xīngshuāi yóurú yí miàn míngjìng, tíxǐng hòurén jū'ānsīwēi, jièjiāojièzào.",
    "explanationVi": "Phép ví von văn viết 犹如..."
  },
  {
    "id": "so-hsk8-basic-5",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Dịch thuật",
    "promptVi": "Dịch giả giỏi không chỉ giỏi ngữ pháp mà còn am hiểu văn hóa.",
    "scrambledTokens": [
      "的文化语境。",
      "更需深谙背后",
      "不仅精通语法，",
      "优秀的译者"
    ],
    "correctAnswer": "优秀的译者不仅精通语法，更需深谙背后的文化语境。",
    "pinyin": "Yōuxiù de yìzhě bùjǐn jīngtōng yǔfǎ, gèng xū shēn'ān bèihòu de wénhuà yǔjìng.",
    "explanationVi": "不仅...，更需深谙..."
  },
  {
    "id": "so-hsk8-basic-6",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Tinh thần nghệ nhân",
    "promptVi": "Cốt lõi tinh thần nghệ nhân là cầu toàn và kính trọng từng chi tiết.",
    "scrambledTokens": [
      "敬畏之心。",
      "对细微之处怀有",
      "核心在于精益求精，",
      "工匠精神的"
    ],
    "correctAnswer": "工匠精神的核心在于精益求精，对细微之处怀有敬畏之心。",
    "pinyin": "Gōngjiàng jīngshén de héxīn zàiyú jīngyìqiújīng, duì xìwēi zhī chù huáiyǒu jìngwèi zhī xīn.",
    "explanationVi": "核心在于...，对...怀有敬畏之心."
  },
  {
    "id": "so-hsk8-basic-7",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Đọc sách",
    "promptVi": "Đọc sách quý ở quán thông, chỉ học vẹt thì chỉ là bàn trên giấy.",
    "scrambledTokens": [
      "纸上谈兵。",
      "终究不过是",
      "若只死记硬背，",
      "读书贵在融会贯通，"
    ],
    "correctAnswer": "读书贵在融会贯通，若只死记硬背，终究不过是纸上谈兵。",
    "pinyin": "Dúshū guì zài rónghuìguàntōng, ruò zhǐ sǐjìyìngbèi, zhōngjiū búguò shì zhǐshàngtánbīng.",
    "explanationVi": "贵在...，若...终究不过是..."
  },
  {
    "id": "so-hsk8-basic-8",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Dư luận",
    "promptVi": "Giữ bản lĩnh xem xét độc lập mới không bị định kiến cuốn theo.",
    "scrambledTokens": [
      "所裹挟。",
      "方能不被偏见",
      "审视的定力，",
      "唯有保持独立"
    ],
    "correctAnswer": "唯有保持独立审视的定力，方能不被偏见所裹挟。",
    "pinyin": "Wéiyǒu bǎochí dúlì shěnshì de dìnglì, fāng néng bú bèi piānjiàn suǒ guǒxié.",
    "explanationVi": "Cấu trúc bị động văn viết 不被...所..."
  },
  {
    "id": "so-hsk8-basic-9",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Tự tin văn hóa",
    "promptVi": "Tự tin văn hóa không bài ngoại mà là biển lớn dung nạp trăm sông.",
    "scrambledTokens": [
      "海纳百川。",
      "在理解传统基础上",
      "盲目排外，而是",
      "文化自信并非"
    ],
    "correctAnswer": "文化自信并非盲目排外，而是在理解传统基础上海纳百川。",
    "pinyin": "Wénhuà zìxìn bìngfēi mángmù páiwài, ér shì zài lǐjiě chuántǒng jīchǔ shàng hǎinàbǎichuān.",
    "explanationVi": "并非...，而是..."
  },
  {
    "id": "so-hsk8-basic-10",
    "level": "HSK8",
    "subDifficulty": "basic",
    "grammarTopic": "Thương trường",
    "promptVi": "Biết người biết ta mới trăm trận không nguy trong đấu trí thương trường.",
    "scrambledTokens": [
      "透彻的研判。",
      "博弈同样需要",
      "百战不殆，商业",
      "知己知彼方能"
    ],
    "correctAnswer": "知己知彼方能百战不殆，商业博弈同样需要透彻的研判。",
    "pinyin": "Zhījǐzhībǐ fāng néng bǎizhànbúdài, shāngyè bóyì tóngyàng xūyào tòuchè de yánpàn.",
    "explanationVi": "Thành ngữ mở đầu + Liên hệ thực tiễn 同样需要..."
  },
  {
    "id": "so-hsk8-advanced-1",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Chuỗi giá trị",
    "promptVi": "Vươn lên hai đầu R&D và thương hiệu mới thoát bẫy giá trị thấp.",
    "scrambledTokens": [
      "低端锁定。",
      "方能摆脱",
      "与品牌两端攀升，",
      "企业唯有向研发"
    ],
    "correctAnswer": "企业唯有向研发与品牌两端攀升，方能摆脱低端锁定。",
    "pinyin": "Qǐyè wéiyǒu xiàng yánfā yǔ pǐnpái liǎng duān pānshēng, fāng néng bǎituō dīduān suǒdìng.",
    "explanationVi": "唯有向...攀升，方能摆脱..."
  },
  {
    "id": "so-hsk8-advanced-2",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Thước đo ESG",
    "promptVi": "Triết lý ESG đã thành thước đo cốt lõi đánh giá đầu tư dài hạn.",
    "scrambledTokens": [
      "核心标尺。",
      "长期投资价值的",
      "衡量跨国企业",
      "ESG理念已成为"
    ],
    "correctAnswer": "ESG理念已成为衡量跨国企业长期投资价值的核心标尺。",
    "pinyin": "ESG lǐniàn yǐ chéngwéi héngliáng kuàguó qǐyè chángqī tóuzī jiàzhí de héxīn biāochǐ.",
    "explanationVi": "已成为衡量...的核心标尺."
  },
  {
    "id": "so-hsk8-advanced-3",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Chống độc quyền",
    "promptVi": "Chống độc quyền cần lập khung quy chế có tầm nhìn xa hơn.",
    "scrambledTokens": [
      "规制框架。",
      "数字平台",
      "建立更具前瞻性的",
      "反垄断监管亟需"
    ],
    "correctAnswer": "反垄断监管亟需建立更具前瞻性的数字平台规制框架。",
    "pinyin": "Fǎnlǒngduàn jiānguǎn jíxū jiànlì gèng jù qiánzhānxìng de shùzì píngtái guīzhì kuàngjià.",
    "explanationVi": "亟需建立更具...的框架."
  },
  {
    "id": "so-hsk8-advanced-4",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Thận trọng vĩ mô",
    "promptVi": "Khung hai trụ cột phòng ngừa hiệu quả sự lây lan rủi ro hệ thống.",
    "scrambledTokens": [
      "的积累与传染。",
      "系统性金融风险",
      "有效防范了",
      "双支柱调控框架"
    ],
    "correctAnswer": "双支柱调控框架有效防范了系统性金融风险的积累与传染。",
    "pinyin": "Shuāngzhīzhù tiáokòng kuàngjià yǒuxiào fángfàn le xìtǒngxìng jīnróng fēngxiǎn de jīlěi yǔ chuánrǎn.",
    "explanationVi": "有效防范了...的积累与传染."
  },
  {
    "id": "so-hsk8-advanced-5",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Thuế carbon CBAM",
    "promptVi": "Cơ chế CBAM buộc doanh nghiệp xuất khẩu đẩy nhanh chuyển đổi xanh.",
    "scrambledTokens": [
      "转型步伐。",
      "加快绿色低碳",
      "的实施倒逼企业",
      "碳边境调节机制"
    ],
    "correctAnswer": "碳边境调节机制的实施倒逼企业加快绿色低碳转型步伐。",
    "pinyin": "Tàn biānjìng tiáojié jīzhì de shíshī dàobī qǐyè jiākuài lǜsè dītàn zhuǎnxíng bùfá.",
    "explanationVi": "Động từ kinh tế 倒逼 (tạo áp lực ngược buộc phải...)."
  },
  {
    "id": "so-hsk8-advanced-6",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Cổ phần quản lý",
    "promptVi": "Khuyến khích cổ phần gắn lợi ích quản lý với phát triển dài hạn.",
    "scrambledTokens": [
      "深度绑定。",
      "与公司长远发展",
      "旨在将管理层收益",
      "股权激励机制"
    ],
    "correctAnswer": "股权激励机制旨在将管理层收益与公司长远发展深度绑定。",
    "pinyin": "Gǔquán jīlì jīzhì zhǐzài jiāng guǎnlǐcéng shōuyì yǔ gōngsī chángyuǎn fāzhǎn shēndù bǎngdìng.",
    "explanationVi": "旨在将 A 与 B 深度绑定."
  },
  {
    "id": "so-hsk8-advanced-7",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Danh mục hạn chế",
    "promptVi": "Danh mục hạn chế nới lỏng đáng kể ngưỡng tiếp cận thị trường FDI.",
    "scrambledTokens": [
      "市场准入门槛。",
      "外商投资的",
      "大幅放宽了",
      "负面清单模式"
    ],
    "correctAnswer": "负面清单模式大幅放宽了外商投资的市场准入门槛。",
    "pinyin": "Fùmiàn qīngdān móshì dàfú fàngkuān le wàishāng tóuzī de shìchǎng zhǔnrù ménkǎn.",
    "explanationVi": "大幅放宽了...的门槛."
  },
  {
    "id": "so-hsk8-advanced-8",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Khủng hoảng PR",
    "promptVi": "Phản ứng nhanh và thẳng thắn nhận trách nhiệm là nguyên tắc vàng PR.",
    "scrambledTokens": [
      "坦诚担责。",
      "快速响应与",
      "黄金法则是",
      "危机公关的"
    ],
    "correctAnswer": "危机公关的黄金法则是快速响应与坦诚担责。",
    "pinyin": "Wēijī gōngguān de huángjīn fǎzé shì kuàisù xiǎngyìng yǔ tǎnchéng dānzé.",
    "explanationVi": "黄金法则是..."
  },
  {
    "id": "so-hsk8-advanced-9",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Blockchain",
    "promptVi": "Blockchain giúp chuỗi lạnh thực phẩm minh bạch từ nguồn đến bàn ăn.",
    "scrambledTokens": [
      "透明化监管。",
      "到餐桌的全流程",
      "实现了从原产地",
      "区块链溯源技术"
    ],
    "correctAnswer": "区块链溯源技术实现了从原产地到餐桌的全流程透明化监管。",
    "pinyin": "Qūkuàiliàn sùyuán jìshù shíxiàn le cóng yuánchǎndì dào cānzhuō de quán liúchéng tòumínghuà jiānguǎn.",
    "explanationVi": "实现了从...到...的全流程..."
  },
  {
    "id": "so-hsk8-advanced-10",
    "level": "HSK8",
    "subDifficulty": "advanced",
    "grammarTopic": "Tái cơ cấu",
    "promptVi": "Tái cơ cấu phá sản giúp doanh nghiệp có giá trị hồi sinh.",
    "scrambledTokens": [
      "优化资源配置。",
      "企业再生，也有助于",
      "不仅能帮助困境",
      "破产重整制度"
    ],
    "correctAnswer": "破产重整制度不仅能帮助困境企业再生，也有助于优化资源配置。",
    "pinyin": "Pòchǎn chóngzhěng zhìdù bùjǐn néng bāngzhù kùnjìng qǐyè zàishēng, yě yǒuzhùyú yōuhuà zīyuán pèizhì.",
    "explanationVi": "不仅能...，也有助于..."
  },
  {
    "id": "so-hsk9-basic-1",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Cổ văn Lý Bạch",
    "promptVi": "Trời đất là quán trọ vạn vật, thời gian là khách qua đường trăm đời.",
    "scrambledTokens": [
      "百代之过客也。",
      "光阴者，",
      "万物之逆旅也；",
      "夫天地者，"
    ],
    "correctAnswer": "夫天地者，万物之逆旅也；光阴者，百代之过客也。",
    "pinyin": "Fú tiāndì zhě, wànwù zhī nìlǚ yě; guāngyīn zhě, bǎidài zhī guòkè yě.",
    "explanationVi": "Cấu trúc phán đoán cổ văn ...者，...也 đối xứng."
  },
  {
    "id": "so-hsk9-basic-2",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Tầm nhìn chiến lược",
    "promptVi": "Không mưu tính muôn đời không đủ mưu một thời; không mưu toàn cục không đủ mưu một vùng.",
    "scrambledTokens": [
      "不足谋一域。",
      "不谋全局者，",
      "不足谋一时；",
      "不谋万世者，"
    ],
    "correctAnswer": "不谋万世者，不足谋一时；不谋全局者，不足谋一域。",
    "pinyin": "Bù móu wànshì zhě, bùzú móu yìshí; bù móu quánjú zhě, bùzú móu yíyù.",
    "explanationVi": "Đối ngẫu cổ văn 不谋...者，不足谋..."
  },
  {
    "id": "so-hsk9-basic-3",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Trị học Trung Dung",
    "promptVi": "Học rộng, hỏi kỹ, nghĩ cẩn trọng, phân biệt rõ, thực hành bền bỉ.",
    "scrambledTokens": [
      "治学之要义。",
      "笃行之，此乃",
      "慎思之，明辨之，",
      "博学之，审问之，"
    ],
    "correctAnswer": "博学之，审问之，慎思之，明辨之，笃行之，此乃治学之要义。",
    "pinyin": "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī, cǐ nǎi zhìxué zhī yàoyì.",
    "explanationVi": "Chuỗi 5 bước trị học kinh điển trong sách Trung Dung."
  },
  {
    "id": "so-hsk9-basic-4",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Chiến Quốc Sách",
    "promptVi": "Núi Thái không chê đất bụi nên lớn, sông biển không kén dòng nhỏ nên sâu.",
    "scrambledTokens": [
      "故能就其深。",
      "河海不择细流，",
      "故能成其大；",
      "泰山不让土壤，"
    ],
    "correctAnswer": "泰山不让土壤，故能成其大；河海不择细流，故能就其深。",
    "pinyin": "Tàishān bú ràng tǔrǎng, gù néng chéng qí dà; héhǎi bù zé xìliú, gù néng jiù qí shēn.",
    "explanationVi": "Cổ văn nhân quả ...，故能..."
  },
  {
    "id": "so-hsk9-basic-5",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Hoài Nam Tử",
    "promptVi": "Trị nước có phép thường nhưng lợi dân là gốc.",
    "scrambledTokens": [
      "而令行为上。",
      "政教有经，",
      "而利民为本；",
      "治国有常，"
    ],
    "correctAnswer": "治国有常，而利民为本；政教有经，而令行为上。",
    "pinyin": "Zhìguó yǒu cháng, ér lìmín wéi běn; zhèngjiào yǒu jīng, ér lìngxíng wéi shàng.",
    "explanationVi": "Cấu trúc chuyển ý cổ văn ...有常，而...为本."
  },
  {
    "id": "so-hsk9-basic-6",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Thông diễn học",
    "promptVi": "Mỗi lần dịch lại kinh điển là một cuộc đối thoại tư tưởng vượt không thời gian.",
    "scrambledTokens": [
      "思想对话。",
      "一场跨越时空的",
      "每一次重译都是",
      "经典文本的"
    ],
    "correctAnswer": "经典文本的每一次重译都是一场跨越时空的思想对话。",
    "pinyin": "Jīngdiǎn wénběn de měi yí cì chóngyì dōu shì yì chǎng kuàyuè shíkōng de sīxiǎng duìhuà.",
    "explanationVi": "每一次...都是一场..."
  },
  {
    "id": "so-hsk9-basic-7",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Phê bình học thuật",
    "promptVi": "Phê bình học thuật vừa không xu nịnh cũng không bới lông tìm vết.",
    "scrambledTokens": [
      "亦不吹毛求疵。",
      "既不阿谀奉承，",
      "秉持公允立场，",
      "学术批评应当"
    ],
    "correctAnswer": "学术批评应当秉持公允立场，既不阿谀奉承，亦不吹毛求疵。",
    "pinyin": "Xuéshù pīpíng yīngdāng bǐngchí gōngyǔn lìchǎng, jì bù ēyúfèngchéng, yì bù chuīmáoyícī.",
    "explanationVi": "Cấu trúc văn viết 既不...，亦不..."
  },
  {
    "id": "so-hsk9-basic-8",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Bền bỉ",
    "promptVi": "Dây cưa gỗ đứt, nước chảy đá mòn, làm việc lớn cần nghị lực bền bỉ.",
    "scrambledTokens": [
      "锲而不舍之毅力。",
      "大事者皆需有",
      "水滴石穿，凡成",
      "绳锯木断，"
    ],
    "correctAnswer": "绳锯木断，水滴石穿，凡成大事者皆需有锲而不舍之毅力。",
    "pinyin": "Shéngjùmùduàn, shuǐdīshíchuān, fán chéng dàshì zhě jiē xū yǒu qiè'érbùshě zhī yìlì.",
    "explanationVi": "凡...者皆需有..."
  },
  {
    "id": "so-hsk9-basic-9",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Lương pháp thiện trị",
    "promptVi": "Luật tốt và quản trị khéo là nền tảng trị an lâu dài của quốc gia.",
    "scrambledTokens": [
      "基石。",
      "之根本",
      "乃国家长治久安",
      "良法善治"
    ],
    "correctAnswer": "良法善治乃国家长治久安之根本基石。",
    "pinyin": "Liángfǎ shànzhì nǎi guójiā chángzhìjiǔ'ān zhī gēnběn jīshí.",
    "explanationVi": "Động từ phán đoán cổ điển 乃 (chính là) + 之."
  },
  {
    "id": "so-hsk9-basic-10",
    "level": "HSK9",
    "subDifficulty": "basic",
    "grammarTopic": "Cách mạng mô thức",
    "promptVi": "Mỗi cuộc cách mạng mô thức đều bắt đầu từ việc chất vấn giáo điều cũ.",
    "scrambledTokens": [
      "与超越。",
      "教条的勇敢质疑",
      "皆始于对既有",
      "每一次范式革命"
    ],
    "correctAnswer": "每一次范式革命皆始于对既有教条的勇敢质疑与超越。",
    "pinyin": "Měi yí cì fànshì gémìng jiē shǐyú duì jìyǒu jiàotiáo de yǒnggǎn zhìyí yǔ chāoyuè.",
    "explanationVi": "皆始于 (đều bắt nguồn từ) + 对...的质疑."
  },
  {
    "id": "so-hsk9-advanced-1",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Chấn hưng đa phương",
    "promptVi": "Chấn hưng thể chế thương mại đa phương là nhận thức chung cấp bách.",
    "scrambledTokens": [
      "成为紧迫共识。",
      "重振多边贸易体制",
      "日趋复杂的背景下，",
      "在地缘博弈"
    ],
    "correctAnswer": "在地缘博弈日趋复杂的背景下，重振多边贸易体制成为紧迫共识。",
    "pinyin": "Zài dìyuán bóyì rìqū fùzá de bèijǐng xià, chóngzhèn duōbiān màoyì tǐzhì chéngwéi jǐnpò gòngshí.",
    "explanationVi": "在...的背景下，...成为紧迫共识."
  },
  {
    "id": "so-hsk9-advanced-2",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Khủng hoảng nợ công",
    "promptVi": "Hiệu ứng lan tỏa của nợ công đang bào mòn ổn định tài chính.",
    "scrambledTokens": [
      "金融稳定。",
      "侵蚀新兴市场的",
      "外溢效应正在",
      "主权债务危机的"
    ],
    "correctAnswer": "主权债务危机的外溢效应正在侵蚀新兴市场的金融稳定。",
    "pinyin": "Zhǔquán zhàiwù wēijī de wàiyì xiàoyìng zhèngzài qīnshí xīnxīng shìchǎng de jīnróng wěndìng.",
    "explanationVi": "Cụm thuật ngữ vĩ mô 外溢效应 + 侵蚀."
  },
  {
    "id": "so-hsk9-advanced-3",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Quản trị khí hậu",
    "promptVi": "Quản trị khí hậu toàn cầu phải kiên trì trách nhiệm chung nhưng có phân biệt.",
    "scrambledTokens": [
      "的责任原则。",
      "坚持共同但有区别",
      "治理架构必须",
      "构建全球气候"
    ],
    "correctAnswer": "构建全球气候治理架构必须坚持共同但有区别的责任原则。",
    "pinyin": "Gòujiàn quánqiú qìhòu zhìlǐ jiàgòu bìxū jiānchí gòngtóng dàn yǒu qūbié de zérèn yuánzé.",
    "explanationVi": "构建...必须坚持...原则."
  },
  {
    "id": "so-hsk9-advanced-4",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Kinh tế thực",
    "promptVi": "Thoát thực hướng hư rất dễ gây bong bóng tài sản và suy yếu kinh tế thực.",
    "scrambledTokens": [
      "的抗风险韧性。",
      "并削弱实体经济",
      "极易诱发资产泡沫",
      "脱实向虚倾向"
    ],
    "correctAnswer": "脱实向虚倾向极易诱发资产泡沫并削弱实体经济的抗风险韧性。",
    "pinyin": "Tuōshíxiàngxū qīngxiàng jíyì yòufā zīchǎn pàomò bìng xuēruò shítǐ jīngjì de kàngfēngxiǎn rènxìng.",
    "explanationVi": "极易诱发...并削弱..."
  },
  {
    "id": "so-hsk9-advanced-5",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Tiền tệ quốc tế",
    "promptVi": "Đa dạng hóa hệ thống tiền tệ quốc tế giúp làm dịu nghịch lý Triffin.",
    "scrambledTokens": [
      "特里芬难题。",
      "有助于缓解",
      "多元化演进",
      "国际货币体系的"
    ],
    "correctAnswer": "国际货币体系的多元化演进有助于缓解特里芬难题。",
    "pinyin": "Guójì huòbì tǐxì de duōyuánhuà yǎnjìn yǒuzhùyú huǎnjiě Tèlǐfēn nántí.",
    "explanationVi": "有助于缓解 + 难题."
  },
  {
    "id": "so-hsk9-advanced-6",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Tiêu chuẩn kỹ thuật",
    "promptVi": "Tranh giành quyền lập tiêu chuẩn bản chất là cạnh tranh quyền phát ngôn.",
    "scrambledTokens": [
      "的竞争。",
      "产业话语权",
      "的争夺本质上是",
      "技术标准制定权"
    ],
    "correctAnswer": "技术标准制定权的争夺本质上是产业话语权的竞争。",
    "pinyin": "Jìshù biāozhǔn zhìdìngquán de zhēngduó běnzhì shàng shì chǎnyè huàyǔquán de jìngzhēng.",
    "explanationVi": "A 的争夺本质上是 B 的竞争."
  },
  {
    "id": "so-hsk9-advanced-7",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Sức sản xuất mới",
    "promptVi": "Sâu sắc cải cách bên cung giúp đẩy nhanh bồi dưỡng sức sản xuất chất lượng mới.",
    "scrambledTokens": [
      "培育新质生产力。",
      "中国经济正加快",
      "结构性改革，",
      "通过深化供给侧"
    ],
    "correctAnswer": "通过深化供给侧结构性改革，中国经济正加快培育新质生产力。",
    "pinyin": "Tōngguò shēnhuà gōngjǐcè jiégòuxìng gǎigé, Zhōngguó jīngjì zhèng jiākuài péiyù xīnzhì shēngchǎnlì.",
    "explanationVi": "通过深化...，正加快培育..."
  },
  {
    "id": "so-hsk9-advanced-8",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Đồng tâm hiệp lực",
    "promptVi": "Đẩy khó khăn cho láng giềng sẽ hại mình, chỉ có đồng tâm mới vượt gian nan.",
    "scrambledTokens": [
      "共克时艰。",
      "同舟共济方能",
      "反噬自身，唯有",
      "以邻为壑终将"
    ],
    "correctAnswer": "以邻为壑终将反噬自身，唯有同舟共济方能共克时艰。",
    "pinyin": "Yǐlínwéihè zhōngjiāng fǎnshì zìshēn, wéiyǒu tóngzhōugòngjì fāng néng gòngkèshíjiān.",
    "explanationVi": "Đối lập sắc sảo giữa 以邻为壑 và 同舟共济."
  },
  {
    "id": "so-hsk9-advanced-9",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Kinh tế thể chế",
    "promptVi": "Độ rõ ràng của quyền tài sản quyết định ý muốn đầu tư dài hạn.",
    "scrambledTokens": [
      "意愿的根本变量。",
      "是决定长期投资",
      "与契约执行力",
      "产权界定的清晰度"
    ],
    "correctAnswer": "产权界定的清晰度与契约执行力是决定长期投资意愿的根本变量。",
    "pinyin": "Chǎnquán jièdìng de qīngxīdù yǔ qìyuē zhíxínglì shì juédìng chángqī tóuzī yìyuàn de gēnběn biànliàng.",
    "explanationVi": "A 与 B 是决定...的根本变量."
  },
  {
    "id": "so-hsk9-advanced-10",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "grammarTopic": "Cộng đồng chung",
    "promptVi": "Lấy Cộng đồng chung vận mệnh làm dẫn dắt mới vượt qua Bẫy Thucydides.",
    "scrambledTokens": [
      "陷阱开创未来。",
      "方能跨越修昔底德",
      "共同体为引领，",
      "唯有以人类命运"
    ],
    "correctAnswer": "唯有以人类命运共同体为引领，方能跨越修昔底德陷阱开创未来。",
    "pinyin": "Wéiyǒu yǐ rénlèi mìngyùn gòngtóngtǐ wéi yǐnlǐng, fāng néng kuàyuè Xiūxīdǐdé xiànjǐng kāichuàng wèilái.",
    "explanationVi": "唯有以...为引领，方能跨越..."
  },
  ...SENTENCE_ORDER_EXERCISES_EXTRA
];

export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    "id": "wp-hsk1-basic",
    "level": "HSK1",
    "subDifficulty": "basic",
    "title": "Tự giới thiệu bản thân và gia đình",
    "examType": "Đoạn văn ngắn HSK 1",
    "scenarioVi": "Viết một đoạn văn ngắn (40–60 chữ Hán) giới thiệu tên, quốc tịch, tuổi tác, gia đình và sở thích học tiếng Trung của bạn.",
    "minChars": 30,
    "targetChars": 55,
    "keywords": [
      "越南人",
      "学习",
      "汉语",
      "喜欢"
    ],
    "checklistVi": [
      "Giới thiệu tên và quốc tịch Việt Nam",
      "Nêu số thành viên gia đình",
      "Dùng đúng câu vị ngữ tính từ (không thêm 是 trước 很)",
      "Kết thúc câu bằng dấu chấm tròn 。"
    ],
    "sampleZh": "大家好！我叫阮明，是越南人，今年二十岁。我家有四口人：爸爸、妈妈、妹妹和我。我现在学习汉语，我很喜欢看中国电影和喝奶茶。很高兴认识大家！",
    "samplePinyin": "Dàjiā hǎo! Wǒ jiào Ruǎn Míng, shì Yuènán rén, jīnnián èrshí suì. Wǒ jiā yǒu sì kǒu rén: bàba, māma, mèimei hé wǒ. Wǒ xiànzài xuéxí Hànyǔ, wǒ hěn xǐhuan kàn Zhōngguó diànyǐng hé hē nǎichá. Hěn gāoxìng rènshi dàjiā!",
    "sampleVi": "Chào mọi người! Tôi tên là Nguyễn Minh, là người Việt Nam, năm nay 20 tuổi. Nhà tôi có 4 người: bố, mẹ, em gái và tôi. Hiện tôi đang học tiếng Hán, tôi rất thích xem phim Trung Quốc và uống trà sữa. Rất vui được làm quen với mọi người!"
  },
  {
    "id": "wp-hsk1-advanced",
    "level": "HSK1",
    "subDifficulty": "advanced",
    "title": "Tin nhắn WeChat hẹn bạn cuối tuần đi ăn",
    "examType": "Tin nhắn giao tiếp HSK 1",
    "scenarioVi": "Viết tin nhắn WeChat rủ một người bạn Trung Quốc chiều thứ Bảy đi ăn mì bò và uống trà sữa, nêu rõ thời gian và địa điểm gặp.",
    "minChars": 35,
    "targetChars": 65,
    "keywords": [
      "星期六",
      "一起",
      "饭店",
      "奶茶"
    ],
    "checklistVi": [
      "Nêu rõ thời gian (thứ Bảy, mấy giờ)",
      "Đề xuất món ăn/đồ uống cụ thể",
      "Nêu rõ địa điểm hẹn gặp",
      "Dùng câu hỏi hoặc lời mời lịch sự"
    ],
    "sampleZh": "小王你好！明天是星期六，你有时间吗？下午五点半，我想请你一起去学校前面的中国饭店吃牛肉面，再去喝两杯少糖冰奶茶。我们在饭店门口见，好吗？",
    "samplePinyin": "Xiǎo Wáng nǐ hǎo! Míngtiān shì xīngqīliù, nǐ yǒu shíjiān ma? Xiàwǔ wǔ diǎn bàn, wǒ xiǎng qǐng nǐ yìqǐ qù xuéxiào qiánmiàn de Zhōngguó fàndiàn chī niúròumiàn, zài qù hē liǎng bēi shǎo táng bīng nǎichá. Wǒmen zài fàndiàn ménkǒu jiàn, hǎo ma?",
    "sampleVi": "Chào Tiểu Vương! Ngày mai là thứ Bảy, bạn có thời gian không? 5 giờ 30 chiều, mình muốn mời bạn cùng đi nhà hàng Trung Quốc trước cổng trường ăn mì bò, rồi đi uống hai cốc trà sữa đá ít đường. Chúng mình gặp nhau ở cửa nhà hàng nhé?"
  },
  {
    "id": "wp-hsk2-basic",
    "level": "HSK2",
    "subDifficulty": "basic",
    "title": "Kể về một chuyến du lịch đáng nhớ",
    "examType": "Đoạn văn tường thuật HSK 2",
    "scenarioVi": "Viết đoạn văn (60–90 chữ Hán) kể về một lần bạn đi du lịch (đi cùng ai, đi bằng phương tiện gì, thời tiết và món ăn ra sao).",
    "minChars": 50,
    "targetChars": 85,
    "keywords": [
      "旅游",
      "比",
      "坐",
      "非常"
    ],
    "checklistVi": [
      "Dùng trợ từ quá khứ 了 hoặc trải nghiệm 过",
      "Có ít nhất một câu so sánh dùng 比",
      "Nêu phương tiện di chuyển trước điểm đến",
      "Sử dụng dấu chấm câu tiếng Trung chuẩn"
    ],
    "sampleZh": "去年秋天，我和好朋友一起坐飞机去北京旅游了五天。北京的秋天比河内凉快多了，天气非常舒服。我们去了长城和故宫，还吃了很多好吃的北京烤鸭。那次旅行虽然有点累，但是我们都非常高兴，明年我还想再去一次！",
    "samplePinyin": "Qùnián qiūtiān, wǒ hé hǎo péngyou yìqǐ zuò fēijī qù Běijīng lǚyóu le wǔ tiān. Běijīng de qiūtiān bǐ Hénèi liángkuai duō le, tiānqì fēicháng shūfu. Wǒmen qù le Chángchéng hé Gùgōng, hái chī le hěn duō hǎochī de Běijīng kǎoyā. Nà cì lǚxíng suīrán yǒudiǎn lèi, dànshì wǒmen dōu fēicháng gāoxìng, míngnián wǒ hái xiǎng zài qù yí cì!",
    "sampleVi": "Mùa thu năm ngoái, tôi cùng bạn thân đi máy bay tới Bắc Kinh du lịch 5 ngày. Mùa thu Bắc Kinh mát hơn Hà Nội nhiều, thời tiết vô cùng dễ chịu. Chúng tôi đã đi Vạn Lý Trường Thành và Cố Cung, còn ăn rất nhiều vịt quay Bắc Kinh ngon. Chuyến đi đó tuy hơi mệt nhưng chúng tôi đều rất vui, năm sau tôi vẫn muốn đi thêm một lần nữa!"
  },
  {
    "id": "wp-hsk2-advanced",
    "level": "HSK2",
    "subDifficulty": "advanced",
    "title": "Nhắn tin hỏi shop Taobao đổi size áo",
    "examType": "Giao tiếp Taobao HSK 2",
    "scenarioVi": "Bạn vừa nhận một chiếc áo mua trên Taobao nhưng mặc hơi chật. Hãy viết tin nhắn gửi CSKH hỏi đổi sang cỡ lớn hơn và hỏi về phí vận chuyển.",
    "minChars": 50,
    "targetChars": 85,
    "keywords": [
      "快递",
      "有点儿",
      "换",
      "运费"
    ],
    "checklistVi": [
      "Nêu rõ đã nhận hàng nhưng kích cỡ hơi nhỏ",
      "Đề nghị đổi sang size lớn hơn",
      "Hỏi về quy trình gửi lại và phí vận chuyển",
      "Giữ giọng điệu lịch sự"
    ],
    "sampleZh": "客服你好！我昨天收到了在你们店买的白色外套，质量非常好，我很喜欢。但是我试穿了一下，M码有点儿小，请问可以换大一号的L码吗？我需要把衣服寄回哪个地址？另外，换货的运费怎么算？谢谢您！",
    "samplePinyin": "Kèfú nǐ hǎo! Wǒ zuótiān shōudào le zài nǐmen diàn mǎi de báisè wàitào, zhìliàng fēicháng hǎo, wǒ hěn xǐhuan. Dànshì wǒ shìchuān le yíxià, M mǎ yǒudiǎnr xiǎo, qǐngwèn kěyǐ huàn dà yí hào de L mǎ ma? Wǒ xūyào bǎ yīfu jì huí nǎge dìzhǐ? Lìngwài, huànhuò de yùnfèi zěnme suàn? Xièxie nín!",
    "sampleVi": "Chào CSKH! Hôm qua mình đã nhận chiếc áo khoác trắng mua ở shop bạn, chất lượng rất tốt, mình rất thích. Nhưng mình mặc thử thấy size M hơi nhỏ, xin hỏi có thể đổi sang size L lớn hơn một cỡ không? Mình cần gửi áo về địa chỉ nào? Ngoài ra, phí vận chuyển đổi hàng tính thế nào? Cảm ơn bạn!"
  },
  {
    "id": "wp-hsk3-basic",
    "level": "HSK3",
    "subDifficulty": "basic",
    "title": "Email xin nghỉ phép gửi quản lý",
    "examType": "Email công sở HSK 3",
    "scenarioVi": "Viết email gửi giám đốc xin nghỉ phép 1 ngày vì bị cảm sốt, đồng thời nêu rõ bạn đã bàn giao công việc gấp cho đồng nghiệp nào.",
    "minChars": 70,
    "targetChars": 110,
    "keywords": [
      "经理",
      "因为",
      "请假",
      "交给"
    ],
    "checklistVi": [
      "Có lời chào và xưng hô chuẩn công sở",
      "Nêu rõ lý do sức khỏe dùng 因为...所以...",
      "Trình bày phương án bàn giao công việc dùng câu chữ 把",
      "Cam kết hoàn thành việc khi đi làm lại"
    ],
    "sampleZh": "尊敬的王经理：您好！因为昨天晚上突然感冒发烧，今天早上头很疼，医生建议我在家休息一天。因此，我想向您请今天一天的病假。关于今天下午要发给客户的报价单，我已经把所有资料交给同事小陈帮忙处理了。明天身体恢复后我会准时回公司上班。给您带来不便，非常抱歉！",
    "samplePinyin": "Zūnjìng de Wáng jīnglǐ: nínhǎo! Yīnwèi zuótiān wǎnshang tūrán gǎnmào fāshāo, jīntiān zǎoshang tóu hěn téng, yīshēng jiànyì wǒ zài jiā xiūxi yì tiān. Yīncǐ, wǒ xiǎng xiàng nín qǐng jīntiān yì tiān de bìngjià. Guānyú jīntiān xiàwǔ yào fā gěi kèhù de bàojiàdān, wǒ yǐjīng bǎ suǒyǒu zīliào jiāogěi tóngshì Xiǎo Chén bāngmáng chǔlǐ le. Míngtiān shēntǐ huīfù hòu wǒ huì zhǔnshí huí gōngsī shàngbān. Gěi nín dàilái búbiàn, fēicháng bàoqiàn!",
    "sampleVi": "Kính gửi Giám đốc Vương: Xin chào anh! Vì tối qua em đột nhiên bị cảm sốt, sáng nay rất đau đầu, bác sĩ khuyên em nghỉ ngơi ở nhà một ngày. Do đó, em muốn xin anh nghỉ ốm một ngày hôm nay. Về bảng báo giá cần gửi khách hàng chiều nay, em đã bàn giao toàn bộ tài liệu cho đồng nghiệp Tiểu Trần hỗ trợ xử lý rồi. Ngày mai sau khi khỏe lại em sẽ đi làm đúng giờ. Rất xin lỗi vì sự bất tiện này!"
  },
  {
    "id": "wp-hsk3-advanced",
    "level": "HSK3",
    "subDifficulty": "advanced",
    "title": "Thư hỏi hàng sỉ & báo giá trên 1688",
    "examType": "Thương mại 1688 HSK 3",
    "scenarioVi": "Viết tin nhắn thương mại gửi xưởng sản xuất ở Quảng Châu hỏi về số lượng đặt tối thiểu (MOQ), giá sỉ cho 500 sản phẩm, phí lấy mẫu thử và thời gian giao ra kho Bằng Tường.",
    "minChars": 80,
    "targetChars": 120,
    "keywords": [
      "起订量",
      "样品",
      "报价单",
      "发货"
    ],
    "checklistVi": [
      "Giới thiệu bản thân là nhà bán sỉ tại Việt Nam",
      "Hỏi rõ MOQ và giá sỉ theo số lượng",
      "Đề nghị lấy hàng mẫu kiểm tra chất lượng",
      "Hỏi thời gian sản xuất và giao hàng tới kho logistics"
    ],
    "sampleZh": "陈老板您好！我是越南河内的批发商，在1688上看到贵厂这款蓝牙耳机非常不错。请问最低起订量是多少？如果我们首批订购五百个，单价能给到多少优惠？另外，我想先买三个样品测试质量，麻烦把产品目录和报价单发给我。如果确认下单，大概几天能发货到广西凭祥物流仓？期待长期合作！",
    "samplePinyin": "Chén lǎobǎn nínhǎo! Wǒ shì Yuènán Hénèi de pīfāshāng, zài 1688 shàng kàndào guì chǎng zhè kuǎn lányá ěrjī fēicháng búcuò. Qǐngwèn zuìdī qǐdìngliàng shì duōshao? Rúguǒ wǒmen shǒupī dìnggòu wǔbǎi gè, dānjià néng gěidào duōshao yōuhuì? Lìngwài, wǒ xiǎng xiān mǎi sān gè yàngpǐn cèshì zhìliàng, máfan bǎ chǎnpǐn mùlù hé bàojiàdān fā gěi wǒ. Rúguǒ quèrèn xiàdān, dàgài jǐ tiān néng fāhuò dào Guǎngxī Píngxiáng wùliúcāng? Qīdài chángqī hézuò!",
    "sampleVi": "Chào ông chủ Trần! Tôi là nhà bán sỉ ở Hà Nội Việt Nam, thấy mẫu tai nghe Bluetooth này của xưởng anh trên 1688 rất ổn. Xin hỏi số lượng đặt tối thiểu là bao nhiêu? Nếu lô đầu chúng tôi đặt 500 chiếc thì đơn giá có thể ưu đãi bao nhiêu? Ngoài ra, tôi muốn mua trước 3 mẫu thử kiểm tra chất lượng, phiền anh gửi catalog và bảng báo giá cho tôi. Nếu chốt đơn thì khoảng mấy ngày gửi được hàng tới kho logistics Bằng Tường Quảng Tây? Mong được hợp tác lâu dài!"
  },
  {
    "id": "wp-hsk4-basic",
    "level": "HSK4",
    "subDifficulty": "basic",
    "title": "Quan điểm về việc thanh toán không tiền mặt",
    "examType": "Nghị luận ngắn HSK 4",
    "scenarioVi": "Viết đoạn văn (100–150 chữ Hán) trình bày lợi ích của thanh toán di động (WeChat/Alipay) và một lưu ý cần thiết khi sử dụng.",
    "minChars": 80,
    "targetChars": 130,
    "keywords": [
      "随着",
      "不仅",
      "而且",
      "安全"
    ],
    "checklistVi": [
      "Mở bài bằng cấu trúc 随着...",
      "Dùng cấu trúc tăng tiến 不仅...而且...",
      "Nêu ít nhất một lưu ý về bảo mật hoặc tiêu dùng lý tính",
      "Kết bài ngắn gọn súc tích"
    ],
    "sampleZh": "随着智能手机的普及，移动支付已经彻底改变了人们的日常生活。如今出门购物或旅行，不仅不用带厚重的钱包和零钱，而且只需扫一扫二维码，几秒钟就能完成付款，既方便又高效。不过，移动支付在带来便利的同时，也让我们更容易冲动消费。因此，大家在享受数字生活时，一方面要保护好个人密码和账户安全，另一方面也要养成理性消费的好习惯。",
    "samplePinyin": "Suízhe zhìnéng shǒujī de pǔjí, yídòng zhīfù yǐjīng chèdǐ gǎibiàn le rénmen de rìcháng shēnghuó. Rújīn chūmén gòuwù huò lǚxíng, bùjǐn búyòng dài hòuzhòng de qiánbāo hé língqián, érqiě zhǐ xū sǎoyìsǎo èrwéimǎ, jǐ miǎozhōng jiù néng wánchéng fùkuǎn, jì fāngbiàn yòu gāoxiào. Búguò, yídòng zhīfù zài dàilái biànlì de tóngshí, yě ràng wǒmen gèng róngyì chōngdòng xiāofèi. Yīncǐ, dàjiā zài xiǎngshòu shùzì shēnghuó shí, yì fāngmiàn yào bǎohù hǎo gèrén mìmǎ hé zhànghù ānquán, lìng yì fāngmiàn yě yào yǎngchéng lǐxìng xiāofèi de hǎo xíguàn.",
    "sampleVi": "Cùng với sự phổ cập của điện thoại thông minh, thanh toán di động đã thay đổi triệt để đời sống thường nhật của con người. Ngày nay ra ngoài mua sắm hay du lịch, không chỉ không cần mang ví dày và tiền lẻ, mà chỉ cần quét mã QR vài giây là thanh toán xong, vừa tiện vừa hiệu quả. Tuy nhiên, thanh toán di động bên cạnh sự tiện lợi cũng khiến chúng ta dễ tiêu dùng bốc đồng hơn. Vì vậy, khi tận hưởng đời sống số, một mặt cần bảo vệ kỹ mật khẩu và an toàn tài khoản, mặt khác cần rèn thói quen tiêu dùng lý tính."
  },
  {
    "id": "wp-hsk4-advanced",
    "level": "HSK4",
    "subDifficulty": "advanced",
    "title": "Email khiếu nại hàng lỗi và đề xuất bồi thường",
    "examType": "Email XNK HSK 4",
    "scenarioVi": "Lô hàng bạn vừa nhập từ Thâm Quyến có 30 sản phẩm bị lỗi và thiếu chứng từ C/O Form E. Hãy viết email chuyên nghiệp yêu cầu nhà cung cấp xử lý.",
    "minChars": 90,
    "targetChars": 140,
    "keywords": [
      "查验",
      "次品",
      "原产地证书",
      "解决"
    ],
    "checklistVi": [
      "Nêu rõ mã đơn hàng và vấn đề phát hiện khi kiểm hàng",
      "Đề cập việc thiếu C/O Form E ảnh hưởng đến thuế quan",
      "Đưa ra phương án giải quyết rõ ràng (gửi bù hoặc trừ tiền)",
      "Giữ giọng điệu kiên quyết nhưng hợp tác"
    ],
    "sampleZh": "尊敬的李经理：我们已于昨日收到贵厂发出的第202605号订单货物。经质检部门仔细查验，发现其中有三十台小家电存在外观划痕和无法通电的次品问题；同时，随货单证中缺少东盟原产地证书Form E，导致我方清关时无法享受关税减免。为了不影响后续销售进度，请贵厂在三天内补寄Form E正本，并对这三十台次品提供免费补发或在下批货款中扣除相应金额。希望尽快妥善解决！",
    "samplePinyin": "Zūnjìng de Lǐ jīnglǐ: wǒmen yǐ yú zuórì shōudào guì chǎng fāchū de dì 202605 hào dìngdān huòwù. Jīng zhìjiǎn bùmén zǐxì cháyàn, fāxiàn qízhōng yǒu sānshí tái xiǎo jiādiàn cúnzài wàiguān huáhén hé wúfǎ tōngdiàn de cìpǐn wèntí; tóngshí, suíhuò dānzhèng zhōng quēshǎo Dōngméng yuánchǎndì zhèngshū Form E, dǎozhì wǒfāng qīngguān shí wúfǎ xiǎngshòu guānshuì jiǎnmiǎn. Wèile bù yǐngxiǎng hòuxù xiāoshòu jìndù, qǐng guì chǎng zài sān tiān nèi bǔjì Form E zhèngběn, bìng duì zhè sānshí tái cìpǐn tígōng miǎnfèi bǔfā huò zài xià pī huòkuǎn zhōng kòuchú xiāngyìng jīn'é. Xīwàng jǐnkuài tuǒshàn jiějué!",
    "sampleVi": "Kính gửi Giám đốc Lý: Chúng tôi đã nhận được lô hàng đơn số 202605 do quý xưởng gửi đi vào hôm qua. Qua bộ phận kiểm định kiểm tra kỹ, phát hiện 30 máy gia dụng nhỏ bị lỗi trầy xước ngoại quan và không vào điện; đồng thời bộ chứng từ thiếu C/O Form E khiến chúng tôi không được hưởng ưu đãi thuế quan khi thông quan. Để không ảnh hưởng tiến độ bán hàng, đề nghị quý xưởng gửi bổ sung bản gốc Form E trong 3 ngày và gửi bù miễn phí 30 máy lỗi hoặc khấu trừ vào tiền hàng lô sau. Mong sớm giải quyết thỏa đáng!"
  },
  {
    "id": "wp-hsk5-basic",
    "level": "HSK5",
    "subDifficulty": "basic",
    "title": "Luận ngắn: Học tập suốt đời trong kỷ nguyên AI",
    "examType": "Viết luận HSK 5",
    "scenarioVi": "Viết bài luận ngắn (130–180 chữ Hán) bàn về lý do tại sao người đi làm cần duy trì thói quen học tập suốt đời trước sự phát triển nhanh của AI.",
    "minChars": 100,
    "targetChars": 160,
    "keywords": [
      "人工智能",
      "终身学习",
      "独立思考",
      "竞争"
    ],
    "checklistVi": [
      "Đặt vấn đề rõ ràng về tác động của AI",
      "Phân tích 2 luận điểm chính có từ nối logic",
      "Khẳng định vai trò của tư duy độc lập và học tập suốt đời",
      "Dùng ít nhất 1 thành ngữ hoặc cụm từ HSK 5"
    ],
    "sampleZh": "随着人工智能技术的飞速迭代，许多重复性、机械性的传统岗位正面临被自动化取代的风险。面对如此激烈的职场竞争，仅仅依靠大学阶段学到的书本知识早已远远不够，终身学习已成为当代职场人的必然选择。一方面，我们需要主动拥抱新技术，学会把AI当作提升工作效率的得力助手；另一方面，更应当着力培养独立思考、跨文化沟通与解决复杂问题的核心能力。唯有不断更新知识结构，方能在瞬息万变的时代浪潮中立于不败之地。",
    "samplePinyin": "Suízhe réngōng zhìnéng jìshù de fēisù diédài, xǔduō chóngfùxìng, jīxièxìng de chuántǒng gǎngwèi zhèng miànlín bèi zìdònghuà qǔdài de fēngxiǎn. Miànduì rúcǐ jīliè de zhíchǎng jìngzhēng, jǐnjǐn yīkào dàxué jiēduàn xuédào de shūběn zhīshi zǎoyǐ yuǎnyuǎn búgòu, zhōngshēn xuéxí yǐ chéngwéi dāngdài zhíchǎngrén de bìrán xuǎnzé. Yì fāngmiàn, wǒmen xūyào zhǔdòng yōngbào xīn jìshù, xuéhuì bǎ AI dàngzuò tíshēng gōngzuò xiàolǜ de délì zhùshǒu; lìng yì fāngmiàn, gèng yīngdāng zhuólì péiyǎng dúlì sīkǎo, kuàwénhuà gōutōng yǔ jiějué fùzá wèntí de héxīn nénglì. Wéiyǒu búduàn gēngxīn zhīshi jiégòu, fāng néng zài shùnxīwànbiàn de shídài làngcháo zhōng lìyúbúbàizhīdì.",
    "sampleVi": "Cùng với sự cập nhật thần tốc của công nghệ AI, nhiều vị trí truyền thống mang tính lặp lại máy móc đang đứng trước nguy cơ bị tự động hóa thay thế. Đối mặt với cạnh tranh công sở khốc liệt như vậy, chỉ dựa vào kiến thức sách vở thời đại học từ lâu đã không đủ, học tập suốt đời đã trở thành lựa chọn tất yếu của người đi làm đương đại. Một mặt, chúng ta cần chủ động đón nhận công nghệ mới, biến AI thành trợ thủ đắc lực tăng hiệu suất; mặt khác, càng cần tập trung rèn luyện tư duy độc lập, giao tiếp đa văn hóa và năng lực giải quyết vấn đề phức tạp. Chỉ có không ngừng cập nhật tri thức mới đứng vững trong làn sóng thời đại."
  },
  {
    "id": "wp-hsk5-advanced",
    "level": "HSK5",
    "subDifficulty": "advanced",
    "title": "Thư đề xuất làm Đại lý Độc quyền tại Việt Nam",
    "examType": "Văn thư Thương mại HSK 5",
    "scenarioVi": "Viết thư đề xuất gửi Tổng giám đốc một thương hiệu đồ gia dụng thông minh Trung Quốc để xin quyền đại lý độc quyền tại Việt Nam.",
    "minChars": 110,
    "targetChars": 170,
    "keywords": [
      "独家代理权",
      "供应链",
      "售后服务",
      "合作"
    ],
    "checklistVi": [
      "Trình bày lợi thế kênh phân phối của công ty bạn tại Việt Nam",
      "Đưa ra cam kết sản lượng thu mua hàng năm",
      "Cam kết xây dựng hệ thống hậu mãi và quảng bá thương hiệu",
      "Đề xuất lịch họp trực tuyến hoặc gặp trực tiếp"
    ],
    "sampleZh": "尊敬的张总：我司长期深耕越南智能家电零售与电商渠道，在河内及胡志明市拥有完善的仓储与售后服务网点。贵司产品设计新颖、品质卓越，极具市场潜力。为实现双方共赢，我司正式提议申请成为贵品牌在越南市场的独家代理商。若蒙授予独家代理权，我司承诺首年保底采购额不低于三百万人民币，并投入专项资金开展TikTok直播推广。期待下周与您视频会谈，就具体合作条款达成一致！",
    "samplePinyin": "Zūnjìng de Zhāng zǒng: wǒsī chángqī shēngēng Yuènán zhìnéng jiādiàn língshòu yǔ diànshāng qúdào, zài Hénèi jí Húzhìmíng shì yōngyǒu wánshàn de cāngchǔ yǔ shòuhòu fúwù wǎngdiǎn. Guìsī chǎnpǐn shèjì xīnyǐng, pǐnzhì zhuóyuè, jíjù shìchǎng qiánlì. Wèi shíxiàn shuāngfāng gòngyíng, wǒsī zhèngshì tíyì shēnqǐng chéngwéi guì pǐnpái zài Yuènán shìchǎng de dújiā dàilǐshāng. Ruò méng shòuyǔ dújiā dàilǐquán, wǒsī chéngnuò shǒunián bǎodǐ cǎigòu'é bù dīyú sānbǎiwàn Rénmínbì, bìng tóurù zhuānxiàng zījīn kāizhǎn TikTok zhíbō tuīguǎng. Qīdài xià zhōu yǔ nín shìpín huìtán, jiù jùtǐ hézuò tiáokuǎn dáchéng yízhì!",
    "sampleVi": "Kính gửi Giám đốc Trương: Công ty chúng tôi lâu năm phát triển sâu rộng kênh bán lẻ và TMĐT đồ gia dụng thông minh tại Việt Nam, có mạng lưới kho bãi và hậu mãi hoàn thiện tại Hà Nội và TP.HCM. Sản phẩm của quý công ty thiết kế mới mẻ, chất lượng vượt trội, rất có tiềm năng thị trường. Để hai bên cùng thắng, chúng tôi chính thức đề xuất xin làm đại lý độc quyền thương hiệu của quý vị tại Việt Nam. Nếu được trao quyền, chúng tôi cam kết doanh số thu mua tối thiểu năm đầu không dưới 3 triệu NDT và đầu tư quỹ chuyên biệt quảng bá livestream TikTok. Mong tuần sau họp video cùng ngài để thống nhất điều khoản cụ thể!"
  },
  {
    "id": "wp-hsk6-basic",
    "level": "HSK6",
    "subDifficulty": "basic",
    "title": "Bình luận: Bảo tồn di sản văn hóa trong thời đại số",
    "examType": "Bài luận HSK 6",
    "scenarioVi": "Viết bài bình luận (150–220 chữ Hán) phân tích cách kết hợp công nghệ số để bảo tồn và lan tỏa di sản văn hóa phi vật thể tới giới trẻ.",
    "minChars": 130,
    "targetChars": 200,
    "keywords": [
      "非物质文化遗产",
      "传承",
      "创新",
      "年轻一代"
    ],
    "checklistVi": [
      "Nêu thực trạng mai một của di sản truyền thống",
      "Phân tích vai trò của công nghệ số và sáng tạo văn hóa",
      "Dùng câu phức tầng bậc rõ ràng (不仅...更...)",
      "Kết luận sâu sắc về bản sắc văn hóa"
    ],
    "sampleZh": "在快节奏的现代生活中，许多凝聚着先民智慧的非物质文化遗产一度面临后继无人的困境。然而，保护传统绝不意味着将其冰封在博物馆的玻璃柜中，而在于实现活态传承。近年来，借助三维数字建模、沉浸式体验以及短视频传播，古老的刺绣、戏曲与传统手工艺得以用年轻一代喜闻乐见的方式重新“出圈”。这充分证明，传统与现代并非水火不容：唯有在坚守文化根脉的基础上大胆开展表达形式的创新，方能让中华优秀传统文化在数字时代焕发出历久弥新的生命力。",
    "samplePinyin": "Zài kuàijiézòu de xiàndài shēnghuó zhōng, xǔduō níngjù zhe xiānmín zhìhuì de fēi wùzhì wénhuà yíchǎn yídù miànlín hòujìwúrén de kùnjìng. Rán'ér, bǎohù chuántǒng jué bù yìwèizhe jiāng qí bīngfēng zài bówùguǎn de bōliguì zhōng, ér zàiyú shíxiàn huótài chuánchéng. Jìnnián lái, jièzhù sānwéi shùzì jiànmó, chénjìnshì tǐyàn yǐjí duǎnshìpín chuánbō, gǔlǎo de cìxiù, xìqǔ yǔ chuántǒng shǒugōngyì déyǐ yòng niánqīng yídài xǐwénlèjiàn de fāngshì chóngxīn “chūquān”. Zhè chōngfèn zhèngmíng, chuántǒng yǔ xiàndài bìngfēi shuǐhuǒbùróng: wéiyǒu zài jiānshǒu wénhuà gēnmài de jīchǔ shàng dàdǎn kāizhǎn biǎodá xíngshì de chuàngxīn, fāng néng ràng Zhōnghuá yōuxiù chuántǒng wénhuà zài shùzì shídài huànfā chū lìjiǔmíxīn de shēngmìnglì.",
    "sampleVi": "Trong nhịp sống hiện đại hối hả, nhiều di sản văn hóa phi vật thể kết tinh trí tuệ tiền nhân từng đối mặt với cảnh không người kế thừa. Tuy nhiên, bảo vệ truyền thống tuyệt không có nghĩa là đóng băng chúng trong tủ kính bảo tàng, mà nằm ở sự kế thừa sống động. Những năm gần đây, nhờ mô hình số 3D, trải nghiệm nhập vai và lan tỏa qua video ngắn, nghệ thuật thêu cổ, hí kịch và thủ công truyền thống đã trở lại ngoạn mục theo cách giới trẻ yêu thích. Điều này chứng minh truyền thống và hiện đại không hề xung khắc: chỉ có mạnh dạn đổi mới hình thức thể hiện trên nền tảng giữ vững gốc rễ văn hóa mới giúp truyền thống tỏa sáng sức sống bền lâu."
  },
  {
    "id": "wp-hsk7-advanced",
    "level": "HSK7",
    "subDifficulty": "advanced",
    "title": "Báo cáo phân tích: Chuyển đổi xanh trong chuỗi cung ứng xuất khẩu",
    "examType": "Báo cáo chuyên sâu HSK 7",
    "scenarioVi": "Viết đoạn báo cáo chiến lược (160–240 chữ Hán) phân tích thách thức từ tiêu chuẩn xanh quốc tế (CBAM) và giải pháp cho doanh nghiệp xuất khẩu châu Á.",
    "minChars": 140,
    "targetChars": 210,
    "keywords": [
      "碳中和",
      "供应链",
      "转型",
      "竞争力"
    ],
    "checklistVi": [
      "Sử dụng thuật ngữ kinh tế xanh chính xác",
      "Phân tích cả thách thức ngắn hạn và cơ hội dài hạn",
      "Đưa ra ít nhất 2 giải pháp hành động cụ thể",
      "Văn phong báo cáo khách quan, súc tích"
    ],
    "sampleZh": "随着全球碳中和共识不断深化以及欧盟碳边境调节机制（CBAM）的逐步落地，绿色低碳已从道义倡导转化为刚性的国际贸易准入门槛。对于高度嵌入全球产业链的亚洲出口型制造企业而言，短期内固然面临环保设备改造与碳足迹核算带来的成本压力；但从长远来看，率先完成绿色供应链转型的企业将显著提升品牌溢价能力与国际大客户黏性。因此，企业亟需加快引入屋顶光伏等清洁能源，建立全生命周期碳数据追踪体系，化合规压力为新一轮国际竞争的核心优势。",
    "samplePinyin": "Suízhe quánqiú tànzhōnghé gòngshí búduàn shēnhuà yǐjí Ōuméng tàn biānjìng tiáojié jīzhì (CBAM) de zhúbù luòdì, lǜsè dītàn yǐ cóng dàoyì chàngdǎo zhuǎnhuà wéi gāngxìng de guójì màoyì zhǔnrù ménkǎn. Duìyú gāodù qiànrù quánqiú chǎnyèliàn de Yàzhōu chūkǒuxíng zhìzào qǐyè éryán, duǎnqī nèi gùrán miànlín huánbǎo shèbèi gǎizào yǔ tànzújì hésuàn dàilái de chéngběn yālì; dàn cóng chángyuǎn lái kàn, shuàixiān wánchéng lǜsè gōngyìngliàn zhuǎnxíng de qǐyè jiāng xiǎnzhù tíshēng pǐnpái yìjià nénglì yǔ guójì dà kèhù niánxìng. Yīncǐ, qǐyè jíxū jiākuài yǐnrù wūdǐng guāngfú děng qīngjié néngyuán, jiànlì quán shēngmìng zhōuqī tàn shùjù zhuīzōng tǐxì, huà héguī yālì wéi xīn yì lún guójì jìngzhēng de héxīn yōushì.",
    "sampleVi": "Cùng với nhận thức chung về trung hòa carbon toàn cầu ngày càng sâu sắc và việc triển khai Cơ chế CBAM của EU, xanh và carbon thấp đã chuyển từ lời kêu gọi đạo đức thành ngưỡng tiếp cận bắt buộc của thương mại quốc tế. Đối với doanh nghiệp chế tạo xuất khẩu châu Á gắn sâu vào chuỗi công nghiệp toàn cầu, trong ngắn hạn tuy đối mặt áp lực chi phí cải tạo thiết bị và hạch toán dấu chân carbon; nhưng về dài hạn, doanh nghiệp tiên phong chuyển đổi chuỗi cung ứng xanh sẽ nâng cao rõ rệt năng lực định giá thương hiệu và độ gắn kết khách hàng lớn. Do đó, doanh nghiệp cấp thiết cần đưa vào năng lượng sạch như điện mặt trời áp mái và lập hệ thống truy vết dữ liệu carbon toàn vòng đời."
  },
  {
    "id": "wp-hsk8-basic",
    "level": "HSK8",
    "subDifficulty": "basic",
    "title": "Tiểu luận Triết học: Tinh thần 'Hòa nhi bất đồng' trong giao lưu quốc tế",
    "examType": "Tiểu luận học thuật HSK 8",
    "scenarioVi": "Viết tiểu luận ngắn (180–260 chữ Hán) vận dụng tư tưởng '君子和而不同' (Quân tử hòa nhi bất đồng) để bàn về hợp tác đa văn hóa hiện đại.",
    "minChars": 150,
    "targetChars": 220,
    "keywords": [
      "和而不同",
      "文明互鉴",
      "包容",
      "共赢"
    ],
    "checklistVi": [
      "Trích dẫn và giải nghĩa chuẩn xác tư tưởng cổ điển",
      "Liên hệ sắc sảo với bối cảnh toàn cầu hóa hiện đại",
      "Dùng kết cấu văn ngôn - bạch thoại hài hòa",
      "Lập luận chặt chẽ, giàu chiều sâu nhân văn"
    ],
    "sampleZh": "两千多年前，孔子提出“君子和而不同，小人同而不和”，道出了处理人际关系与文明交往的至理名言。所谓“和”，是在承认并尊重多元差异的前提下寻求共生共荣；而“同”则是抹杀个性、强求一律的机械趋同。放眼当今世界，不同民族在历史传统、宗教信仰与社会制度上千差万别，试图以单一价值观统一全球的傲慢只会挑起对抗与分裂。唯有秉持海纳百川的包容胸襟，在平等对话与文明互鉴中取长补短，人类社会方能真正实现美美与共、互利共赢的持久繁荣。",
    "samplePinyin": "Liǎngqiān duō nián qián, Kǒngzǐ tíchū “jūnzǐ hé ér bù tóng, xiǎorén tóng ér bù hé”, dàochū le chǔlǐ rénjì guānxi yǔ wénmíng jiāowǎng de zhìlǐ míngyán. Suǒwèi “hé”, shì zài chéngrèn bìng zūnzhòng duōyuán chāyì de qiántí xià xúnqiú gòngshēng gòngróng; ér “tóng” zé shì mǒshā gèxìng, qiǎngqiú yílǜ de jīxiè qūtóng. Fàngyǎn dāngjīn shìjiè, bùtóng mínzú zài lìshǐ chuántǒng, zōngjiào xìnyǎng yǔ shèhuì zhìdù shàng qiānchāwànbié, shìtú yǐ dānyī jiàzhíguān tǒngyī quánqiú de àomàn zhǐ huì tiǎoqǐ duìkàng yǔ fēnliè. Wéiyǒu bǐngchí hǎinàbǎichuān de bāoróng xiōngjīn, zài píngděng duìhuà yǔ wénmíng hùjiàn zhōng qǔchángbǔduǎn, rénlèi shèhuì fāng néng zhēnzhèng shíxiàn měiměiyǔgòng, hùlì gòngyíng de chíjiǔ fánróng.",
    "sampleVi": "Hơn hai ngàn năm trước, Khổng Tử đã đưa ra câu danh ngôn 'Quân tử hòa nhi bất đồng, tiểu nhân đồng nhi bất hòa', nói lên chân lý tối thượng trong xử lý quan hệ nhân sinh và giao lưu văn minh. 'Hòa' là tìm kiếm sự cùng tồn tại phát triển trên tiền đề thừa nhận và tôn trọng khác biệt đa dạng; còn 'Đồng' là sự đồng hóa máy móc xóa bỏ cá tính. Nhìn ra thế giới ngày nay, các dân tộc khác nhau sâu sắc về truyền thống, tín ngưỡng và thể chế; sự ngạo mạn muốn áp đặt một hệ giá trị duy nhất chỉ gây ra đối đầu và chia rẽ. Chỉ có giữ tấm lòng bao dung biển lớn dung nạp trăm sông, học hỏi lẫn nhau trong đối thoại bình đẳng mới mang lại phồn vinh bền vững."
  },
  {
    "id": "wp-hsk9-advanced",
    "level": "HSK9",
    "subDifficulty": "advanced",
    "title": "Chính luận đỉnh cao: Vượt qua phân mảnh địa kinh tế bằng Chủ nghĩa đa phương mở",
    "examType": "Chính luận HSK 9",
    "scenarioVi": "Viết bài chính luận (200–280 chữ Hán) phân tích hệ lụy của chủ nghĩa bảo hộ và khẳng định giá trị của chủ nghĩa khu vực mở (RCEP, đa phương).",
    "minChars": 160,
    "targetChars": 240,
    "keywords": [
      "多边主义",
      "碎片化",
      "开放",
      "共同体"
    ],
    "checklistVi": [
      "Sử dụng từ vựng kinh tế chính trị học chuẩn HSK 9",
      "Vận dụng linh hoạt thành ngữ và đối ngẫu cổ điển",
      "Lập luận sắc bén, bố cục Tổng – Phân – Hợp hoàn chỉnh",
      "Không mắc bất kỳ lỗi ngữ pháp hay dấu câu nào"
    ],
    "sampleZh": "当今世界正经历百年未有之大变局，单边保护主义与泛安全化壁垒甚嚣尘上，致使高度一体化的全球产业链面临碎片化隐忧。历史经验反复昭示：开放则兴，封闭则衰；以邻为壑的零和博弈终将反噬自身，无人能够独善其身。面对气候变化、债务风险与人工智能治理等跨越国界的系统性挑战，重振以规则为基础的多边贸易体制已刻不容缓。唯有秉持开放的区域主义精神，依托RCEP等高标准经贸协定持续降低制度性交易成本，以人类命运共同体理念为引领，方能跨越修昔底德陷阱，开创普惠包容的全球经济新纪元。",
    "samplePinyin": "Dāngjīn shìjiè zhèng jīnglì bǎinián wèiyǒu zhī dàbiànjú, dānbiān bǎohùzhǔyì yǔ fàn'ānquánhuà bìlěi shènxiāochénshàng, zhìshǐ gāodù yìtǐhuà de quánqiú chǎnyèliàn miànlín suìpiànhuà yǐnyōu. Lìshǐ jīngyàn fǎnfù zhāoshì: kāifàng zé xīng, fēngbì zé shuāi; yǐlínwéihè de línghé bóyì zhōngjiāng fǎnshì zìshēn, wúrén nénggòu dúshànqíshēn. Miànduì qìhòu biànhuà, zhàiwù fēngxiǎn yǔ réngōng zhìnéng zhìlǐ děng kuàyuè guójiè de xìtǒngxìng tiǎozhàn, chóngzhèn yǐ guīzé wéi jīchǔ de duōbiān màoyì tǐzhì yǐ kèbùrónghuǎn. Wéiyǒu bǐngchí kāifàng de qūyùzhǔyì jīngshén, yītuō RCEP děng gāo biāozhǔn jīngmào xiédìng chíxù jiàngdī zhìdùxìng jiāoyì chéngběn, yǐ rénlèi mìngyùn gòngtóngtǐ lǐniàn wéi yǐnlǐng, fāng néng kuàyuè Xiūxīdǐdé xiànjǐng, kāichuàng pǔhuì bāoróng de quánqiú jīngjì xīn jìyuán.",
    "sampleVi": "Thế giới ngày nay đang trải qua cục diện biến đổi lớn chưa từng có trong một trăm năm, chủ nghĩa bảo hộ đơn phương và rào cản an ninh hóa tràn lan nổi lên mạnh mẽ khiến chuỗi công nghiệp toàn cầu đối mặt nguy cơ phân mảnh. Lịch sử nhiều lần chỉ rõ: mở cửa thì thịnh, khép kín thì suy; trò chơi tổng bằng không đẩy khó khăn cho láng giềng cuối cùng sẽ hại chính mình. Trước các thách thức xuyên biên giới như biến đổi khí hậu, nợ công và quản trị AI, chấn hưng thể chế thương mại đa phương dựa trên quy tắc đã trở nên cấp bách. Chỉ có kiên trì chủ nghĩa khu vực mở và lấy Cộng đồng chung vận mệnh làm dẫn dắt mới vượt qua bẫy Thucydides, mở ra kỷ nguyên kinh tế toàn cầu bao trùm."
  }
];
