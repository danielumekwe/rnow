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
