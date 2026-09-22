import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export default function Intro() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <AnimatedSection className="lg:col-span-7">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
              Keeping Industry Moving
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-gray-600">
              RNOW Industrial Supply helps businesses source the products and
              industrial supplies they need to keep projects, facilities and
              operations moving. From everyday MRO items to specialized
              industrial products, our team works to make sourcing simpler
              for demanding operations.
            </p>
            <div className="mt-8">
              <Button href="#about" variant="ghost-dark">
                Learn More About RNOW
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
