export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface LearningGoal {
  topic: string;
  status: "In Progress" | "Completed" | "Planned";
  notes: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string[];
    location: string;
    email: string;
    linkedin: string;
    github: string;
    yearsOfExperience: string;
    availableForWork: boolean;
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  learningPath: LearningGoal[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gaurav Garg",
    role: "Full-Stack Software Engineer",
    tagline: "Building fast, simple, and reliable web experiences.",
    yearsOfExperience: "3.5+",
    bio: [
      "Hey! I'm Gaurav, a software engineer with over 3.5 years of hands-on experience building web applications. I focus on creating clean user interfaces, reliable APIs, and software that people enjoy using.",
      "Currently, I work at Lark Finserv where I develop digital financial products and dashboards. Before that, I spent two years at Speqto Technologies building modern web apps for diverse clients.",
      "When I am not coding production features, I spend my time exploring new web tech, system design, and sharpening my fundamentals."
    ],
    location: "India",
    email: "ggarg6406@gmail.com",
    linkedin: "https://www.linkedin.com/in/gauravgarg-dev/",
    github: "https://github.com/gauravgarg-dev",
    availableForWork: true,
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Lark Finserv",
      period: "May 2026 – Present",
      location: "India",
      description: [
        "Develop and maintain financial technology platforms, user onboarding flows, and internal operations dashboards.",
        "Build fast, responsive interfaces using Next.js, React, and TypeScript with a strong focus on clean code and user security.",
        "Develop backend REST APIs and manage database operations, ensuring data consistency and smooth server performance.",
        "Collaborate closely with product managers and cross-functional teams to deliver reliable, secure financial workflows."
      ],
      skills: ["Node.js", "Express.js", "PostgreSQL", "Next.js", "React", "TypeScript", "REST APIs", "Tailwind CSS"],
    },
    {
      role: "Software Engineer",
      company: "Speqto Technologies",
      period: "Apr 2024 – May 2026",
      location: "India",
      description: [
        "Engineered and delivered full-stack web applications and client portals across multiple client engagements.",
        "Created modular, reusable UI components that improved team delivery speed and ensured consistent design systems.",
        "Built server-side logic and REST endpoints while handling database models and third-party integrations.",
        "Handled bug troubleshooting, code reviews, and performance optimizations across client projects."
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "React", "JavaScript (ES6+)", "REST APIs", "Git", "Tailwind CSS"],
    },
  ],
  projects: [
    {
      title: "Fintech Dashboard & Analytics",
      description:
        "A clean financial dashboard to track loans, daily transactions, and customer metrics with real-time charts and data tables.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/gauravgarg-dev",
      featured: true,
    },
    {
      title: "SaaS App Starter & Auth Boilerplate",
      description:
        "A minimal, production-ready full-stack template featuring secure authentication, role-based routing, and a clean database setup.",
      tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      github: "https://github.com/gauravgarg-dev",
      featured: true,
    },
    {
      title: "API & Webhook Event Monitor",
      description:
        "A lightweight developer utility to capture, inspect, and replay webhook payloads and API requests during local development.",
      tags: ["Node.js", "Express", "TypeScript", "WebSocket"],
      github: "https://github.com/gauravgarg-dev",
      featured: false,
    },
    {
      title: "DevNotes - Markdown Knowledge Base",
      description:
        "A distraction-free web notepad with instant search, tags, and local storage support designed for developer study notes.",
      tags: ["React", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/gauravgarg-dev",
      featured: false,
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "RESTful APIs", "Authentication / JWT", "API Integration"],
    },
    {
      category: "Databases & Tools",
      items: ["PostgreSQL", "MongoDB", "Git & GitHub", "Postman", "VS Code", "Vercel"],
    },
    {
      category: "Practices",
      items: ["Responsive Design", "Clean Code", "Component Architecture", "Performance Optimization"],
    },
  ],
  learningPath: [
    {
      topic: "Next.js 16 App Router & Server Actions",
      status: "In Progress",
      notes: "Mastering deep server-side caching, streaming, and modern React 19 architecture patterns.",
    },
    {
      topic: "System Design & Distributed Systems",
      status: "In Progress",
      notes: "Studying scalable architectures, database indexing, caching strategies, and message queues.",
    },
    {
      topic: "AI Engineering & LLM Workflows",
      status: "Planned",
      notes: "Building intelligent workflows, vector databases, and agentic integrations with web apps.",
    },
    {
      topic: "Docker & Containerization Fundamentals",
      status: "Completed",
      notes: "Containerizing Node and Next.js applications for consistent multi-environment deployments.",
    },
  ],
};
