import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function OnshoreDifference() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[4/3] w-full bg-white">
              <Image
                src={siteImages.onshoreDrillingPage.products}
                alt="Blowout preventer and drilling products"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              The right products make all the difference
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              Drilling for oil is a process that requires the use of specialized
              equipment and products. Using the wrong products can result in
              inefficient drilling and costly repairs. That&apos;s why RNOW is
              your source of a wide range of products that are designed for oil
              drilling. From drill string products to thread compounds, we have
              the products you need to get the job done right. Contact us today
              to learn more about our oil drilling rig products.
            </p>
            <Link
              href="/products-and-services/drilling-completions"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              See what RNOW offers for Drilling and Completions
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
