<template>
  <div id="app-wrapper">
    <header class="site-header">
      <div class="container header-inner">
        <router-link to="/" class="logo">
          <span class="logo-icon">☕</span>
          <span class="logo-text">Grains <em>&</em> Origines</span>
        </router-link>
        <nav class="main-nav" aria-label="Navigation principale">
          <router-link to="/">Accueil</router-link>
          <router-link to="/catalogue">Catalogue</router-link>
          <div class="nav-dropdown">
            <span class="nav-trigger">Origines ▾</span>
            <div class="dropdown-menu">
              <router-link to="/catalogue/par-origine">Toutes les origines</router-link>
              <router-link to="/catalogue/par-origine/ethiopie">Éthiopie</router-link>
              <router-link to="/catalogue/par-origine/colombie">Colombie</router-link>
              <router-link to="/catalogue/par-origine/bresil">Brésil</router-link>
              <router-link to="/catalogue/par-origine/guatemala">Guatemala</router-link>
            </div>
          </div>
          <router-link to="/catalogue/par-torrefaction">Torréfaction</router-link>
          <router-link to="/catalogue/par-certification">Bio & Équitable</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/a-propos">À propos</router-link>
        </nav>
        <button class="nav-toggle" @click="mobileOpen = !mobileOpen" aria-label="Menu">☰</button>
      </div>
      <!-- Mobile nav -->
      <nav v-if="mobileOpen" class="mobile-nav">
        <router-link to="/" @click="mobileOpen=false">Accueil</router-link>
        <router-link to="/catalogue" @click="mobileOpen=false">Catalogue</router-link>
        <router-link to="/catalogue/par-origine" @click="mobileOpen=false">Par Origine</router-link>
        <router-link to="/catalogue/par-torrefaction" @click="mobileOpen=false">Par Torréfaction</router-link>
        <router-link to="/catalogue/par-certification" @click="mobileOpen=false">Bio & Équitable</router-link>
        <router-link to="/blog" @click="mobileOpen=false">Blog</router-link>
        <router-link to="/a-propos" @click="mobileOpen=false">À propos</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <p class="footer-logo">☕ Grains & Origines</p>
          <p>Cafés de spécialité en grain, torréfaction artisanale.</p>
        </div>
        <div class="footer-links">
          <h4>Origines</h4>
          <router-link to="/catalogue/par-origine/ethiopie">Éthiopie</router-link>
          <router-link to="/catalogue/par-origine/colombie">Colombie</router-link>
          <router-link to="/catalogue/par-origine/bresil">Brésil</router-link>
          <router-link to="/catalogue/par-origine/guatemala">Guatemala</router-link>
        </div>
        <div class="footer-links">
          <h4>Torréfaction</h4>
          <router-link to="/catalogue/par-torrefaction/blonde">Blonde</router-link>
          <router-link to="/catalogue/par-torrefaction/medium">Médium</router-link>
          <router-link to="/catalogue/par-torrefaction/foncee">Foncée</router-link>
        </div>
        <div class="footer-links">
          <h4>À propos</h4>
          <router-link to="/a-propos">Notre histoire</router-link>
          <router-link to="/blog">Blog café</router-link>
          <router-link to="/catalogue">Tous les produits</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Grains & Origines</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
  display: flex; align-items: center; gap: 32px;
  padding-top: 14px; padding-bottom: 14px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-serif); font-size: 1.3rem;
  color: var(--cream-200); white-space: nowrap;
}
.logo em { color: var(--brown-300); font-style: normal; }
.logo-icon { font-size: 1.5rem; }
.main-nav {
  display: flex; align-items: center; gap: 4px; margin-left: auto;
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
  display: none; position: absolute; top: 100%; left: 0;
  background: var(--brown-800); border-radius: var(--radius);
  padding: 8px; min-width: 200px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.nav-dropdown:hover .dropdown-menu { display: flex; flex-direction: column; }
.dropdown-menu a { display: block; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem; }

.nav-toggle { display: none; background: none; border: none; color: white; font-size: 1.4rem; cursor: pointer; margin-left: auto; }

.mobile-nav {
  display: flex; flex-direction: column;
  background: var(--brown-800); padding: 8px 20px 16px;
}
.mobile-nav a { color: var(--cream-200); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }

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
