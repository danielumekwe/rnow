import type { Metadata } from "next";
import PaintsHero from "@/components/paints/PaintsHero";
import PaintsProducts from "@/components/paints/PaintsProducts";
import PaintsProfessional from "@/components/paints/PaintsProfessional";
import PaintsBenefits from "@/components/paints/PaintsBenefits";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { paintFaqs } from "@/data/paints";

export const metadata: Metadata = {
  title: "Paints and Coatings",
  description:
    "RNOW carries industrial paints, high-performance coatings, painting equipment and supplies for every application.",
};

export default function PaintsCoatingsPage() {
  return (
    <>
      <PaintsHero />
      <PaintsProducts />
      <PaintsProfessional />
      <PaintsBenefits />
      <ContactCTA label="Get in touch with a customer representative now" />
      <FaqAccordion faqs={paintFaqs} />
    </>
  );
}
