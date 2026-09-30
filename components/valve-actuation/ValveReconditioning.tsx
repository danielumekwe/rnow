import AnimatedSection from "@/components/AnimatedSection";
import { reconditioningSteps } from "@/data/valveActuation";

export default function ValveReconditioning() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Valve Reconditioning Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW&apos;s rigorous reconditioning and recertification process
            restores valves to like-new conditions. We ensure that they meet the
            exact specifications and performance as new valves. Our dedication
            to meeting material specifications and performance standards enables
            us to provide you with mechanically sound valves.
          </p>
          <p className="mt-4 text-sm text-gray-700">Services include:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink">
            {reconditioningSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            According to a quality checklist, every step is tightly controlled to
            ensure that the valve conforms to all required regulatory standards.
            It also helps identify any failures or underperformance so that they
            can be addressed. A report is generated after each repair to help
            track any issues and ensure proper valve operation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
