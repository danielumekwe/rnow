import { Phone } from "lucide-react";
import { topBarLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-ink text-gray-300 lg:block">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-xs xl:px-10">
        <ul className="flex items-center gap-6">
          {topBarLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="tracking-wide transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`tel:${siteConfig.contact.phoneHref}`}
          className="flex items-center gap-2 tracking-wide transition-colors hover:text-white"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.contact.phone}
        </a>
      </div>
    </div>
  );
}
