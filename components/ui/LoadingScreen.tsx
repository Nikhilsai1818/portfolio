"use client";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "var(--navy)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated logo mark */}
      <div className="relative mb-8">
        <motion.div
          className="h-16 w-16 rounded-full border-2"
          style={{ borderColor: "rgba(201,168,76,0.30)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2"
          style={{ borderColor: "rgba(61,181,84,0.40)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-mono font-bold" style={{ color: "var(--electric)" }}>NK</span>
        </div>
      </div>

      {/* Status text */}
      <motion.div
        className="font-mono text-sm tracking-widest"
        style={{ color: "rgba(201,168,76,0.70)" }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        INITIALIZING SECURE CONNECTION...
      </motion.div>

      {/* Progress bar */}
      <div
        className="mt-6 h-0.5 w-48 rounded-full overflow-hidden"
        style={{ background: "var(--card-border)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, var(--electric), var(--cyber-green))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
