import Image from "next/image";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/data/site";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative h-[440px] sm:h-[540px] lg:h-[620px] xl:h-[680px]">
        <Image
          src={siteImages.hero}
          alt="RNOW field technicians torquing a flanged connection at an industrial facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-6 pb-10 sm:pb-14 xl:px-10">
            <AnimatedSection>
              <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                Industrial Supply. Built Around Your Operation.
              </h1>
              <div className="mt-5 h-[3px] w-full max-w-3xl bg-accent" aria-hidden="true" />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-100 sm:text-lg">
                {siteConfig.description.split(".")[0]}.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/products-and-services" variant="primary" showArrow={false}>
                  Explore Products
                </Button>
                <Button href="/contact" variant="ghost-light" showArrow={false}>
                  Talk to Us
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
