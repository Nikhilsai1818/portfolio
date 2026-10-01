"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PERSONA } from "@/data/content";
import GlowButton from "@/components/ui/GlowButton";
import LoadingScreen from "@/components/ui/LoadingScreen";

const LETTERS = PERSONA.name.split("");

export default function Hero() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Komtham Nikhil Sai portfolio introduction"
    >
      {/* Loading overlay */}
      <AnimatePresence>{showLoader && <LoadingScreen />}</AnimatePresence>

      {/* Subtle grid overlay on this section */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-24 pb-16 lg:grid-cols-2 lg:gap-16">

        {/* ── Text column ── */}
        <div className="order-2 lg:order-1">
          {/* Status badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
            style={{ borderColor: "rgba(61,181,84,0.30)", background: "rgba(61,181,84,0.08)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: "var(--cyber-green)" }} />
            <span className="font-mono text-xs tracking-wider" style={{ color: "var(--cyber-green)" }}>
              OPEN TO OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="mb-2 text-5xl font-bold lg:text-6xl xl:text-7xl leading-tight" style={{ color: "var(--text-primary)" }}>
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                className={char === " " ? "inline-block w-4" : "inline-block"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.04, ease: [0.23, 1, 0.32, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Role */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <span className="h-px w-8" style={{ background: "var(--electric)" }} />
            <span className="font-mono text-base" style={{ color: "var(--electric)" }}>
              {PERSONA.subtitle}
            </span>
          </motion.div>

          {/* Hook line */}
          <motion.p
            className="mb-8 max-w-lg text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            {PERSONA.hookLine}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <GlowButton href="#contact" variant="primary">Get In Touch</GlowButton>
            <GlowButton href={PERSONA.contact.github} variant="secondary">GitHub</GlowButton>
            <GlowButton href={PERSONA.contact.resume} variant="ghost">Download CV</GlowButton>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            {PERSONA.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border px-4 py-2.5"
                style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
              >
                <div className="font-mono text-xl font-bold" style={{ color: "var(--electric)" }}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Profile photo column (replaces 3D canvas) ── */}
        <motion.div
          className="order-1 lg:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative group">
            {/* Outer spinning ring */}
            <motion.div
              className="absolute -inset-3 rounded-full opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--electric), var(--cyber-green), var(--cyber-purple), var(--electric))",
                filter: "blur(8px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Second ring — counter-rotate */}
            <motion.div
              className="absolute -inset-1 rounded-full opacity-60"
              style={{
                background:
                  "conic-gradient(from 180deg, var(--electric), transparent, var(--loki-green-bright), transparent, var(--electric))",
                filter: "blur(4px)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: "clamp(240px, 28vw, 380px)",
                height: "clamp(240px, 28vw, 380px)",
                border: "3px solid rgba(201,168,76,0.50)",
                boxShadow: "0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(45,122,58,0.15)",
              }}
            >
              <Image
                src="/profile/Me.jpg"
                alt="Komtham Nikhil Sai — Cybersecurity & Network Security Engineer"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 240px, (max-width: 1280px) 28vw, 380px"
                priority
              />
              {/* Subtle bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(8,13,8,0.35), transparent)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating label badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-4 py-1.5 font-mono text-xs font-semibold shadow-xl"
              style={{
                background: "var(--surface)",
                borderColor: "rgba(201,168,76,0.45)",
                color: "var(--electric)",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              Cybersecurity &amp; Network Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
          Scroll
        </span>
        <motion.div
          className="h-10 w-5 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--card-border)" }}
          aria-hidden="true"
        >
          <motion.div
            className="h-1.5 w-1 rounded-full"
            style={{ background: "var(--electric)" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
