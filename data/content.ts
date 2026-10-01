// ============================================================
// PORTFOLIO CONTENT — Edit this file to update all content
// ============================================================

export const PERSONA = {
  name: "Komtham Nikhil Sai",
  firstName: "Nikhil",
  title: "Cybersecurity & Network Security Engineer",
  subtitle: "Cybersecurity Enthusiast",
  tagline:
    "I secure systems and design networks — from hardened Linux servers to enterprise-grade network architecture.",
  hookLine:
    "Security Architect | SOC & Network Security | CompTIA Network+ Certified | CSE (Cyber Security & Blockchain) | Linux | Bash Scripting | SIEM | Cloud Security | Digital Forensics",
  bio: "Third-year Computer Science student specializing in Cybersecurity & Blockchain Technology at Lovely Professional University. Serving as Security Architect at VaultAura — a zero-knowledge password manager — where I own the encryption layer, client-side security architecture, and MFA. CompTIA Network+ certified, with hands-on practice on TryHackMe and Burp Suite.",
  roles: [
    { title: "Security Architect", org: "VaultAura", type: "Project", color: "#6b3fa0" },
    { title: "CompTIA Network+ Certified", org: "CompTIA", type: "Certification", color: "#c9a84c" },
  ],
  education: [
    {
      degree: "B.Tech CSE (Cyber Security & Blockchain)",
      university: "Lovely Professional University",
      period: "2024–2028",
      cgpa: "7.86 CGPA",
    },
    {
      degree: "Class 12th",
      university: "Narayana Junior College",
      period: "Intermediate",
      cgpa: "84%",
    },
    {
      degree: "Class 10th",
      university: "Narayana School",
      period: "High School",
      cgpa: "91%",
    }
  ],
  contact: {
    email: "nikhilsai22082007@gmail.com",
    linkedin: "https://linkedin.com/in/nikhilsaikomtham",
    github: "https://github.com/Nikhilsai1818",
    resume: "/resume.pdf",
  },
  stats: [
    { label: "CGPA", value: "7.86", delta: "B.Tech CSE" },
    { label: "Certifications", value: "7+", delta: "& counting" },
  ],
};

