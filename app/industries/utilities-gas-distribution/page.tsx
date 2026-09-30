import type { Metadata } from "next";
import UtilitiesHero from "@/components/utilities/UtilitiesHero";
import UtilitiesWhy from "@/components/utilities/UtilitiesWhy";
import UtilitiesProducts from "@/components/utilities/UtilitiesProducts";
import UtilitiesBenefits from "@/components/utilities/UtilitiesBenefits";
import UtilitiesClosing from "@/components/utilities/UtilitiesClosing";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Downstream Pipeline and Gas Distribution Utilities",
  description:
    "RNOW supplies pipe, valves, fittings, fabricated products, safety equipment and supply chain solutions for downstream gas utility and distribution operations.",
};

export default function UtilitiesGasDistributionPage() {
  return (
    <>
      <UtilitiesHero />
      <UtilitiesWhy />
      <UtilitiesProducts />
      <ContactCTA label="Get in touch with a customer representative now" />
      <UtilitiesBenefits />
      <UtilitiesClosing />
    </>
  );
}
