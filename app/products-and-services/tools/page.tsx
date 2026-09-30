import type { Metadata } from "next";
import ToolsHero from "@/components/tools/ToolsHero";
import ToolsLists from "@/components/tools/ToolsLists";
import ToolsCatalog from "@/components/tools/ToolsCatalog";
import ToolsExpert from "@/components/tools/ToolsExpert";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "RNOW's extensive inventory of hand tools, power tools, air tools and cutting tools from leading manufacturers.",
};

export default function ToolsPage() {
  return (
    <>
      <ToolsHero />
      <ToolsLists />
      <ToolsCatalog />
      <ToolsExpert />
      <ContactCTA label="Get in touch with a customer representative now" />
    </>
  );
}
