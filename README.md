# Backlot

Backlot is a browser-based movie studio simulator built with Next.js and
configured for deployment on Vercel.

## Prerequisites

- Node.js 22
- pnpm 10

## Local development

```bash
pnpm install
pnpm dev
```

## Vercel deployment

Upload the contents of this folder to the top level of a GitHub repository, so
`package.json`, `app/`, and `public/` are visible at the repository root. Import
that repository in Vercel as a Next.js project.

- Root Directory: `./`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: leave blank

Vercel normally detects these settings automatically from `package.json`.

## Useful commands

- `pnpm dev`: start local development
- `pnpm build`: create the production build Vercel deploys
