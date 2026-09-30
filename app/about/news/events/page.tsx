import AboutPageTemplate from "@/components/about-section/AboutPageTemplate";
import { EventsListing } from "@/components/about-section/Listings";
import { aboutMetadata } from "@/lib/aboutMetadata";
import { eventsPage } from "@/data/about/news";

export const metadata = aboutMetadata({
  title: eventsPage.title,
  description: eventsPage.description,
  path: eventsPage.path,
});

export default function Page() {
  return <AboutPageTemplate page={eventsPage} middle={<EventsListing />} />;
}
