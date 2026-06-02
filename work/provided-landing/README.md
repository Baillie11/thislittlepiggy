# This Little Piggy Landing Page

Modern, mobile-first Next.js landing page for the This Little Piggy early access waitlist.

## Run locally

```bash
npm install
npm run dev
```

## Waitlist integration

The signup form posts to `/api/waitlist`. Add your CRM, email platform, database, or webhook integration inside `src/app/api/waitlist/route.ts`.
