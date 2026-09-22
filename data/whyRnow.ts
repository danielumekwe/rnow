import type { LucideIcon } from "lucide-react";
import { PackageCheck, ShieldCheck, Headset, Wrench } from "lucide-react";

export type WhyRnowPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyRnowPoints: WhyRnowPoint[] = [
  {
    icon: PackageCheck,
    title: "Reliable Supply",
    description: "Products sourced with reliability and operational continuity in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial Expertise",
    description: "Solutions designed around demanding industrial environments.",
  },
  {
    icon: Headset,
    title: "Responsive Service",
    description: "A team focused on helping customers find and obtain what they need.",
  },
  {
    icon: Wrench,
    title: "Technical Know-How",
    description: "Product guidance grounded in real operational experience.",
  },
];
