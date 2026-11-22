import type { RoadmapStage, StudySession } from "@/types";
import { HSK0_STANDARD_SESSIONS } from "./hsk0-standard";
import { HSK1_STANDARD_SESSIONS } from "./hsk1-standard";
import { HSK2_STANDARD_SESSIONS } from "./hsk2-standard";
import { HSK3_STANDARD_SESSIONS } from "./hsk3-standard";
import { HSK4_STANDARD_SESSIONS } from "./hsk4-standard";
import { HSK5_STANDARD_SESSIONS } from "./hsk5-standard";
import { HSK6_STANDARD_SESSIONS } from "./hsk6-standard";
import { HSK7_STANDARD_SESSIONS } from "./hsk7-standard";
import { HSK8_STANDARD_SESSIONS } from "./hsk8-standard";
import { HSK9_STANDARD_SESSIONS } from "./hsk9-standard";

export const ALL_STUDY_SESSIONS: StudySession[] = [
  ...HSK0_STANDARD_SESSIONS,
  ...HSK1_STANDARD_SESSIONS,
  ...HSK2_STANDARD_SESSIONS,
  ...HSK3_STANDARD_SESSIONS,
  ...HSK4_STANDARD_SESSIONS,
  ...HSK5_STANDARD_SESSIONS,
  ...HSK6_STANDARD_SESSIONS,
  ...HSK7_STANDARD_SESSIONS,
  ...HSK8_STANDARD_SESSIONS,
  ...HSK9_STANDARD_SESSIONS,
];

