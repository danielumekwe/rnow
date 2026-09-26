import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { siteImages } from "@/lib/images";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative min-h-[560px]">
        <Image
          src={siteImages.solutionsPage.hero}
          alt="RNOW technicians reviewing equipment at an industrial site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" aria-hidden="true" />

        <div className="relative flex flex-col justify-between py-8">
          <nav aria-label="Breadcrumb" className="mx-auto flex w-full max-w-[1400px] items-center gap-2 px-6 text-sm text-gray-300 xl:px-10">
            <Link href="/" className="text-accent" aria-label="Home">
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="font-medium text-gray-300">Solutions</span>
          </nav>

          <div className="mx-auto w-full max-w-[1400px] px-6 py-12 xl:px-10">
            <AnimatedSection>
              <p className="text-xs font-bold tracking-widest text-gray-300">
                INDUSTRIAL SOLUTIONS
              </p>
              <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Integrated Industrial Solutions That Power Performance
              </h1>
              <h2 className="mt-4 max-w-2xl text-lg font-semibold text-gray-100 sm:text-xl">
                End-to-End Solutions to Reduce Costs and Improve Operational
                Performance
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                If you&apos;re looking for ways to reduce operating costs,
                increase efficiency and streamline your business, RNOW
                partners with industrial operators to simplify complex
                challenges across facilities, field operations and global
                supply networks. Our specialists combine advanced technology,
                engineering expertise and comprehensive product availability
                to improve uptime, strengthen safety and drive measurable
                efficiency gains.
              </p>
              <div className="mt-8">
                <Button href="#contact" variant="primary" showArrow={false}>
                  Contact Sales
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
