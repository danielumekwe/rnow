import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { safetyServiceCards } from "@/data/safetyServices";

export default function SafetyServicesCards() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="max-w-4xl text-3xl font-normal text-ink sm:text-4xl">
            Browse our safety equipment rentals and support services for your
            next shutdown or turnaround project
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            RNOW Safety Services provides a wide range of shutdown safety
            products, shutdown services and safety rental equipment. We offer
            repair services to make sure your teams have the necessary equipment
            to stay safe during turnarounds and outages. Our extensive catalog of
            products includes everything from respiratory protection and fall
            arrest systems to expenditure tracking and reporting. Let us help you
            keep your team safe and your operations running smoothly.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {safetyServiceCards.map((item, i) => (
            <AnimatedSection key={item.title} delay={(i % 4) * 0.05}>
              <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md transition-colors duration-200 hover:bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-normal leading-snug text-ink-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
