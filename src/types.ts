export interface Project {
  id: string;
  title: string;
  category: "Web Apps" | "Mobile Application" | "Creative Code" | "Interactive Design";
  summary: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  client?: string;
  role?: string;
  duration?: string;
  features?: string[];
}

export interface Experience {
  id: string;
  period: string; // e.g., "2024 - Present"
  role: string;
  company: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
