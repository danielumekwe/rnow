import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative min-h-[480px]">
        <Image
          src={siteImages.industriesPage.hero}
          alt="Oil and gas industrial facility at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden="true" />

        <div className="relative flex flex-col justify-between py-8">
          <nav aria-label="Breadcrumb" className="mx-auto flex w-full max-w-[1400px] items-center gap-2 px-6 text-sm text-gray-300 xl:px-10">
            <Link href="/" className="text-accent" aria-label="Home">
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="font-medium text-gray-300">Industries</span>
          </nav>

          <div className="mx-auto w-full max-w-[1400px] px-6 py-10 xl:px-10">
            <AnimatedSection>
              <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Industry Applications Supported by RNOW
              </h1>
              <h2 className="mt-3 max-w-2xl text-lg font-semibold text-gray-100 sm:text-xl">
                Discover Industries Worldwide We Provide Products, Services
                and Solutions
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                RNOW is here to help you with a critical project requiring
                specialized products and services. We have a vast selection
                of products, services and solutions that can be tailored to
                fit your industry, market or application. From oil and gas to
                renewable energy, water and wastewater to distilleries, RNOW
                provides a comprehensive range of products, services and
                solutions designed to drive productivity, efficiency and
                profitability.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" showArrow={false}>
                  Contact Sales
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
