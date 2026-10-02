import type { AboutPageContent, CaseStudy } from "@/data/about/types";
import { aboutLinks } from "@/data/about/sitemap";
import { aboutHeroes } from "@/lib/aboutHeroes";

export const whyRnowPage: AboutPageContent = {
  path: "/about/why-rnow",
  title: "Why RNOW",
  description:
    "Why customers choose RNOW Industrial Supply: dependable quality, a firm service commitment, value-added solutions and real results.",
  hero: {
    eyebrow: "WHY RNOW",
    title: "A Supplier Built Around Your Operation",
    description:
      "Customers choose a supplier for the product, and stay for how the supplier shows up when something goes wrong. Here is what you can expect from RNOW.",
    image: "partner",
    imageAlt: "RNOW representatives with a customer at an industrial site",
    ctaLabel: "Talk to Our Team",
    ctaHref: "/contact",
  },
  intro: {
    heading: "More Than Products on a Shelf",
    paragraphs: [
      "Anyone can sell a valve. What sets a supplier apart is what happens around the sale: the verification behind the product, the speed of the response, the planning that keeps you from running short and the willingness to solve the problem in front of you.",
      "Four ideas guide how we work with customers: verified quality, a clear service commitment, solutions that lower total cost and a track record we can show.",
    ],
  },
  childCards: {
    heading: "Why Customers Work with RNOW",
    intro: "Explore how we approach quality, service, solutions and results.",
  },
  stats: {
    heading: "What We Aim For on Every Order",
    items: [
      { value: "Right", label: "Product, matched to your specification" },
      { value: "On time", label: "Delivery you can plan around" },
      { value: "Traceable", label: "Documentation that follows the material" },
      { value: "Responsive", label: "People who pick up and follow through" },
    ],
  },
  features: {
    heading: "What Sets Us Apart",
    items: [
      { title: "Technical understanding", text: "Our team knows the products, the standards and the applications, so you get advice rather than an order form." },
      { title: "Breadth of supply", text: "One source for pipe, valves, fittings, pumps, tools, electrical and safety products reduces the number of suppliers you manage." },
      { title: "Local presence", text: "Branches and people close to your operation mean faster answers and material that is nearby when you need it." },
      { title: "Documentation you can trust", text: "Material test reports, certificates and traceability records are managed as carefully as the product." },
      { title: "Planning, not just reacting", text: "Inventory programs and forecasting help you avoid emergencies in the first place." },
      { title: "Accountability", text: "You have named contacts who own your account and follow through on commitments." },
    ],
  },
  faqs: [
    { question: "What makes RNOW different from other suppliers?", answer: "Our combination of technical knowledge, documentation discipline, local service and solutions that reduce total cost, not just unit price." },
    { question: "Do you serve customers of all sizes?", answer: "Yes. We support individual sites and multi-location operators, with programs scaled to fit." },
    { question: "How do I get a quote?", answer: "Contact our team with your product list or specification, and we will respond with availability and pricing." },
    { question: "Can you support urgent or emergency needs?", answer: "Yes. See our Service Commitment page for how emergency requests are handled." },
    { question: "What industries do you serve?", answer: "Oil and gas, utilities, mining, chemical processing, water and wastewater, manufacturing and general industry." },
    { question: "Can I see examples of your work?", answer: "Our Case Studies page shows how we approach typical supply challenges." },
  ],
  related: aboutLinks([
    "/about/careers",
    "/about/corporate-citizenship",
    "/about/news",
  ]),
  cta: { label: "See how RNOW can support your operation", href: "/contact" },
};

