import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "RNOW Industrial Supply website terms of use.",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 xl:px-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: 2026</p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-ink">Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing this website, you agree to be bound by these terms
              of use. If you do not agree with these terms, please do not use
              this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Use of Content</h2>
            <p className="mt-3">
              The content on this website, including text, images and
              branding, is provided for informational purposes. You may not
              reproduce, distribute or use our content for commercial
              purposes without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Product Information</h2>
            <p className="mt-3">
              Product and service information on this site is provided for
              general reference. Specifications, availability and pricing
              are subject to change and should be confirmed with an RNOW
              representative.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Limitation of Liability</h2>
            <p className="mt-3">
              RNOW is not liable for any damages arising from your use of
              this website or reliance on its content, to the fullest extent
              permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Contact Us</h2>
            <p className="mt-3">
              If you have questions about these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent hover:text-accent-dark">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
