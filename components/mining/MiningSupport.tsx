import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { fieldServices, supportGroups } from "@/data/mining";
import { siteImages } from "@/lib/images";

export default function MiningSupport() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] space-y-14 px-6 xl:px-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Additional Support &amp; Supply Chain Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW offers a comprehensive suite of services to boost efficiency,
              reduce downtime and optimize procurement for any type of mining
              operation.
            </p>
            <h3 className="mt-5 text-lg font-bold text-ink">Key Service Areas</h3>
            <ul className="mt-2 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {supportGroups.map((g) => (
                <li key={g.title}>
                  <p className="font-semibold text-ink">{g.title}</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 marker:text-ink">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[1249/651] w-full bg-white">
              <Image
                src={siteImages.miningPage.supplyModel}
                alt="RNOW mining supply chain model"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Field &amp; Shop Service Capabilities
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 marker:text-ink sm:text-base">
            {fieldServices.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
