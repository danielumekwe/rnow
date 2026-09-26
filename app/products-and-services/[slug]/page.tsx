import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { productCategories } from "@/data/productCategories";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.label,
    description: category.description,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Products & Services", href: "/products-and-services" },
          { label: category.label },
        ]}
        eyebrow="PRODUCTS & SERVICES"
        title={category.headline}
        image={siteImages.industriesPage.hero}
        imageAlt={category.headline}
        ctaLabel="Contact Sales"
        ctaHref="/contact"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {category.description}
              </p>
              <ul className="mt-6 space-y-4">
                {category.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-base text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.headline}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA label={`Talk to our team about ${category.label.toLowerCase()}`} />
    </>
  );
}