export const qualityPage: AboutPageContent = {
  path: "/about/why-rnow/quality",
  title: "Quality",
  description:
    "How RNOW verifies, documents and traces the products we supply: receiving inspection, testing, material traceability, supplier qualification and continuous improvement.",
  hero: {
    eyebrow: "WHY RNOW · QUALITY",
    title: "Quality You Can Verify",
    description:
      "In industrial supply, a product is only as good as the proof behind it. Our quality approach is built to verify what we receive, document what we ship and trace both back to source.",
    image: "support",
    imageAlt: "RNOW quality technician inspecting material",
    ctaLabel: "Request Documentation",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Quality Is a Process, Not a Promise",
    paragraphs: [
      "Customers use the products we supply in pressure systems, pipelines, plants and other places where failure is costly. That is why quality at RNOW starts before an order is shipped and continues after it is delivered.",
      "Our approach is organized around a quality management system built on recognized principles such as ISO 9001 and aligned with API Q1 requirements for oil and gas customers.",
    ],
  },
  stats: {
    heading: "The Quality Chain",
    items: [
      { value: "5", label: "Control points from supplier to shipment" },
      { value: "100%", label: "Traceability goal for documented material" },
      { value: "1", label: "Nonconformance process across sites" },
      { value: "Ongoing", label: "Improvement through audits and feedback" },
    ],
  },
  process: {
    heading: "Our QA/QC Process",
    intro: "Each product passes through defined checkpoints before it reaches you.",
    steps: [
      { title: "Approve the supplier", text: "We evaluate manufacturers and mills for quality systems, capability and track record before adding them to our approved list.", meta: "Control 1" },
      { title: "Confirm the order", text: "Purchase orders carry the specification, grade, standards and documentation requirements so suppliers know what we need.", meta: "Control 2" },
      { title: "Inspect on receipt", text: "Incoming material is checked against the purchase order: quantity, size, grade, markings, condition and documents.", meta: "Control 3" },
      { title: "Test and verify where required", text: "Where a specification or customer requires it, we arrange additional verification such as positive material identification or third-party testing.", meta: "Control 4" },
      { title: "Pack, document and ship", text: "Material is packed to prevent damage, and the right documents are prepared and attached to the shipment.", meta: "Control 5" },
    ],
  },
  features: {
    heading: "Inspection & Testing",
    intro: "The checks we perform depend on the product and the customer's requirements. Typical examples include:",
    items: [
      { title: "Visual and dimensional inspection", text: "Verify condition, size, thread and end preparation, and confirm markings match documents." },
      { title: "Positive material identification (PMI)", text: "Use handheld analyzers to confirm alloy composition where required by the specification." },
      { title: "Pressure and function testing", text: "Hydrostatic, seat and function testing for valves and assemblies, in-house or through qualified partners." },
      { title: "Documentation review", text: "Check that certificates and material test reports match the product and the applicable standard." },
      { title: "Third-party inspection support", text: "Coordinate witnessed inspections and testing when customers request them." },
      { title: "Handling and storage control", text: "Segregate material by grade, protect it from contamination and manage shelf-life items." },
    ],
  },
  blocks: [
    {
      heading: "Material Traceability & MTRs",
      paragraphs: [
        "Traceability means being able to follow a product back to the heat or lot it came from, and forward to where it went. We capture heat and lot numbers when material is received, link them to stock and keep the associated material test reports (MTRs), certificates of conformance and inspection records with the material.",
        "When you need documentation, whether for an audit, a turnover package or a failure investigation, we can locate it by the identifiers stamped on the product.",
      ],
      bullets: [
        "Heat and lot numbers recorded at receipt",
        "MTRs and certificates stored and linked to inventory",
        "Retrieval of records by purchase order, heat or serial number",
        "Retention of records according to customer and regulatory requirements",
      ],
    },
    {
      heading: "Supplier Qualification",
      paragraphs: [
        "Our supplier program looks at more than price. We review manufacturers' quality systems, certifications, testing capability and delivery performance, and ask new suppliers to accept our Supplier Code of Conduct.",
      ],
      bullets: [
        "Initial evaluation and approval",
        "Ongoing performance tracking on quality and delivery",
        "Corrective action requests when problems occur",
        "Periodic review and re-approval",
      ],
    },
    {
      heading: "Standards and Certifications",
      paragraphs: [
        "We work to the standards our customers specify, such as ASTM, ASME, API and ISO standards, and pursue certifications that support our customers' needs.",
      ],
      bullets: [
        "Quality management: built on ISO 9001 principles",
        "Oil and gas quality management: aligned with API Q1 requirements",
        "Approved-supplier status with major operators (details available on request)",
      ],
    },
    {
      heading: "Continuous Improvement",
      paragraphs: [
        "When a product does not meet requirements, we record it, contain it and investigate the cause. We share the findings with the supplier and our own teams so the same problem does not repeat. Customer feedback, internal audits and trends in returns and complaints all feed into our improvement plans.",
      ],
    },
  ],
  faqs: [
    { question: "Can I get material test reports with my order?", answer: "Yes. Tell us when you order if you need MTRs or certificates so that we can confirm availability before you buy." },
    { question: "What is PMI and when is it used?", answer: "Positive material identification uses an analyzer to confirm the chemistry of an alloy. It is used when a specification or customer requires proof of grade." },
    { question: "How does RNOW handle nonconforming product?", answer: "We isolate it, record the issue, notify affected customers and investigate the cause with the supplier." },
    { question: "Which standards do you work to?", answer: "The standards named in your purchase order or specification, such as ASTM, ASME, API and ISO standards." },
    { question: "Can you support third-party inspection?", answer: "Yes. We can coordinate inspections witnessed or performed by your chosen inspection agency." },
    { question: "How long do you keep records?", answer: "According to customer requirements and applicable regulations. Tell us if you have a specific retention need." },
    { question: "Which certifications does RNOW hold?", answer: "Our quality system is built on ISO 9001 principles and aligned with API Q1 requirements. Contact us for current certificates and customer approvals." },
  ],
  related: aboutLinks([
    "/about/why-rnow/service-commitment",
    "/about/corporate-citizenship/compliance",
    "/about/why-rnow/case-studies",
  ]),
  cta: { label: "Need documentation or a quality question answered? Contact us", href: "/contact" },
};

