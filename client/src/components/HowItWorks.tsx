import { Bell, Eye, MousePointerClick, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/brand/SectionShell";
import SmileDivider from "@/components/brand/SmileDivider";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: Bell,
      title: "Подпишись на канал",
      description:
        "Одно нажатие — и ты в теме. Новые вакансии каждый день прямо в Telegram.",
    },
    {
      icon: Eye,
      title: "Смотри свежие вакансии",
      description:
        "Мы собираем предложения из разных источников. Никакого мусора — только актуальные вакансии.",
    },
    {
      icon: MousePointerClick,
      title: "Откликайся первым",
      description:
        "Лучшие вакансии разбирают за часы. Подписчики канала видят их первыми и получают работу быстрее.",
    },
  ];

  return (
    <SectionShell ariaLabelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Как это работает
          </h2>
          <SmileDivider />
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mt-4">
            Три шага — и вакансии сами приходят к тебе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="godo-glass-card p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-godo-blue/15 flex items-center justify-center ring-1 ring-godo-blue/25">
                    <Icon className="w-7 h-7 text-godo-blue" />
                  </div>
                </div>
                <span className="inline-block text-xs font-bold text-godo-blue mb-3 tracking-wider">
                  ШАГ {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-sm mb-4">Занимает 5 секунд. Отписаться можно в любой момент.</p>
          <Button
            className="godo-btn py-3.5 px-8 h-auto text-base group"
            onClick={() => window.open('https://t.me/goDoMinsk', '_blank')}
          >
            <Bell className="w-5 h-5" />
            Подписаться сейчас
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </SectionShell>
  );
}
