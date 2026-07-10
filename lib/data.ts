import { Project, Experience, SkillGroup, Education, Achievement } from "./types";

export const personalInfo = {
  name: "Kommareddy Likith Krishnasai",
  location: "Vijayawada, India",
  college: "MNNIT Allahabad · B.Tech CSE",
  grad: "July 2026",
  email: "likithkk2004@gmail.com",
  github: "https://github.com/Likinesh",
  githubHandle: "github.com/Likinesh",
  linkedin: "https://www.linkedin.com/in/likithkk",
  leetcode: "https://leetcode.com/Likithkk",
  leetcodeHandle: "Likithkk - Knight (1863)",
};

// First 3 projects are shown on the homepage, all are shown on /projects
export const projects: Project[] = [
  // ——— HOMEPAGE FEATURED (top 3) ———
  {
    id: 1,
    title: "NexAssist",
    subtitle: "AI Support Agent Platform",
    description: "Deploy a fully trained AI support agent on any website in minutes. Configure your knowledge base in a dashboard, copy a single script tag, and your AI agent starts handling customer queries automatically around the clock.",
    tech: ["Next.js", "TypeScript", "Google Gemini", "MongoDB", "Scalekit", "Tailwind CSS"],
    github: "https://github.com/Likinesh/AI-customer-support",
    live: "https://ai-customer-support-seven-alpha.vercel.app",
    image: "/nexassist.png",
  },
  {
    id: 2,
    title: "Eventra",
    subtitle: "AI-Powered Event Management",
    description: "A platform that uses the Gemini API to intelligently generate event themes, paired with Convex for real-time data synchronization. Where seamless organization meets automated creativity.",
    tech: ["Next.js", "JavaScript", "Convex", "Clerk", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/Likinesh/Eventra",
    live: "https://eventra-peach.vercel.app/",
    image: "/eventra.png",
  },
  {
    id: 3,
    title: "HealNow",
    subtitle: "Tele-Health Platform",
    description: "A full-stack space where patients and doctors can connect via real-time video. Optimized with Prisma, managing to cut down response times by nearly 35% for a snappier experience.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Vonage API", "Vercel"],
    github: "https://github.com/Likinesh/HealNow-Next",
    live: "https://heal-now-next.vercel.app",
    image: "/healnow.png",
  },
  // ——— ARCHIVE ———
  {
    id: 4,
    title: "AutoPilot QA",
    subtitle: "AI Testing Automation",
    description: "A high-performance, developer-first SaaS platform that automates QA testing using AI. Features zero-code Playwright generation and scalable headless cloud execution.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Clerk", "Gemini API", "Playwright", "Browserbase"],
    github: "https://github.com/Likinesh/ai-testing-automation",
    image: "/autopilotqa.png",
  },
  {
    id: 5,
    title: "InterviewForge",
    subtitle: "AI Interview Preparation Platform",
    description: "A full-stack SaaS platform that leverages Google's Gemini AI to help job seekers prepare for interviews. Receive a comprehensive strategy including a match score, tailored questions, skill gap analysis, and a day-by-day preparation plan.",
    tech: ["React", "Express", "MongoDB", "Gemini API", "Puppeteer", "Playwright"],
    github: "https://github.com/Likinesh/InterviewForge",
    image: "/interviewforge.png",
  },
  {
    id: 6,
    title: "HeroCycle",
    subtitle: "Web-based Pricing Engine",
    description: "Built as a solution for Hero Cycles' pricing problem. A robust web-based pricing engine where you can manage parts, build cycle configs, and get instant price breakdowns.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/Likinesh/HeroCycle-91social",
    image: "/herocycle.png",
  },
  {
    id: 7,
    title: "Nexora",
    subtitle: "School Admin Hub",
    description: "Nexora is a premium EdTech school administration MVP designed to bridge school administration with daily classroom activities, attendance tracking, and finance management.",
    tech: ["Django", "Django REST Framework", "SQLite", "React", "Tailwind CSS", "TanStack Query"],
    github: "https://github.com/Likinesh/Nexora-school-management",
    image: "/nexora.png",
  },
  {
    id: 8,
    title: "SMS",
    subtitle: "School Management System",
    description: "A robust school management backend API facilitating student administration and records.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/Likinesh/SMS",
    image: "/sms.png",
  },
  {
    id: 9,
    title: "TastyBites",
    subtitle: "Food Delivery Application",
    description: "A full-stack food delivery web application allowing users to browse menus, order food, and manage their dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Likinesh/TastyBites",
    image: "/tastybites.png",
  },
  {
    id: 10,
    title: "Orbital_CLI",
    subtitle: "AI-Powered Command Line Tool",
    description: "A developer CLI to bring AI right into the terminal, helping with debugging cryptic errors and automating repetitive boilerplate. Understands your codebase as you write.",
    tech: ["TypeScript", "Node.js", "JavaScript", "CSS"],
    github: "https://github.com/Likinesh/AI_CLI",
    image: "/orbitalcli.png",
  },
  {
    id: 11,
    title: "Hairdrama",
    subtitle: "Collaborative Task Manager",
    description: "A full-stack collaborative task management application featuring a drag-and-drop Kanban board, Google OAuth, team assignment, and automated email notifications.",
    tech: ["Next.js 16", "Flask", "Supabase", "Tailwind CSS", "Google OAuth"],
    github: "https://github.com/Likinesh/hairdrama",
    image: "/hairdrama.png",
  },
  {
    id: 12,
    title: "RN-Wallet",
    subtitle: "Mobile Crypto Wallet",
    description: "A react-native mobile application designed for secure cryptocurrency transactions and balance tracking.",
    tech: ["React Native", "Expo", "JavaScript"],
    github: "https://github.com/Likinesh/RN-Wallet",
    image: "/rnwallet.png",
  },
  {
    id: 13,
    title: "ServiceNow",
    subtitle: "Service Management App",
    description: "A mobile application for ticketing and service management, utilizing GraphQL to store assets and Clerk for secure authentication.",
    tech: ["React Native", "Expo", "Clerk", "GraphQL"],
    github: "https://github.com/Likinesh/ServiceNow",
    image: "/servicenow.png",
  },
  {
    id: 14,
    title: "Craft-Vault",
    subtitle: "P2P Marketplace Mobile App",
    description: "A React Native app connecting artisans with a global audience, handling sub-second syncs for over 50 concurrent transactions.",
    tech: ["React Native", "Expo", "Firebase", "Tailwind CSS", "Formik"],
    github: "https://github.com/Likinesh/Craft-Vault-social-marketplace-",
    image: "/craftvault.png",
  },
  {
    id: 15,
    title: "WebAnalysis",
    subtitle: "Website Analytics Dashboard",
    description: "A self-hosted, privacy-first tracking dashboard for visitor behavior providing raw insights from session duration to device types through clean visualizations.",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Likinesh/WebAnalysis",
    image: "/webanalysis.png",
  },
  {
    id: 16,
    title: "MyRestro POS",
    subtitle: "Restaurant Point of Sale System",
    description: "A full POS system making order management and billing workflows as intuitive as possible for high-pressure restaurant environments.",
    tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
    github: "https://github.com/Likinesh/MyRestro-POS",
    image: "/myrestro.png",
  },
];

