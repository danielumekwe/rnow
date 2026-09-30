import type { AboutPageContent } from "@/data/about/types";
import { aboutLinks } from "@/data/about/sitemap";

export const citizenshipPage: AboutPageContent = {
  path: "/about/corporate-citizenship",
  title: "Corporate Citizenship",
  description:
    "How RNOW operates responsibly: ethical business conduct, safety, sustainability and support for the communities where we work.",
  hero: {
    eyebrow: "CORPORATE CITIZENSHIP",
    title: "Doing Business the Right Way",
    description:
      "Being a good supplier means more than delivering on time. It means operating ethically, protecting people and the environment, and contributing to the places where our team lives and works.",
    image: "people",
    imageAlt: "RNOW team members and community volunteers",
    ctaLabel: "Contact Our Team",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Responsibility Is Part of How We Work",
    paragraphs: [
      "Customers in energy, infrastructure and industry trust us with materials that go into safety-critical systems. That trust rests on how we behave when nobody is checking: honest records, fair dealing, safe workplaces and careful sourcing.",
      "Our approach to corporate citizenship is organized around three commitments: operating with integrity, reducing our impact and strengthening our communities. The pages below explain each in more detail and show where we are still building.",
    ],
  },
  childCards: {
    heading: "Explore Corporate Citizenship",
    intro: "Three areas that describe how we operate and give back.",
  },
  features: {
    heading: "Our Guiding Commitments",
    items: [
      { title: "Integrity in every transaction", text: "We keep accurate records, compete fairly and never offer or accept improper payments. Our people are expected to speak up and are protected when they do." },
      { title: "Safe people, safe sites", text: "Health and safety are a condition of doing business. We train our team, investigate incidents and share lessons across locations." },
      { title: "Responsible sourcing", text: "We work with suppliers who share our expectations on quality, labor practices and lawful conduct, and we ask them to confirm those expectations in writing." },
      { title: "Care for the environment", text: "We look for practical ways to cut waste, use energy wisely and help customers meet their own environmental goals with the right products." },
      { title: "An inclusive workplace", text: "We want every colleague to have the tools, respect and opportunity to do their best work, and we treat discrimination and harassment as unacceptable." },
      { title: "Investing locally", text: "We support education, community services and emergency relief in the places where our teams live, through giving and volunteering." },
    ],
  },
  process: {
    heading: "How We Hold Ourselves Accountable",
    steps: [
      { title: "Clear standards", text: "Written policies set expectations for conduct, safety, trade compliance and supplier behavior.", meta: "Define" },
      { title: "Training and awareness", text: "New team members are oriented on our standards, and role-specific training is refreshed regularly.", meta: "Teach" },
      { title: "Monitoring and review", text: "We review our practices, audit high-risk areas and check that suppliers meet expectations.", meta: "Check" },
      { title: "Speaking up", text: "People can raise concerns confidentially, and we investigate every report in good faith.", meta: "Listen" },
      { title: "Improvement", text: "We learn from incidents and feedback, update our policies and share what changed.", meta: "Improve" },
    ],
  },
  faqs: [
    { question: "What does corporate citizenship mean at RNOW?", answer: "It is how we combine commercial success with ethical conduct, safe operations, environmental care and community support." },
    { question: "Where can I read your compliance statements?", answer: "They are collected on the Compliance Statements page, including our code of conduct and supplier expectations." },
    { question: "Does RNOW publish a sustainability report?", answer: "Our Sustainability page explains our approach and how we plan to report. Our first summary report is planned for next year." },
    { question: "How can a community organization request support?", answer: "Visit the RNOW Cares page for our focus areas and how to submit a request." },
    { question: "How do I report a concern about RNOW's conduct?", answer: "The Compliance Statements page describes how to report a concern confidentially, including by contacting ethics@rnowindustrial.com." },
    { question: "Do you ask suppliers to meet your standards?", answer: "Yes. Suppliers are expected to follow our Supplier Code of Conduct, which covers ethics, labor, safety and environmental practices." },
  ],
  related: aboutLinks([
    "/about/why-rnow/quality",
    "/about/careers",
    "/about/news",
  ]),
  cta: { label: "Have a question about our practices? Contact us", href: "/contact" },
};

