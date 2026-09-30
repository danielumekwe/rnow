import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ElectricalResources() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Empower Your Decisions with RNOW Resources
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Navigate the complexities of your projects with ease. RNOW is
              proud to offer a curated range of resources designed to address
              your unique needs. Whether you&apos;re searching for industry
              insights, product details or user guides, we&apos;ve gathered it
              all in one place. Let RNOW be your companion in ensuring
              you&apos;re always well-equipped and well-informed.
            </p>
            <div className="mt-5">
              <Button href="/news" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Explore RNOW Resources
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.electricalPage.resources}
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