// ============================================================
// SKILLS
// ============================================================
export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Networking Fundamentals",
    icon: "🌐",
    skills: ["TCP/IP", "DNS", "DHCP", "Routing & Switching", "VLANs", "NAT", "Subnetting"],
  },
  {
    category: "Security",
    icon: "🛡️",
    skills: ["Network Security", "Linux Security", "Server Hardening", "Vulnerability Assessment", "Ethical Hacking", "Zero-Knowledge Architecture", "DFIR"],
  },
  {
    category: "Security Tools",
    icon: "🔧",
    skills: ["Wireshark", "Nmap", "Burp Suite", "Cisco Packet Tracer", "TryHackMe", "Lynis", "Fail2Ban", "rkhunter", "FTK Imager", "Autopsy", "Splunk", "SPL"],
  },
  {
    category: "Programming",
    icon: "💻",
    skills: ["C", "C++", "Python", "Bash Scripting", "Pandas", "Matplotlib", "NumPy"],
  },
  {
    category: "Operating Systems",
    icon: "🖥️",
    skills: ["Linux (Ubuntu)", "Windows"],
  },
  {
    category: "Web & Database",
    icon: "🗄️",
    skills: ["HTML", "CSS", "MySQL", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    icon: "⚙️",
    skills: ["Git", "AutoCAD", "AES-256", "RSA", "PBKDF2", "Argon2", "AWS", "Oracle Cloud"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: ["Problem-Solving", "Team Leadership", "Project Management", "Adaptability", "Technical Communication"],
  },
];

// ============================================================
// PROJECTS
// ============================================================
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tech: string[];
  github: string;
  accentColor: string;
  metric?: {
    label: string;
    before: number;
    after: number;
    max: number;
    unit: string;
  };
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "linux-hardening",
    title: "Hardened Linux Server",
    subtitle: "Automated Security Hardening",
    summary:
      "Identified security gaps in a default Ubuntu Server 24.04 deployment and hardened it against brute-force SSH access, unpatched services, and weak password policies. Configured SSH hardening, UFW firewall rules, Fail2Ban intrusion prevention, auditd logging, rkhunter rootkit scanning, and kernel/sysctl hardening — then automated the entire workflow into a reusable Bash script.",
    tech: ["Bash", "Linux", "UFW", "Fail2Ban", "auditd", "rkhunter", "Lynis"],
    github: "https://github.com/Nikhilsai1818/ubuntu-server-hardening",
    accentColor: "#c9a84c",
    metric: {
      label: "Lynis Security Score",
      before: 60,
      after: 79,
      max: 100,
      unit: "/100",
    },
    highlights: [
      "SSH hardening & key-based auth",
      "UFW firewall rules configured",
      "Fail2Ban brute-force prevention",
      "auditd kernel-level logging",
      "Automated via reusable Bash script",
    ],
  },
  {
    id: "coffee-shop-network",
    title: "Coffee Shop Network",
    subtitle: "Cisco Packet Tracer Design",
    summary:
      "Designed a secure, enterprise-style network for a small business with segmented customer, staff, and management traffic. Implemented VLAN segmentation, inter-VLAN routing, DHCP, DNS, NAT, ACLs, and port security, with an isolated guest Wi-Fi network. Validated the design through systematic connectivity testing and fault isolation across every network layer.",
    tech: ["Cisco Packet Tracer", "VLANs", "ACLs", "DHCP", "DNS", "NAT"],
    github: "https://github.com/Nikhilsai1818/coffee-shop-network-cisco-packet-tracer",
    accentColor: "#2d7a3a",
    highlights: [
      "VLAN segmentation (Customer/Staff/Mgmt)",
      "Inter-VLAN routing configured",
      "Isolated guest Wi-Fi VLAN",
      "ACLs for traffic control",
      "Full connectivity testing & validation",
    ],
  },
  {
    id: "vaultaura",
    title: "VaultAura",
    subtitle: "Zero-Knowledge Password Manager",
    summary:
      "Owned the security and cryptography layer of a zero-knowledge password manager — designing encryption mechanisms, client-side encryption architecture, secure credential handling, weak/reused-password detection, and MFA support. Delivered a security-scoring and AI-powered security-analysis feature.",
    tech: ["Supabase", "AES-256", "RSA", "PBKDF2", "Argon2", "Client-Side Encryption"],
    github: "https://github.com/Nikhilsai1818",
    accentColor: "#6b3fa0",
    highlights: [
      "AES-256 + RSA client-side encryption",
      "PBKDF2/Argon2 key derivation",
      "Zero-knowledge architecture",
      "MFA support",
      "AI-powered security analysis",
    ],
  },
  {
    id: "os-secure-file-management",
    title: "OS-Level Secure File Management System",
    subtitle: "Raw POSIX File Management & Encryption",
    summary:
      "Built a command-line secure file management system operating directly at the OS level. Bypasses Python's high-level file handling for raw POSIX system calls, demonstrating atomic file creation, append-only logging, kernel-level entropy, and physical permission enforcement. Features layered security with subprocess malware scanning, AES-256-GCM encryption, bcrypt hashing, and zero-knowledge PKI.",
    tech: ["Python", "POSIX syscalls", "AES-256-GCM", "PBKDF2-HMAC-SHA256", "RSA", "bcrypt", "TOTP 2FA"],
    github: "https://github.com/Nikhilsai1818",
    accentColor: "#c9a84c",
    highlights: [
      "Raw POSIX system calls (os.open, os.read, os.chmod)",
      "Subprocess malware scanning",
      "AES-256-GCM local vault encryption",
      "Zero-knowledge PKI file sharing",
      "Decoy authentication mode",
    ],
  },
  {
    id: "planora-ai",
    title: "Planora AI",
    subtitle: "Adaptive Life Planning System",
    summary:
      "An AI-driven planning system that treats missed tasks as quantifiable 'productivity debt' rather than failure, mathematically redistributing it across future schedules. Features a stateful, multi-turn AI interview for onboarding and robust backend engines (Debt Engine, ScheduleGuard) to ensure generated plans adhere to daily time caps and sleep windows via closed-loop feedback.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com/Nikhilsai1818",
    accentColor: "#00d2ff",
    highlights: [
      "Debt Engine for missed task redistribution",
      "ScheduleGuard for boundary enforcement",
      "Stateful multi-turn AI onboarding",
      "Closed-loop feedback scheduling",
      "Complex system architecture & data modeling",
    ],
  },
];

