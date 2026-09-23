import type { LucideIcon } from "lucide-react";
import { Waypoints, Drill, ToolCase, Zap } from "lucide-react";

export type ProductTile = {
  icon: LucideIcon;
  title: string;
  tone: "accent" | "accentDark" | "ink800" | "ink";
};

export const productTiles: ProductTile[] = [
  {
    icon: Waypoints,
    title: "Pipe, Valves, Fittings & Flanges",
    tone: "accent",
  },
  {
    icon: Drill,
    title: "Pumps, Production & Drilling",
    tone: "accentDark",
  },
  {
    icon: ToolCase,
    title: "Tools, Industrial Supplies & MRO Consumables",
    tone: "ink800",
  },
  {
    icon: Zap,
    title: "Electrical Cable & Products",
    tone: "ink",
  },
];
