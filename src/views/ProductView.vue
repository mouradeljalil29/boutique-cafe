<template>
  <div class="page" v-if="product">
    <div class="container">
      <Breadcrumb :crumbs="breadcrumbs" />

      <div class="product-layout">
        <!-- Image -->
        <div class="product-image-col">
          <div class="product-image-wrap">
            <img
              :src="product.image"
              :alt="`${product.name} – café en grain ${product.origin} – ${product.weight}`"
              width="600" height="500"
              loading="eager"
            />
            <div class="product-badges-overlay">
              <span v-if="!product.inStock" class="badge-stock-out">Rupture de stock</span>
              <span v-if="product.certifications.includes('bio')" class="badge badge-green">🌿 Bio certifié AB</span>
              <span v-if="product.certifications.includes('equitable')" class="badge badge-green">⚖️ Commerce Équitable</span>
            </div>
          </div>
          <!-- Galerie (simulée) -->
          <div class="product-thumbs">
            <img :src="product.image" :alt="`${product.name} grain entier`" width="80" height="80" />
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=70" alt="tasse de café préparée" width="80" height="80" />
            <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&q=70" alt="grains de café dans les mains" width="80" height="80" />
          </div>
        </div>

        <!-- Infos produit -->
        <div class="product-info-col">
          <!-- H1 : contient le nom complet du produit -->
          <h1 class="product-name">{{ product.name }}</h1>

          <!-- Rating Schema.org -->
          <div class="product-rating" itemscope itemtype="https://schema.org/AggregateRating">
            <span class="stars" aria-label="Note">★★★★★</span>
            <span itemprop="ratingValue">{{ product.rating }}</span>/5
            <span style="color:var(--text-light)">(<span itemprop="reviewCount">{{ product.reviewCount }}</span> avis)</span>
          </div>

          <!-- Prix -->
          <div class="product-price-block" itemscope itemtype="https://schema.org/Offer">
            <span class="product-price" itemprop="price" :content="product.price">
              {{ product.price.toFixed(2) }}€
            </span>
            <span class="price-unit">/ {{ product.weight }}</span>
            <span
              :class="product.inStock ? 'stock-ok' : 'stock-out'"
              itemprop="availability"
              :content="product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'"
            >
              {{ product.inStock ? '✅ En stock' : '❌ Rupture de stock' }}
            </span>
          </div>

          <!-- Notes de dégustation -->
          <div class="tasting-section">
            <h2 class="info-label">Notes de dégustation</h2>
            <div class="tasting-notes">
              <span v-for="note in product.tastingNotes" :key="note" class="note-pill">{{ note }}</span>
            </div>
          </div>

          <!-- Fiche technique -->
          <div class="product-specs">
            <h2 class="info-label">Fiche technique</h2>
            <table class="specs-table">
              <tbody>
                <tr><th>Origine</th><td>{{ product.origin }}</td></tr>
                <tr><th>Altitude</th><td>{{ product.altitude }}</td></tr>
                <tr><th>Procédé</th><td>{{ product.process }}</td></tr>
                <tr><th>Variété</th><td>{{ product.variety }}</td></tr>
                <tr><th>Torréfaction</th><td>{{ torrefactionLabel }}</td></tr>
                <tr><th>Poids</th><td>{{ product.weight }}</td></tr>
              </tbody>
            </table>
          </div>

          <!-- CTA -->
          <div class="product-cta">
            <button class="btn btn-primary" :disabled="!product.inStock" style="font-size:1.05rem;padding:14px 32px">
              {{ product.inStock ? '🛒 Ajouter au panier' : '🔔 Être alerté du retour' }}
            </button>
            <p style="font-size:0.82rem;color:var(--text-light);margin-top:8px">
              🚚 Livraison offerte dès 35€ · Expédition sous 24h
            </p>
          </div>
        </div>
      </div>

      <!-- Description longue – important pour le SEO -->
      <div class="product-description">
        <h2>Description</h2>
        <!-- Le contenu est divisé en paragraphes naturels avec keywords -->
        <div v-for="(para, i) in descriptionParagraphs" :key="i" class="desc-para">{{ para }}</div>

        <div class="brewing-box">
          <h3>💧 Conseils de préparation</h3>
          <p>{{ product.brewing }}</p>
        </div>
      </div>

      <!-- Produits similaires (maillage interne) -->
      <div class="related-products">
        <h2 class="section-title" style="font-size:1.4rem">Vous pourriez aussi aimer</h2>
        <div class="products-grid">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <p style="margin:60px 0">Produit introuvable. <router-link to="/cafes">Retour aux cafés</router-link></p>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products, getProductBySlug, getAllSubcategory } from '@/data/products.js'
import ProductCard from '@/components/ProductCard.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useSEO } from '@/composables/useSEO.js'

