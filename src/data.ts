import { Project, Experience, SkillCategory } from "./types";

export const DEV_INFO = {
  name: "Jason David",
  title: "Software Developer",
  subTitle: "I build cross-platform mobile apps and production web applications — Flutter migrations, AWS-deployed sites, and everything in between — with a focus on performance, security, and UI that feels native.",
  bio: "Software developer with 5+ years shipping cross-platform apps and production websites. At BC Remittance Ltd. I led a full Flutter migration, redesigned the mobile UI/UX, and own the end-to-end App Store and Google Play release pipeline. On the web side, I've built and deployed AWS-hosted Next.js sites with real-world cloud infrastructure. I care about clean code, sharp interfaces, and software that actually holds up.",
  location: "Angeles City, Pampanga, Philippines",
  email: "jaycd598@gmail.com",
  phone: "+63 935 736 6675",
  resumeUrl: "#resume-section",
  socials: {} as Record<string, string>,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Completed Projects", value: "10+" },
    { label: "On-Time Delivery", value: "100%" },
    { label: "Available", value: "Now" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", proficiency: 92 },
      { name: "TypeScript", proficiency: 90 },
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 88 },
      { name: "React Native", proficiency: 92 },
      { name: "React", proficiency: 90 },
      { name: "Tailwind", proficiency: 90 },
      { name: "Expo", proficiency: 85 }
    ]
  },
  {
    title: "Full-Stack Web Development",
    skills: [
      { name: "PERN Stack (PostgreSQL, Express, React, Node.js)", proficiency: 85 },
      { name: "REST API", proficiency: 88 }
    ]
  },
  {
    title: "Cloud & Backend Services",
    skills: [
      { name: "AWS (Route 53, Amplify)", proficiency: 82 },
      { name: "Snyk (security scanning)", proficiency: 85 },
      { name: "Firebase", proficiency: 80 }
    ]
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", proficiency: 92 }
    ]
  },
  {
    title: "App Distribution",
    skills: [
      { name: "Google Play Console", proficiency: 90 },
      { name: "Apple App Store Connect", proficiency: 88 },
      { name: "Release Management & Compliance", proficiency: 88 }
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "REST APIs & SDK Integration", proficiency: 88 },
      { name: "Responsive UI/UX Design", proficiency: 90 },
      { name: "Nodemailer", proficiency: 82 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cheeu-clinic",
    title: "CheeU Physical Therapy Clinic",
    category: "Web Apps",
    summary: "Responsive clinic website built with Next.js, AWS Amplify, and Nodemailer for a rehabilitation center.",
    description: "Built and customized a responsive web application for CheeU Physical Therapy Clinic Rehabilitation Center. Integrated AWS Route 53 for DNS management, AWS Amplify for hosting and CI/CD, and Nodemailer for contact form email delivery.",
    tags: ["Next.js", "AWS Amplify", "AWS Route 53", "Nodemailer", "Responsive Design"],
    client: "CheeU Physical Therapy Clinic",
    role: "Freelance Frontend Developer",
    duration: "June 2025",
    features: [
      "Built fully responsive web application using Next.js",
      "Configured AWS Route 53 for custom domain and DNS routing",
      "Deployed and hosted via AWS Amplify with automated CI/CD pipeline",
      "Integrated Nodemailer for contact and appointment inquiry emails",
      "Live at https://www.cheeuclinic.com"
    ],
    demoUrl: "https://www.cheeuclinic.com"
  },
  {
    id: "vesta",
    title: "Vesta",
    category: "Web Apps",
    summary: "SaaS platform for small service businesses to manage staff, services, and client appointments — in progress.",
    description: "Vesta lets business owners sign up, manage their staff and the services they offer, and track client appointments — replacing the paper books and group-chat coordination many small service businesses rely on. Currently in active development.",
    tags: ["PERN Stack", "PostgreSQL", "Express", "React", "Node.js", "Work in Progress"],
    client: "Personal Project",
    role: "Full-Stack Developer",
    duration: "2026 – Present",
    features: [
      "Business owner sign-up and account management",
      "Staff management and service catalog configuration",
      "Client appointment scheduling and tracking",
      "Built to replace manual paper-book and group-chat coordination",
      "Actively in development"
    ]
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio",
    category: "Web Apps",
    summary: "Modern developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    description: "Designed and developed this personal portfolio site from scratch to showcase projects, experience, and skills. Built with Next.js, TypeScript, Tailwind CSS v4, and Motion for smooth animations. Deployed to Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    client: "Personal Project",
    role: "Developer & Designer",
    duration: "2025",
    features: [
      "Fully responsive single-page portfolio with dark mode support",
      "Smooth scroll animations powered by Framer Motion",
      "Interactive project gallery with case study lightbox",
      "Printable resume section with real work experience",
      "Deployed on Vercel with automatic CI/CD on every push"
    ],
    githubUrl: "https://github.com/jasoncd598/Portfolio"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    period: "April 2021 – Present",
    role: "Software Developer — Mobile Dev",
    company: "BC Remittance Ltd.",
    location: "Philippines (On-site / Remote)",
    description: "Develop and maintain cross-platform mobile applications for iOS and Android, handling the full release lifecycle while ensuring security and performance standards.",
    bullets: [
      "Developed and customized cross-platform mobile applications using Flutter and React Native, redesigning the UI/UX for improved usability and accessibility.",
      "Conducted security scans and continuous vulnerability monitoring using Snyk to maintain strong application security standards.",
      "Successfully migrated the mobile application from React Native Expo to Flutter, improving performance, scalability, and development efficiency.",
      "Managed the full release and deployment process for both Google Play and Apple App Store, ensuring compliance with platform guidelines."
    ]
  },
  {
    id: "exp-2",
    period: "June 2025",
    role: "Freelance Software Developer — Front End Dev",
    company: "CheeU Physical Therapy Clinic Rehabilitation Center",
    location: "Philippines (Remote)",
    description: "Built and deployed a modern responsive website for a physical therapy clinic using cloud infrastructure and modern frontend tooling.",
    bullets: [
      "Built and customized a responsive web application using Next.js for a rehabilitation center client.",
      "Configured AWS Route 53 for domain management and AWS Amplify for hosting and automated deployments.",
      "Integrated Nodemailer to handle contact form and appointment inquiry emails.",
      "Live production site: https://www.cheeuclinic.com"
    ]
  }
];
