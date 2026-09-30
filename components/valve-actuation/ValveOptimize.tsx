import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ValveOptimize() {
  return (
    <section className="bg-ink-700 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Optimize Flow Control with RNOW&apos;s Advanced Actuated Valves and
              Automation Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              Elevate your flow control processes and boost productivity with
              RNOW&apos;s cutting-edge actuated valve products and services. Our
              extensive inventory includes customizable valve actuators, ensuring
              precise and efficient flow control tailored to your system&apos;s
              requirements. Our field technicians provide actuator field
              services, engineering services and in-house service and testing.
            </p>
            <Link
              href="/products-and-services/valves"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              Explore Our Valve and Actuation Product Range Now!
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-video w-full">
              <Image
                src={siteImages.valveActuationPage.optimize}
                alt="Actuated valves at an industrial facility"
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
