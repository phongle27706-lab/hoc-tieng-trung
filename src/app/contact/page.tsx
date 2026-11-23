import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ đội ngũ Quái Vật Tiếng Trung để góp ý, báo lỗi hoặc hợp tác.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed text-[#404040]">
      <h1 className="text-3xl font-bold text-[#262626]">Liên hệ với chúng tôi</h1>
      <p>
        Đội ngũ Quái Vật Tiếng Trung luôn trân trọng mọi ý kiến đóng góp của người học. Dù bạn muốn
        báo lỗi nội dung, đề xuất tính năng mới, chia sẻ kinh nghiệm học tập hay tìm hiểu cơ hội hợp
        tác, chúng tôi đều sẵn sàng lắng nghe và phản hồi trong thời gian sớm nhất.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Kênh liên hệ</h2>
      <p>
        Email hỗ trợ: <a className="underline" href="mailto:support@quaivattiengtrung.vn">support@quaivattiengtrung.vn</a>.
        Khi gửi email, vui lòng mô tả rõ vấn đề, trang bạn đang sử dụng và nếu có thể, đính kèm ảnh
        chụp màn hình để chúng tôi xử lý nhanh hơn.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Thời gian phản hồi</h2>
      <p>
        Chúng tôi thường trả lời trong vòng một đến hai ngày làm việc. Với các lỗi ảnh hưởng tới việc
        học như không phát được âm thanh, không lưu được tiến độ hoặc gia sư AI BaoBao không phản hồi,
        đội ngũ sẽ ưu tiên kiểm tra và khắc phục ngay. Cảm ơn bạn đã đồng hành cùng chúng tôi!
      </p>
    </article>
  );
}
