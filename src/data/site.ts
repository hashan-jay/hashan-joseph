export type Project = {
  title: string;
  description: string;
  stack: string[];
  year: number;
  live?: string;
  source?: string;
  sourceLocked?: boolean;
  image?: string;
  featured?: boolean;
  status?: "live" | "private";
};

export const site = {
  name: "Hashan Joseph",
  role: "Full-Stack Engineer",
  tagline:
    "I design and ship reliable web products — from clean APIs to interfaces people enjoy using.",
  location: "Wattala, Sri Lanka",
  email: "hashanjayy@gmail.com",
  profileImage: "/profile.png",
  resumeUrl:
    "mailto:hashanjayy@gmail.com?subject=CV%20Request%20%E2%80%94%20Recruitment%20Inquiry&body=Hi%20Hashan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20learn%20more%20about%20your%20experience.%0A%0ACould%20you%20please%20share%20your%20latest%20CV%2Fresume%3F%20We%20are%20currently%20hiring%20for%20a%20role%20that%20may%20be%20a%20strong%20fit%2C%20and%20I%E2%80%99d%20appreciate%20the%20opportunity%20to%20discuss%20it%20further.%0A%0ACompany%3A%20%0ARole%3A%20%0ABest%20time%20to%20connect%3A%20%0A%0AThank%20you%2C%0A%5BYour%20Name%5D%0A%5BYour%20Title%20%2F%20Company%5D%0A%5BContact%20Number%5D",
  social: {
    github: "https://github.com/hashan-jay",
    linkedin: "https://www.linkedin.com/in/hashanjayy",
    twitter: "https://x.com",
  },
  about: {
    paragraphs: [
      "I'm a full-stack engineer who cares about clarity — in code, in systems, and in the products people use every day. I work across the stack, with a focus on TypeScript, React, and well-structured backends.",
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
        "XML",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Vanilla JavaScript (ES6+)",
      ],
      coreFrameworksAndLibraries: [
        "ASP.NET Core",
        "Next.js",
        "Express.js",
        "React.js",
        "React Router",
        "Redux",
        "Entity Framework Core",
        "Bootstrap",
        "Tailwind CSS",
        "Framer Motion",
        "WordPress",
        "Joomla",
        "Odoo",
      ],
    },
    databases: ["MS SQL Server", "MySQL", "MongoDB", "SQLite"],
    analytics: ["Power BI", "R Studio", "ggplot2", "dplyr", "tidyr"],
    seo: ["Google Analytics (GA4)", "Google Search Console (GSC)"],
    testing: ["Postman", "Scalar", "Swagger"],
    deployments: ["Azure", "Vercel", "Docker", "GitHub"],
    mobile: {
      note: "Experience in Mobile Application development using Android Studio (Java, XML).",
      tools: ["Android Studio", "Java", "XML"],
    },
    ides: [
      "Android Studio",
      "IntelliJ IDEA",
      "VS Code",
      "Visual Studio",
      "Python IDE",
      "NetBeans",
      "Cursor",
      "Git",
      "XAMPP",
      "WAMP",
    ],
  },
  experience: [
    {
      company: "Zyntaks",
      role: "Full Stack Engineer",
      workMethod: "Founder - Contract based",
      period: "Jun 2026 — Present",
      description:
        "Building and shipping full-stack web products for clients — from modern marketing sites to production web applications.",
    },
    {
      company: "43V3R Creations",
      role: "Web Developer",
      workMethod: "Contract based",
      period: "Aug 2024 — May 2025",
      description:
        "Developed and maintained web experiences, collaborating on UI implementation, integrations, and delivery for client projects.",
    },
    {
      company: "Affno Asia Pacific (Pvt) Ltd",
      role: "Software Engineering Intern",
      workMethod: "Hybrid - Full time",
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
      sourceLocked: true,
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
      sourceLocked: true,
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
      source: "https://github.com/hashan-jay/RoarFitnessERP",
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
      source: "https://github.com/hashan-jay/ecostay-retreat-mobile-app",
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
      source: "https://github.com/hashan-jay/fire-jumpers-by-hashanjay",
      image: "/projects/fire-jumpers.png",
      featured: false,
      status: "private",
    },
    {
      title: "SkillPro Institute - Student Management System",
      description:
        "Full-stack student management web system for SkillPro Institute — courses, registration, and institute workflows with a MySQL-backed data layer.",
      stack: ["TypeScript", "JavaScript", "MySQL", "HTML5"],
      year: 2025,
      source: "https://github.com/hashan-jay/skillpro-institute-web-system",
      image: "/projects/skillpro-institute.png",
      featured: false,
      status: "private",
    },
  ] satisfies Project[],
} as const;

export const featuredProjects = site.projects
  .filter((p) => p.featured)
  .slice()
  .sort((a, b) => b.year - a.year);

export const allProjects = site.projects
  .slice()
  .sort((a, b) => b.year - a.year);
