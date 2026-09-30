import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function DrillingPartner() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full bg-white">
              <Image
                src={siteImages.drillingPage.partner}
                alt="Oilfield lubricants, tubular connections and chemical totes"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Your Trusted Partner in Seamless Oilfield Supplies and Completions Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              With RNOW, you&apos;re choosing more than just a leading
              distributor of oilfield supplies – you&apos;re selecting a partner
              dedicated to bringing unparalleled quality and service. Our
              seasoned team boasts a history of delivering exceptional OEM
              oilfield products and well completions solutions. Beyond product
              sales, our suite of supply chain services, from inventory planning
              to warehouse management, sets us apart. Tailored to your unique
              needs, our strategies are meticulously designed to optimize costs,
              enhance productivity and manage material availability risks,
              ensuring your operations remain seamless and efficient.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              <CircleHelp className="h-4 w-4" aria-hidden="true" />
              Have questions? Contact a RNOW Rep
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
