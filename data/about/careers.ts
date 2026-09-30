import type { AboutPageContent } from "@/data/about/types";
import { aboutLinks } from "@/data/about/sitemap";

export const careersPage: AboutPageContent = {
  path: "/about/careers",
  title: "Careers at RNOW",
  description:
    "Build a career with RNOW Industrial Supply. Explore our culture, benefits, career paths, hiring process and early-career programs.",
  hero: {
    eyebrow: "CAREERS",
    title: "Build a Career That Keeps Industry Moving",
    description:
      "Behind every well site, plant and job site there is a supply chain, and behind our supply chain are people who take ownership. Explore how you can grow with RNOW.",
    image: "team",
    imageAlt: "RNOW team members at an industrial facility",
    ctaLabel: "Start the Conversation",
    ctaHref: "/contact",
  },
  intro: {
    heading: "Work That Matters to Customers Who Depend on Us",
    paragraphs: [
      "Industrial supply is a business of urgency and detail. A missing valve can pause a project; the right part delivered at the right hour can save a shutdown. At RNOW, the people who make that happen are treated as the core of the company, not as a cost line.",
      "We hire people who like solving practical problems, working with customers and learning a technical business. Whether you are starting out or bringing years of experience, you will find real responsibility, coaching from people who have done the job and a clear view of where your work leads.",
    ],
  },
  childCards: {
    heading: "Early-Career Programs",
    intro:
      "Two structured ways to begin a career with RNOW. Each pairs real work with mentorship and a defined path forward.",
  },
  stats: {
    heading: "RNOW at a Glance",
    items: [
      { value: "500+", label: "Team members" },
      { value: "25", label: "Locations" },
      { value: "40+", label: "Years serving industry" },
      { value: "4", label: "Career path families" },
    ],
  },
  features: {
    heading: "What You Can Expect Working Here",
    intro:
      "The specifics of pay and benefits vary by role and location. These are the principles behind how we build a workplace.",
    items: [
      {
        title: "Ownership from day one",
        text: "You will be trusted with real customer needs early. We coach rather than micromanage, and we expect you to ask questions.",
      },
      {
        title: "Learning built into the job",
        text: "Product knowledge, industry standards and customer skills are taught on the job and through structured training, not left to chance.",
      },
      {
        title: "Safety first, always",
        text: "Every role, from the warehouse floor to the front desk, is expected to work safely and to stop work when something is not right.",
      },
      {
        title: "Teamwork across functions",
        text: "Sales, purchasing, warehouse and logistics succeed together. You will work alongside people from other departments every day.",
      },
      {
        title: "Recognition and growth",
        text: "We promote from within where we can. Strong performers are given new responsibilities, cross-training and paths into leadership.",
      },
      {
        title: "Competitive rewards",
        text: "We offer medical, dental and vision coverage, a retirement savings plan with a company match, and paid time off, with pay set competitively for each market.",
      },
    ],
  },
  blocks: [
    {
      heading: "Career Paths by Department",
      paragraphs: [
        "Most roles fall into four families. Many of our people move between them over time, and cross-training is encouraged.",
      ],
      bullets: [
        "Sales & Account Management: inside and outside sales, quoting, key account management and customer support. You build relationships and help customers find the right product, fast.",
        "Operations & Distribution: warehouse operations, receiving and inspection, order fulfillment, dispatch and driving. You keep material accurate, safe and moving.",
        "Supply Chain & Purchasing: sourcing, purchasing, vendor management, inventory planning and logistics. You make sure the right stock is in the right place.",
        "Technical & Corporate Support: application and technical support, quality, finance, IT, HR and administration. You make it possible for the front line to do its best work.",
      ],
    },
  ],
  process: {
    heading: "How Hiring Works",
    intro:
      "We want the process to be clear and respectful of your time. Timelines vary by role, but the steps are the same.",
    steps: [
      { title: "Apply or introduce yourself", text: "Send us your resume and a few lines on what you are looking for. If there is no open role that fits, we will keep your details on file with your permission.", meta: "Step 1" },
      { title: "Initial conversation", text: "A short call with a recruiter or hiring manager to talk about your background, the role and what matters to you.", meta: "Step 2" },
      { title: "Role-focused interview", text: "A deeper conversation with the team you would join. Expect practical questions about how you solve problems and work with others.", meta: "Step 3" },
      { title: "Skills or site visit", text: "Depending on the role, this may be a short exercise, a branch or warehouse visit, or a conversation with a future teammate.", meta: "Step 4" },
      { title: "Offer and onboarding", text: "We confirm references and checks that apply to the role, make an offer, and plan your first weeks with a named point of contact.", meta: "Step 5" },
    ],
  },
  faqs: [
    { question: "Do I need industrial experience to apply?", answer: "Not for every role. Many of our people learned the business here. Some roles, such as technical support or purchasing specialists, look for related experience, and our early-career programs are designed for people new to industry." },
    { question: "Where are your roles located?", answer: "Roles are based at our branches, distribution centers and offices. Some corporate and sales roles may offer hybrid arrangements. Locations and work arrangements are listed with each opening. Current openings are mainly in Houston, Midland, Lafayette and Denver." },
    { question: "How do I find current openings?", answer: "Contact our team through the link on this page and tell us which area interests you. We will point you to open roles or, with your permission, keep your details on file for future ones." },
    { question: "How long does the hiring process take?", answer: "Timelines vary by role, but we aim to keep candidates informed at every stage and to move quickly for roles that are urgent for the business." },
    { question: "Do you hire for part-time or seasonal roles?", answer: "Some locations hire seasonal and part-time team members depending on demand. Ask about availability when you get in touch." },
    { question: "What safety expectations should I know about?", answer: "Everyone at RNOW is expected to follow site safety rules, use required protective equipment where applicable and speak up about hazards. New team members receive safety orientation for their site and role." },
  ],
  related: aboutLinks([
    "/about/careers/internship-program",
    "/about/careers/rotational-program",
    "/about/why-rnow",
  ]),
  cta: { label: "Ready to explore a career with RNOW? Get in touch", href: "/contact" },
};

