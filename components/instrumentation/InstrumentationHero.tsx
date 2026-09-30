import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function InstrumentationHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Instrumentation and Measurement
            </h1>
            <h2 className="mt-3 max-w-xl text-lg font-bold tracking-wide text-ink sm:text-xl">
              Find the right flow control and measurement instrumentation and
              equipment for your project
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW offers a comprehensive line of field-proven instruments and
              assemblies for measuring pressure, temperature and flows across
              all liquid and gas applications, including custody transfer, check
              stations, control loops, batching and more to get the most precise
              readings and maximize your performance, profitability and safety.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
              <Button href="/products-and-services" variant="primary" showArrow={false} className="!bg-orange-400 !px-4 !py-2.5 !text-xs !text-white hover:!bg-orange-500">
                Buy Online
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.instrumentationPage.hero}
                alt="Pressure gauge, thermowells and flow instruments"
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
