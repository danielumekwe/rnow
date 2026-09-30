import AnimatedSection from "@/components/AnimatedSection";

export default function IndustrialSuppliesIntro() {
  return (
    <section className="bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Powering Operations with Premier Industrial Supplies
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            From the warehouse to the production line, RNOW industrial and
            facility supplies designed to optimize, protect and enhance your
            operations. Discover our diverse product line today and witness how
            we bring quality, efficiency and safety to the forefront.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
