import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { paintBenefits } from "@/data/paints";
import { siteImages } from "@/lib/images";

export default function PaintsBenefits() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.paintsPage.benefits}
                alt="Technician spray-painting an industrial valve"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              The Benefits of Choosing RNOW Paints and Coatings
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-100 sm:text-base">
              {paintBenefits.map((b) => (
                <li key={b.label}>
                  <strong className="font-bold">{b.label}</strong> – {b.text}
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
