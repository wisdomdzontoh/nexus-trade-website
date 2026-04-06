import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { opportunities } from "@/lib/data/opportunities";

export const metadata: Metadata = {
  title: "Why Invest in Ghana's Agriculture Sector",
  description:
    "Ghana's agriculture sector offers international investors a rare combination of underserved demand, fertile land, and favourable policy. Here is the case for agricultural investment in Ghana.",
};

const relatedOpps = opportunities.filter((o) => o.sector === "agriculture");

export default function AgricultureSectorPage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-[#0F3D24] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/agriculture/agriculture.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0F3D24]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-5 text-xs text-white/50">
            <Link href="/sectors" className="hover:text-white/80 transition-colors">Sectors</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#E6A817]">Agriculture</span>
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                Investment Case
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 font-[family-name:var(--font-playfair)]">
              Why Ghana's Agriculture Sector Deserves Your Attention
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Ghana imports over $300 million in food annually that it could produce at home.
              For the investor who understands what that gap means, agriculture is not a
              developing-world risk — it is a first-mover advantage.
            </p>
          </div>
        </div>
      </div>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Main editorial */}
            <article className="lg:col-span-2 space-y-12">

              {/* Part 1 */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    The Big Picture
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                  A continent feeding itself — and Ghana is at the centre
                </h2>
                <div className="space-y-4 text-[#2C2C2C]/70 text-base leading-relaxed">
                  <p>
                    Sub-Saharan Africa's food import bill exceeds $50 billion annually. Ghana alone
                    imports rice, poultry, tomato paste, and vegetable oil at a scale that strains its
                    foreign exchange reserves — despite sitting on highly fertile land, reliable rainfall
                    across most regions, and one of the best-irrigated watersheds in West Africa.
                  </p>
                  <p>
                    That mismatch between what Ghana imports and what Ghana could grow is not a policy
                    failure. It is an investment gap. The domestic production capacity simply has not kept
                    pace with a population that has doubled in 25 years and is urbanising fast. The
                    investor who closes that gap — or even a fraction of it — does not need to compete
                    on price with Asian exporters. They are supplying a market that their competitors
                    have to ship across an ocean to reach.
                  </p>
                  <p>
                    This is the essential case for agricultural investment in Ghana: not a long-shot bet on
                    an emerging frontier, but a structured play on a structural deficit in a stable country
                    with the soil, the climate, and the policy framework to support production at scale.
                  </p>
                </div>
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#C8900A] pl-6 py-2">
                <p className="text-xl text-[#0D1B2A] font-semibold italic font-[family-name:var(--font-playfair)] leading-snug">
                  "Ghana does not have an agricultural problem. It has an agricultural investment problem.
                  The land is there. The market is there. What is missing is capital and organisation."
                </p>
                <cite className="block text-sm text-[#2C2C2C]/50 mt-3 not-italic">
                  — NexusTrade Ghana, Investment Briefing 2025
                </cite>
              </blockquote>

              {/* Part 2 */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Why This Sector
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                  Three reasons agriculture stands out above other sectors
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-1">
                      01
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                        Domestic demand is guaranteed and growing
                      </h3>
                      <p className="text-[#2C2C2C]/65 text-sm leading-relaxed">
                        Unlike export-oriented manufacturing, agricultural investment in Ghana does not depend
                        on winning overseas buyers before you are profitable. The domestic market absorbs
                        everything you can produce — often at prices that undercut imported goods even without
                        subsidies. Ghana's population of 34 million is growing at 2.3% per year, its middle
                        class is expanding, and urban food demand in Accra and Kumasi far outpaces what local
                        producers currently supply. You are not finding a market. The market is waiting for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-1">
                      02
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                        The policy environment is actively favourable
                      </h3>
                      <p className="text-[#2C2C2C]/65 text-sm leading-relaxed">
                        Ghana's government has, for more than a decade, treated agriculture as a national
                        priority. The Planting for Food and Jobs initiative subsidises inputs. The Ghana
                        Irrigation Development Authority maintains and expands irrigation infrastructure.
                        GIPC designates commercial agriculture as a priority sector — meaning expedited
                        registration, faster land facilitation, and access to investment incentives including
                        a 5–10 year income tax holiday for qualifying agro-processing operations. These are
                        not token gestures; they materially reduce the cost and risk of entry.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-1">
                      03
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                        ECOWAS is 450 million consumers with one trade agreement
                      </h3>
                      <p className="text-[#2C2C2C]/65 text-sm leading-relaxed">
                        Ghana's membership of the Economic Community of West African States means that goods
                        produced in Ghana move duty-free into 14 neighbouring markets. For a rice farmer, a
                        poultry producer, or a cocoa processor, the addressable market is not 34 million
                        Ghanaians — it is 450 million West Africans. Ghana's transport infrastructure,
                        especially the road network and Tema Port, positions it as the natural production and
                        distribution hub for the entire sub-region. That is a competitive advantage that is
                        built into the geography and cannot be replicated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3 - Where to invest */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Where to Invest
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                  Not all of agriculture is equal — here is where the opportunity is clearest
                </h2>
                <p className="text-[#2C2C2C]/65 text-base leading-relaxed mb-8">
                  Ghana's agricultural landscape spans dozens of sub-sectors, but for a foreign investor
                  seeking a structured entry point with manageable risk and visible returns, a few areas
                  stand above the rest.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      crop: "Rice",
                      why: "Ghana imports 70% of its rice — a $300M+ annual gap. Northern Region irrigation schemes and fertile land make large-scale production viable today.",
                    },
                    {
                      crop: "Poultry",
                      why: "Urban protein demand is outpacing supply. Imported frozen chicken dominates, but domestic production costs are lower. Integrated farms with feed mills are the winning model.",
                    },
                    {
                      crop: "Cocoa Processing",
                      why: "Ghana is the world's No.2 cocoa producer yet exports mostly raw beans. Processing into butter, liquor, and powder adds 40–80% in value before export.",
                    },
                    {
                      crop: "Aquaculture",
                      why: "Fish is the primary protein source for most Ghanaian households. Domestic aquaculture is dramatically undersupplied. Tilapia and catfish farming carries low technical risk.",
                    },
                  ].map((item) => (
                    <div key={item.crop} className="bg-[#F8F5F0] rounded-xl p-5 border border-[#E5E0D8]">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1A5C38] flex-shrink-0" />
                        <h4 className="font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                          {item.crop}
                        </h4>
                      </div>
                      <p className="text-xs text-[#2C2C2C]/65 leading-relaxed">{item.why}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 4 — Honest risk note */}
              <div className="bg-[#0D1B2A] rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                  A word on risk — because credibility requires honesty
                </h3>
                <div className="space-y-3 text-white/65 text-sm leading-relaxed">
                  <p>
                    Agricultural investment in any developing market carries real risk. Land title complexity,
                    supply chain gaps, and weather variability are genuine considerations — and we will not
                    pretend otherwise.
                  </p>
                  <p>
                    What we will say is this: the risks are manageable, and they are well understood.
                    Ghana's Land Act 2020 has significantly improved title security. Modern irrigation
                    systems reduce weather dependency for large-scale operations. Structured joint ventures
                    with local cooperatives provide supply chain depth that would take years to build alone.
                  </p>
                  <p>
                    The investors who have succeeded in Ghana's agriculture sector have not succeeded by
                    ignoring these risks — they have succeeded by structuring their investments to
                    address them from the start. That is what NexusTrade exists to help you do.
                  </p>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick facts */}
              <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#E5E0D8] sticky top-28">
                <h3 className="font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                  Key Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { stat: "$300M+", label: "rice imports Ghana could replace" },
                    { stat: "44%", label: "of workforce employed in agriculture" },
                    { stat: "450M", label: "ECOWAS consumers — duty-free" },
                    { stat: "10 yrs", label: "income tax holiday for agro-processing" },
                    { stat: "#2", label: "global cocoa producer" },
                    { stat: "2×", label: "growing seasons per year in most regions" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3 pb-3 border-b border-[#E5E0D8] last:border-0 last:pb-0">
                      <span className="text-[#2C2C2C]/55 text-xs leading-relaxed">{item.label}</span>
                      <span className="text-[#1A5C38] font-bold text-sm flex-shrink-0">{item.stat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5E0D8] space-y-3">
                  <Link
                    href="/contact?sector=Agriculture"
                    className="block text-center bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-5 py-3 rounded text-sm transition-colors"
                  >
                    Request an Agriculture Briefing
                  </Link>
                  <Link
                    href="/opportunities"
                    className="block text-center border border-[#1A5C38] text-[#1A5C38] hover:bg-[#1A5C38] hover:text-white font-semibold px-5 py-3 rounded text-sm transition-colors"
                  >
                    View Live Opportunities
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Opportunities */}
      {relatedOpps.length > 0 && (
        <section className="py-16 bg-[#F8F5F0] border-t border-[#E5E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Live Listings
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                  Current agriculture opportunities
                </h2>
              </div>
              <Link href="/opportunities" className="hidden sm:flex items-center gap-1.5 text-sm text-[#1A5C38] font-semibold">
                All opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedOpps.map((opp) => (
                <Link
                  key={opp.slug}
                  href={`/opportunities/${opp.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg hover:border-transparent transition-all flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={opp.image}
                      alt={opp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-[#0D1B2A] font-bold text-sm mb-2 line-clamp-2 font-[family-name:var(--font-playfair)]">
                      {opp.title}
                    </h3>
                    <p className="text-[#2C2C2C]/55 text-xs leading-relaxed flex-1 line-clamp-3 mb-4">
                      {opp.shortDescription}
                    </p>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#2C2C2C]/50">{opp.region.split(",")[0]}</span>
                      <span className="text-[#1A5C38] font-bold">{opp.investmentRangeUSD}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Ready to explore Ghana's agriculture sector?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact NexusTrade Ghana for a personalised briefing on the agriculture
            opportunities that best match your investment profile.
          </p>
          <Link
            href="/contact?sector=Agriculture"
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
