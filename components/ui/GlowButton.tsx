"use client";
import { motion } from "framer-motion";
import React from "react";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function GlowButton({
  href,
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold font-mono tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

  const variants: Record<string, string> = {
    primary:
      "text-[var(--navy)] hover:opacity-90 shadow-[0_0_20px_rgba(201,168,76,0.35)] hover:shadow-[0_0_30px_rgba(201,168,76,0.55)]",
    secondary:
      "border hover:bg-[rgba(201,168,76,0.10)] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]",
    ghost:
      "border hover:bg-[rgba(0,0,0,0.05)]",
  };

  const inlineStyles: Record<string, React.CSSProperties> = {
    primary: { background: "var(--electric)", color: "var(--navy)" },
    secondary: {
      borderColor: "rgba(201,168,76,0.50)",
      color: "var(--electric)",
    },
    ghost: {
      borderColor: "var(--card-border)",
      color: "var(--text-secondary)",
    },
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        style={inlineStyles[variant]}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      style={inlineStyles[variant]}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
