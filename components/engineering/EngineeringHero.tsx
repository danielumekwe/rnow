import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function EngineeringHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:py-20 xl:px-10">
        <AnimatedSection>
          <p className="text-xs font-bold tracking-widest text-gray-500">
            ENGINEERING, DESIGN &amp; FABRICATION SERVICES
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Custom Engineering, Design &amp; Fabrication Solutions
          </h1>
          <h2 className="mt-4 text-lg font-bold tracking-wide text-ink sm:text-xl">
            Custom Fabrication Solutions Built to Your Specifications
          </h2>
          <p className="mt-4 max-w-5xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Engineering, design and fabrication services help operators build
            custom process equipment, pressure vessels, modular systems and
            production infrastructure tailored to specific operational
            requirements. RNOW provides end-to-end engineering, fabrication,
            assembly, testing and project execution services for oil and gas,
            industrial, infrastructure and energy applications.
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-relaxed text-gray-600 sm:text-base">
            From concept development and detailed engineering through
            fabrication, quality testing and delivery, our teams help solve
            complex production challenges with equipment designed for long-term
            reliability, operational efficiency and field performance.
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
