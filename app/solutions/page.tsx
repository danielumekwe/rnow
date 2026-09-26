import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import SolutionsTailored from "@/components/solutions/SolutionsTailored";
import SolutionsSupplyChain from "@/components/solutions/SolutionsSupplyChain";
import SolutionsPartner from "@/components/solutions/SolutionsPartner";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Integrated industrial solutions from RNOW — digital technology, engineering and fabrication, safety services, supply chain management and valve automation.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsTailored />
      <SolutionsSupplyChain />
      <SolutionsPartner />
    </>
  );
}
