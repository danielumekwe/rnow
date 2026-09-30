import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function DrillingResources() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Visit Our Resource Center
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Access our wealth of assets on drilling products and completions
              services, where you&apos;ll find product insight and advice from
              instructional videos to catalogs to white papers, case studies,
              product and technical data sheets, articles, interviews,
              animations and more. We aim to provide you with the knowledge you
              need to make informed decisions about drilling products and
              completions services technologies.
            </p>
            <div className="mt-5">
              <Button href="/news" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Explore Now and Elevate Your Drilling Decisions
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.drillingPage.resources}
                alt="Person working on a laptop"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
