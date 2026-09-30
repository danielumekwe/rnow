import type { Metadata } from "next";
import EngineeringHero from "@/components/engineering/EngineeringHero";
import EngineeringWhy from "@/components/engineering/EngineeringWhy";
import EngineeringQuote from "@/components/engineering/EngineeringQuote";
import EngineeringCapabilities from "@/components/engineering/EngineeringCapabilities";
import EngineeringExcellence from "@/components/engineering/EngineeringExcellence";
import EngineeringClosing from "@/components/engineering/EngineeringClosing";

export const metadata: Metadata = {
  title: "Engineering, Design & Fabrication",
  description:
    "RNOW provides end-to-end engineering, design, fabrication, testing and project execution for custom process equipment, pressure vessels and modular systems.",
};

export default function EngineeringDesignFabricationPage() {
  return (
    <>
      <EngineeringHero />
      <EngineeringWhy />
      <EngineeringQuote>
        Custom fabrication services that keep operations Running Stronger™.
      </EngineeringQuote>
      <EngineeringCapabilities />
      <EngineeringQuote>
        Built to your specifications. Fabricated for performance. Designed to
        keep your operation Running Stronger™.
      </EngineeringQuote>
      <EngineeringExcellence />
      <EngineeringClosing />
    </>
  );
}
