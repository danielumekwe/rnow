import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  CoverImage,
} from "@/components/about-section/AboutSections";
import { caseStudies } from "@/data/about/whyRnow";
import { events, formatDate, newsArticles } from "@/data/about/news";

const wrap = "mx-auto max-w-[1400px] px-6 xl:px-10";
const h2 = "text-3xl font-bold text-ink sm:text-4xl";

function ListingShell({
  heading,
  children,
  tone = "surface",
}: {
  heading: string;
  children: React.ReactNode;
  tone?: "surface" | "white";
}) {
  return (
    <section className={`py-16 sm:py-20 ${tone === "surface" ? "bg-surface" : "bg-white"}`}>
      <div className={wrap}>
        <AnimatedSection>
          <h2 className={h2}>{heading}</h2>
        </AnimatedSection>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
}

function CardShell({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}

function ReadMore({ label = "Read more" }: { label?: string }) {
  return (
    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </span>
  );
}

export function NewsListing() {
  const sorted = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <ListingShell heading="Latest Company News">
      {sorted.map((a, i) => (
        <AnimatedSection key={a.slug} delay={(i % 3) * 0.06}>
          <CardShell href={`/about/news/company-news/${a.slug}`}>
            <CoverImage src={a.image} alt="" />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                  {a.category}
                </span>
              </div>
              <time dateTime={a.date} className="mt-2 text-sm text-gray-500">
                {formatDate(a.date)}
              </time>
              <h3 className="mt-2 text-xl font-bold leading-snug text-ink">{a.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">{a.excerpt}</p>
              <ReadMore />
            </div>
          </CardShell>
        </AnimatedSection>
      ))}
    </ListingShell>
  );
}

export function EventsListing() {
  const upcoming = events.filter((e) => e.status === "upcoming").sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => e.status === "past").sort((a, b) => b.date.localeCompare(a.date));

  const card = (e: (typeof events)[number], i: number) => (
    <AnimatedSection key={e.slug} delay={(i % 3) * 0.06}>
      <CardShell href={`/about/news/events/${e.slug}`}>
        <CoverImage src={e.image} alt="" />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{e.type}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold leading-snug text-ink">{e.title}</h3>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
            <time dateTime={e.date}>{formatDate(e.date)}</time>
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {e.location}
          </p>
          <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">{e.excerpt}</p>
          <ReadMore label="Event details" />
        </div>
      </CardShell>
    </AnimatedSection>
  );

  return (
    <>
      <ListingShell heading="Upcoming Events">
        {upcoming.map(card)}
      </ListingShell>
      <ListingShell heading="Past Events" tone="white">
        {past.map(card)}
      </ListingShell>
    </>
  );
}

export function CaseStudyListing() {
  return (
    <ListingShell heading="Featured Case Studies">
      {caseStudies.map((c, i) => (
        <AnimatedSection key={c.slug} delay={(i % 3) * 0.06}>
          <CardShell href={`/about/why-rnow/case-studies/${c.slug}`}>
            <CoverImage src={c.image} alt="" />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{c.industry}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold leading-snug text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">{c.excerpt}</p>
              <ReadMore label="Read the case study" />
            </div>
          </CardShell>
        </AnimatedSection>
      ))}
    </ListingShell>
  );
}
