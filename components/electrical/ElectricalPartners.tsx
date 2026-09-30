import AnimatedSection from "@/components/AnimatedSection";
import { electricalPartners } from "@/data/electrical";

export default function ElectricalPartners() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            A Selection of Supplier and Manufacturer Partnerships
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-4">
            {electricalPartners.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
