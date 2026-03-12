<template>
  <div class="page" v-if="subcategory && category">
    <div class="container">
      <Breadcrumb :crumbs="[
        { label: 'Catalogue', to: '/catalogue' },
        { label: category.name, to: `/${category.slug}` },
        { label: subcategory.name }
      ]" />

      <div class="subcat-header">
        <h1 class="section-title">Café {{ subcategory.name }}</h1>
        <p class="section-subtitle">{{ subcategory.description }}</p>
      </div>

      <div v-if="subProducts.length">
        <p style="margin-bottom:24px;color:var(--text-light)">{{ subProducts.length }} produit{{ subProducts.length > 1 ? 's' : '' }} trouvé{{ subProducts.length > 1 ? 's' : '' }}</p>
        <div class="products-grid">
          <ProductCard v-for="p in subProducts" :key="p.id" :product="p" />
        </div>
      </div>
      <p v-else style="margin:40px 0;color:var(--text-light)">Aucun produit disponible dans cette sous-catégorie pour le moment.</p>

      <div style="margin:40px 0">
        <NuxtLink :to="`/${category.slug}`" class="btn btn-secondary">
          ← Toutes les origines {{ category.name.toLowerCase() }}
        </NuxtLink>
      </div>

      <div class="related-subs">
        <h2>Autres origines à découvrir</h2>
        <div class="related-links">
          <NuxtLink
            v-for="sub in otherSubs"
            :key="sub.id"
            :to="`/${category.slug}/${sub.slug}`"
            class="related-link"
          >
            {{ sub.name }} →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <p style="margin:40px 0">Page introuvable. <NuxtLink to="/catalogue">Retour au catalogue</NuxtLink></p>
  </div>
</template>

<script setup>
import { getAllSubcategory, getSubcategoryProducts } from '@/data/products.js'

const route = useRoute()
const { setMeta, setJsonLD, breadcrumbSchema } = useSEO()

const result = computed(() => getAllSubcategory(route.params.subcategorySlug))
const category = computed(() => result.value?.category)
const subcategory = computed(() => result.value?.subcategory)
const subProducts = computed(() => getSubcategoryProducts(route.params.subcategorySlug))
const otherSubs = computed(() => category.value?.subcategories.filter(s => s.slug !== subcategory.value?.slug) || [])

setMeta({
  title: () => subcategory.value?.metaTitle,
  description: () => subcategory.value?.metaDescription,
  canonical: () => category.value && subcategory.value ? `/${category.value.slug}/${subcategory.value.slug}` : null
})

setJsonLD(() => {
  if (!subcategory.value || !category.value) return null
  return breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: category.value.name, url: `/${category.value.slug}` },
    { name: subcategory.value.name }
  ])
})
</script>

<style scoped>
.subcat-header { margin: 24px 0 40px; }
.related-subs { margin: 48px 0; padding: 24px; background: var(--cream-200); border-radius: var(--radius-lg); }
.related-subs h2 { font-family: var(--font-serif); font-size: 1.1rem; color: var(--brown-800); margin-bottom: 16px; }
.related-links { display: flex; flex-wrap: wrap; gap: 12px; }
.related-link { color: var(--brown-700); font-weight: 600; padding: 8px 16px; border: 1px solid var(--brown-300); border-radius: var(--radius); transition: all 0.2s; }
.related-link:hover { background: var(--brown-700); color: white; }
</style>
