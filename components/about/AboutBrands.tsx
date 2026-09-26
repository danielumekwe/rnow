import Image from "next/image";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutBrands() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              RNOW Brands
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              At RNOW, we pride ourselves on our diverse portfolio of
              affiliated brands, each contributing unique expertise and
              product offerings to enrich our comprehensive solutions. These
              brands have been carefully selected and integrated into the
              RNOW family, ensuring that we continually provide our customers
              with the highest quality products and services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Spanning a wide range of specialized areas within the energy
              and industrial sectors, our affiliated brands amplify our
              reach, capabilities and commitment to excellence. Together, we
              work cohesively to deliver unmatched value to our global
              clientele.
            </p>
            <div className="mt-8">
              <Button href="/about/brands" variant="primary" showArrow={false}>
                Learn About RNOW Brands
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={siteImages.aboutOverview.brands}
                alt="RNOW representatives shaking hands in front of an industrial facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
