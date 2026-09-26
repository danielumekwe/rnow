import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Request an RNOW Industrial Supply ecommerce account.",
};

export default function CreateAccountPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Create Account" }]}
        eyebrow="YOUR SUPPLY CHAIN, SIMPLIFIED"
        title="Request an RNOW Ecommerce Account"
        image={siteImages.industriesPage.hero}
        imageAlt="RNOW ecommerce platform"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-6 xl:px-10">
          <AnimatedSection>
            <div className="border border-gray-200 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-ink">New Account Request</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                RNOW ecommerce accounts are set up by our account team so we
                can configure your pricing, product catalog and approved
                users correctly from day one. Email us with your company
                name and billing details and a representative will follow
                up to complete your account setup.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Already have an account?{" "}
                <Link href="/sign-in" className="font-semibold text-accent hover:text-accent-dark">
                  Sign in here
                </Link>
                .
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=New%20Ecommerce%20Account%20Request`}
                className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                Request Account Setup
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
