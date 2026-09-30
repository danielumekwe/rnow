import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function SupplyChainFlow() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Efficiency Simplified with RNOW Supply Chain Solutions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            When it comes to oil and gas well production, RNOW Supply Chain
            Solutions forges partnerships ensuring you have the equipment you
            need, when you need it. From demand planning based on your forecasts
            to coordinating with product manufacturers and managing regional
            warehouses, we keep the process efficient and fluid. In essence, we
            manage the complexities so you can operate seamlessly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="relative mx-auto mt-8 aspect-square w-full max-w-3xl">
            <Image
              src={siteImages.supplyChainPage.flow}
              alt="RNOW supply chain flow from client through sourcing and managed warehouse to customer operations"
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="object-contain"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Optimizing Oil and Gas Production with RNOW Supply Chain Solutions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            See how RNOW Supply Chain Solutions enhances oil and gas production.
            Learn how strategic partnerships, inventory management and a
            streamlined approach help producers save capital and focus on what
            they do best. Ready to revolutionize your oil and gas production?
            Partner with RNOW Supply Chain Solutions today and propel your
            operations to the next level!
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
              Contact Sales
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
