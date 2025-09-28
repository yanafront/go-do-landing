import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, MessageSquare, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Создай профиль или задание",
      description: "Опиши свои навыки или задачу в несколько кликов. Никаких длинных анкет и резюме."
    },
    {
      icon: MessageSquare,
      title: "Получай отклики",
      description: "Мы сами найдём подходящих людей и отправим уведомления. Первые отклики за пару минут."
    },
    {
      icon: CheckCircle,
      title: "Работай или нанимай",
      description: "Выбирай лучший вариант и приступай к работе. Оплата в тот же день."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Три простых шага до результата. Никакой бюрократии и лишних действий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-300 border-card-border">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-chart-2" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Arrow indicators between steps on desktop */}
        <div className="hidden md:flex justify-center items-center mt-12 space-x-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-chart-2" />
            <div className="w-2 h-2 bg-chart-2 rounded-full" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-chart-2 to-chart-3" />
            <div className="w-2 h-2 bg-chart-3 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
