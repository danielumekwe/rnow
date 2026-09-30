import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { rotationalPage } from "@/data/about/careers";

export const metadata = aboutMetadata({
  title: rotationalPage.title,
  description: rotationalPage.description,
  path: rotationalPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={rotationalPage} />;
}
