import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { productTiles } from "@/data/productTiles";
import AnimatedSection from "@/components/AnimatedSection";
import Eyebrow from "@/components/Eyebrow";

const toneClasses: Record<string, string> = {
  accent: "bg-accent",
  accentDark: "bg-accent-dark",
  ink800: "bg-ink-800",
  ink: "bg-ink",
};

export default function ProductsShowcase() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16 lg:py-0">
          <AnimatedSection className="max-w-md">
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-4 text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
              A broad range of quality products — including essential PVF,
              MRO items, pumps and engineered process and production
              equipment.
            </h2>
            <Link
              href="#products"
              className="group mt-7 inline-flex items-center gap-1 text-base font-bold text-accent"
            >
              Explore Products
              <ChevronRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2">
          {productTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.title}
                href="#products"
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden p-8 text-white transition-transform duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:shadow-xl sm:min-h-[260px] ${toneClasses[tile.tone]}`}
              >
                <Icon
                  className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                    {tile.title}
                  </h3>
                  <ChevronRight
                    className="mt-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
