<template>
  <div class="page home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <!-- H1 : une seule par page, contient le mot-clé principal -->
        <h1>Cafés de Spécialité en Grain<br><em>Origines Uniques, Torréfaction Artisanale</em></h1>
        <p class="hero-desc">
          Sélectionnés à la source chez des producteurs engagés, nos cafés Arabica en grain
          vous transportent d'Éthiopie au Guatemala. Livraison France entière.
        </p>
        <div class="hero-cta">
          <router-link to="/cafes" class="btn btn-primary">Découvrir nos cafés</router-link>
          <router-link to="/origines/ethiopie" class="btn btn-secondary">Nos cafés Éthiopie</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
          alt="Grains de café arabica de spécialité torréfiés artisanalement"
          width="600" height="400"
          loading="eager"
        />
      </div>
    </section>

    <!-- Catégories -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Explorer par catégorie</h2>
        <p class="section-subtitle">Trouvez votre café selon vos préférences</p>
        <div class="categories-grid">
          <router-link
            v-for="cat in categories"
            :key="cat.id"
            :to="`/${cat.slug}`"
            class="cat-card card"
          >
            <div class="cat-icon">{{ catIcons[cat.id] }}</div>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
            <div class="cat-subs">
              <span v-for="sub in cat.subcategories" :key="sub.id" class="badge badge-brown">
                {{ sub.name }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Produits phares -->
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Nos coups de cœur</h2>
        <p class="section-subtitle">Les cafés préférés de nos clients</p>
        <div class="products-grid">
          <ProductCard v-for="p in featured" :key="p.id" :product="p" />
        </div>
        <div style="text-align:center;margin-top:40px">
          <router-link to="/cafes" class="btn btn-primary">Voir tous les cafés</router-link>
        </div>
      </div>
    </section>

    <!-- SEO : bloc de texte riche en keywords (important pour le référencement) -->
    <section class="seo-content-section">
      <div class="container">
        <h2>Pourquoi choisir nos cafés de spécialité ?</h2>
        <div class="seo-content-grid">
          <div>
            <h3>🌍 Des origines tracées</h3>
            <p>Chaque café en grain de notre sélection provient d'une origin unique, identifiée jusqu'à la finca ou la coopérative. Nous référençons des cafés d'<strong>Éthiopie</strong> (Yirgacheffe, Sidama), de <strong>Colombie</strong> (Huila, Nariño), du <strong>Brésil</strong> (Cerrado Mineiro) et du <strong>Guatemala</strong> (Antigua).</p>
          </div>
          <div>
            <h3>🔥 Torréfaction artisanale</h3>
            <p>Nos cafés sont torréfiés en petits lots selon trois profils : <strong>blonde</strong> pour les amateurs d'arômes floraux et fruités, <strong>médium</strong> pour l'équilibre et la polyvalence, <strong>foncée</strong> pour les amateurs d'espresso corsé.</p>
          </div>
          <div>
            <h3>🌿 Bio & Commerce Équitable</h3>
            <p>La majorité de nos cafés sont certifiés <strong>Agriculture Biologique</strong> (sans pesticide ni engrais chimique) et/ou <strong>Commerce Équitable</strong> (rémunération juste des producteurs). Boire du bon café peut être un acte responsable.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { categories, products } from '@/data/products.js'
import ProductCard from '@/components/ProductCard.vue'
import { useSEO } from '@/composables/useSEO.js'

const { setMeta, setJsonLD, organizationSchema } = useSEO()

const pageTitle = 'Grains & Origines – Café de Spécialité en Grain | Torréfaction Artisanale'
const pageDesc = 'Découvrez notre sélection de cafés de spécialité en grain : Éthiopie, Colombie, Brésil, Guatemala. Torréfaction artisanale, certifiés Bio et Commerce Équitable. Livraison France.'

const featured = products.filter(p => [1, 2, 3].includes(p.id))

const catIcons = { origines: '🌍', torrefaction: '🔥', certifications: '🌿' }

onMounted(() => {
  setMeta({ title: pageTitle, description: pageDesc, canonical: '/' })
  setJsonLD(organizationSchema())
})
</script>

<style scoped>
.hero {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: center;
  padding: 80px 20px; max-width: 1200px; margin: 0 auto;
}
.hero h1 {
  font-family: var(--font-serif); font-size: 2.8rem;
  color: var(--brown-800); line-height: 1.2; margin-bottom: 20px;
}
.hero h1 em { color: var(--brown-500); font-style: normal; display: block; font-size: 1.8rem; }
.hero-desc { color: var(--text-mid); font-size: 1.05rem; margin-bottom: 32px; max-width: 480px; }
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-image img { border-radius: var(--radius-lg); box-shadow: 0 12px 40px var(--shadow); }

.categories-section { background: var(--cream-200); padding: 80px 0; }
.categories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cat-card { padding: 28px; text-decoration: none; }
.cat-icon { font-size: 2.5rem; margin-bottom: 12px; }
.cat-card h3 { font-family: var(--font-serif); font-size: 1.2rem; color: var(--brown-800); margin-bottom: 8px; }
.cat-card p { font-size: 0.88rem; color: var(--text-mid); margin-bottom: 14px; }
.cat-subs { display: flex; flex-wrap: wrap; gap: 6px; }

.featured-section { padding: 80px 0; }
.seo-content-section { background: var(--brown-900); color: var(--cream-200); padding: 64px 0; }
.seo-content-section h2 { font-family: var(--font-serif); font-size: 1.8rem; text-align: center; margin-bottom: 40px; }
.seo-content-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; }
.seo-content-grid h3 { margin-bottom: 12px; font-size: 1.05rem; }
.seo-content-grid p { font-size: 0.9rem; opacity: 0.85; line-height: 1.7; }

@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; padding: 40px 20px; }
  .hero h1 { font-size: 2rem; }
  .categories-grid, .seo-content-grid { grid-template-columns: 1fr; }
}
</style>
