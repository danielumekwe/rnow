import type { Metadata } from "next";
import ValveHero from "@/components/valve-actuation/ValveHero";
import ValvePartner from "@/components/valve-actuation/ValvePartner";
import ValveCapabilities from "@/components/valve-actuation/ValveCapabilities";
import ValveQuestionsStrip from "@/components/valve-actuation/ValveQuestionsStrip";
import ValveLifeCycle from "@/components/valve-actuation/ValveLifeCycle";
import ValveSolutions from "@/components/valve-actuation/ValveSolutions";
import ValveReconditioning from "@/components/valve-actuation/ValveReconditioning";
import ValveServiceTabs from "@/components/valve-actuation/ValveServiceTabs";
import ValveOptimize from "@/components/valve-actuation/ValveOptimize";
import ValveWhy from "@/components/valve-actuation/ValveWhy";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Valve Actuation and Automation Solutions",
  description:
    "RNOW Valves & Actuation offers customized valve actuation, modification, repair and reconditioning solutions with in-house and 24/7 field service.",
};

export default function ValveActuationPage() {
  return (
    <>
      <ValveHero />
      <ValvePartner />
      <ValveCapabilities />
      <ValveQuestionsStrip />
      <ValveLifeCycle />
      <ValveSolutions />
      <ValveQuestionsStrip />
      <ValveReconditioning />
      <ValveServiceTabs />
      <ValveOptimize />
      <ValveWhy />
      <ContactCTA label="Get in touch with a customer representative now" />
    </>
  );
}
