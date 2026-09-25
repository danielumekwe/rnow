import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { siteConfig } from "@/data/site";

const regionalPages = [
  { label: "Canada", href: "#" },
  { label: "Norway", href: "#" },
];

export default function LocationsHeader() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-8 xl:px-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="text-accent" aria-label="Home">
          <Home className="h-4 w-4" aria-hidden="true" />
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span className="font-medium text-gray-500">Our Locations</span>
      </nav>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Our Locations
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold text-ink">Corporate Office</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            {siteConfig.contact.address.line1}
            <br />
            {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
            {siteConfig.contact.address.zip} {siteConfig.contact.address.country === "United States" ? "USA" : siteConfig.contact.address.country}
          </p>
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="mt-3 inline-block border-b-2 border-accent text-base font-semibold text-ink"
          >
            {siteConfig.contact.phone}
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-ink">Regional Pages</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Need assistance finding a product or service specific to your
            region?
          </p>
          <ul className="mt-4 space-y-2">
            {regionalPages.map((region) => (
              <li key={region.label}>
                <Link
                  href={region.href}
                  className="group inline-flex items-center gap-2 text-lg font-semibold text-accent"
                >
                  {region.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
