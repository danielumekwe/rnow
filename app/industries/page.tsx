import type { Metadata } from "next";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesExpertise from "@/components/industries/IndustriesExpertise";
import IndustriesRunStronger from "@/components/industries/IndustriesRunStronger";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesProductsGrid from "@/components/industries/IndustriesProductsGrid";
import IndustriesTechnicalSupport from "@/components/industries/IndustriesTechnicalSupport";
import IndustriesClosing from "@/components/industries/IndustriesClosing";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "RNOW supports oil & gas, renewables, mining, chemical processing, water & wastewater, pharmaceutical and other industries with products, services and solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesExpertise />
      <IndustriesRunStronger />
      <IndustriesBenefits />
      <IndustriesProductsGrid />
      <IndustriesTechnicalSupport />
      <IndustriesClosing />
    </>
  );
}
