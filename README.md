# ziptie-frontend

Vite + React + TypeScript single-page app for the ZipTie dashboard and marketing site. It renders the public landing page, auth flows, pricing, and logged-in profile, and talks to the MVP backend for dynamic data.

## Features

- Animated marketing homepage with hero, feature, pricing, testimonial, and CTA sections
- Firebase-ready auth context with login/signup forms
- Profile area that calls the backend for user data and short links
- Tailwind CSS styling with Lucide icons
- Client-side short link resolver component for public sharing

## Stack

- React 18 + React Router DOM 7
- Vite build tooling with TypeScript
- Tailwind CSS and PostCSS
- Axios for API calls

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## Environment

Create `.env` (or `.env.local`) at the repo root and configure:

```
VITE_API_BASE_URL=http://localhost:4000/api
```

This is used for auth/login, profile data, and the short link resolver. Add any Firebase configuration keys required by `src/firebase/config.ts` if you wire auth to a real project.

## Scripts

```bash
pnpm install
pnpm dev      # start Vite dev server with HMR
pnpm build    # type-check + production build to dist/
pnpm preview  # preview build locally
pnpm lint     # run ESLint
```

## Project Structure

```
src/
  components/        # marketing + auth UI
  pages/             # route-level screens
  contexts/AuthContext.tsx
  utils/ShortUrlRedirector.tsx
  main.tsx / App.tsx
```

Routes are wired in `src/App.tsx`. Styling lives in `src/index.css` and Tailwind config files.

## Deployment

The repo ships with `vercel.json`. Run `pnpm build` and deploy the `dist/` directory to Vercel or any static hosting provider. Remember to set `VITE_API_BASE_URL` in the hosting provider’s environment settings.
