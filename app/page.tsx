import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhyRnow from "@/components/WhyRnow";
import Industries from "@/components/Industries";
import Products from "@/components/Products";
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
      <WhyRnow />
      <Industries />
      <Products />
      <FeaturedProduct />
      <Solutions />
      <EcommerceCTA />
      <About />
      <News />
      <CTASection />
    </>
  );
}
