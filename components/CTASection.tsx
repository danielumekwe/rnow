import Image from "next/image";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <Image
        src={siteImages.finalCta}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/80 to-ink" />

      <div className="relative mx-auto max-w-[1400px] px-6 text-center xl:px-10">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&rsquo;s Keep Your Operation Moving
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Talk to RNOW Industrial Supply about your next sourcing or supply
            requirement.
          </p>
          <div className="mt-10">
            <Button href="mailto:info@rnowindustrial.com" variant="primary">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
