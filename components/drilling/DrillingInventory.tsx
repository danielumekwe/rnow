import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function DrillingInventory() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full border border-gray-200 bg-white p-1 shadow-md">
              <div className="relative h-full w-full">
                <Image
                  src={siteImages.drillingPage.inventory}
                  alt="RNOW team member using an inventory control system"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Unlock Efficiency with Inventory Control Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Elevate your inventory management with RNOW&apos;s state-of-the-art
              suite of inventory control solutions. Harness the power of
              advanced technologies, such as cameras, sensors and smart locks,
              paired with automatic data collection. Our AccessNOW suite ensures
              unparalleled inventory integrity and masterfully optimizes
              forecasting, ensuring supplies are available when needed.
              Moreover, with our intelligent inventory management solutions, you
              can benefit from a streamlined supply chain, significant
              reductions in spending, increased productivity, accurate inventory
              tracking and automated ordering systems for superior
              accountability.
            </p>
            <Link
              href="/solutions#digital-solutions-technology"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Transform Your Inventory Management Today!
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
