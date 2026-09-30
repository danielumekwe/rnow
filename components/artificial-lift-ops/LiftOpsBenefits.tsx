import AnimatedSection from "@/components/AnimatedSection";
import { liftBenefits } from "@/data/artificialLiftOps";

export default function LiftOpsBenefits() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Our artificial lift solutions can help improve your well
            productivity
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            The most common issue with wells is low productivity. This is often
            due to a lack of artificial lift. Our artificial lift solutions can
            help you improve your well site productivity and improve your bottom
            line. Contact our experienced team to learn more about our product
            offerings, local pump shops and services available.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {liftBenefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.06}>
              <article className="h-full border-t-2 border-ink bg-white p-6 shadow-lg sm:p-8">
                <h3 className="border-b border-gray-200 pb-4 text-sm font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {b.text}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
