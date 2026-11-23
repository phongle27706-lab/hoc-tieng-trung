"use client";

import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, RoundedBox, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type CapyMood = "chill" | "happy" | "mocking" | "disdain";

export interface CapybaraSceneProps {
  mood: CapyMood;
  speaking: boolean;
  listening: boolean;
  analyzing?: boolean;
  /** Returns current audio amplitude 0..1 (Web Audio analyser). Optional. */
  getAudioLevel?: () => number;
  /** Optional external .glb model URL; replaces the procedural capybara. */
  glbUrl?: string;
}

export const CORAL = "#F26B5B";
const FUR = "#E59A5C";
const FUR_DARK = "#D48244";
const MUZZLE = "#7A4933";
const EAR = "#9C4A2E";

/** Procedural fur bump texture (canvas noise + strands). */
function useFurBump() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const img = ctx.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 110 + Math.random() * 90;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    ctx.strokeStyle = "rgba(60,60,60,0.35)";
    for (let k = 0; k < 900; k++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 3, y + 4 + Math.random() * 5);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }, []);
}

const lerp = THREE.MathUtils.lerp;

function useSpeechLevel(speaking: boolean, getAudioLevel?: () => number) {
  return (t: number) => {
    if (!speaking) return 0;
    const real = getAudioLevel?.() ?? 0;
    if (real > 0.02) return Math.min(1, real * 1.6);
    // Fallback oscillation for speechSynthesis (no analyser access)
    const o = Math.abs(Math.sin(t * 13)) * 0.6 + Math.abs(Math.sin(t * 7.3 + 1)) * 0.4;
    return 0.25 + o * 0.7;
  };
}

