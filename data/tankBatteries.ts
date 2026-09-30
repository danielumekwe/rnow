import { siteImages } from "@/lib/images";

const img = siteImages.tankBatteriesPage;

export type TankFeature = {
  title: string;
  paragraphs: string[];
  linkLabel?: string;
  linkHref?: string;
  image: string;
  imageAlt: string;
  fit: "object-cover" | "object-contain";
};

export const tankFeatures: TankFeature[] = [
  {
    title: "RNOW U.S. Process Solutions Can Help Supply Your Tank Batteries and Production Facilities",
    paragraphs: [
      "Looking for a reliable solutions partner to help you with your tank battery oil and gas production facility needs? Look no further than our RNOW U.S. Process Solutions group! With years of experience serving the energy industry, we have the expertise to outfit your facility with the latest rotating and process equipment and providing advice on selecting the optimal solution for your project. With our commitment to customer satisfaction, you can always count on us to deliver the quality service and support you deserve.",
    ],
    linkLabel: "Explore process and production equipment",
    linkHref: "/products-and-services/process-production-equipment",
    image: img.experts,
    imageAlt: "RNOW process solutions team at a production site",
    fit: "object-cover",
  },
  {
    title: "Engineering, Design and Fabrication Needs in One Place",
    paragraphs: [
      "RNOW is your go-to source for all things engineering, design, installation, fabrication, distribution and service concerning rotating and process equipment. Our factory-trained service technicians are certified and equipped with the necessary tools to handle repairs at any location. With fully staffed service centers to provide expert diagnostics and our on-call service trucks, we are here to keep your systems functioning smoothly!",
    ],
    linkLabel: "Learn more about what our engineering and fabrication teams can do for you",
    linkHref: "/solutions/engineering-design-fabrication",
    image: img.engineering,
    imageAlt: "Fabricated pressure vessels and modular process packages",
    fit: "object-cover",
  },
  {
    title: "Top-Quality Solutions for Your Water and Wastewater Needs",
    paragraphs: [
      "Our pump teams take pride in delivering top-quality solutions, parts, repair and machining! From groundwater distribution to wastewater treatment – we've got your pumping services covered. Whether you need booster station products, water plants, lift stations or custom controls, we offer unbeatable options all tailored to meet your specific needs. Get the leader for modern water/wastewater technology!",
    ],
    linkLabel: "Learn more about our pumps and packages",
    linkHref: "/products-and-services/pumps-packages",
    image: img.pumps,
    imageAlt: "Industrial pumps",
    fit: "object-contain",
  },
  {
    title: "Efficient Horizontal Pumping System with Flex Flow Services",
    paragraphs: [
      "If you need an efficient surface horizontal pump, our affiliated brand Flex Flow is a leading provider of H-pump solutions for surface applications in the industry. It's much more cost-effective than a triplex positive displacement pump with either permanent or trailer-mounted installation. What's more, this system utilizes reliable multistage centrifugal pumps perfect for dealing with hefty pressure or saltwater injection or transfer needs.",
    ],
    linkLabel: "Learn more what Flex Flow can do for you",
    linkHref: "/about/brands",
    image: img.flexFlow,
    imageAlt: "Trailer-mounted horizontal pumping system",
    fit: "object-cover",
  },
  {
    title: "EcoVapor Promotes Environmental Sustainability Through Advanced Technologies",
    paragraphs: [
      "Our affiliated brand EcoVapor is committed to helping you reach both environmental and financial sustainability! We've got an expanding range of solutions for emissions management and bio-gas clarification that fit into the oil, gas and increasing RNG markets. Get in touch today to find out more about our products!",
    ],
    linkLabel: "Learn more what EcoVapor can do for you",
    linkHref: "/industries/carbon-management",
    image: img.ecoVapor,
    imageAlt: "EcoVapor emissions management system",
    fit: "object-contain",
  },
  {
    title: "Get the Job Done Right with Our Online Store of Parts and Supplies for Tank Batteries and Production Facilities",
    paragraphs: [
      "Shop your way through the convenience of online and find your energy and industrial needs in our online store. We've got all the tools, parts and supplies you need to get the job done right – from instrumentation and measuring devices to valves, fittings, flanges, gaskets, safety gear and more. In stock and ready to ship or pick up – whatever's most convenient for you. Get your project going with RNOW today.",
    ],
    linkLabel: "Learn more about our B2B online store",
    linkHref: "/products-and-services",
    image: img.store,
    imageAlt: "RNOW online store on desktop, tablet and mobile",
    fit: "object-cover",
  },
];
