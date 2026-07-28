export type Project = {
  title: string;
  description: string;
  stack: string[];
  year: number;
  live?: string;
  source?: string;
  image?: string;
  featured?: boolean;
  status?: "live" | "private";
};

export const site = {
  name: "Hashan Joseph",
  role: "Software Engineer",
  tagline:
    "I design and ship reliable web products — from clean APIs to interfaces people enjoy using.",
  location: "Wattala, Sri Lanka",
  email: "hashanjayy@gmail.com",
  profileImage: "/profile.png",
  resumeUrl: "#",
  social: {
    github: "https://github.com/hashan-jay",
    linkedin: "https://www.linkedin.com/in/hashanjayy",
    twitter: "https://x.com",
  },
  about: {
    paragraphs: [
      "I'm a software engineer who cares about clarity — in code, in systems, and in the products people use every day. I work across the stack, with a focus on TypeScript, React, and well-structured backends.",
      "Outside of shipping features, I enjoy mentoring, writing technical notes, and refining developer experience so teams can move faster without sacrificing quality.",
    ],
  },
  focus:
    "Mainly focused on Web Application development across the full SDLC — from design and Agile delivery through development, API testing, and deployment.",
  projectManagement: ["Agile-Scrum", "Microsoft Project"],
  sdlc: {
    design: ["Photoshop", "Premiere Pro", "Figma", "Canva", "Affinity", "CapCut", "Hypic", "Draw.io", "Mermaid"],
    development: {
      languages: [
        "C++",
        "Python",
        "C#",
        "Java",
        "PHP",
        "R",
        "SQL",
        "JavaScript (ES6)",
        "XML",
        "TypeScript",
        "HTML5",
        "CSS3",
      ],
      libraries: [
        "React.js",
        "React Router",
        "Redux",
        "jQuery",
        "ggplot2",
        "Entity Framework Core",
        "Bootstrap",
        "Tailwind CSS",
        "Framer Motion",
      ],
      frameworks: [
        "ASP.NET Core",
        "Next.js",
        "Express.js",
        "Node.js",
        "WordPress",
        "Joomla",
        "Odoo",
      ],
    },
    databases: ["MS SQL Server", "MySQL", "MongoDB", "MariaDB"],
    architecture: ["Web API & MVC Architecture"],
    analytics: ["Power BI", "R Studio"],
    seo: ["Google Analytics (GA4)", "Google Search Console (GSC)"],
    testing: ["Postman", "Scalar", "Swagger"],
    deployments: ["Azure", "Vercel", "Docker"],
    mobile: {
      note: "Experience in Mobile Application development using Android Studio (Java, XML).",
      tools: ["Android Studio", "Java", "XML"],
    },
    ides: [
      "Android Studio",
      "JetBrains IDE",
      "VS Code",
      "Visual Studio",
      "Python IDE",
      "NetBeans",
      "Cursor",
    ],
  },
  experience: [
    {
      company: "Zyntaks",
      role: "Full Stack Engineer",
      period: "Jun 2026 — Present",
      description:
        "Building and shipping full-stack web products for clients — from modern marketing sites to production web applications.",
    },
    {
      company: "43V3R Creations",
      role: "Web Developer",
      period: "Aug 2024 — May 2025",
      description:
        "Developed and maintained web experiences, collaborating on UI implementation, integrations, and delivery for client projects.",
    },
    {
      company: "Affno Asia Pacific (Pvt) Ltd",
      role: "Software Engineering Intern",
      period: "Feb 2024 — May 2024",
      description:
        "Contributed to software engineering workflows as an intern — supporting development tasks, testing, and team delivery practices.",
    },
  ],
  education: [
    {
      title: "Higher Diploma in Computing & Software Engineering",
      institution: "Cardiff Metropolitan University",
      period: "Aug 2024 — Aug 2026",
      status: "Currently Reading",
    },
    {
      title: "Advanced Level — Mathematics Stream",
      institution: "St. Joseph's College, Colombo 10 — Wattala Branch",
      period: "Jan 2023",
      status: "Merit",
    },
    {
      title: "Certificate in Applied Information Technology",
      institution:
        "Sri Lanka Telecom Training Center (SLTTC / Nebula Institute of Technology) — Welisara",
      period: "Jan 2020 — Jun 2020",
      status: "Distinction",
    },
    {
      title: "Ordinary Level",
      institution: "St. Joseph's College, Colombo 10 — Wattala Branch",
      period: "Dec 2019",
      status: "Distinction",
    },
  ],
  projects: [
    {
      title: "Zyntaks",
      description:
        "Software development studio website for Zyntaks — modern web presence covering services, process, and portfolio with a dark cinematic UI.",
      stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      year: 2026,
      live: "https://zyntaks.lk",
      source: "#",
      image: "/projects/zyntaks.png",
      featured: true,
      status: "live",
    },
    {
      title: "Fitness with Shyama",
      description:
        "Women-focused Zumba studio website for Fitness with Shyama in Wattala — packages, amenities, and conversion-focused landing experience.",
      stack: ["React", "JavaScript", "Vite", "CSS3"],
      year: 2026,
      live: "https://fitwithshyama.xyz",
      source: "#",
      image: "/projects/fitwithshyama.png",
      featured: true,
      status: "live",
    },
    {
      title: "Roar Fitness ERP Web Application",
      description:
        "Enterprise resource planning web application for fitness operations. Full project details coming soon — currently not hosted live.",
      stack: ["React", "ASP.NET Core Web API", "SQL Server"],
      year: 2026,
      source: "#",
      image: "/projects/roar-fitness.png",
      featured: true,
      status: "private",
    },
    {
      title: "EcoStay Retreat Mobile Application",
      description:
        "Nature-themed Android mobile app for EcoStay Retreat — rooms, activities, bookings, calendar, and guest profile flows in a single experience.",
      stack: ["Android Studio", "Java", "XML"],
      year: 2026,
      source: "#",
      image: "/projects/ecostay-retreat.png",
      featured: false,
      status: "private",
    },
    {
      title: "JavaScript 2D Game - Fire Jumpers",
      description:
        "A browser-based 2D jump-and-run game built with JavaScript — focused on gameplay loops, collision handling, and interactive controls.",
      stack: ["JavaScript", "HTML5", "CSS3"],
      year: 2023,
      source: "#",
      featured: false,
      status: "private",
    },
  ] satisfies Project[],
} as const;

export const featuredProjects = site.projects.filter((p) => p.featured);
export const allProjects = site.projects;
