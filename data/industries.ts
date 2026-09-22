import { siteImages } from "@/lib/images";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    description: "Industrial supply solutions for oil and gas operations.",
    image: siteImages.industries.oilGas,
  },
  {
    slug: "energy",
    name: "Energy",
    description: "Products and sourcing support for energy infrastructure.",
    image: siteImages.industries.energy,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Reliable industrial products for manufacturing environments.",
    image: siteImages.industries.manufacturing,
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Supply solutions supporting construction projects and contractors.",
    image: siteImages.industries.construction,
  },
  {
    slug: "marine",
    name: "Marine",
    description: "Industrial products for marine and offshore applications.",
    image: siteImages.industries.marine,
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    description: "Products supporting infrastructure development and maintenance.",
    image: siteImages.industries.infrastructure,
  },
];
