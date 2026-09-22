/** Site-wide constants. Replace placeholder contact details with real values. */
export const siteConfig = {
  name: "RNOW Industrial Supply",
  shortName: "RNOW",
  tagline: "Industrial Supply. Built Around Your Operation.",
  description:
    "RNOW Industrial Supply provides dependable products, sourcing and supply solutions for demanding industrial operations across oil & gas, energy, manufacturing, construction, marine and infrastructure.",
  url: "https://www.rnowindustrial.com",
  contact: {
    phone: "+1 (800) 555-0199",
    phoneHref: "+18005550199",
    email: "info@rnowindustrial.com",
    // Placeholder — do not treat as a real registered address.
    address: {
      line1: "1000 Industrial Parkway",
      line2: "Suite 400",
      city: "Houston",
      state: "TX",
      zip: "77001",
      country: "United States",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    x: "https://www.x.com/",
  },
} as const;
