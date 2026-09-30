import type { Faq } from "@/data/aboutFaqs";
import { siteImages } from "@/lib/images";

const img = siteImages.paintsPage;

export type PaintSection = {
  id: string;
  title: string;
  description: string;
  items: string[];
  columns: 1 | 2 | 3;
  image: string;
  imageAlt: string;
  partners: string[];
};

export const paintSections: PaintSection[] = [
  {
    id: "high-performance-coatings",
    title: "High-Performance Coatings",
    description:
      "Our coatings are designed to protect products and brands with color that inspires and lasts the test of time. Formulations designed to resist the harshest conditions and withstand even the most extreme temperatures, offering customers peace of mind. They are long-lasting corrosion protection for the most demanding applications, and all of our coatings are lead-free, chromate-free and VOC compliant.",
    items: [
      "Acrylics (solvent, waterborne)",
      "Alkyds (oil-based enamels, high solids)",
      "Epoxies (high build, high solids)",
      "Polyurethanes",
      "High-temperature coatings",
      "Primers",
      "Cold galvanizing compounds",
      "Pipe wrap tape",
    ],
    columns: 1,
    image: img.coatings,
    imageAlt: "Cans of high-performance industrial coatings",
    partners: [
      "3M", "Carboline", "Polyguard Products", "PPG",
      "Seal for Life Industries (Powercrete®)", "Seal for Life Industries (STOPAQ®)", "Sherwin-Williams", "Tnemec Co.",
      "Trenton Corp.", "ZRC Worldwide",
    ],
  },
  {
    id: "paints-and-stains",
    title: "Paints and Stains",
    description:
      "If you're looking for a specific color or need help deciding which is best for your project, our experts are here to assist you. We offer a wide selection of paints and stains to fit your needs, whether you're staining the deck, painting the exterior or redecorating the interior. Our paints and color stains are high quality and easy to apply with a sprayer, roller or brush. We update our inventory regularly with the latest range of colors, so stop by today!",
    items: [
      "Aerosol paint and primer",
      "Exterior paint and primers",
      "Interior stains and finishes",
      "Striping and marking paint",
      "Stencil ink",
      "Paint pens and markers",
    ],
    columns: 1,
    image: img.stains,
    imageAlt: "Cans and aerosols of industrial paint and stain",
    partners: ["Dy-Mark", "ITW Diagraph", "Krylon", "MSSC (Marsh®)", "Rust-Oleum"],
  },
  {
    id: "painting-equipment",
    title: "Industrial Painting Equipment and Professional Painting Supplies",
    description:
      "Having the right painting tools is just as important as buying high-quality paint when it comes to any painting project. Our selection of painting supplies includes drop cloths, sandpaper, brushes, roller covers, paint trays and more. We also have a wide variety of interior and exterior paints options. Whether you're a professional painter or a DIY enthusiast, we have everything you need to get the job done right.",
    items: [
      "Brushes", "Drop cloths", "Extension poles", "Edgers & refills", "Liners & grids", "Mitts",
      "Openers", "Paint Booths", "Paint sprayers", "Paint mixers & accessories",
      "Rollers, frames & roller covers", "Stencils", "Strainers", "Trays & buckets",
    ],
    columns: 3,
    image: img.equipment,
    imageAlt: "Brushes, rollers, trays and other painting tools",
    partners: [
      "G.F. Lasswell (Kleenwell)", "Hyde Tools", "Krylon (Rubberset®)", "Magnolia Brush",
      "Red Devil", "Sherwin-Williams (Diversified Brands)", "Weiler Abrasives",
    ],
  },
];

export const paintBenefits = [
  {
    label: "Superior Protection and Durability",
    text: "From corrosion-resistant to heat-resistant paint, you'll get the highest quality paint and coatings for a job that lasts for years.",
  },
  {
    label: "Professional Advice",
    text: "Our team of experienced professionals will help you find the best products for your job, ensuring you make the right purchase.",
  },
  {
    label: "Comprehensive Selection",
    text: "From powders to protective coatings and corrosion-resistant paint, we have the finishes, equipment, tools and supplies for your application.",
  },
];

export const paintFaqs: Faq[] = [
  {
    question: "Industrial paints and coatings: what are they and what do they do?",
    answer:
      "Industrial paints and coatings protect surfaces such as steel, tanks and pipe from corrosion, heat, chemicals and wear, while also providing color and marking. Formulations include epoxies, polyurethanes, alkyds, acrylics and high-temperature coatings.",
  },
  {
    question: "How do you maintain an airless paint sprayer?",
    answer:
      "Flush the sprayer with the appropriate cleaner after each use, clean or replace the filters and tip regularly, lubricate the packing per the manufacturer's guidance and store it with pump protectant. Always follow the manual for your model.",
  },
  {
    question: "What materials do professional painters use?",
    answer:
      "Professionals typically use primers, topcoats and specialty coatings, along with brushes, rollers, sprayers, drop cloths, tape, sandpaper and surface preparation supplies. We stock these and can help match products to your project.",
  },
];
