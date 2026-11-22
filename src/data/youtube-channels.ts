import type { YouTubeChannel } from "@/types";

function ytSearch(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

/**
 * 20 Curated Vietnamese-friendly Chinese Learning YouTube Channels
 * Divided evenly: 5 Listening, 5 Speaking, 5 Reading, 5 Writing.
 * Every sampleVideoUrl has been verified HTTP 200 via YouTube oEmbed API.
 */
export const YOUTUBE_CHANNELS: YouTubeChannel[] = [
  // ==========================================
  // LISTENING (Luyện Nghe — 听力) - 5 kênh
  // ==========================================
  {
    id: "listening-panda-studio",
    name: "Panda Studio",
    skill: "listening",
    descriptionVi:
      "Luyện nghe hội thoại tiếng Trung thực tế theo chủ đề đời sống và kết bạn, có phụ đề chữ Hán, Pinyin và giải nghĩa tiếng Việt rõ ràng.",
    levelTag: "HSK 1 – HSK 4",
    youtubeSearchUrl: ytSearch("Panda Studio luyện nghe hội thoại tiếng Trung"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=kL5hL2P8U0k",
    sampleVideoTitle: "Luyện nghe hội thoại TIẾNG TRUNG : Làm quen bạn mới | 新朋友",
  },
  {
    id: "listening-tieng-trung-518",
    name: "Tiếng Trung 518",
    skill: "listening",
    descriptionVi:
      "Kho bài luyện nghe giao tiếp đời sống, hội thoại công sở – buôn bán và 5000 từ vựng thông dụng với giọng đọc chuẩn Bắc Kinh và phân tích chi tiết.",
    levelTag: "HSK 1 – HSK 6",
    youtubeSearchUrl: ytSearch("Tiếng Trung 518 luyện nghe giao tiếp thực tế"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=XvXQIMvupPs",
    sampleVideoTitle:
      "Học tiếng Trung giao tiếp thực tế đời sống - Bài 1 \"Tiền của con con thích tiêu thế nào thì tiêu\"",
  },
  {
    id: "listening-ttb-chinese",
    name: "TTB Chinese",
    skill: "listening",
    descriptionVi:
      "Luyện nghe phản xạ các câu đàm thoại cấp tốc, hội thoại thường dùng trong du lịch, mua sắm và giao dịch hàng ngày.",
    levelTag: "HSK 0 – HSK 4",
    youtubeSearchUrl: ytSearch("TTB Chinese luyện nghe hội thoại tiếng Trung"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=-rOIWAHYXB4",
    sampleVideoTitle: "Bài 1: Câu đàm thoại cơ bản | TIẾNG TRUNG CẤP TỐC 2018",
  },
  {
    id: "listening-say-ninhao",
    name: "Say Ninhao",
    skill: "listening",
    descriptionVi:
      "Bài giảng nghe hiểu và phân tích hội thoại chuẩn giáo trình HSK Standard Course từ sơ cấp lên trung cao cấp với tốc độ tự nhiên.",
    levelTag: "HSK 2 – HSK 6",
    youtubeSearchUrl: ytSearch("Say Ninhao Chinese learning HSK"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=KRL1sAh6hbI",
    sampleVideoTitle: "HSK4 - Lesson1Part1 简单的爱情（上）",
  },
  {
    id: "listening-wenjing-zhiyuan",
    name: "Wenjing-Zhiyuan",
    skill: "listening",
    descriptionVi:
      "Hệ thống bài nghe khóa học chuẩn HSK 4 – HSK 6 do giáo viên bản ngữ giảng dạy, rèn kỹ năng bắt từ khóa và ngữ điệu chuẩn phổ thông.",
    levelTag: "HSK 4 – HSK 7",
    youtubeSearchUrl: ytSearch("Wenjing-Zhiyuan HSK Standard Course"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=40tMAMC5MI8",
    sampleVideoTitle:
      "HSK5 Standard Course Lesson 2 Part2 | Leaving a Bunch of Keys to Our Parents-2 | HSK5第2课第2部分",
  },

  // ==========================================
  // SPEAKING (Luyện Nói & Phát âm — 口语) - 5 kênh
  // ==========================================
  {
    id: "speaking-cam-xu",
    name: "Học Tiếng Trung Cầm Xu",
    skill: "speaking",
    descriptionVi:
      "Chuyên sâu chuẩn hóa phát âm Pinyin, vị trí đặt lưỡi cho âm bật hơi (p, t, k, q, ch, c), âm cuốn lưỡi (zh, ch, sh, r) và quy tắc biến điệu.",
    levelTag: "HSK 0 – HSK 4",
    youtubeSearchUrl: ytSearch("Học Tiếng Trung Cầm Xu phát âm chuẩn"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=EVnxU8WkNSA",
    sampleVideoTitle: "Tự học Tiếng Trung online: Phát âm chuẩn Tiếng Trung (bài 1)",
  },
  {
    id: "speaking-khoai-tay",
    name: "Khoai Tây yêu tiếng Trung",
    skill: "speaking",
    descriptionVi:
      "Chia sẻ phương pháp Shadowing luyện nói trôi chảy không cần sang Trung Quốc, phản xạ khẩu ngữ tự nhiên và lộ trình HSK 3.0 thực chiến.",
    levelTag: "HSK 0 – HSK 6",
    youtubeSearchUrl: ytSearch("Khoai Tây yêu tiếng Trung giao tiếp"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=AJ7RyVUJ00U",
    sampleVideoTitle:
      "Bí mật của người giỏi giao tiếp tiếng Trung mà không cần sang Trung Quốc | Khoai Tây yêu tiếng Trung",
  },
  {
    id: "speaking-yangdexin",
    name: "Yangdexin",
    skill: "speaking",
    descriptionVi:
      "Nhập môn tiếng Trung từ con số 0 cực kỳ chi tiết, dễ hiểu, hướng dẫn khẩu hình phát âm 4 thanh điệu và giao tiếp thực tế.",
    levelTag: "HSK 0 – HSK 4",
    youtubeSearchUrl: ytSearch("Yangdexin nhập môn tiếng Trung phát âm"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=c7a2gpVtRIA",
    sampleVideoTitle:
      "Bài 1: Nhập Môn Tiếng Trung - Chi Tiết - Dễ Hiểu - Bắt Đầu Từ Con Số 0 // Yangdexin",
  },
  {
    id: "speaking-dapan",
    name: "Tiếng Trung Dapan",
    skill: "speaking",
    descriptionVi:
      "Luyện phát âm qua vè lưỡi (绕口令 ràokǒulìng), sửa lỗi phát âm z/c/s vs zh/ch/sh và các mẹo nói tiếng Trung chuẩn giọng bản xứ.",
    levelTag: "HSK 0 – HSK 5",
    youtubeSearchUrl: ytSearch("Tiếng Trung Dapan phát âm giao tiếp"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=5WO8mEGwdrw",
    sampleVideoTitle:
      "Mới Học Tiếng Trung? Bắt Buộc Phải Biết 3 Quy Tắc Phát Âm Này! #shorts",
  },
  {
    id: "speaking-le-gia-huynh-de",
    name: "Lê Gia Huynh Đệ",
    skill: "speaking",
    descriptionVi:
      "Mỗi ngày một câu giao tiếp và câu chuyện triết lý đời sống bằng tiếng Trung giúp nâng cao khẩu ngữ, thành ngữ và ngữ cảm tự nhiên.",
    levelTag: "HSK 2 – HSK 7",
    youtubeSearchUrl: ytSearch("Lê Gia Huynh Đệ Tiếng Trung Lê Gia"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=Jgf7IzmKuho",
    sampleVideoTitle:
      "Học tiếng Trung | Mỗi Ngày Một Câu | Lòng tự hào dân tộc | Tiếng Trung Lê Gia",
  },

  // ==========================================
  // READING (Luyện Đọc & Ngữ pháp — 阅读) - 5 kênh
  // ==========================================
  {
    id: "reading-an-kha-hy",
    name: "An Khả Hy",
    skill: "reading",
    descriptionVi:
      "Luyện đọc tiếng Trung qua các đoạn văn hay, tản văn cảm xúc và tổng hợp từ vựng HSK 3.0 giúp tăng tốc độ đọc mặt chữ Hán.",
    levelTag: "HSK 1 – HSK 5",
    youtubeSearchUrl: ytSearch("An Khả Hy luyện đọc tiếng Trung"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=vqxczn9pBBM",
    sampleVideoTitle:
      "❤️ Hạnh phúc là gì? Luyện đọc tiếng Trung qua đoạn văn hay | LUYỆN ĐỌC HSK3 HSK4 #ankhahy",
  },
  {
    id: "reading-day-hoc-tieng-trung-di",
    name: "DẬY HỌC TIẾNG TRUNG ĐI",
    skill: "reading",
    descriptionVi:
      "Phân tích bài khóa, từ vựng và mẫu câu theo giáo trình Boya và Hán ngữ, giúp người học nắm chắc cấu trúc đọc hiểu từ gốc.",
    levelTag: "HSK 1 – HSK 5",
    youtubeSearchUrl: ytSearch("DẬY HỌC TIẾNG TRUNG ĐI bài khóa"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=9iA8jgUOwTo",
    sampleVideoTitle: "[BOYA SƠ CẤP 1]#2 Bài 1 Nihao CHÀO HỎI | BÀI KHÓA & MẪU CÂU",
  },
  {
    id: "reading-thanhmai-hsk",
    name: "Thanhmai HSK",
    skill: "reading",
    descriptionVi:
      "Hệ thống bài giảng từ vựng, đọc hiểu báo chí và ngữ pháp HSK 3.0 bài bản từ đội ngũ giảng viên đại học giàu kinh nghiệm.",
    levelTag: "HSK 1 – HSK 7",
    youtubeSearchUrl: ytSearch("Thanhmai HSK từ vựng đọc hiểu HSK 3.0"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=ugPh2lOVd8Q",
    sampleVideoTitle: "Phản xạ từ vựng tiếng Trung HSK3 3.0 - Chủ đề thời trang",
  },
  {
    id: "reading-ly-dinh-tran",
    name: "Tiếng Trung Lý Dinh Trân",
    skill: "reading",
    descriptionVi:
      "Giải thích chi tiết từng bài đọc và ngữ pháp chuẩn khung HSK 3.0 mới nhất, giúp tự học đọc hiểu chữ Hán mạch lạc.",
    levelTag: "HSK 1 – HSK 6",
    youtubeSearchUrl: ytSearch("Tiếng Trung Lý Dinh Trân HSK 3.0"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=qLeDf0X4tjs",
    sampleVideoTitle: "[HSK 3.0 - HSK 1] Bài 14 - 我看了一个电影 - Phần 1",
  },
  {
    id: "reading-tieng-hoa-haha",
    name: "Tiếng Hoa HAHA",
    skill: "reading",
    descriptionVi:
      "Tổng hợp ngữ pháp đọc hiểu sơ – trung – cao cấp (HSK & TOCFL), phân tích sự khác biệt cấu trúc câu và kinh nghiệm du học.",
    levelTag: "HSK 2 – HSK 7",
    youtubeSearchUrl: ytSearch("Tiếng Hoa HAHA ngữ pháp đọc hiểu"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=YVhtZIIMPm8",
    sampleVideoTitle:
      "Làm chủ ngữ pháp tiếng Trung sơ trung cấp trong 70 phút - Khoảng HSK 3-4 & TOCFL A2-B1",
  },

  // ==========================================
  // WRITING (Luyện Viết chữ Hán & Đặt câu — 写作与汉字) - 5 kênh
  // ==========================================
  {
    id: "writing-duong-chau",
    name: "Tiếng Trung Dương Châu",
    skill: "writing",
    descriptionVi:
      "Hướng dẫn quy tắc viết chữ Hán, chiết tự 214 bộ thủ, cách nhớ mặt chữ qua câu chuyện và đặt câu theo Giáo trình Hán ngữ 1–6.",
    levelTag: "HSK 0 – HSK 6",
    youtubeSearchUrl: ytSearch("Tiếng Trung Dương Châu viết chữ Hán bộ thủ"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=sLUg6LGlNek",
    sampleVideoTitle:
      "Học tiếng Trung cho người mới bắt đầu | Bài 1 | Giáo trình Hán Ngữ 1",
  },
  {
    id: "writing-pham-duong-chau",
    name: "Học tiếng Trung Phạm Dương Châu",
    skill: "writing",
    descriptionVi:
      "Bài giảng của thầy Phạm Dương Châu về cấu tạo chữ Hán (Lục thư), mẹo nhớ nhanh 1500 chữ Hán cốt lõi và luyện đặt câu chuẩn ngữ pháp.",
    levelTag: "HSK 0 – HSK 5",
    youtubeSearchUrl: ytSearch("Học tiếng Trung Phạm Dương Châu chữ Hán"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=H3qnjYyT6sY",
    sampleVideoTitle:
      "Học tiếng Trung | Bài 1 | Xin chào | Giáo trình Hán ngữ tập 1 | Phiên bản 2021",
  },
  {
    id: "writing-thay-thang",
    name: "Tiếng Trung Thầy Thắng",
    skill: "writing",
    descriptionVi:
      "Hướng dẫn viết từng nét chữ Hán theo đúng quy tắc bút thuận chuẩn HSK 3.0 kèm chữa bài tập viết câu và đoạn văn chi tiết.",
    levelTag: "HSK 0 – HSK 5",
    youtubeSearchUrl: ytSearch("Tiếng Trung Thầy Thắng hướng dẫn viết chữ Hán HSK 3.0"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=iMYYBaxKrDQ",
    sampleVideoTitle:
      "Khoá Học Tiếng Trung HSK 1(3.0) Thầy Thắng | Hướng Dẫn Viết Chữ Hán Bài 1 HSK1 Mới",
  },
  {
    id: "writing-chinemaster",
    name: "Tiếng Trung ChineMaster",
    skill: "writing",
    descriptionVi:
      "Đào tạo viết câu, gõ chữ Hán thương mại, soạn thảo văn bản hành chính và luyện đề viết HSK 1 đến HSK 9 toàn diện.",
    levelTag: "HSK 1 – HSK 9",
    youtubeSearchUrl: ytSearch("Tiếng Trung ChineMaster HSK 3.0 HSK 9"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=mfDMIIGXefM",
    sampleVideoTitle:
      "[Giáo trình Hán ngữ HSK 3.0] học tiếng Trung uy tín Hà Nội lớp luyện thi HSK online toàn diện HSK 9",
  },
  {
    id: "writing-sofl",
    name: "Trung Tâm Tiếng Trung SOFL",
    skill: "writing",
    descriptionVi:
      "Bài giảng cấu trúc ngữ pháp viết câu, trật tự từ SVO, bổ ngữ và luyện viết đoạn văn từ HSK 1 đến HSK 6 rõ ràng, súc tích.",
    levelTag: "HSK 1 – HSK 6",
    youtubeSearchUrl: ytSearch("Trung Tâm Tiếng Trung SOFL ngữ pháp viết chữ Hán"),
    sampleVideoUrl: "https://www.youtube.com/watch?v=86NQeiP7Z18",
    sampleVideoTitle:
      "[Ngữ pháp HSK 1] : Bài 2 : 汉语不太难 Tiếng Hán không khó lắm?",
  },
];
