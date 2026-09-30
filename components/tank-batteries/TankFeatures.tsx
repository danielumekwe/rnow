import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { tankFeatures } from "@/data/tankBatteries";

export default function TankFeatures() {
  return (
    <>
      {tankFeatures.map((f, i) => (
        <section key={f.title} className={`py-14 sm:py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
          <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection>
                <h2 className="text-xl font-normal text-ink sm:text-2xl">{f.title}</h2>
                {f.paragraphs.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {p}
                  </p>
                ))}
                {f.linkLabel && f.linkHref && (
                  <Link
                    href={f.linkHref}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {f.linkLabel}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                )}
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={f.image}
                    alt={f.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={f.fit}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
