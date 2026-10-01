"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import ThorLightning from "@/components/three/ThorLightning";
import { useMobile } from "@/hooks/useMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Full-page background canvas — fixed behind everything.
 * z-index 0, pointer-events none so it never intercepts clicks.
 */
export default function BackgroundCanvas() {
  const isMobile = useMobile();
  const prefersReduced = useReducedMotion();
  const { variant, theme } = useTheme();
  
  const isThor = variant === "thor";
  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black"
      aria-hidden="true"
    >
      {isThor ? (
        <Canvas
          camera={{ position: [0, 0, 9], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
          aria-label="Interactive 3D network topology background"
        >
          <ambientLight intensity={0.35} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d2ff" />
          <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ff3333" />

          <Stars
            radius={120}
            depth={80}
            count={isMobile ? 600 : 1800}
            factor={3}
            saturation={0.3}
            fade
            speed={prefersReduced ? 0 : 0.3}
          />

          <Suspense fallback={null}>
            <ThorLightning />
          </Suspense>

          {!prefersReduced && (
            <EffectComposer>
              <Bloom
                intensity={isMobile ? 0.6 : 1.2}
                luminanceThreshold={0.4}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>
          )}
        </Canvas>
      ) : (
        <>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/themes/Loki.mp4" type="video/mp4" />
          </video>
          {/* Dark/Light overlay for text readability on Loki video */}
          <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/40'}`} />
        </>
      )}
    </div>
  );
}
