export type Sector = "agriculture" | "manufacturing" | "industrial-clusters";

export interface Opportunity {
  slug: string;
  title: string;
  sector: Sector;
  sectorLabel: string;
  region: string;
  investmentRangeUSD: string;
  investmentRangeGHS: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  galleryImages?: string[];
  featured: boolean;
}

export const opportunities: Opportunity[] = [
  {
    slug: "rice-cultivation-northern-region",
    title: "Large-Scale Rice Cultivation & Processing",
    sector: "agriculture",
    sectorLabel: "Agriculture",
    region: "Northern Region, Ghana",
    investmentRangeUSD: "$2,000,000 – $8,000,000",
    investmentRangeGHS: "₵30,000,000 – ₵120,000,000",
    shortDescription:
      "A high-yield irrigated rice farming and processing venture across 5,000 acres in Ghana's fertile Northern Region, targeting domestic consumption and West African export markets.",
    fullDescription:
      "Ghana imports over $300 million in rice annually, creating a substantial domestic demand gap. This opportunity involves the development of irrigated rice farmland in the Northern Region — a zone with ideal growing conditions, access to the White Volta irrigation system, and established road infrastructure.\n\nThe investment covers land preparation, irrigation system installation, modern combine harvesting equipment, and a processing mill to add value before distribution. The Northern Region government offers facilitation support for land acquisition and investor liaison.",
    highlights: [
      "5,000 acres of arable land available for lease (25-year terms)",
      "Proximity to the White Volta irrigation scheme reduces water dependency",
      "Government-backed FASDEP II agricultural programme provides technical support",
      "Processing mill capacity: 2 tonnes/hour — targets domestic supermarket chains and export",
      "Estimated payback period: 5–7 years at full production",
      "Partnership model: JV with local cooperative or full foreign ownership via GIPC",
    ],
    image: "/images/agriculture/rice-farming-africa.jpg",
    galleryImages: [
      "/images/agriculture/ghana-rice-farm.jpg",
      "/images/agriculture/rice-farm.jpg",
      "/images/agriculture/green-fields.jpg",
      "/images/agriculture/agriculture.jpg",
    ],
    featured: true,
  },
  {
    slug: "poultry-integrated-farm",
    title: "Integrated Poultry Farm & Feed Mill",
    sector: "agriculture",
    sectorLabel: "Agriculture",
    region: "Ashanti Region, Ghana",
    investmentRangeUSD: "$1,000,000 – $4,000,000",
    investmentRangeGHS: "₵15,000,000 – ₵60,000,000",
    shortDescription:
      "A vertically integrated poultry operation combining layer and broiler production with an on-site feed mill, targeting Kumasi's fast-growing urban food market.",
    fullDescription:
      "Poultry consumption in Ghana has grown by over 8% annually for the past decade, driven by urbanisation and rising protein demand. The majority of supply is met by imports from the US, EU, and Brazil — creating a compelling opportunity for domestic production.\n\nThis investment covers the construction of modern poultry houses (biosecure, temperature-controlled), a feed mill to reduce input costs by approximately 30%, and cold-chain processing infrastructure. The Ashanti Region location gives direct access to Kumasi's wholesale markets and Accra via the N6 corridor.",
    highlights: [
      "Target capacity: 200,000 birds per cycle (broilers); 50,000 layers",
      "On-site feed mill cuts production costs by ~30% vs. purchased feed",
      "Existing cold storage infrastructure available for lease at site",
      "Ashanti Region investor incentives include fast-track land registration",
      "Supply agreement discussions with two national supermarket chains available",
      "Technical partnerships available with international poultry management firms",
    ],
    image: "/images/agriculture/poultry-farm-interior.jpg",
    galleryImages: [
      "/images/agriculture/poultry.jpg",
      "/images/agriculture/poultry-farm.jpg",
      "/images/agriculture/food-processing.jpg",
    ],
    featured: true,
  },
  {
    slug: "cocoa-processing-plant",
    title: "Cocoa Processing & Export Facility",
    sector: "agriculture",
    sectorLabel: "Agriculture",
    region: "Western Region, Ghana",
    investmentRangeUSD: "$5,000,000 – $15,000,000",
    investmentRangeGHS: "₵75,000,000 – ₵225,000,000",
    shortDescription:
      "A mid-scale cocoa processing plant converting raw beans to semi-finished products (cocoa butter, liquor, powder) for export to European and Asian confectionery markets.",
    fullDescription:
      "Ghana is the world's second-largest cocoa producer, yet the majority of its cocoa is exported as raw beans with minimal value addition — a longstanding gap the government is actively incentivising investors to close.\n\nThis opportunity involves establishing a grinding and processing facility in the Western Region, adjacent to major cocoa-growing communities. Raw bean supply is secured through the Ghana Cocoa Board (COCOBOD) licensed buying agents. Processed products (butter, liquor, powder, cake) command a 40–80% premium over raw bean exports.",
    highlights: [
      "COCOBOD licensed supply chain — structured, regulated, reliable input",
      "Processing capacity: 10,000 MT/year at Phase 1, scalable to 30,000 MT",
      "Export incentives: zero VAT on exported processed cocoa products",
      "Free Zone designation available — full profit repatriation, 10-year tax holiday",
      "Proximity to Takoradi Port — Ghana's main commodity export hub",
      "Pre-qualified buyers in Europe and Asia available for introductions",
    ],
    image: "/images/coacoa/cocoa1.png",
    galleryImages: [
      "/images/coacoa/cocoa2.png",
      "/images/coacoa/cocoa3.png",
      "/images/coacoa/cocoa-pods.jpg",
      "/images/coacoa/cocoa.jpg",
      "/images/agriculture/agriculture.jpg",
      "/images/agriculture/food-processing.jpg",
    ],
    featured: true,
  },
  {
    slug: "garment-textile-factory",
    title: "Garment & Textile Manufacturing Hub",
    sector: "manufacturing",
    sectorLabel: "Manufacturing",
    region: "Greater Accra Region, Ghana",
    investmentRangeUSD: "$2,500,000 – $10,000,000",
    investmentRangeGHS: "₵37,500,000 – ₵150,000,000",
    shortDescription:
      "A modern garment and textile facility within the Accra Industrial Zone, leveraging AGOA trade preferences for duty-free export of finished garments to the US market.",
    fullDescription:
      "Ghana is one of only a few African countries with both strong AGOA eligibility and an established textile tradition (kente, wax print). This manufacturing opportunity involves establishing a cut-make-trim (CMT) garment facility within the Accra Industrial Zone — a purpose-built industrial estate with pre-installed power, water, and logistics infrastructure.\n\nThe facility targets the US and EU export markets, exploiting duty-free access under AGOA and the EU-Ghana EPA. Labour costs are 40–60% below Asian competitors, and Ghana's English-speaking workforce reduces management friction significantly.",
    highlights: [
      "AGOA duty-free access to the US market — significant cost advantage over Asian suppliers",
      "Pre-installed industrial infrastructure in Accra Industrial Zone — reduces setup time",
      "Workforce: 200–500 direct jobs; Ghana's garment labour costs competitive vs. Asia",
      "Free Zone benefits available: tax holiday, duty-free imports of equipment and materials",
      "Proximity to Tema Port for export logistics",
      "Technical textile training partnerships with Textile Design Institute of Ghana",
    ],
    image: "/images/manufacturing/garment-factory.jpg",
    featured: true,
  },
  {
    slug: "agro-processing-industrial-park",
    title: "Agro-Processing Industrial Park — Phase 2",
    sector: "industrial-clusters",
    sectorLabel: "Industrial Clusters",
    region: "Brong-Ahafo Region, Ghana",
    investmentRangeUSD: "$10,000,000 – $30,000,000",
    investmentRangeGHS: "₵150,000,000 – ₵450,000,000",
    shortDescription:
      "An anchor investor opportunity within a government-backed agro-processing industrial park in the Brong-Ahafo Region, targeting domestic value-chain integration for cashew, soybean, and cassava.",
    fullDescription:
      "The Brong-Ahafo Agro-Processing Park is a GOG-initiated industrial cluster designed to attract anchor investors in food processing, packaging, and agricultural inputs. Phase 1 infrastructure (roads, power substation, water, fibre) is complete. Phase 2 seeks anchor tenants in cashew processing, soybean crushing, and cassava starch production.\n\nThe park operates under free zone licensing — investors benefit from a 10-year income tax holiday, duty-free equipment imports, and streamlined GIPC registration. The region produces over 60% of Ghana's cashew crop and is underserved by processing capacity.",
    highlights: [
      "Serviced plots from 2 to 50 acres — purchase or 50-year lease available",
      "10-year income tax holiday under Ghana Free Zones Act",
      "Government-sponsored road and utilities infrastructure already installed",
      "Guaranteed raw material supply agreements with regional farmer cooperatives",
      "On-site customs bonded warehouse for export goods",
      "GIPC one-stop-shop facilitation for all permits and registrations",
    ],
    image: "/images/agriculture/food-processing.jpg",
    galleryImages: [
      "/images/industrial/tema-port.jpg",
      "/images/industrial/port-containers.jpg",
      "/images/agriculture/agri-processing.jpg",
      "/images/city-buildings/building1.png",
      "/images/shea-butter/shea-process.jpg",
    ],
    featured: false,
  },
  {
    slug: "steel-fabrication-plant",
    title: "Steel Fabrication & Structural Products Plant",
    sector: "manufacturing",
    sectorLabel: "Manufacturing",
    region: "Tema Metropolitan Area, Ghana",
    investmentRangeUSD: "$3,000,000 – $12,000,000",
    investmentRangeGHS: "₵45,000,000 – ₵180,000,000",
    shortDescription:
      "A steel fabrication facility in Tema serving Ghana's construction boom — producing structural steel, roofing sheets, rebar, and metal fabrications for the domestic and sub-regional market.",
    fullDescription:
      "Ghana's ongoing construction boom — driven by housing, roads, and commercial infrastructure — creates sustained demand for structural steel and fabricated metal products. Ghana currently imports the majority of its structural steel from China and the EU, and local fabrication capacity is significantly below demand.\n\nThis opportunity involves establishing a hot-rolled steel fabrication plant in the Tema Industrial Area, Ghana's primary heavy industry zone adjacent to the port. Scrap metal feedstock is increasingly available locally, and billets can be cost-effectively imported through Tema Port.",
    highlights: [
      "Tema Port adjacency — competitive import costs for raw billets and scrap",
      "Domestic construction sector demand growing at 12% per annum",
      "Import substitution play — current imports of structural steel exceed $400M/year",
      "Industrial zoning in Tema with 24-hour industrial power supply",
      "Access to ECOWAS market of 450M consumers for sub-regional export",
      "Strong local procurement demand from government infrastructure programmes",
    ],
    image: "/images/manufacturing/manufacturing.jpg",
    galleryImages: [
      "/images/industrial/tema-port.jpg",
      "/images/industrial/port-industrial.jpg",
      "/images/city-buildings/building2.png",
      "/images/city-buildings/accra-business.jpg",
    ],
    featured: false,
  },
];

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return opportunities.find((o) => o.slug === slug);
}

export function getOpportunitiesBySector(sector: Sector): Opportunity[] {
  return opportunities.filter((o) => o.sector === sector);
}

export function getFeaturedOpportunities(): Opportunity[] {
  return opportunities.filter((o) => o.featured).slice(0, 4);
}
