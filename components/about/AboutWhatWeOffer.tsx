import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutWhatWeOffer() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[4/5] w-full sm:aspect-[4/3]">
              <Image
                src={siteImages.aboutOverview.whatWeOffer}
                alt="RNOW warehouse and industrial operations collage"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              What We Offer
            </h2>
            <ul className="mt-6 space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <li>
                <span className="font-semibold text-ink">
                  Global Product Range:
                </span>{" "}
                From PVF components like pipes and valves to safety
                equipment, our offering is vast and tailored to meet
                sustainability goals, including solutions that support carbon
                and GHG emission reduction.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Innovative Solutions:
                </span>{" "}
                Our digital commerce platform and supply chain services
                address intricate operational challenges, bolstered with
                support from procurement and inventory management to field
                services.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Sector Expertise:
                </span>{" "}
                Serving a wide array of industries, RNOW&apos;s product range
                caters to exploration and production companies, midstream
                transmission and storage, refineries, chemical sectors,
                utilities, the mining industry, municipal water services, and
                manufacturers. Additionally, RNOW plays a pivotal role in
                supporting engineering and construction companies and
                businesses involved in decarbonization, energy transition,
                and renewable energy markets.
              </li>
            </ul>
            <Link
              href="#products"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent"
            >
              See our product offering and services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
