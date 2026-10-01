"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONA } from "@/data/content";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: PERSONA.contact.email,
    href: `mailto:${PERSONA.contact.email}`,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#c9a84c", // Gold
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "nikhilsaikomtham",
    href: PERSONA.contact.linkedin,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#3db554", // Cyber Green
  },
  {
    id: "github",
    label: "GitHub",
    value: "Nikhilsai1818",
    href: PERSONA.contact.github,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#6b3fa0", // Cyber Purple
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          label="Let's Talk"
          title="Get In Touch"
        />

        {/* Intro text */}
        <motion.p
          className="mb-3 text-xl text-center font-semibold"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Open to{" "}
          <span style={{ color: "var(--electric)" }}>SOC Analyst</span>
          ,{" "}
          <span style={{ color: "var(--cyber-green)" }}>System Administrator</span>
          {" "}and{" "}
          <span style={{ color: "var(--cyber-purple)" }}>Network Security</span>
          {" "}roles — let's talk.
        </motion.p>
        <motion.p
          className="mb-12 font-mono text-sm text-center"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Currently based in India · Available for remote &amp; hybrid roles
        </motion.p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col items-center gap-4 rounded-2xl p-7 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              style={{
                border: `2px solid ${link.color}30`,
                background: "var(--card-bg)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}70`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              aria-label={`Contact via ${link.label}`}
            >
              {/* Accent top line */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: link.color }}
              />

              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: `${link.color}15`, color: link.color, border: `1px solid ${link.color}30` }}
              >
                {link.icon}
              </div>

              {/* Label */}
              <div>
                <div
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-2 font-semibold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </div>
                <div
                  className="text-sm font-semibold break-all"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.value}
                </div>
                <div
                  className="mt-2 font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: link.color }}
                >
                  {link.href.startsWith("http") ? "Open ↗" : "Send email →"}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Terminal cursor */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm"
            style={{ borderColor: "var(--card-border)", background: "var(--card-bg)", color: "var(--text-muted)" }}
          >
            <span>nikhil@portfolio:~$</span>
            <motion.span
              className="inline-block h-4 w-2 rounded-sm"
              style={{ background: "var(--electric)" }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
