import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesBenefits() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Benefits of RNOW for Industry Applications
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Our solutions have proven to be a game-changer for many
              industries, providing benefits beyond cost savings. With RNOW,
              you can streamline your operations and supply chain processes
              more efficiently. These solutions have been designed to cater
              to various industries, including oil and gas, power generation
              and utilities. Using RNOW, you can free up your resources and
              dedicate them to more pressing tasks, increasing productivity
              and profitability. Our versatility and ease of use make them
              popular among markets and sectors. Whether you&apos;re a small
              or a large corporation, RNOW is the perfect tool to enhance
              your operations and drive growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.industriesPage.benefits}
                alt="RNOW technicians servicing equipment at an industrial facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
