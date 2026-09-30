import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { siteImages } from "@/lib/images";

export default function OnshoreHero() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-4 xl:px-10">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Oil and Gas Operations", href: "/industries#oil-gas-operations" },
              { label: "Onshore Drilling" },
            ]}
          />
        </div>
      </div>

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={siteImages.onshoreDrillingPage.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-16 xl:px-10">
          <AnimatedSection>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Onshore Drilling Rig Products and Solutions
            </h1>
            <h2 className="mt-2 text-lg font-bold tracking-wide sm:text-xl">
              Oilfield Products and Drilling Equipment for Drilling Oil and Gas
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-100 sm:text-base">
              RNOW is a leading OEM and consumable products distributor for
              land-based drilling rigs. Coupled with our supply chain management
              solutions, RNOW offers onshore rigs a portfolio that helps to
              minimize rig downtime and reduce the total cost of ownership.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
