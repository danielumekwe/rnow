import type { LucideIcon } from "lucide-react";
import { Waypoints, Drill, ToolCase, Zap } from "lucide-react";

export type ProductTile = {
  icon: LucideIcon;
  title: string;
  tone: "accent" | "accentDark" | "ink800" | "ink";
  href: string;
};

export const productTiles: ProductTile[] = [
  {
    icon: Waypoints,
    title: "Pipe, Valves, Fittings & Flanges",
    tone: "accent",
    href: "/products-and-services/pipes-fittings",
  },
  {
    icon: Drill,
    title: "Pumps, Production & Drilling",
    tone: "accentDark",
    href: "/products-and-services/pumps",
  },
  {
    icon: ToolCase,
    title: "Tools, Industrial Supplies & MRO Consumables",
    tone: "ink800",
    href: "/products-and-services/tools-mro",
  },
  {
    icon: Zap,
    title: "Electrical Cable & Products",
    tone: "ink",
    href: "/products-and-services/electrical-products",
  },
];
