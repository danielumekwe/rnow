import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "RNOW Affiliated Brands",
  description:
    "RNOW's portfolio of affiliated brands brings specialized expertise across the energy and industrial sectors.",
};

const brandAreas = [
  {
    title: "Pipe, Valves & Fittings",
    description:
      "Specialized distribution brands focused on stocking and delivering PVF products for upstream, midstream and downstream operations.",
  },
  {
    title: "Pumps & Production Equipment",
    description:
      "Brands dedicated to pump packages, production equipment and the technical support needed to keep rotating equipment running.",
  },
  {
    title: "Electrical & Instrumentation",
    description:
      "Affiliated brands supplying electrical products, instrumentation and controls for hazardous and industrial environments.",
  },
  {
    title: "Tools, Safety & MRO",
    description:
      "Brands supporting everyday operations with tools, safety equipment and MRO consumables for facilities and field crews.",
  },
];

export default function AboutBrandsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "About Us", href: "/about" }, { label: "Affiliated Brands" }]}
        eyebrow="ABOUT RNOW"
        title="RNOW Affiliated Brands"
        description="At RNOW, we pride ourselves on our diverse portfolio of affiliated brands, each contributing unique expertise and product offerings to enrich our comprehensive solutions across the energy and industrial sectors."
        image={siteImages.aboutOverview.brands}
        imageAlt="RNOW representatives shaking hands in front of an industrial facility"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              A Portfolio Built for Every Part of Your Operation
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              These brands have been carefully selected and integrated into
              the RNOW family, ensuring that we continually provide our
              customers with the highest quality products and services.
              Spanning a wide range of specialized areas within the energy
              and industrial sectors, our affiliated brands amplify our
              reach, capabilities and commitment to excellence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {brandAreas.map((area) => (
              <div key={area.title} className="border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-ink">{area.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA label="Ask us about our affiliated brands and product coverage" />
    </>
  );
}
