"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONA } from "@/data/content";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#training", label: "Training" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

/** Sun icon for light mode indicator */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/** Crescent moon icon for dark mode indicator */
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/** Animated Loki-themed theme toggle pill */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-1"
      style={{
        borderColor: isDark ? "rgba(201,168,76,0.40)" : "rgba(138,106,26,0.50)",
        background: isDark
          ? "rgba(201,168,76,0.08)"
          : "rgba(138,106,26,0.10)",
        color: "var(--electric)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Track */}
      <span
        className="relative flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-300"
        style={{
          background: isDark
            ? "rgba(201,168,76,0.15)"
            : "rgba(138,106,26,0.20)",
          border: "1px solid var(--electric)",
        }}
        aria-hidden="true"
      >
        {/* Thumb */}
        <motion.span
          className="absolute flex h-3.5 w-3.5 items-center justify-center rounded-full"
          style={{ background: "var(--electric)" }}
          animate={{ x: isDark ? 2 : 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-1"
          style={{ color: "var(--electric)" }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
          <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

/** Crown icon for Loki variant */
function CrownIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 17l4-9 4 5 2-8 2 8 4-5 4 9H2z" />
      <path d="M2 21h20" />
    </svg>
  );
}

/** Hammer icon for Thor variant */
function HammerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M10 11v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V11" />
    </svg>
  );
}

/** Animated variant toggle (Loki/Thor) */
function VariantToggle() {
  const { variant, toggleVariant } = useTheme();
  const isLoki = variant === "loki";

  return (
    <motion.button
      id="variant-toggle-btn"
      onClick={toggleVariant}
      aria-label={isLoki ? "Switch to Thor theme" : "Switch to Loki theme"}
      title={isLoki ? "Loki Theme" : "Thor Theme"}
      className="relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-1"
      style={{
        borderColor: "rgba(var(--electric-rgb,201,168,76),0.40)",
        background: "rgba(var(--electric-rgb,201,168,76),0.10)",
        color: "var(--electric)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Track */}
      <span
        className="relative flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-300"
        style={{
          background: "rgba(var(--electric-rgb,201,168,76),0.20)",
          border: "1px solid var(--electric)",
        }}
        aria-hidden="true"
      >
        {/* Thumb */}
        <motion.span
          className="absolute flex h-3.5 w-3.5 items-center justify-center rounded-full"
          style={{ background: "var(--electric)" }}
          animate={{ x: isLoki ? 2 : 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={variant}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
          style={{ color: "var(--electric)" }}
        >
          {isLoki ? <CrownIcon /> : <HammerIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b backdrop-blur-xl"
          : ""
      }`}
      style={
        scrolled
          ? {
              borderColor: "var(--navbar-border)",
              background: "var(--navbar-bg)",
            }
          : {}
      }
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
          aria-label="Nikhil Sai — Home"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{ border: "1px solid rgba(var(--electric-rgb,201,168,76),0.40)", background: "rgba(var(--electric-rgb,201,168,76),0.10)" }}
          >
            <span className="font-mono text-xs font-bold" style={{ color: "var(--electric)" }}>NK</span>
          </div>
          <span className="hidden font-mono text-sm sm:block" style={{ color: "var(--text-secondary)" }}>
            {PERSONA.firstName} Sai
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm transition-colors focus-visible:outline-none"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--electric)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right — theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <VariantToggle />
          <ThemeToggle />
          <a
            href={PERSONA.contact.resume}
            className="rounded-lg border px-4 py-1.5 font-mono text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            style={{
              borderColor: "rgba(var(--electric-rgb,201,168,76),0.40)",
              background: "rgba(var(--electric-rgb,201,168,76),0.10)",
              color: "var(--electric)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(var(--electric-rgb,201,168,76),0.20)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(var(--electric-rgb,201,168,76),0.10)";
            }}
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <VariantToggle />
          <ThemeToggle />
          <button
            className="relative h-8 w-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute left-1 top-2 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-1 top-3.5 block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-1 top-5 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t backdrop-blur-xl"
            style={{
              borderColor: "var(--navbar-border)",
              background: "var(--navbar-bg)",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2.5 font-mono text-sm transition-colors focus-visible:outline-none"
                  style={{ color: "var(--text-muted)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PERSONA.contact.resume}
                className="mt-2 rounded-lg border px-4 py-2 text-center font-mono text-sm"
                style={{
                  borderColor: "rgba(var(--electric-rgb,201,168,76),0.40)",
                  background: "rgba(var(--electric-rgb,201,168,76),0.10)",
                  color: "var(--electric)",
                }}
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
