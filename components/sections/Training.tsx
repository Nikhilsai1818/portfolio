"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TRAININGS, Training } from "@/data/content";

function TrainingCard({ training, index }: { training: Training; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline connector (desktop only) */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex-col items-center z-10 pointer-events-none">
        {/* Dot */}
        <div
          className="mt-8 h-4 w-4 rounded-full border-2 flex-shrink-0 shadow-lg"
          style={{
            borderColor: training.color,
            background: `${training.color}30`,
            boxShadow: `0 0 12px ${training.color}60`,
          }}
        />
        {/* Line */}
        {index < TRAININGS.length - 1 && (
          <div
            className="flex-1 w-px mt-2"
            style={{ background: `linear-gradient(to bottom, ${training.color}40, transparent)` }}
          />
        )}
      </div>

      {/* Content — alternates sides on desktop */}
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className="group relative rounded-2xl border bg-surface/50 backdrop-blur-sm p-6 overflow-hidden hover:border-white/15 transition-colors duration-300"
          style={{ borderColor: `${training.color}25` }}
        >
          {/* Accent glow top */}
          <div
            className="absolute inset-x-0 top-0 h-0.5"
            style={{
              background: `linear-gradient(90deg, transparent, ${training.color}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(500px at 50% 0%, ${training.color}08 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />

          <div className="relative">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: `${training.color}18` }}
              >
                {training.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium"
                    style={{
                      background: `${training.color}18`,
                      color: training.color,
                      border: `1px solid ${training.color}30`,
                    }}
                  >
                    {training.timeline}
                  </span>
                </div>
                <h3 className="font-bold text-base leading-tight" style={{ color: "var(--text-primary)" }}>{training.title}</h3>
                <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{training.organization}</p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{training.summary}</p>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-4">
              {training.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span
                    className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ background: training.color }}
                  />
                  {h}
                </li>
              ))}
            </ul>

            {/* Project link */}
            {training.project && (
              <div
                className="rounded-lg border p-3 mb-3"
                style={{ borderColor: `${training.color}25`, background: `${training.color}08` }}
              >
                <div className="font-mono text-xs mb-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Applied Project
                </div>
                <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{training.project.name}</div>
                <p className="font-mono text-xs mt-0.5 mb-2" style={{ color: "var(--text-muted)" }}>
                  {training.project.description}
                </p>
                <a
                  href={training.project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric rounded"
                  style={{ color: training.color }}
                >
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub ↗
                </a>
              </div>
            )}

            {/* LinkedIn post link */}
            {training.linkedinUrl && (
              <a
                href={training.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric rounded"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")}
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn Post ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Placeholder column for timeline alignment */}
      <div className={`hidden lg:block ${isEven ? "lg:order-2" : "lg:order-1"}`} />
    </motion.div>
  );
}

export default function TrainingSection() {
  return (
    <section id="training" className="relative py-28 overflow-hidden">
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #2d7a3a 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/3 h-72 w-72 translate-x-1/2 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label="Experience"
          title="Training & Programs"
          subtitle="Hands-on programs, awareness initiatives, and applied learning experiences."
        />

        <div className="relative flex flex-col gap-12">
          {TRAININGS.map((training, i) => (
            <TrainingCard key={training.id} training={training} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
