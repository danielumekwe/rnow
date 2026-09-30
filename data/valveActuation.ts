export const valveCapabilities = [
  {
    title: "Valve Actuation Services",
    text: "Our actuation specialists are some of the most knowledgeable in the industry. We offer electric, pneumatic, direct gas and hydraulic actuators. We can also customize an automated system to fit your needs. We are here to help you find a modest, efficient and economical actuation solution that meets your requirements.",
  },
  {
    title: "Valve Modification Services",
    text: "We can handle many modifications, from simple end connection alterations to more complete projects like pup and stem extensions. Our machine shop and drafting department are well-equipped and staffed with experienced professionals, to take on any project you need.",
  },
  {
    title: "Valve Repair Services",
    text: "Here at RNOW Valves & Actuation, we understand the importance of reliable repair and service. We offer complete in-shop repair and maintenance services and 24/7 field service capabilities with fully equipped service trucks. Our service technicians are highly skilled and have years of experience in valve repair and maintenance.",
  },
];

export type BulletNode = { text: string; children?: string[] };

export const inHouseSolutions: BulletNode[] = [
  { text: "Installation or replacement of actuation packages" },
  { text: "Calibration of valves, actuators and controls" },
  { text: "Hydrostatic and leakage testing" },
  { text: "Valve and actuator repair and reconditioning" },
  { text: "Changing valve trim and seats" },
  { text: "Providing sizing criteria, control logics, documentation, drawings and functional testing" },
  {
    text: "Actuation package design",
    children: [
      "CAD drafting",
      "“Outline” and “as built” dimension drawings",
      "Control schematics",
      "Wiring diagrams",
    ],
  },
  { text: "Custom control panel design" },
  { text: "Custom mounting kits and lock-outs" },
];

export const fieldSolutions: BulletNode[] = [
  { text: "Repair" },
  { text: "Replacement" },
  { text: "Commissioning" },
  { text: "Recalibration" },
  { text: "Installation or replacement of automation packages" },
  { text: "Site surveys" },
];

export const reconditioningSteps = [
  "Complete disassembly and breakdown of valves and components",
  "Thorough inspection of all parts to ensure conformance with ASME, ANSI and ISA standards",
  "Replacement of non-conforming parts",
  "Reassembly",
  "Complete pressure testing of the valve assembly (hydrostatic, seat and performance)",
];

export const serviceCapabilityTabs = [
  {
    label: "On-site Services",
    items: [
      "Field installation and commissioning of valves and actuators",
      "Site surveys and condition assessments",
      "Recalibration and troubleshooting of automated valves",
      "24/7 emergency field service with equipped service trucks",
    ],
  },
  {
    label: "Workshop Repair & Testing",
    items: [
      "Complete disassembly, inspection and reconditioning",
      "Hydrostatic, seat and performance testing",
      "Changing valve trim and seats",
      "Repair reports generated after each job",
    ],
  },
  {
    label: "Actuation",
    items: [
      "Valve & actuator integration",
      "Actuator compatibility assessment",
      "Valve torque measurement",
      "Mounting adaptor design & manufacture",
      "Control panel design & manufacture",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Actuation package design and sizing criteria",
      "CAD drafting and dimension drawings",
      "Control schematics and wiring diagrams",
      "Custom mounting kits and lock-outs",
    ],
  },
  {
    label: "Inventory Management & Supply Chain Services",
    items: [
      "Stocking distribution of valves, actuators and related components",
      "Inventory planning and management",
      "Materials management aligned to your turnaround schedule",
      "Global product delivery",
    ],
  },
];

export const valveReasons = [
  "Our actuation specialists are some of the most knowledgeable in the industry, and we take great pride in our offerings from electric and pneumatic to direct gas and hydraulic.",
  "Our modification capabilities are comprehensive. With a complete in-house machine shop and a fully staffed drafting department capable of both 2D and 3D design, RNOW Valves & Actuation has the expertise for almost anything from basic end connection alteration to the full pup and STEM extension.",
  "Another place where RNOW Valves & Actuation really stand apart is with our repair and service department. Not only do we offer full in-shop repair and maintenance services, but we also have full 24/7 field service capabilities, including fully equipped service trucks.",
];
