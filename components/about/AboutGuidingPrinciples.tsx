import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const principles = [
  {
    title: "Integrity",
    description: "We hold ourselves to the highest ethical standards in all that we do.",
  },
  {
    title: "Safety",
    description:
      "We act with the highest priority on health and safety in our workplace and communities.",
  },
  {
    title: "Teamwork",
    description:
      "We collaborate with our suppliers, customers and one another to optimize the sum of all individual efforts while being active participants in the communities where we live and work.",
  },
  {
    title: "Excellence",
    description:
      "We are passionate about being the best in the industry, making our customers a priority one, and creating long-term value for our stakeholders.",
  },
];

export default function AboutGuidingPrinciples() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative min-h-[600px]">
        <Image
          src={siteImages.aboutOverview.guidingPrinciples}
          alt="RNOW field technicians working together at an industrial facility"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-20 xl:px-10">
          <AnimatedSection className="max-w-lg">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Guiding Principles
            </h2>

            <div className="mt-8 space-y-7">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-xl font-semibold text-amber-300">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-gray-100">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
