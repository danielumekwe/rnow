import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function PumpsExpertise() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Expertise and Customized Solutions for All Pump Systems
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              As a leading distributor of pump products for oilfield, industrial
              and municipal pumps, we pride ourselves on providing excellent
              customer service and high-quality products. With our extensive
              product range, customized solutions and expertise in various
              industries, we are well-equipped to help you meet your specific
              needs. Whether you need centrifugal, positive displacement or
              surface pumps, our products are designed to withstand even the
              harshest conditions and perform consistently, ensuring your
              operations run smoothly and efficiently. Contact us today to learn
              more about how they can support your business!
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Have questions? Contact a RNOW customer service representative
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/Pump%20and%20pac%20kages/Pump-field-preventative-maint_thumb.webp"
                alt="Pump piping and valves at a field facility"
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
