import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your RNOW Industrial Supply ecommerce account.",
};

export default function SignInPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Sign In" }]}
        eyebrow="YOUR SUPPLY CHAIN, SIMPLIFIED"
        title="Sign In to Your RNOW Account"
        image={siteImages.industriesPage.hero}
        imageAlt="RNOW ecommerce platform"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-6 xl:px-10">
          <AnimatedSection>
            <div className="border border-gray-200 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-ink">Account Access</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Our ecommerce portal is available to registered RNOW
                customers for online ordering, inventory monitoring and
                account management. If you already have login credentials,
                access the portal through your existing bookmark or
                contact your account representative for the sign-in link.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Don&apos;t have an account yet?{" "}
                <Link href="/create-account" className="font-semibold text-accent hover:text-accent-dark">
                  Request one here
                </Link>
                .
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Ecommerce%20Account%20Access`}
                className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                Contact Us About Account Access
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
