export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

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
            { label: "Pipes & Fittings", href: "/products-and-services/pipes-fittings" },
            { label: "Valves", href: "/products-and-services/valves" },
            { label: "Pumps", href: "/products-and-services/pumps" },
            { label: "Industrial Equipment", href: "/products-and-services/industrial-equipment" },
          ],
        },
        {
          heading: "Services",
          links: [
            { label: "Tools & MRO", href: "/products-and-services/tools-mro" },
            { label: "Electrical Products", href: "/products-and-services/electrical-products" },
            { label: "Safety Equipment", href: "/products-and-services/safety-equipment" },
            { label: "Fasteners & Hardware", href: "/products-and-services/fasteners-hardware" },
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
            { label: "Engineering, Design and Fabrication", href: "/solutions#engineering-design-fabrication" },
            { label: "Safety Services and Turnaround Support", href: "/solutions#safety-services-turnaround-support" },
            { label: "Supply Chain and Materials Management", href: "/solutions#supply-chain-materials-management" },
            { label: "Valve Actuation and Automation", href: "/solutions#valve-actuation-automation" },
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
          heading: "Industries We Serve",
          links: [
            { label: "Oil & Gas Operations", href: "/industries#oil-gas-operations" },
            { label: "Alternative Energy & Renewables", href: "/industries#renewables" },
            { label: "Mining & Minerals", href: "/industries#mining-minerals" },
          ],
        },
        {
          heading: "",
          links: [
            { label: "Chemical Processing", href: "/industries#chemical-processing" },
            { label: "Water & Wastewater", href: "/industries#water-wastewater" },
            { label: "Pharmaceutical", href: "/industries#pharmaceutical" },
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
        {
          heading: "Company",
          links: [
            { label: "About RNOW", href: "/about" },
            { label: "Our Locations", href: "/location" },
          ],
        },
      ],
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
  { label: "Careers", href: "/careers" },
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
      { label: "Engineering, Design and Fabrication", href: "/solutions#engineering-design-fabrication" },
      { label: "Supply Chain and Materials Management", href: "/solutions#supply-chain-materials-management" },
      { label: "Valve Actuation and Automation", href: "/solutions#valve-actuation-automation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Locations", href: "/location" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
