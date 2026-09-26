import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionsTailored() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              We Offer Tailored Solutions for Your Business Success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              At RNOW, we understand that every business has its own unique
              needs. That&apos;s why we offer a range of flexible solutions
              that can be tailored to fit your specific requirements. Our
              team of experts will work with you to identify the areas of
              your supply chain that need improvement and develop a plan to
              address those issues. Whether you need help with inventory
              management, eCommerce or supply chain efficiency, we have the
              expertise and experience to deliver results. With our adaptable
              solutions, you can focus on your core business while we take
              care of the rest, paving the way for your company&apos;s
              triumphant journey forward.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.solutionsPage.tailored}
                alt="RNOW technicians reviewing equipment at an industrial site"
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