export const experiences: Experience[] = [
  {
    date: "May 2025 – Jul 2025",
    company: "Publicis Sapient",
    location: "Bangalore, IN",
    role: "ASDE",
    roleAccent: "intern",
    bullets: [
      "Contributed to <strong>global telemetry and logging solution</strong> using Azure Application Insights for high availability systems as part of an agile (SCRUM) team.",
      "Developed a <strong>real-time flight tracking map</strong> with React, Mapbox, and WebSockets supporting more than 100+ flights and containerized services on Azure.",
      "Automated <strong>end-to-end (E2E) testing</strong> using Playwright for more than 5 UI components.",
    ],
  },
  {
    date: "2022 – present",
    company: "Green Club",
    location: "MNNIT",
    role: "Web",
    roleAccent: "Developer & Mentor",
    bullets: [
      "<strong>Developed and maintained</strong> the club website.",
      "<strong>Mentored 20+ juniors</strong> in Web Development and collaborative development practices.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    iconName: "Code2",
    title: "Languages",
    skills: ["C++", "JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    iconName: "Cpu",
    title: "Frameworks & Tools",
    skills: ["Node.js", "Django", "React.js", "Next.js", "React Native"],
  },
  {
    iconName: "Database",
    title: "Databases",
    skills: ["SQL", "MongoDB", "Redis", "PostgreSQL", "Firebase"],
  },
  {
    iconName: "Cloud",
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Postman", "VS Code", "GitHub"],
  },
  {
    iconName: "Sparkles",
    title: "AI Tools",
    skills: ["Claude Code", "Antigravity", "GitHub Copilot"],
  },
];

export const education: Education[] = [
  {
    year: "2022 – 2026",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Motilal Nehru National Institute of Technology Allahabad",
    score: "8.68/10",
  },
  {
    year: "2020 – 2022",
    degree: "Intermediate",
    school: "Sri Bhavishya Junior College, Vijayawada",
    score: "96.6%",
  },
  {
    year: "2020",
    degree: "High School",
    school: "Sri Chaitanya Techno School",
    score: "100%",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "🏅",
    title: "LeetCode Knight",
    description: "Rated Knight on Leetcode with Rating 1863.",
  },
  {
    icon: "⚡",
    title: "Rank 946 Globally",
    description: "Secured 946 rank in Leetcode Biweekly contest 143.",
  },
  {
    icon: "🎯",
    title: "IIT BHU Finalist",
    description: "Participated in final round Techalytics'25 (IIT BHU).",
  },
];
