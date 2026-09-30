import type { Metadata } from "next";
import IndustrialSuppliesHero from "@/components/industrial-supplies/IndustrialSuppliesHero";
import IndustrialSuppliesGrid from "@/components/industrial-supplies/IndustrialSuppliesGrid";
import IndustrialSuppliesIntro from "@/components/industrial-supplies/IndustrialSuppliesIntro";
import IndustrialSuppliesResources from "@/components/industrial-supplies/IndustrialSuppliesResources";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { industrialSupplyFaqs } from "@/data/industrialSupplies";

export const metadata: Metadata = {
  title: "Industrial and Facility Supplies",
  description:
    "RNOW supplies industrial MRO and facility supplies — tools, adhesives, batteries, HVAC, chemicals, lifting, lubricants and more.",
};

export default function IndustrialSuppliesPage() {
  return (
    <>
      <IndustrialSuppliesHero />
      <IndustrialSuppliesGrid />
      <IndustrialSuppliesIntro />
      <ContactCTA label="Contact our experts now to elevate your business" />
      <FaqAccordion faqs={industrialSupplyFaqs} />
      <IndustrialSuppliesResources />
    </>
  );
}
