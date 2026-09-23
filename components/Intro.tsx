import { whyRnowPoints } from "@/data/whyRnow";
import AnimatedSection from "@/components/AnimatedSection";
import Eyebrow from "@/components/Eyebrow";

export default function Intro() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <Eyebrow>Why Choose RNOW?</Eyebrow>
          <h2 className="mt-4 max-w-5xl text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
            Experience dependable product access, responsive supply support
            and a genuine commitment to keeping your operation moving.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {whyRnowPoints.map((point, i) => (
            <AnimatedSection
              key={point.title}
              delay={i * 0.08}
              className={`md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-gray-300"} ${
                i === whyRnowPoints.length - 1 ? "md:pr-0" : ""
              }`}
            >
              <h3 className="text-lg font-bold leading-snug text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {point.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
