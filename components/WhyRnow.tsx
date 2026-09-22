import { whyRnowPoints } from "@/data/whyRnow";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export default function WhyRnow() {
  return (
    <section className="border-y border-gray-100 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <SectionHeading eyebrow="Why RNOW" title="Built for Demanding Operations" />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyRnowPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-ink text-accent-light">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
