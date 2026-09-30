import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { pumpProducts } from "@/data/pumps";

export default function PumpsProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Industry-Leading Pump Products and Services for Superior Flow Management
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Pump products are incredibly versatile and can resolve several
            issues related to the transportation and movement of fluids. We have
            various sizes and types of pumping products, each offering specific
            benefits and features that cater to multiple requirements. RNOW pump
            services are also available for all pumps and equipment, ensuring
            your pumps remain in prime condition. With this kind of support,
            individuals can have peace of mind knowing that their pump products
            will operate reliably and efficiently. Whether it&apos;s for
            municipal or industrial use, pumps from RNOW can make a significant
            difference in enhancing your fluid movement process.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pumpProducts.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 4) * 0.05}>
              <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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
