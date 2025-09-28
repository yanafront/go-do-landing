import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function EmployerHero() {
  const painPoints = [
    {
      icon: Clock,
      title: "Нужен человек «вчера»",
      description: "Срочные задачи накапливаются, а найти исполнителя быстро очень сложно"
    },
    {
      icon: Users,
      title: "Нет времени искать и обзванивать",
      description: "Вместо основной работы тратите часы на поиск нужных людей"
    },
    {
      icon: Zap,
      title: "На сайтах много лишних людей",
      description: "Тонете в откликах от неподходящих кандидатов"
    }
  ];

  const solutions = [
    "Заполняешь простую форму в боте за 2 минуты",
    "Мы сами рассылаем задание подходящим людям",
    "Первые отклики приходят за несколько минут",
    "Выбираешь лучшего и начинаешь работать"
  ];

  const workCategories = [
    "Грузчики и переезды",
    "Мастера ремонта",
    "Курьеры и доставка", 
    "Бьюти-мастера",
    "Студенты для разовых задач"
  ];

  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-chart-4/10 text-chart-4 text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Решение за 5 минут
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Найди работника
            <span className="block text-chart-4">за 5 минут</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Напиши задачу — и люди, которые могут её выполнить, получат уведомление. 
            Ты выбираешь, кто подойдёт лучше всего.
          </p>

          <Button 
            size="lg" 
            className="bg-chart-4 hover:bg-chart-4/90 text-white group px-8"
            data-testid="button-post-job"
            onClick={() => console.log('Navigate to Telegram bot for employers')}
          >
            Разместить вакансию в боте
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Pain Points */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Знакомые проблемы?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <Card key={index} className="border-destructive/20 hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pain.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Наше решение:
              <span className="block text-chart-2">Просто и быстро</span>
            </h2>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-chart-2" />
                  </div>
                  <p className="text-muted-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-chart-2/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Какие задачи решаем:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {workCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-chart-2 rounded-full" />
                    <span className="text-muted-foreground">{category}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Готов попробовать?
              </h3>
              <p className="text-muted-foreground mb-6">
                Размести первое задание бесплатно и получи отклики уже через несколько минут
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                data-testid="button-employer-cta"
                onClick={() => console.log('Navigate to Telegram bot for employers')}
              >
                Разместить вакансию сейчас
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}