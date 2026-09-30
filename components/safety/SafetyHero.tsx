import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function SafetyHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Safety and PPE
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Elevate Workplace Safety with Premium Protective Gear
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              When it comes to safety solutions that meet the highest safety
              standards, RNOW is your go-to partner. We pride ourselves on
              offering an extensive range of workwear, protective clothing,
              safety supplies and other top-quality personal protective
              equipment sourced from trusted manufacturers. Our dedicated
              team&apos;s expertise ensures the availability of essential safety
              gear and the necessary guidance to empower your workforce for a
              secure and efficient work environment. Safety isn&apos;t just a
              priority: it&apos;s a promise.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.safetyPage.hero}
                alt="Hard hat, gloves, safety glasses and rubber boots"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
