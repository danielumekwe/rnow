import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function PaintsProfessional() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Professional Grade Products for Every Project
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              We offer the ideal industrial paint and coating products for both
              small-scale and large-scale painting projects. Our stock selection
              of paints and coatings is thoroughly vetted and certified for
              industrial use, guaranteeing that your project meets the most
              rigorous standards and achieves excellent results. With our
              products, even the most challenging projects can stand the test of
              time, lasting for years to come.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.paintsPage.tank}
                alt="Worker painting a field-erected storage tank"
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
