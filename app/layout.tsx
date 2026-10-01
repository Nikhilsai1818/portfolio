import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Komtham Nikhil Sai — Cybersecurity & Network Security Engineer",
  description:
    "Portfolio of Nikhil Sai — B.Tech CSE (Cyber Security & Blockchain) student at LPU. CompTIA Network+ certified. Specializing in server hardening, network architecture, and hands-on security engineering.",
  keywords: [
    "Cybersecurity",
    "Network Security",
    "CompTIA Network+",
    "Linux Hardening",
    "Cisco Packet Tracer",
    "System Administrator",
    "Portfolio",
    "Nikhil Sai",
  ],
  authors: [{ name: "Komtham Nikhil Sai" }],
  openGraph: {
    title: "Komtham Nikhil Sai — Cybersecurity & Network Security Engineer",
    description:
      "Security engineer in training. I hardened a server's security score from 60 to 79/100 and designed enterprise networks from scratch.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komtham Nikhil Sai — Cybersecurity Engineer",
    description: "Security engineer in training. CompTIA Network+ certified.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy text-[var(--text-primary)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
