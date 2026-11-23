import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Nói Tiếng Trung & Phát Âm HSK 0–9",
  description:
    "Luyện phát âm thanh điệu, shadowing hội thoại thực tế và chấm điểm nói tiếng Trung từ Mức 0 đến HSK 9.",
  alternates: { canonical: "/speaking" },
};

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
