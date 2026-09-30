import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { internshipPage } from "@/data/about/careers";

export const metadata = aboutMetadata({
  title: internshipPage.title,
  description: internshipPage.description,
  path: internshipPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={internshipPage} />;
}
