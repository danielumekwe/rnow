import AnimatedSection from "@/components/AnimatedSection";
import { valveReasons } from "@/data/valveActuation";

export default function ValveWhy() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal sm:text-3xl">
            Why RNOW? Because we&apos;re committed to our customers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
            When you service your equipment with RNOW, you&apos;re ensuring that
            your operation stays up and running smoothly. Our comprehensive
            inventory of valves and actuators, as well as our knowledgeable
            service engineers, make us the ideal partner for keeping your
            business running. Here are three reasons why you should partner with
            RNOW:
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-gray-100 sm:text-base">
            {valveReasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </AnimatedSection>
      </div>
    </section>
  );
}
