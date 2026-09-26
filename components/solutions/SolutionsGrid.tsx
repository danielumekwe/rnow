import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionsGrid } from "@/data/solutionsGrid";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionsGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Revolutionize Your Industry with RNOW&apos;s Cutting-Edge
            Solutions
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Unlock the full potential of your operation with RNOW&apos;s
            comprehensive range of products, supply chain expertise,
            engineering and fabrication solutions, safety services and more!
            Say goodbye to the challenges of industry management &mdash; let
            RNOW lend a helping hand. We will collaborate to ensure your every
            need is met, empowering you to minimize expenses and maximize
            efficiency.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsGrid.map((card) => (
            <div key={card.title} id={card.href.slice(1)} className="flex flex-col scroll-mt-28 bg-white p-7">
              <h3 className="text-xl font-bold leading-snug text-ink">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                {card.description}
              </p>
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
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
