import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { supplyChainOfferings } from "@/data/supplyChain";

export default function SupplyChainOfferings() {
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection>
            <h2 className="text-2xl font-normal text-ink sm:text-3xl">
              What We Do for Our Clients
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              At RNOW, our mission revolves around elevating your business
              operations. By offering state-of-the-art supply chain solutions, we
              drive optimal workflows ensuring you meet and exceed your business
              objectives. Harnessing our deep materials management know-how, an
              expansive global network and a diverse product selection, we bring
              to the table unmatched logistics and procurement insights.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Our end-to-end solutions not only streamline your warehouse
              operations and inventory management but also prioritize reducing
              downtime and amplifying efficiency.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              With a resolute commitment to client success, RNOW steps in to
              manage intricate supply chain tasks, allowing you to remain focused
              on your core operations. Our partnership ensures you save on
              extraneous investments, harness the best skill sets, curtail
              operational costs and operate at peak efficiency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
          <AnimatedSection>
            <h2 className="text-3xl font-normal text-ink sm:text-4xl">
              Enhancing Supply Chain Efficiency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              RNOW integrates cutting-edge solutions with extensive industry
              experience to address the multifaceted challenges of the supply
              chain. From automated inventory controls to the strategic
              management of material assets and progressive sourcing approaches,
              our services are meticulously designed to optimize operations,
              reduce costs and ensure consistent supply chain performance. Dive
              deeper into our offerings below.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {supplyChainOfferings.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col border-t-2 border-accent-dark bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-normal leading-snug text-ink-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href={item.linkHref}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
