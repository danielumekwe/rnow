import type { Metadata } from "next";
import InstrumentationHero from "@/components/instrumentation/InstrumentationHero";
import InstrumentationProducts from "@/components/instrumentation/InstrumentationProducts";
import InstrumentationOptimize from "@/components/instrumentation/InstrumentationOptimize";
import InstrumentationPartners from "@/components/instrumentation/InstrumentationPartners";

export const metadata: Metadata = {
  title: "Instrumentation and Measurement",
  description:
    "RNOW offers field-proven gauges, sensors, fittings, valves and hose assemblies for measuring pressure, temperature and flow.",
};

export default function InstrumentationPage() {
  return (
    <>
      <InstrumentationHero />
      <InstrumentationProducts />
      <InstrumentationOptimize />
      <InstrumentationPartners />
    </>
  );
}
