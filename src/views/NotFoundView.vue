<template>
  <div class="page not-found">
    <div class="container">
      <div class="nf-content">
        <div class="nf-icon">☕</div>
        <h1>404 – Page introuvable</h1>
        <p>Cette page n'existe pas ou a été déplacée.</p>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:24px">
          <router-link to="/" class="btn btn-primary">Retour à l'accueil</router-link>
          <router-link to="/catalogue" class="btn btn-secondary">Voir le catalogue</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO.js'
const { setMeta } = useSEO()
onMounted(() => setMeta({ title: '404 – Page introuvable | Grains & Origines', description: '', noindex: true }))
</script>

<style scoped>
.not-found { display: flex; align-items: center; justify-content: center; min-height: 60vh; }
.nf-content { text-align: center; }
.nf-icon { font-size: 4rem; margin-bottom: 16px; }
h1 { font-family: var(--font-serif); font-size: 2rem; color: var(--brown-800); margin-bottom: 12px; }
p { color: var(--text-mid); }
</style>
