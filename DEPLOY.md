# Deploy & URL Setup

## Your portfolio URL (for job applications)

Copy this **exactly** into company portals:

```
https://rishavkumar-portfolio.vercel.app
```

**Important:** Always include `https://` at the start. Portals reject bare domains like `rishav-kumar-portfolio.vercel.app`.

---

## One-time setup (after code changes)

```bash
cd frontend
npm install
npm run build
npx vercel deploy --prod
```

## Set the clean Vercel URL

1. Open [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **portfolio** project
3. Go to **Settings → Domains**
4. Add domain: `rishav-kumar-portfolio.vercel.app` (set as Production domain)
5. Find `frontend-vert-two-82.vercel.app` in the list, click the three dots (`...`), and select **Remove** / **Delete**.

---

## Custom domain (optional — e.g. rishavkumar.dev)

`.portfolio` is not a public domain extension. For a URL like `rishav.kumar.dev`:

1. Buy a domain (Namecheap, Google Domains, Cloudflare — ~$10/year)
2. In Vercel → **Settings → Domains** → Add your domain
3. Update `SITE_URL` in `frontend/src/config/site.js`

---

## Auto-deploy

Push to `main` on GitHub — Vercel rebuilds automatically if connected.
