import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function SupplyChainHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:py-20 xl:px-10">
        <AnimatedSection>
          <h1 className="max-w-4xl text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Supply Chain Material Management: The Key to Business Efficiency
          </h1>
          <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
            Streamlining Your Business with RNOW
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base">
            At RNOW, we&apos;re not just about offering services; we&apos;re
            about delivering solutions. Our focus on creating seamless workflows,
            effective inventory management and planning operations that cut
            through complexity in terms of expertise and our global network,
            empowers us to provide unmatched supply chain solutions. It&apos;s
            our mission to supercharge your productivity, driving tangible growth
            for your business.
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
