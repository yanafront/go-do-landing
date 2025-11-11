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
    <section className="py-24 bg-[#0C0A25] relative overflow-hidden" aria-labelledby="benefits-heading">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/20 to-[#3A7BFF]/20"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#FF4FC3]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#3A7BFF]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Почему это удобно
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Мы убрали всё лишнее и оставили только то, что действительно важно для быстрой работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 group border-white/10 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#6B4BFF]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#6B4BFF]" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70">
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