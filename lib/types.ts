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
