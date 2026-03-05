<template>
  <div class="page">
    <div class="container">
      <Breadcrumb :crumbs="[{ label: 'Torréfaction' }]" />

      <header class="guide-header">
        <h1>La Torréfaction du Café : Guide Complet</h1>
        <p class="guide-intro">La torréfaction transforme le café vert en grain aromatique. Comprendre ses niveaux — blonde, médium, foncée — vous permet de choisir le café parfaitement adapté à votre méthode de préparation et à vos goûts.</p>
      </header>

      <div class="roast-levels">
        <article class="roast-card">
          <div class="roast-icon">🟡</div>
          <div class="roast-content">
            <h2>Torréfaction Blonde — Light Roast</h2>
            <p>La torréfaction blonde s'arrête avant le premier crack, entre 180 et 205°C. Elle préserve les acides organiques et les composés aromatiques du terroir. Le grain reste dense, de couleur caramel clair.</p>
            <ul>
              <li><strong>Arômes :</strong> Floral, fruité, agrumes, fleur de jasmin</li>
              <li><strong>Acidité :</strong> Vive, élégante</li>
              <li><strong>Corps :</strong> Léger à médium</li>
              <li><strong>Méthodes recommandées :</strong> V60, Chemex, Aeropress, cold brew</li>
            </ul>
            <router-link to="/torrefaction/blonde" class="roast-link">Voir nos cafés torréfaction blonde →</router-link>
          </div>
        </article>

        <article class="roast-card">
          <div class="roast-icon">🟠</div>
          <div class="roast-content">
            <h2>Torréfaction Médium — Medium Roast</h2>
            <p>La torréfaction médium intervient entre le premier et le second crack, vers 210–220°C. L'acidité s'atténue, le corps se développe. Les notes caramélisées et chocolatées apparaissent. C'est le profil le plus polyvalent.</p>
            <ul>
              <li><strong>Arômes :</strong> Caramel, noisette, fruits rouges, cacao</li>
              <li><strong>Acidité :</strong> Modérée, équilibrée</li>
              <li><strong>Corps :</strong> Médium à plein</li>
              <li><strong>Méthodes recommandées :</strong> Filtre, cafetière à piston, espresso modéré</li>
            </ul>
            <router-link to="/torrefaction/medium" class="roast-link">Voir nos cafés torréfaction médium →</router-link>
          </div>
        </article>

        <article class="roast-card">
          <div class="roast-icon">🟤</div>
          <div class="roast-content">
            <h2>Torréfaction Foncée — Dark Roast</h2>
            <p>La torréfaction foncée dépasse le second crack, vers 225–240°C. Le grain perd une partie de ses caractéristiques d'origine au profit d'arômes de torréfaction intenses. Classique pour l'espresso italien.</p>
            <ul>
              <li><strong>Arômes :</strong> Chocolat noir, tabac doux, épices, fumé léger</li>
              <li><strong>Acidité :</strong> Faible</li>
              <li><strong>Corps :</strong> Plein, puissant</li>
              <li><strong>Méthodes recommandées :</strong> Espresso, cafetière italienne (Moka)</li>
            </ul>
            <router-link to="/torrefaction/foncee" class="roast-link">Voir nos cafés torréfaction foncée →</router-link>
          </div>
        </article>
      </div>

      <section class="guide-faq">
        <h2>Questions fréquentes sur la torréfaction</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Comment choisir son niveau de torréfaction ?</h3>
            <p>Si vous utilisez un filtre (V60, Chemex) ou un Aeropress, privilégiez la torréfaction blonde ou médium pour profiter des arômes d'origine. Pour un espresso ou une cafetière italienne, la torréfaction médium à foncée est recommandée.</p>
          </div>
          <div class="faq-item">
            <h3>La torréfaction foncée est-elle de moins bonne qualité ?</h3>
            <p>Non, c'est une question de préférence et de méthode. Un café de spécialité bien torréfié en foncé reste supérieur à un café de commodité torréfié en médium. La torréfaction ne détermine pas la qualité, elle révèle différents aspects du grain.</p>
          </div>
          <div class="faq-item">
            <h3>Pourquoi préférer la torréfaction blonde pour les cafés d'Éthiopie ?</h3>
            <p>Les cafés d'Éthiopie, notamment le Yirgacheffe, développent des arômes floraux et fruités très complexes qui seraient écrasés par une torréfaction foncée. La blonde préserve ces caractéristiques uniques de terroir.</p>
          </div>
          <div class="faq-item">
            <h3>Peut-on faire un espresso avec une torréfaction blonde ?</h3>
            <p>Oui, mais le résultat sera plus acide et léger qu'un espresso traditionnel. Certains amateurs l'apprécient. Cela demande cependant de bien ajuster la mouture et la pression pour éviter une extraction trop rapide.</p>
          </div>
        </div>
      </section>

      <div class="guide-cta">
        <h2>Découvrir nos cafés par torréfaction</h2>
        <div class="cta-links">
          <router-link to="/torrefaction/blonde" class="btn btn-secondary">Torréfaction Blonde</router-link>
          <router-link to="/torrefaction/medium" class="btn btn-secondary">Torréfaction Médium</router-link>
          <router-link to="/torrefaction/foncee" class="btn btn-secondary">Torréfaction Foncée</router-link>
          <router-link to="/catalogue" class="btn btn-primary">Tous nos cafés</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useSEO } from '@/composables/useSEO.js'

