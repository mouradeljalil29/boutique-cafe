<template>
  <router-link
    :to="`/cafes/${product.slug}`"
    class="product-card card"
    :class="{ 'out-of-stock': !product.inStock }"
  >
    <div class="card-image">
      <img
        :src="product.image"
        :alt="`${product.name} – café en grain ${product.origin}`"
        loading="lazy"
        width="400" height="300"
      />
      <div class="card-badges">
        <span v-if="product.certifications.includes('bio')" class="badge badge-green">🌿 Bio</span>
        <span v-if="product.certifications.includes('equitable')" class="badge badge-green">⚖️ Équitable</span>
      </div>
    </div>
    <div class="card-body">
      <!-- H3 sémantique dans le contexte liste -->
      <h3 class="card-title">{{ product.name }}</h3>
      <p class="card-origin">📍 {{ product.origin }}</p>
      <div class="card-notes">
        <span v-for="note in product.tastingNotes.slice(0,3)" :key="note" class="note-tag">{{ note }}</span>
      </div>
      <div class="card-footer">
        <div class="card-rating">
          <span class="stars">★</span>
          <span>{{ product.rating }} <small>({{ product.reviewCount }})</small></span>
        </div>
        <span class="card-price">{{ product.price.toFixed(2) }}€</span>
      </div>
      <div class="card-meta">
        <span class="badge badge-brown">{{ torrefactionLabel }}</span>
        <span>{{ product.weight }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: { type: Object, required: true }
})

const torrefactionLabel = computed(() => ({
  blonde: '🟡 Blonde',
  medium: '🟠 Médium',
  foncee: '🟤 Foncée'
}[props.product.torrefaction] || props.product.torrefaction))
</script>

<style scoped>
.product-card { display: block; text-decoration: none; }
.card-image { position: relative; height: 220px; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.product-card:hover .card-image img { transform: scale(1.05); }
.card-badges { position: absolute; top: 10px; left: 10px; display: flex; flex-direction: column; gap: 4px; }
.card-body { padding: 16px; }
.card-title { font-family: var(--font-serif); font-size: 1rem; color: var(--brown-800); margin-bottom: 4px; line-height: 1.4; }
.card-origin { font-size: 0.8rem; color: var(--text-light); margin-bottom: 10px; }
.card-notes { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 12px; }
.note-tag { background: var(--cream-200); color: var(--text-mid); padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; }
.card-footer { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.card-rating { display: flex; align-items: center; gap: 4px; font-size: 0.88rem; }
.card-price { font-size: 1.2rem; font-weight: 700; color: var(--brown-700); }
.card-meta { display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-light); }
</style>
