"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Info,
  RotateCcw,
  Sparkles,
  Volume2,
} from "lucide-react";
import { TACTILE_SPRING } from "@/components/ui/MotionPrimitives";
import { speakChinese } from "@/lib/speech";
import {
  addXP,
  getUserGoalProfile,
  saveUserGoalProfile,
  setHSKLevel,
} from "@/lib/storage";
import type { HSKLevel, StudyDurationMonths } from "@/types";

interface PlacementQuestion {
  id: string;
  levelTag: HSKLevel;
  skill: "Phát âm & Bộ thủ" | "Từ vựng" | "Ngữ pháp" | "Nghe" | "Đọc hiểu";
  prompt: string;
  pinyinHint?: string;
  audioZh?: string;
  options: string[];
  correct: string;
  explanationVi: string;
}

const QUESTIONS: PlacementQuestion[] = [
  {
    id: "p1",
    levelTag: "HSK0",
    skill: "Phát âm & Bộ thủ",
    prompt:
      "Theo quy tắc biến điệu thanh 3 trong tiếng Trung, khi nói '你好' (nǐ + hǎo), âm tiết đầu tiên được đọc chuyển thành thanh mấy?",
    options: [
      "Thanh 1 (nī hǎo)",
      "Thanh 2 (ní hǎo)",
      "Thanh 4 (nì hǎo)",
      "Giữ nguyên thanh 3 (nǐ hǎo)",
    ],
    correct: "Thanh 2 (ní hǎo)",
    explanationVi:
      "Khi hai thanh 3 đi liền nhau (3 + 3), âm tiết thứ nhất biến điệu đọc thành thanh 2 (2 + 3): 你好 → ní hǎo.",
  },
  {
    id: "p2",
    levelTag: "HSK0",
    skill: "Phát âm & Bộ thủ",
    prompt:
      "Bộ thủ '氵' (Ba chấm thủy) xuất hiện trong các chữ '河, 海, 洗, 汉' thường liên quan đến ý nghĩa nào?",
    options: [
      "Cây cối, gỗ (Mộc)",
      "Nước, chất lỏng (Thủy)",
      "Lời nói, ngôn ngữ (Ngôn)",
      "Tâm trạng, tình cảm (Tâm)",
    ],
    correct: "Nước, chất lỏng (Thủy)",
    explanationVi:
      "Bộ '氵' (Tam điểm thủy) đại diện cho nước, sông biển và các hoạt động liên quan đến chất lỏng.",
  },
  {
    id: "p3",
    levelTag: "HSK1",
    skill: "Từ vựng",
    prompt: "Trong câu '谢谢你！' (Xièxie nǐ!), câu đáp lại lịch sự đúng nhất là gì?",
    options: [
      "不客气 (Bú kèqi - Đừng khách sáo)",
      "对不起 (Duìbuqǐ - Xin lỗi)",
      "多少钱 (Duōshao qián - Bao nhiêu tiền)",
      "再见 (Zàijiàn - Tạm biệt)",
    ],
    correct: "不客气 (Bú kèqi - Đừng khách sáo)",
    explanationVi:
      "'不客气' (Bú kèqi) dùng để đáp lại lời cảm ơn '谢谢', chú ý '不' đứng trước thanh 4 đọc biến điệu thành thanh 2 (bú).",
  },
  {
    id: "p4",
    levelTag: "HSK1",
    skill: "Ngữ pháp",
    prompt:
      "Chọn câu đúng ngữ pháp tiếng Trung để diễn đạt: 'Hôm nay thời tiết rất đẹp.'",
    options: [
      "今天天气很好。",
      "今天天气是很好。",
      "今天很天气好。",
      "天气今天好很。",
    ],
    correct: "今天天气很好。",
    explanationVi:
      "Trong tiếng Trung, câu vị ngữ tính từ dùng phó từ mức độ '很 + Tính từ' (很好), tuyệt đối KHÔNG dùng '是' trước '很 + Tính từ' như tiếng Việt.",
  },
  {
    id: "p5",
    levelTag: "HSK2",
    skill: "Nghe",
    prompt: "Nghe câu tiếng Trung sau và chọn thông tin đúng:",
    audioZh: "我明天上午九点去公司开会，下午三点见客户。",
    options: [
      "9 giờ sáng mai đi họp ở công ty, 3 giờ chiều gặp khách hàng",
      "9 giờ sáng nay đi sân bay, 3 giờ chiều về nhà",
      "Ngày mai được nghỉ ở nhà cả ngày",
      "3 giờ sáng mai họp trực tuyến với đối tác",
    ],
    correct: "9 giờ sáng mai đi họp ở công ty, 3 giờ chiều gặp khách hàng",
    explanationVi:
      "Transcript: '我明天上午九点去公司开会，下午三点见客户。' (9h sáng mai tôi đến công ty họp, 3h chiều gặp khách hàng).",
  },
  {
    id: "p6",
    levelTag: "HSK2",
    skill: "Ngữ pháp",
    prompt:
      "Chọn lượng từ và số đếm đúng cho '2 người' và '1 cuốn sách' trong tiếng Trung:",
    options: [
      "两个人 · 一本书",
      "二个人 · 一条书",
      "两个人 · 一张书",
      "二本个人 · 一个书",
    ],
    correct: "两个人 · 一本书",
    explanationVi:
      "Khi đếm số lượng 2 đi kèm lượng từ phải dùng '两' (không dùng '二'): 两个人. Sách/tạp chí dùng lượng từ '本': 一本书.",
  },
  {
    id: "p7",
    levelTag: "HSK3",
    skill: "Ngữ pháp",
    prompt:
      "Chọn câu chữ '把' (Bǎ) đúng trật tự ngữ pháp: 'Làm ơn gửi bản hợp đồng đó vào email của tôi.'",
    options: [
      "请把那份合同发到我的邮箱。",
      "请发把那份合同到我的邮箱。",
      "请把发那份合同我的邮箱。",
      "那份合同请把我的邮箱发到。",
    ],
    correct: "请把那份合同发到我的邮箱。",
    explanationVi:
      "Cấu trúc câu chữ 把: Chủ ngữ + 把 + Tân ngữ xác định (那份合同) + Động từ (发) + Thành phần khác / Bổ ngữ kết quả (到我的邮箱).",
  },
  {
    id: "p8",
    levelTag: "HSK3",
    skill: "Đọc hiểu",
    prompt:
      "Đọc thông báo WeChat: '小王，下午两点半的部门会议改到四点在三楼会议室举行，请准时参加。' — Cuộc họp được dời sang mấy giờ và ở đâu?",
    options: [
      "14:30 tại phòng họp tầng 2",
      "16:00 tại phòng họp tầng 3",
      "15:00 tại văn phòng giám đốc",
      "Cuộc họp bị hủy bỏ",
    ],
    correct: "16:00 tại phòng họp tầng 3",
    explanationVi:
      "'下午两点半的部门会议改到四点在三楼会议室举行' nghĩa là cuộc họp lúc 2h30 chiều được đổi sang 4h chiều (16:00) tại phòng họp tầng 3.",
  },
  {
    id: "p9",
    levelTag: "HSK4",
    skill: "Ngữ pháp",
    prompt:
      "Chọn cặp liên từ phù hợp nhất: '___ 市场竞争非常激烈，___ 我们依然保持了百分之二十的增长。'",
    options: [
      "尽管 …… 但是 …… (Mặc dù ... nhưng ...)",
      "不但 …… 而且 …… (Không những ... mà còn ...)",
      "只要 …… 就 …… (Chỉ cần ... thì ...)",
      "与其 …… 不如 …… (Thà ... còn hơn ...)",
    ],
    correct: "尽管 …… 但是 …… (Mặc dù ... nhưng ...)",
    explanationVi:
      "Hai vế mang quan hệ nhượng bộ đối lập (cạnh tranh khốc liệt >< vẫn tăng trưởng 20%), nên dùng '尽管……但是……'.",
  },
  {
    id: "p10",
    levelTag: "HSK4",
    skill: "Nghe",
    prompt: "Nghe đoạn đàm phán thương mại sau và chọn điều kiện của bên bán:",
    audioZh: "如果贵公司一次订购五千件以上，我们可以提供九折优惠，并承担海运费用。",
    options: [
      "Đặt từ 5.000 sản phẩm trở lên được giảm 10% (9折) và miễn phí vận chuyển đường biển",
      "Đặt 500 sản phẩm được giảm 90% giá gốc",
      "Phải thanh toán 100% tiền mặt trước khi sản xuất",
      "Không hỗ trợ vận chuyển đường biển sang Việt Nam",
    ],
    correct:
      "Đặt từ 5.000 sản phẩm trở lên được giảm 10% (9折) và miễn phí vận chuyển đường biển",
    explanationVi:
      "Trong tiếng Trung thương mại, '九折 (jiǔ zhé)' nghĩa là thu 90% giá gốc (tức giảm giá 10%), kèm '承担海运费用' (chịu chi phí vận tải đường biển).",
  },
  {
    id: "p11",
    levelTag: "HSK5",
    skill: "Từ vựng",
    prompt:
      "Trong hợp đồng xuất nhập khẩu, cụm từ '交货期 (jiāohuòqī)' và '提单 (tídān)' lần lượt có nghĩa là gì?",
    options: [
      "Thời hạn giao hàng & Vận đơn (Bill of Lading)",
      "Thuế hải quan & Hóa đơn đỏ",
      "Tiền đặt cọc & Phí lưu kho",
      "Bảo hiểm hàng hóa & Giấy chứng nhận xuất xứ",
    ],
    correct: "Thời hạn giao hàng & Vận đơn (Bill of Lading)",
    explanationVi:
      "'交货期' là thời hạn giao hàng (lead time/delivery time), còn '提单' là vận đơn (Bill of Lading - B/L) trong logistics quốc tế.",
  },
  {
    id: "p12",
    levelTag: "HSK5",
    skill: "Đọc hiểu",
    prompt:
      "Đọc đoạn văn: '随着跨境电商与智慧物流的深度融合，中越双边贸易额持续攀升，越来越多的越南特色农产品通过冷链专列进入中国市场。' — Ý chính của đoạn là gì?",
    options: [
      "TMĐT xuyên biên giới và logistics thông minh thúc đẩy kim ngạch thương mại Trung–Việt, nông sản Việt vào Trung Quốc qua tàu chuỗi lạnh",
      "Nông sản Việt Nam ngừng xuất khẩu sang thị trường Trung Quốc",
      "Chi phí vận tải đường sắt chuỗi lạnh tăng quá cao khiến thương mại giảm",
      "Các doanh nghiệp chỉ giao dịch qua hội chợ truyền thống",
    ],
    correct:
      "TMĐT xuyên biên giới và logistics thông minh thúc đẩy kim ngạch thương mại Trung–Việt, nông sản Việt vào Trung Quốc qua tàu chuỗi lạnh",
    explanationVi:
      "Đoạn văn nhấn mạnh sự kết hợp giữa TMĐT xuyên biên giới (跨境电商) và logistics thông minh (智慧物流) giúp thương mại song phương tăng trưởng, nông sản qua tàu chuyên dụng chuỗi lạnh (冷链专列).",
  },
  {
    id: "p13",
    levelTag: "HSK6",
    skill: "Từ vựng",
    prompt:
      "Thành ngữ (成语) '举一反三 (jǔ yī fǎn sān)' dùng trong học thuật và công việc mang ý nghĩa gì?",
    options: [
      "Học một biết mười, từ một ví dụ suy ra nhiều trường hợp tương tự",
      "Làm việc nửa vời, thiếu kiên nhẫn",
      "Bất đồng quan điểm không thể hòa giải",
      "Mất bò mới lo làm chuồng",
    ],
    correct: "Học một biết mười, từ một ví dụ suy ra nhiều trường hợp tương tự",
    explanationVi:
      "'举一反三' trích từ Luận Ngữ của Khổng Tử, chỉ tư duy nhạy bén: nêu ra một góc có thể suy luận thông suốt ba góc còn lại (hiểu một suy ra ba).",
  },
  {
    id: "p14",
    levelTag: "HSK7",
    skill: "Ngữ pháp",
    prompt:
      "Trong văn bản chính luận/học thuật HSK 7–8, cấu trúc '无独有偶 (wú dú yǒu ǒu)' thường được dùng để làm gì?",
    options: [
      "Dẫn dắt một sự việc/hiện tượng tương tự trùng hợp không phải cá biệt ('Không chỉ có một mà lại có đôi / Trùng hợp thay')",
      "Phủ định hoàn toàn luận điểm phía trước",
      "Kết thúc bức thư thương mại",
      "Biểu thị nguyên nhân dẫn đến thất bại",
    ],
    correct:
      "Dẫn dắt một sự việc/hiện tượng tương tự trùng hợp không phải cá biệt ('Không chỉ có một mà lại có đôi / Trùng hợp thay')",
    explanationVi:
      "'无独有偶' dùng ở đầu câu/đoạn sau khi đã nêu một trường hợp trước đó, để giới thiệu thêm một trường hợp tương tự khác.",
  },
  {
    id: "p15",
    levelTag: "HSK8",
    skill: "Đọc hiểu",
    prompt:
      "Đọc câu học thuật HSK 8–9: '数字化转型绝非单纯的技术迭代，而是关乎企业组织架构、商业模式乃至价值链重塑的系统性变革。' — Tác giả nhận định chuyển đổi số là gì?",
    options: [
      "Không đơn thuần là nâng cấp công nghệ mà là cuộc cải cách hệ thống tái định hình cơ cấu tổ chức, mô hình kinh doanh và chuỗi giá trị",
      "Chỉ là việc mua sắm phần mềm và thay thế máy tính mới",
      "Một trào lưu ngắn hạn không ảnh hưởng đến chuỗi giá trị doanh nghiệp",
      "Chỉ phù hợp với các tập đoàn tài chính đa quốc gia",
    ],
    correct:
      "Không đơn thuần là nâng cấp công nghệ mà là cuộc cải cách hệ thống tái định hình cơ cấu tổ chức, mô hình kinh doanh và chuỗi giá trị",
    explanationVi:
      "Cấu trúc '绝非……而是……' (tuyệt đối không phải là... mà là...) khẳng định chuyển đổi số (数字化转型) là sự thay đổi mang tính hệ thống (系统性变革).",
  },
];

