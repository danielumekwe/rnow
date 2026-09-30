import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { valueAddedPage } from "@/data/about/whyRnow";

export const metadata = aboutMetadata({
  title: valueAddedPage.title,
  description: valueAddedPage.description,
  path: valueAddedPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={valueAddedPage} />;
}
