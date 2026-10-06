# Kyraelo — site vitrine

Site officiel de Kyraelo (studio digital : web, applications & SaaS, IA, automatisation, WhatsApp, CRM/ERP, Odoo).

Stack : Next.js 15 (App Router, export statique), React 19, TypeScript, Tailwind CSS 4, Motion, next-themes (thème clair / sombre).

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # génère le site statique dans out/
npm run lint
```

Le dossier `out/` peut être déployé sur n'importe quel hébergement statique (Vercel, Netlify, Cloudflare Pages, OVH…).

## À compléter avant mise en ligne

| Élément | Où |
| --- | --- |
| Mentions légales, politique de confidentialité, CGV | `app/mentions-legales`, `app/confidentialite`, `app/cgv` |
| Réalisations : remplacer les projets conceptuels par de vrais projets | `lib/content.ts` → `PROJECTS` |

Le lien Cal.com (`CAL_URL`, utilisé par tous les boutons « Réserver un appel ») et l'email de contact (`EMAIL`) se modifient dans `lib/site.ts`.

## Structure

- `app/` — pages (accueil + pages légales), styles globaux et tokens de thème (`globals.css`)
- `lib/site.ts` — liens, navigation, coordonnées (source unique)
- `lib/content.ts` — tous les textes des sections (expertises, flux, méthode, FAQ…)
- `components/sections/` — une section par fichier, dans l'ordre de la page
- `components/visuals/` — visuels maison (écosystème, flux, pipeline, maquettes)
- `components/ui/`, `components/layout/` — composants réutilisables, header, footer, thème

Les animations respectent le réglage système « réduire les animations ».
