import Image from "next/image";
import type { Solution } from "@/data/solutions";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionBlock({
  solution,
  reverse = false,
}: {
  solution: Solution;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "" : ""
      }`}
    >
      <AnimatedSection
        className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={solution.image}
          alt={solution.name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1} className={reverse ? "lg:order-1" : ""}>
        <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {solution.name}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {solution.description}
        </p>
      </AnimatedSection>
    </div>
  );
}
