import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageHero from "@/components/brand/PageHero";
import { StepsGrid, BenefitsGrid } from "@/components/brand/FeatureGrid";
import {
  Zap,
  CheckCircle,
  Bell,
  BotMessageSquare,
  Eye,
  MousePointerClick,
  Clock,
  Users,
  Filter,
} from "lucide-react";

export default function Workers() {
  return (
    <div className="min-h-screen bg-godo">
      <SEO
        title="Ищу работу в Минске — свежие вакансии каждый день"
        description="Найди работу или подработку в Минске за минуту. Грузчики, курьеры, разнорабочие, мастера, студенты — вакансии без опыта и с опытом. Подпишись на Telegram-канал GoDo бесплатно."
        canonical="/workers"
        keywords="ищу работу Минск, найти работу Минск, подработка Минск сегодня, работа без опыта Минск, вакансии грузчик Минск, работа курьер Минск, подработка студенту Минск, разовая работа Минск, работа на день Минск"
      />
      <Navigation />
      <main>
        <PageHero
          badge={
            <>
              <Bell className="w-4 h-4 text-godo-blue" />
              Канал с вакансиями в Telegram
            </>
          }
          title={
            <>
              <span className="text-white">Свежие вакансии </span>
              <span className="godo-heading-accent">каждый день</span>
            </>
          }
          subtitle="Подпишись на канал — и получай лучшие вакансии Минска прямо в Telegram. Без резюме, без регистрации, без лишних шагов."
          ctaLabel="Подписаться на канал"
          ctaIcon={<Bell className="w-5 h-5" />}
          onCta={() => window.open('https://t.me/go_do_minsk', '_blank')}
          secondaryCtaLabel="Или открой бота"
          secondaryCtaIcon={<BotMessageSquare className="w-5 h-5" />}
          onSecondaryCta={() => window.open('https://t.me/go_do_job_bot', '_blank')}
          stats={[
            { value: "Ежедневно", label: "новые вакансии" },
            { value: "Всё в 1", label: "канале Telegram" },
            { value: "Бесплатно", label: "для всех" },
          ]}
          trust={[
            { icon: Bell, text: "Уведомления" },
            { icon: CheckCircle, text: "Проверенные" },
            { icon: Zap, text: "Мгновенно" },
          ]}
        />
        <StepsGrid
          title="Как начать получать вакансии в Минске"
          subtitle="Три простых шага — и работа сама придёт к тебе"
          steps={[
            {
              icon: Bell,
              title: "Подпишись на канал",
              description:
                "Нажми «Подписаться» в Telegram-канале @go_do_minsk. Вакансии Минска начнут приходить сразу.",
            },
            {
              icon: Eye,
              title: "Смотри предложения",
              description:
                "Каждый день — свежие вакансии из разных источников. Грузчики, курьеры, мастера, студенты.",
            },
            {
              icon: MousePointerClick,
              title: "Откликайся первым",
              description:
                "Нашёл подходящее — откликнись в один клик. Без резюме и долгих анкет.",
            },
          ]}
        />
        <BenefitsGrid
          title="Почему ищут работу через наш канал"
          subtitle="Всё для быстрого поиска работы в Минске"
          steps={[
            {
              icon: Clock,
              title: "Экономия времени",
              description: "Вместо часов поиска — открой канал. Вакансии Минска уже собраны за тебя.",
            },
            {
              icon: Filter,
              title: "Только актуальное",
              description: "Фильтруем дубли и просроченные. В канале — только живые вакансии.",
            },
            {
              icon: Users,
              title: "Разные направления",
              description: "Грузчики, курьеры, мастера, студенты, разнорабочие — подработка и полная занятость.",
            },
          ]}
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
