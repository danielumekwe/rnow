import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { powerTransmissionItems, processEquipmentItems } from "@/data/power";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink sm:text-base">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PowerOfferings() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Product Offerings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            With our global footprint, power transmission and surface equipment –
            including blowout preventers – is in stock near you. RNOW aims to
            offer competitive prices from local stock to get your well online
            quicker.
          </p>

          <h3 className="mt-8 text-xl font-bold text-ink sm:text-2xl">
            Power Transmission
          </h3>
          <BulletList items={powerTransmissionItems} />
          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            We can be your power transmission supplier in oilfield, pipeline and
            industrial markets. Our global footprint allows access to a wide
            range of products, sources and manufacturers, and we are always
            available to deliver your orders directly to your site.
          </p>

          <h3 className="mt-8 text-xl font-bold text-ink sm:text-2xl">
            Process Equipment
          </h3>
          <BulletList items={processEquipmentItems} />
          <p className="mt-5 text-sm text-gray-600 sm:text-base">
            RNOW also offers a full range of{" "}
            <Link
              href="/products-and-services/artificial-lift"
              className="font-semibold text-accent hover:text-accent-dark"
            >
              Artificial Lift products and services
            </Link>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
