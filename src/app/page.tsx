import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://hoctiengtrung-ashy.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Quái Vật Tiếng Trung",
  url: BASE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "vi",
  description:
    "Nền tảng tự học tiếng Trung từ Mức 0 đến HSK 9 cho người Việt với gia sư AI Capybara BaoBao 3D.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
};

// DashboardView renders the single <h1>; this section continues with h2/h3.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DashboardView />
      <section className="mx-auto mt-10 max-w-4xl space-y-6 px-4 pb-12 text-sm leading-relaxed text-[#404040]">
        <h2 className="text-xl font-bold text-[#262626]">
          Quái Vật Tiếng Trung là gì?
        </h2>
        <p>
          Quái Vật Tiếng Trung là nền tảng tự học tiếng Trung miễn phí dành riêng cho người Việt.
          Bạn bắt đầu từ Mức 0 với bảng Pinyin, thanh điệu và 50 bộ thủ cơ bản, sau đó đi theo lộ
          trình chuẩn HSK 3.0 từ cấp 1 đến cấp 9. Mỗi bài học kết hợp đủ bốn kỹ năng Nghe, Nói, Đọc,
          Viết cùng ngữ pháp và từ vựng được ôn tập bằng thuật toán lặp lại ngắt quãng (SRS).
        </p>
        <h3 className="text-base font-semibold text-[#262626]">Lộ trình HSK 0 – 9 rõ ràng</h3>
        <p>
          Bài kiểm tra xếp lớp giúp xác định trình độ hiện tại, rồi hệ thống gợi ý lộ trình cá nhân
          hóa. Bạn luyện đề thi thử HSK và HSKK, theo dõi tiến độ hằng ngày và nhận nhắc nhở ôn tập
          đúng thời điểm để nhớ từ vựng lâu hơn.
        </p>
        <h3 className="text-base font-semibold text-[#262626]">Gia sư AI Capybara BaoBao 3D</h3>
        <p>
          BaoBao là chú Capybara 3D thân thiện, đóng vai gia sư AI luôn sẵn sàng hội thoại, sửa phát
          âm, giải thích ngữ pháp bằng tiếng Việt và dịch hai chiều Việt ↔ Trung. Học cùng BaoBao giúp
          việc luyện nói trở nên tự nhiên và bớt áp lực.
        </p>
        <h3 className="text-base font-semibold text-[#262626]">Luyện viết chữ Hán chấm nét</h3>
        <p>
          Công cụ luyện viết hướng dẫn thứ tự nét, chấm điểm từng nét và gợi ý cách nhớ chữ qua bộ
          thủ. Kết hợp Mind Map từ vựng, kho mẫu câu giao tiếp và thư viện video YouTube, bạn có đủ
          tài liệu để tự học hiệu quả mỗi ngày.
        </p>
        <h3 className="text-base font-semibold text-[#262626]">
          Chi tiết các chặng học theo chuẩn HSK 3.0 mới nhất
        </h3>
        <p>
          Ở chặng Mức 0 (HSK 0), người mới bắt đầu được làm quen có hệ thống với 21 thanh mẫu, 36 vận
          mẫu, 4 thanh điệu cơ bản cùng quy tắc biến điệu của thanh ba và chữ nhất, chữ bất. Song
          song đó, 50 bộ thủ thông dụng giúp bạn hiểu cấu tạo chữ Hán ngay từ tuần đầu tiên thay vì
          học vẹt từng nét rời rạc. Khi bước lên HSK 1 đến HSK 3, chương trình mở rộng vốn từ lên
          hơn 2.200 từ vựng đời sống, rèn phản xạ nghe hiểu hội thoại ngắn, đọc hiểu đoạn văn thực
          tế và tự tin giao tiếp trong các tình huống mua sắm, ăn uống, đi lại, hỏi đường và học tập.
        </p>
        <p>
          Từ HSK 4 đến HSK 6, bài học tập trung vào ngữ pháp trung cao cấp, liên từ học thuật, thành
          ngữ bốn chữ và kỹ năng đọc lướt, tóm tắt ý chính cũng như viết đoạn văn mạch lạc. Chặng
          HSK 7 đến HSK 9 hướng tới người học chuyên sâu cần đọc báo chí, tài liệu chuyên ngành,
          dịch thuật Việt – Trung chính xác và luyện phỏng vấn hoặc thuyết trình bằng tiếng Trung.
        </p>
        <h3 className="text-base font-semibold text-[#262626]">
          Học miễn phí, lưu tiến độ an toàn trên thiết bị
        </h3>
        <p>
          Mọi công cụ trên Quái Vật Tiếng Trung đều hoạt động ngay trên trình duyệt mà không bắt
          buộc đăng ký tài khoản. Tiến độ bài học, sổ tay lỗi sai, chuỗi ngày học liên tiếp và điểm
          kinh nghiệm được lưu tự động trên máy của bạn; bạn cũng có thể sao lưu ra tệp JSON hoặc
          khôi phục sang thiết bị khác chỉ với một cú nhấp chuột để duy trì thói quen học tiếng
          Trung bền vững mỗi ngày.
        </p>
      </section>
    </>
  );
}
