export type IndustryExpertiseCard = {
  id: string;
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
};

export const industryExpertise: IndustryExpertiseCard[] = [
  {
    id: "renewables",
    title: "Alternative Energy & Renewables",
    description:
      "RNOW supplies essential products and supply chain solutions to onshore and offshore wind farms, solar, hydrogen, biofuel and geothermal operations worldwide.",
    linkLabel: "Certified electrical products for renewable energy",
    href: "#renewables",
  },
  {
    id: "decarbonization",
    title: "Carbon Management & Decarbonization",
    description:
      "Our low-emissions products and custom equipment packages can help monitor and reduce your carbon footprint and meet your scope 1 GHG emissions targets.",
    linkLabel: "Discover new decarbonization solutions",
    href: "#decarbonization",
  },
  {
    id: "energy-evolution",
    title: "Expansion of Energy Sources",
    description:
      "Make the transition to a sustainable, low-carbon future with RNOW. We are equipped to meet your projects' needs for carbon capture, hydrogen or renewable fuel applications.",
    linkLabel: "Learn more about energy evolution",
    href: "#energy-evolution",
  },
  {
    id: "pipeline-gas-distribution",
    title: "Pipeline & Gas Distribution Utilities",
    description:
      "In a critical service industry, we have the product and response availability to ensure our response meets quick off-the-shelf turnaround and delivery requirements for large infrastructure projects or during outages.",
    linkLabel: "Ensure uptime with RNOW support",
    href: "#pipeline-gas-distribution",
  },
  {
    id: "mining-minerals",
    title: "Mining & Minerals",
    description:
      "From mineral processing plants and underground mining operations to metal smelting and refining, we have decades of experience delivering products that withstand the rigors of corrosive and dust-intensive environments.",
    linkLabel: "Get robust, corrosion-resistant solutions",
    href: "#mining-minerals",
  },
  {
    id: "oil-gas-operations",
    title: "Oil & Gas Operations",
    description:
      "Onshore or offshore, RNOW is a leading distributor for the upstream, midstream and downstream markets, with vast quality product offerings and supply chain management solutions to minimize rig downtime and reduce the total cost of ownership.",
    linkLabel: "Explore oil & gas solutions",
    href: "#oil-gas-operations",
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing",
    description:
      "Our products and technical expertise help support the complexity of the chemical processing industry, with an emphasis on stainless steel, alloy, quality chemical injection pumps, solar pumps and specialty products.",
  },
  {
    id: "water-wastewater",
    title: "Water & Wastewater",
    description:
      "From single pumps to turnkey custom fabricated packages, we deliver the full range of water and wastewater solutions and back them up with 24/7 technical service. Our solutions include water plants, booster stations, wastewater plants, lift stations and controls.",
    linkLabel: "Discover what RNOW Pumps can do for you",
    href: "#water-wastewater",
  },
  {
    id: "distilleries",
    title: "Distilleries",
    description:
      "Our extensive industrial and hazardous area capabilities position us to supply the distilling industry with a full range of lighting, electrical products, and cabling, functioning efficiently, effectively and safely.",
    linkLabel: "Get explosion-proof electrical equipment",
    href: "#distilleries",
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    description:
      "We supply a full range of quality electrical products suitable for use in hazardous areas and cleanroom environments, from lighting and junction boxes to control stations and cabling to major pharmaceutical companies.",
    linkLabel: "Precision products for clean environments",
    href: "#pharmaceutical",
  },
];
