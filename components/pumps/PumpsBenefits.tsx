import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { pumpFeatures } from "@/data/pumps";

export default function PumpsBenefits() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Benefits of Working with RNOW
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Working with a reputable distributor like RNOW can make all the
            difference when finding the right pump products and services for
            your needs. As a leading distributor of pump products for oilfield,
            industrial and municipal applications, we offer a wealth of
            expertise and experience that is hard to beat. With years of pump
            industry know-how, our experts can help guide you toward the best
            possible solutions for your pump product needs, no matter your
            specific requirements. Whether looking for reliable pumping
            equipment for harsh industrial environments or efficient and
            cost-effective solutions for municipal water supply systems, our
            team has the skills and knowledge to help you find the perfect fit.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-14 sm:space-y-20">
          {pumpFeatures.map((f, i) => (
            <AnimatedSection key={f.title}>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={f.image}
                      alt={f.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-xl font-normal text-ink sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {f.text}
                  </p>
                  <Link
                    href={f.linkHref}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {f.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
