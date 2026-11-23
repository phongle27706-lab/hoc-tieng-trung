import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Dịch Việt ↔ Trung HSK 1–9",
  description:
    "Bài tập luyện dịch song ngữ Việt – Trung từ câu giao tiếp cơ bản đến văn bản học thuật và thương mại HSK 1–9.",
  alternates: { canonical: "/translation" },
};

export default function TranslationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
