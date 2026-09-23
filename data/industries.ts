import { siteImages } from "@/lib/images";

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  ctaLabel: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    headline: "Optimize Your Oil & Gas Operations",
    description: "Industrial supply solutions for oil and gas operations.",
    ctaLabel: "Enhance Operations Now",
    image: siteImages.industries.oilGas,
  },
  {
    slug: "energy",
    name: "Energy",
    headline: "Powering Reliable Energy Operations",
    description: "Products and sourcing support for energy infrastructure.",
    ctaLabel: "Explore Energy Solutions",
    image: siteImages.industries.energy,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    headline: "Supporting Efficient Manufacturing",
    description: "Reliable industrial products for manufacturing environments.",
    ctaLabel: "Discover Manufacturing Support",
    image: siteImages.industries.manufacturing,
  },
  {
    slug: "construction",
    name: "Construction",
    headline: "Built for Demanding Construction Projects",
    description: "Supply solutions supporting construction projects and contractors.",
    ctaLabel: "See Construction Solutions",
    image: siteImages.industries.construction,
  },
  {
    slug: "marine",
    name: "Marine",
    headline: "Reliable Supply for Marine Operations",
    description: "Industrial products for marine and offshore applications.",
    ctaLabel: "Explore Marine Solutions",
    image: siteImages.industries.marine,
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    headline: "Powering Infrastructure That Lasts",
    description: "Products supporting infrastructure development and maintenance.",
    ctaLabel: "Explore Infrastructure Solutions",
    image: siteImages.industries.infrastructure,
  },
];
