import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesProductsGrid() {
  const images = siteImages.industriesPage.productGrid;

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Quality Products and Services for Worldwide Customers
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg">
            RNOW is a leading global distributor of energy and industrial
            products, ranging from valves and fittings to processing
            equipment and safety supplies. With a focus on the energy and
            industrial industries, we are devoted to providing quality
            products, reliable services and quick response times to
            customers worldwide. Our expansive offerings and global reach
            have made us a leader in different markets. Our commitment to
            excellent customer service and innovative technologies is
            changing the face of these industries and markets around the
            world.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src) => (
            <div key={src} className="relative aspect-square bg-white">
              <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="flex aspect-square items-center justify-center bg-accent p-6 text-center">
            <p className="text-lg font-bold text-white">
              Safety Supplies and PPE
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
