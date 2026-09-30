import Link from "next/link";
import { CircleHelp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function TankPartner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
        <AnimatedSection>
          <h2 className="text-2xl font-normal text-ink sm:text-3xl">
            Preferred Partner for Your Tank Batteries and Production Facilities
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            In today&apos;s fast-paced world, having a reliable partner is
            essential to the success of any business. When it comes to supplying
            your tank batteries and production facilities, you need a partner who
            understands your unique needs and offers cost-effective solutions
            that will help streamline your operations. By partnering with RNOW,
            you can take your business to the next level.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            <CircleHelp className="h-4 w-4" aria-hidden="true" />
            Have questions? Contact a RNOW Rep
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
