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
        <router-link to="/blog" class="btn btn-secondary">← Retour au blog</router-link>
        <router-link to="/catalogue" class="btn btn-primary">Découvrir nos cafés</router-link>
      </div>

      <div v-if="related.length" class="related-articles">
        <h2>À lire aussi</h2>
        <div class="related-grid">
          <router-link
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
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <p style="margin:60px 0">Article introuvable. <router-link to="/blog">Retour au blog</router-link></p>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug, getRecentArticles } from '@/data/blog.js'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useSEO } from '@/composables/useSEO.js'

const route = useRoute()
const { setMeta } = useSEO()

const article = computed(() => getArticleBySlug(route.params.articleSlug))
const related = computed(() => getRecentArticles(article.value?.id, 3))

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function updateSEO() {
  if (!article.value) return
  setMeta({
    title: article.value.metaTitle,
    description: article.value.metaDescription,
    canonical: `/blog/${article.value.slug}`,
    ogImage: article.value.image
  })
}

onMounted(updateSEO)
watch(() => route.params.articleSlug, updateSEO)
</script>

<style scoped>
.article { max-width: 760px; margin: 0 auto; }

.article-header { margin: 32px 0 28px; }
.article-meta { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; font-size: 0.85rem; color: var(--text-light); }
.article-meta time { color: var(--text-light); }

.article-header h1 { font-family: var(--font-serif); font-size: 2rem; color: var(--brown-800); line-height: 1.3; margin-bottom: 16px; }
.article-excerpt { font-size: 1.05rem; color: var(--text-mid); line-height: 1.7; border-left: 3px solid var(--brown-300); padding-left: 16px; }

.article-hero-img { width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 40px; display: block; }

.article-content { max-width: 760px; margin: 0 auto; }
.article-content p { color: var(--text-mid); line-height: 1.85; margin-bottom: 20px; font-size: 1rem; }

.article-footer { display: flex; gap: 16px; margin: 40px auto; max-width: 760px; }

.related-articles { margin: 64px 0 32px; }
.related-articles h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 24px; }
.related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.related-card { overflow: hidden; padding: 0; text-decoration: none; }
.related-card img { width: 100%; height: 140px; object-fit: cover; }
.related-body { padding: 16px; display: flex; flex-direction: column; gap: 8px; }
.related-body h3 { font-family: var(--font-serif); font-size: 0.95rem; color: var(--brown-800); line-height: 1.4; }
.related-card:hover .related-body h3 { color: var(--brown-500); }

@media (max-width: 768px) {
  .article-header h1 { font-size: 1.5rem; }
  .article-hero-img { height: 240px; }
  .related-grid { grid-template-columns: 1fr; }
  .article-footer { flex-direction: column; }
}
</style>
