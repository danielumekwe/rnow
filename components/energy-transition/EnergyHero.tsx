import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function EnergyHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Energy Transition
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Explore RNOW&apos;s Broad Range of Products and Services for Carbon
              Capture, Hydrogen and Renewable Fuels.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              As you continue to invest in projects that drive the transition to
              low carbon energy sources, RNOW is well equipped and ready to
              support your operations with a broad range of products and supply
              chain services for carbon capture, hydrogen or renewable fuels
              applications.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Give us the opportunity to demonstrate how our products and
              expertise can fuel your next project and improve your
              sustainability for the future.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
              <Image
                src={siteImages.energyTransitionPage.hero}
                alt="Energy transition: carbon capture, low-carbon hydrogen and renewable fuels"
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
