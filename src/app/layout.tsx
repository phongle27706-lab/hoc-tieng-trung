import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthContext";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://hoctiengtrung-ashy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Quái Vật Tiếng Trung — Nền Tảng Tự Học Tiếng Trung Mức 0 – HSK 9 Cho Người Việt",
    template: "%s | Quái Vật Tiếng Trung",
  },
  description:
    "Nền tảng tự học tiếng Trung toàn diện từ Mức 0 (Pinyin, 50 bộ thủ) đến HSK 9 dành cho người Việt: Lộ trình cá nhân hóa, Luyện Nghe – Nói – Đọc – Viết chữ Hán chấm nét, Dịch Việt ↔ Trung, Từ vựng Mind Map & Gia sư AI BaoBao 3D.",
  keywords: [
    "học tiếng Trung",
    "tiếng Trung HSK 1-9",
    "tự học tiếng Trung",
    "luyện viết chữ Hán",
    "luyện thi HSK 3.0",
    "luyện thi HSKK",
    "ngữ pháp tiếng Trung",
    "từ vựng tiếng Trung SRS",
    "Quái Vật Tiếng Trung",
  ],
  openGraph: {
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "vi_VN",
    siteName: "Quái Vật Tiếng Trung",
    title: "Quái Vật Tiếng Trung — Nền Tảng Tự Học Tiếng Trung Mức 0 – HSK 9 Cho Người Việt",
    description:
      "Lộ trình học tiếng Trung bài bản Mức 0 – HSK 9 với 4 kỹ năng Nghe, Nói, Đọc, Viết chữ Hán chấm nét, Flashcard SRS và Gia sư AI BaoBao 3D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quái Vật Tiếng Trung — Tự Học Tiếng Trung Mức 0 – HSK 9",
    description:
      "Nền tảng tự học tiếng Trung toàn diện dành cho người Việt: Nghe, Nói, Đọc, Viết chữ Hán, Ngữ pháp & Từ vựng SRS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-screen bg-[#F2F2F0] text-[#262626] antialiased">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
