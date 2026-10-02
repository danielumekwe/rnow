import { notFound } from "next/navigation";
import DetailLayout, { ProseBlock } from "@/components/about-section/DetailLayout";
import { aboutCrumbs } from "@/data/about/sitemap";
import { caseStudies } from "@/data/about/whyRnow";
import { aboutMetadata } from "@/lib/aboutMetadata";

type Params = { slug: string };
const BASE = "/about/why-rnow/case-studies";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return aboutMetadata({ title: c.title, description: c.excerpt, path: `${BASE}/${c.slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = caseStudies.find((x) => x.slug === slug);
  if (!study) notFound();

  const others = caseStudies
    .filter((x) => x.slug !== study.slug)
    .slice(0, 3)
    .map((x) => ({ title: x.title, text: x.excerpt, href: `${BASE}/${x.slug}`, tag: x.industry }));

  return (
    <DetailLayout
      breadcrumb={aboutCrumbs(BASE, study.title)}
      eyebrow={`CASE STUDY · ${study.industry.toUpperCase()}`}
      title={study.title}
      description={study.excerpt}
      image={study.image}
      imageAlt=""
      backHref={BASE}
      backLabel="Back to Case Studies"
      related={others}
      relatedHeading="More Case Studies"
      ctaLabel="Facing a similar challenge? Talk to our team"
      meta={
        <span className="text-sm text-gray-600">
          Services: {study.services.join(" · ")}
        </span>
      }
    >
      <ProseBlock heading="The Challenge" paragraphs={study.challenge} />
      <ProseBlock heading="The Solution" paragraphs={study.solution} />
      <ProseBlock heading="The Results" paragraphs={[]} bullets={study.results} />
    </DetailLayout>
  );
}
