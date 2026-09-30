import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function CompressorsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-6 xl:px-10">
        <Breadcrumb
          items={[
            { label: "Products & Services", href: "/products-and-services" },
            { label: "Compressors" },
          ]}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
              Air Compressors, Dryers and Blowers
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Reliable Industrial Air Solutions and Air Treatment Systems
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Excess moisture and impure air can compromise workers&apos; health
              and processing equipment&apos;s durability. When the air is not
              clean, dry and oil-free, it poses risks that can lead to
              operational inefficiencies and unexpected costs. At RNOW, we
              provide quality air compressors, dryers and blowers. We&apos;re
              here to help you combat the everyday challenges you face with air
              quality and moisture. Plus, our team of experts is always
              available to answer any questions about our products or services.
              So don&apos;t hesitate to contact us today.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.compressorsPage.hero}
                alt="RNOW air compressors, dryers and receiver tanks"
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
