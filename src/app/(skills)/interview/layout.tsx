import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luyện Phỏng Vấn Học Bổng CSC, Doanh Nghiệp TQ & HSKK",
  description:
    "Bộ câu hỏi phỏng vấn học bổng CSC, doanh nghiệp Trung Quốc, visa du học và luyện thi khẩu ngữ HSKK có chấm điểm.",
  alternates: { canonical: "/interview" },
};

export default function InterviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
