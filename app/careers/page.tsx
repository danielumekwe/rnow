import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities with RNOW Industrial Supply.",
};

const categories = [
  {
    title: "Warehouse & Distribution",
    description:
      "Roles supporting our branch network, including warehouse operations, logistics and delivery.",
  },
  {
    title: "Sales & Account Management",
    description:
      "Roles building customer relationships and supporting product and sourcing needs.",
  },
  {
    title: "Engineering & Technical Services",
    description:
      "Roles supporting product application, fabrication and technical customer support.",
  },
  {
    title: "Corporate & Support",
    description:
      "Roles across finance, IT, procurement and other functions that keep RNOW running.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Careers" }]}
        eyebrow="JOIN RNOW"
        title="Build Your Career at RNOW"
        description="RNOW is built on the people who keep our branches, warehouses and customer relationships running. Explore the kinds of roles that make up our team and reach out to learn about current opportunities."
        image={siteImages.aboutOverview.guidingPrinciples}
        imageAlt="RNOW team members at an industrial facility"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Areas We Hire For
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-ink">{category.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.16} className="mt-10">
            <p className="text-base leading-relaxed text-gray-600">
              Interested in joining RNOW? Send us your resume and we&apos;ll
              reach out about current openings that match your background.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Career%20Inquiry`}
              className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              Send Us Your Resume
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
