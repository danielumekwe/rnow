import AnimatedSection from "@/components/AnimatedSection";
import { toolGroups } from "@/data/tools";

export default function ToolsLists() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Premium Tools from Top Manufacturers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            You deserve nothing but the best; at RNOW, that&apos;s precisely what
            we deliver. Our tools aren&apos;t just high-performing; they&apos;re
            curated from the industry&apos;s leading manufacturers, ensuring
            durability, efficiency and precision every time.
          </p>
        </AnimatedSection>

        <div className="mt-8 space-y-10">
          {toolGroups.map((group) => (
            <AnimatedSection key={group.title}>
              <h3 className="text-xl font-normal text-ink sm:text-2xl">
                {group.title}
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                {group.columns.map((col, i) => (
                  <ul
                    key={i}
                    className="list-disc space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink"
                  >
                    {col.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
