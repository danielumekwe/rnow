import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function UtilitiesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.utilitiesPage.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-20 xl:px-10">
        <AnimatedSection>
          <div className="max-w-xl bg-ink/85 p-6 sm:p-8">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Downstream Pipeline and Gas Distribution Utilities
            </h1>
            <h2 className="mt-3 text-base font-bold tracking-wide sm:text-lg">
              Elevating Downstream Operations with RNOW&apos;s Expert Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100">
              At RNOW, we specialize in delivering top-tier products and
              solutions tailored specifically for the downstream gas utility
              industry. Our mission is to provide high-quality products that
              meet industry specifications and align with our customers&apos;
              daily needs and requirements.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
