import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function PumpsResources() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Instant Access to Pump and Packages Resources
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Take the hassle out of learning about pumps and pump packages with
              the wealth of resources from RNOW! Get the info you need without
              spending hours researching. With an abundance of resources from
              RNOW, discover the knowledge you need with ease.
            </p>
            <div className="mt-5">
              <Button href="/news" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Browse Our Resource Center
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.pumpsPage.resources}
                alt="Person working on a laptop"
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
