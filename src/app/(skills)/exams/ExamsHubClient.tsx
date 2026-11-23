"use client";

import React, { useState } from "react";
import { ArrowLeft, Briefcase, ClipboardCheck, FileCheck2 } from "lucide-react";
import PlacementTestPage from "@/app/(skills)/placement-test/page";
import MockExamPage from "@/app/(skills)/mock-exam/page";
import InterviewPage from "@/app/(skills)/interview/page";

type ExamMode = "placement" | "mock" | "interview" | null;

const EXAM_CARDS: {
  id: Exclude<ExamMode, null>;
  title: string;
  chinese: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "placement",
    title: "Test đầu vào",
    chinese: "水平测试",
    description: "Đánh giá trình độ HSK 0 → HSK 7–9.",
    icon: ClipboardCheck,
  },
  {
    id: "mock",
    title: "Thi thử HSK bấm giờ",
    chinese: "模拟考试",
    description: "Đề thi 4 phần có đồng hồ đếm ngược.",
    icon: FileCheck2,
  },
  {
    id: "interview",
    title: "Phỏng vấn & HSKK",
    chinese: "面试与口试",
    description: "Luyện phỏng vấn CSC, Doanh nghiệp TQ, Visa & HSKK có Micro.",
    icon: Briefcase,
  },
];

export function ExamsHubClient({ children }: { children?: React.ReactNode }) {
  const [selected, setSelected] = useState<ExamMode>(null);

  if (selected !== null) {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5E0] bg-white px-4 py-2 text-sm font-medium text-[#262626] transition-colors hover:bg-[#F2F2F0] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 text-[#6B655E]" />
          <span>← Chọn bài kiểm tra khác</span>
        </button>

        {selected === "placement" && <PlacementTestPage />}
        {selected === "mock" && <MockExamPage />}
        {selected === "interview" && <InterviewPage />}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {EXAM_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setSelected(card.id)}
              className="group flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-6 text-left transition-all hover:border-[#6B655E] hover:bg-[#F2F2F0]/60 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E5E0] bg-[#F2F2F0] text-[#262626] transition-colors group-hover:bg-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-medium text-[#6B655E]">
                    {card.chinese}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-[#262626]">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#6B655E]">
                  {card.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-semibold text-[#262626] group-hover:underline">
                Bắt đầu ngay →
              </span>
            </button>
          );
        })}
      </div>

      {children}
    </div>
  );
}
