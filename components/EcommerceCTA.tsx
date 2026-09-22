import Image from "next/image";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function EcommerceCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <Image
        src={siteImages.ecommerceCta}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />

      <div className="relative mx-auto max-w-[1400px] px-6 text-center xl:px-10">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Need Industrial Products?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Tell us what you need and our team can help you source it —
            reach out to request a quote or start a conversation with RNOW.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="primary">
              Request a Quote
            </Button>
            <Button href="#contact" variant="ghost-light">
              Contact RNOW
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
