<template>
  <div class="page">
    <div class="container">
      <Breadcrumb :crumbs="[{ label: 'Catalogue' }]" />

      <div class="catalogue-header">
        <!-- H1 optimisé avec mot-clé -->
        <h1 class="section-title">Catalogue – Cafés de Spécialité en Grain</h1>
        <p class="section-subtitle">{{ products.length }} références sélectionnées à la source</p>
      </div>

      <!-- Filtres -->
      <div class="filters">
        <button
          v-for="f in filters"
          :key="f.value"
          class="btn btn-sm"
          :class="activeFilter === f.value ? 'btn-primary' : 'btn-secondary'"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Categories navs -->
      <div class="cat-nav">
        <router-link
          v-for="cat in categories"
          :key="cat.id"
          :to="`/${cat.slug}`"
          class="cat-nav-link"
        >
          {{ cat.name }} ({{ getCountByCategory(cat.id) }})
        </router-link>
      </div>

      <!-- Grille produits -->
      <div class="products-grid">
        <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
      </div>

      <!-- Contenu SEO texte -->
      <div class="seo-text-block">
        <h2>Notre sélection de cafés en grain</h2>
        <p>Grains & Origines propose une sélection rigoureuse de <strong>cafés de spécialité en grain</strong> issus des meilleures régions productrices du monde. Chaque café est sélectionné selon le score Q-Arabica (minimum 80/100), garantissant une qualité supérieure au café de commodité.</p>
        <p>Notre catalogue est organisé par <router-link to="/origines">pays d'origine</router-link>, par <router-link to="/torrefaction">profil de torréfaction</router-link> et par <router-link to="/certifications">certification</router-link> (Bio, Commerce Équitable).</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { products, categories } from '@/data/products.js'
import ProductCard from '@/components/ProductCard.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useSEO } from '@/composables/useSEO.js'

const activeFilter = ref('all')
const { setMeta } = useSEO()

const pageTitle = 'Catalogue Cafés de Spécialité en Grain | Grains & Origines'
const pageDesc = 'Parcourez notre catalogue de cafés de spécialité en grain. Éthiopie, Colombie, Brésil, Guatemala. Torréfaction artisanale. Certifiés Bio et Équitable. Commande en ligne.'

const filters = [
  { label: 'Tous', value: 'all' },
  { label: '🌿 Bio', value: 'bio' },
  { label: '⚖️ Équitable', value: 'equitable' },
  { label: '🟡 Blonde', value: 'blonde' },
  { label: '🟠 Médium', value: 'medium' },
  { label: '🟤 Foncée', value: 'foncee' },
  { label: '✅ En stock', value: 'instock' },
]

const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return products
  if (activeFilter.value === 'instock') return products.filter(p => p.inStock)
  if (['bio', 'equitable'].includes(activeFilter.value))
    return products.filter(p => p.certifications.includes(activeFilter.value))
  return products.filter(p => p.torrefaction === activeFilter.value)
})

function getCountByCategory(catId) {
  return products.filter(p => p.categoryId === catId).length
}

onMounted(() => {
  setMeta({ title: pageTitle, description: pageDesc, canonical: '/catalogue' })
})
</script>

<style scoped>
.catalogue-header { margin: 24px 0 32px; }
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.cat-nav { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; padding: 16px; background: var(--cream-200); border-radius: var(--radius); }
.cat-nav-link { color: var(--brown-700); font-weight: 600; font-size: 0.9rem; padding: 6px 12px; border-radius: var(--radius); transition: all 0.2s; }
.cat-nav-link:hover { background: var(--brown-700); color: white; }
.seo-text-block { margin: 48px 0; padding: 32px; background: var(--cream-200); border-radius: var(--radius-lg); }
.seo-text-block h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 12px; }
.seo-text-block p { color: var(--text-mid); line-height: 1.7; margin-bottom: 8px; }
.seo-text-block a { color: var(--brown-700); text-decoration: underline; }
</style>
