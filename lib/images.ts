/**
 * Centralized image configuration for RNOW Industrial Supply.
 *
 * TEMPORARY: every URL below points to a licensed Unsplash reference photo
 * used only to keep the site looking complete during development. Before
 * production launch, replace these with RNOW-owned or properly licensed
 * imagery — swap the value here and every component that imports from this
 * file updates automatically. Nothing outside this file should ever
 * hardcode an image URL.
 *
 * To swap an image: change the path/URL for that key. Local files should
 * live under /public/images/... following the same key structure.
 */

type UnsplashOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

/** Builds a sized/optimized Unsplash CDN URL from a bare photo id. */
function unsplash(photoId: string, { width = 1600, quality = 75 }: UnsplashOptions = {}) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const siteImages = {
  // Local, RNOW-provided photo — not a temporary reference image.
  hero: "/images/hero/hero-team.png",

  intro: unsplash("1581091226825-a6a2a5aee158", { width: 1800 }),

  about: unsplash("1560179707-f14e90ef3623", { width: 1800 }),

  // Local, RNOW-provided photo — not a temporary reference image.
  aboutHero: "/hero2.png",

  industriesPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/industries/hero.png",
    benefits: "/images/industries/benefits.png",
    technicalSupport: "/images/industries/technical-support.png",
    closing: "/images/industries/closing.png",

    productGrid: [
      unsplash("1695060601967-7fb135446f67", { width: 900 }), // pumpjacks
      unsplash("1780034766246-68bab7c0ce00", { width: 900 }), // valve actuator
      unsplash("1774019883172-a89730a86500", { width: 900 }), // industrial valve
      unsplash("1639244315109-b6e39e646181", { width: 900 }), // pressure gauge & tank
      unsplash("1513827574967-e763dd0bc329", { width: 900 }), // pressure gauge close-up
      unsplash("1643550488350-c8a3b36e2e56", { width: 900 }), // drill bits
      unsplash("1705579609022-a7a2266b6226", { width: 900 }), // PPE / safety vest
      unsplash("1757573538081-c469f75cdd7a", { width: 900 }), // industrial pipes
      unsplash("1745921204896-c2011440a4e2", { width: 900 }), // plant machinery & gauges
    ],
  },

  solutionsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/solutions-page/hero.png",
    tailored: "/images/solutions/oilfield-team.png",
    supplyChain: "/images/solutions/team-tablet.png",
    partner: "/images/solutions-page/partner.png",
  },

  aboutOverview: {
    // Local, RNOW-provided photos — not temporary reference images.
    visionCollage: "/images/about/vision-collage.png",
    guidingPrinciples: "/images/hero/hero-team.png",
    coreValues: "/images/solutions/oilfield-team.png",
    whatWeOffer: "/images/about/what-we-offer.png",
    brands: "/images/about/brands.png",
  },

  // Local, RNOW-provided photo — not a temporary reference image.
  featured: "/images/products/featured-coiled-line-pipe.png",

  compressorsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/air%20compressor/Air-Compressor-Dryer.jpg",
    compressorsAndDryers: "/images/air%20compressor/Air-Compressors-and-Dryers-thumbnail.webp",
    blowers: "/images/air%20compressor/ac-blower-thumbnail.webp",
    features: "/images/air%20compressor/air-compressor.webp",
  },

  artificialLiftPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/air%20lift/Artificial_Lift_Systems.webp",
    rodLift: "/images/air%20lift/Artificial_Lift_Thumbnails.webp",
    pcp: "/images/air%20lift/ALS_PC_pump_thumbnail.jpg",
    wellAutomation: "/images/air%20lift/well-automation-control-thumbnail.jpg",
    flexFlow: "/images/air%20lift/Flex-Flow-Hydraulic-Jet-Pump.webp",
    distributor: "/images/air%20lift/Artificial-lift_truck-pumpjack_thumb.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  drillingPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Drilling%20%26%20Completions/Drilling_and_completions_thumbnail.webp",
    oemSupplies: "/images/Drilling%20%26%20Completions/drilling-products-thumbnail.webp",
    filtration: "/images/Drilling%20%26%20Completions/puradyn-thumbnail.webp",
    wellCompletion: "/images/Drilling%20%26%20Completions/Clean_outs_and_drill_outs_thumb.jpg",
    partner: "/images/Drilling%20%26%20Completions/Drilling-Consumables-Product-Box.jpg",
    inventory: "/images/solutions/team-tablet.png",
    procurement: "/images/software.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  electricalPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Electrical/Electrical-thumbnail.jpg",
    capitalProject: "/images/industries/technical-support.png",
    powerService: "/images/industries/benefits.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  industrialSuppliesPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Industrial%20%26%20Facilities%20Supplies/Industrial-and-Facilities-Supplies-Thumbnail.webp",
    resources: "/images/air%20lift/resources.jpg",
  },

  instrumentationPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_thumb.webp",
    gauges: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_gauges_thumb.webp",
    fittings: "/images/Instrumentation%20and%20Measurement/Instrumentation-and-measurement_fittings_thumb.webp",
    process: "/images/Instrumentation%20and%20Measurement/Crestwood-LACT-1420000014_08.webp",
  },

  paintsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Paints%20and%20Coatings/paint-and-coatings-thumbnail.webp",
    coatings: "/images/Paints%20and%20Coatings/HP_coatings_thumb.webp",
    stains: "/images/Paints%20and%20Coatings/Paints_and_stains_thumb.webp",
    equipment: "/images/Paints%20and%20Coatings/Painting_equipment_thumb.webp",
    tank: "/images/Paints%20and%20Coatings/painting-field-erected-tanks-from-harsh-environmental-conditions.webp",
    benefits: "/images/Paints%20and%20Coatings/CE%20Franklin%20Edmonton%20-043.webp",
  },

  pvfPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/PVF/PVF.webp",
    quality: "/images/PVF/Quality-inspection-%20with-Niton-XL2-XRF-Analyzer.webp",
    whyChoose: "/images/PVF/Pipe-fittings-flanges-inventory.webp",
  },

  powerGenerationPage: {
    // Local, RNOW-provided photo — not a temporary reference image.
    hero: "/images/Power%20Generation/power-generation-thumbnail.webp",
  },

  processPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Process%20and%20Production%20Equipment/Process-Equipment_Thumbnails.webp",
    resources: "/images/air%20lift/resources.jpg",
  },

  pumpsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Pump%20and%20pac%20kages/Pumps_thumbnail.webp",
    resources: "/images/air%20lift/resources.jpg",
  },

  safetyPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Safety%20and%20PPE/safety-and-ppe-thumbnail.webp",
    store: "/images/industries/closing.png",
  },

  toolsPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/Tools/Tools-and-Welding_Thumbnails.jpg",
    catalog: "/images/Tools/73ed91ba-5c17-47e1-84e1-477de04bf690.png",
  },

  supplyChainPage: {
    // Local, RNOW-provided images — not temporary reference images.
    flow: "/images/Supply%20chain%20management/dd66bed0-487e-470a-9f46-7ff349d2119a.png",
    methodology: "/images/Supply%20chain%20management/scs-methodology.png",
    accessNow: "/images/Supply%20chain%20management/AccessNOW_story-product-collage.webp",
    materials: "/images/Supply%20chain%20management/Materials-Management-Thumbnail.webp",
    sourcing: "/images/Supply%20chain%20management/Sourcing-and-Procurement-Thumbnail.webp",
  },

  engineeringPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    whyBackground: "/images/Engineeering%20Design%20and%20Fabrication/Casper_fab_02.jpg",
    capabilities: "/images/Engineeering%20Design%20and%20Fabrication/engineered-packages-vessels-and-modular-solutions-02-enhance.webp",
    excellence: "/images/Engineeering%20Design%20and%20Fabrication/Tank-Battery-Design-Engineering-Challenges-800x500.webp",
    closing: "/images/Engineeering%20Design%20and%20Fabrication/engineering-design-services-thumbnail.jpg",
  },

  safetyServicesPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Safety%20Services/SS_turnaround_shutdown_support_thumb.webp",
    fleet: "/images/solutions/oilfield-team.png",
    resources: "/images/air%20lift/resources.jpg",
  },

  valveActuationPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Valve%20Actuation%20and%20Automation/TVS-field-tech.jpg",
    partnerBackground: "/images/Valve%20Actuation%20and%20Automation/TVS-8.jpg",
    lifeCycle: "/images/Valve%20Actuation%20and%20Automation/TVS-life-cycle.webp",
    optimize: "/images/Valve%20Actuation%20and%20Automation/TVS-13.webp",
    carousel: [
      "/images/Valve%20Actuation%20and%20Automation/tvs-modification-end-connection-alteration.jpeg",
      "/images/Valve%20Actuation%20and%20Automation/TVS-2.jpg",
      "/images/Valve%20Actuation%20and%20Automation/TVS-7.jpg",
      "/images/Valve%20Actuation%20and%20Automation/TVS-10.jpg",
      "/images/Valve%20Actuation%20and%20Automation/TVS-12.jpg",
      "/images/Valve%20Actuation%20and%20Automation/TVS-14.jpg",
    ],
  },

  artificialLiftOpsPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/air%20lift/Artificial_Lift_Systems.webp",
    rrl: "/images/Artificial%20Lift/artificial-lift-thumbnail.jpg",
    pcp: "/images/Artificial%20Lift/progressive-cavity-systems-thumbnail.jpg",
    automation: "/images/Artificial%20Lift/well-automation-control-thumbnail.jpg",
    flexFlow: "/images/Artificial%20Lift/Flex_Flow_HPS-trailer.jpg",
    technical: "/images/air%20lift/Artificial-lift_truck-pumpjack_thumb.png",
    trusted: "/images/Artificial%20Lift/Odessa_0397_ALS_with_cover_on_rod_lift.jpeg",
  },

  carbonPage: {
    // Local, RNOW-provided photos — not temporary reference images.
    hero: "/images/Carbon%20management/hero.png",
    ecoVapor: "/images/Carbon%20management/EcoVapor_ZerO2-E25-render.webp",
    airCompressor: "/images/Carbon%20management/Instrument-air-compressor-skid_thumb.webp",
    vru: "/images/Process%20and%20Production%20Equipment/VRU_Thumbnails.webp",
    lowEmissions: "/images/Carbon%20management/Low-emissions_products_thumb.webp",
    sustainable: "/images/Carbon%20management/Pearland-pipe-yard.webp",
  },

  energyTransitionPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/Energy%20Transition/Energy_transition_3-steps.webp",
    ccus: "/images/Energy%20Transition/02c246e1-f048-4a13-b31b-9808d48fba56.png",
    hydrogen: "/images/Energy%20Transition/dd7eb0ee-dac1-4390-a9ca-fb9fa99a9c38.png",
    fuels: "/images/industries/hero.png",
  },

  onshoreDrillingPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/industries/hero.png",
    rigDiagram: "/images/Onshore%20Drilling/oildrill.png",
    accessNow: "/images/Onshore%20Drilling/AccessNOW_story-product-collage.webp",
    devices: "/images/software.png",
    products: "/images/Onshore%20Drilling/drilling-and-completions-thumbnail.jpg",
  },

  offshoreDrillingPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/industries/hero.png",
    diagram: "/images/Offshore%20Drilling/RNOW-Offshore-Rigs-that-are-supplied-with-products.jpg",
    devices: "/images/software.png",
    platform: "/images/Offshore%20Drilling/Container-Ship-Heading-to-Port.jpg",
  },

  midstreamPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/Midstream/oil%20and%20gas.jpeg",
    diagram: "/images/Midstream/Midstream-transmission-project.webp",
    pvf: "/images/Midstream/PVF.jpg",
    pumps: "/images/Midstream/Pumps_thumbnail.jpg",
    production: "/images/Midstream/Tank-Battery-Test-Separator-and-Pipe-Racks.jpg",
    instrumentation: "/images/Midstream/instrumentation-and-measurement-thumbnail.jpg",
    flexFlow: "/images/Midstream/Flex_Flow_HPS-trailer-tanks.jpg",
    ecoVapor: "/images/Midstream/EcoVapor-Mobile-ZerO-field-trailer.webp",
    serviceTruck: "/images/Midstream/Odessa-Pumps-Field-Service-Truck.webp",
    devices: "/images/software.png",
  },

  miningPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/Mining/Mining%20hero.jpeg",
    supplyModel: "/images/Mining/Mining_DNOW-supply-chain-model.webp",
    rental: "/images/Mining/rental-pump-fleet-thumbnail.jpg",
    electrical: "/images/Mining/MacLean-Electrical-Product-Categories-Thumbnail.jpg",
    flexFlow: "/images/Mining/Flex_Flow_HPS-water-transfer.jpg",
    why: "/images/Mining/Whhy%20RNOW.jpg",
    handshake: "/images/Mining/Mining_handshake.webp",
  },

  utilitiesPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/downstream%20/hero.webp",
    pipeline: "/images/downstream%20/utilites-gas-distribution-pipeline.webp",
    safety: "/images/Safety%20Services/rnow.png",
    devices: "/images/software.png",
    closing: "/images/solutions/team-tablet.png",
  },

  tankBatteriesPage: {
    // Local, RNOW-provided images — not temporary reference images.
    hero: "/images/Tank%20batteries/Heero.png",
    experts: "/images/industries/technical-support.png",
    engineering: "/images/Engineeering%20Design%20and%20Fabrication/engineered-packages-vessels-and-modular-solutions-02-enhance.webp",
    pumps: "/images/Pump%20and%20pac%20kages/Pumps_thumbnail.webp",
    flexFlow: "/images/Pump%20and%20pac%20kages/Rental-pumps_Flex-Flow-HPS.jpg",
    ecoVapor: "/images/Carbon%20management/EcoVapor_ZerO2-E25-render.webp",
    store: "/images/software.png",
    partner: "/images/solutions-page/partner.png",
  },

  finalCta: unsplash("1565008447742-97f6f38c985c", { width: 2400 }),

  ecommerceCta: unsplash("1524230507669-5ff97982bb5e", { width: 2000 }),

  industries: {
    oilGas: unsplash("1516937941344-00b4e0337589", { width: 1400 }),
    energy: unsplash("1509391366360-2e959784a276", { width: 1400 }),
    manufacturing: unsplash("1581092160607-ee22621dd758", { width: 1400 }),
  },

  solutions: {
    procurement: unsplash("1517502884422-41eaead166d4", { width: 1600 }),
    supplyChain: unsplash("1494412574643-ff11b0a5c1c3", { width: 1600 }),
    projectSupply: unsplash("1565008447742-97f6f38c985c", { width: 1600 }),
    technicalSupport: unsplash("1503387837-b154d5074bd2", { width: 1600 }),

    // Local, RNOW-provided photos — not temporary reference images.
    partnerBanner: "/images/solutions/oilfield-team.png",
    gridPortrait: "/images/solutions/warehouse-portrait.png",
    gridFacility: "/images/solutions/facility-red.png",
    gridTablet: "/images/solutions/team-tablet.png",
  },

  news: {
    // Local, RNOW-provided images — not temporary reference images.
    sustainabilityReport: "/images/news/sustainability-report.png",
    wholesalerMagazine: "/images/news/wholesaler-magazine.webp",
    mdmTopDistributors: "/images/news/mdm-top-distributors.webp",
    supplyHouseTimesPremier150: "/images/news/supply-house-times-premier-150.jpg",
  },
} as const;
