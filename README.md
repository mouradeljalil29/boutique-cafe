# ☕ Grains & Origines – Projet SEO E-commerce

Projet scolaire de démonstration SEO e-commerce, réalisé en **Vue.js 3** avec **Vue Router 4**.

## 🎯 Objectif

Démontrer les bonnes pratiques SEO sur une boutique e-commerce fictive vendant des cafés de spécialité en grain.

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## 📁 Structure des pages

| URL | Description | SEO |
|-----|-------------|-----|
| `/` | Page d'accueil | H1, JSON-LD Organization, OG tags |
| `/catalogue` | Tous les produits | Filtres, maillage interne |
| `/catalogue/:category` | Page catégorie | H1, breadcrumb, JSON-LD BreadcrumbList |
| `/catalogue/:category/:subcategory` | Sous-catégorie | Maillage interne, canonical |
| `/produits/:slug` | Fiche produit | JSON-LD Product, rating, alt images |
| `/seo-demo` | Démonstration avant/après | Noindex (page pédagogique) |

## 🔍 Fonctionnalités SEO implémentées

### Technique
- ✅ URLs lisibles avec slugs (`/produits/arabica-ethiopie-yirgacheffe-bio-250g`)
- ✅ `<title>` et `<meta description>` dynamiques par page (composable `useSEO`)
- ✅ Balise `<link rel="canonical">` sur toutes les pages
- ✅ `<meta name="robots">` avec `noindex` sur les pages pédagogiques
- ✅ Open Graph (og:title, og:description, og:image)
- ✅ Twitter Card

### Sémantique HTML
- ✅ Hiérarchie H1 > H2 > H3 respectée (une seule H1 par page)
- ✅ Attributs `alt` descriptifs sur toutes les images
- ✅ Attributs `width` et `height` pour réduire le CLS
- ✅ `loading="lazy"` sur les images secondaires
- ✅ Navigation sémantique (`<nav aria-label="...">`)

### Données structurées (Schema.org / JSON-LD)
- ✅ `Product` (name, price, availability, image, sku)
- ✅ `AggregateRating` (étoiles, nombre d'avis)
- ✅ `Offer` (prix, disponibilité, vendeur)
- ✅ `BreadcrumbList` (fil d'ariane dans Google)
- ✅ `Organization` (page d'accueil)

### Contenu
- ✅ Descriptions produit 200+ mots avec keywords naturels
- ✅ Maillage interne (catégorie → sous-catégorie → produit → produits similaires)
- ✅ Breadcrumb sur toutes les pages de profondeur 2+
- ✅ Textes SEO sur les pages catalogue

## 🗂️ Architecture

```
src/
├── composables/
│   └── useSEO.js          # Gestion centralisée title, meta, JSON-LD
├── data/
│   └── products.js        # Données produits, catégories, sous-catégories
├── router/
│   └── index.js           # Routes SEO-friendly
├── components/
│   ├── ProductCard.vue    # Carte produit réutilisable
│   ├── Breadcrumb.vue     # Fil d'ariane
│   └── SeoPanel.vue       # Panneau d'analyse SEO pédagogique
└── views/
    ├── HomeView.vue        # Accueil
    ├── CatalogueView.vue   # Catalogue complet
    ├── CategoryView.vue    # Page catégorie
    ├── SubcategoryView.vue # Page sous-catégorie
    ├── ProductView.vue     # Fiche produit
    ├── SeoDemoView.vue     # Démonstration avant/après
    └── NotFoundView.vue    # 404
```

## 📊 Produits de démonstration

| Produit | Origine | Torréfaction | Certifications |
|---------|---------|-------------|----------------|
| Arabica Éthiopie Yirgacheffe Bio | Éthiopie | Blonde | Bio, Équitable |
| Colombie Huila Single Origin | Colombie | Médium | Équitable |
| Espresso Brésil Cerrado | Brésil | Foncée | – |
| Guatemala Antigua Volcan Bio | Guatemala | Médium | Bio |
| Éthiopie Sidama Natural | Éthiopie | Blonde | Bio |
| Colombie Nariño Décaféiné | Colombie | Médium | Bio, Équitable |

## 🛠️ Technologies

- **Vue.js 3** (Composition API, `<script setup>`)
- **Vue Router 4** (createWebHistory)
- **Vite** (bundler)
- CSS custom (sans framework, variables CSS)

---

Projet réalisé dans le cadre d'un cours d'e-commerce · Démonstration SEO
