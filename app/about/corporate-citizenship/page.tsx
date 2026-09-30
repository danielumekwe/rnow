import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { citizenshipPage } from "@/data/about/citizenship";

export const metadata = aboutMetadata({
  title: citizenshipPage.title,
  description: citizenshipPage.description,
  path: citizenshipPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={citizenshipPage} />;
}
