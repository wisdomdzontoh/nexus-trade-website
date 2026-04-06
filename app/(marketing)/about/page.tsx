"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Globe, Target, Award } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, SlideIn, ScaleIn } from "@/components/ui/animate";

const values = [
  {
    icon: Target,
    title: "Focused Expertise",
    description:
      "We specialise exclusively in Ghana's three highest-potential sectors — we know them deeply, not broadly.",
  },
  {
    icon: Globe,
    title: "Cross-Border Intelligence",
    description:
      "We understand both the international investor's perspective and Ghana's on-the-ground realities.",
  },
  {
    icon: Users,
    title: "Relationship-Led",
    description:
      "Our value comes from relationships built over years with regulators, landowners, and sector operators.",
  },
  {
    icon: Award,
    title: "Integrity First",
    description:
      "We present opportunities accurately, including risks — because long-term partnerships require honesty.",
  },
];

const team = [
  {
    name: "Awudu Ibrahim",
    role: "Co-Founder",
    bio: "Awudu brings extensive experience in investment facilitation across West Africa, with deep expertise in navigating Ghana's regulatory environment and building relationships between international capital and local opportunity.",
    photo: "/images/team/awudu-ibrahim-photo.png",
  },
  {
    name: "Seth Kunkyebe",
    role: "Co-Founder",
    bio: "Seth brings a strong background in business development and cross-border trade facilitation, with a focus on creating sustainable investment partnerships that drive growth across Ghana's key economic sectors.",
    photo: "/images/team/seth-kunkyebe-photo.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#0F3D24] pt-32 pb-16 relative overflow-hidden">
        {/* City buildings background */}
        <div className="absolute inset-0">
          <Image
            src="/images/city-buildings/building3.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0F3D24]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Who We Are
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              NexusTrade Ghana Limited is an investment facilitation company
              dedicated to connecting international investors with Ghana's most
              promising economic opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#C8900A]" />
                <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6 font-[family-name:var(--font-playfair)]">
                Bridging international capital with Ghana's growth
              </h2>
              <div className="space-y-4 text-[#2C2C2C]/70 leading-relaxed">
                <p>
                  NexusTrade Ghana was founded on a simple but powerful observation:
                  Ghana has extraordinary investment opportunities that the world
                  doesn't know about — and international investors who want to deploy
                  capital in Africa but don't know where to start.
                </p>
                <p>
                  We exist to close that gap. By combining deep local knowledge with
                  a structured, professional approach to investor engagement, we make
                  it easier for foreign investors to identify, evaluate, and commit to
                  real opportunities in Ghana's manufacturing, agricultural, and
                  industrial sectors.
                </p>
                <p>
                  We are not a fund. We do not hold or manage investor capital. We are
                  the on-the-ground guide that makes the journey from interest to
                  investment faster, safer, and more reliable.
                </p>
              </div>

              <div className="mt-8 p-5 bg-[#F8F5F0] border-l-4 border-[#1A5C38] rounded-r-lg">
                <p className="text-[#0D1B2A] font-semibold italic font-[family-name:var(--font-playfair)]">
                  "Your trusted gateway to Ghana's most promising investment
                  opportunities — from agriculture to industry."
                </p>
                <p className="text-[#2C2C2C]/50 text-sm mt-2">
                  — NexusTrade Ghana Core Value Proposition
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden h-96 lg:h-[480px]">
                <Image
                  src="/images/ghana/about-team.jpg"
                  alt="NexusTrade Ghana team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Stat overlay */}
              <div className="absolute -bottom-5 -left-5 bg-[#0D1B2A] rounded-xl p-5 shadow-xl">
                <span className="block text-3xl font-bold text-[#E6A817] font-[family-name:var(--font-playfair)]">
                  2025
                </span>
                <span className="block text-white/60 text-xs mt-1">
                  Established in Accra, Ghana
                </span>
              </div>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem><div className="bg-white rounded-xl p-8 border border-[#E5E0D8]">
              <h3 className="text-xl font-bold text-[#1A5C38] mb-5 font-[family-name:var(--font-playfair)]">
                ✓ What NexusTrade does
              </h3>
              <ul className="space-y-3">
                {[
                  "Identifies and curates high-quality investment opportunities",
                  "Provides detailed opportunity profiles and due diligence support",
                  "Navigates GIPC registration and regulatory approvals",
                  "Facilitates land acquisition and title due diligence",
                  "Arranges structured investor visits and site tours",
                  "Introduces investors to legal, financial, and sector advisors",
                  "Provides on-the-ground support during the investment process",
                  "Bridges language and cultural gaps for Asian and international investors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#2C2C2C]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#E5E0D8]">
              <h3 className="text-xl font-bold text-[#C8900A] mb-5 font-[family-name:var(--font-playfair)]">
                ✗ What NexusTrade does not do
              </h3>
              <ul className="space-y-3">
                {[
                  "We do not manage or hold investor funds",
                  "We are not a licensed investment fund or securities dealer",
                  "We do not provide legal or financial advice (we introduce qualified professionals)",
                  "We do not guarantee investment returns or outcomes",
                  "We do not act as a developer or contractor for investment projects",
                  "We do not replace the need for independent legal due diligence",
                  "We are not a government agency or affiliated with GIPC",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#2C2C2C]/70">
                    <span className="w-4 h-4 rounded-full border-2 border-[#C8900A]/40 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div></StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sectors visual strip */}
      <section className="py-12 bg-white border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-6">
            <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
              Sectors we operate in
            </span>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "/images/agriculture/agriculture.jpg", label: "Agriculture" },
              { src: "/images/coacoa/cocoa2.png", label: "Cocoa & Export Crops" },
              { src: "/images/shea-butter/shea1.png", label: "Shea Butter" },
              { src: "/images/manufacturing/garment-factory.jpg", label: "Manufacturing" },
              { src: "/images/industrial/tema-port.jpg", label: "Industrial Clusters" },
              { src: "/images/agriculture/ghana-rice-farm.jpg", label: "Rice & Grains" },
              { src: "/images/agriculture/poultry-farm-interior.jpg", label: "Poultry" },
              { src: "/images/ghana/ghana-market.jpg", label: "Trade & Commerce" },
            ].map((item) => (
              <StaggerItem key={item.src}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-32 rounded-xl overflow-hidden group cursor-default"
                >
                  <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
                  <span className="absolute bottom-2 left-3 text-white text-xs font-semibold">{item.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
              Our principles
            </h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className="text-center p-8 bg-[#F8F5F0] rounded-xl border border-[#E5E0D8]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A5C38]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#1A5C38]" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-[#C8900A]" />
              <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">Our Team</span>
              <div className="w-8 h-px bg-[#C8900A]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
              The people behind NexusTrade
            </h2>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl border border-[#E5E0D8] overflow-hidden"
              >
                <div className="relative h-72 bg-[#F8F5F0]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    loading={member.name === "Awudu Ibrahim" ? "eager" : "lazy"}
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-1 font-[family-name:var(--font-playfair)]">
                    {member.name}
                  </h3>
                  <span className="inline-block text-[#C8900A] text-sm font-semibold mb-4 px-3 py-1 bg-[#C8900A]/10 rounded-full">
                    {member.role}
                  </span>
                  <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <FadeUp className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Ready to explore Ghana's investment landscape?
          </h2>
          <p className="text-white/60 mb-8">
            Contact our team today to start a conversation about your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about/why-ghana"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm"
            >
              Why invest in Ghana? <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
