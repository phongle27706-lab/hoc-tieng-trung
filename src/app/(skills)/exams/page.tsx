import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileCheck2, Mic } from "lucide-react";
import { MOCK_EXAMS } from "@/data/mock-exams";
import { INTERVIEW_TRACKS } from "@/data/interview";
import { ExamsHubClient } from "./ExamsHubClient";

export const metadata: Metadata = {
  title: "Luyện Thi Thử HSK 1–9 & HSKK Chuẩn HSK 3.0 Miễn Phí",
  description:
    "Trung tâm thi thử HSK 1 đến HSK 9 bấm giờ, test đầu vào HSK 0–9 và luyện phỏng vấn CSC, doanh nghiệp Trung Quốc & khẩu ngữ HSKK miễn phí.",
  alternates: { canonical: "/exams" },
};

export default function ExamsHubPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B655E]">
          考试与面试 · Trung tâm Đánh giá &amp; Thi thử
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold text-[#262626]">
          Thi thử HSK 1–9 &amp; HSKK Chuẩn HSK 3.0
        </h1>
        <p className="mt-1 text-sm text-[#6B655E]">
          Đánh giá năng lực hiện tại, luyện bộ đề thi thử HSK 1 đến HSK 9 có bấm giờ hoặc luyện phỏng vấn &amp; khẩu ngữ HSKK.
        </p>
      </div>

      <ExamsHubClient>
        {/* Server-Side Rendered HSK 1–9 Mock Exam Directory */}
        <section
          aria-labelledby="ssr-hsk-exams-heading"
          className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5E0] pb-4">
            <div>
              <h2
                id="ssr-hsk-exams-heading"
                className="font-display text-lg font-bold text-[#262626]"
              >
                Danh sách đề thi thử HSK 1 – HSK 9 chuẩn HSK 3.0
              </h2>
              <p className="mt-0.5 text-xs text-[#6B655E]">
                Đầy đủ 9 cấp độ HSK gồm 4 phần Nghe, Từ vựng, Ngữ pháp và Đọc hiểu có đáp án &amp; giải thích chi tiết.
              </p>
            </div>
            <Link
              href="/mock-exam"
              className="text-xs font-semibold text-[#262626] underline-offset-4 hover:underline"
            >
              Mở phòng thi bấm giờ →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_EXAMS.map((exam) => (
              <Link
                key={exam.id}
                href={`/mock-exam?level=${exam.level}`}
                className="group flex flex-col justify-between rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 transition-colors hover:border-[#6B655E] hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#262626] px-2 py-0.5 text-[11px] font-bold text-white">
                      <FileCheck2 className="h-3 w-3" />
                      {exam.level}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6B655E]">
                      <Clock className="h-3 w-3" />
                      {exam.durationMinutes} phút · {exam.questions.length} câu
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-bold text-[#262626] group-hover:underline">
                    {exam.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#6B655E]">
                    {exam.descriptionVi}
                  </p>
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#737373]">
                  {exam.examStandard}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Server-Side Rendered HSKK & Interview Tracks */}
        <section
          aria-labelledby="ssr-hskk-tracks-heading"
          className="space-y-4 rounded-2xl border border-[#E5E5E0] bg-white p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5E0] pb-4">
            <div>
              <h2
                id="ssr-hskk-tracks-heading"
                className="font-display text-lg font-bold text-[#262626]"
              >
                Luyện thi Khẩu ngữ HSKK &amp; Phỏng vấn thực chiến
              </h2>
              <p className="mt-0.5 text-xs text-[#6B655E]">
                Bộ câu hỏi HSKK Sơ – Trung – Cao cấp, phỏng vấn học bổng CSC, doanh nghiệp Trung Quốc &amp; Visa du học.
              </p>
            </div>
            <Link
              href="/interview"
              className="text-xs font-semibold text-[#262626] underline-offset-4 hover:underline"
            >
              Vào phòng luyện nói HSKK →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INTERVIEW_TRACKS.map((track) => (
              <Link
                key={track.id}
                href={`/interview?track=${track.id}`}
                className="group flex flex-col justify-between rounded-xl border border-[#E5E5E0] bg-[#FAF9F7] p-4 transition-colors hover:border-[#6B655E] hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-[#E5E5E0] bg-white px-2 py-0.5 text-[11px] font-semibold text-[#262626]">
                      <Mic className="h-3 w-3 text-[#6B655E]" />
                      {track.badgeText}
                    </span>
                    <span className="text-[11px] font-medium text-[#6B655E]">
                      {track.questions.length} câu hỏi
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-bold text-[#262626] group-hover:underline">
                    {track.titleVi}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-[#737373]">
                    {track.titleZh}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#6B655E]">
                    {track.subtitleVi}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ExamsHubClient>
    </div>
  );
}
