import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { engineeringTools } from "@/data/engineering";
import { siteImages } from "@/lib/images";

export default function EngineeringWhy() {
  return (
    <section className="relative overflow-hidden bg-ink-800 text-white">
      <Image
        src={siteImages.engineeringPage.whyBackground}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-800/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-20 xl:px-10">
        <AnimatedSection>
          <p className="text-xs font-bold tracking-widest text-gray-300">WHY RNOW</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal sm:text-3xl">
            Why Choose RNOW for Engineering, Design &amp; Fabrication?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-100 sm:text-base">
            Complex projects require more than equipment. They require a partner
            with the engineering expertise, fabrication capabilities and project
            execution experience to deliver solutions aligned with your
            operational objectives.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection>
            <h3 className="text-lg font-semibold">End-to-End Project Support</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-100">
              Our teams bring together engineering, design, fabrication, project
              management and quality assurance to help streamline project
              execution from start to finish. Whether you&apos;re developing a
              new facility or expanding existing infrastructure, we provide
              solutions tailored to your specifications.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h3 className="text-lg font-semibold">Modern Fabrication Capabilities</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-100">
              Our fabrication facilities support both proprietary systems and
              customer-specific designs, giving you the flexibility to build
              equipment that meets unique operational and production
              requirements.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold">Advanced Engineering &amp; Design</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-100">
              We leverage industry-leading tools and processes, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-100 marker:text-white">
              {engineeringTools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-gray-100">
              These capabilities help ensure every project is designed, built
              and delivered with precision.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold">Quality &amp; Speed</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-100">
              Our integrated approach helps accelerate project schedules while
              maintaining strict quality standards and comprehensive testing
              procedures.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
