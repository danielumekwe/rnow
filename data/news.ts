import { siteImages } from "@/lib/images";

export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

/** Placeholder editorial content — replace with real articles before launch. */
export const newsArticles: NewsArticle[] = [
  {
    slug: "strengthening-industrial-supply-chains",
    category: "Supply Chain",
    date: "2026-08-14",
    title: "Strengthening Industrial Supply Chains in Uncertain Markets",
    excerpt:
      "How operators are working with suppliers to build more resilient sourcing strategies for critical industrial products.",
    image: siteImages.news.article1,
  },
  {
    slug: "energy-sector-sourcing-trends",
    category: "Energy",
    date: "2026-07-02",
    title: "What's Driving Sourcing Decisions Across the Energy Sector",
    excerpt:
      "A look at the sourcing priorities shaping procurement teams as energy infrastructure projects scale up.",
    image: siteImages.news.article2,
  },
  {
    slug: "technical-support-reduces-downtime",
    category: "Operations",
    date: "2026-05-21",
    title: "How Technical Product Support Helps Reduce Operational Downtime",
    excerpt:
      "Getting the right product specification the first time matters — here's how technical support teams help.",
    image: siteImages.news.article3,
  },
];
