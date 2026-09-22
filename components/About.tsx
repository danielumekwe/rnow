import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection className="relative aspect-[4/3] overflow-hidden rounded-sm order-last lg:order-first">
            <Image
              src={siteImages.about}
              alt="Modern industrial facility exterior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              About RNOW
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Built to Support Industry
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              RNOW Industrial Supply works alongside operators, contractors
              and facility teams to help them source the industrial products
              their work depends on. We focus on making that process simpler
              — bringing together product availability, technical knowledge
              and responsive service into a single, dependable relationship.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our approach centers on understanding what an operation
              actually needs, then working to deliver it reliably — whether
              that means everyday supplies or products for a larger project.
            </p>
            <div className="mt-9">
              <Button href="#contact" variant="ghost-dark">
                Get to Know RNOW
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
