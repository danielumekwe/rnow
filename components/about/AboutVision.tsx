import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutVision() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Our vision
          </h2>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Aspiring to set the gold standard in Supply Chain Management,
            RNOW will be recognized as the market{" "}
            <span className="font-semibold text-ink">
              leader in Supply Chain Management
            </span>{" "}
            through superior customer service by leveraging our exceptional
            workforce, sophisticated processes, trusted suppliers and
            cutting-edge technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10">
          <div className="relative aspect-[3/1] w-full overflow-hidden border border-accent">
            <Image
              src={siteImages.aboutOverview.visionCollage}
              alt="Collage of RNOW warehouse, drilling rig and industrial facility operations"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
