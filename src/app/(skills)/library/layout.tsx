import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thư Viện Từ Vựng, Ngữ Pháp & Mẫu Câu Tiếng Trung",
  description:
    "Tổng hợp kho từ vựng, ngữ pháp, mẫu câu và tài liệu tự học tiếng Trung HSK 0–9 miễn phí cho người Việt.",
  alternates: { canonical: "/library" },
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
