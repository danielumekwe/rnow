import type { Metadata } from "next";
import CompressorsHero from "@/components/compressors/CompressorsHero";
import CompressorsOfferings from "@/components/compressors/CompressorsOfferings";
import CompressorsFeatures from "@/components/compressors/CompressorsFeatures";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { compressorFaqs } from "@/data/compressorFaqs";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Air Compressors, Dryers and Blowers",
  description:
    "RNOW provides quality air compressors, dryers and blowers — reliable industrial air solutions and air treatment systems backed by expert guidance.",
};

export default function CompressorsPage() {
  return (
    <>
      <CompressorsHero />
      <CompressorsOfferings />
      <ContactCTA
        eyebrow="RUN STRONGER WITH RNOW"
        label="Get in touch for personalized solutions and elevate your air quality today"
      />
      <CompressorsFeatures />
      <FaqAccordion faqs={compressorFaqs} />
    </>
  );
}
