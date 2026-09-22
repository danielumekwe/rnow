import { productCategories } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Products() {
  return (
    <section id="products" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <SectionHeading
          eyebrow="Products & Services"
          title="Everything Your Operation Runs On"
          description="A broad catalog of industrial products, sourced and supplied through a single, reliable point of contact."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product, i) => (
            <AnimatedSection key={product.slug} delay={(i % 4) * 0.06}>
              <ProductCategoryCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
