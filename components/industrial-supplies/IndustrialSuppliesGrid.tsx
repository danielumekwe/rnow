import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { industrialSupplyProducts } from "@/data/industrialSupplies";

export default function IndustrialSuppliesGrid() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Explore Product Offerings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our curated inventory boasts everything from premium adhesives and
            advanced electrical products to elite safety equipment and precision
            tools. Discover our vast selection, featuring oilfield solutions,
            essential office supplies, efficient material handling and much
            more. Prioritize workplace safety with our top-tier PPE or find
            robust hardware for maintenance tasks. With RNOW, you&apos;re
            choosing unparalleled quality and durability. Explore our product
            offerings now and elevate your operations.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industrialSupplyProducts.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 4) * 0.05}>
              <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
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
