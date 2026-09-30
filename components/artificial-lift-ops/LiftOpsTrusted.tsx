import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/images";

export default function LiftOpsTrusted() {
  return (
    <section className="bg-ink-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-normal sm:text-3xl">
              RNOW: The Most Trusted Choice for Artificial Lift Products and
              Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
              At RNOW, we understand the importance of supplying quality
              artificial lift equipment and expertise to the oil and gas
              industry. Our well-established branch network provides producers
              access to product availability when and where needed. This is why
              we are always searching for new technology to help our customers
              lower their lifting costs and decrease downtime.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-100 sm:text-base">
              We pride ourselves on providing market-leading products and an
              exceptional artificial lift services experience. Our team of
              product specialists and local pump shop services ensure that you
              always have access to the support you need. Our failure analysis
              and solutions consulting team can help you get back up and running
              as quickly as possible. And our customized individual and
              classroom training will make sure you&apos;re able to make the most
              of our products.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={siteImages.artificialLiftOpsPage.trusted}
                alt="Rod lift pumping unit at a production site"
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
