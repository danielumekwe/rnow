import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function PaintsHero() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Industrial Paints and Coatings for Any Job
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                RNOW is the perfect source for all your industrial coating and
                painting needs. We carry a comprehensive selection of finishes,
                equipment, tools and supplies for every application. We have
                everything you need for your next painting project, from
                choosing the right brushes and powder coatings, to mixers and
                sprayers, to exterior and interior finishes and stains. Contact
                us today to get started.
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
                  src={siteImages.paintsPage.hero}
                  alt="Cold galvanizing compound, spray paint and paint tray"
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

      <div className="bg-ink-800">
        <div className="mx-auto flex max-w-[1400px] justify-center px-6 xl:px-10">
          <a
            href="#high-performance-coatings"
            className="bg-ink-700 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent"
          >
            Click Here to Explore
          </a>
        </div>
      </div>
    </>
  );
}