export const compliancePage: AboutPageContent = {
  path: "/about/corporate-citizenship/compliance",
  title: "Compliance Statements",
  description:
    "RNOW's standards for ethical conduct, anti-corruption, trade compliance, supplier expectations, human rights, data privacy and reporting concerns.",
  hero: {
    eyebrow: "CORPORATE CITIZENSHIP · COMPLIANCE",
    title: "Compliance Statements",
    description:
      "The standards we expect of our people, our suppliers and ourselves, and how to raise a concern if something does not look right.",
    image: "facility",
    imageAlt: "RNOW facility exterior",
    ctaLabel: "Report a Concern",
    ctaHref: "/contact",
  },
  notice:
    "These statements are a starting framework written for RNOW. Have qualified legal counsel review and adopt them before publishing.",
  intro: {
    heading: "Our Standards, in Plain Language",
    paragraphs: [
      "RNOW operates in regulated industries and across borders. We follow the laws that apply to our business and hold ourselves to the higher of legal requirements and our own standards.",
      "The statements below summarize our expectations. They apply to employees, officers, contractors and, through our Supplier Code of Conduct, to the companies we buy from.",
    ],
  },
  stats: {
    heading: "Compliance at a Glance",
    items: [
      { value: "7", label: "Core compliance areas" },
      { value: "Zero", label: "Tolerance for bribery or corruption" },
      { value: "Good faith", label: "Reports protected from retaliation" },
      { value: "Confidential", label: "Reporting channels" },
    ],
  },
  blocks: [
    {
      heading: "Code of Conduct",
      paragraphs: [
        "Our Code of Conduct sets the standard for how we treat colleagues, customers, suppliers and competitors. We act honestly, avoid conflicts of interest, protect company and customer information and keep accurate books and records.",
      ],
      bullets: [
        "Treat everyone with respect; harassment and discrimination are not tolerated",
        "Disclose and manage conflicts of interest",
        "Protect confidential information and company assets",
        "Compete fairly and never agree with competitors on prices or markets",
        "Keep records complete, accurate and timely",
      ],
    },
    {
      heading: "Anti-Bribery & Anti-Corruption",
      paragraphs: [
        "We do not offer, give, ask for or accept bribes or improper benefits, directly or through third parties. This applies to government officials and private-sector counterparties alike, and to facilitation payments.",
        "Gifts and hospitality must be modest, infrequent, transparent and never intended to influence a decision. We conduct due diligence on agents and intermediaries and keep records of what we pay and why.",
      ],
    },
    {
      heading: "Trade Compliance",
      paragraphs: [
        "We comply with export controls, economic sanctions, import regulations and customs requirements that apply to the products we sell and the places we ship to. We screen customers, destinations and end uses where required and do not proceed with a transaction if we cannot resolve a concern.",
      ],
      bullets: [
        "Screen parties against applicable restricted-party lists",
        "Classify products and confirm licensing needs before export",
        "Keep accurate customs documentation and country-of-origin records",
        "Escalate any doubt to the compliance team before shipment",
      ],
    },
    {
      heading: "Supplier Code of Conduct",
      paragraphs: ["We expect our suppliers to share our values. Suppliers are asked to confirm that they will:"],
      bullets: [
        "Comply with all applicable laws and regulations",
        "Prohibit bribery, corruption and conflicts of interest",
        "Provide safe workplaces and respect workers' rights",
        "Use no forced, bonded or child labor",
        "Manage environmental impacts responsibly",
        "Maintain quality systems and honest documentation, including material test reports",
        "Allow reasonable review of their practices on request",
      ],
    },
    {
      heading: "Human Rights & Modern Slavery",
      paragraphs: [
        "We are committed to respecting human rights in our own operations and our supply chain. We prohibit forced labor, child labor and human trafficking and expect the same of our suppliers. We assess supply-chain risk, train relevant team members to recognize warning signs and act if we find a problem.",
      ],
    },
    {
      heading: "Data Privacy & Information Security",
      paragraphs: [
        "We collect and use personal and business information only for legitimate purposes, limit access to those who need it and protect it with appropriate technical and organizational safeguards. We respond promptly to privacy requests and to any incident involving personal data. See our Privacy Policy for details.",
      ],
    },
    {
      heading: "Conflict Minerals & Responsible Materials",
      paragraphs: [
        "Some products we supply may contain tin, tantalum, tungsten or gold. We ask relevant suppliers to identify the source of these materials and to avoid those that fund armed conflict or abuses. We cooperate with customers who need supplier declarations for their own reporting.",
      ],
    },
    {
      heading: "How to Report a Concern",
      paragraphs: [
        "If you see or suspect conduct that breaks the law or our standards, please tell us. You can raise a concern with your manager, with the compliance team, or confidentially through the channels below. You may report anonymously where the law permits.",
        "We do not tolerate retaliation against anyone who raises a concern in good faith. Every report is reviewed, and where needed, investigated fairly and confidentially.",
      ],
      bullets: [
        "Email: ethics@rnowindustrial.com",
        "Confidential hotline: +1 (800) 555-0142",
        "Or use our contact page and mark your message “Compliance”",
      ],
    },
  ],
  faqs: [
    { question: "Who must follow these statements?", answer: "All employees, officers and contractors. Suppliers and agents are expected to follow the Supplier Code of Conduct." },
    { question: "Can I accept a gift from a supplier?", answer: "Only if it is modest, infrequent, openly given and cannot reasonably be seen as influencing a decision. When in doubt, decline or ask compliance first." },
    { question: "How do I report a concern anonymously?", answer: "Use the confidential channels listed on this page. You may remain anonymous where local law permits, though details help us investigate." },
    { question: "What happens after I report?", answer: "The report is logged, reviewed by people who are independent of the situation and investigated as needed. We keep your identity confidential to the extent possible." },
    { question: "Will I be punished for reporting in good faith?", answer: "No. Retaliation is a violation of our Code of Conduct and is itself grounds for disciplinary action." },
    { question: "How do you handle sanctioned countries or parties?", answer: "We screen and do not proceed with transactions that would breach applicable sanctions or export controls." },
    { question: "Where can I find your privacy policy?", answer: "Our Privacy Policy is available from the footer of every page." },
  ],
  related: aboutLinks([
    "/about/corporate-citizenship/sustainability",
    "/about/corporate-citizenship/community",
    "/about/why-rnow/quality",
  ]),
  cta: { label: "Need to raise a concern or ask a question? Contact us", href: "/contact" },
};

