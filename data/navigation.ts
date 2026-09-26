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
    href: "#products",
    megaMenu: {
      columns: [
        {
          heading: "Products",
          links: [
            { label: "Pipes & Fittings", href: "#products" },
            { label: "Valves", href: "#products" },
            { label: "Pumps", href: "#products" },
            { label: "Industrial Equipment", href: "#products" },
          ],
        },
        {
          heading: "Services",
          links: [
            { label: "Tools & MRO", href: "#products" },
            { label: "Electrical Products", href: "#products" },
            { label: "Safety Equipment", href: "#products" },
            { label: "Fasteners & Hardware", href: "#products" },
          ],
        },
      ],
      featured: { label: "View all products", href: "#products" },
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
    href: "#industries",
    megaMenu: {
      columns: [
        {
          heading: "Industries We Serve",
          links: [
            { label: "Oil & Gas", href: "#industries" },
            { label: "Energy", href: "#industries" },
            { label: "Manufacturing", href: "#industries" },
          ],
        },
        {
          heading: "",
          links: [
            { label: "Construction", href: "#industries" },
            { label: "Marine", href: "#industries" },
            { label: "Infrastructure", href: "#industries" },
          ],
        },
      ],
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
    href: "#news",
  },
  {
    label: "Our Location",
    href: "/location",
  },
];

export const topBarLinks: NavLink[] = [
  { label: "Careers", href: "#" },
  { label: "Supplier Portal", href: "#" },
  { label: "Locations", href: "/location" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Products & Services",
    links: [
      { label: "Products", href: "#products" },
      { label: "Industrial Equipment", href: "#products" },
      { label: "Tools & MRO", href: "#products" },
      { label: "Electrical", href: "#products" },
      { label: "Safety", href: "#products" },
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
      { label: "Careers", href: "#" },
      { label: "News", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
  },
];
