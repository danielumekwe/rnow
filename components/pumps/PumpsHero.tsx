import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function PumpsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Industrial and Oilfield Pumps
            </h1>
            <h2 className="mt-3 text-lg font-bold tracking-wide text-ink sm:text-xl">
              Pump Solutions: Buy, Repair and Maintain Quality Pump Products
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Are you searching for reliable, top-quality pump products and
              solutions for your business? Our RNOW Process Solutions group has
              years of experience in the industry, allowing us to become a
              trusted and leading provider of oilfield, industrial and municipal
              pumps that cater to various industries. Our pump stores give you
              access to a wide range of pump products as well as an extensive
              fleet of rental pump units, including centrifugal, positive
              displacement and surface pumps, to mention a few. Contact us today
              to learn more about how we can help you streamline your operations
              and improve your bottom line.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.pumpsPage.hero}
                alt="Industrial and oilfield pumps"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
