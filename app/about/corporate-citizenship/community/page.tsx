import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { communityPage } from "@/data/about/citizenship";

export const metadata = aboutMetadata({
  title: communityPage.title,
  description: communityPage.description,
  path: communityPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={communityPage} />;
}
