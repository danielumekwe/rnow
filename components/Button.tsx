import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost-light" | "ghost-dark";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:outline-accent",
  secondary:
    "bg-ink text-white hover:bg-ink-700 focus-visible:outline-accent",
  "ghost-light":
    "border border-white/40 text-white hover:bg-white hover:text-ink focus-visible:outline-white",
  "ghost-dark":
    "border border-ink/20 text-ink hover:bg-ink hover:text-white focus-visible:outline-accent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
