import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "NexusTrade Ghana — Your Gateway to Ghana's Investment Opportunities",
    template: "%s | NexusTrade Ghana",
  },
  description:
    "NexusTrade Ghana connects international investors with high-potential opportunities in Ghana's manufacturing, industrial, and agricultural sectors. Start your investment journey today.",
  keywords: [
    "Ghana investment",
    "invest in Ghana",
    "Ghana manufacturing",
    "Ghana agriculture investment",
    "industrial clusters Ghana",
    "foreign investment Ghana",
    "GIPC Ghana",
    "NexusTrade Ghana",
  ],
  metadataBase: new URL("https://nexustrade.gh"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexustrade.gh",
    siteName: "NexusTrade Ghana",
    title: "NexusTrade Ghana — Your Gateway to Ghana's Investment Opportunities",
    description:
      "Connecting international investors with Ghana's most promising sectors — manufacturing, agriculture, and industrial clusters.",
    images: [
      {
        url: "/images/hero-ghana.jpg",
        width: 1920,
        height: 1080,
        alt: "Ghana Investment Opportunities — NexusTrade Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusTrade Ghana — Ghana Investment Facilitation",
    description:
      "Connecting international investors with Ghana's most promising sectors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F5F0] text-[#2C2C2C]">
        {children}
      </body>
    </html>
  );
}
