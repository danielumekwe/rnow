"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { serviceCapabilityTabs } from "@/data/valveActuation";

const defaultTab = serviceCapabilityTabs.findIndex((t) => t.label === "Actuation");

export default function ValveServiceTabs() {
  const [active, setActive] = useState(defaultTab);

  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Valve Service Capabilities
          </h2>

          <div className="mt-6 grid grid-cols-1 border border-gray-200 md:grid-cols-[1fr_2fr]">
            <div role="tablist" aria-orientation="vertical" className="bg-gray-100">
              {serviceCapabilityTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`block w-full border-b border-white px-4 py-3.5 text-left text-xs font-semibold transition-colors sm:text-sm ${
                    i === active
                      ? "bg-accent text-white"
                      : "text-ink hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div role="tabpanel" className="min-h-64 bg-white p-6 sm:p-8">
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 marker:text-ink">
                {serviceCapabilityTabs[active].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
