import Image from "next/image";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { pvfWhyChoose } from "@/data/pvf";
import { siteImages } from "@/lib/images";

export default function PvfWhyChoose() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <Image
                src={siteImages.pvfPage.whyChoose}
                alt="Stocked carbon steel pipe fittings on pallets"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">Why Choose RNOW?</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-100 marker:text-white sm:text-base">
              {pvfWhyChoose.map((item) => (
                <li key={item.label}>
                  <strong className="font-bold">{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-100 sm:text-base">
              For more information or to discuss your specific PVF needs, please
              contact our sales team. We are here to provide you with reliable
              solutions tailored to your requirements.
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
