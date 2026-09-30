import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const address = "10401 W Reno Ave, Oklahoma City, OK 73127, USA";

export default function ArtificialLiftLocations() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-normal text-ink sm:text-4xl">
            Field locations that are fully equipped to meet your needs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our artificial lift locations follow strict standard operating
            procedures that exceed API standards to ensure the best possible
            service. These artificial lift locations have years of local
            experience and are fully equipped to meet your production needs.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection>
            <article className="h-full border-t-2 border-accent-dark bg-white p-5 shadow-md">
              <h3 className="text-lg font-normal text-ink-700">Oklahoma City</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-start gap-2 text-sm font-medium leading-relaxed text-accent hover:text-accent-dark"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {address}
              </a>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
