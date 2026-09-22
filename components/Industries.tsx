import { industries } from "@/data/industries";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <SectionHeading
          eyebrow="Industries"
          title="Supporting Industry, Wherever It Operates"
          description="RNOW Industrial Supply works across a range of demanding sectors, sourcing products suited to the environments our customers operate in."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.slug} delay={(i % 3) * 0.08}>
              <IndustryCard industry={industry} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