const { setMeta, setJsonLD, breadcrumbSchema } = useSEO()

onMounted(() => {
  setMeta({
    title: 'Torréfaction Café : Blonde, Médium, Foncée – Guide Complet | Grains & Origines',
    description: 'Guide complet sur la torréfaction du café : différences entre blonde, médium et foncée, arômes, méthodes de préparation recommandées. Trouvez votre torréfaction idéale.',
    canonical: '/torrefaction'
  })
  setJsonLD(breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Torréfaction' }
  ]))
})
</script>

<style scoped>
.guide-header { margin: 32px 0 48px; max-width: 760px; }
.guide-header h1 { font-family: var(--font-serif); font-size: 2.2rem; color: var(--brown-800); margin-bottom: 16px; line-height: 1.3; }
.guide-intro { font-size: 1.05rem; color: var(--text-mid); line-height: 1.8; }

.roast-levels { display: flex; flex-direction: column; gap: 32px; margin-bottom: 64px; }
.roast-card { display: flex; gap: 28px; padding: 28px; background: var(--cream-200); border-radius: var(--radius-lg); align-items: flex-start; }
.roast-icon { font-size: 2.5rem; flex-shrink: 0; }
.roast-content h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 10px; }
.roast-content p { color: var(--text-mid); line-height: 1.7; margin-bottom: 12px; }
.roast-content ul { list-style: none; padding: 0; margin-bottom: 16px; }
.roast-content li { font-size: 0.9rem; color: var(--text-mid); padding: 4px 0; border-bottom: 1px solid var(--border); }
.roast-link { font-weight: 600; color: var(--brown-700); font-size: 0.9rem; }
.roast-link:hover { color: var(--brown-500); }

.guide-faq { margin-bottom: 64px; }
.guide-faq h2 { font-family: var(--font-serif); font-size: 1.6rem; color: var(--brown-800); margin-bottom: 32px; }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.faq-item { padding: 24px; border: 1px solid var(--border); border-radius: var(--radius-lg); }
.faq-item h3 { font-family: var(--font-serif); font-size: 1rem; color: var(--brown-800); margin-bottom: 10px; }
.faq-item p { font-size: 0.88rem; color: var(--text-mid); line-height: 1.7; }

.guide-cta { background: var(--brown-900); color: white; padding: 40px; border-radius: var(--radius-lg); text-align: center; margin-bottom: 48px; }
.guide-cta h2 { font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 20px; }
.cta-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 768px) {
  .roast-card { flex-direction: column; }
  .faq-grid { grid-template-columns: 1fr; }
  .guide-header h1 { font-size: 1.6rem; }
}
</style>
