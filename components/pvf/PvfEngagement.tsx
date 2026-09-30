import AnimatedSection from "@/components/AnimatedSection";

export default function PvfEngagement() {
  return (
    <section className="bg-white pb-6 pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Industry Engagement
          </h2>
          <h3 className="mt-2 text-base font-bold text-ink sm:text-lg">
            RNOW is an Active PVF Roundtable Member
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            As an active member of the PVF Roundtable, a non-profit organization
            of industry professionals, RNOW is committed to advancing the pipe,
            valves, and fittings industry. This involvement allows us to stay at
            the forefront of industry developments and contribute to the growth
            and education of the PVF field.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Members are vital individuals and companies representing a
            considerable part of the oil and gas, utilities, chemical and
            petrochemical industries for the energy industry worldwide. In
            addition, to prepare for the industry&apos;s future by providing
            funds to educational and training institutes to encourage the growth
            of the PVF field.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
