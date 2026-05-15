# BRO444 Game App — SEO-focused Next.js single-page site

Single-page Next.js **16** (App Router) landing for **BRO444 Game App** — production host is **`https://www.bro444gameapp.com.pk`** (canonical). Configure **apex** `bro444gameapp.com.pk` → **301 → www** on Vercel so `NEXT_PUBLIC_SITE_URL` and metadata stay consistent.

## Contents

- **Static-first `/`** — crawlable HTML, minimal client islands (mobile sheet + FAQ accordion).
- **Metadata** — rich `layout` + page `metadata`, `metadataBase`, Open Graph / Twitter, `manifest.ts`, skip link, semantic landmarks.
- **Technical SEO routes** — `robots.ts`, `sitemap.ts` (single canonical URL only; no `#` fragments).
- **JSON-LD `@graph`** — Organization, WebSite, WebPage, MobileApplication, SoftwareApplication, BreadcrumbList, HowTo, FAQPage (aligned with [`lib/faq-data.ts`](lib/faq-data.ts)). No fabricated Review / AggregateRating blobs.
- **Performance** — `next/font` (Lexend + Plus Jakarta Sans + Geist Mono) with `display: "swap"`, `opengraph-image.tsx` (ImageResponse).

## Project layout

```
bro44gameapp/
├── app/
│   ├── layout.tsx           # global metadata, fonts, Analytics
│   ├── (site)/page.tsx      # home composition
│   ├── globals.css          # Tailwind v4 + theme tokens
│   ├── opengraph-image.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/              # Header, sections, JsonLd, MobileNav, UI
├── lib/site.ts              # SITE_URL, APK_URL, absoluteUrl
├── public/logo.png
├── .env.example
└── README.md
```

## Environment

Copy [`.env.example`](.env.example) to `.env.local` and set:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin — **`https://www.bro444gameapp.com.pk`** |
| `NEXT_PUBLIC_APK_URL` | Official download / register / referral absolute URL (defaults to lobby if omitted) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional public support email |

Add **Google Search Console** verification via `metadata` in [`app/layout.tsx`](app/layout.tsx) once you own the domain property (`verification.google`).

## Scripts

```bash
npm run dev    # next dev
npm run build  # production build
npm run start  # next start
npm run lint   # eslint
```

## Deploy checklist

1. Create a Vercel project from this repo; set env vars (see above).
2. Add domains `bro444gameapp.com.pk` **and** `www.bro444gameapp.com.pk`; redirect **apex → www**.
3. Ensure `NEXT_PUBLIC_SITE_URL` is exactly **`https://www.bro444gameapp.com.pk`** (scheme, host, no trailing slash).
4. Submit `https://www.bro444gameapp.com.pk/sitemap.xml` in Search Console; monitor FAQ / HowTo rich results.
5. Replace illustrative review cards if you later bind testimonials to structured data.

## Branding

Logo + aurora **cyan / violet** shell while reusing the same SEO information architecture.
