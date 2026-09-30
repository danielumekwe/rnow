import type { Metadata } from "next";
import OnshoreHero from "@/components/onshore/OnshoreHero";
import OnshoreProducts from "@/components/onshore/OnshoreProducts";
import OnshoreAccessNow from "@/components/onshore/OnshoreAccessNow";
import OnshoreShopping from "@/components/onshore/OnshoreShopping";
import OnshoreDifference from "@/components/onshore/OnshoreDifference";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Onshore Drilling Rig Products and Solutions",
  description:
    "RNOW supplies OEM and consumable oilfield products for land-based drilling rigs, backed by inventory automation and online procurement.",
};

export default function OnshoreDrillingPage() {
  return (
    <>
      <OnshoreHero />
      <OnshoreProducts />
      <OnshoreAccessNow />
      <OnshoreShopping />
      <OnshoreDifference />
      <ContactCTA label="Get in touch with a customer representative now" />
    </>
  );
}
