<template>
  <div id="app-wrapper">
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">☕</span>
          <span class="logo-text">Grains <em>&</em> Origines</span>
        </NuxtLink>

        <nav class="main-nav" aria-label="Navigation principale">
          <NuxtLink to="/">Accueil</NuxtLink>

          <div class="nav-dropdown">
            <span class="nav-trigger">Nos Cafés ▾</span>
            <div class="dropdown-menu dropdown-wide">
              <div class="dropdown-section">
                <span class="dropdown-label">Nos cafés</span>
                <NuxtLink to="/cafe/arabica-ethiopie-yirgacheffe-bio-250g">Arabica Yirgacheffe Bio</NuxtLink>
                <NuxtLink to="/cafe/ethiopie-sidama-natural-250g">Sidama Natural Bio</NuxtLink>
                <NuxtLink to="/cafe/colombie-huila-single-origin-250g">Colombie Huila Single Origin</NuxtLink>
                <NuxtLink to="/cafe/colombie-narino-decafeine-250g">Colombie Nariño Décaféiné</NuxtLink>
                <NuxtLink to="/cafe/espresso-bresil-cerrado-mineiro-500g">Espresso Brésil Cerrado</NuxtLink>
                <NuxtLink to="/cafe/guatemala-antigua-volcan-250g">Guatemala Antigua Volcan</NuxtLink>
              </div>
              <div class="dropdown-section">
                <span class="dropdown-label">Catégories</span>
                <NuxtLink to="/catalogue">Tous les cafés</NuxtLink>
                <NuxtLink to="/origines">Par origine</NuxtLink>
                <NuxtLink to="/torrefaction">Torréfaction</NuxtLink>
                <NuxtLink to="/certifications">Bio & Équitable</NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/a-propos">À propos</NuxtLink>
        </nav>

        <button class="nav-toggle" @click="mobileOpen = !mobileOpen" aria-label="Menu">☰</button>
      </div>

      <!-- Mobile nav -->
      <nav v-if="mobileOpen" class="mobile-nav">
        <NuxtLink to="/" @click="mobileOpen=false">Accueil</NuxtLink>
        <span class="mobile-nav-label">Nos Cafés</span>
        <NuxtLink to="/cafe/arabica-ethiopie-yirgacheffe-bio-250g" @click="mobileOpen=false" class="mobile-sub">Arabica Yirgacheffe Bio</NuxtLink>
        <NuxtLink to="/cafe/ethiopie-sidama-natural-250g" @click="mobileOpen=false" class="mobile-sub">Sidama Natural Bio</NuxtLink>
        <NuxtLink to="/cafe/colombie-huila-single-origin-250g" @click="mobileOpen=false" class="mobile-sub">Colombie Huila</NuxtLink>
        <NuxtLink to="/cafe/colombie-narino-decafeine-250g" @click="mobileOpen=false" class="mobile-sub">Colombie Décaféiné</NuxtLink>
        <NuxtLink to="/cafe/espresso-bresil-cerrado-mineiro-500g" @click="mobileOpen=false" class="mobile-sub">Espresso Brésil</NuxtLink>
        <NuxtLink to="/cafe/guatemala-antigua-volcan-250g" @click="mobileOpen=false" class="mobile-sub">Guatemala Antigua</NuxtLink>
        <span class="mobile-nav-label">Catégories</span>
        <NuxtLink to="/catalogue" @click="mobileOpen=false" class="mobile-sub">Tous les cafés</NuxtLink>
        <NuxtLink to="/origines" @click="mobileOpen=false" class="mobile-sub">Par origine</NuxtLink>
        <NuxtLink to="/torrefaction" @click="mobileOpen=false" class="mobile-sub">Torréfaction</NuxtLink>
        <NuxtLink to="/certifications" @click="mobileOpen=false" class="mobile-sub">Bio & Équitable</NuxtLink>
        <NuxtLink to="/blog" @click="mobileOpen=false">Blog</NuxtLink>
        <NuxtLink to="/a-propos" @click="mobileOpen=false">À propos</NuxtLink>
      </nav>
    </header>

    <main>
      <!-- slot = contenu de la page courante (rendu par Nuxt) -->
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <p class="footer-logo">☕ Grains & Origines</p>
          <p>Cafés de spécialité en grain, torréfaction artisanale.</p>
        </div>
        <div class="footer-links">
          <h4>Origines</h4>
          <NuxtLink to="/origines/ethiopie">Éthiopie</NuxtLink>
          <NuxtLink to="/origines/colombie">Colombie</NuxtLink>
          <NuxtLink to="/origines/bresil">Brésil</NuxtLink>
          <NuxtLink to="/origines/guatemala">Guatemala</NuxtLink>
        </div>
        <div class="footer-links">
          <h4>Torréfaction</h4>
          <NuxtLink to="/torrefaction">Guide torréfaction</NuxtLink>
          <NuxtLink to="/torrefaction/blonde">Blonde</NuxtLink>
          <NuxtLink to="/torrefaction/medium">Médium</NuxtLink>
          <NuxtLink to="/torrefaction/foncee">Foncée</NuxtLink>
        </div>
        <div class="footer-links">
          <h4>À propos</h4>
          <NuxtLink to="/a-propos">Notre histoire</NuxtLink>
          <NuxtLink to="/blog">Blog café</NuxtLink>
          <NuxtLink to="/certifications">Bio & Équitable</NuxtLink>
          <NuxtLink to="/catalogue">Tous les cafés</NuxtLink>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Grains & Origines</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// ref est auto-importé par Nuxt
