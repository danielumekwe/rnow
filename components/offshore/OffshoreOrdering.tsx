import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function OffshoreOrdering() {
  return (
    <section className="bg-[#0b6b66] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Online streamlined ordering process and order tracking
            </h2>
            <h3 className="mt-2 text-base font-bold sm:text-lg">
              Get what you need, just how you need to get it and when you need it
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              At RNOW, we pride ourselves on providing on-demand products,
              expertise and service. Our global eCatalog system gives you easy
              access to our product catalog, customer service and streamlined
              order. Our unique database or e-commerce system makes it easy for
              rig operators to keep track of their inventory and minimize
              downtime and operating costs.
            </p>
            <Link
              href="/products-and-services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              Learn about RNOW&apos;s online store capabilities
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src={siteImages.offshoreDrillingPage.devices}
                alt="RNOW online store on desktop, tablet and mobile"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
