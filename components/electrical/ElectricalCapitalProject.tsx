import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ElectricalCapitalProject() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Capital Project Partner for All Your Electrical Needs
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Embarking on a large-scale capital project and need to source
              top-tier electrical equipment and materials? RNOW is the premier
              partner for all your electrical necessities. Excelling in the
              realm of capital energy projects, RNOW delivers a blend of
              meticulous project management, precise procurement, seasoned
              engineering and robust construction services. Our expansive vendor
              networks help businesses curtail both time and costs. Moreover, we
              unveil supply chain avenues designed for peak efficiency. With a
              team of seasoned professionals at the helm, we are staunchly
              committed to quality control and unparalleled customer service.
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Talk to our electrical team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-video w-full">
              <Image
                src={siteImages.electricalPage.capitalProject}
                alt="RNOW project team reviewing plans"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
