import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { liftTechnologies } from "@/data/artificialLiftOps";

export default function LiftOpsTechnologies() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            An overview of the different types of artificial lift technologies
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Artificial lift technologies are useful for recovering oil and gas
            from reservoirs that would otherwise be too expensive or difficult
            to tap using traditional methods. There are many different types of
            artificial lift technologies, each with its own advantages and
            disadvantages. Click on the product links below to learn more about
            their features and capabilities.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {liftTechnologies.map((t, i) => (
            <AnimatedSection key={t.title} delay={(i % 3) * 0.06}>
              <article className="bg-surface p-5 sm:p-6">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
                  {t.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {t.text}
                </p>
                <Link
                  href={t.linkHref}
                  className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-accent sm:text-sm"
                >
                  {t.linkLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
