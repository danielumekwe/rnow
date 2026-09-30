import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { utilityProducts } from "@/data/utilities";

export default function UtilitiesProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Our Utilities and Gas Distribution Product Offerings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            If you&apos;re in the business of downstream industrial operations,
            then you know how important it is to have access to a wide range of
            high-quality products. That&apos;s where RNOW comes in – our gas
            distribution product offerings are truly expansive. Whether you&apos;re
            in need of wear parts, safety products, process equipment, or
            facility supplies, we&apos;ve got you covered. Plus, all of our
            products are made with durability and reliability in mind, so you
            can trust that they&apos;ll perform well for years to come. So if you
            want to ensure that your downstream industrial operation is equipped
            with the best possible products, look no further than RNOW.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {utilityProducts.map((p, i) => (
            <AnimatedSection key={p.title} delay={(i % 3) * 0.05}>
              <article className="flex h-full flex-col border-t-2 border-accent-dark bg-white p-6 shadow-md">
                <h3 className="text-xl font-normal leading-snug text-ink-700">
                  {p.title}
                </h3>
                <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
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
