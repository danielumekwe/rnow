import { newsArticles } from "@/data/news";
import Eyebrow from "@/components/Eyebrow";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function News() {
  return (
    <section id="news" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <Eyebrow>The Latest</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-accent sm:text-4xl">
            RNOW in the News
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
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
