import Image from "next/image";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative h-[440px] sm:h-[480px] lg:h-[560px]">
        <Image
          src={siteImages.aboutHero}
          alt="RNOW field technician reviewing operations at an industrial facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 xl:px-10">
            <AnimatedSection>
              <h1 className="max-w-xl text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                About RNOW
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-100 sm:text-lg">
                With decades of experience, RNOW is a leading distributor of
                pipe, valves, fittings (PVF), pumps and packaged, engineered
                process and production equipment. We serve a vast range of
                markets, including upstream, midstream, gas utilities,
                downstream, energy evolution and industrial customers.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-100 sm:text-lg">
                But we&apos;re more than just a supplier. We&apos;re your
                partner in innovation, offering advanced supply chain
                solutions, technical product expertise and digital commerce
                and data management. From our headquarters and our strategic
                network of distribution and engineering locations,
                we&apos;re ready to support you wherever you operate.
              </p>
              <p className="mt-4 max-w-lg text-base font-semibold text-white">
                Choose RNOW. Empower your operations. Run Stronger™ today.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact" variant="primary" showArrow={false}>
                  Contact Sales
                </Button>
                <Button href="#brands" variant="ghost-light" showArrow={false}>
                  About RNOW Affiliated Brands
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
