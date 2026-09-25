import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "We care.",
    description:
      "We act with compassion and honesty in all that we do. We respect one another, our customers, and our communities.",
  },
  {
    title: "We do what it takes.",
    description:
      "We approach every task with energy and passion to ensure the job is done correctly. We continuously challenge ourselves to provide our stakeholders with the highest level of service.",
  },
  {
    title: "We are accountable.",
    description:
      "We take pride in our work and are responsible for our actions and the outcomes produced.",
  },
];

export default function AboutCoreValues() {
  return (
    <section className="relative overflow-hidden bg-white text-ink">
      <div className="relative min-h-[600px]">
        <Image
          src={siteImages.aboutOverview.coreValues}
          alt="RNOW technicians standing at an industrial facility"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-20 xl:px-10">
          <AnimatedSection className="max-w-lg">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Core Values
            </h2>

            <div className="mt-8 space-y-7">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="text-xl font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-gray-600">
                    {value.description}
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
