# Deepika Negi — Portfolio

Premium dark-theme portfolio website built with **React + Vite + TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark premium theme with glassmorphism, animated blobs, noise texture
- 🪐 Orbiting skill icons around profile photo (2 rings, counter-rotated)
- 🎞️ Framer Motion scroll animations + parallax
- 🌐 i18n support (English / Dutch) with `react-i18next`
- 📱 Fully responsive, mobile-first
- ♿ Accessible: ARIA labels, keyboard navigation, `prefers-reduced-motion`
- ⚡ Lazy-loaded sections, code-split vendor bundles

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Build

```bash
npm run build
npm run preview   # preview the production build
```

## 🌐 Deploy to Netlify

1. Push this repo to GitHub/GitLab.
2. Connect the repo in [Netlify](https://app.netlify.com/).
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. A `public/_redirects` file is included for SPA routing.

Or deploy via CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📝 Customize Content

Edit **`src/data.ts`** — all resume content (name, title, skills, experience, projects, education, certifications) is in one file.

Translation files: `public/locales/en/translation.json` and `public/locales/nl/translation.json`.

## 📁 File Structure

```
├── public/
│   ├── _redirects          # Netlify SPA routing
│   ├── assets/me.jpg       # Profile photo
│   └── locales/            # i18n translation files
├── src/
│   ├── components/         # Navbar, Footer, Background, SkillOrbit, etc.
│   ├── sections/           # Hero, About, Skills, Experience, Projects, Contact
│   ├── hooks/              # useReducedMotion, useMousePosition
│   ├── data.ts             # All resume data
│   ├── i18n.ts             # i18next configuration
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── tailwind.config.js
├── vite.config.ts
└── package.json
```
