import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Từ Vựng Tiếng Trung Mind Map & Flashcard SRS HSK 0–9",
  description:
    "Học từ vựng tiếng Trung theo sơ đồ tư duy Mind Map, thẻ ghi nhớ lặp lại ngắt quãng SRS và luyện viết chữ Hán.",
  alternates: { canonical: "/vocab" },
};

export default function VocabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
