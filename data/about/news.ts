import type { AboutPageContent, EventItem, NewsArticle } from "@/data/about/types";
import { aboutLinks } from "@/data/about/sitemap";
import { aboutHeroes } from "@/lib/aboutHeroes";

/*
 * TODO (sample content): every article and event below is invented placeholder
 * copy used to demonstrate layout and tone. Replace with real announcements,
 * dates and locations, or delete, before launch.
 */

export const newsPage: AboutPageContent = {
  path: "/about/news",
  title: "News & Events",
  description:
    "Company news, product and service updates, and events where you can meet the RNOW team.",
  hero: {
    eyebrow: "NEWS & EVENTS",
    title: "What's Happening at RNOW",
    description:
      "Company announcements, service updates, industry insight and the events where you can meet our team in person.",
    image: "solutions",
    imageAlt: "RNOW team at an industrial event",
    ctaLabel: "Contact Our Team",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Stay Close to What We Are Doing",
    paragraphs: [
      "This is where we share news about the company, changes to our products and services, and the trade shows, training sessions and open houses we host or attend. Check back regularly, or reach out and ask to be added to our update list.",
    ],
  },
  childCards: {
    heading: "News & Events",
    intro: "Two places to keep up with RNOW.",
  },
  features: {
    heading: "What You Will Find Here",
    items: [
      { title: "Company announcements", text: "Leadership, locations, partnerships and milestones." },
      { title: "Products and services", text: "New capabilities, stocking programs and service changes that affect how you buy from us." },
      { title: "Safety and quality", text: "Updates on our safety practices, training and quality programs." },
      { title: "Community", text: "Stories from RNOW Cares and volunteer activity in our locations." },
      { title: "Training and events", text: "Sessions you can attend to learn about products, standards and applications." },
      { title: "Industry insight", text: "Practical notes on materials, standards and supply chain trends." },
    ],
  },
  faqs: [
    { question: "How often is news updated?", answer: "We add news as there is something worth sharing. Check the Company News page or contact us to be added to our update list." },
    { question: "Can I attend your events?", answer: "Most training sessions and open houses are open to customers and partners. Each event page explains who it is for and how to register." },
    { question: "Can I request an RNOW speaker or presenter?", answer: "Contact us with the event details, your audience and topic. We will see what we can arrange." },
    { question: "Who should I contact about media inquiries?", answer: "Please use our contact page and mark your message “Media”. Our team will connect you with the right person." },
    { question: "Are these sample stories real?", answer: "The stories and events currently shown are labelled Sample and are placeholders for layout. They will be replaced with real announcements." },
  ],
  related: aboutLinks([
    "/about/news/company-news",
    "/about/news/events",
    "/about/why-rnow/case-studies",
  ]),
  cta: { label: "Want to hear from us? Get in touch", href: "/contact" },
};

export const companyNewsPage: AboutPageContent = {
  path: "/about/news/company-news",
  title: "Company News",
  description:
    "The latest company announcements, product and service updates and team news from RNOW Industrial Supply.",
  hero: {
    eyebrow: "NEWS & EVENTS · COMPANY NEWS",
    title: "Company News",
    description:
      "Announcements, service updates and stories from across the RNOW team.",
    image: "team",
    imageAlt: "RNOW team members at work",
  },
  intro: {
    heading: "Latest Updates",
    paragraphs: [
      "Browse recent announcements below. Each story links to a full article.",
    ],
  },
  faqs: [
    { question: "Can I subscribe to news updates?", answer: "Contact us and ask to be added to our update list. We will confirm what you would like to receive." },
    { question: "Where can I find older announcements?", answer: "Older stories will be archived on this page as the list grows." },
    { question: "Can I share these articles?", answer: "Yes. Please link to the article and credit RNOW." },
    { question: "How do I submit a story idea?", answer: "Contact us with a short summary. Employee and customer stories are welcome, subject to consent." },
    { question: "Are all stories about RNOW itself?", answer: "Most are, along with occasional industry notes that we think customers will find useful." },
  ],
  related: aboutLinks([
    "/about/news/events",
    "/about/news",
    "/about/why-rnow/case-studies",
  ]),
  cta: { label: "Have a question for our team? Contact us", href: "/contact" },
};

