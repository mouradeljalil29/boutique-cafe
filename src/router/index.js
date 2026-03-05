import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    // Catalogue général
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import('../views/CatalogueView.vue')
  },
  {
    // Page catégorie : /catalogue/par-origine
    path: '/catalogue/:categorySlug',
    name: 'Category',
    component: () => import('../views/CategoryView.vue')
  },
  {
    // Page sous-catégorie : /catalogue/par-origine/ethiopie
    path: '/catalogue/:categorySlug/:subcategorySlug',
    name: 'Subcategory',
    component: () => import('../views/SubcategoryView.vue')
  },
  {
    path: '/produits/:productSlug',
    name: 'Product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog/:articleSlug',
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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
