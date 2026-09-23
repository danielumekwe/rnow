import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";

export default function IndustryCarouselCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href="#industries"
      className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-sm border border-gray-200 bg-white sm:w-[360px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={industry.image}
          alt={industry.headline}
          fill
          sizes="(min-width: 640px) 360px, 300px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-gray-500">{industry.name}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-ink">
          {industry.headline}
        </h3>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-accent">
          {industry.ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
