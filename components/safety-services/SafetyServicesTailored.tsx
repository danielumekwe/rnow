import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function SafetyServicesTailored() {
  return (
    <section className="bg-[#0b6b66] py-14 text-white sm:py-16">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal sm:text-3xl">
            Tailored safety packages for your specific needs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
            As a business, you understand the importance of protecting your
            workers. But what if there were a way to save money and maintain
            safety at the same time? RNOW Safety Services offers comprehensive
            safety packages that can help reduce risk and save you money. We
            tailor our safety services to your specific needs, and we provide
            substantial savings and value over other providers. Contact us today
            to get started.
          </p>
          <div className="mt-5">
            <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
              Talk to Our Safety Team
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
