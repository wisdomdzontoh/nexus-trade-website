export interface SectorHighlight {
  stat: string;
  label: string;
}

export interface SectorOpportunityArea {
  name: string;
  description: string;
}

export interface Sector {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: string;
  highlights: SectorHighlight[];
  opportunityAreas: SectorOpportunityArea[];
  keyAdvantages: string[];
  relatedOpportunitySlugs: string[];
}

export const sectors: Sector[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    tagline: "Feed West Africa. Build a lasting agricultural enterprise.",
    description:
      "Ghana's fertile land, reliable rainfall, and pro-investment agricultural policy make it one of West Africa's most compelling destinations for modern farming and agro-processing investment.",
    fullDescription:
      "Agriculture employs approximately 44% of Ghana's workforce and contributes 20% of GDP, yet the sector is significantly underinvested in mechanisation, processing, and value-chain infrastructure. This gap represents a major opportunity for foreign investors seeking high-return plays in a stable, resource-rich environment.\n\nGhana produces cocoa, cassava, rice, maize, yam, plantain, palm oil, and a wide range of horticultural products. ECOWAS market access gives Ghanaian producers preferential entry to a 450 million-person consumer base. The government's Planting for Food and Jobs initiative provides subsidised inputs and technical support to large-scale commercial farms.",
    image: "/images/agriculture.jpg",
    icon: "Sprout",
    highlights: [
      { stat: "44%", label: "of workforce in agriculture" },
      { stat: "20%", label: "contribution to GDP" },
      { stat: "$300M+", label: "rice imports annually — domestic gap" },
      { stat: "450M", label: "ECOWAS consumer market access" },
    ],
    opportunityAreas: [
      {
        name: "Rice Cultivation & Processing",
        description:
          "Large-scale irrigated rice farming addressing Ghana's $300M+ annual import gap, with processing for domestic and West African distribution.",
      },
      {
        name: "Poultry & Livestock",
        description:
          "Integrated poultry operations (broiler and layer) with feed milling, targeting Accra and Kumasi's fast-growing urban food demand.",
      },
      {
        name: "Cocoa Value Addition",
        description:
          "Mid-scale processing of raw cocoa beans into butter, liquor, and powder for export to European and Asian confectionery markets.",
      },
      {
        name: "Horticulture & Fresh Produce",
        description:
          "Export-oriented horticulture (vegetables, fruits) targeting EU and Middle Eastern markets with cold-chain infrastructure.",
      },
      {
        name: "Aquaculture",
        description:
          "Tilapia and catfish farming in Ghana's freshwater systems, serving the domestic fish protein gap and West African export markets.",
      },
      {
        name: "Cashew Processing",
        description:
          "Value-addition processing of Ghana's cashew crop — kernels, cashew apple juice, and by-products for export.",
      },
    ],
    keyAdvantages: [
      "Two rainy seasons support double-cropping in most regions",
      "GIPC sector designation: expedited registration and land facilitation",
      "Planting for Food and Jobs programme subsidises inputs for commercial farms",
      "ECOWAS free trade agreement — duty-free export to 15 member states",
      "World Bank-funded irrigation schemes available for commercial operators",
      "Ghana Free Zones Authority: 10-year tax holiday for agro-processing exporters",
    ],
    relatedOpportunitySlugs: [
      "rice-cultivation-northern-region",
      "poultry-integrated-farm",
      "cocoa-processing-plant",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Build for Africa from Ghana's industrial heartland.",
    description:
      "Ghana's stable business environment, English-speaking workforce, and port connectivity position it as West Africa's most investable manufacturing base — with preferential market access to the US, EU, and ECOWAS.",
    fullDescription:
      "Manufacturing accounts for approximately 10% of Ghana's GDP and is a priority growth sector under the government's Ghana BEYOND AID agenda. The country's strategic position — Tema Port is one of West Africa's most efficient deep-water ports, and the national road and rail network links it to six landlocked neighbouring countries — makes it a natural hub for sub-regional manufacturing and distribution.\n\nKey incentives for manufacturers include free zone status (10-year tax holiday, duty-free equipment imports), AGOA duty-free access to the US market, and the EU-Ghana Economic Partnership Agreement. Ghana's labour productivity and English-language advantage make it competitive with rising-cost Asian manufacturing zones.",
    image: "/images/manufacturing.jpg",
    icon: "Factory",
    highlights: [
      { stat: "10%", label: "of GDP from manufacturing" },
      { stat: "AGOA", label: "duty-free US market access" },
      { stat: "6", label: "landlocked countries rely on Tema Port" },
      { stat: "40-60%", label: "lower labour costs vs. Asia" },
    ],
    opportunityAreas: [
      {
        name: "Garment & Textile",
        description:
          "CMT and full-package garment manufacturing leveraging AGOA duty-free access to the US and EU EPA preferences.",
      },
      {
        name: "Steel Fabrication & Metals",
        description:
          "Structural steel, rebar, and metal fabrication for Ghana's construction sector and sub-regional export.",
      },
      {
        name: "Pharmaceutical Manufacturing",
        description:
          "Generic drug manufacturing for the Ghanaian and West African market — a sector identified as a national priority under the Africa Medicines Agency.",
      },
      {
        name: "Plastics & Packaging",
        description:
          "Packaging solutions for Ghana's growing food and beverage sector, reducing dependence on imported packaging materials.",
      },
      {
        name: "Electronics Assembly",
        description:
          "Low-cost electronics assembly and consumer goods manufacturing for the fast-growing Ghanaian and ECOWAS consumer market.",
      },
      {
        name: "Furniture & Wood Products",
        description:
          "Value-added wood processing and furniture manufacturing leveraging Ghana's managed timber resources.",
      },
    ],
    keyAdvantages: [
      "Tema Port: one of West Africa's most efficient deep-water container ports",
      "AGOA and EU EPA: duty-free export access to two of the world's largest markets",
      "English-speaking, young labour force — easy for international management teams",
      "Reliable power: Tema and Accra Industrial Zones have dedicated industrial power",
      "Ghana Free Zones Act: 10-year income tax holiday, no restrictions on profit repatriation",
      "GhanaXim Export Development Fund: low-interest financing for export manufacturers",
    ],
    relatedOpportunitySlugs: [
      "garment-textile-factory",
      "steel-fabrication-plant",
    ],
  },
  {
    slug: "industrial-clusters",
    name: "Industrial Clusters",
    tagline: "Invest in Ghana's purpose-built industrial future.",
    description:
      "Ghana's government-backed industrial parks and special economic zones offer investors serviced plots, pre-installed infrastructure, and streamlined regulatory access — reducing setup time and capital expenditure significantly.",
    fullDescription:
      "Ghana is actively developing a network of industrial zones and special economic clusters designed to attract anchor investors in strategic sectors. These zones provide investors with plug-and-play industrial infrastructure — roads, power substations, water, fibre connectivity, and customs bonded warehousing — significantly reducing the time and capital required to establish operations.\n\nKey zones include the Tema Industrial Area, the Accra Industrial Zone, the Kumasi Industrial Area, and emerging agro-processing parks in the Brong-Ahafo and Northern regions. All major zones operate under the Ghana Free Zones Authority or the Ghana Investment Promotion Centre, offering a consistent, investor-friendly regulatory framework.",
    image: "/images/industrial.jpg",
    icon: "Building2",
    highlights: [
      { stat: "10yr", label: "income tax holiday in Free Zones" },
      { stat: "100%", label: "foreign ownership permitted" },
      { stat: "Plug & Play", label: "infrastructure in industrial parks" },
      { stat: "ECOWAS Hub", label: "sub-regional distribution from Tema" },
    ],
    opportunityAreas: [
      {
        name: "Agro-Processing Parks",
        description:
          "Anchor investor opportunities in government-backed agro-processing clusters, targeting cashew, soybean, and cassava value chains.",
      },
      {
        name: "Light Manufacturing Zones",
        description:
          "Ready-to-occupy industrial facilities in Accra and Tema for light manufacturing, assembly, and packaging operations.",
      },
      {
        name: "Cold Chain & Logistics Hubs",
        description:
          "Temperature-controlled storage and distribution facilities serving Ghana's growing fresh produce export sector.",
      },
      {
        name: "Technology & Digital Hubs",
        description:
          "Tech park and digital economy infrastructure in Accra's growing tech district, targeting BPO and software development firms.",
      },
      {
        name: "Renewable Energy Industrial Parks",
        description:
          "Solar-powered industrial zones for energy-intensive manufacturers seeking reliable, low-cost green power.",
      },
      {
        name: "Petroleum & Petrochemicals",
        description:
          "Downstream petroleum processing and petrochemical industrial cluster near Takoradi, leveraging Ghana's offshore oil production.",
      },
    ],
    keyAdvantages: [
      "Government-installed infrastructure reduces investor capex by 30–50%",
      "Free Zones Authority one-stop-shop: all permits and licences in one location",
      "100% foreign equity permitted in Free Zone enterprises",
      "Bonded warehouse status — import inputs duty-free, pay on domestic sale only",
      "Proximity to Tema and Takoradi ports — direct access to international shipping",
      "Preferential land rates for anchor investors in government-designated zones",
    ],
    relatedOpportunitySlugs: [
      "agro-processing-industrial-park",
      "garment-textile-factory",
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
