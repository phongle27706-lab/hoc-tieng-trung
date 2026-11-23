import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Viết Chữ Hán Chấm Nét & Đặt Câu HSK 0–9",
  description:
    "Tập viết chữ Hán theo đúng thứ tự nét bút thuận trên ô Mễ tự cách, đặt câu, sắp xếp câu và luyện viết đoạn văn chuẩn HSK.",
  alternates: { canonical: "/writing" },
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
