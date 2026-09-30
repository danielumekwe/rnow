import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { instrumentationSections } from "@/data/instrumentation";

export default function InstrumentationProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Product Description
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            What sets RNOW apart is our focus on quality and accuracy. We have a
            comprehensive line of field-proven devices that deliver precise
            readings and reliable performance. Whether you need to monitor
            custody transfer, check stations, control loops, batching, or any
            other process, you can trust us to carry the devices to give you the
            data you need to optimize your operations, increase your
            profitability, and ensure your safety.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-16 sm:space-y-20">
          {instrumentationSections.map((section) => (
            <AnimatedSection key={section.title}>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="text-xl font-normal text-ink sm:text-2xl">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {section.description}
                  </p>
                  <ul
                    className={`mt-4 list-disc gap-x-8 space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink ${
                      section.image ? "sm:columns-2" : "sm:columns-2 lg:columns-2"
                    }`}
                  >
                    {section.items.map((item) => (
                      <li key={item} className="break-inside-avoid">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={section.linkHref}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {section.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>

                {section.image && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
