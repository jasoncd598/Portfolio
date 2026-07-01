import { Project, Experience, SkillCategory } from "./types";

export const DEV_INFO = {
  name: "Jason David",
  title: "Software Developer",
  subTitle: "I build cross-platform mobile apps and production web applications — React Native apps, PERN-stack platforms, AWS-deployed sites, and everything in between — with a focus on performance, security, and UI that feels native.",
  bio: "Software developer with 5+ years shipping cross-platform apps and production websites. At BC Remittance Ltd., a fintech company serving overseas Filipino workers, I build mobile apps in React Native, contribute to our ongoing migration to Flutter, run recurring Snyk security scans, and manage releases across the App Store and Google Play. On the web side, I'm comfortable working full-stack with the PERN stack (PostgreSQL, Express, React, Node.js) and have built and deployed AWS-hosted Next.js sites with real-world cloud infrastructure. I care about clean code, sharp interfaces, and software that actually holds up.",
  location: "Angeles City, Pampanga, Philippines",
  email: "jaycd598@gmail.com",
  phone: "+63 935 736 6675",
  resumeUrl: "#resume-section",
  socials: {} as Record<string, string>,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Completed Projects", value: "2" },
    { label: "Available", value: "Now" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React Native", "React", "Tailwind", "Expo"]
  },
  {
    title: "Full-Stack Web Development",
    skills: ["PERN Stack (PostgreSQL, Express, React, Node.js)", "REST API"]
  },
  {
    title: "Cloud & Backend Services",
    skills: ["AWS (Route 53, Amplify)", "Snyk (security scanning)", "Firebase"]
  },
  {
    title: "Version Control",
    skills: ["Git"]
  },
  {
    title: "App Distribution",
    skills: ["Google Play Console", "Apple App Store Connect", "Release Management & Compliance"]
  },
  {
    title: "Other",
    skills: ["REST APIs & SDK Integration", "Responsive UI/UX Design", "Nodemailer"]
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
    imageUrl: "/projects/cheeu.png",
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
    id: "portfolio-site",
    title: "Personal Portfolio",
    category: "Web Apps",
    summary: "Modern developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    description: "Designed and developed this personal portfolio site from scratch to showcase projects, experience, and skills. Built with Next.js, TypeScript, Tailwind CSS v4, and Motion for smooth animations. Deployed to Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    imageUrl: "/projects/portfolio.png",
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
    duration: "2026 - Present",
    features: [
      "Business owner sign-up and account management",
      "Staff management and service catalog configuration",
      "Client appointment scheduling and tracking",
      "Built to replace manual paper-book and group-chat coordination",
      "Actively in development"
    ],
    githubUrl: "https://github.com/jasoncd598/Vesta"
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    period: "April 2021 – Present",
    role: "Software Developer",
    company: "BC Remittance Ltd.",
    location: "Philippines (On-site / Remote)",
    description: "A Filipino-owned fintech company providing fast, secure cross-border money transfers for overseas Filipino workers across the UK, EU, US, Canada, and the Philippines.",
    bullets: [
      "Built cross-platform mobile apps for iOS and Android that improved usability and accessibility using React Native, and have been contributing to our migration to Flutter along the way.",
      "Built a recurring security scan process that caught vulnerabilities before they shipped using Snyk.",
      "Built and managed the release process that kept every update compliant with platform guidelines using Google Play Console and App Store Connect."
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
