import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F5F0] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[#1A5C38]/10 flex items-center justify-center mb-8">
        <span className="text-3xl font-bold text-[#1A5C38] font-[family-name:var(--font-playfair)]">
          ?
        </span>
      </div>
      <span className="text-[#C8900A] text-sm font-semibold uppercase tracking-widest mb-3">
        404 — Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
        Page not found
      </h1>
      <p className="text-[#2C2C2C]/60 text-lg mb-10 max-w-md leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1A5C38] hover:bg-[#0F3D24] text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          <Home className="w-4 h-4" />
          Go to Homepage
        </Link>
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 border border-[#1A5C38] text-[#1A5C38] hover:bg-[#1A5C38] hover:text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          View Opportunities
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