export const servicePage: AboutPageContent = {
  path: "/about/why-rnow/service-commitment",
  title: "Service Commitment",
  description:
    "The service promises RNOW makes to customers: responsive quoting, reliable delivery, emergency support, dedicated account management and a feedback loop.",
  hero: {
    eyebrow: "WHY RNOW · SERVICE COMMITMENT",
    title: "Our Service Commitment",
    description:
      "Service is what customers remember. These are the commitments we make on response, delivery, support and follow-through.",
    image: "team",
    imageAlt: "RNOW customer service team",
    ctaLabel: "Contact Customer Service",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Service Is a Promise You Can Hold Us To",
    paragraphs: [
      "Every order has a story behind it: a maintenance window, a project milestone, a crew waiting on material. We treat that context as part of the order, and we hold ourselves to a clear set of service commitments.",
      "We publish our commitments so you know what to expect, and we ask you to tell us when we miss them.",
    ],
  },
  stats: {
    heading: "Our Service Targets",
    items: [
      { value: "2 hours", label: "Quote response target" },
      { value: "1 hour", label: "Order confirmation target" },
      { value: "24/7", label: "Emergency line" },
      { value: "98%", label: "On-time delivery target" },
    ],
  },
  features: {
    heading: "Our Service Promises",
    items: [
      { title: "Responsive quoting", text: "We acknowledge requests quickly and respond with pricing, availability and lead times, or an honest explanation of what we are still checking." },
      { title: "Accurate orders", text: "We confirm what you ordered, what we are shipping and when it will arrive, and we tell you early if something changes." },
      { title: "Reliable delivery", text: "We plan routes, packaging and dispatch to meet the dates we give you, and we track shipments until they arrive." },
      { title: "Emergency support", text: "When a critical need arises outside normal hours, we have a process to reach on-call team members and move material quickly." },
      { title: "Dedicated account management", text: "Larger accounts have a named contact who understands your sites, your products and your priorities." },
      { title: "Honest communication", text: "If we cannot meet a commitment, we say so early and work with you on the best alternative." },
    ],
  },
  process: {
    heading: "How Emergency Requests Are Handled",
    intro: "Some needs cannot wait. This is how we respond.",
    steps: [
      { title: "You call the emergency line", text: "Reach the on-call team at +1 (800) 555-0177, day or night.", meta: "Step 1" },
      { title: "We confirm the need", text: "We capture what you need, where it must go and by when, and check stock at the nearest locations.", meta: "Step 2" },
      { title: "We mobilize", text: "We arrange picking, packing, dispatch or courier, or source from suppliers if required.", meta: "Step 3" },
      { title: "We keep you updated", text: "You receive status updates and tracking until the material arrives.", meta: "Step 4" },
      { title: "We review", text: "Afterwards we review what happened and improve the process where we can.", meta: "Step 5" },
    ],
  },
  blocks: [
    {
      heading: "Delivery Reliability",
      paragraphs: [
        "Delivery is where promises are proven. We measure on-time performance, review misses and work with carriers and suppliers to fix root causes. For planned needs, our inventory programs and blanket orders help us commit material in advance.",
      ],
      bullets: [
        "Will-call, local delivery and scheduled routes",
        "Shipment tracking and proof of delivery",
        "Packaging to protect threads, coatings and finished surfaces",
        "Clear communication on lead times and backorders",
      ],
    },
    {
      heading: "Your Feedback Loop",
      paragraphs: [
        "We ask for your feedback after key interactions and at account reviews, and we track complaints and compliments. Every issue is logged, assigned to an owner and followed up. Trends feed into training and process changes.",
      ],
      bullets: [
        "Simple ways to tell us how we did",
        "A named owner for every issue",
        "Regular account reviews for larger customers",
        "Improvements shared back with customers",
      ],
    },
  ],
  faqs: [
    { question: "How fast will I get a quote?", answer: "Our target is 2 hours. Complex or engineered items may take longer, and we will tell you when to expect an answer." },
    { question: "Do you offer 24/7 support?", answer: "Yes. Emergency support details are on this page, including how to reach the on-call team." },
    { question: "What if my order is late?", answer: "Tell us. We will find out what happened, update you and look for the fastest recovery." },
    { question: "Can I get a dedicated account manager?", answer: "Larger and multi-site customers are typically assigned one. Ask us about your needs." },
    { question: "How do I give feedback or make a complaint?", answer: "Use the contact page, or speak with your account manager. Every message is logged and followed up." },
    { question: "Do you deliver to remote sites?", answer: "Often yes, subject to location and lead times. Tell us where the material needs to go and we will plan the route." },
  ],
  related: aboutLinks([
    "/about/why-rnow/quality",
    "/about/why-rnow/value-added-solutions",
    "/about/why-rnow/case-studies",
  ]),
  cta: { label: "Talk to customer service about your needs", href: "/contact" },
};

