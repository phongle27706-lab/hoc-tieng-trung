import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mẫu Câu Giao Tiếp Tiếng Trung Thông Dụng",
  description:
    "Kho mẫu câu giao tiếp tiếng Trung theo tình huống đời sống, du lịch, công việc có phát âm chuẩn và Pinyin.",
  alternates: { canonical: "/phrases" },
};

export default function PhrasesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
