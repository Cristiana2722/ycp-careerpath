# AGENTS.md – YCP Your Career Path

Acest document descrie arhitectura proiectului pentru developeri și agenți AI care lucrează în această bază de cod.

## Prezentare generală

Site de consiliere în carieră și dezvoltare personală pentru YCP – Your Career Path. Activitate exclusiv online, disponibil în toată România. Construit cu TanStack Start, deployat pe Netlify.

## Stack tehnic

| Strat | Tehnologie |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + `@tailwindcss/typography` |
| Icons | Lucide React |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Structura directoarelor

```
public/
└── __forms.html          # Fișier static pentru înregistrarea formelor Netlify la build time
src/
├── components/
│   ├── Header.tsx        # Navigare fixă cu logo (BookOpen), dark/light toggle, meniu mobil
│   └── Footer.tsx        # Footer cu branding, navigare, social links, info contact
├── data/
│   └── blog-posts.ts     # Array static de articole blog (tip BlogPost cu slug, titlu, conținut HTML)
├── routes/
│   ├── __root.tsx        # Root route: HTML shell (lang="ro"), script anti-flash pentru temă, Header+Footer layout
│   ├── index.tsx         # Landing page completă: Hero parallax, Statistici, Despre, Servicii, Formate, Testimoniale, Blog preview, Prețuri, Social media, Contact+Chestionar
│   └── blog/
│       ├── index.tsx     # Listing toate articolele blog
│       └── $slug.tsx     # Pagina articol individual (loader cu notFound pentru sluguri invalide)
└── styles.css            # Tailwind 4 import, @plugin typography, @variant dark, animații custom
```

## Decizii arhitecturale

### Dark mode
- Clasa `dark` se adaugă pe `<html>` element
- Preferința se salvează în `localStorage` cu cheia `ycp-theme`
- Script inline în `<head>` (înainte de hydration) previne flash-ul de temă greșită
- `@variant dark (&:where(.dark, .dark *))` în CSS activează variantele `dark:` ale Tailwind

### Formulare Netlify
- `public/__forms.html` conține formele goale cu `netlify` și `netlify-honeypot` atribute
- Formele React submitează via `fetch` cu `Content-Type: application/x-www-form-urlencoded` la `/__forms.html`
- Câmpul hidden `form-name` identifică forma la Netlify
- Există două forme: `contact` (contact principal) și `chestionar` (satisfacție clienți)

### Blog cu date statice
- Articolele sunt date TypeScript în `src/data/blog-posts.ts`, nu CMS
- Conținutul articolelor este HTML string redat cu `dangerouslySetInnerHTML`
- Clasa `prose` din `@tailwindcss/typography` stilizează HTML-ul articolelor

### Routing
- File-based routing TanStack Router
- `__root.tsx` folosește `shellComponent` pentru HTML shell și `component` pentru layout (Header+Footer)
- Ruta `/blog/$slug` aruncă `notFound()` dacă slug-ul nu există

## Convenții de cod

- Componentele: PascalCase
- Utilitare/hook-uri: camelCase
- Importuri cu aliasul `@/` (mapează la `src/`)

## Limbă și localizare

- Întreg conținutul site-ului este în **limba română**
- `<html lang="ro">` setat în root
- Placeholdere formular: Ion Popescu / ionpopescu@exemplu.com
