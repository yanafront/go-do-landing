import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageHero from "@/components/brand/PageHero";
import { StepsGrid, BenefitsGrid } from "@/components/brand/FeatureGrid";
import { Users, Target, CheckCircle, Clock, Zap, Bell, Megaphone, BotMessageSquare } from "lucide-react";

export default function Employers() {
  return (
    <div className="min-h-screen bg-godo">
      <SEO
        title="Найти работника в Минске — разместить вакансию бесплатно"
        description="Разместите вакансию в Telegram-канале GoDo — её увидят тысячи подписчиков в Минске. Грузчики, курьеры, разнорабочие, мастера. Быстрые отклики, без посредников, бесплатно."
        canonical="/employers"
        keywords="найти работника Минск, разместить вакансию Минск, найти грузчика Минск, найти курьера Минск, найти разнорабочего Минск, работник на день Минск, персонал Минск, вакансия бесплатно Минск"
      />
      <Navigation />
      <main>
        <PageHero
          badge={
            <>
              <Megaphone className="w-4 h-4 text-godo-blue" />
              Размещение вакансий в Минске
            </>
          }
          title={
            <>
              <span className="text-white">Твоя вакансия — </span>
              <br className="hidden sm:block" />
              <span className="godo-heading-accent">в канале с тысячами подписчиков</span>
            </>
          }
          subtitle="Опубликуй вакансию — и её увидят подписчики канала в Минске. Быстрый отклик, живая аудитория, никаких посредников."
          ctaLabel="Разместить вакансию"
          ctaIcon={<Megaphone className="w-5 h-5" />}
          onCta={() => window.open('https://t.me/goDoMinsk', '_blank')}
          secondaryCtaLabel="Или через бота"
          secondaryCtaIcon={<BotMessageSquare className="w-5 h-5" />}
          onSecondaryCta={() => window.open('https://t.me/go_do_matcher_bot', '_blank')}
          stats={[
            { value: "2 мин", label: "до публикации" },
            { value: "1000+", label: "подписчиков в Минске" },
            { value: "24/7", label: "работает в Telegram" },
          ]}
          trust={[
            { icon: Bell, text: "Мгновенные уведомления" },
            { icon: CheckCircle, text: "Живая аудитория" },
            { icon: Zap, text: "Быстрый отклик" },
          ]}
        />
        <StepsGrid
          title="Как разместить вакансию в Минске"
          subtitle="Простой процесс — от публикации до отклика"
          steps={[
            {
              icon: Target,
              title: "Опиши задачу",
              description:
                "Напиши, кого ищешь и какие условия. Мы опубликуем вакансию в канале для подписчиков в Минске.",
            },
            {
              icon: Users,
              title: "Получай отклики",
              description:
                "Подписчики видят вакансию в ленте и откликаются. Ты выбираешь лучшего кандидата.",
            },
            {
              icon: CheckCircle,
              title: "Начинай работать",
              description:
                "Связывайся напрямую и приступай. Никаких комиссий и скрытых платежей.",
            },
          ]}
        />
        <BenefitsGrid
          title="Почему работодатели Минска выбирают наш канал"
          subtitle="Максимальный охват при минимальных усилиях"
          steps={[
            {
              icon: Clock,
              title: "Быстрые отклики",
              description: "Подписчики получают уведомления мгновенно — отклики приходят за минуты.",
            },
            {
              icon: Megaphone,
              title: "Широкий охват в Минске",
              description: "Тысячи подписчиков в Минске видят вашу вакансию в ленте Telegram-канала.",
            },
            {
              icon: Zap,
              title: "Без посредников",
              description: "Прямой контакт с кандидатами. Без комиссий, агентств и лишних шагов.",
            },
          ]}
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
