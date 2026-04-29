# AGENTS.md

## Project

This repository is an Astro-based static portfolio for Infra / Linux / DevOps lab projects.

The goal is to present production-like lab work clearly, including architecture, troubleshooting, service lifecycle, validation, and operational lessons.

## Tech Stack

- Astro
- MDX
- TypeScript where appropriate
- Tailwind CSS
- Mermaid for diagrams
- Shiki code highlighting through Astro markdown configuration

## Content Style

Write in a professional, concise engineering tone.

Avoid hype.
Avoid generic blog-style filler.
Prefer concrete implementation details, commands, diagrams, and troubleshooting records.

## Site Structure

Expected sections:

- Home
- Projects
- Project detail pages
- Notes or Runbooks, optional later

## First Project

The first project is:

Production-like Three-Tier Linux Lab

It should document:

- nginx reverse proxy
- systemd-managed gunicorn service
- Flask app
- PostgreSQL backend
- health checks
- DB access control
- backup / restore validation
- troubleshooting timeline

## Engineering Rules

- Keep components small and readable.
- Prefer static content and MDX.
- Do not add unnecessary runtime dependencies.
- Do not introduce a backend.
- Do not hardcode secrets.
- Use placeholder values for IPs, passwords, and hostnames where appropriate.
- Ensure `npm run build` passes before considering work complete.

## Definition of Done

A task is complete only when:

- The site builds successfully.
- The relevant page renders correctly.
- README instructions are updated if setup changes.
- The implementation remains easy to extend for future lab projects.
