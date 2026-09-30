import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { NewsListing } from "@/components/about-section/Listings";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { companyNewsPage } from "@/data/about/news";

export const metadata = aboutMetadata({
  title: companyNewsPage.title,
  description: companyNewsPage.description,
  path: companyNewsPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={companyNewsPage} middle={<NewsListing />} />;
}
