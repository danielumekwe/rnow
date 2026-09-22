import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Logo from "@/components/Logo";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="mx-auto max-w-[1400px] px-6 py-20 xl:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                aria-label="RNOW on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="RNOW on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.x}
                aria-label="RNOW on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:gap-8">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-gray-500 sm:flex-row xl:px-10">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
