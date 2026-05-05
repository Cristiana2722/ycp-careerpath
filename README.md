# YCP – Your Career Path

**YCP - Your Career Path** este o platformă românească de consiliere în carieră și dezvoltare personală, disponibilă 100% online în toată România. Site-ul este construit cu TanStack Start și deployat pe Netlify.

## Funcționalități principale

- **Landing page** cu efect parallax, secțiuni de servicii, testimoniale, formate conținut (video, audio, text)
- **Blog** cu articole despre carieră, admitere universitară și dezvoltare personală
- **Formulare Netlify** pentru contact și chestionar de satisfacție
- **Suport Dark/Light Mode** cu toggle în colțul din dreapta sus, persistent prin `localStorage`
- **Linkuri rețele sociale**: Instagram și TikTok
- **Responsive** – funcționează pe mobile, tablet și desktop

## Tehnologii utilizate

| Strat | Tehnologie |
|-------|------------|
| Framework | TanStack Start (React 19, SSR) |
| Router | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + Typography plugin |
| Icons | Lucide React |
| Deployment | Netlify (cu Forms pentru formulare) |
| Limbaj | TypeScript 5.7 (strict mode) |

## Rulare locală

```bash
npm install
npm run dev
```

Aplicația pornește pe `http://localhost:3000`.

> **Note:** Formularele Netlify nu funcționează în modul de dezvoltare local. Pentru testarea lor, este nevoie de un deploy pe Netlify.

## Structura principală

```
src/
├── components/
│   ├── Header.tsx        # Navigare cu logo, dark/light toggle
│   └── Footer.tsx        # Footer cu social links
├── data/
│   └── blog-posts.ts     # Date statice pentru articolele de blog
├── routes/
│   ├── __root.tsx        # Layout rădăcină (HTML shell + Header + Footer)
│   ├── index.tsx         # Pagina principală (toate secțiunile)
│   └── blog/
│       ├── index.tsx     # Listing blog
│       └── $slug.tsx     # Pagina individuală de articol
├── styles.css            # Tailwind + animații + variante dark mode
public/
└── __forms.html          # Înregistrare forme Netlify (build-time detection)
```
