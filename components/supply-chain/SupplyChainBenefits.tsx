import AnimatedSection from "@/components/AnimatedSection";
import { supplyChainStats } from "@/data/supplyChain";

export default function SupplyChainBenefits() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            How RNOW Can Benefit You
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            84% of supply chain officers say the lack of visibility across the
            supply chain is one of the biggest challenges they face. What if you
            had a single solution for demand generation and comprehensive
            inventory visibility?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            At RNOW, we offer just that. We work with our customers to develop
            proprietary materials management and integrated supply chain
            solutions. Our solutions mean that you can have complete visibility
            into your inventory and demand forecasting to make better decisions
            about your supply chain operations.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            We tailor our proprietary materials management and integrated
            solutions to meet the specific needs of upstream, midstream,
            downstream and industrial companies. Using RNOW&apos;s solutions,
            customers have reduced their annual costs by millions of dollars.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {supplyChainStats.map((stat, i) => (
            <AnimatedSection key={stat.value} delay={i * 0.06}>
              <div className="h-full border-t-2 border-accent-dark bg-white p-6 text-center shadow-md">
                <p className="text-4xl font-extrabold text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold text-ink">{stat.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {stat.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
