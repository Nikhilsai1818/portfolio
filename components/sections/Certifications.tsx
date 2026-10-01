"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS, Certification } from "@/data/content";

function CertLightbox({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/88 backdrop-blur-md" aria-hidden="true" />
        <motion.div
          className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: `2px solid ${cert.color}40`, background: "var(--surface)" }}
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

          <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid var(--card-border)" }}>
            <div>
              <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
              <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {cert.issuer} · {cert.year}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-mono font-bold"
              style={{ borderColor: "var(--card-border)", color: "var(--text-muted)", background: "var(--card-bg)" }}
              aria-label="Close certificate"
            >
              ✕
            </button>
          </div>

          <div className="relative aspect-[4/3] w-full bg-black/20">
            <Image src={cert.image!} alt={`${cert.name} certificate`} fill className="object-contain p-3" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          {cert.certUrl && (
            <div className="p-4 flex justify-end" style={{ borderTop: "1px solid var(--card-border)" }}>
              <a
                href={cert.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-sm font-semibold transition-all hover:opacity-80"
                style={{ borderColor: `${cert.color}50`, color: cert.color, background: `${cert.color}10` }}
              >
                View on LinkedIn ↗
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Click any card to view the full certificate."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${cert.image ? "cursor-pointer" : ""}`}
              style={{
                border: `1.5px solid ${cert.color}30`,
                background: "var(--card-bg)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => cert.image && setSelected(cert)}
              role={cert.image ? "button" : undefined}
              tabIndex={cert.image ? 0 : undefined}
              aria-label={cert.image ? `View ${cert.name} certificate` : undefined}
              onKeyDown={(e) => { if (cert.image && (e.key === "Enter" || e.key === " ")) setSelected(cert); }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}65`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${cert.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top gradient accent */}
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

              {/* Certificate image thumbnail */}
              {cert.image && (
                <div className="relative h-40 w-full overflow-hidden bg-black/15">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} preview`}
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-400"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-12"
                    style={{ background: "linear-gradient(to top, var(--navy), transparent)" }}
                  />
                  {cert.image && (
                    <div
                      className="absolute right-2.5 top-2.5 rounded-lg px-2.5 py-1 font-mono text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `${cert.color}ee`, color: "#fff" }}
                    >
                      View ↗
                    </div>
                  )}
                </div>
              )}

              {/* Card body */}
              <div className="p-4">
                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-base shadow-sm"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                      {cert.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Footer row: year + status */}
                <div className="flex items-center justify-between mt-1">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[11px] font-bold"
                    style={{ background: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}35` }}
                  >
                    {cert.year}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                    {cert.image ? "Click to view" : "Verified ✓"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && <CertLightbox cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
