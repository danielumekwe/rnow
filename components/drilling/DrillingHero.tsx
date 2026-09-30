import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function DrillingHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Drilling and Completions
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              OEM Oilfield Equipment and Well Completion Services
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Searching for the right oil and gas products? RNOW stands out with
              its long-standing expertise in sourcing top-tier energy products.
              We collaborate with leading drilling and completions OEM
              manufacturers, guaranteeing premium quality. Additionally, with
              our skilled Thru Tubing technicians and ready-to-deploy trailers,
              we offer specialized services like milling, cleanout and retrieval
              and on-site mobile services. Whether you need OEM products for
              drilling or completion solutions for oil wells, we&apos;ve got you
              covered.
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
                src={siteImages.drillingPage.hero}
                alt="Blowout preventer and drilling equipment"
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
