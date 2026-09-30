import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { qualityPage } from "@/data/about/whyRnow";

export const metadata = aboutMetadata({
  title: qualityPage.title,
  description: qualityPage.description,
  path: qualityPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={qualityPage} />;
}
