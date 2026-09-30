import type { Metadata } from "next";
import ElectricalHero from "@/components/electrical/ElectricalHero";
import ElectricalCapitalProject from "@/components/electrical/ElectricalCapitalProject";
import ElectricalInventory from "@/components/electrical/ElectricalInventory";
import ElectricalCertifications from "@/components/electrical/ElectricalCertifications";
import ElectricalPowerService from "@/components/electrical/ElectricalPowerService";
import ElectricalPartners from "@/components/electrical/ElectricalPartners";
import ElectricalResources from "@/components/electrical/ElectricalResources";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Electrical & Cable Solutions",
  description:
    "RNOW supplies electrical and cable products for hazardous-area and industrial applications, with panel fabrication, engineering and capital project support.",
};

export default function ElectricalPage() {
  return (
    <>
      <ElectricalHero />
      <ElectricalCapitalProject />
      <ElectricalInventory />
      <ElectricalCertifications />
      <ElectricalPowerService />
      <ElectricalPartners />
      <ContactCTA label="Get in touch with a customer representative now" />
      <ElectricalResources />
    </>
  );
}
