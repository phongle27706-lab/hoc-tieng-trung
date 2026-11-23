import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://hoctiengtrung-ashy.vercel.app";

const PUBLIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/roadmap", priority: 0.95, changeFrequency: "weekly" },
  { path: "/ai-tutor", priority: 0.9, changeFrequency: "weekly" },
  { path: "/vocab", priority: 0.9, changeFrequency: "weekly" },
  { path: "/grammar", priority: 0.9, changeFrequency: "weekly" },
  { path: "/translation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/phrases", priority: 0.85, changeFrequency: "weekly" },
  { path: "/interview", priority: 0.85, changeFrequency: "weekly" },
  { path: "/mock-exam", priority: 0.85, changeFrequency: "weekly" },
  { path: "/placement-test", priority: 0.8, changeFrequency: "monthly" },
  { path: "/youtube-hub", priority: 0.85, changeFrequency: "weekly" },
  { path: "/listening", priority: 0.85, changeFrequency: "weekly" },
  { path: "/speaking", priority: 0.85, changeFrequency: "weekly" },
  { path: "/reading", priority: 0.85, changeFrequency: "weekly" },
  { path: "/writing", priority: 0.85, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PUBLIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
