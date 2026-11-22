"use client";

import React, { useState } from "react";
import { FolderOpen, Youtube } from "lucide-react";
import ResourcesPage from "@/app/(skills)/resources/page";
import { YouTubeHubClient } from "@/components/study/YouTubeHubClient";

type LibraryTab = "resources" | "youtube";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<LibraryTab>("resources");

  return (
    <div className="space-y-6">
      <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-[#E5E5E0] bg-white p-1.5">
        <button
          type="button"
          onClick={() => setActiveTab("resources")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "resources"
              ? "bg-[#262626] text-white"
              : "text-[#6B655E] hover:bg-[#F2F2F0] hover:text-[#262626]"
          }`}
        >
          <FolderOpen className="h-4 w-4" />
          <span>9 Bộ Tài liệu PDF Google Drive</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("youtube")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "youtube"
              ? "bg-[#262626] text-white"
              : "text-[#6B655E] hover:bg-[#F2F2F0] hover:text-[#262626]"
          }`}
        >
          <Youtube className="h-4 w-4" />
          <span>20 Kênh YouTube Tiếng Trung</span>
        </button>
      </div>

      <div>
        {activeTab === "resources" ? <ResourcesPage /> : <YouTubeHubClient />}
      </div>
    </div>
  );
}
