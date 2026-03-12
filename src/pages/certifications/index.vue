<template>
  <div class="page">
    <div class="container">
      <Breadcrumb :crumbs="[{ label: 'Bio & Équitable' }]" />

      <header class="guide-header">
        <h1>Café Bio et Commerce Équitable : Nos Engagements</h1>
        <p class="guide-intro">Chez Grains & Origines, nous croyons que boire un grand café peut aussi être un acte responsable. La majorité de nos cafés sont certifiés Agriculture Biologique et/ou Commerce Équitable. Voici ce que ces labels signifient concrètement.</p>
      </header>

      <div class="cert-cards">
        <article class="cert-card">
          <div class="cert-header">
            <span class="cert-badge">🌿</span>
            <div>
              <h2>Agriculture Biologique – Certification AB</h2>
              <p class="cert-tagline">Cultivé sans pesticide ni engrais chimique de synthèse</p>
            </div>
          </div>
          <div class="cert-body">
            <p>La certification Agriculture Biologique (label AB en France, équivalent EU Organic) garantit que les caféiers ont été cultivés sans recours aux pesticides chimiques, herbicides ou engrais de synthèse. Le sol est entretenu par des méthodes naturelles : compostage, rotation des cultures, couverture végétale.</p>
            <p>Pour le café, la certification bio est particulièrement importante car le caféier est l'une des cultures les plus traitées au monde en agriculture conventionnelle. Choisir un café bio, c'est protéger les écosystèmes des régions productrices et la santé des agriculteurs qui travaillent sans équipement de protection.</p>
            <h3>Ce que la certification garantit :</h3>
            <ul>
              <li>Absence de pesticides et herbicides chimiques</li>
              <li>Fertilisation naturelle uniquement (compost, légumineuses)</li>
              <li>Respect de la biodiversité locale</li>
              <li>Contrôle annuel par un organisme certificateur agréé</li>
            </ul>
            <NuxtLink to="/certifications/bio" class="cert-link">Voir nos cafés certifiés Bio →</NuxtLink>
          </div>
        </article>

        <article class="cert-card">
          <div class="cert-header">
            <span class="cert-badge">⚖️</span>
            <div>
              <h2>Commerce Équitable – Fair Trade</h2>
              <p class="cert-tagline">Rémunération juste et conditions de travail respectées</p>
            </div>
          </div>
          <div class="cert-body">
            <p>Le label Commerce Équitable (Fair Trade, Max Havelaar) garantit que le producteur reçoit un prix minimum garanti pour son café, indépendamment des fluctuations du marché mondial. Il inclut également une prime de développement versée directement à la coopérative pour financer des projets collectifs.</p>
            <p>La filière café conventionnelle est souvent marquée par des prix volatils qui fragilisent les producteurs, notamment en Afrique et en Amérique Latine. Le Commerce Équitable crée des relations durables entre torréfacteurs et producteurs, avec plus de transparence sur toute la chaîne.</p>
            <h3>Ce que la certification garantit :</h3>
            <ul>
              <li>Prix minimum garanti au producteur</li>
              <li>Prime de développement pour la coopérative</li>
              <li>Interdiction du travail forcé et du travail des enfants</li>
              <li>Conditions de travail respectueuses des droits sociaux</li>
            </ul>
            <NuxtLink to="/certifications/equitable" class="cert-link">Voir nos cafés Commerce Équitable →</NuxtLink>
          </div>
        </article>
      </div>

      <section class="our-approach">
        <h2>Notre démarche</h2>
        <div class="approach-grid">
          <div>
            <h3>Au-delà des labels</h3>
            <p>Les certifications sont une base, pas une fin. Nous travaillons en direct avec des coopératives et des producteurs dont nous connaissons les pratiques. Certains de nos partenaires appliquent des pratiques biologiques sans avoir les moyens financiers de financer la certification. Nous les valorisons aussi.</p>
          </div>
          <div>
            <h3>Traçabilité totale</h3>
            <p>Chaque café de notre catalogue est accompagné du nom du producteur ou de la coopérative, de la région et du millésime. La traçabilité va plus loin que le label : vous savez exactement qui a cultivé votre café et dans quelles conditions.</p>
          </div>
          <div>
            <h3>Agroforesterie</h3>
            <p>Plusieurs de nos partenaires pratiquent l'agroforesterie : les caféiers poussent sous un couvert d'arbres fruitiers et forestiers. Cette pratique séquestre du carbone, protège la biodiversité et améliore la qualité du grain en régulant l'humidité et l'ombre.</p>
          </div>
        </div>
      </section>

      <div class="guide-cta">
        <h2>Nos cafés responsables</h2>
        <div class="cta-links">
          <NuxtLink to="/certifications/bio" class="btn btn-secondary">Cafés Bio certifiés AB</NuxtLink>
          <NuxtLink to="/certifications/equitable" class="btn btn-secondary">Cafés Commerce Équitable</NuxtLink>
          <NuxtLink to="/catalogue" class="btn btn-primary">Tous nos cafés</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { setMeta, setJsonLD, breadcrumbSchema } = useSEO()

