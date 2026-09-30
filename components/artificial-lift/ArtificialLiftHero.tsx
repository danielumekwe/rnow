import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ArtificialLiftHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Artificial Lift Solutions
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Artificial Lift Technologies and Solutions to Your Production Challenges
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW supports production operations with a complete range of
              artificial lift products and services. From rod lift and
              progressive cavity pumps to surface drive systems and automation
              support, we help you optimize production efficiency and equipment
              reliability for your wells.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
              <Button href="/location" variant="secondary" showArrow={false} className="!bg-[#2f5d62] !px-4 !py-2.5 !text-xs hover:!bg-[#244a4e]">
                Our Locations
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.artificialLiftPage.hero}
                alt="Row of pumpjacks on a production site"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
