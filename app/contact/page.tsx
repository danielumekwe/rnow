import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RNOW Industrial Supply for sales, sourcing and technical support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Contact" }]}
        eyebrow="GET IN TOUCH"
        title="Talk to the RNOW Team"
        description="Whether you need a quote, technical support or help finding a product, our team is ready to help. Reach out using the details below and we'll route your request to the right specialist."
        image={siteImages.industriesPage.hero}
        imageAlt="RNOW technicians at an industrial facility"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Corporate Office
              </h2>
              <ul className="mt-6 space-y-5 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-accent">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Looking for a branch near you?{" "}
                <Link href="/location" className="font-semibold text-accent hover:text-accent-dark">
                  View our locations
                </Link>
                .
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                What Can We Help With?
              </h2>
              <ul className="mt-6 space-y-4 text-base text-gray-700">
                <li className="border-b border-gray-200 pb-4">
                  <span className="font-semibold text-ink">Sales &amp; Quotes</span>
                  <p className="mt-1 text-gray-600">
                    Request pricing or availability on products and services.
                  </p>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="font-semibold text-ink">Technical Support</span>
                  <p className="mt-1 text-gray-600">
                    Get help specifying products or resolving a technical issue.
                  </p>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="font-semibold text-ink">Supplier &amp; Partnership Inquiries</span>
                  <p className="mt-1 text-gray-600">
                    Reach our procurement team about becoming a supplier.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-ink">General Inquiries</span>
                  <p className="mt-1 text-gray-600">
                    Email us directly and our team will route your message.
                  </p>
                </li>
              </ul>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                Email {siteConfig.contact.email}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
