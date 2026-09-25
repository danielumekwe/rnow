export type LocationOffice = {
  name: string;
  brand: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
  phoneHref: string;
};

/** Placeholder office data — replace with real branch listings before launch. */
export const locationOffices: LocationOffice[] = [
  {
    name: "Darwin",
    brand: "RNOW Pacific",
    address1: "12 Wishart Road",
    city: "Darwin",
    state: "NT",
    country: "Australia",
    zip: "0810",
    phone: "+61 4 8197 7528",
    phoneHref: "+61481977528",
  },
  {
    name: "Brisbane",
    brand: "RNOW Pacific",
    address1: "Unit 1, 1425 Boundary Rd",
    address2: "Wacol",
    city: "Brisbane",
    state: "QLD",
    country: "Australia",
    zip: "4076",
    phone: "+61 7 3279 3535",
    phoneHref: "+61732793535",
  },
  {
    name: "Roma",
    brand: "RNOW Pacific",
    address1: "17 Linton St",
    city: "Roma",
    state: "QLD",
    country: "Australia",
    zip: "4455",
    phone: "+61 7 4622 3444",
    phoneHref: "+61746223444",
  },
  {
    name: "Melbourne",
    brand: "RNOW Pacific",
    address1: "Unit F10, Hallmarc Business Park",
    address2: "2A Westall Road, Springvale",
    city: "Melbourne",
    state: "VIC",
    country: "Australia",
    zip: "3171",
    phone: "+61 3 9548 8935",
    phoneHref: "+61395488935",
  },
  {
    name: "Calgary",
    brand: "RNOW Industrial Supply",
    address1: "4500 Manhattan Road SE",
    city: "Calgary",
    state: "AB",
    country: "Canada",
    zip: "T2G 4B7",
    phone: "+1 (403) 555-0142",
    phoneHref: "+14035550142",
  },
  {
    name: "Odessa",
    brand: "RNOW Industrial Supply",
    address1: "2100 W County Road",
    city: "Odessa",
    state: "TX",
    country: "United States",
    zip: "79763",
    phone: "+1 (432) 555-0118",
    phoneHref: "+14325550118",
  },
  {
    name: "Aberdeen",
    brand: "RNOW Industrial Supply",
    address1: "Wellheads Industrial Estate",
    city: "Aberdeen",
    state: "",
    country: "United Kingdom",
    zip: "AB21 7GA",
    phone: "+44 1224 555 019",
    phoneHref: "+441224555019",
  },
  {
    name: "Singapore",
    brand: "RNOW Industrial Supply",
    address1: "8 Pioneer Sector 1",
    city: "Singapore",
    state: "",
    country: "Singapore",
    zip: "628413",
    phone: "+65 6555 0173",
    phoneHref: "+6565550173",
  },
];

export type RegionCluster = {
  label: string;
  count: number;
  top: string;
  left: string;
  color: "orange" | "blue";
};

/** Approximate placement over the world map background — illustrative, not geocoded. */
export const regionClusters: RegionCluster[] = [
  { label: "Western Canada", count: 3, top: "34%", left: "17%", color: "blue" },
  { label: "Canada", count: 12, top: "38%", left: "22%", color: "orange" },
  { label: "United States", count: 40, top: "48%", left: "20%", color: "orange" },
  { label: "Atlantic", count: 6, top: "44%", left: "27%", color: "orange" },
  { label: "Europe", count: 5, top: "36%", left: "48%", color: "blue" },
  { label: "Middle East", count: 2, top: "50%", left: "60%", color: "blue" },
  { label: "Southeast Asia", count: 2, top: "62%", left: "80%", color: "blue" },
  { label: "Australia", count: 3, top: "76%", left: "85%", color: "blue" },
];
