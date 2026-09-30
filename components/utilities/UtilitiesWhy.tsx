import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { utilityReasons } from "@/data/utilities";
import { siteImages } from "@/lib/images";

export default function UtilitiesWhy() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Why Choose RNOW for Your Downstream Needs?
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 marker:text-ink sm:text-base">
              {utilityReasons.map((r) => (
                <li key={r.label}>
                  <strong className="font-bold text-ink">{r.label}:</strong> {r.text}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative mx-auto aspect-[260/500] w-full max-w-[16rem]">
              <Image
                src={siteImages.utilitiesPage.pipeline}
                alt="Gas distribution pipeline and facility"
                fill
                sizes="16rem"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
