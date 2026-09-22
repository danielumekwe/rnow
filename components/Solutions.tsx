import { solutions } from "@/data/solutions";
import SectionHeading from "@/components/SectionHeading";
import SolutionBlock from "@/components/SolutionBlock";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions Built Around How You Operate"
          description="Beyond individual products, RNOW Industrial Supply supports the broader sourcing and supply needs of industrial operations."
        />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {solutions.map((solution, i) => (
            <SolutionBlock
              key={solution.slug}
              solution={solution}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
