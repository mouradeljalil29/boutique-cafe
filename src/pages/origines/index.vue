<template>
  <div class="page" v-if="category">
    <div class="container">
      <Breadcrumb :crumbs="[
        { label: 'Catalogue', to: '/catalogue' },
        { label: category.name }
      ]" />

      <div class="cat-header">
        <h1 class="section-title">{{ category.name }}</h1>
        <p class="section-subtitle">{{ category.description }}</p>
      </div>

      <!-- Sous-catégories -->
      <div class="subcats-grid">
        <NuxtLink
          v-for="sub in category.subcategories"
          :key="sub.id"
          :to="`/origines/${sub.slug}`"
          class="subcat-card card"
        >
          <h2>{{ sub.name }}</h2>
          <p>{{ sub.description }}</p>
          <div class="subcat-count">
            {{ getCount(sub.id) }} café{{ getCount(sub.id) > 1 ? 's' : '' }}
          </div>
          <span class="subcat-arrow">→ Voir la sélection</span>
        </NuxtLink>
      </div>

      <!-- Tous les produits de la catégorie -->
      <h2 class="section-title" style="margin:48px 0 8px">Tous les cafés {{ category.name.toLowerCase() }}</h2>
      <p class="section-subtitle">{{ categoryProducts.length }} produit{{ categoryProducts.length > 1 ? 's' : '' }}</p>
      <div class="products-grid">
        <ProductCard v-for="p in categoryProducts" :key="p.id" :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCategoryBySlug, getProductsByCategory, getProductsBySubcategory } from '@/data/products.js'

const { setMeta, setJsonLD, breadcrumbSchema } = useSEO()

// Hardcoded 'origines' car cette page est dédiée à la catégorie origines
const category = getCategoryBySlug('origines')
const categoryProducts = category ? getProductsByCategory(category.id) : []

function getCount(subId) {
  return getProductsBySubcategory(subId).length
}

if (category) {
  setMeta({
    title: category.metaTitle,
    description: category.metaDescription,
    canonical: '/origines'
  })
  setJsonLD(breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: category.name }
  ]))
}
</script>

<style scoped>
.cat-header { margin: 24px 0 40px; }
.subcats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-bottom: 48px; }
.subcat-card { padding: 24px; text-decoration: none; }
.subcat-card h2 { font-family: var(--font-serif); font-size: 1.2rem; color: var(--brown-800); margin-bottom: 8px; }
.subcat-card p { font-size: 0.88rem; color: var(--text-mid); margin-bottom: 16px; }
.subcat-count { font-weight: 600; color: var(--brown-500); font-size: 0.9rem; margin-bottom: 12px; }
.subcat-arrow { color: var(--brown-700); font-size: 0.88rem; font-weight: 600; }
</style>
