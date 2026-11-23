import React from "react";

export type BadgeVariant =
  | "default"
  | "accent"
  | "tone1"
  | "tone2"
  | "tone3"
  | "tone4"
  | "success"
  | "warning"
  | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#EFEFEA] text-[#4A4540]",
  accent: "bg-brand-soft text-brand-active",
  tone1: "bg-[#EFF6FF] text-[#1D4ED8]",
  tone2: "bg-[#ECFDF5] text-[#047857]",
  tone3: "bg-[#FEFCE8] text-[#A16207]",
  tone4: "bg-[#FDF2F8] text-[#BE185D]",
  success: "bg-[#F0FDF4] text-[#15803D]",
  warning: "bg-[#FEFCE8] text-[#A16207]",
  outline: "border border-[#E5E5E0] bg-white text-[#525252]",
};

export function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
