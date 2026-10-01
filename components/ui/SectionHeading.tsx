"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <motion.div
        className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
        style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.08)" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--electric)" }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--electric)" }}>
          {label}
        </span>
      </motion.div>

      <motion.h2
        className="text-4xl font-bold md:text-5xl"
        style={{ color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-4 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        className="mx-auto mt-6 h-px w-24"
        style={{
          background: "linear-gradient(to right, transparent, var(--electric), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </div>
  );
}
