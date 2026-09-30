import type { Faq } from "@/data/aboutFaqs";
import { siteImages } from "@/lib/images";

const img = siteImages.artificialLiftOpsPage;

export const liftBenefits = [
  {
    title: "Full Portfolio of Products",
    text: "At RNOW, we understand the importance of supplying quality artificial lift equipment and expertise to the oil and gas industry. Our team is constantly searching for new technology to help you lower lifting costs and decrease downtime. We are committed to providing our clients with the best possible service and products available.",
  },
  {
    title: "Local Business Locations",
    text: "RNOW artificial lift locations comply with strict safety and quality procedures to guarantee that you receive the highest quality artificial lift service. With a deep understanding of the local environment and years of experience in the industry, our strategically placed locations are fully equipped to meet your specific needs.",
  },
  {
    title: "Value-Added Services",
    text: "We pride ourselves on providing quality, leading-edge products and artificial lift services. Our services include product specialists and local pump shop services, failure analysis and solutions consulting, critical well hook-up components, and customized individual and classroom training.",
  },
];

export const liftTechnologies = [
  {
    title: "Reciprocating Rod Lift (RRL) Systems",
    image: img.rrl,
    alt: "Pumpjack on a production well",
    text: "We offer complete rod lift system packages, including API or specialty rod pumps, sucker rods, and accessories manufactured to meet a wide variety of applications. We also offer complete system design and performance analysis, including pre or post plunger lift well life cycle applications.",
    linkLabel: "Learn More About Our RRL Packages",
    linkHref: "/products-and-services/artificial-lift",
  },
  {
    title: "Progressive Cavity Pump (PCP) Systems",
    image: img.pcp,
    alt: "Progressive cavity pump drive",
    text: "We offer complete PC pump systems and related products. We specialize in comprehensive and customized PC pump system designs that consider a well's environmental and technical aspects. This includes operating conditions, component metallurgies, and fluid properties.",
    linkLabel: "Learn More About Our PCP Systems",
    linkHref: "/products-and-services/artificial-lift",
  },
  {
    title: "Well Automation and Control Packages",
    image: img.automation,
    alt: "Row of well automation and control panels",
    text: "RNOW provides three automation packages for new or existing well equipment (rod pumps, PC pumps and electric submersible pump systems). Our basic package includes a standalone variable frequency drive (VFD) with manual controls and an interface. We also provide a second package with an integrated VFD/POC package with digital sensor data, speed control optimization and surface cards. Our third package includes an integrated VFD and POC package with a digital interface and intelligent optimization capabilities.",
    linkLabel: "Learn More About Our VFDs",
    linkHref: "/products-and-services/artificial-lift",
  },
  {
    title: "Flex Flow Systems and Solutions",
    image: img.flexFlow,
    alt: "Horizontal pumping system on a flatbed trailer",
    text: "Our affiliated brand Flex Flow offers solutions from flowback through production for artificial lift operations by combining a unique horizontal pumping system (HPS) with a versatile hydraulic jet pump (HJP). The HJP/HPS combination provides many advantages over conventional lift systems. Our goal is to lift higher volumes and reduce operating costs by eliminating the common issues of gas locking and solids handling, maintaining production over a wide range of rates and reducing well intervention and maintenance downtime.",
    linkLabel: "Learn More About Flex Flow",
    linkHref: "/about/brands",
  },
];

export const liftServices = [
  "System installation",
  "Echometer plunger tracking and fluid level",
  "Well Optimization Consulting and advisory",
  "Troubleshooting and inspection",
  "On-site assistance",
];

export const liftFaqs: Faq[] = [
  {
    question: "What is an artificial lift method?",
    answer:
      "An artificial lift method is any technique used to raise oil and other fluids to the surface when a well's natural reservoir pressure is too low to do so on its own. Common methods include rod lift, progressive cavity pumps, electric submersible pumps, plunger lift, gas lift and hydraulic jet pumps.",
  },
  {
    question: "Why do you need an artificial lift system?",
    answer:
      "Most wells lose natural pressure over time. An artificial lift system restores or increases flow, helping you maintain production from aging wells and bring new wells online more efficiently, while keeping lifting costs under control.",
  },
  {
    question: "How do artificial lift systems benefit your oil well?",
    answer:
      "The right system increases production rates, extends well life, reduces downtime and lowers operating costs per barrel. Matching the lift method to your well conditions is the key to getting those benefits.",
  },
  {
    question: "What is flowback?",
    answer:
      "Flowback is the return flow of fluids, such as injected water, proppant and formation fluids, from a well after hydraulic fracturing and before it settles into steady production. Artificial lift can help manage flowback and transition the well to production.",
  },
];
