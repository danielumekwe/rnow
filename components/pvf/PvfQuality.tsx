import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { pvfQualityGoals } from "@/data/pvf";
import { siteImages } from "@/lib/images";

export default function PvfQuality() {
  return (
    <section className="bg-[#0b6b66] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Quality Assurance You Can Trust
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              RNOW&apos;s quality assurance program is among the most advanced
              in the industry. Our distribution centers and key locations meet
              ISO 9001 standards, ensuring that our products and services meet
              customer and regulatory requirements consistently. Our IMPACT
              quality goals reflect our dedication to excellence:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-100 marker:text-white sm:text-base">
              {pvfQualityGoals.map((g) => (
                <li key={g.lead}>
                  <strong className="font-bold">{g.lead}</strong>
                  {g.rest}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/about" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                Learn More About Our Quality Program
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <Image
                src={siteImages.pvfPage.quality}
                alt="Technician inspecting material with an XRF analyzer"
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
