import type { Metadata } from "next";
import SafetyServicesHero from "@/components/safety-services/SafetyServicesHero";
import SafetyServicesCards from "@/components/safety-services/SafetyServicesCards";
import SafetyServicesTailored from "@/components/safety-services/SafetyServicesTailored";
import SafetyServicesTrusted from "@/components/safety-services/SafetyServicesTrusted";
import SafetyServicesResources from "@/components/safety-services/SafetyServicesResources";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Safety Services to Support Turnarounds and Shutdowns",
  description:
    "RNOW Safety Services provides safety equipment rental, inspection and repair, turnaround support, on-site safety stores and specialty personnel.",
};

export default function SafetyServicesPage() {
  return (
    <>
      <SafetyServicesHero />
      <SafetyServicesCards />
      <SafetyServicesTailored />
      <SafetyServicesTrusted />
      <ContactCTA label="Get in touch with a customer representative now" />
      <SafetyServicesResources />
    </>
  );
}
