import type { Metadata } from "next";
import PowerHero from "@/components/power/PowerHero";
import PowerOfferings from "@/components/power/PowerOfferings";

export const metadata: Metadata = {
  title: "Power Generation and Transmission",
  description:
    "RNOW supplies power generation and transmission equipment — belts, chain, couplings, hose and process equipment — for oilfield, pipeline and industrial markets.",
};

export default function PowerGenerationPage() {
  return (
    <>
      <PowerHero />
      <PowerOfferings />
    </>
  );
}
