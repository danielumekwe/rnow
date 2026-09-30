import type { Faq } from "@/data/aboutFaqs";
import { siteImages } from "@/lib/images";

const img = siteImages.midstreamPage;

export const midstreamProducts = [
  {
    title: "Premium PVF Solutions",
    image: img.pvf,
    fit: "object-contain" as const,
    description: "Find premium PVF solutions for efficient and seamless operations.",
    linkLabel: "View our quality PVF",
    linkHref: "/products-and-services/pvf",
  },
  {
    title: "Industrial Pumps and Packages",
    image: img.pumps,
    fit: "object-contain" as const,
    description: "Boost operations with our premier pumps and custom packages.",
    linkLabel: "See our pump solutions",
    linkHref: "/products-and-services/pumps-packages",
  },
  {
    title: "Quality Production Equipment",
    image: img.production,
    fit: "object-cover" as const,
    description: "We design, engineer and fabricate pump and pump packages.",
    linkLabel: "Find process equipment",
    linkHref: "/products-and-services/process-production-equipment",
  },
  {
    title: "Advanced Instrumentation",
    image: img.instrumentation,
    fit: "object-contain" as const,
    description: "Our instruments ensure precise measurements, optimizing safety and profitability.",
    linkLabel: "View measurement devices",
    linkHref: "/products-and-services/instrumentation-measurement",
  },
  {
    title: "Efficient Flex Flow Systems",
    image: img.flexFlow,
    fit: "object-cover" as const,
    description: "Flex Flow HPS systems are perfect for diverse fluid transfers, combining top performance with savings.",
    linkLabel: "Explore these systems",
    linkHref: "/products-and-services/artificial-lift",
  },
  {
    title: "EcoVapor: Eliminate Flaring and Venting",
    image: img.ecoVapor,
    fit: "object-cover" as const,
    description: "EcoVapor solutions reduce emissions and ensuring gases adhere to pipeline protocols.",
    linkLabel: "Discover EcoVapor benefits",
    linkHref: "/industries/carbon-management",
  },
];

export const midstreamFaqs: Faq[] = [
  {
    question: "What is the midstream infrastructure?",
    answer:
      "Midstream infrastructure covers the systems that gather, process, transport and store oil, natural gas and related products between the wellhead and the refinery or end user. That includes gathering lines, processing plants, compressor and pump stations, transmission pipelines, storage terminals and metering facilities.",
  },
  {
    question: "Why are midstream suppliers important to the oil and gas industry?",
    answer:
      "Midstream projects depend on reliable, timely supply of pipe, valves, fittings, pumps, instrumentation and packaged equipment. A capable supplier keeps projects on schedule, maintains quality and helps operators avoid costly downtime.",
  },
  {
    question: "How do you ensure success for your midstream transmission project?",
    answer:
      "Success starts with early planning: matching the right materials and equipment to your specifications, coordinating procurement and delivery, and providing project management and field support. Our dedicated sales and project teams stay engaged from quotation through commissioning.",
  },
  {
    question: "Why are midstream transmission projects critical to the success of the energy industry?",
    answer:
      "Transmission pipelines and their supporting facilities connect production to markets. Safe, efficient midstream infrastructure keeps energy flowing reliably and supports both supply security and the economics of the entire value chain.",
  },
  {
    question: "How can you be successful in midstream transmission projects?",
    answer:
      "Work with partners who understand the sector, plan procurement early, standardize on quality materials and build in safety and quality testing. Access to local stock, engineering support and responsive service helps projects stay on time and on budget.",
  },
];
