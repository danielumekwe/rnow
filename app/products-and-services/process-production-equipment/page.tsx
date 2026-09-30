import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessProducts from "@/components/process/ProcessProducts";
import ProcessResources from "@/components/process/ProcessResources";

export const metadata: Metadata = {
  title: "Process and Production Equipment",
  description:
    "RNOW engineers and fabricates process and production equipment — LACT units, VRUs, pressure vessels, gas measurement and water systems.",
};

export default function ProcessProductionPage() {
  return (
    <>
      <ProcessHero />
      <ProcessProducts />
      <ProcessResources />
    </>
  );
}
