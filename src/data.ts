import { Project, Experience, SkillCategory } from "./types";

export const DEV_INFO = {
  name: "Jason David",
  title: "Software Developer",
  subTitle: "I build cross-platform mobile apps and production web applications — React Native apps, PERN-stack platforms, AWS-deployed sites, and everything in between — with a focus on performance, security, and UI that feels native.",
  bio: "Software developer with 5+ years of experience shipping cross-platform apps and production websites. My background covers the full development lifecycle, from architecting mobile apps in React Native and leading framework migrations to Flutter, to managing releases on the App Store and Google Play. I take security seriously, regularly running vulnerability scans, and I’m equally comfortable working full-stack with the PERN stack or deploying scalable Next.js sites on AWS. I’m passionate about writing clean, resilient code and building interfaces that feel great to use. Beyond the technical specs, I believe building software should be a collaborative, high-energy process. I love solving tough problems as a team, geeking out over performance, and keeping things fun while we get the job done.",
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
    id: "versus",
    title: "Versus",
    category: "Mobile Application",
    summary: "Real-time 1v1 puzzle duel game for Android. Two players get the same puzzle, and the first correct answer takes the round.",
    description: "Versus is a real-time multiplayer puzzle game. Both players see the same puzzle at the same moment, the server keeps the clock, and the first correct answer wins the round. First to 5 wins the match. I designed and built it end to end: a Flutter client and a server-authoritative Supabase backend (Postgres, Realtime, Edge Functions) that generates problems, runs timers, validates answers and settles ELO ratings. It's live on Google Play.",
    tags: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL", "Realtime", "Edge Functions", "TypeScript"],
    imageUrl: "/projects/versus-home.webp",
    gallery: ["/projects/versus-home.webp", "/projects/versus-duel.webp", "/projects/versus-friends.webp"],
    client: "Personal Product",
    role: "Solo Developer & Designer",
    duration: "2026",
    features: [
      "Server-authoritative matches: problems come from a secret seed, rounds are sealed with AES-GCM until both players are ready",
      "Fair timing from the database clock, so the first correct answer wins on server receive time",
      "Eight categories: math, logic, word, memory and four trivia sets",
      "Quick-match queues with ELO ratings, a bot fallback after 15 s, friend rooms and rematches",
      "Heartbeat and Presence based forfeit handling, with a pg_cron backstop for overdue rounds",
      "Friends, challenges with push notifications, leaderboards, streaks and short lessons between duels",
      "Released on Google Play with a marketing site on Cloudflare Pages"
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.versus.versus",
    demoLabel: "Get it on Google Play",
    demoIconUrl: "/projects/playstore.png"
  },
  {
    id: "cheeu-clinic",
    title: "CheeU Physical Therapy Clinic",
    category: "Web Apps",
    summary: "Responsive clinic website built with Next.js, AWS Amplify, and Nodemailer for a rehabilitation center.",
    description: "Built and customized a responsive web application for CheeU Physical Therapy Clinic Rehabilitation Center. Integrated AWS Route 53 for DNS management, AWS Amplify for hosting and CI/CD, and Nodemailer for contact form email delivery.",
    tags: ["Next.js", "AWS Amplify", "AWS Route 53", "Nodemailer", "Responsive Design"],
    imageUrl: "/projects/cheeu.webp",
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
    summary: "Editorial-style developer portfolio built with Next.js, TypeScript, Tailwind CSS and Motion.",
    description: "Designed and developed this personal portfolio site from scratch to showcase projects, experience, and skills. Built with Next.js, TypeScript, Tailwind CSS v4 and Motion, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    imageUrl: "/projects/portfolio.webp",
    client: "Personal Project",
    role: "Developer & Designer",
    duration: "2025",
    features: [
      "Fully responsive single-page portfolio with dark mode support",
      "Lightweight scroll and hover animations (transform and opacity only, reduced-motion aware)",
      "Project index with cursor-following previews and slide-in case studies",
      "Printable resume section with real work experience",
      "Deployed on Vercel with automatic CI/CD on every push"
    ],
    githubUrl: "https://github.com/jasoncd598/Portfolio"
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
