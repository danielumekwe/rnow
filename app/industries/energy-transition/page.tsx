import type { Metadata } from "next";
import EnergyHero from "@/components/energy-transition/EnergyHero";
import EnergySections from "@/components/energy-transition/EnergySections";

export const metadata: Metadata = {
  title: "Energy Transition",
  description:
    "RNOW products and services for carbon capture, low-carbon hydrogen and renewable fuels projects.",
};

export default function EnergyTransitionPage() {
  return (
    <>
      <EnergyHero />
      <EnergySections />
    </>
  );
}
