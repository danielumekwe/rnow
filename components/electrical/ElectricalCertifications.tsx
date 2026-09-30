import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { electricalCertifications } from "@/data/electrical";

export default function ElectricalCertifications() {
  return (
    <section className="bg-[#3596cc] py-12 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-normal text-ink sm:text-3xl">
            Global Certifications
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ink">
            {electricalCertifications.map((cert) => (
              <li key={cert} className="flex items-center gap-2">
                <Check className="h-4 w-4 rounded-full bg-white/40 p-0.5" aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
