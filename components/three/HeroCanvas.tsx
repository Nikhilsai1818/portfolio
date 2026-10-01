"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import NetworkMesh from "./NetworkMesh";
import { useMobile } from "@/hooks/useMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroCanvas() {
  const isMobile = useMobile();
  const prefersReduced = useReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      aria-label="Interactive 3D network topology visualization"
    >
      {/* Ambient + point lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#c9a84c" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#2d7a3a" />

      {/* Star field background */}
      <Stars
        radius={80}
        depth={50}
        count={isMobile ? 800 : 2000}
        factor={3}
        saturation={0.3}
        fade
        speed={prefersReduced ? 0 : 0.5}
      />

      <Suspense fallback={null}>
        <NetworkMesh nodeCount={isMobile ? 22 : 42} />
      </Suspense>

      {/* Orbit controls — mouse drag */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        autoRotate={!prefersReduced}
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />

      {/* Post-processing: bloom glow */}
      {!prefersReduced && (
        <EffectComposer>
          <Bloom
            intensity={isMobile ? 0.8 : 1.5}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
