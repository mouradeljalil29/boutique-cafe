<template>
  <div class="page">
    <div class="container">
      <div class="blog-header">
        <h1>Le Blog du Café</h1>
        <p class="section-subtitle">Guides, origines, conseils de préparation – tout pour mieux comprendre et apprécier le café de spécialité.</p>
      </div>

      <div class="articles-grid">
        <article v-for="article in articles" :key="article.id" class="article-card card">
          <router-link :to="`/articles/${article.slug}`" class="card-image-link">
            <img :src="article.image" :alt="article.title" width="400" height="240" loading="lazy" />
          </router-link>
          <div class="card-body">
            <div class="card-meta">
              <span class="badge badge-brown">{{ article.category }}</span>
              <span class="read-time">{{ article.readTime }} min de lecture</span>
            </div>
            <h2>
              <router-link :to="`/articles/${article.slug}`">{{ article.title }}</router-link>
            </h2>
            <p class="excerpt">{{ article.excerpt }}</p>
            <router-link :to="`/articles/${article.slug}`" class="read-more">Lire l'article →</router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { articles } from '@/data/blog.js'
import { useSEO } from '@/composables/useSEO.js'

const { setMeta } = useSEO()

onMounted(() => {
  setMeta({
    title: 'Blog – Guides & Conseils Café de Spécialité | Grains & Origines',
    description: 'Guides, histoires d\'origines et conseils de préparation pour mieux comprendre et apprécier le café de spécialité en grain.',
    canonical: '/articles'
  })
})
</script>

<style scoped>
.blog-header { margin: 40px 0 48px; }
.blog-header h1 { font-family: var(--font-serif); font-size: 2.4rem; color: var(--brown-800); margin-bottom: 12px; }

.articles-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 64px; }

.article-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; }
.card-image-link { display: block; overflow: hidden; }
.article-card img { width: 100%; height: 220px; object-fit: cover; transition: transform 0.3s; }
.article-card:hover img { transform: scale(1.03); }

.card-body { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.card-meta { display: flex; align-items: center; gap: 12px; }
.read-time { font-size: 0.82rem; color: var(--text-light); }

.card-body h2 { font-family: var(--font-serif); font-size: 1.2rem; line-height: 1.4; }
.card-body h2 a { color: var(--brown-800); }
.card-body h2 a:hover { color: var(--brown-500); }

.excerpt { font-size: 0.9rem; color: var(--text-mid); line-height: 1.7; flex: 1; }
.read-more { font-size: 0.88rem; font-weight: 600; color: var(--brown-700); align-self: flex-start; }
.read-more:hover { color: var(--brown-500); }

@media (max-width: 768px) {
  .articles-grid { grid-template-columns: 1fr; }
  .blog-header h1 { font-size: 1.8rem; }
}
</style>
