import AnimatedSection from "@/components/AnimatedSection";

export default function CarbonProblem() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Defining the Methane Emissions Problem
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              As the main component of natural gas, methane represents the 2nd
              biggest component of greenhouse gas (GHG) emissions from the
              petroleum and natural gas systems sector, especially in the
              Permian, Gulf Coast and Williston basins. Pneumatic controllers
              and actuators are one of the largest sources of methane emissions
              in oil &amp; gas production, transmission and storage applications.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              These GHG emissions, measured by carbon dioxide equivalent (CO
              <sub>2</sub>e) volume, represent the potential effect for climate
              change. Operators understand that significantly reducing reported
              emissions is an important part of meeting company and government
              environmental targets. Not only that – wasted natural gas
              represents a considerable loss of a valuable energy resource and
              revenue for oil and gas operators.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="border-t-2 border-accent bg-gray-100 p-8 text-center">
              <p className="text-4xl font-extrabold text-accent sm:text-5xl">
                60.6 million
              </p>
              <p className="mt-2 text-sm font-bold text-ink sm:text-base">
                metric tons methane emissions (CO<sub>2</sub>e)
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Reported 2023 in petroleum &amp; natural gas sector (epa.gov)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
