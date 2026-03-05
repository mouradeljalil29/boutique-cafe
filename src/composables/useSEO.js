// composables/useSEO.js
// Gestion dynamique des balises SEO (title, meta, canonical, JSON-LD)

import { onUnmounted } from 'vue'

const BASE_URL = 'https://grains-et-origines.fr'
const SITE_NAME = 'Grains & Origines'

export function useSEO() {
  function setMeta(options) {
    const {
      title,
      description,
      canonical,
      ogImage = 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1200&q=80',
      noindex = false,
    } = options

    // 1. Title
    document.title = title || `${SITE_NAME} – Café de Spécialité en Grain`

    // 2. Meta description
    setMetaTag('name', 'description', description || '')

    // 3. Robots
    setMetaTag('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')

    // 4. Canonical
    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    link.rel = 'canonical'
    link.href = canonical ? `${BASE_URL}${canonical}` : BASE_URL
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(link)

    // 5. Open Graph
    setMetaTag('property', 'og:title', title || '')
    setMetaTag('property', 'og:description', description || '')
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:url', canonical ? `${BASE_URL}${canonical}` : BASE_URL)
    setMetaTag('property', 'og:site_name', SITE_NAME)

    // 6. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title || '')
    setMetaTag('name', 'twitter:description', description || '')
    setMetaTag('name', 'twitter:image', ogImage)
  }

  function setJsonLD(schema) {
    removeJsonLD()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'jsonld-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }

  function removeJsonLD() {
    const existing = document.getElementById('jsonld-schema')
    if (existing) existing.remove()
  }

  function setMetaTag(attr, key, value) {
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', value)
  }

  // Schémas JSON-LD prêts à l'emploi
  function productSchema(product) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description?.substring(0, 200),
      image: product.image,
      sku: `GEO-${product.id}`,
      brand: { '@type': 'Brand', name: SITE_NAME },
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'EUR',
        availability: product.inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        url: `${BASE_URL}/cafe/${product.slug}`,
        seller: { '@type': 'Organization', name: SITE_NAME }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount
      }
    }
  }

  function breadcrumbSchema(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url ? `${BASE_URL}${item.url}` : undefined
      }))
    }
  }

  function organizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description: 'Boutique en ligne de cafés de spécialité en grain, origines uniques et torréfaction artisanale.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'bonjour@grains-et-origines.fr'
      }
    }
  }

  onUnmounted(() => removeJsonLD())

  return { setMeta, setJsonLD, productSchema, breadcrumbSchema, organizationSchema, removeJsonLD }
}
