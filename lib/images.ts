/**
 * Centralized image configuration for RNOW Industrial Supply.
 *
 * TEMPORARY: every URL below points to a licensed Unsplash reference photo
 * used only to keep the site looking complete during development. Before
 * production launch, replace these with RNOW-owned or properly licensed
 * imagery — swap the value here and every component that imports from this
 * file updates automatically. Nothing outside this file should ever
 * hardcode an image URL.
 *
 * To swap an image: change the path/URL for that key. Local files should
 * live under /public/images/... following the same key structure.
 */

type UnsplashOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

/** Builds a sized/optimized Unsplash CDN URL from a bare photo id. */
function unsplash(photoId: string, { width = 1600, quality = 75 }: UnsplashOptions = {}) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const siteImages = {
  // Local, RNOW-provided photo — not a temporary reference image.
  hero: "/images/hero/hero-team.png",

  intro: unsplash("1581091226825-a6a2a5aee158", { width: 1800 }),

  about: unsplash("1560179707-f14e90ef3623", { width: 1800 }),

  // Local, RNOW-provided photo — not a temporary reference image.
  aboutHero: "/hero2.png",

  industriesPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/industries/hero.png",
    benefits: "/images/industries/benefits.png",
    technicalSupport: "/images/industries/technical-support.png",
    closing: "/images/industries/closing.png",

    productGrid: [
      unsplash("1695060601967-7fb135446f67", { width: 900 }), // pumpjacks
      unsplash("1780034766246-68bab7c0ce00", { width: 900 }), // valve actuator
      unsplash("1774019883172-a89730a86500", { width: 900 }), // industrial valve
      unsplash("1639244315109-b6e39e646181", { width: 900 }), // pressure gauge & tank
      unsplash("1513827574967-e763dd0bc329", { width: 900 }), // pressure gauge close-up
      unsplash("1643550488350-c8a3b36e2e56", { width: 900 }), // drill bits
      unsplash("1705579609022-a7a2266b6226", { width: 900 }), // PPE / safety vest
      unsplash("1757573538081-c469f75cdd7a", { width: 900 }), // industrial pipes
      unsplash("1745921204896-c2011440a4e2", { width: 900 }), // plant machinery & gauges
    ],
  },

  solutionsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/solutions-page/hero.png",
    tailored: "/images/solutions/oilfield-team.png",
    supplyChain: "/images/solutions/team-tablet.png",
    partner: "/images/solutions-page/partner.png",
  },

  aboutOverview: {
    // Local, RNOW-provided photos — not temporary reference images.
    visionCollage: "/images/about/vision-collage.png",
    guidingPrinciples: "/images/hero/hero-team.png",
    coreValues: "/images/solutions/oilfield-team.png",
    whatWeOffer: "/images/about/what-we-offer.png",
    brands: "/images/about/brands.png",
  },

  // Local, RNOW-provided photo — not a temporary reference image.
  featured: "/images/products/featured-coiled-line-pipe.png",

  compressorsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/air%20compressor/Air-Compressor-Dryer.jpg",
    compressorsAndDryers: "/images/air%20compressor/Air-Compressors-and-Dryers-thumbnail.webp",
    blowers: "/images/air%20compressor/ac-blower-thumbnail.webp",
    features: "/images/air%20compressor/air-compressor.webp",
  },

  artificialLiftPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/air%20lift/Artificial_Lift_Systems.webp",
    rodLift: "/images/air%20lift/Artificial_Lift_Thumbnails.webp",
    pcp: "/images/air%20lift/ALS_PC_pump_thumbnail.jpg",
    wellAutomation: "/images/air%20lift/well-automation-control-thumbnail.jpg",
    flexFlow: "/images/air%20lift/Flex-Flow-Hydraulic-Jet-Pump.webp",
    distributor: "/images/air%20lift/Artificial-lift_truck-pumpjack_thumb.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  drillingPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Drilling%20%26%20Completions/Drilling_and_completions_thumbnail.webp",
    oemSupplies: "/images/Drilling%20%26%20Completions/drilling-products-thumbnail.webp",
    filtration: "/images/Drilling%20%26%20Completions/puradyn-thumbnail.webp",
    wellCompletion: "/images/Drilling%20%26%20Completions/Clean_outs_and_drill_outs_thumb.jpg",
    partner: "/images/Drilling%20%26%20Completions/Drilling-Consumables-Product-Box.jpg",
    inventory: "/images/solutions/team-tablet.png",
    procurement: "/images/software.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  electricalPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Electrical/Electrical-thumbnail.jpg",
    capitalProject: "/images/industries/technical-support.png",
    powerService: "/images/industries/benefits.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  industrialSuppliesPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Industrial%20%26%20Facilities%20Supplies/Industrial-and-Facilities-Supplies-Thumbnail.webp",
    resources: "/images/air%20lift/resources.jpg",
  },

  instrumentationPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_thumb.webp",
    gauges: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_gauges_thumb.webp",
    fittings: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_fittings_thumb.webp",
    process: "/images/Instrumentation%20and%20Measurement/Crestwood-LACT-1420000014_08.webp",
  },

  paintsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Paints%20and%20Coatings/paint-and-coatings-thumbnail.webp",
    coatings: "/images/Paints%20and%20Coatings/HP_coatings_thumb.webp",
    stains: "/images/Paints%20and%20Coatings/Paints_and_stains_thumb.webp",
    equipment: "/images/Paints%20and%20Coatings/Painting_equipment_thumb.webp",
    tank: "/images/Paints%20and%20Coatings/painting-field-erected-tanks-from-harsh-environmental-conditions.webp",
    benefits: "/images/Paints%20and%20Coatings/CE%20Franklin%20Edmonton%20-043.webp",
  },

  pvfPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/PVF/PVF.webp",
    quality: "/images/PVF/Quality-inspection-%20with-Niton-XL2-XRF-Analyzer.webp",
    whyChoose: "/images/PVF/Pipe-fittings-flanges-inventory.webp",
  },

  powerGenerationPage: {
    // Local, RNOW-provided photo — not a temporary reference image.
    hero: "/images/Power%20Generation/power-generation-thumbnail.webp",
  },

  finalCta: unsplash("1565008447742-97f6f38c985c", { width: 2400 }),

  ecommerceCta: unsplash("1524230507669-5ff97982bb5e", { width: 2000 }),

  industries: {
    oilGas: unsplash("1516937941344-00b4e0337589", { width: 1400 }),
    energy: unsplash("1509391366360-2e959784a276", { width: 1400 }),
    manufacturing: unsplash("1581092160607-ee22621dd758", { width: 1400 }),
  },

  solutions: {
    procurement: unsplash("1517502884422-41eaead166d4", { width: 1600 }),
    supplyChain: unsplash("1494412574643-ff11b0a5c1c3", { width: 1600 }),
    projectSupply: unsplash("1565008447742-97f6f38c985c", { width: 1600 }),
    technicalSupport: unsplash("1503387837-b154d5074bd2", { width: 1600 }),

    // Local, RNOW-provided photos — not temporary reference images.
    partnerBanner: "/images/solutions/oilfield-team.png",
    gridPortrait: "/images/solutions/warehouse-portrait.png",
    gridFacility: "/images/solutions/facility-red.png",
    gridTablet: "/images/solutions/team-tablet.png",
  },

  news: {
    // Local, RNOW-provided images — not temporary reference images.
    sustainabilityReport: "/images/news/sustainability-report.png",
    wholesalerMagazine: "/images/news/wholesaler-magazine.webp",
    mdmTopDistributors: "/images/news/mdm-top-distributors.webp",
    supplyHouseTimesPremier150: "/images/news/supply-house-times-premier-150.jpg",
  },
} as const;
