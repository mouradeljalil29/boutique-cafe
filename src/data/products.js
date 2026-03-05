// ============================================================
// DATA : Produits, catégories, sous-catégories
// ============================================================

export const categories = [
  {
    id: 'origines',
    name: 'Origines',
    slug: 'origines',
    description: 'Cafés de spécialité sélectionnés à la source, pays par pays.',
    metaTitle: 'Café par Origine – Éthiopie, Colombie, Brésil | Grains & Origines',
    metaDescription: 'Explorez nos cafés en grain classés par pays d\'origine. Éthiopie, Colombie, Brésil, Guatemala : chaque terroir a son caractère.',
    subcategories: [
      { id: 'ethiopie', name: 'Éthiopie', slug: 'ethiopie', description: 'Berceau du café, notes florales et fruitées.', metaTitle: 'Café Éthiopie en Grain – Yirgacheffe & Sidama | Grains & Origines', metaDescription: 'Nos cafés d\'Éthiopie : Yirgacheffe, Sidama, Harrar. Notes de jasmin, agrumes et miel. Arabica lavé de haute altitude.' },
      { id: 'colombie', name: 'Colombie', slug: 'colombie', description: 'Équilibre parfait, acidité douce, corps généreux.', metaTitle: 'Café Colombie en Grain – Single Origin | Grains & Origines', metaDescription: 'Cafés de Colombie sélectionnés dans les meilleurs fincas. Huila, Nariño, Antioquia. Notes de caramel, fruits rouges et noisette.' },
      { id: 'bresil', name: 'Brésil', slug: 'bresil', description: 'Douceur, chocolat, idéal pour espresso.', metaTitle: 'Café Brésil en Grain – Cerrado & Minas Gerais | Grains & Origines', metaDescription: 'Cafés du Brésil, Cerrado Mineiro et Minas Gerais. Notes de chocolat noir, noisette et caramel. Parfait pour l\'espresso maison.' },
      { id: 'guatemala', name: 'Guatemala', slug: 'guatemala', description: 'Terroirs volcaniques, complexité et fumé doux.', metaTitle: 'Café Guatemala en Grain – Antigua & Huehuetenango | Grains & Origines', metaDescription: 'Cafés du Guatemala des régions d\'Antigua et Huehuetenango. Notes de cacao, épices douces et fruits secs. Torréfaction artisanale.' },
    ]
  },
  {
    id: 'torrefaction',
    name: 'Torréfaction',
    slug: 'torrefaction',
    description: 'Choisissez votre profil de torréfaction selon vos goûts.',
    metaTitle: 'Café par Torréfaction – Blonde, Médium, Foncée | Grains & Origines',
    metaDescription: 'Trouvez votre torréfaction idéale : blonde pour l\'acidité et les arômes floraux, médium pour l\'équilibre, foncée pour le corps et l\'amertume.',
    subcategories: [
      { id: 'blonde', name: 'Torréfaction Blonde', slug: 'blonde', description: 'Légère, acide, arômes préservés.', metaTitle: 'Café Torréfaction Blonde – Light Roast | Grains & Origines', metaDescription: 'Nos cafés en torréfaction blonde (light roast). Idéaux pour le filtre et la chemex. Arômes floraux et fruités préservés au maximum.' },
      { id: 'medium', name: 'Torréfaction Médium', slug: 'medium', description: 'Équilibre acidité/corps, polyvalent.', metaTitle: 'Café Torréfaction Médium – Équilibré | Grains & Origines', metaDescription: 'Cafés en torréfaction médium, l\'équilibre parfait entre acidité et corps. Convient pour toutes les méthodes d\'extraction.' },
      { id: 'foncee', name: 'Torréfaction Foncée', slug: 'foncee', description: 'Corps intense, idéal espresso.', metaTitle: 'Café Torréfaction Foncée – Espresso | Grains & Origines', metaDescription: 'Cafés en torréfaction foncée pour espresso et cafetière italienne. Corps puissant, notes de chocolat noir et tabac doux.' },
    ]
  },
  {
    id: 'certifications',
    name: 'Bio & Équitable',
    slug: 'certifications',
    description: 'Cafés certifiés bio, commerce équitable et labels de durabilité.',
    metaTitle: 'Café Bio & Commerce Équitable | Grains & Origines',
    metaDescription: 'Nos cafés certifiés Agriculture Biologique, Fair Trade et Rainforest Alliance. Boire responsable sans sacrifier la qualité.',
    subcategories: [
      { id: 'bio', name: 'Agriculture Biologique', slug: 'bio', description: 'Sans pesticide, certifié AB.', metaTitle: 'Café Bio Certifié AB – Sans Pesticide | Grains & Origines', metaDescription: 'Cafés certifiés Agriculture Biologique. Culture sans pesticide ni engrais chimique. Bon pour vous, bon pour la planète.' },
      { id: 'equitable', name: 'Commerce Équitable', slug: 'equitable', description: 'Prix juste pour les producteurs.', metaTitle: 'Café Commerce Équitable Fair Trade | Grains & Origines', metaDescription: 'Cafés labellisés Fair Trade. Rémunération juste des producteurs, conditions de travail respectées, développement des communautés.' },
    ]
  }
]

