import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

const reasons = [
  "Our extensive inventory of products from the industry's leading manufacturers means that we can provide you with the right item for your specific needs, whether it is a piece of equipment or a consumable item.",
  "In addition, we offer a wide range of value-added services, such as on-site field support and 24/7 emergency service, to give you the peace of mind that you are covered should an issue arise.",
  "Our team of experts is always on hand to offer advice and support, so you can be confident that you are making the best choices for your business.",
];

export default function OffshoreWhy() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <Image
                src={siteImages.offshoreDrillingPage.platform}
                alt="Worker on an offshore platform helideck as a helicopter approaches"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h2 className="text-2xl font-normal sm:text-3xl">
              Why RNOW is the best choice for buying oilfield products
            </h2>
            <h3 className="mt-2 text-base font-bold sm:text-lg">
              Get quality products and solutions all fit the needs of your
              operation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              There are many reasons to choose RNOW as your supplier for
              oilfield products.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-100 marker:text-white sm:text-base">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-100 sm:text-base">
              Why not give us a call today and see how we can help you?
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
