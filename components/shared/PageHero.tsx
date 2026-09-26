import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";

type PageHeroProps = {
  breadcrumb: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative min-h-[480px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden="true" />

        <div className="relative flex flex-col justify-between py-8">
          <div className="mx-auto w-full max-w-[1400px] px-6 xl:px-10">
            <Breadcrumb items={breadcrumb} />
          </div>

          <div className="mx-auto w-full max-w-[1400px] px-6 py-10 xl:px-10">
            <AnimatedSection>
              {eyebrow && (
                <p className="text-xs font-bold tracking-widest text-gray-300">
                  {eyebrow}
                </p>
              )}
              <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <h2 className="mt-3 max-w-2xl text-lg font-semibold text-gray-100 sm:text-xl">
                  {subtitle}
                </h2>
              )}
              {description && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                  {description}
                </p>
              )}
              {ctaLabel && ctaHref && (
                <div className="mt-8">
                  <Button href={ctaHref} variant="primary" showArrow={false}>
                    {ctaLabel}
                  </Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
