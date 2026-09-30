import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { paintSections } from "@/data/paints";

const columnClass = {
  1: "",
  2: "sm:columns-2",
  3: "sm:columns-2 lg:columns-3",
} as const;

export default function PaintsProducts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        {paintSections.map((section, i) => (
          <div
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 py-14 sm:py-16 ${i > 0 ? "border-t border-gray-200" : ""}`}
          >
            <AnimatedSection>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-2xl font-normal text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {section.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-700">Our inventory includes:</p>
                  <ul className={`mt-2 list-disc gap-x-8 space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink ${columnClass[section.columns]}`}>
                    {section.items.map((item) => (
                      <li key={item} className="break-inside-avoid">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-normal text-ink sm:text-xl">
                  A Selection of Supplier and Manufacturer Partnerships
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                  {section.partners.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </section>
  );
}