export const eventsPage: AboutPageContent = {
  path: "/about/news/events",
  title: "Events",
  description:
    "Trade shows, training sessions and open houses hosted or attended by RNOW Industrial Supply.",
  hero: {
    eyebrow: "NEWS & EVENTS · EVENTS",
    title: "Events",
    description:
      "Meet our team at trade shows, join a hands-on training session or visit one of our locations.",
    image: "solutions",
    imageAlt: "People at an industry event",
  },
  intro: {
    heading: "Meet the Team in Person",
    paragraphs: [
      "We host training days and open houses and attend industry trade shows throughout the year. Each event page explains the topic, who should attend and how to take part.",
    ],
  },
  faqs: [
    { question: "Are your events free to attend?", answer: "Most sessions are free for customers, and some hands-on training days may carry a small fee. Details on cost and registration appear on each event page." },
    { question: "How do I register?", answer: "Use the contact link on the event page and include the names of attendees. We will confirm by reply." },
    { question: "Can I bring colleagues?", answer: "Usually yes. Please tell us how many are coming so we can plan seating, materials and safety equipment." },
    { question: "Do training sessions offer certificates?", answer: "Some do. Each event page says whether a certificate of attendance is provided." },
    { question: "What safety equipment do I need for site visits?", answer: "We provide guidance in advance. Visitors may be asked to wear protective equipment, which we can supply." },
    { question: "Can I request a private session for my team?", answer: "Yes. Contact us with your topic, group size and preferred dates." },
  ],
  related: aboutLinks([
    "/about/news/company-news",
    "/about/careers/internship-program",
    "/about/why-rnow/value-added-solutions",
  ]),
  cta: { label: "Interested in an event or private session? Contact us", href: "/contact" },
};