function estimateHSKLevelFromScore(score: number): {
  level: HSKLevel;
  titleVi: string;
  adviceVi: string;
  recommendedMonths: StudyDurationMonths;
} {
  if (score <= 2) {
    return {
      level: "HSK0",
      titleVi: "Mức 0 (HSK 0 · Nhập môn Pinyin & 50 Bộ thủ)",
      adviceVi:
        "Bạn nên bắt đầu từ Chặng 0: làm chủ Pinyin, 4 thanh điệu + thanh nhẹ, quy tắc biến điệu thanh 3 và 50 bộ thủ cốt lõi trước khi vào HSK 1.",
      recommendedMonths: 12,
    };
  }
  if (score <= 4) {
    return {
      level: "HSK1",
      titleVi: "Mức 1 (HSK 1 · Giao tiếp cơ bản 150–300 từ)",
      adviceVi:
        "Bạn đã nắm được nền tảng phát âm. Hãy bắt đầu từ HSK 1 để xây dựng phản xạ chào hỏi, thời gian, mua sắm và viết chữ Hán theo bút thuận.",
      recommendedMonths: 12,
    };
  }
  if (score <= 6) {
    return {
      level: "HSK2",
      titleVi: "Mức 2 (HSK 2 · Hội thoại đời sống 300–600 từ)",
      adviceVi:
        "Bạn có nền tảng sơ cấp tốt. Hãy học từ HSK 2 để thành thạo lượng từ, bổ ngữ kết quả và giao tiếp hằng ngày trôi chảy.",
      recommendedMonths: 9,
    };
  }
  if (score <= 8) {
    return {
      level: "HSK3",
      titleVi: "Mức 3 (HSK 3 · Trung cấp khởi đầu & Câu chữ 把/被)",
      adviceVi:
        "Trình độ của bạn tương đương HSK 3. Tập trung luyện câu chữ 把, câu bị động 被, nghe hội thoại dài và viết đoạn văn 150 chữ.",
      recommendedMonths: 9,
    };
  }
  if (score <= 10) {
    return {
      level: "HSK4",
      titleVi: "Mức 4 (HSK 4 · Tiếng Trung thương mại & Du học đại học)",
      adviceVi:
        "Bạn đủ nền tảng bước vào HSK 4 — ngưỡng tiêu chuẩn để xin học bổng du học Trung Quốc và làm việc tại doanh nghiệp Trung Quốc.",
      recommendedMonths: 9,
    };
  }
  if (score <= 12) {
    return {
      level: "HSK5",
      titleVi: "Mức 5 (HSK 5 · Đàm phán xuất nhập khẩu & Báo chí)",
      adviceVi:
        "Khả năng đọc hiểu và từ vựng thương mại của bạn rất khá. Hãy luyện sâu HSK 5–6 với hợp đồng ngoại thương, logistics và dịch song ngữ.",
      recommendedMonths: 6,
    };
  }
  if (score === 13) {
    return {
      level: "HSK6",
      titleVi: "Mức 6 (HSK 6 · Cao cấp & Thành ngữ 4 chữ 成语)",
      adviceVi:
        "Bạn đã đạt ngưỡng cao cấp HSK 6. Hãy rèn luyện thành ngữ, viết luận nghị luận và phản biện học thuật.",
      recommendedMonths: 6,
    };
  }
  if (score === 14) {
    return {
      level: "HSK7",
      titleVi: "Mức 7–8 (HSK 7–8 · Biên phiên dịch & Thương mại chuyên sâu)",
      adviceVi:
        "Trình độ tiếng Trung cao cấp chuẩn HSK 3.0 (Bậc 7–8). Hãy tập trung vào dịch thuật chuyên ngành, diễn thuyết và văn bản học thuật.",
      recommendedMonths: 6,
    };
  }
  return {
    level: "HSK9",
    titleVi: "Mức 9 (HSK 9 · Tinh thông học thuật & Chuyên gia bản xứ)",
    adviceVi:
      "Xuất sắc! Bạn nắm vững từ Pinyin, ngữ pháp thương mại đến văn phong học thuật HSK 7–9.",
    recommendedMonths: 6,
  };
}

