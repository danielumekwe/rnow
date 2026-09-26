import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProductCategoryGrid from "@/components/products/ProductCategoryGrid";
import ContactCTA from "@/components/shared/ContactCTA";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "RNOW Industrial Supply offers pipe, valves, fittings, pumps, industrial equipment, tools, electrical products, safety equipment and fasteners.",
};

export default function ProductsAndServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Products & Services" }]}
        eyebrow="PRODUCTS & SERVICES"
        title="Quality Products for Every Stage of Your Operation"
        description="RNOW Industrial Supply provides a broad range of quality products — including essential PVF, MRO items, pumps and engineered process and production equipment — backed by a responsive distribution network and technical expertise."
        image={siteImages.industriesPage.hero}
        imageAlt="Industrial facility supplied by RNOW"
        ctaLabel="Talk to Our Team"
        ctaHref="/contact"
      />
      <ProductCategoryGrid />
      <ContactCTA label="Get in touch with a customer representative now" />
    </>
  );
}
