import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Loki theme
        navy: "#080d08",
        "navy-light": "#0d160d",
        surface: "#111a11",
        // Primary — Asgardian gold
        electric: "#c9a84c",
        "electric-dark": "#8a6f28",
        // Secondary — forest green
        "cyber-green": "#3db554",
        "loki-green": "#1e4d24",
        "loki-green-bright": "#2d7a3a",
        // Accent — sorcery purple
        "cyber-purple": "#6b3fa0",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        scan: "scan 3s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(201,168,76,0.8)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