export default function PlacementTestPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [appliedPlan, setAppliedPlan] = useState<StudyDurationMonths | null>(null);

  const score = QUESTIONS.filter((q) => answers[q.id] === q.correct).length;
  const percent = Math.round((score / QUESTIONS.length) * 100);
  const evaluation = estimateHSKLevelFromScore(score);

  const handleSubmit = () => {
    setSubmitted(true);
    addXP(20);
  };

  const handleApplyRoadmap = (months: StudyDurationMonths) => {
    const profile = getUserGoalProfile();
    saveUserGoalProfile({
      ...profile,
      startingLevel: evaluation.level,
      durationMonths: months,
      weeklySessionsTarget: months === 6 ? 6 : months === 9 ? 5 : 4,
    });
    setHSKLevel(evaluation.level);
    setAppliedPlan(months);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-12">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
          水平测试 · Đánh giá toàn diện từ Mức 0 (HSK 0) đến Mức 9 (HSK 9)
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#262626] sm:text-3xl">
          Kiểm Tra Trình Độ Đầu Vào (15 Câu)
        </h1>
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border border-[#E5E5E0] bg-white px-4 py-3 text-xs text-[#57534E]">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#6B655E]" />
        <span>
          Bài kiểm tra gồm <strong>15 câu phân hóa từ Mức 0 (Pinyin &amp; Bộ thủ) đến HSK 9</strong> giúp hệ thống tự động thiết lập chặng xuất phát (`startingLevel`) và tỷ trọng 4 kỹ năng Nghe – Nói – Đọc – Viết phù hợp nhất cho bạn trên <strong>HanziStudio</strong>.
        </span>
      </div>

      {!submitted ? (
        <div className="space-y-4">
          {QUESTIONS.map((q, idx) => (
            <div
              key={q.id}
              className="space-y-3 rounded-2xl border border-[#E5E5E0] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#292524] px-2 py-0.5 text-[11px] font-semibold text-white">
                    Câu {idx + 1}/15
                  </span>
                  <span className="rounded-md bg-[#F2F2F0] px-2 py-0.5 text-[11px] font-semibold text-[#4A4540]">
                    {q.levelTag} · {q.skill}
                  </span>
                </div>

                {q.audioZh && (
                  <button
                    type="button"
                    onClick={() => speakChinese(q.audioZh!, 0.9)}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#292524] px-3 py-1 text-xs font-medium text-white hover:bg-[#4A4540]"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Nghe audio (zh-CN)
                  </button>
                )}
              </div>

              <p className="text-sm font-semibold leading-relaxed text-[#262626]">
                {q.prompt}
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {q.options.map((opt) => {
                  const active = answers[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [q.id]: opt }))
                      }
                      className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-left text-xs transition-colors sm:text-sm ${
                        active
                          ? "border-[#292524] bg-[#292524] font-medium text-white"
                          : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={TACTILE_SPRING}
            onClick={handleSubmit}
            className="w-full cursor-pointer rounded-xl bg-[#292524] py-3.5 text-sm font-semibold text-white hover:bg-[#4A4540]"
          >
            Chấm điểm &amp; Thiết lập lộ trình cá nhân hóa ({Object.keys(answers).length}/{QUESTIONS.length} câu đã chọn)
          </motion.button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-6 rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-[#F0FDF4] p-3 text-[#15803D]">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-[#737373]">
                      Kết quả đánh giá năng lực Hán ngữ
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-semibold text-[#15803D]">
                      <Sparkles className="h-3 w-3" /> +20 XP
                    </span>
                  </div>
                  <h2 className="mt-1 text-xl font-bold text-[#262626]">
                    Đúng {score}/{QUESTIONS.length} câu ({percent}%)
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[#6B655E]">
                    Trình độ gợi ý: {evaluation.titleVi}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 text-sm leading-relaxed text-[#4A4540]">
              {evaluation.adviceVi}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#262626]">
                Áp dụng ngay cấp độ xuất phát ({evaluation.level}) vào Lộ trình của bạn (Đề xuất:{" "}
                {evaluation.recommendedMonths} tháng):
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {(
                  [
                    {
                      m: 6 as StudyDurationMonths,
                      title: "6 tháng (Tăng tốc)",
                      desc: "6 buổi/tuần · Luyện thi HSK & phỏng vấn cấp tốc",
                    },
                    {
                      m: 9 as StudyDurationMonths,
                      title: "9 tháng (Tiêu chuẩn)",
                      desc: "5 buổi/tuần · Cân bằng 4 kỹ năng Nghe Nói Đọc Viết",
                    },
                    {
                      m: 12 as StudyDurationMonths,
                      title: "12 tháng (Vững chắc)",
                      desc: "4 buổi/tuần · Xây nền tảng từ Pinyin & Bộ thủ",
                    },
                  ] as const
                ).map((plan) => (
                  <button
                    key={plan.m}
                    type="button"
                    onClick={() => handleApplyRoadmap(plan.m)}
                    className={`cursor-pointer rounded-xl border p-4 text-left transition-colors ${
                      appliedPlan === plan.m
                        ? "border-[#15803D] bg-[#F0FDF4]"
                        : plan.m === evaluation.recommendedMonths
                          ? "border-[#292524] bg-[#FAF9F7]"
                          : "border-[#E5E5E0] bg-white hover:border-[#6B655E]"
                    }`}
                  >
                    <div className="text-sm font-bold text-[#262626]">
                      {plan.title}
                    </div>
                    <p className="mt-1 text-xs text-[#737373]">{plan.desc}</p>
                    {appliedPlan === plan.m && (
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#15803D]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Đã lưu mức {evaluation.level}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-xl bg-[#292524] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4A4540]"
              >
                Mở Lộ trình Mức 0 – HSK 9 <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  setAppliedPlan(null);
                }}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E5E0] px-4 py-2.5 text-sm font-medium text-[#57534E] hover:border-[#6B655E]"
              >
                <RotateCcw className="h-4 w-4" />
                Làm lại bài test
              </button>
            </div>
          </div>

          {/* Detailed Explanations */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#737373]">
              Chi tiết đáp án &amp; Giải thích 15 câu
            </h3>
            {QUESTIONS.map((q, idx) => {
              const userAns = answers[q.id];
              const isRight = userAns === q.correct;
              return (
                <div
                  key={q.id}
                  className="space-y-2 rounded-2xl border border-[#E5E5E0] bg-white p-4"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#4A4540]">
                      Câu {idx + 1} ({q.levelTag} · {q.skill})
                    </span>
                    <span
                      className={`font-semibold ${
                        isRight ? "text-[#15803D]" : "text-[#B91C1C]"
                      }`}
                    >
                      {isRight ? "Chính xác" : "Chưa đúng"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#262626]">{q.prompt}</p>
                  <div className="text-xs text-[#737373]">
                    <span>Bạn chọn: </span>
                    <strong className={isRight ? "text-[#15803D]" : "text-[#B91C1C]"}>
                      {userAns ?? "Chưa chọn"}
                    </strong>{" "}
                    · <span>Đáp án chuẩn: </span>
                    <strong className="text-[#15803D]">{q.correct}</strong>
                  </div>
                  <p className="rounded-xl bg-[#FAF9F7] px-3 py-2 text-xs text-[#4A4540]">
                    {q.explanationVi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
