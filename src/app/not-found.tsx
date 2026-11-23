import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-[#262626]">404 — Không tìm thấy trang</h1>
      <p className="mt-4 text-[#404040]">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển. Hãy quay về trang chủ để tiếp tục hành
        trình học tiếng Trung cùng BaoBao.
      </p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-[#262626] px-5 py-2 text-[#F2F2F0]">
        Về trang chủ
      </Link>
    </div>
  );
}
