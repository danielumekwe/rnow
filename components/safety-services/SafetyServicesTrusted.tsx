import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function SafetyServicesTrusted() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.safetyServicesPage.fleet}
                alt="RNOW safety service trucks and technicians"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Trusted safety services provider for shutdowns, turnarounds and
              outages
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              We pride ourselves on providing our customers with top-quality
              safety services. We provide our customers with years of
              top-quality safety services for planned and scheduled plant
              shutdowns and turnarounds. As well as for unexpected outages or
              critical maintenance situations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-100 sm:text-base">
              Our team of experts is qualified and dedicated to customer service
              and providing world-class solutions. Our technicians are trained
              and our standard operating procedures will ensure that your
              equipment works when you need it. Contact us today to learn more
              about our safety services!
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