const route = useRoute()
const { setMeta, setJsonLD, productSchema, breadcrumbSchema } = useSEO()

const product = computed(() => getProductBySlug(route.params.productSlug))

const descriptionParagraphs = computed(() =>
  product.value?.description?.split('\n\n').filter(Boolean) || []
)

const wordCount = computed(() =>
  product.value?.description?.split(' ').length || 0
)

const torrefactionLabel = computed(() => ({
  blonde: 'Blonde (Light Roast)',
  medium: 'Médium',
  foncee: 'Foncée (Dark Roast)'
}[product.value?.torrefaction] || ''))

const relatedProducts = computed(() =>
  products.filter(p => p.id !== product.value?.id && p.subcategoryId === product.value?.subcategoryId).slice(0, 3)
    .concat(products.filter(p => p.id !== product.value?.id && p.categoryId === product.value?.categoryId).slice(0, 3))
    .filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i)
    .slice(0, 3)
)

const breadcrumbs = computed(() => {
  if (!product.value) return []
  const sub = getAllSubcategory(product.value.subcategoryId)
  return [
    { label: 'Cafés', to: '/cafes' },
    sub ? { label: sub.category.name, to: `/${sub.category.slug}` } : null,
    sub ? { label: sub.subcategory.name, to: `/${sub.category.slug}/${sub.subcategory.slug}` } : null,
    { label: product.value.name }
  ].filter(Boolean)
})

function updateSEO() {
  if (!product.value) return
  setMeta({
    title: product.value.metaTitle,
    description: product.value.metaDescription,
    canonical: `/cafe/${product.value.slug}`,
    ogImage: product.value.image
  })
  const sub = getAllSubcategory(product.value.subcategoryId)
  const bc = breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Cafés', url: '/cafes' },
    sub ? { name: sub.category.name, url: `/${sub.category.slug}` } : null,
    sub ? { name: sub.subcategory.name, url: `/${sub.category.slug}/${sub.subcategory.slug}` } : null,
    { name: product.value.name }
  ].filter(Boolean))
  // Combine product + breadcrumb schemas
  setJsonLD([productSchema(product.value), bc])
}

onMounted(updateSEO)
watch(() => route.params.productSlug, updateSEO)
</script>

<style scoped>
.product-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin: 24px 0 48px; }
.product-image-wrap { position: relative; border-radius: var(--radius-lg); overflow: hidden; }
.product-image-wrap img { width: 100%; height: 420px; object-fit: cover; }
.product-badges-overlay { position: absolute; top: 16px; left: 16px; display: flex; flex-direction: column; gap: 6px; }
.badge-stock-out { background: var(--red-500); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; }
.product-thumbs { display: flex; gap: 8px; margin-top: 12px; }
.product-thumbs img { width: 80px; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid var(--border); }

.product-name { font-family: var(--font-serif); font-size: 1.8rem; color: var(--brown-800); margin-bottom: 12px; line-height: 1.3; }
.product-rating { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; margin-bottom: 20px; }
.product-price-block { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; padding: 16px; background: var(--cream-200); border-radius: var(--radius); }
.product-price { font-size: 2rem; font-weight: 800; color: var(--brown-700); }
.price-unit { color: var(--text-light); }
.stock-ok { color: var(--green-700); font-weight: 600; font-size: 0.9rem; }
.stock-out { color: var(--red-500); font-weight: 600; font-size: 0.9rem; }

.info-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 10px; font-weight: 700; }
.tasting-section { margin-bottom: 24px; }
.tasting-notes { display: flex; flex-wrap: wrap; gap: 8px; }
.note-pill { background: var(--brown-700); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; }

.product-specs { margin-bottom: 24px; }
.specs-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.specs-table th { text-align: left; color: var(--text-light); padding: 6px 0; width: 40%; font-weight: 500; }
.specs-table td { color: var(--text-dark); padding: 6px 0; border-bottom: 1px solid var(--border); }
.product-cta { margin-top: 8px; }

.product-description { max-width: 800px; margin: 0 auto 40px; }
.product-description h2 { font-family: var(--font-serif); font-size: 1.6rem; color: var(--brown-800); margin-bottom: 20px; }
.desc-para { color: var(--text-mid); line-height: 1.8; margin-bottom: 16px; }
.brewing-box { background: var(--cream-200); border-left: 4px solid var(--brown-500); padding: 20px 24px; border-radius: 0 var(--radius) var(--radius) 0; margin-top: 24px; }
.brewing-box h3 { color: var(--brown-700); margin-bottom: 8px; font-size: 1rem; }
.brewing-box p { color: var(--text-mid); font-size: 0.9rem; }

.related-products { margin: 48px 0; }

@media (max-width: 768px) {
  .product-layout { grid-template-columns: 1fr; }
  .product-image-wrap img { height: 280px; }
}
</style>
