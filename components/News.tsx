import { newsArticles } from "@/data/news";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function News() {
  return (
    <section id="news" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <SectionHeading
          eyebrow="Resources"
          title="News & Insights"
          description="Perspective on sourcing, supply chain and industrial operations."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.08}>
              <NewsCard article={article} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
