import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionsSupplyChain() {
  return (
    <section className="bg-ink-700 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[4/5] w-full max-w-sm">
              <Image
                src={siteImages.solutionsPage.supplyChain}
                alt="RNOW warehouse associate reviewing inventory on a tablet"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Master Your Supply Chain with RNOW&apos;s Powerful Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
              We excel at helping you manage your supply chain with solutions
              to optimize your operations and increase overall efficiency.
              Our team works closely with you to develop tailored solutions
              that meet your needs, allowing you to complete projects faster
              and more effectively. Through our digital commerce platform,
              you can leverage world-class technology to solve complex
              operational challenges and maximize your return on assets. We
              offer features and capabilities for easy data access, online
              order entry, inventory monitoring and high-value management
              insights. Unlock the benefits of RNOW to increase efficiency
              and profitability with our products and digital solutions.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
