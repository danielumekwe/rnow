import type { Metadata } from "next";
import PvfHero from "@/components/pvf/PvfHero";
import PvfProducts from "@/components/pvf/PvfProducts";
import PvfEngagement from "@/components/pvf/PvfEngagement";
import PvfQuality from "@/components/pvf/PvfQuality";
import PvfWhyChoose from "@/components/pvf/PvfWhyChoose";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Pipe, Valves and Fittings (PVF)",
  description:
    "RNOW is a global PVF distributor of pipe, valves, actuators, fittings, flanges, fasteners and gaskets for oil and gas and industrial markets.",
};

export default function PvfPage() {
  return (
    <>
      <PvfHero />
      <PvfProducts />
      <PvfEngagement />
      <ContactCTA label="Get in touch with a customer representative now" />
      <PvfQuality />
      <PvfWhyChoose />
    </>
  );
}