export const newsArticles: NewsArticle[] = [
  {
    sample: true,
    slug: "expanded-inventory-management-options",
    title: "RNOW Introduces Expanded Inventory Management Options for Customers",
    category: "Products & Services",
    date: "2026-09-15",
    excerpt:
      "New vendor-managed and consignment options give customers more ways to keep critical spares on hand without tying up capital.",
    image: aboutHeroes.warehouse,
    readMinutes: 3,
    body: [
      {
        heading: "More ways to keep critical stock available",
        paragraphs: [
          "Running out of a critical part is expensive, and so is holding too much stock. To help customers find the right balance, RNOW is expanding its inventory management options, including vendor-managed inventory and consignment stocking at customer sites.",
          "Under these programs, our team works with the customer to identify critical and high-turn items, agree minimum and maximum levels and replenish automatically as material is used.",
        ],
        bullets: [
          "Site assessments to identify critical spares and slow movers",
          "Agreed min/max levels with automatic replenishment",
          "Regular usage reports to support planning and budgeting",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Customers interested in these options can speak with their account manager or contact RNOW to arrange an assessment. Programs are tailored to each site and product mix.",
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "safety-stand-down-week",
    title: "Teams Across RNOW Take Part in Annual Safety Stand-Down Week",
    category: "Safety",
    date: "2026-08-24",
    excerpt:
      "Locations paused normal activity to review hazards, refresh procedures and share near-miss lessons.",
    image: aboutHeroes.people,
    readMinutes: 3,
    body: [
      {
        heading: "Pausing to focus on what matters most",
        paragraphs: [
          "During the week, teams stepped back from regular work to discuss hazards specific to their sites, from forklift traffic to heavy lifting and material storage. Supervisors led short sessions, and team members were invited to raise concerns and suggest fixes.",
          "Each location recorded actions and owners so improvements could be tracked after the week ended.",
        ],
        bullets: [
          "Hazard walk-throughs led by team members",
          "Refresher sessions on lifting, handling and housekeeping",
          "Sharing of near-miss reports and lessons learned",
        ],
      },
      {
        heading: "Keeping the conversation going",
        paragraphs: [
          "Safety is a daily commitment. Stand-down week is one way to reinforce that, alongside toolbox talks, audits and open reporting.",
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "rnow-cares-launches-scholarship-fund",
    title: "RNOW Cares Launches a Trades and Technical Education Fund",
    category: "Community",
    date: "2026-07-30",
    excerpt:
      "A new giving program supports students entering skilled trades and technical careers near our locations.",
    image: aboutHeroes.people,
    readMinutes: 2,
    body: [
      {
        heading: "Supporting the next generation of skilled workers",
        paragraphs: [
          "Industry depends on skilled tradespeople and technicians. RNOW Cares is launching a fund to support students in technical programs near our locations, through scholarships, equipment donations and site visits.",
          "Local teams will help identify schools and programs that would benefit most.",
        ],
      },
      {
        heading: "How organizations can apply",
        paragraphs: [
          "Schools and non-profits can find the request process on our RNOW Cares page. Requests are reviewed against our focus areas.",
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "digital-ordering-enhancements",
    title: "New Digital Ordering Features Make Repeat Purchasing Faster",
    category: "Products & Services",
    date: "2026-07-08",
    excerpt:
      "Saved lists, approval workflows and order tracking help procurement teams reorder with fewer clicks.",
    image: aboutHeroes.tablet,
    readMinutes: 3,
    body: [
      {
        heading: "Built around how procurement teams work",
        paragraphs: [
          "We have added tools that reduce the effort of repeat purchasing. Customers can save lists of frequently ordered items, route orders for approval and track status from quote to delivery.",
        ],
        bullets: [
          "Saved lists for recurring orders",
          "Configurable approval steps by user or spend",
          "Order and shipment tracking in one place",
        ],
      },
      {
        heading: "Support is available",
        paragraphs: [
          "Our customer service team can help set up accounts and train users. Contact us to arrange a walkthrough.",
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "quality-program-refresh",
    title: "RNOW Refreshes Its Quality Program with a Focus on Traceability",
    category: "Quality",
    date: "2026-06-18",
    excerpt:
      "Updated receiving inspection steps and document controls make it easier to trace material back to source.",
    image: aboutHeroes.support,
    readMinutes: 4,
    body: [
      {
        heading: "Tighter documentation, faster answers",
        paragraphs: [
          "As customer specifications grow more demanding, so does the paperwork behind them. Our refreshed quality program strengthens receiving inspection and document control so that material test reports and certificates stay linked to the product they describe.",
        ],
        bullets: [
          "Standardized receiving inspection checklists",
          "Heat and lot numbers captured at receipt and linked to stock",
          "Faster retrieval of documentation on request",
        ],
      },
      {
        heading: "What it means for customers",
        paragraphs: [
          "Customers should find it quicker to obtain the documents they need for audits and turnovers. Learn more on our Quality page.",
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "welcoming-new-team-members",
    title: "RNOW Welcomes Its Newest Early-Career Cohort",
    category: "Careers",
    date: "2026-06-02",
    excerpt:
      "New participants begin rotations across sales, operations and supply chain.",
    image: aboutHeroes.team,
    readMinutes: 2,
    body: [
      {
        heading: "Starting the journey",
        paragraphs: [
          "This month, a new group of early-career team members began their first rotations. Over the coming months they will spend time in customer service, operations and purchasing, guided by mentors from each area.",
          "We are grateful to the mentors and managers who give their time to help new colleagues learn the business.",
        ],
      },
      {
        heading: "Interested in joining?",
        paragraphs: [
          "Learn more about our Internship Program and Sales & Operations Rotational Program on the Careers pages.",
        ],
      },
    ],
  },
];

export const events: EventItem[] = [
  {
    sample: true,
    slug: "valve-fundamentals-training-day",
    title: "Valve Fundamentals Training Day",
    type: "Training",
    status: "upcoming",
    date: "2026-11-12",
    location: "Houston, TX",
    excerpt:
      "A hands-on session covering valve types, materials, standards and how to specify the right valve for the job.",
    image: aboutHeroes.support,
    about: [
      "This one-day session is designed for buyers, planners, maintenance staff and engineers who want to sharpen their valve knowledge. Our technical team will walk through common valve types and where each is best used, how materials and pressure classes affect selection and what documentation to expect.",
      "The morning covers theory with examples, and the afternoon is hands-on, with valves to handle and cutaway samples to inspect.",
    ],
    agenda: [
      "Welcome and safety briefing",
      "Valve types and applications",
      "Materials, pressure classes and end connections",
      "Standards and documentation",
      "Hands-on inspection stations",
      "Q&A with the technical team",
    ],
    whoShouldAttend: [
      "Purchasing and procurement professionals",
      "Maintenance planners and technicians",
      "Project and design engineers",
      "New team members in industrial roles",
    ],
  },
  {
    sample: true,
    slug: "regional-industry-expo",
    title: "Regional Industry Expo",
    type: "Trade show",
    status: "upcoming",
    date: "2026-10-22",
    location: "Houston, TX",
    excerpt:
      "Visit our team to talk about supply programs, technical support and stocking solutions.",
    image: aboutHeroes.solutions,
    about: [
      "We will be exhibiting at this regional expo, with team members from sales, supply chain and technical support on hand. Stop by to discuss upcoming projects, inventory programs and product questions.",
    ],
    agenda: [
      "Booth conversations with sales and technical teams",
      "Demonstrations of digital ordering tools",
      "Overview of inventory management programs",
    ],
    whoShouldAttend: [
      "Operators and maintenance managers",
      "Contractors and engineering firms",
      "Anyone interested in career opportunities at RNOW",
    ],
  },
  {
    sample: true,
    slug: "branch-open-house",
    title: "Branch Open House and Customer Appreciation Day",
    type: "Open house",
    status: "upcoming",
    date: "2026-12-04",
    location: "Houston Distribution Center, Houston, TX",
    excerpt:
      "Tour the facility, meet the team behind your orders and see how material moves from receiving to dispatch.",
    image: aboutHeroes.facility,
    about: [
      "Our open house is a chance to see how we work. Visitors can tour the warehouse, see receiving and inspection, meet the people who handle their orders and ask questions about our services.",
    ],
    agenda: [
      "Welcome and safety orientation",
      "Guided facility tour",
      "Product and service showcase",
      "Lunch with the branch team",
    ],
    whoShouldAttend: [
      "Existing customers and their teams",
      "Prospective customers",
      "Students and educators interested in industrial careers",
    ],
  },
  {
    sample: true,
    slug: "supply-chain-planning-workshop",
    title: "Supply Chain Planning Workshop",
    type: "Workshop",
    status: "past",
    date: "2026-05-14",
    location: "Houston, TX",
    excerpt:
      "A workshop on critical-spares planning, min/max levels and turning usage data into better stocking decisions.",
    image: aboutHeroes.tablet,
    about: [
      "Participants worked through practical exercises on identifying critical spares, setting reorder points and using usage history to reduce stockouts and excess inventory.",
      "Materials from the workshop are available on request.",
    ],
    agenda: [
      "Why stockouts and excess happen",
      "Criticality and usage analysis",
      "Setting min/max levels",
      "Case discussion and open questions",
    ],
    whoShouldAttend: [
      "Materials and inventory managers",
      "Maintenance planners",
      "Purchasing teams",
    ],
  },
  {
    sample: true,
    slug: "safety-and-ppe-demo-day",
    title: "Safety and PPE Demo Day",
    type: "Demonstration",
    status: "past",
    date: "2026-03-26",
    location: "Houston, TX",
    excerpt:
      "Product demonstrations and fit-testing guidance for fall protection, respiratory equipment and protective clothing.",
    image: aboutHeroes.people,
    about: [
      "Visitors handled and tested a range of safety products with guidance from our safety specialists, and learned how inspection, fit and care affect performance.",
    ],
    agenda: [
      "Fall protection inspection and use",
      "Respirator selection and fit basics",
      "Protective clothing and hand protection",
      "Inspection and care routines",
    ],
    whoShouldAttend: [
      "Safety managers and coordinators",
      "Supervisors and crew leads",
      "Purchasing teams responsible for PPE",
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
