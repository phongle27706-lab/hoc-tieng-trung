"use client";

import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
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
const TERRACOTTA = "#E89D60";
const CLAY_WARM = "#D98A4E";
const MUZZLE_BROWN = "#7C4B34";
const EAR_BROWN = "#8F5135";
const DARK_INK = "#2B1B14";
const YUZU_ORANGE = "#F59A23";
const YUZU_LEAF = "#4F9A41";
const YUZU_STEM = "#6C4A2F";

/** Subtle matte clay micro-grain bump texture (no harsh plastic shine). */
function useClayBump() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const img = ctx.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 122 + Math.random() * 24;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }, []);
}

/** Smooth gradient map transitioning warm terracotta (#E89D60) to warm brown (#7C4B34) for the muzzle. */
function useMuzzleGradientTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const grad = ctx.createRadialGradient(64, 62, 12, 64, 64, 66);
    grad.addColorStop(0, MUZZLE_BROWN);
    grad.addColorStop(0.58, "#9E6342");
    grad.addColorStop(1, TERRACOTTA);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

/** Seamless organic Chibi pear-shaped body (sitting rump -> soft waist -> neck base). */
function usePearBodyGeometry() {
  return useMemo(() => {
    const pts: THREE.Vector2[] = [
      new THREE.Vector2(0.0, -0.78),
      new THREE.Vector2(0.42, -0.76),
      new THREE.Vector2(0.72, -0.62),
      new THREE.Vector2(0.86, -0.34),
      new THREE.Vector2(0.87, -0.04),
      new THREE.Vector2(0.78, 0.28),
      new THREE.Vector2(0.64, 0.56),
      new THREE.Vector2(0.50, 0.74),
      new THREE.Vector2(0.28, 0.84),
      new THREE.Vector2(0.0, 0.86),
    ];
    const geo = new THREE.LatheGeometry(pts, 48);
    geo.computeVertexNormals();
    return geo;
  }, []);
}

