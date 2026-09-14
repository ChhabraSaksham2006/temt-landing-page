import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { ExceptionManagement } from "@/components/sections/ExceptionManagement";
import { AccountingEstimator } from "@/components/sections/AccountingEstimator";
import { Workflow } from "@/components/sections/Workflow";
import { Automation } from "@/components/sections/Automation";
import { MonthEndClose } from "@/components/sections/MonthEndClose";
import { Reporting } from "@/components/sections/Reporting";
import { Integrations } from "@/components/sections/Integrations";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.toString(),
  description: siteDescription,
  logo: new URL("/favicon.ico", siteUrl).toString(),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
        <Hero />
        <TrustBar />
        <CoreCapabilities />
        <ProductExperience />
        <ExceptionManagement />
        <AccountingEstimator />
        <Workflow />
        <Automation />
        <MonthEndClose />
        <Reporting />
        <Integrations />
        <SecuritySection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
