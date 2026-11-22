import type { StudySession } from "@/types";
import {
  listeningDialogue,
  listeningFill,
  listeningMcq,
  readingComp,
  speakingShadowing,
  writingOrder,
  writingStroke,
} from "./helpers";

export const HSK0_STANDARD_SESSIONS: StudySession[] = [
  // ==========================================
  // BÀI 1: Thanh mẫu, Vận mẫu đơn & 4 Thanh điệu
  // ==========================================
  {
    id: "hsk0-l1-tones",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "basic",
    lessonNumber: 1,
    title: "Bài 1: Thanh mẫu, Vận mẫu đơn (a, o, e, i, u, ü) & 4 Thanh điệu",
    titleZh: "第一课：声母、单韵母与四声",
    titlePinyin: "Dì yī kè: Shēngmǔ, dānyùnmǔ yǔ sìshēng",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Khoai Tây yêu tiếng Trung",
    youtubeUrl: "https://www.youtube.com/watch?v=oITxIcuYOEE",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 1 声母、单韵母与四声",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "Mỗi âm tiết tiếng Trung gồm 3 thành phần: Thanh mẫu (phụ âm đầu) + Vận mẫu (nguyên âm/vần) + Thanh điệu (dấu).",
      "6 vận mẫu đơn cốt lõi: a (a), o (ô), e (ơ/ưa), i (i), u (u), ü (uy tròn môi — giữ khẩu hình u rồi phát âm i).",
      "4 thanh điệu chuẩn: Thanh 1 (55, ngang cao đều), Thanh 2 (35, đi lên như dấu sắc), Thanh 3 (214, xuống thấp rồi vòng lên), Thanh 4 (51, dứt khoát từ cao xuống thấp).",
    ],
    newWords: [
      {
        hanzi: "妈",
        pinyin: "mā",
        partOfSpeech: "Danh từ",
        meaningVi: "mẹ (ví dụ chuẩn Thanh 1 — ngang cao)",
        radical: "女 (Nữ)",
        strokeCount: 6,
      },
      {
        hanzi: "麻",
        pinyin: "má",
        partOfSpeech: "Danh từ",
        meaningVi: "cây gai, tê (ví dụ chuẩn Thanh 2 — đi lên)",
        radical: "麻 (Ma)",
        strokeCount: 11,
      },
      {
        hanzi: "马",
        pinyin: "mǎ",
        partOfSpeech: "Danh từ",
        meaningVi: "con ngựa (ví dụ chuẩn Thanh 3 — xuống rồi lên)",
        radical: "马 (Mã)",
        strokeCount: 3,
      },
      {
        hanzi: "骂",
        pinyin: "mà",
        partOfSpeech: "Động từ",
        meaningVi: "mắng, chửi (ví dụ chuẩn Thanh 4 — dứt khoát)",
        radical: "口 (Khẩu)",
        strokeCount: 9,
      },
      {
        hanzi: "爸",
        pinyin: "bà",
        partOfSpeech: "Danh từ",
        meaningVi: "bố, ba (thanh mẫu b không bật hơi)",
        radical: "父 (Phụ)",
        strokeCount: 8,
      },
      {
        hanzi: "哥",
        pinyin: "gē",
        partOfSpeech: "Danh từ",
        meaningVi: "anh trai (vận mẫu đơn e đọc ơ)",
        radical: "口 (Khẩu)",
        strokeCount: 10,
      },
      {
        hanzi: "鱼",
        pinyin: "yú",
        partOfSpeech: "Danh từ",
        meaningVi: "con cá (vận mẫu ü đi với y bỏ 2 chấm)",
        radical: "鱼 (Ngư)",
        strokeCount: 8,
      },
      {
        hanzi: "女",
        pinyin: "nǚ",
        partOfSpeech: "Danh từ / Tính từ",
        meaningVi: "nữ, phụ nữ (vận mẫu tròn môi ü)",
        radical: "女 (Nữ)",
        strokeCount: 3,
      },
    ],
    dialogues: [
      {
        titleVi: "Thực hành 1: Chuỗi 4 thanh điệu với âm tiết ma",
        lines: [
          {
            speaker: "GV",
            zh: "妈，麻，马，骂。",
            pinyin: "Mā, má, mǎ, mà.",
            vi: "Mẹ, cây gai, con ngựa, mắng. (Thanh 1 – 2 – 3 – 4)",
          },
          {
            speaker: "HV",
            zh: "妈妈骑马，马慢，妈妈骂马。",
            pinyin: "Māma qí mǎ, mǎ màn, māma mà mǎ.",
            vi: "Mẹ cưỡi ngựa, ngựa chậm, mẹ mắng ngựa.",
          },
        ],
      },
      {
        titleVi: "Thực hành 2: Nhận diện 6 vận mẫu đơn a, o, e, i, u, ü",
        lines: [
          {
            speaker: "A",
            zh: "爸爸、妈妈、哥哥。",
            pinyin: "Bàba, māma, gēge.",
            vi: "Bố, mẹ, anh trai.",
          },
          {
            speaker: "B",
            zh: "鱼、女、五、一。",
            pinyin: "Yú, nǚ, wǔ, yī.",
            vi: "Cá, nữ, số năm, số một.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Hệ thống 4 thanh điệu cơ bản (四声)",
        formula: "Thanh 1 (ā — 55) | Thanh 2 (á — 35) | Thanh 3 (ǎ — 214) | Thanh 4 (à — 51)",
        explanationVi:
          "Thanh điệu trong tiếng Trung phân biệt trực tiếp nghĩa của từ. Thanh 1 giữ cao và phẳng như nốt Sol; Thanh 2 vuốt lên dứt khoát; Thanh 3 hạ trầm tận đáy giọng rồi mới nhấc nhẹ; Thanh 4 rơi mạnh và ngắn từ cao xuống thấp.",
        examples: [
          {
            zh: "妈 (mā) ≠ 马 (mǎ)",
            pinyin: "mā (mẹ) ≠ mǎ (con ngựa)",
            vi: "Chỉ khác thanh điệu nhưng nghĩa thay đổi hoàn toàn.",
          },
          {
            zh: "八 (bā) — 拔 (bá) — 把 (bǎ) — 爸 (bà)",
            pinyin: "bā — bá — bǎ — bà",
            vi: "Tám — nhổ — cầm — bố.",
          },
        ],
      },
      {
        titleVi: "Cách phát âm vận mẫu tròn môi ü và quy tắc bỏ hai chấm",
        formula: "n/l + ü (giữ 2 chấm: nǚ, lǜ) | y + ü → yu (bỏ 2 chấm: yú)",
        explanationVi:
          "Để phát âm chuẩn ü, hãy chu môi tròn như chữ u rồi giữ nguyên khẩu hình môi đó và đẩy âm i ra. Khi ü đứng một mình làm âm tiết, ta thêm y phía trước và bỏ hai chấm thành yu (vẫn đọc là ü).",
        examples: [
          {
            zh: "女 (nǚ) — 绿 (lǜ)",
            pinyin: "nǚ (nữ) — lǜ (màu xanh lá)",
            vi: "Đi sau n và l phải giữ nguyên hai chấm trên ü để phân biệt với nu, lu.",
          },
          {
            zh: "鱼 (yú)",
            pinyin: "yú (con cá)",
            vi: "Viết là yú nhưng vẫn giữ môi tròn đọc âm ü thanh 2.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk0-l1-q1",
        "妈",
        "mā",
        "Nghe âm tiết và chọn đúng thanh điệu vừa nghe được:",
        ["Thanh 1 (mā — mẹ)", "Thanh 2 (má — tê)", "Thanh 3 (mǎ — ngựa)", "Thanh 4 (mà — mắng)"],
        "Thanh 1 (mā — mẹ)",
        "Âm tiết đọc ngang, cao và đều (cao độ 55) là Thanh 1: 妈 (mā)."
      ),
      listeningMcq(
        "hsk0-l1-q2",
        "马",
        "mǎ",
        "Nghe và phân biệt từ nào có nghĩa là 'con ngựa':",
        ["妈 (mā)", "麻 (má)", "马 (mǎ)", "骂 (mà)"],
        "马 (mǎ)",
        "马 (mǎ) mang Thanh 3, hạ giọng trầm xuống thấp rồi nhấc lên."
      ),
      listeningFill(
        "hsk0-l1-q3",
        "爸爸",
        "____",
        "bàba",
        "Nghe và điền chữ Hán tương ứng với nghĩa 'bố, ba':",
        "爸爸",
        "爸爸 (bàba) gồm thanh mẫu b không bật hơi, âm đầu thanh 4 và âm sau thanh nhẹ."
      ),
      listeningDialogue(
        "hsk0-l1-q4",
        "妈妈骑马，马慢，妈妈骂马。",
        "Māma qí mǎ, mǎ màn, māma mà mǎ.",
        "Nghe câu luyện thanh điệu và chọn ý đúng:",
        [
          "Mẹ cưỡi ngựa, ngựa chậm, mẹ mắng ngựa",
          "Bố cưỡi ngựa, ngựa nhanh, bố khen ngựa",
          "Anh trai ăn cá cùng mẹ",
          "Mẹ mua một con cá nhỏ",
        ],
        "Mẹ cưỡi ngựa, ngựa chậm, mẹ mắng ngựa",
        "Câu luyện thanh kinh điển kết hợp 妈 (mā - T1), 马 (mǎ - T3) và 骂 (mà - T4)."
      ),
      listeningMcq(
        "hsk0-l1-q5",
        "鱼",
        "yú",
        "Nghe âm tiết và chọn đúng Pinyin tương ứng với âm tròn môi:",
        ["yú", "wú", "yí", "é"],
        "yú",
        "鱼 (yú) sử dụng vận mẫu tròn môi ü kết hợp y (bỏ hai chấm), đọc Thanh 2 đi lên."
      ),
    ],
  },

  // ==========================================
  // BÀI 2: Nhóm âm bật hơi & Âm mặt lưỡi
  // ==========================================
  {
    id: "hsk0-l2-aspirated",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "basic",
    lessonNumber: 2,
    title: "Bài 2: Nhóm âm bật hơi (p, t, k, q, ch, c) & Âm mặt lưỡi (j, q, x)",
    titleZh: "第二课：送气音与舌面音",
    titlePinyin: "Dì èr kè: Sòngqìyīn yǔ shémiànyīn",
    skillFocus: "speaking",
    difficulty: "easy",
    estimatedMinutes: 25,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Ứng Dụng",
    youtubeUrl: "https://www.youtube.com/watch?v=oQdGAypc-h8",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 2 送气音与舌面音",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "6 thanh mẫu bật hơi bắt buộc phải đẩy luồng hơi mạnh ra ngoài (thử đặt tờ giấy trước miệng, giấy phải rung mạnh): p, t, k, q, ch, c.",
      "Cặp đối lập không bật hơi vs bật hơi: b/p, d/t, g/k, j/q, zh/ch, z/c.",
      "Nhóm âm mặt lưỡi j, q, x: đầu lưỡi hạ xuống chạm mặt sau răng dưới, mặt lưỡi nâng lên sát ngạc cứng; khi kết hợp với ü thì viết bỏ hai chấm (ju, qu, xu).",
    ],
    newWords: [
      {
        hanzi: "怕",
        pinyin: "pà",
        partOfSpeech: "Động từ",
        meaningVi: "sợ (bật hơi mạnh ở p, đối lập với 爸 bà)",
        radical: "忄 (Tâm đứng)",
        strokeCount: 8,
      },
      {
        hanzi: "他",
        pinyin: "tā",
        partOfSpeech: "Đại từ",
        meaningVi: "anh ấy (bật hơi t, đối lập với 大 dà)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 5,
      },
      {
        hanzi: "看",
        pinyin: "kàn",
        partOfSpeech: "Động từ",
        meaningVi: "nhìn, xem (bật hơi k, đối lập với 干 gàn)",
        radical: "目 (Mục)",
        strokeCount: 9,
      },
      {
        hanzi: "七",
        pinyin: "qī",
        partOfSpeech: "Số từ",
        meaningVi: "số 7 (âm mặt lưỡi bật hơi q)",
        radical: "一 (Nhất)",
        strokeCount: 2,
      },
      {
        hanzi: "去",
        pinyin: "qù",
        partOfSpeech: "Động từ",
        meaningVi: "đi (q + ü viết thành qu)",
        radical: "厶 (Tư)",
        strokeCount: 5,
      },
      {
        hanzi: "家",
        pinyin: "jiā",
        partOfSpeech: "Danh từ",
        meaningVi: "nhà, gia đình (âm mặt lưỡi không bật hơi j)",
        radical: "宀 (Miên)",
        strokeCount: 10,
      },
      {
        hanzi: "谢",
        pinyin: "xiè",
        partOfSpeech: "Động từ",
        meaningVi: "cảm ơn (âm mặt lưỡi x, đọc nhẹ và kéo dài hơi)",
        radical: "讠 (Ngôn)",
        strokeCount: 12,
      },
      {
        hanzi: "吃",
        pinyin: "chī",
        partOfSpeech: "Động từ",
        meaningVi: "ăn (âm uốn lưỡi bật hơi ch)",
        radical: "口 (Khẩu)",
        strokeCount: 6,
      },
    ],
    dialogues: [
      {
        titleVi: "Thực hành 1: Luyện cặp âm không bật hơi & bật hơi",
        lines: [
          {
            speaker: "GV",
            zh: "爸爸不怕，他看书。",
            pinyin: "Bàba bú pà, tā kàn shū.",
            vi: "Bố không sợ, anh ấy đọc sách.",
          },
          {
            speaker: "HV",
            zh: "吃葡萄不吐葡萄皮。",
            pinyin: "Chī pútao bù tǔ pútaopí.",
            vi: "Ăn nho không nhả vỏ nho. (Luyện bật hơi ch, p, t)",
          },
        ],
      },
      {
        titleVi: "Thực hành 2: Luyện nhóm âm mặt lưỡi j, q, x",
        lines: [
          {
            speaker: "A",
            zh: "七点去你家，谢谢！",
            pinyin: "Qī diǎn qù nǐ jiā, xièxie!",
            vi: "7 giờ đến nhà bạn nhé, cảm ơn!",
          },
          {
            speaker: "B",
            zh: "不客气，请进！",
            pinyin: "Bú kèqi, qǐng jìn!",
            vi: "Đừng khách sáo, mời vào!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Nguyên tắc kiểm tra 6 âm bật hơi (p, t, k, q, ch, c)",
        formula: "Không bật hơi (b, d, g, j, zh, z) ↔ Bật hơi (p, t, k, q, ch, c)",
        explanationVi:
          "Người Việt thường đọc p gần giống b hoặc k giống c tiếng Việt nên thiếu luồng hơi. Hãy giữ một mẩu giấy mỏng cách miệng 3 cm: khi đọc p, t, k, q, ch, c tờ giấy phải bị thổi bay rõ rệt; khi đọc b, d, g, j, zh, z tờ giấy gần như đứng yên.",
        examples: [
          {
            zh: "爸 (bà) ≠ 怕 (pà)",
            pinyin: "bà (bố) ≠ pà (sợ)",
            vi: "Chỉ khác nhau ở luồng hơi bật ra từ hai môi.",
          },
          {
            zh: "哥 (gē) ≠ 科 (kē)",
            pinyin: "gē (anh trai) ≠ kē (khoa, môn)",
            vi: "k bật luồng hơi mạnh từ cuống họng.",
          },
        ],
      },
      {
        titleVi: "Quy tắc ghép vần của nhóm mặt lưỡi j, q, x với ü",
        formula: "j/q/x + ü → ju, qu, xu (bỏ 2 chấm nhưng vẫn đọc âm ü)",
        explanationVi:
          "Nhóm âm mặt lưỡi j, q, x không bao giờ đi với vận mẫu u, mà chỉ đi với i và ü. Vì không sợ nhầm lẫn với u, quy ước Pinyin bỏ hai dấu chấm trên ü khi viết sau j, q, x (ví dụ: 去 viết là qù, đọc là qǜ).",
        examples: [
          {
            zh: "去 (qù) — 句 (jù) — 需 (xū)",
            pinyin: "qù (đi) — jù (câu) — xū (cần)",
            vi: "Luôn chu tròn môi để đọc âm ü, tuyệt đối không đọc thành u.",
          },
          {
            zh: "谢谢 (xièxie)",
            pinyin: "xièxie (cảm ơn)",
            vi: "x phát âm với đầu lưỡi đặt sau răng dưới, đẩy hơi xát nhẹ.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk0-l2-q1",
        "爸爸不怕。",
        "Bàba bú pà.",
        "Thu âm phân biệt rõ b (không bật hơi) và p (bật hơi mạnh):",
        ["Không bật hơi b (bà)", "Bật hơi mạnh p (pà)"],
        "Âm 爸 (bà) không đẩy hơi, âm 怕 (pà) mím môi rồi bật luồng hơi mạnh ra ngoài."
      ),
      speakingShadowing(
        "hsk0-l2-q2",
        "他看书。",
        "Tā kàn shū.",
        "Thu âm luyện bật hơi t và k rõ ràng:",
        ["Bật hơi t (tā)", "Bật hơi k (kàn)"],
        "他 (tā) bật hơi ở đầu lưỡi, 看 (kàn) bật hơi từ gốc lưỡi."
      ),
      speakingShadowing(
        "hsk0-l2-q3",
        "七点去你家。",
        "Qī diǎn qù nǐ jiā.",
        "Thu âm luyện âm mặt lưỡi q (bật hơi), j (không bật hơi) và vần ü:",
        ["Mặt lưỡi bật hơi q (qī, qù)", "Vận mẫu tròn môi ü (qù)", "Mặt lưỡi j (jiā)"],
        "去 (qù) giữ môi tròn âm ü và bật hơi mạnh ở q; 家 (jiā) không bật hơi."
      ),
      speakingShadowing(
        "hsk0-l2-q4",
        "谢谢，不客气！",
        "Xièxie, bú kèqi!",
        "Thu âm câu giao tiếp chứa x, k, q (chú ý biến điệu 不 thành bú):",
        ["Âm mặt lưỡi x (xiè)", "Bật hơi k (kè)", "Thanh nhẹ (qi)"],
        "谢 (xiè) đọc mặt lưỡi nhẹ, 客 (kè) bật hơi mạnh ở k."
      ),
      speakingShadowing(
        "hsk0-l2-q5",
        "吃葡萄不吐葡萄皮。",
        "Chī pútao bù tǔ pútaopí.",
        "Thu âm câu líu lưỡi kinh điển luyện bật hơi ch, p, t:",
        ["Uốn lưỡi bật hơi ch (chī)", "Bật hơi p (pú, pí)", "Bật hơi t (tǔ)"],
        "Đảm bảo luồng hơi bật đều ở các âm chī, pú, tǔ, pí."
      ),
    ],
  },

  // ==========================================
  // BÀI 3: Phân biệt cặp âm khó cho người Việt
  // ==========================================
  {
    id: "hsk0-l3-confusing",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "basic",
    lessonNumber: 3,
    title: "Bài 3: Phân biệt cặp âm khó cho người Việt (z/c/s vs zh/ch/sh/r & en/eng, in/ing)",
    titleZh: "第三课：平翘舌音与前后鼻音辨析",
    titlePinyin: "Dì sān kè: Píng qiàoshéyīn yǔ qiánhòu bíyīn biànxī",
    skillFocus: "listening",
    difficulty: "easy",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Tiếng Trung Dương Châu",
    youtubeUrl: "https://www.youtube.com/watch?v=-Cx78hnXfgM",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 3 平翘舌音与前后鼻音辨析",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "Âm đầu lưỡi phẳng (z, c, s): lưỡi duỗi thẳng chạm mặt sau răng cửa trên/dưới, không uốn lưỡi.",
      "Âm đầu lưỡi uốn (zh, ch, sh, r): cong đầu lưỡi lên chạm vòm miệng cứng; khi đi với i (zhi, chi, shi, ri, zi, ci, si), chữ i đọc là âm ư ngắn chứ không đọc là i.",
      "Vần mũi trước (-n: an, en, in) kết thúc bằng đầu lưỡi chạm lợi trên; vần mũi sau (-ng: ang, eng, ing) mở rộng khoang miệng, đẩy âm vang lên mũi từ cuống lưỡi.",
    ],
    newWords: [
      {
        hanzi: "四",
        pinyin: "sì",
        partOfSpeech: "Số từ",
        meaningVi: "số 4 (âm phẳng s, không uốn lưỡi)",
        radical: "囗 (Vi)",
        strokeCount: 5,
      },
      {
        hanzi: "十",
        pinyin: "shí",
        partOfSpeech: "Số từ",
        meaningVi: "số 10 (âm uốn lưỡi sh)",
        radical: "十 (Thập)",
        strokeCount: 2,
      },
      {
        hanzi: "早",
        pinyin: "zǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "sớm, buổi sáng (âm phẳng z)",
        radical: "日 (Nhật)",
        strokeCount: 6,
      },
      {
        hanzi: "找",
        pinyin: "zhǎo",
        partOfSpeech: "Động từ",
        meaningVi: "tìm kiếm (âm uốn lưỡi zh)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 7,
      },
      {
        hanzi: "菜",
        pinyin: "cài",
        partOfSpeech: "Danh từ",
        meaningVi: "rau, món ăn (âm phẳng bật hơi c)",
        radical: "艹 (Thảo đầu)",
        strokeCount: 11,
      },
      {
        hanzi: "茶",
        pinyin: "chá",
        partOfSpeech: "Danh từ",
        meaningVi: "trà (âm uốn lưỡi bật hơi ch)",
        radical: "艹 (Thảo đầu)",
        strokeCount: 9,
      },
      {
        hanzi: "人",
        pinyin: "rén",
        partOfSpeech: "Danh từ",
        meaningVi: "người (vần mũi trước -en)",
        radical: "人 (Nhân)",
        strokeCount: 2,
      },
      {
        hanzi: "冷",
        pinyin: "lěng",
        partOfSpeech: "Tính từ",
        meaningVi: "lạnh (vần mũi sau -eng)",
        radical: "冫 (Băng)",
        strokeCount: 7,
      },
    ],
    dialogues: [
      {
        titleVi: "Thực hành 1: Cặp âm phẳng s vs uốn lưỡi sh (四 và 十)",
        lines: [
          {
            speaker: "GV",
            zh: "四是四，十是十。",
            pinyin: "Sì shì sì, shí shì shí.",
            vi: "Bốn là bốn, mười là mười.",
          },
          {
            speaker: "HV",
            zh: "十四是十四，四十是四十。",
            pinyin: "Shísì shì shísì, sìshí shì sìshí.",
            vi: "Mười bốn là mười bốn, bốn mươi là bốn mươi.",
          },
        ],
      },
      {
        titleVi: "Thực hành 2: Phân biệt vần mũi trước -n và mũi sau -ng",
        lines: [
          {
            speaker: "A",
            zh: "今天很冷，我想喝热茶。",
            pinyin: "Jīntiān hěn lěng, wǒ xiǎng hē rè chá.",
            vi: "Hôm nay rất lạnh, tôi muốn uống trà nóng.",
          },
          {
            speaker: "B",
            zh: "好，我请你吃中国菜。",
            pinyin: "Hǎo, wǒ qǐng nǐ chī Zhōngguó cài.",
            vi: "Được, tôi mời bạn ăn món Trung Quốc.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Phân biệt nhóm phẳng lưỡi (z, c, s) và uốn lưỡi (zh, ch, sh, r)",
        formula: "z/c/s (lưỡi thẳng, âm sắc gọn) ↔ zh/ch/sh/r (lưỡi cong, âm dày ấm)",
        explanationVi:
          "Lỗi phổ biến nhất của người Việt là đọc lẫn lộn 四 (sì — 4) và 十 (shí — 10), hoặc 菜 (cài — món ăn) và 茶 (chá — trà). Mẹo: khi đọc zh/ch/sh/r, hãy cong đầu lưỡi chạm nhẹ lên vòm miệng trên và hơi chu môi.",
        examples: [
          {
            zh: "早 (zǎo) ≠ 找 (zhǎo)",
            pinyin: "zǎo (sớm) ≠ zhǎo (tìm)",
            vi: "z thẳng lưỡi, zh cong đầu lưỡi.",
          },
          {
            zh: "四 (sì) ≠ 十 (shí)",
            pinyin: "sì (bốn) ≠ shí (mười)",
            vi: "Chú ý cả vị trí lưỡi lẫn thanh điệu (T4 vs T2).",
          },
        ],
      },
      {
        titleVi: "Phân biệt vần mũi trước (-en, -in) và vần mũi sau (-eng, -ing)",
        formula: "-en / -in (khép nhẹ, đầu lưỡi chạm lợi) ↔ -eng / -ing (mở họng, vang mũi)",
        explanationVi:
          "Vần -en (như 人 rén, 很 hěn) nghe gọn và sáng; vần -eng (như 冷 lěng, 朋友 péngyou) có độ vang trầm ở gốc lưỡi. Tương tự, -in (心 xīn — tim) khác hoàn toàn -ing (星 xīng — ngôi sao).",
        examples: [
          {
            zh: "心 (xīn) ≠ 星 (xīng)",
            pinyin: "xīn (trái tim) ≠ xīng (ngôi sao)",
            vi: "Nghe kỹ độ vang mũi ở cuối âm tiết.",
          },
          {
            zh: "很 (hěn) — 冷 (lěng)",
            pinyin: "hěn lěng (rất lạnh)",
            vi: "Luyện chuyển mượt từ -en sang -eng trong cùng một cụm từ.",
          },
        ],
      },
    ],
    exercises: [
      listeningMcq(
        "hsk0-l3-q1",
        "十四",
        "shísì",
        "Nghe số đếm và chọn đúng giá trị vừa nghe được:",
        ["14 (shísì)", "40 (sìshí)", "4 (sì)", "10 (shí)"],
        "14 (shísì)",
        "十四 (shísì) bắt đầu bằng âm uốn lưỡi shí (10), sau đó là âm phẳng sì (4)."
      ),
      listeningMcq(
        "hsk0-l3-q2",
        "找",
        "zhǎo",
        "Nghe và phân biệt âm phẳng z hay âm uốn lưỡi zh:",
        ["找 (zhǎo — tìm)", "早 (zǎo — sớm)", "草 (cǎo — cỏ)", "少 (shǎo — ít)"],
        "找 (zhǎo — tìm)",
        "找 (zhǎo) có âm sắc dày và trầm nhờ đầu lưỡi uốn lên vòm miệng."
      ),
      listeningFill(
        "hsk0-l3-q3",
        "茶",
        "我想喝____。",
        "Wǒ xiǎng hē chá.",
        "Nghe và điền chữ Hán (phân biệt 菜 cài và 茶 chá):",
        "茶",
        "茶 (chá) là âm uốn lưỡi bật hơi ch kết hợp thanh 2, nghĩa là trà."
      ),
      listeningDialogue(
        "hsk0-l3-q4",
        "今天很冷，我想喝热茶。",
        "Jīntiān hěn lěng, wǒ xiǎng hē rè chá.",
        "Nghe câu hội thoại và chọn thông tin đúng:",
        [
          "Hôm nay rất lạnh, người nói muốn uống trà nóng",
          "Hôm nay rất nóng, người nói muốn uống nước lạnh",
          "Hôm nay người nói đi ăn món Trung Quốc",
          "Hôm nay trời mưa rất to",
        ],
        "Hôm nay rất lạnh, người nói muốn uống trà nóng",
        "Nghe rõ cặp vần mũi trước/sau 很冷 (hěn lěng) và âm uốn lưỡi 热茶 (rè chá)."
      ),
      listeningMcq(
        "hsk0-l3-q5",
        "冷",
        "lěng",
        "Nghe và chọn đúng Pinyin có vần mũi sau (-eng):",
        ["lěng", "lěn", "lín", "lìng"],
        "lěng",
        "冷 (lěng) kết thúc bằng âm mũi sau -eng vang từ cuống lưỡi."
      ),
    ],
  },

  // ==========================================
  // BÀI 4: Quy tắc biến điệu & Thanh nhẹ
  // ==========================================
  {
    id: "hsk0-l4-sandhi",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "advanced",
    lessonNumber: 4,
    title: "Bài 4: Quy tắc biến điệu Thanh 3, 一 (yī), 不 (bù) & Thanh nhẹ",
    titleZh: "第四课：变调规则与轻声",
    titlePinyin: "Dì sì kè: Biàndiào guīzé yǔ qīngshēng",
    skillFocus: "speaking",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "HN NgoaiNgu",
    youtubeUrl: "https://www.youtube.com/watch?v=VMEkbgAONrQ",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 4 变调规则与轻声",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "Biến điệu Thanh 3: Khi hai Thanh 3 đứng liền nhau (3 + 3), chữ đầu đọc thành Thanh 2 (2 + 3). Ví dụ: 你好 (nǐ hǎo → ní hǎo).",
      "Biến điệu 不 (bù): Đứng trước Thanh 4 thì đọc thành Thanh 2 (bú), ví dụ: 不是 (bú shì), 不对 (bú duì). Đứng trước Thanh 1, 2, 3 giữ nguyên bù.",
      "Biến điệu 一 (yī): Đứng trước Thanh 4 đọc yí (一个 yí gè); đứng trước Thanh 1, 2, 3 đọc yì (一天 yì tiān, 一起 yìqǐ); đứng một mình hoặc số thứ tự giữ nguyên yī.",
    ],
    newWords: [
      {
        hanzi: "你好",
        pinyin: "nǐ hǎo",
        partOfSpeech: "Cụm từ",
        meaningVi: "xin chào (biến điệu đọc là ní hǎo)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 13,
      },
      {
        hanzi: "很好",
        pinyin: "hěn hǎo",
        partOfSpeech: "Cụm từ",
        meaningVi: "rất tốt (biến điệu đọc là hén hǎo)",
        radical: "彳 (Xích)",
        strokeCount: 15,
      },
      {
        hanzi: "不是",
        pinyin: "bú shì",
        partOfSpeech: "Cụm từ",
        meaningVi: "không phải (不 đứng trước thanh 4 đọc bú)",
        radical: "一 (Nhất)",
        strokeCount: 13,
      },
      {
        hanzi: "不好",
        pinyin: "bù hǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "không tốt (不 đứng trước thanh 3 giữ nguyên bù)",
        radical: "一 (Nhất)",
        strokeCount: 10,
      },
      {
        hanzi: "一个",
        pinyin: "yí gè",
        partOfSpeech: "Cụm từ",
        meaningVi: "một cái (一 đứng trước thanh 4 đọc yí)",
        radical: "一 (Nhất)",
        strokeCount: 4,
      },
      {
        hanzi: "一起",
        pinyin: "yìqǐ",
        partOfSpeech: "Phó từ",
        meaningVi: "cùng nhau (一 đứng trước thanh 3 đọc yì)",
        radical: "一 (Nhất)",
        strokeCount: 11,
      },
      {
        hanzi: "妈妈",
        pinyin: "māma",
        partOfSpeech: "Danh từ",
        meaningVi: "mẹ (âm tiết thứ hai đọc thanh nhẹ)",
        radical: "女 (Nữ)",
        strokeCount: 12,
      },
      {
        hanzi: "朋友",
        pinyin: "péngyou",
        partOfSpeech: "Danh từ",
        meaningVi: "bạn bè (chữ 友 đọc thanh nhẹ)",
        radical: "月 (Nguyệt)",
        strokeCount: 12,
      },
    ],
    dialogues: [
      {
        titleVi: "Thực hành 1: Biến điệu Thanh 3 và 不 (bù)",
        lines: [
          {
            speaker: "A",
            zh: "你好！你今天好吗？",
            pinyin: "Nǐ hǎo! Nǐ jīntiān hǎo ma?",
            vi: "Xin chào! Hôm nay bạn khỏe không?",
          },
          {
            speaker: "B",
            zh: "我很好，不是不好，谢谢你！",
            pinyin: "Wǒ hěn hǎo, bú shì bù hǎo, xièxie nǐ!",
            vi: "Tôi rất khỏe, không phải không khỏe, cảm ơn bạn!",
          },
        ],
      },
      {
        titleVi: "Thực hành 2: Biến điệu 一 (yī) và Thanh nhẹ",
        lines: [
          {
            speaker: "A",
            zh: "我有一个好朋友。",
            pinyin: "Wǒ yǒu yí gè hǎo péngyou.",
            vi: "Tôi có một người bạn tốt.",
          },
          {
            speaker: "B",
            zh: "我们一起去看妈妈吧！",
            pinyin: "Wǒmen yìqǐ qù kàn māma ba!",
            vi: "Chúng ta cùng nhau đi thăm mẹ nhé!",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Quy tắc biến điệu của 一 (yī) và 不 (bù)",
        formula: "不 + T4 → bú | 一 + T4 → yí | 一 + T1/T2/T3 → yì",
        explanationVi:
          "Biến điệu giúp câu nói tiếng Trung tự nhiên, không bị gãy nhịp khi hai thanh 4 rơi mạnh liên tiếp. Khi viết Pinyin chuẩn theo từ điển vẫn có thể ghi thanh gốc, nhưng khi nói bắt buộc phải đổi thanh.",
        examples: [
          {
            zh: "不是 (bú shì) — 不去 (bú qù)",
            pinyin: "bú shì (không phải) — bú qù (không đi)",
            vi: "不 đổi thành thanh 2 vì theo sau là thanh 4.",
          },
          {
            zh: "一个 (yí gè) — 一天 (yì tiān)",
            pinyin: "yí gè (một cái) — yì tiān (một ngày)",
            vi: "一 đổi thành yí trước thanh 4 và yì trước thanh 1, 2, 3.",
          },
        ],
      },
      {
        titleVi: "Cách đọc Thanh nhẹ (轻声 — Qīngshēng)",
        formula: "Âm tiết mang thanh nhẹ: đọc ngắn, nhẹ, không dấu",
        explanationVi:
          "Thanh nhẹ thường xuất hiện ở từ láy thân thuộc (妈妈, 爸爸), trợ từ ngữ khí (吗, 吧, 呢), hậu tố (们, 子) và một số từ hai âm tiết cố định (朋友 péngyou, 谢谢 xièxie). Độ cao của thanh nhẹ phụ thuộc vào thanh điệu đứng ngay trước nó.",
        examples: [
          {
            zh: "好吗？(hǎo ma?) — 我们 (wǒmen)",
            pinyin: "hǎo ma? (khỏe không?) — wǒmen (chúng tôi)",
            vi: "吗 và 们 lướt rất ngắn và nhẹ.",
          },
          {
            zh: "朋友 (péngyou)",
            pinyin: "péngyou (bạn bè)",
            vi: "Đọc nhấn rõ péng, thả nhẹ hoàn toàn ở you.",
          },
        ],
      },
    ],
    exercises: [
      speakingShadowing(
        "hsk0-l4-q1",
        "你好，我很好！",
        "Nǐ hǎo, wǒ hěn hǎo!",
        "Thu âm chú ý biến điệu Thanh 3 (ní hǎo, wǒ hén hǎo):",
        ["Biến điệu 3+3 (ní hǎo)", "Biến điệu 3+3+3 (wǒ hén hǎo)"],
        "你好 đọc thành ní hǎo; trong 我很好, 很 nâng lên thanh 2 thành hén hǎo."
      ),
      speakingShadowing(
        "hsk0-l4-q2",
        "不是不好。",
        "Bú shì bù hǎo.",
        "Thu âm phân biệt rõ biến điệu của 不 trước Thanh 4 và Thanh 3:",
        ["Biến điệu 不 + T4 (bú shì)", "Giữ nguyên 不 + T3 (bù hǎo)"],
        "不是 đọc lên giọng bú shì, còn 不好 giữ nguyên thanh 4 bù hǎo."
      ),
      speakingShadowing(
        "hsk0-l4-q3",
        "我有一个好朋友。",
        "Wǒ yǒu yí gè hǎo péngyou.",
        "Thu âm luyện biến điệu 一 + T4 (yí gè) và thanh nhẹ (péngyou):",
        ["Biến điệu 一 + T4 (yí gè)", "Thanh nhẹ (you)"],
        "一个 đọc là yí gè, 朋友 thả nhẹ âm tiết sau thành péngyou."
      ),
      speakingShadowing(
        "hsk0-l4-q4",
        "我们一起去吧！",
        "Wǒmen yìqǐ qù ba!",
        "Thu âm luyện biến điệu 一 + T3 (yìqǐ) và thanh nhẹ (men, ba):",
        ["Biến điệu 一 + T3 (yìqǐ)", "Thanh nhẹ (men, ba)"],
        "一起 đọc dứt khoát yìqǐ, 们 và 吧 lướt nhẹ."
      ),
      speakingShadowing(
        "hsk0-l4-q5",
        "妈妈，您今天好吗？",
        "Māma, nín jīntiān hǎo ma?",
        "Thu âm câu hỏi tự nhiên có thanh nhẹ ở 妈妈 và 吗:",
        ["Thanh nhẹ láy âm (māma)", "Trợ từ thanh nhẹ (ma)"],
        "Âm tiết thứ hai của 妈妈 và trợ từ 吗 đọc ngắn, nhẹ, không nhấn."
      ),
    ],
  },

  // ==========================================
  // BÀI 5: 8 Nét cơ bản & 7 Quy tắc bút thuận
  // ==========================================
  {
    id: "hsk0-l5-strokes",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "advanced",
    lessonNumber: 5,
    title: "Bài 5: 8 Nét cơ bản (永字八法) & 7 Quy tắc bút thuận chữ Hán",
    titleZh: "第五课：汉字基本笔画与笔顺规则",
    titlePinyin: "Dì wǔ kè: Hànzì jīběn bǐhuà yǔ bǐshùn guīzé",
    skillFocus: "writing",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Thành Luân Books",
    youtubeUrl: "https://www.youtube.com/watch?v=KA0_-pd76Zs",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 5 汉字基本笔画与笔顺规则",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "Chữ 永 (yǒng — vĩnh cửu) hội tụ đủ 8 nét cơ bản của chữ Hán (永字八法): Chấm (丶), Ngang (一), Sổ (丨), Phẩy (丿), Mác (㇏), Hất (㇀), Gập (ㄱ), Móc (亅).",
      "7 quy tắc bút thuận vàng: (1) Ngang trước sổ sau, (2) Phẩy trước mác sau, (3) Trên trước dưới sau, (4) Trái trước phải sau, (5) Ngoài trước trong sau, (6) Vào trước đóng sau, (7) Giữa trước hai bên sau.",
      "Viết đúng bút thuận giúp chữ cân đối trên ô Mễ tự cách, tra từ điển viết tay nhanh và ghi nhớ mặt chữ lâu hơn.",
    ],
    newWords: [
      {
        hanzi: "永",
        pinyin: "yǒng",
        partOfSpeech: "Tính từ",
        meaningVi: "vĩnh viễn (chữ mẫu chứa đủ 8 nét cơ bản)",
        radical: "水 (Thủy)",
        strokeCount: 5,
      },
      {
        hanzi: "十",
        pinyin: "shí",
        partOfSpeech: "Số từ",
        meaningVi: "mười (quy tắc: Ngang trước, sổ sau)",
        radical: "十 (Thập)",
        strokeCount: 2,
      },
      {
        hanzi: "人",
        pinyin: "rén",
        partOfSpeech: "Danh từ",
        meaningVi: "người (quy tắc: Phẩy trước, mác sau)",
        radical: "人 (Nhân)",
        strokeCount: 2,
      },
      {
        hanzi: "三",
        pinyin: "sān",
        partOfSpeech: "Số từ",
        meaningVi: "ba (quy tắc: Trên trước, dưới sau)",
        radical: "一 (Nhất)",
        strokeCount: 3,
      },
      {
        hanzi: "小",
        pinyin: "xiǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "nhỏ (quy tắc: Giữa trước, hai bên sau)",
        radical: "小 (Tiểu)",
        strokeCount: 3,
      },
      {
        hanzi: "国",
        pinyin: "guó",
        partOfSpeech: "Danh từ",
        meaningVi: "đất nước (quy tắc: Vào trước, đóng sau)",
        radical: "囗 (Vi)",
        strokeCount: 8,
      },
      {
        hanzi: "大",
        pinyin: "dà",
        partOfSpeech: "Tính từ",
        meaningVi: "to, lớn (ngang → phẩy → mác)",
        radical: "大 (Đại)",
        strokeCount: 3,
      },
      {
        hanzi: "水",
        pinyin: "shuǐ",
        partOfSpeech: "Danh từ",
        meaningVi: "nước (sổ móc giữa trước, hai bên sau)",
        radical: "水 (Thủy)",
        strokeCount: 4,
      },
    ],
    dialogues: [
      {
        titleVi: "Thực hành 1: Ghi nhớ 7 quy tắc bút thuận qua chữ mẫu",
        lines: [
          {
            speaker: "GV",
            zh: "先横后竖写“十”，先撇后捺写“人”。",
            pinyin: "Xiān héng hòu shù xiě 'shí', xiān piě hòu nà xiě 'rén'.",
            vi: "Ngang trước sổ sau viết chữ '十', phẩy trước mác sau viết chữ '人'.",
          },
          {
            speaker: "HV",
            zh: "先中间后两边写“小”和“水”。",
            pinyin: "Xiān zhōngjiān hòu liǎngbiān xiě 'xiǎo' hé 'shuǐ'.",
            vi: "Giữa trước hai bên sau viết chữ '小' và '水'.",
          },
        ],
      },
      {
        titleVi: "Thực hành 2: Quy tắc Vào trước đóng sau",
        lines: [
          {
            speaker: "A",
            zh: "“国”字最后写哪一笔？",
            pinyin: "'Guó' zì zuìhòu xiě nǎ yì bǐ?",
            vi: "Chữ '国' nét cuối cùng viết nét nào?",
          },
          {
            speaker: "B",
            zh: "先写里面的“玉”，最后封口写底横。",
            pinyin: "Xiān xiě lǐmiàn de 'yù', zuìhòu fēngkǒu xiě dǐ héng.",
            vi: "Viết chữ '玉' ở bên trong trước, cuối cùng mới đóng khung bằng nét ngang đáy.",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "8 nét cơ bản của chữ Hán (永字八法)",
        formula: "点 (丶) · 横 (一) · 竖 (丨) · 撇 (丿) · 捺 (㇏) · 提 (㇀) · 折 (ㄱ) · 钩 (亅)",
        explanationVi:
          "Mọi chữ Hán dù phức tạp đến đâu đều được cấu tạo từ 8 nét cơ bản này và các biến thể của chúng. Lưu ý: nét Ngang luôn viết từ trái sang phải, nét Sổ từ trên xuống dưới, nét Phẩy từ trên phải xuống dưới trái, nét Mác từ trên trái xuống dưới phải.",
        examples: [
          {
            zh: "永 (yǒng — 5 nét gộp đủ 8 thế bút)",
            pinyin: "Chấm → Ngang gập sổ móc → Ngang phẩy → Phẩy → Mác",
            vi: "Luyện chữ 永 giúp tay quen với hầu hết các hướng bút trong chữ Hán.",
          },
          {
            zh: "大 (dà — 3 nét)",
            pinyin: "Ngang (一) → Phẩy (丿) → Mác (㇏)",
            vi: "Áp dụng đồng thời quy tắc trên trước dưới sau và phẩy trước mác sau.",
          },
        ],
      },
      {
        titleVi: "7 quy tắc bút thuận chuẩn quốc tế",
        formula: "Ngang-Sổ | Phẩy-Mác | Trên-Dưới | Trái-Phải | Ngoài-Trong | Vào-Đóng | Giữa-Hai bên",
        explanationVi:
          "Khi gặp chữ có khung bao quanh như 国 (guó), 日 (rì), 回 (huí), luôn viết khung trái và trên trước, viết hết phần ruột bên trong rồi mới đóng nét ngang đáy sau cùng.",
        examples: [
          {
            zh: "小 (xiǎo): 亅 → ノ → 丶",
            pinyin: "Sổ móc giữa → Chấm trái → Chấm phải",
            vi: "Quy tắc Giữa trước, hai bên sau (áp dụng cho chữ đối xứng).",
          },
          {
            zh: "国 (guó): 丨 → ┐ → 玉 → 一",
            pinyin: "Khung ngoài → Ruột 玉 → Đóng ngang đáy",
            vi: "Quy tắc Vào trước, đóng sau.",
          },
        ],
      },
    ],
    exercises: [
      writingStroke(
        "hsk0-l5-q1",
        "永",
        "yǒng",
        "vĩnh viễn (chữ mẫu 8 nét cơ bản)",
        "Thứ tự nét: Chấm trên → Ngang gập sổ móc → Ngang phẩy trái → Phẩy phải → Mác phải."
      ),
      writingStroke(
        "hsk0-l5-q2",
        "小",
        "xiǎo",
        "nhỏ (quy tắc giữa trước, hai bên sau)",
        "Viết nét sổ móc (亅) ở giữa trước, sau đó viết nét phẩy/chấm bên trái rồi mới đến chấm bên phải."
      ),
      writingStroke(
        "hsk0-l5-q3",
        "水",
        "shuǐ",
        "nước (quy tắc giữa trước, hai bên sau)",
        "Viết sổ móc giữa trước, tiếp đến ngang phẩy bên trái, cuối cùng là phẩy và mác bên phải."
      ),
      writingStroke(
        "hsk0-l5-q4",
        "国",
        "guó",
        "đất nước (quy tắc vào trước, đóng sau)",
        "Viết nét sổ trái, ngang gập phải, viết trọn bộ 玉 bên trong rồi cuối cùng mới đóng nét ngang đáy."
      ),
      writingOrder(
        "hsk0-l5-q5",
        "Sắp xếp đúng thứ tự câu mô tả quy tắc bút thuận chữ '十' và '人':",
        ["先横后竖", "写“十”，", "先撇后捺", "写“人”。"],
        "先横后竖写“十”，先撇后捺写“人”。",
        "Xiān héng hòu shù xiě 'shí', xiān piě hòu nà xiě 'rén'.",
        "Quy tắc chuẩn: Ngang trước sổ sau (先横后竖) viết chữ 十, phẩy trước mác sau (先撇后捺) viết chữ 人."
      ),
    ],
  },

  // ==========================================
  // BÀI 6: 50 Bộ thủ cốt lõi & Chiết tự ghi nhớ
  // ==========================================
  {
    id: "hsk0-l6-radicals",
    stageId: 0,
    hskLevel: "HSK0",
    subDifficulty: "advanced",
    lessonNumber: 6,
    title: "Bài 6: 50 Bộ thủ cốt lõi & Chiết tự ghi nhớ chữ Hán siêu tốc",
    titleZh: "第六课：核心部首与汉字拆字记忆法",
    titlePinyin: "Dì liù kè: Héxīn bùshǒu yǔ Hànzì chāizì jìyìfǎ",
    skillFocus: "reading",
    difficulty: "medium",
    estimatedMinutes: 30,
    recommendedChannelId: "speaking-cam-xu",
    recommendedChannelName: "Lớp thư pháp Hán Tự Linh Táo 漢字書法班",
    youtubeUrl: "https://www.youtube.com/watch?v=4h8Yhg-J-UQ",
    defaultSearchQuery: "Giáo trình chuẩn HSK 0 Bài 6 核心部首与汉字拆字记忆法",
    attachedResourceIds: ["res-5-pronunciation-video", "res-8-visual-vocab"],
    grammarNotesVi: [
      "Hơn 80% chữ Hán là chữ Hình Thanh: gồm 1 Bộ thủ biểu thị Ý NGHĨA (hình phù) và 1 thành phần gợi ý ÂM ĐỌC (thanh phù).",
      "Nắm vững 50 bộ thủ cốt lõi (亻 người, 氵 nước, 口 miệng, 女 phụ nữ, 讠 ngôn ngữ, 木 cây cối, 心/忄 tâm trí, 扌 tay, 艹 thảo mộc...) giúp bạn đoán nghĩa chữ mới ngay cả khi chưa từng học.",
      "Phương pháp Chiết tự (tách chữ thành câu chuyện): ví dụ 好 (tốt) = 女 (phụ nữ) + 子 (con trai); 休 (nghỉ ngơi) = 亻 (người) + 木 (cây) → người tựa gốc cây nghỉ ngơi.",
    ],
    newWords: [
      {
        hanzi: "好",
        pinyin: "hǎo",
        partOfSpeech: "Tính từ",
        meaningVi: "tốt, đẹp (女 phụ nữ + 子 con cái)",
        radical: "女 (Nữ)",
        strokeCount: 6,
      },
      {
        hanzi: "休",
        pinyin: "xiū",
        partOfSpeech: "Động từ",
        meaningVi: "nghỉ ngơi (亻 người + 木 cây)",
        radical: "亻 (Nhân đứng)",
        strokeCount: 6,
      },
      {
        hanzi: "明",
        pinyin: "míng",
        partOfSpeech: "Tính từ",
        meaningVi: "sáng sủa (日 mặt trời + 月 mặt trăng)",
        radical: "日 (Nhật)",
        strokeCount: 8,
      },
      {
        hanzi: "河",
        pinyin: "hé",
        partOfSpeech: "Danh từ",
        meaningVi: "con sông (氵 nước + 可 gợi âm)",
        radical: "氵 (Chấm thủy)",
        strokeCount: 8,
      },
      {
        hanzi: "话",
        pinyin: "huà",
        partOfSpeech: "Danh từ",
        meaningVi: "lời nói (讠 ngôn ngữ + 舌 cái lưỡi)",
        radical: "讠 (Ngôn)",
        strokeCount: 8,
      },
      {
        hanzi: "林",
        pinyin: "lín",
        partOfSpeech: "Danh từ",
        meaningVi: "rừng (木 cây + 木 cây)",
        radical: "木 (Mộc)",
        strokeCount: 8,
      },
      {
        hanzi: "想",
        pinyin: "xiǎng",
        partOfSpeech: "Động từ",
        meaningVi: "nghĩ, nhớ, muốn (相 gợi âm + 心 trái tim)",
        radical: "心 (Tâm)",
        strokeCount: 13,
      },
      {
        hanzi: "打",
        pinyin: "dǎ",
        partOfSpeech: "Động từ",
        meaningVi: "đánh, gọi điện (扌 tay + 丁 gợi âm)",
        radical: "扌 (Tài gẩy)",
        strokeCount: 5,
      },
    ],
    dialogues: [
      {
        titleVi: "Bài đọc 1: Chiết tự nhóm chữ Hội ý kinh điển",
        lines: [
          {
            speaker: "Đoạn 1",
            zh: "“日”和“月”在一起是“明”，意思是明亮。",
            pinyin: "'Rì' hé 'yuè' zài yìqǐ shì 'míng', yìsi shì míngliàng.",
            vi: "Mặt trời (日) và mặt trăng (月) ở cùng nhau tạo thành chữ '明', nghĩa là sáng sủa.",
          },
          {
            speaker: "Đoạn 2",
            zh: "一个人靠在树（木）旁，就是“休”，意思是休息。",
            pinyin: "Yí gè rén kào zài shù (mù) páng, jiùshì 'xiū', yìsi shì xiūxi.",
            vi: "Một người (亻) tựa bên gốc cây (木) chính là chữ '休', nghĩa là nghỉ ngơi.",
          },
        ],
      },
      {
        titleVi: "Bài đọc 2: Đoán nghĩa chữ Hình thanh qua Bộ thủ",
        lines: [
          {
            speaker: "Đoạn 1",
            zh: "有“氵”（三点水）的字常和水有关，比如“河”、“海”、“洗”。",
            pinyin: "Yǒu '氵' (sāndiǎnshuǐ) de zì cháng hé shuǐ yǒuguān, bǐrú 'hé', 'hǎi', 'xǐ'.",
            vi: "Chữ có bộ Chấm thủy (氵) thường liên quan đến nước, ví dụ: sông (河), biển (海), rửa (洗).",
          },
          {
            speaker: "Đoạn 2",
            zh: "有“讠”（言字旁）的字常和说话有关，比如“话”、“说”、“请”。",
            pinyin: "Yǒu '讠' (yánzìpáng) de zì cháng hé shuōhuà yǒuguān, bǐrú 'huà', 'shuō', 'qǐng'.",
            vi: "Chữ có bộ Ngôn (讠) thường liên quan đến lời nói, ví dụ: lời nói (话), nói (说), mời (请).",
          },
        ],
      },
    ],
    grammarPoints: [
      {
        titleVi: "Nhóm bộ thủ chỉ Tự nhiên & Con người thường gặp nhất",
        formula: "亻 (người) · 女 (nữ) · 口 (miệng) · 扌 (tay) · 氵 (nước) · 木 (cây) · 心/忄 (tâm)",
        explanationVi:
          "Khi nhìn thấy một chữ Hán lạ, bước đầu tiên là xác định bộ thủ (thường nằm bên trái hoặc phía trên/dưới) để khoanh vùng trường nghĩa: 扌 liên quan hành động tay (打, 找), 心/忄 liên quan cảm xúc suy nghĩ (想, 怕).",
        examples: [
          {
            zh: "木 (cây) → 林 (rừng 2 cây) → 森 (rừng rậm 3 cây)",
            pinyin: "mù → lín → sēn",
            vi: "Nhân đôi/nhân ba bộ thủ tạo nên nghĩa mở rộng rất trực quan.",
          },
          {
            zh: "扌 (tay): 打 (đánh), 找 (tìm)",
            pinyin: "dǎ, zhǎo",
            vi: "Đều là động từ thực hiện bằng tay.",
          },
        ],
      },
      {
        titleVi: "Cấu tạo chữ Hình Thanh (形声字) — Bí quyết nhớ nhanh 80% chữ Hán",
        formula: "Chữ Hình Thanh = Bộ thủ (chỉ Nghĩa) + Thành phần (gợi Âm)",
        explanationVi:
          "Hiểu cấu tạo Hình Thanh giúp bạn học 1 chữ biết 5 chữ cùng họ. Ví dụ từ chữ 马 (mǎ — ngựa): thêm 女 (nữ) thành 妈 (mā — mẹ), thêm 口 (miệng) thành 吗 (ma — không?), thêm 2 口 thành 骂 (mà — mắng).",
        examples: [
          {
            zh: "妈 (mā) = 女 (nghĩa: phụ nữ) + 马 (gợi âm: ma)",
            pinyin: "mā (mẹ)",
            vi: "Bộ 女 cho biết liên quan đến phụ nữ, chữ 马 gợi âm đọc.",
          },
          {
            zh: "河 (hé) = 氵 (nghĩa: nước) + 可 (gợi âm)",
            pinyin: "hé (con sông)",
            vi: "Bộ 氵 cho biết liên quan đến nước.",
          },
        ],
      },
    ],
    exercises: [
      readingComp(
        "hsk0-l6-q1",
        "“日”和“月”在一起是“明”，意思是明亮。",
        "'Rì' hé 'yuè' zài yìqǐ shì 'míng', yìsi shì míngliàng.",
        "Mặt trời (日) và mặt trăng (月) ở cùng nhau tạo thành chữ '明', nghĩa là sáng sủa.",
        "Theo đoạn đọc, chữ 明 (míng) được ghép từ hai bộ thủ nào?",
        ["日 (mặt trời) và 月 (mặt trăng)", "亻 (người) và 木 (cây)", "女 (nữ) và 子 (con)", "氵 (nước) và 口 (miệng)"],
        "日 (mặt trời) và 月 (mặt trăng)",
        "明 = 日 + 月, hội tụ cả ánh sáng mặt trời và mặt trăng nên có nghĩa là sáng sủa."
      ),
      readingComp(
        "hsk0-l6-q2",
        "一个人靠在树（木）旁，就是“休”，意思是休息。",
        "Yí gè rén kào zài shù (mù) páng, jiùshì 'xiū', yìsi shì xiūxi.",
        "Một người (亻) tựa bên gốc cây (木) chính là chữ '休', nghĩa là nghỉ ngơi.",
        "Chữ 休 (xiū) có nghĩa là gì dựa theo cách chiết tự trên?",
        ["Nghỉ ngơi", "Chạy bộ", "Đọc sách", "Ăn cơm"],
        "Nghỉ ngơi",
        "亻 (người) đứng tựa vào 木 (cây) biểu thị hình ảnh người nghỉ ngơi dưới bóng cây."
      ),
      readingComp(
        "hsk0-l6-q3",
        "有“氵”（三点水）的字常和水有关，比如“河”、“海”、“洗”。",
        "Yǒu '氵' (sāndiǎnshuǐ) de zì cháng hé shuǐ yǒuguān, bǐrú 'hé', 'hǎi', 'xǐ'.",
        "Chữ có bộ Chấm thủy (氵) thường liên quan đến nước, ví dụ: sông (河), biển (海), rửa (洗).",
        "Những chữ có bộ 氵 (Chấm thủy) thường liên quan đến chủ đề nào?",
        ["Nước, chất lỏng", "Lời nói, ngôn ngữ", "Cây cối, thực vật", "Cảm xúc, suy nghĩ"],
        "Nước, chất lỏng",
        "Bộ 氵 là dạng biến thể bên trái của chữ 水 (nước)."
      ),
      readingComp(
        "hsk0-l6-q4",
        "有“讠”（言字旁）的字常和说话有关，比如“话”、“说”、“请”。",
        "Yǒu '讠' (yánzìpáng) de zì cháng hé shuōhuà yǒuguān, bǐrú 'huà', 'shuō', 'qǐng'.",
        "Chữ có bộ Ngôn (讠) thường liên quan đến lời nói, ví dụ: lời nói (话), nói (说), mời (请).",
        "Chữ nào dưới đây chứa bộ Ngôn (讠) liên quan đến lời nói?",
        ["话 (huà)", "林 (lín)", "打 (dǎ)", "河 (hé)"],
        "话 (huà)",
        "话 (lời nói) gồm bộ 讠 (ngôn ngữ) bên trái và 舌 (cái lưỡi) bên phải."
      ),
      readingComp(
        "hsk0-l6-q5",
        "汉字“妈”由“女”和“马”组成，“女”表示意思，“马”提示读音。",
        "Hànzì 'mā' yóu 'nǚ' hé 'mǎ' zǔchéng, 'nǚ' biǎoshì yìsi, 'mǎ' tíshì dúyīn.",
        "Chữ Hán '妈' gồm '女' và '马' tạo thành, '女' biểu thị ý nghĩa, '马' gợi ý âm đọc.",
        "Trong chữ 妈 (mā — mẹ), thành phần nào dùng để gợi ý âm đọc?",
        ["马 (mǎ)", "女 (nǚ)", "口 (kǒu)", "心 (xīn)"],
        "马 (mǎ)",
        "妈 là chữ Hình Thanh điển hình: 女 chỉ nghĩa (phụ nữ), 马 gợi âm đọc."
      ),
    ],
  },
];
