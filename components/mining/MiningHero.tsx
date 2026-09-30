import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function MiningHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.miningPage.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-16 xl:px-10">
        <AnimatedSection>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Mining Industry Solutions
          </h1>
          <h2 className="mt-2 max-w-3xl text-lg font-bold tracking-wide sm:text-xl">
            Durable, High-Performance Products &amp; Industrial Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-100 sm:text-base">
            RNOW is your trusted supplier of PVF, industrial supplies,
            engineered equipment and end-to-end support for mining operations
            across multiple mining sectors and regions. Whether you&apos;re
            extracting soda ash in Wyoming, gold in the Rockies, lithium from
            Nevada brine, copper in Pinto Valley or operating across the Pilbara
            region of Australia, RNOW delivers the products, services and
            technical expertise to keep your operation running efficiently and
            safely – on time and on budget.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-100 sm:text-base">
            Backed by our specialized affiliated brands, RNOW helps you
            streamline operations and minimize downtime across every phase of
            your mining operation, from exploration and development to
            extraction, processing, tailings management and reclamation.
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
      </div>
    </section>
  );
}
