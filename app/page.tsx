import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Industries from "@/components/Industries";
import FeaturedProduct from "@/components/FeaturedProduct";
import ProductsShowcase from "@/components/ProductsShowcase";
import EcommerceSignIn from "@/components/EcommerceSignIn";
import Solutions from "@/components/Solutions";
import RunStronger from "@/components/RunStronger";
import News from "@/components/News";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Industries />
      <FeaturedProduct />
      <ProductsShowcase />
      <EcommerceSignIn />
      <Solutions />
      <RunStronger />
      <News />
      <CTASection />
    </>
  );
}
