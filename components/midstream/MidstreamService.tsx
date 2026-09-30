import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function MidstreamService() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] space-y-16 px-6 sm:space-y-20 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Leading the Way in Midstream Expertise and Dedicated Service
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              At RNOW, we prioritize unmatched experience in the midstream
              marketplace. Our seasoned sales team, with its vast combined
              knowledge, ensures that your project and service expectations are
              always exceeded. Beyond our commitment to timely project delivery
              and optimal value, we offer specialized project managers,
              quotation experts and a dedicated point of contact for every
              client—partner with RNOW for market-focused sourcing,
              comprehensive project management and a truly results-driven
              approach.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.midstreamPage.serviceTruck}
                alt="Technician servicing a pump in the field beside a service truck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-gray-600">
              Our technician expertly services a pump in the field with our
              specialized service truck, ensuring 24/7 equipment reliability.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
              <Image
                src={siteImages.midstreamPage.devices}
                alt="RNOW digital platform on desktop, tablet and mobile"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Unlock Business Transformation with RNOW Digital Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Dive into the future with our digital platform, tailored for your
              midstream needs. Whether you&apos;re shopping for top-tier products
              with our RNOW eCommerce platform, customizing equipment orders
              through eSpec™ or optimizing inventory with AccessNOW™, we&apos;ve
              digitized every step for precision, ease and efficiency.
            </p>
            <Link
              href="/solutions#digital-solutions-technology"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Discover our digital solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
