"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONA } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Who I Am"
          title="About Me"
          subtitle="Security-first engineering, built from first principles."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">

          {/* ── LEFT: Photo + Bio ── */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>

            {/* Profile photo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-sm"
                  style={{ background: "linear-gradient(135deg, var(--electric), var(--loki-green-bright), var(--cyber-purple))" }}
                  aria-hidden="true"
                />
                <div
                  className="relative h-52 w-44 overflow-hidden rounded-2xl border-2 sm:h-60 sm:w-52"
                  style={{ borderColor: "rgba(201,168,76,0.40)" }}
                >
                  <Image
                    src="/profile/Me.jpg"
                    alt="Komtham Nikhil Sai"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[11px] font-semibold shadow-lg"
                  style={{ background: "var(--surface)", borderColor: "rgba(201,168,76,0.40)", color: "var(--electric)" }}
                >
                  {PERSONA.firstName} Sai
                </div>
              </div>
            </div>

            {/* ── Role Badges ── */}
            <div className="flex flex-wrap gap-3 mb-6">
              {/* Security Architect — VaultAura */}
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{ background: "rgba(107,63,160,0.12)", borderColor: "rgba(107,63,160,0.35)", color: "#6b3fa0" }}
              >
                <span className="text-base">🔐</span>
                <div>
                  <div className="font-semibold text-sm leading-none" style={{ color: "var(--text-primary)" }}>
                    Security Architect
                  </div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: "#6b3fa0" }}>VaultAura</div>
                </div>
              </div>

              {/* CompTIA Network+ */}
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{ background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.45)" }}
              >
                <span className="text-base">🏆</span>
                <div>
                  <div className="font-semibold text-sm leading-none" style={{ color: "var(--text-primary)" }}>
                    CompTIA Network+
                  </div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: "var(--electric)" }}>
                    Certified · Jul 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {PERSONA.bio}
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              My work spans both offensive and defensive security — I've scored systems with Lynis,
              built network architectures in Cisco Packet Tracer, and contributed to zero-knowledge
              encryption systems. I'm driven by the challenge of making systems that are both
              functional and fundamentally secure.
            </p>

            {/* Education cards */}
            <div className="flex flex-col gap-4 mt-6">
              {PERSONA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 transition-all"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.04)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm mt-1"
                      style={{ background: "rgba(201,168,76,0.12)" }}
                    >🎓</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <div className="text-sm font-bold truncate pr-2" style={{ color: "var(--text-primary)" }}>
                          {edu.degree}
                        </div>
                        <div className="font-mono text-[10px] shrink-0" style={{ color: "var(--text-muted)" }}>
                          {edu.period}
                        </div>
                      </div>
                      <div className="font-mono text-xs truncate" style={{ color: "var(--text-secondary)" }}>
                        {edu.university}
                      </div>
                      <div className="mt-2 font-mono text-[11px]">
                        <span style={{ color: "var(--text-faint)" }}>Score: </span>
                        <span className="font-bold" style={{ color: "var(--electric)" }}>
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Stat Cards ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:mt-4">
            {[
              {
                icon: "🌐",
                value: "CompTIA",
                unit: " N+",
                label: "Network+ Certified",
                sub: "CompTIA ce · Jul 2026",
                color: "#c9a84c",
                highlight: true,
              },
              {
                icon: "🔐",
                value: "VaultAura",
                unit: "",
                label: "Security Architect",
                sub: "Zero-Knowledge Password Manager",
                color: "#6b3fa0",
              },
              {
                icon: "⚡",
                value: "7+",
                unit: "",
                label: "Certifications Earned",
                sub: "Forage, CompTIA, LPU, Quick Heal",
                color: "#00ff88",
              },
              {
                icon: "🛡️",
                value: "60→79",
                unit: "/100",
                label: "Lynis Security Score",
                sub: "Ubuntu Server 24.04 hardening",
                color: "#00d4ff",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-xl p-5 transition-all duration-300"
                style={{
                  border: stat.highlight
                    ? "1px solid rgba(201,168,76,0.45)"
                    : "1px solid var(--card-border)",
                  background: stat.highlight
                    ? "rgba(201,168,76,0.07)"
                    : "var(--card-bg)",
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{ background: `${stat.color}18` }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-mono text-2xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                      <span className="font-mono text-sm" style={{ color: `${stat.color}80` }}>
                        {stat.unit}
                      </span>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {stat.label}
                    </div>
                    <div className="mt-0.5 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {stat.sub}
                    </div>
                    {stat.highlight && (
                      <span
                        className="mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold"
                        style={{ background: "rgba(201,168,76,0.15)", color: "var(--electric)", border: "1px solid rgba(201,168,76,0.35)" }}
                      >
                        ★ Featured Certification
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
