"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { AIPersonaMode } from "@/types";
import type { CapyMood } from "@/components/ai-tutor/three/CapybaraScene";

export type AvatarGender = "female" | "male";
export type AvatarState = "idle" | "speaking" | "listening" | "analyzing";

const CapybaraScene = dynamic(() => import("@/components/ai-tutor/three/CapybaraScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-1/3 w-1/3 animate-pulse rounded-full bg-[#E59A5C]/40" />
    </div>
  ),
});

interface Avatar3DProps {
  /** Kept for API compatibility (BaoBao capybara is gender-neutral). */
  gender?: AvatarGender;
  state: AvatarState;
  persona: AIPersonaMode;
  isHappyResult?: boolean;
  size?: number;
  /** Optional external .glb model (loaded via useGLTF). */
  glbUrl?: string;
  /** Optional amplitude getter (0..1) from a Web Audio analyser for lip-sync. */
  getAudioLevel?: () => number;
  /** Fill parent instead of fixed square size. */
  fill?: boolean;
  className?: string;
}

const PERSONA_MOOD: Record<string, CapyMood> = {
  "binh-thuong": "chill",
  "vui-ve": "happy",
  "cuoi-nhao": "mocking",
  "khinh-bi": "disdain",
};

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Avatar3D({
  state,
  persona,
  isHappyResult = false,
  size = 210,
  glbUrl,
  getAudioLevel,
  fill = false,
  className = "",
}: Avatar3DProps) {
  const [webgl, setWebgl] = useState(true);
  useEffect(() => setWebgl(hasWebGL()), []);

  const mood: CapyMood = isHappyResult ? "happy" : PERSONA_MOOD[persona] ?? "chill";
  const dim = fill ? undefined : { width: size, height: size };

  return (
    <div
      className={`relative select-none ${fill ? "h-full w-full" : ""} ${className}`}
      style={dim}
      aria-label="Gia sư Capybara BaoBao"
    >
      {webgl ? (
        <CapybaraScene
          mood={mood}
          speaking={state === "speaking"}
          listening={state === "listening"}
          analyzing={state === "analyzing"}
          getAudioLevel={getAudioLevel}
          glbUrl={glbUrl}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-6xl">🦫</div>
      )}
    </div>
  );
}
