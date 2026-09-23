import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import AnimatedSection from "@/components/AnimatedSection";

export default function EcommerceSignIn() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 xl:px-10 lg:grid-cols-2 lg:gap-16">
        <AnimatedSection>
          <Image
            src="/images/software.png"
            alt="RNOW ecommerce platform shown across desktop, tablet and mobile devices"
            width={1254}
            height={1254}
            className="mx-auto w-full max-w-xl"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <Eyebrow>Your Supply Chain, Simplified</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-ink sm:text-4xl">
            Sign in or create an account with a few easy steps to access our
            ecommerce site.
          </h2>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button href="#sign-in" variant="primary">
              Sign In
            </Button>
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="#create-account"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Create account
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
