import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { drillingOfferings } from "@/data/drilling";

export default function DrillingOfferings() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Unparalleled Drilling Efficiency Solutions: Quality Products and
            Services for All Terrains Globally
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Dive into our extensive inventory of top-notch products and services
            designed to enhance your drilling efficiency across diverse
            challenges – from land-based drills to deepwater operations and even
            in high-temperature or extended-reach wells. No matter where you are
            – be it within the U.S. or any international location – our
            selection boasts trusted brands that ensure your drilling operations
            continue without a hitch. Explore our offerings and experience the
            difference in operational excellence.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,320px))]">
          {drillingOfferings.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-normal leading-snug text-ink-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
