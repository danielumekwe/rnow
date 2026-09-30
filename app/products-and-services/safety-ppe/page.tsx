import type { Metadata } from "next";
import SafetyHero from "@/components/safety/SafetyHero";
import SafetyProducts from "@/components/safety/SafetyProducts";
import SafetyCommit from "@/components/safety/SafetyCommit";
import SafetySecure from "@/components/safety/SafetySecure";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCTA from "@/components/shared/ContactCTA";
import { safetyFaqs } from "@/data/safety";

export const metadata: Metadata = {
  title: "Safety and PPE",
  description:
    "RNOW supplies personal protective equipment, safety supplies, workwear and safety services for modern industrial workplaces.",
};

export default function SafetyPpePage() {
  return (
    <>
      <SafetyHero />
      <SafetyProducts />
      <SafetyCommit />
      <ContactCTA label="Get in touch with a customer representative now" />
      <FaqAccordion faqs={safetyFaqs} title="Frequently Asked Questions" />
      <SafetySecure />
    </>
  );
}
