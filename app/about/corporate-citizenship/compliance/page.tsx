import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { compliancePage } from "@/data/about/citizenship";

export const metadata = aboutMetadata({
  title: compliancePage.title,
  description: compliancePage.description,
  path: compliancePage.path,
});

export default function Page() {
  return <AboutPageTemplate page={compliancePage} />;
}
