import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, FileX, Banknote } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Умный бот в Telegram",
      description: "Голосом или текстом опиши что ищешь. Бот задаст уточняющие вопросы и найдёт подходящие вакансии."
    },
    {
      icon: Clock,
      title: "Всё в одном месте",
      description: "Все вакансии собраны в одном канале. Больше не нужно искать по разным Telegram-пабликам."
    },
    {
      icon: FileX,
      title: "Персонализированный подбор",
      description: "Бот подберёт только те вакансии, которые тебе подходят. Никакого спама и лишних предложений."
    },
    {
      icon: Banknote,
      title: "Быстрый найм",
      description: "Фокус на быстром трудоустройстве. Полная или частичная занятость — выбирай что удобно."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F7FF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему это удобно
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы убрали всё лишнее и оставили только то, что действительно важно для быстрой работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 group border-card-border">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#6B4BFF]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#6B4BFF]" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}