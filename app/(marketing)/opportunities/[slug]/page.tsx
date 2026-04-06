import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, DollarSign, CheckCircle2 } from "lucide-react";
import {
  opportunities,
  getOpportunityBySlug,
  getOpportunitiesBySector,
} from "@/lib/data/opportunities";
import SectorGallery from "@/components/ui/sector-gallery";

export async function generateStaticParams() {
  return opportunities.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const opp = getOpportunityBySlug(slug);
  if (!opp) return {};
  return {
    title: opp.title,
    description: opp.shortDescription,
    openGraph: { images: [opp.image] },
  };
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const opp = getOpportunityBySlug(slug);
  if (!opp) notFound();

  const relatedOpps = getOpportunitiesBySector(opp.sector)
    .filter((o) => o.slug !== opp.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-80 lg:h-[480px] overflow-hidden">
        <Image
          src={opp.image}
          alt={opp.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/60">
              <Link href="/opportunities" className="hover:text-white transition-colors">
                Opportunities
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-[#E6A817]">{opp.sectorLabel}</span>
            </div>
            <div className="flex items-start gap-4 flex-wrap">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1A5C38] text-white">
                {opp.sectorLabel}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 font-[family-name:var(--font-playfair)] max-w-3xl">
              {opp.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Quick facts */}
      <div className="bg-[#0D1B2A] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            <div className="flex items-center gap-3 lg:px-6">
              <MapPin className="w-4 h-4 text-[#C8900A] flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-medium">{opp.region}</div>
                <div className="text-white/40 text-xs">Location</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:px-6">
              <DollarSign className="w-4 h-4 text-[#C8900A] flex-shrink-0" />
              <div>
                <div className="text-[#E6A817] text-sm font-bold">{opp.investmentRangeUSD}</div>
                <div className="text-white/40 text-xs">Investment Range (USD)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:px-6">
              <DollarSign className="w-4 h-4 text-[#C8900A] flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-medium">{opp.investmentRangeGHS}</div>
                <div className="text-white/40 text-xs">Investment Range (GHS)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:px-6">
              <div className="w-4 h-4 rounded-full bg-[#1A5C38] flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-medium">{opp.sectorLabel}</div>
                <div className="text-white/40 text-xs">Sector</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Opportunity Overview
                  </span>
                </div>
                <div className="space-y-4 text-[#2C2C2C]/70 leading-relaxed">
                  {opp.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Key Highlights
                  </span>
                </div>
                <div className="space-y-3">
                  {opp.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 p-4 bg-[#F8F5F0] rounded-lg border border-[#E5E0D8]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2C2C2C]/75 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#E5E0D8] sticky top-28">
                <h3 className="font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                  Interested in this opportunity?
                </h3>
                <p className="text-sm text-[#2C2C2C]/60 mb-6 leading-relaxed">
                  Contact NexusTrade Ghana to express interest and request a
                  detailed investment briefing.
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between py-2 border-b border-[#E5E0D8]">
                    <span className="text-[#2C2C2C]/50">Sector</span>
                    <span className="font-semibold text-[#0D1B2A]">{opp.sectorLabel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E5E0D8]">
                    <span className="text-[#2C2C2C]/50">Location</span>
                    <span className="font-semibold text-[#0D1B2A] text-right max-w-[140px]">{opp.region}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#2C2C2C]/50">Investment</span>
                    <span className="font-semibold text-[#1A5C38] text-right max-w-[140px]">{opp.investmentRangeUSD}</span>
                  </div>
                </div>

                <Link
                  href={`/contact?opportunity=${encodeURIComponent(opp.title)}&sector=${encodeURIComponent(opp.sectorLabel)}`}
                  className="block w-full text-center bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-5 py-3.5 rounded transition-colors mb-3"
                >
                  Express Interest
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-transparent border border-[#1A5C38] text-[#1A5C38] hover:bg-[#1A5C38] hover:text-white font-semibold px-5 py-3 rounded text-sm transition-colors"
                >
                  Request a Site Visit
                </Link>

                <p className="text-xs text-[#2C2C2C]/40 mt-4 leading-relaxed">
                  All enquiries are treated confidentially. NexusTrade does not
                  share investor details without consent.
                </p>
              </div>

              <div className="bg-[#0D1B2A] rounded-xl p-5">
                <p className="text-white/60 text-xs mb-2">Need more information first?</p>
                <Link href="/resources/how-to-invest" className="text-[#E6A817] text-sm font-medium hover:underline">
                  Read: How to Invest in Ghana →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {opp.galleryImages && opp.galleryImages.length > 0 && (
        <SectorGallery images={opp.galleryImages} sectorName={opp.sectorLabel} />
      )}


      {/* Related Opportunities */}
      {relatedOpps.length > 0 && (
        <section className="py-16 bg-[#F8F5F0] border-t border-[#E5E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                More {opp.sectorLabel} opportunities
              </h2>
              <Link href="/opportunities" className="text-sm text-[#1A5C38] font-medium flex items-center gap-1">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedOpps.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/opportunities/${rel.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg hover:border-transparent transition-all flex flex-col"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-sm font-bold text-[#0D1B2A] mb-1 line-clamp-2 font-[family-name:var(--font-playfair)]">{rel.title}</h3>
                    <p className="text-xs text-[#1A5C38] font-semibold">{rel.investmentRangeUSD}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
