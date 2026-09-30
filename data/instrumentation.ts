import { siteImages } from "@/lib/images";

const img = siteImages.instrumentationPage;

export type InstrumentationSection = {
  title: string;
  description: string;
  items: string[];
  linkLabel: string;
  linkHref: string;
  image?: string;
  imageAlt?: string;
};

export const instrumentationSections: InstrumentationSection[] = [
  {
    title: "Gauges and Sensors",
    description:
      "When working with liquids and gasses, it is essential to have the ability to measure and regulate the pressure, temperature and flow. We offer extensive flow control and measurement instrumentation, including various gauges and sensors. From mechanical pressure gauges to electronic sensors and accessories, you can find the ideal product for your task from our wide collection of instrumentation.",
    items: [
      "Mechanical pressure gauges",
      "Mechanical temperature gauges and thermowells",
      "Diaphragm seal instruments",
      "Electronic pressure sensors",
      "Electronic pressure transmitters and transducers",
      "Electronic temperature sensors",
      "Level sensors and gauges",
      "Ultra high-purity pressure gauges",
      "Differential pressure gauges",
      "OEM/Customized pressure and temperature instruments",
      "SF6 gas analyzer and filling units",
      "Gauge accessories",
    ],
    linkLabel: "Shop for instrument gauges and sensors",
    linkHref: "/products-and-services",
    image: img.gauges,
    imageAlt: "Pressure gauges, thermowells and electronic sensors",
  },
  {
    title: "Instrumentation Fittings",
    description:
      "Instrument fittings are essential to connect and secure various tubing and piping systems. They are made from high-quality materials such as stainless steel and brass to ensure durability and resistance to corrosion. Allowing you to measure and control the flow, pressure and temperature critical to your operation. We have various instrumentation fittings, such as T-fittings, union fittings and manifold fittings, to attach sensors and gauges to pipes, increasing the accuracy and integrity of your flow control and measurement instrumentation system. Contact us to order various styles, such as:",
    items: [
      "NPT thread",
      "Socket weld",
      "Butt weld",
      "Single- and two-ferrule design",
      "Connection adapters",
      "Dielectric Unions",
    ],
    linkLabel: "Shop for instrumentation fittings",
    linkHref: "/products-and-services",
    image: img.fittings,
    imageAlt: "Instrumentation tube fittings, tees and unions",
  },
  {
    title: "Instrumentation Valves and Other Products",
    description:
      "Instrumentation valves are critical in controlling the flow of gasses, liquids and other loose materials through your piping system. Our valves are made with precision engineering and are built to withstand even the harshest industrial conditions. They come in various types, such as ball valves, check valves and needle valves, providing you with the flexibility to choose what you need to regulate the flow of fluids in your system.",
    items: [
      "Bleed valves",
      "Ball valves",
      "Check valves",
      "Inline filters",
      "Needle valves",
      "Lower packing valves",
      "Metering valves",
      "Relief Valves",
      "Toggle valves",
      "Plug valves",
      "Purge valves",
      "Quick connects",
      "Full flow quick connects",
      "Tee filters",
      "Manifolds",
      "Steam Traps",
    ],
    linkLabel: "Shop for valves",
    linkHref: "/products-and-services/valves",
  },
  {
    title: "Instrumentation Hose Assemblies",
    description:
      "Compressed gas and industrial applications place extreme demands on all system components, including the instrumentation hose assemblies. Our instrumentation hose assemblies are designed to handle high-pressure applications. They are suitable for oil and gas, chemical processing and pharmaceuticals to meet the most rigorous industrial and compressed gas application requirements. We carry high-quality products from some of the most trusted names in the business, and our experienced staff can help you find the right products for your specific application. Contact us today to learn more about our instrumentation hose assemblies.",
    items: ["Medium pressure smooth bore PTFE", "High pressure flexible metal"],
    linkLabel: "Shop for instrumentation",
    linkHref: "/products-and-services",
  },
];

export const instrumentationPartners = [
  "Ashcroft", "Badger Meter", "H.O. Trerice", "KENCO",
  "Kimray", "Norriseal-Wellmark", "Parker Hannifin", "Rosemount",
  "SSP (FloLok)", "Swagelok", "Tylok International", "WIKA Instrument",
];
