import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js ecosystem packages for Next.js App Router
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],
  // Turbopack config (Next.js 16 default bundler)
  turbopack: {},
};

export default nextConfig;
