import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function IndustrialSuppliesHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Industrial and Facility Supplies
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Industrial MRO Supplies for the Upkeep of Buildings and Grounds
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              From manufacturing to facility maintenance, RNOW&apos;s range of
              industrial and facility supplies ensures smooth operations and
              safety at every level. Whether you&apos;re looking for industrial
              machinery, facility equipment or warehouse tools, our material
              handling solutions can do the job. Our commitment is to provide
              the best in industrial supplies and facility maintenance products,
              ensuring maximum efficiency, safety and satisfaction.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.industrialSuppliesPage.hero}
                alt="Assortment of industrial and facility supplies"
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
