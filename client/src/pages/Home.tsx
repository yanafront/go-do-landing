import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}