import type { LucideIcon } from "lucide-react";
import { ArrowLeftRight, PencilRuler, Server } from "lucide-react";

export type SolutionOffering = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const solutionOfferings: SolutionOffering[] = [
  {
    label: "Supply Chain Management",
    href: "/solutions/supply-chain-management",
    icon: ArrowLeftRight,
  },
  {
    label: "Engineering, Design & Fabrication",
    href: "/solutions/engineering-design-fabrication",
    icon: PencilRuler,
  },
  {
    label: "Digital Solutions & Technology",
    href: "/solutions#digital-solutions-technology",
    icon: Server,
  },
];
