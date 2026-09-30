import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { onshoreProducts } from "@/data/onshoreDrilling";
import { siteImages } from "@/lib/images";

export default function OffshoreRigs() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Offshore Oilfield Drilling Rigs
          </h2>
          <h3 className="mt-2 text-base font-bold text-ink sm:text-lg">
            We are the industry&apos;s comprehensive resource for product and
            service solutions
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            At RNOW, we understand that downtime due to a shortage of materials
            is not an option for our clients. However, the offshore oil and gas
            industry uses fixed and floating platforms for drilling and
            exploration, making each operation unique. That&apos;s why we have a
            global supply chain of high-quality OEM drilling equipment, which
            can be used by rigs to avoid such downtime. We work with you to
            utilize our supply chain locations, regional warehouses, and
            superior customer service ensuring that your operation has the
            materials it needs to run smoothly and efficiently.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="relative mx-auto mt-8 aspect-[1920/682] w-full">
            <Image
              src={siteImages.offshoreDrillingPage.diagram}
              alt="Offshore rigs and vessels supplied with RNOW products: fabrication and engineering, transfer vessel, supply vessel, turbine installation jack-up vessel, drill ship, semi-submersible rig and jack-up drilling rig"
              fill
              sizes="(min-width: 1400px) 1300px, 100vw"
              className="object-contain"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <h2 className="text-xl font-normal text-ink sm:text-2xl">
            Oilfield drilling rig product for drilling oil and gas
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Offshore drilling rigs must be able to create working conditions
            similar to those onshore. Several systems, tools and types of
            equipment are required for the efficiency of large-scale offshore
            field extraction jobs. Our product portfolio includes:
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
