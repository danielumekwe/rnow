import type { Metadata } from "next";
import SupplyChainHero from "@/components/supply-chain/SupplyChainHero";
import SupplyChainBenefits from "@/components/supply-chain/SupplyChainBenefits";
import SupplyChainFlow from "@/components/supply-chain/SupplyChainFlow";
import SupplyChainMethodology from "@/components/supply-chain/SupplyChainMethodology";
import SupplyChainOfferings from "@/components/supply-chain/SupplyChainOfferings";
import SupplyChainReady from "@/components/supply-chain/SupplyChainReady";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Supply Chain Material Management",
  description:
    "RNOW supply chain and materials management solutions — inventory visibility, managed warehousing, sourcing and procurement for energy and industrial operations.",
};

export default function SupplyChainManagementPage() {
  return (
    <>
      <SupplyChainHero />
      <SupplyChainBenefits />
      <SupplyChainFlow />
      <SupplyChainMethodology />
      <SupplyChainOfferings />
      <SupplyChainReady />
      <ContactCTA label="Get in touch with a supply chain management expert" />
    </>
  );
}
