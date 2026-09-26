import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/productCategories";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProductCategoryGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Browse Products &amp; Services by Category
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            RNOW supplies a broad range of quality products across the
            following categories, backed by technical expertise and a
            responsive distribution network.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products-and-services/${category.slug}`}
              className="group flex flex-col overflow-hidden bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.headline}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-ink">
                  {category.label}
                </h3>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-accent">
                  Explore {category.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
