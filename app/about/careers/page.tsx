import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { careersPage } from "@/data/about/careers";

export const metadata = aboutMetadata({
  title: careersPage.title,
  description: careersPage.description,
  path: careersPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={careersPage} />;
}
