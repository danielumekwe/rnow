import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { servicePage } from "@/data/about/whyRnow";

export const metadata = aboutMetadata({
  title: servicePage.title,
  description: servicePage.description,
  path: servicePage.path,
});

export default function Page() {
  return <AboutPageTemplate page={servicePage} />;
}
