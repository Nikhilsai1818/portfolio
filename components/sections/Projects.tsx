"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Portfolio"
          title="Projects"
          subtitle="Real work, real impact — from server hardening to enterprise network design."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