const mobileOpen = ref(false)
</script>

<style scoped>
.site-header {
  background: var(--brown-900);
  color: white;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
}
.header-inner {
  display: flex; align-items: center;
  padding-top: 14px; padding-bottom: 14px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-serif); font-size: 1.3rem;
  color: var(--cream-200); white-space: nowrap;
  margin-right: auto;
}
.logo em { color: var(--brown-300); font-style: normal; }
.logo-icon { font-size: 1.5rem; }

.main-nav {
  display: flex; align-items: center; gap: 4px;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.main-nav a, .nav-trigger {
  color: var(--cream-300); padding: 8px 14px; border-radius: 6px;
  font-size: 0.9rem; transition: all 0.2s; cursor: pointer;
}
.main-nav a:hover, .nav-trigger:hover { color: white; background: rgba(255,255,255,0.1); }
.main-nav a.router-link-active { color: var(--brown-300); }

/* Dropdown */
.nav-dropdown { position: relative; }
.dropdown-menu {
  display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  background: var(--brown-800); border-radius: var(--radius);
  padding: 8px; min-width: 200px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.nav-dropdown:hover .dropdown-menu { display: flex; flex-direction: column; }
.dropdown-menu a { display: block; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem; }

/* Wide dropdown (Nos Cafés) */
.dropdown-wide { min-width: 360px; flex-direction: row !important; gap: 4px; left: 0; transform: none; }
.dropdown-section { display: flex; flex-direction: column; flex: 1; }
.dropdown-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--brown-400); padding: 6px 12px 4px; }

.nav-toggle { display: none; background: none; border: none; color: white; font-size: 1.4rem; cursor: pointer; margin-left: auto; }

.mobile-nav {
  display: flex; flex-direction: column;
  background: var(--brown-800); padding: 8px 20px 16px;
}
.mobile-nav a { color: var(--cream-200); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
.mobile-nav-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--brown-400); padding: 12px 0 4px; }
.mobile-nav a.mobile-sub { padding-left: 14px; font-size: 0.88rem; opacity: 0.85; }

/* Footer */
.site-footer { background: var(--brown-900); color: var(--cream-300); margin-top: 80px; }
.footer-inner {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px; padding: 48px 20px 32px;
}
.footer-brand p { font-size: 0.9rem; opacity: 0.8; margin-top: 8px; }
.footer-logo { font-family: var(--font-serif); font-size: 1.2rem; color: var(--cream-100); }
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links h4 { color: white; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
.footer-links a { font-size: 0.88rem; opacity: 0.75; transition: opacity 0.2s; }
.footer-links a:hover { opacity: 1; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); text-align: center; padding: 16px; font-size: 0.8rem; opacity: 0.5; }

@media (max-width: 900px) {
  .main-nav { display: none; }
  .nav-toggle { display: block; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .footer-inner { grid-template-columns: 1fr; }
}
</style>
