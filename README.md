# Lena Ayza Moreno · Web estática (Next.js 14 + Tailwind)

Web 100 % estática (`output: "export"`), sin backend, sin cookies ni analítica. Textos en `content/site.ts`.

## Desarrollo local
```bash
npm install
cp .env.example .env.local   # rellena las variables
npm run dev                  # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## 1. Subir a GitHub
```bash
git remote add origin https://github.com/martinPino/germany-project.git   # si no existe
git push -u origin main
```
Si el repo ya tiene commits (p. ej. un README), usa `git pull origin main --rebase --allow-unrelated-histories` antes del push.

## 2. Importar en Vercel
1. vercel.com → **Add New… → Project** → elige el repositorio.
2. Framework: **Next.js** (autodetectado). No cambies nada más.

## 3. Variables de entorno (Settings → Environment Variables)
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TIKTOK_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_WHATSAPP_URL`, `NEXT_PUBLIC_PAYPAL_URL`, `NEXT_PUBLIC_FORM_ENDPOINT` (opcional). Tras cambiarlas, haz **Redeploy** (se incrustan en el build).

## 4. Sustituir el PDF y las imágenes
Reemplaza en `/public`: `guia-practica-erzieherin.pdf`, `lena.jpg` (cuadrada, ≥800 px), `portada-guia.jpg` (3:4), `og.jpg` (1200×630). Mantén los nombres.

## 5. Dominio propio
Vercel → Project → **Settings → Domains** → añade tu dominio y configura los DNS que indique. Actualiza `NEXT_PUBLIC_SITE_URL` y redespliega.
