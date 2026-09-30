import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { CaseStudyListing } from "@/components/about-section/Listings";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { caseStudiesPage } from "@/data/about/whyRnow";

export const metadata = aboutMetadata({
  title: caseStudiesPage.title,
  description: caseStudiesPage.description,
  path: caseStudiesPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={caseStudiesPage} middle={<CaseStudyListing />} />;
}