function sessionIdsForStage(stageId: number): string[] {
  return ALL_STUDY_SESSIONS.filter((s) => s.stageId === stageId).map((s) => s.id);
}

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 0,
    hskLevel: "HSK0",
    monthsLabel: "Tuần 1 – 3 (Tháng 1)",
    title: "Chặng 0: Nhập môn Mức 0 — Chưa biết gì (Pinyin & 50 Bộ thủ)",
    subtitle:
      "Làm chủ 21 thanh mẫu, 36 vận mẫu, 4 thanh điệu + thanh nhẹ, biến điệu Thanh 3 / 一 / 不, 8 nét cơ bản và 50 bộ thủ chữ Hán cốt lõi.",
    vocabTarget: "100 chữ Hán nền tảng & 50 bộ thủ",
    levelRange: "Mức 0 (HSK 0)",
    defaultWeights: {
      listening: 50,
      speaking: 30,
      reading: 15,
      writing: 5,
    },
    highlights: {
      listening:
        "Nghe phân biệt thanh mẫu bật hơi (p, t, k, q, ch, c), âm cuốn lưỡi (zh, ch, sh, r) và 4 thanh điệu.",
      speaking:
        "Thực hành biến điệu hai thanh 3 liên tiếp (你好), biến điệu của 一 và 不 chuẩn giọng Bắc Kinh.",
      reading:
        "Nhận diện 50 bộ thủ thông dụng (亻, 氵, 口, 女, 讠, 钅, 艹...) và chữ số đếm 1 – 10.000.",
      writing:
        "Luyện 8 nét cơ bản (永字八法) và 7 quy tắc bút thuận trên ô Mễ tự cách (米字格).",
    },
    sessionIds: sessionIdsForStage(0),
  },
  {
    id: 1,
    hskLevel: "HSK1",
    monthsLabel: "Tuần 4 – 7 (Tháng 1 – 2)",
    title: "Chặng 1: Giao tiếp sinh tồn HSK 1",
    subtitle:
      "Chào hỏi, tự giới thiệu tên, quốc tịch, gia đình, hỏi giờ giấc, gọi trà sữa/món ăn và trật tự câu SVO + Thời gian + Địa điểm.",
    vocabTarget: "300 – 500 từ vựng HSK 1 (3.0)",
    levelRange: "HSK 0 → HSK 1",
    defaultWeights: {
      listening: 40,
      speaking: 30,
      reading: 15,
      writing: 15,
    },
    highlights: {
      listening:
        "Nghe hội thoại làm quen, hỏi quốc tịch, số điện thoại, giờ hẹn và giá tiền mua đồ.",
      speaking:
        "Giới thiệu bản thân, gia đình, gọi đồ uống ít đường ít đá và hỏi đường tới ga tàu điện.",
      reading:
        "Đọc hiểu tin nhắn WeChat hẹn ăn tối, lịch trình trong tuần và hóa đơn mua sắm.",
      writing:
        "Viết chữ Hán HSK1 chuẩn nét, sắp xếp câu có trạng ngữ thời gian/địa điểm và đặt 2 câu hoàn chỉnh.",
    },
    sessionIds: sessionIdsForStage(1),
  },
  {
    id: 2,
    hskLevel: "HSK2",
    monthsLabel: "Tuần 8 – 12 (Tháng 2 – 3)",
    title: "Chặng 2: Sinh hoạt, Du lịch & Mua sắm HSK 2",
    subtitle:
      "Đặt phòng khách sạn, làm thủ tục sân bay, mặc cả khi mua sắm, khám sức khỏe, câu so sánh 比, bổ ngữ trạng thái 得 và cặp liên từ 因为...所以 / 虽然...但是.",
    vocabTarget: "750 – 1.000 từ vựng HSK 2 (3.0)",
    levelRange: "HSK 1 → HSK 2",
    defaultWeights: {
      listening: 35,
      speaking: 30,
      reading: 20,
      writing: 15,
    },
    highlights: {
      listening:
        "Nghe tình huống lễ tân khách sạn, thông báo chuyến bay, mặc cả giảm giá và tư vấn bác sĩ.",
      speaking:
        "So sánh phương tiện với chữ 比, trình bày lý do với 因为...所以 và thương lượng giá.",
      reading:
        "Đọc hiểu thông báo giao hàng Taobao, lời khuyên dưỡng sinh và nhật ký học tiếng Trung.",
      writing:
        "Luyện viết chữ Hán kết cấu Trái - Phải, sắp xếp câu bổ ngữ trạng thái 得 và đặt 2 câu thực tế.",
    },
    sessionIds: sessionIdsForStage(2),
  },
  {
    id: 3,
    hskLevel: "HSK3",
    monthsLabel: "Tuần 13 – 17 (Tháng 3 – 4)",
    title: "Chặng 3: Đời sống Đô thị, Công sở & Thanh toán Số HSK 3",
    subtitle:
      "Làm chủ thanh toán WeChat Pay / Alipay, đi tàu cao tốc, họp văn phòng, phân biệt 的/地/得, bổ ngữ xu hướng, câu chữ 把 và câu bị động 被.",
    vocabTarget: "1.500 – 2.000 từ vựng HSK 3 (3.0)",
    levelRange: "HSK 2 → HSK 3",
    defaultWeights: {
      listening: 30,
      speaking: 30,
      reading: 20,
      writing: 20,
    },
    highlights: {
      listening:
        "Nghe hội thoại quét mã WeChat/Alipay, lịch tàu cao tốc Bắc Kinh - Thượng Hải và phản hồi hàng mẫu.",
      speaking:
        "Sử dụng câu chữ 把 trong giao việc văn phòng, cam kết tiến độ và trao đổi lịch hội chợ.",
      reading:
        "Đọc hiểu thông báo nghỉ Tết Nguyên đán của công ty, văn hóa tặng quà Trung thu và phương pháp Mind Map.",
      writing:
        "Viết chữ Hán HSK3, sắp xếp câu xử lý 把 / câu bị động 被 và đặt 2 câu giao tiếp – công việc.",
    },
    sessionIds: sessionIdsForStage(3),
  },
  {
    id: 4,
    hskLevel: "HSK4",
    monthsLabel: "Tuần 18 – 23 (Tháng 5 – 6)",
    title: "Chặng 4: Thương mại Taobao/1688, Công việc & Du học HSK 4",
    subtitle:
      "Đàm phán giá sỉ xưởng 1688, săn hàng Taobao, xin học bổng du học, hợp đồng thuê nhà, cùng hệ thống liên từ 不仅...而且, 无论...都, 只要...就.",
    vocabTarget: "2.500 – 3.000 từ vựng HSK 4 (3.0)",
    levelRange: "HSK 3 → HSK 4",
    defaultWeights: {
      listening: 30,
      speaking: 30,
      reading: 20,
      writing: 20,
    },
    highlights: {
      listening:
        "Nghe đàm phán CSKH 1688 về MOQ, giá sỉ, freeship nội địa tới kho Bằng Tường và xử lý đổi trả.",
      speaking:
        "Hỏi hàng có sẵn (现货), thương lượng chiết khấu theo số lượng và hẹn lịch đi Thâm Quyến thăm xưởng.",
      reading:
        "Đọc hiểu hợp đồng thuê căn hộ (押一付三), điều kiện xin học bổng thạc sĩ CSC và đạo đức kinh doanh.",
      writing:
        "Viết chữ Hán hợp đồng thương mại, sắp xếp câu phức 不仅...而且 / 无论...都 và đặt 2 câu chuyên sâu.",
    },
    sessionIds: sessionIdsForStage(4),
  },
  {
    id: 5,
    hskLevel: "HSK5",
    monthsLabel: "Tuần 24 – 29 (Tháng 6 – 7)",
    title: "Chặng 5: Xuất nhập khẩu, Logistics, Hải quan & Công nghệ AI HSK 5",
    subtitle:
      "Làm chủ từ vựng ngoại thương FOB/CIF, đóng container, khai báo hải quan, thông quan cửa khẩu, chuyển khoản T/T, Livestream TMĐT và ứng dụng AI.",
    vocabTarget: "4.000+ từ vựng HSK 5 (3.0)",
    levelRange: "HSK 4 → HSK 5",
    defaultWeights: {
      listening: 30,
      speaking: 25,
      reading: 25,
      writing: 20,
    },
    highlights: {
      listening:
        "Nghe báo cáo thông quan container 40 feet tại cảng Hải Phòng, phương án kết hợp空运/海运 và điện chuyển tiền T/T.",
      speaking:
        "Yêu cầu báo giá CIF, thuyết trình xu hướng Livestream bán hàng và ứng dụng AI nâng cao hiệu suất CSKH.",
      reading:
        "Đọc hiểu điều khoản giao hàng & phạt chậm giao trong hợp đồng ngoại thương, logistics Đông Quản - Hà Nội và khóa tỷ giá.",
      writing:
        "Viết chữ Hán Hải quan/Vận tải, soạn thảo câu văn thương mại chính ngạch và đặt 2 câu với từ khóa Logistics.",
    },
    sessionIds: sessionIdsForStage(5),
  },
  {
    id: 6,
    hskLevel: "HSK6",
    monthsLabel: "Tuần 30 – 35 (Tháng 8 – 9)",
    title: "Chặng 6: Chuỗi cung ứng Toàn cầu, Pháp lý Hợp đồng & Kinh tế Vĩ mô HSK 6",
    subtitle:
      "Chiến lược dịch chuyển chuỗi cung ứng, ưu đãi thuế quan FORM E ASEAN, thỏa thuận bảo mật NDA, bảo hộ sở hữu trí tuệ, M&A và phát triển bền vững.",
    vocabTarget: "5.400+ từ vựng HSK 6 (3.0)",
    levelRange: "HSK 5 → HSK 6",
    defaultWeights: {
      listening: 25,
      speaking: 25,
      reading: 25,
      writing: 25,
    },
    highlights: {
      listening:
        "Nghe phân tích ưu đãi thuế quan 0% với C/O FORM E, rà soát điều khoản pháp lý và thẩm định thương vụ M&A.",
      speaking:
        "Diễn thuyết cấp quản lý về chiến lược bản địa hóa, tối ưu chi phí vận hành và sản xuất xanh bền vững.",
      reading:
        "Đọc hiểu báo cáo đầu tư hạ tầng Đông Nam Á, thỏa thuận bảo mật NDA và quy trình giám sát chất lượng quốc tế.",
      writing:
        "Viết chữ Hán Chiến lược/Doanh nghiệp, sắp xếp điều khoản pháp lý hợp đồng và đặt 2 câu quản trị cấp cao.",
    },
    sessionIds: sessionIdsForStage(6),
  },
  {
    id: 7,
    hskLevel: "HSK7",
    monthsLabel: "Tuần 36 – 40 (Tháng 9 – 10)",
    title: "Chặng 7: Thành ngữ Thương mại, Hệ sinh thái Số & Đàm phán Cao cấp HSK 7",
    subtitle:
      "Bước vào cấp độ Cao cấp (HSK 7–9): Vận dụng thành ngữ 4 chữ (互利共赢, 因地制宜, 实事求是, 精益求精, 举足轻重, 脱颖而出) và đọc hiểu Sách trắng ngành.",
    vocabTarget: "7.000+ từ vựng & Thành ngữ HSK 7",
    levelRange: "HSK 6 → HSK 7",
    defaultWeights: {
      listening: 25,
      speaking: 25,
      reading: 25,
      writing: 25,
    },
    highlights: {
      listening:
        "Nghe diễn đàn kinh tế khu vực, phỏng vấn nhân sự đa ngôn ngữ và phân tích hệ sinh thái TMĐT xuyên biên giới.",
      speaking:
        "Vận dụng thành ngữ 4 chữ chuẩn nhịp 2+2 trong phát biểu ngoại giao thương mại và phỏng vấn quản lý.",
      reading:
        "Đọc hiểu Sách trắng hệ sinh thái số, bài bình luận Tinh thần nghệ nhân (工匠精神) và chiến lược thị trường mới nổi.",
      writing:
        "Viết chữ Hán trong thành ngữ HSK7, cấu trúc câu nghị luận học thuật và đặt 2 câu với thành ngữ 互利共赢.",
    },
    sessionIds: sessionIdsForStage(7),
  },
  {
    id: 8,
    hskLevel: "HSK8",
    monthsLabel: "Tuần 41 – 45 (Tháng 10 – 11)",
    title: "Chặng 8: Quản trị Rủi ro, Trọng tài Quốc tế & Điều tiết Vĩ mô HSK 8",
    subtitle:
      "Phòng vệ rủi ro tỷ giá (未雨绸缪), tầm nhìn HĐQT (高瞻远瞩), trọng tài thương mại quốc tế (仲裁), vượt rào cản thương mại xanh (贸易壁垒) và giá trị thương hiệu (品牌溢价).",
    vocabTarget: "9.000+ từ vựng & Thành ngữ HSK 8",
    levelRange: "HSK 7 → HSK 8",
    defaultWeights: {
      listening: 25,
      speaking: 25,
      reading: 25,
      writing: 25,
    },
    highlights: {
      listening:
        "Nghe CFO phân tích công cụ khóa tỷ giá ngoại tệ, điều khoản trọng tài CIETAC và tiêu chuẩn phát thải carbon.",
      speaking:
        "Phản biện chiến lược trong phòng họp HĐQT, phân tích thặng dư thương hiệu và vòng nghiệp vụ khép kín (业务闭环).",
      reading:
        "Đọc hiểu chuyên론 rào cản phi thuế quan xanh, văn hóa doanh nghiệp (潜移默化), điều tiết vĩ mô và trọng tài thương mại.",
      writing:
        "Viết chữ Hán thành ngữ HSK8, sắp xếp luận điểm quản trị vĩ mô và đặt 2 câu với thành ngữ 未雨绸缪.",
    },
    sessionIds: sessionIdsForStage(8),
  },
  {
    id: 9,
    hskLevel: "HSK9",
    monthsLabel: "Tuần 46 – 52 (Tháng 11 – 12)",
    title: "Chặng 9: Đỉnh cao Học thuật, Phiên dịch Cabin & Diễn thuyết Thượng đỉnh HSK 9",
    subtitle:
      "Làm chủ cấp độ cao nhất HSK 9: Phiên dịch cabin (同声传译), tái cấu trúc chuỗi giá trị toàn cầu, chuyển đổi trung hòa carbon và ngũ đại thành ngữ (融会贯通, 迫在眉睫, 推陈出新, 炉火纯青, 运筹帷幄).",
    vocabTarget: "11.000+ từ vựng chuẩn Khung HSK 3.0 (Cấp 9)",
    levelRange: "HSK 8 → HSK 9 (Đỉnh cao)",
    defaultWeights: {
      listening: 25,
      speaking: 25,
      reading: 25,
      writing: 25,
    },
    highlights: {
      listening:
        "Nghe Hội nghị Thượng đỉnh Kinh tế Thương mại, tiêu chuẩn phiên dịch viên cabin và đánh giá Sách trắng Kinh tế số ASEAN.",
      speaking:
        "Diễn văn chủ đề hội nghị quốc tế, hùng biện học thuật và làm chủ phong thái ngôn ngữ bậc thầy (炉火纯青).",
      reading:
        "Đọc hiểu tóm tắt luận văn tái cấu trúc chuỗi giá trị toàn cầu, nghiên cứu cộng tác Người - Máy trong dịch cabin và chiến lược RCEP.",
      writing:
        "Viết chữ Hán thành ngữ HSK9, hoàn thiện câu luận văn học thuật đỉnh cao và đặt 2 câu tổng kết với 融会贯通.",
    },
    sessionIds: sessionIdsForStage(9),
  },
];

export function getSessionById(id: string): StudySession | undefined {
  return ALL_STUDY_SESSIONS.find((s) => s.id === id);
}
