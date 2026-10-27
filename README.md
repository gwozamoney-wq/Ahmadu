# Building and Great Design

A premium, fully responsive website for **Building and Great Design** — a building,
construction and architectural design business based at GRA Road, Opposite Central
Mosque, Adamawa State, Nigeria.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS**.
No database or third-party account is required to run it, and nothing is faked: the
contact form posts to a real API route, and client feedback section only shows real,
permitted testimonials.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run images               # regenerate optimised WebP images
```

Node 20+ recommended (developed on Node 22).

---

## What is included

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Hero, about preview, services, featured projects, why choose us, process, pricing, feedback invitation, contact form |
| About | `/about` | Story, principles, approach, process summary |
| Services | `/services` | Six detailed services with anchor links, inclusions and CTAs |
| Projects | `/projects` | Filterable gallery + accessible project modal |
| Project detail | `/projects/[slug]` | Full concept page with highlights, snapshot and related projects |
| Process | `/process` | Four-step process, preparation checklist, FAQs |
| Pricing | `/pricing` | Three packages, cost drivers, pricing FAQs |
| Contact | `/contact` | Full contact details, enquiry form, map card, FAQs |
| API | `POST /api/enquiries` | Server-side validation, spam checks, storage and optional webhook |

Global: sticky navigation with mobile drawer, floating WhatsApp/phone dock on every
page, dark navy + gold footer, sitemap, robots rules, structured data, security headers.

### Design system

- **Colours** — deep navy `#102B46`, gold `#D4AF65`, white, soft grey `#F4F6F8`,
  charcoal `#171A1F` (full 50–950 ramps in `tailwind.config.ts`).
- **Type** — Montserrat (display) and Inter (body), self-hosted through Fontsource so
  there is no Google Fonts request at runtime.
- **Motion** — subtle scroll reveals via a single IntersectionObserver, hover lifts and
  image zooms, all disabled automatically under `prefers-reduced-motion`.

---

## Editing business information

Everything the owner is likely to change is in **`src/lib/site.ts`**:

- phone numbers (display, `tel:` and WhatsApp formats)
- address and the Google Maps search link
- the pre-filled WhatsApp message
- opening hours (currently Mon–Fri 8:00–17:00, Sat 9:00–15:00, Sun closed — **update to
  match the real business hours**)
- social profiles (the footer hides that block while the list is empty)

Services, projects, packages, process steps, benefits and testimonials live in
**`src/lib/content.ts`**.

### Verified location pin

The map is intentionally honest. Until the exact office coordinates are confirmed, the
contact page shows the written address, a "search on Google Maps" link and a note that
the pin is approximate.

To show the real map, set `NEXT_PUBLIC_MAP_EMBED_URL` (see `.env.example`) to a Google
Maps *Embed a map* URL for the verified pin. The card then renders the live iframe and
labels it as a verified location.

### Business hours

Shown on the contact page and in the footer, and included in the `GeneralContractor`
structured data. They are presented as information, not a live "open now" indicator, so
they stay accurate.

---

## Contact form and enquiries

`POST /api/enquiries`

1. **Shared validation** (`src/lib/validation.ts`) runs in the browser and again on the
   server — name, phone (Nigerian formats accepted), optional email, service, project
   location and description.
2. **Spam protection** — hidden honeypot field, minimum time-to-submit, and an in-memory
   rate limit (5 submissions per 10 minutes per hashed IP).
3. **Delivery** — every valid enquiry is appended to `.data/enquiries.jsonl` on the
   server as a durable fallback. If `ENQUIRY_WEBHOOK_URL` is set, it is also forwarded to
   that endpoint (Formspree, Make, Zapier, n8n, Google Apps Script, or your own API).
4. **Honest states** — the form shows loading, a success confirmation only after the API
   confirms receipt, or a clear error that offers a WhatsApp fallback with the typed
   details.

### What must be connected before enquiries reach an inbox

Writing to `.data/` only stores enquiries **on the server**. To have them delivered to an
email address or spreadsheet, connect a webhook:

```bash
# .env.local
ENQUIRY_WEBHOOK_URL=https://formspree.io/f/xxxxxxxx
ENQUIRY_WEBHOOK_TOKEN=optional-bearer-token
ENQUIRY_ADMIN_TOKEN=optional-read-token
ENQUIRY_SALT=any-random-string
```

Notes:

- On serverless platforms the filesystem is ephemeral — the webhook is the real delivery
  channel there. On a VPS or similar, `.data/enquiries.jsonl` persists.
- `GET /api/enquiries` with `Authorization: Bearer $ENQUIRY_ADMIN_TOKEN` returns the stored
  enquiries as JSON for follow-up.
- Without either a persistent disk or a webhook, the API returns an error and the visitor
  is told to call or WhatsApp — no fake success is ever shown.

---

## WhatsApp

All WhatsApp links use the international Nigerian format (`234…`) with the pre-filled
message required by the brief:

> Hello Building and Great Design, I am interested in your building and architectural
> design services. I would like to discuss my project and get an affordable quotation.

The floating dock offers WhatsApp on **0905 502 1959** (primary) and **0708 456 3858**
(second line), plus click-to-call for both numbers.

---

## Images and claims

- Photography was produced for this project as **illustrative design imagery**. Every
  gallery card, project modal and project page says so, and the footer repeats it.
- Replace `assets/source-images/*.jpg` with real client photography (with permission),
  run `npm run images`, and update the `illustrative` flag plus captions in
  `src/lib/content.ts`.
- No awards, years of experience, certifications, client counts or invented prices appear
  anywhere on the site. Pricing is quotation-based by design.

---

## Accessibility and performance

- Semantic landmarks, skip link, visible focus rings, labelled form fields with
  `aria-invalid` / `aria-describedby`, live regions for form status and filter counts.
- Mobile drawer and project modal trap attention, close on `Escape` / backdrop click and
  return focus to the trigger.
- Colour pairs chosen for readable contrast; body copy is 13–16px with relaxed leading.
- `next/image` with WebP, responsive `sizes`, lazy loading below the fold and a priority
  hero; self-hosted subset fonts; no client-side UI frameworks in the bundle.
- Security headers set in `next.config.mjs` (`nosniff`, referrer policy, frame options,
  permissions policy).

---

## Project structure

```
assets/source-images/     original photography (not served directly)
public/images/opt/        generated WebP files used by the site
scripts/                  image optimisation
src/app/                  routes, layout, metadata, API, sitemap, robots
src/components/           shared UI (header, footer, cards, form, dock, icons)
src/components/sections/  page-level sections
src/lib/site.ts           business configuration
src/lib/content.ts        services, projects, packages, process, benefits
src/lib/validation.ts     shared enquiry validation
```

---

© 2026 Building and Great Design. All rights reserved.
