// nuxt.config.ts
// Configuration Nuxt 3 – remplace vite.config.js + index.html
// Avantage SEO : SSR (Server-Side Rendering) → HTML complet envoyé aux crawlers

export default defineNuxtConfig({
  // Dossier source
  srcDir: 'src/',

  // CSS global (remplace l'import dans main.js)
  css: ['~/assets/style.css'],

  // Métadonnées HTML par défaut (appliquées à toutes les pages)
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Grains & Origines – Café de Spécialité en Grain',
      meta: [
        { name: 'theme-color', content: '#3d1a00' },
        { name: 'description', content: 'Découvrez notre sélection de cafés de spécialité en grain. Origines uniques, torréfaction artisanale, livraison France entière.' },
        // Open Graph (valeurs par défaut, remplacées dynamiquement par useSeoMeta)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Grains & Origines' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        // Préconnexion au CDN d'images pour réduire la latence DNS
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
      ]
    }
  },

  // Compatibilité Nuxt 3 (supprimer l'avertissement)
  compatibilityDate: '2024-11-01',
})
