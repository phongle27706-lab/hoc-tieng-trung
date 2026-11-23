import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Nghe Tiếng Trung HSK 0–9 & Chép Chính Tả",
  description:
    "Luyện nghe hiểu hội thoại tiếng Trung và chép chính tả chữ Hán từ Mức 0 đến HSK 9 có Pinyin và dịch tiếng Việt.",
  alternates: { canonical: "/listening" },
};

export default function ListeningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
