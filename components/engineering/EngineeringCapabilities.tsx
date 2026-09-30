import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { engineeringCapabilities } from "@/data/engineering";
import { siteImages } from "@/lib/images";

export default function EngineeringCapabilities() {
  return (
    <section className="bg-[#0b6b66] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <p className="text-xs font-bold tracking-widest text-gray-200">CAPABILITIES</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal sm:text-3xl">
            What Engineering &amp; Fabrication Services Does RNOW Provide?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-100 sm:text-base">
            RNOW designs and fabricates custom equipment supporting production,
            processing, transportation and infrastructure applications across
            multiple industries.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {engineeringCapabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={(i % 2) * 0.06}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-100 sm:text-base">
                {c.text}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <div className="relative aspect-[16/6] w-full">
            <Image
              src={siteImages.engineeringPage.capabilities}
              alt="Fabricated pressure vessels and modular process packages"
              fill
              sizes="(min-width: 1400px) 1300px, 100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
