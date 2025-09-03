# YatriGuard Dashboard

## Project Overview

YatriGuard is a digital platform for Tourism & Police officials to manage and monitor tourist safety and related activities.

Key capabilities:
- Government-themed dashboard with sidebar layout
- GIS map view, alerts, tourist records, digital IDs, E-FIR, reports & analytics
- Quick actions: Create Alert, File E-FIR, Register Tourist, View Reports

## Development Setup

### Prerequisites
- Node.js & npm - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/mushroom-17/yatri-guard-dash.git
   cd yatri-guard-dash
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

Common scripts:
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview built app locally

## Project Structure

Key paths:
- `src/App.tsx` – routes
- `src/pages/` – top-level pages (Home, Alerts, E-FIR, Reports, etc.)
- `src/pages/dashboard/` – dashboard subpages (GIS map, statistics, settings, etc.)
- `src/components/layout/` – `DashboardSidebar`, `DashboardPageContainer`, header/navigation
- `src/components/ui/` – shadcn-ui primitives
- `src/index.css` – Tailwind layers and theme tokens

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Features

- Unified dashboard layout with persistent sidebar and responsive header
- Government-themed design tokens defined in `src/index.css` (HSL variables, gradients, shadows)
- Modules for Alerts, E‑FIR, Digital IDs, Tourist Records, GIS map, and Reports
- Quick Actions for common workflows (create alert, file E‑FIR, register tourist)

## Architecture

- Client-side routing with React Router (`src/App.tsx`)
- Data layer primed for server integration using React Query (see `App.tsx` `QueryClientProvider`)
- UI primitives from shadcn-ui with Tailwind CSS utilities
- Reusable layout components under `src/components/layout/` (e.g., `DashboardSidebar`, `DashboardPageContainer`)

## Deployment

You can deploy the built static site to any static host (e.g., Vercel, Netlify, GitHub Pages):

Vercel:
1. Push the repo to GitHub
2. Import the project in Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

Netlify:
1. New site from Git
2. Build command: `npm run build`
3. Publish directory: `dist`

Local production preview:
```sh
npm run build
npm run preview
```

## Notes

- Tailwind-specific directives in `src/index.css` (e.g., `@tailwind`, `@apply`) may show warnings in some editors. They are handled by the PostCSS/Tailwind pipeline during build and are expected.
