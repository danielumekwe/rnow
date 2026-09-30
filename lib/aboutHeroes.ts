import { siteImages } from "@/lib/images";

/** Hero and card imagery for the About section. Reuses RNOW's existing photography. */
export const aboutHeroes = {
  team: siteImages.aboutOverview.guidingPrinciples,
  facility: siteImages.aboutHero,
  people: siteImages.aboutOverview.coreValues,
  offer: siteImages.aboutOverview.whatWeOffer,
  industry: siteImages.industriesPage.hero,
  support: siteImages.industriesPage.technicalSupport,
  closing: siteImages.industriesPage.closing,
  benefits: siteImages.industriesPage.benefits,
  solutions: siteImages.solutionsPage.hero,
  partner: siteImages.solutionsPage.partner,
  tablet: siteImages.solutions.gridTablet,
  warehouse: siteImages.solutions.gridPortrait,
} as const;

export type AboutHeroKey = keyof typeof aboutHeroes;
