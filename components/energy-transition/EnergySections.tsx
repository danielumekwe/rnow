import Image from "next/image";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { energySections } from "@/data/energyTransition";

export default function EnergySections() {
  return (
    <>
      {energySections.map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-24">
          <section className="relative overflow-hidden bg-ink-800 text-white">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className={`absolute inset-0 ${s.overlay}`} aria-hidden="true" />

            <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-20 xl:px-10">
              <AnimatedSection>
                <p className="text-xs font-bold tracking-widest text-gray-300">
                  {s.eyebrow.toUpperCase()}
                </p>
                <h2 className="mt-3 max-w-3xl text-2xl font-normal sm:text-3xl">
                  {s.title}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-100 sm:text-base">
                    {p}
                  </p>
                ))}
                {s.bulletsIntro && (
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-100 sm:text-base">
                    {s.bulletsIntro}
                  </p>
                )}
                <ul className="mt-3 max-w-4xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-100 marker:text-white sm:text-base">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" showArrow={false} className="!px-4 !py-2.5 !text-xs">
                    Contact Sales
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </section>

          <section className="bg-white py-14 sm:py-16">
            <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
              <AnimatedSection>
                <div className="text-center">
                  <h3 className="text-xl font-normal text-ink sm:text-2xl">
                    {s.actionTitle}
                  </h3>
                  <p className="mt-2 text-base font-bold text-ink">
                    {s.actionSubtitle}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {s.actionText}
                </p>
              </AnimatedSection>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
