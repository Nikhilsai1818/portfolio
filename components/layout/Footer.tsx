"use client";
import { motion } from "framer-motion";
import { PERSONA } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--card-border)", background: "var(--navy)" }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-md border"
            style={{ borderColor: "rgba(201,168,76,0.30)", background: "rgba(201,168,76,0.08)" }}
          >
            <span className="font-mono text-xs font-bold" style={{ color: "var(--electric)" }}>NK</span>
          </div>
          <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
            {PERSONA.name}
          </span>
        </div>

        <p className="font-mono text-xs text-center" style={{ color: "var(--text-faint)" }}>
          Built with Next.js · React Three Fiber · Framer Motion
        </p>

        <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} {PERSONA.firstName} Sai
        </p>
      </div>
    </footer>
  );
}
