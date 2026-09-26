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
    <section id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-4 max-w-md text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
              A broad range of quality products — including essential PVF,
              MRO items, pumps and engineered process and production
              equipment.
            </h2>
            <Link
              href="/products-and-services"
              className="group mt-7 inline-flex items-center gap-1 text-base font-bold text-accent"
            >
              Explore Products
              <ChevronRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="grid grid-cols-2 gap-0.5">
            {productTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <Link
                  key={tile.title}
                  href={tile.href}
                  className={`group relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-6 text-white transition-transform duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 ${toneClasses[tile.tone]}`}
                >
                  <Icon
                    className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold leading-snug sm:text-xl">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
