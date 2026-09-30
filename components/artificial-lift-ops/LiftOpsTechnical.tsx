import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { liftServices } from "@/data/artificialLiftOps";
import { siteImages } from "@/lib/images";

export default function LiftOpsTechnical() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Technical Services
            </h2>
            <h3 className="mt-2 text-lg font-bold text-ink sm:text-xl">
              Minimize your Lease Operating Expense (LOE)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Lease owners, operators and procurement professionals are being
              called on to deliver higher productivity with fewer resources.
              However, don&apos;t waste valuable time getting a marginal or aging
              well performing through trial and error. Our experts can get you
              up and running quickly, so you don&apos;t lose valuable time or
              profit.
            </p>
            <h3 className="mt-5 text-base font-bold text-ink sm:text-lg">
              Services Available
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 marker:text-ink">
              {liftServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.artificialLiftOpsPage.technical}
                alt="RNOW technician at a pumpjack site next to a service truck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
