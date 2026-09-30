import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function SafetyServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.safetyServicesPage.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-20 xl:px-10">
        <AnimatedSection>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Safety Services to Support Turnarounds and Shutdowns
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-100 sm:text-base">
            Are you looking for a reliable safety services provider? Look no
            further than RNOW Safety Services, experts in supplying safety
            products, PPE, planning and logistics for your facilities. We know
            that workplace safety is essential to your company. You need
            reliable safety equipment for everyday operations, plant turnarounds
            and shutdowns, preventive maintenance and emergencies.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-100 sm:text-base">
            Our on-site and branch service centers, rental fleets and mobile and
            turnaround service trucks are second to none. We provide a
            comprehensive suite of safety services such as testing respiratory
            equipment, fire extinguishers, fall protection, safety showers and
            eye protection. Our services also include hose and level A suit
            testing and respirator fit testing. We can provide you with
            substantial savings and value while ensuring that you have the best
            possible safety protection.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
              Contact Sales
            </Button>
            <Button href="/location" variant="secondary" showArrow={false} className="!bg-[#2f5d62] !px-4 !py-2.5 !text-xs hover:!bg-[#244a4e]">
              Our Locations
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
