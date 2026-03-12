<template>
  <div class="page" v-if="article">
    <div class="container">
      <Breadcrumb :crumbs="[{ label: 'Blog', to: '/blog' }, { label: article.title }]" />

      <article class="article">
        <header class="article-header">
          <div class="article-meta">
            <span class="badge badge-brown">{{ article.category }}</span>
            <time :datetime="article.date">{{ formatDate(article.date) }}</time>
            <span>{{ article.readTime }} min de lecture</span>
          </div>
          <h1>{{ article.title }}</h1>
          <p class="article-excerpt">{{ article.excerpt }}</p>
        </header>

        <img
          :src="article.image"
          :alt="article.title"
          class="article-hero-img"
          width="900" height="480"
          loading="eager"
        />

        <div class="article-content">
          <p v-for="(para, i) in article.content" :key="i">{{ para }}</p>
        </div>
      </article>

      <div class="article-footer">
        <NuxtLink to="/blog" class="btn btn-secondary">← Retour au blog</NuxtLink>
        <NuxtLink to="/catalogue" class="btn btn-primary">Découvrir nos cafés</NuxtLink>
      </div>

      <!-- Produits liés à l'article : maillage interne blog → produits -->
      <div v-if="relatedProducts.length" class="related-products-section">
        <h2>Les cafés évoqués dans cet article</h2>
        <div class="related-products-grid">
          <NuxtLink
            v-for="p in relatedProducts"
            :key="p.id"
            :to="`/cafe/${p.slug}`"
            class="mini-product-card card"
          >
            <img :src="p.image" :alt="`${p.name} – café en grain ${p.origin}`" width="260" height="160" loading="lazy" />
            <div class="mini-product-body">
              <h3>{{ p.name }}</h3>
              <p>{{ p.origin }}</p>
              <span class="mini-price">{{ p.price.toFixed(2) }}€ / {{ p.weight }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-if="related.length" class="related-articles">
        <h2>À lire aussi</h2>
        <div class="related-grid">
          <NuxtLink
            v-for="rel in related"
            :key="rel.id"
            :to="`/blog/${rel.slug}`"
            class="related-card card"
          >
            <img :src="rel.image" :alt="rel.title" width="300" height="160" loading="lazy" />
            <div class="related-body">
              <span class="badge badge-brown">{{ rel.category }}</span>
              <h3>{{ rel.title }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <p style="margin:60px 0">Article introuvable. <NuxtLink to="/blog">Retour au blog</NuxtLink></p>
  </div>
</template>

<script setup>
import { getArticleBySlug, getRecentArticles } from '@/data/blog.js'
import { products } from '@/data/products.js'

const route = useRoute()
const { setMeta, setJsonLD, articleSchema, breadcrumbSchema } = useSEO()

const article = computed(() => getArticleBySlug(route.params.articleSlug))
const related = computed(() => getRecentArticles(article.value?.id, 3))
const relatedProducts = computed(() => {
  if (!article.value?.relatedProductSlugs) return []
  return article.value.relatedProductSlugs.map(slug => products.find(p => p.slug === slug)).filter(Boolean)
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

// SEO réactif avec getter functions
setMeta({
  title: () => article.value?.metaTitle,
  description: () => article.value?.metaDescription,
  canonical: () => article.value ? `/blog/${article.value.slug}` : null,
  ogImage: () => article.value?.image
})

setJsonLD(() => {
  if (!article.value) return null
  return [
    articleSchema(article.value),
    breadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: article.value.title }
    ])
  ]
})
</script>

<style scoped>
.article { max-width: 760px; margin: 0 auto; }
.article-header { margin: 32px 0 28px; }
.article-meta { display: flex; align-items: center; gap: 16px; font-size: 0.85rem; color: var(--text-light); margin-bottom: 16px; }
.article h1 { font-family: var(--font-serif); font-size: 2.2rem; color: var(--brown-800); line-height: 1.3; margin-bottom: 16px; }
.article-excerpt { font-size: 1.05rem; color: var(--text-mid); line-height: 1.7; font-style: italic; }
.article-hero-img { width: 100%; border-radius: var(--radius-lg); margin-bottom: 40px; height: 400px; object-fit: cover; }
.article-content p { color: var(--text-mid); line-height: 1.85; margin-bottom: 20px; font-size: 1rem; }
.article-footer { display: flex; gap: 16px; margin: 40px 0; flex-wrap: wrap; }

.related-products-section { margin: 48px 0; }
.related-products-section h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 24px; }
.related-products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
.mini-product-card { display: block; text-decoration: none; }
.mini-product-card img { width: 100%; height: 160px; object-fit: cover; }
.mini-product-body { padding: 12px 16px; }
.mini-product-body h3 { font-family: var(--font-serif); font-size: 0.95rem; color: var(--brown-800); margin-bottom: 4px; }
.mini-product-body p { font-size: 0.82rem; color: var(--text-light); margin-bottom: 6px; }
.mini-price { font-weight: 700; color: var(--brown-700); font-size: 0.9rem; }

.related-articles { margin: 48px 0; }
.related-articles h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 24px; }
.related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
.related-card { display: block; text-decoration: none; }
.related-card img { width: 100%; height: 160px; object-fit: cover; }
.related-body { padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.related-body h3 { font-family: var(--font-serif); font-size: 0.95rem; color: var(--brown-800); line-height: 1.4; }
</style>
