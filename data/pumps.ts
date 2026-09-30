const dir = "/images/Pump%20and%20pac%20kages/";

export const pumpProducts = [
  {
    title: "Centrifugal Pumps",
    image: `${dir}Centrifugal_pumps_thumb.webp`,
    description:
      "RNOW is your solution to transport fluids by converting rotational kinetic energy to the hydrodynamic energy of the fluid flow.",
  },
  {
    title: "Chemical Dosing & Metering Pumps",
    image: `${dir}Chemical_injection_pumps_thumb.webp`,
    description:
      "RNOW is your solution for pumps that move precise volumes of flow under very high pressures and temperatures.",
  },
  {
    title: "Mechanical Seals",
    image: `${dir}Mechanical_seals_thumb.webp`,
    description:
      "RNOW is your sealing solution for containing fluid within rotating equipment, pumps, and applications across all industries.",
  },
  {
    title: "Positive Displacement Pumps",
    image: `${dir}Positive-displacement-thumbnail.webp`,
    description:
      "RNOW is your solution for pumps that deliver constant flow rates at a given speed (rpm) no matter the system discharge pressure.",
  },
  {
    title: "Pump Service & Repair",
    image: `${dir}Pump_service_repair_thumb.webp`,
    description:
      "RNOW offers an entire fleet of pump field services and maintenance programs for in-house repairs, upgrades, and replacement parts.",
  },
  {
    title: "Rental Pumps",
    image: `${dir}rental-pump-fleet-thumbnail.jpg`,
    description:
      "RNOW offers a diverse and comprehensive fleet of rental pumps to serve a wide range of pump applications for various markets.",
  },
  {
    title: "Turnkey Pump & Controls Packages",
    image: `${dir}SWD-Turnkey-Package.webp`,
    description:
      "RNOW offers modularized turnkey pump packages mounted on a single skid and delivered to a customer ready for installation.",
  },
];

export type PumpFeature = {
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
  image: string;
  imageAlt: string;
};

export const pumpFeatures: PumpFeature[] = [
  {
    title: "Precision Machining and Repair Pump Services",
    text: "Our affiliated brand provides precision machining such as engine lathe, power end repairs, multi-stage case repairs and fluid end repairs for all types of pumps. Our precision repair machine facility serves numerous industries, including oil and gas, power generation, petrochemical and municipal markets. We have the staff, knowledge and machinery to provide complete quality service you can count on. Our commitment to your needs is best stated in our mission statement: “We will put forth our best effort in all we do with honesty and integrity.”",
    linkLabel: "Learn more about our pump service and repair offerings",
    linkHref: "/contact",
    image: `${dir}Machine_Shop_Odessa_Texas.webp`,
    imageAlt: "Machine shop lathe used for pump repair",
  },
  {
    title: "A History of Providing Pump Packages, Parts and Repair",
    text: "Providing pump solutions, packages, parts, repair, field services and machining for decades, we have been a key supplier of quality equipment for the energy and industrial market. Over the years, we have become known for our commitment to customer service and our dedication to providing the best quality pump solutions. We strive to provide top-tier local service and support so you can get the most out of your equipment and get the job done right. With our extensive experience in the industry, we have become a trusted name delivering quality solutions time and time again.",
    linkLabel: "Learn more about our affiliated brands",
    linkHref: "/about/brands",
    image: `${dir}Odessa-pumps-Energy-Thumb.webp`,
    imageAlt: "Technician servicing a pump at a field site",
  },
  {
    title: "Reliable and Unmanned Custom Pump Solutions for the Harshest Environments",
    text: "Our affiliated brand fabricates pump packages with custom pump integrations that allow the unit to be operated entirely unmanned in the harshest environments possible. Not only are our custom pump packages designed with longevity and durability in mind, but our quality assurance process ensures that the product you receive is up to the highest standards of excellence. With our pump packages, you get a reliable product that can handle whatever your industry throws your way.",
    linkLabel: "Learn more about our affiliated brands",
    linkHref: "/about/brands",
    image: `${dir}MarkWest-Pump-Skid-1320000036_02.webp`,
    imageAlt: "Custom pump skid at a field site",
  },
  {
    title: "Rental, Installation and Service of High-Performance Horizontal Pumping Systems",
    text: "Our affiliated brand is a leading provider of H-pump solutions for surface applications across the energy industry. We offer rental, permanent installation and service of high-performance horizontal pumping systems (HPS) and hydraulic jet pumps (HJP). We provide our customers with the H-pump expertise they need throughout the lifecycle of their water management applications. Our pumps are designed to offer maximum efficiency and reliable performance with low maintenance costs and a robust design. With the advanced technology and quality components built into each pump, you can rest assured that your water management needs will be met easily and efficiently.",
    linkLabel: "Learn more about our affiliated brands",
    linkHref: "/about/brands",
    image: `${dir}Rental-pumps_Flex-Flow-HPS.jpg`,
    imageAlt: "Horizontal pumping systems on a field location",
  },
];
