import AnimatedSection from "@/components/AnimatedSection";
import {
  electricalInventory,
  electricalServices,
  type LabelledItem,
} from "@/data/electrical";

function LabelledList({ items }: { items: LabelledItem[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 marker:text-ink sm:text-base">
      {items.map((item) => (
        <li key={item.label}>
          <strong className="font-bold text-ink">{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

export default function ElectricalInventory() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] space-y-12 px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            A Glimpse of Our Inventory
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Whether initiating a new venture or upgrading an existing one, we
            have you covered. Explore our product range:
          </p>
          <LabelledList items={electricalInventory} />
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Our Exceptional Services:
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW isn&apos;t just about electrical products; we&apos;re your
            supply chain partner offering unparalleled services for the smooth
            execution of your projects:
          </p>
          <LabelledList items={electricalServices} />
        </AnimatedSection>
      </div>
    </section>
  );
}
