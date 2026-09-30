import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { miningOfferings } from "@/data/mining";

export default function MiningOfferings() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            What RNOW Offers the Mining Industry
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Mining operations demand durability, performance and operational
            resilience. RNOW supplies the heavy-duty products and industrial
            infrastructure needed to meet those challenges in extreme
            environments.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {miningOfferings.map((o, i) => (
            <AnimatedSection key={o.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col border-t-2 border-accent-dark bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold leading-snug text-ink">{o.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{o.text}</p>
                <Link
                  href={o.href}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  {o.linkLabel}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
