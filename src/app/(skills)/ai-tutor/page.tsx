import type { Metadata } from "next";
import { AITutorView } from "@/components/ai-tutor/AITutorView";

export const metadata: Metadata = {
  title: "Gia sư AI BaoBao (包包) 3D — HanziStudio",
  description:
    "Luyện hội thoại tiếng Trung song ngữ Việt - Trung với Gia sư AI BaoBao 4 tính cách (Khinh bỉ, Cười nhạo, Bình thường, Vui vẻ), bật/tắt Pinyin và Live Call 3D cùng Minh Long & Bảo Linh.",
};

export default function AITutorPage() {
  return <AITutorView />;
}
