"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, UserPlus, UserRound, AlertCircle } from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function RegisterPage() {
  const router = useRouter();
  const { register, loginGuest } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    const result = register(username, email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/");
  };

  const handleGuestLogin = () => {
    loginGuest();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F2F2F0] px-4 py-10 text-[#262626]">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#292524] text-white shadow-xs">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#262626]">
            Quái Vật Tiếng Trung
          </h1>
          <p className="mt-1 text-sm text-[#737373]">
            Nền tảng tự học tiếng Trung Mức 0 – HSK 9 lưu trữ riêng cho bạn
          </p>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Đăng ký tài khoản</CardTitle>
            <CardDescription>
              Tiến độ, lộ trình HSK 0–9 và sổ từ vựng chữ Hán sẽ được tách biệt an toàn theo tài khoản.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-3">
            {error && (
              <div
                role="alert"
                className="mb-4 flex items-start gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3.5 py-2.5 text-sm text-[#B91C1C]"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label
                  htmlFor="reg-username"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]"
                >
                  Tên người dùng
                </label>
                <input
                  id="reg-username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="vd: Minh An"
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAFAF9] px-3.5 py-2.5 text-sm text-[#262626] placeholder:text-[#A3A3A3] focus:border-[#6B655E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B655E]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]"
                >
                  Email
                </label>
                <input
                  id="reg-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vd: minh.an@email.com"
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAFAF9] px-3.5 py-2.5 text-sm text-[#262626] placeholder:text-[#A3A3A3] focus:border-[#6B655E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B655E]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-password"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]"
                >
                  Mật khẩu
                </label>
                <input
                  id="reg-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ít nhất 4 ký tự"
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAFAF9] px-3.5 py-2.5 text-sm text-[#262626] placeholder:text-[#A3A3A3] focus:border-[#6B655E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B655E]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-confirm"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#737373]"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  id="reg-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu"
                  className="w-full rounded-xl border border-[#E5E5E0] bg-[#FAFAF9] px-3.5 py-2.5 text-sm text-[#262626] placeholder:text-[#A3A3A3] focus:border-[#6B655E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B655E]/20"
                />
              </div>

              <Button type="submit" fullWidth size="lg" className="mt-1">
                <UserPlus className="h-4 w-4" />
                Tạo tài khoản
              </Button>
            </form>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E5E5E0]" />
              <span className="text-xs font-medium text-[#737373]">hoặc</span>
              <div className="h-px flex-1 bg-[#E5E5E0]" />
            </div>

            <Button
              type="button"
              variant="outline"
              fullWidth
              size="md"
              onClick={handleGuestLogin}
            >
              <UserRound className="h-4 w-4 text-[#6B655E]" />
              Dùng thử nhanh / Khách
            </Button>

            <p className="mt-5 text-center text-sm text-[#737373]">
              Đã có tài khoản?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#292524] underline decoration-[#D4D4CE] underline-offset-4 transition-colors hover:text-[#6B655E]"
              >
                Đăng nhập
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
