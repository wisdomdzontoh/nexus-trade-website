export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // About NexusTrade
  {
    category: "About NexusTrade",
    question: "What exactly does NexusTrade Ghana do?",
    answer:
      "NexusTrade Ghana is an investment facilitation company. We identify, evaluate, and present high-potential investment opportunities in Ghana's manufacturing, industrial, and agricultural sectors to international investors. We act as a bridge — providing on-the-ground knowledge, local relationships, and structured opportunity profiles — so that investors can make informed decisions and move forward with confidence. We do not manage investments, hold funds, or act as a fund manager.",
  },
  {
    category: "About NexusTrade",
    question: "Is NexusTrade Ghana a registered company?",
    answer:
      "Yes. NexusTrade Ghana Limited is a registered company in Ghana, operating under the Companies Act, 2019 (Act 992). Our registration details are available on request and can be independently verified through the Office of the Registrar of Companies.",
  },
  {
    category: "About NexusTrade",
    question: "What countries do you work with?",
    answer:
      "We work with investors from any country globally, with a particular focus on investors from China, other Asian markets, Europe, North America, and the African diaspora. Our team has experience facilitating investment discussions across multiple jurisdictions and time zones.",
  },
  {
    category: "About NexusTrade",
    question: "What does NexusTrade charge for its services?",
    answer:
      "Our fee structure varies depending on the scope of facilitation required. For initial enquiries and opportunity introductions, there is no upfront charge. Detailed facilitation services — including site visits, regulatory navigation, and legal introductions — are subject to an agreed service fee. Please contact us to discuss your specific requirements.",
  },
  // The Investment Process
  {
    category: "The Investment Process",
    question: "How do I get started as an investor with NexusTrade?",
    answer:
      "The simplest first step is to complete our contact form or reach out directly via email or WhatsApp. Tell us your sector of interest, your approximate investment range, and your timeline. We will schedule an initial consultation call to understand your goals and identify which opportunities may be the best fit.",
  },
  {
    category: "The Investment Process",
    question: "How long does it typically take to complete an investment in Ghana?",
    answer:
      "Timeline varies by sector and investment size. For a straightforward GIPC-registered investment with a local JV partner, the initial registration and setup phase typically takes 3–6 months from first contact to operational readiness. Larger investments requiring land acquisition, infrastructure development, or regulatory approvals may take 12–24 months to full operations. We provide a detailed timeline estimate as part of our initial consultation.",
  },
  {
    category: "The Investment Process",
    question: "What is the minimum investment amount NexusTrade works with?",
    answer:
      "GIPC requires a minimum foreign investment of $200,000 USD for joint ventures with a Ghanaian partner, and $500,000 USD for wholly foreign-owned enterprises. NexusTrade typically focuses on opportunities in the $1,000,000 to $30,000,000 range, where we can add the most value.",
  },
  {
    category: "The Investment Process",
    question: "Can I visit Ghana to see the opportunity before committing?",
    answer:
      "Absolutely — and we strongly encourage it. NexusTrade arranges structured site visits for serious investors, including visits to specific opportunity locations, meetings with regulatory bodies (GIPC, EPA, Lands Commission), and introductions to legal and financial advisors. We can facilitate a comprehensive investor roadshow trip to Ghana.",
  },
  // Legal & Regulatory
  {
    category: "Legal & Regulatory",
    question: "Can a foreign investor own 100% of a business in Ghana?",
    answer:
      "Yes, in most sectors. Ghana's Investment Act (2013, Act 865) permits 100% foreign ownership of companies registered under GIPC. The only exceptions are certain reserved sectors (e.g., retail trading under a certain threshold, certain professional services) where local participation is required. Manufacturing, agriculture, and industrial sectors are generally fully open to foreign ownership.",
  },
  {
    category: "Legal & Regulatory",
    question: "What is GIPC and why does it matter?",
    answer:
      "The Ghana Investment Promotion Centre (GIPC) is the government body responsible for promoting and facilitating investment in Ghana. Foreign investors are required to register with GIPC to operate legally in Ghana. GIPC registration also unlocks key protections including guarantees against expropriation, free transfer of profits, and access to Ghana's investment dispute resolution mechanisms.",
  },
  {
    category: "Legal & Regulatory",
    question: "Can I repatriate profits from Ghana?",
    answer:
      "Yes. Ghana's investment laws guarantee foreign investors the right to freely repatriate their profits, dividends, fees, and capital after payment of applicable taxes. There are no restrictions on profit repatriation for GIPC-registered investors. Free Zone investors may repatriate 100% of profits with no restrictions.",
  },
  {
    category: "Legal & Regulatory",
    question: "What happens if there is a dispute?",
    answer:
      "Ghana's investment legislation includes investor protection provisions and access to international arbitration. Ghana is a signatory to the ICSID Convention (International Centre for Settlement of Investment Disputes) and the New York Convention. Bilateral investment treaties (BITs) between Ghana and many countries provide additional protections.",
  },
  // Land & Property
  {
    category: "Land & Property",
    question: "Can foreign investors own land in Ghana?",
    answer:
      "Under Ghana's land laws, foreigners cannot freehold own land, but they can lease land for periods of up to 50 years (renewable). In practice, virtually all commercial and agricultural land use by foreign investors is structured as long-term leases, which confer full use rights for the lease period. The Lands Commission regulates all land transactions and NexusTrade works with licensed land professionals.",
  },
  {
    category: "Land & Property",
    question: "How secure are land titles in Ghana?",
    answer:
      "Ghana has a dual land system (customary and state land) which historically created title complexity. However, the Land Act 2020 significantly reformed the registration system, and the Lands Commission now operates electronic title registration. NexusTrade works with experienced land law professionals to conduct full due diligence on any land proposed for investment. We recommend professional legal advice before any land transaction.",
  },
  // Tax & Incentives
  {
    category: "Tax & Incentives",
    question: "What tax incentives are available for investors in Ghana?",
    answer:
      "Key incentives include: (1) Free Zone enterprises: 10-year income tax holiday, no import duty on equipment and raw materials; (2) Agriculture investors: 10-year income tax holiday for agro-processing, 5-year holiday for primary agriculture; (3) Manufacturing: accelerated depreciation allowances; (4) Royalties and management fees: withholding tax rates capped under double taxation treaties; (5) VAT: zero-rated on exported goods. The specific incentives available depend on the sector, location, and investment structure.",
  },
  {
    category: "Tax & Incentives",
    question: "What is the corporate income tax rate in Ghana?",
    answer:
      "Ghana's standard corporate income tax rate is 25%. Sector-specific rates apply: non-oil mining companies pay 35%, manufacturing companies in certain regions may qualify for reduced rates (8–15%), and companies in priority agricultural zones may qualify for a 5–10 year tax holiday. Please consult a qualified Ghanaian tax advisor for advice specific to your situation.",
  },
  {
    category: "Tax & Incentives",
    question: "Are there special incentives for manufacturing in export free zones?",
    answer:
      "Yes. Under the Ghana Free Zones Act (1995, Act 504), Free Zone enterprises benefit from: (1) 10-year income tax holiday (maximum 8% rate thereafter); (2) No import duty on equipment, machinery, raw materials, or intermediate goods; (3) No export duty on goods produced in the zone; (4) 100% foreign ownership; (5) No restrictions on profit repatriation; (6) Streamlined customs processing.",
  },
  // Practical
  {
    category: "Practical Matters",
    question: "What language is business conducted in?",
    answer:
      "English is Ghana's official business language and is used across all government, legal, and commercial interactions. This is a significant practical advantage for English-speaking investors compared to francophone West African markets.",
  },
  {
    category: "Practical Matters",
    question: "What is the business currency in Ghana?",
    answer:
      "Ghana's official currency is the Ghana Cedi (GHS). USD is widely accepted for large commercial transactions, and all GIPC-registered investments can be denominated in USD. NexusTrade displays all investment figures in both USD and GHS. Currency exchange services are available through all major commercial banks.",
  },
  {
    category: "Practical Matters",
    question: "Is Ghana politically stable?",
    answer:
      "Ghana is one of Africa's most established democracies, with peaceful transfers of power since 1992. It has been consistently rated as one of the most politically stable countries in West Africa by indices including the Mo Ibrahim Governance Index and the World Bank Government Effectiveness measure. Ghana's democratic institutions, independent judiciary, and free press are internationally recognised.",
  },
];

export const faqCategories = [
  "About NexusTrade",
  "The Investment Process",
  "Legal & Regulatory",
  "Land & Property",
  "Tax & Incentives",
  "Practical Matters",
];

export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
