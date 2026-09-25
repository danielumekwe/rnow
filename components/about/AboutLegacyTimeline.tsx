import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutTimeline } from "@/data/aboutTimeline";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutLegacyTimeline() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Our Legacy Timeline
          </h2>
          <p className="mt-4 max-w-3xl text-lg font-semibold text-ink sm:text-xl">
            RNOW has a legacy of more than 160 years and is headquartered in
            Houston, Texas.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We are proud to be one of the oldest businesses in our industry,
            with 160+ years of operation legacy, from humble beginnings to
            becoming one of the leading stocking distributors of energy and
            industrial products worldwide. We are committed to providing the
            best possible service to our customers. We offer various
            products and services, and we are always happy to help our
            customers find what they need. Let&apos;s take a look back at
            RNOW&apos;s rich history.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 space-y-2">
          {aboutTimeline.map((entry) => (
            <p key={entry.year} className="text-base text-gray-600 sm:text-lg">
              <span className="font-semibold text-ink">{entry.year}</span> —{" "}
              {entry.event}
            </p>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-14">
          <div className="flex flex-col gap-4 border border-gray-200 bg-surface p-8 sm:flex-row sm:items-start sm:gap-6 sm:p-10">
            <span className="hidden h-px w-16 shrink-0 bg-accent sm:mt-3 sm:block" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500">
                RUN STRONGER WITH RNOW
              </p>
              <Link
                href="#contact"
                className="group mt-3 inline-flex items-center gap-2 text-xl font-semibold text-accent sm:text-2xl"
              >
                Connect with an RNOW representative to learn more
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
