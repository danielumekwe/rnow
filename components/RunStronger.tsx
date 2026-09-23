import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import AnimatedSection from "@/components/AnimatedSection";

export default function RunStronger() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-square lg:aspect-auto lg:h-[520px]">
              <Image
                src="/images/run-stronger.png"
                alt="RNOW field technicians on an industrial job site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Eyebrow>Run Stronger with RNOW</Eyebrow>
            <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
              Get in touch with an RNOW expert to kick-start your journey
              with us.
            </h2>
            <Link
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent"
            >
              Request a quote and get started
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
