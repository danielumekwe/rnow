"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { miningSectors } from "@/data/mining";

export default function MiningSectors() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Mining Sectors &amp; Applications We Serve
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW supports a wide range of mining operations with tailored
            product packages, technical services and logistics expertise. From
            the world&apos;s largest trona deposits in Wyoming to lithium brine
            fields in Nevada and rare-earth extraction in Australia, RNOW is
            your trusted industrial supply partner across every major mineral
            sector. Explore how we support each mining application with proven
            solutions designed for safety, efficiency and uptime.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
          {miningSectors.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={s.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 py-4 text-left text-base font-medium transition-colors hover:text-accent sm:text-lg ${
                    isOpen ? "text-accent" : "text-ink"
                  }`}
                >
                  {s.title}
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-accent" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {s.text}
                  </p>
                )}
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
