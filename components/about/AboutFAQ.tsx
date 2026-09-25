"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { aboutFaqs } from "@/data/aboutFaqs";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">FAQs</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
          {aboutFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium transition-colors sm:text-lg ${
                    isOpen ? "text-accent" : "text-ink"
                  }`}
                >
                  {faq.question}
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-accent" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                    {faq.answer}
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
