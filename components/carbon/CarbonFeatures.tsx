import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { carbonFeatures } from "@/data/carbon";

export default function CarbonFeatures() {
  return (
    <>
      {carbonFeatures.map((f, i) => {
        const tinted = i % 2 === 0;
        return (
          <section key={f.title} className={`py-16 sm:py-20 ${tinted ? "bg-gray-100" : "bg-white"}`}>
            <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <AnimatedSection>
                  <p className="text-xs font-bold tracking-widest text-gray-500">
                    {f.eyebrow.toUpperCase()}
                  </p>
                  <h2 className="mt-3 text-2xl font-normal text-ink sm:text-3xl">
                    {f.title}
                  </h2>
                  {f.paragraphs.map((p) => (
                    <p key={p} className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {p}
                    </p>
                  ))}
                  {f.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 marker:text-ink sm:text-base">
                      {f.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={f.linkHref}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {f.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </AnimatedSection>

                <AnimatedSection delay={0.08}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={f.image}
                      alt={f.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
