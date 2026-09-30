import { siteImages } from "@/lib/images";

const img = siteImages.carbonPage;

export type CarbonFeature = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  bulletsIntro?: string;
  linkLabel: string;
  linkHref: string;
  image: string;
  imageAlt: string;
};

export const carbonFeatures: CarbonFeature[] = [
  {
    eyebrow: "EcoVapor Emissions Management Technologies",
    title: "Revolutionize Emissions Management and Biogas Purification",
    paragraphs: [
      "Our affiliated brand EcoVapor offers an ever-expanding suite of emissions management and biogas purification solutions for oil and gas and the growing renewable natural gas (RNG) markets. These game-changing technologies help eliminate routine flaring, minimize emissions, and purify natural gas streams to maximize the productivity of oil and gas facilities, midstream and saltwater disposal operations, biogas and landfill gas operations, while offering you a pathway to net-zero emissions.",
    ],
    linkLabel: "Explore EcoVapor Solutions",
    linkHref: "/about/brands",
    image: img.ecoVapor,
    imageAlt: "EcoVapor emissions management system render",
  },
  {
    eyebrow: "Instrument Air Compressor Skids",
    title: "Cut Methane Emissions from Pneumatic Controllers and Actuators",
    paragraphs: [
      "RNOW Process Solutions experts work with you to determine your specific requirements, based on your equipment and your emissions goals. We size compressors appropriate for the pneumatic devices you have on site to completely eliminate fuel gas use, if possible.",
    ],
    linkLabel: "Optimize Your Air Compressor Needs",
    linkHref: "/products-and-services/process-production-equipment",
    image: img.airCompressor,
    imageAlt: "Instrument air compressor skid",
  },
  {
    eyebrow: "Vapor Recovery Units (VRUs)",
    title: "Capture and Recover Carbon Vapors from Production Vessels",
    paragraphs: [
      "Our vapor recovery units enable operators to capture more than 95% of hydrocarbon emissions that accumulate in crude oil storage tanks at production sites. Recovered liquids are routed back to the tanks, while gases are extracted from the VRU and stored for sale as high-BTU natural gas fuel.",
    ],
    linkLabel: "Boost Efficiency with VRUs",
    linkHref: "/products-and-services/process-production-equipment",
    image: img.vru,
    imageAlt: "Vapor recovery unit package",
  },
  {
    eyebrow: "Low-Emissions Products",
    title: "Reduce Scope 1 Direct Emissions With Our Low-E Products",
    paragraphs: [
      "In alignment with United Nations Sustainable Development Goals 12 (Responsible Consumption and Production) and 13 (Climate Action), RNOW offers a variety of low-emissions products to help you meet your carbon reduction goals:",
    ],
    bullets: [
      "Cast carbon steel ball valves, gate valves, globe valves and check valves",
      "Cast stainless and alloy steel ball valves, gate valves, globe valves and check valves",
      "Forged steel gate valves, globe valves and check valves",
      "High-performance spiral wound gaskets",
      "Sealless magnetic drive centrifugal pumps",
      "Solar powered chemical and glycol pumps",
      "Zero emissions process pumps",
    ],
    linkLabel: "Contact Us for Low-Emission Solutions",
    linkHref: "/contact",
    image: img.lowEmissions,
    imageAlt: "Low-emissions valves, gaskets and pumps",
  },
  {
    eyebrow: "Sustainably Manufactured Products",
    title: "Reduce Scope 3 Indirect Emissions Through Low Carbon Emission Manufacturing",
    paragraphs: [
      "RNOW also distributes product lines that provide further opportunities for mitigation of environmental impact. These products help you reduce GHG emissions sources resulting from manufacturing processes and transportation requirements:",
    ],
    bullets: [
      "API 5L steel pipe and flanges – produced from a high percentage of recycled steel scrap, utilizing efficient electric arc furnace (EAF) technology instead of traditional blast furnace processes",
      "Forged steel and bolts – produced from recycled steel sources",
      "Glass reinforced epoxy (GRE) piping systems – require less energy to manufacture than steel pipe",
      "Additional piping products manufactured in sustainable ways, using wind power, recycled water and wood pellet inputs",
      "Domestically produced goods – require less energy for transportation to local customers",
    ],
    linkLabel: "Contact Us for Sustainable Solutions",
    linkHref: "/contact",
    image: img.sustainable,
    imageAlt: "Stocked steel pipe in a pipe yard",
  },
];
