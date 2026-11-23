import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngữ Pháp Tiếng Trung HSK 1–9 Chi Tiết Cho Người Việt",
  description:
    "Hệ thống cấu trúc ngữ pháp tiếng Trung từ cơ bản đến cao cấp HSK 1–9 kèm ví dụ song ngữ và bài tập thực hành.",
  alternates: { canonical: "/grammar" },
};

export default function GrammarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
