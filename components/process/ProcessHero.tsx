import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ProcessHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Process and Production Equipment
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              When you need a solution provider to turnkey the engineering,
              design, and fabrication of an entire tank battery, RNOW Process
              Solutions is your logical choice. We work with customers to
              optimize the separation of oil, gas and produced water through our
              modular designs accounting for current and future reservoir
              production. We also supply all the pipe, valves, fittings, surface
              pumps and pressure vessels and LACTs to accommodate your design
              and timeframe, whether you are building a single tank battery or
              multiple tank batteries.
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
                src={siteImages.processPage.hero}
                alt="Skid-mounted process equipment package"
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
