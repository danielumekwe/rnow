import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionOfferings } from "@/data/solutionOfferings";
import { siteImages } from "@/lib/images";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
            Advanced supply chain, product and technology offerings to keep
            your business running strong.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 sm:mt-14">
          {solutionOfferings.map((offering) => (
            <Link
              key={offering.label}
              href={offering.href}
              className="group flex items-center justify-between gap-4 border-b border-gray-200 py-5 first:border-t"
            >
              <span className="flex items-center gap-4">
                <offering.icon
                  className="h-6 w-6 text-ink"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-lg font-medium text-ink sm:text-xl">
                  {offering.label}
                </span>
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </AnimatedSection>
      </div>

      <AnimatedSection
        delay={0.12}
        className="mt-16 grid grid-cols-1 sm:mt-20 lg:grid-cols-2"
      >
        <div className="flex flex-col justify-center bg-[#6b0f14] px-8 py-14 sm:px-14 sm:py-16">
          <h3 className="max-w-lg text-2xl font-semibold leading-snug text-white sm:text-3xl">
            With over 160 years of history, RNOW is more than just a
            supplier—we are your partners in innovation.
          </h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
            From customized supply chain operations to tailored ecommerce and
            data management technology, we listen to your unique needs to
            deliver unmatched solutions and services for any industry.
          </p>
          <Button href="/about" variant="secondary" className="mt-8 self-start bg-accent hover:bg-accent-dark">
            Explore Who We Are
          </Button>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <Image
            src={siteImages.solutions.partnerBanner}
            alt="Two RNOW field technicians standing at an industrial gas facility"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection
        delay={0.16}
        className="grid grid-cols-1 sm:grid-cols-3"
      >
        <div className="relative aspect-[4/5] sm:aspect-auto sm:h-[520px]">
          <Image
            src={siteImages.solutions.gridPortrait}
            alt="RNOW warehouse team member wearing safety glasses"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/5] sm:aspect-auto sm:h-[520px]">
          <Image
            src={siteImages.solutions.gridFacility}
            alt="Two RNOW technicians reviewing plans inside an industrial facility"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/5] sm:aspect-auto sm:h-[520px]">
          <Image
            src={siteImages.solutions.gridTablet}
            alt="RNOW warehouse associate holding a tablet"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
