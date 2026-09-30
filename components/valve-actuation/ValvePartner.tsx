import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ValvePartner() {
  return (
    <section className="relative overflow-hidden bg-ink-800">
      <Image
        src={siteImages.valveActuationPage.partnerBackground}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-20 xl:px-10">
        <AnimatedSection>
          <div className="max-w-3xl bg-white p-6 shadow-xl sm:p-10">
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Your Partner for Custom Valve Actuation and Automation Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW Valves &amp; Actuation is your partner for custom valve
              actuated and automated services. With our extensive expertise and
              experience, we excel in providing top-notch solutions tailored to
              meet your specific requirements. Our vast inventory of valves,
              actuators and related components ensures we have the right tools
              for any project.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Our in-house solutions and field services guarantee that we can
              handle every aspect of your valve needs. Our dedicated team of
              professionals is committed to supporting you in any way possible.
              Whether you need assistance with system design, product selection
              or on-site installation, we are here to help.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Contact us today and discover how our unrivaled expertise and
              comprehensive services can benefit you. Trust RNOW Valves &amp;
              Actuation for all your valve needs.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