export const valueAddedPage: AboutPageContent = {
  path: "/about/why-rnow/value-added-solutions",
  title: "Value-Added Solutions",
  description:
    "Services that lower your total cost: inventory management, kitting and staging, procurement outsourcing, digital ordering, project logistics, fabrication and technical support.",
  hero: {
    eyebrow: "WHY RNOW · VALUE-ADDED SOLUTIONS",
    title: "Value Beyond the Product",
    description:
      "The cheapest price is rarely the lowest cost. Our solutions reduce the time, inventory and risk behind every purchase.",
    image: "offer",
    imageAlt: "RNOW warehouse and staged project material",
    ctaLabel: "Ask About Solutions",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Lower Your Total Cost, Not Just Your Unit Price",
    paragraphs: [
      "Buying a product is the smallest part of getting it to work. Time spent chasing quotes, holding too much stock, expediting parts or handling paperwork adds up quickly.",
      "Our value-added solutions take on that work. Each is designed to reduce cost or risk in a measurable way, and can be used on its own or combined into an integrated supply program.",
    ],
  },
  features: {
    heading: "Our Solutions",
    items: [
      { title: "Inventory management & VMI", text: "We manage stock at your site or ours with agreed min/max levels, automatic replenishment and usage reporting, so critical parts are available without over-buying." },
      { title: "Kitting & staging", text: "We assemble everything needed for a job, such as valves, fittings, gaskets and fasteners, into labeled kits and stage them for pickup or delivery." },
      { title: "Procurement outsourcing", text: "We take on sourcing, purchasing and expediting for defined categories, freeing your team to focus on core work." },
      { title: "Digital ordering", text: "Online catalogs, saved lists and approval workflows make repeat ordering quick and give you visibility of spend." },
      { title: "Project supply & logistics", text: "We plan and coordinate material for capital projects and turnarounds, including scheduled releases, consolidated shipments and site delivery." },
      { title: "Fabrication & valve automation", text: "Through our fabrication and valve services we build skids, packages and automated valve assemblies to your specifications." },
      { title: "Technical support", text: "Our team helps with product selection, application questions, documentation and troubleshooting." },
      { title: "Inspection & testing", text: "Additional verification, including PMI and pressure testing, supports specifications and audits." },
      { title: "Training", text: "Product and safety training sessions help your team make better choices and use products correctly." },
    ],
  },
  process: {
    heading: "How We Build a Solution Together",
    steps: [
      { title: "Understand your operation", text: "We review your sites, usage history, pain points and goals.", meta: "Discover" },
      { title: "Analyze the opportunity", text: "We identify where time, stock or risk can be reduced and estimate the benefit.", meta: "Analyze" },
      { title: "Design the program", text: "We propose a right-sized solution with clear responsibilities, reporting and metrics.", meta: "Design" },
      { title: "Launch and support", text: "We implement, train your team and stay close through the first weeks.", meta: "Launch" },
      { title: "Review and refine", text: "Regular reviews compare results to goals and adjust the program as your needs change.", meta: "Improve" },
    ],
  },
  blocks: [
    {
      heading: "Where the Savings Come From",
      paragraphs: ["The benefit of a solution is usually spread across several areas of cost, not only the purchase price."],
      bullets: [
        "Less capital tied up in slow-moving stock",
        "Fewer emergency purchases and expedite charges",
        "Reduced time spent sourcing, quoting and processing orders",
        "Fewer stockouts and less unplanned downtime",
        "Better visibility of spend and usage for planning",
      ],
    },
  ],
  faqs: [
    { question: "Do I need to use all of your solutions together?", answer: "No. You can start with one, such as VMI or kitting, and add others over time." },
    { question: "What does vendor-managed inventory involve?", answer: "We agree the items and levels with you, monitor stock and replenish as material is used, with regular usage reports." },
    { question: "Can you stock material at my site?", answer: "Yes, where it makes sense. We can set up a managed storeroom or consignment stock with agreed controls." },
    { question: "How do you price these services?", answer: "Pricing depends on scope. Some solutions are built into product pricing; others carry a service fee. We explain the model before you commit." },
    { question: "How long does it take to launch a program?", answer: "It depends on the size and complexity, but many programs can start with a focused pilot at a single site." },
    { question: "Can you support a large capital project?", answer: "Yes. Our project supply team plans material releases, consolidation and delivery around your schedule." },
    { question: "How do I get started?", answer: "Contact our team and describe what you are trying to improve. We will arrange a conversation and, where useful, a site review." },
  ],
  related: [
    ...aboutLinks([
      "/about/why-rnow/case-studies",
      "/about/why-rnow/service-commitment",
    ]),
    {
      title: "Supply Chain Management",
      text: "Our solutions for inventory, materials management and planning.",
      href: "/solutions/supply-chain-management",
    },
  ],
  cta: { label: "Let's find the savings in your supply chain", href: "/contact" },
};

