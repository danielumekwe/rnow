import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const productLabels = [
  "Pumps & Production Equipment",
  "Valve Actuation",
  "Valves & Flow Control",
  "Pressure Measurement",
  "Instrumentation & Gauges",
  "Tools & MRO Consumables",
  "Field Safety Equipment",
  "Pipe, Fittings & Flanges",
  "Process Equipment",
];

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
          {images.map((src, i) => (
            <div key={src} className="group relative aspect-square overflow-hidden bg-white">
              <Image
                src={src}
                alt={productLabels[i] ?? ""}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-accent/0 p-4 transition-colors duration-300 group-hover:bg-accent/85">
                <p className="text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {productLabels[i]}
                </p>
              </div>
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
