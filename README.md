# Rishav Kumar — Portfolio

Personal portfolio website showcasing my work as a **Backend Software Engineer** at Nokia via TCS.

**Live site:** [frontend-vert-two-82.vercel.app](https://frontend-vert-two-82.vercel.app)

---

## Features

- Responsive dark-theme UI with smooth animations
- Hero, About, Skills, Certifications, Experience, Projects, Contact sections
- Animated stats, typewriter roles, scroll progress
- GitHub projects integration
- Contact form (FormSubmit in production, Spring Boot locally)
- SEO meta tags & Open Graph

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Vite, Tailwind CSS, Framer Motion, React Hook Form |
| **Backend** | Spring Boot 3, Java 21, Spring Mail (local dev) |
| **Deployment** | Vercel (frontend), auto-deploys on `git push` |

---

## Project Structure

```
portfolio/
├── frontend/          # React + Vite + Tailwind
│   ├── public/        # Static assets (pic.png, favicon, resume PDF)
│   └── src/
│       └── components/
└── backend/           # Spring Boot contact API (optional, local dev)
```

---

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

### Backend (optional — for local contact form)

1. Add Gmail App Password in `backend/src/main/resources/application.properties`
2. Run:

```bash
cd backend
mvn spring-boot:run   # http://localhost:8080
```

> In production, the contact form uses [FormSubmit](https://formsubmit.co) — no backend required.

---

## Build & Deploy

### Manual deploy to Vercel

```bash
cd frontend
npm run build
npx vercel deploy --prod
```

### Auto-deploy (recommended)

Push to the `main` branch on GitHub — Vercel rebuilds and deploys automatically.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## Customization

| What | Where |
|------|-------|
| Profile photo | `frontend/public/pic.png` |
| Resume PDF | `frontend/public/RishavKumar_SDE.pdf` |
| Projects | `frontend/src/components/Projects.jsx` |
| Experience | `frontend/src/components/Experience.jsx` |
| Contact email | `frontend/src/components/Contact.jsx` |

---

## API Endpoints (Backend)

| Method | URL | Description |
|--------|-----|-------------|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/health` | Health check |

---

## Author

**Rishav Kumar** — Backend Software Engineer

- [GitHub](https://github.com/RishavKumar-hash)
- [LinkedIn](https://linkedin.com/in/rishavkr5302)
- [Email](mailto:rishavkr5302@gmail.com)

---

## License

MIT — feel free to use this as a template for your own portfolio.
