import { NextResponse, type NextRequest } from "next/server";

// Known top-level routes (from src/app and src/app/(skills)).
const KNOWN_ROUTES = new Set([
  "/", "/about", "/contact", "/privacy", "/dashboard", "/login", "/register",
  "/admin", "/ai-tutor", "/exams", "/grammar", "/hoeren", "/interview", "/library",
  "/listening", "/mock-exam", "/phrases", "/placement-test", "/reading", "/resources",
  "/roadmap", "/speaking", "/study", "/translation", "/vocab", "/writing", "/youtube-hub",
]);

const HOME_MD = `# Quái Vật Tiếng Trung

Nền tảng tự học tiếng Trung miễn phí cho người Việt, từ Mức 0 (Pinyin, 50 bộ thủ) đến HSK 9.

## Tính năng chính
- Lộ trình HSK 0–9 theo chuẩn HSK 3.0, có bài kiểm tra xếp lớp và đề thi thử
- Luyện 4 kỹ năng Nghe, Nói, Đọc, Viết chữ Hán chấm nét
- Từ vựng SRS, Mind Map, ngữ pháp và dịch Việt ↔ Trung
- Gia sư AI Capybara BaoBao 3D hội thoại và sửa phát âm

## Trang
- [Lộ trình](/roadmap)
- [Gia sư AI](/ai-tutor)
- [Giới thiệu](/about) · [Liên hệ](/contact) · [Bảo mật](/privacy)

Sơ đồ trang đầy đủ: [/sitemap.xml](/sitemap.xml)
`;

const NOT_FOUND_MD = `# 404 — Không tìm thấy trang

Trang bạn yêu cầu không tồn tại trên Quái Vật Tiếng Trung. Hãy quay về [trang chủ](/) hoặc xem danh sách trang tại [/sitemap.xml](/sitemap.xml).
`;

function isKnown(pathname: string) {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (KNOWN_ROUTES.has(p)) return true;
  const top = "/" + p.split("/")[1];
  return top !== "/" && KNOWN_ROUTES.has(top);
}

export function middleware(req: NextRequest) {
  const accept = req.headers.get("accept") || "";
  const { pathname } = req.nextUrl;

  if (accept.includes("text/markdown")) {
    const headers = {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    };
    if (pathname === "/") return new NextResponse(HOME_MD, { status: 200, headers });
    if (!isKnown(pathname)) return new NextResponse(NOT_FOUND_MD, { status: 404, headers });
  }

  const res = NextResponse.next();
  res.headers.append("Vary", "Accept");
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|opengraph-image|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
