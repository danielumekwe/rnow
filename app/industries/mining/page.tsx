import type { Metadata } from "next";
import MiningHero from "@/components/mining/MiningHero";
import MiningOfferings from "@/components/mining/MiningOfferings";
import MiningFeatured from "@/components/mining/MiningFeatured";
import MiningSectors from "@/components/mining/MiningSectors";
import MiningSupport from "@/components/mining/MiningSupport";
import MiningSpecialized from "@/components/mining/MiningSpecialized";
import MiningWhy from "@/components/mining/MiningWhy";
import MiningPartner from "@/components/mining/MiningPartner";

export const metadata: Metadata = {
  title: "Mining Industry Solutions",
  description:
    "RNOW supplies PVF, pumps, seals, electrical, safety and industrial supplies with 24/7 field service for mining operations across North America and Australia.",
};

export default function MiningPage() {
  return (
    <>
      <MiningHero />
      <MiningOfferings />
      <MiningFeatured />
      <MiningSectors />
      <MiningSupport />
      <MiningSpecialized />
      <MiningWhy />
      <MiningPartner />
    </>
  );
}
