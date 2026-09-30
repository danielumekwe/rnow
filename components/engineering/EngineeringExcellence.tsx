import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { engineeringIndustries } from "@/data/engineering";
import { siteImages } from "@/lib/images";

export default function EngineeringExcellence() {
  return (
    <section className="bg-[#3596cc] py-16 text-ink sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <p className="text-xs font-bold tracking-widest text-ink/70">
              ENGINEERING EXCELLENCE
            </p>
            <h2 className="mt-3 text-2xl font-normal sm:text-3xl">
              How Does RNOW Support Custom Fabrication Projects?
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Every facility, production system and process environment presents
              unique challenges. That&apos;s why our engineering and fabrication
              teams work closely with customers to develop practical solutions
              that meet operational objectives while supporting safety,
              efficiency and long-term reliability. From initial concept through
              delivery, our equipment is designed to perform in the field and
              adapt to evolving operational demands.
            </p>
            <h3 className="mt-6 text-lg font-semibold">Industries We Serve</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-ink sm:text-base">
              {engineeringIndustries.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.engineeringPage.excellence}
                alt="Tank battery design and fabrication"
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
