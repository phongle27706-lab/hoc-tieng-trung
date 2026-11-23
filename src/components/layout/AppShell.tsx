"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Bot,
  BookMarked,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  Mic,
  BookOpen,
  PenLine,
  Flame,
  Zap,
  LogIn,
  LogOut,
  UserRound,
  Download,
  Upload,
  AlertCircle,
  Languages,
  FolderOpen,
  ChevronDown,
  MoreHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/components/auth/AuthContext";
import {
  DEFAULT_USER_PROGRESS,
  exportUserDataJson,
  getMistakes,
  getUserProgress,
  importUserDataJson,
  subscribeStorageUpdates,
} from "@/lib/storage";
import type { UserProgress } from "@/types";

interface NavItem {
  href: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Tổng quan",
    shortLabel: "Tổng quan",
    icon: LayoutDashboard,
  },
  {
    href: "/roadmap",
    label: "Lộ trình HSK 0 → 7–9",
    shortLabel: "Lộ trình",
    icon: Map,
  },
  {
    href: "/vocab",
    label: "Từ vựng & Mẫu câu",
    shortLabel: "Từ vựng",
    icon: BookMarked,
  },
  {
    href: "/grammar",
    label: "Ngữ pháp",
    shortLabel: "Ngữ pháp",
    icon: GraduationCap,
  },
  {
    href: "/exams",
    label: "Kiểm tra & Thi thử",
    shortLabel: "Kiểm tra",
    icon: ClipboardCheck,
  },
  {
    href: "/ai-tutor",
    label: "Gia sư AI BaoBao",
    shortLabel: "BaoBao AI",
    icon: Bot,
  },
];

export const SKILL_NAV_ITEMS: NavItem[] = [
  {
    href: "/listening",
    label: "Luyện Nghe",
    shortLabel: "Nghe",
    icon: Headphones,
  },
  {
    href: "/speaking",
    label: "Luyện Nói",
    shortLabel: "Nói",
    icon: Mic,
  },
  {
    href: "/reading",
    label: "Luyện Đọc",
    shortLabel: "Đọc",
    icon: BookOpen,
  },
  {
    href: "/writing",
    label: "Luyện Viết",
    shortLabel: "Viết",
    icon: PenLine,
  },
  {
    href: "/translation",
    label: "Dịch Việt ↔ Trung",
    shortLabel: "Dịch",
    icon: Languages,
  },
];

const ALL_NAV_ITEMS: NavItem[] = [...PRIMARY_NAV_ITEMS, ...SKILL_NAV_ITEMS];

const MOBILE_MAIN_TABS: NavItem[] = [
  {
    href: "/",
    label: "Tổng quan",
    shortLabel: "Tổng quan",
    icon: LayoutDashboard,
  },
  {
    href: "/roadmap",
    label: "Lộ trình HSK 0 → 7–9",
    shortLabel: "Lộ trình",
    icon: Map,
  },
  {
    href: "/vocab",
    label: "Từ vựng & Mẫu câu",
    shortLabel: "Từ vựng",
    icon: BookMarked,
  },
  {
    href: "/ai-tutor",
    label: "Gia sư AI BaoBao",
    shortLabel: "BaoBao AI",
    icon: Bot,
  },
];

const MOBILE_MORE_EXTRA_ITEMS: NavItem[] = [
  {
    href: "/grammar",
    label: "Ngữ pháp",
    shortLabel: "Ngữ pháp",
    icon: GraduationCap,
  },
  {
    href: "/exams",
    label: "Thi thử",
    shortLabel: "Thi thử",
    icon: ClipboardCheck,
  },
  {
    href: "/library",
    label: "Thư viện Tài liệu & Video",
    shortLabel: "Thư viện",
    icon: FolderOpen,
  },
];

