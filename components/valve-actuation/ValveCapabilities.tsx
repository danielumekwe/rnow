"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { valveCapabilities } from "@/data/valveActuation";
import { siteImages } from "@/lib/images";

const slides = siteImages.valveActuationPage.carousel;

export default function ValveCapabilities() {
  const [index, setIndex] = useState(0);
  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              RNOW Valves &amp; Actuation offers a combination of 3 core
              capabilities.
            </h2>
            <div className="mt-4 space-y-5">
              {valveCapabilities.map((c) => (
                <div key={c.title}>
                  <h3 className="text-base font-bold text-ink sm:text-lg">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-video w-full overflow-hidden bg-white shadow-md">
              {slides.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Valve service project ${i + 1} of ${slides.length}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover transition-opacity duration-300 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== index}
                />
              ))}
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-ink shadow hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-ink shadow hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-ink" : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
