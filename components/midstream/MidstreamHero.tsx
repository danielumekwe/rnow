import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function MidstreamHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={siteImages.midstreamPage.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-16 xl:px-10">
        <AnimatedSection>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Midstream Oil and Gas Solutions
          </h1>
          <h2 className="mt-2 max-w-2xl text-lg font-bold tracking-wide sm:text-xl">
            Your Trusted Partner in Midstream Oil and Gas Equipment Supply
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-100 sm:text-base">
            Within the intricate world of energy, the midstream sector remains
            pivotal. RNOW is not just a supplier; we are your partner in
            navigating this sector. Combining deep industry insights with
            cutting-edge products ensures that your midstream petroleum
            operations are efficient, safe and profitable.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
              Contact Sales
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
