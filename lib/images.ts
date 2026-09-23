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
  featured: "/images/products/featured-coiled-line-pipe.png",

  finalCta: unsplash("1565008447742-97f6f38c985c", { width: 2400 }),

  ecommerceCta: unsplash("1524230507669-5ff97982bb5e", { width: 2000 }),

  industries: {
    oilGas: unsplash("1516937941344-00b4e0337589", { width: 1400 }),
    energy: unsplash("1509391366360-2e959784a276", { width: 1400 }),
    manufacturing: unsplash("1581092160607-ee22621dd758", { width: 1400 }),
    construction: unsplash("1541888946425-d81bb19240f5", { width: 1400 }),
    marine: unsplash("1578575437130-527eed3abbec", { width: 1400 }),
    infrastructure: unsplash("1449034446853-66c86144b0ad", { width: 1400 }),
  },

  products: {
    pipes: unsplash("1516937941344-00b4e0337589", { width: 1200 }),
    valves: unsplash("1517646287270-a5a9ca602e5c", { width: 1200 }),
    pumps: unsplash("1581091226825-a6a2a5aee158", { width: 1200 }),
    industrialEquipment: unsplash("1581092160607-ee22621dd758", { width: 1200 }),
    toolsMro: unsplash("1572981779307-38b8cabb2407", { width: 1200 }),
    electrical: unsplash("1621905251189-08b45d6a269e", { width: 1200 }),
    safety: unsplash("1541888946425-d81bb19240f5", { width: 1200 }),
    fasteners: unsplash("1530124566582-a618bc2615dc", { width: 1200 }),
  },

  solutions: {
    procurement: unsplash("1517502884422-41eaead166d4", { width: 1600 }),
    supplyChain: unsplash("1494412574643-ff11b0a5c1c3", { width: 1600 }),
    projectSupply: unsplash("1565008447742-97f6f38c985c", { width: 1600 }),
    technicalSupport: unsplash("1503387837-b154d5074bd2", { width: 1600 }),
  },

  news: {
    article1: unsplash("1590496793929-36417d3117de", { width: 1200 }),
    article2: unsplash("1613665813446-82a78c468a1d", { width: 1200 }),
    article3: unsplash("1531482615713-2afd69097998", { width: 1200 }),
  },
} as const;
