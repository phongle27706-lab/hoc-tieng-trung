import { Suspense } from "react";
import { VocabHubClient } from "@/components/vocab/VocabHubClient";

export default function VocabPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-5xl py-10 text-sm text-[#737373]">
          Đang tải trung tâm từ vựng...
        </div>
      }
    >
      <VocabHubClient />
    </Suspense>
  );
}
