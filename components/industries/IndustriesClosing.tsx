import Image from "next/image";
import { siteImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

export default function IndustriesClosing() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              RNOW: A Game-Changing Solution for Industries and Markets
              Globally
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              RNOW is a game-changer for industries and markets around the
              globe. With our innovative solutions and wide range of products
              and services, you can enhance productivity, efficiency and
              profitability. From oil and gas to renewable energy and the
              expansion of energy sources, RNOW has got you covered. Whether
              you need equipment rentals or want to stay up-to-date with the
              latest industry technology, RNOW has everything you need to
              succeed. So why wait? Visit our locations today or contact us
              through our web form and discover how RNOW can take your
              business to new heights!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={siteImages.industriesPage.closing}
                alt="Aerial view of an RNOW distribution warehouse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
