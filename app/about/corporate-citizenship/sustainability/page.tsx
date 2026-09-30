import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { sustainabilityPage } from "@/data/about/citizenship";

export const metadata = aboutMetadata({
  title: sustainabilityPage.title,
  description: sustainabilityPage.description,
  path: sustainabilityPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={sustainabilityPage} />;
}