// ============================================================
// CERTIFICATIONS  (image paths under /public/certificates/)
// ============================================================
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
  image?: string; // path relative to /public
  certUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "comptia-net",
    name: "CompTIA Network+ ce",
    issuer: "CompTIA",
    year: "Jul 2026",
    icon: "🏆",
    color: "#c9a84c",
    image: "/certificates/CompTIA Network+ ce certificate_page-0001.jpg",
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking & Network Security Mastery",
    issuer: "Lovely Professional University",
    year: "Aug 2026",
    icon: "🛡️",
    color: "#2d7a3a",
    image: "/certificates/Network Security Certificate.png",
    certUrl:
      "https://www.linkedin.com/in/nikhilsaikomtham/overlay/Certifications/407285651/treasury/?profileId=ACoAAFEn0egBDwPCViQceM5x138RpFFEJWBFwYo",
  },
  {
    id: "tata-cybersec",
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage — Tata",
    year: "May 2026",
    icon: "🔍",
    color: "#6b3fa0",
    image: "/certificates/Cybersecurity Analyst Job Simulation Certificate_page-0001.jpg",
  },
  {
    id: "mastercard-cybersec",
    name: "Cybersecurity Job Simulation",
    issuer: "Forage — Mastercard",
    year: "May 2026",
    icon: "🔐",
    color: "#c9a84c",
    image: "/certificates/Forage Mastercard Job simulation.jpg",
  },
  {
    id: "wns-cybersmart",
    name: "WNS CyberSmart",
    issuer: "WNS CyberSmart Program",
    year: "Sep 2025",
    icon: "🌐",
    color: "#2d7a3a",
    image: "/certificates/WNS Certificate.png",
  },
  {
    id: "quick-heal-it",
    name: "IT Fundamentals",
    issuer: "Quick Heal Academy",
    year: "Feb 2026",
    icon: "💡",
    color: "#6b3fa0",
    image: "/certificates/IT Fundamentals Certificate QuickHeal_page-0001.jpg",
  },
  {
    id: "quick-heal-net",
    name: "Network Configuration and Management",
    issuer: "Quick Heal Academy",
    year: "Feb 2026",
    icon: "🌐",
    color: "#c9a84c",
    image: "/certificates/Netwroks Certificate QuickHeal_page-0001.jpg",
  },
  {
    id: "linux-certification",
    name: "Linux",
    issuer: "Certification",
    year: "2026",
    icon: "🐧",
    color: "#c9a84c",
    image: "/certificates/Linux certificate.png",
  },
  {
    id: "ethical-hacking-certification",
    name: "Ethical Hacking",
    issuer: "Certification",
    year: "2026",
    icon: "🛡️",
    color: "#2d7a3a",
    image: "/certificates/Ethical hacking certificate.png",
  },
];

// ============================================================
// TRAINING EXPERIENCES
// ============================================================
export interface Training {
  id: string;
  title: string;
  organization: string;
  timeline: string;
  summary: string;
  highlights: string[];
  color: string;
  icon: string;
  project?: {
    name: string;
    github: string;
    description: string;
  };
  linkedinUrl?: string;
}

export const TRAININGS: Training[] = [
  {
    id: "network-security-lpu",
    title: "Network Security Training",
    organization: "Lovely Professional University",
    timeline: "July 2026",
    summary:
      "Completed specialized Network Security training covering foundational and applied concepts in ethical hacking, network security mechanisms, and security best practices — including network defense strategies, vulnerability assessment approaches, and security hardening techniques used in enterprise environments.",
    highlights: [
      "Ethical hacking fundamentals & methodology",
      "Network defense strategies",
      "Vulnerability assessment techniques",
      "Enterprise security hardening",
      "Applied project: MAC Address & Vendor Lookup Tool",
    ],
    color: "#2d7a3a",
    icon: "🛡️",
    project: {
      name: "MAC Address & Vendor Lookup Tool",
      github: "https://github.com/Nikhilsai1818/mac-lookup-tool",
      description:
        "Network asset-identification utility for device discovery and analysis.",
    },
    linkedinUrl:
      "https://www.linkedin.com/in/nikhilsaikomtham/overlay/Certifications/407285651/treasury/?profileId=ACoAAFEn0egBDwPCViQceM5x138RpFFEJWBFwYo",
  },
  {
    id: "wns-cybersmart",
    title: "WNS CyberSmart — Cybersecurity Awareness Program",
    organization: "WNS",
    timeline: "August 2025",
    summary:
      "Participated in a cybersecurity awareness initiative and independently developed and delivered a structured 2-hour awareness session for 8th and 9th-grade students at Zilla Praja Parishad High School, Prathipadu — covering social media safety, cyberbullying, financial security, and public internet safety to a non-technical audience.",
    highlights: [
      "Designed & delivered 2-hour awareness session",
      "Audience: 8th & 9th grade students (non-technical)",
      "Topics: social media safety, cyberbullying, financial security",
      "Public internet safety & digital hygiene",
      "Community outreach & tech education",
    ],
    color: "#c9a84c",
    icon: "📡",
    linkedinUrl:
      "https://www.linkedin.com/posts/nikhilsaikomtham_cybersecurity-cyberawareness-wns-activity-7477926738451329024-5ka4",
  },
];
