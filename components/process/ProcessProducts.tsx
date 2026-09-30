import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { processProducts } from "@/data/process";

export default function ProcessProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Browse Products &amp; Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW offers a variety of process and production equipment, from
            separation to gathering and metering systems, backed by our
            engineering and field service teams.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processProducts.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 4) * 0.05}>
              <article className="h-full bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
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
