import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, FileX, Banknote } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Всё в Telegram",
      description: "Вакансии и исполнители прямо в мессенджере. Не нужно скачивать дополнительные приложения."
    },
    {
      icon: Clock,
      title: "Быстро и просто",
      description: "Размести задание или найди работу за пару минут. Первые отклики приходят мгновенно."
    },
    {
      icon: FileX,
      title: "Без лишних документов",
      description: "Никаких анкет, резюме и долгих собеседований. Только суть дела."
    },
    {
      icon: Banknote,
      title: "Деньги в тот же день",
      description: "Быстрая оплата сразу после выполнения работы. Зарабатывай уже сегодня."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему это удобно
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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