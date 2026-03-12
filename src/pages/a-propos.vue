<template>
  <div class="page">
    <section class="about-hero">
      <div class="container">
        <h1>À propos de Grains & Origines</h1>
        <p class="hero-subtitle">Nous sélectionnons des cafés de spécialité auprès de producteurs engagés à travers le monde, et les torréfions en petits lots dans notre atelier en France.</p>
      </div>
    </section>

    <section class="about-story">
      <div class="container story-grid">
        <div class="story-text">
          <h2>Notre histoire</h2>
          <p>Grains & Origines est née d'une conviction simple : le café mérite la même attention que le vin. Derrière chaque tasse se trouve un pays, un terroir, un agriculteur. Nous avons voulu rendre cette chaîne visible.</p>
          <p>Nous travaillons en direct avec des coopératives et des producteurs indépendants en Éthiopie, en Colombie, au Brésil et au Guatemala. Nos cafés sont sélectionnés lors de sessions de cupping à l'aveugle, uniquement si leur score dépasse 83 points sur 100 selon les critères de la Specialty Coffee Association.</p>
          <p>La torréfaction est réalisée en petits lots, à la commande, pour garantir une fraîcheur maximale à réception. Chaque sac indique la date de torréfaction.</p>
        </div>
        <div class="story-image">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80"
            alt="Torréfaction artisanale de café en grain dans notre atelier"
            width="600" height="400"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="container">
        <h2>Nos engagements</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">🌍</div>
            <h3>Traçabilité totale</h3>
            <p>Chaque café est accompagné du nom du producteur, de la région, de l'altitude et du millésime de récolte. Vous savez exactement ce que vous buvez.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🌿</div>
            <h3>Agriculture responsable</h3>
            <p>La majorité de nos références sont certifiées Agriculture Biologique et/ou Commerce Équitable. Nous privilégions les producteurs pratiquant l'agroforesterie.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🔥</div>
            <h3>Torréfaction artisanale</h3>
            <p>Chaque lot est torréfié à la commande dans notre atelier. Nous adaptons le profil de torréfaction à chaque origine pour révéler le meilleur du grain.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">📦</div>
            <h3>Fraîcheur garantie</h3>
            <p>Nos cafés sont expédiés sous 24 à 48h après torréfaction. Nous recommandons de les consommer dans les 6 semaines suivant la date indiquée sur l'emballage.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-process">
      <div class="container">
        <h2>De la récolte à votre tasse</h2>
        <div class="process-steps">
          <div class="step">
            <span class="step-number">01</span>
            <h3>Sélection au terroir</h3>
            <p>Nous visitons les régions productrices pour identifier des lots exceptionnels auprès de producteurs dont nous partageons les valeurs.</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <span class="step-number">02</span>
            <h3>Cupping & scoring</h3>
            <p>Chaque lot est évalué à l'aveugle selon la grille SCA. Seuls les cafés dépassant 83/100 intègrent notre sélection.</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <span class="step-number">03</span>
            <h3>Torréfaction sur profil</h3>
            <p>Le profil de torréfaction est développé spécifiquement pour chaque origine, en petits lots de 10 à 30 kg.</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <span class="step-number">04</span>
            <h3>Expédition rapide</h3>
            <p>Livraison sous 24 à 48h après torréfaction. Emballage sous vide avec valve de dégazage pour une conservation optimale.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="container">
        <h2>Découvrez notre sélection</h2>
        <p>Six origines soigneusement sélectionnées, toutes disponibles en grain entier.</p>
        <NuxtLink to="/catalogue" class="btn btn-primary">Voir le catalogue</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { setMeta } = useSEO()

setMeta({
  title: 'À propos – Grains & Origines, Cafés de Spécialité',
  description: 'Grains & Origines sélectionne et torréfie artisanalement des cafés de spécialité en grain depuis des producteurs engagés en Éthiopie, Colombie, Brésil et Guatemala.',
  canonical: '/a-propos'
})
</script>

<style scoped>
.about-hero { background: var(--brown-900); color: var(--cream-100); padding: 72px 0; }
.about-hero h1 { font-family: var(--font-serif); font-size: 2.6rem; margin-bottom: 16px; }
.hero-subtitle { font-size: 1.1rem; opacity: 0.85; max-width: 640px; line-height: 1.7; }
.about-story { padding: 72px 0; }
.story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
.story-text h2 { font-family: var(--font-serif); font-size: 1.8rem; color: var(--brown-800); margin-bottom: 20px; }
.story-text p { color: var(--text-mid); line-height: 1.8; margin-bottom: 16px; }
.story-image img { width: 100%; border-radius: var(--radius-lg); }
.about-values { background: var(--cream-200); padding: 72px 0; }
.about-values h2 { font-family: var(--font-serif); font-size: 1.8rem; color: var(--brown-800); text-align: center; margin-bottom: 48px; }
.values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.value-item { background: white; border-radius: var(--radius-lg); padding: 28px 24px; }
.value-icon { font-size: 2rem; margin-bottom: 12px; }
.value-item h3 { font-family: var(--font-serif); font-size: 1.05rem; color: var(--brown-800); margin-bottom: 10px; }
.value-item p { font-size: 0.88rem; color: var(--text-mid); line-height: 1.7; }
.about-process { padding: 72px 0; }
.about-process h2 { font-family: var(--font-serif); font-size: 1.8rem; color: var(--brown-800); text-align: center; margin-bottom: 48px; }
.process-steps { display: flex; align-items: flex-start; gap: 12px; }
.step { flex: 1; }
.step-number { display: block; font-size: 2rem; font-weight: 800; color: var(--brown-300); line-height: 1; margin-bottom: 10px; }
.step h3 { font-family: var(--font-serif); font-size: 1rem; color: var(--brown-800); margin-bottom: 8px; }
.step p { font-size: 0.88rem; color: var(--text-mid); line-height: 1.7; }
.step-arrow { font-size: 1.5rem; color: var(--brown-300); padding-top: 28px; flex-shrink: 0; }
.about-cta { background: var(--brown-800); color: var(--cream-100); padding: 64px 0; text-align: center; }
.about-cta h2 { font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 12px; }
.about-cta p { opacity: 0.8; margin-bottom: 28px; }
@media (max-width: 900px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .process-steps { flex-direction: column; }
  .step-arrow { display: none; }
}
@media (max-width: 768px) {
  .story-grid { grid-template-columns: 1fr; }
  .about-hero h1 { font-size: 1.8rem; }
  .values-grid { grid-template-columns: 1fr; }
}
</style>
