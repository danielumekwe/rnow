import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function LiftOpsHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.artificialLiftOpsPage.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-16 xl:px-10">
        <AnimatedSection>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Artificial Lift Methods in the Oil and Gas Industry
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-100 sm:text-base">
            RNOW offers a variety of artificial lift systems to help our
            customers boost production and extend the life of their wells. Our
            plunger lift systems, conventional rod pump systems, variable
            frequency drives (VFD) with automation or optimization capabilities,
            and high-quality progressing cavity pumps (PCP) are explicitly
            designed for customer-specific well conditions. This allows our
            customers to get the most out of their wells while keeping
            production costs low.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
              Contact Sales
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
