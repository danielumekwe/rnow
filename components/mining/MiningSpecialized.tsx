import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { specializedCards } from "@/data/mining";

export default function MiningSpecialized() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Specialized Mining Solutions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our affiliated brands and specialist teams bring focused expertise,
            aligned with the evolving needs of modern mining operations.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {specializedCards.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.06}>
              <article className="flex h-full flex-col bg-surface p-5 shadow-sm">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{c.text}</p>
                <Link
                  href={c.href}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Learn More
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