setMeta({
  title: 'Café Bio et Commerce Équitable – Nos Engagements | Grains & Origines',
  description: "Nos cafés certifiés Agriculture Biologique (AB) et Commerce Équitable (Fair Trade). Comprendre ces labels et leur impact concret pour les producteurs et l'environnement.",
  canonical: '/certifications'
})
setJsonLD(breadcrumbSchema([
  { name: 'Accueil', url: '/' },
  { name: 'Bio & Équitable' }
]))
</script>

<style scoped>
.guide-header { margin: 32px 0 48px; max-width: 760px; }
.guide-header h1 { font-family: var(--font-serif); font-size: 2.2rem; color: var(--brown-800); margin-bottom: 16px; line-height: 1.3; }
.guide-intro { font-size: 1.05rem; color: var(--text-mid); line-height: 1.8; }
.cert-cards { display: flex; flex-direction: column; gap: 32px; margin-bottom: 64px; }
.cert-card { padding: 32px; background: var(--cream-200); border-radius: var(--radius-lg); }
.cert-header { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid var(--border); }
.cert-badge { font-size: 2.5rem; flex-shrink: 0; }
.cert-header h2 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--brown-800); margin-bottom: 4px; }
.cert-tagline { font-size: 0.9rem; color: var(--brown-500); font-weight: 600; }
.cert-body p { color: var(--text-mid); line-height: 1.75; margin-bottom: 14px; }
.cert-body h3 { font-family: var(--font-serif); font-size: 1rem; color: var(--brown-800); margin: 16px 0 10px; }
.cert-body ul { list-style: none; padding: 0; margin-bottom: 20px; }
.cert-body li { font-size: 0.9rem; color: var(--text-mid); padding: 6px 0; border-bottom: 1px solid var(--border); }
.cert-body li::before { content: "✓ "; color: var(--green-700); font-weight: 700; }
.cert-link { font-weight: 600; color: var(--brown-700); font-size: 0.9rem; }
.our-approach { margin-bottom: 64px; }
.our-approach h2 { font-family: var(--font-serif); font-size: 1.6rem; color: var(--brown-800); margin-bottom: 32px; }
.approach-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.approach-grid h3 { font-family: var(--font-serif); font-size: 1rem; color: var(--brown-800); margin-bottom: 10px; }
.approach-grid p { font-size: 0.9rem; color: var(--text-mid); line-height: 1.7; }
.guide-cta { background: var(--green-700); color: white; padding: 40px; border-radius: var(--radius-lg); text-align: center; margin-bottom: 48px; }
.guide-cta h2 { font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 20px; }
.cta-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 768px) {
  .cert-header { flex-direction: column; }
  .approach-grid { grid-template-columns: 1fr; }
  .guide-header h1 { font-size: 1.6rem; }
}
</style>
