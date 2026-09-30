import type { Metadata } from "next";
import TankHero from "@/components/tank-batteries/TankHero";
import TankExperts from "@/components/tank-batteries/TankExperts";
import TankProjects from "@/components/tank-batteries/TankProjects";
import TankFeatures from "@/components/tank-batteries/TankFeatures";
import TankPartner from "@/components/tank-batteries/TankPartner";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Tank Batteries and Production Facilities",
  description:
    "RNOW supplies fabricated modular process equipment, PVF, pumps and instrumentation for tank batteries and onshore production facilities.",
};

export default function TankBatteriesPage() {
  return (
    <>
      <TankHero />
      <TankExperts />
      <TankProjects />
      <ContactCTA label="Get in touch with a production expert today" />
      <TankFeatures />
      <TankPartner />
    </>
  );
}
