import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function DrillingProcurement() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Seamless Oilfield Procurement, One Click Away with RNOW!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Why wrestle with traditional ordering when you can swiftly select
              and receive top-tier oilfield equipment and consumables, right at
              your fingertips? Benefit from our platform&apos;s unique features:
              customized procurement workflows, approval hierarchy and periodic
              spend data reporting businesses that want to maximize their online
              experience, yet ensure you have the proper workflow, approvals and
              controls in place to manage your spend. Our online procurement
              solution makes searching the numerous products from many of the
              top-tier manufacturers we stock and procure with ease.
            </p>
            <Link
              href="/solutions#digital-solutions-technology"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Discover How to Unlock Streamlined Procurement Today!
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-square w-full">
              <Image
                src={siteImages.drillingPage.procurement}
                alt="RNOW online procurement platform on desktop, tablet and mobile"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
