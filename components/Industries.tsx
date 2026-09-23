"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { industries } from "@/data/industries";
import Eyebrow from "@/components/Eyebrow";
import IndustryCarouselCard from "@/components/IndustryCarouselCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    updateEdges();
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const cardWidth = card ? card.clientWidth + 20 : 340;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <section id="industries" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <Eyebrow>Industries</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
            Experts across every sector, we help you plan and supply your
            operations with precision.
          </h2>
        </AnimatedSection>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {industries.map((industry) => (
              <IndustryCarouselCard key={industry.slug} industry={industry} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous industry"
            className="absolute left-0 top-[35%] hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-ink shadow-md transition-opacity duration-200 hover:bg-gray-50 disabled:opacity-30 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next industry"
            className="absolute right-0 top-[35%] hidden h-11 w-11 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-gray-200 bg-white text-ink shadow-md transition-opacity duration-200 hover:bg-gray-50 disabled:opacity-30 sm:flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
