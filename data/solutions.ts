import { siteImages } from "@/lib/images";

export type Solution = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const solutions: Solution[] = [
  {
    slug: "procurement-sourcing",
    name: "Procurement & Sourcing",
    description:
      "We help customers source difficult-to-find industrial products, drawing on established supplier relationships to fill gaps in your existing supply chain.",
    image: siteImages.solutions.procurement,
  },
  {
    slug: "supply-chain-support",
    name: "Supply Chain Support",
    description:
      "From availability planning to delivery coordination, our team works to support reliable product availability so your operation stays on schedule.",
    image: siteImages.solutions.supplyChain,
  },
  {
    slug: "industrial-project-supply",
    name: "Industrial Project Supply",
    description:
      "We supply the products required for projects, scheduled maintenance and day-to-day operational requirements, sized to fit your timeline.",
    image: siteImages.solutions.projectSupply,
  },
  {
    slug: "technical-product-support",
    name: "Technical Product Support",
    description:
      "Our team helps customers identify the appropriate products for their specific technical requirements, reducing guesswork and downtime.",
    image: siteImages.solutions.technicalSupport,
  },
];
