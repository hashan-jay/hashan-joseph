<div align="center">

# Hashan Joseph — Portfolio

### Software Engineer · Next.js Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

A clean, modern personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
Customize your profile once in `src/data/site.ts` and the whole site updates.

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

This repository is a production-ready portfolio template for software engineers. It includes:

- A full-bleed hero with strong personal branding
- About, projects, skills, experience, and contact sections
- Smooth scroll reveal animations
- Fully responsive layout for mobile and desktop
- Centralized content config so you never hunt through JSX for copy

> **Tip:** Replace the placeholder name, bio, projects, and links in `src/data/site.ts` with your own details before deploying.

---

## Features

- **Single source of truth** for portfolio content (`site.ts`)
- **Accessible navigation** with sticky header and mobile menu
- **Project showcase** with stack tags and code/live links
- **Experience timeline** for roles and highlights
- **Skills grid** grouped by category
- **Contact CTAs** for email, GitHub, LinkedIn, and resume
- **Zero extra UI libraries** — lean Next.js + Tailwind only

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router) |
| Language     | [TypeScript](https://www.typescriptlang.org/) |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com/) |
| Fonts        | Syne, DM Sans, JetBrains Mono |
| Runtime      | [React 19](https://react.dev/)      |
| Package mgr  | npm                                 |

---

## Project Structure

```text
my-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Theme tokens & animations
│   │   ├── layout.tsx      # Root layout & fonts
│   │   └── page.tsx        # Home page composition
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx
│   │   └── Skills.tsx
│   └── data/
│       └── site.ts         # ✏️ Edit your content here
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js **18.18+** (recommended: 20+)
- npm **9+**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization

All portfolio copy lives in one file:

```ts
// src/data/site.ts
export const site = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "Your short pitch...",
  email: "you@example.com",
  // projects, skills, experience, social links...
};
```

### Quick checklist

- [ ] Update `name`, `role`, and `tagline`
- [ ] Replace email and social URLs
- [ ] Add your real projects and stack
- [ ] Fill in experience history
- [ ] Point `resumeUrl` to your PDF or Notion page
- [ ] Update metadata title/description if needed (`layout.tsx`)

### Theming

CSS variables are defined in `src/app/globals.css` (dark studio palette inspired by zyntaks.lk):

| Token                | Value / Purpose              |
| -------------------- | ---------------------------- |
| `--background`       | `#050505` page background    |
| `--foreground`       | `#f4f4f5` primary text       |
| `--muted`            | `#a1a1aa` secondary text     |
| `--surface`          | `#0c0c0c` section surfaces   |
| `--accent`           | `#67e8f9` cyan brand accent  |

---

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start local dev server (Turbopack) |
| `npm run build`   | Create production build          |
| `npm run start`   | Serve production build           |
| `npm run lint`    | Run ESLint                       |

---

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Deploy — defaults work out of the box for Next.js

### Other hosts

Build locally, then serve the output:

```bash
npm run build
npm run start
```

---

## Roadmap

- [x] Hero, about, projects, skills, experience, contact
- [x] Responsive layout & scroll animations
- [x] Centralized content config
- [ ] Blog / writing section
- [ ] Dark mode toggle
- [ ] CMS integration (optional)

See the [open issues](../../issues) for proposed features and known bugs.

---

## Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Hashan Joseph** — Software Engineer

- Email: [hashanjayy@gmail.com](mailto:hashanjayy@gmail.com)
- GitHub: [github.com/hashan-jay](https://github.com/hashan-jay)
- LinkedIn: [linkedin.com/in/hashanjayy](https://www.linkedin.com/in/hashanjayy)

Project Link: [https://github.com/your-username/my-portfolio](https://github.com/your-username/my-portfolio)

---

<div align="center">

**Built with Next.js · Made for engineers who care about craft**

</div>
