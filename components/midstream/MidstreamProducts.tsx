import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { midstreamProducts } from "@/data/midstream";

export default function MidstreamProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Midstream Sector Products Portfolio
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            At RNOW, we are more than just a product provider; we&apos;re your
            trusted partner in ensuring optimized midstream operations. Our
            portfolio showcases globally recognized PVF solutions, cutting-edge
            industrial pumps and bespoke turnkey packages tailored to your needs.
            Dive deep into our product range and discover the RNOW difference.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {midstreamProducts.map((p, i) => (
            <AnimatedSection key={p.title} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col bg-surface p-5 shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className={p.fit}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {p.description}
                </p>
                <Link
                  href={p.linkHref}
                  className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-accent sm:text-sm"
                >
                  {p.linkLabel}
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
