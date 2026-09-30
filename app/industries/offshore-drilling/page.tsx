import type { Metadata } from "next";
import OffshoreHero from "@/components/offshore/OffshoreHero";
import OffshoreRigs from "@/components/offshore/OffshoreRigs";
import OffshoreOrdering from "@/components/offshore/OffshoreOrdering";
import OffshoreWhy from "@/components/offshore/OffshoreWhy";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Offshore Drilling Rig Products and Solutions",
  description:
    "RNOW supplies oilfield products and solutions for drillships, jack-up rigs and semi-submersible rigs, backed by global supply chain support.",
};

export default function OffshoreDrillingPage() {
  return (
    <>
      <OffshoreHero />
      <OffshoreRigs />
      <OffshoreOrdering />
      <OffshoreWhy />
      <ContactCTA label="Get in touch with a customer representative now" />
    </>
  );
}
