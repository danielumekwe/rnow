import type { Faq } from "@/data/aboutFaqs";

const dir = "/images/Safety%20and%20PPE/";

export const safetyProducts = [
  {
    title: "Personal Protective Equipment",
    image: `${dir}ppe-thumbnail.webp`,
    description:
      "Our carefully curated range of PPE ensures optimal safety against all hazards. Meeting strict compliance standards, our gear—from electrical protection to temperature shields—serves as a frontline defense in diverse workplace scenarios.",
  },
  {
    title: "Safety Supplies and Gear",
    image: `${dir}Safety-Supplies-Thumbnails.webp`,
    description:
      "We prioritize absolute safety with an extensive supply range, covering all workplace safety aspects. Trust in our top-tier brands and rigorous quality standards.",
  },
  {
    title: "Safety Workwear Essentials",
    image: `${dir}Safety-Workwear.webp`,
    description:
      "Our workwear masterfully blends protection, comfort and mobility for diverse industrial needs. Designed to withstand a variety of challenges, our gear ensures workers stay safe, active and visible.",
  },
  {
    title: "RNOW Safety Services",
    image: `${dir}SS_turnaround_shutdown_support_thumb.webp`,
    description:
      "RNOW Safety Services addresses every operational facet, ensuring top-tier safety in daily tasks and during pivotal turnarounds. We offer versatile solutions tailored for any situation.",
  },
];

export const safetyFaqs: Faq[] = [
  {
    question: "How often should PPE be replaced?",
    answer:
      "Replacement depends on the type of equipment, how often it is used and the conditions it is exposed to. Inspect PPE before each use, follow the manufacturer's service-life guidance, and replace anything that is damaged, worn, expired or no longer fits properly.",
  },
  {
    question: "Are PPE solutions available for specific industries?",
    answer:
      "Yes. We supply PPE and workwear suited to oil and gas, utilities, chemical, manufacturing and other industrial settings, including flame-resistant, high-visibility and electrical-protection options. Our team can help match gear to your hazards.",
  },
  {
    question: "What brands does RNOW carry in its safety product range?",
    answer:
      "We carry a range of trusted safety and PPE manufacturers. Contact our team for current brand availability and to find the right products for your requirements.",
  },
];
