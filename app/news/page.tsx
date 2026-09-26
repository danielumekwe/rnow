import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";
import { newsArticles } from "@/data/news";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "News & Resources",
  description: "The latest news, recognitions and resources from RNOW Industrial Supply.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "News & Resources" }]}
        eyebrow="THE LATEST"
        title="RNOW News & Resources"
        image={siteImages.industriesPage.hero}
        imageAlt="RNOW industrial facility"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {newsArticles.map((article) => (
              <div key={article.slug} id={article.slug} className="scroll-mt-28">
                <NewsCard article={article} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
