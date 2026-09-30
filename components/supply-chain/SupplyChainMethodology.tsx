import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { supplyChainSteps } from "@/data/supplyChain";
import { siteImages } from "@/lib/images";

export default function SupplyChainMethodology() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Methodology: Our Approach to Supply Chain Excellence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              Our approach pivots around you. We meticulously assess your unique
              needs, sculpting solutions that don&apos;t just meet but often
              exceed your objectives. We employ a proven methodology, aiming for
              perfection every step of the way.
            </p>
            <div className="relative mt-8 aspect-[4/5] w-full max-w-md">
              <Image
                src={siteImages.supplyChainPage.methodology}
                alt="RNOW team reviewing a supply chain plan"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <ol className="space-y-7">
              {supplyChainSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-100 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
