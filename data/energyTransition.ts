import { siteImages } from "@/lib/images";

const img = siteImages.energyTransitionPage;

export type EnergySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bulletsIntro?: string;
  bullets: string[];
  image: string;
  overlay: string;
  actionTitle: string;
  actionSubtitle: string;
  actionText: string;
};

export const energySections: EnergySection[] = [
  {
    id: "ccus",
    eyebrow: "Carbon Capture, Utilization and Storage (CCUS)",
    title: "Comprehensive Solutions for Carbon Management",
    paragraphs: [
      "RNOW is engaged with the growing CCUS market, supporting customers as they complete projects to control carbon dioxide emissions, including carbon capture, separation, compression and liquefaction, transportation, storage and utilization.",
    ],
    bulletsIntro: "We are committed to offering products and services that provide value in this market:",
    bullets: [
      "High-grade steel pipe certified to ASME B31.2 standard for fuel gas piping",
      "Low-emissions ball valves, gate valves, globe valves and check valves",
      "Fittings, flanges, gaskets and fasteners",
      "Dehydration units and other fabricated process equipment",
      "Air compressor packages",
      "Efficient API 610 pumps and other centrifugal pumps",
      "Wellhead injection equipment",
      "Instrumentation and electrical supplies",
    ],
    image: img.ccus,
    overlay: "bg-ink/75",
    actionTitle: "RNOW in Action: Carbon Capture, Utilization and Storage",
    actionSubtitle: "Large Independent Oil and Gas Producer and Operator",
    actionText:
      "RNOW is providing pipe, valves, fittings, pumps and compressors for CO₂ utilization and CO₂ pipeline transmission applications for a variety of ongoing projects. The stored/sequestered carbon dioxide is utilized for enhanced oil recovery (EOR) operations to optimize oil production.",
  },
  {
    id: "hydrogen",
    eyebrow: "Low-Carbon Hydrogen",
    title: "Hydrogen Production, Compression and Transportation",
    paragraphs: [
      "RNOW supports the growing hydrogen market, including more environmentally friendly sources of hydrogen, like Blue H₂ (from natural gas, biomass or biogas) and Green H₂ (from water and renewable electricity or nuclear electricity). RNOW products are used in H₂ production, storage, transmission pipelines and distribution:",
    ],
    bullets: [
      "High-grade steel pipe certified to ASME B31.12 standard for hydrogen piping & pipelines",
      "Low-emissions ball valves, gate valves, globe valves and check valves",
      "Low-emissions gaskets",
      "Centrifugal pumps and diaphragm pumps",
      "Custom fabricated pressure vessels",
      "Air compressor packages",
    ],
    image: img.hydrogen,
    overlay: "bg-ink/80",
    actionTitle: "RNOW in Action: Hydrogen",
    actionSubtitle: "Independent Hydrogen Producer",
    actionText:
      "RNOW is providing multistage centrifugal pumps as key components in a new electrolyzer project. The completed plant will use proton exchange membrane (PEM) electrolysis technology to generate clean hydrogen from water for nearby customer operations.",
  },
  {
    id: "renewable-fuels",
    eyebrow: "Renewable Fuels",
    title: "Biodiesel, Bioethanol, Biogas and Renewable Gasoline",
    paragraphs: [
      "RNOW supports the production of lower-carbon alternatives to existing fossil fuels, including a range of renewable fuels derived from waste plant material, animal oils and fats, greases and vegetable oils. We are capitalizing on our long history of supporting downstream refining customers to bring you high quality, proven products and services:",
    ],
    bullets: [
      "Welded and seamless carbon steel and stainless steel line pipe and facility piping",
      "Standard and fire-safe ball valves, butterfly valves, plug valves, control valves and emergency shutdown (ESD) valves",
      "Fittings, flanges, gaskets and fasteners",
      "Process pumps",
      "Personal protective equipment (PPE) and safety equipment",
      "Turnaround and shutdown support",
    ],
    image: img.fuels,
    overlay: "bg-ink/80",
    actionTitle: "RNOW in Action: Biofuels",
    actionSubtitle: "Independent Biorefiner",
    actionText:
      "RNOW is providing pipe, valves and fittings for the construction of a new biofuels plant. Once completed, this facility will annually convert approximately 166,000 dry tons of waste woody biomass into 16.1 million gallons of low carbon, renewable jet and diesel fuels.",
  },
];
