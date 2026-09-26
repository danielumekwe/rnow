import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type ContactCTAProps = {
  eyebrow?: string;
  label: string;
  href?: string;
};

export default function ContactCTA({
  eyebrow = "RUN STRONGER WITH RNOW",
  label,
  href = "/contact",
}: ContactCTAProps) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <div className="flex flex-col gap-4 border border-gray-200 bg-surface p-8 sm:flex-row sm:items-start sm:gap-6 sm:p-10">
            <span className="hidden h-px w-16 shrink-0 bg-accent sm:mt-3 sm:block" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500">
                {eyebrow}
              </p>
              <Link
                href={href}
                className="group mt-3 inline-flex items-center gap-2 text-xl font-semibold text-accent sm:text-2xl"
              >
                {label}
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
