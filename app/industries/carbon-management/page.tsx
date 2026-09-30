import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CarbonProblem from "@/components/carbon/CarbonProblem";
import CarbonFeatures from "@/components/carbon/CarbonFeatures";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Carbon Management and Decarbonization",
  description:
    "RNOW supports emissions reduction with vapor recovery units, instrument air compressor skids, low-emissions products and sustainably manufactured pipe, valves and fittings.",
};

export default function CarbonManagementPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Carbon Management & Decarbonization" },
        ]}
        title="Carbon Management and Decarbonization"
        subtitle="Empowering Operations with Sustainable Practices"
        description="RNOW is committed to supporting your efforts to minimize environmental impact and control the emission of methane and CO2 greenhouse gases (GHG) in your operations. We utilize our catalog of low-emissions products and custom production equipment packages to help you monitor and reduce your carbon footprint and meet your scope 1 GHG emissions targets."
        image={siteImages.carbonPage.hero}
        imageAlt="Industrial facility supplied by RNOW"
        ctaLabel="Contact Sales"
        ctaHref="/contact"
      />
      <CarbonProblem />
      <CarbonFeatures />
    </>
  );
}
