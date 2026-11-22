"use client";

import React from "react";
import type { SkillScores } from "@/types";

export interface SkillRadarChartProps {
  scores: SkillScores;
  className?: string;
}

interface AxisConfig {
  key: keyof SkillScores;
  labelZh: string;
  labelVi: string;
  angleDeg: number; // 0 = top, 90 = right, 180 = bottom, 270 = left
}

const AXES: AxisConfig[] = [
  { key: "listening", labelZh: "听力", labelVi: "Nghe", angleDeg: 0 },
  { key: "speaking", labelZh: "口语", labelVi: "Nói", angleDeg: 90 },
  { key: "reading", labelZh: "阅读", labelVi: "Đọc", angleDeg: 180 },
  { key: "writing", labelZh: "写作", labelVi: "Viết", angleDeg: 270 },
];

const GRID_LEVELS = [25, 50, 75, 100];
const CENTER = 160;
const RADIUS = 98;

function polarToCartesian(angleDeg: number, radius: number): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value || 0)));
}

export function SkillRadarChart({ scores, className = "" }: SkillRadarChartProps) {
  const normalized = {
    listening: clampScore(scores.listening),
    speaking: clampScore(scores.speaking),
    reading: clampScore(scores.reading),
    writing: clampScore(scores.writing),
  };

  // Minimum visible radius (6%) so 0-score still shows a neat center diamond
  const dataPoints = AXES.map((axis) => {
    const val = normalized[axis.key];
    const r = (Math.max(val, 6) / 100) * RADIUS;
    return {
      ...axis,
      value: val,
      ...polarToCartesian(axis.angleDeg, r),
    };
  });

  const dataPolygonPoints = dataPoints
    .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");

  const average = Math.round(
    (normalized.listening +
      normalized.speaking +
      normalized.reading +
      normalized.writing) /
      4
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-[320px]">
        <svg
          viewBox="0 0 320 320"
          className="h-auto w-full overflow-visible"
          role="img"
          aria-label={`Biểu đồ radar 4 kỹ năng: 听力 Nghe ${normalized.listening}%, 口语 Nói ${normalized.speaking}%, 阅读 Đọc ${normalized.reading}%, 写作 Viết ${normalized.writing}%`}
        >
          <defs>
            <linearGradient id="taupeRadarFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B655E" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#A8A29E" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {/* Concentric grid polygons */}
          {GRID_LEVELS.map((level) => {
            const r = (level / 100) * RADIUS;
            const pts = AXES.map((a) => {
              const p = polarToCartesian(a.angleDeg, r);
              return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
            }).join(" ");
            return (
              <polygon
                key={level}
                points={pts}
                fill="none"
                stroke="#A8A29E"
                strokeOpacity={level === 100 ? 0.55 : 0.35}
                strokeWidth={level === 100 ? 1.5 : 1}
                strokeDasharray={level === 100 ? undefined : "3 3"}
              />
            );
          })}

          {/* Axis lines */}
          {AXES.map((axis) => {
            const outer = polarToCartesian(axis.angleDeg, RADIUS);
            return (
              <line
                key={axis.key}
                x1={CENTER}
                y1={CENTER}
                x2={outer.x}
                y2={outer.y}
                stroke="#A8A29E"
                strokeOpacity={0.45}
                strokeWidth={1}
              />
            );
          })}

          {/* Data polygon */}
          <polygon
            points={dataPolygonPoints}
            fill="url(#taupeRadarFill)"
            stroke="#6B655E"
            className="transition-all duration-500"
            strokeWidth={2.5}
            strokeLinejoin="round"
          />

          {/* Data vertex dots */}
          {dataPoints.map((pt) => (
            <g key={pt.key}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r={5}
                fill="#6B655E"
                stroke="#FFFFFF"
                className="transition-all duration-500"
                strokeWidth={2}
              />
            </g>
          ))}

          {/* Axis labels + percentage */}
          {AXES.map((axis) => {
            const val = normalized[axis.key];
            const labelRadius = RADIUS + 28;
            const pos = polarToCartesian(axis.angleDeg, labelRadius);

            let textAnchor: "middle" | "start" | "end" = "middle";
            let dyOffset = 0;
            if (axis.angleDeg === 0) {
              dyOffset = -6;
            } else if (axis.angleDeg === 90) {
              textAnchor = "start";
              dyOffset = -2;
            } else if (axis.angleDeg === 180) {
              dyOffset = 10;
            } else if (axis.angleDeg === 270) {
              textAnchor = "end";
              dyOffset = -2;
            }

            return (
              <g key={`label-${axis.key}`}>
                <text
                  x={pos.x}
                  y={pos.y + dyOffset}
                  textAnchor={textAnchor}
                  className="fill-[#262626] text-[12px] font-bold"
                >
                  {axis.labelZh}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + dyOffset + 15}
                  textAnchor={textAnchor}
                  className="fill-[#6B655E] text-[11px] font-semibold"
                >
                  {axis.labelVi} · {val}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Summary Footer */}
      <div className="mt-1 flex items-center gap-2 rounded-full border border-[#E5E5E0] bg-[#F2F2F0] px-3.5 py-1 text-xs font-medium text-[#737373]">
        <span>Trung bình 4 kỹ năng:</span>
        <span className="font-bold text-[#262626]">{average}%</span>
      </div>
    </div>
  );
}
