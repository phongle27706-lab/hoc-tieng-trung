import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiểm Tra Xếp Lớp Tiếng Trung HSK 0–9 Miễn Phí",
  description:
    "Bài test đầu vào đánh giá nhanh năng lực tiếng Trung từ Mức 0 đến HSK 9 và gợi ý lộ trình học cá nhân hóa.",
  alternates: { canonical: "/placement-test" },
};

export default function PlacementTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
