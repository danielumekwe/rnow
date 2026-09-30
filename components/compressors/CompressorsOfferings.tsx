import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

const offerings = [
  {
    title: "Air Compressors and Air Dryers",
    image: siteImages.compressorsPage.compressorsAndDryers,
    alt: "Air compressors and air dryers installed in an equipment room",
    description:
      "Whether you’re searching for state-of-the-art air compressors or high-performance air dryers to ensure moisture-free operations, we’ve got you covered. Our compressors and dryers serve low, medium and high-pressure applications.",
  },
  {
    title: "Industrial and Aeration Blowers",
    image: siteImages.compressorsPage.blowers,
    alt: "Industrial and aeration blowers",
    description:
      "Our aeration and industrial blower technologies are unmatched for ventilation, aeration or specialized air-movement needs, delivering quality airflow and maximum uptime.",
  },
];

export default function CompressorsOfferings() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Explore Our Premium Product Offerings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            In a constantly evolving industrial landscape, having the right
            tools is pivotal. At RNOW, we offer top-tier products and ensure
            that you&apos;re equipped with the best fit for your operational
            needs. Dive into our specialized product listings below:
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,320px))]">
          {offerings.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-normal leading-snug text-ink-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
