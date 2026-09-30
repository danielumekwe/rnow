import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function InstrumentationOptimize() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Optimize Your Process Performance
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              If you need instrumentation and measurement devices for your
              projects, check us out. We have everything you need to measure and
              control your flow operations. Our products include flow meters,
              transmitters, valves, regulators and more. Don&apos;t settle for
              less than the best. Contact us today, and let us help you optimize
              your process performance.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              <CircleHelp className="h-4 w-4" aria-hidden="true" />
              Have questions? Contact a RNOW Rep
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.instrumentationPage.process}
                alt="Metering skid with pumps, valves and instrumentation"
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
