import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryExpertise } from "@/data/industryExpertise";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesExpertise() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Industrial Expertise in a Range of Industries
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Our comprehensive knowledge of various applications allows us to
            offer you the best and most appropriate products, services, and
            solutions you can effectively and efficiently use for your
            market. We understand alternative energy, oil and gas, mining,
            energy transition, chemical processing, water and wastewater
            treatments and more &ndash; find out more today!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryExpertise.map((card) => (
            <div key={card.id} id={card.id} className="flex flex-col scroll-mt-28 bg-white p-7">
              <h3 className="text-xl font-bold leading-snug text-ink">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                {card.description}
              </p>
              {card.linkLabel && card.href && (
                <Link
                  href={card.href}
                  className="group mt-5 inline-flex items-start gap-2 text-sm font-semibold text-accent"
                >
                  {card.linkLabel}
                  <ArrowRight
                    className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
