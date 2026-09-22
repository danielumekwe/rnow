import Image from "next/image";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/data/site";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink text-white sm:min-h-[92vh]">
      <Image
        src={siteImages.hero}
        alt="Industrial welder at work, sparks flying in a fabrication facility"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40 sm:pb-24 sm:pt-48 xl:px-10">
        <AnimatedSection>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent-light">
            {siteConfig.shortName} Industrial Supply
          </p>
          <h1 className="max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Industrial Supply.
            <br />
            Built Around Your Operation.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            {siteConfig.description.split(".")[0]}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#products" variant="primary">
              Explore Products
            </Button>
            <Button href="#contact" variant="ghost-light">
              Talk to Us
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