export const sustainabilityPage: AboutPageContent = {
  path: "/about/corporate-citizenship/sustainability",
  title: "Sustainability",
  description:
    "RNOW's approach to sustainability: environmental goals, energy and emissions, waste, health and safety, responsible sourcing, workforce and governance.",
  hero: {
    eyebrow: "CORPORATE CITIZENSHIP · SUSTAINABILITY",
    title: "Sustainability at RNOW",
    description:
      "How we think about environment, safety, sourcing and governance, and how we plan to measure and report progress.",
    image: "facility",
    imageAlt: "RNOW facility and yard",
    ctaLabel: "Talk to Our Team",
    ctaHref: "/contact",
  },
  notice:
    "Goals and figures below are framework statements. Replace them with RNOW's approved targets and verified data before publishing.",
  intro: {
    heading: "A Practical Approach to a Long-Term Issue",
    paragraphs: [
      "For a distributor, sustainability shows up in everyday decisions: how we package and ship, how we run our buildings and vehicles, which suppliers we choose and how we help customers reduce waste and emissions with the products we provide.",
      "We focus on areas where we have real influence, set goals we can measure and report honestly on progress, including where we fall short.",
    ],
  },
  features: {
    heading: "Focus Areas",
    items: [
      { title: "Environmental goals", text: "We plan to set measurable targets for energy use, emissions and waste across our facilities, reviewed each year. Early goals include a 15% reduction in facility energy intensity and diverting 90% of non-hazardous waste from landfill by 2030." },
      { title: "Energy & emissions", text: "We look at lighting, heating and cooling, fleet efficiency and route planning, and track energy use by site so we can prioritize improvements." },
      { title: "Waste & recycling", text: "We reduce packaging, reuse pallets and crating where practical, recycle metals, cardboard and wood and dispose of hazardous materials correctly." },
      { title: "Health & safety (HSE)", text: "Safety comes first. We train, audit, investigate incidents and share lessons so that every colleague goes home safe." },
      { title: "Responsible sourcing", text: "We expect suppliers to follow our Supplier Code of Conduct and to help us understand the origin and traceability of what we buy." },
      { title: "Workforce & inclusion", text: "We invest in training, fair pay practices and a respectful workplace where people of all backgrounds can build a career." },
    ],
  },
  blocks: [
    {
      heading: "Helping Customers Reduce Their Footprint",
      paragraphs: [
        "Our biggest opportunity is through the products and services we supply. We help customers find lower-emission options, reduce leaks and waste, and extend equipment life through better selection and maintenance.",
      ],
      bullets: [
        "Low-emission valves, gaskets and fittings for leak reduction",
        "Vapor recovery, instrument air and emissions-management equipment",
        "Products made with recycled content where suitable",
        "Inventory programs that cut over-ordering and obsolete stock",
        "Repair and reconditioning services that extend product life",
      ],
    },
    {
      heading: "Governance and Oversight",
      paragraphs: [
        "Sustainability is owned by senior leadership, with day-to-day responsibility assigned to named leaders in safety, operations, supply chain and human resources. We review progress at leadership meetings and update our approach as expectations and regulations change.",
      ],
    },
  ],
  process: {
    heading: "How We Measure and Report",
    steps: [
      { title: "Establish a baseline", text: "Gather energy, fuel, waste and safety data for each site so we know where we start.", meta: "Measure" },
      { title: "Set goals", text: "Choose targets that are specific, realistic and tied to real actions.", meta: "Plan" },
      { title: "Act and track", text: "Assign owners, fund improvements and review results regularly.", meta: "Do" },
      { title: "Verify", text: "Check data quality and, where appropriate, seek independent review.", meta: "Check" },
      { title: "Report openly", text: "Publish progress in plain language, including what did not go to plan.", meta: "Share" },
    ],
  },
  faqs: [
    { question: "Does RNOW have carbon reduction targets?", answer: "Our early goals include a 15% reduction in facility energy intensity and diverting 90% of non-hazardous waste from landfill by 2030. Targets are reviewed each year." },
    { question: "How do you manage waste at your facilities?", answer: "We reduce and reuse packaging where we can, recycle metals, cardboard, wood and plastics, and dispose of regulated materials through licensed providers." },
    { question: "How do you manage supplier sustainability?", answer: "Suppliers are asked to follow our Supplier Code of Conduct, and we review higher-risk suppliers more closely." },
    { question: "How do you keep employees safe?", answer: "Through site orientation, training, hazard reporting, incident investigation and regular audits, with leaders accountable for results." },
    { question: "Do you offer products that help customers meet environmental goals?", answer: "Yes. Ask our team about low-emission valves, vapor recovery, instrument air packages and other solutions for your application." },
    { question: "Where can I find your latest report?", answer: "Our first sustainability summary is planned for next year. Contact us and we will share it when it is released." },
  ],
  related: aboutLinks([
    "/about/corporate-citizenship/compliance",
    "/about/corporate-citizenship/community",
    "/about/why-rnow/quality",
  ]),
  cta: { label: "Talk to our team about lower-impact product options", href: "/contact" },
};

