import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Đọc Hiểu Tiếng Trung HSK 0–9",
  description:
    "Kho bài đọc hiểu tiếng Trung phân cấp Mức 0 đến HSK 9 có tra từ điển tương tác, bật/tắt Pinyin và bài tập kiểm tra.",
  alternates: { canonical: "/reading" },
};

export default function ReadingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
