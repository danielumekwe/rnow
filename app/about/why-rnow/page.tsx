import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { whyRnowPage } from "@/data/about/whyRnow";

export const metadata = aboutMetadata({
  title: whyRnowPage.title,
  description: whyRnowPage.description,
  path: whyRnowPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={whyRnowPage} />;
}
