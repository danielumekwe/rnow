import type { Faq } from "@/data/aboutFaqs";
import { siteImages } from "@/lib/images";

const img = siteImages.artificialLiftPage;

export const artificialLiftOfferings = [
  {
    title: "Reciprocating Rod Lift Systems",
    image: img.rodLift,
    alt: "Pumpjack on a production well",
    description:
      "Our rod lift system packages are designed for API or specialty rod pumps, sucker rods and accessories. Reciprocating rod lift systems are also more efficient than other lift systems, making them attractive for producers looking to maximize production. We can cover everything from sucker rod size/metallurgy and rod guide specs/placement to completions and surface equipment needs.",
  },
  {
    title: "Progressive Cavity Systems",
    image: img.pcp,
    alt: "Progressive cavity pump system",
    description:
      "We specialize in providing complete PCP pump system designs that take into account all environmental and technical aspects of a well, including operating conditions, component metallurgies, and fluid properties. Our PCP systems are renowned for their superior performance and reliability, and our experts provide unmatched technical expertise to design and deliver custom PCP solutions.",
  },
  {
    title: "Well Automation and Control Packages",
    image: img.wellAutomation,
    alt: "Row of well automation and control panels",
    description:
      "We offer well automation and control packages for rod pumps, PC pumps and electric submersible pump systems. Our automation and control packages minimize power usage per produced barrel while reducing wear on the equipment. RNOW offers 3 automation packages for new or existing well equipment: basic, enhanced and intuition packages to increase production and efficiency.",
  },
  {
    title: "Flex Flow Hydraulic Jet Pump (HJP)",
    image: img.flexFlow,
    alt: "Flex Flow hydraulic jet pump",
    description:
      "The hydraulic jet pump is vital for many oil and gas operations. It consists of a nozzle, throat and diffuser, through which high-pressure fluid is pumped. This fluid velocity increase creates a low-pressure differential, which in turn draws production fluid from the formation. The mixed fluids then pass through a throat and into the diffuser, where the fluid is converted into low-velocity/high-pressure form.",
  },
];

export const artificialLiftFaqs: Faq[] = [
  {
    question: "What is artificial lift? How can it benefit your oil well?",
    answer:
      "Artificial lift is any method used to raise production fluids to the surface when a well's natural reservoir pressure is too low to do so on its own. The right system can restore or increase flow rates, extend well life and improve overall production economics.",
  },
  {
    question: "What are common artificial lift methods?",
    answer:
      "Common methods include reciprocating rod lift, progressive cavity pumps, electric submersible pumps, hydraulic jet pumps and gas lift. The best choice depends on well depth, fluid properties, production rates and operating conditions.",
  },
  {
    question: "How do I select the right artificial lift product or service for my well?",
    answer:
      "Selection starts with your well conditions: depth, fluid composition, expected rates and environment. Our product specialists can review your data and recommend a system, then support you with design, installation and ongoing optimization.",
  },
  {
    question: "What are the main benefits of using a reciprocating rod lift (RRL) package?",
    answer:
      "Rod lift packages are efficient, proven and adaptable across a wide range of wells. A complete package matches the pump, rods and surface equipment to your well, which helps maximize production while controlling energy and maintenance costs.",
  },
  {
    question: "What are the benefits of the Flex Flow hydraulic jet pump?",
    answer:
      "The hydraulic jet pump has no moving downhole parts, which makes it durable in challenging fluid conditions and reduces wear-related downtime. It handles gas, solids and a wide range of production rates.",
  },
  {
    question: "What services do you offer that can help minimize lease operating expenses (LOE)?",
    answer:
      "We offer product specialists, local pump shop services, failure analysis and solutions consulting, plus customized individual and classroom training, all aimed at reducing downtime and lowering your cost per barrel.",
  },
];
