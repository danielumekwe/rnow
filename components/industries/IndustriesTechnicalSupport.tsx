import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesTechnicalSupport() {
  return (
    <section className="bg-surface pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Comprehensive Technical Support Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              At RNOW, our team of engineers are dedicated to helping you
              resolve any technical issues quickly and efficiently. Our
              support services focus on timely and effective solutions, so
              that your business can keep running smoothly. We take the time
              to understand your individual needs and strive to provide the
              best possible solution for you, whatever the issue may be. With
              us, you can trust that your technical problems will be
              resolved in a timely manner.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.industriesPage.technicalSupport}
                alt="RNOW technicians servicing equipment in the field"
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
