"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const accent = project.accentColor;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: "1200px" }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative rounded-2xl border overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d" as const,
          borderColor: `${accent}25`,
          background: "var(--card-bg)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Gradient top border */}
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />

        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(600px at 50% 0%, ${accent}12 0%, transparent 70%)`,
          }}
        />

        <div className="relative p-7 z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div
                className="mb-1 font-mono text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                <span style={{ color: accent }}>0{index + 1}</span> — Project
              </div>
              <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{project.subtitle}</p>
            </div>

            {/* GitHub link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-lg border p-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              style={{ borderColor: "var(--card-border)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border-hover)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Summary */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{project.summary}</p>

          {/* Metric gauge (Project 1 only) */}
          {project.metric && (
            <div className="mb-6 rounded-xl border p-4" style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {project.metric.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs line-through" style={{ color: "var(--text-faint)" }}>
                    {project.metric.before}{project.metric.unit}
                  </span>
                  <span className="font-mono text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    {project.metric.after}{project.metric.unit}
                  </span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${accent}80, ${accent})`,
                    boxShadow: `0 0 8px ${accent}80`,
                  }}
                  initial={{ width: `${(project.metric.before / project.metric.max) * 100}%` }}
                  whileInView={{
                    width: `${(project.metric.after / project.metric.max) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                />
              </div>
              <div className="mt-1 text-right">
                <span className="font-mono text-xs font-bold" style={{ color: "var(--text-primary)" }}>
                  ↑ {project.metric.after - project.metric.before} pts improvement
                </span>
              </div>
            </div>
          )}

          {/* Highlights */}
          <ul className="mb-6 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="h-1 w-1 flex-shrink-0 rounded-full" style={{ background: accent }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md px-2 py-1 font-sans text-xs font-bold border-2"
                style={{
                  borderColor: accent,
                  color: "var(--text-primary)",
                  backgroundColor: "var(--card-bg)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
