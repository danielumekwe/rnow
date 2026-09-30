import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import DetailLayout, { ProseBlock } from "@/components/about-section/DetailLayout";
import { aboutCrumbs } from "@/data/about/sitemap";
import { formatDate, newsArticles } from "@/data/about/news";
import { aboutMetadata } from "@/lib/aboutMetadata";

type Params = { slug: string };
const BASE = "/about/news/company-news";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = newsArticles.find((x) => x.slug === slug);
  if (!a) return {};
  return aboutMetadata({ title: a.title, description: a.excerpt, path: `${BASE}/${a.slug}` });
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = newsArticles.find((x) => x.slug === slug);
  if (!article) notFound();

  const others = newsArticles
    .filter((x) => x.slug !== article.slug)
    .slice(0, 3)
    .map((x) => ({ title: x.title, text: x.excerpt, href: `${BASE}/${x.slug}`, tag: x.category }));

  return (
    <DetailLayout
      breadcrumb={aboutCrumbs(BASE, article.title)}
      eyebrow={article.category.toUpperCase()}
      title={article.title}
      description={article.excerpt}
      image={article.image}
      imageAlt=""
      sampleWhat="This article"
      backHref={BASE}
      backLabel="Back to Company News"
      related={others}
      relatedHeading="More Company News"
      ctaLabel="Questions about this story? Contact our team"
      meta={
        <>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {article.readMinutes} min read
          </span>
        </>
      }
    >
      {article.body.map((b) => (
        <ProseBlock key={b.heading} {...b} />
      ))}
    </DetailLayout>
  );
}
