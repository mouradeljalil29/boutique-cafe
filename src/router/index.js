export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    // Catalogue général
    path: '/cafes',
    name: 'Cafes',
    component: () => import('../views/CatalogueView.vue')
  },
  {
    // Page éditoriale Torréfaction (guide, sans produits)
    path: '/torrefaction',
    name: 'Torrefaction',
    component: () => import('../views/TorrefactionView.vue')
  },
  {
    // Page éditoriale Bio & Équitable (guide, sans produits)
    path: '/certifications',
    name: 'Certifications',
    component: () => import('../views/CertificationsView.vue')
  },
  {
    // Page catégorie Origines : /origines
    path: '/origines',
    name: 'Category',
    component: () => import('../views/CategoryView.vue')
  },
  {
    // Pages sous-catégorie : /origines/ethiopie  /torrefaction/blonde  etc.
    path: '/:categorySlug(origines|torrefaction|certifications)/:subcategorySlug',
    name: 'Subcategory',
    component: () => import('../views/SubcategoryView.vue')
  },
  {
    // Fiche produit : /cafes/arabica-ethiopie-yirgacheffe-bio-250g
    path: '/cafes/:productSlug',
    name: 'Product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/articles',
    name: 'Blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/articles/:articleSlug',
    name: 'BlogArticle',
    component: () => import('../views/BlogArticleView.vue')
  },
  {
    path: '/a-propos',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

export const scrollBehavior = () => {
  return { top: 0 }
}
