import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/data/industries";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`#industries`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-ink"
    >
      <Image
        src={industry.image}
        alt={`${industry.name} — ${industry.description}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-300 group-hover:from-ink/95" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {industry.name}
          </h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-gray-200 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-20 group-hover:opacity-100">
          {industry.description}
        </p>
      </div>
    </Link>
  );
}
