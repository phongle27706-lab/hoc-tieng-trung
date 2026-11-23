import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu Quái Vật Tiếng Trung – nền tảng tự học tiếng Trung Mức 0 – HSK 9 cho người Việt.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed text-[#404040]">
      <h1 className="text-3xl font-bold text-[#262626]">Giới thiệu Quái Vật Tiếng Trung</h1>
      <p>
        Quái Vật Tiếng Trung ra đời với mong muốn giúp người Việt tự học tiếng Trung một cách bài
        bản, vui vẻ và hoàn toàn miễn phí. Chúng tôi tin rằng ai cũng có thể chinh phục tiếng Trung
        nếu có lộ trình rõ ràng, tài liệu chất lượng và một người bạn đồng hành kiên nhẫn.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Sứ mệnh</h2>
      <p>
        Sứ mệnh của chúng tôi là xây dựng lộ trình học từ Mức 0 – làm quen Pinyin, thanh điệu và 50
        bộ thủ – cho đến HSK 9 theo chuẩn HSK 3.0 mới nhất. Mỗi cấp độ đều có bài học Nghe, Nói,
        Đọc, Viết, ngữ pháp, từ vựng ôn tập theo phương pháp lặp lại ngắt quãng và đề thi thử sát
        với kỳ thi thật.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Gia sư AI BaoBao</h2>
      <p>
        Điểm đặc biệt của nền tảng là BaoBao – chú Capybara 3D đóng vai gia sư AI. BaoBao có thể trò
        chuyện bằng tiếng Trung, giải thích bằng tiếng Việt, sửa lỗi phát âm và gợi ý cách dùng từ tự
        nhiên. Nhờ vậy, việc luyện nói không còn đáng sợ mà trở thành một phần thú vị mỗi ngày.
      </p>
    </article>
  );
}
