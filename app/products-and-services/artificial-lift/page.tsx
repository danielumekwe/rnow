import type { Metadata } from "next";
import ArtificialLiftHero from "@/components/artificial-lift/ArtificialLiftHero";
import ArtificialLiftOfferings from "@/components/artificial-lift/ArtificialLiftOfferings";
import ArtificialLiftDistributor from "@/components/artificial-lift/ArtificialLiftDistributor";
import ArtificialLiftResources from "@/components/artificial-lift/ArtificialLiftResources";
import ArtificialLiftLocations from "@/components/artificial-lift/ArtificialLiftLocations";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { artificialLiftFaqs } from "@/data/artificialLift";

export const metadata: Metadata = {
  title: "Artificial Lift Solutions",
  description:
    "RNOW supports production operations with rod lift, progressive cavity pumps, well automation and hydraulic jet pump systems, backed by field support.",
};

export default function ArtificialLiftPage() {
  return (
    <>
      <ArtificialLiftHero />
      <ArtificialLiftOfferings />
      <ArtificialLiftDistributor />
      <ArtificialLiftResources />
      <ArtificialLiftLocations />
      <ContactCTA label="Get in touch with an artificial lift expert and optimize your production" />
      <FaqAccordion faqs={artificialLiftFaqs} />
    </>
  );
}
