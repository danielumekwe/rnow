import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Industries from "@/components/Industries";
import FeaturedProduct from "@/components/FeaturedProduct";
import Solutions from "@/components/Solutions";
import EcommerceCTA from "@/components/EcommerceCTA";
import About from "@/components/About";
import News from "@/components/News";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Industries />
      <FeaturedProduct />
      <Solutions />
      <EcommerceCTA />
      <About />
      <News />
      <CTASection />
    </>
  );
}
