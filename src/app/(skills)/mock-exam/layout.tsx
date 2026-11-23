import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đề Thi Thử HSK 1–9 Bấm Giờ Chuẩn HSK 3.0",
  description:
    "Luyện đề thi thử HSK 1 đến HSK 9 có đồng hồ đếm ngược, đủ 4 phần Nghe, Từ vựng, Ngữ pháp, Đọc hiểu và giải thích chi tiết.",
  alternates: { canonical: "/mock-exam" },
};

export default function MockExamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
