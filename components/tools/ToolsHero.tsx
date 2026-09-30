import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ToolsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Tools
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Your Ultimate Tools Destination
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              At RNOW, we understand the essence of having the right tool for the
              job. That&apos;s why we proudly present our extensive inventory
              offering you the best in hand tools, power tools, air tools and
              cutting tools. From the most minor task to the most significant
              project, we&apos;ve got the perfect tool tailored to your needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
              <Button
                href="#tools-catalog"
                variant="ghost-dark"
                showArrow={false}
                className="!border-accent !px-4 !py-2.5 !text-xs !text-accent hover:!bg-accent hover:!text-white"
              >
                View Tools Catalog
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.toolsPage.hero}
                alt="Tool chest, cordless drill, welder, welding helmet and tape"
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
