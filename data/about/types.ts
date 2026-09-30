import type { Faq } from "@/data/aboutFaqs";

/** A node in the About section's site tree. This one tree drives the menu, breadcrumbs and cards. */
export type AboutNode = {
  key: string;
  label: string;
  path: string;
  blurb: string;
  children?: AboutNode[];
};

export type Stat = { value: string; label: string };
export type TitledText = { title: string; text: string };
export type Step = { title: string; text: string; meta?: string };
export type Block = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};
export type CardLink = {
  title: string;
  text: string;
  href: string;
  tag?: string;
};

/** Everything a standard About page needs. Edit copy here, not in components. */
export type AboutPageContent = {
  path: string;
  /** Used for <title>, Open Graph and the breadcrumb. */
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    /** Key into the About hero image set (see lib/aboutHeroes.ts). */
    image: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  /** Optional amber notice shown under the hero (e.g. "draft, pending legal review"). */
  notice?: string;
  intro: { heading: string; paragraphs: string[] };
  stats?: { heading?: string; note?: string; items: Stat[] };
  features?: { heading: string; intro?: string; items: TitledText[] };
  process?: { heading: string; intro?: string; steps: Step[] };
  blocks?: Block[];
  /** Cards linking to child pages. Filled automatically from the sitemap when `childCards` is true. */
  childCards?: { heading: string; intro?: string };
  faqs: Faq[];
  related: CardLink[];
  cta: { eyebrow?: string; label: string; href: string };
};

/** Shared shape for sample news, events and case studies. */
export type SampleMeta = {
  /** TODO: sample content only. Replace with real content before launch. */
  sample: true;
};

export type NewsArticle = SampleMeta & {
  slug: string;
  title: string;
  category: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  excerpt: string;
  image: string;
  readMinutes: number;
  body: Block[];
};

export type EventItem = SampleMeta & {
  slug: string;
  title: string;
  type: string;
  status: "upcoming" | "past";
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** Free-text location, e.g. "Houston, TX". */
  location: string;
  excerpt: string;
  image: string;
  about: string[];
  agenda: string[];
  whoShouldAttend: string[];
};

export type CaseStudy = SampleMeta & {
  slug: string;
  title: string;
  industry: string;
  excerpt: string;
  image: string;
  services: string[];
  challenge: string[];
  solution: string[];
  results: string[];
  quote?: never;
};
