import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài Nguyên Tự Học Tiếng Trung HSK 0–9",
  description:
    "Tuyển tập giáo trình, từ điển, công cụ luyện nghe nói đọc viết và nguồn tự học tiếng Trung chất lượng cao.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
