import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

const features = [
  {
    label: "Clean Air Delivery",
    text: "Ensuring a supply of oil-free air, free from impurities that could compromise equipment or health.",
  },
  {
    label: "High-Efficiency Dryers",
    text: "Our air dryers effectively remove moisture, allowing longer equipment life and reduced risk of downtime.",
  },
  {
    label: "Robust Blowers",
    text: "Catered for various industrial needs, ensuring constant and reliable airflow.",
  },
  {
    label: "Expert Guidance",
    text: "Our team of professionals is always ready to assist, ensuring that you select the product that best suits your unique business needs.",
  },
];

export default function CompressorsFeatures() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.compressorsPage.features}
                alt="Packaged air compressors and dryers on a fabrication skid"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-3xl font-normal sm:text-4xl">
              Features and Benefits of Choosing RNOW
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-100 marker:text-white sm:text-base">
              {features.map((f) => (
                <li key={f.label}>
                  <strong className="font-bold">{f.label}:</strong> {f.text}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