export const internshipPage: AboutPageContent = {
  path: "/about/careers/internship-program",
  title: "Internship Program",
  description:
    "RNOW's internship program gives students hands-on experience across sales, operations and supply chain, with mentorship and a real project to present.",
  hero: {
    eyebrow: "CAREERS · INTERNSHIP PROGRAM",
    title: "Learn the Business by Doing the Work",
    description:
      "Our internship program places students in real roles alongside experienced mentors, with structured learning, a capstone project and a look at what a career in industrial distribution can be.",
    image: "people",
    imageAlt: "Interns and mentors at an RNOW facility",
    ctaLabel: "Ask About Applying",
    ctaHref: "/contact",
  },
  intro: {
    heading: "A Practical Introduction to Industrial Distribution",
    paragraphs: [
      "Distribution rewards curiosity. In a short time as an intern you can follow an order from the first customer call to the truck leaving the dock, and see how sourcing, inventory, logistics and service fit together.",
      "You will not be shadowing from the sidelines. Interns take on defined work, get regular feedback and finish the program with a project that has value to the team. We keep groups small so every intern gets attention from a mentor.",
    ],
  },
  stats: {
    heading: "Program at a Glance",
    items: [
      { value: "10 weeks", label: "Program length" },
      { value: "4", label: "Learning tracks" },
      { value: "1:1", label: "Mentor for every intern" },
      { value: "1", label: "Capstone project" },
    ],
  },
  features: {
    heading: "Internship Tracks",
    intro: "Interns are matched to a primary track based on interests and major, and spend time with neighboring teams.",
    items: [
      { title: "Sales & Customer Support", text: "Learn how quotes are built, how customer needs are clarified and how products are matched to applications. Support real accounts under guidance." },
      { title: "Operations & Warehouse", text: "Work through receiving, inspection, picking, packing and dispatch. Learn inventory accuracy, safe material handling and continuous improvement." },
      { title: "Supply Chain & Purchasing", text: "Follow purchase orders, supplier lead times and stock planning. Help analyze inventory and reorder points for a product family." },
      { title: "Technical & Quality Support", text: "Learn how product documentation, material test reports and specifications are checked, and how quality issues are traced and resolved." },
      { title: "Digital & Business Analysis", text: "Support ordering tools, reporting and data clean-up. Work with the team on process improvements that save time for customers and colleagues." },
      { title: "Finance & Administration", text: "See how pricing, credit, invoicing and reporting support the front line, and help with a small analysis project." },
    ],
  },
  process: {
    heading: "How the Program Runs",
    steps: [
      { title: "Orientation and safety", text: "Meet your mentor and team, complete site safety orientation and learn how the business is organized.", meta: "Week 1" },
      { title: "Core rotation", text: "Spend the first block in your primary track, taking on defined tasks with regular check-ins.", meta: "Early program" },
      { title: "Cross-team exposure", text: "Spend time with a second team so you see how the parts of the business connect.", meta: "Mid program" },
      { title: "Capstone project", text: "Work on a project with a real business question, agreed with your mentor at the start.", meta: "Final weeks" },
      { title: "Presentation and feedback", text: "Present your findings to leaders, receive written feedback and discuss next steps, including future opportunities.", meta: "Program close" },
    ],
  },
  blocks: [
    {
      heading: "Who Should Apply",
      paragraphs: ["We welcome students from many fields. Curiosity and a willingness to work with people matter more than a specific major."],
      bullets: [
        "Currently enrolled in a college, university or technical program",
        "Interest in business, supply chain, engineering, operations, technology or a related field",
        "Comfortable communicating with customers and colleagues",
        "Able to work on site and follow safety requirements for your assigned location",
        "Authorized to work in the country where the role is based",
      ],
    },
    {
      heading: "Mentorship and Support",
      paragraphs: [
        "Every intern is paired with a mentor from their track and a buddy who is closer to the start of their own career. Mentors set expectations in week one, meet regularly and share honest feedback. Interns also meet leaders from other departments to ask questions about how their careers unfolded.",
        "We treat internships as a two-way evaluation. You learn whether industrial distribution fits you, and we learn what you can do.",
      ],
      bullets: [
        "Weekly check-ins with your mentor",
        "A mid-program review and an end-of-program review",
        "Lunch-and-learn sessions on products, safety and the supply chain",
        "A clear path to apply for future roles or rotational programs",
      ],
    },
    {
      heading: "What You Will Take Away",
      paragraphs: ["Interns leave with skills that transfer well beyond our industry."],
      bullets: [
        "A working understanding of how a distributor buys, stocks and sells",
        "Experience communicating with customers and suppliers",
        "Practice analyzing data and presenting a recommendation",
        "Professional references and a real project for your resume",
      ],
    },
  ],
  faqs: [
    { question: "How long is the internship?", answer: "The program length is 10 weeks. We will confirm start and end dates when we make an offer." },
    { question: "Is the internship paid?", answer: "Yes. Interns are paid an hourly wage, and housing assistance may be available for some locations." },
    { question: "When and how do I apply?", answer: "The application window is October through February. Use the contact link on this page and tell us your school, field of study, preferred track and location, and we will send the next steps." },
    { question: "Can international students apply?", answer: "Eligibility depends on work authorization for the country where the role is based. Contact us with your situation and we will explain what is possible." },
    { question: "Will I be able to choose my location?", answer: "We try to match location preferences with where roles are available. Placement depends on the needs of the business each year." },
    { question: "Can an internship lead to a full-time role?", answer: "Yes. Strong interns are encouraged to apply for full-time openings and for our Sales & Operations Rotational Program." },
    { question: "What should I bring to the interview?", answer: "Bring your resume, examples of projects or teamwork you are proud of, and questions about the program. We want to hear what you hope to learn." },
  ],
  related: aboutLinks([
    "/about/careers/rotational-program",
    "/about/careers",
    "/about/why-rnow/value-added-solutions",
  ]),
  cta: { label: "Interested in interning with RNOW? Reach out", href: "/contact" },
};

