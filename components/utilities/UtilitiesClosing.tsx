import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function UtilitiesClosing() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              Improved Efficiency for Your Utility and Gas Distribution Needs
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We are your go-to supplier for a wide range of products and
              integrated supply chain solutions. Our extensive product offerings
              and expertise in the industry make us a trusted partner for
              businesses of all sizes. From refinery and petrochemical plants to
              industrial supplies and tools, we have everything you need to keep
              your operations running smoothly. Our integrated supply chain
              solutions can help simplify your procurement process, freeing up
              time and resources to focus on what matters most: growing your
              business. Reach out to us with any questions or inquiries – we&apos;re
              always here to help!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.utilitiesPage.closing}
                alt="RNOW team member reviewing supply chain data on a tablet"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
