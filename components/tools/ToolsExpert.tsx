import AnimatedSection from "@/components/AnimatedSection";

export default function ToolsExpert() {
  return (
    <section className="bg-white pt-6 sm:pt-10">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Expert Recommendations Tailored for You
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Not sure about the best tool for your operation? Let our seasoned
            experts evaluate your requirements and suggest the optimal product.
            At RNOW, we&apos;re more than just a supplier; we&apos;re your
            trusted partner, ensuring your crews stay well-supplied and
            hyper-productive.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