function Capybara({ mood, speaking, listening, analyzing, getAudioLevel }: CapybaraSceneProps) {
  const bump = useFurBump();
  const root = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  const head = useRef<THREE.Group>(null);
  const jaw = useRef<THREE.Mesh>(null);
  const lidL = useRef<THREE.Mesh>(null);
  const lidR = useRef<THREE.Mesh>(null);
  const earL = useRef<THREE.Group>(null);
  const earR = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Mesh>(null);
  const haloMat = useRef<THREE.MeshBasicMaterial>(null);
  const blink = useRef({ next: 2, until: 0 });
  const twitch = useRef({ next: 3, until: 0, side: 0 });
  const level = useSpeechLevel(speaking, getAudioLevel);
  const smooth = useRef(0);

  const furMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: FUR, roughness: 0.92, bumpMap: bump, bumpScale: 0.04 }),
    [bump]
  );
  const furDarkMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: FUR_DARK, roughness: 0.95, bumpMap: bump, bumpScale: 0.04 }),
    [bump]
  );
  const muzzleMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: MUZZLE, roughness: 0.75, bumpMap: bump, bumpScale: 0.02 }),
    [bump]
  );
  const darkMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#2A1A12", roughness: 0.4 }), []);
  const earMat = useMemo(() => new THREE.MeshStandardMaterial({ color: EAR, roughness: 0.85 }), []);

  useEffect(() => () => {
    [furMat, furDarkMat, muzzleMat, darkMat, earMat].forEach((m) => m.dispose());
    bump?.dispose();
  }, [furMat, furDarkMat, muzzleMat, darkMat, earMat, bump]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const d = Math.min(1, dt * 8);

    // Breathing
    if (body.current) {
      const b = 1 + Math.sin(t * 1.6) * 0.018;
      body.current.scale.set(1.15 * b, 0.95 * b, 1.35);
    }

    // Mood targets
    let lid = 0.45; // sleepy single-lid baseline
    let lidAsym = 0;
    let tiltZ = 0;
    let pitch = 0;
    let jawRot = 0;
    if (mood === "happy") {
      lid = 0.35;
      pitch = Math.sin(t * 4.2) * 0.09; // nodding
    } else if (mood === "mocking") {
      lid = 0.6;
      lidAsym = 0.25; // squint one eye
      jawRot = 0.12; // smirk
      tiltZ = 0.06;
    } else if (mood === "disdain") {
      lid = 0.68; // half-lidded
      tiltZ = -0.2;
      pitch = -0.1; // nose up
    }
    if (listening) lid = Math.min(lid, 0.3);
    if (analyzing) tiltZ += Math.sin(t * 1.5) * 0.06;

    // Blink
    const bl = blink.current;
    if (t > bl.next) {
      bl.until = t + 0.14;
      bl.next = t + 2.2 + Math.random() * 3.5;
    }
    const blinkAmt = t < bl.until ? 1 : 0;

    if (lidL.current && lidR.current) {
      const l = Math.max(blinkAmt, Math.min(1, lid + lidAsym));
      const r = Math.max(blinkAmt, lid);
      // lid rotation: 0 = open (rotated up), 1 = closed
      lidL.current.rotation.x = lerp(lidL.current.rotation.x, -1.5 + l * 1.5, blinkAmt ? 1 : d);
      lidR.current.rotation.x = lerp(lidR.current.rotation.x, -1.5 + r * 1.5, blinkAmt ? 1 : d);
    }

    // Head follows pointer
    if (head.current) {
      const px = state.pointer.x;
      const py = state.pointer.y;
      head.current.rotation.y = lerp(head.current.rotation.y, px * 0.45, d * 0.5);
      head.current.rotation.x = lerp(head.current.rotation.x, -py * 0.2 + pitch, d * 0.6);
      head.current.rotation.z = lerp(head.current.rotation.z, tiltZ, d * 0.5);
      head.current.position.y = 0.55 + Math.sin(t * 1.6) * 0.01;
    }

    // Ears: twitch + perk when listening
    const tw = twitch.current;
    if (t > tw.next) {
      tw.until = t + 0.25;
      tw.side = Math.random() > 0.5 ? 1 : 0;
      tw.next = t + 3 + Math.random() * 4;
    }
    const perk = listening ? -0.55 : 0;
    const earScale = listening ? 1.25 : 1;
    [earL.current, earR.current].forEach((ear, i) => {
      if (!ear) return;
      const tw2 = t < tw.until && tw.side === i ? Math.sin(t * 60) * 0.35 : 0;
      ear.rotation.x = lerp(ear.rotation.x, perk + tw2, d);
      const s = lerp(ear.scale.x, earScale, d);
      ear.scale.setScalar(s);
    });

    // Lip-sync
    const lv = level(t);
    smooth.current = lerp(smooth.current, lv, Math.min(1, dt * 18));
    if (jaw.current) {
      jaw.current.rotation.x = smooth.current * 0.35 + (mood === "happy" && !speaking ? 0.06 : 0);
      jaw.current.rotation.z = jawRot;
    }

    // Halo
    if (halo.current && haloMat.current) {
      const target = speaking ? 0.35 + smooth.current * 0.55 : 0;
      haloMat.current.opacity = lerp(haloMat.current.opacity, target, d);
      const s = 1 + smooth.current * 0.18 + Math.sin(t * 3) * 0.02;
      halo.current.scale.setScalar(s);
      halo.current.visible = haloMat.current.opacity > 0.01;
    }

    if (root.current) root.current.rotation.y = -0.35 + Math.sin(t * 0.3) * 0.03;
  });

  return (
    <group>
      {/* Sound-wave halo ring (behind, facing camera) */}
      <mesh ref={halo} position={[0, 0.55, -1]}>
        <torusGeometry args={[1.45, 0.045, 16, 96]} />
        <meshBasicMaterial ref={haloMat} color={CORAL} transparent opacity={0} toneMapped={false} />
      </mesh>

      <group ref={root} position={[0, -0.35, 0]}>
        {/* Chubby body */}
        <mesh ref={body} material={furMat} castShadow>
          <sphereGeometry args={[0.85, 48, 48]} />
        </mesh>
        {/* 4 short legs */}
        {[
          [-0.45, -0.7, 0.55],
          [0.45, -0.7, 0.55],
          [-0.45, -0.7, -0.55],
          [0.45, -0.7, -0.55],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]} material={furDarkMat}>
            <capsuleGeometry args={[0.16, 0.2, 6, 14]} />
          </mesh>
        ))}

        {/* Head */}
        <group ref={head} position={[0, 0.55, 0.85]}>
          <RoundedBox args={[0.95, 0.85, 1.0]} radius={0.38} smoothness={6} material={furMat} />
          {/* Muzzle */}
          <group position={[0, -0.1, 0.5]}>
            <RoundedBox args={[0.78, 0.55, 0.42]} radius={0.2} smoothness={5} material={muzzleMat} />
            {/* Nose-bridge highlight */}
            <mesh position={[0, 0.2, 0.17]} scale={[1.6, 0.6, 0.4]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#B07656" roughness={0.3} emissive="#5a3020" emissiveIntensity={0.25} />
            </mesh>
            {/* Nostrils */}
            {[-0.13, 0.13].map((x) => (
              <mesh key={x} position={[x, 0.08, 0.215]} scale={[1, 0.55, 0.4]} material={darkMat}>
                <sphereGeometry args={[0.05, 14, 14]} />
              </mesh>
            ))}
            {/* Mouth groove */}
            <mesh position={[0, -0.04, 0.215]} scale={[0.25, 1, 0.3]} material={darkMat}>
              <boxGeometry args={[0.04, 0.12, 0.04]} />
            </mesh>
            {/* Jaw (lip-sync) */}
            <mesh ref={jaw} position={[0, -0.22, 0.02]} material={muzzleMat}>
              <boxGeometry args={[0.5, 0.1, 0.36]} />
            </mesh>
          </group>
          {/* Sleepy eyes with single lid */}
          {[-1, 1].map((side) => (
            <group key={side} position={[side * 0.36, 0.14, 0.32]}>
              <mesh material={darkMat}>
                <sphereGeometry args={[0.075, 20, 20]} />
              </mesh>
              <mesh position={[0.02, 0.025, 0.06]}>
                <sphereGeometry args={[0.015, 8, 8]} />
                <meshBasicMaterial color="white" />
              </mesh>
              <mesh ref={side < 0 ? lidL : lidR} material={furDarkMat} rotation={[-0.8, 0, 0]}>
                <sphereGeometry args={[0.085, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
              </mesh>
            </group>
          ))}
          {/* Small reddish-brown ears */}
          {[-1, 1].map((side) => (
            <group key={side} ref={side < 0 ? earL : earR} position={[side * 0.36, 0.42, -0.15]}>
              <mesh material={earMat} scale={[1, 0.8, 0.5]}>
                <sphereGeometry args={[0.11, 16, 16]} />
              </mesh>
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}

function GlbModel({ url, speaking, getAudioLevel }: { url: string; speaking: boolean; getAudioLevel?: () => number }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);
  const level = useSpeechLevel(speaking, getAudioLevel);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = lerp(ref.current.rotation.y, state.pointer.x * 0.4, 0.05);
    const s = 1 + Math.sin(t * 1.6) * 0.015 + level(t) * 0.03;
    ref.current.scale.set(s, s, s);
  });
  return <primitive ref={ref} object={scene} />;
}

export default function CapybaraScene(props: CapybaraSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 4.6], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#FFF4E8", "#8A6A55", 0.5]} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#FFD9C2" />
      <Suspense fallback={null}>
        {props.glbUrl ? (
          <GlbModel url={props.glbUrl} speaking={props.speaking} getAudioLevel={props.getAudioLevel} />
        ) : (
          <Capybara {...props} />
        )}
      </Suspense>
      <ContactShadows position={[0, -1.25, 0]} opacity={0.35} scale={5} blur={2.4} far={2} />
    </Canvas>
  );
}
