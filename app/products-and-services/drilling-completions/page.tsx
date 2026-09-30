import type { Metadata } from "next";
import DrillingHero from "@/components/drilling/DrillingHero";
import DrillingOfferings from "@/components/drilling/DrillingOfferings";
import DrillingInventory from "@/components/drilling/DrillingInventory";
import DrillingProcurement from "@/components/drilling/DrillingProcurement";
import DrillingPartner from "@/components/drilling/DrillingPartner";
import DrillingResources from "@/components/drilling/DrillingResources";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Drilling and Completions",
  description:
    "RNOW supplies OEM oilfield equipment and well completion services, backed by inventory control and online procurement solutions.",
};

export default function DrillingCompletionsPage() {
  return (
    <>
      <DrillingHero />
      <DrillingOfferings />
      <ContactCTA label="Get in touch with our drilling and completions experts today" />
      <DrillingInventory />
      <DrillingProcurement />
      <DrillingPartner />
      <DrillingResources />
    </>
  );
}
