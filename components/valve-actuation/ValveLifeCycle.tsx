import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ValveLifeCycle() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              We help customers manage their valve assets across the total life
              cycle.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We are a leading stocking distributor of valves and related
              services to industries worldwide. Our valve solutions are well
              equipped to meet the specific needs of each customer and
              application.
            </p>
          </div>
          <div className="relative mx-auto mt-8 aspect-[1364/889] w-full max-w-3xl">
            <Image
              src={siteImages.valveActuationPage.lifeCycle}
              alt="Valve asset life cycle: site assessment, input data electronically, condition vs criticality assessment, inventory management, rectification planning and turnaround execution"
              fill
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-contain"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
