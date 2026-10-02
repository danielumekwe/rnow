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
    address: {
      line1: "10401 W Reno Ave",
      city: "Oklahoma City",
      state: "OK",
      zip: "73127",
      country: "USA",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    x: "https://www.x.com/",
  },
} as const;
