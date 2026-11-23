import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/youtube-hub" },
};

export default function YouTubeHubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
