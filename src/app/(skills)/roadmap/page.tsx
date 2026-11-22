import type { Metadata } from "next";
import { RoadmapClient } from "@/components/roadmap/RoadmapClient";

export const metadata: Metadata = {
  title: "Lộ trình 10 Chặng Mức 0 – HSK 9 | HanziStudio",
  description:
    "Cá nhân hóa điểm xuất phát (Mức 0 chưa biết gì đến HSK 9), tỷ trọng 4 kỹ năng Nghe – Nói – Đọc – Viết và theo dõi lộ trình 40 buổi học tiếng Trung thực chiến.",
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
