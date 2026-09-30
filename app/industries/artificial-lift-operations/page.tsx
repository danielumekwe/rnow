import type { Metadata } from "next";
import LiftOpsHero from "@/components/artificial-lift-ops/LiftOpsHero";
import LiftOpsBenefits from "@/components/artificial-lift-ops/LiftOpsBenefits";
import LiftOpsTechnologies from "@/components/artificial-lift-ops/LiftOpsTechnologies";
import LiftOpsTechnical from "@/components/artificial-lift-ops/LiftOpsTechnical";
import LiftOpsTrusted from "@/components/artificial-lift-ops/LiftOpsTrusted";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { liftFaqs } from "@/data/artificialLiftOps";

export const metadata: Metadata = {
  title: "Artificial Lift Methods in the Oil and Gas Industry",
  description:
    "RNOW artificial lift operations: rod lift, progressive cavity pumps, well automation and hydraulic jet pump systems with local service and technical support.",
};

export default function ArtificialLiftOperationsPage() {
  return (
    <>
      <LiftOpsHero />
      <LiftOpsBenefits />
      <LiftOpsTechnologies />
      <LiftOpsTechnical />
      <LiftOpsTrusted />
      <ContactCTA label="Get in touch with an artificial lift expert now" />
      <FaqAccordion faqs={liftFaqs} />
    </>
  );
}
