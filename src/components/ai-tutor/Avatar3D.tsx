"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { AIPersonaMode } from "@/types";

export type AvatarGender = "female" | "male";
export type AvatarState = "idle" | "speaking" | "listening" | "analyzing";

interface Avatar3DProps {
  gender: AvatarGender;
  state: AvatarState;
  persona: AIPersonaMode;
  isHappyResult?: boolean;
  size?: number;
}

export function Avatar3D({
  gender,
  state,
  persona,
  isHappyResult = false,
  size = 210,
}: Avatar3DProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Natural eye blink every ~3.4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      const t = setTimeout(() => setIsBlinking(false), 150);
      return () => clearTimeout(t);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  const expression: AIPersonaMode = isHappyResult ? "vui-ve" : persona;
  const isSpeaking = state === "speaking";
  const isListening = state === "listening";

  // Subtle head motion per state
  const headAnimate = isSpeaking
    ? { y: [0, -3, 0, -2, 0], rotate: [0, 1.5, -1, 1, 0] }
    : isListening
      ? { rotate: -3.5, y: -2 }
      : { y: [0, -2, 0], rotate: [0, 0.8, 0] };

  const headTransition = isSpeaking
    ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" as const }
    : isListening
      ? { type: "spring" as const, stiffness: 220, damping: 20 }
      : { duration: 4.2, repeat: Infinity, ease: "easeInOut" as const };

  // Eyebrow offsets by persona
  const leftBrowY =
    expression === "khinh-bi"
      ? 2.5
      : expression === "cuoi-nhao"
        ? -2.5
        : expression === "vui-ve"
          ? -1.5
          : 0;
  const rightBrowY =
    expression === "khinh-bi"
      ? -1.5
      : expression === "cuoi-nhao"
        ? 1
        : expression === "vui-ve"
          ? -1.5
          : 0;
  const leftBrowRot =
    expression === "khinh-bi" ? 10 : expression === "cuoi-nhao" ? -8 : 0;
  const rightBrowRot =
    expression === "khinh-bi" ? -6 : expression === "cuoi-nhao" ? 6 : 0;

  // Eye pupil horizontal glance for khinh-bi
  const pupilX = expression === "khinh-bi" ? 2.2 : 0;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* Concentric Soundwave Rings when Speaking */}
      {isSpeaking && (
        <>
          <motion.span
            className="absolute inset-2 rounded-full border border-[#6B655E]/35"
            initial={{ scale: 0.92, opacity: 0.65 }}
            animate={{ scale: 1.18, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border border-[#6B655E]/25"
            initial={{ scale: 0.92, opacity: 0.5 }}
            animate={{ scale: 1.28, opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </>
      )}

      {/* Listening Capture Halo */}
      {isListening && (
        <motion.span
          className="absolute inset-1 rounded-full border-2 border-[#15803D]/40 bg-[#F0FDF4]/30"
          animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* 3D-Shaded Studio Portrait Container (Bảo Linh 宝玲 / Minh Long 明龙) */}
      <div className="relative h-full w-full overflow-hidden rounded-full border border-[#E5E5E0] bg-gradient-to-b from-[#FAF9F7] via-[#F2F1ED] to-[#E6E3DC] shadow-[0_14px_34px_-12px_rgba(41,37,36,0.22),inset_0_2px_6px_rgba(255,255,255,0.9)]">
        <motion.svg
          viewBox="0 0 220 220"
          className="h-full w-full"
          animate={headAnimate}
          transition={headTransition}
        >
          <defs>
            {/* 3D Skin Radial Shading */}
            <radialGradient id="skin3d" cx="42%" cy="35%" r="62%">
              <stop offset="0%" stopColor="#FCE7D6" />
              <stop offset="55%" stopColor="#F2CCB0" />
              <stop offset="100%" stopColor="#D9A787" />
            </radialGradient>

            {/* Neck shadow */}
            <linearGradient id="neck3d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C99676" />
              <stop offset="100%" stopColor="#EBC1A4" />
            </linearGradient>

            {/* Hair 3D Gradients */}
            <linearGradient id="hairFemale" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#3B312B" />
              <stop offset="50%" stopColor="#261F1B" />
              <stop offset="100%" stopColor="#171311" />
            </linearGradient>
            <linearGradient id="hairMale" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#3D3834" />
              <stop offset="55%" stopColor="#262320" />
              <stop offset="100%" stopColor="#141210" />
            </linearGradient>

            {/* Outfit 3D Gradients (Stone & Taupe Editorial) */}
            <linearGradient id="outfitFemale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8C8277" />
              <stop offset="100%" stopColor="#5C554E" />
            </linearGradient>
            <linearGradient id="outfitMale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#44403C" />
              <stop offset="100%" stopColor="#292524" />
            </linearGradient>

            {/* Soft Blush */}
            <radialGradient id="blush" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E17A7A" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#E17A7A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Back Hair for Female (Bảo Linh 宝玲) */}
          {gender === "female" && (
            <path
              d="M 52 95 C 45 142, 52 178, 72 195 L 148 195 C 168 178, 175 142, 168 95 C 164 52, 56 52, 52 95 Z"
              fill="url(#hairFemale)"
            />
          )}

          {/* Shoulders & Editorial Knit/Collar */}
          <path
            d="M 38 220 C 44 178, 72 166, 110 166 C 148 166, 176 178, 182 220 Z"
            fill={gender === "female" ? "url(#outfitFemale)" : "url(#outfitMale)"}
          />
          {/* Subtle Collar Accent */}
          <path
            d="M 92 167 L 110 184 L 128 167"
            fill="none"
            stroke="#FAF9F7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />

          {/* Neck */}
          <rect x="95" y="142" width="30" height="32" rx="12" fill="url(#neck3d)" />

          {/* Ears */}
          <ellipse cx="64" cy="108" rx="8" ry="12" fill="#E8BD9E" />
          <ellipse cx="156" cy="108" rx="8" ry="12" fill="#E8BD9E" />

          {/* 3D Head Shape */}
          <path
            d="M 65 92 C 65 56, 155 56, 155 92 C 155 130, 138 156, 110 156 C 82 156, 65 130, 65 92 Z"
            fill="url(#skin3d)"
          />

          {/* Subtle Nose Highlight */}
          <path
            d="M 109 105 C 107 114, 108 119, 112 120"
            fill="none"
            stroke="#C99676"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Soft Cheeks */}
          <ellipse cx="84" cy="121" rx="12" ry="7" fill="url(#blush)" />
          <ellipse cx="136" cy="121" rx="12" ry="7" fill="url(#blush)" />

          {/* Eyebrows */}
          <g>
            <path
              d={`M 79 ${91 + leftBrowY} Q 89 ${87 + leftBrowY} 99 ${90 + leftBrowY}`}
              fill="none"
              stroke="#292524"
              strokeWidth={gender === "female" ? "2.6" : "3.4"}
              strokeLinecap="round"
              transform={`rotate(${leftBrowRot} 89 90)`}
            />
            <path
              d={`M 121 ${90 + rightBrowY} Q 131 ${87 + rightBrowY} 141 ${91 + rightBrowY}`}
              fill="none"
              stroke="#292524"
              strokeWidth={gender === "female" ? "2.6" : "3.4"}
              strokeLinecap="round"
              transform={`rotate(${rightBrowRot} 131 90)`}
            />
          </g>

          {/* Eyes (with natural blinking) */}
          <g>
            {isBlinking ? (
              <>
                <path
                  d="M 81 103 Q 89 107 97 103"
                  fill="none"
                  stroke="#292524"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 123 103 Q 131 107 139 103"
                  fill="none"
                  stroke="#292524"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                {/* Left Eye */}
                <ellipse cx="89" cy="103" rx="7.5" ry="6.5" fill="#FFFFFF" />
                <circle cx={89 + pupilX} cy="103" r="4.2" fill="#292524" />
                <circle cx={87.5 + pupilX} cy="101.2" r="1.4" fill="#FFFFFF" />
                {/* Right Eye */}
                <ellipse cx="131" cy="103" rx="7.5" ry="6.5" fill="#FFFFFF" />
                <circle cx={131 + pupilX} cy="103" r="4.2" fill="#292524" />
                <circle cx={129.5 + pupilX} cy="101.2" r="1.4" fill="#FFFFFF" />
              </>
            )}
          </g>

          {/* Mouth — Lip-Sync when Speaking, Persona Expressions when Idle */}
          {isSpeaking ? (
            <motion.ellipse
              cx="110"
              cy="133"
              rx="10"
              fill="#7F2F2F"
              animate={{ ry: [2.5, 8.5, 3.5, 7, 2.5] }}
              transition={{ duration: 0.42, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : expression === "vui-ve" ? (
            <path
              d="M 97 130 Q 110 143 123 130"
              fill="#FFFFFF"
              stroke="#8A3E3E"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          ) : expression === "cuoi-nhao" ? (
            <path
              d="M 99 133 Q 112 136 124 127"
              fill="none"
              stroke="#8A3E3E"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          ) : expression === "khinh-bi" ? (
            <path
              d="M 100 135 Q 110 131 120 134"
              fill="none"
              stroke="#8A3E3E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M 99 132 Q 110 138 121 132"
              fill="none"
              stroke="#8A3E3E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}

          {/* Front Hair */}
          {gender === "female" ? (
            <path
              d="M 60 95 C 62 54, 158 54, 160 95 C 148 74, 130 68, 114 72 C 96 76, 76 78, 60 95 Z"
              fill="url(#hairFemale)"
            />
          ) : (
            <path
              d="M 62 94 C 59 58, 86 44, 114 45 C 144 46, 161 62, 158 94 C 149 74, 134 65, 110 66 C 88 67, 72 74, 62 94 Z"
              fill="url(#hairMale)"
            />
          )}
        </motion.svg>
      </div>
    </div>
  );
}
