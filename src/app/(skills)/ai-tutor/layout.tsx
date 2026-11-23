import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/ai-tutor" },
};

export default function AITutorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
