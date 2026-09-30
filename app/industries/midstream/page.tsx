import type { Metadata } from "next";
import MidstreamHero from "@/components/midstream/MidstreamHero";
import MidstreamExpert from "@/components/midstream/MidstreamExpert";
import MidstreamProducts from "@/components/midstream/MidstreamProducts";
import MidstreamService from "@/components/midstream/MidstreamService";
import MidstreamStandsOut from "@/components/midstream/MidstreamStandsOut";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { midstreamFaqs } from "@/data/midstream";

export const metadata: Metadata = {
  title: "Midstream Oil and Gas Solutions",
  description:
    "RNOW supplies PVF, pumps, production equipment and instrumentation for midstream pipeline and transmission projects, backed by project management and field service.",
};

export default function MidstreamPage() {
  return (
    <>
      <MidstreamHero />
      <MidstreamExpert />
      <MidstreamProducts />
      <MidstreamService />
      <MidstreamStandsOut />
      <ContactCTA label="Optimize your midstream operations with a RNOW expert" />
      <FaqAccordion faqs={midstreamFaqs} />
    </>
  );
}
