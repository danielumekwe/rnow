import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RNOW Industrial Supply privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 xl:px-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: 2026</p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-ink">Information We Collect</h2>
            <p className="mt-3">
              When you interact with our website — including submitting a
              contact form, requesting a quote, or creating an ecommerce
              account — we may collect information such as your name,
              company, email address, phone number and the details of your
              inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">How We Use Information</h2>
            <p className="mt-3">
              We use the information you provide to respond to inquiries,
              process orders, manage accounts and improve our products and
              services. We do not sell your personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Cookies &amp; Analytics</h2>
            <p className="mt-3">
              Our website may use cookies and similar technologies to
              understand how visitors use our site and to improve the
              browsing experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect the information you
              share with us, but no method of transmission over the internet
              is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Contact Us</h2>
            <p className="mt-3">
              If you have questions about this privacy policy, contact us at{" "}
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