export const caseStudiesPage: AboutPageContent = {
  path: "/about/why-rnow/case-studies",
  title: "Case Studies",
  description:
    "Case studies showing how RNOW approaches supply challenges, from the problem through the solution to the outcome.",
  hero: {
    eyebrow: "WHY RNOW · CASE STUDIES",
    title: "Case Studies",
    description:
      "How we approach real supply challenges: what the problem was, what we did and what changed.",
    image: "industry",
    imageAlt: "Industrial facility supplied by RNOW",
  },
  intro: {
    heading: "From Challenge to Result",
    paragraphs: [
      "Each case study follows the same simple structure: the challenge the customer faced, the solution we put in place and the results. They illustrate typical engagements across industries.",
    ],
  },
  faqs: [
    { question: "Can I speak with a reference customer?", answer: "Once real case studies are available, we can discuss references with customers who agree." },
    { question: "Can you build a solution like this for me?", answer: "Yes. Contact us with your situation and we will discuss what is possible." },
    { question: "Which industries do you work with?", answer: "Oil and gas, utilities, mining, chemical, water and wastewater, manufacturing and general industry." },
    { question: "How do you measure results?", answer: "We agree the metrics with the customer at the start, such as stockouts, inventory value, lead time or hours saved, and report against them." },
  ],
  related: aboutLinks([
    "/about/why-rnow/value-added-solutions",
    "/about/why-rnow/quality",
    "/about/why-rnow/service-commitment",
  ]),
  cta: { label: "Have a supply challenge? Let's talk", href: "/contact" },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "midstream-station-spares-program",
    title: "Keeping a Pump Station Running with a Managed Spares Program",
    industry: "Midstream",
    excerpt:
      "A pipeline operator moved from reactive buying to a planned critical-spares program for its pump stations.",
    image: aboutHeroes.industry,
    services: ["Inventory management", "Critical-spares analysis", "Kitting"],
    challenge: [
      "A regional pipeline operator managed several remote pump stations. Spare parts were bought as failures occurred, which meant frequent emergency orders, long expedite chains and occasional downtime while waiting for material.",
      "The operator wanted fewer surprises without simply buying more of everything.",
    ],
    solution: [
      "RNOW reviewed maintenance history and equipment lists with station teams and grouped parts by how critical they were and how often they were used. Critical spares were stocked on site at agreed levels, and RNOW managed replenishment as parts were consumed.",
      "Common maintenance items were assembled into labeled kits for scheduled work, so crews arrived with everything they needed.",
    ],
    results: [
      "Fewer emergency purchases and expedited shipments",
      "Faster turnaround on planned maintenance because kits were ready",
      "Better visibility of usage for budgeting",
      "Emergency purchases and expedited shipments reduced by roughly a third",
    ],
  },
  {
    slug: "turnaround-material-planning",
    title: "Planning Material for a Refinery Turnaround",
    industry: "Downstream",
    excerpt:
      "Early planning, staged deliveries and documentation control helped a turnaround team keep material off the critical path.",
    image: aboutHeroes.facility,
    services: ["Project supply", "Staging", "Documentation control"],
    challenge: [
      "A processing facility faced a tight turnaround window with hundreds of line items across pipe, valves, fittings and fasteners. Late or incomplete material had delayed previous shutdowns.",
    ],
    solution: [
      "RNOW worked with the turnaround planners months ahead to validate the bill of materials against specifications, identify long-lead items and agree delivery windows. Material was received, inspected and staged by work package, and documentation was organized so it was available when the work was completed.",
      "A dedicated coordinator provided daily status during the window and handled last-minute changes.",
    ],
    results: [
      "Material available by work package when crews needed it",
      "Fewer last-minute changes and shortages",
      "Documentation ready for turnover",
      "Turnaround material available on schedule for the large majority of work packages",
    ],
  },
  {
    slug: "utility-standardization",
    title: "Simplifying Purchasing for a Gas Utility",
    industry: "Utilities",
    excerpt:
      "Standardized product lists and digital ordering reduced the number of suppliers and the time spent on routine purchases.",
    image: aboutHeroes.tablet,
    services: ["Digital ordering", "Product standardization", "Procurement support"],
    challenge: [
      "A gas distribution utility bought similar items from many suppliers, with inconsistent product choices across its service areas. Crews spent time hunting for parts and procurement staff spent hours on routine orders.",
    ],
    solution: [
      "RNOW helped the utility create a standard list of approved products for common jobs. The list was loaded into a digital catalog with saved lists for each crew and approval workflows by spend level.",
      "Stock of the most-used items was held locally so crews could pick up material close to the job.",
    ],
    results: [
      "Fewer suppliers and product variations to manage",
      "Less time spent on routine ordering",
      "More consistent products in the field",
      "Routine ordering time cut by about half",
    ],
  },
  {
    slug: "mine-site-valve-automation",
    title: "Automating Critical Valves at a Remote Mine Site",
    industry: "Mining",
    excerpt:
      "A packaged valve automation solution improved control and reduced manual operation in a demanding environment.",
    image: aboutHeroes.support,
    services: ["Valve actuation", "Fabrication", "Technical support"],
    challenge: [
      "A mine operator relied on manually operated valves in slurry and water circuits. Operating them was labor-intensive, and delays could affect the process.",
    ],
    solution: [
      "RNOW assessed the duty conditions with the operator's engineers and recommended suitable valves and actuators for the abrasive service. The assembled and tested packages were shipped with documentation and supported by on-site commissioning guidance.",
    ],
    results: [
      "Reduced manual operation of critical valves",
      "More consistent control of the process",
      "Documentation and testing records delivered with the equipment",
      "Manual operation of critical valves reduced by more than half",
    ],
  },
  {
    slug: "water-treatment-pump-package",
    title: "Delivering a Skid-Mounted Pump Package for a Water Facility",
    industry: "Water & Wastewater",
    excerpt:
      "A pre-assembled, tested pump skid reduced field construction time for a municipal upgrade.",
    image: aboutHeroes.benefits,
    services: ["Engineering support", "Fabrication", "Testing"],
    challenge: [
      "A water utility needed to upgrade a booster station within a short shutdown window. Building the system on site would have taken longer than the window allowed.",
    ],
    solution: [
      "RNOW coordinated the design and fabrication of a skid-mounted pump package with piping, valves and controls, factory-tested before shipment. The utility's crews focused on setting the skid and making the final connections.",
    ],
    results: [
      "Shorter field installation time",
      "Testing completed before delivery",
      "Fewer site issues thanks to factory quality control",
      "Field installation time shortened by several days",
    ],
  },
];
