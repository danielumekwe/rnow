import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import DetailLayout, { ProseBlock } from "@/components/about-section/DetailLayout";
import { aboutCrumbs } from "@/data/about/sitemap";
import { events, formatDate } from "@/data/about/news";
import { aboutMetadata } from "@/lib/aboutMetadata";

type Params = { slug: string };
const BASE = "/about/news/events";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  if (!e) return {};
  return aboutMetadata({ title: e.title, description: e.excerpt, path: `${BASE}/${e.slug}` });
}

export default async function EventPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = events.find((x) => x.slug === slug);
  if (!event) notFound();

  const others = events
    .filter((x) => x.slug !== event.slug)
    .slice(0, 3)
    .map((x) => ({ title: x.title, text: x.excerpt, href: `${BASE}/${x.slug}`, tag: x.type }));

  return (
    <DetailLayout
      breadcrumb={aboutCrumbs(BASE, event.title)}
      eyebrow={`${event.type.toUpperCase()} · ${event.status === "upcoming" ? "UPCOMING" : "PAST EVENT"}`}
      title={event.title}
      description={event.excerpt}
      image={event.image}
      imageAlt=""
      sampleWhat="This event"
      backHref={BASE}
      backLabel="Back to Events"
      related={others}
      relatedHeading="More Events"
      ctaLabel={
        event.status === "upcoming"
          ? "Interested in attending? Contact us to register"
          : "Want to hear about future events? Contact us"
      }
      meta={
        <>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {event.location}
          </span>
        </>
      }
    >
      <ProseBlock heading="About This Event" paragraphs={event.about} />
      <ProseBlock heading="Agenda" paragraphs={[]} bullets={event.agenda} />
      <ProseBlock heading="Who Should Attend" paragraphs={[]} bullets={event.whoShouldAttend} />
      <div className="border-t-2 border-accent-dark bg-surface p-6">
        <h2 className="text-xl font-bold text-ink">
          {event.status === "upcoming" ? "Register Your Interest" : "Missed This One?"}
        </h2>
        <p className="mt-2 text-base leading-relaxed text-gray-600">
          {event.status === "upcoming"
            ? "Tell us who is attending and we will confirm details by reply. Registration is free for customers."
            : "Materials may be available on request. Tell us what you are looking for and we will see what we can share."}
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Contact Us
        </Link>
      </div>
    </DetailLayout>
  );
}