export const rotationalPage: AboutPageContent = {
  path: "/about/careers/rotational-program",
  title: "Sales & Operations Rotational Program",
  description:
    "A structured early-career program that rotates new graduates through sales, operations, supply chain and branch management at RNOW.",
  hero: {
    eyebrow: "CAREERS · ROTATIONAL PROGRAM",
    title: "Sales & Operations Rotational Program",
    description:
      "A structured early-career track that rotates you through the core functions of a distributor, with mentorship, training and a defined path to a permanent role.",
    image: "team",
    imageAlt: "Early-career professionals in a warehouse with a mentor",
    ctaLabel: "Ask About the Program",
    ctaHref: "/contact",
  },
  intro: {
    heading: "See the Whole Business Before You Choose Your Path",
    paragraphs: [
      "Industrial distribution offers many kinds of careers, and it is hard to choose one before you have seen how the pieces fit. The Rotational Program lets you spend time in each core function so that your first permanent role is a well-informed choice.",
      "Participants are hired as full-time employees, not as trainees on the sidelines. Each rotation has clear objectives, a manager and measurable outcomes. By the end, you will understand how products are sourced, stocked, sold and delivered, and you will have built relationships across the company.",
    ],
  },
  stats: {
    heading: "Program Structure",
    items: [
      { value: "4", label: "Core rotations" },
      { value: "6 months", label: "Length of each rotation" },
      { value: "1", label: "Dedicated program mentor" },
      { value: "1", label: "Placement into a permanent role" },
    ],
  },
  process: {
    heading: "The Rotation Schedule",
    intro: "Each rotation focuses on a different part of the business. The sequence can vary by location and cohort.",
    steps: [
      { title: "Sales & Customer Service", text: "Handle quotes and customer requests, learn product families and applications, and shadow account managers on customer visits.", meta: "Rotation 1" },
      { title: "Operations & Distribution", text: "Work in receiving, inspection, inventory control and fulfillment. Learn safety practices, accuracy standards and how the warehouse is measured.", meta: "Rotation 2" },
      { title: "Supply Chain & Purchasing", text: "Learn sourcing, supplier management, lead-time planning and inventory optimization. Support a real stock-planning analysis.", meta: "Rotation 3" },
      { title: "Branch Management", text: "Work with a branch leader on staffing, scheduling, budgeting, customer escalations and performance reviews.", meta: "Rotation 4" },
      { title: "Placement", text: "Discuss your strengths, interests and business needs, and move into a permanent role, often with responsibilities that build on the rotation you enjoyed most.", meta: "Program close" },
    ],
  },
  features: {
    heading: "Development Support",
    items: [
      { title: "Program mentor", text: "A dedicated mentor guides your development for the length of the program, separate from your rotation manager." },
      { title: "Technical and product training", text: "Structured learning on product families, standards, materials and applications used in oil and gas, industrial and infrastructure work." },
      { title: "Professional skills", text: "Coaching in communication, negotiation, time management and presenting to customers and leaders." },
      { title: "Cohort community", text: "Participants meet regularly as a group to share lessons, discuss challenges and support each other." },
      { title: "Leadership exposure", text: "Regular sessions with senior leaders and opportunities to present a project to the leadership team." },
      { title: "Regular feedback", text: "Written objectives and reviews at the end of each rotation, so you always know how you are doing." },
    ],
  },
  blocks: [
    {
      heading: "Who We Are Looking For",
      paragraphs: ["We look for people who are early in their careers and eager to learn a technical, people-focused business."],
      bullets: [
        "A bachelor's degree or equivalent experience",
        "Strong communication and problem-solving skills",
        "Interest in sales, operations, logistics or supply chain",
        "Willingness to relocate between rotations if required",
        "Ability to work safely on site and to learn quickly",
      ],
    },
    {
      heading: "Career Outcomes",
      paragraphs: [
        "Graduates of the program move into permanent roles that fit both their strengths and the needs of the business. Typical destinations include roles in sales and account management, branch operations, purchasing and supply chain, and technical support. Because you will have worked across departments, you will also have a network that helps you navigate the company as you grow.",
      ],
      bullets: [
        "Inside or outside sales and account management",
        "Branch operations and supervisory roles",
        "Purchasing, inventory planning and logistics",
        "Technical and application support",
      ],
    },
  ],
  faqs: [
    { question: "How is this different from the internship program?", answer: "The internship is a shorter, student-focused experience. The Rotational Program is a full-time job with a structured development plan and a placement at the end." },
    { question: "How long are the rotations?", answer: "Each rotation lasts 6 months. We will confirm the full schedule when we make an offer." },
    { question: "Will I need to relocate?", answer: "Some rotations may take place at different locations. We discuss expectations, and any support available, before you accept an offer." },
    { question: "Can I choose my final role?", answer: "Your preferences matter and we consider them carefully, but placement also depends on the needs of the business at the time. We aim for a match that works for you and for us." },
    { question: "When do applications open?", answer: "Application timing is September through January. Contact us to be notified when the next cohort opens." },
    { question: "What does the selection process involve?", answer: "Typically a resume review, an introductory conversation, one or more interviews with leaders and a short exercise. We tell you what to expect at each stage." },
    { question: "Is prior industrial experience required?", answer: "No. The program teaches the industry. Curiosity, resilience and good communication matter most." },
  ],
  related: aboutLinks([
    "/about/careers/internship-program",
    "/about/careers",
    "/about/why-rnow/service-commitment",
  ]),
  cta: { label: "Talk to us about the Rotational Program", href: "/contact" },
};
