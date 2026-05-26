import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import SocialProofBanner from "@/components/SocialProofBanner";
import HowItWorks from "@/components/HowItWorks";
import UrgencyStrip from "@/components/UrgencyStrip";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsHook from "@/components/TestimonialsHook";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyChannelBar from "@/components/StickyChannelBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-godo">
      <SEO
        title="Работа в Минске — вакансии и подработка на сегодня"
        description="Свежие вакансии в Минске каждый день. Подработка без опыта, работа грузчиком, курьером, разнорабочим. Подпишись на Telegram-канал GoDo — все вакансии Минска в одном месте. Бесплатно."
        canonical="/"
        keywords="работа в Минске, вакансии Минск, подработка Минск, работа Минск сегодня, работа без опыта Минск, вакансии Минск свежие, подработка на день Минск, работа грузчик Минск, работа курьер Минск, найти работу Минск, GoDo"
      />
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofBanner />
        <HowItWorks />
        <UrgencyStrip />
        <BenefitsSection />
        <TestimonialsHook />
        <CTASection />
      </main>
      <Footer />
      <StickyChannelBar />
    </div>
  );
}
