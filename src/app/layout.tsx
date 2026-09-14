import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Transport Emissions Management Tool | TEMT", template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "carbon accounting software",
    "transport emissions management",
    "scope 3 emissions tracking",
    "audit-ready carbon reporting",
    "enterprise carbon management",
    "GHG protocol compliant software",
    "supply chain emissions tracking",
    "CSRD reporting software",
    "carbon data pipeline",
    "SEC climate disclosure",
    "logistics carbon footprint",
    "freight emissions calculator",
    "fleet emissions tracking",
    "Scope 1 2 3 emissions software",
    "decarbonization platform"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Transport Emissions Management Tool | TEMT",
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TEMT Carbon Accounting Platform preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport Emissions Management Tool | TEMT",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans text-slate-600 bg-surface-background">
        {children}
      </body>
    </html>
  );
}