function getPageTitle(pathname: string): { title: string; subtitle: string } {
  if (pathname === "/") {
    return { title: "Tổng quan học tập", subtitle: "Quái Vật Tiếng Trung · HSK 0 – 9" };
  }
  if (pathname.startsWith("/study")) {
    return { title: "Phòng tự học", subtitle: "Video & Bài tập chuyên biệt" };
  }
  if (pathname.startsWith("/exams")) {
    return { title: "Kiểm tra & Thi thử", subtitle: "Test đầu vào, Thi thử HSK & Phỏng vấn" };
  }
  if (pathname.startsWith("/library")) {
    return { title: "Thư viện Tài liệu & Video", subtitle: "9 Bộ PDF & 20 Kênh YouTube" };
  }
  const match = ALL_NAV_ITEMS.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href)
  );
  if (match) {
    return { title: match.label, subtitle: "Quái Vật Tiếng Trung · HSK 0 – 9" };
  }
  return { title: "Quái Vật Tiếng Trung", subtitle: "HSK 0 – 9" };
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [backupNotice, setBackupNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isAuthPage = pathname === "/login" || pathname === "/register";
  const isSkillRoute = SKILL_NAV_ITEMS.some((item) => pathname.startsWith(item.href));
  const isMoreRoute =
    isSkillRoute ||
    MOBILE_MORE_EXTRA_ITEMS.some((item) => pathname.startsWith(item.href));
  const [skillsOpen, setSkillsOpen] = useState<boolean>(isSkillRoute);
  const [moreOpen, setMoreOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isSkillRoute) {
      setSkillsOpen(true);
    }
  }, [isSkillRoute]);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isAuthPage) return;
    setProgress(getUserProgress());
    setMistakeCount(getMistakes().length);

    const unsubscribe = subscribeStorageUpdates(() => {
      setProgress(getUserProgress());
      setMistakeCount(getMistakes().length);
    });

    return unsubscribe;
  }, [isAuthPage, user?.id]);

  const showTempNotice = (msg: string) => {
    setBackupNotice(msg);
    window.setTimeout(() => {
      setBackupNotice((prev) => (prev === msg ? null : prev));
    }, 2600);
  };

  const handleExportBackup = () => {
    try {
      const json = exportUserDataJson();
      const blob = new Blob([json], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "quai-vat-tieng-trung-backup.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showTempNotice("Đã tải file sao lưu");
    } catch {
      showTempNotice("Không thể sao lưu");
    }
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      const ok = importUserDataJson(text);
      showTempNotice(ok ? "Đã khôi phục dữ liệu" : "File JSON không hợp lệ");
    };
    reader.readAsText(file);
  };

  if (isAuthPage) {
    return <>{children}</>;
  }

  const pageMeta = getPageTitle(pathname);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const displayName = user ? user.username : "Khách";
  const isLoggedInAccount = Boolean(user && !user.isGuest);

  const renderNavLink = (item: NavItem) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
          active
            ? "bg-[#F2F2F0] font-semibold text-[#292524] shadow-[inset_0_0_0_1px_#E5E5E0]"
            : "font-medium text-[#6B655E] hover:bg-[#FAF9F7] hover:text-[#262626]"
        }`}
      >
        <Icon
          className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
            active
              ? "text-[#292524]"
              : "text-[#A3A3A3] group-hover:text-[#6B655E]"
          }`}
        />
        <span className="truncate">{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F2F0] text-[#262626]">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-[#E5E5E0] bg-white md:flex">
        {/* Brand */}
        <div className="flex h-14 items-center border-b border-[#E5E5E0] px-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#292524] text-white transition-transform duration-200 group-hover:scale-105">
              <span className="font-display text-xs font-bold">汉</span>
            </div>
            <div className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-tight text-[#262626]">
                Quái Vật Tiếng Trung
              </span>
              <span className="block text-[10px] font-medium text-[#737373]">
                HSK 0 – 9
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex-1 space-y-5 overflow-y-auto px-3 py-4"
          aria-label="Điều hướng chính"
        >
          <div className="space-y-0.5">{PRIMARY_NAV_ITEMS.map(renderNavLink)}</div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setSkillsOpen((prev) => !prev)}
              aria-expanded={skillsOpen}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#6B655E] transition-colors hover:bg-[#FAF9F7] hover:text-[#262626] cursor-pointer"
            >
              <span>Kỹ năng</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  skillsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {skillsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-0.5 pt-0.5">
                    {SKILL_NAV_ITEMS.map(renderNavLink)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Sidebar Footer: Account, Mistake Counter & JSON Backup */}
        <div className="border-t border-[#E5E5E0] p-3 space-y-2">
          <div className="flex items-center justify-between gap-2 rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] px-2.5 py-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#6B655E] ring-1 ring-[#E5E5E0]">
                <UserRound className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-[#262626]">
                  {displayName}
                </p>
                <p className="truncate text-[11px] text-[#737373]">
                  {isLoggedInAccount ? user?.email : "Chế độ khách"}
                </p>
              </div>
            </div>

            {isLoggedInAccount ? (
              <button
                type="button"
                onClick={handleLogout}
                title="Đăng xuất"
                aria-label="Đăng xuất"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[#737373] transition-colors hover:bg-[#E5E5E0]/60 hover:text-[#262626] cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            ) : (
              <Link
                href="/login"
                title="Đăng nhập"
                aria-label="Đăng nhập"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[#6B655E] transition-colors hover:bg-[#E5E5E0]/60 hover:text-[#292524]"
              >
                <LogIn className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>

          <Link
            href="/library"
            className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
              pathname.startsWith("/library")
                ? "border-brand bg-brand-soft text-brand-active"
                : "border-[#E5E5E0] bg-white text-[#4A4540] hover:bg-[#FAF9F7] hover:text-[#292524]"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <FolderOpen className="h-3.5 w-3.5 shrink-0" />
              <span>Thư viện Tài liệu & Video</span>
            </span>
          </Link>

          <Link
            href="/vocab?tab=mistakes"
            className="flex items-center justify-between rounded-lg border border-[#E5E5E0] bg-white px-2.5 py-1.5 text-[11px] text-[#6B655E] transition-colors hover:border-[#6B655E]/50 hover:bg-[#FAF9F7] hover:text-[#292524]"
          >
            <span className="inline-flex items-center gap-1.5 font-medium">
              <AlertCircle className="h-3.5 w-3.5 text-brand" />
              <span>Lỗi cần ôn</span>
            </span>
            <span className="rounded-full bg-[#F2F2F0] px-2 py-0.5 font-semibold text-[#292524]">
              {mistakeCount}
            </span>
          </Link>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={handleExportBackup}
              className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2 py-1.5 text-[11px] font-medium text-[#4A4540] transition-colors hover:bg-[#FAF9F7] hover:text-[#292524] cursor-pointer"
              title="Tải xuống bản sao lưu JSON (quai-vat-tieng-trung-backup.json)"
            >
              <Download className="h-3 w-3 shrink-0" />
              <span className="whitespace-nowrap">Sao lưu</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#E5E5E0] bg-white px-2 py-1.5 text-[11px] font-medium text-[#4A4540] transition-colors hover:bg-[#FAF9F7] hover:text-[#292524] cursor-pointer"
              title="Khôi phục tiến độ từ file JSON"
            >
              <Upload className="h-3 w-3 shrink-0" />
              <span className="whitespace-nowrap">Khôi phục</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              onChange={handleImportBackup}
              className="hidden"
              aria-label="Chọn file JSON để khôi phục"
            />
          </div>

          {backupNotice && (
            <p className="text-center text-[11px] font-medium text-[#6B655E]">
              {backupNotice}
            </p>
          )}
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex min-h-screen flex-col md:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-[#E5E5E0] bg-white/90 px-4 backdrop-blur-md sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile Brand Icon */}
            <Link
              href="/"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#292524] text-white md:hidden"
              aria-label="Quái Vật Tiếng Trung Trang chủ"
            >
              <span className="font-display text-xs font-bold">汉</span>
            </Link>
            <div className="flex min-w-0 items-baseline gap-2.5">
              <p className="truncate font-display text-base font-bold tracking-tight text-[#262626]">
                {pageMeta.title}
              </p>
              <span className="hidden truncate text-xs text-[#737373] sm:inline">
                {pageMeta.subtitle}
              </span>
            </div>
          </div>

          {/* Compact Status Pills & Account Action */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="flex items-center divide-x divide-amber-200 rounded-full border border-amber-200 bg-gami-soft text-xs font-semibold text-amber-900">
              <span
                className="flex items-center gap-1 px-2 py-1 sm:px-2.5"
                title="Chuỗi ngày học liên tiếp"
              >
                <Flame className="h-3.5 w-3.5 text-orange-500" fill="currentColor" />
                <span>{progress.streakDays}</span>
              </span>
              <span
                className="flex items-center gap-1 px-2 py-1 sm:px-2.5"
                title="Điểm kinh nghiệm"
              >
                <Zap className="h-3.5 w-3.5 text-amber-500" fill="currentColor" />
                <span>{progress.xp}</span>
                <span className="hidden text-[11px] font-medium text-[#737373] sm:inline">
                  XP
                </span>
              </span>
            </div>

            <span
              className="inline-flex h-7 items-center whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2 text-xs font-bold text-white shadow-xs sm:px-2.5"
              title="Trình độ HSK hiện tại"
            >
              {progress.level === "HSK0" ? (
                <>
                  <span className="sm:hidden">Mức 0</span>
                  <span className="hidden sm:inline">Mức 0 (HSK0)</span>
                </>
              ) : (
                progress.level
              )}
            </span>

            {isLoggedInAccount ? (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-[#E5E5E0] bg-white px-2 text-xs font-medium text-[#525252] transition-colors hover:bg-[#F2F2F0] hover:text-[#262626] cursor-pointer sm:px-2.5 md:hidden"
                title="Đăng xuất"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            ) : (
              <Link
                href="/login"
                className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-brand px-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-hover sm:px-3"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </Link>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="mx-auto w-full max-w-6xl min-w-0 flex-1 overflow-x-hidden px-4 py-6 pb-8 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="mx-auto w-full max-w-6xl px-4 pb-24 pt-2 text-xs text-[#737373] sm:px-6 md:pb-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E5E5E0] pt-4">
            <span>© {new Date().getFullYear()} Quái Vật Tiếng Trung</span>
            <nav aria-label="Liên kết chân trang" className="flex items-center gap-4">
              <Link href="/about" className="transition-colors hover:text-brand">
                Giới thiệu
              </Link>
              <Link href="/contact" className="transition-colors hover:text-brand">
                Liên hệ
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-brand">
                Chính sách bảo mật
              </Link>
            </nav>
          </div>
        </footer>
      </div>

      {/* Mobile "Thêm" Bottom Drawer / Sheet */}
      <AnimatePresence>
        {moreOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMoreOpen(false)}
              className="absolute inset-0 bg-[#292524]/45 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu mở rộng"
              className="absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-3xl border-t border-[#E5E5E0] bg-white px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+5rem)] shadow-2xl"
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#E5E5E0]" />
              <div className="flex items-center justify-between pb-3">
                <h2 className="font-display text-sm font-bold text-[#262626]">
                  Khám phá thêm
                </h2>
                <button
                  type="button"
                  onClick={() => setMoreOpen(false)}
                  aria-label="Đóng menu"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F2F0] text-[#6B655E] transition-colors hover:text-[#262626] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 5 Kỹ năng */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  5 Kỹ năng
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {SKILL_NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        className={`flex flex-col items-center justify-center gap-1 rounded-2xl border px-1 py-2.5 text-[11px] font-medium transition-colors ${
                          active
                            ? "border-[#292524] bg-[#292524] text-white"
                            : "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-[#6B655E]"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate max-w-full">{item.shortLabel}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Ngữ pháp, Thi thử, Thư viện Tài liệu & Video */}
              <div className="mt-4 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  Học liệu &amp; Kiểm tra
                </p>
                <div className="space-y-1.5">
                  {MOBILE_MORE_EXTRA_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    const isLibrary = item.href === "/library";
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-sm font-semibold transition-colors ${
                          active
                            ? "border-brand bg-brand-soft text-brand-active"
                            : isLibrary
                            ? "border-[#E5E5E0] bg-[#FAF9F7] text-[#262626] hover:border-brand/50"
                            : "border-[#E5E5E0] bg-white text-[#262626] hover:bg-[#FAF9F7]"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                            active
                              ? "bg-brand text-white"
                              : "bg-[#F2F2F0] text-[#292524]"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/vocab?tab=mistakes"
                    onClick={() => setMoreOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-[#E5E5E0] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#262626] transition-colors hover:bg-[#FAF9F7]"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <AlertCircle className="h-4 w-4" />
                      </span>
                      <span>Lỗi cần ôn</span>
                    </span>
                    <span className="rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-bold text-[#292524]">
                      {mistakeCount}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar — Exactly 5 Main Tabs */}
      <nav
        aria-label="Điều hướng di động"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E5E5E0] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <div className="grid h-15 grid-cols-5 items-center px-1">
          {MOBILE_MAIN_TABS.map((item) => {
            const Icon = item.icon;
            const active = !moreOpen && isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMoreOpen(false)}
                className={`flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-medium transition-all duration-200 ${
                  active
                    ? "text-[#292524]"
                    : "text-[#737373] hover:text-[#262626]"
                }`}
              >
                <span
                  className={`flex h-7 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                    active ? "bg-[#F2F2F0] text-[#292524]" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="truncate max-w-full">{item.shortLabel}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setMoreOpen((prev) => !prev)}
            aria-expanded={moreOpen}
            aria-label="Mở menu thêm"
            className={`flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-medium transition-all duration-200 cursor-pointer ${
              moreOpen || isMoreRoute
                ? "text-[#292524]"
                : "text-[#737373] hover:text-[#262626]"
            }`}
          >
            <span
              className={`flex h-7 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                moreOpen || isMoreRoute ? "bg-[#F2F2F0] text-[#292524]" : ""
              }`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
            <span className="truncate max-w-full">Thêm</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
