import type { HSKLevel } from "@/types";

export type ResourceCategory =
  | "grammar"
  | "slides"
  | "vocab"
  | "textbooks"
  | "pronunciation"
  | "exercises"
  | "listening"
  | "visual";

export interface DriveResourceItem {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  category: ResourceCategory;
  categoryLabelVi: string;
  url: string;
  levelRange: string;
  hskLevels: HSKLevel[];
  formatBadge: string;
  descriptionVi: string;
  highlights: string[];
  linkedRoutes: { label: string; href: string }[];
}

export const DRIVE_RESOURCES: DriveResourceItem[] = [
  {
    id: "res-1-grammar",
    index: 1,
    title: "Tổng hợp Ngữ pháp Hán ngữ (Quyển 1–4 & Hiện đại)",
    subtitle: "Ngữ pháp cốt lõi, phân tích câu bệnh & trọng điểm HSK",
    category: "grammar",
    categoryLabelVi: "Ngữ pháp",
    url: "https://drive.google.com/drive/folders/1-IUpCQ3XyEOCFtzTuPHRDez87G0HSWL_",
    levelRange: "HSK 1 – HSK 6",
    hskLevels: ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"],
    formatBadge: "PDF · Tài liệu tổng hợp",
    descriptionVi:
      "Tổng hợp ngữ pháp giáo trình Hán ngữ quyển 1–4, Ngữ pháp tiếng Hoa cơ bản, Ngữ pháp Hán ngữ hiện đại, Phân tích câu bệnh (病句) và các điểm ngữ pháp trọng tâm hay ra thi.",
    highlights: [
      "Hệ thống ngữ pháp Hán ngữ 1–4 chi tiết",
      "Chuyên đề sửa câu bệnh (病句分析) HSK 5–6",
      "Bảng so sánh cấu trúc dễ nhầm lẫn",
    ],
    linkedRoutes: [{ label: "Mở trang Ngữ pháp", href: "/grammar" }],
  },
  {
    id: "res-2-slides-301",
    index: 2,
    title: "Slide bài giảng 301 Câu Đàm Thoại Tiếng Hoa (40 Bài)",
    subtitle: "Trọn bộ 40 file PowerPoint (.pptx) Bài 1 → Bài 40",
    category: "slides",
    categoryLabelVi: "Slide bài giảng",
    url: "https://drive.google.com/drive/folders/1hR4tUFkSaiqqewTAsrkny_V6JzzywRpg",
    levelRange: "HSK 0 – HSK 3",
    hskLevels: ["HSK0", "HSK1", "HSK2", "HSK3"],
    formatBadge: "40 file PPTX",
    descriptionVi:
      "Trọn bộ 40 slide PowerPoint bài giảng từ Bài 1 đến Bài 40 của giáo trình kinh điển 301 Câu Đàm Thoại Tiếng Hoa, dễ dàng tự học giao tiếp phản xạ mỗi ngày.",
    highlights: [
      "Đủ 40 bài giảng giao tiếp chuẩn Bắc Kinh",
      "Trình bày trực quan theo từng tình huống",
      "Phù hợp tự học hoặc làm slide giảng dạy",
    ],
    linkedRoutes: [
      { label: "Lộ trình học", href: "/roadmap" },
      { label: "Mẫu câu giao tiếp", href: "/phrases" },
    ],
  },
  {
    id: "res-3-hsk-vocab",
    index: 3,
    title: "Tổng hợp Từ vựng HSK (Cấp 1 – Cấp 6 & Từ điển phân cấp)",
    subtitle: "Từ 150 từ HSK 1 đến 5.000 từ HSK 6 đầy đủ Pinyin & Nghĩa",
    category: "vocab",
    categoryLabelVi: "Từ vựng HSK",
    url: "https://drive.google.com/drive/folders/1-OKaVBxfTPFltZ3HoI6hfpcfeI3NsbLh",
    levelRange: "HSK 1 – HSK 6",
    hskLevels: ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"],
    formatBadge: "PDF · 5.000+ Từ vựng",
    descriptionVi:
      "Bộ file PDF tổng hợp từ vựng chuẩn theo từng cấp độ từ HSK 1 (150 từ), HSK 2 (300 từ), HSK 3 (600 từ), HSK 4 (1.200 từ), HSK 5 (2.500 từ) đến HSK 6 (5.000 từ) kèm từ điển phân cấp.",
    highlights: [
      "Phân cấp rõ ràng từng mốc HSK 1 → HSK 6",
      "Kèm từ điển phân cấp tra cứu nhanh",
      "Tiện in ra ôn thi hoặc học kèm SRS",
    ],
    linkedRoutes: [{ label: "Trung tâm Từ vựng & SRS", href: "/vocab" }],
  },
  {
    id: "res-4-hsk-textbooks",
    index: 4,
    title: "Giáo trình chuẩn HSK 1 – 6 (Standard Course + Audio)",
    subtitle: "Sách giáo khoa Thượng/Hạ, Sách bài tập & File nghe MP3",
    category: "textbooks",
    categoryLabelVi: "Giáo trình chuẩn",
    url: "https://drive.google.com/drive/folders/12KXPJen3MW8cD7IR3iqRtV0NdsIrIUW1",
    levelRange: "HSK 1 – HSK 6",
    hskLevels: ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"],
    formatBadge: "PDF + Audio MP3",
    descriptionVi:
      "Trọn bộ Sách giáo khoa chuẩn HSK 1 đến HSK 6 (đầy đủ tập Thượng / Hạ cho HSK 4, 5, 6), Sách bài tập HSK 2–3 kèm file nghe chuẩn bản xứ và thư mục bản tiếng Anh.",
    highlights: [
      "Giáo trình chuẩn Hanban HSK 1–6 (đủ tập Thượng/Hạ)",
      "Kèm sách bài tập & file nghe chuẩn",
      "Có bản đối chiếu tiếng Anh cho người tự học",
    ],
    linkedRoutes: [
      { label: "Lộ trình HSK 0–9", href: "/roadmap" },
      { label: "Luyện Đọc", href: "/reading" },
    ],
  },
  {
    id: "res-5-pronunciation-video",
    index: 5,
    title: "Video Tự Học Phát Âm Tiếng Trung Chuẩn Bản Xứ",
    subtitle: "Thanh mẫu, Vận mẫu, 4 Thanh điệu & Phân biệt âm khó",
    category: "pronunciation",
    categoryLabelVi: "Video phát âm",
    url: "https://drive.google.com/drive/folders/14_qgmgytl_IB6msE3tLm34gaX7mlYJDL",
    levelRange: "HSK 0 – HSK 2",
    hskLevels: ["HSK0", "HSK1", "HSK2"],
    formatBadge: "Video MP4 · Nhập môn",
    descriptionVi:
      "Kho video hướng dẫn chi tiết cách đọc bảng chữ cái Pinyin, 4 thanh điệu + thanh nhẹ, vận mẫu và cách phân biệt các cặp âm người Việt hay nhầm (en/eng, z/c/s vs zh/ch/sh, 的/地/得).",
    highlights: [
      "Khẩu hình chuẩn cho z/c/s và zh/ch/sh/r",
      "Phân biệt vận mẫu mũi trước/sau (en/eng, in/ing)",
      "Giải thích trực quan cách dùng 的 / 地 / 得",
    ],
    linkedRoutes: [
      { label: "Luyện Nói & Phát âm", href: "/speaking" },
      { label: "Kho 20 Kênh YouTube", href: "/youtube-hub" },
    ],
  },
  {
    id: "res-6-exercises",
    index: 6,
    title: "Bài Tập Trắc Nghiệm, Tự Luận & Đề Thi Tốt Nghiệp THPT",
    subtitle: "Ngân hàng đề ôn luyện ngữ pháp HSK 1–3 & Đề THPT Quốc gia",
    category: "exercises",
    categoryLabelVi: "Bài tập & Đề thi",
    url: "https://drive.google.com/drive/folders/1-s5-11F4HXufm-MfQK8yzTTQm3twc-cc",
    levelRange: "HSK 1 – HSK 5",
    hskLevels: ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5"],
    formatBadge: "PDF · Đề thi & Đáp án",
    descriptionVi:
      "Tổng hợp bài tập ôn luyện ngữ pháp HSK 1–3, bộ bài tập trắc nghiệm & tự luận tổng hợp có đáp án giải thích và tuyển tập đề thi tốt nghiệp THPT môn Tiếng Trung.",
    highlights: [
      "Bài tập trắc nghiệm & tự luận bám sát HSK 1–3",
      "Tuyển tập đề thi THPT Quốc gia môn Tiếng Trung",
      "Rèn kỹ năng làm bài tốc độ & tránh bẫy ngữ pháp",
    ],
    linkedRoutes: [
      { label: "Thi thử HSK bấm giờ", href: "/mock-exam" },
      { label: "Ngữ pháp HSK", href: "/grammar" },
    ],
  },
  {
    id: "res-7-factory-vocab",
    index: 7,
    title: "Từ Vựng Chuyên Ngành Sản Xuất, Công Xưởng & Giày Da",
    subtitle: "Tiếng Trung thực chiến cho công việc nhà máy & xuất nhập khẩu",
    category: "vocab",
    categoryLabelVi: "Từ vựng chuyên ngành",
    url: "https://drive.google.com/drive/folders/16kK00RhGFJEk1Wlw6_PEEoULlFRfmCxs",
    levelRange: "HSK 3 – HSK 7",
    hskLevels: ["HSK3", "HSK4", "HSK5", "HSK6", "HSK7"],
    formatBadge: "PDF · Chuyên ngành",
    descriptionVi:
      "Tài liệu từ vựng tiếng Trung chuyên ngành sản xuất thực tế: ngành giày da, quản lý chuyền sản xuất, kiểm hàng QC, kho vận và giao tiếp trong nhà máy công xưởng.",
    highlights: [
      "Từ vựng chuyên ngành giày da, dệt may, công xưởng",
      "Thuật ngữ kiểm hàng (QC), máy móc & quản lý sản xuất",
      "Cực kỳ hữu ích cho phiên dịch & nhân sự nhà máy TQ",
    ],
    linkedRoutes: [
      { label: "Từ vựng & Mind Map", href: "/vocab" },
      { label: "Phỏng vấn Doanh nghiệp TQ", href: "/interview" },
    ],
  },
  {
    id: "res-8-visual-vocab",
    index: 8,
    title: "Tự Học Tiếng Trung Qua Hình Ảnh Trực Quan",
    subtitle: "Bộ ảnh ghi nhớ nhanh Lượng từ, Tính cách & Nhóm từ vựng",
    category: "visual",
    categoryLabelVi: "Học qua hình ảnh",
    url: "https://drive.google.com/drive/folders/177C1Z9GnKAi9WhHnPjdYj5O6L1wKmV9W",
    levelRange: "HSK 0 – HSK 4",
    hskLevels: ["HSK0", "HSK1", "HSK2", "HSK3", "HSK4"],
    formatBadge: "Hình ảnh · Infographic",
    descriptionVi:
      "Bộ ảnh minh họa trực quan giúp não bộ ghi nhớ từ vựng tiếng Trung theo cụm hình ảnh: nhóm lượng từ (量词), tính cách con người, đồ vật đời sống và động từ thường gặp.",
    highlights: [
      "Ghi nhớ lượng từ qua hình ảnh sinh động",
      "Cụm từ miêu tả tính cách & cảm xúc con người",
      "Phù hợp ôn nhanh trên điện thoại mỗi ngày",
    ],
    linkedRoutes: [
      { label: "Mind Map Từ vựng", href: "/vocab" },
      { label: "Luyện Viết chữ Hán", href: "/writing" },
    ],
  },
  {
    id: "res-9-speed-listening",
    index: 9,
    title: "Giáo Trình Luyện Nghe Cấp Tốc (Cấp độ 1 – 3 + File Nghe)",
    subtitle: "PDF bài tập nghe cấp tốc kèm đầy đủ Audio MP3 tương ứng",
    category: "listening",
    categoryLabelVi: "Luyện nghe cấp tốc",
    url: "https://drive.google.com/drive/folders/1ARHS8y68XDQ34yLAqmNdFG0gvz62vEfH",
    levelRange: "HSK 1 – HSK 4",
    hskLevels: ["HSK1", "HSK2", "HSK3", "HSK4"],
    formatBadge: "PDF + Thư mục Audio",
    descriptionVi:
      "Trọn bộ Giáo trình Luyện Nghe Cấp Tốc (汉语听力速成) bản PDF từ cấp độ 1 đến cấp độ 3 kèm thư mục file nghe MP3 chuẩn tốc độ bản xứ để luyện phản xạ tai nghe.",
    highlights: [
      "Giáo trình Luyện Nghe Cấp Tốc 1–3 nổi tiếng",
      "Đầy đủ file nghe tương ứng từng bài học",
      "Kết hợp hoàn hảo với chế độ Nghe chép chính tả trên web",
    ],
    linkedRoutes: [{ label: "Mở phòng Luyện Nghe", href: "/listening" }],
  },
];

export function getResourcesByCategory(
  categories: ResourceCategory[]
): DriveResourceItem[] {
  return DRIVE_RESOURCES.filter((r) => categories.includes(r.category));
}
