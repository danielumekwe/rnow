import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";
import Eyebrow from "@/components/Eyebrow";

export default function FeaturedProduct() {
  return (
    <section id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src={siteImages.featured}
              alt="RNOW field crew transporting a coiled line pipe reel to an upstream jobsite"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Eyebrow>Featured Product</Eyebrow>
            <h2 className="mt-4 text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
              RNOW Industrial Supply sources coiled line pipe for demanding
              upstream applications.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Coiled line pipe offers an efficient alternative to
              conventional pipe by removing critical path items, reducing
              installation time and lowering crew costs across a range of
              upstream applications.
            </p>
            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-base font-bold text-accent"
            >
              Explore Coiled Line Pipe Solutions
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
