import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function PvfHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Pipe, Valves and Fittings (PVF)
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW is your global PVF distributor for pipe, valves, actuators,
              fittings, flanges, fasteners and gaskets. We maintain a wide range
              of PVF products in multiple schedules, sizes and grades for the
              oil and gas and industrial markets. Our quality program includes
              an AML management and inspection process that brings you quality
              PVF products that meet your needs.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW provides a wide range of pipe, valves and fittings to reduce
              operational downtime, replenish your on-site inventory and get
              what you need when you need it.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.pvfPage.hero}
                alt="Industrial valves, fittings and flanges"
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
