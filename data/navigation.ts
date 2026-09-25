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
    href: "#solutions",
    megaMenu: {
      columns: [
        {
          heading: "Solutions",
          links: [
            { label: "Procurement & Sourcing", href: "#solutions" },
            { label: "Supply Chain Support", href: "#solutions" },
            { label: "Industrial Project Supply", href: "#solutions" },
            { label: "Technical Product Support", href: "#solutions" },
          ],
        },
      ],
      featured: { label: "Talk to our team", href: "#contact" },
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
    label: "Contact",
    href: "#contact",
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
      { label: "Procurement", href: "#solutions" },
      { label: "Supply Chain", href: "#solutions" },
      { label: "Project Supply", href: "#solutions" },
      { label: "Technical Support", href: "#solutions" },
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
