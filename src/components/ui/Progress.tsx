import React from "react";

export interface ProgressProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeHeights = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-3.5",
};

export function Progress({
  value,
  max = 100,
  label,
  showPercent = false,
  size = "md",
  className = "",
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, max > 0 ? (value / max) * 100 : 0));

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercent) && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-[#737373]">
          {label && <span>{label}</span>}
          {showPercent && (
            <span className="font-semibold text-[#292524]">
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`w-full overflow-hidden rounded-full bg-[#E5E5E0] ${sizeHeights[size]}`}
      >
        <div
          className="h-full rounded-full bg-[#6B655E] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
