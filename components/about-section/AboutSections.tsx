import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type {
  Block,
  CardLink,
  Stat,
  Step,
  TitledText,
} from "@/data/about/types";

const wrap = "mx-auto max-w-[1400px] px-6 xl:px-10";
const h2 = "text-3xl font-bold text-ink sm:text-4xl";
const lead = "mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg";

export function IntroSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className={wrap}>
        <AnimatedSection className="max-w-4xl">
          <h2 className={h2}>{heading}</h2>
          {paragraphs.map((p) => (
            <p key={p} className={lead}>
              {p}
            </p>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

export function StatsBand({
  heading,
  note,
  items,
}: {
  heading?: string;
  note?: string;
  items: Stat[];
}) {
  return (
    <section className="bg-ink py-14 text-white sm:py-16">
      <div className={wrap}>
        <AnimatedSection>
          {heading && (
            <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
          )}
          <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {items.map((s) => (
              <div key={s.label} className="border-t-2 border-accent pt-4">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span
                    className={`block font-extrabold [overflow-wrap:anywhere] ${
                      s.value.length > 9
                        ? "text-xl sm:text-2xl"
                        : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-gray-300 [overflow-wrap:anywhere]">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          {note && <p className="mt-6 text-xs text-gray-400">{note}</p>}
        </AnimatedSection>
      </div>
    </section>
  );
}

export function FeatureGrid({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro?: string;
  items: TitledText[];
}) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className={wrap}>
        <AnimatedSection>
          <h2 className={h2}>{heading}</h2>
          {intro && <p className={lead}>{intro}</p>}
        </AnimatedSection>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 3) * 0.06}>
              <div className="h-full border-t-2 border-accent-dark bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps({
  heading,
  intro,
  steps,
}: {
  heading: string;
  intro?: string;
  steps: Step[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className={wrap}>
        <AnimatedSection>
          <h2 className={h2}>{heading}</h2>
          {intro && <p className={lead}>{intro}</p>}
        </AnimatedSection>
        <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={(i % 2) * 0.06}>
              <li className="flex gap-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-base font-bold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                  {step.meta && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                      {step.meta}
                    </p>
                  )}
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {step.text}
                  </p>
                </div>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <section
          key={block.heading}
          className={`py-16 sm:py-20 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className={wrap}>
            <AnimatedSection className="max-w-4xl">
              <h2 className={h2}>{block.heading}</h2>
              {block.paragraphs.map((p) => (
                <p key={p} className={lead}>
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-relaxed text-gray-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          </div>
        </section>
      ))}
    </>
  );
}

export function CardGrid({
  heading,
  intro,
  cards,
  tone = "white",
}: {
  heading: string;
  intro?: string;
  cards: CardLink[];
  tone?: "white" | "surface";
}) {
  return (
    <section className={`py-16 sm:py-20 ${tone === "surface" ? "bg-surface" : "bg-white"}`}>
      <div className={wrap}>
        <AnimatedSection>
          <h2 className={h2}>{heading}</h2>
          {intro && <p className={lead}>{intro}</p>}
        </AnimatedSection>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <AnimatedSection key={c.href} delay={(i % 3) * 0.06}>
              <Link
                href={c.href}
                className="group flex h-full flex-col border border-gray-200 bg-white p-7 transition-shadow duration-200 hover:shadow-lg"
              >
                {c.tag && (
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    {c.tag}
                  </span>
                )}
                <h3 className="mt-1 text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">
                  {c.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Small marker for invented sample content. */
export function SampleBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block rounded-sm border border-amber-400 bg-amber-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-amber-800 ${className}`}
    >
      Sample
    </span>
  );
}

export function SampleNotice({ what }: { what: string }) {
  return (
    <p className="mt-4 max-w-3xl rounded-sm border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <strong>Sample content.</strong> {what} are placeholders for layout and
      tone. They are not real RNOW announcements, customers or results.
    </p>
  );
}

export function CoverImage({
  src,
  alt,
  className = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
