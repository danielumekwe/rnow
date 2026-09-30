import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { safetyOfferings } from "@/data/utilities";
import { siteImages } from "@/lib/images";

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export default function UtilitiesBenefits() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] space-y-16 px-6 sm:space-y-20 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Benefits for Energy Industry Customers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            When it comes to RNOW, you can rest assured that you are getting the
            best of the best. With a focus on quality and safety, our gas
            distribution product offerings are designed to exceed regulatory
            standards and provide long-lasting reliability. This means that you
            can rely on these products for years to come, without having to worry
            about product failure or safety issues. This commitment to
            excellence is what sets RNOW apart and makes us the go-to choice for
            customers who demand the best.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-xl font-normal text-ink sm:text-2xl">
              Superior Safety Services from Our On-Site and Locations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Our safety services group provides unparalleled safety services to
              our valued clients. Our on-site and branch service centers, rental
              fleets, and mobile and turnaround service trucks are second to
              none, providing comprehensive safety services such as testing
              respiratory equipment, fire extinguishers, fall protection, showers
              and eye protection. Our team of experts is well-trained in hose and
              level A suit testing, respirator fit testing, and much more.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              We pride ourselves on delivering top-notch safety services to
              ensure that our clients are always in compliance with health and
              safety regulations. Our safety service branch locations and field
              technicians can offer:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 marker:text-ink sm:text-base">
              {safetyOfferings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <TextLink href="/solutions/safety-services">
              Discover our safety services offerings
            </TextLink>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.utilitiesPage.safety}
                alt="RNOW on-site safety store"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-xl font-normal text-ink sm:text-2xl">
            Streamline Your Industrial Supply Chain Processes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            In the downstream industrial industry, having effective inventory and
            supply chain solutions is crucial. It allows you to efficiently and
            easily access data, monitor inventory and gain insights into your
            supply chain. We understand the importance of having an efficient
            supply chain. That&apos;s why we offer a wide range of supply chain
            solutions to help you optimize your operations and increase overall
            efficiency. Our team works closely with you to understand your unique
            needs and develop tailored solutions that meet your requirements.
            With our supply chain solutions, you can rest assured that you will
            receive the necessary materials to complete your projects faster and
            more effectively.
          </p>
          <TextLink href="/solutions/supply-chain-management">
            Find out how we can help you optimize your supply chain
          </TextLink>
        </AnimatedSection>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src={siteImages.utilitiesPage.devices}
                alt="RNOW online store on desktop, tablet and mobile"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h2 className="text-xl font-normal text-ink sm:text-2xl">
              Gaining Access to Our Online Downstream Products Portfolio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We leverage a broad and diverse product portfolio, digital tools,
              and customizable service models to offer significant savings to
              customers. A partnership with us means a tailored approach based on
              your needs, whether it&apos;s the lowest cost, the highest quality
              products, a service-centric program or any combination.
            </p>
            <TextLink href="/solutions#digital-solutions-technology">
              Learn more about our B2B eCommerce capabilities
            </TextLink>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
