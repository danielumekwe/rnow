import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { powerServiceOfferings } from "@/data/electrical";
import { siteImages } from "@/lib/images";

export default function ElectricalPowerService() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-video w-full">
              <Image
                src={siteImages.electricalPage.powerService}
                alt="RNOW technicians building electrical panels"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Electrical Engineering, Integration &amp; Automation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              RNOW is proud to offer an Electrical Division and panel shop,
              offering full-service engineering, drafting, assembly and
              installation to meet your power and control needs. Our expert team
              provides turnkey solutions, ensuring high-quality and reliable
              panel fabrication tailored to your specifications.
            </p>
            <p className="mt-4 text-sm text-gray-100 sm:text-base">
              Our electrical solutions include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-100 marker:text-white sm:text-base">
              {powerServiceOfferings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white"
            >
              <CircleHelp className="h-4 w-4" aria-hidden="true" />
              Have questions? Talk to our electrical team
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
