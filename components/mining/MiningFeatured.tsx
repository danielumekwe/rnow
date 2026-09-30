import AnimatedSection from "@/components/AnimatedSection";
import { sealBullets } from "@/data/mining";

export default function MiningFeatured() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Featured Mining Technologies (Territory-Specific)
          </h2>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h3 className="text-lg font-bold text-ink sm:text-xl">
              Specialty Valves for Critical Mining Processes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW offers severe-service isolation and control valves engineered
              for abrasive slurry, corrosive brine and acid-leach circuits.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Our Green River, WY Process Solutions branch stocks the broadest
              valve inventory; specialty ranges are also supported through
              select RNOW locations in CO, MT and ND. Outside those regions we
              supply equivalent solutions through our national distribution
              network – contact us for the best fit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h3 className="text-lg font-bold text-ink sm:text-xl">
              Mechanical Seals &amp; Flush-Plan Solutions
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 marker:text-ink sm:text-base">
              {sealBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
