import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ToolsCatalog() {
  return (
    <section id="tools-catalog" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              RNOW Tools Catalog
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Dive deep into our diverse range with the tools catalog, offering
              an extensive listing of our most popular products. Whether
              you&apos;re searching for hand tools or cutting-edge power tools,
              our catalog ensures you find exactly what you&apos;re looking for,
              hassle-free.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Request the Catalog
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <Image
                src={siteImages.toolsPage.catalog}
                alt="RNOW Tools Catalog cover"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-contain shadow-md"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
