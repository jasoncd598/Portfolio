# Jason David — Portfolio

A premium freelance portfolio built with React 19, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** (via Vite plugin)
- **Motion** (Framer Motion)
- **Lucide React** icons
- **Vite 6**

## Local Development

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Output goes to `./dist`.

## Deploy

Pushes to `main` or `master` automatically deploy to GitHub Pages via the included workflow (`.github/workflows/deploy.yml`).

> **Note:** If your site is hosted at a subpath (e.g. `https://username.github.io/Portfolio/`), update the `base` value in `vite.config.ts` to match your repo name: `base: '/Portfolio/'`
