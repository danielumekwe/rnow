import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Supplier Portal",
  description: "Information for current and prospective RNOW Industrial Supply suppliers.",
};

const steps = [
  {
    title: "Submit Your Information",
    description:
      "Email our procurement team with your company profile, product lines and relevant certifications.",
  },
  {
    title: "Initial Review",
    description:
      "Our sourcing team reviews your submission against our current category needs and supplier standards.",
  },
  {
    title: "Onboarding",
    description:
      "Approved suppliers are onboarded with the documentation and account setup needed to do business with RNOW.",
  },
];

export default function SupplierPortalPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Supplier Portal" }]}
        eyebrow="SUPPLIER RELATIONS"
        title="RNOW Supplier Portal"
        description="RNOW partners with a network of trusted suppliers to keep our branches stocked with quality products. If your company is interested in supplying RNOW, here's how to get started."
        image={siteImages.industriesPage.hero}
        imageAlt="RNOW warehouse and distribution operations"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Becoming an RNOW Supplier
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="border border-gray-200 p-7">
                <p className="text-sm font-bold text-accent">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.16} className="mt-10">
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Supplier%20Inquiry`}
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              Contact Our Procurement Team
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
