"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Why Ghana", href: "/about/why-ghana" },
    ],
  },
  {
    label: "Investment Sectors",
    href: "/sectors",
    children: [
      { label: "Agriculture", href: "/sectors/agriculture" },
      { label: "Manufacturing", href: "/sectors/manufacturing" },
      { label: "Industrial Clusters", href: "/sectors/industrial-clusters" },
    ],
  },
  { label: "Opportunities", href: "/opportunities" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "How to Invest in Ghana", href: "/resources/how-to-invest" },
      { label: "Investment Incentives", href: "/resources/incentives" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome || mobileOpen
          ? "bg-[#0F3D24] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/nexustrade_ghana_logo.svg"
              alt="NexusTrade Ghana"
              width={148}
              height={61}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-[#E6A817]"
                          : "text-white/90 hover:text-white"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className="absolute top-full left-0 pt-1 min-w-[200px]"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div
                        className={`bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                          openDropdown === item.label
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-3 text-sm transition-colors hover:bg-[#F8F5F0] ${
                              pathname === child.href
                                ? "text-[#1A5C38] font-semibold bg-[#F8F5F0]"
                                : "text-[#2C2C2C]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#E6A817]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#C8900A] hover:bg-[#E6A817] text-white text-sm font-semibold rounded transition-colors"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white rounded"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F3D24] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-[#E6A817] bg-white/5"
                      : "text-white/90 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 rounded text-sm transition-colors ${
                          pathname === child.href
                            ? "text-[#E6A817]"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-[#C8900A] hover:bg-[#E6A817] text-white text-sm font-semibold rounded transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
