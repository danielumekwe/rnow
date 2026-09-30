import type { Metadata } from "next";
import PumpsHero from "@/components/pumps/PumpsHero";
import PumpsProducts from "@/components/pumps/PumpsProducts";
import PumpsBenefits from "@/components/pumps/PumpsBenefits";
import PumpsExpertise from "@/components/pumps/PumpsExpertise";
import PumpsResources from "@/components/pumps/PumpsResources";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Industrial and Oilfield Pumps",
  description:
    "RNOW supplies, repairs and maintains quality industrial, oilfield and municipal pumps, rental fleets and turnkey pump packages.",
};

export default function PumpsPackagesPage() {
  return (
    <>
      <PumpsHero />
      <PumpsProducts />
      <ContactCTA label="Get in touch with a pump and compressor specialist today" />
      <PumpsBenefits />
      <PumpsExpertise />
      <PumpsResources />
    </>
  );
}
