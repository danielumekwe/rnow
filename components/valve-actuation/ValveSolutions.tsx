import AnimatedSection from "@/components/AnimatedSection";
import {
  fieldSolutions,
  inHouseSolutions,
  type BulletNode,
} from "@/data/valveActuation";

function Row({ title, items }: { title: string; items: BulletNode[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
      <h2 className="text-xl font-normal text-ink sm:text-2xl">{title}</h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700 marker:text-ink">
        {items.map((item) => (
          <li key={item.text}>
            {item.text}
            {item.children && (
              <ul className="mt-1.5 list-[circle] space-y-1 pl-5">
                {item.children.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ValveSolutions() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1400px] space-y-12 px-6 xl:px-10">
        <AnimatedSection>
          <Row title="In-house Solutions" items={inHouseSolutions} />
        </AnimatedSection>
        <AnimatedSection>
          <Row title="Field Solutions" items={fieldSolutions} />
        </AnimatedSection>
      </div>
    </section>
  );
}
