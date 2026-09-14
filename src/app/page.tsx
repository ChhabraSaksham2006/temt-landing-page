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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
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
