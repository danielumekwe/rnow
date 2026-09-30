import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function MidstreamExpert() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Your Expert Partner in Midstream Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Over 150 years in the industry, RNOW has built a reputation as a
              trusted expert in the midstream market. Our worldwide presence
              showcases our dedication to exceptional service and deep industry
              insight. We specialize in offering top-notch tubular products,
              efficient materials, quality valves and advanced automation.
              Additionally, our track record shines in creating pump and process
              packages, which include pipeline facilities, launchers, receivers
              and metering units. Choose RNOW for a complete, tailored solution
              to boost the efficiency and safety of your operation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="bg-gray-100 p-6 text-center sm:p-8">
              <h3 className="text-lg font-semibold text-ink sm:text-xl">
                Comprehensive Midstream Solutions
              </h3>
              <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-gray-600 sm:text-sm">
                Your Premier Provider for Every Step of the Midstream Journey –
                From Tank Batteries to Refineries and Distribution Facilities.
              </p>
              <div className="relative mt-4 aspect-[800/381] w-full">
                <Image
                  src={siteImages.midstreamPage.diagram}
                  alt="Midstream flow diagram: production unit, gathering lines, pump station, transmission line, refinery, gas processing plant, compressor station and gas distribution"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
