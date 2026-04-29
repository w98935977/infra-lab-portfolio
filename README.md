# Infra Lab Portfolio

Static technical portfolio for Infra / Linux / DevOps lab projects.

The site presents production-like lab work with architecture, troubleshooting, service lifecycle notes, validation commands, and operational lessons.

## Tech Stack

- Astro
- MDX content collections
- Tailwind CSS
- Mermaid diagrams
- Astro Shiki code highlighting

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project is configured for Vercel static deployment.

Recommended Vercel settings:

- Framework Preset: Astro
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`
- Production Branch: `main`

Vercel should create Preview Deployments for pull requests and Production Deployments for pushes to `main`.

GitHub Actions also runs `npm ci` and `npm run build` on pull requests and pushes to `main`, so broken builds are caught before merge.

## Content

Project case studies live in `src/content/projects`.

The first case study is `three-tier-linux-lab.mdx`, covering:

- nginx reverse proxy
- systemd-managed Gunicorn service
- Flask app
- PostgreSQL backend
- health and readiness checks
- database access control
- backup and restore validation
- troubleshooting timeline

## Development Notes

This is a static site. Do not add a backend or commit secrets. Use placeholder IPs, hostnames, and passwords in documentation.
