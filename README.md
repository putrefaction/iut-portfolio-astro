# Portfolio - base de départ (Astro + Tailwind)

## Installation

```sh
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:4321

## Structure

```text
src/
├── database/
│   └── projects.json        # Les données de vos projets
├── layouts/
│   └── Layout.astro         # Structure commune (head, nav, footer)
├── pages/
│   ├── index.astro          # Page d'accueil            → /
│   └── projets/
│       ├── index.astro      # Liste des projets         → /projets
│       └── [slug].astro     # Page d'un projet          → /projets/projet-1
└── styles/
    └── global.css           # Import de Tailwind
```

## Ajouter un projet

Ajoutez un objet dans `src/database/projects.json`. Le champ `slug` sert à construire
l'URL de la page du projet : il doit être unique, en minuscules, sans espaces ni accents.

```json
{
    "slug": "mon-nouveau-projet",
    "name": "Mon nouveau projet",
    "description": "Description du projet.",
    "image": "https://placehold.co/600x400",
    "technologies": ["Astro", "Tailwind"]
}
```

La page `/projets/mon-nouveau-projet` est générée automatiquement.

## Commandes

| Commande          | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Lance le serveur de développement         |
| `npm run build`   | Génère le site final dans `./dist/`       |
| `npm run preview` | Prévisualise le site généré               |

## Documentation

- Astro : https://docs.astro.build
- Tailwind CSS : https://tailwindcss.com/docs
