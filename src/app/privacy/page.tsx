import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Chính sách bảo mật và quyền riêng tư của Quái Vật Tiếng Trung.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed text-[#404040]">
      <h1 className="text-3xl font-bold text-[#262626]">Chính sách bảo mật</h1>
      <p>
        Quái Vật Tiếng Trung tôn trọng quyền riêng tư của người dùng. Chính sách này giải thích những
        dữ liệu chúng tôi thu thập, cách sử dụng và các quyền của bạn đối với thông tin cá nhân khi
        sử dụng nền tảng tự học tiếng Trung.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Dữ liệu thu thập</h2>
      <p>
        Khi đăng ký, chúng tôi lưu địa chỉ email và tên hiển thị. Trong quá trình học, hệ thống ghi
        nhận tiến độ bài học, kết quả bài kiểm tra và lịch ôn tập từ vựng để cá nhân hóa lộ trình.
        Bản ghi âm luyện phát âm chỉ được xử lý để chấm điểm và không được chia sẻ cho bên thứ ba.
      </p>
      <h2 className="text-xl font-semibold text-[#262626]">Quyền của bạn</h2>
      <p>
        Bạn có thể yêu cầu xem, chỉnh sửa hoặc xóa toàn bộ dữ liệu tài khoản bất cứ lúc nào bằng cách
        liên hệ qua trang Liên hệ. Chúng tôi không bán dữ liệu cá nhân và chỉ sử dụng cookie cần thiết
        để duy trì phiên đăng nhập cũng như cải thiện trải nghiệm học tập.
      </p>
    </article>
  );
}
