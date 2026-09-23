import { siteImages } from "@/lib/images";

export type NewsArticle = {
  slug: string;
  label: string;
  title: string;
  linkText: string;
  image: string;
  imageFit?: "cover" | "contain";
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "2025-sustainability-report",
    label: "Feature",
    title: "RNOW Publishes 2025 Sustainability Report",
    linkText: "Explore RNOW's sustainability strategy and progress in 2025",
    image: siteImages.news.sustainabilityReport,
    imageFit: "cover",
  },
  {
    slug: "wholesaler-magazine-2026-wholesaling-100",
    label: "Feature",
    title: "RNOW Named to Wholesaler Magazine's 2026 Wholesaling 100",
    linkText: "Find out how RNOW ranked as a top PHCP-PVF distributor",
    image: siteImages.news.wholesalerMagazine,
    imageFit: "contain",
  },
  {
    slug: "mdm-2026-top-distributors-list",
    label: "Feature",
    title: "RNOW Named to MDM 2026 Top Distributors List",
    linkText: "Read how RNOW ranked on this year's list of top suppliers",
    image: siteImages.news.mdmTopDistributors,
    imageFit: "contain",
  },
  {
    slug: "2026-supply-house-times-premier-150",
    label: "Feature",
    title: "RNOW Ranked in 2026 Supply House Times Premier 150",
    linkText: "Learn how RNOW ranked against other top distributors",
    image: siteImages.news.supplyHouseTimesPremier150,
    imageFit: "contain",
  },
];
