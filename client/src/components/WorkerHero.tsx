import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, FileX, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function WorkerHero() {
  const painPoints = [
    {
      icon: DollarSign,
      title: "Нужны деньги сегодня",
      description: "Хочешь подработать прямо сейчас, но не знаешь где найти быстрые заказы"
    },
    {
      icon: Clock,
      title: "Сложно найти разовые заказы",
      description: "Много времени тратишь на поиск подходящей работы"
    },
    {
      icon: FileX,
      title: "Нет времени писать резюме",
      description: "Для простых задач не хочется заполнять длинные анкеты"
    },
    {
      icon: Users,
      title: "Много конкурентов на сайтах",
      description: "Теряешься среди сотен других кандидатов"
    }
  ];

  const solutions = [
    "Записываешь голосовое или пишешь пару строк о своих навыках",
    "Получаешь подходящие вакансии прямо в Telegram",
    "Откликаешься одним кликом на интересные заказы",
    "Получаешь оплату день в день после выполнения"
  ];

  const workCategories = [
    "Грузчики и разнорабочие",
    "Курьеры и доставка",
    "Мастера красоты и бьюти",
    "Студенты и подработки",
    "Ремонтники и мастера"
  ];

  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-chart-2/10 text-chart-2 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4 mr-2" />
            Заработок уже сегодня
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Быстрый заработок
            <span className="block text-chart-2">в тот же день</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Опиши, что умеешь — и начни получать заказы. Работай, когда удобно. 
            Деньги сразу после выполнения.
          </p>

          <Button 
            size="lg" 
            className="bg-chart-2 hover:bg-chart-2/90 text-white group px-8"
            data-testid="button-start-earning"
            onClick={() => console.log('Navigate to Telegram bot for workers')}
          >
            Подключиться к боту и начать зарабатывать
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Pain Points */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Знакомые проблемы с поиском работы?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <Card key={index} className="border-destructive/20 hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2 text-sm">
                      {pain.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
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
              <span className="block text-primary">Работай легко</span>
            </h2>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Популярные направления:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {workCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{category}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats */}
          <Card className="border-chart-2/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Что говорят цифры:
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-chart-2">5000+</div>
                  <div className="text-xs text-muted-foreground">активных исполнителей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-chart-2">2 мин</div>
                  <div className="text-xs text-muted-foreground">средний отклик</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-chart-2">95%</div>
                  <div className="text-xs text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Начни зарабатывать сейчас
              </h3>
              <p className="text-muted-foreground mb-6">
                Создай профиль за 2 минуты и получи первые заказы уже сегодня
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 w-full"
                data-testid="button-worker-cta"
                onClick={() => console.log('Navigate to Telegram bot for workers')}
              >
                Создать профиль исполнителя
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}