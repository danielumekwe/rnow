import { aboutTree } from "@/data/about/sitemap";
import type { AboutNode } from "@/data/about/types";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** Optional nested links, shown indented under this link. */
  children?: NavLink[];
};

/** Converts an About tree node into a nav link (with children). */
function aboutNavLink(node: AboutNode): NavLink {
  return {
    label: node.label,
    href: node.path,
    children: node.children?.map(aboutNavLink),
  };
}

const aboutSections = (aboutTree.children ?? []).map(aboutNavLink);

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: {
    columns: {
      heading: string;
      links: NavLink[];
    }[];
    featured?: {
      label: string;
      href: string;
    };
  };
};

export const mainNav: NavItem[] = [
  {
    label: "Products & Services",
    href: "/products-and-services",
    megaMenu: {
      columns: [
        {
          heading: "Products",
          links: [
            { label: "Valves", href: "/products-and-services/valves" },
            { label: "Pumps", href: "/products-and-services/pumps" },
            { label: "Industrial Equipment", href: "/products-and-services/industrial-equipment" },
            { label: "Air Compressors & Blowers", href: "/products-and-services/compressors" },
            { label: "Artificial Lift Solutions", href: "/products-and-services/artificial-lift" },
            { label: "Drilling & Completions", href: "/products-and-services/drilling-completions" },
            { label: "Electrical & Cable", href: "/products-and-services/electrical-products" },
            { label: "Industrial & Facility Supplies", href: "/products-and-services/industrial-facility-supplies" },
            { label: "Instrumentation & Measurement", href: "/products-and-services/instrumentation-measurement" },
            { label: "Paints & Coatings", href: "/products-and-services/paints-coatings" },
            { label: "Pipe, Valves & Fittings (PVF)", href: "/products-and-services/pvf" },
            { label: "Power Generation", href: "/products-and-services/power-generation" },
            { label: "Process & Production Equipment", href: "/products-and-services/process-production-equipment" },
            { label: "Pumps & Packages", href: "/products-and-services/pumps-packages" },
            { label: "Safety & PPE", href: "/products-and-services/safety-ppe" },
            { label: "Tools", href: "/products-and-services/tools" },
          ],
        },
      ],
      featured: { label: "View all products", href: "/products-and-services" },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: {
      columns: [
        {
          heading: "Solutions",
          links: [
            { label: "Digital Solutions and Technology", href: "/solutions#digital-solutions-technology" },
            { label: "Engineering, Design and Fabrication", href: "/solutions/engineering-design-fabrication" },
            { label: "Safety Services and Turnaround Support", href: "/solutions/safety-services" },
            { label: "Supply Chain and Materials Management", href: "/solutions/supply-chain-management" },
            { label: "Valve Actuation and Automation", href: "/solutions/valve-actuation-automation" },
          ],
        },
      ],
      featured: { label: "View all solutions", href: "/solutions" },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      columns: [
        {
          heading: "",
          links: [
            { label: "Chemical Processing", href: "/industries#chemical-processing" },
            { label: "Water & Wastewater", href: "/industries#water-wastewater" },
            { label: "Pharmaceutical", href: "/industries#pharmaceutical" },
            { label: "Artificial Lift Operations", href: "/industries/artificial-lift-operations" },
            { label: "Carbon Management & Decarbonization", href: "/industries/carbon-management" },
            { label: "Energy Transition", href: "/industries/energy-transition" },
            { label: "Onshore Drilling Rigs Operations", href: "/industries/onshore-drilling" },
            { label: "Offshore Drilling Rigs Operations", href: "/industries/offshore-drilling" },
            { label: "Midstream Pipeline and Transmission", href: "/industries/midstream" },
            { label: "Utilities & Gas Distribution", href: "/industries/utilities-gas-distribution" },
            { label: "Tank Batteries & Production Facilities", href: "/industries/tank-batteries" },
          ],
        },
      ],
      featured: { label: "View all industries", href: "/industries" },
    },
  },
  {
    label: "About Us",
    href: "/about",
    megaMenu: {
      columns: [
        { heading: "", links: aboutSections.slice(0, 2) },
        {
          heading: "",
          links: [
            ...aboutSections.slice(2),
            { label: "Our Locations", href: "/location" },
          ],
        },
      ],
      featured: { label: "About RNOW overview", href: "/about" },
    },
  },
  {
    label: "Resources",
    href: "/news",
  },
  {
    label: "Our Location",
    href: "/location",
  },
];

export const topBarLinks: NavLink[] = [
  { label: "Careers", href: "/about/careers" },
  { label: "Supplier Portal", href: "/supplier-portal" },
  { label: "Locations", href: "/location" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Products & Services",
    links: [
      { label: "Products", href: "/products-and-services" },
      { label: "Industrial Equipment", href: "/products-and-services/industrial-equipment" },
      { label: "Tools & MRO", href: "/products-and-services/tools-mro" },
      { label: "Electrical", href: "/products-and-services/electrical-products" },
      { label: "Safety", href: "/products-and-services/safety-equipment" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Digital Solutions and Technology", href: "/solutions#digital-solutions-technology" },
      { label: "Engineering, Design and Fabrication", href: "/solutions/engineering-design-fabrication" },
      { label: "Supply Chain and Materials Management", href: "/solutions/supply-chain-management" },
      { label: "Valve Actuation and Automation", href: "/solutions/valve-actuation-automation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Locations", href: "/location" },
      { label: "Careers", href: "/about/careers" },
      { label: "News & Events", href: "/about/news" },
      { label: "Why RNOW", href: "/about/why-rnow" },
      { label: "Corporate Citizenship", href: "/about/corporate-citizenship" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
