import AboutHero from "@/components/about/AboutHero";
import AboutVision from "@/components/about/AboutVision";
import AboutGuidingPrinciples from "@/components/about/AboutGuidingPrinciples";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutWhatWeOffer from "@/components/about/AboutWhatWeOffer";
import AboutBrands from "@/components/about/AboutBrands";
import AboutRunningStronger from "@/components/about/AboutRunningStronger";
import AboutLegacyTimeline from "@/components/about/AboutLegacyTimeline";
import AboutFAQ from "@/components/about/AboutFAQ";
import { CardGrid } from "@/components/about-section/AboutSections";
import { childLinks } from "@/data/about/sitemap";
import { aboutMetadata } from "@/lib/aboutMetadata";

export const metadata = aboutMetadata({
  title: "About RNOW",
  description:
    "Learn about RNOW Industrial Supply: our vision, values and people, plus careers, corporate citizenship, news and events, and why customers choose us.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVision />
      <AboutGuidingPrinciples />
      <AboutCoreValues />
      <AboutWhatWeOffer />
      <AboutBrands />
      <AboutRunningStronger />
      <AboutLegacyTimeline />
      <CardGrid
        heading="Explore About RNOW"
        intro="Learn about working with us, how we operate responsibly, what is new and why customers choose RNOW."
        cards={childLinks("/about")}
        tone="surface"
      />
      <AboutFAQ />
    </>
  );
}
