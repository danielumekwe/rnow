import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import AnimatedSection from "@/components/AnimatedSection";
import {
  CardGrid,
  SampleBadge,
  SampleNotice,
} from "@/components/about-section/AboutSections";
import type { CardLink } from "@/data/about/types";

const wrap = "mx-auto max-w-[1400px] px-6 xl:px-10";

/** Shared layout for news, event and case-study detail pages. */
export default function DetailLayout({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  meta,
  sampleWhat,
  backHref,
  backLabel,
  children,
  related,
  relatedHeading,
  ctaLabel,
}: {
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  meta?: ReactNode;
  sampleWhat: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
  related: CardLink[];
  relatedHeading: string;
  ctaLabel: string;
}) {
  return (
    <>
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
      />
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <SampleBadge />
              {meta}
            </div>
            <SampleNotice what={sampleWhat} />
            <div className="mt-8 space-y-10">{children}</div>
            <Link
              href={backHref}
              className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
      <CardGrid heading={relatedHeading} cards={related} tone="surface" />
      <ContactCTA label={ctaLabel} />
    </>
  );
}

export function ProseBlock({
  heading,
  paragraphs,
  bullets,
}: {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}) {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          {p}
        </p>
      ))}
      {bullets && (
        <ul className="mt-5 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-base leading-relaxed text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </AnimatedSection>
  );
}
