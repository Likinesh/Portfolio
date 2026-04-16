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
  iconName: string;
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
      "I built Eventra to bridge the gap between creative planning and technical execution. It's a platform that uses the Gemini API to intelligently generate event themes, paired with Convex for real-time data synchronization. It's where seamless organization meets automated creativity.",
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
      "A project born from the need for more accessible healthcare. I developed a full-stack space where patients and doctors can connect via real-time video. Beyond the interface, I spent significant time optimizing the database with Prisma, managing to cut down response times by nearly 35% for a snappier experience.",
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
      "I wanted to see how far I could push real-time interactions on mobile. Craft-Vault is a React Native app that connects artisans with a global audience. It handles sub-second syncs for over 50 concurrent transactions, proving that even small-scale marketplaces can feel incredibly robust and reactive.",
    tech: ["React Native", "Expo", "Firebase", "Tailwind CSS", "Formik"],
    github: "https://github.com/Likinesh",
  },
  {
    id: 4,
    title: "AI CLI",
    subtitle: "AI-Powered Command Line Tool",
    description:
      "As a developer, I'm always looking for ways to stay in the flow. I built this CLI to bring AI right into the terminal—helping with anything from debugging cryptic errors to automating repetitive boilerplate. It's essentially a local assistant that understands your codebase as you write it.",
    tech: ["TypeScript", "Node.js", "JavaScript", "CSS"],
    github: "https://github.com/Likinesh/AI_CLI",
  },
  {
    id: 5,
    title: "WebAnalysis",
    subtitle: "Website Analytics Dashboard",
    description:
      "Privacy-first analytics is something I care about. This dashboard allows for self-hosted tracking of visitor behavior without relying on big-tech trackers. It gives you raw insights—from session duration to device types—presented through clean, interactive visualizations built with Drizzle and Next.js.",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Likinesh/WebAnalysis",
  },
  {
    id: 6,
    title: "MyRestro POS",
    subtitle: "Restaurant Point-of-Sale System",
    description:
      "What started as a tool for local businesses evolved into a full POS system. I focused on making the order management and billing workflows as intuitive as possible for high-pressure restaurant environments. It teaches the importance of UI simplicity in mission-critical software.",
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
      "I took ownership of a <strong>global telemetry solution</strong>, integrating Azure Application Insights into high-availability systems to provide deeper visibility into operational Health.",
      "Collaborated on a <strong>real-time flight tracking</strong> experience using React and Mapbox, successfully handling continuous data streams for 100+ flights simultaneously.",
      "Strengthened our deployment lifecycle by building <strong>automated end-to-end test suites</strong> with Playwright, significantly reducing manual QA cycles.",
    ],
  },
  {
    date: "2022 – Present",
    company: "Green Club · MNNIT",
    location: "Allahabad, IN",
    role: "Web",
    roleAccent: "Lead & Mentor",
    bullets: [
      "I led the redesign and development of our <strong>community platform</strong>, focusing on creating an accessible home for our environmental initiatives.",
      "Mentored a cohort of <strong>20+ junior developers</strong>, fostering a culture of peer reviews and clean code through standard Git workflows and open-source contributions.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    iconName: "Code2",
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    iconName: "Cpu",
    title: "Frameworks",
    skills: ["React.js", "Next.js", "React Native", "Node.js", "Django"],
  },
  {
    iconName: "Database",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "MySQL", "Neon"],
  },
  {
    iconName: "Cloud",
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
    description: "Achieved a rating of 1863, placing me in the top tier of competitive programmers globally on the platform.",
  },
  {
    icon: "⚡",
    title: "Rank 946 Globally",
    description: "Secured a top-1000 finish in LeetCode Biweekly Contest 143 out of tens of thousands of participants worldwide.",
  },
  {
    icon: "🎯",
    title: "IIT BHU Finalist",
    description: "Selected as a finalist for Techalytics '25 at IIT BHU, demonstrating excellence in data-driven problem solving.",
  },
];
