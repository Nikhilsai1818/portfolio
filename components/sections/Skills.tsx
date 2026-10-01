"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/content";
import React from "react";

import { 
  SiC, SiCplusplus, SiPython, SiGnubash, SiUbuntu, SiHtml5, SiMysql, SiGit, SiWireshark, SiTryhackme, SiCisco 
} from "react-icons/si";
import { 
  FaNetworkWired, FaServer, FaBug, FaLock, FaUserTie, FaUserShield, FaTools, FaSearch, FaWindows, FaCss3Alt, FaAws, FaDatabase
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { MdSecurity, MdPassword, MdOutlineDesignServices } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";

function SkillIcon({ name }: { name: string }) {
  const iconProps = { className: "w-12 h-12 transition-transform duration-300 hover:scale-110", style: { color: "var(--electric, #00d4ff)" } };
  
  switch (name.toLowerCase()) {
    // Networking
    case "tcp/ip":
    case "dns":
    case "dhcp":
    case "nat":
    case "subnetting":
      return <FaNetworkWired {...iconProps} />;
    case "routing & switching":
    case "vlans":
      return <BiNetworkChart {...iconProps} />;
    
    // Security
    case "network security":
    case "linux security":
    case "server hardening":
      return <FaServer {...iconProps} />;
    case "vulnerability assessment":
    case "ethical hacking":
      return <FaBug {...iconProps} />;
    case "zero-knowledge architecture":
      return <FaUserShield {...iconProps} />;

    // Tools
    case "wireshark": return <SiWireshark {...iconProps} style={{ color: "#1679A7" }} />;
    case "nmap": return <FaSearch {...iconProps} />;
    case "burp suite": return <FaShieldHalved {...iconProps} style={{ color: "#FF6633" }} />;
    case "cisco packet tracer": return <SiCisco {...iconProps} style={{ color: "#1BA0D7" }} />;
    case "tryhackme": return <SiTryhackme {...iconProps} className={`${iconProps.className} text-[var(--text-primary)]`} style={{}} />;
    case "lynis": 
    case "fail2ban":
    case "rkhunter":
      return <MdSecurity {...iconProps} />;
    case "ftk imager":
    case "autopsy":
      return <FaTools {...iconProps} />;
      
    // Programming
    case "c": return <SiC {...iconProps} className={`${iconProps.className} text-[var(--text-muted)]`} style={{}} />;
    case "c++": return <SiCplusplus {...iconProps} style={{ color: "#00599C" }} />;
    case "python": return <SiPython {...iconProps} style={{ color: "#3776AB" }} />;
    case "bash scripting": return <SiGnubash {...iconProps} style={{ color: "#4EAA25" }} />;

    // OS
    case "linux (ubuntu)": return <SiUbuntu {...iconProps} style={{ color: "#E95420" }} />;
    case "windows": return <FaWindows {...iconProps} style={{ color: "#0078D6" }} />;

    // Web & DB
    case "html": return <SiHtml5 {...iconProps} style={{ color: "#E34F26" }} />;
    case "css": return <FaCss3Alt {...iconProps} style={{ color: "#1572B6" }} />;
    case "mysql": return <SiMysql {...iconProps} style={{ color: "#4479A1" }} />;

    // Dev Tools
    case "git": return <SiGit {...iconProps} style={{ color: "#F05032" }} />;
    case "autocad": return <MdOutlineDesignServices {...iconProps} />;
    case "aws": return <FaAws {...iconProps} className={`${iconProps.className} text-[var(--text-primary)]`} style={{}} />;
    case "postgresql":
    case "oracle cloud": return <FaDatabase {...iconProps} style={{ color: "#F80000" }} />;
    case "aes-256":
    case "rsa":
      return <FaLock {...iconProps} style={{ color: "var(--electric)" }} />;
    case "pbkdf2":
    case "argon2":
      return <MdPassword {...iconProps} style={{ color: "var(--cyber-purple)" }} />;

    // Soft Skills
    case "problem-solving":
    case "team leadership":
    case "project management":
    case "adaptability":
    case "technical communication":
      return <FaUserTie {...iconProps} style={{ color: "var(--electric)" }} />;
      
    default:
      return <MdSecurity {...iconProps} />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Tools"
          subtitle="A full overview of my technical, security, and soft skills."
        />

        {/* 2-column layout for categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 w-full justify-center">
                <div className="h-[1px] bg-[var(--border-subtle)] w-12 sm:w-20" />
                <h3 className="font-semibold text-[15px] text-[var(--text-secondary)] tracking-wide">
                  {group.category}
                </h3>
                <div className="h-[1px] bg-[var(--border-subtle)] w-12 sm:w-20" />
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center justify-start gap-4 w-[84px] group cursor-pointer"
                  >
                    <div className="flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 drop-shadow-sm group-hover:drop-shadow-md">
                      <SkillIcon name={skill} />
                    </div>
                    <span className="text-[12px] font-medium text-[var(--text-muted)] text-center leading-tight group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
