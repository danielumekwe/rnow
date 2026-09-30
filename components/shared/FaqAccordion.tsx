"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/aboutFaqs";
import AnimatedSection from "@/components/AnimatedSection";

export default function FaqAccordion({
  faqs,
  title = "FAQs",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">{title}</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 py-4 text-left text-sm transition-colors hover:text-accent sm:text-base ${
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
                  <p className="pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
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
