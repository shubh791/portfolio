# Shubham Panghal — Portfolio

A modern, production-grade portfolio built with **Next.js 14**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## ✨ Features
- Next.js 14 App Router with dynamic imports for performance
- Framer Motion animations throughout
- EmailJS contact form (2-step flow)
- Theme switcher (6 colour palettes)
- Fully responsive — mobile & desktop

## 🛠 Tech Stack
React · Next.js 14 · Node.js · Tailwind CSS · Framer Motion · shadcn/ui · EmailJS

## 📁 Project Structure
```
app/                        → Next.js pages, layout & API routes
components/portfolio/       → All portfolio section components
components/ui/              → shadcn/ui component library
lib/data/                   → Projects, skills & services data
public/                     → Static assets, images & resume.pdf
```

## 🔧 Environment Setup
Create a `.env` file in the root:
```
MONGO_URL=mongodb://localhost:27017
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 📄 Sections
- **Hero** — Typewriter, live terminal panel, tech stack badges
- **About** — Professional bio, skill highlights, count-up stats
- **Skills** — All categories visible with proficiency bars
- **Services** — What I offer with tech tags
- **Projects** — Filterable project cards with live/github links
- **Contact** — 2-step EmailJS form
- **Footer** — SP brand mark, © 2026 branding
