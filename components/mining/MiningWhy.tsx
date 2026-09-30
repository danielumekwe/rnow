import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { supplierReasons } from "@/data/mining";
import { siteImages } from "@/lib/images";

export default function MiningWhy() {
  return (
    <section className="bg-[#0b6b66] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Why RNOW is the Supplier of Choice
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              For mining companies across North America and Australia, RNOW
              stands out for its unmatched service, technical knowledge and
              regional reach. Our broad inventory, digital procurement tools and
              industry-leading partnerships allow us to serve both remote and
              high-volume operations with speed and reliability. We go beyond
              supply: we offer solutions that solve real problems on the ground.
            </p>
            <div className="mt-5 space-y-4">
              {supplierReasons.map((r) => (
                <div key={r.title}>
                  <h3 className="text-base font-bold">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-100 sm:text-base">{r.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={siteImages.miningPage.why}
                alt="Heavy mining haul truck at a mine site"
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
