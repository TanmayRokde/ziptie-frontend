# ziptie-frontend 🌐

> Developed by [TanmayRokde](https://github.com/TanmayRokde) & [pradnyaakumbhar](https://github.com/pradnyaakumbhar)

![React](https://img.shields.io/badge/react-18.x-61dafb)
![Vite](https://img.shields.io/badge/build-vite%205-purple)
![TypeScript](https://img.shields.io/badge/language-typescript-blue)
![Tailwind](https://img.shields.io/badge/ui-tailwind-38bdf8)
![Status](https://img.shields.io/badge/status-alpha-orange)

> **Pixel-perfect front door to ZipTie.**  
> Marketing pages, auth flows, profile dashboard, and a built-in short link resolver, all bundled via Vite.

---

## Table of Contents

1. [Highlights](#highlights)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Environment Variables](#environment-variables)
6. [Getting Started](#getting-started)
7. [Scripts](#scripts)
8. [Project Structure](#project-structure)
9. [Key Features](#key-features)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

---

## Highlights ✨

- Marketing site with hero, features, pricing, testimonials, stats, and CTA sections.
- Auth-ready login/signup forms with context-driven state.
- Profile page that consumes protected APIs and renders user metadata/links.
- `ShortUrlRedirector` component for public short link redirection.
- Tailwind-driven design system with Lucide icons.

## Architecture 🧭

```
┌────────────┐       ┌────────────────┐
│ React SPA  │ ───►  │ Vite dev server│
└────────────┘       └────────────────┘
        │                    │
        │  Axios calls       │
        ▼                    ▼
┌────────────────────────────────────┐
│ ziptie-mvp-backend (REST API)      │
└────────────────────────────────────┘
```

Routing is handled client-side via React Router DOM, while API calls go through Axios to the backend base URL defined at build time.

## Tech Stack 🧰

- **Core:** React 18, TypeScript, Vite
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS, PostCSS, custom CSS helpers
- **State/Auth:** React Context (`src/contexts/AuthContext.tsx`)
- **Icons:** `lucide-react`

## Prerequisites ✅

- Node.js 18+
- pnpm

> This project is pinned to pnpm; `pnpm-lock.yaml` is the single source of truth. Avoid generating `package-lock.json` to prevent conflicting dependency graphs.

## Environment Variables 🔧

Create `.env` (or `.env.local`) with:

```
VITE_API_BASE_URL=http://localhost:4000/api
```

Add Firebase values (see `src/firebase/config.ts`) when integrating with a real project.

## Getting Started 🚀

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:5173` (default Vite port). The dev server proxies API calls directly to the configured backend URL.

## Scripts 🛠️

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Type-check + production bundle in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint across the project |

## Project Structure 🗂️

```
src/
  components/
    auth/
    homePage/
  pages/
  contexts/AuthContext.tsx
  utils/ShortUrlRedirector.tsx
  App.tsx
  main.tsx
```

Routes are declared in `src/App.tsx`. Styling hooks live in `src/index.css`, `tailwind.config.js`, and `postcss.config.js`.

## Key Features ⭐

- **Animated hero + sections:** See `src/components/homePage/*`.
- **Auth flow:** `src/components/auth` plus `AuthContext` for session storage.
- **Profile dashboard:** `src/pages/ProfilePage.tsx` fetches data from `/users/me`.
- **Redirect logic:** `src/utils/ShortUrlRedirector.tsx` posts to `/shortlink/resolve`.

## Deployment 🚢

1. `pnpm build`
2. Deploy the `dist/` folder (Vercel configuration provided via `vercel.json`)
3. Set `VITE_API_BASE_URL` in your hosting provider’s environment variables

Remember to rebuild whenever env vars change—Vite inlines them at build time.

## Troubleshooting 🧯

- **Blank page after deploy:** Ensure `VITE_API_BASE_URL` points to an accessible HTTPS endpoint.
- **CORS failures:** Update backend CORS policy to include your frontend origin.
- **Firebase errors:** Supply valid config in `src/firebase/config.ts` or stub out Firebase usage during development.
