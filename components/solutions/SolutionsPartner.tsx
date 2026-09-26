import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionsPartner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Partner with RNOW for Streamlined Success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Our expertise in digital technology, engineering, fabrication,
              materials management and safety services makes us the perfect
              partner to streamline your operations and boost profitability.
              Benefit from our customized solutions tailored to your needs.
              Don&apos;t wait &mdash; partner with RNOW today and experience
              the difference!
            </p>
            <Link
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2.5 text-base font-semibold text-accent"
            >
              <CircleHelp className="h-5 w-5" aria-hidden="true" />
              Have questions? Contact an RNOW representative
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.solutionsPage.partner}
                alt="RNOW representatives shaking hands in front of an industrial facility"
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