/** Smoothly rounded organic capybara head (softly flattened front-to-back, pear-blended cheeks). */
function useOrganicHeadGeometry() {
  return useMemo(() => {
    const geo = new THREE.SphereGeometry(0.66, 48, 48);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      // Slightly wider chubby cheeks at bottom, softly tapered crown at top
      const cheekFactor = y < 0 ? 1 + Math.abs(y) * 0.16 : 1 - y * 0.08;
      x *= 1.04 * cheekFactor;
      y *= 0.92;
      // Gently elongated capybara snout silhouette forward (+z)
      z *= z > 0 ? 1.18 : 1.02;

      // Softly flatten the very front tip of the face for capybara charm
      if (z > 0.62) {
        z = 0.62 + (z - 0.62) * 0.48;
      }

      pos.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);
}

const lerp = THREE.MathUtils.lerp;

function useSpeechLevel(speaking: boolean, getAudioLevel?: () => number) {
  return (t: number) => {
    if (!speaking) return 0;
    const real = getAudioLevel?.() ?? 0;
    if (real > 0.02) return Math.min(1, real * 1.6);
    const o = Math.abs(Math.sin(t * 13)) * 0.6 + Math.abs(Math.sin(t * 7.3 + 1)) * 0.4;
    return 0.24 + o * 0.68;
  };
}

function Capybara({
  mood,
  speaking,
  listening,
  analyzing,
  getAudioLevel,
}: CapybaraSceneProps) {
  const bump = useClayBump();
  const muzzleTex = useMuzzleGradientTexture();
  const pearGeo = usePearBodyGeometry();
  const headGeo = useOrganicHeadGeometry();

  const root = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const yuzu = useRef<THREE.Group>(null);
  const mouthGroup = useRef<THREE.Group>(null);
  const mouthOpenMesh = useRef<THREE.Mesh>(null);
  const lidL = useRef<THREE.Mesh>(null);
  const lidR = useRef<THREE.Mesh>(null);
  const earL = useRef<THREE.Group>(null);
  const earR = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Mesh>(null);
  const haloMat = useRef<THREE.MeshBasicMaterial>(null);

  const blink = useRef({ next: 2.2, until: 0 });
  const twitch = useRef({ next: 3.2, until: 0, side: 0 });
  const level = useSpeechLevel(speaking, getAudioLevel);
  const smooth = useRef(0);

  // Matte stylized clay materials (roughness 0.76 - 0.84, never shiny plastic)
  const furMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: TERRACOTTA,
        roughness: 0.82,
        metalness: 0.02,
        bumpMap: bump,
        bumpScale: 0.008,
      }),
    [bump]
  );

  const clayWarmMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: CLAY_WARM,
        roughness: 0.84,
        metalness: 0.02,
        bumpMap: bump,
        bumpScale: 0.008,
      }),
    [bump]
  );

  const muzzleMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: muzzleTex,
        color: "#FFFFFF",
        roughness: 0.78,
        metalness: 0.02,
        bumpMap: bump,
        bumpScale: 0.006,
      }),
    [muzzleTex, bump]
  );

  const earMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: EAR_BROWN,
        roughness: 0.82,
        metalness: 0.02,
      }),
    []
  );

  const earInnerMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#693924",
        roughness: 0.85,
        metalness: 0.0,
      }),
    []
  );

  const darkMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: DARK_INK,
        roughness: 0.55,
        metalness: 0.04,
      }),
    []
  );

  const cheekMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F39A84",
        roughness: 0.85,
        transparent: true,
        opacity: 0.36,
      }),
    []
  );

  const yuzuMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: YUZU_ORANGE,
        roughness: 0.76,
        metalness: 0.02,
        bumpMap: bump,
        bumpScale: 0.012,
      }),
    [bump]
  );

  const leafMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: YUZU_LEAF,
        roughness: 0.78,
        metalness: 0.02,
      }),
    []
  );

  const stemMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: YUZU_STEM,
        roughness: 0.84,
      }),
    []
  );

  useEffect(
    () => () => {
      [
        furMat,
        clayWarmMat,
        muzzleMat,
        earMat,
        earInnerMat,
        darkMat,
        cheekMat,
        yuzuMat,
        leafMat,
        stemMat,
      ].forEach((m) => m.dispose());
      bump?.dispose();
      muzzleTex?.dispose();
      pearGeo.dispose();
      headGeo.dispose();
    },
    [
      furMat,
      clayWarmMat,
      muzzleMat,
      earMat,
      earInnerMat,
      darkMat,
      cheekMat,
      yuzuMat,
      leafMat,
      stemMat,
      bump,
      muzzleTex,
      pearGeo,
      headGeo,
    ]
  );

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const d = Math.min(1, dt * 8);

    // Gentle organic breathing on pear body
    if (body.current) {
      const b = 1 + Math.sin(t * 1.65) * 0.016;
      body.current.scale.set(b, 1 + Math.sin(t * 1.65) * 0.012, b);
    }

    // 4 attitude morph targets
    let lid = 0.56; // super chill half-closed single-lid baseline
    let lidAsym = 0;
    let tiltZ = 0;
    let pitch = 0;
    let mouthTilt = 0;

    if (mood === "happy") {
      lid = 0.34;
      pitch = Math.sin(t * 4.0) * 0.08; // happy head nod
    } else if (mood === "mocking") {
      lid = 0.62;
      lidAsym = 0.24; // cheeky asymmetric squint
      mouthTilt = 0.14;
      tiltZ = 0.09;
    } else if (mood === "disdain") {
      lid = 0.72; // heavy unimpressed half-lid
      tiltZ = -0.18;
      pitch = -0.09;
    }
    if (listening) lid = Math.min(lid, 0.32);
    if (analyzing) tiltZ += Math.sin(t * 1.7) * 0.07;

    // Natural random blink
    const bl = blink.current;
    if (t > bl.next) {
      bl.until = t + 0.13;
      bl.next = t + 2.4 + Math.random() * 3.4;
    }
    const blinkAmt = t < bl.until ? 1 : 0;

    if (lidL.current && lidR.current) {
      const l = Math.max(blinkAmt, Math.min(1, lid + lidAsym));
      const r = Math.max(blinkAmt, lid);
      // Eyelid bar slides down over the horizontal chill eye
      lidL.current.position.y = lerp(lidL.current.position.y, 0.055 - l * 0.048, blinkAmt ? 0.9 : d);
      lidR.current.position.y = lerp(lidR.current.position.y, 0.055 - r * 0.048, blinkAmt ? 0.9 : d);
      lidL.current.scale.y = lerp(lidL.current.scale.y, 0.45 + l * 0.95, blinkAmt ? 0.9 : d);
      lidR.current.scale.y = lerp(lidR.current.scale.y, 0.45 + r * 0.95, blinkAmt ? 0.9 : d);
    }

    // Smooth pointer-tracking head rotation + breathing bob
    if (head.current) {
      const px = state.pointer.x;
      const py = state.pointer.y;
      head.current.rotation.y = lerp(head.current.rotation.y, px * 0.42, d * 0.55);
      head.current.rotation.x = lerp(head.current.rotation.x, -py * 0.2 + pitch, d * 0.6);
      head.current.rotation.z = lerp(head.current.rotation.z, tiltZ, d * 0.5);
      head.current.position.y = 0.58 + Math.sin(t * 1.65) * 0.012;
    }

    // Cute yuzu bobbing gently on top of head (with secondary spring feel)
    if (yuzu.current) {
      const nodBob = mood === "happy" ? Math.abs(Math.sin(t * 4.0)) * 0.025 : 0;
      const speakBob = smooth.current * 0.016;
      yuzu.current.position.y = 0.62 + Math.sin(t * 1.65 - 0.4) * 0.01 + nodBob + speakBob;
      yuzu.current.rotation.z = Math.sin(t * 1.65) * 0.04 - tiltZ * 0.35;
      yuzu.current.rotation.x = pitch * 0.35;
    }

    // Ears: subtle random twitch + listening perk
    const tw = twitch.current;
    if (t > tw.next) {
      tw.until = t + 0.22;
      tw.side = Math.random() > 0.5 ? 1 : 0;
      tw.next = t + 3.2 + Math.random() * 4.0;
    }
    const perk = listening ? -0.35 : 0;
    const earScale = listening ? 1.18 : 1.0;
    [earL.current, earR.current].forEach((ear, i) => {
      if (!ear) return;
      const tw2 = t < tw.until && tw.side === i ? Math.sin(t * 55) * 0.25 : 0;
      ear.rotation.x = lerp(ear.rotation.x, perk + tw2, d);
      const s = lerp(ear.scale.x, earScale, d);
      ear.scale.setScalar(s);
    });

    // Organic lip-sync mouth movement
    const lv = level(t);
    smooth.current = lerp(smooth.current, lv, Math.min(1, dt * 18));
    if (mouthGroup.current) {
      mouthGroup.current.rotation.z = lerp(mouthGroup.current.rotation.z, mouthTilt, d);
      mouthGroup.current.position.y = -0.17 - smooth.current * 0.02;
    }
    if (mouthOpenMesh.current) {
      const openAmt = smooth.current;
      mouthOpenMesh.current.visible = openAmt > 0.05;
      mouthOpenMesh.current.scale.set(
        0.85 + openAmt * 0.55,
        0.2 + openAmt * 1.35,
        1
      );
    }

    // Sound-wave halo ring while speaking
    if (halo.current && haloMat.current) {
      const target = speaking ? 0.32 + smooth.current * 0.48 : 0;
      haloMat.current.opacity = lerp(haloMat.current.opacity, target, d);
      const s = 1 + smooth.current * 0.16 + Math.sin(t * 3.2) * 0.02;
      halo.current.scale.setScalar(s);
      halo.current.visible = haloMat.current.opacity > 0.01;
    }

    // Gentle idle sway
    if (root.current) {
      root.current.rotation.y = -0.14 + Math.sin(t * 0.35) * 0.04;
    }
  });

  return (
    <group>
      {/* Sound-wave halo ring behind BaoBao while speaking */}
      <mesh ref={halo} position={[0, 0.32, -1.1]}>
        <torusGeometry args={[1.38, 0.038, 16, 96]} />
        <meshBasicMaterial
          ref={haloMat}
          color={CORAL}
          transparent
          opacity={0}
          toneMapped={false}
        />
      </mesh>

      <group ref={root} position={[0, -0.32, 0]}>
        {/* Seamless Chibi pear-shaped body (head-neck-body blended organically) */}
        <group ref={body}>
          <mesh
            geometry={pearGeo}
            material={furMat}
            castShadow
            receiveShadow
            scale={[0.96, 1.0, 1.04]}
          />

          {/* Soft tummy warm clay highlight */}
          <mesh position={[0, -0.22, 0.44]} scale={[0.72, 0.68, 0.52]} material={clayWarmMat}>
            <sphereGeometry args={[0.56, 32, 32]} />
          </mesh>

          {/* Cute tucked front clay paws */}
          {[-0.36, 0.36].map((x) => (
            <mesh
              key={`front-${x}`}
              position={[x, -0.58, 0.52]}
              rotation={[0.35, x < 0 ? 0.2 : -0.2, 0]}
              material={clayWarmMat}
              castShadow
            >
              <capsuleGeometry args={[0.14, 0.16, 10, 18]} />
            </mesh>
          ))}

          {/* Cute tucked hind feet */}
          {[-0.5, 0.5].map((x) => (
            <mesh
              key={`hind-${x}`}
              position={[x, -0.68, -0.08]}
              rotation={[0.2, x < 0 ? -0.3 : 0.3, 0]}
              scale={[1.05, 0.72, 1.35]}
              material={clayWarmMat}
              castShadow
            >
              <sphereGeometry args={[0.2, 20, 20]} />
            </mesh>
          ))}
        </group>

        {/* Seamless rounded head sitting smoothly on top of the pear neck */}
        <group ref={head} position={[0, 0.58, 0.16]}>
          {/* Main organic head volume */}
          <mesh geometry={headGeo} material={furMat} castShadow receiveShadow />

          {/* Smoothly blended rounded flat muzzle (warm terracotta -> warm brown gradient) */}
          <group position={[0, -0.07, 0.56]}>
            <mesh material={muzzleMat} scale={[1.08, 0.8, 0.62]} castShadow>
              <sphereGeometry args={[0.38, 36, 36]} />
            </mesh>

            {/* Subtle 2 nostrils */}
            {[-0.11, 0.11].map((x) => (
              <mesh
                key={x}
                position={[x, 0.04, 0.215]}
                rotation={[0, x < 0 ? -0.22 : 0.22, x < 0 ? 0.18 : -0.18]}
                scale={[1.15, 0.6, 0.35]}
                material={darkMat}
              >
                <sphereGeometry args={[0.036, 16, 16]} />
              </mesh>
            ))}

            {/* Cute small Y-shaped mouth */}
            <group ref={mouthGroup} position={[0, -0.17, 0.195]}>
              {/* Vertical stem of Y */}
              <mesh position={[0, 0.08, 0]} material={darkMat}>
                <capsuleGeometry args={[0.011, 0.065, 6, 12]} />
              </mesh>
              {/* Left branch of Y */}
              <mesh position={[-0.042, 0.025, -0.005]} rotation={[0, 0, -0.82]} material={darkMat}>
                <capsuleGeometry args={[0.011, 0.07, 6, 12]} />
              </mesh>
              {/* Right branch of Y */}
              <mesh position={[0.042, 0.025, -0.005]} rotation={[0, 0, 0.82]} material={darkMat}>
                <capsuleGeometry args={[0.011, 0.07, 6, 12]} />
              </mesh>
              {/* Lip-sync open mouth oval (visible while speaking) */}
              <mesh ref={mouthOpenMesh} position={[0, 0.015, -0.004]} visible={false}>
                <sphereGeometry args={[0.055, 16, 16]} />
                <meshStandardMaterial color="#4A2118" roughness={0.75} />
              </mesh>
            </group>
          </group>

          {/* Soft rosy clay cheeks */}
          {[-0.44, 0.44].map((x) => (
            <mesh
              key={`cheek-${x}`}
              position={[x, -0.12, 0.44]}
              rotation={[0, x < 0 ? -0.45 : 0.45, 0]}
              scale={[1.2, 0.72, 0.2]}
              material={cheekMat}
            >
              <sphereGeometry args={[0.11, 18, 18]} />
            </mesh>
          ))}

          {/* Super chill horizontal single-lid half-closed eyes */}
          {[-1, 1].map((side) => (
            <group
              key={`eye-${side}`}
              position={[side * 0.34, 0.12, 0.56]}
              rotation={[0, side * 0.34, 0]}
            >
              {/* Horizontal glossy-matte eye */}
              <mesh scale={[1.38, 0.72, 0.45]} material={darkMat}>
                <sphereGeometry args={[0.066, 20, 20]} />
              </mesh>
              {/* Subtle warm eye catchlight */}
              <mesh position={[side * 0.018, 0.01, 0.028]}>
                <sphereGeometry args={[0.012, 10, 10]} />
                <meshBasicMaterial color="#FFF8EE" />
              </mesh>
              {/* Single-lid chill upper eyelid */}
              <mesh
                ref={side < 0 ? lidL : lidR}
                position={[0, 0.032, 0.012]}
                scale={[1.55, 0.9, 0.6]}
                material={clayWarmMat}
              >
                <sphereGeometry args={[0.07, 20, 14]} />
              </mesh>
            </group>
          ))}

          {/* Small rounded ears set slightly back */}
          {[-1, 1].map((side) => (
            <group
              key={`ear-${side}`}
              ref={side < 0 ? earL : earR}
              position={[side * 0.44, 0.44, -0.16]}
              rotation={[0.18, side * 0.3, side * -0.45]}
            >
              <mesh material={earMat} scale={[1.0, 0.85, 0.52]} castShadow>
                <sphereGeometry args={[0.135, 20, 20]} />
              </mesh>
              <mesh position={[0, -0.01, 0.036]} material={earInnerMat} scale={[0.68, 0.58, 0.35]}>
                <sphereGeometry args={[0.11, 16, 16]} />
              </mesh>
            </group>
          ))}

          {/* Cute small Yuzu / Tangerine (quả quýt) with green leaf sitting on top of head! */}
          <group ref={yuzu} position={[0.02, 0.62, 0.02]}>
            {/* Slightly flattened tangerine body */}
            <mesh material={yuzuMat} scale={[1.06, 0.86, 1.06]} castShadow>
              <sphereGeometry args={[0.21, 28, 28]} />
            </mesh>
            {/* Tiny stem */}
            <mesh position={[0, 0.185, 0]} rotation={[0.1, 0, -0.15]} material={stemMat}>
              <cylinderGeometry args={[0.014, 0.02, 0.055, 10]} />
            </mesh>
            {/* Cute green leaf */}
            <mesh
              position={[0.075, 0.2, 0.015]}
              rotation={[0.2, 0.35, -0.48]}
              scale={[1.45, 0.45, 0.75]}
              material={leafMat}
              castShadow
            >
              <sphereGeometry args={[0.068, 16, 16]} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

function GlbModel({
  url,
  speaking,
  getAudioLevel,
}: {
  url: string;
  speaking: boolean;
  getAudioLevel?: () => number;
}) {
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
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.35, 4.35], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* 3-Point Warm Studio Lighting */}
      <ambientLight intensity={0.68} color="#FFF7EE" />
      <hemisphereLight args={["#FFF9F0", "#D9B99B", 0.55]} />
      {/* Key light */}
      <directionalLight
        position={[3.2, 4.8, 4.6]}
        intensity={1.25}
        color="#FFF3E4"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      {/* Warm rim light */}
      <directionalLight position={[-3.6, 2.8, -3.2]} intensity={0.65} color="#FFD7BA" />
      {/* Soft fill from front-left */}
      <pointLight position={[-2.4, 1.2, 3.0]} intensity={0.35} color="#FFE8D6" />

      <Suspense fallback={null}>
        {props.glbUrl ? (
          <GlbModel
            url={props.glbUrl}
            speaking={props.speaking}
            getAudioLevel={props.getAudioLevel}
          />
        ) : (
          <Capybara {...props} />
        )}
      </Suspense>

      <ContactShadows
        position={[0, -1.16, 0]}
        opacity={0.32}
        scale={4.5}
        blur={2.4}
        far={2.2}
        color="#7C4B34"
      />
    </Canvas>
  );
}
