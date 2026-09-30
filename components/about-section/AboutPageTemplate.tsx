import type { ReactNode } from "react";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import FaqAccordion from "@/components/shared/FaqAccordion";
import {
  CardGrid,
  ContentBlocks,
  FeatureGrid,
  IntroSection,
  ProcessSteps,
  StatsBand,
} from "@/components/about-section/AboutSections";
import type { AboutPageContent } from "@/data/about/types";
import { aboutCrumbs, childLinks } from "@/data/about/sitemap";
import { aboutHeroes, type AboutHeroKey } from "@/lib/aboutHeroes";

/**
 * Renders a standard About page from typed content.
 * `middle` slots extra content (e.g. a news or case-study listing) before the FAQ.
 */
export default function AboutPageTemplate({
  page,
  middle,
}: {
  page: AboutPageContent;
  middle?: ReactNode;
}) {
  const { hero } = page;
  return (
    <>
      <PageHero
        breadcrumb={aboutCrumbs(page.path)}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={aboutHeroes[hero.image as AboutHeroKey]}
        imageAlt={hero.imageAlt}
        ctaLabel={hero.ctaLabel}
        ctaHref={hero.ctaHref}
      />
      {page.notice && (
        <div className="bg-amber-50">
          <p className="mx-auto max-w-[1400px] px-6 py-3 text-sm text-amber-900 xl:px-10">
            <strong>Draft content.</strong> {page.notice}
          </p>
        </div>
      )}
      <IntroSection {...page.intro} />
      {page.childCards && (
        <CardGrid
          heading={page.childCards.heading}
          intro={page.childCards.intro}
          cards={childLinks(page.path)}
          tone="surface"
        />
      )}
      {page.stats && <StatsBand {...page.stats} />}
      {page.features && <FeatureGrid {...page.features} />}
      {page.process && <ProcessSteps {...page.process} />}
      {page.blocks && <ContentBlocks blocks={page.blocks} />}
      {middle}
      <FaqAccordion faqs={page.faqs} title="Frequently Asked Questions" />
      <CardGrid heading="Related Pages" cards={page.related} />
      <ContactCTA
        eyebrow={page.cta.eyebrow ?? "RUN STRONGER WITH RNOW"}
        label={page.cta.label}
        href={page.cta.href}
      />
    </>
  );
}
