import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function MiningPartner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Partner With RNOW
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              From exploration to extraction, refining to reclamation, RNOW is
              your reliable partner for mining supplies, custom solutions and
              operational support.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Contact us to request a quote or consult with a RNOW mining
              specialist and Run Stronger today.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={siteImages.miningPage.handshake}
                alt="Handshake between an RNOW representative and a mining customer"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
