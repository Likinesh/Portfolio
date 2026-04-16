export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Experience {
  date: string;
  company: string;
  location: string;
  role: string;
  roleAccent: string;
  bullets: string[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  skills: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  score: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

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
  leetcodeHandle: "Likithkk · Knight 🏅",
};

// First 3 projects are shown on the homepage, all are shown on /projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Eventra",
    subtitle: "AI-Powered Event Management",
    description:
      "A smart event management platform with AI-powered event creation via Gemini API, real-time data sync using Convex, Clerk authentication, and Unsplash integration for dynamic event imagery. Built with Next.js.",
    tech: ["Next.js", "JavaScript", "Convex", "Clerk", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/Likinesh/Eventra",
    live: "https://eventra-peach.vercel.app/",
    image: "/eventra.png",
  },
  {
    id: 2,
    title: "HealNow",
    subtitle: "Tele-Health Platform",
    description:
      "Full-stack platform enabling patients to book and attend real-time video consultations with doctors. Features role-based auth, Vonage API for video, and Prisma ORM optimizations that reduced response time by 35%.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Vonage API", "Vercel"],
    github: "https://github.com/Likinesh",
    live: "https://heal-now-next.vercel.app",
    image: "/healnow.png",
  },
  {
    id: 3,
    title: "Craft-Vault",
    subtitle: "P2P Marketplace Mobile App",
    description:
      "Cross-platform mobile marketplace connecting artisan buyers and sellers with sub-second real-time sync. Supports 50+ concurrent transactions with Firebase Firestore, validated forms via Formik, and in-app secure messaging.",
    tech: ["React Native", "Expo", "Firebase", "Tailwind CSS", "Formik"],
    github: "https://github.com/Likinesh",
  },
  {
    id: 4,
    title: "AI CLI",
    subtitle: "AI-Powered Command Line Tool",
    description:
      "An intelligent command-line interface that leverages AI to assist developers with code generation, debugging, and workflow automation. Features a client-server architecture with a TypeScript backend and interactive frontend.",
    tech: ["TypeScript", "Node.js", "JavaScript", "CSS"],
    github: "https://github.com/Likinesh/AI_CLI",
  },
  {
    id: 5,
    title: "WebAnalysis",
    subtitle: "Website Analytics Dashboard",
    description:
      "A self-hosted web analytics platform that tracks visitor data including geolocation, device/browser info, UTM sources, and session duration. Displays insights via interactive graphs with Drizzle ORM and Next.js.",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Likinesh/WebAnalysis",
  },
  // {
  //   id: 5,
  //   title: "Hungry Cheetahs",
  //   subtitle: "Food Ordering Web App",
  //   description:
  //     "A full-stack food ordering platform built with Node.js and Express. Features dynamic EJS-based views, route-based navigation, user-friendly menu browsing, and a streamlined ordering workflow for restaurants.",
  //   tech: ["Node.js", "Express", "EJS", "JavaScript", "CSS", "MongoDB"],
  //   github: "https://github.com/Likinesh/HUNGRY-CHEETAHS",
  // },
  {
    id: 6,
    title: "MyRestro POS",
    subtitle: "Restaurant Point-of-Sale System",
    description:
      "A modern point-of-sale system designed for restaurants, featuring real-time order management, menu customization, and billing workflows. Built with a clean client-server architecture and MIT licensed.",
    tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
    github: "https://github.com/Likinesh/MyRestro-POS",
  },
];

export const experiences: Experience[] = [
  {
    date: "May 2025 – Jul 2025",
    company: "Publicis Sapient",
    location: "Bangalore, IN",
    role: "Associate Software",
    roleAccent: "Development Engineer Intern",
    bullets: [
      "Architected a <strong>global telemetry & logging solution</strong> using Azure Application Insights for high-availability systems, collaborating across QA teams.",
      "Built a <strong>real-time flight tracking map</strong> with React, Mapbox, and WebSockets — handling 100+ concurrent flights; containerized services on Azure.",
      "Automated <strong>end-to-end testing</strong> pipelines using Playwright & JavaScript, improving release confidence across the team.",
    ],
  },
  {
    date: "2022 – Present",
    company: "Green Club · MNNIT",
    location: "Allahabad, IN",
    role: "Web",
    roleAccent: "Lead & Mentor",
    bullets: [
      "Developed and maintained the <strong>club website</strong> end-to-end.",
      "Mentored <strong>20+ juniors</strong> in web development and collaborative development practices using Git workflows.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "{ }",
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    icon: "⬡",
    title: "Frameworks",
    skills: ["React.js", "Next.js", "React Native", "Node.js", "Django"],
  },
  {
    icon: "⬢",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "MySQL", "Neon"],
  },
  {
    icon: "☁",
    title: "Cloud & Tools",
    skills: ["Azure", "Docker", "Git", "Mapbox", "WebSockets", "Playwright", "Postman"],
  },
];

export const education: Education[] = [
  {
    year: "2022 – Jul 2026",
    degree: "B.Tech · Computer Science & Engineering",
    school: "Motilal Nehru National Institute of Technology Allahabad",
    score: "CGPA: 8.68 / 10",
  },
  {
    year: "2020 – 2022",
    degree: "Intermediate · MPC",
    school: "Sri Bhavishya Junior College, Vijayawada · AP Board",
    score: "96.6%",
  },
  {
    year: "2020",
    degree: "High School",
    school: "Sri Chaitanya Techno School · AP Board",
    score: "100%",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "🏅",
    title: "LeetCode Knight",
    description: "Rating 1863 — top competitive programmers tier on LeetCode platform.",
  },
  {
    icon: "⚡",
    title: "Rank 946 Globally",
    description: "LeetCode Biweekly Contest 143 — top ranking among thousands of participants.",
  },
  {
    icon: "🎯",
    title: "IIT BHU Finalist",
    description: "Reached the final round of Techalytics '25 at IIT BHU.",
  },
];
