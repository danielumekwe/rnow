import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { newsPage } from "@/data/about/news";

export const metadata = aboutMetadata({
  title: newsPage.title,
  description: newsPage.description,
  path: newsPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={newsPage} />;
}