export const communityPage: AboutPageContent = {
  path: "/about/corporate-citizenship/community",
  title: "RNOW Cares: Community Program",
  description:
    "RNOW Cares is our community program: giving and volunteering in education, local communities, disaster relief and STEM.",
  hero: {
    eyebrow: "CORPORATE CITIZENSHIP · RNOW CARES",
    title: "RNOW Cares",
    description:
      "Our community program supports the places where we live and work through giving, volunteering and practical help when it is needed most.",
    image: "people",
    imageAlt: "RNOW volunteers working together",
    ctaLabel: "Request Support",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Investing Where Our People Live and Work",
    paragraphs: [
      "Our branches and warehouses are part of local communities, and our team members are neighbors, coaches, volunteers and parents in those places. RNOW Cares gives them a way to act together.",
      "We focus on a small number of causes so that our support can have real effect, and we listen to local teams about what their communities need.",
    ],
  },
  features: {
    heading: "Our Focus Areas",
    items: [
      { title: "Education and skills", text: "Support for schools, scholarships and trades training that prepare people for good careers, including in industrial and technical fields." },
      { title: "Local community", text: "Food banks, youth programs and community organizations that help neighbors near our branches." },
      { title: "Disaster relief", text: "Practical help after storms, floods, fires and other emergencies, using our logistics and supplies where we can." },
      { title: "STEM outreach", text: "Programs that introduce students to engineering, science and technology, including school visits and site tours." },
    ],
  },
  process: {
    heading: "How Giving Works",
    steps: [
      { title: "Local teams recommend", text: "Employees and branch leaders suggest causes and organizations that matter locally.", meta: "Nominate" },
      { title: "Review against focus areas", text: "A cross-functional group reviews requests against our focus areas and budget.", meta: "Review" },
      { title: "Choose the right support", text: "Support may be a donation, in-kind product, volunteer time or a mix.", meta: "Decide" },
      { title: "Follow up", text: "We ask recipients how the support was used and share stories back with our team.", meta: "Report" },
    ],
  },
  blocks: [
    {
      heading: "Volunteering",
      paragraphs: [
        "We encourage team members to give their time. Local teams organize service days, and employees may take paid volunteer time under company policy, up to 16 paid hours each year.",
      ],
      bullets: [
        "Team service days at local charities and schools",
        "Skills-based volunteering, such as career talks and mock interviews",
        "Disaster response and supply drives",
        "Employee-led fundraising, with company matching where approved",
      ],
    },
    {
      heading: "How to Request Support",
      paragraphs: [
        "Non-profit and community organizations can ask for support through our contact page. Please mark your message “RNOW Cares” and include the information below.",
      ],
      bullets: [
        "Your organization's name, mission and registration details",
        "What you are asking for and how it will be used",
        "How the request fits one of our focus areas",
        "The community you serve, and its link to an RNOW location",
        "Key dates or deadlines",
      ],
    },
    {
      heading: "What We Do Not Fund",
      paragraphs: [
        "To keep our program focused we generally do not support individuals, political campaigns, religious activities, or organizations that discriminate. Requests that fall outside our focus areas may not be considered.",
      ],
    },
  ],
  faqs: [
    { question: "What kinds of organizations do you support?", answer: "Registered non-profits and community groups whose work fits education, local community, disaster relief or STEM." },
    { question: "How long does a decision take?", answer: "We aim to respond promptly, but review times vary. Please submit requests well ahead of your deadline." },
    { question: "Can you donate products instead of money?", answer: "In some cases, yes. Tell us what you need and we will consider in-kind support, particularly for disaster relief and training programs." },
    { question: "Do employees get time off to volunteer?", answer: "Yes. Full-time employees can take up to 16 paid hours each year to volunteer with an organization of their choice." },
    { question: "Can my school arrange a visit to an RNOW facility?", answer: "We welcome the chance to host school visits where safety allows. Contact us with your group size and goals." },
    { question: "How can I hear about giving campaigns?", answer: "Watch our Company News page for updates on campaigns and volunteer events." },
  ],
  related: aboutLinks([
    "/about/corporate-citizenship/sustainability",
    "/about/careers/internship-program",
    "/about/news/events",
  ]),
  cta: { label: "Have a community project in mind? Tell us about it", href: "/contact" },
};
