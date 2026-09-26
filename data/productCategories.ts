export type ProductCategory = {
  slug: string;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  image: string;
};

import { siteImages } from "@/lib/images";

export const productCategories: ProductCategory[] = [
  {
    slug: "pipes-fittings",
    label: "Pipes & Fittings",
    headline: "Pipes, Valves, Fittings & Flanges",
    description:
      "RNOW stocks a comprehensive range of carbon steel, stainless and alloy pipe, fittings and flanges for upstream, midstream and downstream applications. Our branch network and coiled line pipe program keep critical-path materials moving so your crews stay on schedule.",
    bullets: [
      "Carbon steel, stainless and alloy pipe in a range of schedules and sizes",
      "Threaded, welded and flanged fittings for process and gathering systems",
      "Coiled line pipe for upstream applications that reduce installation time",
      "Same-day and will-call fulfillment from our branch network",
    ],
    image: siteImages.featured,
  },
  {
    slug: "valves",
    label: "Valves",
    headline: "Valves and Flow Control",
    description:
      "From gate and globe valves to ball, check and control valves, RNOW supplies flow-control products built for demanding pressure, temperature and corrosion conditions, backed by technical support to help you specify the right valve for the application.",
    bullets: [
      "Gate, globe, ball, check and butterfly valves",
      "Actuated and manual valve packages",
      "Material options for sour service, high pressure and corrosive environments",
      "Technical support to help match valves to your process conditions",
    ],
    image: siteImages.solutionsPage.tailored,
  },
  {
    slug: "pumps",
    label: "Pumps",
    headline: "Pumps, Production & Drilling Equipment",
    description:
      "RNOW supplies pumps and production equipment for upstream drilling, artificial lift and midstream transfer applications, along with the technical guidance needed to keep rotating equipment running reliably in the field.",
    bullets: [
      "Centrifugal, positive displacement and specialty process pumps",
      "Production and drilling equipment for upstream operations",
      "Pump packages engineered for your site conditions",
      "Field support and technical consultation on equipment selection",
    ],
    image: siteImages.industriesPage.productGrid[0],
  },
  {
    slug: "industrial-equipment",
    label: "Industrial Equipment",
    headline: "Industrial Equipment",
    description:
      "RNOW supplies the industrial equipment that keeps facilities and field operations running — from process skids to general facility equipment — backed by our sourcing network and technical teams.",
    bullets: [
      "Process and production equipment for facility operations",
      "Custom-built and packaged equipment solutions",
      "Sourcing support for hard-to-find industrial equipment",
      "Technical consultation from project planning through installation",
    ],
    image: siteImages.industriesPage.benefits,
  },
  {
    slug: "tools-mro",
    label: "Tools & MRO",
    headline: "Tools, Industrial Supplies & MRO Consumables",
    description:
      "Keep your operation stocked with the tools and MRO consumables it depends on every day. RNOW supplies hand and power tools, fasteners, lubricants and general maintenance supplies through a responsive distribution network.",
    bullets: [
      "Hand tools, power tools and tooling accessories",
      "MRO consumables for daily maintenance operations",
      "Lubricants, adhesives and shop supplies",
      "Inventory and material management support",
    ],
    image: siteImages.industriesPage.productGrid[5],
  },
  {
    slug: "electrical-products",
    label: "Electrical Products",
    headline: "Electrical Cable & Products",
    description:
      "RNOW distributes electrical cable and products engineered for hazardous and industrial environments, supporting facilities and field operations that depend on reliable power and control wiring.",
    bullets: [
      "Electrical cable for hazardous and industrial locations",
      "Junction boxes, conduit and cable accessories",
      "Explosion-proof electrical products",
      "Support for facility and field electrical projects",
    ],
    image: siteImages.industriesPage.productGrid[8],
  },
  {
    slug: "safety-equipment",
    label: "Safety Equipment",
    headline: "Safety Equipment and PPE",
    description:
      "We ensure your team has the safety equipment and PPE needed for everyday operations, shutdowns and emergency response, including rental, inspection, maintenance and repair packages.",
    bullets: [
      "Personal protective equipment for everyday field operations",
      "Safety equipment for shutdowns, outages and emergency response",
      "Rental, inspection, maintenance and repair packages",
      "Daily essentials stocked for fast turnaround",
    ],
    image: siteImages.industriesPage.productGrid[6],
  },
  {
    slug: "fasteners-hardware",
    label: "Fasteners & Hardware",
    headline: "Fasteners & Hardware",
    description:
      "RNOW stocks a broad range of fasteners and hardware for industrial and facility applications, supplied through the same branch network that keeps your other critical materials moving.",
    bullets: [
      "Bolts, nuts, studs and gaskets for flanged connections",
      "Specialty fasteners for oil and gas applications",
      "Hardware for facility maintenance and fabrication",
      "Stocked inventory for fast turnaround on repeat orders",
    ],
    image: siteImages.solutions.gridFacility,
  },
];
