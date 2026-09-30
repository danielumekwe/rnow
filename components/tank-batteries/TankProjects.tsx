import AnimatedSection from "@/components/AnimatedSection";

export default function TankProjects() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Optimizing Brownfield and Greenfield Oil and Gas Projects
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            When it comes to increasing oil and gas production, it&apos;s
            important to find a distributor for both brownfield and greenfield
            projects. RNOW can supply midstream products and equipment into
            existing brownfield production processes, so you can capitalize on
            existing infrastructure while also benefiting from lower costs and
            improved safety. Similarly, we can supply PVF and production
            equipment into greenfield projects to present an opportunity to
            pursue larger-scale projects that can result in higher returns on
            investment.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatedSection>
            <article className="h-full border-t-2 border-accent-dark bg-white p-6 shadow-md">
              <h3 className="text-xl font-normal text-ink-700">
                Brownfield Onshore Production Facilities
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Contact us about our full line of pipe, manual and operated
                valves, fittings, flanges, pumps, instrumentation, and well site
                and production site products. We select our equipment based on
                the correct fit for your application. Our engineering
                capabilities and decades of experience make us your one-stop
                solutions for PVF, pumps, and custom process equipment.
              </p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <article className="h-full border-t-2 border-accent-dark bg-white p-6 shadow-md">
              <h3 className="text-xl font-normal text-ink-700">
                Greenfield Onshore Production Facilities
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Whether you are drilling and completing a conventional single
                well or an unconventional multi-well pad, we can provide
                virtually all of the required bill of material items for your
                wellhead hookups and tank batteries. Our flexible supply
                management approach adapts to your drilling and completion
                program for onshore production facilities that are constructed
                on-site or in a modular fashion.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
