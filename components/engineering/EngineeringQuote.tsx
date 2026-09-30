import AnimatedSection from "@/components/AnimatedSection";

export default function EngineeringQuote({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <p className="text-xl font-semibold text-ink sm:text-2xl">{children}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
