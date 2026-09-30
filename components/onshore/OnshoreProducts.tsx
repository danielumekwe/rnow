import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { onshoreProducts } from "@/data/onshoreDrilling";
import { siteImages } from "@/lib/images";

export default function OnshoreProducts() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Typical land drilling rig oilfield products
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our vast product offerings include but are not limited to OEM
            spares, electrical cable and connectors, fluid end parts,
            lubricants, pumps, pipes, valves, valve actuators, flanges,
            fittings, and gaskets. We can provide you with scheduled and
            emergency deliveries from our energy center locations worldwide,
            stocked with many critical consumable drilling products rigs utilize
            and consume daily.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="relative mx-auto mt-8 aspect-[1782/937] w-full max-w-5xl">
            <Image
              src={siteImages.onshoreDrillingPage.rigDiagram}
              alt="Illustrated land drilling rig with key oilfield product areas highlighted"
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-contain"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <h2 className="text-xl font-normal text-ink sm:text-2xl">
            Oilfield product for drilling oil and gas
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW offers a wide range of quality land-based drilling products and
            solutions that help our customer&apos;s onshore drilling efficiency,
            whether in the U.S. or Internationally. Our drilling rig product
            portfolio is focused on optimizing your drilling operations.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 marker:text-ink sm:text-base">
            {onshoreProducts.map((p) => (
              <li key={p.label ?? p.text}>
                {p.label && p.href ? (
                  <Link href={p.href} className="font-semibold text-accent hover:text-accent-dark">
                    {p.label}
                  </Link>
                ) : null}
                {p.label ? <> – {p.text}</> : p.text}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
