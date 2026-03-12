<template>
  <nav class="breadcrumb" aria-label="Fil d'Ariane">
    <router-link to="/">Accueil</router-link>
    <template v-for="(crumb, i) in crumbs" :key="i">
      <span aria-hidden="true">›</span>
      <router-link v-if="crumb.to" :to="crumb.to">{{ crumb.label }}</router-link>
      <span v-else aria-current="page">{{ crumb.label }}</span>
    </template>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: { type: Array, default: () => [] }
  // Exemple : [{ label: 'Cafés', to: '/cafes' }, { label: 'Éthiopie' }]
})
</script>
