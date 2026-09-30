import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function OnshoreShopping() {
  return (
    <section className="bg-[#0b6b66] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Convenience of shopping from any device
            </h2>
            <h3 className="mt-2 text-base font-bold sm:text-lg">
              Sign in for an experience that was made for you.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              RNOW&apos;s online store personalizes your shopping experience with
              advanced search capabilities, stress-free easy checkout and
              approval hierarchies to make procurement management simple.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              Choose how you want to shop – online, through our mobile app, or
              in-store. With our eCommerce mobile app, it&apos;s easy to restock
              your inventory quickly and conveniently. Available for both iOS
              and Android devices.
            </p>
            <Link
              href="/products-and-services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              See what RNOW&apos;s online store can do for you
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src={siteImages.onshoreDrillingPage.devices}
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
