import Image from "next/image";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function FeaturedProduct() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[600px]">
          <Image
            src={siteImages.featured}
            alt="Rows of stocked industrial inventory in a supply warehouse"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-ink px-6 py-20 sm:px-12 lg:px-16 lg:py-0">
          <AnimatedSection className="max-w-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent-light">
              Supply Solutions
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Industrial Products. One Reliable Source.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Rather than managing multiple vendors, customers rely on RNOW
              Industrial Supply as a single point of contact for the
              industrial products their operations depend on.
            </p>
            <div className="mt-9">
              <Button href="#products" variant="primary">
                Explore Products
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
