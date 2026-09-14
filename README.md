# Loveworld Sons of Ministry — Website

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui and Framer Motion.

## Getting started

Requires Node.js 20+.

```sh
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Production build:

```sh
npm run build
npm start
```

> **Note:** `next build` must run with `NODE_ENV=production` (Next sets this itself).
> If your shell exports `NODE_ENV=development` (e.g. in `~/.zshrc`), the build fails with
> `Cannot read properties of null (reading 'useState')`. Remove that export.

## Email (newsletter + contact form)

Both forms are handled by the site itself — no separate server is needed:

| Form | Endpoint | What it does |
| --- | --- | --- |
| Newsletter | `POST /api/newsletter/subscribe` | Sends a welcome email to the subscriber and notifies the ministry inbox |
| Contact | `POST /api/contact` | Sends the message to the ministry inbox (reply goes straight to the sender) |

Configure them with the environment variables in [`.env.example`](.env.example). On Netlify, add them under
**Site configuration → Environment variables**. With Gmail, `EMAIL_PASS` must be an
[App Password](https://myaccount.google.com/apppasswords).

Shared mail helpers (validation, HTML escaping, rate limiting) live in `lib/mailer.ts`.

## Project structure

- `app/` — routes (`app/(pages)/*`), API routes (`app/api/*`), root layout and metadata
- `components/pages/` — page and section components
- `components/layout/` — header and footer
- `components/ui/` — shared UI primitives
- `lib/` — utilities, site config, mail helpers
- `public/assets/` — local images (most gallery images are served from Cloudinary, see `public/images_list.ts`)
