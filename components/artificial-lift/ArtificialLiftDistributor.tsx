import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function ArtificialLiftDistributor() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.artificialLiftPage.distributor}
                alt="RNOW service truck in front of a row of pumpjacks"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-3xl font-normal sm:text-4xl">
              A reliable artificial lift distributor dedicated to meeting your needs
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-100 sm:text-base">
              <p>
                When you need a reliable and efficient artificial lift
                distributor that will meet your needs and exceed your
                expectations, look no further than RNOW.
              </p>
              <p>
                Supplying quality artificial lift equipment and expertise to the
                oil and gas industry has become increasingly important as fields
                get older and new fields emerge, with increasing numbers of
                wells coming online. That is why we are always looking for new
                ways to help our customers reduce costs and downtime.
              </p>
              <p>
                In addition to our high-quality products, we offer many
                services, including product specialists, local pump shop
                services, failure analysis and solutions consulting and
                customized individual and classroom training for your
                organization.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
