import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";

export default function ProductCategoryCard({
  product,
}: {
  product: ProductCategory;
}) {
  return (
    <Link href="#products" className="group flex flex-col">
      <div className="relative aspect-[6/5] overflow-hidden rounded-sm bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        </div>
        <ArrowRight
          className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