export const products = [
  {
    id: 1,
    name: 'Café Arabica Éthiopie Yirgacheffe Bio',
    slug: 'arabica-ethiopie-yirgacheffe-bio-250g',
    categoryId: 'origines',
    subcategoryId: 'ethiopie',
    torrefaction: 'blonde',
    certifications: ['bio', 'equitable'],
    price: 14.90,
    weight: '250g',
    origin: 'Éthiopie, région Yirgacheffe',
    altitude: '1800-2200m',
    process: 'Lavé',
    variety: 'Heirloom Arabica',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80',
    tastingNotes: ['jasmin', 'agrumes', 'miel', 'bergamote'],
    description: `Le café Yirgacheffe est considéré par les experts comme l'un des meilleurs cafés au monde. Cultivé dans les hauts plateaux éthiopiens à plus de 1800 mètres d'altitude, dans la région qui est le berceau historique du café Arabica, ce grain d'exception dévoile une complexité aromatique rarement égalée.

Notre sélection Yirgacheffe Bio est produite par la coopérative Konga, regroupant 286 petits producteurs qui cultivent leurs caféiers à l'ombre de la forêt naturelle, sans intrant chimique. Chaque cerise est récoltée à la main et triée manuellement, garantissant une qualité optimale du grain.

La torréfaction blonde préserve les arômes floraux caractéristiques de cette origine : jasmin, bergamote, fleur d'oranger. En bouche, vous découvrirez une acidité vive et élégante rappelant les agrumes (citron Meyer, mandarine), une douceur de miel et une finale persistante.`,
    brewing: 'Idéal pour filtre (V60, Chemex, Aeropress). Température : 92°C. Mouture fine à médium.',
    metaTitle: 'Café Arabica Éthiopie Yirgacheffe Bio 250g – Notes Florales | Grains & Origines',
    metaDescription: 'Café Yirgacheffe Éthiopie certifié Bio et Commerce Équitable. Notes de jasmin, agrumes et miel. Torréfaction artisanale. 14,90€ les 250g. Livraison offerte dès 35€.',
    seoKeywords: ['café yirgacheffe', 'café éthiopie bio', 'arabica ethiopie', 'café de spécialité bio']
  },
  {
    id: 2,
    name: 'Café Colombie Huila Single Origin',
    slug: 'colombie-huila-single-origin-250g',
    categoryId: 'origines',
    subcategoryId: 'colombie',
    torrefaction: 'medium',
    certifications: ['equitable'],
    price: 13.50,
    weight: '250g',
    origin: 'Colombie, département de Huila',
    altitude: '1500-1900m',
    process: 'Lavé',
    variety: 'Castillo, Caturra',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
    tastingNotes: ['caramel', 'fruits rouges', 'noisette', 'cacao'],
    description: `Le département de Huila, au sud-ouest de la Colombie, est réputé pour produire certains des meilleurs cafés du pays. Ses terres volcaniques riches, son microclimat humide et ses variations de température entre le jour et la nuit créent des conditions idéales pour développer des saveurs complexes.

Ce café Single Origin provient d'une finca familiale gérée par Carlos Arturo Muñoz, caféiculteur de troisième génération. Les cerises sont récoltées sélectivement à la main et transformées par voie humide (procédé lavé), ce qui confère au café sa clarté et son acidité vive caractéristiques.

En tasse, ce Huila révèle un équilibre remarquable : des notes de caramel fondant, une pointe de fruits rouges (cerise, framboise), une douceur de noisette torréfiée et une finale cacao légèrement boisée.`,
    brewing: 'Excellent en espresso, cafetière à piston et filtre. Température : 93°C.',
    metaTitle: 'Café Colombie Huila Single Origin 250g | Grains & Origines',
    metaDescription: 'Café Single Origin Colombie Huila. Notes de caramel, fruits rouges et noisette. Torréfaction médium artisanale. Producteur identifié. 13,50€.',
    seoKeywords: ['café colombie huila', 'single origin colombie', 'café colombien', 'café de spécialité colombie']
  },
  {
    id: 3,
    name: 'Espresso Brésil Cerrado Mineiro',
    slug: 'espresso-bresil-cerrado-mineiro-500g',
    categoryId: 'origines',
    subcategoryId: 'bresil',
    torrefaction: 'foncee',
    certifications: [],
    price: 16.90,
    weight: '500g',
    origin: 'Brésil, Cerrado Mineiro',
    altitude: '900-1100m',
    process: 'Nature (séchage au soleil)',
    variety: 'Yellow Bourbon, Catuai',
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    tastingNotes: ['chocolat noir', 'noisette', 'caramel', 'vanille'],
    description: `Le Cerrado Mineiro, première Indication Géographique du café brésilien, produit des cafés d'une régularité et d'une douceur remarquables. Son altitude modérée (900-1100m) et son séchage au soleil (procédé nature) donnent au grain un profil sucré, rond et peu acide, idéal pour l'espresso.

Ce blend d'espresso associe des Yellow Bourbon (douceur, notes lactées) et des Catuai (corps, chocolat) soigneusement sélectionnés chez deux propriétés certifiées Cerrado Mineiro. La torréfaction foncée développe les arômes de chocolat noir et de caramel sans amertume excessive.

Parfait pour la machine à espresso maison ou professionnelle, il donne également d'excellents résultats en cafetière italienne (Moka).`,
    brewing: 'Espresso : 9 bars, 25-30s. Moka : feu doux. Mouture fine.',
    metaTitle: 'Espresso Brésil Cerrado Mineiro 500g – Chocolat & Noisette | Grains & Origines',
    metaDescription: 'Café espresso Brésil Cerrado Mineiro 500g. Notes de chocolat noir, noisette et caramel. Torréfaction foncée artisanale. Idéal machine espresso. 16,90€.',
    seoKeywords: ['espresso brésil', 'café brésil cerrado', 'café espresso maison', 'café grains espresso']
  },
  {
    id: 4,
    name: 'Café Guatemala Antigua Volcan',
    slug: 'guatemala-antigua-volcan-250g',
    categoryId: 'origines',
    subcategoryId: 'guatemala',
    torrefaction: 'medium',
    certifications: ['bio'],
    price: 15.20,
    weight: '250g',
    origin: 'Guatemala, Antigua',
    altitude: '1500-1700m',
    process: 'Lavé',
    variety: 'Bourbon, Caturra',
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    tastingNotes: ['cacao', 'tabac doux', 'épices', 'fruit sec'],
    description: `Antigua, vallée encaissée entre trois volcans actifs (Agua, Fuego, Acatenango), jouit d'un microclimat exceptionnel. Les cendres volcaniques enrichissent naturellement le sol, et les variations thermiques marquées entre le jour (chaud) et la nuit (fraîche) ralentissent la maturation des cerises, concentrant les sucres et les arômes.

Ce café Bio d'Antigua est cultivé sur la finca San José, à 1600 mètres d'altitude. Le caféiculteur Pablo Méndez pratique l'agroforesterie : les caféiers poussent sous un couvert d'arbres fruitiers et de bananiers qui régulent l'humidité et favorisent la biodiversité.

En tasse, le Guatemala Antigua révèle une complexité intrigante : cacao amer de qualité, épices douces (cannelle, muscade), une pointe de tabac blond et une finale longue sur les fruits secs.`,
    brewing: 'Filtre et espresso. Révèle sa complexité en V60. Température : 94°C.',
    metaTitle: 'Café Guatemala Antigua Volcan Bio 250g | Grains & Origines',
    metaDescription: 'Café Bio Guatemala Antigua, cultivé en agroforesterie à 1600m. Notes de cacao, épices et tabac doux. 15,20€. Découvrez les terroirs volcaniques d\'Antigua.',
    seoKeywords: ['café guatemala antigua', 'café guatemala bio', 'café volcanique', 'arabica guatemala']
  },
  {
    id: 5,
    name: 'Café Éthiopie Sidama Natural',
    slug: 'ethiopie-sidama-natural-250g',
    categoryId: 'origines',
    subcategoryId: 'ethiopie',
    torrefaction: 'blonde',
    certifications: ['bio'],
    price: 16.50,
    weight: '250g',
    origin: 'Éthiopie, zone Sidama',
    altitude: '1700-2000m',
    process: 'Nature',
    variety: 'Heirloom',
    rating: 4.9,
    reviewCount: 48,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    tastingNotes: ['myrtille', 'fraise', 'chocolat au lait', 'floral'],
    description: `Le Sidama est l'une des zones de production les plus réputées d'Éthiopie, produisant des cafés naturels (séchage des cerises entières au soleil) d'une intensité fruitée exceptionnelle. Ce procédé de traitement "nature" permet à la pulpe sucrée de la cerise de fermenter autour du grain, lui conférant des notes de fruits rouges très prononcées.

Produit par la station de lavage Bensa, ce café réunit des petits producteurs de la communauté locale. Les cerises sont séchées sur des lits africains surélevés pendant 3 à 4 semaines, retournées régulièrement pour assurer un séchage homogène.

En tasse, c'est une explosion de fruits : myrtille, fraise, cerise. Une douceur de chocolat au lait en milieu de bouche, et un final floral persistant. L'un des profils les plus expressifs de notre sélection.`,
    brewing: 'Cold brew excellent. Filtre V60 ou Chemex. Éviter l\'espresso pour préserver les arômes fruités.',
    metaTitle: 'Café Éthiopie Sidama Natural Bio 250g – Myrtille & Fraise | Grains & Origines',
    metaDescription: 'Café Natural Éthiopie Sidama Bio. Notes intenses de myrtille, fraise et chocolat au lait. Procédé nature. 16,50€. Actuellement en rupture de stock.',
    seoKeywords: ['café sidama', 'café ethiopie natural', 'café fruité', 'natural process ethiopie']
  },
  {
    id: 6,
    name: 'Café Colombie Nariño Décaféiné',
    slug: 'colombie-narino-decafeine-250g',
    categoryId: 'origines',
    subcategoryId: 'colombie',
    torrefaction: 'medium',
    certifications: ['bio', 'equitable'],
    price: 15.90,
    weight: '250g',
    origin: 'Colombie, département de Nariño',
    altitude: '1800-2300m',
    process: 'Lavé – Décaféiné eau suisse',
    variety: 'Castillo',
    rating: 4.4,
    reviewCount: 37,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    tastingNotes: ['caramel', 'pomme', 'nougat', 'doux'],
    description: `Pour ceux qui souhaitent profiter du plaisir du café sans la caféine, notre Nariño Décaféiné est une révélation. Cultivé dans le département de Nariño, l'une des zones les plus élevées de Colombie (jusqu'à 2300m), ce café développe des arômes complexes malgré l'absence de caféine.

La décaféination est réalisée par le procédé à l'eau suisse (Swiss Water Process), entièrement naturel, sans solvant chimique. Ce procédé préserve les arômes du café tout en retirant plus de 99,9% de la caféine. Certifié Bio et Commerce Équitable.

En tasse : une douceur de caramel, une légèreté rappelant la pomme verte, une texture crémeuse et une finale sur le nougat. Idéal après le repas ou pour les personnes sensibles à la caféine.`,
    brewing: 'Idéal en filtre ou espresso décaféiné. Parfait en fin de journée.',
    metaTitle: 'Café Décaféiné Colombie Nariño Bio 250g | Grains & Origines',
    metaDescription: 'Café décaféiné Colombie Nariño Bio et Équitable. Décaféination Swiss Water Process naturelle. Notes de caramel et pomme. 15,90€.',
    seoKeywords: ['café décaféiné bio', 'décaféiné colombie', 'swiss water process', 'café sans caféine bio']
  }
]

export function getProductsBySubcategory(subcategoryId) {
  return products.filter(p => p.subcategoryId === subcategoryId)
}

export function getProductsByCategory(categoryId) {
  return products.filter(p => p.categoryId === categoryId)
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug)
}

export function getSubcategoryBySlug(catSlug, subSlug) {
  const cat = getCategoryBySlug(catSlug)
  return cat?.subcategories.find(s => s.slug === subSlug)
}

export function getSubcategoryProducts(subSlug) {
  const sub = categories.flatMap(c => c.subcategories).find(s => s.slug === subSlug)
  if (!sub) return []
  return products.filter(p => p.subcategoryId === sub.id)
}

export function getAllSubcategory(subSlug) {
  for (const cat of categories) {
    const sub = cat.subcategories.find(s => s.slug === subSlug)
    if (sub) return { category: cat, subcategory: sub }
  }
  return null
}
