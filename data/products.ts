import { siteImages } from "@/lib/images";

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "pipes-fittings",
    name: "Pipes & Fittings",
    description: "A broad range of pipe, fittings and flow products for industrial systems.",
    image: siteImages.products.pipes,
  },
  {
    slug: "valves",
    name: "Valves",
    description: "Valve solutions selected for demanding flow control applications.",
    image: siteImages.products.valves,
  },
  {
    slug: "pumps",
    name: "Pumps",
    description: "Pump products supporting fluid handling across industrial operations.",
    image: siteImages.products.pumps,
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment",
    description: "Equipment sourced to support demanding operational environments.",
    image: siteImages.products.industrialEquipment,
  },
  {
    slug: "tools-mro",
    name: "Tools & MRO",
    description: "Maintenance, repair and operations supplies to keep crews working.",
    image: siteImages.products.toolsMro,
  },
  {
    slug: "electrical",
    name: "Electrical Products",
    description: "Electrical products and components for industrial applications.",
    image: siteImages.products.electrical,
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    description: "Safety products chosen to support secure industrial operations.",
    image: siteImages.products.safety,
  },
  {
    slug: "fasteners-hardware",
    name: "Fasteners & Hardware",
    description: "Fasteners and hardware supplied reliably at the volume you need.",
    image: siteImages.products.fasteners,
  },
];
