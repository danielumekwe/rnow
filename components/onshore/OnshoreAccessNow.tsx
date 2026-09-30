import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function OnshoreAccessNow() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.onshoreDrillingPage.accessNow}
                alt="AccessNOW automated inventory storerooms, cribs and kiosks"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Streamline your inventory management and reduce costs through
              automation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW offers you various inventory management options, from our
              innovative AccessNOW | PORT remote storeroom system to our
              AccessNOW | CRIB automated storeroom that can accommodate an
              unlimited number of items, allowing you to focus on productive
              work rather than spending non-productive time chasing parts. Our
              AccessNOW<sup>TM</sup> solutions put the necessary details closer
              to the point of use while also allowing you visibility and control
              of spend.
            </p>
            <Link
              href="/solutions/supply-chain-management"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Learn more about our AccessNOW solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
