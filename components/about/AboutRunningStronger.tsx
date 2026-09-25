import AnimatedSection from "@/components/AnimatedSection";

export default function AboutRunningStronger() {
  return (
    <section className="bg-accent-dark py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection className="max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Running Stronger&trade;
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            With a wealth of collective experience, RNOW has supplied the
            energy and industrial markets through every cycle, boom and
            transition. Today, we serve customers from a position of
            unmatched scale, and we describe that commitment in two words:{" "}
            <span className="font-semibold">Running Stronger&trade;</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Running Stronger&trade; is our promise that RNOW&apos;s
            distribution services — from pipe, valves and fittings to
            automation, pumping solutions and digital procurement — will keep
            getting faster, deeper and more reliable. It&apos;s how we
            operate, and it&apos;s what our customers count on.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
