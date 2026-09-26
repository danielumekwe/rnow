import Link from "next/link";
import { Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="text-accent" aria-label="Home">
        <Home className="h-4 w-4" aria-hidden="true" />
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true">&gt;</span>
          {item.href ? (
            <Link href={item.href} className="font-medium text-gray-500 hover:text-accent">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-500">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
